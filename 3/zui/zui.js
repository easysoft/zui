var Ut = Object.defineProperty;
var Kt = (t, n, e) => n in t ? Ut(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var R = (t, n, e) => (Kt(t, typeof n != "symbol" ? n + "" : n, e), e), We = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var d = (t, n, e) => (We(t, n, "read from private field"), e ? e.call(t) : n.get(t)), E = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, k = (t, n, e, s) => (We(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var be = (t, n, e) => (We(t, n, "access private method"), e);
var Me, x, yt, he, dt, Re = {}, vt = [], Yt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Y(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function wt(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function b(t, n, e) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Me.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      r[i] === void 0 && (r[i] = t.defaultProps[i]);
  return ve(t, r, s, o, null);
}
function ve(t, n, e, s, o) {
  var i = { type: t, props: n, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++yt : o };
  return o == null && x.vnode != null && x.vnode(i), i;
}
function Rt() {
  return { current: null };
}
function $e(t) {
  return t.children;
}
function te(t, n) {
  this.props = t, this.context = n;
}
function re(t, n) {
  if (n == null)
    return t.__ ? re(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var e; n < t.__k.length; n++)
    if ((e = t.__k[n]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? re(t) : null;
}
function kt(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return kt(t);
  }
}
function ft(t) {
  (!t.__d && (t.__d = !0) && he.push(t) && !ke.__r++ || dt !== x.debounceRendering) && ((dt = x.debounceRendering) || setTimeout)(ke);
}
function ke() {
  for (var t; ke.__r = he.length; )
    t = he.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), he = [], t.some(function(n) {
      var e, s, o, i, r, a;
      n.__d && (r = (i = (e = n).__v).__e, (a = e.__P) && (s = [], (o = Y({}, i)).__v = i.__v + 1, Fe(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? re(i) : r, i.__h), Et(s, i), i.__e != r && kt(i)));
    });
}
function St(t, n, e, s, o, i, r, a, c, p) {
  var l, m, u, f, g, w, y, _ = s && s.__k || vt, C = _.length;
  for (e.__k = [], l = 0; l < n.length; l++)
    if ((f = e.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ve(null, f, null, null, f) : Array.isArray(f) ? ve($e, { children: f }, null, null, null) : f.__b > 0 ? ve(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = e, f.__b = e.__b + 1, (u = _[l]) === null || u && f.key == u.key && f.type === u.type)
        _[l] = void 0;
      else
        for (m = 0; m < C; m++) {
          if ((u = _[m]) && f.key == u.key && f.type === u.type) {
            _[m] = void 0;
            break;
          }
          u = null;
        }
      Fe(t, f, u = u || Re, o, i, r, a, c, p), g = f.__e, (m = f.ref) && u.ref != m && (y || (y = []), u.ref && y.push(u.ref, null, f), y.push(m, f.__c || g, f)), g != null ? (w == null && (w = g), typeof f.type == "function" && f.__k === u.__k ? f.__d = c = xt(f, c, t) : c = Ct(t, f, u, _, g, c), typeof e.type == "function" && (e.__d = c)) : c && u.__e == c && c.parentNode != t && (c = re(u));
    }
  for (e.__e = w, l = C; l--; )
    _[l] != null && (typeof e.type == "function" && _[l].__e != null && _[l].__e == e.__d && (e.__d = re(s, l + 1)), $t(_[l], _[l]));
  if (y)
    for (l = 0; l < y.length; l++)
      Mt(y[l], y[++l], y[++l]);
}
function xt(t, n, e) {
  for (var s, o = t.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = t, n = typeof s.type == "function" ? xt(s, n, e) : Ct(e, s, s, o, s.__e, n));
  return n;
}
function Ct(t, n, e, s, o, i) {
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
function Vt(t, n, e, s, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in n || Se(t, i, null, e[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === n[i] || Se(t, i, n[i], e[i], s);
}
function ut(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Yt.test(n) ? e : e + "px";
}
function Se(t, n, e, s, o) {
  var i;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (n in s)
            e && n in e || ut(t.style, n, "");
        if (e)
          for (n in e)
            s && e[n] === s[n] || ut(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + i] = e, e ? s || t.addEventListener(n, i ? gt : pt, i) : t.removeEventListener(n, i ? gt : pt, i);
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
function pt(t) {
  this.l[t.type + !1](x.event ? x.event(t) : t);
}
function gt(t) {
  this.l[t.type + !0](x.event ? x.event(t) : t);
}
function Fe(t, n, e, s, o, i, r, a, c) {
  var p, l, m, u, f, g, w, y, _, C, M, T, O, $ = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = n.__e = e.__e, n.__h = null, i = [a]), (p = x.__b) && p(n);
  try {
    e:
      if (typeof $ == "function") {
        if (y = n.props, _ = (p = $.contextType) && s[p.__c], C = p ? _ ? _.props.value : p.__ : s, e.__c ? w = (l = n.__c = e.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? n.__c = l = new $(y, C) : (n.__c = l = new te(y, C), l.constructor = $, l.render = Jt), _ && _.sub(l), l.props = y, l.state || (l.state = {}), l.context = C, l.__n = s, m = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Y({}, l.__s)), Y(l.__s, $.getDerivedStateFromProps(y, l.__s))), u = l.props, f = l.state, m)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && y !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(y, C), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, C) === !1 || n.__v === e.__v) {
            l.props = y, l.state = l.__s, n.__v !== e.__v && (l.__d = !1), l.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, C), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, g);
          });
        }
        if (l.context = C, l.props = y, l.__v = n, l.__P = t, M = x.__r, T = 0, "prototype" in $ && $.prototype.render)
          l.state = l.__s, l.__d = !1, M && M(n), p = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, M && M(n), p = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++T < 25);
        l.state = l.__s, l.getChildContext != null && (s = Y(Y({}, s), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(u, f)), O = p != null && p.type === $e && p.key == null ? p.props.children : p, St(t, Array.isArray(O) ? O : [O], n, e, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), w && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = Xt(e.__e, n, e, s, o, i, r, c);
    (p = x.diffed) && p(n);
  } catch (I) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), x.__e(I, n, e);
  }
}
function Et(t, n) {
  x.__c && x.__c(n, t), t.some(function(e) {
    try {
      t = e.__h, e.__h = [], t.some(function(s) {
        s.call(e);
      });
    } catch (s) {
      x.__e(s, e.__v);
    }
  });
}
function Xt(t, n, e, s, o, i, r, a) {
  var c, p, l, m = e.props, u = n.props, f = n.type, g = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((c = i[g]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, i[g] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(u);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), i = null, a = !1;
  }
  if (f === null)
    m === u || a && t.data === u || (t.data = u);
  else {
    if (i = i && Me.call(t.childNodes), p = (m = e.props || Re).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (m = {}, g = 0; g < t.attributes.length; g++)
          m[t.attributes[g].name] = t.attributes[g].value;
      (l || p) && (l && (p && l.__html == p.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (Vt(t, u, m, o, a), l)
      n.__k = [];
    else if (g = n.props.children, St(t, Array.isArray(g) ? g : [g], n, e, s, o && f !== "foreignObject", i, r, i ? i[0] : e.__k && re(e, 0), a), i != null)
      for (g = i.length; g--; )
        i[g] != null && wt(i[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== t.value || f === "progress" && !g || f === "option" && g !== m.value) && Se(t, "value", g, m.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== t.checked && Se(t, "checked", g, m.checked, !1));
  }
  return t;
}
function Mt(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (s) {
    x.__e(s, e);
  }
}
function $t(t, n, e) {
  var s, o;
  if (x.unmount && x.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Mt(s, null, n)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        x.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = t.__k)
    for (o = 0; o < s.length; o++)
      s[o] && $t(s[o], n, typeof t.type != "function");
  e || t.__e == null || wt(t.__e), t.__e = t.__d = void 0;
}
function Jt(t, n, e) {
  return this.constructor(t, e);
}
function Zt(t, n, e) {
  var s, o, i;
  x.__ && x.__(t, n), o = (s = typeof e == "function") ? null : e && e.__k || n.__k, i = [], Fe(n, t = (!s && e || n).__k = b($e, null, [t]), o || Re, Re, n.ownerSVGElement !== void 0, !s && e ? [e] : o ? null : n.firstChild ? Me.call(n.childNodes) : null, i, !s && e ? e : o ? o.__e : n.firstChild, s), Et(i, t);
}
Me = vt.slice, x = { __e: function(t, n, e, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        t = a;
      }
  throw t;
} }, yt = 0, te.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof t == "function" && (t = t(Y({}, e), this.props)), t && Y(e, t), t != null && this.__v && (n && this.__h.push(n), ft(this));
}, te.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ft(this));
}, te.prototype.render = $e, he = [], ke.__r = 0;
const L = (...t) => t.map((n) => Array.isArray(n) ? L(...n) : typeof n == "function" ? L(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((e) => {
  const s = n[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class On extends te {
  render() {
    const { size: n, rounded: e, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, p = [s], l = { ...o };
    let m = null;
    return i ? m = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : m = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && p.push(`avatar-${n}`), typeof e == "string" && p.push(`rounded-${e}`), /* @__PURE__ */ b("div", {
      className: L(p),
      style: l,
      ...c
    }, m, a);
  }
}
const Qt = (t) => {
  const n = {};
  if (!t)
    return n;
  const e = Object.values(t.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class en extends HTMLElement {
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
    const e = Qt(this);
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
customElements.get("zui-button") || customElements.define("zui-button", en);
var J, Z;
class _t extends te {
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
      s && (d(this, J) && cancelAnimationFrame(d(this, J)), k(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), k(this, J, 0);
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
    e && (k(this, Z, typeof e == "string" ? document : e.current), d(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Z) && d(this, Z).removeEventListener("wheel", this._handleWheel);
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
      bottom: p,
      right: l
    } = this.props, { maxScrollPos: m, scrollPos: u } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: c,
      bottom: p,
      right: l,
      ...r
    }, w = {};
    return s === "horz" ? (g.height = o, g.width = e, w.width = this.barSize, w.left = Math.round(u * (e - w.width) / m)) : (g.width = o, g.height = e, w.height = this.barSize, w.top = Math.round(u * (e - w.height) / m)), /* @__PURE__ */ b("div", {
      className: L("scrollbar", i, {
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
J = new WeakMap(), Z = new WeakMap();
function tn(t) {
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
function nn(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function sn(t, n) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: tn,
  domReady: nn,
  isElementVisible: sn,
  classes: L
}, Symbol.toStringTag, { value: "Module" }));
function At() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var e;
    (e = n.parentElement) == null || e.classList.remove("open");
  });
}
function on(t) {
  const n = t.parentElement, e = t.nextElementSibling;
  !n || !e || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (At(), n.classList.add("open")));
}
document.addEventListener("click", function(t) {
  const e = t.target.closest("[data-toggle=dropdown]");
  e ? on(e) : At();
});
function qe({ col: t, className: n, height: e, rowID: s, rowData: o, onRenderCell: i, style: r, children: a, ...c }) {
  const { cellStyle: p, align: l, className: m } = t.setting, u = {
    left: t.left,
    width: t.realWidth,
    height: e,
    justifyContent: l ? l === "left" ? "start" : l === "right" ? "end" : l : void 0,
    ...r,
    ...p
  };
  let f = [
    a != null ? a : o == null ? void 0 : o[t.name]
  ];
  i && (f = i(f, { rowID: s, col: t, rowData: o }, b));
  const g = [], w = [];
  f == null || f.forEach((_) => {
    typeof _ == "object" && _ && ("html" in _ || "className" in _ || "style" in _) ? _.html ? w.push(/* @__PURE__ */ b("div", {
      className: L("dtable-cell-html", _.className),
      style: _.style,
      dangerouslySetInnerHTML: { __html: _.html }
    })) : (_.style && Object.assign(u, _.style), _.className && g.push(_.className)) : w.push(_);
  });
  const y = L("dtable-cell", n, m, g);
  return /* @__PURE__ */ b("div", {
    className: y,
    style: u,
    "data-col": t.name,
    ...c
  }, w);
}
function rn({ col: t, children: n, style: e, ...s }) {
  const { sortType: o } = t.setting;
  return /* @__PURE__ */ b(qe, {
    col: t,
    style: { ...e, ...t.setting.style },
    "data-sort": o || null,
    "data-type": t.type,
    ...s
  }, t.setting.title, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function De({ rowID: t, className: n, top: e = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = qe, onRenderCell: p }) {
  return /* @__PURE__ */ b("div", {
    className: L("dtable-cells", n),
    style: { top: e, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ b(c, {
    key: l.name,
    col: l,
    rowData: a,
    rowID: t,
    onRenderCell: p
  }) : null));
}
function Ht({
  rowID: t,
  className: n,
  top: e,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: p,
  flexRightWidth: l,
  scrollLeft: m,
  CellComponent: u = qe,
  onRenderCell: f,
  data: g,
  style: w,
  ...y
}) {
  let _ = null;
  o != null && o.length && (_ = /* @__PURE__ */ b(De, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: t,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  let C = null;
  r != null && r.length && (C = /* @__PURE__ */ b(De, {
    className: "dtable-flexable",
    cols: r,
    left: a - m,
    width: p,
    rowID: t,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  let M = null;
  i != null && i.length && (M = /* @__PURE__ */ b(De, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: t,
    CellComponent: u,
    onRenderCell: f,
    data: g
  }));
  const T = { top: e, height: s, lineHeight: `${s - 2}px`, ...w };
  return /* @__PURE__ */ b("div", {
    className: L("dtable-row", n),
    style: T,
    "data-id": t,
    ...y
  }, _, C, M);
}
function ln({ height: t, onRenderRow: n, ...e }) {
  const s = {
    height: t,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: rn
  };
  if (n) {
    const o = n({ props: s }, b);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ b(Ht, {
    ...s
  }));
}
function an({
  className: t,
  style: n,
  top: e,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return n = { ...n, top: e, height: o }, /* @__PURE__ */ b("div", {
    className: L("dtable-rows", t),
    style: n
  }, s.map((c) => {
    const p = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    };
    if (r) {
      const l = r({ props: p, row: c }, b);
      l && Object.assign(p, l);
    }
    return /* @__PURE__ */ b(Ht, {
      ...p
    });
  }));
}
const xe = /* @__PURE__ */ new Map();
function Lt(t, n = !1) {
  if (!n && xe.has(t.name))
    throw new Error(`DTable: Plugin with name ${t.name} already exists`);
  xe.set(t.name, t);
}
function le(t, n = !1) {
  Lt(t, n);
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
function mt(t) {
  return xe.get(t);
}
function Nt(t) {
  return xe.delete(t);
}
function cn(t) {
  const n = /* @__PURE__ */ new Map();
  return [t == null ? void 0 : t.plugins].flat().reduce((e, s) => {
    var i;
    if (!s)
      return e;
    let o;
    return typeof s == "string" ? (o = mt(s), o || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? o = s.plugin : typeof s == "object" ? o = s : console.warn("DTable: Invalid plugin", s), o && !n.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (n.has(r))
        return;
      const a = mt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      e.push(a), n.set(a.name, a);
    }), e.push(o), n.set(o.name, o)), e;
  }, []);
}
function hn(t, n) {
  return t.reduce((e, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, n);
}
function Pe() {
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
var Q, U, S, ee, H, se, de;
class je extends te {
  constructor(e) {
    super(e);
    R(this, "ref", Rt());
    E(this, Q, 0);
    E(this, U, !1);
    E(this, S, void 0);
    E(this, ee, void 0);
    E(this, H, []);
    E(this, se, void 0);
    E(this, de, !1);
    R(this, "_handleResize", () => {
      d(this, Q) && cancelAnimationFrame(d(this, Q)), k(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), k(this, Q, 0);
      }));
    });
    R(this, "_handleRenderRow", (e, s) => {
      if (d(this, S).onRenderRow) {
        const o = d(this, S).onRenderRow.call(this, e, s);
        o && Object.assign(e.props, o);
      }
      return d(this, H).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, e, s);
          i && Object.assign(e.props, i);
        }
      }), e.props;
    });
    R(this, "_handleRenderHeaderRow", (e, s) => (d(this, S).onRenderHeaderRow && (e.props = d(this, S).onRenderHeaderRow.call(this, e, s)), d(this, H).forEach((o) => {
      o.onRenderHeaderRow && (e.props = o.onRenderHeaderRow.call(this, e, s));
    }), e.props));
    R(this, "_handleRenderCell", (e, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (e = r.setting[a].call(this, e, s, o)), d(this, S)[a] && (e = d(this, S)[a].call(this, e, s, o)), d(this, H).forEach((c) => {
        c[a] && (e = c[a].call(this, e, s, o));
      }), e;
    });
    R(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    R(this, "_handleClick", (e) => {
      var c, p, l, m, u, f, g, w;
      const s = e.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (p = o.getAttribute("data-id")) != null ? p : "";
      if (a === "HEADER")
        i && ((l = d(this, S).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), d(this, H).forEach((y) => {
          var _;
          (_ = y.onHeaderCellClick) == null || _.call(this, e, { colName: r, element: i });
        }));
      else {
        const y = (m = d(this, se)) == null ? void 0 : m.visibleRows.find((_) => _.id === a);
        if (i) {
          if (((u = d(this, S).onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: a, rowInfo: y, element: i, rowElement: o })) === !0)
            return;
          for (const _ of d(this, H))
            if (((f = _.onCellClick) == null ? void 0 : f.call(this, e, { colName: r, rowID: a, rowInfo: y, element: i, rowElement: o })) === !0)
              return;
        }
        if (((g = d(this, S).onRowClick) == null ? void 0 : g.call(this, e, { rowID: a, rowInfo: y, element: o })) === !0)
          return;
        for (const _ of d(this, H))
          if (((w = _.onRowClick) == null ? void 0 : w.call(this, e, { rowID: a, rowInfo: y, element: o })) === !0)
            return;
      }
    });
    R(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: s } = d(this, S);
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
    const s = { ...Pe(), ...e };
    k(this, S, Object.freeze(s)), k(this, ee, Object.freeze(cn(s))), d(this, ee).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return d(this, S);
  }
  get plugins() {
    return d(this, H);
  }
  get layout() {
    return d(this, se);
  }
  componentDidMount() {
    d(this, U) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, S).responsive && window.addEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, U) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: e } = this.ref;
    e && (e.removeEventListener("click", this._handleClick), d(this, S).colHover && (e.removeEventListener("mouseover", this._handleMouseOver), e.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = d(this, S).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = d(this, S).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var Qe, et, tt, nt;
    const e = Pe(), s = hn(d(this, ee), { ...e, ...this.props }), o = d(this, ee).filter((h) => !h.when || h.when(s));
    k(this, H, Object.freeze(o)), o.forEach((h) => {
      var A;
      const v = (A = h.beforeLayout) == null ? void 0 : A.call(this, s);
      v && Object.assign(s, v);
    }), k(this, S, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: p = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = s, m = i ? s.headerHeight || a : 0, u = r ? s.footerHeight || a : 0, f = (h, v, A) => (h && (v && (h = Math.max(v, h)), A && (h = Math.min(A, h))), h), g = [], w = [], y = [];
    let _ = 0, C = 0;
    (Qe = s.cols) == null || Qe.forEach((h) => {
      var st, ot, it;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: v = p, maxWidth: A = l } = h, W = f((st = h.width) != null ? st : 0, v, A), q = (ot = h.flex) != null ? ot : 1, _e = q * f(c, v, A), G = {
        name: h.name,
        type: (it = h.type) != null ? it : "",
        setting: h,
        left: 0,
        flex: q,
        realWidth: W,
        flexWidth: _e,
        visible: !0
      };
      h.fixed === "left" ? (G.left = _, _ += W, g.push(G)) : h.fixed === "right" ? (G.left = C, C += W, w.push(G)) : y.push(G), o.forEach((rt) => {
        var lt, at, ct;
        const me = (at = rt.colTypes) == null ? void 0 : at[(lt = h.type) != null ? lt : ""];
        if (me) {
          const ht = typeof me == "function" ? me(h) : me;
          ht && Object.assign(h, ht);
        }
        (ct = rt.onAddCol) == null || ct.call(this, G);
      });
    });
    let M = s.width, T = 0;
    if (typeof M == "function" && (M = M()), M === "auto")
      T = _ + C, y.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), T += h.realWidth;
      });
    else if (M === "100%") {
      const h = (et = this.ref.current) == null ? void 0 : et.parentElement;
      if (h)
        T = h.clientWidth;
      else {
        T = 0, k(this, U, !0);
        return;
      }
    } else
      T = M != null ? M : 0;
    const { data: O, rowKey: $ = "id" } = s, I = [];
    let pe = 0;
    const Ae = (h, v, A) => {
      var q, _e;
      const W = { data: A != null ? A : { [$]: h }, top: pe, id: h, index: I.length };
      if (A || (W.lazy = !0), I.push(W), pe += a, ((q = s.onAddRow) == null ? void 0 : q.call(this, W, v)) !== !1) {
        for (const G of o)
          if (((_e = G.onAddRow) == null ? void 0 : _e.call(this, W, v)) === !1)
            return;
      }
    };
    if (typeof O == "number")
      for (let h = 0; h < O; h++)
        Ae(h, h);
    else
      Array.isArray(O) && O.forEach((h, v) => {
        typeof h == "object" ? Ae(h[$], v, h) : Ae(h, v);
      });
    let He = !1, F = I;
    if (s.onAddRows) {
      const h = s.onAddRows.call(this, F);
      h && (F = h, He = !0);
    }
    for (const h of o) {
      const v = (tt = h.onAddRows) == null ? void 0 : tt.call(this, F);
      v && (F = v, He = !0);
    }
    He && F.forEach((h, v) => {
      h.index = v, h.top = v * a;
    });
    let B = s.height, V = 0;
    const Le = m + u + pe;
    if (typeof B == "function" && (B = B(Le)), B === "auto")
      V = Le;
    else if (typeof B == "object")
      V = Math.min(B.max, Math.max(B.min, Le));
    else if (B === "100%") {
      const h = (nt = this.ref.current) == null ? void 0 : nt.parentElement;
      if (h)
        V = h.clientHeight;
      else {
        V = 0, k(this, U, !0);
        return;
      }
    } else
      V = B;
    const { scrollTop: ge = 0, scrollLeft: Ne = 0 } = this.state, Ke = V - m - u, Ye = ge + Ke, Ve = [], ze = T - _ - C;
    let X = 0;
    const Te = [];
    let Xe = 0;
    if (y.forEach((h) => {
      h.realWidth ? X += h.realWidth : (Te.push(h), Xe += h.flex);
    }), Te.length) {
      const h = Math.max(0, ze - X);
      Te.forEach((v) => {
        var q;
        const { minWidth: A = p, maxWidth: W = l } = v.setting;
        v.realWidth = Math.min(W, Math.max(A, Math.ceil(h * ((q = v.flex) != null ? q : 1) / Xe))), X += v.realWidth;
      });
    }
    X = 0, y.forEach((h) => {
      h.left += X, X += h.realWidth, (h.left + h.realWidth < Ne || h.left > Ne + ze) && (h.visible = !1);
    });
    const Je = Math.floor(ge / a), Ze = Math.min(F.length, Math.ceil(Ye / a)), Gt = [];
    for (let h = Je; h < Ze; h++) {
      const v = F[h];
      v.top -= ge, Ve.push(v), v.lazy === !0 && Gt.push(v.id);
    }
    let ne = {
      allRows: I,
      width: T,
      height: V,
      rows: F,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: Ke,
      rowsHeightTotal: pe,
      header: i,
      footer: r,
      headerHeight: m,
      footerHeight: u,
      colsInfo: {
        fixedLeftCols: g,
        fixedRightCols: w,
        scrollCols: y,
        flexLeftWidth: _,
        scrollWidth: ze,
        scrollWidthTotal: X,
        flexRightWidth: C
      },
      scrollBottom: Ye,
      scrollTop: ge,
      scrollLeft: Ne,
      startRowIndex: Je,
      endRowIndex: Ze
    };
    if (s.onLayout) {
      const h = s.onLayout.call(this, ne);
      h && (ne = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const v = h.onLayout.call(this, ne);
        v && (ne = v);
      }
    }), k(this, se, Object.freeze(ne)), ne;
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
      return /* @__PURE__ */ b(ln, {
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
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: i },
      dangerouslySetInnerHTML: a
    }, r);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = e;
    return /* @__PURE__ */ b(an, {
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
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(e) {
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: p, scrollWidth: l } = i, { scrollbarSize: m = 12, horzScrollbarPos: u } = this.props;
    return p > l && s.push(/* @__PURE__ */ b(_t, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: p,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: u === "inside" ? 0 : -m,
      size: m,
      wheelContainer: this.ref
    })), c > a && s.push(/* @__PURE__ */ b(_t, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: m,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    k(this, U, !1), (e = d(this, S).afterRender) == null || e.call(this), d(this, H).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  _applyColHover(e) {
    e !== void 0 ? k(this, de, e) : e = d(this, de);
    const { current: s } = this.ref;
    if (!s)
      return;
    const o = "dtable-col-hover";
    s.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && s.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
  }
  render() {
    var m, u;
    const e = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: p } = (m = d(this, S)) != null ? m : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ b("div", {
      className: L("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((u = e == null ? void 0 : e.scrollTop) != null ? u : 0) > 0,
        "scrollbar-hover": p
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
Q = new WeakMap(), U = new WeakMap(), S = new WeakMap(), ee = new WeakMap(), H = new WeakMap(), se = new WeakMap(), de = new WeakMap(), R(je, "addPlugin", Lt), R(je, "removePlugin", Nt);
function dn(t, n) {
  var i;
  typeof t == "boolean" && (n = t, t = void 0);
  const e = this.state.checkedRows, s = {}, o = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], s[r] = a);
  };
  return t === void 0 ? (n === void 0 && (n = !zt.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!n);
  })) : (Array.isArray(t) ? t : [t]).forEach((a) => {
    o(a, n != null ? n : !e[a]);
  }), Object.keys(s).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, s);
  }), s;
}
function fn(t) {
  var n;
  return (n = this.state.checkedRows[t]) != null ? n : !1;
}
function zt() {
  var t;
  return this.getChecks().length === ((t = this.layout) == null ? void 0 : t.allRows.length);
}
function un() {
  return Object.keys(this.state.checkedRows);
}
const Tt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = dn.bind(this), this.isRowChecked = fn.bind(this), this.isAllRowChecked = zt.bind(this), this.getChecks = un.bind(this);
  },
  onRenderCell(t, { rowID: n, col: e }) {
    var i, r;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isRowChecked(n), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      t.unshift(c), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { rowID: n, col: e }) {
    var i, r;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isAllRowChecked(), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      t.unshift(c), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: n }) {
    if (this.isRowChecked(n.id))
      return { className: L(t.className, "is-checked") };
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
le(Tt);
function Oe(t) {
  const n = this.nestedMap.get(t);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const e = this.state.collapsedRows, s = n.children && e && e[t];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = Oe.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Oe.call(this, n.parent).level + 1 : 0, n;
}
function pn(t, n) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (t === "HEADER")
    if (n === void 0 && (n = !Wt.call(this)), n) {
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
function Wt() {
  const t = this.nestedMap.values();
  for (const n of t)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Dt(t, n = 0, e, s = 0) {
  var o;
  e || (e = [...t.keys()]);
  for (const i of e) {
    const r = t.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = Dt(t, n, r.children, s + 1)));
  }
  return n;
}
const Pt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, n) {
      const e = this.nestedMap.get(t.id), s = this.nestedMap.get(n.id);
      return (e == null ? void 0 : e.parent) === (s == null ? void 0 : s.parent);
    }
  },
  when: (t) => !!t.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = pn.bind(this), this.isAllCollapsed = Wt.bind(this), this.getNestedRowInfo = Oe.bind(this);
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
      }, this.nestedMap.set(n, r)), r.children || (r.children = [t.id]), r.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Dt(this.nestedMap), t.sort((n, e) => {
      var r, a;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(e.id), i = ((r = s.order) != null ? r : 0) - ((a = o.order) != null ? a : 0);
      return i === 0 ? n.index - e.index : i;
    }), t;
  },
  onRenderCell(t, { rowID: n, col: e, rowData: s }) {
    var r, a, c;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && t.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, e, s)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: p = o } = e.setting;
      p && (p === !0 && (p = (c = this.options.nestedIndent) != null ? c : 12), t.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: p * i.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, { rowID: n, col: e }) {
    var s, o;
    return e.setting.nestedToggle && t.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, n, e, void 0)) != null ? o : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow({ props: t, row: n }) {
    const e = this.getNestedRowInfo(n.id);
    return {
      className: L(t.className, `is-nested-${e.state}`),
      "data-parent": e.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = L(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
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
le(Pt);
function ce(t, ...n) {
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
var Ge = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Ge || {});
function gn(t, n = 2, e = "") {
  return Number.isNaN(t) ? "?KB" : (e || (t < 1024 ? e = "B" : t < 1048576 ? e = "KB" : t < 1073741824 ? e = "MB" : t < 1099511627776 ? e = "GB" : e = "TB"), (t / Ge[e]).toFixed(n) + e);
}
const _n = (t) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const e = t.match(n);
  if (!e)
    return 0;
  const s = e[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Ge[s];
}, j = 24 * 60 * 60 * 1e3, N = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), ae = (t, n = new Date()) => (t = N(t), n = N(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()), Ie = (t, n = new Date()) => N(t).getFullYear() === N(n).getFullYear(), jt = (t, n = new Date()) => (t = N(t), n = N(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth()), mn = (t, n = new Date()) => {
  t = N(t), n = N(n);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / e), o = Math.floor(n.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, bn = (t, n) => ae(N(n), t), yn = (t, n) => ae(N(n).getTime() - j, t), vn = (t, n) => ae(N(n).getTime() + j, t), wn = (t, n) => ae(N(n).getTime() - 2 * j, t), Ce = (t, n = "yyyy-MM-dd hh:mm") => {
  t = N(t);
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
}, Rn = (t, n, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Ce(t, Ie(t) ? s.month : s.full);
  if (ae(t, n))
    return o;
  const i = Ce(n, Ie(t, n) ? jt(t, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, kn = (t) => {
  const n = new Date().getTime();
  switch (t) {
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
}, Be = (t, n, e = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return t *= 365, Be(t, "day", e, s);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Be(t, "day", e, s);
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
const Ot = {
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = ce(s, e);
        return t[0] = /* @__PURE__ */ b("a", {
          href: i,
          ...o
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: n, rowData: e }) {
        const { avatarWithName: s, avatarClass: o = "size-sm circle", avatarKey: i = `${n.name}Avatar` } = n.setting, r = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: e ? e[i] : ""
        }));
        return s ? t.unshift(r) : t[0] = r, t;
      }
    },
    circleProgress: {
      onRenderCell(t, { col: n }) {
        const { circleSize: e = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-green-500)" } = n.setting, r = (e - s) / 2, a = e / 2, c = t[0];
        return t[0] = /* @__PURE__ */ b("svg", {
          width: e,
          height: e
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
            return c && (a = { className: r, ...c, ...a }), ce(o, a);
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
        return typeof s == "function" ? t[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? t[0] = Ce(i, s) : o === "html" ? t[0] = { html: ce(s, i) } : t[0] = ce(s, i), t;
      }
    }
  }
};
le(Ot);
const It = {
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
          var p, l;
          return a + ((l = (p = this.getColInfo(c)) == null ? void 0 : p.realWidth) != null ? l : 0);
        }, 0), r = {
          height: o - 1,
          width: i - 1
        };
        t.push(/* @__PURE__ */ b("div", {
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
le(It);
function Bt(t, n) {
  var s, o;
  const e = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!e)
    return t.getRowInfo(e);
}
function Sn(t) {
  var e, s;
  const n = Bt(this, t);
  if (!(!t.dataTransfer || !n || ((e = this.options.onBeginSort) == null ? void 0 : e.call(this, n, t)) === !1))
    return this.setState({ draggingRow: n }), t.dataTransfer.effectAllowed = "move", t.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function xn(t) {
  var o, i;
  const { draggingRow: n, droppingRow: e, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, e, s);
}
function Cn(t) {
  var o;
  const n = Bt(this, t), { draggingRow: e } = this.state;
  if (!n || !e || n.id === e.id)
    return;
  const s = e.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, e, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function En(t) {
  return t.preventDefault(), !0;
}
function Mn(t) {
  var o;
  const { draggingRow: n, droppingRow: e, moveType: s } = this.state;
  if (n && e && s && n.id !== e.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((u) => r.call(this, u)));
    const a = i.findIndex((u) => u.id === n.id), c = i.findIndex((u) => u.id === e.id), p = i.splice(a, 1);
    i.splice(c, 0, p[0]);
    const l = {}, m = [];
    i.forEach(({ id: u }, f) => {
      l[u] = f, m.push(u);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, e, s, m);
  }
}
const Ft = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (t) => !!t.sortable,
  onCreate() {
    this.onSortDragStart = Sn.bind(this), this.onSortDragEnd = xn.bind(this), this.onSortDragEnter = Cn.bind(this), this.onSortDragOver = En.bind(this), this.onSortDrop = Mn.bind(this);
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
      style: { ...t.style, transform: `translateY(${a}px)` },
      draggable: ((c = this.options.canSort) == null ? void 0 : c.call(this, n)) !== !1
    };
  }
};
le(Ft);
const $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Tt,
  nested: Pt,
  rich: Ot,
  headerGroup: It,
  sortable: Ft
}, Symbol.toStringTag, { value: "Module" }));
var fe;
class ye {
  constructor(n, e) {
    R(this, "element");
    R(this, "options");
    E(this, fe, Rt());
    var s;
    this.element = n, this.options = { ...Pe(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, fe).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Zt(/* @__PURE__ */ b(je, {
      ref: d(this, fe),
      ...this.options
    }), this.element);
  }
}
fe = new WeakMap(), R(ye, "NAME", "zui.dtable"), R(ye, "definePlugin", le), R(ye, "removePlugin", Nt), R(ye, "plugins", $n);
let An = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((n, e) => (e &= 63, e < 36 ? n += e.toString(36) : e < 62 ? n += (e - 26).toString(36).toUpperCase() : e > 62 ? n += "-" : n += "_", n), "");
var ue, K, D, oe, ie, we;
const Ue = class {
  constructor(n, e = "local") {
    E(this, ie);
    E(this, ue, void 0);
    E(this, K, void 0);
    E(this, D, void 0);
    E(this, oe, void 0);
    k(this, ue, e), k(this, K, `ZUI_STORE:${n != null ? n : An()}`), k(this, D, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, ue);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || k(this, oe, new Ue(d(this, K), "session")), d(this, oe));
  }
  get(n, e) {
    const s = d(this, D).getItem(be(this, ie, we).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(n, e) {
    if (e == null)
      return this.remove(n);
    d(this, D).setItem(be(this, ie, we).call(this, n), JSON.stringify(e));
  }
  remove(n) {
    d(this, D).removeItem(be(this, ie, we).call(this, n));
  }
  each(n) {
    for (let e = 0; e < d(this, D).length; e++) {
      const s = d(this, D).key(e);
      if (s != null && s.startsWith(d(this, K))) {
        const o = d(this, D).getItem(s);
        typeof o == "string" && n(s.substring(d(this, K).length + 1), JSON.parse(o));
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
let Ee = Ue;
ue = new WeakMap(), K = new WeakMap(), D = new WeakMap(), oe = new WeakMap(), ie = new WeakSet(), we = function(n) {
  return `${d(this, K)}:${n}`;
};
const Hn = new Ee("DEFAULT");
function Ln(t, n = "local") {
  return new Ee(t, n);
}
Object.assign(Hn, { create: Ln });
function Nn() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function zn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Tn(t, n) {
  Nn(), t.classList.add("block"), bt(t, n), t.onclick = (e) => Wn(e, t), window.addEventListener("resize", () => {
    bt(t, n);
  });
}
function qt(t) {
  var n;
  zn(), (n = t.classList) == null || n.remove("block");
}
function bt(t, n) {
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
function Wn(t, n) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), qt(n));
}
function Dn(t) {
  var n, e;
  return t instanceof HTMLAnchorElement ? (e = (n = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : e.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const n = t.target, e = n.closest("[data-toggle=modal]");
  if (e) {
    const s = Dn(e);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Tn(o, e.dataset.position || "fit");
  } else
    n.className.includes("modal") && qt(n);
});
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: j,
  createDate: N,
  isSameDay: ae,
  isSameYear: Ie,
  isSameMonth: jt,
  isSameWeek: mn,
  isToday: bn,
  isYesterday: yn,
  isTomorrow: vn,
  isDBY: wn,
  formatDate: Ce,
  formatDateSpan: Rn,
  getTimeBeforeDesc: kn,
  calculateTimestamp: Be,
  formatString: ce,
  formatBytes: gn,
  convertBytes: _n
}, Symbol.toStringTag, { value: "Module" }));
var P, z;
class Pn {
  constructor(n) {
    E(this, P, void 0);
    E(this, z, void 0);
    k(this, P, n), k(this, z, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, P).parentElement.parentElement, d(this, P).parentElement), this.addActive(d(this, z).parentElement, d(this, z)), d(this, z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    k(this, z, d(this, P)), this.addActive(d(this, z).parentElement, d(this, z)), k(this, P, document.querySelector(`[href='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, z).getAttribute("id")}']`)), this.addActive(d(this, P).parentElement.parentElement, d(this, P).parentElement);
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
P = new WeakMap(), z = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Pn(t.target).showTarget());
});
export {
  On as Avatar,
  ye as DTable,
  Pn as NavTabs,
  _t as Scrollbar,
  In as browser,
  $n as dtablePlugins,
  Bn as helpers,
  Hn as store
};
