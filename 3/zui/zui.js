var Kt = Object.defineProperty;
var Qt = (n, t, e) => t in n ? Kt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var S = (n, t, e) => (Qt(n, typeof t != "symbol" ? t + "" : t, e), e), ze = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var m = (n, t, e) => (ze(n, t, "read from private field"), e ? e.call(n) : t.get(n)), L = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, E = (n, t, e, s) => (ze(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var be = (n, t, e) => (ze(n, t, "access private method"), e);
var Ae, x, Mt, _e, ct, Se = {}, Ct = [], en = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function q(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Ht(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function $(n, t, e) {
  var s, r, o, l = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? r = t[o] : l[o] = t[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ae.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      l[o] === void 0 && (l[o] = n.defaultProps[o]);
  return ve(n, l, s, r, null);
}
function ve(n, t, e, s, r) {
  var o = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Mt : r };
  return r == null && x.vnode != null && x.vnode(o), o;
}
function At() {
  return { current: null };
}
function Le(n) {
  return n.children;
}
function oe(n, t) {
  this.props = n, this.context = t;
}
function ae(n, t) {
  if (t == null)
    return n.__ ? ae(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? ae(n) : null;
}
function Lt(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Lt(n);
  }
}
function ht(n) {
  (!n.__d && (n.__d = !0) && _e.push(n) && !$e.__r++ || ct !== x.debounceRendering) && ((ct = x.debounceRendering) || setTimeout)($e);
}
function $e() {
  for (var n; $e.__r = _e.length; )
    n = _e.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), _e = [], n.some(function(t) {
      var e, s, r, o, l, h;
      t.__d && (l = (o = (e = t).__v).__e, (h = e.__P) && (s = [], (r = q({}, o)).__v = o.__v + 1, Ie(h, o, r, e.__n, h.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? ae(o) : l, o.__h), Wt(s, o), o.__e != l && Lt(o)));
    });
}
function Rt(n, t, e, s, r, o, l, h, c, p) {
  var i, g, _, a, d, b, f, y = s && s.__k || Ct, k = y.length;
  for (e.__k = [], i = 0; i < t.length; i++)
    if ((a = e.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ve(null, a, null, null, a) : Array.isArray(a) ? ve(Le, { children: a }, null, null, null) : a.__b > 0 ? ve(a.type, a.props, a.key, null, a.__v) : a) != null) {
      if (a.__ = e, a.__b = e.__b + 1, (_ = y[i]) === null || _ && a.key == _.key && a.type === _.type)
        y[i] = void 0;
      else
        for (g = 0; g < k; g++) {
          if ((_ = y[g]) && a.key == _.key && a.type === _.type) {
            y[g] = void 0;
            break;
          }
          _ = null;
        }
      Ie(n, a, _ = _ || Se, r, o, l, h, c, p), d = a.__e, (g = a.ref) && _.ref != g && (f || (f = []), _.ref && f.push(_.ref, null, a), f.push(g, a.__c || d, a)), d != null ? (b == null && (b = d), typeof a.type == "function" && a.__k === _.__k ? a.__d = c = Nt(a, c, n) : c = Tt(n, a, _, y, d, c), typeof e.type == "function" && (e.__d = c)) : c && _.__e == c && c.parentNode != n && (c = ae(_));
    }
  for (e.__e = b, i = k; i--; )
    y[i] != null && (typeof e.type == "function" && y[i].__e != null && y[i].__e == e.__d && (e.__d = ae(s, i + 1)), Dt(y[i], y[i]));
  if (f)
    for (i = 0; i < f.length; i++)
      zt(f[i], f[++i], f[++i]);
}
function Nt(n, t, e) {
  for (var s, r = n.__k, o = 0; r && o < r.length; o++)
    (s = r[o]) && (s.__ = n, t = typeof s.type == "function" ? Nt(s, t, e) : Tt(e, s, s, r, s.__e, t));
  return t;
}
function Tt(n, t, e, s, r, o) {
  var l, h, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || r != o || r.parentNode == null)
    e:
      if (o == null || o.parentNode !== n)
        n.appendChild(r), l = null;
      else {
        for (h = o, c = 0; (h = h.nextSibling) && c < s.length; c += 2)
          if (h == r)
            break e;
        n.insertBefore(r, o), l = o;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function tn(n, t, e, s, r) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || xe(n, o, null, e[o], s);
  for (o in t)
    r && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || xe(n, o, t[o], e[o], s);
}
function _t(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || en.test(t) ? e : e + "px";
}
function xe(n, t, e, s, r) {
  var o;
  e:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || _t(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || _t(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + o] = e, e ? s || n.addEventListener(t, o ? ft : dt, o) : n.removeEventListener(t, o ? ft : dt, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
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
function dt(n) {
  this.l[n.type + !1](x.event ? x.event(n) : n);
}
function ft(n) {
  this.l[n.type + !0](x.event ? x.event(n) : n);
}
function Ie(n, t, e, s, r, o, l, h, c) {
  var p, i, g, _, a, d, b, f, y, k, N, z, R, w = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, h = t.__e = e.__e, t.__h = null, o = [h]), (p = x.__b) && p(t);
  try {
    e:
      if (typeof w == "function") {
        if (f = t.props, y = (p = w.contextType) && s[p.__c], k = p ? y ? y.props.value : p.__ : s, e.__c ? b = (i = t.__c = e.__c).__ = i.__E : ("prototype" in w && w.prototype.render ? t.__c = i = new w(f, k) : (t.__c = i = new oe(f, k), i.constructor = w, i.render = sn), y && y.sub(i), i.props = f, i.state || (i.state = {}), i.context = k, i.__n = s, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = q({}, i.__s)), q(i.__s, w.getDerivedStateFromProps(f, i.__s))), _ = i.props, a = i.state, g)
          w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && f !== _ && i.componentWillReceiveProps != null && i.componentWillReceiveProps(f, k), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(f, i.__s, k) === !1 || t.__v === e.__v) {
            i.props = f, i.state = i.__s, t.__v !== e.__v && (i.__d = !1), i.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(f, i.__s, k), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(_, a, d);
          });
        }
        if (i.context = k, i.props = f, i.__v = t, i.__P = n, N = x.__r, z = 0, "prototype" in w && w.prototype.render)
          i.state = i.__s, i.__d = !1, N && N(t), p = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, N && N(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++z < 25);
        i.state = i.__s, i.getChildContext != null && (s = q(q({}, s), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(_, a)), R = p != null && p.type === Le && p.key == null ? p.props.children : p, Rt(n, Array.isArray(R) ? R : [R], t, e, s, r, o, l, h, c), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = nn(e.__e, t, e, s, r, o, l, c);
    (p = x.diffed) && p(t);
  } catch (H) {
    t.__v = null, (c || o != null) && (t.__e = h, t.__h = !!c, o[o.indexOf(h)] = null), x.__e(H, t, e);
  }
}
function Wt(n, t) {
  x.__c && x.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(s) {
        s.call(e);
      });
    } catch (s) {
      x.__e(s, e.__v);
    }
  });
}
function nn(n, t, e, s, r, o, l, h) {
  var c, p, i, g = e.props, _ = t.props, a = t.type, d = 0;
  if (a === "svg" && (r = !0), o != null) {
    for (; d < o.length; d++)
      if ((c = o[d]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        n = c, o[d] = null;
        break;
      }
  }
  if (n == null) {
    if (a === null)
      return document.createTextNode(_);
    n = r ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, _.is && _), o = null, h = !1;
  }
  if (a === null)
    g === _ || h && n.data === _ || (n.data = _);
  else {
    if (o = o && Ae.call(n.childNodes), p = (g = e.props || Se).dangerouslySetInnerHTML, i = _.dangerouslySetInnerHTML, !h) {
      if (o != null)
        for (g = {}, d = 0; d < n.attributes.length; d++)
          g[n.attributes[d].name] = n.attributes[d].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (tn(n, _, g, r, h), i)
      t.__k = [];
    else if (d = t.props.children, Rt(n, Array.isArray(d) ? d : [d], t, e, s, r && a !== "foreignObject", o, l, o ? o[0] : e.__k && ae(e, 0), h), o != null)
      for (d = o.length; d--; )
        o[d] != null && Ht(o[d]);
    h || ("value" in _ && (d = _.value) !== void 0 && (d !== n.value || a === "progress" && !d || a === "option" && d !== g.value) && xe(n, "value", d, g.value, !1), "checked" in _ && (d = _.checked) !== void 0 && d !== n.checked && xe(n, "checked", d, g.checked, !1));
  }
  return n;
}
function zt(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    x.__e(s, e);
  }
}
function Dt(n, t, e) {
  var s, r;
  if (x.unmount && x.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || zt(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        x.__e(o, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (r = 0; r < s.length; r++)
      s[r] && Dt(s[r], t, typeof n.type != "function");
  e || n.__e == null || Ht(n.__e), n.__e = n.__d = void 0;
}
function sn(n, t, e) {
  return this.constructor(n, e);
}
function on(n, t, e) {
  var s, r, o;
  x.__ && x.__(n, t), r = (s = typeof e == "function") ? null : e && e.__k || t.__k, o = [], Ie(t, n = (!s && e || t).__k = $(Le, null, [n]), r || Se, Se, t.ownerSVGElement !== void 0, !s && e ? [e] : r ? null : t.firstChild ? Ae.call(t.childNodes) : null, o, !s && e ? e : r ? r.__e : t.firstChild, s), Wt(o, n);
}
Ae = Ct.slice, x = { __e: function(n, t, e, s) {
  for (var r, o, l; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(n)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(n, s || {}), l = r.__d), l)
          return r.__E = r;
      } catch (h) {
        n = h;
      }
  throw n;
} }, Mt = 0, oe.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), typeof n == "function" && (n = n(q({}, e), this.props)), n && q(e, n), n != null && this.__v && (t && this.__h.push(t), ht(this));
}, oe.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ht(this));
}, oe.prototype.render = Le, _e = [], $e.__r = 0;
const O = (...n) => n.map((t) => Array.isArray(t) ? O(...t) : typeof t == "function" ? O(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const s = t[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class $n extends oe {
  render() {
    const { size: t, rounded: e, className: s, style: r, src: o, text: l, children: h, ...c } = this.props, p = [s], i = { ...r };
    let g = null;
    return o ? g = /* @__PURE__ */ $("img", {
      src: o,
      alt: l
    }) : g = l, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && p.push(`avatar-${t}`), typeof e == "string" && p.push(`rounded-${e}`), /* @__PURE__ */ $("div", {
      className: O(p),
      style: i,
      ...c
    }, g, h);
  }
}
function xn(n) {
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
function En(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
const rn = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: r, value: o } = s;
    t[r] = o;
  }), t;
};
class ln extends HTMLElement {
  constructor() {
    super();
    S(this, "$button");
    S(this, "$icon");
    S(this, "onClick");
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
    const e = rn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", ln);
var Z, ue;
class ut {
  constructor(t) {
    L(this, Z, void 0);
    L(this, ue, void 0);
    var e;
    E(this, Z, t), E(this, ue, t.nextElementSibling), ((e = m(this, Z).dataset) == null ? void 0 : e.toggle) === "dropdown" && !m(this, Z).parentElement.className.includes("dropdown-hover") && this.toggle(m(this, Z).parentElement, m(this, ue));
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
Z = new WeakMap(), ue = new WeakMap();
document.addEventListener("click", function(n) {
  n !== null && n.target instanceof HTMLElement && (n.target.dataset.toggle === "dropdown" ? new ut(n.target) : new ut(n).clearMenu());
});
var Ue, C, Pt, de, pt, jt = {}, It = [], an = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function G(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Ut(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function gt(n, t, e) {
  var s, r, o, l = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? r = t[o] : l[o] = t[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ue.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      l[o] === void 0 && (l[o] = n.defaultProps[o]);
  return we(n, l, s, r, null);
}
function we(n, t, e, s, r) {
  var o = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Pt : r };
  return r == null && C.vnode != null && C.vnode(o), o;
}
function Oe(n) {
  return n.children;
}
function fe(n, t) {
  this.props = n, this.context = t;
}
function ce(n, t) {
  if (t == null)
    return n.__ ? ce(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? ce(n) : null;
}
function Ot(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Ot(n);
  }
}
function mt(n) {
  (!n.__d && (n.__d = !0) && de.push(n) && !Ee.__r++ || pt !== C.debounceRendering) && ((pt = C.debounceRendering) || setTimeout)(Ee);
}
function Ee() {
  for (var n; Ee.__r = de.length; )
    n = de.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), de = [], n.some(function(t) {
      var e, s, r, o, l, h;
      t.__d && (l = (o = (e = t).__v).__e, (h = e.__P) && (s = [], (r = G({}, o)).__v = o.__v + 1, qt(h, o, r, e.__n, h.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? ce(o) : l, o.__h), hn(s, o), o.__e != l && Ot(o)));
    });
}
function Ft(n, t, e, s, r, o, l, h, c, p) {
  var i, g, _, a, d, b, f, y = s && s.__k || It, k = y.length;
  for (e.__k = [], i = 0; i < t.length; i++)
    if ((a = e.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? we(null, a, null, null, a) : Array.isArray(a) ? we(Oe, { children: a }, null, null, null) : a.__b > 0 ? we(a.type, a.props, a.key, null, a.__v) : a) != null) {
      if (a.__ = e, a.__b = e.__b + 1, (_ = y[i]) === null || _ && a.key == _.key && a.type === _.type)
        y[i] = void 0;
      else
        for (g = 0; g < k; g++) {
          if ((_ = y[g]) && a.key == _.key && a.type === _.type) {
            y[g] = void 0;
            break;
          }
          _ = null;
        }
      qt(n, a, _ = _ || jt, r, o, l, h, c, p), d = a.__e, (g = a.ref) && _.ref != g && (f || (f = []), _.ref && f.push(_.ref, null, a), f.push(g, a.__c || d, a)), d != null ? (b == null && (b = d), typeof a.type == "function" && a.__k === _.__k ? a.__d = c = Bt(a, c, n) : c = Yt(n, a, _, y, d, c), typeof e.type == "function" && (e.__d = c)) : c && _.__e == c && c.parentNode != n && (c = ce(_));
    }
  for (e.__e = b, i = k; i--; )
    y[i] != null && (typeof e.type == "function" && y[i].__e != null && y[i].__e == e.__d && (e.__d = ce(s, i + 1)), Vt(y[i], y[i]));
  if (f)
    for (i = 0; i < f.length; i++)
      Gt(f[i], f[++i], f[++i]);
}
function Bt(n, t, e) {
  for (var s, r = n.__k, o = 0; r && o < r.length; o++)
    (s = r[o]) && (s.__ = n, t = typeof s.type == "function" ? Bt(s, t, e) : Yt(e, s, s, r, s.__e, t));
  return t;
}
function Yt(n, t, e, s, r, o) {
  var l, h, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || r != o || r.parentNode == null)
    e:
      if (o == null || o.parentNode !== n)
        n.appendChild(r), l = null;
      else {
        for (h = o, c = 0; (h = h.nextSibling) && c < s.length; c += 2)
          if (h == r)
            break e;
        n.insertBefore(r, o), l = o;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function cn(n, t, e, s, r) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Me(n, o, null, e[o], s);
  for (o in t)
    r && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Me(n, o, t[o], e[o], s);
}
function yt(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || an.test(t) ? e : e + "px";
}
function Me(n, t, e, s, r) {
  var o;
  e:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || yt(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || yt(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + o] = e, e ? s || n.addEventListener(t, o ? vt : bt, o) : n.removeEventListener(t, o ? vt : bt, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
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
function bt(n) {
  this.l[n.type + !1](C.event ? C.event(n) : n);
}
function vt(n) {
  this.l[n.type + !0](C.event ? C.event(n) : n);
}
function qt(n, t, e, s, r, o, l, h, c) {
  var p, i, g, _, a, d, b, f, y, k, N, z, R, w = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, h = t.__e = e.__e, t.__h = null, o = [h]), (p = C.__b) && p(t);
  try {
    e:
      if (typeof w == "function") {
        if (f = t.props, y = (p = w.contextType) && s[p.__c], k = p ? y ? y.props.value : p.__ : s, e.__c ? b = (i = t.__c = e.__c).__ = i.__E : ("prototype" in w && w.prototype.render ? t.__c = i = new w(f, k) : (t.__c = i = new fe(f, k), i.constructor = w, i.render = dn), y && y.sub(i), i.props = f, i.state || (i.state = {}), i.context = k, i.__n = s, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = G({}, i.__s)), G(i.__s, w.getDerivedStateFromProps(f, i.__s))), _ = i.props, a = i.state, g)
          w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && f !== _ && i.componentWillReceiveProps != null && i.componentWillReceiveProps(f, k), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(f, i.__s, k) === !1 || t.__v === e.__v) {
            i.props = f, i.state = i.__s, t.__v !== e.__v && (i.__d = !1), i.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(f, i.__s, k), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(_, a, d);
          });
        }
        if (i.context = k, i.props = f, i.__v = t, i.__P = n, N = C.__r, z = 0, "prototype" in w && w.prototype.render)
          i.state = i.__s, i.__d = !1, N && N(t), p = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, N && N(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++z < 25);
        i.state = i.__s, i.getChildContext != null && (s = G(G({}, s), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(_, a)), R = p != null && p.type === Oe && p.key == null ? p.props.children : p, Ft(n, Array.isArray(R) ? R : [R], t, e, s, r, o, l, h, c), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = _n(e.__e, t, e, s, r, o, l, c);
    (p = C.diffed) && p(t);
  } catch (H) {
    t.__v = null, (c || o != null) && (t.__e = h, t.__h = !!c, o[o.indexOf(h)] = null), C.__e(H, t, e);
  }
}
function hn(n, t) {
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
function _n(n, t, e, s, r, o, l, h) {
  var c, p, i, g = e.props, _ = t.props, a = t.type, d = 0;
  if (a === "svg" && (r = !0), o != null) {
    for (; d < o.length; d++)
      if ((c = o[d]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        n = c, o[d] = null;
        break;
      }
  }
  if (n == null) {
    if (a === null)
      return document.createTextNode(_);
    n = r ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, _.is && _), o = null, h = !1;
  }
  if (a === null)
    g === _ || h && n.data === _ || (n.data = _);
  else {
    if (o = o && Ue.call(n.childNodes), p = (g = e.props || jt).dangerouslySetInnerHTML, i = _.dangerouslySetInnerHTML, !h) {
      if (o != null)
        for (g = {}, d = 0; d < n.attributes.length; d++)
          g[n.attributes[d].name] = n.attributes[d].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (cn(n, _, g, r, h), i)
      t.__k = [];
    else if (d = t.props.children, Ft(n, Array.isArray(d) ? d : [d], t, e, s, r && a !== "foreignObject", o, l, o ? o[0] : e.__k && ce(e, 0), h), o != null)
      for (d = o.length; d--; )
        o[d] != null && Ut(o[d]);
    h || ("value" in _ && (d = _.value) !== void 0 && (d !== n.value || a === "progress" && !d || a === "option" && d !== g.value) && Me(n, "value", d, g.value, !1), "checked" in _ && (d = _.checked) !== void 0 && d !== n.checked && Me(n, "checked", d, g.checked, !1));
  }
  return n;
}
function Gt(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    C.__e(s, e);
  }
}
function Vt(n, t, e) {
  var s, r;
  if (C.unmount && C.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Gt(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        C.__e(o, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (r = 0; r < s.length; r++)
      s[r] && Vt(s[r], t, typeof n.type != "function");
  e || n.__e == null || Ut(n.__e), n.__e = n.__d = void 0;
}
function dn(n, t, e) {
  return this.constructor(n, e);
}
Ue = It.slice, C = { __e: function(n, t, e, s) {
  for (var r, o, l; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(n)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(n, s || {}), l = r.__d), l)
          return r.__E = r;
      } catch (h) {
        n = h;
      }
  throw n;
} }, Pt = 0, fe.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = G({}, this.state), typeof n == "function" && (n = n(G({}, e), this.props)), n && G(e, n), n != null && this.__v && (t && this.__h.push(t), mt(this));
}, fe.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), mt(this));
}, fe.prototype.render = Oe, de = [], Ee.__r = 0;
var K, Q;
class wt extends fe {
  constructor(e) {
    var s;
    super(e);
    L(this, K, 0);
    L(this, Q, null);
    S(this, "_handleWheel", (e) => {
      var o;
      const { wheelContainer: s } = this.props, r = e.target;
      !r || !s || (typeof s == "string" && r.closest(s) || typeof s == "object") && (e.preventDefault(), this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1)));
    });
    S(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (m(this, K) && cancelAnimationFrame(m(this, K)), E(this, K, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + r * this.props.scrollSize / this.props.clientSize), E(this, K, 0);
      })), e.preventDefault());
    });
    S(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    S(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    S(this, "_handleClick", (e) => {
      const s = e.currentTarget;
      if (!s)
        return;
      const r = s.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: h } = this.props, c = (o === "horz" ? e.clientX - r.left : e.clientY - r.top) - this.barSize / 2;
      this.scroll(c * h / l);
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
    const { clientSize: e, scrollSize: s, size: r = 10 } = this.props;
    return Math.max(Math.round(e * e / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (E(this, Q, typeof e == "string" ? document : e.current), m(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), m(this, Q) && m(this, Q).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e !== this.scrollPos && (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)));
  }
  scrollOffset(e) {
    this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    var r;
    const { onScroll: s } = this.props;
    s && s(e, (r = this.props.type) != null ? r : "vert");
  }
  render() {
    const {
      scrollSize: e,
      clientSize: s,
      type: r,
      size: o = 10,
      className: l,
      style: h,
      left: c,
      top: p,
      bottom: i,
      right: g
    } = this.props, { maxScrollPos: _, scrollPos: a } = this, { dragStart: d } = this.state, b = {
      left: c,
      top: p,
      bottom: i,
      right: g,
      ...h
    }, f = {};
    return r === "horz" ? (b.height = o, b.width = s, f.width = Math.max(Math.round(s * s / e), o), f.left = Math.round(a * (s - f.width) / _)) : (b.width = o, b.height = s, f.height = this.barSize, f.top = Math.round(a * (s - f.height) / _)), /* @__PURE__ */ gt("div", {
      className: O("scrollbar", l, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": d
      }),
      style: b,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ gt("div", {
      className: "scrollbar-bar",
      style: f,
      onMouseDown: this._handleMouseDown
    }));
  }
}
K = new WeakMap(), Q = new WeakMap();
function Fe({ col: n, className: t, height: e, rowID: s, rowData: r, onRenderCell: o, style: l, children: h, ...c }) {
  const { cellStyle: p, align: i, className: g } = n.setting, _ = {
    left: n.left,
    width: n.realWidth,
    height: e,
    ...l,
    ...p
  };
  i && (_.justifyContent = i === "left" ? "start" : i === "right" ? "end" : i);
  let a = [
    h != null ? h : r == null ? void 0 : r[n.name]
  ];
  o && (a = o(a, s, n, r));
  const d = [], b = [];
  return a == null || a.forEach((f) => {
    typeof f == "object" && f && ("html" in f || "className" in f || "style" in f) ? (f.html && b.push(/* @__PURE__ */ $("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: f.html }
    })), f.style && Object.assign(_, f.style), f.className && d.push(f.className)) : b.push(f);
  }), /* @__PURE__ */ $("div", {
    className: O("dtable-cell", t, g, d),
    style: _,
    "data-col": n.name,
    ...c
  }, b);
}
function fn({ col: n, children: t, ...e }) {
  let { sortType: s } = n.setting;
  return s === !0 && (s = "none"), /* @__PURE__ */ $(Fe, {
    col: n,
    "data-sort": s || null,
    "data-type": n.type,
    ...e
  }, n.setting.title, s && /* @__PURE__ */ $("div", {
    className: `dtable-sort dtable-sort-${s}`
  }), t);
}
function De({ rowID: n, className: t, top: e = 0, left: s = 0, width: r, height: o, cols: l, data: h, CellComponent: c = Fe, onRenderCell: p }) {
  return /* @__PURE__ */ $("div", {
    className: O("dtable-cells", t),
    style: { top: e, left: s, width: r, height: o }
  }, l.map((i) => i.visible ? /* @__PURE__ */ $(c, {
    key: i.name,
    col: i,
    rowData: h,
    rowID: n,
    onRenderCell: p
  }) : null));
}
function Xt({
  rowID: n,
  className: t,
  top: e,
  height: s,
  fixedLeftCols: r,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: h,
  scrollWidth: c,
  scrollWidthTotal: p,
  flexRightWidth: i,
  scrollLeft: g,
  CellComponent: _ = Fe,
  onRenderCell: a,
  data: d
}) {
  let b = null;
  r != null && r.length && (b = /* @__PURE__ */ $(De, {
    className: "dtable-fixed-left",
    cols: r,
    width: h,
    rowID: n,
    CellComponent: _,
    onRenderCell: a,
    data: d
  }));
  let f = null;
  l != null && l.length && (f = /* @__PURE__ */ $(De, {
    className: "dtable-flexable",
    cols: l,
    left: h - g,
    width: p,
    rowID: n,
    CellComponent: _,
    onRenderCell: a,
    data: d
  }));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ $(De, {
    className: "dtable-fixed-right",
    cols: o,
    left: h + c,
    width: i,
    rowID: n,
    CellComponent: _,
    onRenderCell: a,
    data: d
  }));
  const k = { top: e, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ $("div", {
    className: O("dtable-row", t),
    style: k,
    "data-id": n
  }, b, f, y);
}
function un({ height: n, onRenderRow: t, ...e }) {
  let s = {
    height: n,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: fn
  };
  return t && (s = t(s)), /* @__PURE__ */ $("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ $(Xt, {
    ...s
  }));
}
function pn({
  className: n,
  style: t,
  top: e,
  rows: s,
  height: r,
  rowHeight: o,
  onRenderRow: l,
  ...h
}) {
  return t = { ...t, top: e, height: r }, /* @__PURE__ */ $("div", {
    className: O("dtable-rows", n),
    style: t
  }, s.map((c) => {
    let p = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.data.id,
      data: c.data,
      top: c.top,
      height: o,
      ...h
    };
    return l && (p = l(p, c)), /* @__PURE__ */ $(Xt, {
      ...p
    });
  }));
}
const Ce = /* @__PURE__ */ new Map();
function Jt(n, t = !1) {
  if (!t && Ce.has(n.name))
    throw new Error(`DTable: Plugin with name ${n.name} already exists`);
  Ce.set(n.name, n);
}
function gn(n) {
  return Ce.get(n);
}
function Zt(n) {
  return Ce.delete(n);
}
function mn(n) {
  var e;
  if (!((e = n == null ? void 0 : n.plugins) != null && e.length))
    return [];
  const { plugins: t } = n;
  return t.reduce((s, r) => {
    let o;
    return typeof r == "string" ? (o = gn(r), o || console.warn(`DTable: Cannot found plugin "${r}"`)) : typeof r == "function" ? o = r.plugin : typeof r == "object" ? o = r : console.warn("DTable: Invalid plugin", r), o && s.push(o), s;
  }, []);
}
function yn(n, t) {
  return n.reduce((e, s) => {
    const { options: r, defaultOptions: o } = s;
    return o && (e = { ...o, ...e }), r && Object.assign(e, typeof r == "function" ? r(e) : r), e;
  }, t);
}
function Pe() {
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
    scrollbarWidth: 10,
    rowHover: !0,
    colHover: !0,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    scrollbarSize: 10,
    horzScrollbarPos: "outside"
  };
}
var ee, B, M, te, T, ie;
class je extends oe {
  constructor(e) {
    super(e);
    S(this, "ref", At());
    L(this, ee, 0);
    L(this, B, !1);
    L(this, M, void 0);
    L(this, te, void 0);
    L(this, T, []);
    L(this, ie, void 0);
    S(this, "_handleResize", () => {
      m(this, ee) && cancelAnimationFrame(m(this, ee)), E(this, ee, requestAnimationFrame(() => {
        this.forceUpdate(), E(this, ee, 0);
      }));
    });
    S(this, "_handleRenderRow", (e, s) => (m(this, M).onRenderRow && (e = m(this, M).onRenderRow.call(this, e, s)), m(this, T).forEach((r) => {
      r.onRenderRow && (e = r.onRenderRow.call(this, e, s));
    }), e));
    S(this, "_handleRenderHeaderRow", (e) => (m(this, M).onRenderHeaderRow && (e = m(this, M).onRenderHeaderRow.call(this, e)), m(this, T).forEach((s) => {
      s.onRenderHeaderRow && (e = s.onRenderHeaderRow.call(this, e));
    }), e));
    S(this, "_handleRenderCell", (e, s, r, o) => {
      const l = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (e = r.setting[l].call(this, e, s, r, o)), m(this, M)[l] && (e = m(this, M)[l].call(this, e, s, r, o)), m(this, T).forEach((h) => {
        h[l] && (e = h[l].call(this, e, s, r, o));
      }), e;
    });
    S(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    S(this, "_handleClick", (e) => {
      var c, p, i, g, _, a, d, b;
      const s = e.target;
      if (!s)
        return;
      const r = s.closest(".dtable-row");
      if (!r)
        return;
      const o = s.closest(".dtable-cell"), l = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "", h = (p = r.getAttribute("data-id")) != null ? p : "";
      if (h === "HEADER")
        o && ((i = m(this, M).onHeaderCellClick) == null || i.call(this, e, { colName: l, element: o }), m(this, T).forEach((f) => {
          var y;
          (y = f.onHeaderCellClick) == null || y.call(this, e, { colName: l, element: o });
        }));
      else {
        const f = (g = m(this, ie)) == null ? void 0 : g.visibleRows.find((y) => y.data.id === h);
        if (o) {
          if (((_ = m(this, M).onCellClick) == null ? void 0 : _.call(this, e, { colName: l, rowID: h, rowInfo: f, element: o, rowElement: r })) === !0)
            return;
          for (const y of m(this, T))
            if (((a = y.onCellClick) == null ? void 0 : a.call(this, e, { colName: l, rowID: h, rowInfo: f, element: o, rowElement: r })) === !0)
              return;
        }
        if (((d = m(this, M).onRowClick) == null ? void 0 : d.call(this, e, { rowID: h, rowInfo: f, element: r })) === !0)
          return;
        for (const y of m(this, T))
          if (((b = y.onRowClick) == null ? void 0 : b.call(this, e, { rowID: h, rowInfo: f, element: r })) === !0)
            return;
      }
    });
    this.state = { scrollTop: 0, scrollLeft: 0, hiddenCols: {} };
    const s = { ...Pe(), ...e };
    E(this, M, Object.freeze(s)), E(this, te, Object.freeze(mn(s))), m(this, te).forEach((r) => {
      var o;
      (o = r.onCreate) == null || o.call(this, r);
    });
  }
  get options() {
    return m(this, M);
  }
  get plugins() {
    return m(this, T);
  }
  get layout() {
    return m(this, ie);
  }
  componentDidMount() {
    var e;
    m(this, B) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), m(this, M).responsive && window.addEventListener("resize", this._handleResize), m(this, T).forEach((s) => {
      var r;
      (r = s.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    m(this, B) && this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.ref.current) == null || e.removeEventListener("click", this._handleClick), window.removeEventListener("resize", this._handleResize), m(this, T).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = m(this, M).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = m(this, M).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ke, Qe, et;
    const e = Pe(), s = yn(m(this, te), { ...e, ...this.props }), r = m(this, te).filter((u) => !u.when || u.when(s));
    E(this, T, Object.freeze(r)), r.forEach((u) => {
      var A;
      const v = (A = u.beforeLayout) == null ? void 0 : A.call(this, s);
      v && Object.assign(s, v);
    }), E(this, M, Object.freeze(s));
    const {
      data: o,
      header: l,
      footer: h,
      rowHeight: c = e.rowHeight,
      defaultColWidth: p = e.minColWidth,
      minColWidth: i = e.minColWidth,
      maxColWidth: g = e.maxColWidth
    } = s, { scrollTop: _ = 0, scrollLeft: a = 0, hiddenCols: d = {} } = this.state, b = l ? s.headerHeight || c : 0, f = h ? s.footerHeight || c : 0, y = (u, v, A) => (u && (v && (u = Math.max(v, u)), A && (u = Math.min(A, u))), u), k = [], N = [], z = [];
    let R = 0, w = 0;
    (Ke = s.cols) == null || Ke.forEach((u) => {
      var tt, nt, st;
      if (u.hidden || d[u.name])
        return;
      const { minWidth: v = i, maxWidth: A = g } = u, D = y((tt = u.width) != null ? tt : 0, v, A), F = (nt = u.flex) != null ? nt : 1, We = F * y(p, v, A), se = {
        name: u.name,
        type: (st = u.type) != null ? st : "",
        setting: u,
        left: 0,
        flex: F,
        realWidth: D,
        flexWidth: We,
        visible: !0
      };
      u.fixed === "left" ? (se.left = R, R += D, k.push(se)) : u.fixed === "right" ? (se.left = w, w += D, N.push(se)) : z.push(se), r.forEach((ot) => {
        var it, rt, lt;
        const ye = (rt = ot.colTypes) == null ? void 0 : rt[(it = u.type) != null ? it : ""];
        if (ye) {
          const at = typeof ye == "function" ? ye(u) : ye;
          at && Object.assign(u, at);
        }
        (lt = ot.onAddCol) == null || lt.call(this, se);
      });
    });
    let H = s.width, V = 0;
    if (typeof H == "function" && (H = H()), H === "auto")
      V = R + w, z.forEach((u) => {
        u.realWidth || (u.realWidth = u.flexWidth), V += u.realWidth;
      });
    else if (H === "100%") {
      const u = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (u)
        V = u.clientWidth;
      else {
        V = 0, E(this, B, !0);
        return;
      }
    } else
      V = H != null ? H : 0;
    const me = [], Ye = (u, v) => {
      var D, F;
      const A = { data: u, top: 0, id: u.id, index: me.length };
      if (me.push(A), ((D = s.onAddRow) == null ? void 0 : D.call(this, A, v)) !== !1) {
        for (const We of r)
          if (((F = We.onAddRow) == null ? void 0 : F.call(this, A, v)) === !1)
            return;
      }
    };
    if (Array.isArray(o))
      o.forEach(Ye);
    else if (o != null && o.length) {
      const u = typeof o.length == "function" ? o.length() : o.length;
      for (let v = 0; v < u; v++)
        Ye(o.getItem(v), v);
    }
    const j = [];
    let he = 0;
    me.forEach((u) => {
      var v, A;
      if (((v = s.rowFilter) == null ? void 0 : v.call(this, u)) !== !1) {
        for (const D of r)
          if (((A = D.rowFilter) == null ? void 0 : A.call(this, u)) === !1)
            return;
        u.index = j.length, u.top = he, j.push(u), he += c;
      }
    });
    let Re = !1;
    s.rowSorter && (j.sort(s.rowSorter.bind(this)), Re = !0), r.forEach((u) => {
      u.rowSorter && (j.sort(u.rowSorter.bind(this)), Re = !0);
    }), Re && j.forEach((u, v) => {
      u.index = v, u.top = v * c, j.push(u);
    });
    let I = s.height, X = 0;
    if (typeof I == "function" && (I = I()), I === "auto")
      X = b + f + he;
    else if (typeof I == "object")
      X = Math.min(I.max, Math.max(I.min, b + f + he));
    else if (I === "100%") {
      const u = (et = this.ref.current) == null ? void 0 : et.parentElement;
      if (u)
        X = u.clientHeight;
      else {
        X = 0, E(this, B, !0);
        return;
      }
    } else
      X = I;
    const qe = X - b - f, Ge = _ + qe, Ve = [], Ne = V - R - w;
    let J = 0;
    const Te = [];
    let Xe = 0;
    if (z.forEach((u) => {
      u.realWidth ? J += u.realWidth : (Te.push(u), Xe += u.flex);
    }), Te.length) {
      const u = Math.max(0, Ne - J);
      Te.forEach((v) => {
        var F;
        const { minWidth: A = i, maxWidth: D = g } = v.setting;
        v.realWidth = Math.min(D, Math.max(A, Math.ceil(u * ((F = v.flex) != null ? F : 1) / Xe))), J += v.realWidth;
      });
    }
    J = 0, z.forEach((u) => {
      u.left += J, J += u.realWidth, (u.left + u.realWidth < a || u.left > a + Ne) && (u.visible = !1);
    });
    const Je = Math.floor(_ / c), Ze = Math.min(j.length, Math.ceil(Ge / c));
    for (let u = Je; u < Ze; u++) {
      const v = j[u];
      v.top -= _, Ve.push(v);
    }
    let ne = {
      allRows: me,
      width: V,
      height: X,
      rows: j,
      visibleRows: Ve,
      rowHeight: c,
      rowsHeight: qe,
      rowsHeightTotal: he,
      header: l,
      footer: h,
      headerHeight: b,
      footerHeight: f,
      colsInfo: {
        fixedLeftCols: k,
        fixedRightCols: N,
        scrollCols: z,
        flexLeftWidth: R,
        scrollWidth: Ne,
        scrollWidthTotal: J,
        flexRightWidth: w
      },
      scrollBottom: Ge,
      scrollTop: _,
      scrollLeft: a,
      startRowIndex: Je,
      endRowIndex: Ze
    };
    if (s.onLayout) {
      const u = s.onLayout.call(this, ne);
      u && (ne = u);
    }
    return r.forEach((u) => {
      if (u.onLayout) {
        const v = u.onLayout.call(this, ne);
        v && (ne = v);
      }
    }), E(this, ie, Object.freeze(ne)), ne;
  }
  getColInfo(e) {
    var r, o;
    const { layout: s } = this;
    if (!!s)
      return (o = (r = s.colsInfo.fixedLeftCols.find((l) => l.name === e)) != null ? r : s.colsInfo.fixedRightCols.find((l) => l.name === e)) != null ? o : s.colsInfo.scrollCols.find((l) => l.name === e);
  }
  renderHeader(e) {
    const { header: s, colsInfo: r, headerHeight: o } = e;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ $(un, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...r
      });
    let l, h;
    if (typeof s == "function") {
      const c = s(e, this.state);
      typeof c == "object" && c && "__html" in c ? h = c : l = c;
    } else
      l = s;
    return /* @__PURE__ */ $("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: h
    }, l);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: r, visibleRows: o, rowHeight: l, colsInfo: h } = e;
    return /* @__PURE__ */ $(pn, {
      top: s,
      height: r,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...h
    });
  }
  renderFooter(e) {
    const { footer: s, footerHeight: r } = e;
    if (!s)
      return null;
    let o, l;
    if (typeof s == "function") {
      const h = s(e, this.state);
      typeof h == "object" && h && "__html" in h ? l = h : o = h;
    } else
      o = s;
    return /* @__PURE__ */ $("div", {
      className: "dtable-footer",
      style: { height: r },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(e) {
    const s = [], { scrollLeft: r, colsInfo: o, scrollTop: l, rowsHeight: h, rowsHeightTotal: c } = e, { scrollWidthTotal: p, scrollWidth: i } = o, { scrollbarSize: g = 10, horzScrollbarPos: _ } = this.props;
    return p > i && s.push(/* @__PURE__ */ $(wt, {
      key: "horz",
      type: "horz",
      scrollPos: r,
      scrollSize: p,
      clientSize: i,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: _ === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })), c > h && s.push(/* @__PURE__ */ $(wt, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: c,
      clientSize: h,
      onScroll: this._handleScroll,
      right: 0,
      size: g,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    E(this, B, !1), (e = m(this, M).afterRender) == null || e.call(this), m(this, T).forEach((s) => {
      var r;
      return (r = s.afterRender) == null ? void 0 : r.call(this);
    });
  }
  render() {
    var g, _;
    const e = this.getLayout(), { className: s, rowHover: r, colHover: o, cellHover: l, bordered: h, striped: c, scrollbarHover: p } = (g = m(this, M)) != null ? g : this.props, i = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ $("div", {
      className: O("dtable", s, {
        "dtable-hover-row": r,
        "dtable-hover-col": o,
        "dtable-hover-cell": l,
        "dtable-bordered": h,
        "dtable-striped": c,
        "dtable-scrolled-down": ((_ = e == null ? void 0 : e.scrollTop) != null ? _ : 0) > 0,
        "scrollbar-hover": p
      }),
      style: i,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
ee = new WeakMap(), B = new WeakMap(), M = new WeakMap(), te = new WeakMap(), T = new WeakMap(), ie = new WeakMap(), S(je, "addPlugin", Jt), S(je, "removePlugin", Zt);
class kt {
  constructor(t, e) {
    S(this, "element");
    S(this, "options");
    S(this, "ref", At());
    var s;
    this.element = t, this.options = { ...Pe(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  render(t) {
    this.options = Object.assign(this.options, t), on(/* @__PURE__ */ $(je, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
S(kt, "addPlugin", Jt), S(kt, "removePlugin", Zt);
let bn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var pe, Y, P, re, le, ke;
const Be = class {
  constructor(t, e = "local") {
    L(this, le);
    L(this, pe, void 0);
    L(this, Y, void 0);
    L(this, P, void 0);
    L(this, re, void 0);
    E(this, pe, e), E(this, Y, `ZUI_STORE:${t != null ? t : bn()}`), E(this, P, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, pe);
  }
  get session() {
    return this.type === "session" ? this : (m(this, re) || E(this, re, new Be(m(this, Y), "session")), m(this, re));
  }
  get(t, e) {
    const s = m(this, P).getItem(be(this, le, ke).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    m(this, P).setItem(be(this, le, ke).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    m(this, P).removeItem(be(this, le, ke).call(this, t));
  }
  each(t) {
    for (let e = 0; e < m(this, P).length; e++) {
      const s = m(this, P).key(e);
      if (s != null && s.startsWith(m(this, Y))) {
        const r = m(this, P).getItem(s);
        typeof r == "string" && t(s.substring(m(this, Y).length + 1), JSON.parse(r));
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
let He = Be;
pe = new WeakMap(), Y = new WeakMap(), P = new WeakMap(), re = new WeakMap(), le = new WeakSet(), ke = function(t) {
  return `${m(this, Y)}:${t}`;
};
const vn = new He("DEFAULT");
function wn(n, t = "local") {
  return new He(n, t);
}
Object.assign(vn, { create: wn });
class St {
  constructor(t, e) {
    S(this, "$modal");
    S(this, "options");
    S(this, "reposTask", null);
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
    var h;
    if (clearTimeout(this.reposTask), e) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, t, 0), e);
      return;
    }
    if (t === void 0 && (t = this.options.position), t == null)
      return;
    const s = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!s)
      return;
    const r = window.innerHeight, o = Math.max(0, (r - s.clientHeight) / 2);
    let l = null;
    if (t === "fit" ? l = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : t === "center" ? l = `${o}px` : this.isPlainObject(t) || (l = t), s.setAttribute("style", `top: ${l}`), s.className.includes("-fullscreen")) {
      let c = null;
      if (((h = s.childNodes) == null ? void 0 : h.length) && s.childNodes.length === 1 ? c = s.childNodes[0] : c = s.childNodes[1], c) {
        const p = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, i = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], g = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, _ = r - p - g, a = i && i.scrollHeight > _ ? "auto" : "visible";
        i && i.setAttribute("style", `max-height:${_}px;overflow:${a}`);
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
      let r = n.target.dataset.target;
      if (n.target.localName === "a") {
        const h = ((e = n.target) == null ? void 0 : e.href) || "";
        r = h && h.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!r.length)
        return;
      const o = document.querySelector(r), l = {
        type: "show",
        position: ((s = n.target.dataset) == null ? void 0 : s.position) || "fit"
      };
      new St(o, l);
    } else
      n.target.parentElement.className.includes("modal") || new St(n, { type: "hide" }).onClear();
});
const U = 24 * 60 * 60 * 1e3, W = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), ge = (n, t = new Date()) => (n = W(n), t = W(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate()), $t = (n, t = new Date()) => W(n).getFullYear() === W(t).getFullYear(), kn = (n, t = new Date()) => (n = W(n), t = W(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Mn = (n, t = new Date()) => {
  n = W(n), t = W(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), r = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((r + 4) / 7);
}, Cn = (n, t) => ge(W(t), n), Hn = (n, t) => ge(W(t).getTime() - U, n), An = (n, t) => ge(W(t).getTime() + U, n), Ln = (n, t) => ge(W(t).getTime() - 2 * U, n), xt = (n, t = "yyyy-MM-dd hh:mm") => {
  n = W(n);
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
      const r = `${e[s]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Rn = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, r = xt(n, $t(n) ? s.month : s.full);
  if (ge(n, t))
    return r;
  const o = xt(t, $t(n, t) ? kn(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", r).replace("{1}", o);
}, Nn = (n) => {
  const t = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return t - U * 7;
    case "oneMonth":
      return t - U * 31;
    case "threeMonth":
      return t - U * 31 * 3;
    case "halfYear":
      return t - U * 183;
    case "oneYear":
      return t - U * 365;
    case "twoYear":
      return t - 2 * (U * 365);
    default:
      return 0;
  }
}, Et = (n, t, e = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return n *= 365, Et(n, "day", e, s);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, Et(n, "day", e, s);
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
export {
  $n as Avatar,
  kt as DTable,
  wt as Scrollbar,
  U as TIME_DAY,
  Et as calculateTimestamp,
  O as classes,
  W as createDate,
  En as domReady,
  xt as formatDate,
  Rn as formatDateSpan,
  Nn as getTimeBeforeDesc,
  Ln as isDBY,
  ge as isSameDay,
  kn as isSameMonth,
  Mn as isSameWeek,
  $t as isSameYear,
  Cn as isToday,
  An as isTomorrow,
  Hn as isYesterday,
  xn as selectText,
  vn as store
};
