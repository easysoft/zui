var Ot = Object.defineProperty;
var Ut = (s, t, e) => t in s ? Ot(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var k = (s, t, e) => (Ut(s, typeof t != "symbol" ? t + "" : t, e), e), We = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var u = (s, t, e) => (We(s, t, "read from private field"), e ? e.call(s) : t.get(s)), x = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, R = (s, t, e, n) => (We(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var be = (s, t, e) => (We(s, t, "access private method"), e);
var $e, E, bt, he, ct, Se = {}, yt = [], Bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function q(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function vt(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function b(s, t, e) {
  var n, o, i, r = {};
  for (i in t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : r[i] = t[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? $e.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (i in s.defaultProps)
      r[i] === void 0 && (r[i] = s.defaultProps[i]);
  return we(s, r, n, o, null);
}
function we(s, t, e, n, o) {
  var i = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++bt : o };
  return o == null && E.vnode != null && E.vnode(i), i;
}
function wt() {
  return { current: null };
}
function Ne(s) {
  return s.children;
}
function ee(s, t) {
  this.props = s, this.context = t;
}
function le(s, t) {
  if (t == null)
    return s.__ ? le(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? le(s) : null;
}
function kt(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return kt(s);
  }
}
function ht(s) {
  (!s.__d && (s.__d = !0) && he.push(s) && !Re.__r++ || ct !== E.debounceRendering) && ((ct = E.debounceRendering) || setTimeout)(Re);
}
function Re() {
  for (var s; Re.__r = he.length; )
    s = he.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), he = [], s.some(function(t) {
      var e, n, o, i, r, a;
      t.__d && (r = (i = (e = t).__v).__e, (a = e.__P) && (n = [], (o = q({}, i)).__v = i.__v + 1, Be(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, n, r == null ? le(i) : r, i.__h), Et(n, i), i.__e != r && kt(i)));
    });
}
function St(s, t, e, n, o, i, r, a, c, d) {
  var l, g, p, f, _, S, m, y = n && n.__k || yt, w = y.length;
  for (e.__k = [], l = 0; l < t.length; l++)
    if ((f = e.__k[l] = (f = t[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? we(null, f, null, null, f) : Array.isArray(f) ? we(Ne, { children: f }, null, null, null) : f.__b > 0 ? we(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = e, f.__b = e.__b + 1, (p = y[l]) === null || p && f.key == p.key && f.type === p.type)
        y[l] = void 0;
      else
        for (g = 0; g < w; g++) {
          if ((p = y[g]) && f.key == p.key && f.type === p.type) {
            y[g] = void 0;
            break;
          }
          p = null;
        }
      Be(s, f, p = p || Se, o, i, r, a, c, d), _ = f.__e, (g = f.ref) && p.ref != g && (m || (m = []), p.ref && m.push(p.ref, null, f), m.push(g, f.__c || _, f)), _ != null ? (S == null && (S = _), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = Rt(f, c, s) : c = Ct(s, f, p, y, _, c), typeof e.type == "function" && (e.__d = c)) : c && p.__e == c && c.parentNode != s && (c = le(p));
    }
  for (e.__e = S, l = w; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = le(n, l + 1)), xt(y[l], y[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      Mt(m[l], m[++l], m[++l]);
}
function Rt(s, t, e) {
  for (var n, o = s.__k, i = 0; o && i < o.length; i++)
    (n = o[i]) && (n.__ = s, t = typeof n.type == "function" ? Rt(n, t, e) : Ct(e, n, n, o, n.__e, t));
  return t;
}
function Ct(s, t, e, n, o, i) {
  var r, a, c;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== s)
        s.appendChild(o), r = null;
      else {
        for (a = i, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
          if (a == o)
            break e;
        s.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Ft(s, t, e, n, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in t || Ce(s, i, null, e[i], n);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === t[i] || Ce(s, i, t[i], e[i], n);
}
function dt(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || Bt.test(t) ? e : e + "px";
}
function Ce(s, t, e, n, o) {
  var i;
  e:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || dt(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || dt(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + i] = e, e ? n || s.addEventListener(t, i ? ut : ft, i) : s.removeEventListener(t, i ? ut : ft, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in s)
        try {
          s[t] = e == null ? "" : e;
          break e;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? s.setAttribute(t, e) : s.removeAttribute(t));
    }
}
function ft(s) {
  this.l[s.type + !1](E.event ? E.event(s) : s);
}
function ut(s) {
  this.l[s.type + !0](E.event ? E.event(s) : s);
}
function Be(s, t, e, n, o, i, r, a, c) {
  var d, l, g, p, f, _, S, m, y, w, $, W, T, N = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = t.__e = e.__e, t.__h = null, i = [a]), (d = E.__b) && d(t);
  try {
    e:
      if (typeof N == "function") {
        if (m = t.props, y = (d = N.contextType) && n[d.__c], w = d ? y ? y.props.value : d.__ : n, e.__c ? S = (l = t.__c = e.__c).__ = l.__E : ("prototype" in N && N.prototype.render ? t.__c = l = new N(m, w) : (t.__c = l = new ee(m, w), l.constructor = N, l.render = qt), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = w, l.__n = n, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), N.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = q({}, l.__s)), q(l.__s, N.getDerivedStateFromProps(m, l.__s))), p = l.props, f = l.state, g)
          N.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && m !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, w), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, w) === !1 || t.__v === e.__v) {
            l.props = m, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, w), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, f, _);
          });
        }
        if (l.context = w, l.props = m, l.__v = t, l.__P = s, $ = E.__r, W = 0, "prototype" in N && N.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(t), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++W < 25);
        l.state = l.__s, l.getChildContext != null && (n = q(q({}, n), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(p, f)), T = d != null && d.type === Ne && d.key == null ? d.props.children : d, St(s, Array.isArray(T) ? T : [T], t, e, n, o, i, r, a, c), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), S && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Yt(e.__e, t, e, n, o, i, r, c);
    (d = E.diffed) && d(t);
  } catch (I) {
    t.__v = null, (c || i != null) && (t.__e = a, t.__h = !!c, i[i.indexOf(a)] = null), E.__e(I, t, e);
  }
}
function Et(s, t) {
  E.__c && E.__c(t, s), s.some(function(e) {
    try {
      s = e.__h, e.__h = [], s.some(function(n) {
        n.call(e);
      });
    } catch (n) {
      E.__e(n, e.__v);
    }
  });
}
function Yt(s, t, e, n, o, i, r, a) {
  var c, d, l, g = e.props, p = t.props, f = t.type, _ = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((c = i[_]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        s = c, i[_] = null;
        break;
      }
  }
  if (s == null) {
    if (f === null)
      return document.createTextNode(p);
    s = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), i = null, a = !1;
  }
  if (f === null)
    g === p || a && s.data === p || (s.data = p);
  else {
    if (i = i && $e.call(s.childNodes), d = (g = e.props || Se).dangerouslySetInnerHTML, l = p.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (g = {}, _ = 0; _ < s.attributes.length; _++)
          g[s.attributes[_].name] = s.attributes[_].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === s.innerHTML) || (s.innerHTML = l && l.__html || ""));
    }
    if (Ft(s, p, g, o, a), l)
      t.__k = [];
    else if (_ = t.props.children, St(s, Array.isArray(_) ? _ : [_], t, e, n, o && f !== "foreignObject", i, r, i ? i[0] : e.__k && le(e, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && vt(i[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || f === "progress" && !_ || f === "option" && _ !== g.value) && Ce(s, "value", _, g.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && Ce(s, "checked", _, g.checked, !1));
  }
  return s;
}
function Mt(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    E.__e(n, e);
  }
}
function xt(s, t, e) {
  var n, o;
  if (E.unmount && E.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Mt(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        E.__e(i, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (o = 0; o < n.length; o++)
      n[o] && xt(n[o], t, typeof s.type != "function");
  e || s.__e == null || vt(s.__e), s.__e = s.__d = void 0;
}
function qt(s, t, e) {
  return this.constructor(s, e);
}
function Kt(s, t, e) {
  var n, o, i;
  E.__ && E.__(s, t), o = (n = typeof e == "function") ? null : e && e.__k || t.__k, i = [], Be(t, s = (!n && e || t).__k = b(Ne, null, [s]), o || Se, Se, t.ownerSVGElement !== void 0, !n && e ? [e] : o ? null : t.firstChild ? $e.call(t.childNodes) : null, i, !n && e ? e : o ? o.__e : t.firstChild, n), Et(i, s);
}
$e = yt.slice, E = { __e: function(s, t, e, n) {
  for (var o, i, r; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(s)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(s, n || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        s = a;
      }
  throw s;
} }, bt = 0, ee.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), typeof s == "function" && (s = s(q({}, e), this.props)), s && q(e, s), s != null && this.__v && (t && this.__h.push(t), ht(this));
}, ee.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ht(this));
}, ee.prototype.render = Ne, he = [], Re.__r = 0;
const L = (...s) => s.map((t) => Array.isArray(t) ? L(...t) : typeof t == "function" ? L(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const n = t[e];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class ws extends ee {
  render() {
    const { size: t, rounded: e, className: n, style: o, src: i, text: r, children: a, ...c } = this.props, d = [n], l = { ...o };
    let g = null;
    return i ? g = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : g = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && d.push(`avatar-${t}`), typeof e == "string" && d.push(`rounded-${e}`), /* @__PURE__ */ b("div", {
      className: L(d),
      style: l,
      ...c
    }, g, a);
  }
}
function Vt(s) {
  const t = typeof s == "string" ? document.querySelector(s) : s;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const n = document.createRange();
      return n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n), !0;
    }
  }
  return !1;
}
function Gt(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
function Xt(s, t) {
  const e = typeof s == "string" ? document.querySelector(s) : s;
  if (!e)
    return !1;
  const n = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return n.left >= 0 && n.top >= 0 && n.left + n.width <= i && n.top + n.height <= o;
  const r = n.top <= o && n.top + n.height >= 0, a = n.left <= i && n.left + n.width >= 0;
  return r && a;
}
const ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Vt,
  domReady: Gt,
  isElementVisible: Xt,
  classes: L
}, Symbol.toStringTag, { value: "Module" }));
const Jt = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: o, value: i } = n;
    t[o] = i;
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
      for (const n in e)
        ["type", "size", "rounded", "outline"].includes(n) && this.addClass(this.$button, `-${e[n]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, n) {
    e && e.classList.add(n);
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
  attributeChangedCallback(e, n) {
    e === "isDisabled" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && n && this.addClass(this.$icon, `-${n}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Zt);
