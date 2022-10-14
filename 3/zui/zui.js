var sr = Object.defineProperty;
var rr = (e, n, t) => n in e ? sr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var D = (e, n, t) => (rr(e, typeof n != "symbol" ? n + "" : n, t), t), In = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (In(e, n, "read from private field"), t ? t.call(e) : n.get(e)), E = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, M = (e, n, t, o) => (In(e, n, "write to private field"), o ? o.call(e, t) : n.set(e, t), t);
var H = (e, n, t) => (In(e, n, "access private method"), t);
const ir = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    n[s] = r;
  }), n;
};
class ar extends HTMLElement {
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
    const t = ir(this);
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
customElements.get("zui-button") || customElements.define("zui-button", ar);
var On, j, Qo, Ze, we, So, Qe = {}, ts = [], lr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function es(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function Y(e, n, t) {
  var o, s, r, a = {};
  for (r in n)
    r == "key" ? o = n[r] : r == "ref" ? s = n[r] : a[r] = n[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? On.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return qe(e, a, o, s, null);
}
function qe(e, n, t, o, s) {
  var r = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Qo : s };
  return s == null && j.vnode != null && j.vnode(r), r;
}
function ns() {
  return { current: null };
}
function Ln(e) {
  return e.children;
}
function Ee(e, n) {
  this.props = e, this.context = n;
}
function ue(e, n) {
  if (n == null)
    return e.__ ? ue(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? ue(e) : null;
}
function os(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return os(e);
  }
}
function Co(e) {
  (!e.__d && (e.__d = !0) && we.push(e) && !tn.__r++ || So !== j.debounceRendering) && ((So = j.debounceRendering) || setTimeout)(tn);
}
function tn() {
  for (var e; tn.__r = we.length; )
    e = we.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), we = [], e.some(function(n) {
      var t, o, s, r, a, l;
      n.__d && (a = (r = (t = n).__v).__e, (l = t.__P) && (o = [], (s = Lt({}, r)).__v = r.__v + 1, oo(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ue(r) : a, r.__h), as(o, r), r.__e != a && os(r)));
    });
}
function ss(e, n, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || ts, m = y.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? qe(null, u, null, null, u) : Array.isArray(u) ? qe(Ln, { children: u }, null, null, null) : u.__b > 0 ? qe(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = y[i]) === null || d && u.key == d.key && u.type === d.type)
        y[i] = void 0;
      else
        for (g = 0; g < m; g++) {
          if ((d = y[g]) && u.key == d.key && u.type === d.type) {
            y[g] = void 0;
            break;
          }
          d = null;
        }
      oo(e, u, d = d || Qe, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = rs(u, c, e) : c = is(e, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != e && (c = ue(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = ue(o, i + 1)), cs(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ls(v[i], v[++i], v[++i]);
}
function rs(e, n, t) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, n = typeof o.type == "function" ? rs(o, n, t) : is(t, o, o, s, o.__e, n));
  return n;
}
function is(e, n, t, o, s, r) {
  var a, l, c;
  if (n.__d !== void 0)
    a = n.__d, n.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function cr(e, n, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in n || en(e, r, null, t[r], o);
  for (r in n)
    s && typeof n[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === n[r] || en(e, r, n[r], t[r], o);
}
function Ro(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || lr.test(n) ? t : t + "px";
}
function en(e, n, t, o, s) {
  var r;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || Ro(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || Ro(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      r = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + r] = t, t ? o || e.addEventListener(n, r ? Mo : Ao, r) : e.removeEventListener(n, r ? Mo : Ao, r);
    else if (n !== "dangerouslySetInnerHTML") {
      if (s)
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
function Ao(e) {
  this.l[e.type + !1](j.event ? j.event(e) : e);
}
function Mo(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function oo(e, n, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, w, x, S, b = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, r = [l]), (f = j.__b) && f(n);
  try {
    t:
      if (typeof b == "function") {
        if (v = n.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = n.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? n.__c = i = new b(v, m) : (n.__c = i = new Ee(v, m), i.constructor = b, i.render = fr), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || n.__v === t.__v) {
            i.props = v, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(C) {
              C && (C.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = n, i.__P = e, w = j.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Lt(Lt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === Ln && f.key == null ? f.props.children : f, ss(e, Array.isArray(S) ? S : [S], n, t, o, s, r, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = ur(t.__e, n, t, o, s, r, a, c);
    (f = j.diffed) && f(n);
  } catch (C) {
    n.__v = null, (c || r != null) && (n.__e = l, n.__h = !!c, r[r.indexOf(l)] = null), j.__e(C, n, t);
  }
}
function as(e, n) {
  j.__c && j.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      j.__e(o, t.__v);
    }
  });
}
function ur(e, n, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = n.props, u = n.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(d);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && e.data === d || (e.data = d);
  else {
    if (r = r && On.call(e.childNodes), f = (g = t.props || Qe).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (cr(e, d, g, s, l), i)
      n.__k = [];
    else if (p = n.props.children, ss(e, Array.isArray(p) ? p : [p], n, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ue(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && es(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && en(e, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && en(e, "checked", p, g.checked, !1));
  }
  return e;
}
function ls(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    j.__e(o, t);
  }
}
function cs(e, n, t) {
  var o, s;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ls(o, null, n)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        j.__e(r, n);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && cs(o[s], n, typeof e.type != "function");
  t || e.__e == null || es(e.__e), e.__e = e.__d = void 0;
}
function fr(e, n, t) {
  return this.constructor(e, t);
}
function hr(e, n, t) {
  var o, s, r;
  j.__ && j.__(e, n), s = (o = typeof t == "function") ? null : t && t.__k || n.__k, r = [], oo(n, e = (!o && t || n).__k = Y(Ln, null, [e]), s || Qe, Qe, n.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : n.firstChild ? On.call(n.childNodes) : null, r, !o && t ? t : s ? s.__e : n.firstChild, o), as(r, e);
}
On = ts.slice, j = { __e: function(e, n, t, o) {
  for (var s, r, a; n = n.__; )
    if ((s = n.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Qo = 0, Ze = function(e) {
  return e != null && e.constructor === void 0;
}, Ee.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, t), this.props)), e && Lt(t, e), e != null && this.__v && (n && this.__h.push(n), Co(this));
}, Ee.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Co(this));
}, Ee.prototype.render = Ln, we = [], tn.__r = 0;
var vt;
class dr {
  constructor(n = "") {
    E(this, vt, void 0);
    typeof n == "object" ? M(this, vt, n) : M(this, vt, document.appendChild(document.createComment(n)));
  }
  on(n, t, o) {
    h(this, vt).addEventListener(n, t, o);
  }
  once(n, t, o) {
    h(this, vt).addEventListener(n, t, { once: !0, ...o });
  }
  off(n, t, o) {
    h(this, vt).removeEventListener(n, t, o);
  }
  emit(n) {
    return h(this, vt).dispatchEvent(n), n;
  }
}
vt = new WeakMap();
const Un = /* @__PURE__ */ new Set([
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
class so extends dr {
  on(n, t, o) {
    super.on(n, t, o);
  }
  off(n, t, o) {
    super.off(n, t, o);
  }
  once(n, t, o) {
    super.once(n, t, o);
  }
  emit(n, t) {
    return typeof n == "string" && (Un.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(so.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (Un.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var _t, Ce, Bt, be;
class $o extends so {
  constructor(t = "", o) {
    super(t);
    E(this, Bt);
    E(this, _t, /* @__PURE__ */ new Map());
    E(this, Ce, void 0);
    M(this, Ce, o == null ? void 0 : o.customEventSuffix);
  }
  on(t, o, s) {
    t = H(this, Bt, be).call(this, t), super.on(t, o, s), h(this, _t).set(o, [t, s]);
  }
  off(t, o, s) {
    t = H(this, Bt, be).call(this, t), super.off(t, o, s), h(this, _t).delete(o);
  }
  once(t, o, s) {
    t = H(this, Bt, be).call(this, t);
    const r = (a) => {
      o(a), h(this, _t).delete(r);
    };
    super.once(t, r, s), h(this, _t).set(r, [t, s]);
  }
  emit(t, o) {
    return typeof t == "string" && (t = H(this, Bt, be).call(this, t)), super.emit(t, o);
  }
  offAll() {
    Array.from(h(this, _t).entries()).forEach(([t, [o, s]]) => {
      super.off(o, t, s);
    }), h(this, _t).clear();
  }
}
_t = new WeakMap(), Ce = new WeakMap(), Bt = new WeakSet(), be = function(t) {
  const o = h(this, Ce);
  return Un.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function pr(e) {
  return Object.fromEntries(Object.entries(e).map(([n, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [n, t];
  }));
}
var At, ne, rt;
class Nn {
  constructor(n, t) {
    E(this, At, void 0);
    E(this, ne, void 0);
    E(this, rt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, M(this, rt, new $o(n, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, At, { ...this.constructor.DEFAULT, ...n instanceof HTMLElement ? pr(n.dataset) : null, ...t }), this.constructor.all.set(n, this), M(this, ne, n), this.init(), h(this, rt).emit("inited", this);
  }
  get options() {
    return h(this, At);
  }
  get element() {
    return h(this, ne);
  }
  get events() {
    return h(this, rt);
  }
  init() {
  }
  setOptions(n) {
    return n && Object.assign(h(this, At), n), h(this, At);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(h(this, ne)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(n, t, o) {
    h(this, rt).on(n, t, o);
  }
  once(n, t, o) {
    h(this, rt).once(n, t, o);
  }
  off(n, t, o) {
    h(this, rt).off(n, t, o);
  }
  emit(n, t) {
    let o = $o.createEvent(n, t);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = h(this, At)[s];
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
    const n = this.NAME;
    if (this.allComponents.has(n))
      return this.allComponents.get(n);
    const t = /* @__PURE__ */ new Map();
    return this.allComponents.set(n, t), t;
  }
  static getAll() {
    return this.all;
  }
  static get(n) {
    return this.all.get(n);
  }
  static ensure(n, t) {
    return this.get(n) || new this(n, t);
  }
}
At = new WeakMap(), ne = new WeakMap(), rt = new WeakMap(), D(Nn, "allComponents", /* @__PURE__ */ new Map());
var Re;
class us extends Nn {
  constructor() {
    super(...arguments);
    E(this, Re, ns());
  }
  get $() {
    return h(this, Re).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    hr(/* @__PURE__ */ Y(o, {
      ref: h(this, Re),
      ...this.setOptions(t)
    }), this.element);
  }
}
Re = new WeakMap();
const P = (...e) => e.map((n) => Array.isArray(n) ? P(...n) : typeof n == "function" ? P(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const o = n[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
function gr(e) {
  const {
    rootClass: n,
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
  } = e;
  return /* @__PURE__ */ Y("li", {
    className: P(n),
    ...t
  }, /* @__PURE__ */ Y("a", {
    className: P("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...d
  }, Ze(c) ? c : typeof c == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${c}`
  }) : null, f, Ze(i) ? i : typeof i == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${i}`
  }) : null), g);
}
function vr({ className: e }) {
  return /* @__PURE__ */ Y("div", {
    class: P("menu-divider", e)
  });
}
function _r({ className: e, title: n, children: t, ...o }) {
  return /* @__PURE__ */ Y("li", {
    class: P("menu-heading", e),
    ...o
  }, n, t);
}
var Ae, fn, fs, Me, hn, dn;
const _o = class extends Ee {
  constructor() {
    super(...arguments);
    E(this, fn);
    D(this, "state", { shownSubs: {} });
    E(this, Ae, ns());
    E(this, Me, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, Y);
      const { afterRender: s, onClickItem: r, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ Y(_o, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: h(this, Me),
        afterRender: s,
        onClickItem: r,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    E(this, hn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    E(this, dn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !1), o.preventDefault());
    });
  }
  get $() {
    return h(this, Ae).current;
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
    return /* @__PURE__ */ Y("menu", {
      class: P(
        "menu",
        t,
        (s != null ? s : u == null ? void 0 : u.some((p) => "icon" in p)) ? "has-icons" : ""
      ),
      ...d,
      ref: h(this, Ae)
    }, u == null ? void 0 : u.map((p, _) => {
      const v = { type: "item", key: _, ...p };
      if (c) {
        const $ = c(this, v, _, Y);
        $ && Object.assign(v, $);
      }
      const { key: y = _, type: m = "item", ...w } = v;
      if (m === "heading")
        return /* @__PURE__ */ Y(_r, {
          ...w,
          key: y
        });
      if (m === "divider")
        return /* @__PURE__ */ Y(vr, {
          ...w,
          key: y
        });
      const { onClick: x, items: S, ...b } = w, C = {
        ...b,
        key: y,
        onClick: H(this, fn, fs).bind(this, v, _, x)
      }, k = S && this.state.shownSubs[y];
      return S && (C.rootClass = P(C.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (C.rootProps = {
        ...C.rootProps,
        onMouseEnter: h(this, hn).bind(this, y),
        onMouseLeave: h(this, dn).bind(this, y)
      })), /* @__PURE__ */ Y(gr, {
        ...C
      }, k && h(this, Me).call(this, v));
    }), r);
  }
};
let Fn = _o;
Ae = new WeakMap(), fn = new WeakSet(), fs = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a(t, o, r), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, Me = new WeakMap(), hn = new WeakMap(), dn = new WeakMap();
class hs extends us {
}
D(hs, "Component", Fn);
var ro, I, ds, ps, xe, Oo, gs = {}, vs = [], mr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function _s(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function A(e, n, t) {
  var o, s, r, a = {};
  for (r in n)
    r == "key" ? o = n[r] : r == "ref" ? s = n[r] : a[r] = n[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ro.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return Ve(e, a, o, s, null);
}
function Ve(e, n, t, o, s) {
  var r = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ds : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function yr() {
  return { current: null };
}
function io(e) {
  return e.children;
}
function Xt(e, n) {
  this.props = e, this.context = n;
}
function fe(e, n) {
  if (n == null)
    return e.__ ? fe(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? fe(e) : null;
}
function ms(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ms(e);
  }
}
function Lo(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !nn.__r++ || Oo !== I.debounceRendering) && ((Oo = I.debounceRendering) || setTimeout)(nn);
}
function nn() {
  for (var e; nn.__r = xe.length; )
    e = xe.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), xe = [], e.some(function(n) {
      var t, o, s, r, a, l;
      n.__d && (a = (r = (t = n).__v).__e, (l = t.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, Es(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? fe(r) : a, r.__h), wr(o, r), r.__e != a && ms(r)));
    });
}
function ys(e, n, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || vs, m = y.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ve(null, u, null, null, u) : Array.isArray(u) ? Ve(io, { children: u }, null, null, null) : u.__b > 0 ? Ve(u.type, u.props, u.key, null, u.__v) : u) != null) {
      if (u.__ = t, u.__b = t.__b + 1, (d = y[i]) === null || d && u.key == d.key && u.type === d.type)
        y[i] = void 0;
      else
        for (g = 0; g < m; g++) {
          if ((d = y[g]) && u.key == d.key && u.type === d.type) {
            y[g] = void 0;
            break;
          }
          d = null;
        }
      Es(e, u, d = d || gs, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = bs(u, c, e) : c = ws(e, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != e && (c = fe(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = fe(o, i + 1)), ks(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      xs(v[i], v[++i], v[++i]);
}
function bs(e, n, t) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, n = typeof o.type == "function" ? bs(o, n, t) : ws(t, o, o, s, o.__e, n));
  return n;
}
function ws(e, n, t, o, s, r) {
  var a, l, c;
  if (n.__d !== void 0)
    a = n.__d, n.__d = void 0;
  else if (t == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, c = 0; (l = l.nextSibling) && c < o.length; c += 2)
          if (l == s)
            break t;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function br(e, n, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in n || on(e, r, null, t[r], o);
  for (r in n)
    s && typeof n[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === n[r] || on(e, r, n[r], t[r], o);
}
function No(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || mr.test(n) ? t : t + "px";
}
function on(e, n, t, o, s) {
  var r;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || No(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || No(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      r = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + r] = t, t ? o || e.addEventListener(n, r ? Po : Do, r) : e.removeEventListener(n, r ? Po : Do, r);
    else if (n !== "dangerouslySetInnerHTML") {
      if (s)
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
function Do(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function Po(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Es(e, n, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, w, x, S, b = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, r = [l]), (f = I.__b) && f(n);
  try {
    t:
      if (typeof b == "function") {
        if (v = n.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = n.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? n.__c = i = new b(v, m) : (n.__c = i = new Xt(v, m), i.constructor = b, i.render = xr), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || n.__v === t.__v) {
            i.props = v, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(C) {
              C && (C.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = n, i.__P = e, w = I.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), S = f != null && f.type === io && f.key == null ? f.props.children : f, ys(e, Array.isArray(S) ? S : [S], n, t, o, s, r, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Er(t.__e, n, t, o, s, r, a, c);
    (f = I.diffed) && f(n);
  } catch (C) {
    n.__v = null, (c || r != null) && (n.__e = l, n.__h = !!c, r[r.indexOf(l)] = null), I.__e(C, n, t);
  }
}
function wr(e, n) {
  I.__c && I.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      I.__e(o, t.__v);
    }
  });
}
function Er(e, n, t, o, s, r, a, l) {
  var c, f, i, g = t.props, d = n.props, u = n.type, p = 0;
  if (u === "svg" && (s = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        e = c, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(d);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, l = !1;
  }
  if (u === null)
    g === d || l && e.data === d || (e.data = d);
  else {
    if (r = r && ro.call(e.childNodes), f = (g = t.props || gs).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (br(e, d, g, s, l), i)
      n.__k = [];
    else if (p = n.props.children, ys(e, Array.isArray(p) ? p : [p], n, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && fe(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && _s(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && on(e, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && on(e, "checked", p, g.checked, !1));
  }
  return e;
}
function xs(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    I.__e(o, t);
  }
}
function ks(e, n, t) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || xs(o, null, n)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, n);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ks(o[s], n, typeof e.type != "function");
  t || e.__e == null || _s(e.__e), e.__e = e.__d = void 0;
}
function xr(e, n, t) {
  return this.constructor(e, t);
}
ro = vs.slice, I = { __e: function(e, n, t, o) {
  for (var s, r, a; n = n.__; )
    if ((s = n.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ds = 0, ps = function(e) {
  return e != null && e.constructor === void 0;
}, Xt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, t), this.props)), e && Nt(t, e), e != null && this.__v && (n && this.__h.push(n), Lo(this));
}, Xt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lo(this));
}, Xt.prototype.render = io, xe = [], nn.__r = 0;
var zt, Ut;
class To extends Xt {
  constructor(t) {
    var o;
    super(t);
    E(this, zt, 0);
    E(this, Ut, null);
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
      o && (h(this, zt) && cancelAnimationFrame(h(this, zt)), M(this, zt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), M(this, zt, 0);
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
    t && (M(this, Ut, typeof t == "string" ? document : t.current), h(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), h(this, Ut) && h(this, Ut).removeEventListener("wheel", this._handleWheel);
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
      className: P("scrollbar", r, {
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
zt = new WeakMap(), Ut = new WeakMap();
function Qt(e, ...n) {
  var t;
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const o = n[0];
    return Object.keys(o).forEach((s) => {
      var a;
      const r = (a = o[s]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < n.length; o++) {
    const s = (t = n[o]) != null ? t : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return e;
}
var ao = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ao || {});
function kr(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / ao[t]).toFixed(n) + t);
}
const Sr = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const o = t[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * ao[o];
};
function Cr(e) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const o = document.createRange();
      return o.selectNodeContents(n), t.removeAllRanges(), t.addRange(o), !0;
    }
  }
  return !1;
}
function Rr(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ar(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const o = t.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Cr,
  domReady: Rr,
  isElementVisible: Ar,
  classes: P
}, Symbol.toStringTag, { value: "Module" }));
function Mr(e, n) {
  if (e == null)
    return [e, void 0];
  typeof n == "string" && (n = n.split("."));
  const t = n.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && n.length; ) {
    let r = n.shift(), a;
    const l = r.indexOf("[");
    if (l > 0 && l < r.length - 1 && r.endsWith("]") && (a = r.substring(l + 1, r.length - 1), r = r.substring(0, l)), o = o[r], s.push(o), a !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(a) : o = o[a], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${a}]", the full path is "${t}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${t}".`);
  return s;
}
function $r(e, n, t) {
  const o = Mr(e, n), s = o[o.length - 1];
  return s === void 0 ? t : s;
}
function Ye(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function sn(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Ye(e) && Ye(t))
    for (const o in t)
      Ye(t[o]) ? (e[o] || Object.assign(e, { [o]: {} }), sn(e[o], t[o])) : Object.assign(e, { [o]: t[o] });
  return sn(e, ...n);
}
var Jo, Zo;
let lo = (Zo = (Jo = document.documentElement.getAttribute("lang")) == null ? void 0 : Jo.toLowerCase()) != null ? Zo : "zh_cn", It;
function Or() {
  return lo;
}
function Lr(e) {
  lo = e.toLowerCase();
}
function Nr(e, n) {
  It || (It = {}), typeof e == "string" && (e = { [e]: n != null ? n : {} }), sn(It, e);
}
function co(e, n, t, o, s) {
  Array.isArray(e) ? It && e.unshift(It) : e = It ? [It, e] : [e], typeof t == "string" && (s = o, o = t, t = void 0);
  const r = s || lo;
  let a;
  for (const l of e) {
    const c = l[r];
    if (!c)
      return;
    if (a = $r(c, n), a !== void 0)
      break;
  }
  return a === void 0 ? o : t ? Qt(a, Array.isArray(t) ? t : [t]) : a;
}
co.addLang = Nr;
co.getCode = Or;
co.setCode = Lr;
let Ss = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var $e, Mt, it, oe, se, Ge;
const mo = class {
  constructor(n, t = "local") {
    E(this, se);
    E(this, $e, void 0);
    E(this, Mt, void 0);
    E(this, it, void 0);
    E(this, oe, void 0);
    M(this, $e, t), M(this, Mt, `ZUI_STORE:${n != null ? n : Ss()}`), M(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, $e);
  }
  get session() {
    return this.type === "session" ? this : (h(this, oe) || M(this, oe, new mo(h(this, Mt), "session")), h(this, oe));
  }
  get(n, t) {
    const o = h(this, it).getItem(H(this, se, Ge).call(this, n));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    h(this, it).setItem(H(this, se, Ge).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    h(this, it).removeItem(H(this, se, Ge).call(this, n));
  }
  each(n) {
    for (let t = 0; t < h(this, it).length; t++) {
      const o = h(this, it).key(t);
      if (o != null && o.startsWith(h(this, Mt))) {
        const s = h(this, it).getItem(o);
        typeof s == "string" && n(o.substring(h(this, Mt).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const n = {};
    return this.each((t, o) => {
      n[t] = o;
    }), n;
  }
};
let rn = mo;
$e = new WeakMap(), Mt = new WeakMap(), it = new WeakMap(), oe = new WeakMap(), se = new WeakSet(), Ge = function(n) {
  return `${h(this, Mt)}:${n}`;
};
const Dr = new rn("DEFAULT");
function Pr(e, n = "local") {
  return new rn(e, n);
}
Object.assign(Dr, { create: Pr });
class da extends Xt {
  render() {
    const { size: n, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ A("img", {
      src: r,
      alt: a
    }) : g = a, typeof n == "number" ? (i.width = n, i.height = n) : typeof n == "string" && f.push(`avatar-${n}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ A("div", {
      className: P(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Tr() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function Hr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function jr(e, n) {
  Tr(), e.classList.add("block"), Ho(e, n), e.onclick = (t) => Wr(t, e), window.addEventListener("resize", () => {
    Ho(e, n);
  });
}
function Cs(e) {
  var n;
  Hr(), (n = e.classList) == null || n.remove("block");
}
function Ho(e, n) {
  const t = e.querySelector(".modal-dialog");
  if (!t)
    return;
  const o = Math.max(0, (window.innerHeight - t.clientHeight) / 2);
  if (n === "fit") {
    t.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (n === "center") {
    t.style.top = `${o}px`;
    return;
  }
  t.style.top = n;
}
function Wr(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Cs(n));
}
function Ir(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const o = Ir(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    jr(s, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Cs(n);
});
function Q(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Jt(e) {
  var n = Q(e).Element;
  return e instanceof n || e instanceof Element;
}
function Z(e) {
  var n = Q(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function uo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Q(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
var Kt = Math.max, an = Math.min, he = Math.round;
function qn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Rs() {
  return !/^((?!chrome|android).)*safari/i.test(qn());
}
function de(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  n && Z(e) && (s = e.offsetWidth > 0 && he(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && he(o.height) / e.offsetHeight || 1);
  var a = Jt(e) ? Q(e) : window, l = a.visualViewport, c = !Rs() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, d = o.height / r;
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
function fo(e) {
  var n = Q(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function Br(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zr(e) {
  return e === Q(e) || !Z(e) ? fo(e) : Br(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Pt(e) {
  return ((Jt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ho(e) {
  return de(Pt(e)).left + fo(e).scrollLeft;
}
function ot(e) {
  return Q(e).getComputedStyle(e);
}
function po(e) {
  var n = ot(e), t = n.overflow, o = n.overflowX, s = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Ur(e) {
  var n = e.getBoundingClientRect(), t = he(n.width) / e.offsetWidth || 1, o = he(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function Fr(e, n, t) {
  t === void 0 && (t = !1);
  var o = Z(n), s = Z(n) && Ur(n), r = Pt(n), a = de(e, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(n) !== "body" || po(r)) && (l = zr(n)), Z(n) ? (c = de(n, !0), c.x += n.clientLeft, c.y += n.clientTop) : r && (c.x = ho(r))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function As(e) {
  var n = de(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function Dn(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (uo(e) ? e.host : null) || Pt(e);
}
function Ms(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Z(e) && po(e) ? e : Ms(Dn(e));
}
function ke(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = Ms(e), s = o === ((t = e.ownerDocument) == null ? void 0 : t.body), r = Q(o), a = s ? [r].concat(r.visualViewport || [], po(o) ? o : []) : o, l = n.concat(a);
  return s ? l : l.concat(ke(Dn(a)));
}
function qr(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function jo(e) {
  return !Z(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function Vr(e) {
  var n = /firefox/i.test(qn()), t = /Trident/i.test(qn());
  if (t && Z(e)) {
    var o = ot(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Dn(e);
  for (uo(s) && (s = s.host); Z(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || n && r.willChange === "filter" || n && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Pn(e) {
  for (var n = Q(e), t = jo(e); t && qr(t) && ot(t).position === "static"; )
    t = jo(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? n : t || Vr(e) || n;
}
var nt = "top", ht = "bottom", Dt = "right", wt = "left", Tn = "auto", Hn = [nt, ht, Dt, wt], pe = "start", Se = "end", Yr = "clippingParents", $s = "viewport", me = "popper", Gr = "reference", Wo = /* @__PURE__ */ Hn.reduce(function(e, n) {
  return e.concat([n + "-" + pe, n + "-" + Se]);
}, []), Xr = /* @__PURE__ */ [].concat(Hn, [Tn]).reduce(function(e, n) {
  return e.concat([n, n + "-" + pe, n + "-" + Se]);
}, []), Kr = "beforeRead", Jr = "read", Zr = "afterRead", Qr = "beforeMain", ti = "main", ei = "afterMain", ni = "beforeWrite", oi = "write", si = "afterWrite", Vn = [Kr, Jr, Zr, Qr, ti, ei, ni, oi, si];
function ri(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    n.set(r.name, r);
  });
  function s(r) {
    t.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(l) {
      if (!t.has(l)) {
        var c = n.get(l);
        c && s(c);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    t.has(r.name) || s(r);
  }), o;
}
function ii(e) {
  var n = ri(e);
  return Vn.reduce(function(t, o) {
    return t.concat(n.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function ai(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function Ct(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, e);
}
var Wt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', li = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Io = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ci(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Io).filter(function(t, o, s) {
      return s.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof n.name != "string" && console.error(Ct(Wt, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Ct(Wt, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Vn.indexOf(n.phase) < 0 && console.error(Ct(Wt, n.name, '"phase"', "either " + Vn.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Ct(Wt, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Ct(Wt, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Ct(Wt, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Ct(Wt, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Io.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      n.requires && n.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Ct(li, String(n.name), o, o));
      });
    });
  });
}
function ui(e, n) {
  var t = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var s = n(o);
    if (!t.has(s))
      return t.add(s), !0;
  });
}
function Et(e) {
  return e.split("-")[0];
}
function fi(e) {
  var n = e.reduce(function(t, o) {
    var s = t[o.name];
    return t[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}
function hi(e, n) {
  var t = Q(e), o = Pt(e), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = Rs();
    (f || !f && n === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + ho(e),
    y: c
  };
}
function di(e) {
  var n, t = Pt(e), o = fo(e), s = (n = e.ownerDocument) == null ? void 0 : n.body, r = Kt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Kt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + ho(e), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Kt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function pi(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && uo(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Yn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gi(e, n) {
  var t = de(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Bo(e, n, t) {
  return n === $s ? Yn(hi(e, t)) : Jt(n) ? gi(n, t) : Yn(di(Pt(e)));
}
function vi(e) {
  var n = ke(Dn(e)), t = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, o = t && Z(e) ? Pn(e) : e;
  return Jt(o) ? n.filter(function(s) {
    return Jt(s) && pi(s, o) && ft(s) !== "body";
  }) : [];
}
function _i(e, n, t, o) {
  var s = n === "clippingParents" ? vi(e) : [].concat(n), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = Bo(e, f, o);
    return c.top = Kt(i.top, c.top), c.right = an(i.right, c.right), c.bottom = an(i.bottom, c.bottom), c.left = Kt(i.left, c.left), c;
  }, Bo(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ge(e) {
  return e.split("-")[1];
}
function Os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ls(e) {
  var n = e.reference, t = e.element, o = e.placement, s = o ? Et(o) : null, r = o ? ge(o) : null, a = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, c;
  switch (s) {
    case nt:
      c = {
        x: a,
        y: n.y - t.height
      };
      break;
    case ht:
      c = {
        x: a,
        y: n.y + n.height
      };
      break;
    case Dt:
      c = {
        x: n.x + n.width,
        y: l
      };
      break;
    case wt:
      c = {
        x: n.x - t.width,
        y: l
      };
      break;
    default:
      c = {
        x: n.x,
        y: n.y
      };
  }
  var f = s ? Os(s) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (r) {
      case pe:
        c[f] = c[f] - (n[i] / 2 - t[i] / 2);
        break;
      case Se:
        c[f] = c[f] + (n[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function Ns() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mi(e) {
  return Object.assign({}, Ns(), e);
}
function yi(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function go(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, s = o === void 0 ? e.placement : o, r = t.strategy, a = r === void 0 ? e.strategy : r, l = t.boundary, c = l === void 0 ? Yr : l, f = t.rootBoundary, i = f === void 0 ? $s : f, g = t.elementContext, d = g === void 0 ? me : g, u = t.altBoundary, p = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, y = mi(typeof v != "number" ? v : yi(v, Hn)), m = d === me ? Gr : me, w = e.rects.popper, x = e.elements[p ? m : d], S = _i(Jt(x) ? x : x.contextElement || Pt(e.elements.popper), c, i, a), b = de(e.elements.reference), C = Ls({
    reference: b,
    element: w,
    strategy: "absolute",
    placement: s
  }), k = Yn(Object.assign({}, w, C)), $ = d === me ? k : b, L = {
    top: S.top - $.top + y.top,
    bottom: $.bottom - S.bottom + y.bottom,
    left: S.left - $.left + y.left,
    right: $.right - S.right + y.right
  }, O = e.modifiersData.offset;
  if (d === me && O) {
    var U = O[s];
    Object.keys(L).forEach(function(B) {
      var tt = [Dt, ht].indexOf(B) >= 0 ? 1 : -1, F = [nt, ht].indexOf(B) >= 0 ? "y" : "x";
      L[B] += U[F] * tt;
    });
  }
  return L;
}
var zo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", bi = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Uo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fo() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function wi(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, s = n.defaultOptions, r = s === void 0 ? Uo : s;
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
      setOptions: function(y) {
        var m = typeof y == "function" ? y(i.options) : y;
        _(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: Jt(l) ? ke(l) : l.contextElement ? ke(l.contextElement) : [],
          popper: ke(c)
        };
        var w = ii(fi([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = ui([].concat(w, i.options.modifiers), function(O) {
            var U = O.name;
            return U;
          });
          if (ci(x), Et(i.options.placement) === Tn) {
            var S = i.orderedModifiers.find(function(O) {
              var U = O.name;
              return U === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ot(c), C = b.marginTop, k = b.marginRight, $ = b.marginBottom, L = b.marginLeft;
          [C, k, $, L].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), u.update();
      },
      forceUpdate: function() {
        if (!d) {
          var y = i.elements, m = y.reference, w = y.popper;
          if (!Fo(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(zo);
            return;
          }
          i.rects = {
            reference: Fr(m, Pn(w), i.options.strategy === "fixed"),
            popper: As(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var x = 0, S = 0; S < i.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(bi);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, S = -1;
              continue;
            }
            var b = i.orderedModifiers[S], C = b.fn, k = b.options, $ = k === void 0 ? {} : k, L = b.name;
            typeof C == "function" && (i = C({
              state: i,
              options: $,
              name: L,
              instance: u
            }) || i);
          }
        }
      },
      update: ai(function() {
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
        var y = v.name, m = v.options, w = m === void 0 ? {} : m, x = v.effect;
        if (typeof x == "function") {
          var S = x({
            state: i,
            name: y,
            instance: u,
            options: w
          }), b = function() {
          };
          g.push(S || b);
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
function Ei(e) {
  var n = e.state, t = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = Q(n.elements.popper), f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, Ue);
  }), l && c.addEventListener("resize", t.update, Ue), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, Ue);
    }), l && c.removeEventListener("resize", t.update, Ue);
  };
}
const xi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ei,
  data: {}
};
function ki(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = Ls({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Si = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ki,
  data: {}
};
var Ci = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ri(e) {
  var n = e.x, t = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: he(n * s) / s || 0,
    y: he(t * s) / s || 0
  };
}
function qo(e) {
  var n, t = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, f = e.adaptive, i = e.roundOffsets, g = e.isFixed, d = a.x, u = d === void 0 ? 0 : d, p = a.y, _ = p === void 0 ? 0 : p, v = typeof i == "function" ? i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  u = v.x, _ = v.y;
  var y = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), w = wt, x = nt, S = window;
  if (f) {
    var b = Pn(t), C = "clientHeight", k = "clientWidth";
    if (b === Q(t) && (b = Pt(t), ot(b).position !== "static" && l === "absolute" && (C = "scrollHeight", k = "scrollWidth")), b = b, s === nt || (s === wt || s === Dt) && r === Se) {
      x = ht;
      var $ = g && b === S && S.visualViewport ? S.visualViewport.height : b[C];
      _ -= $ - o.height, _ *= c ? 1 : -1;
    }
    if (s === wt || (s === nt || s === ht) && r === Se) {
      w = Dt;
      var L = g && b === S && S.visualViewport ? S.visualViewport.width : b[k];
      u -= L - o.width, u *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, f && Ci), U = i === !0 ? Ri({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  if (u = U.x, _ = U.y, c) {
    var B;
    return Object.assign({}, O, (B = {}, B[x] = m ? "0" : "", B[w] = y ? "0" : "", B.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + _ + "px)" : "translate3d(" + u + "px, " + _ + "px, 0)", B));
  }
  return Object.assign({}, O, (n = {}, n[x] = m ? _ + "px" : "", n[w] = y ? u + "px" : "", n.transform = "", n));
}
function Ai(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, s = o === void 0 ? !0 : o, r = t.adaptive, a = r === void 0 ? !0 : r, l = t.roundOffsets, c = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(n.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return f.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: Et(n.placement),
    variation: ge(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: s,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, qo(Object.assign({}, i, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, qo(Object.assign({}, i, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Mi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ai,
  data: {}
};
function $i(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, s = n.attributes[t] || {}, r = n.elements[t];
    !Z(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Oi(e) {
  var n = e.state, t = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow), function() {
    Object.keys(n.elements).forEach(function(o) {
      var s = n.elements[o], r = n.attributes[o] || {}, a = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), l = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !Z(s) || !ft(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
const Li = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $i,
  effect: Oi,
  requires: ["computeStyles"]
};
var Ni = [xi, Si, Mi, Li], Gn = /* @__PURE__ */ wi({
  defaultModifiers: Ni
});
function Di(e) {
  return e === "x" ? "y" : "x";
}
function Xe(e, n, t) {
  return Kt(e, an(n, t));
}
function Pi(e, n, t) {
  var o = Xe(e, n, t);
  return o > t ? t : o;
}
function Ti(e) {
  var n = e.state, t = e.options, o = e.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, d = t.tether, u = d === void 0 ? !0 : d, p = t.tetherOffset, _ = p === void 0 ? 0 : p, v = go(n, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), y = Et(n.placement), m = ge(n.placement), w = !m, x = Os(y), S = Di(x), b = n.modifiersData.popperOffsets, C = n.rects.reference, k = n.rects.popper, $ = typeof _ == "function" ? _(Object.assign({}, n.rects, {
    placement: n.placement
  })) : _, L = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), O = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (r) {
      var B, tt = x === "y" ? nt : wt, F = x === "y" ? ht : Dt, W = x === "y" ? "height" : "width", G = b[x], xt = G + v[tt], dt = G - v[F], Zt = u ? -k[W] / 2 : 0, pt = m === pe ? C[W] : k[W], kt = m === pe ? -k[W] : -C[W], Tt = n.elements.arrow, gt = u && Tt ? As(Tt) : {
        width: 0,
        height: 0
      }, R = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : Ns(), N = R[tt], z = R[F], q = Xe(0, C[W], gt[W]), et = w ? C[W] / 2 - Zt - q - N - L.mainAxis : pt - q - N - L.mainAxis, Ht = w ? -C[W] / 2 + Zt + q + z + L.mainAxis : kt + q + z + L.mainAxis, St = n.elements.arrow && Pn(n.elements.arrow), je = St ? x === "y" ? St.clientTop || 0 : St.clientLeft || 0 : 0, We = (B = O == null ? void 0 : O[x]) != null ? B : 0, jn = G + et - We - je, T = G + Ht - We, _e = Xe(u ? an(xt, jn) : xt, G, u ? Kt(dt, T) : dt);
      b[x] = _e, U[x] = _e - G;
    }
    if (l) {
      var jt, Ie = x === "x" ? nt : wt, Be = x === "x" ? ht : Dt, st = b[S], ze = S === "y" ? "height" : "width", yo = st + v[Ie], bo = st - v[Be], Wn = [nt, wt].indexOf(y) !== -1, wo = (jt = O == null ? void 0 : O[S]) != null ? jt : 0, Eo = Wn ? yo : st - C[ze] - k[ze] - wo + L.altAxis, xo = Wn ? st + C[ze] + k[ze] - wo - L.altAxis : bo, ko = u && Wn ? Pi(Eo, st, xo) : Xe(u ? Eo : yo, st, u ? xo : bo);
      b[S] = ko, U[S] = ko - st;
    }
    n.modifiersData[o] = U;
  }
}
const Xn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ti,
  requiresIfExists: ["offset"]
};
var Hi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ke(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Hi[n];
  });
}
var ji = {
  start: "end",
  end: "start"
};
function Vo(e) {
  return e.replace(/start|end/g, function(n) {
    return ji[n];
  });
}
function Wi(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? Xr : c, i = ge(o), g = i ? l ? Wo : Wo.filter(function(p) {
    return ge(p) === i;
  }) : Hn, d = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  d.length === 0 && (d = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = d.reduce(function(p, _) {
    return p[_] = go(e, {
      placement: _,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[Et(_)], p;
  }, {});
  return Object.keys(u).sort(function(p, _) {
    return u[p] - u[_];
  });
}
function Ii(e) {
  if (Et(e) === Tn)
    return [];
  var n = Ke(e);
  return [Vo(e), n, Vo(n)];
}
function Bi(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, d = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = n.options.placement, y = Et(v), m = y === v, w = c || (m || !p ? [Ke(v)] : Ii(v)), x = [v].concat(w).reduce(function(gt, R) {
      return gt.concat(Et(R) === Tn ? Wi(n, {
        placement: R,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: _
      }) : R);
    }, []), S = n.rects.reference, b = n.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, $ = x[0], L = 0; L < x.length; L++) {
      var O = x[L], U = Et(O), B = ge(O) === pe, tt = [nt, ht].indexOf(U) >= 0, F = tt ? "width" : "height", W = go(n, {
        placement: O,
        boundary: i,
        rootBoundary: g,
        altBoundary: d,
        padding: f
      }), G = tt ? B ? Dt : wt : B ? ht : nt;
      S[F] > b[F] && (G = Ke(G));
      var xt = Ke(G), dt = [];
      if (r && dt.push(W[U] <= 0), l && dt.push(W[G] <= 0, W[xt] <= 0), dt.every(function(gt) {
        return gt;
      })) {
        $ = O, k = !1;
        break;
      }
      C.set(O, dt);
    }
    if (k)
      for (var Zt = p ? 3 : 1, pt = function(R) {
        var N = x.find(function(z) {
          var q = C.get(z);
          if (q)
            return q.slice(0, R).every(function(et) {
              return et;
            });
        });
        if (N)
          return $ = N, "break";
      }, kt = Zt; kt > 0; kt--) {
        var Tt = pt(kt);
        if (Tt === "break")
          break;
      }
    n.placement !== $ && (n.modifiersData[o]._skip = !0, n.placement = $, n.reset = !0);
  }
}
const Kn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ds(e) {
  return e.button === 2;
}
const zi = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Bn = "show", Je = "contextmenu";
var Ft, J, qt, re, Oe, Vt, Le, Jn, pn, gn, vn, _n, Ps, mn, Ts;
const Rt = class extends Nn {
  constructor() {
    super(...arguments);
    E(this, Le);
    E(this, _n);
    E(this, mn);
    E(this, Ft, void 0);
    E(this, J, void 0);
    E(this, qt, /* @__PURE__ */ new Map());
    E(this, re, void 0);
    E(this, Oe, void 0);
    E(this, Vt, void 0);
    E(this, pn, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = h(this, qt).get(t);
      s || (s = Gn(o.parentElement, o, {
        modifiers: [Xn, Kn],
        placement: "right-start"
      }), h(this, qt).set(t, s)), s.update();
    });
    E(this, gn, (t) => {
      const o = h(this, qt).get(t);
      o && (o.destroy(), h(this, qt).delete(t));
    });
    E(this, vn, (t, o, s, r) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Bn);
  }
  get menu() {
    var s, r;
    if (h(this, Ft))
      return h(this, Ft);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Je), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Je) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${Je}`);
      }
    }
    if (o)
      return M(this, Ft, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return h(this, J) ? h(this, J) : H(this, Le, Jn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || Rt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    M(this, Oe, t), H(this, _n, Ps).call(this, t) !== !1 && (this.menu.classList.add(Bn), H(this, Le, Jn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = h(this, J)) == null || o.destroy(), M(this, J, void 0), (s = h(this, Ft)) == null || s.classList.remove(Bn), (a = (r = h(this, Vt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = h(this, J)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ds(t) || (Rt.getAll(), Rt.getAll().forEach((o) => o.hide()));
  }
  static show(t) {
    const { event: o, ...s } = t, r = Rt.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const t = Rt.get(document.body);
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
let te = Rt;
Ft = new WeakMap(), J = new WeakMap(), qt = new WeakMap(), re = new WeakMap(), Oe = new WeakMap(), Vt = new WeakMap(), Le = new WeakSet(), Jn = function() {
  const t = {
    modifiers: [Xn, Kn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return h(this, J) ? h(this, J).setOptions(t) : M(this, J, Gn(H(this, mn, Ts).call(this), this.menu, t)), h(this, J);
}, pn = new WeakMap(), gn = new WeakMap(), vn = new WeakMap(), _n = new WeakSet(), Ps = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return h(this, Vt) ? h(this, Vt).render({ items: o, ...r }) : M(this, Vt, new hs(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: h(this, pn),
    beforeDestroy: h(this, gn),
    onRenderItem: h(this, vn)
  })), !0;
}, mn = new WeakSet(), Ts = function() {
  return h(this, re) || M(this, re, {
    getBoundingClientRect: () => {
      const { clientX: t, clientY: o } = h(this, Oe) || Rt.mousePos;
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
  }), h(this, re);
}, D(te, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(te, "watchedMouse", !1);
document.addEventListener("contextmenu", (e) => {
  const n = e.target;
  if (n.closest(`.${Je}`))
    return;
  const t = n.closest(zi);
  t && te.ensure(t).show(e);
});
document.addEventListener("click", te.clear);
function Ui(e) {
  return (e == null ? void 0 : e.nodeType) !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false";
}
const Fi = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', ye = "show", Yo = "dropdown-menu";
var Yt, mt;
const yn = class extends Nn {
  constructor() {
    super(...arguments);
    E(this, Yt, void 0);
    E(this, mt, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(ye);
  }
  get menu() {
    var t, o;
    if (!h(this, Yt)) {
      const { element: s } = this;
      let r;
      const a = (t = s.getAttribute("href")) != null ? t : s.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = s.nextElementSibling;
        l != null && l.classList.contains(Yo) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Yo}`);
      }
      if (r)
        M(this, Yt, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return h(this, Yt);
  }
  get popper() {
    return h(this, mt) || M(this, mt, Gn(this.element, this.menu, {
      modifiers: [Xn, Kn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), h(this, mt);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && yn.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(ye), this.element.classList.add(ye), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Ui(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = h(this, mt)) == null || o.destroy(), M(this, mt, void 0), (s = h(this, Yt)) == null || s.classList.remove(ye), this.element.classList.remove(ye), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = h(this, mt)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ds(t) || yn.getAll().forEach((o) => o.hide());
  }
};
let ee = yn;
Yt = new WeakMap(), mt = new WeakMap(), D(ee, "NAME", "dropdown"), D(ee, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(e) {
  const t = e.target.closest(Fi);
  t ? ee.ensure(t).toggle() : ee.clear(e);
});
function qi(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function vo({ col: e, className: n, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
  var b, C;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...a
  }, { align: g, border: d } = e.setting, u = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", c, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], _ = ["dtable-cell-content", n], v = [(C = l != null ? l : (b = o.data) == null ? void 0 : b[e.name]) != null ? C : ""], y = s ? s(v, { row: o, col: e }, A) : v, m = [], w = [], x = {}, S = {};
  return y == null || y.forEach((k) => {
    var $;
    if (typeof k == "object" && k && !ps(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const L = k.outer ? m : w;
      k.html ? L.push(/* @__PURE__ */ A("div", {
        className: P("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...($ = k.attrs) != null ? $ : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : _).push(k.className), k.children && L.push(k.children), k.attrs && Object.assign(k.outer ? x : S, k.attrs));
    } else
      w.push(k);
  }), /* @__PURE__ */ A("div", {
    className: P(p),
    style: i,
    "data-col": e.name,
    ...f,
    ...x
  }, w.length > 0 && /* @__PURE__ */ A("div", {
    className: P(_),
    style: u,
    ...S
  }, w), m);
}
function Vi({ col: e, children: n, style: t, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ A(vo, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ A("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), n);
}
function zn({ row: e, className: n, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = vo, onRenderCell: c }) {
  return /* @__PURE__ */ A("div", {
    className: P("dtable-cells", n),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ A(l, {
    key: f.name,
    col: f,
    row: e,
    onRenderCell: c
  }) : null));
}
function Hs({
  row: e,
  className: n,
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
  s != null && s.length && (v = /* @__PURE__ */ A(zn, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  let y = null;
  a != null && a.length && (y = /* @__PURE__ */ A(zn, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ A(zn, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  const w = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ A("div", {
    className: P("dtable-row", n),
    style: w,
    "data-id": e.id,
    ..._
  }, v, y, m);
}
function Yi({ height: e, onRenderRow: n, ...t }) {
  const o = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Vi
  };
  if (n) {
    const s = n({ props: o }, A);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ A("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ A(Hs, {
    ...o
  }));
}
function Gi({
  className: e,
  style: n,
  top: t,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: a,
  onRenderRow: l,
  ...c
}) {
  return n = { ...n, top: t, height: s }, /* @__PURE__ */ A("div", {
    className: P("dtable-rows", e),
    style: n
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, A);
    return g && Object.assign(i, g), /* @__PURE__ */ A(Hs, {
      ...i
    });
  }));
}
const ln = /* @__PURE__ */ new Map(), cn = [];
function js(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && ln.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  ln.set(t, e), (n == null ? void 0 : n.buildIn) && !cn.includes(t) && cn.push(t);
}
function He(e, n) {
  js(e, n);
  const t = (o) => {
    if (!o)
      return e;
    const { defaultOptions: s, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return t.plugin = e, t;
}
function Ws(e) {
  return ln.delete(e);
}
function Xi(e) {
  if (typeof e == "string") {
    const n = ln.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Is(e, n, t) {
  return n.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Xi(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Is(e, s.plugins, t), e.push(s), t.add(s.name));
  }), e;
}
function Ki(e = [], n = !0) {
  return n && cn.length && e.unshift(...cn), e != null && e.length ? Is([], e, /* @__PURE__ */ new Set()) : [];
}
function Go() {
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
function Ji(e) {
  const {
    tag: n,
    className: t,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: a,
    generators: l,
    onGenerate: c,
    onRenderItem: f,
    ...i
  } = e, g = [t], d = { ...o }, u = [], p = [];
  return s.forEach((_) => {
    var y;
    const v = [];
    typeof _ == "string" && l && l[_] && (_ = l[_]), typeof _ == "function" ? c ? v.push(...c.call(a, _, u, ...r)) : v.push(...(y = _.call(a, u, ...r)) != null ? y : []) : v.push(_), v.forEach((m) => {
      var w;
      m != null && (typeof m == "object" && !Ze(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? u.push(
        /* @__PURE__ */ Y("div", {
          className: P(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? p.push(m.__html) : (m.style && Object.assign(d, m.style), m.className && g.push(m.className), m.children && u.push(m.children), m.attrs && Object.assign(i, m.attrs)) : u.push(m));
    });
  }), p.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: P(g),
    style: d,
    ...i
  }, u];
}
function Xo({
  tag: e = "div",
  ...n
}) {
  const [t, o] = Ji(n);
  return Y(e, t, ...o);
}
var Gt, ie, $t, yt, Ot, V, at, lt, ae, Ne, bt, le, ce, bn, Bs, wn, zs, En, Us, xn, Fs, De, Qn, kn, Sn, Pe, Te, Cn, Rn, An, qs, Mn, Vs, $n, Ys;
class Zn extends Xt {
  constructor(t) {
    var o;
    super(t);
    E(this, bn);
    E(this, wn);
    E(this, En);
    E(this, xn);
    E(this, De);
    E(this, An);
    E(this, Mn);
    E(this, $n);
    D(this, "ref", yr());
    E(this, Gt, 0);
    E(this, ie, void 0);
    E(this, $t, !1);
    E(this, yt, void 0);
    E(this, Ot, void 0);
    E(this, V, []);
    E(this, at, void 0);
    E(this, lt, /* @__PURE__ */ new Map());
    E(this, ae, {});
    E(this, Ne, void 0);
    D(this, "updateLayout", () => {
      h(this, Gt) && cancelAnimationFrame(h(this, Gt)), M(this, Gt, requestAnimationFrame(() => {
        M(this, at, void 0), this.forceUpdate(), M(this, Gt, 0);
      }));
    });
    E(this, bt, (t, o) => {
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
    E(this, le, (t) => {
      h(this, bt).call(this, t, `window_${t.type}`);
    });
    E(this, ce, (t) => {
      h(this, bt).call(this, t, `document_${t.type}`);
    });
    E(this, kn, (t, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, t, o);
        s && Object.assign(t.props, s);
      }
      return h(this, V).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, t, o);
          r && Object.assign(t.props, r);
        }
      }), t.props;
    });
    E(this, Sn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), h(this, V).forEach((s) => {
      s.onRenderHeaderRow && (t.props = s.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    E(this, Pe, (t, o, s) => {
      const { row: r, col: a } = o;
      t[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, s)), this.options[l] && (t = this.options[l].call(this, t, o, s)), h(this, V).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, s));
      }), t;
    });
    E(this, Te, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    E(this, Cn, (t) => {
      var l, c, f, i, g;
      const o = this.getPointerInfo(t);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: r, element: a }), h(this, V).forEach((d) => {
          var u;
          (u = d.onHeaderCellClick) == null || u.call(this, t, { colName: r, element: a });
        }));
      else {
        const { rowElement: d } = o, u = this.layout.visibleRows.find((p) => p.id === s);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
            return;
          for (const p of h(this, V))
            if (((f = p.onCellClick) == null ? void 0 : f.call(this, t, { colName: r, rowID: s, rowInfo: u, element: a, rowElement: d })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
          return;
        for (const p of h(this, V))
          if (((g = p.onRowClick) == null ? void 0 : g.call(this, t, { rowID: s, rowInfo: u, element: d })) === !0)
            return;
      }
    });
    E(this, Rn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    M(this, ie, (o = t.id) != null ? o : `dtable-${Ss(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, M(this, Ot, Object.freeze(Ki(t.plugins))), h(this, Ot).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(h(this, ae), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, at)) == null ? void 0 : t.options) || h(this, yt) || Go();
  }
  get plugins() {
    return h(this, V);
  }
  get layout() {
    return h(this, at);
  }
  get id() {
    return h(this, ie);
  }
  get data() {
    return h(this, ae);
  }
  get parent() {
    var t, o;
    return (o = this.props.parent) != null ? o : (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  componentWillReceiveProps() {
    M(this, yt, void 0);
  }
  componentDidMount() {
    if (h(this, $t) ? this.forceUpdate() : H(this, De, Qn).call(this), h(this, V).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", h(this, Cn)), this.on("keydown", h(this, Rn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), M(this, Ne, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    h(this, V).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    h(this, $t) ? H(this, De, Qn).call(this) : h(this, V).forEach((t) => {
      var o;
      (o = t.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = h(this, Ne)) == null || o.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of h(this, lt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), h(this, le)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), h(this, ce)) : t.removeEventListener(s, h(this, bt));
    h(this, V).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), h(this, Ot).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), M(this, ae, {}), h(this, lt).clear();
  }
  on(t, o, s) {
    var a;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    r ? r.push(o) : (h(this, lt).set(t, [o]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), h(this, le)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), h(this, ce)) : (a = this.ref.current) == null || a.addEventListener(t, h(this, bt)));
  }
  off(t, o, s) {
    var l;
    s && (t = `${s}_${t}`);
    const r = h(this, lt).get(t);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (h(this, lt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), h(this, le)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), h(this, ce)) : (l = this.ref.current) == null || l.removeEventListener(t, h(this, bt)));
  }
  emitCustomEvent(t, o) {
    h(this, bt).call(this, o instanceof Event ? o : new CustomEvent(t, { detail: o }), t);
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
    s === "layout" ? M(this, at, void 0) : s === "options" && (M(this, at, void 0), M(this, yt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
    const t = H(this, $n, Ys).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((u = t == null ? void 0 : t.scrollTop) != null ? u : 0) > 0,
      "scrollbar-hover": f
    }], d = [];
    return t && h(this, V).forEach((p) => {
      var v;
      const _ = (v = p.onRender) == null ? void 0 : v.call(this, t);
      !_ || (_.style && Object.assign(i, _.style), _.className && g.push(_.className), _.children && d.push(_.children));
    }), /* @__PURE__ */ A("div", {
      id: h(this, ie),
      className: P(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && H(this, bn, Bs).call(this, t), t && H(this, wn, zs).call(this, t), t && H(this, En, Us).call(this, t), t && H(this, xn, Fs).call(this, t));
  }
}
Gt = new WeakMap(), ie = new WeakMap(), $t = new WeakMap(), yt = new WeakMap(), Ot = new WeakMap(), V = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), ae = new WeakMap(), Ne = new WeakMap(), bt = new WeakMap(), le = new WeakMap(), ce = new WeakMap(), bn = new WeakSet(), Bs = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ A(Yi, {
      scrollLeft: a,
      height: r,
      onRenderCell: h(this, Pe),
      onRenderRow: h(this, Sn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(Xo, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [t],
    generatorThis: this
  });
}, wn = new WeakSet(), zs = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ A(Gi, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: h(this, Pe),
    onRenderRow: h(this, kn),
    ...l
  });
}, En = new WeakSet(), Us = function(t) {
  const { footer: o } = t;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ A(Xo, {
    className: "dtable-footer",
    style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
    renders: s,
    generateArgs: [t],
    generatorThis: this,
    generators: t.footerGenerators
  });
}, xn = new WeakSet(), Fs = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c, footerHeight: f } = t, { scrollColsWidth: i, scrollWidth: g } = r, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return i > g && o.push(
    /* @__PURE__ */ A(To, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: g,
      onScroll: h(this, Te),
      left: r.fixedLeftWidth,
      bottom: (u === "inside" ? 0 : -d) + f,
      size: d,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ A(To, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: h(this, Te),
      right: 0,
      size: d,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, De = new WeakSet(), Qn = function() {
  var t;
  M(this, $t, !1), (t = this.options.afterRender) == null || t.call(this), h(this, V).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, kn = new WeakMap(), Sn = new WeakMap(), Pe = new WeakMap(), Te = new WeakMap(), Cn = new WeakMap(), Rn = new WeakMap(), An = new WeakSet(), qs = function() {
  if (h(this, yt))
    return !1;
  const o = { ...Go(), ...h(this, Ot).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return M(this, yt, o), M(this, V, h(this, Ot).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), !0;
}, Mn = new WeakSet(), Vs = function() {
  var Tt, gt;
  const { plugins: t } = this;
  let o = h(this, yt);
  const s = {
    flex: /* @__PURE__ */ A("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ A("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  t.forEach((R) => {
    var z;
    const N = (z = R.beforeLayout) == null ? void 0 : z.call(this, o);
    N && (o = { ...o, ...N }), Object.assign(s, R.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, c = [], f = [], i = [], g = {}, d = [], u = [];
  let p = 0, _ = 0, v = 0;
  o.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: N,
      type: z = "",
      fixed: q = !1,
      flex: et = !1,
      width: Ht = r,
      minWidth: St = a,
      maxWidth: je = l,
      ...We
    } = R, jn = qi(Ht, St, je), T = {
      name: N,
      type: z,
      setting: {
        name: N,
        type: z,
        fixed: q,
        flex: et,
        width: Ht,
        minWidth: St,
        maxWidth: je,
        ...We
      },
      flex: q ? 0 : et === !0 ? 1 : typeof et == "number" ? et : 0,
      left: 0,
      width: jn,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((_e) => {
      var Ie, Be;
      const jt = (Ie = _e.colTypes) == null ? void 0 : Ie[z];
      if (jt) {
        const st = typeof jt == "function" ? jt(T) : jt;
        st && Object.assign(T.setting, st);
      }
      (Be = _e.onAddCol) == null || Be.call(this, T);
    }), T.realWidth = T.realWidth || T.width, q === "left" ? (T.left = p, p += T.width, c.push(T)) : q === "right" ? (T.left = _, _ += T.width, f.push(T)) : (T.left = v, v += T.width, i.push(T)), T.flex && u.push(T), d.push(T), g[T.name] = T;
  });
  let y = o.width, m = 0;
  const w = p + v + _;
  if (typeof y == "function" && (y = y.call(this, w)), y === "auto")
    m = w;
  else if (y === "100%") {
    const { parent: R } = this;
    if (R)
      m = R.clientWidth;
    else {
      m = 0, M(this, $t, !0);
      return;
    }
  } else
    m = y != null ? y : 0;
  const { data: x, rowKey: S = "id", rowHeight: b } = o, C = [], k = (R, N, z) => {
    var et, Ht;
    const q = { data: z != null ? z : { [S]: R }, id: R, index: C.length, top: 0 };
    if (z || (q.lazy = !0), C.push(q), ((et = o.onAddRow) == null ? void 0 : et.call(this, q, N)) !== !1) {
      for (const St of t)
        if (((Ht = St.onAddRow) == null ? void 0 : Ht.call(this, q, N)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let R = 0; R < x; R++)
      k(`${R}`, R);
  else
    Array.isArray(x) && x.forEach((R, N) => {
      var z;
      typeof R == "object" ? k(`${(z = R[S]) != null ? z : ""}`, N, R) : k(`${R != null ? R : ""}`, N);
    });
  let $ = C;
  const L = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, $);
    R && ($ = R);
  }
  for (const R of t) {
    const N = (Tt = R.onAddRows) == null ? void 0 : Tt.call(this, $);
    N && ($ = N);
  }
  $.forEach((R, N) => {
    L[R.id] = R, R.index = N, R.top = R.index * b;
  });
  const { header: O, footer: U } = o, B = O ? o.headerHeight || b : 0, tt = U ? o.footerHeight || b : 0;
  let F = o.height, W = 0;
  const G = $.length * b, xt = B + tt + G;
  if (typeof F == "function" && (F = F.call(this, xt)), F === "auto")
    W = xt;
  else if (typeof F == "object")
    W = Math.min(F.max, Math.max(F.min, xt));
  else if (F === "100%") {
    const { parent: R } = this;
    if (R)
      W = R.clientHeight;
    else {
      W = 0, M(this, $t, !0);
      return;
    }
  } else
    W = F;
  const dt = W - B - tt, Zt = m - p - _, pt = {
    options: o,
    allRows: C,
    width: m,
    height: W,
    rows: $,
    rowsMap: L,
    rowHeight: b,
    rowsHeight: dt,
    rowsHeightTotal: G,
    header: O,
    footer: U,
    footerGenerators: s,
    headerHeight: B,
    footerHeight: tt,
    colsMap: g,
    colsList: d,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: f,
      scrollCols: i,
      fixedLeftWidth: p,
      scrollWidth: Zt,
      scrollColsWidth: v,
      fixedRightWidth: _
    }
  }, kt = (gt = o.onLayout) == null ? void 0 : gt.call(this, pt);
  kt && Object.assign(pt, kt), t.forEach((R) => {
    if (R.onLayout) {
      const N = R.onLayout.call(this, pt);
      N && Object.assign(pt, N);
    }
  }), M(this, at, pt);
}, $n = new WeakSet(), Ys = function() {
  (H(this, An, qs).call(this) || !h(this, at)) && H(this, Mn, Vs).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = t;
  if (s.length) {
    const w = a - l;
    if (w > 0) {
      const x = s.reduce((b, C) => b + C.flex, 0);
      let S = 0;
      s.forEach((b) => {
        const C = Math.min(w - S, Math.ceil(w * (b.flex / x)));
        b.realWidth = C + b.width, S += b.realWidth;
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
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: d } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), p = Math.floor(u / d), _ = u + i, v = Math.min(g.length, Math.ceil(_ / d)), y = [], { rowDataGetter: m } = this.options;
  for (let w = p; w < v; w++) {
    const x = g[w];
    x.lazy && m && (x.data = m([x.id])[0], x.lazy = !1), y.push(x);
  }
  return t.visibleRows = y, t.scrollTop = u, t.scrollLeft = o, t;
}, D(Zn, "addPlugin", js), D(Zn, "removePlugin", Ws);
function Ko(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((s) => s.classList.add(o));
}
const Gs = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s, r;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const o = (r = t == null ? void 0 : t.getAttribute("data-col")) != null ? r : !1;
      Ko(this, o);
    },
    mouseleave() {
      Ko(this, !1);
    }
  }
};
He(Gs, { buildIn: !0 });
function Zi(e, n) {
  var a, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (e === void 0 ? (n === void 0 && (n = !Xs.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    r(c, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((c) => {
    r(c, n != null ? n : !t[c]);
  })), Object.keys(o).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, o, t);
    c && Object.keys(c).forEach((f) => {
      c[f] ? t[f] = !0 : delete t[f];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var f;
      (f = this.options.onCheckChange) == null || f.call(this, o);
    });
  }
  return o;
}
function Qi(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function Xs() {
  var t, o;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (n.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ta() {
  return Object.keys(this.state.checkedRows);
}
const Ks = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Zi,
    isRowChecked: Qi,
    isAllRowChecked: Xs,
    getChecks: ta
  },
  onRenderCell(e, { row: n, col: t }) {
    var l, c;
    const { id: o } = n, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var a, l;
    const { id: o } = n, { checkbox: s } = t.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ A("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(f), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: P(e.className, "is-checked") };
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
He(Ks);
function to(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, o = n.children && t && t[e];
  let s = !1, { parent: r } = n;
  for (; r; ) {
    const a = to.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return n.state = s ? "hidden" : o ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? to.call(this, n.parent).level + 1 : 0, n;
}
function ea(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !Js.call(this)), n) {
      const r = o.entries();
      for (const [a, l] of r)
        l.state === "expanded" && (t[a] = !0);
    } else
      t = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[r[0]]), r.forEach((a) => {
      const l = o.get(a);
      n && (l == null ? void 0 : l.children) ? t[a] = !0 : delete t[a];
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
function Js() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Zs(e, n = 0, t, o = 0) {
  var s;
  t || (t = [...e.keys()]);
  for (const r of t) {
    const a = e.get(r);
    !a || (a.level === o && (a.order = n++), (s = a.children) != null && s.length && (n = Zs(e, n, a.children, o + 1)));
  }
  return n;
}
function Qs(e, n, t, o) {
  const s = e.getNestedRowInfo(n);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, Qs(e, r, t, o);
  }), s;
}
function tr(e, n, t, o, s) {
  var l;
  const r = e.getNestedRowInfo(n);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[n] = t), r.parent && tr(e, r.parent, t, o, s);
}
const er = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const { nestedMap: t } = this.data, o = t.get(e.id), s = t.get(n.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(n).forEach(([s, r]) => {
        const a = Qs(this, s, r, o);
        a != null && a.parent && tr(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ea,
    isAllCollapsed: Js,
    getNestedRowInfo: to
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r, a, l, c;
    const { nestedMap: n } = this.data, t = (r = e.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (a = n.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = t, (c = e.data) != null && c[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), n.set(e.id, o), t) {
      let f = n.get(t);
      f || (f = {
        state: "",
        level: 0
      }, n.set(t, f)), f.children || (f.children = []), f.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Zs(this.data.nestedMap), e.sort((n, t) => {
      var a, l;
      const o = this.getNestedRowInfo(n.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? n.index - t.index : r;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = n.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && e.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, n, s)) != null ? c : /* @__PURE__ */ A("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = n.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), e.unshift(/* @__PURE__ */ A("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var s, r;
    const { id: o } = n;
    return t.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ A("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ A("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: P(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = P(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
He(er);
const ut = 24 * 60 * 60 * 1e3, X = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ve = (e, n = new Date()) => (e = X(e), n = X(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), eo = (e, n = new Date()) => X(e).getFullYear() === X(n).getFullYear(), nr = (e, n = new Date()) => (e = X(e), n = X(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), na = (e, n = new Date()) => {
  e = X(e), n = X(n);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / t), s = Math.floor(n.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, oa = (e, n) => ve(X(n), e), sa = (e, n) => ve(X(n).getTime() - ut, e), ra = (e, n) => ve(X(n).getTime() + ut, e), ia = (e, n) => ve(X(n).getTime() - 2 * ut, e), un = (e, n = "yyyy-MM-dd hh:mm") => {
  e = X(e);
  const t = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((o) => {
    if (new RegExp(`(${o})`).test(n)) {
      const s = `${t[o]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), n;
}, aa = (e, n, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = un(e, eo(e) ? o.month : o.full);
  if (ve(e, n))
    return s;
  const r = un(n, eo(e, n) ? nr(e, n) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, la = (e) => {
  const n = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return n - ut * 7;
    case "oneMonth":
      return n - ut * 31;
    case "threeMonth":
      return n - ut * 31 * 3;
    case "halfYear":
      return n - ut * 183;
    case "oneYear":
      return n - ut * 365;
    case "twoYear":
      return n - 2 * (ut * 365);
    default:
      return 0;
  }
}, no = (e, n, t = !0, o = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, no(e, "day", t, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, no(e, "day", t, o);
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
  return t ? o + e : o - e;
};
const or = {
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
        const { linkTemplate: o = "", linkProps: s } = n.setting, r = Qt(o, t.data);
        return e[0] = /* @__PURE__ */ A("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${n.name}Avatar` } = n.setting, l = /* @__PURE__ */ A("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ A("img", {
          src: o ? o[a] : ""
        }));
        return s ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = n.setting, a = (t - o) / 2, l = t / 2, c = e[0];
        return e[0] = /* @__PURE__ */ A("svg", {
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
        }, Math.round(c))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: n, row: t }) {
        var l;
        const o = (l = t.data) == null ? void 0 : l[n.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), Qt(s, c);
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
        const { format: o, type: s } = t, r = e[0];
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = un(r, o) : s === "html" ? e[0] = { html: Qt(o, r) } : e[0] = Qt(o, r), e;
      }
    }
  }
};
He(or);
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Gs,
  checkable: Ks,
  nested: er,
  rich: or
}, Symbol.toStringTag, { value: "Module" }));
class Fe extends us {
}
D(Fe, "Component", Zn), D(Fe, "definePlugin", He), D(Fe, "removePlugin", Ws), D(Fe, "plugins", ca);
var ct, K;
class ua {
  constructor(n) {
    E(this, ct, void 0);
    E(this, K, void 0);
    M(this, ct, n), M(this, K, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement), this.addActive(h(this, K).parentElement, h(this, K)), h(this, K).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    M(this, K, h(this, ct)), this.addActive(h(this, K).parentElement, h(this, K)), M(this, ct, document.querySelector(`[href='#${h(this, K).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, K).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, K).getAttribute("id")}']`)), this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement);
  }
  addActive(n, t) {
    const o = n.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), t.classList.add("active"), t.classList.contains("fade") && this.transition(t).then(function(r) {
      t.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(t, o) {
      setTimeout(() => {
        n.classList.add("in"), t();
      }, 100);
    });
  }
}
ct = new WeakMap(), K = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new ua(e.target).showTarget());
});
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: X,
  isSameDay: ve,
  isSameYear: eo,
  isSameMonth: nr,
  isSameWeek: na,
  isToday: oa,
  isYesterday: sa,
  isTomorrow: ra,
  isDBY: ia,
  formatDate: un,
  formatDateSpan: aa,
  getTimeBeforeDesc: la,
  calculateTimestamp: no,
  formatString: Qt,
  formatBytes: kr,
  convertBytes: Sr,
  isObject: Ye,
  mergeDeep: sn
}, Symbol.toStringTag, { value: "Module" }));
export {
  da as Avatar,
  te as ContextMenu,
  Fe as DTable,
  ee as Dropdown,
  so as EventBus,
  hs as Menu,
  ua as NavTabs,
  To as Scrollbar,
  Nr as addI18nValues,
  ha as browser,
  Or as getLangCode,
  pa as helpers,
  co as i18n,
  Un as nativeEvents,
  Lr as setLangCode,
  Dr as store
};
