var bn = Object.defineProperty;
var mn = (e, n, t) => n in e ? bn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var H = (e, n, t) => (mn(e, typeof n != "symbol" ? n + "" : n, t), t), te = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (te(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, R = (e, n, t, s) => (te(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var j = (e, n, t) => (te(e, n, "access private method"), t);
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
class wn extends HTMLElement {
  constructor() {
    super();
    H(this, "$button");
    H(this, "$icon");
    H(this, "onClick");
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
customElements.get("zui-button") || customElements.define("zui-button", wn);
var Yt, M, Ne, yt, Re, Ht = {}, Le = [], vn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Z(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function De(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function b(e, n, t) {
  var s, o, i, r = {};
  for (i in n)
    i == "key" ? s = n[i] : i == "ref" ? o = n[i] : r[i] = n[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Yt.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return $t(e, r, s, o, null);
}
function $t(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Ne : o };
  return o == null && M.vnode != null && M.vnode(i), i;
}
function ze() {
  return { current: null };
}
function Xt(e) {
  return e.children;
}
function ot(e, n) {
  this.props = e, this.context = n;
}
function dt(e, n) {
  if (n == null)
    return e.__ ? dt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? dt(e) : null;
}
function We(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return We(e);
  }
}
function Ce(e) {
  (!e.__d && (e.__d = !0) && yt.push(e) && !Nt.__r++ || Re !== M.debounceRendering) && ((Re = M.debounceRendering) || setTimeout)(Nt);
}
function Nt() {
  for (var e; Nt.__r = yt.length; )
    e = yt.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), yt = [], e.some(function(n) {
      var t, s, o, i, r, c;
      n.__d && (r = (i = (t = n).__v).__e, (c = t.__P) && (s = [], (o = Z({}, i)).__v = i.__v + 1, le(c, i, o, t.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? dt(i) : r, i.__h), Ie(s, i), i.__e != r && We(i)));
    });
}
function Te(e, n, t, s, o, i, r, c, a, d) {
  var l, g, u, f, p, m, _, v = s && s.__k || Le, S = v.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? $t(null, f, null, null, f) : Array.isArray(f) ? $t(Xt, { children: f }, null, null, null) : f.__b > 0 ? $t(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (u = v[l]) === null || u && f.key == u.key && f.type === u.type)
        v[l] = void 0;
      else
        for (g = 0; g < S; g++) {
          if ((u = v[g]) && f.key == u.key && f.type === u.type) {
            v[g] = void 0;
            break;
          }
          u = null;
        }
      le(e, f, u = u || Ht, o, i, r, c, a, d), p = f.__e, (g = f.ref) && u.ref != g && (_ || (_ = []), u.ref && _.push(u.ref, null, f), _.push(g, f.__c || p, f)), p != null ? (m == null && (m = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = a = je(f, a, e) : a = Pe(e, f, u, v, p, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = dt(u));
    }
  for (t.__e = m, l = S; l--; )
    v[l] != null && (typeof t.type == "function" && v[l].__e != null && v[l].__e == t.__d && (t.__d = dt(s, l + 1)), Oe(v[l], v[l]));
  if (_)
    for (l = 0; l < _.length; l++)
      Be(_[l], _[++l], _[++l]);
}
function je(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? je(s, n, t) : Pe(t, s, s, o, s.__e, n));
  return n;
}
function Pe(e, n, t, s, o, i) {
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
function kn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Lt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Lt(e, i, n[i], t[i], s);
}
function Ee(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || vn.test(n) ? t : t + "px";
}
function Lt(e, n, t, s, o) {
  var i;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Ee(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Ee(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? xe : Se, i) : e.removeEventListener(n, i ? xe : Se, i);
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
function Se(e) {
  this.l[e.type + !1](M.event ? M.event(e) : e);
}
function xe(e) {
  this.l[e.type + !0](M.event ? M.event(e) : e);
}
function le(e, n, t, s, o, i, r, c, a) {
  var d, l, g, u, f, p, m, _, v, S, k, x, L, E = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, i = [c]), (d = M.__b) && d(n);
  try {
    t:
      if (typeof E == "function") {
        if (_ = n.props, v = (d = E.contextType) && s[d.__c], S = d ? v ? v.props.value : d.__ : s, t.__c ? m = (l = n.__c = t.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? n.__c = l = new E(_, S) : (n.__c = l = new ot(_, S), l.constructor = E, l.render = Cn), v && v.sub(l), l.props = _, l.state || (l.state = {}), l.context = S, l.__n = s, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, E.getDerivedStateFromProps(_, l.__s))), u = l.props, f = l.state, g)
          E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && _ !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, S), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, S) === !1 || n.__v === t.__v) {
            l.props = _, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function($) {
              $ && ($.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, S), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, p);
          });
        }
        if (l.context = S, l.props = _, l.__v = n, l.__P = e, k = M.__r, x = 0, "prototype" in E && E.prototype.render)
          l.state = l.__s, l.__d = !1, k && k(n), d = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, k && k(n), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++x < 25);
        l.state = l.__s, l.getChildContext != null && (s = Z(Z({}, s), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(u, f)), L = d != null && d.type === Xt && d.key == null ? d.props.children : d, Te(e, Array.isArray(L) ? L : [L], n, t, s, o, i, r, c, a), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), m && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Rn(t.__e, n, t, s, o, i, r, a);
    (d = M.diffed) && d(n);
  } catch ($) {
    n.__v = null, (a || i != null) && (n.__e = c, n.__h = !!a, i[i.indexOf(c)] = null), M.__e($, n, t);
  }
}
function Ie(e, n) {
  M.__c && M.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      M.__e(s, t.__v);
    }
  });
}
function Rn(e, n, t, s, o, i, r, c) {
  var a, d, l, g = t.props, u = n.props, f = n.type, p = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; p < i.length; p++)
      if ((a = i[p]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        e = a, i[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), i = null, c = !1;
  }
  if (f === null)
    g === u || c && e.data === u || (e.data = u);
  else {
    if (i = i && Yt.call(e.childNodes), d = (g = t.props || Ht).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (l || d) && (l && (d && l.__html == d.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (kn(e, u, g, o, c), l)
      n.__k = [];
    else if (p = n.props.children, Te(e, Array.isArray(p) ? p : [p], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && dt(t, 0), c), i != null)
      for (p = i.length; p--; )
        i[p] != null && De(i[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== g.value) && Lt(e, "value", p, g.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Lt(e, "checked", p, g.checked, !1));
  }
  return e;
}
function Be(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    M.__e(s, t);
  }
}
function Oe(e, n, t) {
  var s, o;
  if (M.unmount && M.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Be(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (i) {
        M.__e(i, n);
      }
    s.base = s.__P = null;
  }
  if (s = e.__k)
    for (o = 0; o < s.length; o++)
      s[o] && Oe(s[o], n, typeof e.type != "function");
  t || e.__e == null || De(e.__e), e.__e = e.__d = void 0;
}
function Cn(e, n, t) {
  return this.constructor(e, t);
}
function En(e, n, t) {
  var s, o, i;
  M.__ && M.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], le(n, e = (!s && t || n).__k = b(Xt, null, [e]), o || Ht, Ht, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Yt.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Ie(i, e);
}
Yt = Le.slice, M = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ne = 0, ot.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, t), this.props)), e && Z(t, e), e != null && this.__v && (n && this.__h.push(n), Ce(this));
}, ot.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ce(this));
}, ot.prototype.render = Xt, yt = [], Nt.__r = 0;
const D = (...e) => e.map((n) => Array.isArray(n) ? D(...n) : typeof n == "function" ? D(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
var et, nt;
class Me extends ot {
  constructor(t) {
    var s;
    super(t);
    w(this, et, 0);
    w(this, nt, null);
    H(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    H(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (h(this, et) && cancelAnimationFrame(h(this, et)), R(this, et, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), R(this, et, 0);
      })), t.preventDefault());
    });
    H(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    H(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    H(this, "_handleClick", (t) => {
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
    t && (R(this, nt, typeof t == "string" ? document : t.current), h(this, nt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), h(this, nt) && h(this, nt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: g, scrollPos: u } = this, { dragStart: f } = this.state, p = {
      left: c,
      top: a,
      bottom: d,
      right: l,
      ...r
    }, m = {};
    return s === "horz" ? (p.height = o, p.width = t, m.width = this.barSize, m.left = Math.round(Math.min(g, u) * (t - m.width) / g)) : (p.width = o, p.height = t, m.height = this.barSize, m.top = Math.round(Math.min(g, u) * (t - m.height) / g)), /* @__PURE__ */ b("div", {
      className: D("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": f
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
et = new WeakMap(), nt = new WeakMap();
function mt(e, ...n) {
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
var ce = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ce || {});
function Sn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / ce[t]).toFixed(n) + t);
}
const xn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * ce[s];
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
  const r = s.top <= o && s.top + s.height >= 0, c = s.left <= i && s.left + s.width >= 0;
  return r && c;
}
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Mn,
  domReady: $n,
  isElementVisible: An,
  classes: D
}, Symbol.toStringTag, { value: "Module" }));
let Fe = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var wt, V, I, it, rt, At;
const he = class {
  constructor(n, t = "local") {
    w(this, rt);
    w(this, wt, void 0);
    w(this, V, void 0);
    w(this, I, void 0);
    w(this, it, void 0);
    R(this, wt, t), R(this, V, `ZUI_STORE:${n != null ? n : Fe()}`), R(this, I, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, wt);
  }
  get session() {
    return this.type === "session" ? this : (h(this, it) || R(this, it, new he(h(this, V), "session")), h(this, it));
  }
  get(n, t) {
    const s = h(this, I).getItem(j(this, rt, At).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    h(this, I).setItem(j(this, rt, At).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    h(this, I).removeItem(j(this, rt, At).call(this, n));
  }
  each(n) {
    for (let t = 0; t < h(this, I).length; t++) {
      const s = h(this, I).key(t);
      if (s != null && s.startsWith(h(this, V))) {
        const o = h(this, I).getItem(s);
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
let Dt = he;
wt = new WeakMap(), V = new WeakMap(), I = new WeakMap(), it = new WeakMap(), rt = new WeakSet(), At = function(n) {
  return `${h(this, V)}:${n}`;
};
const Hn = new Dt("DEFAULT");
function Nn(e, n = "local") {
  return new Dt(e, n);
}
Object.assign(Hn, { create: Nn });
class rs extends ot {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, d = [s], l = { ...o };
    let g = null;
    return i ? g = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : g = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && d.push(`avatar-${n}`), typeof t == "string" && d.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: D(d),
      style: l,
      ...a
    }, g, c);
  }
}
function Ln() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Dn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function zn(e, n) {
  Ln(), e.classList.add("block"), $e(e, n), e.onclick = (t) => Wn(t, e), window.addEventListener("resize", () => {
    $e(e, n);
  });
}
function Ue(e) {
  var n;
  Dn(), (n = e.classList) == null || n.remove("block");
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
function Wn(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Ue(n));
}
function Tn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Tn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    zn(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Ue(n);
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
function Pn(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ae({ col: e, className: n, height: t, row: s, onRenderCell: o, style: i, outerStyle: r, children: c, outerClass: a, ...d }) {
  var E, $;
  const l = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: g, border: u } = e.setting, f = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...i
  }, p = ["dtable-cell", a, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], m = ["dtable-cell-content", n], _ = [($ = c != null ? c : (E = s.data) == null ? void 0 : E[e.name]) != null ? $ : ""], v = o ? o(_, { row: s, col: e }, b) : _, S = [], k = [], x = {}, L = {};
  return v == null || v.forEach((C) => {
    var ut;
    if (typeof C == "object" && C && ("html" in C || "className" in C || "style" in C || "attrs" in C)) {
      const pt = C.outer ? S : k;
      C.html ? pt.push(/* @__PURE__ */ b("div", {
        className: D("dtable-cell-html", C.className),
        style: C.style,
        dangerouslySetInnerHTML: { __html: C.html },
        ...(ut = C.attrs) != null ? ut : {}
      })) : (C.style && Object.assign(C.outer ? l : f, C.style), C.className && (C.outer ? p : m).push(C.className), C.children && pt.push(C.children), C.attrs && Object.assign(C.outer ? x : L, C.attrs));
    } else
      k.push(C);
  }), /* @__PURE__ */ b("div", {
    className: D(p),
    style: l,
    "data-col": e.name,
    ...d,
    ...x
  }, k.length > 0 && /* @__PURE__ */ b("div", {
    className: D(m),
    style: f,
    ...L
  }, k), S);
}
function In({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ b(ae, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function ee({ row: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, CellComponent: c = ae, onRenderCell: a }) {
  return /* @__PURE__ */ b("div", {
    className: D("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((d) => d.visible ? /* @__PURE__ */ b(c, {
    key: d.name,
    col: d,
    row: e,
    onRenderCell: a
  }) : null));
}
function Ke({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  fixedLeftWidth: c,
  scrollWidth: a,
  scrollColsWidth: d,
  fixedRightWidth: l,
  scrollLeft: g,
  CellComponent: u = ae,
  onRenderCell: f,
  style: p,
  ...m
}) {
  let _ = null;
  o != null && o.length && (_ = /* @__PURE__ */ b(ee, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ b(ee, {
    className: "dtable-flexable",
    cols: r,
    left: c - g,
    width: d,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let S = null;
  i != null && i.length && (S = /* @__PURE__ */ b(ee, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  const k = { top: t, height: s, lineHeight: `${s - 2}px`, ...p };
  return /* @__PURE__ */ b("div", {
    className: D("dtable-row", n),
    style: k,
    "data-id": e.id,
    ...m
  }, _, v, S);
}
function Bn({ height: e, onRenderRow: n, ...t }) {
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
  }, /* @__PURE__ */ b(Ke, {
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
  ...c
}) {
  return n = { ...n, top: t, height: o }, /* @__PURE__ */ b("div", {
    className: D("dtable-rows", e),
    style: n
  }, s.map((a) => {
    const d = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      row: a,
      top: a.top,
      height: i,
      ...c
    }, l = r == null ? void 0 : r({ props: d, row: a }, b);
    return l && Object.assign(d, l), /* @__PURE__ */ b(Ke, {
      ...d
    });
  }));
}
const zt = /* @__PURE__ */ new Map(), Wt = [];
function Ge(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && zt.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  zt.set(t, e), (n == null ? void 0 : n.buildIn) && !Wt.includes(t) && Wt.push(t);
}
function Et(e, n) {
  Ge(e, n);
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
  return zt.delete(e);
}
function Fn(e) {
  if (typeof e == "string") {
    const n = zt.get(e);
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
    const o = Fn(s);
    !o || t.has(o.name) || ((i = o.plugins) != null && i.length && Ye(e, o.plugins, t), e.push(o), t.add(o.name));
  }), e;
}
function Un(e = [], n = !0) {
  return n && Wt.length && e.unshift(...Wt), e != null && e.length ? Ye([], e, /* @__PURE__ */ new Set()) : [];
}
function Ae() {
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
var st, lt, Y, G, X, N, B, O, ct, J, at, ht, jt, Xe, Pt, Je, It, Ze, Bt, Qe, Ot, vt, se, Ft, Ut, kt, Rt, qt, Kt, tn, Gt, en, Vt, nn;
class ne extends ot {
  constructor(t) {
    super(t);
    w(this, jt);
    w(this, Pt);
    w(this, It);
    w(this, Bt);
    w(this, vt);
    w(this, Kt);
    w(this, Gt);
    w(this, Vt);
    H(this, "ref", ze());
    w(this, st, 0);
    w(this, lt, void 0);
    w(this, Y, !1);
    w(this, G, void 0);
    w(this, X, void 0);
    w(this, N, []);
    w(this, B, void 0);
    w(this, O, /* @__PURE__ */ new Map());
    w(this, ct, {});
    w(this, J, (t, s) => {
      s = s || t.type;
      const o = h(this, O).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation();
            break;
          }
      }
    });
    w(this, at, (t) => {
      h(this, J).call(this, t, `window_${t.type}`);
    });
    w(this, ht, (t) => {
      h(this, J).call(this, t, `document_${t.type}`);
    });
    w(this, Ot, () => {
      h(this, st) && cancelAnimationFrame(h(this, st)), R(this, st, requestAnimationFrame(() => {
        R(this, B, void 0), this.forceUpdate(), R(this, st, 0);
      }));
    });
    w(this, Ft, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return h(this, N).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    w(this, Ut, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), h(this, N).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, kt, (t, s, o) => {
      const { row: i, col: r } = s;
      t[0] = this.getCellValue(i, r);
      const c = i.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[c] && (t = r.setting[c].call(this, t, s, o)), this.options[c] && (t = this.options[c].call(this, t, s, o)), h(this, N).forEach((a) => {
        a[c] && (t = a[c].call(this, t, s, o));
      }), t;
    });
    w(this, Rt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, qt, (t) => {
      var a, d, l, g, u, f, p;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (d = o.getAttribute("data-id")) != null ? d : "";
      if (c === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), h(this, N).forEach((m) => {
          var _;
          (_ = m.onHeaderCellClick) == null || _.call(this, t, { colName: r, element: i });
        }));
      else {
        const m = this.layout.visibleRows.find((_) => _.id === c);
        if (i) {
          if (((g = this.options.onCellClick) == null ? void 0 : g.call(this, t, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
            return;
          for (const _ of h(this, N))
            if (((u = _.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: c, rowInfo: m, element: o })) === !0)
          return;
        for (const _ of h(this, N))
          if (((p = _.onRowClick) == null ? void 0 : p.call(this, t, { rowID: c, rowInfo: m, element: o })) === !0)
            return;
      }
    });
    R(this, lt, `dtable-${Fe(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, X, Object.freeze(Un(t.plugins))), h(this, X).forEach((s) => {
      var c;
      const { methods: o, data: i, state: r } = s;
      o && Object.entries(o).forEach(([a, d]) => {
        typeof d == "function" && Object.assign(this, { [a]: d.bind(this) });
      }), i && Object.assign(h(this, ct), i.call(this)), r && Object.assign(this.state, r.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, B)) == null ? void 0 : t.options) || h(this, G) || Ae();
  }
  get plugins() {
    return h(this, N);
  }
  get layout() {
    return h(this, B);
  }
  get id() {
    return h(this, lt);
  }
  get data() {
    return h(this, ct);
  }
  componentWillReceiveProps() {
    R(this, G, void 0);
  }
  componentDidMount() {
    h(this, Y) ? this.forceUpdate() : j(this, vt, se).call(this), h(this, N).forEach((t) => {
      const { events: s } = t;
      !s || Object.entries(s).forEach(([o, i]) => {
        this.on(o, i);
      });
    }), this.on("click", h(this, qt)), this.options.responsive && this.on("window_resize", h(this, Ot)), h(this, N).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    h(this, Y) ? j(this, vt, se).call(this) : h(this, N).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    if (t)
      for (const s of h(this, O).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), h(this, at)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), h(this, ht)) : t.removeEventListener(s, h(this, J));
    h(this, N).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), h(this, X).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), R(this, ct, {}), h(this, O).clear();
  }
  on(t, s) {
    var i;
    const o = h(this, O).get(t);
    o ? o.push(s) : (h(this, O).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), h(this, at)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), h(this, ht)) : (i = this.ref.current) == null || i.addEventListener(t, h(this, J)));
  }
  off(t, s) {
    var r;
    const o = h(this, O).get(t);
    if (!o)
      return;
    const i = o.indexOf(s);
    i >= 0 && o.splice(i, 1), o.length || (h(this, O).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), h(this, at)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), h(this, ht)) : (r = this.ref.current) == null || r.removeEventListener(t, h(this, J)));
  }
  scrollLeft(t) {
    const { scrollWidth: s, scrollColsWidth: o } = this.layout.colsInfo;
    t = Math.max(0, Math.min(t, o - s)), this.setState({ scrollLeft: t }, () => {
      var i;
      (i = this.options.onScroll) == null || i.call(this, t, "horz");
    });
  }
  scrollTop(t) {
    const { rowsHeight: s, rowsHeightTotal: o } = this.layout;
    t = Math.max(0, Math.min(t, o - s)), this.setState({ scrollTop: t }, () => {
      var i;
      (i = this.options.onScroll) == null || i.call(this, t, "vert");
    });
  }
  getColInfo(t) {
    if (typeof t == "object")
      return t;
    const { colsMap: s, colsList: o } = this.layout;
    return typeof t == "number" ? o[t] : s[t];
  }
  getRowInfo(t) {
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: o } = this.layout;
    return typeof t == "number" ? s[t] : o[t];
  }
  getCellValue(t, s) {
    var a, d;
    const o = typeof t == "object" ? t : this.getRowInfo(t);
    if (!o)
      return;
    const i = typeof s == "object" ? s : this.getColInfo(s);
    if (!i)
      return;
    let r = o.id === "HEADER" ? (a = i.setting.title) != null ? a : i.setting.name : (d = o.data) == null ? void 0 : d[i.name];
    const { cellValueGetter: c } = this.options;
    return c && (r = c.call(this, o, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}) {
    const { dirtyType: s } = t;
    s === "layout" ? R(this, B, void 0) : s === "options" && (R(this, B, void 0), R(this, G, void 0)), this.forceUpdate();
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
    const r = o == null ? void 0 : o.getAttribute("data-col"), c = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof r != "string" || typeof c != "string"))
      return {
        cellElement: o,
        rowElement: i,
        colName: r,
        rowID: c,
        target: s
      };
  }
  render() {
    var f;
    const t = j(this, Vt, nn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: d } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", s, {
      "dtable-hover-row": o,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": c,
      "dtable-striped": a,
      "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
      "scrollbar-hover": d
    }], u = [];
    return t && h(this, N).forEach((p) => {
      var _;
      const m = (_ = p.onRender) == null ? void 0 : _.call(this, t);
      !m || (m.style && Object.assign(l, m.style), m.className && g.push(m.className), m.children && u.push(m.children));
    }), /* @__PURE__ */ b("div", {
      id: h(this, lt),
      className: D(g),
      style: l,
      ref: this.ref
    }, t && j(this, jt, Xe).call(this, t), t && j(this, Pt, Je).call(this, t), t && j(this, It, Ze).call(this, t), t && j(this, Bt, Qe).call(this, t));
  }
}
st = new WeakMap(), lt = new WeakMap(), Y = new WeakMap(), G = new WeakMap(), X = new WeakMap(), N = new WeakMap(), B = new WeakMap(), O = new WeakMap(), ct = new WeakMap(), J = new WeakMap(), at = new WeakMap(), ht = new WeakMap(), jt = new WeakSet(), Xe = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Bn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: h(this, kt),
      onRenderRow: h(this, Ut),
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
}, Pt = new WeakSet(), Je = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: c } = t;
  return /* @__PURE__ */ b(On, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: h(this, kt),
    onRenderRow: h(this, Ft),
    ...c
  });
}, It = new WeakSet(), Ze = function(t) {
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
}, Bt = new WeakSet(), Qe = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = t, { scrollColsWidth: d, scrollWidth: l } = i, { scrollbarSize: g = 12, horzScrollbarPos: u } = this.options;
  return d > l && s.push(
    /* @__PURE__ */ b(Me, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: d,
      clientSize: l,
      onScroll: h(this, Rt),
      left: i.fixedLeftWidth,
      bottom: u === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })
  ), a > c && s.push(
    /* @__PURE__ */ b(Me, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: a,
      clientSize: c,
      onScroll: h(this, Rt),
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), s.length ? s : null;
}, Ot = new WeakMap(), vt = new WeakSet(), se = function() {
  var t;
  R(this, Y, !1), (t = this.options.afterRender) == null || t.call(this), h(this, N).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Ft = new WeakMap(), Ut = new WeakMap(), kt = new WeakMap(), Rt = new WeakMap(), qt = new WeakMap(), Kt = new WeakSet(), tn = function() {
  if (h(this, G))
    return !1;
  const s = { ...Ae(), ...h(this, X).reduce((o, i) => {
    const { defaultOptions: r } = i;
    return r && Object.assign(o, r), o;
  }, {}), ...this.props };
  return R(this, G, s), R(this, N, h(this, X).reduce((o, i) => {
    const { when: r, options: c } = i;
    return (!r || r(s)) && (o.push(i), c && Object.assign(s, typeof c == "function" ? c.call(this, s) : c)), o;
  }, [])), !0;
}, Gt = new WeakSet(), en = function() {
  var ue, pe, ge, _e;
  const { plugins: t } = this;
  let s = h(this, G);
  t.forEach((y) => {
    var z;
    const A = (z = y.beforeLayout) == null ? void 0 : z.call(this, s);
    A && (s = { ...s, ...A });
  });
  const { defaultColWidth: o, minColWidth: i, maxColWidth: r } = s, c = [], a = [], d = [], l = {}, g = [], u = [];
  let f = 0, p = 0, m = 0;
  s.cols.forEach((y) => {
    if (y.hidden)
      return;
    const {
      name: A,
      type: z = "",
      fixed: K = !1,
      flex: tt = !1,
      width: _t = o,
      minWidth: St = i,
      maxWidth: be = r,
      ..._n
    } = y, bt = Pn(_t, St, be), me = K ? 0 : tt === !0 ? 1 : typeof tt == "number" ? tt : 0, T = {
      name: A,
      type: z,
      setting: {
        name: A,
        type: z,
        fixed: K,
        flex: tt,
        width: _t,
        minWidth: St,
        maxWidth: be,
        ..._n
      },
      flex: me,
      left: 0,
      width: bt,
      realWidth: bt,
      visible: !0,
      index: g.length
    };
    K === "left" ? (T.left = f, f += bt, c.push(T)) : K === "right" ? (T.left = p, p += bt, a.push(T)) : (T.left = m, m += bt, d.push(T)), me && u.push(T), g.push(T), l[T.name] = T, t.forEach((ye) => {
      var we, ve;
      const xt = (we = ye.colTypes) == null ? void 0 : we[z];
      if (xt) {
        const ke = typeof xt == "function" ? xt(T) : xt;
        ke && Object.assign(T.setting, ke);
      }
      (ve = ye.onAddCol) == null || ve.call(this, T);
    });
  });
  let _ = s.width, v = 0;
  if (typeof _ == "function" && (_ = _()), _ === "auto")
    v = f + m + p;
  else if (_ === "100%") {
    const y = (ue = this.ref.current) == null ? void 0 : ue.parentElement;
    if (y)
      v = y.clientWidth;
    else {
      v = 0, R(this, Y, !0);
      return;
    }
  } else
    v = _ != null ? _ : 0;
  const { data: S, rowKey: k = "id", rowHeight: x } = s, L = [], E = (y, A, z) => {
    var tt, _t;
    const K = { data: z != null ? z : { [k]: y }, id: y, index: L.length, top: 0 };
    if (z || (K.lazy = !0), L.push(K), ((tt = s.onAddRow) == null ? void 0 : tt.call(this, K, A)) !== !1) {
      for (const St of t)
        if (((_t = St.onAddRow) == null ? void 0 : _t.call(this, K, A)) === !1)
          return;
    }
  };
  if (typeof S == "number")
    for (let y = 0; y < S; y++)
      E(`${y}`, y);
  else
    Array.isArray(S) && S.forEach((y, A) => {
      var z;
      typeof y == "object" ? E(`${(z = y[k]) != null ? z : ""}`, A, y) : E(`${y != null ? y : ""}`, A);
    });
  let $ = L;
  const C = {};
  if (s.onAddRows) {
    const y = s.onAddRows.call(this, $);
    y && ($ = y);
  }
  for (const y of t) {
    const A = (pe = y.onAddRows) == null ? void 0 : pe.call(this, $);
    A && ($ = A);
  }
  $.forEach((y, A) => {
    C[y.id] = y, y.index = A;
  });
  const { header: ut, footer: pt } = s, Jt = ut ? s.headerHeight || x : 0, Zt = pt ? s.footerHeight || x : 0;
  let q = s.height, Q = 0;
  const de = $.length * x, Qt = Jt + Zt + de;
  if (typeof q == "function" && (q = q(Qt)), q === "auto")
    Q = Qt;
  else if (typeof q == "object")
    Q = Math.min(q.max, Math.max(q.min, Qt));
  else if (q === "100%") {
    const y = (ge = this.ref.current) == null ? void 0 : ge.parentElement;
    if (y)
      Q = y.clientHeight;
    else {
      Q = 0, R(this, Y, !0);
      return;
    }
  } else
    Q = q;
  const pn = Q - Jt - Zt, gn = v - f - p, gt = {
    options: s,
    allRows: L,
    width: v,
    height: Q,
    rows: $,
    rowsMap: C,
    rowHeight: x,
    rowsHeight: pn,
    rowsHeightTotal: de,
    header: ut,
    footer: pt,
    headerHeight: Jt,
    footerHeight: Zt,
    colsMap: l,
    colsList: g,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: a,
      scrollCols: d,
      fixedLeftWidth: f,
      scrollWidth: gn,
      scrollColsWidth: m,
      fixedRightWidth: p
    }
  }, fe = (_e = s.onLayout) == null ? void 0 : _e.call(this, gt);
  fe && Object.assign(gt, fe), t.forEach((y) => {
    if (y.onLayout) {
      const A = y.onLayout.call(this, gt);
      A && Object.assign(gt, A);
    }
  }), R(this, B, gt);
}, Vt = new WeakSet(), nn = function() {
  (j(this, Kt, tn).call(this) || !h(this, B)) && j(this, Gt, en).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: o, colsInfo: { scrollCols: i, scrollWidth: r, scrollColsWidth: c } } = t;
  if (o.length) {
    const k = r - c;
    if (k > 0) {
      const x = o.reduce((E, $) => E + $.flex, 0);
      let L = 0;
      o.forEach((E) => {
        const $ = Math.min(k - L, Math.ceil(k * (E.flex / x)));
        E.realWidth = $ + E.width, L += E.realWidth;
      });
    } else
      o.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  s = Math.min(Math.max(0, c - r), s);
  let a = 0;
  i.forEach((k) => {
    k.left = a, a += k.realWidth, k.visible = k.left + k.realWidth >= s && k.left <= s + r;
  });
  const { rowsHeightTotal: d, rowsHeight: l, rows: g, rowHeight: u } = t, f = Math.min(Math.max(0, d - l), this.state.scrollTop), p = Math.floor(f / u), m = f + l, _ = Math.min(g.length, Math.ceil(m / u)), v = [], { rowDataGetter: S } = this.options;
  for (let k = p; k < _; k++) {
    const x = g[k];
    x.top = x.index * u - f, x.lazy && S && (x.data = S([x.id])[0], x.lazy = !1), v.push(x);
  }
  return t.visibleRows = v, t.scrollTop = f, t.scrollLeft = s, t;
}, H(ne, "addPlugin", Ge), H(ne, "removePlugin", Ve);
function He(e, n) {
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
  when: (e) => !!e.colHover,
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
      He(this, s);
    },
    mouseleave() {
      He(this, !1);
    }
  }
};
Et(sn, { buildIn: !0 });
function qn(e, n) {
  var r, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (a, d) => {
    o && !o.call(this, a) || !!t[a] === d || (d ? t[a] = !0 : delete t[a], s[a] = d);
  };
  if (e === void 0 ? (n === void 0 && (n = !on.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
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
function Kn(e) {
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
    toggleCheckRows: qn,
    isRowChecked: Kn,
    isAllRowChecked: on,
    getChecks: Gn
  },
  onRenderCell(e, { row: n, col: t }) {
    var c, a;
    const { id: s } = n, { canRowCheckable: o } = this.options;
    if (o && !o.call(this, s))
      return e;
    const { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const d = this.isRowChecked(s), l = (a = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, d, s)) != null ? a : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: d
      });
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r, c;
    const { id: s } = n, { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const a = this.isAllRowChecked(), d = (c = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s)) != null ? c : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: D(e.className, "is-checked") };
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
Et(rn);
function oe(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = oe.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? oe.call(this, n.parent).level + 1 : 0, n;
}
function Vn(e, n) {
  var o;
  let t = (o = this.state.collapsedRows) != null ? o : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !ln.call(this)), n) {
      const i = s.entries();
      for (const [r, c] of i)
        c.state === "expanded" && (t[r] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[i[0]]), i.forEach((r) => {
      const c = s.get(r);
      n && (c == null ? void 0 : c.children) ? t[r] = !0 : delete t[r];
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
function cn(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = cn(e, n, r.children, s + 1)));
  }
  return n;
}
function an(e, n, t, s) {
  const o = e.getNestedRowInfo(n);
  return !o || o.state === "" || !o.children || o.children.forEach((i) => {
    s[i] = t, an(e, i, t, s);
  }), o;
}
function hn(e, n, t, s, o) {
  var c;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((c = i.children) == null ? void 0 : c.every((a) => {
    const d = !!(s[a] !== void 0 ? s[a] : o[a]);
    return t === d;
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
        const r = an(this, o, i, s);
        r != null && r.parent && hn(this, r.parent, i, s, t);
      }), s;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Vn,
    isAllCollapsed: ln,
    getNestedRowInfo: oe
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var o, i, r, c, a;
    const { nestedMap: n } = this.data, t = (i = e.data) == null ? void 0 : i[(o = this.options.nestedParentKey) != null ? o : "parent"], s = (r = n.get(e.id)) != null ? r : {
      state: "",
      level: 0
    };
    if (s.parent = t, (a = e.data) != null && a[(c = this.options.asParentKey) != null ? c : "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let d = n.get(t);
      d || (d = {
        state: "",
        level: 0
      }, n.set(t, d)), d.children || (d.children = []), d.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), cn(this.data.nestedMap), e.sort((n, t) => {
      var r, c;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((c = o.order) != null ? c : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var c, a, d;
    const { id: s, data: o } = t, { nestedToggle: i } = n.setting, r = this.getNestedRowInfo(s);
    if (i && (r.children || r.parent) && e.unshift((a = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, r, s, n, o)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), r.level) {
      let { nestedIndent: l = i } = n.setting;
      l && (l === !0 && (l = (d = this.options.nestedIndent) != null ? d : 12), e.unshift(/* @__PURE__ */ b("div", {
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
      className: D(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = D(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
Et(dn);
const U = 24 * 60 * 60 * 1e3, W = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ft = (e, n = new Date()) => (e = W(e), n = W(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ie = (e, n = new Date()) => W(e).getFullYear() === W(n).getFullYear(), fn = (e, n = new Date()) => (e = W(e), n = W(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Yn = (e, n = new Date()) => {
  e = W(e), n = W(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Xn = (e, n) => ft(W(n), e), Jn = (e, n) => ft(W(n).getTime() - U, e), Zn = (e, n) => ft(W(n).getTime() + U, e), Qn = (e, n) => ft(W(n).getTime() - 2 * U, e), Tt = (e, n = "yyyy-MM-dd hh:mm") => {
  e = W(e);
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
}, ts = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Tt(e, ie(e) ? s.month : s.full);
  if (ft(e, n))
    return o;
  const i = Tt(n, ie(e, n) ? fn(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, es = (e) => {
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
}, re = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, re(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, re(e, "day", t, s);
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = mt(s, t.data);
        return e[0] = /* @__PURE__ */ b("a", {
          href: i,
          ...o
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: s } = t, { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${n.name}Avatar` } = n.setting, c = /* @__PURE__ */ b("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: s ? s[r] : ""
        }));
        return o ? e.unshift(c) : e[0] = c, e;
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
      onRenderCell(e, { col: n, row: t }) {
        var c;
        const s = (c = t.data) == null ? void 0 : c[n.name];
        if (!s)
          return e;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: i = {}, actionBtnClass: r = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: s.map((a) => {
            typeof a == "string" && (a = { action: a });
            const d = i[a.action];
            return d && (a = { className: r, ...d, ...a }), mt(o, a);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Tt(i, s) : o === "html" ? e[0] = { html: mt(s, i) } : e[0] = mt(s, i), e;
      }
    }
  }
};
Et(un);
const ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: sn,
  checkable: rn,
  nested: dn,
  rich: un
}, Symbol.toStringTag, { value: "Module" }));
var Ct;
class Mt {
  constructor(n, t) {
    H(this, "element");
    H(this, "options");
    w(this, Ct, ze());
    this.element = n, this.options = { ...t }, this.render();
  }
  get $() {
    return h(this, Ct).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), En(/* @__PURE__ */ b(ne, {
      ref: h(this, Ct),
      ...this.options
    }), this.element);
  }
}
Ct = new WeakMap(), H(Mt, "NAME", "zui.dtable"), H(Mt, "definePlugin", Et), H(Mt, "removePlugin", Ve), H(Mt, "plugins", ns);
var F, P;
class ss {
  constructor(n) {
    w(this, F, void 0);
    w(this, P, void 0);
    R(this, F, n), R(this, P, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, F).parentElement.parentElement, h(this, F).parentElement), this.addActive(h(this, P).parentElement, h(this, P)), h(this, P).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, P, h(this, F)), this.addActive(h(this, P).parentElement, h(this, P)), R(this, F, document.querySelector(`[href='#${h(this, P).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, P).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, P).getAttribute("id")}']`)), this.addActive(h(this, F).parentElement.parentElement, h(this, F).parentElement);
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
F = new WeakMap(), P = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new ss(e.target).showTarget());
});
const ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: U,
  createDate: W,
  isSameDay: ft,
  isSameYear: ie,
  isSameMonth: fn,
  isSameWeek: Yn,
  isToday: Xn,
  isYesterday: Jn,
  isTomorrow: Zn,
  isDBY: Qn,
  formatDate: Tt,
  formatDateSpan: ts,
  getTimeBeforeDesc: es,
  calculateTimestamp: re,
  formatString: mt,
  formatBytes: Sn,
  convertBytes: xn
}, Symbol.toStringTag, { value: "Module" }));
export {
  rs as Avatar,
  Mt as DTable,
  ss as NavTabs,
  Me as Scrollbar,
  is as browser,
  ns as dtablePlugins,
  ls as helpers,
  Hn as store
};
