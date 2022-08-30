var Tt = Object.defineProperty;
var Wt = (n, t, e) => t in n ? Tt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var k = (n, t, e) => (Wt(n, typeof t != "symbol" ? t + "" : t, e), e), Ne = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var u = (n, t, e) => (Ne(n, t, "read from private field"), e ? e.call(n) : t.get(n)), $ = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, x = (n, t, e, s) => (Ne(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var pe = (n, t, e) => (Ne(n, t, "access private method"), e);
var Re, C, pt, le, it, be = {}, _t = [], It = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function F(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function gt(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function b(n, t, e) {
  var s, o, i, r = {};
  for (i in t)
    i == "key" ? s = t[i] : i == "ref" ? o = t[i] : r[i] = t[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Re.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (i in n.defaultProps)
      r[i] === void 0 && (r[i] = n.defaultProps[i]);
  return ge(n, r, s, o, null);
}
function ge(n, t, e, s, o) {
  var i = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++pt : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function mt() {
  return { current: null };
}
function Se(n) {
  return n.children;
}
function Q(n, t) {
  this.props = n, this.context = t;
}
function oe(n, t) {
  if (t == null)
    return n.__ ? oe(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? oe(n) : null;
}
function bt(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return bt(n);
  }
}
function ot(n) {
  (!n.__d && (n.__d = !0) && le.push(n) && !ye.__r++ || it !== C.debounceRendering) && ((it = C.debounceRendering) || setTimeout)(ye);
}
function ye() {
  for (var n; ye.__r = le.length; )
    n = le.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), le = [], n.some(function(t) {
      var e, s, o, i, r, c;
      t.__d && (r = (i = (e = t).__v).__e, (c = e.__P) && (s = [], (o = F({}, i)).__v = i.__v + 1, De(c, i, o, e.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? oe(i) : r, i.__h), kt(s, i), i.__e != r && bt(i)));
    });
}
function yt(n, t, e, s, o, i, r, c, a, f) {
  var l, _, p, d, g, R, m, y = s && s.__k || _t, v = y.length;
  for (e.__k = [], l = 0; l < t.length; l++)
    if ((d = e.__k[l] = (d = t[l]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ge(null, d, null, null, d) : Array.isArray(d) ? ge(Se, { children: d }, null, null, null) : d.__b > 0 ? ge(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = e, d.__b = e.__b + 1, (p = y[l]) === null || p && d.key == p.key && d.type === p.type)
        y[l] = void 0;
      else
        for (_ = 0; _ < v; _++) {
          if ((p = y[_]) && d.key == p.key && d.type === p.type) {
            y[_] = void 0;
            break;
          }
          p = null;
        }
      De(n, d, p = p || be, o, i, r, c, a, f), g = d.__e, (_ = d.ref) && p.ref != _ && (m || (m = []), p.ref && m.push(p.ref, null, d), m.push(_, d.__c || g, d)), g != null ? (R == null && (R = g), typeof d.type == "function" && d.__k === p.__k ? d.__d = a = vt(d, a, n) : a = wt(n, d, p, y, g, a), typeof e.type == "function" && (e.__d = a)) : a && p.__e == a && a.parentNode != n && (a = oe(p));
    }
  for (e.__e = R, l = v; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = oe(s, l + 1)), St(y[l], y[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      Rt(m[l], m[++l], m[++l]);
}
function vt(n, t, e) {
  for (var s, o = n.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = n, t = typeof s.type == "function" ? vt(s, t, e) : wt(e, s, s, o, s.__e, t));
  return t;
}
function wt(n, t, e, s, o, i) {
  var r, c, a;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== n)
        n.appendChild(o), r = null;
      else {
        for (c = i, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == o)
            break e;
        n.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Dt(n, t, e, s, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in t || ve(n, i, null, e[i], s);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === t[i] || ve(n, i, t[i], e[i], s);
}
function rt(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || It.test(t) ? e : e + "px";
}
function ve(n, t, e, s, o) {
  var i;
  e:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || rt(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || rt(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + i] = e, e ? s || n.addEventListener(t, i ? at : lt, i) : n.removeEventListener(t, i ? at : lt, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
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
function lt(n) {
  this.l[n.type + !1](C.event ? C.event(n) : n);
}
function at(n) {
  this.l[n.type + !0](C.event ? C.event(n) : n);
}
function De(n, t, e, s, o, i, r, c, a) {
  var f, l, _, p, d, g, R, m, y, v, N, T, L, E = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (a = e.__h, c = t.__e = e.__e, t.__h = null, i = [c]), (f = C.__b) && f(t);
  try {
    e:
      if (typeof E == "function") {
        if (m = t.props, y = (f = E.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, e.__c ? R = (l = t.__c = e.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, v) : (t.__c = l = new Q(m, v), l.constructor = E, l.render = Pt), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = v, l.__n = s, _ = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = F({}, l.__s)), F(l.__s, E.getDerivedStateFromProps(m, l.__s))), p = l.props, d = l.state, _)
          E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && m !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, v) === !1 || t.__v === e.__v) {
            l.props = m, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(Y) {
              Y && (Y.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, d, g);
          });
        }
        if (l.context = v, l.props = m, l.__v = t, l.__P = n, N = C.__r, T = 0, "prototype" in E && E.prototype.render)
          l.state = l.__s, l.__d = !1, N && N(t), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, N && N(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++T < 25);
        l.state = l.__s, l.getChildContext != null && (s = F(F({}, s), l.getChildContext())), _ || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(p, d)), L = f != null && f.type === Se && f.key == null ? f.props.children : f, yt(n, Array.isArray(L) ? L : [L], t, e, s, o, i, r, c, a), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), R && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = jt(e.__e, t, e, s, o, i, r, a);
    (f = C.diffed) && f(t);
  } catch (Y) {
    t.__v = null, (a || i != null) && (t.__e = c, t.__h = !!a, i[i.indexOf(c)] = null), C.__e(Y, t, e);
  }
}
function kt(n, t) {
  C.__c && C.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(s) {
        s.call(e);
      });
    } catch (s) {
      C.__e(s, e.__v);
    }
  });
}
function jt(n, t, e, s, o, i, r, c) {
  var a, f, l, _ = e.props, p = t.props, d = t.type, g = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((a = i[g]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        n = a, i[g] = null;
        break;
      }
  }
  if (n == null) {
    if (d === null)
      return document.createTextNode(p);
    n = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), i = null, c = !1;
  }
  if (d === null)
    _ === p || c && n.data === p || (n.data = p);
  else {
    if (i = i && Re.call(n.childNodes), f = (_ = e.props || be).dangerouslySetInnerHTML, l = p.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (_ = {}, g = 0; g < n.attributes.length; g++)
          _[n.attributes[g].name] = n.attributes[g].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === n.innerHTML) || (n.innerHTML = l && l.__html || ""));
    }
    if (Dt(n, p, _, o, c), l)
      t.__k = [];
    else if (g = t.props.children, yt(n, Array.isArray(g) ? g : [g], t, e, s, o && d !== "foreignObject", i, r, i ? i[0] : e.__k && oe(e, 0), c), i != null)
      for (g = i.length; g--; )
        i[g] != null && gt(i[g]);
    c || ("value" in p && (g = p.value) !== void 0 && (g !== n.value || d === "progress" && !g || d === "option" && g !== _.value) && ve(n, "value", g, _.value, !1), "checked" in p && (g = p.checked) !== void 0 && g !== n.checked && ve(n, "checked", g, _.checked, !1));
  }
  return n;
}
function Rt(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    C.__e(s, e);
  }
}
function St(n, t, e) {
  var s, o;
  if (C.unmount && C.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Rt(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        C.__e(i, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (o = 0; o < s.length; o++)
      s[o] && St(s[o], t, typeof n.type != "function");
  e || n.__e == null || gt(n.__e), n.__e = n.__d = void 0;
}
function Pt(n, t, e) {
  return this.constructor(n, e);
}
function Ot(n, t, e) {
  var s, o, i;
  C.__ && C.__(n, t), o = (s = typeof e == "function") ? null : e && e.__k || t.__k, i = [], De(t, n = (!s && e || t).__k = b(Se, null, [n]), o || be, be, t.ownerSVGElement !== void 0, !s && e ? [e] : o ? null : t.firstChild ? Re.call(t.childNodes) : null, i, !s && e ? e : o ? o.__e : t.firstChild, s), kt(i, n);
}
Re = _t.slice, C = { __e: function(n, t, e, s) {
  for (var o, i, r; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(n)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        n = c;
      }
  throw n;
} }, pt = 0, Q.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = F({}, this.state), typeof n == "function" && (n = n(F({}, e), this.props)), n && F(e, n), n != null && this.__v && (t && this.__h.push(t), ot(this));
}, Q.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ot(this));
}, Q.prototype.render = Se, le = [], ye.__r = 0;
const z = (...n) => n.map((t) => Array.isArray(t) ? z(...t) : typeof t == "function" ? z(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const s = t[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class on extends Q {
  render() {
    const { size: t, rounded: e, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, f = [s], l = { ...o };
    let _ = null;
    return i ? _ = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : _ = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && f.push(`avatar-${t}`), typeof e == "string" && f.push(`rounded-${e}`), /* @__PURE__ */ b("div", {
      className: z(f),
      style: l,
      ...a
    }, _, c);
  }
}
function rn(n) {
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
function ln(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function an(n, t) {
  const e = typeof n == "string" ? document.querySelector(n) : n;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, c = s.left <= i && s.left + s.width >= 0;
  return r && c;
}
const Ut = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: o, value: i } = s;
    t[o] = i;
  }), t;
};
class Bt extends HTMLElement {
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
    const e = Ut(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Bt);
var V, ae;
class ct {
  constructor(t) {
    $(this, V, void 0);
    $(this, ae, void 0);
    var e;
    x(this, V, t), x(this, ae, t.nextElementSibling), ((e = u(this, V).dataset) == null ? void 0 : e.toggle) === "dropdown" && !u(this, V).parentElement.className.includes("dropdown-hover") && this.toggle(u(this, V).parentElement, u(this, ae));
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
V = new WeakMap(), ae = new WeakMap();
document.addEventListener("click", function(n) {
  n !== null && n.target instanceof HTMLElement && (n.target.dataset.toggle === "dropdown" ? new ct(n.target) : new ct(n).clearMenu());
});
var G, X;
class ht extends Q {
  constructor(e) {
    var s;
    super(e);
    $(this, G, 0);
    $(this, X, null);
    k(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: s } = this.props, o = e.target;
      !o || !s || (typeof s == "string" && o.closest(s) || typeof s == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1)) && e.preventDefault();
    });
    k(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (u(this, G) && cancelAnimationFrame(u(this, G)), x(this, G, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), x(this, G, 0);
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
      const o = s.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: c } = this.props, a = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(a * c / r);
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
    const { clientSize: e, scrollSize: s, size: o = 10 } = this.props;
    return Math.max(Math.round(e * e / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (x(this, X, typeof e == "string" ? document : e.current), u(this, X).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), u(this, X) && u(this, X).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: s } = this.props;
    s && s(e, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      scrollSize: e,
      clientSize: s,
      type: o,
      size: i = 10,
      className: r,
      style: c,
      left: a,
      top: f,
      bottom: l,
      right: _
    } = this.props, { maxScrollPos: p, scrollPos: d } = this, { dragStart: g } = this.state, R = {
      left: a,
      top: f,
      bottom: l,
      right: _,
      ...c
    }, m = {};
    return o === "horz" ? (R.height = i, R.width = s, m.width = Math.max(Math.round(s * s / e), i), m.left = Math.round(d * (s - m.width) / p)) : (R.width = i, R.height = s, m.height = this.barSize, m.top = Math.round(d * (s - m.height) / p)), /* @__PURE__ */ b("div", {
      className: z("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": g
      }),
      style: R,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
G = new WeakMap(), X = new WeakMap();
function je({ col: n, className: t, height: e, rowID: s, hoverCol: o, rowData: i, onRenderCell: r, style: c, children: a, ...f }) {
  const { cellStyle: l, align: _, className: p } = n.setting, d = {
    left: n.left,
    width: n.realWidth,
    height: e,
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...c,
    ...l
  };
  let g = [
    a != null ? a : i == null ? void 0 : i[n.name]
  ];
  r && (g = r(g, s, n, i));
  const R = [], m = [];
  g == null || g.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? (v.html && m.push(/* @__PURE__ */ b("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: v.html }
    })), v.style && Object.assign(d, v.style), v.className && R.push(v.className)) : m.push(v);
  });
  const y = z("dtable-cell", t, {
    "dtable-col-hover": o
  }, p, R);
  return /* @__PURE__ */ b("div", {
    className: y,
    style: d,
    "data-col": n.name,
    ...f
  }, m);
}
function Ft({ col: n, children: t, style: e, ...s }) {
  let { sortType: o } = n.setting;
  return o === !0 && (o = "none"), /* @__PURE__ */ b(je, {
    col: n,
    style: { ...e, ...n.setting.style },
    "data-sort": o || null,
    "data-type": n.type,
    ...s
  }, n.setting.title, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o}`
  }), t);
}
function Ae({ rowID: n, className: t, top: e = 0, left: s = 0, width: o, height: i, cols: r, data: c, hoverCol: a, CellComponent: f = je, onRenderCell: l }) {
  return /* @__PURE__ */ b("div", {
    className: z("dtable-cells", t),
    style: { top: e, left: s, width: o, height: i }
  }, r.map((_) => _.visible ? /* @__PURE__ */ b(f, {
    key: _.name,
    col: _,
    hoverCol: a === _.name && _.setting.colHover !== !1,
    rowData: c,
    rowID: n,
    onRenderCell: l
  }) : null));
}
function Ct({
  rowID: n,
  className: t,
  top: e,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: c,
  scrollWidth: a,
  scrollWidthTotal: f,
  flexRightWidth: l,
  scrollLeft: _,
  CellComponent: p = je,
  onRenderCell: d,
  hoverCol: g,
  data: R
}) {
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ b(Ae, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    rowID: n,
    hoverCol: g,
    CellComponent: p,
    onRenderCell: d,
    data: R
  }));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ b(Ae, {
    className: "dtable-flexable",
    cols: r,
    left: c - _,
    width: f,
    rowID: n,
    hoverCol: g,
    CellComponent: p,
    onRenderCell: d,
    data: R
  }));
  let v = null;
  i != null && i.length && (v = /* @__PURE__ */ b(Ae, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    rowID: n,
    hoverCol: g,
    CellComponent: p,
    onRenderCell: d,
    data: R
  }));
  const N = { top: e, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ b("div", {
    className: z("dtable-row", t),
    style: N,
    "data-id": n
  }, m, y, v);
}
function Yt({ height: n, onRenderRow: t, ...e }) {
  let s = {
    height: n,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Ft
  };
  return t && (s = t(s)), /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ b(Ct, {
    ...s
  }));
}
function qt({
  className: n,
  style: t,
  top: e,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...c
}) {
  return t = { ...t, top: e, height: o }, /* @__PURE__ */ b("div", {
    className: z("dtable-rows", n),
    style: t
  }, s.map((a) => {
    let f = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      rowID: a.data.id,
      data: a.data,
      top: a.top,
      height: i,
      ...c
    };
    return r && (f = r(f, a)), /* @__PURE__ */ b(Ct, {
      ...f
    });
  }));
}
const we = /* @__PURE__ */ new Map();
function xt(n, t = !1) {
  if (!t && we.has(n.name))
    throw new Error(`DTable: Plugin with name ${n.name} already exists`);
  we.set(n.name, n);
}
function Ce(n, t = !1) {
  xt(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: o, ...i } = n;
    return {
      ...i,
      defaultOptions: { ...o, ...s }
    };
  };
  return e.plugin = n, e;
}
function Kt(n) {
  return we.get(n);
}
function Et(n) {
  return we.delete(n);
}
function Vt(n) {
  var e;
  if (!((e = n == null ? void 0 : n.plugins) != null && e.length))
    return [];
  const { plugins: t } = n;
  return t.reduce((s, o) => {
    let i;
    return typeof o == "string" ? (i = Kt(o), i || console.warn(`DTable: Cannot found plugin "${o}"`)) : typeof o == "function" ? i = o.plugin : typeof o == "object" ? i = o : console.warn("DTable: Invalid plugin", o), i && s.push(i), s;
  }, []);
}
function Gt(n, t) {
  return n.reduce((e, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, t);
}
function ze() {
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
var J, U, S, Z, H, ne;
class Te extends Q {
  constructor(e) {
    super(e);
    k(this, "ref", mt());
    $(this, J, 0);
    $(this, U, !1);
    $(this, S, void 0);
    $(this, Z, void 0);
    $(this, H, []);
    $(this, ne, void 0);
    k(this, "_handleResize", () => {
      u(this, J) && cancelAnimationFrame(u(this, J)), x(this, J, requestAnimationFrame(() => {
        this.forceUpdate(), x(this, J, 0);
      }));
    });
    k(this, "_handleRenderRow", (e, s) => (u(this, S).onRenderRow && (e = u(this, S).onRenderRow.call(this, e, s)), u(this, H).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, s));
    }), e));
    k(this, "_handleRenderHeaderRow", (e) => (u(this, S).onRenderHeaderRow && (e = u(this, S).onRenderHeaderRow.call(this, e)), u(this, H).forEach((s) => {
      s.onRenderHeaderRow && (e = s.onRenderHeaderRow.call(this, e));
    }), e));
    k(this, "_handleRenderCell", (e, s, o, i) => {
      const r = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[r] && (e = o.setting[r].call(this, e, s, o, i)), u(this, S)[r] && (e = u(this, S)[r].call(this, e, s, o, i)), u(this, H).forEach((c) => {
        c[r] && (e = c[r].call(this, e, s, o, i));
      }), e;
    });
    k(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    k(this, "_handleClick", (e) => {
      var a, f, l, _, p, d, g, R;
      const s = e.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (f = o.getAttribute("data-id")) != null ? f : "";
      if (c === "HEADER")
        i && ((l = u(this, S).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), u(this, H).forEach((m) => {
          var y;
          (y = m.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: i });
        }));
      else {
        const m = (_ = u(this, ne)) == null ? void 0 : _.visibleRows.find((y) => y.data.id === c);
        if (i) {
          if (((p = u(this, S).onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
            return;
          for (const y of u(this, H))
            if (((d = y.onCellClick) == null ? void 0 : d.call(this, e, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
              return;
        }
        if (((g = u(this, S).onRowClick) == null ? void 0 : g.call(this, e, { rowID: c, rowInfo: m, element: o })) === !0)
          return;
        for (const y of u(this, H))
          if (((R = y.onRowClick) == null ? void 0 : R.call(this, e, { rowID: c, rowInfo: m, element: o })) === !0)
            return;
      }
    });
    k(this, "_handleMouseOver", (e) => {
      var r, c;
      const { colHover: s } = u(this, S);
      if (!s)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || s === "header" && !o.closest(".dtable-header"))
        return;
      const i = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "";
      this.setState({ hoverCol: i });
    });
    k(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...ze(), ...e };
    x(this, S, Object.freeze(s)), x(this, Z, Object.freeze(Vt(s))), u(this, Z).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return u(this, S);
  }
  get plugins() {
    return u(this, H);
  }
  get layout() {
    return u(this, ne);
  }
  componentDidMount() {
    var e, s, o;
    u(this, U) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), (s = this.ref.current) == null || s.addEventListener("mouseover", this._handleMouseOver), (o = this.ref.current) == null || o.addEventListener("mouseleave", this._handleMouseLeave), u(this, S).responsive && window.addEventListener("resize", this._handleResize), u(this, H).forEach((i) => {
      var r;
      (r = i.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    u(this, U) && this._afterRender();
  }
  componentWillUnmount() {
    var e, s, o;
    (e = this.ref.current) == null || e.removeEventListener("click", this._handleClick), u(this, S).colHover && ((s = this.ref.current) == null || s.removeEventListener("mouseover", this._handleMouseOver), (o = this.ref.current) == null || o.removeEventListener("mouseleave", this._handleMouseLeave)), window.removeEventListener("resize", this._handleResize), u(this, H).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = u(this, S).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = u(this, S).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ke, Ve, Ge;
    const e = ze(), s = Gt(u(this, Z), { ...e, ...this.props }), o = u(this, Z).filter((h) => !h.when || h.when(s));
    x(this, H, Object.freeze(o)), o.forEach((h) => {
      var M;
      const w = (M = h.beforeLayout) == null ? void 0 : M.call(this, s);
      w && Object.assign(s, w);
    }), x(this, S, Object.freeze(s));
    const {
      data: i,
      header: r,
      footer: c,
      rowHeight: a = e.rowHeight,
      defaultColWidth: f = e.minColWidth,
      minColWidth: l = e.minColWidth,
      maxColWidth: _ = e.maxColWidth
    } = s, p = r ? s.headerHeight || a : 0, d = c ? s.footerHeight || a : 0, g = (h, w, M) => (h && (w && (h = Math.max(w, h)), M && (h = Math.min(M, h))), h), R = [], m = [], y = [];
    let v = 0, N = 0;
    (Ke = s.cols) == null || Ke.forEach((h) => {
      var Xe, Je, Ze;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: w = l, maxWidth: M = _ } = h, W = g((Xe = h.width) != null ? Xe : 0, w, M), O = (Je = h.flex) != null ? Je : 1, He = O * g(f, w, M), te = {
        name: h.name,
        type: (Ze = h.type) != null ? Ze : "",
        setting: h,
        left: 0,
        flex: O,
        realWidth: W,
        flexWidth: He,
        visible: !0
      };
      h.fixed === "left" ? (te.left = v, v += W, R.push(te)) : h.fixed === "right" ? (te.left = N, N += W, m.push(te)) : y.push(te), o.forEach((Qe) => {
        var et, tt, nt;
        const ue = (tt = Qe.colTypes) == null ? void 0 : tt[(et = h.type) != null ? et : ""];
        if (ue) {
          const st = typeof ue == "function" ? ue(h) : ue;
          st && Object.assign(h, st);
        }
        (nt = Qe.onAddCol) == null || nt.call(this, te);
      });
    });
    let T = s.width, L = 0;
    if (typeof T == "function" && (T = T()), T === "auto")
      L = v + N, y.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), L += h.realWidth;
      });
    else if (T === "100%") {
      const h = (Ve = this.ref.current) == null ? void 0 : Ve.parentElement;
      if (h)
        L = h.clientWidth;
      else {
        L = 0, x(this, U, !0);
        return;
      }
    } else
      L = T != null ? T : 0;
    const E = [], Y = (h, w) => {
      var W, O;
      const M = { data: h, top: 0, id: h.id, index: E.length };
      if (E.push(M), ((W = s.onAddRow) == null ? void 0 : W.call(this, M, w)) !== !1) {
        for (const He of o)
          if (((O = He.onAddRow) == null ? void 0 : O.call(this, M, w)) === !1)
            return;
      }
    };
    if (Array.isArray(i))
      i.forEach(Y);
    else if (i != null && i.length) {
      const h = typeof i.length == "function" ? i.length() : i.length;
      for (let w = 0; w < h; w++)
        Y(i.getItem(w), w);
    }
    const D = [];
    let re = 0;
    E.forEach((h) => {
      var w, M;
      if (((w = s.rowFilter) == null ? void 0 : w.call(this, h)) !== !1) {
        for (const W of o)
          if (((M = W.rowFilter) == null ? void 0 : M.call(this, h)) === !1)
            return;
        h.index = D.length, h.top = re, D.push(h), re += a;
      }
    });
    let xe = !1;
    s.rowSorter && (D.sort(s.rowSorter.bind(this)), xe = !0), o.forEach((h) => {
      h.rowSorter && (D.sort(h.rowSorter.bind(this)), xe = !0);
    }), xe && D.forEach((h, w) => {
      h.index = w, h.top = w * a, D.push(h);
    });
    let j = s.height, q = 0;
    if (typeof j == "function" && (j = j()), j === "auto")
      q = p + d + re;
    else if (typeof j == "object")
      q = Math.min(j.max, Math.max(j.min, p + d + re));
    else if (j === "100%") {
      const h = (Ge = this.ref.current) == null ? void 0 : Ge.parentElement;
      if (h)
        q = h.clientHeight;
      else {
        q = 0, x(this, U, !0);
        return;
      }
    } else
      q = j;
    const { scrollTop: fe = 0, scrollLeft: Ee = 0, hoverCol: zt } = this.state, Oe = q - p - d, Ue = fe + Oe, Be = [], Me = L - v - N;
    let K = 0;
    const $e = [];
    let Fe = 0;
    if (y.forEach((h) => {
      h.realWidth ? K += h.realWidth : ($e.push(h), Fe += h.flex);
    }), $e.length) {
      const h = Math.max(0, Me - K);
      $e.forEach((w) => {
        var O;
        const { minWidth: M = l, maxWidth: W = _ } = w.setting;
        w.realWidth = Math.min(W, Math.max(M, Math.ceil(h * ((O = w.flex) != null ? O : 1) / Fe))), K += w.realWidth;
      });
    }
    K = 0, y.forEach((h) => {
      h.left += K, K += h.realWidth, (h.left + h.realWidth < Ee || h.left > Ee + Me) && (h.visible = !1);
    });
    const Ye = Math.floor(fe / a), qe = Math.min(D.length, Math.ceil(Ue / a));
    for (let h = Ye; h < qe; h++) {
      const w = D[h];
      w.top -= fe, Be.push(w);
    }
    let ee = {
      allRows: E,
      width: L,
      height: q,
      rows: D,
      visibleRows: Be,
      rowHeight: a,
      rowsHeight: Oe,
      rowsHeightTotal: re,
      hoverCol: zt,
      header: r,
      footer: c,
      headerHeight: p,
      footerHeight: d,
      colsInfo: {
        fixedLeftCols: R,
        fixedRightCols: m,
        scrollCols: y,
        flexLeftWidth: v,
        scrollWidth: Me,
        scrollWidthTotal: K,
        flexRightWidth: N
      },
      scrollBottom: Ue,
      scrollTop: fe,
      scrollLeft: Ee,
      startRowIndex: Ye,
      endRowIndex: qe
    };
    if (s.onLayout) {
      const h = s.onLayout.call(this, ee);
      h && (ee = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const w = h.onLayout.call(this, ee);
        w && (ee = w);
      }
    }), x(this, ne, Object.freeze(ee)), ee;
  }
  getColInfo(e) {
    var o, i;
    const { layout: s } = this;
    if (!!s)
      return (i = (o = s.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? o : s.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? i : s.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: s, hoverCol: o, colsInfo: i, headerHeight: r } = e;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ b(Yt, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: o,
        ...i
      });
    let c, a;
    if (typeof s == "function") {
      const f = s(e, this.state);
      typeof f == "object" && f && "__html" in f ? a = f : c = f;
    } else
      c = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: a
    }, c);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, hoverCol: c, colsInfo: a } = e;
    return /* @__PURE__ */ b(qt, {
      top: s,
      height: o,
      rows: i,
      rowHeight: r,
      hoverCol: c,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...a
    });
  }
  renderFooter(e) {
    const { footer: s, footerHeight: o } = e;
    if (!s)
      return null;
    let i, r;
    if (typeof s == "function") {
      const c = s(e, this.state);
      typeof c == "object" && c && "__html" in c ? r = c : i = c;
    } else
      i = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(e) {
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = e, { scrollWidthTotal: f, scrollWidth: l } = i, { scrollbarSize: _ = 10, horzScrollbarPos: p } = this.props;
    return f > l && s.push(/* @__PURE__ */ b(ht, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: f,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: p === "inside" ? 0 : -_,
      size: _,
      wheelContainer: this.ref
    })), a > c && s.push(/* @__PURE__ */ b(ht, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: a,
      clientSize: c,
      onScroll: this._handleScroll,
      right: 0,
      size: _,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    x(this, U, !1), (e = u(this, S).afterRender) == null || e.call(this), u(this, H).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var _, p;
    const e = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: f } = (_ = u(this, S)) != null ? _ : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ b("div", {
      className: z("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((p = e == null ? void 0 : e.scrollTop) != null ? p : 0) > 0,
        "scrollbar-hover": f
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
J = new WeakMap(), U = new WeakMap(), S = new WeakMap(), Z = new WeakMap(), H = new WeakMap(), ne = new WeakMap(), k(Te, "addPlugin", xt), k(Te, "removePlugin", Et);
var ce;
class Le {
  constructor(t, e) {
    k(this, "element");
    k(this, "options");
    $(this, ce, mt());
    var s;
    this.element = t, this.options = { ...ze(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return u(this, ce).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Ot(/* @__PURE__ */ b(Te, {
      ref: u(this, ce),
      ...this.options
    }), this.element);
  }
}
ce = new WeakMap(), k(Le, "NAME", "zui.dtable"), k(Le, "definePlugin", Ce), k(Le, "removePlugin", Et);
function Xt(n, t) {
  var s, o;
  let e = (s = this.state.checkedRows) != null ? s : {};
  if (n === "HEADER")
    t === void 0 && (t = !Mt.call(this)), t ? (o = this.layout) == null || o.allRows.forEach((i) => {
      e[i.id] = !0;
    }) : e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      t ? e[r] = !0 : delete e[r];
    });
  }
  this.setState({ checkedRows: { ...e } });
}
function Jt(n) {
  const t = this.state.checkedRows;
  return t ? !!t[n] : !1;
}
function Mt() {
  var t;
  const n = this.state.checkedRows;
  return n ? Object.keys(n).length === ((t = this.layout) == null ? void 0 : t.allRows.length) : !1;
}
const $t = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  onCreate() {
    this.toggleCheckRows = Xt.bind(this), this.isRowChecked = Jt.bind(this), this.isAllRowChecked = Mt.bind(this);
  },
  onRenderCell(n, t, e) {
    if (e.setting.checkbox) {
      const s = this.isRowChecked(t), o = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      n.unshift(o), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderHeaderCell(n, t, e) {
    if (e.setting.checkbox) {
      const s = this.isAllRowChecked(), o = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      n.unshift(o), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow(n, t) {
    return this.isRowChecked(t.id) && (n.className = z(n.className, "is-checked")), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest('input[type="checkbox"]');
    if (e)
      return this.toggleCheckRows("HEADER", e.checked);
  },
  onRowClick(n, { rowID: t }) {
    const e = n.target;
    if (!e)
      return;
    if (e.closest('input[type="checkbox"]') || this.options.checkOnClickRow)
      return this.toggleCheckRows(t);
  }
};
Ce($t);
function We(n) {
  const t = this.nestedMap.get(n);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, s = t.children && e && e[n];
  let o = !1, { parent: i } = t;
  for (; i; ) {
    const r = We.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = o ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? We.call(this, t.parent).level + 1 : 0, t;
}
function Zt(n, t) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (n === "HEADER")
    if (t === void 0 && (t = !Ht.call(this)), t) {
      const o = this.nestedMap.entries();
      for (const [i, r] of o)
        r.state === "expanded" && (e[i] = !0);
    } else
      e = {};
  else {
    const o = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[o[0]]), o.forEach((i) => {
      const r = this.nestedMap.get(i);
      t && (r == null ? void 0 : r.children) ? e[i] = !0 : delete e[i];
    });
  }
  this.setState({ collapsedRows: { ...e } });
}
function Ht() {
  const n = this.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Nt(n, t = 0, e) {
  var s;
  e || (e = [...n.keys()]);
  for (const o of e) {
    const i = n.get(o);
    !i || typeof i.order == "number" || (i.order = t++, (s = i.children) != null && s.length && (t = Nt(n, t, i.children)));
  }
  return t;
}
const At = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (n) => !!n.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = Zt.bind(this), this.isAllCollapsed = Ht.bind(this), this.getNestedRowInfo = We.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(n) {
    var s, o, i;
    const t = n.data[(s = this.options.nestedParentKey) != null ? s : "parent"], e = (o = this.nestedMap.get(n.id)) != null ? o : {
      state: "",
      parent: t,
      level: 0
    };
    if (n.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (e.children = []), this.nestedMap.set(n.id, e), t) {
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
    var i, r;
    const e = this.getNestedRowInfo(n.id), s = this.getNestedRowInfo(t.id);
    typeof e.order != "number" && Nt(this.nestedMap);
    const o = ((i = e.order) != null ? i : 0) - ((r = s.order) != null ? r : 0);
    return o === 0 ? n.index - t.index : o;
  },
  onRenderCell(n, t, e, s) {
    var r, c, a;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(t);
    if (o && (i.children || i.parent) && n.unshift((c = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, t, e, s)) != null ? c : /* @__PURE__ */ b("button", {
      type: "button",
      className: "dtable-nested-toggle state",
      style: i.children ? void 0 : { visibility: "hidden" }
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: f = o } = e.setting;
      f && (f === !0 && (f = (a = this.options.nestedIndent) != null ? a : 12), n.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: f * i.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, t, e) {
    var s, o;
    return e.setting.nestedToggle && n.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, t, e, void 0)) != null ? o : /* @__PURE__ */ b("button", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow(n, t) {
    return n.className = z(n.className, `is-nested-${this.getNestedRowInfo(t.id).state}`), n;
  },
  onRenderHeaderRow(n) {
    return n.className = z(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
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
Ce(At);
function _e(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const s = t[0];
    return Object.keys(s).forEach((o) => {
      var r;
      const i = (r = s[o]) != null ? r : 0;
      n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), n;
  }
  for (let s = 0; s < t.length; s++) {
    const o = (e = t[s]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${o}`);
  }
  return n;
}
const P = 24 * 60 * 60 * 1e3, A = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), de = (n, t = new Date()) => (n = A(n), t = A(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate()), dt = (n, t = new Date()) => A(n).getFullYear() === A(t).getFullYear(), Qt = (n, t = new Date()) => (n = A(n), t = A(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), cn = (n, t = new Date()) => {
  n = A(n), t = A(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), o = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, hn = (n, t) => de(A(t), n), dn = (n, t) => de(A(t).getTime() - P, n), fn = (n, t) => de(A(t).getTime() + P, n), un = (n, t) => de(A(t).getTime() - 2 * P, n), Ie = (n, t = "yyyy-MM-dd hh:mm") => {
  n = A(n);
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
      const o = `${e[s]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, pn = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Ie(n, dt(n) ? s.month : s.full);
  if (de(n, t))
    return o;
  const i = Ie(t, dt(n, t) ? Qt(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, _n = (n) => {
  const t = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return t - P * 7;
    case "oneMonth":
      return t - P * 31;
    case "threeMonth":
      return t - P * 31 * 3;
    case "halfYear":
      return t - P * 183;
    case "oneYear":
      return t - P * 365;
    case "twoYear":
      return t - 2 * (P * 365);
    default:
      return 0;
  }
}, ft = (n, t, e = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return n *= 365, ft(n, "day", e, s);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, ft(n, "day", e, s);
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
const Lt = {
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
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = _e(o, s);
        return n[0] = /* @__PURE__ */ b("a", {
          href: r,
          ...i
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, t, e, s) {
        const { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ b("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[r] : ""
        }));
        return o ? n.unshift(c) : n[0] = c, n;
      }
    },
    circleProgress: {
      onRenderCell(n, t, e) {
        const { circleSize: s = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, c = (s - o) / 2, a = s / 2, f = n[0];
        return n[0] = /* @__PURE__ */ b("svg", {
          width: s,
          height: s
        }, /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r: c,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r: c,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * c * 2,
          "stroke-dashoffset": Math.PI * c * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: a,
          y: a + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${c}px` }
        }, Math.round(f))), n;
      }
    },
    actionButtons: {
      onRenderCell(n, t, e, s) {
        const o = s == null ? void 0 : s[e.name];
        if (!o)
          return n;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: c = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((a) => {
            typeof a == "string" && (a = { action: a });
            const f = r[a.action];
            return f && (a = { className: c, ...f, ...a }), _e(i, a);
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
        const { format: o, type: i } = s, r = n[0];
        return typeof o == "function" ? n[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? n[0] = Ie(r, o) : i === "html" ? n[0] = { html: _e(o, r) } : n[0] = _e(o, r), n;
      }
    }
  }
};
Ce(Lt);
const gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: $t,
  nested: At,
  rich: Lt
}, Symbol.toStringTag, { value: "Module" }));
let en = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var he, B, I, se, ie, me;
const Pe = class {
  constructor(t, e = "local") {
    $(this, ie);
    $(this, he, void 0);
    $(this, B, void 0);
    $(this, I, void 0);
    $(this, se, void 0);
    x(this, he, e), x(this, B, `ZUI_STORE:${t != null ? t : en()}`), x(this, I, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return u(this, he);
  }
  get session() {
    return this.type === "session" ? this : (u(this, se) || x(this, se, new Pe(u(this, B), "session")), u(this, se));
  }
  get(t, e) {
    const s = u(this, I).getItem(pe(this, ie, me).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    u(this, I).setItem(pe(this, ie, me).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    u(this, I).removeItem(pe(this, ie, me).call(this, t));
  }
  each(t) {
    for (let e = 0; e < u(this, I).length; e++) {
      const s = u(this, I).key(e);
      if (s != null && s.startsWith(u(this, B))) {
        const o = u(this, I).getItem(s);
        typeof o == "string" && t(s.substring(u(this, B).length + 1), JSON.parse(o));
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
let ke = Pe;
he = new WeakMap(), B = new WeakMap(), I = new WeakMap(), se = new WeakMap(), ie = new WeakSet(), me = function(t) {
  return `${u(this, B)}:${t}`;
};
const tn = new ke("DEFAULT");
function nn(n, t = "local") {
  return new ke(n, t);
}
Object.assign(tn, { create: nn });
class ut {
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
    var c;
    if (clearTimeout(this.reposTask), e) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, t, 0), e);
      return;
    }
    if (t === void 0 && (t = this.options.position), t == null)
      return;
    const s = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!s)
      return;
    const o = window.innerHeight, i = Math.max(0, (o - s.clientHeight) / 2);
    let r = null;
    if (t === "fit" ? r = `${i > 50 ? Math.floor(i * 2 / 3) : i}px` : t === "center" ? r = `${i}px` : this.isPlainObject(t) || (r = t), s.setAttribute("style", `top: ${r}`), s.className.includes("-fullscreen")) {
      let a = null;
      if (((c = s.childNodes) == null ? void 0 : c.length) && s.childNodes.length === 1 ? a = s.childNodes[0] : a = s.childNodes[1], a) {
        const f = (a == null ? void 0 : a.getElementsByClassName("modal-header")[0].clientHeight) || 0, l = a == null ? void 0 : a.getElementsByClassName("modal-body")[0], _ = (a == null ? void 0 : a.getElementsByClassName("modal-footer")[0].clientHeight) || 0, p = o - f - _, d = l && l.scrollHeight > p ? "auto" : "visible";
        l && l.setAttribute("style", `max-height:${p}px;overflow:${d}`);
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
      let o = n.target.dataset.target;
      if (n.target.localName === "a") {
        const c = ((e = n.target) == null ? void 0 : e.href) || "";
        o = c && c.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!o.length)
        return;
      const i = document.querySelector(o), r = {
        type: "show",
        position: ((s = n.target.dataset) == null ? void 0 : s.position) || "fit"
      };
      new ut(i, r);
    } else
      n.target.parentElement.className.includes("modal") || new ut(n, { type: "hide" }).onClear();
});
export {
  on as Avatar,
  Le as DTable,
  ht as Scrollbar,
  P as TIME_DAY,
  ft as calculateTimestamp,
  z as classes,
  A as createDate,
  ln as domReady,
  gn as dtablePlugins,
  Ie as formatDate,
  pn as formatDateSpan,
  _n as getTimeBeforeDesc,
  un as isDBY,
  an as isElementVisible,
  de as isSameDay,
  Qt as isSameMonth,
  cn as isSameWeek,
  dt as isSameYear,
  hn as isToday,
  fn as isTomorrow,
  dn as isYesterday,
  rn as selectText,
  tn as store
};
