var Ot = Object.defineProperty;
var Ut = (t, n, e) => n in t ? Ot(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var S = (t, n, e) => (Ut(t, typeof n != "symbol" ? n + "" : n, e), e), ze = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var d = (t, n, e) => (ze(t, n, "read from private field"), e ? e.call(t) : n.get(t)), $ = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, R = (t, n, e, s) => (ze(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var _e = (t, n, e) => (ze(t, n, "access private method"), e);
var Ee, x, gt, ce, lt, we = {}, _t = [], Ft = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function mt(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function m(t, n, e) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ee.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      r[i] === void 0 && (r[i] = t.defaultProps[i]);
  return ye(t, r, s, o, null);
}
function ye(t, n, e, s, o) {
  var i = { type: t, props: n, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++gt : o };
  return o == null && x.vnode != null && x.vnode(i), i;
}
function bt() {
  return { current: null };
}
function Me(t) {
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
function yt(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return yt(t);
  }
}
function at(t) {
  (!t.__d && (t.__d = !0) && ce.push(t) && !ke.__r++ || lt !== x.debounceRendering) && ((lt = x.debounceRendering) || setTimeout)(ke);
}
function ke() {
  for (var t; ke.__r = ce.length; )
    t = ce.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), ce = [], t.some(function(n) {
      var e, s, o, i, r, a;
      n.__d && (r = (i = (e = n).__v).__e, (a = e.__P) && (s = [], (o = K({}, i)).__v = i.__v + 1, Oe(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? re(i) : r, i.__h), St(s, i), i.__e != r && yt(i)));
    });
}
function vt(t, n, e, s, o, i, r, a, h, f) {
  var l, p, g, u, _, k, b, y = s && s.__k || _t, v = y.length;
  for (e.__k = [], l = 0; l < n.length; l++)
    if ((u = e.__k[l] = (u = n[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? ye(null, u, null, null, u) : Array.isArray(u) ? ye(Me, { children: u }, null, null, null) : u.__b > 0 ? ye(u.type, u.props, u.key, null, u.__v) : u) != null) {
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
      Oe(t, u, g = g || we, o, i, r, a, h, f), _ = u.__e, (p = u.ref) && g.ref != p && (b || (b = []), g.ref && b.push(g.ref, null, u), b.push(p, u.__c || _, u)), _ != null ? (k == null && (k = _), typeof u.type == "function" && u.__k === g.__k ? u.__d = h = wt(u, h, t) : h = kt(t, u, g, y, _, h), typeof e.type == "function" && (e.__d = h)) : h && g.__e == h && h.parentNode != t && (h = re(g));
    }
  for (e.__e = k, l = v; l--; )
    y[l] != null && (typeof e.type == "function" && y[l].__e != null && y[l].__e == e.__d && (e.__d = re(s, l + 1)), Ct(y[l], y[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      Rt(b[l], b[++l], b[++l]);
}
function wt(t, n, e) {
  for (var s, o = t.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = t, n = typeof s.type == "function" ? wt(s, n, e) : kt(e, s, s, o, s.__e, n));
  return n;
}
function kt(t, n, e, s, o, i) {
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
function Bt(t, n, e, s, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in n || Se(t, i, null, e[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === n[i] || Se(t, i, n[i], e[i], s);
}
function ct(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Ft.test(n) ? e : e + "px";
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
            e && n in e || ct(t.style, n, "");
        if (e)
          for (n in e)
            s && e[n] === s[n] || ct(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + i] = e, e ? s || t.addEventListener(n, i ? dt : ht, i) : t.removeEventListener(n, i ? dt : ht, i);
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
function ht(t) {
  this.l[t.type + !1](x.event ? x.event(t) : t);
}
function dt(t) {
  this.l[t.type + !0](x.event ? x.event(t) : t);
}
function Oe(t, n, e, s, o, i, r, a, h) {
  var f, l, p, g, u, _, k, b, y, v, M, T, D, A = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, a = n.__e = e.__e, n.__h = null, i = [a]), (f = x.__b) && f(n);
  try {
    e:
      if (typeof A == "function") {
        if (b = n.props, y = (f = A.contextType) && s[f.__c], v = f ? y ? y.props.value : f.__ : s, e.__c ? k = (l = n.__c = e.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? n.__c = l = new A(b, v) : (n.__c = l = new te(b, v), l.constructor = A, l.render = qt), y && y.sub(l), l.props = b, l.state || (l.state = {}), l.context = v, l.__n = s, p = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = K({}, l.__s)), K(l.__s, A.getDerivedStateFromProps(b, l.__s))), g = l.props, u = l.state, p)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, v) === !1 || n.__v === e.__v) {
            l.props = b, l.state = l.__s, n.__v !== e.__v && (l.__d = !1), l.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(O) {
              O && (O.__ = n);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(g, u, _);
          });
        }
        if (l.context = v, l.props = b, l.__v = n, l.__P = t, M = x.__r, T = 0, "prototype" in A && A.prototype.render)
          l.state = l.__s, l.__d = !1, M && M(n), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, M && M(n), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++T < 25);
        l.state = l.__s, l.getChildContext != null && (s = K(K({}, s), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(g, u)), D = f != null && f.type === Me && f.key == null ? f.props.children : f, vt(t, Array.isArray(D) ? D : [D], n, e, s, o, i, r, a, h), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), k && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = Yt(e.__e, n, e, s, o, i, r, h);
    (f = x.diffed) && f(n);
  } catch (O) {
    n.__v = null, (h || i != null) && (n.__e = a, n.__h = !!h, i[i.indexOf(a)] = null), x.__e(O, n, e);
  }
}
function St(t, n) {
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
function Yt(t, n, e, s, o, i, r, a) {
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
    if (i = i && Ee.call(t.childNodes), f = (p = e.props || we).dangerouslySetInnerHTML, l = g.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (p = {}, _ = 0; _ < t.attributes.length; _++)
          p[t.attributes[_].name] = t.attributes[_].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (Bt(t, g, p, o, a), l)
      n.__k = [];
    else if (_ = n.props.children, vt(t, Array.isArray(_) ? _ : [_], n, e, s, o && u !== "foreignObject", i, r, i ? i[0] : e.__k && re(e, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && mt(i[_]);
    a || ("value" in g && (_ = g.value) !== void 0 && (_ !== t.value || u === "progress" && !_ || u === "option" && _ !== p.value) && Se(t, "value", _, p.value, !1), "checked" in g && (_ = g.checked) !== void 0 && _ !== t.checked && Se(t, "checked", _, p.checked, !1));
  }
  return t;
}
function Rt(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (s) {
    x.__e(s, e);
  }
}
function Ct(t, n, e) {
  var s, o;
  if (x.unmount && x.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Rt(s, null, n)), (s = t.__c) != null) {
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
      s[o] && Ct(s[o], n, typeof t.type != "function");
  e || t.__e == null || mt(t.__e), t.__e = t.__d = void 0;
}
function qt(t, n, e) {
  return this.constructor(t, e);
}
function Gt(t, n, e) {
  var s, o, i;
  x.__ && x.__(t, n), o = (s = typeof e == "function") ? null : e && e.__k || n.__k, i = [], Oe(n, t = (!s && e || n).__k = m(Me, null, [t]), o || we, we, n.ownerSVGElement !== void 0, !s && e ? [e] : o ? null : n.firstChild ? Ee.call(n.childNodes) : null, i, !s && e ? e : o ? o.__e : n.firstChild, s), St(i, t);
}
Ee = _t.slice, x = { __e: function(t, n, e, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        t = a;
      }
  throw t;
} }, gt = 0, te.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, e), this.props)), t && K(e, t), t != null && this.__v && (n && this.__h.push(n), at(this));
}, te.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), at(this));
}, te.prototype.render = Me, ce = [], ke.__r = 0;
const z = (...t) => t.map((n) => Array.isArray(n) ? z(...n) : typeof n == "function" ? z(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((e) => {
  const s = n[e];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class Mn extends te {
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
const Kt = (t) => {
  const n = {};
  if (!t)
    return n;
  const e = Object.values(t.attributes);
  return e && e.length > 0 && e.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class Vt extends HTMLElement {
  constructor() {
    super();
    S(this, "$button");
    S(this, "$icon");
    S(this, "onClick");
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
    const e = Kt(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Vt);
var J, Z;
class ft extends te {
  constructor(e) {
    var s;
    super(e);
    $(this, J, 0);
    $(this, Z, null);
    S(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: s } = this.props, o = e.target;
      !o || !s || (typeof s == "string" && o.closest(s) || typeof s == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1)) && e.preventDefault();
    });
    S(this, "_handleMouseMove", (e) => {
      const { dragStart: s } = this.state;
      s && (d(this, J) && cancelAnimationFrame(d(this, J)), R(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - s.x : e.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), R(this, J, 0);
      })), e.preventDefault());
    });
    S(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    S(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    S(this, "_handleClick", (e) => {
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
    e && (R(this, Z, typeof e == "string" ? document : e.current), d(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
function Xt(t) {
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
function Jt(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function Zt(t, n) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  const s = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Xt,
  domReady: Jt,
  isElementVisible: Zt,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
function xt() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var e;
    (e = n.parentElement) == null || e.classList.remove("open");
  });
}
function Qt(t) {
  const n = t.parentElement, e = t.nextElementSibling;
  !n || !e || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (xt(), n.classList.add("open")));
}
document.addEventListener("click", function(t) {
  const e = t.target.closest("[data-toggle=dropdown]");
  e ? Qt(e) : xt();
});
function Ue({ col: t, className: n, height: e, rowID: s, hoverCol: o, rowData: i, onRenderCell: r, style: a, children: h, ...f }) {
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
function en({ col: t, children: n, style: e, ...s }) {
  const { sortType: o } = t.setting;
  return /* @__PURE__ */ m(Ue, {
    col: t,
    style: { ...e, ...t.setting.style },
    "data-sort": o || null,
    "data-type": t.type,
    ...s
  }, t.setting.title, o && /* @__PURE__ */ m("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function Te({ rowID: t, className: n, top: e = 0, left: s = 0, width: o, height: i, cols: r, data: a, hoverCol: h, CellComponent: f = Ue, onRenderCell: l }) {
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
  CellComponent: g = Ue,
  onRenderCell: u,
  hoverCol: _,
  data: k,
  ...b
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(Te, {
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
  r != null && r.length && (v = /* @__PURE__ */ m(Te, {
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
  let M = null;
  i != null && i.length && (M = /* @__PURE__ */ m(Te, {
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
  const T = { top: e, height: s, lineHeight: `${s - 2}px` };
  return /* @__PURE__ */ m("div", {
    className: z("dtable-row", n),
    style: T,
    "data-id": t,
    ...b
  }, y, v, M);
}
function tn({ height: t, onRenderRow: n, ...e }) {
  let s = {
    height: t,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: en
  };
  return n && (s = n(s)), /* @__PURE__ */ m("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ m(Et, {
    ...s
  }));
}
function nn({
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
const Re = /* @__PURE__ */ new Map();
function Mt(t, n = !1) {
  if (!n && Re.has(t.name))
    throw new Error(`DTable: Plugin with name ${t.name} already exists`);
  Re.set(t.name, t);
}
function fe(t, n = !1) {
  Mt(t, n);
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
function ut(t) {
  return Re.get(t);
}
function $t(t) {
  return Re.delete(t);
}
function sn(t) {
  const n = /* @__PURE__ */ new Map();
  return [t == null ? void 0 : t.plugins].flat().reduce((e, s) => {
    var i;
    if (!s)
      return e;
    let o;
    return typeof s == "string" ? (o = ut(s), o || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? o = s.plugin : typeof s == "object" ? o = s : console.warn("DTable: Invalid plugin", s), o && !n.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (n.has(r))
        return;
      const a = ut(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      e.push(a), n.set(a.name, a);
    }), e.push(o), n.set(o.name, o)), e;
  }, []);
}
function on(t, n) {
  return t.reduce((e, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, n);
}
function We() {
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
var Q, q, C, ee, H, se;
class je extends te {
  constructor(e) {
    super(e);
    S(this, "ref", bt());
    $(this, Q, 0);
    $(this, q, !1);
    $(this, C, void 0);
    $(this, ee, void 0);
    $(this, H, []);
    $(this, se, void 0);
    S(this, "_handleResize", () => {
      d(this, Q) && cancelAnimationFrame(d(this, Q)), R(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), R(this, Q, 0);
      }));
    });
    S(this, "_handleRenderRow", (e, s) => (d(this, C).onRenderRow && (e = d(this, C).onRenderRow.call(this, e, s)), d(this, H).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, s));
    }), e));
    S(this, "_handleRenderHeaderRow", (e) => (d(this, C).onRenderHeaderRow && (e = d(this, C).onRenderHeaderRow.call(this, e)), d(this, H).forEach((s) => {
      s.onRenderHeaderRow && (e = s.onRenderHeaderRow.call(this, e));
    }), e));
    S(this, "_handleRenderCell", (e, s, o, i) => {
      const r = s === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[r] && (e = o.setting[r].call(this, e, s, o, i)), d(this, C)[r] && (e = d(this, C)[r].call(this, e, s, o, i)), d(this, H).forEach((a) => {
        a[r] && (e = a[r].call(this, e, s, o, i));
      }), e;
    });
    S(this, "_handleScroll", (e, s) => {
      s === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    S(this, "_handleClick", (e) => {
      var h, f, l, p, g, u, _, k;
      const s = e.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (h = i == null ? void 0 : i.getAttribute("data-col")) != null ? h : "", a = (f = o.getAttribute("data-id")) != null ? f : "";
      if (a === "HEADER")
        i && ((l = d(this, C).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), d(this, H).forEach((b) => {
          var y;
          (y = b.onHeaderCellClick) == null || y.call(this, e, { colName: r, element: i });
        }));
      else {
        const b = (p = d(this, se)) == null ? void 0 : p.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((g = d(this, C).onCellClick) == null ? void 0 : g.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const y of d(this, H))
            if (((u = y.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((_ = d(this, C).onRowClick) == null ? void 0 : _.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const y of d(this, H))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
            return;
      }
    });
    S(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: s } = d(this, C);
      if (!s)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || s === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: i });
    });
    S(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...We(), ...e };
    R(this, C, Object.freeze(s)), R(this, ee, Object.freeze(sn(s))), d(this, ee).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return d(this, C);
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
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, C).responsive && window.addEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, q) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: e } = this.ref;
    e && (e.removeEventListener("click", this._handleClick), d(this, C).colHover && (e.removeEventListener("mouseover", this._handleMouseOver), e.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var s;
      (s = d(this, C).onScroll) == null || s.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var s;
      (s = d(this, C).onScroll) == null || s.call(this, e, "vert");
    });
  }
  getLayout() {
    var Xe, Je, Ze;
    const e = We(), s = on(d(this, ee), { ...e, ...this.props }), o = d(this, ee).filter((c) => !c.when || c.when(s));
    R(this, H, Object.freeze(o)), o.forEach((c) => {
      var E;
      const w = (E = c.beforeLayout) == null ? void 0 : E.call(this, s);
      w && Object.assign(s, w);
    }), R(this, C, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: h = e.minColWidth,
      minColWidth: f = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = s, p = i ? s.headerHeight || a : 0, g = r ? s.footerHeight || a : 0, u = (c, w, E) => (c && (w && (c = Math.max(w, c)), E && (c = Math.min(E, c))), c), _ = [], k = [], b = [];
    let y = 0, v = 0;
    (Xe = s.cols) == null || Xe.forEach((c) => {
      var Qe, et, tt;
      if (c.hidden)
        return;
      c = { ...c };
      const { minWidth: w = f, maxWidth: E = l } = c, W = u((Qe = c.width) != null ? Qe : 0, w, E), B = (et = c.flex) != null ? et : 1, pe = B * u(h, w, E), Y = {
        name: c.name,
        type: (tt = c.type) != null ? tt : "",
        setting: c,
        left: 0,
        flex: B,
        realWidth: W,
        flexWidth: pe,
        visible: !0
      };
      c.fixed === "left" ? (Y.left = y, y += W, _.push(Y)) : c.fixed === "right" ? (Y.left = v, v += W, k.push(Y)) : b.push(Y), o.forEach((nt) => {
        var st, ot, it;
        const ge = (ot = nt.colTypes) == null ? void 0 : ot[(st = c.type) != null ? st : ""];
        if (ge) {
          const rt = typeof ge == "function" ? ge(c) : ge;
          rt && Object.assign(c, rt);
        }
        (it = nt.onAddCol) == null || it.call(this, Y);
      });
    });
    let M = s.width, T = 0;
    if (typeof M == "function" && (M = M()), M === "auto")
      T = y + v, b.forEach((c) => {
        c.realWidth || (c.realWidth = c.flexWidth), T += c.realWidth;
      });
    else if (M === "100%") {
      const c = (Je = this.ref.current) == null ? void 0 : Je.parentElement;
      if (c)
        T = c.clientWidth;
      else {
        T = 0, R(this, q, !0);
        return;
      }
    } else
      T = M != null ? M : 0;
    const { data: D, rowKey: A = "id" } = s, O = [], $e = (c, w, E) => {
      var B, pe;
      const W = { data: E != null ? E : { [A]: c }, top: 0, id: c, index: O.length };
      if (E || (W.lazy = !0), O.push(W), ((B = s.onAddRow) == null ? void 0 : B.call(this, W, w)) !== !1) {
        for (const Y of o)
          if (((pe = Y.onAddRow) == null ? void 0 : pe.call(this, W, w)) === !1)
            return;
      }
    };
    if (typeof D == "number")
      for (let c = 0; c < D; c++)
        $e(c, c);
    else
      Array.isArray(D) && D.forEach((c, w) => {
        typeof c == "object" ? $e(c[A], w, c) : $e(c, w);
      });
    const U = [];
    let ae = 0;
    O.forEach((c) => {
      var w, E;
      if (((w = s.rowFilter) == null ? void 0 : w.call(this, c)) !== !1) {
        for (const W of o)
          if (((E = W.rowFilter) == null ? void 0 : E.call(this, c)) === !1)
            return;
        c.index = U.length, c.top = ae, U.push(c), ae += a;
      }
    });
    let Ae = !1;
    s.rowSorter && (U.sort(s.rowSorter.bind(this)), Ae = !0), o.forEach((c) => {
      c.rowSorter && (U.sort(c.rowSorter.bind(this)), Ae = !0);
    }), Ae && U.forEach((c, w) => {
      c.index = w, c.top = w * a, U.push(c);
    });
    let F = s.height, V = 0;
    if (typeof F == "function" && (F = F()), F === "auto")
      V = p + g + ae;
    else if (typeof F == "object")
      V = Math.min(F.max, Math.max(F.min, p + g + ae));
    else if (F === "100%") {
      const c = (Ze = this.ref.current) == null ? void 0 : Ze.parentElement;
      if (c)
        V = c.clientHeight;
      else {
        V = 0, R(this, q, !0);
        return;
      }
    } else
      V = F;
    const { scrollTop: ue = 0, scrollLeft: He = 0, hoverCol: Pt } = this.state, Be = V - p - g, Ye = ue + Be, qe = [], Le = T - y - v;
    let X = 0;
    const Ne = [];
    let Ge = 0;
    if (b.forEach((c) => {
      c.realWidth ? X += c.realWidth : (Ne.push(c), Ge += c.flex);
    }), Ne.length) {
      const c = Math.max(0, Le - X);
      Ne.forEach((w) => {
        var B;
        const { minWidth: E = f, maxWidth: W = l } = w.setting;
        w.realWidth = Math.min(W, Math.max(E, Math.ceil(c * ((B = w.flex) != null ? B : 1) / Ge))), X += w.realWidth;
      });
    }
    X = 0, b.forEach((c) => {
      c.left += X, X += c.realWidth, (c.left + c.realWidth < He || c.left > He + Le) && (c.visible = !1);
    });
    const Ke = Math.floor(ue / a), Ve = Math.min(U.length, Math.ceil(Ye / a)), Dt = [];
    for (let c = Ke; c < Ve; c++) {
      const w = U[c];
      w.top -= ue, qe.push(w), w.lazy === !0 && Dt.push(w.id);
    }
    let ne = {
      allRows: O,
      width: T,
      height: V,
      rows: U,
      visibleRows: qe,
      rowHeight: a,
      rowsHeight: Be,
      rowsHeightTotal: ae,
      hoverCol: Pt,
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
      scrollBottom: Ye,
      scrollTop: ue,
      scrollLeft: He,
      startRowIndex: Ke,
      endRowIndex: Ve
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
    }), R(this, se, Object.freeze(ne)), ne;
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
      return /* @__PURE__ */ m(tn, {
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
    return /* @__PURE__ */ m(nn, {
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
    return f > l && s.push(/* @__PURE__ */ m(ft, {
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
    })), h > a && s.push(/* @__PURE__ */ m(ft, {
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
    R(this, q, !1), (e = d(this, C).afterRender) == null || e.call(this), d(this, H).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var p, g;
    const e = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: h, scrollbarHover: f } = (p = d(this, C)) != null ? p : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
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
Q = new WeakMap(), q = new WeakMap(), C = new WeakMap(), ee = new WeakMap(), H = new WeakMap(), se = new WeakMap(), S(je, "addPlugin", Mt), S(je, "removePlugin", $t);
function rn(t, n) {
  var i;
  typeof t == "boolean" && (n = t, t = void 0);
  const e = this.state.checkedRows, s = {}, o = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], s[r] = a);
  };
  return t === void 0 ? (n === void 0 && (n = !At.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!n);
  })) : (Array.isArray(t) ? t : [t]).forEach((a) => {
    o(a, n != null ? n : !e[a]);
  }), Object.keys(s).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, s);
  }), s;
}
function ln(t) {
  var n;
  return (n = this.state.checkedRows[t]) != null ? n : !1;
}
function At() {
  var t;
  return this.getChecks().length === ((t = this.layout) == null ? void 0 : t.allRows.length);
}
function an() {
  return Object.keys(this.state.checkedRows);
}
const Ht = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = rn.bind(this), this.isRowChecked = ln.bind(this), this.isAllRowChecked = At.bind(this), this.getChecks = an.bind(this);
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
fe(Ht);
function Ie(t) {
  const n = this.nestedMap.get(t);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const e = this.state.collapsedRows, s = n.children && e && e[t];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = Ie.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Ie.call(this, n.parent).level + 1 : 0, n;
}
function cn(t, n) {
  var s;
  let e = (s = this.state.collapsedRows) != null ? s : {};
  if (t === "HEADER")
    if (n === void 0 && (n = !Lt.call(this)), n) {
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
function Lt() {
  const t = this.nestedMap.values();
  for (const n of t)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Nt(t, n = 0, e) {
  var s;
  e || (e = [...t.keys()]);
  for (const o of e) {
    const i = t.get(o);
    !i || typeof i.order == "number" || (i.order = n++, (s = i.children) != null && s.length && (n = Nt(t, n, i.children)));
  }
  return n;
}
const zt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (t) => !!t.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = cn.bind(this), this.isAllCollapsed = Lt.bind(this), this.getNestedRowInfo = Ie.bind(this);
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
    typeof e.order != "number" && Nt(this.nestedMap);
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
fe(zt);
function me(t, ...n) {
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
const P = 24 * 60 * 60 * 1e3, L = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), le = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()), Pe = (t, n = new Date()) => L(t).getFullYear() === L(n).getFullYear(), Tt = (t, n = new Date()) => (t = L(t), n = L(n), t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth()), hn = (t, n = new Date()) => {
  t = L(t), n = L(n);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / e), o = Math.floor(n.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, dn = (t, n) => le(L(n), t), fn = (t, n) => le(L(n).getTime() - P, t), un = (t, n) => le(L(n).getTime() + P, t), pn = (t, n) => le(L(n).getTime() - 2 * P, t), Ce = (t, n = "yyyy-MM-dd hh:mm") => {
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
}, gn = (t, n, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Ce(t, Pe(t) ? s.month : s.full);
  if (le(t, n))
    return o;
  const i = Ce(n, Pe(t, n) ? Tt(t, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, _n = (t) => {
  const n = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return n - P * 7;
    case "oneMonth":
      return n - P * 31;
    case "threeMonth":
      return n - P * 31 * 3;
    case "halfYear":
      return n - P * 183;
    case "oneYear":
      return n - P * 365;
    case "twoYear":
      return n - 2 * (P * 365);
    default:
      return 0;
  }
}, De = (t, n, e = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return t *= 365, De(t, "day", e, s);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, De(t, "day", e, s);
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
const Wt = {
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
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = me(o, s);
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
            return f && (h = { className: a, ...f, ...h }), me(i, h);
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
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = Ce(r, o) : i === "html" ? t[0] = { html: me(o, r) } : t[0] = me(o, r), t;
      }
    }
  }
};
fe(Wt);
const jt = {
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
fe(jt);
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Ht,
  nested: zt,
  rich: Wt,
  headerGroup: jt
}, Symbol.toStringTag, { value: "Module" }));
var he;
class be {
  constructor(n, e) {
    S(this, "element");
    S(this, "options");
    $(this, he, bt());
    var s;
    this.element = n, this.options = { ...We(), ...e }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, he).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Gt(/* @__PURE__ */ m(je, {
      ref: d(this, he),
      ...this.options
    }), this.element);
  }
}
he = new WeakMap(), S(be, "NAME", "zui.dtable"), S(be, "definePlugin", fe), S(be, "removePlugin", $t), S(be, "plugins", mn);
let bn = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((n, e) => (e &= 63, e < 36 ? n += e.toString(36) : e < 62 ? n += (e - 26).toString(36).toUpperCase() : e > 62 ? n += "-" : n += "_", n), "");
var de, G, j, oe, ie, ve;
const Fe = class {
  constructor(n, e = "local") {
    $(this, ie);
    $(this, de, void 0);
    $(this, G, void 0);
    $(this, j, void 0);
    $(this, oe, void 0);
    R(this, de, e), R(this, G, `ZUI_STORE:${n != null ? n : bn()}`), R(this, j, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, de);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || R(this, oe, new Fe(d(this, G), "session")), d(this, oe));
  }
  get(n, e) {
    const s = d(this, j).getItem(_e(this, ie, ve).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : e;
  }
  set(n, e) {
    if (e == null)
      return this.remove(n);
    d(this, j).setItem(_e(this, ie, ve).call(this, n), JSON.stringify(e));
  }
  remove(n) {
    d(this, j).removeItem(_e(this, ie, ve).call(this, n));
  }
  each(n) {
    for (let e = 0; e < d(this, j).length; e++) {
      const s = d(this, j).key(e);
      if (s != null && s.startsWith(d(this, G))) {
        const o = d(this, j).getItem(s);
        typeof o == "string" && n(s.substring(d(this, G).length + 1), JSON.parse(o));
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
let xe = Fe;
de = new WeakMap(), G = new WeakMap(), j = new WeakMap(), oe = new WeakMap(), ie = new WeakSet(), ve = function(n) {
  return `${d(this, G)}:${n}`;
};
const yn = new xe("DEFAULT");
function vn(t, n = "local") {
  return new xe(t, n);
}
Object.assign(yn, { create: vn });
function wn() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function kn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Sn(t, n) {
  wn(), t.classList.add("block"), pt(t, n), t.onclick = (e) => Rn(e, t), window.addEventListener("resize", () => {
    pt(t, n);
  });
}
function It(t) {
  var n;
  kn(), (n = t.classList) == null || n.remove("block");
}
function pt(t, n) {
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
function Rn(t, n) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), It(n));
}
function Cn(t) {
  var n, e;
  return t instanceof HTMLAnchorElement ? (e = (n = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : e.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const n = t.target, e = n.closest("[data-toggle=modal]");
  if (e) {
    const s = Cn(e);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Sn(o, e.dataset.position || "fit");
  } else
    n.className.includes("modal") && It(n);
});
const An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: P,
  createDate: L,
  isSameDay: le,
  isSameYear: Pe,
  isSameMonth: Tt,
  isSameWeek: hn,
  isToday: dn,
  isYesterday: fn,
  isTomorrow: un,
  isDBY: pn,
  formatDate: Ce,
  formatDateSpan: gn,
  getTimeBeforeDesc: _n,
  calculateTimestamp: De
}, Symbol.toStringTag, { value: "Module" }));
var I, N;
class xn {
  constructor(n) {
    $(this, I, void 0);
    $(this, N, void 0);
    R(this, I, n), R(this, N, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, I).parentElement.parentElement, d(this, I).parentElement), this.addActive(d(this, N).parentElement, d(this, N)), d(this, N).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, N, d(this, I)), this.addActive(d(this, N).parentElement, d(this, N)), R(this, I, document.querySelector(`[href='#${d(this, N).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, N).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, N).getAttribute("id")}']`)), this.addActive(d(this, I).parentElement.parentElement, d(this, I).parentElement);
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
I = new WeakMap(), N = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new xn(t.target).showTarget());
});
export {
  Mn as Avatar,
  be as DTable,
  xn as NavTabs,
  ft as Scrollbar,
  $n as browser,
  mn as dtablePlugins,
  An as helpers,
  yn as store
};
