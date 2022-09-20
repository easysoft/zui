var gn = Object.defineProperty;
var _n = (e, n, t) => n in e ? gn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var E = (e, n, t) => (_n(e, typeof n != "symbol" ? n + "" : n, t), t), Vt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var f = (e, n, t) => (Vt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), y = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, S = (e, n, t, s) => (Vt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var A = (e, n, t) => (Vt(e, n, "access private method"), t);
var Ft, C, Ae, ht, Re, Mt = {}, He = [], mn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function V(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Le(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function b(e, n, t) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ft.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return Ct(e, r, s, o, null);
}
function Ct(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Ae : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Ne() {
  return { current: null };
}
function Ut(e) {
  return e.children;
}
function et(e, n) {
  this.props = e, this.context = n;
}
function it(e, n) {
  if (n == null)
    return e.__ ? it(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? it(e) : null;
}
function Te(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Te(e);
  }
}
function Se(e) {
  (!e.__d && (e.__d = !0) && ht.push(e) && !$t.__r++ || Re !== C.debounceRendering) && ((Re = C.debounceRendering) || setTimeout)($t);
}
function $t() {
  for (var e; $t.__r = ht.length; )
    e = ht.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ht = [], e.some(function(n) {
      var t, s, o, i, r, a;
      n.__d && (r = (i = (t = n).__v).__e, (a = t.__P) && (s = [], (o = V({}, i)).__v = i.__v + 1, oe(a, i, o, t.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? it(i) : r, i.__h), Pe(s, i), i.__e != r && Te(i)));
    });
}
function ze(e, n, t, s, o, i, r, a, c, h) {
  var l, m, u, d, g, w, _, v = s && s.__k || He, x = v.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((d = t.__k[l] = (d = n[l]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ct(null, d, null, null, d) : Array.isArray(d) ? Ct(Ut, { children: d }, null, null, null) : d.__b > 0 ? Ct(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (u = v[l]) === null || u && d.key == u.key && d.type === u.type)
        v[l] = void 0;
      else
        for (m = 0; m < x; m++) {
          if ((u = v[m]) && d.key == u.key && d.type === u.type) {
            v[m] = void 0;
            break;
          }
          u = null;
        }
      oe(e, d, u = u || Mt, o, i, r, a, c, h), g = d.__e, (m = d.ref) && u.ref != m && (_ || (_ = []), u.ref && _.push(u.ref, null, d), _.push(m, d.__c || g, d)), g != null ? (w == null && (w = g), typeof d.type == "function" && d.__k === u.__k ? d.__d = c = We(d, c, e) : c = De(e, d, u, v, g, c), typeof t.type == "function" && (t.__d = c)) : c && u.__e == c && c.parentNode != e && (c = it(u));
    }
  for (t.__e = w, l = x; l--; )
    v[l] != null && (typeof t.type == "function" && v[l].__e != null && v[l].__e == t.__d && (t.__d = it(s, l + 1)), Ie(v[l], v[l]));
  if (_)
    for (l = 0; l < _.length; l++)
      je(_[l], _[++l], _[++l]);
}
function We(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? We(s, n, t) : De(t, s, s, o, s.__e, n));
  return n;
}
function De(e, n, t, s, o, i) {
  var r, a, c;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || o != i || o.parentNode == null)
    t:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), r = null;
      else {
        for (a = i, c = 0; (a = a.nextSibling) && c < s.length; c += 2)
          if (a == o)
            break t;
        e.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function bn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || At(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || At(e, i, n[i], t[i], s);
}
function ke(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || mn.test(n) ? t : t + "px";
}
function At(e, n, t, s, o) {
  var i;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || ke(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || ke(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? Ce : xe, i) : e.removeEventListener(n, i ? Ce : xe, i);
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
  this.l[e.type + !1](C.event ? C.event(e) : e);
}
function Ce(e) {
  this.l[e.type + !0](C.event ? C.event(e) : e);
}
function oe(e, n, t, s, o, i, r, a, c) {
  var h, l, m, u, d, g, w, _, v, x, $, R, F, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (h = C.__b) && h(n);
  try {
    t:
      if (typeof M == "function") {
        if (_ = n.props, v = (h = M.contextType) && s[h.__c], x = h ? v ? v.props.value : h.__ : s, t.__c ? w = (l = n.__c = t.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(_, x) : (n.__c = l = new et(_, x), l.constructor = M, l.render = vn), v && v.sub(l), l.props = _, l.state || (l.state = {}), l.context = x, l.__n = s, m = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = V({}, l.__s)), V(l.__s, M.getDerivedStateFromProps(_, l.__s))), u = l.props, d = l.state, m)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && _ !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, x), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, x) === !1 || n.__v === t.__v) {
            l.props = _, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(z) {
              z && (z.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, x), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, d, g);
          });
        }
        if (l.context = x, l.props = _, l.__v = n, l.__P = e, $ = C.__r, R = 0, "prototype" in M && M.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(n), h = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(n), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++R < 25);
        l.state = l.__s, l.getChildContext != null && (s = V(V({}, s), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(u, d)), F = h != null && h.type === Ut && h.key == null ? h.props.children : h, ze(e, Array.isArray(F) ? F : [F], n, t, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), w && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = yn(t.__e, n, t, s, o, i, r, c);
    (h = C.diffed) && h(n);
  } catch (z) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), C.__e(z, n, t);
  }
}
function Pe(e, n) {
  C.__c && C.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      C.__e(s, t.__v);
    }
  });
}
function yn(e, n, t, s, o, i, r, a) {
  var c, h, l, m = t.props, u = n.props, d = n.type, g = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((c = i[g]) && "setAttribute" in c == !!d && (d ? c.localName === d : c.nodeType === 3)) {
        e = c, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(u);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, u.is && u), i = null, a = !1;
  }
  if (d === null)
    m === u || a && e.data === u || (e.data = u);
  else {
    if (i = i && Ft.call(e.childNodes), h = (m = t.props || Mt).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (m = {}, g = 0; g < e.attributes.length; g++)
          m[e.attributes[g].name] = e.attributes[g].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (bn(e, u, m, o, a), l)
      n.__k = [];
    else if (g = n.props.children, ze(e, Array.isArray(g) ? g : [g], n, t, s, o && d !== "foreignObject", i, r, i ? i[0] : t.__k && it(t, 0), a), i != null)
      for (g = i.length; g--; )
        i[g] != null && Le(i[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || d === "progress" && !g || d === "option" && g !== m.value) && At(e, "value", g, m.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && At(e, "checked", g, m.checked, !1));
  }
  return e;
}
function je(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    C.__e(s, t);
  }
}
function Ie(e, n, t) {
  var s, o;
  if (C.unmount && C.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || je(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        C.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (o = 0; o < s.length; o++)
      s[o] && Ie(s[o], n, typeof e.type != "function");
  t || e.__e == null || Le(e.__e), e.__e = e.__d = void 0;
}
function vn(e, n, t) {
  return this.constructor(e, t);
}
function wn(e, n, t) {
  var s, o, i;
  C.__ && C.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], oe(n, e = (!s && t || n).__k = b(Ut, null, [e]), o || Mt, Mt, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Ft.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Pe(i, e);
}
Ft = He.slice, C = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ae = 0, et.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = V({}, this.state), typeof e == "function" && (e = e(V({}, t), this.props)), e && V(t, e), e != null && this.__v && (n && this.__h.push(n), Se(this));
}, et.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Se(this));
}, et.prototype.render = Ut, ht = [], $t.__r = 0;
const H = (...e) => e.map((n) => Array.isArray(n) ? H(...n) : typeof n == "function" ? H(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class cs extends et {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, h = [s], l = { ...o };
    let m = null;
    return i ? m = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : m = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && h.push(`avatar-${n}`), typeof t == "string" && h.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: H(h),
      style: l,
      ...c
    }, m, a);
  }
}
const Rn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class Sn extends HTMLElement {
  constructor() {
    super();
    E(this, "$button");
    E(this, "$icon");
    E(this, "onClick");
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
    const t = Rn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Sn);
var J, Z;
class Ee extends et {
  constructor(t) {
    var s;
    super(t);
    y(this, J, 0);
    y(this, Z, null);
    E(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    E(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (f(this, J) && cancelAnimationFrame(f(this, J)), S(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), S(this, J, 0);
      })), t.preventDefault());
    });
    E(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    E(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    E(this, "_handleClick", (t) => {
      const s = t.currentTarget;
      if (!s)
        return;
      const o = s.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: a } = this.props, c = (i === "horz" ? t.clientX - o.left : t.clientY - o.top) - this.barSize / 2;
      this.scroll(c * a / r), t.preventDefault();
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
    t && (S(this, Z, typeof t == "string" ? document : t.current), f(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), f(this, Z) && f(this, Z).removeEventListener("wheel", this._handleWheel);
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
      left: a,
      top: c,
      bottom: h,
      right: l
    } = this.props, { maxScrollPos: m, scrollPos: u } = this, { dragStart: d } = this.state, g = {
      left: a,
      top: c,
      bottom: h,
      right: l,
      ...r
    }, w = {};
    return s === "horz" ? (g.height = o, g.width = t, w.width = this.barSize, w.left = Math.round(Math.min(m, u) * (t - w.width) / m)) : (g.width = o, g.height = t, w.height = this.barSize, w.top = Math.round(Math.min(m, u) * (t - w.height) / m)), /* @__PURE__ */ b("div", {
      className: H("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": d
      }),
      style: g,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: w,
      onMouseDown: this._handleMouseDown
    }));
  }
}
J = new WeakMap(), Z = new WeakMap();
function ct(e, ...n) {
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
var ie = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ie || {});
function kn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / ie[t]).toFixed(n) + t);
}
const xn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * ie[s];
};
function Cn(e) {
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
function En(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Mn(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Cn,
  domReady: En,
  isElementVisible: Mn,
  classes: H
}, Symbol.toStringTag, { value: "Module" }));
function Oe() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function $n(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Oe(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? $n(t) : Oe();
});
let Be = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Me(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function re({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, cellStyle: a, children: c, ...h }) {
  const { cellStyle: l, align: m, className: u, border: d } = e.setting, g = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...a,
    ...l
  }, w = {
    justifyContent: m ? m === "left" ? "start" : m === "right" ? "end" : m : void 0,
    ...r
  };
  let _ = [
    c != null ? c : o == null ? void 0 : o[e.name]
  ];
  i && (_ = i(_, { rowID: s, col: e, rowData: o }, b));
  const v = ["dtable-cell", n, u, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], x = ["dtable-cell-content"], $ = [];
  return _ == null || _.forEach((R) => {
    typeof R == "object" && R && ("html" in R || "className" in R || "style" in R || "cellClass" in R || "cellStyle" in R) ? (R.html ? $.push(/* @__PURE__ */ b("div", {
      className: H("dtable-cell-html", R.className),
      style: R.style,
      dangerouslySetInnerHTML: { __html: R.html }
    })) : (R.style && Object.assign(w, R.style), R.className && x.push(R.className)), R.cellStyle && Object.assign(g, R.cellStyle), R.cellClass && v.push(R.cellClass)) : $.push(R);
  }), /* @__PURE__ */ b("div", {
    className: H(v),
    style: g,
    "data-col": e.name,
    ...h
  }, /* @__PURE__ */ b("div", {
    className: H(x),
    style: w
  }, $));
}
function An({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ b(re, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function Xt({ rowID: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = re, onRenderCell: h }) {
  return /* @__PURE__ */ b("div", {
    className: H("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ b(c, {
    key: l.name,
    col: l,
    rowData: a,
    rowID: e,
    onRenderCell: h
  }) : null));
}
function Fe({
  rowID: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: h,
  flexRightWidth: l,
  scrollLeft: m,
  CellComponent: u = re,
  onRenderCell: d,
  data: g,
  style: w,
  ..._
}) {
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: e,
    CellComponent: u,
    onRenderCell: d,
    data: g
  }));
  let x = null;
  r != null && r.length && (x = /* @__PURE__ */ b(Xt, {
    className: "dtable-flexable",
    cols: r,
    left: a - m,
    width: h,
    rowID: e,
    CellComponent: u,
    onRenderCell: d,
    data: g
  }));
  let $ = null;
  i != null && i.length && ($ = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: e,
    CellComponent: u,
    onRenderCell: d,
    data: g
  }));
  const R = { top: t, height: s, lineHeight: `${s - 2}px`, ...w };
  return /* @__PURE__ */ b("div", {
    className: H("dtable-row", n),
    style: R,
    "data-id": e,
    ..._
  }, v, x, $);
}
function Hn({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: An
  };
  if (n) {
    const o = n({ props: s }, b);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ b(Fe, {
    ...s
  }));
}
function Ln({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return n = { ...n, top: t, height: o }, /* @__PURE__ */ b("div", {
    className: H("dtable-rows", e),
    style: n
  }, s.map((c) => {
    const h = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    };
    if (r) {
      const l = r({ props: h, row: c }, b);
      l && Object.assign(h, l);
    }
    return /* @__PURE__ */ b(Fe, {
      ...h
    });
  }));
}
const Ht = /* @__PURE__ */ new Map();
function Ue(e, n = !1) {
  if (!n && Ht.has(e.name))
    throw new Error(`DTable: Plugin with name ${e.name} already exists`);
  Ht.set(e.name, e);
}
function rt(e, n = !1) {
  Ue(e, n);
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
function Nn(e) {
  return Ht.get(e);
}
function qe(e) {
  return Ht.delete(e);
}
function Tn(e) {
  if (typeof e == "string") {
    const n = Nn(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function")
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ge(e, n, t) {
  return n.forEach((s) => {
    if (!s)
      return;
    const o = Tn(s);
    !o || t.has(o.name) || (e.push(o), t.add(o.name), !(!o.plugins || !o.plugins.length) && Ge(e, o.plugins, t));
  }), e;
}
function zn(e) {
  return e != null && e.length ? Ge([], e, /* @__PURE__ */ new Set()) : [];
}
function Wn(e, n) {
  return e.reduce((t, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (t = { ...i, ...t }), o && Object.assign(t, typeof o == "function" ? o(t) : o), t;
  }, n);
}
function Jt() {
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
var Q, nt, G, K, tt, L, B, dt, Tt, Ke, zt, Ye, Wt, Ve, Dt, Xe, ft, ut, Qt, Pt, jt, pt, gt, _t, mt, bt, yt, te, It, Je, Ot, Ze, Bt, Qe;
class Zt extends et {
  constructor(t) {
    super(t);
    y(this, Tt);
    y(this, zt);
    y(this, Wt);
    y(this, Dt);
    y(this, ut);
    y(this, yt);
    y(this, It);
    y(this, Ot);
    y(this, Bt);
    E(this, "ref", Ne());
    y(this, Q, 0);
    y(this, nt, void 0);
    y(this, G, !1);
    y(this, K, void 0);
    y(this, tt, void 0);
    y(this, L, []);
    y(this, B, void 0);
    y(this, dt, !1);
    y(this, ft, () => {
      f(this, Q) && cancelAnimationFrame(f(this, Q)), S(this, Q, requestAnimationFrame(() => {
        S(this, B, void 0), this.forceUpdate(), S(this, Q, 0);
      }));
    });
    y(this, Pt, (t, s) => {
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
    y(this, jt, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), f(this, L).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    y(this, pt, (t, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (t = r.setting[a].call(this, t, s, o)), this.options[a] && (t = this.options[a].call(this, t, s, o)), f(this, L).forEach((c) => {
        c[a] && (t = c[a].call(this, t, s, o));
      }), t;
    });
    y(this, gt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    y(this, _t, (t) => {
      var c, h, l, m, u, d, g;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (h = o.getAttribute("data-id")) != null ? h : "";
      if (a === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), f(this, L).forEach((w) => {
          var _;
          (_ = w.onHeaderCellClick) == null || _.call(this, t, { colName: r, element: i });
        }));
      else {
        const w = this.layout.visibleRows.find((_) => _.id === a);
        if (i) {
          if (((m = this.options.onCellClick) == null ? void 0 : m.call(this, t, { colName: r, rowID: a, rowInfo: w, element: i, rowElement: o })) === !0)
            return;
          for (const _ of f(this, L))
            if (((u = _.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: a, rowInfo: w, element: i, rowElement: o })) === !0)
              return;
        }
        if (((d = this.options.onRowClick) == null ? void 0 : d.call(this, t, { rowID: a, rowInfo: w, element: o })) === !0)
          return;
        for (const _ of f(this, L))
          if (((g = _.onRowClick) == null ? void 0 : g.call(this, t, { rowID: a, rowInfo: w, element: o })) === !0)
            return;
      }
    });
    y(this, mt, (t) => {
      var r, a;
      const { colHover: s } = this.options;
      if (!s)
        return;
      const o = (r = t.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || s === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : !1;
      A(this, yt, te).call(this, i);
    });
    y(this, bt, () => {
      A(this, yt, te).call(this, !1);
    });
    S(this, nt, `dtable-${Be(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, S(this, tt, Object.freeze(zn(t.plugins))), f(this, tt).forEach((s) => {
      var o;
      (o = s.onCreate) == null || o.call(this, s);
    });
  }
  get options() {
    var t;
    return (t = f(this, K)) != null ? t : Jt();
  }
  get plugins() {
    return f(this, L);
  }
  get layout() {
    return f(this, B);
  }
  get id() {
    return f(this, nt);
  }
  componentWillReceiveProps(t, s) {
    S(this, K, void 0);
  }
  componentDidMount() {
    f(this, G) ? this.forceUpdate() : A(this, ut, Qt).call(this);
    const { current: t } = this.ref;
    t && (t.addEventListener("click", f(this, _t)), t.addEventListener("mouseover", f(this, mt)), t.addEventListener("mouseleave", f(this, bt))), this.options.responsive && window.addEventListener("resize", f(this, ft)), f(this, L).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    f(this, G) && A(this, ut, Qt).call(this);
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    t && (t.removeEventListener("click", f(this, _t)), this.options.colHover && (t.removeEventListener("mouseover", f(this, mt)), t.removeEventListener("mouseleave", f(this, bt)))), window.removeEventListener("resize", f(this, ft)), f(this, L).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var s;
      (s = this.options.onScroll) == null || s.call(this, t, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var s;
      (s = this.options.onScroll) == null || s.call(this, t, "vert");
    });
  }
  getColInfo(t) {
    var o, i;
    const { layout: s } = this;
    if (!!s)
      return (i = (o = s.colsInfo.fixedLeftCols.find((r) => r.name === t)) != null ? o : s.colsInfo.fixedRightCols.find((r) => r.name === t)) != null ? i : s.colsInfo.scrollCols.find((r) => r.name === t);
  }
  getRowInfo(t) {
    return this.layout.rows.find((s) => s.id === t);
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}) {
    const { dirtyType: s } = t;
    s === "layout" ? S(this, B, void 0) : s === "options" && (S(this, B, void 0), S(this, K, void 0)), this.forceUpdate();
  }
  render() {
    var m;
    const t = A(this, Bt, Qe).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: h } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ b("div", {
      id: f(this, nt),
      className: H("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((m = t == null ? void 0 : t.scrollTop) != null ? m : 0) > 0,
        "scrollbar-hover": h
      }),
      style: l,
      ref: this.ref
    }, t && A(this, Tt, Ke).call(this, t), t && A(this, zt, Ye).call(this, t), t && A(this, Wt, Ve).call(this, t), t && A(this, Dt, Xe).call(this, t));
  }
}
Q = new WeakMap(), nt = new WeakMap(), G = new WeakMap(), K = new WeakMap(), tt = new WeakMap(), L = new WeakMap(), B = new WeakMap(), dt = new WeakMap(), Tt = new WeakSet(), Ke = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Hn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: f(this, pt),
      onRenderRow: f(this, jt),
      ...o
    });
  let r, a;
  if (typeof s == "function") {
    const c = s(t, this.state);
    typeof c == "object" && c && "__html" in c ? a = c : r = c;
  } else
    r = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: i },
    dangerouslySetInnerHTML: a
  }, r);
}, zt = new WeakSet(), Ye = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = t;
  return /* @__PURE__ */ b(Ln, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: f(this, pt),
    onRenderRow: f(this, Pt),
    ...a
  });
}, Wt = new WeakSet(), Ve = function(t) {
  const { footer: s, footerHeight: o } = t;
  if (!s)
    return null;
  let i, r;
  if (typeof s == "function") {
    const a = s(t, this.state);
    typeof a == "object" && a && "__html" in a ? r = a : i = a;
  } else
    i = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-footer",
    style: { height: o },
    dangerouslySetInnerHTML: r
  }, i);
}, Dt = new WeakSet(), Xe = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: h, scrollWidth: l } = i, { scrollbarSize: m = 12, horzScrollbarPos: u } = this.props;
  return h > l && s.push(/* @__PURE__ */ b(Ee, {
    key: "horz",
    type: "horz",
    scrollPos: o,
    scrollSize: h,
    clientSize: l,
    onScroll: f(this, gt),
    left: i.flexLeftWidth,
    bottom: u === "inside" ? 0 : -m,
    size: m,
    wheelContainer: this.ref
  })), c > a && s.push(/* @__PURE__ */ b(Ee, {
    key: "vert",
    type: "vert",
    scrollPos: r,
    scrollSize: c,
    clientSize: a,
    onScroll: f(this, gt),
    right: 0,
    size: m,
    top: t.headerHeight,
    wheelContainer: this.ref
  })), s.length ? s : null;
}, ft = new WeakMap(), ut = new WeakSet(), Qt = function() {
  var t;
  S(this, G, !1), (t = this.options.afterRender) == null || t.call(this), f(this, L).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Pt = new WeakMap(), jt = new WeakMap(), pt = new WeakMap(), gt = new WeakMap(), _t = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), yt = new WeakSet(), te = function(t) {
  t !== void 0 ? S(this, dt, t) : t = f(this, dt);
  const { current: s } = this.ref;
  if (!s)
    return;
  const o = "dtable-col-hover";
  s.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && s.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}, It = new WeakSet(), Je = function() {
  if (f(this, K))
    return !1;
  const t = Jt(), s = Wn(f(this, tt), { ...t, ...this.props }), o = f(this, tt).filter((i) => !i.when || i.when(s));
  return S(this, L, Object.freeze(o)), S(this, K, s), !0;
}, Ot = new WeakSet(), Ze = function() {
  var de, fe, ue;
  const { options: t, plugins: s } = this;
  s.forEach((p) => {
    var W;
    const k = (W = p.beforeLayout) == null ? void 0 : W.call(this, t);
    k && Object.assign(t, k);
  });
  const {
    header: o,
    footer: i,
    rowHeight: r,
    defaultColWidth: a,
    minColWidth: c,
    maxColWidth: h
  } = t, l = [], m = [], u = [];
  let d = 0, g = 0, w = 0;
  t.cols.forEach((p) => {
    var pe, ge, _e;
    if (p.hidden)
      return;
    p = { ...p };
    const { minWidth: k = c, maxWidth: W = h } = p, D = Me((pe = p.width) != null ? pe : 0, k, W), U = (ge = p.flex) != null ? ge : 1, St = U * Me(a, k, W), q = {
      name: p.name,
      type: (_e = p.type) != null ? _e : "",
      setting: p,
      left: 0,
      flex: U,
      realWidth: D,
      flexWidth: St,
      visible: !0,
      index: w++
    };
    p.fixed === "left" ? (q.left = d, d += D, l.push(q)) : p.fixed === "right" ? (q.left = g, g += D, m.push(q)) : u.push(q), s.forEach((me) => {
      var be, ye, ve;
      const kt = (ye = me.colTypes) == null ? void 0 : ye[(be = p.type) != null ? be : ""];
      if (kt) {
        const we = typeof kt == "function" ? kt(p) : kt;
        we && Object.assign(p, we);
      }
      (ve = me.onAddCol) == null || ve.call(this, q);
    });
  });
  let _ = t.width, v = 0;
  if (typeof _ == "function" && (_ = _()), _ === "auto")
    v = d + g, u.forEach((p) => {
      p.realWidth || (p.realWidth = p.flexWidth), v += p.realWidth;
    });
  else if (_ === "100%") {
    const p = (de = this.ref.current) == null ? void 0 : de.parentElement;
    if (p)
      v = p.clientWidth;
    else {
      v = 0, S(this, G, !0);
      return;
    }
  } else
    v = _ != null ? _ : 0;
  const { data: x, rowKey: $ = "id" } = t, R = [], F = (p, k, W) => {
    var U, St;
    const D = { data: W != null ? W : { [$]: p }, top: R.length * r, id: p, index: R.length };
    if (W || (D.lazy = !0), R.push(D), ((U = t.onAddRow) == null ? void 0 : U.call(this, D, k)) !== !1) {
      for (const q of s)
        if (((St = q.onAddRow) == null ? void 0 : St.call(this, D, k)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let p = 0; p < x; p++)
      F(p, p);
  else
    Array.isArray(x) && x.forEach((p, k) => {
      typeof p == "object" ? F(p[$], k, p) : F(p, k);
    });
  let M = !1, z = R;
  if (t.onAddRows) {
    const p = t.onAddRows.call(this, z);
    p && (z = p, M = !0);
  }
  for (const p of s) {
    const k = (fe = p.onAddRows) == null ? void 0 : fe.call(this, z);
    k && (z = k, M = !0);
  }
  M && z.forEach((p, k) => {
    p.index = k;
  });
  const qt = o ? t.headerHeight || r : 0, Gt = i ? t.footerHeight || r : 0;
  let O = t.height, X = 0;
  const ae = z.length * r, Kt = qt + Gt + ae;
  if (typeof O == "function" && (O = O(Kt)), O === "auto")
    X = Kt;
  else if (typeof O == "object")
    X = Math.min(O.max, Math.max(O.min, Kt));
  else if (O === "100%") {
    const p = (ue = this.ref.current) == null ? void 0 : ue.parentElement;
    if (p)
      X = p.clientHeight;
    else {
      X = 0, S(this, G, !0);
      return;
    }
  } else
    X = O;
  const pn = X - qt - Gt, ce = v - d - g;
  let Rt = 0;
  const Yt = [];
  let he = 0;
  if (u.forEach((p) => {
    p.realWidth ? Rt += p.realWidth : (Yt.push(p), he += p.flex);
  }), Yt.length) {
    const p = Math.max(0, ce - Rt);
    Yt.forEach((k) => {
      var U;
      const { minWidth: W = c, maxWidth: D = h } = k.setting;
      k.realWidth = Math.min(D, Math.max(W, Math.ceil(p * ((U = k.flex) != null ? U : 1) / he))), Rt += k.realWidth;
    });
  }
  let at = {
    allRows: R,
    width: v,
    height: X,
    rows: z,
    rowHeight: r,
    rowsHeight: pn,
    rowsHeightTotal: ae,
    header: o,
    footer: i,
    headerHeight: qt,
    footerHeight: Gt,
    colsInfo: {
      fixedLeftCols: l,
      fixedRightCols: m,
      scrollCols: u,
      flexLeftWidth: d,
      scrollWidth: ce,
      scrollWidthTotal: Rt,
      flexRightWidth: g
    }
  };
  if (t.onLayout) {
    const p = t.onLayout.call(this, at);
    p && (at = p);
  }
  s.forEach((p) => {
    if (p.onLayout) {
      const k = p.onLayout.call(this, at);
      k && (at = k);
    }
  }), S(this, B, at);
}, Bt = new WeakSet(), Qe = function() {
  (A(this, It, Je).call(this) || !f(this, B)) && A(this, Ot, Ze).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollTop: s, scrollLeft: o } = this.state;
  const { rowsHeightTotal: i, rowsHeight: r, rows: a, rowHeight: c, colsInfo: { scrollCols: h, scrollWidth: l } } = t;
  s = Math.min(Math.max(0, i - r), s);
  const m = s + r;
  let u = 0;
  h.forEach((_) => {
    _.left = u, u += _.realWidth, _.visible = _.left + _.realWidth >= o && _.left <= o + l;
  }), o = Math.min(Math.max(0, u - l), o);
  const d = Math.floor(s / c), g = Math.min(a.length, Math.ceil(m / c)), w = [];
  for (let _ = d; _ < g; _++) {
    const v = a[_];
    v.top = v.index * c - s, w.push(v);
  }
  return t.visibleRows = w, t.scrollTop = s, t.scrollLeft = o, t;
}, E(Zt, "addPlugin", Ue), E(Zt, "removePlugin", qe);
function Dn(e, n) {
  var r, a;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (c, h) => {
    o && !o.call(this, c) || !!t[c] === h || (h ? t[c] = !0 : delete t[c], s[c] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !tn.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: c }) => {
    i(c, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((c) => {
    i(c, n != null ? n : !t[c]);
  })), Object.keys(s).length) {
    const c = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, e, s, t);
    c && Object.keys(c).forEach((h) => {
      c[h] ? t[h] = !0 : delete t[h];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function Pn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function tn() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function jn() {
  return Object.keys(this.state.checkedRows);
}
const en = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = Dn.bind(this), this.isRowChecked = Pn.bind(this), this.isAllRowChecked = tn.bind(this), this.getChecks = jn.bind(this);
  },
  onRenderCell(e, { rowID: n, col: t }) {
    var r, a;
    const { canRowCheckable: s } = this.options;
    if (s && !s.call(this, n))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, n) : o) {
      const c = this.isRowChecked(n), h = (a = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, c, n)) != null ? a : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { rowID: n, col: t }) {
    var i, r;
    const { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isAllRowChecked(), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(c), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: H(e.className, "is-checked") };
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
rt(en);
function ee(e) {
  const n = this.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = ee.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? ee.call(this, n.parent).level + 1 : 0, n;
}
function In(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  if (e === "HEADER")
    if (n === void 0 && (n = !nn.call(this)), n) {
      const o = this.nestedMap.entries();
      for (const [i, r] of o)
        r.state === "expanded" && (t[i] = !0);
    } else
      t = {};
  else {
    const o = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[o[0]]), o.forEach((i) => {
      const r = this.nestedMap.get(i);
      n && (r == null ? void 0 : r.children) ? t[i] = !0 : delete t[i];
    });
  }
  this.update({ dirtyType: "layout" }), this.setState({ collapsedRows: { ...t } }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function nn() {
  const e = this.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function sn(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = sn(e, n, r.children, s + 1)));
  }
  return n;
}
function on(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, on(e, i, t, s);
  }), o;
}
function rn(e, n, t, s, o) {
  var a;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((a = i.children) == null ? void 0 : a.every((c) => {
    const h = !!(s[c] !== void 0 ? s[c] : o[c]);
    return t === h;
  })) && (s[n] = t), i.parent && rn(e, i.parent, t, s, o);
}
const ln = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const t = this.nestedMap.get(e.id), s = this.nestedMap.get(n.id);
      return (t == null ? void 0 : t.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(n).forEach(([o, i]) => {
        const r = on(this, o, i, s);
        r != null && r.parent && rn(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = In.bind(this), this.isAllCollapsed = nn.bind(this), this.getNestedRowInfo = ee.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(e) {
    var s, o, i;
    const n = e.data[(s = this.options.nestedParentKey) != null ? s : "parent"], t = (o = this.nestedMap.get(e.id)) != null ? o : {
      state: "",
      level: 0
    };
    if (t.parent = n, e.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (t.children = []), this.nestedMap.set(e.id, t), n) {
      let r = this.nestedMap.get(n);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(n, r)), r.children || (r.children = []), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), sn(this.nestedMap), e.sort((n, t) => {
      var r, a;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((a = o.order) != null ? a : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { rowID: n, col: t, rowData: s }) {
    var r, a, c;
    const { nestedToggle: o } = t.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && e.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, t, s)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: h = o } = t.setting;
      h && (h === !0 && (h = (c = this.options.nestedIndent) != null ? c : 12), e.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: h * i.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { rowID: n, col: t }) {
    var s, o;
    return t.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, n, t, void 0)) != null ? o : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: H(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = H(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
rt(ln);
const I = 24 * 60 * 60 * 1e3, N = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), lt = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ne = (e, n = new Date()) => N(e).getFullYear() === N(n).getFullYear(), an = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), On = (e, n = new Date()) => {
  e = N(e), n = N(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Bn = (e, n) => lt(N(n), e), Fn = (e, n) => lt(N(n).getTime() - I, e), Un = (e, n) => lt(N(n).getTime() + I, e), qn = (e, n) => lt(N(n).getTime() - 2 * I, e), Lt = (e, n = "yyyy-MM-dd hh:mm") => {
  e = N(e);
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
}, Gn = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Lt(e, ne(e) ? s.month : s.full);
  if (lt(e, n))
    return o;
  const i = Lt(n, ne(e, n) ? an(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, Kn = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - I * 7;
    case "oneMonth":
      return n - I * 31;
    case "threeMonth":
      return n - I * 31 * 3;
    case "halfYear":
      return n - I * 183;
    case "oneYear":
      return n - I * 365;
    case "twoYear":
      return n - 2 * (I * 365);
    default:
      return 0;
  }
}, se = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, se(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, se(e, "day", t, s);
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
const cn = {
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
      onRenderCell(e, { col: n, rowData: t }) {
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = ct(s, t);
        return e[0] = /* @__PURE__ */ b("a", {
          href: i,
          ...o
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, rowData: t }) {
        const { avatarWithName: s, avatarClass: o = "size-sm circle", avatarKey: i = `${n.name}Avatar` } = n.setting, r = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: t ? t[i] : ""
        }));
        return s ? e.unshift(r) : e[0] = r, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-green-500)" } = n.setting, r = (t - s) / 2, a = t / 2, c = e[0];
        return e[0] = /* @__PURE__ */ b("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r,
          "stroke-width": s,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: a,
          cy: a,
          r,
          "stroke-width": s,
          stroke: i,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * r * 2,
          "stroke-dashoffset": Math.PI * r * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: a,
          y: a + s,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${r}px` }
        }, Math.round(c))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, rowData: t }) {
        const s = t == null ? void 0 : t[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((a) => {
            typeof a == "string" && (a = { action: a });
            const c = i[a.action];
            return c && (a = { className: r, ...c, ...a }), ct(o, a);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Lt(i, s) : o === "html" ? e[0] = { html: ct(s, i) } : e[0] = ct(s, i), e;
      }
    }
  }
};
rt(cn);
const hn = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  onCreate() {
    this.headerGroups = /* @__PURE__ */ new Map();
  },
  when: (e) => !!e.headerGroup,
  beforeLayout(e) {
    const { headerGroups: n } = this;
    n.clear();
    const { cols: t } = e;
    if (!(t != null && t.length))
      return;
    const s = {};
    return t.forEach((o, i) => {
      const { group: r } = o;
      if (!r) {
        s[o.name] = i;
        return;
      }
      let a = this.headerGroups.get(r);
      a ? a.cols.push(o.name) : (a = { cols: [o.name], index: i }, this.headerGroups.set(r, a)), s[o.name] = a.index + a.cols.length / t.length;
    }), t.sort((o, i) => s[o.name] - s[i.name]), {
      headerHeight: !e.headerHeight && e.rowHeight ? e.rowHeight * 2 : void 0,
      cols: t
    };
  },
  onRenderHeaderCell(e, { col: n }) {
    const { group: t } = n.setting;
    if (t) {
      const s = this.headerGroups.get(t), o = this.layout.headerHeight / 2;
      if (n.name === s.cols[0]) {
        const i = s.cols.reduce((a, c) => {
          var h, l;
          return a + ((l = (h = this.getColInfo(c)) == null ? void 0 : h.realWidth) != null ? l : 0);
        }, 0), r = {
          height: o - 1,
          width: i - 1
        };
        e.push(/* @__PURE__ */ b("div", {
          class: "dtable-header-group",
          style: r
        }, t));
      }
      e.push({
        className: "dtable-header-as-group",
        style: { paddingTop: o }
      });
    }
    return e;
  }
};
rt(hn);
function dn(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
function Yn(e) {
  var t, s;
  const n = dn(this, e);
  if (!(!e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1))
    return this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function Vn(e) {
  var o, i;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, t, s);
}
function Xn(e) {
  var o;
  const n = dn(this, e), { draggingRow: t } = this.state;
  if (!n || !t || n.id === t.id)
    return;
  const s = t.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, t, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function Jn(e) {
  return e.preventDefault(), !0;
}
function Zn(e) {
  var o;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  if (n && t && s && n.id !== t.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((u) => r.call(this, u)));
    const a = i.findIndex((u) => u.id === n.id), c = i.findIndex((u) => u.id === t.id), h = i.splice(a, 1);
    i.splice(c, 0, h[0]);
    const l = {}, m = [];
    i.forEach(({ id: u }, d) => {
      l[u] = d, m.push(u);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, t, s, m);
  }
}
const fn = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  onCreate() {
    this.onSortDragStart = Yn.bind(this), this.onSortDragEnd = Vn.bind(this), this.onSortDragEnter = Xn.bind(this), this.onSortDragOver = Jn.bind(this), this.onSortDrop = Zn.bind(this);
  },
  onMounted() {
    const { current: e } = this.ref;
    e && (e.addEventListener("dragstart", this.onSortDragStart), e.addEventListener("dragend", this.onSortDragEnd), e.addEventListener("dragenter", this.onSortDragEnter), e.addEventListener("dragover", this.onSortDragOver), e.addEventListener("drop", this.onSortDrop));
  },
  beforeLayout() {
  },
  onAddRows(e) {
    const { rowOrders: n } = this.state;
    if (!!n)
      return e.sort((t, s) => n[t.id] - n[s.id]);
  },
  onRenderRow({ props: e, row: n }) {
    var c;
    const { draggingRow: t, droppingRow: s } = this.state, o = n.id === (t == null ? void 0 : t.id), i = n.id === (s == null ? void 0 : s.id), r = [e.className, {
      "is-dragging": o,
      "is-dropping": i
    }];
    let a = 0;
    return s && t && (o ? a = s.top - n.top : t.index > n.index && n.index >= s.index ? (r.push("bg-red"), a = this.layout.rowHeight) : t.index < n.index && n.index <= s.index && (a -= this.layout.rowHeight)), {
      className: r,
      style: { ...e.style, transform: a ? `translateY(${a}px)` : void 0 },
      draggable: ((c = this.options.canSort) == null ? void 0 : c.call(this, n)) !== !1
    };
  }
};
rt(fn);
const Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: en,
  nested: ln,
  rich: cn,
  headerGroup: hn,
  sortable: fn
}, Symbol.toStringTag, { value: "Module" }));
var vt;
class xt {
  constructor(n, t) {
    E(this, "element");
    E(this, "options");
    y(this, vt, Ne());
    var s;
    this.element = n, this.options = { ...Jt(), ...t }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return f(this, vt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), wn(/* @__PURE__ */ b(Zt, {
      ref: f(this, vt),
      ...this.options
    }), this.element);
  }
}
vt = new WeakMap(), E(xt, "NAME", "zui.dtable"), E(xt, "definePlugin", rt), E(xt, "removePlugin", qe), E(xt, "plugins", Qn);
var wt, Y, P, st, ot, Et;
const le = class {
  constructor(n, t = "local") {
    y(this, ot);
    y(this, wt, void 0);
    y(this, Y, void 0);
    y(this, P, void 0);
    y(this, st, void 0);
    S(this, wt, t), S(this, Y, `ZUI_STORE:${n != null ? n : Be()}`), S(this, P, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return f(this, wt);
  }
  get session() {
    return this.type === "session" ? this : (f(this, st) || S(this, st, new le(f(this, Y), "session")), f(this, st));
  }
  get(n, t) {
    const s = f(this, P).getItem(A(this, ot, Et).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    f(this, P).setItem(A(this, ot, Et).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    f(this, P).removeItem(A(this, ot, Et).call(this, n));
  }
  each(n) {
    for (let t = 0; t < f(this, P).length; t++) {
      const s = f(this, P).key(t);
      if (s != null && s.startsWith(f(this, Y))) {
        const o = f(this, P).getItem(s);
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
let Nt = le;
wt = new WeakMap(), Y = new WeakMap(), P = new WeakMap(), st = new WeakMap(), ot = new WeakSet(), Et = function(n) {
  return `${f(this, Y)}:${n}`;
};
const ts = new Nt("DEFAULT");
function es(e, n = "local") {
  return new Nt(e, n);
}
Object.assign(ts, { create: es });
function ns() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function ss() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function os(e, n) {
  ns(), e.classList.add("block"), $e(e, n), e.onclick = (t) => is(t, e), window.addEventListener("resize", () => {
    $e(e, n);
  });
}
function un(e) {
  var n;
  ss(), (n = e.classList) == null || n.remove("block");
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
function is(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), un(n));
}
function rs(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = rs(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    os(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && un(n);
});
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: I,
  createDate: N,
  isSameDay: lt,
  isSameYear: ne,
  isSameMonth: an,
  isSameWeek: On,
  isToday: Bn,
  isYesterday: Fn,
  isTomorrow: Un,
  isDBY: qn,
  formatDate: Lt,
  formatDateSpan: Gn,
  getTimeBeforeDesc: Kn,
  calculateTimestamp: se,
  formatString: ct,
  formatBytes: kn,
  convertBytes: xn
}, Symbol.toStringTag, { value: "Module" }));
var j, T;
class ls {
  constructor(n) {
    y(this, j, void 0);
    y(this, T, void 0);
    S(this, j, n), S(this, T, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement), this.addActive(f(this, T).parentElement, f(this, T)), f(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    S(this, T, f(this, j)), this.addActive(f(this, T).parentElement, f(this, T)), S(this, j, document.querySelector(`[href='#${f(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${f(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${f(this, T).getAttribute("id")}']`)), this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement);
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
j = new WeakMap(), T = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new ls(e.target).showTarget());
});
export {
  cs as Avatar,
  xt as DTable,
  ls as NavTabs,
  Ee as Scrollbar,
  hs as browser,
  Qn as dtablePlugins,
  ds as helpers,
  ts as store
};
