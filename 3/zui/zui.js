var Qs = Object.defineProperty;
var tr = (n, e, t) => e in n ? Qs(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => (tr(n, typeof e != "symbol" ? e + "" : e, t), t), jn = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var d = (n, e, t) => (jn(n, e, "read from private field"), t ? t.call(n) : e.get(n)), b = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, M = (n, e, t, o) => (jn(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t);
var H = (n, e, t) => (jn(n, e, "access private method"), t);
const er = (n) => {
  const e = {};
  if (!n)
    return e;
  const t = Object.values(n.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    e[s] = r;
  }), e;
};
class nr extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
    this.$button = document.createElement("button");
    const t = this.innerHTML;
    this.innerHTML = "", this.$button.innerHTML = t, this.icon && (this.$icon = document.createElement("i"), this.addClass(this.$icon, `icon ${this.icon}`), this.$button.prepend(this.$icon)), this.$button.classList.add("btn"), this.append(this.$button);
  }
  connectedCallback() {
    this.initStyle(), this.initEventListen(), this.isDisabled && this.$button.setAttribute("disabled", "disabled"), this.$button.addEventListener("keydown", (t) => {
      switch (t.keyCode) {
        case 13:
          t.stopPropagation();
          break;
      }
    });
  }
  initStyle() {
    const t = er(this);
    if (t)
      for (const o in t)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${t[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(t, o) {
    t && t.classList.add(o);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(t) {
    this.getAttribute("type") ? (this.setAttribute("type", t), this.addClass(this.$button, `-${this.type}`)) : this.removeAttribute("type");
  }
  get size() {
    return this.getAttribute("size");
  }
  set size(t) {
    this.getAttribute("size") ? (this.setAttribute("size", t || "base"), this.addClass(this.$button, `-${t}`)) : this.removeAttribute("size");
  }
  get loading() {
    return this.getAttribute("loading");
  }
  set loading(t) {
    this.getAttribute("loading") ? this.setAttribute("loading", t || "") : this.removeAttribute("loading");
  }
  get rounded() {
    return this.getAttribute("rounded");
  }
  set rounded(t) {
    this.getAttribute("rounded") ? (this.setAttribute("rounded", t || ""), this.addClass(this.$button, `-${t}`)) : this.removeAttribute("rounded");
  }
  get isDisabled() {
    return this.getAttribute("isDisabled") !== null;
  }
  set isDisabled(t) {
    t === null || t === !1 ? this.removeAttribute("isDisabled") : this.setAttribute("isDisabled", "");
  }
  get icon() {
    return this.getAttribute("icon");
  }
  set icon(t) {
    this.setAttribute("icon", t);
  }
  static get observedAttributes() {
    return ["type", "size", "rounded", "disabled", "loading", "outline"];
  }
  get class() {
    return this.$button.classList;
  }
  attributeChangedCallback(t, o) {
    t === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", nr);
var An, j, Xo, Je, be, Eo, Ze = {}, Go = [], or = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Ko(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function Y(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? An.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Fe(n, a, o, s, null);
}
function Fe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Xo : s };
  return s == null && j.vnode != null && j.vnode(r), r;
}
function Jo() {
  return { current: null };
}
function $n(n) {
  return n.children;
}
function we(n, e) {
  this.props = n, this.context = e;
}
function le(n, e) {
  if (e == null)
    return n.__ ? le(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? le(n) : null;
}
function Zo(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Zo(n);
  }
}
function xo(n) {
  (!n.__d && (n.__d = !0) && be.push(n) && !Qe.__r++ || Eo !== j.debounceRendering) && ((Eo = j.debounceRendering) || setTimeout)(Qe);
}
function Qe() {
  for (var n; Qe.__r = be.length; )
    n = be.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), be = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = Lt({}, r)).__v = r.__v + 1, no(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? le(r) : a, r.__h), ns(o, r), r.__e != a && Zo(r)));
    });
}
function Qo(n, e, t, o, s, r, a, l, c, f) {
  var i, g, p, u, h, _, v, m = o && o.__k || Go, w = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Fe(null, u, null, null, u) : Array.isArray(u) ? Fe($n, { children: u }, null, null, null) : u.__b > 0 ? Fe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (p = m[i]) === null || p && u.key == p.key && u.type === p.type)
        m[i] = void 0;
      else
        for (g = 0; g < w; g++) {
          if ((p = m[g]) && u.key == p.key && u.type === p.type) {
            m[g] = void 0;
            break;
          }
          p = null;
        }
      no(n, u, p = p || Ze, s, r, a, l, c, f), h = u.__e, (g = u.ref) && p.ref != g && (v || (v = []), p.ref && v.push(p.ref, null, u), v.push(g, u.__c || h, u)), h != null ? (_ == null && (_ = h), typeof u.type == "function" && u.__k === p.__k ? u.__d = c = ts(u, c, n) : c = es(n, u, p, m, h, c), typeof t.type == "function" && (t.__d = c)) : c && p.__e == c && c.parentNode != n && (c = le(p));
    }
  for (t.__e = _, i = w; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = le(o, i + 1)), ss(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      os(v[i], v[++i], v[++i]);
}
function ts(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? ts(o, e, t) : es(t, o, o, s, o.__e, e));
  return e;
}
function es(n, e, t, o, s, r) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        n.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function sr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || tn(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || tn(n, r, e[r], t[r], o);
}
function ko(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || or.test(e) ? t : t + "px";
}
function tn(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || ko(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || ko(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Co : So, r) : n.removeEventListener(e, r ? Co : So, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? n.setAttribute(e, t) : n.removeAttribute(e));
    }
}
function So(n) {
  this.l[n.type + !1](j.event ? j.event(n) : n);
}
function Co(n) {
  this.l[n.type + !0](j.event ? j.event(n) : n);
}
function no(n, e, t, o, s, r, a, l, c) {
  var f, i, g, p, u, h, _, v, m, w, E, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = j.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], w = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, w) : (e.__c = i = new we(v, w), i.constructor = y, i.render = ir), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = w, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, y.getDerivedStateFromProps(v, i.__s))), p = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && v !== p && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, w), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, w) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(C) {
              C && (C.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, w), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(p, u, h);
          });
        }
        if (i.context = w, i.props = v, i.__v = e, i.__P = n, E = j.__r, x = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Lt(Lt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (h = i.getSnapshotBeforeUpdate(p, u)), S = f != null && f.type === $n && f.key == null ? f.props.children : f, Qo(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = rr(t.__e, e, t, o, s, r, a, c);
    (f = j.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), j.__e(C, e, t);
  }
}
function ns(n, e) {
  j.__c && j.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      j.__e(o, t.__v);
    }
  });
}
function rr(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, p = e.props, u = e.type, h = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; h < r.length; h++)
      if ((c = r[h]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(p);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, p.is && p), r = null, l = !1;
  }
  if (u === null)
    g === p || l && n.data === p || (n.data = p);
  else {
    if (r = r && An.call(n.childNodes), f = (g = t.props || Ze).dangerouslySetInnerHTML, i = p.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, h = 0; h < n.attributes.length; h++)
          g[n.attributes[h].name] = n.attributes[h].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (sr(n, p, g, s, l), i)
      e.__k = [];
    else if (h = e.props.children, Qo(n, Array.isArray(h) ? h : [h], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && le(t, 0), l), r != null)
      for (h = r.length; h--; )
        r[h] != null && Ko(r[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== n.value || u === "progress" && !h || u === "option" && h !== g.value) && tn(n, "value", h, g.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== n.checked && tn(n, "checked", h, g.checked, !1));
  }
  return n;
}
function os(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    j.__e(o, t);
  }
}
function ss(n, e, t) {
  var o, s;
  if (j.unmount && j.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || os(o, null, e)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        j.__e(r, e);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ss(o[s], e, typeof n.type != "function");
  t || n.__e == null || Ko(n.__e), n.__e = n.__d = void 0;
}
function ir(n, e, t) {
  return this.constructor(n, t);
}
function ar(n, e, t) {
  var o, s, r;
  j.__ && j.__(n, e), s = (o = typeof t == "function") ? null : t && t.__k || e.__k, r = [], no(e, n = (!o && t || e).__k = Y($n, null, [n]), s || Ze, Ze, e.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : e.firstChild ? An.call(e.childNodes) : null, r, !o && t ? t : s ? s.__e : e.firstChild, o), ns(r, n);
}
An = Go.slice, j = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, Xo = 0, Je = function(n) {
  return n != null && n.constructor === void 0;
}, we.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof n == "function" && (n = n(Lt({}, t), this.props)), n && Lt(t, n), n != null && this.__v && (e && this.__h.push(e), xo(this));
}, we.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), xo(this));
}, we.prototype.render = $n, be = [], Qe.__r = 0;
var vt;
class lr {
  constructor(e = "") {
    b(this, vt, void 0);
    typeof e == "object" ? M(this, vt, e) : M(this, vt, document.appendChild(document.createComment(e)));
  }
  on(e, t, o) {
    d(this, vt).addEventListener(e, t, o);
  }
  once(e, t, o) {
    d(this, vt).addEventListener(e, t, { once: !0, ...o });
  }
  off(e, t, o) {
    d(this, vt).removeEventListener(e, t, o);
  }
  emit(e) {
    return d(this, vt).dispatchEvent(e), e;
  }
}
vt = new WeakMap();
const Bn = /* @__PURE__ */ new Set([
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
class oo extends lr {
  on(e, t, o) {
    super.on(e, t, o);
  }
  off(e, t, o) {
    super.off(e, t, o);
  }
  once(e, t, o) {
    super.once(e, t, o);
  }
  emit(e, t) {
    return typeof e == "string" && (Bn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(oo.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Bn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
var _t, Se, It, me;
class Ro extends oo {
  constructor(t = "", o) {
    super(t);
    b(this, It);
    b(this, _t, /* @__PURE__ */ new Map());
    b(this, Se, void 0);
    M(this, Se, o == null ? void 0 : o.customEventSuffix);
  }
  on(t, o, s) {
    t = H(this, It, me).call(this, t), super.on(t, o, s), d(this, _t).set(o, [t, s]);
  }
  off(t, o, s) {
    t = H(this, It, me).call(this, t), super.off(t, o, s), d(this, _t).delete(o);
  }
  once(t, o, s) {
    t = H(this, It, me).call(this, t);
    const r = (a) => {
      o(a), d(this, _t).delete(r);
    };
    super.once(t, r, s), d(this, _t).set(r, [t, s]);
  }
  emit(t, o) {
    return typeof t == "string" && (t = H(this, It, me).call(this, t)), super.emit(t, o);
  }
  offAll() {
    Array.from(d(this, _t).entries()).forEach(([t, [o, s]]) => {
      super.off(o, t, s);
    }), d(this, _t).clear();
  }
}
_t = new WeakMap(), Se = new WeakMap(), It = new WeakSet(), me = function(t) {
  const o = d(this, Se);
  return Bn.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function cr(n) {
  return Object.fromEntries(Object.entries(n).map(([e, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [e, t];
  }));
}
var Mt, te, rt;
class On {
  constructor(e, t) {
    b(this, Mt, void 0);
    b(this, te, void 0);
    b(this, rt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, M(this, rt, new Ro(e, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, Mt, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? cr(e.dataset) : null, ...t }), this.constructor.all.set(e, this), M(this, te, e), this.init(), d(this, rt).emit("inited", this);
  }
  get options() {
    return d(this, Mt);
  }
  get element() {
    return d(this, te);
  }
  get events() {
    return d(this, rt);
  }
  init() {
  }
  setOptions(e) {
    return e && Object.assign(d(this, Mt), e), d(this, Mt);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(d(this, te)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(e, t, o) {
    d(this, rt).on(e, t, o);
  }
  once(e, t, o) {
    d(this, rt).once(e, t, o);
  }
  off(e, t, o) {
    d(this, rt).off(e, t, o);
  }
  emit(e, t) {
    let o = Ro.createEvent(e, t);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = d(this, Mt)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = d(this, rt).emit(o), o;
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
    const e = this.NAME;
    if (this.allComponents.has(e))
      return this.allComponents.get(e);
    const t = /* @__PURE__ */ new Map();
    return this.allComponents.set(e, t), t;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, t) {
    return this.get(e) || new this(e, t);
  }
}
Mt = new WeakMap(), te = new WeakMap(), rt = new WeakMap(), D(On, "allComponents", /* @__PURE__ */ new Map());
var Ce;
class rs extends On {
  constructor() {
    super(...arguments);
    b(this, Ce, Jo());
  }
  get $() {
    return d(this, Ce).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    ar(/* @__PURE__ */ Y(o, {
      ref: d(this, Ce),
      ...this.setOptions(t)
    }), this.element);
  }
}
Ce = new WeakMap();
const P = (...n) => n.map((e) => Array.isArray(e) ? P(...e) : typeof e == "function" ? P(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const o = e[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function ur(n) {
  const {
    rootClass: e,
    rootProps: t,
    className: o,
    url: s,
    target: r,
    disabled: a,
    active: l,
    icon: c,
    title: f,
    trailingIcon: i,
    children: g,
    ...p
  } = n;
  return /* @__PURE__ */ Y("li", {
    className: P(e),
    ...t
  }, /* @__PURE__ */ Y("a", {
    className: P("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...p
  }, Je(c) ? c : typeof c == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${c}`
  }) : null, f, Je(i) ? i : typeof i == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${i}`
  }) : null), g);
}
function fr({ className: n }) {
  return /* @__PURE__ */ Y("div", {
    class: P("menu-divider", n)
  });
}
function hr({ className: n, title: e, children: t, ...o }) {
  return /* @__PURE__ */ Y("li", {
    class: P("menu-heading", n),
    ...o
  }, e, t);
}
var Re, cn, is, Me, un, fn;
const po = class extends we {
  constructor() {
    super(...arguments);
    b(this, cn);
    D(this, "state", { shownSubs: {} });
    b(this, Re, Jo());
    b(this, Me, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, Y);
      const { afterRender: s, onClickItem: r, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ Y(po, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: d(this, Me),
        afterRender: s,
        onClickItem: r,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    b(this, un, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    b(this, fn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !1), o.preventDefault());
    });
  }
  get $() {
    return d(this, Re).current;
  }
  componentDidMount() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, this);
  }
  componentDidUpdate() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, this);
  }
  componentWillUnmount() {
    var t, o;
    (o = (t = this.props).beforeDestroy) == null || o.call(t, this);
  }
  toggleSubMenu(t, o) {
    const { shownSubs: s } = this.state;
    o === void 0 && (o = !s[t]), o ? s[t] = !0 : delete s[t], this.setState({ shownSubs: { ...s } });
  }
  clearAllSubMenu() {
    this.setState({ shownSubs: {} });
  }
  isSubMenuShow(t) {
    return this.state.shownSubs[t];
  }
  render() {
    const {
      className: t,
      items: o,
      hasIcons: s,
      children: r,
      onClickItem: a,
      subMenuTrigger: l,
      onRenderItem: c,
      onRenderSubMenu: f,
      afterRender: i,
      beforeDestroy: g,
      ...p
    } = this.props, u = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ Y("menu", {
      class: P(
        "menu",
        t,
        (s != null ? s : u == null ? void 0 : u.some((h) => "icon" in h)) ? "has-icons" : ""
      ),
      ...p,
      ref: d(this, Re)
    }, u == null ? void 0 : u.map((h, _) => {
      const v = { type: "item", key: _, ...h };
      if (c) {
        const $ = c(this, v, _, Y);
        $ && Object.assign(v, $);
      }
      const { key: m = _, type: w = "item", ...E } = v;
      if (w === "heading")
        return /* @__PURE__ */ Y(hr, {
          ...E,
          key: m
        });
      if (w === "divider")
        return /* @__PURE__ */ Y(fr, {
          ...E,
          key: m
        });
      const { onClick: x, items: S, ...y } = E, C = {
        ...y,
        key: m,
        onClick: H(this, cn, is).bind(this, v, _, x)
      }, k = S && this.state.shownSubs[m];
      return S && (C.rootClass = P(C.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (C.rootProps = {
        ...C.rootProps,
        onMouseEnter: d(this, un).bind(this, m),
        onMouseLeave: d(this, fn).bind(this, m)
      })), /* @__PURE__ */ Y(ur, {
        ...C
      }, k && d(this, Me).call(this, v));
    }), r);
  }
};
let zn = po;
Re = new WeakMap(), cn = new WeakSet(), is = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a(t, o, r), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, Me = new WeakMap(), un = new WeakMap(), fn = new WeakMap();
class as extends rs {
}
D(as, "Component", zn);
var so, I, ls, cs, Ee, Mo, us = {}, fs = [], dr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function hs(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function A(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? so.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return qe(n, a, o, s, null);
}
function qe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ls : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function pr() {
  return { current: null };
}
function ro(n) {
  return n.children;
}
function Xt(n, e) {
  this.props = n, this.context = e;
}
function ce(n, e) {
  if (e == null)
    return n.__ ? ce(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? ce(n) : null;
}
function ds(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ds(n);
  }
}
function Ao(n) {
  (!n.__d && (n.__d = !0) && Ee.push(n) && !en.__r++ || Mo !== I.debounceRendering) && ((Mo = I.debounceRendering) || setTimeout)(en);
}
function en() {
  for (var n; en.__r = Ee.length; )
    n = Ee.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), Ee = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, _s(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ce(r) : a, r.__h), vr(o, r), r.__e != a && ds(r)));
    });
}
function ps(n, e, t, o, s, r, a, l, c, f) {
  var i, g, p, u, h, _, v, m = o && o.__k || fs, w = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? qe(null, u, null, null, u) : Array.isArray(u) ? qe(ro, { children: u }, null, null, null) : u.__b > 0 ? qe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (p = m[i]) === null || p && u.key == p.key && u.type === p.type)
        m[i] = void 0;
      else
        for (g = 0; g < w; g++) {
          if ((p = m[g]) && u.key == p.key && u.type === p.type) {
            m[g] = void 0;
            break;
          }
          p = null;
        }
      _s(n, u, p = p || us, s, r, a, l, c, f), h = u.__e, (g = u.ref) && p.ref != g && (v || (v = []), p.ref && v.push(p.ref, null, u), v.push(g, u.__c || h, u)), h != null ? (_ == null && (_ = h), typeof u.type == "function" && u.__k === p.__k ? u.__d = c = gs(u, c, n) : c = vs(n, u, p, m, h, c), typeof t.type == "function" && (t.__d = c)) : c && p.__e == c && c.parentNode != n && (c = ce(p));
    }
  for (t.__e = _, i = w; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = ce(o, i + 1)), ys(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ms(v[i], v[++i], v[++i]);
}
function gs(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? gs(o, e, t) : vs(t, o, o, s, o.__e, e));
  return e;
}
function vs(n, e, t, o, s, r) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        n.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function gr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || nn(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || nn(n, r, e[r], t[r], o);
}
function $o(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || dr.test(e) ? t : t + "px";
}
function nn(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || $o(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || $o(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Lo : Oo, r) : n.removeEventListener(e, r ? Lo : Oo, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? n.setAttribute(e, t) : n.removeAttribute(e));
    }
}
function Oo(n) {
  this.l[n.type + !1](I.event ? I.event(n) : n);
}
function Lo(n) {
  this.l[n.type + !0](I.event ? I.event(n) : n);
}
function _s(n, e, t, o, s, r, a, l, c) {
  var f, i, g, p, u, h, _, v, m, w, E, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = I.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], w = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, w) : (e.__c = i = new Xt(v, w), i.constructor = y, i.render = mr), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = w, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, y.getDerivedStateFromProps(v, i.__s))), p = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && v !== p && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, w), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, w) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(C) {
              C && (C.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, w), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(p, u, h);
          });
        }
        if (i.context = w, i.props = v, i.__v = e, i.__P = n, E = I.__r, x = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (h = i.getSnapshotBeforeUpdate(p, u)), S = f != null && f.type === ro && f.key == null ? f.props.children : f, ps(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = _r(t.__e, e, t, o, s, r, a, c);
    (f = I.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), I.__e(C, e, t);
  }
}
function vr(n, e) {
  I.__c && I.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      I.__e(o, t.__v);
    }
  });
}
function _r(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, p = e.props, u = e.type, h = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; h < r.length; h++)
      if ((c = r[h]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(p);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, p.is && p), r = null, l = !1;
  }
  if (u === null)
    g === p || l && n.data === p || (n.data = p);
  else {
    if (r = r && so.call(n.childNodes), f = (g = t.props || us).dangerouslySetInnerHTML, i = p.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, h = 0; h < n.attributes.length; h++)
          g[n.attributes[h].name] = n.attributes[h].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (gr(n, p, g, s, l), i)
      e.__k = [];
    else if (h = e.props.children, ps(n, Array.isArray(h) ? h : [h], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ce(t, 0), l), r != null)
      for (h = r.length; h--; )
        r[h] != null && hs(r[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== n.value || u === "progress" && !h || u === "option" && h !== g.value) && nn(n, "value", h, g.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== n.checked && nn(n, "checked", h, g.checked, !1));
  }
  return n;
}
function ms(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    I.__e(o, t);
  }
}
function ys(n, e, t) {
  var o, s;
  if (I.unmount && I.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || ms(o, null, e)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, e);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ys(o[s], e, typeof n.type != "function");
  t || n.__e == null || hs(n.__e), n.__e = n.__d = void 0;
}
function mr(n, e, t) {
  return this.constructor(n, t);
}
so = fs.slice, I = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, ls = 0, cs = function(n) {
  return n != null && n.constructor === void 0;
}, Xt.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof n == "function" && (n = n(Nt({}, t), this.props)), n && Nt(t, n), n != null && this.__v && (e && this.__h.push(e), Ao(this));
}, Xt.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ao(this));
}, Xt.prototype.render = ro, Ee = [], en.__r = 0;
var Bt, zt;
class No extends Xt {
  constructor(t) {
    var o;
    super(t);
    b(this, Bt, 0);
    b(this, zt, null);
    D(this, "_handleWheel", (t) => {
      var r;
      const { wheelContainer: o } = this.props, s = t.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(a) && t.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (t) => {
      const { dragStart: o } = this.state;
      o && (d(this, Bt) && cancelAnimationFrame(d(this, Bt)), M(this, Bt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), M(this, Bt, 0);
      })), t.preventDefault());
    });
    D(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    D(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    D(this, "_handleClick", (t) => {
      const o = t.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, c = (r === "horz" ? t.clientX - s.left : t.clientY - s.top) - this.barSize / 2;
      this.scroll(c * l / a), t.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    var t;
    return (t = this.props.scrollPos) != null ? t : this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: t, clientSize: o } = this.props;
    return Math.max(0, t - o);
  }
  get barSize() {
    const { clientSize: t, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(t * t / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (M(this, zt, typeof t == "string" ? document : t.current), d(this, zt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, zt) && d(this, zt).removeEventListener("wheel", this._handleWheel);
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
    var s;
    const { onScroll: o } = this.props;
    o && o(t, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: t,
      type: o,
      size: s = 12,
      className: r,
      style: a,
      left: l,
      top: c,
      bottom: f,
      right: i
    } = this.props, { maxScrollPos: g, scrollPos: p } = this, { dragStart: u } = this.state, h = {
      left: l,
      top: c,
      bottom: f,
      right: i,
      ...a
    }, _ = {};
    return o === "horz" ? (h.height = s, h.width = t, _.width = this.barSize, _.left = Math.round(Math.min(g, p) * (t - _.width) / g)) : (h.width = s, h.height = t, _.height = this.barSize, _.top = Math.round(Math.min(g, p) * (t - _.height) / g)), /* @__PURE__ */ A("div", {
      className: P("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ A("div", {
      className: "scrollbar-bar",
      style: _,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Bt = new WeakMap(), zt = new WeakMap();
function ye(n, ...e) {
  var t;
  if (e.length === 0)
    return n;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const o = e[0];
    return Object.keys(o).forEach((s) => {
      var a;
      const r = (a = o[s]) != null ? a : 0;
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < e.length; o++) {
    const s = (t = e[o]) != null ? t : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return n;
}
var io = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(io || {});
function yr(n, e = 2, t = "") {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / io[t]).toFixed(e) + t);
}
const br = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const o = t[1];
  return n = n.replace(o, ""), Number.parseInt(n, 10) * io[o];
};
function wr(n) {
  const e = typeof n == "string" ? document.querySelector(n) : n;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const o = document.createRange();
      return o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o), !0;
    }
  }
  return !1;
}
function Er(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function xr(n, e) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: wr,
  domReady: Er,
  isElementVisible: xr,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
let bs = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Ae, At, it, ee, ne, Ve;
const go = class {
  constructor(e, t = "local") {
    b(this, ne);
    b(this, Ae, void 0);
    b(this, At, void 0);
    b(this, it, void 0);
    b(this, ee, void 0);
    M(this, Ae, t), M(this, At, `ZUI_STORE:${e != null ? e : bs()}`), M(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, Ae);
  }
  get session() {
    return this.type === "session" ? this : (d(this, ee) || M(this, ee, new go(d(this, At), "session")), d(this, ee));
  }
  get(e, t) {
    const o = d(this, it).getItem(H(this, ne, Ve).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    d(this, it).setItem(H(this, ne, Ve).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    d(this, it).removeItem(H(this, ne, Ve).call(this, e));
  }
  each(e) {
    for (let t = 0; t < d(this, it).length; t++) {
      const o = d(this, it).key(t);
      if (o != null && o.startsWith(d(this, At))) {
        const s = d(this, it).getItem(o);
        typeof s == "string" && e(o.substring(d(this, At).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const e = {};
    return this.each((t, o) => {
      e[t] = o;
    }), e;
  }
};
let on = go;
Ae = new WeakMap(), At = new WeakMap(), it = new WeakMap(), ee = new WeakMap(), ne = new WeakSet(), Ve = function(e) {
  return `${d(this, At)}:${e}`;
};
const kr = new on("DEFAULT");
function Sr(n, e = "local") {
  return new on(n, e);
}
Object.assign(kr, { create: Sr });
class oa extends Xt {
  render() {
    const { size: e, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ A("img", {
      src: r,
      alt: a
    }) : g = a, typeof e == "number" ? (i.width = e, i.height = e) : typeof e == "string" && f.push(`avatar-${e}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ A("div", {
      className: P(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Cr() {
  const n = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${n}px`, document.body.classList.add("modal-open");
}
function Rr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Mr(n, e) {
  Cr(), n.classList.add("block"), Do(n, e), n.onclick = (t) => Ar(t, n), window.addEventListener("resize", () => {
    Do(n, e);
  });
}
function ws(n) {
  var e;
  Rr(), (e = n.classList) == null || e.remove("block");
}
function Do(n, e) {
  const t = n.querySelector(".modal-dialog");
  if (!t)
    return;
  const o = Math.max(0, (window.innerHeight - t.clientHeight) / 2);
  if (e === "fit") {
    t.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (e === "center") {
    t.style.top = `${o}px`;
    return;
  }
  t.style.top = e;
}
function Ar(n, e) {
  n.target.closest("[data-dismiss=modal]") && (n.stopPropagation(), ws(e));
}
function $r(n) {
  var e, t;
  return n instanceof HTMLAnchorElement ? (t = (e = (n.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : t.selector : n.dataset.target;
}
document.addEventListener("click", (n) => {
  const e = n.target, t = e.closest("[data-toggle=modal]");
  if (t) {
    const o = $r(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Mr(s, t.dataset.position || "fit");
  } else
    e.className.includes("modal") && ws(e);
});
function Q(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Kt(n) {
  var e = Q(n).Element;
  return n instanceof e || n instanceof Element;
}
function Z(n) {
  var e = Q(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function ao(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Q(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
var Gt = Math.max, sn = Math.min, ue = Math.round;
function Un() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Es() {
  return !/^((?!chrome|android).)*safari/i.test(Un());
}
function fe(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var o = n.getBoundingClientRect(), s = 1, r = 1;
  e && Z(n) && (s = n.offsetWidth > 0 && ue(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && ue(o.height) / n.offsetHeight || 1);
  var a = Kt(n) ? Q(n) : window, l = a.visualViewport, c = !Es() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, p = o.height / r;
  return {
    width: g,
    height: p,
    top: i,
    right: f + g,
    bottom: i + p,
    left: f,
    x: f,
    y: i
  };
}
function lo(n) {
  var e = Q(n), t = e.pageXOffset, o = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function Or(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Lr(n) {
  return n === Q(n) || !Z(n) ? lo(n) : Or(n);
}
function ft(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Pt(n) {
  return ((Kt(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function co(n) {
  return fe(Pt(n)).left + lo(n).scrollLeft;
}
function ot(n) {
  return Q(n).getComputedStyle(n);
}
function uo(n) {
  var e = ot(n), t = e.overflow, o = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Nr(n) {
  var e = n.getBoundingClientRect(), t = ue(e.width) / n.offsetWidth || 1, o = ue(e.height) / n.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function Dr(n, e, t) {
  t === void 0 && (t = !1);
  var o = Z(e), s = Z(e) && Nr(e), r = Pt(e), a = fe(n, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(e) !== "body" || uo(r)) && (l = Lr(e)), Z(e) ? (c = fe(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : r && (c.x = co(r))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function xs(n) {
  var e = fe(n), t = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: o
  };
}
function Ln(n) {
  return ft(n) === "html" ? n : n.assignedSlot || n.parentNode || (ao(n) ? n.host : null) || Pt(n);
}
function ks(n) {
  return ["html", "body", "#document"].indexOf(ft(n)) >= 0 ? n.ownerDocument.body : Z(n) && uo(n) ? n : ks(Ln(n));
}
function xe(n, e) {
  var t;
  e === void 0 && (e = []);
  var o = ks(n), s = o === ((t = n.ownerDocument) == null ? void 0 : t.body), r = Q(o), a = s ? [r].concat(r.visualViewport || [], uo(o) ? o : []) : o, l = e.concat(a);
  return s ? l : l.concat(xe(Ln(a)));
}
function Pr(n) {
  return ["table", "td", "th"].indexOf(ft(n)) >= 0;
}
function Po(n) {
  return !Z(n) || ot(n).position === "fixed" ? null : n.offsetParent;
}
function Tr(n) {
  var e = /firefox/i.test(Un()), t = /Trident/i.test(Un());
  if (t && Z(n)) {
    var o = ot(n);
    if (o.position === "fixed")
      return null;
  }
  var s = Ln(n);
  for (ao(s) && (s = s.host); Z(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || e && r.willChange === "filter" || e && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Nn(n) {
  for (var e = Q(n), t = Po(n); t && Pr(t) && ot(t).position === "static"; )
    t = Po(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? e : t || Tr(n) || e;
}
var nt = "top", ht = "bottom", Dt = "right", wt = "left", Dn = "auto", Pn = [nt, ht, Dt, wt], he = "start", ke = "end", Hr = "clippingParents", Ss = "viewport", ve = "popper", jr = "reference", To = /* @__PURE__ */ Pn.reduce(function(n, e) {
  return n.concat([e + "-" + he, e + "-" + ke]);
}, []), Wr = /* @__PURE__ */ [].concat(Pn, [Dn]).reduce(function(n, e) {
  return n.concat([e, e + "-" + he, e + "-" + ke]);
}, []), Ir = "beforeRead", Br = "read", zr = "afterRead", Ur = "beforeMain", Fr = "main", qr = "afterMain", Vr = "beforeWrite", Yr = "write", Xr = "afterWrite", Fn = [Ir, Br, zr, Ur, Fr, qr, Vr, Yr, Xr];
function Gr(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  n.forEach(function(r) {
    e.set(r.name, r);
  });
  function s(r) {
    t.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(l) {
      if (!t.has(l)) {
        var c = e.get(l);
        c && s(c);
      }
    }), o.push(r);
  }
  return n.forEach(function(r) {
    t.has(r.name) || s(r);
  }), o;
}
function Kr(n) {
  var e = Gr(n);
  return Fn.reduce(function(t, o) {
    return t.concat(e.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Jr(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function Ct(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, n);
}
var Wt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Zr = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ho = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Qr(n) {
  n.forEach(function(e) {
    [].concat(Object.keys(e), Ho).filter(function(t, o, s) {
      return s.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof e.name != "string" && console.error(Ct(Wt, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Ct(Wt, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Fn.indexOf(e.phase) < 0 && console.error(Ct(Wt, e.name, '"phase"', "either " + Fn.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Ct(Wt, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Ct(Wt, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Ct(Wt, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Ct(Wt, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + Ho.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      e.requires && e.requires.forEach(function(o) {
        n.find(function(s) {
          return s.name === o;
        }) == null && console.error(Ct(Zr, String(e.name), o, o));
      });
    });
  });
}
function ti(n, e) {
  var t = /* @__PURE__ */ new Set();
  return n.filter(function(o) {
    var s = e(o);
    if (!t.has(s))
      return t.add(s), !0;
  });
}
function Et(n) {
  return n.split("-")[0];
}
function ei(n) {
  var e = n.reduce(function(t, o) {
    var s = t[o.name];
    return t[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
function ni(n, e) {
  var t = Q(n), o = Pt(n), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = Es();
    (f || !f && e === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + co(n),
    y: c
  };
}
function oi(n) {
  var e, t = Pt(n), o = lo(n), s = (e = n.ownerDocument) == null ? void 0 : e.body, r = Gt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Gt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + co(n), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Gt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function si(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && ao(t)) {
    var o = e;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function qn(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function ri(n, e) {
  var t = fe(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function jo(n, e, t) {
  return e === Ss ? qn(ni(n, t)) : Kt(e) ? ri(e, t) : qn(oi(Pt(n)));
}
function ii(n) {
  var e = xe(Ln(n)), t = ["absolute", "fixed"].indexOf(ot(n).position) >= 0, o = t && Z(n) ? Nn(n) : n;
  return Kt(o) ? e.filter(function(s) {
    return Kt(s) && si(s, o) && ft(s) !== "body";
  }) : [];
}
function ai(n, e, t, o) {
  var s = e === "clippingParents" ? ii(n) : [].concat(e), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = jo(n, f, o);
    return c.top = Gt(i.top, c.top), c.right = sn(i.right, c.right), c.bottom = sn(i.bottom, c.bottom), c.left = Gt(i.left, c.left), c;
  }, jo(n, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function de(n) {
  return n.split("-")[1];
}
function Cs(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Rs(n) {
  var e = n.reference, t = n.element, o = n.placement, s = o ? Et(o) : null, r = o ? de(o) : null, a = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, c;
  switch (s) {
    case nt:
      c = {
        x: a,
        y: e.y - t.height
      };
      break;
    case ht:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case Dt:
      c = {
        x: e.x + e.width,
        y: l
      };
      break;
    case wt:
      c = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var f = s ? Cs(s) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (r) {
      case he:
        c[f] = c[f] - (e[i] / 2 - t[i] / 2);
        break;
      case ke:
        c[f] = c[f] + (e[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function Ms() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function li(n) {
  return Object.assign({}, Ms(), n);
}
function ci(n, e) {
  return e.reduce(function(t, o) {
    return t[o] = n, t;
  }, {});
}
function fo(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = o === void 0 ? n.placement : o, r = t.strategy, a = r === void 0 ? n.strategy : r, l = t.boundary, c = l === void 0 ? Hr : l, f = t.rootBoundary, i = f === void 0 ? Ss : f, g = t.elementContext, p = g === void 0 ? ve : g, u = t.altBoundary, h = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, m = li(typeof v != "number" ? v : ci(v, Pn)), w = p === ve ? jr : ve, E = n.rects.popper, x = n.elements[h ? w : p], S = ai(Kt(x) ? x : x.contextElement || Pt(n.elements.popper), c, i, a), y = fe(n.elements.reference), C = Rs({
    reference: y,
    element: E,
    strategy: "absolute",
    placement: s
  }), k = qn(Object.assign({}, E, C)), $ = p === ve ? k : y, L = {
    top: S.top - $.top + m.top,
    bottom: $.bottom - S.bottom + m.bottom,
    left: S.left - $.left + m.left,
    right: $.right - S.right + m.right
  }, O = n.modifiersData.offset;
  if (p === ve && O) {
    var U = O[s];
    Object.keys(L).forEach(function(B) {
      var tt = [Dt, ht].indexOf(B) >= 0 ? 1 : -1, F = [nt, ht].indexOf(B) >= 0 ? "y" : "x";
      L[B] += U[F] * tt;
    });
  }
  return L;
}
var Wo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ui = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Io = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function fi(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, o = t === void 0 ? [] : t, s = e.defaultOptions, r = s === void 0 ? Io : s;
  return function(l, c, f) {
    f === void 0 && (f = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Io, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, g = [], p = !1, u = {
      state: i,
      setOptions: function(m) {
        var w = typeof m == "function" ? m(i.options) : m;
        _(), i.options = Object.assign({}, r, i.options, w), i.scrollParents = {
          reference: Kt(l) ? xe(l) : l.contextElement ? xe(l.contextElement) : [],
          popper: xe(c)
        };
        var E = Kr(ei([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = E.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = ti([].concat(E, i.options.modifiers), function(O) {
            var U = O.name;
            return U;
          });
          if (Qr(x), Et(i.options.placement) === Dn) {
            var S = i.orderedModifiers.find(function(O) {
              var U = O.name;
              return U === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ot(c), C = y.marginTop, k = y.marginRight, $ = y.marginBottom, L = y.marginLeft;
          [C, k, $, L].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), u.update();
      },
      forceUpdate: function() {
        if (!p) {
          var m = i.elements, w = m.reference, E = m.popper;
          if (!Bo(w, E)) {
            process.env.NODE_ENV !== "production" && console.error(Wo);
            return;
          }
          i.rects = {
            reference: Dr(w, Nn(E), i.options.strategy === "fixed"),
            popper: xs(E)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var x = 0, S = 0; S < i.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(ui);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, S = -1;
              continue;
            }
            var y = i.orderedModifiers[S], C = y.fn, k = y.options, $ = k === void 0 ? {} : k, L = y.name;
            typeof C == "function" && (i = C({
              state: i,
              options: $,
              name: L,
              instance: u
            }) || i);
          }
        }
      },
      update: Jr(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(i);
        });
      }),
      destroy: function() {
        _(), p = !0;
      }
    };
    if (!Bo(l, c))
      return process.env.NODE_ENV !== "production" && console.error(Wo), u;
    u.setOptions(f).then(function(v) {
      !p && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function h() {
      i.orderedModifiers.forEach(function(v) {
        var m = v.name, w = v.options, E = w === void 0 ? {} : w, x = v.effect;
        if (typeof x == "function") {
          var S = x({
            state: i,
            name: m,
            instance: u,
            options: E
          }), y = function() {
          };
          g.push(S || y);
        }
      });
    }
    function _() {
      g.forEach(function(v) {
        return v();
      }), g = [];
    }
    return u;
  };
}
var ze = {
  passive: !0
};
function hi(n) {
  var e = n.state, t = n.instance, o = n.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = Q(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, ze);
  }), l && c.addEventListener("resize", t.update, ze), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, ze);
    }), l && c.removeEventListener("resize", t.update, ze);
  };
}
const di = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hi,
  data: {}
};
function pi(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Rs({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const gi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pi,
  data: {}
};
var vi = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _i(n) {
  var e = n.x, t = n.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: ue(e * s) / s || 0,
    y: ue(t * s) / s || 0
  };
}
function zo(n) {
  var e, t = n.popper, o = n.popperRect, s = n.placement, r = n.variation, a = n.offsets, l = n.position, c = n.gpuAcceleration, f = n.adaptive, i = n.roundOffsets, g = n.isFixed, p = a.x, u = p === void 0 ? 0 : p, h = a.y, _ = h === void 0 ? 0 : h, v = typeof i == "function" ? i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  u = v.x, _ = v.y;
  var m = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), E = wt, x = nt, S = window;
  if (f) {
    var y = Nn(t), C = "clientHeight", k = "clientWidth";
    if (y === Q(t) && (y = Pt(t), ot(y).position !== "static" && l === "absolute" && (C = "scrollHeight", k = "scrollWidth")), y = y, s === nt || (s === wt || s === Dt) && r === ke) {
      x = ht;
      var $ = g && y === S && S.visualViewport ? S.visualViewport.height : y[C];
      _ -= $ - o.height, _ *= c ? 1 : -1;
    }
    if (s === wt || (s === nt || s === ht) && r === ke) {
      E = Dt;
      var L = g && y === S && S.visualViewport ? S.visualViewport.width : y[k];
      u -= L - o.width, u *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, f && vi), U = i === !0 ? _i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  if (u = U.x, _ = U.y, c) {
    var B;
    return Object.assign({}, O, (B = {}, B[x] = w ? "0" : "", B[E] = m ? "0" : "", B.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + _ + "px)" : "translate3d(" + u + "px, " + _ + "px, 0)", B));
  }
  return Object.assign({}, O, (e = {}, e[x] = w ? _ + "px" : "", e[E] = m ? u + "px" : "", e.transform = "", e));
}
function mi(n) {
  var e = n.state, t = n.options, o = t.gpuAcceleration, s = o === void 0 ? !0 : o, r = t.adaptive, a = r === void 0 ? !0 : r, l = t.roundOffsets, c = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(e.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return f.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: Et(e.placement),
    variation: de(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: s,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, zo(Object.assign({}, i, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, zo(Object.assign({}, i, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const yi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: mi,
  data: {}
};
function bi(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var o = e.styles[t] || {}, s = e.attributes[t] || {}, r = e.elements[t];
    !Z(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function wi(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(o) {
      var s = e.elements[o], r = e.attributes[o] || {}, a = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : t[o]), l = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !Z(s) || !ft(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
const Ei = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bi,
  effect: wi,
  requires: ["computeStyles"]
};
var xi = [di, gi, yi, Ei], Vn = /* @__PURE__ */ fi({
  defaultModifiers: xi
});
function ki(n) {
  return n === "x" ? "y" : "x";
}
function Ye(n, e, t) {
  return Gt(n, sn(e, t));
}
function Si(n, e, t) {
  var o = Ye(n, e, t);
  return o > t ? t : o;
}
function Ci(n) {
  var e = n.state, t = n.options, o = n.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, p = t.tether, u = p === void 0 ? !0 : p, h = t.tetherOffset, _ = h === void 0 ? 0 : h, v = fo(e, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), m = Et(e.placement), w = de(e.placement), E = !w, x = Cs(m), S = ki(x), y = e.modifiersData.popperOffsets, C = e.rects.reference, k = e.rects.popper, $ = typeof _ == "function" ? _(Object.assign({}, e.rects, {
    placement: e.placement
  })) : _, L = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), O = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var B, tt = x === "y" ? nt : wt, F = x === "y" ? ht : Dt, W = x === "y" ? "height" : "width", X = y[x], xt = X + v[tt], dt = X - v[F], Jt = u ? -k[W] / 2 : 0, pt = w === he ? C[W] : k[W], kt = w === he ? -k[W] : -C[W], Tt = e.elements.arrow, gt = u && Tt ? xs(Tt) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ms(), N = R[tt], z = R[F], q = Ye(0, C[W], gt[W]), et = E ? C[W] / 2 - Jt - q - N - L.mainAxis : pt - q - N - L.mainAxis, Ht = E ? -C[W] / 2 + Jt + q + z + L.mainAxis : kt + q + z + L.mainAxis, St = e.elements.arrow && Nn(e.elements.arrow), He = St ? x === "y" ? St.clientTop || 0 : St.clientLeft || 0 : 0, je = (B = O == null ? void 0 : O[x]) != null ? B : 0, Tn = X + et - je - He, T = X + Ht - je, ge = Ye(u ? sn(xt, Tn) : xt, X, u ? Gt(dt, T) : dt);
      y[x] = ge, U[x] = ge - X;
    }
    if (l) {
      var jt, We = x === "x" ? nt : wt, Ie = x === "x" ? ht : Dt, st = y[S], Be = S === "y" ? "height" : "width", vo = st + v[We], _o = st - v[Ie], Hn = [nt, wt].indexOf(m) !== -1, mo = (jt = O == null ? void 0 : O[S]) != null ? jt : 0, yo = Hn ? vo : st - C[Be] - k[Be] - mo + L.altAxis, bo = Hn ? st + C[Be] + k[Be] - mo - L.altAxis : _o, wo = u && Hn ? Si(yo, st, bo) : Ye(u ? yo : vo, st, u ? bo : _o);
      y[S] = wo, U[S] = wo - st;
    }
    e.modifiersData[o] = U;
  }
}
const Yn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ci,
  requiresIfExists: ["offset"]
};
var Ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xe(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return Ri[e];
  });
}
var Mi = {
  start: "end",
  end: "start"
};
function Uo(n) {
  return n.replace(/start|end/g, function(e) {
    return Mi[e];
  });
}
function Ai(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? Wr : c, i = de(o), g = i ? l ? To : To.filter(function(h) {
    return de(h) === i;
  }) : Pn, p = g.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  p.length === 0 && (p = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = p.reduce(function(h, _) {
    return h[_] = fo(n, {
      placement: _,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[Et(_)], h;
  }, {});
  return Object.keys(u).sort(function(h, _) {
    return u[h] - u[_];
  });
}
function $i(n) {
  if (Et(n) === Dn)
    return [];
  var e = Xe(n);
  return [Uo(n), e, Uo(e)];
}
function Oi(n) {
  var e = n.state, t = n.options, o = n.name;
  if (!e.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, p = t.altBoundary, u = t.flipVariations, h = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = e.options.placement, m = Et(v), w = m === v, E = c || (w || !h ? [Xe(v)] : $i(v)), x = [v].concat(E).reduce(function(gt, R) {
      return gt.concat(Et(R) === Dn ? Ai(e, {
        placement: R,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: _
      }) : R);
    }, []), S = e.rects.reference, y = e.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, $ = x[0], L = 0; L < x.length; L++) {
      var O = x[L], U = Et(O), B = de(O) === he, tt = [nt, ht].indexOf(U) >= 0, F = tt ? "width" : "height", W = fo(e, {
        placement: O,
        boundary: i,
        rootBoundary: g,
        altBoundary: p,
        padding: f
      }), X = tt ? B ? Dt : wt : B ? ht : nt;
      S[F] > y[F] && (X = Xe(X));
      var xt = Xe(X), dt = [];
      if (r && dt.push(W[U] <= 0), l && dt.push(W[X] <= 0, W[xt] <= 0), dt.every(function(gt) {
        return gt;
      })) {
        $ = O, k = !1;
        break;
      }
      C.set(O, dt);
    }
    if (k)
      for (var Jt = h ? 3 : 1, pt = function(R) {
        var N = x.find(function(z) {
          var q = C.get(z);
          if (q)
            return q.slice(0, R).every(function(et) {
              return et;
            });
        });
        if (N)
          return $ = N, "break";
      }, kt = Jt; kt > 0; kt--) {
        var Tt = pt(kt);
        if (Tt === "break")
          break;
      }
    e.placement !== $ && (e.modifiersData[o]._skip = !0, e.placement = $, e.reset = !0);
  }
}
const Xn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Oi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function As(n) {
  return n.button === 2;
}
const Li = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Wn = "show", Ge = "contextmenu";
var Ut, J, Ft, oe, $e, qt, Oe, Gn, hn, dn, pn, gn, $s, vn, Os;
const Rt = class extends On {
  constructor() {
    super(...arguments);
    b(this, Oe);
    b(this, gn);
    b(this, vn);
    b(this, Ut, void 0);
    b(this, J, void 0);
    b(this, Ft, /* @__PURE__ */ new Map());
    b(this, oe, void 0);
    b(this, $e, void 0);
    b(this, qt, void 0);
    b(this, hn, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = d(this, Ft).get(t);
      s || (s = Vn(o.parentElement, o, {
        modifiers: [Yn, Xn],
        placement: "right-start"
      }), d(this, Ft).set(t, s)), s.update();
    });
    b(this, dn, (t) => {
      const o = d(this, Ft).get(t);
      o && (o.destroy(), d(this, Ft).delete(t));
    });
    b(this, pn, (t, o, s, r) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Wn);
  }
  get menu() {
    var s, r;
    if (d(this, Ut))
      return d(this, Ut);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Ge), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Ge) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${Ge}`);
      }
    }
    if (o)
      return M(this, Ut, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return d(this, J) ? d(this, J) : H(this, Oe, Gn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || Rt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    M(this, $e, t), H(this, gn, $s).call(this, t) !== !1 && (this.menu.classList.add(Wn), H(this, Oe, Gn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = d(this, J)) == null || o.destroy(), M(this, J, void 0), (s = d(this, Ut)) == null || s.classList.remove(Wn), (a = (r = d(this, qt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = d(this, J)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && As(t) || (Rt.getAll(), Rt.getAll().forEach((o) => o.hide()));
  }
  static show(t) {
    const { event: o, ...s } = t, r = Rt.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const t = Rt.get(document.body);
    return t == null || t.hide(), t;
  }
  static get mousePos() {
    const { watchedMouse: t } = this;
    return t || this.watchMouse(), typeof t == "object" ? t : { clientX: 0, clientY: 0 };
  }
  static watchMouse() {
    this.watchedMouse || (document.addEventListener("mousemove", (t) => {
      this.watchedMouse = t;
    }), this.watchedMouse = !0);
  }
};
let Zt = Rt;
Ut = new WeakMap(), J = new WeakMap(), Ft = new WeakMap(), oe = new WeakMap(), $e = new WeakMap(), qt = new WeakMap(), Oe = new WeakSet(), Gn = function() {
  const t = {
    modifiers: [Yn, Xn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return d(this, J) ? d(this, J).setOptions(t) : M(this, J, Vn(H(this, vn, Os).call(this), this.menu, t)), d(this, J);
}, hn = new WeakMap(), dn = new WeakMap(), pn = new WeakMap(), gn = new WeakSet(), $s = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return d(this, qt) ? d(this, qt).render({ items: o, ...r }) : M(this, qt, new as(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: d(this, hn),
    beforeDestroy: d(this, dn),
    onRenderItem: d(this, pn)
  })), !0;
}, vn = new WeakSet(), Os = function() {
  return d(this, oe) || M(this, oe, {
    getBoundingClientRect: () => {
      const { clientX: t, clientY: o } = d(this, $e) || Rt.mousePos;
      return {
        width: 0,
        height: 0,
        top: o,
        right: t,
        bottom: o,
        left: t
      };
    },
    contextElement: this.element
  }), d(this, oe);
}, D(Zt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(Zt, "watchedMouse", !1);
document.addEventListener("contextmenu", (n) => {
  const e = n.target;
  if (e.closest(`.${Ge}`))
    return;
  const t = e.closest(Li);
  t && Zt.ensure(t).show(n);
});
document.addEventListener("click", Zt.clear);
function Ni(n) {
  return (n == null ? void 0 : n.nodeType) !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false";
}
const Di = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', _e = "show", Fo = "dropdown-menu";
var Vt, mt;
const _n = class extends On {
  constructor() {
    super(...arguments);
    b(this, Vt, void 0);
    b(this, mt, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(_e);
  }
  get menu() {
    var t, o;
    if (!d(this, Vt)) {
      const { element: s } = this;
      let r;
      const a = (t = s.getAttribute("href")) != null ? t : s.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = s.nextElementSibling;
        l != null && l.classList.contains(Fo) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Fo}`);
      }
      if (r)
        M(this, Vt, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return d(this, Vt);
  }
  get popper() {
    return d(this, mt) || M(this, mt, Vn(this.element, this.menu, {
      modifiers: [Yn, Xn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), d(this, mt);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && _n.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(_e), this.element.classList.add(_e), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Ni(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = d(this, mt)) == null || o.destroy(), M(this, mt, void 0), (s = d(this, Vt)) == null || s.classList.remove(_e), this.element.classList.remove(_e), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = d(this, mt)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && As(t) || _n.getAll().forEach((o) => o.hide());
  }
};
let Qt = _n;
Vt = new WeakMap(), mt = new WeakMap(), D(Qt, "NAME", "dropdown"), D(Qt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(n) {
  const t = n.target.closest(Di);
  t ? Qt.ensure(t).toggle() : Qt.clear(n);
});
function Pi(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function ho({ col: n, className: e, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
  var y, C;
  const i = {
    left: n.left,
    width: n.realWidth,
    height: t,
    ...a
  }, { align: g, border: p } = n.setting, u = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...r
  }, h = ["dtable-cell", c, n.setting.className, {
    "has-border-left": p === !0 || p === "left",
    "has-border-right": p === !0 || p === "right"
  }], _ = ["dtable-cell-content", e], v = [(C = l != null ? l : (y = o.data) == null ? void 0 : y[n.name]) != null ? C : ""], m = s ? s(v, { row: o, col: n }, A) : v, w = [], E = [], x = {}, S = {};
  return m == null || m.forEach((k) => {
    var $;
    if (typeof k == "object" && k && !cs(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const L = k.outer ? w : E;
      k.html ? L.push(/* @__PURE__ */ A("div", {
        className: P("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...($ = k.attrs) != null ? $ : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? h : _).push(k.className), k.children && L.push(k.children), k.attrs && Object.assign(k.outer ? x : S, k.attrs));
    } else
      E.push(k);
  }), /* @__PURE__ */ A("div", {
    className: P(h),
    style: i,
    "data-col": n.name,
    ...f,
    ...x
  }, E.length > 0 && /* @__PURE__ */ A("div", {
    className: P(_),
    style: u,
    ...S
  }, E), w);
}
function Ti({ col: n, children: e, style: t, ...o }) {
  var r;
  const { sortType: s } = n.setting;
  return /* @__PURE__ */ A(ho, {
    col: n,
    style: { ...t, ...n.setting.style },
    "data-sort": s || null,
    "data-type": n.type,
    ...o
  }, (r = n.setting.title) != null ? r : n.setting.name, s && /* @__PURE__ */ A("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), e);
}
function In({ row: n, className: e, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = ho, onRenderCell: c }) {
  return /* @__PURE__ */ A("div", {
    className: P("dtable-cells", e),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ A(l, {
    key: f.name,
    col: f,
    row: n,
    onRenderCell: c
  }) : null));
}
function Ls({
  row: n,
  className: e,
  top: t,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: c,
  scrollColsWidth: f,
  fixedRightWidth: i,
  scrollLeft: g,
  CellComponent: p = ho,
  onRenderCell: u,
  style: h,
  ..._
}) {
  let v = null;
  s != null && s.length && (v = /* @__PURE__ */ A(In, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: n,
    CellComponent: p,
    onRenderCell: u
  }));
  let m = null;
  a != null && a.length && (m = /* @__PURE__ */ A(In, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: n,
    CellComponent: p,
    onRenderCell: u
  }));
  let w = null;
  r != null && r.length && (w = /* @__PURE__ */ A(In, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: n,
    CellComponent: p,
    onRenderCell: u
  }));
  const E = { top: t, height: o, lineHeight: `${o - 2}px`, ...h };
  return /* @__PURE__ */ A("div", {
    className: P("dtable-row", e),
    style: E,
    "data-id": n.id,
    ..._
  }, v, m, w);
}
function Hi({ height: n, onRenderRow: e, ...t }) {
  const o = {
    height: n,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Ti
  };
  if (e) {
    const s = e({ props: o }, A);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ A(Ls, {
    ...o
  }));
}
function ji({
  className: n,
  style: e,
  top: t,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: a,
  onRenderRow: l,
  ...c
}) {
  return e = { ...e, top: t, height: s }, /* @__PURE__ */ A("div", {
    className: P("dtable-rows", n),
    style: e
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, A);
    return g && Object.assign(i, g), /* @__PURE__ */ A(Ls, {
      ...i
    });
  }));
}
const rn = /* @__PURE__ */ new Map(), an = [];
function Ns(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && rn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  rn.set(t, n), (e == null ? void 0 : e.buildIn) && !an.includes(t) && an.push(t);
}
function Te(n, e) {
  Ns(n, e);
  const t = (o) => {
    if (!o)
      return n;
    const { defaultOptions: s, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return t.plugin = n, t;
}
function Ds(n) {
  return rn.delete(n);
}
function Wi(n) {
  if (typeof n == "string") {
    const e = rn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Ps(n, e, t) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Wi(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Ps(n, s.plugins, t), n.push(s), t.add(s.name));
  }), n;
}
function Ii(n = [], e = !0) {
  return e && an.length && n.unshift(...an), n != null && n.length ? Ps([], n, /* @__PURE__ */ new Set()) : [];
}
function qo() {
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
function Bi(n) {
  const {
    tag: e,
    className: t,
    style: o,
    renders: s,
    generateArgs: r = [],
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...f
  } = n, i = [t], g = { ...o };
  let p = [];
  const u = [];
  return s.forEach((h) => {
    var _;
    typeof h == "string" && a && a[h] && (h = a[h]), typeof h == "function" ? l ? p = l(h, p, ...r) : p = h(p, ...r) : typeof h == "object" && h && !Je(h) && ("html" in h || "__html" in h || "className" in h || "style" in h || "attrs" in h || "children" in h) ? h.html ? p.push(
      /* @__PURE__ */ Y("div", {
        className: P(h.className),
        style: h.style,
        dangerouslySetInnerHTML: { __html: h.html },
        ...(_ = h.attrs) != null ? _ : {}
      })
    ) : h.__html ? u.push(h.__html) : (h.style && Object.assign(g, h.style), h.className && i.push(h.className), h.children && p.push(h.children), h.attrs && Object.assign(f, h.attrs)) : p.push(h);
  }), u.length && Object.assign(f, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: P(i),
    style: g,
    ...f
  }, p];
}
function Vo({
  tag: n = "div",
  ...e
}) {
  const [t, o] = Bi(e);
  return Y(n, t, ...o);
}
var Yt, se, $t, yt, Ot, V, at, lt, re, Le, bt, ie, ae, mn, Ts, yn, Hs, bn, js, wn, Ws, Ne, Jn, En, xn, De, Pe, kn, Sn, Cn, Is, Rn, Bs, Mn, zs;
class Kn extends Xt {
  constructor(t) {
    var o;
    super(t);
    b(this, mn);
    b(this, yn);
    b(this, bn);
    b(this, wn);
    b(this, Ne);
    b(this, Cn);
    b(this, Rn);
    b(this, Mn);
    D(this, "ref", pr());
    b(this, Yt, 0);
    b(this, se, void 0);
    b(this, $t, !1);
    b(this, yt, void 0);
    b(this, Ot, void 0);
    b(this, V, []);
    b(this, at, void 0);
    b(this, lt, /* @__PURE__ */ new Map());
    b(this, re, {});
    b(this, Le, void 0);
    D(this, "updateLayout", () => {
      d(this, Yt) && cancelAnimationFrame(d(this, Yt)), M(this, Yt, requestAnimationFrame(() => {
        M(this, at, void 0), this.forceUpdate(), M(this, Yt, 0);
      }));
    });
    b(this, bt, (t, o) => {
      o = o || t.type;
      const s = d(this, lt).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    b(this, ie, (t) => {
      d(this, bt).call(this, t, `window_${t.type}`);
    });
    b(this, ae, (t) => {
      d(this, bt).call(this, t, `document_${t.type}`);
    });
    b(this, En, (t, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, t, o);
        s && Object.assign(t.props, s);
      }
      return d(this, V).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, t, o);
          r && Object.assign(t.props, r);
        }
      }), t.props;
    });
    b(this, xn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), d(this, V).forEach((s) => {
      s.onRenderHeaderRow && (t.props = s.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    b(this, De, (t, o, s) => {
      const { row: r, col: a } = o;
      t[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, s)), this.options[l] && (t = this.options[l].call(this, t, o, s)), d(this, V).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, s));
      }), t;
    });
    b(this, Pe, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    b(this, kn, (t) => {
      var l, c, f, i, g;
      const o = this.getPointerInfo(t);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: a }), d(this, V).forEach((p) => {
          var u;
          (u = p.onHeaderCellClick) == null || u.call(this, t, { colName: r, element: a });
        }));
      else {
        const { rowElement: p } = o, u = this.layout.visibleRows.find((h) => h.id === s);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: p })) === !0)
            return;
          for (const h of d(this, V))
            if (((f = h.onCellClick) == null ? void 0 : f.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: p })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, t, { rowID: s, rowInfo: u, element: p })) === !0)
          return;
        for (const h of d(this, V))
          if (((g = h.onRowClick) == null ? void 0 : g.call(this, t, { rowID: s, rowInfo: u, element: p })) === !0)
            return;
      }
    });
    b(this, Sn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    M(this, se, (o = t.id) != null ? o : `dtable-${bs(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, M(this, Ot, Object.freeze(Ii(t.plugins))), d(this, Ot).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(d(this, re), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = d(this, at)) == null ? void 0 : t.options) || d(this, yt) || qo();
  }
  get plugins() {
    return d(this, V);
  }
  get layout() {
    return d(this, at);
  }
  get id() {
    return d(this, se);
  }
  get data() {
    return d(this, re);
  }
  get parent() {
    var t, o;
    return (o = this.props.parent) != null ? o : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    M(this, yt, void 0);
  }
  componentDidMount() {
    if (d(this, $t) ? this.forceUpdate() : H(this, Ne, Jn).call(this), d(this, V).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", d(this, kn)), this.on("keydown", d(this, Sn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), M(this, Le, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    d(this, V).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, $t) ? H(this, Ne, Jn).call(this) : d(this, V).forEach((t) => {
      var o;
      (o = t.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = d(this, Le)) == null || o.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of d(this, lt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), d(this, ie)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), d(this, ae)) : t.removeEventListener(s, d(this, bt));
    d(this, V).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), d(this, Ot).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), M(this, re, {}), d(this, lt).clear();
  }
  on(t, o, s) {
    var a;
    s && (t = `${s}_${t}`);
    const r = d(this, lt).get(t);
    r ? r.push(o) : (d(this, lt).set(t, [o]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), d(this, ie)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), d(this, ae)) : (a = this.ref.current) == null || a.addEventListener(t, d(this, bt)));
  }
  off(t, o, s) {
    var l;
    s && (t = `${s}_${t}`);
    const r = d(this, lt).get(t);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (d(this, lt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), d(this, ie)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), d(this, ae)) : (l = this.ref.current) == null || l.removeEventListener(t, d(this, bt)));
  }
  emitCustomEvent(t, o) {
    d(this, bt).call(this, o instanceof Event ? o : new CustomEvent(t, { detail: o }), t);
  }
  scroll(t, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: c, colsInfo: { scrollWidth: f, scrollColsWidth: i } } = this.layout, { to: g } = t;
    let { scrollLeft: p, scrollTop: u } = t;
    if (g === "up" || g === "down")
      u = r + (g === "down" ? 1 : -1) * Math.floor(l / c) * c;
    else if (g === "left" || g === "right")
      p = s + (g === "right" ? 1 : -1) * f;
    else if (g === "home")
      u = 0;
    else if (g === "end")
      u = a - l;
    else if (g === "left-begin")
      p = 0;
    else if (g === "right-end")
      p = i - f;
    else {
      const { offsetLeft: _, offsetTop: v } = t;
      typeof _ == "number" && (p = s + _), typeof v == "number" && (p = r + v);
    }
    const h = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, i - f)), p !== s && (h.scrollLeft = p)), typeof u == "number" && (u = Math.max(0, Math.min(u, a - l)), u !== r && (h.scrollTop = u)), Object.keys(h).length ? (this.setState(h, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, h), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: o, colsList: s } = this.layout;
    return typeof t == "number" ? s[t] : o[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: s } = this.layout;
    return typeof t == "number" ? o[t] : s[t];
  }
  getCellValue(t, o) {
    var c, f;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let a = s.id === "HEADER" ? (c = r.setting.title) != null ? c : r.setting.name : (f = s.data) == null ? void 0 : f[r.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, s, r, a)), a;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, o) {
    const { dirtyType: s, state: r } = t;
    s === "layout" ? M(this, at, void 0) : s === "options" && (M(this, at, void 0), M(this, yt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
  }
  getPointerInfo(t) {
    const o = t.target;
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
  render() {
    var u;
    const t = H(this, Mn, zs).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
      "scrollbar-hover": f
    }], p = [];
    return t && d(this, V).forEach((h) => {
      var v;
      const _ = (v = h.onRender) == null ? void 0 : v.call(this, t);
      !_ || (_.style && Object.assign(i, _.style), _.className && g.push(_.className), _.children && p.push(_.children));
    }), /* @__PURE__ */ A("div", {
      id: d(this, se),
      className: P(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && H(this, mn, Ts).call(this, t), t && H(this, yn, Hs).call(this, t), t && H(this, bn, js).call(this, t), t && H(this, wn, Ws).call(this, t));
  }
}
Yt = new WeakMap(), se = new WeakMap(), $t = new WeakMap(), yt = new WeakMap(), Ot = new WeakMap(), V = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), bt = new WeakMap(), ie = new WeakMap(), ae = new WeakMap(), mn = new WeakSet(), Ts = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ A(Hi, {
      scrollLeft: a,
      height: r,
      onRenderCell: d(this, De),
      onRenderRow: d(this, xn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(Vo, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [this, t]
  });
}, yn = new WeakSet(), Hs = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ A(ji, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: d(this, De),
    onRenderRow: d(this, En),
    ...l
  });
}, bn = new WeakSet(), js = function(t) {
  const { footer: o } = t;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(Vo, {
    className: "dtable-header",
    style: { height: t.footerHeight },
    renders: s,
    generateArgs: [this, t],
    generators: t.footerGenerators
  });
}, wn = new WeakSet(), Ws = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c } = t, { scrollColsWidth: f, scrollWidth: i } = r, { scrollbarSize: g = 12, horzScrollbarPos: p } = this.options;
  return f > i && o.push(
    /* @__PURE__ */ A(No, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: f,
      clientSize: i,
      onScroll: d(this, Pe),
      left: r.fixedLeftWidth,
      bottom: p === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ A(No, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: d(this, Pe),
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Ne = new WeakSet(), Jn = function() {
  var t;
  M(this, $t, !1), (t = this.options.afterRender) == null || t.call(this), d(this, V).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, En = new WeakMap(), xn = new WeakMap(), De = new WeakMap(), Pe = new WeakMap(), kn = new WeakMap(), Sn = new WeakMap(), Cn = new WeakSet(), Is = function() {
  if (d(this, yt))
    return !1;
  const o = { ...qo(), ...d(this, Ot).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return M(this, yt, o), M(this, V, d(this, Ot).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), !0;
}, Rn = new WeakSet(), Bs = function() {
  var Tt, gt;
  const { plugins: t } = this;
  let o = d(this, yt);
  const s = {};
  t.forEach((R) => {
    var z;
    const N = (z = R.beforeLayout) == null ? void 0 : z.call(this, o);
    N && (o = { ...o, ...N }), Object.assign(s, R.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, c = [], f = [], i = [], g = {}, p = [], u = [];
  let h = 0, _ = 0, v = 0;
  o.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: N,
      type: z = "",
      fixed: q = !1,
      flex: et = !1,
      width: Ht = r,
      minWidth: St = a,
      maxWidth: He = l,
      ...je
    } = R, Tn = Pi(Ht, St, He), T = {
      name: N,
      type: z,
      setting: {
        name: N,
        type: z,
        fixed: q,
        flex: et,
        width: Ht,
        minWidth: St,
        maxWidth: He,
        ...je
      },
      flex: q ? 0 : et === !0 ? 1 : typeof et == "number" ? et : 0,
      left: 0,
      width: Tn,
      realWidth: 0,
      visible: !0,
      index: p.length
    };
    t.forEach((ge) => {
      var We, Ie;
      const jt = (We = ge.colTypes) == null ? void 0 : We[z];
      if (jt) {
        const st = typeof jt == "function" ? jt(T) : jt;
        st && Object.assign(T.setting, st);
      }
      (Ie = ge.onAddCol) == null || Ie.call(this, T);
    }), T.realWidth = T.realWidth || T.width, q === "left" ? (T.left = h, h += T.width, c.push(T)) : q === "right" ? (T.left = _, _ += T.width, f.push(T)) : (T.left = v, v += T.width, i.push(T)), T.flex && u.push(T), p.push(T), g[T.name] = T;
  });
  let m = o.width, w = 0;
  const E = h + v + _;
  if (typeof m == "function" && (m = m.call(this, E)), m === "auto")
    w = E;
  else if (m === "100%") {
    const { parent: R } = this;
    if (R)
      w = R.clientWidth;
    else {
      w = 0, M(this, $t, !0);
      return;
    }
  } else
    w = m != null ? m : 0;
  const { data: x, rowKey: S = "id", rowHeight: y } = o, C = [], k = (R, N, z) => {
    var et, Ht;
    const q = { data: z != null ? z : { [S]: R }, id: R, index: C.length, top: 0 };
    if (z || (q.lazy = !0), C.push(q), ((et = o.onAddRow) == null ? void 0 : et.call(this, q, N)) !== !1) {
      for (const St of t)
        if (((Ht = St.onAddRow) == null ? void 0 : Ht.call(this, q, N)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let R = 0; R < x; R++)
      k(`${R}`, R);
  else
    Array.isArray(x) && x.forEach((R, N) => {
      var z;
      typeof R == "object" ? k(`${(z = R[S]) != null ? z : ""}`, N, R) : k(`${R != null ? R : ""}`, N);
    });
  let $ = C;
  const L = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, $);
    R && ($ = R);
  }
  for (const R of t) {
    const N = (Tt = R.onAddRows) == null ? void 0 : Tt.call(this, $);
    N && ($ = N);
  }
  $.forEach((R, N) => {
    L[R.id] = R, R.index = N, R.top = R.index * y;
  });
  const { header: O, footer: U } = o, B = O ? o.headerHeight || y : 0, tt = U ? o.footerHeight || y : 0;
  let F = o.height, W = 0;
  const X = $.length * y, xt = B + tt + X;
  if (typeof F == "function" && (F = F.call(this, xt)), F === "auto")
    W = xt;
  else if (typeof F == "object")
    W = Math.min(F.max, Math.max(F.min, xt));
  else if (F === "100%") {
    const { parent: R } = this;
    if (R)
      W = R.clientHeight;
    else {
      W = 0, M(this, $t, !0);
      return;
    }
  } else
    W = F;
  const dt = W - B - tt, Jt = w - h - _, pt = {
    options: o,
    allRows: C,
    width: w,
    height: W,
    rows: $,
    rowsMap: L,
    rowHeight: y,
    rowsHeight: dt,
    rowsHeightTotal: X,
    header: O,
    footer: U,
    footerGenerators: s,
    headerHeight: B,
    footerHeight: tt,
    colsMap: g,
    colsList: p,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: f,
      scrollCols: i,
      fixedLeftWidth: h,
      scrollWidth: Jt,
      scrollColsWidth: v,
      fixedRightWidth: _
    }
  }, kt = (gt = o.onLayout) == null ? void 0 : gt.call(this, pt);
  kt && Object.assign(pt, kt), t.forEach((R) => {
    if (R.onLayout) {
      const N = R.onLayout.call(this, pt);
      N && Object.assign(pt, N);
    }
  }), M(this, at, pt);
}, Mn = new WeakSet(), zs = function() {
  (H(this, Cn, Is).call(this) || !d(this, at)) && H(this, Rn, Bs).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = t;
  if (s.length) {
    const E = a - l;
    if (E > 0) {
      const x = s.reduce((y, C) => y + C.flex, 0);
      let S = 0;
      s.forEach((y) => {
        const C = Math.min(E - S, Math.ceil(E * (y.flex / x)));
        y.realWidth = C + y.width, S += y.realWidth;
      });
    } else
      s.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let c = 0;
  r.forEach((E) => {
    E.left = c, c += E.realWidth, E.visible = E.left + E.realWidth >= o && E.left <= o + a;
  });
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: p } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), h = Math.floor(u / p), _ = u + i, v = Math.min(g.length, Math.ceil(_ / p)), m = [], { rowDataGetter: w } = this.options;
  for (let E = h; E < v; E++) {
    const x = g[E];
    x.lazy && w && (x.data = w([x.id])[0], x.lazy = !1), m.push(x);
  }
  return t.visibleRows = m, t.scrollTop = u, t.scrollLeft = o, t;
}, D(Kn, "addPlugin", Ns), D(Kn, "removePlugin", Ds);
function Yo(n, e) {
  e !== void 0 ? n.data.hoverCol = e : e = n.data.hoverCol;
  const { current: t } = n.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && t.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const Us = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (n) => !!n.colHover,
  events: {
    mouseover(n) {
      var s, r;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const t = (s = n.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!t || e === "header" && !t.closest(".dtable-header"))
        return;
      const o = (r = t == null ? void 0 : t.getAttribute("data-col")) != null ? r : !1;
      Yo(this, o);
    },
    mouseleave() {
      Yo(this, !1);
    }
  }
};
Te(Us, { buildIn: !0 });
function zi(n, e) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (n === void 0 ? (e === void 0 && (e = !Fs.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    r(c, !!e);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    r(c, e != null ? e : !t[c]);
  })), Object.keys(o).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, o, t);
    c && Object.keys(c).forEach((f) => {
      c[f] ? t[f] = !0 : delete t[f];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var f;
      (f = this.options.onCheckChange) == null || f.call(this, o);
    });
  }
  return o;
}
function Ui(n) {
  var e;
  return (e = this.state.checkedRows[n]) != null ? e : !1;
}
function Fs() {
  var t, o;
  const n = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? n === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : n === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Fi() {
  return Object.keys(this.state.checkedRows);
}
const qs = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: zi,
    isRowChecked: Ui,
    isAllRowChecked: Fs,
    getChecks: Fi
  },
  onRenderCell(n, { row: e, col: t }) {
    var l, c;
    const { id: o } = e, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return n;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: f
      });
      n.unshift(i), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var a, l;
    const { id: o } = e, { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: c
      });
      n.unshift(f), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow({ props: n, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: P(n.className, "is-checked") };
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!e)
      return;
    const t = e.closest('input[type="checkbox"],.dtable-checkbox');
    t && this.toggleCheckRows(t.checked);
  },
  onRowClick(n, { rowID: e }) {
    const t = n.target;
    if (!t)
      return;
    (t.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
};
Te(qs);
function Zn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, o = e.children && t && t[n];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const a = Zn.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Zn.call(this, e.parent).level + 1 : 0, e;
}
function qi(n, e) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !Vs.call(this)), e) {
      const r = o.entries();
      for (const [a, l] of r)
        l.state === "expanded" && (t[a] = !0);
    } else
      t = {};
  else {
    const r = Array.isArray(n) ? n : [n];
    e === void 0 && (e = !t[r[0]]), r.forEach((a) => {
      const l = o.get(a);
      e && (l == null ? void 0 : l.children) ? t[a] = !0 : delete t[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function Vs() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Ys(n, e = 0, t, o = 0) {
  var s;
  t || (t = [...n.keys()]);
  for (const r of t) {
    const a = n.get(r);
    !a || (a.level === o && (a.order = e++), (s = a.children) != null && s.length && (e = Ys(n, e, a.children, o + 1)));
  }
  return e;
}
function Xs(n, e, t, o) {
  const s = n.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, Xs(n, r, t, o);
  }), s;
}
function Gs(n, e, t, o, s) {
  var l;
  const r = n.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[e] = t), r.parent && Gs(n, r.parent, t, o, s);
}
const Ks = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, e) {
      const { nestedMap: t } = this.data, o = t.get(n.id), s = t.get(e.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(n, e, t) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([s, r]) => {
        const a = Xs(this, s, r, o);
        a != null && a.parent && Gs(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: qi,
    isAllCollapsed: Vs,
    getNestedRowInfo: Zn
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(n) {
    var s, r, a, l, c;
    const { nestedMap: e } = this.data, t = (r = n.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (a = e.get(n.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = t, (c = n.data) != null && c[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), e.set(n.id, o), t) {
      let f = e.get(t);
      f || (f = {
        state: "",
        level: 0
      }, e.set(t, f)), f.children || (f.children = []), f.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), Ys(this.data.nestedMap), n.sort((e, t) => {
      var a, l;
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? e.index - t.index : r;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = e.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && n.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, e, s)) != null ? c : /* @__PURE__ */ A("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = e.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), n.unshift(/* @__PURE__ */ A("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var s, r;
    const { id: o } = e;
    return t.setting.nestedToggle && n.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ A("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow({ props: n, row: e }) {
    const t = this.getNestedRowInfo(e.id);
    return {
      className: P(n.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: n }) {
    return n.className = P(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: e }) {
    const t = n.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
};
Te(Ks);
const ut = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), pe = (n, e = new Date()) => (n = G(n), e = G(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate()), Qn = (n, e = new Date()) => G(n).getFullYear() === G(e).getFullYear(), Js = (n, e = new Date()) => (n = G(n), e = G(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Vi = (n, e = new Date()) => {
  n = G(n), e = G(e);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(n.getTime() / t), s = Math.floor(e.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, Yi = (n, e) => pe(G(e), n), Xi = (n, e) => pe(G(e).getTime() - ut, n), Gi = (n, e) => pe(G(e).getTime() + ut, n), Ki = (n, e) => pe(G(e).getTime() - 2 * ut, n), ln = (n, e = "yyyy-MM-dd hh:mm") => {
  n = G(n);
  const t = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const s = `${t[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), e;
}, Ji = (n, e, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = ln(n, Qn(n) ? o.month : o.full);
  if (pe(n, e))
    return s;
  const r = ln(e, Qn(n, e) ? Js(n, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Zi = (n) => {
  const e = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return e - ut * 7;
    case "oneMonth":
      return e - ut * 31;
    case "threeMonth":
      return e - ut * 31 * 3;
    case "halfYear":
      return e - ut * 183;
    case "oneYear":
      return e - ut * 365;
    case "twoYear":
      return e - 2 * (ut * 365);
    default:
      return 0;
  }
}, to = (n, e, t = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return n *= 365, to(n, "day", t, o);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, to(n, "day", t, o);
    case "week":
      n *= 7;
    case "day":
      n *= 24;
    case "hour":
      n *= 60;
    case "minute":
      n *= 6e4;
      break;
    default:
      n = 0;
  }
  return t ? o + n : o - n;
};
const Zs = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n) {
        return n[0] = {
          html: n[0]
        }, n;
      }
    },
    link: {
      onRenderCell(n, { col: e, row: t }) {
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = ye(o, t.data);
        return n[0] = /* @__PURE__ */ A("a", {
          href: r,
          ...s
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, { col: e, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ A("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ A("img", {
          src: o ? o[a] : ""
        }));
        return s ? n.unshift(l) : n[0] = l, n;
      }
    },
    circleProgress: {
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, a = (t - o) / 2, l = t / 2, c = n[0];
        return n[0] = /* @__PURE__ */ A("svg", {
          width: t,
          height: t
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
          "stroke-dashoffset": Math.PI * a * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ A("text", {
          x: l,
          y: l + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(c))), n;
      }
    },
    actionButtons: {
      onRenderCell(n, { col: e, row: t }) {
        var l;
        const o = (l = t.data) == null ? void 0 : l[e.name];
        if (!o)
          return n;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), ye(s, c);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(n, { col: e }) {
        let { format: t } = e.setting;
        if (!t)
          return n;
        typeof t == "string" && (t = { type: "text", format: t });
        const { format: o, type: s } = t, r = n[0];
        return typeof o == "function" ? n[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? n[0] = ln(r, o) : s === "html" ? n[0] = { html: ye(o, r) } : n[0] = ye(o, r), n;
      }
    }
  }
};
Te(Zs);
const Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Us,
  checkable: qs,
  nested: Ks,
  rich: Zs
}, Symbol.toStringTag, { value: "Module" }));
class Ue extends rs {
}
D(Ue, "Component", Kn), D(Ue, "definePlugin", Te), D(Ue, "removePlugin", Ds), D(Ue, "plugins", Qi);
var ct, K;
class ta {
  constructor(e) {
    b(this, ct, void 0);
    b(this, K, void 0);
    M(this, ct, e), M(this, K, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, ct).parentElement.parentElement, d(this, ct).parentElement), this.addActive(d(this, K).parentElement, d(this, K)), d(this, K).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    M(this, K, d(this, ct)), this.addActive(d(this, K).parentElement, d(this, K)), M(this, ct, document.querySelector(`[href='#${d(this, K).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, K).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, K).getAttribute("id")}']`)), this.addActive(d(this, ct).parentElement.parentElement, d(this, ct).parentElement);
  }
  addActive(e, t) {
    const o = e.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(r) {
      t.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(e) {
    return new Promise(function(t, o) {
      setTimeout(() => {
        e.classList.add("in"), t();
      }, 100);
    });
  }
}
ct = new WeakMap(), K = new WeakMap();
document.addEventListener("click", function(n) {
  n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new ta(n.target).showTarget());
});
function Ke(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function eo(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (Ke(n) && Ke(t))
    for (const o in t)
      Ke(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), eo(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return eo(n, ...e);
}
const sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: G,
  isSameDay: pe,
  isSameYear: Qn,
  isSameMonth: Js,
  isSameWeek: Vi,
  isToday: Yi,
  isYesterday: Xi,
  isTomorrow: Gi,
  isDBY: Ki,
  formatDate: ln,
  formatDateSpan: Ji,
  getTimeBeforeDesc: Zi,
  calculateTimestamp: to,
  formatString: ye,
  formatBytes: yr,
  convertBytes: br,
  isObject: Ke,
  mergeDeep: eo
}, Symbol.toStringTag, { value: "Module" }));
export {
  oa as Avatar,
  Zt as ContextMenu,
  Ue as DTable,
  Qt as Dropdown,
  oo as EventBus,
  as as Menu,
  ta as NavTabs,
  No as Scrollbar,
  na as browser,
  sa as helpers,
  Bn as nativeEvents,
  kr as store
};
