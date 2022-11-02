var ki = Object.defineProperty;
var xi = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var L = (e, t, n) => (xi(e, typeof t != "symbol" ? t + "" : t, n), n), ro = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var v = (e, t, n) => (ro(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, o) => (ro(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var q = (e, t, n) => (ro(e, t, "access private method"), n);
var Kn, H, jr, Wr, Rt, Yo, mn = {}, Ir = [], Ei = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Br(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Xn(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Kn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return ln(e, a, o, s, null);
}
function ln(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++jr : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function $i() {
  return { current: null };
}
function Jn(e) {
  return e.children;
}
function cn(e, t) {
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
function Ur(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ur(e);
  }
}
function Go(e) {
  (!e.__d && (e.__d = !0) && Rt.push(e) && !yn.__r++ || Yo !== H.debounceRendering) && ((Yo = H.debounceRendering) || setTimeout)(yn);
}
function yn() {
  for (var e; yn.__r = Rt.length; )
    e = Rt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Rt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Te({}, r)).__v = r.__v + 1, mo(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? dt(r) : a, r.__h), qr(o, r), r.__e != a && Ur(r)));
    });
}
function zr(e, t, n, o, s, r, a, l, f, h) {
  var i, d, u, c, p, b, _, g = o && o.__k || Ir, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? ln(null, c, null, null, c) : Array.isArray(c) ? ln(Jn, { children: c }, null, null, null) : c.__b > 0 ? ln(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      mo(e, c, u = u || mn, s, r, a, l, f, h), p = c.__e, (d = c.ref) && u.ref != d && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(d, c.__c || p, c)), p != null ? (b == null && (b = p), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Fr(c, f, e) : f = Vr(e, c, u, g, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = dt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = dt(o, i + 1)), Gr(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Yr(_[i], _[++i], _[++i]);
}
function Fr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Fr(o, t, n) : Vr(n, o, o, s, o.__e, t));
  return t;
}
function Vr(e, t, n, o, s, r) {
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
function Ci(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bn(e, r, t[r], n[r], o);
}
function Ko(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ei.test(t) ? n : n + "px";
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
            n && t in n || Ko(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ko(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Jo : Xo, r) : e.removeEventListener(t, r ? Jo : Xo, r);
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
function Xo(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function Jo(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function mo(e, t, n, o, s, r, a, l, f) {
  var h, i, d, u, c, p, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new cn(_, m), i.constructor = y, i.render = Ri), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Te({}, i.__s)), Te(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, p);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = H.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Te(Te({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Jn && h.key == null ? h.props.children : h, zr(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Si(n.__e, t, n, o, s, r, a, f);
    (h = H.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), H.__e(E, t, n);
  }
}
function qr(e, t) {
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
function Si(e, t, n, o, s, r, a, l) {
  var f, h, i, d = n.props, u = t.props, c = t.type, p = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((f = r[p]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    d === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Kn.call(e.childNodes), h = (d = n.props || mn).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ci(e, u, d, s, l), i)
      t.__k = [];
    else if (p = t.props.children, zr(e, Array.isArray(p) ? p : [p], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && dt(n, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && Br(r[p]);
    l || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || c === "progress" && !p || c === "option" && p !== d.value) && bn(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && bn(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Yr(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function Gr(e, t, n) {
  var o, s;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Yr(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Gr(o[s], t, typeof e.type != "function");
  n || e.__e == null || Br(e.__e), e.__e = e.__d = void 0;
}
function Ri(e, t, n) {
  return this.constructor(e, n);
}
function Ai(e, t, n) {
  var o, s, r;
  H.__ && H.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], mo(t, e = (!o && n || t).__k = Xn(Jn, null, [e]), s || mn, mn, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Kn.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), qr(r, e);
}
Kn = Ir.slice, H = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, jr = 0, Wr = function(e) {
  return e != null && e.constructor === void 0;
}, cn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof e == "function" && (e = e(Te({}, n), this.props)), e && Te(n, e), e != null && this.__v && (t && this.__h.push(t), Go(this));
}, cn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Go(this));
}, cn.prototype.render = Jn, Rt = [], yn.__r = 0;
var be;
class Mi {
  constructor(t = "") {
    $(this, be, void 0);
    typeof t == "object" ? R(this, be, t) : R(this, be, document.appendChild(document.createComment(t)));
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
const io = /* @__PURE__ */ new Set([
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
class yo extends Mi {
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
    return typeof t == "string" && (io.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(yo.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (io.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var we, Ft, Ye, St;
class Zo extends yo {
  constructor(n = "", o) {
    super(n);
    $(this, Ye);
    $(this, we, /* @__PURE__ */ new Map());
    $(this, Ft, void 0);
    R(this, Ft, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = q(this, Ye, St).call(this, n), super.on(n, o, s), v(this, we).set(o, [n, s]);
  }
  off(n, o, s) {
    n = q(this, Ye, St).call(this, n), super.off(n, o, s), v(this, we).delete(o);
  }
  once(n, o, s) {
    n = q(this, Ye, St).call(this, n);
    const r = (a) => {
      o(a), v(this, we).delete(r);
    };
    super.once(n, r, s), v(this, we).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = q(this, Ye, St).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, we).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), v(this, we).clear();
  }
}
we = new WeakMap(), Ft = new WeakMap(), Ye = new WeakSet(), St = function(n) {
  const o = v(this, Ft);
  return io.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Oi(e, t) {
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
function Li(e, t, n) {
  const o = Oi(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function fn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function wn(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (fn(e) && fn(n))
    for (const o in n)
      fn(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), wn(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return wn(e, ...t);
}
function tt(e, ...t) {
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
var bo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(bo || {});
function Ni(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / bo[n]).toFixed(t) + n);
}
const Pi = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * bo[o];
};
var Dr, Hr;
let wo = (Hr = (Dr = document.documentElement.getAttribute("lang")) == null ? void 0 : Dr.toLowerCase()) != null ? Hr : "zh_cn", Oe;
function Ti() {
  return wo;
}
function Di(e) {
  wo = e.toLowerCase();
}
function Hi(e, t) {
  Oe || (Oe = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), wn(Oe, e);
}
function Zt(e, t, n, o, s, r) {
  Array.isArray(e) ? Oe && e.unshift(Oe) : e = Oe ? [Oe, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const a = s || wo;
  let l;
  for (const f of e) {
    if (!f)
      continue;
    const h = f[a];
    if (!h)
      continue;
    const i = r && f === Oe ? `${r}.${t}` : t;
    if (l = Li(h, i), l !== void 0)
      break;
  }
  return l === void 0 ? o : n ? tt(l, ...Array.isArray(n) ? n : [n]) : l;
}
Zt.addLang = Hi;
Zt.getCode = Ti;
Zt.setCode = Di;
function ji(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var ke, nt, Z;
class kn {
  constructor(t, n) {
    $(this, ke, void 0);
    $(this, nt, void 0);
    $(this, Z, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && R(this, Z, new Zo(t, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, ke, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? ji(t.dataset) : null, ...n }), this.constructor.all.set(t, this), R(this, nt, t), this.init(), (o = v(this, Z)) == null || o.emit("inited", this);
  }
  get options() {
    return v(this, ke);
  }
  get element() {
    return v(this, nt);
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
    this.constructor.all.delete(v(this, nt)), v(this, Z) && (v(this, Z).emit("destroyed", this), v(this, Z).offAll());
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
    var a;
    let o = Zo.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, ke)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (a = v(this, Z)) == null ? void 0 : a.emit(o), o;
  }
  i18n(t, n, o) {
    var s;
    return (s = Zt(v(this, ke).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
ke = new WeakMap(), nt = new WeakMap(), Z = new WeakMap(), L(kn, "EVENTS", !1), L(kn, "allComponents", /* @__PURE__ */ new Map());
class ko extends kn {
  constructor() {
    super(...arguments);
    L(this, "ref", $i());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    Ai(/* @__PURE__ */ Xn(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var xo, W, Kr, Xr, At, Qo, Jr = {}, Zr = [], Wi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return un(e, a, o, s, null);
}
function un(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Kr : s };
  return s == null && W.vnode != null && W.vnode(r), r;
}
function Ii() {
  return { current: null };
}
function Eo(e) {
  return e.children;
}
function Mt(e, t) {
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
function es(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return es(e);
  }
}
function er(e) {
  (!e.__d && (e.__d = !0) && At.push(e) && !xn.__r++ || Qo !== W.debounceRendering) && ((Qo = W.debounceRendering) || setTimeout)(xn);
}
function xn() {
  for (var e; xn.__r = At.length; )
    e = At.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), At = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = De({}, r)).__v = r.__v + 1, rs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? _t(r) : a, r.__h), Ui(o, r), r.__e != a && es(r)));
    });
}
function ts(e, t, n, o, s, r, a, l, f, h) {
  var i, d, u, c, p, b, _, g = o && o.__k || Zr, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? un(null, c, null, null, c) : Array.isArray(c) ? un(Eo, { children: c }, null, null, null) : c.__b > 0 ? un(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      rs(e, c, u = u || Jr, s, r, a, l, f, h), p = c.__e, (d = c.ref) && u.ref != d && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(d, c.__c || p, c)), p != null ? (b == null && (b = p), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ns(c, f, e) : f = os(e, c, u, g, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = _t(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = _t(o, i + 1)), is(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      ss(_[i], _[++i], _[++i]);
}
function ns(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ns(o, t, n) : os(n, o, o, s, o.__e, t));
  return t;
}
function os(e, t, n, o, s, r) {
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
function Bi(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || En(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || En(e, r, t[r], n[r], o);
}
function tr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wi.test(t) ? n : n + "px";
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
            n && t in n || tr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || tr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? or : nr, r) : e.removeEventListener(t, r ? or : nr, r);
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
function nr(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function or(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function rs(e, t, n, o, s, r, a, l, f) {
  var h, i, d, u, c, p, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Mt(_, m), i.constructor = y, i.render = Fi), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = De({}, i.__s)), De(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, p);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = W.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = De(De({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Eo && h.key == null ? h.props.children : h, ts(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zi(n.__e, t, n, o, s, r, a, f);
    (h = W.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), W.__e(E, t, n);
  }
}
function Ui(e, t) {
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
function zi(e, t, n, o, s, r, a, l) {
  var f, h, i, d = n.props, u = t.props, c = t.type, p = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((f = r[p]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    d === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && xo.call(e.childNodes), h = (d = n.props || Jr).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bi(e, u, d, s, l), i)
      t.__k = [];
    else if (p = t.props.children, ts(e, Array.isArray(p) ? p : [p], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && _t(n, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && Qr(r[p]);
    l || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || c === "progress" && !p || c === "option" && p !== d.value) && En(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && En(e, "checked", p, d.checked, !1));
  }
  return e;
}
function ss(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function is(e, t, n) {
  var o, s;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ss(o, null, t)), (o = e.__c) != null) {
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
      o[s] && is(o[s], t, typeof e.type != "function");
  n || e.__e == null || Qr(e.__e), e.__e = e.__d = void 0;
}
function Fi(e, t, n) {
  return this.constructor(e, n);
}
xo = Zr.slice, W = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Kr = 0, Xr = function(e) {
  return e != null && e.constructor === void 0;
}, Mt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof e == "function" && (e = e(De({}, n), this.props)), e && De(n, e), e != null && this.__v && (t && this.__h.push(t), er(this));
}, Mt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), er(this));
}, Mt.prototype.render = Eo, At = [], xn.__r = 0;
const T = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? T(...n) : typeof n == "function" ? T(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const s = n[o];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Vi({
  component: e = "div",
  className: t,
  children: n,
  attrs: o
}) {
  return ee(e, {
    className: T(t),
    ...o
  }, n);
}
function qi({
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
  hint: d,
  style: u,
  onClick: c
}) {
  const p = [
    typeof l == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${l}`
    }) : l,
    /* @__PURE__ */ ee("span", {
      className: "text"
    }, f),
    n,
    typeof i == "string" ? /* @__PURE__ */ ee("i", {
      class: `icon ${i}`
    }) : i
  ];
  return ee(e, {
    className: T(t, { disabled: r, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ...p);
}
function Yi({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: a
}) {
  return ee(e, {
    className: T(t),
    style: r,
    onClick: a,
    ...o
  }, n, s);
}
function Gi({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: a,
  children: l
}) {
  return ee(e, {
    className: T(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: a,
    ...r
  }, l);
}
function Ki(e) {
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
  } = e, d = [n], u = { ...o }, c = [], p = [];
  return s.forEach((b) => {
    var g;
    const _ = [];
    typeof b == "string" && l && l[b] && (b = l[b]), typeof b == "function" ? f ? _.push(...f.call(a, b, c, ...r)) : _.push(...(g = b.call(a, c, ...r)) != null ? g : []) : _.push(b), _.forEach((m) => {
      var w;
      m != null && (typeof m == "object" && !Wr(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ Xn("div", {
          className: T(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? p.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), p.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(d),
    style: u,
    ...i
  }, c];
}
function ao({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Ki(t);
  return Xn(e, n, ...o);
}
function Xi(e) {
  return /* @__PURE__ */ ee(ao, {
    ...e
  });
}
const Wo = class extends Mt {
  constructor() {
    super(...arguments);
    L(this, "ref", Ii());
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
  onRenderItem(n, o) {
    const { type: s = "item", component: r, key: a = o, rootAttrs: l, rootClass: f, rootStyle: h, ...i } = n, d = !r || typeof r == "string" ? this.constructor.ItemComponents ? this.constructor.ItemComponents[s] : Wo.ItemComponents[s] : r;
    return Object.assign(i, {
      type: s,
      component: typeof r == "string" ? r : void 0
    }), /* @__PURE__ */ ee("li", {
      className: T(`${this.name}-${s}`, f),
      style: h,
      key: a,
      ...l
    }, /* @__PURE__ */ ee(d, {
      ...i
    }));
  }
  renderItem(n, o, s) {
    var i;
    const { itemRender: r, defaultItemProps: a, onClickItem: l } = n, f = { key: s, ...o }, h = (i = f.type) != null ? i : "item";
    if (a && Object.assign(f, a[h]), (l || o.onClick) && (f.onClick = this.handleItemClick.bind(this, f, s, o.onClick)), f.className = T(f.className), r) {
      if (typeof r == "object") {
        const d = r[h];
        if (d)
          return /* @__PURE__ */ ee(d, {
            ...f
          });
      } else if (typeof r == "function") {
        const d = r.call(this, f, ee);
        if (Xr(d))
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
      className: a,
      items: l,
      children: f,
      itemRender: h,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: c,
      ...p
    } = n;
    return /* @__PURE__ */ ee("menu", {
      class: T(this.name, a),
      ...p,
      ref: this.ref
    }, l && l.map(this.renderItem.bind(this, n)), f);
  }
};
let Ot = Wo;
L(Ot, "ItemComponents", {
  divider: Vi,
  item: qi,
  heading: Yi,
  space: Gi,
  custom: Xi
});
class Ji extends ko {
}
L(Ji, "Component", Ot);
class Zi extends Ot {
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), n && (t.className = T(t.className, "has-icons")), t;
  }
}
class as extends ko {
}
L(as, "Component", Zi);
var $o, I, ls, Lt, rr, cs = {}, fs = [], Qi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function us(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sr(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $o.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return hn(e, a, o, s, null);
}
function hn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ls : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Co(e) {
  return e.children;
}
function Nt(e, t) {
  this.props = e, this.context = t;
}
function vt(e, t) {
  if (t == null)
    return e.__ ? vt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? vt(e) : null;
}
function hs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hs(e);
  }
}
function ir(e) {
  (!e.__d && (e.__d = !0) && Lt.push(e) && !$n.__r++ || rr !== I.debounceRendering) && ((rr = I.debounceRendering) || setTimeout)($n);
}
function $n() {
  for (var e; $n.__r = Lt.length; )
    e = Lt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Lt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = He({}, r)).__v = r.__v + 1, vs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? vt(r) : a, r.__h), ta(o, r), r.__e != a && hs(r)));
    });
}
function ps(e, t, n, o, s, r, a, l, f, h) {
  var i, d, u, c, p, b, _, g = o && o.__k || fs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? hn(null, c, null, null, c) : Array.isArray(c) ? hn(Co, { children: c }, null, null, null) : c.__b > 0 ? hn(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      vs(e, c, u = u || cs, s, r, a, l, f, h), p = c.__e, (d = c.ref) && u.ref != d && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(d, c.__c || p, c)), p != null ? (b == null && (b = p), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ds(c, f, e) : f = _s(e, c, u, g, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = vt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = vt(o, i + 1)), ms(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      gs(_[i], _[++i], _[++i]);
}
function ds(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ds(o, t, n) : _s(n, o, o, s, o.__e, t));
  return t;
}
function _s(e, t, n, o, s, r) {
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
function ea(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Cn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Cn(e, r, t[r], n[r], o);
}
function ar(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Qi.test(t) ? n : n + "px";
}
function Cn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ar(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ar(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? cr : lr, r) : e.removeEventListener(t, r ? cr : lr, r);
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
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function cr(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function vs(e, t, n, o, s, r, a, l, f) {
  var h, i, d, u, c, p, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Nt(_, m), i.constructor = y, i.render = oa), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = He({}, i.__s)), He(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, p);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = I.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = He(He({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Co && h.key == null ? h.props.children : h, ps(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = na(n.__e, t, n, o, s, r, a, f);
    (h = I.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), I.__e(E, t, n);
  }
}
function ta(e, t) {
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
function na(e, t, n, o, s, r, a, l) {
  var f, h, i, d = n.props, u = t.props, c = t.type, p = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((f = r[p]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    d === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && $o.call(e.childNodes), h = (d = n.props || cs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ea(e, u, d, s, l), i)
      t.__k = [];
    else if (p = t.props.children, ps(e, Array.isArray(p) ? p : [p], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && vt(n, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && us(r[p]);
    l || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || c === "progress" && !p || c === "option" && p !== d.value) && Cn(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Cn(e, "checked", p, d.checked, !1));
  }
  return e;
}
function gs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function ms(e, t, n) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || gs(o, null, t)), (o = e.__c) != null) {
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
      o[s] && ms(o[s], t, typeof e.type != "function");
  n || e.__e == null || us(e.__e), e.__e = e.__d = void 0;
}
function oa(e, t, n) {
  return this.constructor(e, n);
}
$o = fs.slice, I = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ls = 0, Nt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof e == "function" && (e = e(He({}, n), this.props)), e && He(n, e), e != null && this.__v && (t && this.__h.push(t), ir(this));
}, Nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ir(this));
}, Nt.prototype.render = Co, Lt = [], $n.__r = 0;
var Ge, Ke;
class fr extends Nt {
  constructor(n) {
    var o;
    super(n);
    $(this, Ge, 0);
    $(this, Ke, null);
    L(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, Ge) && cancelAnimationFrame(v(this, Ge)), R(this, Ge, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), R(this, Ge, 0);
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
    n && (R(this, Ke, typeof n == "string" ? document : n.current), v(this, Ke).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
      style: a,
      left: l,
      top: f,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: c } = this.state, p = {
      left: l,
      top: f,
      bottom: h,
      right: i,
      ...a
    }, b = {};
    return o === "horz" ? (p.height = s, p.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, u) * (n - b.width) / d)) : (p.width = s, p.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, u) * (n - b.height) / d)), /* @__PURE__ */ sr("div", {
      className: T("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ sr("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Ge = new WeakMap(), Ke = new WeakMap();
function ra(e) {
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
function sa(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function ia(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: ra,
  domReady: sa,
  isElementVisible: ia,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
let aa = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Vt, Le, fe, ot, rt, pn;
const Io = class {
  constructor(t, n = "local") {
    $(this, rt);
    $(this, Vt, void 0);
    $(this, Le, void 0);
    $(this, fe, void 0);
    $(this, ot, void 0);
    R(this, Vt, n), R(this, Le, `ZUI_STORE:${t != null ? t : aa()}`), R(this, fe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return v(this, Vt);
  }
  get session() {
    return this.type === "session" ? this : (v(this, ot) || R(this, ot, new Io(v(this, Le), "session")), v(this, ot));
  }
  get(t, n) {
    const o = v(this, fe).getItem(q(this, rt, pn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    v(this, fe).setItem(q(this, rt, pn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    v(this, fe).removeItem(q(this, rt, pn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < v(this, fe).length; n++) {
      const o = v(this, fe).key(n);
      if (o != null && o.startsWith(v(this, Le))) {
        const s = v(this, fe).getItem(o);
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
let Sn = Io;
Vt = new WeakMap(), Le = new WeakMap(), fe = new WeakMap(), ot = new WeakMap(), rt = new WeakSet(), pn = function(t) {
  return `${v(this, Le)}:${t}`;
};
const la = new Sn("DEFAULT");
function ca(e, t = "local") {
  return new Sn(e, t);
}
Object.assign(la, { create: ca });
var So, B, ys, Pt, ur, bs = {}, ws = [], fa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ks(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function hr(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? So.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return dn(e, a, o, s, null);
}
function dn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ys : s };
  return s == null && B.vnode != null && B.vnode(r), r;
}
function Ro(e) {
  return e.children;
}
function Tt(e, t) {
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
function xs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xs(e);
  }
}
function pr(e) {
  (!e.__d && (e.__d = !0) && Pt.push(e) && !Rn.__r++ || ur !== B.debounceRendering) && ((ur = B.debounceRendering) || setTimeout)(Rn);
}
function Rn() {
  for (var e; Rn.__r = Pt.length; )
    e = Pt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Pt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, Ss(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? gt(r) : a, r.__h), ha(o, r), r.__e != a && xs(r)));
    });
}
function Es(e, t, n, o, s, r, a, l, f, h) {
  var i, d, u, c, p, b, _, g = o && o.__k || ws, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? dn(null, c, null, null, c) : Array.isArray(c) ? dn(Ro, { children: c }, null, null, null) : c.__b > 0 ? dn(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      Ss(e, c, u = u || bs, s, r, a, l, f, h), p = c.__e, (d = c.ref) && u.ref != d && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(d, c.__c || p, c)), p != null ? (b == null && (b = p), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = $s(c, f, e) : f = Cs(e, c, u, g, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = gt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = gt(o, i + 1)), As(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Rs(_[i], _[++i], _[++i]);
}
function $s(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? $s(o, t, n) : Cs(n, o, o, s, o.__e, t));
  return t;
}
function Cs(e, t, n, o, s, r) {
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
function ua(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || An(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || An(e, r, t[r], n[r], o);
}
function dr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fa.test(t) ? n : n + "px";
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? vr : _r, r) : e.removeEventListener(t, r ? vr : _r, r);
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
function _r(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function vr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Ss(e, t, n, o, s, r, a, l, f) {
  var h, i, d, u, c, p, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new Tt(_, m), i.constructor = y, i.render = da), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, p);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = B.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Ro && h.key == null ? h.props.children : h, Es(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = pa(n.__e, t, n, o, s, r, a, f);
    (h = B.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), B.__e(E, t, n);
  }
}
function ha(e, t) {
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
function pa(e, t, n, o, s, r, a, l) {
  var f, h, i, d = n.props, u = t.props, c = t.type, p = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((f = r[p]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    d === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && So.call(e.childNodes), h = (d = n.props || bs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ua(e, u, d, s, l), i)
      t.__k = [];
    else if (p = t.props.children, Es(e, Array.isArray(p) ? p : [p], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && gt(n, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && ks(r[p]);
    l || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || c === "progress" && !p || c === "option" && p !== d.value) && An(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && An(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Rs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function As(e, t, n) {
  var o, s;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Rs(o, null, t)), (o = e.__c) != null) {
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
      o[s] && As(o[s], t, typeof e.type != "function");
  n || e.__e == null || ks(e.__e), e.__e = e.__d = void 0;
}
function da(e, t, n) {
  return this.constructor(e, n);
}
So = ws.slice, B = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ys = 0, Tt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof e == "function" && (e = e(je({}, n), this.props)), e && je(n, e), e != null && this.__v && (t && this.__h.push(t), pr(this));
}, Tt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pr(this));
}, Tt.prototype.render = Ro, Pt = [], Rn.__r = 0;
class Cc extends Tt {
  render() {
    const { size: t, rounded: n, className: o, style: s, src: r, text: a, children: l, ...f } = this.props, h = [o], i = { ...s };
    let d = null;
    return r ? d = /* @__PURE__ */ hr("img", {
      src: r,
      alt: a
    }) : d = a, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && h.push(`avatar-${t}`), typeof n == "string" && h.push(`rounded-${n}`), /* @__PURE__ */ hr("div", {
      className: T(h),
      style: i,
      ...f
    }, d, l);
  }
}
function _a() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function va() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function ga(e, t) {
  _a(), e.classList.add("block"), gr(e, t), e.onclick = (n) => ma(n, e), window.addEventListener("resize", () => {
    gr(e, t);
  });
}
function Ms(e) {
  var t;
  va(), (t = e.classList) == null || t.remove("block");
}
function gr(e, t) {
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
function ma(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Ms(t));
}
function ya(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = ya(n);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    ga(s, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && Ms(t);
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
function Qe(e) {
  var t = oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ne(e) {
  var t = oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ao(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ze = Math.max, Mn = Math.min, mt = Math.round;
function lo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Os() {
  return !/^((?!chrome|android).)*safari/i.test(lo());
}
function yt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && ne(e) && (s = e.offsetWidth > 0 && mt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && mt(o.height) / e.offsetHeight || 1);
  var a = Qe(e) ? oe(e) : window, l = a.visualViewport, f = !Os() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, d = o.width / s, u = o.height / r;
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
function Mo(e) {
  var t = oe(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function ba(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wa(e) {
  return e === oe(e) || !ne(e) ? Mo(e) : ba(e);
}
function _e(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ue(e) {
  return ((Qe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Oo(e) {
  return yt(Ue(e)).left + Mo(e).scrollLeft;
}
function le(e) {
  return oe(e).getComputedStyle(e);
}
function Lo(e) {
  var t = le(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function ka(e) {
  var t = e.getBoundingClientRect(), n = mt(t.width) / e.offsetWidth || 1, o = mt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function xa(e, t, n) {
  n === void 0 && (n = !1);
  var o = ne(t), s = ne(t) && ka(t), r = Ue(t), a = yt(e, s, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((_e(t) !== "body" || Lo(r)) && (l = wa(t)), ne(t) ? (f = yt(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : r && (f.x = Oo(r))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ls(e) {
  var t = yt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Zn(e) {
  return _e(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ao(e) ? e.host : null) || Ue(e);
}
function Ns(e) {
  return ["html", "body", "#document"].indexOf(_e(e)) >= 0 ? e.ownerDocument.body : ne(e) && Lo(e) ? e : Ns(Zn(e));
}
function Dt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ns(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = oe(o), a = s ? [r].concat(r.visualViewport || [], Lo(o) ? o : []) : o, l = t.concat(a);
  return s ? l : l.concat(Dt(Zn(a)));
}
function Ea(e) {
  return ["table", "td", "th"].indexOf(_e(e)) >= 0;
}
function mr(e) {
  return !ne(e) || le(e).position === "fixed" ? null : e.offsetParent;
}
function $a(e) {
  var t = /firefox/i.test(lo()), n = /Trident/i.test(lo());
  if (n && ne(e)) {
    var o = le(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Zn(e);
  for (Ao(s) && (s = s.host); ne(s) && ["html", "body"].indexOf(_e(s)) < 0; ) {
    var r = le(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Qn(e) {
  for (var t = oe(e), n = mr(e); n && Ea(n) && le(n).position === "static"; )
    n = mr(n);
  return n && (_e(n) === "html" || _e(n) === "body" && le(n).position === "static") ? t : n || $a(e) || t;
}
var ae = "top", ve = "bottom", Be = "right", $e = "left", eo = "auto", to = [ae, ve, Be, $e], bt = "start", Wt = "end", Ca = "clippingParents", Ps = "viewport", Ct = "popper", Sa = "reference", yr = /* @__PURE__ */ to.reduce(function(e, t) {
  return e.concat([t + "-" + bt, t + "-" + Wt]);
}, []), Ra = /* @__PURE__ */ [].concat(to, [eo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bt, t + "-" + Wt]);
}, []), Aa = "beforeRead", Ma = "read", Oa = "afterRead", La = "beforeMain", Na = "main", Pa = "afterMain", Ta = "beforeWrite", Da = "write", Ha = "afterWrite", co = [Aa, Ma, Oa, La, Na, Pa, Ta, Da, Ha];
function ja(e) {
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
function Wa(e) {
  var t = ja(e);
  return co.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Ia(e) {
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
var qe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ba = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', br = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ua(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), br).filter(function(n, o, s) {
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
          co.indexOf(t.phase) < 0 && console.error(Me(qe, t.name, '"phase"', "either " + co.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + br.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Me(Ba, String(t.name), o, o));
      });
    });
  });
}
function za(e, t) {
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
function Fa(e) {
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
function Va(e, t) {
  var n = oe(e), o = Ue(e), s = n.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, f = 0;
  if (s) {
    r = s.width, a = s.height;
    var h = Os();
    (h || !h && t === "fixed") && (l = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + Oo(e),
    y: f
  };
}
function qa(e) {
  var t, n = Ue(e), o = Mo(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Ze(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Ze(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + Oo(e), f = -o.scrollTop;
  return le(s || n).direction === "rtl" && (l += Ze(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: f
  };
}
function Ya(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ao(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function fo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ga(e, t) {
  var n = yt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wr(e, t, n) {
  return t === Ps ? fo(Va(e, n)) : Qe(t) ? Ga(t, n) : fo(qa(Ue(e)));
}
function Ka(e) {
  var t = Dt(Zn(e)), n = ["absolute", "fixed"].indexOf(le(e).position) >= 0, o = n && ne(e) ? Qn(e) : e;
  return Qe(o) ? t.filter(function(s) {
    return Qe(s) && Ya(s, o) && _e(s) !== "body";
  }) : [];
}
function Xa(e, t, n, o) {
  var s = t === "clippingParents" ? Ka(e) : [].concat(t), r = [].concat(s, [n]), a = r[0], l = r.reduce(function(f, h) {
    var i = wr(e, h, o);
    return f.top = Ze(i.top, f.top), f.right = Mn(i.right, f.right), f.bottom = Mn(i.bottom, f.bottom), f.left = Ze(i.left, f.left), f;
  }, wr(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function wt(e) {
  return e.split("-")[1];
}
function Ts(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ds(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Ce(o) : null, r = o ? wt(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case ae:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ve:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Be:
      f = {
        x: t.x + t.width,
        y: l
      };
      break;
    case $e:
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
  var h = s ? Ts(s) : null;
  if (h != null) {
    var i = h === "y" ? "height" : "width";
    switch (r) {
      case bt:
        f[h] = f[h] - (t[i] / 2 - n[i] / 2);
        break;
      case Wt:
        f[h] = f[h] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Hs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ja(e) {
  return Object.assign({}, Hs(), e);
}
function Za(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function No(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, a = r === void 0 ? e.strategy : r, l = n.boundary, f = l === void 0 ? Ca : l, h = n.rootBoundary, i = h === void 0 ? Ps : h, d = n.elementContext, u = d === void 0 ? Ct : d, c = n.altBoundary, p = c === void 0 ? !1 : c, b = n.padding, _ = b === void 0 ? 0 : b, g = Ja(typeof _ != "number" ? _ : Za(_, to)), m = u === Ct ? Sa : Ct, w = e.rects.popper, k = e.elements[p ? m : u], x = Xa(Qe(k) ? k : k.contextElement || Ue(e.elements.popper), f, i, a), y = yt(e.elements.reference), E = Ds({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), C = fo(Object.assign({}, w, E)), M = u === Ct ? C : y, N = {
    top: x.top - M.top + g.top,
    bottom: M.bottom - x.bottom + g.bottom,
    left: x.left - M.left + g.left,
    right: M.right - x.right + g.right
  }, O = e.modifiersData.offset;
  if (u === Ct && O) {
    var V = O[s];
    Object.keys(N).forEach(function(z) {
      var re = [Be, ve].indexOf(z) >= 0 ? 1 : -1, Y = [ae, ve].indexOf(z) >= 0 ? "y" : "x";
      N[z] += V[Y] * re;
    });
  }
  return N;
}
var kr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Qa = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", xr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Er() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function el(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? xr : s;
  return function(l, f, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xr, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, c = {
      state: i,
      setOptions: function(g) {
        var m = typeof g == "function" ? g(i.options) : g;
        b(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: Qe(l) ? Dt(l) : l.contextElement ? Dt(l.contextElement) : [],
          popper: Dt(f)
        };
        var w = Wa(Fa([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = za([].concat(w, i.options.modifiers), function(O) {
            var V = O.name;
            return V;
          });
          if (Ua(k), Ce(i.options.placement) === eo) {
            var x = i.orderedModifiers.find(function(O) {
              var V = O.name;
              return V === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = le(f), E = y.marginTop, C = y.marginRight, M = y.marginBottom, N = y.marginLeft;
          [E, C, M, N].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!u) {
          var g = i.elements, m = g.reference, w = g.popper;
          if (!Er(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(kr);
            return;
          }
          i.rects = {
            reference: xa(m, Qn(w), i.options.strategy === "fixed"),
            popper: Ls(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var k = 0, x = 0; x < i.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Qa);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, x = -1;
              continue;
            }
            var y = i.orderedModifiers[x], E = y.fn, C = y.options, M = C === void 0 ? {} : C, N = y.name;
            typeof E == "function" && (i = E({
              state: i,
              options: M,
              name: N,
              instance: c
            }) || i);
          }
        }
      },
      update: Ia(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(i);
        });
      }),
      destroy: function() {
        b(), u = !0;
      }
    };
    if (!Er(l, f))
      return process.env.NODE_ENV !== "production" && console.error(kr), c;
    c.setOptions(h).then(function(_) {
      !u && h.onFirstUpdate && h.onFirstUpdate(_);
    });
    function p() {
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
          d.push(x || y);
        }
      });
    }
    function b() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return c;
  };
}
var sn = {
  passive: !0
};
function tl(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, f = oe(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, sn);
  }), l && f.addEventListener("resize", n.update, sn), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, sn);
    }), l && f.removeEventListener("resize", n.update, sn);
  };
}
const nl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tl,
  data: {}
};
function ol(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ds({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const rl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ol,
  data: {}
};
var sl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function il(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: mt(t * s) / s || 0,
    y: mt(n * s) / s || 0
  };
}
function $r(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, l = e.position, f = e.gpuAcceleration, h = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, c = u === void 0 ? 0 : u, p = a.y, b = p === void 0 ? 0 : p, _ = typeof i == "function" ? i({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var g = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), w = $e, k = ae, x = window;
  if (h) {
    var y = Qn(n), E = "clientHeight", C = "clientWidth";
    if (y === oe(n) && (y = Ue(n), le(y).position !== "static" && l === "absolute" && (E = "scrollHeight", C = "scrollWidth")), y = y, s === ae || (s === $e || s === Be) && r === Wt) {
      k = ve;
      var M = d && y === x && x.visualViewport ? x.visualViewport.height : y[E];
      b -= M - o.height, b *= f ? 1 : -1;
    }
    if (s === $e || (s === ae || s === ve) && r === Wt) {
      w = Be;
      var N = d && y === x && x.visualViewport ? x.visualViewport.width : y[C];
      c -= N - o.width, c *= f ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, h && sl), V = i === !0 ? il({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = V.x, b = V.y, f) {
    var z;
    return Object.assign({}, O, (z = {}, z[k] = m ? "0" : "", z[w] = g ? "0" : "", z.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", z));
  }
  return Object.assign({}, O, (t = {}, t[k] = m ? b + "px" : "", t[w] = g ? c + "px" : "", t.transform = "", t));
}
function al(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, a = r === void 0 ? !0 : r, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var h = le(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return h.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: Ce(t.placement),
    variation: wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $r(Object.assign({}, i, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $r(Object.assign({}, i, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ll = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: al,
  data: {}
};
function cl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !ne(r) || !_e(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function fl(e) {
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
      !ne(s) || !_e(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const ul = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cl,
  effect: fl,
  requires: ["computeStyles"]
};
var hl = [nl, rl, ll, ul], pl = /* @__PURE__ */ el({
  defaultModifiers: hl
});
function dl(e) {
  return e === "x" ? "y" : "x";
}
function _n(e, t, n) {
  return Ze(e, Mn(t, n));
}
function _l(e, t, n) {
  var o = _n(e, t, n);
  return o > n ? n : o;
}
function vl(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, h = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, c = u === void 0 ? !0 : u, p = n.tetherOffset, b = p === void 0 ? 0 : p, _ = No(t, {
    boundary: f,
    rootBoundary: h,
    padding: d,
    altBoundary: i
  }), g = Ce(t.placement), m = wt(t.placement), w = !m, k = Ts(g), x = dl(k), y = t.modifiersData.popperOffsets, E = t.rects.reference, C = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, N = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var z, re = k === "y" ? ae : $e, Y = k === "y" ? ve : Be, j = k === "y" ? "height" : "width", X = y[k], Se = X + _[re], ge = X - _[Y], et = c ? -C[j] / 2 : 0, me = m === bt ? E[j] : C[j], Re = m === bt ? -C[j] : -E[j], ze = t.elements.arrow, ye = c && ze ? Ls(ze) : {
        width: 0,
        height: 0
      }, S = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hs(), P = S[re], F = S[Y], G = _n(0, E[j], ye[j]), se = w ? E[j] / 2 - et - G - P - N.mainAxis : me - G - P - N.mainAxis, Fe = w ? -E[j] / 2 + et + G + F + N.mainAxis : Re + G + F + N.mainAxis, Ae = t.elements.arrow && Qn(t.elements.arrow), en = Ae ? k === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0 : 0, tn = (z = O == null ? void 0 : O[k]) != null ? z : 0, no = X + se - tn - en, D = X + Fe - tn, $t = _n(c ? Mn(Se, no) : Se, X, c ? Ze(ge, D) : ge);
      y[k] = $t, V[k] = $t - X;
    }
    if (l) {
      var Ve, nn = k === "x" ? ae : $e, on = k === "x" ? ve : Be, ce = y[x], rn = x === "y" ? "height" : "width", Bo = ce + _[nn], Uo = ce - _[on], oo = [ae, $e].indexOf(g) !== -1, zo = (Ve = O == null ? void 0 : O[x]) != null ? Ve : 0, Fo = oo ? Bo : ce - E[rn] - C[rn] - zo + N.altAxis, Vo = oo ? ce + E[rn] + C[rn] - zo - N.altAxis : Uo, qo = c && oo ? _l(Fo, ce, Vo) : _n(c ? Fo : Bo, ce, c ? Vo : Uo);
      y[x] = qo, V[x] = qo - ce;
    }
    t.modifiersData[o] = V;
  }
}
const gl = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vl,
  requiresIfExists: ["offset"]
};
var ml = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function vn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ml[t];
  });
}
var yl = {
  start: "end",
  end: "start"
};
function Cr(e) {
  return e.replace(/start|end/g, function(t) {
    return yl[t];
  });
}
function bl(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? Ra : f, i = wt(o), d = i ? l ? yr : yr.filter(function(p) {
    return wt(p) === i;
  }) : to, u = d.filter(function(p) {
    return h.indexOf(p) >= 0;
  });
  u.length === 0 && (u = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = u.reduce(function(p, b) {
    return p[b] = No(e, {
      placement: b,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[Ce(b)], p;
  }, {});
  return Object.keys(c).sort(function(p, b) {
    return c[p] - c[b];
  });
}
function wl(e) {
  if (Ce(e) === eo)
    return [];
  var t = vn(e);
  return [Cr(e), t, Cr(t)];
}
function kl(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, h = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, c = n.flipVariations, p = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, _ = t.options.placement, g = Ce(_), m = g === _, w = f || (m || !p ? [vn(_)] : wl(_)), k = [_].concat(w).reduce(function(ye, S) {
      return ye.concat(Ce(S) === eo ? bl(t, {
        placement: S,
        boundary: i,
        rootBoundary: d,
        padding: h,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : S);
    }, []), x = t.rects.reference, y = t.rects.popper, E = /* @__PURE__ */ new Map(), C = !0, M = k[0], N = 0; N < k.length; N++) {
      var O = k[N], V = Ce(O), z = wt(O) === bt, re = [ae, ve].indexOf(V) >= 0, Y = re ? "width" : "height", j = No(t, {
        placement: O,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: h
      }), X = re ? z ? Be : $e : z ? ve : ae;
      x[Y] > y[Y] && (X = vn(X));
      var Se = vn(X), ge = [];
      if (r && ge.push(j[V] <= 0), l && ge.push(j[X] <= 0, j[Se] <= 0), ge.every(function(ye) {
        return ye;
      })) {
        M = O, C = !1;
        break;
      }
      E.set(O, ge);
    }
    if (C)
      for (var et = p ? 3 : 1, me = function(S) {
        var P = k.find(function(F) {
          var G = E.get(F);
          if (G)
            return G.slice(0, S).every(function(se) {
              return se;
            });
        });
        if (P)
          return M = P, "break";
      }, Re = et; Re > 0; Re--) {
        var ze = me(Re);
        if (ze === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const xl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kl,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function El(e) {
  return e.button === 2;
}
var Xe, te, st, qt, it;
class ie extends kn {
  constructor() {
    super(...arguments);
    $(this, Xe, void 0);
    $(this, te, void 0);
    $(this, st, void 0);
    $(this, qt, void 0);
    $(this, it, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, Xe) || this._ensureMenu();
  }
  get popper() {
    return v(this, te) ? v(this, te) : this._createPopper();
  }
  get trigger() {
    return v(this, qt) || this.element;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return R(this, qt, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || (this.options.items || this.options.menu) && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = v(this, te)) == null || o.destroy(), R(this, te, void 0), (s = v(this, Xe)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = v(this, te)) == null || n.destroy(), super.destroy(), this.options.menu && ((o = v(this, Xe)) == null || o.remove());
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
    return R(this, Xe, s), s;
  }
  _getPopperOptions() {
    return {
      modifiers: [gl, xl],
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return v(this, te) ? v(this, te).setOptions(n) : R(this, te, pl(this._getPopperElement(), this.menu, n)), v(this, te);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (v(this, it) ? v(this, it).render(n) : R(this, it, new as(this.menu, n)), !0);
  }
  _getPopperElement() {
    return v(this, st) || R(this, st, {
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
    }), v(this, st);
  }
  static clear(n) {
    n && El(n) || this.getAll().forEach((o) => o.hide());
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
Xe = new WeakMap(), te = new WeakMap(), st = new WeakMap(), qt = new WeakMap(), it = new WeakMap(), L(ie, "EVENTS", !0), L(ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), L(ie, "MENU_CLASS", "contextmenu"), L(ie, "CLASS_SHOW", "show"), L(ie, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ie.MENU_CLASS}`))
    return;
  const n = t.closest(ie.MENU_SELECTOR);
  n && (ie.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ie.clear.bind(ie));
var Po = "top", js = "bottom", On = "right", It = "left", $l = "auto", Ws = [Po, js, On, It], Cl = "start", Sl = "end", Rl = /* @__PURE__ */ [].concat(Ws, [$l]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Cl, t + "-" + Sl]);
}, []);
function Is(e) {
  return e.split("-")[0];
}
function xt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bs(e) {
  var t = xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Bt(e) {
  var t = xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function To(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Al = Math.max, Ml = Math.min, Sr = Math.round;
function uo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ol() {
  return !/^((?!chrome|android).)*safari/i.test(uo());
}
function Ll(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && Bt(e) && (s = e.offsetWidth > 0 && Sr(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Sr(o.height) / e.offsetHeight || 1);
  var a = Bs(e) ? xt(e) : window, l = a.visualViewport, f = !Ol() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, d = o.width / s, u = o.height / r;
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
function Nl(e) {
  var t = Ll(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Pl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && To(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function zt(e) {
  return xt(e).getComputedStyle(e);
}
function Tl(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function Dl(e) {
  return ((Bs(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Hl(e) {
  return Ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (To(e) ? e.host : null) || Dl(e);
}
function Rr(e) {
  return !Bt(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function jl(e) {
  var t = /firefox/i.test(uo()), n = /Trident/i.test(uo());
  if (n && Bt(e)) {
    var o = zt(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Hl(e);
  for (To(s) && (s = s.host); Bt(s) && ["html", "body"].indexOf(Ut(s)) < 0; ) {
    var r = zt(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Wl(e) {
  for (var t = xt(e), n = Rr(e); n && Tl(n) && zt(n).position === "static"; )
    n = Rr(n);
  return n && (Ut(n) === "html" || Ut(n) === "body" && zt(n).position === "static") ? t : n || jl(e) || t;
}
function Il(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bl(e, t, n) {
  return Al(e, Ml(t, n));
}
function Ul() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function zl(e) {
  return Object.assign({}, Ul(), e);
}
function Fl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Vl = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, zl(typeof t != "number" ? t : Fl(t, Ws));
};
function ql(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Is(n.placement), f = Il(l), h = [It, On].indexOf(l) >= 0, i = h ? "height" : "width";
  if (!(!r || !a)) {
    var d = Vl(s.padding, n), u = Nl(r), c = f === "y" ? Po : It, p = f === "y" ? js : On, b = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], _ = a[f] - n.rects.reference[f], g = Wl(r), m = g ? f === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, w = b / 2 - _ / 2, k = d[c], x = m - u[i] - d[p], y = m / 2 - u[i] / 2 + w, E = Bl(k, y, x), C = f;
    n.modifiersData[o] = (t = {}, t[C] = E, t.centerOffset = E - y, t);
  }
}
function Yl(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  if (s != null && !(typeof s == "string" && (s = t.elements.popper.querySelector(s), !s))) {
    if (process.env.NODE_ENV !== "production" && (Bt(s) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Pl(t.elements.popper, s)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = s;
  }
}
const Gl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ql,
  effect: Yl,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Kl(e, t, n) {
  var o = Is(e), s = [It, Po].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = r[0], l = r[1];
  return a = a || 0, l = (l || 0) * s, [It, On].indexOf(o) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Xl(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, a = Rl.reduce(function(i, d) {
    return i[d] = Kl(d, t.rects, r), i;
  }, {}), l = a[t.placement], f = l.x, h = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = a;
}
const Jl = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Xl
};
var at, lt, ct, Hn, Us;
class Ie extends ie {
  constructor() {
    super(...arguments);
    $(this, Hn);
    $(this, at, !1);
    $(this, lt, 0);
    L(this, "hideLater", () => {
      v(this, ct).call(this), R(this, lt, window.setTimeout(this.hide.bind(this), 300));
    });
    $(this, ct, () => {
      clearTimeout(v(this, lt)), R(this, lt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  show(n) {
    const o = super.show(n);
    return o && !v(this, at) && this.isHover && q(this, Hn, Us).call(this), o;
  }
  destroy() {
    v(this, at) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, ct)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Gl, options: {
      padding: o,
      element: ".dropdown-arrow"
    } }, {
      ...Jl,
      options: {
        offset: [0, o + ((s = this.options.offset) != null ? s : 0)]
      }
    }), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      o.classList.add("dropdown-arrow"), o.style.setProperty("--dropdown-arrow-size", `${this._getArrowSize()}px`), n.prepend(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...s) => {
        var a;
        const r = this.menu.querySelector(".dropdown-arrow");
        r && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(r), this.popper.update()), o == null || o(...s);
      };
    }
    return n;
  }
}
at = new WeakMap(), lt = new WeakMap(), ct = new WeakMap(), Hn = new WeakSet(), Us = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, ct)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, at, !0);
}, L(Ie, "MENU_CLASS", "dropdown-menu"), L(Ie, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ie.MENU_SELECTOR);
  n ? Ie.ensure(n).toggle() : Ie.clear(e);
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ie.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ie.ensure(n);
  o.isHover && o.show();
});
var Do, U, zs, Fs, Ht, Ar, Vs = {}, qs = [], Zl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ys(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function A(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Do.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return gn(e, a, o, s, null);
}
function gn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++zs : s };
  return s == null && U.vnode != null && U.vnode(r), r;
}
function Ql() {
  return { current: null };
}
function Ho(e) {
  return e.children;
}
function jt(e, t) {
  this.props = e, this.context = t;
}
function kt(e, t) {
  if (t == null)
    return e.__ ? kt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kt(e) : null;
}
function Gs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gs(e);
  }
}
function Mr(e) {
  (!e.__d && (e.__d = !0) && Ht.push(e) && !Ln.__r++ || Ar !== U.debounceRendering) && ((Ar = U.debounceRendering) || setTimeout)(Ln);
}
function Ln() {
  for (var e; Ln.__r = Ht.length; )
    e = Ht.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ht = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = We({}, r)).__v = r.__v + 1, Zs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? kt(r) : a, r.__h), tc(o, r), r.__e != a && Gs(r)));
    });
}
function Ks(e, t, n, o, s, r, a, l, f, h) {
  var i, d, u, c, p, b, _, g = o && o.__k || qs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? gn(null, c, null, null, c) : Array.isArray(c) ? gn(Ho, { children: c }, null, null, null) : c.__b > 0 ? gn(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      Zs(e, c, u = u || Vs, s, r, a, l, f, h), p = c.__e, (d = c.ref) && u.ref != d && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(d, c.__c || p, c)), p != null ? (b == null && (b = p), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Xs(c, f, e) : f = Js(e, c, u, g, p, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = kt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = kt(o, i + 1)), ei(g[i], g[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Qs(_[i], _[++i], _[++i]);
}
function Xs(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Xs(o, t, n) : Js(n, o, o, s, o.__e, t));
  return t;
}
function Js(e, t, n, o, s, r) {
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
function ec(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Nn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Nn(e, r, t[r], n[r], o);
}
function Or(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Zl.test(t) ? n : n + "px";
}
function Nn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Or(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Or(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Nr : Lr, r) : e.removeEventListener(t, r ? Nr : Lr, r);
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
function Lr(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function Nr(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function Zs(e, t, n, o, s, r, a, l, f) {
  var h, i, d, u, c, p, b, _, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (_ = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(_, m) : (t.__c = i = new jt(_, m), i.constructor = y, i.render = oc), g && g.sub(i), i.props = _, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = We({}, i.__s)), We(i.__s, y.getDerivedStateFromProps(_, i.__s))), u = i.props, c = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = _, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, p);
          });
        }
        if (i.context = m, i.props = _, i.__v = t, i.__P = e, w = U.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = We(We({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Ho && h.key == null ? h.props.children : h, Ks(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = nc(n.__e, t, n, o, s, r, a, f);
    (h = U.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), U.__e(E, t, n);
  }
}
function tc(e, t) {
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
function nc(e, t, n, o, s, r, a, l) {
  var f, h, i, d = n.props, u = t.props, c = t.type, p = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((f = r[p]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    d === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Do.call(e.childNodes), h = (d = n.props || Vs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ec(e, u, d, s, l), i)
      t.__k = [];
    else if (p = t.props.children, Ks(e, Array.isArray(p) ? p : [p], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && kt(n, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && Ys(r[p]);
    l || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || c === "progress" && !p || c === "option" && p !== d.value) && Nn(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Nn(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Qs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function ei(e, t, n) {
  var o, s;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qs(o, null, t)), (o = e.__c) != null) {
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
      o[s] && ei(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ys(e.__e), e.__e = e.__d = void 0;
}
function oc(e, t, n) {
  return this.constructor(e, n);
}
Do = qs.slice, U = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, zs = 0, Fs = function(e) {
  return e != null && e.constructor === void 0;
}, jt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof e == "function" && (e = e(We({}, n), this.props)), e && We(n, e), e != null && this.__v && (t && this.__h.push(t), Mr(this));
}, jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Mr(this));
}, jt.prototype.render = Ho, Ht = [], Ln.__r = 0;
let rc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function sc(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function jo({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: f, ...h }) {
  var y, E;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: d, border: u } = e.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = ["dtable-cell-content", t], _ = [(E = l != null ? l : (y = o.data) == null ? void 0 : y[e.name]) != null ? E : ""], g = s ? s(_, { row: o, col: e }, A) : _, m = [], w = [], k = {}, x = {};
  return g == null || g.forEach((C) => {
    var M;
    if (typeof C == "object" && C && !Fs(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C)) {
      const N = C.outer ? m : w;
      C.html ? N.push(/* @__PURE__ */ A("div", {
        className: T("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(M = C.attrs) != null ? M : {}
      })) : (C.style && Object.assign(C.outer ? i : c, C.style), C.className && (C.outer ? p : b).push(C.className), C.children && N.push(C.children), C.attrs && Object.assign(C.outer ? k : x, C.attrs));
    } else
      w.push(C);
  }), /* @__PURE__ */ A("div", {
    className: T(p),
    style: i,
    "data-col": e.name,
    ...h,
    ...k
  }, w.length > 0 && /* @__PURE__ */ A("div", {
    className: T(b),
    style: c,
    ...x
  }, w), m);
}
function ic({ col: e, children: t, style: n, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ A(jo, {
    col: e,
    style: { ...n, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ A("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), t);
}
function so({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = jo, onRenderCell: f }) {
  return /* @__PURE__ */ A("div", {
    className: T("dtable-cells", t),
    style: { top: n, left: o, width: s, height: r }
  }, a.map((h) => h.visible ? /* @__PURE__ */ A(l, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: f
  }) : null));
}
function ti({
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
  scrollLeft: d,
  CellComponent: u = jo,
  onRenderCell: c,
  style: p,
  ...b
}) {
  let _ = null;
  s != null && s.length && (_ = /* @__PURE__ */ A(so, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let g = null;
  a != null && a.length && (g = /* @__PURE__ */ A(so, {
    className: "dtable-flexable",
    cols: a,
    left: l - d,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ A(so, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ A("div", {
    className: T("dtable-row", t),
    style: w,
    "data-id": e.id,
    ...b
  }, _, g, m);
}
function ac({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: ic
  };
  if (t) {
    const s = t({ props: o }, A);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ A(ti, {
    ...o
  }));
}
function lc({
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
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ A("div", {
    className: T("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - a,
      height: r,
      ...f
    }, d = l == null ? void 0 : l({ props: i, row: h }, A);
    return d && Object.assign(i, d), /* @__PURE__ */ A(ti, {
      ...i
    });
  }));
}
const Pn = /* @__PURE__ */ new Map(), Tn = [];
function ni(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Pn.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Pn.set(n, e), (t == null ? void 0 : t.buildIn) && !Tn.includes(n) && Tn.push(n);
}
function Qt(e, t) {
  ni(e, t);
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
function oi(e) {
  return Pn.delete(e);
}
function cc(e) {
  if (typeof e == "string") {
    const t = Pn.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function ri(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = cc(o);
    !s || n.has(s.name) || ((r = s.plugins) != null && r.length && ri(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function fc(e = [], t = !0) {
  return t && Tn.length && e.unshift(...Tn), e != null && e.length ? ri([], e, /* @__PURE__ */ new Set()) : [];
}
function Pr() {
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
var Je, ft, Ne, xe, Pe, K, ue, he, ut, Yt, Gt, Ee, ht, pt, jn, si, Wn, ii, In, ai, Bn, li, Kt, po, Un, zn, Xt, Jt, Fn, Vn, qn, ci, Yn, fi, Gn, ui;
class ho extends jt {
  constructor(n) {
    var o;
    super(n);
    $(this, jn);
    $(this, Wn);
    $(this, In);
    $(this, Bn);
    $(this, Kt);
    $(this, qn);
    $(this, Yn);
    $(this, Gn);
    L(this, "ref", Ql());
    $(this, Je, 0);
    $(this, ft, void 0);
    $(this, Ne, !1);
    $(this, xe, void 0);
    $(this, Pe, void 0);
    $(this, K, []);
    $(this, ue, void 0);
    $(this, he, /* @__PURE__ */ new Map());
    $(this, ut, {});
    $(this, Yt, void 0);
    $(this, Gt, []);
    L(this, "updateLayout", () => {
      v(this, Je) && cancelAnimationFrame(v(this, Je)), R(this, Je, requestAnimationFrame(() => {
        R(this, ue, void 0), this.forceUpdate(), R(this, Je, 0);
      }));
    });
    $(this, Ee, (n, o) => {
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
    $(this, ht, (n) => {
      v(this, Ee).call(this, n, `window_${n.type}`);
    });
    $(this, pt, (n) => {
      v(this, Ee).call(this, n, `document_${n.type}`);
    });
    $(this, Un, (n, o) => {
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
    $(this, zn, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, K).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    $(this, Xt, (n, o, s) => {
      const { row: r, col: a } = o;
      n[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, o, s)), this.options[l] && (n = this.options[l].call(this, n, o, s)), v(this, K).forEach((f) => {
        f[l] && (n = f[l].call(this, n, o, s));
      }), n;
    });
    $(this, Jt, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    $(this, Fn, (n) => {
      var l, f, h, i, d;
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
        const { rowElement: u } = o, c = this.layout.visibleRows.find((p) => p.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
            return;
          for (const p of v(this, K))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
          return;
        for (const p of v(this, K))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
            return;
      }
    });
    $(this, Vn, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, ft, (o = n.id) != null ? o : `dtable-${rc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, Pe, Object.freeze(fc(n.plugins))), v(this, Pe).forEach((s) => {
      var f;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([h, i]) => {
        typeof i == "function" && Object.assign(this, { [h]: i.bind(this) });
      }), a && Object.assign(v(this, ut), a.call(this)), l && Object.assign(this.state, l.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = v(this, ue)) == null ? void 0 : n.options) || v(this, xe) || Pr();
  }
  get plugins() {
    return v(this, K);
  }
  get layout() {
    return v(this, ue);
  }
  get id() {
    return v(this, ft);
  }
  get data() {
    return v(this, ut);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    R(this, xe, void 0);
  }
  componentDidMount() {
    if (v(this, Ne) ? this.forceUpdate() : q(this, Kt, po).call(this), v(this, K).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", v(this, Fn)), this.on("keydown", v(this, Vn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), R(this, Yt, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    v(this, K).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, Ne) ? q(this, Kt, po).call(this) : v(this, K).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Yt)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of v(this, he).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), v(this, ht)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), v(this, pt)) : n.removeEventListener(s, v(this, Ee));
    v(this, K).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), v(this, Pe).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), R(this, ut, {}), v(this, he).clear();
  }
  on(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    r ? r.push(o) : (v(this, he).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, ht)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, pt)) : (a = this.ref.current) == null || a.addEventListener(n, v(this, Ee)));
  }
  off(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (v(this, he).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, ht)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, pt)) : (l = this.ref.current) == null || l.removeEventListener(n, v(this, Ee)));
  }
  emitCustomEvent(n, o) {
    v(this, Ee).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: f, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: c } = n;
    if (d === "up" || d === "down")
      c = r + (d === "down" ? 1 : -1) * Math.floor(l / f) * f;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = a - l;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - h;
    else {
      const { offsetLeft: b, offsetTop: _ } = n;
      typeof b == "number" && (u = s + b), typeof _ == "number" && (u = r + _);
    }
    const p = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (p.scrollLeft = u)), typeof c == "number" && (c = Math.max(0, Math.min(c, a - l)), c !== r && (p.scrollTop = c)), Object.keys(p).length ? (this.setState(p, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, p), o == null || o.call(this, !0);
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
    s === "layout" ? R(this, ue, void 0) : s === "options" && (R(this, ue, void 0), R(this, xe, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    return (r = Zt(v(this, Gt), n, o, s, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = q(this, Gn, ui).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: f, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": f,
      "dtable-scrolled-down": ((c = n == null ? void 0 : n.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && v(this, K).forEach((p) => {
      var _;
      const b = (_ = p.onRender) == null ? void 0 : _.call(this, n);
      !b || (b.style && Object.assign(i, b.style), b.className && d.push(b.className), b.children && u.push(b.children));
    }), /* @__PURE__ */ A("div", {
      id: v(this, ft),
      className: T(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && q(this, jn, si).call(this, n), n && q(this, Wn, ii).call(this, n), n && q(this, In, ai).call(this, n), n && q(this, Bn, li).call(this, n));
  }
}
Je = new WeakMap(), ft = new WeakMap(), Ne = new WeakMap(), xe = new WeakMap(), Pe = new WeakMap(), K = new WeakMap(), ue = new WeakMap(), he = new WeakMap(), ut = new WeakMap(), Yt = new WeakMap(), Gt = new WeakMap(), Ee = new WeakMap(), ht = new WeakMap(), pt = new WeakMap(), jn = new WeakSet(), si = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ A(ac, {
      scrollLeft: a,
      height: r,
      onRenderCell: v(this, Xt),
      onRenderRow: v(this, zn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(ao, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, Wn = new WeakSet(), ii = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: f, scrollTop: h } = n;
  return /* @__PURE__ */ A(lc, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: h,
    onRenderCell: v(this, Xt),
    onRenderRow: v(this, Un),
    ...l
  });
}, In = new WeakSet(), ai = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(ao, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Bn = new WeakSet(), li = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: f, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ A(fr, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: v(this, Jt),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -u) + h,
      size: u,
      wheelContainer: this.ref
    })
  ), f > l && o.push(
    /* @__PURE__ */ A(fr, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: l,
      onScroll: v(this, Jt),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Kt = new WeakSet(), po = function() {
  var n;
  R(this, Ne, !1), (n = this.options.afterRender) == null || n.call(this), v(this, K).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Un = new WeakMap(), zn = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), Fn = new WeakMap(), Vn = new WeakMap(), qn = new WeakSet(), ci = function() {
  if (v(this, xe))
    return !1;
  const o = { ...Pr(), ...v(this, Pe).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return R(this, xe, o), R(this, K, v(this, Pe).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), R(this, Gt, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Yn = new WeakSet(), fi = function() {
  var ze, ye;
  const { plugins: n } = this;
  let o = v(this, xe);
  const s = {
    flex: /* @__PURE__ */ A("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ A("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((S) => {
    var F;
    const P = (F = S.beforeLayout) == null ? void 0 : F.call(this, o);
    P && (o = { ...o, ...P }), Object.assign(s, S.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, f = [], h = [], i = [], d = {}, u = [], c = [];
  let p = 0, b = 0, _ = 0;
  o.cols.forEach((S) => {
    if (S.hidden)
      return;
    const {
      name: P,
      type: F = "",
      fixed: G = !1,
      flex: se = !1,
      width: Fe = r,
      minWidth: Ae = a,
      maxWidth: en = l,
      ...tn
    } = S, no = sc(Fe, Ae, en), D = {
      name: P,
      type: F,
      setting: {
        name: P,
        type: F,
        fixed: G,
        flex: se,
        width: Fe,
        minWidth: Ae,
        maxWidth: en,
        ...tn
      },
      flex: G ? 0 : se === !0 ? 1 : typeof se == "number" ? se : 0,
      left: 0,
      width: no,
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach(($t) => {
      var nn, on;
      const Ve = (nn = $t.colTypes) == null ? void 0 : nn[F];
      if (Ve) {
        const ce = typeof Ve == "function" ? Ve(D) : Ve;
        ce && Object.assign(D.setting, ce);
      }
      (on = $t.onAddCol) == null || on.call(this, D);
    }), D.realWidth = D.realWidth || D.width, G === "left" ? (D.left = p, p += D.width, f.push(D)) : G === "right" ? (D.left = b, b += D.width, h.push(D)) : (D.left = _, _ += D.width, i.push(D)), D.flex && c.push(D), u.push(D), d[D.name] = D;
  });
  let g = o.width, m = 0;
  const w = p + _ + b;
  if (typeof g == "function" && (g = g.call(this, w)), g === "auto")
    m = w;
  else if (g === "100%") {
    const { parent: S } = this;
    if (S)
      m = S.clientWidth;
    else {
      m = 0, R(this, Ne, !0);
      return;
    }
  } else
    m = g != null ? g : 0;
  const { data: k, rowKey: x = "id", rowHeight: y } = o, E = [], C = (S, P, F) => {
    var se, Fe;
    const G = { data: F != null ? F : { [x]: S }, id: S, index: E.length, top: 0 };
    if (F || (G.lazy = !0), E.push(G), ((se = o.onAddRow) == null ? void 0 : se.call(this, G, P)) !== !1) {
      for (const Ae of n)
        if (((Fe = Ae.onAddRow) == null ? void 0 : Fe.call(this, G, P)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let S = 0; S < k; S++)
      C(`${S}`, S);
  else
    Array.isArray(k) && k.forEach((S, P) => {
      var F;
      typeof S == "object" ? C(`${(F = S[x]) != null ? F : ""}`, P, S) : C(`${S != null ? S : ""}`, P);
    });
  let M = E;
  const N = {};
  if (o.onAddRows) {
    const S = o.onAddRows.call(this, M);
    S && (M = S);
  }
  for (const S of n) {
    const P = (ze = S.onAddRows) == null ? void 0 : ze.call(this, M);
    P && (M = P);
  }
  M.forEach((S, P) => {
    N[S.id] = S, S.index = P, S.top = S.index * y;
  });
  const { header: O, footer: V } = o, z = O ? o.headerHeight || y : 0, re = V ? o.footerHeight || y : 0;
  let Y = o.height, j = 0;
  const X = M.length * y, Se = z + re + X;
  if (typeof Y == "function" && (Y = Y.call(this, Se)), Y === "auto")
    j = Se;
  else if (typeof Y == "object")
    j = Math.min(Y.max, Math.max(Y.min, Se));
  else if (Y === "100%") {
    const { parent: S } = this;
    if (S)
      j = S.clientHeight;
    else {
      j = 0, R(this, Ne, !0);
      return;
    }
  } else
    j = Y;
  const ge = j - z - re, et = m - p - b, me = {
    options: o,
    allRows: E,
    width: m,
    height: j,
    rows: M,
    rowsMap: N,
    rowHeight: y,
    rowsHeight: ge,
    rowsHeightTotal: X,
    header: O,
    footer: V,
    footerGenerators: s,
    headerHeight: z,
    footerHeight: re,
    colsMap: d,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: p,
      scrollWidth: et,
      scrollColsWidth: _,
      fixedRightWidth: b
    }
  }, Re = (ye = o.onLayout) == null ? void 0 : ye.call(this, me);
  Re && Object.assign(me, Re), n.forEach((S) => {
    if (S.onLayout) {
      const P = S.onLayout.call(this, me);
      P && Object.assign(me, P);
    }
  }), R(this, ue, me);
}, Gn = new WeakSet(), ui = function() {
  (q(this, qn, ci).call(this) || !v(this, ue)) && q(this, Yn, fi).call(this);
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
  const { rowsHeightTotal: h, rowsHeight: i, rows: d, rowHeight: u } = n, c = Math.min(Math.max(0, h - i), this.state.scrollTop), p = Math.floor(c / u), b = c + i, _ = Math.min(d.length, Math.ceil(b / u)), g = [], { rowDataGetter: m } = this.options;
  for (let w = p; w < _; w++) {
    const k = d[w];
    k.lazy && m && (k.data = m([k.id])[0], k.lazy = !1), g.push(k);
  }
  return n.visibleRows = g, n.scrollTop = c, n.scrollLeft = o, n;
}, L(ho, "addPlugin", ni), L(ho, "removePlugin", oi);
function Tr(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const hi = {
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
      Tr(this, o);
    },
    mouseleave() {
      Tr(this, !1);
    }
  }
};
Qt(hi, { buildIn: !0 });
function uc(e, t) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (f, h) => {
    s && !s.call(this, f) || !!n[f] === h || (h ? n[f] = !0 : delete n[f], o[f] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !pi.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function hc(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function pi() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function pc() {
  return Object.keys(this.state.checkedRows);
}
const di = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: uc,
    isRowChecked: hc,
    isAllRowChecked: pi,
    getChecks: pc
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
        /* @__PURE__ */ A("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ A("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ A("div", null, o.join(", "))
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
      const h = this.isRowChecked(o), i = (f = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, o)) != null ? f : /* @__PURE__ */ A("input", {
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
      const f = this.isAllRowChecked(), h = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, o)) != null ? l : /* @__PURE__ */ A("input", {
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
Qt(di);
function _o(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const a = _o.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? _o.call(this, t.parent).level + 1 : 0, t;
}
function dc(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !_i.call(this)), t) {
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
function _i() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function vi(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const a = e.get(r);
    !a || (a.level === o && (a.order = t++), (s = a.children) != null && s.length && (t = vi(e, t, a.children, o + 1)));
  }
  return t;
}
function gi(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, gi(e, r, n, o);
  }), s;
}
function mi(e, t, n, o, s) {
  var l;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((f) => {
    const h = !!(o[f] !== void 0 ? o[f] : s[f]);
    return n === h;
  })) && (o[t] = n), r.parent && mi(e, r.parent, n, o, s);
}
const yi = {
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
        const a = gi(this, s, r, o);
        a != null && a.parent && mi(this, a.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: dc,
    isAllCollapsed: _i,
    getNestedRowInfo: _o
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), vi(this.data.nestedMap), e.sort((t, n) => {
      var a, l;
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var l, f, h;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && e.unshift((f = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, t, s)) != null ? f : /* @__PURE__ */ A("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = t.setting;
      i && (i === !0 && (i = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ A("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ A("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ A("span", {
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
Qt(yi);
const de = 24 * 60 * 60 * 1e3, J = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Et = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), vo = (e, t = new Date()) => J(e).getFullYear() === J(t).getFullYear(), bi = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), _c = (e, t = new Date()) => {
  e = J(e), t = J(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, vc = (e, t) => Et(J(t), e), gc = (e, t) => Et(J(t).getTime() - de, e), mc = (e, t) => Et(J(t).getTime() + de, e), yc = (e, t) => Et(J(t).getTime() - 2 * de, e), Dn = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, bc = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Dn(e, vo(e) ? o.month : o.full);
  if (Et(e, t))
    return s;
  const r = Dn(t, vo(e, t) ? bi(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, wc = (e) => {
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
}, go = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, go(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, go(e, "day", n, o);
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
const wi = {
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
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = tt(o, n.data);
        return e[0] = /* @__PURE__ */ A("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${t.name}Avatar` } = t.setting, l = /* @__PURE__ */ A("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ A("img", {
          src: o ? o[a] : ""
        }));
        return s ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, a = (n - o) / 2, l = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ A("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ A("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ A("circle", {
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
        }), /* @__PURE__ */ A("text", {
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
            return h && (f = { className: a, ...h, ...f }), tt(s, f);
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Dn(r, o) : s === "html" ? e[0] = { html: tt(o, r) } : e[0] = tt(o, r), e;
      }
    }
  }
};
Qt(wi);
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: hi,
  checkable: di,
  nested: yi,
  rich: wi
}, Symbol.toStringTag, { value: "Module" }));
class an extends ko {
}
L(an, "Component", ho), L(an, "definePlugin", Qt), L(an, "removePlugin", oi), L(an, "plugins", kc);
var pe, Q;
class xc {
  constructor(t) {
    $(this, pe, void 0);
    $(this, Q, void 0);
    R(this, pe, t), R(this, Q, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(v(this, pe).parentElement.parentElement, v(this, pe).parentElement), this.addActive(v(this, Q).parentElement, v(this, Q)), v(this, Q).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, Q, v(this, pe)), this.addActive(v(this, Q).parentElement, v(this, Q)), R(this, pe, document.querySelector(`[href='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-target='#${v(this, Q).getAttribute("id")}']`)), this.addActive(v(this, pe).parentElement.parentElement, v(this, pe).parentElement);
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
pe = new WeakMap(), Q = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new xc(e.target).showTarget());
});
const Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: de,
  createDate: J,
  isSameDay: Et,
  isSameYear: vo,
  isSameMonth: bi,
  isSameWeek: _c,
  isToday: vc,
  isYesterday: gc,
  isTomorrow: mc,
  isDBY: yc,
  formatDate: Dn,
  formatDateSpan: bc,
  getTimeBeforeDesc: wc,
  calculateTimestamp: go,
  formatString: tt,
  formatBytes: Ni,
  convertBytes: Pi,
  isObject: fn,
  mergeDeep: wn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ji as ActionMenu,
  Cc as Avatar,
  ie as ContextMenu,
  an as DTable,
  Ie as Dropdown,
  yo as EventBus,
  as as Menu,
  xc as NavTabs,
  fr as Scrollbar,
  Hi as addI18nMap,
  $c as browser,
  Ti as getLangCode,
  Sc as helpers,
  Zt as i18n,
  io as nativeEvents,
  Di as setLangCode,
  la as store
};
