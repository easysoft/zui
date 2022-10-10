var Jn = Object.defineProperty;
var Zn = (e, n, t) => n in e ? Jn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var H = (e, n, t) => (Zn(e, typeof n != "symbol" ? n + "" : n, t), t), pe = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (pe(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, E = (e, n, t, s) => (pe(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var z = (e, n, t) => (pe(e, n, "access private method"), t);
const Qn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: i, value: o } = s;
    n[i] = o;
  }), n;
};
class ts extends HTMLElement {
  constructor() {
    super();
    H(this, "$button");
    H(this, "$icon");
    H(this, "onClick");
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
    const t = Qn(this);
    if (t)
      for (const s in t)
        ["type", "size", "rounded", "outline"].includes(s) && this.addClass(this.$button, `-${t[s]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(t, s) {
    t && t.classList.add(s);
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
  attributeChangedCallback(t, s) {
    t === "isDisabled" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "loading" && this.$button && (s !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "icon" && this.$icon && s && this.addClass(this.$icon, `-${s}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", ts);
var ce, S, Qe, ye, Ct, ze, Bt = {}, tn = [], es = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function en(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function B(e, n, t) {
  var s, i, o, l = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : l[o] = n[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ce.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      l[o] === void 0 && (l[o] = e.defaultProps[o]);
  return Wt(e, l, s, i, null);
}
function Wt(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Qe : i };
  return i == null && S.vnode != null && S.vnode(o), o;
}
function ae(e) {
  return e.children;
}
function Pt(e, n) {
  this.props = e, this.context = n;
}
function pt(e, n) {
  if (n == null)
    return e.__ ? pt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? pt(e) : null;
}
function nn(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return nn(e);
  }
}
function Ie(e) {
  (!e.__d && (e.__d = !0) && Ct.push(e) && !Ot.__r++ || ze !== S.debounceRendering) && ((ze = S.debounceRendering) || setTimeout)(Ot);
}
function Ot() {
  for (var e; Ot.__r = Ct.length; )
    e = Ct.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), Ct = [], e.some(function(n) {
      var t, s, i, o, l, c;
      n.__d && (l = (o = (t = n).__v).__e, (c = t.__P) && (s = [], (i = tt({}, o)).__v = o.__v + 1, $e(c, o, i, t.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? pt(o) : l, o.__h), ln(s, o), o.__e != l && nn(o)));
    });
}
function sn(e, n, t, s, i, o, l, c, a, f) {
  var r, _, u, h, d, m, g, y = s && s.__k || tn, $ = y.length;
  for (t.__k = [], r = 0; r < n.length; r++)
    if ((h = t.__k[r] = (h = n[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? Wt(null, h, null, null, h) : Array.isArray(h) ? Wt(ae, { children: h }, null, null, null) : h.__b > 0 ? Wt(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = t, h.__b = t.__b + 1, (u = y[r]) === null || u && h.key == u.key && h.type === u.type)
        y[r] = void 0;
      else
        for (_ = 0; _ < $; _++) {
          if ((u = y[_]) && h.key == u.key && h.type === u.type) {
            y[_] = void 0;
            break;
          }
          u = null;
        }
      $e(e, h, u = u || Bt, i, o, l, c, a, f), d = h.__e, (_ = h.ref) && u.ref != _ && (g || (g = []), u.ref && g.push(u.ref, null, h), g.push(_, h.__c || d, h)), d != null ? (m == null && (m = d), typeof h.type == "function" && h.__k === u.__k ? h.__d = a = on(h, a, e) : a = rn(e, h, u, y, d, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = pt(u));
    }
  for (t.__e = m, r = $; r--; )
    y[r] != null && (typeof t.type == "function" && y[r].__e != null && y[r].__e == t.__d && (t.__d = pt(s, r + 1)), an(y[r], y[r]));
  if (g)
    for (r = 0; r < g.length; r++)
      cn(g[r], g[++r], g[++r]);
}
function on(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? on(s, n, t) : rn(t, s, s, i, s.__e, n));
  return n;
}
function rn(e, n, t, s, i, o) {
  var l, c, a;
  if (n.__d !== void 0)
    l = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = o, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == i)
            break t;
        e.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ns(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ut(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ut(e, o, n[o], t[o], s);
}
function Be(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || es.test(n) ? t : t + "px";
}
function Ut(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Be(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Be(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Ue : Oe, o) : e.removeEventListener(n, o ? Ue : Oe, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e)
        try {
          e[n] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || n[0] === "a" && n[1] === "r") ? e.setAttribute(n, t) : e.removeAttribute(n));
    }
}
function Oe(e) {
  this.l[e.type + !1](S.event ? S.event(e) : e);
}
function Ue(e) {
  this.l[e.type + !0](S.event ? S.event(e) : e);
}
function $e(e, n, t, s, i, o, l, c, a) {
  var f, r, _, u, h, d, m, g, y, $, C, x, A, v = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, o = [c]), (f = S.__b) && f(n);
  try {
    t:
      if (typeof v == "function") {
        if (g = n.props, y = (f = v.contextType) && s[f.__c], $ = f ? y ? y.props.value : f.__ : s, t.__c ? m = (r = n.__c = t.__c).__ = r.__E : ("prototype" in v && v.prototype.render ? n.__c = r = new v(g, $) : (n.__c = r = new Pt(g, $), r.constructor = v, r.render = os), y && y.sub(r), r.props = g, r.state || (r.state = {}), r.context = $, r.__n = s, _ = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), v.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = tt({}, r.__s)), tt(r.__s, v.getDerivedStateFromProps(g, r.__s))), u = r.props, h = r.state, _)
          v.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && g !== u && r.componentWillReceiveProps != null && r.componentWillReceiveProps(g, $), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(g, r.__s, $) === !1 || n.__v === t.__v) {
            r.props = g, r.state = r.__s, n.__v !== t.__v && (r.__d = !1), r.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(L) {
              L && (L.__ = n);
            }), r.__h.length && l.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(g, r.__s, $), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(u, h, d);
          });
        }
        if (r.context = $, r.props = g, r.__v = n, r.__P = e, C = S.__r, x = 0, "prototype" in v && v.prototype.render)
          r.state = r.__s, r.__d = !1, C && C(n), f = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, C && C(n), f = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++x < 25);
        r.state = r.__s, r.getChildContext != null && (s = tt(tt({}, s), r.getChildContext())), _ || r.getSnapshotBeforeUpdate == null || (d = r.getSnapshotBeforeUpdate(u, h)), A = f != null && f.type === ae && f.key == null ? f.props.children : f, sn(e, Array.isArray(A) ? A : [A], n, t, s, i, o, l, c, a), r.base = n.__e, n.__h = null, r.__h.length && l.push(r), m && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = ss(t.__e, n, t, s, i, o, l, a);
    (f = S.diffed) && f(n);
  } catch (L) {
    n.__v = null, (a || o != null) && (n.__e = c, n.__h = !!a, o[o.indexOf(c)] = null), S.__e(L, n, t);
  }
}
function ln(e, n) {
  S.__c && S.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      S.__e(s, t.__v);
    }
  });
}
function ss(e, n, t, s, i, o, l, c) {
  var a, f, r, _ = t.props, u = n.props, h = n.type, d = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; d < o.length; d++)
      if ((a = o[d]) && "setAttribute" in a == !!h && (h ? a.localName === h : a.nodeType === 3)) {
        e = a, o[d] = null;
        break;
      }
  }
  if (e == null) {
    if (h === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, u.is && u), o = null, c = !1;
  }
  if (h === null)
    _ === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && ce.call(e.childNodes), f = (_ = t.props || Bt).dangerouslySetInnerHTML, r = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (_ = {}, d = 0; d < e.attributes.length; d++)
          _[e.attributes[d].name] = e.attributes[d].value;
      (r || f) && (r && (f && r.__html == f.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""));
    }
    if (ns(e, u, _, i, c), r)
      n.__k = [];
    else if (d = n.props.children, sn(e, Array.isArray(d) ? d : [d], n, t, s, i && h !== "foreignObject", o, l, o ? o[0] : t.__k && pt(t, 0), c), o != null)
      for (d = o.length; d--; )
        o[d] != null && en(o[d]);
    c || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || h === "progress" && !d || h === "option" && d !== _.value) && Ut(e, "value", d, _.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && Ut(e, "checked", d, _.checked, !1));
  }
  return e;
}
function cn(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    S.__e(s, t);
  }
}
function an(e, n, t) {
  var s, i;
  if (S.unmount && S.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || cn(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        S.__e(o, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && an(s[i], n, typeof e.type != "function");
  t || e.__e == null || en(e.__e), e.__e = e.__d = void 0;
}
function os(e, n, t) {
  return this.constructor(e, t);
}
function is(e, n, t) {
  var s, i, o;
  S.__ && S.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], $e(n, e = (!s && t || n).__k = B(ae, null, [e]), i || Bt, Bt, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? ce.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), ln(o, e);
}
ce = tn.slice, S = { __e: function(e, n, t, s) {
  for (var i, o, l; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Qe = 0, ye = function(e) {
  return e != null && e.constructor === void 0;
}, Pt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof e == "function" && (e = e(tt({}, t), this.props)), e && tt(t, e), e != null && this.__v && (n && this.__h.push(n), Ie(this));
}, Pt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ie(this));
}, Pt.prototype.render = ae, Ct = [], Ot.__r = 0;
var ct, Rt;
class hn {
  constructor(n, t) {
    w(this, ct, void 0);
    w(this, Rt, void 0);
    E(this, Rt, typeof n == "string" ? document.querySelector(n) : n), E(this, ct, t), requestAnimationFrame(() => this.render());
  }
  get options() {
    return p(this, ct);
  }
  get element() {
    return p(this, Rt);
  }
  render(n) {
    Object.assign(p(this, ct), n);
    const { Component: t } = this;
    is(/* @__PURE__ */ B(t, {
      ...this.options
    }), this.element);
  }
}
ct = new WeakMap(), Rt = new WeakMap(), H(hn, "NAME");
const D = (...e) => e.map((n) => Array.isArray(n) ? D(...n) : typeof n == "function" ? D(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
function rs({
  rootClass: e,
  className: n,
  url: t,
  target: s,
  disabled: i,
  active: o,
  icon: l,
  title: c,
  trailingIcon: a,
  children: f,
  ...r
}) {
  return /* @__PURE__ */ B("li", {
    className: D(e)
  }, /* @__PURE__ */ B("a", {
    className: D("menu-item", n, { disabled: i, active: o, "has-icon": l }),
    href: t,
    target: s,
    ...r
  }, ye(l) ? l : typeof l == "string" ? /* @__PURE__ */ B("i", {
    class: `icon ${l}`
  }) : null, c, f, ye(a) ? a : typeof a == "string" ? /* @__PURE__ */ B("i", {
    class: `icon ${a}`
  }) : null));
}
function ls({ className: e }) {
  return /* @__PURE__ */ B("div", {
    class: D("menu-divider", e)
  });
}
function cs({ className: e, title: n, children: t, ...s }) {
  return /* @__PURE__ */ B("li", {
    class: D("menu-heading", e),
    ...s
  }, n, t);
}
function as({
  className: e,
  items: n,
  hasIcons: t,
  shadow: s = !0,
  rounded: i = !0,
  border: o = !0,
  children: l,
  onClickItem: c,
  ...a
}) {
  t === void 0 && (t = n == null ? void 0 : n.some((r) => "icon" in r));
  const f = (r, _, u, h) => {
    u && u.call(null, h), c && c(r, _, h);
  };
  return /* @__PURE__ */ B("menu", {
    class: D(
      "menu",
      e,
      t ? "has-icons" : "",
      s ? typeof s == "string" ? s : "shadow-lg" : "",
      i ? typeof i == "string" ? i : "rounded" : "",
      o ? "border" : ""
    ),
    ...a
  }, n == null ? void 0 : n.map((r, _) => {
    const { key: u, type: h, ...d } = r;
    if (h === "heading")
      return /* @__PURE__ */ B(cs, {
        ...d,
        key: u != null ? u : _
      });
    if (h === "divider")
      return /* @__PURE__ */ B(ls, {
        ...d,
        key: u != null ? u : _
      });
    const { onClick: m, ...g } = d;
    return /* @__PURE__ */ B(rs, {
      ...g,
      onClick: f.bind(null, r, _, m),
      key: u != null ? u : _
    });
  }), l);
}
class Vs extends hn {
  constructor() {
    super(...arguments);
    H(this, "Component", as);
  }
}
var he, M, fn, un, $t, Fe, Ft = {}, dn = [], hs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function _n(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function b(e, n, t) {
  var s, i, o, l = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : l[o] = n[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? he.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      l[o] === void 0 && (l[o] = e.defaultProps[o]);
  return jt(e, l, s, i, null);
}
function jt(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++fn : i };
  return i == null && M.vnode != null && M.vnode(o), o;
}
function pn() {
  return { current: null };
}
function fe(e) {
  return e.children;
}
function lt(e, n) {
  this.props = e, this.context = n;
}
function gt(e, n) {
  if (n == null)
    return e.__ ? gt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? gt(e) : null;
}
function gn(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return gn(e);
  }
}
function qe(e) {
  (!e.__d && (e.__d = !0) && $t.push(e) && !qt.__r++ || Fe !== M.debounceRendering) && ((Fe = M.debounceRendering) || setTimeout)(qt);
}
function qt() {
  for (var e; qt.__r = $t.length; )
    e = $t.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), $t = [], e.some(function(n) {
      var t, s, i, o, l, c;
      n.__d && (l = (o = (t = n).__v).__e, (c = t.__P) && (s = [], (i = et({}, o)).__v = o.__v + 1, Re(c, o, i, t.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, s, l == null ? gt(o) : l, o.__h), vn(s, o), o.__e != l && gn(o)));
    });
}
function yn(e, n, t, s, i, o, l, c, a, f) {
  var r, _, u, h, d, m, g, y = s && s.__k || dn, $ = y.length;
  for (t.__k = [], r = 0; r < n.length; r++)
    if ((h = t.__k[r] = (h = n[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? jt(null, h, null, null, h) : Array.isArray(h) ? jt(fe, { children: h }, null, null, null) : h.__b > 0 ? jt(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = t, h.__b = t.__b + 1, (u = y[r]) === null || u && h.key == u.key && h.type === u.type)
        y[r] = void 0;
      else
        for (_ = 0; _ < $; _++) {
          if ((u = y[_]) && h.key == u.key && h.type === u.type) {
            y[_] = void 0;
            break;
          }
          u = null;
        }
      Re(e, h, u = u || Ft, i, o, l, c, a, f), d = h.__e, (_ = h.ref) && u.ref != _ && (g || (g = []), u.ref && g.push(u.ref, null, h), g.push(_, h.__c || d, h)), d != null ? (m == null && (m = d), typeof h.type == "function" && h.__k === u.__k ? h.__d = a = mn(h, a, e) : a = bn(e, h, u, y, d, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = gt(u));
    }
  for (t.__e = m, r = $; r--; )
    y[r] != null && (typeof t.type == "function" && y[r].__e != null && y[r].__e == t.__d && (t.__d = gt(s, r + 1)), kn(y[r], y[r]));
  if (g)
    for (r = 0; r < g.length; r++)
      wn(g[r], g[++r], g[++r]);
}
function mn(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? mn(s, n, t) : bn(t, s, s, i, s.__e, n));
  return n;
}
function bn(e, n, t, s, i, o) {
  var l, c, a;
  if (n.__d !== void 0)
    l = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = o, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == i)
            break t;
        e.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function fs(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Kt(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Kt(e, o, n[o], t[o], s);
}
function Ke(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || hs.test(n) ? t : t + "px";
}
function Kt(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Ke(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Ke(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Ve : Ge, o) : e.removeEventListener(n, o ? Ve : Ge, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e)
        try {
          e[n] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || n[0] === "a" && n[1] === "r") ? e.setAttribute(n, t) : e.removeAttribute(n));
    }
}
function Ge(e) {
  this.l[e.type + !1](M.event ? M.event(e) : e);
}
function Ve(e) {
  this.l[e.type + !0](M.event ? M.event(e) : e);
}
function Re(e, n, t, s, i, o, l, c, a) {
  var f, r, _, u, h, d, m, g, y, $, C, x, A, v = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, o = [c]), (f = M.__b) && f(n);
  try {
    t:
      if (typeof v == "function") {
        if (g = n.props, y = (f = v.contextType) && s[f.__c], $ = f ? y ? y.props.value : f.__ : s, t.__c ? m = (r = n.__c = t.__c).__ = r.__E : ("prototype" in v && v.prototype.render ? n.__c = r = new v(g, $) : (n.__c = r = new lt(g, $), r.constructor = v, r.render = ds), y && y.sub(r), r.props = g, r.state || (r.state = {}), r.context = $, r.__n = s, _ = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), v.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = et({}, r.__s)), et(r.__s, v.getDerivedStateFromProps(g, r.__s))), u = r.props, h = r.state, _)
          v.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && g !== u && r.componentWillReceiveProps != null && r.componentWillReceiveProps(g, $), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(g, r.__s, $) === !1 || n.__v === t.__v) {
            r.props = g, r.state = r.__s, n.__v !== t.__v && (r.__d = !1), r.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(L) {
              L && (L.__ = n);
            }), r.__h.length && l.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(g, r.__s, $), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(u, h, d);
          });
        }
        if (r.context = $, r.props = g, r.__v = n, r.__P = e, C = M.__r, x = 0, "prototype" in v && v.prototype.render)
          r.state = r.__s, r.__d = !1, C && C(n), f = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, C && C(n), f = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++x < 25);
        r.state = r.__s, r.getChildContext != null && (s = et(et({}, s), r.getChildContext())), _ || r.getSnapshotBeforeUpdate == null || (d = r.getSnapshotBeforeUpdate(u, h)), A = f != null && f.type === fe && f.key == null ? f.props.children : f, yn(e, Array.isArray(A) ? A : [A], n, t, s, i, o, l, c, a), r.base = n.__e, n.__h = null, r.__h.length && l.push(r), m && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = us(t.__e, n, t, s, i, o, l, a);
    (f = M.diffed) && f(n);
  } catch (L) {
    n.__v = null, (a || o != null) && (n.__e = c, n.__h = !!a, o[o.indexOf(c)] = null), M.__e(L, n, t);
  }
}
function vn(e, n) {
  M.__c && M.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      M.__e(s, t.__v);
    }
  });
}
function us(e, n, t, s, i, o, l, c) {
  var a, f, r, _ = t.props, u = n.props, h = n.type, d = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; d < o.length; d++)
      if ((a = o[d]) && "setAttribute" in a == !!h && (h ? a.localName === h : a.nodeType === 3)) {
        e = a, o[d] = null;
        break;
      }
  }
  if (e == null) {
    if (h === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, u.is && u), o = null, c = !1;
  }
  if (h === null)
    _ === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && he.call(e.childNodes), f = (_ = t.props || Ft).dangerouslySetInnerHTML, r = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (_ = {}, d = 0; d < e.attributes.length; d++)
          _[e.attributes[d].name] = e.attributes[d].value;
      (r || f) && (r && (f && r.__html == f.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""));
    }
    if (fs(e, u, _, i, c), r)
      n.__k = [];
    else if (d = n.props.children, yn(e, Array.isArray(d) ? d : [d], n, t, s, i && h !== "foreignObject", o, l, o ? o[0] : t.__k && gt(t, 0), c), o != null)
      for (d = o.length; d--; )
        o[d] != null && _n(o[d]);
    c || ("value" in u && (d = u.value) !== void 0 && (d !== e.value || h === "progress" && !d || h === "option" && d !== _.value) && Kt(e, "value", d, _.value, !1), "checked" in u && (d = u.checked) !== void 0 && d !== e.checked && Kt(e, "checked", d, _.checked, !1));
  }
  return e;
}
function wn(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    M.__e(s, t);
  }
}
function kn(e, n, t) {
  var s, i;
  if (M.unmount && M.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || wn(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        M.__e(o, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && kn(s[i], n, typeof e.type != "function");
  t || e.__e == null || _n(e.__e), e.__e = e.__d = void 0;
}
function ds(e, n, t) {
  return this.constructor(e, t);
}
function _s(e, n, t) {
  var s, i, o;
  M.__ && M.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], Re(n, e = (!s && t || n).__k = b(fe, null, [e]), i || Ft, Ft, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? he.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), vn(o, e);
}
he = dn.slice, M = { __e: function(e, n, t, s) {
  for (var i, o, l; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, fn = 0, un = function(e) {
  return e != null && e.constructor === void 0;
}, lt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof e == "function" && (e = e(et({}, t), this.props)), e && et(t, e), e != null && this.__v && (n && this.__h.push(n), qe(this));
}, lt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qe(this));
}, lt.prototype.render = fe, $t = [], qt.__r = 0;
var ot, it;
class Ye extends lt {
  constructor(t) {
    var s;
    super(t);
    w(this, ot, 0);
    w(this, it, null);
    H(this, "_handleWheel", (t) => {
      var o;
      const { wheelContainer: s } = this.props, i = t.target;
      if (!(!i || !s) && (typeof s == "string" && i.closest(s) || typeof s == "object")) {
        const l = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(l) && t.preventDefault();
      }
    });
    H(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (p(this, ot) && cancelAnimationFrame(p(this, ot)), E(this, ot, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), E(this, ot, 0);
      })), t.preventDefault());
    });
    H(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    H(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    H(this, "_handleClick", (t) => {
      const s = t.currentTarget;
      if (!s)
        return;
      const i = s.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: c } = this.props, a = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(a * c / l), t.preventDefault();
    });
    this.state = {
      scrollPos: (s = this.props.defaultScrollPos) != null ? s : 0,
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
    t && (E(this, it, typeof t == "string" ? document : t.current), p(this, it).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, it) && p(this, it).removeEventListener("wheel", this._handleWheel);
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
    var i;
    const { onScroll: s } = this.props;
    s && s(t, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: i = 12,
      className: o,
      style: l,
      left: c,
      top: a,
      bottom: f,
      right: r
    } = this.props, { maxScrollPos: _, scrollPos: u } = this, { dragStart: h } = this.state, d = {
      left: c,
      top: a,
      bottom: f,
      right: r,
      ...l
    }, m = {};
    return s === "horz" ? (d.height = i, d.width = t, m.width = this.barSize, m.left = Math.round(Math.min(_, u) * (t - m.width) / _)) : (d.width = i, d.height = t, m.height = this.barSize, m.top = Math.round(Math.min(_, u) * (t - m.height) / _)), /* @__PURE__ */ b("div", {
      className: D("scrollbar", o, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": h
      }),
      style: d,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ot = new WeakMap(), it = new WeakMap();
function kt(e, ...n) {
  var t;
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const s = n[0];
    return Object.keys(s).forEach((i) => {
      var l;
      const o = (l = s[i]) != null ? l : 0;
      e = e.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), e;
  }
  for (let s = 0; s < n.length; s++) {
    const i = (t = n[s]) != null ? t : "";
    e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
  }
  return e;
}
var Ee = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ee || {});
function ps(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / Ee[t]).toFixed(n) + t);
}
const gs = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Ee[s];
};
function ys(e) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const s = document.createRange();
      return s.selectNodeContents(n), t.removeAllRanges(), t.addRange(s), !0;
    }
  }
  return !1;
}
function ms(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function bs(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= o && s.top + s.height <= i;
  const l = s.top <= i && s.top + s.height >= 0, c = s.left <= o && s.left + s.width >= 0;
  return l && c;
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: ys,
  domReady: ms,
  isElementVisible: bs,
  classes: D
}, Symbol.toStringTag, { value: "Module" }));
class Xs extends lt {
  render() {
    const { size: n, rounded: t, className: s, style: i, src: o, text: l, children: c, ...a } = this.props, f = [s], r = { ...i };
    let _ = null;
    return o ? _ = /* @__PURE__ */ b("img", {
      src: o,
      alt: l
    }) : _ = l, typeof n == "number" ? (r.width = n, r.height = n) : typeof n == "string" && f.push(`avatar-${n}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: D(f),
      style: r,
      ...a
    }, _, c);
  }
}
let Cn = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var Et, J, O, at, ht, zt;
const Se = class {
  constructor(n, t = "local") {
    w(this, ht);
    w(this, Et, void 0);
    w(this, J, void 0);
    w(this, O, void 0);
    w(this, at, void 0);
    E(this, Et, t), E(this, J, `ZUI_STORE:${n != null ? n : Cn()}`), E(this, O, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return p(this, Et);
  }
  get session() {
    return this.type === "session" ? this : (p(this, at) || E(this, at, new Se(p(this, J), "session")), p(this, at));
  }
  get(n, t) {
    const s = p(this, O).getItem(z(this, ht, zt).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    p(this, O).setItem(z(this, ht, zt).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    p(this, O).removeItem(z(this, ht, zt).call(this, n));
  }
  each(n) {
    for (let t = 0; t < p(this, O).length; t++) {
      const s = p(this, O).key(t);
      if (s != null && s.startsWith(p(this, J))) {
        const i = p(this, O).getItem(s);
        typeof i == "string" && n(s.substring(p(this, J).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const n = {};
    return this.each((t, s) => {
      n[t] = s;
    }), n;
  }
};
let Gt = Se;
Et = new WeakMap(), J = new WeakMap(), O = new WeakMap(), at = new WeakMap(), ht = new WeakSet(), zt = function(n) {
  return `${p(this, J)}:${n}`;
};
const vs = new Gt("DEFAULT");
function ws(e, n = "local") {
  return new Gt(e, n);
}
Object.assign(vs, { create: ws });
function ks() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Cs() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function $s(e, n) {
  ks(), e.classList.add("block"), Xe(e, n), e.onclick = (t) => Rs(t, e), window.addEventListener("resize", () => {
    Xe(e, n);
  });
}
function $n(e) {
  var n;
  Cs(), (n = e.classList) == null || n.remove("block");
}
function Xe(e, n) {
  const t = e.querySelector(".modal-dialog");
  if (!t)
    return;
  const s = Math.max(0, (window.innerHeight - t.clientHeight) / 2);
  if (n === "fit") {
    t.style.top = `${s > 50 ? Math.floor(s * 2 / 3) : s}px`;
    return;
  }
  if (n === "center") {
    t.style.top = `${s}px`;
    return;
  }
  t.style.top = n;
}
function Rs(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), $n(n));
}
function Es(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Es(t);
    if (!s)
      return;
    const i = document.querySelector(s);
    if (!i)
      return;
    $s(i, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && $n(n);
});
function Rn() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function xs(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Rn(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? xs(t) : Rn();
});
function Ss(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function xe({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: l, children: c, outerClass: a, ...f }) {
  var v, L;
  const r = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...l
  }, { align: _, border: u } = e.setting, h = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...e.setting.cellStyle,
    ...o
  }, d = ["dtable-cell", a, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], m = ["dtable-cell-content", n], g = [(L = c != null ? c : (v = s.data) == null ? void 0 : v[e.name]) != null ? L : ""], y = i ? i(g, { row: s, col: e }, b) : g, $ = [], C = [], x = {}, A = {};
  return y == null || y.forEach((R) => {
    var mt;
    if (typeof R == "object" && R && !un(R) && ("html" in R || "className" in R || "style" in R || "attrs" in R || "children" in R)) {
      const bt = R.outer ? $ : C;
      R.html ? bt.push(/* @__PURE__ */ b("div", {
        className: D("dtable-cell-html", R.className),
        style: R.style,
        dangerouslySetInnerHTML: { __html: R.html },
        ...(mt = R.attrs) != null ? mt : {}
      })) : (R.style && Object.assign(R.outer ? r : h, R.style), R.className && (R.outer ? d : m).push(R.className), R.children && bt.push(R.children), R.attrs && Object.assign(R.outer ? x : A, R.attrs));
    } else
      C.push(R);
  }), /* @__PURE__ */ b("div", {
    className: D(d),
    style: r,
    "data-col": e.name,
    ...f,
    ...x
  }, C.length > 0 && /* @__PURE__ */ b("div", {
    className: D(m),
    style: h,
    ...A
  }, C), $);
}
function Ms({ col: e, children: n, style: t, ...s }) {
  var o;
  const { sortType: i } = e.setting;
  return /* @__PURE__ */ b(xe, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": i || null,
    "data-type": e.type,
    ...s
  }, (o = e.setting.title) != null ? o : e.setting.name, i && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), n);
}
function ge({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: l, CellComponent: c = xe, onRenderCell: a }) {
  return /* @__PURE__ */ b("div", {
    className: D("dtable-cells", n),
    style: { top: t, left: s, width: i, height: o }
  }, l.map((f) => f.visible ? /* @__PURE__ */ b(c, {
    key: f.name,
    col: f,
    row: e,
    onRenderCell: a
  }) : null));
}
function En({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: a,
  scrollColsWidth: f,
  fixedRightWidth: r,
  scrollLeft: _,
  CellComponent: u = xe,
  onRenderCell: h,
  style: d,
  ...m
}) {
  let g = null;
  i != null && i.length && (g = /* @__PURE__ */ b(ge, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: h
  }));
  let y = null;
  l != null && l.length && (y = /* @__PURE__ */ b(ge, {
    className: "dtable-flexable",
    cols: l,
    left: c - _,
    width: f,
    row: e,
    CellComponent: u,
    onRenderCell: h
  }));
  let $ = null;
  o != null && o.length && ($ = /* @__PURE__ */ b(ge, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + a,
    width: r,
    row: e,
    CellComponent: u,
    onRenderCell: h
  }));
  const C = { top: t, height: s, lineHeight: `${s - 2}px`, ...d };
  return /* @__PURE__ */ b("div", {
    className: D("dtable-row", n),
    style: C,
    "data-id": e.id,
    ...m
  }, g, y, $);
}
function As({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Ms
  };
  if (n) {
    const i = n({ props: s }, b);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ b(En, {
    ...s
  }));
}
function Hs({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: i,
  rowHeight: o,
  scrollTop: l,
  onRenderRow: c,
  ...a
}) {
  return n = { ...n, top: t, height: i }, /* @__PURE__ */ b("div", {
    className: D("dtable-rows", e),
    style: n
  }, s.map((f) => {
    const r = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - l,
      height: o,
      ...a
    }, _ = c == null ? void 0 : c({ props: r, row: f }, b);
    return _ && Object.assign(r, _), /* @__PURE__ */ b(En, {
      ...r
    });
  }));
}
const Vt = /* @__PURE__ */ new Map(), Yt = [];
function xn(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Vt.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Vt.set(t, e), (n == null ? void 0 : n.buildIn) && !Yt.includes(t) && Yt.push(t);
}
function Lt(e, n) {
  xn(e, n);
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
function Sn(e) {
  return Vt.delete(e);
}
function Ls(e) {
  if (typeof e == "string") {
    const n = Vt.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Mn(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Ls(s);
    !i || t.has(i.name) || ((o = i.plugins) != null && o.length && Mn(e, i.plugins, t), e.push(i), t.add(i.name));
  }), e;
}
function Ns(e = [], n = !0) {
  return n && Yt.length && e.unshift(...Yt), e != null && e.length ? Mn([], e, /* @__PURE__ */ new Set()) : [];
}
function Je() {
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
var rt, ft, Z, Y, Q, W, U, F, ut, xt, X, dt, _t, Jt, An, Zt, Hn, Qt, Ln, te, Nn, St, be, ee, ne, Mt, At, se, oe, ie, Dn, re, Tn, le, Wn;
class me extends lt {
  constructor(t) {
    var s;
    super(t);
    w(this, Jt);
    w(this, Zt);
    w(this, Qt);
    w(this, te);
    w(this, St);
    w(this, ie);
    w(this, re);
    w(this, le);
    H(this, "ref", pn());
    w(this, rt, 0);
    w(this, ft, void 0);
    w(this, Z, !1);
    w(this, Y, void 0);
    w(this, Q, void 0);
    w(this, W, []);
    w(this, U, void 0);
    w(this, F, /* @__PURE__ */ new Map());
    w(this, ut, {});
    w(this, xt, void 0);
    H(this, "updateLayout", () => {
      p(this, rt) && cancelAnimationFrame(p(this, rt)), E(this, rt, requestAnimationFrame(() => {
        E(this, U, void 0), this.forceUpdate(), E(this, rt, 0);
      }));
    });
    w(this, X, (t, s) => {
      s = s || t.type;
      const i = p(this, F).get(s);
      if (!!(i != null && i.length)) {
        for (const o of i)
          if (o.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, dt, (t) => {
      p(this, X).call(this, t, `window_${t.type}`);
    });
    w(this, _t, (t) => {
      p(this, X).call(this, t, `document_${t.type}`);
    });
    w(this, ee, (t, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, t, s);
        i && Object.assign(t.props, i);
      }
      return p(this, W).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, t, s);
          o && Object.assign(t.props, o);
        }
      }), t.props;
    });
    w(this, ne, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, W).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, Mt, (t, s, i) => {
      const { row: o, col: l } = s;
      t[0] = this.getCellValue(o, l);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (t = l.setting[c].call(this, t, s, i)), this.options[c] && (t = this.options[c].call(this, t, s, i)), p(this, W).forEach((a) => {
        a[c] && (t = a[c].call(this, t, s, i));
      }), t;
    });
    w(this, At, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, se, (t) => {
      var c, a, f, r, _;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: l } = s;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, t, { colName: o, element: l }), p(this, W).forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, t, { colName: o, element: l });
        }));
      else {
        const { rowElement: u } = s, h = this.layout.visibleRows.find((d) => d.id === i);
        if (l) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: o, rowID: i, rowInfo: h, element: l, rowElement: u })) === !0)
            return;
          for (const d of p(this, W))
            if (((f = d.onCellClick) == null ? void 0 : f.call(this, t, { colName: o, rowID: i, rowInfo: h, element: l, rowElement: u })) === !0)
              return;
        }
        if (((r = this.options.onRowClick) == null ? void 0 : r.call(this, t, { rowID: i, rowInfo: h, element: u })) === !0)
          return;
        for (const d of p(this, W))
          if (((_ = d.onRowClick) == null ? void 0 : _.call(this, t, { rowID: i, rowInfo: h, element: u })) === !0)
            return;
      }
    });
    w(this, oe, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    E(this, ft, (s = t.id) != null ? s : `dtable-${Cn(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, E(this, Q, Object.freeze(Ns(t.plugins))), p(this, Q).forEach((i) => {
      var a;
      const { methods: o, data: l, state: c } = i;
      o && Object.entries(o).forEach(([f, r]) => {
        typeof r == "function" && Object.assign(this, { [f]: r.bind(this) });
      }), l && Object.assign(p(this, ut), l.call(this)), c && Object.assign(this.state, c.call(this)), (a = i.onCreate) == null || a.call(this, i);
    });
  }
  get options() {
    var t;
    return ((t = p(this, U)) == null ? void 0 : t.options) || p(this, Y) || Je();
  }
  get plugins() {
    return p(this, W);
  }
  get layout() {
    return p(this, U);
  }
  get id() {
    return p(this, ft);
  }
  get data() {
    return p(this, ut);
  }
  get parent() {
    var t, s;
    return (s = this.props.parent) != null ? s : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    E(this, Y, void 0);
  }
  componentDidMount() {
    if (p(this, Z) ? this.forceUpdate() : z(this, St, be).call(this), p(this, W).forEach((t) => {
      let { events: s } = t;
      !s || (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, se)), this.on("keydown", p(this, oe)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), E(this, xt, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    p(this, W).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    p(this, Z) ? z(this, St, be).call(this) : p(this, W).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, xt)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, F).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, dt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, _t)) : t.removeEventListener(i, p(this, X));
    p(this, W).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Q).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), E(this, ut, {}), p(this, F).clear();
  }
  on(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, F).get(t);
    o ? o.push(s) : (p(this, F).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, dt)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, _t)) : (l = this.ref.current) == null || l.addEventListener(t, p(this, X)));
  }
  off(t, s, i) {
    var c;
    i && (t = `${i}_${t}`);
    const o = p(this, F).get(t);
    if (!o)
      return;
    const l = o.indexOf(s);
    l >= 0 && o.splice(l, 1), o.length || (p(this, F).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, dt)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, _t)) : (c = this.ref.current) == null || c.removeEventListener(t, p(this, X)));
  }
  emitCustomEvent(t, s) {
    p(this, X).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: l, rowsHeight: c, rowHeight: a, colsInfo: { scrollWidth: f, scrollColsWidth: r } } = this.layout, { to: _ } = t;
    let { scrollLeft: u, scrollTop: h } = t;
    if (_ === "up" || _ === "down")
      h = o + (_ === "down" ? 1 : -1) * Math.floor(c / a) * a;
    else if (_ === "left" || _ === "right")
      u = i + (_ === "right" ? 1 : -1) * f;
    else if (_ === "home")
      h = 0;
    else if (_ === "end")
      h = l - c;
    else if (_ === "left-begin")
      u = 0;
    else if (_ === "right-end")
      u = r - f;
    else {
      const { offsetLeft: m, offsetTop: g } = t;
      typeof m == "number" && (u = i + m), typeof g == "number" && (u = o + g);
    }
    const d = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, r - f)), u !== i && (d.scrollLeft = u)), typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== o && (d.scrollTop = h)), Object.keys(d).length ? (this.setState(d, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, d), s == null || s.call(this, !0);
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
    var a, f;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof s == "object" ? s : this.getColInfo(s);
    if (!o)
      return;
    let l = i.id === "HEADER" ? (a = o.setting.title) != null ? a : o.setting.name : (f = i.data) == null ? void 0 : f[o.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, o, l)), l;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    const { dirtyType: i, state: o } = t;
    i === "layout" ? E(this, U, void 0) : i === "options" && (E(this, U, void 0), E(this, Y, void 0)), o ? this.setState({ ...o }, s) : this.forceUpdate(s);
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
    const l = i == null ? void 0 : i.getAttribute("data-col"), c = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: i,
        rowElement: o,
        colName: l,
        rowID: c,
        target: s
      };
  }
  render() {
    var h;
    const t = z(this, le, Wn).call(this), { className: s, rowHover: i, colHover: o, cellHover: l, bordered: c, striped: a, scrollbarHover: f } = this.options, r = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, _ = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": a,
      "dtable-scrolled-down": ((h = t == null ? void 0 : t.scrollTop) != null ? h : 0) > 0,
      "scrollbar-hover": f
    }], u = [];
    return t && p(this, W).forEach((d) => {
      var g;
      const m = (g = d.onRender) == null ? void 0 : g.call(this, t);
      !m || (m.style && Object.assign(r, m.style), m.className && _.push(m.className), m.children && u.push(m.children));
    }), /* @__PURE__ */ b("div", {
      id: p(this, ft),
      className: D(_),
      style: r,
      ref: this.ref,
      tabIndex: -1
    }, t && z(this, Jt, An).call(this, t), t && z(this, Zt, Hn).call(this, t), t && z(this, Qt, Ln).call(this, t), t && z(this, te, Nn).call(this, t));
  }
}
rt = new WeakMap(), ft = new WeakMap(), Z = new WeakMap(), Y = new WeakMap(), Q = new WeakMap(), W = new WeakMap(), U = new WeakMap(), F = new WeakMap(), ut = new WeakMap(), xt = new WeakMap(), X = new WeakMap(), dt = new WeakMap(), _t = new WeakMap(), Jt = new WeakSet(), An = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: l } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(As, {
      scrollLeft: l,
      height: o,
      onRenderCell: p(this, Mt),
      onRenderRow: p(this, ne),
      ...i
    });
  let c, a;
  if (typeof s == "function") {
    const f = s(t, this.state);
    typeof f == "object" && f && "__html" in f ? a = f : c = f;
  } else
    c = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: o },
    dangerouslySetInnerHTML: a
  }, c);
}, Zt = new WeakSet(), Hn = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: l, colsInfo: c, scrollLeft: a, scrollTop: f } = t;
  return /* @__PURE__ */ b(Hs, {
    top: s,
    height: i,
    rows: o,
    rowHeight: l,
    scrollLeft: a,
    scrollTop: f,
    onRenderCell: p(this, Mt),
    onRenderRow: p(this, ee),
    ...c
  });
}, Qt = new WeakSet(), Ln = function(t) {
  const { footer: s, footerHeight: i } = t;
  if (!s)
    return null;
  let o, l;
  if (typeof s == "function") {
    const c = s(t, this.state);
    typeof c == "object" && c && "__html" in c ? l = c : o = c;
  } else
    o = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-footer",
    style: { height: i },
    dangerouslySetInnerHTML: l
  }, o);
}, te = new WeakSet(), Nn = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: l, rowsHeight: c, rowsHeightTotal: a } = t, { scrollColsWidth: f, scrollWidth: r } = o, { scrollbarSize: _ = 12, horzScrollbarPos: u } = this.options;
  return f > r && s.push(
    /* @__PURE__ */ b(Ye, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: f,
      clientSize: r,
      onScroll: p(this, At),
      left: o.fixedLeftWidth,
      bottom: u === "inside" ? 0 : -_,
      size: _,
      wheelContainer: this.ref
    })
  ), a > c && s.push(
    /* @__PURE__ */ b(Ye, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: a,
      clientSize: c,
      onScroll: p(this, At),
      right: 0,
      size: _,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), s.length ? s : null;
}, St = new WeakSet(), be = function() {
  var t;
  E(this, Z, !1), (t = this.options.afterRender) == null || t.call(this), p(this, W).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, ee = new WeakMap(), ne = new WeakMap(), Mt = new WeakMap(), At = new WeakMap(), se = new WeakMap(), oe = new WeakMap(), ie = new WeakSet(), Dn = function() {
  if (p(this, Y))
    return !1;
  const s = { ...Je(), ...p(this, Q).reduce((i, o) => {
    const { defaultOptions: l } = o;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return E(this, Y, s), E(this, W, p(this, Q).reduce((i, o) => {
    const { when: l, options: c } = o;
    return (!l || l(s)) && (i.push(o), c && Object.assign(s, typeof c == "function" ? c.call(this, s) : c)), i;
  }, [])), !0;
}, re = new WeakSet(), Tn = function() {
  var Le, Ne;
  const { plugins: t } = this;
  let s = p(this, Y);
  t.forEach((k) => {
    var P;
    const T = (P = k.beforeLayout) == null ? void 0 : P.call(this, s);
    T && (s = { ...s, ...T });
  });
  const { defaultColWidth: i, minColWidth: o, maxColWidth: l } = s, c = [], a = [], f = [], r = {}, _ = [], u = [];
  let h = 0, d = 0, m = 0;
  s.cols.forEach((k) => {
    if (k.hidden)
      return;
    const {
      name: T,
      type: P = "",
      fixed: V = !1,
      flex: st = !1,
      width: wt = i,
      minWidth: Nt = o,
      maxWidth: De = l,
      ...Yn
    } = k, Xn = Ss(wt, Nt, De), N = {
      name: T,
      type: P,
      setting: {
        name: T,
        type: P,
        fixed: V,
        flex: st,
        width: wt,
        minWidth: Nt,
        maxWidth: De,
        ...Yn
      },
      flex: V ? 0 : st === !0 ? 1 : typeof st == "number" ? st : 0,
      left: 0,
      width: Xn,
      realWidth: 0,
      visible: !0,
      index: _.length
    };
    t.forEach((Te) => {
      var We, Pe;
      const Dt = (We = Te.colTypes) == null ? void 0 : We[P];
      if (Dt) {
        const je = typeof Dt == "function" ? Dt(N) : Dt;
        je && Object.assign(N.setting, je);
      }
      (Pe = Te.onAddCol) == null || Pe.call(this, N);
    }), N.realWidth = N.realWidth || N.width, V === "left" ? (N.left = h, h += N.width, c.push(N)) : V === "right" ? (N.left = d, d += N.width, a.push(N)) : (N.left = m, m += N.width, f.push(N)), N.flex && u.push(N), _.push(N), r[N.name] = N;
  });
  let g = s.width, y = 0;
  const $ = h + m + d;
  if (typeof g == "function" && (g = g.call(this, $)), g === "auto")
    y = $;
  else if (g === "100%") {
    const { parent: k } = this;
    if (k)
      y = k.clientWidth;
    else {
      y = 0, E(this, Z, !0);
      return;
    }
  } else
    y = g != null ? g : 0;
  const { data: C, rowKey: x = "id", rowHeight: A } = s, v = [], L = (k, T, P) => {
    var st, wt;
    const V = { data: P != null ? P : { [x]: k }, id: k, index: v.length, top: 0 };
    if (P || (V.lazy = !0), v.push(V), ((st = s.onAddRow) == null ? void 0 : st.call(this, V, T)) !== !1) {
      for (const Nt of t)
        if (((wt = Nt.onAddRow) == null ? void 0 : wt.call(this, V, T)) === !1)
          return;
    }
  };
  if (typeof C == "number")
    for (let k = 0; k < C; k++)
      L(`${k}`, k);
  else
    Array.isArray(C) && C.forEach((k, T) => {
      var P;
      typeof k == "object" ? L(`${(P = k[x]) != null ? P : ""}`, T, k) : L(`${k != null ? k : ""}`, T);
    });
  let R = v;
  const mt = {};
  if (s.onAddRows) {
    const k = s.onAddRows.call(this, R);
    k && (R = k);
  }
  for (const k of t) {
    const T = (Le = k.onAddRows) == null ? void 0 : Le.call(this, R);
    T && (R = T);
  }
  R.forEach((k, T) => {
    mt[k.id] = k, k.index = T, k.top = k.index * A;
  });
  const { header: bt, footer: Me } = s, ue = bt ? s.headerHeight || A : 0, de = Me ? s.footerHeight || A : 0;
  let G = s.height, nt = 0;
  const Ae = R.length * A, _e = ue + de + Ae;
  if (typeof G == "function" && (G = G.call(this, _e)), G === "auto")
    nt = _e;
  else if (typeof G == "object")
    nt = Math.min(G.max, Math.max(G.min, _e));
  else if (G === "100%") {
    const { parent: k } = this;
    if (k)
      nt = k.clientHeight;
    else {
      nt = 0, E(this, Z, !0);
      return;
    }
  } else
    nt = G;
  const Gn = nt - ue - de, Vn = y - h - d, vt = {
    options: s,
    allRows: v,
    width: y,
    height: nt,
    rows: R,
    rowsMap: mt,
    rowHeight: A,
    rowsHeight: Gn,
    rowsHeightTotal: Ae,
    header: bt,
    footer: Me,
    headerHeight: ue,
    footerHeight: de,
    colsMap: r,
    colsList: _,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: a,
      scrollCols: f,
      fixedLeftWidth: h,
      scrollWidth: Vn,
      scrollColsWidth: m,
      fixedRightWidth: d
    }
  }, He = (Ne = s.onLayout) == null ? void 0 : Ne.call(this, vt);
  He && Object.assign(vt, He), t.forEach((k) => {
    if (k.onLayout) {
      const T = k.onLayout.call(this, vt);
      T && Object.assign(vt, T);
    }
  }), E(this, U, vt);
}, le = new WeakSet(), Wn = function() {
  (z(this, ie, Dn).call(this) || !p(this, U)) && z(this, re, Tn).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: l, scrollColsWidth: c } } = t;
  if (i.length) {
    const C = l - c;
    if (C > 0) {
      const x = i.reduce((v, L) => v + L.flex, 0);
      let A = 0;
      i.forEach((v) => {
        const L = Math.min(C - A, Math.ceil(C * (v.flex / x)));
        v.realWidth = L + v.width, A += v.realWidth;
      });
    } else
      i.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  s = Math.min(Math.max(0, c - l), s);
  let a = 0;
  o.forEach((C) => {
    C.left = a, a += C.realWidth, C.visible = C.left + C.realWidth >= s && C.left <= s + l;
  });
  const { rowsHeightTotal: f, rowsHeight: r, rows: _, rowHeight: u } = t, h = Math.min(Math.max(0, f - r), this.state.scrollTop), d = Math.floor(h / u), m = h + r, g = Math.min(_.length, Math.ceil(m / u)), y = [], { rowDataGetter: $ } = this.options;
  for (let C = d; C < g; C++) {
    const x = _[C];
    x.lazy && $ && (x.data = $([x.id])[0], x.lazy = !1), y.push(x);
  }
  return t.visibleRows = y, t.scrollTop = h, t.scrollLeft = s, t;
}, H(me, "addPlugin", xn), H(me, "removePlugin", Sn);
function Ze(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const Pn = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i, o;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const s = (o = t == null ? void 0 : t.getAttribute("data-col")) != null ? o : !1;
      Ze(this, s);
    },
    mouseleave() {
      Ze(this, !1);
    }
  }
};
Lt(Pn, { buildIn: !0 });
function Ds(e, n) {
  var l, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, f) => {
    i && !i.call(this, a) || !!t[a] === f || (f ? t[a] = !0 : delete t[a], s[a] = f);
  };
  if (e === void 0 ? (n === void 0 && (n = !jn.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: a }) => {
    o(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    o(a, n != null ? n : !t[a]);
  })), Object.keys(s).length) {
    const a = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, s, t);
    a && Object.keys(a).forEach((f) => {
      a[f] ? t[f] = !0 : delete t[f];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var f;
      (f = this.options.onCheckChange) == null || f.call(this, s);
    });
  }
  return s;
}
function Ts(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function jn() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Ws() {
  return Object.keys(this.state.checkedRows);
}
const zn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Ds,
    isRowChecked: Ts,
    isAllRowChecked: jn,
    getChecks: Ws
  },
  onRenderCell(e, { row: n, col: t }) {
    var c, a;
    const { id: s } = n, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, s))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const f = this.isRowChecked(s), r = (a = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, f, s)) != null ? a : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(r), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var l, c;
    const { id: s } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), f = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, s)) != null ? c : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(f), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: D(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const n = e.target;
    if (!n)
      return;
    const t = n.closest('input[type="checkbox"],.dtable-checkbox');
    t && this.toggleCheckRows(t.checked);
  },
  onRowClick(e, { rowID: n }) {
    const t = e.target;
    if (!t)
      return;
    (t.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(n);
  }
};
Lt(zn);
function ve(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const l = ve.call(this, o);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    o = l.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? ve.call(this, n.parent).level + 1 : 0, n;
}
function Ps(e, n) {
  var i;
  let t = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !In.call(this)), n) {
      const o = s.entries();
      for (const [l, c] of o)
        c.state === "expanded" && (t[l] = !0);
    } else
      t = {};
  else {
    const o = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[o[0]]), o.forEach((l) => {
      const c = s.get(l);
      n && (c == null ? void 0 : c.children) ? t[l] = !0 : delete t[l];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function In() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Bn(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const l = e.get(o);
    !l || (l.level === s && (l.order = n++), (i = l.children) != null && i.length && (n = Bn(e, n, l.children, s + 1)));
  }
  return n;
}
function On(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, On(e, o, t, s);
  }), i;
}
function Un(e, n, t, s, i) {
  var c;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((a) => {
    const f = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === f;
  })) && (s[n] = t), o.parent && Un(e, o.parent, t, s, i);
}
const Fn = {
  name: "nested",
  defaultOptions: {
    nested: !0,
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
        const l = On(this, i, o, s);
        l != null && l.parent && Un(this, l.parent, o, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Ps,
    isAllCollapsed: In,
    getNestedRowInfo: ve
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, o, l, c, a;
    const { nestedMap: n } = this.data, t = (o = e.data) == null ? void 0 : o[(i = this.options.nestedParentKey) != null ? i : "parent"], s = (l = n.get(e.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (s.parent = t, (a = e.data) != null && a[(c = this.options.asParentKey) != null ? c : "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let f = n.get(t);
      f || (f = {
        state: "",
        level: 0
      }, n.set(t, f)), f.children || (f.children = []), f.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Bn(this.data.nestedMap), e.sort((n, t) => {
      var l, c;
      const s = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = ((l = s.order) != null ? l : 0) - ((c = i.order) != null ? c : 0);
      return o === 0 ? n.index - t.index : o;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var c, a, f;
    const { id: s, data: i } = t, { nestedToggle: o } = n.setting, l = this.getNestedRowInfo(s);
    if (o && (l.children || l.parent) && e.unshift((a = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, s, n, i)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), l.level) {
      let { nestedIndent: r = o } = n.setting;
      r && (r === !0 && (r = (f = this.options.nestedIndent) != null ? f : 12), e.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: r * l.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var i, o;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift((o = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) != null ? o : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: D(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = D(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
};
Lt(Fn);
const K = 24 * 60 * 60 * 1e3, j = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), yt = (e, n = new Date()) => (e = j(e), n = j(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), we = (e, n = new Date()) => j(e).getFullYear() === j(n).getFullYear(), qn = (e, n = new Date()) => (e = j(e), n = j(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), js = (e, n = new Date()) => {
  e = j(e), n = j(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, zs = (e, n) => yt(j(n), e), Is = (e, n) => yt(j(n).getTime() - K, e), Bs = (e, n) => yt(j(n).getTime() + K, e), Os = (e, n) => yt(j(n).getTime() - 2 * K, e), Xt = (e, n = "yyyy-MM-dd hh:mm") => {
  e = j(e);
  const t = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((s) => {
    if (new RegExp(`(${s})`).test(n)) {
      const i = `${t[s]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), n;
}, Us = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = Xt(e, we(e) ? s.month : s.full);
  if (yt(e, n))
    return i;
  const o = Xt(n, we(e, n) ? qn(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Fs = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - K * 7;
    case "oneMonth":
      return n - K * 31;
    case "threeMonth":
      return n - K * 31 * 3;
    case "halfYear":
      return n - K * 183;
    case "oneYear":
      return n - K * 365;
    case "twoYear":
      return n - 2 * (K * 365);
    default:
      return 0;
  }
}, ke = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, ke(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, ke(e, "day", t, s);
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
  return t ? s + e : s - e;
};
const Kn = {
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
      onRenderCell(e, { col: n, row: t }) {
        const { linkTemplate: s = "", linkProps: i } = n.setting, o = kt(s, t.data);
        return e[0] = /* @__PURE__ */ b("a", {
          href: o,
          ...i
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: s } = t, { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: l = `${n.name}Avatar` } = n.setting, c = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[l] : ""
        }));
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, l = (t - s) / 2, c = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ b("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": s,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: l,
          "stroke-width": s,
          stroke: o,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - a) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: c,
          y: c + s,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(a))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, row: t }) {
        var c;
        const s = (c = t.data) == null ? void 0 : c[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: o = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((a) => {
            typeof a == "string" && (a = { action: a });
            const f = o[a.action];
            return f && (a = { className: l, ...f, ...a }), kt(i, a);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(e, { col: n }) {
        let { format: t } = n.setting;
        if (!t)
          return e;
        typeof t == "string" && (t = { type: "text", format: t });
        const { format: s, type: i } = t, o = e[0];
        return typeof s == "function" ? e[0] = i === "html" ? { html: s(o) } : s(o) : i === "datetime" ? e[0] = Xt(o, s) : i === "html" ? e[0] = { html: kt(s, o) } : e[0] = kt(s, o), e;
      }
    }
  }
};
Lt(Kn);
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Pn,
  checkable: zn,
  nested: Fn,
  rich: Kn
}, Symbol.toStringTag, { value: "Module" }));
var Ht;
class Tt {
  constructor(n, t) {
    H(this, "element");
    H(this, "options");
    w(this, Ht, pn());
    this.element = n, this.options = { parent: n, ...t }, this.render();
  }
  get $() {
    return p(this, Ht).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), _s(/* @__PURE__ */ b(me, {
      ref: p(this, Ht),
      ...this.options
    }), this.element);
  }
}
Ht = new WeakMap(), H(Tt, "NAME", "zui.dtable"), H(Tt, "definePlugin", Lt), H(Tt, "removePlugin", Sn), H(Tt, "plugins", qs);
var q, I;
class Ks {
  constructor(n) {
    w(this, q, void 0);
    w(this, I, void 0);
    E(this, q, n), E(this, I, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(p(this, q).parentElement.parentElement, p(this, q).parentElement), this.addActive(p(this, I).parentElement, p(this, I)), p(this, I).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    E(this, I, p(this, q)), this.addActive(p(this, I).parentElement, p(this, I)), E(this, q, document.querySelector(`[href='#${p(this, I).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${p(this, I).getAttribute("id")}']`) || document.querySelector(`[data-target='#${p(this, I).getAttribute("id")}']`)), this.addActive(p(this, q).parentElement.parentElement, p(this, q).parentElement);
  }
  addActive(n, t) {
    const s = n.children;
    Array.from(s).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(o) {
      t.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(t, s) {
      setTimeout(() => {
        n.classList.add("in"), t();
      }, 100);
    });
  }
}
q = new WeakMap(), I = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Ks(e.target).showTarget());
});
function It(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ce(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (It(e) && It(t))
    for (const s in t)
      It(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), Ce(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return Ce(e, ...n);
}
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: K,
  createDate: j,
  isSameDay: yt,
  isSameYear: we,
  isSameMonth: qn,
  isSameWeek: js,
  isToday: zs,
  isYesterday: Is,
  isTomorrow: Bs,
  isDBY: Os,
  formatDate: Xt,
  formatDateSpan: Us,
  getTimeBeforeDesc: Fs,
  calculateTimestamp: ke,
  formatString: kt,
  formatBytes: ps,
  convertBytes: gs,
  isObject: It,
  mergeDeep: Ce
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xs as Avatar,
  Tt as DTable,
  Vs as Menu,
  Ks as NavTabs,
  Ye as Scrollbar,
  Ys as browser,
  qs as dtablePlugins,
  Js as helpers,
  vs as store
};
