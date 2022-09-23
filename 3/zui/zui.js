var bn = Object.defineProperty;
var mn = (e, n, t) => n in e ? bn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var M = (e, n, t) => (mn(e, typeof n != "symbol" ? n + "" : n, t), t), Xt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var d = (e, n, t) => (Xt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, x = (e, n, t, s) => (Xt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var D = (e, n, t) => (Xt(e, n, "access private method"), t);
const yn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class vn extends HTMLElement {
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
    const t = yn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", vn);
var Gt, C, Ne, _t, we, $t = {}, Le = [], wn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Z(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Te(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function b(e, n, t) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Gt.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return Et(e, r, s, o, null);
}
function Et(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Ne : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function De() {
  return { current: null };
}
function Kt(e) {
  return e.children;
}
function st(e, n) {
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
  (!e.__d && (e.__d = !0) && _t.push(e) && !At.__r++ || we !== C.debounceRendering) && ((we = C.debounceRendering) || setTimeout)(At);
}
function At() {
  for (var e; At.__r = _t.length; )
    e = _t.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), _t = [], e.some(function(n) {
      var t, s, o, i, r, a;
      n.__d && (r = (i = (t = n).__v).__e, (a = t.__P) && (s = [], (o = Z({}, i)).__v = i.__v + 1, se(a, i, o, t.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? ft(i) : r, i.__h), Pe(s, i), i.__e != r && ze(i)));
    });
}
function We(e, n, t, s, o, i, r, a, c, h) {
  var l, g, u, f, _, v, m, y = s && s.__k || Le, R = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Et(null, f, null, null, f) : Array.isArray(f) ? Et(Kt, { children: f }, null, null, null) : f.__b > 0 ? Et(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (u = y[l]) === null || u && f.key == u.key && f.type === u.type)
        y[l] = void 0;
      else
        for (g = 0; g < R; g++) {
          if ((u = y[g]) && f.key == u.key && f.type === u.type) {
            y[g] = void 0;
            break;
          }
          u = null;
        }
      se(e, f, u = u || $t, o, i, r, a, c, h), _ = f.__e, (g = f.ref) && u.ref != g && (m || (m = []), u.ref && m.push(u.ref, null, f), m.push(g, f.__c || _, f)), _ != null ? (v == null && (v = _), typeof f.type == "function" && f.__k === u.__k ? f.__d = c = je(f, c, e) : c = Ie(e, f, u, y, _, c), typeof t.type == "function" && (t.__d = c)) : c && u.__e == c && c.parentNode != e && (c = ft(u));
    }
  for (t.__e = v, l = R; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = ft(s, l + 1)), Be(y[l], y[l]));
  if (m)
    for (l = 0; l < m.length; l++)
      Oe(m[l], m[++l], m[++l]);
}
function je(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? je(s, n, t) : Ie(t, s, s, o, s.__e, n));
  return n;
}
function Ie(e, n, t, s, o, i) {
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
function Rn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Ht(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Ht(e, i, n[i], t[i], s);
}
function ke(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || wn.test(n) ? t : t + "px";
}
function Ht(e, n, t, s, o) {
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
  var h, l, g, u, f, _, v, m, y, R, $, G, T, E = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (h = C.__b) && h(n);
  try {
    t:
      if (typeof E == "function") {
        if (m = n.props, y = (h = E.contextType) && s[h.__c], R = h ? y ? y.props.value : h.__ : s, t.__c ? v = (l = n.__c = t.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? n.__c = l = new E(m, R) : (n.__c = l = new st(m, R), l.constructor = E, l.render = xn), y && y.sub(l), l.props = m, l.state || (l.state = {}), l.context = R, l.__n = s, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, E.getDerivedStateFromProps(m, l.__s))), u = l.props, f = l.state, g)
          E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && m !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, R), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, R) === !1 || n.__v === t.__v) {
            l.props = m, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(W) {
              W && (W.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, R), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, _);
          });
        }
        if (l.context = R, l.props = m, l.__v = n, l.__P = e, $ = C.__r, G = 0, "prototype" in E && E.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(n), h = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(n), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++G < 25);
        l.state = l.__s, l.getChildContext != null && (s = Z(Z({}, s), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(u, f)), T = h != null && h.type === Kt && h.key == null ? h.props.children : h, We(e, Array.isArray(T) ? T : [T], n, t, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), v && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = kn(t.__e, n, t, s, o, i, r, c);
    (h = C.diffed) && h(n);
  } catch (W) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), C.__e(W, n, t);
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
function kn(e, n, t, s, o, i, r, a) {
  var c, h, l, g = t.props, u = n.props, f = n.type, _ = 0;
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
    g === u || a && e.data === u || (e.data = u);
  else {
    if (i = i && Gt.call(e.childNodes), h = (g = t.props || $t).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (g = {}, _ = 0; _ < e.attributes.length; _++)
          g[e.attributes[_].name] = e.attributes[_].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (Rn(e, u, g, o, a), l)
      n.__k = [];
    else if (_ = n.props.children, We(e, Array.isArray(_) ? _ : [_], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && ft(t, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && Te(i[_]);
    a || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || f === "progress" && !_ || f === "option" && _ !== g.value) && Ht(e, "value", _, g.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ht(e, "checked", _, g.checked, !1));
  }
  return e;
}
function Oe(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    C.__e(s, t);
  }
}
function Be(e, n, t) {
  var s, o;
  if (C.unmount && C.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Oe(s, null, n)), (s = e.__c) != null) {
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
      s[o] && Be(s[o], n, typeof e.type != "function");
  t || e.__e == null || Te(e.__e), e.__e = e.__d = void 0;
}
function xn(e, n, t) {
  return this.constructor(e, t);
}
function Sn(e, n, t) {
  var s, o, i;
  C.__ && C.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], se(n, e = (!s && t || n).__k = b(Kt, null, [e]), o || $t, $t, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Gt.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Pe(i, e);
}
Gt = Le.slice, C = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ne = 0, st.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, t), this.props)), e && Z(t, e), e != null && this.__v && (n && this.__h.push(n), Re(this));
}, st.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Re(this));
}, st.prototype.render = Kt, _t = [], At.__r = 0;
const N = (...e) => e.map((n) => Array.isArray(n) ? N(...n) : typeof n == "function" ? N(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
var tt, et;
class Ce extends st {
  constructor(t) {
    var s;
    super(t);
    w(this, tt, 0);
    w(this, et, null);
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
      s && (d(this, tt) && cancelAnimationFrame(d(this, tt)), x(this, tt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), x(this, tt, 0);
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
    t && (x(this, et, typeof t == "string" ? document : t.current), d(this, et).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, et) && d(this, et).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: g, scrollPos: u } = this, { dragStart: f } = this.state, _ = {
      left: a,
      top: c,
      bottom: h,
      right: l,
      ...r
    }, v = {};
    return s === "horz" ? (_.height = o, _.width = t, v.width = this.barSize, v.left = Math.round(Math.min(g, u) * (t - v.width) / g)) : (_.width = o, _.height = t, v.height = this.barSize, v.top = Math.round(Math.min(g, u) * (t - v.height) / g)), /* @__PURE__ */ b("div", {
      className: N("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": f
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: v,
      onMouseDown: this._handleMouseDown
    }));
  }
}
tt = new WeakMap(), et = new WeakMap();
function gt(e, ...n) {
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
const En = (e) => {
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
function $n(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function An(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Mn,
  domReady: $n,
  isElementVisible: An,
  classes: N
}, Symbol.toStringTag, { value: "Module" }));
let Ue = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var bt, V, P, lt, at, Mt;
const re = class {
  constructor(n, t = "local") {
    w(this, at);
    w(this, bt, void 0);
    w(this, V, void 0);
    w(this, P, void 0);
    w(this, lt, void 0);
    x(this, bt, t), x(this, V, `ZUI_STORE:${n != null ? n : Ue()}`), x(this, P, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, bt);
  }
  get session() {
    return this.type === "session" ? this : (d(this, lt) || x(this, lt, new re(d(this, V), "session")), d(this, lt));
  }
  get(n, t) {
    const s = d(this, P).getItem(D(this, at, Mt).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, P).setItem(D(this, at, Mt).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    d(this, P).removeItem(D(this, at, Mt).call(this, n));
  }
  each(n) {
    for (let t = 0; t < d(this, P).length; t++) {
      const s = d(this, P).key(t);
      if (s != null && s.startsWith(d(this, V))) {
        const o = d(this, P).getItem(s);
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
bt = new WeakMap(), V = new WeakMap(), P = new WeakMap(), lt = new WeakMap(), at = new WeakSet(), Mt = function(n) {
  return `${d(this, V)}:${n}`;
};
const Hn = new Nt("DEFAULT");
function Nn(e, n = "local") {
  return new Nt(e, n);
}
Object.assign(Hn, { create: Nn });
class is extends st {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, h = [s], l = { ...o };
    let g = null;
    return i ? g = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : g = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && h.push(`avatar-${n}`), typeof t == "string" && h.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: N(h),
      style: l,
      ...c
    }, g, a);
  }
}
function Ln() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Tn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Dn(e, n) {
  Ln(), e.classList.add("block"), Ee(e, n), e.onclick = (t) => zn(t, e), window.addEventListener("resize", () => {
    Ee(e, n);
  });
}
function Fe(e) {
  var n;
  Tn(), (n = e.classList) == null || n.remove("block");
}
function Ee(e, n) {
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
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Fe(n));
}
function Wn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Wn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Dn(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Fe(n);
});
function qe() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function jn(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (qe(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? jn(t) : qe();
});
function Me(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ie({ col: e, className: n, height: t, row: s, onRenderCell: o, style: i, outerStyle: r, children: a, outerClass: c, ...h }) {
  var E, W;
  const l = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: g, border: u } = e.setting, f = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...i
  }, _ = ["dtable-cell", c, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], v = ["dtable-cell-content", n], m = [(W = a != null ? a : (E = s.data) == null ? void 0 : E[e.name]) != null ? W : ""], y = o ? o(m, { row: s, col: e }, b) : m, R = [], $ = [], G = {}, T = {};
  return y == null || y.forEach((k) => {
    var it;
    if (typeof k == "object" && k && ("html" in k || "className" in k || "style" in k || "attrs" in k)) {
      const rt = k.outer ? R : $;
      k.html ? rt.push(/* @__PURE__ */ b("div", {
        className: N("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(it = k.attrs) != null ? it : {}
      })) : (k.style && Object.assign(k.outer ? l : f, k.style), k.className && (k.outer ? _ : v).push(k.className), k.children && rt.push(k.children), k.attrs && Object.assign(k.outer ? G : T, k.attrs));
    } else
      $.push(k);
  }), /* @__PURE__ */ b("div", {
    className: N(_),
    style: l,
    "data-col": e.name,
    ...h,
    ...G
  }, $.length > 0 && /* @__PURE__ */ b("div", {
    className: N(v),
    style: f,
    ...T
  }, $), R);
}
function In({ col: e, children: n, style: t, ...s }) {
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
function Jt({ row: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, CellComponent: a = ie, onRenderCell: c }) {
  return /* @__PURE__ */ b("div", {
    className: N("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((h) => h.visible ? /* @__PURE__ */ b(a, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: c
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
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: h,
  flexRightWidth: l,
  scrollLeft: g,
  CellComponent: u = ie,
  onRenderCell: f,
  style: _,
  ...v
}) {
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ b(Jt, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ b(Jt, {
    className: "dtable-flexable",
    cols: r,
    left: a - g,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let R = null;
  i != null && i.length && (R = /* @__PURE__ */ b(Jt, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  const $ = { top: t, height: s, lineHeight: `${s - 2}px`, ..._ };
  return /* @__PURE__ */ b("div", {
    className: N("dtable-row", n),
    style: $,
    "data-id": e.id,
    ...v
  }, m, y, R);
}
function Pn({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: In
  };
  if (n) {
    const o = n({ props: s }, b);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ b(Ge, {
    ...s
  }));
}
function On({
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
    className: N("dtable-rows", e),
    style: n
  }, s.map((c) => {
    const h = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      row: c,
      top: c.top,
      height: i,
      ...a
    }, l = r == null ? void 0 : r({ props: h, row: c }, b);
    return l && Object.assign(h, l), /* @__PURE__ */ b(Ge, {
      ...h
    });
  }));
}
const Lt = /* @__PURE__ */ new Map(), Tt = [];
function Ke(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Lt.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Lt.set(t, e), (n == null ? void 0 : n.buildIn) && !Tt.includes(t) && Tt.push(t);
}
function ot(e, n) {
  Ke(e, n);
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
function Ve(e) {
  return Lt.delete(e);
}
function Bn(e) {
  if (typeof e == "string") {
    const n = Lt.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ye(e, n, t) {
  return n.forEach((s) => {
    var i;
    if (!s)
      return;
    const o = Bn(s);
    !o || t.has(o.name) || ((i = o.plugins) != null && i.length && Ye(e, o.plugins, t), e.push(o), t.add(o.name));
  }), e;
}
function Un(e = [], n = !0) {
  return n && Tt.length && e.unshift(...Tt), e != null && e.length ? Ye([], e, /* @__PURE__ */ new Set()) : [];
}
function $e() {
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
var nt, ct, Y, X, J, A, q, O, ht, dt, zt, Xe, Wt, Je, jt, Ze, It, Qe, mt, yt, Qt, Pt, Ot, vt, wt, Bt, Ut, tn, Ft, en, qt, nn;
class Zt extends st {
  constructor(t) {
    super(t);
    w(this, zt);
    w(this, Wt);
    w(this, jt);
    w(this, It);
    w(this, yt);
    w(this, Ut);
    w(this, Ft);
    w(this, qt);
    M(this, "ref", De());
    w(this, nt, 0);
    w(this, ct, void 0);
    w(this, Y, !1);
    w(this, X, void 0);
    w(this, J, void 0);
    w(this, A, []);
    w(this, q, void 0);
    w(this, O, /* @__PURE__ */ new Map());
    w(this, ht, {});
    w(this, dt, (t) => {
      const { type: s } = t, o = d(this, O).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation();
            break;
          }
      }
    });
    w(this, mt, () => {
      d(this, nt) && cancelAnimationFrame(d(this, nt)), x(this, nt, requestAnimationFrame(() => {
        x(this, q, void 0), this.forceUpdate(), x(this, nt, 0);
      }));
    });
    w(this, Pt, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return d(this, A).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    w(this, Ot, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), d(this, A).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, vt, (t, s, o) => {
      const { row: i, col: r } = s;
      t[0] = this.getCellValue(i, r);
      const a = i.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (t = r.setting[a].call(this, t, s, o)), this.options[a] && (t = this.options[a].call(this, t, s, o)), d(this, A).forEach((c) => {
        c[a] && (t = c[a].call(this, t, s, o));
      }), t;
    });
    w(this, wt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, Bt, (t) => {
      var c, h, l, g, u, f, _;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (h = o.getAttribute("data-id")) != null ? h : "";
      if (a === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), d(this, A).forEach((v) => {
          var m;
          (m = v.onHeaderCellClick) == null || m.call(this, t, { colName: r, element: i });
        }));
      else {
        const v = this.layout.visibleRows.find((m) => m.id === a);
        if (i) {
          if (((g = this.options.onCellClick) == null ? void 0 : g.call(this, t, { colName: r, rowID: a, rowInfo: v, element: i, rowElement: o })) === !0)
            return;
          for (const m of d(this, A))
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: a, rowInfo: v, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: a, rowInfo: v, element: o })) === !0)
          return;
        for (const m of d(this, A))
          if (((_ = m.onRowClick) == null ? void 0 : _.call(this, t, { rowID: a, rowInfo: v, element: o })) === !0)
            return;
      }
    });
    x(this, ct, `dtable-${Ue(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, x(this, J, Object.freeze(Un(t.plugins))), d(this, J).forEach((s) => {
      var a;
      const { methods: o, data: i, state: r } = s;
      o && Object.entries(o).forEach(([c, h]) => {
        typeof h == "function" && Object.assign(this, { [c]: h.bind(this) });
      }), i && Object.assign(d(this, ht), i.call(this)), r && Object.assign(this.state, r.call(this)), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return (t = d(this, X)) != null ? t : $e();
  }
  get plugins() {
    return d(this, A);
  }
  get layout() {
    return d(this, q);
  }
  get id() {
    return d(this, ct);
  }
  get data() {
    return d(this, ht);
  }
  componentWillReceiveProps() {
    x(this, X, void 0);
  }
  componentDidMount() {
    d(this, Y) ? this.forceUpdate() : D(this, yt, Qt).call(this), d(this, A).forEach((t) => {
      const { events: s } = t;
      !s || Object.entries(s).forEach(([o, i]) => {
        this.on(o, i);
      });
    }), this.on("click", d(this, Bt)), this.options.responsive && window.addEventListener("resize", d(this, mt)), d(this, A).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    d(this, Y) ? D(this, yt, Qt).call(this) : d(this, A).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    if (t)
      for (const s of d(this, O).keys())
        t.removeEventListener(s, d(this, dt));
    window.removeEventListener("resize", d(this, mt)), d(this, A).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), d(this, J).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), x(this, ht, {}), d(this, O).clear();
  }
  on(t, s) {
    var i;
    const o = d(this, O).get(t);
    o ? o.push(s) : (d(this, O).set(t, [s]), (i = this.ref.current) == null || i.addEventListener(t, d(this, dt)));
  }
  off(t, s) {
    var r;
    const o = d(this, O).get(t);
    if (!o)
      return;
    const i = o.indexOf(s);
    i >= 0 && o.splice(i, 1), o.length || (d(this, O).delete(t), (r = this.ref.current) == null || r.removeEventListener(t, d(this, dt)));
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
    const { colsMap: s } = this.layout;
    return typeof t == "number" ? Object.values(s).find((o) => o.index === t) : s[t];
  }
  getRowInfo(t) {
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s } = this.layout;
    return typeof t == "number" ? s[t] : s.find((o) => o.id === t);
  }
  getCellValue(t, s) {
    var c, h;
    const o = typeof t == "object" ? t : this.getRowInfo(t);
    if (!o)
      return;
    const i = typeof s == "object" ? s : this.getColInfo(s);
    if (!i)
      return;
    let r = o.id === "HEADER" ? (c = i.setting.title) != null ? c : i.setting.name : (h = o.data) == null ? void 0 : h[i.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, o, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}) {
    const { dirtyType: s } = t;
    s === "layout" ? x(this, q, void 0) : s === "options" && (x(this, q, void 0), x(this, X, void 0)), this.forceUpdate();
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
    var f;
    const t = D(this, qt, nn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: h } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", s, {
      "dtable-hover-row": o,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": a,
      "dtable-striped": c,
      "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return t && d(this, A).forEach((_) => {
      var m;
      const v = (m = _.onRender) == null ? void 0 : m.call(this, t);
      !v || (v.style && Object.assign(l, v.style), v.className && g.push(v.className), v.children && u.push(v.children));
    }), /* @__PURE__ */ b("div", {
      id: d(this, ct),
      className: N(g),
      style: l,
      ref: this.ref
    }, t && D(this, zt, Xe).call(this, t), t && D(this, Wt, Je).call(this, t), t && D(this, jt, Ze).call(this, t), t && D(this, It, Qe).call(this, t));
  }
}
nt = new WeakMap(), ct = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), J = new WeakMap(), A = new WeakMap(), q = new WeakMap(), O = new WeakMap(), ht = new WeakMap(), dt = new WeakMap(), zt = new WeakSet(), Xe = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Pn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: d(this, vt),
      onRenderRow: d(this, Ot),
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
}, Wt = new WeakSet(), Je = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = t;
  return /* @__PURE__ */ b(On, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: d(this, vt),
    onRenderRow: d(this, Pt),
    ...a
  });
}, jt = new WeakSet(), Ze = function(t) {
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
}, It = new WeakSet(), Qe = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: h, scrollWidth: l } = i, { scrollbarSize: g = 12, horzScrollbarPos: u } = this.options;
  return h > l && s.push(/* @__PURE__ */ b(Ce, {
    key: "horz",
    type: "horz",
    scrollPos: o,
    scrollSize: h,
    clientSize: l,
    onScroll: d(this, wt),
    left: i.flexLeftWidth,
    bottom: u === "inside" ? 0 : -g,
    size: g,
    wheelContainer: this.ref
  })), c > a && s.push(/* @__PURE__ */ b(Ce, {
    key: "vert",
    type: "vert",
    scrollPos: r,
    scrollSize: c,
    clientSize: a,
    onScroll: d(this, wt),
    right: 0,
    size: g,
    top: t.headerHeight,
    wheelContainer: this.ref
  })), s.length ? s : null;
}, mt = new WeakMap(), yt = new WeakSet(), Qt = function() {
  var t;
  x(this, Y, !1), (t = this.options.afterRender) == null || t.call(this), d(this, A).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Pt = new WeakMap(), Ot = new WeakMap(), vt = new WeakMap(), wt = new WeakMap(), Bt = new WeakMap(), Ut = new WeakSet(), tn = function() {
  if (d(this, X))
    return !1;
  const s = { ...$e(), ...d(this, J).reduce((o, i) => {
    const { defaultOptions: r } = i;
    return r && Object.assign(o, r), o;
  }, {}), ...this.props };
  return x(this, X, s), x(this, A, d(this, J).reduce((o, i) => {
    const { when: r, options: a } = i;
    return (!r || r(s)) && (o.push(i), a && Object.assign(s, typeof a == "function" ? a.call(this, s) : a)), o;
  }, [])), !0;
}, Ft = new WeakSet(), en = function() {
  var he, de, fe;
  const { options: t, plugins: s } = this;
  s.forEach((p) => {
    var H;
    const S = (H = p.beforeLayout) == null ? void 0 : H.call(this, t);
    S && Object.assign(t, S);
  });
  const {
    header: o,
    footer: i,
    rowHeight: r,
    defaultColWidth: a,
    minColWidth: c,
    maxColWidth: h
  } = t, l = [], g = [], u = [], f = {};
  let _ = 0, v = 0, m = 0;
  t.cols.forEach((p) => {
    var ue, pe, ge;
    if (p.hidden)
      return;
    p = { ...p };
    const { minWidth: S = c, maxWidth: H = h } = p, j = Me((ue = p.width) != null ? ue : 0, S, H), K = (pe = p.flex) != null ? pe : 1, xt = K * Me(a, S, H), I = {
      name: p.name,
      type: (ge = p.type) != null ? ge : "",
      setting: p,
      left: 0,
      flex: K,
      realWidth: j,
      flexWidth: xt,
      visible: !0,
      index: m++
    };
    p.fixed === "left" ? (I.left = _, _ += j, l.push(I)) : p.fixed === "right" ? (I.left = v, v += j, g.push(I)) : u.push(I), f[I.name] = I, s.forEach((_e) => {
      var be, me, ye;
      const St = (me = _e.colTypes) == null ? void 0 : me[(be = p.type) != null ? be : ""];
      if (St) {
        const ve = typeof St == "function" ? St(p) : St;
        ve && Object.assign(p, ve);
      }
      (ye = _e.onAddCol) == null || ye.call(this, I);
    });
  });
  let y = t.width, R = 0;
  if (typeof y == "function" && (y = y()), y === "auto")
    R = _ + v, u.forEach((p) => {
      p.realWidth || (p.realWidth = p.flexWidth), R += p.realWidth;
    });
  else if (y === "100%") {
    const p = (he = this.ref.current) == null ? void 0 : he.parentElement;
    if (p)
      R = p.clientWidth;
    else {
      R = 0, x(this, Y, !0);
      return;
    }
  } else
    R = y != null ? y : 0;
  const { data: $, rowKey: G = "id" } = t, T = [], E = (p, S, H) => {
    var K, xt;
    const j = { data: H != null ? H : { [G]: p }, top: T.length * r, id: p, index: T.length };
    if (H || (j.lazy = !0), T.push(j), ((K = t.onAddRow) == null ? void 0 : K.call(this, j, S)) !== !1) {
      for (const I of s)
        if (((xt = I.onAddRow) == null ? void 0 : xt.call(this, j, S)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let p = 0; p < $; p++)
      E(`${p}`, p);
  else
    Array.isArray($) && $.forEach((p, S) => {
      var H;
      typeof p == "object" ? E(`${(H = p[G]) != null ? H : ""}`, S, p) : E(`${p != null ? p : ""}`, S);
    });
  let W = !1, k = T;
  if (t.onAddRows) {
    const p = t.onAddRows.call(this, k);
    p && (k = p, W = !0);
  }
  for (const p of s) {
    const S = (de = p.onAddRows) == null ? void 0 : de.call(this, k);
    S && (k = S, W = !0);
  }
  W && k.forEach((p, S) => {
    p.index = S;
  });
  const it = o ? t.headerHeight || r : 0, rt = i ? t.footerHeight || r : 0;
  let F = t.height, Q = 0;
  const le = k.length * r, Vt = it + rt + le;
  if (typeof F == "function" && (F = F(Vt)), F === "auto")
    Q = Vt;
  else if (typeof F == "object")
    Q = Math.min(F.max, Math.max(F.min, Vt));
  else if (F === "100%") {
    const p = (fe = this.ref.current) == null ? void 0 : fe.parentElement;
    if (p)
      Q = p.clientHeight;
    else {
      Q = 0, x(this, Y, !0);
      return;
    }
  } else
    Q = F;
  const _n = Q - it - rt, ae = R - _ - v;
  let kt = 0;
  const Yt = [];
  let ce = 0;
  if (u.forEach((p) => {
    p.realWidth ? kt += p.realWidth : (Yt.push(p), ce += p.flex);
  }), Yt.length) {
    const p = Math.max(0, ae - kt);
    Yt.forEach((S) => {
      var K;
      const { minWidth: H = c, maxWidth: j = h } = S.setting;
      S.realWidth = Math.min(j, Math.max(H, Math.ceil(p * ((K = S.flex) != null ? K : 1) / ce))), kt += S.realWidth;
    });
  }
  const pt = {
    allRows: T,
    width: R,
    height: Q,
    rows: k,
    rowHeight: r,
    rowsHeight: _n,
    rowsHeightTotal: le,
    header: o,
    footer: i,
    headerHeight: it,
    footerHeight: rt,
    colsMap: f,
    colsInfo: {
      fixedLeftCols: l,
      fixedRightCols: g,
      scrollCols: u,
      flexLeftWidth: _,
      scrollWidth: ae,
      scrollWidthTotal: kt,
      flexRightWidth: v
    }
  };
  if (t.onLayout) {
    const p = t.onLayout.call(this, pt);
    p && Object.assign(pt, p);
  }
  s.forEach((p) => {
    if (p.onLayout) {
      const S = p.onLayout.call(this, pt);
      S && Object.assign(pt, S);
    }
  }), x(this, q, pt);
}, qt = new WeakSet(), nn = function() {
  (D(this, Ut, tn).call(this) || !d(this, q)) && D(this, Ft, en).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollTop: s, scrollLeft: o } = this.state;
  const { rowsHeightTotal: i, rowsHeight: r, rows: a, rowHeight: c, colsInfo: { scrollCols: h, scrollWidth: l } } = t;
  s = Math.min(Math.max(0, i - r), s);
  const g = s + r;
  let u = 0;
  h.forEach((y) => {
    y.left = u, u += y.realWidth, y.visible = y.left + y.realWidth >= o && y.left <= o + l;
  }), o = Math.min(Math.max(0, u - l), o);
  const f = Math.floor(s / c), _ = Math.min(a.length, Math.ceil(g / c)), v = [], { rowDataGetter: m } = this.options;
  for (let y = f; y < _; y++) {
    const R = a[y];
    R.top = R.index * c - s, R.lazy && m && (R.data = m([R.id])[0], R.lazy = !1), v.push(R);
  }
  return t.visibleRows = v, t.scrollTop = s, t.scrollLeft = o, t;
}, M(Zt, "addPlugin", Ke), M(Zt, "removePlugin", Ve);
function Ae(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((o) => o.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((o) => o.classList.add(s));
}
const sn = {
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
      Ae(this, s);
    },
    mouseleave() {
      Ae(this, !1);
    }
  }
};
ot(sn, { buildIn: !0 });
function Fn(e, n) {
  var r, a;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (c, h) => {
    o && !o.call(this, c) || !!t[c] === h || (h ? t[c] = !0 : delete t[c], s[c] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !on.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: c }) => {
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
function qn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function on() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Gn() {
  return Object.keys(this.state.checkedRows);
}
const rn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Fn,
    isRowChecked: qn,
    isAllRowChecked: on,
    getChecks: Gn
  },
  onRenderCell(e, { row: n, col: t }) {
    var a, c;
    const { id: s } = n, { canRowCheckable: o } = this.options;
    if (o && !o.call(this, s))
      return e;
    const { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const h = this.isRowChecked(s), l = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, h, s)) != null ? c : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r, a;
    const { id: s } = n, { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const c = this.isAllRowChecked(), h = (a = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, c, s)) != null ? a : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: N(e.className, "is-checked") };
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
ot(rn);
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
function Kn(e, n) {
  var o;
  let t = (o = this.state.collapsedRows) != null ? o : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !ln.call(this)), n) {
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
function ln() {
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
function cn(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, cn(e, i, t, s);
  }), o;
}
function hn(e, n, t, s, o) {
  var a;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((a = i.children) == null ? void 0 : a.every((c) => {
    const h = !!(s[c] !== void 0 ? s[c] : o[c]);
    return t === h;
  })) && (s[n] = t), i.parent && hn(e, i.parent, t, s, o);
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
        const r = cn(this, o, i, s);
        r != null && r.parent && hn(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Kn,
    isAllCollapsed: ln,
    getNestedRowInfo: te
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var o, i, r, a, c;
    const { nestedMap: n } = this.data, t = (i = e.data) == null ? void 0 : i[(o = this.options.nestedParentKey) != null ? o : "parent"], s = (r = n.get(e.id)) != null ? r : {
      state: "",
      level: 0
    };
    if (s.parent = t, (c = e.data) != null && c[(a = this.options.asParentKey) != null ? a : "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let h = n.get(t);
      h || (h = {
        state: "",
        level: 0
      }, n.set(t, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), an(this.data.nestedMap), e.sort((n, t) => {
      var r, a;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((a = o.order) != null ? a : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var a, c, h;
    const { id: s, data: o } = t, { nestedToggle: i } = n.setting, r = this.getNestedRowInfo(s);
    if (i && (r.children || r.parent) && e.unshift((c = (a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, n, o)) != null ? c : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), r.level) {
      let { nestedIndent: l = i } = n.setting;
      l && (l === !0 && (l = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: l * r.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var o, i;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift((i = (o = this.options.onRenderNestedToggle) == null ? void 0 : o.call(this, void 0, s, t, void 0)) != null ? i : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: N(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = N(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
ot(dn);
const U = 24 * 60 * 60 * 1e3, L = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ut = (e, n = new Date()) => (e = L(e), n = L(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ee = (e, n = new Date()) => L(e).getFullYear() === L(n).getFullYear(), fn = (e, n = new Date()) => (e = L(e), n = L(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Vn = (e, n = new Date()) => {
  e = L(e), n = L(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Yn = (e, n) => ut(L(n), e), Xn = (e, n) => ut(L(n).getTime() - U, e), Jn = (e, n) => ut(L(n).getTime() + U, e), Zn = (e, n) => ut(L(n).getTime() - 2 * U, e), Dt = (e, n = "yyyy-MM-dd hh:mm") => {
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
}, Qn = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Dt(e, ee(e) ? s.month : s.full);
  if (ut(e, n))
    return o;
  const i = Dt(n, ee(e, n) ? fn(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, ts = (e) => {
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
const un = {
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = gt(s, t.data);
        return e[0] = /* @__PURE__ */ b("a", {
          href: i,
          ...o
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: s } = t, { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${n.name}Avatar` } = n.setting, a = /* @__PURE__ */ b("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[r] : ""
        }));
        return o ? e.unshift(a) : e[0] = a, e;
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
      onRenderCell(e, { col: n, row: t }) {
        var a;
        const s = (a = t.data) == null ? void 0 : a[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((c) => {
            typeof c == "string" && (c = { action: c });
            const h = i[c.action];
            return h && (c = { className: r, ...h, ...c }), gt(o, c);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Dt(i, s) : o === "html" ? e[0] = { html: gt(s, i) } : e[0] = gt(s, i), e;
      }
    }
  }
};
ot(un);
const pn = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
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
ot(pn);
function He(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
const gn = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  events: {
    dragstart(e) {
      var t, s;
      const n = He(this, e);
      !e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1 || (this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"));
    },
    dragend() {
      var s, o;
      const { draggingRow: e, droppingRow: n, moveType: t } = this.state;
      this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (s = this.ref.current) == null || s.classList.remove("dtable-sorting"), (o = this.options.onEndSort) == null || o.call(this, e, n, t);
    },
    dragenter(e) {
      var o;
      const n = He(this, e), { draggingRow: t } = this.state;
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
        i && (o = o.filter((g) => i.call(this, g)));
        const r = o.findIndex((g) => g.id === e.id), a = o.findIndex((g) => g.id === n.id), c = o.splice(r, 1);
        o.splice(a, 0, c[0]);
        const h = {}, l = [];
        o.forEach(({ id: g }, u) => {
          h[g] = u, l.push(g);
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
ot(gn);
const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: sn,
  checkable: rn,
  nested: dn,
  rich: un,
  headerGroup: pn,
  sortable: gn
}, Symbol.toStringTag, { value: "Module" }));
var Rt;
class Ct {
  constructor(n, t) {
    M(this, "element");
    M(this, "options");
    w(this, Rt, De());
    this.element = n, this.options = { ...t }, this.render();
  }
  get $() {
    return d(this, Rt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Sn(/* @__PURE__ */ b(Zt, {
      ref: d(this, Rt),
      ...this.options
    }), this.element);
  }
}
Rt = new WeakMap(), M(Ct, "NAME", "zui.dtable"), M(Ct, "definePlugin", ot), M(Ct, "removePlugin", Ve), M(Ct, "plugins", es);
var B, z;
class ns {
  constructor(n) {
    w(this, B, void 0);
    w(this, z, void 0);
    x(this, B, n), x(this, z, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, B).parentElement.parentElement, d(this, B).parentElement), this.addActive(d(this, z).parentElement, d(this, z)), d(this, z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    x(this, z, d(this, B)), this.addActive(d(this, z).parentElement, d(this, z)), x(this, B, document.querySelector(`[href='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, z).getAttribute("id")}']`)), this.addActive(d(this, B).parentElement.parentElement, d(this, B).parentElement);
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
B = new WeakMap(), z = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new ns(e.target).showTarget());
});
const rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: U,
  createDate: L,
  isSameDay: ut,
  isSameYear: ee,
  isSameMonth: fn,
  isSameWeek: Vn,
  isToday: Yn,
  isYesterday: Xn,
  isTomorrow: Jn,
  isDBY: Zn,
  formatDate: Dt,
  formatDateSpan: Qn,
  getTimeBeforeDesc: ts,
  calculateTimestamp: ne,
  formatString: gt,
  formatBytes: Cn,
  convertBytes: En
}, Symbol.toStringTag, { value: "Module" }));
export {
  is as Avatar,
  Ct as DTable,
  ns as NavTabs,
  Ce as Scrollbar,
  os as browser,
  es as dtablePlugins,
  rs as helpers,
  Hn as store
};
