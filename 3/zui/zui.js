var Ka = Object.defineProperty;
var Xa = (e, t, n) => t in e ? Ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (Xa(e, typeof t != "symbol" ? t + "" : t, n), n), Jo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var y = (e, t, n) => (Jo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), S = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, M = (e, t, n, o) => (Jo(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var X = (e, t, n) => (Jo(e, t, "access private method"), n);
var jo, H, fi, ui, Wt, Xr, to = {}, pi = [], Ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Uo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Un(e, l, o, i, null);
}
function Un(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++fi : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function Za() {
  return { current: null };
}
function Bo(e) {
  return e.children;
}
function Bn(e, t) {
  this.props = e, this.context = t;
}
function rn(e, t) {
  if (t == null)
    return e.__ ? rn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? rn(e) : null;
}
function di(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return di(e);
  }
}
function Jr(e) {
  (!e.__d && (e.__d = !0) && Wt.push(e) && !no.__r++ || Xr !== H.debounceRendering) && ((Xr = H.debounceRendering) || setTimeout)(no);
}
function no() {
  for (var e; no.__r = Wt.length; )
    e = Wt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Wt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = ze({}, r)).__v = r.__v + 1, vr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? rn(r) : l, r.__h), yi(o, r), r.__e != l && di(r)));
    });
}
function vi(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || pi, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Un(null, a, null, null, a) : Array.isArray(a) ? Un(Bo, { children: a }, null, null, null) : a.__b > 0 ? Un(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      vr(e, a, f = f || to, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gi(a, _, e) : _ = mi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = rn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && wi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      bi(d[s], d[++s], d[++s]);
}
function gi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? gi(o, t, n) : mi(n, o, o, i, o.__e, t));
  return t;
}
function mi(e, t, n, o, i, r) {
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
function Qa(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || oo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || oo(e, r, t[r], n[r], o);
}
function Zr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ja.test(t) ? n : n + "px";
}
function oo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Zr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Zr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? es : Qr, r) : e.removeEventListener(t, r ? es : Qr, r);
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
function Qr(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function es(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function vr(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = H.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Bn(d, g), s.constructor = m, s.render = tc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ze({}, s.__s)), ze(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = H.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ze(ze({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Bo && p.key == null ? p.props.children : p, vi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ec(n.__e, t, n, o, i, r, l, _);
    (p = H.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), H.__e(E, t, n);
  }
}
function yi(e, t) {
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
function ec(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && jo.call(e.childNodes), p = (h = n.props || to).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Qa(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, vi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && hi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && oo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && oo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function bi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function wi(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || bi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && wi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || hi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function tc(e, t, n) {
  return this.constructor(e, n);
}
function nc(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], vr(t, e = (!o && n || t).__k = Uo(Bo, null, [e]), i || to, to, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? jo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), yi(r, e);
}
jo = pi.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, fi = 0, ui = function(e) {
  return e != null && e.constructor === void 0;
}, Bn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, n), this.props)), e && ze(n, e), e != null && this.__v && (t && this._sb.push(t), Jr(this));
}, Bn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Jr(this));
}, Bn.prototype.render = Bo, Wt = [], no.__r = 0;
var Se;
class oc {
  constructor(t = "") {
    S(this, Se, void 0);
    typeof t == "object" ? M(this, Se, t) : M(this, Se, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    y(this, Se).addEventListener(t, n, o);
  }
  once(t, n, o) {
    y(this, Se).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    y(this, Se).removeEventListener(t, n, o);
  }
  emit(t) {
    return y(this, Se).dispatchEvent(t), t;
  }
}
Se = new WeakMap();
const tr = /* @__PURE__ */ new Set([
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
class gr extends oc {
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
    return typeof t == "string" && (tr.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(gr.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (tr.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Re, bn, it, It;
class ts extends gr {
  constructor(n = "", o) {
    super(n);
    S(this, it);
    S(this, Re, /* @__PURE__ */ new Map());
    S(this, bn, void 0);
    M(this, bn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = X(this, it, It).call(this, n), super.on(n, o, i), y(this, Re).set(o, [n, i]);
  }
  off(n, o, i) {
    n = X(this, it, It).call(this, n), super.off(n, o, i), y(this, Re).delete(o);
  }
  once(n, o, i) {
    n = X(this, it, It).call(this, n);
    const r = (l) => {
      o(l), y(this, Re).delete(r);
    };
    super.once(n, r, i), y(this, Re).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = X(this, it, It).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, Re).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), y(this, Re).clear();
  }
}
Re = new WeakMap(), bn = new WeakMap(), it = new WeakSet(), It = function(n) {
  const o = y(this, bn);
  return tr.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function rc(e, t) {
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
function sc(e, t, n) {
  const o = rc(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Zo(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function nr(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Zo(e) && Zo(n))
    for (const o in n)
      Zo(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), nr(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return nr(e, ...t);
}
function ye(e, ...t) {
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
var mr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(mr || {});
function Du(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / mr[n]).toFixed(t) + n);
}
const Lu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * mr[o];
};
var ci, _i;
let yr = (_i = (ci = document.documentElement.getAttribute("lang")) == null ? void 0 : ci.toLowerCase()) != null ? _i : "zh_cn", Ie;
function ic() {
  return yr;
}
function lc(e) {
  yr = e.toLowerCase();
}
function ac(e, t) {
  Ie || (Ie = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), nr(Ie, e);
}
function Nn(e, t, n, o, i, r) {
  Array.isArray(e) ? Ie && e.unshift(Ie) : e = Ie ? [Ie, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || yr;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const p = _[l];
    if (!p)
      continue;
    const s = r && _ === Ie ? `${r}.${t}` : t;
    if (c = sc(p, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? ye(c, ...Array.isArray(n) ? n : [n]) : c;
}
Nn.addLang = ac;
Nn.getCode = ic;
Nn.setCode = lc;
function cc(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Me, ht, ne;
class jt {
  constructor(t, n) {
    S(this, Me, void 0);
    S(this, ht, void 0);
    S(this, ne, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && M(this, ne, new ts(t, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, Me, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? cc(t.dataset) : null, ...n }), this.constructor.all.set(t, this), M(this, ht, t), this.init(), (o = y(this, ne)) == null || o.emit("inited", this);
  }
  get options() {
    return y(this, Me);
  }
  get element() {
    return y(this, ht);
  }
  get events() {
    return y(this, ne);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(y(this, Me), t), y(this, Me);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(y(this, ht)), y(this, ne) && (y(this, ne).emit("destroyed", this), y(this, ne).offAll());
  }
  on(t, n, o) {
    var i;
    (i = y(this, ne)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = y(this, ne)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = y(this, ne)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = ts.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = y(this, Me)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, ne)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = Nn(y(this, Me).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
  }
  static get NAME() {
    return this.name.toLowerCase();
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
Me = new WeakMap(), ht = new WeakMap(), ne = new WeakMap(), A(jt, "EVENTS", !1), A(jt, "DEFAULT", {}), A(jt, "allComponents", /* @__PURE__ */ new Map());
class Pn extends jt {
  constructor() {
    super(...arguments);
    A(this, "ref", Za());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    nc(/* @__PURE__ */ Uo(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var br, j, ki, $i, Ut, ns, xi = {}, Ei = [], _c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ci(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? br.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Fn(e, l, o, i, null);
}
function Fn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ki : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function fc() {
  return { current: null };
}
function wr(e) {
  return e.children;
}
function Bt(e, t) {
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
function Si(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Si(e);
  }
}
function os(e) {
  (!e.__d && (e.__d = !0) && Ut.push(e) && !ro.__r++ || ns !== j.debounceRendering) && ((ns = j.debounceRendering) || setTimeout)(ro);
}
function ro() {
  for (var e; ro.__r = Ut.length; )
    e = Ut.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ut = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ve({}, r)).__v = r.__v + 1, Ai(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? sn(r) : l, r.__h), pc(o, r), r.__e != l && Si(r)));
    });
}
function Ri(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || Ei, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Fn(null, a, null, null, a) : Array.isArray(a) ? Fn(wr, { children: a }, null, null, null) : a.__b > 0 ? Fn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Ai(e, a, f = f || xi, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Mi(a, _, e) : _ = Ti(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = sn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Pi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ni(d[s], d[++s], d[++s]);
}
function Mi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Mi(o, t, n) : Ti(n, o, o, i, o.__e, t));
  return t;
}
function Ti(e, t, n, o, i, r) {
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
function uc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || so(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || so(e, r, t[r], n[r], o);
}
function rs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _c.test(t) ? n : n + "px";
}
function so(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || rs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || rs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? is : ss, r) : e.removeEventListener(t, r ? is : ss, r);
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
function ss(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function is(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Ai(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = j.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Bt(d, g), s.constructor = m, s.render = dc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ve({}, s.__s)), Ve(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = j.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ve(Ve({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === wr && p.key == null ? p.props.children : p, Ri(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hc(n.__e, t, n, o, i, r, l, _);
    (p = j.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), j.__e(E, t, n);
  }
}
function pc(e, t) {
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
function hc(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && br.call(e.childNodes), p = (h = n.props || xi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (uc(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ri(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ci(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && so(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && so(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Ni(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function Pi(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ni(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Pi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ci(e.__e), e.__ = e.__e = e.__d = void 0;
}
function dc(e, t, n) {
  return this.constructor(e, n);
}
br = Ei.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ki = 0, $i = function(e) {
  return e != null && e.constructor === void 0;
}, Bt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), os(this));
}, Bt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), os(this));
}, Bt.prototype.render = wr, Ut = [], ro.__r = 0;
const N = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? N(...n) : typeof n == "function" ? N(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function vc({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ee(e, {
    className: N(t),
    style: o,
    ...i
  }, n);
}
function Oi({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: p,
  trailingIcon: s,
  hint: h,
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
    className: N(t, { disabled: r, active: l }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: p,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function gc({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return ee(e, {
    className: N(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function mc({
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
    className: N(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function yc(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: p,
    ...s
  } = e, h = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    var v;
    const d = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? d.push(..._.call(l, b, a, ...r)) : d.push(...(v = b.call(l, a, ...r)) != null ? v : []) : d.push(b), d.forEach((g) => {
      var k;
      g != null && (typeof g == "object" && !ui(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ Uo("div", {
          className: N(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...(k = g.attrs) != null ? k : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(f, g.style), g.className && h.push(g.className), g.children && a.push(g.children), g.attrs && Object.assign(s, g.attrs)) : a.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: N(h),
    style: f,
    ...s
  }, a];
}
function or({
  tag: e = "div",
  ...t
}) {
  const [n, o] = yc(t);
  return Uo(e, n, ...o);
}
function bc(e) {
  return /* @__PURE__ */ ee(or, {
    ...e
  });
}
function Di({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return ee(e, {
    className: N(t),
    style: o,
    ...i
  }, n);
}
const So = class extends Bt {
  constructor() {
    super(...arguments);
    A(this, "ref", fc());
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
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
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = N(c.className), c;
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
        if ($i(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: c = "item", component: _, key: p = i, rootAttrs: s, rootClass: h, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || So.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(b, {
      className: N(h),
      children: a,
      style: f,
      key: p,
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
      className: N(`${this.name}-${i.type}`, l),
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
      itemRender: p,
      onClickItem: s,
      beforeRender: h,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ee(b, {
      class: N(this.name, l),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), _);
  }
};
let st = So;
A(st, "ItemComponents", {
  divider: vc,
  item: Oi,
  heading: gc,
  space: mc,
  custom: bc,
  basic: Di
}), A(st, "ROOT_TAG", "menu");
class wc extends Pn {
}
A(wc, "Component", st);
function ls({
  ...e
}) {
  return /* @__PURE__ */ ee(Oi, {
    ...e
  });
}
var wn, he, dt;
class kr extends st {
  constructor(n) {
    var o;
    super(n);
    S(this, wn, /* @__PURE__ */ new Set());
    S(this, he, void 0);
    S(this, dt, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    M(this, he, n.nestedShow === void 0), y(this, he) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
      nestedShow: y(this, he) ? this.state.nestedShow : this.props.nestedShow,
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
    var p;
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = (p = r.key) != null ? p : i;
    y(this, wn).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = ls), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, dt).bind(this, l, !0),
        onMouseLeave: y(this, dt).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (h) => {
        y(this, dt).call(this, l, void 0, h), s == null || s(h);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, he) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!y(this, he))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, wn).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    !y(this, he) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !y(this, he) || this.setState({ nestedShow: !1 });
  }
}
wn = new WeakMap(), he = new WeakMap(), dt = new WeakMap(), A(kr, "ItemComponents", {
  item: ls
});
class kc extends Pn {
}
A(kc, "Component", kr);
var Li, rr, Hi, $c = [];
function xc(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Li.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ec(e, l, o, i, null);
}
function Ec(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Hi : i };
  return i == null && rr.vnode != null && rr.vnode(r), r;
}
Li = $c.slice, rr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hi = 0;
class Ii extends kr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = N(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ xc("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
class Cc extends Pn {
}
A(Cc, "Component", Ii);
function Sc(e) {
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
function Rc(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Mc(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Sc,
  domReady: Rc,
  isElementVisible: Mc,
  classes: N
}, Symbol.toStringTag, { value: "Module" }));
let Tc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var kn, We, de, vt, gt, zn;
const zr = class {
  constructor(t, n = "local") {
    S(this, gt);
    S(this, kn, void 0);
    S(this, We, void 0);
    S(this, de, void 0);
    S(this, vt, void 0);
    M(this, kn, n), M(this, We, `ZUI_STORE:${t != null ? t : Tc()}`), M(this, de, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return y(this, kn);
  }
  get session() {
    return this.type === "session" ? this : (y(this, vt) || M(this, vt, new zr(y(this, We), "session")), y(this, vt));
  }
  get(t, n) {
    const o = y(this, de).getItem(X(this, gt, zn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    y(this, de).setItem(X(this, gt, zn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    y(this, de).removeItem(X(this, gt, zn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < y(this, de).length; n++) {
      const o = y(this, de).key(n);
      if (o != null && o.startsWith(y(this, We))) {
        const i = y(this, de).getItem(o);
        typeof i == "string" && t(o.substring(y(this, We).length + 1), JSON.parse(i));
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
let io = zr;
kn = new WeakMap(), We = new WeakMap(), de = new WeakMap(), vt = new WeakMap(), gt = new WeakSet(), zn = function(t) {
  return `${y(this, We)}:${t}`;
};
const Ac = new io("DEFAULT");
function Nc(e, t = "local") {
  return new io(e, t);
}
Object.assign(Ac, { create: Nc });
var $r, U, Wi, Ft, as, ji = {}, Ui = [], Pc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function cs(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $r.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vn(e, l, o, i, null);
}
function Vn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Wi : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function xr(e) {
  return e.children;
}
function zt(e, t) {
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
function Fi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fi(e);
  }
}
function _s(e) {
  (!e.__d && (e.__d = !0) && Ft.push(e) && !lo.__r++ || as !== U.debounceRendering) && ((as = U.debounceRendering) || setTimeout)(lo);
}
function lo() {
  for (var e; lo.__r = Ft.length; )
    e = Ft.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ft = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, Gi(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? ln(r) : l, r.__h), Dc(o, r), r.__e != l && Fi(r)));
    });
}
function zi(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || Ui, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vn(null, a, null, null, a) : Array.isArray(a) ? Vn(xr, { children: a }, null, null, null) : a.__b > 0 ? Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Gi(e, a, f = f || ji, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Vi(a, _, e) : _ = qi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ln(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Ki(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Yi(d[s], d[++s], d[++s]);
}
function Vi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Vi(o, t, n) : qi(n, o, o, i, o.__e, t));
  return t;
}
function qi(e, t, n, o, i, r) {
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
function Oc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ao(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ao(e, r, t[r], n[r], o);
}
function fs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pc.test(t) ? n : n + "px";
}
function ao(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || fs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || fs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ps : us, r) : e.removeEventListener(t, r ? ps : us, r);
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
function us(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function ps(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function Gi(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = U.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new zt(d, g), s.constructor = m, s.render = Hc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = U.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === xr && p.key == null ? p.props.children : p, zi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Lc(n.__e, t, n, o, i, r, l, _);
    (p = U.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), U.__e(E, t, n);
  }
}
function Dc(e, t) {
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
function Lc(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && $r.call(e.childNodes), p = (h = n.props || ji).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Oc(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, zi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ln(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && ao(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ao(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Yi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function Ki(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Yi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ki(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Bi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Hc(e, t, n) {
  return this.constructor(e, n);
}
$r = Ui.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wi = 0, zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), _s(this));
}, zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _s(this));
}, zt.prototype.render = xr, Ft = [], lo.__r = 0;
class Iu extends zt {
  render() {
    const { size: t, rounded: n, className: o, style: i, src: r, text: l, children: c, ..._ } = this.props, p = [o], s = { ...i };
    let h = null;
    return r ? h = /* @__PURE__ */ cs("img", {
      src: r,
      alt: l
    }) : h = l, typeof t == "number" ? (s.width = t, s.height = t) : typeof t == "string" && p.push(`avatar-${t}`), typeof n == "string" && p.push(`rounded-${n}`), /* @__PURE__ */ cs("div", {
      className: N(p),
      style: s,
      ..._
    }, h, c);
  }
}
function Ic() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Wc() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function jc(e, t) {
  Ic(), e.classList.add("block"), hs(e, t), e.onclick = (n) => Uc(n, e), window.addEventListener("resize", () => {
    hs(e, t);
  });
}
function Xi(e) {
  var t;
  Wc(), (t = e.classList) == null || t.remove("block");
}
function hs(e, t) {
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
function Uc(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Xi(t));
}
function Bc(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = Bc(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    jc(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && Xi(t);
});
var Ji, sr, Zi, Fc = [];
function Fo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ji.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zc(e, l, o, i, null);
}
function zc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Zi : i };
  return i == null && sr.vnode != null && sr.vnode(r), r;
}
Ji = Fc.slice, sr = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Zi = 0;
var Qi, ir, el, Vc = [];
function an(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return qc(e, l, o, i, null);
}
function qc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++el : i };
  return i == null && ir.vnode != null && ir.vnode(r), r;
}
Qi = Vc.slice, ir = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, el = 0;
var Er, B, tl, Vt, ds, nl = {}, ol = [], Gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function rl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Lt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Er.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return qn(e, l, o, i, null);
}
function qn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++tl : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function Cr(e) {
  return e.children;
}
function qt(e, t) {
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
function sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return sl(e);
  }
}
function vs(e) {
  (!e.__d && (e.__d = !0) && Vt.push(e) && !co.__r++ || ds !== B.debounceRendering) && ((ds = B.debounceRendering) || setTimeout)(co);
}
function co() {
  for (var e; co.__r = Vt.length; )
    e = Vt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, cl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? cn(r) : l, r.__h), Kc(o, r), r.__e != l && sl(r)));
    });
}
function il(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || ol, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? qn(null, a, null, null, a) : Array.isArray(a) ? qn(Cr, { children: a }, null, null, null) : a.__b > 0 ? qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      cl(e, a, f = f || nl, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ll(a, _, e) : _ = al(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = cn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && fl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      _l(d[s], d[++s], d[++s]);
}
function ll(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ll(o, t, n) : al(n, o, o, i, o.__e, t));
  return t;
}
function al(e, t, n, o, i, r) {
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
    r === "children" || r === "key" || r in t || _o(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || _o(e, r, t[r], n[r], o);
}
function gs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gc.test(t) ? n : n + "px";
}
function _o(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || gs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || gs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ys : ms, r) : e.removeEventListener(t, r ? ys : ms, r);
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
function ms(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function ys(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function cl(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = B.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new qt(d, g), s.constructor = m, s.render = Jc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = B.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Cr && p.key == null ? p.props.children : p, il(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xc(n.__e, t, n, o, i, r, l, _);
    (p = B.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), B.__e(E, t, n);
  }
}
function Kc(e, t) {
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
function Xc(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Er.call(e.childNodes), p = (h = n.props || nl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Yc(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, il(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && rl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && _o(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && _o(e, "checked", u, h.checked, !1));
  }
  return e;
}
function _l(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function fl(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || _l(o, null, t)), (o = e.__c) != null) {
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
      o[i] && fl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || rl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jc(e, t, n) {
  return this.constructor(e, n);
}
Er = ol.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, tl = 0, qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), vs(this));
}, qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vs(this));
}, qt.prototype.render = Cr, Vt = [], co.__r = 0;
class On extends qt {
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
      active: p,
      loading: s,
      icon: h,
      text: f,
      trailingIcon: a,
      caret: u,
      square: b,
      hint: d,
      ...v
    } = this.props, g = t || (l ? "a" : "button"), k = f == null || typeof f == "string" && !f.length, w = k && !h && !a && !r;
    return Lt(
      g,
      {
        className: N("btn", n, i, {
          "btn-caret": w,
          disabled: _,
          active: p,
          loading: s,
          square: b === void 0 ? !w && !r && k : b
        }, o ? `size-${o}` : ""),
        title: d,
        [g === "a" ? "href" : "data-url"]: l,
        [g === "a" ? "target" : "data-target"]: l,
        type: g === "button" ? "button" : void 0,
        ...v
      },
      typeof h == "string" ? /* @__PURE__ */ Lt("i", {
        class: `icon ${h}`
      }) : h,
      k ? null : /* @__PURE__ */ Lt("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ Lt("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ Lt("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
function Zc({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ an(On, {
    type: n,
    ...o
  });
}
var Sr, F, ul, Gt, bs, pl = {}, hl = [], Qc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function dl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function e_(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Gn(e, l, o, i, null);
}
function Gn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ul : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function t_() {
  return { current: null };
}
function Rr(e) {
  return e.children;
}
function Yt(e, t) {
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
function vl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return vl(e);
  }
}
function ws(e) {
  (!e.__d && (e.__d = !0) && Gt.push(e) && !fo.__r++ || bs !== F.debounceRendering) && ((bs = F.debounceRendering) || setTimeout)(fo);
}
function fo() {
  for (var e; fo.__r = Gt.length; )
    e = Gt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Gt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, bl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? _n(r) : l, r.__h), o_(o, r), r.__e != l && vl(r)));
    });
}
function gl(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || hl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gn(null, a, null, null, a) : Array.isArray(a) ? Gn(Rr, { children: a }, null, null, null) : a.__b > 0 ? Gn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      bl(e, a, f = f || pl, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ml(a, _, e) : _ = yl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = _n(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && kl(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      wl(d[s], d[++s], d[++s]);
}
function ml(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ml(o, t, n) : yl(n, o, o, i, o.__e, t));
  return t;
}
function yl(e, t, n, o, i, r) {
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
function n_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || uo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || uo(e, r, t[r], n[r], o);
}
function ks(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Qc.test(t) ? n : n + "px";
}
function uo(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ks(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ks(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? xs : $s, r) : e.removeEventListener(t, r ? xs : $s, r);
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
function $s(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function xs(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function bl(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = F.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Yt(d, g), s.constructor = m, s.render = s_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = F.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Rr && p.key == null ? p.props.children : p, gl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = r_(n.__e, t, n, o, i, r, l, _);
    (p = F.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), F.__e(E, t, n);
  }
}
function o_(e, t) {
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
function r_(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Sr.call(e.childNodes), p = (h = n.props || pl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (n_(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, gl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _n(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && dl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && uo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && uo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function wl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function kl(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || wl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && kl(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || dl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function s_(e, t, n) {
  return this.constructor(e, n);
}
Sr = hl.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ul = 0, Yt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), ws(this));
}, Yt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ws(this));
}, Yt.prototype.render = Rr, Gt = [], fo.__r = 0;
var Mr = "top", $l = "bottom", po = "right", fn = "left", i_ = "auto", xl = [Mr, $l, po, fn], l_ = "start", a_ = "end", c_ = /* @__PURE__ */ [].concat(xl, [i_]).reduce(function(e, t) {
  return e.concat([t, t + "-" + l_, t + "-" + a_]);
}, []);
function El(e) {
  return e.split("-")[0];
}
function Tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cl(e) {
  var t = Tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Tr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var __ = Math.max, f_ = Math.min, Es = Math.round;
function lr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function u_() {
  return !/^((?!chrome|android).)*safari/i.test(lr());
}
function p_(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && un(e) && (i = e.offsetWidth > 0 && Es(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Es(o.height) / e.offsetHeight || 1);
  var l = Cl(e) ? Tt(e) : window, c = l.visualViewport, _ = !u_() && n, p = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
  return {
    width: h,
    height: f,
    top: s,
    right: p + h,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function h_(e) {
  var t = p_(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function d_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Tr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function pn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function hn(e) {
  return Tt(e).getComputedStyle(e);
}
function v_(e) {
  return ["table", "td", "th"].indexOf(pn(e)) >= 0;
}
function g_(e) {
  return ((Cl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function m_(e) {
  return pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Tr(e) ? e.host : null) || g_(e);
}
function Cs(e) {
  return !un(e) || hn(e).position === "fixed" ? null : e.offsetParent;
}
function y_(e) {
  var t = /firefox/i.test(lr()), n = /Trident/i.test(lr());
  if (n && un(e)) {
    var o = hn(e);
    if (o.position === "fixed")
      return null;
  }
  var i = m_(e);
  for (Tr(i) && (i = i.host); un(i) && ["html", "body"].indexOf(pn(i)) < 0; ) {
    var r = hn(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function b_(e) {
  for (var t = Tt(e), n = Cs(e); n && v_(n) && hn(n).position === "static"; )
    n = Cs(n);
  return n && (pn(n) === "html" || pn(n) === "body" && hn(n).position === "static") ? t : n || y_(e) || t;
}
function w_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function k_(e, t, n) {
  return __(e, f_(t, n));
}
function $_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function x_(e) {
  return Object.assign({}, $_(), e);
}
function E_(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var C_ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, x_(typeof t != "number" ? t : E_(t, xl));
};
function S_(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = El(n.placement), _ = w_(c), p = [fn, po].indexOf(c) >= 0, s = p ? "height" : "width";
  if (!(!r || !l)) {
    var h = C_(i.padding, n), f = h_(r), a = _ === "y" ? Mr : fn, u = _ === "y" ? $l : po, b = n.rects.reference[s] + n.rects.reference[_] - l[_] - n.rects.popper[s], d = l[_] - n.rects.reference[_], v = b_(r), g = v ? _ === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = b / 2 - d / 2, w = h[a], C = g - f[s] - h[u], $ = g / 2 - f[s] / 2 + k, x = k_(w, $, C), m = _;
    n.modifiersData[o] = (t = {}, t[m] = x, t.centerOffset = x - $, t);
  }
}
function R_(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (un(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !d_(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const M_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S_,
  effect: R_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function T_(e, t, n) {
  var o = El(e), i = [fn, Mr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * i, [fn, po].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function A_(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = c_.reduce(function(s, h) {
    return s[h] = T_(h, t.rects, r), s;
  }, {}), c = l[t.placement], _ = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = l;
}
const N_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: A_
};
var zo, I, Sl, Kt, Ss, ho = {}, Rl = [], P_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ml(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ar(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yn(e, l, o, i, null);
}
function Yn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Sl : i };
  return i == null && I.vnode != null && I.vnode(r), r;
}
function Vo(e) {
  return e.children;
}
function Kn(e, t) {
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
function Tl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Tl(e);
  }
}
function Rs(e) {
  (!e.__d && (e.__d = !0) && Kt.push(e) && !vo.__r++ || Ss !== I.debounceRendering) && ((Ss = I.debounceRendering) || setTimeout)(vo);
}
function vo() {
  for (var e; vo.__r = Kt.length; )
    e = Kt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, Nr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? dn(r) : l, r.__h), Ol(o, r), r.__e != l && Tl(r)));
    });
}
function Al(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || Rl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yn(null, a, null, null, a) : Array.isArray(a) ? Yn(Vo, { children: a }, null, null, null) : a.__b > 0 ? Yn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Nr(e, a, f = f || ho, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nl(a, _, e) : _ = Pl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Ll(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Dl(d[s], d[++s], d[++s]);
}
function Nl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Nl(o, t, n) : Pl(n, o, o, i, o.__e, t));
  return t;
}
function Pl(e, t, n, o, i, r) {
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
function O_(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || go(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || go(e, r, t[r], n[r], o);
}
function Ms(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || P_.test(t) ? n : n + "px";
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
            n && t in n || Ms(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ms(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? As : Ts, r) : e.removeEventListener(t, r ? As : Ts, r);
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
function Ts(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function As(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Nr(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = I.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Kn(d, g), s.constructor = m, s.render = L_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = I.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Vo && p.key == null ? p.props.children : p, Al(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = D_(n.__e, t, n, o, i, r, l, _);
    (p = I.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), I.__e(E, t, n);
  }
}
function Ol(e, t) {
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
function D_(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && zo.call(e.childNodes), p = (h = n.props || ho).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (O_(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Al(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ml(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && go(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && go(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Dl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function Ll(e, t, n) {
  var o, i;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Dl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ll(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ml(e.__e), e.__ = e.__e = e.__d = void 0;
}
function L_(e, t, n) {
  return this.constructor(e, n);
}
function H_(e, t, n) {
  var o, i, r;
  I.__ && I.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Nr(t, e = (!o && n || t).__k = Ar(Vo, null, [e]), i || ho, ho, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? zo.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Ol(r, e);
}
zo = Rl.slice, I = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Sl = 0, Kn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), Rs(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rs(this));
}, Kn.prototype.render = Vo, Kt = [], vo.__r = 0;
function le(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ft(e) {
  var t = le(e).Element;
  return e instanceof t || e instanceof Element;
}
function ie(e) {
  var t = le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var _t = Math.max, mo = Math.min, Ct = Math.round;
function ar() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Hl() {
  return !/^((?!chrome|android).)*safari/i.test(ar());
}
function St(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && ie(e) && (i = e.offsetWidth > 0 && Ct(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Ct(o.height) / e.offsetHeight || 1);
  var l = ft(e) ? le(e) : window, c = l.visualViewport, _ = !Hl() && n, p = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, h = o.width / i, f = o.height / r;
  return {
    width: h,
    height: f,
    top: s,
    right: p + h,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function Or(e) {
  var t = le(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function I_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function W_(e) {
  return e === le(e) || !ie(e) ? Or(e) : I_(e);
}
function be(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  return ((ft(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dr(e) {
  return St(et(e)).left + Or(e).scrollLeft;
}
function ue(e) {
  return le(e).getComputedStyle(e);
}
function Lr(e) {
  var t = ue(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function j_(e) {
  var t = e.getBoundingClientRect(), n = Ct(t.width) / e.offsetWidth || 1, o = Ct(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function U_(e, t, n) {
  n === void 0 && (n = !1);
  var o = ie(t), i = ie(t) && j_(t), r = et(t), l = St(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((be(t) !== "body" || Lr(r)) && (c = W_(t)), ie(t) ? (_ = St(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = Dr(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function Il(e) {
  var t = St(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function qo(e) {
  return be(e) === "html" ? e : e.assignedSlot || e.parentNode || (Pr(e) ? e.host : null) || et(e);
}
function Wl(e) {
  return ["html", "body", "#document"].indexOf(be(e)) >= 0 ? e.ownerDocument.body : ie(e) && Lr(e) ? e : Wl(qo(e));
}
function Xt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Wl(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = le(o), l = i ? [r].concat(r.visualViewport || [], Lr(o) ? o : []) : o, c = t.concat(l);
  return i ? c : c.concat(Xt(qo(l)));
}
function B_(e) {
  return ["table", "td", "th"].indexOf(be(e)) >= 0;
}
function Ns(e) {
  return !ie(e) || ue(e).position === "fixed" ? null : e.offsetParent;
}
function F_(e) {
  var t = /firefox/i.test(ar()), n = /Trident/i.test(ar());
  if (n && ie(e)) {
    var o = ue(e);
    if (o.position === "fixed")
      return null;
  }
  var i = qo(e);
  for (Pr(i) && (i = i.host); ie(i) && ["html", "body"].indexOf(be(i)) < 0; ) {
    var r = ue(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Go(e) {
  for (var t = le(e), n = Ns(e); n && B_(n) && ue(n).position === "static"; )
    n = Ns(n);
  return n && (be(n) === "html" || be(n) === "body" && ue(n).position === "static") ? t : n || F_(e) || t;
}
var fe = "top", we = "bottom", Qe = "right", Ne = "left", Yo = "auto", Ko = [fe, we, Qe, Ne], Rt = "start", vn = "end", z_ = "clippingParents", jl = "viewport", Ht = "popper", V_ = "reference", Ps = /* @__PURE__ */ Ko.reduce(function(e, t) {
  return e.concat([t + "-" + Rt, t + "-" + vn]);
}, []), q_ = /* @__PURE__ */ [].concat(Ko, [Yo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rt, t + "-" + vn]);
}, []), G_ = "beforeRead", Y_ = "read", K_ = "afterRead", X_ = "beforeMain", J_ = "main", Z_ = "afterMain", Q_ = "beforeWrite", ef = "write", tf = "afterWrite", cr = [G_, Y_, K_, X_, J_, Z_, Q_, ef, tf];
function nf(e) {
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
function of(e) {
  var t = nf(e);
  return cr.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function rf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function He(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(i, r) {
    return i.replace(/%s/, r);
  }, e);
}
var rt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', sf = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Os = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function lf(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Os).filter(function(n, o, i) {
      return i.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(He(rt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(He(rt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          cr.indexOf(t.phase) < 0 && console.error(He(rt, t.name, '"phase"', "either " + cr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(He(rt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(He(rt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(He(rt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(He(rt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Os.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(i) {
          return i.name === o;
        }) == null && console.error(He(sf, String(t.name), o, o));
      });
    });
  });
}
function af(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var i = t(o);
    if (!n.has(i))
      return n.add(i), !0;
  });
}
function Pe(e) {
  return e.split("-")[0];
}
function cf(e) {
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
function _f(e, t) {
  var n = le(e), o = et(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    var p = Hl();
    (p || !p && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + Dr(e),
    y: _
  };
}
function ff(e) {
  var t, n = et(e), o = Or(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = _t(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = _t(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + Dr(e), _ = -o.scrollTop;
  return ue(i || n).direction === "rtl" && (c += _t(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function uf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Pr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function _r(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pf(e, t) {
  var n = St(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ds(e, t, n) {
  return t === jl ? _r(_f(e, n)) : ft(t) ? pf(t, n) : _r(ff(et(e)));
}
function hf(e) {
  var t = Xt(qo(e)), n = ["absolute", "fixed"].indexOf(ue(e).position) >= 0, o = n && ie(e) ? Go(e) : e;
  return ft(o) ? t.filter(function(i) {
    return ft(i) && uf(i, o) && be(i) !== "body";
  }) : [];
}
function df(e, t, n, o) {
  var i = t === "clippingParents" ? hf(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], c = r.reduce(function(_, p) {
    var s = Ds(e, p, o);
    return _.top = _t(s.top, _.top), _.right = mo(s.right, _.right), _.bottom = mo(s.bottom, _.bottom), _.left = _t(s.left, _.left), _;
  }, Ds(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Mt(e) {
  return e.split("-")[1];
}
function Ul(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bl(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? Pe(o) : null, r = o ? Mt(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (i) {
    case fe:
      _ = {
        x: l,
        y: t.y - n.height
      };
      break;
    case we:
      _ = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Qe:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ne:
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
  var p = i ? Ul(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (r) {
      case Rt:
        _[p] = _[p] - (t[s] / 2 - n[s] / 2);
        break;
      case vn:
        _[p] = _[p] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return _;
}
function Fl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function vf(e) {
  return Object.assign({}, Fl(), e);
}
function gf(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Hr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? z_ : c, p = n.rootBoundary, s = p === void 0 ? jl : p, h = n.elementContext, f = h === void 0 ? Ht : h, a = n.altBoundary, u = a === void 0 ? !1 : a, b = n.padding, d = b === void 0 ? 0 : b, v = vf(typeof d != "number" ? d : gf(d, Ko)), g = f === Ht ? V_ : Ht, k = e.rects.popper, w = e.elements[u ? g : f], C = df(ft(w) ? w : w.contextElement || et(e.elements.popper), _, s, l), $ = St(e.elements.reference), x = Bl({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), m = _r(Object.assign({}, k, x)), E = f === Ht ? m : $, D = {
    top: C.top - E.top + v.top,
    bottom: E.bottom - C.bottom + v.bottom,
    left: C.left - E.left + v.left,
    right: E.right - C.right + v.right
  }, P = e.modifiersData.offset;
  if (f === Ht && P) {
    var K = P[i];
    Object.keys(D).forEach(function(G) {
      var ae = [Qe, we].indexOf(G) >= 0 ? 1 : -1, J = [fe, we].indexOf(G) >= 0 ? "y" : "x";
      D[G] += K[J] * ae;
    });
  }
  return D;
}
var Ls = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", mf = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Is() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function yf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? Hs : i;
  return function(c, _, p) {
    p === void 0 && (p = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hs, r),
      modifiersData: {},
      elements: {
        reference: c,
        popper: _
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, a = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, r, s.options, g), s.scrollParents = {
          reference: ft(c) ? Xt(c) : c.contextElement ? Xt(c.contextElement) : [],
          popper: Xt(_)
        };
        var k = of(cf([].concat(o, s.options.modifiers)));
        if (s.orderedModifiers = k.filter(function(P) {
          return P.enabled;
        }), process.env.NODE_ENV !== "production") {
          var w = af([].concat(k, s.options.modifiers), function(P) {
            var K = P.name;
            return K;
          });
          if (lf(w), Pe(s.options.placement) === Yo) {
            var C = s.orderedModifiers.find(function(P) {
              var K = P.name;
              return K === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = ue(_), x = $.marginTop, m = $.marginRight, E = $.marginBottom, D = $.marginLeft;
          [x, m, E, D].some(function(P) {
            return parseFloat(P);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!Is(g, k)) {
            process.env.NODE_ENV !== "production" && console.error(Ls);
            return;
          }
          s.rects = {
            reference: U_(g, Go(k), s.options.strategy === "fixed"),
            popper: Il(k)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(P) {
            return s.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0, C = 0; C < s.orderedModifiers.length; C++) {
            if (process.env.NODE_ENV !== "production" && (w += 1, w > 100)) {
              console.error(mf);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, C = -1;
              continue;
            }
            var $ = s.orderedModifiers[C], x = $.fn, m = $.options, E = m === void 0 ? {} : m, D = $.name;
            typeof x == "function" && (s = x({
              state: s,
              options: E,
              name: D,
              instance: a
            }) || s);
          }
        }
      },
      update: rf(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Is(c, _))
      return process.env.NODE_ENV !== "production" && console.error(Ls), a;
    a.setOptions(p).then(function(d) {
      !f && p.onFirstUpdate && p.onFirstUpdate(d);
    });
    function u() {
      s.orderedModifiers.forEach(function(d) {
        var v = d.name, g = d.options, k = g === void 0 ? {} : g, w = d.effect;
        if (typeof w == "function") {
          var C = w({
            state: s,
            name: v,
            instance: a,
            options: k
          }), $ = function() {
          };
          h.push(C || $);
        }
      });
    }
    function b() {
      h.forEach(function(d) {
        return d();
      }), h = [];
    }
    return a;
  };
}
var Wn = {
  passive: !0
};
function bf(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, c = l === void 0 ? !0 : l, _ = le(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && p.forEach(function(s) {
    s.addEventListener("scroll", n.update, Wn);
  }), c && _.addEventListener("resize", n.update, Wn), function() {
    r && p.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Wn);
    }), c && _.removeEventListener("resize", n.update, Wn);
  };
}
const wf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bf,
  data: {}
};
function kf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Bl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const $f = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kf,
  data: {}
};
var xf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ef(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Ct(t * i) / i || 0,
    y: Ct(n * i) / i || 0
  };
}
function Ws(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, p = e.adaptive, s = e.roundOffsets, h = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, b = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y: b
  }) : {
    x: a,
    y: b
  };
  a = d.x, b = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = Ne, w = fe, C = window;
  if (p) {
    var $ = Go(n), x = "clientHeight", m = "clientWidth";
    if ($ === le(n) && ($ = et(n), ue($).position !== "static" && c === "absolute" && (x = "scrollHeight", m = "scrollWidth")), $ = $, i === fe || (i === Ne || i === Qe) && r === vn) {
      w = we;
      var E = h && $ === C && C.visualViewport ? C.visualViewport.height : $[x];
      b -= E - o.height, b *= _ ? 1 : -1;
    }
    if (i === Ne || (i === fe || i === we) && r === vn) {
      k = Qe;
      var D = h && $ === C && C.visualViewport ? C.visualViewport.width : $[m];
      a -= D - o.width, a *= _ ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: c
  }, p && xf), K = s === !0 ? Ef({
    x: a,
    y: b
  }) : {
    x: a,
    y: b
  };
  if (a = K.x, b = K.y, _) {
    var G;
    return Object.assign({}, P, (G = {}, G[w] = g ? "0" : "", G[k] = v ? "0" : "", G.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + b + "px)" : "translate3d(" + a + "px, " + b + "px, 0)", G));
  }
  return Object.assign({}, P, (t = {}, t[w] = g ? b + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function Cf(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c;
  if (process.env.NODE_ENV !== "production") {
    var p = ue(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(h) {
      return p.indexOf(h) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var s = {
    placement: Pe(t.placement),
    variation: Mt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ws(Object.assign({}, s, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ws(Object.assign({}, s, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Sf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cf,
  data: {}
};
function Rf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !ie(r) || !be(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function Mf(e) {
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
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), c = l.reduce(function(_, p) {
        return _[p] = "", _;
      }, {});
      !ie(i) || !be(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(_) {
        i.removeAttribute(_);
      }));
    });
  };
}
const Tf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rf,
  effect: Mf,
  requires: ["computeStyles"]
};
var Af = [wf, $f, Sf, Tf], zl = /* @__PURE__ */ yf({
  defaultModifiers: Af
});
function Nf(e) {
  return e === "x" ? "y" : "x";
}
function Xn(e, t, n) {
  return _t(e, mo(t, n));
}
function Pf(e, t, n) {
  var o = Xn(e, t, n);
  return o > n ? n : o;
}
function Of(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, p = n.rootBoundary, s = n.altBoundary, h = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, b = u === void 0 ? 0 : u, d = Hr(t, {
    boundary: _,
    rootBoundary: p,
    padding: h,
    altBoundary: s
  }), v = Pe(t.placement), g = Mt(t.placement), k = !g, w = Ul(v), C = Nf(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, m = t.rects.popper, E = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, D = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var G, ae = w === "y" ? fe : Ne, J = w === "y" ? we : Qe, W = w === "y" ? "height" : "width", te = $[w], De = te + d[ae], ke = te - d[J], ut = a ? -m[W] / 2 : 0, $e = g === Rt ? x[W] : m[W], Le = g === Rt ? -m[W] : -x[W], tt = t.elements.arrow, xe = a && tt ? Il(tt) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Fl(), L = R[ae], Y = R[J], Z = Xn(0, x[W], xe[W]), ce = k ? x[W] / 2 - ut - Z - L - D.mainAxis : $e - Z - L - D.mainAxis, nt = k ? -x[W] / 2 + ut + Z + Y + D.mainAxis : Le + Z + Y + D.mainAxis, Ee = t.elements.arrow && Go(t.elements.arrow), Nt = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, Ln = (G = P == null ? void 0 : P[w]) != null ? G : 0, O = te + ce - Ln - Nt, Hn = te + nt - Ln, Pt = Xn(a ? mo(De, O) : De, te, a ? _t(ke, Hn) : ke);
      $[w] = Pt, K[w] = Pt - te;
    }
    if (c) {
      var Ot, In = w === "x" ? fe : Ne, pt = w === "x" ? we : Qe, pe = $[C], ot = C === "y" ? "height" : "width", Dt = pe + d[In], Vr = pe - d[pt], Xo = [fe, Ne].indexOf(v) !== -1, qr = (Ot = P == null ? void 0 : P[C]) != null ? Ot : 0, Gr = Xo ? Dt : pe - x[ot] - m[ot] - qr + D.altAxis, Yr = Xo ? pe + x[ot] + m[ot] - qr - D.altAxis : Vr, Kr = a && Xo ? Pf(Gr, pe, Yr) : Xn(a ? Gr : Dt, pe, a ? Yr : Vr);
      $[C] = Kr, K[C] = Kr - pe;
    }
    t.modifiersData[o] = K;
  }
}
const Vl = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Of,
  requiresIfExists: ["offset"]
};
var Df = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Df[t];
  });
}
var Lf = {
  start: "end",
  end: "start"
};
function js(e) {
  return e.replace(/start|end/g, function(t) {
    return Lf[t];
  });
}
function Hf(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, p = _ === void 0 ? q_ : _, s = Mt(o), h = s ? c ? Ps : Ps.filter(function(u) {
    return Mt(u) === s;
  }) : Ko, f = h.filter(function(u) {
    return p.indexOf(u) >= 0;
  });
  f.length === 0 && (f = h, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var a = f.reduce(function(u, b) {
    return u[b] = Hr(e, {
      placement: b,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[Pe(b)], u;
  }, {});
  return Object.keys(a).sort(function(u, b) {
    return a[u] - a[b];
  });
}
function If(e) {
  if (Pe(e) === Yo)
    return [];
  var t = Jn(e);
  return [js(e), t, js(t)];
}
function Wf(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, p = n.padding, s = n.boundary, h = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, b = n.allowedAutoPlacements, d = t.options.placement, v = Pe(d), g = v === d, k = _ || (g || !u ? [Jn(d)] : If(d)), w = [d].concat(k).reduce(function(xe, R) {
      return xe.concat(Pe(R) === Yo ? Hf(t, {
        placement: R,
        boundary: s,
        rootBoundary: h,
        padding: p,
        flipVariations: u,
        allowedAutoPlacements: b
      }) : R);
    }, []), C = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), m = !0, E = w[0], D = 0; D < w.length; D++) {
      var P = w[D], K = Pe(P), G = Mt(P) === Rt, ae = [fe, we].indexOf(K) >= 0, J = ae ? "width" : "height", W = Hr(t, {
        placement: P,
        boundary: s,
        rootBoundary: h,
        altBoundary: f,
        padding: p
      }), te = ae ? G ? Qe : Ne : G ? we : fe;
      C[J] > $[J] && (te = Jn(te));
      var De = Jn(te), ke = [];
      if (r && ke.push(W[K] <= 0), c && ke.push(W[te] <= 0, W[De] <= 0), ke.every(function(xe) {
        return xe;
      })) {
        E = P, m = !1;
        break;
      }
      x.set(P, ke);
    }
    if (m)
      for (var ut = u ? 3 : 1, $e = function(R) {
        var L = w.find(function(Y) {
          var Z = x.get(Y);
          if (Z)
            return Z.slice(0, R).every(function(ce) {
              return ce;
            });
        });
        if (L)
          return E = L, "break";
      }, Le = ut; Le > 0; Le--) {
        var tt = $e(Le);
        if (tt === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[o]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const ql = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Wf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jf(e) {
  return e.button === 2;
}
var je;
class Uf extends Ii {
  constructor() {
    super(...arguments);
    S(this, je, void 0);
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
      modifiers: [Vl, ql],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, je) ? y(this, je).setOptions(n) : this.ref.current && M(this, je, zl(this._getPopperElement(), this.ref.current, n)), y(this, je);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Ar("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
je = new WeakMap();
var Ue, se, mt, $n;
class _e extends jt {
  constructor() {
    super(...arguments);
    S(this, Ue, void 0);
    S(this, se, void 0);
    S(this, mt, void 0);
    S(this, $n, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, Ue)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, Ue) || this._ensureMenu();
  }
  get popper() {
    return y(this, se) ? y(this, se) : this._createPopper();
  }
  get trigger() {
    return y(this, $n) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return M(this, $n, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = y(this, se)) == null || o.destroy(), M(this, se, void 0), (i = y(this, Ue)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = y(this, se)) == null || n.destroy(), super.destroy(), (o = y(this, Ue)) == null || o.remove();
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
    return M(this, Ue, i), i;
  }
  _getPopperOptions() {
    return {
      modifiers: [Vl, ql],
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, se) ? y(this, se).setOptions(n) : M(this, se, zl(this._getPopperElement(), this.menu, n)), y(this, se);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (H_(Ar(Uf, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, mt) || M(this, mt, {
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
    }), y(this, mt);
  }
  static clear(n) {
    n && jf(n) || this.getAll().forEach((o) => o.hide());
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
Ue = new WeakMap(), se = new WeakMap(), mt = new WeakMap(), $n = new WeakMap(), A(_e, "EVENTS", !0), A(_e, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), A(_e, "MENU_CLASS", "contextmenu"), A(_e, "CLASS_SHOW", "show"), A(_e, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${_e.MENU_CLASS}`))
    return;
  const n = t.closest(_e.MENU_SELECTOR);
  n && (_e.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", _e.clear.bind(_e));
var yt, bt, wt, Ro, Gl;
class Oe extends _e {
  constructor() {
    super(...arguments);
    S(this, Ro);
    S(this, yt, !1);
    S(this, bt, 0);
    A(this, "hideLater", () => {
      y(this, wt).call(this), M(this, bt, window.setTimeout(this.hide.bind(this), 100));
    });
    S(this, wt, () => {
      clearTimeout(y(this, bt)), M(this, bt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  show(n) {
    const o = super.show(n);
    return o && !y(this, yt) && this.isHover && X(this, Ro, Gl).call(this), o;
  }
  destroy() {
    y(this, yt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, wt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    if (o) {
      n.modifiers.push({ ...M_, options: {
        padding: o,
        element: ".arrow"
      } }, {
        ...N_,
        options: {
          offset: [0, o + ((i = this.options.offset) != null ? i : 0)]
        }
      });
      const { onFirstUpdate: r } = n;
      n.onFirstUpdate = (l) => {
        var c, _;
        r == null || r(l), (_ = this.menu.querySelector(".arrow")) == null || _.classList.add(`arrow-${((c = l.placement) == null ? void 0 : c.split("-").shift()) || ""}`);
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
      n.afterRender = (...i) => {
        var l;
        const r = this.menu.querySelector(".arrow");
        r && ((l = this.menu.querySelector(".menu")) == null || l.appendChild(r), this.popper.update()), o == null || o(...i);
      };
    }
    return n;
  }
}
yt = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), Ro = new WeakSet(), Gl = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, wt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), M(this, yt, !0);
}, A(Oe, "MENU_CLASS", "dropdown-menu"), A(Oe, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), A(Oe, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Oe.MENU_SELECTOR);
  if (n) {
    const o = Oe.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Oe.clear(e);
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Oe.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Oe.ensure(n);
  o.isHover && o.show();
});
var xn, En, Cn;
class Bf extends Yt {
  constructor() {
    super(...arguments);
    S(this, xn, void 0);
    S(this, En, void 0);
    S(this, Cn, t_());
  }
  componentDidMount() {
    M(this, En, Oe.ensure(y(this, Cn).current, {
      ...y(this, xn)
    }));
  }
  componentWillUnmount() {
    var n;
    (n = y(this, En)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, style: o, attrs: i, children: r, ...l } = this.props;
    return M(this, xn, l), {
      className: N("dropdown", n),
      style: o,
      children: r,
      ...i,
      dropdownOptions: l,
      ref: y(this, Cn)
    };
  }
  render() {
    const { children: n, dropdownOptions: o, ...i } = this.beforeRender();
    return /* @__PURE__ */ e_("div", {
      ...i,
      "data-toggle": "dropdown"
    }, n);
  }
}
xn = new WeakMap(), En = new WeakMap(), Cn = new WeakMap();
function Yl({
  key: e,
  type: t,
  btnType: n,
  dropdown: o,
  ...i
}) {
  return /* @__PURE__ */ an(Bf, {
    ...o
  }, /* @__PURE__ */ an(On, {
    type: n,
    caret: !0,
    ...i
  }));
}
var Ir, z, Kl, Xl, Jt, Us, Jl = {}, Zl = [], Ff = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ql(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ir.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Zn(e, l, o, i, null);
}
function Zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Kl : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Wr(e) {
  return e.children;
}
function Zt(e, t) {
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
function ea(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ea(e);
  }
}
function Bs(e) {
  (!e.__d && (e.__d = !0) && Jt.push(e) && !yo.__r++ || Us !== z.debounceRendering) && ((Us = z.debounceRendering) || setTimeout)(yo);
}
function yo() {
  for (var e; yo.__r = Jt.length; )
    e = Jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Jt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Xe({}, r)).__v = r.__v + 1, ra(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? gn(r) : l, r.__h), Vf(o, r), r.__e != l && ea(r)));
    });
}
function ta(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || Zl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zn(null, a, null, null, a) : Array.isArray(a) ? Zn(Wr, { children: a }, null, null, null) : a.__b > 0 ? Zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      ra(e, a, f = f || Jl, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = na(a, _, e) : _ = oa(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = gn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && ia(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      sa(d[s], d[++s], d[++s]);
}
function na(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? na(o, t, n) : oa(n, o, o, i, o.__e, t));
  return t;
}
function oa(e, t, n, o, i, r) {
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
function zf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bo(e, r, t[r], n[r], o);
}
function Fs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ff.test(t) ? n : n + "px";
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
            n && t in n || Fs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Fs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Vs : zs, r) : e.removeEventListener(t, r ? Vs : zs, r);
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
function zs(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Vs(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function ra(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = z.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new Zt(d, g), s.constructor = m, s.render = Gf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Xe({}, s.__s)), Xe(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = z.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Xe(Xe({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Wr && p.key == null ? p.props.children : p, ta(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qf(n.__e, t, n, o, i, r, l, _);
    (p = z.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), z.__e(E, t, n);
  }
}
function Vf(e, t) {
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
function qf(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Ir.call(e.childNodes), p = (h = n.props || Jl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (zf(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ta(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ql(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && bo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && bo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function sa(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function ia(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || sa(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ia(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ql(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gf(e, t, n) {
  return this.constructor(e, n);
}
Ir = Zl.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Kl = 0, Xl = function(e) {
  return e != null && e.constructor === void 0;
}, Zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof e == "function" && (e = e(Xe({}, n), this.props)), e && Xe(n, e), e != null && this.__v && (t && this._sb.push(t), Bs(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bs(this));
}, Zt.prototype.render = Wr, Jt = [], yo.__r = 0;
class Yf extends Zt {
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
    return /* @__PURE__ */ Qo(On, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Qo);
      if (Xl(_))
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
      onClickItem: p,
      beforeRender: s,
      afterRender: h,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ Qo("div", {
      className: N("btn-group", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), c);
  }
}
function Kf({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ an(Yf, {
    type: n,
    ...o
  });
}
class Qt extends st {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = N(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: N(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ an(t, {
      ...r
    });
  }
}
A(Qt, "ItemComponents", {
  item: Zc,
  dropdown: Yl,
  "btn-group": Kf
}), A(Qt, "ROOT_TAG", "nav"), A(Qt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function la(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
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
  const _ = la(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : ye(i, r)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : ye(l, r)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Fo(On, {
    type: n,
    ...c
  });
}
const Ce = 24 * 60 * 60 * 1e3, re = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Dn = (e, t = new Date()) => (e = re(e), t = re(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), qs = (e, t = new Date()) => re(e).getFullYear() === re(t).getFullYear(), Jf = (e, t = new Date()) => (e = re(e), t = re(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Wu = (e, t = new Date()) => {
  e = re(e), t = re(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, ju = (e, t) => Dn(re(t), e), Uu = (e, t) => Dn(re(t).getTime() - Ce, e), Bu = (e, t) => Dn(re(t).getTime() + Ce, e), Fu = (e, t) => Dn(re(t).getTime() - 2 * Ce, e), fr = (e, t = "yyyy-MM-dd hh:mm") => {
  e = re(e);
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
}, zu = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = fr(e, qs(e) ? o.month : o.full);
  if (Dn(e, t))
    return i;
  const r = fr(t, qs(e, t) ? Jf(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Vu = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Ce * 7;
    case "oneMonth":
      return t - Ce * 31;
    case "threeMonth":
      return t - Ce * 31 * 3;
    case "halfYear":
      return t - Ce * 183;
    case "oneYear":
      return t - Ce * 365;
    case "twoYear":
      return t - 2 * (Ce * 365);
    default:
      return 0;
  }
}, Gs = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Gs(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Gs(e, "day", n, o);
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
  const c = la(i, n);
  return o = typeof o == "function" ? o(c) : ye(o, c), /* @__PURE__ */ Fo(Di, {
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
  return /* @__PURE__ */ Fo(On, {
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
  i.items = (c = i.items) != null ? c : o.map((p) => {
    const s = { ...t, recPerPage: p };
    return {
      text: `${p}`,
      url: typeof n == "function" ? n(s) : ye(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : ye(l, t), i.menu = { ...i.menu, className: N((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ Fo(Yl, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class ur extends Qt {
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
A(ur, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), A(ur, "ItemComponents", {
  ...Qt.ItemComponents,
  link: Xf,
  info: Zf,
  nav: Qf,
  "size-menu": eu
});
class tu extends Pn {
}
A(tu, "Component", ur);
var jr, V, aa, ca, en, Ys, _a = {}, fa = [], nu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ua(e) {
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
  return Qn(e, l, o, i, null);
}
function Qn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++aa : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function ou() {
  return { current: null };
}
function Ur(e) {
  return e.children;
}
function tn(e, t) {
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
function Ks(e) {
  (!e.__d && (e.__d = !0) && en.push(e) && !wo.__r++ || Ys !== V.debounceRendering) && ((Ys = V.debounceRendering) || setTimeout)(wo);
}
function wo() {
  for (var e; wo.__r = en.length; )
    e = en.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), en = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Je({}, r)).__v = r.__v + 1, ga(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? mn(r) : l, r.__h), su(o, r), r.__e != l && pa(r)));
    });
}
function ha(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || fa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qn(null, a, null, null, a) : Array.isArray(a) ? Qn(Ur, { children: a }, null, null, null) : a.__b > 0 ? Qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      ga(e, a, f = f || _a, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = da(a, _, e) : _ = va(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && ya(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      ma(d[s], d[++s], d[++s]);
}
function da(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? da(o, t, n) : va(n, o, o, i, o.__e, t));
  return t;
}
function va(e, t, n, o, i, r) {
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
function ru(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ko(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ko(e, r, t[r], n[r], o);
}
function Xs(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || nu.test(t) ? n : n + "px";
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
            n && t in n || Xs(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Xs(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Zs : Js, r) : e.removeEventListener(t, r ? Zs : Js, r);
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
function Js(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function Zs(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function ga(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = V.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new tn(d, g), s.constructor = m, s.render = lu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = V.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Je(Je({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Ur && p.key == null ? p.props.children : p, ha(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = iu(n.__e, t, n, o, i, r, l, _);
    (p = V.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), V.__e(E, t, n);
  }
}
function su(e, t) {
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
function iu(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && jr.call(e.childNodes), p = (h = n.props || _a).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ru(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ha(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ua(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && ko(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ko(e, "checked", u, h.checked, !1));
  }
  return e;
}
function ma(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function ya(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ma(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ya(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ua(e.__e), e.__ = e.__e = e.__d = void 0;
}
function lu(e, t, n) {
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
} }, aa = 0, ca = function(e) {
  return e != null && e.constructor === void 0;
}, tn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof e == "function" && (e = e(Je({}, n), this.props)), e && Je(n, e), e != null && this.__v && (t && this._sb.push(t), Ks(this));
}, tn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ks(this));
}, tn.prototype.render = Ur, en = [], wo.__r = 0;
let au = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Br, q, ba, nn, Qs, wa = {}, ka = [], cu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function $a(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ei(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Br.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return eo(e, l, o, i, null);
}
function eo(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ba : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function Fr(e) {
  return e.children;
}
function on(e, t) {
  this.props = e, this.context = t;
}
function yn(e, t) {
  if (t == null)
    return e.__ ? yn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? yn(e) : null;
}
function xa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xa(e);
  }
}
function ti(e) {
  (!e.__d && (e.__d = !0) && nn.push(e) && !$o.__r++ || Qs !== q.debounceRendering) && ((Qs = q.debounceRendering) || setTimeout)($o);
}
function $o() {
  for (var e; $o.__r = nn.length; )
    e = nn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), nn = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ze({}, r)).__v = r.__v + 1, Ra(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? yn(r) : l, r.__h), fu(o, r), r.__e != l && xa(r)));
    });
}
function Ea(e, t, n, o, i, r, l, c, _, p) {
  var s, h, f, a, u, b, d, v = o && o.__k || ka, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? eo(null, a, null, null, a) : Array.isArray(a) ? eo(Fr, { children: a }, null, null, null) : a.__b > 0 ? eo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = v[s]) === null || f && a.key == f.key && a.type === f.type)
        v[s] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((f = v[h]) && a.key == f.key && a.type === f.type) {
            v[h] = void 0;
            break;
          }
          f = null;
        }
      Ra(e, a, f = f || wa, i, r, l, c, _, p), u = a.__e, (h = a.ref) && f.ref != h && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(h, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ca(a, _, e) : _ = Sa(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = yn(f));
    }
  for (n.__e = b, s = g; s--; )
    v[s] != null && Ta(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ma(d[s], d[++s], d[++s]);
}
function Ca(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ca(o, t, n) : Sa(n, o, o, i, o.__e, t));
  return t;
}
function Sa(e, t, n, o, i, r) {
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
function _u(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || xo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || xo(e, r, t[r], n[r], o);
}
function ni(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cu.test(t) ? n : n + "px";
}
function xo(e, t, n, o, i) {
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
  this.l[e.type + !1](q.event ? q.event(e) : e);
}
function ri(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function Ra(e, t, n, o, i, r, l, c, _) {
  var p, s, h, f, a, u, b, d, v, g, k, w, C, $, x, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (p = q.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (d = t.props, v = (p = m.contextType) && o[p.__c], g = p ? v ? v.props.value : p.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(d, g) : (t.__c = s = new on(d, g), s.constructor = m, s.render = pu), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, h = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, h)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = d, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(d, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = q.__r, C = 0, "prototype" in m && m.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ze(Ze({}, o), s.getChildContext())), h || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = p != null && p.type === Fr && p.key == null ? p.props.children : p, Ea(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = uu(n.__e, t, n, o, i, r, l, _);
    (p = q.diffed) && p(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), q.__e(E, t, n);
  }
}
function fu(e, t) {
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
function uu(e, t, n, o, i, r, l, c) {
  var _, p, s, h = n.props, f = t.props, a = t.type, u = 0;
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
    h === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Br.call(e.childNodes), p = (h = n.props || wa).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, u = 0; u < e.attributes.length; u++)
          h[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (_u(e, f, h, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ea(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && yn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && $a(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== h.value) && xo(e, "value", u, h.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && xo(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Ma(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    q.__e(o, n);
  }
}
function Ta(e, t, n) {
  var o, i;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ma(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ta(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || $a(e.__e), e.__ = e.__e = e.__d = void 0;
}
function pu(e, t, n) {
  return this.constructor(e, n);
}
Br = ka.slice, q = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ba = 0, on.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, n), this.props)), e && Ze(n, e), e != null && this.__v && (t && this._sb.push(t), ti(this));
}, on.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ti(this));
}, on.prototype.render = Fr, nn = [], $o.__r = 0;
var lt, at;
class si extends on {
  constructor(n) {
    var o;
    super(n);
    S(this, lt, 0);
    S(this, at, null);
    A(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && n.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, lt) && cancelAnimationFrame(y(this, lt)), M(this, lt, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), M(this, lt, 0);
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
    n && (M(this, at, typeof n == "string" ? document : n.current), y(this, at).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, at) && y(this, at).removeEventListener("wheel", this._handleWheel);
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
      bottom: p,
      right: s
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: p,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(h, f) * (n - b.width) / h)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(h, f) * (n - b.height) / h)), /* @__PURE__ */ ei("div", {
      className: N("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ ei("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
lt = new WeakMap(), at = new WeakMap();
function ii(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Aa({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...p }) {
  var $, x;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: h, border: f } = e.setting, a = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", t], d = [(x = c != null ? c : ($ = o.data) == null ? void 0 : $[e.name]) != null ? x : ""], v = i ? i(d, { row: o, col: e }, T) : d, g = [], k = [], w = {}, C = {};
  return v == null || v.forEach((m) => {
    var E;
    if (typeof m == "object" && m && !ca(m) && ("html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m)) {
      const D = m.outer ? g : k;
      m.html ? D.push(/* @__PURE__ */ T("div", {
        className: N("dtable-cell-html", m.className),
        style: m.style,
        dangerouslySetInnerHTML: { __html: m.html },
        ...(E = m.attrs) != null ? E : {}
      })) : (m.style && Object.assign(m.outer ? s : a, m.style), m.className && (m.outer ? u : b).push(m.className), m.children && D.push(m.children), m.attrs && Object.assign(m.outer ? w : C, m.attrs));
    } else
      k.push(m);
  }), /* @__PURE__ */ T("div", {
    className: N(u),
    style: s,
    "data-col": e.name,
    ...p,
    ...w
  }, k.length > 0 && /* @__PURE__ */ T("div", {
    className: N(b),
    style: a,
    ...C
  }, k), g);
}
function er({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = Aa, onRenderCell: _ }) {
  return /* @__PURE__ */ T("div", {
    className: N("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((p) => p.visible ? /* @__PURE__ */ T(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: _
  }) : null));
}
function Na({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: p,
  fixedRightWidth: s,
  scrollLeft: h,
  CellComponent: f = Aa,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ T(er, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ T(er, {
    className: "dtable-flexable",
    cols: l,
    left: c - h,
    width: Math.max(_, p),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ T(er, {
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
    className: N("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...b
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
  }, /* @__PURE__ */ T(Na, {
    ...o
  }));
}
function du({
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
    className: N("dtable-rows", e),
    style: t
  }, o.map((p) => {
    const s = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - l,
      height: r,
      ..._
    }, h = c == null ? void 0 : c({ props: s, row: p }, T);
    return h && Object.assign(s, h), /* @__PURE__ */ T(Na, {
      ...s
    });
  }));
}
const Eo = /* @__PURE__ */ new Map(), Co = [];
function Pa(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Eo.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Eo.set(n, e), (t == null ? void 0 : t.buildIn) && !Co.includes(n) && Co.push(n);
}
function At(e, t) {
  Pa(e, t);
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
function Oa(e) {
  return Eo.delete(e);
}
function vu(e) {
  if (typeof e == "string") {
    const t = Eo.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Da(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = vu(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && Da(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function gu(e = [], t = !0) {
  return t && Co.length && e.unshift(...Co), e != null && e.length ? Da([], e, /* @__PURE__ */ new Set()) : [];
}
function li() {
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
var ct, kt, Be, Te, Fe, Q, ve, ge, $t, Sn, Rn, Ae, xt, Et, Mo, La, To, Ha, Ao, Ia, No, Wa, Mn, hr, Po, Oo, Tn, An, Do, Lo, Ho, ja, Io, Ua, Wo, Ba;
class pr extends tn {
  constructor(n) {
    var o;
    super(n);
    S(this, Mo);
    S(this, To);
    S(this, Ao);
    S(this, No);
    S(this, Mn);
    S(this, Ho);
    S(this, Io);
    S(this, Wo);
    A(this, "ref", ou());
    S(this, ct, 0);
    S(this, kt, void 0);
    S(this, Be, !1);
    S(this, Te, void 0);
    S(this, Fe, void 0);
    S(this, Q, []);
    S(this, ve, void 0);
    S(this, ge, /* @__PURE__ */ new Map());
    S(this, $t, {});
    S(this, Sn, void 0);
    S(this, Rn, []);
    A(this, "updateLayout", () => {
      y(this, ct) && cancelAnimationFrame(y(this, ct)), M(this, ct, requestAnimationFrame(() => {
        M(this, ve, void 0), this.forceUpdate(), M(this, ct, 0);
      }));
    });
    S(this, Ae, (n, o) => {
      o = o || n.type;
      const i = y(this, ge).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    S(this, xt, (n) => {
      y(this, Ae).call(this, n, `window_${n.type}`);
    });
    S(this, Et, (n) => {
      y(this, Ae).call(this, n, `document_${n.type}`);
    });
    S(this, Po, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return y(this, Q).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    S(this, Oo, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, Q).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    S(this, Tn, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), y(this, Q).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    S(this, An, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    S(this, Do, (n) => {
      var c, _, p, s, h;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, Q).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of y(this, Q))
            if (((p = u.onCellClick) == null ? void 0 : p.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of y(this, Q))
          if (((h = u.onRowClick) == null ? void 0 : h.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    S(this, Lo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    M(this, kt, (o = n.id) != null ? o : `dtable-${au(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, M(this, Fe, Object.freeze(gu(n.plugins))), y(this, Fe).forEach((i) => {
      var _;
      const { methods: r, data: l, state: c } = i;
      r && Object.entries(r).forEach(([p, s]) => {
        typeof s == "function" && Object.assign(this, { [p]: s.bind(this) });
      }), l && Object.assign(y(this, $t), l.call(this)), c && Object.assign(this.state, c.call(this)), (_ = i.onCreate) == null || _.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = y(this, ve)) == null ? void 0 : n.options) || y(this, Te) || li();
  }
  get plugins() {
    return y(this, Q);
  }
  get layout() {
    return y(this, ve);
  }
  get id() {
    return y(this, kt);
  }
  get data() {
    return y(this, $t);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    M(this, Te, void 0);
  }
  componentDidMount() {
    if (y(this, Be) ? this.forceUpdate() : X(this, Mn, hr).call(this), y(this, Q).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", y(this, Do)), this.on("keydown", y(this, Lo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), M(this, Sn, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    y(this, Q).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, Be) ? X(this, Mn, hr).call(this) : y(this, Q).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, Sn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of y(this, ge).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, xt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, Et)) : n.removeEventListener(i, y(this, Ae));
    y(this, Q).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), y(this, Fe).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), M(this, $t, {}), y(this, ge).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = y(this, ge).get(n);
    r ? r.push(o) : (y(this, ge).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, xt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, Et)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, Ae)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = y(this, ge).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, ge).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, xt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, Et)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Ae)));
  }
  emitCustomEvent(n, o) {
    y(this, Ae).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: p, scrollColsWidth: s } } = this.layout, { to: h } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (h === "up" || h === "down")
      a = r + (h === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (h === "left" || h === "right")
      f = i + (h === "right" ? 1 : -1) * p;
    else if (h === "home")
      a = 0;
    else if (h === "end")
      a = l - c;
    else if (h === "left-begin")
      f = 0;
    else if (h === "right-end")
      f = s - p;
    else {
      const { offsetLeft: b, offsetTop: d } = n;
      typeof b == "number" && (f = i + b), typeof d == "number" && (f = r + d);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - p)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
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
    var _, p;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? (_ = r.setting.title) != null ? _ : r.setting.name : (p = i.data) == null ? void 0 : p[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    const { dirtyType: i, state: r } = n;
    i === "layout" ? M(this, ve, void 0) : i === "options" && (M(this, ve, void 0), M(this, Te, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    return (r = Nn(y(this, Rn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = X(this, Wo, Ba).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: p } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, h = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": p
    }], f = [];
    return n && y(this, Q).forEach((u) => {
      var d;
      const b = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !b || (b.style && Object.assign(s, b.style), b.className && h.push(b.className), b.children && f.push(b.children));
    }), /* @__PURE__ */ T("div", {
      id: y(this, kt),
      className: N(h),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && X(this, Mo, La).call(this, n), n && X(this, To, Ha).call(this, n), n && X(this, Ao, Ia).call(this, n), n && X(this, No, Wa).call(this, n));
  }
}
ct = new WeakMap(), kt = new WeakMap(), Be = new WeakMap(), Te = new WeakMap(), Fe = new WeakMap(), Q = new WeakMap(), ve = new WeakMap(), ge = new WeakMap(), $t = new WeakMap(), Sn = new WeakMap(), Rn = new WeakMap(), Ae = new WeakMap(), xt = new WeakMap(), Et = new WeakMap(), Mo = new WeakSet(), La = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ T(hu, {
      scrollLeft: l,
      height: r,
      onRenderCell: y(this, Tn),
      onRenderRow: y(this, Oo),
      ...i
    });
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ T(or, {
    className: "dtable-header",
    style: { height: r },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, To = new WeakSet(), Ha = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: p } = n;
  return /* @__PURE__ */ T(du, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: _,
    scrollTop: p,
    onRenderCell: y(this, Tn),
    onRenderRow: y(this, Po),
    ...c
  });
}, Ao = new WeakSet(), Ia = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ T(or, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, No = new WeakSet(), Wa = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: p } = n, { scrollColsWidth: s, scrollWidth: h } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > h && o.push(
    /* @__PURE__ */ T(si, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: h,
      onScroll: y(this, An),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + p,
      size: f,
      wheelContainer: this.ref
    })
  ), _ > c && o.push(
    /* @__PURE__ */ T(si, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: _,
      clientSize: c,
      onScroll: y(this, An),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Mn = new WeakSet(), hr = function() {
  var n;
  M(this, Be, !1), (n = this.options.afterRender) == null || n.call(this), y(this, Q).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Po = new WeakMap(), Oo = new WeakMap(), Tn = new WeakMap(), An = new WeakMap(), Do = new WeakMap(), Lo = new WeakMap(), Ho = new WeakSet(), ja = function() {
  if (y(this, Te))
    return !1;
  const o = { ...li(), ...y(this, Fe).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return M(this, Te, o), M(this, Q, y(this, Fe).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), M(this, Rn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Io = new WeakSet(), Ua = function() {
  var tt, xe;
  const { plugins: n } = this;
  let o = y(this, Te);
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
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], p = [], s = [], h = {}, f = [], a = [];
  let u = 0, b = 0, d = 0;
  o.cols.forEach((R) => {
    var Hn, Pt, Ot;
    if (R.hidden)
      return;
    const {
      name: L,
      type: Y = "",
      fixed: Z = !1,
      flex: ce = !1,
      width: nt = r,
      minWidth: Ee = l,
      maxWidth: Nt = c,
      ...Ln
    } = R, O = {
      name: L,
      type: Y,
      setting: {
        name: L,
        type: Y,
        fixed: Z,
        flex: ce,
        width: nt,
        minWidth: Ee,
        maxWidth: Nt,
        ...Ln
      },
      flex: Z ? 0 : ce === !0 ? 1 : typeof ce == "number" ? ce : 0,
      left: 0,
      width: ii(nt, Ee, Nt),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((In) => {
      var pe, ot;
      const pt = (pe = In.colTypes) == null ? void 0 : pe[Y];
      if (pt) {
        const Dt = typeof pt == "function" ? pt(O) : pt;
        Dt && Object.assign(O.setting, Dt);
      }
      (ot = In.onAddCol) == null || ot.call(this, O);
    }), O.width = ii((Hn = O.setting.width) != null ? Hn : O.width, (Pt = O.setting.minWidth) != null ? Pt : Ee, (Ot = O.setting.maxWidth) != null ? Ot : Nt), O.realWidth = O.realWidth || O.width, Z === "left" ? (O.left = u, u += O.width, _.push(O)) : Z === "right" ? (O.left = b, b += O.width, p.push(O)) : (O.left = d, d += O.width, s.push(O)), O.flex && a.push(O), f.push(O), h[O.name] = O;
  });
  let v = o.width, g = 0;
  const k = u + d + b;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: R } = this;
    if (R)
      g = R.clientWidth;
    else {
      g = 0, M(this, Be, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: C = "id", rowHeight: $ } = o, x = [], m = (R, L, Y) => {
    var ce, nt;
    const Z = { data: Y != null ? Y : { [C]: R }, id: R, index: x.length, top: 0 };
    if (Y || (Z.lazy = !0), x.push(Z), ((ce = o.onAddRow) == null ? void 0 : ce.call(this, Z, L)) !== !1) {
      for (const Ee of n)
        if (((nt = Ee.onAddRow) == null ? void 0 : nt.call(this, Z, L)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let R = 0; R < w; R++)
      m(`${R}`, R);
  else
    Array.isArray(w) && w.forEach((R, L) => {
      var Y;
      typeof R == "object" ? m(`${(Y = R[C]) != null ? Y : ""}`, L, R) : m(`${R != null ? R : ""}`, L);
    });
  let E = x;
  const D = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, E);
    R && (E = R);
  }
  for (const R of n) {
    const L = (tt = R.onAddRows) == null ? void 0 : tt.call(this, E);
    L && (E = L);
  }
  E.forEach((R, L) => {
    D[R.id] = R, R.index = L, R.top = R.index * $;
  });
  const { header: P, footer: K } = o, G = P ? o.headerHeight || $ : 0, ae = K ? o.footerHeight || $ : 0;
  let J = o.height, W = 0;
  const te = E.length * $, De = G + ae + te;
  if (typeof J == "function" && (J = J.call(this, De)), J === "auto")
    W = De;
  else if (typeof J == "object")
    W = Math.min(J.max, Math.max(J.min, De));
  else if (J === "100%") {
    const { parent: R } = this;
    if (R)
      W = R.clientHeight;
    else {
      W = 0, M(this, Be, !0);
      return;
    }
  } else
    W = J;
  const ke = W - G - ae, ut = g - u - b, $e = {
    options: o,
    allRows: x,
    width: g,
    height: W,
    rows: E,
    rowsMap: D,
    rowHeight: $,
    rowsHeight: ke,
    rowsHeightTotal: te,
    header: P,
    footer: K,
    footerGenerators: i,
    headerHeight: G,
    footerHeight: ae,
    colsMap: h,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: p,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: ut,
      scrollColsWidth: d,
      fixedRightWidth: b
    }
  }, Le = (xe = o.onLayout) == null ? void 0 : xe.call(this, $e);
  Le && Object.assign($e, Le), n.forEach((R) => {
    if (R.onLayout) {
      const L = R.onLayout.call(this, $e);
      L && Object.assign($e, L);
    }
  }), M(this, ve, $e);
}, Wo = new WeakSet(), Ba = function() {
  (X(this, Ho, ja).call(this) || !y(this, ve)) && X(this, Io, Ua).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const k = l - c;
    if (k > 0) {
      const w = i.reduce(($, x) => $ + x.flex, 0);
      let C = 0;
      i.forEach(($) => {
        const x = Math.min(k - C, Math.ceil(k * ($.flex / w)));
        $.realWidth = x + $.width, C += $.realWidth;
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
  const { rowsHeightTotal: p, rowsHeight: s, rows: h, rowHeight: f } = n, a = Math.min(Math.max(0, p - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, d = Math.min(h.length, Math.ceil(b / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = h[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, A(pr, "addPlugin", Pa), A(pr, "removePlugin", Oa);
function ai(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const mu = {
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
      ai(this, o);
    },
    mouseleave() {
      ai(this, !1);
    }
  }
}, yu = At(mu, { buildIn: !0 });
function bu(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, p) => {
    i && !i.call(this, _) || !!n[_] === p || (p ? n[_] = !0 : delete n[_], o[_] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !Fa.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t != null ? t : !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, o, n);
    _ && Object.keys(_).forEach((p) => {
      _[p] ? n[p] = !0 : delete n[p];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var p;
      (p = this.options.onCheckChange) == null || p.call(this, o);
    });
  }
  return o;
}
function wu(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Fa() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ku() {
  return Object.keys(this.state.checkedRows);
}
const $u = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: bu,
    isRowChecked: wu,
    isAllRowChecked: Fa,
    getChecks: ku
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
      const p = this.isRowChecked(o), s = (_ = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, o)) != null ? _ : /* @__PURE__ */ T("input", {
        type: "checkbox",
        checked: p
      });
      e.unshift(s), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l, c;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const _ = this.isAllRowChecked(), p = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) != null ? c : /* @__PURE__ */ T("input", {
        type: "checkbox",
        checked: _
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: N(e.className, "is-checked") };
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
}, xu = At($u);
var za = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(za || {});
function dr(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = dr.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? dr.call(this, t.parent).level + 1 : 0, t;
}
function Eu(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Va.call(this)), t) {
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
function Va() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function qa(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = qa(e, t, l.children, o + 1)));
  }
  return t;
}
function Ga(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Ga(e, r, n, o);
  }), i;
}
function Ya(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const p = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === p;
  })) && (o[t] = n), r.parent && Ya(e, r.parent, n, o, i);
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
        const l = Ga(this, i, r, o);
        l != null && l.parent && Ya(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Eu,
    isAllCollapsed: Va,
    getNestedRowInfo: dr
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
      let p = t.get(n);
      p || (p = {
        state: "",
        level: 0
      }, t.set(n, p)), p.children || (p.children = []), p.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), qa(this.data.nestedMap), e.sort((t, n) => {
      var l, c;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, _, p;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((_ = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) != null ? _ : /* @__PURE__ */ T("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ T("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ T("div", {
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
      className: N(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = N(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Su = At(Cu);
const Ru = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = ye(o, n.data);
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
            const p = r[_.action];
            return p && (_ = { className: l, ...p, ..._ }), ye(i, _);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = fr(r, o) : i === "html" ? e[0] = { html: ye(o, r) } : e[0] = ye(o, r), e;
      }
    }
  }
}, Mu = At(Ru, { buildIn: !0 }), Tu = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting, o = n === !0 ? "none" : n;
    return n && e.push(
      /* @__PURE__ */ T("div", {
        className: `dtable-sort dtable-sort-${o}`
      })
    ), e.push({ outer: !0, attrs: { "data-type": t.type || null, "data-sort": o } }), e;
  }
}, Au = At(Tu, { buildIn: !0 }), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: yu,
  checkable: xu,
  NestedRowState: za,
  nested: Su,
  rich: Mu,
  sortType: Au
}, Symbol.toStringTag, { value: "Module" }));
class jn extends Pn {
}
A(jn, "Component", pr), A(jn, "definePlugin", At), A(jn, "removePlugin", Oa), A(jn, "plugins", Nu);
var me, oe;
class Pu {
  constructor(t) {
    S(this, me, void 0);
    S(this, oe, void 0);
    M(this, me, t), M(this, oe, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(y(this, me).parentElement.parentElement, y(this, me).parentElement), this.addActive(y(this, oe).parentElement, y(this, oe)), y(this, oe).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    M(this, oe, y(this, me)), this.addActive(y(this, oe).parentElement, y(this, oe)), M(this, me, document.querySelector(`[href='#${y(this, oe).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${y(this, oe).getAttribute("id")}']`) || document.querySelector(`[data-target='#${y(this, oe).getAttribute("id")}']`)), this.addActive(y(this, me).parentElement.parentElement, y(this, me).parentElement);
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
me = new WeakMap(), oe = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Pu(e.target).showTarget());
});
export {
  wc as ActionMenu,
  kc as ActionMenuNested,
  Iu as Avatar,
  _e as ContextMenu,
  jn as DTable,
  Oe as Dropdown,
  gr as EventBus,
  Cc as Menu,
  Pu as NavTabs,
  tu as Pager,
  Ce as TIME_DAY,
  ac as addI18nMap,
  Hu as browser,
  Gs as calculateTimestamp,
  Lu as convertBytes,
  re as createDate,
  Du as formatBytes,
  fr as formatDate,
  zu as formatDateSpan,
  ye as formatString,
  ic as getLangCode,
  Vu as getTimeBeforeDesc,
  Nn as i18n,
  Fu as isDBY,
  Zo as isObject,
  Dn as isSameDay,
  Jf as isSameMonth,
  Wu as isSameWeek,
  qs as isSameYear,
  ju as isToday,
  Bu as isTomorrow,
  Uu as isYesterday,
  nr as mergeDeep,
  tr as nativeEvents,
  lc as setLangCode,
  Ac as store
};
