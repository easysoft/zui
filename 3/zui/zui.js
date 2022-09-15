var Ue = Object.defineProperty;
var Ke = (e, n, t) => n in e ? Ue(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var R = (e, n, t) => (Ke(e, typeof n != "symbol" ? n + "" : n, t), t), Dt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var d = (e, n, t) => (Dt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), E = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, S = (e, n, t, s) => (Dt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var yt = (e, n, t) => (Dt(e, n, "access private method"), t);
var $t, C, ye, ft, de, kt = {}, ve = [], Ye = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function V(e, n) {
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
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? $t.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      r[i] === void 0 && (r[i] = e.defaultProps[i]);
  return wt(e, r, s, o, null);
}
function wt(e, n, t, s, o) {
  var i = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++ye : o };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Re() {
  return { current: null };
}
function At(e) {
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
function fe(e) {
  (!e.__d && (e.__d = !0) && ft.push(e) && !St.__r++ || de !== C.debounceRendering) && ((de = C.debounceRendering) || setTimeout)(St);
}
function St() {
  for (var e; St.__r = ft.length; )
    e = ft.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), ft = [], e.some(function(n) {
      var t, s, o, i, r, a;
      n.__d && (r = (i = (t = n).__v).__e, (a = t.__P) && (s = [], (o = V({}, i)).__v = i.__v + 1, qt(a, i, o, t.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, s, r == null ? lt(i) : r, i.__h), Ee(s, i), i.__e != r && ke(i)));
    });
}
function Se(e, n, t, s, o, i, r, a, c, p) {
  var l, _, f, u, g, k, b, y = s && s.__k || ve, v = y.length;
  for (t.__k = [], l = 0; l < n.length; l++)
    if ((u = t.__k[l] = (u = n[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? wt(null, u, null, null, u) : Array.isArray(u) ? wt(At, { children: u }, null, null, null) : u.__b > 0 ? wt(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (f = y[l]) === null || f && u.key == f.key && u.type === f.type)
        y[l] = void 0;
      else
        for (_ = 0; _ < v; _++) {
          if ((f = y[_]) && u.key == f.key && u.type === f.type) {
            y[_] = void 0;
            break;
          }
          f = null;
        }
      qt(e, u, f = f || kt, o, i, r, a, c, p), g = u.__e, (_ = u.ref) && f.ref != _ && (b || (b = []), f.ref && b.push(f.ref, null, u), b.push(_, u.__c || g, u)), g != null ? (k == null && (k = g), typeof u.type == "function" && u.__k === f.__k ? u.__d = c = xe(u, c, e) : c = Ce(e, u, f, y, g, c), typeof t.type == "function" && (t.__d = c)) : c && f.__e == c && c.parentNode != e && (c = lt(f));
    }
  for (t.__e = k, l = v; l--; )
    y[l] != null && (typeof t.type == "function" && y[l].__e != null && y[l].__e == t.__d && (t.__d = lt(s, l + 1)), $e(y[l], y[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      Me(b[l], b[++l], b[++l]);
}
function xe(e, n, t) {
  for (var s, o = e.__k, i = 0; o && i < o.length; i++)
    (s = o[i]) && (s.__ = e, n = typeof s.type == "function" ? xe(s, n, t) : Ce(t, s, s, o, s.__e, n));
  return n;
}
function Ce(e, n, t, s, o, i) {
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
function Ve(e, n, t, s, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || xt(e, i, null, t[i], s);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || xt(e, i, n[i], t[i], s);
}
function ue(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Ye.test(n) ? t : t + "px";
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
            t && n in t || ue(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || ue(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? s || e.addEventListener(n, i ? ge : pe, i) : e.removeEventListener(n, i ? ge : pe, i);
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
function pe(e) {
  this.l[e.type + !1](C.event ? C.event(e) : e);
}
function ge(e) {
  this.l[e.type + !0](C.event ? C.event(e) : e);
}
function qt(e, n, t, s, o, i, r, a, c) {
  var p, l, _, f, u, g, k, b, y, v, M, T, I, $ = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (p = C.__b) && p(n);
  try {
    t:
      if (typeof $ == "function") {
        if (b = n.props, y = (p = $.contextType) && s[p.__c], v = p ? y ? y.props.value : p.__ : s, t.__c ? k = (l = n.__c = t.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? n.__c = l = new $(b, v) : (n.__c = l = new et(b, v), l.constructor = $, l.render = Je), y && y.sub(l), l.props = b, l.state || (l.state = {}), l.context = v, l.__n = s, _ = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = V({}, l.__s)), V(l.__s, $.getDerivedStateFromProps(b, l.__s))), f = l.props, u = l.state, _)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && b !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, v) === !1 || n.__v === t.__v) {
            l.props = b, l.state = l.__s, n.__v !== t.__v && (l.__d = !1), l.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(W) {
              W && (W.__ = n);
            }), l.__h.length && r.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(f, u, g);
          });
        }
        if (l.context = v, l.props = b, l.__v = n, l.__P = e, M = C.__r, T = 0, "prototype" in $ && $.prototype.render)
          l.state = l.__s, l.__d = !1, M && M(n), p = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, M && M(n), p = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++T < 25);
        l.state = l.__s, l.getChildContext != null && (s = V(V({}, s), l.getChildContext())), _ || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(f, u)), I = p != null && p.type === At && p.key == null ? p.props.children : p, Se(e, Array.isArray(I) ? I : [I], n, t, s, o, i, r, a, c), l.base = n.__e, n.__h = null, l.__h.length && r.push(l), k && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Xe(t.__e, n, t, s, o, i, r, c);
    (p = C.diffed) && p(n);
  } catch (W) {
    n.__v = null, (c || i != null) && (n.__e = a, n.__h = !!c, i[i.indexOf(a)] = null), C.__e(W, n, t);
  }
}
function Ee(e, n) {
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
function Xe(e, n, t, s, o, i, r, a) {
  var c, p, l, _ = t.props, f = n.props, u = n.type, g = 0;
  if (u === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((c = i[g]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(f);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, f.is && f), i = null, a = !1;
  }
  if (u === null)
    _ === f || a && e.data === f || (e.data = f);
  else {
    if (i = i && $t.call(e.childNodes), p = (_ = t.props || kt).dangerouslySetInnerHTML, l = f.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (_ = {}, g = 0; g < e.attributes.length; g++)
          _[e.attributes[g].name] = e.attributes[g].value;
      (l || p) && (l && (p && l.__html == p.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (Ve(e, f, _, o, a), l)
      n.__k = [];
    else if (g = n.props.children, Se(e, Array.isArray(g) ? g : [g], n, t, s, o && u !== "foreignObject", i, r, i ? i[0] : t.__k && lt(t, 0), a), i != null)
      for (g = i.length; g--; )
        i[g] != null && we(i[g]);
    a || ("value" in f && (g = f.value) !== void 0 && (g !== e.value || u === "progress" && !g || u === "option" && g !== _.value) && xt(e, "value", g, _.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== e.checked && xt(e, "checked", g, _.checked, !1));
  }
  return e;
}
function Me(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    C.__e(s, t);
  }
}
function $e(e, n, t) {
  var s, o;
  if (C.unmount && C.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Me(s, null, n)), (s = e.__c) != null) {
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
      s[o] && $e(s[o], n, typeof e.type != "function");
  t || e.__e == null || we(e.__e), e.__e = e.__d = void 0;
}
function Je(e, n, t) {
  return this.constructor(e, t);
}
function Ze(e, n, t) {
  var s, o, i;
  C.__ && C.__(e, n), o = (s = typeof t == "function") ? null : t && t.__k || n.__k, i = [], qt(n, e = (!s && t || n).__k = m(At, null, [e]), o || kt, kt, n.ownerSVGElement !== void 0, !s && t ? [t] : o ? null : n.firstChild ? $t.call(n.childNodes) : null, i, !s && t ? t : o ? o.__e : n.firstChild, s), Ee(i, e);
}
$t = ve.slice, C = { __e: function(e, n, t, s) {
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
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = V({}, this.state), typeof e == "function" && (e = e(V({}, t), this.props)), e && V(t, e), e != null && this.__v && (n && this.__h.push(n), fe(this));
}, et.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fe(this));
}, et.prototype.render = At, ft = [], St.__r = 0;
const L = (...e) => e.map((n) => Array.isArray(n) ? L(...n) : typeof n == "function" ? L(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const s = n[t];
  return typeof s == "function" ? !!s() : !!s;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
class On extends et {
  render() {
    const { size: n, rounded: t, className: s, style: o, src: i, text: r, children: a, ...c } = this.props, p = [s], l = { ...o };
    let _ = null;
    return i ? _ = /* @__PURE__ */ m("img", {
      src: i,
      alt: r
    }) : _ = r, typeof n == "number" ? (l.width = n, l.height = n) : typeof n == "string" && p.push(`avatar-${n}`), typeof t == "string" && p.push(`rounded-${t}`), /* @__PURE__ */ m("div", {
      className: L(p),
      style: l,
      ...c
    }, _, a);
  }
}
const Qe = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((s) => {
    const { name: o, value: i } = s;
    n[o] = i;
  }), n;
};
class tn extends HTMLElement {
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
    const t = Qe(this);
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
customElements.get("zui-button") || customElements.define("zui-button", tn);
var J, Z;
class _e extends et {
  constructor(t) {
    var s;
    super(t);
    E(this, J, 0);
    E(this, Z, null);
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
      s && (d(this, J) && cancelAnimationFrame(d(this, J)), S(this, J, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + o * this.props.scrollSize / this.props.clientSize), S(this, J, 0);
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
    t && (S(this, Z, typeof t == "string" ? document : t.current), d(this, Z).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Z) && d(this, Z).removeEventListener("wheel", this._handleWheel);
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
      bottom: p,
      right: l
    } = this.props, { maxScrollPos: _, scrollPos: f } = this, { dragStart: u } = this.state, g = {
      left: a,
      top: c,
      bottom: p,
      right: l,
      ...r
    }, k = {};
    return s === "horz" ? (g.height = o, g.width = t, k.width = this.barSize, k.left = Math.round(Math.min(_, f) * (t - k.width) / _)) : (g.width = o, g.height = t, k.height = this.barSize, k.top = Math.round(Math.min(_, f) * (t - k.height) / _)), /* @__PURE__ */ m("div", {
      className: L("scrollbar", i, {
        "is-vert": s === "vert",
        "is-horz": s === "horz",
        "is-dragging": u
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
function en(e) {
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
function nn(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function sn(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= i && s.top + s.height <= o;
  const r = s.top <= o && s.top + s.height >= 0, a = s.left <= i && s.left + s.width >= 0;
  return r && a;
}
const In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: en,
  domReady: nn,
  isElementVisible: sn,
  classes: L
}, Symbol.toStringTag, { value: "Module" }));
function Ae() {
  document.querySelectorAll(".dropdown-menu").forEach((n) => {
    var t;
    (t = n.parentElement) == null || t.classList.remove("open");
  });
}
function on(e) {
  const n = e.parentElement, t = e.nextElementSibling;
  !n || !t || n.classList.contains("dropdown-hover") || (n.className.includes("open") ? n.classList.remove("open") : (Ae(), n.classList.add("open")));
}
document.addEventListener("click", function(e) {
  const t = e.target.closest("[data-toggle=dropdown]");
  t ? on(t) : Ae();
});
function Gt({ col: e, className: n, height: t, rowID: s, rowData: o, onRenderCell: i, style: r, children: a, ...c }) {
  const { cellStyle: p, align: l, className: _, border: f } = e.setting, u = {
    left: e.left,
    width: e.realWidth,
    height: t,
    justifyContent: l ? l === "left" ? "start" : l === "right" ? "end" : l : void 0,
    ...r,
    ...p
  };
  let g = [
    a != null ? a : o == null ? void 0 : o[e.name]
  ];
  i && (g = i(g, { rowID: s, col: e, rowData: o }, m));
  const k = ["dtable-cell", n, _, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = [];
  g == null || g.forEach((v) => {
    typeof v == "object" && v && ("html" in v || "className" in v || "style" in v) ? v.html ? b.push(/* @__PURE__ */ m("div", {
      className: L("dtable-cell-html", v.className),
      style: v.style,
      dangerouslySetInnerHTML: { __html: v.html }
    })) : (v.style && Object.assign(u, v.style), v.className && k.push(v.className)) : b.push(v);
  });
  const y = L(k);
  return /* @__PURE__ */ m("div", {
    className: y,
    style: u,
    "data-col": e.name,
    ...c
  }, b);
}
function rn({ col: e, children: n, style: t, ...s }) {
  const { sortType: o } = e.setting;
  return /* @__PURE__ */ m(Gt, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": o || null,
    "data-type": e.type,
    ...s
  }, e.setting.title, o && /* @__PURE__ */ m("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), n);
}
function Pt({ rowID: e, className: n, top: t = 0, left: s = 0, width: o, height: i, cols: r, data: a, CellComponent: c = Gt, onRenderCell: p }) {
  return /* @__PURE__ */ m("div", {
    className: L("dtable-cells", n),
    style: { top: t, left: s, width: o, height: i }
  }, r.map((l) => l.visible ? /* @__PURE__ */ m(c, {
    key: l.name,
    col: l,
    rowData: a,
    rowID: e,
    onRenderCell: p
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
  scrollWidthTotal: p,
  flexRightWidth: l,
  scrollLeft: _,
  CellComponent: f = Gt,
  onRenderCell: u,
  data: g,
  style: k,
  ...b
}) {
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(Pt, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: e,
    CellComponent: f,
    onRenderCell: u,
    data: g
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ m(Pt, {
    className: "dtable-flexable",
    cols: r,
    left: a - _,
    width: p,
    rowID: e,
    CellComponent: f,
    onRenderCell: u,
    data: g
  }));
  let M = null;
  i != null && i.length && (M = /* @__PURE__ */ m(Pt, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: e,
    CellComponent: f,
    onRenderCell: u,
    data: g
  }));
  const T = { top: t, height: s, lineHeight: `${s - 2}px`, ...k };
  return /* @__PURE__ */ m("div", {
    className: L("dtable-row", n),
    style: T,
    "data-id": e,
    ...b
  }, y, v, M);
}
function ln({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: rn
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
function an({
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
    className: L("dtable-rows", e),
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
      const l = r({ props: p, row: c }, m);
      l && Object.assign(p, l);
    }
    return /* @__PURE__ */ m(He, {
      ...p
    });
  }));
}
const Ct = /* @__PURE__ */ new Map();
function Le(e, n = !1) {
  if (!n && Ct.has(e.name))
    throw new Error(`DTable: Plugin with name ${e.name} already exists`);
  Ct.set(e.name, e);
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
function me(e) {
  return Ct.get(e);
}
function Ne(e) {
  return Ct.delete(e);
}
function cn(e) {
  const n = /* @__PURE__ */ new Map();
  return [e == null ? void 0 : e.plugins].flat().reduce((t, s) => {
    var i;
    if (!s)
      return t;
    let o;
    return typeof s == "string" ? (o = me(s), o || console.warn(`DTable: Cannot found plugin "${s}"`)) : typeof s == "function" ? o = s.plugin : typeof s == "object" ? o = s : console.warn("DTable: Invalid plugin", s), o && !n.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (n.has(r))
        return;
      const a = me(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      t.push(a), n.set(a.name, a);
    }), t.push(o), n.set(o.name, o)), t;
  }, []);
}
function hn(e, n) {
  return e.reduce((t, s) => {
    const { options: o, defaultOptions: i } = s;
    return i && (t = { ...i, ...t }), o && Object.assign(t, typeof o == "function" ? o(t) : o), t;
  }, n);
}
function jt() {
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
var Q, K, x, tt, H, ot, ut;
class Ot extends et {
  constructor(t) {
    super(t);
    R(this, "ref", Re());
    E(this, Q, 0);
    E(this, K, !1);
    E(this, x, void 0);
    E(this, tt, void 0);
    E(this, H, []);
    E(this, ot, void 0);
    E(this, ut, !1);
    R(this, "_handleResize", () => {
      d(this, Q) && cancelAnimationFrame(d(this, Q)), S(this, Q, requestAnimationFrame(() => {
        this.forceUpdate(), S(this, Q, 0);
      }));
    });
    R(this, "_handleRenderRow", (t, s) => {
      if (d(this, x).onRenderRow) {
        const o = d(this, x).onRenderRow.call(this, t, s);
        o && Object.assign(t.props, o);
      }
      return d(this, H).forEach((o) => {
        if (o.onRenderRow) {
          const i = o.onRenderRow.call(this, t, s);
          i && Object.assign(t.props, i);
        }
      }), t.props;
    });
    R(this, "_handleRenderHeaderRow", (t, s) => (d(this, x).onRenderHeaderRow && (t.props = d(this, x).onRenderHeaderRow.call(this, t, s)), d(this, H).forEach((o) => {
      o.onRenderHeaderRow && (t.props = o.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    R(this, "_handleRenderCell", (t, s, o) => {
      const { rowID: i, col: r } = s, a = i === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[a] && (t = r.setting[a].call(this, t, s, o)), d(this, x)[a] && (t = d(this, x)[a].call(this, t, s, o)), d(this, H).forEach((c) => {
        c[a] && (t = c[a].call(this, t, s, o));
      }), t;
    });
    R(this, "_handleScroll", (t, s) => {
      s === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    R(this, "_handleClick", (t) => {
      var c, p, l, _, f, u, g, k;
      const s = t.target;
      if (!s)
        return;
      const o = s.closest(".dtable-row");
      if (!o)
        return;
      const i = s.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (p = o.getAttribute("data-id")) != null ? p : "";
      if (a === "HEADER")
        i && ((l = d(this, x).onHeaderCellClick) == null || l.call(this, t, { colName: r, element: i }), d(this, H).forEach((b) => {
          var y;
          (y = b.onHeaderCellClick) == null || y.call(this, t, { colName: r, element: i });
        }));
      else {
        const b = (_ = d(this, ot)) == null ? void 0 : _.visibleRows.find((y) => y.id === a);
        if (i) {
          if (((f = d(this, x).onCellClick) == null ? void 0 : f.call(this, t, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const y of d(this, H))
            if (((u = y.onCellClick) == null ? void 0 : u.call(this, t, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((g = d(this, x).onRowClick) == null ? void 0 : g.call(this, t, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const y of d(this, H))
          if (((k = y.onRowClick) == null ? void 0 : k.call(this, t, { rowID: a, rowInfo: b, element: o })) === !0)
            return;
      }
    });
    R(this, "_handleMouseOver", (t) => {
      var r, a;
      const { colHover: s } = d(this, x);
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
    const s = { ...jt(), ...t };
    S(this, x, Object.freeze(s)), S(this, tt, Object.freeze(cn(s))), d(this, tt).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return d(this, x);
  }
  get plugins() {
    return d(this, H);
  }
  get layout() {
    return d(this, ot);
  }
  componentDidMount() {
    d(this, K) ? this.forceUpdate() : this._afterRender();
    const { current: t } = this.ref;
    t && (t.addEventListener("click", this._handleClick), t.addEventListener("mouseover", this._handleMouseOver), t.addEventListener("mouseleave", this._handleMouseLeave)), d(this, x).responsive && window.addEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, K) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: t } = this.ref;
    t && (t.removeEventListener("click", this._handleClick), d(this, x).colHover && (t.removeEventListener("mouseover", this._handleMouseOver), t.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), d(this, H).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var s;
      (s = d(this, x).onScroll) == null || s.call(this, t, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var s;
      (s = d(this, x).onScroll) == null || s.call(this, t, "vert");
    });
  }
  getLayout() {
    var Qt, te, ee, ne;
    const t = jt(), s = hn(d(this, tt), { ...t, ...this.props }), o = d(this, tt).filter((h) => !h.when || h.when(s));
    S(this, H, Object.freeze(o)), o.forEach((h) => {
      var A;
      const w = (A = h.beforeLayout) == null ? void 0 : A.call(this, s);
      w && Object.assign(s, w);
    }), S(this, x, Object.freeze(s));
    const {
      header: i,
      footer: r,
      rowHeight: a = t.rowHeight,
      defaultColWidth: c = t.minColWidth,
      minColWidth: p = t.minColWidth,
      maxColWidth: l = t.maxColWidth
    } = s, _ = i ? s.headerHeight || a : 0, f = r ? s.footerHeight || a : 0, u = (h, w, A) => (h && (w && (h = Math.max(w, h)), A && (h = Math.min(A, h))), h), g = [], k = [], b = [];
    let y = 0, v = 0;
    (Qt = s.cols) == null || Qt.forEach((h) => {
      var se, oe, ie;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: w = p, maxWidth: A = l } = h, D = u((se = h.width) != null ? se : 0, w, A), G = (oe = h.flex) != null ? oe : 1, mt = G * u(c, w, A), U = {
        name: h.name,
        type: (ie = h.type) != null ? ie : "",
        setting: h,
        left: 0,
        flex: G,
        realWidth: D,
        flexWidth: mt,
        visible: !0
      };
      h.fixed === "left" ? (U.left = y, y += D, g.push(U)) : h.fixed === "right" ? (U.left = v, v += D, k.push(U)) : b.push(U), o.forEach((re) => {
        var le, ae, ce;
        const bt = (ae = re.colTypes) == null ? void 0 : ae[(le = h.type) != null ? le : ""];
        if (bt) {
          const he = typeof bt == "function" ? bt(h) : bt;
          he && Object.assign(h, he);
        }
        (ce = re.onAddCol) == null || ce.call(this, U);
      });
    });
    let M = s.width, T = 0;
    if (typeof M == "function" && (M = M()), M === "auto")
      T = y + v, b.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), T += h.realWidth;
      });
    else if (M === "100%") {
      const h = (te = this.ref.current) == null ? void 0 : te.parentElement;
      if (h)
        T = h.clientWidth;
      else {
        T = 0, S(this, K, !0);
        return;
      }
    } else
      T = M != null ? M : 0;
    const { data: I, rowKey: $ = "id" } = s, W = [], Ht = (h, w, A) => {
      var G, mt;
      const D = { data: A != null ? A : { [$]: h }, top: W.length * a, id: h, index: W.length };
      if (A || (D.lazy = !0), W.push(D), ((G = s.onAddRow) == null ? void 0 : G.call(this, D, w)) !== !1) {
        for (const U of o)
          if (((mt = U.onAddRow) == null ? void 0 : mt.call(this, D, w)) === !1)
            return;
      }
    };
    if (typeof I == "number")
      for (let h = 0; h < I; h++)
        Ht(h, h);
    else
      Array.isArray(I) && I.forEach((h, w) => {
        typeof h == "object" ? Ht(h[$], w, h) : Ht(h, w);
      });
    let Lt = !1, B = W;
    if (s.onAddRows) {
      const h = s.onAddRows.call(this, B);
      h && (B = h, Lt = !0);
    }
    for (const h of o) {
      const w = (ee = h.onAddRows) == null ? void 0 : ee.call(this, B);
      w && (B = w, Lt = !0);
    }
    Lt && B.forEach((h, w) => {
      h.index = w, h.top = w * a;
    });
    let F = s.height, X = 0;
    const Nt = B.length * a, zt = _ + f + Nt;
    if (typeof F == "function" && (F = F(zt)), F === "auto")
      X = zt;
    else if (typeof F == "object")
      X = Math.min(F.max, Math.max(F.min, zt));
    else if (F === "100%") {
      const h = (ne = this.ref.current) == null ? void 0 : ne.parentElement;
      if (h)
        X = h.clientHeight;
      else {
        X = 0, S(this, K, !0);
        return;
      }
    } else
      X = F;
    let { scrollTop: nt = 0, scrollLeft: ht = 0 } = this.state;
    const Tt = X - _ - f;
    nt = Math.min(Math.max(0, Nt - Tt), nt);
    const Yt = nt + Tt, Vt = [], _t = T - y - v;
    let q = 0;
    const Wt = [];
    let Xt = 0;
    if (b.forEach((h) => {
      h.realWidth ? q += h.realWidth : (Wt.push(h), Xt += h.flex);
    }), Wt.length) {
      const h = Math.max(0, _t - q);
      Wt.forEach((w) => {
        var G;
        const { minWidth: A = p, maxWidth: D = l } = w.setting;
        w.realWidth = Math.min(D, Math.max(A, Math.ceil(h * ((G = w.flex) != null ? G : 1) / Xt))), q += w.realWidth;
      });
    }
    q = 0, b.forEach((h) => {
      h.left += q, q += h.realWidth, (h.left + h.realWidth < ht || h.left > ht + _t) && (h.visible = !1);
    }), ht = Math.min(Math.max(0, q - _t), ht);
    const Jt = Math.floor(nt / a), Zt = Math.min(B.length, Math.ceil(Yt / a)), Ge = [];
    for (let h = Jt; h < Zt; h++) {
      const w = B[h];
      w.top -= nt, Vt.push(w), w.lazy === !0 && Ge.push(w.id);
    }
    let st = {
      allRows: W,
      width: T,
      height: X,
      rows: B,
      visibleRows: Vt,
      rowHeight: a,
      rowsHeight: Tt,
      rowsHeightTotal: Nt,
      header: i,
      footer: r,
      headerHeight: _,
      footerHeight: f,
      colsInfo: {
        fixedLeftCols: g,
        fixedRightCols: k,
        scrollCols: b,
        flexLeftWidth: y,
        scrollWidth: _t,
        scrollWidthTotal: q,
        flexRightWidth: v
      },
      scrollBottom: Yt,
      scrollTop: nt,
      scrollLeft: ht,
      startRowIndex: Jt,
      endRowIndex: Zt
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
    }), S(this, ot, Object.freeze(st)), st;
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
      return /* @__PURE__ */ m(ln, {
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
    return /* @__PURE__ */ m(an, {
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
    const s = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: p, scrollWidth: l } = i, { scrollbarSize: _ = 12, horzScrollbarPos: f } = this.props;
    return p > l && s.push(/* @__PURE__ */ m(_e, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: p,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: f === "inside" ? 0 : -_,
      size: _,
      wheelContainer: this.ref
    })), c > a && s.push(/* @__PURE__ */ m(_e, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: _,
      top: t.headerHeight,
      wheelContainer: this.ref
    })), s.length ? s : null;
  }
  _afterRender() {
    var t;
    S(this, K, !1), (t = d(this, x).afterRender) == null || t.call(this), d(this, H).forEach((s) => {
      var o;
      return (o = s.afterRender) == null ? void 0 : o.call(this);
    });
  }
  _applyColHover(t) {
    t !== void 0 ? S(this, ut, t) : t = d(this, ut);
    const { current: s } = this.ref;
    if (!s)
      return;
    const o = "dtable-col-hover";
    s.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && s.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
  }
  render() {
    var _, f;
    const t = this.getLayout(), { className: s, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: p } = (_ = d(this, x)) != null ? _ : this.props, l = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ m("div", {
      className: L("dtable", s, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
        "scrollbar-hover": p
      }),
      style: l,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
Q = new WeakMap(), K = new WeakMap(), x = new WeakMap(), tt = new WeakMap(), H = new WeakMap(), ot = new WeakMap(), ut = new WeakMap(), R(Ot, "addPlugin", Le), R(Ot, "removePlugin", Ne);
function dn(e, n) {
  var i;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, o = (r, a) => {
    !!t[r] !== a && (a ? t[r] = !0 : delete t[r], s[r] = a);
  };
  return e === void 0 ? (n === void 0 && (n = !ze.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!n);
  })) : (Array.isArray(e) ? e : [e]).forEach((a) => {
    o(a, n != null ? n : !t[a]);
  }), Object.keys(s).length && this.setState({ checkedRows: { ...t } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, s);
  }), s;
}
function fn(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function ze() {
  var e;
  return this.getChecks().length === ((e = this.layout) == null ? void 0 : e.allRows.length);
}
function un() {
  return Object.keys(this.state.checkedRows);
}
const Te = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = dn.bind(this), this.isRowChecked = fn.bind(this), this.isAllRowChecked = ze.bind(this), this.getChecks = un.bind(this);
  },
  onRenderCell(e, { rowID: n, col: t }) {
    var i, r;
    const { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const a = this.isRowChecked(n), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, n)) != null ? r : /* @__PURE__ */ m("input", {
        type: "checkbox",
        checked: a
      });
      e.unshift(c), e.push({ className: "has-checkbox" });
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
    if (this.isRowChecked(n.id))
      return { className: L(e.className, "is-checked") };
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
at(Te);
function It(e) {
  const n = this.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let o = !1, { parent: i } = n;
  for (; i; ) {
    const r = It.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return n.state = o ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? It.call(this, n.parent).level + 1 : 0, n;
}
function pn(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  if (e === "HEADER")
    if (n === void 0 && (n = !We.call(this)), n) {
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
function We() {
  const e = this.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function De(e, n = 0, t, s = 0) {
  var o;
  t || (t = [...e.keys()]);
  for (const i of t) {
    const r = e.get(i);
    !r || (r.level === s && (r.order = n++), (o = r.children) != null && o.length && (n = De(e, n, r.children, s + 1)));
  }
  return n;
}
const Pe = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const t = this.nestedMap.get(e.id), s = this.nestedMap.get(n.id);
      return (t == null ? void 0 : t.parent) === (s == null ? void 0 : s.parent);
    }
  },
  when: (e) => !!e.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = pn.bind(this), this.isAllCollapsed = We.bind(this), this.getNestedRowInfo = It.bind(this);
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
      }, this.nestedMap.set(n, r)), r.children || (r.children = [e.id]), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), De(this.nestedMap), e.sort((n, t) => {
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
      let { nestedIndent: p = o } = t.setting;
      p && (p === !0 && (p = (c = this.options.nestedIndent) != null ? c : 12), e.unshift(/* @__PURE__ */ m("div", {
        className: "dtable-nested-indent",
        style: { width: p * i.level + "px" }
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
      className: L(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = L(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
at(Pe);
function dt(e, ...n) {
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
function gn(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / Ut[t]).toFixed(n) + t);
}
const _n = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Ut[s];
}, O = 24 * 60 * 60 * 1e3, N = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ct = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Bt = (e, n = new Date()) => N(e).getFullYear() === N(n).getFullYear(), je = (e, n = new Date()) => (e = N(e), n = N(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), mn = (e, n = new Date()) => {
  e = N(e), n = N(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), o = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((o + 4) / 7);
}, bn = (e, n) => ct(N(n), e), yn = (e, n) => ct(N(n).getTime() - O, e), vn = (e, n) => ct(N(n).getTime() + O, e), wn = (e, n) => ct(N(n).getTime() - 2 * O, e), Et = (e, n = "yyyy-MM-dd hh:mm") => {
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
}, Rn = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, o = Et(e, Bt(e) ? s.month : s.full);
  if (ct(e, n))
    return o;
  const i = Et(n, Bt(e, n) ? je(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", o).replace("{1}", i);
}, kn = (e) => {
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
}, Ft = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, Ft(e, "day", t, s);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Ft(e, "day", t, s);
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
const Oe = {
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
        const { linkTemplate: s = "", linkProps: o } = n.setting, i = dt(s, t);
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
            return c && (a = { className: r, ...c, ...a }), dt(o, a);
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
        return typeof s == "function" ? e[0] = o === "html" ? { html: s(i) } : s(i) : o === "datetime" ? e[0] = Et(i, s) : o === "html" ? e[0] = { html: dt(s, i) } : e[0] = dt(s, i), e;
      }
    }
  }
};
at(Oe);
const Ie = {
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
          var p, l;
          return a + ((l = (p = this.getColInfo(c)) == null ? void 0 : p.realWidth) != null ? l : 0);
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
at(Ie);
function Be(e, n) {
  var s, o;
  const t = (o = (s = n.target) == null ? void 0 : s.closest(".dtable-row")) == null ? void 0 : o.dataset.id;
  if (!!t)
    return e.getRowInfo(t);
}
function Sn(e) {
  var t, s;
  const n = Be(this, e);
  if (!(!e.dataTransfer || !n || ((t = this.options.onBeginSort) == null ? void 0 : t.call(this, n, e)) === !1))
    return this.setState({ draggingRow: n }), e.dataTransfer.effectAllowed = "move", e.dataTransfer.dropEffect = "move", (s = this.ref.current) == null || s.classList.add("dtable-sorting"), !0;
}
function xn(e) {
  var o, i;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  this.setState({ draggingRow: void 0, droppingRow: void 0, moveType: void 0 }), (o = this.ref.current) == null || o.classList.remove("dtable-sorting"), (i = this.options.onEndSort) == null || i.call(this, n, t, s);
}
function Cn(e) {
  var o;
  const n = Be(this, e), { draggingRow: t } = this.state;
  if (!n || !t || n.id === t.id)
    return;
  const s = t.index > n.index ? "before" : "after";
  ((o = this.options.canSortTo) == null ? void 0 : o.call(this, t, n, s)) !== !1 && this.setState({ droppingRow: n, moveType: s });
}
function En(e) {
  return e.preventDefault(), !0;
}
function Mn(e) {
  var o;
  const { draggingRow: n, droppingRow: t, moveType: s } = this.state;
  if (n && t && s && n.id !== t.id) {
    let i = [...this.layout.rows];
    const { canSort: r } = this.options;
    r && (i = i.filter((f) => r.call(this, f)));
    const a = i.findIndex((f) => f.id === n.id), c = i.findIndex((f) => f.id === t.id), p = i.splice(a, 1);
    i.splice(c, 0, p[0]);
    const l = {}, _ = [];
    i.forEach(({ id: f }, u) => {
      l[f] = u, _.push(f);
    }), this.setState({ rowOrders: l }), (o = this.options.onSort) == null || o.call(this, n, t, s, _);
  }
}
const Fe = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (e) => !!e.sortable,
  onCreate() {
    this.onSortDragStart = Sn.bind(this), this.onSortDragEnd = xn.bind(this), this.onSortDragEnter = Cn.bind(this), this.onSortDragOver = En.bind(this), this.onSortDrop = Mn.bind(this);
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
      style: { ...e.style, transform: `translateY(${a}px)` },
      draggable: ((c = this.options.canSort) == null ? void 0 : c.call(this, n)) !== !1
    };
  }
};
at(Fe);
const $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Te,
  nested: Pe,
  rich: Oe,
  headerGroup: Ie,
  sortable: Fe
}, Symbol.toStringTag, { value: "Module" }));
var pt;
class vt {
  constructor(n, t) {
    R(this, "element");
    R(this, "options");
    E(this, pt, Re());
    var s;
    this.element = n, this.options = { ...jt(), ...t }, (s = this.options.cols) != null && s.length && this.render();
  }
  get $() {
    return d(this, pt).current;
  }
  render(n) {
    this.options = Object.assign(this.options, n), Ze(/* @__PURE__ */ m(Ot, {
      ref: d(this, pt),
      ...this.options
    }), this.element);
  }
}
pt = new WeakMap(), R(vt, "NAME", "zui.dtable"), R(vt, "definePlugin", at), R(vt, "removePlugin", Ne), R(vt, "plugins", $n);
let An = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var gt, Y, P, it, rt, Rt;
const Kt = class {
  constructor(n, t = "local") {
    E(this, rt);
    E(this, gt, void 0);
    E(this, Y, void 0);
    E(this, P, void 0);
    E(this, it, void 0);
    S(this, gt, t), S(this, Y, `ZUI_STORE:${n != null ? n : An()}`), S(this, P, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, gt);
  }
  get session() {
    return this.type === "session" ? this : (d(this, it) || S(this, it, new Kt(d(this, Y), "session")), d(this, it));
  }
  get(n, t) {
    const s = d(this, P).getItem(yt(this, rt, Rt).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s != null ? s : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, P).setItem(yt(this, rt, Rt).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    d(this, P).removeItem(yt(this, rt, Rt).call(this, n));
  }
  each(n) {
    for (let t = 0; t < d(this, P).length; t++) {
      const s = d(this, P).key(t);
      if (s != null && s.startsWith(d(this, Y))) {
        const o = d(this, P).getItem(s);
        typeof o == "string" && n(s.substring(d(this, Y).length + 1), JSON.parse(o));
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
let Mt = Kt;
gt = new WeakMap(), Y = new WeakMap(), P = new WeakMap(), it = new WeakMap(), rt = new WeakSet(), Rt = function(n) {
  return `${d(this, Y)}:${n}`;
};
const Hn = new Mt("DEFAULT");
function Ln(e, n = "local") {
  return new Mt(e, n);
}
Object.assign(Hn, { create: Ln });
function Nn() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function zn() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Tn(e, n) {
  Nn(), e.classList.add("block"), be(e, n), e.onclick = (t) => Wn(t, e), window.addEventListener("resize", () => {
    be(e, n);
  });
}
function qe(e) {
  var n;
  zn(), (n = e.classList) == null || n.remove("block");
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
function Wn(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), qe(n));
}
function Dn(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const s = Dn(t);
    if (!s)
      return;
    const o = document.querySelector(s);
    if (!o)
      return;
    Tn(o, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && qe(n);
});
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: O,
  createDate: N,
  isSameDay: ct,
  isSameYear: Bt,
  isSameMonth: je,
  isSameWeek: mn,
  isToday: bn,
  isYesterday: yn,
  isTomorrow: vn,
  isDBY: wn,
  formatDate: Et,
  formatDateSpan: Rn,
  getTimeBeforeDesc: kn,
  calculateTimestamp: Ft,
  formatString: dt,
  formatBytes: gn,
  convertBytes: _n
}, Symbol.toStringTag, { value: "Module" }));
var j, z;
class Pn {
  constructor(n) {
    E(this, j, void 0);
    E(this, z, void 0);
    S(this, j, n), S(this, z, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, j).parentElement.parentElement, d(this, j).parentElement), this.addActive(d(this, z).parentElement, d(this, z)), d(this, z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    S(this, z, d(this, j)), this.addActive(d(this, z).parentElement, d(this, z)), S(this, j, document.querySelector(`[href='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, z).getAttribute("id")}']`)), this.addActive(d(this, j).parentElement.parentElement, d(this, j).parentElement);
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
j = new WeakMap(), z = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Pn(e.target).showTarget());
});
export {
  On as Avatar,
  vt as DTable,
  Pn as NavTabs,
  _e as Scrollbar,
  In as browser,
  $n as dtablePlugins,
  Bn as helpers,
  Hn as store
};
