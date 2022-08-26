var an = Object.defineProperty;
var cn = (t, e, n) => e in t ? an(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => (cn(t, typeof e != "symbol" ? e + "" : e, n), n), Pe = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var m = (t, e, n) => (Pe(t, e, "read from private field"), n ? n.call(t) : e.get(t)), A = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, C = (t, e, n, s) => (Pe(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var ye = (t, e, n) => (Pe(t, e, "access private method"), n);
var Ne, R, Et, he, ut, Se = {}, Nt = [], hn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function q(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ht(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function b(t, e, n) {
  var s, i, o, l = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ne.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      l[o] === void 0 && (l[o] = t.defaultProps[o]);
  return be(t, l, s, i, null);
}
function be(t, e, n, s, i) {
  var o = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Et : i };
  return i == null && R.vnode != null && R.vnode(o), o;
}
function At() {
  return { current: null };
}
function He(t) {
  return t.children;
}
function se(t, e) {
  this.props = t, this.context = e;
}
function le(t, e) {
  if (e == null)
    return t.__ ? le(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? le(t) : null;
}
function Lt(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Lt(t);
  }
}
function _t(t) {
  (!t.__d && (t.__d = !0) && he.push(t) && !$e.__r++ || ut !== R.debounceRendering) && ((ut = R.debounceRendering) || setTimeout)($e);
}
function $e() {
  for (var t; $e.__r = he.length; )
    t = he.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), he = [], t.some(function(e) {
      var n, s, i, o, l, c;
      e.__d && (l = (o = (n = e).__v).__e, (c = n.__P) && (s = [], (i = q({}, o)).__v = o.__v + 1, Ye(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? le(o) : l, o.__h), Dt(s, o), o.__e != l && Lt(o)));
    });
}
function Tt(t, e, n, s, i, o, l, c, a, f) {
  var r, p, d, h, u, k, g, y = s && s.__k || Nt, v = y.length;
  for (n.__k = [], r = 0; r < e.length; r++)
    if ((h = n.__k[r] = (h = e[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? be(null, h, null, null, h) : Array.isArray(h) ? be(He, { children: h }, null, null, null) : h.__b > 0 ? be(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (d = y[r]) === null || d && h.key == d.key && h.type === d.type)
        y[r] = void 0;
      else
        for (p = 0; p < v; p++) {
          if ((d = y[p]) && h.key == d.key && h.type === d.type) {
            y[p] = void 0;
            break;
          }
          d = null;
        }
      Ye(t, h, d = d || Se, i, o, l, c, a, f), u = h.__e, (p = h.ref) && d.ref != p && (g || (g = []), d.ref && g.push(d.ref, null, h), g.push(p, h.__c || u, h)), u != null ? (k == null && (k = u), typeof h.type == "function" && h.__k === d.__k ? h.__d = a = zt(h, a, t) : a = Wt(t, h, d, y, u, a), typeof n.type == "function" && (n.__d = a)) : a && d.__e == a && a.parentNode != t && (a = le(d));
    }
  for (n.__e = k, r = v; r--; )
    y[r] != null && (typeof n.type == "function" && y[r].__e != null && y[r].__e == n.__d && (n.__d = le(s, r + 1)), It(y[r], y[r]));
  if (g)
    for (r = 0; r < g.length; r++)
      Pt(g[r], g[++r], g[++r]);
}
function zt(t, e, n) {
  for (var s, i = t.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = t, e = typeof s.type == "function" ? zt(s, e, n) : Wt(n, s, s, i, s.__e, e));
  return e;
}
function Wt(t, e, n, s, i, o) {
  var l, c, a;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = o, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == i)
            break e;
        t.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function dn(t, e, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || xe(t, o, null, n[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || xe(t, o, e[o], n[o], s);
}
function pt(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || hn.test(e) ? n : n + "px";
}
function xe(t, e, n, s, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || pt(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || pt(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? s || t.addEventListener(e, o ? mt : gt, o) : t.removeEventListener(e, o ? mt : gt, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function gt(t) {
  this.l[t.type + !1](R.event ? R.event(t) : t);
}
function mt(t) {
  this.l[t.type + !0](R.event ? R.event(t) : t);
}
function Ye(t, e, n, s, i, o, l, c, a) {
  var f, r, p, d, h, u, k, g, y, v, E, L, N, S = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, c = e.__e = n.__e, e.__h = null, o = [c]), (f = R.__b) && f(e);
  try {
    e:
      if (typeof S == "function") {
        if (g = e.props, y = (f = S.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, n.__c ? k = (r = e.__c = n.__c).__ = r.__E : ("prototype" in S && S.prototype.render ? e.__c = r = new S(g, v) : (e.__c = r = new se(g, v), r.constructor = S, r.render = un), y && y.sub(r), r.props = g, r.state || (r.state = {}), r.context = v, r.__n = s, p = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), S.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = q({}, r.__s)), q(r.__s, S.getDerivedStateFromProps(g, r.__s))), d = r.props, h = r.state, p)
          S.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && g !== d && r.componentWillReceiveProps != null && r.componentWillReceiveProps(g, v), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(g, r.__s, v) === !1 || e.__v === n.__v) {
            r.props = g, r.state = r.__s, e.__v !== n.__v && (r.__d = !1), r.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(W) {
              W && (W.__ = e);
            }), r.__h.length && l.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(g, r.__s, v), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(d, h, u);
          });
        }
        if (r.context = v, r.props = g, r.__v = e, r.__P = t, E = R.__r, L = 0, "prototype" in S && S.prototype.render)
          r.state = r.__s, r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++L < 25);
        r.state = r.__s, r.getChildContext != null && (s = q(q({}, s), r.getChildContext())), p || r.getSnapshotBeforeUpdate == null || (u = r.getSnapshotBeforeUpdate(d, h)), N = f != null && f.type === He && f.key == null ? f.props.children : f, Tt(t, Array.isArray(N) ? N : [N], e, n, s, i, o, l, c, a), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), k && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fn(n.__e, e, n, s, i, o, l, a);
    (f = R.diffed) && f(e);
  } catch (W) {
    e.__v = null, (a || o != null) && (e.__e = c, e.__h = !!a, o[o.indexOf(c)] = null), R.__e(W, e, n);
  }
}
function Dt(t, e) {
  R.__c && R.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      R.__e(s, n.__v);
    }
  });
}
function fn(t, e, n, s, i, o, l, c) {
  var a, f, r, p = n.props, d = e.props, h = e.type, u = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((a = o[u]) && "setAttribute" in a == !!h && (h ? a.localName === h : a.nodeType === 3)) {
        t = a, o[u] = null;
        break;
      }
  }
  if (t == null) {
    if (h === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), o = null, c = !1;
  }
  if (h === null)
    p === d || c && t.data === d || (t.data = d);
  else {
    if (o = o && Ne.call(t.childNodes), f = (p = n.props || Se).dangerouslySetInnerHTML, r = d.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (p = {}, u = 0; u < t.attributes.length; u++)
          p[t.attributes[u].name] = t.attributes[u].value;
      (r || f) && (r && (f && r.__html == f.__html || r.__html === t.innerHTML) || (t.innerHTML = r && r.__html || ""));
    }
    if (dn(t, d, p, i, c), r)
      e.__k = [];
    else if (u = e.props.children, Tt(t, Array.isArray(u) ? u : [u], e, n, s, i && h !== "foreignObject", o, l, o ? o[0] : n.__k && le(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && Ht(o[u]);
    c || ("value" in d && (u = d.value) !== void 0 && (u !== t.value || h === "progress" && !u || h === "option" && u !== p.value) && xe(t, "value", u, p.value, !1), "checked" in d && (u = d.checked) !== void 0 && u !== t.checked && xe(t, "checked", u, p.checked, !1));
  }
  return t;
}
function Pt(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    R.__e(s, n);
  }
}
function It(t, e, n) {
  var s, i;
  if (R.unmount && R.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Pt(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        R.__e(o, e);
      }
    s.base = s.__P = null;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && It(s[i], e, typeof t.type != "function");
  n || t.__e == null || Ht(t.__e), t.__e = t.__d = void 0;
}
function un(t, e, n) {
  return this.constructor(t, n);
}
function _n(t, e, n) {
  var s, i, o;
  R.__ && R.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, o = [], Ye(e, t = (!s && n || e).__k = b(He, null, [t]), i || Se, Se, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? Ne.call(e.childNodes) : null, o, !s && n ? n : i ? i.__e : e.firstChild, s), Dt(o, t);
}
Ne = Nt.slice, R = { __e: function(t, e, n, s) {
  for (var i, o, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Et = 0, se.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), typeof t == "function" && (t = t(q({}, n), this.props)), t && q(n, t), t != null && this.__v && (e && this.__h.push(e), _t(this));
}, se.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), _t(this));
}, se.prototype.render = He, he = [], $e.__r = 0;
const D = (...t) => t.map((e) => Array.isArray(e) ? D(...e) : typeof e == "function" ? D(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((n) => {
  const s = e[n];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
class Wn extends se {
  render() {
    const { size: e, rounded: n, className: s, style: i, src: o, text: l, children: c, ...a } = this.props, f = [s], r = { ...i };
    let p = null;
    return o ? p = /* @__PURE__ */ b("img", {
      src: o,
      alt: l
    }) : p = l, typeof e == "number" ? (r.width = e, r.height = e) : typeof e == "string" && f.push(`avatar-${e}`), typeof n == "string" && f.push(`rounded-${n}`), /* @__PURE__ */ b("div", {
      className: D(f),
      style: r,
      ...a
    }, p, c);
  }
}
function Dn(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const s = document.createRange();
      return s.selectNodeContents(e), n.removeAllRanges(), n.addRange(s), !0;
    }
  }
  return !1;
}
function Pn(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
const pn = (t) => {
  const e = {};
  if (!t)
    return e;
  const n = Object.values(t.attributes);
  return n && n.length > 0 && n.forEach((s) => {
    const { name: i, value: o } = s;
    e[i] = o;
  }), e;
};
class gn extends HTMLElement {
  constructor() {
    super();
    $(this, "$button");
    $(this, "$icon");
    $(this, "onClick");
    this.$button = document.createElement("button");
    const n = this.innerHTML;
    this.innerHTML = "", this.$button.innerHTML = n, this.icon && (this.$icon = document.createElement("i"), this.addClass(this.$icon, `icon ${this.icon}`), this.$button.prepend(this.$icon)), this.$button.classList.add("btn"), this.append(this.$button);
  }
  connectedCallback() {
    this.initStyle(), this.initEventListen(), this.isDisabled && this.$button.setAttribute("disabled", "disabled"), this.$button.addEventListener("keydown", (n) => {
      switch (n.keyCode) {
        case 13:
          n.stopPropagation();
          break;
      }
    });
  }
  initStyle() {
    const n = pn(this);
    if (n)
      for (const s in n)
        ["type", "size", "rounded", "outline"].includes(s) && this.addClass(this.$button, `-${n[s]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(n, s) {
    n && n.classList.add(s);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(n) {
    this.getAttribute("type") ? (this.setAttribute("type", n), this.addClass(this.$button, `-${this.type}`)) : this.removeAttribute("type");
  }
  get size() {
    return this.getAttribute("size");
  }
  set size(n) {
    this.getAttribute("size") ? (this.setAttribute("size", n || "base"), this.addClass(this.$button, `-${n}`)) : this.removeAttribute("size");
  }
  get loading() {
    return this.getAttribute("loading");
  }
  set loading(n) {
    this.getAttribute("loading") ? this.setAttribute("loading", n || "") : this.removeAttribute("loading");
  }
  get rounded() {
    return this.getAttribute("rounded");
  }
  set rounded(n) {
    this.getAttribute("rounded") ? (this.setAttribute("rounded", n || ""), this.addClass(this.$button, `-${n}`)) : this.removeAttribute("rounded");
  }
  get isDisabled() {
    return this.getAttribute("isDisabled") !== null;
  }
  set isDisabled(n) {
    n === null || n === !1 ? this.removeAttribute("isDisabled") : this.setAttribute("isDisabled", "");
  }
  get icon() {
    return this.getAttribute("icon");
  }
  set icon(n) {
    this.setAttribute("icon", n);
  }
  static get observedAttributes() {
    return ["type", "size", "rounded", "disabled", "loading", "outline"];
  }
  get class() {
    return this.$button.classList;
  }
  attributeChangedCallback(n, s) {
    n === "isDisabled" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), n === "loading" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), n === "icon" && this.$icon && s && this.addClass(this.$icon, `-${s}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", gn);
var X, ue;
class yt {
  constructor(e) {
    A(this, X, void 0);
    A(this, ue, void 0);
    var n;
    C(this, X, e), C(this, ue, e.nextElementSibling), ((n = m(this, X).dataset) == null ? void 0 : n.toggle) === "dropdown" && !m(this, X).parentElement.className.includes("dropdown-hover") && this.toggle(m(this, X).parentElement, m(this, ue));
  }
  toggle(e, n) {
    e.className.includes("open") ? (this.hideMenu(n), e.className = e.className.replace(" open", "")) : (this.showMenu(n), e.className = e.className + " open");
  }
  showMenu(e) {
    this.clearMenu(), e.classList.add("block");
  }
  hideMenu(e) {
    e.classList.add("hidden");
  }
  clearMenu() {
    document.querySelectorAll(".dropdown-menu").forEach((n) => {
      n.classList.add("hidden"), n.parentElement && (n.parentElement.className = n.parentElement.className.replace(" open", ""));
    });
  }
}
X = new WeakMap(), ue = new WeakMap();
document.addEventListener("click", function(t) {
  t !== null && t.target instanceof HTMLElement && (t.target.dataset.toggle === "dropdown" ? new yt(t.target) : new yt(t).clearMenu());
});
var qe, M, jt, de, vt, Ot = {}, Ut = [], mn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function G(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ft(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function bt(t, e, n) {
  var s, i, o, l = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? qe.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      l[o] === void 0 && (l[o] = t.defaultProps[o]);
  return we(t, l, s, i, null);
}
function we(t, e, n, s, i) {
  var o = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++jt : i };
  return i == null && M.vnode != null && M.vnode(o), o;
}
function Ge(t) {
  return t.children;
}
function fe(t, e) {
  this.props = t, this.context = e;
}
function ae(t, e) {
  if (e == null)
    return t.__ ? ae(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ae(t) : null;
}
function Bt(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bt(t);
  }
}
function wt(t) {
  (!t.__d && (t.__d = !0) && de.push(t) && !Re.__r++ || vt !== M.debounceRendering) && ((vt = M.debounceRendering) || setTimeout)(Re);
}
function Re() {
  for (var t; Re.__r = de.length; )
    t = de.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), de = [], t.some(function(e) {
      var n, s, i, o, l, c;
      e.__d && (l = (o = (n = e).__v).__e, (c = n.__P) && (s = [], (i = G({}, o)).__v = o.__v + 1, Kt(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? ae(o) : l, o.__h), vn(s, o), o.__e != l && Bt(o)));
    });
}
function Yt(t, e, n, s, i, o, l, c, a, f) {
  var r, p, d, h, u, k, g, y = s && s.__k || Ut, v = y.length;
  for (n.__k = [], r = 0; r < e.length; r++)
    if ((h = n.__k[r] = (h = e[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? we(null, h, null, null, h) : Array.isArray(h) ? we(Ge, { children: h }, null, null, null) : h.__b > 0 ? we(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (d = y[r]) === null || d && h.key == d.key && h.type === d.type)
        y[r] = void 0;
      else
        for (p = 0; p < v; p++) {
          if ((d = y[p]) && h.key == d.key && h.type === d.type) {
            y[p] = void 0;
            break;
          }
          d = null;
        }
      Kt(t, h, d = d || Ot, i, o, l, c, a, f), u = h.__e, (p = h.ref) && d.ref != p && (g || (g = []), d.ref && g.push(d.ref, null, h), g.push(p, h.__c || u, h)), u != null ? (k == null && (k = u), typeof h.type == "function" && h.__k === d.__k ? h.__d = a = qt(h, a, t) : a = Gt(t, h, d, y, u, a), typeof n.type == "function" && (n.__d = a)) : a && d.__e == a && a.parentNode != t && (a = ae(d));
    }
  for (n.__e = k, r = v; r--; )
    y[r] != null && (typeof n.type == "function" && y[r].__e != null && y[r].__e == n.__d && (n.__d = ae(s, r + 1)), Xt(y[r], y[r]));
  if (g)
    for (r = 0; r < g.length; r++)
      Vt(g[r], g[++r], g[++r]);
}
function qt(t, e, n) {
  for (var s, i = t.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = t, e = typeof s.type == "function" ? qt(s, e, n) : Gt(n, s, s, i, s.__e, e));
  return e;
}
function Gt(t, e, n, s, i, o) {
  var l, c, a;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = o, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == i)
            break e;
        t.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function yn(t, e, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || Ce(t, o, null, n[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || Ce(t, o, e[o], n[o], s);
}
function kt(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mn.test(e) ? n : n + "px";
}
function Ce(t, e, n, s, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || kt(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || kt(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? s || t.addEventListener(e, o ? $t : St, o) : t.removeEventListener(e, o ? $t : St, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function St(t) {
  this.l[t.type + !1](M.event ? M.event(t) : t);
}
function $t(t) {
  this.l[t.type + !0](M.event ? M.event(t) : t);
}
function Kt(t, e, n, s, i, o, l, c, a) {
  var f, r, p, d, h, u, k, g, y, v, E, L, N, S = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, c = e.__e = n.__e, e.__h = null, o = [c]), (f = M.__b) && f(e);
  try {
    e:
      if (typeof S == "function") {
        if (g = e.props, y = (f = S.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, n.__c ? k = (r = e.__c = n.__c).__ = r.__E : ("prototype" in S && S.prototype.render ? e.__c = r = new S(g, v) : (e.__c = r = new fe(g, v), r.constructor = S, r.render = wn), y && y.sub(r), r.props = g, r.state || (r.state = {}), r.context = v, r.__n = s, p = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), S.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = G({}, r.__s)), G(r.__s, S.getDerivedStateFromProps(g, r.__s))), d = r.props, h = r.state, p)
          S.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && g !== d && r.componentWillReceiveProps != null && r.componentWillReceiveProps(g, v), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(g, r.__s, v) === !1 || e.__v === n.__v) {
            r.props = g, r.state = r.__s, e.__v !== n.__v && (r.__d = !1), r.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(W) {
              W && (W.__ = e);
            }), r.__h.length && l.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(g, r.__s, v), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(d, h, u);
          });
        }
        if (r.context = v, r.props = g, r.__v = e, r.__P = t, E = M.__r, L = 0, "prototype" in S && S.prototype.render)
          r.state = r.__s, r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++L < 25);
        r.state = r.__s, r.getChildContext != null && (s = G(G({}, s), r.getChildContext())), p || r.getSnapshotBeforeUpdate == null || (u = r.getSnapshotBeforeUpdate(d, h)), N = f != null && f.type === Ge && f.key == null ? f.props.children : f, Yt(t, Array.isArray(N) ? N : [N], e, n, s, i, o, l, c, a), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), k && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = bn(n.__e, e, n, s, i, o, l, a);
    (f = M.diffed) && f(e);
  } catch (W) {
    e.__v = null, (a || o != null) && (e.__e = c, e.__h = !!a, o[o.indexOf(c)] = null), M.__e(W, e, n);
  }
}
function vn(t, e) {
  M.__c && M.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      M.__e(s, n.__v);
    }
  });
}
function bn(t, e, n, s, i, o, l, c) {
  var a, f, r, p = n.props, d = e.props, h = e.type, u = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((a = o[u]) && "setAttribute" in a == !!h && (h ? a.localName === h : a.nodeType === 3)) {
        t = a, o[u] = null;
        break;
      }
  }
  if (t == null) {
    if (h === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), o = null, c = !1;
  }
  if (h === null)
    p === d || c && t.data === d || (t.data = d);
  else {
    if (o = o && qe.call(t.childNodes), f = (p = n.props || Ot).dangerouslySetInnerHTML, r = d.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (p = {}, u = 0; u < t.attributes.length; u++)
          p[t.attributes[u].name] = t.attributes[u].value;
      (r || f) && (r && (f && r.__html == f.__html || r.__html === t.innerHTML) || (t.innerHTML = r && r.__html || ""));
    }
    if (yn(t, d, p, i, c), r)
      e.__k = [];
    else if (u = e.props.children, Yt(t, Array.isArray(u) ? u : [u], e, n, s, i && h !== "foreignObject", o, l, o ? o[0] : n.__k && ae(n, 0), c), o != null)
      for (u = o.length; u--; )
        o[u] != null && Ft(o[u]);
    c || ("value" in d && (u = d.value) !== void 0 && (u !== t.value || h === "progress" && !u || h === "option" && u !== p.value) && Ce(t, "value", u, p.value, !1), "checked" in d && (u = d.checked) !== void 0 && u !== t.checked && Ce(t, "checked", u, p.checked, !1));
  }
  return t;
}
function Vt(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    M.__e(s, n);
  }
}
function Xt(t, e, n) {
  var s, i;
  if (M.unmount && M.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Vt(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        M.__e(o, e);
      }
    s.base = s.__P = null;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Xt(s[i], e, typeof t.type != "function");
  n || t.__e == null || Ft(t.__e), t.__e = t.__d = void 0;
}
function wn(t, e, n) {
  return this.constructor(t, n);
}
qe = Ut.slice, M = { __e: function(t, e, n, s) {
  for (var i, o, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, jt = 0, fe.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = G({}, this.state), typeof t == "function" && (t = t(G({}, n), this.props)), t && G(n, t), t != null && this.__v && (e && this.__h.push(e), wt(this));
}, fe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), wt(this));
}, fe.prototype.render = Ge, de = [], Re.__r = 0;
var J, Z;
class xt extends fe {
  constructor(n) {
    var s;
    super(n);
    A(this, J, 0);
    A(this, Z, null);
    $(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: s } = this.props, i = n.target;
      !i || !s || (typeof s == "string" && i.closest(s) || typeof s == "object") && this.scrollOffset((this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1)) && n.preventDefault();
    });
    $(this, "_handleMouseMove", (n) => {
      const { dragStart: s } = this.state;
      s && (m(this, J) && cancelAnimationFrame(m(this, J)), C(this, J, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - s.x : n.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), C(this, J, 0);
      })), n.preventDefault());
    });
    $(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    $(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    $(this, "_handleClick", (n) => {
      const s = n.currentTarget;
      if (!s)
        return;
      const i = s.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: c } = this.props, a = (o === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(a * c / l);
    });
    this.state = {
      scrollPos: (s = this.props.defaultScrollPos) != null ? s : 0,
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
    const { scrollSize: n, clientSize: s } = this.props;
    return Math.max(0, n - s);
  }
  get barSize() {
    const { clientSize: n, scrollSize: s, size: i = 10 } = this.props;
    return Math.max(Math.round(n * n / s), i);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (C(this, Z, typeof n == "string" ? document : n.current), m(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), m(this, Z) && m(this, Z).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: s } = this.props;
    s && s(n, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      scrollSize: n,
      clientSize: s,
      type: i,
      size: o = 10,
      className: l,
      style: c,
      left: a,
      top: f,
      bottom: r,
      right: p
    } = this.props, { maxScrollPos: d, scrollPos: h } = this, { dragStart: u } = this.state, k = {
      left: a,
      top: f,
      bottom: r,
      right: p,
      ...c
    }, g = {};
    return i === "horz" ? (k.height = o, k.width = s, g.width = Math.max(Math.round(s * s / n), o), g.left = Math.round(h * (s - g.width) / d)) : (k.width = o, k.height = s, g.height = this.barSize, g.top = Math.round(h * (s - g.height) / d)), /* @__PURE__ */ bt("div", {
      className: D("scrollbar", l, {
        "is-vert": i === "vert",
        "is-horz": i === "horz",
        "is-dragging": u
      }),
      style: k,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ bt("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
J = new WeakMap(), Z = new WeakMap();
function Ke({ col: t, className: e, height: n, rowID: s, hoverCol: i, rowData: o, onRenderCell: l, style: c, children: a, ...f }) {
  const { cellStyle: r, align: p, className: d } = t.setting, h = {
    left: t.left,
    width: t.realWidth,
    height: n,
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...c,
    ...r
  };
  let u = [
    a != null ? a : o == null ? void 0 : o[t.name]
  ];
  l && (u = l(u, s, t, o));
  const k = [], g = [];
  u == null || u.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? (v.html && g.push(/* @__PURE__ */ b("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: v.html }
    })), v.style && Object.assign(h, v.style), v.className && k.push(v.className)) : g.push(v);
  });
  const y = D("dtable-cell", e, {
    "dtable-col-hover": i
  }, d, k);
  return /* @__PURE__ */ b("div", {
    className: y,
    style: h,
    "data-col": t.name,
    ...f
  }, g);
}
function kn({ col: t, children: e, style: n, ...s }) {
  let { sortType: i } = t.setting;
  return i === !0 && (i = "none"), /* @__PURE__ */ b(Ke, {
    col: t,
    style: { ...n, ...t.setting.style },
    "data-sort": i || null,
    "data-type": t.type,
    ...s
  }, t.setting.title, i && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${i}`
  }), e);
}
function Ie({ rowID: t, className: e, top: n = 0, left: s = 0, width: i, height: o, cols: l, data: c, hoverCol: a, CellComponent: f = Ke, onRenderCell: r }) {
  return /* @__PURE__ */ b("div", {
    className: D("dtable-cells", e),
    style: { top: n, left: s, width: i, height: o }
  }, l.map((p) => p.visible ? /* @__PURE__ */ b(f, {
    key: p.name,
    col: p,
    hoverCol: a === p.name && p.setting.colHover !== !1,
    rowData: c,
    rowID: t,
    onRenderCell: r
  }) : null));
}
function Jt({
  rowID: t,
  className: e,
  top: n,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: c,
  scrollWidth: a,
  scrollWidthTotal: f,
  flexRightWidth: r,
  scrollLeft: p,
  CellComponent: d = Ke,
  onRenderCell: h,
  hoverCol: u,
  data: k
}) {
  let g = null;
  i != null && i.length && (g = /* @__PURE__ */ b(Ie, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    rowID: t,
    hoverCol: u,
    CellComponent: d,
    onRenderCell: h,
    data: k
  }));
  let y = null;
  l != null && l.length && (y = /* @__PURE__ */ b(Ie, {
    className: "dtable-flexable",
    cols: l,
    left: c - p,
    width: f,
    rowID: t,
    hoverCol: u,
    CellComponent: d,
    onRenderCell: h,
    data: k
  }));
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ b(Ie, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + a,
    width: r,
    rowID: t,
    hoverCol: u,
    CellComponent: d,
    onRenderCell: h,
    data: k
  }));
  const E = { top: n, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ b("div", {
    className: D("dtable-row", e),
    style: E,
    "data-id": t
  }, g, y, v);
}
function Sn({ height: t, onRenderRow: e, ...n }) {
  let s = {
    height: t,
    ...n,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: kn
  };
  return e && (s = e(s)), /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ b(Jt, {
    ...s
  }));
}
function $n({
  className: t,
  style: e,
  top: n,
  rows: s,
  height: i,
  rowHeight: o,
  onRenderRow: l,
  ...c
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ b("div", {
    className: D("dtable-rows", t),
    style: e
  }, s.map((a) => {
    let f = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      rowID: a.data.id,
      data: a.data,
      top: a.top,
      height: o,
      ...c
    };
    return l && (f = l(f, a)), /* @__PURE__ */ b(Jt, {
      ...f
    });
  }));
}
const Me = /* @__PURE__ */ new Map();
function Zt(t, e = !1) {
  if (!e && Me.has(t.name))
    throw new Error(`DTable: Plugin with name ${t.name} already exists`);
  Me.set(t.name, t);
}
function Ae(t, e = !1) {
  Zt(t, e);
  const n = (s) => {
    if (!s)
      return t;
    const { defaultOptions: i, ...o } = t;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = t, n;
}
function xn(t) {
  return Me.get(t);
}
function Qt(t) {
  return Me.delete(t);
}
function Rn(t) {
  var n;
  if (!((n = t == null ? void 0 : t.plugins) != null && n.length))
    return [];
  const { plugins: e } = t;
  return e.reduce((s, i) => {
    let o;
    return typeof i == "string" ? (o = xn(i), o || console.warn(`DTable: Cannot found plugin "${i}"`)) : typeof i == "function" ? o = i.plugin : typeof i == "object" ? o = i : console.warn("DTable: Invalid plugin", i), o && s.push(o), s;
  }, []);
}
function Cn(t, e) {
  return t.reduce((n, s) => {
    const { options: i, defaultOptions: o } = s;
    return o && (n = { ...o, ...n }), i && Object.assign(n, typeof i == "function" ? i(n) : i), n;
  }, e);
}
function Oe() {
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
var Q, B, x, ee, T, oe;
class Ue extends se {
  constructor(n) {
    super(n);
    $(this, "ref", At());
    A(this, Q, 0);
    A(this, B, !1);
    A(this, x, void 0);
    A(this, ee, void 0);
    A(this, T, []);
    A(this, oe, void 0);
    $(this, "_handleResize", () => {
      m(this, Q) && cancelAnimationFrame(m(this, Q)), C(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), C(this, Q, 0);
      }));
    });
    $(this, "_handleRenderRow", (n, s) => (m(this, x).onRenderRow && (n = m(this, x).onRenderRow.call(this, n, s)), m(this, T).forEach((i) => {
      i.onRenderRow && (n = i.onRenderRow.call(this, n, s));
    }), n));
    $(this, "_handleRenderHeaderRow", (n) => (m(this, x).onRenderHeaderRow && (n = m(this, x).onRenderHeaderRow.call(this, n)), m(this, T).forEach((s) => {
      s.onRenderHeaderRow && (n = s.onRenderHeaderRow.call(this, n));
    }), n));
    $(this, "_handleRenderCell", (n, s, i, o) => {
      const l = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return i.setting[l] && (n = i.setting[l].call(this, n, s, i, o)), m(this, x)[l] && (n = m(this, x)[l].call(this, n, s, i, o)), m(this, T).forEach((c) => {
        c[l] && (n = c[l].call(this, n, s, i, o));
      }), n;
    });
    $(this, "_handleScroll", (n, s) => {
      s === "horz" ? this.scrollLeft(n) : this.scrollTop(n);
    });
    $(this, "_handleClick", (n) => {
      var a, f, r, p, d, h, u, k;
      const s = n.target;
      if (!s)
        return;
      const i = s.closest(".dtable-row");
      if (!i)
        return;
      const o = s.closest(".dtable-cell"), l = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "", c = (f = i.getAttribute("data-id")) != null ? f : "";
      if (c === "HEADER")
        o && ((r = m(this, x).onHeaderCellClick) == null || r.call(this, n, { colName: l, element: o }), m(this, T).forEach((g) => {
          var y;
          (y = g.onHeaderCellClick) == null || y.call(this, n, { colName: l, element: o });
        }));
      else {
        const g = (p = m(this, oe)) == null ? void 0 : p.visibleRows.find((y) => y.data.id === c);
        if (o) {
          if (((d = m(this, x).onCellClick) == null ? void 0 : d.call(this, n, { colName: l, rowID: c, rowInfo: g, element: o, rowElement: i })) === !0)
            return;
          for (const y of m(this, T))
            if (((h = y.onCellClick) == null ? void 0 : h.call(this, n, { colName: l, rowID: c, rowInfo: g, element: o, rowElement: i })) === !0)
              return;
        }
        if (((u = m(this, x).onRowClick) == null ? void 0 : u.call(this, n, { rowID: c, rowInfo: g, element: i })) === !0)
          return;
        for (const y of m(this, T))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, n, { rowID: c, rowInfo: g, element: i })) === !0)
            return;
      }
    });
    $(this, "_handleMouseOver", (n) => {
      var l, c;
      const { colHover: s } = m(this, x);
      if (!s)
        return;
      const i = (l = n.target) == null ? void 0 : l.closest(".dtable-cell");
      if (!i || s === "header" && !i.closest(".dtable-header"))
        return;
      const o = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "";
      this.setState({ hoverCol: o });
    });
    $(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...Oe(), ...n };
    C(this, x, Object.freeze(s)), C(this, ee, Object.freeze(Rn(s))), m(this, ee).forEach((i) => {
      var o;
      (o = i.onCreate) == null || o.call(this, i);
    });
  }
  get options() {
    return m(this, x);
  }
  get plugins() {
    return m(this, T);
  }
  get layout() {
    return m(this, oe);
  }
  componentDidMount() {
    var n, s, i;
    m(this, B) ? this.forceUpdate() : this._afterRender(), (n = this.ref.current) == null || n.addEventListener("click", this._handleClick), (s = this.ref.current) == null || s.addEventListener("mouseover", this._handleMouseOver), (i = this.ref.current) == null || i.addEventListener("mouseleave", this._handleMouseLeave), m(this, x).responsive && window.addEventListener("resize", this._handleResize), m(this, T).forEach((o) => {
      var l;
      (l = o.onMounted) == null || l.call(this);
    });
  }
  componentDidUpdate() {
    m(this, B) && this._afterRender();
  }
  componentWillUnmount() {
    var n, s, i;
    (n = this.ref.current) == null || n.removeEventListener("click", this._handleClick), m(this, x).colHover && ((s = this.ref.current) == null || s.removeEventListener("mouseover", this._handleMouseOver), (i = this.ref.current) == null || i.removeEventListener("mouseleave", this._handleMouseLeave)), window.removeEventListener("resize", this._handleResize), m(this, T).forEach((o) => {
      var l;
      (l = o.onUnmounted) == null || l.call(this);
    });
  }
  scrollLeft(n) {
    this.setState({ scrollLeft: n }, () => {
      var s;
      (s = m(this, x).onScroll) == null || s.call(this, n, "horz");
    });
  }
  scrollTop(n) {
    this.setState({ scrollTop: n }, () => {
      var s;
      (s = m(this, x).onScroll) == null || s.call(this, n, "vert");
    });
  }
  getLayout() {
    var nt, st, ot;
    const n = Oe(), s = Cn(m(this, ee), { ...n, ...this.props }), i = m(this, ee).filter((_) => !_.when || _.when(s));
    C(this, T, Object.freeze(i)), i.forEach((_) => {
      var H;
      const w = (H = _.beforeLayout) == null ? void 0 : H.call(this, s);
      w && Object.assign(s, w);
    }), C(this, x, Object.freeze(s));
    const {
      data: o,
      header: l,
      footer: c,
      rowHeight: a = n.rowHeight,
      defaultColWidth: f = n.minColWidth,
      minColWidth: r = n.minColWidth,
      maxColWidth: p = n.maxColWidth
    } = s, d = l ? s.headerHeight || a : 0, h = c ? s.footerHeight || a : 0, u = (_, w, H) => (_ && (w && (_ = Math.max(w, _)), H && (_ = Math.min(H, _))), _), k = [], g = [], y = [];
    let v = 0, E = 0;
    (nt = s.cols) == null || nt.forEach((_) => {
      var it, rt, lt;
      if (_.hidden)
        return;
      _ = { ..._ };
      const { minWidth: w = r, maxWidth: H = p } = _, P = u((it = _.width) != null ? it : 0, w, H), F = (rt = _.flex) != null ? rt : 1, De = F * u(f, w, H), ne = {
        name: _.name,
        type: (lt = _.type) != null ? lt : "",
        setting: _,
        left: 0,
        flex: F,
        realWidth: P,
        flexWidth: De,
        visible: !0
      };
      _.fixed === "left" ? (ne.left = v, v += P, k.push(ne)) : _.fixed === "right" ? (ne.left = E, E += P, g.push(ne)) : y.push(ne), i.forEach((at) => {
        var ct, ht, dt;
        const me = (ht = at.colTypes) == null ? void 0 : ht[(ct = _.type) != null ? ct : ""];
        if (me) {
          const ft = typeof me == "function" ? me(_) : me;
          ft && Object.assign(_, ft);
        }
        (dt = at.onAddCol) == null || dt.call(this, ne);
      });
    });
    let L = s.width, N = 0;
    if (typeof L == "function" && (L = L()), L === "auto")
      N = v + E, y.forEach((_) => {
        _.realWidth || (_.realWidth = _.flexWidth), N += _.realWidth;
      });
    else if (L === "100%") {
      const _ = (st = this.ref.current) == null ? void 0 : st.parentElement;
      if (_)
        N = _.clientWidth;
      else {
        N = 0, C(this, B, !0);
        return;
      }
    } else
      N = L != null ? L : 0;
    const S = [], W = (_, w) => {
      var P, F;
      const H = { data: _, top: 0, id: _.id, index: S.length };
      if (S.push(H), ((P = s.onAddRow) == null ? void 0 : P.call(this, H, w)) !== !1) {
        for (const De of i)
          if (((F = De.onAddRow) == null ? void 0 : F.call(this, H, w)) === !1)
            return;
      }
    };
    if (Array.isArray(o))
      o.forEach(W);
    else if (o != null && o.length) {
      const _ = typeof o.length == "function" ? o.length() : o.length;
      for (let w = 0; w < _; w++)
        W(o.getItem(w), w);
    }
    const j = [];
    let ce = 0;
    S.forEach((_) => {
      var w, H;
      if (((w = s.rowFilter) == null ? void 0 : w.call(this, _)) !== !1) {
        for (const P of i)
          if (((H = P.rowFilter) == null ? void 0 : H.call(this, _)) === !1)
            return;
        _.index = j.length, _.top = ce, j.push(_), ce += a;
      }
    });
    let Le = !1;
    s.rowSorter && (j.sort(s.rowSorter.bind(this)), Le = !0), i.forEach((_) => {
      _.rowSorter && (j.sort(_.rowSorter.bind(this)), Le = !0);
    }), Le && j.forEach((_, w) => {
      _.index = w, _.top = w * a, j.push(_);
    });
    let O = s.height, K = 0;
    if (typeof O == "function" && (O = O()), O === "auto")
      K = d + h + ce;
    else if (typeof O == "object")
      K = Math.min(O.max, Math.max(O.min, d + h + ce));
    else if (O === "100%") {
      const _ = (ot = this.ref.current) == null ? void 0 : ot.parentElement;
      if (_)
        K = _.clientHeight;
      else {
        K = 0, C(this, B, !0);
        return;
      }
    } else
      K = O;
    const { scrollTop: ge = 0, scrollLeft: Te = 0, hoverCol: ln } = this.state, Xe = K - d - h, Je = ge + Xe, Ze = [], ze = N - v - E;
    let V = 0;
    const We = [];
    let Qe = 0;
    if (y.forEach((_) => {
      _.realWidth ? V += _.realWidth : (We.push(_), Qe += _.flex);
    }), We.length) {
      const _ = Math.max(0, ze - V);
      We.forEach((w) => {
        var F;
        const { minWidth: H = r, maxWidth: P = p } = w.setting;
        w.realWidth = Math.min(P, Math.max(H, Math.ceil(_ * ((F = w.flex) != null ? F : 1) / Qe))), V += w.realWidth;
      });
    }
    V = 0, y.forEach((_) => {
      _.left += V, V += _.realWidth, (_.left + _.realWidth < Te || _.left > Te + ze) && (_.visible = !1);
    });
    const et = Math.floor(ge / a), tt = Math.min(j.length, Math.ceil(Je / a));
    for (let _ = et; _ < tt; _++) {
      const w = j[_];
      w.top -= ge, Ze.push(w);
    }
    let te = {
      allRows: S,
      width: N,
      height: K,
      rows: j,
      visibleRows: Ze,
      rowHeight: a,
      rowsHeight: Xe,
      rowsHeightTotal: ce,
      hoverCol: ln,
      header: l,
      footer: c,
      headerHeight: d,
      footerHeight: h,
      colsInfo: {
        fixedLeftCols: k,
        fixedRightCols: g,
        scrollCols: y,
        flexLeftWidth: v,
        scrollWidth: ze,
        scrollWidthTotal: V,
        flexRightWidth: E
      },
      scrollBottom: Je,
      scrollTop: ge,
      scrollLeft: Te,
      startRowIndex: et,
      endRowIndex: tt
    };
    if (s.onLayout) {
      const _ = s.onLayout.call(this, te);
      _ && (te = _);
    }
    return i.forEach((_) => {
      if (_.onLayout) {
        const w = _.onLayout.call(this, te);
        w && (te = w);
      }
    }), C(this, oe, Object.freeze(te)), te;
  }
  getColInfo(n) {
    var i, o;
    const { layout: s } = this;
    if (!!s)
      return (o = (i = s.colsInfo.fixedLeftCols.find((l) => l.name === n)) != null ? i : s.colsInfo.fixedRightCols.find((l) => l.name === n)) != null ? o : s.colsInfo.scrollCols.find((l) => l.name === n);
  }
  renderHeader(n) {
    const { header: s, hoverCol: i, colsInfo: o, headerHeight: l } = n;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ b(Sn, {
        scrollLeft: this.state.scrollLeft,
        height: l,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: i,
        ...o
      });
    let c, a;
    if (typeof s == "function") {
      const f = s(n, this.state);
      typeof f == "object" && f && "__html" in f ? a = f : c = f;
    } else
      c = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: l },
      dangerouslySetInnerHTML: a
    }, c);
  }
  renderRows(n) {
    const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: l, hoverCol: c, colsInfo: a } = n;
    return /* @__PURE__ */ b($n, {
      top: s,
      height: i,
      rows: o,
      rowHeight: l,
      hoverCol: c,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...a
    });
  }
  renderFooter(n) {
    const { footer: s, footerHeight: i } = n;
    if (!s)
      return null;
    let o, l;
    if (typeof s == "function") {
      const c = s(n, this.state);
      typeof c == "object" && c && "__html" in c ? l = c : o = c;
    } else
      o = s;
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(n) {
    const s = [], { scrollLeft: i, colsInfo: o, scrollTop: l, rowsHeight: c, rowsHeightTotal: a } = n, { scrollWidthTotal: f, scrollWidth: r } = o, { scrollbarSize: p = 10, horzScrollbarPos: d } = this.props;
    return f > r && s.push(/* @__PURE__ */ b(xt, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: f,
      clientSize: r,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: d === "inside" ? 0 : -p,
      size: p,
      wheelContainer: this.ref
    })), a > c && s.push(/* @__PURE__ */ b(xt, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: a,
      clientSize: c,
      onScroll: this._handleScroll,
      right: 0,
      size: p,
      top: n.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var n;
    C(this, B, !1), (n = m(this, x).afterRender) == null || n.call(this), m(this, T).forEach((s) => {
      var i;
      return (i = s.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var p, d;
    const n = this.getLayout(), { className: s, rowHover: i, colHover: o, cellHover: l, bordered: c, striped: a, scrollbarHover: f } = (p = m(this, x)) != null ? p : this.props, r = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height };
    return /* @__PURE__ */ b("div", {
      className: D("dtable", s, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
        "dtable-hover-cell": l,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((d = n == null ? void 0 : n.scrollTop) != null ? d : 0) > 0,
        "scrollbar-hover": f
      }),
      style: r,
      ref: this.ref
    }, n && this.renderHeader(n), n && this.renderRows(n), n && this.renderFooter(n), n && this.renderScrollBars(n));
  }
}
Q = new WeakMap(), B = new WeakMap(), x = new WeakMap(), ee = new WeakMap(), T = new WeakMap(), oe = new WeakMap(), $(Ue, "addPlugin", Zt), $(Ue, "removePlugin", Qt);
class je {
  constructor(e, n) {
    $(this, "element");
    $(this, "options");
    $(this, "ref", At());
    var s;
    this.element = e, this.options = { ...Oe(), ...n }, (s = this.options.cols) != null && s.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), _n(/* @__PURE__ */ b(Ue, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
$(je, "NAME", "zui.dtable"), $(je, "definePlugin", Ae), $(je, "removePlugin", Qt);
function Mn(t, e) {
  var s, i;
  let n = (s = this.state.checkedRows) != null ? s : {};
  if (t === "HEADER")
    e === void 0 && (e = !en.call(this)), e ? (i = this.layout) == null || i.allRows.forEach((o) => {
      n[o.id] = !0;
    }) : n = {};
  else {
    const o = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[o[0]]), o.forEach((l) => {
      e ? n[l] = !0 : delete n[l];
    });
  }
  this.setState({ checkedRows: { ...n } });
}
function En(t) {
  const e = this.state.checkedRows;
  return e ? !!e[t] : !1;
}
function en() {
  var e;
  const t = this.state.checkedRows;
  return t ? Object.keys(t).length === ((e = this.layout) == null ? void 0 : e.allRows.length) : !1;
}
const tn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  onCreate() {
    this.toggleCheckRows = Mn.bind(this), this.isRowChecked = En.bind(this), this.isAllRowChecked = en.bind(this);
  },
  onRenderCell(t, e, n) {
    if (n.setting.checkbox) {
      const s = this.isRowChecked(e), i = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      t.unshift(i), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, e, n) {
    if (n.setting.checkbox) {
      const s = this.isAllRowChecked(), i = /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: s
      });
      t.unshift(i), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow(t, e) {
    return this.isRowChecked(e.id) && (t.className = D(t.className, "is-checked")), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"]');
    if (n)
      return this.toggleCheckRows("HEADER", n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    if (n.closest('input[type="checkbox"]') || this.options.checkOnClickRow)
      return this.toggleCheckRows(e);
  }
};
Ae(tn);
function Fe(t) {
  const e = this.nestedMap.get(t);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const l = Fe.call(this, o);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    o = l.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Fe.call(this, e.parent).level + 1 : 0, e;
}
function Nn(t, e) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  if (t === "HEADER")
    if (e === void 0 && (e = !nn.call(this)), e) {
      const i = this.nestedMap.entries();
      for (const [o, l] of i)
        l.state === "expanded" && (n[o] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((o) => {
      const l = this.nestedMap.get(o);
      e && (l == null ? void 0 : l.children) ? n[o] = !0 : delete n[o];
    });
  }
  this.setState({ collapsedRows: { ...n } });
}
function nn() {
  const t = this.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function sn(t, e = 0, n) {
  var s;
  n || (n = [...t.keys()]);
  for (const i of n) {
    const o = t.get(i);
    !o || typeof o.order == "number" || (o.order = e++, (s = o.children) != null && s.length && (e = sn(t, e, o.children)));
  }
  return e;
}
const on = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (t) => !!t.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = Nn.bind(this), this.isAllCollapsed = nn.bind(this), this.getNestedRowInfo = Fe.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(t) {
    var s, i, o;
    const e = t.data[(s = this.options.nestedParentKey) != null ? s : "parent"], n = (i = this.nestedMap.get(t.id)) != null ? i : {
      state: "",
      parent: e,
      level: 0
    };
    if (t.data[(o = this.options.asParentKey) != null ? o : "asParent"] && (n.children = []), this.nestedMap.set(t.id, n), e) {
      let l = this.nestedMap.get(e);
      l || (l = {
        state: "",
        level: 0
      }, this.nestedMap.set(e, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  rowFilter(t) {
    return this.getNestedRowInfo(t.id).state !== "hidden";
  },
  rowSorter(t, e) {
    var o, l;
    const n = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(e.id);
    typeof n.order != "number" && sn(this.nestedMap);
    const i = ((o = n.order) != null ? o : 0) - ((l = s.order) != null ? l : 0);
    return i === 0 ? t.index - e.index : i;
  },
  onRenderCell(t, e, n, s) {
    var l, c, a;
    const { nestedToggle: i } = n.setting, o = this.getNestedRowInfo(e);
    if (i && (o.children || o.parent) && t.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, o, e, n, s)) != null ? c : /* @__PURE__ */ b("button", {
      type: "button",
      className: "dtable-nested-toggle state",
      style: o.children ? void 0 : { visibility: "hidden" }
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), o.level) {
      let { nestedIndent: f = i } = n.setting;
      f && (f === !0 && (f = (a = this.options.nestedIndent) != null ? a : 12), t.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: f * o.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, e, n) {
    var s, i;
    return n.setting.nestedToggle && t.unshift((i = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, e, n, void 0)) != null ? i : /* @__PURE__ */ b("button", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow(t, e) {
    return t.className = D(t.className, `is-nested-${this.getNestedRowInfo(e.id).state}`), t;
  },
  onRenderHeaderRow(t) {
    return t.className = D(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
};
Ae(on);
function ve(t, ...e) {
  var n;
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const s = e[0];
    return Object.keys(s).forEach((i) => {
      var l;
      const o = (l = s[i]) != null ? l : 0;
      t = t.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), t;
  }
  for (let s = 0; s < e.length; s++) {
    const i = (n = e[s]) != null ? n : "";
    t = t.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
  }
  return t;
}
const U = 24 * 60 * 60 * 1e3, z = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), pe = (t, e = new Date()) => (t = z(t), e = z(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Rt = (t, e = new Date()) => z(t).getFullYear() === z(e).getFullYear(), Hn = (t, e = new Date()) => (t = z(t), e = z(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), In = (t, e = new Date()) => {
  t = z(t), e = z(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, jn = (t, e) => pe(z(e), t), On = (t, e) => pe(z(e).getTime() - U, t), Un = (t, e) => pe(z(e).getTime() + U, t), Fn = (t, e) => pe(z(e).getTime() - 2 * U, t), Be = (t, e = "yyyy-MM-dd hh:mm") => {
  t = z(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((s) => {
    if (new RegExp(`(${s})`).test(e)) {
      const i = `${n[s]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, Bn = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Be(t, Rt(t) ? s.month : s.full);
  if (pe(t, e))
    return i;
  const o = Be(e, Rt(t, e) ? Hn(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Yn = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - U * 7;
    case "oneMonth":
      return e - U * 31;
    case "threeMonth":
      return e - U * 31 * 3;
    case "halfYear":
      return e - U * 183;
    case "oneYear":
      return e - U * 365;
    case "twoYear":
      return e - 2 * (U * 365);
    default:
      return 0;
  }
}, Ct = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Ct(t, "day", n, s);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Ct(t, "day", n, s);
    case "week":
      t *= 7;
    case "day":
      t *= 24;
    case "hour":
      t *= 60;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? s + t : s - t;
};
const rn = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t) {
        return t[0] = {
          html: t[0]
        }, t;
      }
    },
    link: {
      onRenderCell(t, e, n, s) {
        const { linkTemplate: i = "", linkProps: o } = n.setting, l = ve(i, s);
        return t[0] = /* @__PURE__ */ b("a", {
          href: l,
          ...o
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, e, n, s) {
        const { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: l = `${n.name}Avatar` } = n.setting, c = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[l] : ""
        }));
        return i ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      onRenderCell(t, e, n) {
        const { circleSize: s = 24, circleBorderSize: i = 1, circleBgColor: o = "var(--color-border)", circleColor: l = "var(--color-green-500)" } = n.setting, c = (s - i) / 2, a = s / 2, f = t[0];
        return t[0] = /* @__PURE__ */ b("svg", {
          width: s,
          height: s
        }, /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r: c,
          "stroke-width": i,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r: c,
          "stroke-width": i,
          stroke: l,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * c * 2,
          "stroke-dashoffset": Math.PI * c * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: a,
          y: a + i,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${c}px` }
        }, Math.round(f))), t;
      }
    },
    actionButtons: {
      onRenderCell(t, e, n, s) {
        const i = s == null ? void 0 : s[n.name];
        if (!i)
          return t;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: l = {}, actionBtnClass: c = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: i.map((a) => {
            typeof a == "string" && (a = { action: a });
            const f = l[a.action];
            return f && (a = { className: c, ...f, ...a }), ve(o, a);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, e, n) {
        let { format: s } = n.setting;
        if (!s)
          return t;
        typeof s == "string" && (s = { type: "text", format: s });
        const { format: i, type: o } = s, l = t[0];
        return typeof i == "function" ? t[0] = o === "html" ? { html: i(l) } : i(l) : o === "datetime" ? t[0] = Be(l, i) : o === "html" ? t[0] = { html: ve(i, l) } : t[0] = ve(i, l), t;
      }
    }
  }
};
Ae(rn);
const qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: tn,
  nested: on,
  rich: rn
}, Symbol.toStringTag, { value: "Module" }));
let An = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var _e, Y, I, ie, re, ke;
const Ve = class {
  constructor(e, n = "local") {
    A(this, re);
    A(this, _e, void 0);
    A(this, Y, void 0);
    A(this, I, void 0);
    A(this, ie, void 0);
    C(this, _e, n), C(this, Y, `ZUI_STORE:${e != null ? e : An()}`), C(this, I, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, _e);
  }
  get session() {
    return this.type === "session" ? this : (m(this, ie) || C(this, ie, new Ve(m(this, Y), "session")), m(this, ie));
  }
  get(e, n) {
    const s = m(this, I).getItem(ye(this, re, ke).call(this, e));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : n;
  }
  set(e, n) {
    if (n == null)
      return this.remove(e);
    m(this, I).setItem(ye(this, re, ke).call(this, e), JSON.stringify(n));
  }
  remove(e) {
    m(this, I).removeItem(ye(this, re, ke).call(this, e));
  }
  each(e) {
    for (let n = 0; n < m(this, I).length; n++) {
      const s = m(this, I).key(n);
      if (s != null && s.startsWith(m(this, Y))) {
        const i = m(this, I).getItem(s);
        typeof i == "string" && e(s.substring(m(this, Y).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const e = {};
    return this.each((n, s) => {
      e[n] = s;
    }), e;
  }
};
let Ee = Ve;
_e = new WeakMap(), Y = new WeakMap(), I = new WeakMap(), ie = new WeakMap(), re = new WeakSet(), ke = function(e) {
  return `${m(this, Y)}:${e}`;
};
const Ln = new Ee("DEFAULT");
function Tn(t, e = "local") {
  return new Ee(t, e);
}
Object.assign(Ln, { create: Tn });
class Mt {
  constructor(e, n) {
    $(this, "$modal");
    $(this, "options");
    $(this, "reposTask", null);
    this.$modal = e, this.$modal && (this.options = n, n.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), n.type === "show" && n.position && this.adjustPosition(n.position, null), this.$modal.onclick = (s) => this.onClick(s), window.addEventListener("resize", () => {
      n.type === "show" && n.position && this.adjustPosition(n.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(e) {
    var n, s;
    (((n = e.target.dataset) == null ? void 0 : n.dismiss) === "modal" || ((s = e.target.parentElement.dataset) == null ? void 0 : s.dismiss) === "modal") && (this.onHide(this.$modal), e.stopPropagation());
  }
  lockScroll() {
    let e = 17;
    typeof window.innerWidth == "number" && (e = window.innerWidth - document.body.clientWidth), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
  }
  unlockScroll() {
    document.body.style.overflow = "", document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
  }
  onShow(e) {
    this.lockScroll(), e.classList.add("block");
  }
  onHide(e) {
    e && e.classList && (this.unlockScroll(), e.classList.remove("block"));
  }
  onClear(e) {
    document.querySelectorAll(".modal").forEach((s) => {
      (s.dataset.modalClosable !== "false" || e === "destory") && s.classList.remove("block");
    });
  }
  adjustPosition(e, n) {
    var c;
    if (clearTimeout(this.reposTask), n) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, e, 0), n);
      return;
    }
    if (e === void 0 && (e = this.options.position), e == null)
      return;
    const s = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!s)
      return;
    const i = window.innerHeight, o = Math.max(0, (i - s.clientHeight) / 2);
    let l = null;
    if (e === "fit" ? l = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : e === "center" ? l = `${o}px` : this.isPlainObject(e) || (l = e), s.setAttribute("style", `top: ${l}`), s.className.includes("-fullscreen")) {
      let a = null;
      if (((c = s.childNodes) == null ? void 0 : c.length) && s.childNodes.length === 1 ? a = s.childNodes[0] : a = s.childNodes[1], a) {
        const f = (a == null ? void 0 : a.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = a == null ? void 0 : a.getElementsByClassName("modal-body")[0], p = (a == null ? void 0 : a.getElementsByClassName("modal-footer")[0].clientHeight) || 0, d = i - f - p, h = r && r.scrollHeight > d ? "auto" : "visible";
        r && r.setAttribute("style", `max-height:${d}px;overflow:${h}`);
      }
    }
  }
  isPlainObject(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
}
document.addEventListener("click", (t) => {
  var e, n, s;
  if (t !== null && t.target instanceof HTMLElement)
    if (((e = t.target.dataset) == null ? void 0 : e.toggle) === "modal") {
      let i = t.target.dataset.target;
      if (t.target.localName === "a") {
        const c = ((n = t.target) == null ? void 0 : n.href) || "";
        i = c && c.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), l = {
        type: "show",
        position: ((s = t.target.dataset) == null ? void 0 : s.position) || "fit"
      };
      new Mt(o, l);
    } else
      t.target.parentElement.className.includes("modal") || new Mt(t, { type: "hide" }).onClear();
});
export {
  Wn as Avatar,
  je as DTable,
  xt as Scrollbar,
  U as TIME_DAY,
  Ct as calculateTimestamp,
  D as classes,
  z as createDate,
  Pn as domReady,
  qn as dtablePlugins,
  Be as formatDate,
  Bn as formatDateSpan,
  Yn as getTimeBeforeDesc,
  Fn as isDBY,
  pe as isSameDay,
  Hn as isSameMonth,
  In as isSameWeek,
  Rt as isSameYear,
  jn as isToday,
  Un as isTomorrow,
  On as isYesterday,
  Dn as selectText,
  Ln as store
};
