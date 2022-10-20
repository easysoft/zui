var rr = Object.defineProperty;
var ir = (n, e, t) => e in n ? rr(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => (ir(n, typeof e != "symbol" ? e + "" : e, t), t), zn = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var h = (n, e, t) => (zn(n, e, "read from private field"), t ? t.call(n) : e.get(n)), w = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, A = (n, e, t, o) => (zn(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t);
var H = (n, e, t) => (zn(n, e, "access private method"), t);
const ar = (n) => {
  const e = {};
  if (!n)
    return e;
  const t = Object.values(n.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    e[s] = r;
  }), e;
};
class lr extends HTMLElement {
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
    const t = ar(this);
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
customElements.get("zui-button") || customElements.define("zui-button", lr);
var Nn, j, ts, Ce, we, So, en = {}, es = [], cr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function ns(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function Y(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Nn.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Ge(n, a, o, s, null);
}
function Ge(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ts : s };
  return s == null && j.vnode != null && j.vnode(r), r;
}
function os() {
  return { current: null };
}
function Dn(n) {
  return n.children;
}
function Ee(n, e) {
  this.props = n, this.context = e;
}
function ue(n, e) {
  if (e == null)
    return n.__ ? ue(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? ue(n) : null;
}
function ss(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ss(n);
  }
}
function Ro(n) {
  (!n.__d && (n.__d = !0) && we.push(n) && !nn.__r++ || So !== j.debounceRendering) && ((So = j.debounceRendering) || setTimeout)(nn);
}
function nn() {
  for (var n; nn.__r = we.length; )
    n = we.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), we = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, ro(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ue(r) : a, r.__h), ls(o, r), r.__e != a && ss(r)));
    });
}
function rs(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || es, m = y.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ge(null, u, null, null, u) : Array.isArray(u) ? Ge(Dn, { children: u }, null, null, null) : u.__b > 0 ? Ge(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = y[i]) === null || d && u.key == d.key && u.type === d.type)
        y[i] = void 0;
      else
        for (g = 0; g < m; g++) {
          if ((d = y[g]) && u.key == d.key && u.type === d.type) {
            y[g] = void 0;
            break;
          }
          d = null;
        }
      ro(n, u, d = d || en, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = is(u, c, n) : c = as(n, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = ue(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = ue(o, i + 1)), us(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      cs(v[i], v[++i], v[++i]);
}
function is(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? is(o, e, t) : as(t, o, o, s, o.__e, e));
  return e;
}
function as(n, e, t, o, s, r) {
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
function ur(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || on(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || on(n, r, e[r], t[r], o);
}
function Mo(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || cr.test(e) ? t : t + "px";
}
function on(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || Mo(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || Mo(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? $o : Ao, r) : n.removeEventListener(e, r ? $o : Ao, r);
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
function Ao(n) {
  this.l[n.type + !1](j.event ? j.event(n) : n);
}
function $o(n) {
  this.l[n.type + !0](j.event ? j.event(n) : n);
}
function ro(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, E, x, C, b = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = j.__b) && f(e);
  try {
    t:
      if (typeof b == "function") {
        if (v = e.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(v, m) : (e.__c = i = new Ee(v, m), i.constructor = b, i.render = hr), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(S) {
              S && (S.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = e, i.__P = n, E = j.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), C = f != null && f.type === Dn && f.key == null ? f.props.children : f, rs(n, Array.isArray(C) ? C : [C], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = fr(t.__e, e, t, o, s, r, a, c);
    (f = j.diffed) && f(e);
  } catch (S) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), j.__e(S, e, t);
  }
}
function ls(n, e) {
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
function fr(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[p] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(d);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && n.data === d || (n.data = d);
  else {
    if (r = r && Nn.call(n.childNodes), f = (g = t.props || en).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (ur(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, rs(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ue(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && ns(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && on(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && on(n, "checked", p, g.checked, !1));
  }
  return n;
}
function cs(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    j.__e(o, t);
  }
}
function us(n, e, t) {
  var o, s;
  if (j.unmount && j.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || cs(o, null, e)), (o = n.__c) != null) {
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
      o[s] && us(o[s], e, typeof n.type != "function");
  t || n.__e == null || ns(n.__e), n.__e = n.__d = void 0;
}
function hr(n, e, t) {
  return this.constructor(n, t);
}
function dr(n, e, t) {
  var o, s, r;
  j.__ && j.__(n, e), s = (o = typeof t == "function") ? null : t && t.__k || e.__k, r = [], ro(e, n = (!o && t || e).__k = Y(Dn, null, [n]), s || en, en, e.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : e.firstChild ? Nn.call(e.childNodes) : null, r, !o && t ? t : s ? s.__e : e.firstChild, o), ls(r, n);
}
Nn = es.slice, j = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, ts = 0, Ce = function(n) {
  return n != null && n.constructor === void 0;
}, Ee.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof n == "function" && (n = n(Nt({}, t), this.props)), n && Nt(t, n), n != null && this.__v && (e && this.__h.push(e), Ro(this));
}, Ee.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ro(this));
}, Ee.prototype.render = Dn, we = [], nn.__r = 0;
var vt;
class pr {
  constructor(e = "") {
    w(this, vt, void 0);
    typeof e == "object" ? A(this, vt, e) : A(this, vt, document.appendChild(document.createComment(e)));
  }
  on(e, t, o) {
    h(this, vt).addEventListener(e, t, o);
  }
  once(e, t, o) {
    h(this, vt).addEventListener(e, t, { once: !0, ...o });
  }
  off(e, t, o) {
    h(this, vt).removeEventListener(e, t, o);
  }
  emit(e) {
    return h(this, vt).dispatchEvent(e), e;
  }
}
vt = new WeakMap();
const qn = /* @__PURE__ */ new Set([
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
class io extends pr {
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
    return typeof e == "string" && (qn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(io.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (qn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
var _t, Re, Bt, be;
class Oo extends io {
  constructor(t = "", o) {
    super(t);
    w(this, Bt);
    w(this, _t, /* @__PURE__ */ new Map());
    w(this, Re, void 0);
    A(this, Re, o == null ? void 0 : o.customEventSuffix);
  }
  on(t, o, s) {
    t = H(this, Bt, be).call(this, t), super.on(t, o, s), h(this, _t).set(o, [t, s]);
  }
  off(t, o, s) {
    t = H(this, Bt, be).call(this, t), super.off(t, o, s), h(this, _t).delete(o);
  }
  once(t, o, s) {
    t = H(this, Bt, be).call(this, t);
    const r = (a) => {
      o(a), h(this, _t).delete(r);
    };
    super.once(t, r, s), h(this, _t).set(r, [t, s]);
  }
  emit(t, o) {
    return typeof t == "string" && (t = H(this, Bt, be).call(this, t)), super.emit(t, o);
  }
  offAll() {
    Array.from(h(this, _t).entries()).forEach(([t, [o, s]]) => {
      super.off(o, t, s);
    }), h(this, _t).clear();
  }
}
_t = new WeakMap(), Re = new WeakMap(), Bt = new WeakSet(), be = function(t) {
  const o = h(this, Re);
  return qn.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function gr(n, e) {
  if (n == null)
    return [n, void 0];
  typeof e == "string" && (e = e.split("."));
  const t = e.join(".");
  let o = n;
  const s = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), a;
    const l = r.indexOf("[");
    if (l > 0 && l < r.length - 1 && r.endsWith("]") && (a = r.substring(l + 1, r.length - 1), r = r.substring(0, l)), o = o[r], s.push(o), a !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(a) : o = o[a], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${a}]", the full path is "${t}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${t}".`);
  return s;
}
function vr(n, e, t) {
  const o = gr(n, e), s = o[o.length - 1];
  return s === void 0 ? t : s;
}
function Ke(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function sn(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (Ke(n) && Ke(t))
    for (const o in t)
      Ke(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), sn(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return sn(n, ...e);
}
function Qt(n, ...e) {
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
var ao = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(ao || {});
function _r(n, e = 2, t = "") {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / ao[t]).toFixed(e) + t);
}
const mr = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const o = t[1];
  return n = n.replace(o, ""), Number.parseInt(n, 10) * ao[o];
};
var Zo, Qo;
let lo = (Qo = (Zo = document.documentElement.getAttribute("lang")) == null ? void 0 : Zo.toLowerCase()) != null ? Qo : "zh_cn", At;
function yr() {
  return lo;
}
function br(n) {
  lo = n.toLowerCase();
}
function wr(n, e) {
  At || (At = {}), typeof n == "string" && (n = { [n]: e != null ? e : {} }), sn(At, n);
}
function We(n, e, t, o, s, r) {
  Array.isArray(n) ? At && n.unshift(At) : n = At ? [At, n] : [n], typeof t == "string" && (r = s, s = o, o = t, t = void 0);
  const a = s || lo;
  let l;
  for (const c of n) {
    if (!c)
      continue;
    const f = c[a];
    if (!f)
      continue;
    const i = r && c === At ? `${r}.${e}` : e;
    if (l = vr(f, i), l !== void 0)
      break;
  }
  return l === void 0 ? o : t ? Qt(l, ...Array.isArray(t) ? t : [t]) : l;
}
We.addLang = wr;
We.getCode = yr;
We.setCode = br;
function Er(n) {
  return Object.fromEntries(Object.entries(n).map(([e, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [e, t];
  }));
}
var mt, ne, rt;
class Tn {
  constructor(e, t) {
    w(this, mt, void 0);
    w(this, ne, void 0);
    w(this, rt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, A(this, rt, new Oo(e, { customEventSuffix: `.${this.constructor.KEY}` })), A(this, mt, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? Er(e.dataset) : null, ...t }), this.constructor.all.set(e, this), A(this, ne, e), this.init(), h(this, rt).emit("inited", this);
  }
  get options() {
    return h(this, mt);
  }
  get element() {
    return h(this, ne);
  }
  get events() {
    return h(this, rt);
  }
  init() {
  }
  setOptions(e) {
    return e && Object.assign(h(this, mt), e), h(this, mt);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(h(this, ne)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(e, t, o) {
    h(this, rt).on(e, t, o);
  }
  once(e, t, o) {
    h(this, rt).once(e, t, o);
  }
  off(e, t, o) {
    h(this, rt).off(e, t, o);
  }
  emit(e, t) {
    let o = Oo.createEvent(e, t);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = h(this, mt)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = h(this, rt).emit(o), o;
  }
  i18n(e, t, o) {
    var s;
    return (s = We(h(this, mt).i18n, e, t, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${e}}`;
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
mt = new WeakMap(), ne = new WeakMap(), rt = new WeakMap(), D(Tn, "allComponents", /* @__PURE__ */ new Map());
var Me;
class fs extends Tn {
  constructor() {
    super(...arguments);
    w(this, Me, os());
  }
  get $() {
    return h(this, Me).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    dr(/* @__PURE__ */ Y(o, {
      ref: h(this, Me),
      ...this.setOptions(t)
    }), this.element);
  }
}
Me = new WeakMap();
const T = (...n) => n.map((e) => Array.isArray(e) ? T(...e) : typeof e == "function" ? T(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const o = e[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function xr(n) {
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
    ...d
  } = n;
  return /* @__PURE__ */ Y("li", {
    className: T(e),
    ...t
  }, /* @__PURE__ */ Y("a", {
    className: T("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...d
  }, Ce(c) ? c : typeof c == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${c}`
  }) : null, f, Ce(i) ? i : typeof i == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${i}`
  }) : null), g);
}
function kr({ className: n }) {
  return /* @__PURE__ */ Y("div", {
    class: T("menu-divider", n)
  });
}
function Cr({ className: n, title: e, children: t, ...o }) {
  return /* @__PURE__ */ Y("li", {
    class: T("menu-heading", n),
    ...o
  }, e, t);
}
var Ae, dn, hs, $e, pn, gn;
const mo = class extends Ee {
  constructor() {
    super(...arguments);
    w(this, dn);
    D(this, "state", { shownSubs: {} });
    w(this, Ae, os());
    w(this, $e, ({ item: t, h: o }) => {
      const { onRenderSubMenu: s } = this.props;
      if (s)
        return s({ menu: this, item: t, h: o });
      const { afterRender: r, onClickItem: a, subMenuTrigger: l, onRenderItem: c } = this.props;
      return /* @__PURE__ */ o(mo, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: h(this, $e),
        afterRender: r,
        onClickItem: a,
        onRenderItem: c,
        subMenuTrigger: l
      });
    });
    w(this, pn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    w(this, gn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !1), o.preventDefault());
    });
  }
  get $() {
    return h(this, Ae).current;
  }
  componentDidMount() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, { menu: this, firstRender: !0 });
  }
  componentDidUpdate() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, { menu: this, firstRender: !1 });
  }
  componentWillUnmount() {
    var t, o;
    (o = (t = this.props).beforeDestroy) == null || o.call(t, { menu: this });
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
      ...d
    } = this.props, u = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ Y("menu", {
      class: T(
        "menu",
        t,
        (s != null ? s : u == null ? void 0 : u.some((p) => "icon" in p)) ? "has-icons" : ""
      ),
      ...d,
      ref: h(this, Ae)
    }, u == null ? void 0 : u.map((p, _) => {
      const v = { type: "item", key: _, ...p };
      if (c) {
        const $ = c({ menu: this, item: v, index: _, h: Y });
        if ($) {
          if (Ce($) || typeof $ != "object")
            return $;
          Object.assign(v, $);
        }
      }
      const { key: y = _, type: m = "item", ...E } = v;
      if (m === "heading")
        return /* @__PURE__ */ Y(Cr, {
          ...E,
          key: y
        });
      if (m === "divider")
        return /* @__PURE__ */ Y(kr, {
          ...E,
          key: y
        });
      const { onClick: x, items: C, ...b } = E, S = {
        ...b,
        key: y,
        onClick: H(this, dn, hs).bind(this, v, _, x)
      }, k = C && (l === "always" || this.state.shownSubs[y]);
      return C && (S.rootClass = T(S.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (S.rootProps = {
        ...S.rootProps,
        onMouseEnter: h(this, pn).bind(this, y),
        onMouseLeave: h(this, gn).bind(this, y)
      })), /* @__PURE__ */ Y(xr, {
        ...S
      }, k && h(this, $e).call(this, { item: v, h: Y }));
    }), r);
  }
};
let Vn = mo;
Ae = new WeakMap(), dn = new WeakSet(), hs = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a({ menu: this, item: t, index: o, event: r }), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, $e = new WeakMap(), pn = new WeakMap(), gn = new WeakMap();
class ds extends fs {
  toggleSubMenu(e, t) {
    var o;
    return (o = this.$) == null ? void 0 : o.toggleSubMenu(e, t);
  }
  clearAllSubMenu() {
    var e;
    return (e = this.$) == null ? void 0 : e.clearAllSubMenu();
  }
  isSubMenuShow(e) {
    var t;
    return (t = this.$) == null ? void 0 : t.isSubMenuShow(e);
  }
}
D(ds, "Component", Vn);
var co, I, ps, gs, xe, Lo, vs = {}, _s = [], Sr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Dt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function ms(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function M(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? co.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Xe(n, a, o, s, null);
}
function Xe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ps : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Rr() {
  return { current: null };
}
function uo(n) {
  return n.children;
}
function Kt(n, e) {
  this.props = n, this.context = e;
}
function fe(n, e) {
  if (e == null)
    return n.__ ? fe(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? fe(n) : null;
}
function ys(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ys(n);
  }
}
function No(n) {
  (!n.__d && (n.__d = !0) && xe.push(n) && !rn.__r++ || Lo !== I.debounceRendering) && ((Lo = I.debounceRendering) || setTimeout)(rn);
}
function rn() {
  for (var n; rn.__r = xe.length; )
    n = xe.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), xe = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = Dt({}, r)).__v = r.__v + 1, xs(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? fe(r) : a, r.__h), Ar(o, r), r.__e != a && ys(r)));
    });
}
function bs(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || _s, m = y.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Xe(null, u, null, null, u) : Array.isArray(u) ? Xe(uo, { children: u }, null, null, null) : u.__b > 0 ? Xe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = y[i]) === null || d && u.key == d.key && u.type === d.type)
        y[i] = void 0;
      else
        for (g = 0; g < m; g++) {
          if ((d = y[g]) && u.key == d.key && u.type === d.type) {
            y[g] = void 0;
            break;
          }
          d = null;
        }
      xs(n, u, d = d || vs, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = ws(u, c, n) : c = Es(n, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = fe(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = fe(o, i + 1)), Cs(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ks(v[i], v[++i], v[++i]);
}
function ws(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? ws(o, e, t) : Es(t, o, o, s, o.__e, e));
  return e;
}
function Es(n, e, t, o, s, r) {
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
function Mr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || an(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || an(n, r, e[r], t[r], o);
}
function Do(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || Sr.test(e) ? t : t + "px";
}
function an(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || Do(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || Do(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Po : To, r) : n.removeEventListener(e, r ? Po : To, r);
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
function To(n) {
  this.l[n.type + !1](I.event ? I.event(n) : n);
}
function Po(n) {
  this.l[n.type + !0](I.event ? I.event(n) : n);
}
function xs(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, E, x, C, b = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = I.__b) && f(e);
  try {
    t:
      if (typeof b == "function") {
        if (v = e.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(v, m) : (e.__c = i = new Kt(v, m), i.constructor = b, i.render = Or), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Dt({}, i.__s)), Dt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(S) {
              S && (S.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = e, i.__P = n, E = I.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Dt(Dt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), C = f != null && f.type === uo && f.key == null ? f.props.children : f, bs(n, Array.isArray(C) ? C : [C], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = $r(t.__e, e, t, o, s, r, a, c);
    (f = I.diffed) && f(e);
  } catch (S) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), I.__e(S, e, t);
  }
}
function Ar(n, e) {
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
function $r(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[p] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(d);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && n.data === d || (n.data = d);
  else {
    if (r = r && co.call(n.childNodes), f = (g = t.props || vs).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (Mr(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, bs(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && fe(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && ms(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && an(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && an(n, "checked", p, g.checked, !1));
  }
  return n;
}
function ks(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    I.__e(o, t);
  }
}
function Cs(n, e, t) {
  var o, s;
  if (I.unmount && I.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || ks(o, null, e)), (o = n.__c) != null) {
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
      o[s] && Cs(o[s], e, typeof n.type != "function");
  t || n.__e == null || ms(n.__e), n.__e = n.__d = void 0;
}
function Or(n, e, t) {
  return this.constructor(n, t);
}
co = _s.slice, I = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, ps = 0, gs = function(n) {
  return n != null && n.constructor === void 0;
}, Kt.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dt({}, this.state), typeof n == "function" && (n = n(Dt({}, t), this.props)), n && Dt(t, n), n != null && this.__v && (e && this.__h.push(e), No(this));
}, Kt.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), No(this));
}, Kt.prototype.render = uo, xe = [], rn.__r = 0;
var zt, Ut;
class Ho extends Kt {
  constructor(t) {
    var o;
    super(t);
    w(this, zt, 0);
    w(this, Ut, null);
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
      o && (h(this, zt) && cancelAnimationFrame(h(this, zt)), A(this, zt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), A(this, zt, 0);
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
    t && (A(this, Ut, typeof t == "string" ? document : t.current), h(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), h(this, Ut) && h(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: g, scrollPos: d } = this, { dragStart: u } = this.state, p = {
      left: l,
      top: c,
      bottom: f,
      right: i,
      ...a
    }, _ = {};
    return o === "horz" ? (p.height = s, p.width = t, _.width = this.barSize, _.left = Math.round(Math.min(g, d) * (t - _.width) / g)) : (p.width = s, p.height = t, _.height = this.barSize, _.top = Math.round(Math.min(g, d) * (t - _.height) / g)), /* @__PURE__ */ M("div", {
      className: T("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ M("div", {
      className: "scrollbar-bar",
      style: _,
      onMouseDown: this._handleMouseDown
    }));
  }
}
zt = new WeakMap(), Ut = new WeakMap();
function Lr(n) {
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
function Nr(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function Dr(n, e) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Lr,
  domReady: Nr,
  isElementVisible: Dr,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
let Ss = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Oe, $t, it, oe, se, Je;
const yo = class {
  constructor(e, t = "local") {
    w(this, se);
    w(this, Oe, void 0);
    w(this, $t, void 0);
    w(this, it, void 0);
    w(this, oe, void 0);
    A(this, Oe, t), A(this, $t, `ZUI_STORE:${e != null ? e : Ss()}`), A(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, Oe);
  }
  get session() {
    return this.type === "session" ? this : (h(this, oe) || A(this, oe, new yo(h(this, $t), "session")), h(this, oe));
  }
  get(e, t) {
    const o = h(this, it).getItem(H(this, se, Je).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    h(this, it).setItem(H(this, se, Je).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    h(this, it).removeItem(H(this, se, Je).call(this, e));
  }
  each(e) {
    for (let t = 0; t < h(this, it).length; t++) {
      const o = h(this, it).key(t);
      if (o != null && o.startsWith(h(this, $t))) {
        const s = h(this, it).getItem(o);
        typeof s == "string" && e(o.substring(h(this, $t).length + 1), JSON.parse(s));
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
let ln = yo;
Oe = new WeakMap(), $t = new WeakMap(), it = new WeakMap(), oe = new WeakMap(), se = new WeakSet(), Je = function(e) {
  return `${h(this, $t)}:${e}`;
};
const Tr = new ln("DEFAULT");
function Pr(n, e = "local") {
  return new ln(n, e);
}
Object.assign(Tr, { create: Pr });
class pa extends Kt {
  render() {
    const { size: e, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ M("img", {
      src: r,
      alt: a
    }) : g = a, typeof e == "number" ? (i.width = e, i.height = e) : typeof e == "string" && f.push(`avatar-${e}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ M("div", {
      className: T(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Hr() {
  const n = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${n}px`, document.body.classList.add("modal-open");
}
function jr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Wr(n, e) {
  Hr(), n.classList.add("block"), jo(n, e), n.onclick = (t) => Ir(t, n), window.addEventListener("resize", () => {
    jo(n, e);
  });
}
function Rs(n) {
  var e;
  jr(), (e = n.classList) == null || e.remove("block");
}
function jo(n, e) {
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
function Ir(n, e) {
  n.target.closest("[data-dismiss=modal]") && (n.stopPropagation(), Rs(e));
}
function Br(n) {
  var e, t;
  return n instanceof HTMLAnchorElement ? (t = (e = (n.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : t.selector : n.dataset.target;
}
document.addEventListener("click", (n) => {
  const e = n.target, t = e.closest("[data-toggle=modal]");
  if (t) {
    const o = Br(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Wr(s, t.dataset.position || "fit");
  } else
    e.className.includes("modal") && Rs(e);
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
function Jt(n) {
  var e = Q(n).Element;
  return n instanceof e || n instanceof Element;
}
function Z(n) {
  var e = Q(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function fo(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Q(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
var Xt = Math.max, cn = Math.min, he = Math.round;
function Yn() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ms() {
  return !/^((?!chrome|android).)*safari/i.test(Yn());
}
function de(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var o = n.getBoundingClientRect(), s = 1, r = 1;
  e && Z(n) && (s = n.offsetWidth > 0 && he(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && he(o.height) / n.offsetHeight || 1);
  var a = Jt(n) ? Q(n) : window, l = a.visualViewport, c = !Ms() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, d = o.height / r;
  return {
    width: g,
    height: d,
    top: i,
    right: f + g,
    bottom: i + d,
    left: f,
    x: f,
    y: i
  };
}
function ho(n) {
  var e = Q(n), t = e.pageXOffset, o = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function zr(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Ur(n) {
  return n === Q(n) || !Z(n) ? ho(n) : zr(n);
}
function ft(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Pt(n) {
  return ((Jt(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function po(n) {
  return de(Pt(n)).left + ho(n).scrollLeft;
}
function ot(n) {
  return Q(n).getComputedStyle(n);
}
function go(n) {
  var e = ot(n), t = e.overflow, o = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Fr(n) {
  var e = n.getBoundingClientRect(), t = he(e.width) / n.offsetWidth || 1, o = he(e.height) / n.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function qr(n, e, t) {
  t === void 0 && (t = !1);
  var o = Z(e), s = Z(e) && Fr(e), r = Pt(e), a = de(n, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(e) !== "body" || go(r)) && (l = Ur(e)), Z(e) ? (c = de(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : r && (c.x = po(r))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function As(n) {
  var e = de(n), t = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: o
  };
}
function Pn(n) {
  return ft(n) === "html" ? n : n.assignedSlot || n.parentNode || (fo(n) ? n.host : null) || Pt(n);
}
function $s(n) {
  return ["html", "body", "#document"].indexOf(ft(n)) >= 0 ? n.ownerDocument.body : Z(n) && go(n) ? n : $s(Pn(n));
}
function ke(n, e) {
  var t;
  e === void 0 && (e = []);
  var o = $s(n), s = o === ((t = n.ownerDocument) == null ? void 0 : t.body), r = Q(o), a = s ? [r].concat(r.visualViewport || [], go(o) ? o : []) : o, l = e.concat(a);
  return s ? l : l.concat(ke(Pn(a)));
}
function Vr(n) {
  return ["table", "td", "th"].indexOf(ft(n)) >= 0;
}
function Wo(n) {
  return !Z(n) || ot(n).position === "fixed" ? null : n.offsetParent;
}
function Yr(n) {
  var e = /firefox/i.test(Yn()), t = /Trident/i.test(Yn());
  if (t && Z(n)) {
    var o = ot(n);
    if (o.position === "fixed")
      return null;
  }
  var s = Pn(n);
  for (fo(s) && (s = s.host); Z(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || e && r.willChange === "filter" || e && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Hn(n) {
  for (var e = Q(n), t = Wo(n); t && Vr(t) && ot(t).position === "static"; )
    t = Wo(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? e : t || Yr(n) || e;
}
var nt = "top", ht = "bottom", Tt = "right", Et = "left", jn = "auto", Wn = [nt, ht, Tt, Et], pe = "start", Se = "end", Gr = "clippingParents", Os = "viewport", me = "popper", Kr = "reference", Io = /* @__PURE__ */ Wn.reduce(function(n, e) {
  return n.concat([e + "-" + pe, e + "-" + Se]);
}, []), Xr = /* @__PURE__ */ [].concat(Wn, [jn]).reduce(function(n, e) {
  return n.concat([e, e + "-" + pe, e + "-" + Se]);
}, []), Jr = "beforeRead", Zr = "read", Qr = "afterRead", ti = "beforeMain", ei = "main", ni = "afterMain", oi = "beforeWrite", si = "write", ri = "afterWrite", Gn = [Jr, Zr, Qr, ti, ei, ni, oi, si, ri];
function ii(n) {
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
function ai(n) {
  var e = ii(n);
  return Gn.reduce(function(t, o) {
    return t.concat(e.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function li(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function Rt(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, n);
}
var It = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ci = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ui(n) {
  n.forEach(function(e) {
    [].concat(Object.keys(e), Bo).filter(function(t, o, s) {
      return s.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof e.name != "string" && console.error(Rt(It, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Rt(It, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Gn.indexOf(e.phase) < 0 && console.error(Rt(It, e.name, '"phase"', "either " + Gn.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Rt(It, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Rt(It, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Rt(It, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Rt(It, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + Bo.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      e.requires && e.requires.forEach(function(o) {
        n.find(function(s) {
          return s.name === o;
        }) == null && console.error(Rt(ci, String(e.name), o, o));
      });
    });
  });
}
function fi(n, e) {
  var t = /* @__PURE__ */ new Set();
  return n.filter(function(o) {
    var s = e(o);
    if (!t.has(s))
      return t.add(s), !0;
  });
}
function xt(n) {
  return n.split("-")[0];
}
function hi(n) {
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
function di(n, e) {
  var t = Q(n), o = Pt(n), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = Ms();
    (f || !f && e === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + po(n),
    y: c
  };
}
function pi(n) {
  var e, t = Pt(n), o = ho(n), s = (e = n.ownerDocument) == null ? void 0 : e.body, r = Xt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Xt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + po(n), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Xt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function gi(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && fo(t)) {
    var o = e;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Kn(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function vi(n, e) {
  var t = de(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function zo(n, e, t) {
  return e === Os ? Kn(di(n, t)) : Jt(e) ? vi(e, t) : Kn(pi(Pt(n)));
}
function _i(n) {
  var e = ke(Pn(n)), t = ["absolute", "fixed"].indexOf(ot(n).position) >= 0, o = t && Z(n) ? Hn(n) : n;
  return Jt(o) ? e.filter(function(s) {
    return Jt(s) && gi(s, o) && ft(s) !== "body";
  }) : [];
}
function mi(n, e, t, o) {
  var s = e === "clippingParents" ? _i(n) : [].concat(e), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = zo(n, f, o);
    return c.top = Xt(i.top, c.top), c.right = cn(i.right, c.right), c.bottom = cn(i.bottom, c.bottom), c.left = Xt(i.left, c.left), c;
  }, zo(n, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ge(n) {
  return n.split("-")[1];
}
function Ls(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Ns(n) {
  var e = n.reference, t = n.element, o = n.placement, s = o ? xt(o) : null, r = o ? ge(o) : null, a = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, c;
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
    case Tt:
      c = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Et:
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
  var f = s ? Ls(s) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (r) {
      case pe:
        c[f] = c[f] - (e[i] / 2 - t[i] / 2);
        break;
      case Se:
        c[f] = c[f] + (e[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function Ds() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yi(n) {
  return Object.assign({}, Ds(), n);
}
function bi(n, e) {
  return e.reduce(function(t, o) {
    return t[o] = n, t;
  }, {});
}
function vo(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = o === void 0 ? n.placement : o, r = t.strategy, a = r === void 0 ? n.strategy : r, l = t.boundary, c = l === void 0 ? Gr : l, f = t.rootBoundary, i = f === void 0 ? Os : f, g = t.elementContext, d = g === void 0 ? me : g, u = t.altBoundary, p = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, y = yi(typeof v != "number" ? v : bi(v, Wn)), m = d === me ? Kr : me, E = n.rects.popper, x = n.elements[p ? m : d], C = mi(Jt(x) ? x : x.contextElement || Pt(n.elements.popper), c, i, a), b = de(n.elements.reference), S = Ns({
    reference: b,
    element: E,
    strategy: "absolute",
    placement: s
  }), k = Kn(Object.assign({}, E, S)), $ = d === me ? k : b, L = {
    top: C.top - $.top + y.top,
    bottom: $.bottom - C.bottom + y.bottom,
    left: C.left - $.left + y.left,
    right: $.right - C.right + y.right
  }, O = n.modifiersData.offset;
  if (d === me && O) {
    var U = O[s];
    Object.keys(L).forEach(function(B) {
      var tt = [Tt, ht].indexOf(B) >= 0 ? 1 : -1, F = [nt, ht].indexOf(B) >= 0 ? "y" : "x";
      L[B] += U[F] * tt;
    });
  }
  return L;
}
var Uo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", wi = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Fo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ei(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, o = t === void 0 ? [] : t, s = e.defaultOptions, r = s === void 0 ? Fo : s;
  return function(l, c, f) {
    f === void 0 && (f = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Fo, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, g = [], d = !1, u = {
      state: i,
      setOptions: function(y) {
        var m = typeof y == "function" ? y(i.options) : y;
        _(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: Jt(l) ? ke(l) : l.contextElement ? ke(l.contextElement) : [],
          popper: ke(c)
        };
        var E = ai(hi([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = E.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = fi([].concat(E, i.options.modifiers), function(O) {
            var U = O.name;
            return U;
          });
          if (ui(x), xt(i.options.placement) === jn) {
            var C = i.orderedModifiers.find(function(O) {
              var U = O.name;
              return U === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ot(c), S = b.marginTop, k = b.marginRight, $ = b.marginBottom, L = b.marginLeft;
          [S, k, $, L].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), u.update();
      },
      forceUpdate: function() {
        if (!d) {
          var y = i.elements, m = y.reference, E = y.popper;
          if (!qo(m, E)) {
            process.env.NODE_ENV !== "production" && console.error(Uo);
            return;
          }
          i.rects = {
            reference: qr(m, Hn(E), i.options.strategy === "fixed"),
            popper: As(E)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var x = 0, C = 0; C < i.orderedModifiers.length; C++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(wi);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, C = -1;
              continue;
            }
            var b = i.orderedModifiers[C], S = b.fn, k = b.options, $ = k === void 0 ? {} : k, L = b.name;
            typeof S == "function" && (i = S({
              state: i,
              options: $,
              name: L,
              instance: u
            }) || i);
          }
        }
      },
      update: li(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(i);
        });
      }),
      destroy: function() {
        _(), d = !0;
      }
    };
    if (!qo(l, c))
      return process.env.NODE_ENV !== "production" && console.error(Uo), u;
    u.setOptions(f).then(function(v) {
      !d && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function p() {
      i.orderedModifiers.forEach(function(v) {
        var y = v.name, m = v.options, E = m === void 0 ? {} : m, x = v.effect;
        if (typeof x == "function") {
          var C = x({
            state: i,
            name: y,
            instance: u,
            options: E
          }), b = function() {
          };
          g.push(C || b);
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
var Ve = {
  passive: !0
};
function xi(n) {
  var e = n.state, t = n.instance, o = n.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = Q(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, Ve);
  }), l && c.addEventListener("resize", t.update, Ve), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, Ve);
    }), l && c.removeEventListener("resize", t.update, Ve);
  };
}
const ki = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xi,
  data: {}
};
function Ci(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Ns({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Si = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ci,
  data: {}
};
var Ri = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mi(n) {
  var e = n.x, t = n.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: he(e * s) / s || 0,
    y: he(t * s) / s || 0
  };
}
function Vo(n) {
  var e, t = n.popper, o = n.popperRect, s = n.placement, r = n.variation, a = n.offsets, l = n.position, c = n.gpuAcceleration, f = n.adaptive, i = n.roundOffsets, g = n.isFixed, d = a.x, u = d === void 0 ? 0 : d, p = a.y, _ = p === void 0 ? 0 : p, v = typeof i == "function" ? i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  u = v.x, _ = v.y;
  var y = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), E = Et, x = nt, C = window;
  if (f) {
    var b = Hn(t), S = "clientHeight", k = "clientWidth";
    if (b === Q(t) && (b = Pt(t), ot(b).position !== "static" && l === "absolute" && (S = "scrollHeight", k = "scrollWidth")), b = b, s === nt || (s === Et || s === Tt) && r === Se) {
      x = ht;
      var $ = g && b === C && C.visualViewport ? C.visualViewport.height : b[S];
      _ -= $ - o.height, _ *= c ? 1 : -1;
    }
    if (s === Et || (s === nt || s === ht) && r === Se) {
      E = Tt;
      var L = g && b === C && C.visualViewport ? C.visualViewport.width : b[k];
      u -= L - o.width, u *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, f && Ri), U = i === !0 ? Mi({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  if (u = U.x, _ = U.y, c) {
    var B;
    return Object.assign({}, O, (B = {}, B[x] = m ? "0" : "", B[E] = y ? "0" : "", B.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + _ + "px)" : "translate3d(" + u + "px, " + _ + "px, 0)", B));
  }
  return Object.assign({}, O, (e = {}, e[x] = m ? _ + "px" : "", e[E] = y ? u + "px" : "", e.transform = "", e));
}
function Ai(n) {
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
    placement: xt(e.placement),
    variation: ge(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: s,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Vo(Object.assign({}, i, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Vo(Object.assign({}, i, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const $i = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ai,
  data: {}
};
function Oi(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var o = e.styles[t] || {}, s = e.attributes[t] || {}, r = e.elements[t];
    !Z(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Li(n) {
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
const Ni = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oi,
  effect: Li,
  requires: ["computeStyles"]
};
var Di = [ki, Si, $i, Ni], Xn = /* @__PURE__ */ Ei({
  defaultModifiers: Di
});
function Ti(n) {
  return n === "x" ? "y" : "x";
}
function Ze(n, e, t) {
  return Xt(n, cn(e, t));
}
function Pi(n, e, t) {
  var o = Ze(n, e, t);
  return o > t ? t : o;
}
function Hi(n) {
  var e = n.state, t = n.options, o = n.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, d = t.tether, u = d === void 0 ? !0 : d, p = t.tetherOffset, _ = p === void 0 ? 0 : p, v = vo(e, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), y = xt(e.placement), m = ge(e.placement), E = !m, x = Ls(y), C = Ti(x), b = e.modifiersData.popperOffsets, S = e.rects.reference, k = e.rects.popper, $ = typeof _ == "function" ? _(Object.assign({}, e.rects, {
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
  if (!!b) {
    if (r) {
      var B, tt = x === "y" ? nt : Et, F = x === "y" ? ht : Tt, W = x === "y" ? "height" : "width", G = b[x], kt = G + v[tt], dt = G - v[F], Zt = u ? -k[W] / 2 : 0, pt = m === pe ? S[W] : k[W], Ct = m === pe ? -k[W] : -S[W], Ht = e.elements.arrow, gt = u && Ht ? As(Ht) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ds(), N = R[tt], z = R[F], q = Ze(0, S[W], gt[W]), et = E ? S[W] / 2 - Zt - q - N - L.mainAxis : pt - q - N - L.mainAxis, jt = E ? -S[W] / 2 + Zt + q + z + L.mainAxis : Ct + q + z + L.mainAxis, St = e.elements.arrow && Hn(e.elements.arrow), Be = St ? x === "y" ? St.clientTop || 0 : St.clientLeft || 0 : 0, ze = (B = O == null ? void 0 : O[x]) != null ? B : 0, In = G + et - ze - Be, P = G + jt - ze, _e = Ze(u ? cn(kt, In) : kt, G, u ? Xt(dt, P) : dt);
      b[x] = _e, U[x] = _e - G;
    }
    if (l) {
      var Wt, Ue = x === "x" ? nt : Et, Fe = x === "x" ? ht : Tt, st = b[C], qe = C === "y" ? "height" : "width", bo = st + v[Ue], wo = st - v[Fe], Bn = [nt, Et].indexOf(y) !== -1, Eo = (Wt = O == null ? void 0 : O[C]) != null ? Wt : 0, xo = Bn ? bo : st - S[qe] - k[qe] - Eo + L.altAxis, ko = Bn ? st + S[qe] + k[qe] - Eo - L.altAxis : wo, Co = u && Bn ? Pi(xo, st, ko) : Ze(u ? xo : bo, st, u ? ko : wo);
      b[C] = Co, U[C] = Co - st;
    }
    e.modifiersData[o] = U;
  }
}
const Jn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Hi,
  requiresIfExists: ["offset"]
};
var ji = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qe(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return ji[e];
  });
}
var Wi = {
  start: "end",
  end: "start"
};
function Yo(n) {
  return n.replace(/start|end/g, function(e) {
    return Wi[e];
  });
}
function Ii(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? Xr : c, i = ge(o), g = i ? l ? Io : Io.filter(function(p) {
    return ge(p) === i;
  }) : Wn, d = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  d.length === 0 && (d = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = d.reduce(function(p, _) {
    return p[_] = vo(n, {
      placement: _,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[xt(_)], p;
  }, {});
  return Object.keys(u).sort(function(p, _) {
    return u[p] - u[_];
  });
}
function Bi(n) {
  if (xt(n) === jn)
    return [];
  var e = Qe(n);
  return [Yo(n), e, Yo(e)];
}
function zi(n) {
  var e = n.state, t = n.options, o = n.name;
  if (!e.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, d = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = e.options.placement, y = xt(v), m = y === v, E = c || (m || !p ? [Qe(v)] : Bi(v)), x = [v].concat(E).reduce(function(gt, R) {
      return gt.concat(xt(R) === jn ? Ii(e, {
        placement: R,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: _
      }) : R);
    }, []), C = e.rects.reference, b = e.rects.popper, S = /* @__PURE__ */ new Map(), k = !0, $ = x[0], L = 0; L < x.length; L++) {
      var O = x[L], U = xt(O), B = ge(O) === pe, tt = [nt, ht].indexOf(U) >= 0, F = tt ? "width" : "height", W = vo(e, {
        placement: O,
        boundary: i,
        rootBoundary: g,
        altBoundary: d,
        padding: f
      }), G = tt ? B ? Tt : Et : B ? ht : nt;
      C[F] > b[F] && (G = Qe(G));
      var kt = Qe(G), dt = [];
      if (r && dt.push(W[U] <= 0), l && dt.push(W[G] <= 0, W[kt] <= 0), dt.every(function(gt) {
        return gt;
      })) {
        $ = O, k = !1;
        break;
      }
      S.set(O, dt);
    }
    if (k)
      for (var Zt = p ? 3 : 1, pt = function(R) {
        var N = x.find(function(z) {
          var q = S.get(z);
          if (q)
            return q.slice(0, R).every(function(et) {
              return et;
            });
        });
        if (N)
          return $ = N, "break";
      }, Ct = Zt; Ct > 0; Ct--) {
        var Ht = pt(Ct);
        if (Ht === "break")
          break;
      }
    e.placement !== $ && (e.modifiersData[o]._skip = !0, e.placement = $, e.reset = !0);
  }
}
const Zn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: zi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ts(n) {
  return n.button === 2;
}
const Ui = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Un = "show", tn = "contextmenu";
var Ft, J, qt, re, Le, Vt, Ne, Qn, vn, _n, mn, yn, Ps, bn, Hs;
const Mt = class extends Tn {
  constructor() {
    super(...arguments);
    w(this, Ne);
    w(this, yn);
    w(this, bn);
    w(this, Ft, void 0);
    w(this, J, void 0);
    w(this, qt, /* @__PURE__ */ new Map());
    w(this, re, void 0);
    w(this, Le, void 0);
    w(this, Vt, void 0);
    w(this, vn, ({ menu: t }) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = h(this, qt).get(t);
      s || (s = Xn(o.parentElement, o, {
        modifiers: [Jn, Zn],
        placement: "right-start"
      }), h(this, qt).set(t, s)), s.update();
    });
    w(this, _n, ({ menu: t }) => {
      const o = h(this, qt).get(t);
      o && (o.destroy(), h(this, qt).delete(t));
    });
    w(this, mn, ({ item: t, h: o }) => {
      if (t.type === "item" && t.items)
        return {
          trailingIcon: o("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Un);
  }
  get menu() {
    var s, r;
    if (h(this, Ft))
      return h(this, Ft);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(tn), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(tn) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${tn}`);
      }
    }
    if (o)
      return A(this, Ft, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return h(this, J) ? h(this, J) : H(this, Ne, Qn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || Mt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    A(this, Le, t), H(this, yn, Ps).call(this, t) !== !1 && (this.menu.classList.add(Un), H(this, Ne, Qn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = h(this, J)) == null || o.destroy(), A(this, J, void 0), (s = h(this, Ft)) == null || s.classList.remove(Un), (a = (r = h(this, Vt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = h(this, J)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ts(t) || (Mt.getAll(), Mt.getAll().forEach((o) => o.hide()));
  }
  static show(t) {
    const { event: o, ...s } = t, r = Mt.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const t = Mt.get(document.body);
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
let te = Mt;
Ft = new WeakMap(), J = new WeakMap(), qt = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), Vt = new WeakMap(), Ne = new WeakSet(), Qn = function() {
  const t = {
    modifiers: [Jn, Zn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return h(this, J) ? h(this, J).setOptions(t) : A(this, J, Xn(H(this, bn, Hs).call(this), this.menu, t)), h(this, J);
}, vn = new WeakMap(), _n = new WeakMap(), mn = new WeakMap(), yn = new WeakSet(), Ps = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return h(this, Vt) ? h(this, Vt).render({ items: o, ...r }) : A(this, Vt, new ds(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: h(this, vn),
    beforeDestroy: h(this, _n),
    onRenderItem: h(this, mn)
  })), !0;
}, bn = new WeakSet(), Hs = function() {
  return h(this, re) || A(this, re, {
    getBoundingClientRect: () => {
      const { clientX: t, clientY: o } = h(this, Le) || Mt.mousePos;
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
  }), h(this, re);
}, D(te, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(te, "watchedMouse", !1);
document.addEventListener("contextmenu", (n) => {
  const e = n.target;
  if (e.closest(`.${tn}`))
    return;
  const t = e.closest(Ui);
  t && (te.ensure(t).show(n), n.preventDefault());
});
document.addEventListener("click", te.clear);
function Fi(n) {
  return (n == null ? void 0 : n.nodeType) !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false";
}
const qi = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', ye = "show", Go = "dropdown-menu";
var Yt, yt;
const wn = class extends Tn {
  constructor() {
    super(...arguments);
    w(this, Yt, void 0);
    w(this, yt, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(ye);
  }
  get menu() {
    var t, o;
    if (!h(this, Yt)) {
      const { element: s } = this;
      let r;
      const a = (t = s.getAttribute("href")) != null ? t : s.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = s.nextElementSibling;
        l != null && l.classList.contains(Go) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Go}`);
      }
      if (r)
        A(this, Yt, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return h(this, Yt);
  }
  get popper() {
    return h(this, yt) || A(this, yt, Xn(this.element, this.menu, {
      modifiers: [Jn, Zn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), h(this, yt);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && wn.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(ye), this.element.classList.add(ye), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Fi(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = h(this, yt)) == null || o.destroy(), A(this, yt, void 0), (s = h(this, Yt)) == null || s.classList.remove(ye), this.element.classList.remove(ye), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = h(this, yt)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ts(t) || wn.getAll().forEach((o) => o.hide());
  }
};
let ee = wn;
Yt = new WeakMap(), yt = new WeakMap(), D(ee, "NAME", "dropdown"), D(ee, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(n) {
  const t = n.target.closest(qi);
  t ? ee.ensure(t).toggle() : ee.clear(n);
});
function Vi(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function _o({ col: n, className: e, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
  var b, S;
  const i = {
    left: n.left,
    width: n.realWidth,
    height: t,
    ...a
  }, { align: g, border: d } = n.setting, u = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", c, n.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], _ = ["dtable-cell-content", e], v = [(S = l != null ? l : (b = o.data) == null ? void 0 : b[n.name]) != null ? S : ""], y = s ? s(v, { row: o, col: n }, M) : v, m = [], E = [], x = {}, C = {};
  return y == null || y.forEach((k) => {
    var $;
    if (typeof k == "object" && k && !gs(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const L = k.outer ? m : E;
      k.html ? L.push(/* @__PURE__ */ M("div", {
        className: T("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...($ = k.attrs) != null ? $ : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : _).push(k.className), k.children && L.push(k.children), k.attrs && Object.assign(k.outer ? x : C, k.attrs));
    } else
      E.push(k);
  }), /* @__PURE__ */ M("div", {
    className: T(p),
    style: i,
    "data-col": n.name,
    ...f,
    ...x
  }, E.length > 0 && /* @__PURE__ */ M("div", {
    className: T(_),
    style: u,
    ...C
  }, E), m);
}
function Yi({ col: n, children: e, style: t, ...o }) {
  var r;
  const { sortType: s } = n.setting;
  return /* @__PURE__ */ M(_o, {
    col: n,
    style: { ...t, ...n.setting.style },
    "data-sort": s || null,
    "data-type": n.type,
    ...o
  }, (r = n.setting.title) != null ? r : n.setting.name, s && /* @__PURE__ */ M("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), e);
}
function Fn({ row: n, className: e, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = _o, onRenderCell: c }) {
  return /* @__PURE__ */ M("div", {
    className: T("dtable-cells", e),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ M(l, {
    key: f.name,
    col: f,
    row: n,
    onRenderCell: c
  }) : null));
}
function js({
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
  CellComponent: d = _o,
  onRenderCell: u,
  style: p,
  ..._
}) {
  let v = null;
  s != null && s.length && (v = /* @__PURE__ */ M(Fn, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let y = null;
  a != null && a.length && (y = /* @__PURE__ */ M(Fn, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ M(Fn, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  const E = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ M("div", {
    className: T("dtable-row", e),
    style: E,
    "data-id": n.id,
    ..._
  }, v, y, m);
}
function Gi({ height: n, onRenderRow: e, ...t }) {
  const o = {
    height: n,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Yi
  };
  if (e) {
    const s = e({ props: o }, M);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ M(js, {
    ...o
  }));
}
function Ki({
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
  return e = { ...e, top: t, height: s }, /* @__PURE__ */ M("div", {
    className: T("dtable-rows", n),
    style: e
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, M);
    return g && Object.assign(i, g), /* @__PURE__ */ M(js, {
      ...i
    });
  }));
}
const un = /* @__PURE__ */ new Map(), fn = [];
function Ws(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && un.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  un.set(t, n), (e == null ? void 0 : e.buildIn) && !fn.includes(t) && fn.push(t);
}
function Ie(n, e) {
  Ws(n, e);
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
function Is(n) {
  return un.delete(n);
}
function Xi(n) {
  if (typeof n == "string") {
    const e = un.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Bs(n, e, t) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Xi(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Bs(n, s.plugins, t), n.push(s), t.add(s.name));
  }), n;
}
function Ji(n = [], e = !0) {
  return e && fn.length && n.unshift(...fn), n != null && n.length ? Bs([], n, /* @__PURE__ */ new Set()) : [];
}
function Ko() {
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
function Zi(n) {
  const {
    tag: e,
    className: t,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: a,
    generators: l,
    onGenerate: c,
    onRenderItem: f,
    ...i
  } = n, g = [t], d = { ...o }, u = [], p = [];
  return s.forEach((_) => {
    var y;
    const v = [];
    typeof _ == "string" && l && l[_] && (_ = l[_]), typeof _ == "function" ? c ? v.push(...c.call(a, _, u, ...r)) : v.push(...(y = _.call(a, u, ...r)) != null ? y : []) : v.push(_), v.forEach((m) => {
      var E;
      m != null && (typeof m == "object" && !Ce(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? u.push(
        /* @__PURE__ */ Y("div", {
          className: T(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(E = m.attrs) != null ? E : {}
        })
      ) : m.__html ? p.push(m.__html) : (m.style && Object.assign(d, m.style), m.className && g.push(m.className), m.children && u.push(m.children), m.attrs && Object.assign(i, m.attrs)) : u.push(m));
    });
  }), p.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(g),
    style: d,
    ...i
  }, u];
}
function Xo({
  tag: n = "div",
  ...e
}) {
  const [t, o] = Zi(e);
  return Y(n, t, ...o);
}
var Gt, ie, Ot, bt, Lt, V, at, lt, ae, De, Te, wt, le, ce, En, zs, xn, Us, kn, Fs, Cn, qs, Pe, eo, Sn, Rn, He, je, Mn, An, $n, Vs, On, Ys, Ln, Gs;
class to extends Kt {
  constructor(t) {
    var o;
    super(t);
    w(this, En);
    w(this, xn);
    w(this, kn);
    w(this, Cn);
    w(this, Pe);
    w(this, $n);
    w(this, On);
    w(this, Ln);
    D(this, "ref", Rr());
    w(this, Gt, 0);
    w(this, ie, void 0);
    w(this, Ot, !1);
    w(this, bt, void 0);
    w(this, Lt, void 0);
    w(this, V, []);
    w(this, at, void 0);
    w(this, lt, /* @__PURE__ */ new Map());
    w(this, ae, {});
    w(this, De, void 0);
    w(this, Te, []);
    D(this, "updateLayout", () => {
      h(this, Gt) && cancelAnimationFrame(h(this, Gt)), A(this, Gt, requestAnimationFrame(() => {
        A(this, at, void 0), this.forceUpdate(), A(this, Gt, 0);
      }));
    });
    w(this, wt, (t, o) => {
      o = o || t.type;
      const s = h(this, lt).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, le, (t) => {
      h(this, wt).call(this, t, `window_${t.type}`);
    });
    w(this, ce, (t) => {
      h(this, wt).call(this, t, `document_${t.type}`);
    });
    w(this, Sn, (t, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, t, o);
        s && Object.assign(t.props, s);
      }
      return h(this, V).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, t, o);
          r && Object.assign(t.props, r);
        }
      }), t.props;
    });
    w(this, Rn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), h(this, V).forEach((s) => {
      s.onRenderHeaderRow && (t.props = s.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    w(this, He, (t, o, s) => {
      const { row: r, col: a } = o;
      t[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, s)), this.options[l] && (t = this.options[l].call(this, t, o, s)), h(this, V).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, s));
      }), t;
    });
    w(this, je, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, Mn, (t) => {
      var l, c, f, i, g;
      const o = this.getPointerInfo(t);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: a }), h(this, V).forEach((d) => {
          var u;
          (u = d.onHeaderCellClick) == null || u.call(this, t, { colName: r, element: a });
        }));
      else {
        const { rowElement: d } = o, u = this.layout.visibleRows.find((p) => p.id === s);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
            return;
          for (const p of h(this, V))
            if (((f = p.onCellClick) == null ? void 0 : f.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
          return;
        for (const p of h(this, V))
          if (((g = p.onRowClick) == null ? void 0 : g.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
            return;
      }
    });
    w(this, An, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    A(this, ie, (o = t.id) != null ? o : `dtable-${Ss(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, A(this, Lt, Object.freeze(Ji(t.plugins))), h(this, Lt).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(h(this, ae), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, at)) == null ? void 0 : t.options) || h(this, bt) || Ko();
  }
  get plugins() {
    return h(this, V);
  }
  get layout() {
    return h(this, at);
  }
  get id() {
    return h(this, ie);
  }
  get data() {
    return h(this, ae);
  }
  get parent() {
    var t, o;
    return (o = this.props.parent) != null ? o : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    A(this, bt, void 0);
  }
  componentDidMount() {
    if (h(this, Ot) ? this.forceUpdate() : H(this, Pe, eo).call(this), h(this, V).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", h(this, Mn)), this.on("keydown", h(this, An)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), A(this, De, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    h(this, V).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    h(this, Ot) ? H(this, Pe, eo).call(this) : h(this, V).forEach((t) => {
      var o;
      (o = t.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = h(this, De)) == null || o.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of h(this, lt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), h(this, le)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), h(this, ce)) : t.removeEventListener(s, h(this, wt));
    h(this, V).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), h(this, Lt).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), A(this, ae, {}), h(this, lt).clear();
  }
  on(t, o, s) {
    var a;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    r ? r.push(o) : (h(this, lt).set(t, [o]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), h(this, le)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), h(this, ce)) : (a = this.ref.current) == null || a.addEventListener(t, h(this, wt)));
  }
  off(t, o, s) {
    var l;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (h(this, lt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), h(this, le)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), h(this, ce)) : (l = this.ref.current) == null || l.removeEventListener(t, h(this, wt)));
  }
  emitCustomEvent(t, o) {
    h(this, wt).call(this, o instanceof Event ? o : new CustomEvent(t, { detail: o }), t);
  }
  scroll(t, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: c, colsInfo: { scrollWidth: f, scrollColsWidth: i } } = this.layout, { to: g } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (g === "up" || g === "down")
      u = r + (g === "down" ? 1 : -1) * Math.floor(l / c) * c;
    else if (g === "left" || g === "right")
      d = s + (g === "right" ? 1 : -1) * f;
    else if (g === "home")
      u = 0;
    else if (g === "end")
      u = a - l;
    else if (g === "left-begin")
      d = 0;
    else if (g === "right-end")
      d = i - f;
    else {
      const { offsetLeft: _, offsetTop: v } = t;
      typeof _ == "number" && (d = s + _), typeof v == "number" && (d = r + v);
    }
    const p = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, i - f)), d !== s && (p.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, a - l)), u !== r && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, p), o == null || o.call(this, !0);
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
    s === "layout" ? A(this, at, void 0) : s === "options" && (A(this, at, void 0), A(this, bt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
  i18n(t, o, s) {
    var r;
    return (r = We(h(this, Te), t, o, s, this.options.lang)) != null ? r : `{i18n:${t}}`;
  }
  render() {
    var u;
    const t = H(this, Ln, Gs).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
      "scrollbar-hover": f
    }], d = [];
    return t && h(this, V).forEach((p) => {
      var v;
      const _ = (v = p.onRender) == null ? void 0 : v.call(this, t);
      !_ || (_.style && Object.assign(i, _.style), _.className && g.push(_.className), _.children && d.push(_.children));
    }), /* @__PURE__ */ M("div", {
      id: h(this, ie),
      className: T(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && H(this, En, zs).call(this, t), t && H(this, xn, Us).call(this, t), t && H(this, kn, Fs).call(this, t), t && H(this, Cn, qs).call(this, t));
  }
}
Gt = new WeakMap(), ie = new WeakMap(), Ot = new WeakMap(), bt = new WeakMap(), Lt = new WeakMap(), V = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), ae = new WeakMap(), De = new WeakMap(), Te = new WeakMap(), wt = new WeakMap(), le = new WeakMap(), ce = new WeakMap(), En = new WeakSet(), zs = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ M(Gi, {
      scrollLeft: a,
      height: r,
      onRenderCell: h(this, He),
      onRenderRow: h(this, Rn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Xo, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [t],
    generatorThis: this
  });
}, xn = new WeakSet(), Us = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ M(Ki, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: h(this, He),
    onRenderRow: h(this, Sn),
    ...l
  });
}, kn = new WeakSet(), Fs = function(t) {
  const { footer: o } = t;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Xo, {
    className: "dtable-footer",
    style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
    renders: s,
    generateArgs: [t],
    generatorThis: this,
    generators: t.footerGenerators
  });
}, Cn = new WeakSet(), qs = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c, footerHeight: f } = t, { scrollColsWidth: i, scrollWidth: g } = r, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return i > g && o.push(
    /* @__PURE__ */ M(Ho, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: g,
      onScroll: h(this, je),
      left: r.fixedLeftWidth,
      bottom: (u === "inside" ? 0 : -d) + f,
      size: d,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ M(Ho, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: h(this, je),
      right: 0,
      size: d,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Pe = new WeakSet(), eo = function() {
  var t;
  A(this, Ot, !1), (t = this.options.afterRender) == null || t.call(this), h(this, V).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Sn = new WeakMap(), Rn = new WeakMap(), He = new WeakMap(), je = new WeakMap(), Mn = new WeakMap(), An = new WeakMap(), $n = new WeakSet(), Vs = function() {
  if (h(this, bt))
    return !1;
  const o = { ...Ko(), ...h(this, Lt).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return A(this, bt, o), A(this, V, h(this, Lt).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), A(this, Te, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, On = new WeakSet(), Ys = function() {
  var Ht, gt;
  const { plugins: t } = this;
  let o = h(this, bt);
  const s = {
    flex: /* @__PURE__ */ M("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ M("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  t.forEach((R) => {
    var z;
    const N = (z = R.beforeLayout) == null ? void 0 : z.call(this, o);
    N && (o = { ...o, ...N }), Object.assign(s, R.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, c = [], f = [], i = [], g = {}, d = [], u = [];
  let p = 0, _ = 0, v = 0;
  o.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: N,
      type: z = "",
      fixed: q = !1,
      flex: et = !1,
      width: jt = r,
      minWidth: St = a,
      maxWidth: Be = l,
      ...ze
    } = R, In = Vi(jt, St, Be), P = {
      name: N,
      type: z,
      setting: {
        name: N,
        type: z,
        fixed: q,
        flex: et,
        width: jt,
        minWidth: St,
        maxWidth: Be,
        ...ze
      },
      flex: q ? 0 : et === !0 ? 1 : typeof et == "number" ? et : 0,
      left: 0,
      width: In,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((_e) => {
      var Ue, Fe;
      const Wt = (Ue = _e.colTypes) == null ? void 0 : Ue[z];
      if (Wt) {
        const st = typeof Wt == "function" ? Wt(P) : Wt;
        st && Object.assign(P.setting, st);
      }
      (Fe = _e.onAddCol) == null || Fe.call(this, P);
    }), P.realWidth = P.realWidth || P.width, q === "left" ? (P.left = p, p += P.width, c.push(P)) : q === "right" ? (P.left = _, _ += P.width, f.push(P)) : (P.left = v, v += P.width, i.push(P)), P.flex && u.push(P), d.push(P), g[P.name] = P;
  });
  let y = o.width, m = 0;
  const E = p + v + _;
  if (typeof y == "function" && (y = y.call(this, E)), y === "auto")
    m = E;
  else if (y === "100%") {
    const { parent: R } = this;
    if (R)
      m = R.clientWidth;
    else {
      m = 0, A(this, Ot, !0);
      return;
    }
  } else
    m = y != null ? y : 0;
  const { data: x, rowKey: C = "id", rowHeight: b } = o, S = [], k = (R, N, z) => {
    var et, jt;
    const q = { data: z != null ? z : { [C]: R }, id: R, index: S.length, top: 0 };
    if (z || (q.lazy = !0), S.push(q), ((et = o.onAddRow) == null ? void 0 : et.call(this, q, N)) !== !1) {
      for (const St of t)
        if (((jt = St.onAddRow) == null ? void 0 : jt.call(this, q, N)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let R = 0; R < x; R++)
      k(`${R}`, R);
  else
    Array.isArray(x) && x.forEach((R, N) => {
      var z;
      typeof R == "object" ? k(`${(z = R[C]) != null ? z : ""}`, N, R) : k(`${R != null ? R : ""}`, N);
    });
  let $ = S;
  const L = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, $);
    R && ($ = R);
  }
  for (const R of t) {
    const N = (Ht = R.onAddRows) == null ? void 0 : Ht.call(this, $);
    N && ($ = N);
  }
  $.forEach((R, N) => {
    L[R.id] = R, R.index = N, R.top = R.index * b;
  });
  const { header: O, footer: U } = o, B = O ? o.headerHeight || b : 0, tt = U ? o.footerHeight || b : 0;
  let F = o.height, W = 0;
  const G = $.length * b, kt = B + tt + G;
  if (typeof F == "function" && (F = F.call(this, kt)), F === "auto")
    W = kt;
  else if (typeof F == "object")
    W = Math.min(F.max, Math.max(F.min, kt));
  else if (F === "100%") {
    const { parent: R } = this;
    if (R)
      W = R.clientHeight;
    else {
      W = 0, A(this, Ot, !0);
      return;
    }
  } else
    W = F;
  const dt = W - B - tt, Zt = m - p - _, pt = {
    options: o,
    allRows: S,
    width: m,
    height: W,
    rows: $,
    rowsMap: L,
    rowHeight: b,
    rowsHeight: dt,
    rowsHeightTotal: G,
    header: O,
    footer: U,
    footerGenerators: s,
    headerHeight: B,
    footerHeight: tt,
    colsMap: g,
    colsList: d,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: f,
      scrollCols: i,
      fixedLeftWidth: p,
      scrollWidth: Zt,
      scrollColsWidth: v,
      fixedRightWidth: _
    }
  }, Ct = (gt = o.onLayout) == null ? void 0 : gt.call(this, pt);
  Ct && Object.assign(pt, Ct), t.forEach((R) => {
    if (R.onLayout) {
      const N = R.onLayout.call(this, pt);
      N && Object.assign(pt, N);
    }
  }), A(this, at, pt);
}, Ln = new WeakSet(), Gs = function() {
  (H(this, $n, Vs).call(this) || !h(this, at)) && H(this, On, Ys).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = t;
  if (s.length) {
    const E = a - l;
    if (E > 0) {
      const x = s.reduce((b, S) => b + S.flex, 0);
      let C = 0;
      s.forEach((b) => {
        const S = Math.min(E - C, Math.ceil(E * (b.flex / x)));
        b.realWidth = S + b.width, C += b.realWidth;
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
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: d } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), p = Math.floor(u / d), _ = u + i, v = Math.min(g.length, Math.ceil(_ / d)), y = [], { rowDataGetter: m } = this.options;
  for (let E = p; E < v; E++) {
    const x = g[E];
    x.lazy && m && (x.data = m([x.id])[0], x.lazy = !1), y.push(x);
  }
  return t.visibleRows = y, t.scrollTop = u, t.scrollLeft = o, t;
}, D(to, "addPlugin", Ws), D(to, "removePlugin", Is);
function Jo(n, e) {
  e !== void 0 ? n.data.hoverCol = e : e = n.data.hoverCol;
  const { current: t } = n.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && t.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const Ks = {
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
      Jo(this, o);
    },
    mouseleave() {
      Jo(this, !1);
    }
  }
};
Ie(Ks, { buildIn: !0 });
function Qi(n, e) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (n === void 0 ? (e === void 0 && (e = !Xs.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function ta(n) {
  var e;
  return (e = this.state.checkedRows[n]) != null ? e : !1;
}
function Xs() {
  var t, o;
  const n = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? n === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : n === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ea() {
  return Object.keys(this.state.checkedRows);
}
const Js = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Qi,
    isRowChecked: ta,
    isAllRowChecked: Xs,
    getChecks: ea
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
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ M("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ M("input", {
          type: "checkbox",
          checked: n
        }))
      ];
    },
    checkedInfo(n, e) {
      const t = this.getChecks().length, o = [];
      return t && o.push(this.i18n("checkedCountInfo", { selected: t })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ M("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(n, { row: e, col: t }) {
    var l, c;
    const { id: o } = e, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return n;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ M("input", {
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
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: c
      });
      n.unshift(f), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow({ props: n, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: T(n.className, "is-checked") };
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
Ie(Js);
function no(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, o = e.children && t && t[n];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const a = no.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? no.call(this, e.parent).level + 1 : 0, e;
}
function na(n, e) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !Zs.call(this)), e) {
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
function Zs() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Qs(n, e = 0, t, o = 0) {
  var s;
  t || (t = [...n.keys()]);
  for (const r of t) {
    const a = n.get(r);
    !a || (a.level === o && (a.order = e++), (s = a.children) != null && s.length && (e = Qs(n, e, a.children, o + 1)));
  }
  return e;
}
function tr(n, e, t, o) {
  const s = n.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, tr(n, r, t, o);
  }), s;
}
function er(n, e, t, o, s) {
  var l;
  const r = n.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[e] = t), r.parent && er(n, r.parent, t, o, s);
}
const nr = {
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
        const a = tr(this, s, r, o);
        a != null && a.parent && er(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: na,
    isAllCollapsed: Zs,
    getNestedRowInfo: no
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
    return n = n.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), Qs(this.data.nestedMap), n.sort((e, t) => {
      var a, l;
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? e.index - t.index : r;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = e.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && n.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, e, s)) != null ? c : /* @__PURE__ */ M("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = e.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), n.unshift(/* @__PURE__ */ M("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var s, r;
    const { id: o } = e;
    return t.setting.nestedToggle && n.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ M("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow({ props: n, row: e }) {
    const t = this.getNestedRowInfo(e.id);
    return {
      className: T(n.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: n }) {
    return n.className = T(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
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
Ie(nr);
const ut = 24 * 60 * 60 * 1e3, K = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), ve = (n, e = new Date()) => (n = K(n), e = K(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate()), oo = (n, e = new Date()) => K(n).getFullYear() === K(e).getFullYear(), or = (n, e = new Date()) => (n = K(n), e = K(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), oa = (n, e = new Date()) => {
  n = K(n), e = K(e);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(n.getTime() / t), s = Math.floor(e.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, sa = (n, e) => ve(K(e), n), ra = (n, e) => ve(K(e).getTime() - ut, n), ia = (n, e) => ve(K(e).getTime() + ut, n), aa = (n, e) => ve(K(e).getTime() - 2 * ut, n), hn = (n, e = "yyyy-MM-dd hh:mm") => {
  n = K(n);
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
}, la = (n, e, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = hn(n, oo(n) ? o.month : o.full);
  if (ve(n, e))
    return s;
  const r = hn(e, oo(n, e) ? or(n, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, ca = (n) => {
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
}, so = (n, e, t = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return n *= 365, so(n, "day", t, o);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, so(n, "day", t, o);
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
const sr = {
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
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = Qt(o, t.data);
        return n[0] = /* @__PURE__ */ M("a", {
          href: r,
          ...s
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, { col: e, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ M("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ M("img", {
          src: o ? o[a] : ""
        }));
        return s ? n.unshift(l) : n[0] = l, n;
      }
    },
    circleProgress: {
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, a = (t - o) / 2, l = t / 2, c = n[0];
        return n[0] = /* @__PURE__ */ M("svg", {
          width: t,
          height: t
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
          "stroke-dashoffset": Math.PI * a * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ M("text", {
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
            return f && (c = { className: a, ...f, ...c }), Qt(s, c);
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
        return typeof o == "function" ? n[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? n[0] = hn(r, o) : s === "html" ? n[0] = { html: Qt(o, r) } : n[0] = Qt(o, r), n;
      }
    }
  }
};
Ie(sr);
const ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Ks,
  checkable: Js,
  nested: nr,
  rich: sr
}, Symbol.toStringTag, { value: "Module" }));
class Ye extends fs {
}
D(Ye, "Component", to), D(Ye, "definePlugin", Ie), D(Ye, "removePlugin", Is), D(Ye, "plugins", ua);
var ct, X;
class fa {
  constructor(e) {
    w(this, ct, void 0);
    w(this, X, void 0);
    A(this, ct, e), A(this, X, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement), this.addActive(h(this, X).parentElement, h(this, X)), h(this, X).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    A(this, X, h(this, ct)), this.addActive(h(this, X).parentElement, h(this, X)), A(this, ct, document.querySelector(`[href='#${h(this, X).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, X).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, X).getAttribute("id")}']`)), this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement);
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
ct = new WeakMap(), X = new WeakMap();
document.addEventListener("click", function(n) {
  n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new fa(n.target).showTarget());
});
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: K,
  isSameDay: ve,
  isSameYear: oo,
  isSameMonth: or,
  isSameWeek: oa,
  isToday: sa,
  isYesterday: ra,
  isTomorrow: ia,
  isDBY: aa,
  formatDate: hn,
  formatDateSpan: la,
  getTimeBeforeDesc: ca,
  calculateTimestamp: so,
  formatString: Qt,
  formatBytes: _r,
  convertBytes: mr,
  isObject: Ke,
  mergeDeep: sn
}, Symbol.toStringTag, { value: "Module" }));
export {
  pa as Avatar,
  te as ContextMenu,
  Ye as DTable,
  ee as Dropdown,
  io as EventBus,
  ds as Menu,
  fa as NavTabs,
  Ho as Scrollbar,
  wr as addI18nMap,
  da as browser,
  yr as getLangCode,
  ga as helpers,
  We as i18n,
  qn as nativeEvents,
  br as setLangCode,
  Tr as store
};
