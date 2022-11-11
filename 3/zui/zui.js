var ka = Object.defineProperty;
var $a = (e, t, n) => t in e ? ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => ($a(e, typeof t != "symbol" ? t + "" : t, n), n), jo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var m = (e, t, n) => (jo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), S = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, T = (e, t, n, o) => (jo(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var Y = (e, t, n) => (jo(e, t, "access private method"), n);
var Ro, H, Xs, Js, It, Wr, Vn = {}, Zs = [], xa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qs(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ao(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ro.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Tn(e, l, o, i, null);
}
function Tn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Xs : i };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function Ea() {
  return { current: null };
}
function To(e) {
  return e.children;
}
function Nn(e, t) {
  this.props = e, this.context = t;
}
function en(e, t) {
  if (t == null)
    return e.__ ? en(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? en(e) : null;
}
function ei(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ei(e);
  }
}
function jr(e) {
  (!e.__d && (e.__d = !0) && It.push(e) && !qn.__r++ || Wr !== H.debounceRendering) && ((Wr = H.debounceRendering) || setTimeout)(qn);
}
function qn() {
  for (var e; qn.__r = It.length; )
    e = It.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), It = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Be({}, r)).__v = r.__v + 1, rr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? en(r) : l, r.__h), ri(o, r), r.__e != l && ei(r)));
    });
}
function ti(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Zs, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Tn(null, a, null, null, a) : Array.isArray(a) ? Tn(To, { children: a }, null, null, null) : a.__b > 0 ? Tn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      rr(e, a, f = f || Vn, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ni(a, _, e) : _ = oi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = en(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ii(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      si(d[s], d[++s], d[++s]);
}
function ni(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? ni(o, t, n) : oi(n, o, o, i, o.__e, t));
  return t;
}
function oi(e, t, n, o, i, r) {
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
function Ca(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Gn(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Gn(e, r, t[r], n[r], o);
}
function Ur(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xa.test(t) ? n : n + "px";
}
function Gn(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ur(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ur(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Fr : Br, r) : e.removeEventListener(t, r ? Fr : Br, r);
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
function Br(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function Fr(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function rr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Nn(d, g), s.constructor = b, s.render = Ma), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Be({}, s.__s)), Be(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = H.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Be(Be({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === To && h.key == null ? h.props.children : h, ti(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sa(n.__e, t, n, o, i, r, l, _);
    (h = H.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), H.__e(E, t, n);
  }
}
function ri(e, t) {
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
function Sa(e, t, n, o, i, r, l, c) {
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
    if (r = r && Ro.call(e.childNodes), h = (p = n.props || Vn).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Ca(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ti(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && en(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qs(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Gn(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Gn(e, "checked", u, p.checked, !1));
  }
  return e;
}
function si(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function ii(e, t, n) {
  var o, i;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || si(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ii(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Qs(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ma(e, t, n) {
  return this.constructor(e, n);
}
function Ra(e, t, n) {
  var o, i, r;
  H.__ && H.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], rr(t, e = (!o && n || t).__k = Ao(To, null, [e]), i || Vn, Vn, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Ro.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), ri(r, e);
}
Ro = Zs.slice, H = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Xs = 0, Js = function(e) {
  return e != null && e.constructor === void 0;
}, Nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof e == "function" && (e = e(Be({}, n), this.props)), e && Be(n, e), e != null && this.__v && (t && this._sb.push(t), jr(this));
}, Nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), jr(this));
}, Nn.prototype.render = To, It = [], qn.__r = 0;
var Se;
class Aa {
  constructor(t = "") {
    S(this, Se, void 0);
    typeof t == "object" ? T(this, Se, t) : T(this, Se, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    m(this, Se).addEventListener(t, n, o);
  }
  once(t, n, o) {
    m(this, Se).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    m(this, Se).removeEventListener(t, n, o);
  }
  emit(t) {
    return m(this, Se).dispatchEvent(t), t;
  }
}
Se = new WeakMap();
const zo = /* @__PURE__ */ new Set([
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
class sr extends Aa {
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
    return typeof t == "string" && (zo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(sr.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (zo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Me, hn, nt, Ht;
class zr extends sr {
  constructor(n = "", o) {
    super(n);
    S(this, nt);
    S(this, Me, /* @__PURE__ */ new Map());
    S(this, hn, void 0);
    T(this, hn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = Y(this, nt, Ht).call(this, n), super.on(n, o, i), m(this, Me).set(o, [n, i]);
  }
  off(n, o, i) {
    n = Y(this, nt, Ht).call(this, n), super.off(n, o, i), m(this, Me).delete(o);
  }
  once(n, o, i) {
    n = Y(this, nt, Ht).call(this, n);
    const r = (l) => {
      o(l), m(this, Me).delete(r);
    };
    super.once(n, r, i), m(this, Me).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = Y(this, nt, Ht).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(m(this, Me).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), m(this, Me).clear();
  }
}
Me = new WeakMap(), hn = new WeakMap(), nt = new WeakSet(), Ht = function(n) {
  const o = m(this, hn);
  return zo.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Ta(e, t) {
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
function Na(e, t, n) {
  const o = Ta(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Uo(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Vo(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Uo(e) && Uo(n))
    for (const o in n)
      Uo(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), Vo(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return Vo(e, ...t);
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
var ir = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ir || {});
function Xf(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / ir[n]).toFixed(t) + n);
}
const Jf = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * ir[o];
};
var Ys, Ks;
let lr = (Ks = (Ys = document.documentElement.getAttribute("lang")) == null ? void 0 : Ys.toLowerCase()) != null ? Ks : "zh_cn", Le;
function Oa() {
  return lr;
}
function Pa(e) {
  lr = e.toLowerCase();
}
function La(e, t) {
  Le || (Le = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), Vo(Le, e);
}
function $n(e, t, n, o, i, r) {
  Array.isArray(e) ? Le && e.unshift(Le) : e = Le ? [Le, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || lr;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === Le ? `${r}.${t}` : t;
    if (c = Na(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? ye(c, ...Array.isArray(n) ? n : [n]) : c;
}
$n.addLang = La;
$n.getCode = Oa;
$n.setCode = Pa;
function Da(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Re, ft, te;
class Wt {
  constructor(t, n) {
    S(this, Re, void 0);
    S(this, ft, void 0);
    S(this, te, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && T(this, te, new zr(t, { customEventSuffix: `.${this.constructor.KEY}` })), T(this, Re, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? Da(t.dataset) : null, ...n }), this.constructor.all.set(t, this), T(this, ft, t), this.init(), (o = m(this, te)) == null || o.emit("inited", this);
  }
  get options() {
    return m(this, Re);
  }
  get element() {
    return m(this, ft);
  }
  get events() {
    return m(this, te);
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
    this.constructor.all.delete(m(this, ft)), m(this, te) && (m(this, te).emit("destroyed", this), m(this, te).offAll());
  }
  on(t, n, o) {
    var i;
    (i = m(this, te)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = m(this, te)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = m(this, te)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = zr.createEvent(t, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = m(this, Re)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = m(this, te)) == null ? void 0 : l.emit(o), o;
  }
  i18n(t, n, o) {
    var i;
    return (i = $n(m(this, Re).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
Re = new WeakMap(), ft = new WeakMap(), te = new WeakMap(), R(Wt, "EVENTS", !1), R(Wt, "DEFAULT", {}), R(Wt, "allComponents", /* @__PURE__ */ new Map());
class xn extends Wt {
  constructor() {
    super(...arguments);
    R(this, "ref", Ea());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    Ra(/* @__PURE__ */ Ao(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var ar, j, li, ai, jt, Vr, ci = {}, _i = [], Ha = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Q(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ar.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return On(e, l, o, i, null);
}
function On(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++li : i };
  return i == null && j.vnode != null && j.vnode(r), r;
}
function Ia() {
  return { current: null };
}
function cr(e) {
  return e.children;
}
function Ut(e, t) {
  this.props = e, this.context = t;
}
function tn(e, t) {
  if (t == null)
    return e.__ ? tn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? tn(e) : null;
}
function ui(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ui(e);
  }
}
function qr(e) {
  (!e.__d && (e.__d = !0) && jt.push(e) && !Yn.__r++ || Vr !== j.debounceRendering) && ((Vr = j.debounceRendering) || setTimeout)(Yn);
}
function Yn() {
  for (var e; Yn.__r = jt.length; )
    e = jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Fe({}, r)).__v = r.__v + 1, vi(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? tn(r) : l, r.__h), ja(o, r), r.__e != l && ui(r)));
    });
}
function hi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || _i, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? On(null, a, null, null, a) : Array.isArray(a) ? On(cr, { children: a }, null, null, null) : a.__b > 0 ? On(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      vi(e, a, f = f || ci, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = pi(a, _, e) : _ = di(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = tn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && mi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      gi(d[s], d[++s], d[++s]);
}
function pi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? pi(o, t, n) : di(n, o, o, i, o.__e, t));
  return t;
}
function di(e, t, n, o, i, r) {
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
function Wa(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Kn(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Kn(e, r, t[r], n[r], o);
}
function Gr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ha.test(t) ? n : n + "px";
}
function Kn(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Gr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Gr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Kr : Yr, r) : e.removeEventListener(t, r ? Kr : Yr, r);
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
function Yr(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Kr(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function vi(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = j.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Ut(d, g), s.constructor = b, s.render = Ba), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Fe({}, s.__s)), Fe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = j.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Fe(Fe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === cr && h.key == null ? h.props.children : h, hi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ua(n.__e, t, n, o, i, r, l, _);
    (h = j.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), j.__e(E, t, n);
  }
}
function ja(e, t) {
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
function Ua(e, t, n, o, i, r, l, c) {
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
    if (r = r && ar.call(e.childNodes), h = (p = n.props || ci).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Wa(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, hi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && fi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Kn(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Kn(e, "checked", u, p.checked, !1));
  }
  return e;
}
function gi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    j.__e(o, n);
  }
}
function mi(e, t, n) {
  var o, i;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || gi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && mi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || fi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ba(e, t, n) {
  return this.constructor(e, n);
}
ar = _i.slice, j = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, li = 0, ai = function(e) {
  return e != null && e.constructor === void 0;
}, Ut.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof e == "function" && (e = e(Fe({}, n), this.props)), e && Fe(n, e), e != null && this.__v && (t && this._sb.push(t), qr(this));
}, Ut.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qr(this));
}, Ut.prototype.render = cr, jt = [], Yn.__r = 0;
const O = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? O(...n) : typeof n == "function" ? O(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const i = n[o];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Fa({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return Q(e, {
    className: O(t),
    style: o,
    ...i
  }, n);
}
function yi({
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
    typeof c == "string" ? /* @__PURE__ */ Q("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ Q("span", {
      className: "text"
    }, _),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ Q("i", {
      class: `icon ${s}`
    }) : s
  ];
  return Q(e, {
    className: O(t, { disabled: r, active: l }),
    title: p,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function za({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Q(e, {
    className: O(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Va({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Q(e, {
    className: O(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function qa(e) {
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
      g != null && (typeof g == "object" && !Js(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? a.push(
        /* @__PURE__ */ Ao("div", {
          className: O(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...(k = g.attrs) != null ? k : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(f, g.style), g.className && p.push(g.className), g.children && a.push(g.children), g.attrs && Object.assign(s, g.attrs)) : a.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: O(p),
    style: f,
    ...s
  }, a];
}
function qo({
  tag: e = "div",
  ...t
}) {
  const [n, o] = qa(t);
  return Ao(e, n, ...o);
}
function Ga(e) {
  return /* @__PURE__ */ Q(qo, {
    ...e
  });
}
function bi({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return Q(e, {
    className: O(t),
    style: o,
    ...i
  }, n);
}
const vo = class extends Ut {
  constructor() {
    super(...arguments);
    R(this, "ref", Ia());
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
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = O(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const d = l[o.type || "item"];
        if (d)
          return /* @__PURE__ */ Q(d, {
            ...r
          });
      } else if (typeof l == "function") {
        const d = l.call(this, r, Q);
        if (ai(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: p, rootStyle: f, rootChildren: a, ...u } = r, y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || vo.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
      className: O(p),
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
    return /* @__PURE__ */ Q("li", {
      className: O(`${this.name}-${i.type}`, l),
      key: c,
      ..._
    }, /* @__PURE__ */ Q(n, {
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
    return /* @__PURE__ */ Q(y, {
      class: O(this.name, l),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), _);
  }
};
let De = vo;
R(De, "ItemComponents", {
  divider: Fa,
  item: yi,
  heading: za,
  space: Va,
  custom: Ga,
  basic: bi
}), R(De, "ROOT_TAG", "menu"), R(De, "NAME", "action-menu");
class Xr extends xn {
}
R(Xr, "NAME", "actionmenu"), R(Xr, "Component", De);
function Jr({
  ...e
}) {
  return /* @__PURE__ */ Q(yi, {
    ...e
  });
}
var pn, pe, ut;
class _r extends De {
  constructor(n) {
    var o;
    super(n);
    S(this, pn, /* @__PURE__ */ new Set());
    S(this, pe, void 0);
    S(this, ut, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    T(this, pe, n.nestedShow === void 0), m(this, pe) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
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
    return /* @__PURE__ */ Q(i, {
      items: o,
      name: this.props.name,
      nestedShow: m(this, pe) ? this.state.nestedShow : this.props.nestedShow,
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
    m(this, pn).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Jr), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: m(this, ut).bind(this, l, !0),
        onMouseLeave: m(this, ut).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = r;
      r.onClick = (p) => {
        m(this, ut).call(this, l, void 0, p), s == null || s(p);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = m(this, pe) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!m(this, pe))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...m(this, pn).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    !m(this, pe) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !m(this, pe) || this.setState({ nestedShow: !1 });
  }
}
pn = new WeakMap(), pe = new WeakMap(), ut = new WeakMap(), R(_r, "ItemComponents", {
  item: Jr
});
class Zr extends xn {
}
R(Zr, "NAME", "actionmenunested"), R(Zr, "Component", _r);
var wi, Go, ki, Ya = [];
function Ka(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? wi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Xa(e, l, o, i, null);
}
function Xa(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ki : i };
  return i == null && Go.vnode != null && Go.vnode(r), r;
}
wi = Ya.slice, Go = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ki = 0;
class fr extends _r {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = O(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ Ka("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
R(fr, "NAME", "menu");
class Qr extends xn {
}
R(Qr, "NAME", "menu"), R(Qr, "Component", fr);
function Ja(e) {
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
function Za(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Qa(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Ja,
  domReady: Za,
  isElementVisible: Qa,
  classes: O
}, Symbol.toStringTag, { value: "Module" }));
let ec = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var dn, He, de, ht, pt, Pn;
const Nr = class {
  constructor(t, n = "local") {
    S(this, pt);
    S(this, dn, void 0);
    S(this, He, void 0);
    S(this, de, void 0);
    S(this, ht, void 0);
    T(this, dn, n), T(this, He, `ZUI_STORE:${t != null ? t : ec()}`), T(this, de, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, dn);
  }
  get session() {
    return this.type === "session" ? this : (m(this, ht) || T(this, ht, new Nr(m(this, He), "session")), m(this, ht));
  }
  get(t, n) {
    const o = m(this, de).getItem(Y(this, pt, Pn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    m(this, de).setItem(Y(this, pt, Pn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    m(this, de).removeItem(Y(this, pt, Pn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < m(this, de).length; n++) {
      const o = m(this, de).key(n);
      if (o != null && o.startsWith(m(this, He))) {
        const i = m(this, de).getItem(o);
        typeof i == "string" && t(o.substring(m(this, He).length + 1), JSON.parse(i));
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
let Xn = Nr;
dn = new WeakMap(), He = new WeakMap(), de = new WeakMap(), ht = new WeakMap(), pt = new WeakSet(), Pn = function(t) {
  return `${m(this, He)}:${t}`;
};
const tc = new Xn("DEFAULT");
function nc(e, t = "local") {
  return new Xn(e, t);
}
Object.assign(tc, { create: nc });
function oc() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function rc() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function sc(e, t) {
  oc(), e.classList.add("block"), es(e, t), e.onclick = (n) => ic(n, e), window.addEventListener("resize", () => {
    es(e, t);
  });
}
function $i(e) {
  var t;
  rc(), (t = e.classList) == null || t.remove("block");
}
function es(e, t) {
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
function ic(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), $i(t));
}
function lc(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = lc(n);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    sc(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && $i(t);
});
var xi, Yo, Ei, ac = [];
function No(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return cc(e, l, o, i, null);
}
function cc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ei : i };
  return i == null && Yo.vnode != null && Yo.vnode(r), r;
}
xi = ac.slice, Yo = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ei = 0;
var Ci, Ko, Si, _c = [];
function Oo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ci.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return fc(e, l, o, i, null);
}
function fc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Si : i };
  return i == null && Ko.vnode != null && Ko.vnode(r), r;
}
Ci = _c.slice, Ko = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Si = 0;
var ur, U, Mi, Bt, ts, Ri = {}, Ai = [], uc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ti(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pt(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ur.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ln(e, l, o, i, null);
}
function Ln(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Mi : i };
  return i == null && U.vnode != null && U.vnode(r), r;
}
function hr(e) {
  return e.children;
}
function Ft(e, t) {
  this.props = e, this.context = t;
}
function nn(e, t) {
  if (t == null)
    return e.__ ? nn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? nn(e) : null;
}
function Ni(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ni(e);
  }
}
function ns(e) {
  (!e.__d && (e.__d = !0) && Bt.push(e) && !Jn.__r++ || ts !== U.debounceRendering) && ((ts = U.debounceRendering) || setTimeout)(Jn);
}
function Jn() {
  for (var e; Jn.__r = Bt.length; )
    e = Bt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Bt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = ze({}, r)).__v = r.__v + 1, Di(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? nn(r) : l, r.__h), pc(o, r), r.__e != l && Ni(r)));
    });
}
function Oi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Ai, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ln(null, a, null, null, a) : Array.isArray(a) ? Ln(hr, { children: a }, null, null, null) : a.__b > 0 ? Ln(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Di(e, a, f = f || Ri, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Pi(a, _, e) : _ = Li(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = nn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ii(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Hi(d[s], d[++s], d[++s]);
}
function Pi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Pi(o, t, n) : Li(n, o, o, i, o.__e, t));
  return t;
}
function Li(e, t, n, o, i, r) {
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
function hc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Zn(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Zn(e, r, t[r], n[r], o);
}
function os(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || uc.test(t) ? n : n + "px";
}
function Zn(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || os(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || os(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ss : rs, r) : e.removeEventListener(t, r ? ss : rs, r);
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
function rs(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function ss(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function Di(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Ft(d, g), s.constructor = b, s.render = vc), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ze({}, s.__s)), ze(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = U.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ze(ze({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === hr && h.key == null ? h.props.children : h, Oi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dc(n.__e, t, n, o, i, r, l, _);
    (h = U.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), U.__e(E, t, n);
  }
}
function pc(e, t) {
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
function dc(e, t, n, o, i, r, l, c) {
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
    if (r = r && ur.call(e.childNodes), h = (p = n.props || Ri).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (hc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Oi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && nn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ti(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && Zn(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Zn(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Hi(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function Ii(e, t, n) {
  var o, i;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Hi(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ii(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ti(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vc(e, t, n) {
  return this.constructor(e, n);
}
ur = Ai.slice, U = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mi = 0, Ft.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, n), this.props)), e && ze(n, e), e != null && this.__v && (t && this._sb.push(t), ns(this));
}, Ft.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ns(this));
}, Ft.prototype.render = hr, Bt = [], Jn.__r = 0;
class En extends Ft {
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
    return Pt(
      g,
      {
        className: O("btn", n, i, {
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
      typeof p == "string" ? /* @__PURE__ */ Pt("i", {
        class: `icon ${p}`
      }) : p,
      k ? null : /* @__PURE__ */ Pt("span", {
        className: "text"
      }, f),
      r,
      typeof a == "string" ? /* @__PURE__ */ Pt("i", {
        class: `icon ${a}`
      }) : a,
      u ? /* @__PURE__ */ Pt("span", {
        className: typeof u == "string" ? `caret-${u}` : "caret"
      }) : null
    );
  }
}
function gc({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Oo(En, {
    type: n,
    ...o
  });
}
var pr, B, Wi, zt, is, ji = {}, Ui = [], mc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Fi(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Dn(e, l, o, i, null);
}
function Dn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Wi : i };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function yc() {
  return { current: null };
}
function dr(e) {
  return e.children;
}
function Vt(e, t) {
  this.props = e, this.context = t;
}
function on(e, t) {
  if (t == null)
    return e.__ ? on(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? on(e) : null;
}
function zi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return zi(e);
  }
}
function ls(e) {
  (!e.__d && (e.__d = !0) && zt.push(e) && !Qn.__r++ || is !== B.debounceRendering) && ((is = B.debounceRendering) || setTimeout)(Qn);
}
function Qn() {
  for (var e; Qn.__r = zt.length; )
    e = zt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ve({}, r)).__v = r.__v + 1, Yi(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? on(r) : l, r.__h), wc(o, r), r.__e != l && zi(r)));
    });
}
function Vi(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Ui, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Dn(null, a, null, null, a) : Array.isArray(a) ? Dn(dr, { children: a }, null, null, null) : a.__b > 0 ? Dn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Yi(e, a, f = f || ji, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = qi(a, _, e) : _ = Gi(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = on(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Xi(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Ki(d[s], d[++s], d[++s]);
}
function qi(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? qi(o, t, n) : Gi(n, o, o, i, o.__e, t));
  return t;
}
function Gi(e, t, n, o, i, r) {
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
function bc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || eo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || eo(e, r, t[r], n[r], o);
}
function as(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || mc.test(t) ? n : n + "px";
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
            n && t in n || as(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || as(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? _s : cs, r) : e.removeEventListener(t, r ? _s : cs, r);
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
function cs(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function _s(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Yi(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Vt(d, g), s.constructor = b, s.render = $c), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ve({}, s.__s)), Ve(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = B.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ve(Ve({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === dr && h.key == null ? h.props.children : h, Vi(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = kc(n.__e, t, n, o, i, r, l, _);
    (h = B.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), B.__e(E, t, n);
  }
}
function wc(e, t) {
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
function kc(e, t, n, o, i, r, l, c) {
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
    if (r = r && pr.call(e.childNodes), h = (p = n.props || ji).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (bc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Vi(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && on(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bi(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && eo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && eo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Ki(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function Xi(e, t, n) {
  var o, i;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ki(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Xi(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Bi(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $c(e, t, n) {
  return this.constructor(e, n);
}
pr = Ui.slice, B = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wi = 0, Vt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), ls(this));
}, Vt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ls(this));
}, Vt.prototype.render = dr, zt = [], Qn.__r = 0;
var vr = "top", Ji = "bottom", to = "right", rn = "left", xc = "auto", Zi = [vr, Ji, to, rn], Ec = "start", Cc = "end", Sc = /* @__PURE__ */ [].concat(Zi, [xc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ec, t + "-" + Cc]);
}, []);
function Qi(e) {
  return e.split("-")[0];
}
function Mt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function el(e) {
  var t = Mt(e).Element;
  return e instanceof t || e instanceof Element;
}
function no(e) {
  var t = Mt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Mt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Mc = Math.max, Rc = Math.min, fs = Math.round;
function Xo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ac() {
  return !/^((?!chrome|android).)*safari/i.test(Xo());
}
function Tc(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && no(e) && (i = e.offsetWidth > 0 && fs(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && fs(o.height) / e.offsetHeight || 1);
  var l = el(e) ? Mt(e) : window, c = l.visualViewport, _ = !Ac() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
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
function Nc(e) {
  var t = Tc(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Oc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function sn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ln(e) {
  return Mt(e).getComputedStyle(e);
}
function Pc(e) {
  return ["table", "td", "th"].indexOf(sn(e)) >= 0;
}
function Lc(e) {
  return ((el(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dc(e) {
  return sn(e) === "html" ? e : e.assignedSlot || e.parentNode || (gr(e) ? e.host : null) || Lc(e);
}
function us(e) {
  return !no(e) || ln(e).position === "fixed" ? null : e.offsetParent;
}
function Hc(e) {
  var t = /firefox/i.test(Xo()), n = /Trident/i.test(Xo());
  if (n && no(e)) {
    var o = ln(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Dc(e);
  for (gr(i) && (i = i.host); no(i) && ["html", "body"].indexOf(sn(i)) < 0; ) {
    var r = ln(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ic(e) {
  for (var t = Mt(e), n = us(e); n && Pc(n) && ln(n).position === "static"; )
    n = us(n);
  return n && (sn(n) === "html" || sn(n) === "body" && ln(n).position === "static") ? t : n || Hc(e) || t;
}
function Wc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jc(e, t, n) {
  return Mc(e, Rc(t, n));
}
function Uc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Bc(e) {
  return Object.assign({}, Uc(), e);
}
function Fc(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var zc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Bc(typeof t != "number" ? t : Fc(t, Zi));
};
function Vc(e) {
  var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, l = n.modifiersData.popperOffsets, c = Qi(n.placement), _ = Wc(c), h = [rn, to].indexOf(c) >= 0, s = h ? "height" : "width";
  if (!(!r || !l)) {
    var p = zc(i.padding, n), f = Nc(r), a = _ === "y" ? vr : rn, u = _ === "y" ? Ji : to, y = n.rects.reference[s] + n.rects.reference[_] - l[_] - n.rects.popper[s], d = l[_] - n.rects.reference[_], v = Ic(r), g = v ? _ === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = y / 2 - d / 2, w = p[a], C = g - f[s] - p[u], $ = g / 2 - f[s] / 2 + k, x = jc(w, $, C), b = _;
    n.modifiersData[o] = (t = {}, t[b] = x, t.centerOffset = x - $, t);
  }
}
function qc(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !Oc(t.elements.popper, i) || (t.elements.arrow = i));
}
const Gc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vc,
  effect: qc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yc(e, t, n) {
  var o = Qi(e), i = [rn, vr].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = r[0], c = r[1];
  return l = l || 0, c = (c || 0) * i, [rn, to].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function Kc(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, l = Sc.reduce(function(s, p) {
    return s[p] = Yc(p, t.rects, r), s;
  }, {}), c = l[t.placement], _ = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += _, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = l;
}
const Xc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Kc
};
var Po, I, tl, qt, hs, oo = {}, nl = [], Jc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ol(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function mr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Po.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Hn(e, l, o, i, null);
}
function Hn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++tl : i };
  return i == null && I.vnode != null && I.vnode(r), r;
}
function Lo(e) {
  return e.children;
}
function In(e, t) {
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
function rl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rl(e);
  }
}
function ps(e) {
  (!e.__d && (e.__d = !0) && qt.push(e) && !ro.__r++ || hs !== I.debounceRendering) && ((hs = I.debounceRendering) || setTimeout)(ro);
}
function ro() {
  for (var e; ro.__r = qt.length; )
    e = qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = qe({}, r)).__v = r.__v + 1, yr(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? an(r) : l, r.__h), al(o, r), r.__e != l && rl(r)));
    });
}
function sl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || nl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Hn(null, a, null, null, a) : Array.isArray(a) ? Hn(Lo, { children: a }, null, null, null) : a.__b > 0 ? Hn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      yr(e, a, f = f || oo, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = il(a, _, e) : _ = ll(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = an(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && _l(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      cl(d[s], d[++s], d[++s]);
}
function il(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? il(o, t, n) : ll(n, o, o, i, o.__e, t));
  return t;
}
function ll(e, t, n, o, i, r) {
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
function Zc(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || so(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || so(e, r, t[r], n[r], o);
}
function ds(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Jc.test(t) ? n : n + "px";
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
            n && t in n || ds(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ds(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? gs : vs, r) : e.removeEventListener(t, r ? gs : vs, r);
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
function vs(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function gs(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function yr(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new In(d, g), s.constructor = b, s.render = e_), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = qe({}, s.__s)), qe(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = I.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = qe(qe({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Lo && h.key == null ? h.props.children : h, sl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Qc(n.__e, t, n, o, i, r, l, _);
    (h = I.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), I.__e(E, t, n);
  }
}
function al(e, t) {
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
    if (r = r && Po.call(e.childNodes), h = (p = n.props || oo).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Zc(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, sl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && an(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ol(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && so(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && so(e, "checked", u, p.checked, !1));
  }
  return e;
}
function cl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function _l(e, t, n) {
  var o, i;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && _l(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ol(e.__e), e.__ = e.__e = e.__d = void 0;
}
function e_(e, t, n) {
  return this.constructor(e, n);
}
function t_(e, t, n) {
  var o, i, r;
  I.__ && I.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], yr(t, e = (!o && n || t).__k = mr(Lo, null, [e]), i || oo, oo, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Po.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), al(r, e);
}
Po = nl.slice, I = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, tl = 0, In.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof e == "function" && (e = e(qe({}, n), this.props)), e && qe(n, e), e != null && this.__v && (t && this._sb.push(t), ps(this));
}, In.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ps(this));
}, In.prototype.render = Lo, qt = [], ro.__r = 0;
function ae(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function lt(e) {
  var t = ae(e).Element;
  return e instanceof t || e instanceof Element;
}
function le(e) {
  var t = ae(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function br(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ae(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var it = Math.max, io = Math.min, xt = Math.round;
function Jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fl() {
  return !/^((?!chrome|android).)*safari/i.test(Jo());
}
function Et(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, r = 1;
  t && le(e) && (i = e.offsetWidth > 0 && xt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && xt(o.height) / e.offsetHeight || 1);
  var l = lt(e) ? ae(e) : window, c = l.visualViewport, _ = !fl() && n, h = (o.left + (_ && c ? c.offsetLeft : 0)) / i, s = (o.top + (_ && c ? c.offsetTop : 0)) / r, p = o.width / i, f = o.height / r;
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
function wr(e) {
  var t = ae(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function n_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function o_(e) {
  return e === ae(e) || !le(e) ? wr(e) : n_(e);
}
function be(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ze(e) {
  return ((lt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kr(e) {
  return Et(Ze(e)).left + wr(e).scrollLeft;
}
function Ne(e) {
  return ae(e).getComputedStyle(e);
}
function $r(e) {
  var t = Ne(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function r_(e) {
  var t = e.getBoundingClientRect(), n = xt(t.width) / e.offsetWidth || 1, o = xt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function s_(e, t, n) {
  n === void 0 && (n = !1);
  var o = le(t), i = le(t) && r_(t), r = Ze(t), l = Et(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((be(t) !== "body" || $r(r)) && (c = o_(t)), le(t) ? (_ = Et(t, !0), _.x += t.clientLeft, _.y += t.clientTop) : r && (_.x = kr(r))), {
    x: l.left + c.scrollLeft - _.x,
    y: l.top + c.scrollTop - _.y,
    width: l.width,
    height: l.height
  };
}
function ul(e) {
  var t = Et(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Do(e) {
  return be(e) === "html" ? e : e.assignedSlot || e.parentNode || (br(e) ? e.host : null) || Ze(e);
}
function hl(e) {
  return ["html", "body", "#document"].indexOf(be(e)) >= 0 ? e.ownerDocument.body : le(e) && $r(e) ? e : hl(Do(e));
}
function Gt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = hl(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ae(o), l = i ? [r].concat(r.visualViewport || [], $r(o) ? o : []) : o, c = t.concat(l);
  return i ? c : c.concat(Gt(Do(l)));
}
function i_(e) {
  return ["table", "td", "th"].indexOf(be(e)) >= 0;
}
function ms(e) {
  return !le(e) || Ne(e).position === "fixed" ? null : e.offsetParent;
}
function l_(e) {
  var t = /firefox/i.test(Jo()), n = /Trident/i.test(Jo());
  if (n && le(e)) {
    var o = Ne(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Do(e);
  for (br(i) && (i = i.host); le(i) && ["html", "body"].indexOf(be(i)) < 0; ) {
    var r = Ne(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ho(e) {
  for (var t = ae(e), n = ms(e); n && i_(n) && Ne(n).position === "static"; )
    n = ms(n);
  return n && (be(n) === "html" || be(n) === "body" && Ne(n).position === "static") ? t : n || l_(e) || t;
}
var ue = "top", we = "bottom", Je = "right", Te = "left", xr = "auto", Io = [ue, we, Je, Te], Ct = "start", cn = "end", a_ = "clippingParents", pl = "viewport", Lt = "popper", c_ = "reference", ys = /* @__PURE__ */ Io.reduce(function(e, t) {
  return e.concat([t + "-" + Ct, t + "-" + cn]);
}, []), __ = /* @__PURE__ */ [].concat(Io, [xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ct, t + "-" + cn]);
}, []), f_ = "beforeRead", u_ = "read", h_ = "afterRead", p_ = "beforeMain", d_ = "main", v_ = "afterMain", g_ = "beforeWrite", m_ = "write", y_ = "afterWrite", b_ = [f_, u_, h_, p_, d_, v_, g_, m_, y_];
function w_(e) {
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
function k_(e) {
  var t = w_(e);
  return b_.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function $_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xe(e) {
  return e.split("-")[0];
}
function x_(e) {
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
function E_(e, t) {
  var n = ae(e), o = Ze(e), i = n.visualViewport, r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    var h = fl();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c + kr(e),
    y: _
  };
}
function C_(e) {
  var t, n = Ze(e), o = wr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = it(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = it(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + kr(e), _ = -o.scrollTop;
  return Ne(i || n).direction === "rtl" && (c += it(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function S_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && br(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Zo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function M_(e, t) {
  var n = Et(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bs(e, t, n) {
  return t === pl ? Zo(E_(e, n)) : lt(t) ? M_(t, n) : Zo(C_(Ze(e)));
}
function R_(e) {
  var t = Gt(Do(e)), n = ["absolute", "fixed"].indexOf(Ne(e).position) >= 0, o = n && le(e) ? Ho(e) : e;
  return lt(o) ? t.filter(function(i) {
    return lt(i) && S_(i, o) && be(i) !== "body";
  }) : [];
}
function A_(e, t, n, o) {
  var i = t === "clippingParents" ? R_(e) : [].concat(t), r = [].concat(i, [n]), l = r[0], c = r.reduce(function(_, h) {
    var s = bs(e, h, o);
    return _.top = it(s.top, _.top), _.right = io(s.right, _.right), _.bottom = io(s.bottom, _.bottom), _.left = it(s.left, _.left), _;
  }, bs(e, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function St(e) {
  return e.split("-")[1];
}
function dl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vl(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? Xe(o) : null, r = o ? St(o) : null, l = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, _;
  switch (i) {
    case ue:
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
    case Je:
      _ = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Te:
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
  var h = i ? dl(i) : null;
  if (h != null) {
    var s = h === "y" ? "height" : "width";
    switch (r) {
      case Ct:
        _[h] = _[h] - (t[s] / 2 - n[s] / 2);
        break;
      case cn:
        _[h] = _[h] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return _;
}
function gl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function T_(e) {
  return Object.assign({}, gl(), e);
}
function N_(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Er(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, l = r === void 0 ? e.strategy : r, c = n.boundary, _ = c === void 0 ? a_ : c, h = n.rootBoundary, s = h === void 0 ? pl : h, p = n.elementContext, f = p === void 0 ? Lt : p, a = n.altBoundary, u = a === void 0 ? !1 : a, y = n.padding, d = y === void 0 ? 0 : y, v = T_(typeof d != "number" ? d : N_(d, Io)), g = f === Lt ? c_ : Lt, k = e.rects.popper, w = e.elements[u ? g : f], C = A_(lt(w) ? w : w.contextElement || Ze(e.elements.popper), _, s, l), $ = Et(e.elements.reference), x = vl({
    reference: $,
    element: k,
    strategy: "absolute",
    placement: i
  }), b = Zo(Object.assign({}, k, x)), E = f === Lt ? b : $, M = {
    top: C.top - E.top + v.top,
    bottom: E.bottom - C.bottom + v.bottom,
    left: C.left - E.left + v.left,
    right: E.right - C.right + v.right
  }, D = e.modifiersData.offset;
  if (f === Lt && D) {
    var K = D[i];
    Object.keys(M).forEach(function(q) {
      var ce = [Je, we].indexOf(q) >= 0 ? 1 : -1, X = [ue, we].indexOf(q) >= 0 ? "y" : "x";
      M[q] += K[X] * ce;
    });
  }
  return M;
}
var ws = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ks() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function O_(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? ws : i;
  return function(c, _, h) {
    h === void 0 && (h = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ws, r),
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
          reference: lt(c) ? Gt(c) : c.contextElement ? Gt(c.contextElement) : [],
          popper: Gt(_)
        };
        var k = k_(x_([].concat(o, s.options.modifiers)));
        return s.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), u(), a.update();
      },
      forceUpdate: function() {
        if (!f) {
          var v = s.elements, g = v.reference, k = v.popper;
          if (!!ks(g, k)) {
            s.rects = {
              reference: s_(g, Ho(k), s.options.strategy === "fixed"),
              popper: ul(k)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(M) {
              return s.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var C = s.orderedModifiers[w], $ = C.fn, x = C.options, b = x === void 0 ? {} : x, E = C.name;
              typeof $ == "function" && (s = $({
                state: s,
                options: b,
                name: E,
                instance: a
              }) || s);
            }
          }
        }
      },
      update: $_(function() {
        return new Promise(function(d) {
          a.forceUpdate(), d(s);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!ks(c, _))
      return a;
    a.setOptions(h).then(function(d) {
      !f && h.onFirstUpdate && h.onFirstUpdate(d);
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
          p.push(C || $);
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
var An = {
  passive: !0
};
function P_(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, c = l === void 0 ? !0 : l, _ = ae(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(s) {
    s.addEventListener("scroll", n.update, An);
  }), c && _.addEventListener("resize", n.update, An), function() {
    r && h.forEach(function(s) {
      s.removeEventListener("scroll", n.update, An);
    }), c && _.removeEventListener("resize", n.update, An);
  };
}
const L_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: P_,
  data: {}
};
function D_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = vl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const H_ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: D_,
  data: {}
};
var I_ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function W_(e) {
  var t = e.x, n = e.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: xt(t * i) / i || 0,
    y: xt(n * i) / i || 0
  };
}
function $s(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, l = e.offsets, c = e.position, _ = e.gpuAcceleration, h = e.adaptive, s = e.roundOffsets, p = e.isFixed, f = l.x, a = f === void 0 ? 0 : f, u = l.y, y = u === void 0 ? 0 : u, d = typeof s == "function" ? s({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  a = d.x, y = d.y;
  var v = l.hasOwnProperty("x"), g = l.hasOwnProperty("y"), k = Te, w = ue, C = window;
  if (h) {
    var $ = Ho(n), x = "clientHeight", b = "clientWidth";
    if ($ === ae(n) && ($ = Ze(n), Ne($).position !== "static" && c === "absolute" && (x = "scrollHeight", b = "scrollWidth")), $ = $, i === ue || (i === Te || i === Je) && r === cn) {
      w = we;
      var E = p && $ === C && C.visualViewport ? C.visualViewport.height : $[x];
      y -= E - o.height, y *= _ ? 1 : -1;
    }
    if (i === Te || (i === ue || i === we) && r === cn) {
      k = Je;
      var M = p && $ === C && C.visualViewport ? C.visualViewport.width : $[b];
      a -= M - o.width, a *= _ ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, h && I_), K = s === !0 ? W_({
    x: a,
    y
  }) : {
    x: a,
    y
  };
  if (a = K.x, y = K.y, _) {
    var q;
    return Object.assign({}, D, (q = {}, q[w] = g ? "0" : "", q[k] = v ? "0" : "", q.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + y + "px)" : "translate3d(" + a + "px, " + y + "px, 0)", q));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? y + "px" : "", t[k] = v ? a + "px" : "", t.transform = "", t));
}
function j_(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, l = r === void 0 ? !0 : r, c = n.roundOffsets, _ = c === void 0 ? !0 : c, h = {
    placement: Xe(t.placement),
    variation: St(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $s(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: _
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $s(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: _
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const U_ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: j_,
  data: {}
};
function B_(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
    !le(r) || !be(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === !1 ? r.removeAttribute(l) : r.setAttribute(l, c === !0 ? "" : c);
    }));
  });
}
function F_(e) {
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
      !le(i) || !be(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(_) {
        i.removeAttribute(_);
      }));
    });
  };
}
const z_ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: B_,
  effect: F_,
  requires: ["computeStyles"]
};
var V_ = [L_, H_, U_, z_], ml = /* @__PURE__ */ O_({
  defaultModifiers: V_
});
function q_(e) {
  return e === "x" ? "y" : "x";
}
function Wn(e, t, n) {
  return it(e, io(t, n));
}
function G_(e, t, n) {
  var o = Wn(e, t, n);
  return o > n ? n : o;
}
function Y_(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !1 : l, _ = n.boundary, h = n.rootBoundary, s = n.altBoundary, p = n.padding, f = n.tether, a = f === void 0 ? !0 : f, u = n.tetherOffset, y = u === void 0 ? 0 : u, d = Er(t, {
    boundary: _,
    rootBoundary: h,
    padding: p,
    altBoundary: s
  }), v = Xe(t.placement), g = St(t.placement), k = !g, w = dl(v), C = q_(w), $ = t.modifiersData.popperOffsets, x = t.rects.reference, b = t.rects.popper, E = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, M = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (r) {
      var q, ce = w === "y" ? ue : Te, X = w === "y" ? we : Je, W = w === "y" ? "height" : "width", ee = $[w], Oe = ee + d[ce], ke = ee - d[X], at = a ? -b[W] / 2 : 0, $e = g === Ct ? x[W] : b[W], Pe = g === Ct ? -b[W] : -x[W], Qe = t.elements.arrow, xe = a && Qe ? ul(Qe) : {
        width: 0,
        height: 0
      }, A = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gl(), L = A[ce], G = A[X], J = Wn(0, x[W], xe[W]), _e = k ? x[W] / 2 - at - J - L - M.mainAxis : $e - J - L - M.mainAxis, et = k ? -x[W] / 2 + at + J + G + M.mainAxis : Pe + J + G + M.mainAxis, Ee = t.elements.arrow && Ho(t.elements.arrow), At = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, Sn = (q = D == null ? void 0 : D[w]) != null ? q : 0, P = ee + _e - Sn - At, Mn = ee + et - Sn, Tt = Wn(a ? io(Oe, P) : Oe, ee, a ? it(ke, Mn) : ke);
      $[w] = Tt, K[w] = Tt - ee;
    }
    if (c) {
      var Nt, Rn = w === "x" ? ue : Te, ct = w === "x" ? we : Je, he = $[C], tt = C === "y" ? "height" : "width", Ot = he + d[Rn], Pr = he - d[ct], Wo = [ue, Te].indexOf(v) !== -1, Lr = (Nt = D == null ? void 0 : D[C]) != null ? Nt : 0, Dr = Wo ? Ot : he - x[tt] - b[tt] - Lr + M.altAxis, Hr = Wo ? he + x[tt] + b[tt] - Lr - M.altAxis : Pr, Ir = a && Wo ? G_(Dr, he, Hr) : Wn(a ? Dr : Ot, he, a ? Hr : Pr);
      $[C] = Ir, K[C] = Ir - he;
    }
    t.modifiersData[o] = K;
  }
}
const Qo = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Y_,
  requiresIfExists: ["offset"]
};
var K_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return K_[t];
  });
}
var X_ = {
  start: "end",
  end: "start"
};
function xs(e) {
  return e.replace(/start|end/g, function(t) {
    return X_[t];
  });
}
function J_(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, l = n.padding, c = n.flipVariations, _ = n.allowedAutoPlacements, h = _ === void 0 ? __ : _, s = St(o), p = s ? c ? ys : ys.filter(function(u) {
    return St(u) === s;
  }) : Io, f = p.filter(function(u) {
    return h.indexOf(u) >= 0;
  });
  f.length === 0 && (f = p);
  var a = f.reduce(function(u, y) {
    return u[y] = Er(e, {
      placement: y,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[Xe(y)], u;
  }, {});
  return Object.keys(a).sort(function(u, y) {
    return a[u] - a[y];
  });
}
function Z_(e) {
  if (Xe(e) === xr)
    return [];
  var t = jn(e);
  return [xs(e), t, xs(t)];
}
function Q_(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, r = i === void 0 ? !0 : i, l = n.altAxis, c = l === void 0 ? !0 : l, _ = n.fallbackPlacements, h = n.padding, s = n.boundary, p = n.rootBoundary, f = n.altBoundary, a = n.flipVariations, u = a === void 0 ? !0 : a, y = n.allowedAutoPlacements, d = t.options.placement, v = Xe(d), g = v === d, k = _ || (g || !u ? [jn(d)] : Z_(d)), w = [d].concat(k).reduce(function(xe, A) {
      return xe.concat(Xe(A) === xr ? J_(t, {
        placement: A,
        boundary: s,
        rootBoundary: p,
        padding: h,
        flipVariations: u,
        allowedAutoPlacements: y
      }) : A);
    }, []), C = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), b = !0, E = w[0], M = 0; M < w.length; M++) {
      var D = w[M], K = Xe(D), q = St(D) === Ct, ce = [ue, we].indexOf(K) >= 0, X = ce ? "width" : "height", W = Er(t, {
        placement: D,
        boundary: s,
        rootBoundary: p,
        altBoundary: f,
        padding: h
      }), ee = ce ? q ? Je : Te : q ? we : ue;
      C[X] > $[X] && (ee = jn(ee));
      var Oe = jn(ee), ke = [];
      if (r && ke.push(W[K] <= 0), c && ke.push(W[ee] <= 0, W[Oe] <= 0), ke.every(function(xe) {
        return xe;
      })) {
        E = D, b = !1;
        break;
      }
      x.set(D, ke);
    }
    if (b)
      for (var at = u ? 3 : 1, $e = function(A) {
        var L = w.find(function(G) {
          var J = x.get(G);
          if (J)
            return J.slice(0, A).every(function(_e) {
              return _e;
            });
        });
        if (L)
          return E = L, "break";
      }, Pe = at; Pe > 0; Pe--) {
        var Qe = $e(Pe);
        if (Qe === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[o]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const yl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Q_,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ef(e) {
  return e.button === 2;
}
var Ie;
class tf extends fr {
  constructor() {
    super(...arguments);
    S(this, Ie, void 0);
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
    super.componentWillUnmount(), (n = m(this, Ie)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Qo, yl],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, Ie) ? m(this, Ie).setOptions(n) : this.ref.current && T(this, Ie, ml(this._getPopperElement(), this.ref.current, n)), m(this, Ie);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ mr("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Ie = new WeakMap();
var We, se, dt, vn;
class oe extends Wt {
  constructor() {
    super(...arguments);
    S(this, We, void 0);
    S(this, se, void 0);
    S(this, dt, void 0);
    S(this, vn, void 0);
  }
  get isShown() {
    var n;
    return (n = m(this, We)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return m(this, We) || this._ensureMenu();
  }
  get popper() {
    return m(this, se) ? m(this, se) : this._createPopper();
  }
  get trigger() {
    return m(this, vn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return T(this, vn, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = m(this, se)) == null || o.destroy(), T(this, se, void 0), (i = m(this, We)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = m(this, se)) == null || n.destroy(), super.destroy(), (o = m(this, We)) == null || o.remove();
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
    return T(this, We, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: o, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        o ? typeof o == "object" ? { ...Qo, options: o } : Qo : null,
        n ? yl : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return m(this, se) ? m(this, se).setOptions(n) : T(this, se, ml(this._getPopperElement(), this.menu, n)), m(this, se);
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (t_(mr(tf, n), this.menu), !0);
  }
  _getPopperElement() {
    return m(this, dt) || T(this, dt, {
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
    }), m(this, dt);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) == null ? void 0 : h.call(_, r)) || o && ef(o))
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
We = new WeakMap(), se = new WeakMap(), dt = new WeakMap(), vn = new WeakMap(), R(oe, "NAME", "contextmenu"), R(oe, "EVENTS", !0), R(oe, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), R(oe, "MENU_CLASS", "contextmenu"), R(oe, "CLASS_SHOW", "show"), R(oe, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${oe.MENU_CLASS}`))
    return;
  const n = t.closest(oe.MENU_SELECTOR);
  n && (oe.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", oe.clear.bind(oe));
var vt, gt, mt, go, bl;
const Or = class extends oe {
  constructor() {
    super(...arguments);
    S(this, go);
    S(this, vt, !1);
    S(this, gt, 0);
    R(this, "hideLater", () => {
      m(this, mt).call(this), T(this, gt, window.setTimeout(this.hide.bind(this), 100));
    });
    S(this, mt, () => {
      clearTimeout(m(this, gt)), T(this, gt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Or.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!m(this, vt) && this.isHover && Y(this, go, bl).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    m(this, vt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", m(this, mt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && n.modifiers.push({ ...Gc, options: {
      padding: o,
      element: ".arrow"
    } }, {
      ...Xc,
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
let ie = Or;
vt = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), go = new WeakSet(), bl = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", m(this, mt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), T(this, vt, !0);
}, R(ie, "NAME", "dropdown"), R(ie, "MENU_CLASS", "dropdown-menu"), R(ie, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), R(ie, "DEFAULT", {
  ...oe.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ie.MENU_SELECTOR);
  if (n) {
    const o = ie.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    ie.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ie.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = ie.ensure(n);
  o.isHover && o.show();
});
var gn, yt;
class nf extends Vt {
  constructor() {
    super(...arguments);
    S(this, gn, void 0);
    S(this, yt, yc());
    R(this, "state", { placement: "", show: !1 });
  }
  get ref() {
    return m(this, yt);
  }
  get triggerElement() {
    return m(this, yt).current;
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
    }), T(this, gn, ie.ensure(this.triggerElement, {
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
    (n = m(this, gn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: O("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: m(this, yt)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Fi("div", {
      ...o
    }, n);
  }
}
gn = new WeakMap(), yt = new WeakMap();
class of extends nf {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    const { placement: t, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    return i !== !1 && (n || i === !0) && (i = (n ? t === "top" ? "up" : t === "bottom" ? "down" : t : i) || "down"), o.caret = i, /* @__PURE__ */ Fi(En, {
      ...o
    });
  }
}
function wl({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Oo(of, {
    type: n,
    ...o
  });
}
var Cr, F, kl, $l, Yt, Es, xl = {}, El = [], rf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Cl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Bo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Cr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Un(e, l, o, i, null);
}
function Un(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++kl : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Sr(e) {
  return e.children;
}
function Kt(e, t) {
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
function Sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sl(e);
  }
}
function Cs(e) {
  (!e.__d && (e.__d = !0) && Yt.push(e) && !lo.__r++ || Es !== F.debounceRendering) && ((Es = F.debounceRendering) || setTimeout)(lo);
}
function lo() {
  for (var e; lo.__r = Yt.length; )
    e = Yt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ge({}, r)).__v = r.__v + 1, Tl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? _n(r) : l, r.__h), lf(o, r), r.__e != l && Sl(r)));
    });
}
function Ml(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || El, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Un(null, a, null, null, a) : Array.isArray(a) ? Un(Sr, { children: a }, null, null, null) : a.__b > 0 ? Un(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Tl(e, a, f = f || xl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Rl(a, _, e) : _ = Al(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = _n(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && Ol(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Nl(d[s], d[++s], d[++s]);
}
function Rl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Rl(o, t, n) : Al(n, o, o, i, o.__e, t));
  return t;
}
function Al(e, t, n, o, i, r) {
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
function sf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ao(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ao(e, r, t[r], n[r], o);
}
function Ss(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rf.test(t) ? n : n + "px";
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
            n && t in n || Ss(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ss(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Rs : Ms, r) : e.removeEventListener(t, r ? Rs : Ms, r);
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
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Rs(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Tl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = F.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Kt(d, g), s.constructor = b, s.render = cf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ge({}, s.__s)), Ge(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = F.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ge(Ge({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Sr && h.key == null ? h.props.children : h, Ml(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = af(n.__e, t, n, o, i, r, l, _);
    (h = F.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), F.__e(E, t, n);
  }
}
function lf(e, t) {
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
function af(e, t, n, o, i, r, l, c) {
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
    if (r = r && Cr.call(e.childNodes), h = (p = n.props || xl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sf(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ml(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _n(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Cl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ao(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ao(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Nl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    F.__e(o, n);
  }
}
function Ol(e, t, n) {
  var o, i;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Nl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ol(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Cl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cf(e, t, n) {
  return this.constructor(e, n);
}
Cr = El.slice, F = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kl = 0, $l = function(e) {
  return e != null && e.constructor === void 0;
}, Kt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof e == "function" && (e = e(Ge({}, n), this.props)), e && Ge(n, e), e != null && this.__v && (t && this._sb.push(t), Cs(this));
}, Kt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Cs(this));
}, Kt.prototype.render = Sr, Yt = [], lo.__r = 0;
class _f extends Kt {
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
    return /* @__PURE__ */ Bo(En, {
      key: o,
      ...i
    });
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Bo);
      if ($l(_))
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
    return /* @__PURE__ */ Bo("div", {
      className: O("btn-group", n),
      ...a
    }, o && o.map(this.renderItem.bind(this, t)), c);
  }
}
function ff({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Oo(_f, {
    type: n,
    ...o
  });
}
class _t extends De {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = O(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: O(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Oo(t, {
      ...r
    });
  }
}
R(_t, "ItemComponents", {
  item: gc,
  dropdown: wl,
  "btn-group": ff
}), R(_t, "ROOT_TAG", "nav"), R(_t, "NAME", "toolbar"), R(_t, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function Pl(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function uf({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Pl(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : ye(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : ye(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ No(En, {
    type: n,
    ...c
  });
}
const Ce = 24 * 60 * 60 * 1e3, re = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Cn = (e, t = new Date()) => (e = re(e), t = re(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), As = (e, t = new Date()) => re(e).getFullYear() === re(t).getFullYear(), hf = (e, t = new Date()) => (e = re(e), t = re(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Qf = (e, t = new Date()) => {
  e = re(e), t = re(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, eu = (e, t) => Cn(re(t), e), tu = (e, t) => Cn(re(t).getTime() - Ce, e), nu = (e, t) => Cn(re(t).getTime() + Ce, e), ou = (e, t) => Cn(re(t).getTime() - 2 * Ce, e), er = (e, t = "yyyy-MM-dd hh:mm") => {
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
}, ru = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = er(e, As(e) ? o.month : o.full);
  if (Cn(e, t))
    return i;
  const r = er(t, As(e, t) ? hf(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, su = (e) => {
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
}, Ts = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ts(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Ts(e, "day", n, o);
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
function pf({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = Pl(i, n);
  return o = typeof o == "function" ? o(c) : ye(o, c), /* @__PURE__ */ No(bi, {
    ...l
  }, r, o);
}
function df({
  key: e,
  type: t,
  btnType: n,
  count: o,
  pagerInfo: i,
  linkCreator: r,
  ...l
}) {
  return /* @__PURE__ */ No(En, {
    type: n,
    ...l
  });
}
function vf({
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
      url: typeof n == "function" ? n(s) : ye(n, s)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : ye(l, t), i.menu = { ...i.menu, className: O((_ = i.menu) == null ? void 0 : _.className, "pager-size-menu") }, /* @__PURE__ */ No(wl, {
    type: "dropdown",
    dropdown: i,
    ...r
  });
}
class Bn extends _t {
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
R(Bn, "NAME", "pager"), R(Bn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), R(Bn, "ItemComponents", {
  ..._t.ItemComponents,
  link: uf,
  info: pf,
  nav: df,
  "size-menu": vf
});
class Ns extends xn {
}
R(Ns, "NAME", "pager"), R(Ns, "Component", Bn);
var Mr, z, Ll, Dl, Xt, Os, Hl = {}, Il = [], gf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function N(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Mr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Fn(e, l, o, i, null);
}
function Fn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ll : i };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function mf() {
  return { current: null };
}
function Rr(e) {
  return e.children;
}
function Jt(e, t) {
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
function jl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return jl(e);
  }
}
function Ps(e) {
  (!e.__d && (e.__d = !0) && Xt.push(e) && !co.__r++ || Os !== z.debounceRendering) && ((Os = z.debounceRendering) || setTimeout)(co);
}
function co() {
  for (var e; co.__r = Xt.length; )
    e = Xt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Xt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ye({}, r)).__v = r.__v + 1, zl(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? fn(r) : l, r.__h), bf(o, r), r.__e != l && jl(r)));
    });
}
function Ul(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Il, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Fn(null, a, null, null, a) : Array.isArray(a) ? Fn(Rr, { children: a }, null, null, null) : a.__b > 0 ? Fn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      zl(e, a, f = f || Hl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Bl(a, _, e) : _ = Fl(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = fn(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && ql(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      Vl(d[s], d[++s], d[++s]);
}
function Bl(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Bl(o, t, n) : Fl(n, o, o, i, o.__e, t));
  return t;
}
function Fl(e, t, n, o, i, r) {
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
function yf(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || _o(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || _o(e, r, t[r], n[r], o);
}
function Ls(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gf.test(t) ? n : n + "px";
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
            n && t in n || Ls(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ls(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Hs : Ds, r) : e.removeEventListener(t, r ? Hs : Ds, r);
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
function Ds(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Hs(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function zl(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Jt(d, g), s.constructor = b, s.render = kf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ye({}, s.__s)), Ye(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = z.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ye(Ye({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Rr && h.key == null ? h.props.children : h, Ul(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wf(n.__e, t, n, o, i, r, l, _);
    (h = z.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), z.__e(E, t, n);
  }
}
function bf(e, t) {
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
function wf(e, t, n, o, i, r, l, c) {
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
    if (r = r && Mr.call(e.childNodes), h = (p = n.props || Hl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (yf(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ul(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fn(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && _o(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && _o(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Vl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function ql(e, t, n) {
  var o, i;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Vl(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ql(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Wl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function kf(e, t, n) {
  return this.constructor(e, n);
}
Mr = Il.slice, z = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ll = 0, Dl = function(e) {
  return e != null && e.constructor === void 0;
}, Jt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof e == "function" && (e = e(Ye({}, n), this.props)), e && Ye(n, e), e != null && this.__v && (t && this._sb.push(t), Ps(this));
}, Jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ps(this));
}, Jt.prototype.render = Rr, Xt = [], co.__r = 0;
let $f = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ar, V, Gl, Zt, Is, Yl = {}, Kl = [], xf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ws(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ar.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zn(e, l, o, i, null);
}
function zn(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Gl : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function Tr(e) {
  return e.children;
}
function Qt(e, t) {
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
function Jl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Jl(e);
  }
}
function js(e) {
  (!e.__d && (e.__d = !0) && Zt.push(e) && !fo.__r++ || Is !== V.debounceRendering) && ((Is = V.debounceRendering) || setTimeout)(fo);
}
function fo() {
  for (var e; fo.__r = Zt.length; )
    e = Zt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zt = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ke({}, r)).__v = r.__v + 1, ta(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? un(r) : l, r.__h), Cf(o, r), r.__e != l && Jl(r)));
    });
}
function Zl(e, t, n, o, i, r, l, c, _, h) {
  var s, p, f, a, u, y, d, v = o && o.__k || Kl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zn(null, a, null, null, a) : Array.isArray(a) ? zn(Tr, { children: a }, null, null, null) : a.__b > 0 ? zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ta(e, a, f = f || Yl, i, r, l, c, _, h), u = a.__e, (p = a.ref) && f.ref != p && (d || (d = []), f.ref && d.push(f.ref, null, a), d.push(p, a.__c || u, a)), u != null ? (y == null && (y = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ql(a, _, e) : _ = ea(e, a, f, v, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = un(f));
    }
  for (n.__e = y, s = g; s--; )
    v[s] != null && oa(v[s], v[s]);
  if (d)
    for (s = 0; s < d.length; s++)
      na(d[s], d[++s], d[++s]);
}
function Ql(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ql(o, t, n) : ea(n, o, o, i, o.__e, t));
  return t;
}
function ea(e, t, n, o, i, r) {
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
function Ef(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || uo(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || uo(e, r, t[r], n[r], o);
}
function Us(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xf.test(t) ? n : n + "px";
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
            n && t in n || Us(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Us(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Fs : Bs, r) : e.removeEventListener(t, r ? Fs : Bs, r);
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
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function Fs(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function ta(e, t, n, o, i, r, l, c, _) {
  var h, s, p, f, a, u, y, d, v, g, k, w, C, $, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = V.__b) && h(t);
  try {
    e:
      if (typeof b == "function") {
        if (d = t.props, v = (h = b.contextType) && o[h.__c], g = h ? v ? v.props.value : h.__ : o, n.__c ? y = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(d, g) : (t.__c = s = new Qt(d, g), s.constructor = b, s.render = Mf), v && v.sub(s), s.props = d, s.state || (s.state = {}), s.context = g, s.__n = o, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ke({}, s.__s)), Ke(s.__s, b.getDerivedStateFromProps(d, s.__s))), f = s.props, a = s.state, p)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(d, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(d, s.__s, g) === !1 || t.__v === n.__v) {
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
        if (s.context = g, s.props = d, s.__v = t, s.__P = e, w = V.__r, C = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), $ = 0; $ < s._sb.length; $++)
            s.__h.push(s._sb[$]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ke(Ke({}, o), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), x = h != null && h.type === Tr && h.key == null ? h.props.children : h, Zl(e, Array.isArray(x) ? x : [x], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sf(n.__e, t, n, o, i, r, l, _);
    (h = V.diffed) && h(t);
  } catch (E) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), V.__e(E, t, n);
  }
}
function Cf(e, t) {
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
function Sf(e, t, n, o, i, r, l, c) {
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
    if (r = r && Ar.call(e.childNodes), h = (p = n.props || Yl).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Ef(e, f, p, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Zl(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && un(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Xl(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && uo(e, "value", u, p.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && uo(e, "checked", u, p.checked, !1));
  }
  return e;
}
function na(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    V.__e(o, n);
  }
}
function oa(e, t, n) {
  var o, i;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || na(o, null, t)), (o = e.__c) != null) {
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
      o[i] && oa(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Xl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mf(e, t, n) {
  return this.constructor(e, n);
}
Ar = Kl.slice, V = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Gl = 0, Qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this._sb.push(t), js(this));
}, Qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), js(this));
}, Qt.prototype.render = Tr, Zt = [], fo.__r = 0;
var ot, rt;
class zs extends Qt {
  constructor(n) {
    var o;
    super(n);
    S(this, ot, 0);
    S(this, rt, null);
    R(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && n.preventDefault();
      }
    });
    R(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (m(this, ot) && cancelAnimationFrame(m(this, ot)), T(this, ot, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), T(this, ot, 0);
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
    n && (T(this, rt, typeof n == "string" ? document : n.current), m(this, rt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), m(this, rt) && m(this, rt).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, y.width = this.barSize, y.left = Math.round(Math.min(p, f) * (n - y.width) / p)) : (u.width = i, u.height = n, y.height = this.barSize, y.top = Math.round(Math.min(p, f) * (n - y.height) / p)), /* @__PURE__ */ Ws("div", {
      className: O("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": a
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Ws("div", {
      className: "scrollbar-bar",
      style: y,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ot = new WeakMap(), rt = new WeakMap();
function Vs(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function ra({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var b, E;
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
  }], y = ["dtable-cell-content", t], d = [(E = c != null ? c : (b = o.data) == null ? void 0 : b[e.name]) != null ? E : ""], v = i ? i(d, { row: o, col: e }, N) : d, g = [], k = [], w = {}, C = {};
  let $ = "div";
  v == null || v.forEach((M) => {
    var D;
    if (typeof M == "object" && M && !Dl(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const K = M.outer ? g : k;
      M.html ? K.push(/* @__PURE__ */ N("div", {
        className: O("dtable-cell-html", M.className),
        style: M.style,
        dangerouslySetInnerHTML: { __html: M.html },
        ...(D = M.attrs) != null ? D : {}
      })) : (M.style && Object.assign(M.outer ? s : a, M.style), M.className && (M.outer ? u : y).push(M.className), M.children && K.push(M.children), M.attrs && Object.assign(M.outer ? w : C, M.attrs)), M.tagName && !M.outer && ($ = M.tagName);
    } else
      k.push(M);
  });
  const x = $;
  return /* @__PURE__ */ N("div", {
    className: O(u),
    style: s,
    "data-col": e.name,
    ...h,
    ...w
  }, k.length > 0 && /* @__PURE__ */ N(x, {
    className: O(y),
    style: a,
    ...C
  }, k), g);
}
function Fo({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = ra, onRenderCell: _ }) {
  return /* @__PURE__ */ N("div", {
    className: O("dtable-cells", t),
    style: { top: n, left: o, width: i, height: r }
  }, l.map((h) => h.visible ? /* @__PURE__ */ N(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: _
  }) : null));
}
function sa({
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
  CellComponent: f = ra,
  onRenderCell: a,
  style: u,
  ...y
}) {
  let d = null;
  i != null && i.length && (d = /* @__PURE__ */ N(Fo, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let v = null;
  l != null && l.length && (v = /* @__PURE__ */ N(Fo, {
    className: "dtable-flexable",
    cols: l,
    left: c - p,
    width: Math.max(_, h),
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ N(Fo, {
    className: "dtable-fixed-right",
    cols: r,
    left: c + _,
    width: s,
    row: e,
    CellComponent: f,
    onRenderCell: a
  }));
  const k = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ N("div", {
    className: O("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...y
  }, d, v, g);
}
function Rf({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, N);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ N("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ N(sa, {
    ...o
  }));
}
function Af({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ N("div", {
    className: O("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, p = c == null ? void 0 : c({ props: s, row: h }, N);
    return p && Object.assign(s, p), /* @__PURE__ */ N(sa, {
      ...s
    });
  }));
}
const ho = /* @__PURE__ */ new Map(), po = [];
function ia(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && ho.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ho.set(n, e), (t == null ? void 0 : t.buildIn) && !po.includes(n) && po.push(n);
}
function Rt(e, t) {
  ia(e, t);
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
function la(e) {
  return ho.delete(e);
}
function Tf(e) {
  if (typeof e == "string") {
    const t = ho.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function aa(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Tf(o);
    !i || n.has(i.name) || ((r = i.plugins) != null && r.length && aa(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function Nf(e = [], t = !0) {
  return t && po.length && e.unshift(...po), e != null && e.length ? aa([], e, /* @__PURE__ */ new Set()) : [];
}
function qs() {
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
var st, bt, je, ve, Ue, Z, fe, ge, wt, mn, yn, Ae, kt, $t, mo, ca, yo, _a, bo, fa, wo, ua, bn, nr, ko, $o, wn, kn, xo, Eo, Co, ha, So, pa, Mo, da;
class tr extends Jt {
  constructor(n) {
    var o;
    super(n);
    S(this, mo);
    S(this, yo);
    S(this, bo);
    S(this, wo);
    S(this, bn);
    S(this, Co);
    S(this, So);
    S(this, Mo);
    R(this, "ref", mf());
    S(this, st, 0);
    S(this, bt, void 0);
    S(this, je, !1);
    S(this, ve, void 0);
    S(this, Ue, void 0);
    S(this, Z, []);
    S(this, fe, void 0);
    S(this, ge, /* @__PURE__ */ new Map());
    S(this, wt, {});
    S(this, mn, void 0);
    S(this, yn, []);
    R(this, "updateLayout", () => {
      m(this, st) && cancelAnimationFrame(m(this, st)), T(this, st, requestAnimationFrame(() => {
        T(this, fe, void 0), this.forceUpdate(), T(this, st, 0);
      }));
    });
    S(this, Ae, (n, o) => {
      o = o || n.type;
      const i = m(this, ge).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    S(this, kt, (n) => {
      m(this, Ae).call(this, n, `window_${n.type}`);
    });
    S(this, $t, (n) => {
      m(this, Ae).call(this, n, `document_${n.type}`);
    });
    S(this, ko, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return m(this, Z).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    S(this, $o, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), m(this, Z).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    S(this, wn, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), m(this, Z).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    S(this, kn, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    S(this, xo, (n) => {
      var c, _, h, s, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), m(this, Z).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of m(this, Z))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of m(this, Z))
          if (((p = u.onRowClick) == null ? void 0 : p.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    S(this, Eo, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    T(this, bt, (o = n.id) != null ? o : `dtable-${$f(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, T(this, Ue, Object.freeze(Nf(n.plugins))), m(this, Ue).forEach((i) => {
      var _;
      const { methods: r, data: l, state: c } = i;
      r && Object.entries(r).forEach(([h, s]) => {
        typeof s == "function" && Object.assign(this, { [h]: s.bind(this) });
      }), l && Object.assign(m(this, wt), l.call(this)), c && Object.assign(this.state, c.call(this)), (_ = i.onCreate) == null || _.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = m(this, fe)) == null ? void 0 : n.options) || m(this, ve) || qs();
  }
  get plugins() {
    return m(this, Z);
  }
  get layout() {
    return m(this, fe);
  }
  get id() {
    return m(this, bt);
  }
  get data() {
    return m(this, wt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    T(this, ve, void 0);
  }
  componentDidMount() {
    if (m(this, je) ? this.forceUpdate() : Y(this, bn, nr).call(this), m(this, Z).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", m(this, xo)), this.on("keydown", m(this, Eo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), T(this, mn, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    m(this, Z).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    m(this, je) ? Y(this, bn, nr).call(this) : m(this, Z).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = m(this, mn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of m(this, ge).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), m(this, kt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), m(this, $t)) : n.removeEventListener(i, m(this, Ae));
    m(this, Z).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), m(this, Ue).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), T(this, wt, {}), m(this, ge).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = m(this, ge).get(n);
    r ? r.push(o) : (m(this, ge).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), m(this, kt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), m(this, $t)) : (l = this.ref.current) == null || l.addEventListener(n, m(this, Ae)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = m(this, ge).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (m(this, ge).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), m(this, kt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), m(this, $t)) : (c = this.ref.current) == null || c.removeEventListener(n, m(this, Ae)));
  }
  emitCustomEvent(n, o) {
    m(this, Ae).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!m(this, ve))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      T(this, fe, void 0);
    else if (i === "options") {
      if (T(this, ve, void 0), !m(this, fe))
        return;
      T(this, fe, void 0);
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
    return (r = $n(m(this, yn), n, o, i, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var a;
    const n = Y(this, Mo, da).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((a = n == null ? void 0 : n.scrollTop) != null ? a : 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && m(this, Z).forEach((u) => {
      var d;
      const y = (d = u.onRender) == null ? void 0 : d.call(this, n);
      !y || (y.style && Object.assign(s, y.style), y.className && p.push(y.className), y.children && f.push(y.children));
    }), /* @__PURE__ */ N("div", {
      id: m(this, bt),
      className: O(p),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && Y(this, mo, ca).call(this, n), n && Y(this, yo, _a).call(this, n), n && Y(this, bo, fa).call(this, n), n && Y(this, wo, ua).call(this, n));
  }
}
st = new WeakMap(), bt = new WeakMap(), je = new WeakMap(), ve = new WeakMap(), Ue = new WeakMap(), Z = new WeakMap(), fe = new WeakMap(), ge = new WeakMap(), wt = new WeakMap(), mn = new WeakMap(), yn = new WeakMap(), Ae = new WeakMap(), kt = new WeakMap(), $t = new WeakMap(), mo = new WeakSet(), ca = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ N(Rf, {
      scrollLeft: l,
      height: r,
      onRenderCell: m(this, wn),
      onRenderRow: m(this, $o),
      ...i
    });
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ N(qo, {
    className: "dtable-header",
    style: { height: r },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, yo = new WeakSet(), _a = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ N(Af, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: _,
    scrollTop: h,
    onRenderCell: m(this, wn),
    onRenderRow: m(this, ko),
    ...c
  });
}, bo = new WeakSet(), fa = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ N(qo, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, wo = new WeakSet(), ua = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: p } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > p && o.push(
    /* @__PURE__ */ N(zs, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: p,
      onScroll: m(this, kn),
      left: r.fixedLeftWidth,
      bottom: (a === "inside" ? 0 : -f) + h,
      size: f,
      wheelContainer: this.ref
    })
  ), _ > c && o.push(
    /* @__PURE__ */ N(zs, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: _,
      clientSize: c,
      onScroll: m(this, kn),
      right: 0,
      size: f,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, bn = new WeakSet(), nr = function() {
  var n;
  T(this, je, !1), (n = this.options.afterRender) == null || n.call(this), m(this, Z).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, ko = new WeakMap(), $o = new WeakMap(), wn = new WeakMap(), kn = new WeakMap(), xo = new WeakMap(), Eo = new WeakMap(), Co = new WeakSet(), ha = function() {
  if (m(this, ve))
    return !1;
  const o = { ...qs(), ...m(this, Ue).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return T(this, ve, o), T(this, Z, m(this, Ue).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), T(this, yn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, So = new WeakSet(), pa = function() {
  var Qe, xe;
  const { plugins: n } = this;
  let o = m(this, ve);
  const i = {
    flex: /* @__PURE__ */ N("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ N("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((A) => {
    var G;
    const L = (G = A.beforeLayout) == null ? void 0 : G.call(this, o);
    L && (o = { ...o, ...L }), Object.assign(i, A.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], p = {}, f = [], a = [];
  let u = 0, y = 0, d = 0;
  o.cols.forEach((A) => {
    var Mn, Tt, Nt;
    if (A.hidden)
      return;
    const {
      name: L,
      type: G = "",
      fixed: J = !1,
      flex: _e = !1,
      width: et = r,
      minWidth: Ee = l,
      maxWidth: At = c,
      ...Sn
    } = A, P = {
      name: L,
      type: G,
      setting: {
        name: L,
        type: G,
        fixed: J,
        flex: _e,
        width: et,
        minWidth: Ee,
        maxWidth: At,
        ...Sn
      },
      flex: J ? 0 : _e === !0 ? 1 : typeof _e == "number" ? _e : 0,
      left: 0,
      width: Vs(et, Ee, At),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Rn) => {
      var he, tt;
      const ct = (he = Rn.colTypes) == null ? void 0 : he[G];
      if (ct) {
        const Ot = typeof ct == "function" ? ct(P) : ct;
        Ot && Object.assign(P.setting, Ot);
      }
      (tt = Rn.onAddCol) == null || tt.call(this, P);
    }), P.width = Vs((Mn = P.setting.width) != null ? Mn : P.width, (Tt = P.setting.minWidth) != null ? Tt : Ee, (Nt = P.setting.maxWidth) != null ? Nt : At), P.realWidth = P.realWidth || P.width, J === "left" ? (P.left = u, u += P.width, _.push(P)) : J === "right" ? (P.left = y, y += P.width, h.push(P)) : (P.left = d, d += P.width, s.push(P)), P.flex && a.push(P), f.push(P), p[P.name] = P;
  });
  let v = o.width, g = 0;
  const k = u + d + y;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    g = k;
  else if (v === "100%") {
    const { parent: A } = this;
    if (A)
      g = A.clientWidth;
    else {
      g = 0, T(this, je, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: C = "id", rowHeight: $ } = o, x = [], b = (A, L, G) => {
    var _e, et;
    const J = { data: G != null ? G : { [C]: A }, id: A, index: x.length, top: 0 };
    if (G || (J.lazy = !0), x.push(J), ((_e = o.onAddRow) == null ? void 0 : _e.call(this, J, L)) !== !1) {
      for (const Ee of n)
        if (((et = Ee.onAddRow) == null ? void 0 : et.call(this, J, L)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let A = 0; A < w; A++)
      b(`${A}`, A);
  else
    Array.isArray(w) && w.forEach((A, L) => {
      var G;
      typeof A == "object" ? b(`${(G = A[C]) != null ? G : ""}`, L, A) : b(`${A != null ? A : ""}`, L);
    });
  let E = x;
  const M = {};
  if (o.onAddRows) {
    const A = o.onAddRows.call(this, E);
    A && (E = A);
  }
  for (const A of n) {
    const L = (Qe = A.onAddRows) == null ? void 0 : Qe.call(this, E);
    L && (E = L);
  }
  E.forEach((A, L) => {
    M[A.id] = A, A.index = L, A.top = A.index * $;
  });
  const { header: D, footer: K } = o, q = D ? o.headerHeight || $ : 0, ce = K ? o.footerHeight || $ : 0;
  let X = o.height, W = 0;
  const ee = E.length * $, Oe = q + ce + ee;
  if (typeof X == "function" && (X = X.call(this, Oe)), X === "auto")
    W = Oe;
  else if (typeof X == "object")
    W = Math.min(X.max, Math.max(X.min, Oe));
  else if (X === "100%") {
    const { parent: A } = this;
    if (A)
      W = A.clientHeight;
    else {
      W = 0, T(this, je, !0);
      return;
    }
  } else
    W = X;
  const ke = W - q - ce, at = g - u - y, $e = {
    options: o,
    allRows: x,
    width: g,
    height: W,
    rows: E,
    rowsMap: M,
    rowHeight: $,
    rowsHeight: ke,
    rowsHeightTotal: ee,
    header: D,
    footer: K,
    footerGenerators: i,
    headerHeight: q,
    footerHeight: ce,
    colsMap: p,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: at,
      scrollColsWidth: d,
      fixedRightWidth: y
    }
  }, Pe = (xe = o.onLayout) == null ? void 0 : xe.call(this, $e);
  Pe && Object.assign($e, Pe), n.forEach((A) => {
    if (A.onLayout) {
      const L = A.onLayout.call(this, $e);
      L && Object.assign($e, L);
    }
  }), T(this, fe, $e);
}, Mo = new WeakSet(), da = function() {
  (Y(this, Co, ha).call(this) || !m(this, fe)) && Y(this, So, pa).call(this);
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
  const { rowsHeightTotal: h, rowsHeight: s, rows: p, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), y = a + s, d = Math.min(p.length, Math.ceil(y / f)), v = [], { rowDataGetter: g } = this.options;
  for (let k = u; k < d; k++) {
    const w = p[k];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = a, n.scrollLeft = o, n;
}, R(tr, "addPlugin", ia), R(tr, "removePlugin", la);
function Gs(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const Of = {
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
      Gs(this, o);
    },
    mouseleave() {
      Gs(this, !1);
    }
  }
}, Pf = Rt(Of, { buildIn: !0 });
function Lf(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !va.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function Df(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function va() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Hf() {
  return Object.keys(this.state.checkedRows);
}
const If = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Lf,
    isRowChecked: Df,
    isAllRowChecked: va,
    getChecks: Hf
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
        /* @__PURE__ */ N("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ N("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ N("div", null, o.join(", "))
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
      const h = this.isRowChecked(o), s = (_ = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, o)) != null ? _ : /* @__PURE__ */ N("input", {
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
      const _ = this.isAllRowChecked(), h = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, _, o)) != null ? c : /* @__PURE__ */ N("input", {
        type: "checkbox",
        checked: _
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: O(e.className, "is-checked") };
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
}, Wf = Rt(If);
var ga = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ga || {});
function or(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = or.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? or.call(this, t.parent).level + 1 : 0, t;
}
function jf(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ma.call(this)), t) {
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
function ma() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function ya(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = ya(e, t, l.children, o + 1)));
  }
  return t;
}
function ba(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, ba(e, r, n, o);
  }), i;
}
function wa(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && wa(e, r.parent, n, o, i);
}
const Uf = {
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
        const l = ba(this, i, r, o);
        l != null && l.parent && wa(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: jf,
    isAllCollapsed: ma,
    getNestedRowInfo: or
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), ya(this.data.nestedMap), e.sort((t, n) => {
      var l, c;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = ((l = o.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, _, h;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift((_ = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) != null ? _ : /* @__PURE__ */ N("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ N("span", {
      className: "toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ N("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ N("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ N("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: O(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = O(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Bf = Rt(Uf);
const Ff = {
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
        return e[0] = /* @__PURE__ */ N("a", {
          href: r,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ N("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ N("img", {
          src: o ? o[l] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ N("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ N("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ N("circle", {
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
        }), /* @__PURE__ */ N("text", {
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
            return h && (_ = { className: l, ...h, ..._ }), ye(i, _);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = er(r, o) : i === "html" ? e[0] = { html: ye(o, r) } : e[0] = ye(o, r), e;
      }
    }
  }
}, zf = Rt(Ff, { buildIn: !0 }), Vf = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ N("div", {
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
}, qf = Rt(Vf, { buildIn: !0 }), Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Pf,
  checkable: Wf,
  NestedRowState: ga,
  nested: Bf,
  rich: zf,
  sortType: qf
}, Symbol.toStringTag, { value: "Module" }));
class Dt extends xn {
}
R(Dt, "NAME", "dtable"), R(Dt, "Component", tr), R(Dt, "definePlugin", Rt), R(Dt, "removePlugin", la), R(Dt, "plugins", Gf);
var me, ne;
class Yf {
  constructor(t) {
    S(this, me, void 0);
    S(this, ne, void 0);
    T(this, me, t), T(this, ne, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(m(this, me).parentElement.parentElement, m(this, me).parentElement), this.addActive(m(this, ne).parentElement, m(this, ne)), m(this, ne).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    T(this, ne, m(this, me)), this.addActive(m(this, ne).parentElement, m(this, ne)), T(this, me, document.querySelector(`[href='#${m(this, ne).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${m(this, ne).getAttribute("id")}']`) || document.querySelector(`[data-target='#${m(this, ne).getAttribute("id")}']`)), this.addActive(m(this, me).parentElement.parentElement, m(this, me).parentElement);
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
me = new WeakMap(), ne = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Yf(e.target).showTarget());
});
export {
  Xr as ActionMenu,
  Zr as ActionMenuNested,
  oe as ContextMenu,
  Dt as DTable,
  ie as Dropdown,
  sr as EventBus,
  Qr as Menu,
  Yf as NavTabs,
  Ns as Pager,
  Ce as TIME_DAY,
  La as addI18nMap,
  Zf as browser,
  Ts as calculateTimestamp,
  Jf as convertBytes,
  re as createDate,
  Xf as formatBytes,
  er as formatDate,
  ru as formatDateSpan,
  ye as formatString,
  Oa as getLangCode,
  su as getTimeBeforeDesc,
  $n as i18n,
  ou as isDBY,
  Uo as isObject,
  Cn as isSameDay,
  hf as isSameMonth,
  Qf as isSameWeek,
  As as isSameYear,
  eu as isToday,
  nu as isTomorrow,
  tu as isYesterday,
  Vo as mergeDeep,
  zo as nativeEvents,
  Pa as setLangCode,
  tc as store
};
