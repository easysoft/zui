var Ba = Object.defineProperty;
var za = (e, n, t) => n in e ? Ba(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var v = (e, n, t) => (za(e, typeof n != "symbol" ? n + "" : n, t), t), eo = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (eo(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, R = (e, n, t, s) => (eo(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), gr = (e, n, t, s) => ({
  set _(i) {
    R(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), k = (e, n, t) => (eo(e, n, "access private method"), t);
var Fi, j, ml, st, fe, yr, gl, go, Es = {}, yl = [], Fa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Po = Array.isArray;
function Qt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function _l(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function yt(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Fi.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return gs(e, r, s, i, null);
}
function gs(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ml };
  return i == null && j.vnode != null && j.vnode(o), o;
}
function Ee() {
  return { current: null };
}
function Ui(e) {
  return e.children;
}
function z(e, n) {
  this.props = e, this.context = n;
}
function Cn(e, n) {
  if (n == null)
    return e.__ ? Cn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? Cn(e) : null;
}
function bl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return bl(e);
  }
}
function _r(e) {
  (!e.__d && (e.__d = !0) && fe.push(e) && !Cs.__r++ || yr !== j.debounceRendering) && ((yr = j.debounceRendering) || gl)(Cs);
}
function Cs() {
  var e, n, t, s, i, o, r, l;
  for (fe.sort(go); e = fe.shift(); )
    e.__d && (n = fe.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = Qt({}, o)).__v = o.__v + 1, Io(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Cn(o), o.__h), El(s, o), o.__e != r && bl(o)), fe.length > n && fe.sort(go));
  Cs.__r = 0;
}
function wl(e, n, t, s, i, o, r, l, a, u) {
  var c, h, f, d, m, g, y, b = s && s.__k || yl, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((d = t.__k[c] = (d = n[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? gs(null, d, null, null, d) : Po(d) ? gs(Ui, { children: d }, null, null, null) : d.__b > 0 ? gs(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = b[c]) === null || f && d.key == f.key && d.type === f.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      Io(e, d, f = f || Es, i, o, r, l, a, u), m = d.__e, (h = d.ref) && f.ref != h && (y || (y = []), f.ref && y.push(f.ref, null, d), y.push(h, d.__c || m, d)), m != null ? (g == null && (g = m), typeof d.type == "function" && d.__k === f.__k ? d.__d = a = vl(d, a, e) : a = xl(e, d, f, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && f.__e == a && a.parentNode != e && (a = Cn(f));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && (typeof t.type == "function" && b[c].__e != null && b[c].__e == t.__d && (t.__d = Sl(s).nextSibling), kl(b[c], b[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      Cl(y[c], y[++c], y[++c]);
}
function vl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? vl(s, n, t) : xl(t, s, s, i, s.__e, n));
  return n;
}
function xl(e, n, t, s, i, o) {
  var r, l, a;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (l = o, a = 0; (l = l.nextSibling) && a < s.length; a += 1)
          if (l == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function Sl(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = Sl(t)))
        return s;
  }
  return null;
}
function Ua(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || ks(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || ks(e, o, n[o], t[o], s);
}
function br(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || Fa.test(n) ? t : t + "px";
}
function ks(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || br(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || br(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? vr : wr, o) : e.removeEventListener(n, o ? vr : wr, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in e)
        try {
          e[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function wr(e) {
  return this.l[e.type + !1](j.event ? j.event(e) : e);
}
function vr(e) {
  return this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Io(e, n, t, s, i, o, r, l, a) {
  var u, c, h, f, d, m, g, y, b, x, E, T, A, N, D, L = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = j.__b) && u(n);
  try {
    t:
      if (typeof L == "function") {
        if (y = n.props, b = (u = L.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in L && L.prototype.render ? n.__c = c = new L(y, x) : (n.__c = c = new z(y, x), c.constructor = L, c.render = qa), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Qt({}, c.__s)), Qt(c.__s, L.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, c.__v = n, h)
          L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && y !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, m);
          });
        }
        if (c.context = x, c.props = y, c.__P = e, T = j.__r, A = 0, "prototype" in L && L.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = Qt(Qt({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, d)), wl(e, Po(D = u != null && u.type === Ui && u.key == null ? u.props.children : u) ? D : [D], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Va(t.__e, n, t, s, i, o, r, a);
    (u = j.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), j.__e(I, n, t);
  }
}
function El(e, n) {
  j.__c && j.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      j.__e(s, t.__v);
    }
  });
}
function Va(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, f = n.props, d = n.type, m = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, l = !1;
  }
  if (d === null)
    h === f || l && e.data === f || (e.data = f);
  else {
    if (o = o && Fi.call(e.childNodes), u = (h = t.props || Es).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Ua(e, f, h, i, l), c)
      n.__k = [];
    else if (wl(e, Po(m = n.props.children) ? m : [m], n, t, s, i && d !== "foreignObject", o, r, o ? o[0] : t.__k && Cn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && _l(o[m]);
    l || ("value" in f && (m = f.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== h.value) && ks(e, "value", m, h.value, !1), "checked" in f && (m = f.checked) !== void 0 && m !== e.checked && ks(e, "checked", m, h.checked, !1));
  }
  return e;
}
function Cl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    j.__e(s, t);
  }
}
function kl(e, n, t) {
  var s, i;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Cl(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        j.__e(o, n);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && kl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || _l(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qa(e, n, t) {
  return this.constructor(e, t);
}
function Ho(e, n, t) {
  var s, i, o;
  j.__ && j.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], Io(n, e = (!s && t || n).__k = yt(Ui, null, [e]), i || Es, Es, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? Fi.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), El(o, e);
}
Fi = yl.slice, j = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ml = 0, st = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qt({}, this.state), typeof e == "function" && (e = e(Qt({}, t), this.props)), e && Qt(t, e), e != null && this.__v && (n && this._sb.push(n), _r(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _r(this));
}, z.prototype.render = Ui, fe = [], gl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, go = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Cs.__r = 0;
var Ga = 0;
function _(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var u = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ga, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return j.vnode && j.vnode(u), u;
}
var Pt;
class Ya {
  constructor(n = "") {
    w(this, Pt, void 0);
    typeof n == "object" ? R(this, Pt, n) : R(this, Pt, document.appendChild(document.createComment(n)));
  }
  on(n, t, s) {
    p(this, Pt).addEventListener(n, t, s);
  }
  once(n, t, s) {
    p(this, Pt).addEventListener(n, t, { once: !0, ...s });
  }
  off(n, t, s) {
    p(this, Pt).removeEventListener(n, t, s);
  }
  emit(n) {
    return p(this, Pt).dispatchEvent(n), n;
  }
}
Pt = new WeakMap();
const yo = /* @__PURE__ */ new Set([
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
class Wo extends Ya {
  on(n, t, s) {
    super.on(n, t, s);
  }
  off(n, t, s) {
    super.off(n, t, s);
  }
  once(n, t, s) {
    super.once(n, t, s);
  }
  emit(n, t) {
    return typeof n == "string" && (yo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(Wo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (yo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var It, Nn, pe, un;
class xr extends Wo {
  constructor(t = "", s) {
    super(t);
    w(this, pe);
    w(this, It, /* @__PURE__ */ new Map());
    w(this, Nn, void 0);
    R(this, Nn, s == null ? void 0 : s.customEventSuffix);
  }
  on(t, s, i) {
    t = k(this, pe, un).call(this, t), super.on(t, s, i), p(this, It).set(s, [t, i]);
  }
  off(t, s, i) {
    t = k(this, pe, un).call(this, t), super.off(t, s, i), p(this, It).delete(s);
  }
  once(t, s, i) {
    t = k(this, pe, un).call(this, t);
    const o = (r) => {
      s(r), p(this, It).delete(o);
    };
    super.once(t, o, i), p(this, It).set(o, [t, i]);
  }
  emit(t, s) {
    return typeof t == "string" && (t = k(this, pe, un).call(this, t)), super.emit(t, s);
  }
  offAll() {
    Array.from(p(this, It).entries()).forEach(([t, [s, i]]) => {
      super.off(s, t, i);
    }), p(this, It).clear();
  }
}
It = new WeakMap(), Nn = new WeakMap(), pe = new WeakSet(), un = function(t) {
  const s = p(this, Nn);
  return yo.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
function Xa(e, n) {
  if (e == null)
    return [e, void 0];
  typeof n == "string" && (n = n.split("."));
  const t = n.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && n.length; ) {
    let o = n.shift(), r;
    const l = o.indexOf("[");
    if (l > 0 && l < o.length - 1 && o.endsWith("]") && (r = o.substring(l + 1, o.length - 1), o = o.substring(0, l)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${t}".`);
  return i;
}
function Ka(e, n, t) {
  try {
    const s = Xa(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function no(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function _o(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (no(e) && no(t))
    for (const s in t)
      no(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), _o(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return _o(e, ...n);
}
function rt(e, ...n) {
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const t = n[0];
    return Object.keys(t).forEach((s) => {
      const i = t[s] ?? 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let t = 0; t < n.length; t++) {
    const s = n[t] ?? "";
    e = e.replace(new RegExp(`\\{${t}\\}`, "g"), `${s}`);
  }
  return e;
}
var jo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(jo || {});
function Jf(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / jo[t]).toFixed(n) + t);
}
const Zf = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * jo[s];
};
let Bo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), qt;
function Ja() {
  return Bo;
}
function Za(e) {
  Bo = e.toLowerCase();
}
function $l(e, n) {
  qt || (qt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), _o(qt, e);
}
function ie(e, n, t, s, i, o) {
  Array.isArray(e) ? qt && e.unshift(qt) : e = qt ? [qt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Bo;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const u = a[r];
    if (!u)
      continue;
    const c = o && a === qt ? `${o}.${n}` : n;
    if (l = Ka(u, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? rt(l, ...Array.isArray(t) ? t : [t]) : l;
}
function Rl(e, n, t, s) {
  return ie(void 0, e, n, t, s);
}
ie.addLang = $l;
ie.getLang = Rl;
ie.getCode = Ja;
ie.setCode = Za;
$l({
  zh_cn: {
    confirm: "确定",
    cancel: "取消",
    delete: "删除",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    cancel: "取消",
    delete: "刪除",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    delete: "Delete",
    add: "Add"
  }
});
const Bt = document, $s = window, Tl = Bt.documentElement, Ce = Bt.createElement.bind(Bt), Al = Ce("div"), so = Ce("table"), Qa = Ce("tbody"), Sr = Ce("tr"), { isArray: Vi, prototype: Nl } = Array, { concat: th, filter: zo, indexOf: Ll, map: Ml, push: eh, slice: Dl, some: Fo, splice: nh } = Nl, sh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ih = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, oh = /<.+>/, rh = /^\w+$/;
function Uo(e, n) {
  const t = lh(n);
  return !e || !t && !ve(n) && !G(n) ? [] : !t && ih.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && rh.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class qi {
  constructor(n, t) {
    if (!n)
      return;
    if (bo(n))
      return n;
    let s = n;
    if (J(n)) {
      const i = t || Bt;
      if (s = sh.test(n) && ve(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : oh.test(n) ? Il(n) : bo(i) ? i.find(n) : J(i) ? S(i).find(n) : Uo(n, i), !s)
        return;
    } else if (ke(n))
      return this.ready(n);
    (s.nodeType || s === $s) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new qi(n, t);
  }
}
const C = qi.prototype, S = C.init;
S.fn = S.prototype = C;
C.length = 0;
C.splice = nh;
typeof Symbol == "function" && (C[Symbol.iterator] = Nl[Symbol.iterator]);
function bo(e) {
  return e instanceof qi;
}
function on(e) {
  return !!e && e === e.window;
}
function ve(e) {
  return !!e && e.nodeType === 9;
}
function lh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function ch(e) {
  return !!e && e.nodeType === 3;
}
function ah(e) {
  return typeof e == "boolean";
}
function ke(e) {
  return typeof e == "function";
}
function J(e) {
  return typeof e == "string";
}
function lt(e) {
  return e === void 0;
}
function kn(e) {
  return e === null;
}
function Ol(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Vo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
S.isWindow = on;
S.isFunction = ke;
S.isArray = Vi;
S.isNumeric = Ol;
S.isPlainObject = Vo;
function X(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Vo(e)) {
    const s = Object.keys(e);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (n.call(e[r], r, e[r]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
S.each = X;
C.each = function(e) {
  return X(this, e);
};
C.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Rs(...e) {
  const n = ah(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return Rs(n, S, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (Vi(o[r]) || Vo(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Rs(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
S.extend = Rs;
C.extend = function(e) {
  return Rs(C, e);
};
const hh = /\S+/g;
function Gi(e) {
  return J(e) ? e.match(hh) || [] : [];
}
C.toggleClass = function(e, n) {
  const t = Gi(e), s = !lt(n);
  return this.each((i, o) => {
    G(o) && X(t, (r, l) => {
      s ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
C.addClass = function(e) {
  return this.toggleClass(e, !0);
};
C.removeAttr = function(e) {
  const n = Gi(e);
  return this.each((t, s) => {
    G(s) && X(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function uh(e, n) {
  if (e) {
    if (J(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return kn(t) ? void 0 : t;
      }
      return lt(n) ? this : kn(n) ? this.removeAttr(e) : this.each((t, s) => {
        G(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
C.attr = uh;
C.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
C.hasClass = function(e) {
  return !!e && Fo.call(this, (n) => G(n) && n.classList.contains(e));
};
C.get = function(e) {
  return lt(e) ? Dl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
C.eq = function(e) {
  return S(this.get(e));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function fh(e) {
  return lt(e) ? this.get().map((n) => G(n) || ch(n) ? n.textContent : "").join("") : this.each((n, t) => {
    G(t) && (t.textContent = e);
  });
}
C.text = fh;
function zt(e, n, t) {
  if (!G(e))
    return;
  const s = $s.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function $t(e, n) {
  return parseInt(zt(e, n), 10) || 0;
}
function Er(e, n) {
  return $t(e, `border${n ? "Left" : "Top"}Width`) + $t(e, `padding${n ? "Left" : "Top"}`) + $t(e, `padding${n ? "Right" : "Bottom"}`) + $t(e, `border${n ? "Right" : "Bottom"}Width`);
}
const io = {};
function dh(e) {
  if (io[e])
    return io[e];
  const n = Ce(e);
  Bt.body.insertBefore(n, null);
  const t = zt(n, "display");
  return Bt.body.removeChild(n), io[e] = t !== "none" ? t : "block";
}
function Cr(e) {
  return zt(e, "display") === "none";
}
function Pl(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function Yi(e) {
  return J(e) ? (n, t) => Pl(t, e) : ke(e) ? e : bo(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
C.filter = function(e) {
  const n = Yi(e);
  return S(zo.call(this, (t, s) => n.call(t, s, t)));
};
function le(e, n) {
  return n ? e.filter(n) : e;
}
C.detach = function(e) {
  return le(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const ph = /^\s*<(\w+)[^>]*>/, mh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, kr = {
  "*": Al,
  tr: Qa,
  td: Sr,
  th: Sr,
  thead: so,
  tbody: so,
  tfoot: so
};
function Il(e) {
  if (!J(e))
    return [];
  if (mh.test(e))
    return [Ce(RegExp.$1)];
  const n = ph.test(e) && RegExp.$1, t = kr[n] || kr["*"];
  return t.innerHTML = e, S(t.childNodes).detach().get();
}
S.parseHTML = Il;
C.has = function(e) {
  const n = J(e) ? (t, s) => Uo(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
C.not = function(e) {
  const n = Yi(e);
  return this.filter((t, s) => (!J(e) || G(s)) && !n.call(s, t, s));
};
function Vt(e, n, t, s) {
  const i = [], o = ke(n), r = s && Yi(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const u = n(e[l]);
      u.length && eh.apply(i, u);
    } else {
      let u = e[l][n];
      for (; u != null && !(s && r(-1, u)); )
        i.push(u), u = t ? u[n] : null;
    }
  return i;
}
function Hl(e) {
  return e.multiple && e.options ? Vt(zo.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function gh(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || ql.test(t.type)) {
      const i = Vi(e) ? Ml.call(e, String) : kn(e) ? [] : [String(e)];
      s ? X(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = lt(e) || kn(e) ? "" : e;
  }) : this[0] && Hl(this[0]);
}
C.val = gh;
C.is = function(e) {
  const n = Yi(e);
  return Fo.call(this, (t, s) => n.call(t, s, t));
};
S.guid = 1;
function Lt(e) {
  return e.length > 1 ? zo.call(e, (n, t, s) => Ll.call(s, n) === t) : e;
}
S.unique = Lt;
C.add = function(e, n) {
  return S(Lt(this.get().concat(S(e, n).get())));
};
C.children = function(e) {
  return le(S(Lt(Vt(this, (n) => n.children))), e);
};
C.parent = function(e) {
  return le(S(Lt(Vt(this, "parentNode"))), e);
};
C.index = function(e) {
  const n = e ? S(e)[0] : this[0], t = e ? this : S(n).parent().children();
  return Ll.call(t, n);
};
C.closest = function(e) {
  const n = this.filter(e);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(e) : n;
};
C.siblings = function(e) {
  return le(S(Lt(Vt(this, (n) => S(n).parent().children().not(n)))), e);
};
C.find = function(e) {
  return S(Lt(Vt(this, (n) => Uo(e, n))));
};
const yh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _h = /^$|^module$|\/(java|ecma)script/i, bh = ["type", "src", "nonce", "noModule"];
function wh(e, n) {
  const t = S(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (_h.test(i.type) && Tl.contains(i)) {
      const o = Ce("script");
      o.text = i.textContent.replace(yh, ""), X(bh, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function vh(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && wh(n, e.ownerDocument);
}
function ce(e, n, t, s, i, o, r, l) {
  return X(e, (a, u) => {
    X(S(u), (c, h) => {
      X(S(n), (f, d) => {
        const m = t ? h : d, g = t ? d : h, y = t ? c : f;
        vh(m, y ? g.cloneNode(!0) : g, s, i, !y);
      }, l);
    }, r);
  }, o), n;
}
C.after = function() {
  return ce(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return ce(arguments, this, !1, !1, !0);
};
function xh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (lt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    G(s) && (n ? S(s).empty().append(e) : s.innerHTML = e);
  });
}
C.html = xh;
C.appendTo = function(e) {
  return ce(arguments, this, !0, !1, !0);
};
C.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = S(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
C.before = function() {
  return ce(arguments, this, !1, !0);
};
C.wrapAll = function(e) {
  let n = S(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
C.wrap = function(e) {
  return this.each((n, t) => {
    const s = S(e)[0];
    S(t).wrapAll(n ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(e) {
  return ce(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(e) {
  return ce(arguments, this, !0, !0);
};
C.prepend = function() {
  return ce(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(e) {
  return ce(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return S(Lt(Vt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
C.next = function(e, n, t) {
  return le(S(Lt(Vt(this, "nextElementSibling", n, t))), e);
};
C.nextAll = function(e) {
  return this.next(e, !0);
};
C.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
C.parents = function(e, n) {
  return le(S(Lt(Vt(this, "parentElement", !0, n))), e);
};
C.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
C.prev = function(e, n, t) {
  return le(S(Lt(Vt(this, "previousElementSibling", n, t))), e);
};
C.prevAll = function(e) {
  return this.prev(e, !0);
};
C.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
C.map = function(e) {
  return S(th.apply([], Ml.call(this, (n, t) => e.call(n, t, n))));
};
C.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && zt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Tl;
  });
};
C.slice = function(e, n) {
  return S(Dl.call(this, e, n));
};
const Sh = /-([a-z])/g;
function qo(e) {
  return e.replace(Sh, (n, t) => t.toUpperCase());
}
C.ready = function(e) {
  const n = () => setTimeout(e, 0, S);
  return Bt.readyState !== "loading" ? n() : Bt.addEventListener("DOMContentLoaded", n), this;
};
C.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = S(n);
    t.replaceWith(t.children());
  }), this;
};
C.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const n = e.getBoundingClientRect();
  return {
    top: n.top + $s.pageYOffset,
    left: n.left + $s.pageXOffset
  };
};
C.position = function() {
  const e = this[0];
  if (!e)
    return;
  const n = zt(e, "position") === "fixed", t = n ? e.getBoundingClientRect() : this.offset();
  if (!n) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const o = S(i).offset();
      t.top -= o.top + $t(i, "borderTopWidth"), t.left -= o.left + $t(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - $t(e, "marginTop"),
    left: t.left - $t(e, "marginLeft")
  };
};
const Wl = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
C.prop = function(e, n) {
  if (e) {
    if (J(e))
      return e = Wl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
C.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[Wl[e] || e];
  });
};
const Eh = /^--/;
function Go(e) {
  return Eh.test(e);
}
const oo = {}, { style: Ch } = Al, kh = ["webkit", "moz", "ms"];
function $h(e, n = Go(e)) {
  if (n)
    return e;
  if (!oo[e]) {
    const t = qo(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${kh.join(`${s} `)}${s}`.split(" ");
    X(i, (o, r) => {
      if (r in Ch)
        return oo[e] = r, !1;
    });
  }
  return oo[e];
}
const Rh = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function jl(e, n, t = Go(e)) {
  return !t && !Rh[e] && Ol(n) ? `${n}px` : n;
}
function Th(e, n) {
  if (J(e)) {
    const t = Go(e);
    return e = $h(e, t), arguments.length < 2 ? this[0] && zt(this[0], e, t) : e ? (n = jl(e, n, t), this.each((s, i) => {
      G(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
C.css = Th;
function Bl(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const Ah = /^\s+|\s+$/;
function $r(e, n) {
  const t = e.dataset[n] || e.dataset[qo(n)];
  return Ah.test(t) ? t : Bl(JSON.parse, t);
}
function Nh(e, n, t) {
  t = Bl(JSON.stringify, t), e.dataset[qo(n)] = t;
}
function Lh(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = $r(this[0], s);
    return t;
  }
  if (J(e))
    return arguments.length < 2 ? this[0] && $r(this[0], e) : lt(n) ? this : this.each((t, s) => {
      Nh(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
C.data = Lh;
function zl(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
X([!0, !1], (e, n) => {
  X(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    C[i] = function(o) {
      if (this[0])
        return on(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ve(this[0]) ? zl(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? $t(this[0], `margin${t ? "Top" : "Left"}`) + $t(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
X(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  C[t] = function(s) {
    if (!this[0])
      return lt(s) ? void 0 : this;
    if (!arguments.length)
      return on(this[0]) ? this[0].document.documentElement[`client${n}`] : ve(this[0]) ? zl(this[0], n) : this[0].getBoundingClientRect()[t] - Er(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const l = zt(r, "boxSizing");
      r.style[t] = jl(t, i + (l === "border-box" ? Er(r, !e) : 0));
    });
  };
});
const Rr = "___cd";
C.toggle = function(e) {
  return this.each((n, t) => {
    if (!G(t))
      return;
    const s = Cr(t);
    (lt(e) ? s : e) ? (t.style.display = t[Rr] || "", Cr(t) && (t.style.display = dh(t.tagName))) : s || (t[Rr] = zt(t, "display"), t.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Tr = "___ce", Yo = ".", Xo = { focus: "focusin", blur: "focusout" }, Fl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Mh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ko(e) {
  return Fl[e] || Xo[e] || e;
}
function Jo(e) {
  const n = e.split(Yo);
  return [n[0], n.slice(1).sort()];
}
C.trigger = function(e, n) {
  if (J(e)) {
    const [s, i] = Jo(e), o = Ko(s);
    if (!o)
      return this;
    const r = Mh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Bt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Yo), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in Xo;
  return this.each((s, i) => {
    t && ke(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Ul(e) {
  return e[Tr] = e[Tr] || {};
}
function Dh(e, n, t, s, i) {
  const o = Ul(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function Vl(e, n) {
  return !n || !Fo.call(n, (t) => e.indexOf(t) < 0);
}
function Ts(e, n, t, s, i) {
  const o = Ul(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Vl(r, t) || s && s !== l)
        return !0;
      e.removeEventListener(n, a);
    }));
  else
    for (n in o)
      Ts(e, n, t, s, i);
}
C.off = function(e, n, t) {
  if (lt(e))
    this.each((s, i) => {
      !G(i) && !ve(i) && !on(i) || Ts(i);
    });
  else if (J(e))
    ke(n) && (t = n, n = ""), X(Gi(e), (s, i) => {
      const [o, r] = Jo(i), l = Ko(o);
      this.each((a, u) => {
        !G(u) && !ve(u) && !on(u) || Ts(u, l, r, n, t);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
C.remove = function(e) {
  return le(this, e).detach().off(), this;
};
C.replaceWith = function(e) {
  return this.before(e).remove();
};
C.replaceAll = function(e) {
  return S(e).replaceWith(this), this;
};
function Oh(e, n, t, s, i) {
  if (!J(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return J(n) || (lt(n) || kn(n) ? n = "" : lt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), ke(s) || (s = t, t = void 0), s ? (X(Gi(e), (o, r) => {
    const [l, a] = Jo(r), u = Ko(l), c = l in Fl, h = l in Xo;
    u && this.each((f, d) => {
      if (!G(d) && !ve(d) && !on(d))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Vl(a, g.namespace.split(Yo)) || !n && (h && (g.target !== d || g.___ot === u) || c && g.relatedTarget && d.contains(g.relatedTarget)))
          return;
        let y = d;
        if (n) {
          let x = g.target;
          for (; !Pl(x, n); )
            if (x === d || (x = x.parentNode, !x))
              return;
          y = x;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return d;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const b = s.call(y, g, g.___td);
        i && Ts(d, u, a, n, m), b === !1 && (g.preventDefault(), g.stopPropagation());
      };
      m.guid = s.guid = s.guid || S.guid++, Dh(d, u, a, n, m);
    });
  }), this) : this;
}
C.on = Oh;
function Ph(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
C.one = Ph;
const Ih = /\r?\n/g;
function Hh(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(Ih, `\r
`))}`;
}
const Wh = /file|reset|submit|button|image/i, ql = /radio|checkbox/i;
C.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    X(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Wh.test(i.type) || ql.test(i.type) && !i.checked)
        return;
      const o = Hl(i);
      if (!lt(o)) {
        const r = Vi(o) ? o : [o];
        X(r, (l, a) => {
          e += Hh(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = S;
function Gl(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Gl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const M = (...e) => Gl(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
S.classes = M;
S.fn.setClass = function(e, ...n) {
  return this.each((t, s) => {
    const i = S(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...n)) : i.addClass(M(e, ...n));
  });
};
const fn = /* @__PURE__ */ new WeakMap();
function jh(e, n, t) {
  const s = fn.has(e), i = s ? fn.get(e) : {};
  typeof n == "string" ? i[n] = t : Object.assign(i, n), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, S(e).dataset(), i), fn.set(e, i)) : fn.delete(e);
}
function Bh(e, n) {
  let t = fn.get(e);
  return !t && e instanceof Element && (t = S(e).dataset()), n === void 0 ? t || {} : t == null ? void 0 : t[n];
}
S.fn.dataset = S.fn.data;
S.fn.data = function(e, n) {
  return n === void 0 && typeof e != "object" ? this.length ? Bh(this[0], e) : void 0 : this.each((t, s) => jh(s, e, n));
};
S.fn._attr = S.fn.attr;
S.fn.extend({
  attr(...e) {
    const [n, t] = e;
    return !e.length || e.length === 1 && typeof n == "string" ? this._attr.apply(this, e) : typeof n == "object" ? (n && Object.keys(n).forEach((s) => {
      const i = n[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : t === null ? this.removeAttr(n) : this._attr(n, t);
  }
});
function Yl(e) {
  const n = S(e)[0];
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  const t = window.getSelection;
  if (t) {
    const s = t();
    if (s) {
      const i = document.createRange();
      return i.selectNodeContents(n), s.removeAllRanges(), s.addRange(i), !0;
    }
  }
  return !1;
}
S.fn.selectText = function() {
  return this.each((e, n) => {
    Yl(n);
  });
};
function Xl(e, n) {
  const t = S(e)[0];
  if (!t)
    return !1;
  const { left: s, top: i, width: o, height: r } = t.getBoundingClientRect(), { innerHeight: l, innerWidth: a } = window, { clientHeight: u, clientWidth: c } = document.documentElement, h = l || u, f = a || c;
  if (n != null && n.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= f && i + r <= h;
  const d = i <= h && i + r >= 0, m = s <= f && s + o >= 0;
  return d && m;
}
S.fn.isVisible = function(e) {
  return this.each((n, t) => {
    Xl(t, e);
  });
};
function Zo(e, n) {
  const t = S(e);
  if (n !== void 0) {
    t.append(`<script>${n}<\/script>`);
    return;
  }
  t.find("script").each((s, i) => {
    Zo(t, i.innerHTML), i.remove();
  });
}
S.fn.runJS = function(e) {
  return this.each((n, t) => {
    Zo(t, e);
  });
};
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Xl,
  runJS: Zo,
  selectText: Yl
}, Symbol.toStringTag, { value: "Module" }));
var Kl = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, Kl(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, Ar = /* @__PURE__ */ new Map();
function zh(e) {
  var n = Ar.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Ar.set(this, n)), (n = Kl(this, n.get(e) || (n.set(e, n = function(t) {
    for (var s, i, o = 1, r = "", l = "", a = [0], u = function(f) {
      o === 1 && (f || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, f, r) : o === 3 && (f || r) ? (a.push(3, f, r), o = 2) : o === 2 && r === "..." && f ? a.push(4, f, 0) : o === 2 && r && !f ? a.push(5, 0, !0, r) : o >= 5 && ((r || !f && o === 5) && (a.push(o, 0, r, i), o = 6), f && (a.push(o, f, 0, i), o = 6)), r = "";
    }, c = 0; c < t.length; c++) {
      c && (o === 1 && u(), u(c));
      for (var h = 0; h < t[c].length; h++)
        s = t[c][h], o === 1 ? s === "<" ? (u(), a = [a], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : l ? s === l ? l = "" : r += s : s === '"' || s === "'" ? l = s : s === ">" ? (u(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[c][h + 1] === ">") ? (u(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (u(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, a = a[0]);
    }
    return u(), a;
  }(e)), n), arguments, [])).length > 1 ? n : n[0];
}
const td = zh.bind(yt);
function Fh(e) {
  const { tagName: n = "div", class: t, className: s, style: i, children: o, attrs: r, ...l } = e;
  return yt(n, { class: M(t, s), style: i, ...l, ...r }, o);
}
var Ln;
class Jl extends z {
  constructor() {
    super(...arguments);
    w(this, Ln, Ee());
  }
  componentDidMount() {
    this.props.executeScript && S(p(this, Ln).current).runJS();
  }
  render(t) {
    const { executeScript: s, html: i, ...o } = t;
    return /* @__PURE__ */ _(Fh, { ref: p(this, Ln), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Ln = new WeakMap();
const ro = /* @__PURE__ */ new Map();
var bt, Oe, dt;
class At {
  constructor(n, t) {
    w(this, bt, void 0);
    w(this, Oe, void 0);
    w(this, dt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && R(this, dt, new xr(n, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, bt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? S(n).dataset() : null, ...t }), this.constructor.all.set(n, this), R(this, Oe, n), n.setAttribute("data-zui", this.constructor.NAME), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, bt);
  }
  get element() {
    return p(this, Oe);
  }
  get events() {
    return p(this, dt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(n) {
    return n && Object.assign(p(this, bt), n), p(this, bt);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(p(this, Oe)), p(this, dt) && (this.emit("destroyed", this), p(this, dt).offAll());
  }
  on(n, t, s) {
    var i;
    (i = p(this, dt)) == null || i.on(n, t, s);
  }
  once(n, t, s) {
    var i;
    (i = p(this, dt)) == null || i.once(n, t, s);
  }
  off(n, t, s) {
    var i;
    (i = p(this, dt)) == null || i.off(n, t, s);
  }
  emit(n, t, s) {
    var o;
    let i = xr.createEvent(n, t);
    if (s !== !1) {
      const r = s || `on${n[0].toUpperCase()}${n.substring(1)}`, l = p(this, bt)[r];
      l && l(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (o = p(this, dt)) == null ? void 0 : o.emit(n, t), i;
  }
  i18n(n, t, s) {
    return ie(p(this, bt).i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? ie(p(this, bt).i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  /**
   * Component internal name, like "Menu"
   */
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const n = this.NAME;
    if (ro.has(n))
      return ro.get(n);
    const t = /* @__PURE__ */ new Map();
    return ro.set(n, t), t;
  }
  static getAll() {
    return this.all;
  }
  static get(n) {
    return this.all.get(n);
  }
  static ensure(n, t) {
    return this.get(n) || new this(n, t);
  }
  static query(n) {
    if (n === void 0)
      return [...this.getAll().values()].pop();
    if (typeof n == "string" && (n = document.querySelector(n)), !!n)
      return n = n.closest(`[data-zui="${this.NAME}"]`), n ? this.get(n) : void 0;
  }
}
bt = new WeakMap(), Oe = new WeakMap(), dt = new WeakMap(), v(At, "EVENTS", !1), v(At, "DEFAULT", {});
class K extends At {
  constructor() {
    super(...arguments);
    v(this, "ref", Ee());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  destroy() {
    super.destroy(), this.element.innerHTML = "";
  }
  render(t) {
    const s = this.constructor.Component;
    Ho(/* @__PURE__ */ _(s, { ref: this.ref, ...this.setOptions(t) }), this.element);
  }
}
v(K, "Component");
var Qo, B, Zl, Ql, yn, Nr, tc = {}, ec = [], Uh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function nc(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ln(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Qo.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ys(e, r, s, i, null);
}
function ys(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zl };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function Vh() {
  return { current: null };
}
function tr(e) {
  return e.children;
}
function _n(e, n) {
  this.props = e, this.context = n;
}
function $n(e, n) {
  if (n == null)
    return e.__ ? $n(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? $n(e) : null;
}
function sc(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return sc(e);
  }
}
function Lr(e) {
  (!e.__d && (e.__d = !0) && yn.push(e) && !As.__r++ || Nr !== B.debounceRendering) && ((Nr = B.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var e; As.__r = yn.length; )
    e = yn.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), yn = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = te({}, o)).__v = o.__v + 1, lc(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? $n(o), o.__h), Gh(s, o), o.__e != r && sc(o)));
    });
}
function ic(e, n, t, s, i, o, r, l, a, u) {
  var c, h, f, d, m, g, y, b = s && s.__k || ec, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((d = t.__k[c] = (d = n[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ys(null, d, null, null, d) : Array.isArray(d) ? ys(tr, { children: d }, null, null, null) : d.__b > 0 ? ys(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = b[c]) === null || f && d.key == f.key && d.type === f.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      lc(e, d, f = f || tc, i, o, r, l, a, u), m = d.__e, (h = d.ref) && f.ref != h && (y || (y = []), f.ref && y.push(f.ref, null, d), y.push(h, d.__c || m, d)), m != null ? (g == null && (g = m), typeof d.type == "function" && d.__k === f.__k ? d.__d = a = oc(d, a, e) : a = rc(e, d, f, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && f.__e == a && a.parentNode != e && (a = $n(f));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && ac(b[c], b[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      cc(y[c], y[++c], y[++c]);
}
function oc(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? oc(s, n, t) : rc(t, s, s, i, s.__e, n));
  return n;
}
function rc(e, n, t, s, i, o) {
  var r, l, a;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (l = o, a = 0; (l = l.nextSibling) && a < s.length; a += 2)
          if (l == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function qh(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ns(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ns(e, o, n[o], t[o], s);
}
function Mr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Uh.test(n) ? t : t + "px";
}
function Ns(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Mr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Mr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Or : Dr, o) : e.removeEventListener(n, o ? Or : Dr, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e)
        try {
          e[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n.indexOf("-") == -1 ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function Dr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function Or(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function lc(e, n, t, s, i, o, r, l, a) {
  var u, c, h, f, d, m, g, y, b, x, E, T, A, N, D, L = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = B.__b) && u(n);
  try {
    t:
      if (typeof L == "function") {
        if (y = n.props, b = (u = L.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in L && L.prototype.render ? n.__c = c = new L(y, x) : (n.__c = c = new _n(y, x), c.constructor = L, c.render = Xh), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, L.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, h)
          L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && y !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, m);
          });
        }
        if (c.context = x, c.props = y, c.__v = n, c.__P = e, T = B.__r, A = 0, "prototype" in L && L.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = te(te({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, d)), D = u != null && u.type === tr && u.key == null ? u.props.children : u, ic(e, Array.isArray(D) ? D : [D], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Yh(t.__e, n, t, s, i, o, r, a);
    (u = B.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), B.__e(I, n, t);
  }
}
function Gh(e, n) {
  B.__c && B.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      B.__e(s, t.__v);
    }
  });
}
function Yh(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, f = n.props, d = n.type, m = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, l = !1;
  }
  if (d === null)
    h === f || l && e.data === f || (e.data = f);
  else {
    if (o = o && Qo.call(e.childNodes), u = (h = t.props || tc).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (qh(e, f, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, ic(e, Array.isArray(m) ? m : [m], n, t, s, i && d !== "foreignObject", o, r, o ? o[0] : t.__k && $n(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && nc(o[m]);
    l || ("value" in f && (m = f.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== h.value) && Ns(e, "value", m, h.value, !1), "checked" in f && (m = f.checked) !== void 0 && m !== e.checked && Ns(e, "checked", m, h.checked, !1));
  }
  return e;
}
function cc(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    B.__e(s, t);
  }
}
function ac(e, n, t) {
  var s, i;
  if (B.unmount && B.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || cc(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        B.__e(o, n);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ac(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || nc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Xh(e, n, t) {
  return this.constructor(e, t);
}
Qo = ec.slice, B = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Zl = 0, Ql = function(e) {
  return e != null && e.constructor === void 0;
}, _n.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, t), this.props)), e && te(t, e), e != null && this.__v && (n && this._sb.push(n), Lr(this));
}, _n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lr(this));
}, _n.prototype.render = tr, yn = [], As.__r = 0;
var Kh = 0;
function kt(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kh, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return B.vnode && B.vnode(a), a;
}
function Jh({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return ln(e, {
    className: M(n),
    style: s,
    ...i
  }, t);
}
function wo(e) {
  if (st(e))
    return e;
  if (typeof e == "string")
    return e.startsWith("icon-") || (e = `icon-${e}`), /* @__PURE__ */ _("i", { class: `icon ${e}` });
}
function hc({
  component: e = "a",
  className: n,
  children: t,
  attrs: s,
  url: i,
  disabled: o,
  active: r,
  icon: l,
  text: a,
  target: u,
  trailingIcon: c,
  hint: h,
  onClick: f,
  ...d
}) {
  const m = [
    wo(l),
    /* @__PURE__ */ kt("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    wo(c)
  ];
  return ln(e, {
    className: M(n, { disabled: o, active: r }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: u,
    onClick: f,
    ...d,
    ...s
  }, ...m);
}
function Zh({
  component: e = "div",
  className: n,
  text: t,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return ln(e, {
    className: M(n),
    style: o,
    onClick: r,
    ...s
  }, t, typeof i == "function" ? i() : i);
}
function Qh({
  component: e = "div",
  className: n,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: l
}) {
  return ln(e, {
    className: M(n),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, l);
}
function tu(e) {
  const {
    tag: n,
    className: t,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: l,
    onGenerate: a,
    onRenderItem: u,
    ...c
  } = e, h = [t], f = { ...s }, d = [], m = [];
  return i.forEach((g) => {
    const y = [];
    typeof g == "string" && l && l[g] && (g = l[g]), typeof g == "function" ? a ? y.push(...a.call(r, g, d, ...o)) : y.push(...g.call(r, d, ...o) ?? []) : y.push(g), y.forEach((b) => {
      b != null && (typeof b == "object" && !st(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? d.push(
        /* @__PURE__ */ _("div", { className: M(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(f, b.style), b.className && h.push(b.className), b.children && d.push(b.children), b.attrs && Object.assign(c, b.attrs)) : d.push(b));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: M(h),
    style: f,
    ...c
  }, d];
}
function vo({
  tag: e = "div",
  ...n
}) {
  const [t, s] = tu(n);
  return yt(e, t, ...s);
}
function eu({ type: e, ...n }) {
  return /* @__PURE__ */ kt(vo, { ...n });
}
function uc({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return ln(e, {
    className: M(n),
    style: s,
    ...i
  }, t);
}
var jt;
let Xi = (jt = class extends _n {
  constructor() {
    super(...arguments);
    v(this, "ref", Vh());
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var t, s;
    (s = (t = this.props).beforeDestroy) == null || s.call(t, { menu: this });
  }
  afterRender(t) {
    var s, i;
    (i = (s = this.props).afterRender) == null || i.call(s, { menu: this, firstRender: t });
  }
  handleItemClick(t, s, i, o) {
    i && i.call(o.target, o);
    const { onClickItem: r } = this.props;
    r && r({ menu: this, item: t, index: s, event: o });
  }
  beforeRender() {
    var i;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this));
    const s = (i = t.beforeRender) == null ? void 0 : i.call(t, { menu: this, options: t });
    return s && Object.assign(t, s), t;
  }
  getItemRenderProps(t, s, i) {
    const { commonItemProps: o, onClickItem: r } = t, l = { key: i, ...s };
    return o && Object.assign(l, o[s.type || "item"]), (r || s.onClick) && (l.onClick = this.handleItemClick.bind(this, l, i, s.onClick)), l.className = M(l.className), l;
  }
  renderItem(t, s, i) {
    const o = this.getItemRenderProps(t, s, i), { itemRender: r } = t;
    if (r) {
      if (typeof r == "object") {
        const y = r[s.type || "item"];
        if (y)
          return /* @__PURE__ */ kt(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, ln);
        if (Ql(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: u = i, rootAttrs: c, rootClass: h, rootStyle: f, rootChildren: d, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ kt(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, m.className),
          ...c,
          style: f || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        u
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || jt.ItemComponents[l] : a;
    return Object.assign(m, {
      type: l,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(g, {
      className: M(h),
      children: d,
      style: f,
      key: u,
      ...c
    }, {
      ...m,
      type: l,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, s, i) {
    const { children: o, className: r, key: l, ...a } = s, { activeClass: u = "", activeKey: c, activeIcon: h } = this.props, f = h && c === l ? /* @__PURE__ */ kt("i", { className: `checked icon icon-${h}` }) : null, d = c === l;
    return /* @__PURE__ */ kt(
      "li",
      {
        className: M("action-menu-item", `${this.name}-${i.type}`, r, { [u]: d }),
        ...a,
        children: [
          /* @__PURE__ */ kt(t, { ...i }),
          f,
          typeof o == "function" ? o() : o
        ]
      },
      l
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: s,
      style: i,
      commonItemProps: o,
      className: r,
      items: l,
      children: a,
      itemRender: u,
      onClickItem: c,
      beforeRender: h,
      afterRender: f,
      beforeDestroy: d,
      activeClass: m,
      activeKey: g,
      ...y
    } = t, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ kt(b, { class: M(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, v(jt, "ItemComponents", {
  divider: Jh,
  item: hc,
  heading: Zh,
  space: Qh,
  custom: eu,
  basic: uc
}), v(jt, "ROOT_TAG", "menu"), v(jt, "NAME", "action-menu"), jt);
class Pr extends K {
}
v(Pr, "NAME", "actionmenu"), v(Pr, "Component", Xi);
function Ir({
  ...e
}) {
  return /* @__PURE__ */ kt(hc, { ...e });
}
var uo, Mn, wt, Pe;
let fc = (uo = class extends Xi {
  constructor(t) {
    super(t);
    w(this, Mn, /* @__PURE__ */ new Set());
    w(this, wt, void 0);
    w(this, Pe, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    R(this, wt, t.nestedShow === void 0), p(this, wt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: s, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, ...l } = t;
    return l;
  }
  renderNestedMenu(t) {
    let { items: s } = t;
    if (!s || (typeof s == "function" && (s = s(t, this)), !s.length))
      return;
    const i = this.constructor, { name: o, controlledMenu: r, nestedShow: l, beforeDestroy: a, beforeRender: u, itemRender: c, activeClass: h, activeKey: f, onClickItem: d, afterRender: m, commonItemProps: g, activeIcon: y } = this.props;
    return /* @__PURE__ */ kt(
      i,
      {
        items: s,
        name: o,
        nestedShow: p(this, wt) ? this.state.nestedShow : l,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: g,
        onClickItem: d,
        afterRender: m,
        beforeRender: u,
        beforeDestroy: a,
        itemRender: c,
        activeClass: h,
        activeKey: f,
        activeIcon: y
      }
    );
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  renderToggleIcon(t, s) {
  }
  getItemRenderProps(t, s, i) {
    const o = super.getItemRenderProps(t, s, i);
    if (!this.isNestedItem(o))
      return o;
    const r = o.key ?? i;
    p(this, Mn).add(r);
    const l = this.isNestedMenuShow(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ], o.component = Ir), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Pe).bind(this, r, !0),
        onMouseLeave: p(this, Pe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: u } = o;
      o.onClick = (c) => {
        p(this, Pe).call(this, r, void 0, c), u == null || u(c);
      };
    }
    const a = this.renderToggleIcon(l, o);
    return a && (o.children = [o.children, a]), o.rootClass = [o.rootClass, "has-nested-menu", l ? "show" : ""], o;
  }
  isNestedMenuShow(t) {
    const s = p(this, wt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggleNestedMenu(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(t, s);
    if (!p(this, wt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, Mn).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), s === void 0)
      s = !o[t];
    else if (!!o[t] == !!s)
      return !1;
    return s ? o[t] = s : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  showNestedMenu(t) {
    return this.toggleNestedMenu(t, !0);
  }
  hideNestedMenu(t) {
    return this.toggleNestedMenu(t, !1);
  }
  showAllNestedMenu() {
    p(this, wt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    p(this, wt) && this.setState({ nestedShow: !1 });
  }
}, Mn = new WeakMap(), wt = new WeakMap(), Pe = new WeakMap(), v(uo, "ItemComponents", {
  item: Ir
}), uo);
class Hr extends K {
}
v(Hr, "NAME", "actionmenunested"), v(Hr, "Component", fc);
let Nt = class extends z {
  render() {
    const {
      component: n,
      type: t,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: l,
      target: a,
      disabled: u,
      active: c,
      loading: h,
      loadingIcon: f,
      loadingText: d,
      icon: m,
      text: g,
      trailingIcon: y,
      caret: b,
      square: x,
      hint: E,
      ...T
    } = this.props, A = n || (l ? "a" : "button"), N = g == null || typeof g == "string" && !g.length || h && !d, D = b && N && !m && !y && !r && !h;
    return yt(
      A,
      {
        className: M("btn", t, o, {
          "btn-caret": D,
          disabled: u || h,
          active: c,
          loading: h,
          square: x === void 0 ? !D && !r && N : x
        }, i ? `size-${i}` : ""),
        title: E,
        [A === "a" ? "href" : "data-url"]: l,
        [A === "a" ? "target" : "data-target"]: a,
        type: A === "button" ? s : void 0,
        ...T
      },
      h ? /* @__PURE__ */ _("i", { class: `spin icon ${f || "icon-spinner-snake"}` }) : wo(m),
      N ? null : /* @__PURE__ */ _("span", { className: "text", children: h ? d : g }),
      h ? null : r,
      h ? null : typeof y == "string" ? /* @__PURE__ */ _("i", { class: `icon ${y}` }) : y,
      h ? null : b ? /* @__PURE__ */ _("span", { className: typeof b == "string" ? `caret-${b}` : "caret" }) : null
    );
  }
};
class Wr extends K {
}
v(Wr, "NAME", "button"), v(Wr, "Component", Nt);
var fo;
let er = (fo = class extends fc {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const n = super.beforeRender();
    let { hasIcons: t } = n;
    return t === void 0 && (t = n.items.some((s) => s.icon)), n.className = M(n.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": n.items.some((s) => this.isNestedItem(s)),
      "menu-popup": n.popup
    }), n;
  }
  renderToggleIcon(n) {
    return /* @__PURE__ */ _("span", { class: `${this.name}-toggle-icon caret-${n ? "down" : "right"}` });
  }
}, v(fo, "NAME", "menu"), fo);
class jr extends K {
}
v(jr, "NAME", "menu"), v(jr, "Component", er);
let ls = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function nu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Nt, { type: t, ...s });
}
function nr(e) {
  return e.split("-")[1];
}
function dc(e) {
  return e === "y" ? "height" : "width";
}
function bn(e) {
  return e.split("-")[0];
}
function pc(e) {
  return ["top", "bottom"].includes(bn(e)) ? "x" : "y";
}
function Br(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = pc(n), a = dc(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (bn(n)) {
    case "top":
      h = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: s.y + s.height };
      break;
    case "right":
      h = { x: s.x + s.width, y: r };
      break;
    case "left":
      h = { x: s.x - i.width, y: r };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (nr(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const su = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = Br(u, s, a), f = s, d = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: E, data: T, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = E ?? h, d = { ...d, [y]: { ...d[y], ...T } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = Br(u, f, a)), g = -1);
  }
  return { x: c, y: h, placement: f, strategy: i, middlewareData: d };
};
function iu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ls(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ou(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: d = 0 } = n, m = iu(d), g = l[f ? h === "floating" ? "reference" : "floating" : h], y = Ls(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, T = Ls(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - T.top + m.top) / E.y, bottom: (T.bottom - y.bottom + m.bottom) / E.y, left: (y.left - T.left + m.left) / E.x, right: (T.right - y.right + m.right) / E.x };
}
const ru = ["top", "right", "bottom", "left"];
ru.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const lu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ms(e) {
  return e.replace(/left|right|bottom|top/g, (n) => lu[n]);
}
function cu(e, n, t) {
  t === void 0 && (t = !1);
  const s = nr(e), i = pc(e), o = dc(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ms(r)), { main: r, cross: Ms(r) };
}
const au = { start: "end", end: "start" };
function lo(e) {
  return e.replace(/start|end/g, (n) => au[n]);
}
const mc = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: m = !0, ...g } = e, y = bn(s), b = bn(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = h || (b || !m ? [Ms(r)] : function($) {
      const H = Ms($);
      return [lo($), H, lo(H)];
    }(r));
    h || d === "none" || E.push(...function($, H, q, it) {
      const U = nr($);
      let P = function(V, _t, ae) {
        const he = ["left", "right"], ue = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return ae ? _t ? ue : he : _t ? he : ue;
          case "left":
          case "right":
            return _t ? Mt : Re;
          default:
            return [];
        }
      }(bn($), q === "start", it);
      return U && (P = P.map((V) => V + "-" + U), H && (P = P.concat(P.map(lo)))), P;
    }(r, m, d, x));
    const T = [r, ...E], A = await ou(n, g), N = [];
    let D = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: $, cross: H } = cu(s, o, x);
      N.push(A[$], A[H]);
    }
    if (D = [...D, { placement: s, overflows: N }], !N.every(($) => $ <= 0)) {
      var L;
      const $ = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, H = T[$];
      if (H)
        return { data: { index: $, overflows: D }, reset: { placement: H } };
      let q = "bottom";
      switch (f) {
        case "bestFit": {
          var I;
          const it = (I = D.map((U) => [U, U.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((U, P) => U[1] - P[1])[0]) == null ? void 0 : I[0].placement;
          it && (q = it);
          break;
        }
        case "initialPlacement":
          q = r;
      }
      if (s !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
};
function ut(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  return ut(e).getComputedStyle(e);
}
function oe(e) {
  return yc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let us;
function gc() {
  if (us)
    return us;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (us = e.brands.map((n) => n.brand + "/" + n.version).join(" "), us) : navigator.userAgent;
}
function Ft(e) {
  return e instanceof ut(e).HTMLElement;
}
function mt(e) {
  return e instanceof ut(e).Element;
}
function yc(e) {
  return e instanceof ut(e).Node;
}
function zr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ki(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function hu(e) {
  return ["table", "td", "th"].includes(oe(e));
}
function xo(e) {
  const n = /firefox/i.test(gc()), t = Rt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function _c() {
  return !/^((?!chrome|android).)*safari/i.test(gc());
}
function sr(e) {
  return ["html", "body", "#document"].includes(oe(e));
}
const Fr = Math.min, wn = Math.max, Ds = Math.round;
function bc(e) {
  const n = Rt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Ds(t) !== i || Ds(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function wc(e) {
  return mt(e) ? e : e.contextElement;
}
const vc = { x: 1, y: 1 };
function Le(e) {
  const n = wc(e);
  if (!Ft(n))
    return vc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = bc(n);
  let r = (o ? Ds(t.width) : t.width) / s, l = (o ? Ds(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function xe(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = wc(e);
  let a = vc;
  n && (s ? mt(s) && (a = Le(s)) : a = Le(e));
  const u = l ? ut(l) : window, c = !_c() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, f = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, d = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ut(l), y = s && mt(s) ? ut(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = Le(b), E = b.getBoundingClientRect(), T = getComputedStyle(b);
      E.x += (b.clientLeft + parseFloat(T.paddingLeft)) * x.x, E.y += (b.clientTop + parseFloat(T.paddingTop)) * x.y, h *= x.x, f *= x.y, d *= x.x, m *= x.y, h += E.x, f += E.y, b = ut(b).frameElement;
    }
  }
  return { width: d, height: m, top: f, right: h + d, bottom: f + m, left: h, x: h, y: f };
}
function ne(e) {
  return ((yc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ji(e) {
  return mt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function xc(e) {
  return xe(ne(e)).left + Ji(e).scrollLeft;
}
function uu(e, n, t) {
  const s = Ft(n), i = ne(n), o = xe(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((oe(n) !== "body" || Ki(i)) && (r = Ji(n)), Ft(n)) {
      const a = xe(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = xc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Rn(e) {
  if (oe(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (zr(e) ? e.host : null) || ne(e);
  return zr(n) ? n.host : n;
}
function Ur(e) {
  return Ft(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function Vr(e) {
  const n = ut(e);
  let t = Ur(e);
  for (; t && hu(t) && Rt(t).position === "static"; )
    t = Ur(t);
  return t && (oe(t) === "html" || oe(t) === "body" && Rt(t).position === "static" && !xo(t)) ? n : t || function(s) {
    let i = Rn(s);
    for (; Ft(i) && !sr(i); ) {
      if (xo(i))
        return i;
      i = Rn(i);
    }
    return null;
  }(e) || n;
}
function Sc(e) {
  const n = Rn(e);
  return sr(n) ? e.ownerDocument.body : Ft(n) && Ki(n) ? n : Sc(n);
}
function vn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = Sc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ut(s);
  return i ? n.concat(o, o.visualViewport || [], Ki(s) ? s : []) : n.concat(s, vn(s));
}
function qr(e, n, t) {
  return n === "viewport" ? Ls(function(s, i) {
    const o = ut(s), r = ne(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const f = _c();
      (f || !f && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : mt(n) ? function(s, i) {
    const o = xe(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ft(s) ? Le(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, f = r * a.y;
    return { top: f, left: h, right: h + u, bottom: f + c, x: h, y: f, width: u, height: c };
  }(n, t) : Ls(function(s) {
    var i;
    const o = ne(s), r = Ji(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = wn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = wn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + xc(s);
    const h = -r.scrollTop;
    return Rt(l || o).direction === "rtl" && (c += wn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(ne(e)));
}
const fu = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let f = vn(u).filter((y) => mt(y) && oe(y) !== "body"), d = null;
    const m = Rt(u).position === "fixed";
    let g = m ? Rn(u) : u;
    for (; mt(g) && !sr(g); ) {
      const y = Rt(g), b = xo(g);
      (m ? b || d : b || y.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = y : f = f.filter((x) => x !== g), g = Rn(g);
    }
    return c.set(u, f), f;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = qr(n, c, i);
    return u.top = wn(h.top, u.top), u.right = Fr(h.right, u.right), u.bottom = Fr(h.bottom, u.bottom), u.left = wn(h.left, u.left), u;
  }, qr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ft(t), o = ne(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((oe(t) !== "body" || Ki(o)) && (r = Ji(t)), Ft(t))) {
    const u = xe(t);
    l = Le(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: mt, getDimensions: function(e) {
  return bc(e);
}, getOffsetParent: Vr, getDocumentElement: ne, getScale: Le, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Vr, o = this.getDimensions;
  return { reference: uu(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function du(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...mt(e) ? vn(e) : e.contextElement ? vn(e.contextElement) : [], ...vn(n)] : [];
  u.forEach((d) => {
    a && d.addEventListener("scroll", t, { passive: !0 }), o && d.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let d = !0;
    h = new ResizeObserver(() => {
      d || t(), d = !1;
    }), mt(e) && !l && h.observe(e), mt(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let f = l ? xe(e) : null;
  return l && function d() {
    const m = xe(e);
    !f || m.x === f.x && m.y === f.y && m.width === f.width && m.height === f.height || t(), f = m, c = requestAnimationFrame(d);
  }(), t(), () => {
    var d;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (d = h) == null || d.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const Ec = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: fu, ...t }, o = { ...i.platform, _c: s };
  return su(e, n, { ...i, platform: o });
};
let pu = class extends er {
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
    super.componentWillUnmount();
  }
  _getPopperOptions() {
    return {
      middleware: [mc()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && Ec(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${t}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  beforeRender() {
    const n = super.beforeRender();
    return n.className = M(n.className, "menu-popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ _("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Gt, Ie, Dn, On, Bs, Cc, zs, kc;
class et extends At {
  constructor() {
    super(...arguments);
    w(this, Bs);
    w(this, zs);
    w(this, Gt, void 0);
    w(this, Ie, void 0);
    w(this, Dn, void 0);
    v(this, "arrowEl");
    w(this, On, void 0);
  }
  get isShown() {
    var t;
    return (t = p(this, Gt)) == null ? void 0 : t.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return p(this, Gt) || this._ensureMenu();
  }
  get trigger() {
    return p(this, Dn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    return R(this, Dn, t), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var s, i;
    return (s = p(this, On)) == null || s.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = p(this, Gt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Gt)) == null || t.remove();
  }
  _ensureMenu() {
    var o;
    const { element: t } = this, s = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(s), document.body.appendChild(i);
    else if (t) {
      const r = t.getAttribute("href") ?? t.dataset.target;
      if ((r == null ? void 0 : r[0]) === "#" && (i = document.querySelector(r)), !i) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(s) ? i = l : i = (o = t.parentNode) == null ? void 0 : o.querySelector(`.${s}`);
      }
      i && i.classList.add("menu-popup");
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", R(this, Gt, i), i;
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(mc())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement();
    R(this, On, du(s, this.menu, () => {
      Ec(s, this.menu, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${o}px`
        });
        const a = l.split("-")[0], u = k(this, Bs, Cc).call(this, a);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: c != null ? `${c}px` : "",
            top: h != null ? `${h}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...k(this, zs, kc).call(this, a)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: t, items: s } = this.options;
    let i = s || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  _renderMenu() {
    const t = this._getMenuOptions();
    return !t || this.emit("updateMenu", { menu: t, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Ho(yt(pu, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, Ie) || R(this, Ie, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: s, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: s,
            bottom: i,
            left: s
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), p(this, Ie);
  }
  static clear(t) {
    var a, u;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((u = (a = s.target).closest) != null && u.call(a, o)) || s && s.button === 2)
      return;
    const r = this.getAll().entries(), l = new Set(i || []);
    for (const [c, h] of r)
      l.has(c) || h.hide();
  }
  static show(t) {
    const { event: s, ...i } = t, o = this.ensure(document.body);
    return Object.keys(i).length && o.setOptions(i), o.show(s), s instanceof Event && s.stopPropagation(), o;
  }
  static hide() {
    const t = this.get(document.body);
    return t == null || t.hide(), t;
  }
}
Gt = new WeakMap(), Ie = new WeakMap(), Dn = new WeakMap(), On = new WeakMap(), Bs = new WeakSet(), Cc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, zs = new WeakSet(), kc = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, v(et, "NAME", "contextmenu"), v(et, "EVENTS", !0), v(et, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), v(et, "MENU_CLASS", "contextmenu"), v(et, "CLASS_SHOW", "show"), v(et, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var s;
  const n = e.target;
  if ((s = n.closest) != null && s.call(n, `.${et.MENU_CLASS}`))
    return;
  const t = n.closest(et.MENU_SELECTOR);
  t && (et.ensure(t).show(e), e.preventDefault());
});
document.addEventListener("click", et.clear.bind(et));
function $c(e) {
  return e.split("-")[1];
}
function mu(e) {
  return e === "y" ? "height" : "width";
}
function Rc(e) {
  return e.split("-")[0];
}
function Tc(e) {
  return ["top", "bottom"].includes(Rc(e)) ? "x" : "y";
}
function gu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const yu = Math.min, _u = Math.max;
function bu(e, n, t) {
  return _u(e, yu(n, t));
}
const wu = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a, elements: u } = n;
  if (t == null)
    return {};
  const c = gu(s), h = { x: i, y: o }, f = Tc(r), d = mu(f), m = await a.getDimensions(t), g = f === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", E = l.reference[d] + l.reference[f] - h[f] - l.floating[d], T = h[f] - l.reference[f], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let N = A ? A[x] : 0;
  N && await (a.isElement == null ? void 0 : a.isElement(A)) || (N = u.floating[x] || l.floating[d]);
  const D = E / 2 - T / 2, L = c[y], I = N - m[d] - c[b], $ = N / 2 - m[d] / 2 + D, H = bu(L, $, I), q = $c(r) != null && $ != H && l.reference[d] / 2 - ($ < L ? c[y] : c[b]) - m[d] / 2 < 0;
  return { [f]: h[f] - (q ? $ < L ? L - $ : I - $ : 0), data: { [f]: H, centerOffset: $ - H } };
} }), vu = ["top", "right", "bottom", "left"];
vu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const xu = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Rc(l), f = $c(l), d = Tc(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && d ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: E } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return f && typeof E == "number" && (x = f === "end" ? -1 * E : E), d ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
var He, We, je, Fs, Ac;
const lr = class extends et {
  constructor() {
    super(...arguments);
    w(this, Fs);
    w(this, He, !1);
    w(this, We, 0);
    v(this, "hideLater", () => {
      p(this, je).call(this), R(this, We, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, je, () => {
      clearTimeout(p(this, We)), R(this, We, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && lr.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, He) && this.isHover && k(this, Fs, Ac).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, He) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, je)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(xu(s)), (o = t.middleware) == null || o.push(wu({ element: this.arrowEl }))), t;
  }
  _ensureMenu() {
    const t = super._ensureMenu();
    if (this.options.arrow) {
      const s = this._getArrowSize();
      this.arrowEl = document.createElement("div"), this.arrowEl.style.position = "absolute", this.arrowEl.style.width = `${s}px`, this.arrowEl.style.height = `${s}px`, this.arrowEl.style.transform = "rotate(45deg)", t.append(this.arrowEl);
    }
    return t;
  }
  _getMenuOptions() {
    const t = super._getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: s } = t;
      t.afterRender = (...i) => {
        var o;
        this.arrowEl && ((o = this.menu.querySelector(".menu")) == null || o.appendChild(this.arrowEl)), s == null || s(...i);
      };
    }
    return t;
  }
};
let nt = lr;
He = new WeakMap(), We = new WeakMap(), je = new WeakMap(), Fs = new WeakSet(), Ac = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, je)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, He, !0);
}, v(nt, "NAME", "dropdown"), v(nt, "MENU_CLASS", "dropdown-menu"), v(nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), v(nt, "DEFAULT", {
  ...et.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, nt.MENU_SELECTOR);
  if (t) {
    const i = nt.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    nt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, nt.MENU_SELECTOR);
  if (!t)
    return;
  const s = nt.ensure(t);
  s.isHover && s.show();
});
const Su = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(nt.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || nt.clear({ event: e });
};
window.addEventListener("scroll", Su, !0);
var Pn, Be;
class Eu extends z {
  constructor(t) {
    var s;
    super(t);
    w(this, Pn, void 0);
    w(this, Be, Ee());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, Be);
  }
  get triggerElement() {
    return p(this, Be).current;
  }
  componentDidMount() {
    const { modifiers: t = [], ...s } = this.props.dropdown || {};
    t.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), R(this, Pn, nt.ensure(this.triggerElement, {
      ...s,
      modifiers: t,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Pn)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: s, dropdown: i, ...o } = this.props;
    return {
      className: M("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, Be)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ _("div", { ...s, children: t });
  }
}
Pn = new WeakMap(), Be = new WeakMap();
class Cu extends Eu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: n, show: t } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (t || i === !0)) {
      const r = t ? n : (o = this.props.dropdown) == null ? void 0 : o.placement;
      i = (r === "top" ? "up" : r === "bottom" ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ _(Nt, { ...s });
  }
}
function Nc({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Cu, { type: t, ...s });
}
let Lc = class extends z {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  handleItemClick(n, t, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: n, index: t, event: i });
  }
  beforeRender() {
    var s;
    const n = { ...this.props }, t = (s = n.beforeRender) == null ? void 0 : s.call(this, n);
    return t && Object.assign(n, t), typeof n.items == "function" && (n.items = n.items.call(this)), n;
  }
  onRenderItem(n, t) {
    const { key: s = t, ...i } = n;
    return /* @__PURE__ */ _(Nt, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, yt);
      if (st(a))
        return a;
      typeof a == "object" && Object.assign(l, a);
    }
    return this.onRenderItem(l, s);
  }
  render() {
    const n = this.beforeRender(), {
      className: t,
      items: s,
      size: i,
      type: o,
      btnProps: r,
      children: l,
      itemRender: a,
      onClickItem: u,
      beforeRender: c,
      afterRender: h,
      beforeDestroy: f,
      ...d
    } = n;
    return /* @__PURE__ */ _(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", t),
        ...d,
        children: [
          s && s.map(this.renderItem.bind(this, n)),
          l
        ]
      }
    );
  }
};
function ku({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Lc, { type: t, ...s });
}
var Ne;
let rn = (Ne = class extends Xi {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = M(i.className, s ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, l = {
      ...t,
      ...r,
      ...s,
      className: M(`${this.name}-${i}`, t.className, r.className, s.className),
      style: Object.assign({}, t.style, r.style, s.style)
    };
    return i === "btn-group" && (l.btnProps = o), /* @__PURE__ */ _(n, { ...l });
  }
}, v(Ne, "ItemComponents", {
  item: nu,
  dropdown: Nc,
  "btn-group": ku
}), v(Ne, "ROOT_TAG", "nav"), v(Ne, "NAME", "toolbar"), v(Ne, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Ne);
function $u({
  className: e,
  style: n,
  actions: t,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: l,
  onClose: a,
  icon: u,
  ...c
}) {
  let h;
  l === !0 ? h = /* @__PURE__ */ _(Nt, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ _("span", { class: "close" }) }) : st(l) ? h = l : typeof l == "object" && (h = /* @__PURE__ */ _(Nt, { ...l, onClick: a }));
  const f = st(t) ? t : t ? /* @__PURE__ */ _(rn, { ...t }) : null;
  return /* @__PURE__ */ _("div", { className: M("alert", e), style: n, ...c, children: [
    st(u) ? u : typeof u == "string" ? /* @__PURE__ */ _("i", { className: `icon ${u}` }) : null,
    st(i) ? i : /* @__PURE__ */ _("div", { className: M("alert-content", o), children: [
      st(s) ? s : s && /* @__PURE__ */ _("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ _("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    h,
    r
  ] });
}
function Ru(e) {
  if (e === "center")
    return "fade-from-center";
  if (e) {
    if (e.includes("top"))
      return "fade-from-top";
    if (e.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let Tu = class extends z {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  render() {
    const {
      afterRender: n,
      beforeDestroy: t,
      margin: s,
      type: i,
      placement: o,
      animation: r,
      show: l,
      className: a,
      time: u,
      ...c
    } = this.props;
    return /* @__PURE__ */ _(
      $u,
      {
        className: M("messager", a, i, r === !0 ? Ru(o) : r, l ? "in" : ""),
        ...c
      }
    );
  }
};
var ze, bs;
class _s extends K {
  constructor() {
    super(...arguments);
    w(this, ze);
    v(this, "_show", !1);
    v(this, "_showTimer", 0);
    v(this, "_afterRender", ({ firstRender: t }) => {
      t && this.show();
      const { margin: s } = this.options;
      s && (this.element.style.margin = `${s}px`);
    });
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      t.target.closest('.alert-close,[data-dismiss="messager"]') && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t) {
    return t = super.setOptions(t), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this._show || (this.emit("show"), this.render(), this._show = !0, k(this, ze, bs).call(this, () => {
      this.emit("shown");
      const { time: t } = this.options;
      t && k(this, ze, bs).call(this, () => this.hide(), t);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), k(this, ze, bs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
ze = new WeakSet(), bs = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, v(_s, "NAME", "MessagerItem"), v(_s, "EVENTS", !0), v(_s, "Component", Tu);
var me, Fe, Ht, Us, Mc, Vs, Dc;
const cr = class extends At {
  constructor() {
    super(...arguments);
    w(this, Us);
    w(this, Vs);
    w(this, me, void 0);
    w(this, Fe, ls(6));
    w(this, Ht, void 0);
  }
  get id() {
    return p(this, Fe);
  }
  get isShown() {
    var t;
    return !!((t = p(this, Ht)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), k(this, Us, Mc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Ht)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new cr(s || "body", i);
    return o.show(), o;
  }
};
let dn = cr;
me = new WeakMap(), Fe = new WeakMap(), Ht = new WeakMap(), Us = new WeakSet(), Mc = function() {
  if (p(this, Ht))
    p(this, Ht).setOptions(this.options);
  else {
    const t = k(this, Vs, Dc).call(this), s = new _s(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), R(this, me, void 0);
    }), R(this, Ht, s);
  }
  return p(this, Ht);
}, Vs = new WeakSet(), Dc = function() {
  if (p(this, me))
    return p(this, me);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, Fe)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, Fe)}`, s.appendChild(i), R(this, me, i)), i;
}, v(dn, "NAME", "messager"), v(dn, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
S(document).on("zui.messager.show", (e, n) => {
  n && dn.show(n);
});
var ps;
let Au = (ps = class extends z {
  render() {
    const { percent: n, circleSize: t, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (t - s) / 2, l = t / 2;
    return /* @__PURE__ */ _("svg", { width: t, height: t, class: "progress-circle", children: [
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - n) / 100, "stroke-width": s }),
      /* @__PURE__ */ _("text", { x: l, y: l + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(n) })
    ] });
  }
}, v(ps, "NAME", "zui.progress-circle"), v(ps, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), ps);
class Gr extends K {
}
v(Gr, "NAME", "table-sorter"), v(Gr, "Component", Au);
let Nu = class extends z {
  constructor() {
    super(...arguments);
    v(this, "state", { checked: !1 });
    v(this, "handleOnClick", () => {
      this.setState({ checked: !this.state.checked });
    });
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: t,
      className: s,
      children: i,
      text: o,
      icon: r,
      surffixIcon: l,
      disabled: a,
      defaultChecked: u,
      onChange: c,
      ...h
    } = this.props, f = this.state.checked ? 1 : 0, d = t || "div", m = typeof r == "string" ? /* @__PURE__ */ _("i", { class: `icon ${r}` }) : r, g = typeof l == "string" ? /* @__PURE__ */ _("i", { class: `icon ${l}` }) : l, y = [
      /* @__PURE__ */ _("input", { onChange: c, type: "checkbox", value: f, checked: !!this.state.checked }),
      /* @__PURE__ */ _("label", { children: [
        m,
        o,
        g
      ] })
    ];
    return yt(
      d,
      {
        className: M("switch", s, { disabled: a }),
        onClick: this.handleOnClick,
        ...h
      },
      ...y,
      i
    );
  }
};
class Yr extends K {
}
v(Yr, "NAME", "switch"), v(Yr, "Component", Nu);
/*! js-cookie v3.0.1 | MIT */
function fs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n];
    for (var s in t)
      e[s] = t[s];
  }
  return e;
}
var Lu = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function So(e, n) {
  function t(i, o, r) {
    if (!(typeof document > "u")) {
      r = fs({}, n, r), typeof r.expires == "number" && (r.expires = new Date(Date.now() + r.expires * 864e5)), r.expires && (r.expires = r.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var a in r)
        r[a] && (l += "; " + a, r[a] !== !0 && (l += "=" + r[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + l;
    }
  }
  function s(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], r = {}, l = 0; l < o.length; l++) {
        var a = o[l].split("="), u = a.slice(1).join("=");
        try {
          var c = decodeURIComponent(a[0]);
          if (r[c] = e.read(u, c), i === c)
            break;
        } catch {
        }
      }
      return i ? r[i] : r;
    }
  }
  return Object.create(
    {
      set: t,
      get: s,
      remove: function(i, o) {
        t(
          i,
          "",
          fs({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return So(this.converter, fs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return So(fs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Mu = So(Lu, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Mu });
var In, Yt, vt, Ue, Ve, ws;
const ar = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    w(this, Ve);
    w(this, In, void 0);
    w(this, Yt, void 0);
    w(this, vt, void 0);
    w(this, Ue, void 0);
    R(this, In, t), R(this, Yt, `ZUI_STORE:${n ?? ls()}`), R(this, vt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, In);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, Ue) || R(this, Ue, new ar(p(this, Yt), "session")), p(this, Ue));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, vt).getItem(k(this, Ve, ws).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(n, t) {
    if (t == null)
      return this.remove(n);
    p(this, vt).setItem(k(this, Ve, ws).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, vt).removeItem(k(this, Ve, ws).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < p(this, vt).length; t++) {
      const s = p(this, vt).key(t);
      if (s != null && s.startsWith(p(this, Yt))) {
        const i = p(this, vt).getItem(s);
        typeof i == "string" && n(s.substring(p(this, Yt).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const n = {};
    return this.each((t, s) => {
      n[t] = s;
    }), n;
  }
};
let Os = ar;
In = new WeakMap(), Yt = new WeakMap(), vt = new WeakMap(), Ue = new WeakMap(), Ve = new WeakSet(), ws = function(n) {
  return `${p(this, Yt)}:${n}`;
};
const Du = new Os("DEFAULT");
function Ou(e, n = "local") {
  return new Os(e, n);
}
Object.assign(Du, { create: Ou });
function Pu(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function Iu(e) {
  const [n, t, s] = typeof e == "string" ? Pu(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Xr(e, n) {
  return Iu(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Kr(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function Hu(e, n, t) {
  e = e % 360 / 360, n = Kr(n), t = Kr(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Wu(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function ju(e, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= n ? e : e.substring(e.length - n) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= n ? e : e.substring(0, n), e;
}
let Oc = class extends z {
  render() {
    const {
      className: n,
      style: t,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: l,
      text: a,
      code: u,
      maxTextLength: c = 2,
      src: h,
      hueDistance: f = 43,
      saturation: d = 0.4,
      lightness: m = 0.6,
      children: g,
      ...y
    } = this.props, b = ["avatar", n], x = { ...t, background: r, color: l };
    let E = 32;
    s && (typeof s == "number" ? (x.width = `${s}px`, x.height = `${s}px`, x.fontSize = `${Math.max(12, Math.round(s / 2))}px`, E = s) : (b.push(`size-${s}`), E = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? b.push("circle") : o && (typeof o == "number" ? x.borderRadius = `${o}px` : b.push(`rounded-${o}`));
    let T;
    if (h)
      b.push("has-img"), T = /* @__PURE__ */ _("img", { className: "avatar-img", src: h, alt: a });
    else if (a != null && a.length) {
      const A = ju(a, c);
      if (b.push("has-text", `has-text-${A.length}`), r)
        !l && r && (x.color = Xr(r));
      else {
        const D = u ?? a, L = (typeof D == "number" ? D : Wu(D)) * f % 360;
        if (x.background = `hsl(${L},${d * 100}%,${m * 100}%)`, !l) {
          const I = Hu(L, d, m);
          x.color = Xr(I);
        }
      }
      let N;
      E && E < 14 * A.length && (N = { transform: `scale(${E / (14 * A.length)})`, whiteSpace: "nowrap" }), T = /* @__PURE__ */ _("div", { "data-actualSize": E, className: "avatar-text", style: N, children: A });
    }
    return /* @__PURE__ */ _(
      "div",
      {
        className: M(b),
        style: x,
        ...y,
        children: [
          T,
          g
        ]
      }
    );
  }
};
class Jr extends K {
}
v(Jr, "NAME", "avatar"), v(Jr, "Component", Oc);
class Zr extends K {
}
v(Zr, "NAME", "btngroup"), v(Zr, "Component", Lc);
var ge, Hn, Xt, qs, qe, vs;
const Z = class extends At {
  constructor() {
    super(...arguments);
    w(this, qe);
    w(this, ge, 0);
    w(this, Hn, void 0);
    w(this, Xt, void 0);
    w(this, qs, (t) => {
      const s = t.target;
      (s.closest(Z.DISMISS_SELECTOR) || this.options.backdrop === !0 && !s.closest(".modal-dialog") && s.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Z.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", p(this, qs)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = t.clientWidth, o = t.clientHeight;
          (!p(this, Xt) || p(this, Xt)[0] !== i || p(this, Xt)[1] !== o) && (R(this, Xt, [i, o]), this.layout());
        });
        s.observe(t), R(this, Hn, s);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Hn)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: s } = this, { animation: i, backdrop: o, className: r, style: l } = this.options;
    return S(s).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Z.CLASS_SHOW, r).css({
      zIndex: `${Z.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), k(this, qe, vs).call(this, () => {
      s.classList.add(Z.CLASS_SHOWN), k(this, qe, vs).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Z.CLASS_SHOWN), this.emit("hide", this), k(this, qe, vs).call(this, () => {
      this.modalElement.classList.remove(Z.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(t, s) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    s = s ?? this.options.size, S(i).removeAttr("data-size");
    const o = { width: "", height: "" };
    typeof s == "object" ? (o.width = s.width, o.height = s.height) : typeof s == "string" && ["md", "sm", "lg", "full"].includes(s) ? S(i).attr("data-size", s) : s && (o.width = s), S(i).css(o), t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    R(this, Xt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), S(i).css(a), S(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static query(t) {
    if (t === void 0)
      return t = document.querySelector(`.modal.${Z.CLASS_SHOW}`), Array.from(Z.getAll().values()).find((s) => s.isShown);
    if (typeof t == "string" && (t = document.querySelector(t)), !!t)
      return t.classList.contains("modal") || (t = t.closest(".modal")), Array.from(Z.getAll().values()).find((s) => s.modalElement === t);
  }
  static hide(t) {
    var s;
    (s = Z.query(t)) == null || s.hide();
  }
  static show(t) {
    var s;
    (s = Z.query(t)) == null || s.show();
  }
};
let tt = Z;
ge = new WeakMap(), Hn = new WeakMap(), Xt = new WeakMap(), qs = new WeakMap(), qe = new WeakSet(), vs = function(t, s) {
  p(this, ge) && (clearTimeout(p(this, ge)), R(this, ge, 0)), t && (this.options.animation ? R(this, ge, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, v(tt, "NAME", "Modal"), v(tt, "EVENTS", !0), v(tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), v(tt, "CLASS_SHOW", "show"), v(tt, "CLASS_SHOWN", "in"), v(tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), v(tt, "zIndex", 2e3);
S(window).on("resize", () => {
  tt.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
S(document).on("zui.modal.hide", (e, n) => {
  tt.hide(n == null ? void 0 : n.target);
});
class Pc extends z {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  renderHeader() {
    const {
      header: n,
      title: t
    } = this.props;
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-header", children: /* @__PURE__ */ _("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : st(n) ? n : /* @__PURE__ */ _("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ _(rn, { ...n }) : null,
      t ? /* @__PURE__ */ _("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ _("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n
    } = this.props;
    return n ? st(n) ? n : /* @__PURE__ */ _("div", { className: "modal-body", children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerActions: t
    } = this.props;
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-footer", children: t ? /* @__PURE__ */ _(rn, { ...t }) : null });
  }
  render() {
    const {
      className: n,
      style: t,
      children: s
    } = this.props;
    return /* @__PURE__ */ _("div", { className: M("modal-dialog", n), style: t, children: /* @__PURE__ */ _("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
v(Pc, "defaultProps", { closeBtn: !0 });
var Wn, Ge, jn;
class Bu extends z {
  constructor() {
    super(...arguments);
    w(this, Wn, Ee());
    w(this, Ge, void 0);
    v(this, "state", {});
    w(this, jn, () => {
      var i, o;
      const t = (o = (i = p(this, Wn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = p(this, Ge);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), s.observe(t.body), s.observe(t.documentElement), R(this, Ge, s);
    });
  }
  componentDidMount() {
    p(this, jn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Ge)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ _(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, Wn),
        onLoad: p(this, jn)
      }
    );
  }
}
Wn = new WeakMap(), Ge = new WeakMap(), jn = new WeakMap();
function zu(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function Fu(e, n) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: l = !0, executeScript: a = !0 } = n, c = await (await fetch(s, i)).text();
  if (t !== "html")
    try {
      const h = JSON.parse(c);
      return {
        title: r,
        ...o,
        ...h
      };
    } catch {
    }
  return l !== !1 && t === "html" ? [c] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ _(Jl, { className: "modal-body", html: c, executeScript: a }) : c
  };
}
async function Uu(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ _(Bu, { url: t })
  };
}
const Vu = {
  custom: zu,
  ajax: Fu,
  iframe: Uu
};
var Bn, zn, xt, Ye, xs, Gs, Ic, Fn, Eo;
const Dt = class extends tt {
  constructor() {
    super(...arguments);
    w(this, Ye);
    w(this, Gs);
    w(this, Fn);
    w(this, Bn, void 0);
    w(this, zn, void 0);
    w(this, xt, void 0);
  }
  get id() {
    return p(this, zn);
  }
  get loading() {
    return this.modalElement.classList.contains(Dt.LOADING_CLASS);
  }
  get modalElement() {
    let t = p(this, Bn);
    if (!t) {
      const { id: s } = this;
      t = this.element.querySelector(`#${s}`), t || (t = S("<div>").attr("id", s).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), R(this, Bn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), R(this, zn, this.options.id || `modal-${ls()}`);
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    p(this, xt) && clearTimeout(p(this, xt));
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Vu[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Dt.LOADING_CLASS), await k(this, Gs, Ic).call(this), o && R(this, xt, window.setTimeout(() => {
      R(this, xt, 0), k(this, Fn, Eo).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await k(this, Fn, Eo).call(this, this.options.failedTip) : l && typeof l == "object" && await k(this, Ye, xs).call(this, l), p(this, xt) && (clearTimeout(p(this, xt)), R(this, xt, 0)), t.classList.remove(Dt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = new Dt(i, { show: !0, ...o });
      r.once("hidden", () => s(r)), r.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: l = "confirm", onClickAction: a, custom: u, ...c } = t;
    let h = /* @__PURE__ */ _("div", { children: i });
    o ? h = /* @__PURE__ */ _("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ _("div", { className: `icon ${o} ${r}` }),
      h
    ] }) : h = /* @__PURE__ */ _("div", { className: "modal-body", children: h });
    const f = [];
    (Array.isArray(l) ? l : [l]).forEach((g) => {
      g = {
        ...typeof g == "string" ? { key: g } : g
      }, typeof g.key == "string" && (g.text || (g.text = Rl(g.key, g.key)), g.btnType || (g.btnType = `btn-wide ${g.key === "confirm" ? "primary" : "btn-default"}`)), g && f.push(g);
    }, []);
    let d;
    const m = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: g, event: y }) => {
        const b = Dt.query(y.target);
        d = g.key, (a == null ? void 0 : a(g, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return Dt.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: m, ...typeof u == "function" ? u() : u },
      ...c
    }).then(() => d);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return Dt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, l) => {
        i == null || i(r.key === "confirm", l), s == null || s(r, l);
      },
      ...o
    }).then((r) => r === "confirm");
  }
};
let pn = Dt;
Bn = new WeakMap(), zn = new WeakMap(), xt = new WeakMap(), Ye = new WeakSet(), xs = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], S(this.modalElement).runJS(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), s();
      },
      ...o
    }, Ho(
      /* @__PURE__ */ _(Pc, { ...t }),
      this.modalElement
    );
  });
}, Gs = new WeakSet(), Ic = function() {
  const { loadingText: t } = this.options;
  return k(this, Ye, xs).call(this, {
    body: /* @__PURE__ */ _("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ _("span", { className: "spinner" }),
      t ? /* @__PURE__ */ _("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, Fn = new WeakSet(), Eo = function(t) {
  if (t)
    return k(this, Ye, xs).call(this, {
      body: /* @__PURE__ */ _("div", { className: "modal-load-failed", children: t })
    });
}, v(pn, "LOADING_CLASS", "loading"), v(pn, "DEFAULT", {
  ...tt.DEFAULT,
  loadTimeout: 1e4
});
var Kt, Ys, Hc, Xs, Wc, Ks, jc;
class xn extends At {
  constructor() {
    super(...arguments);
    w(this, Ys);
    w(this, Xs);
    w(this, Ks);
    w(this, Kt, void 0);
  }
  get modal() {
    return p(this, Kt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    return k(this, Xs, Wc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Kt)) == null || t.hide();
  }
}
Kt = new WeakMap(), Ys = new WeakSet(), Hc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, Xs = new WeakSet(), Wc = function() {
  const t = k(this, Ys, Hc).call(this);
  let s = p(this, Kt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new tt(k(this, Ks, jc).call(this), t), R(this, Kt, s)) : (s = new pn(this.container, t), R(this, Kt, s)), s;
}, Ks = new WeakSet(), jc = function() {
  let t = this.options.target;
  if (!t) {
    const { element: s } = this;
    if (s.tagName === "A") {
      const i = s.getAttribute("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, v(xn, "NAME", "ModalTrigger"), v(xn, "EVENTS", !0), v(xn, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, xn.TOGGLE_SELECTOR);
  if (t) {
    const i = xn.ensure(t);
    i && i.show();
  }
});
var po;
let qu = (po = class extends Xi {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = M(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, v(po, "NAME", "nav"), po);
class Qr extends K {
}
v(Qr, "NAME", "nav"), v(Qr, "Component", qu);
function Tn(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function Gu({
  key: e,
  type: n,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...l
}) {
  const a = Tn(o, s);
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : rt(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : rt(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ _(Nt, { type: t, ...l });
}
const Ot = 24 * 60 * 60 * 1e3, ct = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), cs = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Co = (e, n = /* @__PURE__ */ new Date()) => ct(e).getFullYear() === ct(n).getFullYear(), Yu = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), fd = (e, n = /* @__PURE__ */ new Date()) => {
  e = ct(e), n = ct(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, dd = (e, n) => cs(ct(n), e), pd = (e, n) => cs(ct(n).getTime() - Ot, e), md = (e, n) => cs(ct(n).getTime() + Ot, e), gd = (e, n) => cs(ct(n).getTime() - 2 * Ot, e), ko = (e, n = "yyyy-MM-dd hh:mm", t = "") => {
  if (e = ct(e), Number.isNaN(e.getDay()))
    return t;
  const s = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", Co(e) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(n)) {
      const o = `${s[i]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, yd = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = ko(e, Co(e) ? s.month : s.full);
  if (cs(e, n))
    return i;
  const o = ko(n, Co(e, n) ? Yu(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, _d = (e) => {
  const n = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return n - Ot * 7;
    case "oneMonth":
      return n - Ot * 31;
    case "threeMonth":
      return n - Ot * 31 * 3;
    case "halfYear":
      return n - Ot * 183;
    case "oneYear":
      return n - Ot * 365;
    case "twoYear":
      return n - 2 * (Ot * 365);
    default:
      return 0;
  }
}, tl = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, tl(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, tl(e, "day", t, s);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return t ? s + e : s - e;
};
function Xu({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Tn(i, t);
  return s = typeof s == "function" ? s(l) : rt(s, l), /* @__PURE__ */ _(uc, { ...r, children: [
    o,
    s
  ] });
}
function Ku({
  key: e,
  type: n,
  btnType: t,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...l
}) {
  if (!i.pageTotal)
    return;
  const a = { ...l, square: !0 }, u = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ _(Nt, { type: t, ...a })), c = (f, d) => {
    const m = [];
    for (let g = f; g <= d; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = Tn(i, g);
      r && (a.url = typeof r == "function" ? r(y) : rt(r, y)), m.push(/* @__PURE__ */ _(Nt, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let h = [];
  return h = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? h = [...h, ...c(2, i.pageTotal)] : i.page < s - 2 ? h = [...h, ...c(2, s - 2), u(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? h = [...h, u(), ...c(i.pageTotal - s + 3, i.pageTotal)] : h = [...h, u(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), u(), ...c(i.pageTotal, i.pageTotal)]), h;
}
function Ju({
  type: e,
  pagerInfo: n,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((a) => {
    const u = { ...n, recPerPage: a };
    return {
      text: `${a}`,
      active: a === n.recPerPage,
      url: typeof t == "function" ? t(u) : rt(t, u)
    };
  });
  const { text: r = "" } = o;
  return o.text = typeof r == "function" ? r(n) : rt(r, n), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ _(Nc, { type: "dropdown", dropdown: i, ...o });
}
function Zu({
  key: e,
  page: n,
  type: t,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: l,
  linkCreator: a,
  ...u
}) {
  const c = { ...u };
  let h;
  const f = (g) => {
    var y;
    h = Number((y = g.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, d = (g) => {
    if (!(g != null && g.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = Tn(i, h);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : rt(a, y));
  }, m = Tn(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : rt(a, m), /* @__PURE__ */ _("div", { className: M("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ _("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ _(Nt, { type: s, ...c, onClick: d })
  ] });
}
var hn;
let Qu = (hn = class extends rn {
  get pagerInfo() {
    const { page: n = 1, recTotal: t = 0, recPerPage: s = 10 } = this.props;
    return { page: n, recTotal: t, recPerPage: s, pageTotal: s ? Math.ceil(t / s) : 0 };
  }
  isBtnItem(n) {
    return n === "link" || n === "nav" || n === "size-menu" || n === "goto" || super.isBtnItem(n);
  }
  getItemRenderProps(n, t, s) {
    const i = super.getItemRenderProps(n, t, s), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: n.linkCreator }), i;
  }
}, v(hn, "NAME", "pager"), v(hn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), v(hn, "ItemComponents", {
  ...rn.ItemComponents,
  link: Gu,
  info: Xu,
  nav: Ku,
  "size-menu": Ju,
  goto: Zu
}), hn);
class el extends K {
}
v(el, "NAME", "pager"), v(el, "Component", Qu);
var Js;
class tf extends z {
  constructor() {
    super(...arguments);
    w(this, Js, (t) => {
      var r;
      const { onDeselect: s, selections: i } = this.props, o = (r = t.target.closest(".picker-deselect-btn")) == null ? void 0 : r.dataset.idx;
      o && s && (i != null && i.length) && (t.stopPropagation(), s([i[+o]], t));
    });
  }
  render() {
    const {
      className: t,
      style: s,
      disabled: i,
      placeholder: o,
      focused: r,
      selections: l = [],
      onClick: a,
      children: u
    } = this.props;
    let c;
    return l.length ? c = /* @__PURE__ */ _("div", { className: "picker-multi-selections", children: l.map((h, f) => /* @__PURE__ */ _("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ _("div", { className: "picker-deselect-btn btn", onClick: p(this, Js), "data-idx": f, children: /* @__PURE__ */ _("span", { className: "close" }) })
    ] })) }) : c = /* @__PURE__ */ _("span", { className: "picker-select-placeholder", children: o }), /* @__PURE__ */ _(
      "div",
      {
        className: M("picker-select picker-select-multi form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: a,
        children: [
          c,
          u,
          /* @__PURE__ */ _("span", { class: "caret" })
        ]
      }
    );
  }
}
Js = new WeakMap();
var Zs;
class ef extends z {
  constructor() {
    super(...arguments);
    w(this, Zs, (t) => {
      const { onDeselect: s, selections: i } = this.props;
      s && (i != null && i.length) && (t.stopPropagation(), s(i, t));
    });
  }
  render() {
    const {
      className: t,
      style: s,
      disabled: i,
      placeholder: o,
      focused: r,
      selections: l = [],
      onDeselect: a,
      onClick: u,
      children: c
    } = this.props, [h] = l, f = h ? /* @__PURE__ */ _("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ _("span", { className: "picker-select-placeholder", children: o }), d = h && a ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-deselect-btn", onClick: p(this, Zs), children: /* @__PURE__ */ _("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ _(
      "div",
      {
        className: M("picker-select picker-select-single form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: u,
        children: [
          f,
          c,
          d,
          /* @__PURE__ */ _("span", { class: "caret" })
        ]
      }
    );
  }
}
Zs = new WeakMap();
var Qs, Bc, Un, ti, Vn, ei;
class nf extends z {
  constructor() {
    super(...arguments);
    w(this, Qs);
    v(this, "state", { keys: "", shown: !1 });
    w(this, Un, (t) => {
      var s;
      (s = t.target) != null && s.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    w(this, ti, ({ item: t }) => {
      const s = this.props.items.find((i) => i.value === t.key);
      s && this.props.onSelectItem(s);
    });
    w(this, Vn, (t) => {
      this.setState({ keys: t.target.value });
    });
    w(this, ei, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", p(this, Un)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", p(this, Un));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var t, s;
        (s = (t = this.props).onRequestHide) == null || s.call(t);
      }, 200);
    });
  }
  render() {
    const {
      id: t,
      search: s,
      className: i,
      style: o = {},
      maxHeight: r,
      maxWidth: l,
      width: a,
      menu: u,
      searchHint: c
    } = this.props, { shown: h, keys: f } = this.state, d = f.trim().length;
    return /* @__PURE__ */ _("div", { className: M("picker-menu", i, { shown: h, "has-search": d }), id: `picker-menu-${t}`, style: { maxHeight: r, maxWidth: l, width: a, ...o }, children: [
      s ? /* @__PURE__ */ _("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ _("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: c, value: f, onChange: p(this, Vn), onInput: p(this, Vn) }),
        d ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-menu-search-clear", onClick: p(this, ei), children: /* @__PURE__ */ _("span", { className: "close" }) }) : /* @__PURE__ */ _("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ _(er, { className: "picker-menu-list", items: k(this, Qs, Bc).call(this), onClickItem: p(this, ti), ...u })
    ] });
  }
}
Qs = new WeakSet(), Bc = function() {
  const { selections: t, items: s } = this.props, i = new Set(t), o = this.state.keys.toLowerCase().split(" ").filter((r) => r.length);
  return s.reduce((r, l) => {
    const {
      value: a,
      keys: u,
      text: c,
      ...h
    } = l;
    if (!o.length || o.every((f) => a.toLowerCase().includes(f) || (u == null ? void 0 : u.toLowerCase().includes(f)) || typeof c == "string" && c.toLowerCase().includes(f))) {
      let f = c ?? a;
      typeof f == "string" && o.length && (f = /* @__PURE__ */ _("span", { dangerouslySetInnerHTML: { __html: o.reduce((d, m) => d.replace(m, `<span class="picker-menu-item-match">${m}</span>`), f) } })), r.push({
        key: a,
        active: i.has(a),
        text: f,
        ...h
      });
    }
    return r;
  }, []);
}, Un = new WeakMap(), ti = new WeakMap(), Vn = new WeakMap(), ei = new WeakMap();
function nl(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var mo, qn, Gn, Yn, Xe, Ss, Xn, $o, ni, zc, si, Fc, ii, oi, ri, li, ci, Uc;
let sf = (mo = class extends z {
  constructor(t) {
    super(t);
    w(this, Xe);
    w(this, Xn);
    w(this, ni);
    w(this, si);
    w(this, ci);
    w(this, qn, 0);
    w(this, Gn, ls());
    w(this, Yn, Ee());
    w(this, ii, (t, s) => {
      const { valueList: i } = this, o = new Set(t.map((l) => l.value)), r = i.filter((l) => !o.has(l));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    w(this, oi, (t) => {
      console.log("#handleSelectClick", t), this.setState({ open: !0 });
    });
    w(this, ri, () => {
      this.close();
    });
    w(this, li, (t) => {
      this.props.multiple ? this.toggleValue(t.value) : this.setState({ value: t.value }, () => {
        var s;
        (s = p(this, Yn).current) == null || s.hide();
      });
    });
    this.state = {
      value: k(this, ni, zc).call(this, t.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(t.items) ? t.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return k(this, Xn, $o).call(this, this.state.value);
  }
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
  async loadItemList() {
    let { items: t } = this.props;
    if (typeof t == "function") {
      const i = ++gr(this, qn)._;
      if (await k(this, Xe, Ss).call(this, { loading: !0, items: [] }), t = await t(), p(this, qn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await k(this, Xe, Ss).call(this, s), t;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((t, s) => (t[s.value] = s, t), {});
  }
  getItemByValue(t) {
    return this.getItemList().find((s) => s.value === t);
  }
  getSelections() {
    const t = this.getItemMap();
    return this.valueList.map((s) => t[s] || { value: s });
  }
  async toggle(t) {
    if (t === void 0)
      t = !this.state.open;
    else if (t === this.state.open)
      return;
    await k(this, Xe, Ss).call(this, { open: t }), t && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(t, s) {
    const { valueList: i } = this, o = i.indexOf(t);
    s !== !!o && (o > -1 ? i.splice(o, 1) : i.push(t), this.setState({ value: i.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: t,
      style: s,
      children: i,
      multiple: o
    } = this.props, r = o ? tf : ef;
    return /* @__PURE__ */ _("div", { className: M("picker", t), style: s, id: `picker-${p(this, Gn)}`, children: [
      /* @__PURE__ */ _(r, { ...k(this, si, Fc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ _(nf, { ...k(this, ci, Uc).call(this), ref: p(this, Yn) }) : null
    ] });
  }
}, qn = new WeakMap(), Gn = new WeakMap(), Yn = new WeakMap(), Xe = new WeakSet(), Ss = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, Xn = new WeakSet(), $o = function(t) {
  return typeof t == "string" ? nl(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? nl(t) : [];
}, ni = new WeakSet(), zc = function(t) {
  const s = k(this, Xn, $o).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, si = new WeakSet(), Fc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, oi),
    onDeselect: p(this, ii)
  };
}, ii = new WeakMap(), oi = new WeakMap(), ri = new WeakMap(), li = new WeakMap(), ci = new WeakSet(), Uc = function() {
  const { search: t, menuClass: s, menuWidth: i, menuStyle: o, menuMaxHeight: r, menuMaxWidth: l } = this.props, { items: a } = this.state;
  return {
    id: p(this, Gn),
    items: a,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= a.length,
    style: o,
    className: s,
    width: i,
    maxHeight: r,
    maxWidth: l,
    onRequestHide: p(this, ri),
    onSelectItem: p(this, li)
  };
}, v(mo, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), mo);
class sl extends K {
}
v(sl, "NAME", "picker"), v(sl, "Component", sf);
class il extends K {
}
v(il, "NAME", "toolbar"), v(il, "Component", rn);
function as(e) {
  return e.split("-")[1];
}
function ir(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function Zi(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function ol(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = Zi(n), a = ir(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (Me(n)) {
    case "top":
      h = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: s.y + s.height };
      break;
    case "right":
      h = { x: s.x + s.width, y: r };
      break;
    case "left":
      h = { x: s.x - i.width, y: r };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (as(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const of = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = ol(u, s, a), f = s, d = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: E, data: T, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = E ?? h, d = { ...d, [y]: { ...d[y], ...T } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = ol(u, f, a)), g = -1);
  }
  return { x: c, y: h, placement: f, strategy: i, middlewareData: d };
};
function Vc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ps(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function rf(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: d = 0 } = n, m = Vc(d), g = l[f ? h === "floating" ? "reference" : "floating" : h], y = Ps(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, T = Ps(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - T.top + m.top) / E.y, bottom: (T.bottom - y.bottom + m.bottom) / E.y, left: (y.left - T.left + m.left) / E.x, right: (T.right - y.right + m.right) / E.x };
}
const lf = Math.min, cf = Math.max;
function af(e, n, t) {
  return cf(e, lf(n, t));
}
const hf = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = Vc(s), c = { x: i, y: o }, h = Zi(r), f = ir(h), d = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[f] + l.reference[h] - c[h] - l.floating[f], b = c[h] - l.reference[h], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let E = x ? h === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
  E === 0 && (E = l.floating[f]);
  const T = y / 2 - b / 2, A = u[m], N = E - d[f] - u[g], D = E / 2 - d[f] / 2 + T, L = af(A, D, N), I = as(r) != null && D != L && l.reference[f] / 2 - (D < A ? u[m] : u[g]) - d[f] / 2 < 0;
  return { [h]: c[h] - (I ? D < A ? A - D : N - D : 0), data: { [h]: L, centerOffset: D - L } };
} }), uf = ["top", "right", "bottom", "left"];
uf.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const ff = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Is(e) {
  return e.replace(/left|right|bottom|top/g, (n) => ff[n]);
}
function df(e, n, t) {
  t === void 0 && (t = !1);
  const s = as(e), i = Zi(e), o = ir(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Is(r)), { main: r, cross: Is(r) };
}
const pf = { start: "end", end: "start" };
function co(e) {
  return e.replace(/start|end/g, (n) => pf[n]);
}
const mf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: m = !0, ...g } = e, y = Me(s), b = Me(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = h || (b || !m ? [Is(r)] : function($) {
      const H = Is($);
      return [co($), H, co(H)];
    }(r));
    h || d === "none" || E.push(...function($, H, q, it) {
      const U = as($);
      let P = function(V, _t, ae) {
        const he = ["left", "right"], ue = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return ae ? _t ? ue : he : _t ? he : ue;
          case "left":
          case "right":
            return _t ? Mt : Re;
          default:
            return [];
        }
      }(Me($), q === "start", it);
      return U && (P = P.map((V) => V + "-" + U), H && (P = P.concat(P.map(co)))), P;
    }(r, m, d, x));
    const T = [r, ...E], A = await rf(n, g), N = [];
    let D = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: $, cross: H } = df(s, o, x);
      N.push(A[$], A[H]);
    }
    if (D = [...D, { placement: s, overflows: N }], !N.every(($) => $ <= 0)) {
      var L;
      const $ = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, H = T[$];
      if (H)
        return { data: { index: $, overflows: D }, reset: { placement: H } };
      let q = "bottom";
      switch (f) {
        case "bestFit": {
          var I;
          const it = (I = D.map((U) => [U, U.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((U, P) => U[1] - P[1])[0]) == null ? void 0 : I[0].placement;
          it && (q = it);
          break;
        }
        case "initialPlacement":
          q = r;
      }
      if (s !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
}, gf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Me(l), f = as(l), d = Zi(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && d ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: E } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return f && typeof E == "number" && (x = f === "end" ? -1 * E : E), d ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function ft(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(e) {
  return ft(e).getComputedStyle(e);
}
function re(e) {
  return Gc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ds;
function qc() {
  if (ds)
    return ds;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ds = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ds) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof ft(e).HTMLElement;
}
function gt(e) {
  return e instanceof ft(e).Element;
}
function Gc(e) {
  return e instanceof ft(e).Node;
}
function rl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot;
}
function Qi(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function yf(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Ro(e) {
  const n = /firefox/i.test(qc()), t = Tt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Yc() {
  return !/^((?!chrome|android).)*safari/i.test(qc());
}
function or(e) {
  return ["html", "body", "#document"].includes(re(e));
}
const ll = Math.min, Sn = Math.max, Hs = Math.round;
function Xc(e) {
  const n = Tt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Hs(t) !== i || Hs(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Kc(e) {
  return gt(e) ? e : e.contextElement;
}
const Jc = { x: 1, y: 1 };
function De(e) {
  const n = Kc(e);
  if (!Ut(n))
    return Jc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Xc(n);
  let r = (o ? Hs(t.width) : t.width) / s, l = (o ? Hs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function Se(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Kc(e);
  let a = Jc;
  n && (s ? gt(s) && (a = De(s)) : a = De(e));
  const u = l ? ft(l) : window, c = !Yc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, f = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, d = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ft(l), y = s && gt(s) ? ft(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = De(b), E = b.getBoundingClientRect(), T = getComputedStyle(b);
      E.x += (b.clientLeft + parseFloat(T.paddingLeft)) * x.x, E.y += (b.clientTop + parseFloat(T.paddingTop)) * x.y, h *= x.x, f *= x.y, d *= x.x, m *= x.y, h += E.x, f += E.y, b = ft(b).frameElement;
    }
  }
  return { width: d, height: m, top: f, right: h + d, bottom: f + m, left: h, x: h, y: f };
}
function se(e) {
  return ((Gc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function to(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Zc(e) {
  return Se(se(e)).left + to(e).scrollLeft;
}
function _f(e, n, t) {
  const s = Ut(n), i = se(n), o = Se(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((re(n) !== "body" || Qi(i)) && (r = to(n)), Ut(n)) {
      const a = Se(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = Zc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function An(e) {
  if (re(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (rl(e) ? e.host : null) || se(e);
  return rl(n) ? n.host : n;
}
function cl(e) {
  return Ut(e) && Tt(e).position !== "fixed" ? e.offsetParent : null;
}
function al(e) {
  const n = ft(e);
  let t = cl(e);
  for (; t && yf(t) && Tt(t).position === "static"; )
    t = cl(t);
  return t && (re(t) === "html" || re(t) === "body" && Tt(t).position === "static" && !Ro(t)) ? n : t || function(s) {
    let i = An(s);
    for (; Ut(i) && !or(i); ) {
      if (Ro(i))
        return i;
      i = An(i);
    }
    return null;
  }(e) || n;
}
function Qc(e) {
  const n = An(e);
  return or(n) ? e.ownerDocument.body : Ut(n) && Qi(n) ? n : Qc(n);
}
function En(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = Qc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ft(s);
  return i ? n.concat(o, o.visualViewport || [], Qi(s) ? s : []) : n.concat(s, En(s));
}
function hl(e, n, t) {
  return n === "viewport" ? Ps(function(s, i) {
    const o = ft(s), r = se(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const f = Yc();
      (f || !f && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : gt(n) ? function(s, i) {
    const o = Se(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ut(s) ? De(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, f = r * a.y;
    return { top: f, left: h, right: h + u, bottom: f + c, x: h, y: f, width: u, height: c };
  }(n, t) : Ps(function(s) {
    var i;
    const o = se(s), r = to(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = Sn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = Sn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + Zc(s);
    const h = -r.scrollTop;
    return Tt(l || o).direction === "rtl" && (c += Sn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(se(e)));
}
const bf = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let f = En(u).filter((y) => gt(y) && re(y) !== "body"), d = null;
    const m = Tt(u).position === "fixed";
    let g = m ? An(u) : u;
    for (; gt(g) && !or(g); ) {
      const y = Tt(g), b = Ro(g);
      (m ? b || d : b || y.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = y : f = f.filter((x) => x !== g), g = An(g);
    }
    return c.set(u, f), f;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = hl(n, c, i);
    return u.top = Sn(h.top, u.top), u.right = ll(h.right, u.right), u.bottom = ll(h.bottom, u.bottom), u.left = Sn(h.left, u.left), u;
  }, hl(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ut(t), o = se(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((re(t) !== "body" || Qi(o)) && (r = to(t)), Ut(t))) {
    const u = Se(t);
    l = De(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: gt, getDimensions: function(e) {
  return Xc(e);
}, getOffsetParent: al, getDocumentElement: se, getScale: De, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || al, o = this.getDimensions;
  return { reference: _f(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Tt(e).direction === "rtl" };
function wf(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...gt(e) ? En(e) : e.contextElement ? En(e.contextElement) : [], ...En(n)] : [];
  u.forEach((d) => {
    a && d.addEventListener("scroll", t, { passive: !0 }), o && d.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let d = !0;
    h = new ResizeObserver(() => {
      d || t(), d = !1;
    }), gt(e) && !l && h.observe(e), gt(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let f = l ? Se(e) : null;
  return l && function d() {
    const m = Se(e);
    !f || m.x === f.x && m.y === f.y && m.width === f.width && m.height === f.height || t(), f = m, c = requestAnimationFrame(d);
  }(), t(), () => {
    var d;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (d = h) == null || d.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const vf = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: bf, ...t }, o = { ...i.platform, _c: s };
  return of(e, n, { ...i, platform: o });
};
var Ke, Je, Ze, ye, Q, ai, Kn, Jn, To, hi, ta, ui, ea, fi, na, di, sa, pi, ia, mi, oa, gi, ra, Qe, yi, la;
const de = class extends At {
  constructor() {
    super(...arguments);
    w(this, Jn);
    w(this, hi);
    w(this, ui);
    w(this, fi);
    w(this, di);
    w(this, pi);
    w(this, mi);
    w(this, gi);
    w(this, yi);
    w(this, Ke, !1);
    w(this, Je, void 0);
    w(this, Ze, 0);
    w(this, ye, void 0);
    w(this, Q, void 0);
    w(this, ai, void 0);
    w(this, Kn, void 0);
    v(this, "hideLater", () => {
      p(this, Qe).call(this), R(this, Ze, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, Qe, () => {
      clearTimeout(p(this, Ze)), R(this, Ze, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, ye)) == null ? void 0 : t.classList.contains(de.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, ye) || k(this, ui, ea).call(this);
  }
  get trigger() {
    return p(this, ai) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${de.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, Ke) && this.isHover && k(this, yi, la).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(de.CLASS_SHOW), k(this, mi, oa).call(this), !0;
  }
  hide() {
    var t, s;
    return (t = p(this, Kn)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (s = p(this, ye)) == null || s.classList.remove(de.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, Ke) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, Qe)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: s } = t || {}, i = this.getAll().entries(), o = new Set(s || []);
    for (const [r, l] of i)
      o.has(r) || l.hide();
  }
};
let ht = de;
Ke = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), ye = new WeakMap(), Q = new WeakMap(), ai = new WeakMap(), Kn = new WeakMap(), Jn = new WeakSet(), To = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, hi = new WeakSet(), ta = function() {
  const t = k(this, Jn, To).call(this);
  return R(this, Q, document.createElement("div")), p(this, Q).style.position = this.options.strategy, p(this, Q).style.width = `${t}px`, p(this, Q).style.height = `${t}px`, p(this, Q).style.transform = "rotate(45deg)", p(this, Q);
}, ui = new WeakSet(), ea = function() {
  var i;
  const t = de.TOOLTIP_CLASS;
  let s;
  if (this.isDynamic) {
    s = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), s.classList.add(...r), s[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (s = document.querySelector(o)), !s) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? s = r : s = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (s == null || s.append(k(this, hi, ta).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), R(this, ye, s), s;
}, fi = new WeakSet(), na = function() {
  var r;
  const t = k(this, Jn, To).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [gf(t), mf()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, Q) && ((r = o.middleware) == null || r.push(hf({ element: p(this, Q) }))), o;
}, di = new WeakSet(), sa = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, pi = new WeakSet(), ia = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, mi = new WeakSet(), oa = function() {
  const t = k(this, fi, na).call(this), s = k(this, gi, ra).call(this);
  R(this, Kn, wf(s, this.tooltip, () => {
    vf(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], u = k(this, di, sa).call(this, a);
      if (r.arrow && p(this, Q)) {
        const { x: c, y: h } = r.arrow;
        Object.assign(p(this, Q).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [u]: `${-p(this, Q).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...k(this, pi, ia).call(this, a)
        });
      }
    });
  }));
}, gi = new WeakSet(), ra = function() {
  return p(this, Je) || R(this, Je, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: s, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: s,
          bottom: i,
          left: s
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), p(this, Je);
}, Qe = new WeakMap(), yi = new WeakSet(), la = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, Qe)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, Ke, !0);
}, v(ht, "NAME", "tooltip"), v(ht, "TOOLTIP_CLASS", "tooltip"), v(ht, "CLASS_SHOW", "show"), v(ht, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), v(ht, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, ht.MENU_SELECTOR);
  if (t) {
    const i = ht.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    ht.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, ht.MENU_SELECTOR);
  if (!t)
    return;
  const s = ht.ensure(t);
  s.isHover && s.show();
});
var _i, ca, bi, aa, wi, ha, vi, ua;
class xf extends At {
  constructor() {
    super(...arguments);
    w(this, _i);
    w(this, bi);
    w(this, wi);
    w(this, vi);
  }
  init() {
    S(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(t = !0) {
    S(this.element).toggleClass("loading", !t);
  }
  disable() {
    this.enable(!1);
  }
  onInput(t) {
    const s = S(t.target).closest(".has-error");
    s.length && (s.removeClass("has-error"), s.closest(".form-group").find(`#${s.attr("id")}Tip`).remove());
  }
  onSubmit(t) {
    var o;
    t.preventDefault();
    const { element: s } = this, i = S.extend({}, this.options);
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), k(this, bi, aa).call(this, k(this, _i, ca).call(this)).finally(() => {
      this.enable();
    }));
  }
  submit() {
    this.element.submit();
  }
  reset() {
    this.element.reset();
  }
}
_i = new WeakSet(), ca = function() {
  const { element: t, options: s } = this;
  let i = new FormData(t), { submitEmptySelectValue: o = "" } = s;
  o !== !1 && (typeof o != "boolean" && (o = ""), S(t).find("select").each((l, a) => {
    const c = S(a).attr("name");
    i.has(c) || i.append(c, typeof o == "object" ? o[c] : o);
  }));
  const { beforeSend: r } = s;
  if (r) {
    const l = r(i);
    l instanceof FormData && (i = l);
  }
  return this.emit("send", { formData: i }, !1), i;
}, bi = new WeakSet(), aa = async function(t) {
  var a, u;
  const { element: s, options: i } = this;
  let o, r, l;
  try {
    const c = await fetch(i.url || s.action, {
      method: s.method || "POST",
      body: t,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    r = await c.text(), c.ok ? (l = JSON.parse(r), (!l || typeof l != "object") && (o = new Error("Invalid json format"))) : o = new Error(c.statusText);
  } catch (c) {
    o = c;
  }
  o ? (this.emit("error", { error: o, responseText: r }, !1), (a = i.onError) == null || a.call(i, o, r)) : k(this, vi, ua).call(this, l), this.emit("complete", { result: l, error: o }, !1), (u = i.onComplete) == null || u.call(i, l, o);
}, wi = new WeakSet(), ha = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? S(l) : S(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const u = a.closest(".form-group,.form-batch-control");
    if (u.length) {
      const c = document.getElementById(`${o}Tip`);
      let h = c ? S(c) : null;
      h || (h = S(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(u)), h.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, vi = new WeakSet(), ua = function(t) {
  var a, u;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && S(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((u = s.onFail) == null ? void 0 : u.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? S(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && k(this, wi, ha).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && S(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
  const r = t.callback || s.callback;
  if (typeof r == "string") {
    const c = r.indexOf("("), h = (c > 0 ? r.substring(0, c) : r).split(".");
    let f = window, d = h[0];
    h.length > 1 && (d = h[1], h[0] === "top" ? f = window.top : h[0] === "parent" ? f = window.parent : f = window[h[0]]);
    const m = f == null ? void 0 : f[d];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && r[r.length - 1] == ")" ? g = JSON.parse("[" + r.substring(c + 1, r.length - 1) + "]") : g.push(t), m.apply(this, g);
    }
  } else
    r && typeof r == "object" && (r.target ? window[r.target] : window)[r.name].apply(this, Array.isArray(r.params) ? r.params : [r.params]);
  const l = t.load || s.load || t.locate;
  l && S(this.element).trigger("zui.locate", l);
}, v(xf, "NAME", "ajaxform");
function Sf(e, n) {
  var r, l, a, u;
  const { message: t } = e;
  if (e.result === "success") {
    if (((r = n.onSuccess) == null ? void 0 : r.call(n, e)) === !1)
      return;
    typeof t == "string" && t.length && ((l = n.onMessage) == null || l.call(n, t, e));
  } else {
    if (((a = n.onFail) == null ? void 0 : a.call(n, e)) === !1)
      return;
    t && ((u = n.onMessage) == null || u.call(n, t, e));
  }
  const s = e.closeModal || n.closeModal;
  s && S(n.element || document).trigger("zui.modal.hide", { target: typeof s == "string" ? s : void 0 });
  const i = e.callback || n.callback;
  if (typeof i == "string") {
    const c = i.indexOf("("), h = (c > 0 ? i.substring(0, c) : i).split(".");
    let f = window, d = h[0];
    h.length > 1 && (d = h[1], h[0] === "top" ? f = window.top : h[0] === "parent" ? f = window.parent : f = window[h[0]]);
    const m = f == null ? void 0 : f[d];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && i[i.length - 1] == ")" ? g = JSON.parse("[" + i.substring(c + 1, i.length - 1) + "]") : g.push(e), m.apply(this, g);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const o = e.load || n.load || e.locate;
  o && S(n.element || document).trigger("zui.locate", o);
}
async function fa(e) {
  var u, c, h;
  if (((u = e.beforeSubmit) == null ? void 0 : u.call(e, e)) === !1)
    return [void 0, new Error("canceled")];
  const { loadingClass: n, element: t } = e;
  t && n && S(t).addClass(n);
  const { data: s } = e;
  let i;
  if (s instanceof FormData)
    i = s;
  else if (s) {
    i = new FormData();
    for (const [f, d] of Object.entries(s))
      if (Array.isArray(d)) {
        for (const m of d)
          i.append(f, m);
        continue;
      } else
        i.append(f, d);
  }
  const { beforeSend: o } = e;
  if (o) {
    const f = o(i);
    f instanceof FormData && (i = f);
  }
  let r, l, a;
  try {
    const f = await fetch(e.url, {
      method: e.method || "POST",
      body: i,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        ...e.headers
      }
    });
    l = await f.text(), f.ok ? (a = JSON.parse(l), (!a || typeof a != "object") && (r = new Error("Invalid json format"))) : r = new Error(f.statusText);
  } catch (f) {
    r = f;
  }
  return r ? (c = e.onError) == null || c.call(e, r, l) : Sf(a, e), (h = e.onComplete) == null || h.call(e, a, r), t && n && S(t).removeClass(n), [a, r];
}
S.extend(S, { ajaxSubmit: fa });
S(document).on("click.ajaxSubmit.zui", ".ajax-submit", function(e) {
  e.preventDefault();
  const n = S(this), t = n.data();
  !t.url && n.is("a") && (t.url = n.attr("href") || ""), t.url && (t.element = this, fa(t));
});
var Zn, xi, Si, Ei;
class Ef extends z {
  constructor(t) {
    super(t);
    w(this, Zn, Ee());
    w(this, xi, (t) => {
      t.stopPropagation(), et.show({
        event: t.target,
        placement: "bottom-end",
        menu: {
          onClickItem: ({ item: s }) => {
            var i;
            ((i = s.attrs) == null ? void 0 : i["data-type"]) === "refresh" && this.load();
          }
        },
        ...this.props.block.menu
      });
    });
    w(this, Si, (t) => {
      var o, r, l;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (t.clientY - i.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = t.dataTransfer) == null || o.setData("application/id", this.props.block.id), (l = (r = this.props).onDragStart) == null || l.call(r, t);
    });
    w(this, Ei, (t) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, t);
    });
    this.state = { content: /* @__PURE__ */ _("div", { class: "dashboard-block-body", children: t.block.content }) };
  }
  get element() {
    return p(this, Zn).current;
  }
  componentDidMount() {
    this.load(), S(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    S(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: t } = this.props;
    let s = t.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(t.id, t));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(rt(i, t), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((l) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ _(Jl, { class: "dashboard-block-body", html: l, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ _("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: t, top: s, width: i, height: o, style: r, block: l } = this.props, { title: a, menu: u, id: c } = l, { loading: h, content: f, dragging: d } = this.state;
    return /* @__PURE__ */ _("div", { class: "dashboard-block-cell", style: { left: t, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ _(
      "div",
      {
        class: `dashboard-block load-indicator${h ? " loading" : ""}${u ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: p(this, Si),
        onDragEnd: p(this, Ei),
        "data-id": c,
        ref: p(this, Zn),
        children: [
          /* @__PURE__ */ _("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ _("div", { class: "dashboard-block-title", children: a }),
            u ? /* @__PURE__ */ _("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ _("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: p(this, xi), children: /* @__PURE__ */ _("div", { class: "more-vert" }) }) }) : null
          ] }),
          f
        ]
      }
    ) });
  }
}
Zn = new WeakMap(), xi = new WeakMap(), Si = new WeakMap(), Ei = new WeakMap();
var ee, St, Ci, da, ki, pa, $i, ma, Ri, ga, Qn, Ao, ts, No, Ti, ya, Ai, Ni, es, Lo;
let Cf = (ee = class extends z {
  constructor() {
    super(...arguments);
    w(this, Ci);
    w(this, ki);
    w(this, $i);
    w(this, Ri);
    w(this, Qn);
    w(this, ts);
    w(this, Ti);
    w(this, St, /* @__PURE__ */ new Map());
    v(this, "state", {});
    w(this, Ai, (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    });
    w(this, Ni, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: s } = k(this, $i, ma).call(this), { cellHeight: i, grid: o } = this.props, r = p(this, St);
    return console.log("Dashboard.render", { blocks: t, map: r }, this), /* @__PURE__ */ _("div", { class: "dashboard", children: /* @__PURE__ */ _("div", { class: "dashboard-blocks", style: { height: s * i }, children: t.map((l, a) => {
      const { id: u } = l, [c, h, f, d] = r.get(u) || [0, 0, l.width, l.height];
      return /* @__PURE__ */ _(
        Ef,
        {
          id: u,
          index: a,
          left: `${100 * c / o}%`,
          top: i * h,
          height: i * d,
          width: `${100 * f / o}%`,
          block: l,
          moreMenu: !0,
          onDragStart: p(this, Ai),
          onDragEnd: p(this, Ni)
        },
        l.id
      );
    }) }) });
  }
}, St = new WeakMap(), Ci = new WeakSet(), da = function(t) {
  const { blockDefaultSize: s, blockSizeMap: i } = this.props;
  return t = t ?? s, typeof t == "string" && (t = i[t]), t = t || s, Array.isArray(t) || (t = [t.width, t.height]), t;
}, ki = new WeakSet(), pa = function() {
  const { blocks: t, blockFetch: s, blockMenu: i } = this.props;
  return t.map((r) => {
    const {
      id: l,
      size: a,
      left: u = -1,
      top: c = -1,
      fetch: h = s,
      menu: f = i,
      ...d
    } = r, [m, g] = k(this, Ci, da).call(this, a);
    return {
      id: `${l}`,
      width: m,
      height: g,
      left: u,
      top: c,
      fetch: h,
      menu: f,
      ...d
    };
  });
}, $i = new WeakSet(), ma = function() {
  p(this, St).clear();
  let t = 0;
  const s = k(this, ki, pa).call(this);
  return s.forEach((i) => {
    k(this, Ri, ga).call(this, i);
    const [, o, , r] = p(this, St).get(i.id);
    t = Math.max(t, o + r);
  }), { blocks: s, height: t };
}, Ri = new WeakSet(), ga = function(t) {
  const s = p(this, St), { id: i, left: o, top: r, width: l, height: a } = t;
  if (o < 0 || r < 0) {
    const [u, c] = k(this, Ti, ya).call(this, l, a, o, r);
    s.set(i, [u, c, l, a]);
  } else
    k(this, ts, No).call(this, i, [o, r, l, a]);
}, Qn = new WeakSet(), Ao = function(t) {
  var i;
  const { dragging: s } = this.state;
  for (const [o, r] of p(this, St).entries())
    if (o !== s && k(i = ee, es, Lo).call(i, r, t))
      return !1;
  return !0;
}, ts = new WeakSet(), No = function(t, s) {
  var i;
  p(this, St).set(t, s);
  for (const [o, r] of p(this, St).entries())
    o !== t && k(i = ee, es, Lo).call(i, r, s) && (r[1] = s[1] + s[3], k(this, ts, No).call(this, o, r));
}, Ti = new WeakSet(), ya = function(t, s, i, o) {
  if (i >= 0 && o >= 0) {
    if (k(this, Qn, Ao).call(this, [i, o, t, s]))
      return [i, o];
    o = -1;
  }
  let r = i < 0 ? 0 : i, l = o < 0 ? 0 : o, a = !1;
  const u = this.props.grid;
  for (; !a; ) {
    if (k(this, Qn, Ao).call(this, [r, l, t, s])) {
      a = !0;
      break;
    }
    i < 0 ? (r += 1, r + t > u && (r = 0, l += 1)) : l += 1;
  }
  return [r, l];
}, Ai = new WeakMap(), Ni = new WeakMap(), es = new WeakSet(), Lo = function([t, s, i, o], [r, l, a, u]) {
  return !(t + i <= r || r + a <= t || s + o <= l || l + u <= s);
}, w(ee, es), v(ee, "defaultProps", {
  responsive: !1,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
}), ee);
class ul extends K {
}
v(ul, "NAME", "Dashboard"), v(ul, "Component", Cf);
var _e, be;
class fl extends z {
  constructor(t) {
    super(t);
    w(this, _e, 0);
    w(this, be, null);
    v(this, "_handleWheel", (t) => {
      const { wheelContainer: s } = this.props, i = t.target;
      if (!(!i || !s) && (typeof s == "string" && i.closest(s) || typeof s == "object")) {
        const o = (this.props.type === "horz" ? t.deltaX : t.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && t.preventDefault();
      }
    });
    v(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (p(this, _e) && cancelAnimationFrame(p(this, _e)), R(this, _e, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), R(this, _e, 0);
      })), t.preventDefault());
    });
    v(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    v(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    v(this, "_handleClick", (t) => {
      const s = t.currentTarget;
      if (!s)
        return;
      const i = s.getBoundingClientRect(), { type: o, clientSize: r, scrollSize: l } = this.props, a = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(a * l / r), t.preventDefault();
    });
    this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: t, clientSize: s } = this.props;
    return Math.max(0, t - s);
  }
  get barSize() {
    const { clientSize: t, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (R(this, be, typeof t == "string" ? document : t.current), p(this, be).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, be) && p(this, be).removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    return t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)), !0);
  }
  scrollOffset(t) {
    return this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    const { onScroll: s } = this.props;
    s && s(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: i = 12,
      className: o,
      style: r,
      left: l,
      top: a,
      bottom: u,
      right: c
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: d } = this.state, m = {
      left: l,
      top: a,
      bottom: u,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (m.height = i, m.width = t, g.width = this.barSize, g.left = Math.round(Math.min(h, f) * (t - g.width) / h)) : (m.width = i, m.height = t, g.height = this.barSize, g.top = Math.round(Math.min(h, f) * (t - g.height) / h)), /* @__PURE__ */ _(
      "div",
      {
        className: M("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": d
        }),
        style: m,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ _(
          "div",
          {
            className: "scrollbar-bar",
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
_e = new WeakMap(), be = new WeakMap();
function kf(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function _a({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...u }) {
  var I;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: h, border: f } = e.setting, d = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...o
  }, m = ["dtable-cell", a, n, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], y = (I = s.data) == null ? void 0 : I[e.name], b = [l ?? y ?? ""], x = i ? i(b, { row: s, col: e, value: y }, yt) : b, E = [], T = [], A = {}, N = {};
  let D = "div";
  x == null || x.forEach(($) => {
    if (typeof $ == "object" && $ && !st($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const H = $.outer ? E : T;
      $.html ? H.push(/* @__PURE__ */ _("div", { className: M("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? c : d, $.style), $.className && ($.outer ? m : g).push($.className), $.children && H.push($.children), $.attrs && Object.assign($.outer ? A : N, $.attrs)), $.tagName && !$.outer && (D = $.tagName);
    } else
      T.push($);
  });
  const L = D;
  return /* @__PURE__ */ _(
    "div",
    {
      className: M(m),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...u,
      ...A,
      children: [
        T.length > 0 && /* @__PURE__ */ _(L, { className: M(g), style: d, ...N, children: T }),
        E
      ]
    }
  );
}
function ao({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = _a, onRenderCell: a }) {
  return /* @__PURE__ */ _("div", { className: M("dtable-cells", n), style: { top: t, left: s, width: i, height: o }, children: r.map((u) => u.visible ? /* @__PURE__ */ _(
    l,
    {
      col: u,
      row: e,
      onRenderCell: a
    },
    u.name
  ) : null) });
}
function ba({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: r,
  fixedLeftWidth: l,
  scrollWidth: a,
  scrollColsWidth: u,
  fixedRightWidth: c,
  scrollLeft: h,
  CellComponent: f = _a,
  onRenderCell: d,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ _(
    ao,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: l,
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  let b = null;
  r != null && r.length && (b = /* @__PURE__ */ _(
    ao,
    {
      className: "dtable-flexable",
      cols: r,
      left: l - h,
      width: Math.max(a, u),
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  let x = null;
  o != null && o.length && (x = /* @__PURE__ */ _(
    ao,
    {
      className: "dtable-fixed-right",
      cols: o,
      left: l + a,
      width: c,
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  const E = { top: t, height: s, lineHeight: `${s - 2}px`, ...m };
  return /* @__PURE__ */ _(
    "div",
    {
      className: M("dtable-row", n),
      style: E,
      "data-id": e.id,
      ...g,
      children: [
        y,
        b,
        x
      ]
    }
  );
}
function $f({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (n) {
    const i = n({ props: s }, yt);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ _("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ _(ba, { ...s }) });
}
function Rf({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: i,
  rowHeight: o,
  scrollTop: r,
  onRenderRow: l,
  ...a
}) {
  return n = { ...n, top: t, height: i }, /* @__PURE__ */ _("div", { className: M("dtable-rows", e), style: n, children: s.map((u) => {
    const c = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - r,
      height: o,
      ...a
    }, h = l == null ? void 0 : l({ props: c, row: u }, yt);
    return h && Object.assign(c, h), /* @__PURE__ */ _(ba, { ...c });
  }) });
}
const Ws = /* @__PURE__ */ new Map(), js = [];
function wa(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Ws.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Ws.set(t, e), n != null && n.buildIn && !js.includes(t) && js.push(t);
}
function $e(e, n) {
  wa(e, n);
  const t = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return t.plugin = e, t;
}
function va(e) {
  return Ws.delete(e);
}
function Tf(e) {
  if (typeof e == "string") {
    const n = Ws.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function xa(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Tf(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && xa(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function Af(e = [], n = !0) {
  return n && js.length && e.unshift(...js), e != null && e.length ? xa([], e, /* @__PURE__ */ new Set()) : [];
}
function dl() {
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
    footer: void 0,
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
var ms, we, tn, Jt, Et, Zt, Y, pt, Ct, en, ns, ss, Wt, nn, sn, Li, Sa, Mi, Ea, Di, Ca, Oi, ka, is, Mo, Pi, Ii, os, rs, Hi, Wi, ji, $a, Bi, Ra, zi, Ta;
let Nf = (ms = class extends z {
  constructor(t) {
    super(t);
    w(this, Li);
    w(this, Mi);
    w(this, Di);
    w(this, Oi);
    w(this, is);
    w(this, ji);
    w(this, Bi);
    w(this, zi);
    v(this, "ref", Ee());
    w(this, we, 0);
    w(this, tn, void 0);
    w(this, Jt, !1);
    w(this, Et, void 0);
    w(this, Zt, void 0);
    w(this, Y, []);
    w(this, pt, void 0);
    w(this, Ct, /* @__PURE__ */ new Map());
    w(this, en, {});
    w(this, ns, void 0);
    w(this, ss, []);
    v(this, "updateLayout", () => {
      p(this, we) && cancelAnimationFrame(p(this, we)), R(this, we, requestAnimationFrame(() => {
        R(this, pt, void 0), this.forceUpdate(), R(this, we, 0);
      }));
    });
    w(this, Wt, (t, s) => {
      s = s || t.type;
      const i = p(this, Ct).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, nn, (t) => {
      p(this, Wt).call(this, t, `window_${t.type}`);
    });
    w(this, sn, (t) => {
      p(this, Wt).call(this, t, `document_${t.type}`);
    });
    w(this, Pi, (t, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, t, s);
        i && Object.assign(t.props, i);
      }
      return p(this, Y).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, t, s);
          o && Object.assign(t.props, o);
        }
      }), t.props;
    });
    w(this, Ii, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, Y).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, os, (t, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), t[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (t = r.setting[l].call(this, t, s, i)), this.options[l] && (t = this.options[l].call(this, t, s, i)), p(this, Y).forEach((a) => {
        a[l] && (t = a[l].call(this, t, s, i));
      }), t;
    });
    w(this, rs, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, Hi, (t) => {
      var l, a, u, c, h;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: o, element: r }), p(this, Y).forEach((f) => {
          var d;
          (d = f.onHeaderCellClick) == null || d.call(this, t, { colName: o, element: r });
        }));
      else {
        const { rowElement: f } = s, d = this.layout.visibleRows.find((m) => m.id === i);
        if (r) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
            return;
          for (const m of p(this, Y))
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, t, { rowID: i, rowInfo: d, element: f })) === !0)
          return;
        for (const m of p(this, Y))
          if (((h = m.onRowClick) == null ? void 0 : h.call(this, t, { rowID: i, rowInfo: d, element: f })) === !0)
            return;
      }
    });
    w(this, Wi, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    R(this, tn, t.id ?? `dtable-${ls(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, R(this, Zt, Object.freeze(Af(t.plugins))), p(this, Zt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, u]) => {
        typeof u == "function" && Object.assign(this, { [a]: u.bind(this) });
      }), o && Object.assign(p(this, en), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, pt)) == null ? void 0 : t.options) || p(this, Et) || dl();
  }
  get plugins() {
    return p(this, Y);
  }
  get layout() {
    return p(this, pt);
  }
  get id() {
    return p(this, tn);
  }
  get data() {
    return p(this, en);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    R(this, Et, void 0);
  }
  componentDidMount() {
    if (p(this, Jt) ? this.forceUpdate() : k(this, is, Mo).call(this), p(this, Y).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, Hi)), this.on("keydown", p(this, Wi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), R(this, ns, s);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    p(this, Y).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    p(this, Jt) ? k(this, is, Mo).call(this) : p(this, Y).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, ns)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, Ct).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, nn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, sn)) : t.removeEventListener(i, p(this, Wt));
    p(this, Y).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Zt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), R(this, en, {}), p(this, Ct).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    o ? o.push(s) : (p(this, Ct).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, sn)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, Wt)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, Ct).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, sn)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, Wt)));
  }
  emitCustomEvent(t, s) {
    p(this, Wt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: l, rowHeight: a, colsInfo: { scrollWidth: u, scrollColsWidth: c } } = this.layout, { to: h } = t;
    let { scrollLeft: f, scrollTop: d } = t;
    if (h === "up" || h === "down")
      d = o + (h === "down" ? 1 : -1) * Math.floor(l / a) * a;
    else if (h === "left" || h === "right")
      f = i + (h === "right" ? 1 : -1) * u;
    else if (h === "home")
      d = 0;
    else if (h === "end")
      d = r - l;
    else if (h === "left-begin")
      f = 0;
    else if (h === "right-end")
      f = c - u;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (f = i + g), typeof y == "number" && (f = o + y);
    }
    const m = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, c - u)), f !== i && (m.scrollLeft = f)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - l)), d !== o && (m.scrollTop = d)), Object.keys(m).length ? (this.setState(m, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, m), s == null || s.call(this, !0);
    }), !0) : (s == null || s.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: s, colsList: i } = this.layout;
    return typeof t == "number" ? i[t] : s[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: i } = this.layout;
    return typeof t == "number" ? s[t] : i[t];
  }
  getCellValue(t, s) {
    var a;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof s == "object" ? s : this.getColInfo(s);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (a = i.data) == null ? void 0 : a[o.name];
    const { cellValueGetter: l } = this.options;
    return l && (r = l.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    if (!p(this, Et))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      R(this, pt, void 0);
    else if (i === "options") {
      if (R(this, Et, void 0), !p(this, pt))
        return;
      R(this, pt, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), s);
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s || s.closest(".no-cell-event"))
      return;
    const i = s.closest(".dtable-cell");
    if (!i)
      return;
    const o = i.closest(".dtable-row");
    if (!o)
      return;
    const r = i == null ? void 0 : i.getAttribute("data-col"), l = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof r != "string" || typeof l != "string"))
      return {
        cellElement: i,
        rowElement: o,
        colName: r,
        rowID: l,
        target: s
      };
  }
  i18n(t, s, i) {
    return ie(p(this, ss), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = k(this, zi, Ta).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: u } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, h = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "dtable-scrolled-down": ((t == null ? void 0 : t.scrollTop) ?? 0) > 0,
      "scrollbar-hover": u
    }], f = [];
    return t && p(this, Y).forEach((d) => {
      var g;
      const m = (g = d.onRender) == null ? void 0 : g.call(this, t);
      m && (m.style && Object.assign(c, m.style), m.className && h.push(m.className), m.children && f.push(m.children));
    }), /* @__PURE__ */ _(
      "div",
      {
        id: p(this, tn),
        className: M(h),
        style: c,
        ref: this.ref,
        tabIndex: -1,
        children: [
          t && k(this, Li, Sa).call(this, t),
          t && k(this, Mi, Ea).call(this, t),
          t && k(this, Di, Ca).call(this, t),
          t && k(this, Oi, ka).call(this, t)
        ]
      }
    );
  }
}, we = new WeakMap(), tn = new WeakMap(), Jt = new WeakMap(), Et = new WeakMap(), Zt = new WeakMap(), Y = new WeakMap(), pt = new WeakMap(), Ct = new WeakMap(), en = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), Wt = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), Li = new WeakSet(), Sa = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ _(
      $f,
      {
        scrollLeft: r,
        height: o,
        onRenderCell: p(this, os),
        onRenderRow: p(this, Ii),
        ...i
      }
    );
  const l = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    vo,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, Mi = new WeakSet(), Ea = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: u } = t;
  return /* @__PURE__ */ _(
    Rf,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: u,
      onRenderCell: p(this, os),
      onRenderRow: p(this, Pi),
      ...l
    }
  );
}, Di = new WeakSet(), Ca = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    vo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, Oi = new WeakSet(), ka = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: u } = t, { scrollColsWidth: c, scrollWidth: h } = o, { scrollbarSize: f = 12, horzScrollbarPos: d } = this.options;
  return c > h && s.push(
    /* @__PURE__ */ _(
      fl,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: c,
        clientSize: h,
        onScroll: p(this, rs),
        left: o.fixedLeftWidth,
        bottom: (d === "inside" ? 0 : -f) + u,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > l && s.push(
    /* @__PURE__ */ _(
      fl,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: a,
        clientSize: l,
        onScroll: p(this, rs),
        right: 0,
        size: f,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, is = new WeakSet(), Mo = function() {
  var t;
  R(this, Jt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Y).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Pi = new WeakMap(), Ii = new WeakMap(), os = new WeakMap(), rs = new WeakMap(), Hi = new WeakMap(), Wi = new WeakMap(), ji = new WeakSet(), $a = function() {
  if (p(this, Et))
    return !1;
  const s = { ...dl(), ...p(this, Zt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return R(this, Et, s), R(this, Y, p(this, Zt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), R(this, ss, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Bi = new WeakSet(), Ra = function() {
  var hr, ur;
  const { plugins: t } = this;
  let s = p(this, Et);
  const i = {
    flex: /* @__PURE__ */ _("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ _("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((O) => {
    var ot;
    const F = (ot = O.beforeLayout) == null ? void 0 : ot.call(this, s);
    F && (s = { ...s, ...F }), Object.assign(i, O.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: O } = this;
    if (O)
      r = O.clientWidth;
    else {
      r = 0, R(this, Jt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: u } = s, c = [], h = [], f = [], d = {}, m = [], g = [];
  let y = 0, b = 0, x = 0;
  s.cols.forEach((O) => {
    if (O.hidden)
      return;
    const F = O.type || "", ot = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: u,
      ...O,
      type: F
    }, W = {
      name: ot.name,
      type: F,
      setting: ot,
      flex: 0,
      left: 0,
      width: ot.width || 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    };
    t.forEach((fr) => {
      var dr, pr;
      const hs = (dr = fr.colTypes) == null ? void 0 : dr[F];
      if (hs) {
        const mr = typeof hs == "function" ? hs(W) : hs;
        mr && Object.assign(ot, mr, O);
      }
      (pr = fr.onAddCol) == null || pr.call(this, W);
    });
    const { fixed: Te, flex: Ae, width: cn = l } = ot;
    W.flex = Te ? 0 : Ae === !0 ? 1 : typeof Ae == "number" ? Ae : 0, W.width = kf(cn < 1 ? Math.round(cn * r) : cn, ot.minWidth, ot.maxWidth), W.realWidth = W.realWidth || W.width, Te === "left" ? (W.left = y, y += W.width, c.push(W)) : Te === "right" ? (W.left = b, b += W.width, h.push(W)) : (W.left = x, x += W.width, f.push(W)), W.flex && g.push(W), m.push(W), d[W.name] = W;
  });
  const E = y + x + b;
  o === "auto" && (r = E);
  const { data: T, rowKey: A = "id", rowHeight: N } = s, D = [], L = (O, F, ot) => {
    var Te, Ae;
    const W = { data: ot ?? { [A]: O }, id: O, index: D.length, top: 0 };
    if (ot || (W.lazy = !0), D.push(W), ((Te = s.onAddRow) == null ? void 0 : Te.call(this, W, F)) !== !1) {
      for (const cn of t)
        if (((Ae = cn.onAddRow) == null ? void 0 : Ae.call(this, W, F)) === !1)
          return;
    }
  };
  if (typeof T == "number")
    for (let O = 0; O < T; O++)
      L(`${O}`, O);
  else
    Array.isArray(T) && T.forEach((O, F) => {
      typeof O == "object" ? L(`${O[A] ?? ""}`, F, O) : L(`${O ?? ""}`, F);
    });
  let I = D;
  const $ = {};
  if (s.onAddRows) {
    const O = s.onAddRows.call(this, I);
    O && (I = O);
  }
  for (const O of t) {
    const F = (hr = O.onAddRows) == null ? void 0 : hr.call(this, I);
    F && (I = F);
  }
  I.forEach((O, F) => {
    $[O.id] = O, O.index = F, O.top = O.index * N;
  });
  const { header: H, footer: q } = s, it = H ? s.headerHeight || N : 0, U = q ? s.footerHeight || N : 0;
  let P = s.height, V = 0;
  const _t = I.length * N, ae = it + U + _t;
  if (typeof P == "function" && (P = P.call(this, ae)), P === "auto")
    V = ae;
  else if (typeof P == "object")
    V = Math.min(P.max, Math.max(P.min, ae));
  else if (P === "100%") {
    const { parent: O } = this;
    if (O)
      V = O.clientHeight;
    else {
      V = 0, R(this, Jt, !0);
      return;
    }
  } else
    V = P;
  const he = V - it - U, ue = r - y - b, Mt = {
    options: s,
    allRows: D,
    width: r,
    height: V,
    rows: I,
    rowsMap: $,
    rowHeight: N,
    rowsHeight: he,
    rowsHeightTotal: _t,
    header: H,
    footer: q,
    footerGenerators: i,
    headerHeight: it,
    footerHeight: U,
    colsMap: d,
    colsList: m,
    flexCols: g,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: f,
      fixedLeftWidth: y,
      scrollWidth: ue,
      scrollColsWidth: x,
      fixedRightWidth: b
    }
  }, Re = (ur = s.onLayout) == null ? void 0 : ur.call(this, Mt);
  Re && Object.assign(Mt, Re), t.forEach((O) => {
    if (O.onLayout) {
      const F = O.onLayout.call(this, Mt);
      F && Object.assign(Mt, F);
    }
  }), R(this, pt, Mt);
}, zi = new WeakSet(), Ta = function() {
  (k(this, ji, $a).call(this) || !p(this, pt)) && k(this, Bi, Ra).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const E = r - l;
    if (E > 0) {
      const T = i.reduce((N, D) => N + D.flex, 0);
      let A = 0;
      i.forEach((N) => {
        const D = Math.min(E - A, Math.ceil(E * (N.flex / T)));
        N.realWidth = D + N.width, A += N.realWidth;
      });
    } else
      i.forEach((T) => {
        T.realWidth = T.width;
      });
  }
  s = Math.min(Math.max(0, l - r), s);
  let a = 0;
  o.forEach((E) => {
    E.left = a, a += E.realWidth, E.visible = E.left + E.realWidth >= s && E.left <= s + r;
  });
  const { rowsHeightTotal: u, rowsHeight: c, rows: h, rowHeight: f } = t, d = Math.min(Math.max(0, u - c), this.state.scrollTop), m = Math.floor(d / f), g = d + c, y = Math.min(h.length, Math.ceil(g / f)), b = [], { rowDataGetter: x } = this.options;
  for (let E = m; E < y; E++) {
    const T = h[E];
    T.lazy && x && (T.data = x([T.id])[0], T.lazy = !1), b.push(T);
  }
  return t.visibleRows = b, t.scrollTop = d, t.scrollLeft = s, t;
}, v(ms, "addPlugin", wa), v(ms, "removePlugin", va), ms);
function pl(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const Lf = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const s = (t == null ? void 0 : t.getAttribute("data-col")) ?? !1;
      pl(this, s);
    },
    mouseleave() {
      pl(this, !1);
    }
  }
}, Mf = $e(Lf, { buildIn: !0 });
function Df(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, u) => {
    i && !i.call(this, a) || !!t[a] === u || (u ? t[a] = !0 : delete t[a], s[a] = u);
  };
  if (e === void 0 ? (n === void 0 && (n = !Aa.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    o(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    o(a, n ?? !t[a]);
  })), Object.keys(s).length) {
    const a = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, s, t);
    a && Object.keys(a).forEach((u) => {
      a[u] ? t[u] = !0 : delete t[u];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, s);
    });
  }
  return s;
}
function Of(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Aa() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Pf() {
  return Object.keys(this.state.checkedRows);
}
function If(e) {
  const { checkable: n } = this.options;
  e === void 0 && (e = !n), n !== e && this.setState({ forceCheckable: e });
}
const Hf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto"
  },
  when: (e) => e.checkable !== void 0,
  options(e) {
    const { forceCheckable: n } = this.state;
    return n !== void 0 ? e.checkable = n : e.checkable === "auto" && (e.checkable = !!e.cols.some((t) => t.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Df,
    isRowChecked: Of,
    isAllRowChecked: Aa,
    getChecks: Pf,
    toggleCheckable: If
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
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
        /* @__PURE__ */ _("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ _("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, n) {
      const t = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ _("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: n, col: t }) {
    var l;
    const { id: s } = n, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, s))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const a = this.isRowChecked(s), u = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, s)) ?? /* @__PURE__ */ _("input", { type: "checkbox", checked: a });
      e.unshift(u), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r;
    const { id: s } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const l = this.isAllRowChecked(), a = ((r = this.options.checkboxRender) == null ? void 0 : r.call(this, l, s)) ?? /* @__PURE__ */ _("input", { type: "checkbox", checked: l });
      e.unshift(a), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (this.isRowChecked(n.id))
      return { className: M(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const n = e.target;
    if (!n)
      return;
    const t = n.closest('input[type="checkbox"],.dtable-checkbox');
    t && (this.toggleCheckRows(t.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: n }) {
    const t = e.target;
    if (!t)
      return;
    (t.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(n);
  }
}, Wf = $e(Hf);
var Na = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Na || {});
function Do(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Do.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Do.call(this, n.parent).level + 1 : 0, n;
}
function jf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !La.call(this)), n) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      n && (r != null && r.children) ? t[o] = !0 : delete t[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function La() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Ma(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = Ma(e, n, r.children, s + 1)));
  }
  return n;
}
function Da(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, Da(e, o, t, s);
  }), i;
}
function Oa(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const u = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === u;
  })) && (s[n] = t), o.parent && Oa(e, o.parent, t, s, i);
}
const Bf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const { nestedMap: t } = this.data, s = t.get(e.id), i = t.get(n.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(n).forEach(([i, o]) => {
        const r = Da(this, i, o, s);
        r != null && r.parent && Oa(this, r.parent, o, s, t);
      }), s;
    }
  },
  options(e) {
    return e.nested === "auto" && (e.nested = !!e.cols.some((n) => n.nestedToggle)), e;
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: jf,
    isAllCollapsed: La,
    getNestedRowInfo: Do
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, o;
    const { nestedMap: n } = this.data, t = (i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], s = n.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = t, (o = e.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let r = n.get(t);
      r || (r = {
        state: "",
        level: 0
      }, n.set(t, r)), r.children || (r.children = []), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), Ma(this.data.nestedMap), e.sort((n, t) => {
      const s = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? n.index - t.index : o;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l;
    const { id: s, data: i } = t, { nestedToggle: o } = n.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && e.unshift(((l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, r, s, n, i)) ?? /* @__PURE__ */ _("a", { role: "button", className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ _("span", { className: "toggle-icon" }) })), r.level) {
      let { nestedIndent: a = o } = n.setting;
      a && (a === !0 && (a = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ _("div", { className: "dtable-nested-indent", style: { width: a * r.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var i;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) ?? /* @__PURE__ */ _("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ _("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: M(e.className, `is-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = M(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const n = e.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: n }) {
    const t = e.target;
    if (!(!t || !this.getNestedRowInfo(n).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
}, zf = $e(Bf);
function Pa(e, n, t, s) {
  if (!e)
    return t;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: i, ...o } = e;
  return /* @__PURE__ */ _("a", { href: rt(i, n.row.data), ...s, ...o, children: t });
}
function rr(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : rt(e, t);
}
function Ia(e, n, t, s) {
  var i;
  return t = t ?? ((i = n.row.data) == null ? void 0 : i[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), ko(t, e, s));
}
function Ha(e, n) {
  const { link: t } = n.col.setting, s = Pa(t, n, e[0]);
  return s && (e[0] = s), e;
}
function Wa(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = rr(t, n, e[0])), e;
}
function ja(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function mn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t, invalidDate: i } = n.col.setting;
  return e[0] = Ia(s, n, e[0], i), e;
}
function Oo(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : rr(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const Ff = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return Oo(e, n, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, r = (t - s) / 2, l = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ _("svg", { width: t, height: t, children: [
          /* @__PURE__ */ _("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ _("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - a) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ _("text", { x: l, y: l + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(a) })
        ] }), e;
      }
    },
    datetime: {
      onRenderCell(e, n) {
        return mn(e, n, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(e, n) {
        return mn(e, n, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(e, n) {
        return mn(e, n, "hh:mm");
      }
    }
  },
  onRenderCell(e, n) {
    const { formatDate: t, html: s } = n.col.setting;
    return t && (e = mn(e, n, t)), e = ja(e, n), e = Wa(e, n), s ? e = Oo(e, n) : e = Ha(e, n), e;
  }
}, Uf = $e(Ff, { buildIn: !0 });
function ho(e, { row: n, col: t }) {
  const { data: s } = n, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: l, avatarCodeKey: a, avatarNameKey: u = `${t.name}Name` } = t.setting, c = (s ? s[u] : i) || e[0], h = {
    size: "xs",
    className: M(o, l == null ? void 0 : l.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: c,
    code: a ? s ? s[a] : void 0 : i,
    ...l
  };
  if (e[0] = /* @__PURE__ */ _(Oc, { ...h }), t.type === "avatarBtn") {
    const { avatarBtnProps: f } = t.setting, d = typeof f == "function" ? f(t, n) : f;
    e[0] = /* @__PURE__ */ _("button", { type: "button", className: "btn btn-avatar", ...d, children: [
      e[0],
      /* @__PURE__ */ _("div", { children: c })
    ] });
  } else
    t.type === "avatarName" && (e[0] = /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ _("span", { children: c })
    ] }));
  return e;
}
const Vf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ho
    },
    avatarBtn: {
      onRenderCell: ho
    },
    avatarName: {
      onRenderCell: ho
    }
  }
}, qf = $e(Vf, { buildIn: !0 }), Gf = {
  name: "sort-type",
  onRenderHeaderCell(e, n) {
    const { col: t } = n, { sortType: s } = t.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ _("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...a } = o;
        e[0] = /* @__PURE__ */ _("a", { href: rt(l, { ...t.setting, sortType: r }), ...a, children: e[0] });
      }
    }
    return e;
  }
}, Yf = $e(Gf, { buildIn: !0 }), Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Na,
  avatar: qf,
  checkable: Wf,
  colHover: Mf,
  nested: zf,
  renderDatetime: Ia,
  renderDatetimeCell: mn,
  renderFormat: rr,
  renderFormatCell: Wa,
  renderHtmlCell: Oo,
  renderLink: Pa,
  renderLinkCell: Ha,
  renderMapCell: ja,
  rich: Uf,
  sortType: Yf
}, Symbol.toStringTag, { value: "Module" }));
class an extends K {
}
v(an, "NAME", "dtable"), v(an, "Component", Nf), v(an, "definePlugin", $e), v(an, "removePlugin", va), v(an, "plugins", Xf);
var at;
class gn extends At {
  constructor() {
    super(...arguments);
    w(this, at, void 0);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && R(this, at, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), p(this, at).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && R(this, at, document.querySelector(t)), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(t, s) {
    const i = t.children;
    Array.from(i).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), s.classList.add("active"), s.classList.contains("fade") && this.transition(s).then(function() {
      s.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(s) {
      setTimeout(() => {
        t.classList.add("in"), s();
      }, 100);
    });
  }
}
at = new WeakMap(), v(gn, "NAME", "NavTabs"), v(gn, "NAV_CLASS", "nav-tabs"), v(gn, "EVENTS", !0), v(gn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new gn(e.target).showTarget());
});
export {
  S as $,
  Pr as ActionMenu,
  Hr as ActionMenuNested,
  xf as AjaxForm,
  Jr as Avatar,
  Zr as BtnGroup,
  Wr as Button,
  et as ContextMenu,
  an as DTable,
  ul as Dashboard,
  nt as Dropdown,
  Wo as EventBus,
  Fh as HElement,
  Jl as HtmlContent,
  jr as Menu,
  dn as Messager,
  pn as Modal,
  tt as ModalBase,
  xn as ModalTrigger,
  Qr as Nav,
  gn as NavTabs,
  el as Pager,
  sl as Picker,
  Gr as ProgressCircle,
  z as ReactComponent,
  Yr as Switch,
  Ot as TIME_DAY,
  il as Toolbar,
  ht as Tooltip,
  $l as addI18nMap,
  fa as ajaxSubmit,
  tl as calculateTimestamp,
  S as cash,
  M as classes,
  Zf as convertBytes,
  ct as createDate,
  Ee as createRef,
  Qf as dom,
  Jf as formatBytes,
  ko as formatDate,
  yd as formatDateSpan,
  rt as formatString,
  Gl as getClassList,
  Rl as getLang,
  Ja as getLangCode,
  _d as getTimeBeforeDesc,
  yt as h,
  td as hh,
  zh as htm,
  ie as i18n,
  gd as isDBY,
  no as isObject,
  cs as isSameDay,
  Yu as isSameMonth,
  fd as isSameWeek,
  Co as isSameYear,
  dd as isToday,
  md as isTomorrow,
  st as isValidElement,
  pd as isYesterday,
  _o as mergeDeep,
  yo as nativeEvents,
  Ho as render,
  Za as setLangCode,
  Du as store,
  jh as storeData,
  Bh as takeData
};
