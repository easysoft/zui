var tr = Object.defineProperty;
var er = (n, e, t) => e in n ? tr(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => (er(n, typeof e != "symbol" ? e + "" : e, t), t), Bn = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var h = (n, e, t) => (Bn(n, e, "read from private field"), t ? t.call(n) : e.get(n)), b = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, A = (n, e, t, o) => (Bn(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t);
var T = (n, e, t) => (Bn(n, e, "access private method"), t);
const nr = (n) => {
  const e = {};
  if (!n)
    return e;
  const t = Object.values(n.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    e[s] = r;
  }), e;
};
class or extends HTMLElement {
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
    const t = nr(this);
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
customElements.get("zui-button") || customElements.define("zui-button", or);
var $n, H, Go, Fn, be, So, Ze = {}, Jo = [], sr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function At(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Zo(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function K(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $n.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return qe(n, a, o, s, null);
}
function qe(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Go : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function Qo() {
  return { current: null };
}
function On(n) {
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
function ts(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ts(n);
  }
}
function Co(n) {
  (!n.__d && (n.__d = !0) && be.push(n) && !Qe.__r++ || So !== H.debounceRendering) && ((So = H.debounceRendering) || setTimeout)(Qe);
}
function Qe() {
  for (var n; Qe.__r = be.length; )
    n = be.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), be = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = At({}, r)).__v = r.__v + 1, io(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? le(r) : a, r.__h), ss(o, r), r.__e != a && ts(r)));
    });
}
function es(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, m = o && o.__k || Jo, E = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? qe(null, u, null, null, u) : Array.isArray(u) ? qe(On, { children: u }, null, null, null) : u.__b > 0 ? qe(u.type, u.props, u.key, null, u.__v) : u) != null) {
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
      io(n, u, d = d || Ze, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = ns(u, c, n) : c = os(n, u, d, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = le(d));
    }
  for (t.__e = _, i = E; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = le(o, i + 1)), is(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      rs(v[i], v[++i], v[++i]);
}
function ns(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? ns(o, e, t) : os(t, o, o, s, o.__e, e));
  return e;
}
function os(n, e, t, o, s, r) {
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
function rr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || tn(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || tn(n, r, e[r], t[r], o);
}
function Mo(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || sr.test(e) ? t : t + "px";
}
function tn(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || Mo(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || Mo(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Ao : Ro, r) : n.removeEventListener(e, r ? Ao : Ro, r);
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
function Ro(n) {
  this.l[n.type + !1](H.event ? H.event(n) : n);
}
function Ao(n) {
  this.l[n.type + !0](H.event ? H.event(n) : n);
}
function io(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, m, E, w, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = H.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], E = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, E) : (e.__c = i = new we(v, E), i.constructor = y, i.render = ar), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = E, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = At({}, i.__s)), At(i.__s, y.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
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
        i.state = i.__s, i.getChildContext != null && (o = At(At({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === On && f.key == null ? f.props.children : f, es(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = ir(t.__e, e, t, o, s, r, a, c);
    (f = H.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), H.__e(C, e, t);
  }
}
function ss(n, e) {
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
function ir(n, e, t, o, s, r, a, l) {
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
    if (r = r && $n.call(n.childNodes), f = (g = t.props || Ze).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (rr(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, es(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && le(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && Zo(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && tn(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && tn(n, "checked", p, g.checked, !1));
  }
  return n;
}
function rs(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    H.__e(o, t);
  }
}
function is(n, e, t) {
  var o, s;
  if (H.unmount && H.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || rs(o, null, e)), (o = n.__c) != null) {
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
      o[s] && is(o[s], e, typeof n.type != "function");
  t || n.__e == null || Zo(n.__e), n.__e = n.__d = void 0;
}
function ar(n, e, t) {
  return this.constructor(n, t);
}
function lr(n, e, t) {
  var o, s, r;
  H.__ && H.__(n, e), s = (o = typeof t == "function") ? null : t && t.__k || e.__k, r = [], io(e, n = (!o && t || e).__k = K(On, null, [n]), s || Ze, Ze, e.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : e.firstChild ? $n.call(e.childNodes) : null, r, !o && t ? t : s ? s.__e : e.firstChild, o), ss(r, n);
}
$n = Jo.slice, H = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, Go = 0, Fn = function(n) {
  return n != null && n.constructor === void 0;
}, we.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof n == "function" && (n = n(At({}, t), this.props)), n && At(t, n), n != null && this.__v && (e && this.__h.push(e), Co(this));
}, we.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Co(this));
}, we.prototype.render = On, be = [], Qe.__r = 0;
var gt;
class cr {
  constructor(e = "") {
    b(this, gt, void 0);
    typeof e == "object" ? A(this, gt, e) : A(this, gt, document.appendChild(document.createComment(e)));
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
const qn = /* @__PURE__ */ new Set([
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
class ao extends cr {
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
    return typeof e == "string" && (qn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(ao.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (qn.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
var vt, Se, Ht, me;
class $o extends ao {
  constructor(t = "", o) {
    super(t);
    b(this, Ht);
    b(this, vt, /* @__PURE__ */ new Map());
    b(this, Se, void 0);
    A(this, Se, o == null ? void 0 : o.customEventSuffix);
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
  return qn.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function ur(n) {
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
class Ln {
  constructor(e, t) {
    b(this, St, void 0);
    b(this, te, void 0);
    b(this, rt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, A(this, rt, new $o(e, { customEventSuffix: `.${this.constructor.KEY}` })), A(this, St, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? ur(e.dataset) : null, ...t }), this.constructor.all.set(e, this), A(this, te, e), this.init(), h(this, rt).emit("inited", this);
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
    let o = $o.createEvent(e, t);
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
St = new WeakMap(), te = new WeakMap(), rt = new WeakMap(), D(Ln, "allComponents", /* @__PURE__ */ new Map());
var Ce;
class fr extends Ln {
  constructor() {
    super(...arguments);
    b(this, Ce, Qo());
  }
  get $() {
    return h(this, Ce).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    lr(/* @__PURE__ */ K(o, {
      ref: h(this, Ce),
      ...this.setOptions(t)
    }), this.element);
  }
}
Ce = new WeakMap();
const W = (...n) => n.map((e) => Array.isArray(e) ? W(...e) : typeof e == "function" ? W(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const o = e[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function hr(n) {
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
    className: W(e),
    ...t
  }, /* @__PURE__ */ K("a", {
    className: W("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...d
  }, Fn(c) ? c : typeof c == "string" ? /* @__PURE__ */ K("i", {
    class: `icon ${c}`
  }) : null, f, Fn(i) ? i : typeof i == "string" ? /* @__PURE__ */ K("i", {
    class: `icon ${i}`
  }) : null), g);
}
function dr({ className: n }) {
  return /* @__PURE__ */ K("div", {
    class: W("menu-divider", n)
  });
}
function pr({ className: n, title: e, children: t, ...o }) {
  return /* @__PURE__ */ K("li", {
    class: W("menu-heading", n),
    ...o
  }, e, t);
}
var Me, un, as, Re, fn, hn;
const _o = class extends we {
  constructor() {
    super(...arguments);
    b(this, un);
    D(this, "state", { shownSubs: {} });
    b(this, Me, Qo());
    b(this, Re, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, K);
      const { afterRender: s, onClickItem: r, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ K(_o, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: h(this, Re),
        afterRender: s,
        onClickItem: r,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    b(this, fn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    b(this, hn, (t, o) => {
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
      class: W(
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
        return /* @__PURE__ */ K(pr, {
          ...w,
          key: m
        });
      if (E === "divider")
        return /* @__PURE__ */ K(dr, {
          ...w,
          key: m
        });
      const { onClick: x, items: S, ...y } = w, C = {
        ...y,
        key: m,
        onClick: T(this, un, as).bind(this, v, _, x)
      }, k = S && this.state.shownSubs[m];
      return S && (C.rootClass = W(C.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (C.rootProps = {
        ...C.rootProps,
        onMouseEnter: h(this, fn).bind(this, m),
        onMouseLeave: h(this, hn).bind(this, m)
      })), /* @__PURE__ */ K(hr, {
        ...C
      }, k && h(this, Re).call(this, v));
    }), r);
  }
};
let Vn = _o;
Me = new WeakMap(), un = new WeakSet(), as = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a(t, o, r), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, Re = new WeakMap(), fn = new WeakMap(), hn = new WeakMap();
class ls extends fr {
}
D(ls, "Component", Vn);
var Nn, j, cs, us, Ee, Oo, en = {}, fs = [], gr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $t(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function hs(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function R(n, e, t) {
  var o, s, r, a = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Nn.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Ve(n, a, o, s, null);
}
function Ve(n, e, t, o, s) {
  var r = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++cs : s };
  return s == null && j.vnode != null && j.vnode(r), r;
}
function ds() {
  return { current: null };
}
function Dn(n) {
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
function ps(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ps(n);
  }
}
function Lo(n) {
  (!n.__d && (n.__d = !0) && Ee.push(n) && !nn.__r++ || Oo !== j.debounceRendering) && ((Oo = j.debounceRendering) || setTimeout)(nn);
}
function nn() {
  for (var n; nn.__r = Ee.length; )
    n = Ee.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), Ee = [], n.some(function(e) {
      var t, o, s, r, a, l;
      e.__d && (a = (r = (t = e).__v).__e, (l = t.__P) && (o = [], (s = $t({}, r)).__v = r.__v + 1, lo(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ce(r) : a, r.__h), ms(o, r), r.__e != a && ps(r)));
    });
}
function gs(n, e, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, m = o && o.__k || fs, E = m.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((u = t.__k[i] = (u = e[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ve(null, u, null, null, u) : Array.isArray(u) ? Ve(Dn, { children: u }, null, null, null) : u.__b > 0 ? Ve(u.type, u.props, u.key, null, u.__v) : u) != null) {
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
      lo(n, u, d = d || en, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = vs(u, c, n) : c = _s(n, u, d, m, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != n && (c = ce(d));
    }
  for (t.__e = _, i = E; i--; )
    m[i] != null && (typeof t.type == "function" && m[i].__e != null && m[i].__e == t.__d && (t.__d = ce(o, i + 1)), bs(m[i], m[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ys(v[i], v[++i], v[++i]);
}
function vs(n, e, t) {
  for (var o, s = n.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = n, e = typeof o.type == "function" ? vs(o, e, t) : _s(t, o, o, s, o.__e, e));
  return e;
}
function _s(n, e, t, o, s, r) {
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
function vr(n, e, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in e || on(n, r, null, t[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === e[r] || on(n, r, e[r], t[r], o);
}
function No(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || gr.test(e) ? t : t + "px";
}
function on(n, e, t, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || No(n.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || No(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? o || n.addEventListener(e, r ? Po : Do, r) : n.removeEventListener(e, r ? Po : Do, r);
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
function Do(n) {
  this.l[n.type + !1](j.event ? j.event(n) : n);
}
function Po(n) {
  this.l[n.type + !0](j.event ? j.event(n) : n);
}
function lo(n, e, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, m, E, w, x, S, y = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = e.__e = t.__e, e.__h = null, r = [l]), (f = j.__b) && f(e);
  try {
    t:
      if (typeof y == "function") {
        if (v = e.props, m = (f = y.contextType) && o[f.__c], E = f ? m ? m.props.value : f.__ : o, t.__c ? _ = (i = e.__c = t.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? e.__c = i = new y(v, E) : (e.__c = i = new qt(v, E), i.constructor = y, i.render = mr), m && m.sub(i), i.props = v, i.state || (i.state = {}), i.context = E, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = $t({}, i.__s)), $t(i.__s, y.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
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
        if (i.context = E, i.props = v, i.__v = e, i.__P = n, w = j.__r, x = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(e), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = $t($t({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === Dn && f.key == null ? f.props.children : f, gs(n, Array.isArray(S) ? S : [S], e, t, o, s, r, a, l, c), i.base = e.__e, e.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = _r(t.__e, e, t, o, s, r, a, c);
    (f = j.diffed) && f(e);
  } catch (C) {
    e.__v = null, (c || r != null) && (e.__e = l, e.__h = !!c, r[r.indexOf(l)] = null), j.__e(C, e, t);
  }
}
function ms(n, e) {
  j.__c && j.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      j.__e(o, t.__v);
    }
  });
}
function _r(n, e, t, o, s, r, a, l) {
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
    if (r = r && Nn.call(n.childNodes), f = (g = t.props || en).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < n.attributes.length; p++)
          g[n.attributes[p].name] = n.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === n.innerHTML) || (n.innerHTML = i && i.__html || ""));
    }
    if (vr(n, d, g, s, l), i)
      e.__k = [];
    else if (p = e.props.children, gs(n, Array.isArray(p) ? p : [p], e, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ce(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && hs(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== n.value || u === "progress" && !p || u === "option" && p !== g.value) && on(n, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== n.checked && on(n, "checked", p, g.checked, !1));
  }
  return n;
}
function ys(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (o) {
    j.__e(o, t);
  }
}
function bs(n, e, t) {
  var o, s;
  if (j.unmount && j.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || ys(o, null, e)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        j.__e(r, e);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (s = 0; s < o.length; s++)
      o[s] && bs(o[s], e, typeof n.type != "function");
  t || n.__e == null || hs(n.__e), n.__e = n.__d = void 0;
}
function mr(n, e, t) {
  return this.constructor(n, t);
}
function yr(n, e, t) {
  var o, s, r;
  j.__ && j.__(n, e), s = (o = typeof t == "function") ? null : t && t.__k || e.__k, r = [], lo(e, n = (!o && t || e).__k = R(Dn, null, [n]), s || en, en, e.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : e.firstChild ? Nn.call(e.childNodes) : null, r, !o && t ? t : s ? s.__e : e.firstChild, o), ms(r, n);
}
Nn = fs.slice, j = { __e: function(n, e, t, o) {
  for (var s, r, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        n = l;
      }
  throw n;
} }, cs = 0, us = function(n) {
  return n != null && n.constructor === void 0;
}, qt.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $t({}, this.state), typeof n == "function" && (n = n($t({}, t), this.props)), n && $t(t, n), n != null && this.__v && (e && this.__h.push(e), Lo(this));
}, qt.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Lo(this));
}, qt.prototype.render = Dn, Ee = [], nn.__r = 0;
var jt, Wt;
class To extends qt {
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
      o && (h(this, jt) && cancelAnimationFrame(h(this, jt)), A(this, jt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), A(this, jt, 0);
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
    t && (A(this, Wt, typeof t == "string" ? document : t.current), h(this, Wt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    return o === "horz" ? (p.height = s, p.width = t, _.width = this.barSize, _.left = Math.round(Math.min(g, d) * (t - _.width) / g)) : (p.width = s, p.height = t, _.height = this.barSize, _.top = Math.round(Math.min(g, d) * (t - _.height) / g)), /* @__PURE__ */ R("div", {
      className: W("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ R("div", {
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
var co = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(co || {});
function br(n, e = 2, t = "") {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / co[t]).toFixed(e) + t);
}
const wr = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const o = t[1];
  return n = n.replace(o, ""), Number.parseInt(n, 10) * co[o];
};
function Er(n) {
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
function xr(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function kr(n, e) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Er,
  domReady: xr,
  isElementVisible: kr,
  classes: W
}, Symbol.toStringTag, { value: "Module" }));
let ws = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Ae, Ct, it, ee, ne, Ye;
const mo = class {
  constructor(e, t = "local") {
    b(this, ne);
    b(this, Ae, void 0);
    b(this, Ct, void 0);
    b(this, it, void 0);
    b(this, ee, void 0);
    A(this, Ae, t), A(this, Ct, `ZUI_STORE:${e != null ? e : ws()}`), A(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, Ae);
  }
  get session() {
    return this.type === "session" ? this : (h(this, ee) || A(this, ee, new mo(h(this, Ct), "session")), h(this, ee));
  }
  get(e, t) {
    const o = h(this, it).getItem(T(this, ne, Ye).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    h(this, it).setItem(T(this, ne, Ye).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    h(this, it).removeItem(T(this, ne, Ye).call(this, e));
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
let sn = mo;
Ae = new WeakMap(), Ct = new WeakMap(), it = new WeakMap(), ee = new WeakMap(), ne = new WeakSet(), Ye = function(e) {
  return `${h(this, Ct)}:${e}`;
};
const Sr = new sn("DEFAULT");
function Cr(n, e = "local") {
  return new sn(n, e);
}
Object.assign(Sr, { create: Cr });
class oa extends qt {
  render() {
    const { size: e, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ R("img", {
      src: r,
      alt: a
    }) : g = a, typeof e == "number" ? (i.width = e, i.height = e) : typeof e == "string" && f.push(`avatar-${e}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ R("div", {
      className: W(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Mr() {
  const n = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${n}px`, document.body.classList.add("modal-open");
}
function Rr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Ar(n, e) {
  Mr(), n.classList.add("block"), Ho(n, e), n.onclick = (t) => $r(t, n), window.addEventListener("resize", () => {
    Ho(n, e);
  });
}
function Es(n) {
  var e;
  Rr(), (e = n.classList) == null || e.remove("block");
}
function Ho(n, e) {
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
function $r(n, e) {
  n.target.closest("[data-dismiss=modal]") && (n.stopPropagation(), Es(e));
}
function Or(n) {
  var e, t;
  return n instanceof HTMLAnchorElement ? (t = (e = (n.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : t.selector : n.dataset.target;
}
document.addEventListener("click", (n) => {
  const e = n.target, t = e.closest("[data-toggle=modal]");
  if (t) {
    const o = Or(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Ar(s, t.dataset.position || "fit");
  } else
    e.className.includes("modal") && Es(e);
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
function uo(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = et(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
var Vt = Math.max, rn = Math.min, ue = Math.round;
function Yn() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function xs() {
  return !/^((?!chrome|android).)*safari/i.test(Yn());
}
function fe(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var o = n.getBoundingClientRect(), s = 1, r = 1;
  e && tt(n) && (s = n.offsetWidth > 0 && ue(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && ue(o.height) / n.offsetHeight || 1);
  var a = Yt(n) ? et(n) : window, l = a.visualViewport, c = !xs() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, d = o.height / r;
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
function fo(n) {
  var e = et(n), t = e.pageXOffset, o = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function Lr(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Nr(n) {
  return n === et(n) || !tt(n) ? fo(n) : Lr(n);
}
function ft(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Lt(n) {
  return ((Yt(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function ho(n) {
  return fe(Lt(n)).left + fo(n).scrollLeft;
}
function ot(n) {
  return et(n).getComputedStyle(n);
}
function po(n) {
  var e = ot(n), t = e.overflow, o = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Dr(n) {
  var e = n.getBoundingClientRect(), t = ue(e.width) / n.offsetWidth || 1, o = ue(e.height) / n.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function Pr(n, e, t) {
  t === void 0 && (t = !1);
  var o = tt(e), s = tt(e) && Dr(e), r = Lt(e), a = fe(n, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(e) !== "body" || po(r)) && (l = Nr(e)), tt(e) ? (c = fe(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ho(r))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function ks(n) {
  var e = fe(n), t = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: o
  };
}
function Pn(n) {
  return ft(n) === "html" ? n : n.assignedSlot || n.parentNode || (uo(n) ? n.host : null) || Lt(n);
}
function Ss(n) {
  return ["html", "body", "#document"].indexOf(ft(n)) >= 0 ? n.ownerDocument.body : tt(n) && po(n) ? n : Ss(Pn(n));
}
function xe(n, e) {
  var t;
  e === void 0 && (e = []);
  var o = Ss(n), s = o === ((t = n.ownerDocument) == null ? void 0 : t.body), r = et(o), a = s ? [r].concat(r.visualViewport || [], po(o) ? o : []) : o, l = e.concat(a);
  return s ? l : l.concat(xe(Pn(a)));
}
function Tr(n) {
  return ["table", "td", "th"].indexOf(ft(n)) >= 0;
}
function jo(n) {
  return !tt(n) || ot(n).position === "fixed" ? null : n.offsetParent;
}
function Hr(n) {
  var e = /firefox/i.test(Yn()), t = /Trident/i.test(Yn());
  if (t && tt(n)) {
    var o = ot(n);
    if (o.position === "fixed")
      return null;
  }
  var s = Pn(n);
  for (uo(s) && (s = s.host); tt(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || e && r.willChange === "filter" || e && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Tn(n) {
  for (var e = et(n), t = jo(n); t && Tr(t) && ot(t).position === "static"; )
    t = jo(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? e : t || Hr(n) || e;
}
var nt = "top", ht = "bottom", Ot = "right", bt = "left", Hn = "auto", jn = [nt, ht, Ot, bt], he = "start", ke = "end", jr = "clippingParents", Cs = "viewport", ve = "popper", Wr = "reference", Wo = /* @__PURE__ */ jn.reduce(function(n, e) {
  return n.concat([e + "-" + he, e + "-" + ke]);
}, []), Ir = /* @__PURE__ */ [].concat(jn, [Hn]).reduce(function(n, e) {
  return n.concat([e, e + "-" + he, e + "-" + ke]);
}, []), Br = "beforeRead", zr = "read", Ur = "afterRead", Fr = "beforeMain", qr = "main", Vr = "afterMain", Yr = "beforeWrite", Xr = "write", Kr = "afterWrite", Xn = [Br, zr, Ur, Fr, qr, Vr, Yr, Xr, Kr];
function Gr(n) {
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
function Jr(n) {
  var e = Gr(n);
  return Xn.reduce(function(t, o) {
    return t.concat(e.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Zr(n) {
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
var Tt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Qr = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Io = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ti(n) {
  n.forEach(function(e) {
    [].concat(Object.keys(e), Io).filter(function(t, o, s) {
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
          Xn.indexOf(e.phase) < 0 && console.error(xt(Tt, e.name, '"phase"', "either " + Xn.join(", "), '"' + String(e.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + Io.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      e.requires && e.requires.forEach(function(o) {
        n.find(function(s) {
          return s.name === o;
        }) == null && console.error(xt(Qr, String(e.name), o, o));
      });
    });
  });
}
function ei(n, e) {
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
function ni(n) {
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
function oi(n, e) {
  var t = et(n), o = Lt(n), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = xs();
    (f || !f && e === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + ho(n),
    y: c
  };
}
function si(n) {
  var e, t = Lt(n), o = fo(n), s = (e = n.ownerDocument) == null ? void 0 : e.body, r = Vt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Vt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + ho(n), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Vt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function ri(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && uo(t)) {
    var o = e;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Kn(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function ii(n, e) {
  var t = fe(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Bo(n, e, t) {
  return e === Cs ? Kn(oi(n, t)) : Yt(e) ? ii(e, t) : Kn(si(Lt(n)));
}
function ai(n) {
  var e = xe(Pn(n)), t = ["absolute", "fixed"].indexOf(ot(n).position) >= 0, o = t && tt(n) ? Tn(n) : n;
  return Yt(o) ? e.filter(function(s) {
    return Yt(s) && ri(s, o) && ft(s) !== "body";
  }) : [];
}
function li(n, e, t, o) {
  var s = e === "clippingParents" ? ai(n) : [].concat(e), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = Bo(n, f, o);
    return c.top = Vt(i.top, c.top), c.right = rn(i.right, c.right), c.bottom = rn(i.bottom, c.bottom), c.left = Vt(i.left, c.left), c;
  }, Bo(n, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function de(n) {
  return n.split("-")[1];
}
function Ms(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Rs(n) {
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
  var f = s ? Ms(s) : null;
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
function As() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ci(n) {
  return Object.assign({}, As(), n);
}
function ui(n, e) {
  return e.reduce(function(t, o) {
    return t[o] = n, t;
  }, {});
}
function go(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = o === void 0 ? n.placement : o, r = t.strategy, a = r === void 0 ? n.strategy : r, l = t.boundary, c = l === void 0 ? jr : l, f = t.rootBoundary, i = f === void 0 ? Cs : f, g = t.elementContext, d = g === void 0 ? ve : g, u = t.altBoundary, p = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, m = ci(typeof v != "number" ? v : ui(v, jn)), E = d === ve ? Wr : ve, w = n.rects.popper, x = n.elements[p ? E : d], S = li(Yt(x) ? x : x.contextElement || Lt(n.elements.popper), c, i, a), y = fe(n.elements.reference), C = Rs({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), k = Kn(Object.assign({}, w, C)), O = d === ve ? k : y, N = {
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
var zo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", fi = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Uo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function hi(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, o = t === void 0 ? [] : t, s = e.defaultOptions, r = s === void 0 ? Uo : s;
  return function(l, c, f) {
    f === void 0 && (f = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Uo, r),
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
        var w = Jr(ni([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = ei([].concat(w, i.options.modifiers), function($) {
            var B = $.name;
            return B;
          });
          if (ti(x), wt(i.options.placement) === Hn) {
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
          if (!Fo(E, w)) {
            process.env.NODE_ENV !== "production" && console.error(zo);
            return;
          }
          i.rects = {
            reference: Pr(E, Tn(w), i.options.strategy === "fixed"),
            popper: ks(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function($) {
            return i.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var x = 0, S = 0; S < i.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(fi);
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
      update: Zr(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(i);
        });
      }),
      destroy: function() {
        _(), d = !0;
      }
    };
    if (!Fo(l, c))
      return process.env.NODE_ENV !== "production" && console.error(zo), u;
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
var Ue = {
  passive: !0
};
function di(n) {
  var e = n.state, t = n.instance, o = n.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = et(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, Ue);
  }), l && c.addEventListener("resize", t.update, Ue), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, Ue);
    }), l && c.removeEventListener("resize", t.update, Ue);
  };
}
const pi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: di,
  data: {}
};
function gi(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Rs({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const vi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gi,
  data: {}
};
var _i = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mi(n) {
  var e = n.x, t = n.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: ue(e * s) / s || 0,
    y: ue(t * s) / s || 0
  };
}
function qo(n) {
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
    var y = Tn(t), C = "clientHeight", k = "clientWidth";
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
  }, f && _i), B = i === !0 ? mi({
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
function yi(n) {
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
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, qo(Object.assign({}, i, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, qo(Object.assign({}, i, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const bi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: yi,
  data: {}
};
function wi(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var o = e.styles[t] || {}, s = e.attributes[t] || {}, r = e.elements[t];
    !tt(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Ei(n) {
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
const xi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wi,
  effect: Ei,
  requires: ["computeStyles"]
};
var ki = [pi, vi, bi, xi], Gn = /* @__PURE__ */ hi({
  defaultModifiers: ki
});
function Si(n) {
  return n === "x" ? "y" : "x";
}
function Xe(n, e, t) {
  return Vt(n, rn(e, t));
}
function Ci(n, e, t) {
  var o = Xe(n, e, t);
  return o > t ? t : o;
}
function Mi(n) {
  var e = n.state, t = n.options, o = n.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, d = t.tether, u = d === void 0 ? !0 : d, p = t.tetherOffset, _ = p === void 0 ? 0 : p, v = go(e, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), m = wt(e.placement), E = de(e.placement), w = !E, x = Ms(m), S = Si(x), y = e.modifiersData.popperOffsets, C = e.rects.reference, k = e.rects.popper, O = typeof _ == "function" ? _(Object.assign({}, e.rects, {
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
      var z, U = x === "y" ? nt : bt, V = x === "y" ? ht : Ot, q = x === "y" ? "height" : "width", Y = y[x], Xt = Y + v[U], dt = Y - v[V], st = u ? -k[q] / 2 : 0, Kt = E === he ? C[q] : k[q], Et = E === he ? -k[q] : -C[q], Nt = e.elements.arrow, M = u && Nt ? ks(Nt) : {
        width: 0,
        height: 0
      }, L = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : As(), I = L[U], G = L[V], X = Xe(0, C[q], M[q]), pt = w ? C[q] / 2 - st - X - I - N.mainAxis : Kt - X - I - N.mainAxis, Gt = w ? -C[q] / 2 + st + X + G + N.mainAxis : Et + X + G + N.mainAxis, Jt = e.elements.arrow && Tn(e.elements.arrow), Wn = Jt ? x === "y" ? Jt.clientTop || 0 : Jt.clientLeft || 0 : 0, je = (z = $ == null ? void 0 : $[x]) != null ? z : 0, P = Y + pt - je - Wn, We = Y + Gt - je, Dt = Xe(u ? rn(Xt, P) : Xt, Y, u ? Vt(dt, We) : dt);
      y[x] = Dt, B[x] = Dt - Y;
    }
    if (l) {
      var ge, Ie = x === "x" ? nt : bt, Be = x === "x" ? ht : Ot, Pt = y[S], ze = S === "y" ? "height" : "width", yo = Pt + v[Ie], bo = Pt - v[Be], In = [nt, bt].indexOf(m) !== -1, wo = (ge = $ == null ? void 0 : $[S]) != null ? ge : 0, Eo = In ? yo : Pt - C[ze] - k[ze] - wo + N.altAxis, xo = In ? Pt + C[ze] + k[ze] - wo - N.altAxis : bo, ko = u && In ? Ci(Eo, Pt, xo) : Xe(u ? Eo : yo, Pt, u ? xo : bo);
      y[S] = ko, B[S] = ko - Pt;
    }
    e.modifiersData[o] = B;
  }
}
const Jn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Mi,
  requiresIfExists: ["offset"]
};
var Ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ke(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return Ri[e];
  });
}
var Ai = {
  start: "end",
  end: "start"
};
function Vo(n) {
  return n.replace(/start|end/g, function(e) {
    return Ai[e];
  });
}
function $i(n, e) {
  e === void 0 && (e = {});
  var t = e, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? Ir : c, i = de(o), g = i ? l ? Wo : Wo.filter(function(p) {
    return de(p) === i;
  }) : jn, d = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  d.length === 0 && (d = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = d.reduce(function(p, _) {
    return p[_] = go(n, {
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
function Oi(n) {
  if (wt(n) === Hn)
    return [];
  var e = Ke(n);
  return [Vo(n), e, Vo(e)];
}
function Li(n) {
  var e = n.state, t = n.options, o = n.name;
  if (!e.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, d = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = e.options.placement, m = wt(v), E = m === v, w = c || (E || !p ? [Ke(v)] : Oi(v)), x = [v].concat(w).reduce(function(M, L) {
      return M.concat(wt(L) === Hn ? $i(e, {
        placement: L,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: _
      }) : L);
    }, []), S = e.rects.reference, y = e.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, O = x[0], N = 0; N < x.length; N++) {
      var $ = x[N], B = wt($), z = de($) === he, U = [nt, ht].indexOf(B) >= 0, V = U ? "width" : "height", q = go(e, {
        placement: $,
        boundary: i,
        rootBoundary: g,
        altBoundary: d,
        padding: f
      }), Y = U ? z ? Ot : bt : z ? ht : nt;
      S[V] > y[V] && (Y = Ke(Y));
      var Xt = Ke(Y), dt = [];
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
        var I = x.find(function(G) {
          var X = C.get(G);
          if (X)
            return X.slice(0, L).every(function(pt) {
              return pt;
            });
        });
        if (I)
          return O = I, "break";
      }, Et = st; Et > 0; Et--) {
        var Nt = Kt(Et);
        if (Nt === "break")
          break;
      }
    e.placement !== O && (e.modifiersData[o]._skip = !0, e.placement = O, e.reset = !0);
  }
}
const Zn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Li,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $s(n) {
  return n.button === 2;
}
const Ni = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', zn = "show", Ge = "contextmenu";
var It, Q, Bt, oe, $e, zt, Oe, Qn, dn, pn, gn, vn, Os, _n, Ls;
const kt = class extends Ln {
  constructor() {
    super(...arguments);
    b(this, Oe);
    b(this, vn);
    b(this, _n);
    b(this, It, void 0);
    b(this, Q, void 0);
    b(this, Bt, /* @__PURE__ */ new Map());
    b(this, oe, void 0);
    b(this, $e, void 0);
    b(this, zt, void 0);
    b(this, dn, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = h(this, Bt).get(t);
      s || (s = Gn(o.parentElement, o, {
        modifiers: [Jn, Zn],
        placement: "right-start"
      }), h(this, Bt).set(t, s)), s.update();
    });
    b(this, pn, (t) => {
      const o = h(this, Bt).get(t);
      o && (o.destroy(), h(this, Bt).delete(t));
    });
    b(this, gn, (t, o, s, r) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(zn);
  }
  get menu() {
    var s, r;
    if (h(this, It))
      return h(this, It);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Ge), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Ge) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${Ge}`);
      }
    }
    if (o)
      return A(this, It, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return h(this, Q) ? h(this, Q) : T(this, Oe, Qn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || kt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    A(this, $e, t), T(this, vn, Os).call(this, t) !== !1 && (this.menu.classList.add(zn), T(this, Oe, Qn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = h(this, Q)) == null || o.destroy(), A(this, Q, void 0), (s = h(this, It)) == null || s.classList.remove(zn), (a = (r = h(this, zt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = h(this, Q)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && $s(t) || (kt.getAll(), kt.getAll().forEach((o) => o.hide()));
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
It = new WeakMap(), Q = new WeakMap(), Bt = new WeakMap(), oe = new WeakMap(), $e = new WeakMap(), zt = new WeakMap(), Oe = new WeakSet(), Qn = function() {
  const t = {
    modifiers: [Jn, Zn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return h(this, Q) ? h(this, Q).setOptions(t) : A(this, Q, Gn(T(this, _n, Ls).call(this), this.menu, t)), h(this, Q);
}, dn = new WeakMap(), pn = new WeakMap(), gn = new WeakMap(), vn = new WeakSet(), Os = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return h(this, zt) ? h(this, zt).render({ items: o, ...r }) : A(this, zt, new ls(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: h(this, dn),
    beforeDestroy: h(this, pn),
    onRenderItem: h(this, gn)
  })), !0;
}, _n = new WeakSet(), Ls = function() {
  return h(this, oe) || A(this, oe, {
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
  if (e.closest(`.${Ge}`))
    return;
  const t = e.closest(Ni);
  t && Zt.ensure(t).show(n);
});
document.addEventListener("click", Zt.clear);
function Di(n) {
  return (n == null ? void 0 : n.nodeType) !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false";
}
const Pi = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', _e = "show", Yo = "dropdown-menu";
var Ut, _t;
const mn = class extends Ln {
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
        l != null && l.classList.contains(Yo) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Yo}`);
      }
      if (r)
        A(this, Ut, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return h(this, Ut);
  }
  get popper() {
    return h(this, _t) || A(this, _t, Gn(this.element, this.menu, {
      modifiers: [Jn, Zn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), h(this, _t);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && mn.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(_e), this.element.classList.add(_e), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Di(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = h(this, _t)) == null || o.destroy(), A(this, _t, void 0), (s = h(this, Ut)) == null || s.classList.remove(_e), this.element.classList.remove(_e), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = h(this, _t)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && $s(t) || mn.getAll().forEach((o) => o.hide());
  }
};
let Qt = mn;
Ut = new WeakMap(), _t = new WeakMap(), D(Qt, "NAME", "dropdown"), D(Qt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(n) {
  const t = n.target.closest(Pi);
  t ? Qt.ensure(t).toggle() : Qt.clear(n);
});
function Ti(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function vo({ col: n, className: e, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
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
  }], _ = ["dtable-cell-content", e], v = [(C = l != null ? l : (y = o.data) == null ? void 0 : y[n.name]) != null ? C : ""], m = s ? s(v, { row: o, col: n }, R) : v, E = [], w = [], x = {}, S = {};
  return m == null || m.forEach((k) => {
    var O;
    if (typeof k == "object" && k && !us(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const N = k.outer ? E : w;
      k.html ? N.push(/* @__PURE__ */ R("div", {
        className: W("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...(O = k.attrs) != null ? O : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : _).push(k.className), k.children && N.push(k.children), k.attrs && Object.assign(k.outer ? x : S, k.attrs));
    } else
      w.push(k);
  }), /* @__PURE__ */ R("div", {
    className: W(p),
    style: i,
    "data-col": n.name,
    ...f,
    ...x
  }, w.length > 0 && /* @__PURE__ */ R("div", {
    className: W(_),
    style: u,
    ...S
  }, w), E);
}
function Hi({ col: n, children: e, style: t, ...o }) {
  var r;
  const { sortType: s } = n.setting;
  return /* @__PURE__ */ R(vo, {
    col: n,
    style: { ...t, ...n.setting.style },
    "data-sort": s || null,
    "data-type": n.type,
    ...o
  }, (r = n.setting.title) != null ? r : n.setting.name, s && /* @__PURE__ */ R("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), e);
}
function Un({ row: n, className: e, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = vo, onRenderCell: c }) {
  return /* @__PURE__ */ R("div", {
    className: W("dtable-cells", e),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ R(l, {
    key: f.name,
    col: f,
    row: n,
    onRenderCell: c
  }) : null));
}
function Ns({
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
  CellComponent: d = vo,
  onRenderCell: u,
  style: p,
  ..._
}) {
  let v = null;
  s != null && s.length && (v = /* @__PURE__ */ R(Un, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let m = null;
  a != null && a.length && (m = /* @__PURE__ */ R(Un, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  let E = null;
  r != null && r.length && (E = /* @__PURE__ */ R(Un, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: n,
    CellComponent: d,
    onRenderCell: u
  }));
  const w = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ R("div", {
    className: W("dtable-row", e),
    style: w,
    "data-id": n.id,
    ..._
  }, v, m, E);
}
function ji({ height: n, onRenderRow: e, ...t }) {
  const o = {
    height: n,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Hi
  };
  if (e) {
    const s = e({ props: o }, R);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ R(Ns, {
    ...o
  }));
}
function Wi({
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
  return e = { ...e, top: t, height: s }, /* @__PURE__ */ R("div", {
    className: W("dtable-rows", n),
    style: e
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, R);
    return g && Object.assign(i, g), /* @__PURE__ */ R(Ns, {
      ...i
    });
  }));
}
const an = /* @__PURE__ */ new Map(), ln = [];
function Ds(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && an.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  an.set(t, n), (e == null ? void 0 : e.buildIn) && !ln.includes(t) && ln.push(t);
}
function He(n, e) {
  Ds(n, e);
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
function Ps(n) {
  return an.delete(n);
}
function Ii(n) {
  if (typeof n == "string") {
    const e = an.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Ts(n, e, t) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Ii(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Ts(n, s.plugins, t), n.push(s), t.add(s.name));
  }), n;
}
function Bi(n = [], e = !0) {
  return e && ln.length && n.unshift(...ln), n != null && n.length ? Ts([], n, /* @__PURE__ */ new Set()) : [];
}
function Xo() {
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
var Ft, se, Mt, mt, Rt, F, at, lt, re, Le, yt, ie, ae, yn, Hs, bn, js, wn, Ws, En, Is, Ne, eo, xn, kn, De, Pe, Sn, Cn, Mn, Bs, Rn, zs, An, Us;
class to extends qt {
  constructor(t) {
    var o;
    super(t);
    b(this, yn);
    b(this, bn);
    b(this, wn);
    b(this, En);
    b(this, Ne);
    b(this, Mn);
    b(this, Rn);
    b(this, An);
    D(this, "ref", ds());
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
      h(this, Ft) && cancelAnimationFrame(h(this, Ft)), A(this, Ft, requestAnimationFrame(() => {
        A(this, at, void 0), this.forceUpdate(), A(this, Ft, 0);
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
    b(this, xn, (t, o) => {
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
    b(this, kn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), h(this, F).forEach((s) => {
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
    b(this, Sn, (t) => {
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
    b(this, Cn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    A(this, se, (o = t.id) != null ? o : `dtable-${ws(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, A(this, Rt, Object.freeze(Bi(t.plugins))), h(this, Rt).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(h(this, re), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, at)) == null ? void 0 : t.options) || h(this, mt) || Xo();
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
    A(this, mt, void 0);
  }
  componentDidMount() {
    if (h(this, Mt) ? this.forceUpdate() : T(this, Ne, eo).call(this), h(this, F).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", h(this, Sn)), this.on("keydown", h(this, Cn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), A(this, Le, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    h(this, F).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    h(this, Mt) ? T(this, Ne, eo).call(this) : h(this, F).forEach((t) => {
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
    }), A(this, re, {}), h(this, lt).clear();
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
    s === "layout" ? A(this, at, void 0) : s === "options" && (A(this, at, void 0), A(this, mt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    const t = T(this, An, Us).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
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
    }), /* @__PURE__ */ R("div", {
      id: h(this, se),
      className: W(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && T(this, yn, Hs).call(this, t), t && T(this, bn, js).call(this, t), t && T(this, wn, Ws).call(this, t), t && T(this, En, Is).call(this, t));
  }
}
Ft = new WeakMap(), se = new WeakMap(), Mt = new WeakMap(), mt = new WeakMap(), Rt = new WeakMap(), F = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), yt = new WeakMap(), ie = new WeakMap(), ae = new WeakMap(), yn = new WeakSet(), Hs = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(ji, {
      scrollLeft: a,
      height: r,
      onRenderCell: h(this, De),
      onRenderRow: h(this, kn),
      ...s
    });
  let l, c;
  if (typeof o == "function") {
    const f = o(t, this.state);
    typeof f == "object" && f && "__html" in f ? c = f : l = f;
  } else
    l = o;
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: r },
    dangerouslySetInnerHTML: c
  }, l);
}, bn = new WeakSet(), js = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ R(Wi, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: h(this, De),
    onRenderRow: h(this, xn),
    ...l
  });
}, wn = new WeakSet(), Ws = function(t) {
  const { footer: o, footerHeight: s } = t;
  if (!o)
    return null;
  let r, a;
  if (typeof o == "function") {
    const l = o(t, this.state);
    typeof l == "object" && l && "__html" in l ? a = l : r = l;
  } else
    r = o;
  return /* @__PURE__ */ R("div", {
    className: "dtable-footer",
    style: { height: s },
    dangerouslySetInnerHTML: a
  }, r);
}, En = new WeakSet(), Is = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c } = t, { scrollColsWidth: f, scrollWidth: i } = r, { scrollbarSize: g = 12, horzScrollbarPos: d } = this.options;
  return f > i && o.push(
    /* @__PURE__ */ R(To, {
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
    /* @__PURE__ */ R(To, {
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
}, Ne = new WeakSet(), eo = function() {
  var t;
  A(this, Mt, !1), (t = this.options.afterRender) == null || t.call(this), h(this, F).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, xn = new WeakMap(), kn = new WeakMap(), De = new WeakMap(), Pe = new WeakMap(), Sn = new WeakMap(), Cn = new WeakMap(), Mn = new WeakSet(), Bs = function() {
  if (h(this, mt))
    return !1;
  const o = { ...Xo(), ...h(this, Rt).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return A(this, mt, o), A(this, F, h(this, Rt).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), !0;
}, Rn = new WeakSet(), zs = function() {
  var Et, Nt;
  const { plugins: t } = this;
  let o = h(this, mt);
  t.forEach((M) => {
    var I;
    const L = (I = M.beforeLayout) == null ? void 0 : I.call(this, o);
    L && (o = { ...o, ...L });
  });
  const { defaultColWidth: s, minColWidth: r, maxColWidth: a } = o, l = [], c = [], f = [], i = {}, g = [], d = [];
  let u = 0, p = 0, _ = 0;
  o.cols.forEach((M) => {
    if (M.hidden)
      return;
    const {
      name: L,
      type: I = "",
      fixed: G = !1,
      flex: X = !1,
      width: pt = s,
      minWidth: Gt = r,
      maxWidth: Jt = a,
      ...Wn
    } = M, je = Ti(pt, Gt, Jt), P = {
      name: L,
      type: I,
      setting: {
        name: L,
        type: I,
        fixed: G,
        flex: X,
        width: pt,
        minWidth: Gt,
        maxWidth: Jt,
        ...Wn
      },
      flex: G ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: je,
      realWidth: 0,
      visible: !0,
      index: g.length
    };
    t.forEach((We) => {
      var ge, Ie;
      const Dt = (ge = We.colTypes) == null ? void 0 : ge[I];
      if (Dt) {
        const Be = typeof Dt == "function" ? Dt(P) : Dt;
        Be && Object.assign(P.setting, Be);
      }
      (Ie = We.onAddCol) == null || Ie.call(this, P);
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
      m = 0, A(this, Mt, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: w, rowKey: x = "id", rowHeight: S } = o, y = [], C = (M, L, I) => {
    var X, pt;
    const G = { data: I != null ? I : { [x]: M }, id: M, index: y.length, top: 0 };
    if (I || (G.lazy = !0), y.push(G), ((X = o.onAddRow) == null ? void 0 : X.call(this, G, L)) !== !1) {
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
      var I;
      typeof M == "object" ? C(`${(I = M[x]) != null ? I : ""}`, L, M) : C(`${M != null ? M : ""}`, L);
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
      V = 0, A(this, Mt, !0);
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
  }), A(this, at, st);
}, An = new WeakSet(), Us = function() {
  (T(this, Mn, Bs).call(this) || !h(this, at)) && T(this, Rn, zs).call(this);
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
}, D(to, "addPlugin", Ds), D(to, "removePlugin", Ps);
function Ko(n, e) {
  e !== void 0 ? n.data.hoverCol = e : e = n.data.hoverCol;
  const { current: t } = n.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && t.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const Fs = {
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
      Ko(this, o);
    },
    mouseleave() {
      Ko(this, !1);
    }
  }
};
He(Fs, { buildIn: !0 });
function zi(n, e) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (n === void 0 ? (e === void 0 && (e = !qs.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Ui(n) {
  var e;
  return (e = this.state.checkedRows[n]) != null ? e : !1;
}
function qs() {
  var t, o;
  const n = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? n === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : n === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Fi() {
  return Object.keys(this.state.checkedRows);
}
const Vs = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: zi,
    isRowChecked: Ui,
    isAllRowChecked: qs,
    getChecks: Fi
  },
  onRenderCell(n, { row: e, col: t }) {
    var l, c;
    const { id: o } = e, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return n;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ R("input", {
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
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: c
      });
      n.unshift(f), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow({ props: n, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: W(n.className, "is-checked") };
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
He(Vs);
function no(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, o = e.children && t && t[n];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const a = no.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? no.call(this, e.parent).level + 1 : 0, e;
}
function qi(n, e) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !Ys.call(this)), e) {
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
function Ys() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Xs(n, e = 0, t, o = 0) {
  var s;
  t || (t = [...n.keys()]);
  for (const r of t) {
    const a = n.get(r);
    !a || (a.level === o && (a.order = e++), (s = a.children) != null && s.length && (e = Xs(n, e, a.children, o + 1)));
  }
  return e;
}
function Ks(n, e, t, o) {
  const s = n.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, Ks(n, r, t, o);
  }), s;
}
function Gs(n, e, t, o, s) {
  var l;
  const r = n.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[e] = t), r.parent && Gs(n, r.parent, t, o, s);
}
const Js = {
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
        const a = Ks(this, s, r, o);
        a != null && a.parent && Gs(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: qi,
    isAllCollapsed: Ys,
    getNestedRowInfo: no
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
    return n = n.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), Xs(this.data.nestedMap), n.sort((e, t) => {
      var a, l;
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? e.index - t.index : r;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = e.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && n.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, e, s)) != null ? c : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = e.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), n.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var s, r;
    const { id: o } = e;
    return t.setting.nestedToggle && n.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow({ props: n, row: e }) {
    const t = this.getNestedRowInfo(e.id);
    return {
      className: W(n.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: n }) {
    return n.className = W(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
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
He(Js);
const ut = 24 * 60 * 60 * 1e3, J = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), pe = (n, e = new Date()) => (n = J(n), e = J(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate()), oo = (n, e = new Date()) => J(n).getFullYear() === J(e).getFullYear(), Zs = (n, e = new Date()) => (n = J(n), e = J(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Vi = (n, e = new Date()) => {
  n = J(n), e = J(e);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(n.getTime() / t), s = Math.floor(e.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, Yi = (n, e) => pe(J(e), n), Xi = (n, e) => pe(J(e).getTime() - ut, n), Ki = (n, e) => pe(J(e).getTime() + ut, n), Gi = (n, e) => pe(J(e).getTime() - 2 * ut, n), cn = (n, e = "yyyy-MM-dd hh:mm") => {
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
}, Ji = (n, e, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = cn(n, oo(n) ? o.month : o.full);
  if (pe(n, e))
    return s;
  const r = cn(e, oo(n, e) ? Zs(n, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, Zi = (n) => {
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
}, so = (n, e, t = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return n *= 365, so(n, "day", t, o);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, so(n, "day", t, o);
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
const Qs = {
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
        return n[0] = /* @__PURE__ */ R("a", {
          href: r,
          ...s
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, { col: e, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ R("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: o ? o[a] : ""
        }));
        return s ? n.unshift(l) : n[0] = l, n;
      }
    },
    circleProgress: {
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, a = (t - o) / 2, l = t / 2, c = n[0];
        return n[0] = /* @__PURE__ */ R("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ R("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
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
        }), /* @__PURE__ */ R("text", {
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
        return typeof o == "function" ? n[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? n[0] = cn(r, o) : s === "html" ? n[0] = { html: ye(o, r) } : n[0] = ye(o, r), n;
      }
    }
  }
};
He(Qs);
const Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Fs,
  checkable: Vs,
  nested: Js,
  rich: Qs
}, Symbol.toStringTag, { value: "Module" }));
var Te;
class Fe {
  constructor(e, t) {
    D(this, "element");
    D(this, "options");
    b(this, Te, ds());
    this.element = e, this.options = { parent: e, ...t }, this.render();
  }
  get $() {
    return h(this, Te).current;
  }
  render(e) {
    this.options = Object.assign(this.options, e), yr(/* @__PURE__ */ R(to, {
      ref: h(this, Te),
      ...this.options
    }), this.element);
  }
}
Te = new WeakMap(), D(Fe, "NAME", "zui.dtable"), D(Fe, "definePlugin", He), D(Fe, "removePlugin", Ps), D(Fe, "plugins", Qi);
var ct, Z;
class ta {
  constructor(e) {
    b(this, ct, void 0);
    b(this, Z, void 0);
    A(this, ct, e), A(this, Z, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement), this.addActive(h(this, Z).parentElement, h(this, Z)), h(this, Z).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    A(this, Z, h(this, ct)), this.addActive(h(this, Z).parentElement, h(this, Z)), A(this, ct, document.querySelector(`[href='#${h(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, Z).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, Z).getAttribute("id")}']`)), this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement);
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
  n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new ta(n.target).showTarget());
});
function Je(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function ro(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (Je(n) && Je(t))
    for (const o in t)
      Je(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), ro(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return ro(n, ...e);
}
const sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: J,
  isSameDay: pe,
  isSameYear: oo,
  isSameMonth: Zs,
  isSameWeek: Vi,
  isToday: Yi,
  isYesterday: Xi,
  isTomorrow: Ki,
  isDBY: Gi,
  formatDate: cn,
  formatDateSpan: Ji,
  getTimeBeforeDesc: Zi,
  calculateTimestamp: so,
  formatString: ye,
  formatBytes: br,
  convertBytes: wr,
  isObject: Je,
  mergeDeep: ro
}, Symbol.toStringTag, { value: "Module" }));
export {
  oa as Avatar,
  Zt as ContextMenu,
  Fe as DTable,
  Qt as Dropdown,
  ao as EventBus,
  ls as Menu,
  ta as NavTabs,
  To as Scrollbar,
  na as browser,
  Qi as dtablePlugins,
  sa as helpers,
  qn as nativeEvents,
  Sr as store
};
