var qr = Object.defineProperty;
var Vr = (e, n, t) => n in e ? qr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var D = (e, n, t) => (Vr(e, typeof n != "symbol" ? n + "" : n, t), t), Tn = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var d = (e, n, t) => (Tn(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, A = (e, n, t, o) => (Tn(e, n, "write to private field"), o ? o.call(e, t) : n.set(e, t), t);
var z = (e, n, t) => (Tn(e, n, "access private method"), t);
const Yr = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: r, value: s } = o;
    n[r] = s;
  }), n;
};
class Xr extends HTMLElement {
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
    const t = Yr(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Xr);
var kn, P, Bo, jn, ge, vo, Ve = {}, zo = [], Gr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function kt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Uo(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function G(e, n, t) {
  var o, r, s, a = {};
  for (s in n)
    s == "key" ? o = n[s] : s == "ref" ? r = n[s] : a[s] = n[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? kn.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (s in e.defaultProps)
      a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return We(e, a, o, r, null);
}
function We(e, n, t, o, r) {
  var s = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Bo : r };
  return r == null && P.vnode != null && P.vnode(s), s;
}
function Fo() {
  return { current: null };
}
function Sn(e) {
  return e.children;
}
function _e(e, n) {
  this.props = e, this.context = n;
}
function re(e, n) {
  if (n == null)
    return e.__ ? re(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? re(e) : null;
}
function qo(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return qo(e);
  }
}
function mo(e) {
  (!e.__d && (e.__d = !0) && ge.push(e) && !Ye.__r++ || vo !== P.debounceRendering) && ((vo = P.debounceRendering) || setTimeout)(Ye);
}
function Ye() {
  for (var e; Ye.__r = ge.length; )
    e = ge.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ge = [], e.some(function(n) {
      var t, o, r, s, a, l;
      n.__d && (a = (s = (t = n).__v).__e, (l = t.__P) && (o = [], (r = kt({}, s)).__v = s.__v + 1, Qn(l, s, r, t.__n, l.ownerSVGElement !== void 0, s.__h != null ? [a] : null, o, a == null ? re(s) : a, s.__h), Go(o, s), s.__e != a && qo(s)));
    });
}
function Vo(e, n, t, o, r, s, a, l, c, f) {
  var i, g, h, u, p, v, _, m = o && o.__k || zo, x = m.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? We(null, u, null, null, u) : Array.isArray(u) ? We(Sn, { children: u }, null, null, null) : u.__b > 0 ? We(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (h = m[i]) === null || h && u.key == h.key && u.type === h.type)
        m[i] = void 0;
      else
        for (g = 0; g < x; g++) {
          if ((h = m[g]) && u.key == h.key && u.type === h.type) {
            m[g] = void 0;
            break;
          }
          h = null;
        }
      Qn(e, u, h = h || Ve, r, s, a, l, c, f), p = u.__e, (g = u.ref) && h.ref != g && (_ || (_ = []), h.ref && _.push(h.ref, null, u), _.push(g, u.__c || p, u)), p != null ? (v == null && (v = p), typeof u.type == "function" && u.__k === h.__k ? u.__d = c = Yo(u, c, e) : c = Xo(e, u, h, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && h.__e == c && c.parentNode != e && (c = re(h));
    }
  for (t.__e = v, i = x; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = re(o, i + 1)), Jo(m[i], m[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      Ko(_[i], _[++i], _[++i]);
}
function Yo(e, n, t) {
  for (var o, r = e.__k, s = 0; r && s < r.length; s++)
    (o = r[s]) && (o.__ = e, n = typeof o.type == "function" ? Yo(o, n, t) : Xo(t, o, o, r, o.__e, n));
  return n;
}
function Xo(e, n, t, o, r, s) {
  var a, l, c;
  if (n.__d !== void 0)
    a = n.__d, n.__d = void 0;
  else if (t == null || r != s || r.parentNode == null)
    t:
      if (s == null || s.parentNode !== e)
        e.appendChild(r), a = null;
      else {
        for (l = s, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == r)
            break t;
        e.insertBefore(r, s), a = s;
      }
  return a !== void 0 ? a : r.nextSibling;
}
function Kr(e, n, t, o, r) {
  var s;
  for (s in t)
    s === "children" || s === "key" || s in n || Xe(e, s, null, t[s], o);
  for (s in n)
    r && typeof n[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || t[s] === n[s] || Xe(e, s, n[s], t[s], o);
}
function yo(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Gr.test(n) ? t : t + "px";
}
function Xe(e, n, t, o, r) {
  var s;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || yo(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || yo(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      s = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + s] = t, t ? o || e.addEventListener(n, s ? wo : bo, s) : e.removeEventListener(n, s ? wo : bo, s);
    else if (n !== "dangerouslySetInnerHTML") {
      if (r)
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
function bo(e) {
  this.l[e.type + !1](P.event ? P.event(e) : e);
}
function wo(e) {
  this.l[e.type + !0](P.event ? P.event(e) : e);
}
function Qn(e, n, t, o, r, s, a, l, c) {
  var f, i, g, h, u, p, v, _, m, x, b, E, S, y = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, s = [l]), (f = P.__b) && f(n);
  try {
    t:
      if (typeof y == "function") {
        if (_ = n.props, m = (f = y.contextType) && o[f.__c], x = f ? m ? m.props.value : f.__ : o, t.__c ? v = (i = n.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? n.__c = i = new y(_, x) : (n.__c = i = new _e(_, x), i.constructor = y, i.render = Zr), m && m.sub(i), i.props = _, i.state || (i.state = {}), i.context = x, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = kt({}, i.__s)), kt(i.__s, y.getDerivedStateFromProps(_, i.__s))), h = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, x), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, x) === !1 || n.__v === t.__v) {
            i.props = _, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(C) {
              C && (C.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, x), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(h, u, p);
          });
        }
        if (i.context = x, i.props = _, i.__v = n, i.__P = e, b = P.__r, E = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, b && b(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, b && b(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (o = kt(kt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(h, u)), S = f != null && f.type === Sn && f.key == null ? f.props.children : f, Vo(e, Array.isArray(S) ? S : [S], n, t, o, r, s, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Jr(t.__e, n, t, o, r, s, a, c);
    (f = P.diffed) && f(n);
  } catch (C) {
    n.__v = null, (c || s != null) && (n.__e = l, n.__h = !!c, s[s.indexOf(l)] = null), P.__e(C, n, t);
  }
}
function Go(e, n) {
  P.__c && P.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      P.__e(o, t.__v);
    }
  });
}
function Jr(e, n, t, o, r, s, a, l) {
  var c, f, i, g = t.props, h = n.props, u = n.type, p = 0;
  if (u === "svg" && (r = !0), s != null) {
    for (; p < s.length; p++)
      if ((c = s[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, s[p] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(h);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, h.is && h), s = null, l = !1;
  }
  if (u === null)
    g === h || l && e.data === h || (e.data = h);
  else {
    if (s = s && kn.call(e.childNodes), f = (g = t.props || Ve).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !l) {
      if (s != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Kr(e, h, g, r, l), i)
      n.__k = [];
    else if (p = n.props.children, Vo(e, Array.isArray(p) ? p : [p], n, t, o, r && u !== "foreignObject", s, a, s ? s[0] : t.__k && re(t, 0), l), s != null)
      for (p = s.length; p--; )
        s[p] != null && Uo(s[p]);
    l || ("value" in h && (p = h.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && Xe(e, "value", p, g.value, !1), "checked" in h && (p = h.checked) !== void 0 && p !== e.checked && Xe(e, "checked", p, g.checked, !1));
  }
  return e;
}
function Ko(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    P.__e(o, t);
  }
}
function Jo(e, n, t) {
  var o, r;
  if (P.unmount && P.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ko(o, null, n)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (s) {
        P.__e(s, n);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (r = 0; r < o.length; r++)
      o[r] && Jo(o[r], n, typeof e.type != "function");
  t || e.__e == null || Uo(e.__e), e.__e = e.__d = void 0;
}
function Zr(e, n, t) {
  return this.constructor(e, t);
}
function Qr(e, n, t) {
  var o, r, s;
  P.__ && P.__(e, n), r = (o = typeof t == "function") ? null : t && t.__k || n.__k, s = [], Qn(n, e = (!o && t || n).__k = G(Sn, null, [e]), r || Ve, Ve, n.ownerSVGElement !== void 0, !o && t ? [t] : r ? null : n.firstChild ? kn.call(n.childNodes) : null, s, !o && t ? t : r ? r.__e : n.firstChild, o), Go(s, e);
}
kn = zo.slice, P = { __e: function(e, n, t, o) {
  for (var r, s, a; n = n.__; )
    if ((r = n.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), a = r.__d), a)
          return r.__E = r;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Bo = 0, jn = function(e) {
  return e != null && e.constructor === void 0;
}, _e.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = kt({}, this.state), typeof e == "function" && (e = e(kt({}, t), this.props)), e && kt(t, e), e != null && this.__v && (n && this.__h.push(n), mo(this));
}, _e.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), mo(this));
}, _e.prototype.render = Sn, ge = [], Ye.__r = 0;
function ts(e) {
  return Object.fromEntries(Object.entries(e).map(([n, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [n, t];
  }));
}
var Dt, Kt;
class Cn {
  constructor(n, t) {
    w(this, Dt, void 0);
    w(this, Kt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, A(this, Dt, { ...this.constructor.DEFAULT, ...n instanceof HTMLElement ? ts(n.dataset) : null, ...t }), this.constructor.all.set(n, this), A(this, Kt, n), this.init();
  }
  get options() {
    return d(this, Dt);
  }
  get element() {
    return d(this, Kt);
  }
  init() {
  }
  setOptions(n) {
    return n && Object.assign(d(this, Dt), n), d(this, Dt);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(d(this, Kt));
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
    const n = this.NAME;
    if (this.allComponents.has(n))
      return this.allComponents.get(n);
    const t = /* @__PURE__ */ new Map();
    return this.allComponents.set(n, t), t;
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
}
Dt = new WeakMap(), Kt = new WeakMap(), D(Cn, "allComponents", /* @__PURE__ */ new Map());
var be;
class es extends Cn {
  constructor() {
    super(...arguments);
    w(this, be, Fo());
  }
  get $() {
    return d(this, be).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    Qr(/* @__PURE__ */ G(o, {
      ref: d(this, be),
      ...this.setOptions(t)
    }), this.element);
  }
}
be = new WeakMap();
const j = (...e) => e.map((n) => Array.isArray(n) ? j(...n) : typeof n == "function" ? j(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const o = n[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
function ns(e) {
  const {
    rootClass: n,
    rootProps: t,
    className: o,
    url: r,
    target: s,
    disabled: a,
    active: l,
    icon: c,
    title: f,
    trailingIcon: i,
    children: g,
    ...h
  } = e;
  return /* @__PURE__ */ G("li", {
    className: j(n),
    ...t
  }, /* @__PURE__ */ G("a", {
    className: j("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: r,
    target: s,
    ...h
  }, jn(c) ? c : typeof c == "string" ? /* @__PURE__ */ G("i", {
    class: `icon ${c}`
  }) : null, f, jn(i) ? i : typeof i == "string" ? /* @__PURE__ */ G("i", {
    class: `icon ${i}`
  }) : null), g);
}
function os({ className: e }) {
  return /* @__PURE__ */ G("div", {
    class: j("menu-divider", e)
  });
}
function rs({ className: e, title: n, children: t, ...o }) {
  return /* @__PURE__ */ G("li", {
    class: j("menu-heading", e),
    ...o
  }, n, t);
}
var we, on, Zo, xe, rn, sn;
const lo = class extends _e {
  constructor() {
    super(...arguments);
    w(this, on);
    D(this, "state", { shownSubs: {} });
    w(this, we, Fo());
    w(this, xe, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, G);
      const { afterRender: r, onClickItem: s, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ G(lo, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: d(this, xe),
        afterRender: r,
        onClickItem: s,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    w(this, rn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    w(this, sn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !1), o.preventDefault());
    });
  }
  get $() {
    return d(this, we).current;
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
    const { shownSubs: r } = this.state;
    o === void 0 && (o = !r[t]), o ? r[t] = !0 : delete r[t], this.setState({ shownSubs: { ...r } });
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
      hasIcons: r,
      children: s,
      onClickItem: a,
      subMenuTrigger: l,
      onRenderItem: c,
      onRenderSubMenu: f,
      afterRender: i,
      beforeDestroy: g,
      ...h
    } = this.props, u = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ G("menu", {
      class: j(
        "menu",
        t,
        (r != null ? r : u == null ? void 0 : u.some((p) => "icon" in p)) ? "has-icons" : ""
      ),
      ...h,
      ref: d(this, we)
    }, u == null ? void 0 : u.map((p, v) => {
      const _ = { type: "item", key: v, ...p };
      if (c) {
        const O = c(this, _, v, G);
        O && Object.assign(_, O);
      }
      const { key: m = v, type: x = "item", ...b } = _;
      if (x === "heading")
        return /* @__PURE__ */ G(rs, {
          ...b,
          key: m
        });
      if (x === "divider")
        return /* @__PURE__ */ G(os, {
          ...b,
          key: m
        });
      const { onClick: E, items: S, ...y } = b, C = {
        ...y,
        key: m,
        onClick: z(this, on, Zo).bind(this, _, v, E)
      }, k = S && this.state.shownSubs[m];
      return S && (C.rootClass = j(C.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (C.rootProps = {
        ...C.rootProps,
        onMouseEnter: d(this, rn).bind(this, m),
        onMouseLeave: d(this, sn).bind(this, m)
      })), /* @__PURE__ */ G(ns, {
        ...C
      }, k && d(this, xe).call(this, _));
    }), s);
  }
};
let Wn = lo;
we = new WeakMap(), on = new WeakSet(), Zo = function(t, o, r, s) {
  var l;
  r && r.call(s.target, s);
  const { onClickItem: a } = this.props;
  a && a(t, o, s), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), s.stopPropagation(), s.preventDefault());
}, xe = new WeakMap(), rn = new WeakMap(), sn = new WeakMap();
class Qo extends es {
}
D(Qo, "Component", Wn);
var Rn, H, tr, er, ve, xo, Ge = {}, nr = [], ss = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function St(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function or(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function M(e, n, t) {
  var o, r, s, a = {};
  for (s in n)
    s == "key" ? o = n[s] : s == "ref" ? r = n[s] : a[s] = n[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Rn.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (s in e.defaultProps)
      a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return Ie(e, a, o, r, null);
}
function Ie(e, n, t, o, r) {
  var s = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++tr : r };
  return r == null && H.vnode != null && H.vnode(s), s;
}
function rr() {
  return { current: null };
}
function Mn(e) {
  return e.children;
}
function zt(e, n) {
  this.props = e, this.context = n;
}
function se(e, n) {
  if (n == null)
    return e.__ ? se(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? se(e) : null;
}
function sr(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return sr(e);
  }
}
function Eo(e) {
  (!e.__d && (e.__d = !0) && ve.push(e) && !Ke.__r++ || xo !== H.debounceRendering) && ((xo = H.debounceRendering) || setTimeout)(Ke);
}
function Ke() {
  for (var e; Ke.__r = ve.length; )
    e = ve.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ve = [], e.some(function(n) {
      var t, o, r, s, a, l;
      n.__d && (a = (s = (t = n).__v).__e, (l = t.__P) && (o = [], (r = St({}, s)).__v = s.__v + 1, to(l, s, r, t.__n, l.ownerSVGElement !== void 0, s.__h != null ? [a] : null, o, a == null ? se(s) : a, s.__h), cr(o, s), s.__e != a && sr(s)));
    });
}
function ir(e, n, t, o, r, s, a, l, c, f) {
  var i, g, h, u, p, v, _, m = o && o.__k || nr, x = m.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ie(null, u, null, null, u) : Array.isArray(u) ? Ie(Mn, { children: u }, null, null, null) : u.__b > 0 ? Ie(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (h = m[i]) === null || h && u.key == h.key && u.type === h.type)
        m[i] = void 0;
      else
        for (g = 0; g < x; g++) {
          if ((h = m[g]) && u.key == h.key && u.type === h.type) {
            m[g] = void 0;
            break;
          }
          h = null;
        }
      to(e, u, h = h || Ge, r, s, a, l, c, f), p = u.__e, (g = u.ref) && h.ref != g && (_ || (_ = []), h.ref && _.push(h.ref, null, u), _.push(g, u.__c || p, u)), p != null ? (v == null && (v = p), typeof u.type == "function" && u.__k === h.__k ? u.__d = c = ar(u, c, e) : c = lr(e, u, h, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && h.__e == c && c.parentNode != e && (c = se(h));
    }
  for (t.__e = v, i = x; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = se(o, i + 1)), fr(m[i], m[i]));
  if (_)
    for (i = 0; i < _.length; i++)
      ur(_[i], _[++i], _[++i]);
}
function ar(e, n, t) {
  for (var o, r = e.__k, s = 0; r && s < r.length; s++)
    (o = r[s]) && (o.__ = e, n = typeof o.type == "function" ? ar(o, n, t) : lr(t, o, o, r, o.__e, n));
  return n;
}
function lr(e, n, t, o, r, s) {
  var a, l, c;
  if (n.__d !== void 0)
    a = n.__d, n.__d = void 0;
  else if (t == null || r != s || r.parentNode == null)
    t:
      if (s == null || s.parentNode !== e)
        e.appendChild(r), a = null;
      else {
        for (l = s, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == r)
            break t;
        e.insertBefore(r, s), a = s;
      }
  return a !== void 0 ? a : r.nextSibling;
}
function is(e, n, t, o, r) {
  var s;
  for (s in t)
    s === "children" || s === "key" || s in n || Je(e, s, null, t[s], o);
  for (s in n)
    r && typeof n[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || t[s] === n[s] || Je(e, s, n[s], t[s], o);
}
function ko(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || ss.test(n) ? t : t + "px";
}
function Je(e, n, t, o, r) {
  var s;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || ko(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || ko(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      s = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + s] = t, t ? o || e.addEventListener(n, s ? Co : So, s) : e.removeEventListener(n, s ? Co : So, s);
    else if (n !== "dangerouslySetInnerHTML") {
      if (r)
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
function So(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function Co(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function to(e, n, t, o, r, s, a, l, c) {
  var f, i, g, h, u, p, v, _, m, x, b, E, S, y = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, s = [l]), (f = H.__b) && f(n);
  try {
    t:
      if (typeof y == "function") {
        if (_ = n.props, m = (f = y.contextType) && o[f.__c], x = f ? m ? m.props.value : f.__ : o, t.__c ? v = (i = n.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? n.__c = i = new y(_, x) : (n.__c = i = new zt(_, x), i.constructor = y, i.render = ls), m && m.sub(i), i.props = _, i.state || (i.state = {}), i.context = x, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = St({}, i.__s)), St(i.__s, y.getDerivedStateFromProps(_, i.__s))), h = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && _ !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, x), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, x) === !1 || n.__v === t.__v) {
            i.props = _, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(C) {
              C && (C.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, x), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(h, u, p);
          });
        }
        if (i.context = x, i.props = _, i.__v = n, i.__P = e, b = H.__r, E = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, b && b(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, b && b(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++E < 25);
        i.state = i.__s, i.getChildContext != null && (o = St(St({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(h, u)), S = f != null && f.type === Mn && f.key == null ? f.props.children : f, ir(e, Array.isArray(S) ? S : [S], n, t, o, r, s, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = as(t.__e, n, t, o, r, s, a, c);
    (f = H.diffed) && f(n);
  } catch (C) {
    n.__v = null, (c || s != null) && (n.__e = l, n.__h = !!c, s[s.indexOf(l)] = null), H.__e(C, n, t);
  }
}
function cr(e, n) {
  H.__c && H.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      H.__e(o, t.__v);
    }
  });
}
function as(e, n, t, o, r, s, a, l) {
  var c, f, i, g = t.props, h = n.props, u = n.type, p = 0;
  if (u === "svg" && (r = !0), s != null) {
    for (; p < s.length; p++)
      if ((c = s[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, s[p] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(h);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, h.is && h), s = null, l = !1;
  }
  if (u === null)
    g === h || l && e.data === h || (e.data = h);
  else {
    if (s = s && Rn.call(e.childNodes), f = (g = t.props || Ge).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !l) {
      if (s != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (is(e, h, g, r, l), i)
      n.__k = [];
    else if (p = n.props.children, ir(e, Array.isArray(p) ? p : [p], n, t, o, r && u !== "foreignObject", s, a, s ? s[0] : t.__k && se(t, 0), l), s != null)
      for (p = s.length; p--; )
        s[p] != null && or(s[p]);
    l || ("value" in h && (p = h.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && Je(e, "value", p, g.value, !1), "checked" in h && (p = h.checked) !== void 0 && p !== e.checked && Je(e, "checked", p, g.checked, !1));
  }
  return e;
}
function ur(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    H.__e(o, t);
  }
}
function fr(e, n, t) {
  var o, r;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ur(o, null, n)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (s) {
        H.__e(s, n);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (r = 0; r < o.length; r++)
      o[r] && fr(o[r], n, typeof e.type != "function");
  t || e.__e == null || or(e.__e), e.__e = e.__d = void 0;
}
function ls(e, n, t) {
  return this.constructor(e, t);
}
function cs(e, n, t) {
  var o, r, s;
  H.__ && H.__(e, n), r = (o = typeof t == "function") ? null : t && t.__k || n.__k, s = [], to(n, e = (!o && t || n).__k = M(Mn, null, [e]), r || Ge, Ge, n.ownerSVGElement !== void 0, !o && t ? [t] : r ? null : n.firstChild ? Rn.call(n.childNodes) : null, s, !o && t ? t : r ? r.__e : n.firstChild, o), cr(s, e);
}
Rn = nr.slice, H = { __e: function(e, n, t, o) {
  for (var r, s, a; n = n.__; )
    if ((r = n.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), a = r.__d), a)
          return r.__E = r;
      } catch (l) {
        e = l;
      }
  throw e;
} }, tr = 0, er = function(e) {
  return e != null && e.constructor === void 0;
}, zt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = St({}, this.state), typeof e == "function" && (e = e(St({}, t), this.props)), e && St(t, e), e != null && this.__v && (n && this.__h.push(n), Eo(this));
}, zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Eo(this));
}, zt.prototype.render = Mn, ve = [], Ke.__r = 0;
var Tt, Pt;
class Ro extends zt {
  constructor(t) {
    var o;
    super(t);
    w(this, Tt, 0);
    w(this, Pt, null);
    D(this, "_handleWheel", (t) => {
      var s;
      const { wheelContainer: o } = this.props, r = t.target;
      if (!(!r || !o) && (typeof o == "string" && r.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((s = this.props.wheelSpeed) != null ? s : 1);
        this.scrollOffset(a) && t.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (t) => {
      const { dragStart: o } = this.state;
      o && (d(this, Tt) && cancelAnimationFrame(d(this, Tt)), A(this, Tt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + r * this.props.scrollSize / this.props.clientSize), A(this, Tt, 0);
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
      const r = o.getBoundingClientRect(), { type: s, clientSize: a, scrollSize: l } = this.props, c = (s === "horz" ? t.clientX - r.left : t.clientY - r.top) - this.barSize / 2;
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
    const { clientSize: t, scrollSize: o, size: r = 12, minBarSize: s = 3 * r } = this.props;
    return Math.max(Math.round(t * t / o), s);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (A(this, Pt, typeof t == "string" ? document : t.current), d(this, Pt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Pt) && d(this, Pt).removeEventListener("wheel", this._handleWheel);
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
    var r;
    const { onScroll: o } = this.props;
    o && o(t, (r = this.props.type) != null ? r : "vert");
  }
  render() {
    const {
      clientSize: t,
      type: o,
      size: r = 12,
      className: s,
      style: a,
      left: l,
      top: c,
      bottom: f,
      right: i
    } = this.props, { maxScrollPos: g, scrollPos: h } = this, { dragStart: u } = this.state, p = {
      left: l,
      top: c,
      bottom: f,
      right: i,
      ...a
    }, v = {};
    return o === "horz" ? (p.height = r, p.width = t, v.width = this.barSize, v.left = Math.round(Math.min(g, h) * (t - v.width) / g)) : (p.width = r, p.height = t, v.height = this.barSize, v.top = Math.round(Math.min(g, h) * (t - v.height) / g)), /* @__PURE__ */ M("div", {
      className: j("scrollbar", s, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ M("div", {
      className: "scrollbar-bar",
      style: v,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Tt = new WeakMap(), Pt = new WeakMap();
function pe(e, ...n) {
  var t;
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const o = n[0];
    return Object.keys(o).forEach((r) => {
      var a;
      const s = (a = o[r]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${r}\\}`, "g"), `${s}`);
    }), e;
  }
  for (let o = 0; o < n.length; o++) {
    const r = (t = n[o]) != null ? t : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${r}`);
  }
  return e;
}
var eo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(eo || {});
function us(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / eo[t]).toFixed(n) + t);
}
const fs = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const o = t[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * eo[o];
};
function hs(e) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const o = document.createRange();
      return o.selectNodeContents(n), t.removeAllRanges(), t.addRange(o), !0;
    }
  }
  return !1;
}
function ds(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function ps(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), r = window.innerHeight || document.documentElement.clientHeight, s = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= s && o.top + o.height <= r;
  const a = o.top <= r && o.top + o.height >= 0, l = o.left <= s && o.left + o.width >= 0;
  return a && l;
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: hs,
  domReady: ds,
  isElementVisible: ps,
  classes: j
}, Symbol.toStringTag, { value: "Module" }));
let hr = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var Ee, wt, st, Jt, Zt, Be;
const co = class {
  constructor(n, t = "local") {
    w(this, Zt);
    w(this, Ee, void 0);
    w(this, wt, void 0);
    w(this, st, void 0);
    w(this, Jt, void 0);
    A(this, Ee, t), A(this, wt, `ZUI_STORE:${n != null ? n : hr()}`), A(this, st, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, Ee);
  }
  get session() {
    return this.type === "session" ? this : (d(this, Jt) || A(this, Jt, new co(d(this, wt), "session")), d(this, Jt));
  }
  get(n, t) {
    const o = d(this, st).getItem(z(this, Zt, Be).call(this, n));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, st).setItem(z(this, Zt, Be).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    d(this, st).removeItem(z(this, Zt, Be).call(this, n));
  }
  each(n) {
    for (let t = 0; t < d(this, st).length; t++) {
      const o = d(this, st).key(t);
      if (o != null && o.startsWith(d(this, wt))) {
        const r = d(this, st).getItem(o);
        typeof r == "string" && n(o.substring(d(this, wt).length + 1), JSON.parse(r));
      }
    }
  }
  getAll() {
    const n = {};
    return this.each((t, o) => {
      n[t] = o;
    }), n;
  }
};
let Ze = co;
Ee = new WeakMap(), wt = new WeakMap(), st = new WeakMap(), Jt = new WeakMap(), Zt = new WeakSet(), Be = function(n) {
  return `${d(this, wt)}:${n}`;
};
const gs = new Ze("DEFAULT");
function _s(e, n = "local") {
  return new Ze(e, n);
}
Object.assign(gs, { create: _s });
class Yi extends zt {
  render() {
    const { size: n, rounded: t, className: o, style: r, src: s, text: a, children: l, ...c } = this.props, f = [o], i = { ...r };
    let g = null;
    return s ? g = /* @__PURE__ */ M("img", {
      src: s,
      alt: a
    }) : g = a, typeof n == "number" ? (i.width = n, i.height = n) : typeof n == "string" && f.push(`avatar-${n}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ M("div", {
      className: j(f),
      style: i,
      ...c
    }, g, l);
  }
}
function vs() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function ms() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function ys(e, n) {
  vs(), e.classList.add("block"), Mo(e, n), e.onclick = (t) => bs(t, e), window.addEventListener("resize", () => {
    Mo(e, n);
  });
}
function dr(e) {
  var n;
  ms(), (n = e.classList) == null || n.remove("block");
}
function Mo(e, n) {
  const t = e.querySelector(".modal-dialog");
  if (!t)
    return;
  const o = Math.max(0, (window.innerHeight - t.clientHeight) / 2);
  if (n === "fit") {
    t.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (n === "center") {
    t.style.top = `${o}px`;
    return;
  }
  t.style.top = n;
}
function bs(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), dr(n));
}
function ws(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const o = ws(t);
    if (!o)
      return;
    const r = document.querySelector(o);
    if (!r)
      return;
    ys(r, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && dr(n);
});
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ft(e) {
  var n = et(e).Element;
  return e instanceof n || e instanceof Element;
}
function tt(e) {
  var n = et(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function no(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = et(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
var Ut = Math.max, Qe = Math.min, ie = Math.round;
function In() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function pr() {
  return !/^((?!chrome|android).)*safari/i.test(In());
}
function ae(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  n && tt(e) && (r = e.offsetWidth > 0 && ie(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && ie(o.height) / e.offsetHeight || 1);
  var a = Ft(e) ? et(e) : window, l = a.visualViewport, c = !pr() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / r, i = (o.top + (c && l ? l.offsetTop : 0)) / s, g = o.width / r, h = o.height / s;
  return {
    width: g,
    height: h,
    top: i,
    right: f + g,
    bottom: i + h,
    left: f,
    x: f,
    y: i
  };
}
function oo(e) {
  var n = et(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function xs(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Es(e) {
  return e === et(e) || !tt(e) ? oo(e) : xs(e);
}
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mt(e) {
  return ((Ft(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ro(e) {
  return ae(Mt(e)).left + oo(e).scrollLeft;
}
function ot(e) {
  return et(e).getComputedStyle(e);
}
function so(e) {
  var n = ot(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function ks(e) {
  var n = e.getBoundingClientRect(), t = ie(n.width) / e.offsetWidth || 1, o = ie(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function Ss(e, n, t) {
  t === void 0 && (t = !1);
  var o = tt(n), r = tt(n) && ks(n), s = Mt(n), a = ae(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ut(n) !== "body" || so(s)) && (l = Es(n)), tt(n) ? (c = ae(n, !0), c.x += n.clientLeft, c.y += n.clientTop) : s && (c.x = ro(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function gr(e) {
  var n = ae(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function An(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (no(e) ? e.host : null) || Mt(e);
}
function _r(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : tt(e) && so(e) ? e : _r(An(e));
}
function me(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = _r(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), s = et(o), a = r ? [s].concat(s.visualViewport || [], so(o) ? o : []) : o, l = n.concat(a);
  return r ? l : l.concat(me(An(a)));
}
function Cs(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function Ao(e) {
  return !tt(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function Rs(e) {
  var n = /firefox/i.test(In()), t = /Trident/i.test(In());
  if (t && tt(e)) {
    var o = ot(e);
    if (o.position === "fixed")
      return null;
  }
  var r = An(e);
  for (no(r) && (r = r.host); tt(r) && ["html", "body"].indexOf(ut(r)) < 0; ) {
    var s = ot(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || n && s.willChange === "filter" || n && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function $n(e) {
  for (var n = et(e), t = Ao(e); t && Cs(t) && ot(t).position === "static"; )
    t = Ao(t);
  return t && (ut(t) === "html" || ut(t) === "body" && ot(t).position === "static") ? n : t || Rs(e) || n;
}
var nt = "top", ft = "bottom", Rt = "right", vt = "left", On = "auto", Ln = [nt, ft, Rt, vt], le = "start", ye = "end", Ms = "clippingParents", vr = "viewport", he = "popper", As = "reference", $o = /* @__PURE__ */ Ln.reduce(function(e, n) {
  return e.concat([n + "-" + le, n + "-" + ye]);
}, []), $s = /* @__PURE__ */ [].concat(Ln, [On]).reduce(function(e, n) {
  return e.concat([n, n + "-" + le, n + "-" + ye]);
}, []), Os = "beforeRead", Ls = "read", Ns = "afterRead", Ds = "beforeMain", Ts = "main", Ps = "afterMain", Hs = "beforeWrite", js = "write", Ws = "afterWrite", Bn = [Os, Ls, Ns, Ds, Ts, Ps, Hs, js, Ws];
function Is(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    n.set(s.name, s);
  });
  function r(s) {
    t.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!t.has(l)) {
        var c = n.get(l);
        c && r(c);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    t.has(s.name) || r(s);
  }), o;
}
function Bs(e) {
  var n = Is(e);
  return Bn.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function zs(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function bt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(r, s) {
    return r.replace(/%s/, s);
  }, e);
}
var Lt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Us = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Oo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Fs(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Oo).filter(function(t, o, r) {
      return r.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof n.name != "string" && console.error(bt(Lt, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(bt(Lt, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Bn.indexOf(n.phase) < 0 && console.error(bt(Lt, n.name, '"phase"', "either " + Bn.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(bt(Lt, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(bt(Lt, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(bt(Lt, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(bt(Lt, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Oo.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      n.requires && n.requires.forEach(function(o) {
        e.find(function(r) {
          return r.name === o;
        }) == null && console.error(bt(Us, String(n.name), o, o));
      });
    });
  });
}
function qs(e, n) {
  var t = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var r = n(o);
    if (!t.has(r))
      return t.add(r), !0;
  });
}
function mt(e) {
  return e.split("-")[0];
}
function Vs(e) {
  var n = e.reduce(function(t, o) {
    var r = t[o.name];
    return t[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}
function Ys(e, n) {
  var t = et(e), o = Mt(e), r = t.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (r) {
    s = r.width, a = r.height;
    var f = pr();
    (f || !f && n === "fixed") && (l = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + ro(e),
    y: c
  };
}
function Xs(e) {
  var n, t = Mt(e), o = oo(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, s = Ut(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ut(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + ro(e), c = -o.scrollTop;
  return ot(r || t).direction === "rtl" && (l += Ut(t.clientWidth, r ? r.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Gs(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && no(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function zn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ks(e, n) {
  var t = ae(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Lo(e, n, t) {
  return n === vr ? zn(Ys(e, t)) : Ft(n) ? Ks(n, t) : zn(Xs(Mt(e)));
}
function Js(e) {
  var n = me(An(e)), t = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, o = t && tt(e) ? $n(e) : e;
  return Ft(o) ? n.filter(function(r) {
    return Ft(r) && Gs(r, o) && ut(r) !== "body";
  }) : [];
}
function Zs(e, n, t, o) {
  var r = n === "clippingParents" ? Js(e) : [].concat(n), s = [].concat(r, [t]), a = s[0], l = s.reduce(function(c, f) {
    var i = Lo(e, f, o);
    return c.top = Ut(i.top, c.top), c.right = Qe(i.right, c.right), c.bottom = Qe(i.bottom, c.bottom), c.left = Ut(i.left, c.left), c;
  }, Lo(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ce(e) {
  return e.split("-")[1];
}
function mr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? mt(o) : null, s = o ? ce(o) : null, a = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, c;
  switch (r) {
    case nt:
      c = {
        x: a,
        y: n.y - t.height
      };
      break;
    case ft:
      c = {
        x: a,
        y: n.y + n.height
      };
      break;
    case Rt:
      c = {
        x: n.x + n.width,
        y: l
      };
      break;
    case vt:
      c = {
        x: n.x - t.width,
        y: l
      };
      break;
    default:
      c = {
        x: n.x,
        y: n.y
      };
  }
  var f = r ? mr(r) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (s) {
      case le:
        c[f] = c[f] - (n[i] / 2 - t[i] / 2);
        break;
      case ye:
        c[f] = c[f] + (n[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function br() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qs(e) {
  return Object.assign({}, br(), e);
}
function ti(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function io(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, s = t.strategy, a = s === void 0 ? e.strategy : s, l = t.boundary, c = l === void 0 ? Ms : l, f = t.rootBoundary, i = f === void 0 ? vr : f, g = t.elementContext, h = g === void 0 ? he : g, u = t.altBoundary, p = u === void 0 ? !1 : u, v = t.padding, _ = v === void 0 ? 0 : v, m = Qs(typeof _ != "number" ? _ : ti(_, Ln)), x = h === he ? As : he, b = e.rects.popper, E = e.elements[p ? x : h], S = Zs(Ft(E) ? E : E.contextElement || Mt(e.elements.popper), c, i, a), y = ae(e.elements.reference), C = yr({
    reference: y,
    element: b,
    strategy: "absolute",
    placement: r
  }), k = zn(Object.assign({}, b, C)), O = h === he ? k : y, N = {
    top: S.top - O.top + m.top,
    bottom: O.bottom - S.bottom + m.bottom,
    left: S.left - O.left + m.left,
    right: O.right - S.right + m.right
  }, $ = e.modifiersData.offset;
  if (h === he && $) {
    var I = $[r];
    Object.keys(N).forEach(function(B) {
      var U = [Rt, ft].indexOf(B) >= 0 ? 1 : -1, V = [nt, ft].indexOf(B) >= 0 ? "y" : "x";
      N[B] += I[V] * U;
    });
  }
  return N;
}
var No = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ei = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Do = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function To() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ni(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, s = r === void 0 ? Do : r;
  return function(l, c, f) {
    f === void 0 && (f = s);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Do, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, g = [], h = !1, u = {
      state: i,
      setOptions: function(m) {
        var x = typeof m == "function" ? m(i.options) : m;
        v(), i.options = Object.assign({}, s, i.options, x), i.scrollParents = {
          reference: Ft(l) ? me(l) : l.contextElement ? me(l.contextElement) : [],
          popper: me(c)
        };
        var b = Bs(Vs([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = b.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = qs([].concat(b, i.options.modifiers), function($) {
            var I = $.name;
            return I;
          });
          if (Fs(E), mt(i.options.placement) === On) {
            var S = i.orderedModifiers.find(function($) {
              var I = $.name;
              return I === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ot(c), C = y.marginTop, k = y.marginRight, O = y.marginBottom, N = y.marginLeft;
          [C, k, O, N].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), u.update();
      },
      forceUpdate: function() {
        if (!h) {
          var m = i.elements, x = m.reference, b = m.popper;
          if (!To(x, b)) {
            process.env.NODE_ENV !== "production" && console.error(No);
            return;
          }
          i.rects = {
            reference: Ss(x, $n(b), i.options.strategy === "fixed"),
            popper: gr(b)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function($) {
            return i.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, S = 0; S < i.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(ei);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, S = -1;
              continue;
            }
            var y = i.orderedModifiers[S], C = y.fn, k = y.options, O = k === void 0 ? {} : k, N = y.name;
            typeof C == "function" && (i = C({
              state: i,
              options: O,
              name: N,
              instance: u
            }) || i);
          }
        }
      },
      update: zs(function() {
        return new Promise(function(_) {
          u.forceUpdate(), _(i);
        });
      }),
      destroy: function() {
        v(), h = !0;
      }
    };
    if (!To(l, c))
      return process.env.NODE_ENV !== "production" && console.error(No), u;
    u.setOptions(f).then(function(_) {
      !h && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function p() {
      i.orderedModifiers.forEach(function(_) {
        var m = _.name, x = _.options, b = x === void 0 ? {} : x, E = _.effect;
        if (typeof E == "function") {
          var S = E({
            state: i,
            name: m,
            instance: u,
            options: b
          }), y = function() {
          };
          g.push(S || y);
        }
      });
    }
    function v() {
      g.forEach(function(_) {
        return _();
      }), g = [];
    }
    return u;
  };
}
var He = {
  passive: !0
};
function oi(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, c = et(n.elements.popper), f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return s && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, He);
  }), l && c.addEventListener("resize", t.update, He), function() {
    s && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, He);
    }), l && c.removeEventListener("resize", t.update, He);
  };
}
const ri = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: oi,
  data: {}
};
function si(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = yr({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ii = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: si,
  data: {}
};
var ai = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function li(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: ie(n * r) / r || 0,
    y: ie(t * r) / r || 0
  };
}
function Po(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, f = e.adaptive, i = e.roundOffsets, g = e.isFixed, h = a.x, u = h === void 0 ? 0 : h, p = a.y, v = p === void 0 ? 0 : p, _ = typeof i == "function" ? i({
    x: u,
    y: v
  }) : {
    x: u,
    y: v
  };
  u = _.x, v = _.y;
  var m = a.hasOwnProperty("x"), x = a.hasOwnProperty("y"), b = vt, E = nt, S = window;
  if (f) {
    var y = $n(t), C = "clientHeight", k = "clientWidth";
    if (y === et(t) && (y = Mt(t), ot(y).position !== "static" && l === "absolute" && (C = "scrollHeight", k = "scrollWidth")), y = y, r === nt || (r === vt || r === Rt) && s === ye) {
      E = ft;
      var O = g && y === S && S.visualViewport ? S.visualViewport.height : y[C];
      v -= O - o.height, v *= c ? 1 : -1;
    }
    if (r === vt || (r === nt || r === ft) && s === ye) {
      b = Rt;
      var N = g && y === S && S.visualViewport ? S.visualViewport.width : y[k];
      u -= N - o.width, u *= c ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, f && ai), I = i === !0 ? li({
    x: u,
    y: v
  }) : {
    x: u,
    y: v
  };
  if (u = I.x, v = I.y, c) {
    var B;
    return Object.assign({}, $, (B = {}, B[E] = x ? "0" : "", B[b] = m ? "0" : "", B.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + v + "px)" : "translate3d(" + u + "px, " + v + "px, 0)", B));
  }
  return Object.assign({}, $, (n = {}, n[E] = x ? v + "px" : "", n[b] = m ? u + "px" : "", n.transform = "", n));
}
function ci(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, s = t.adaptive, a = s === void 0 ? !0 : s, l = t.roundOffsets, c = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(n.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return f.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: mt(n.placement),
    variation: ce(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Po(Object.assign({}, i, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Po(Object.assign({}, i, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const ui = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ci,
  data: {}
};
function fi(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, s = n.elements[t];
    !tt(s) || !ut(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function hi(e) {
  var n = e.state, t = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow), function() {
    Object.keys(n.elements).forEach(function(o) {
      var r = n.elements[o], s = n.attributes[o] || {}, a = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), l = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !tt(r) || !ut(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
const di = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fi,
  effect: hi,
  requires: ["computeStyles"]
};
var pi = [ri, ii, ui, di], Un = /* @__PURE__ */ ni({
  defaultModifiers: pi
});
function gi(e) {
  return e === "x" ? "y" : "x";
}
function ze(e, n, t) {
  return Ut(e, Qe(n, t));
}
function _i(e, n, t) {
  var o = ze(e, n, t);
  return o > t ? t : o;
}
function vi(e) {
  var n = e.state, t = e.options, o = e.name, r = t.mainAxis, s = r === void 0 ? !0 : r, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, h = t.tether, u = h === void 0 ? !0 : h, p = t.tetherOffset, v = p === void 0 ? 0 : p, _ = io(n, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), m = mt(n.placement), x = ce(n.placement), b = !x, E = mr(m), S = gi(E), y = n.modifiersData.popperOffsets, C = n.rects.reference, k = n.rects.popper, O = typeof v == "function" ? v(Object.assign({}, n.rects, {
    placement: n.placement
  })) : v, N = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), $ = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (s) {
      var B, U = E === "y" ? nt : vt, V = E === "y" ? ft : Rt, q = E === "y" ? "height" : "width", Y = y[E], qt = Y + _[U], ht = Y - _[V], rt = u ? -k[q] / 2 : 0, Vt = x === le ? C[q] : k[q], yt = x === le ? -k[q] : -C[q], At = n.elements.arrow, R = u && At ? gr(At) : {
        width: 0,
        height: 0
      }, L = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : br(), W = L[U], K = L[V], X = ze(0, C[q], R[q]), dt = b ? C[q] / 2 - rt - X - W - N.mainAxis : Vt - X - W - N.mainAxis, Yt = b ? -C[q] / 2 + rt + X + K + N.mainAxis : yt + X + K + N.mainAxis, Xt = n.elements.arrow && $n(n.elements.arrow), Nn = Xt ? E === "y" ? Xt.clientTop || 0 : Xt.clientLeft || 0 : 0, Le = (B = $ == null ? void 0 : $[E]) != null ? B : 0, T = Y + dt - Le - Nn, Ne = Y + Yt - Le, $t = ze(u ? Qe(qt, T) : qt, Y, u ? Ut(ht, Ne) : ht);
      y[E] = $t, I[E] = $t - Y;
    }
    if (l) {
      var fe, De = E === "x" ? nt : vt, Te = E === "x" ? ft : Rt, Ot = y[S], Pe = S === "y" ? "height" : "width", uo = Ot + _[De], fo = Ot - _[Te], Dn = [nt, vt].indexOf(m) !== -1, ho = (fe = $ == null ? void 0 : $[S]) != null ? fe : 0, po = Dn ? uo : Ot - C[Pe] - k[Pe] - ho + N.altAxis, go = Dn ? Ot + C[Pe] + k[Pe] - ho - N.altAxis : fo, _o = u && Dn ? _i(po, Ot, go) : ze(u ? po : uo, Ot, u ? go : fo);
      y[S] = _o, I[S] = _o - Ot;
    }
    n.modifiersData[o] = I;
  }
}
const Fn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vi,
  requiresIfExists: ["offset"]
};
var mi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ue(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return mi[n];
  });
}
var yi = {
  start: "end",
  end: "start"
};
function Ho(e) {
  return e.replace(/start|end/g, function(n) {
    return yi[n];
  });
}
function bi(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, s = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? $s : c, i = ce(o), g = i ? l ? $o : $o.filter(function(p) {
    return ce(p) === i;
  }) : Ln, h = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  h.length === 0 && (h = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = h.reduce(function(p, v) {
    return p[v] = io(e, {
      placement: v,
      boundary: r,
      rootBoundary: s,
      padding: a
    })[mt(v)], p;
  }, {});
  return Object.keys(u).sort(function(p, v) {
    return u[p] - u[v];
  });
}
function wi(e) {
  if (mt(e) === On)
    return [];
  var n = Ue(e);
  return [Ho(e), n, Ho(n)];
}
function xi(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, s = r === void 0 ? !0 : r, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, h = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, v = t.allowedAutoPlacements, _ = n.options.placement, m = mt(_), x = m === _, b = c || (x || !p ? [Ue(_)] : wi(_)), E = [_].concat(b).reduce(function(R, L) {
      return R.concat(mt(L) === On ? bi(n, {
        placement: L,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : L);
    }, []), S = n.rects.reference, y = n.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, O = E[0], N = 0; N < E.length; N++) {
      var $ = E[N], I = mt($), B = ce($) === le, U = [nt, ft].indexOf(I) >= 0, V = U ? "width" : "height", q = io(n, {
        placement: $,
        boundary: i,
        rootBoundary: g,
        altBoundary: h,
        padding: f
      }), Y = U ? B ? Rt : vt : B ? ft : nt;
      S[V] > y[V] && (Y = Ue(Y));
      var qt = Ue(Y), ht = [];
      if (s && ht.push(q[I] <= 0), l && ht.push(q[Y] <= 0, q[qt] <= 0), ht.every(function(R) {
        return R;
      })) {
        O = $, k = !1;
        break;
      }
      C.set($, ht);
    }
    if (k)
      for (var rt = p ? 3 : 1, Vt = function(L) {
        var W = E.find(function(K) {
          var X = C.get(K);
          if (X)
            return X.slice(0, L).every(function(dt) {
              return dt;
            });
        });
        if (W)
          return O = W, "break";
      }, yt = rt; yt > 0; yt--) {
        var At = Vt(yt);
        if (At === "break")
          break;
      }
    n.placement !== O && (n.modifiersData[o]._skip = !0, n.placement = O, n.reset = !0);
  }
}
const qn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: xi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wr(e) {
  return e.button === 2;
}
const Ei = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Pn = "show", Fe = "contextmenu";
var Ht, Q, jt, Qt, ke, Wt, Se, Vn, an, ln, cn, un, xr, fn, Er;
const Gt = class extends Cn {
  constructor() {
    super(...arguments);
    w(this, Se);
    w(this, un);
    w(this, fn);
    w(this, Ht, void 0);
    w(this, Q, void 0);
    w(this, jt, /* @__PURE__ */ new Map());
    w(this, Qt, void 0);
    w(this, ke, void 0);
    w(this, Wt, void 0);
    w(this, an, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let r = d(this, jt).get(t);
      r || (r = Un(o.parentElement, o, {
        modifiers: [Fn, qn],
        placement: "right-start"
      }), d(this, jt).set(t, r)), r.update();
    });
    w(this, ln, (t) => {
      const o = d(this, jt).get(t);
      o && (o.destroy(), d(this, jt).delete(t));
    });
    w(this, cn, (t, o, r, s) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: s("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Pn);
  }
  get menu() {
    var r, s;
    if (d(this, Ht))
      return d(this, Ht);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Fe), document.body.appendChild(o);
    else if (t) {
      const a = (r = t.getAttribute("href")) != null ? r : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Fe) ? o = l : o = (s = t.parentNode) == null ? void 0 : s.querySelector(`.${Fe}`);
      }
    }
    if (o)
      return A(this, Ht, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return d(this, Q) ? d(this, Q) : z(this, Se, Vn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    t instanceof MouseEvent && (t.preventDefault(), t = { x: t.clientX, y: t.clientY }), A(this, ke, t || Gt.mousePos), this.menu.classList.add(Pn), z(this, un, xr).call(this), z(this, Se, Vn).call(this).update();
  }
  hide() {
    var t, o, r, s;
    (t = d(this, Q)) == null || t.destroy(), A(this, Q, void 0), (o = d(this, Ht)) == null || o.classList.remove(Pn), (s = (r = d(this, Wt)) == null ? void 0 : r.$) == null || s.clearAllSubMenu();
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = d(this, Q)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && wr(t) || Gt.getAll().forEach((o) => o.hide());
  }
  static show(t) {
    const o = Gt.ensure(document.body), { position: r, event: s, ...a } = t;
    return o.setOptions(a), o.show(s || r), s && s.stopPropagation(), o;
  }
  static hide() {
    const t = Gt.get(document.body);
    return t == null || t.hide(), t;
  }
};
let Ct = Gt;
Ht = new WeakMap(), Q = new WeakMap(), jt = new WeakMap(), Qt = new WeakMap(), ke = new WeakMap(), Wt = new WeakMap(), Se = new WeakSet(), Vn = function() {
  const t = {
    modifiers: [Fn, qn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return d(this, Q) ? d(this, Q).setOptions(t) : A(this, Q, Un(z(this, fn, Er).call(this), this.menu, t)), d(this, Q);
}, an = new WeakMap(), ln = new WeakMap(), cn = new WeakMap(), un = new WeakSet(), xr = function() {
  let { menu: t } = this.options;
  !t || ((Array.isArray(t) || typeof t == "function") && (t = { items: t }), d(this, Wt) ? d(this, Wt).render(t) : A(this, Wt, new Qo(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    ...t,
    afterRender: d(this, an),
    beforeDestroy: d(this, ln),
    onRenderItem: d(this, cn)
  })));
}, fn = new WeakSet(), Er = function() {
  return d(this, Qt) || A(this, Qt, {
    getBoundingClientRect: () => {
      const { x: t, y: o } = d(this, ke);
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
  }), d(this, Qt);
}, D(Ct, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(Ct, "mousePos");
document.addEventListener("contextmenu", (e) => {
  const n = e.target;
  if (n.closest(`.${Fe}`))
    return;
  const t = n.closest(Ei);
  if (t) {
    const o = Ct.ensure(t);
    o.show(e), console.log("contextmenu", { contextmenu: o, ContextMenu: Ct });
  }
});
document.addEventListener("click", Ct.clear);
document.addEventListener("mousemove", (e) => {
  Ct.mousePos = { x: e.clientX, y: e.clientY };
});
function ki(e) {
  return (e == null ? void 0 : e.nodeType) !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false";
}
const Si = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', de = "show", jo = "dropdown-menu";
var It, pt;
const hn = class extends Cn {
  constructor() {
    super(...arguments);
    w(this, It, void 0);
    w(this, pt, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(de);
  }
  get menu() {
    var t, o;
    if (!d(this, It)) {
      const { element: r } = this;
      let s;
      const a = (t = r.getAttribute("href")) != null ? t : r.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (s = document.querySelector(a)), !s) {
        const l = r.nextElementSibling;
        l != null && l.classList.contains(jo) ? s = l : s = (o = r.parentNode) == null ? void 0 : o.querySelector(`.${jo}`);
      }
      if (s)
        A(this, It, s);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return d(this, It);
  }
  get popper() {
    return d(this, pt) || A(this, pt, Un(this.element, this.menu, {
      modifiers: [Fn, qn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), d(this, pt);
  }
  show(t) {
    (t == null ? void 0 : t.hideOthers) !== !1 && hn.getAll().forEach((o) => o !== this ? o.hide() : null), this.menu.classList.add(de), this.element.classList.add(de), this.popper.update(), this.element.focus();
  }
  hide() {
    var t, o;
    ki(this.element) || !this.isShown || ((t = d(this, pt)) == null || t.destroy(), A(this, pt, void 0), (o = d(this, It)) == null || o.classList.remove(de), this.element.classList.remove(de));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = d(this, pt)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && wr(t) || hn.getAll().forEach((o) => o.hide());
  }
};
let Nt = hn;
It = new WeakMap(), pt = new WeakMap(), D(Nt, "NAME", "dropdown"), D(Nt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(e) {
  const t = e.target.closest(Si);
  if (t) {
    const o = Nt.ensure(t);
    o.toggle(), console.log("dropdown", { dropdown: o, Dropdown: Nt });
  } else
    Nt.clear(e);
});
function Ci(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ao({ col: e, className: n, height: t, row: o, onRenderCell: r, style: s, outerStyle: a, children: l, outerClass: c, ...f }) {
  var y, C;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...a
  }, { align: g, border: h } = e.setting, u = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...s
  }, p = ["dtable-cell", c, e.setting.className, {
    "has-border-left": h === !0 || h === "left",
    "has-border-right": h === !0 || h === "right"
  }], v = ["dtable-cell-content", n], _ = [(C = l != null ? l : (y = o.data) == null ? void 0 : y[e.name]) != null ? C : ""], m = r ? r(_, { row: o, col: e }, M) : _, x = [], b = [], E = {}, S = {};
  return m == null || m.forEach((k) => {
    var O;
    if (typeof k == "object" && k && !er(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const N = k.outer ? x : b;
      k.html ? N.push(/* @__PURE__ */ M("div", {
        className: j("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(O = k.attrs) != null ? O : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : v).push(k.className), k.children && N.push(k.children), k.attrs && Object.assign(k.outer ? E : S, k.attrs));
    } else
      b.push(k);
  }), /* @__PURE__ */ M("div", {
    className: j(p),
    style: i,
    "data-col": e.name,
    ...f,
    ...E
  }, b.length > 0 && /* @__PURE__ */ M("div", {
    className: j(v),
    style: u,
    ...S
  }, b), x);
}
function Ri({ col: e, children: n, style: t, ...o }) {
  var s;
  const { sortType: r } = e.setting;
  return /* @__PURE__ */ M(ao, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": r || null,
    "data-type": e.type,
    ...o
  }, (s = e.setting.title) != null ? s : e.setting.name, r && /* @__PURE__ */ M("div", {
    className: `dtable-sort dtable-sort-${r === !0 ? "none" : r}`
  }), n);
}
function Hn({ row: e, className: n, top: t = 0, left: o = 0, width: r, height: s, cols: a, CellComponent: l = ao, onRenderCell: c }) {
  return /* @__PURE__ */ M("div", {
    className: j("dtable-cells", n),
    style: { top: t, left: o, width: r, height: s }
  }, a.map((f) => f.visible ? /* @__PURE__ */ M(l, {
    key: f.name,
    col: f,
    row: e,
    onRenderCell: c
  }) : null));
}
function kr({
  row: e,
  className: n,
  top: t,
  height: o,
  fixedLeftCols: r,
  fixedRightCols: s,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: c,
  scrollColsWidth: f,
  fixedRightWidth: i,
  scrollLeft: g,
  CellComponent: h = ao,
  onRenderCell: u,
  style: p,
  ...v
}) {
  let _ = null;
  r != null && r.length && (_ = /* @__PURE__ */ M(Hn, {
    className: "dtable-fixed-left",
    cols: r,
    width: l,
    row: e,
    CellComponent: h,
    onRenderCell: u
  }));
  let m = null;
  a != null && a.length && (m = /* @__PURE__ */ M(Hn, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: e,
    CellComponent: h,
    onRenderCell: u
  }));
  let x = null;
  s != null && s.length && (x = /* @__PURE__ */ M(Hn, {
    className: "dtable-fixed-right",
    cols: s,
    left: l + c,
    width: i,
    row: e,
    CellComponent: h,
    onRenderCell: u
  }));
  const b = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ M("div", {
    className: j("dtable-row", n),
    style: b,
    "data-id": e.id,
    ...v
  }, _, m, x);
}
function Mi({ height: e, onRenderRow: n, ...t }) {
  const o = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Ri
  };
  if (n) {
    const r = n({ props: o }, M);
    r && Object.assign(o, r);
  }
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ M(kr, {
    ...o
  }));
}
function Ai({
  className: e,
  style: n,
  top: t,
  rows: o,
  height: r,
  rowHeight: s,
  scrollTop: a,
  onRenderRow: l,
  ...c
}) {
  return n = { ...n, top: t, height: r }, /* @__PURE__ */ M("div", {
    className: j("dtable-rows", e),
    style: n
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: s,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, M);
    return g && Object.assign(i, g), /* @__PURE__ */ M(kr, {
      ...i
    });
  }));
}
const tn = /* @__PURE__ */ new Map(), en = [];
function Sr(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && tn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  tn.set(t, e), (n == null ? void 0 : n.buildIn) && !en.includes(t) && en.push(t);
}
function Oe(e, n) {
  Sr(e, n);
  const t = (o) => {
    if (!o)
      return e;
    const { defaultOptions: r, ...s } = e;
    return {
      ...s,
      defaultOptions: { ...r, ...o }
    };
  };
  return t.plugin = e, t;
}
function Cr(e) {
  return tn.delete(e);
}
function $i(e) {
  if (typeof e == "string") {
    const n = tn.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Rr(e, n, t) {
  return n.forEach((o) => {
    var s;
    if (!o)
      return;
    const r = $i(o);
    !r || t.has(r.name) || ((s = r.plugins) != null && s.length && Rr(e, r.plugins, t), e.push(r), t.add(r.name));
  }), e;
}
function Oi(e = [], n = !0) {
  return n && en.length && e.unshift(...en), e != null && e.length ? Rr([], e, /* @__PURE__ */ new Set()) : [];
}
function Wo() {
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
var Bt, te, xt, gt, Et, F, it, at, ee, Ce, _t, ne, oe, dn, Mr, pn, Ar, gn, $r, _n, Or, Re, Xn, vn, mn, Me, Ae, yn, bn, wn, Lr, xn, Nr, En, Dr;
class Yn extends zt {
  constructor(t) {
    var o;
    super(t);
    w(this, dn);
    w(this, pn);
    w(this, gn);
    w(this, _n);
    w(this, Re);
    w(this, wn);
    w(this, xn);
    w(this, En);
    D(this, "ref", rr());
    w(this, Bt, 0);
    w(this, te, void 0);
    w(this, xt, !1);
    w(this, gt, void 0);
    w(this, Et, void 0);
    w(this, F, []);
    w(this, it, void 0);
    w(this, at, /* @__PURE__ */ new Map());
    w(this, ee, {});
    w(this, Ce, void 0);
    D(this, "updateLayout", () => {
      d(this, Bt) && cancelAnimationFrame(d(this, Bt)), A(this, Bt, requestAnimationFrame(() => {
        A(this, it, void 0), this.forceUpdate(), A(this, Bt, 0);
      }));
    });
    w(this, _t, (t, o) => {
      o = o || t.type;
      const r = d(this, at).get(o);
      if (!!(r != null && r.length)) {
        for (const s of r)
          if (s.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, ne, (t) => {
      d(this, _t).call(this, t, `window_${t.type}`);
    });
    w(this, oe, (t) => {
      d(this, _t).call(this, t, `document_${t.type}`);
    });
    w(this, vn, (t, o) => {
      if (this.options.onRenderRow) {
        const r = this.options.onRenderRow.call(this, t, o);
        r && Object.assign(t.props, r);
      }
      return d(this, F).forEach((r) => {
        if (r.onRenderRow) {
          const s = r.onRenderRow.call(this, t, o);
          s && Object.assign(t.props, s);
        }
      }), t.props;
    });
    w(this, mn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), d(this, F).forEach((r) => {
      r.onRenderHeaderRow && (t.props = r.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    w(this, Me, (t, o, r) => {
      const { row: s, col: a } = o;
      t[0] = this.getCellValue(s, a);
      const l = s.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, r)), this.options[l] && (t = this.options[l].call(this, t, o, r)), d(this, F).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, r));
      }), t;
    });
    w(this, Ae, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, yn, (t) => {
      var l, c, f, i, g;
      const o = this.getPointerInfo(t);
      if (!o)
        return;
      const { rowID: r, colName: s, cellElement: a } = o;
      if (r === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: s, element: a }), d(this, F).forEach((h) => {
          var u;
          (u = h.onHeaderCellClick) == null || u.call(this, t, { colName: s, element: a });
        }));
      else {
        const { rowElement: h } = o, u = this.layout.visibleRows.find((p) => p.id === r);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, t, { colName: s, rowID: r, rowInfo: u, element: a, rowElement: h })) === !0)
            return;
          for (const p of d(this, F))
            if (((f = p.onCellClick) == null ? void 0 : f.call(this, t, { colName: s, rowID: r, rowInfo: u, element: a, rowElement: h })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, t, { rowID: r, rowInfo: u, element: h })) === !0)
          return;
        for (const p of d(this, F))
          if (((g = p.onRowClick) == null ? void 0 : g.call(this, t, { rowID: r, rowInfo: u, element: h })) === !0)
            return;
      }
    });
    w(this, bn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    A(this, te, (o = t.id) != null ? o : `dtable-${hr(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, A(this, Et, Object.freeze(Oi(t.plugins))), d(this, Et).forEach((r) => {
      var c;
      const { methods: s, data: a, state: l } = r;
      s && Object.entries(s).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(d(this, ee), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = r.onCreate) == null || c.call(this, r);
    });
  }
  get options() {
    var t;
    return ((t = d(this, it)) == null ? void 0 : t.options) || d(this, gt) || Wo();
  }
  get plugins() {
    return d(this, F);
  }
  get layout() {
    return d(this, it);
  }
  get id() {
    return d(this, te);
  }
  get data() {
    return d(this, ee);
  }
  get parent() {
    var t, o;
    return (o = this.props.parent) != null ? o : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    A(this, gt, void 0);
  }
  componentDidMount() {
    if (d(this, xt) ? this.forceUpdate() : z(this, Re, Xn).call(this), d(this, F).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([r, s]) => {
        s && this.on(r, s);
      }));
    }), this.on("click", d(this, yn)), this.on("keydown", d(this, bn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), A(this, Ce, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    d(this, F).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, xt) ? z(this, Re, Xn).call(this) : d(this, F).forEach((t) => {
      var o;
      (o = t.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = d(this, Ce)) == null || o.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const r of d(this, at).keys())
        r.startsWith("window_") ? window.removeEventListener(r.replace("window_", ""), d(this, ne)) : r.startsWith("document_") ? document.removeEventListener(r.replace("document_", ""), d(this, oe)) : t.removeEventListener(r, d(this, _t));
    d(this, F).forEach((r) => {
      var s;
      (s = r.onUnmounted) == null || s.call(this);
    }), d(this, Et).forEach((r) => {
      var s;
      (s = r.onDestory) == null || s.call(this);
    }), A(this, ee, {}), d(this, at).clear();
  }
  on(t, o, r) {
    var a;
    r && (t = `${r}_${t}`);
    const s = d(this, at).get(t);
    s ? s.push(o) : (d(this, at).set(t, [o]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), d(this, ne)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), d(this, oe)) : (a = this.ref.current) == null || a.addEventListener(t, d(this, _t)));
  }
  off(t, o, r) {
    var l;
    r && (t = `${r}_${t}`);
    const s = d(this, at).get(t);
    if (!s)
      return;
    const a = s.indexOf(o);
    a >= 0 && s.splice(a, 1), s.length || (d(this, at).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), d(this, ne)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), d(this, oe)) : (l = this.ref.current) == null || l.removeEventListener(t, d(this, _t)));
  }
  emitCustomEvent(t, o) {
    d(this, _t).call(this, o instanceof Event ? o : new CustomEvent(t, { detail: o }), t);
  }
  scroll(t, o) {
    const { scrollLeft: r, scrollTop: s, rowsHeightTotal: a, rowsHeight: l, rowHeight: c, colsInfo: { scrollWidth: f, scrollColsWidth: i } } = this.layout, { to: g } = t;
    let { scrollLeft: h, scrollTop: u } = t;
    if (g === "up" || g === "down")
      u = s + (g === "down" ? 1 : -1) * Math.floor(l / c) * c;
    else if (g === "left" || g === "right")
      h = r + (g === "right" ? 1 : -1) * f;
    else if (g === "home")
      u = 0;
    else if (g === "end")
      u = a - l;
    else if (g === "left-begin")
      h = 0;
    else if (g === "right-end")
      h = i - f;
    else {
      const { offsetLeft: v, offsetTop: _ } = t;
      typeof v == "number" && (h = r + v), typeof _ == "number" && (h = s + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, i - f)), h !== r && (p.scrollLeft = h)), typeof u == "number" && (u = Math.max(0, Math.min(u, a - l)), u !== s && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var v;
      (v = this.options.onScroll) == null || v.call(this, p), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: o, colsList: r } = this.layout;
    return typeof t == "number" ? r[t] : o[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: r } = this.layout;
    return typeof t == "number" ? o[t] : r[t];
  }
  getCellValue(t, o) {
    var c, f;
    const r = typeof t == "object" ? t : this.getRowInfo(t);
    if (!r)
      return;
    const s = typeof o == "object" ? o : this.getColInfo(o);
    if (!s)
      return;
    let a = r.id === "HEADER" ? (c = s.setting.title) != null ? c : s.setting.name : (f = r.data) == null ? void 0 : f[s.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, r, s, a)), a;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, o) {
    const { dirtyType: r, state: s } = t;
    r === "layout" ? A(this, it, void 0) : r === "options" && (A(this, it, void 0), A(this, gt, void 0)), s ? this.setState({ ...s }, o) : this.forceUpdate(o);
  }
  getPointerInfo(t) {
    const o = t.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const r = o.closest(".dtable-cell");
    if (!r)
      return;
    const s = r.closest(".dtable-row");
    if (!s)
      return;
    const a = r == null ? void 0 : r.getAttribute("data-col"), l = s == null ? void 0 : s.getAttribute("data-id");
    if (!(typeof a != "string" || typeof l != "string"))
      return {
        cellElement: r,
        rowElement: s,
        colName: a,
        rowID: l,
        target: o
      };
  }
  render() {
    var u;
    const t = z(this, En, Dr).call(this), { className: o, rowHover: r, colHover: s, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
      "dtable-hover-row": r,
      "dtable-hover-col": s,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
      "scrollbar-hover": f
    }], h = [];
    return t && d(this, F).forEach((p) => {
      var _;
      const v = (_ = p.onRender) == null ? void 0 : _.call(this, t);
      !v || (v.style && Object.assign(i, v.style), v.className && g.push(v.className), v.children && h.push(v.children));
    }), /* @__PURE__ */ M("div", {
      id: d(this, te),
      className: j(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && z(this, dn, Mr).call(this, t), t && z(this, pn, Ar).call(this, t), t && z(this, gn, $r).call(this, t), t && z(this, _n, Or).call(this, t));
  }
}
Bt = new WeakMap(), te = new WeakMap(), xt = new WeakMap(), gt = new WeakMap(), Et = new WeakMap(), F = new WeakMap(), it = new WeakMap(), at = new WeakMap(), ee = new WeakMap(), Ce = new WeakMap(), _t = new WeakMap(), ne = new WeakMap(), oe = new WeakMap(), dn = new WeakSet(), Mr = function(t) {
  const { header: o, colsInfo: r, headerHeight: s, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ M(Mi, {
      scrollLeft: a,
      height: s,
      onRenderCell: d(this, Me),
      onRenderRow: d(this, mn),
      ...r
    });
  let l, c;
  if (typeof o == "function") {
    const f = o(t, this.state);
    typeof f == "object" && f && "__html" in f ? c = f : l = f;
  } else
    l = o;
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: s },
    dangerouslySetInnerHTML: c
  }, l);
}, pn = new WeakSet(), Ar = function(t) {
  const { headerHeight: o, rowsHeight: r, visibleRows: s, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ M(Ai, {
    top: o,
    height: r,
    rows: s,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: d(this, Me),
    onRenderRow: d(this, vn),
    ...l
  });
}, gn = new WeakSet(), $r = function(t) {
  const { footer: o, footerHeight: r } = t;
  if (!o)
    return null;
  let s, a;
  if (typeof o == "function") {
    const l = o(t, this.state);
    typeof l == "object" && l && "__html" in l ? a = l : s = l;
  } else
    s = o;
  return /* @__PURE__ */ M("div", {
    className: "dtable-footer",
    style: { height: r },
    dangerouslySetInnerHTML: a
  }, s);
}, _n = new WeakSet(), Or = function(t) {
  const o = [], { scrollLeft: r, colsInfo: s, scrollTop: a, rowsHeight: l, rowsHeightTotal: c } = t, { scrollColsWidth: f, scrollWidth: i } = s, { scrollbarSize: g = 12, horzScrollbarPos: h } = this.options;
  return f > i && o.push(
    /* @__PURE__ */ M(Ro, {
      key: "horz",
      type: "horz",
      scrollPos: r,
      scrollSize: f,
      clientSize: i,
      onScroll: d(this, Ae),
      left: s.fixedLeftWidth,
      bottom: h === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ M(Ro, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: d(this, Ae),
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Re = new WeakSet(), Xn = function() {
  var t;
  A(this, xt, !1), (t = this.options.afterRender) == null || t.call(this), d(this, F).forEach((o) => {
    var r;
    return (r = o.afterRender) == null ? void 0 : r.call(this);
  });
}, vn = new WeakMap(), mn = new WeakMap(), Me = new WeakMap(), Ae = new WeakMap(), yn = new WeakMap(), bn = new WeakMap(), wn = new WeakSet(), Lr = function() {
  if (d(this, gt))
    return !1;
  const o = { ...Wo(), ...d(this, Et).reduce((r, s) => {
    const { defaultOptions: a } = s;
    return a && Object.assign(r, a), r;
  }, {}), ...this.props };
  return A(this, gt, o), A(this, F, d(this, Et).reduce((r, s) => {
    const { when: a, options: l } = s;
    return (!a || a(o)) && (r.push(s), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), r;
  }, [])), !0;
}, xn = new WeakSet(), Nr = function() {
  var yt, At;
  const { plugins: t } = this;
  let o = d(this, gt);
  t.forEach((R) => {
    var W;
    const L = (W = R.beforeLayout) == null ? void 0 : W.call(this, o);
    L && (o = { ...o, ...L });
  });
  const { defaultColWidth: r, minColWidth: s, maxColWidth: a } = o, l = [], c = [], f = [], i = {}, g = [], h = [];
  let u = 0, p = 0, v = 0;
  o.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: L,
      type: W = "",
      fixed: K = !1,
      flex: X = !1,
      width: dt = r,
      minWidth: Yt = s,
      maxWidth: Xt = a,
      ...Nn
    } = R, Le = Ci(dt, Yt, Xt), T = {
      name: L,
      type: W,
      setting: {
        name: L,
        type: W,
        fixed: K,
        flex: X,
        width: dt,
        minWidth: Yt,
        maxWidth: Xt,
        ...Nn
      },
      flex: K ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: Le,
      realWidth: 0,
      visible: !0,
      index: g.length
    };
    t.forEach((Ne) => {
      var fe, De;
      const $t = (fe = Ne.colTypes) == null ? void 0 : fe[W];
      if ($t) {
        const Te = typeof $t == "function" ? $t(T) : $t;
        Te && Object.assign(T.setting, Te);
      }
      (De = Ne.onAddCol) == null || De.call(this, T);
    }), T.realWidth = T.realWidth || T.width, K === "left" ? (T.left = u, u += T.width, l.push(T)) : K === "right" ? (T.left = p, p += T.width, c.push(T)) : (T.left = v, v += T.width, f.push(T)), T.flex && h.push(T), g.push(T), i[T.name] = T;
  });
  let _ = o.width, m = 0;
  const x = u + v + p;
  if (typeof _ == "function" && (_ = _.call(this, x)), _ === "auto")
    m = x;
  else if (_ === "100%") {
    const { parent: R } = this;
    if (R)
      m = R.clientWidth;
    else {
      m = 0, A(this, xt, !0);
      return;
    }
  } else
    m = _ != null ? _ : 0;
  const { data: b, rowKey: E = "id", rowHeight: S } = o, y = [], C = (R, L, W) => {
    var X, dt;
    const K = { data: W != null ? W : { [E]: R }, id: R, index: y.length, top: 0 };
    if (W || (K.lazy = !0), y.push(K), ((X = o.onAddRow) == null ? void 0 : X.call(this, K, L)) !== !1) {
      for (const Yt of t)
        if (((dt = Yt.onAddRow) == null ? void 0 : dt.call(this, K, L)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let R = 0; R < b; R++)
      C(`${R}`, R);
  else
    Array.isArray(b) && b.forEach((R, L) => {
      var W;
      typeof R == "object" ? C(`${(W = R[E]) != null ? W : ""}`, L, R) : C(`${R != null ? R : ""}`, L);
    });
  let k = y;
  const O = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, k);
    R && (k = R);
  }
  for (const R of t) {
    const L = (yt = R.onAddRows) == null ? void 0 : yt.call(this, k);
    L && (k = L);
  }
  k.forEach((R, L) => {
    O[R.id] = R, R.index = L, R.top = R.index * S;
  });
  const { header: N, footer: $ } = o, I = N ? o.headerHeight || S : 0, B = $ ? o.footerHeight || S : 0;
  let U = o.height, V = 0;
  const q = k.length * S, Y = I + B + q;
  if (typeof U == "function" && (U = U.call(this, Y)), U === "auto")
    V = Y;
  else if (typeof U == "object")
    V = Math.min(U.max, Math.max(U.min, Y));
  else if (U === "100%") {
    const { parent: R } = this;
    if (R)
      V = R.clientHeight;
    else {
      V = 0, A(this, xt, !0);
      return;
    }
  } else
    V = U;
  const qt = V - I - B, ht = m - u - p, rt = {
    options: o,
    allRows: y,
    width: m,
    height: V,
    rows: k,
    rowsMap: O,
    rowHeight: S,
    rowsHeight: qt,
    rowsHeightTotal: q,
    header: N,
    footer: $,
    headerHeight: I,
    footerHeight: B,
    colsMap: i,
    colsList: g,
    flexCols: h,
    colsInfo: {
      fixedLeftCols: l,
      fixedRightCols: c,
      scrollCols: f,
      fixedLeftWidth: u,
      scrollWidth: ht,
      scrollColsWidth: v,
      fixedRightWidth: p
    }
  }, Vt = (At = o.onLayout) == null ? void 0 : At.call(this, rt);
  Vt && Object.assign(rt, Vt), t.forEach((R) => {
    if (R.onLayout) {
      const L = R.onLayout.call(this, rt);
      L && Object.assign(rt, L);
    }
  }), A(this, it, rt);
}, En = new WeakSet(), Dr = function() {
  (z(this, wn, Lr).call(this) || !d(this, it)) && z(this, xn, Nr).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: r, colsInfo: { scrollCols: s, scrollWidth: a, scrollColsWidth: l } } = t;
  if (r.length) {
    const b = a - l;
    if (b > 0) {
      const E = r.reduce((y, C) => y + C.flex, 0);
      let S = 0;
      r.forEach((y) => {
        const C = Math.min(b - S, Math.ceil(b * (y.flex / E)));
        y.realWidth = C + y.width, S += y.realWidth;
      });
    } else
      r.forEach((E) => {
        E.realWidth = E.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let c = 0;
  s.forEach((b) => {
    b.left = c, c += b.realWidth, b.visible = b.left + b.realWidth >= o && b.left <= o + a;
  });
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: h } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), p = Math.floor(u / h), v = u + i, _ = Math.min(g.length, Math.ceil(v / h)), m = [], { rowDataGetter: x } = this.options;
  for (let b = p; b < _; b++) {
    const E = g[b];
    E.lazy && x && (E.data = x([E.id])[0], E.lazy = !1), m.push(E);
  }
  return t.visibleRows = m, t.scrollTop = u, t.scrollLeft = o, t;
}, D(Yn, "addPlugin", Sr), D(Yn, "removePlugin", Cr);
function Io(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((r) => r.classList.remove(o)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((r) => r.classList.add(o));
}
const Tr = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var r, s;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const o = (s = t == null ? void 0 : t.getAttribute("data-col")) != null ? s : !1;
      Io(this, o);
    },
    mouseleave() {
      Io(this, !1);
    }
  }
};
Oe(Tr, { buildIn: !0 });
function Li(e, n) {
  var a, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: r } = this.options, s = (c, f) => {
    r && !r.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (e === void 0 ? (n === void 0 && (n = !Pr.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    s(c, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((c) => {
    s(c, n != null ? n : !t[c]);
  })), Object.keys(o).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, o, t);
    c && Object.keys(c).forEach((f) => {
      c[f] ? t[f] = !0 : delete t[f];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var f;
      (f = this.options.onCheckChange) == null || f.call(this, o);
    });
  }
  return o;
}
function Ni(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function Pr() {
  var t, o;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((r, s) => r + (n.call(this, s.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Di() {
  return Object.keys(this.state.checkedRows);
}
const Hr = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Li,
    isRowChecked: Ni,
    isAllRowChecked: Pr,
    getChecks: Di
  },
  onRenderCell(e, { row: n, col: t }) {
    var l, c;
    const { id: o } = n, { canRowCheckable: r } = this.options;
    if (r && !r.call(this, o))
      return e;
    const { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var a, l;
    const { id: o } = n, { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(f), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: j(e.className, "is-checked") };
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
Oe(Hr);
function Gn(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, o = n.children && t && t[e];
  let r = !1, { parent: s } = n;
  for (; s; ) {
    const a = Gn.call(this, s);
    if (a.state !== "expanded") {
      r = !0;
      break;
    }
    s = a.parent;
  }
  return n.state = r ? "hidden" : o ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Gn.call(this, n.parent).level + 1 : 0, n;
}
function Ti(e, n) {
  var r;
  let t = (r = this.state.collapsedRows) != null ? r : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !jr.call(this)), n) {
      const s = o.entries();
      for (const [a, l] of s)
        l.state === "expanded" && (t[a] = !0);
    } else
      t = {};
  else {
    const s = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[s[0]]), s.forEach((a) => {
      const l = o.get(a);
      n && (l == null ? void 0 : l.children) ? t[a] = !0 : delete t[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var s;
    (s = this.options.onNestedChange) == null || s.call(this);
  });
}
function jr() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Wr(e, n = 0, t, o = 0) {
  var r;
  t || (t = [...e.keys()]);
  for (const s of t) {
    const a = e.get(s);
    !a || (a.level === o && (a.order = n++), (r = a.children) != null && r.length && (n = Wr(e, n, a.children, o + 1)));
  }
  return n;
}
function Ir(e, n, t, o) {
  const r = e.getNestedRowInfo(n);
  return !r || r.state === "" || !r.children || r.children.forEach((s) => {
    o[s] = t, Ir(e, s, t, o);
  }), r;
}
function Br(e, n, t, o, r) {
  var l;
  const s = e.getNestedRowInfo(n);
  if (!s || s.state === "")
    return;
  ((l = s.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : r[c]);
    return t === f;
  })) && (o[n] = t), s.parent && Br(e, s.parent, t, o, r);
}
const zr = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const { nestedMap: t } = this.data, o = t.get(e.id), r = t.get(n.id);
      return (o == null ? void 0 : o.parent) === (r == null ? void 0 : r.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(n).forEach(([r, s]) => {
        const a = Ir(this, r, s, o);
        a != null && a.parent && Br(this, a.parent, s, o, t);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Ti,
    isAllCollapsed: jr,
    getNestedRowInfo: Gn
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var r, s, a, l, c;
    const { nestedMap: n } = this.data, t = (s = e.data) == null ? void 0 : s[(r = this.options.nestedParentKey) != null ? r : "parent"], o = (a = n.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = t, (c = e.data) != null && c[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), n.set(e.id, o), t) {
      let f = n.get(t);
      f || (f = {
        state: "",
        level: 0
      }, n.set(t, f)), f.children || (f.children = []), f.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Wr(this.data.nestedMap), e.sort((n, t) => {
      var a, l;
      const o = this.getNestedRowInfo(n.id), r = this.getNestedRowInfo(t.id), s = ((a = o.order) != null ? a : 0) - ((l = r.order) != null ? l : 0);
      return s === 0 ? n.index - t.index : s;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l, c, f;
    const { id: o, data: r } = t, { nestedToggle: s } = n.setting, a = this.getNestedRowInfo(o);
    if (s && (a.children || a.parent) && e.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, n, r)) != null ? c : /* @__PURE__ */ M("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = s } = n.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), e.unshift(/* @__PURE__ */ M("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r, s;
    const { id: o } = n;
    return t.setting.nestedToggle && e.unshift((s = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, void 0, o, t, void 0)) != null ? s : /* @__PURE__ */ M("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: j(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = j(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
Oe(zr);
const ct = 24 * 60 * 60 * 1e3, J = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ue = (e, n = new Date()) => (e = J(e), n = J(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Kn = (e, n = new Date()) => J(e).getFullYear() === J(n).getFullYear(), Ur = (e, n = new Date()) => (e = J(e), n = J(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Pi = (e, n = new Date()) => {
  e = J(e), n = J(n);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / t), r = Math.floor(n.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((r + 4) / 7);
}, Hi = (e, n) => ue(J(n), e), ji = (e, n) => ue(J(n).getTime() - ct, e), Wi = (e, n) => ue(J(n).getTime() + ct, e), Ii = (e, n) => ue(J(n).getTime() - 2 * ct, e), nn = (e, n = "yyyy-MM-dd hh:mm") => {
  e = J(e);
  const t = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((o) => {
    if (new RegExp(`(${o})`).test(n)) {
      const r = `${t[o]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), n;
}, Bi = (e, n, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, r = nn(e, Kn(e) ? o.month : o.full);
  if (ue(e, n))
    return r;
  const s = nn(n, Kn(e, n) ? Ur(e, n) ? o.day : o.month : o.full);
  return o.str.replace("{0}", r).replace("{1}", s);
}, zi = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - ct * 7;
    case "oneMonth":
      return n - ct * 31;
    case "threeMonth":
      return n - ct * 31 * 3;
    case "halfYear":
      return n - ct * 183;
    case "oneYear":
      return n - ct * 365;
    case "twoYear":
      return n - 2 * (ct * 365);
    default:
      return 0;
  }
}, Jn = (e, n, t = !0, o = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, Jn(e, "day", t, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Jn(e, "day", t, o);
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
  return t ? o + e : o - e;
};
const Fr = {
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
        const { linkTemplate: o = "", linkProps: r } = n.setting, s = pe(o, t.data);
        return e[0] = /* @__PURE__ */ M("a", {
          href: s,
          ...r
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: o } = t, { avatarWithName: r, avatarClass: s = "size-sm circle", avatarKey: a = `${n.name}Avatar` } = n.setting, l = /* @__PURE__ */ M("div", {
          className: `avatar ${s} flex-none`
        }, /* @__PURE__ */ M("img", {
          src: o ? o[a] : ""
        }));
        return r ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: r = "var(--color-border)", circleColor: s = "var(--color-success-500)" } = n.setting, a = (t - o) / 2, l = t / 2, c = e[0];
        return e[0] = /* @__PURE__ */ M("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ M("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent"
        }), /* @__PURE__ */ M("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
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
        }, Math.round(c))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, row: t }) {
        var l;
        const o = (l = t.data) == null ? void 0 : l[n.name];
        if (!o)
          return e;
        const { actionBtnTemplate: r = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: s = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = s[c.action];
            return f && (c = { className: a, ...f, ...c }), pe(r, c);
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
        const { format: o, type: r } = t, s = e[0];
        return typeof o == "function" ? e[0] = r === "html" ? { html: o(s) } : o(s) : r === "datetime" ? e[0] = nn(s, o) : r === "html" ? e[0] = { html: pe(o, s) } : e[0] = pe(o, s), e;
      }
    }
  }
};
Oe(Fr);
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Tr,
  checkable: Hr,
  nested: zr,
  rich: Fr
}, Symbol.toStringTag, { value: "Module" }));
var $e;
class je {
  constructor(n, t) {
    D(this, "element");
    D(this, "options");
    w(this, $e, rr());
    this.element = n, this.options = { parent: n, ...t }, this.render();
  }
  get $() {
    return d(this, $e).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), cs(/* @__PURE__ */ M(Yn, {
      ref: d(this, $e),
      ...this.options
    }), this.element);
  }
}
$e = new WeakMap(), D(je, "NAME", "zui.dtable"), D(je, "definePlugin", Oe), D(je, "removePlugin", Cr), D(je, "plugins", Ui);
var lt, Z;
class Fi {
  constructor(n) {
    w(this, lt, void 0);
    w(this, Z, void 0);
    A(this, lt, n), A(this, Z, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, lt).parentElement.parentElement, d(this, lt).parentElement), this.addActive(d(this, Z).parentElement, d(this, Z)), d(this, Z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    A(this, Z, d(this, lt)), this.addActive(d(this, Z).parentElement, d(this, Z)), A(this, lt, document.querySelector(`[href='#${d(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, Z).getAttribute("id")}']`)), this.addActive(d(this, lt).parentElement.parentElement, d(this, lt).parentElement);
  }
  addActive(n, t) {
    const o = n.children;
    Array.from(o).forEach((s) => {
      s.classList.remove("active"), s.classList.contains("fade") && s.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(s) {
      t.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(t, o) {
      setTimeout(() => {
        n.classList.add("in"), t();
      }, 100);
    });
  }
}
lt = new WeakMap(), Z = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Fi(e.target).showTarget());
});
function qe(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zn(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (qe(e) && qe(t))
    for (const o in t)
      qe(t[o]) ? (e[o] || Object.assign(e, { [o]: {} }), Zn(e[o], t[o])) : Object.assign(e, { [o]: t[o] });
  return Zn(e, ...n);
}
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ct,
  createDate: J,
  isSameDay: ue,
  isSameYear: Kn,
  isSameMonth: Ur,
  isSameWeek: Pi,
  isToday: Hi,
  isYesterday: ji,
  isTomorrow: Wi,
  isDBY: Ii,
  formatDate: nn,
  formatDateSpan: Bi,
  getTimeBeforeDesc: zi,
  calculateTimestamp: Jn,
  formatString: pe,
  formatBytes: us,
  convertBytes: fs,
  isObject: qe,
  mergeDeep: Zn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yi as Avatar,
  Ct as ContextMenu,
  je as DTable,
  Nt as Dropdown,
  Qo as Menu,
  Fi as NavTabs,
  Ro as Scrollbar,
  Vi as browser,
  Ui as dtablePlugins,
  Xi as helpers,
  gs as store
};
