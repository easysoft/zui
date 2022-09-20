var _n = Object.defineProperty;
var mn = (e, n, t) => n in e ? _n(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var E = (e, n, t) => (mn(e, typeof n != "symbol" ? n + "" : n, t), t), Vt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (Vt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), v = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, S = (e, n, t, s) => (Vt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var N = (e, n, t) => (Vt(e, n, "access private method"), t);
var Ft, C, Ae, ut, we, Ct = {}, He = [], bn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function X(e, n) {
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
  return kt(e, r, s, o, null);
}
function kt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Ae : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Ne() {
  return { current: null };
}
function Ut(e) {
  return e.children;
}
function nt(e, n) {
  this.props = e, this.context = n;
}
function at(e, n) {
  if (n == null)
    return e.__ ? at(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? at(e) : null;
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
function Re(e) {
  (!e.__d && (e.__d = !0) && ut.push(e) && !Et.__r++ || we !== C.debounceRendering) && ((we = C.debounceRendering) || setTimeout)(Et);
}
function Et() {
  for (var e; Et.__r = ut.length; )
    e = ut.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ut = [], e.some(function(n) {
      var t, s, o, i, r, c;
      n.__d && (r = (i = (t = n).__v).__e, (c = t.__P) && (s = [], (o = X({}, i)).__v = i.__v + 1, se(c, i, o, t.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? at(i) : r, i.__h), Pe(s, i), i.__e != r && Te(i)));
    });
}
function ze(e, n, t, s, o, i, r, c, a, d) {
  var l, m, u, f, g, w, _, y = s && s.__k || He, x = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? kt(null, f, null, null, f) : Array.isArray(f) ? kt(Ut, { children: f }, null, null, null) : f.__b > 0 ? kt(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (u = y[l]) === null || u && f.key == u.key && f.type === u.type)
        y[l] = void 0;
      else
        for (m = 0; m < x; m++) {
          if ((u = y[m]) && f.key == u.key && f.type === u.type) {
            y[m] = void 0;
            break;
          }
          u = null;
        }
      se(e, f, u = u || Ct, o, i, r, c, a, d), g = f.__e, (m = f.ref) && u.ref != m && (_ || (_ = []), u.ref && _.push(u.ref, null, f), _.push(m, f.__c || g, f)), g != null ? (w == null && (w = g), typeof f.type == "function" && f.__k === u.__k ? f.__d = a = We(f, a, e) : a = De(e, f, u, y, g, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = at(u));
    }
  for (t.__e = w, l = x; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = at(s, l + 1)), je(y[l], y[l]));
  if (_)
    for (l = 0; l < _.length; l++)
      Ie(_[l], _[++l], _[++l]);
}
function We(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? We(s, n, t) : De(t, s, s, o, s.__e, n));
  return n;
}
function De(e, n, t, s, o, i) {
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
function yn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Mt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Mt(e, i, n[i], t[i], s);
}
function Se(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || bn.test(n) ? t : t + "px";
}
function Mt(e, n, t, s, o) {
  var i;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Se(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Se(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? xe : ke, i) : e.removeEventListener(n, i ? xe : ke, i);
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
function ke(e) {
  this.l[e.type + !1](C.event ? C.event(e) : e);
}
function xe(e) {
  this.l[e.type + !0](C.event ? C.event(e) : e);
}
function se(e, n, t, s, o, i, r, c, a) {
  var d, l, m, u, f, g, w, _, y, x, $, R, U, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, i = [c]), (d = C.__b) && d(n);
  try {
    t:
      if (typeof M == "function") {
        if (_ = n.props, y = (d = M.contextType) && s[d.__c], x = d ? y ? y.props.value : d.__ : s, t.__c ? w = (l = n.__c = t.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(_, x) : (n.__c = l = new nt(_, x), l.constructor = M, l.render = wn), y && y.sub(l), l.props = _, l.state || (l.state = {}), l.context = x, l.__n = s, m = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, M.getDerivedStateFromProps(_, l.__s))), u = l.props, f = l.state, m)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && _ !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, x), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, x) === !1 || n.__v === t.__v) {
            l.props = _, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(z) {
              z && (z.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, x), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, g);
          });
        }
        if (l.context = x, l.props = _, l.__v = n, l.__P = e, $ = C.__r, R = 0, "prototype" in M && M.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(n), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(n), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++R < 25);
        l.state = l.__s, l.getChildContext != null && (s = X(X({}, s), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(u, f)), U = d != null && d.type === Ut && d.key == null ? d.props.children : d, ze(e, Array.isArray(U) ? U : [U], n, t, s, o, i, r, c, a), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), w && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = vn(t.__e, n, t, s, o, i, r, a);
    (d = C.diffed) && d(n);
  } catch (z) {
    n.__v = null, (a || i != null) && (n.__e = c, n.__h = !!a, i[i.indexOf(c)] = null), C.__e(z, n, t);
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
function vn(e, n, t, s, o, i, r, c) {
  var a, d, l, m = t.props, u = n.props, f = n.type, g = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((a = i[g]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        e = a, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), i = null, c = !1;
  }
  if (f === null)
    m === u || c && e.data === u || (e.data = u);
  else {
    if (i = i && Ft.call(e.childNodes), d = (m = t.props || Ct).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (m = {}, g = 0; g < e.attributes.length; g++)
          m[e.attributes[g].name] = e.attributes[g].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (yn(e, u, m, o, c), l)
      n.__k = [];
    else if (g = n.props.children, ze(e, Array.isArray(g) ? g : [g], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && at(t, 0), c), i != null)
      for (g = i.length; g--; )
        i[g] != null && Le(i[g]);
    c || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || f === "progress" && !g || f === "option" && g !== m.value) && Mt(e, "value", g, m.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && Mt(e, "checked", g, m.checked, !1));
  }
  return e;
}
function Ie(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    C.__e(s, t);
  }
}
function je(e, n, t) {
  var s, o;
  if (C.unmount && C.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Ie(s, null, n)), (s = e.__c) != null) {
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
      s[o] && je(s[o], n, typeof e.type != "function");
  t || e.__e == null || Le(e.__e), e.__e = e.__d = void 0;
}
function wn(e, n, t) {
  return this.constructor(e, t);
}
function Rn(e, n, t) {
  var s, o, i;
  C.__ && C.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], se(n, e = (!s && t || n).__k = b(Ut, null, [e]), o || Ct, Ct, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Ft.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Pe(i, e);
}
Ft = He.slice, C = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ae = 0, nt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, t), this.props)), e && X(t, e), e != null && this.__v && (n && this.__h.push(n), Re(this));
}, nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Re(this));
}, nt.prototype.render = Ut, ut = [], Et.__r = 0;
const H = (...e) => e.map((n) => Array.isArray(n) ? H(...n) : typeof n == "function" ? H(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class hs extends nt {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, d = [s], l = { ...o };
    let m = null;
    return i ? m = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : m = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && d.push(`avatar-${n}`), typeof t == "string" && d.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: H(d),
      style: l,
      ...a
    }, m, c);
  }
}
const Sn = (e) => {
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
    const t = Sn(this);
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
var Z, Q;
class Ce extends nt {
  constructor(t) {
    var s;
    super(t);
    v(this, Z, 0);
    v(this, Q, null);
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
      s && (h(this, Z) && cancelAnimationFrame(h(this, Z)), S(this, Z, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), S(this, Z, 0);
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
    t && (S(this, Q, typeof t == "string" ? document : t.current), h(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), h(this, Q) && h(this, Q).removeEventListener("wheel", this._handleWheel);
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
      bottom: d,
      right: l
    } = this.props, { maxScrollPos: m, scrollPos: u } = this, { dragStart: f } = this.state, g = {
      left: c,
      top: a,
      bottom: d,
      right: l,
      ...r
    }, w = {};
    return s === "horz" ? (g.height = o, g.width = t, w.width = this.barSize, w.left = Math.round(Math.min(m, u) * (t - w.width) / m)) : (g.width = o, g.height = t, w.height = this.barSize, w.top = Math.round(Math.min(m, u) * (t - w.height) / m)), /* @__PURE__ */ b("div", {
      className: H("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": f
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
Z = new WeakMap(), Q = new WeakMap();
function ft(e, ...n) {
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
var oe = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(oe || {});
function xn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / oe[t]).toFixed(n) + t);
}
const Cn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * oe[s];
};
function En(e) {
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
function Mn(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function $n(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, c = s.left <= i && s.left + s.width >= 0;
  return r && c;
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: En,
  domReady: Mn,
  isElementVisible: $n,
  classes: H
}, Symbol.toStringTag, { value: "Module" }));
function Be() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function An(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Be(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? An(t) : Be();
});
let Oe = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Ee(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ie({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, cellStyle: c, children: a, ...d }) {
  const { cellStyle: l, align: m, className: u, border: f } = e.setting, g = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...c,
    ...l
  }, w = {
    justifyContent: m ? m === "left" ? "start" : m === "right" ? "end" : m : void 0,
    ...r
  };
  let _ = [
    a != null ? a : o == null ? void 0 : o[e.name]
  ];
  i && (_ = i(_, { rowID: s, col: e, rowData: o }, b));
  const y = ["dtable-cell", n, u, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], x = ["dtable-cell-content"], $ = [];
  return _ == null || _.forEach((R) => {
    typeof R == "object" && R && ("html" in R || "className" in R || "style" in R || "cellClass" in R || "cellStyle" in R) ? (R.html ? $.push(/* @__PURE__ */ b("div", {
      className: H("dtable-cell-html", R.className),
      style: R.style,
      dangerouslySetInnerHTML: { __html: R.html }
    })) : (R.style && Object.assign(w, R.style), R.className && x.push(R.className)), R.cellStyle && Object.assign(g, R.cellStyle), R.cellClass && y.push(R.cellClass)) : $.push(R);
  }), /* @__PURE__ */ b("div", {
    className: H(y),
    style: g,
    "data-col": e.name,
    ...d
  }, /* @__PURE__ */ b("div", {
    className: H(x),
    style: w
  }, $));
}
function Hn({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ b(ie, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function Xt({ rowID: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, data: c, CellComponent: a = ie, onRenderCell: d }) {
  return /* @__PURE__ */ b("div", {
    className: H("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ b(a, {
    key: l.name,
    col: l,
    rowData: c,
    rowID: e,
    onRenderCell: d
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
  flexLeftWidth: c,
  scrollWidth: a,
  scrollWidthTotal: d,
  flexRightWidth: l,
  scrollLeft: m,
  CellComponent: u = ie,
  onRenderCell: f,
  data: g,
  style: w,
  ..._
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  let x = null;
  r != null && r.length && (x = /* @__PURE__ */ b(Xt, {
    className: "dtable-flexable",
    cols: r,
    left: c - m,
    width: d,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  let $ = null;
  i != null && i.length && ($ = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  const R = { top: t, height: s, lineHeight: `${s - 2}px`, ...w };
  return /* @__PURE__ */ b("div", {
    className: H("dtable-row", n),
    style: R,
    "data-id": e,
    ..._
  }, y, x, $);
}
function Ln({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Hn
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
function Nn({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...c
}) {
  return n = { ...n, top: t, height: o }, /* @__PURE__ */ b("div", {
    className: H("dtable-rows", e),
    style: n
  }, s.map((a) => {
    const d = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      rowID: a.id,
      data: a.data,
      top: a.top,
      height: i,
      ...c
    };
    if (r) {
      const l = r({ props: d, row: a }, b);
      l && Object.assign(d, l);
    }
    return /* @__PURE__ */ b(Fe, {
      ...d
    });
  }));
}
const $t = /* @__PURE__ */ new Map(), At = [];
function Ue(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && $t.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  $t.set(t, e), (n == null ? void 0 : n.buildIn) && !At.includes(t) && At.push(t);
}
function st(e, n) {
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
function Tn(e) {
  return $t.get(e);
}
function qe(e) {
  return $t.delete(e);
}
function zn(e) {
  if (typeof e == "string") {
    const n = Tn(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ge(e, n, t) {
  return n.forEach((s) => {
    var i;
    if (!s)
      return;
    const o = zn(s);
    !o || t.has(o.name) || (e.push(o), t.add(o.name), (i = o.plugins) != null && i.length && Ge(e, o.plugins, t));
  }), e;
}
function Wn(e = [], n = !0) {
  return n && At.length && e.unshift(...At), e != null && e.length ? Ge([], e, /* @__PURE__ */ new Set()) : [];
}
function Dn(e, n) {
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
var tt, ot, K, Y, et, A, O, F, it, rt, Nt, Ke, Tt, Ye, zt, Ve, Wt, Xe, pt, gt, Qt, Dt, Pt, _t, mt, It, jt, Je, Bt, Ze, Ot, Qe;
class Zt extends nt {
  constructor(t) {
    super(t);
    v(this, Nt);
    v(this, Tt);
    v(this, zt);
    v(this, Wt);
    v(this, gt);
    v(this, jt);
    v(this, Bt);
    v(this, Ot);
    E(this, "ref", Ne());
    v(this, tt, 0);
    v(this, ot, void 0);
    v(this, K, !1);
    v(this, Y, void 0);
    v(this, et, void 0);
    v(this, A, []);
    v(this, O, void 0);
    v(this, F, /* @__PURE__ */ new Map());
    v(this, it, /* @__PURE__ */ new Map());
    v(this, rt, (t) => {
      const { type: s } = t, o = h(this, F).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation();
            break;
          }
      }
    });
    v(this, pt, () => {
      h(this, tt) && cancelAnimationFrame(h(this, tt)), S(this, tt, requestAnimationFrame(() => {
        S(this, O, void 0), this.forceUpdate(), S(this, tt, 0);
      }));
    });
    v(this, Dt, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return h(this, A).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    v(this, Pt, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), h(this, A).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    v(this, _t, (t, s, o) => {
      const { rowID: i, col: r } = s, c = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[c] && (t = r.setting[c].call(this, t, s, o)), this.options[c] && (t = this.options[c].call(this, t, s, o)), h(this, A).forEach((a) => {
        a[c] && (t = a[c].call(this, t, s, o));
      }), t;
    });
    v(this, mt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    v(this, It, (t) => {
      var a, d, l, m, u, f, g;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (d = o.getAttribute("data-id")) != null ? d : "";
      if (c === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), h(this, A).forEach((w) => {
          var _;
          (_ = w.onHeaderCellClick) == null || _.call(this, t, { colName: r, element: i });
        }));
      else {
        const w = this.layout.visibleRows.find((_) => _.id === c);
        if (i) {
          if (((m = this.options.onCellClick) == null ? void 0 : m.call(this, t, { colName: r, rowID: c, rowInfo: w, element: i, rowElement: o })) === !0)
            return;
          for (const _ of h(this, A))
            if (((u = _.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: c, rowInfo: w, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: c, rowInfo: w, element: o })) === !0)
          return;
        for (const _ of h(this, A))
          if (((g = _.onRowClick) == null ? void 0 : g.call(this, t, { rowID: c, rowInfo: w, element: o })) === !0)
            return;
      }
    });
    S(this, ot, `dtable-${Oe(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, S(this, et, Object.freeze(Wn(t.plugins))), h(this, et).forEach((s) => {
      var o;
      (o = s.onCreate) == null || o.call(this, s);
    });
  }
  get options() {
    var t;
    return (t = h(this, Y)) != null ? t : Jt();
  }
  get plugins() {
    return h(this, A);
  }
  get layout() {
    return h(this, O);
  }
  get id() {
    return h(this, ot);
  }
  componentWillReceiveProps(t, s) {
    S(this, Y, void 0);
  }
  componentDidMount() {
    h(this, K) ? this.forceUpdate() : N(this, gt, Qt).call(this), h(this, A).forEach((t) => {
      const { events: s } = t;
      !s || Object.entries(s).forEach(([o, i]) => {
        this.on(o, i);
      });
    }), this.on("click", h(this, It)), this.options.responsive && window.addEventListener("resize", h(this, pt)), h(this, A).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    h(this, K) && N(this, gt, Qt).call(this);
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    if (t)
      for (const s of h(this, F).keys())
        t.removeEventListener(s, h(this, rt));
    window.removeEventListener("resize", h(this, pt)), h(this, A).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), h(this, it).clear();
  }
  on(t, s) {
    var i;
    const o = h(this, F).get(t);
    o ? o.push(s) : (h(this, F).set(t, [s]), (i = this.ref.current) == null || i.addEventListener(t, h(this, rt)));
  }
  off(t, s) {
    var r;
    const o = h(this, F).get(t);
    if (!o)
      return;
    const i = o.indexOf(s);
    i >= 0 && o.splice(i, 1), o.length || (h(this, F).delete(t), (r = this.ref.current) == null || r.removeEventListener(t, h(this, rt)));
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
    s === "layout" ? S(this, O, void 0) : s === "options" && (S(this, O, void 0), S(this, Y, void 0)), this.forceUpdate();
  }
  getCache(t, s) {
    var o;
    return (o = h(this, it).get(t)) != null ? o : s;
  }
  setCache(t, s) {
    h(this, it).set(t, s);
  }
  render() {
    var m;
    const t = N(this, Ot, Qe).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: d } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ b("div", {
      id: h(this, ot),
      className: H("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((m = t == null ? void 0 : t.scrollTop) != null ? m : 0) > 0,
        "scrollbar-hover": d
      }),
      style: l,
      ref: this.ref
    }, t && N(this, Nt, Ke).call(this, t), t && N(this, Tt, Ye).call(this, t), t && N(this, zt, Ve).call(this, t), t && N(this, Wt, Xe).call(this, t));
  }
}
tt = new WeakMap(), ot = new WeakMap(), K = new WeakMap(), Y = new WeakMap(), et = new WeakMap(), A = new WeakMap(), O = new WeakMap(), F = new WeakMap(), it = new WeakMap(), rt = new WeakMap(), Nt = new WeakSet(), Ke = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Ln, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: h(this, _t),
      onRenderRow: h(this, Pt),
      ...o
    });
  let r, c;
  if (typeof s == "function") {
    const a = s(t, this.state);
    typeof a == "object" && a && "__html" in a ? c = a : r = a;
  } else
    r = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: i },
    dangerouslySetInnerHTML: c
  }, r);
}, Tt = new WeakSet(), Ye = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: c } = t;
  return /* @__PURE__ */ b(Nn, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: h(this, _t),
    onRenderRow: h(this, Dt),
    ...c
  });
}, zt = new WeakSet(), Ve = function(t) {
  const { footer: s, footerHeight: o } = t;
  if (!s)
    return null;
  let i, r;
  if (typeof s == "function") {
    const c = s(t, this.state);
    typeof c == "object" && c && "__html" in c ? r = c : i = c;
  } else
    i = s;
  return /* @__PURE__ */ b("div", {
    className: "dtable-footer",
    style: { height: o },
    dangerouslySetInnerHTML: r
  }, i);
}, Wt = new WeakSet(), Xe = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = t, { scrollWidthTotal: d, scrollWidth: l } = i, { scrollbarSize: m = 12, horzScrollbarPos: u } = this.props;
  return d > l && s.push(/* @__PURE__ */ b(Ce, {
    key: "horz",
    type: "horz",
    scrollPos: o,
    scrollSize: d,
    clientSize: l,
    onScroll: h(this, mt),
    left: i.flexLeftWidth,
    bottom: u === "inside" ? 0 : -m,
    size: m,
    wheelContainer: this.ref
  })), a > c && s.push(/* @__PURE__ */ b(Ce, {
    key: "vert",
    type: "vert",
    scrollPos: r,
    scrollSize: a,
    clientSize: c,
    onScroll: h(this, mt),
    right: 0,
    size: m,
    top: t.headerHeight,
    wheelContainer: this.ref
  })), s.length ? s : null;
}, pt = new WeakMap(), gt = new WeakSet(), Qt = function() {
  var t;
  S(this, K, !1), (t = this.options.afterRender) == null || t.call(this), h(this, A).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Dt = new WeakMap(), Pt = new WeakMap(), _t = new WeakMap(), mt = new WeakMap(), It = new WeakMap(), jt = new WeakSet(), Je = function() {
  if (h(this, Y))
    return !1;
  const t = Jt(), s = Dn(h(this, et), { ...t, ...this.props }), o = h(this, et).filter((i) => !i.when || i.when(s));
  return S(this, A, Object.freeze(o)), S(this, Y, s), !0;
}, Bt = new WeakSet(), Ze = function() {
  var he, de, fe;
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
    defaultColWidth: c,
    minColWidth: a,
    maxColWidth: d
  } = t, l = [], m = [], u = [];
  let f = 0, g = 0, w = 0;
  t.cols.forEach((p) => {
    var ue, pe, ge;
    if (p.hidden)
      return;
    p = { ...p };
    const { minWidth: k = a, maxWidth: W = d } = p, D = Ee((ue = p.width) != null ? ue : 0, k, W), q = (pe = p.flex) != null ? pe : 1, wt = q * Ee(c, k, W), G = {
      name: p.name,
      type: (ge = p.type) != null ? ge : "",
      setting: p,
      left: 0,
      flex: q,
      realWidth: D,
      flexWidth: wt,
      visible: !0,
      index: w++
    };
    p.fixed === "left" ? (G.left = f, f += D, l.push(G)) : p.fixed === "right" ? (G.left = g, g += D, m.push(G)) : u.push(G), s.forEach((_e) => {
      var me, be, ye;
      const Rt = (be = _e.colTypes) == null ? void 0 : be[(me = p.type) != null ? me : ""];
      if (Rt) {
        const ve = typeof Rt == "function" ? Rt(p) : Rt;
        ve && Object.assign(p, ve);
      }
      (ye = _e.onAddCol) == null || ye.call(this, G);
    });
  });
  let _ = t.width, y = 0;
  if (typeof _ == "function" && (_ = _()), _ === "auto")
    y = f + g, u.forEach((p) => {
      p.realWidth || (p.realWidth = p.flexWidth), y += p.realWidth;
    });
  else if (_ === "100%") {
    const p = (he = this.ref.current) == null ? void 0 : he.parentElement;
    if (p)
      y = p.clientWidth;
    else {
      y = 0, S(this, K, !0);
      return;
    }
  } else
    y = _ != null ? _ : 0;
  const { data: x, rowKey: $ = "id" } = t, R = [], U = (p, k, W) => {
    var q, wt;
    const D = { data: W != null ? W : { [$]: p }, top: R.length * r, id: p, index: R.length };
    if (W || (D.lazy = !0), R.push(D), ((q = t.onAddRow) == null ? void 0 : q.call(this, D, k)) !== !1) {
      for (const G of s)
        if (((wt = G.onAddRow) == null ? void 0 : wt.call(this, D, k)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let p = 0; p < x; p++)
      U(p, p);
  else
    Array.isArray(x) && x.forEach((p, k) => {
      typeof p == "object" ? U(p[$], k, p) : U(p, k);
    });
  let M = !1, z = R;
  if (t.onAddRows) {
    const p = t.onAddRows.call(this, z);
    p && (z = p, M = !0);
  }
  for (const p of s) {
    const k = (de = p.onAddRows) == null ? void 0 : de.call(this, z);
    k && (z = k, M = !0);
  }
  M && z.forEach((p, k) => {
    p.index = k;
  });
  const qt = o ? t.headerHeight || r : 0, Gt = i ? t.footerHeight || r : 0;
  let B = t.height, J = 0;
  const le = z.length * r, Kt = qt + Gt + le;
  if (typeof B == "function" && (B = B(Kt)), B === "auto")
    J = Kt;
  else if (typeof B == "object")
    J = Math.min(B.max, Math.max(B.min, Kt));
  else if (B === "100%") {
    const p = (fe = this.ref.current) == null ? void 0 : fe.parentElement;
    if (p)
      J = p.clientHeight;
    else {
      J = 0, S(this, K, !0);
      return;
    }
  } else
    J = B;
  const gn = J - qt - Gt, ce = y - f - g;
  let vt = 0;
  const Yt = [];
  let ae = 0;
  if (u.forEach((p) => {
    p.realWidth ? vt += p.realWidth : (Yt.push(p), ae += p.flex);
  }), Yt.length) {
    const p = Math.max(0, ce - vt);
    Yt.forEach((k) => {
      var q;
      const { minWidth: W = a, maxWidth: D = d } = k.setting;
      k.realWidth = Math.min(D, Math.max(W, Math.ceil(p * ((q = k.flex) != null ? q : 1) / ae))), vt += k.realWidth;
    });
  }
  let dt = {
    allRows: R,
    width: y,
    height: J,
    rows: z,
    rowHeight: r,
    rowsHeight: gn,
    rowsHeightTotal: le,
    header: o,
    footer: i,
    headerHeight: qt,
    footerHeight: Gt,
    colsInfo: {
      fixedLeftCols: l,
      fixedRightCols: m,
      scrollCols: u,
      flexLeftWidth: f,
      scrollWidth: ce,
      scrollWidthTotal: vt,
      flexRightWidth: g
    }
  };
  if (t.onLayout) {
    const p = t.onLayout.call(this, dt);
    p && (dt = p);
  }
  s.forEach((p) => {
    if (p.onLayout) {
      const k = p.onLayout.call(this, dt);
      k && (dt = k);
    }
  }), S(this, O, dt);
}, Ot = new WeakSet(), Qe = function() {
  (N(this, jt, Je).call(this) || !h(this, O)) && N(this, Bt, Ze).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollTop: s, scrollLeft: o } = this.state;
  const { rowsHeightTotal: i, rowsHeight: r, rows: c, rowHeight: a, colsInfo: { scrollCols: d, scrollWidth: l } } = t;
  s = Math.min(Math.max(0, i - r), s);
  const m = s + r;
  let u = 0;
  d.forEach((_) => {
    _.left = u, u += _.realWidth, _.visible = _.left + _.realWidth >= o && _.left <= o + l;
  }), o = Math.min(Math.max(0, u - l), o);
  const f = Math.floor(s / a), g = Math.min(c.length, Math.ceil(m / a)), w = [];
  for (let _ = f; _ < g; _++) {
    const y = c[_];
    y.top = y.index * a - s, w.push(y);
  }
  return t.visibleRows = w, t.scrollTop = s, t.scrollLeft = o, t;
}, E(Zt, "addPlugin", Ue), E(Zt, "removePlugin", qe);
function Me(e, n) {
  n !== void 0 ? e.setCache("hoverCol", n) : n = e.getCache("hoverCol");
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((o) => o.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((o) => o.classList.add(s));
}
const tn = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
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
      Me(this, s);
    },
    mouseleave() {
      Me(this, !1);
    }
  }
};
st(tn, { buildIn: !0 });
function Pn(e, n) {
  var r, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (a, d) => {
    o && !o.call(this, a) || !!t[a] === d || (d ? t[a] = !0 : delete t[a], s[a] = d);
  };
  if (e === void 0 ? (n === void 0 && (n = !en.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    i(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    i(a, n != null ? n : !t[a]);
  })), Object.keys(s).length) {
    const a = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, s, t);
    a && Object.keys(a).forEach((d) => {
      a[d] ? t[d] = !0 : delete t[d];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, s);
    });
  }
  return s;
}
function In(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function en() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function jn() {
  return Object.keys(this.state.checkedRows);
}
const nn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = Pn.bind(this), this.isRowChecked = In.bind(this), this.isAllRowChecked = en.bind(this), this.getChecks = jn.bind(this);
  },
  onRenderCell(e, { rowID: n, col: t }) {
    var r, c;
    const { canRowCheckable: s } = this.options;
    if (s && !s.call(this, n))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, n) : o) {
      const a = this.isRowChecked(n), d = (c = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, n)) != null ? c : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { rowID: n, col: t }) {
    var i, r;
    const { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const c = this.isAllRowChecked(), a = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, c, n)) != null ? r : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(a), e.push({ className: "has-checkbox" });
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
st(nn);
function te(e) {
  const n = this.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = te.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? te.call(this, n.parent).level + 1 : 0, n;
}
function Bn(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  if (e === "HEADER")
    if (n === void 0 && (n = !sn.call(this)), n) {
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
function sn() {
  const e = this.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function on(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = on(e, n, r.children, s + 1)));
  }
  return n;
}
function rn(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, rn(e, i, t, s);
  }), o;
}
function ln(e, n, t, s, o) {
  var c;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((c = i.children) == null ? void 0 : c.every((a) => {
    const d = !!(s[a] !== void 0 ? s[a] : o[a]);
    return t === d;
  })) && (s[n] = t), i.parent && ln(e, i.parent, t, s, o);
}
const cn = {
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
        const r = rn(this, o, i, s);
        r != null && r.parent && ln(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = Bn.bind(this), this.isAllCollapsed = sn.bind(this), this.getNestedRowInfo = te.bind(this);
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
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), on(this.nestedMap), e.sort((n, t) => {
      var r, c;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((c = o.order) != null ? c : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { rowID: n, col: t, rowData: s }) {
    var r, c, a;
    const { nestedToggle: o } = t.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && e.unshift((c = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, t, s)) != null ? c : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: d = o } = t.setting;
      d && (d === !0 && (d = (a = this.options.nestedIndent) != null ? a : 12), e.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: d * i.level + "px" }
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
st(cn);
const j = 24 * 60 * 60 * 1e3, L = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ht = (e, n = new Date()) => (e = L(e), n = L(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ee = (e, n = new Date()) => L(e).getFullYear() === L(n).getFullYear(), an = (e, n = new Date()) => (e = L(e), n = L(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), On = (e, n = new Date()) => {
  e = L(e), n = L(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Fn = (e, n) => ht(L(n), e), Un = (e, n) => ht(L(n).getTime() - j, e), qn = (e, n) => ht(L(n).getTime() + j, e), Gn = (e, n) => ht(L(n).getTime() - 2 * j, e), Ht = (e, n = "yyyy-MM-dd hh:mm") => {
  e = L(e);
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
}, Kn = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Ht(e, ee(e) ? s.month : s.full);
  if (ht(e, n))
    return o;
  const i = Ht(n, ee(e, n) ? an(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, Yn = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - j * 7;
    case "oneMonth":
      return n - j * 31;
    case "threeMonth":
      return n - j * 31 * 3;
    case "halfYear":
      return n - j * 183;
    case "oneYear":
      return n - j * 365;
    case "twoYear":
      return n - 2 * (j * 365);
    default:
      return 0;
  }
}, ne = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, ne(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, ne(e, "day", t, s);
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
const hn = {
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = ft(s, t);
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
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-green-500)" } = n.setting, r = (t - s) / 2, c = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ b("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r,
          "stroke-width": s,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
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
        }), /* @__PURE__ */ b("text", {
          x: c,
          y: c + s,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${r}px` }
        }, Math.round(a))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, rowData: t }) {
        const s = t == null ? void 0 : t[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((c) => {
            typeof c == "string" && (c = { action: c });
            const a = i[c.action];
            return a && (c = { className: r, ...a, ...c }), ft(o, c);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Ht(i, s) : o === "html" ? e[0] = { html: ft(s, i) } : e[0] = ft(s, i), e;
      }
    }
  }
};
st(hn);
const dn = {
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
      let c = this.headerGroups.get(r);
      c ? c.cols.push(o.name) : (c = { cols: [o.name], index: i }, this.headerGroups.set(r, c)), s[o.name] = c.index + c.cols.length / t.length;
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
        const i = s.cols.reduce((c, a) => {
          var d, l;
          return c + ((l = (d = this.getColInfo(a)) == null ? void 0 : d.realWidth) != null ? l : 0);
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
st(dn);
function fn(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
function Vn(e) {
  var t, s;
  const n = fn(this, e);
  if (!(!e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1))
    return this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function Xn(e) {
  var o, i;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, t, s);
}
function Jn(e) {
  var o;
  const n = fn(this, e), { draggingRow: t } = this.state;
  if (!n || !t || n.id === t.id)
    return;
  const s = t.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, t, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function Zn(e) {
  return e.preventDefault(), !0;
}
function Qn(e) {
  var o;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  if (n && t && s && n.id !== t.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((u) => r.call(this, u)));
    const c = i.findIndex((u) => u.id === n.id), a = i.findIndex((u) => u.id === t.id), d = i.splice(c, 1);
    i.splice(a, 0, d[0]);
    const l = {}, m = [];
    i.forEach(({ id: u }, f) => {
      l[u] = f, m.push(u);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, t, s, m);
  }
}
const un = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  onCreate() {
    this.onSortDragStart = Vn.bind(this), this.onSortDragEnd = Xn.bind(this), this.onSortDragEnter = Jn.bind(this), this.onSortDragOver = Zn.bind(this), this.onSortDrop = Qn.bind(this);
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
    var a;
    const { draggingRow: t, droppingRow: s } = this.state, o = n.id === (t == null ? void 0 : t.id), i = n.id === (s == null ? void 0 : s.id), r = [e.className, {
      "is-dragging": o,
      "is-dropping": i
    }];
    let c = 0;
    return s && t && (o ? c = s.top - n.top : t.index > n.index && n.index >= s.index ? (r.push("bg-red"), c = this.layout.rowHeight) : t.index < n.index && n.index <= s.index && (c -= this.layout.rowHeight)), {
      className: r,
      style: { ...e.style, transform: c ? `translateY(${c}px)` : void 0 },
      draggable: ((a = this.options.canSort) == null ? void 0 : a.call(this, n)) !== !1
    };
  }
};
st(un);
const ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: tn,
  checkable: nn,
  nested: cn,
  rich: hn,
  headerGroup: dn,
  sortable: un
}, Symbol.toStringTag, { value: "Module" }));
var bt;
class St {
  constructor(n, t) {
    E(this, "element");
    E(this, "options");
    v(this, bt, Ne());
    var s;
    this.element = n, this.options = { ...Jt(), ...t }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return h(this, bt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Rn(/* @__PURE__ */ b(Zt, {
      ref: h(this, bt),
      ...this.options
    }), this.element);
  }
}
bt = new WeakMap(), E(St, "NAME", "zui.dtable"), E(St, "definePlugin", st), E(St, "removePlugin", qe), E(St, "plugins", ts);
var yt, V, P, lt, ct, xt;
const re = class {
  constructor(n, t = "local") {
    v(this, ct);
    v(this, yt, void 0);
    v(this, V, void 0);
    v(this, P, void 0);
    v(this, lt, void 0);
    S(this, yt, t), S(this, V, `ZUI_STORE:${n != null ? n : Oe()}`), S(this, P, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, yt);
  }
  get session() {
    return this.type === "session" ? this : (h(this, lt) || S(this, lt, new re(h(this, V), "session")), h(this, lt));
  }
  get(n, t) {
    const s = h(this, P).getItem(N(this, ct, xt).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    h(this, P).setItem(N(this, ct, xt).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    h(this, P).removeItem(N(this, ct, xt).call(this, n));
  }
  each(n) {
    for (let t = 0; t < h(this, P).length; t++) {
      const s = h(this, P).key(t);
      if (s != null && s.startsWith(h(this, V))) {
        const o = h(this, P).getItem(s);
        typeof o == "string" && n(s.substring(h(this, V).length + 1), JSON.parse(o));
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
let Lt = re;
yt = new WeakMap(), V = new WeakMap(), P = new WeakMap(), lt = new WeakMap(), ct = new WeakSet(), xt = function(n) {
  return `${h(this, V)}:${n}`;
};
const es = new Lt("DEFAULT");
function ns(e, n = "local") {
  return new Lt(e, n);
}
Object.assign(es, { create: ns });
function ss() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function os() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function is(e, n) {
  ss(), e.classList.add("block"), $e(e, n), e.onclick = (t) => rs(t, e), window.addEventListener("resize", () => {
    $e(e, n);
  });
}
function pn(e) {
  var n;
  os(), (n = e.classList) == null || n.remove("block");
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
function rs(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), pn(n));
}
function ls(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = ls(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    is(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && pn(n);
});
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: j,
  createDate: L,
  isSameDay: ht,
  isSameYear: ee,
  isSameMonth: an,
  isSameWeek: On,
  isToday: Fn,
  isYesterday: Un,
  isTomorrow: qn,
  isDBY: Gn,
  formatDate: Ht,
  formatDateSpan: Kn,
  getTimeBeforeDesc: Yn,
  calculateTimestamp: ne,
  formatString: ft,
  formatBytes: xn,
  convertBytes: Cn
}, Symbol.toStringTag, { value: "Module" }));
var I, T;
class cs {
  constructor(n) {
    v(this, I, void 0);
    v(this, T, void 0);
    S(this, I, n), S(this, T, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, I).parentElement.parentElement, h(this, I).parentElement), this.addActive(h(this, T).parentElement, h(this, T)), h(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    S(this, T, h(this, I)), this.addActive(h(this, T).parentElement, h(this, T)), S(this, I, document.querySelector(`[href='#${h(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, T).getAttribute("id")}']`)), this.addActive(h(this, I).parentElement.parentElement, h(this, I).parentElement);
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
I = new WeakMap(), T = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new cs(e.target).showTarget());
});
export {
  hs as Avatar,
  St as DTable,
  cs as NavTabs,
  Ce as Scrollbar,
  ds as browser,
  ts as dtablePlugins,
  fs as helpers,
  es as store
};
