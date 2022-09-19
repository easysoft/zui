var Xt = Object.defineProperty;
var Jt = (t, n, e) => n in t ? Xt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var R = (t, n, e) => (Jt(t, typeof n != "symbol" ? n + "" : n, e), e), Pe = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var f = (t, n, e) => (Pe(t, n, "read from private field"), e ? e.call(t) : n.get(t)), E = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, S = (t, n, e, s) => (Pe(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var ve = (t, n, e) => (Pe(t, n, "access private method"), e);
var Ae, C, vt, ue, ft, Se = {}, wt = [], Zt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Y(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function Rt(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function m(t, n, e) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ae.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      r[i] === void 0 && (r[i] = t.defaultProps[i]);
  return Re(t, r, s, o, null);
}
function Re(t, n, e, s, o) {
  var i = { type: t, props: n, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++vt : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function kt() {
  return { current: null };
}
function He(t) {
  return t.children;
}
function te(t, n) {
  this.props = t, this.context = n;
}
function le(t, n) {
  if (n == null)
    return t.__ ? le(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var e; n < t.__k.length; n++)
    if ((e = t.__k[n]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? le(t) : null;
}
function St(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return St(t);
  }
}
function ut(t) {
  (!t.__d && (t.__d = !0) && ue.push(t) && !xe.__r++ || ft !== C.debounceRendering) && ((ft = C.debounceRendering) || setTimeout)(xe);
}
function xe() {
  for (var t; xe.__r = ue.length; )
    t = ue.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), ue = [], t.some(function(n) {
      var e, s, o, i, r, a;
      n.__d && (r = (i = (e = n).__v).__e, (a = e.__P) && (s = [], (o = Y({}, i)).__v = i.__v + 1, Ge(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? le(i) : r, i.__h), Mt(s, i), i.__e != r && St(i)));
    });
}
function xt(t, n, e, s, o, i, r, a, c, d) {
  var l, _, u, p, g, k, b, y = s && s.__k || wt, v = y.length;
  for (e.__k = [], l = 0; l < n.length; l++)
    if ((p = e.__k[l] = (p = n[l]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Re(null, p, null, null, p) : Array.isArray(p) ? Re(He, { children: p }, null, null, null) : p.__b > 0 ? Re(p.type, p.props, p.key, null, p.__v) : p) != null) {
      if (p.__ = e, p.__b = e.__b + 1, (u = y[l]) === null || u && p.key == u.key && p.type === u.type)
        y[l] = void 0;
      else
        for (_ = 0; _ < v; _++) {
          if ((u = y[_]) && p.key == u.key && p.type === u.type) {
            y[_] = void 0;
            break;
          }
          u = null;
        }
      Ge(t, p, u = u || Se, o, i, r, a, c, d), g = p.__e, (_ = p.ref) && u.ref != _ && (b || (b = []), u.ref && b.push(u.ref, null, p), b.push(_, p.__c || g, p)), g != null ? (k == null && (k = g), typeof p.type == "function" && p.__k === u.__k ? p.__d = c = Ct(p, c, t) : c = Et(t, p, u, y, g, c), typeof e.type == "function" && (e.__d = c)) : c && u.__e == c && c.parentNode != t && (c = le(u));
    }
  for (e.__e = k, l = v; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = le(s, l + 1)), At(y[l], y[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      $t(b[l], b[++l], b[++l]);
}
function Ct(t, n, e) {
  for (var s, o = t.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = t, n = typeof s.type == "function" ? Ct(s, n, e) : Et(e, s, s, o, s.__e, n));
  return n;
}
function Et(t, n, e, s, o, i) {
  var r, a, c;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== t)
        t.appendChild(o), r = null;
      else {
        for (a = i, c = 0; (a = a.nextSibling) && c < s.length; c += 2)
          if (a == o)
            break e;
        t.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Qt(t, n, e, s, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in n || Ce(t, i, null, e[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === n[i] || Ce(t, i, n[i], e[i], s);
}
function pt(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Zt.test(n) ? e : e + "px";
}
function Ce(t, n, e, s, o) {
  var i;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (n in s)
            e && n in e || pt(t.style, n, "");
        if (e)
          for (n in e)
            s && e[n] === s[n] || pt(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + i] = e, e ? s || t.addEventListener(n, i ? _t : gt, i) : t.removeEventListener(n, i ? _t : gt, i);
    else if (n !== "dangerouslySetInnerHTML") {
      if (o)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in t)
        try {
          t[n] = e == null ? "" : e;
          break e;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || n[0] === "a" && n[1] === "r") ? t.setAttribute(n, e) : t.removeAttribute(n));
    }
}
function gt(t) {
  this.l[t.type + !1](C.event ? C.event(t) : t);
}
function _t(t) {
  this.l[t.type + !0](C.event ? C.event(t) : t);
}
function Ge(t, n, e, s, o, i, r, a, c) {
  var d, l, _, u, p, g, k, b, y, v, W, N, T, M = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = n.__e = e.__e, n.__h = null, i = [a]), (d = C.__b) && d(n);
  try {
    e:
      if (typeof M == "function") {
        if (b = n.props, y = (d = M.contextType) && s[d.__c], v = d ? y ? y.props.value : d.__ : s, e.__c ? k = (l = n.__c = e.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(b, v) : (n.__c = l = new te(b, v), l.constructor = M, l.render = tn), y && y.sub(l), l.props = b, l.state || (l.state = {}), l.context = v, l.__n = s, _ = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Y({}, l.__s)), Y(l.__s, M.getDerivedStateFromProps(b, l.__s))), u = l.props, p = l.state, _)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && b !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, v) === !1 || n.__v === e.__v) {
            l.props = b, l.state = l.__s, n.__v !== e.__v && (l.__d = !1), l.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(V) {
              V && (V.__ = n);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, p, g);
          });
        }
        if (l.context = v, l.props = b, l.__v = n, l.__P = t, W = C.__r, N = 0, "prototype" in M && M.prototype.render)
          l.state = l.__s, l.__d = !1, W && W(n), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, W && W(n), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++N < 25);
        l.state = l.__s, l.getChildContext != null && (s = Y(Y({}, s), l.getChildContext())), _ || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(u, p)), T = d != null && d.type === He && d.key == null ? d.props.children : d, xt(t, Array.isArray(T) ? T : [T], n, e, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), k && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = en(e.__e, n, e, s, o, i, r, c);
    (d = C.diffed) && d(n);
  } catch (V) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), C.__e(V, n, e);
  }
}
function Mt(t, n) {
  C.__c && C.__c(n, t), t.some(function(e) {
    try {
      t = e.__h, e.__h = [], t.some(function(s) {
        s.call(e);
      });
    } catch (s) {
      C.__e(s, e.__v);
    }
  });
}
function en(t, n, e, s, o, i, r, a) {
  var c, d, l, _ = e.props, u = n.props, p = n.type, g = 0;
  if (p === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((c = i[g]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        t = c, i[g] = null;
        break;
      }
  }
  if (t == null) {
    if (p === null)
      return document.createTextNode(u);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, u.is && u), i = null, a = !1;
  }
  if (p === null)
    _ === u || a && t.data === u || (t.data = u);
  else {
    if (i = i && Ae.call(t.childNodes), d = (_ = e.props || Se).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (_ = {}, g = 0; g < t.attributes.length; g++)
          _[t.attributes[g].name] = t.attributes[g].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (Qt(t, u, _, o, a), l)
      n.__k = [];
    else if (g = n.props.children, xt(t, Array.isArray(g) ? g : [g], n, e, s, o && p !== "foreignObject", i, r, i ? i[0] : e.__k && le(e, 0), a), i != null)
      for (g = i.length; g--; )
        i[g] != null && Rt(i[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== t.value || p === "progress" && !g || p === "option" && g !== _.value) && Ce(t, "value", g, _.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== t.checked && Ce(t, "checked", g, _.checked, !1));
  }
  return t;
}
function $t(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (s) {
    C.__e(s, e);
  }
}
function At(t, n, e) {
  var s, o;
  if (C.unmount && C.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || $t(s, null, n)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        C.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = t.__k)
    for (o = 0; o < s.length; o++)
      s[o] && At(s[o], n, typeof t.type != "function");
  e || t.__e == null || Rt(t.__e), t.__e = t.__d = void 0;
}
function tn(t, n, e) {
  return this.constructor(t, e);
}
function nn(t, n, e) {
  var s, o, i;
  C.__ && C.__(t, n), o = (s = typeof e == "function") ? null : e && e.__k || n.__k, i = [], Ge(n, t = (!s && e || n).__k = m(He, null, [t]), o || Se, Se, n.ownerSVGElement !== void 0, !s && e ? [e] : o ? null : n.firstChild ? Ae.call(n.childNodes) : null, i, !s && e ? e : o ? o.__e : n.firstChild, s), Mt(i, t);
}
Ae = wt.slice, C = { __e: function(t, n, e, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        t = a;
      }
  throw t;
} }, vt = 0, te.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof t == "function" && (t = t(Y({}, e), this.props)), t && Y(e, t), t != null && this.__v && (n && this.__h.push(n), ut(this));
}, te.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ut(this));
}, te.prototype.render = He, ue = [], xe.__r = 0;
const H = (...t) => t.map((n) => Array.isArray(n) ? H(...n) : typeof n == "function" ? H(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((e) => {
  const s = n[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class qn extends te {
  render() {
    const { size: n, rounded: e, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, d = [s], l = { ...o };
    let _ = null;
    return i ? _ = /* @__PURE__ */ m("img", {
      src: i,
      alt: r
    }) : _ = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && d.push(`avatar-${n}`), typeof e == "string" && d.push(`rounded-${e}`), /* @__PURE__ */ m("div", {
      className: H(d),
      style: l,
      ...c
    }, _, a);
  }
}
const sn = (t) => {
  const n = {};
  if (!t)
    return n;
  const e = Object.values(t.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class on extends HTMLElement {
  constructor() {
    super();
    R(this, "$button");
    R(this, "$icon");
    R(this, "onClick");
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
    const e = sn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", on);
var J, Z;
class mt extends te {
  constructor(e) {
    var s;
    super(e);
    E(this, J, 0);
    E(this, Z, null);
    R(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: s } = this.props, o = e.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && e.preventDefault();
      }
    });
    R(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (f(this, J) && cancelAnimationFrame(f(this, J)), S(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), S(this, J, 0);
      })), e.preventDefault());
    });
    R(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    R(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    R(this, "_handleClick", (e) => {
      const s = e.currentTarget;
      if (!s)
        return;
      const o = s.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: a } = this.props, c = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(c * a / r), e.preventDefault();
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
    const { clientSize: e, scrollSize: s, size: o = 12, minBarSize: i = 3 * o } = this.props;
    return Math.max(Math.round(e * e / s), i);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (S(this, Z, typeof e == "string" ? document : e.current), f(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), f(this, Z) && f(this, Z).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    return e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)), !0);
  }
  scrollOffset(e) {
    return this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    var o;
    const { onScroll: s } = this.props;
    s && s(e, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      clientSize: e,
      type: s,
      size: o = 12,
      className: i,
      style: r,
      left: a,
      top: c,
      bottom: d,
      right: l
    } = this.props, { maxScrollPos: _, scrollPos: u } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: c,
      bottom: d,
      right: l,
      ...r
    }, k = {};
    return s === "horz" ? (g.height = o, g.width = e, k.width = this.barSize, k.left = Math.round(Math.min(_, u) * (e - k.width) / _)) : (g.width = o, g.height = e, k.height = this.barSize, k.top = Math.round(Math.min(_, u) * (e - k.height) / _)), /* @__PURE__ */ m("div", {
      className: H("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": p
      }),
      style: g,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ m("div", {
      className: "scrollbar-bar",
      style: k,
      onMouseDown: this._handleMouseDown
    }));
  }
}
J = new WeakMap(), Z = new WeakMap();
function fe(t, ...n) {
  var e;
  if (n.length === 0)
    return t;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const s = n[0];
    return Object.keys(s).forEach((o) => {
      var r;
      const i = (r = s[o]) != null ? r : 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let s = 0; s < n.length; s++) {
    const o = (e = n[s]) != null ? e : "";
    t = t.replace(new RegExp(`\\{${s}\\}`, "g"), `${o}`);
  }
  return t;
}
var Ue = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Ue || {});
function rn(t, n = 2, e = "") {
  return Number.isNaN(t) ? "?KB" : (e || (t < 1024 ? e = "B" : t < 1048576 ? e = "KB" : t < 1073741824 ? e = "MB" : t < 1099511627776 ? e = "GB" : e = "TB"), (t / Ue[e]).toFixed(n) + e);
}
const ln = (t) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const e = t.match(n);
  if (!e)
    return 0;
  const s = e[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Ue[s];
};
function an(t) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const s = document.createRange();
      return s.selectNodeContents(n), e.removeAllRanges(), e.addRange(s), !0;
    }
  }
  return !1;
}
function cn(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function hn(t, n) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: an,
  domReady: cn,
  isElementVisible: hn,
  classes: H
}, Symbol.toStringTag, { value: "Module" }));
function Ht() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var e;
    (e = n.parentElement) == null || e.classList.remove("open");
  });
}
function dn(t) {
  const n = t.parentElement, e = t.nextElementSibling;
  !n || !e || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Ht(), n.classList.add("open")));
}
document.addEventListener("click", function(t) {
  const e = t.target.closest("[data-toggle=dropdown]");
  e ? dn(e) : Ht();
});
function Ke({ col: t, className: n, height: e, rowID: s, rowData: o, onRenderCell: i, style: r, children: a, ...c }) {
  const { cellStyle: d, align: l, className: _, border: u } = t.setting, p = {
    left: t.left,
    width: t.realWidth,
    height: e,
    justifyContent: l ? l === "left" ? "start" : l === "right" ? "end" : l : void 0,
    ...r,
    ...d
  };
  let g = [
    a != null ? a : o == null ? void 0 : o[t.name]
  ];
  i && (g = i(g, { rowID: s, col: t, rowData: o }, m));
  const k = ["dtable-cell", n, _, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = [];
  g == null || g.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? v.html ? b.push(/* @__PURE__ */ m("div", {
      className: H("dtable-cell-html", v.className),
      style: v.style,
      dangerouslySetInnerHTML: { __html: v.html }
    })) : (v.style && Object.assign(p, v.style), v.className && k.push(v.className)) : b.push(v);
  });
  const y = H(k);
  return /* @__PURE__ */ m("div", {
    className: y,
    style: p,
    "data-col": t.name,
    ...c
  }, b);
}
function fn({ col: t, children: n, style: e, ...s }) {
  var i;
  const { sortType: o } = t.setting;
  return /* @__PURE__ */ m(Ke, {
    col: t,
    style: { ...e, ...t.setting.style },
    "data-sort": o || null,
    "data-type": t.type,
    ...s
  }, (i = t.setting.title) != null ? i : t.setting.name, o && /* @__PURE__ */ m("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function je({ rowID: t, className: n, top: e = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = Ke, onRenderCell: d }) {
  return /* @__PURE__ */ m("div", {
    className: H("dtable-cells", n),
    style: { top: e, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ m(c, {
    key: l.name,
    col: l,
    rowData: a,
    rowID: t,
    onRenderCell: d
  }) : null));
}
function Lt({
  rowID: t,
  className: n,
  top: e,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: d,
  flexRightWidth: l,
  scrollLeft: _,
  CellComponent: u = Ke,
  onRenderCell: p,
  data: g,
  style: k,
  ...b
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(je, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: t,
    CellComponent: u,
    onRenderCell: p,
    data: g
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ m(je, {
    className: "dtable-flexable",
    cols: r,
    left: a - _,
    width: d,
    rowID: t,
    CellComponent: u,
    onRenderCell: p,
    data: g
  }));
  let W = null;
  i != null && i.length && (W = /* @__PURE__ */ m(je, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: t,
    CellComponent: u,
    onRenderCell: p,
    data: g
  }));
  const N = { top: e, height: s, lineHeight: `${s - 2}px`, ...k };
  return /* @__PURE__ */ m("div", {
    className: H("dtable-row", n),
    style: N,
    "data-id": t,
    ...b
  }, y, v, W);
}
function un({ height: t, onRenderRow: n, ...e }) {
  const s = {
    height: t,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: fn
  };
  if (n) {
    const o = n({ props: s }, m);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ m("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ m(Lt, {
    ...s
  }));
}
function pn({
  className: t,
  style: n,
  top: e,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return n = { ...n, top: e, height: o }, /* @__PURE__ */ m("div", {
    className: H("dtable-rows", t),
    style: n
  }, s.map((c) => {
    const d = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    };
    if (r) {
      const l = r({ props: d, row: c }, m);
      l && Object.assign(d, l);
    }
    return /* @__PURE__ */ m(Lt, {
      ...d
    });
  }));
}
const Ee = /* @__PURE__ */ new Map();
function Nt(t, n = !1) {
  if (!n && Ee.has(t.name))
    throw new Error(`DTable: Plugin with name ${t.name} already exists`);
  Ee.set(t.name, t);
}
function ae(t, n = !1) {
  Nt(t, n);
  const e = (s) => {
    if (!s)
      return t;
    const { defaultOptions: o, ...i } = t;
    return {
      ...i,
      defaultOptions: { ...o, ...s }
    };
  };
  return e.plugin = t, e;
}
function bt(t) {
  return Ee.get(t);
}
function zt(t) {
  return Ee.delete(t);
}
function gn(t) {
  const n = /* @__PURE__ */ new Map();
  return [t == null ? void 0 : t.plugins].flat().reduce((e, s) => {
    var i;
    if (!s)
      return e;
    let o;
    return typeof s == "string" ? (o = bt(s), o || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? o = s.plugin : typeof s == "object" ? o = s : console.warn("DTable: Invalid plugin", s), o && !n.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (n.has(r))
        return;
      const a = bt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      e.push(a), n.set(a.name, a);
    }), e.push(o), n.set(o.name, o)), e;
  }, []);
}
function _n(t, n) {
  return t.reduce((e, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, n);
}
function Oe() {
  return {
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
var Q, U, x, ee, A, oe, pe;
class Ie extends te {
  constructor(e) {
    super(e);
    R(this, "ref", kt());
    E(this, Q, 0);
    E(this, U, !1);
    E(this, x, void 0);
    E(this, ee, void 0);
    E(this, A, []);
    E(this, oe, void 0);
    E(this, pe, !1);
    R(this, "_handleResize", () => {
      f(this, Q) && cancelAnimationFrame(f(this, Q)), S(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), S(this, Q, 0);
      }));
    });
    R(this, "_handleRenderRow", (e, s) => {
      if (f(this, x).onRenderRow) {
        const o = f(this, x).onRenderRow.call(this, e, s);
        o && Object.assign(e.props, o);
      }
      return f(this, A).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, e, s);
          i && Object.assign(e.props, i);
        }
      }), e.props;
    });
    R(this, "_handleRenderHeaderRow", (e, s) => (f(this, x).onRenderHeaderRow && (e.props = f(this, x).onRenderHeaderRow.call(this, e, s)), f(this, A).forEach((o) => {
      o.onRenderHeaderRow && (e.props = o.onRenderHeaderRow.call(this, e, s));
    }), e.props));
    R(this, "_handleRenderCell", (e, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (e = r.setting[a].call(this, e, s, o)), f(this, x)[a] && (e = f(this, x)[a].call(this, e, s, o)), f(this, A).forEach((c) => {
        c[a] && (e = c[a].call(this, e, s, o));
      }), e;
    });
    R(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    R(this, "_handleClick", (e) => {
      var c, d, l, _, u, p, g, k;
      const s = e.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (d = o.getAttribute("data-id")) != null ? d : "";
      if (a === "HEADER")
        i && ((l = f(this, x).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), f(this, A).forEach((b) => {
          var y;
          (y = b.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: i });
        }));
      else {
        const b = (_ = f(this, oe)) == null ? void 0 : _.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((u = f(this, x).onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const y of f(this, A))
            if (((p = y.onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((g = f(this, x).onRowClick) == null ? void 0 : g.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const y of f(this, A))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
            return;
      }
    });
    R(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: s } = f(this, x);
      if (!s)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || s === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : !1;
      this._applyColHover(i);
    });
    R(this, "_handleMouseLeave", () => {
      this._applyColHover(!1);
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...Oe(), ...e };
    S(this, x, Object.freeze(s)), S(this, ee, Object.freeze(gn(s))), f(this, ee).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return f(this, x);
  }
  get plugins() {
    return f(this, A);
  }
  get layout() {
    return f(this, oe);
  }
  componentDidMount() {
    f(this, U) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), f(this, x).responsive && window.addEventListener("resize", this._handleResize), f(this, A).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    f(this, U) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: e } = this.ref;
    e && (e.removeEventListener("click", this._handleClick), f(this, x).colHover && (e.removeEventListener("mouseover", this._handleMouseOver), e.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), f(this, A).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = f(this, x).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = f(this, x).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var et, tt, nt, st;
    const e = Oe(), s = _n(f(this, ee), { ...e, ...this.props }), o = f(this, ee).filter((h) => !h.when || h.when(s));
    S(this, A, Object.freeze(o)), o.forEach((h) => {
      var $;
      const w = ($ = h.beforeLayout) == null ? void 0 : $.call(this, s);
      w && Object.assign(s, w);
    }), S(this, x, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: d = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = s, _ = i ? s.headerHeight || a : 0, u = r ? s.footerHeight || a : 0, p = (h, w, $) => (h && (w && (h = Math.max(w, h)), $ && (h = Math.min($, h))), h), g = [], k = [], b = [];
    let y = 0, v = 0, W = 0;
    (et = s.cols) == null || et.forEach((h) => {
      var ot, it, rt;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: w = d, maxWidth: $ = l } = h, D = p((ot = h.width) != null ? ot : 0, w, $), q = (it = h.flex) != null ? it : 1, be = q * p(c, w, $), G = {
        name: h.name,
        type: (rt = h.type) != null ? rt : "",
        setting: h,
        left: 0,
        flex: q,
        realWidth: D,
        flexWidth: be,
        visible: !0,
        index: W++
      };
      h.fixed === "left" ? (G.left = y, y += D, g.push(G)) : h.fixed === "right" ? (G.left = v, v += D, k.push(G)) : b.push(G), o.forEach((lt) => {
        var at, ct, ht;
        const ye = (ct = lt.colTypes) == null ? void 0 : ct[(at = h.type) != null ? at : ""];
        if (ye) {
          const dt = typeof ye == "function" ? ye(h) : ye;
          dt && Object.assign(h, dt);
        }
        (ht = lt.onAddCol) == null || ht.call(this, G);
      });
    });
    let N = s.width, T = 0;
    if (typeof N == "function" && (N = N()), N === "auto")
      T = y + v, b.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), T += h.realWidth;
      });
    else if (N === "100%") {
      const h = (tt = this.ref.current) == null ? void 0 : tt.parentElement;
      if (h)
        T = h.clientWidth;
      else {
        T = 0, S(this, U, !0);
        return;
      }
    } else
      T = N != null ? N : 0;
    const { data: M, rowKey: V = "id" } = s, he = [], Le = (h, w, $) => {
      var q, be;
      const D = { data: $ != null ? $ : { [V]: h }, top: he.length * a, id: h, index: he.length };
      if ($ || (D.lazy = !0), he.push(D), ((q = s.onAddRow) == null ? void 0 : q.call(this, D, w)) !== !1) {
        for (const G of o)
          if (((be = G.onAddRow) == null ? void 0 : be.call(this, D, w)) === !1)
            return;
      }
    };
    if (typeof M == "number")
      for (let h = 0; h < M; h++)
        Le(h, h);
    else
      Array.isArray(M) && M.forEach((h, w) => {
        typeof h == "object" ? Le(h[V], w, h) : Le(h, w);
      });
    let Ne = !1, I = he;
    if (s.onAddRows) {
      const h = s.onAddRows.call(this, I);
      h && (I = h, Ne = !0);
    }
    for (const h of o) {
      const w = (nt = h.onAddRows) == null ? void 0 : nt.call(this, I);
      w && (I = w, Ne = !0);
    }
    Ne && I.forEach((h, w) => {
      h.index = w, h.top = w * a;
    });
    let B = s.height, X = 0;
    const ze = I.length * a, Te = _ + u + ze;
    if (typeof B == "function" && (B = B(Te)), B === "auto")
      X = Te;
    else if (typeof B == "object")
      X = Math.min(B.max, Math.max(B.min, Te));
    else if (B === "100%") {
      const h = (st = this.ref.current) == null ? void 0 : st.parentElement;
      if (h)
        X = h.clientHeight;
      else {
        X = 0, S(this, U, !0);
        return;
      }
    } else
      X = B;
    let { scrollTop: ne = 0, scrollLeft: de = 0 } = this.state;
    const We = X - _ - u;
    ne = Math.min(Math.max(0, ze - We), ne);
    const Ve = ne + We, Xe = [], me = T - y - v;
    let F = 0;
    const De = [];
    let Je = 0;
    if (b.forEach((h) => {
      h.realWidth ? F += h.realWidth : (De.push(h), Je += h.flex);
    }), De.length) {
      const h = Math.max(0, me - F);
      De.forEach((w) => {
        var q;
        const { minWidth: $ = d, maxWidth: D = l } = w.setting;
        w.realWidth = Math.min(D, Math.max($, Math.ceil(h * ((q = w.flex) != null ? q : 1) / Je))), F += w.realWidth;
      });
    }
    F = 0, b.forEach((h) => {
      h.left += F, F += h.realWidth, (h.left + h.realWidth < de || h.left > de + me) && (h.visible = !1);
    }), de = Math.min(Math.max(0, F - me), de);
    const Ze = Math.floor(ne / a), Qe = Math.min(I.length, Math.ceil(Ve / a)), Vt = [];
    for (let h = Ze; h < Qe; h++) {
      const w = I[h];
      w.top -= ne, Xe.push(w), w.lazy === !0 && Vt.push(w.id);
    }
    let se = {
      allRows: he,
      width: T,
      height: X,
      rows: I,
      visibleRows: Xe,
      rowHeight: a,
      rowsHeight: We,
      rowsHeightTotal: ze,
      header: i,
      footer: r,
      headerHeight: _,
      footerHeight: u,
      colsInfo: {
        fixedLeftCols: g,
        fixedRightCols: k,
        scrollCols: b,
        flexLeftWidth: y,
        scrollWidth: me,
        scrollWidthTotal: F,
        flexRightWidth: v
      },
      scrollBottom: Ve,
      scrollTop: ne,
      scrollLeft: de,
      startRowIndex: Ze,
      endRowIndex: Qe
    };
    if (s.onLayout) {
      const h = s.onLayout.call(this, se);
      h && (se = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const w = h.onLayout.call(this, se);
        w && (se = w);
      }
    }), S(this, oe, Object.freeze(se)), se;
  }
  getColInfo(e) {
    var o, i;
    const { layout: s } = this;
    if (!!s)
      return (i = (o = s.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? o : s.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? i : s.colsInfo.scrollCols.find((r) => r.name === e);
  }
  getRowInfo(e) {
    return this.layout.rows.find((s) => s.id === e);
  }
  getRowInfoByIndex(e) {
    return this.layout.rows[e];
  }
  renderHeader(e) {
    const { header: s, colsInfo: o, headerHeight: i } = e;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ m(un, {
        scrollLeft: this.state.scrollLeft,
        height: i,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...o
      });
    let r, a;
    if (typeof s == "function") {
      const c = s(e, this.state);
      typeof c == "object" && c && "__html" in c ? a = c : r = c;
    } else
      r = s;
    return /* @__PURE__ */ m("div", {
      className: "dtable-header",
      style: { height: i },
      dangerouslySetInnerHTML: a
    }, r);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = e;
    return /* @__PURE__ */ m(pn, {
      top: s,
      height: o,
      rows: i,
      rowHeight: r,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...a
    });
  }
  renderFooter(e) {
    const { footer: s, footerHeight: o } = e;
    if (!s)
      return null;
    let i, r;
    if (typeof s == "function") {
      const a = s(e, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : i = a;
    } else
      i = s;
    return /* @__PURE__ */ m("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(e) {
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: d, scrollWidth: l } = i, { scrollbarSize: _ = 12, horzScrollbarPos: u } = this.props;
    return d > l && s.push(/* @__PURE__ */ m(mt, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: d,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: u === "inside" ? 0 : -_,
      size: _,
      wheelContainer: this.ref
    })), c > a && s.push(/* @__PURE__ */ m(mt, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: _,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    S(this, U, !1), (e = f(this, x).afterRender) == null || e.call(this), f(this, A).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  _applyColHover(e) {
    e !== void 0 ? S(this, pe, e) : e = f(this, pe);
    const { current: s } = this.ref;
    if (!s)
      return;
    const o = "dtable-col-hover";
    s.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && s.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
  }
  render() {
    var _, u;
    const e = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: d } = (_ = f(this, x)) != null ? _ : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ m("div", {
      className: H("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((u = e == null ? void 0 : e.scrollTop) != null ? u : 0) > 0,
        "scrollbar-hover": d
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
Q = new WeakMap(), U = new WeakMap(), x = new WeakMap(), ee = new WeakMap(), A = new WeakMap(), oe = new WeakMap(), pe = new WeakMap(), R(Ie, "addPlugin", Nt), R(Ie, "removePlugin", zt);
function mn(t, n) {
  var r, a;
  typeof t == "boolean" && (n = t, t = void 0);
  const e = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (c, d) => {
    o && !o.call(this, c) || !!e[c] === d || (d ? e[c] = !0 : delete e[c], s[c] = d);
  };
  if (t === void 0 ? (n === void 0 && (n = !Tt.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: c }) => {
    i(c, !!n);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((c) => {
    i(c, n != null ? n : !e[c]);
  })), Object.keys(s).length) {
    const c = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, t, s, e);
    c && Object.keys(c).forEach((d) => {
      c[d] ? e[d] = !0 : delete e[d];
    }), this.setState({ checkedRows: { ...e } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, s);
    });
  }
  return s;
}
function bn(t) {
  var n;
  return (n = this.state.checkedRows[t]) != null ? n : !1;
}
function Tt() {
  var e, s;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((e = this.layout) == null ? void 0 : e.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : t === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function yn() {
  return Object.keys(this.state.checkedRows);
}
const Wt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = mn.bind(this), this.isRowChecked = bn.bind(this), this.isAllRowChecked = Tt.bind(this), this.getChecks = yn.bind(this);
  },
  onRenderCell(t, { rowID: n, col: e }) {
    var r, a;
    const { canRowCheckable: s } = this.options;
    if (s && !s.call(this, n))
      return t;
    const { checkbox: o } = e.setting;
    if (typeof o == "function" ? o.call(this, n) : o) {
      const c = this.isRowChecked(n), d = (a = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, c, n)) != null ? a : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: c
      });
      t.unshift(d), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { rowID: n, col: e }) {
    var i, r;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isAllRowChecked(), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: a
      });
      t.unshift(c), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: H(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const n = t.target;
    if (!n)
      return;
    const e = n.closest('input[type="checkbox"],.dtable-checkbox');
    e && this.toggleCheckRows(e.checked);
  },
  onRowClick(t, { rowID: n }) {
    const e = t.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(n);
  }
};
ae(Wt);
var Dt = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Dt || {});
function Be(t) {
  const n = this.nestedMap.get(t);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const e = this.state.collapsedRows, s = n.children && e && e[t];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = Be.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Be.call(this, n.parent).level + 1 : 0, n;
}
function vn(t, n) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (t === "HEADER")
    if (n === void 0 && (n = !Pt.call(this)), n) {
      const o = this.nestedMap.entries();
      for (const [i, r] of o)
        r.state === "expanded" && (e[i] = !0);
    } else
      e = {};
  else {
    const o = Array.isArray(t) ? t : [t];
    n === void 0 && (n = !e[o[0]]), o.forEach((i) => {
      const r = this.nestedMap.get(i);
      n && (r == null ? void 0 : r.children) ? e[i] = !0 : delete e[i];
    });
  }
  this.setState({ collapsedRows: { ...e } }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function Pt() {
  const t = this.nestedMap.values();
  for (const n of t)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function jt(t, n = 0, e, s = 0) {
  var o;
  e || (e = [...t.keys()]);
  for (const i of e) {
    const r = t.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = jt(t, n, r.children, s + 1)));
  }
  return n;
}
function Ot(t, n, e, s) {
  const o = t.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = e, Ot(t, i, e, s);
  }), o;
}
function It(t, n, e, s, o) {
  var a;
  const i = t.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((a = i.children) == null ? void 0 : a.every((c) => {
    const d = !!(s[c] !== void 0 ? s[c] : o[c]);
    return e === d;
  })) && (s[n] = e), i.parent && It(t, i.parent, e, s, o);
}
const Bt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, n) {
      const e = this.nestedMap.get(t.id), s = this.nestedMap.get(n.id);
      return (e == null ? void 0 : e.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(t, n, e) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const s = {};
      return Object.entries(n).forEach(([o, i]) => {
        const r = Ot(this, o, i, s);
        r != null && r.parent && It(this, r.parent, i, s, e);
      }), s;
    }
  },
  when: (t) => !!t.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = vn.bind(this), this.isAllCollapsed = Pt.bind(this), this.getNestedRowInfo = Be.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(t) {
    var s, o, i;
    const n = t.data[(s = this.options.nestedParentKey) != null ? s : "parent"], e = (o = this.nestedMap.get(t.id)) != null ? o : {
      state: "",
      level: 0
    };
    if (e.parent = n, t.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (e.children = []), this.nestedMap.set(t.id, e), n) {
      let r = this.nestedMap.get(n);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(n, r)), r.children || (r.children = []), r.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), jt(this.nestedMap), t.sort((n, e) => {
      var r, a;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(e.id), i = ((r = s.order) != null ? r : 0) - ((a = o.order) != null ? a : 0);
      return i === 0 ? n.index - e.index : i;
    }), t;
  },
  onRenderCell(t, { rowID: n, col: e, rowData: s }) {
    var r, a, c;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && t.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, e, s)) != null ? a : /* @__PURE__ */ m("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ m("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: d = o } = e.setting;
      d && (d === !0 && (d = (c = this.options.nestedIndent) != null ? c : 12), t.unshift(/* @__PURE__ */ m("div", {
        className: "dtable-nested-indent",
        style: { width: d * i.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, { rowID: n, col: e }) {
    var s, o;
    return e.setting.nestedToggle && t.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, n, e, void 0)) != null ? o : /* @__PURE__ */ m("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ m("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow({ props: t, row: n }) {
    const e = this.getNestedRowInfo(n.id);
    return {
      className: H(t.className, `is-nested-${e.state}`),
      "data-parent": e.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = H(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const n = t.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: n }) {
    const e = t.target;
    if (!(!e || !this.getNestedRowInfo(n).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
};
ae(Bt);
const O = 24 * 60 * 60 * 1e3, L = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), ce = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()), Fe = (t, n = new Date()) => L(t).getFullYear() === L(n).getFullYear(), Ft = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth()), wn = (t, n = new Date()) => {
  t = L(t), n = L(n);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / e), o = Math.floor(n.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Rn = (t, n) => ce(L(n), t), kn = (t, n) => ce(L(n).getTime() - O, t), Sn = (t, n) => ce(L(n).getTime() + O, t), xn = (t, n) => ce(L(n).getTime() - 2 * O, t), Me = (t, n = "yyyy-MM-dd hh:mm") => {
  t = L(t);
  const e = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((s) => {
    if (new RegExp(`(${s})`).test(n)) {
      const o = `${e[s]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, Cn = (t, n, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Me(t, Fe(t) ? s.month : s.full);
  if (ce(t, n))
    return o;
  const i = Me(n, Fe(t, n) ? Ft(t, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, En = (t) => {
  const n = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return n - O * 7;
    case "oneMonth":
      return n - O * 31;
    case "threeMonth":
      return n - O * 31 * 3;
    case "halfYear":
      return n - O * 183;
    case "oneYear":
      return n - O * 365;
    case "twoYear":
      return n - 2 * (O * 365);
    default:
      return 0;
  }
}, qe = (t, n, e = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return t *= 365, qe(t, "day", e, s);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, qe(t, "day", e, s);
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
  return e ? s + t : s - t;
};
const qt = {
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
      onRenderCell(t, { col: n, rowData: e }) {
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = fe(s, e);
        return t[0] = /* @__PURE__ */ m("a", {
          href: i,
          ...o
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: n, rowData: e }) {
        const { avatarWithName: s, avatarClass: o = "size-sm circle", avatarKey: i = `${n.name}Avatar` } = n.setting, r = /* @__PURE__ */ m("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ m("img", {
          src: e ? e[i] : ""
        }));
        return s ? t.unshift(r) : t[0] = r, t;
      }
    },
    circleProgress: {
      onRenderCell(t, { col: n }) {
        const { circleSize: e = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-green-500)" } = n.setting, r = (e - s) / 2, a = e / 2, c = t[0];
        return t[0] = /* @__PURE__ */ m("svg", {
          width: e,
          height: e
        }, /* @__PURE__ */ m("circle", {
          cx: a,
          cy: a,
          r,
          "stroke-width": s,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ m("circle", {
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
        }), /* @__PURE__ */ m("text", {
          x: a,
          y: a + s,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${r}px` }
        }, Math.round(c))), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: n, rowData: e }) {
        const s = e == null ? void 0 : e[n.name];
        if (!s)
          return t;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((a) => {
            typeof a == "string" && (a = { action: a });
            const c = i[a.action];
            return c && (a = { className: r, ...c, ...a }), fe(o, a);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: n }) {
        let { format: e } = n.setting;
        if (!e)
          return t;
        typeof e == "string" && (e = { type: "text", format: e });
        const { format: s, type: o } = e, i = t[0];
        return typeof s == "function" ? t[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? t[0] = Me(i, s) : o === "html" ? t[0] = { html: fe(s, i) } : t[0] = fe(s, i), t;
      }
    }
  }
};
ae(qt);
const Gt = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  onCreate() {
    this.headerGroups = /* @__PURE__ */ new Map();
  },
  when: (t) => !!t.headerGroup,
  beforeLayout(t) {
    const { headerGroups: n } = this;
    n.clear();
    const { cols: e } = t;
    if (!(e != null && e.length))
      return;
    const s = {};
    return e.forEach((o, i) => {
      const { group: r } = o;
      if (!r) {
        s[o.name] = i;
        return;
      }
      let a = this.headerGroups.get(r);
      a ? a.cols.push(o.name) : (a = { cols: [o.name], index: i }, this.headerGroups.set(r, a)), s[o.name] = a.index + a.cols.length / e.length;
    }), e.sort((o, i) => s[o.name] - s[i.name]), {
      headerHeight: !t.headerHeight && t.rowHeight ? t.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(t, { col: n }) {
    const { group: e } = n.setting;
    if (e) {
      const s = this.headerGroups.get(e), o = this.layout.headerHeight / 2;
      if (n.name === s.cols[0]) {
        const i = s.cols.reduce((a, c) => {
          var d, l;
          return a + ((l = (d = this.getColInfo(c)) == null ? void 0 : d.realWidth) != null ? l : 0);
        }, 0), r = {
          height: o - 1,
          width: i - 1
        };
        t.push(/* @__PURE__ */ m("div", {
          class: "dtable-header-group",
          style: r
        }, e));
      }
      t.push({
        className: "dtable-header-as-group",
        style: { paddingTop: o }
      });
    }
    return t;
  }
};
ae(Gt);
function Ut(t, n) {
  var s, o;
  const e = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!e)
    return t.getRowInfo(e);
}
function Mn(t) {
  var e, s;
  const n = Ut(this, t);
  if (!(!t.dataTransfer || !n || ((e = this.options.onBeginSort) == null ? void 0 : e.call(this, n, t)) === !1))
    return this.setState({ draggingRow: n }), t.dataTransfer.effectAllowed = "move", t.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function $n(t) {
  var o, i;
  const { draggingRow: n, droppingRow: e, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, e, s);
}
function An(t) {
  var o;
  const n = Ut(this, t), { draggingRow: e } = this.state;
  if (!n || !e || n.id === e.id)
    return;
  const s = e.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, e, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function Hn(t) {
  return t.preventDefault(), !0;
}
function Ln(t) {
  var o;
  const { draggingRow: n, droppingRow: e, moveType: s } = this.state;
  if (n && e && s && n.id !== e.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((u) => r.call(this, u)));
    const a = i.findIndex((u) => u.id === n.id), c = i.findIndex((u) => u.id === e.id), d = i.splice(a, 1);
    i.splice(c, 0, d[0]);
    const l = {}, _ = [];
    i.forEach(({ id: u }, p) => {
      l[u] = p, _.push(u);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, e, s, _);
  }
}
const Kt = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (t) => !!t.sortable,
  onCreate() {
    this.onSortDragStart = Mn.bind(this), this.onSortDragEnd = $n.bind(this), this.onSortDragEnter = An.bind(this), this.onSortDragOver = Hn.bind(this), this.onSortDrop = Ln.bind(this);
  },
  onMounted() {
    const { current: t } = this.ref;
    t && (t.addEventListener("dragstart", this.onSortDragStart), t.addEventListener("dragend", this.onSortDragEnd), t.addEventListener("dragenter", this.onSortDragEnter), t.addEventListener("dragover", this.onSortDragOver), t.addEventListener("drop", this.onSortDrop));
  },
  beforeLayout() {
  },
  onAddRows(t) {
    const { rowOrders: n } = this.state;
    if (!!n)
      return t.sort((e, s) => n[e.id] - n[s.id]);
  },
  onRenderRow({ props: t, row: n }) {
    var c;
    const { draggingRow: e, droppingRow: s } = this.state, o = n.id === (e == null ? void 0 : e.id), i = n.id === (s == null ? void 0 : s.id), r = [t.className, {
      "is-dragging": o,
      "is-dropping": i
    }];
    let a = 0;
    return s && e && (o ? a = s.top - n.top : e.index > n.index && n.index >= s.index ? (r.push("bg-red"), a = this.layout.rowHeight) : e.index < n.index && n.index <= s.index && (a -= this.layout.rowHeight)), {
      className: r,
      style: { ...t.style, transform: a ? `translateY(${a}px)` : void 0 },
      draggable: ((c = this.options.canSort) == null ? void 0 : c.call(this, n)) !== !1
    };
  }
};
ae(Kt);
const Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Wt,
  NestedRowState: Dt,
  nested: Bt,
  rich: qt,
  headerGroup: Gt,
  sortable: Kt
}, Symbol.toStringTag, { value: "Module" }));
var ge;
class we {
  constructor(n, e) {
    R(this, "element");
    R(this, "options");
    E(this, ge, kt());
    var s;
    this.element = n, this.options = { ...Oe(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return f(this, ge).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), nn(/* @__PURE__ */ m(Ie, {
      ref: f(this, ge),
      ...this.options
    }), this.element);
  }
}
ge = new WeakMap(), R(we, "NAME", "zui.dtable"), R(we, "definePlugin", ae), R(we, "removePlugin", zt), R(we, "plugins", Nn);
let zn = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((n, e) => (e &= 63, e < 36 ? n += e.toString(36) : e < 62 ? n += (e - 26).toString(36).toUpperCase() : e > 62 ? n += "-" : n += "_", n), "");
var _e, K, P, ie, re, ke;
const Ye = class {
  constructor(n, e = "local") {
    E(this, re);
    E(this, _e, void 0);
    E(this, K, void 0);
    E(this, P, void 0);
    E(this, ie, void 0);
    S(this, _e, e), S(this, K, `ZUI_STORE:${n != null ? n : zn()}`), S(this, P, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return f(this, _e);
  }
  get session() {
    return this.type === "session" ? this : (f(this, ie) || S(this, ie, new Ye(f(this, K), "session")), f(this, ie));
  }
  get(n, e) {
    const s = f(this, P).getItem(ve(this, re, ke).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(n, e) {
    if (e == null)
      return this.remove(n);
    f(this, P).setItem(ve(this, re, ke).call(this, n), JSON.stringify(e));
  }
  remove(n) {
    f(this, P).removeItem(ve(this, re, ke).call(this, n));
  }
  each(n) {
    for (let e = 0; e < f(this, P).length; e++) {
      const s = f(this, P).key(e);
      if (s != null && s.startsWith(f(this, K))) {
        const o = f(this, P).getItem(s);
        typeof o == "string" && n(s.substring(f(this, K).length + 1), JSON.parse(o));
      }
    }
  }
  getAll() {
    const n = {};
    return this.each((e, s) => {
      n[e] = s;
    }), n;
  }
};
let $e = Ye;
_e = new WeakMap(), K = new WeakMap(), P = new WeakMap(), ie = new WeakMap(), re = new WeakSet(), ke = function(n) {
  return `${f(this, K)}:${n}`;
};
const Tn = new $e("DEFAULT");
function Wn(t, n = "local") {
  return new $e(t, n);
}
Object.assign(Tn, { create: Wn });
function Dn() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function Pn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function jn(t, n) {
  Dn(), t.classList.add("block"), yt(t, n), t.onclick = (e) => On(e, t), window.addEventListener("resize", () => {
    yt(t, n);
  });
}
function Yt(t) {
  var n;
  Pn(), (n = t.classList) == null || n.remove("block");
}
function yt(t, n) {
  const e = t.querySelector(".modal-dialog");
  if (!e)
    return;
  const s = Math.max(0, (window.innerHeight - e.clientHeight) / 2);
  if (n === "fit") {
    e.style.top = `${s > 50 ? Math.floor(s * 2 / 3) : s}px`;
    return;
  }
  if (n === "center") {
    e.style.top = `${s}px`;
    return;
  }
  e.style.top = n;
}
function On(t, n) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), Yt(n));
}
function In(t) {
  var n, e;
  return t instanceof HTMLAnchorElement ? (e = (n = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : e.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const n = t.target, e = n.closest("[data-toggle=modal]");
  if (e) {
    const s = In(e);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    jn(o, e.dataset.position || "fit");
  } else
    n.className.includes("modal") && Yt(n);
});
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: O,
  createDate: L,
  isSameDay: ce,
  isSameYear: Fe,
  isSameMonth: Ft,
  isSameWeek: wn,
  isToday: Rn,
  isYesterday: kn,
  isTomorrow: Sn,
  isDBY: xn,
  formatDate: Me,
  formatDateSpan: Cn,
  getTimeBeforeDesc: En,
  calculateTimestamp: qe,
  formatString: fe,
  formatBytes: rn,
  convertBytes: ln
}, Symbol.toStringTag, { value: "Module" }));
var j, z;
class Bn {
  constructor(n) {
    E(this, j, void 0);
    E(this, z, void 0);
    S(this, j, n), S(this, z, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement), this.addActive(f(this, z).parentElement, f(this, z)), f(this, z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    S(this, z, f(this, j)), this.addActive(f(this, z).parentElement, f(this, z)), S(this, j, document.querySelector(`[href='#${f(this, z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${f(this, z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${f(this, z).getAttribute("id")}']`)), this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement);
  }
  addActive(n, e) {
    const s = n.children;
    Array.from(s).forEach((i) => {
      i.classList.remove("active"), i.classList.contains("fade") && i.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && this.transition(e).then(function(i) {
      e.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(e, s) {
      setTimeout(() => {
        n.classList.add("in"), e();
      }, 100);
    });
  }
}
j = new WeakMap(), z = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Bn(t.target).showTarget());
});
export {
  qn as Avatar,
  we as DTable,
  Bn as NavTabs,
  mt as Scrollbar,
  Gn as browser,
  Nn as dtablePlugins,
  Un as helpers,
  Tn as store
};
