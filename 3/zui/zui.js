var Uf = Object.defineProperty;
var zf = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (zf(e, typeof t != "symbol" ? t + "" : t, n), n), Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var y = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, T = (e, t, n, r) => (Fo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var te = (e, t, n) => (Fo(e, t, "access private method"), n);
var No, F, Da, Ha, Sn, ei, Fr = {}, Wa = [], Ff = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ja(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Lo(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? No.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Cr(e, a, r, i, null);
}
function Cr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Da : i };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function Vf() {
  return { current: null };
}
function Do(e) {
  return e.children;
}
function Ar(e, t) {
  this.props = e, this.context = t;
}
function Yn(e, t) {
  if (t == null)
    return e.__ ? Yn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Yn(e) : null;
}
function Ia(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ia(e);
  }
}
function ti(e) {
  (!e.__d && (e.__d = !0) && Sn.push(e) && !Vr.__r++ || ei !== F.debounceRendering) && ((ei = F.debounceRendering) || setTimeout)(Vr);
}
function Vr() {
  for (var e; Vr.__r = Sn.length; )
    e = Sn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Sn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = ft({}, o)).__v = o.__v + 1, us(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Yn(o) : a, o.__h), Fa(r, o), o.__e != a && Ia(o)));
    });
}
function Ba(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || Wa, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Cr(null, l, null, null, l) : Array.isArray(l) ? Cr(Do, { children: l }, null, null, null) : l.__b > 0 ? Cr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      us(e, l, _ = _ || Fr, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = Ua(l, f, e) : f = za(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Yn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && qa(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      Va(h[s], h[++s], h[++s]);
}
function Ua(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Ua(r, t, n) : za(n, r, r, i, r.__e, t));
  return t;
}
function za(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function qf(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || qr(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || qr(e, o, t[o], n[o], r);
}
function ni(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ff.test(t) ? n : n + "px";
}
function qr(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ni(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ni(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? oi : ri, o) : e.removeEventListener(t, o ? oi : ri, o);
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
function ri(e) {
  this.l[e.type + !1](F.event ? F.event(e) : e);
}
function oi(e) {
  this.l[e.type + !0](F.event ? F.event(e) : e);
}
function us(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = F.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Ar(h, g), s.constructor = b, s.render = Gf), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ft({}, s.__s)), ft(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = F.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = ft(ft({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Do && p.key == null ? p.props.children : p, Ba(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yf(n.__e, t, n, r, i, o, a, f);
    (p = F.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), F.__e(S, t, n);
  }
}
function Fa(e, t) {
  F.__c && F.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      F.__e(r, n.__v);
    }
  });
}
function Yf(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && No.call(e.childNodes), p = (d = n.props || Fr).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (qf(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ba(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Yn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && ja(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && qr(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && qr(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Va(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    F.__e(r, n);
  }
}
function qa(e, t, n) {
  var r, i;
  if (F.unmount && F.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Va(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        F.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && qa(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || ja(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Gf(e, t, n) {
  return this.constructor(e, n);
}
function Xf(e, t, n) {
  var r, i, o;
  F.__ && F.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], us(t, e = (!r && n || t).__k = Lo(Do, null, [e]), i || Fr, Fr, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? No.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Fa(o, e);
}
No = Wa.slice, F = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Da = 0, Ha = function(e) {
  return e != null && e.constructor === void 0;
}, Ar.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ft({}, this.state), typeof e == "function" && (e = e(ft({}, n), this.props)), e && ft(n, e), e != null && this.__v && (t && this._sb.push(t), ti(this));
}, Ar.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ti(this));
}, Ar.prototype.render = Do, Sn = [], Vr.__r = 0;
var qe;
class Kf {
  constructor(t = "") {
    O(this, qe, void 0);
    typeof t == "object" ? T(this, qe, t) : T(this, qe, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    y(this, qe).addEventListener(t, n, r);
  }
  once(t, n, r) {
    y(this, qe).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    y(this, qe).removeEventListener(t, n, r);
  }
  emit(t) {
    return y(this, qe).dispatchEvent(t), t;
  }
}
qe = new WeakMap();
const Xo = /* @__PURE__ */ new Set([
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
class ps extends Kf {
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
    return typeof t == "string" && (Xo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(ps.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Xo.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var Ye, cr, Mt, En;
class si extends ps {
  constructor(n = "", r) {
    super(n);
    O(this, Mt);
    O(this, Ye, /* @__PURE__ */ new Map());
    O(this, cr, void 0);
    T(this, cr, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, i) {
    n = te(this, Mt, En).call(this, n), super.on(n, r, i), y(this, Ye).set(r, [n, i]);
  }
  off(n, r, i) {
    n = te(this, Mt, En).call(this, n), super.off(n, r, i), y(this, Ye).delete(r);
  }
  once(n, r, i) {
    n = te(this, Mt, En).call(this, n);
    const o = (a) => {
      r(a), y(this, Ye).delete(o);
    };
    super.once(n, o, i), y(this, Ye).set(o, [n, i]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = te(this, Mt, En).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(y(this, Ye).entries()).forEach(([n, [r, i]]) => {
      super.off(r, n, i);
    }), y(this, Ye).clear();
  }
}
Ye = new WeakMap(), cr = new WeakMap(), Mt = new WeakSet(), En = function(n) {
  const r = y(this, cr);
  return Xo.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function Jf(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let r = e;
  const i = [r];
  for (; typeof r == "object" && r !== null && t.length; ) {
    let o = t.shift(), a;
    const c = o.indexOf("[");
    if (c > 0 && c < o.length - 1 && o.endsWith("]") && (a = o.substring(c + 1, o.length - 1), o = o.substring(0, c)), r = r[o], i.push(r), a !== void 0)
      if (typeof r == "object" && r !== null)
        r instanceof Map ? r = r.get(a) : r = r[a], i.push(r);
      else
        throw new Error(`Cannot access property "${o}[${a}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Zf(e, t, n) {
  const r = Jf(e, t), i = r[r.length - 1];
  return i === void 0 ? n : i;
}
function Vo(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ko(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Vo(e) && Vo(n))
    for (const r in n)
      Vo(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), Ko(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return Ko(e, ...t);
}
function ve(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const r = t[0];
    return Object.keys(r).forEach((i) => {
      var a;
      const o = (a = r[i]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), e;
  }
  for (let r = 0; r < t.length; r++) {
    const i = (n = t[r]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${r}\\}`, "g"), `${i}`);
  }
  return e;
}
var ds = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ds || {});
function Dh(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / ds[n]).toFixed(t) + n);
}
const Hh = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * ds[r];
};
var Na, La;
let hs = (La = (Na = document.documentElement.getAttribute("lang")) == null ? void 0 : Na.toLowerCase()) != null ? La : "zh_cn", ot;
function Qf() {
  return hs;
}
function e_(e) {
  hs = e.toLowerCase();
}
function t_(e, t) {
  ot || (ot = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), Ko(ot, e);
}
function br(e, t, n, r, i, o) {
  Array.isArray(e) ? ot && e.unshift(ot) : e = ot ? [ot, e] : [e], typeof n == "string" && (o = i, i = r, r = n, n = void 0);
  const a = i || hs;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const s = o && f === ot ? `${o}.${t}` : t;
    if (c = Zf(p, s), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? ve(c, ...Array.isArray(n) ? n : [n]) : c;
}
br.addLang = t_;
br.getCode = Qf;
br.setCode = e_;
function n_(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Ge, zt, pe;
class Ut {
  constructor(t, n) {
    O(this, Ge, void 0);
    O(this, zt, void 0);
    O(this, pe, void 0);
    var r;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && T(this, pe, new si(t, { customEventSuffix: `.${this.constructor.KEY}` })), T(this, Ge, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? n_(t.dataset) : null, ...n }), this.constructor.all.set(t, this), T(this, zt, t), this.init(), (r = y(this, pe)) == null || r.emit("inited", this);
  }
  get options() {
    return y(this, Ge);
  }
  get element() {
    return y(this, zt);
  }
  get events() {
    return y(this, pe);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(y(this, Ge), t), y(this, Ge);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(y(this, zt)), y(this, pe) && (y(this, pe).emit("destroyed", this), y(this, pe).offAll());
  }
  on(t, n, r) {
    var i;
    (i = y(this, pe)) == null || i.on(t, n, r);
  }
  once(t, n, r) {
    var i;
    (i = y(this, pe)) == null || i.once(t, n, r);
  }
  off(t, n, r) {
    var i;
    (i = y(this, pe)) == null || i.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = si.createEvent(t, n);
    const i = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = y(this, Ge)[i];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = y(this, pe)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var i;
    return (i = br(y(this, Ge).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
Ge = new WeakMap(), zt = new WeakMap(), pe = new WeakMap(), A(Ut, "EVENTS", !1), A(Ut, "DEFAULT", {}), A(Ut, "allComponents", /* @__PURE__ */ new Map());
class Pe extends Ut {
  constructor() {
    super(...arguments);
    A(this, "ref", Vf());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    Xf(/* @__PURE__ */ Lo(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var vs, q, Ya, Ga, Cn, ii, Xa = {}, Ka = [], r_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function _t(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ja(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ie(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? vs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Or(e, a, r, i, null);
}
function Or(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ya : i };
  return i == null && q.vnode != null && q.vnode(o), o;
}
function o_() {
  return { current: null };
}
function gs(e) {
  return e.children;
}
function An(e, t) {
  this.props = e, this.context = t;
}
function Gn(e, t) {
  if (t == null)
    return e.__ ? Gn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Gn(e) : null;
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
function ai(e) {
  (!e.__d && (e.__d = !0) && Cn.push(e) && !Yr.__r++ || ii !== q.debounceRendering) && ((ii = q.debounceRendering) || setTimeout)(Yr);
}
function Yr() {
  for (var e; Yr.__r = Cn.length; )
    e = Cn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Cn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = _t({}, o)).__v = o.__v + 1, nl(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Gn(o) : a, o.__h), i_(r, o), o.__e != a && Za(o)));
    });
}
function Qa(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || Ka, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Or(null, l, null, null, l) : Array.isArray(l) ? Or(gs, { children: l }, null, null, null) : l.__b > 0 ? Or(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      nl(e, l, _ = _ || Xa, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = el(l, f, e) : f = tl(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Gn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && ol(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      rl(h[s], h[++s], h[++s]);
}
function el(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? el(r, t, n) : tl(n, r, r, i, r.__e, t));
  return t;
}
function tl(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function s_(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Gr(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Gr(e, o, t[o], n[o], r);
}
function li(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || r_.test(t) ? n : n + "px";
}
function Gr(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || li(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || li(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? fi : ci, o) : e.removeEventListener(t, o ? fi : ci, o);
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
function fi(e) {
  this.l[e.type + !0](q.event ? q.event(e) : e);
}
function nl(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = q.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new An(h, g), s.constructor = b, s.render = l_), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = _t({}, s.__s)), _t(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = q.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = _t(_t({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === gs && p.key == null ? p.props.children : p, Qa(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = a_(n.__e, t, n, r, i, o, a, f);
    (p = q.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), q.__e(S, t, n);
  }
}
function i_(e, t) {
  q.__c && q.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      q.__e(r, n.__v);
    }
  });
}
function a_(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && vs.call(e.childNodes), p = (d = n.props || Xa).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (s_(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Qa(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Gn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && Ja(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && Gr(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && Gr(e, "checked", u, d.checked, !1));
  }
  return e;
}
function rl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    q.__e(r, n);
  }
}
function ol(e, t, n) {
  var r, i;
  if (q.unmount && q.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || rl(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        q.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && ol(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ja(e.__e), e.__ = e.__e = e.__d = void 0;
}
function l_(e, t, n) {
  return this.constructor(e, n);
}
vs = Ka.slice, q = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ya = 0, Ga = function(e) {
  return e != null && e.constructor === void 0;
}, An.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _t({}, this.state), typeof e == "function" && (e = e(_t({}, n), this.props)), e && _t(n, e), e != null && this.__v && (t && this._sb.push(t), ai(this));
}, An.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ai(this));
}, An.prototype.render = gs, Cn = [], Yr.__r = 0;
const N = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? N(...n) : typeof n == "function" ? N(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((r) => {
    const i = n[r];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function c_({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: i
}) {
  return ie(e, {
    className: N(t),
    style: r,
    ...i
  }, n);
}
function sl({
  component: e = "a",
  className: t,
  children: n,
  attrs: r,
  url: i,
  disabled: o,
  active: a,
  icon: c,
  text: f,
  target: p,
  trailingIcon: s,
  hint: d,
  style: _,
  onClick: l
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ ie("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ ie("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ ie("i", {
      class: `icon ${s}`
    }) : s
  ];
  return ie(e, {
    className: N(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: p,
    style: _,
    onClick: l,
    ...r
  }, ...u);
}
function f_({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: i,
  style: o,
  onClick: a
}) {
  return ie(e, {
    className: N(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof i == "function" ? i() : i);
}
function __({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: i,
  attrs: o,
  onClick: a,
  children: c
}) {
  return ie(e, {
    className: N(t),
    style: { width: r, height: r, flex: i, ...n },
    onClick: a,
    ...o
  }, c);
}
function u_(e) {
  const {
    tag: t,
    className: n,
    style: r,
    renders: i,
    generateArgs: o = [],
    generatorThis: a,
    generators: c,
    onGenerate: f,
    onRenderItem: p,
    ...s
  } = e, d = [n], _ = { ...r }, l = [], u = [];
  return i.forEach((m) => {
    var v;
    const h = [];
    typeof m == "string" && c && c[m] && (m = c[m]), typeof m == "function" ? f ? h.push(...f.call(a, m, l, ...o)) : h.push(...(v = m.call(a, l, ...o)) != null ? v : []) : h.push(m), h.forEach((g) => {
      var $;
      g != null && (typeof g == "object" && !Ha(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? l.push(
        /* @__PURE__ */ Lo("div", {
          className: N(g.className),
          style: g.style,
          dangerouslySetInnerHTML: { __html: g.html },
          ...($ = g.attrs) != null ? $ : {}
        })
      ) : g.__html ? u.push(g.__html) : (g.style && Object.assign(_, g.style), g.className && d.push(g.className), g.children && l.push(g.children), g.attrs && Object.assign(s, g.attrs)) : l.push(g));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: N(d),
    style: _,
    ...s
  }, l];
}
function Jo({
  tag: e = "div",
  ...t
}) {
  const [n, r] = u_(t);
  return Lo(e, n, ...r);
}
function p_(e) {
  return /* @__PURE__ */ ie(Jo, {
    ...e
  });
}
function il({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: i
}) {
  return ie(e, {
    className: N(t),
    style: r,
    ...i
  }, n);
}
const bo = class extends An {
  constructor() {
    super(...arguments);
    A(this, "ref", o_());
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
    var r, i;
    (i = (r = this.props).afterRender) == null || i.call(r, { menu: this, firstRender: n });
  }
  handleItemClick(n, r, i, o) {
    i && i.call(o.target, o);
    const { onClickItem: a } = this.props;
    a && a({ menu: this, item: n, index: r, event: o });
  }
  beforeRender() {
    var i;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const r = (i = n.beforeRender) == null ? void 0 : i.call(n, { menu: this, options: n });
    return r && Object.assign(n, r), n;
  }
  getItemRenderProps(n, r, i) {
    const { itemProps: o, onClickItem: a } = n, c = { key: i, ...r };
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, r.onClick)), c.className = N(c.className), c;
  }
  renderItem(n, r, i) {
    const o = this.getItemRenderProps(n, r, i), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const h = a[r.type || "item"];
        if (h)
          return /* @__PURE__ */ ie(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, ie);
        if (Ga(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = i, rootAttrs: s, rootClass: d, rootStyle: _, rootChildren: l, ...u } = o, m = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || bo.ItemComponents[c] : f;
    return Object.assign(u, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(m, {
      className: N(d),
      children: l,
      style: _,
      key: p,
      ...s
    }, {
      ...u,
      type: c,
      component: typeof f == "string" ? f : void 0
    });
  }
  renderTypedItem(n, r, i) {
    const { children: o, className: a, key: c, ...f } = r;
    return /* @__PURE__ */ ie("li", {
      className: N(`${this.name}-${i.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ ie(n, {
      ...i
    }), typeof o == "function" ? o() : o);
  }
  render() {
    const n = this.beforeRender(), {
      name: r,
      style: i,
      itemProps: o,
      className: a,
      items: c,
      children: f,
      itemRender: p,
      onClickItem: s,
      beforeRender: d,
      afterRender: _,
      beforeDestroy: l,
      ...u
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ie(m, {
      class: N(this.name, a),
      ...u,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let Ke = bo;
A(Ke, "ItemComponents", {
  divider: c_,
  item: sl,
  heading: f_,
  space: __,
  custom: p_,
  basic: il
}), A(Ke, "ROOT_TAG", "menu"), A(Ke, "NAME", "action-menu");
class _i extends Pe {
}
A(_i, "NAME", "actionmenu"), A(_i, "Component", Ke);
function ui({
  ...e
}) {
  return /* @__PURE__ */ ie(sl, {
    ...e
  });
}
var fr, Ne, Ft;
class ms extends Ke {
  constructor(n) {
    var r;
    super(n);
    O(this, fr, /* @__PURE__ */ new Set());
    O(this, Ne, void 0);
    O(this, Ft, (n, r, i) => {
      this.toggleNestedMenu(n, r), i.preventDefault();
    });
    T(this, Ne, n.nestedShow === void 0), y(this, Ne) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: r, nestedTrigger: i, defaultNestedShow: o, controlledMenu: a, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: r } = n;
    if (!r || (typeof r == "function" && (r = r(n, this)), !r.length))
      return;
    const i = this.constructor;
    return /* @__PURE__ */ ie(i, {
      items: r,
      name: this.props.name,
      nestedShow: y(this, Ne) ? this.state.nestedShow : this.props.nestedShow,
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
  getItemRenderProps(n, r, i) {
    var p;
    const o = super.getItemRenderProps(n, r, i);
    if (!this.isNestedItem(o))
      return o;
    const a = (p = o.key) != null ? p : i;
    y(this, fr).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = ui), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: y(this, Ft).bind(this, a, !0),
        onMouseLeave: y(this, Ft).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: s } = o;
      o.onClick = (d) => {
        y(this, Ft).call(this, a, void 0, d), s == null || s(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = y(this, Ne) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, r);
    if (!y(this, Ne))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...y(this, fr).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
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
    !y(this, Ne) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !y(this, Ne) || this.setState({ nestedShow: !1 });
  }
}
fr = new WeakMap(), Ne = new WeakMap(), Ft = new WeakMap(), A(ms, "ItemComponents", {
  item: ui
});
class pi extends Pe {
}
A(pi, "NAME", "actionmenunested"), A(pi, "Component", ms);
var ys, Y, al, On, di, ll = {}, cl = [], d_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Bt(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ys.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Mr(e, a, r, i, null);
}
function Mr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++al : i };
  return i == null && Y.vnode != null && Y.vnode(o), o;
}
function bs(e) {
  return e.children;
}
function Mn(e, t) {
  this.props = e, this.context = t;
}
function Xn(e, t) {
  if (t == null)
    return e.__ ? Xn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xn(e) : null;
}
function _l(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _l(e);
  }
}
function hi(e) {
  (!e.__d && (e.__d = !0) && On.push(e) && !Xr.__r++ || di !== Y.debounceRendering) && ((di = Y.debounceRendering) || setTimeout)(Xr);
}
function Xr() {
  for (var e; Xr.__r = On.length; )
    e = On.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), On = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = ut({}, o)).__v = o.__v + 1, hl(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xn(o) : a, o.__h), v_(r, o), o.__e != a && _l(o)));
    });
}
function ul(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || cl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Mr(null, l, null, null, l) : Array.isArray(l) ? Mr(bs, { children: l }, null, null, null) : l.__b > 0 ? Mr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      hl(e, l, _ = _ || ll, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = pl(l, f, e) : f = dl(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Xn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && gl(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      vl(h[s], h[++s], h[++s]);
}
function pl(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? pl(r, t, n) : dl(n, r, r, i, r.__e, t));
  return t;
}
function dl(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function h_(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Kr(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Kr(e, o, t[o], n[o], r);
}
function vi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || d_.test(t) ? n : n + "px";
}
function Kr(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || vi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || vi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? mi : gi, o) : e.removeEventListener(t, o ? mi : gi, o);
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
function gi(e) {
  this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function mi(e) {
  this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function hl(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = Y.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Mn(h, g), s.constructor = b, s.render = m_), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ut({}, s.__s)), ut(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = Y.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = ut(ut({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === bs && p.key == null ? p.props.children : p, ul(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = g_(n.__e, t, n, r, i, o, a, f);
    (p = Y.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), Y.__e(S, t, n);
  }
}
function v_(e, t) {
  Y.__c && Y.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Y.__e(r, n.__v);
    }
  });
}
function g_(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && ys.call(e.childNodes), p = (d = n.props || ll).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (h_(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ul(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Xn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && fl(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && Kr(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && Kr(e, "checked", u, d.checked, !1));
  }
  return e;
}
function vl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    Y.__e(r, n);
  }
}
function gl(e, t, n) {
  var r, i;
  if (Y.unmount && Y.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || vl(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        Y.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && gl(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || fl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function m_(e, t, n) {
  return this.constructor(e, n);
}
ys = cl.slice, Y = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, al = 0, Mn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ut({}, this.state), typeof e == "function" && (e = e(ut({}, n), this.props)), e && ut(n, e), e != null && this.__v && (t && this._sb.push(t), hi(this));
}, Mn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hi(this));
}, Mn.prototype.render = bs, On = [], Xr.__r = 0;
class $t extends Mn {
  render() {
    const {
      component: t,
      type: n,
      size: r,
      className: i,
      children: o,
      url: a,
      target: c,
      disabled: f,
      active: p,
      loading: s,
      loadingIcon: d,
      loadingText: _,
      icon: l,
      text: u,
      trailingIcon: m,
      caret: h,
      square: v,
      hint: g,
      ...$
    } = this.props, w = t || (a ? "a" : "button"), E = u == null || typeof u == "string" && !u.length || s && !_, k = E && !l && !m && !o && !s;
    return Bt(
      w,
      {
        className: N("btn", n, i, {
          "btn-caret": k,
          disabled: f || s,
          active: p,
          loading: s,
          square: v === void 0 ? !k && !o && E : v
        }, r ? `size-${r}` : ""),
        title: g,
        [w === "a" ? "href" : "data-url"]: a,
        [w === "a" ? "target" : "data-target"]: c,
        type: w === "button" ? "button" : void 0,
        ...$
      },
      s ? /* @__PURE__ */ Bt("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ Bt("i", {
        class: `icon ${l}`
      }) : l,
      E ? null : /* @__PURE__ */ Bt("span", {
        className: "text"
      }, s ? _ : u),
      s ? null : o,
      s ? null : typeof m == "string" ? /* @__PURE__ */ Bt("i", {
        class: `icon ${m}`
      }) : m,
      s ? null : h ? /* @__PURE__ */ Bt("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class yi extends Pe {
}
A(yi, "NAME", "button"), A(yi, "Component", $t);
var ml, Zo, yl, y_ = [];
function b_(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ml.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return w_(e, a, r, i, null);
}
function w_(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++yl : i };
  return i == null && Zo.vnode != null && Zo.vnode(o), o;
}
ml = y_.slice, Zo = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, yl = 0;
class ws extends ms {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = N(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ b_("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
A(ws, "NAME", "menu");
class bi extends Pe {
}
A(bi, "NAME", "menu"), A(bi, "Component", ws);
var $s, G, bl, Tn, wi, wl = {}, $l = [], $_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function kl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function xr(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $s.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Tr(e, a, r, i, null);
}
function Tr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++bl : i };
  return i == null && G.vnode != null && G.vnode(o), o;
}
function ks(e) {
  return e.children;
}
function Rn(e, t) {
  this.props = e, this.context = t;
}
function Kn(e, t) {
  if (t == null)
    return e.__ ? Kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Kn(e) : null;
}
function xl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xl(e);
  }
}
function $i(e) {
  (!e.__d && (e.__d = !0) && Tn.push(e) && !Jr.__r++ || wi !== G.debounceRendering) && ((wi = G.debounceRendering) || setTimeout)(Jr);
}
function Jr() {
  for (var e; Jr.__r = Tn.length; )
    e = Tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Tn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = pt({}, o)).__v = o.__v + 1, Al(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Kn(o) : a, o.__h), x_(r, o), o.__e != a && xl(o)));
    });
}
function El(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || $l, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Tr(null, l, null, null, l) : Array.isArray(l) ? Tr(ks, { children: l }, null, null, null) : l.__b > 0 ? Tr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      Al(e, l, _ = _ || wl, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = Sl(l, f, e) : f = Cl(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Kn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Ml(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      Ol(h[s], h[++s], h[++s]);
}
function Sl(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Sl(r, t, n) : Cl(n, r, r, i, r.__e, t));
  return t;
}
function Cl(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function k_(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Zr(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Zr(e, o, t[o], n[o], r);
}
function ki(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $_.test(t) ? n : n + "px";
}
function Zr(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ki(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ki(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ei : xi, o) : e.removeEventListener(t, o ? Ei : xi, o);
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
  this.l[e.type + !1](G.event ? G.event(e) : e);
}
function Ei(e) {
  this.l[e.type + !0](G.event ? G.event(e) : e);
}
function Al(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = G.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Rn(h, g), s.constructor = b, s.render = S_), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = pt({}, s.__s)), pt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = G.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = pt(pt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === ks && p.key == null ? p.props.children : p, El(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = E_(n.__e, t, n, r, i, o, a, f);
    (p = G.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), G.__e(S, t, n);
  }
}
function x_(e, t) {
  G.__c && G.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      G.__e(r, n.__v);
    }
  });
}
function E_(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && $s.call(e.childNodes), p = (d = n.props || wl).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (k_(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, El(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Kn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && kl(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && Zr(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && Zr(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Ol(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    G.__e(r, n);
  }
}
function Ml(e, t, n) {
  var r, i;
  if (G.unmount && G.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ol(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        G.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Ml(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function S_(e, t, n) {
  return this.constructor(e, n);
}
$s = $l.slice, G = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, bl = 0, Rn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pt({}, this.state), typeof e == "function" && (e = e(pt({}, n), this.props)), e && pt(n, e), e != null && this.__v && (t && this._sb.push(t), $i(this));
}, Rn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $i(this));
}, Rn.prototype.render = ks, Tn = [], Jr.__r = 0;
class Qo extends Rn {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: i, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ xr("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ xr("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: i,
      "stroke-width": r
    }), /* @__PURE__ */ xr("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ xr("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
A(Qo, "NAME", "zui.progress-circle"), A(Qo, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class Si extends Pe {
}
A(Si, "NAME", "table-sorter"), A(Si, "Component", Qo);
function C_(e) {
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
function A_(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function O_(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= i;
  const a = r.top <= i && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: C_,
  domReady: A_,
  isElementVisible: O_,
  classes: N
}, Symbol.toStringTag, { value: "Module" }));
let M_ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var _r, st, Le, Vt, qt, Rr;
const Zs = class {
  constructor(t, n = "local") {
    O(this, qt);
    O(this, _r, void 0);
    O(this, st, void 0);
    O(this, Le, void 0);
    O(this, Vt, void 0);
    T(this, _r, n), T(this, st, `ZUI_STORE:${t != null ? t : M_()}`), T(this, Le, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return y(this, _r);
  }
  get session() {
    return this.type === "session" ? this : (y(this, Vt) || T(this, Vt, new Zs(y(this, st), "session")), y(this, Vt));
  }
  get(t, n) {
    const r = y(this, Le).getItem(te(this, qt, Rr).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    y(this, Le).setItem(te(this, qt, Rr).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    y(this, Le).removeItem(te(this, qt, Rr).call(this, t));
  }
  each(t) {
    for (let n = 0; n < y(this, Le).length; n++) {
      const r = y(this, Le).key(n);
      if (r != null && r.startsWith(y(this, st))) {
        const i = y(this, Le).getItem(r);
        typeof i == "string" && t(r.substring(y(this, st).length + 1), JSON.parse(i));
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
let Qr = Zs;
_r = new WeakMap(), st = new WeakMap(), Le = new WeakMap(), Vt = new WeakMap(), qt = new WeakSet(), Rr = function(t) {
  return `${y(this, st)}:${t}`;
};
const T_ = new Qr("DEFAULT");
function R_(e, t = "local") {
  return new Qr(e, t);
}
Object.assign(T_, { create: R_ });
var xs, X, Tl, Pn, Ci, Rl = {}, Pl = [], P_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function dt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Nl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function qo(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Pr(e, a, r, i, null);
}
function Pr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Tl : i };
  return i == null && X.vnode != null && X.vnode(o), o;
}
function Es(e) {
  return e.children;
}
function Nn(e, t) {
  this.props = e, this.context = t;
}
function Jn(e, t) {
  if (t == null)
    return e.__ ? Jn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Jn(e) : null;
}
function Ll(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ll(e);
  }
}
function Ai(e) {
  (!e.__d && (e.__d = !0) && Pn.push(e) && !eo.__r++ || Ci !== X.debounceRendering) && ((Ci = X.debounceRendering) || setTimeout)(eo);
}
function eo() {
  for (var e; eo.__r = Pn.length; )
    e = Pn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Pn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = dt({}, o)).__v = o.__v + 1, jl(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Jn(o) : a, o.__h), L_(r, o), o.__e != a && Ll(o)));
    });
}
function Dl(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || Pl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Pr(null, l, null, null, l) : Array.isArray(l) ? Pr(Es, { children: l }, null, null, null) : l.__b > 0 ? Pr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      jl(e, l, _ = _ || Rl, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = Hl(l, f, e) : f = Wl(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Jn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Bl(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      Il(h[s], h[++s], h[++s]);
}
function Hl(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Hl(r, t, n) : Wl(n, r, r, i, r.__e, t));
  return t;
}
function Wl(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function N_(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || to(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || to(e, o, t[o], n[o], r);
}
function Oi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || P_.test(t) ? n : n + "px";
}
function to(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Oi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Oi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ti : Mi, o) : e.removeEventListener(t, o ? Ti : Mi, o);
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
function Mi(e) {
  this.l[e.type + !1](X.event ? X.event(e) : e);
}
function Ti(e) {
  this.l[e.type + !0](X.event ? X.event(e) : e);
}
function jl(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = X.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Nn(h, g), s.constructor = b, s.render = H_), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = dt({}, s.__s)), dt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = X.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = dt(dt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Es && p.key == null ? p.props.children : p, Dl(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = D_(n.__e, t, n, r, i, o, a, f);
    (p = X.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), X.__e(S, t, n);
  }
}
function L_(e, t) {
  X.__c && X.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      X.__e(r, n.__v);
    }
  });
}
function D_(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && xs.call(e.childNodes), p = (d = n.props || Rl).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (N_(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Dl(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Jn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && Nl(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && to(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && to(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Il(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    X.__e(r, n);
  }
}
function Bl(e, t, n) {
  var r, i;
  if (X.unmount && X.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Il(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        X.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Bl(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || Nl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function H_(e, t, n) {
  return this.constructor(e, n);
}
xs = Pl.slice, X = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Tl = 0, Nn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = dt({}, this.state), typeof e == "function" && (e = e(dt({}, n), this.props)), e && dt(n, e), e != null && this.__v && (t && this._sb.push(t), Ai(this));
}, Nn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ai(this));
}, Nn.prototype.render = Es, Pn = [], eo.__r = 0;
function W_(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function j_(e) {
  const [t, n, r] = typeof e == "string" ? W_(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function Ri(e, t) {
  var n, r;
  return j_(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function Pi(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function I_(e, t, n) {
  e = e % 360 / 360, t = Pi(t), n = Pi(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? i + (r - i) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? i + (r - i) * (2 / 3 - a) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function B_(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function U_(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class z_ extends Nn {
  render() {
    const {
      className: t,
      style: n,
      size: r = "",
      circle: i,
      rounded: o,
      background: a,
      foreColor: c,
      text: f,
      code: p,
      maxTextLength: s = 2,
      src: d,
      hueDistance: _ = 43,
      saturation: l = 0.4,
      lightness: u = 0.6,
      children: m,
      ...h
    } = this.props, v = ["avatar", t], g = { ...n, background: a, color: c };
    let $ = 32;
    r && (typeof r == "number" ? (g.width = `${r}px`, g.height = `${r}px`, g.fontSize = `${Math.max(12, Math.round(r / 2))}px`, $ = r) : (v.push(`size-${r}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), i ? v.push("circle") : o && (typeof o == "number" ? g.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let w;
    if (d)
      v.push("has-img"), w = /* @__PURE__ */ qo("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const E = U_(f, s);
      if (v.push("has-text", `has-text-${E.length}`), a)
        !c && a && (g.color = Ri(a));
      else {
        const x = p != null ? p : f, b = (typeof x == "number" ? x : B_(x)) * _ % 360;
        if (g.background = `hsl(${b},${l * 100}%,${u * 100}%)`, !c) {
          const S = I_(b, l, u);
          g.color = Ri(S);
        }
      }
      let k;
      $ && $ < 14 * E.length && (k = { transform: `scale(${$ / (14 * E.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ qo("div", {
        "data-actualSize": $,
        className: "avatar-text",
        style: k
      }, E);
    }
    return /* @__PURE__ */ qo("div", {
      className: N(v),
      style: g,
      ...h
    }, w, m);
  }
}
class Ni extends Pe {
}
A(Ni, "NAME", "avatar"), A(Ni, "Component", z_);
var Ss, K, Ul, zl, Ln, Li, Fl = {}, Vl = [], F_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ql(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yo(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ss.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Nr(e, a, r, i, null);
}
function Nr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ul : i };
  return i == null && K.vnode != null && K.vnode(o), o;
}
function Cs(e) {
  return e.children;
}
function Dn(e, t) {
  this.props = e, this.context = t;
}
function Zn(e, t) {
  if (t == null)
    return e.__ ? Zn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Zn(e) : null;
}
function Yl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yl(e);
  }
}
function Di(e) {
  (!e.__d && (e.__d = !0) && Ln.push(e) && !no.__r++ || Li !== K.debounceRendering) && ((Li = K.debounceRendering) || setTimeout)(no);
}
function no() {
  for (var e; no.__r = Ln.length; )
    e = Ln.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ln = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = ht({}, o)).__v = o.__v + 1, Jl(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Zn(o) : a, o.__h), q_(r, o), o.__e != a && Yl(o)));
    });
}
function Gl(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || Vl, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Nr(null, l, null, null, l) : Array.isArray(l) ? Nr(Cs, { children: l }, null, null, null) : l.__b > 0 ? Nr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      Jl(e, l, _ = _ || Fl, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = Xl(l, f, e) : f = Kl(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Zn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Ql(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      Zl(h[s], h[++s], h[++s]);
}
function Xl(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Xl(r, t, n) : Kl(n, r, r, i, r.__e, t));
  return t;
}
function Kl(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function V_(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ro(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ro(e, o, t[o], n[o], r);
}
function Hi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || F_.test(t) ? n : n + "px";
}
function ro(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Hi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Hi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ji : Wi, o) : e.removeEventListener(t, o ? ji : Wi, o);
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
function Wi(e) {
  this.l[e.type + !1](K.event ? K.event(e) : e);
}
function ji(e) {
  this.l[e.type + !0](K.event ? K.event(e) : e);
}
function Jl(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = K.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Dn(h, g), s.constructor = b, s.render = G_), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ht({}, s.__s)), ht(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = K.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = ht(ht({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Cs && p.key == null ? p.props.children : p, Gl(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Y_(n.__e, t, n, r, i, o, a, f);
    (p = K.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), K.__e(S, t, n);
  }
}
function q_(e, t) {
  K.__c && K.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      K.__e(r, n.__v);
    }
  });
}
function Y_(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && Ss.call(e.childNodes), p = (d = n.props || Fl).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (V_(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Gl(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Zn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && ql(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && ro(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && ro(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Zl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    K.__e(r, n);
  }
}
function Ql(e, t, n) {
  var r, i;
  if (K.unmount && K.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Zl(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        K.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Ql(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || ql(e.__e), e.__ = e.__e = e.__d = void 0;
}
function G_(e, t, n) {
  return this.constructor(e, n);
}
Ss = Vl.slice, K = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ul = 0, zl = function(e) {
  return e != null && e.constructor === void 0;
}, Dn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ht({}, this.state), typeof e == "function" && (e = e(ht({}, n), this.props)), e && ht(n, e), e != null && this.__v && (t && this._sb.push(t), Di(this));
}, Dn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Di(this));
}, Dn.prototype.render = Cs, Ln = [], no.__r = 0;
class ec extends Dn {
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
  handleItemClick(t, n, r, i) {
    r && r.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var r;
    const t = { ...this.props }, n = (r = t.beforeRender) == null ? void 0 : r.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: r = n, ...i } = t;
    return /* @__PURE__ */ Yo($t, {
      key: r,
      ...i
    });
  }
  renderItem(t, n, r) {
    const { itemRender: i, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), i) {
      const f = i.call(this, c, Yo);
      if (zl(f))
        return f;
      typeof f == "object" && Object.assign(c, f);
    }
    return this.onRenderItem(c, r);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: r,
      size: i,
      type: o,
      defaultBtnProps: a,
      children: c,
      itemRender: f,
      onClickItem: p,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: _,
      ...l
    } = t;
    return /* @__PURE__ */ Yo("div", {
      className: N("btn-group", i ? `size-${i}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
class Ii extends Pe {
}
A(Ii, "NAME", "btngroup"), A(Ii, "Component", ec);
function X_() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function K_() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function J_(e, t) {
  X_(), e.classList.add("block"), Bi(e, t), e.onclick = (n) => Z_(n, e), window.addEventListener("resize", () => {
    Bi(e, t);
  });
}
function tc(e) {
  var t;
  K_(), (t = e.classList) == null || t.remove("block");
}
function Bi(e, t) {
  const n = e.querySelector(".modal-dialog");
  if (!n)
    return;
  const r = Math.max(0, (window.innerHeight - n.clientHeight) / 2);
  if (t === "fit") {
    n.style.top = `${r > 50 ? Math.floor(r * 2 / 3) : r}px`;
    return;
  }
  if (t === "center") {
    n.style.top = `${r}px`;
    return;
  }
  n.style.top = t;
}
function Z_(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), tc(t));
}
function Q_(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const r = Q_(n);
    if (!r)
      return;
    const i = document.querySelector(r);
    if (!i)
      return;
    J_(i, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && tc(t);
});
class nc extends Ke {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = N(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
A(nc, "NAME", "nav");
class Ui extends Pe {
}
A(Ui, "NAME", "nav"), A(Ui, "Component", nc);
var rc, es, oc, eu = [];
function bt(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? rc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return tu(e, a, r, i, null);
}
function tu(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++oc : i };
  return i == null && es.vnode != null && es.vnode(o), o;
}
rc = eu.slice, es = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, oc = 0;
var sc, ts, ic, nu = [];
function Ho(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? sc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ru(e, a, r, i, null);
}
function ru(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ic : i };
  return i == null && ts.vnode != null && ts.vnode(o), o;
}
sc = nu.slice, ts = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ic = 0;
function ou({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ho($t, {
    type: n,
    ...r
  });
}
var As, J, ac, Hn, zi, lc = {}, cc = [], su = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _c(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? As.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Lr(e, a, r, i, null);
}
function Lr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ac : i };
  return i == null && J.vnode != null && J.vnode(o), o;
}
function iu() {
  return { current: null };
}
function Os(e) {
  return e.children;
}
function Wn(e, t) {
  this.props = e, this.context = t;
}
function Qn(e, t) {
  if (t == null)
    return e.__ ? Qn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Qn(e) : null;
}
function uc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return uc(e);
  }
}
function Fi(e) {
  (!e.__d && (e.__d = !0) && Hn.push(e) && !oo.__r++ || zi !== J.debounceRendering) && ((zi = J.debounceRendering) || setTimeout)(oo);
}
function oo() {
  for (var e; oo.__r = Hn.length; )
    e = Hn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Hn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = vt({}, o)).__v = o.__v + 1, vc(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Qn(o) : a, o.__h), lu(r, o), o.__e != a && uc(o)));
    });
}
function pc(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || cc, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Lr(null, l, null, null, l) : Array.isArray(l) ? Lr(Os, { children: l }, null, null, null) : l.__b > 0 ? Lr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      vc(e, l, _ = _ || lc, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = dc(l, f, e) : f = hc(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = Qn(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && mc(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      gc(h[s], h[++s], h[++s]);
}
function dc(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? dc(r, t, n) : hc(n, r, r, i, r.__e, t));
  return t;
}
function hc(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function au(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || so(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || so(e, o, t[o], n[o], r);
}
function Vi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || su.test(t) ? n : n + "px";
}
function so(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Vi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Vi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yi : qi, o) : e.removeEventListener(t, o ? Yi : qi, o);
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
function qi(e) {
  this.l[e.type + !1](J.event ? J.event(e) : e);
}
function Yi(e) {
  this.l[e.type + !0](J.event ? J.event(e) : e);
}
function vc(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = J.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Wn(h, g), s.constructor = b, s.render = fu), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = vt({}, s.__s)), vt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = J.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = vt(vt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Os && p.key == null ? p.props.children : p, pc(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cu(n.__e, t, n, r, i, o, a, f);
    (p = J.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), J.__e(S, t, n);
  }
}
function lu(e, t) {
  J.__c && J.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      J.__e(r, n.__v);
    }
  });
}
function cu(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && As.call(e.childNodes), p = (d = n.props || lc).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (au(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, pc(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && Qn(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && fc(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && so(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && so(e, "checked", u, d.checked, !1));
  }
  return e;
}
function gc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    J.__e(r, n);
  }
}
function mc(e, t, n) {
  var r, i;
  if (J.unmount && J.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || gc(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        J.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && mc(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || fc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fu(e, t, n) {
  return this.constructor(e, n);
}
As = cc.slice, J = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ac = 0, Wn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = vt({}, this.state), typeof e == "function" && (e = e(vt({}, n), this.props)), e && vt(n, e), e != null && this.__v && (t && this._sb.push(t), Fi(this));
}, Wn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fi(this));
}, Wn.prototype.render = Os, Hn = [], oo.__r = 0;
var Ms = "top", yc = "bottom", io = "right", er = "left", _u = "auto", bc = [Ms, yc, io, er], uu = "start", pu = "end", du = /* @__PURE__ */ [].concat(bc, [_u]).reduce(function(e, t) {
  return e.concat([t, t + "-" + uu, t + "-" + pu]);
}, []);
function wc(e) {
  return e.split("-")[0];
}
function hn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $c(e) {
  var t = hn(e).Element;
  return e instanceof t || e instanceof Element;
}
function ao(e) {
  var t = hn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ts(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = hn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var hu = Math.max, vu = Math.min, Gi = Math.round;
function ns() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function gu() {
  return !/^((?!chrome|android).)*safari/i.test(ns());
}
function mu(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, o = 1;
  t && ao(e) && (i = e.offsetWidth > 0 && Gi(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Gi(r.height) / e.offsetHeight || 1);
  var a = $c(e) ? hn(e) : window, c = a.visualViewport, f = !gu() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / i, s = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / i, _ = r.height / o;
  return {
    width: d,
    height: _,
    top: s,
    right: p + d,
    bottom: s + _,
    left: p,
    x: p,
    y: s
  };
}
function yu(e) {
  var t = mu(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function bu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ts(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nr(e) {
  return hn(e).getComputedStyle(e);
}
function wu(e) {
  return ["table", "td", "th"].indexOf(tr(e)) >= 0;
}
function $u(e) {
  return (($c(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ku(e) {
  return tr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ts(e) ? e.host : null) || $u(e);
}
function Xi(e) {
  return !ao(e) || nr(e).position === "fixed" ? null : e.offsetParent;
}
function xu(e) {
  var t = /firefox/i.test(ns()), n = /Trident/i.test(ns());
  if (n && ao(e)) {
    var r = nr(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ku(e);
  for (Ts(i) && (i = i.host); ao(i) && ["html", "body"].indexOf(tr(i)) < 0; ) {
    var o = nr(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Eu(e) {
  for (var t = hn(e), n = Xi(e); n && wu(n) && nr(n).position === "static"; )
    n = Xi(n);
  return n && (tr(n) === "html" || tr(n) === "body" && nr(n).position === "static") ? t : n || xu(e) || t;
}
function Su(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cu(e, t, n) {
  return hu(e, vu(t, n));
}
function Au() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ou(e) {
  return Object.assign({}, Au(), e);
}
function Mu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Tu = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ou(typeof t != "number" ? t : Mu(t, bc));
};
function Ru(e) {
  var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = wc(n.placement), f = Su(c), p = [er, io].indexOf(c) >= 0, s = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Tu(i.padding, n), _ = yu(o), l = f === "y" ? Ms : er, u = f === "y" ? yc : io, m = n.rects.reference[s] + n.rects.reference[f] - a[f] - n.rects.popper[s], h = a[f] - n.rects.reference[f], v = Eu(o), g = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, $ = m / 2 - h / 2, w = d[l], E = g - _[s] - d[u], k = g / 2 - _[s] / 2 + $, x = Cu(w, k, E), b = f;
    n.modifiersData[r] = (t = {}, t[b] = x, t.centerOffset = x - k, t);
  }
}
function Pu(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !bu(t.elements.popper, i) || (t.elements.arrow = i));
}
const Nu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ru,
  effect: Pu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Lu(e, t, n) {
  var r = wc(e), i = [er, Ms].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * i, [er, io].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Du(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, o = i === void 0 ? [0, 0] : i, a = du.reduce(function(s, d) {
    return s[d] = Lu(d, t.rects, o), s;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Hu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Du
};
var Wo, V, kc, jn, Ki, lo = {}, xc = [], Wu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ec(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Rs(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Wo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Dr(e, a, r, i, null);
}
function Dr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++kc : i };
  return i == null && V.vnode != null && V.vnode(o), o;
}
function jo(e) {
  return e.children;
}
function Hr(e, t) {
  this.props = e, this.context = t;
}
function rr(e, t) {
  if (t == null)
    return e.__ ? rr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? rr(e) : null;
}
function Sc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sc(e);
  }
}
function Ji(e) {
  (!e.__d && (e.__d = !0) && jn.push(e) && !co.__r++ || Ki !== V.debounceRendering) && ((Ki = V.debounceRendering) || setTimeout)(co);
}
function co() {
  for (var e; co.__r = jn.length; )
    e = jn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = gt({}, o)).__v = o.__v + 1, Ps(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? rr(o) : a, o.__h), Mc(r, o), o.__e != a && Sc(o)));
    });
}
function Cc(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || xc, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Dr(null, l, null, null, l) : Array.isArray(l) ? Dr(jo, { children: l }, null, null, null) : l.__b > 0 ? Dr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      Ps(e, l, _ = _ || lo, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = Ac(l, f, e) : f = Oc(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = rr(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && Rc(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      Tc(h[s], h[++s], h[++s]);
}
function Ac(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Ac(r, t, n) : Oc(n, r, r, i, r.__e, t));
  return t;
}
function Oc(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function ju(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || fo(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || fo(e, o, t[o], n[o], r);
}
function Zi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wu.test(t) ? n : n + "px";
}
function fo(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Zi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Zi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ea : Qi, o) : e.removeEventListener(t, o ? ea : Qi, o);
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
function Qi(e) {
  this.l[e.type + !1](V.event ? V.event(e) : e);
}
function ea(e) {
  this.l[e.type + !0](V.event ? V.event(e) : e);
}
function Ps(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = V.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Hr(h, g), s.constructor = b, s.render = Bu), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = gt({}, s.__s)), gt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = V.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = gt(gt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === jo && p.key == null ? p.props.children : p, Cc(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Iu(n.__e, t, n, r, i, o, a, f);
    (p = V.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), V.__e(S, t, n);
  }
}
function Mc(e, t) {
  V.__c && V.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      V.__e(r, n.__v);
    }
  });
}
function Iu(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && Wo.call(e.childNodes), p = (d = n.props || lo).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ju(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Cc(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && rr(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && Ec(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && fo(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && fo(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Tc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    V.__e(r, n);
  }
}
function Rc(e, t, n) {
  var r, i;
  if (V.unmount && V.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Tc(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        V.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Rc(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ec(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bu(e, t, n) {
  return this.constructor(e, n);
}
function Uu(e, t, n) {
  var r, i, o;
  V.__ && V.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ps(t, e = (!r && n || t).__k = Rs(jo, null, [e]), i || lo, lo, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Wo.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Mc(o, e);
}
Wo = xc.slice, V = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kc = 0, Hr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gt({}, this.state), typeof e == "function" && (e = e(gt({}, n), this.props)), e && gt(n, e), e != null && this.__v && (t && this._sb.push(t), Ji(this));
}, Hr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ji(this));
}, Hr.prototype.render = jo, jn = [], co.__r = 0;
function Ee(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ht(e) {
  var t = Ee(e).Element;
  return e instanceof t || e instanceof Element;
}
function ke(e) {
  var t = Ee(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ns(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ee(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Lt = Math.max, _o = Math.min, an = Math.round;
function rs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pc() {
  return !/^((?!chrome|android).)*safari/i.test(rs());
}
function ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, o = 1;
  t && ke(e) && (i = e.offsetWidth > 0 && an(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && an(r.height) / e.offsetHeight || 1);
  var a = Ht(e) ? Ee(e) : window, c = a.visualViewport, f = !Pc() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / i, s = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / i, _ = r.height / o;
  return {
    width: d,
    height: _,
    top: s,
    right: p + d,
    bottom: s + _,
    left: p,
    x: p,
    y: s
  };
}
function Ls(e) {
  var t = Ee(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function zu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fu(e) {
  return e === Ee(e) || !ke(e) ? Ls(e) : zu(e);
}
function Be(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xt(e) {
  return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ds(e) {
  return ln(xt(e)).left + Ls(e).scrollLeft;
}
function Ze(e) {
  return Ee(e).getComputedStyle(e);
}
function Hs(e) {
  var t = Ze(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Vu(e) {
  var t = e.getBoundingClientRect(), n = an(t.width) / e.offsetWidth || 1, r = an(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function qu(e, t, n) {
  n === void 0 && (n = !1);
  var r = ke(t), i = ke(t) && Vu(t), o = xt(t), a = ln(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Be(t) !== "body" || Hs(o)) && (c = Fu(t)), ke(t) ? (f = ln(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Ds(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Nc(e) {
  var t = ln(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Io(e) {
  return Be(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ns(e) ? e.host : null) || xt(e);
}
function Lc(e) {
  return ["html", "body", "#document"].indexOf(Be(e)) >= 0 ? e.ownerDocument.body : ke(e) && Hs(e) ? e : Lc(Io(e));
}
function In(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Lc(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Ee(r), a = i ? [o].concat(o.visualViewport || [], Hs(r) ? r : []) : r, c = t.concat(a);
  return i ? c : c.concat(In(Io(a)));
}
function Yu(e) {
  return ["table", "td", "th"].indexOf(Be(e)) >= 0;
}
function ta(e) {
  return !ke(e) || Ze(e).position === "fixed" ? null : e.offsetParent;
}
function Gu(e) {
  var t = /firefox/i.test(rs()), n = /Trident/i.test(rs());
  if (n && ke(e)) {
    var r = Ze(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Io(e);
  for (Ns(i) && (i = i.host); ke(i) && ["html", "body"].indexOf(Be(i)) < 0; ) {
    var o = Ze(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Bo(e) {
  for (var t = Ee(e), n = ta(e); n && Yu(n) && Ze(n).position === "static"; )
    n = ta(n);
  return n && (Be(n) === "html" || Be(n) === "body" && Ze(n).position === "static") ? t : n || Gu(e) || t;
}
var Me = "top", Ue = "bottom", kt = "right", Je = "left", Ws = "auto", Uo = [Me, Ue, kt, Je], cn = "start", or = "end", Xu = "clippingParents", Dc = "viewport", $n = "popper", Ku = "reference", na = /* @__PURE__ */ Uo.reduce(function(e, t) {
  return e.concat([t + "-" + cn, t + "-" + or]);
}, []), Ju = /* @__PURE__ */ [].concat(Uo, [Ws]).reduce(function(e, t) {
  return e.concat([t, t + "-" + cn, t + "-" + or]);
}, []), Zu = "beforeRead", Qu = "read", ep = "afterRead", tp = "beforeMain", np = "main", rp = "afterMain", op = "beforeWrite", sp = "write", ip = "afterWrite", ap = [Zu, Qu, ep, tp, np, rp, op, sp, ip];
function lp(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && i(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function cp(e) {
  var t = lp(e);
  return ap.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function fp(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function wt(e) {
  return e.split("-")[0];
}
function _p(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function up(e, t) {
  var n = Ee(e), r = xt(e), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var p = Pc();
    (p || !p && t === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Ds(e),
    y: f
  };
}
function pp(e) {
  var t, n = xt(e), r = Ls(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Lt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Lt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + Ds(e), f = -r.scrollTop;
  return Ze(i || n).direction === "rtl" && (c += Lt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function dp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ns(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function os(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hp(e, t) {
  var n = ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ra(e, t, n) {
  return t === Dc ? os(up(e, n)) : Ht(t) ? hp(t, n) : os(pp(xt(e)));
}
function vp(e) {
  var t = In(Io(e)), n = ["absolute", "fixed"].indexOf(Ze(e).position) >= 0, r = n && ke(e) ? Bo(e) : e;
  return Ht(r) ? t.filter(function(i) {
    return Ht(i) && dp(i, r) && Be(i) !== "body";
  }) : [];
}
function gp(e, t, n, r) {
  var i = t === "clippingParents" ? vp(e) : [].concat(t), o = [].concat(i, [n]), a = o[0], c = o.reduce(function(f, p) {
    var s = ra(e, p, r);
    return f.top = Lt(s.top, f.top), f.right = _o(s.right, f.right), f.bottom = _o(s.bottom, f.bottom), f.left = Lt(s.left, f.left), f;
  }, ra(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function fn(e) {
  return e.split("-")[1];
}
function Hc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? wt(r) : null, o = r ? fn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (i) {
    case Me:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ue:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case kt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Je:
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
  var p = i ? Hc(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (o) {
      case cn:
        f[p] = f[p] - (t[s] / 2 - n[s] / 2);
        break;
      case or:
        f[p] = f[p] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function jc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mp(e) {
  return Object.assign({}, jc(), e);
}
function yp(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function js(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Xu : c, p = n.rootBoundary, s = p === void 0 ? Dc : p, d = n.elementContext, _ = d === void 0 ? $n : d, l = n.altBoundary, u = l === void 0 ? !1 : l, m = n.padding, h = m === void 0 ? 0 : m, v = mp(typeof h != "number" ? h : yp(h, Uo)), g = _ === $n ? Ku : $n, $ = e.rects.popper, w = e.elements[u ? g : _], E = gp(Ht(w) ? w : w.contextElement || xt(e.elements.popper), f, s, a), k = ln(e.elements.reference), x = Wc({
    reference: k,
    element: $,
    strategy: "absolute",
    placement: i
  }), b = os(Object.assign({}, $, x)), S = _ === $n ? b : k, C = {
    top: E.top - S.top + v.top,
    bottom: S.bottom - E.bottom + v.bottom,
    left: E.left - S.left + v.left,
    right: S.right - E.right + v.right
  }, P = e.modifiersData.offset;
  if (_ === $n && P) {
    var W = P[i];
    Object.keys(C).forEach(function(L) {
      var ee = [kt, Ue].indexOf(L) >= 0 ? 1 : -1, B = [Me, Ue].indexOf(L) >= 0 ? "y" : "x";
      C[L] += W[B] * ee;
    });
  }
  return C;
}
var oa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function bp(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, o = i === void 0 ? oa : i;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oa, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], _ = !1, l = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        m(), s.options = Object.assign({}, o, s.options, g), s.scrollParents = {
          reference: Ht(c) ? In(c) : c.contextElement ? In(c.contextElement) : [],
          popper: In(f)
        };
        var $ = cp(_p([].concat(r, s.options.modifiers)));
        return s.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), u(), l.update();
      },
      forceUpdate: function() {
        if (!_) {
          var v = s.elements, g = v.reference, $ = v.popper;
          if (!!sa(g, $)) {
            s.rects = {
              reference: qu(g, Bo($), s.options.strategy === "fixed"),
              popper: Nc($)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(C) {
              return s.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var E = s.orderedModifiers[w], k = E.fn, x = E.options, b = x === void 0 ? {} : x, S = E.name;
              typeof k == "function" && (s = k({
                state: s,
                options: b,
                name: S,
                instance: l
              }) || s);
            }
          }
        }
      },
      update: fp(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(s);
        });
      }),
      destroy: function() {
        m(), _ = !0;
      }
    };
    if (!sa(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !_ && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function u() {
      s.orderedModifiers.forEach(function(h) {
        var v = h.name, g = h.options, $ = g === void 0 ? {} : g, w = h.effect;
        if (typeof w == "function") {
          var E = w({
            state: s,
            name: v,
            instance: l,
            options: $
          }), k = function() {
          };
          d.push(E || k);
        }
      });
    }
    function m() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var Er = {
  passive: !0
};
function wp(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, f = Ee(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(s) {
    s.addEventListener("scroll", n.update, Er);
  }), c && f.addEventListener("resize", n.update, Er), function() {
    o && p.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Er);
    }), c && f.removeEventListener("resize", n.update, Er);
  };
}
const $p = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: wp,
  data: {}
};
function kp(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Wc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const xp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kp,
  data: {}
};
var Ep = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Sp(e) {
  var t = e.x, n = e.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: an(t * i) / i || 0,
    y: an(n * i) / i || 0
  };
}
function ia(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, s = e.roundOffsets, d = e.isFixed, _ = a.x, l = _ === void 0 ? 0 : _, u = a.y, m = u === void 0 ? 0 : u, h = typeof s == "function" ? s({
    x: l,
    y: m
  }) : {
    x: l,
    y: m
  };
  l = h.x, m = h.y;
  var v = a.hasOwnProperty("x"), g = a.hasOwnProperty("y"), $ = Je, w = Me, E = window;
  if (p) {
    var k = Bo(n), x = "clientHeight", b = "clientWidth";
    if (k === Ee(n) && (k = xt(n), Ze(k).position !== "static" && c === "absolute" && (x = "scrollHeight", b = "scrollWidth")), k = k, i === Me || (i === Je || i === kt) && o === or) {
      w = Ue;
      var S = d && k === E && E.visualViewport ? E.visualViewport.height : k[x];
      m -= S - r.height, m *= f ? 1 : -1;
    }
    if (i === Je || (i === Me || i === Ue) && o === or) {
      $ = kt;
      var C = d && k === E && E.visualViewport ? E.visualViewport.width : k[b];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: c
  }, p && Ep), W = s === !0 ? Sp({
    x: l,
    y: m
  }) : {
    x: l,
    y: m
  };
  if (l = W.x, m = W.y, f) {
    var L;
    return Object.assign({}, P, (L = {}, L[w] = g ? "0" : "", L[$] = v ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + m + "px)" : "translate3d(" + l + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, P, (t = {}, t[w] = g ? m + "px" : "", t[$] = v ? l + "px" : "", t.transform = "", t));
}
function Cp(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: wt(t.placement),
    variation: fn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ia(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ia(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ap = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cp,
  data: {}
};
function Op(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, o = t.elements[n];
    !ke(o) || !Be(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Mp(e) {
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
      var i = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !ke(i) || !Be(i) || (Object.assign(i.style, c), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const Tp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Op,
  effect: Mp,
  requires: ["computeStyles"]
};
var Rp = [$p, xp, Ap, Tp], Ic = /* @__PURE__ */ bp({
  defaultModifiers: Rp
});
function Pp(e) {
  return e === "x" ? "y" : "x";
}
function Wr(e, t, n) {
  return Lt(e, _o(t, n));
}
function Np(e, t, n) {
  var r = Wr(e, t, n);
  return r > n ? n : r;
}
function Lp(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, s = n.altBoundary, d = n.padding, _ = n.tether, l = _ === void 0 ? !0 : _, u = n.tetherOffset, m = u === void 0 ? 0 : u, h = js(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: s
  }), v = wt(t.placement), g = fn(t.placement), $ = !g, w = Hc(v), E = Pp(w), k = t.modifiersData.popperOffsets, x = t.rects.reference, b = t.rects.popper, S = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, C = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (!!k) {
    if (o) {
      var L, ee = w === "y" ? Me : Je, B = w === "y" ? Ue : kt, D = w === "y" ? "height" : "width", I = k[w], fe = I + h[ee], re = I - h[B], Ce = l ? -b[D] / 2 : 0, _e = g === cn ? x[D] : b[D], le = g === cn ? -b[D] : -x[D], be = t.elements.arrow, se = l && be ? Nc(be) : {
        width: 0,
        height: 0
      }, M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jc(), H = M[ee], z = M[B], U = Wr(0, x[D], se[D]), ae = $ ? x[D] / 2 - Ce - U - H - C.mainAxis : _e - U - H - C.mainAxis, Fe = $ ? -x[D] / 2 + Ce + U + z + C.mainAxis : le + U + z + C.mainAxis, ue = t.elements.arrow && Bo(t.elements.arrow), St = ue ? w === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, Ct = (L = P == null ? void 0 : P[w]) != null ? L : 0, j = I + ae - Ct - St, jt = I + Fe - Ct, et = Wr(l ? _o(fe, j) : fe, I, l ? Lt(re, jt) : re);
      k[w] = et, W[w] = et - I;
    }
    if (c) {
      var tt, It = w === "x" ? Me : Je, nt = w === "x" ? Ue : kt, ne = k[E], we = E === "y" ? "height" : "width", rt = ne + h[It], gn = ne - h[nt], At = [Me, Je].indexOf(v) !== -1, mn = (tt = P == null ? void 0 : P[E]) != null ? tt : 0, yn = At ? rt : ne - x[we] - b[we] - mn + C.altAxis, bn = At ? ne + x[we] + b[we] - mn - C.altAxis : gn, wn = l && At ? Np(yn, ne, bn) : Wr(l ? yn : rt, ne, l ? bn : gn);
      k[E] = wn, W[E] = wn - ne;
    }
    t.modifiersData[r] = W;
  }
}
const ss = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Lp,
  requiresIfExists: ["offset"]
};
var Dp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dp[t];
  });
}
var Hp = {
  start: "end",
  end: "start"
};
function aa(e) {
  return e.replace(/start|end/g, function(t) {
    return Hp[t];
  });
}
function Wp(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Ju : f, s = fn(r), d = s ? c ? na : na.filter(function(u) {
    return fn(u) === s;
  }) : Uo, _ = d.filter(function(u) {
    return p.indexOf(u) >= 0;
  });
  _.length === 0 && (_ = d);
  var l = _.reduce(function(u, m) {
    return u[m] = js(e, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[wt(m)], u;
  }, {});
  return Object.keys(l).sort(function(u, m) {
    return l[u] - l[m];
  });
}
function jp(e) {
  if (wt(e) === Ws)
    return [];
  var t = jr(e);
  return [aa(e), t, aa(t)];
}
function Ip(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, s = n.boundary, d = n.rootBoundary, _ = n.altBoundary, l = n.flipVariations, u = l === void 0 ? !0 : l, m = n.allowedAutoPlacements, h = t.options.placement, v = wt(h), g = v === h, $ = f || (g || !u ? [jr(h)] : jp(h)), w = [h].concat($).reduce(function(se, M) {
      return se.concat(wt(M) === Ws ? Wp(t, {
        placement: M,
        boundary: s,
        rootBoundary: d,
        padding: p,
        flipVariations: u,
        allowedAutoPlacements: m
      }) : M);
    }, []), E = t.rects.reference, k = t.rects.popper, x = /* @__PURE__ */ new Map(), b = !0, S = w[0], C = 0; C < w.length; C++) {
      var P = w[C], W = wt(P), L = fn(P) === cn, ee = [Me, Ue].indexOf(W) >= 0, B = ee ? "width" : "height", D = js(t, {
        placement: P,
        boundary: s,
        rootBoundary: d,
        altBoundary: _,
        padding: p
      }), I = ee ? L ? kt : Je : L ? Ue : Me;
      E[B] > k[B] && (I = jr(I));
      var fe = jr(I), re = [];
      if (o && re.push(D[W] <= 0), c && re.push(D[I] <= 0, D[fe] <= 0), re.every(function(se) {
        return se;
      })) {
        S = P, b = !1;
        break;
      }
      x.set(P, re);
    }
    if (b)
      for (var Ce = u ? 3 : 1, _e = function(M) {
        var H = w.find(function(z) {
          var U = x.get(z);
          if (U)
            return U.slice(0, M).every(function(ae) {
              return ae;
            });
        });
        if (H)
          return S = H, "break";
      }, le = Ce; le > 0; le--) {
        var be = _e(le);
        if (be === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const Bc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ip,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bp(e) {
  return e.button === 2;
}
var it;
class Up extends ws {
  constructor() {
    super(...arguments);
    O(this, it, void 0);
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
    super.componentWillUnmount(), (n = y(this, it)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [ss, Bc],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, it) ? y(this, it).setOptions(n) : this.ref.current && T(this, it, Ic(this._getPopperElement(), this.ref.current, n)), y(this, it);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Rs("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
it = new WeakMap();
var at, $e, Yt, ur;
class he extends Ut {
  constructor() {
    super(...arguments);
    O(this, at, void 0);
    O(this, $e, void 0);
    O(this, Yt, void 0);
    O(this, ur, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, at)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, at) || this._ensureMenu();
  }
  get popper() {
    return y(this, $e) ? y(this, $e) : this._createPopper();
  }
  get trigger() {
    return y(this, ur) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return T(this, ur, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, i;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = y(this, $e)) == null || r.destroy(), T(this, $e, void 0), (i = y(this, at)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = y(this, $e)) == null || n.destroy(), super.destroy(), (r = y(this, at)) == null || r.remove();
  }
  _ensureMenu() {
    var o, a;
    const { element: n } = this, r = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(r), document.body.appendChild(i);
    else if (n) {
      const c = (o = n.getAttribute("href")) != null ? o : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (i = document.querySelector(c)), !i) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(r) ? i = f : i = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${r}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return T(this, at, i), i;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: i = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...ss, options: r } : ss : null,
        n ? Bc : null,
        ...i
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, $e) ? y(this, $e).setOptions(n) : T(this, $e, Ic(this._getPopperElement(), this.menu, n)), y(this, $e);
  }
  _getMenuOptions() {
    const { menu: n, items: r } = this.options;
    let i = r || (n == null ? void 0 : n.items);
    if (!!i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Uu(Rs(Up, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, Yt) || T(this, Yt, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: i } = n;
          return {
            width: 0,
            height: 0,
            top: i,
            right: r,
            bottom: i,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), y(this, Yt);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: i, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && Bp(r))
      return;
    const a = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of a)
      c.has(s) || d.hide();
  }
  static show(n) {
    const { event: r, ...i } = n, o = this.ensure(document.body);
    return Object.keys(i).length && o.setOptions(i), o.show(r), r == null || r.stopPropagation(), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
at = new WeakMap(), $e = new WeakMap(), Yt = new WeakMap(), ur = new WeakMap(), A(he, "NAME", "contextmenu"), A(he, "EVENTS", !0), A(he, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), A(he, "MENU_CLASS", "contextmenu"), A(he, "CLASS_SHOW", "show"), A(he, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${he.MENU_CLASS}`))
    return;
  const n = t.closest(he.MENU_SELECTOR);
  n && (he.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", he.clear.bind(he));
var Gt, Xt, Kt, wo, Uc;
const Qs = class extends he {
  constructor() {
    super(...arguments);
    O(this, wo);
    O(this, Gt, !1);
    O(this, Xt, 0);
    A(this, "hideLater", () => {
      y(this, Kt).call(this), T(this, Xt, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, Kt, () => {
      clearTimeout(y(this, Xt)), T(this, Xt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && Qs.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!y(this, Gt) && this.isHover && te(this, wo, Uc).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    y(this, Gt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, Kt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...Nu, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...Hu,
      options: {
        offset: [0, r + ((i = this.options.offset) != null ? i : 0)]
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
      n.afterRender = (...i) => {
        var a;
        const o = this.menu.querySelector(".arrow");
        o && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(o), this.popper.update()), r == null || r(...i);
      };
    }
    return n;
  }
};
let ce = Qs;
Gt = new WeakMap(), Xt = new WeakMap(), Kt = new WeakMap(), wo = new WeakSet(), Uc = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, Kt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), T(this, Gt, !0);
}, A(ce, "NAME", "dropdown"), A(ce, "MENU_CLASS", "dropdown-menu"), A(ce, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), A(ce, "DEFAULT", {
  ...he.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ce.MENU_SELECTOR);
  if (n) {
    const r = ce.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    ce.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(ce.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = ce.ensure(n);
  r.isHover && r.show();
});
const zp = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(ce.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || ce.clear({ event: e });
};
window.addEventListener("scroll", zp, !0);
var pr, Jt;
class Fp extends Wn {
  constructor(n) {
    var r;
    super(n);
    O(this, pr, void 0);
    O(this, Jt, iu());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Jt);
  }
  get triggerElement() {
    return y(this, Jt).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...r } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var a;
        const o = ((a = i.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), T(this, pr, ce.ensure(this.triggerElement, {
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
    (n = y(this, pr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: i, ...o } = this.props;
    return {
      className: N("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Jt)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ _c("div", {
      ...r
    }, n);
  }
}
pr = new WeakMap(), Jt = new WeakMap();
class Vp extends Fp {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: t, show: n } = this.state, r = this.beforeRender();
    let { caret: i = !0 } = r;
    if (i !== !1 && (n || i === !0)) {
      const a = n ? t : (o = this.props.dropdown) == null ? void 0 : o.placement;
      i = (a === "top" ? "up" : a === "bottom" ? "down" : a) || (typeof i == "string" ? i : "") || "down";
    }
    return r.caret = i, /* @__PURE__ */ _c($t, {
      ...r
    });
  }
}
function zc({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ho(Vp, {
    type: n,
    ...r
  });
}
function qp({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ho(ec, {
    type: n,
    ...r
  });
}
class Ot extends Ke {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...i } = super.beforeRender();
    return i.className = N(i.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const i = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...i,
      ...r,
      className: N(`${this.name}-${r.type}`, n.className, i.className, r.className),
      style: Object.assign({}, n.style, i.style, r.style)
    };
    return /* @__PURE__ */ Ho(t, {
      ...o
    });
  }
}
A(Ot, "ItemComponents", {
  item: ou,
  dropdown: zc,
  "btn-group": qp
}), A(Ot, "ROOT_TAG", "nav"), A(Ot, "NAME", "toolbar"), A(Ot, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
function sr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Yp({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: i,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = sr(o, r);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(f) : ve(i, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : ve(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ bt($t, {
    type: n,
    ...c
  });
}
const Ve = 24 * 60 * 60 * 1e3, ye = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), wr = (e, t = new Date()) => (e = ye(e), t = ye(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), la = (e, t = new Date()) => ye(e).getFullYear() === ye(t).getFullYear(), Gp = (e, t = new Date()) => (e = ye(e), t = ye(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), jh = (e, t = new Date()) => {
  e = ye(e), t = ye(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((i + 4) / 7);
}, Ih = (e, t) => wr(ye(t), e), Bh = (e, t) => wr(ye(t).getTime() - Ve, e), Uh = (e, t) => wr(ye(t).getTime() + Ve, e), zh = (e, t) => wr(ye(t).getTime() - 2 * Ve, e), is = (e, t = "yyyy-MM-dd hh:mm") => {
  e = ye(e);
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
      const i = `${n[r]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, Fh = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = is(e, la(e) ? r.month : r.full);
  if (wr(e, t))
    return i;
  const o = is(t, la(e, t) ? Gp(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", i).replace("{1}", o);
}, Vh = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Ve * 7;
    case "oneMonth":
      return t - Ve * 31;
    case "threeMonth":
      return t - Ve * 31 * 3;
    case "halfYear":
      return t - Ve * 183;
    case "oneYear":
      return t - Ve * 365;
    case "twoYear":
      return t - 2 * (Ve * 365);
    default:
      return 0;
  }
}, ca = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ca(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, ca(e, "day", n, r);
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
function Xp({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: i,
  children: o,
  ...a
}) {
  const c = sr(i, n);
  return r = typeof r == "function" ? r(c) : ve(r, c), /* @__PURE__ */ bt(il, {
    ...a
  }, o, r);
}
function Kp({
  key: e,
  type: t,
  btnType: n,
  count: r = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: a,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const f = { ...c }, p = (l) => {
    if (!(l != null && l.target))
      return;
    l.target.closest(".pager").querySelectorAll(".pager-nav").forEach((m) => {
      m.classList.remove("active");
    }), l.target.classList.add("active"), o == null || o.call(l.target, l);
  }, s = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ bt($t, {
    type: n,
    ...f
  })), d = (l, u) => {
    const m = [];
    for (let h = l; h <= u; h++) {
      f.text = h, delete f.icon, f.disabled = !1;
      const v = sr(i, h);
      a && (f.url = typeof a == "function" ? a(v) : ve(a, v)), m.push(/* @__PURE__ */ bt($t, {
        type: n,
        ...f,
        onClick: p
      }));
    }
    return m;
  };
  let _ = [];
  return _ = [...d(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= r ? _ = [..._, ...d(2, i.pageTotal)] : i.page < r - 2 ? _ = [..._, ...d(2, r - 2), s(), ...d(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - r + 3 ? _ = [..._, s(), ...d(i.pageTotal - r + 3, i.pageTotal)] : _ = [..._, s(), ...d(i.page - Math.ceil((r - 4) / 2), i.page + Math.floor((r - 4) / 2)), s(), ...d(i.pageTotal, i.pageTotal)]), _;
}
function Jp({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: r = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...o
}) {
  var c, f;
  i.items = (c = i.items) != null ? c : r.map((p) => {
    const s = { ...t, recPerPage: p };
    return {
      text: `${p}`,
      url: typeof n == "function" ? n(s) : ve(n, s)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : ve(a, t), i.menu = { ...i.menu, className: N((f = i.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ bt(zc, {
    type: "dropdown",
    dropdown: i,
    ...o
  });
}
function Zp({
  key: e,
  page: t,
  type: n,
  btnType: r,
  pagerInfo: i,
  size: o,
  onClick: a,
  onChange: c,
  linkCreator: f,
  ...p
}) {
  const s = { ...p };
  let d;
  const _ = (m) => {
    var h;
    d = Number((h = m.target) == null ? void 0 : h.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, l = (m) => {
    if (!(m != null && m.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const h = sr(i, d);
    c && !c({ info: h, event: m }) || (m.target.href = s.url = typeof f == "function" ? f(h) : ve(f, h));
  }, u = sr(i, t || 0);
  return s.url = typeof f == "function" ? f(u) : ve(f, u), s.className = N("input-group-addon", s.className), /* @__PURE__ */ bt("div", {
    className: N("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ bt("input", {
    type: "number",
    class: "form-control",
    max: i.pageTotal,
    min: "1",
    onInput: _
  }), /* @__PURE__ */ bt($t, {
    type: r,
    ...s,
    onClick: l
  }));
}
class Ir extends Ot {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: r = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: r, pageTotal: r ? Math.ceil(n / r) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, r) {
    const i = super.getItemRenderProps(t, n, r), o = n.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
}
A(Ir, "NAME", "pager"), A(Ir, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), A(Ir, "ItemComponents", {
  ...Ot.ItemComponents,
  link: Yp,
  info: Xp,
  nav: Kp,
  "size-menu": Jp,
  goto: Zp
});
class fa extends Pe {
}
A(fa, "NAME", "pager"), A(fa, "Component", Ir);
class _a extends Pe {
}
A(_a, "NAME", "toolbar"), A(_a, "Component", Ot);
function Se(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Wt(e) {
  var t = Se(e).Element;
  return e instanceof t || e instanceof Element;
}
function xe(e) {
  var t = Se(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Is(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Se(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Dt = Math.max, uo = Math.min, _n = Math.round;
function as() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fc() {
  return !/^((?!chrome|android).)*safari/i.test(as());
}
function un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, o = 1;
  t && xe(e) && (i = e.offsetWidth > 0 && _n(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && _n(r.height) / e.offsetHeight || 1);
  var a = Wt(e) ? Se(e) : window, c = a.visualViewport, f = !Fc() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / i, s = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / i, _ = r.height / o;
  return {
    width: d,
    height: _,
    top: s,
    right: p + d,
    bottom: s + _,
    left: p,
    x: p,
    y: s
  };
}
function Bs(e) {
  var t = Se(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Qp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ed(e) {
  return e === Se(e) || !xe(e) ? Bs(e) : Qp(e);
}
function ze(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  return ((Wt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Us(e) {
  return un(Et(e)).left + Bs(e).scrollLeft;
}
function Qe(e) {
  return Se(e).getComputedStyle(e);
}
function zs(e) {
  var t = Qe(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function td(e) {
  var t = e.getBoundingClientRect(), n = _n(t.width) / e.offsetWidth || 1, r = _n(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function nd(e, t, n) {
  n === void 0 && (n = !1);
  var r = xe(t), i = xe(t) && td(t), o = Et(t), a = un(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ze(t) !== "body" || zs(o)) && (c = ed(t)), xe(t) ? (f = un(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Us(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Fs(e) {
  var t = un(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zo(e) {
  return ze(e) === "html" ? e : e.assignedSlot || e.parentNode || (Is(e) ? e.host : null) || Et(e);
}
function Vc(e) {
  return ["html", "body", "#document"].indexOf(ze(e)) >= 0 ? e.ownerDocument.body : xe(e) && zs(e) ? e : Vc(zo(e));
}
function Bn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Vc(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Se(r), a = i ? [o].concat(o.visualViewport || [], zs(r) ? r : []) : r, c = t.concat(a);
  return i ? c : c.concat(Bn(zo(a)));
}
function rd(e) {
  return ["table", "td", "th"].indexOf(ze(e)) >= 0;
}
function ua(e) {
  return !xe(e) || Qe(e).position === "fixed" ? null : e.offsetParent;
}
function od(e) {
  var t = /firefox/i.test(as()), n = /Trident/i.test(as());
  if (n && xe(e)) {
    var r = Qe(e);
    if (r.position === "fixed")
      return null;
  }
  var i = zo(e);
  for (Is(i) && (i = i.host); xe(i) && ["html", "body"].indexOf(ze(i)) < 0; ) {
    var o = Qe(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function $r(e) {
  for (var t = Se(e), n = ua(e); n && rd(n) && Qe(n).position === "static"; )
    n = ua(n);
  return n && (ze(n) === "html" || ze(n) === "body" && Qe(n).position === "static") ? t : n || od(e) || t;
}
var ge = "top", Te = "bottom", Re = "right", me = "left", Vs = "auto", kr = [ge, Te, Re, me], pn = "start", ir = "end", sd = "clippingParents", qc = "viewport", kn = "popper", id = "reference", pa = /* @__PURE__ */ kr.reduce(function(e, t) {
  return e.concat([t + "-" + pn, t + "-" + ir]);
}, []), Yc = /* @__PURE__ */ [].concat(kr, [Vs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pn, t + "-" + ir]);
}, []), ad = "beforeRead", ld = "read", cd = "afterRead", fd = "beforeMain", _d = "main", ud = "afterMain", pd = "beforeWrite", dd = "write", hd = "afterWrite", vd = [ad, ld, cd, fd, _d, ud, pd, dd, hd];
function gd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && i(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function md(e) {
  var t = gd(e);
  return vd.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function yd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ie(e) {
  return e.split("-")[0];
}
function bd(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function wd(e, t) {
  var n = Se(e), r = Et(e), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var p = Fc();
    (p || !p && t === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Us(e),
    y: f
  };
}
function $d(e) {
  var t, n = Et(e), r = Bs(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Dt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Dt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + Us(e), f = -r.scrollTop;
  return Qe(i || n).direction === "rtl" && (c += Dt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Gc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Is(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ls(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function kd(e, t) {
  var n = un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function da(e, t, n) {
  return t === qc ? ls(wd(e, n)) : Wt(t) ? kd(t, n) : ls($d(Et(e)));
}
function xd(e) {
  var t = Bn(zo(e)), n = ["absolute", "fixed"].indexOf(Qe(e).position) >= 0, r = n && xe(e) ? $r(e) : e;
  return Wt(r) ? t.filter(function(i) {
    return Wt(i) && Gc(i, r) && ze(i) !== "body";
  }) : [];
}
function Ed(e, t, n, r) {
  var i = t === "clippingParents" ? xd(e) : [].concat(t), o = [].concat(i, [n]), a = o[0], c = o.reduce(function(f, p) {
    var s = da(e, p, r);
    return f.top = Dt(s.top, f.top), f.right = uo(s.right, f.right), f.bottom = uo(s.bottom, f.bottom), f.left = Dt(s.left, f.left), f;
  }, da(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function dn(e) {
  return e.split("-")[1];
}
function qs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Ie(r) : null, o = r ? dn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (i) {
    case ge:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Te:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Re:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case me:
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
  var p = i ? qs(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (o) {
      case pn:
        f[p] = f[p] - (t[s] / 2 - n[s] / 2);
        break;
      case ir:
        f[p] = f[p] + (t[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function Kc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Jc(e) {
  return Object.assign({}, Kc(), e);
}
function Zc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Ys(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? sd : c, p = n.rootBoundary, s = p === void 0 ? qc : p, d = n.elementContext, _ = d === void 0 ? kn : d, l = n.altBoundary, u = l === void 0 ? !1 : l, m = n.padding, h = m === void 0 ? 0 : m, v = Jc(typeof h != "number" ? h : Zc(h, kr)), g = _ === kn ? id : kn, $ = e.rects.popper, w = e.elements[u ? g : _], E = Ed(Wt(w) ? w : w.contextElement || Et(e.elements.popper), f, s, a), k = un(e.elements.reference), x = Xc({
    reference: k,
    element: $,
    strategy: "absolute",
    placement: i
  }), b = ls(Object.assign({}, $, x)), S = _ === kn ? b : k, C = {
    top: E.top - S.top + v.top,
    bottom: S.bottom - E.bottom + v.bottom,
    left: E.left - S.left + v.left,
    right: S.right - E.right + v.right
  }, P = e.modifiersData.offset;
  if (_ === kn && P) {
    var W = P[i];
    Object.keys(C).forEach(function(L) {
      var ee = [Re, Te].indexOf(L) >= 0 ? 1 : -1, B = [ge, Te].indexOf(L) >= 0 ? "y" : "x";
      C[L] += W[B] * ee;
    });
  }
  return C;
}
var ha = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function va() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Sd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, o = i === void 0 ? ha : i;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ha, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], _ = !1, l = {
      state: s,
      setOptions: function(v) {
        var g = typeof v == "function" ? v(s.options) : v;
        m(), s.options = Object.assign({}, o, s.options, g), s.scrollParents = {
          reference: Wt(c) ? Bn(c) : c.contextElement ? Bn(c.contextElement) : [],
          popper: Bn(f)
        };
        var $ = md(bd([].concat(r, s.options.modifiers)));
        return s.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), u(), l.update();
      },
      forceUpdate: function() {
        if (!_) {
          var v = s.elements, g = v.reference, $ = v.popper;
          if (!!va(g, $)) {
            s.rects = {
              reference: nd(g, $r($), s.options.strategy === "fixed"),
              popper: Fs($)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(C) {
              return s.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var w = 0; w < s.orderedModifiers.length; w++) {
              if (s.reset === !0) {
                s.reset = !1, w = -1;
                continue;
              }
              var E = s.orderedModifiers[w], k = E.fn, x = E.options, b = x === void 0 ? {} : x, S = E.name;
              typeof k == "function" && (s = k({
                state: s,
                options: b,
                name: S,
                instance: l
              }) || s);
            }
          }
        }
      },
      update: yd(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(s);
        });
      }),
      destroy: function() {
        m(), _ = !0;
      }
    };
    if (!va(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !_ && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function u() {
      s.orderedModifiers.forEach(function(h) {
        var v = h.name, g = h.options, $ = g === void 0 ? {} : g, w = h.effect;
        if (typeof w == "function") {
          var E = w({
            state: s,
            name: v,
            instance: l,
            options: $
          }), k = function() {
          };
          d.push(E || k);
        }
      });
    }
    function m() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var Sr = {
  passive: !0
};
function Cd(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, f = Se(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(s) {
    s.addEventListener("scroll", n.update, Sr);
  }), c && f.addEventListener("resize", n.update, Sr), function() {
    o && p.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Sr);
    }), c && f.removeEventListener("resize", n.update, Sr);
  };
}
const Ad = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Cd,
  data: {}
};
function Od(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Xc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Md = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Od,
  data: {}
};
var Td = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rd(e) {
  var t = e.x, n = e.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: _n(t * i) / i || 0,
    y: _n(n * i) / i || 0
  };
}
function ga(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, s = e.roundOffsets, d = e.isFixed, _ = a.x, l = _ === void 0 ? 0 : _, u = a.y, m = u === void 0 ? 0 : u, h = typeof s == "function" ? s({
    x: l,
    y: m
  }) : {
    x: l,
    y: m
  };
  l = h.x, m = h.y;
  var v = a.hasOwnProperty("x"), g = a.hasOwnProperty("y"), $ = me, w = ge, E = window;
  if (p) {
    var k = $r(n), x = "clientHeight", b = "clientWidth";
    if (k === Se(n) && (k = Et(n), Qe(k).position !== "static" && c === "absolute" && (x = "scrollHeight", b = "scrollWidth")), k = k, i === ge || (i === me || i === Re) && o === ir) {
      w = Te;
      var S = d && k === E && E.visualViewport ? E.visualViewport.height : k[x];
      m -= S - r.height, m *= f ? 1 : -1;
    }
    if (i === me || (i === ge || i === Te) && o === ir) {
      $ = Re;
      var C = d && k === E && E.visualViewport ? E.visualViewport.width : k[b];
      l -= C - r.width, l *= f ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: c
  }, p && Td), W = s === !0 ? Rd({
    x: l,
    y: m
  }) : {
    x: l,
    y: m
  };
  if (l = W.x, m = W.y, f) {
    var L;
    return Object.assign({}, P, (L = {}, L[w] = g ? "0" : "", L[$] = v ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + m + "px)" : "translate3d(" + l + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, P, (t = {}, t[w] = g ? m + "px" : "", t[$] = v ? l + "px" : "", t.transform = "", t));
}
function Pd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Ie(t.placement),
    variation: dn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ga(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ga(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Nd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Pd,
  data: {}
};
function Ld(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, o = t.elements[n];
    !xe(o) || !ze(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Dd(e) {
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
      var i = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !xe(i) || !ze(i) || (Object.assign(i.style, c), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const Hd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ld,
  effect: Dd,
  requires: ["computeStyles"]
};
var Wd = [Ad, Md, Nd, Hd], jd = /* @__PURE__ */ Sd({
  defaultModifiers: Wd
});
function Un(e, t, n) {
  return Dt(e, uo(t, n));
}
function Id(e, t, n) {
  var r = Un(e, t, n);
  return r > n ? n : r;
}
var Bd = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Jc(typeof t != "number" ? t : Zc(t, kr));
};
function Ud(e) {
  var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Ie(n.placement), f = qs(c), p = [me, Re].indexOf(c) >= 0, s = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Bd(i.padding, n), _ = Fs(o), l = f === "y" ? ge : me, u = f === "y" ? Te : Re, m = n.rects.reference[s] + n.rects.reference[f] - a[f] - n.rects.popper[s], h = a[f] - n.rects.reference[f], v = $r(o), g = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, $ = m / 2 - h / 2, w = d[l], E = g - _[s] - d[u], k = g / 2 - _[s] / 2 + $, x = Un(w, k, E), b = f;
    n.modifiersData[r] = (t = {}, t[b] = x, t.centerOffset = x - k, t);
  }
}
function zd(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !Gc(t.elements.popper, i) || (t.elements.arrow = i));
}
const Fd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ud,
  effect: zd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vd(e, t, n) {
  var r = Ie(e), i = [me, ge].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * i, [me, Re].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function qd(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, o = i === void 0 ? [0, 0] : i, a = Yc.reduce(function(s, d) {
    return s[d] = Vd(d, t.rects, o), s;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Yd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qd
};
function Gd(e) {
  return e === "x" ? "y" : "x";
}
function Xd(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, s = n.altBoundary, d = n.padding, _ = n.tether, l = _ === void 0 ? !0 : _, u = n.tetherOffset, m = u === void 0 ? 0 : u, h = Ys(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: s
  }), v = Ie(t.placement), g = dn(t.placement), $ = !g, w = qs(v), E = Gd(w), k = t.modifiersData.popperOffsets, x = t.rects.reference, b = t.rects.popper, S = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, C = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (!!k) {
    if (o) {
      var L, ee = w === "y" ? ge : me, B = w === "y" ? Te : Re, D = w === "y" ? "height" : "width", I = k[w], fe = I + h[ee], re = I - h[B], Ce = l ? -b[D] / 2 : 0, _e = g === pn ? x[D] : b[D], le = g === pn ? -b[D] : -x[D], be = t.elements.arrow, se = l && be ? Fs(be) : {
        width: 0,
        height: 0
      }, M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Kc(), H = M[ee], z = M[B], U = Un(0, x[D], se[D]), ae = $ ? x[D] / 2 - Ce - U - H - C.mainAxis : _e - U - H - C.mainAxis, Fe = $ ? -x[D] / 2 + Ce + U + z + C.mainAxis : le + U + z + C.mainAxis, ue = t.elements.arrow && $r(t.elements.arrow), St = ue ? w === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, Ct = (L = P == null ? void 0 : P[w]) != null ? L : 0, j = I + ae - Ct - St, jt = I + Fe - Ct, et = Un(l ? uo(fe, j) : fe, I, l ? Dt(re, jt) : re);
      k[w] = et, W[w] = et - I;
    }
    if (c) {
      var tt, It = w === "x" ? ge : me, nt = w === "x" ? Te : Re, ne = k[E], we = E === "y" ? "height" : "width", rt = ne + h[It], gn = ne - h[nt], At = [ge, me].indexOf(v) !== -1, mn = (tt = P == null ? void 0 : P[E]) != null ? tt : 0, yn = At ? rt : ne - x[we] - b[we] - mn + C.altAxis, bn = At ? ne + x[we] + b[we] - mn - C.altAxis : gn, wn = l && At ? Id(yn, ne, bn) : Un(l ? yn : rt, ne, l ? bn : gn);
      k[E] = wn, W[E] = wn - ne;
    }
    t.modifiersData[r] = W;
  }
}
const Kd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Xd,
  requiresIfExists: ["offset"]
};
var Jd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Br(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jd[t];
  });
}
var Zd = {
  start: "end",
  end: "start"
};
function ma(e) {
  return e.replace(/start|end/g, function(t) {
    return Zd[t];
  });
}
function Qd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Yc : f, s = dn(r), d = s ? c ? pa : pa.filter(function(u) {
    return dn(u) === s;
  }) : kr, _ = d.filter(function(u) {
    return p.indexOf(u) >= 0;
  });
  _.length === 0 && (_ = d);
  var l = _.reduce(function(u, m) {
    return u[m] = Ys(e, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ie(m)], u;
  }, {});
  return Object.keys(l).sort(function(u, m) {
    return l[u] - l[m];
  });
}
function eh(e) {
  if (Ie(e) === Vs)
    return [];
  var t = Br(e);
  return [ma(e), t, ma(t)];
}
function th(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, s = n.boundary, d = n.rootBoundary, _ = n.altBoundary, l = n.flipVariations, u = l === void 0 ? !0 : l, m = n.allowedAutoPlacements, h = t.options.placement, v = Ie(h), g = v === h, $ = f || (g || !u ? [Br(h)] : eh(h)), w = [h].concat($).reduce(function(se, M) {
      return se.concat(Ie(M) === Vs ? Qd(t, {
        placement: M,
        boundary: s,
        rootBoundary: d,
        padding: p,
        flipVariations: u,
        allowedAutoPlacements: m
      }) : M);
    }, []), E = t.rects.reference, k = t.rects.popper, x = /* @__PURE__ */ new Map(), b = !0, S = w[0], C = 0; C < w.length; C++) {
      var P = w[C], W = Ie(P), L = dn(P) === pn, ee = [ge, Te].indexOf(W) >= 0, B = ee ? "width" : "height", D = Ys(t, {
        placement: P,
        boundary: s,
        rootBoundary: d,
        altBoundary: _,
        padding: p
      }), I = ee ? L ? Re : me : L ? Te : ge;
      E[B] > k[B] && (I = Br(I));
      var fe = Br(I), re = [];
      if (o && re.push(D[W] <= 0), c && re.push(D[I] <= 0, D[fe] <= 0), re.every(function(se) {
        return se;
      })) {
        S = P, b = !1;
        break;
      }
      x.set(P, re);
    }
    if (b)
      for (var Ce = u ? 3 : 1, _e = function(M) {
        var H = w.find(function(z) {
          var U = x.get(z);
          if (U)
            return U.slice(0, M).every(function(ae) {
              return ae;
            });
        });
        if (H)
          return S = H, "break";
      }, le = Ce; le > 0; le--) {
        var be = _e(le);
        if (be === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const nh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: th,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Zt, Qt, en, Tt, Ae, dr, tn, $o, Qc;
class je extends Ut {
  constructor() {
    super(...arguments);
    O(this, $o);
    O(this, Zt, !1);
    O(this, Qt, void 0);
    O(this, en, 0);
    O(this, Tt, void 0);
    O(this, Ae, void 0);
    O(this, dr, void 0);
    A(this, "hideLater", () => {
      y(this, tn).call(this), T(this, en, window.setTimeout(this.hide.bind(this), 100));
    });
    O(this, tn, () => {
      clearTimeout(y(this, en)), T(this, en, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, Tt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, Tt) || this._ensureTooltip();
  }
  get popper() {
    return y(this, Ae) ? y(this, Ae) : this._createPopper();
  }
  get trigger() {
    return y(this, dr) || this.element;
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
    return T(this, dr, n), !y(this, Zt) && this.isHover && te(this, $o, Qc).call(this), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = y(this, Ae)) == null || n.destroy(), T(this, Ae, void 0), this.element.classList.remove(this.elementShowClass), (r = y(this, Tt)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, Zt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, tn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
    var o, a;
    const { element: n } = this, r = this.constructor.TOOLTIP_CLASS;
    let i;
    if (this.options.title) {
      i = document.createElement("div");
      const c = this.options.className ? this.options.className.split(" ") : [];
      let f = [r, `bg-${this.options.type}`];
      f = f.concat(c), i.classList.add(...f), i.innerHTML = this.options.title, i.prepend(this._createArrow()), document.body.appendChild(i);
    } else if (n) {
      const c = (o = n.getAttribute("href")) != null ? o : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (i = document.querySelector(c), i == null || i.prepend(this._createArrow())), !i) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(r) ? i = f : i = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${r}`);
      }
    }
    if (!i)
      throw new Error("Cannot find tooltip element");
    return T(this, Tt, i), i;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Kd,
        nh,
        { ...Fd, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Yd,
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
            const i = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.tooltip.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${i}`), this.element.setAttribute("data-tooltip-placement", i);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return y(this, Ae) ? y(this, Ae).setOptions(n) : T(this, Ae, jd(this._getPopperElement(), this.tooltip, n)), y(this, Ae);
  }
  _getPopperElement() {
    return y(this, Qt) || T(this, Qt, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: i } = n;
          return {
            width: 0,
            height: 0,
            top: i,
            right: r,
            bottom: i,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), y(this, Qt);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, i = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of i)
      o.has(a) || c.hide();
  }
}
Zt = new WeakMap(), Qt = new WeakMap(), en = new WeakMap(), Tt = new WeakMap(), Ae = new WeakMap(), dr = new WeakMap(), tn = new WeakMap(), $o = new WeakSet(), Qc = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, tn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), T(this, Zt, !0);
}, A(je, "NAME", "tooltip"), A(je, "TOOLTIP_CLASS", "tooltip"), A(je, "CLASS_SHOW", "show"), A(je, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), A(je, "DEFAULT", {
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(je.MENU_SELECTOR);
  if (n) {
    const r = je.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    je.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(je.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = je.ensure(n);
  r.isHover && r.show();
});
var Gs, Z, ef, tf, zn, ya, nf = {}, rf = [], rh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function of(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function R(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Gs.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ur(e, a, r, i, null);
}
function Ur(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ef : i };
  return i == null && Z.vnode != null && Z.vnode(o), o;
}
function oh() {
  return { current: null };
}
function Xs(e) {
  return e.children;
}
function Fn(e, t) {
  this.props = e, this.context = t;
}
function ar(e, t) {
  if (t == null)
    return e.__ ? ar(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ar(e) : null;
}
function sf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return sf(e);
  }
}
function ba(e) {
  (!e.__d && (e.__d = !0) && zn.push(e) && !po.__r++ || ya !== Z.debounceRendering) && ((ya = Z.debounceRendering) || setTimeout)(po);
}
function po() {
  for (var e; po.__r = zn.length; )
    e = zn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = mt({}, o)).__v = o.__v + 1, ff(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? ar(o) : a, o.__h), ih(r, o), o.__e != a && sf(o)));
    });
}
function af(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || rf, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ur(null, l, null, null, l) : Array.isArray(l) ? Ur(Xs, { children: l }, null, null, null) : l.__b > 0 ? Ur(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      ff(e, l, _ = _ || nf, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = lf(l, f, e) : f = cf(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = ar(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && uf(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      _f(h[s], h[++s], h[++s]);
}
function lf(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? lf(r, t, n) : cf(n, r, r, i, r.__e, t));
  return t;
}
function cf(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function sh(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ho(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ho(e, o, t[o], n[o], r);
}
function wa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || rh.test(t) ? n : n + "px";
}
function ho(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || wa(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || wa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? ka : $a, o) : e.removeEventListener(t, o ? ka : $a, o);
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
function $a(e) {
  this.l[e.type + !1](Z.event ? Z.event(e) : e);
}
function ka(e) {
  this.l[e.type + !0](Z.event ? Z.event(e) : e);
}
function ff(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = Z.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new Fn(h, g), s.constructor = b, s.render = lh), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = mt({}, s.__s)), mt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = Z.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = mt(mt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Xs && p.key == null ? p.props.children : p, af(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ah(n.__e, t, n, r, i, o, a, f);
    (p = Z.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), Z.__e(S, t, n);
  }
}
function ih(e, t) {
  Z.__c && Z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Z.__e(r, n.__v);
    }
  });
}
function ah(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && Gs.call(e.childNodes), p = (d = n.props || nf).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sh(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, af(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && ar(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && of(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && ho(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && ho(e, "checked", u, d.checked, !1));
  }
  return e;
}
function _f(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    Z.__e(r, n);
  }
}
function uf(e, t, n) {
  var r, i;
  if (Z.unmount && Z.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || _f(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        Z.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && uf(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || of(e.__e), e.__ = e.__e = e.__d = void 0;
}
function lh(e, t, n) {
  return this.constructor(e, n);
}
Gs = rf.slice, Z = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ef = 0, tf = function(e) {
  return e != null && e.constructor === void 0;
}, Fn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mt({}, this.state), typeof e == "function" && (e = e(mt({}, n), this.props)), e && mt(n, e), e != null && this.__v && (t && this._sb.push(t), ba(this));
}, Fn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ba(this));
}, Fn.prototype.render = Xs, zn = [], po.__r = 0;
let ch = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ks, Q, pf, Vn, xa, df = {}, hf = [], fh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function vf(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ea(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ks.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return zr(e, a, r, i, null);
}
function zr(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++pf : i };
  return i == null && Q.vnode != null && Q.vnode(o), o;
}
function Js(e) {
  return e.children;
}
function qn(e, t) {
  this.props = e, this.context = t;
}
function lr(e, t) {
  if (t == null)
    return e.__ ? lr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? lr(e) : null;
}
function gf(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return gf(e);
  }
}
function Sa(e) {
  (!e.__d && (e.__d = !0) && Vn.push(e) && !vo.__r++ || xa !== Q.debounceRendering) && ((xa = Q.debounceRendering) || setTimeout)(vo);
}
function vo() {
  for (var e; vo.__r = Vn.length; )
    e = Vn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vn = [], e.some(function(t) {
      var n, r, i, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (i = yt({}, o)).__v = o.__v + 1, wf(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? lr(o) : a, o.__h), uh(r, o), o.__e != a && gf(o)));
    });
}
function mf(e, t, n, r, i, o, a, c, f, p) {
  var s, d, _, l, u, m, h, v = r && r.__k || hf, g = v.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((l = n.__k[s] = (l = t[s]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? zr(null, l, null, null, l) : Array.isArray(l) ? zr(Js, { children: l }, null, null, null) : l.__b > 0 ? zr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (_ = v[s]) === null || _ && l.key == _.key && l.type === _.type)
        v[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((_ = v[d]) && l.key == _.key && l.type === _.type) {
            v[d] = void 0;
            break;
          }
          _ = null;
        }
      wf(e, l, _ = _ || df, i, o, a, c, f, p), u = l.__e, (d = l.ref) && _.ref != d && (h || (h = []), _.ref && h.push(_.ref, null, l), h.push(d, l.__c || u, l)), u != null ? (m == null && (m = u), typeof l.type == "function" && l.__k === _.__k ? l.__d = f = yf(l, f, e) : f = bf(e, l, _, v, u, f), typeof n.type == "function" && (n.__d = f)) : f && _.__e == f && f.parentNode != e && (f = lr(_));
    }
  for (n.__e = m, s = g; s--; )
    v[s] != null && kf(v[s], v[s]);
  if (h)
    for (s = 0; s < h.length; s++)
      $f(h[s], h[++s], h[++s]);
}
function yf(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? yf(r, t, n) : bf(n, r, r, i, r.__e, t));
  return t;
}
function bf(e, t, n, r, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function _h(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || go(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || go(e, o, t[o], n[o], r);
}
function Ca(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fh.test(t) ? n : n + "px";
}
function go(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ca(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ca(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Oa : Aa, o) : e.removeEventListener(t, o ? Oa : Aa, o);
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
function Aa(e) {
  this.l[e.type + !1](Q.event ? Q.event(e) : e);
}
function Oa(e) {
  this.l[e.type + !0](Q.event ? Q.event(e) : e);
}
function wf(e, t, n, r, i, o, a, c, f) {
  var p, s, d, _, l, u, m, h, v, g, $, w, E, k, x, b = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = Q.__b) && p(t);
  try {
    e:
      if (typeof b == "function") {
        if (h = t.props, v = (p = b.contextType) && r[p.__c], g = p ? v ? v.props.value : p.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(h, g) : (t.__c = s = new qn(h, g), s.constructor = b, s.render = dh), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), b.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = yt({}, s.__s)), yt(s.__s, b.getDerivedStateFromProps(h, s.__s))), _ = s.props, l = s.state, d)
          b.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && h !== _ && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), $ = 0; $ < s._sb.length; $++)
              s.__h.push(s._sb[$]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(_, l, u);
          });
        }
        if (s.context = g, s.props = h, s.__v = t, s.__P = e, w = Q.__r, E = 0, "prototype" in b && b.prototype.render) {
          for (s.state = s.__s, s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), k = 0; k < s._sb.length; k++)
            s.__h.push(s._sb[k]);
          s._sb = [];
        } else
          do
            s.__d = !1, w && w(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++E < 25);
        s.state = s.__s, s.getChildContext != null && (r = yt(yt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(_, l)), x = p != null && p.type === Js && p.key == null ? p.props.children : p, mf(e, Array.isArray(x) ? x : [x], t, n, r, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), m && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ph(n.__e, t, n, r, i, o, a, f);
    (p = Q.diffed) && p(t);
  } catch (S) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), Q.__e(S, t, n);
  }
}
function uh(e, t) {
  Q.__c && Q.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Q.__e(r, n.__v);
    }
  });
}
function ph(e, t, n, r, i, o, a, c) {
  var f, p, s, d = n.props, _ = t.props, l = t.type, u = 0;
  if (l === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[u] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(_);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, _.is && _), o = null, c = !1;
  }
  if (l === null)
    d === _ || c && e.data === _ || (e.data = _);
  else {
    if (o = o && Ks.call(e.childNodes), p = (d = n.props || df).dangerouslySetInnerHTML, s = _.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (_h(e, _, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, mf(e, Array.isArray(u) ? u : [u], t, n, r, i && l !== "foreignObject", o, a, o ? o[0] : n.__k && lr(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && vf(o[u]);
    c || ("value" in _ && (u = _.value) !== void 0 && (u !== e.value || l === "progress" && !u || l === "option" && u !== d.value) && go(e, "value", u, d.value, !1), "checked" in _ && (u = _.checked) !== void 0 && u !== e.checked && go(e, "checked", u, d.checked, !1));
  }
  return e;
}
function $f(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    Q.__e(r, n);
  }
}
function kf(e, t, n) {
  var r, i;
  if (Q.unmount && Q.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || $f(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        Q.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && kf(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || vf(e.__e), e.__ = e.__e = e.__d = void 0;
}
function dh(e, t, n) {
  return this.constructor(e, n);
}
Ks = hf.slice, Q = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, pf = 0, qn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = yt({}, this.state), typeof e == "function" && (e = e(yt({}, n), this.props)), e && yt(n, e), e != null && this.__v && (t && this._sb.push(t), Sa(this));
}, qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Sa(this));
}, qn.prototype.render = Js, Vn = [], vo.__r = 0;
var Rt, Pt;
class Ma extends qn {
  constructor(n) {
    var r;
    super(n);
    O(this, Rt, 0);
    O(this, Pt, null);
    A(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, i = n.target;
      if (!(!i || !r) && (typeof r == "string" && i.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && (y(this, Rt) && cancelAnimationFrame(y(this, Rt)), T(this, Rt, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + i * this.props.scrollSize / this.props.clientSize), T(this, Rt, 0);
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
      const i = r.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: c } = this.props, f = (o === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
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
    const { clientSize: n, scrollSize: r, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(n * n / r), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (T(this, Pt, typeof n == "string" ? document : n.current), y(this, Pt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, Pt) && y(this, Pt).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: r } = this.props;
    r && r(n, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: r,
      size: i = 12,
      className: o,
      style: a,
      left: c,
      top: f,
      bottom: p,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: _ } = this, { dragStart: l } = this.state, u = {
      left: c,
      top: f,
      bottom: p,
      right: s,
      ...a
    }, m = {};
    return r === "horz" ? (u.height = i, u.width = n, m.width = this.barSize, m.left = Math.round(Math.min(d, _) * (n - m.width) / d)) : (u.width = i, u.height = n, m.height = this.barSize, m.top = Math.round(Math.min(d, _) * (n - m.height) / d)), /* @__PURE__ */ Ea("div", {
      className: N("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: u,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Ea("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Rt = new WeakMap(), Pt = new WeakMap();
function Ta(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function xf({ col: e, className: t, height: n, row: r, onRenderCell: i, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
  var b, S;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: d, border: _ } = e.setting, l = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...o
  }, u = ["dtable-cell", f, e.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], m = ["dtable-cell-content", t], h = [(S = c != null ? c : (b = r.data) == null ? void 0 : b[e.name]) != null ? S : ""], v = i ? i(h, { row: r, col: e }, R) : h, g = [], $ = [], w = {}, E = {};
  let k = "div";
  v == null || v.forEach((C) => {
    var P;
    if (typeof C == "object" && C && !tf(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const W = C.outer ? g : $;
      C.html ? W.push(/* @__PURE__ */ R("div", {
        className: N("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(P = C.attrs) != null ? P : {}
      })) : (C.style && Object.assign(C.outer ? s : l, C.style), C.className && (C.outer ? u : m).push(C.className), C.children && W.push(C.children), C.attrs && Object.assign(C.outer ? w : E, C.attrs)), C.tagName && !C.outer && (k = C.tagName);
    } else
      $.push(C);
  });
  const x = k;
  return /* @__PURE__ */ R("div", {
    className: N(u),
    style: s,
    "data-col": e.name,
    ...p,
    ...w
  }, $.length > 0 && /* @__PURE__ */ R(x, {
    className: N(m),
    style: l,
    ...E
  }, $), g);
}
function Go({ row: e, className: t, top: n = 0, left: r = 0, width: i, height: o, cols: a, CellComponent: c = xf, onRenderCell: f }) {
  return /* @__PURE__ */ R("div", {
    className: N("dtable-cells", t),
    style: { top: n, left: r, width: i, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ R(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function Ef({
  row: e,
  className: t,
  top: n,
  height: r,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: a,
  fixedLeftWidth: c,
  scrollWidth: f,
  scrollColsWidth: p,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: _ = xf,
  onRenderCell: l,
  style: u,
  ...m
}) {
  let h = null;
  i != null && i.length && (h = /* @__PURE__ */ R(Go, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: _,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ R(Go, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: _,
    onRenderCell: l
  }));
  let g = null;
  o != null && o.length && (g = /* @__PURE__ */ R(Go, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: s,
    row: e,
    CellComponent: _,
    onRenderCell: l
  }));
  const $ = { top: n, height: r, lineHeight: `${r - 2}px`, ...u };
  return /* @__PURE__ */ R("div", {
    className: N("dtable-row", t),
    style: $,
    "data-id": e.id,
    ...m
  }, h, v, g);
}
function hh({ height: e, onRenderRow: t, ...n }) {
  const r = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: r }, R);
    i && Object.assign(r, i);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ R(Ef, {
    ...r
  }));
}
function vh({
  className: e,
  style: t,
  top: n,
  rows: r,
  height: i,
  rowHeight: o,
  scrollTop: a,
  onRenderRow: c,
  ...f
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ R("div", {
    className: N("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const s = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: s, row: p }, R);
    return d && Object.assign(s, d), /* @__PURE__ */ R(Ef, {
      ...s
    });
  }));
}
const mo = /* @__PURE__ */ new Map(), yo = [];
function Sf(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && mo.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  mo.set(n, e), (t == null ? void 0 : t.buildIn) && !yo.includes(n) && yo.push(n);
}
function vn(e, t) {
  Sf(e, t);
  const n = (r) => {
    if (!r)
      return e;
    const { defaultOptions: i, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...i, ...r }
    };
  };
  return n.plugin = e, n;
}
function Cf(e) {
  return mo.delete(e);
}
function gh(e) {
  if (typeof e == "string") {
    const t = mo.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Af(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const i = gh(r);
    !i || n.has(i.name) || ((o = i.plugins) != null && o.length && Af(e, i.plugins, n), e.push(i), n.add(i.name));
  }), e;
}
function mh(e = [], t = !0) {
  return t && yo.length && e.unshift(...yo), e != null && e.length ? Af([], e, /* @__PURE__ */ new Set()) : [];
}
function Ra() {
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
var Nt, nn, lt, De, ct, oe, Oe, He, rn, hr, vr, Xe, on, sn, ko, Of, xo, Mf, Eo, Tf, So, Rf, gr, fs, Co, Ao, mr, yr, Oo, Mo, To, Pf, Ro, Nf, Po, Lf;
class cs extends Fn {
  constructor(n) {
    var r;
    super(n);
    O(this, ko);
    O(this, xo);
    O(this, Eo);
    O(this, So);
    O(this, gr);
    O(this, To);
    O(this, Ro);
    O(this, Po);
    A(this, "ref", oh());
    O(this, Nt, 0);
    O(this, nn, void 0);
    O(this, lt, !1);
    O(this, De, void 0);
    O(this, ct, void 0);
    O(this, oe, []);
    O(this, Oe, void 0);
    O(this, He, /* @__PURE__ */ new Map());
    O(this, rn, {});
    O(this, hr, void 0);
    O(this, vr, []);
    A(this, "updateLayout", () => {
      y(this, Nt) && cancelAnimationFrame(y(this, Nt)), T(this, Nt, requestAnimationFrame(() => {
        T(this, Oe, void 0), this.forceUpdate(), T(this, Nt, 0);
      }));
    });
    O(this, Xe, (n, r) => {
      r = r || n.type;
      const i = y(this, He).get(r);
      if (!!(i != null && i.length)) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    O(this, on, (n) => {
      y(this, Xe).call(this, n, `window_${n.type}`);
    });
    O(this, sn, (n) => {
      y(this, Xe).call(this, n, `document_${n.type}`);
    });
    O(this, Co, (n, r) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, r);
        i && Object.assign(n.props, i);
      }
      return y(this, oe).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    O(this, Ao, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), y(this, oe).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    O(this, mr, (n, r, i) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, i)), this.options[c] && (n = this.options[c].call(this, n, r, i)), y(this, oe).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, i));
      }), n;
    });
    O(this, yr, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    O(this, Oo, (n) => {
      var c, f, p, s, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: i, colName: o, cellElement: a } = r;
      if (i === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), y(this, oe).forEach((_) => {
          var l;
          (l = _.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: _ } = r, l = this.layout.visibleRows.find((u) => u.id === i);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: i, rowInfo: l, element: a, rowElement: _ })) === !0)
            return;
          for (const u of y(this, oe))
            if (((p = u.onCellClick) == null ? void 0 : p.call(this, n, { colName: o, rowID: i, rowInfo: l, element: a, rowElement: _ })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: l, element: _ })) === !0)
          return;
        for (const u of y(this, oe))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: l, element: _ })) === !0)
            return;
      }
    });
    O(this, Mo, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    T(this, nn, (r = n.id) != null ? r : `dtable-${ch(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, T(this, ct, Object.freeze(mh(n.plugins))), y(this, ct).forEach((i) => {
      var f;
      const { methods: o, data: a, state: c } = i;
      o && Object.entries(o).forEach(([p, s]) => {
        typeof s == "function" && Object.assign(this, { [p]: s.bind(this) });
      }), a && Object.assign(y(this, rn), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = i.onCreate) == null || f.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = y(this, Oe)) == null ? void 0 : n.options) || y(this, De) || Ra();
  }
  get plugins() {
    return y(this, oe);
  }
  get layout() {
    return y(this, Oe);
  }
  get id() {
    return y(this, nn);
  }
  get data() {
    return y(this, rn);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    T(this, De, void 0);
  }
  componentDidMount() {
    if (y(this, lt) ? this.forceUpdate() : te(this, gr, fs).call(this), y(this, oe).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", y(this, Oo)), this.on("keydown", y(this, Mo)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), T(this, hr, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, oe).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    y(this, lt) ? te(this, gr, fs).call(this) : y(this, oe).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = y(this, hr)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of y(this, He).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, on)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, sn)) : n.removeEventListener(i, y(this, Xe));
    y(this, oe).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), y(this, ct).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), T(this, rn, {}), y(this, He).clear();
  }
  on(n, r, i) {
    var a;
    i && (n = `${i}_${n}`);
    const o = y(this, He).get(n);
    o ? o.push(r) : (y(this, He).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, on)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, sn)) : (a = this.ref.current) == null || a.addEventListener(n, y(this, Xe)));
  }
  off(n, r, i) {
    var c;
    i && (n = `${i}_${n}`);
    const o = y(this, He).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (y(this, He).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, on)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, sn)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Xe)));
  }
  emitCustomEvent(n, r) {
    y(this, Xe).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: a, rowsHeight: c, rowHeight: f, colsInfo: { scrollWidth: p, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: _, scrollTop: l } = n;
    if (d === "up" || d === "down")
      l = o + (d === "down" ? 1 : -1) * Math.floor(c / f) * f;
    else if (d === "left" || d === "right")
      _ = i + (d === "right" ? 1 : -1) * p;
    else if (d === "home")
      l = 0;
    else if (d === "end")
      l = a - c;
    else if (d === "left-begin")
      _ = 0;
    else if (d === "right-end")
      _ = s - p;
    else {
      const { offsetLeft: m, offsetTop: h } = n;
      typeof m == "number" && (_ = i + m), typeof h == "number" && (_ = o + h);
    }
    const u = {};
    return typeof _ == "number" && (_ = Math.max(0, Math.min(_, s - p)), _ !== i && (u.scrollLeft = _)), typeof l == "number" && (l = Math.max(0, Math.min(l, a - c)), l !== o && (u.scrollTop = l)), Object.keys(u).length ? (this.setState(u, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, u), r == null || r.call(this, !0);
    }), !0) : (r == null || r.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: r, colsList: i } = this.layout;
    return typeof n == "number" ? i[n] : r[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: r, rowsMap: i } = this.layout;
    return typeof n == "number" ? r[n] : i[n];
  }
  getCellValue(n, r) {
    var f, p;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = i.id === "HEADER" ? (f = o.setting.title) != null ? f : o.setting.name : (p = i.data) == null ? void 0 : p[o.name];
    const { cellValueGetter: c } = this.options;
    return c && (a = c.call(this, i, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    if (!y(this, De))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: i, state: o } = n;
    if (i === "layout")
      T(this, Oe, void 0);
    else if (i === "options") {
      if (T(this, De, void 0), !y(this, Oe))
        return;
      T(this, Oe, void 0);
    }
    this.setState(o != null ? o : (a) => ({ renderCount: a.renderCount + 1 }), r);
  }
  getPointerInfo(n) {
    const r = n.target;
    if (!r || r.closest(".no-cell-event"))
      return;
    const i = r.closest(".dtable-cell");
    if (!i)
      return;
    const o = i.closest(".dtable-row");
    if (!o)
      return;
    const a = i == null ? void 0 : i.getAttribute("data-col"), c = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof a != "string" || typeof c != "string"))
      return {
        cellElement: i,
        rowElement: o,
        colName: a,
        rowID: c,
        target: r
      };
  }
  i18n(n, r, i) {
    var o;
    return (o = br(y(this, vr), n, r, i, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = te(this, Po, Lf).call(this), { className: r, rowHover: i, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": p
    }], _ = [];
    return n && y(this, oe).forEach((u) => {
      var h;
      const m = (h = u.onRender) == null ? void 0 : h.call(this, n);
      !m || (m.style && Object.assign(s, m.style), m.className && d.push(m.className), m.children && _.push(m.children));
    }), /* @__PURE__ */ R("div", {
      id: y(this, nn),
      className: N(d),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && te(this, ko, Of).call(this, n), n && te(this, xo, Mf).call(this, n), n && te(this, Eo, Tf).call(this, n), n && te(this, So, Rf).call(this, n));
  }
}
Nt = new WeakMap(), nn = new WeakMap(), lt = new WeakMap(), De = new WeakMap(), ct = new WeakMap(), oe = new WeakMap(), Oe = new WeakMap(), He = new WeakMap(), rn = new WeakMap(), hr = new WeakMap(), vr = new WeakMap(), Xe = new WeakMap(), on = new WeakMap(), sn = new WeakMap(), ko = new WeakSet(), Of = function(n) {
  const { header: r, colsInfo: i, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ R(hh, {
      scrollLeft: a,
      height: o,
      onRenderCell: y(this, mr),
      onRenderRow: y(this, Ao),
      ...i
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ R(Jo, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, xo = new WeakSet(), Mf = function(n) {
  const { headerHeight: r, rowsHeight: i, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ R(vh, {
    top: r,
    height: i,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: y(this, mr),
    onRenderRow: y(this, Co),
    ...c
  });
}, Eo = new WeakSet(), Tf = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const i = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ R(Jo, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, So = new WeakSet(), Rf = function(n) {
  const r = [], { scrollLeft: i, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: s, scrollWidth: d } = o, { scrollbarSize: _ = 12, horzScrollbarPos: l } = this.options;
  return s > d && r.push(
    /* @__PURE__ */ R(Ma, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: d,
      onScroll: y(this, yr),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -_) + p,
      size: _,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ R(Ma, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: y(this, yr),
      right: 0,
      size: _,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, gr = new WeakSet(), fs = function() {
  var n;
  T(this, lt, !1), (n = this.options.afterRender) == null || n.call(this), y(this, oe).forEach((r) => {
    var i;
    return (i = r.afterRender) == null ? void 0 : i.call(this);
  });
}, Co = new WeakMap(), Ao = new WeakMap(), mr = new WeakMap(), yr = new WeakMap(), Oo = new WeakMap(), Mo = new WeakMap(), To = new WeakSet(), Pf = function() {
  if (y(this, De))
    return !1;
  const r = { ...Ra(), ...y(this, ct).reduce((i, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(i, a), i;
  }, {}), ...this.props };
  return T(this, De, r), T(this, oe, y(this, ct).reduce((i, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (i.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), i;
  }, [])), T(this, vr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ro = new WeakSet(), Nf = function() {
  var be, se;
  const { plugins: n } = this;
  let r = y(this, De);
  const i = {
    flex: /* @__PURE__ */ R("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ R("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((M) => {
    var z;
    const H = (z = M.beforeLayout) == null ? void 0 : z.call(this, r);
    H && (r = { ...r, ...H }), Object.assign(i, M.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], s = [], d = {}, _ = [], l = [];
  let u = 0, m = 0, h = 0;
  r.cols.forEach((M) => {
    var jt, et, tt;
    if (M.hidden)
      return;
    const {
      name: H,
      type: z = "",
      fixed: U = !1,
      flex: ae = !1,
      width: Fe = o,
      minWidth: ue = a,
      maxWidth: St = c,
      ...Ct
    } = M, j = {
      name: H,
      type: z,
      setting: {
        name: H,
        type: z,
        fixed: U,
        flex: ae,
        width: Fe,
        minWidth: ue,
        maxWidth: St,
        ...Ct
      },
      flex: U ? 0 : ae === !0 ? 1 : typeof ae == "number" ? ae : 0,
      left: 0,
      width: Ta(Fe, ue, St),
      realWidth: 0,
      visible: !0,
      index: _.length
    };
    n.forEach((It) => {
      var ne, we;
      const nt = (ne = It.colTypes) == null ? void 0 : ne[z];
      if (nt) {
        const rt = typeof nt == "function" ? nt(j) : nt;
        rt && Object.assign(j.setting, rt);
      }
      (we = It.onAddCol) == null || we.call(this, j);
    }), j.width = Ta((jt = j.setting.width) != null ? jt : j.width, (et = j.setting.minWidth) != null ? et : ue, (tt = j.setting.maxWidth) != null ? tt : St), j.realWidth = j.realWidth || j.width, U === "left" ? (j.left = u, u += j.width, f.push(j)) : U === "right" ? (j.left = m, m += j.width, p.push(j)) : (j.left = h, h += j.width, s.push(j)), j.flex && l.push(j), _.push(j), d[j.name] = j;
  });
  let v = r.width, g = 0;
  const $ = u + h + m;
  if (typeof v == "function" && (v = v.call(this, $)), v === "auto")
    g = $;
  else if (v === "100%") {
    const { parent: M } = this;
    if (M)
      g = M.clientWidth;
    else {
      g = 0, T(this, lt, !0);
      return;
    }
  } else
    g = v != null ? v : 0;
  const { data: w, rowKey: E = "id", rowHeight: k } = r, x = [], b = (M, H, z) => {
    var ae, Fe;
    const U = { data: z != null ? z : { [E]: M }, id: M, index: x.length, top: 0 };
    if (z || (U.lazy = !0), x.push(U), ((ae = r.onAddRow) == null ? void 0 : ae.call(this, U, H)) !== !1) {
      for (const ue of n)
        if (((Fe = ue.onAddRow) == null ? void 0 : Fe.call(this, U, H)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let M = 0; M < w; M++)
      b(`${M}`, M);
  else
    Array.isArray(w) && w.forEach((M, H) => {
      var z;
      typeof M == "object" ? b(`${(z = M[E]) != null ? z : ""}`, H, M) : b(`${M != null ? M : ""}`, H);
    });
  let S = x;
  const C = {};
  if (r.onAddRows) {
    const M = r.onAddRows.call(this, S);
    M && (S = M);
  }
  for (const M of n) {
    const H = (be = M.onAddRows) == null ? void 0 : be.call(this, S);
    H && (S = H);
  }
  S.forEach((M, H) => {
    C[M.id] = M, M.index = H, M.top = M.index * k;
  });
  const { header: P, footer: W } = r, L = P ? r.headerHeight || k : 0, ee = W ? r.footerHeight || k : 0;
  let B = r.height, D = 0;
  const I = S.length * k, fe = L + ee + I;
  if (typeof B == "function" && (B = B.call(this, fe)), B === "auto")
    D = fe;
  else if (typeof B == "object")
    D = Math.min(B.max, Math.max(B.min, fe));
  else if (B === "100%") {
    const { parent: M } = this;
    if (M)
      D = M.clientHeight;
    else {
      D = 0, T(this, lt, !0);
      return;
    }
  } else
    D = B;
  const re = D - L - ee, Ce = g - u - m, _e = {
    options: r,
    allRows: x,
    width: g,
    height: D,
    rows: S,
    rowsMap: C,
    rowHeight: k,
    rowsHeight: re,
    rowsHeightTotal: I,
    header: P,
    footer: W,
    footerGenerators: i,
    headerHeight: L,
    footerHeight: ee,
    colsMap: d,
    colsList: _,
    flexCols: l,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: p,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: Ce,
      scrollColsWidth: h,
      fixedRightWidth: m
    }
  }, le = (se = r.onLayout) == null ? void 0 : se.call(this, _e);
  le && Object.assign(_e, le), n.forEach((M) => {
    if (M.onLayout) {
      const H = M.onLayout.call(this, _e);
      H && Object.assign(_e, H);
    }
  }), T(this, Oe, _e);
}, Po = new WeakSet(), Lf = function() {
  (te(this, To, Pf).call(this) || !y(this, Oe)) && te(this, Ro, Nf).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (i.length) {
    const $ = a - c;
    if ($ > 0) {
      const w = i.reduce((k, x) => k + x.flex, 0);
      let E = 0;
      i.forEach((k) => {
        const x = Math.min($ - E, Math.ceil($ * (k.flex / w)));
        k.realWidth = x + k.width, E += k.realWidth;
      });
    } else
      i.forEach((w) => {
        w.realWidth = w.width;
      });
  }
  r = Math.min(Math.max(0, c - a), r);
  let f = 0;
  o.forEach(($) => {
    $.left = f, f += $.realWidth, $.visible = $.left + $.realWidth >= r && $.left <= r + a;
  });
  const { rowsHeightTotal: p, rowsHeight: s, rows: d, rowHeight: _ } = n, l = Math.min(Math.max(0, p - s), this.state.scrollTop), u = Math.floor(l / _), m = l + s, h = Math.min(d.length, Math.ceil(m / _)), v = [], { rowDataGetter: g } = this.options;
  for (let $ = u; $ < h; $++) {
    const w = d[$];
    w.lazy && g && (w.data = g([w.id])[0], w.lazy = !1), v.push(w);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, A(cs, "addPlugin", Sf), A(cs, "removePlugin", Cf);
function Pa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((i) => i.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(r));
}
const yh = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i, o;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const r = (o = n == null ? void 0 : n.getAttribute("data-col")) != null ? o : !1;
      Pa(this, r);
    },
    mouseleave() {
      Pa(this, !1);
    }
  }
}, bh = vn(yh, { buildIn: !0 });
function wh(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: i } = this.options, o = (f, p) => {
    i && !i.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !Df.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function $h(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Df() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, o) => i + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function kh() {
  return Object.keys(this.state.checkedRows);
}
const xh = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: wh,
    isRowChecked: $h,
    isAllRowChecked: Df,
    getChecks: kh
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
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ R("div", null, r.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c, f;
    const { id: r } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, r))
      return e;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, r) : o) {
      const p = this.isRowChecked(r), s = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, r)) != null ? f : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: p
      });
      e.unshift(s), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, c;
    const { id: r } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, r) : i) {
      const f = this.isAllRowChecked(), p = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: f
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
}, Eh = vn(xh);
var Hf = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Hf || {});
function _s(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const a = _s.call(this, o);
    if (a.state !== "expanded") {
      i = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = i ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? _s.call(this, t.parent).level + 1 : 0, t;
}
function Sh(e, t) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Wf.call(this)), t) {
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
function Wf() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function jf(e, t = 0, n, r = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (i = a.children) != null && i.length && (t = jf(e, t, a.children, r + 1)));
  }
  return t;
}
function If(e, t, n, r) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    r[o] = n, If(e, o, n, r);
  }), i;
}
function Bf(e, t, n, r, i) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : i[f]);
    return n === p;
  })) && (r[t] = n), o.parent && Bf(e, o.parent, n, r, i);
}
const Ch = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, r = n.get(e.id), i = n.get(t.id);
      return (r == null ? void 0 : r.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const r = {};
      return Object.entries(t).forEach(([i, o]) => {
        const a = If(this, i, o, r);
        a != null && a.parent && Bf(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Sh,
    isAllCollapsed: Wf,
    getNestedRowInfo: _s
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, o, a, c, f;
    const { nestedMap: t } = this.data, n = (o = e.data) == null ? void 0 : o[(i = this.options.nestedParentKey) != null ? i : "parent"], r = (a = t.get(e.id)) != null ? a : {
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
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), jf(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = i.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, p;
    const { id: r, data: i } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, i)) != null ? f : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: s = o } = t.setting;
      s && (s === !0 && (s = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: s * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i, o;
    const { id: r } = t;
    return n.setting.nestedToggle && e.unshift((o = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
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
}, Ah = vn(Ch);
const Oh = {
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
        const { linkTemplate: r = "", linkProps: i } = t.setting, o = ve(r, n.data);
        return e[0] = /* @__PURE__ */ R("a", {
          href: o,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: r } = n, { avatarWithName: i, avatarClass: o = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ R("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: r ? r[a] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, a = (n - r) / 2, c = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ R("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ R("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
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
        }), /* @__PURE__ */ R("text", {
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
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: o = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: r.map((f) => {
            typeof f == "string" && (f = { action: f });
            const p = o[f.action];
            return p && (f = { className: a, ...p, ...f }), ve(i, f);
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
        const { format: r, type: i } = n, o = e[0];
        return typeof r == "function" ? e[0] = i === "html" ? { html: r(o) } : r(o) : i === "datetime" ? e[0] = is(o, r) : i === "html" ? e[0] = { html: ve(r, o) } : e[0] = ve(r, o), e;
      }
    }
  }
}, Mh = vn(Oh, { buildIn: !0 }), Th = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: r = this.options.sortLink, sortAttrs: i } = t.setting, o = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ R("div", {
          className: `dtable-sort dtable-sort-${o}`
        }),
        { outer: !0, attrs: { "data-sort": o } }
      ), r) {
        const a = typeof r == "function" ? r.call(this, t, o) : r;
        e.push(
          { tagName: "a", attrs: { href: a, ...i } }
        );
      }
    }
    return e;
  }
}, Rh = vn(Th, { buildIn: !0 }), Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: bh,
  checkable: Eh,
  NestedRowState: Hf,
  nested: Ah,
  rich: Mh,
  sortType: Rh
}, Symbol.toStringTag, { value: "Module" }));
class xn extends Pe {
}
A(xn, "NAME", "dtable"), A(xn, "Component", cs), A(xn, "definePlugin", vn), A(xn, "removePlugin", Cf), A(xn, "plugins", Ph);
var We, de;
class Nh {
  constructor(t) {
    O(this, We, void 0);
    O(this, de, void 0);
    T(this, We, t), T(this, de, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(y(this, We).parentElement.parentElement, y(this, We).parentElement), this.addActive(y(this, de).parentElement, y(this, de)), y(this, de).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    T(this, de, y(this, We)), this.addActive(y(this, de).parentElement, y(this, de)), T(this, We, document.querySelector(`[href='#${y(this, de).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${y(this, de).getAttribute("id")}']`) || document.querySelector(`[data-target='#${y(this, de).getAttribute("id")}']`)), this.addActive(y(this, We).parentElement.parentElement, y(this, We).parentElement);
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
We = new WeakMap(), de = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Nh(e.target).showTarget());
});
export {
  _i as ActionMenu,
  pi as ActionMenuNested,
  Ni as Avatar,
  Ii as BtnGroup,
  yi as Button,
  he as ContextMenu,
  xn as DTable,
  ce as Dropdown,
  ps as EventBus,
  bi as Menu,
  Ui as Nav,
  Nh as NavTabs,
  fa as Pager,
  Si as ProgressCircle,
  Ve as TIME_DAY,
  _a as Toolbar,
  je as Tooltip,
  t_ as addI18nMap,
  Wh as browser,
  ca as calculateTimestamp,
  Hh as convertBytes,
  ye as createDate,
  Dh as formatBytes,
  is as formatDate,
  Fh as formatDateSpan,
  ve as formatString,
  Qf as getLangCode,
  Vh as getTimeBeforeDesc,
  br as i18n,
  zh as isDBY,
  Vo as isObject,
  wr as isSameDay,
  Gp as isSameMonth,
  jh as isSameWeek,
  la as isSameYear,
  Ih as isToday,
  Uh as isTomorrow,
  Bh as isYesterday,
  Ko as mergeDeep,
  Xo as nativeEvents,
  e_ as setLangCode,
  T_ as store
};
