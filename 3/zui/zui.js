var _n = Object.defineProperty;
var mn = (e, n, t) => n in e ? _n(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var E = (e, n, t) => (mn(e, typeof n != "symbol" ? n + "" : n, t), t), Vt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var d = (e, n, t) => (Vt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), v = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, R = (e, n, t, s) => (Vt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var L = (e, n, t) => (Vt(e, n, "access private method"), t);
var Ut, C, He, ut, we, Ct = {}, Ne = [], bn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
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
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ut.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return xt(e, r, s, o, null);
}
function xt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++He : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Te() {
  return { current: null };
}
function Ft(e) {
  return e.children;
}
function nt(e, n) {
  this.props = e, this.context = n;
}
function ct(e, n) {
  if (n == null)
    return e.__ ? ct(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? ct(e) : null;
}
function ze(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ze(e);
  }
}
function ke(e) {
  (!e.__d && (e.__d = !0) && ut.push(e) && !Et.__r++ || we !== C.debounceRendering) && ((we = C.debounceRendering) || setTimeout)(Et);
}
function Et() {
  for (var e; Et.__r = ut.length; )
    e = ut.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ut = [], e.some(function(n) {
      var t, s, o, i, r, a;
      n.__d && (r = (i = (t = n).__v).__e, (a = t.__P) && (s = [], (o = X({}, i)).__v = i.__v + 1, se(a, i, o, t.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? ct(i) : r, i.__h), Ie(s, i), i.__e != r && ze(i)));
    });
}
function We(e, n, t, s, o, i, r, a, c, h) {
  var l, p, u, f, _, w, m, y = s && s.__k || Ne, x = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? xt(null, f, null, null, f) : Array.isArray(f) ? xt(Ft, { children: f }, null, null, null) : f.__b > 0 ? xt(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (u = y[l]) === null || u && f.key == u.key && f.type === u.type)
        y[l] = void 0;
      else
        for (p = 0; p < x; p++) {
          if ((u = y[p]) && f.key == u.key && f.type === u.type) {
            y[p] = void 0;
            break;
          }
          u = null;
        }
      se(e, f, u = u || Ct, o, i, r, a, c, h), _ = f.__e, (p = f.ref) && u.ref != p && (m || (m = []), u.ref && m.push(u.ref, null, f), m.push(p, f.__c || _, f)), _ != null ? (w == null && (w = _), typeof f.type == "function" && f.__k === u.__k ? f.__d = c = Pe(f, c, e) : c = je(e, f, u, y, _, c), typeof t.type == "function" && (t.__d = c)) : c && u.__e == c && c.parentNode != e && (c = ct(u));
    }
  for (t.__e = w, l = x; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = ct(s, l + 1)), Oe(y[l], y[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      De(m[l], m[++l], m[++l]);
}
function Pe(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? Pe(s, n, t) : je(t, s, s, o, s.__e, n));
  return n;
}
function je(e, n, t, s, o, i) {
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
function yn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Mt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Mt(e, i, n[i], t[i], s);
}
function Re(e, n, t) {
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
            t && n in t || Re(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Re(e.style, n, t[n]);
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
  this.l[e.type + !1](C.event ? C.event(e) : e);
}
function Se(e) {
  this.l[e.type + !0](C.event ? C.event(e) : e);
}
function se(e, n, t, s, o, i, r, a, c) {
  var h, l, p, u, f, _, w, m, y, x, k, N, F, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (h = C.__b) && h(n);
  try {
    t:
      if (typeof M == "function") {
        if (m = n.props, y = (h = M.contextType) && s[h.__c], x = h ? y ? y.props.value : h.__ : s, t.__c ? w = (l = n.__c = t.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(m, x) : (n.__c = l = new nt(m, x), l.constructor = M, l.render = wn), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = x, l.__n = s, p = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, M.getDerivedStateFromProps(m, l.__s))), u = l.props, f = l.state, p)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && m !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, x), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, x) === !1 || n.__v === t.__v) {
            l.props = m, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(z) {
              z && (z.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, x), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, _);
          });
        }
        if (l.context = x, l.props = m, l.__v = n, l.__P = e, k = C.__r, N = 0, "prototype" in M && M.prototype.render)
          l.state = l.__s, l.__d = !1, k && k(n), h = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, k && k(n), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++N < 25);
        l.state = l.__s, l.getChildContext != null && (s = X(X({}, s), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(u, f)), F = h != null && h.type === Ft && h.key == null ? h.props.children : h, We(e, Array.isArray(F) ? F : [F], n, t, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), w && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = vn(t.__e, n, t, s, o, i, r, c);
    (h = C.diffed) && h(n);
  } catch (z) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), C.__e(z, n, t);
  }
}
function Ie(e, n) {
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
function vn(e, n, t, s, o, i, r, a) {
  var c, h, l, p = t.props, u = n.props, f = n.type, _ = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((c = i[_]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        e = c, i[_] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), i = null, a = !1;
  }
  if (f === null)
    p === u || a && e.data === u || (e.data = u);
  else {
    if (i = i && Ut.call(e.childNodes), h = (p = t.props || Ct).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (yn(e, u, p, o, a), l)
      n.__k = [];
    else if (_ = n.props.children, We(e, Array.isArray(_) ? _ : [_], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && ct(t, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && Le(i[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || f === "progress" && !_ || f === "option" && _ !== p.value) && Mt(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Mt(e, "checked", _, p.checked, !1));
  }
  return e;
}
function De(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    C.__e(s, t);
  }
}
function Oe(e, n, t) {
  var s, o;
  if (C.unmount && C.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || De(s, null, n)), (s = e.__c) != null) {
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
      s[o] && Oe(s[o], n, typeof e.type != "function");
  t || e.__e == null || Le(e.__e), e.__e = e.__d = void 0;
}
function wn(e, n, t) {
  return this.constructor(e, t);
}
function kn(e, n, t) {
  var s, o, i;
  C.__ && C.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], se(n, e = (!s && t || n).__k = b(Ft, null, [e]), o || Ct, Ct, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Ut.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Ie(i, e);
}
Ut = Ne.slice, C = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, He = 0, nt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, t), this.props)), e && X(t, e), e != null && this.__v && (n && this.__h.push(n), ke(this));
}, nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ke(this));
}, nt.prototype.render = Ft, ut = [], Et.__r = 0;
const A = (...e) => e.map((n) => Array.isArray(n) ? A(...n) : typeof n == "function" ? A(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class os extends nt {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, h = [s], l = { ...o };
    let p = null;
    return i ? p = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : p = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && h.push(`avatar-${n}`), typeof t == "string" && h.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: A(h),
      style: l,
      ...c
    }, p, a);
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
class xn extends HTMLElement {
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
customElements.get("zui-button") || customElements.define("zui-button", xn);
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
      s && (d(this, Z) && cancelAnimationFrame(d(this, Z)), R(this, Z, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), R(this, Z, 0);
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
    t && (R(this, Q, typeof t == "string" ? document : t.current), d(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Q) && d(this, Q).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: p, scrollPos: u } = this, { dragStart: f } = this.state, _ = {
      left: a,
      top: c,
      bottom: h,
      right: l,
      ...r
    }, w = {};
    return s === "horz" ? (_.height = o, _.width = t, w.width = this.barSize, w.left = Math.round(Math.min(p, u) * (t - w.width) / p)) : (_.width = o, _.height = t, w.height = this.barSize, w.top = Math.round(Math.min(p, u) * (t - w.height) / p)), /* @__PURE__ */ b("div", {
      className: A("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": f
      }),
      style: _,
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
function Sn(e, n = 2, t = "") {
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
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: En,
  domReady: Mn,
  isElementVisible: $n,
  classes: A
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
let Ue = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Ee(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ie({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, outerStyle: a, children: c, ...h }) {
  const l = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...a
  }, { align: p, border: u } = e.setting, f = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...r
  }, _ = ["dtable-cell", n, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], w = ["dtable-cell-content"];
  let m = [
    c != null ? c : o == null ? void 0 : o[e.name]
  ];
  i && (m = i(m, { rowID: s, col: e, rowData: o }, b));
  const y = [], x = [];
  return m == null || m.forEach((k) => {
    if (typeof k == "object" && k && ("html" in k || "className" in k || "style" in k)) {
      const N = k.outer ? y : x;
      k.html ? N.push(/* @__PURE__ */ b("div", {
        className: A("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html }
      })) : (k.style && Object.assign(k.outer ? l : f, k.style), k.className && (k.outer ? _ : w).push(k.className), k.children && N.push(k.children));
    } else
      x.push(k);
  }), /* @__PURE__ */ b("div", {
    className: A(_),
    style: l,
    "data-col": e.name,
    ...h
  }, x.length > 0 && /* @__PURE__ */ b("div", {
    className: A(w),
    style: f
  }, x), y);
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
function Xt({ rowID: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = ie, onRenderCell: h }) {
  return /* @__PURE__ */ b("div", {
    className: A("dtable-cells", n),
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
  scrollLeft: p,
  CellComponent: u = ie,
  onRenderCell: f,
  data: _,
  style: w,
  ...m
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: _
  }));
  let x = null;
  r != null && r.length && (x = /* @__PURE__ */ b(Xt, {
    className: "dtable-flexable",
    cols: r,
    left: a - p,
    width: h,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: _
  }));
  let k = null;
  i != null && i.length && (k = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: e,
    CellComponent: u,
    onRenderCell: f,
    data: _
  }));
  const N = { top: t, height: s, lineHeight: `${s - 2}px`, ...w };
  return /* @__PURE__ */ b("div", {
    className: A("dtable-row", n),
    style: N,
    "data-id": e,
    ...m
  }, y, x, k);
}
function Nn({ height: e, onRenderRow: n, ...t }) {
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
    className: A("dtable-rows", e),
    style: n
  }, s.map((c) => {
    const h = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    }, l = r == null ? void 0 : r({ props: h, row: c }, b);
    return l && Object.assign(h, l), /* @__PURE__ */ b(Fe, {
      ...h
    });
  }));
}
const $t = /* @__PURE__ */ new Map(), At = [];
function qe(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && $t.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  $t.set(t, e), (n == null ? void 0 : n.buildIn) && !At.includes(t) && At.push(t);
}
function st(e, n) {
  qe(e, n);
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
function Ge(e) {
  return $t.delete(e);
}
function Tn(e) {
  if (typeof e == "string") {
    const n = $t.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ke(e, n, t) {
  return n.forEach((s) => {
    var i;
    if (!s)
      return;
    const o = Tn(s);
    !o || t.has(o.name) || (e.push(o), t.add(o.name), (i = o.plugins) != null && i.length && Ke(e, o.plugins, t));
  }), e;
}
function zn(e = [], n = !0) {
  return n && At.length && e.unshift(...At), e != null && e.length ? Ke([], e, /* @__PURE__ */ new Set()) : [];
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
var tt, ot, K, Y, et, $, B, U, it, rt, Lt, Ye, Tt, Ve, zt, Xe, Wt, Je, pt, gt, Qt, Pt, jt, _t, mt, It, Dt, Ze, Ot, Qe, Bt, tn;
class Zt extends nt {
  constructor(t) {
    super(t);
    v(this, Lt);
    v(this, Tt);
    v(this, zt);
    v(this, Wt);
    v(this, gt);
    v(this, Dt);
    v(this, Ot);
    v(this, Bt);
    E(this, "ref", Te());
    v(this, tt, 0);
    v(this, ot, void 0);
    v(this, K, !1);
    v(this, Y, void 0);
    v(this, et, void 0);
    v(this, $, []);
    v(this, B, void 0);
    v(this, U, /* @__PURE__ */ new Map());
    v(this, it, {});
    v(this, rt, (t) => {
      const { type: s } = t, o = d(this, U).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation();
            break;
          }
      }
    });
    v(this, pt, () => {
      d(this, tt) && cancelAnimationFrame(d(this, tt)), R(this, tt, requestAnimationFrame(() => {
        R(this, B, void 0), this.forceUpdate(), R(this, tt, 0);
      }));
    });
    v(this, Pt, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return d(this, $).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    v(this, jt, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), d(this, $).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    v(this, _t, (t, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (t = r.setting[a].call(this, t, s, o)), this.options[a] && (t = this.options[a].call(this, t, s, o)), d(this, $).forEach((c) => {
        c[a] && (t = c[a].call(this, t, s, o));
      }), t;
    });
    v(this, mt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    v(this, It, (t) => {
      var c, h, l, p, u, f, _;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (h = o.getAttribute("data-id")) != null ? h : "";
      if (a === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), d(this, $).forEach((w) => {
          var m;
          (m = w.onHeaderCellClick) == null || m.call(this, t, { colName: r, element: i });
        }));
      else {
        const w = this.layout.visibleRows.find((m) => m.id === a);
        if (i) {
          if (((p = this.options.onCellClick) == null ? void 0 : p.call(this, t, { colName: r, rowID: a, rowInfo: w, element: i, rowElement: o })) === !0)
            return;
          for (const m of d(this, $))
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: a, rowInfo: w, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: a, rowInfo: w, element: o })) === !0)
          return;
        for (const m of d(this, $))
          if (((_ = m.onRowClick) == null ? void 0 : _.call(this, t, { rowID: a, rowInfo: w, element: o })) === !0)
            return;
      }
    });
    R(this, ot, `dtable-${Ue(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, et, Object.freeze(zn(t.plugins))), d(this, et).forEach((s) => {
      var a;
      const { methods: o, data: i, state: r } = s;
      o && Object.entries(o).forEach(([c, h]) => {
        typeof h == "function" && Object.assign(this, { [c]: h.bind(this) });
      }), i && Object.assign(d(this, it), i), r && Object.assign(this.state, r), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return (t = d(this, Y)) != null ? t : Jt();
  }
  get plugins() {
    return d(this, $);
  }
  get layout() {
    return d(this, B);
  }
  get id() {
    return d(this, ot);
  }
  get data() {
    return d(this, it);
  }
  componentWillReceiveProps() {
    R(this, Y, void 0);
  }
  componentDidMount() {
    d(this, K) ? this.forceUpdate() : L(this, gt, Qt).call(this), d(this, $).forEach((t) => {
      const { events: s } = t;
      !s || Object.entries(s).forEach(([o, i]) => {
        this.on(o, i);
      });
    }), this.on("click", d(this, It)), this.options.responsive && window.addEventListener("resize", d(this, pt)), d(this, $).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    d(this, K) ? L(this, gt, Qt).call(this) : d(this, $).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    if (t)
      for (const s of d(this, U).keys())
        t.removeEventListener(s, d(this, rt));
    window.removeEventListener("resize", d(this, pt)), d(this, $).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), R(this, it, {});
  }
  on(t, s) {
    var i;
    const o = d(this, U).get(t);
    o ? o.push(s) : (d(this, U).set(t, [s]), (i = this.ref.current) == null || i.addEventListener(t, d(this, rt)));
  }
  off(t, s) {
    var r;
    const o = d(this, U).get(t);
    if (!o)
      return;
    const i = o.indexOf(s);
    i >= 0 && o.splice(i, 1), o.length || (d(this, U).delete(t), (r = this.ref.current) == null || r.removeEventListener(t, d(this, rt)));
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
    s === "layout" ? R(this, B, void 0) : s === "options" && (R(this, B, void 0), R(this, Y, void 0)), this.forceUpdate();
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s)
      return;
    const o = s.closest(".dtable-cell");
    if (!o)
      return;
    const i = o.closest(".dtable-row");
    if (!i)
      return;
    const r = o == null ? void 0 : o.getAttribute("data-col"), a = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof r != "string" || typeof a != "string"))
      return {
        cellElement: o,
        rowElement: i,
        colName: r,
        rowID: a,
        target: s
      };
  }
  render() {
    var p;
    const t = L(this, Bt, tn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: h } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ b("div", {
      id: d(this, ot),
      className: A("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((p = t == null ? void 0 : t.scrollTop) != null ? p : 0) > 0,
        "scrollbar-hover": h
      }),
      style: l,
      ref: this.ref
    }, t && L(this, Lt, Ye).call(this, t), t && L(this, Tt, Ve).call(this, t), t && L(this, zt, Xe).call(this, t), t && L(this, Wt, Je).call(this, t));
  }
}
tt = new WeakMap(), ot = new WeakMap(), K = new WeakMap(), Y = new WeakMap(), et = new WeakMap(), $ = new WeakMap(), B = new WeakMap(), U = new WeakMap(), it = new WeakMap(), rt = new WeakMap(), Lt = new WeakSet(), Ye = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Nn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: d(this, _t),
      onRenderRow: d(this, jt),
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
}, Tt = new WeakSet(), Ve = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = t;
  return /* @__PURE__ */ b(Ln, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: d(this, _t),
    onRenderRow: d(this, Pt),
    ...a
  });
}, zt = new WeakSet(), Xe = function(t) {
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
}, Wt = new WeakSet(), Je = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: h, scrollWidth: l } = i, { scrollbarSize: p = 12, horzScrollbarPos: u } = this.props;
  return h > l && s.push(/* @__PURE__ */ b(Ce, {
    key: "horz",
    type: "horz",
    scrollPos: o,
    scrollSize: h,
    clientSize: l,
    onScroll: d(this, mt),
    left: i.flexLeftWidth,
    bottom: u === "inside" ? 0 : -p,
    size: p,
    wheelContainer: this.ref
  })), c > a && s.push(/* @__PURE__ */ b(Ce, {
    key: "vert",
    type: "vert",
    scrollPos: r,
    scrollSize: c,
    clientSize: a,
    onScroll: d(this, mt),
    right: 0,
    size: p,
    top: t.headerHeight,
    wheelContainer: this.ref
  })), s.length ? s : null;
}, pt = new WeakMap(), gt = new WeakSet(), Qt = function() {
  var t;
  R(this, K, !1), (t = this.options.afterRender) == null || t.call(this), d(this, $).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Pt = new WeakMap(), jt = new WeakMap(), _t = new WeakMap(), mt = new WeakMap(), It = new WeakMap(), Dt = new WeakSet(), Ze = function() {
  if (d(this, Y))
    return !1;
  const t = Jt(), s = Wn(d(this, et), { ...t, ...this.props }), o = d(this, et).filter((i) => !i.when || i.when(s));
  return R(this, $, Object.freeze(o)), R(this, Y, s), !0;
}, Ot = new WeakSet(), Qe = function() {
  var he, de, fe;
  const { options: t, plugins: s } = this;
  s.forEach((g) => {
    var W;
    const S = (W = g.beforeLayout) == null ? void 0 : W.call(this, t);
    S && Object.assign(t, S);
  });
  const {
    header: o,
    footer: i,
    rowHeight: r,
    defaultColWidth: a,
    minColWidth: c,
    maxColWidth: h
  } = t, l = [], p = [], u = [];
  let f = 0, _ = 0, w = 0;
  t.cols.forEach((g) => {
    var ue, pe, ge;
    if (g.hidden)
      return;
    g = { ...g };
    const { minWidth: S = c, maxWidth: W = h } = g, P = Ee((ue = g.width) != null ? ue : 0, S, W), q = (pe = g.flex) != null ? pe : 1, wt = q * Ee(a, S, W), G = {
      name: g.name,
      type: (ge = g.type) != null ? ge : "",
      setting: g,
      left: 0,
      flex: q,
      realWidth: P,
      flexWidth: wt,
      visible: !0,
      index: w++
    };
    g.fixed === "left" ? (G.left = f, f += P, l.push(G)) : g.fixed === "right" ? (G.left = _, _ += P, p.push(G)) : u.push(G), s.forEach((_e) => {
      var me, be, ye;
      const kt = (be = _e.colTypes) == null ? void 0 : be[(me = g.type) != null ? me : ""];
      if (kt) {
        const ve = typeof kt == "function" ? kt(g) : kt;
        ve && Object.assign(g, ve);
      }
      (ye = _e.onAddCol) == null || ye.call(this, G);
    });
  });
  let m = t.width, y = 0;
  if (typeof m == "function" && (m = m()), m === "auto")
    y = f + _, u.forEach((g) => {
      g.realWidth || (g.realWidth = g.flexWidth), y += g.realWidth;
    });
  else if (m === "100%") {
    const g = (he = this.ref.current) == null ? void 0 : he.parentElement;
    if (g)
      y = g.clientWidth;
    else {
      y = 0, R(this, K, !0);
      return;
    }
  } else
    y = m != null ? m : 0;
  const { data: x, rowKey: k = "id" } = t, N = [], F = (g, S, W) => {
    var q, wt;
    const P = { data: W != null ? W : { [k]: g }, top: N.length * r, id: g, index: N.length };
    if (W || (P.lazy = !0), N.push(P), ((q = t.onAddRow) == null ? void 0 : q.call(this, P, S)) !== !1) {
      for (const G of s)
        if (((wt = G.onAddRow) == null ? void 0 : wt.call(this, P, S)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let g = 0; g < x; g++)
      F(g, g);
  else
    Array.isArray(x) && x.forEach((g, S) => {
      typeof g == "object" ? F(g[k], S, g) : F(g, S);
    });
  let M = !1, z = N;
  if (t.onAddRows) {
    const g = t.onAddRows.call(this, z);
    g && (z = g, M = !0);
  }
  for (const g of s) {
    const S = (de = g.onAddRows) == null ? void 0 : de.call(this, z);
    S && (z = S, M = !0);
  }
  M && z.forEach((g, S) => {
    g.index = S;
  });
  const qt = o ? t.headerHeight || r : 0, Gt = i ? t.footerHeight || r : 0;
  let O = t.height, J = 0;
  const le = z.length * r, Kt = qt + Gt + le;
  if (typeof O == "function" && (O = O(Kt)), O === "auto")
    J = Kt;
  else if (typeof O == "object")
    J = Math.min(O.max, Math.max(O.min, Kt));
  else if (O === "100%") {
    const g = (fe = this.ref.current) == null ? void 0 : fe.parentElement;
    if (g)
      J = g.clientHeight;
    else {
      J = 0, R(this, K, !0);
      return;
    }
  } else
    J = O;
  const gn = J - qt - Gt, ae = y - f - _;
  let vt = 0;
  const Yt = [];
  let ce = 0;
  if (u.forEach((g) => {
    g.realWidth ? vt += g.realWidth : (Yt.push(g), ce += g.flex);
  }), Yt.length) {
    const g = Math.max(0, ae - vt);
    Yt.forEach((S) => {
      var q;
      const { minWidth: W = c, maxWidth: P = h } = S.setting;
      S.realWidth = Math.min(P, Math.max(W, Math.ceil(g * ((q = S.flex) != null ? q : 1) / ce))), vt += S.realWidth;
    });
  }
  const dt = {
    allRows: N,
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
      fixedRightCols: p,
      scrollCols: u,
      flexLeftWidth: f,
      scrollWidth: ae,
      scrollWidthTotal: vt,
      flexRightWidth: _
    }
  };
  if (t.onLayout) {
    const g = t.onLayout.call(this, dt);
    g && Object.assign(dt, g);
  }
  s.forEach((g) => {
    if (g.onLayout) {
      const S = g.onLayout.call(this, dt);
      S && Object.assign(dt, S);
    }
  }), R(this, B, dt);
}, Bt = new WeakSet(), tn = function() {
  (L(this, Dt, Ze).call(this) || !d(this, B)) && L(this, Ot, Qe).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollTop: s, scrollLeft: o } = this.state;
  const { rowsHeightTotal: i, rowsHeight: r, rows: a, rowHeight: c, colsInfo: { scrollCols: h, scrollWidth: l } } = t;
  s = Math.min(Math.max(0, i - r), s);
  const p = s + r;
  let u = 0;
  h.forEach((m) => {
    m.left = u, u += m.realWidth, m.visible = m.left + m.realWidth >= o && m.left <= o + l;
  }), o = Math.min(Math.max(0, u - l), o);
  const f = Math.floor(s / c), _ = Math.min(a.length, Math.ceil(p / c)), w = [];
  for (let m = f; m < _; m++) {
    const y = a[m];
    y.top = y.index * c - s, w.push(y);
  }
  return t.visibleRows = w, t.scrollTop = s, t.scrollLeft = o, t;
}, E(Zt, "addPlugin", qe), E(Zt, "removePlugin", Ge);
function Me(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((o) => o.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((o) => o.classList.add(s));
}
const en = {
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
st(en, { buildIn: !0 });
function Pn(e, n) {
  var r, a;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (c, h) => {
    o && !o.call(this, c) || !!t[c] === h || (h ? t[c] = !0 : delete t[c], s[c] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !nn.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: c }) => {
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
function jn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function nn() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function In() {
  return Object.keys(this.state.checkedRows);
}
const sn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state: {
    checkedRows: {}
  },
  methods: {
    toggleCheckRows: Pn,
    isRowChecked: jn,
    isAllRowChecked: nn,
    getChecks: In
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
      return { className: A(e.className, "is-checked") };
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
st(sn);
function te(e) {
  const n = this.data.nestedMap.get(e);
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
function Dn(e, n) {
  var o;
  let t = (o = this.state.collapsedRows) != null ? o : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !on.call(this)), n) {
      const i = s.entries();
      for (const [r, a] of i)
        a.state === "expanded" && (t[r] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[i[0]]), i.forEach((r) => {
      const a = s.get(r);
      n && (a == null ? void 0 : a.children) ? t[r] = !0 : delete t[r];
    });
  }
  this.update({ dirtyType: "layout" }), this.setState({ collapsedRows: { ...t } }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function on() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function rn(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = rn(e, n, r.children, s + 1)));
  }
  return n;
}
function ln(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, ln(e, i, t, s);
  }), o;
}
function an(e, n, t, s, o) {
  var a;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((a = i.children) == null ? void 0 : a.every((c) => {
    const h = !!(s[c] !== void 0 ? s[c] : o[c]);
    return t === h;
  })) && (s[n] = t), i.parent && an(e, i.parent, t, s, o);
}
const cn = {
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
        const r = ln(this, o, i, s);
        r != null && r.parent && an(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  data: {
    nestedMap: /* @__PURE__ */ new Map()
  },
  methods: {
    toggleRow: Dn,
    isAllCollapsed: on,
    getNestedRowInfo: te
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var o, i, r;
    const { nestedMap: n } = this.data, t = e.data[(o = this.options.nestedParentKey) != null ? o : "parent"], s = (i = n.get(e.id)) != null ? i : {
      state: "",
      level: 0
    };
    if (s.parent = t, e.data[(r = this.options.asParentKey) != null ? r : "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let a = n.get(t);
      a || (a = {
        state: "",
        level: 0
      }, n.set(t, a)), a.children || (a.children = []), a.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), rn(this.data.nestedMap), e.sort((n, t) => {
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
      className: A(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = A(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
const D = 24 * 60 * 60 * 1e3, H = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ht = (e, n = new Date()) => (e = H(e), n = H(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ee = (e, n = new Date()) => H(e).getFullYear() === H(n).getFullYear(), hn = (e, n = new Date()) => (e = H(e), n = H(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), On = (e, n = new Date()) => {
  e = H(e), n = H(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Bn = (e, n) => ht(H(n), e), Un = (e, n) => ht(H(n).getTime() - D, e), Fn = (e, n) => ht(H(n).getTime() + D, e), qn = (e, n) => ht(H(n).getTime() - 2 * D, e), Ht = (e, n = "yyyy-MM-dd hh:mm") => {
  e = H(e);
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
  }, o = Ht(e, ee(e) ? s.month : s.full);
  if (ht(e, n))
    return o;
  const i = Ht(n, ee(e, n) ? hn(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, Kn = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - D * 7;
    case "oneMonth":
      return n - D * 31;
    case "threeMonth":
      return n - D * 31 * 3;
    case "halfYear":
      return n - D * 183;
    case "oneYear":
      return n - D * 365;
    case "twoYear":
      return n - 2 * (D * 365);
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
const dn = {
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
            return c && (a = { className: r, ...c, ...a }), ft(o, a);
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
st(dn);
const fn = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data: {
    headerGroups: /* @__PURE__ */ new Map()
  },
  when: (e) => !!e.headerGroup,
  beforeLayout(e) {
    const { headerGroups: n } = this.data;
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
      let a = n.get(r);
      a ? a.cols.push(o.name) : (a = { cols: [o.name], index: i }, n.set(r, a)), s[o.name] = a.index + a.cols.length / t.length;
    }), t.sort((o, i) => s[o.name] - s[i.name]), {
      headerHeight: !e.headerHeight && e.rowHeight ? e.rowHeight * 2 : void 0,
      cols: t
    };
  },
  onRenderHeaderCell(e, { col: n }) {
    const { group: t } = n.setting;
    if (t) {
      const s = this.data.headerGroups.get(t), o = this.layout.headerHeight / 2;
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
st(fn);
function $e(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
const un = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  events: {
    dragstart(e) {
      var t, s;
      const n = $e(this, e);
      !e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1 || (this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"));
    },
    dragend() {
      var s, o;
      const { draggingRow: e, droppingRow: n, moveType: t } = this.state;
      this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (s = this.ref.current) == null || s.classList.remove("dtable-sorting"), (o = this.options.onEndSort) == null || o.call(this, e, n, t);
    },
    dragenter(e) {
      var o;
      const n = $e(this, e), { draggingRow: t } = this.state;
      if (!n || !t || n.id === t.id)
        return;
      const s = t.index > n.index ? "before" : "after";
      ((o = this.options.canSortTo) == null ? void 0 : o.call(this, t, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
    },
    dragover(e) {
      e.preventDefault();
    },
    drop() {
      var s;
      const { draggingRow: e, droppingRow: n, moveType: t } = this.state;
      if (e && n && t && e.id !== n.id) {
        let o = [...this.layout.rows];
        const { canSort: i } = this.options;
        i && (o = o.filter((p) => i.call(this, p)));
        const r = o.findIndex((p) => p.id === e.id), a = o.findIndex((p) => p.id === n.id), c = o.splice(r, 1);
        o.splice(a, 0, c[0]);
        const h = {}, l = [];
        o.forEach(({ id: p }, u) => {
          h[p] = u, l.push(p);
        }), this.setState({ rowOrders: h }), (s = this.options.onSort) == null || s.call(this, e, n, t, l);
      }
    }
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
st(un);
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: en,
  checkable: sn,
  nested: cn,
  rich: dn,
  headerGroup: fn,
  sortable: un
}, Symbol.toStringTag, { value: "Module" }));
var bt;
class Rt {
  constructor(n, t) {
    E(this, "element");
    E(this, "options");
    v(this, bt, Te());
    var s;
    this.element = n, this.options = { ...Jt(), ...t }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, bt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), kn(/* @__PURE__ */ b(Zt, {
      ref: d(this, bt),
      ...this.options
    }), this.element);
  }
}
bt = new WeakMap(), E(Rt, "NAME", "zui.dtable"), E(Rt, "definePlugin", st), E(Rt, "removePlugin", Ge), E(Rt, "plugins", Yn);
var yt, V, j, lt, at, St;
const re = class {
  constructor(n, t = "local") {
    v(this, at);
    v(this, yt, void 0);
    v(this, V, void 0);
    v(this, j, void 0);
    v(this, lt, void 0);
    R(this, yt, t), R(this, V, `ZUI_STORE:${n != null ? n : Ue()}`), R(this, j, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, yt);
  }
  get session() {
    return this.type === "session" ? this : (d(this, lt) || R(this, lt, new re(d(this, V), "session")), d(this, lt));
  }
  get(n, t) {
    const s = d(this, j).getItem(L(this, at, St).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, j).setItem(L(this, at, St).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    d(this, j).removeItem(L(this, at, St).call(this, n));
  }
  each(n) {
    for (let t = 0; t < d(this, j).length; t++) {
      const s = d(this, j).key(t);
      if (s != null && s.startsWith(d(this, V))) {
        const o = d(this, j).getItem(s);
        typeof o == "string" && n(s.substring(d(this, V).length + 1), JSON.parse(o));
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
let Nt = re;
yt = new WeakMap(), V = new WeakMap(), j = new WeakMap(), lt = new WeakMap(), at = new WeakSet(), St = function(n) {
  return `${d(this, V)}:${n}`;
};
const Vn = new Nt("DEFAULT");
function Xn(e, n = "local") {
  return new Nt(e, n);
}
Object.assign(Vn, { create: Xn });
function Jn() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Zn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Qn(e, n) {
  Jn(), e.classList.add("block"), Ae(e, n), e.onclick = (t) => ts(t, e), window.addEventListener("resize", () => {
    Ae(e, n);
  });
}
function pn(e) {
  var n;
  Zn(), (n = e.classList) == null || n.remove("block");
}
function Ae(e, n) {
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
function ts(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), pn(n));
}
function es(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = es(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Qn(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && pn(n);
});
const rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: D,
  createDate: H,
  isSameDay: ht,
  isSameYear: ee,
  isSameMonth: hn,
  isSameWeek: On,
  isToday: Bn,
  isYesterday: Un,
  isTomorrow: Fn,
  isDBY: qn,
  formatDate: Ht,
  formatDateSpan: Gn,
  getTimeBeforeDesc: Kn,
  calculateTimestamp: ne,
  formatString: ft,
  formatBytes: Sn,
  convertBytes: Cn
}, Symbol.toStringTag, { value: "Module" }));
var I, T;
class ns {
  constructor(n) {
    v(this, I, void 0);
    v(this, T, void 0);
    R(this, I, n), R(this, T, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, I).parentElement.parentElement, d(this, I).parentElement), this.addActive(d(this, T).parentElement, d(this, T)), d(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, T, d(this, I)), this.addActive(d(this, T).parentElement, d(this, T)), R(this, I, document.querySelector(`[href='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, T).getAttribute("id")}']`)), this.addActive(d(this, I).parentElement.parentElement, d(this, I).parentElement);
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new ns(e.target).showTarget());
});
export {
  os as Avatar,
  Rt as DTable,
  ns as NavTabs,
  Ce as Scrollbar,
  is as browser,
  Yn as dtablePlugins,
  rs as helpers,
  Vn as store
};
