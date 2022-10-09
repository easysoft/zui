var yn = Object.defineProperty;
var wn = (e, n, t) => n in e ? yn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var H = (e, n, t) => (wn(e, typeof n != "symbol" ? n + "" : n, t), t), ee = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var f = (e, n, t) => (ee(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, C = (e, n, t, s) => (ee(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var z = (e, n, t) => (ee(e, n, "access private method"), t);
const vn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class kn extends HTMLElement {
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
    const t = vn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", kn);
var Xt, S, Le, Ne, bt, Re, Lt = {}, Te = [], Rn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Z(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function De(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function _(e, n, t) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Xt.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return $t(e, r, s, o, null);
}
function $t(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Le : o };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function We() {
  return { current: null };
}
function Jt(e) {
  return e.children;
}
function ot(e, n) {
  this.props = e, this.context = n;
}
function ft(e, n) {
  if (n == null)
    return e.__ ? ft(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? ft(e) : null;
}
function je(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return je(e);
  }
}
function Ce(e) {
  (!e.__d && (e.__d = !0) && bt.push(e) && !Nt.__r++ || Re !== S.debounceRendering) && ((Re = S.debounceRendering) || setTimeout)(Nt);
}
function Nt() {
  for (var e; Nt.__r = bt.length; )
    e = bt.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), bt = [], e.some(function(n) {
      var t, s, o, i, r, c;
      n.__d && (r = (i = (t = n).__v).__e, (c = t.__P) && (s = [], (o = Z({}, i)).__v = i.__v + 1, ae(c, i, o, t.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? ft(i) : r, i.__h), Be(s, i), i.__e != r && je(i)));
    });
}
function ze(e, n, t, s, o, i, r, c, a, h) {
  var l, p, u, d, g, b, m, v = s && s.__k || Te, x = v.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((d = t.__k[l] = (d = n[l]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? $t(null, d, null, null, d) : Array.isArray(d) ? $t(Jt, { children: d }, null, null, null) : d.__b > 0 ? $t(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (u = v[l]) === null || u && d.key == u.key && d.type === u.type)
        v[l] = void 0;
      else
        for (p = 0; p < x; p++) {
          if ((u = v[p]) && d.key == u.key && d.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      ae(e, d, u = u || Lt, o, i, r, c, a, h), g = d.__e, (p = d.ref) && u.ref != p && (m || (m = []), u.ref && m.push(u.ref, null, d), m.push(p, d.__c || g, d)), g != null ? (b == null && (b = g), typeof d.type == "function" && d.__k === u.__k ? d.__d = a = Pe(d, a, e) : a = Ie(e, d, u, v, g, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = ft(u));
    }
  for (t.__e = b, l = x; l--; )
    v[l] != null && (typeof t.type == "function" && v[l].__e != null && v[l].__e == t.__d && (t.__d = ft(s, l + 1)), Fe(v[l], v[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      Oe(m[l], m[++l], m[++l]);
}
function Pe(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? Pe(s, n, t) : Ie(t, s, s, o, s.__e, n));
  return n;
}
function Ie(e, n, t, s, o, i) {
  var r, c, a;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || o != i || o.parentNode == null)
    t:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), r = null;
      else {
        for (c = i, a = 0; (c = c.nextSibling) && a < s.length; a += 2)
          if (c == o)
            break t;
        e.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Cn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Tt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Tt(e, i, n[i], t[i], s);
}
function Ee(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Rn.test(n) ? t : t + "px";
}
function Tt(e, n, t, s, o) {
  var i;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Ee(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Ee(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? Se : xe, i) : e.removeEventListener(n, i ? Se : xe, i);
    else if (n !== "dangerouslySetInnerHTML") {
      if (o)
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
function xe(e) {
  this.l[e.type + !1](S.event ? S.event(e) : e);
}
function Se(e) {
  this.l[e.type + !0](S.event ? S.event(e) : e);
}
function ae(e, n, t, s, o, i, r, c, a) {
  var h, l, p, u, d, g, b, m, v, x, R, $, N, E = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, i = [c]), (h = S.__b) && h(n);
  try {
    t:
      if (typeof E == "function") {
        if (m = n.props, v = (h = E.contextType) && s[h.__c], x = h ? v ? v.props.value : h.__ : s, t.__c ? b = (l = n.__c = t.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? n.__c = l = new E(m, x) : (n.__c = l = new ot(m, x), l.constructor = E, l.render = xn), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = x, l.__n = s, p = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, E.getDerivedStateFromProps(m, l.__s))), u = l.props, d = l.state, p)
          E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && m !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, x), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, x) === !1 || n.__v === t.__v) {
            l.props = m, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(T) {
              T && (T.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, x), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, d, g);
          });
        }
        if (l.context = x, l.props = m, l.__v = n, l.__P = e, R = S.__r, $ = 0, "prototype" in E && E.prototype.render)
          l.state = l.__s, l.__d = !1, R && R(n), h = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, R && R(n), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (s = Z(Z({}, s), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(u, d)), N = h != null && h.type === Jt && h.key == null ? h.props.children : h, ze(e, Array.isArray(N) ? N : [N], n, t, s, o, i, r, c, a), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), b && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = En(t.__e, n, t, s, o, i, r, a);
    (h = S.diffed) && h(n);
  } catch (T) {
    n.__v = null, (a || i != null) && (n.__e = c, n.__h = !!a, i[i.indexOf(c)] = null), S.__e(T, n, t);
  }
}
function Be(e, n) {
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
function En(e, n, t, s, o, i, r, c) {
  var a, h, l, p = t.props, u = n.props, d = n.type, g = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((a = i[g]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        e = a, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(u);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, u.is && u), i = null, c = !1;
  }
  if (d === null)
    p === u || c && e.data === u || (e.data = u);
  else {
    if (i = i && Xt.call(e.childNodes), h = (p = t.props || Lt).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (p = {}, g = 0; g < e.attributes.length; g++)
          p[e.attributes[g].name] = e.attributes[g].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (Cn(e, u, p, o, c), l)
      n.__k = [];
    else if (g = n.props.children, ze(e, Array.isArray(g) ? g : [g], n, t, s, o && d !== "foreignObject", i, r, i ? i[0] : t.__k && ft(t, 0), c), i != null)
      for (g = i.length; g--; )
        i[g] != null && De(i[g]);
    c || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || d === "progress" && !g || d === "option" && g !== p.value) && Tt(e, "value", g, p.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && Tt(e, "checked", g, p.checked, !1));
  }
  return e;
}
function Oe(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    S.__e(s, t);
  }
}
function Fe(e, n, t) {
  var s, o;
  if (S.unmount && S.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Oe(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        S.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (o = 0; o < s.length; o++)
      s[o] && Fe(s[o], n, typeof e.type != "function");
  t || e.__e == null || De(e.__e), e.__e = e.__d = void 0;
}
function xn(e, n, t) {
  return this.constructor(e, t);
}
function Sn(e, n, t) {
  var s, o, i;
  S.__ && S.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], ae(n, e = (!s && t || n).__k = _(Jt, null, [e]), o || Lt, Lt, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Xt.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Be(i, e);
}
Xt = Te.slice, S = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Le = 0, Ne = function(e) {
  return e != null && e.constructor === void 0;
}, ot.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, t), this.props)), e && Z(t, e), e != null && this.__v && (n && this.__h.push(n), Ce(this));
}, ot.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ce(this));
}, ot.prototype.render = Jt, bt = [], Nt.__r = 0;
const D = (...e) => e.map((n) => Array.isArray(n) ? D(...n) : typeof n == "function" ? D(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
var et, nt;
class Me extends ot {
  constructor(t) {
    var s;
    super(t);
    w(this, et, 0);
    w(this, nt, null);
    H(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    H(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (f(this, et) && cancelAnimationFrame(f(this, et)), C(this, et, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), C(this, et, 0);
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
      const o = s.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: c } = this.props, a = (i === "horz" ? t.clientX - o.left : t.clientY - o.top) - this.barSize / 2;
      this.scroll(a * c / r), t.preventDefault();
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
    const { clientSize: t, scrollSize: s, size: o = 12, minBarSize: i = 3 * o } = this.props;
    return Math.max(Math.round(t * t / s), i);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (C(this, nt, typeof t == "string" ? document : t.current), f(this, nt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), f(this, nt) && f(this, nt).removeEventListener("wheel", this._handleWheel);
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
    var o;
    const { onScroll: s } = this.props;
    s && s(t, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: o = 12,
      className: i,
      style: r,
      left: c,
      top: a,
      bottom: h,
      right: l
    } = this.props, { maxScrollPos: p, scrollPos: u } = this, { dragStart: d } = this.state, g = {
      left: c,
      top: a,
      bottom: h,
      right: l,
      ...r
    }, b = {};
    return s === "horz" ? (g.height = o, g.width = t, b.width = this.barSize, b.left = Math.round(Math.min(p, u) * (t - b.width) / p)) : (g.width = o, g.height = t, b.height = this.barSize, b.top = Math.round(Math.min(p, u) * (t - b.height) / p)), /* @__PURE__ */ _("div", {
      className: D("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": d
      }),
      style: g,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ _("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
et = new WeakMap(), nt = new WeakMap();
function mt(e, ...n) {
  var t;
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const s = n[0];
    return Object.keys(s).forEach((o) => {
      var r;
      const i = (r = s[o]) != null ? r : 0;
      e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let s = 0; s < n.length; s++) {
    const o = (t = n[s]) != null ? t : "";
    e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${o}`);
  }
  return e;
}
var he = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(he || {});
function Mn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / he[t]).toFixed(n) + t);
}
const $n = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * he[s];
};
function An(e) {
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
function Hn(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ln(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, c = s.left <= i && s.left + s.width >= 0;
  return r && c;
}
const ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: An,
  domReady: Hn,
  isElementVisible: Ln,
  classes: D
}, Symbol.toStringTag, { value: "Module" }));
let Ue = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var yt, Y, I, it, rt, At;
const de = class {
  constructor(n, t = "local") {
    w(this, rt);
    w(this, yt, void 0);
    w(this, Y, void 0);
    w(this, I, void 0);
    w(this, it, void 0);
    C(this, yt, t), C(this, Y, `ZUI_STORE:${n != null ? n : Ue()}`), C(this, I, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return f(this, yt);
  }
  get session() {
    return this.type === "session" ? this : (f(this, it) || C(this, it, new de(f(this, Y), "session")), f(this, it));
  }
  get(n, t) {
    const s = f(this, I).getItem(z(this, rt, At).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    f(this, I).setItem(z(this, rt, At).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    f(this, I).removeItem(z(this, rt, At).call(this, n));
  }
  each(n) {
    for (let t = 0; t < f(this, I).length; t++) {
      const s = f(this, I).key(t);
      if (s != null && s.startsWith(f(this, Y))) {
        const o = f(this, I).getItem(s);
        typeof o == "string" && n(s.substring(f(this, Y).length + 1), JSON.parse(o));
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
let Dt = de;
yt = new WeakMap(), Y = new WeakMap(), I = new WeakMap(), it = new WeakMap(), rt = new WeakSet(), At = function(n) {
  return `${f(this, Y)}:${n}`;
};
const Nn = new Dt("DEFAULT");
function Tn(e, n = "local") {
  return new Dt(e, n);
}
Object.assign(Nn, { create: Tn });
class cs extends ot {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, h = [s], l = { ...o };
    let p = null;
    return i ? p = /* @__PURE__ */ _("img", {
      src: i,
      alt: r
    }) : p = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && h.push(`avatar-${n}`), typeof t == "string" && h.push(`rounded-${t}`), /* @__PURE__ */ _("div", {
      className: D(h),
      style: l,
      ...a
    }, p, c);
  }
}
function Dn() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Wn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function jn(e, n) {
  Dn(), e.classList.add("block"), $e(e, n), e.onclick = (t) => zn(t, e), window.addEventListener("resize", () => {
    $e(e, n);
  });
}
function qe(e) {
  var n;
  Wn(), (n = e.classList) == null || n.remove("block");
}
function $e(e, n) {
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
function zn(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), qe(n));
}
function Pn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Pn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    jn(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && qe(n);
});
function Ke() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function In(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Ke(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? In(t) : Ke();
});
function Bn(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function fe({ col: e, className: n, height: t, row: s, onRenderCell: o, style: i, outerStyle: r, children: c, outerClass: a, ...h }) {
  var E, T;
  const l = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: p, border: u } = e.setting, d = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...i
  }, g = ["dtable-cell", a, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = ["dtable-cell-content", n], m = [(T = c != null ? c : (E = s.data) == null ? void 0 : E[e.name]) != null ? T : ""], v = o ? o(m, { row: s, col: e }, _) : m, x = [], R = [], $ = {}, N = {};
  return v == null || v.forEach((k) => {
    var ut;
    if (typeof k == "object" && k && !Ne(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const pt = k.outer ? x : R;
      k.html ? pt.push(/* @__PURE__ */ _("div", {
        className: D("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(ut = k.attrs) != null ? ut : {}
      })) : (k.style && Object.assign(k.outer ? l : d, k.style), k.className && (k.outer ? g : b).push(k.className), k.children && pt.push(k.children), k.attrs && Object.assign(k.outer ? $ : N, k.attrs));
    } else
      R.push(k);
  }), /* @__PURE__ */ _("div", {
    className: D(g),
    style: l,
    "data-col": e.name,
    ...h,
    ...$
  }, R.length > 0 && /* @__PURE__ */ _("div", {
    className: D(b),
    style: d,
    ...N
  }, R), x);
}
function On({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ _(fe, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ _("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function ne({ row: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, CellComponent: c = fe, onRenderCell: a }) {
  return /* @__PURE__ */ _("div", {
    className: D("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((h) => h.visible ? /* @__PURE__ */ _(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: a
  }) : null));
}
function Ge({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  fixedLeftWidth: c,
  scrollWidth: a,
  scrollColsWidth: h,
  fixedRightWidth: l,
  scrollLeft: p,
  CellComponent: u = fe,
  onRenderCell: d,
  style: g,
  ...b
}) {
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ _(ne, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: d
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ _(ne, {
    className: "dtable-flexable",
    cols: r,
    left: c - p,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: d
  }));
  let x = null;
  i != null && i.length && (x = /* @__PURE__ */ _(ne, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: d
  }));
  const R = { top: t, height: s, lineHeight: `${s - 2}px`, ...g };
  return /* @__PURE__ */ _("div", {
    className: D("dtable-row", n),
    style: R,
    "data-id": e.id,
    ...b
  }, m, v, x);
}
function Fn({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: On
  };
  if (n) {
    const o = n({ props: s }, _);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ _("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ _(Ge, {
    ...s
  }));
}
function Un({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: o,
  rowHeight: i,
  scrollTop: r,
  onRenderRow: c,
  ...a
}) {
  return n = { ...n, top: t, height: o }, /* @__PURE__ */ _("div", {
    className: D("dtable-rows", e),
    style: n
  }, s.map((h) => {
    const l = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - r,
      height: i,
      ...a
    }, p = c == null ? void 0 : c({ props: l, row: h }, _);
    return p && Object.assign(l, p), /* @__PURE__ */ _(Ge, {
      ...l
    });
  }));
}
const Wt = /* @__PURE__ */ new Map(), jt = [];
function Ve(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Wt.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Wt.set(t, e), (n == null ? void 0 : n.buildIn) && !jt.includes(t) && jt.push(t);
}
function Et(e, n) {
  Ve(e, n);
  const t = (s) => {
    if (!s)
      return e;
    const { defaultOptions: o, ...i } = e;
    return {
      ...i,
      defaultOptions: { ...o, ...s }
    };
  };
  return t.plugin = e, t;
}
function Ye(e) {
  return Wt.delete(e);
}
function qn(e) {
  if (typeof e == "string") {
    const n = Wt.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Xe(e, n, t) {
  return n.forEach((s) => {
    var i;
    if (!s)
      return;
    const o = qn(s);
    !o || t.has(o.name) || ((i = o.plugins) != null && i.length && Xe(e, o.plugins, t), e.push(o), t.add(o.name));
  }), e;
}
function Kn(e = [], n = !0) {
  return n && jt.length && e.unshift(...jt), e != null && e.length ? Xe([], e, /* @__PURE__ */ new Set()) : [];
}
function Ae() {
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
var st, lt, X, G, J, L, B, O, ct, wt, V, at, ht, Pt, Je, It, Ze, Bt, Qe, Ot, tn, vt, oe, Ft, Ut, kt, Rt, qt, Kt, Gt, en, Vt, nn, Yt, sn;
class se extends ot {
  constructor(t) {
    var s;
    super(t);
    w(this, Pt);
    w(this, It);
    w(this, Bt);
    w(this, Ot);
    w(this, vt);
    w(this, Gt);
    w(this, Vt);
    w(this, Yt);
    H(this, "ref", We());
    w(this, st, 0);
    w(this, lt, void 0);
    w(this, X, !1);
    w(this, G, void 0);
    w(this, J, void 0);
    w(this, L, []);
    w(this, B, void 0);
    w(this, O, /* @__PURE__ */ new Map());
    w(this, ct, {});
    w(this, wt, void 0);
    H(this, "updateLayout", () => {
      f(this, st) && cancelAnimationFrame(f(this, st)), C(this, st, requestAnimationFrame(() => {
        C(this, B, void 0), this.forceUpdate(), C(this, st, 0);
      }));
    });
    w(this, V, (t, s) => {
      s = s || t.type;
      const o = f(this, O).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, at, (t) => {
      f(this, V).call(this, t, `window_${t.type}`);
    });
    w(this, ht, (t) => {
      f(this, V).call(this, t, `document_${t.type}`);
    });
    w(this, Ft, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return f(this, L).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    w(this, Ut, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), f(this, L).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, kt, (t, s, o) => {
      const { row: i, col: r } = s;
      t[0] = this.getCellValue(i, r);
      const c = i.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[c] && (t = r.setting[c].call(this, t, s, o)), this.options[c] && (t = this.options[c].call(this, t, s, o)), f(this, L).forEach((a) => {
        a[c] && (t = a[c].call(this, t, s, o));
      }), t;
    });
    w(this, Rt, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, qt, (t) => {
      var c, a, h, l, p;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: o, colName: i, cellElement: r } = s;
      if (o === "HEADER")
        r && ((c = this.options.onHeaderCellClick) == null || c.call(this, t, { colName: i, element: r }), f(this, L).forEach((u) => {
          var d;
          (d = u.onHeaderCellClick) == null || d.call(this, t, { colName: i, element: r });
        }));
      else {
        const { rowElement: u } = s, d = this.layout.visibleRows.find((g) => g.id === o);
        if (r) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: i, rowID: o, rowInfo: d, element: r, rowElement: u })) === !0)
            return;
          for (const g of f(this, L))
            if (((h = g.onCellClick) == null ? void 0 : h.call(this, t, { colName: i, rowID: o, rowInfo: d, element: r, rowElement: u })) === !0)
              return;
        }
        if (((l = this.options.onRowClick) == null ? void 0 : l.call(this, t, { rowID: o, rowInfo: d, element: u })) === !0)
          return;
        for (const g of f(this, L))
          if (((p = g.onRowClick) == null ? void 0 : p.call(this, t, { rowID: o, rowInfo: d, element: u })) === !0)
            return;
      }
    });
    w(this, Kt, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    C(this, lt, (s = t.id) != null ? s : `dtable-${Ue(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, C(this, J, Object.freeze(Kn(t.plugins))), f(this, J).forEach((o) => {
      var a;
      const { methods: i, data: r, state: c } = o;
      i && Object.entries(i).forEach(([h, l]) => {
        typeof l == "function" && Object.assign(this, { [h]: l.bind(this) });
      }), r && Object.assign(f(this, ct), r.call(this)), c && Object.assign(this.state, c.call(this)), (a = o.onCreate) == null || a.call(this, o);
    });
  }
  get options() {
    var t;
    return ((t = f(this, B)) == null ? void 0 : t.options) || f(this, G) || Ae();
  }
  get plugins() {
    return f(this, L);
  }
  get layout() {
    return f(this, B);
  }
  get id() {
    return f(this, lt);
  }
  get data() {
    return f(this, ct);
  }
  get parent() {
    var t, s;
    return (s = this.props.parent) != null ? s : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    C(this, G, void 0);
  }
  componentDidMount() {
    if (f(this, X) ? this.forceUpdate() : z(this, vt, oe).call(this), f(this, L).forEach((t) => {
      let { events: s } = t;
      !s || (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([o, i]) => {
        i && this.on(o, i);
      }));
    }), this.on("click", f(this, qt)), this.on("keydown", f(this, Kt)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), C(this, wt, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    f(this, L).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    f(this, X) ? z(this, vt, oe).call(this) : f(this, L).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = f(this, wt)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const o of f(this, O).keys())
        o.startsWith("window_") ? window.removeEventListener(o.replace("window_", ""), f(this, at)) : o.startsWith("document_") ? document.removeEventListener(o.replace("document_", ""), f(this, ht)) : t.removeEventListener(o, f(this, V));
    f(this, L).forEach((o) => {
      var i;
      (i = o.onUnmounted) == null || i.call(this);
    }), f(this, J).forEach((o) => {
      var i;
      (i = o.onDestory) == null || i.call(this);
    }), C(this, ct, {}), f(this, O).clear();
  }
  on(t, s, o) {
    var r;
    o && (t = `${o}_${t}`);
    const i = f(this, O).get(t);
    i ? i.push(s) : (f(this, O).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), f(this, at)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), f(this, ht)) : (r = this.ref.current) == null || r.addEventListener(t, f(this, V)));
  }
  off(t, s, o) {
    var c;
    o && (t = `${o}_${t}`);
    const i = f(this, O).get(t);
    if (!i)
      return;
    const r = i.indexOf(s);
    r >= 0 && i.splice(r, 1), i.length || (f(this, O).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), f(this, at)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), f(this, ht)) : (c = this.ref.current) == null || c.removeEventListener(t, f(this, V)));
  }
  emitCustomEvent(t, s) {
    f(this, V).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: o, scrollTop: i, rowsHeightTotal: r, rowsHeight: c, rowHeight: a, colsInfo: { scrollWidth: h, scrollColsWidth: l } } = this.layout, { to: p } = t;
    let { scrollLeft: u, scrollTop: d } = t;
    if (p === "up" || p === "down")
      d = i + (p === "down" ? 1 : -1) * Math.floor(c / a) * a;
    else if (p === "left" || p === "right")
      u = o + (p === "right" ? 1 : -1) * h;
    else if (p === "home")
      d = 0;
    else if (p === "end")
      d = r - c;
    else if (p === "left-begin")
      u = 0;
    else if (p === "right-end")
      u = l - h;
    else {
      const { offsetLeft: b, offsetTop: m } = t;
      typeof b == "number" && (u = o + b), typeof m == "number" && (u = i + m);
    }
    const g = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== o && (g.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - c)), d !== i && (g.scrollTop = d)), Object.keys(g).length ? (this.setState(g, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, g), s == null || s.call(this, !0);
    }), !0) : (s == null || s.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: s, colsList: o } = this.layout;
    return typeof t == "number" ? o[t] : s[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: o } = this.layout;
    return typeof t == "number" ? s[t] : o[t];
  }
  getCellValue(t, s) {
    var a, h;
    const o = typeof t == "object" ? t : this.getRowInfo(t);
    if (!o)
      return;
    const i = typeof s == "object" ? s : this.getColInfo(s);
    if (!i)
      return;
    let r = o.id === "HEADER" ? (a = i.setting.title) != null ? a : i.setting.name : (h = o.data) == null ? void 0 : h[i.name];
    const { cellValueGetter: c } = this.options;
    return c && (r = c.call(this, o, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    const { dirtyType: o, state: i } = t;
    o === "layout" ? C(this, B, void 0) : o === "options" && (C(this, B, void 0), C(this, G, void 0)), i ? this.setState({ ...i }, s) : this.forceUpdate(s);
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s || s.closest(".no-cell-event"))
      return;
    const o = s.closest(".dtable-cell");
    if (!o)
      return;
    const i = o.closest(".dtable-row");
    if (!i)
      return;
    const r = o == null ? void 0 : o.getAttribute("data-col"), c = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof r != "string" || typeof c != "string"))
      return {
        cellElement: o,
        rowElement: i,
        colName: r,
        rowID: c,
        target: s
      };
  }
  render() {
    var d;
    const t = z(this, Yt, sn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: h } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, p = ["dtable", s, {
      "dtable-hover-row": o,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": c,
      "dtable-striped": a,
      "dtable-scrolled-down": ((d = t == null ? void 0 : t.scrollTop) != null ? d : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return t && f(this, L).forEach((g) => {
      var m;
      const b = (m = g.onRender) == null ? void 0 : m.call(this, t);
      !b || (b.style && Object.assign(l, b.style), b.className && p.push(b.className), b.children && u.push(b.children));
    }), /* @__PURE__ */ _("div", {
      id: f(this, lt),
      className: D(p),
      style: l,
      ref: this.ref,
      tabIndex: -1
    }, t && z(this, Pt, Je).call(this, t), t && z(this, It, Ze).call(this, t), t && z(this, Bt, Qe).call(this, t), t && z(this, Ot, tn).call(this, t));
  }
}
st = new WeakMap(), lt = new WeakMap(), X = new WeakMap(), G = new WeakMap(), J = new WeakMap(), L = new WeakMap(), B = new WeakMap(), O = new WeakMap(), ct = new WeakMap(), wt = new WeakMap(), V = new WeakMap(), at = new WeakMap(), ht = new WeakMap(), Pt = new WeakSet(), Je = function(t) {
  const { header: s, colsInfo: o, headerHeight: i, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ _(Fn, {
      scrollLeft: r,
      height: i,
      onRenderCell: f(this, kt),
      onRenderRow: f(this, Ut),
      ...o
    });
  let c, a;
  if (typeof s == "function") {
    const h = s(t, this.state);
    typeof h == "object" && h && "__html" in h ? a = h : c = h;
  } else
    c = s;
  return /* @__PURE__ */ _("div", {
    className: "dtable-header",
    style: { height: i },
    dangerouslySetInnerHTML: a
  }, c);
}, It = new WeakSet(), Ze = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: c, scrollLeft: a, scrollTop: h } = t;
  return /* @__PURE__ */ _(Un, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: a,
    scrollTop: h,
    onRenderCell: f(this, kt),
    onRenderRow: f(this, Ft),
    ...c
  });
}, Bt = new WeakSet(), Qe = function(t) {
  const { footer: s, footerHeight: o } = t;
  if (!s)
    return null;
  let i, r;
  if (typeof s == "function") {
    const c = s(t, this.state);
    typeof c == "object" && c && "__html" in c ? r = c : i = c;
  } else
    i = s;
  return /* @__PURE__ */ _("div", {
    className: "dtable-footer",
    style: { height: o },
    dangerouslySetInnerHTML: r
  }, i);
}, Ot = new WeakSet(), tn = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = t, { scrollColsWidth: h, scrollWidth: l } = i, { scrollbarSize: p = 12, horzScrollbarPos: u } = this.options;
  return h > l && s.push(
    /* @__PURE__ */ _(Me, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: h,
      clientSize: l,
      onScroll: f(this, Rt),
      left: i.fixedLeftWidth,
      bottom: u === "inside" ? 0 : -p,
      size: p,
      wheelContainer: this.ref
    })
  ), a > c && s.push(
    /* @__PURE__ */ _(Me, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: a,
      clientSize: c,
      onScroll: f(this, Rt),
      right: 0,
      size: p,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), s.length ? s : null;
}, vt = new WeakSet(), oe = function() {
  var t;
  C(this, X, !1), (t = this.options.afterRender) == null || t.call(this), f(this, L).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Ft = new WeakMap(), Ut = new WeakMap(), kt = new WeakMap(), Rt = new WeakMap(), qt = new WeakMap(), Kt = new WeakMap(), Gt = new WeakSet(), en = function() {
  if (f(this, G))
    return !1;
  const s = { ...Ae(), ...f(this, J).reduce((o, i) => {
    const { defaultOptions: r } = i;
    return r && Object.assign(o, r), o;
  }, {}), ...this.props };
  return C(this, G, s), C(this, L, f(this, J).reduce((o, i) => {
    const { when: r, options: c } = i;
    return (!r || r(s)) && (o.push(i), c && Object.assign(s, typeof c == "function" ? c.call(this, s) : c)), o;
  }, [])), !0;
}, Vt = new WeakSet(), nn = function() {
  var _e, me;
  const { plugins: t } = this;
  let s = f(this, G);
  t.forEach((y) => {
    var W;
    const A = (W = y.beforeLayout) == null ? void 0 : W.call(this, s);
    A && (s = { ...s, ...A });
  });
  const { defaultColWidth: o, minColWidth: i, maxColWidth: r } = s, c = [], a = [], h = [], l = {}, p = [], u = [];
  let d = 0, g = 0, b = 0;
  s.cols.forEach((y) => {
    if (y.hidden)
      return;
    const {
      name: A,
      type: W = "",
      fixed: K = !1,
      flex: tt = !1,
      width: _t = o,
      minWidth: xt = i,
      maxWidth: be = r,
      ...mn
    } = y, bn = Bn(_t, xt, be), M = {
      name: A,
      type: W,
      setting: {
        name: A,
        type: W,
        fixed: K,
        flex: tt,
        width: _t,
        minWidth: xt,
        maxWidth: be,
        ...mn
      },
      flex: K ? 0 : tt === !0 ? 1 : typeof tt == "number" ? tt : 0,
      left: 0,
      width: bn,
      realWidth: 0,
      visible: !0,
      index: p.length
    };
    t.forEach((ye) => {
      var we, ve;
      const St = (we = ye.colTypes) == null ? void 0 : we[W];
      if (St) {
        const ke = typeof St == "function" ? St(M) : St;
        ke && Object.assign(M.setting, ke);
      }
      (ve = ye.onAddCol) == null || ve.call(this, M);
    }), M.realWidth = M.realWidth || M.width, K === "left" ? (M.left = d, d += M.width, c.push(M)) : K === "right" ? (M.left = g, g += M.width, a.push(M)) : (M.left = b, b += M.width, h.push(M)), M.flex && u.push(M), p.push(M), l[M.name] = M;
  });
  let m = s.width, v = 0;
  const x = d + b + g;
  if (typeof m == "function" && (m = m.call(this, x)), m === "auto")
    v = x;
  else if (m === "100%") {
    const { parent: y } = this;
    if (y)
      v = y.clientWidth;
    else {
      v = 0, C(this, X, !0);
      return;
    }
  } else
    v = m != null ? m : 0;
  const { data: R, rowKey: $ = "id", rowHeight: N } = s, E = [], T = (y, A, W) => {
    var tt, _t;
    const K = { data: W != null ? W : { [$]: y }, id: y, index: E.length, top: 0 };
    if (W || (K.lazy = !0), E.push(K), ((tt = s.onAddRow) == null ? void 0 : tt.call(this, K, A)) !== !1) {
      for (const xt of t)
        if (((_t = xt.onAddRow) == null ? void 0 : _t.call(this, K, A)) === !1)
          return;
    }
  };
  if (typeof R == "number")
    for (let y = 0; y < R; y++)
      T(`${y}`, y);
  else
    Array.isArray(R) && R.forEach((y, A) => {
      var W;
      typeof y == "object" ? T(`${(W = y[$]) != null ? W : ""}`, A, y) : T(`${y != null ? y : ""}`, A);
    });
  let k = E;
  const ut = {};
  if (s.onAddRows) {
    const y = s.onAddRows.call(this, k);
    y && (k = y);
  }
  for (const y of t) {
    const A = (_e = y.onAddRows) == null ? void 0 : _e.call(this, k);
    A && (k = A);
  }
  k.forEach((y, A) => {
    ut[y.id] = y, y.index = A, y.top = y.index * N;
  });
  const { header: pt, footer: ue } = s, Zt = pt ? s.headerHeight || N : 0, Qt = ue ? s.footerHeight || N : 0;
  let q = s.height, Q = 0;
  const pe = k.length * N, te = Zt + Qt + pe;
  if (typeof q == "function" && (q = q.call(this, te)), q === "auto")
    Q = te;
  else if (typeof q == "object")
    Q = Math.min(q.max, Math.max(q.min, te));
  else if (q === "100%") {
    const { parent: y } = this;
    if (y)
      Q = y.clientHeight;
    else {
      Q = 0, C(this, X, !0);
      return;
    }
  } else
    Q = q;
  const gn = Q - Zt - Qt, _n = v - d - g, gt = {
    options: s,
    allRows: E,
    width: v,
    height: Q,
    rows: k,
    rowsMap: ut,
    rowHeight: N,
    rowsHeight: gn,
    rowsHeightTotal: pe,
    header: pt,
    footer: ue,
    headerHeight: Zt,
    footerHeight: Qt,
    colsMap: l,
    colsList: p,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: a,
      scrollCols: h,
      fixedLeftWidth: d,
      scrollWidth: _n,
      scrollColsWidth: b,
      fixedRightWidth: g
    }
  }, ge = (me = s.onLayout) == null ? void 0 : me.call(this, gt);
  ge && Object.assign(gt, ge), t.forEach((y) => {
    if (y.onLayout) {
      const A = y.onLayout.call(this, gt);
      A && Object.assign(gt, A);
    }
  }), C(this, B, gt);
}, Yt = new WeakSet(), sn = function() {
  (z(this, Gt, en).call(this) || !f(this, B)) && z(this, Vt, nn).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: o, colsInfo: { scrollCols: i, scrollWidth: r, scrollColsWidth: c } } = t;
  if (o.length) {
    const R = r - c;
    if (R > 0) {
      const $ = o.reduce((E, T) => E + T.flex, 0);
      let N = 0;
      o.forEach((E) => {
        const T = Math.min(R - N, Math.ceil(R * (E.flex / $)));
        E.realWidth = T + E.width, N += E.realWidth;
      });
    } else
      o.forEach(($) => {
        $.realWidth = $.width;
      });
  }
  s = Math.min(Math.max(0, c - r), s);
  let a = 0;
  i.forEach((R) => {
    R.left = a, a += R.realWidth, R.visible = R.left + R.realWidth >= s && R.left <= s + r;
  });
  const { rowsHeightTotal: h, rowsHeight: l, rows: p, rowHeight: u } = t, d = Math.min(Math.max(0, h - l), this.state.scrollTop), g = Math.floor(d / u), b = d + l, m = Math.min(p.length, Math.ceil(b / u)), v = [], { rowDataGetter: x } = this.options;
  for (let R = g; R < m; R++) {
    const $ = p[R];
    $.lazy && x && ($.data = x([$.id])[0], $.lazy = !1), v.push($);
  }
  return t.visibleRows = v, t.scrollTop = d, t.scrollLeft = s, t;
}, H(se, "addPlugin", Ve), H(se, "removePlugin", Ye);
function He(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((o) => o.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((o) => o.classList.add(s));
}
const on = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var o, i;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (o = e.target) == null ? void 0 : o.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const s = (i = t == null ? void 0 : t.getAttribute("data-col")) != null ? i : !1;
      He(this, s);
    },
    mouseleave() {
      He(this, !1);
    }
  }
};
Et(on, { buildIn: !0 });
function Gn(e, n) {
  var r, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (a, h) => {
    o && !o.call(this, a) || !!t[a] === h || (h ? t[a] = !0 : delete t[a], s[a] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !rn.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    i(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    i(a, n != null ? n : !t[a]);
  })), Object.keys(s).length) {
    const a = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, s, t);
    a && Object.keys(a).forEach((h) => {
      a[h] ? t[h] = !0 : delete t[h];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function Vn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function rn() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Yn() {
  return Object.keys(this.state.checkedRows);
}
const ln = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Gn,
    isRowChecked: Vn,
    isAllRowChecked: rn,
    getChecks: Yn
  },
  onRenderCell(e, { row: n, col: t }) {
    var c, a;
    const { id: s } = n, { canRowCheckable: o } = this.options;
    if (o && !o.call(this, s))
      return e;
    const { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const h = this.isRowChecked(s), l = (a = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, s)) != null ? a : /* @__PURE__ */ _("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r, c;
    const { id: s } = n, { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const a = this.isAllRowChecked(), h = (c = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s)) != null ? c : /* @__PURE__ */ _("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
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
Et(ln);
function ie(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = ie.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? ie.call(this, n.parent).level + 1 : 0, n;
}
function Xn(e, n) {
  var o;
  let t = (o = this.state.collapsedRows) != null ? o : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !cn.call(this)), n) {
      const i = s.entries();
      for (const [r, c] of i)
        c.state === "expanded" && (t[r] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[i[0]]), i.forEach((r) => {
      const c = s.get(r);
      n && (c == null ? void 0 : c.children) ? t[r] = !0 : delete t[r];
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
function cn() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function an(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = an(e, n, r.children, s + 1)));
  }
  return n;
}
function hn(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, hn(e, i, t, s);
  }), o;
}
function fn(e, n, t, s, o) {
  var c;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((c = i.children) == null ? void 0 : c.every((a) => {
    const h = !!(s[a] !== void 0 ? s[a] : o[a]);
    return t === h;
  })) && (s[n] = t), i.parent && fn(e, i.parent, t, s, o);
}
const dn = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const { nestedMap: t } = this.data, s = t.get(e.id), o = t.get(n.id);
      return (s == null ? void 0 : s.parent) === (o == null ? void 0 : o.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(n).forEach(([o, i]) => {
        const r = hn(this, o, i, s);
        r != null && r.parent && fn(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Xn,
    isAllCollapsed: cn,
    getNestedRowInfo: ie
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var o, i, r, c, a;
    const { nestedMap: n } = this.data, t = (i = e.data) == null ? void 0 : i[(o = this.options.nestedParentKey) != null ? o : "parent"], s = (r = n.get(e.id)) != null ? r : {
      state: "",
      level: 0
    };
    if (s.parent = t, (a = e.data) != null && a[(c = this.options.asParentKey) != null ? c : "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let h = n.get(t);
      h || (h = {
        state: "",
        level: 0
      }, n.set(t, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), an(this.data.nestedMap), e.sort((n, t) => {
      var r, c;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((c = o.order) != null ? c : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var c, a, h;
    const { id: s, data: o } = t, { nestedToggle: i } = n.setting, r = this.getNestedRowInfo(s);
    if (i && (r.children || r.parent) && e.unshift((a = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, r, s, n, o)) != null ? a : /* @__PURE__ */ _("a", {
      role: "button",
      className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ _("span", {
      className: "dtable-nested-toggle-icon"
    }))), r.level) {
      let { nestedIndent: l = i } = n.setting;
      l && (l === !0 && (l = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ _("div", {
        className: "dtable-nested-indent",
        style: { width: l * r.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var o, i;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift((i = (o = this.options.onRenderNestedToggle) == null ? void 0 : o.call(this, void 0, s, t, void 0)) != null ? i : /* @__PURE__ */ _("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ _("span", {
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
Et(dn);
const U = 24 * 60 * 60 * 1e3, j = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), dt = (e, n = new Date()) => (e = j(e), n = j(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), re = (e, n = new Date()) => j(e).getFullYear() === j(n).getFullYear(), un = (e, n = new Date()) => (e = j(e), n = j(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Jn = (e, n = new Date()) => {
  e = j(e), n = j(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Zn = (e, n) => dt(j(n), e), Qn = (e, n) => dt(j(n).getTime() - U, e), ts = (e, n) => dt(j(n).getTime() + U, e), es = (e, n) => dt(j(n).getTime() - 2 * U, e), zt = (e, n = "yyyy-MM-dd hh:mm") => {
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
      const o = `${t[s]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, ns = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = zt(e, re(e) ? s.month : s.full);
  if (dt(e, n))
    return o;
  const i = zt(n, re(e, n) ? un(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, ss = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - U * 7;
    case "oneMonth":
      return n - U * 31;
    case "threeMonth":
      return n - U * 31 * 3;
    case "halfYear":
      return n - U * 183;
    case "oneYear":
      return n - U * 365;
    case "twoYear":
      return n - 2 * (U * 365);
    default:
      return 0;
  }
}, le = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, le(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, le(e, "day", t, s);
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
const pn = {
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = mt(s, t.data);
        return e[0] = /* @__PURE__ */ _("a", {
          href: i,
          ...o
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: s } = t, { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${n.name}Avatar` } = n.setting, c = /* @__PURE__ */ _("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ _("img", {
          src: s ? s[r] : ""
        }));
        return o ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-success-500)" } = n.setting, r = (t - s) / 2, c = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ _("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ _("circle", {
          cx: c,
          cy: c,
          r,
          "stroke-width": s,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ _("circle", {
          cx: c,
          cy: c,
          r,
          "stroke-width": s,
          stroke: i,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * r * 2,
          "stroke-dashoffset": Math.PI * r * 2 * (100 - a) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ _("text", {
          x: c,
          y: c + s,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${r}px` }
        }, Math.round(a))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, row: t }) {
        var c;
        const s = (c = t.data) == null ? void 0 : c[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((a) => {
            typeof a == "string" && (a = { action: a });
            const h = i[a.action];
            return h && (a = { className: r, ...h, ...a }), mt(o, a);
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
        const { format: s, type: o } = t, i = e[0];
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = zt(i, s) : o === "html" ? e[0] = { html: mt(s, i) } : e[0] = mt(s, i), e;
      }
    }
  }
};
Et(pn);
const os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: on,
  checkable: ln,
  nested: dn,
  rich: pn
}, Symbol.toStringTag, { value: "Module" }));
var Ct;
class Mt {
  constructor(n, t) {
    H(this, "element");
    H(this, "options");
    w(this, Ct, We());
    this.element = n, this.options = { parent: n, ...t }, this.render();
  }
  get $() {
    return f(this, Ct).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Sn(/* @__PURE__ */ _(se, {
      ref: f(this, Ct),
      ...this.options
    }), this.element);
  }
}
Ct = new WeakMap(), H(Mt, "NAME", "zui.dtable"), H(Mt, "definePlugin", Et), H(Mt, "removePlugin", Ye), H(Mt, "plugins", os);
var F, P;
class is {
  constructor(n) {
    w(this, F, void 0);
    w(this, P, void 0);
    C(this, F, n), C(this, P, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(f(this, F).parentElement.parentElement, f(this, F).parentElement), this.addActive(f(this, P).parentElement, f(this, P)), f(this, P).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, P, f(this, F)), this.addActive(f(this, P).parentElement, f(this, P)), C(this, F, document.querySelector(`[href='#${f(this, P).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${f(this, P).getAttribute("id")}']`) || document.querySelector(`[data-target='#${f(this, P).getAttribute("id")}']`)), this.addActive(f(this, F).parentElement.parentElement, f(this, F).parentElement);
  }
  addActive(n, t) {
    const s = n.children;
    Array.from(s).forEach((i) => {
      i.classList.remove("active"), i.classList.contains("fade") && i.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(i) {
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
F = new WeakMap(), P = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new is(e.target).showTarget());
});
function Ht(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function ce(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Ht(e) && Ht(t))
    for (const s in t)
      Ht(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), ce(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return ce(e, ...n);
}
const as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: U,
  createDate: j,
  isSameDay: dt,
  isSameYear: re,
  isSameMonth: un,
  isSameWeek: Jn,
  isToday: Zn,
  isYesterday: Qn,
  isTomorrow: ts,
  isDBY: es,
  formatDate: zt,
  formatDateSpan: ns,
  getTimeBeforeDesc: ss,
  calculateTimestamp: le,
  formatString: mt,
  formatBytes: Mn,
  convertBytes: $n,
  isObject: Ht,
  mergeDeep: ce
}, Symbol.toStringTag, { value: "Module" }));
export {
  cs as Avatar,
  Mt as DTable,
  is as NavTabs,
  Me as Scrollbar,
  ls as browser,
  os as dtablePlugins,
  as as helpers,
  Nn as store
};
