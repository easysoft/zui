var Bt = Object.defineProperty;
var Ft = (t, n, e) => n in t ? Bt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var R = (t, n, e) => (Ft(t, typeof n != "symbol" ? n + "" : n, e), e), ze = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var d = (t, n, e) => (ze(t, n, "read from private field"), e ? e.call(t) : n.get(t)), $ = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, C = (t, n, e, s) => (ze(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var me = (t, n, e) => (ze(t, n, "access private method"), e);
var Me, x, _t, he, at, we = {}, mt = [], Gt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Y(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function bt(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function m(t, n, e) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Me.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      r[i] === void 0 && (r[i] = t.defaultProps[i]);
  return ye(t, r, s, o, null);
}
function ye(t, n, e, s, o) {
  var i = { type: t, props: n, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++_t : o };
  return o == null && x.vnode != null && x.vnode(i), i;
}
function yt() {
  return { current: null };
}
function Ee(t) {
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
function vt(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return vt(t);
  }
}
function ct(t) {
  (!t.__d && (t.__d = !0) && he.push(t) && !ke.__r++ || at !== x.debounceRendering) && ((at = x.debounceRendering) || setTimeout)(ke);
}
function ke() {
  for (var t; ke.__r = he.length; )
    t = he.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), he = [], t.some(function(n) {
      var e, s, o, i, r, a;
      n.__d && (r = (i = (e = n).__v).__e, (a = e.__P) && (s = [], (o = Y({}, i)).__v = i.__v + 1, Ie(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? re(i) : r, i.__h), Ct(s, i), i.__e != r && vt(i)));
    });
}
function wt(t, n, e, s, o, i, r, a, h, f) {
  var l, p, g, u, _, k, b, y = s && s.__k || mt, v = y.length;
  for (e.__k = [], l = 0; l < n.length; l++)
    if ((u = e.__k[l] = (u = n[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? ye(null, u, null, null, u) : Array.isArray(u) ? ye(Ee, { children: u }, null, null, null) : u.__b > 0 ? ye(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = e, u.__b = e.__b + 1, (g = y[l]) === null || g && u.key == g.key && u.type === g.type)
        y[l] = void 0;
      else
        for (p = 0; p < v; p++) {
          if ((g = y[p]) && u.key == g.key && u.type === g.type) {
            y[p] = void 0;
            break;
          }
          g = null;
        }
      Ie(t, u, g = g || we, o, i, r, a, h, f), _ = u.__e, (p = u.ref) && g.ref != p && (b || (b = []), g.ref && b.push(g.ref, null, u), b.push(p, u.__c || _, u)), _ != null ? (k == null && (k = _), typeof u.type == "function" && u.__k === g.__k ? u.__d = h = kt(u, h, t) : h = Rt(t, u, g, y, _, h), typeof e.type == "function" && (e.__d = h)) : h && g.__e == h && h.parentNode != t && (h = re(g));
    }
  for (e.__e = k, l = v; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = re(s, l + 1)), xt(y[l], y[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      St(b[l], b[++l], b[++l]);
}
function kt(t, n, e) {
  for (var s, o = t.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = t, n = typeof s.type == "function" ? kt(s, n, e) : Rt(e, s, s, o, s.__e, n));
  return n;
}
function Rt(t, n, e, s, o, i) {
  var r, a, h;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== t)
        t.appendChild(o), r = null;
      else {
        for (a = i, h = 0; (a = a.nextSibling) && h < s.length; h += 2)
          if (a == o)
            break e;
        t.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Ut(t, n, e, s, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in n || Re(t, i, null, e[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === n[i] || Re(t, i, n[i], e[i], s);
}
function ht(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Gt.test(n) ? e : e + "px";
}
function Re(t, n, e, s, o) {
  var i;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (n in s)
            e && n in e || ht(t.style, n, "");
        if (e)
          for (n in e)
            s && e[n] === s[n] || ht(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + i] = e, e ? s || t.addEventListener(n, i ? ft : dt, i) : t.removeEventListener(n, i ? ft : dt, i);
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
function dt(t) {
  this.l[t.type + !1](x.event ? x.event(t) : t);
}
function ft(t) {
  this.l[t.type + !0](x.event ? x.event(t) : t);
}
function Ie(t, n, e, s, o, i, r, a, h) {
  var f, l, p, g, u, _, k, b, y, v, E, W, O, A = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, a = n.__e = e.__e, n.__h = null, i = [a]), (f = x.__b) && f(n);
  try {
    e:
      if (typeof A == "function") {
        if (b = n.props, y = (f = A.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, e.__c ? k = (l = n.__c = e.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? n.__c = l = new A(b, v) : (n.__c = l = new te(b, v), l.constructor = A, l.render = Kt), y && y.sub(l), l.props = b, l.state || (l.state = {}), l.context = v, l.__n = s, p = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Y({}, l.__s)), Y(l.__s, A.getDerivedStateFromProps(b, l.__s))), g = l.props, u = l.state, p)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, v) === !1 || n.__v === e.__v) {
            l.props = b, l.state = l.__s, n.__v !== e.__v && (l.__d = !1), l.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(g, u, _);
          });
        }
        if (l.context = v, l.props = b, l.__v = n, l.__P = t, E = x.__r, W = 0, "prototype" in A && A.prototype.render)
          l.state = l.__s, l.__d = !1, E && E(n), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, E && E(n), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++W < 25);
        l.state = l.__s, l.getChildContext != null && (s = Y(Y({}, s), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(g, u)), O = f != null && f.type === Ee && f.key == null ? f.props.children : f, wt(t, Array.isArray(O) ? O : [O], n, e, s, o, i, r, a, h), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), k && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = qt(e.__e, n, e, s, o, i, r, h);
    (f = x.diffed) && f(n);
  } catch (I) {
    n.__v = null, (h || i != null) && (n.__e = a, n.__h = !!h, i[i.indexOf(a)] = null), x.__e(I, n, e);
  }
}
function Ct(t, n) {
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
function qt(t, n, e, s, o, i, r, a) {
  var h, f, l, p = e.props, g = n.props, u = n.type, _ = 0;
  if (u === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((h = i[_]) && "setAttribute" in h == !!u && (u ? h.localName === u : h.nodeType === 3)) {
        t = h, i[_] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(g);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, g.is && g), i = null, a = !1;
  }
  if (u === null)
    p === g || a && t.data === g || (t.data = g);
  else {
    if (i = i && Me.call(t.childNodes), f = (p = e.props || we).dangerouslySetInnerHTML, l = g.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (p = {}, _ = 0; _ < t.attributes.length; _++)
          p[t.attributes[_].name] = t.attributes[_].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (Ut(t, g, p, o, a), l)
      n.__k = [];
    else if (_ = n.props.children, wt(t, Array.isArray(_) ? _ : [_], n, e, s, o && u !== "foreignObject", i, r, i ? i[0] : e.__k && re(e, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && bt(i[_]);
    a || ("value" in g && (_ = g.value) !== void 0 && (_ !== t.value || u === "progress" && !_ || u === "option" && _ !== p.value) && Re(t, "value", _, p.value, !1), "checked" in g && (_ = g.checked) !== void 0 && _ !== t.checked && Re(t, "checked", _, p.checked, !1));
  }
  return t;
}
function St(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (s) {
    x.__e(s, e);
  }
}
function xt(t, n, e) {
  var s, o;
  if (x.unmount && x.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || St(s, null, n)), (s = t.__c) != null) {
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
      s[o] && xt(s[o], n, typeof t.type != "function");
  e || t.__e == null || bt(t.__e), t.__e = t.__d = void 0;
}
function Kt(t, n, e) {
  return this.constructor(t, e);
}
function Yt(t, n, e) {
  var s, o, i;
  x.__ && x.__(t, n), o = (s = typeof e == "function") ? null : e && e.__k || n.__k, i = [], Ie(n, t = (!s && e || n).__k = m(Ee, null, [t]), o || we, we, n.ownerSVGElement !== void 0, !s && e ? [e] : o ? null : n.firstChild ? Me.call(n.childNodes) : null, i, !s && e ? e : o ? o.__e : n.firstChild, s), Ct(i, t);
}
Me = mt.slice, x = { __e: function(t, n, e, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        t = a;
      }
  throw t;
} }, _t = 0, te.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof t == "function" && (t = t(Y({}, e), this.props)), t && Y(e, t), t != null && this.__v && (n && this.__h.push(n), ct(this));
}, te.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ct(this));
}, te.prototype.render = Ee, he = [], ke.__r = 0;
const z = (...t) => t.map((n) => Array.isArray(n) ? z(...n) : typeof n == "function" ? z(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((e) => {
  const s = n[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class Hn extends te {
  render() {
    const { size: n, rounded: e, className: s, style: o, src: i, text: r, children: a, ...h } = this.props, f = [s], l = { ...o };
    let p = null;
    return i ? p = /* @__PURE__ */ m("img", {
      src: i,
      alt: r
    }) : p = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && f.push(`avatar-${n}`), typeof e == "string" && f.push(`rounded-${e}`), /* @__PURE__ */ m("div", {
      className: z(f),
      style: l,
      ...h
    }, p, a);
  }
}
const Vt = (t) => {
  const n = {};
  if (!t)
    return n;
  const e = Object.values(t.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class Xt extends HTMLElement {
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
    const e = Vt(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Xt);
var J, Z;
class ut extends te {
  constructor(e) {
    var s;
    super(e);
    $(this, J, 0);
    $(this, Z, null);
    R(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: s } = this.props, o = e.target;
      !o || !s || (typeof s == "string" && o.closest(s) || typeof s == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1)) && e.preventDefault();
    });
    R(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (d(this, J) && cancelAnimationFrame(d(this, J)), C(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), C(this, J, 0);
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
      const o = s.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: a } = this.props, h = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(h * a / r);
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
    const { clientSize: e, scrollSize: s, size: o = 10 } = this.props;
    return Math.max(Math.round(e * e / s), 2 * o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (C(this, Z, typeof e == "string" ? document : e.current), d(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
      size: o = 10,
      className: i,
      style: r,
      left: a,
      top: h,
      bottom: f,
      right: l
    } = this.props, { maxScrollPos: p, scrollPos: g } = this, { dragStart: u } = this.state, _ = {
      left: a,
      top: h,
      bottom: f,
      right: l,
      ...r
    }, k = {};
    return s === "horz" ? (_.height = o, _.width = e, k.width = this.barSize, k.left = Math.round(g * (e - k.width) / p)) : (_.width = o, _.height = e, k.height = this.barSize, k.top = Math.round(g * (e - k.height) / p)), /* @__PURE__ */ m("div", {
      className: z("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": u
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ m("div", {
      className: "scrollbar-bar",
      style: k,
      onMouseDown: this._handleMouseDown
    }));
  }
}
J = new WeakMap(), Z = new WeakMap();
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
var Be = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Be || {});
function Jt(t, n = 2, e = "") {
  return Number.isNaN(t) ? "?KB" : (e || (t < 1024 ? e = "B" : t < 1048576 ? e = "KB" : t < 1073741824 ? e = "MB" : t < 1099511627776 ? e = "GB" : e = "TB"), (t / Be[e]).toFixed(n) + e);
}
const Zt = (t) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const e = t.match(n);
  if (!e)
    return 0;
  const s = e[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Be[s];
};
function Qt(t) {
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
function en(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function tn(t, n) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Qt,
  domReady: en,
  isElementVisible: tn,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
function Mt() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var e;
    (e = n.parentElement) == null || e.classList.remove("open");
  });
}
function nn(t) {
  const n = t.parentElement, e = t.nextElementSibling;
  !n || !e || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Mt(), n.classList.add("open")));
}
document.addEventListener("click", function(t) {
  const e = t.target.closest("[data-toggle=dropdown]");
  e ? nn(e) : Mt();
});
function Fe({ col: t, className: n, height: e, rowID: s, hoverCol: o, rowData: i, onRenderCell: r, style: a, children: h, ...f }) {
  const { cellStyle: l, align: p, className: g } = t.setting, u = {
    left: t.left,
    width: t.realWidth,
    height: e,
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...a,
    ...l
  };
  let _ = [
    h != null ? h : i == null ? void 0 : i[t.name]
  ];
  r && (_ = r(_, s, t, i));
  const k = [], b = [];
  _ == null || _.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? (v.html && b.push(/* @__PURE__ */ m("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: v.html }
    })), v.style && Object.assign(u, v.style), v.className && k.push(v.className)) : b.push(v);
  });
  const y = z("dtable-cell", n, {
    "dtable-col-hover": o
  }, g, k);
  return /* @__PURE__ */ m("div", {
    className: y,
    style: u,
    "data-col": t.name,
    ...f
  }, b);
}
function sn({ col: t, children: n, style: e, ...s }) {
  const { sortType: o } = t.setting;
  return /* @__PURE__ */ m(Fe, {
    col: t,
    style: { ...e, ...t.setting.style },
    "data-sort": o || null,
    "data-type": t.type,
    ...s
  }, t.setting.title, o && /* @__PURE__ */ m("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function We({ rowID: t, className: n, top: e = 0, left: s = 0, width: o, height: i, cols: r, data: a, hoverCol: h, CellComponent: f = Fe, onRenderCell: l }) {
  return /* @__PURE__ */ m("div", {
    className: z("dtable-cells", n),
    style: { top: e, left: s, width: o, height: i }
  }, r.map((p) => p.visible ? /* @__PURE__ */ m(f, {
    key: p.name,
    col: p,
    hoverCol: h === p.name && p.setting.colHover !== !1,
    rowData: a,
    rowID: t,
    onRenderCell: l
  }) : null));
}
function Et({
  rowID: t,
  className: n,
  top: e,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: h,
  scrollWidthTotal: f,
  flexRightWidth: l,
  scrollLeft: p,
  CellComponent: g = Fe,
  onRenderCell: u,
  hoverCol: _,
  data: k,
  ...b
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(We, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: t,
    hoverCol: _,
    CellComponent: g,
    onRenderCell: u,
    data: k
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ m(We, {
    className: "dtable-flexable",
    cols: r,
    left: a - p,
    width: f,
    rowID: t,
    hoverCol: _,
    CellComponent: g,
    onRenderCell: u,
    data: k
  }));
  let E = null;
  i != null && i.length && (E = /* @__PURE__ */ m(We, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + h,
    width: l,
    rowID: t,
    hoverCol: _,
    CellComponent: g,
    onRenderCell: u,
    data: k
  }));
  const W = { top: e, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ m("div", {
    className: z("dtable-row", n),
    style: W,
    "data-id": t,
    ...b
  }, y, v, E);
}
function on({ height: t, onRenderRow: n, ...e }) {
  let s = {
    height: t,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: sn
  };
  return n && (s = n(s)), /* @__PURE__ */ m("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ m(Et, {
    ...s
  }));
}
function rn({
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
    className: z("dtable-rows", t),
    style: n
  }, s.map((h) => {
    let f = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      rowID: h.id,
      data: h.data,
      top: h.top,
      height: i,
      ...a
    };
    return r && (f = r(f, h)), /* @__PURE__ */ m(Et, {
      ...f
    });
  }));
}
const Ce = /* @__PURE__ */ new Map();
function $t(t, n = !1) {
  if (!n && Ce.has(t.name))
    throw new Error(`DTable: Plugin with name ${t.name} already exists`);
  Ce.set(t.name, t);
}
function ue(t, n = !1) {
  $t(t, n);
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
function pt(t) {
  return Ce.get(t);
}
function At(t) {
  return Ce.delete(t);
}
function ln(t) {
  const n = /* @__PURE__ */ new Map();
  return [t == null ? void 0 : t.plugins].flat().reduce((e, s) => {
    var i;
    if (!s)
      return e;
    let o;
    return typeof s == "string" ? (o = pt(s), o || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? o = s.plugin : typeof s == "object" ? o = s : console.warn("DTable: Invalid plugin", s), o && !n.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (n.has(r))
        return;
      const a = pt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      e.push(a), n.set(a.name, a);
    }), e.push(o), n.set(o.name, o)), e;
  }, []);
}
function an(t, n) {
  return t.reduce((e, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, n);
}
function Te() {
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
    scrollbarSize: 10,
    horzScrollbarPos: "outside"
  };
}
var Q, q, S, ee, H, se;
class je extends te {
  constructor(e) {
    super(e);
    R(this, "ref", yt());
    $(this, Q, 0);
    $(this, q, !1);
    $(this, S, void 0);
    $(this, ee, void 0);
    $(this, H, []);
    $(this, se, void 0);
    R(this, "_handleResize", () => {
      d(this, Q) && cancelAnimationFrame(d(this, Q)), C(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), C(this, Q, 0);
      }));
    });
    R(this, "_handleRenderRow", (e, s) => (d(this, S).onRenderRow && (e = d(this, S).onRenderRow.call(this, e, s)), d(this, H).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, s));
    }), e));
    R(this, "_handleRenderHeaderRow", (e) => (d(this, S).onRenderHeaderRow && (e = d(this, S).onRenderHeaderRow.call(this, e)), d(this, H).forEach((s) => {
      s.onRenderHeaderRow && (e = s.onRenderHeaderRow.call(this, e));
    }), e));
    R(this, "_handleRenderCell", (e, s, o, i) => {
      const r = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[r] && (e = o.setting[r].call(this, e, s, o, i)), d(this, S)[r] && (e = d(this, S)[r].call(this, e, s, o, i)), d(this, H).forEach((a) => {
        a[r] && (e = a[r].call(this, e, s, o, i));
      }), e;
    });
    R(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    R(this, "_handleClick", (e) => {
      var h, f, l, p, g, u, _, k;
      const s = e.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (h = i == null ? void 0 : i.getAttribute("data-col")) != null ? h : "", a = (f = o.getAttribute("data-id")) != null ? f : "";
      if (a === "HEADER")
        i && ((l = d(this, S).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), d(this, H).forEach((b) => {
          var y;
          (y = b.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: i });
        }));
      else {
        const b = (p = d(this, se)) == null ? void 0 : p.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((g = d(this, S).onCellClick) == null ? void 0 : g.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const y of d(this, H))
            if (((u = y.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((_ = d(this, S).onRowClick) == null ? void 0 : _.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const y of d(this, H))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
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
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: i });
    });
    R(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...Te(), ...e };
    C(this, S, Object.freeze(s)), C(this, ee, Object.freeze(ln(s))), d(this, ee).forEach((o) => {
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
    d(this, q) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, S).responsive && window.addEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, q) && this._afterRender();
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
    var Je, Ze, Qe;
    const e = Te(), s = an(d(this, ee), { ...e, ...this.props }), o = d(this, ee).filter((c) => !c.when || c.when(s));
    C(this, H, Object.freeze(o)), o.forEach((c) => {
      var M;
      const w = (M = c.beforeLayout) == null ? void 0 : M.call(this, s);
      w && Object.assign(s, w);
    }), C(this, S, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: h = e.minColWidth,
      minColWidth: f = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = s, p = i ? s.headerHeight || a : 0, g = r ? s.footerHeight || a : 0, u = (c, w, M) => (c && (w && (c = Math.max(w, c)), M && (c = Math.min(M, c))), c), _ = [], k = [], b = [];
    let y = 0, v = 0;
    (Je = s.cols) == null || Je.forEach((c) => {
      var et, tt, nt;
      if (c.hidden)
        return;
      c = { ...c };
      const { minWidth: w = f, maxWidth: M = l } = c, T = u((et = c.width) != null ? et : 0, w, M), G = (tt = c.flex) != null ? tt : 1, ge = G * u(h, w, M), U = {
        name: c.name,
        type: (nt = c.type) != null ? nt : "",
        setting: c,
        left: 0,
        flex: G,
        realWidth: T,
        flexWidth: ge,
        visible: !0
      };
      c.fixed === "left" ? (U.left = y, y += T, _.push(U)) : c.fixed === "right" ? (U.left = v, v += T, k.push(U)) : b.push(U), o.forEach((st) => {
        var ot, it, rt;
        const _e = (it = st.colTypes) == null ? void 0 : it[(ot = c.type) != null ? ot : ""];
        if (_e) {
          const lt = typeof _e == "function" ? _e(c) : _e;
          lt && Object.assign(c, lt);
        }
        (rt = st.onAddCol) == null || rt.call(this, U);
      });
    });
    let E = s.width, W = 0;
    if (typeof E == "function" && (E = E()), E === "auto")
      W = y + v, b.forEach((c) => {
        c.realWidth || (c.realWidth = c.flexWidth), W += c.realWidth;
      });
    else if (E === "100%") {
      const c = (Ze = this.ref.current) == null ? void 0 : Ze.parentElement;
      if (c)
        W = c.clientWidth;
      else {
        W = 0, C(this, q, !0);
        return;
      }
    } else
      W = E != null ? E : 0;
    const { data: O, rowKey: A = "id" } = s, I = [], $e = (c, w, M) => {
      var G, ge;
      const T = { data: M != null ? M : { [A]: c }, top: 0, id: c, index: I.length };
      if (M || (T.lazy = !0), I.push(T), ((G = s.onAddRow) == null ? void 0 : G.call(this, T, w)) !== !1) {
        for (const U of o)
          if (((ge = U.onAddRow) == null ? void 0 : ge.call(this, T, w)) === !1)
            return;
      }
    };
    if (typeof O == "number")
      for (let c = 0; c < O; c++)
        $e(c, c);
    else
      Array.isArray(O) && O.forEach((c, w) => {
        typeof c == "object" ? $e(c[A], w, c) : $e(c, w);
      });
    const B = [];
    let ae = 0;
    I.forEach((c) => {
      var w, M;
      if (((w = s.rowFilter) == null ? void 0 : w.call(this, c)) !== !1) {
        for (const T of o)
          if (((M = T.rowFilter) == null ? void 0 : M.call(this, c)) === !1)
            return;
        c.index = B.length, c.top = ae, B.push(c), ae += a;
      }
    });
    let Ae = !1;
    s.rowSorter && (B.sort(s.rowSorter.bind(this)), Ae = !0), o.forEach((c) => {
      c.rowSorter && (B.sort(c.rowSorter.bind(this)), Ae = !0);
    }), Ae && B.forEach((c, w) => {
      c.index = w, c.top = w * a, B.push(c);
    });
    let F = s.height, V = 0;
    if (typeof F == "function" && (F = F()), F === "auto")
      V = p + g + ae;
    else if (typeof F == "object")
      V = Math.min(F.max, Math.max(F.min, p + g + ae));
    else if (F === "100%") {
      const c = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (c)
        V = c.clientHeight;
      else {
        V = 0, C(this, q, !0);
        return;
      }
    } else
      V = F;
    const { scrollTop: pe = 0, scrollLeft: He = 0, hoverCol: Ot } = this.state, Ue = V - p - g, qe = pe + Ue, Ke = [], Le = W - y - v;
    let X = 0;
    const Ne = [];
    let Ye = 0;
    if (b.forEach((c) => {
      c.realWidth ? X += c.realWidth : (Ne.push(c), Ye += c.flex);
    }), Ne.length) {
      const c = Math.max(0, Le - X);
      Ne.forEach((w) => {
        var G;
        const { minWidth: M = f, maxWidth: T = l } = w.setting;
        w.realWidth = Math.min(T, Math.max(M, Math.ceil(c * ((G = w.flex) != null ? G : 1) / Ye))), X += w.realWidth;
      });
    }
    X = 0, b.forEach((c) => {
      c.left += X, X += c.realWidth, (c.left + c.realWidth < He || c.left > He + Le) && (c.visible = !1);
    });
    const Ve = Math.floor(pe / a), Xe = Math.min(B.length, Math.ceil(qe / a)), It = [];
    for (let c = Ve; c < Xe; c++) {
      const w = B[c];
      w.top -= pe, Ke.push(w), w.lazy === !0 && It.push(w.id);
    }
    let ne = {
      allRows: I,
      width: W,
      height: V,
      rows: B,
      visibleRows: Ke,
      rowHeight: a,
      rowsHeight: Ue,
      rowsHeightTotal: ae,
      hoverCol: Ot,
      header: i,
      footer: r,
      headerHeight: p,
      footerHeight: g,
      colsInfo: {
        fixedLeftCols: _,
        fixedRightCols: k,
        scrollCols: b,
        flexLeftWidth: y,
        scrollWidth: Le,
        scrollWidthTotal: X,
        flexRightWidth: v
      },
      scrollBottom: qe,
      scrollTop: pe,
      scrollLeft: He,
      startRowIndex: Ve,
      endRowIndex: Xe
    };
    if (s.onLayout) {
      const c = s.onLayout.call(this, ne);
      c && (ne = c);
    }
    return o.forEach((c) => {
      if (c.onLayout) {
        const w = c.onLayout.call(this, ne);
        w && (ne = w);
      }
    }), C(this, se, Object.freeze(ne)), ne;
  }
  getColInfo(e) {
    var o, i;
    const { layout: s } = this;
    if (!!s)
      return (i = (o = s.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? o : s.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? i : s.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: s, hoverCol: o, colsInfo: i, headerHeight: r } = e;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ m(on, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: o,
        ...i
      });
    let a, h;
    if (typeof s == "function") {
      const f = s(e, this.state);
      typeof f == "object" && f && "__html" in f ? h = f : a = f;
    } else
      a = s;
    return /* @__PURE__ */ m("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: h
    }, a);
  }
  renderRows(e) {
    const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, hoverCol: a, colsInfo: h } = e;
    return /* @__PURE__ */ m(rn, {
      top: s,
      height: o,
      rows: i,
      rowHeight: r,
      hoverCol: a,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...h
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
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: h } = e, { scrollWidthTotal: f, scrollWidth: l } = i, { scrollbarSize: p = 10, horzScrollbarPos: g } = this.props;
    return f > l && s.push(/* @__PURE__ */ m(ut, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: f,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: g === "inside" ? 0 : -p,
      size: p,
      wheelContainer: this.ref
    })), h > a && s.push(/* @__PURE__ */ m(ut, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: h,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: p,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var e;
    C(this, q, !1), (e = d(this, S).afterRender) == null || e.call(this), d(this, H).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var p, g;
    const e = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: h, scrollbarHover: f } = (p = d(this, S)) != null ? p : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ m("div", {
      className: z("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": h,
        "dtable-scrolled-down": ((g = e == null ? void 0 : e.scrollTop) != null ? g : 0) > 0,
        "scrollbar-hover": f
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
Q = new WeakMap(), q = new WeakMap(), S = new WeakMap(), ee = new WeakMap(), H = new WeakMap(), se = new WeakMap(), R(je, "addPlugin", $t), R(je, "removePlugin", At);
function cn(t, n) {
  var i;
  typeof t == "boolean" && (n = t, t = void 0);
  const e = this.state.checkedRows, s = {}, o = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], s[r] = a);
  };
  return t === void 0 ? (n === void 0 && (n = !Ht.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!n);
  })) : (Array.isArray(t) ? t : [t]).forEach((a) => {
    o(a, n != null ? n : !e[a]);
  }), Object.keys(s).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, s);
  }), s;
}
function hn(t) {
  var n;
  return (n = this.state.checkedRows[t]) != null ? n : !1;
}
function Ht() {
  var t;
  return this.getChecks().length === ((t = this.layout) == null ? void 0 : t.allRows.length);
}
function dn() {
  return Object.keys(this.state.checkedRows);
}
const Lt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = cn.bind(this), this.isRowChecked = hn.bind(this), this.isAllRowChecked = Ht.bind(this), this.getChecks = dn.bind(this);
  },
  onRenderCell(t, n, e) {
    var i, r;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isRowChecked(n), h = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: a
      });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, n, e) {
    var i, r;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isAllRowChecked(), h = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: a
      });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow(t, n) {
    return this.isRowChecked(n.id) && (t.className = z(t.className, "is-checked")), t;
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
ue(Lt);
function Pe(t) {
  const n = this.nestedMap.get(t);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const e = this.state.collapsedRows, s = n.children && e && e[t];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = Pe.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Pe.call(this, n.parent).level + 1 : 0, n;
}
function fn(t, n) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (t === "HEADER")
    if (n === void 0 && (n = !Nt.call(this)), n) {
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
function Nt() {
  const t = this.nestedMap.values();
  for (const n of t)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function zt(t, n = 0, e) {
  var s;
  e || (e = [...t.keys()]);
  for (const o of e) {
    const i = t.get(o);
    !i || typeof i.order == "number" || (i.order = n++, (s = i.children) != null && s.length && (n = zt(t, n, i.children)));
  }
  return n;
}
const Wt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (t) => !!t.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = fn.bind(this), this.isAllCollapsed = Nt.bind(this), this.getNestedRowInfo = Pe.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(t) {
    var s, o, i;
    const n = t.data[(s = this.options.nestedParentKey) != null ? s : "parent"], e = (o = this.nestedMap.get(t.id)) != null ? o : {
      state: "",
      parent: n,
      level: 0
    };
    if (t.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (e.children = []), this.nestedMap.set(t.id, e), n) {
      let r = this.nestedMap.get(n);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(n, r)), r.children || (r.children = []), r.children.push(t.id);
    }
  },
  rowFilter(t) {
    return this.getNestedRowInfo(t.id).state !== "hidden";
  },
  rowSorter(t, n) {
    var i, r;
    const e = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id);
    typeof e.order != "number" && zt(this.nestedMap);
    const o = ((i = e.order) != null ? i : 0) - ((r = s.order) != null ? r : 0);
    return o === 0 ? t.index - n.index : o;
  },
  onRenderCell(t, n, e, s) {
    var r, a, h;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && t.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, e, s)) != null ? a : /* @__PURE__ */ m("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ m("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: f = o } = e.setting;
      f && (f === !0 && (f = (h = this.options.nestedIndent) != null ? h : 12), t.unshift(/* @__PURE__ */ m("div", {
        className: "dtable-nested-indent",
        style: { width: f * i.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, n, e) {
    var s, o;
    return e.setting.nestedToggle && t.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, n, e, void 0)) != null ? o : /* @__PURE__ */ m("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ m("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow(t, n) {
    const e = this.getNestedRowInfo(n.id);
    return Object.assign(t, {
      className: z(t.className, `is-nested-${e.state}`),
      "data-parent": e.parent
    }), t;
  },
  onRenderHeaderRow(t) {
    return t.className = z(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
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
ue(Wt);
const D = 24 * 60 * 60 * 1e3, L = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), le = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()), De = (t, n = new Date()) => L(t).getFullYear() === L(n).getFullYear(), Tt = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth()), un = (t, n = new Date()) => {
  t = L(t), n = L(n);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / e), o = Math.floor(n.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, pn = (t, n) => le(L(n), t), gn = (t, n) => le(L(n).getTime() - D, t), _n = (t, n) => le(L(n).getTime() + D, t), mn = (t, n) => le(L(n).getTime() - 2 * D, t), Se = (t, n = "yyyy-MM-dd hh:mm") => {
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
}, bn = (t, n, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Se(t, De(t) ? s.month : s.full);
  if (le(t, n))
    return o;
  const i = Se(n, De(t, n) ? Tt(t, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, yn = (t) => {
  const n = new Date().getTime();
  switch (t) {
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
}, Oe = (t, n, e = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return t *= 365, Oe(t, "day", e, s);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Oe(t, "day", e, s);
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
const jt = {
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
      onRenderCell(t, n, e, s) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = ce(o, s);
        return t[0] = /* @__PURE__ */ m("a", {
          href: r,
          ...i
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, n, e, s) {
        const { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ m("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ m("img", {
          src: s ? s[r] : ""
        }));
        return o ? t.unshift(a) : t[0] = a, t;
      }
    },
    circleProgress: {
      onRenderCell(t, n, e) {
        const { circleSize: s = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (s - o) / 2, h = s / 2, f = t[0];
        return t[0] = /* @__PURE__ */ m("svg", {
          width: s,
          height: s
        }, /* @__PURE__ */ m("circle", {
          cx: h,
          cy: h,
          r: a,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ m("circle", {
          cx: h,
          cy: h,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ m("text", {
          x: h,
          y: h + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), t;
      }
    },
    actionButtons: {
      onRenderCell(t, n, e, s) {
        const o = s == null ? void 0 : s[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((h) => {
            typeof h == "string" && (h = { action: h });
            const f = r[h.action];
            return f && (h = { className: a, ...f, ...h }), ce(i, h);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, n, e) {
        let { format: s } = e.setting;
        if (!s)
          return t;
        typeof s == "string" && (s = { type: "text", format: s });
        const { format: o, type: i } = s, r = t[0];
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = Se(r, o) : i === "html" ? t[0] = { html: ce(o, r) } : t[0] = ce(o, r), t;
      }
    }
  }
};
ue(jt);
const Pt = {
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
  onRenderHeaderCell(t, n, e) {
    const { group: s } = e.setting;
    if (s) {
      const o = this.headerGroups.get(s), i = this.layout.headerHeight / 2;
      if (e.name === o.cols[0]) {
        const r = o.cols.reduce((h, f) => {
          var l, p;
          return h + ((p = (l = this.getColInfo(f)) == null ? void 0 : l.realWidth) != null ? p : 0);
        }, 0), a = {
          height: i - 1,
          width: r - 1
        };
        t.push(/* @__PURE__ */ m("div", {
          class: "dtable-header-group",
          style: a
        }, s));
      }
      t.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return t;
  }
};
ue(Pt);
const vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Lt,
  nested: Wt,
  rich: jt,
  headerGroup: Pt
}, Symbol.toStringTag, { value: "Module" }));
var de;
class be {
  constructor(n, e) {
    R(this, "element");
    R(this, "options");
    $(this, de, yt());
    var s;
    this.element = n, this.options = { ...Te(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, de).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Yt(/* @__PURE__ */ m(je, {
      ref: d(this, de),
      ...this.options
    }), this.element);
  }
}
de = new WeakMap(), R(be, "NAME", "zui.dtable"), R(be, "definePlugin", ue), R(be, "removePlugin", At), R(be, "plugins", vn);
let wn = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((n, e) => (e &= 63, e < 36 ? n += e.toString(36) : e < 62 ? n += (e - 26).toString(36).toUpperCase() : e > 62 ? n += "-" : n += "_", n), "");
var fe, K, j, oe, ie, ve;
const Ge = class {
  constructor(n, e = "local") {
    $(this, ie);
    $(this, fe, void 0);
    $(this, K, void 0);
    $(this, j, void 0);
    $(this, oe, void 0);
    C(this, fe, e), C(this, K, `ZUI_STORE:${n != null ? n : wn()}`), C(this, j, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, fe);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || C(this, oe, new Ge(d(this, K), "session")), d(this, oe));
  }
  get(n, e) {
    const s = d(this, j).getItem(me(this, ie, ve).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(n, e) {
    if (e == null)
      return this.remove(n);
    d(this, j).setItem(me(this, ie, ve).call(this, n), JSON.stringify(e));
  }
  remove(n) {
    d(this, j).removeItem(me(this, ie, ve).call(this, n));
  }
  each(n) {
    for (let e = 0; e < d(this, j).length; e++) {
      const s = d(this, j).key(e);
      if (s != null && s.startsWith(d(this, K))) {
        const o = d(this, j).getItem(s);
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
let xe = Ge;
fe = new WeakMap(), K = new WeakMap(), j = new WeakMap(), oe = new WeakMap(), ie = new WeakSet(), ve = function(n) {
  return `${d(this, K)}:${n}`;
};
const kn = new xe("DEFAULT");
function Rn(t, n = "local") {
  return new xe(t, n);
}
Object.assign(kn, { create: Rn });
function Cn() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function Sn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function xn(t, n) {
  Cn(), t.classList.add("block"), gt(t, n), t.onclick = (e) => Mn(e, t), window.addEventListener("resize", () => {
    gt(t, n);
  });
}
function Dt(t) {
  var n;
  Sn(), (n = t.classList) == null || n.remove("block");
}
function gt(t, n) {
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
function Mn(t, n) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), Dt(n));
}
function En(t) {
  var n, e;
  return t instanceof HTMLAnchorElement ? (e = (n = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : e.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const n = t.target, e = n.closest("[data-toggle=modal]");
  if (e) {
    const s = En(e);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    xn(o, e.dataset.position || "fit");
  } else
    n.className.includes("modal") && Dt(n);
});
const Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: D,
  createDate: L,
  isSameDay: le,
  isSameYear: De,
  isSameMonth: Tt,
  isSameWeek: un,
  isToday: pn,
  isYesterday: gn,
  isTomorrow: _n,
  isDBY: mn,
  formatDate: Se,
  formatDateSpan: bn,
  getTimeBeforeDesc: yn,
  calculateTimestamp: Oe,
  formatString: ce,
  formatBytes: Jt,
  convertBytes: Zt
}, Symbol.toStringTag, { value: "Module" }));
var P, N;
class $n {
  constructor(n) {
    $(this, P, void 0);
    $(this, N, void 0);
    C(this, P, n), C(this, N, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, P).parentElement.parentElement, d(this, P).parentElement), this.addActive(d(this, N).parentElement, d(this, N)), d(this, N).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, N, d(this, P)), this.addActive(d(this, N).parentElement, d(this, N)), C(this, P, document.querySelector(`[href='#${d(this, N).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, N).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, N).getAttribute("id")}']`)), this.addActive(d(this, P).parentElement.parentElement, d(this, P).parentElement);
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
P = new WeakMap(), N = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new $n(t.target).showTarget());
});
export {
  Hn as Avatar,
  be as DTable,
  $n as NavTabs,
  ut as Scrollbar,
  Ln as browser,
  vn as dtablePlugins,
  Nn as helpers,
  kn as store
};
