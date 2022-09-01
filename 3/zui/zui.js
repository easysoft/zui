var Ot = Object.defineProperty;
var Ut = (n, t, e) => t in n ? Ot(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var k = (n, t, e) => (Ut(n, typeof t != "symbol" ? t + "" : t, e), e), We = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var d = (n, t, e) => (We(n, t, "read from private field"), e ? e.call(n) : t.get(n)), x = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, R = (n, t, e, s) => (We(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var me = (n, t, e) => (We(n, t, "access private method"), e);
var Me, E, bt, he, ct, ke = {}, yt = [], Bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function V(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function vt(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function b(n, t, e) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Me.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return ve(n, r, s, i, null);
}
function ve(n, t, e, s, i) {
  var o = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++bt : i };
  return i == null && E.vnode != null && E.vnode(o), o;
}
function wt() {
  return { current: null };
}
function $e(n) {
  return n.children;
}
function ne(n, t) {
  this.props = n, this.context = t;
}
function le(n, t) {
  if (t == null)
    return n.__ ? le(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? le(n) : null;
}
function kt(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return kt(n);
  }
}
function ht(n) {
  (!n.__d && (n.__d = !0) && he.push(n) && !Se.__r++ || ct !== E.debounceRendering) && ((ct = E.debounceRendering) || setTimeout)(Se);
}
function Se() {
  for (var n; Se.__r = he.length; )
    n = he.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), he = [], n.some(function(t) {
      var e, s, i, o, r, a;
      t.__d && (r = (o = (e = t).__v).__e, (a = e.__P) && (s = [], (i = V({}, o)).__v = o.__v + 1, Be(a, o, i, e.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r == null ? le(o) : r, o.__h), Et(s, o), o.__e != r && kt(o)));
    });
}
function St(n, t, e, s, i, o, r, a, c, f) {
  var l, g, p, u, _, S, m, y = s && s.__k || yt, v = y.length;
  for (e.__k = [], l = 0; l < t.length; l++)
    if ((u = e.__k[l] = (u = t[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? ve(null, u, null, null, u) : Array.isArray(u) ? ve($e, { children: u }, null, null, null) : u.__b > 0 ? ve(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = e, u.__b = e.__b + 1, (p = y[l]) === null || p && u.key == p.key && u.type === p.type)
        y[l] = void 0;
      else
        for (g = 0; g < v; g++) {
          if ((p = y[g]) && u.key == p.key && u.type === p.type) {
            y[g] = void 0;
            break;
          }
          p = null;
        }
      Be(n, u, p = p || ke, i, o, r, a, c, f), _ = u.__e, (g = u.ref) && p.ref != g && (m || (m = []), p.ref && m.push(p.ref, null, u), m.push(g, u.__c || _, u)), _ != null ? (S == null && (S = _), typeof u.type == "function" && u.__k === p.__k ? u.__d = c = Rt(u, c, n) : c = Ct(n, u, p, y, _, c), typeof e.type == "function" && (e.__d = c)) : c && p.__e == c && c.parentNode != n && (c = le(p));
    }
  for (e.__e = S, l = v; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = le(s, l + 1)), Mt(y[l], y[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      xt(m[l], m[++l], m[++l]);
}
function Rt(n, t, e) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, t = typeof s.type == "function" ? Rt(s, t, e) : Ct(e, s, s, i, s.__e, t));
  return t;
}
function Ct(n, t, e, s, i, o) {
  var r, a, c;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (e == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== n)
        n.appendChild(i), r = null;
      else {
        for (a = o, c = 0; (a = a.nextSibling) && c < s.length; c += 2)
          if (a == i)
            break e;
        n.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function Ft(n, t, e, s, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Re(n, o, null, e[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Re(n, o, t[o], e[o], s);
}
function dt(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || Bt.test(t) ? e : e + "px";
}
function Re(n, t, e, s, i) {
  var o;
  e:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || dt(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || dt(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + o] = e, e ? s || n.addEventListener(t, o ? ut : ft, o) : n.removeEventListener(t, o ? ut : ft, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break e;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function ft(n) {
  this.l[n.type + !1](E.event ? E.event(n) : n);
}
function ut(n) {
  this.l[n.type + !0](E.event ? E.event(n) : n);
}
function Be(n, t, e, s, i, o, r, a, c) {
  var f, l, g, p, u, _, S, m, y, v, $, W, P, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (f = E.__b) && f(t);
  try {
    e:
      if (typeof A == "function") {
        if (m = t.props, y = (f = A.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, e.__c ? S = (l = t.__c = e.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? t.__c = l = new A(m, v) : (t.__c = l = new ne(m, v), l.constructor = A, l.render = qt), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = v, l.__n = s, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = V({}, l.__s)), V(l.__s, A.getDerivedStateFromProps(m, l.__s))), p = l.props, u = l.state, g)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && m !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, v) === !1 || t.__v === e.__v) {
            l.props = m, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, u, _);
          });
        }
        if (l.context = v, l.props = m, l.__v = t, l.__P = n, $ = E.__r, W = 0, "prototype" in A && A.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++W < 25);
        l.state = l.__s, l.getChildContext != null && (s = V(V({}, s), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(p, u)), P = f != null && f.type === $e && f.key == null ? f.props.children : f, St(n, Array.isArray(P) ? P : [P], t, e, s, i, o, r, a, c), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), S && (l.__E = l.__ = null), l.__e = !1;
      } else
        o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Yt(e.__e, t, e, s, i, o, r, c);
    (f = E.diffed) && f(t);
  } catch (O) {
    t.__v = null, (c || o != null) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), E.__e(O, t, e);
  }
}
function Et(n, t) {
  E.__c && E.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(s) {
        s.call(e);
      });
    } catch (s) {
      E.__e(s, e.__v);
    }
  });
}
function Yt(n, t, e, s, i, o, r, a) {
  var c, f, l, g = e.props, p = t.props, u = t.type, _ = 0;
  if (u === "svg" && (i = !0), o != null) {
    for (; _ < o.length; _++)
      if ((c = o[_]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, o[_] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(p);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, p.is && p), o = null, a = !1;
  }
  if (u === null)
    g === p || a && n.data === p || (n.data = p);
  else {
    if (o = o && Me.call(n.childNodes), f = (g = e.props || ke).dangerouslySetInnerHTML, l = p.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (g = {}, _ = 0; _ < n.attributes.length; _++)
          g[n.attributes[_].name] = n.attributes[_].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === n.innerHTML) || (n.innerHTML = l && l.__html || ""));
    }
    if (Ft(n, p, g, i, a), l)
      t.__k = [];
    else if (_ = t.props.children, St(n, Array.isArray(_) ? _ : [_], t, e, s, i && u !== "foreignObject", o, r, o ? o[0] : e.__k && le(e, 0), a), o != null)
      for (_ = o.length; _--; )
        o[_] != null && vt(o[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== n.value || u === "progress" && !_ || u === "option" && _ !== g.value) && Re(n, "value", _, g.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== n.checked && Re(n, "checked", _, g.checked, !1));
  }
  return n;
}
function xt(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    E.__e(s, e);
  }
}
function Mt(n, t, e) {
  var s, i;
  if (E.unmount && E.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || xt(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        E.__e(o, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Mt(s[i], t, typeof n.type != "function");
  e || n.__e == null || vt(n.__e), n.__e = n.__d = void 0;
}
function qt(n, t, e) {
  return this.constructor(n, e);
}
function Kt(n, t, e) {
  var s, i, o;
  E.__ && E.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, o = [], Be(t, n = (!s && e || t).__k = b($e, null, [n]), i || ke, ke, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? Me.call(t.childNodes) : null, o, !s && e ? e : i ? i.__e : t.firstChild, s), Et(o, n);
}
Me = yt.slice, E = { __e: function(n, t, e, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, bt = 0, ne.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = V({}, this.state), typeof n == "function" && (n = n(V({}, e), this.props)), n && V(e, n), n != null && this.__v && (t && this.__h.push(t), ht(this));
}, ne.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ht(this));
}, ne.prototype.render = $e, he = [], Se.__r = 0;
const T = (...n) => n.map((t) => Array.isArray(t) ? T(...t) : typeof t == "function" ? T(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const s = t[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class kn extends ne {
  render() {
    const { size: t, rounded: e, className: s, style: i, src: o, text: r, children: a, ...c } = this.props, f = [s], l = { ...i };
    let g = null;
    return o ? g = /* @__PURE__ */ b("img", {
      src: o,
      alt: r
    }) : g = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && f.push(`avatar-${t}`), typeof e == "string" && f.push(`rounded-${e}`), /* @__PURE__ */ b("div", {
      className: T(f),
      style: l,
      ...c
    }, g, a);
  }
}
function Vt(n) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const s = document.createRange();
      return s.selectNodeContents(t), e.removeAllRanges(), e.addRange(s), !0;
    }
  }
  return !1;
}
function Gt(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function Xt(n, t) {
  const e = typeof n == "string" ? document.querySelector(n) : n;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= o && s.top + s.height <= i;
  const r = s.top <= i && s.top + s.height >= 0, a = s.left <= o && s.left + s.width >= 0;
  return r && a;
}
const Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Vt,
  domReady: Gt,
  isElementVisible: Xt,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
const Jt = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: i, value: o } = s;
    t[i] = o;
  }), t;
};
class Zt extends HTMLElement {
  constructor() {
    super();
    k(this, "$button");
    k(this, "$icon");
    k(this, "onClick");
    this.$button = document.createElement("button");
    const e = this.innerHTML;
    this.innerHTML = "", this.$button.innerHTML = e, this.icon && (this.$icon = document.createElement("i"), this.addClass(this.$icon, `icon ${this.icon}`), this.$button.prepend(this.$icon)), this.$button.classList.add("btn"), this.append(this.$button);
  }
  connectedCallback() {
    this.initStyle(), this.initEventListen(), this.isDisabled && this.$button.setAttribute("disabled", "disabled"), this.$button.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 13:
          e.stopPropagation();
          break;
      }
    });
  }
  initStyle() {
    const e = Jt(this);
    if (e)
      for (const s in e)
        ["type", "size", "rounded", "outline"].includes(s) && this.addClass(this.$button, `-${e[s]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, s) {
    e && e.classList.add(s);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(e) {
    this.getAttribute("type") ? (this.setAttribute("type", e), this.addClass(this.$button, `-${this.type}`)) : this.removeAttribute("type");
  }
  get size() {
    return this.getAttribute("size");
  }
  set size(e) {
    this.getAttribute("size") ? (this.setAttribute("size", e || "base"), this.addClass(this.$button, `-${e}`)) : this.removeAttribute("size");
  }
  get loading() {
    return this.getAttribute("loading");
  }
  set loading(e) {
    this.getAttribute("loading") ? this.setAttribute("loading", e || "") : this.removeAttribute("loading");
  }
  get rounded() {
    return this.getAttribute("rounded");
  }
  set rounded(e) {
    this.getAttribute("rounded") ? (this.setAttribute("rounded", e || ""), this.addClass(this.$button, `-${e}`)) : this.removeAttribute("rounded");
  }
  get isDisabled() {
    return this.getAttribute("isDisabled") !== null;
  }
  set isDisabled(e) {
    e === null || e === !1 ? this.removeAttribute("isDisabled") : this.setAttribute("isDisabled", "");
  }
  get icon() {
    return this.getAttribute("icon");
  }
  set icon(e) {
    this.setAttribute("icon", e);
  }
  static get observedAttributes() {
    return ["type", "size", "rounded", "disabled", "loading", "outline"];
  }
  get class() {
    return this.$button.classList;
  }
  attributeChangedCallback(e, s) {
    e === "isDisabled" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && s && this.addClass(this.$icon, `-${s}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Zt);
var J, de;
class pt {
  constructor(t) {
    x(this, J, void 0);
    x(this, de, void 0);
    var e;
    R(this, J, t), R(this, de, t.nextElementSibling), ((e = d(this, J).dataset) == null ? void 0 : e.toggle) === "dropdown" && !d(this, J).parentElement.className.includes("dropdown-hover") && this.toggle(d(this, J).parentElement, d(this, de));
  }
  toggle(t, e) {
    t.className.includes("open") ? (this.hideMenu(e), t.className = t.className.replace(" open", "")) : (this.showMenu(e), t.className = t.className + " open");
  }
  showMenu(t) {
    this.clearMenu(), t.classList.add("block");
  }
  hideMenu(t) {
    t.classList.add("hidden");
  }
  clearMenu() {
    document.querySelectorAll(".dropdown-menu").forEach((e) => {
      e.classList.add("hidden"), e.parentElement && (e.parentElement.className = e.parentElement.className.replace(" open", ""));
    });
  }
}
J = new WeakMap(), de = new WeakMap();
document.addEventListener("click", function(n) {
  n !== null && n.target instanceof HTMLElement && (n.target.dataset.toggle === "dropdown" ? new pt(n.target) : new pt(n).clearMenu());
});
var Z, Q;
class gt extends ne {
  constructor(e) {
    var s;
    super(e);
    x(this, Z, 0);
    x(this, Q, null);
    k(this, "_handleWheel", (e) => {
      var o;
      const { wheelContainer: s } = this.props, i = e.target;
      !i || !s || (typeof s == "string" && i.closest(s) || typeof s == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1)) && e.preventDefault();
    });
    k(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (d(this, Z) && cancelAnimationFrame(d(this, Z)), R(this, Z, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), R(this, Z, 0);
      })), e.preventDefault());
    });
    k(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    k(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    k(this, "_handleClick", (e) => {
      const s = e.currentTarget;
      if (!s)
        return;
      const i = s.getBoundingClientRect(), { type: o, clientSize: r, scrollSize: a } = this.props, c = (o === "horz" ? e.clientX - i.left : e.clientY - i.top) - this.barSize / 2;
      this.scroll(c * a / r);
    });
    this.state = {
      scrollPos: (s = this.props.defaultScrollPos) != null ? s : 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    var e;
    return (e = this.props.scrollPos) != null ? e : this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: e, clientSize: s } = this.props;
    return Math.max(0, e - s);
  }
  get barSize() {
    const { clientSize: e, scrollSize: s, size: i = 10 } = this.props;
    return Math.max(Math.round(e * e / s), 2 * i);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (R(this, Q, typeof e == "string" ? document : e.current), d(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Q) && d(this, Q).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    return e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)), !0);
  }
  scrollOffset(e) {
    return this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    var i;
    const { onScroll: s } = this.props;
    s && s(e, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      scrollSize: e,
      clientSize: s,
      type: i,
      size: o = 10,
      className: r,
      style: a,
      left: c,
      top: f,
      bottom: l,
      right: g
    } = this.props, { maxScrollPos: p, scrollPos: u } = this, { dragStart: _ } = this.state, S = {
      left: c,
      top: f,
      bottom: l,
      right: g,
      ...a
    }, m = {};
    return i === "horz" ? (S.height = o, S.width = s, m.width = this.barSize, m.left = Math.round(u * (s - m.width) / p)) : (S.width = o, S.height = s, m.height = this.barSize, m.top = Math.round(u * (s - m.height) / p)), /* @__PURE__ */ b("div", {
      className: T("scrollbar", r, {
        "is-vert": i === "vert",
        "is-horz": i === "horz",
        "is-dragging": _
      }),
      style: S,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Z = new WeakMap(), Q = new WeakMap();
function Fe({ col: n, className: t, height: e, rowID: s, hoverCol: i, rowData: o, onRenderCell: r, style: a, children: c, ...f }) {
  const { cellStyle: l, align: g, className: p } = n.setting, u = {
    left: n.left,
    width: n.realWidth,
    height: e,
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...a,
    ...l
  };
  let _ = [
    c != null ? c : o == null ? void 0 : o[n.name]
  ];
  r && (_ = r(_, s, n, o));
  const S = [], m = [];
  _ == null || _.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? (v.html && m.push(/* @__PURE__ */ b("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: v.html }
    })), v.style && Object.assign(u, v.style), v.className && S.push(v.className)) : m.push(v);
  });
  const y = T("dtable-cell", t, {
    "dtable-col-hover": i
  }, p, S);
  return /* @__PURE__ */ b("div", {
    className: y,
    style: u,
    "data-col": n.name,
    ...f
  }, m);
}
function Qt({ col: n, children: t, style: e, ...s }) {
  let { sortType: i } = n.setting;
  return i === !0 && (i = "none"), /* @__PURE__ */ b(Fe, {
    col: n,
    style: { ...e, ...n.setting.style },
    "data-sort": i || null,
    "data-type": n.type,
    ...s
  }, n.setting.title, i && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${i}`
  }), t);
}
function je({ rowID: n, className: t, top: e = 0, left: s = 0, width: i, height: o, cols: r, data: a, hoverCol: c, CellComponent: f = Fe, onRenderCell: l }) {
  return /* @__PURE__ */ b("div", {
    className: T("dtable-cells", t),
    style: { top: e, left: s, width: i, height: o }
  }, r.map((g) => g.visible ? /* @__PURE__ */ b(f, {
    key: g.name,
    col: g,
    hoverCol: c === g.name && g.setting.colHover !== !1,
    rowData: a,
    rowID: n,
    onRenderCell: l
  }) : null));
}
function $t({
  rowID: n,
  className: t,
  top: e,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: f,
  flexRightWidth: l,
  scrollLeft: g,
  CellComponent: p = Fe,
  onRenderCell: u,
  hoverCol: _,
  data: S
}) {
  let m = null;
  i != null && i.length && (m = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-left",
    cols: i,
    width: a,
    rowID: n,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: u,
    data: S
  }));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ b(je, {
    className: "dtable-flexable",
    cols: r,
    left: a - g,
    width: f,
    rowID: n,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: u,
    data: S
  }));
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-right",
    cols: o,
    left: a + c,
    width: l,
    rowID: n,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: u,
    data: S
  }));
  const $ = { top: e, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ b("div", {
    className: T("dtable-row", t),
    style: $,
    "data-id": n
  }, m, y, v);
}
function en({ height: n, onRenderRow: t, ...e }) {
  let s = {
    height: n,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Qt
  };
  return t && (s = t(s)), /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ b($t, {
    ...s
  }));
}
function tn({
  className: n,
  style: t,
  top: e,
  rows: s,
  height: i,
  rowHeight: o,
  onRenderRow: r,
  ...a
}) {
  return t = { ...t, top: e, height: i }, /* @__PURE__ */ b("div", {
    className: T("dtable-rows", n),
    style: t
  }, s.map((c) => {
    let f = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: o,
      ...a
    };
    return r && (f = r(f, c)), /* @__PURE__ */ b($t, {
      ...f
    });
  }));
}
const Ce = /* @__PURE__ */ new Map();
function At(n, t = !1) {
  if (!t && Ce.has(n.name))
    throw new Error(`DTable: Plugin with name ${n.name} already exists`);
  Ce.set(n.name, n);
}
function Ae(n, t = !1) {
  At(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...o } = n;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return e.plugin = n, e;
}
function _t(n) {
  return Ce.get(n);
}
function Nt(n) {
  return Ce.delete(n);
}
function nn(n) {
  const t = /* @__PURE__ */ new Map();
  return [n == null ? void 0 : n.plugins].flat().reduce((e, s) => {
    var o;
    if (!s)
      return e;
    let i;
    return typeof s == "string" ? (i = _t(s), i || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? i = s.plugin : typeof s == "object" ? i = s : console.warn("DTable: Invalid plugin", s), i && !t.has(i.name) && ((o = i.plugins) == null || o.forEach((r) => {
      if (t.has(r))
        return;
      const a = _t(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${i == null ? void 0 : i.name}"`);
        return;
      }
      e.push(a), t.set(a.name, a);
    }), e.push(i), t.set(i.name, i)), e;
  }, []);
}
function sn(n, t) {
  return n.reduce((e, s) => {
    const { options: i, defaultOptions: o } = s;
    return o && (e = { ...o, ...e }), i && Object.assign(e, typeof i == "function" ? i(e) : i), e;
  }, t);
}
function De() {
  return {
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 1e3,
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
    scrollbarSize: 10,
    horzScrollbarPos: "outside"
  };
}
var ee, q, C, te, N, ie;
class Ie extends ne {
  constructor(e) {
    super(e);
    k(this, "ref", wt());
    x(this, ee, 0);
    x(this, q, !1);
    x(this, C, void 0);
    x(this, te, void 0);
    x(this, N, []);
    x(this, ie, void 0);
    k(this, "_handleResize", () => {
      d(this, ee) && cancelAnimationFrame(d(this, ee)), R(this, ee, requestAnimationFrame(() => {
        this.forceUpdate(), R(this, ee, 0);
      }));
    });
    k(this, "_handleRenderRow", (e, s) => (d(this, C).onRenderRow && (e = d(this, C).onRenderRow.call(this, e, s)), d(this, N).forEach((i) => {
      i.onRenderRow && (e = i.onRenderRow.call(this, e, s));
    }), e));
    k(this, "_handleRenderHeaderRow", (e) => (d(this, C).onRenderHeaderRow && (e = d(this, C).onRenderHeaderRow.call(this, e)), d(this, N).forEach((s) => {
      s.onRenderHeaderRow && (e = s.onRenderHeaderRow.call(this, e));
    }), e));
    k(this, "_handleRenderCell", (e, s, i, o) => {
      const r = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return i.setting[r] && (e = i.setting[r].call(this, e, s, i, o)), d(this, C)[r] && (e = d(this, C)[r].call(this, e, s, i, o)), d(this, N).forEach((a) => {
        a[r] && (e = a[r].call(this, e, s, i, o));
      }), e;
    });
    k(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    k(this, "_handleClick", (e) => {
      var c, f, l, g, p, u, _, S;
      const s = e.target;
      if (!s)
        return;
      const i = s.closest(".dtable-row");
      if (!i)
        return;
      const o = s.closest(".dtable-cell"), r = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "", a = (f = i.getAttribute("data-id")) != null ? f : "";
      if (a === "HEADER")
        o && ((l = d(this, C).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: o }), d(this, N).forEach((m) => {
          var y;
          (y = m.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: o });
        }));
      else {
        const m = (g = d(this, ie)) == null ? void 0 : g.visibleRows.find((y) => y.id === a);
        if (o) {
          if (((p = d(this, C).onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: m, element: o, rowElement: i })) === !0)
            return;
          for (const y of d(this, N))
            if (((u = y.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: a, rowInfo: m, element: o, rowElement: i })) === !0)
              return;
        }
        if (((_ = d(this, C).onRowClick) == null ? void 0 : _.call(this, e, { rowID: a, rowInfo: m, element: i })) === !0)
          return;
        for (const y of d(this, N))
          if (((S = y.onRowClick) == null ? void 0 : S.call(this, e, { rowID: a, rowInfo: m, element: i })) === !0)
            return;
      }
    });
    k(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: s } = d(this, C);
      if (!s)
        return;
      const i = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!i || s === "header" && !i.closest(".dtable-header"))
        return;
      const o = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: o });
    });
    k(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...De(), ...e };
    R(this, C, Object.freeze(s)), R(this, te, Object.freeze(nn(s))), d(this, te).forEach((i) => {
      var o;
      (o = i.onCreate) == null || o.call(this, i);
    });
  }
  get options() {
    return d(this, C);
  }
  get plugins() {
    return d(this, N);
  }
  get layout() {
    return d(this, ie);
  }
  componentDidMount() {
    var e, s, i;
    d(this, q) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), (s = this.ref.current) == null || s.addEventListener("mouseover", this._handleMouseOver), (i = this.ref.current) == null || i.addEventListener("mouseleave", this._handleMouseLeave), d(this, C).responsive && window.addEventListener("resize", this._handleResize), d(this, N).forEach((o) => {
      var r;
      (r = o.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    d(this, q) && this._afterRender();
  }
  componentWillUnmount() {
    var e, s, i;
    (e = this.ref.current) == null || e.removeEventListener("click", this._handleClick), d(this, C).colHover && ((s = this.ref.current) == null || s.removeEventListener("mouseover", this._handleMouseOver), (i = this.ref.current) == null || i.removeEventListener("mouseleave", this._handleMouseLeave)), window.removeEventListener("resize", this._handleResize), d(this, N).forEach((o) => {
      var r;
      (r = o.onUnmounted) == null || r.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = d(this, C).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = d(this, C).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ze, Qe, et;
    const e = De(), s = sn(d(this, te), { ...e, ...this.props }), i = d(this, te).filter((h) => !h.when || h.when(s));
    R(this, N, Object.freeze(i)), i.forEach((h) => {
      var M;
      const w = (M = h.beforeLayout) == null ? void 0 : M.call(this, s);
      w && Object.assign(s, w);
    }), R(this, C, Object.freeze(s));
    const {
      header: o,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: f = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = s, g = o ? s.headerHeight || a : 0, p = r ? s.footerHeight || a : 0, u = (h, w, M) => (h && (w && (h = Math.max(w, h)), M && (h = Math.min(M, h))), h), _ = [], S = [], m = [];
    let y = 0, v = 0;
    (Ze = s.cols) == null || Ze.forEach((h) => {
      var tt, nt, st;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: w = f, maxWidth: M = l } = h, z = u((tt = h.width) != null ? tt : 0, w, M), F = (nt = h.flex) != null ? nt : 1, ge = F * u(c, w, M), Y = {
        name: h.name,
        type: (st = h.type) != null ? st : "",
        setting: h,
        left: 0,
        flex: F,
        realWidth: z,
        flexWidth: ge,
        visible: !0
      };
      h.fixed === "left" ? (Y.left = y, y += z, _.push(Y)) : h.fixed === "right" ? (Y.left = v, v += z, S.push(Y)) : m.push(Y), i.forEach((it) => {
        var ot, rt, lt;
        const _e = (rt = it.colTypes) == null ? void 0 : rt[(ot = h.type) != null ? ot : ""];
        if (_e) {
          const at = typeof _e == "function" ? _e(h) : _e;
          at && Object.assign(h, at);
        }
        (lt = it.onAddCol) == null || lt.call(this, Y);
      });
    });
    let $ = s.width, W = 0;
    if (typeof $ == "function" && ($ = $()), $ === "auto")
      W = y + v, m.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), W += h.realWidth;
      });
    else if ($ === "100%") {
      const h = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (h)
        W = h.clientWidth;
      else {
        W = 0, R(this, q, !0);
        return;
      }
    } else
      W = $ != null ? $ : 0;
    const { data: P, rowKey: A = "id" } = s, O = [], Ne = (h, w, M) => {
      var F, ge;
      const z = { data: M != null ? M : { [A]: h }, top: 0, id: h, index: O.length };
      if (M || (z.lazy = !0), O.push(z), ((F = s.onAddRow) == null ? void 0 : F.call(this, z, w)) !== !1) {
        for (const Y of i)
          if (((ge = Y.onAddRow) == null ? void 0 : ge.call(this, z, w)) === !1)
            return;
      }
    };
    if (typeof P == "number")
      for (let h = 0; h < P; h++)
        Ne(h, h);
    else
      Array.isArray(P) && P.forEach((h, w) => {
        typeof h == "object" ? Ne(h[A], w, h) : Ne(h, w);
      });
    const U = [];
    let ce = 0;
    O.forEach((h) => {
      var w, M;
      if (((w = s.rowFilter) == null ? void 0 : w.call(this, h)) !== !1) {
        for (const z of i)
          if (((M = z.rowFilter) == null ? void 0 : M.call(this, h)) === !1)
            return;
        h.index = U.length, h.top = ce, U.push(h), ce += a;
      }
    });
    let He = !1;
    s.rowSorter && (U.sort(s.rowSorter.bind(this)), He = !0), i.forEach((h) => {
      h.rowSorter && (U.sort(h.rowSorter.bind(this)), He = !0);
    }), He && U.forEach((h, w) => {
      h.index = w, h.top = w * a, U.push(h);
    });
    let B = s.height, G = 0;
    if (typeof B == "function" && (B = B()), B === "auto")
      G = g + p + ce;
    else if (typeof B == "object")
      G = Math.min(B.max, Math.max(B.min, g + p + ce));
    else if (B === "100%") {
      const h = (et = this.ref.current) == null ? void 0 : et.parentElement;
      if (h)
        G = h.clientHeight;
      else {
        G = 0, R(this, q, !0);
        return;
      }
    } else
      G = B;
    const { scrollTop: pe = 0, scrollLeft: Le = 0, hoverCol: It } = this.state, qe = G - g - p, Ke = pe + qe, Ve = [], Te = W - y - v;
    let X = 0;
    const ze = [];
    let Ge = 0;
    if (m.forEach((h) => {
      h.realWidth ? X += h.realWidth : (ze.push(h), Ge += h.flex);
    }), ze.length) {
      const h = Math.max(0, Te - X);
      ze.forEach((w) => {
        var F;
        const { minWidth: M = f, maxWidth: z = l } = w.setting;
        w.realWidth = Math.min(z, Math.max(M, Math.ceil(h * ((F = w.flex) != null ? F : 1) / Ge))), X += w.realWidth;
      });
    }
    X = 0, m.forEach((h) => {
      h.left += X, X += h.realWidth, (h.left + h.realWidth < Le || h.left > Le + Te) && (h.visible = !1);
    });
    const Xe = Math.floor(pe / a), Je = Math.min(U.length, Math.ceil(Ke / a)), Pt = [];
    for (let h = Xe; h < Je; h++) {
      const w = U[h];
      w.top -= pe, Ve.push(w), w.lazy === !0 && Pt.push(w.id);
    }
    let se = {
      allRows: O,
      width: W,
      height: G,
      rows: U,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: qe,
      rowsHeightTotal: ce,
      hoverCol: It,
      header: o,
      footer: r,
      headerHeight: g,
      footerHeight: p,
      colsInfo: {
        fixedLeftCols: _,
        fixedRightCols: S,
        scrollCols: m,
        flexLeftWidth: y,
        scrollWidth: Te,
        scrollWidthTotal: X,
        flexRightWidth: v
      },
      scrollBottom: Ke,
      scrollTop: pe,
      scrollLeft: Le,
      startRowIndex: Xe,
      endRowIndex: Je
    };
    if (s.onLayout) {
      const h = s.onLayout.call(this, se);
      h && (se = h);
    }
    return i.forEach((h) => {
      if (h.onLayout) {
        const w = h.onLayout.call(this, se);
        w && (se = w);
      }
    }), R(this, ie, Object.freeze(se)), se;
  }
  getColInfo(e) {
    var i, o;
    const { layout: s } = this;
    if (!!s)
      return (o = (i = s.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? i : s.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? o : s.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: s, hoverCol: i, colsInfo: o, headerHeight: r } = e;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ b(en, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: i,
        ...o
      });
    let a, c;
    if (typeof s == "function") {
      const f = s(e, this.state);
      typeof f == "object" && f && "__html" in f ? c = f : a = f;
    } else
      a = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: c
    }, a);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, hoverCol: a, colsInfo: c } = e;
    return /* @__PURE__ */ b(tn, {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      hoverCol: a,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(e) {
    const { footer: s, footerHeight: i } = e;
    if (!s)
      return null;
    let o, r;
    if (typeof s == "function") {
      const a = s(e, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : o = a;
    } else
      o = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: r
    }, o);
  }
  renderScrollBars(e) {
    const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: f, scrollWidth: l } = o, { scrollbarSize: g = 10, horzScrollbarPos: p } = this.props;
    return f > l && s.push(/* @__PURE__ */ b(gt, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: f,
      clientSize: l,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: p === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })), c > a && s.push(/* @__PURE__ */ b(gt, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: g,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    R(this, q, !1), (e = d(this, C).afterRender) == null || e.call(this), d(this, N).forEach((s) => {
      var i;
      return (i = s.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var g, p;
    const e = this.getLayout(), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: c, scrollbarHover: f } = (g = d(this, C)) != null ? g : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ b("div", {
      className: T("dtable", s, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((p = e == null ? void 0 : e.scrollTop) != null ? p : 0) > 0,
        "scrollbar-hover": f
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
ee = new WeakMap(), q = new WeakMap(), C = new WeakMap(), te = new WeakMap(), N = new WeakMap(), ie = new WeakMap(), k(Ie, "addPlugin", At), k(Ie, "removePlugin", Nt);
function on(n, t) {
  var o;
  const e = this.state.checkedRows, s = {}, i = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], s[r] = a);
  };
  return n === "HEADER" ? (t === void 0 && (t = !Ht.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: r }) => {
    i(r, !!t);
  })) : (Array.isArray(n) ? n : [n]).forEach((a) => {
    i(a, t != null ? t : !e[a]);
  }), Object.keys(s).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, s);
  }), s;
}
function rn(n) {
  var t;
  return (t = this.state.checkedRows[n]) != null ? t : !1;
}
function Ht() {
  var n;
  return this.getChecks().length === ((n = this.layout) == null ? void 0 : n.allRows.length);
}
function ln() {
  return Object.keys(this.state.checkedRows);
}
const Lt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = on.bind(this), this.isRowChecked = rn.bind(this), this.isAllRowChecked = Ht.bind(this), this.getChecks = ln.bind(this);
  },
  onRenderCell(n, t, e) {
    if (e.setting.checkbox) {
      const s = this.isRowChecked(t), i = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      n.unshift(i), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderHeaderCell(n, t, e) {
    if (e.setting.checkbox) {
      const s = this.isAllRowChecked(), i = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      n.unshift(i), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow(n, t) {
    return this.isRowChecked(t.id) && (n.className = T(n.className, "is-checked")), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest('input[type="checkbox"]');
    e && this.toggleCheckRows("HEADER", e.checked);
  },
  onRowClick(n, { rowID: t }) {
    const e = n.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"]') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
};
Ae(Lt);
function Pe(n) {
  const t = this.nestedMap.get(n);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, s = t.children && e && e[n];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = Pe.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Pe.call(this, t.parent).level + 1 : 0, t;
}
function an(n, t) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (n === "HEADER")
    if (t === void 0 && (t = !Tt.call(this)), t) {
      const i = this.nestedMap.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (e[o] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((o) => {
      const r = this.nestedMap.get(o);
      t && (r == null ? void 0 : r.children) ? e[o] = !0 : delete e[o];
    });
  }
  this.setState({ collapsedRows: { ...e } }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Tt() {
  const n = this.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function zt(n, t = 0, e) {
  var s;
  e || (e = [...n.keys()]);
  for (const i of e) {
    const o = n.get(i);
    !o || typeof o.order == "number" || (o.order = t++, (s = o.children) != null && s.length && (t = zt(n, t, o.children)));
  }
  return t;
}
const Wt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (n) => !!n.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = an.bind(this), this.isAllCollapsed = Tt.bind(this), this.getNestedRowInfo = Pe.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(n) {
    var s, i, o;
    const t = n.data[(s = this.options.nestedParentKey) != null ? s : "parent"], e = (i = this.nestedMap.get(n.id)) != null ? i : {
      state: "",
      parent: t,
      level: 0
    };
    if (n.data[(o = this.options.asParentKey) != null ? o : "asParent"] && (e.children = []), this.nestedMap.set(n.id, e), t) {
      let r = this.nestedMap.get(t);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(t, r)), r.children || (r.children = []), r.children.push(n.id);
    }
  },
  rowFilter(n) {
    return this.getNestedRowInfo(n.id).state !== "hidden";
  },
  rowSorter(n, t) {
    var o, r;
    const e = this.getNestedRowInfo(n.id), s = this.getNestedRowInfo(t.id);
    typeof e.order != "number" && zt(this.nestedMap);
    const i = ((o = e.order) != null ? o : 0) - ((r = s.order) != null ? r : 0);
    return i === 0 ? n.index - t.index : i;
  },
  onRenderCell(n, t, e, s) {
    var r, a, c;
    const { nestedToggle: i } = e.setting, o = this.getNestedRowInfo(t);
    if (i && (o.children || o.parent) && n.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, o, t, e, s)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), o.level) {
      let { nestedIndent: f = i } = e.setting;
      f && (f === !0 && (f = (c = this.options.nestedIndent) != null ? c : 12), n.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: f * o.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, t, e) {
    var s, i;
    return e.setting.nestedToggle && n.unshift((i = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, t, e, void 0)) != null ? i : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow(n, t) {
    return n.className = T(n.className, `is-nested-${this.getNestedRowInfo(t.id).state}`), n;
  },
  onRenderHeaderRow(n) {
    return n.className = T(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
};
Ae(Wt);
function be(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const s = t[0];
    return Object.keys(s).forEach((i) => {
      var r;
      const o = (r = s[i]) != null ? r : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), n;
  }
  for (let s = 0; s < t.length; s++) {
    const i = (e = t[s]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
  }
  return n;
}
const I = 24 * 60 * 60 * 1e3, H = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), ae = (n, t = new Date()) => (n = H(n), t = H(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate()), Oe = (n, t = new Date()) => H(n).getFullYear() === H(t).getFullYear(), jt = (n, t = new Date()) => (n = H(n), t = H(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), cn = (n, t = new Date()) => {
  n = H(n), t = H(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, hn = (n, t) => ae(H(t), n), dn = (n, t) => ae(H(t).getTime() - I, n), fn = (n, t) => ae(H(t).getTime() + I, n), un = (n, t) => ae(H(t).getTime() - 2 * I, n), Ee = (n, t = "yyyy-MM-dd hh:mm") => {
  n = H(n);
  const e = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((s) => {
    if (new RegExp(`(${s})`).test(t)) {
      const i = `${e[s]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, pn = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Ee(n, Oe(n) ? s.month : s.full);
  if (ae(n, t))
    return i;
  const o = Ee(t, Oe(n, t) ? jt(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, gn = (n) => {
  const t = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return t - I * 7;
    case "oneMonth":
      return t - I * 31;
    case "threeMonth":
      return t - I * 31 * 3;
    case "halfYear":
      return t - I * 183;
    case "oneYear":
      return t - I * 365;
    case "twoYear":
      return t - 2 * (I * 365);
    default:
      return 0;
  }
}, Ue = (n, t, e = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return n *= 365, Ue(n, "day", e, s);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, Ue(n, "day", e, s);
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
  return e ? s + n : s - n;
};
const Dt = {
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
      onRenderCell(n, t, e, s) {
        const { linkTemplate: i = "", linkProps: o } = e.setting, r = be(i, s);
        return n[0] = /* @__PURE__ */ b("a", {
          href: r,
          ...o
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, t, e, s) {
        const { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[r] : ""
        }));
        return i ? n.unshift(a) : n[0] = a, n;
      }
    },
    circleProgress: {
      onRenderCell(n, t, e) {
        const { circleSize: s = 24, circleBorderSize: i = 1, circleBgColor: o = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (s - i) / 2, c = s / 2, f = n[0];
        return n[0] = /* @__PURE__ */ b("svg", {
          width: s,
          height: s
        }, /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: c,
          y: c + i,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), n;
      }
    },
    actionButtons: {
      onRenderCell(n, t, e, s) {
        const i = s == null ? void 0 : s[e.name];
        if (!i)
          return n;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: i.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), be(o, c);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(n, t, e) {
        let { format: s } = e.setting;
        if (!s)
          return n;
        typeof s == "string" && (s = { type: "text", format: s });
        const { format: i, type: o } = s, r = n[0];
        return typeof i == "function" ? n[0] = o === "html" ? { html: i(r) } : i(r) : o === "datetime" ? n[0] = Ee(r, i) : o === "html" ? n[0] = { html: be(i, r) } : n[0] = be(i, r), n;
      }
    }
  }
};
Ae(Dt);
const _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Lt,
  nested: Wt,
  rich: Dt
}, Symbol.toStringTag, { value: "Module" }));
var fe;
class ye {
  constructor(t, e) {
    k(this, "element");
    k(this, "options");
    x(this, fe, wt());
    var s;
    this.element = t, this.options = { ...De(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, fe).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Kt(/* @__PURE__ */ b(Ie, {
      ref: d(this, fe),
      ...this.options
    }), this.element);
  }
}
fe = new WeakMap(), k(ye, "NAME", "zui.dtable"), k(ye, "definePlugin", Ae), k(ye, "removePlugin", Nt), k(ye, "plugins", _n);
let mn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var ue, K, j, oe, re, we;
const Ye = class {
  constructor(t, e = "local") {
    x(this, re);
    x(this, ue, void 0);
    x(this, K, void 0);
    x(this, j, void 0);
    x(this, oe, void 0);
    R(this, ue, e), R(this, K, `ZUI_STORE:${t != null ? t : mn()}`), R(this, j, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, ue);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || R(this, oe, new Ye(d(this, K), "session")), d(this, oe));
  }
  get(t, e) {
    const s = d(this, j).getItem(me(this, re, we).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    d(this, j).setItem(me(this, re, we).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    d(this, j).removeItem(me(this, re, we).call(this, t));
  }
  each(t) {
    for (let e = 0; e < d(this, j).length; e++) {
      const s = d(this, j).key(e);
      if (s != null && s.startsWith(d(this, K))) {
        const i = d(this, j).getItem(s);
        typeof i == "string" && t(s.substring(d(this, K).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((e, s) => {
      t[e] = s;
    }), t;
  }
};
let xe = Ye;
ue = new WeakMap(), K = new WeakMap(), j = new WeakMap(), oe = new WeakMap(), re = new WeakSet(), we = function(t) {
  return `${d(this, K)}:${t}`;
};
const bn = new xe("DEFAULT");
function yn(n, t = "local") {
  return new xe(n, t);
}
Object.assign(bn, { create: yn });
class mt {
  constructor(t, e) {
    k(this, "$modal");
    k(this, "options");
    k(this, "reposTask", null);
    this.$modal = t, this.$modal && (this.options = e, e.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), e.type === "show" && e.position && this.adjustPosition(e.position, null), this.$modal.onclick = (s) => this.onClick(s), window.addEventListener("resize", () => {
      e.type === "show" && e.position && this.adjustPosition(e.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(t) {
    var e, s;
    (((e = t.target.dataset) == null ? void 0 : e.dismiss) === "modal" || ((s = t.target.parentElement.dataset) == null ? void 0 : s.dismiss) === "modal") && (this.onHide(this.$modal), t.stopPropagation());
  }
  lockScroll() {
    let t = 17;
    typeof window.innerWidth == "number" && (t = window.innerWidth - document.body.clientWidth), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
  }
  unlockScroll() {
    document.body.style.overflow = "", document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
  }
  onShow(t) {
    this.lockScroll(), t.classList.add("block");
  }
  onHide(t) {
    t && t.classList && (this.unlockScroll(), t.classList.remove("block"));
  }
  onClear(t) {
    document.querySelectorAll(".modal").forEach((s) => {
      (s.dataset.modalClosable !== "false" || t === "destory") && s.classList.remove("block");
    });
  }
  adjustPosition(t, e) {
    var a;
    if (clearTimeout(this.reposTask), e) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, t, 0), e);
      return;
    }
    if (t === void 0 && (t = this.options.position), t == null)
      return;
    const s = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!s)
      return;
    const i = window.innerHeight, o = Math.max(0, (i - s.clientHeight) / 2);
    let r = null;
    if (t === "fit" ? r = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : t === "center" ? r = `${o}px` : this.isPlainObject(t) || (r = t), s.setAttribute("style", `top: ${r}`), s.className.includes("-fullscreen")) {
      let c = null;
      if (((a = s.childNodes) == null ? void 0 : a.length) && s.childNodes.length === 1 ? c = s.childNodes[0] : c = s.childNodes[1], c) {
        const f = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, l = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], g = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, p = i - f - g, u = l && l.scrollHeight > p ? "auto" : "visible";
        l && l.setAttribute("style", `max-height:${p}px;overflow:${u}`);
      }
    }
  }
  isPlainObject(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
}
document.addEventListener("click", (n) => {
  var t, e, s;
  if (n !== null && n.target instanceof HTMLElement)
    if (((t = n.target.dataset) == null ? void 0 : t.toggle) === "modal") {
      let i = n.target.dataset.target;
      if (n.target.localName === "a") {
        const a = ((e = n.target) == null ? void 0 : e.href) || "";
        i = a && a.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), r = {
        type: "show",
        position: ((s = n.target.dataset) == null ? void 0 : s.position) || "fit"
      };
      new mt(o, r);
    } else
      n.target.parentElement.className.includes("modal") || new mt(n, { type: "hide" }).onClear();
});
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: I,
  createDate: H,
  isSameDay: ae,
  isSameYear: Oe,
  isSameMonth: jt,
  isSameWeek: cn,
  isToday: hn,
  isYesterday: dn,
  isTomorrow: fn,
  isDBY: un,
  formatDate: Ee,
  formatDateSpan: pn,
  getTimeBeforeDesc: gn,
  calculateTimestamp: Ue
}, Symbol.toStringTag, { value: "Module" }));
var D, L;
class vn {
  constructor(t) {
    x(this, D, void 0);
    x(this, L, void 0);
    R(this, D, t), R(this, L, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, D).parentElement.parentElement, d(this, D).parentElement), this.addActive(d(this, L).parentElement, d(this, L)), d(this, L).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, L, d(this, D)), this.addActive(d(this, L).parentElement, d(this, L)), R(this, D, document.querySelector(`[href='#${d(this, L).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, L).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, L).getAttribute("id")}']`)), this.addActive(d(this, D).parentElement.parentElement, d(this, D).parentElement);
  }
  addActive(t, e) {
    const s = t.children;
    Array.from(s).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && this.transition(e).then(function(o) {
      e.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(e, s) {
      setTimeout(() => {
        t.classList.add("in"), e();
      }, 100);
    });
  }
}
D = new WeakMap(), L = new WeakMap();
document.addEventListener("click", function(n) {
  n !== null && n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new vn(n.target).showTarget());
});
export {
  kn as Avatar,
  ye as DTable,
  vn as NavTabs,
  gt as Scrollbar,
  Sn as browser,
  _n as dtablePlugins,
  Rn as helpers,
  bn as store
};
