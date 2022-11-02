var _i = Object.defineProperty;
var di = (e, t, n) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (di(e, typeof t != "symbol" ? t + "" : t, n), n), to = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var v = (e, t, n) => (to(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, o) => (to(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var H = (e, t, n) => (to(e, t, "access private method"), n);
var qn, W, Lr, Nr, St, Uo, dn = {}, Or = [], pi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yn(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? qn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return on(e, l, o, s, null);
}
function on(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Lr : s };
  return s == null && W.vnode != null && W.vnode(r), r;
}
function vi() {
  return { current: null };
}
function Gn(e) {
  return e.children;
}
function rn(e, t) {
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
function Dr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Dr(e);
  }
}
function zo(e) {
  (!e.__d && (e.__d = !0) && St.push(e) && !pn.__r++ || Uo !== W.debounceRendering) && ((Uo = W.debounceRendering) || setTimeout)(pn);
}
function pn() {
  for (var e; pn.__r = St.length; )
    e = St.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), St = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Pe({}, r)).__v = r.__v + 1, po(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dt(r) : l, r.__h), jr(o, r), r.__e != l && Dr(r)));
    });
}
function Pr(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Or, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? on(null, c, null, null, c) : Array.isArray(c) ? on(Gn, { children: c }, null, null, null) : c.__b > 0 ? on(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      po(e, c, u = u || dn, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Hr(c, f, e) : f = Wr(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = dt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = dt(o, i + 1)), Br(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Ir(p[i], p[++i], p[++i]);
}
function Hr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Hr(o, t, n) : Wr(n, o, o, s, o.__e, t));
  return t;
}
function Wr(e, t, n, o, s, r) {
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
function gi(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || vn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || vn(e, r, t[r], n[r], o);
}
function Fo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || pi.test(t) ? n : n + "px";
}
function vn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Fo(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Fo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? qo : Vo, r) : e.removeEventListener(t, r ? qo : Vo, r);
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
function Vo(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function qo(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function po(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new rn(p, m), i.constructor = y, i.render = yi), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Pe({}, i.__s)), Pe(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
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
        if (i.context = m, i.props = p, i.__v = t, i.__P = e, w = W.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Pe(Pe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Gn && h.key == null ? h.props.children : h, Pr(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = mi(n.__e, t, n, o, s, r, l, f);
    (h = W.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), W.__e(E, t, n);
  }
}
function jr(e, t) {
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
function mi(e, t, n, o, s, r, l, a) {
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
    if (r = r && qn.call(e.childNodes), h = (d = n.props || dn).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (gi(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Pr(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && dt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Tr(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && vn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && vn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ir(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function Br(e, t, n) {
  var o, s;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ir(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Br(o[s], t, typeof e.type != "function");
  n || e.__e == null || Tr(e.__e), e.__e = e.__d = void 0;
}
function yi(e, t, n) {
  return this.constructor(e, n);
}
function bi(e, t, n) {
  var o, s, r;
  W.__ && W.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], po(t, e = (!o && n || t).__k = Yn(Gn, null, [e]), s || dn, dn, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? qn.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), jr(r, e);
}
qn = Or.slice, W = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Lr = 0, Nr = function(e) {
  return e != null && e.constructor === void 0;
}, rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof e == "function" && (e = e(Pe({}, n), this.props)), e && Pe(n, e), e != null && this.__v && (t && this.__h.push(t), zo(this));
}, rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), zo(this));
}, rn.prototype.render = Gn, St = [], pn.__r = 0;
var be;
class wi {
  constructor(t = "") {
    C(this, be, void 0);
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
const oo = /* @__PURE__ */ new Set([
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
class vo extends wi {
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
    return typeof t == "string" && (oo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(vo.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (oo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var we, jt, Ge, $t;
class Yo extends vo {
  constructor(n = "", o) {
    super(n);
    C(this, Ge);
    C(this, we, /* @__PURE__ */ new Map());
    C(this, jt, void 0);
    R(this, jt, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = H(this, Ge, $t).call(this, n), super.on(n, o, s), v(this, we).set(o, [n, s]);
  }
  off(n, o, s) {
    n = H(this, Ge, $t).call(this, n), super.off(n, o, s), v(this, we).delete(o);
  }
  once(n, o, s) {
    n = H(this, Ge, $t).call(this, n);
    const r = (l) => {
      o(l), v(this, we).delete(r);
    };
    super.once(n, r, s), v(this, we).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = H(this, Ge, $t).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, we).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), v(this, we).clear();
  }
}
we = new WeakMap(), jt = new WeakMap(), Ge = new WeakSet(), $t = function(n) {
  const o = v(this, jt);
  return oo.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function ki(e, t) {
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
function xi(e, t, n) {
  const o = ki(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function sn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function gn(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (sn(e) && sn(n))
    for (const o in n)
      sn(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), gn(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return gn(e, ...t);
}
function tt(e, ...t) {
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
var go = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(go || {});
function Ei(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / go[n]).toFixed(t) + n);
}
const Ci = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * go[o];
};
var Ar, Mr;
let mo = (Mr = (Ar = document.documentElement.getAttribute("lang")) == null ? void 0 : Ar.toLowerCase()) != null ? Mr : "zh_cn", Le;
function $i() {
  return mo;
}
function Si(e) {
  mo = e.toLowerCase();
}
function Ri(e, t) {
  Le || (Le = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), gn(Le, e);
}
function Gt(e, t, n, o, s, r) {
  Array.isArray(e) ? Le && e.unshift(Le) : e = Le ? [Le, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || mo;
  let a;
  for (const f of e) {
    if (!f)
      continue;
    const h = f[l];
    if (!h)
      continue;
    const i = r && f === Le ? `${r}.${t}` : t;
    if (a = xi(h, i), a !== void 0)
      break;
  }
  return a === void 0 ? o : n ? tt(a, ...Array.isArray(n) ? n : [n]) : a;
}
Gt.addLang = Ri;
Gt.getCode = $i;
Gt.setCode = Si;
function Ai(e) {
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
class mn {
  constructor(t, n) {
    C(this, ke, void 0);
    C(this, nt, void 0);
    C(this, Z, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && R(this, Z, new Yo(t, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, ke, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Ai(t.dataset) : null, ...n }), this.constructor.all.set(t, this), R(this, nt, t), this.init(), (o = v(this, Z)) == null || o.emit("inited", this);
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
    var l;
    let o = Yo.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, ke)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, Z)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var s;
    return (s = Gt(v(this, ke).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
ke = new WeakMap(), nt = new WeakMap(), Z = new WeakMap(), N(mn, "EVENTS", !1), N(mn, "allComponents", /* @__PURE__ */ new Map());
class yo extends mn {
  constructor() {
    super(...arguments);
    N(this, "ref", vi());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    bi(/* @__PURE__ */ Yn(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var bo, I, Ur, zr, Rt, Go, Fr = {}, Vr = [], Mi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? bo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ln(e, l, o, s, null);
}
function ln(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ur : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Li() {
  return { current: null };
}
function wo(e) {
  return e.children;
}
function At(e, t) {
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
function Yr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yr(e);
  }
}
function Ko(e) {
  (!e.__d && (e.__d = !0) && Rt.push(e) && !yn.__r++ || Go !== I.debounceRendering) && ((Go = I.debounceRendering) || setTimeout)(yn);
}
function yn() {
  for (var e; yn.__r = Rt.length; )
    e = Rt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Rt = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = He({}, r)).__v = r.__v + 1, Jr(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? pt(r) : l, r.__h), Oi(o, r), r.__e != l && Yr(r)));
    });
}
function Gr(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Vr, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? ln(null, c, null, null, c) : Array.isArray(c) ? ln(wo, { children: c }, null, null, null) : c.__b > 0 ? ln(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      Jr(e, c, u = u || Fr, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Kr(c, f, e) : f = Xr(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = pt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = pt(o, i + 1)), Qr(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Zr(p[i], p[++i], p[++i]);
}
function Kr(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Kr(o, t, n) : Xr(n, o, o, s, o.__e, t));
  return t;
}
function Xr(e, t, n, o, s, r) {
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
function Ni(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bn(e, r, t[r], n[r], o);
}
function Xo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Mi.test(t) ? n : n + "px";
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
            n && t in n || Xo(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Xo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Zo : Jo, r) : e.removeEventListener(t, r ? Zo : Jo, r);
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
function Jo(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function Zo(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Jr(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new At(p, m), i.constructor = y, i.render = Di), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = He({}, i.__s)), He(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = He(He({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === wo && h.key == null ? h.props.children : h, Gr(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ti(n.__e, t, n, o, s, r, l, f);
    (h = I.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), I.__e(E, t, n);
  }
}
function Oi(e, t) {
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
function Ti(e, t, n, o, s, r, l, a) {
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
    if (r = r && bo.call(e.childNodes), h = (d = n.props || Fr).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ni(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Gr(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && pt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && qr(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && bn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && bn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Zr(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function Qr(e, t, n) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Zr(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Qr(o[s], t, typeof e.type != "function");
  n || e.__e == null || qr(e.__e), e.__e = e.__d = void 0;
}
function Di(e, t, n) {
  return this.constructor(e, n);
}
bo = Vr.slice, I = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ur = 0, zr = function(e) {
  return e != null && e.constructor === void 0;
}, At.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof e == "function" && (e = e(He({}, n), this.props)), e && He(n, e), e != null && this.__v && (t && this.__h.push(t), Ko(this));
}, At.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ko(this));
}, At.prototype.render = wo, Rt = [], yn.__r = 0;
const D = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? D(...n) : typeof n == "function" ? D(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const s = n[o];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Pi({
  component: e = "div",
  className: t,
  children: n,
  attrs: o
}) {
  return ee(e, {
    className: D(t),
    ...o
  }, n);
}
function Hi({
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
    className: D(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ..._);
}
function Wi({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return ee(e, {
    className: D(t),
    style: r,
    onClick: l,
    ...o
  }, n, s);
}
function ji({
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
    className: D(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, a);
}
function Ii(e) {
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
      m != null && (typeof m == "object" && !Nr(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ Yn("div", {
          className: D(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: D(d),
    style: u,
    ...i
  }, c];
}
function ro({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Ii(t);
  return Yn(e, n, ...o);
}
function Bi(e) {
  return /* @__PURE__ */ ee(ro, {
    ...e
  });
}
const To = class extends At {
  constructor() {
    super(...arguments);
    N(this, "ref", Li());
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
    const { type: s = "item", component: r, key: l = o, rootAttrs: a, rootClass: f, rootStyle: h, ...i } = n, d = !r || typeof r == "string" ? this.constructor.ItemComponents ? this.constructor.ItemComponents[s] : To.ItemComponents[s] : r;
    return Object.assign(i, {
      type: s,
      component: typeof r == "string" ? r : void 0
    }), /* @__PURE__ */ ee("li", {
      className: D(`${this.name}-${s}`, f),
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
    if (l && Object.assign(f, l[h]), (a || o.onClick) && (f.onClick = this.handleItemClick.bind(this, f, s, o.onClick)), f.className = D(f.className), r) {
      if (typeof r == "object") {
        const d = r[h];
        if (d)
          return /* @__PURE__ */ ee(d, {
            ...f
          });
      } else if (typeof r == "function") {
        const d = r.call(this, f, ee);
        if (zr(d))
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
      class: D(this.name, l),
      ..._,
      ref: this.ref
    }, a && a.map(this.renderItem.bind(this, n)), f);
  }
};
let Mt = To;
N(Mt, "ItemComponents", {
  divider: Pi,
  item: Hi,
  heading: Wi,
  space: ji,
  custom: Bi
});
class Ui extends yo {
}
N(Ui, "Component", Mt);
class zi extends Mt {
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), n && (t.className = D(t.className, "has-icons")), t;
  }
}
class es extends yo {
}
N(es, "Component", zi);
var ko, B, ts, Lt, Qo, ns = {}, os = [], Fi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function rs(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function er(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ko.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return an(e, l, o, s, null);
}
function an(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ts : s };
  return s == null && B.vnode != null && B.vnode(r), r;
}
function xo(e) {
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
function ss(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ss(e);
  }
}
function tr(e) {
  (!e.__d && (e.__d = !0) && Lt.push(e) && !wn.__r++ || Qo !== B.debounceRendering) && ((Qo = B.debounceRendering) || setTimeout)(wn);
}
function wn() {
  for (var e; wn.__r = Lt.length; )
    e = Lt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Lt = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = We({}, r)).__v = r.__v + 1, cs(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? vt(r) : l, r.__h), qi(o, r), r.__e != l && ss(r)));
    });
}
function is(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || os, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? an(null, c, null, null, c) : Array.isArray(c) ? an(xo, { children: c }, null, null, null) : c.__b > 0 ? an(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      cs(e, c, u = u || ns, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ls(c, f, e) : f = as(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = vt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = vt(o, i + 1)), us(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      fs(p[i], p[++i], p[++i]);
}
function ls(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ls(o, t, n) : as(n, o, o, s, o.__e, t));
  return t;
}
function as(e, t, n, o, s, r) {
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
function Vi(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || kn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || kn(e, r, t[r], n[r], o);
}
function nr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fi.test(t) ? n : n + "px";
}
function kn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || nr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || nr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? rr : or, r) : e.removeEventListener(t, r ? rr : or, r);
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
function or(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function rr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function cs(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Nt(p, m), i.constructor = y, i.render = Gi), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = We({}, i.__s)), We(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = We(We({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === xo && h.key == null ? h.props.children : h, is(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yi(n.__e, t, n, o, s, r, l, f);
    (h = B.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), B.__e(E, t, n);
  }
}
function qi(e, t) {
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
function Yi(e, t, n, o, s, r, l, a) {
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
    if (r = r && ko.call(e.childNodes), h = (d = n.props || ns).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vi(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, is(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && vt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && rs(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && kn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && kn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function fs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function us(e, t, n) {
  var o, s;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || fs(o, null, t)), (o = e.__c) != null) {
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
      o[s] && us(o[s], t, typeof e.type != "function");
  n || e.__e == null || rs(e.__e), e.__e = e.__d = void 0;
}
function Gi(e, t, n) {
  return this.constructor(e, n);
}
ko = os.slice, B = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, ts = 0, Nt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof e == "function" && (e = e(We({}, n), this.props)), e && We(n, e), e != null && this.__v && (t && this.__h.push(t), tr(this));
}, Nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tr(this));
}, Nt.prototype.render = xo, Lt = [], wn.__r = 0;
var Ke, Xe;
class sr extends Nt {
  constructor(n) {
    var o;
    super(n);
    C(this, Ke, 0);
    C(this, Xe, null);
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
      o && (v(this, Ke) && cancelAnimationFrame(v(this, Ke)), R(this, Ke, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), R(this, Ke, 0);
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
    return o === "horz" ? (_.height = s, _.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, u) * (n - b.width) / d)) : (_.width = s, _.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, u) * (n - b.height) / d)), /* @__PURE__ */ er("div", {
      className: D("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ er("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Ke = new WeakMap(), Xe = new WeakMap();
function Ki(e) {
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
function Xi(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ji(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, a = o.left <= r && o.left + o.width >= 0;
  return l && a;
}
const za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Ki,
  domReady: Xi,
  isElementVisible: Ji,
  classes: D
}, Symbol.toStringTag, { value: "Module" }));
let Zi = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var It, Ne, fe, ot, rt, cn;
const Do = class {
  constructor(t, n = "local") {
    C(this, rt);
    C(this, It, void 0);
    C(this, Ne, void 0);
    C(this, fe, void 0);
    C(this, ot, void 0);
    R(this, It, n), R(this, Ne, `ZUI_STORE:${t != null ? t : Zi()}`), R(this, fe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return v(this, It);
  }
  get session() {
    return this.type === "session" ? this : (v(this, ot) || R(this, ot, new Do(v(this, Ne), "session")), v(this, ot));
  }
  get(t, n) {
    const o = v(this, fe).getItem(H(this, rt, cn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    v(this, fe).setItem(H(this, rt, cn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    v(this, fe).removeItem(H(this, rt, cn).call(this, t));
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
let xn = Do;
It = new WeakMap(), Ne = new WeakMap(), fe = new WeakMap(), ot = new WeakMap(), rt = new WeakSet(), cn = function(t) {
  return `${v(this, Ne)}:${t}`;
};
const Qi = new xn("DEFAULT");
function el(e, t = "local") {
  return new xn(e, t);
}
Object.assign(Qi, { create: el });
var Eo, U, hs, Ot, ir, _s = {}, ds = [], tl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ps(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function lr(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Eo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return fn(e, l, o, s, null);
}
function fn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++hs : s };
  return s == null && U.vnode != null && U.vnode(r), r;
}
function Co(e) {
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
function vs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return vs(e);
  }
}
function ar(e) {
  (!e.__d && (e.__d = !0) && Ot.push(e) && !En.__r++ || ir !== U.debounceRendering) && ((ir = U.debounceRendering) || setTimeout)(En);
}
function En() {
  for (var e; En.__r = Ot.length; )
    e = Ot.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ot = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, bs(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gt(r) : l, r.__h), ol(o, r), r.__e != l && vs(r)));
    });
}
function gs(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || ds, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? fn(null, c, null, null, c) : Array.isArray(c) ? fn(Co, { children: c }, null, null, null) : c.__b > 0 ? fn(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      bs(e, c, u = u || _s, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ms(c, f, e) : f = ys(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = gt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = gt(o, i + 1)), ks(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      ws(p[i], p[++i], p[++i]);
}
function ms(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ms(o, t, n) : ys(n, o, o, s, o.__e, t));
  return t;
}
function ys(e, t, n, o, s, r) {
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
function nl(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Cn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Cn(e, r, t[r], n[r], o);
}
function cr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || tl.test(t) ? n : n + "px";
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
            n && t in n || cr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || cr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ur : fr, r) : e.removeEventListener(t, r ? ur : fr, r);
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
function fr(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function ur(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function bs(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Tt(p, m), i.constructor = y, i.render = sl), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Co && h.key == null ? h.props.children : h, gs(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rl(n.__e, t, n, o, s, r, l, f);
    (h = U.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), U.__e(E, t, n);
  }
}
function ol(e, t) {
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
function rl(e, t, n, o, s, r, l, a) {
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
    if (r = r && Eo.call(e.childNodes), h = (d = n.props || _s).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (nl(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, gs(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && gt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && ps(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && Cn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Cn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function ws(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function ks(e, t, n) {
  var o, s;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ws(o, null, t)), (o = e.__c) != null) {
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
      o[s] && ks(o[s], t, typeof e.type != "function");
  n || e.__e == null || ps(e.__e), e.__e = e.__d = void 0;
}
function sl(e, t, n) {
  return this.constructor(e, n);
}
Eo = ds.slice, U = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, hs = 0, Tt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof e == "function" && (e = e(je({}, n), this.props)), e && je(n, e), e != null && this.__v && (t && this.__h.push(t), ar(this));
}, Tt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ar(this));
}, Tt.prototype.render = Co, Ot = [], En.__r = 0;
class Fa extends Tt {
  render() {
    const { size: t, rounded: n, className: o, style: s, src: r, text: l, children: a, ...f } = this.props, h = [o], i = { ...s };
    let d = null;
    return r ? d = /* @__PURE__ */ lr("img", {
      src: r,
      alt: l
    }) : d = l, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && h.push(`avatar-${t}`), typeof n == "string" && h.push(`rounded-${n}`), /* @__PURE__ */ lr("div", {
      className: D(h),
      style: i,
      ...f
    }, d, a);
  }
}
function il() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function ll() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function al(e, t) {
  il(), e.classList.add("block"), hr(e, t), e.onclick = (n) => cl(n, e), window.addEventListener("resize", () => {
    hr(e, t);
  });
}
function xs(e) {
  var t;
  ll(), (t = e.classList) == null || t.remove("block");
}
function hr(e, t) {
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
function cl(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), xs(t));
}
function fl(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = fl(n);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    al(s, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && xs(t);
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
function $o(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ze = Math.max, $n = Math.min, mt = Math.round;
function so() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Es() {
  return !/^((?!chrome|android).)*safari/i.test(so());
}
function yt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && ne(e) && (s = e.offsetWidth > 0 && mt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && mt(o.height) / e.offsetHeight || 1);
  var l = Qe(e) ? oe(e) : window, a = l.visualViewport, f = !Es() && n, h = (o.left + (f && a ? a.offsetLeft : 0)) / s, i = (o.top + (f && a ? a.offsetTop : 0)) / r, d = o.width / s, u = o.height / r;
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
function So(e) {
  var t = oe(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function ul(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hl(e) {
  return e === oe(e) || !ne(e) ? So(e) : ul(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ze(e) {
  return ((Qe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ro(e) {
  return yt(ze(e)).left + So(e).scrollLeft;
}
function ae(e) {
  return oe(e).getComputedStyle(e);
}
function Ao(e) {
  var t = ae(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function _l(e) {
  var t = e.getBoundingClientRect(), n = mt(t.width) / e.offsetWidth || 1, o = mt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function dl(e, t, n) {
  n === void 0 && (n = !1);
  var o = ne(t), s = ne(t) && _l(t), r = ze(t), l = yt(e, s, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((pe(t) !== "body" || Ao(r)) && (a = hl(t)), ne(t) ? (f = yt(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : r && (f.x = Ro(r))), {
    x: l.left + a.scrollLeft - f.x,
    y: l.top + a.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function Cs(e) {
  var t = yt(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Kn(e) {
  return pe(e) === "html" ? e : e.assignedSlot || e.parentNode || ($o(e) ? e.host : null) || ze(e);
}
function $s(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : ne(e) && Ao(e) ? e : $s(Kn(e));
}
function Dt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = $s(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = oe(o), l = s ? [r].concat(r.visualViewport || [], Ao(o) ? o : []) : o, a = t.concat(l);
  return s ? a : a.concat(Dt(Kn(l)));
}
function pl(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function _r(e) {
  return !ne(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function vl(e) {
  var t = /firefox/i.test(so()), n = /Trident/i.test(so());
  if (n && ne(e)) {
    var o = ae(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Kn(e);
  for ($o(s) && (s = s.host); ne(s) && ["html", "body"].indexOf(pe(s)) < 0; ) {
    var r = ae(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Xn(e) {
  for (var t = oe(e), n = _r(e); n && pl(n) && ae(n).position === "static"; )
    n = _r(n);
  return n && (pe(n) === "html" || pe(n) === "body" && ae(n).position === "static") ? t : n || vl(e) || t;
}
var le = "top", ve = "bottom", Ue = "right", Ce = "left", Jn = "auto", Zn = [le, ve, Ue, Ce], bt = "start", Wt = "end", gl = "clippingParents", Ss = "viewport", Ct = "popper", ml = "reference", dr = /* @__PURE__ */ Zn.reduce(function(e, t) {
  return e.concat([t + "-" + bt, t + "-" + Wt]);
}, []), yl = /* @__PURE__ */ [].concat(Zn, [Jn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bt, t + "-" + Wt]);
}, []), bl = "beforeRead", wl = "read", kl = "afterRead", xl = "beforeMain", El = "main", Cl = "afterMain", $l = "beforeWrite", Sl = "write", Rl = "afterWrite", io = [bl, wl, kl, xl, El, Cl, $l, Sl, Rl];
function Al(e) {
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
function Ml(e) {
  var t = Al(e);
  return io.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Ll(e) {
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
var Ye = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Nl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', pr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ol(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), pr).filter(function(n, o, s) {
      return s.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Me(Ye, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Me(Ye, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          io.indexOf(t.phase) < 0 && console.error(Me(Ye, t.name, '"phase"', "either " + io.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Me(Ye, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Me(Ye, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Me(Ye, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Me(Ye, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + pr.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Me(Nl, String(t.name), o, o));
      });
    });
  });
}
function Tl(e, t) {
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
function Dl(e) {
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
function Pl(e, t) {
  var n = oe(e), o = ze(e), s = n.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, f = 0;
  if (s) {
    r = s.width, l = s.height;
    var h = Es();
    (h || !h && t === "fixed") && (a = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + Ro(e),
    y: f
  };
}
function Hl(e) {
  var t, n = ze(e), o = So(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = Ze(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Ze(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -o.scrollLeft + Ro(e), f = -o.scrollTop;
  return ae(s || n).direction === "rtl" && (a += Ze(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: f
  };
}
function Wl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $o(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function lo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function jl(e, t) {
  var n = yt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vr(e, t, n) {
  return t === Ss ? lo(Pl(e, n)) : Qe(t) ? jl(t, n) : lo(Hl(ze(e)));
}
function Il(e) {
  var t = Dt(Kn(e)), n = ["absolute", "fixed"].indexOf(ae(e).position) >= 0, o = n && ne(e) ? Xn(e) : e;
  return Qe(o) ? t.filter(function(s) {
    return Qe(s) && Wl(s, o) && pe(s) !== "body";
  }) : [];
}
function Bl(e, t, n, o) {
  var s = t === "clippingParents" ? Il(e) : [].concat(t), r = [].concat(s, [n]), l = r[0], a = r.reduce(function(f, h) {
    var i = vr(e, h, o);
    return f.top = Ze(i.top, f.top), f.right = $n(i.right, f.right), f.bottom = $n(i.bottom, f.bottom), f.left = Ze(i.left, f.left), f;
  }, vr(e, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function wt(e) {
  return e.split("-")[1];
}
function Rs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function As(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? $e(o) : null, r = o ? wt(o) : null, l = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, f;
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
  var h = s ? Rs(s) : null;
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
function Ms() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ul(e) {
  return Object.assign({}, Ms(), e);
}
function zl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Mo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, a = n.boundary, f = a === void 0 ? gl : a, h = n.rootBoundary, i = h === void 0 ? Ss : h, d = n.elementContext, u = d === void 0 ? Ct : d, c = n.altBoundary, _ = c === void 0 ? !1 : c, b = n.padding, p = b === void 0 ? 0 : b, g = Ul(typeof p != "number" ? p : zl(p, Zn)), m = u === Ct ? ml : Ct, w = e.rects.popper, k = e.elements[_ ? m : u], x = Bl(Qe(k) ? k : k.contextElement || ze(e.elements.popper), f, i, l), y = yt(e.elements.reference), E = As({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), $ = lo(Object.assign({}, w, E)), M = u === Ct ? $ : y, O = {
    top: x.top - M.top + g.top,
    bottom: M.bottom - x.bottom + g.bottom,
    left: x.left - M.left + g.left,
    right: M.right - x.right + g.right
  }, L = e.modifiersData.offset;
  if (u === Ct && L) {
    var q = L[s];
    Object.keys(O).forEach(function(F) {
      var re = [Ue, ve].indexOf(F) >= 0 ? 1 : -1, Y = [le, ve].indexOf(F) >= 0 ? "y" : "x";
      O[F] += q[Y] * re;
    });
  }
  return O;
}
var gr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Fl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", mr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Vl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? mr : s;
  return function(a, f, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mr, r),
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
          reference: Qe(a) ? Dt(a) : a.contextElement ? Dt(a.contextElement) : [],
          popper: Dt(f)
        };
        var w = Ml(Dl([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Tl([].concat(w, i.options.modifiers), function(L) {
            var q = L.name;
            return q;
          });
          if (Ol(k), $e(i.options.placement) === Jn) {
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
          if (!yr(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(gr);
            return;
          }
          i.rects = {
            reference: dl(m, Xn(w), i.options.strategy === "fixed"),
            popper: Cs(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(L) {
            return i.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var k = 0, x = 0; x < i.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Fl);
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
      update: Ll(function() {
        return new Promise(function(p) {
          c.forceUpdate(), p(i);
        });
      }),
      destroy: function() {
        b(), u = !0;
      }
    };
    if (!yr(a, f))
      return process.env.NODE_ENV !== "production" && console.error(gr), c;
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
var tn = {
  passive: !0
};
function ql(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, l = o.resize, a = l === void 0 ? !0 : l, f = oe(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, tn);
  }), a && f.addEventListener("resize", n.update, tn), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, tn);
    }), a && f.removeEventListener("resize", n.update, tn);
  };
}
const Yl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ql,
  data: {}
};
function Gl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = As({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Kl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gl,
  data: {}
};
var Xl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jl(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: mt(t * s) / s || 0,
    y: mt(n * s) / s || 0
  };
}
function br(e) {
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
    var y = Xn(n), E = "clientHeight", $ = "clientWidth";
    if (y === oe(n) && (y = ze(n), ae(y).position !== "static" && a === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), y = y, s === le || (s === Ce || s === Ue) && r === Wt) {
      k = ve;
      var M = d && y === x && x.visualViewport ? x.visualViewport.height : y[E];
      b -= M - o.height, b *= f ? 1 : -1;
    }
    if (s === Ce || (s === le || s === ve) && r === Wt) {
      w = Ue;
      var O = d && y === x && x.visualViewport ? x.visualViewport.width : y[$];
      c -= O - o.width, c *= f ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: a
  }, h && Xl), q = i === !0 ? Jl({
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
function Zl(e) {
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
    variation: wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, br(Object.assign({}, i, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, br(Object.assign({}, i, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ql = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zl,
  data: {}
};
function ea(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !ne(r) || !pe(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(l) {
      var a = s[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function ta(e) {
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
      !ne(s) || !pe(s) || (Object.assign(s.style, a), Object.keys(r).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const na = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ea,
  effect: ta,
  requires: ["computeStyles"]
};
var oa = [Yl, Kl, Ql, na], ra = /* @__PURE__ */ Vl({
  defaultModifiers: oa
});
function sa(e) {
  return e === "x" ? "y" : "x";
}
function un(e, t, n) {
  return Ze(e, $n(t, n));
}
function ia(e, t, n) {
  var o = un(e, t, n);
  return o > n ? n : o;
}
function la(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !1 : l, f = n.boundary, h = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, c = u === void 0 ? !0 : u, _ = n.tetherOffset, b = _ === void 0 ? 0 : _, p = Mo(t, {
    boundary: f,
    rootBoundary: h,
    padding: d,
    altBoundary: i
  }), g = $e(t.placement), m = wt(t.placement), w = !m, k = Rs(g), x = sa(k), y = t.modifiersData.popperOffsets, E = t.rects.reference, $ = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
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
      var F, re = k === "y" ? le : Ce, Y = k === "y" ? ve : Ue, j = k === "y" ? "height" : "width", X = y[k], Se = X + p[re], ge = X - p[Y], et = c ? -$[j] / 2 : 0, me = m === bt ? E[j] : $[j], Re = m === bt ? -$[j] : -E[j], Fe = t.elements.arrow, ye = c && Fe ? Cs(Fe) : {
        width: 0,
        height: 0
      }, S = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ms(), T = S[re], V = S[Y], G = un(0, E[j], ye[j]), se = w ? E[j] / 2 - et - G - T - O.mainAxis : me - G - T - O.mainAxis, Ve = w ? -E[j] / 2 + et + G + V + O.mainAxis : Re + G + V + O.mainAxis, Ae = t.elements.arrow && Xn(t.elements.arrow), Xt = Ae ? k === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0 : 0, Jt = (F = L == null ? void 0 : L[k]) != null ? F : 0, Qn = X + se - Jt - Xt, P = X + Ve - Jt, Et = un(c ? $n(Se, Qn) : Se, X, c ? Ze(ge, P) : ge);
      y[k] = Et, q[k] = Et - X;
    }
    if (a) {
      var qe, Zt = k === "x" ? le : Ce, Qt = k === "x" ? ve : Ue, ce = y[x], en = x === "y" ? "height" : "width", Po = ce + p[Zt], Ho = ce - p[Qt], eo = [le, Ce].indexOf(g) !== -1, Wo = (qe = L == null ? void 0 : L[x]) != null ? qe : 0, jo = eo ? Po : ce - E[en] - $[en] - Wo + O.altAxis, Io = eo ? ce + E[en] + $[en] - Wo - O.altAxis : Ho, Bo = c && eo ? ia(jo, ce, Io) : un(c ? jo : Po, ce, c ? Io : Ho);
      y[x] = Bo, q[x] = Bo - ce;
    }
    t.modifiersData[o] = q;
  }
}
const aa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: la,
  requiresIfExists: ["offset"]
};
var ca = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ca[t];
  });
}
var fa = {
  start: "end",
  end: "start"
};
function wr(e) {
  return e.replace(/start|end/g, function(t) {
    return fa[t];
  });
}
function ua(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, l = n.padding, a = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? yl : f, i = wt(o), d = i ? a ? dr : dr.filter(function(_) {
    return wt(_) === i;
  }) : Zn, u = d.filter(function(_) {
    return h.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = u.reduce(function(_, b) {
    return _[b] = Mo(e, {
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
function ha(e) {
  if ($e(e) === Jn)
    return [];
  var t = hn(e);
  return [wr(e), t, wr(t)];
}
function _a(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, l = n.altAxis, a = l === void 0 ? !0 : l, f = n.fallbackPlacements, h = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, c = n.flipVariations, _ = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, p = t.options.placement, g = $e(p), m = g === p, w = f || (m || !_ ? [hn(p)] : ha(p)), k = [p].concat(w).reduce(function(ye, S) {
      return ye.concat($e(S) === Jn ? ua(t, {
        placement: S,
        boundary: i,
        rootBoundary: d,
        padding: h,
        flipVariations: _,
        allowedAutoPlacements: b
      }) : S);
    }, []), x = t.rects.reference, y = t.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, M = k[0], O = 0; O < k.length; O++) {
      var L = k[O], q = $e(L), F = wt(L) === bt, re = [le, ve].indexOf(q) >= 0, Y = re ? "width" : "height", j = Mo(t, {
        placement: L,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: h
      }), X = re ? F ? Ue : Ce : F ? ve : le;
      x[Y] > y[Y] && (X = hn(X));
      var Se = hn(X), ge = [];
      if (r && ge.push(j[q] <= 0), a && ge.push(j[X] <= 0, j[Se] <= 0), ge.every(function(ye) {
        return ye;
      })) {
        M = L, $ = !1;
        break;
      }
      E.set(L, ge);
    }
    if ($)
      for (var et = _ ? 3 : 1, me = function(S) {
        var T = k.find(function(V) {
          var G = E.get(V);
          if (G)
            return G.slice(0, S).every(function(se) {
              return se;
            });
        });
        if (T)
          return M = T, "break";
      }, Re = et; Re > 0; Re--) {
        var Fe = me(Re);
        if (Fe === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const da = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _a,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function pa(e) {
  return e.button === 2;
}
var Oe, te, st, Bt, it, Ut, ao, Nn, Ls, On, Ns;
class ie extends mn {
  constructor() {
    super(...arguments);
    C(this, Ut);
    C(this, Nn);
    C(this, On);
    C(this, Oe, void 0);
    C(this, te, void 0);
    C(this, st, void 0);
    C(this, Bt, void 0);
    C(this, it, void 0);
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
      return R(this, Oe, s), s;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return v(this, te) ? v(this, te) : H(this, Ut, ao).call(this);
  }
  get trigger() {
    return v(this, Bt) || this.element;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return R(this, Bt, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || H(this, Nn, Ls).call(this) === !1 ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), H(this, Ut, ao).call(this).update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = v(this, te)) == null || o.destroy(), R(this, te, void 0), (s = v(this, Oe)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = v(this, te)) == null || n.destroy(), super.destroy(), this.options.menu && ((o = v(this, Oe)) == null || o.remove());
  }
  static clear(n) {
    n && pa(n) || this.getAll().forEach((o) => o.hide());
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
Oe = new WeakMap(), te = new WeakMap(), st = new WeakMap(), Bt = new WeakMap(), it = new WeakMap(), Ut = new WeakSet(), ao = function() {
  const n = {
    modifiers: [aa, da],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return v(this, te) ? v(this, te).setOptions(n) : R(this, te, ra(H(this, On, Ns).call(this), this.menu, n)), v(this, te);
}, Nn = new WeakSet(), Ls = function() {
  const { menu: n, items: o } = this.options;
  let s = o || (n == null ? void 0 : n.items);
  if (!s)
    return;
  typeof s == "function" && (s = s(this));
  const r = {
    ...n,
    menuItems: s
  };
  return this.emit("updateMenu", { menu: r, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (v(this, it) ? v(this, it).render(r) : R(this, it, new es(this.menu, r)), !0);
}, On = new WeakSet(), Ns = function() {
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
}, N(ie, "EVENTS", !0), N(ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), N(ie, "MENU_CLASS", "contextmenu"), N(ie, "CLASS_SHOW", "show"), N(ie, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ie.MENU_CLASS}`))
    return;
  const n = t.closest(ie.MENU_SELECTOR);
  n && (ie.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ie.clear.bind(ie));
var lt, at, ct, Tn, Os;
class Be extends ie {
  constructor() {
    super(...arguments);
    C(this, Tn);
    C(this, lt, !1);
    C(this, at, 0);
    N(this, "hideLater", () => {
      v(this, ct).call(this), R(this, at, window.setTimeout(this.hide.bind(this), 300));
    });
    C(this, ct, () => {
      clearTimeout(v(this, at)), R(this, at, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  show(n) {
    const o = super.show(n);
    return o && !v(this, lt) && this.isHover && H(this, Tn, Os).call(this), o;
  }
  destroy() {
    v(this, lt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, ct)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
}
lt = new WeakMap(), at = new WeakMap(), ct = new WeakMap(), Tn = new WeakSet(), Os = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, ct)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, lt, !0);
}, N(Be, "MENU_CLASS", "dropdown-menu"), N(Be, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), N(Be, "DEFAULT", {
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
var Lo, z, Ts, Ds, Pt, kr, Ps = {}, Hs = [], va = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ws(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function A(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Lo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return _n(e, l, o, s, null);
}
function _n(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ts : s };
  return s == null && z.vnode != null && z.vnode(r), r;
}
function ga() {
  return { current: null };
}
function No(e) {
  return e.children;
}
function Ht(e, t) {
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
function js(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return js(e);
  }
}
function xr(e) {
  (!e.__d && (e.__d = !0) && Pt.push(e) && !Sn.__r++ || kr !== z.debounceRendering) && ((kr = z.debounceRendering) || setTimeout)(Sn);
}
function Sn() {
  for (var e; Sn.__r = Pt.length; )
    e = Pt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Pt = [], e.some(function(t) {
      var n, o, s, r, l, a;
      t.__d && (l = (r = (n = t).__v).__e, (a = n.__P) && (o = [], (s = Ie({}, r)).__v = r.__v + 1, zs(a, r, s, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? kt(r) : l, r.__h), ya(o, r), r.__e != l && js(r)));
    });
}
function Is(e, t, n, o, s, r, l, a, f, h) {
  var i, d, u, c, _, b, p, g = o && o.__k || Hs, m = g.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? _n(null, c, null, null, c) : Array.isArray(c) ? _n(No, { children: c }, null, null, null) : c.__b > 0 ? _n(c.type, c.props, c.key, null, c.__v) : c) != null) {
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
      zs(e, c, u = u || Ps, s, r, l, a, f, h), _ = c.__e, (d = c.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, c), p.push(d, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Bs(c, f, e) : f = Us(e, c, u, g, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = kt(u));
    }
  for (n.__e = b, i = m; i--; )
    g[i] != null && (typeof n.type == "function" && g[i].__e != null && g[i].__e == n.__d && (n.__d = kt(o, i + 1)), Vs(g[i], g[i]));
  if (p)
    for (i = 0; i < p.length; i++)
      Fs(p[i], p[++i], p[++i]);
}
function Bs(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Bs(o, t, n) : Us(n, o, o, s, o.__e, t));
  return t;
}
function Us(e, t, n, o, s, r) {
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
function ma(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Rn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Rn(e, r, t[r], n[r], o);
}
function Er(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || va.test(t) ? n : n + "px";
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
            n && t in n || Er(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Er(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? $r : Cr, r) : e.removeEventListener(t, r ? $r : Cr, r);
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
function Cr(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function $r(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function zs(e, t, n, o, s, r, l, a, f) {
  var h, i, d, u, c, _, b, p, g, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (p = t.props, g = (h = y.contextType) && o[h.__c], m = h ? g ? g.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(p, m) : (t.__c = i = new Ht(p, m), i.constructor = y, i.render = wa), g && g.sub(i), i.props = p, i.state || (i.state = {}), i.context = m, i.__n = o, d = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ie({}, i.__s)), Ie(i.__s, y.getDerivedStateFromProps(p, i.__s))), u = i.props, c = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ie(Ie({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === No && h.key == null ? h.props.children : h, Is(e, Array.isArray(x) ? x : [x], t, n, o, s, r, l, a, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ba(n.__e, t, n, o, s, r, l, f);
    (h = z.diffed) && h(t);
  } catch (E) {
    t.__v = null, (f || r != null) && (t.__e = a, t.__h = !!f, r[r.indexOf(a)] = null), z.__e(E, t, n);
  }
}
function ya(e, t) {
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
function ba(e, t, n, o, s, r, l, a) {
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
    if (r = r && Lo.call(e.childNodes), h = (d = n.props || Ps).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ma(e, u, d, s, a), i)
      t.__k = [];
    else if (_ = t.props.children, Is(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, l, r ? r[0] : n.__k && kt(n, 0), a), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Ws(r[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== d.value) && Rn(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Rn(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Fs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function Vs(e, t, n) {
  var o, s;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fs(o, null, t)), (o = e.__c) != null) {
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
      o[s] && Vs(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ws(e.__e), e.__e = e.__d = void 0;
}
function wa(e, t, n) {
  return this.constructor(e, n);
}
Lo = Hs.slice, z = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ts = 0, Ds = function(e) {
  return e != null && e.constructor === void 0;
}, Ht.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof e == "function" && (e = e(Ie({}, n), this.props)), e && Ie(n, e), e != null && this.__v && (t && this.__h.push(t), xr(this));
}, Ht.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xr(this));
}, Ht.prototype.render = No, Pt = [], Sn.__r = 0;
let ka = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function xa(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Oo({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: a, outerClass: f, ...h }) {
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
  }], b = ["dtable-cell-content", t], p = [(E = a != null ? a : (y = o.data) == null ? void 0 : y[e.name]) != null ? E : ""], g = s ? s(p, { row: o, col: e }, A) : p, m = [], w = [], k = {}, x = {};
  return g == null || g.forEach(($) => {
    var M;
    if (typeof $ == "object" && $ && !Ds($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $)) {
      const O = $.outer ? m : w;
      $.html ? O.push(/* @__PURE__ */ A("div", {
        className: D("dtable-cell-html", $.className),
        style: $.style,
        dangerouslySetInnerHTML: { __html: $.html },
        ...(M = $.attrs) != null ? M : {}
      })) : ($.style && Object.assign($.outer ? i : c, $.style), $.className && ($.outer ? _ : b).push($.className), $.children && O.push($.children), $.attrs && Object.assign($.outer ? k : x, $.attrs));
    } else
      w.push($);
  }), /* @__PURE__ */ A("div", {
    className: D(_),
    style: i,
    "data-col": e.name,
    ...h,
    ...k
  }, w.length > 0 && /* @__PURE__ */ A("div", {
    className: D(b),
    style: c,
    ...x
  }, w), m);
}
function Ea({ col: e, children: t, style: n, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ A(Oo, {
    col: e,
    style: { ...n, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ A("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), t);
}
function no({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: a = Oo, onRenderCell: f }) {
  return /* @__PURE__ */ A("div", {
    className: D("dtable-cells", t),
    style: { top: n, left: o, width: s, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ A(a, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: f
  }) : null));
}
function qs({
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
  CellComponent: u = Oo,
  onRenderCell: c,
  style: _,
  ...b
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ A(no, {
    className: "dtable-fixed-left",
    cols: s,
    width: a,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ A(no, {
    className: "dtable-flexable",
    cols: l,
    left: a - d,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ A(no, {
    className: "dtable-fixed-right",
    cols: r,
    left: a + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ..._ };
  return /* @__PURE__ */ A("div", {
    className: D("dtable-row", t),
    style: w,
    "data-id": e.id,
    ...b
  }, p, g, m);
}
function Ca({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Ea
  };
  if (t) {
    const s = t({ props: o }, A);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ A(qs, {
    ...o
  }));
}
function $a({
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
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ A("div", {
    className: D("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ...f
    }, d = a == null ? void 0 : a({ props: i, row: h }, A);
    return d && Object.assign(i, d), /* @__PURE__ */ A(qs, {
      ...i
    });
  }));
}
const An = /* @__PURE__ */ new Map(), Mn = [];
function Ys(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && An.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  An.set(n, e), (t == null ? void 0 : t.buildIn) && !Mn.includes(n) && Mn.push(n);
}
function Kt(e, t) {
  Ys(e, t);
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
function Gs(e) {
  return An.delete(e);
}
function Sa(e) {
  if (typeof e == "string") {
    const t = An.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ks(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Sa(o);
    !s || n.has(s.name) || ((r = s.plugins) != null && r.length && Ks(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function Ra(e = [], t = !0) {
  return t && Mn.length && e.unshift(...Mn), e != null && e.length ? Ks([], e, /* @__PURE__ */ new Set()) : [];
}
function Sr() {
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
var Je, ft, Te, xe, De, K, ue, he, ut, zt, Ft, Ee, ht, _t, Dn, Xs, Pn, Js, Hn, Zs, Wn, Qs, Vt, fo, jn, In, qt, Yt, Bn, Un, zn, ei, Fn, ti, Vn, ni;
class co extends Ht {
  constructor(n) {
    var o;
    super(n);
    C(this, Dn);
    C(this, Pn);
    C(this, Hn);
    C(this, Wn);
    C(this, Vt);
    C(this, zn);
    C(this, Fn);
    C(this, Vn);
    N(this, "ref", ga());
    C(this, Je, 0);
    C(this, ft, void 0);
    C(this, Te, !1);
    C(this, xe, void 0);
    C(this, De, void 0);
    C(this, K, []);
    C(this, ue, void 0);
    C(this, he, /* @__PURE__ */ new Map());
    C(this, ut, {});
    C(this, zt, void 0);
    C(this, Ft, []);
    N(this, "updateLayout", () => {
      v(this, Je) && cancelAnimationFrame(v(this, Je)), R(this, Je, requestAnimationFrame(() => {
        R(this, ue, void 0), this.forceUpdate(), R(this, Je, 0);
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
    C(this, ht, (n) => {
      v(this, Ee).call(this, n, `window_${n.type}`);
    });
    C(this, _t, (n) => {
      v(this, Ee).call(this, n, `document_${n.type}`);
    });
    C(this, jn, (n, o) => {
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
    C(this, In, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, K).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    C(this, qt, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[a] && (n = l.setting[a].call(this, n, o, s)), this.options[a] && (n = this.options[a].call(this, n, o, s)), v(this, K).forEach((f) => {
        f[a] && (n = f[a].call(this, n, o, s));
      }), n;
    });
    C(this, Yt, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    C(this, Bn, (n) => {
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
    C(this, Un, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, ft, (o = n.id) != null ? o : `dtable-${ka(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, De, Object.freeze(Ra(n.plugins))), v(this, De).forEach((s) => {
      var f;
      const { methods: r, data: l, state: a } = s;
      r && Object.entries(r).forEach(([h, i]) => {
        typeof i == "function" && Object.assign(this, { [h]: i.bind(this) });
      }), l && Object.assign(v(this, ut), l.call(this)), a && Object.assign(this.state, a.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = v(this, ue)) == null ? void 0 : n.options) || v(this, xe) || Sr();
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
    if (v(this, Te) ? this.forceUpdate() : H(this, Vt, fo).call(this), v(this, K).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", v(this, Bn)), this.on("keydown", v(this, Un)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), R(this, zt, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    v(this, K).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, Te) ? H(this, Vt, fo).call(this) : v(this, K).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, zt)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of v(this, he).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), v(this, ht)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), v(this, _t)) : n.removeEventListener(s, v(this, Ee));
    v(this, K).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), v(this, De).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), R(this, ut, {}), v(this, he).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    r ? r.push(o) : (v(this, he).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, ht)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, _t)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, Ee)));
  }
  off(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = v(this, he).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, he).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, ht)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, _t)) : (a = this.ref.current) == null || a.removeEventListener(n, v(this, Ee)));
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
    return (r = Gt(v(this, Ft), n, o, s, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = H(this, Vn, ni).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: a, striped: f, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
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
    }), /* @__PURE__ */ A("div", {
      id: v(this, ft),
      className: D(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && H(this, Dn, Xs).call(this, n), n && H(this, Pn, Js).call(this, n), n && H(this, Hn, Zs).call(this, n), n && H(this, Wn, Qs).call(this, n));
  }
}
Je = new WeakMap(), ft = new WeakMap(), Te = new WeakMap(), xe = new WeakMap(), De = new WeakMap(), K = new WeakMap(), ue = new WeakMap(), he = new WeakMap(), ut = new WeakMap(), zt = new WeakMap(), Ft = new WeakMap(), Ee = new WeakMap(), ht = new WeakMap(), _t = new WeakMap(), Dn = new WeakSet(), Xs = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ A(Ca, {
      scrollLeft: l,
      height: r,
      onRenderCell: v(this, qt),
      onRenderRow: v(this, In),
      ...s
    });
  const a = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(ro, {
    className: "dtable-header",
    style: { height: r },
    renders: a,
    generateArgs: [n],
    generatorThis: this
  });
}, Pn = new WeakSet(), Js = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: a, scrollLeft: f, scrollTop: h } = n;
  return /* @__PURE__ */ A($a, {
    top: o,
    height: s,
    rows: r,
    rowHeight: l,
    scrollLeft: f,
    scrollTop: h,
    onRenderCell: v(this, qt),
    onRenderRow: v(this, jn),
    ...a
  });
}, Hn = new WeakSet(), Zs = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(ro, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Wn = new WeakSet(), Qs = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: a, rowsHeightTotal: f, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ A(sr, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: v(this, Yt),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -u) + h,
      size: u,
      wheelContainer: this.ref
    })
  ), f > a && o.push(
    /* @__PURE__ */ A(sr, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: f,
      clientSize: a,
      onScroll: v(this, Yt),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Vt = new WeakSet(), fo = function() {
  var n;
  R(this, Te, !1), (n = this.options.afterRender) == null || n.call(this), v(this, K).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, jn = new WeakMap(), In = new WeakMap(), qt = new WeakMap(), Yt = new WeakMap(), Bn = new WeakMap(), Un = new WeakMap(), zn = new WeakSet(), ei = function() {
  if (v(this, xe))
    return !1;
  const o = { ...Sr(), ...v(this, De).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return R(this, xe, o), R(this, K, v(this, De).reduce((s, r) => {
    const { when: l, options: a } = r;
    return (!l || l(o)) && (s.push(r), a && Object.assign(o, typeof a == "function" ? a.call(this, o) : a)), s;
  }, [])), R(this, Ft, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Fn = new WeakSet(), ti = function() {
  var Fe, ye;
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
    var V;
    const T = (V = S.beforeLayout) == null ? void 0 : V.call(this, o);
    T && (o = { ...o, ...T }), Object.assign(s, S.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: a } = o, f = [], h = [], i = [], d = {}, u = [], c = [];
  let _ = 0, b = 0, p = 0;
  o.cols.forEach((S) => {
    if (S.hidden)
      return;
    const {
      name: T,
      type: V = "",
      fixed: G = !1,
      flex: se = !1,
      width: Ve = r,
      minWidth: Ae = l,
      maxWidth: Xt = a,
      ...Jt
    } = S, Qn = xa(Ve, Ae, Xt), P = {
      name: T,
      type: V,
      setting: {
        name: T,
        type: V,
        fixed: G,
        flex: se,
        width: Ve,
        minWidth: Ae,
        maxWidth: Xt,
        ...Jt
      },
      flex: G ? 0 : se === !0 ? 1 : typeof se == "number" ? se : 0,
      left: 0,
      width: Qn,
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Et) => {
      var Zt, Qt;
      const qe = (Zt = Et.colTypes) == null ? void 0 : Zt[V];
      if (qe) {
        const ce = typeof qe == "function" ? qe(P) : qe;
        ce && Object.assign(P.setting, ce);
      }
      (Qt = Et.onAddCol) == null || Qt.call(this, P);
    }), P.realWidth = P.realWidth || P.width, G === "left" ? (P.left = _, _ += P.width, f.push(P)) : G === "right" ? (P.left = b, b += P.width, h.push(P)) : (P.left = p, p += P.width, i.push(P)), P.flex && c.push(P), u.push(P), d[P.name] = P;
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
      m = 0, R(this, Te, !0);
      return;
    }
  } else
    m = g != null ? g : 0;
  const { data: k, rowKey: x = "id", rowHeight: y } = o, E = [], $ = (S, T, V) => {
    var se, Ve;
    const G = { data: V != null ? V : { [x]: S }, id: S, index: E.length, top: 0 };
    if (V || (G.lazy = !0), E.push(G), ((se = o.onAddRow) == null ? void 0 : se.call(this, G, T)) !== !1) {
      for (const Ae of n)
        if (((Ve = Ae.onAddRow) == null ? void 0 : Ve.call(this, G, T)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let S = 0; S < k; S++)
      $(`${S}`, S);
  else
    Array.isArray(k) && k.forEach((S, T) => {
      var V;
      typeof S == "object" ? $(`${(V = S[x]) != null ? V : ""}`, T, S) : $(`${S != null ? S : ""}`, T);
    });
  let M = E;
  const O = {};
  if (o.onAddRows) {
    const S = o.onAddRows.call(this, M);
    S && (M = S);
  }
  for (const S of n) {
    const T = (Fe = S.onAddRows) == null ? void 0 : Fe.call(this, M);
    T && (M = T);
  }
  M.forEach((S, T) => {
    O[S.id] = S, S.index = T, S.top = S.index * y;
  });
  const { header: L, footer: q } = o, F = L ? o.headerHeight || y : 0, re = q ? o.footerHeight || y : 0;
  let Y = o.height, j = 0;
  const X = M.length * y, Se = F + re + X;
  if (typeof Y == "function" && (Y = Y.call(this, Se)), Y === "auto")
    j = Se;
  else if (typeof Y == "object")
    j = Math.min(Y.max, Math.max(Y.min, Se));
  else if (Y === "100%") {
    const { parent: S } = this;
    if (S)
      j = S.clientHeight;
    else {
      j = 0, R(this, Te, !0);
      return;
    }
  } else
    j = Y;
  const ge = j - F - re, et = m - _ - b, me = {
    options: o,
    allRows: E,
    width: m,
    height: j,
    rows: M,
    rowsMap: O,
    rowHeight: y,
    rowsHeight: ge,
    rowsHeightTotal: X,
    header: L,
    footer: q,
    footerGenerators: s,
    headerHeight: F,
    footerHeight: re,
    colsMap: d,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: et,
      scrollColsWidth: p,
      fixedRightWidth: b
    }
  }, Re = (ye = o.onLayout) == null ? void 0 : ye.call(this, me);
  Re && Object.assign(me, Re), n.forEach((S) => {
    if (S.onLayout) {
      const T = S.onLayout.call(this, me);
      T && Object.assign(me, T);
    }
  }), R(this, ue, me);
}, Vn = new WeakSet(), ni = function() {
  (H(this, zn, ei).call(this) || !v(this, ue)) && H(this, Fn, ti).call(this);
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
}, N(co, "addPlugin", Ys), N(co, "removePlugin", Gs);
function Rr(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const oi = {
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
      Rr(this, o);
    },
    mouseleave() {
      Rr(this, !1);
    }
  }
};
Kt(oi, { buildIn: !0 });
function Aa(e, t) {
  var l, a;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (f, h) => {
    s && !s.call(this, f) || !!n[f] === h || (h ? n[f] = !0 : delete n[f], o[f] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !ri.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: f }) => {
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
function Ma(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function ri() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function La() {
  return Object.keys(this.state.checkedRows);
}
const si = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Aa,
    isRowChecked: Ma,
    isAllRowChecked: ri,
    getChecks: La
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
    var a, f;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), i = (f = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, h, o)) != null ? f : /* @__PURE__ */ A("input", {
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
      const f = this.isAllRowChecked(), h = (a = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? a : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: D(e.className, "is-checked") };
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
Kt(si);
function uo(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const l = uo.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? uo.call(this, t.parent).level + 1 : 0, t;
}
function Na(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ii.call(this)), t) {
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
function ii() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function li(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (s = l.children) != null && s.length && (t = li(e, t, l.children, o + 1)));
  }
  return t;
}
function ai(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, ai(e, r, n, o);
  }), s;
}
function ci(e, t, n, o, s) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((f) => {
    const h = !!(o[f] !== void 0 ? o[f] : s[f]);
    return n === h;
  })) && (o[t] = n), r.parent && ci(e, r.parent, n, o, s);
}
const fi = {
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
        const l = ai(this, s, r, o);
        l != null && l.parent && ci(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Na,
    isAllCollapsed: ii,
    getNestedRowInfo: uo
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), li(this.data.nestedMap), e.sort((t, n) => {
      var l, a;
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((a = s.order) != null ? a : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a, f, h;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((f = (a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, l, o, t, s)) != null ? f : /* @__PURE__ */ A("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), l.level) {
      let { nestedIndent: i = r } = t.setting;
      i && (i === !0 && (i = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ A("div", {
        className: "dtable-nested-indent",
        style: { width: i * l.level + "px" }
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
      className: D(e.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = D(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
Kt(fi);
const de = 24 * 60 * 60 * 1e3, J = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), xt = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ho = (e, t = new Date()) => J(e).getFullYear() === J(t).getFullYear(), ui = (e, t = new Date()) => (e = J(e), t = J(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Oa = (e, t = new Date()) => {
  e = J(e), t = J(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, Ta = (e, t) => xt(J(t), e), Da = (e, t) => xt(J(t).getTime() - de, e), Pa = (e, t) => xt(J(t).getTime() + de, e), Ha = (e, t) => xt(J(t).getTime() - 2 * de, e), Ln = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, Wa = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Ln(e, ho(e) ? o.month : o.full);
  if (xt(e, t))
    return s;
  const r = Ln(t, ho(e, t) ? ui(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, ja = (e) => {
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
}, _o = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, _o(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, _o(e, "day", n, o);
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
const hi = {
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
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: l = `${t.name}Avatar` } = t.setting, a = /* @__PURE__ */ A("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ A("img", {
          src: o ? o[l] : ""
        }));
        return s ? e.unshift(a) : e[0] = a, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, a = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ A("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ A("circle", {
          cx: a,
          cy: a,
          r: l,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ A("circle", {
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
        }), /* @__PURE__ */ A("text", {
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
            return h && (f = { className: l, ...h, ...f }), tt(s, f);
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Ln(r, o) : s === "html" ? e[0] = { html: tt(o, r) } : e[0] = tt(o, r), e;
      }
    }
  }
};
Kt(hi);
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: oi,
  checkable: si,
  nested: fi,
  rich: hi
}, Symbol.toStringTag, { value: "Module" }));
class nn extends yo {
}
N(nn, "Component", co), N(nn, "definePlugin", Kt), N(nn, "removePlugin", Gs), N(nn, "plugins", Ia);
var _e, Q;
class Ba {
  constructor(t) {
    C(this, _e, void 0);
    C(this, Q, void 0);
    R(this, _e, t), R(this, Q, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(v(this, _e).parentElement.parentElement, v(this, _e).parentElement), this.addActive(v(this, Q).parentElement, v(this, Q)), v(this, Q).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, Q, v(this, _e)), this.addActive(v(this, Q).parentElement, v(this, Q)), R(this, _e, document.querySelector(`[href='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${v(this, Q).getAttribute("id")}']`) || document.querySelector(`[data-target='#${v(this, Q).getAttribute("id")}']`)), this.addActive(v(this, _e).parentElement.parentElement, v(this, _e).parentElement);
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Ba(e.target).showTarget());
});
const Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: de,
  createDate: J,
  isSameDay: xt,
  isSameYear: ho,
  isSameMonth: ui,
  isSameWeek: Oa,
  isToday: Ta,
  isYesterday: Da,
  isTomorrow: Pa,
  isDBY: Ha,
  formatDate: Ln,
  formatDateSpan: Wa,
  getTimeBeforeDesc: ja,
  calculateTimestamp: _o,
  formatString: tt,
  formatBytes: Ei,
  convertBytes: Ci,
  isObject: sn,
  mergeDeep: gn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ui as ActionMenu,
  Fa as Avatar,
  ie as ContextMenu,
  nn as DTable,
  Be as Dropdown,
  vo as EventBus,
  es as Menu,
  Ba as NavTabs,
  sr as Scrollbar,
  Ri as addI18nMap,
  za as browser,
  $i as getLangCode,
  Va as helpers,
  Gt as i18n,
  oo as nativeEvents,
  Si as setLangCode,
  Qi as store
};
