var Ve = Object.defineProperty;
var Xe = (e, n, t) => n in e ? Ve(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var R = (e, n, t) => (Xe(e, typeof n != "symbol" ? n + "" : n, t), t), Pt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var f = (e, n, t) => (Pt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), M = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, C = (e, n, t, s) => (Pt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var vt = (e, n, t) => (Pt(e, n, "access private method"), t);
var At, E, ye, ut, fe, St = {}, ve = [], Je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Y(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function we(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function m(e, n, t) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? At.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return Rt(e, r, s, o, null);
}
function Rt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++ye : o };
  return o == null && E.vnode != null && E.vnode(i), i;
}
function Re() {
  return { current: null };
}
function Ht(e) {
  return e.children;
}
function et(e, n) {
  this.props = e, this.context = n;
}
function lt(e, n) {
  if (n == null)
    return e.__ ? lt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? lt(e) : null;
}
function ke(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ke(e);
  }
}
function ue(e) {
  (!e.__d && (e.__d = !0) && ut.push(e) && !Ct.__r++ || fe !== E.debounceRendering) && ((fe = E.debounceRendering) || setTimeout)(Ct);
}
function Ct() {
  for (var e; Ct.__r = ut.length; )
    e = ut.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ut = [], e.some(function(n) {
      var t, s, o, i, r, a;
      n.__d && (r = (i = (t = n).__v).__e, (a = t.__P) && (s = [], (o = Y({}, i)).__v = i.__v + 1, Gt(a, i, o, t.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? lt(i) : r, i.__h), Ee(s, i), i.__e != r && ke(i)));
    });
}
function Se(e, n, t, s, o, i, r, a, c, d) {
  var l, g, p, u, _, k, b, y = s && s.__k || ve, S = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((u = t.__k[l] = (u = n[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Rt(null, u, null, null, u) : Array.isArray(u) ? Rt(Ht, { children: u }, null, null, null) : u.__b > 0 ? Rt(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (p = y[l]) === null || p && u.key == p.key && u.type === p.type)
        y[l] = void 0;
      else
        for (g = 0; g < S; g++) {
          if ((p = y[g]) && u.key == p.key && u.type === p.type) {
            y[g] = void 0;
            break;
          }
          p = null;
        }
      Gt(e, u, p = p || St, o, i, r, a, c, d), _ = u.__e, (g = u.ref) && p.ref != g && (b || (b = []), p.ref && b.push(p.ref, null, u), b.push(g, u.__c || _, u)), _ != null ? (k == null && (k = _), typeof u.type == "function" && u.__k === p.__k ? u.__d = c = Ce(u, c, e) : c = xe(e, u, p, y, _, c), typeof t.type == "function" && (t.__d = c)) : c && p.__e == c && c.parentNode != e && (c = lt(p));
    }
  for (t.__e = k, l = S; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = lt(s, l + 1)), $e(y[l], y[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      Me(b[l], b[++l], b[++l]);
}
function Ce(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? Ce(s, n, t) : xe(t, s, s, o, s.__e, n));
  return n;
}
function xe(e, n, t, s, o, i) {
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
function Ze(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || xt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || xt(e, i, n[i], t[i], s);
}
function pe(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Je.test(n) ? t : t + "px";
}
function xt(e, n, t, s, o) {
  var i;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || pe(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || pe(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? _e : ge, i) : e.removeEventListener(n, i ? _e : ge, i);
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
function ge(e) {
  this.l[e.type + !1](E.event ? E.event(e) : e);
}
function _e(e) {
  this.l[e.type + !0](E.event ? E.event(e) : e);
}
function Gt(e, n, t, s, o, i, r, a, c) {
  var d, l, g, p, u, _, k, b, y, S, L, v, W, $ = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (d = E.__b) && d(n);
  try {
    t:
      if (typeof $ == "function") {
        if (b = n.props, y = (d = $.contextType) && s[d.__c], S = d ? y ? y.props.value : d.__ : s, t.__c ? k = (l = n.__c = t.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? n.__c = l = new $(b, S) : (n.__c = l = new et(b, S), l.constructor = $, l.render = tn), y && y.sub(l), l.props = b, l.state || (l.state = {}), l.context = S, l.__n = s, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Y({}, l.__s)), Y(l.__s, $.getDerivedStateFromProps(b, l.__s))), p = l.props, u = l.state, g)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && b !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, S), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, S) === !1 || n.__v === t.__v) {
            l.props = b, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(V) {
              V && (V.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, S), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, u, _);
          });
        }
        if (l.context = S, l.props = b, l.__v = n, l.__P = e, L = E.__r, v = 0, "prototype" in $ && $.prototype.render)
          l.state = l.__s, l.__d = !1, L && L(n), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, L && L(n), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++v < 25);
        l.state = l.__s, l.getChildContext != null && (s = Y(Y({}, s), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (_ = l.getSnapshotBeforeUpdate(p, u)), W = d != null && d.type === Ht && d.key == null ? d.props.children : d, Se(e, Array.isArray(W) ? W : [W], n, t, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), k && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Qe(t.__e, n, t, s, o, i, r, c);
    (d = E.diffed) && d(n);
  } catch (V) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), E.__e(V, n, t);
  }
}
function Ee(e, n) {
  E.__c && E.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      E.__e(s, t.__v);
    }
  });
}
function Qe(e, n, t, s, o, i, r, a) {
  var c, d, l, g = t.props, p = n.props, u = n.type, _ = 0;
  if (u === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((c = i[_]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, i[_] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, p.is && p), i = null, a = !1;
  }
  if (u === null)
    g === p || a && e.data === p || (e.data = p);
  else {
    if (i = i && At.call(e.childNodes), d = (g = t.props || St).dangerouslySetInnerHTML, l = p.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (g = {}, _ = 0; _ < e.attributes.length; _++)
          g[e.attributes[_].name] = e.attributes[_].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (Ze(e, p, g, o, a), l)
      n.__k = [];
    else if (_ = n.props.children, Se(e, Array.isArray(_) ? _ : [_], n, t, s, o && u !== "foreignObject", i, r, i ? i[0] : t.__k && lt(t, 0), a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && we(i[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== e.value || u === "progress" && !_ || u === "option" && _ !== g.value) && xt(e, "value", _, g.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== e.checked && xt(e, "checked", _, g.checked, !1));
  }
  return e;
}
function Me(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    E.__e(s, t);
  }
}
function $e(e, n, t) {
  var s, o;
  if (E.unmount && E.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Me(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        E.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (o = 0; o < s.length; o++)
      s[o] && $e(s[o], n, typeof e.type != "function");
  t || e.__e == null || we(e.__e), e.__e = e.__d = void 0;
}
function tn(e, n, t) {
  return this.constructor(e, t);
}
function en(e, n, t) {
  var s, o, i;
  E.__ && E.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], Gt(n, e = (!s && t || n).__k = m(Ht, null, [e]), o || St, St, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? At.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Ee(i, e);
}
At = ve.slice, E = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, ye = 0, et.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof e == "function" && (e = e(Y({}, t), this.props)), e && Y(t, e), e != null && this.__v && (n && this.__h.push(n), ue(this));
}, et.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ue(this));
}, et.prototype.render = Ht, ut = [], Ct.__r = 0;
const H = (...e) => e.map((n) => Array.isArray(n) ? H(...n) : typeof n == "function" ? H(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class Gn extends et {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, d = [s], l = { ...o };
    let g = null;
    return i ? g = /* @__PURE__ */ m("img", {
      src: i,
      alt: r
    }) : g = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && d.push(`avatar-${n}`), typeof t == "string" && d.push(`rounded-${t}`), /* @__PURE__ */ m("div", {
      className: H(d),
      style: l,
      ...c
    }, g, a);
  }
}
const nn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class sn extends HTMLElement {
  constructor() {
    super();
    R(this, "$button");
    R(this, "$icon");
    R(this, "onClick");
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
    const t = nn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", sn);
var J, Z;
class me extends et {
  constructor(t) {
    var s;
    super(t);
    M(this, J, 0);
    M(this, Z, null);
    R(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    R(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (f(this, J) && cancelAnimationFrame(f(this, J)), C(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), C(this, J, 0);
      })), t.preventDefault());
    });
    R(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    R(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    R(this, "_handleClick", (t) => {
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
    t && (C(this, Z, typeof t == "string" ? document : t.current), f(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
      bottom: d,
      right: l
    } = this.props, { maxScrollPos: g, scrollPos: p } = this, { dragStart: u } = this.state, _ = {
      left: a,
      top: c,
      bottom: d,
      right: l,
      ...r
    }, k = {};
    return s === "horz" ? (_.height = o, _.width = t, k.width = this.barSize, k.left = Math.round(Math.min(g, p) * (t - k.width) / g)) : (_.width = o, _.height = t, k.height = this.barSize, k.top = Math.round(Math.min(g, p) * (t - k.height) / g)), /* @__PURE__ */ m("div", {
      className: H("scrollbar", i, {
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
var Ut = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ut || {});
function on(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / Ut[t]).toFixed(n) + t);
}
const rn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Ut[s];
};
function ln(e) {
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
function an(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function cn(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: ln,
  domReady: an,
  isElementVisible: cn,
  classes: H
}, Symbol.toStringTag, { value: "Module" }));
function Ae() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function hn(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Ae(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? hn(t) : Ae();
});
function Kt({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, cellStyle: a, children: c, ...d }) {
  const { cellStyle: l, align: g, className: p, border: u } = e.setting, _ = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...a,
    ...l
  }, k = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...r
  };
  let b = [
    c != null ? c : o == null ? void 0 : o[e.name]
  ];
  i && (b = i(b, { rowID: s, col: e, rowData: o }, m));
  const y = ["dtable-cell", n, p, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], S = ["dtable-cell-content"], L = [];
  return b == null || b.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v || "cellClass" in v || "cellStyle" in v) ? (v.html ? L.push(/* @__PURE__ */ m("div", {
      className: H("dtable-cell-html", v.className),
      style: v.style,
      dangerouslySetInnerHTML: { __html: v.html }
    })) : (v.style && Object.assign(k, v.style), v.className && S.push(v.className)), v.cellStyle && Object.assign(_, v.cellStyle), v.cellClass && y.push(v.cellClass)) : L.push(v);
  }), /* @__PURE__ */ m("div", {
    className: H(y),
    style: _,
    "data-col": e.name,
    ...d
  }, /* @__PURE__ */ m("div", {
    className: H(S),
    style: k
  }, L));
}
function dn({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ m(Kt, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ m("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function jt({ rowID: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = Kt, onRenderCell: d }) {
  return /* @__PURE__ */ m("div", {
    className: H("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ m(c, {
    key: l.name,
    col: l,
    rowData: a,
    rowID: e,
    onRenderCell: d
  }) : null));
}
function He({
  rowID: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: d,
  flexRightWidth: l,
  scrollLeft: g,
  CellComponent: p = Kt,
  onRenderCell: u,
  data: _,
  style: k,
  ...b
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(jt, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: e,
    CellComponent: p,
    onRenderCell: u,
    data: _
  }));
  let S = null;
  r != null && r.length && (S = /* @__PURE__ */ m(jt, {
    className: "dtable-flexable",
    cols: r,
    left: a - g,
    width: d,
    rowID: e,
    CellComponent: p,
    onRenderCell: u,
    data: _
  }));
  let L = null;
  i != null && i.length && (L = /* @__PURE__ */ m(jt, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: e,
    CellComponent: p,
    onRenderCell: u,
    data: _
  }));
  const v = { top: t, height: s, lineHeight: `${s - 2}px`, ...k };
  return /* @__PURE__ */ m("div", {
    className: H("dtable-row", n),
    style: v,
    "data-id": e,
    ...b
  }, y, S, L);
}
function fn({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: dn
  };
  if (n) {
    const o = n({ props: s }, m);
    o && Object.assign(s, o);
  }
  return /* @__PURE__ */ m("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ m(He, {
    ...s
  }));
}
function un({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return n = { ...n, top: t, height: o }, /* @__PURE__ */ m("div", {
    className: H("dtable-rows", e),
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
    return /* @__PURE__ */ m(He, {
      ...d
    });
  }));
}
const Et = /* @__PURE__ */ new Map();
function Le(e, n = !1) {
  if (!n && Et.has(e.name))
    throw new Error(`DTable: Plugin with name ${e.name} already exists`);
  Et.set(e.name, e);
}
function at(e, n = !1) {
  Le(e, n);
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
function pn(e) {
  return Et.get(e);
}
function Ne(e) {
  return Et.delete(e);
}
function gn(e) {
  if (typeof e == "string") {
    const n = pn(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function")
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function ze(e, n, t) {
  n.forEach((s) => {
    if (!s)
      return;
    const o = gn(s);
    !o || t.has(o.name) || (e.push(o), t.add(o.name), !(!o.plugins || !o.plugins.length) && ze(e, o.plugins, t));
  });
}
function _n(e) {
  if (!e || !e.plugins || !e.plugins.length)
    return [];
  const n = /* @__PURE__ */ new Set(), t = [];
  return ze(t, e.plugins, n), t;
}
function mn(e, n) {
  return e.reduce((t, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (t = { ...i, ...t }), o && Object.assign(t, typeof o == "function" ? o(t) : o), t;
  }, n);
}
function Ot() {
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
var Q, U, x, tt, N, ot, pt;
class It extends et {
  constructor(t) {
    super(t);
    R(this, "ref", Re());
    M(this, Q, 0);
    M(this, U, !1);
    M(this, x, void 0);
    M(this, tt, void 0);
    M(this, N, []);
    M(this, ot, void 0);
    M(this, pt, !1);
    R(this, "_handleResize", () => {
      f(this, Q) && cancelAnimationFrame(f(this, Q)), C(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), C(this, Q, 0);
      }));
    });
    R(this, "_handleRenderRow", (t, s) => {
      if (f(this, x).onRenderRow) {
        const o = f(this, x).onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return f(this, N).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    R(this, "_handleRenderHeaderRow", (t, s) => (f(this, x).onRenderHeaderRow && (t.props = f(this, x).onRenderHeaderRow.call(this, t, s)), f(this, N).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    R(this, "_handleRenderCell", (t, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (t = r.setting[a].call(this, t, s, o)), f(this, x)[a] && (t = f(this, x)[a].call(this, t, s, o)), f(this, N).forEach((c) => {
        c[a] && (t = c[a].call(this, t, s, o));
      }), t;
    });
    R(this, "_handleScroll", (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    R(this, "_handleClick", (t) => {
      var c, d, l, g, p, u, _, k;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (d = o.getAttribute("data-id")) != null ? d : "";
      if (a === "HEADER")
        i && ((l = f(this, x).onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), f(this, N).forEach((b) => {
          var y;
          (y = b.onHeaderCellClick) == null || y.call(this, t, { colName: r, element: i });
        }));
      else {
        const b = (g = f(this, ot)) == null ? void 0 : g.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((p = f(this, x).onCellClick) == null ? void 0 : p.call(this, t, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const y of f(this, N))
            if (((u = y.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((_ = f(this, x).onRowClick) == null ? void 0 : _.call(this, t, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const y of f(this, N))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, t, { rowID: a, rowInfo: b, element: o })) === !0)
            return;
      }
    });
    R(this, "_handleMouseOver", (t) => {
      var r, a;
      const { colHover: s } = f(this, x);
      if (!s)
        return;
      const o = (r = t.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || s === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : !1;
      this._applyColHover(i);
    });
    R(this, "_handleMouseLeave", () => {
      this._applyColHover(!1);
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const s = { ...Ot(), ...t };
    C(this, x, Object.freeze(s)), C(this, tt, Object.freeze(_n(s))), f(this, tt).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return f(this, x);
  }
  get plugins() {
    return f(this, N);
  }
  get layout() {
    return f(this, ot);
  }
  componentDidMount() {
    f(this, U) ? this.forceUpdate() : this._afterRender();
    const { current: t } = this.ref;
    t && (t.addEventListener("click", this._handleClick), t.addEventListener("mouseover", this._handleMouseOver), t.addEventListener("mouseleave", this._handleMouseLeave)), f(this, x).responsive && window.addEventListener("resize", this._handleResize), f(this, N).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    f(this, U) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    t && (t.removeEventListener("click", this._handleClick), f(this, x).colHover && (t.removeEventListener("mouseover", this._handleMouseOver), t.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), f(this, N).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var s;
      (s = f(this, x).onScroll) == null || s.call(this, t, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var s;
      (s = f(this, x).onScroll) == null || s.call(this, t, "vert");
    });
  }
  getLayout() {
    var te, ee, ne, se;
    const t = Ot(), s = mn(f(this, tt), { ...t, ...this.props }), o = f(this, tt).filter((h) => !h.when || h.when(s));
    C(this, N, Object.freeze(o)), o.forEach((h) => {
      var A;
      const w = (A = h.beforeLayout) == null ? void 0 : A.call(this, s);
      w && Object.assign(s, w);
    }), C(this, x, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = t.rowHeight,
      defaultColWidth: c = t.minColWidth,
      minColWidth: d = t.minColWidth,
      maxColWidth: l = t.maxColWidth
    } = s, g = i ? s.headerHeight || a : 0, p = r ? s.footerHeight || a : 0, u = (h, w, A) => (h && (w && (h = Math.max(w, h)), A && (h = Math.min(A, h))), h), _ = [], k = [], b = [];
    let y = 0, S = 0, L = 0;
    (te = s.cols) == null || te.forEach((h) => {
      var oe, ie, re;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: w = d, maxWidth: A = l } = h, D = u((oe = h.width) != null ? oe : 0, w, A), q = (ie = h.flex) != null ? ie : 1, bt = q * u(c, w, A), G = {
        name: h.name,
        type: (re = h.type) != null ? re : "",
        setting: h,
        left: 0,
        flex: q,
        realWidth: D,
        flexWidth: bt,
        visible: !0,
        index: L++
      };
      h.fixed === "left" ? (G.left = y, y += D, _.push(G)) : h.fixed === "right" ? (G.left = S, S += D, k.push(G)) : b.push(G), o.forEach((le) => {
        var ae, ce, he;
        const yt = (ce = le.colTypes) == null ? void 0 : ce[(ae = h.type) != null ? ae : ""];
        if (yt) {
          const de = typeof yt == "function" ? yt(h) : yt;
          de && Object.assign(h, de);
        }
        (he = le.onAddCol) == null || he.call(this, G);
      });
    });
    let v = s.width, W = 0;
    if (typeof v == "function" && (v = v()), v === "auto")
      W = y + S, b.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), W += h.realWidth;
      });
    else if (v === "100%") {
      const h = (ee = this.ref.current) == null ? void 0 : ee.parentElement;
      if (h)
        W = h.clientWidth;
      else {
        W = 0, C(this, U, !0);
        return;
      }
    } else
      W = v != null ? v : 0;
    const { data: $, rowKey: V = "id" } = s, ht = [], Lt = (h, w, A) => {
      var q, bt;
      const D = { data: A != null ? A : { [V]: h }, top: ht.length * a, id: h, index: ht.length };
      if (A || (D.lazy = !0), ht.push(D), ((q = s.onAddRow) == null ? void 0 : q.call(this, D, w)) !== !1) {
        for (const G of o)
          if (((bt = G.onAddRow) == null ? void 0 : bt.call(this, D, w)) === !1)
            return;
      }
    };
    if (typeof $ == "number")
      for (let h = 0; h < $; h++)
        Lt(h, h);
    else
      Array.isArray($) && $.forEach((h, w) => {
        typeof h == "object" ? Lt(h[V], w, h) : Lt(h, w);
      });
    let Nt = !1, I = ht;
    if (s.onAddRows) {
      const h = s.onAddRows.call(this, I);
      h && (I = h, Nt = !0);
    }
    for (const h of o) {
      const w = (ne = h.onAddRows) == null ? void 0 : ne.call(this, I);
      w && (I = w, Nt = !0);
    }
    Nt && I.forEach((h, w) => {
      h.index = w, h.top = w * a;
    });
    let B = s.height, X = 0;
    const zt = I.length * a, Tt = g + p + zt;
    if (typeof B == "function" && (B = B(Tt)), B === "auto")
      X = Tt;
    else if (typeof B == "object")
      X = Math.min(B.max, Math.max(B.min, Tt));
    else if (B === "100%") {
      const h = (se = this.ref.current) == null ? void 0 : se.parentElement;
      if (h)
        X = h.clientHeight;
      else {
        X = 0, C(this, U, !0);
        return;
      }
    } else
      X = B;
    let { scrollTop: nt = 0, scrollLeft: dt = 0 } = this.state;
    const Wt = X - g - p;
    nt = Math.min(Math.max(0, zt - Wt), nt);
    const Vt = nt + Wt, Xt = [], mt = W - y - S;
    let F = 0;
    const Dt = [];
    let Jt = 0;
    if (b.forEach((h) => {
      h.realWidth ? F += h.realWidth : (Dt.push(h), Jt += h.flex);
    }), Dt.length) {
      const h = Math.max(0, mt - F);
      Dt.forEach((w) => {
        var q;
        const { minWidth: A = d, maxWidth: D = l } = w.setting;
        w.realWidth = Math.min(D, Math.max(A, Math.ceil(h * ((q = w.flex) != null ? q : 1) / Jt))), F += w.realWidth;
      });
    }
    F = 0, b.forEach((h) => {
      h.left += F, F += h.realWidth, (h.left + h.realWidth < dt || h.left > dt + mt) && (h.visible = !1);
    }), dt = Math.min(Math.max(0, F - mt), dt);
    const Zt = Math.floor(nt / a), Qt = Math.min(I.length, Math.ceil(Vt / a)), Ye = [];
    for (let h = Zt; h < Qt; h++) {
      const w = I[h];
      w.top -= nt, Xt.push(w), w.lazy === !0 && Ye.push(w.id);
    }
    let st = {
      allRows: ht,
      width: W,
      height: X,
      rows: I,
      visibleRows: Xt,
      rowHeight: a,
      rowsHeight: Wt,
      rowsHeightTotal: zt,
      header: i,
      footer: r,
      headerHeight: g,
      footerHeight: p,
      colsInfo: {
        fixedLeftCols: _,
        fixedRightCols: k,
        scrollCols: b,
        flexLeftWidth: y,
        scrollWidth: mt,
        scrollWidthTotal: F,
        flexRightWidth: S
      },
      scrollBottom: Vt,
      scrollTop: nt,
      scrollLeft: dt,
      startRowIndex: Zt,
      endRowIndex: Qt
    };
    if (s.onLayout) {
      const h = s.onLayout.call(this, st);
      h && (st = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const w = h.onLayout.call(this, st);
        w && (st = w);
      }
    }), C(this, ot, Object.freeze(st)), st;
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
  renderHeader(t) {
    const { header: s, colsInfo: o, headerHeight: i } = t;
    if (!s)
      return null;
    if (s === !0)
      return /* @__PURE__ */ m(fn, {
        scrollLeft: this.state.scrollLeft,
        height: i,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...o
      });
    let r, a;
    if (typeof s == "function") {
      const c = s(t, this.state);
      typeof c == "object" && c && "__html" in c ? a = c : r = c;
    } else
      r = s;
    return /* @__PURE__ */ m("div", {
      className: "dtable-header",
      style: { height: i },
      dangerouslySetInnerHTML: a
    }, r);
  }
  renderRows(t) {
    const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: a } = t;
    return /* @__PURE__ */ m(un, {
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
  renderFooter(t) {
    const { footer: s, footerHeight: o } = t;
    if (!s)
      return null;
    let i, r;
    if (typeof s == "function") {
      const a = s(t, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : i = a;
    } else
      i = s;
    return /* @__PURE__ */ m("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(t) {
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: d, scrollWidth: l } = i, { scrollbarSize: g = 12, horzScrollbarPos: p } = this.props;
    return d > l && s.push(/* @__PURE__ */ m(me, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: d,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: p === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })), c > a && s.push(/* @__PURE__ */ m(me, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var t;
    C(this, U, !1), (t = f(this, x).afterRender) == null || t.call(this), f(this, N).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  _applyColHover(t) {
    t !== void 0 ? C(this, pt, t) : t = f(this, pt);
    const { current: s } = this.ref;
    if (!s)
      return;
    const o = "dtable-col-hover";
    s.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && s.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
  }
  render() {
    var g, p;
    const t = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: d } = (g = f(this, x)) != null ? g : this.props, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ m("div", {
      className: H("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((p = t == null ? void 0 : t.scrollTop) != null ? p : 0) > 0,
        "scrollbar-hover": d
      }),
      style: l,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
Q = new WeakMap(), U = new WeakMap(), x = new WeakMap(), tt = new WeakMap(), N = new WeakMap(), ot = new WeakMap(), pt = new WeakMap(), R(It, "addPlugin", Le), R(It, "removePlugin", Ne);
function bn(e, n) {
  var r, a;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (c, d) => {
    o && !o.call(this, c) || !!t[c] === d || (d ? t[c] = !0 : delete t[c], s[c] = d);
  };
  if (e === void 0 ? (n === void 0 && (n = !Te.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: c }) => {
    i(c, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((c) => {
    i(c, n != null ? n : !t[c]);
  })), Object.keys(s).length) {
    const c = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, e, s, t);
    c && Object.keys(c).forEach((d) => {
      c[d] ? t[d] = !0 : delete t[d];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, s);
    });
  }
  return s;
}
function yn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function Te() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function vn() {
  return Object.keys(this.state.checkedRows);
}
const We = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = bn.bind(this), this.isRowChecked = yn.bind(this), this.isAllRowChecked = Te.bind(this), this.getChecks = vn.bind(this);
  },
  onRenderCell(e, { rowID: n, col: t }) {
    var r, a;
    const { canRowCheckable: s } = this.options;
    if (s && !s.call(this, n))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, n) : o) {
      const c = this.isRowChecked(n), d = (a = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, c, n)) != null ? a : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { rowID: n, col: t }) {
    var i, r;
    const { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isAllRowChecked(), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ m("input", {
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
at(We);
function Bt(e) {
  const n = this.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = Bt.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Bt.call(this, n.parent).level + 1 : 0, n;
}
function wn(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  if (e === "HEADER")
    if (n === void 0 && (n = !De.call(this)), n) {
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
  this.setState({ collapsedRows: { ...t } }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function De() {
  const e = this.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Pe(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = Pe(e, n, r.children, s + 1)));
  }
  return n;
}
function je(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, je(e, i, t, s);
  }), o;
}
function Oe(e, n, t, s, o) {
  var a;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((a = i.children) == null ? void 0 : a.every((c) => {
    const d = !!(s[c] !== void 0 ? s[c] : o[c]);
    return t === d;
  })) && (s[n] = t), i.parent && Oe(e, i.parent, t, s, o);
}
const Ie = {
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
        const r = je(this, o, i, s);
        r != null && r.parent && Oe(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = wn.bind(this), this.isAllCollapsed = De.bind(this), this.getNestedRowInfo = Bt.bind(this);
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
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Pe(this.nestedMap), e.sort((n, t) => {
      var r, a;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((a = o.order) != null ? a : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { rowID: n, col: t, rowData: s }) {
    var r, a, c;
    const { nestedToggle: o } = t.setting, i = this.getNestedRowInfo(n);
    if (o && (i.children || i.parent) && e.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, n, t, s)) != null ? a : /* @__PURE__ */ m("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ m("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: d = o } = t.setting;
      d && (d === !0 && (d = (c = this.options.nestedIndent) != null ? c : 12), e.unshift(/* @__PURE__ */ m("div", {
        className: "dtable-nested-indent",
        style: { width: d * i.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { rowID: n, col: t }) {
    var s, o;
    return t.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, n, t, void 0)) != null ? o : /* @__PURE__ */ m("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ m("span", {
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
at(Ie);
const O = 24 * 60 * 60 * 1e3, z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ct = (e, n = new Date()) => (e = z(e), n = z(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Ft = (e, n = new Date()) => z(e).getFullYear() === z(n).getFullYear(), Be = (e, n = new Date()) => (e = z(e), n = z(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Rn = (e, n = new Date()) => {
  e = z(e), n = z(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, kn = (e, n) => ct(z(n), e), Sn = (e, n) => ct(z(n).getTime() - O, e), Cn = (e, n) => ct(z(n).getTime() + O, e), xn = (e, n) => ct(z(n).getTime() - 2 * O, e), Mt = (e, n = "yyyy-MM-dd hh:mm") => {
  e = z(e);
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
}, En = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Mt(e, Ft(e) ? s.month : s.full);
  if (ct(e, n))
    return o;
  const i = Mt(n, Ft(e, n) ? Be(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, Mn = (e) => {
  const n = new Date().getTime();
  switch (e) {
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
}, qt = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, qt(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, qt(e, "day", t, s);
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
const Fe = {
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
        return e[0] = /* @__PURE__ */ m("a", {
          href: i,
          ...o
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, rowData: t }) {
        const { avatarWithName: s, avatarClass: o = "size-sm circle", avatarKey: i = `${n.name}Avatar` } = n.setting, r = /* @__PURE__ */ m("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ m("img", {
          src: t ? t[i] : ""
        }));
        return s ? e.unshift(r) : e[0] = r, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: o = "var(--color-border)", circleColor: i = "var(--color-green-500)" } = n.setting, r = (t - s) / 2, a = t / 2, c = e[0];
        return e[0] = /* @__PURE__ */ m("svg", {
          width: t,
          height: t
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Mt(i, s) : o === "html" ? e[0] = { html: ft(s, i) } : e[0] = ft(s, i), e;
      }
    }
  }
};
at(Fe);
const qe = {
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
          var d, l;
          return a + ((l = (d = this.getColInfo(c)) == null ? void 0 : d.realWidth) != null ? l : 0);
        }, 0), r = {
          height: o - 1,
          width: i - 1
        };
        e.push(/* @__PURE__ */ m("div", {
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
at(qe);
function Ge(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
function $n(e) {
  var t, s;
  const n = Ge(this, e);
  if (!(!e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1))
    return this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function An(e) {
  var o, i;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, t, s);
}
function Hn(e) {
  var o;
  const n = Ge(this, e), { draggingRow: t } = this.state;
  if (!n || !t || n.id === t.id)
    return;
  const s = t.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, t, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function Ln(e) {
  return e.preventDefault(), !0;
}
function Nn(e) {
  var o;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  if (n && t && s && n.id !== t.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((p) => r.call(this, p)));
    const a = i.findIndex((p) => p.id === n.id), c = i.findIndex((p) => p.id === t.id), d = i.splice(a, 1);
    i.splice(c, 0, d[0]);
    const l = {}, g = [];
    i.forEach(({ id: p }, u) => {
      l[p] = u, g.push(p);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, t, s, g);
  }
}
const Ue = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  onCreate() {
    this.onSortDragStart = $n.bind(this), this.onSortDragEnd = An.bind(this), this.onSortDragEnter = Hn.bind(this), this.onSortDragOver = Ln.bind(this), this.onSortDrop = Nn.bind(this);
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
at(Ue);
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: We,
  nested: Ie,
  rich: Fe,
  headerGroup: qe,
  sortable: Ue
}, Symbol.toStringTag, { value: "Module" }));
var gt;
class wt {
  constructor(n, t) {
    R(this, "element");
    R(this, "options");
    M(this, gt, Re());
    var s;
    this.element = n, this.options = { ...Ot(), ...t }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return f(this, gt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), en(/* @__PURE__ */ m(It, {
      ref: f(this, gt),
      ...this.options
    }), this.element);
  }
}
gt = new WeakMap(), R(wt, "NAME", "zui.dtable"), R(wt, "definePlugin", at), R(wt, "removePlugin", Ne), R(wt, "plugins", zn);
let Tn = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var _t, K, P, it, rt, kt;
const Yt = class {
  constructor(n, t = "local") {
    M(this, rt);
    M(this, _t, void 0);
    M(this, K, void 0);
    M(this, P, void 0);
    M(this, it, void 0);
    C(this, _t, t), C(this, K, `ZUI_STORE:${n != null ? n : Tn()}`), C(this, P, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return f(this, _t);
  }
  get session() {
    return this.type === "session" ? this : (f(this, it) || C(this, it, new Yt(f(this, K), "session")), f(this, it));
  }
  get(n, t) {
    const s = f(this, P).getItem(vt(this, rt, kt).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    f(this, P).setItem(vt(this, rt, kt).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    f(this, P).removeItem(vt(this, rt, kt).call(this, n));
  }
  each(n) {
    for (let t = 0; t < f(this, P).length; t++) {
      const s = f(this, P).key(t);
      if (s != null && s.startsWith(f(this, K))) {
        const o = f(this, P).getItem(s);
        typeof o == "string" && n(s.substring(f(this, K).length + 1), JSON.parse(o));
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
let $t = Yt;
_t = new WeakMap(), K = new WeakMap(), P = new WeakMap(), it = new WeakMap(), rt = new WeakSet(), kt = function(n) {
  return `${f(this, K)}:${n}`;
};
const Wn = new $t("DEFAULT");
function Dn(e, n = "local") {
  return new $t(e, n);
}
Object.assign(Wn, { create: Dn });
function Pn() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function jn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function On(e, n) {
  Pn(), e.classList.add("block"), be(e, n), e.onclick = (t) => In(t, e), window.addEventListener("resize", () => {
    be(e, n);
  });
}
function Ke(e) {
  var n;
  jn(), (n = e.classList) == null || n.remove("block");
}
function be(e, n) {
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
function In(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Ke(n));
}
function Bn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Bn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    On(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Ke(n);
});
const Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: O,
  createDate: z,
  isSameDay: ct,
  isSameYear: Ft,
  isSameMonth: Be,
  isSameWeek: Rn,
  isToday: kn,
  isYesterday: Sn,
  isTomorrow: Cn,
  isDBY: xn,
  formatDate: Mt,
  formatDateSpan: En,
  getTimeBeforeDesc: Mn,
  calculateTimestamp: qt,
  formatString: ft,
  formatBytes: on,
  convertBytes: rn
}, Symbol.toStringTag, { value: "Module" }));
var j, T;
class Fn {
  constructor(n) {
    M(this, j, void 0);
    M(this, T, void 0);
    C(this, j, n), C(this, T, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement), this.addActive(f(this, T).parentElement, f(this, T)), f(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, T, f(this, j)), this.addActive(f(this, T).parentElement, f(this, T)), C(this, j, document.querySelector(`[href='#${f(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${f(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${f(this, T).getAttribute("id")}']`)), this.addActive(f(this, j).parentElement.parentElement, f(this, j).parentElement);
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Fn(e.target).showTarget());
});
export {
  Gn as Avatar,
  wt as DTable,
  Fn as NavTabs,
  me as Scrollbar,
  Un as browser,
  zn as dtablePlugins,
  Kn as helpers,
  Wn as store
};
