var Zs = Object.defineProperty;
var Qs = (n, e, t) => e in n ? Zs(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => (Qs(n, typeof e != "symbol" ? e + "" : e, t), t), Hn = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var h = (n, e, t) => (Hn(n, e, "read from private field"), t ? t.call(n) : e.get(n)), b = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, R = (n, e, t, o) => (Hn(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t);
var T = (n, e, t) => (Hn(n, e, "access private method"), t);
const tr = (n) => {
  const e = {};
  if (!n)
    return e;
  const t = Object.values(n.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    e[s] = r;
  }), e;
};
class er extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
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
    const t = tr(this);
    if (t)
      for (const o in t)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${t[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(t, o) {
    t && t.classList.add(o);
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
  attributeChangedCallback(t, o) {
    t === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", er);
var Rn, H, Yo, In, be, Eo, Je = {}, Xo = [], nr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function At(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Ko(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function K(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Rn.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Fe(n, a, o, s, null);
}
function Fe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Yo : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function Go() {
  return { current: null };
}
function An(n) {
  return n.children;
}
function we(n, e) {
  this.props = n, this.context = e;
}
function le(n, e) {
  if (e == null)
    return n.__ ? le(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? le(n) : null;
}
function Jo(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Jo(n);
  }
}
function xo(n) {
  (!n.__d && (n.__d = !0) && be.push(n) && !Ze.__r++ || Eo !== H.debounceRendering) && ((Eo = H.debounceRendering) || setTimeout)(Ze);
}
function Ze() {
  for (var n; Ze.__r = be.length; )
    n = be.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), be = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = At({}, r)).__v = r.__v + 1, no(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? le(r) : a, r.__h), es(o, r), r.__e != a && Jo(r)));
    });
}
function Zo(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, m = o && o.__k || Xo, E = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Fe(null, u, null, null, u) : Array.isArray(u) ? Fe(An, { children: u }, null, null, null) : u.__b > 0 ? Fe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = m[i]) === null || d && u.key == d.key && u.type === d.type)
        m[i] = void 0;
      else
        for (g = 0; g < E; g++) {
          if ((d = m[g]) && u.key == d.key && u.type === d.type) {
            m[g] = void 0;
            break;
          }
          d = null;
        }
      no(n, u, d = d || Je, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = Qo(u, c, n) : c = ts(n, u, d, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = le(d));
    }
  for (t.__e = _, i = E; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = le(o, i + 1)), os(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ns(v[i], v[++i], v[++i]);
}
function Qo(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? Qo(o, e, t) : ts(t, o, o, s, o.__e, e));
  return e;
}
function ts(n, e, t, o, s, r) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        n.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function or(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || Qe(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || Qe(n, r, e[r], t[r], o);
}
function ko(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || nr.test(e) ? t : t + "px";
}
function Qe(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || ko(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || ko(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Co : So, r) : n.removeEventListener(e, r ? Co : So, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? n.setAttribute(e, t) : n.removeAttribute(e));
    }
}
function So(n) {
  this.l[n.type + !1](H.event ? H.event(n) : n);
}
function Co(n) {
  this.l[n.type + !0](H.event ? H.event(n) : n);
}
function no(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, m, E, w, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = H.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], E = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, E) : (e.__c = i = new we(v, E), i.constructor = y, i.render = rr), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = E, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = At({}, i.__s)), At(i.__s, y.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, E), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, E) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(C) {
              C && (C.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, E), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = E, i.props = v, i.__v = e, i.__P = n, w = H.__r, x = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = At(At({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === An && f.key == null ? f.props.children : f, Zo(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = sr(t.__e, e, t, o, s, r, a, c);
    (f = H.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), H.__e(C, e, t);
  }
}
function es(n, e) {
  H.__c && H.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      H.__e(o, t.__v);
    }
  });
}
function sr(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[p] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(d);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && n.data === d || (n.data = d);
  else {
    if (r = r && Rn.call(n.childNodes), f = (g = t.props || Je).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (or(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, Zo(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && le(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && Ko(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && Qe(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && Qe(n, "checked", p, g.checked, !1));
  }
  return n;
}
function ns(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    H.__e(o, t);
  }
}
function os(n, e, t) {
  var o, s;
  if (H.unmount && H.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || ns(o, null, e)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        H.__e(r, e);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (s = 0; s < o.length; s++)
      o[s] && os(o[s], e, typeof n.type != "function");
  t || n.__e == null || Ko(n.__e), n.__e = n.__d = void 0;
}
function rr(n, e, t) {
  return this.constructor(n, t);
}
function ir(n, e, t) {
  var o, s, r;
  H.__ && H.__(n, e), s = (o = typeof t == "function") ? null : t && t.__k || e.__k, r = [], no(e, n = (!o && t || e).__k = K(An, null, [n]), s || Je, Je, e.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : e.firstChild ? Rn.call(e.childNodes) : null, r, !o && t ? t : s ? s.__e : e.firstChild, o), es(r, n);
}
Rn = Xo.slice, H = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, Yo = 0, In = function(n) {
  return n != null && n.constructor === void 0;
}, we.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof n == "function" && (n = n(At({}, t), this.props)), n && At(t, n), n != null && this.__v && (e && this.__h.push(e), xo(this));
}, we.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), xo(this));
}, we.prototype.render = An, be = [], Ze.__r = 0;
var gt;
class ar {
  constructor(e = "") {
    b(this, gt, void 0);
    typeof e == "object" ? R(this, gt, e) : R(this, gt, document.appendChild(document.createComment(e)));
  }
  on(e, t, o) {
    h(this, gt).addEventListener(e, t, o);
  }
  once(e, t, o) {
    h(this, gt).addEventListener(e, t, { once: !0, ...o });
  }
  off(e, t, o) {
    h(this, gt).removeEventListener(e, t, o);
  }
  emit(e) {
    return h(this, gt).dispatchEvent(e), e;
  }
}
gt = new WeakMap();
const Bn = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class oo extends ar {
  on(e, t, o) {
    super.on(e, t, o);
  }
  off(e, t, o) {
    super.off(e, t, o);
  }
  once(e, t, o) {
    super.once(e, t, o);
  }
  emit(e, t) {
    return typeof e == "string" && (Bn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(oo.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Bn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
var vt, Se, Ht, me;
class Mo extends oo {
  constructor(t = "", o) {
    super(t);
    b(this, Ht);
    b(this, vt, /* @__PURE__ */ new Map());
    b(this, Se, void 0);
    R(this, Se, o == null ? void 0 : o.customEventSuffix);
  }
  on(t, o, s) {
    t = T(this, Ht, me).call(this, t), super.on(t, o, s), h(this, vt).set(o, [t, s]);
  }
  off(t, o, s) {
    t = T(this, Ht, me).call(this, t), super.off(t, o, s), h(this, vt).delete(o);
  }
  once(t, o, s) {
    t = T(this, Ht, me).call(this, t);
    const r = (a) => {
      o(a), h(this, vt).delete(r);
    };
    super.once(t, r, s), h(this, vt).set(r, [t, s]);
  }
  emit(t, o) {
    return typeof t == "string" && (t = T(this, Ht, me).call(this, t)), super.emit(t, o);
  }
  offAll() {
    Array.from(h(this, vt).entries()).forEach(([t, [o, s]]) => {
      super.off(o, t, s);
    }), h(this, vt).clear();
  }
}
vt = new WeakMap(), Se = new WeakMap(), Ht = new WeakSet(), me = function(t) {
  const o = h(this, Se);
  return Bn.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function lr(n) {
  return Object.fromEntries(Object.entries(n).map(([e, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [e, t];
  }));
}
var St, te, rt;
class $n {
  constructor(e, t) {
    b(this, St, void 0);
    b(this, te, void 0);
    b(this, rt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, R(this, rt, new Mo(e, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, St, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? lr(e.dataset) : null, ...t }), this.constructor.all.set(e, this), R(this, te, e), this.init(), h(this, rt).emit("inited", this);
  }
  get options() {
    return h(this, St);
  }
  get element() {
    return h(this, te);
  }
  get events() {
    return h(this, rt);
  }
  init() {
  }
  setOptions(e) {
    return e && Object.assign(h(this, St), e), h(this, St);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(h(this, te)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(e, t, o) {
    h(this, rt).on(e, t, o);
  }
  once(e, t, o) {
    h(this, rt).once(e, t, o);
  }
  off(e, t, o) {
    h(this, rt).off(e, t, o);
  }
  emit(e, t) {
    let o = Mo.createEvent(e, t);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = h(this, St)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = h(this, rt).emit(o), o;
  }
  static get NAME() {
    return this.name.toLowerCase();
  }
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get DEFAULT() {
    return {};
  }
  static get all() {
    const e = this.NAME;
    if (this.allComponents.has(e))
      return this.allComponents.get(e);
    const t = /* @__PURE__ */ new Map();
    return this.allComponents.set(e, t), t;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, t) {
    return this.get(e) || new this(e, t);
  }
}
St = new WeakMap(), te = new WeakMap(), rt = new WeakMap(), D($n, "allComponents", /* @__PURE__ */ new Map());
var Ce;
class ss extends $n {
  constructor() {
    super(...arguments);
    b(this, Ce, Go());
  }
  get $() {
    return h(this, Ce).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    ir(/* @__PURE__ */ K(o, {
      ref: h(this, Ce),
      ...this.setOptions(t)
    }), this.element);
  }
}
Ce = new WeakMap();
const j = (...n) => n.map((e) => Array.isArray(e) ? j(...e) : typeof e == "function" ? j(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const o = e[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function cr(n) {
  const {
    rootClass: e,
    rootProps: t,
    className: o,
    url: s,
    target: r,
    disabled: a,
    active: l,
    icon: c,
    title: f,
    trailingIcon: i,
    children: g,
    ...d
  } = n;
  return /* @__PURE__ */ K("li", {
    className: j(e),
    ...t
  }, /* @__PURE__ */ K("a", {
    className: j("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...d
  }, In(c) ? c : typeof c == "string" ? /* @__PURE__ */ K("i", {
    class: `icon ${c}`
  }) : null, f, In(i) ? i : typeof i == "string" ? /* @__PURE__ */ K("i", {
    class: `icon ${i}`
  }) : null), g);
}
function ur({ className: n }) {
  return /* @__PURE__ */ K("div", {
    class: j("menu-divider", n)
  });
}
function fr({ className: n, title: e, children: t, ...o }) {
  return /* @__PURE__ */ K("li", {
    class: j("menu-heading", n),
    ...o
  }, e, t);
}
var Me, ln, rs, Re, cn, un;
const po = class extends we {
  constructor() {
    super(...arguments);
    b(this, ln);
    D(this, "state", { shownSubs: {} });
    b(this, Me, Go());
    b(this, Re, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, K);
      const { afterRender: s, onClickItem: r, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ K(po, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: h(this, Re),
        afterRender: s,
        onClickItem: r,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    b(this, cn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    b(this, un, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !1), o.preventDefault());
    });
  }
  get $() {
    return h(this, Me).current;
  }
  componentDidMount() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, this);
  }
  componentDidUpdate() {
    var t, o;
    (o = (t = this.props).afterRender) == null || o.call(t, this);
  }
  componentWillUnmount() {
    var t, o;
    (o = (t = this.props).beforeDestroy) == null || o.call(t, this);
  }
  toggleSubMenu(t, o) {
    const { shownSubs: s } = this.state;
    o === void 0 && (o = !s[t]), o ? s[t] = !0 : delete s[t], this.setState({ shownSubs: { ...s } });
  }
  clearAllSubMenu() {
    this.setState({ shownSubs: {} });
  }
  isSubMenuShow(t) {
    return this.state.shownSubs[t];
  }
  render() {
    const {
      className: t,
      items: o,
      hasIcons: s,
      children: r,
      onClickItem: a,
      subMenuTrigger: l,
      onRenderItem: c,
      onRenderSubMenu: f,
      afterRender: i,
      beforeDestroy: g,
      ...d
    } = this.props, u = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ K("menu", {
      class: j(
        "menu",
        t,
        (s != null ? s : u == null ? void 0 : u.some((p) => "icon" in p)) ? "has-icons" : ""
      ),
      ...d,
      ref: h(this, Me)
    }, u == null ? void 0 : u.map((p, _) => {
      const v = { type: "item", key: _, ...p };
      if (c) {
        const O = c(this, v, _, K);
        O && Object.assign(v, O);
      }
      const { key: m = _, type: E = "item", ...w } = v;
      if (E === "heading")
        return /* @__PURE__ */ K(fr, {
          ...w,
          key: m
        });
      if (E === "divider")
        return /* @__PURE__ */ K(ur, {
          ...w,
          key: m
        });
      const { onClick: x, items: S, ...y } = w, C = {
        ...y,
        key: m,
        onClick: T(this, ln, rs).bind(this, v, _, x)
      }, k = S && this.state.shownSubs[m];
      return S && (C.rootClass = j(C.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (C.rootProps = {
        ...C.rootProps,
        onMouseEnter: h(this, cn).bind(this, m),
        onMouseLeave: h(this, un).bind(this, m)
      })), /* @__PURE__ */ K(cr, {
        ...C
      }, k && h(this, Re).call(this, v));
    }), r);
  }
};
let zn = po;
Me = new WeakMap(), ln = new WeakSet(), rs = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a(t, o, r), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, Re = new WeakMap(), cn = new WeakMap(), un = new WeakMap();
class is extends ss {
}
D(is, "Component", zn);
var so, I, as, ls, Ee, Ro, cs = {}, us = [], hr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $t(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function fs(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function A(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? so.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return qe(n, a, o, s, null);
}
function qe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++as : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function dr() {
  return { current: null };
}
function ro(n) {
  return n.children;
}
function qt(n, e) {
  this.props = n, this.context = e;
}
function ce(n, e) {
  if (e == null)
    return n.__ ? ce(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? ce(n) : null;
}
function hs(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return hs(n);
  }
}
function Ao(n) {
  (!n.__d && (n.__d = !0) && Ee.push(n) && !tn.__r++ || Ro !== I.debounceRendering) && ((Ro = I.debounceRendering) || setTimeout)(tn);
}
function tn() {
  for (var n; tn.__r = Ee.length; )
    n = Ee.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), Ee = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = $t({}, r)).__v = r.__v + 1, vs(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ce(r) : a, r.__h), gr(o, r), r.__e != a && hs(r)));
    });
}
function ds(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, m = o && o.__k || us, E = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? qe(null, u, null, null, u) : Array.isArray(u) ? qe(ro, { children: u }, null, null, null) : u.__b > 0 ? qe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = m[i]) === null || d && u.key == d.key && u.type === d.type)
        m[i] = void 0;
      else
        for (g = 0; g < E; g++) {
          if ((d = m[g]) && u.key == d.key && u.type === d.type) {
            m[g] = void 0;
            break;
          }
          d = null;
        }
      vs(n, u, d = d || cs, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = ps(u, c, n) : c = gs(n, u, d, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = ce(d));
    }
  for (t.__e = _, i = E; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = ce(o, i + 1)), ms(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      _s(v[i], v[++i], v[++i]);
}
function ps(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? ps(o, e, t) : gs(t, o, o, s, o.__e, e));
  return e;
}
function gs(n, e, t, o, s, r) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        n.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function pr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || en(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || en(n, r, e[r], t[r], o);
}
function $o(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || hr.test(e) ? t : t + "px";
}
function en(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || $o(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || $o(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Lo : Oo, r) : n.removeEventListener(e, r ? Lo : Oo, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? n.setAttribute(e, t) : n.removeAttribute(e));
    }
}
function Oo(n) {
  this.l[n.type + !1](I.event ? I.event(n) : n);
}
function Lo(n) {
  this.l[n.type + !0](I.event ? I.event(n) : n);
}
function vs(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, m, E, w, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = I.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], E = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, E) : (e.__c = i = new qt(v, E), i.constructor = y, i.render = _r), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = E, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = $t({}, i.__s)), $t(i.__s, y.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, E), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, E) === !1 || e.__v === t.__v) {
            i.props = v, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(C) {
              C && (C.__ = e);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, E), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = E, i.props = v, i.__v = e, i.__P = n, w = I.__r, x = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = $t($t({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === ro && f.key == null ? f.props.children : f, ds(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = vr(t.__e, e, t, o, s, r, a, c);
    (f = I.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), I.__e(C, e, t);
  }
}
function gr(n, e) {
  I.__c && I.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      I.__e(o, t.__v);
    }
  });
}
function vr(n, e, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        n = c, r[p] = null;
        break;
      }
  }
  if (n == null) {
    if (u === null)
      return document.createTextNode(d);
    n = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && n.data === d || (n.data = d);
  else {
    if (r = r && so.call(n.childNodes), f = (g = t.props || cs).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (pr(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, ds(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ce(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && fs(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && en(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && en(n, "checked", p, g.checked, !1));
  }
  return n;
}
function _s(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    I.__e(o, t);
  }
}
function ms(n, e, t) {
  var o, s;
  if (I.unmount && I.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || _s(o, null, e)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, e);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ms(o[s], e, typeof n.type != "function");
  t || n.__e == null || fs(n.__e), n.__e = n.__d = void 0;
}
function _r(n, e, t) {
  return this.constructor(n, t);
}
so = us.slice, I = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, as = 0, ls = function(n) {
  return n != null && n.constructor === void 0;
}, qt.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $t({}, this.state), typeof n == "function" && (n = n($t({}, t), this.props)), n && $t(t, n), n != null && this.__v && (e && this.__h.push(e), Ao(this));
}, qt.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ao(this));
}, qt.prototype.render = ro, Ee = [], tn.__r = 0;
var jt, Wt;
class No extends qt {
  constructor(t) {
    var o;
    super(t);
    b(this, jt, 0);
    b(this, Wt, null);
    D(this, "_handleWheel", (t) => {
      var r;
      const { wheelContainer: o } = this.props, s = t.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? t.deltaX : t.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(a) && t.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (t) => {
      const { dragStart: o } = this.state;
      o && (h(this, jt) && cancelAnimationFrame(h(this, jt)), R(this, jt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), R(this, jt, 0);
      })), t.preventDefault());
    });
    D(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    D(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    D(this, "_handleClick", (t) => {
      const o = t.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, c = (r === "horz" ? t.clientX - s.left : t.clientY - s.top) - this.barSize / 2;
      this.scroll(c * l / a), t.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
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
    const { scrollSize: t, clientSize: o } = this.props;
    return Math.max(0, t - o);
  }
  get barSize() {
    const { clientSize: t, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(t * t / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (R(this, Wt, typeof t == "string" ? document : t.current), h(this, Wt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), h(this, Wt) && h(this, Wt).removeEventListener("wheel", this._handleWheel);
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
    var s;
    const { onScroll: o } = this.props;
    o && o(t, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: t,
      type: o,
      size: s = 12,
      className: r,
      style: a,
      left: l,
      top: c,
      bottom: f,
      right: i
    } = this.props, { maxScrollPos: g, scrollPos: d } = this, { dragStart: u } = this.state, p = {
      left: l,
      top: c,
      bottom: f,
      right: i,
      ...a
    }, _ = {};
    return o === "horz" ? (p.height = s, p.width = t, _.width = this.barSize, _.left = Math.round(Math.min(g, d) * (t - _.width) / g)) : (p.width = s, p.height = t, _.height = this.barSize, _.top = Math.round(Math.min(g, d) * (t - _.height) / g)), /* @__PURE__ */ A("div", {
      className: j("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ A("div", {
      className: "scrollbar-bar",
      style: _,
      onMouseDown: this._handleMouseDown
    }));
  }
}
jt = new WeakMap(), Wt = new WeakMap();
function ye(n, ...e) {
  var t;
  if (e.length === 0)
    return n;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const o = e[0];
    return Object.keys(o).forEach((s) => {
      var a;
      const r = (a = o[s]) != null ? a : 0;
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < e.length; o++) {
    const s = (t = e[o]) != null ? t : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return n;
}
var io = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(io || {});
function mr(n, e = 2, t = "") {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / io[t]).toFixed(e) + t);
}
const yr = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const o = t[1];
  return n = n.replace(o, ""), Number.parseInt(n, 10) * io[o];
};
function br(n) {
  const e = typeof n == "string" ? document.querySelector(n) : n;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const o = document.createRange();
      return o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o), !0;
    }
  }
  return !1;
}
function wr(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function Er(n, e) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: br,
  domReady: wr,
  isElementVisible: Er,
  classes: j
}, Symbol.toStringTag, { value: "Module" }));
let ys = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Ae, Ct, it, ee, ne, Ve;
const go = class {
  constructor(e, t = "local") {
    b(this, ne);
    b(this, Ae, void 0);
    b(this, Ct, void 0);
    b(this, it, void 0);
    b(this, ee, void 0);
    R(this, Ae, t), R(this, Ct, `ZUI_STORE:${e != null ? e : ys()}`), R(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, Ae);
  }
  get session() {
    return this.type === "session" ? this : (h(this, ee) || R(this, ee, new go(h(this, Ct), "session")), h(this, ee));
  }
  get(e, t) {
    const o = h(this, it).getItem(T(this, ne, Ve).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    h(this, it).setItem(T(this, ne, Ve).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    h(this, it).removeItem(T(this, ne, Ve).call(this, e));
  }
  each(e) {
    for (let t = 0; t < h(this, it).length; t++) {
      const o = h(this, it).key(t);
      if (o != null && o.startsWith(h(this, Ct))) {
        const s = h(this, it).getItem(o);
        typeof s == "string" && e(o.substring(h(this, Ct).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const e = {};
    return this.each((t, o) => {
      e[t] = o;
    }), e;
  }
};
let nn = go;
Ae = new WeakMap(), Ct = new WeakMap(), it = new WeakMap(), ee = new WeakMap(), ne = new WeakSet(), Ve = function(e) {
  return `${h(this, Ct)}:${e}`;
};
const xr = new nn("DEFAULT");
function kr(n, e = "local") {
  return new nn(n, e);
}
Object.assign(xr, { create: kr });
class ea extends qt {
  render() {
    const { size: e, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ A("img", {
      src: r,
      alt: a
    }) : g = a, typeof e == "number" ? (i.width = e, i.height = e) : typeof e == "string" && f.push(`avatar-${e}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ A("div", {
      className: j(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Sr() {
  const n = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${n}px`, document.body.classList.add("modal-open");
}
function Cr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Mr(n, e) {
  Sr(), n.classList.add("block"), Do(n, e), n.onclick = (t) => Rr(t, n), window.addEventListener("resize", () => {
    Do(n, e);
  });
}
function bs(n) {
  var e;
  Cr(), (e = n.classList) == null || e.remove("block");
}
function Do(n, e) {
  const t = n.querySelector(".modal-dialog");
  if (!t)
    return;
  const o = Math.max(0, (window.innerHeight - t.clientHeight) / 2);
  if (e === "fit") {
    t.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (e === "center") {
    t.style.top = `${o}px`;
    return;
  }
  t.style.top = e;
}
function Rr(n, e) {
  n.target.closest("[data-dismiss=modal]") && (n.stopPropagation(), bs(e));
}
function Ar(n) {
  var e, t;
  return n instanceof HTMLAnchorElement ? (t = (e = (n.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : t.selector : n.dataset.target;
}
document.addEventListener("click", (n) => {
  const e = n.target, t = e.closest("[data-toggle=modal]");
  if (t) {
    const o = Ar(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Mr(s, t.dataset.position || "fit");
  } else
    e.className.includes("modal") && bs(e);
});
function et(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Yt(n) {
  var e = et(n).Element;
  return n instanceof e || n instanceof Element;
}
function tt(n) {
  var e = et(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function ao(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = et(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
var Vt = Math.max, on = Math.min, ue = Math.round;
function Un() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function ws() {
  return !/^((?!chrome|android).)*safari/i.test(Un());
}
function fe(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var o = n.getBoundingClientRect(), s = 1, r = 1;
  e && tt(n) && (s = n.offsetWidth > 0 && ue(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && ue(o.height) / n.offsetHeight || 1);
  var a = Yt(n) ? et(n) : window, l = a.visualViewport, c = !ws() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, d = o.height / r;
  return {
    width: g,
    height: d,
    top: i,
    right: f + g,
    bottom: i + d,
    left: f,
    x: f,
    y: i
  };
}
function lo(n) {
  var e = et(n), t = e.pageXOffset, o = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function $r(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Or(n) {
  return n === et(n) || !tt(n) ? lo(n) : $r(n);
}
function ft(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Lt(n) {
  return ((Yt(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function co(n) {
  return fe(Lt(n)).left + lo(n).scrollLeft;
}
function ot(n) {
  return et(n).getComputedStyle(n);
}
function uo(n) {
  var e = ot(n), t = e.overflow, o = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Lr(n) {
  var e = n.getBoundingClientRect(), t = ue(e.width) / n.offsetWidth || 1, o = ue(e.height) / n.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function Nr(n, e, t) {
  t === void 0 && (t = !1);
  var o = tt(e), s = tt(e) && Lr(e), r = Lt(e), a = fe(n, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(e) !== "body" || uo(r)) && (l = Or(e)), tt(e) ? (c = fe(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : r && (c.x = co(r))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Es(n) {
  var e = fe(n), t = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: o
  };
}
function On(n) {
  return ft(n) === "html" ? n : n.assignedSlot || n.parentNode || (ao(n) ? n.host : null) || Lt(n);
}
function xs(n) {
  return ["html", "body", "#document"].indexOf(ft(n)) >= 0 ? n.ownerDocument.body : tt(n) && uo(n) ? n : xs(On(n));
}
function xe(n, e) {
  var t;
  e === void 0 && (e = []);
  var o = xs(n), s = o === ((t = n.ownerDocument) == null ? void 0 : t.body), r = et(o), a = s ? [r].concat(r.visualViewport || [], uo(o) ? o : []) : o, l = e.concat(a);
  return s ? l : l.concat(xe(On(a)));
}
function Dr(n) {
  return ["table", "td", "th"].indexOf(ft(n)) >= 0;
}
function Po(n) {
  return !tt(n) || ot(n).position === "fixed" ? null : n.offsetParent;
}
function Pr(n) {
  var e = /firefox/i.test(Un()), t = /Trident/i.test(Un());
  if (t && tt(n)) {
    var o = ot(n);
    if (o.position === "fixed")
      return null;
  }
  var s = On(n);
  for (ao(s) && (s = s.host); tt(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || e && r.willChange === "filter" || e && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ln(n) {
  for (var e = et(n), t = Po(n); t && Dr(t) && ot(t).position === "static"; )
    t = Po(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? e : t || Pr(n) || e;
}
var nt = "top", ht = "bottom", Ot = "right", bt = "left", Nn = "auto", Dn = [nt, ht, Ot, bt], he = "start", ke = "end", Tr = "clippingParents", ks = "viewport", ve = "popper", Hr = "reference", To = /* @__PURE__ */ Dn.reduce(function(n, e) {
  return n.concat([e + "-" + he, e + "-" + ke]);
}, []), jr = /* @__PURE__ */ [].concat(Dn, [Nn]).reduce(function(n, e) {
  return n.concat([e, e + "-" + he, e + "-" + ke]);
}, []), Wr = "beforeRead", Ir = "read", Br = "afterRead", zr = "beforeMain", Ur = "main", Fr = "afterMain", qr = "beforeWrite", Vr = "write", Yr = "afterWrite", Fn = [Wr, Ir, Br, zr, Ur, Fr, qr, Vr, Yr];
function Xr(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  n.forEach(function(r) {
    e.set(r.name, r);
  });
  function s(r) {
    t.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(l) {
      if (!t.has(l)) {
        var c = e.get(l);
        c && s(c);
      }
    }), o.push(r);
  }
  return n.forEach(function(r) {
    t.has(r.name) || s(r);
  }), o;
}
function Kr(n) {
  var e = Xr(n);
  return Fn.reduce(function(t, o) {
    return t.concat(e.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Gr(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function xt(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, n);
}
var Tt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Jr = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ho = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Zr(n) {
  n.forEach(function(e) {
    [].concat(Object.keys(e), Ho).filter(function(t, o, s) {
      return s.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof e.name != "string" && console.error(xt(Tt, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(xt(Tt, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Fn.indexOf(e.phase) < 0 && console.error(xt(Tt, e.name, '"phase"', "either " + Fn.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(xt(Tt, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(xt(Tt, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(xt(Tt, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(xt(Tt, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + Ho.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      e.requires && e.requires.forEach(function(o) {
        n.find(function(s) {
          return s.name === o;
        }) == null && console.error(xt(Jr, String(e.name), o, o));
      });
    });
  });
}
function Qr(n, e) {
  var t = /* @__PURE__ */ new Set();
  return n.filter(function(o) {
    var s = e(o);
    if (!t.has(s))
      return t.add(s), !0;
  });
}
function wt(n) {
  return n.split("-")[0];
}
function ti(n) {
  var e = n.reduce(function(t, o) {
    var s = t[o.name];
    return t[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
function ei(n, e) {
  var t = et(n), o = Lt(n), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = ws();
    (f || !f && e === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + co(n),
    y: c
  };
}
function ni(n) {
  var e, t = Lt(n), o = lo(n), s = (e = n.ownerDocument) == null ? void 0 : e.body, r = Vt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Vt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + co(n), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Vt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function oi(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && ao(t)) {
    var o = e;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function qn(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function si(n, e) {
  var t = fe(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function jo(n, e, t) {
  return e === ks ? qn(ei(n, t)) : Yt(e) ? si(e, t) : qn(ni(Lt(n)));
}
function ri(n) {
  var e = xe(On(n)), t = ["absolute", "fixed"].indexOf(ot(n).position) >= 0, o = t && tt(n) ? Ln(n) : n;
  return Yt(o) ? e.filter(function(s) {
    return Yt(s) && oi(s, o) && ft(s) !== "body";
  }) : [];
}
function ii(n, e, t, o) {
  var s = e === "clippingParents" ? ri(n) : [].concat(e), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = jo(n, f, o);
    return c.top = Vt(i.top, c.top), c.right = on(i.right, c.right), c.bottom = on(i.bottom, c.bottom), c.left = Vt(i.left, c.left), c;
  }, jo(n, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function de(n) {
  return n.split("-")[1];
}
function Ss(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Cs(n) {
  var e = n.reference, t = n.element, o = n.placement, s = o ? wt(o) : null, r = o ? de(o) : null, a = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, c;
  switch (s) {
    case nt:
      c = {
        x: a,
        y: e.y - t.height
      };
      break;
    case ht:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case Ot:
      c = {
        x: e.x + e.width,
        y: l
      };
      break;
    case bt:
      c = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var f = s ? Ss(s) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (r) {
      case he:
        c[f] = c[f] - (e[i] / 2 - t[i] / 2);
        break;
      case ke:
        c[f] = c[f] + (e[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function Ms() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ai(n) {
  return Object.assign({}, Ms(), n);
}
function li(n, e) {
  return e.reduce(function(t, o) {
    return t[o] = n, t;
  }, {});
}
function fo(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = o === void 0 ? n.placement : o, r = t.strategy, a = r === void 0 ? n.strategy : r, l = t.boundary, c = l === void 0 ? Tr : l, f = t.rootBoundary, i = f === void 0 ? ks : f, g = t.elementContext, d = g === void 0 ? ve : g, u = t.altBoundary, p = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, m = ai(typeof v != "number" ? v : li(v, Dn)), E = d === ve ? Hr : ve, w = n.rects.popper, x = n.elements[p ? E : d], S = ii(Yt(x) ? x : x.contextElement || Lt(n.elements.popper), c, i, a), y = fe(n.elements.reference), C = Cs({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), k = qn(Object.assign({}, w, C)), O = d === ve ? k : y, N = {
    top: S.top - O.top + m.top,
    bottom: O.bottom - S.bottom + m.bottom,
    left: S.left - O.left + m.left,
    right: O.right - S.right + m.right
  }, $ = n.modifiersData.offset;
  if (d === ve && $) {
    var B = $[s];
    Object.keys(N).forEach(function(z) {
      var U = [Ot, ht].indexOf(z) >= 0 ? 1 : -1, V = [nt, ht].indexOf(z) >= 0 ? "y" : "x";
      N[z] += B[V] * U;
    });
  }
  return N;
}
var Wo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ci = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Io = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ui(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, o = t === void 0 ? [] : t, s = e.defaultOptions, r = s === void 0 ? Io : s;
  return function(l, c, f) {
    f === void 0 && (f = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Io, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, g = [], d = !1, u = {
      state: i,
      setOptions: function(m) {
        var E = typeof m == "function" ? m(i.options) : m;
        _(), i.options = Object.assign({}, r, i.options, E), i.scrollParents = {
          reference: Yt(l) ? xe(l) : l.contextElement ? xe(l.contextElement) : [],
          popper: xe(c)
        };
        var w = Kr(ti([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = Qr([].concat(w, i.options.modifiers), function($) {
            var B = $.name;
            return B;
          });
          if (Zr(x), wt(i.options.placement) === Nn) {
            var S = i.orderedModifiers.find(function($) {
              var B = $.name;
              return B === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ot(c), C = y.marginTop, k = y.marginRight, O = y.marginBottom, N = y.marginLeft;
          [C, k, O, N].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), u.update();
      },
      forceUpdate: function() {
        if (!d) {
          var m = i.elements, E = m.reference, w = m.popper;
          if (!Bo(E, w)) {
            process.env.NODE_ENV !== "production" && console.error(Wo);
            return;
          }
          i.rects = {
            reference: Nr(E, Ln(w), i.options.strategy === "fixed"),
            popper: Es(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function($) {
            return i.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var x = 0, S = 0; S < i.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(ci);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, S = -1;
              continue;
            }
            var y = i.orderedModifiers[S], C = y.fn, k = y.options, O = k === void 0 ? {} : k, N = y.name;
            typeof C == "function" && (i = C({
              state: i,
              options: O,
              name: N,
              instance: u
            }) || i);
          }
        }
      },
      update: Gr(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(i);
        });
      }),
      destroy: function() {
        _(), d = !0;
      }
    };
    if (!Bo(l, c))
      return process.env.NODE_ENV !== "production" && console.error(Wo), u;
    u.setOptions(f).then(function(v) {
      !d && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function p() {
      i.orderedModifiers.forEach(function(v) {
        var m = v.name, E = v.options, w = E === void 0 ? {} : E, x = v.effect;
        if (typeof x == "function") {
          var S = x({
            state: i,
            name: m,
            instance: u,
            options: w
          }), y = function() {
          };
          g.push(S || y);
        }
      });
    }
    function _() {
      g.forEach(function(v) {
        return v();
      }), g = [];
    }
    return u;
  };
}
var ze = {
  passive: !0
};
function fi(n) {
  var e = n.state, t = n.instance, o = n.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = et(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, ze);
  }), l && c.addEventListener("resize", t.update, ze), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, ze);
    }), l && c.removeEventListener("resize", t.update, ze);
  };
}
const hi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fi,
  data: {}
};
function di(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Cs({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const pi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: di,
  data: {}
};
var gi = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vi(n) {
  var e = n.x, t = n.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: ue(e * s) / s || 0,
    y: ue(t * s) / s || 0
  };
}
function zo(n) {
  var e, t = n.popper, o = n.popperRect, s = n.placement, r = n.variation, a = n.offsets, l = n.position, c = n.gpuAcceleration, f = n.adaptive, i = n.roundOffsets, g = n.isFixed, d = a.x, u = d === void 0 ? 0 : d, p = a.y, _ = p === void 0 ? 0 : p, v = typeof i == "function" ? i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  u = v.x, _ = v.y;
  var m = a.hasOwnProperty("x"), E = a.hasOwnProperty("y"), w = bt, x = nt, S = window;
  if (f) {
    var y = Ln(t), C = "clientHeight", k = "clientWidth";
    if (y === et(t) && (y = Lt(t), ot(y).position !== "static" && l === "absolute" && (C = "scrollHeight", k = "scrollWidth")), y = y, s === nt || (s === bt || s === Ot) && r === ke) {
      x = ht;
      var O = g && y === S && S.visualViewport ? S.visualViewport.height : y[C];
      _ -= O - o.height, _ *= c ? 1 : -1;
    }
    if (s === bt || (s === nt || s === ht) && r === ke) {
      w = Ot;
      var N = g && y === S && S.visualViewport ? S.visualViewport.width : y[k];
      u -= N - o.width, u *= c ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, f && gi), B = i === !0 ? vi({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  if (u = B.x, _ = B.y, c) {
    var z;
    return Object.assign({}, $, (z = {}, z[x] = E ? "0" : "", z[w] = m ? "0" : "", z.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + _ + "px)" : "translate3d(" + u + "px, " + _ + "px, 0)", z));
  }
  return Object.assign({}, $, (e = {}, e[x] = E ? _ + "px" : "", e[w] = m ? u + "px" : "", e.transform = "", e));
}
function _i(n) {
  var e = n.state, t = n.options, o = t.gpuAcceleration, s = o === void 0 ? !0 : o, r = t.adaptive, a = r === void 0 ? !0 : r, l = t.roundOffsets, c = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(e.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return f.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: wt(e.placement),
    variation: de(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: s,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, zo(Object.assign({}, i, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, zo(Object.assign({}, i, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const mi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _i,
  data: {}
};
function yi(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var o = e.styles[t] || {}, s = e.attributes[t] || {}, r = e.elements[t];
    !tt(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function bi(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(o) {
      var s = e.elements[o], r = e.attributes[o] || {}, a = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : t[o]), l = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !tt(s) || !ft(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
const wi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yi,
  effect: bi,
  requires: ["computeStyles"]
};
var Ei = [hi, pi, mi, wi], Vn = /* @__PURE__ */ ui({
  defaultModifiers: Ei
});
function xi(n) {
  return n === "x" ? "y" : "x";
}
function Ye(n, e, t) {
  return Vt(n, on(e, t));
}
function ki(n, e, t) {
  var o = Ye(n, e, t);
  return o > t ? t : o;
}
function Si(n) {
  var e = n.state, t = n.options, o = n.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, d = t.tether, u = d === void 0 ? !0 : d, p = t.tetherOffset, _ = p === void 0 ? 0 : p, v = fo(e, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), m = wt(e.placement), E = de(e.placement), w = !E, x = Ss(m), S = xi(x), y = e.modifiersData.popperOffsets, C = e.rects.reference, k = e.rects.popper, O = typeof _ == "function" ? _(Object.assign({}, e.rects, {
    placement: e.placement
  })) : _, N = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var z, U = x === "y" ? nt : bt, V = x === "y" ? ht : Ot, q = x === "y" ? "height" : "width", Y = y[x], Xt = Y + v[U], dt = Y - v[V], st = u ? -k[q] / 2 : 0, Kt = E === he ? C[q] : k[q], Et = E === he ? -k[q] : -C[q], Nt = e.elements.arrow, M = u && Nt ? Es(Nt) : {
        width: 0,
        height: 0
      }, L = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ms(), W = L[U], G = L[V], X = Ye(0, C[q], M[q]), pt = w ? C[q] / 2 - st - X - W - N.mainAxis : Kt - X - W - N.mainAxis, Gt = w ? -C[q] / 2 + st + X + G + N.mainAxis : Et + X + G + N.mainAxis, Jt = e.elements.arrow && Ln(e.elements.arrow), Pn = Jt ? x === "y" ? Jt.clientTop || 0 : Jt.clientLeft || 0 : 0, He = (z = $ == null ? void 0 : $[x]) != null ? z : 0, P = Y + pt - He - Pn, je = Y + Gt - He, Dt = Ye(u ? on(Xt, P) : Xt, Y, u ? Vt(dt, je) : dt);
      y[x] = Dt, B[x] = Dt - Y;
    }
    if (l) {
      var ge, We = x === "x" ? nt : bt, Ie = x === "x" ? ht : Ot, Pt = y[S], Be = S === "y" ? "height" : "width", vo = Pt + v[We], _o = Pt - v[Ie], Tn = [nt, bt].indexOf(m) !== -1, mo = (ge = $ == null ? void 0 : $[S]) != null ? ge : 0, yo = Tn ? vo : Pt - C[Be] - k[Be] - mo + N.altAxis, bo = Tn ? Pt + C[Be] + k[Be] - mo - N.altAxis : _o, wo = u && Tn ? ki(yo, Pt, bo) : Ye(u ? yo : vo, Pt, u ? bo : _o);
      y[S] = wo, B[S] = wo - Pt;
    }
    e.modifiersData[o] = B;
  }
}
const Yn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Si,
  requiresIfExists: ["offset"]
};
var Ci = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xe(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return Ci[e];
  });
}
var Mi = {
  start: "end",
  end: "start"
};
function Uo(n) {
  return n.replace(/start|end/g, function(e) {
    return Mi[e];
  });
}
function Ri(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? jr : c, i = de(o), g = i ? l ? To : To.filter(function(p) {
    return de(p) === i;
  }) : Dn, d = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  d.length === 0 && (d = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = d.reduce(function(p, _) {
    return p[_] = fo(n, {
      placement: _,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[wt(_)], p;
  }, {});
  return Object.keys(u).sort(function(p, _) {
    return u[p] - u[_];
  });
}
function Ai(n) {
  if (wt(n) === Nn)
    return [];
  var e = Xe(n);
  return [Uo(n), e, Uo(e)];
}
function $i(n) {
  var e = n.state, t = n.options, o = n.name;
  if (!e.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, d = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = e.options.placement, m = wt(v), E = m === v, w = c || (E || !p ? [Xe(v)] : Ai(v)), x = [v].concat(w).reduce(function(M, L) {
      return M.concat(wt(L) === Nn ? Ri(e, {
        placement: L,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: _
      }) : L);
    }, []), S = e.rects.reference, y = e.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, O = x[0], N = 0; N < x.length; N++) {
      var $ = x[N], B = wt($), z = de($) === he, U = [nt, ht].indexOf(B) >= 0, V = U ? "width" : "height", q = fo(e, {
        placement: $,
        boundary: i,
        rootBoundary: g,
        altBoundary: d,
        padding: f
      }), Y = U ? z ? Ot : bt : z ? ht : nt;
      S[V] > y[V] && (Y = Xe(Y));
      var Xt = Xe(Y), dt = [];
      if (r && dt.push(q[B] <= 0), l && dt.push(q[Y] <= 0, q[Xt] <= 0), dt.every(function(M) {
        return M;
      })) {
        O = $, k = !1;
        break;
      }
      C.set($, dt);
    }
    if (k)
      for (var st = p ? 3 : 1, Kt = function(L) {
        var W = x.find(function(G) {
          var X = C.get(G);
          if (X)
            return X.slice(0, L).every(function(pt) {
              return pt;
            });
        });
        if (W)
          return O = W, "break";
      }, Et = st; Et > 0; Et--) {
        var Nt = Kt(Et);
        if (Nt === "break")
          break;
      }
    e.placement !== O && (e.modifiersData[o]._skip = !0, e.placement = O, e.reset = !0);
  }
}
const Xn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $i,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Rs(n) {
  return n.button === 2;
}
const Oi = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', jn = "show", Ke = "contextmenu";
var It, Q, Bt, oe, $e, zt, Oe, Kn, fn, hn, dn, pn, As, gn, $s;
const kt = class extends $n {
  constructor() {
    super(...arguments);
    b(this, Oe);
    b(this, pn);
    b(this, gn);
    b(this, It, void 0);
    b(this, Q, void 0);
    b(this, Bt, /* @__PURE__ */ new Map());
    b(this, oe, void 0);
    b(this, $e, void 0);
    b(this, zt, void 0);
    b(this, fn, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = h(this, Bt).get(t);
      s || (s = Vn(o.parentElement, o, {
        modifiers: [Yn, Xn],
        placement: "right-start"
      }), h(this, Bt).set(t, s)), s.update();
    });
    b(this, hn, (t) => {
      const o = h(this, Bt).get(t);
      o && (o.destroy(), h(this, Bt).delete(t));
    });
    b(this, dn, (t, o, s, r) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(jn);
  }
  get menu() {
    var s, r;
    if (h(this, It))
      return h(this, It);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Ke), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Ke) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${Ke}`);
      }
    }
    if (o)
      return R(this, It, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return h(this, Q) ? h(this, Q) : T(this, Oe, Kn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || kt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    R(this, $e, t), T(this, pn, As).call(this, t) !== !1 && (this.menu.classList.add(jn), T(this, Oe, Kn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = h(this, Q)) == null || o.destroy(), R(this, Q, void 0), (s = h(this, It)) == null || s.classList.remove(jn), (a = (r = h(this, zt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = h(this, Q)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Rs(t) || (kt.getAll(), kt.getAll().forEach((o) => o.hide()));
  }
  static show(t) {
    const { event: o, ...s } = t, r = kt.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const t = kt.get(document.body);
    return t == null || t.hide(), t;
  }
  static get mousePos() {
    const { watchedMouse: t } = this;
    return t || this.watchMouse(), typeof t == "object" ? t : { clientX: 0, clientY: 0 };
  }
  static watchMouse() {
    this.watchedMouse || (document.addEventListener("mousemove", (t) => {
      this.watchedMouse = t;
    }), this.watchedMouse = !0);
  }
};
let Zt = kt;
It = new WeakMap(), Q = new WeakMap(), Bt = new WeakMap(), oe = new WeakMap(), $e = new WeakMap(), zt = new WeakMap(), Oe = new WeakSet(), Kn = function() {
  const t = {
    modifiers: [Yn, Xn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return h(this, Q) ? h(this, Q).setOptions(t) : R(this, Q, Vn(T(this, gn, $s).call(this), this.menu, t)), h(this, Q);
}, fn = new WeakMap(), hn = new WeakMap(), dn = new WeakMap(), pn = new WeakSet(), As = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return h(this, zt) ? h(this, zt).render({ items: o, ...r }) : R(this, zt, new is(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: h(this, fn),
    beforeDestroy: h(this, hn),
    onRenderItem: h(this, dn)
  })), !0;
}, gn = new WeakSet(), $s = function() {
  return h(this, oe) || R(this, oe, {
    getBoundingClientRect: () => {
      const { clientX: t, clientY: o } = h(this, $e) || kt.mousePos;
      return {
        width: 0,
        height: 0,
        top: o,
        right: t,
        bottom: o,
        left: t
      };
    },
    contextElement: this.element
  }), h(this, oe);
}, D(Zt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(Zt, "watchedMouse", !1);
document.addEventListener("contextmenu", (n) => {
  const e = n.target;
  if (e.closest(`.${Ke}`))
    return;
  const t = e.closest(Oi);
  t && Zt.ensure(t).show(n);
});
document.addEventListener("click", Zt.clear);
function Li(n) {
  return (n == null ? void 0 : n.nodeType) !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false";
}
const Ni = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', _e = "show", Fo = "dropdown-menu";
var Ut, _t;
const vn = class extends $n {
  constructor() {
    super(...arguments);
    b(this, Ut, void 0);
    b(this, _t, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(_e);
  }
  get menu() {
    var t, o;
    if (!h(this, Ut)) {
      const { element: s } = this;
      let r;
      const a = (t = s.getAttribute("href")) != null ? t : s.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = s.nextElementSibling;
        l != null && l.classList.contains(Fo) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Fo}`);
      }
      if (r)
        R(this, Ut, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return h(this, Ut);
  }
  get popper() {
    return h(this, _t) || R(this, _t, Vn(this.element, this.menu, {
      modifiers: [Yn, Xn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), h(this, _t);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && vn.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(_e), this.element.classList.add(_e), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Li(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = h(this, _t)) == null || o.destroy(), R(this, _t, void 0), (s = h(this, Ut)) == null || s.classList.remove(_e), this.element.classList.remove(_e), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = h(this, _t)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Rs(t) || vn.getAll().forEach((o) => o.hide());
  }
};
let Qt = vn;
Ut = new WeakMap(), _t = new WeakMap(), D(Qt, "NAME", "dropdown"), D(Qt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(n) {
  const t = n.target.closest(Ni);
  t ? Qt.ensure(t).toggle() : Qt.clear(n);
});
function Di(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function ho({ col: n, className: e, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
  var y, C;
  const i = {
    left: n.left,
    width: n.realWidth,
    height: t,
    ...a
  }, { align: g, border: d } = n.setting, u = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", c, n.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], _ = ["dtable-cell-content", e], v = [(C = l != null ? l : (y = o.data) == null ? void 0 : y[n.name]) != null ? C : ""], m = s ? s(v, { row: o, col: n }, A) : v, E = [], w = [], x = {}, S = {};
  return m == null || m.forEach((k) => {
    var O;
    if (typeof k == "object" && k && !ls(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const N = k.outer ? E : w;
      k.html ? N.push(/* @__PURE__ */ A("div", {
        className: j("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(O = k.attrs) != null ? O : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : _).push(k.className), k.children && N.push(k.children), k.attrs && Object.assign(k.outer ? x : S, k.attrs));
    } else
      w.push(k);
  }), /* @__PURE__ */ A("div", {
    className: j(p),
    style: i,
    "data-col": n.name,
    ...f,
    ...x
  }, w.length > 0 && /* @__PURE__ */ A("div", {
    className: j(_),
    style: u,
    ...S
  }, w), E);
}
function Pi({ col: n, children: e, style: t, ...o }) {
  var r;
  const { sortType: s } = n.setting;
  return /* @__PURE__ */ A(ho, {
    col: n,
    style: { ...t, ...n.setting.style },
    "data-sort": s || null,
    "data-type": n.type,
    ...o
  }, (r = n.setting.title) != null ? r : n.setting.name, s && /* @__PURE__ */ A("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), e);
}
function Wn({ row: n, className: e, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = ho, onRenderCell: c }) {
  return /* @__PURE__ */ A("div", {
    className: j("dtable-cells", e),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ A(l, {
    key: f.name,
    col: f,
    row: n,
    onRenderCell: c
  }) : null));
}
function Os({
  row: n,
  className: e,
  top: t,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: c,
  scrollColsWidth: f,
  fixedRightWidth: i,
  scrollLeft: g,
  CellComponent: d = ho,
  onRenderCell: u,
  style: p,
  ..._
}) {
  let v = null;
  s != null && s.length && (v = /* @__PURE__ */ A(Wn, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let m = null;
  a != null && a.length && (m = /* @__PURE__ */ A(Wn, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let E = null;
  r != null && r.length && (E = /* @__PURE__ */ A(Wn, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  const w = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ A("div", {
    className: j("dtable-row", e),
    style: w,
    "data-id": n.id,
    ..._
  }, v, m, E);
}
function Ti({ height: n, onRenderRow: e, ...t }) {
  const o = {
    height: n,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Pi
  };
  if (e) {
    const s = e({ props: o }, A);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ A(Os, {
    ...o
  }));
}
function Hi({
  className: n,
  style: e,
  top: t,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: a,
  onRenderRow: l,
  ...c
}) {
  return e = { ...e, top: t, height: s }, /* @__PURE__ */ A("div", {
    className: j("dtable-rows", n),
    style: e
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, A);
    return g && Object.assign(i, g), /* @__PURE__ */ A(Os, {
      ...i
    });
  }));
}
const sn = /* @__PURE__ */ new Map(), rn = [];
function Ls(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && sn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  sn.set(t, n), (e == null ? void 0 : e.buildIn) && !rn.includes(t) && rn.push(t);
}
function Te(n, e) {
  Ls(n, e);
  const t = (o) => {
    if (!o)
      return n;
    const { defaultOptions: s, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return t.plugin = n, t;
}
function Ns(n) {
  return sn.delete(n);
}
function ji(n) {
  if (typeof n == "string") {
    const e = sn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Ds(n, e, t) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = ji(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Ds(n, s.plugins, t), n.push(s), t.add(s.name));
  }), n;
}
function Wi(n = [], e = !0) {
  return e && rn.length && n.unshift(...rn), n != null && n.length ? Ds([], n, /* @__PURE__ */ new Set()) : [];
}
function qo() {
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
var Ft, se, Mt, mt, Rt, F, at, lt, re, Le, yt, ie, ae, _n, Ps, mn, Ts, yn, Hs, bn, js, Ne, Jn, wn, En, De, Pe, xn, kn, Sn, Ws, Cn, Is, Mn, Bs;
class Gn extends qt {
  constructor(t) {
    var o;
    super(t);
    b(this, _n);
    b(this, mn);
    b(this, yn);
    b(this, bn);
    b(this, Ne);
    b(this, Sn);
    b(this, Cn);
    b(this, Mn);
    D(this, "ref", dr());
    b(this, Ft, 0);
    b(this, se, void 0);
    b(this, Mt, !1);
    b(this, mt, void 0);
    b(this, Rt, void 0);
    b(this, F, []);
    b(this, at, void 0);
    b(this, lt, /* @__PURE__ */ new Map());
    b(this, re, {});
    b(this, Le, void 0);
    D(this, "updateLayout", () => {
      h(this, Ft) && cancelAnimationFrame(h(this, Ft)), R(this, Ft, requestAnimationFrame(() => {
        R(this, at, void 0), this.forceUpdate(), R(this, Ft, 0);
      }));
    });
    b(this, yt, (t, o) => {
      o = o || t.type;
      const s = h(this, lt).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    b(this, ie, (t) => {
      h(this, yt).call(this, t, `window_${t.type}`);
    });
    b(this, ae, (t) => {
      h(this, yt).call(this, t, `document_${t.type}`);
    });
    b(this, wn, (t, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, t, o);
        s && Object.assign(t.props, s);
      }
      return h(this, F).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, t, o);
          r && Object.assign(t.props, r);
        }
      }), t.props;
    });
    b(this, En, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), h(this, F).forEach((s) => {
      s.onRenderHeaderRow && (t.props = s.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    b(this, De, (t, o, s) => {
      const { row: r, col: a } = o;
      t[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, s)), this.options[l] && (t = this.options[l].call(this, t, o, s)), h(this, F).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, s));
      }), t;
    });
    b(this, Pe, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    b(this, xn, (t) => {
      var l, c, f, i, g;
      const o = this.getPointerInfo(t);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: a }), h(this, F).forEach((d) => {
          var u;
          (u = d.onHeaderCellClick) == null || u.call(this, t, { colName: r, element: a });
        }));
      else {
        const { rowElement: d } = o, u = this.layout.visibleRows.find((p) => p.id === s);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
            return;
          for (const p of h(this, F))
            if (((f = p.onCellClick) == null ? void 0 : f.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
          return;
        for (const p of h(this, F))
          if (((g = p.onRowClick) == null ? void 0 : g.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
            return;
      }
    });
    b(this, kn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, se, (o = t.id) != null ? o : `dtable-${ys(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, Rt, Object.freeze(Wi(t.plugins))), h(this, Rt).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(h(this, re), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, at)) == null ? void 0 : t.options) || h(this, mt) || qo();
  }
  get plugins() {
    return h(this, F);
  }
  get layout() {
    return h(this, at);
  }
  get id() {
    return h(this, se);
  }
  get data() {
    return h(this, re);
  }
  get parent() {
    var t, o;
    return (o = this.props.parent) != null ? o : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    R(this, mt, void 0);
  }
  componentDidMount() {
    if (h(this, Mt) ? this.forceUpdate() : T(this, Ne, Jn).call(this), h(this, F).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", h(this, xn)), this.on("keydown", h(this, kn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), R(this, Le, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    h(this, F).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    h(this, Mt) ? T(this, Ne, Jn).call(this) : h(this, F).forEach((t) => {
      var o;
      (o = t.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = h(this, Le)) == null || o.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of h(this, lt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), h(this, ie)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), h(this, ae)) : t.removeEventListener(s, h(this, yt));
    h(this, F).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), h(this, Rt).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), R(this, re, {}), h(this, lt).clear();
  }
  on(t, o, s) {
    var a;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    r ? r.push(o) : (h(this, lt).set(t, [o]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), h(this, ie)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), h(this, ae)) : (a = this.ref.current) == null || a.addEventListener(t, h(this, yt)));
  }
  off(t, o, s) {
    var l;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (h(this, lt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), h(this, ie)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), h(this, ae)) : (l = this.ref.current) == null || l.removeEventListener(t, h(this, yt)));
  }
  emitCustomEvent(t, o) {
    h(this, yt).call(this, o instanceof Event ? o : new CustomEvent(t, { detail: o }), t);
  }
  scroll(t, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: c, colsInfo: { scrollWidth: f, scrollColsWidth: i } } = this.layout, { to: g } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (g === "up" || g === "down")
      u = r + (g === "down" ? 1 : -1) * Math.floor(l / c) * c;
    else if (g === "left" || g === "right")
      d = s + (g === "right" ? 1 : -1) * f;
    else if (g === "home")
      u = 0;
    else if (g === "end")
      u = a - l;
    else if (g === "left-begin")
      d = 0;
    else if (g === "right-end")
      d = i - f;
    else {
      const { offsetLeft: _, offsetTop: v } = t;
      typeof _ == "number" && (d = s + _), typeof v == "number" && (d = r + v);
    }
    const p = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, i - f)), d !== s && (p.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, a - l)), u !== r && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, p), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: o, colsList: s } = this.layout;
    return typeof t == "number" ? s[t] : o[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: s } = this.layout;
    return typeof t == "number" ? o[t] : s[t];
  }
  getCellValue(t, o) {
    var c, f;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let a = s.id === "HEADER" ? (c = r.setting.title) != null ? c : r.setting.name : (f = s.data) == null ? void 0 : f[r.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, s, r, a)), a;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, o) {
    const { dirtyType: s, state: r } = t;
    s === "layout" ? R(this, at, void 0) : s === "options" && (R(this, at, void 0), R(this, mt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
  }
  getPointerInfo(t) {
    const o = t.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const s = o.closest(".dtable-cell");
    if (!s)
      return;
    const r = s.closest(".dtable-row");
    if (!r)
      return;
    const a = s == null ? void 0 : s.getAttribute("data-col"), l = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof a != "string" || typeof l != "string"))
      return {
        cellElement: s,
        rowElement: r,
        colName: a,
        rowID: l,
        target: o
      };
  }
  render() {
    var u;
    const t = T(this, Mn, Bs).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
      "scrollbar-hover": f
    }], d = [];
    return t && h(this, F).forEach((p) => {
      var v;
      const _ = (v = p.onRender) == null ? void 0 : v.call(this, t);
      !_ || (_.style && Object.assign(i, _.style), _.className && g.push(_.className), _.children && d.push(_.children));
    }), /* @__PURE__ */ A("div", {
      id: h(this, se),
      className: j(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && T(this, _n, Ps).call(this, t), t && T(this, mn, Ts).call(this, t), t && T(this, yn, Hs).call(this, t), t && T(this, bn, js).call(this, t));
  }
}
Ft = new WeakMap(), se = new WeakMap(), Mt = new WeakMap(), mt = new WeakMap(), Rt = new WeakMap(), F = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), yt = new WeakMap(), ie = new WeakMap(), ae = new WeakMap(), _n = new WeakSet(), Ps = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ A(Ti, {
      scrollLeft: a,
      height: r,
      onRenderCell: h(this, De),
      onRenderRow: h(this, En),
      ...s
    });
  let l, c;
  if (typeof o == "function") {
    const f = o(t, this.state);
    typeof f == "object" && f && "__html" in f ? c = f : l = f;
  } else
    l = o;
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: r },
    dangerouslySetInnerHTML: c
  }, l);
}, mn = new WeakSet(), Ts = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ A(Hi, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: h(this, De),
    onRenderRow: h(this, wn),
    ...l
  });
}, yn = new WeakSet(), Hs = function(t) {
  const { footer: o, footerHeight: s } = t;
  if (!o)
    return null;
  let r, a;
  if (typeof o == "function") {
    const l = o(t, this.state);
    typeof l == "object" && l && "__html" in l ? a = l : r = l;
  } else
    r = o;
  return /* @__PURE__ */ A("div", {
    className: "dtable-footer",
    style: { height: s },
    dangerouslySetInnerHTML: a
  }, r);
}, bn = new WeakSet(), js = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c } = t, { scrollColsWidth: f, scrollWidth: i } = r, { scrollbarSize: g = 12, horzScrollbarPos: d } = this.options;
  return f > i && o.push(
    /* @__PURE__ */ A(No, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: f,
      clientSize: i,
      onScroll: h(this, Pe),
      left: r.fixedLeftWidth,
      bottom: d === "inside" ? 0 : -g,
      size: g,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ A(No, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: h(this, Pe),
      right: 0,
      size: g,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Ne = new WeakSet(), Jn = function() {
  var t;
  R(this, Mt, !1), (t = this.options.afterRender) == null || t.call(this), h(this, F).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, wn = new WeakMap(), En = new WeakMap(), De = new WeakMap(), Pe = new WeakMap(), xn = new WeakMap(), kn = new WeakMap(), Sn = new WeakSet(), Ws = function() {
  if (h(this, mt))
    return !1;
  const o = { ...qo(), ...h(this, Rt).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return R(this, mt, o), R(this, F, h(this, Rt).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), !0;
}, Cn = new WeakSet(), Is = function() {
  var Et, Nt;
  const { plugins: t } = this;
  let o = h(this, mt);
  t.forEach((M) => {
    var W;
    const L = (W = M.beforeLayout) == null ? void 0 : W.call(this, o);
    L && (o = { ...o, ...L });
  });
  const { defaultColWidth: s, minColWidth: r, maxColWidth: a } = o, l = [], c = [], f = [], i = {}, g = [], d = [];
  let u = 0, p = 0, _ = 0;
  o.cols.forEach((M) => {
    if (M.hidden)
      return;
    const {
      name: L,
      type: W = "",
      fixed: G = !1,
      flex: X = !1,
      width: pt = s,
      minWidth: Gt = r,
      maxWidth: Jt = a,
      ...Pn
    } = M, He = Di(pt, Gt, Jt), P = {
      name: L,
      type: W,
      setting: {
        name: L,
        type: W,
        fixed: G,
        flex: X,
        width: pt,
        minWidth: Gt,
        maxWidth: Jt,
        ...Pn
      },
      flex: G ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: He,
      realWidth: 0,
      visible: !0,
      index: g.length
    };
    t.forEach((je) => {
      var ge, We;
      const Dt = (ge = je.colTypes) == null ? void 0 : ge[W];
      if (Dt) {
        const Ie = typeof Dt == "function" ? Dt(P) : Dt;
        Ie && Object.assign(P.setting, Ie);
      }
      (We = je.onAddCol) == null || We.call(this, P);
    }), P.realWidth = P.realWidth || P.width, G === "left" ? (P.left = u, u += P.width, l.push(P)) : G === "right" ? (P.left = p, p += P.width, c.push(P)) : (P.left = _, _ += P.width, f.push(P)), P.flex && d.push(P), g.push(P), i[P.name] = P;
  });
  let v = o.width, m = 0;
  const E = u + _ + p;
  if (typeof v == "function" && (v = v.call(this, E)), v === "auto")
    m = E;
  else if (v === "100%") {
    const { parent: M } = this;
    if (M)
      m = M.clientWidth;
    else {
      m = 0, R(this, Mt, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: w, rowKey: x = "id", rowHeight: S } = o, y = [], C = (M, L, W) => {
    var X, pt;
    const G = { data: W != null ? W : { [x]: M }, id: M, index: y.length, top: 0 };
    if (W || (G.lazy = !0), y.push(G), ((X = o.onAddRow) == null ? void 0 : X.call(this, G, L)) !== !1) {
      for (const Gt of t)
        if (((pt = Gt.onAddRow) == null ? void 0 : pt.call(this, G, L)) === !1)
          return;
    }
  };
  if (typeof w == "number")
    for (let M = 0; M < w; M++)
      C(`${M}`, M);
  else
    Array.isArray(w) && w.forEach((M, L) => {
      var W;
      typeof M == "object" ? C(`${(W = M[x]) != null ? W : ""}`, L, M) : C(`${M != null ? M : ""}`, L);
    });
  let k = y;
  const O = {};
  if (o.onAddRows) {
    const M = o.onAddRows.call(this, k);
    M && (k = M);
  }
  for (const M of t) {
    const L = (Et = M.onAddRows) == null ? void 0 : Et.call(this, k);
    L && (k = L);
  }
  k.forEach((M, L) => {
    O[M.id] = M, M.index = L, M.top = M.index * S;
  });
  const { header: N, footer: $ } = o, B = N ? o.headerHeight || S : 0, z = $ ? o.footerHeight || S : 0;
  let U = o.height, V = 0;
  const q = k.length * S, Y = B + z + q;
  if (typeof U == "function" && (U = U.call(this, Y)), U === "auto")
    V = Y;
  else if (typeof U == "object")
    V = Math.min(U.max, Math.max(U.min, Y));
  else if (U === "100%") {
    const { parent: M } = this;
    if (M)
      V = M.clientHeight;
    else {
      V = 0, R(this, Mt, !0);
      return;
    }
  } else
    V = U;
  const Xt = V - B - z, dt = m - u - p, st = {
    options: o,
    allRows: y,
    width: m,
    height: V,
    rows: k,
    rowsMap: O,
    rowHeight: S,
    rowsHeight: Xt,
    rowsHeightTotal: q,
    header: N,
    footer: $,
    headerHeight: B,
    footerHeight: z,
    colsMap: i,
    colsList: g,
    flexCols: d,
    colsInfo: {
      fixedLeftCols: l,
      fixedRightCols: c,
      scrollCols: f,
      fixedLeftWidth: u,
      scrollWidth: dt,
      scrollColsWidth: _,
      fixedRightWidth: p
    }
  }, Kt = (Nt = o.onLayout) == null ? void 0 : Nt.call(this, st);
  Kt && Object.assign(st, Kt), t.forEach((M) => {
    if (M.onLayout) {
      const L = M.onLayout.call(this, st);
      L && Object.assign(st, L);
    }
  }), R(this, at, st);
}, Mn = new WeakSet(), Bs = function() {
  (T(this, Sn, Ws).call(this) || !h(this, at)) && T(this, Cn, Is).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = t;
  if (s.length) {
    const w = a - l;
    if (w > 0) {
      const x = s.reduce((y, C) => y + C.flex, 0);
      let S = 0;
      s.forEach((y) => {
        const C = Math.min(w - S, Math.ceil(w * (y.flex / x)));
        y.realWidth = C + y.width, S += y.realWidth;
      });
    } else
      s.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let c = 0;
  r.forEach((w) => {
    w.left = c, c += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + a;
  });
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: d } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), p = Math.floor(u / d), _ = u + i, v = Math.min(g.length, Math.ceil(_ / d)), m = [], { rowDataGetter: E } = this.options;
  for (let w = p; w < v; w++) {
    const x = g[w];
    x.lazy && E && (x.data = E([x.id])[0], x.lazy = !1), m.push(x);
  }
  return t.visibleRows = m, t.scrollTop = u, t.scrollLeft = o, t;
}, D(Gn, "addPlugin", Ls), D(Gn, "removePlugin", Ns);
function Vo(n, e) {
  e !== void 0 ? n.data.hoverCol = e : e = n.data.hoverCol;
  const { current: t } = n.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && t.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const zs = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (n) => !!n.colHover,
  events: {
    mouseover(n) {
      var s, r;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const t = (s = n.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!t || e === "header" && !t.closest(".dtable-header"))
        return;
      const o = (r = t == null ? void 0 : t.getAttribute("data-col")) != null ? r : !1;
      Vo(this, o);
    },
    mouseleave() {
      Vo(this, !1);
    }
  }
};
Te(zs, { buildIn: !0 });
function Ii(n, e) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (n === void 0 ? (e === void 0 && (e = !Us.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    r(c, !!e);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    r(c, e != null ? e : !t[c]);
  })), Object.keys(o).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, o, t);
    c && Object.keys(c).forEach((f) => {
      c[f] ? t[f] = !0 : delete t[f];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var f;
      (f = this.options.onCheckChange) == null || f.call(this, o);
    });
  }
  return o;
}
function Bi(n) {
  var e;
  return (e = this.state.checkedRows[n]) != null ? e : !1;
}
function Us() {
  var t, o;
  const n = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? n === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : n === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function zi() {
  return Object.keys(this.state.checkedRows);
}
const Fs = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Ii,
    isRowChecked: Bi,
    isAllRowChecked: Us,
    getChecks: zi
  },
  onRenderCell(n, { row: e, col: t }) {
    var l, c;
    const { id: o } = e, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return n;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: f
      });
      n.unshift(i), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var a, l;
    const { id: o } = e, { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: c
      });
      n.unshift(f), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow({ props: n, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: j(n.className, "is-checked") };
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!e)
      return;
    const t = e.closest('input[type="checkbox"],.dtable-checkbox');
    t && this.toggleCheckRows(t.checked);
  },
  onRowClick(n, { rowID: e }) {
    const t = n.target;
    if (!t)
      return;
    (t.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
};
Te(Fs);
function Zn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, o = e.children && t && t[n];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const a = Zn.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Zn.call(this, e.parent).level + 1 : 0, e;
}
function Ui(n, e) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !qs.call(this)), e) {
      const r = o.entries();
      for (const [a, l] of r)
        l.state === "expanded" && (t[a] = !0);
    } else
      t = {};
  else {
    const r = Array.isArray(n) ? n : [n];
    e === void 0 && (e = !t[r[0]]), r.forEach((a) => {
      const l = o.get(a);
      e && (l == null ? void 0 : l.children) ? t[a] = !0 : delete t[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function qs() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Vs(n, e = 0, t, o = 0) {
  var s;
  t || (t = [...n.keys()]);
  for (const r of t) {
    const a = n.get(r);
    !a || (a.level === o && (a.order = e++), (s = a.children) != null && s.length && (e = Vs(n, e, a.children, o + 1)));
  }
  return e;
}
function Ys(n, e, t, o) {
  const s = n.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, Ys(n, r, t, o);
  }), s;
}
function Xs(n, e, t, o, s) {
  var l;
  const r = n.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[e] = t), r.parent && Xs(n, r.parent, t, o, s);
}
const Ks = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, e) {
      const { nestedMap: t } = this.data, o = t.get(n.id), s = t.get(e.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(n, e, t) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([s, r]) => {
        const a = Ys(this, s, r, o);
        a != null && a.parent && Xs(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Ui,
    isAllCollapsed: qs,
    getNestedRowInfo: Zn
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(n) {
    var s, r, a, l, c;
    const { nestedMap: e } = this.data, t = (r = n.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (a = e.get(n.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = t, (c = n.data) != null && c[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), e.set(n.id, o), t) {
      let f = e.get(t);
      f || (f = {
        state: "",
        level: 0
      }, e.set(t, f)), f.children || (f.children = []), f.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), Vs(this.data.nestedMap), n.sort((e, t) => {
      var a, l;
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? e.index - t.index : r;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = e.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && n.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, e, s)) != null ? c : /* @__PURE__ */ A("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = e.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), n.unshift(/* @__PURE__ */ A("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var s, r;
    const { id: o } = e;
    return t.setting.nestedToggle && n.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ A("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow({ props: n, row: e }) {
    const t = this.getNestedRowInfo(e.id);
    return {
      className: j(n.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: n }) {
    return n.className = j(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: e }) {
    const t = n.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
};
Te(Ks);
const ut = 24 * 60 * 60 * 1e3, J = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), pe = (n, e = new Date()) => (n = J(n), e = J(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate()), Qn = (n, e = new Date()) => J(n).getFullYear() === J(e).getFullYear(), Gs = (n, e = new Date()) => (n = J(n), e = J(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Fi = (n, e = new Date()) => {
  n = J(n), e = J(e);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(n.getTime() / t), s = Math.floor(e.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, qi = (n, e) => pe(J(e), n), Vi = (n, e) => pe(J(e).getTime() - ut, n), Yi = (n, e) => pe(J(e).getTime() + ut, n), Xi = (n, e) => pe(J(e).getTime() - 2 * ut, n), an = (n, e = "yyyy-MM-dd hh:mm") => {
  n = J(n);
  const t = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const s = `${t[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), e;
}, Ki = (n, e, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = an(n, Qn(n) ? o.month : o.full);
  if (pe(n, e))
    return s;
  const r = an(e, Qn(n, e) ? Gs(n, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Gi = (n) => {
  const e = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return e - ut * 7;
    case "oneMonth":
      return e - ut * 31;
    case "threeMonth":
      return e - ut * 31 * 3;
    case "halfYear":
      return e - ut * 183;
    case "oneYear":
      return e - ut * 365;
    case "twoYear":
      return e - 2 * (ut * 365);
    default:
      return 0;
  }
}, to = (n, e, t = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return n *= 365, to(n, "day", t, o);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, to(n, "day", t, o);
    case "week":
      n *= 7;
    case "day":
      n *= 24;
    case "hour":
      n *= 60;
    case "minute":
      n *= 6e4;
      break;
    default:
      n = 0;
  }
  return t ? o + n : o - n;
};
const Js = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n) {
        return n[0] = {
          html: n[0]
        }, n;
      }
    },
    link: {
      onRenderCell(n, { col: e, row: t }) {
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = ye(o, t.data);
        return n[0] = /* @__PURE__ */ A("a", {
          href: r,
          ...s
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, { col: e, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ A("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ A("img", {
          src: o ? o[a] : ""
        }));
        return s ? n.unshift(l) : n[0] = l, n;
      }
    },
    circleProgress: {
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, a = (t - o) / 2, l = t / 2, c = n[0];
        return n[0] = /* @__PURE__ */ A("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ A("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ A("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ A("text", {
          x: l,
          y: l + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(c))), n;
      }
    },
    actionButtons: {
      onRenderCell(n, { col: e, row: t }) {
        var l;
        const o = (l = t.data) == null ? void 0 : l[e.name];
        if (!o)
          return n;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), ye(s, c);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(n, { col: e }) {
        let { format: t } = e.setting;
        if (!t)
          return n;
        typeof t == "string" && (t = { type: "text", format: t });
        const { format: o, type: s } = t, r = n[0];
        return typeof o == "function" ? n[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? n[0] = an(r, o) : s === "html" ? n[0] = { html: ye(o, r) } : n[0] = ye(o, r), n;
      }
    }
  }
};
Te(Js);
const Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: zs,
  checkable: Fs,
  nested: Ks,
  rich: Js
}, Symbol.toStringTag, { value: "Module" }));
class Ue extends ss {
}
D(Ue, "Component", Gn), D(Ue, "definePlugin", Te), D(Ue, "removePlugin", Ns), D(Ue, "plugins", Ji);
var ct, Z;
class Zi {
  constructor(e) {
    b(this, ct, void 0);
    b(this, Z, void 0);
    R(this, ct, e), R(this, Z, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement), this.addActive(h(this, Z).parentElement, h(this, Z)), h(this, Z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, Z, h(this, ct)), this.addActive(h(this, Z).parentElement, h(this, Z)), R(this, ct, document.querySelector(`[href='#${h(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, Z).getAttribute("id")}']`)), this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement);
  }
  addActive(e, t) {
    const o = e.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(r) {
      t.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(e) {
    return new Promise(function(t, o) {
      setTimeout(() => {
        e.classList.add("in"), t();
      }, 100);
    });
  }
}
ct = new WeakMap(), Z = new WeakMap();
document.addEventListener("click", function(n) {
  n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new Zi(n.target).showTarget());
});
function Ge(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function eo(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (Ge(n) && Ge(t))
    for (const o in t)
      Ge(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), eo(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return eo(n, ...e);
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: J,
  isSameDay: pe,
  isSameYear: Qn,
  isSameMonth: Gs,
  isSameWeek: Fi,
  isToday: qi,
  isYesterday: Vi,
  isTomorrow: Yi,
  isDBY: Xi,
  formatDate: an,
  formatDateSpan: Ki,
  getTimeBeforeDesc: Gi,
  calculateTimestamp: to,
  formatString: ye,
  formatBytes: mr,
  convertBytes: yr,
  isObject: Ge,
  mergeDeep: eo
}, Symbol.toStringTag, { value: "Module" }));
export {
  ea as Avatar,
  Zt as ContextMenu,
  Ue as DTable,
  Qt as Dropdown,
  oo as EventBus,
  is as Menu,
  Zi as NavTabs,
  No as Scrollbar,
  ta as browser,
  na as helpers,
  Bn as nativeEvents,
  xr as store
};
