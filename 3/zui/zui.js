var gn = Object.defineProperty;
var _n = (e, n, t) => n in e ? gn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var A = (e, n, t) => (_n(e, typeof n != "symbol" ? n + "" : n, t), t), Zt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var d = (e, n, t) => (Zt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), v = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, C = (e, n, t, s) => (Zt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var P = (e, n, t) => (Zt(e, n, "access private method"), t);
const bn = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class mn extends HTMLElement {
  constructor() {
    super();
    A(this, "$button");
    A(this, "$icon");
    A(this, "onClick");
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
    const t = bn(this);
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
customElements.get("zui-button") || customElements.define("zui-button", mn);
var Gt, M, Ae, bt, we, At = {}, He = [], yn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function J(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Ne(e) {
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
  return Mt(e, r, s, o, null);
}
function Mt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++Ae : o };
  return o == null && M.vnode != null && M.vnode(i), i;
}
function Le() {
  return { current: null };
}
function Vt(e) {
  return e.children;
}
function st(e, n) {
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
function De(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return De(e);
  }
}
function ke(e) {
  (!e.__d && (e.__d = !0) && bt.push(e) && !Ht.__r++ || we !== M.debounceRendering) && ((we = M.debounceRendering) || setTimeout)(Ht);
}
function Ht() {
  for (var e; Ht.__r = bt.length; )
    e = bt.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), bt = [], e.some(function(n) {
      var t, s, o, i, r, c;
      n.__d && (r = (i = (t = n).__v).__e, (c = t.__P) && (s = [], (o = J({}, i)).__v = i.__v + 1, ie(c, i, o, t.__n, c.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? at(i) : r, i.__h), Pe(s, i), i.__e != r && De(i)));
    });
}
function ze(e, n, t, s, o, i, r, c, a, h) {
  var l, g, u, f, p, m, _, w = s && s.__k || He, S = w.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((f = t.__k[l] = (f = n[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Mt(null, f, null, null, f) : Array.isArray(f) ? Mt(Vt, { children: f }, null, null, null) : f.__b > 0 ? Mt(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (u = w[l]) === null || u && f.key == u.key && f.type === u.type)
        w[l] = void 0;
      else
        for (g = 0; g < S; g++) {
          if ((u = w[g]) && f.key == u.key && f.type === u.type) {
            w[g] = void 0;
            break;
          }
          u = null;
        }
      ie(e, f, u = u || At, o, i, r, c, a, h), p = f.__e, (g = f.ref) && u.ref != g && (_ || (_ = []), u.ref && _.push(u.ref, null, f), _.push(g, f.__c || p, f)), p != null ? (m == null && (m = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = a = Te(f, a, e) : a = je(e, f, u, w, p, a), typeof t.type == "function" && (t.__d = a)) : a && u.__e == a && a.parentNode != e && (a = at(u));
    }
  for (t.__e = m, l = S; l--; )
    w[l] != null && (typeof t.type == "function" && w[l].__e != null && w[l].__e == t.__d && (t.__d = at(s, l + 1)), Ie(w[l], w[l]));
  if (_)
    for (l = 0; l < _.length; l++)
      We(_[l], _[++l], _[++l]);
}
function Te(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? Te(s, n, t) : je(t, s, s, o, s.__e, n));
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
function vn(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Nt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Nt(e, i, n[i], t[i], s);
}
function Re(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || yn.test(n) ? t : t + "px";
}
function Nt(e, n, t, s, o) {
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
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? xe : Ce, i) : e.removeEventListener(n, i ? xe : Ce, i);
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
function Ce(e) {
  this.l[e.type + !1](M.event ? M.event(e) : e);
}
function xe(e) {
  this.l[e.type + !0](M.event ? M.event(e) : e);
}
function ie(e, n, t, s, o, i, r, c, a) {
  var h, l, g, u, f, p, m, _, w, S, R, E, N, x = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = n.__e = t.__e, n.__h = null, i = [c]), (h = M.__b) && h(n);
  try {
    t:
      if (typeof x == "function") {
        if (_ = n.props, w = (h = x.contextType) && s[h.__c], S = h ? w ? w.props.value : h.__ : s, t.__c ? m = (l = n.__c = t.__c).__ = l.__E : ("prototype" in x && x.prototype.render ? n.__c = l = new x(_, S) : (n.__c = l = new st(_, S), l.constructor = x, l.render = kn), w && w.sub(l), l.props = _, l.state || (l.state = {}), l.context = S, l.__n = s, g = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), x.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = J({}, l.__s)), J(l.__s, x.getDerivedStateFromProps(_, l.__s))), u = l.props, f = l.state, g)
          x.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && _ !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, S), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, S) === !1 || n.__v === t.__v) {
            l.props = _, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(L) {
              L && (L.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, S), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(u, f, p);
          });
        }
        if (l.context = S, l.props = _, l.__v = n, l.__P = e, R = M.__r, E = 0, "prototype" in x && x.prototype.render)
          l.state = l.__s, l.__d = !1, R && R(n), h = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, R && R(n), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++E < 25);
        l.state = l.__s, l.getChildContext != null && (s = J(J({}, s), l.getChildContext())), g || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(u, f)), N = h != null && h.type === Vt && h.key == null ? h.props.children : h, ze(e, Array.isArray(N) ? N : [N], n, t, s, o, i, r, c, a), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), m && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = wn(t.__e, n, t, s, o, i, r, a);
    (h = M.diffed) && h(n);
  } catch (L) {
    n.__v = null, (a || i != null) && (n.__e = c, n.__h = !!a, i[i.indexOf(c)] = null), M.__e(L, n, t);
  }
}
function Pe(e, n) {
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
function wn(e, n, t, s, o, i, r, c) {
  var a, h, l, g = t.props, u = n.props, f = n.type, p = 0;
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
    if (i = i && Gt.call(e.childNodes), h = (g = t.props || At).dangerouslySetInnerHTML, l = u.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (vn(e, u, g, o, c), l)
      n.__k = [];
    else if (p = n.props.children, ze(e, Array.isArray(p) ? p : [p], n, t, s, o && f !== "foreignObject", i, r, i ? i[0] : t.__k && at(t, 0), c), i != null)
      for (p = i.length; p--; )
        i[p] != null && Ne(i[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== g.value) && Nt(e, "value", p, g.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Nt(e, "checked", p, g.checked, !1));
  }
  return e;
}
function We(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    M.__e(s, t);
  }
}
function Ie(e, n, t) {
  var s, o;
  if (M.unmount && M.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || We(s, null, n)), (s = e.__c) != null) {
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
      s[o] && Ie(s[o], n, typeof e.type != "function");
  t || e.__e == null || Ne(e.__e), e.__e = e.__d = void 0;
}
function kn(e, n, t) {
  return this.constructor(e, t);
}
function Rn(e, n, t) {
  var s, o, i;
  M.__ && M.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], ie(n, e = (!s && t || n).__k = b(Vt, null, [e]), o || At, At, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? Gt.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Pe(i, e);
}
Gt = He.slice, M = { __e: function(e, n, t, s) {
  for (var o, i, r; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, s || {}), r = o.__d), r)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ae = 0, st.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = J({}, this.state), typeof e == "function" && (e = e(J({}, t), this.props)), e && J(t, e), e != null && this.__v && (n && this.__h.push(n), ke(this));
}, st.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ke(this));
}, st.prototype.render = Vt, bt = [], Ht.__r = 0;
const D = (...e) => e.map((n) => Array.isArray(n) ? D(...n) : typeof n == "function" ? D(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
var tt, et;
class Se extends st {
  constructor(t) {
    var s;
    super(t);
    v(this, tt, 0);
    v(this, et, null);
    A(this, "_handleWheel", (t) => {
      var i;
      const { wheelContainer: s } = this.props, o = t.target;
      if (!(!o || !s) && (typeof s == "string" && o.closest(s) || typeof s == "object")) {
        const r = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1);
        this.scrollOffset(r) && t.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (d(this, tt) && cancelAnimationFrame(d(this, tt)), C(this, tt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), C(this, tt, 0);
      })), t.preventDefault());
    });
    A(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    A(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    A(this, "_handleClick", (t) => {
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
    t && (C(this, et, typeof t == "string" ? document : t.current), d(this, et).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
      left: c,
      top: a,
      bottom: h,
      right: l
    } = this.props, { maxScrollPos: g, scrollPos: u } = this, { dragStart: f } = this.state, p = {
      left: c,
      top: a,
      bottom: h,
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
tt = new WeakMap(), et = new WeakMap();
function _t(e, ...n) {
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
var re = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(re || {});
function Cn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / re[t]).toFixed(n) + t);
}
const xn = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * re[s];
};
function Sn(e) {
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
function Mn(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, c = s.left <= i && s.left + s.width >= 0;
  return r && c;
}
const ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Sn,
  domReady: En,
  isElementVisible: Mn,
  classes: D
}, Symbol.toStringTag, { value: "Module" }));
let Be = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var mt, V, I, ot, it, $t;
const ce = class {
  constructor(n, t = "local") {
    v(this, it);
    v(this, mt, void 0);
    v(this, V, void 0);
    v(this, I, void 0);
    v(this, ot, void 0);
    C(this, mt, t), C(this, V, `ZUI_STORE:${n != null ? n : Be()}`), C(this, I, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, mt);
  }
  get session() {
    return this.type === "session" ? this : (d(this, ot) || C(this, ot, new ce(d(this, V), "session")), d(this, ot));
  }
  get(n, t) {
    const s = d(this, I).getItem(P(this, it, $t).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, I).setItem(P(this, it, $t).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    d(this, I).removeItem(P(this, it, $t).call(this, n));
  }
  each(n) {
    for (let t = 0; t < d(this, I).length; t++) {
      const s = d(this, I).key(t);
      if (s != null && s.startsWith(d(this, V))) {
        const o = d(this, I).getItem(s);
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
let Lt = ce;
mt = new WeakMap(), V = new WeakMap(), I = new WeakMap(), ot = new WeakMap(), it = new WeakSet(), $t = function(n) {
  return `${d(this, V)}:${n}`;
};
const $n = new Lt("DEFAULT");
function An(e, n = "local") {
  return new Lt(e, n);
}
Object.assign($n, { create: An });
class os extends st {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: c, ...a } = this.props, h = [s], l = { ...o };
    let g = null;
    return i ? g = /* @__PURE__ */ b("img", {
      src: i,
      alt: r
    }) : g = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && h.push(`avatar-${n}`), typeof t == "string" && h.push(`rounded-${t}`), /* @__PURE__ */ b("div", {
      className: D(h),
      style: l,
      ...a
    }, g, c);
  }
}
function Hn() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Nn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Ln(e, n) {
  Hn(), e.classList.add("block"), Ee(e, n), e.onclick = (t) => Dn(t, e), window.addEventListener("resize", () => {
    Ee(e, n);
  });
}
function Oe(e) {
  var n;
  Nn(), (n = e.classList) == null || n.remove("block");
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
function Dn(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Oe(n));
}
function zn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = zn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Ln(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Oe(n);
});
function Fe() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function Tn(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Fe(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? Tn(t) : Fe();
});
function jn(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function le({ col: e, className: n, height: t, row: s, onRenderCell: o, style: i, outerStyle: r, children: c, outerClass: a, ...h }) {
  var x, L;
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
  }], m = ["dtable-cell-content", n], _ = [(L = c != null ? c : (x = s.data) == null ? void 0 : x[e.name]) != null ? L : ""], w = o ? o(_, { row: s, col: e }, b) : _, S = [], R = [], E = {}, N = {};
  return w == null || w.forEach((k) => {
    var dt;
    if (typeof k == "object" && k && ("html" in k || "className" in k || "style" in k || "attrs" in k)) {
      const ft = k.outer ? S : R;
      k.html ? ft.push(/* @__PURE__ */ b("div", {
        className: D("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(dt = k.attrs) != null ? dt : {}
      })) : (k.style && Object.assign(k.outer ? l : f, k.style), k.className && (k.outer ? p : m).push(k.className), k.children && ft.push(k.children), k.attrs && Object.assign(k.outer ? E : N, k.attrs));
    } else
      R.push(k);
  }), /* @__PURE__ */ b("div", {
    className: D(p),
    style: l,
    "data-col": e.name,
    ...h,
    ...E
  }, R.length > 0 && /* @__PURE__ */ b("div", {
    className: D(m),
    style: f,
    ...N
  }, R), S);
}
function Pn({ col: e, children: n, style: t, ...s }) {
  var i;
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ b(le, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, (i = e.setting.title) != null ? i : e.setting.name, o && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function Qt({ row: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, CellComponent: c = le, onRenderCell: a }) {
  return /* @__PURE__ */ b("div", {
    className: D("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((h) => h.visible ? /* @__PURE__ */ b(c, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: a
  }) : null));
}
function Ue({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  fixedLeftWidth: c,
  scrollWidth: a,
  scrollColsWidth: h,
  fixedRightWidth: l,
  scrollLeft: g,
  CellComponent: u = le,
  onRenderCell: f,
  style: p,
  ...m
}) {
  let _ = null;
  o != null && o.length && (_ = /* @__PURE__ */ b(Qt, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let w = null;
  r != null && r.length && (w = /* @__PURE__ */ b(Qt, {
    className: "dtable-flexable",
    cols: r,
    left: c - g,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  let S = null;
  i != null && i.length && (S = /* @__PURE__ */ b(Qt, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: f
  }));
  const R = { top: t, height: s, lineHeight: `${s - 2}px`, ...p };
  return /* @__PURE__ */ b("div", {
    className: D("dtable-row", n),
    style: R,
    "data-id": e.id,
    ...m
  }, _, w, S);
}
function Wn({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Pn
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
function In({
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
    const h = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      row: a,
      top: a.top,
      height: i,
      ...c
    }, l = r == null ? void 0 : r({ props: h, row: a }, b);
    return l && Object.assign(h, l), /* @__PURE__ */ b(Ue, {
      ...h
    });
  }));
}
const Dt = /* @__PURE__ */ new Map(), zt = [];
function qe(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Dt.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Dt.set(t, e), (n == null ? void 0 : n.buildIn) && !zt.includes(t) && zt.push(t);
}
function Ct(e, n) {
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
function Ke(e) {
  return Dt.delete(e);
}
function Bn(e) {
  if (typeof e == "string") {
    const n = Dt.get(e);
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
    const o = Bn(s);
    !o || t.has(o.name) || ((i = o.plugins) != null && i.length && Ge(e, o.plugins, t), e.push(o), t.add(o.name));
  }), e;
}
function On(e = [], n = !0) {
  return n && zt.length && e.unshift(...zt), e != null && e.length ? Ge([], e, /* @__PURE__ */ new Set()) : [];
}
function Me() {
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
var nt, rt, Y, G, X, H, B, O, lt, ct, jt, Ve, Pt, Ye, Wt, Xe, It, Je, yt, vt, ee, Bt, Ot, wt, kt, Ft, Ut, Ze, qt, Qe, Kt, tn;
class te extends st {
  constructor(t) {
    super(t);
    v(this, jt);
    v(this, Pt);
    v(this, Wt);
    v(this, It);
    v(this, vt);
    v(this, Ut);
    v(this, qt);
    v(this, Kt);
    A(this, "ref", Le());
    v(this, nt, 0);
    v(this, rt, void 0);
    v(this, Y, !1);
    v(this, G, void 0);
    v(this, X, void 0);
    v(this, H, []);
    v(this, B, void 0);
    v(this, O, /* @__PURE__ */ new Map());
    v(this, lt, {});
    v(this, ct, (t) => {
      const { type: s } = t, o = d(this, O).get(s);
      if (!!(o != null && o.length)) {
        for (const i of o)
          if (i.call(this, t) === !1) {
            t.stopPropagation();
            break;
          }
      }
    });
    v(this, yt, () => {
      d(this, nt) && cancelAnimationFrame(d(this, nt)), C(this, nt, requestAnimationFrame(() => {
        C(this, B, void 0), this.forceUpdate(), C(this, nt, 0);
      }));
    });
    v(this, Bt, (t, s) => {
      if (this.options.onRenderRow) {
        const o = this.options.onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return d(this, H).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    v(this, Ot, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), d(this, H).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    v(this, wt, (t, s, o) => {
      const { row: i, col: r } = s;
      t[0] = this.getCellValue(i, r);
      const c = i.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[c] && (t = r.setting[c].call(this, t, s, o)), this.options[c] && (t = this.options[c].call(this, t, s, o)), d(this, H).forEach((a) => {
        a[c] && (t = a[c].call(this, t, s, o));
      }), t;
    });
    v(this, kt, (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    v(this, Ft, (t) => {
      var a, h, l, g, u, f, p;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (h = o.getAttribute("data-id")) != null ? h : "";
      if (c === "HEADER")
        i && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), d(this, H).forEach((m) => {
          var _;
          (_ = m.onHeaderCellClick) == null || _.call(this, t, { colName: r, element: i });
        }));
      else {
        const m = this.layout.visibleRows.find((_) => _.id === c);
        if (i) {
          if (((g = this.options.onCellClick) == null ? void 0 : g.call(this, t, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
            return;
          for (const _ of d(this, H))
            if (((u = _.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: c, rowInfo: m, element: i, rowElement: o })) === !0)
              return;
        }
        if (((f = this.options.onRowClick) == null ? void 0 : f.call(this, t, { rowID: c, rowInfo: m, element: o })) === !0)
          return;
        for (const _ of d(this, H))
          if (((p = _.onRowClick) == null ? void 0 : p.call(this, t, { rowID: c, rowInfo: m, element: o })) === !0)
            return;
      }
    });
    C(this, rt, `dtable-${Be(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, C(this, X, Object.freeze(On(t.plugins))), d(this, X).forEach((s) => {
      var c;
      const { methods: o, data: i, state: r } = s;
      o && Object.entries(o).forEach(([a, h]) => {
        typeof h == "function" && Object.assign(this, { [a]: h.bind(this) });
      }), i && Object.assign(d(this, lt), i.call(this)), r && Object.assign(this.state, r.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = d(this, B)) == null ? void 0 : t.options) || d(this, G) || Me();
  }
  get plugins() {
    return d(this, H);
  }
  get layout() {
    return d(this, B);
  }
  get id() {
    return d(this, rt);
  }
  get data() {
    return d(this, lt);
  }
  componentWillReceiveProps() {
    C(this, G, void 0);
  }
  componentDidMount() {
    d(this, Y) ? this.forceUpdate() : P(this, vt, ee).call(this), d(this, H).forEach((t) => {
      const { events: s } = t;
      !s || Object.entries(s).forEach(([o, i]) => {
        this.on(o, i);
      });
    }), this.on("click", d(this, Ft)), this.options.responsive && window.addEventListener("resize", d(this, yt)), d(this, H).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    d(this, Y) ? P(this, vt, ee).call(this) : d(this, H).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    if (t)
      for (const s of d(this, O).keys())
        t.removeEventListener(s, d(this, ct));
    window.removeEventListener("resize", d(this, yt)), d(this, H).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), d(this, X).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), C(this, lt, {}), d(this, O).clear();
  }
  on(t, s) {
    var i;
    const o = d(this, O).get(t);
    o ? o.push(s) : (d(this, O).set(t, [s]), (i = this.ref.current) == null || i.addEventListener(t, d(this, ct)));
  }
  off(t, s) {
    var r;
    const o = d(this, O).get(t);
    if (!o)
      return;
    const i = o.indexOf(s);
    i >= 0 && o.splice(i, 1), o.length || (d(this, O).delete(t), (r = this.ref.current) == null || r.removeEventListener(t, d(this, ct)));
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
    var a, h;
    const o = typeof t == "object" ? t : this.getRowInfo(t);
    if (!o)
      return;
    const i = typeof s == "object" ? s : this.getColInfo(s);
    if (!i)
      return;
    let r = o.id === "HEADER" ? (a = i.setting.title) != null ? a : i.setting.name : (h = o.data) == null ? void 0 : h[i.name];
    const { cellValueGetter: c } = this.options;
    return c && (r = c.call(this, o, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}) {
    const { dirtyType: s } = t;
    s === "layout" ? C(this, B, void 0) : s === "options" && (C(this, B, void 0), C(this, G, void 0)), this.forceUpdate();
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
    const t = P(this, Kt, tn).call(this), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: c, striped: a, scrollbarHover: h } = this.options, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", s, {
      "dtable-hover-row": o,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": c,
      "dtable-striped": a,
      "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return t && d(this, H).forEach((p) => {
      var _;
      const m = (_ = p.onRender) == null ? void 0 : _.call(this, t);
      !m || (m.style && Object.assign(l, m.style), m.className && g.push(m.className), m.children && u.push(m.children));
    }), /* @__PURE__ */ b("div", {
      id: d(this, rt),
      className: D(g),
      style: l,
      ref: this.ref
    }, t && P(this, jt, Ve).call(this, t), t && P(this, Pt, Ye).call(this, t), t && P(this, Wt, Xe).call(this, t), t && P(this, It, Je).call(this, t));
  }
}
nt = new WeakMap(), rt = new WeakMap(), Y = new WeakMap(), G = new WeakMap(), X = new WeakMap(), H = new WeakMap(), B = new WeakMap(), O = new WeakMap(), lt = new WeakMap(), ct = new WeakMap(), jt = new WeakSet(), Ve = function(t) {
  const { header: s, colsInfo: o, headerHeight: i } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ b(Wn, {
      scrollLeft: this.state.scrollLeft,
      height: i,
      onRenderCell: d(this, wt),
      onRenderRow: d(this, Ot),
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
}, Pt = new WeakSet(), Ye = function(t) {
  const { headerHeight: s, rowsHeight: o, visibleRows: i, rowHeight: r, colsInfo: c } = t;
  return /* @__PURE__ */ b(In, {
    top: s,
    height: o,
    rows: i,
    rowHeight: r,
    scrollLeft: this.state.scrollLeft,
    onRenderCell: d(this, wt),
    onRenderRow: d(this, Bt),
    ...c
  });
}, Wt = new WeakSet(), Xe = function(t) {
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
}, It = new WeakSet(), Je = function(t) {
  const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: c, rowsHeightTotal: a } = t, { scrollColsWidth: h, scrollWidth: l } = i, { scrollbarSize: g = 12, horzScrollbarPos: u } = this.options;
  return h > l && s.push(
    /* @__PURE__ */ b(Se, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: h,
      clientSize: l,
      onScroll: d(this, kt),
      left: i.fixedLeftWidth,
      bottom: u === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })
  ), a > c && s.push(
    /* @__PURE__ */ b(Se, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: a,
      clientSize: c,
      onScroll: d(this, kt),
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), s.length ? s : null;
}, yt = new WeakMap(), vt = new WeakSet(), ee = function() {
  var t;
  C(this, Y, !1), (t = this.options.afterRender) == null || t.call(this), d(this, H).forEach((s) => {
    var o;
    return (o = s.afterRender) == null ? void 0 : o.call(this);
  });
}, Bt = new WeakMap(), Ot = new WeakMap(), wt = new WeakMap(), kt = new WeakMap(), Ft = new WeakMap(), Ut = new WeakSet(), Ze = function() {
  if (d(this, G))
    return !1;
  const s = { ...Me(), ...d(this, X).reduce((o, i) => {
    const { defaultOptions: r } = i;
    return r && Object.assign(o, r), o;
  }, {}), ...this.props };
  return C(this, G, s), C(this, H, d(this, X).reduce((o, i) => {
    const { when: r, options: c } = i;
    return (!r || r(s)) && (o.push(i), c && Object.assign(s, typeof c == "function" ? c.call(this, s) : c)), o;
  }, [])), !0;
}, qt = new WeakSet(), Qe = function() {
  var de, fe, ue, pe;
  const { plugins: t } = this;
  let s = d(this, G);
  t.forEach((y) => {
    var z;
    const $ = (z = y.beforeLayout) == null ? void 0 : z.call(this, s);
    $ && (s = { ...s, ...$ });
  });
  const { defaultColWidth: o, minColWidth: i, maxColWidth: r } = s, c = [], a = [], h = [], l = {}, g = [], u = [];
  let f = 0, p = 0, m = 0;
  s.cols.forEach((y) => {
    if (y.hidden)
      return;
    const {
      name: $,
      type: z = "",
      fixed: K = !1,
      flex: Q = !1,
      width: pt = o,
      minWidth: xt = i,
      maxWidth: ge = r,
      ...pn
    } = y, gt = jn(pt, xt, ge), _e = K ? 0 : Q === !0 ? 1 : typeof Q == "number" ? Q : 0, j = {
      name: $,
      type: z,
      setting: {
        name: $,
        type: z,
        fixed: K,
        flex: Q,
        width: pt,
        minWidth: xt,
        maxWidth: ge,
        ...pn
      },
      flex: _e,
      left: 0,
      width: gt,
      realWidth: gt,
      visible: !0,
      index: g.length
    };
    K === "left" ? (j.left = f, f += gt, c.push(j)) : K === "right" ? (j.left = p, p += gt, a.push(j)) : (j.left = m, m += gt, h.push(j)), _e && u.push(j), g.push(j), l[j.name] = j, t.forEach((be) => {
      var me, ye;
      const St = (me = be.colTypes) == null ? void 0 : me[z];
      if (St) {
        const ve = typeof St == "function" ? St(j) : St;
        ve && Object.assign(j.setting, ve);
      }
      (ye = be.onAddCol) == null || ye.call(this, j);
    });
  });
  let _ = s.width, w = 0;
  if (typeof _ == "function" && (_ = _()), _ === "auto")
    w = f + m + p;
  else if (_ === "100%") {
    const y = (de = this.ref.current) == null ? void 0 : de.parentElement;
    if (y)
      w = y.clientWidth;
    else {
      w = 0, C(this, Y, !0);
      return;
    }
  } else
    w = _ != null ? _ : 0;
  const { data: S, rowKey: R = "id", rowHeight: E } = s, N = [], x = (y, $, z) => {
    var Q, pt;
    const K = { data: z != null ? z : { [R]: y }, id: y, index: N.length, top: 0 };
    if (z || (K.lazy = !0), N.push(K), ((Q = s.onAddRow) == null ? void 0 : Q.call(this, K, $)) !== !1) {
      for (const xt of t)
        if (((pt = xt.onAddRow) == null ? void 0 : pt.call(this, K, $)) === !1)
          return;
    }
  };
  if (typeof S == "number")
    for (let y = 0; y < S; y++)
      x(`${y}`, y);
  else
    Array.isArray(S) && S.forEach((y, $) => {
      var z;
      typeof y == "object" ? x(`${(z = y[R]) != null ? z : ""}`, $, y) : x(`${y != null ? y : ""}`, $);
    });
  let L = !1, k = N;
  if (s.onAddRows) {
    const y = s.onAddRows.call(this, k);
    y && (k = y, L = !0);
  }
  for (const y of t) {
    const $ = (fe = y.onAddRows) == null ? void 0 : fe.call(this, k);
    $ && (k = $, L = !0);
  }
  L && k.forEach((y, $) => {
    y.index = $;
  });
  const { header: dt, footer: ft } = s, Yt = dt ? s.headerHeight || E : 0, Xt = ft ? s.footerHeight || E : 0;
  let q = s.height, Z = 0;
  const ae = k.length * E, Jt = Yt + Xt + ae;
  if (typeof q == "function" && (q = q(Jt)), q === "auto")
    Z = Jt;
  else if (typeof q == "object")
    Z = Math.min(q.max, Math.max(q.min, Jt));
  else if (q === "100%") {
    const y = (ue = this.ref.current) == null ? void 0 : ue.parentElement;
    if (y)
      Z = y.clientHeight;
    else {
      Z = 0, C(this, Y, !0);
      return;
    }
  } else
    Z = q;
  const fn = Z - Yt - Xt, un = w - f - p, ut = {
    options: s,
    allRows: N,
    width: w,
    height: Z,
    rows: k,
    rowHeight: E,
    rowsHeight: fn,
    rowsHeightTotal: ae,
    header: dt,
    footer: ft,
    headerHeight: Yt,
    footerHeight: Xt,
    colsMap: l,
    colsList: g,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: a,
      scrollCols: h,
      fixedLeftWidth: f,
      scrollWidth: un,
      scrollColsWidth: m,
      fixedRightWidth: p
    }
  }, he = (pe = s.onLayout) == null ? void 0 : pe.call(this, ut);
  he && Object.assign(ut, he), t.forEach((y) => {
    if (y.onLayout) {
      const $ = y.onLayout.call(this, ut);
      $ && Object.assign(ut, $);
    }
  }), C(this, B, ut);
}, Kt = new WeakSet(), tn = function() {
  (P(this, Ut, Ze).call(this) || !d(this, B)) && P(this, qt, Qe).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: o, colsInfo: { scrollCols: i, scrollWidth: r, scrollColsWidth: c } } = t;
  if (o.length) {
    const R = r - c;
    if (R > 0) {
      const E = o.reduce((x, L) => x + L.flex, 0);
      let N = 0;
      o.forEach((x) => {
        const L = Math.min(R - N, Math.ceil(R * (x.flex / E)));
        x.realWidth = L + x.width, N += x.realWidth;
      });
    } else
      o.forEach((E) => {
        E.realWidth = E.width;
      });
  }
  s = Math.min(Math.max(0, c - r), s);
  let a = 0;
  i.forEach((R) => {
    R.left = a, a += R.realWidth, R.visible = R.left + R.realWidth >= s && R.left <= s + r;
  });
  const { rowsHeightTotal: h, rowsHeight: l, rows: g, rowHeight: u } = t, f = Math.min(Math.max(0, h - l), this.state.scrollTop), p = Math.floor(f / u), m = f + l, _ = Math.min(g.length, Math.ceil(m / u)), w = [], { rowDataGetter: S } = this.options;
  for (let R = p; R < _; R++) {
    const E = g[R];
    E.top = E.index * u - f, E.lazy && S && (E.data = S([E.id])[0], E.lazy = !1), w.push(E);
  }
  return t.visibleRows = w, t.scrollTop = f, t.scrollLeft = s, t;
}, A(te, "addPlugin", qe), A(te, "removePlugin", Ke);
function $e(e, n) {
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
      $e(this, s);
    },
    mouseleave() {
      $e(this, !1);
    }
  }
};
Ct(en, { buildIn: !0 });
function Fn(e, n) {
  var r, c;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: o } = this.options, i = (a, h) => {
    o && !o.call(this, a) || !!t[a] === h || (h ? t[a] = !0 : delete t[a], s[a] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !nn.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    i(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    i(a, n != null ? n : !t[a]);
  })), Object.keys(s).length) {
    const a = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, s, t);
    a && Object.keys(a).forEach((h) => {
      a[h] ? t[h] = !0 : delete t[h];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function Un(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function nn() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((o, i) => o + (n.call(this, i.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function qn() {
  return Object.keys(this.state.checkedRows);
}
const sn = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Fn,
    isRowChecked: Un,
    isAllRowChecked: nn,
    getChecks: qn
  },
  onRenderCell(e, { row: n, col: t }) {
    var c, a;
    const { id: s } = n, { canRowCheckable: o } = this.options;
    if (o && !o.call(this, s))
      return e;
    const { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const h = this.isRowChecked(s), l = (a = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, h, s)) != null ? a : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r, c;
    const { id: s } = n, { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const a = this.isAllRowChecked(), h = (c = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s)) != null ? c : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
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
Ct(sn);
function ne(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = ne.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? ne.call(this, n.parent).level + 1 : 0, n;
}
function Kn(e, n) {
  var o;
  let t = (o = this.state.collapsedRows) != null ? o : {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !on.call(this)), n) {
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
function cn(e, n, t, s, o) {
  var c;
  const i = e.getNestedRowInfo(n);
  if (!i || i.state === "")
    return;
  ((c = i.children) == null ? void 0 : c.every((a) => {
    const h = !!(s[a] !== void 0 ? s[a] : o[a]);
    return t === h;
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
      const { nestedMap: t } = this.data, s = t.get(e.id), o = t.get(n.id);
      return (s == null ? void 0 : s.parent) === (o == null ? void 0 : o.parent);
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
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Kn,
    isAllCollapsed: on,
    getNestedRowInfo: ne
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
      let h = n.get(t);
      h || (h = {
        state: "",
        level: 0
      }, n.set(t, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), rn(this.data.nestedMap), e.sort((n, t) => {
      var r, c;
      const s = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(t.id), i = ((r = s.order) != null ? r : 0) - ((c = o.order) != null ? c : 0);
      return i === 0 ? n.index - t.index : i;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var c, a, h;
    const { id: s, data: o } = t, { nestedToggle: i } = n.setting, r = this.getNestedRowInfo(s);
    if (i && (r.children || r.parent) && e.unshift((a = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, r, s, n, o)) != null ? a : /* @__PURE__ */ b("a", {
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
Ct(an);
const U = 24 * 60 * 60 * 1e3, T = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ht = (e, n = new Date()) => (e = T(e), n = T(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), se = (e, n = new Date()) => T(e).getFullYear() === T(n).getFullYear(), hn = (e, n = new Date()) => (e = T(e), n = T(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Gn = (e, n = new Date()) => {
  e = T(e), n = T(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, Vn = (e, n) => ht(T(n), e), Yn = (e, n) => ht(T(n).getTime() - U, e), Xn = (e, n) => ht(T(n).getTime() + U, e), Jn = (e, n) => ht(T(n).getTime() - 2 * U, e), Tt = (e, n = "yyyy-MM-dd hh:mm") => {
  e = T(e);
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
}, Zn = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Tt(e, se(e) ? s.month : s.full);
  if (ht(e, n))
    return o;
  const i = Tt(n, se(e, n) ? hn(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, Qn = (e) => {
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
}, oe = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, oe(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, oe(e, "day", t, s);
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
      onRenderCell(e, { col: n, row: t }) {
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = _t(s, t.data);
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
            const h = i[a.action];
            return h && (a = { className: r, ...h, ...a }), _t(o, a);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Tt(i, s) : o === "html" ? e[0] = { html: _t(s, i) } : e[0] = _t(s, i), e;
      }
    }
  }
};
Ct(dn);
const ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: en,
  checkable: sn,
  nested: an,
  rich: dn
}, Symbol.toStringTag, { value: "Module" }));
var Rt;
class Et {
  constructor(n, t) {
    A(this, "element");
    A(this, "options");
    v(this, Rt, Le());
    this.element = n, this.options = { ...t }, this.render();
  }
  get $() {
    return d(this, Rt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Rn(/* @__PURE__ */ b(te, {
      ref: d(this, Rt),
      ...this.options
    }), this.element);
  }
}
Rt = new WeakMap(), A(Et, "NAME", "zui.dtable"), A(Et, "definePlugin", Ct), A(Et, "removePlugin", Ke), A(Et, "plugins", ts);
var F, W;
class es {
  constructor(n) {
    v(this, F, void 0);
    v(this, W, void 0);
    C(this, F, n), C(this, W, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, F).parentElement.parentElement, d(this, F).parentElement), this.addActive(d(this, W).parentElement, d(this, W)), d(this, W).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, W, d(this, F)), this.addActive(d(this, W).parentElement, d(this, W)), C(this, F, document.querySelector(`[href='#${d(this, W).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, W).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, W).getAttribute("id")}']`)), this.addActive(d(this, F).parentElement.parentElement, d(this, F).parentElement);
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
F = new WeakMap(), W = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new es(e.target).showTarget());
});
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: U,
  createDate: T,
  isSameDay: ht,
  isSameYear: se,
  isSameMonth: hn,
  isSameWeek: Gn,
  isToday: Vn,
  isYesterday: Yn,
  isTomorrow: Xn,
  isDBY: Jn,
  formatDate: Tt,
  formatDateSpan: Zn,
  getTimeBeforeDesc: Qn,
  calculateTimestamp: oe,
  formatString: _t,
  formatBytes: Cn,
  convertBytes: xn
}, Symbol.toStringTag, { value: "Module" }));
export {
  os as Avatar,
  Et as DTable,
  es as NavTabs,
  Se as Scrollbar,
  ss as browser,
  ts as dtablePlugins,
  is as helpers,
  $n as store
};
