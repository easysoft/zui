var _n = Object.defineProperty;
var mn = (e, n, t) => n in e ? _n(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var M = (e, n, t) => (mn(e, typeof n != "symbol" ? n + "" : n, t), t), Vt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (Vt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), v = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, k = (e, n, t, s) => (Vt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var L = (e, n, t) => (Vt(e, n, "access private method"), t);
var Ft, S, He, ut, we, St = {}, Ne = [], bn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
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
  return xt(e, r, s, o, null);
}
function xt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++He : o };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function Te() {
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
function Re(e) {
  (!e.__d && (e.__d = !0) && ut.push(e) && !Mt.__r++ || we !== S.debounceRendering) && ((we = S.debounceRendering) || setTimeout)(Mt);
}
function Mt() {
  for (var e; Mt.__r = ut.length; )
    e = ut.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ut = [], e.some(function(n) {
      var t, s, o, i, r, c;
      n.__d && (r = (i = (t = n).__v).__e, (c = t.__P) && (s = [], (o = X({}, i)).__v = i.__v + 1, se(c, i, o, t.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? at(i) : r, i.__h), Ie(s, i), i.__e != r && ze(i)));
    });
}
function We(e, n, t, s, o, i, r, c, a, d) {
  var l, u, p, f, _, w, m, y = s && s.__k || Ne, C = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? xt(null, f, null, null, f) : Array.isArray(f) ? xt(Ut, { children: f }, null, null, null) : f.__b > 0 ? xt(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (p = y[l]) === null || p && f.key == p.key && f.type === p.type)
        y[l] = void 0;
      else
        for (u = 0; u < C; u++) {
          if ((p = y[u]) && f.key == p.key && f.type === p.type) {
            y[u] = void 0;
            break;
          }
          p = null;
        }
      se(e, f, p = p || St, o, i, r, c, a, d), _ = f.__e, (u = f.ref) && p.ref != u && (m || (m = []), p.ref && m.push(p.ref, null, f), m.push(u, f.__c || _, f)), _ != null ? (w == null && (w = _), typeof f.type == "function" && f.__k === p.__k ? f.__d = a = Pe(f, a, e) : a = je(e, f, p, y, _, a), typeof t.type == "function" && (t.__d = a)) : a && p.__e == a && a.parentNode != e && (a = at(p));
    }
  for (t.__e = w, l = C; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = at(s, l + 1)), Be(y[l], y[l]));
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
    i === "children" || i === "key" || i in n || Et(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Et(e, i, n[i], t[i], s);
}
function ke(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || bn.test(n) ? t : t + "px";
}
function Et(e, n, t, s, o) {
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
  this.l[e.type + !1](S.event ? S.event(e) : e);
}
function Ce(e) {
  this.l[e.type + !0](S.event ? S.event(e) : e);
}
function se(e, n, t, s, o, i, r, c, a) {
  var d, l, u, p, f, _, w, m, y, C, $, R, U, E = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, i = [c]), (d = S.__b) && d(n);
  try {
    t:
      if (typeof E == "function") {
        if (m = n.props, y = (d = E.contextType) && s[d.__c], C = d ? y ? y.props.value : d.__ : s, t.__c ? w = (l = n.__c = t.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? n.__c = l = new E(m, C) : (n.__c = l = new nt(m, C), l.constructor = E, l.render = wn), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = C, l.__n = s, u = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, E.getDerivedStateFromProps(m, l.__s))), p = l.props, f = l.state, u)
          E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && m !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, C), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, C) === !1 || n.__v === t.__v) {
            l.props = m, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(z) {
              z && (z.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, C), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, f, _);
          });
        }
        if (l.context = C, l.props = m, l.__v = n, l.__P = e, $ = S.__r, R = 0, "prototype" in E && E.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(n), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(n), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++R < 25);
        l.state = l.__s, l.getChildContext != null && (s = X(X({}, s), l.getChildContext())), u || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(p, f)), U = d != null && d.type === Ut && d.key == null ? d.props.children : d, We(e, Array.isArray(U) ? U : [U], n, t, s, o, i, r, c, a), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), w && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = vn(t.__e, n, t, s, o, i, r, a);
    (d = S.diffed) && d(n);
  } catch (z) {
    n.__v = null, (a || i != null) && (n.__e = c, n.__h = !!a, i[i.indexOf(c)] = null), S.__e(z, n, t);
  }
}
function Ie(e, n) {
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
function vn(e, n, t, s, o, i, r, c) {
  var a, d, l, u = t.props, p = n.props, f = n.type, _ = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((a = i[_]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        e = a, i[_] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), i = null, c = !1;
  }
  if (f === null)
    u === p || c && e.data === p || (e.data = p);
  else {
    if (i = i && Ft.call(e.childNodes), d = (u = t.props || St).dangerouslySetInnerHTML, l = p.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (u = {}, _ = 0; _ < e.attributes.length; _++)
          u[e.attributes[_].name] = e.attributes[_].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (yn(e, p, u, o, c), l)
      n.__k = [];
    else if (_ = n.props.children, We(e, Array.isArray(_) ? _ : [_], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && at(t, 0), c), i != null)
      for (_ = i.length; _--; )
        i[_] != null && Le(i[_]);
    c || ("value" in p && (_ = p.value) !== void 0 && (_ !== e.value || f === "progress" && !_ || f === "option" && _ !== u.value) && Et(e, "value", _, u.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== e.checked && Et(e, "checked", _, u.checked, !1));
  }
  return e;
}
function De(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    S.__e(s, t);
  }
}
function Be(e, n, t) {
  var s, o;
  if (S.unmount && S.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || De(s, null, n)), (s = e.__c) != null) {
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
      s[o] && Be(s[o], n, typeof e.type != "function");
  t || e.__e == null || Le(e.__e), e.__e = e.__d = void 0;
}
function wn(e, n, t) {
  return this.constructor(e, t);
}
function Rn(e, n, t) {
  var s, o, i;
  S.__ && S.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], se(n, e = (!s && t || n).__k = b(Ut, null, [e]), o || St, St, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Ft.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Ie(i, e);
}
Ft = Ne.slice, S = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, He = 0, nt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, t), this.props)), e && X(t, e), e != null && this.__v && (n && this.__h.push(n), Re(this));
}, nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Re(this));
}, nt.prototype.render = Ut, ut = [], Mt.__r = 0;
const H = (...e) => e.map((n) => Array.isArray(n) ? H(...n) : typeof n == "function" ? H(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class os extends nt {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, d = [s], l = { ...o };
    let u = null;
    return i ? u = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : u = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && d.push(`avatar-${n}`), typeof t == "string" && d.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: H(d),
      style: l,
      ...a
    }, u, c);
  }
}
const kn = (e) => {
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
    M(this, "$button");
    M(this, "$icon");
    M(this, "onClick");
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
    const t = kn(this);
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
class Se extends nt {
  constructor(t) {
    var s;
    super(t);
    v(this, Z, 0);
    v(this, Q, null);
    M(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (h(this, Z) && cancelAnimationFrame(h(this, Z)), k(this, Z, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), k(this, Z, 0);
      })), t.preventDefault());
    });
    M(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    M(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    M(this, "_handleClick", (t) => {
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
    t && (k(this, Q, typeof t == "string" ? document : t.current), h(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    } = this.props, { maxScrollPos: u, scrollPos: p } = this, { dragStart: f } = this.state, _ = {
      left: c,
      top: a,
      bottom: d,
      right: l,
      ...r
    }, w = {};
    return s === "horz" ? (_.height = o, _.width = t, w.width = this.barSize, w.left = Math.round(Math.min(u, p) * (t - w.width) / u)) : (_.width = o, _.height = t, w.height = this.barSize, w.top = Math.round(Math.min(u, p) * (t - w.height) / u)), /* @__PURE__ */ b("div", {
      className: H("scrollbar", i, {
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
function Cn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / oe[t]).toFixed(n) + t);
}
const Sn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * oe[s];
};
function Mn(e) {
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
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Mn,
  domReady: En,
  isElementVisible: $n,
  classes: H
}, Symbol.toStringTag, { value: "Module" }));
function Oe() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function An(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Oe(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? An(t) : Oe();
});
let Fe = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Me(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ie({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, cellStyle: c, children: a, ...d }) {
  const { cellStyle: l, align: u, className: p, border: f } = e.setting, _ = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...c,
    ...l
  }, w = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...r
  };
  let m = [
    a != null ? a : o == null ? void 0 : o[e.name]
  ];
  i && (m = i(m, { rowID: s, col: e, rowData: o }, b));
  const y = ["dtable-cell", n, p, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], C = ["dtable-cell-content"], $ = [];
  return m == null || m.forEach((R) => {
    typeof R == "object" && R && ("html" in R || "className" in R || "style" in R || "cellClass" in R || "cellStyle" in R) ? (R.html ? $.push(/* @__PURE__ */ b("div", {
      className: H("dtable-cell-html", R.className),
      style: R.style,
      dangerouslySetInnerHTML: { __html: R.html }
    })) : (R.style && Object.assign(w, R.style), R.className && C.push(R.className)), R.cellStyle && Object.assign(_, R.cellStyle), R.cellClass && y.push(R.cellClass)) : $.push(R);
  }), /* @__PURE__ */ b("div", {
    className: H(y),
    style: _,
    "data-col": e.name,
    ...d
  }, /* @__PURE__ */ b("div", {
    className: H(C),
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
function Ue({
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
  scrollLeft: u,
  CellComponent: p = ie,
  onRenderCell: f,
  data: _,
  style: w,
  ...m
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    rowID: e,
    CellComponent: p,
    onRenderCell: f,
    data: _
  }));
  let C = null;
  r != null && r.length && (C = /* @__PURE__ */ b(Xt, {
    className: "dtable-flexable",
    cols: r,
    left: c - u,
    width: d,
    rowID: e,
    CellComponent: p,
    onRenderCell: f,
    data: _
  }));
  let $ = null;
  i != null && i.length && ($ = /* @__PURE__ */ b(Xt, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    rowID: e,
    CellComponent: p,
    onRenderCell: f,
    data: _
  }));
  const R = { top: t, height: s, lineHeight: `${s - 2}px`, ...w };
  return /* @__PURE__ */ b("div", {
    className: H("dtable-row", n),
    style: R,
    "data-id": e,
    ...m
  }, y, C, $);
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
  }, /* @__PURE__ */ b(Ue, {
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
    return /* @__PURE__ */ b(Ue, {
      ...d
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
var tt, ot, K, Y, et, A, O, F, it, rt, Lt, Ye, Tt, Ve, zt, Xe, Wt, Je, pt, gt, Qt, Pt, jt, _t, mt, It, Dt, Ze, Bt, Qe, Ot, tn;
class Zt extends nt {
  constructor(t) {
    super(t);
    v(this, Lt);
    v(this, Tt);
    v(this, zt);
    v(this, Wt);
    v(this, gt);
    v(this, Dt);
    v(this, Bt);
    v(this, Ot);
    M(this, "ref", Te());
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
      h(this, tt) && cancelAnimationFrame(h(this, tt)), k(this, tt, requestAnimationFrame(() => {
        k(this, O, void 0), this.forceUpdate(), k(this, tt, 0);
      }));
    });
    v(this, Pt, (t, s) => {
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
    v(this, jt, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), h(this, A).forEach((o) => {
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
      var a, d, l, u, p, f, _;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (d = o.getAttribute("data-id")) != null ? d : "";
      if (c === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), h(this, A).forEach((w) => {
          var m;
          (m = w.onHeaderCellClick) == null || m.call(this, t, { colName: r, element: i });
        }));
      else {
        const w = this.layout.visibleRows.find((m) => m.id === c);
        if (i) {
          if (((u = this.options.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: c, rowInfo: w, element: i, rowElement: o })) === !0)
            return;
          for (const m of h(this, A))
            if (((p = m.onCellClick) == null ? void 0 : p.call(this, t, { colName: r, rowID: c, rowInfo: w, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: c, rowInfo: w, element: o })) === !0)
          return;
        for (const m of h(this, A))
          if (((_ = m.onRowClick) == null ? void 0 : _.call(this, t, { rowID: c, rowInfo: w, element: o })) === !0)
            return;
      }
    });
    k(this, ot, `dtable-${Fe(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, k(this, et, Object.freeze(zn(t.plugins))), h(this, et).forEach((s) => {
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
  componentWillReceiveProps() {
    k(this, Y, void 0);
  }
  componentDidMount() {
    h(this, K) ? this.forceUpdate() : L(this, gt, Qt).call(this), h(this, A).forEach((t) => {
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
    h(this, K) && L(this, gt, Qt).call(this);
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
    s === "layout" ? k(this, O, void 0) : s === "options" && (k(this, O, void 0), k(this, Y, void 0)), this.forceUpdate();
  }
  getCache(t, s) {
    var o;
    return (o = h(this, it).get(t)) != null ? o : s;
  }
  setCache(t, s) {
    h(this, it).set(t, s);
  }
  render() {
    var u;
    const t = L(this, Ot, tn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: d } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ b("div", {
      id: h(this, ot),
      className: H("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
        "scrollbar-hover": d
      }),
      style: l,
      ref: this.ref
    }, t && L(this, Lt, Ye).call(this, t), t && L(this, Tt, Ve).call(this, t), t && L(this, zt, Xe).call(this, t), t && L(this, Wt, Je).call(this, t));
  }
}
tt = new WeakMap(), ot = new WeakMap(), K = new WeakMap(), Y = new WeakMap(), et = new WeakMap(), A = new WeakMap(), O = new WeakMap(), F = new WeakMap(), it = new WeakMap(), rt = new WeakMap(), Lt = new WeakSet(), Ye = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Nn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: h(this, _t),
      onRenderRow: h(this, jt),
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
}, Tt = new WeakSet(), Ve = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: c } = t;
  return /* @__PURE__ */ b(Ln, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: h(this, _t),
    onRenderRow: h(this, Pt),
    ...c
  });
}, zt = new WeakSet(), Xe = function(t) {
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
}, Wt = new WeakSet(), Je = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = t, { scrollWidthTotal: d, scrollWidth: l } = i, { scrollbarSize: u = 12, horzScrollbarPos: p } = this.props;
  return d > l && s.push(/* @__PURE__ */ b(Se, {
    key: "horz",
    type: "horz",
    scrollPos: o,
    scrollSize: d,
    clientSize: l,
    onScroll: h(this, mt),
    left: i.flexLeftWidth,
    bottom: p === "inside" ? 0 : -u,
    size: u,
    wheelContainer: this.ref
  })), a > c && s.push(/* @__PURE__ */ b(Se, {
    key: "vert",
    type: "vert",
    scrollPos: r,
    scrollSize: a,
    clientSize: c,
    onScroll: h(this, mt),
    right: 0,
    size: u,
    top: t.headerHeight,
    wheelContainer: this.ref
  })), s.length ? s : null;
}, pt = new WeakMap(), gt = new WeakSet(), Qt = function() {
  var t;
  k(this, K, !1), (t = this.options.afterRender) == null || t.call(this), h(this, A).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Pt = new WeakMap(), jt = new WeakMap(), _t = new WeakMap(), mt = new WeakMap(), It = new WeakMap(), Dt = new WeakSet(), Ze = function() {
  if (h(this, Y))
    return !1;
  const t = Jt(), s = Wn(h(this, et), { ...t, ...this.props }), o = h(this, et).filter((i) => !i.when || i.when(s));
  return k(this, A, Object.freeze(o)), k(this, Y, s), !0;
}, Bt = new WeakSet(), Qe = function() {
  var he, de, fe;
  const { options: t, plugins: s } = this;
  s.forEach((g) => {
    var W;
    const x = (W = g.beforeLayout) == null ? void 0 : W.call(this, t);
    x && Object.assign(t, x);
  });
  const {
    header: o,
    footer: i,
    rowHeight: r,
    defaultColWidth: c,
    minColWidth: a,
    maxColWidth: d
  } = t, l = [], u = [], p = [];
  let f = 0, _ = 0, w = 0;
  t.cols.forEach((g) => {
    var ue, pe, ge;
    if (g.hidden)
      return;
    g = { ...g };
    const { minWidth: x = a, maxWidth: W = d } = g, P = Me((ue = g.width) != null ? ue : 0, x, W), q = (pe = g.flex) != null ? pe : 1, wt = q * Me(c, x, W), G = {
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
    g.fixed === "left" ? (G.left = f, f += P, l.push(G)) : g.fixed === "right" ? (G.left = _, _ += P, u.push(G)) : p.push(G), s.forEach((_e) => {
      var me, be, ye;
      const Rt = (be = _e.colTypes) == null ? void 0 : be[(me = g.type) != null ? me : ""];
      if (Rt) {
        const ve = typeof Rt == "function" ? Rt(g) : Rt;
        ve && Object.assign(g, ve);
      }
      (ye = _e.onAddCol) == null || ye.call(this, G);
    });
  });
  let m = t.width, y = 0;
  if (typeof m == "function" && (m = m()), m === "auto")
    y = f + _, p.forEach((g) => {
      g.realWidth || (g.realWidth = g.flexWidth), y += g.realWidth;
    });
  else if (m === "100%") {
    const g = (he = this.ref.current) == null ? void 0 : he.parentElement;
    if (g)
      y = g.clientWidth;
    else {
      y = 0, k(this, K, !0);
      return;
    }
  } else
    y = m != null ? m : 0;
  const { data: C, rowKey: $ = "id" } = t, R = [], U = (g, x, W) => {
    var q, wt;
    const P = { data: W != null ? W : { [$]: g }, top: R.length * r, id: g, index: R.length };
    if (W || (P.lazy = !0), R.push(P), ((q = t.onAddRow) == null ? void 0 : q.call(this, P, x)) !== !1) {
      for (const G of s)
        if (((wt = G.onAddRow) == null ? void 0 : wt.call(this, P, x)) === !1)
          return;
    }
  };
  if (typeof C == "number")
    for (let g = 0; g < C; g++)
      U(g, g);
  else
    Array.isArray(C) && C.forEach((g, x) => {
      typeof g == "object" ? U(g[$], x, g) : U(g, x);
    });
  let E = !1, z = R;
  if (t.onAddRows) {
    const g = t.onAddRows.call(this, z);
    g && (z = g, E = !0);
  }
  for (const g of s) {
    const x = (de = g.onAddRows) == null ? void 0 : de.call(this, z);
    x && (z = x, E = !0);
  }
  E && z.forEach((g, x) => {
    g.index = x;
  });
  const qt = o ? t.headerHeight || r : 0, Gt = i ? t.footerHeight || r : 0;
  let B = t.height, J = 0;
  const le = z.length * r, Kt = qt + Gt + le;
  if (typeof B == "function" && (B = B(Kt)), B === "auto")
    J = Kt;
  else if (typeof B == "object")
    J = Math.min(B.max, Math.max(B.min, Kt));
  else if (B === "100%") {
    const g = (fe = this.ref.current) == null ? void 0 : fe.parentElement;
    if (g)
      J = g.clientHeight;
    else {
      J = 0, k(this, K, !0);
      return;
    }
  } else
    J = B;
  const gn = J - qt - Gt, ce = y - f - _;
  let vt = 0;
  const Yt = [];
  let ae = 0;
  if (p.forEach((g) => {
    g.realWidth ? vt += g.realWidth : (Yt.push(g), ae += g.flex);
  }), Yt.length) {
    const g = Math.max(0, ce - vt);
    Yt.forEach((x) => {
      var q;
      const { minWidth: W = a, maxWidth: P = d } = x.setting;
      x.realWidth = Math.min(P, Math.max(W, Math.ceil(g * ((q = x.flex) != null ? q : 1) / ae))), vt += x.realWidth;
    });
  }
  const dt = {
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
      fixedRightCols: u,
      scrollCols: p,
      flexLeftWidth: f,
      scrollWidth: ce,
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
      const x = g.onLayout.call(this, dt);
      x && Object.assign(dt, x);
    }
  }), k(this, O, dt);
}, Ot = new WeakSet(), tn = function() {
  (L(this, Dt, Ze).call(this) || !h(this, O)) && L(this, Bt, Qe).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollTop: s, scrollLeft: o } = this.state;
  const { rowsHeightTotal: i, rowsHeight: r, rows: c, rowHeight: a, colsInfo: { scrollCols: d, scrollWidth: l } } = t;
  s = Math.min(Math.max(0, i - r), s);
  const u = s + r;
  let p = 0;
  d.forEach((m) => {
    m.left = p, p += m.realWidth, m.visible = m.left + m.realWidth >= o && m.left <= o + l;
  }), o = Math.min(Math.max(0, p - l), o);
  const f = Math.floor(s / a), _ = Math.min(c.length, Math.ceil(u / a)), w = [];
  for (let m = f; m < _; m++) {
    const y = c[m];
    y.top = y.index * a - s, w.push(y);
  }
  return t.visibleRows = w, t.scrollTop = s, t.scrollLeft = o, t;
}, M(Zt, "addPlugin", qe), M(Zt, "removePlugin", Ge);
function Ee(e, n) {
  n !== void 0 ? e.setCache("hoverCol", n) : n = e.getCache("hoverCol");
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
      Ee(this, s);
    },
    mouseleave() {
      Ee(this, !1);
    }
  }
};
st(en, { buildIn: !0 });
function Pn(e, n) {
  var r, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (a, d) => {
    o && !o.call(this, a) || !!t[a] === d || (d ? t[a] = !0 : delete t[a], s[a] = d);
  };
  if (e === void 0 ? (n === void 0 && (n = !nn.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
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
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = Pn.bind(this), this.isRowChecked = jn.bind(this), this.isAllRowChecked = nn.bind(this), this.getChecks = In.bind(this);
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
st(sn);
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
function Dn(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  if (e === "HEADER")
    if (n === void 0 && (n = !on.call(this)), n) {
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
function on() {
  const e = this.nestedMap.values();
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
function cn(e, n, t, s, o) {
  var c;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((c = i.children) == null ? void 0 : c.every((a) => {
    const d = !!(s[a] !== void 0 ? s[a] : o[a]);
    return t === d;
  })) && (s[n] = t), i.parent && cn(e, i.parent, t, s, o);
}
const an = {
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
        const r = ln(this, o, i, s);
        r != null && r.parent && cn(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = Dn.bind(this), this.isAllCollapsed = on.bind(this), this.getNestedRowInfo = te.bind(this);
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
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), rn(this.nestedMap), e.sort((n, t) => {
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
st(an);
const D = 24 * 60 * 60 * 1e3, N = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ht = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ee = (e, n = new Date()) => N(e).getFullYear() === N(n).getFullYear(), hn = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Bn = (e, n = new Date()) => {
  e = N(e), n = N(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, On = (e, n) => ht(N(n), e), Fn = (e, n) => ht(N(n).getTime() - D, e), Un = (e, n) => ht(N(n).getTime() + D, e), qn = (e, n) => ht(N(n).getTime() - 2 * D, e), Ht = (e, n = "yyyy-MM-dd hh:mm") => {
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
st(dn);
const fn = {
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
        i && (o = o.filter((u) => i.call(this, u)));
        const r = o.findIndex((u) => u.id === e.id), c = o.findIndex((u) => u.id === n.id), a = o.splice(r, 1);
        o.splice(c, 0, a[0]);
        const d = {}, l = [];
        o.forEach(({ id: u }, p) => {
          d[u] = p, l.push(u);
        }), this.setState({ rowOrders: d }), (s = this.options.onSort) == null || s.call(this, e, n, t, l);
      }
    }
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
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: en,
  checkable: sn,
  nested: an,
  rich: dn,
  headerGroup: fn,
  sortable: un
}, Symbol.toStringTag, { value: "Module" }));
var bt;
class kt {
  constructor(n, t) {
    M(this, "element");
    M(this, "options");
    v(this, bt, Te());
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
bt = new WeakMap(), M(kt, "NAME", "zui.dtable"), M(kt, "definePlugin", st), M(kt, "removePlugin", Ge), M(kt, "plugins", Yn);
var yt, V, j, lt, ct, Ct;
const re = class {
  constructor(n, t = "local") {
    v(this, ct);
    v(this, yt, void 0);
    v(this, V, void 0);
    v(this, j, void 0);
    v(this, lt, void 0);
    k(this, yt, t), k(this, V, `ZUI_STORE:${n != null ? n : Fe()}`), k(this, j, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, yt);
  }
  get session() {
    return this.type === "session" ? this : (h(this, lt) || k(this, lt, new re(h(this, V), "session")), h(this, lt));
  }
  get(n, t) {
    const s = h(this, j).getItem(L(this, ct, Ct).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    h(this, j).setItem(L(this, ct, Ct).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    h(this, j).removeItem(L(this, ct, Ct).call(this, n));
  }
  each(n) {
    for (let t = 0; t < h(this, j).length; t++) {
      const s = h(this, j).key(t);
      if (s != null && s.startsWith(h(this, V))) {
        const o = h(this, j).getItem(s);
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
let Nt = re;
yt = new WeakMap(), V = new WeakMap(), j = new WeakMap(), lt = new WeakMap(), ct = new WeakSet(), Ct = function(n) {
  return `${h(this, V)}:${n}`;
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
  createDate: N,
  isSameDay: ht,
  isSameYear: ee,
  isSameMonth: hn,
  isSameWeek: Bn,
  isToday: On,
  isYesterday: Fn,
  isTomorrow: Un,
  isDBY: qn,
  formatDate: Ht,
  formatDateSpan: Gn,
  getTimeBeforeDesc: Kn,
  calculateTimestamp: ne,
  formatString: ft,
  formatBytes: Cn,
  convertBytes: Sn
}, Symbol.toStringTag, { value: "Module" }));
var I, T;
class ns {
  constructor(n) {
    v(this, I, void 0);
    v(this, T, void 0);
    k(this, I, n), k(this, T, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, I).parentElement.parentElement, h(this, I).parentElement), this.addActive(h(this, T).parentElement, h(this, T)), h(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    k(this, T, h(this, I)), this.addActive(h(this, T).parentElement, h(this, T)), k(this, I, document.querySelector(`[href='#${h(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, T).getAttribute("id")}']`)), this.addActive(h(this, I).parentElement.parentElement, h(this, I).parentElement);
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
  kt as DTable,
  ns as NavTabs,
  Se as Scrollbar,
  is as browser,
  Yn as dtablePlugins,
  rs as helpers,
  Vn as store
};