var G, de;
class pt {
  constructor(t) {
    x(this, G, void 0);
    x(this, de, void 0);
    var e;
    R(this, G, t), R(this, de, t.nextElementSibling), ((e = u(this, G).dataset) == null ? void 0 : e.toggle) === "dropdown" && !u(this, G).parentElement.className.includes("dropdown-hover") && this.toggle(u(this, G).parentElement, u(this, de));
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
G = new WeakMap(), de = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new pt(s.target) : new pt(s).clearMenu());
});
var X, J;
class gt extends ee {
  constructor(e) {
    var n;
    super(e);
    x(this, X, 0);
    x(this, J, null);
    k(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: n } = this.props, o = e.target;
      !o || !n || (typeof n == "string" && o.closest(n) || typeof n == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1)) && e.preventDefault();
    });
    k(this, "_handleMouseMove", (e) => {
      const { dragStart: n } = this.state;
      n && (u(this, X) && cancelAnimationFrame(u(this, X)), R(this, X, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - n.x : e.clientY - n.y;
        this.scroll(n.offset + o * this.props.scrollSize / this.props.clientSize), R(this, X, 0);
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
      const n = e.currentTarget;
      if (!n)
        return;
      const o = n.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: a } = this.props, c = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(c * a / r);
    });
    this.state = {
      scrollPos: (n = this.props.defaultScrollPos) != null ? n : 0,
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
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: o = 10 } = this.props;
    return Math.max(Math.round(e * e / n), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (R(this, J, typeof e == "string" ? document : e.current), u(this, J).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), u(this, J) && u(this, J).removeEventListener("wheel", this._handleWheel);
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
    var o;
    const { onScroll: n } = this.props;
    n && n(e, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      scrollSize: e,
      clientSize: n,
      type: o,
      size: i = 10,
      className: r,
      style: a,
      left: c,
      top: d,
      bottom: l,
      right: g
    } = this.props, { maxScrollPos: p, scrollPos: f } = this, { dragStart: _ } = this.state, S = {
      left: c,
      top: d,
      bottom: l,
      right: g,
      ...a
    }, m = {};
    return o === "horz" ? (S.height = i, S.width = n, m.width = Math.max(Math.round(n * n / e), i), m.left = Math.round(f * (n - m.width) / p)) : (S.width = i, S.height = n, m.height = this.barSize, m.top = Math.round(f * (n - m.height) / p)), /* @__PURE__ */ b("div", {
      className: L("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
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
X = new WeakMap(), J = new WeakMap();
function Fe({ col: s, className: t, height: e, rowID: n, hoverCol: o, rowData: i, onRenderCell: r, style: a, children: c, ...d }) {
  const { cellStyle: l, align: g, className: p } = s.setting, f = {
    left: s.left,
    width: s.realWidth,
    height: e,
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...a,
    ...l
  };
  let _ = [
    c != null ? c : i == null ? void 0 : i[s.name]
  ];
  r && (_ = r(_, n, s, i));
  const S = [], m = [];
  _ == null || _.forEach((w) => {
    typeof w == "object" && w && ("html" in w || "className" in w || "style" in w) ? (w.html && m.push(/* @__PURE__ */ b("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: w.html }
    })), w.style && Object.assign(f, w.style), w.className && S.push(w.className)) : m.push(w);
  });
  const y = L("dtable-cell", t, {
    "dtable-col-hover": o
  }, p, S);
  return /* @__PURE__ */ b("div", {
    className: y,
    style: f,
    "data-col": s.name,
    ...d
  }, m);
}
function Qt({ col: s, children: t, style: e, ...n }) {
  let { sortType: o } = s.setting;
  return o === !0 && (o = "none"), /* @__PURE__ */ b(Fe, {
    col: s,
    style: { ...e, ...s.setting.style },
    "data-sort": o || null,
    "data-type": s.type,
    ...n
  }, s.setting.title, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o}`
  }), t);
}
function je({ rowID: s, className: t, top: e = 0, left: n = 0, width: o, height: i, cols: r, data: a, hoverCol: c, CellComponent: d = Fe, onRenderCell: l }) {
  return /* @__PURE__ */ b("div", {
    className: L("dtable-cells", t),
    style: { top: e, left: n, width: o, height: i }
  }, r.map((g) => g.visible ? /* @__PURE__ */ b(d, {
    key: g.name,
    col: g,
    hoverCol: c === g.name && g.setting.colHover !== !1,
    rowData: a,
    rowID: s,
    onRenderCell: l
  }) : null));
}
function $t({
  rowID: s,
  className: t,
  top: e,
  height: n,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: d,
  flexRightWidth: l,
  scrollLeft: g,
  CellComponent: p = Fe,
  onRenderCell: f,
  hoverCol: _,
  data: S
}) {
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: s,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: f,
    data: S
  }));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ b(je, {
    className: "dtable-flexable",
    cols: r,
    left: a - g,
    width: d,
    rowID: s,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: f,
    data: S
  }));
  let w = null;
  i != null && i.length && (w = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: s,
    hoverCol: _,
    CellComponent: p,
    onRenderCell: f,
    data: S
  }));
  const $ = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ b("div", {
    className: L("dtable-row", t),
    style: $,
    "data-id": s
  }, m, y, w);
}
function es({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Qt
  };
  return t && (n = t(n)), /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ b($t, {
    ...n
  }));
}
function ts({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return t = { ...t, top: e, height: o }, /* @__PURE__ */ b("div", {
    className: L("dtable-rows", s),
    style: t
  }, n.map((c) => {
    let d = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    };
    return r && (d = r(d, c)), /* @__PURE__ */ b($t, {
      ...d
    });
  }));
}
const Ee = /* @__PURE__ */ new Map();
function Nt(s, t = !1) {
  if (!t && Ee.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  Ee.set(s.name, s);
}
function Ae(s, t = !1) {
  Nt(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: o, ...i } = s;
    return {
      ...i,
      defaultOptions: { ...o, ...n }
    };
  };
  return e.plugin = s, e;
}
function _t(s) {
  return Ee.get(s);
}
function At(s) {
  return Ee.delete(s);
}
function ss(s) {
  const t = /* @__PURE__ */ new Map();
  return [s == null ? void 0 : s.plugins].flat().reduce((n, o) => {
    if (!o)
      return n;
    let i;
    if (typeof o == "string" ? (i = _t(o), i || console.warn(`DTable: Cannot found plugin "${o}"`)) : typeof o == "function" ? i = o.plugin : typeof o == "object" ? i = o : console.warn("DTable: Invalid plugin", o), i && !t.has(i.name)) {
      let r = i.plugins;
      r != null && r.length && (typeof r == "string" && (r = [r]), r.forEach((a) => {
        if (t.has(a))
          return;
        const c = _t(a);
        if (!c) {
          console.warn(`DTable: Cannot found dependency plugin "${a}" for plugin "${i == null ? void 0 : i.name}"`);
          return;
        }
        n.push(c), t.set(c.name, c);
      })), n.push(i), t.set(i.name, i);
    }
    return n;
  }, []);
}
function ns(s, t) {
  return s.reduce((e, n) => {
    const { options: o, defaultOptions: i } = n;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
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
var Z, F, C, Q, A, se;
class Ie extends ee {
  constructor(e) {
    super(e);
    k(this, "ref", wt());
    x(this, Z, 0);
    x(this, F, !1);
    x(this, C, void 0);
    x(this, Q, void 0);
    x(this, A, []);
    x(this, se, void 0);
    k(this, "_handleResize", () => {
      u(this, Z) && cancelAnimationFrame(u(this, Z)), R(this, Z, requestAnimationFrame(() => {
        this.forceUpdate(), R(this, Z, 0);
      }));
    });
    k(this, "_handleRenderRow", (e, n) => (u(this, C).onRenderRow && (e = u(this, C).onRenderRow.call(this, e, n)), u(this, A).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, n));
    }), e));
    k(this, "_handleRenderHeaderRow", (e) => (u(this, C).onRenderHeaderRow && (e = u(this, C).onRenderHeaderRow.call(this, e)), u(this, A).forEach((n) => {
      n.onRenderHeaderRow && (e = n.onRenderHeaderRow.call(this, e));
    }), e));
    k(this, "_handleRenderCell", (e, n, o, i) => {
      const r = n === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[r] && (e = o.setting[r].call(this, e, n, o, i)), u(this, C)[r] && (e = u(this, C)[r].call(this, e, n, o, i)), u(this, A).forEach((a) => {
        a[r] && (e = a[r].call(this, e, n, o, i));
      }), e;
    });
    k(this, "_handleScroll", (e, n) => {
      n === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    k(this, "_handleClick", (e) => {
      var c, d, l, g, p, f, _, S;
      const n = e.target;
      if (!n)
        return;
      const o = n.closest(".dtable-row");
      if (!o)
        return;
      const i = n.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (d = o.getAttribute("data-id")) != null ? d : "";
      if (a === "HEADER")
        i && ((l = u(this, C).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), u(this, A).forEach((m) => {
          var y;
          (y = m.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: i });
        }));
      else {
        const m = (g = u(this, se)) == null ? void 0 : g.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((p = u(this, C).onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: m, element: i, rowElement: o })) === !0)
            return;
          for (const y of u(this, A))
            if (((f = y.onCellClick) == null ? void 0 : f.call(this, e, { colName: r, rowID: a, rowInfo: m, element: i, rowElement: o })) === !0)
              return;
        }
        if (((_ = u(this, C).onRowClick) == null ? void 0 : _.call(this, e, { rowID: a, rowInfo: m, element: o })) === !0)
          return;
        for (const y of u(this, A))
          if (((S = y.onRowClick) == null ? void 0 : S.call(this, e, { rowID: a, rowInfo: m, element: o })) === !0)
            return;
      }
    });
    k(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: n } = u(this, C);
      if (!n)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || n === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: i });
    });
    k(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const n = { ...De(), ...e };
    R(this, C, Object.freeze(n)), R(this, Q, Object.freeze(ss(n))), u(this, Q).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return u(this, C);
  }
  get plugins() {
    return u(this, A);
  }
  get layout() {
    return u(this, se);
  }
  componentDidMount() {
    var e, n, o;
    u(this, F) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), (n = this.ref.current) == null || n.addEventListener("mouseover", this._handleMouseOver), (o = this.ref.current) == null || o.addEventListener("mouseleave", this._handleMouseLeave), u(this, C).responsive && window.addEventListener("resize", this._handleResize), u(this, A).forEach((i) => {
      var r;
      (r = i.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    u(this, F) && this._afterRender();
  }
  componentWillUnmount() {
    var e, n, o;
    (e = this.ref.current) == null || e.removeEventListener("click", this._handleClick), u(this, C).colHover && ((n = this.ref.current) == null || n.removeEventListener("mouseover", this._handleMouseOver), (o = this.ref.current) == null || o.removeEventListener("mouseleave", this._handleMouseLeave)), window.removeEventListener("resize", this._handleResize), u(this, A).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var n;
      (n = u(this, C).onScroll) == null || n.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var n;
      (n = u(this, C).onScroll) == null || n.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ze, Qe, et;
    const e = De(), n = ns(u(this, Q), { ...e, ...this.props }), o = u(this, Q).filter((h) => !h.when || h.when(n));
    R(this, A, Object.freeze(o)), o.forEach((h) => {
      var M;
      const v = (M = h.beforeLayout) == null ? void 0 : M.call(this, n);
      v && Object.assign(n, v);
    }), R(this, C, Object.freeze(n));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: d = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = n, g = i ? n.headerHeight || a : 0, p = r ? n.footerHeight || a : 0, f = (h, v, M) => (h && (v && (h = Math.max(v, h)), M && (h = Math.min(M, h))), h), _ = [], S = [], m = [];
    let y = 0, w = 0;
    (Ze = n.cols) == null || Ze.forEach((h) => {
      var tt, st, nt;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: v = d, maxWidth: M = l } = h, z = f((tt = h.width) != null ? tt : 0, v, M), U = (st = h.flex) != null ? st : 1, _e = U * f(c, v, M), B = {
        name: h.name,
        type: (nt = h.type) != null ? nt : "",
        setting: h,
        left: 0,
        flex: U,
        realWidth: z,
        flexWidth: _e,
        visible: !0
      };
      h.fixed === "left" ? (B.left = y, y += z, _.push(B)) : h.fixed === "right" ? (B.left = w, w += z, S.push(B)) : m.push(B), o.forEach((ot) => {
        var it, rt, lt;
        const me = (rt = ot.colTypes) == null ? void 0 : rt[(it = h.type) != null ? it : ""];
        if (me) {
          const at = typeof me == "function" ? me(h) : me;
          at && Object.assign(h, at);
        }
        (lt = ot.onAddCol) == null || lt.call(this, B);
      });
    });
    let $ = n.width, W = 0;
    if (typeof $ == "function" && ($ = $()), $ === "auto")
      W = y + w, m.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), W += h.realWidth;
      });
    else if ($ === "100%") {
      const h = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (h)
        W = h.clientWidth;
      else {
        W = 0, R(this, F, !0);
        return;
      }
    } else
      W = $ != null ? $ : 0;
    const { data: T, rowKey: N = "id" } = n, I = [], pe = (h, v, M) => {
      var U, _e;
      const z = { data: M != null ? M : { [N]: h }, top: 0, id: h, index: I.length };
      if (M || (z.lazy = !0), I.push(z), ((U = n.onAddRow) == null ? void 0 : U.call(this, z, v)) !== !1) {
        for (const B of o)
          if (((_e = B.onAddRow) == null ? void 0 : _e.call(this, z, v)) === !1)
            return;
      }
    };
    if (typeof T == "number")
      for (let h = 0; h < T; h++)
        pe(h, h);
    else
      Array.isArray(T) ? T.forEach((h, v) => {
        typeof h == "object" ? pe(h[N], v, h) : pe(h, v);
      }) : typeof T == "object" && T && Object.entries(T).forEach(([h, v], M) => pe(h, M, v));
    const P = [];
    let ce = 0;
    I.forEach((h) => {
      var v, M;
      if (((v = n.rowFilter) == null ? void 0 : v.call(this, h)) !== !1) {
        for (const z of o)
          if (((M = z.rowFilter) == null ? void 0 : M.call(this, h)) === !1)
            return;
        h.index = P.length, h.top = ce, P.push(h), ce += a;
      }
    });
    let He = !1;
    n.rowSorter && (P.sort(n.rowSorter.bind(this)), He = !0), o.forEach((h) => {
      h.rowSorter && (P.sort(h.rowSorter.bind(this)), He = !0);
    }), He && P.forEach((h, v) => {
      h.index = v, h.top = v * a, P.push(h);
    });
    let O = n.height, K = 0;
    if (typeof O == "function" && (O = O()), O === "auto")
      K = g + p + ce;
    else if (typeof O == "object")
      K = Math.min(O.max, Math.max(O.min, g + p + ce));
    else if (O === "100%") {
      const h = (et = this.ref.current) == null ? void 0 : et.parentElement;
      if (h)
        K = h.clientHeight;
      else {
        K = 0, R(this, F, !0);
        return;
      }
    } else
      K = O;
    const { scrollTop: ge = 0, scrollLeft: Le = 0, hoverCol: It } = this.state, qe = K - g - p, Ke = ge + qe, Ve = [], Te = W - y - w;
    let V = 0;
    const ze = [];
    let Ge = 0;
    if (m.forEach((h) => {
      h.realWidth ? V += h.realWidth : (ze.push(h), Ge += h.flex);
    }), ze.length) {
      const h = Math.max(0, Te - V);
      ze.forEach((v) => {
        var U;
        const { minWidth: M = d, maxWidth: z = l } = v.setting;
        v.realWidth = Math.min(z, Math.max(M, Math.ceil(h * ((U = v.flex) != null ? U : 1) / Ge))), V += v.realWidth;
      });
    }
    V = 0, m.forEach((h) => {
      h.left += V, V += h.realWidth, (h.left + h.realWidth < Le || h.left > Le + Te) && (h.visible = !1);
    });
    const Xe = Math.floor(ge / a), Je = Math.min(P.length, Math.ceil(Ke / a)), Pt = [];
    for (let h = Xe; h < Je; h++) {
      const v = P[h];
      v.top -= ge, Ve.push(v), v.lazy === !0 && Pt.push(v.id);
    }
    let te = {
      allRows: I,
      width: W,
      height: K,
      rows: P,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: qe,
      rowsHeightTotal: ce,
      hoverCol: It,
      header: i,
      footer: r,
      headerHeight: g,
      footerHeight: p,
      colsInfo: {
        fixedLeftCols: _,
        fixedRightCols: S,
        scrollCols: m,
        flexLeftWidth: y,
        scrollWidth: Te,
        scrollWidthTotal: V,
        flexRightWidth: w
      },
      scrollBottom: Ke,
      scrollTop: ge,
      scrollLeft: Le,
      startRowIndex: Xe,
      endRowIndex: Je
    };
    if (n.onLayout) {
      const h = n.onLayout.call(this, te);
      h && (te = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const v = h.onLayout.call(this, te);
        v && (te = v);
      }
    }), R(this, se, Object.freeze(te)), te;
  }
  getColInfo(e) {
    var o, i;
    const { layout: n } = this;
    if (!!n)
      return (i = (o = n.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? o : n.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? i : n.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: n, hoverCol: o, colsInfo: i, headerHeight: r } = e;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ b(es, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: o,
        ...i
      });
    let a, c;
    if (typeof n == "function") {
      const d = n(e, this.state);
      typeof d == "object" && d && "__html" in d ? c = d : a = d;
    } else
      a = n;
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: c
    }, a);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: o, visibleRows: i, rowHeight: r, hoverCol: a, colsInfo: c } = e;
    return /* @__PURE__ */ b(ts, {
      top: n,
      height: o,
      rows: i,
      rowHeight: r,
      hoverCol: a,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(e) {
    const { footer: n, footerHeight: o } = e;
    if (!n)
      return null;
    let i, r;
    if (typeof n == "function") {
      const a = n(e, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : i = a;
    } else
      i = n;
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: d, scrollWidth: l } = i, { scrollbarSize: g = 10, horzScrollbarPos: p } = this.props;
    return d > l && n.push(/* @__PURE__ */ b(gt, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: d,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: p === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })), c > a && n.push(/* @__PURE__ */ b(gt, {
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
    })), n.length ? n : null;
  }
  _afterRender() {
    var e;
    R(this, F, !1), (e = u(this, C).afterRender) == null || e.call(this), u(this, A).forEach((n) => {
      var o;
      return (o = n.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var g, p;
    const e = this.getLayout(), { className: n, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: d } = (g = u(this, C)) != null ? g : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ b("div", {
      className: L("dtable", n, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((p = e == null ? void 0 : e.scrollTop) != null ? p : 0) > 0,
        "scrollbar-hover": d
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
Z = new WeakMap(), F = new WeakMap(), C = new WeakMap(), Q = new WeakMap(), A = new WeakMap(), se = new WeakMap(), k(Ie, "addPlugin", Nt), k(Ie, "removePlugin", At);
function os(s, t) {
  var i;
  const e = this.state.checkedRows, n = {}, o = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], n[r] = a);
  };
  return s === "HEADER" ? (t === void 0 && (t = !Ht.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!t);
  })) : (Array.isArray(s) ? s : [s]).forEach((a) => {
    o(a, t != null ? t : !e[a]);
  }), Object.keys(n).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, n);
  }), n;
}
function is(s) {
  var t;
  return (t = this.state.checkedRows[s]) != null ? t : !1;
}
function Ht() {
  var s;
  return this.getChecks().length === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function rs() {
  return Object.keys(this.state.checkedRows);
}
const Lt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (s) => !!s.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = os.bind(this), this.isRowChecked = is.bind(this), this.isAllRowChecked = Ht.bind(this), this.getChecks = rs.bind(this);
  },
  onRenderCell(s, t, e) {
    if (e.setting.checkbox) {
      const n = this.isRowChecked(t), o = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: n
      });
      s.unshift(o), s.push({ className: "has-checkbox" });
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    if (e.setting.checkbox) {
      const n = this.isAllRowChecked(), o = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: n
      });
      s.unshift(o), s.push({ className: "has-checkbox" });
    }
    return s;
  },
  onRenderRow(s, t) {
    return this.isRowChecked(t.id) && (s.className = L(s.className, "is-checked")), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!t)
      return;
    const e = t.closest('input[type="checkbox"]');
    e && this.toggleCheckRows("HEADER", e.checked);
  },
  onRowClick(s, { rowID: t }) {
    const e = s.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"]') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
};
Ae(Lt);
function Pe(s) {
  const t = this.nestedMap.get(s);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let o = !1, { parent: i } = t;
  for (; i; ) {
    const r = Pe.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = o ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Pe.call(this, t.parent).level + 1 : 0, t;
}
function ls(s, t) {
  var n;
  let e = (n = this.state.collapsedRows) != null ? n : {};
  if (s === "HEADER")
    if (t === void 0 && (t = !Tt.call(this)), t) {
      const o = this.nestedMap.entries();
      for (const [i, r] of o)
        r.state === "expanded" && (e[i] = !0);
    } else
      e = {};
  else {
    const o = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[o[0]]), o.forEach((i) => {
      const r = this.nestedMap.get(i);
      t && (r == null ? void 0 : r.children) ? e[i] = !0 : delete e[i];
    });
  }
  this.setState({ collapsedRows: { ...e } }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function Tt() {
  const s = this.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function zt(s, t = 0, e) {
  var n;
  e || (e = [...s.keys()]);
  for (const o of e) {
    const i = s.get(o);
    !i || typeof i.order == "number" || (i.order = t++, (n = i.children) != null && n.length && (t = zt(s, t, i.children)));
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
  when: (s) => !!s.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = ls.bind(this), this.isAllCollapsed = Tt.bind(this), this.getNestedRowInfo = Pe.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(s) {
    var n, o, i;
    const t = s.data[(n = this.options.nestedParentKey) != null ? n : "parent"], e = (o = this.nestedMap.get(s.id)) != null ? o : {
      state: "",
      parent: t,
      level: 0
    };
    if (s.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (e.children = []), this.nestedMap.set(s.id, e), t) {
      let r = this.nestedMap.get(t);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  rowFilter(s) {
    return this.getNestedRowInfo(s.id).state !== "hidden";
  },
  rowSorter(s, t) {
    var i, r;
    const e = this.getNestedRowInfo(s.id), n = this.getNestedRowInfo(t.id);
    typeof e.order != "number" && zt(this.nestedMap);
    const o = ((i = e.order) != null ? i : 0) - ((r = n.order) != null ? r : 0);
    return o === 0 ? s.index - t.index : o;
  },
  onRenderCell(s, t, e, n) {
    var r, a, c;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(t);
    if (o && (i.children || i.parent) && s.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, t, e, n)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: "dtable-nested-toggle state",
      style: i.children ? void 0 : { visibility: "hidden" }
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: d = o } = e.setting;
      d && (d === !0 && (d = (c = this.options.nestedIndent) != null ? c : 12), s.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: d * i.level + "px" }
      })));
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var n, o;
    return e.setting.nestedToggle && s.unshift((o = (n = this.options.onRenderNestedToggle) == null ? void 0 : n.call(this, void 0, t, e, void 0)) != null ? o : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), s;
  },
  onRenderRow(s, t) {
    return s.className = L(s.className, `is-nested-${this.getNestedRowInfo(t.id).state}`), s;
  },
  onRenderHeaderRow(s) {
    return s.className = L(s.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
};
Ae(Wt);
function ye(s, ...t) {
  var e;
  if (t.length === 0)
    return s;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((o) => {
      var r;
      const i = (r = n[o]) != null ? r : 0;
      s = s.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let n = 0; n < t.length; n++) {
    const o = (e = t[n]) != null ? e : "";
    s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return s;
}
const D = 24 * 60 * 60 * 1e3, H = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ae = (s, t = new Date()) => (s = H(s), t = H(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), Oe = (s, t = new Date()) => H(s).getFullYear() === H(t).getFullYear(), jt = (s, t = new Date()) => (s = H(s), t = H(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), as = (s, t = new Date()) => {
  s = H(s), t = H(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), o = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((o + 4) / 7);
}, cs = (s, t) => ae(H(t), s), hs = (s, t) => ae(H(t).getTime() - D, s), ds = (s, t) => ae(H(t).getTime() + D, s), fs = (s, t) => ae(H(t).getTime() - 2 * D, s), Me = (s, t = "yyyy-MM-dd hh:mm") => {
  s = H(s);
  const e = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((n) => {
    if (new RegExp(`(${n})`).test(t)) {
      const o = `${e[n]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, us = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Me(s, Oe(s) ? n.month : n.full);
  if (ae(s, t))
    return o;
  const i = Me(t, Oe(s, t) ? jt(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", o).replace("{1}", i);
}, ps = (s) => {
  const t = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return t - D * 7;
    case "oneMonth":
      return t - D * 31;
    case "threeMonth":
      return t - D * 31 * 3;
    case "halfYear":
      return t - D * 183;
    case "oneYear":
      return t - D * 365;
    case "twoYear":
      return t - 2 * (D * 365);
    default:
      return 0;
  }
}, Ue = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, Ue(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, Ue(s, "day", e, n);
    case "week":
      s *= 7;
    case "day":
      s *= 24;
    case "hour":
      s *= 60;
    case "minute":
      s *= 6e4;
      break;
    default:
      s = 0;
  }
  return e ? n + s : n - s;
};
const Dt = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s) {
        return s[0] = {
          html: s[0]
        }, s;
      }
    },
    link: {
      onRenderCell(s, t, e, n) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = ye(o, n);
        return s[0] = /* @__PURE__ */ b("a", {
          href: r,
          ...i
        }, s[0]), s;
      }
    },
    avatar: {
      onRenderCell(s, t, e, n) {
        const { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ b("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: n ? n[r] : ""
        }));
        return o ? s.unshift(a) : s[0] = a, s;
      }
    },
    circleProgress: {
      onRenderCell(s, t, e) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (n - o) / 2, c = n / 2, d = s[0];
        return s[0] = /* @__PURE__ */ b("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - d) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: c,
          y: c + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(d))), s;
      }
    },
    actionButtons: {
      onRenderCell(s, t, e, n) {
        const o = n == null ? void 0 : n[e.name];
        if (!o)
          return s;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const d = r[c.action];
            return d && (c = { className: a, ...d, ...c }), ye(i, c);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(s, t, e) {
        let { format: n } = e.setting;
        if (!n)
          return s;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: i } = n, r = s[0];
        return typeof o == "function" ? s[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? s[0] = Me(r, o) : i === "html" ? s[0] = { html: ye(o, r) } : s[0] = ye(o, r), s;
      }
    }
  }
};
Ae(Dt);
const gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Lt,
  nested: Wt,
  rich: Dt
}, Symbol.toStringTag, { value: "Module" }));
var fe;
class ve {
  constructor(t, e) {
    k(this, "element");
    k(this, "options");
    x(this, fe, wt());
    var n;
    this.element = t, this.options = { ...De(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  get $() {
    return u(this, fe).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Kt(/* @__PURE__ */ b(Ie, {
      ref: u(this, fe),
      ...this.options
    }), this.element);
  }
}
fe = new WeakMap(), k(ve, "NAME", "zui.dtable"), k(ve, "definePlugin", Ae), k(ve, "removePlugin", At), k(ve, "plugins", gs);
let _s = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var ue, Y, j, ne, oe, ke;
const Ye = class {
  constructor(t, e = "local") {
    x(this, oe);
    x(this, ue, void 0);
    x(this, Y, void 0);
    x(this, j, void 0);
    x(this, ne, void 0);
    R(this, ue, e), R(this, Y, `ZUI_STORE:${t != null ? t : _s()}`), R(this, j, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return u(this, ue);
  }
  get session() {
    return this.type === "session" ? this : (u(this, ne) || R(this, ne, new Ye(u(this, Y), "session")), u(this, ne));
  }
  get(t, e) {
    const n = u(this, j).getItem(be(this, oe, ke).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    u(this, j).setItem(be(this, oe, ke).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    u(this, j).removeItem(be(this, oe, ke).call(this, t));
  }
  each(t) {
    for (let e = 0; e < u(this, j).length; e++) {
      const n = u(this, j).key(e);
      if (n != null && n.startsWith(u(this, Y))) {
        const o = u(this, j).getItem(n);
        typeof o == "string" && t(n.substring(u(this, Y).length + 1), JSON.parse(o));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
let xe = Ye;
ue = new WeakMap(), Y = new WeakMap(), j = new WeakMap(), ne = new WeakMap(), oe = new WeakSet(), ke = function(t) {
  return `${u(this, Y)}:${t}`;
};
const ms = new xe("DEFAULT");
function bs(s, t = "local") {
  return new xe(s, t);
}
Object.assign(ms, { create: bs });
class mt {
  constructor(t, e) {
    k(this, "$modal");
    k(this, "options");
    k(this, "reposTask", null);
    this.$modal = t, this.$modal && (this.options = e, e.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), e.type === "show" && e.position && this.adjustPosition(e.position, null), this.$modal.onclick = (n) => this.onClick(n), window.addEventListener("resize", () => {
      e.type === "show" && e.position && this.adjustPosition(e.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(t) {
    var e, n;
    (((e = t.target.dataset) == null ? void 0 : e.dismiss) === "modal" || ((n = t.target.parentElement.dataset) == null ? void 0 : n.dismiss) === "modal") && (this.onHide(this.$modal), t.stopPropagation());
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
    document.querySelectorAll(".modal").forEach((n) => {
      (n.dataset.modalClosable !== "false" || t === "destory") && n.classList.remove("block");
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
    const n = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!n)
      return;
    const o = window.innerHeight, i = Math.max(0, (o - n.clientHeight) / 2);
    let r = null;
    if (t === "fit" ? r = `${i > 50 ? Math.floor(i * 2 / 3) : i}px` : t === "center" ? r = `${i}px` : this.isPlainObject(t) || (r = t), n.setAttribute("style", `top: ${r}`), n.className.includes("-fullscreen")) {
      let c = null;
      if (((a = n.childNodes) == null ? void 0 : a.length) && n.childNodes.length === 1 ? c = n.childNodes[0] : c = n.childNodes[1], c) {
        const d = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, l = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], g = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, p = o - d - g, f = l && l.scrollHeight > p ? "auto" : "visible";
        l && l.setAttribute("style", `max-height:${p}px;overflow:${f}`);
      }
    }
  }
  isPlainObject(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
}
document.addEventListener("click", (s) => {
  var t, e, n;
  if (s !== null && s.target instanceof HTMLElement)
    if (((t = s.target.dataset) == null ? void 0 : t.toggle) === "modal") {
      let o = s.target.dataset.target;
      if (s.target.localName === "a") {
        const a = ((e = s.target) == null ? void 0 : e.href) || "";
        o = a && a.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!o.length)
        return;
      const i = document.querySelector(o), r = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new mt(i, r);
    } else
      s.target.parentElement.className.includes("modal") || new mt(s, { type: "hide" }).onClear();
});
const Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: D,
  createDate: H,
  isSameDay: ae,
  isSameYear: Oe,
  isSameMonth: jt,
  isSameWeek: as,
  isToday: cs,
  isYesterday: hs,
  isTomorrow: ds,
  isDBY: fs,
  formatDate: Me,
  formatDateSpan: us,
  getTimeBeforeDesc: ps,
  calculateTimestamp: Ue
}, Symbol.toStringTag, { value: "Module" }));
var ie, re;
class ys {
  constructor(t) {
    x(this, ie, void 0);
    x(this, re, void 0);
    R(this, ie, t), R(this, re, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(u(this, ie).parentElement.parentElement, u(this, ie).parentElement), this.addActive(u(this, re).parentElement, u(this, re));
  }
  addActive(t, e) {
    const n = t.children;
    Array.from(n).forEach((i) => {
      i.classList.remove("active"), i.classList.contains("fade") && i.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && setTimeout(() => {
      e.classList.add("in");
    }, 100);
  }
}
ie = new WeakMap(), re = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "tab" || s.target.getAttribute("data-tab")) && (s.preventDefault(), new ys(s.target).showTarget());
});
export {
  ws as Avatar,
  ve as DTable,
  gt as Scrollbar,
  ks as browser,
  gs as dtablePlugins,
  Ss as helpers,
  ms as store
};
