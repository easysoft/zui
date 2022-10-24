var Hf = Object.defineProperty;
var Wf = (n, t, e) => t in n ? Hf(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var D = (n, t, e) => (Wf(n, typeof t != "symbol" ? t + "" : t, e), e), Pi = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var v = (n, t, e) => (Pi(n, t, "read from private field"), e ? e.call(n) : t.get(n)), x = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, C = (n, t, e, o) => (Pi(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var P = (n, t, e) => (Pi(n, t, "access private method"), e);
const If = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((o) => {
    const { name: i, value: r } = o;
    t[i] = r;
  }), t;
};
class zf extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
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
    const e = If(this);
    if (e)
      for (const o in e)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${e[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, o) {
    e && e.classList.add(o);
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
  attributeChangedCallback(e, o) {
    e === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", zf);
var pi, F, Za, io, fl, _r = {}, Qa = [], Uf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function tc(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function ec(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pi.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return Xo(n, l, o, i, null);
}
function Xo(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Za : i };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Bf() {
  return { current: null };
}
function di(n) {
  return n.children;
}
function Jo(n, t) {
  this.props = n, this.context = t;
}
function An(n, t) {
  if (t == null)
    return n.__ ? An(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? An(n) : null;
}
function nc(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return nc(n);
  }
}
function hl(n) {
  (!n.__d && (n.__d = !0) && io.push(n) && !vr.__r++ || fl !== F.debounceRendering) && ((fl = F.debounceRendering) || setTimeout)(vr);
}
function vr() {
  for (var n; vr.__r = io.length; )
    n = io.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), io = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = xe({}, r)).__v = r.__v + 1, ws(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? An(r) : l, r.__h), sc(o, r), r.__e != l && nc(r)));
    });
}
function oc(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || Qa, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Xo(null, c, null, null, c) : Array.isArray(c) ? Xo(di, { children: c }, null, null, null) : c.__b > 0 ? Xo(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      ws(n, c, f = f || _r, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = rc(c, u, n) : u = ic(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = An(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = An(o, s + 1)), ac(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      lc(_[s], _[++s], _[++s]);
}
function rc(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? rc(o, t, e) : ic(e, o, o, i, o.__e, t));
  return t;
}
function ic(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ff(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || gr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || gr(n, r, t[r], e[r], o);
}
function pl(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || Uf.test(t) ? e : e + "px";
}
function gr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || pl(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || pl(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? _l : dl, r) : n.removeEventListener(t, r ? _l : dl, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function dl(n) {
  this.l[n.type + !1](F.event ? F.event(n) : n);
}
function _l(n) {
  this.l[n.type + !0](F.event ? F.event(n) : n);
}
function ws(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = F.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new Jo(_, y), s.constructor = m, s.render = Vf), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xe({}, s.__s)), xe(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = F.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = xe(xe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === di && p.key == null ? p.props.children : p, oc(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = qf(e.__e, t, e, o, i, r, l, u);
    (p = F.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), F.__e(E, t, e);
  }
}
function sc(n, t) {
  F.__c && F.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      F.__e(o, e.__v);
    }
  });
}
function qf(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && pi.call(n.childNodes), p = (d = e.props || _r).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (Ff(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, oc(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && An(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && tc(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && gr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && gr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function lc(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    F.__e(o, e);
  }
}
function ac(n, t, e) {
  var o, i;
  if (F.unmount && F.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || lc(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ac(o[i], t, typeof n.type != "function");
  e || n.__e == null || tc(n.__e), n.__e = n.__d = void 0;
}
function Vf(n, t, e) {
  return this.constructor(n, e);
}
function Yf(n, t, e) {
  var o, i, r;
  F.__ && F.__(n, t), i = (o = typeof e == "function") ? null : e && e.__k || t.__k, r = [], ws(t, n = (!o && e || t).__k = ec(di, null, [n]), i || _r, _r, t.ownerSVGElement !== void 0, !o && e ? [e] : i ? null : t.firstChild ? pi.call(t.childNodes) : null, r, !o && e ? e : i ? i.__e : t.firstChild, o), sc(r, n);
}
pi = Qa.slice, F = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Za = 0, Jo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof n == "function" && (n = n(xe({}, e), this.props)), n && xe(e, n), n != null && this.__v && (t && this.__h.push(t), hl(this));
}, Jo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), hl(this));
}, Jo.prototype.render = di, io = [], vr.__r = 0;
var Ut;
class Gf {
  constructor(t = "") {
    x(this, Ut, void 0);
    typeof t == "object" ? C(this, Ut, t) : C(this, Ut, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, Ut).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, Ut).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, Ut).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, Ut).dispatchEvent(t), t;
  }
}
Ut = new WeakMap();
const Fi = /* @__PURE__ */ new Set([
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
class ks extends Gf {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (Fi.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(ks.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (Fi.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
var Bt, xo, Fe, to;
class vl extends ks {
  constructor(e = "", o) {
    super(e);
    x(this, Fe);
    x(this, Bt, /* @__PURE__ */ new Map());
    x(this, xo, void 0);
    C(this, xo, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, i) {
    e = P(this, Fe, to).call(this, e), super.on(e, o, i), v(this, Bt).set(o, [e, i]);
  }
  off(e, o, i) {
    e = P(this, Fe, to).call(this, e), super.off(e, o, i), v(this, Bt).delete(o);
  }
  once(e, o, i) {
    e = P(this, Fe, to).call(this, e);
    const r = (l) => {
      o(l), v(this, Bt).delete(r);
    };
    super.once(e, r, i), v(this, Bt).set(r, [e, i]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = P(this, Fe, to).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(v(this, Bt).entries()).forEach(([e, [o, i]]) => {
      super.off(o, e, i);
    }), v(this, Bt).clear();
  }
}
Bt = new WeakMap(), xo = new WeakMap(), Fe = new WeakSet(), to = function(e) {
  const o = v(this, xo);
  return Fi.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function Kf(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Xf(n, t, e) {
  const o = Kf(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function ji(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function qi(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (ji(n) && ji(e))
    for (const o in e)
      ji(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), qi(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return qi(n, ...t);
}
function Jf(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Ha, Wa;
let Es = (Wa = (Ha = document.documentElement.getAttribute("lang")) == null ? void 0 : Ha.toLowerCase()) != null ? Wa : "zh_cn", _e;
function Zf() {
  return Es;
}
function Qf(n) {
  Es = n.toLowerCase();
}
function th(n, t) {
  _e || (_e = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), qi(_e, n);
}
function _i(n, t, e, o, i, r) {
  Array.isArray(n) ? _e && n.unshift(_e) : n = _e ? [_e, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || Es;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === _e ? `${r}.${t}` : t;
    if (a = Xf(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? Jf(a, ...Array.isArray(e) ? e : [e]) : a;
}
_i.addLang = th;
_i.getCode = Zf;
_i.setCode = Qf;
function eh(n) {
  return Object.fromEntries(Object.entries(n).map(([t, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [t, e];
  }));
}
var Ft, dn, At;
class cc {
  constructor(t, e) {
    x(this, Ft, void 0);
    x(this, dn, void 0);
    x(this, At, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, C(this, At, new vl(t, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, Ft, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? eh(t.dataset) : null, ...e }), this.constructor.all.set(t, this), C(this, dn, t), this.init(), v(this, At).emit("inited", this);
  }
  get options() {
    return v(this, Ft);
  }
  get element() {
    return v(this, dn);
  }
  get events() {
    return v(this, At);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, Ft), t), v(this, Ft);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, dn)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(t, e, o) {
    v(this, At).on(t, e, o);
  }
  once(t, e, o) {
    v(this, At).once(t, e, o);
  }
  off(t, e, o) {
    v(this, At).off(t, e, o);
  }
  emit(t, e) {
    let o = vl.createEvent(t, e);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, Ft)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = v(this, At).emit(o), o;
  }
  i18n(t, e, o) {
    var i;
    return (i = _i(v(this, Ft).i18n, t, e, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const e = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, e) {
    return this.get(t) || new this(t, e);
  }
}
Ft = new WeakMap(), dn = new WeakMap(), At = new WeakMap(), D(cc, "allComponents", /* @__PURE__ */ new Map());
var Ao;
class nh extends cc {
  constructor() {
    super(...arguments);
    x(this, Ao, Bf());
  }
  get $() {
    return v(this, Ao).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(e) {
    const o = this.constructor.Component;
    Yf(/* @__PURE__ */ ec(o, {
      ref: v(this, Ao),
      ...this.setOptions(e)
    }), this.element);
  }
}
Ao = new WeakMap();
var xs, Y, uc, mr, so, gl, fc = {}, hc = [], oh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function pc(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function pt(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xs.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return Zo(n, l, o, i, null);
}
function Zo(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++uc : i };
  return i == null && Y.vnode != null && Y.vnode(r), r;
}
function rh() {
  return { current: null };
}
function As(n) {
  return n.children;
}
function lo(n, t) {
  this.props = n, this.context = t;
}
function Cn(n, t) {
  if (t == null)
    return n.__ ? Cn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Cn(n) : null;
}
function dc(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return dc(n);
  }
}
function ml(n) {
  (!n.__d && (n.__d = !0) && so.push(n) && !yr.__r++ || gl !== Y.debounceRendering) && ((gl = Y.debounceRendering) || setTimeout)(yr);
}
function yr() {
  for (var n; yr.__r = so.length; )
    n = so.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), so = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, mc(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Cn(r) : l, r.__h), sh(o, r), r.__e != l && dc(r)));
    });
}
function _c(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || hc, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Zo(null, c, null, null, c) : Array.isArray(c) ? Zo(As, { children: c }, null, null, null) : c.__b > 0 ? Zo(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      mc(n, c, f = f || fc, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = vc(c, u, n) : u = gc(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = Cn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = Cn(o, s + 1)), bc(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      yc(_[s], _[++s], _[++s]);
}
function vc(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? vc(o, t, e) : gc(e, o, o, i, o.__e, t));
  return t;
}
function gc(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ih(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || br(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || br(n, r, t[r], e[r], o);
}
function yl(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || oh.test(t) ? e : e + "px";
}
function br(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || yl(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || yl(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? $l : bl, r) : n.removeEventListener(t, r ? $l : bl, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function bl(n) {
  this.l[n.type + !1](Y.event ? Y.event(n) : n);
}
function $l(n) {
  this.l[n.type + !0](Y.event ? Y.event(n) : n);
}
function mc(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = Y.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new lo(_, y), s.constructor = m, s.render = ah), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = Y.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === As && p.key == null ? p.props.children : p, _c(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = lh(e.__e, t, e, o, i, r, l, u);
    (p = Y.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), Y.__e(E, t, e);
  }
}
function sh(n, t) {
  Y.__c && Y.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      Y.__e(o, e.__v);
    }
  });
}
function lh(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && xs.call(n.childNodes), p = (d = e.props || fc).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (ih(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, _c(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && Cn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && pc(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && br(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && br(n, "checked", h, d.checked, !1));
  }
  return n;
}
function yc(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    Y.__e(o, e);
  }
}
function bc(n, t, e) {
  var o, i;
  if (Y.unmount && Y.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || yc(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        Y.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && bc(o[i], t, typeof n.type != "function");
  e || n.__e == null || pc(n.__e), n.__e = n.__d = void 0;
}
function ah(n, t, e) {
  return this.constructor(n, e);
}
xs = hc.slice, Y = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, uc = 0, mr = function(n) {
  return n != null && n.constructor === void 0;
}, lo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof n == "function" && (n = n(Ae({}, e), this.props)), n && Ae(e, n), n != null && this.__v && (t && this.__h.push(t), ml(this));
}, lo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ml(this));
}, lo.prototype.render = As, so = [], yr.__r = 0;
const Pe = (...n) => n.map((t) => Array.isArray(t) ? Pe(...t) : typeof t == "function" ? Pe(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
function ch(n) {
  const {
    rootClass: t,
    rootProps: e,
    className: o,
    url: i,
    target: r,
    disabled: l,
    active: a,
    icon: u,
    title: p,
    trailingIcon: s,
    children: d,
    ...f
  } = n;
  return /* @__PURE__ */ pt("li", {
    className: Pe(t),
    ...e
  }, /* @__PURE__ */ pt("a", {
    className: Pe("menu-item", o, { disabled: l, active: a, "has-icon": u }),
    href: i,
    target: r,
    ...f
  }, mr(u) ? u : typeof u == "string" ? /* @__PURE__ */ pt("i", {
    class: `icon ${u}`
  }) : null, p, mr(s) ? s : typeof s == "string" ? /* @__PURE__ */ pt("i", {
    class: `icon ${s}`
  }) : null), d);
}
function uh({ className: n }) {
  return /* @__PURE__ */ pt("div", {
    class: Pe("menu-divider", n)
  });
}
function fh({ className: n, title: t, children: e, ...o }) {
  return /* @__PURE__ */ pt("li", {
    class: Pe("menu-heading", n),
    ...o
  }, t, e);
}
var Co, Fr, $c, So, qr, Vr;
const al = class extends lo {
  constructor() {
    super(...arguments);
    x(this, Fr);
    D(this, "state", { shownSubs: {} });
    x(this, Co, rh());
    x(this, So, ({ item: e, h: o }) => {
      const { onRenderSubMenu: i } = this.props;
      if (i)
        return i({ menu: this, item: e, h: o });
      const { afterRender: r, onClickItem: l, subMenuTrigger: a, onRenderItem: u } = this.props;
      return /* @__PURE__ */ o(al, {
        className: "menu-sub",
        items: e.items,
        onRenderSubMenu: v(this, So),
        afterRender: r,
        onClickItem: l,
        onRenderItem: u,
        subMenuTrigger: a
      });
    });
    x(this, qr, (e, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(e, !0), o.preventDefault());
    });
    x(this, Vr, (e, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(e, !1), o.preventDefault());
    });
  }
  get $() {
    return v(this, Co).current;
  }
  componentDidMount() {
    var e, o;
    (o = (e = this.props).afterRender) == null || o.call(e, { menu: this, firstRender: !0 });
  }
  componentDidUpdate() {
    var e, o;
    (o = (e = this.props).afterRender) == null || o.call(e, { menu: this, firstRender: !1 });
  }
  componentWillUnmount() {
    var e, o;
    (o = (e = this.props).beforeDestroy) == null || o.call(e, { menu: this });
  }
  toggleSubMenu(e, o) {
    const { shownSubs: i } = this.state;
    o === void 0 && (o = !i[e]), o ? i[e] = !0 : delete i[e], this.setState({ shownSubs: { ...i } });
  }
  clearAllSubMenu() {
    this.setState({ shownSubs: {} });
  }
  isSubMenuShow(e) {
    return this.state.shownSubs[e];
  }
  render() {
    const {
      className: e,
      items: o,
      hasIcons: i,
      children: r,
      onClickItem: l,
      subMenuTrigger: a,
      onRenderItem: u,
      onRenderSubMenu: p,
      afterRender: s,
      beforeDestroy: d,
      ...f
    } = this.props, c = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ pt("menu", {
      class: Pe(
        "menu",
        e,
        (i != null ? i : c == null ? void 0 : c.some((h) => "icon" in h)) ? "has-icons" : ""
      ),
      ...f,
      ref: v(this, Co)
    }, c == null ? void 0 : c.map((h, b) => {
      const _ = { type: "item", key: b, ...h };
      if (u) {
        const S = u({ menu: this, item: _, index: b, h: pt });
        if (S) {
          if (mr(S) || typeof S != "object")
            return S;
          Object.assign(_, S);
        }
      }
      const { key: g = b, type: y = "item", ...$ } = _;
      if (y === "heading")
        return /* @__PURE__ */ pt(fh, {
          ...$,
          key: g
        });
      if (y === "divider")
        return /* @__PURE__ */ pt(uh, {
          ...$,
          key: g
        });
      const { onClick: k, items: w, ...m } = $, E = {
        ...m,
        key: g,
        onClick: P(this, Fr, $c).bind(this, _, b, k)
      }, A = w && (a === "always" || this.state.shownSubs[g]);
      return w && (E.rootClass = Pe(E.rootClass, "has-sub", A ? "has-sub-shown" : ""), a === "hover" && (E.rootProps = {
        ...E.rootProps,
        onMouseEnter: v(this, qr).bind(this, g),
        onMouseLeave: v(this, Vr).bind(this, g)
      })), /* @__PURE__ */ pt(ch, {
        ...E
      }, A && v(this, So).call(this, { item: _, h: pt }));
    }), r);
  }
};
let Vi = al;
Co = new WeakMap(), Fr = new WeakSet(), $c = function(e, o, i, r) {
  var a;
  i && i.call(r.target, r);
  const { onClickItem: l } = this.props;
  l && l({ menu: this, item: e, index: o, event: r }), this.props.subMenuTrigger === "click" && e.items && (this.toggleSubMenu((a = e.key) != null ? a : o, !0), r.stopPropagation(), r.preventDefault());
}, So = new WeakMap(), qr = new WeakMap(), Vr = new WeakMap();
class hh extends nh {
  toggleSubMenu(t, e) {
    var o;
    return (o = this.$) == null ? void 0 : o.toggleSubMenu(t, e);
  }
  clearAllSubMenu() {
    var t;
    return (t = this.$) == null ? void 0 : t.clearAllSubMenu();
  }
  isSubMenuShow(t) {
    var e;
    return (e = this.$) == null ? void 0 : e.isSubMenuShow(t);
  }
}
D(hh, "Component", Vi);
var Cs, G, wc, ao, wl, kc = {}, Ec = [], ph = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function xc(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function kl(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Cs.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return Qo(n, l, o, i, null);
}
function Qo(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++wc : i };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function Ss(n) {
  return n.children;
}
function co(n, t) {
  this.props = n, this.context = t;
}
function Sn(n, t) {
  if (t == null)
    return n.__ ? Sn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Sn(n) : null;
}
function Ac(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Ac(n);
  }
}
function El(n) {
  (!n.__d && (n.__d = !0) && ao.push(n) && !$r.__r++ || wl !== G.debounceRendering) && ((wl = G.debounceRendering) || setTimeout)($r);
}
function $r() {
  for (var n; $r.__r = ao.length; )
    n = ao.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), ao = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, Lc(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Sn(r) : l, r.__h), _h(o, r), r.__e != l && Ac(r)));
    });
}
function Cc(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || Ec, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Qo(null, c, null, null, c) : Array.isArray(c) ? Qo(Ss, { children: c }, null, null, null) : c.__b > 0 ? Qo(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      Lc(n, c, f = f || kc, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = Sc(c, u, n) : u = Mc(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = Sn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = Sn(o, s + 1)), Dc(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Oc(_[s], _[++s], _[++s]);
}
function Sc(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? Sc(o, t, e) : Mc(e, o, o, i, o.__e, t));
  return t;
}
function Mc(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function dh(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || wr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || wr(n, r, t[r], e[r], o);
}
function xl(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || ph.test(t) ? e : e + "px";
}
function wr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || xl(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || xl(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? Cl : Al, r) : n.removeEventListener(t, r ? Cl : Al, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function Al(n) {
  this.l[n.type + !1](G.event ? G.event(n) : n);
}
function Cl(n) {
  this.l[n.type + !0](G.event ? G.event(n) : n);
}
function Lc(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = G.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new co(_, y), s.constructor = m, s.render = gh), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = G.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === Ss && p.key == null ? p.props.children : p, Cc(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = vh(e.__e, t, e, o, i, r, l, u);
    (p = G.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), G.__e(E, t, e);
  }
}
function _h(n, t) {
  G.__c && G.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      G.__e(o, e.__v);
    }
  });
}
function vh(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && Cs.call(n.childNodes), p = (d = e.props || kc).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (dh(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, Cc(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && Sn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && xc(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && wr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && wr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function Oc(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    G.__e(o, e);
  }
}
function Dc(n, t, e) {
  var o, i;
  if (G.unmount && G.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || Oc(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        G.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Dc(o[i], t, typeof n.type != "function");
  e || n.__e == null || xc(n.__e), n.__e = n.__d = void 0;
}
function gh(n, t, e) {
  return this.constructor(n, e);
}
Cs = Ec.slice, G = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, wc = 0, co.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof n == "function" && (n = n(Ce({}, e), this.props)), n && Ce(e, n), n != null && this.__v && (t && this.__h.push(t), El(this));
}, co.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), El(this));
}, co.prototype.render = Ss, ao = [], $r.__r = 0;
const Yi = (...n) => n.map((t) => Array.isArray(t) ? Yi(...t) : typeof t == "function" ? Yi(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
var qe, Ve;
class Gv extends co {
  constructor(e) {
    var o;
    super(e);
    x(this, qe, 0);
    x(this, Ve, null);
    D(this, "_handleWheel", (e) => {
      var r;
      const { wheelContainer: o } = this.props, i = e.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? e.deltaX : e.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && e.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (e) => {
      const { dragStart: o } = this.state;
      o && (v(this, qe) && cancelAnimationFrame(v(this, qe)), C(this, qe, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? e.clientX - o.x : e.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), C(this, qe, 0);
      })), e.preventDefault());
    });
    D(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    D(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    D(this, "_handleClick", (e) => {
      const o = e.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: a } = this.props, u = (r === "horz" ? e.clientX - i.left : e.clientY - i.top) - this.barSize / 2;
      this.scroll(u * a / l), e.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
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
    const { scrollSize: e, clientSize: o } = this.props;
    return Math.max(0, e - o);
  }
  get barSize() {
    const { clientSize: e, scrollSize: o, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (C(this, Ve, typeof e == "string" ? document : e.current), v(this, Ve).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, Ve) && v(this, Ve).removeEventListener("wheel", this._handleWheel);
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
    var i;
    const { onScroll: o } = this.props;
    o && o(e, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: e,
      type: o,
      size: i = 12,
      className: r,
      style: l,
      left: a,
      top: u,
      bottom: p,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: c } = this.state, h = {
      left: a,
      top: u,
      bottom: p,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (h.height = i, h.width = e, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (e - b.width) / d)) : (h.width = i, h.height = e, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (e - b.height) / d)), /* @__PURE__ */ kl("div", {
      className: Yi("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ kl("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
qe = new WeakMap(), Ve = new WeakMap();
const mh = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((o) => {
    const { name: i, value: r } = o;
    t[i] = r;
  }), t;
};
class yh extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
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
    const e = mh(this);
    if (e)
      for (const o in e)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${e[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, o) {
    e && e.classList.add(o);
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
  attributeChangedCallback(e, o) {
    e === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", yh);
function bh(n) {
  const t = typeof n == "string" ? document.querySelector(n) : n;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const o = document.createRange();
      return o.selectNodeContents(t), e.removeAllRanges(), e.addRange(o), !0;
    }
  }
  return !1;
}
function $h(n) {
  document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
}
function wh(n, t) {
  const e = typeof n == "string" ? document.querySelector(n) : n;
  if (!e)
    return !1;
  const o = e.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, a = o.left <= r && o.left + o.width >= 0;
  return l && a;
}
const Gi = (...n) => n.map((t) => Array.isArray(t) ? Gi(...t) : typeof t == "function" ? Gi(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" "), Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: bh,
  domReady: $h,
  isElementVisible: wh,
  classes: Gi
}, Symbol.toStringTag, { value: "Module" }));
var qt;
class kh {
  constructor(t = "") {
    x(this, qt, void 0);
    typeof t == "object" ? C(this, qt, t) : C(this, qt, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, qt).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, qt).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, qt).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, qt).dispatchEvent(t), t;
  }
}
qt = new WeakMap();
const Sl = /* @__PURE__ */ new Set([
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
class Rc extends kh {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (Sl.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Rc.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (Sl.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
function Eh(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function xh(n, t, e) {
  const o = Eh(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function Ti(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function Ki(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (Ti(n) && Ti(e))
    for (const o in e)
      Ti(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), Ki(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return Ki(n, ...t);
}
function Ah(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Ia, za;
let Ms = (za = (Ia = document.documentElement.getAttribute("lang")) == null ? void 0 : Ia.toLowerCase()) != null ? za : "zh_cn", ve;
function Ch() {
  return Ms;
}
function Sh(n) {
  Ms = n.toLowerCase();
}
function Mh(n, t) {
  ve || (ve = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), Ki(ve, n);
}
function Ls(n, t, e, o, i, r) {
  Array.isArray(n) ? ve && n.unshift(ve) : n = ve ? [ve, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || Ms;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === ve ? `${r}.${t}` : t;
    if (a = xh(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? Ah(a, ...Array.isArray(e) ? e : [e]) : a;
}
Ls.addLang = Mh;
Ls.getCode = Ch;
Ls.setCode = Sh;
let Lh = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var Mo, we, Ct, _n, vn, tr;
const cl = class {
  constructor(t, e = "local") {
    x(this, vn);
    x(this, Mo, void 0);
    x(this, we, void 0);
    x(this, Ct, void 0);
    x(this, _n, void 0);
    C(this, Mo, e), C(this, we, `ZUI_STORE:${t != null ? t : Lh()}`), C(this, Ct, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return v(this, Mo);
  }
  get session() {
    return this.type === "session" ? this : (v(this, _n) || C(this, _n, new cl(v(this, we), "session")), v(this, _n));
  }
  get(t, e) {
    const o = v(this, Ct).getItem(P(this, vn, tr).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    v(this, Ct).setItem(P(this, vn, tr).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    v(this, Ct).removeItem(P(this, vn, tr).call(this, t));
  }
  each(t) {
    for (let e = 0; e < v(this, Ct).length; e++) {
      const o = v(this, Ct).key(e);
      if (o != null && o.startsWith(v(this, we))) {
        const i = v(this, Ct).getItem(o);
        typeof i == "string" && t(o.substring(v(this, we).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((e, o) => {
      t[e] = o;
    }), t;
  }
};
let kr = cl;
Mo = new WeakMap(), we = new WeakMap(), Ct = new WeakMap(), _n = new WeakMap(), vn = new WeakSet(), tr = function(t) {
  return `${v(this, we)}:${t}`;
};
const Oh = new kr("DEFAULT");
function Dh(n, t = "local") {
  return new kr(n, t);
}
Object.assign(Oh, { create: Dh });
var Os, K, Pc, uo, Ml, jc = {}, Tc = [], Rh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Nc(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function Ll(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Os.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return er(n, l, o, i, null);
}
function er(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Pc : i };
  return i == null && K.vnode != null && K.vnode(r), r;
}
function Ds(n) {
  return n.children;
}
function fo(n, t) {
  this.props = n, this.context = t;
}
function Mn(n, t) {
  if (t == null)
    return n.__ ? Mn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Mn(n) : null;
}
function Hc(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Hc(n);
  }
}
function Ol(n) {
  (!n.__d && (n.__d = !0) && uo.push(n) && !Er.__r++ || Ml !== K.debounceRendering) && ((Ml = K.debounceRendering) || setTimeout)(Er);
}
function Er() {
  for (var n; Er.__r = uo.length; )
    n = uo.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), uo = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, Uc(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Mn(r) : l, r.__h), jh(o, r), r.__e != l && Hc(r)));
    });
}
function Wc(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || Tc, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? er(null, c, null, null, c) : Array.isArray(c) ? er(Ds, { children: c }, null, null, null) : c.__b > 0 ? er(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      Uc(n, c, f = f || jc, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = Ic(c, u, n) : u = zc(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = Mn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = Mn(o, s + 1)), Fc(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Bc(_[s], _[++s], _[++s]);
}
function Ic(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? Ic(o, t, e) : zc(e, o, o, i, o.__e, t));
  return t;
}
function zc(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ph(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || xr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || xr(n, r, t[r], e[r], o);
}
function Dl(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || Rh.test(t) ? e : e + "px";
}
function xr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || Dl(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || Dl(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? Pl : Rl, r) : n.removeEventListener(t, r ? Pl : Rl, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function Rl(n) {
  this.l[n.type + !1](K.event ? K.event(n) : n);
}
function Pl(n) {
  this.l[n.type + !0](K.event ? K.event(n) : n);
}
function Uc(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = K.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new fo(_, y), s.constructor = m, s.render = Nh), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = K.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === Ds && p.key == null ? p.props.children : p, Wc(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Th(e.__e, t, e, o, i, r, l, u);
    (p = K.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), K.__e(E, t, e);
  }
}
function jh(n, t) {
  K.__c && K.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      K.__e(o, e.__v);
    }
  });
}
function Th(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && Os.call(n.childNodes), p = (d = e.props || jc).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (Ph(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, Wc(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && Mn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && Nc(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && xr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && xr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function Bc(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    K.__e(o, e);
  }
}
function Fc(n, t, e) {
  var o, i;
  if (K.unmount && K.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || Bc(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        K.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Fc(o[i], t, typeof n.type != "function");
  e || n.__e == null || Nc(n.__e), n.__e = n.__d = void 0;
}
function Nh(n, t, e) {
  return this.constructor(n, e);
}
Os = Tc.slice, K = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Pc = 0, fo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof n == "function" && (n = n(Se({}, e), this.props)), n && Se(e, n), n != null && this.__v && (t && this.__h.push(t), Ol(this));
}, fo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ol(this));
}, fo.prototype.render = Ds, uo = [], Er.__r = 0;
const Xi = (...n) => n.map((t) => Array.isArray(t) ? Xi(...t) : typeof t == "function" ? Xi(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class Xv extends fo {
  render() {
    const { size: t, rounded: e, className: o, style: i, src: r, text: l, children: a, ...u } = this.props, p = [o], s = { ...i };
    let d = null;
    return r ? d = /* @__PURE__ */ Ll("img", {
      src: r,
      alt: l
    }) : d = l, typeof t == "number" ? (s.width = t, s.height = t) : typeof t == "string" && p.push(`avatar-${t}`), typeof e == "string" && p.push(`rounded-${e}`), /* @__PURE__ */ Ll("div", {
      className: Xi(p),
      style: s,
      ...u
    }, d, a);
  }
}
const Hh = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((o) => {
    const { name: i, value: r } = o;
    t[i] = r;
  }), t;
};
class Wh extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
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
    const e = Hh(this);
    if (e)
      for (const o in e)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${e[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, o) {
    e && e.classList.add(o);
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
  attributeChangedCallback(e, o) {
    e === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Wh);
function Ih() {
  const n = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${n}px`, document.body.classList.add("modal-open");
}
function zh() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Uh(n, t) {
  Ih(), n.classList.add("block"), jl(n, t), n.onclick = (e) => Bh(e, n), window.addEventListener("resize", () => {
    jl(n, t);
  });
}
function qc(n) {
  var t;
  zh(), (t = n.classList) == null || t.remove("block");
}
function jl(n, t) {
  const e = n.querySelector(".modal-dialog");
  if (!e)
    return;
  const o = Math.max(0, (window.innerHeight - e.clientHeight) / 2);
  if (t === "fit") {
    e.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (t === "center") {
    e.style.top = `${o}px`;
    return;
  }
  e.style.top = t;
}
function Bh(n, t) {
  n.target.closest("[data-dismiss=modal]") && (n.stopPropagation(), qc(t));
}
function Fh(n) {
  var t, e;
  return n instanceof HTMLAnchorElement ? (e = (t = (n.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : e.selector : n.dataset.target;
}
document.addEventListener("click", (n) => {
  const t = n.target, e = t.closest("[data-toggle=modal]");
  if (e) {
    const o = Fh(e);
    if (!o)
      return;
    const i = document.querySelector(o);
    if (!i)
      return;
    Uh(i, e.dataset.position || "fit");
  } else
    t.className.includes("modal") && qc(t);
});
const qh = (n) => {
  const t = {};
  if (!n)
    return t;
  const e = Object.values(n.attributes);
  return e && e.length > 0 && e.forEach((o) => {
    const { name: i, value: r } = o;
    t[i] = r;
  }), t;
};
class Vh extends HTMLElement {
  constructor() {
    super();
    D(this, "$button");
    D(this, "$icon");
    D(this, "onClick");
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
    const e = qh(this);
    if (e)
      for (const o in e)
        ["type", "size", "rounded", "outline"].includes(o) && this.addClass(this.$button, `-${e[o]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, o) {
    e && e.classList.add(o);
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
  attributeChangedCallback(e, o) {
    e === "isDisabled" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (o !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && o && this.addClass(this.$icon, `-${o}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Vh);
function mt(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var t = n.ownerDocument;
    return t && t.defaultView || window;
  }
  return n;
}
function ln(n) {
  var t = mt(n).Element;
  return n instanceof t || n instanceof Element;
}
function _t(n) {
  var t = mt(n).HTMLElement;
  return n instanceof t || n instanceof HTMLElement;
}
function Rs(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mt(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
var rn = Math.max, Ar = Math.min, Ln = Math.round;
function Ji() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vc() {
  return !/^((?!chrome|android).)*safari/i.test(Ji());
}
function On(n, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var o = n.getBoundingClientRect(), i = 1, r = 1;
  t && _t(n) && (i = n.offsetWidth > 0 && Ln(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && Ln(o.height) / n.offsetHeight || 1);
  var l = ln(n) ? mt(n) : window, a = l.visualViewport, u = !Vc() && e, p = (o.left + (u && a ? a.offsetLeft : 0)) / i, s = (o.top + (u && a ? a.offsetTop : 0)) / r, d = o.width / i, f = o.height / r;
  return {
    width: d,
    height: f,
    top: s,
    right: p + d,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function Ps(n) {
  var t = mt(n), e = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: o
  };
}
function Yh(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Gh(n) {
  return n === mt(n) || !_t(n) ? Ps(n) : Yh(n);
}
function Tt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function He(n) {
  return ((ln(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function js(n) {
  return On(He(n)).left + Ps(n).scrollLeft;
}
function kt(n) {
  return mt(n).getComputedStyle(n);
}
function Ts(n) {
  var t = kt(n), e = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + i + o);
}
function Kh(n) {
  var t = n.getBoundingClientRect(), e = Ln(t.width) / n.offsetWidth || 1, o = Ln(t.height) / n.offsetHeight || 1;
  return e !== 1 || o !== 1;
}
function Xh(n, t, e) {
  e === void 0 && (e = !1);
  var o = _t(t), i = _t(t) && Kh(t), r = He(t), l = On(n, i, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (o || !o && !e) && ((Tt(t) !== "body" || Ts(r)) && (a = Gh(t)), _t(t) ? (u = On(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : r && (u.x = js(r))), {
    x: l.left + a.scrollLeft - u.x,
    y: l.top + a.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
function Yc(n) {
  var t = On(n), e = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: e,
    height: o
  };
}
function vi(n) {
  return Tt(n) === "html" ? n : n.assignedSlot || n.parentNode || (Rs(n) ? n.host : null) || He(n);
}
function Gc(n) {
  return ["html", "body", "#document"].indexOf(Tt(n)) >= 0 ? n.ownerDocument.body : _t(n) && Ts(n) ? n : Gc(vi(n));
}
function ho(n, t) {
  var e;
  t === void 0 && (t = []);
  var o = Gc(n), i = o === ((e = n.ownerDocument) == null ? void 0 : e.body), r = mt(o), l = i ? [r].concat(r.visualViewport || [], Ts(o) ? o : []) : o, a = t.concat(l);
  return i ? a : a.concat(ho(vi(l)));
}
function Jh(n) {
  return ["table", "td", "th"].indexOf(Tt(n)) >= 0;
}
function Tl(n) {
  return !_t(n) || kt(n).position === "fixed" ? null : n.offsetParent;
}
function Zh(n) {
  var t = /firefox/i.test(Ji()), e = /Trident/i.test(Ji());
  if (e && _t(n)) {
    var o = kt(n);
    if (o.position === "fixed")
      return null;
  }
  var i = vi(n);
  for (Rs(i) && (i = i.host); _t(i) && ["html", "body"].indexOf(Tt(i)) < 0; ) {
    var r = kt(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function gi(n) {
  for (var t = mt(n), e = Tl(n); e && Jh(e) && kt(e).position === "static"; )
    e = Tl(e);
  return e && (Tt(e) === "html" || Tt(e) === "body" && kt(e).position === "static") ? t : e || Zh(n) || t;
}
var $t = "top", Nt = "bottom", je = "right", le = "left", mi = "auto", yi = [$t, Nt, je, le], Dn = "start", ko = "end", Qh = "clippingParents", Kc = "viewport", Jn = "popper", tp = "reference", Nl = /* @__PURE__ */ yi.reduce(function(n, t) {
  return n.concat([t + "-" + Dn, t + "-" + ko]);
}, []), ep = /* @__PURE__ */ [].concat(yi, [mi]).reduce(function(n, t) {
  return n.concat([t, t + "-" + Dn, t + "-" + ko]);
}, []), np = "beforeRead", op = "read", rp = "afterRead", ip = "beforeMain", sp = "main", lp = "afterMain", ap = "beforeWrite", cp = "write", up = "afterWrite", Zi = [np, op, rp, ip, sp, lp, ap, cp, up];
function fp(n) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), o = [];
  n.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    e.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(a) {
      if (!e.has(a)) {
        var u = t.get(a);
        u && i(u);
      }
    }), o.push(r);
  }
  return n.forEach(function(r) {
    e.has(r.name) || i(r);
  }), o;
}
function hp(n) {
  var t = fp(n);
  return Zi.reduce(function(e, o) {
    return e.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function pp(n) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(n());
      });
    })), t;
  };
}
function he(n) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    e[o - 1] = arguments[o];
  return [].concat(e).reduce(function(i, r) {
    return i.replace(/%s/, r);
  }, n);
}
var Ue = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', dp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Hl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function _p(n) {
  n.forEach(function(t) {
    [].concat(Object.keys(t), Hl).filter(function(e, o, i) {
      return i.indexOf(e) === o;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(he(Ue, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(he(Ue, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Zi.indexOf(t.phase) < 0 && console.error(he(Ue, t.name, '"phase"', "either " + Zi.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(he(Ue, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(he(Ue, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(he(Ue, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(he(Ue, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Hl.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        n.find(function(i) {
          return i.name === o;
        }) == null && console.error(he(dp, String(t.name), o, o));
      });
    });
  });
}
function vp(n, t) {
  var e = /* @__PURE__ */ new Set();
  return n.filter(function(o) {
    var i = t(o);
    if (!e.has(i))
      return e.add(i), !0;
  });
}
function ae(n) {
  return n.split("-")[0];
}
function gp(n) {
  var t = n.reduce(function(e, o) {
    var i = e[o.name];
    return e[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
function mp(n, t) {
  var e = mt(n), o = He(n), i = e.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, u = 0;
  if (i) {
    r = i.width, l = i.height;
    var p = Vc();
    (p || !p && t === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + js(n),
    y: u
  };
}
function yp(n) {
  var t, e = He(n), o = Ps(n), i = (t = n.ownerDocument) == null ? void 0 : t.body, r = rn(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = rn(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -o.scrollLeft + js(n), u = -o.scrollTop;
  return kt(i || e).direction === "rtl" && (a += rn(e.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: u
  };
}
function bp(n, t) {
  var e = t.getRootNode && t.getRootNode();
  if (n.contains(t))
    return !0;
  if (e && Rs(e)) {
    var o = t;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Qi(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function $p(n, t) {
  var e = On(n, !1, t === "fixed");
  return e.top = e.top + n.clientTop, e.left = e.left + n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Wl(n, t, e) {
  return t === Kc ? Qi(mp(n, e)) : ln(t) ? $p(t, e) : Qi(yp(He(n)));
}
function wp(n) {
  var t = ho(vi(n)), e = ["absolute", "fixed"].indexOf(kt(n).position) >= 0, o = e && _t(n) ? gi(n) : n;
  return ln(o) ? t.filter(function(i) {
    return ln(i) && bp(i, o) && Tt(i) !== "body";
  }) : [];
}
function kp(n, t, e, o) {
  var i = t === "clippingParents" ? wp(n) : [].concat(t), r = [].concat(i, [e]), l = r[0], a = r.reduce(function(u, p) {
    var s = Wl(n, p, o);
    return u.top = rn(s.top, u.top), u.right = Ar(s.right, u.right), u.bottom = Ar(s.bottom, u.bottom), u.left = rn(s.left, u.left), u;
  }, Wl(n, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Rn(n) {
  return n.split("-")[1];
}
function Xc(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Jc(n) {
  var t = n.reference, e = n.element, o = n.placement, i = o ? ae(o) : null, r = o ? Rn(o) : null, l = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, u;
  switch (i) {
    case $t:
      u = {
        x: l,
        y: t.y - e.height
      };
      break;
    case Nt:
      u = {
        x: l,
        y: t.y + t.height
      };
      break;
    case je:
      u = {
        x: t.x + t.width,
        y: a
      };
      break;
    case le:
      u = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? Xc(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (r) {
      case Dn:
        u[p] = u[p] - (t[s] / 2 - e[s] / 2);
        break;
      case ko:
        u[p] = u[p] + (t[s] / 2 - e[s] / 2);
        break;
    }
  }
  return u;
}
function Zc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ep(n) {
  return Object.assign({}, Zc(), n);
}
function xp(n, t) {
  return t.reduce(function(e, o) {
    return e[o] = n, e;
  }, {});
}
function Ns(n, t) {
  t === void 0 && (t = {});
  var e = t, o = e.placement, i = o === void 0 ? n.placement : o, r = e.strategy, l = r === void 0 ? n.strategy : r, a = e.boundary, u = a === void 0 ? Qh : a, p = e.rootBoundary, s = p === void 0 ? Kc : p, d = e.elementContext, f = d === void 0 ? Jn : d, c = e.altBoundary, h = c === void 0 ? !1 : c, b = e.padding, _ = b === void 0 ? 0 : b, g = Ep(typeof _ != "number" ? _ : xp(_, yi)), y = f === Jn ? tp : Jn, $ = n.rects.popper, k = n.elements[h ? y : f], w = kp(ln(k) ? k : k.contextElement || He(n.elements.popper), u, s, l), m = On(n.elements.reference), E = Jc({
    reference: m,
    element: $,
    strategy: "absolute",
    placement: i
  }), A = Qi(Object.assign({}, $, E)), S = f === Jn ? A : m, O = {
    top: w.top - S.top + g.top,
    bottom: S.bottom - w.bottom + g.bottom,
    left: w.left - S.left + g.left,
    right: S.right - w.right + g.right
  }, M = n.modifiersData.offset;
  if (f === Jn && M) {
    var N = M[i];
    Object.keys(O).forEach(function(j) {
      var Q = [je, Nt].indexOf(j) >= 0 ? 1 : -1, I = [$t, Nt].indexOf(j) >= 0 ? "y" : "x";
      O[j] += N[I] * Q;
    });
  }
  return O;
}
var Il = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ap = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ul() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Cp(n) {
  n === void 0 && (n = {});
  var t = n, e = t.defaultModifiers, o = e === void 0 ? [] : e, i = t.defaultOptions, r = i === void 0 ? zl : i;
  return function(a, u, p) {
    p === void 0 && (p = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zl, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, c = {
      state: s,
      setOptions: function(g) {
        var y = typeof g == "function" ? g(s.options) : g;
        b(), s.options = Object.assign({}, r, s.options, y), s.scrollParents = {
          reference: ln(a) ? ho(a) : a.contextElement ? ho(a.contextElement) : [],
          popper: ho(u)
        };
        var $ = hp(gp([].concat(o, s.options.modifiers)));
        if (s.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = vp([].concat($, s.options.modifiers), function(M) {
            var N = M.name;
            return N;
          });
          if (_p(k), ae(s.options.placement) === mi) {
            var w = s.orderedModifiers.find(function(M) {
              var N = M.name;
              return N === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = kt(u), E = m.marginTop, A = m.marginRight, S = m.marginBottom, O = m.marginLeft;
          [E, A, S, O].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var g = s.elements, y = g.reference, $ = g.popper;
          if (!Ul(y, $)) {
            process.env.NODE_ENV !== "production" && console.error(Il);
            return;
          }
          s.rects = {
            reference: Xh(y, gi($), s.options.strategy === "fixed"),
            popper: Yc($)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(M) {
            return s.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var k = 0, w = 0; w < s.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Ap);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, w = -1;
              continue;
            }
            var m = s.orderedModifiers[w], E = m.fn, A = m.options, S = A === void 0 ? {} : A, O = m.name;
            typeof E == "function" && (s = E({
              state: s,
              options: S,
              name: O,
              instance: c
            }) || s);
          }
        }
      },
      update: pp(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Ul(a, u))
      return process.env.NODE_ENV !== "production" && console.error(Il), c;
    c.setOptions(p).then(function(_) {
      !f && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var g = _.name, y = _.options, $ = y === void 0 ? {} : y, k = _.effect;
        if (typeof k == "function") {
          var w = k({
            state: s,
            name: g,
            instance: c,
            options: $
          }), m = function() {
          };
          d.push(w || m);
        }
      });
    }
    function b() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return c;
  };
}
var Vo = {
  passive: !0
};
function Sp(n) {
  var t = n.state, e = n.instance, o = n.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, a = l === void 0 ? !0 : l, u = mt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && p.forEach(function(s) {
    s.addEventListener("scroll", e.update, Vo);
  }), a && u.addEventListener("resize", e.update, Vo), function() {
    r && p.forEach(function(s) {
      s.removeEventListener("scroll", e.update, Vo);
    }), a && u.removeEventListener("resize", e.update, Vo);
  };
}
const Mp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sp,
  data: {}
};
function Lp(n) {
  var t = n.state, e = n.name;
  t.modifiersData[e] = Jc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Op = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Lp,
  data: {}
};
var Dp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rp(n) {
  var t = n.x, e = n.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Ln(t * i) / i || 0,
    y: Ln(e * i) / i || 0
  };
}
function Bl(n) {
  var t, e = n.popper, o = n.popperRect, i = n.placement, r = n.variation, l = n.offsets, a = n.position, u = n.gpuAcceleration, p = n.adaptive, s = n.roundOffsets, d = n.isFixed, f = l.x, c = f === void 0 ? 0 : f, h = l.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var g = l.hasOwnProperty("x"), y = l.hasOwnProperty("y"), $ = le, k = $t, w = window;
  if (p) {
    var m = gi(e), E = "clientHeight", A = "clientWidth";
    if (m === mt(e) && (m = He(e), kt(m).position !== "static" && a === "absolute" && (E = "scrollHeight", A = "scrollWidth")), m = m, i === $t || (i === le || i === je) && r === ko) {
      k = Nt;
      var S = d && m === w && w.visualViewport ? w.visualViewport.height : m[E];
      b -= S - o.height, b *= u ? 1 : -1;
    }
    if (i === le || (i === $t || i === Nt) && r === ko) {
      $ = je;
      var O = d && m === w && w.visualViewport ? w.visualViewport.width : m[A];
      c -= O - o.width, c *= u ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: a
  }, p && Dp), N = s === !0 ? Rp({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = N.x, b = N.y, u) {
    var j;
    return Object.assign({}, M, (j = {}, j[k] = y ? "0" : "", j[$] = g ? "0" : "", j.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, M, (t = {}, t[k] = y ? b + "px" : "", t[$] = g ? c + "px" : "", t.transform = "", t));
}
function Pp(n) {
  var t = n.state, e = n.options, o = e.gpuAcceleration, i = o === void 0 ? !0 : o, r = e.adaptive, l = r === void 0 ? !0 : r, a = e.roundOffsets, u = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var p = kt(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return p.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var s = {
    placement: ae(t.placement),
    variation: Rn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bl(Object.assign({}, s, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bl(Object.assign({}, s, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Pp,
  data: {}
};
function Tp(n) {
  var t = n.state;
  Object.keys(t.elements).forEach(function(e) {
    var o = t.styles[e] || {}, i = t.attributes[e] || {}, r = t.elements[e];
    !_t(r) || !Tt(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var a = i[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function Np(n) {
  var t = n.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : e[o]), a = l.reduce(function(u, p) {
        return u[p] = "", u;
      }, {});
      !_t(i) || !Tt(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const Hp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Tp,
  effect: Np,
  requires: ["computeStyles"]
};
var Wp = [Mp, Op, jp, Hp], Fl = /* @__PURE__ */ Cp({
  defaultModifiers: Wp
});
function Ip(n) {
  return n === "x" ? "y" : "x";
}
function nr(n, t, e) {
  return rn(n, Ar(t, e));
}
function zp(n, t, e) {
  var o = nr(n, t, e);
  return o > e ? e : o;
}
function Up(n) {
  var t = n.state, e = n.options, o = n.name, i = e.mainAxis, r = i === void 0 ? !0 : i, l = e.altAxis, a = l === void 0 ? !1 : l, u = e.boundary, p = e.rootBoundary, s = e.altBoundary, d = e.padding, f = e.tether, c = f === void 0 ? !0 : f, h = e.tetherOffset, b = h === void 0 ? 0 : h, _ = Ns(t, {
    boundary: u,
    rootBoundary: p,
    padding: d,
    altBoundary: s
  }), g = ae(t.placement), y = Rn(t.placement), $ = !y, k = Xc(g), w = Ip(k), m = t.modifiersData.popperOffsets, E = t.rects.reference, A = t.rects.popper, S = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, O = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (r) {
      var j, Q = k === "y" ? $t : le, I = k === "y" ? Nt : je, T = k === "y" ? "height" : "width", W = m[k], lt = W + _[Q], et = W - _[I], bt = c ? -A[T] / 2 : 0, at = y === Dn ? E[T] : A[T], it = y === Dn ? -A[T] : -E[T], ut = t.elements.arrow, ot = c && ut ? Yc(ut) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zc(), H = L[Q], U = L[I], z = nr(0, E[T], ot[T]), rt = $ ? E[T] / 2 - bt - z - H - O.mainAxis : at - z - H - O.mainAxis, It = $ ? -E[T] / 2 + bt + z + U + O.mainAxis : it + z + U + O.mainAxis, ft = t.elements.arrow && gi(t.elements.arrow), cn = ft ? k === "y" ? ft.clientTop || 0 : ft.clientLeft || 0 : 0, Ie = (j = M == null ? void 0 : M[k]) != null ? j : 0, Fn = W + rt - Ie - cn, B = W + It - Ie, fe = nr(c ? Ar(lt, Fn) : lt, W, c ? rn(et, B) : et);
      m[k] = fe, N[k] = fe - W;
    }
    if (a) {
      var xt, un = k === "x" ? $t : le, fn = k === "x" ? Nt : je, tt = m[w], zt = w === "y" ? "height" : "width", qn = tt + _[un], Vn = tt - _[fn], ze = [$t, le].indexOf(g) !== -1, Yn = (xt = M == null ? void 0 : M[w]) != null ? xt : 0, Gn = ze ? qn : tt - E[zt] - A[zt] - Yn + O.altAxis, Kn = ze ? tt + E[zt] + A[zt] - Yn - O.altAxis : Vn, Xn = c && ze ? zp(Gn, tt, Kn) : nr(c ? Gn : qn, tt, c ? Kn : Vn);
      m[w] = Xn, N[w] = Xn - tt;
    }
    t.modifiersData[o] = N;
  }
}
const ql = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Up,
  requiresIfExists: ["offset"]
};
var Bp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function or(n) {
  return n.replace(/left|right|bottom|top/g, function(t) {
    return Bp[t];
  });
}
var Fp = {
  start: "end",
  end: "start"
};
function Vl(n) {
  return n.replace(/start|end/g, function(t) {
    return Fp[t];
  });
}
function qp(n, t) {
  t === void 0 && (t = {});
  var e = t, o = e.placement, i = e.boundary, r = e.rootBoundary, l = e.padding, a = e.flipVariations, u = e.allowedAutoPlacements, p = u === void 0 ? ep : u, s = Rn(o), d = s ? a ? Nl : Nl.filter(function(h) {
    return Rn(h) === s;
  }) : yi, f = d.filter(function(h) {
    return p.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, b) {
    return h[b] = Ns(n, {
      placement: b,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[ae(b)], h;
  }, {});
  return Object.keys(c).sort(function(h, b) {
    return c[h] - c[b];
  });
}
function Vp(n) {
  if (ae(n) === mi)
    return [];
  var t = or(n);
  return [Vl(n), t, Vl(t)];
}
function Yp(n) {
  var t = n.state, e = n.options, o = n.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = e.mainAxis, r = i === void 0 ? !0 : i, l = e.altAxis, a = l === void 0 ? !0 : l, u = e.fallbackPlacements, p = e.padding, s = e.boundary, d = e.rootBoundary, f = e.altBoundary, c = e.flipVariations, h = c === void 0 ? !0 : c, b = e.allowedAutoPlacements, _ = t.options.placement, g = ae(_), y = g === _, $ = u || (y || !h ? [or(_)] : Vp(_)), k = [_].concat($).reduce(function(ot, L) {
      return ot.concat(ae(L) === mi ? qp(t, {
        placement: L,
        boundary: s,
        rootBoundary: d,
        padding: p,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : L);
    }, []), w = t.rects.reference, m = t.rects.popper, E = /* @__PURE__ */ new Map(), A = !0, S = k[0], O = 0; O < k.length; O++) {
      var M = k[O], N = ae(M), j = Rn(M) === Dn, Q = [$t, Nt].indexOf(N) >= 0, I = Q ? "width" : "height", T = Ns(t, {
        placement: M,
        boundary: s,
        rootBoundary: d,
        altBoundary: f,
        padding: p
      }), W = Q ? j ? je : le : j ? Nt : $t;
      w[I] > m[I] && (W = or(W));
      var lt = or(W), et = [];
      if (r && et.push(T[N] <= 0), a && et.push(T[W] <= 0, T[lt] <= 0), et.every(function(ot) {
        return ot;
      })) {
        S = M, A = !1;
        break;
      }
      E.set(M, et);
    }
    if (A)
      for (var bt = h ? 3 : 1, at = function(L) {
        var H = k.find(function(U) {
          var z = E.get(U);
          if (z)
            return z.slice(0, L).every(function(rt) {
              return rt;
            });
        });
        if (H)
          return S = H, "break";
      }, it = bt; it > 0; it--) {
        var ut = at(it);
        if (ut === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[o]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const Yl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Vt;
class Gp {
  constructor(t = "") {
    x(this, Vt, void 0);
    typeof t == "object" ? C(this, Vt, t) : C(this, Vt, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, Vt).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, Vt).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, Vt).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, Vt).dispatchEvent(t), t;
  }
}
Vt = new WeakMap();
const ts = /* @__PURE__ */ new Set([
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
class Hs extends Gp {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (ts.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Hs.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (ts.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
var Yt, Lo, Ye, eo;
class Gl extends Hs {
  constructor(e = "", o) {
    super(e);
    x(this, Ye);
    x(this, Yt, /* @__PURE__ */ new Map());
    x(this, Lo, void 0);
    C(this, Lo, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, i) {
    e = P(this, Ye, eo).call(this, e), super.on(e, o, i), v(this, Yt).set(o, [e, i]);
  }
  off(e, o, i) {
    e = P(this, Ye, eo).call(this, e), super.off(e, o, i), v(this, Yt).delete(o);
  }
  once(e, o, i) {
    e = P(this, Ye, eo).call(this, e);
    const r = (l) => {
      o(l), v(this, Yt).delete(r);
    };
    super.once(e, r, i), v(this, Yt).set(r, [e, i]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = P(this, Ye, eo).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(v(this, Yt).entries()).forEach(([e, [o, i]]) => {
      super.off(o, e, i);
    }), v(this, Yt).clear();
  }
}
Yt = new WeakMap(), Lo = new WeakMap(), Ye = new WeakSet(), eo = function(e) {
  const o = v(this, Lo);
  return ts.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function Kp(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Xp(n, t, e) {
  const o = Kp(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function Ni(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function es(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (Ni(n) && Ni(e))
    for (const o in e)
      Ni(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), es(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return es(n, ...t);
}
function Jp(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Ua, Ba;
let Ws = (Ba = (Ua = document.documentElement.getAttribute("lang")) == null ? void 0 : Ua.toLowerCase()) != null ? Ba : "zh_cn", ge;
function Zp() {
  return Ws;
}
function Qp(n) {
  Ws = n.toLowerCase();
}
function td(n, t) {
  ge || (ge = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), es(ge, n);
}
function bi(n, t, e, o, i, r) {
  Array.isArray(n) ? ge && n.unshift(ge) : n = ge ? [ge, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || Ws;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === ge ? `${r}.${t}` : t;
    if (a = Xp(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? Jp(a, ...Array.isArray(e) ? e : [e]) : a;
}
bi.addLang = td;
bi.getCode = Zp;
bi.setCode = Qp;
function ed(n) {
  return Object.fromEntries(Object.entries(n).map(([t, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [t, e];
  }));
}
var Gt, gn, St;
class Qc {
  constructor(t, e) {
    x(this, Gt, void 0);
    x(this, gn, void 0);
    x(this, St, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, C(this, St, new Gl(t, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, Gt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? ed(t.dataset) : null, ...e }), this.constructor.all.set(t, this), C(this, gn, t), this.init(), v(this, St).emit("inited", this);
  }
  get options() {
    return v(this, Gt);
  }
  get element() {
    return v(this, gn);
  }
  get events() {
    return v(this, St);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, Gt), t), v(this, Gt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, gn)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(t, e, o) {
    v(this, St).on(t, e, o);
  }
  once(t, e, o) {
    v(this, St).once(t, e, o);
  }
  off(t, e, o) {
    v(this, St).off(t, e, o);
  }
  emit(t, e) {
    let o = Gl.createEvent(t, e);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, Gt)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = v(this, St).emit(o), o;
  }
  i18n(t, e, o) {
    var i;
    return (i = bi(v(this, Gt).i18n, t, e, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const e = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, e) {
    return this.get(t) || new this(t, e);
  }
}
Gt = new WeakMap(), gn = new WeakMap(), St = new WeakMap(), D(Qc, "allComponents", /* @__PURE__ */ new Map());
function nd(n) {
  return n.button === 2;
}
var $i, q, tu, po, Kl, Cr = {}, eu = [], od = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function nu(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function ou(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $i.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return rr(n, l, o, i, null);
}
function rr(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++tu : i };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function rd() {
  return { current: null };
}
function wi(n) {
  return n.children;
}
function ir(n, t) {
  this.props = n, this.context = t;
}
function Pn(n, t) {
  if (t == null)
    return n.__ ? Pn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Pn(n) : null;
}
function ru(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return ru(n);
  }
}
function Xl(n) {
  (!n.__d && (n.__d = !0) && po.push(n) && !Sr.__r++ || Kl !== q.debounceRendering) && ((Kl = q.debounceRendering) || setTimeout)(Sr);
}
function Sr() {
  for (var n; Sr.__r = po.length; )
    n = po.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), po = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, Is(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Pn(r) : l, r.__h), au(o, r), r.__e != l && ru(r)));
    });
}
function iu(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || eu, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? rr(null, c, null, null, c) : Array.isArray(c) ? rr(wi, { children: c }, null, null, null) : c.__b > 0 ? rr(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      Is(n, c, f = f || Cr, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = su(c, u, n) : u = lu(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = Pn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = Pn(o, s + 1)), uu(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      cu(_[s], _[++s], _[++s]);
}
function su(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? su(o, t, e) : lu(e, o, o, i, o.__e, t));
  return t;
}
function lu(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function id(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Mr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Mr(n, r, t[r], e[r], o);
}
function Jl(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || od.test(t) ? e : e + "px";
}
function Mr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || Jl(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || Jl(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? Ql : Zl, r) : n.removeEventListener(t, r ? Ql : Zl, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function Zl(n) {
  this.l[n.type + !1](q.event ? q.event(n) : n);
}
function Ql(n) {
  this.l[n.type + !0](q.event ? q.event(n) : n);
}
function Is(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = q.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new ir(_, y), s.constructor = m, s.render = ld), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = q.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === wi && p.key == null ? p.props.children : p, iu(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = sd(e.__e, t, e, o, i, r, l, u);
    (p = q.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), q.__e(E, t, e);
  }
}
function au(n, t) {
  q.__c && q.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      q.__e(o, e.__v);
    }
  });
}
function sd(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && $i.call(n.childNodes), p = (d = e.props || Cr).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (id(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, iu(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && Pn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && nu(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && Mr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && Mr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function cu(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    q.__e(o, e);
  }
}
function uu(n, t, e) {
  var o, i;
  if (q.unmount && q.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || cu(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && uu(o[i], t, typeof n.type != "function");
  e || n.__e == null || nu(n.__e), n.__e = n.__d = void 0;
}
function ld(n, t, e) {
  return this.constructor(n, e);
}
function ad(n, t, e) {
  var o, i, r;
  q.__ && q.__(n, t), i = (o = typeof e == "function") ? null : e && e.__k || t.__k, r = [], Is(t, n = (!o && e || t).__k = ou(wi, null, [n]), i || Cr, Cr, t.ownerSVGElement !== void 0, !o && e ? [e] : i ? null : t.firstChild ? $i.call(t.childNodes) : null, r, !o && e ? e : i ? i.__e : t.firstChild, o), au(r, n);
}
$i = eu.slice, q = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, tu = 0, ir.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof n == "function" && (n = n(Me({}, e), this.props)), n && Me(e, n), n != null && this.__v && (t && this.__h.push(t), Xl(this));
}, ir.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Xl(this));
}, ir.prototype.render = wi, po = [], Sr.__r = 0;
var Kt;
class cd {
  constructor(t = "") {
    x(this, Kt, void 0);
    typeof t == "object" ? C(this, Kt, t) : C(this, Kt, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, Kt).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, Kt).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, Kt).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, Kt).dispatchEvent(t), t;
  }
}
Kt = new WeakMap();
const ns = /* @__PURE__ */ new Set([
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
class zs extends cd {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (ns.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(zs.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (ns.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
var Xt, Oo, Ge, no;
class ta extends zs {
  constructor(e = "", o) {
    super(e);
    x(this, Ge);
    x(this, Xt, /* @__PURE__ */ new Map());
    x(this, Oo, void 0);
    C(this, Oo, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, i) {
    e = P(this, Ge, no).call(this, e), super.on(e, o, i), v(this, Xt).set(o, [e, i]);
  }
  off(e, o, i) {
    e = P(this, Ge, no).call(this, e), super.off(e, o, i), v(this, Xt).delete(o);
  }
  once(e, o, i) {
    e = P(this, Ge, no).call(this, e);
    const r = (l) => {
      o(l), v(this, Xt).delete(r);
    };
    super.once(e, r, i), v(this, Xt).set(r, [e, i]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = P(this, Ge, no).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(v(this, Xt).entries()).forEach(([e, [o, i]]) => {
      super.off(o, e, i);
    }), v(this, Xt).clear();
  }
}
Xt = new WeakMap(), Oo = new WeakMap(), Ge = new WeakSet(), no = function(e) {
  const o = v(this, Oo);
  return ns.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function ud(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function fd(n, t, e) {
  const o = ud(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function Hi(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function os(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (Hi(n) && Hi(e))
    for (const o in e)
      Hi(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), os(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return os(n, ...t);
}
function hd(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Fa, qa;
let Us = (qa = (Fa = document.documentElement.getAttribute("lang")) == null ? void 0 : Fa.toLowerCase()) != null ? qa : "zh_cn", me;
function pd() {
  return Us;
}
function dd(n) {
  Us = n.toLowerCase();
}
function _d(n, t) {
  me || (me = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), os(me, n);
}
function ki(n, t, e, o, i, r) {
  Array.isArray(n) ? me && n.unshift(me) : n = me ? [me, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || Us;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === me ? `${r}.${t}` : t;
    if (a = fd(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? hd(a, ...Array.isArray(e) ? e : [e]) : a;
}
ki.addLang = _d;
ki.getCode = pd;
ki.setCode = dd;
function vd(n) {
  return Object.fromEntries(Object.entries(n).map(([t, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [t, e];
  }));
}
var Jt, mn, Mt;
class fu {
  constructor(t, e) {
    x(this, Jt, void 0);
    x(this, mn, void 0);
    x(this, Mt, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, C(this, Mt, new ta(t, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, Jt, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? vd(t.dataset) : null, ...e }), this.constructor.all.set(t, this), C(this, mn, t), this.init(), v(this, Mt).emit("inited", this);
  }
  get options() {
    return v(this, Jt);
  }
  get element() {
    return v(this, mn);
  }
  get events() {
    return v(this, Mt);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, Jt), t), v(this, Jt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, mn)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(t, e, o) {
    v(this, Mt).on(t, e, o);
  }
  once(t, e, o) {
    v(this, Mt).once(t, e, o);
  }
  off(t, e, o) {
    v(this, Mt).off(t, e, o);
  }
  emit(t, e) {
    let o = ta.createEvent(t, e);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, Jt)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = v(this, Mt).emit(o), o;
  }
  i18n(t, e, o) {
    var i;
    return (i = ki(v(this, Jt).i18n, t, e, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const e = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, e) {
    return this.get(t) || new this(t, e);
  }
}
Jt = new WeakMap(), mn = new WeakMap(), Mt = new WeakMap(), D(fu, "allComponents", /* @__PURE__ */ new Map());
var Do;
class gd extends fu {
  constructor() {
    super(...arguments);
    x(this, Do, rd());
  }
  get $() {
    return v(this, Do).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(e) {
    const o = this.constructor.Component;
    ad(/* @__PURE__ */ ou(o, {
      ref: v(this, Do),
      ...this.setOptions(e)
    }), this.element);
  }
}
Do = new WeakMap();
var Bs, X, hu, Lr, _o, ea, pu = {}, du = [], md = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function _u(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function dt(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bs.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return sr(n, l, o, i, null);
}
function sr(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++hu : i };
  return i == null && X.vnode != null && X.vnode(r), r;
}
function yd() {
  return { current: null };
}
function Fs(n) {
  return n.children;
}
function vo(n, t) {
  this.props = n, this.context = t;
}
function jn(n, t) {
  if (t == null)
    return n.__ ? jn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? jn(n) : null;
}
function vu(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return vu(n);
  }
}
function na(n) {
  (!n.__d && (n.__d = !0) && _o.push(n) && !Or.__r++ || ea !== X.debounceRendering) && ((ea = X.debounceRendering) || setTimeout)(Or);
}
function Or() {
  for (var n; Or.__r = _o.length; )
    n = _o.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), _o = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, bu(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? jn(r) : l, r.__h), $d(o, r), r.__e != l && vu(r)));
    });
}
function gu(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || du, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? sr(null, c, null, null, c) : Array.isArray(c) ? sr(Fs, { children: c }, null, null, null) : c.__b > 0 ? sr(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      bu(n, c, f = f || pu, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = mu(c, u, n) : u = yu(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = jn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = jn(o, s + 1)), wu(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      $u(_[s], _[++s], _[++s]);
}
function mu(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? mu(o, t, e) : yu(e, o, o, i, o.__e, t));
  return t;
}
function yu(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function bd(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Dr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Dr(n, r, t[r], e[r], o);
}
function oa(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || md.test(t) ? e : e + "px";
}
function Dr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || oa(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || oa(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? ia : ra, r) : n.removeEventListener(t, r ? ia : ra, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function ra(n) {
  this.l[n.type + !1](X.event ? X.event(n) : n);
}
function ia(n) {
  this.l[n.type + !0](X.event ? X.event(n) : n);
}
function bu(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = X.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new vo(_, y), s.constructor = m, s.render = kd), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = X.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === Fs && p.key == null ? p.props.children : p, gu(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = wd(e.__e, t, e, o, i, r, l, u);
    (p = X.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), X.__e(E, t, e);
  }
}
function $d(n, t) {
  X.__c && X.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      X.__e(o, e.__v);
    }
  });
}
function wd(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && Bs.call(n.childNodes), p = (d = e.props || pu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (bd(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, gu(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && jn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && _u(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && Dr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && Dr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function $u(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    X.__e(o, e);
  }
}
function wu(n, t, e) {
  var o, i;
  if (X.unmount && X.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || $u(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        X.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && wu(o[i], t, typeof n.type != "function");
  e || n.__e == null || _u(n.__e), n.__e = n.__d = void 0;
}
function kd(n, t, e) {
  return this.constructor(n, e);
}
Bs = du.slice, X = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, hu = 0, Lr = function(n) {
  return n != null && n.constructor === void 0;
}, vo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof n == "function" && (n = n(Le({}, e), this.props)), n && Le(e, n), n != null && this.__v && (t && this.__h.push(t), na(this));
}, vo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), na(this));
}, vo.prototype.render = Fs, _o = [], Or.__r = 0;
const Te = (...n) => n.map((t) => Array.isArray(t) ? Te(...t) : typeof t == "function" ? Te(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
function Ed(n) {
  const {
    rootClass: t,
    rootProps: e,
    className: o,
    url: i,
    target: r,
    disabled: l,
    active: a,
    icon: u,
    title: p,
    trailingIcon: s,
    children: d,
    ...f
  } = n;
  return /* @__PURE__ */ dt("li", {
    className: Te(t),
    ...e
  }, /* @__PURE__ */ dt("a", {
    className: Te("menu-item", o, { disabled: l, active: a, "has-icon": u }),
    href: i,
    target: r,
    ...f
  }, Lr(u) ? u : typeof u == "string" ? /* @__PURE__ */ dt("i", {
    class: `icon ${u}`
  }) : null, p, Lr(s) ? s : typeof s == "string" ? /* @__PURE__ */ dt("i", {
    class: `icon ${s}`
  }) : null), d);
}
function xd({ className: n }) {
  return /* @__PURE__ */ dt("div", {
    class: Te("menu-divider", n)
  });
}
function Ad({ className: n, title: t, children: e, ...o }) {
  return /* @__PURE__ */ dt("li", {
    class: Te("menu-heading", n),
    ...o
  }, t, e);
}
var Ro, Yr, ku, Po, Gr, Kr;
const ul = class extends vo {
  constructor() {
    super(...arguments);
    x(this, Yr);
    D(this, "state", { shownSubs: {} });
    x(this, Ro, yd());
    x(this, Po, ({ item: e, h: o }) => {
      const { onRenderSubMenu: i } = this.props;
      if (i)
        return i({ menu: this, item: e, h: o });
      const { afterRender: r, onClickItem: l, subMenuTrigger: a, onRenderItem: u } = this.props;
      return /* @__PURE__ */ o(ul, {
        className: "menu-sub",
        items: e.items,
        onRenderSubMenu: v(this, Po),
        afterRender: r,
        onClickItem: l,
        onRenderItem: u,
        subMenuTrigger: a
      });
    });
    x(this, Gr, (e, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(e, !0), o.preventDefault());
    });
    x(this, Kr, (e, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(e, !1), o.preventDefault());
    });
  }
  get $() {
    return v(this, Ro).current;
  }
  componentDidMount() {
    var e, o;
    (o = (e = this.props).afterRender) == null || o.call(e, { menu: this, firstRender: !0 });
  }
  componentDidUpdate() {
    var e, o;
    (o = (e = this.props).afterRender) == null || o.call(e, { menu: this, firstRender: !1 });
  }
  componentWillUnmount() {
    var e, o;
    (o = (e = this.props).beforeDestroy) == null || o.call(e, { menu: this });
  }
  toggleSubMenu(e, o) {
    const { shownSubs: i } = this.state;
    o === void 0 && (o = !i[e]), o ? i[e] = !0 : delete i[e], this.setState({ shownSubs: { ...i } });
  }
  clearAllSubMenu() {
    this.setState({ shownSubs: {} });
  }
  isSubMenuShow(e) {
    return this.state.shownSubs[e];
  }
  render() {
    const {
      className: e,
      items: o,
      hasIcons: i,
      children: r,
      onClickItem: l,
      subMenuTrigger: a,
      onRenderItem: u,
      onRenderSubMenu: p,
      afterRender: s,
      beforeDestroy: d,
      ...f
    } = this.props, c = typeof o == "function" ? o() : o;
    return /* @__PURE__ */ dt("menu", {
      class: Te(
        "menu",
        e,
        (i != null ? i : c == null ? void 0 : c.some((h) => "icon" in h)) ? "has-icons" : ""
      ),
      ...f,
      ref: v(this, Ro)
    }, c == null ? void 0 : c.map((h, b) => {
      const _ = { type: "item", key: b, ...h };
      if (u) {
        const S = u({ menu: this, item: _, index: b, h: dt });
        if (S) {
          if (Lr(S) || typeof S != "object")
            return S;
          Object.assign(_, S);
        }
      }
      const { key: g = b, type: y = "item", ...$ } = _;
      if (y === "heading")
        return /* @__PURE__ */ dt(Ad, {
          ...$,
          key: g
        });
      if (y === "divider")
        return /* @__PURE__ */ dt(xd, {
          ...$,
          key: g
        });
      const { onClick: k, items: w, ...m } = $, E = {
        ...m,
        key: g,
        onClick: P(this, Yr, ku).bind(this, _, b, k)
      }, A = w && (a === "always" || this.state.shownSubs[g]);
      return w && (E.rootClass = Te(E.rootClass, "has-sub", A ? "has-sub-shown" : ""), a === "hover" && (E.rootProps = {
        ...E.rootProps,
        onMouseEnter: v(this, Gr).bind(this, g),
        onMouseLeave: v(this, Kr).bind(this, g)
      })), /* @__PURE__ */ dt(Ed, {
        ...E
      }, A && v(this, Po).call(this, { item: _, h: dt }));
    }), r);
  }
};
let rs = ul;
Ro = new WeakMap(), Yr = new WeakSet(), ku = function(e, o, i, r) {
  var a;
  i && i.call(r.target, r);
  const { onClickItem: l } = this.props;
  l && l({ menu: this, item: e, index: o, event: r }), this.props.subMenuTrigger === "click" && e.items && (this.toggleSubMenu((a = e.key) != null ? a : o, !0), r.stopPropagation(), r.preventDefault());
}, Po = new WeakMap(), Gr = new WeakMap(), Kr = new WeakMap();
class Eu extends gd {
  toggleSubMenu(t, e) {
    var o;
    return (o = this.$) == null ? void 0 : o.toggleSubMenu(t, e);
  }
  clearAllSubMenu() {
    var t;
    return (t = this.$) == null ? void 0 : t.clearAllSubMenu();
  }
  isSubMenuShow(t) {
    var e;
    return (e = this.$) == null ? void 0 : e.isSubMenuShow(t);
  }
}
D(Eu, "Component", rs);
const Cd = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Wi = "show", lr = "contextmenu";
var Ke, ht, Xe, yn, jo, Je, To, is, Xr, Jr, Zr, Qr, xu, ti, Au;
const de = class extends Qc {
  constructor() {
    super(...arguments);
    x(this, To);
    x(this, Qr);
    x(this, ti);
    x(this, Ke, void 0);
    x(this, ht, void 0);
    x(this, Xe, /* @__PURE__ */ new Map());
    x(this, yn, void 0);
    x(this, jo, void 0);
    x(this, Je, void 0);
    x(this, Xr, ({ menu: e }) => {
      const o = e.$;
      if (!(o != null && o.parentElement))
        return;
      let i = v(this, Xe).get(e);
      i || (i = Fl(o.parentElement, o, {
        modifiers: [ql, Yl],
        placement: "right-start"
      }), v(this, Xe).set(e, i)), i.update();
    });
    x(this, Jr, ({ menu: e }) => {
      const o = v(this, Xe).get(e);
      o && (o.destroy(), v(this, Xe).delete(e));
    });
    x(this, Zr, ({ item: e, h: o }) => {
      if (e.type === "item" && e.items)
        return {
          trailingIcon: o("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Wi);
  }
  get menu() {
    var i, r;
    if (v(this, Ke))
      return v(this, Ke);
    const { element: e } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(lr), document.body.appendChild(o);
    else if (e) {
      const l = (i = e.getAttribute("href")) != null ? i : e.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (o = document.querySelector(l)), !o) {
        const a = e.nextElementSibling;
        a != null && a.classList.contains(lr) ? o = a : o = (r = e.parentNode) == null ? void 0 : r.querySelector(`.${lr}`);
      }
    }
    if (o)
      return C(this, Ke, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return v(this, ht) ? v(this, ht) : P(this, To, is).call(this);
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "contextmenu");
  }
  show(e) {
    if (e = e || de.mousePos, this.emit("show", { menu: this, event: e }).defaultPrevented)
      return !1;
    C(this, jo, e), P(this, Qr, xu).call(this, e) !== !1 && (this.menu.classList.add(Wi), P(this, To, is).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, i, r, l;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = v(this, ht)) == null || o.destroy(), C(this, ht, void 0), (i = v(this, Ke)) == null || i.classList.remove(Wi), (l = (r = v(this, Je)) == null ? void 0 : r.$) == null || l.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    (e = v(this, ht)) == null || e.destroy(), super.destroy();
  }
  static clear(e) {
    e && nd(e) || (de.getAll(), de.getAll().forEach((o) => o.hide()));
  }
  static show(e) {
    const { event: o, ...i } = e, r = de.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const e = de.get(document.body);
    return e == null || e.hide(), e;
  }
  static get mousePos() {
    const { watchedMouse: e } = this;
    return e || this.watchMouse(), typeof e == "object" ? e : { clientX: 0, clientY: 0 };
  }
  static watchMouse() {
    this.watchedMouse || (document.addEventListener("mousemove", (e) => {
      this.watchedMouse = e;
    }), this.watchedMouse = !0);
  }
};
let hn = de;
Ke = new WeakMap(), ht = new WeakMap(), Xe = new WeakMap(), yn = new WeakMap(), jo = new WeakMap(), Je = new WeakMap(), To = new WeakSet(), is = function() {
  const e = {
    modifiers: [ql, Yl],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return v(this, ht) ? v(this, ht).setOptions(e) : C(this, ht, Fl(P(this, ti, Au).call(this), this.menu, e)), v(this, ht);
}, Xr = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), Qr = new WeakSet(), xu = function(e) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, e)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: e, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return v(this, Je) ? v(this, Je).render({ items: o, ...r }) : C(this, Je, new Eu(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: v(this, Xr),
    beforeDestroy: v(this, Jr),
    onRenderItem: v(this, Zr)
  })), !0;
}, ti = new WeakSet(), Au = function() {
  return v(this, yn) || C(this, yn, {
    getBoundingClientRect: () => {
      const { clientX: e, clientY: o } = v(this, jo) || de.mousePos;
      return {
        width: 0,
        height: 0,
        top: o,
        right: e,
        bottom: o,
        left: e
      };
    },
    contextElement: this.element
  }), v(this, yn);
}, D(hn, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), D(hn, "watchedMouse", !1);
document.addEventListener("contextmenu", (n) => {
  const t = n.target;
  if (t.closest(`.${lr}`))
    return;
  const e = t.closest(Cd);
  e && (hn.ensure(e).show(n), n.preventDefault());
});
document.addEventListener("click", hn.clear);
function yt(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var t = n.ownerDocument;
    return t && t.defaultView || window;
  }
  return n;
}
function an(n) {
  var t = yt(n).Element;
  return n instanceof t || n instanceof Element;
}
function vt(n) {
  var t = yt(n).HTMLElement;
  return n instanceof t || n instanceof HTMLElement;
}
function qs(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = yt(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
var sn = Math.max, Rr = Math.min, Tn = Math.round;
function ss() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cu() {
  return !/^((?!chrome|android).)*safari/i.test(ss());
}
function Nn(n, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var o = n.getBoundingClientRect(), i = 1, r = 1;
  t && vt(n) && (i = n.offsetWidth > 0 && Tn(o.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && Tn(o.height) / n.offsetHeight || 1);
  var l = an(n) ? yt(n) : window, a = l.visualViewport, u = !Cu() && e, p = (o.left + (u && a ? a.offsetLeft : 0)) / i, s = (o.top + (u && a ? a.offsetTop : 0)) / r, d = o.width / i, f = o.height / r;
  return {
    width: d,
    height: f,
    top: s,
    right: p + d,
    bottom: s + f,
    left: p,
    x: p,
    y: s
  };
}
function Vs(n) {
  var t = yt(n), e = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: o
  };
}
function Sd(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Md(n) {
  return n === yt(n) || !vt(n) ? Vs(n) : Sd(n);
}
function Ht(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function We(n) {
  return ((an(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Ys(n) {
  return Nn(We(n)).left + Vs(n).scrollLeft;
}
function Et(n) {
  return yt(n).getComputedStyle(n);
}
function Gs(n) {
  var t = Et(n), e = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + i + o);
}
function Ld(n) {
  var t = n.getBoundingClientRect(), e = Tn(t.width) / n.offsetWidth || 1, o = Tn(t.height) / n.offsetHeight || 1;
  return e !== 1 || o !== 1;
}
function Od(n, t, e) {
  e === void 0 && (e = !1);
  var o = vt(t), i = vt(t) && Ld(t), r = We(t), l = Nn(n, i, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (o || !o && !e) && ((Ht(t) !== "body" || Gs(r)) && (a = Md(t)), vt(t) ? (u = Nn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : r && (u.x = Ys(r))), {
    x: l.left + a.scrollLeft - u.x,
    y: l.top + a.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
function Su(n) {
  var t = Nn(n), e = n.offsetWidth, o = n.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: e,
    height: o
  };
}
function Ei(n) {
  return Ht(n) === "html" ? n : n.assignedSlot || n.parentNode || (qs(n) ? n.host : null) || We(n);
}
function Mu(n) {
  return ["html", "body", "#document"].indexOf(Ht(n)) >= 0 ? n.ownerDocument.body : vt(n) && Gs(n) ? n : Mu(Ei(n));
}
function go(n, t) {
  var e;
  t === void 0 && (t = []);
  var o = Mu(n), i = o === ((e = n.ownerDocument) == null ? void 0 : e.body), r = yt(o), l = i ? [r].concat(r.visualViewport || [], Gs(o) ? o : []) : o, a = t.concat(l);
  return i ? a : a.concat(go(Ei(l)));
}
function Dd(n) {
  return ["table", "td", "th"].indexOf(Ht(n)) >= 0;
}
function sa(n) {
  return !vt(n) || Et(n).position === "fixed" ? null : n.offsetParent;
}
function Rd(n) {
  var t = /firefox/i.test(ss()), e = /Trident/i.test(ss());
  if (e && vt(n)) {
    var o = Et(n);
    if (o.position === "fixed")
      return null;
  }
  var i = Ei(n);
  for (qs(i) && (i = i.host); vt(i) && ["html", "body"].indexOf(Ht(i)) < 0; ) {
    var r = Et(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function xi(n) {
  for (var t = yt(n), e = sa(n); e && Dd(e) && Et(e).position === "static"; )
    e = sa(e);
  return e && (Ht(e) === "html" || Ht(e) === "body" && Et(e).position === "static") ? t : e || Rd(n) || t;
}
var wt = "top", Wt = "bottom", Ne = "right", ce = "left", Ai = "auto", Ci = [wt, Wt, Ne, ce], Hn = "start", Eo = "end", Pd = "clippingParents", Lu = "viewport", Zn = "popper", jd = "reference", la = /* @__PURE__ */ Ci.reduce(function(n, t) {
  return n.concat([t + "-" + Hn, t + "-" + Eo]);
}, []), Td = /* @__PURE__ */ [].concat(Ci, [Ai]).reduce(function(n, t) {
  return n.concat([t, t + "-" + Hn, t + "-" + Eo]);
}, []), Nd = "beforeRead", Hd = "read", Wd = "afterRead", Id = "beforeMain", zd = "main", Ud = "afterMain", Bd = "beforeWrite", Fd = "write", qd = "afterWrite", ls = [Nd, Hd, Wd, Id, zd, Ud, Bd, Fd, qd];
function Vd(n) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), o = [];
  n.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    e.add(r.name);
    var l = [].concat(r.requires || [], r.requiresIfExists || []);
    l.forEach(function(a) {
      if (!e.has(a)) {
        var u = t.get(a);
        u && i(u);
      }
    }), o.push(r);
  }
  return n.forEach(function(r) {
    e.has(r.name) || i(r);
  }), o;
}
function Yd(n) {
  var t = Vd(n);
  return ls.reduce(function(e, o) {
    return e.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function Gd(n) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(n());
      });
    })), t;
  };
}
function pe(n) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    e[o - 1] = arguments[o];
  return [].concat(e).reduce(function(i, r) {
    return i.replace(/%s/, r);
  }, n);
}
var Be = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Kd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', aa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Xd(n) {
  n.forEach(function(t) {
    [].concat(Object.keys(t), aa).filter(function(e, o, i) {
      return i.indexOf(e) === o;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(pe(Be, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Be, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          ls.indexOf(t.phase) < 0 && console.error(pe(Be, t.name, '"phase"', "either " + ls.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Be, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Be, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Be, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Be, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + aa.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        n.find(function(i) {
          return i.name === o;
        }) == null && console.error(pe(Kd, String(t.name), o, o));
      });
    });
  });
}
function Jd(n, t) {
  var e = /* @__PURE__ */ new Set();
  return n.filter(function(o) {
    var i = t(o);
    if (!e.has(i))
      return e.add(i), !0;
  });
}
function ue(n) {
  return n.split("-")[0];
}
function Zd(n) {
  var t = n.reduce(function(e, o) {
    var i = e[o.name];
    return e[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
function Qd(n, t) {
  var e = yt(n), o = We(n), i = e.visualViewport, r = o.clientWidth, l = o.clientHeight, a = 0, u = 0;
  if (i) {
    r = i.width, l = i.height;
    var p = Cu();
    (p || !p && t === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: a + Ys(n),
    y: u
  };
}
function t_(n) {
  var t, e = We(n), o = Vs(n), i = (t = n.ownerDocument) == null ? void 0 : t.body, r = sn(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = sn(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -o.scrollLeft + Ys(n), u = -o.scrollTop;
  return Et(i || e).direction === "rtl" && (a += sn(e.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: a,
    y: u
  };
}
function e_(n, t) {
  var e = t.getRootNode && t.getRootNode();
  if (n.contains(t))
    return !0;
  if (e && qs(e)) {
    var o = t;
    do {
      if (o && n.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function as(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function n_(n, t) {
  var e = Nn(n, !1, t === "fixed");
  return e.top = e.top + n.clientTop, e.left = e.left + n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top, e;
}
function ca(n, t, e) {
  return t === Lu ? as(Qd(n, e)) : an(t) ? n_(t, e) : as(t_(We(n)));
}
function o_(n) {
  var t = go(Ei(n)), e = ["absolute", "fixed"].indexOf(Et(n).position) >= 0, o = e && vt(n) ? xi(n) : n;
  return an(o) ? t.filter(function(i) {
    return an(i) && e_(i, o) && Ht(i) !== "body";
  }) : [];
}
function r_(n, t, e, o) {
  var i = t === "clippingParents" ? o_(n) : [].concat(t), r = [].concat(i, [e]), l = r[0], a = r.reduce(function(u, p) {
    var s = ca(n, p, o);
    return u.top = sn(s.top, u.top), u.right = Rr(s.right, u.right), u.bottom = Rr(s.bottom, u.bottom), u.left = sn(s.left, u.left), u;
  }, ca(n, l, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Wn(n) {
  return n.split("-")[1];
}
function Ou(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Du(n) {
  var t = n.reference, e = n.element, o = n.placement, i = o ? ue(o) : null, r = o ? Wn(o) : null, l = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, u;
  switch (i) {
    case wt:
      u = {
        x: l,
        y: t.y - e.height
      };
      break;
    case Wt:
      u = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ne:
      u = {
        x: t.x + t.width,
        y: a
      };
      break;
    case ce:
      u = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? Ou(i) : null;
  if (p != null) {
    var s = p === "y" ? "height" : "width";
    switch (r) {
      case Hn:
        u[p] = u[p] - (t[s] / 2 - e[s] / 2);
        break;
      case Eo:
        u[p] = u[p] + (t[s] / 2 - e[s] / 2);
        break;
    }
  }
  return u;
}
function Ru() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function i_(n) {
  return Object.assign({}, Ru(), n);
}
function s_(n, t) {
  return t.reduce(function(e, o) {
    return e[o] = n, e;
  }, {});
}
function Ks(n, t) {
  t === void 0 && (t = {});
  var e = t, o = e.placement, i = o === void 0 ? n.placement : o, r = e.strategy, l = r === void 0 ? n.strategy : r, a = e.boundary, u = a === void 0 ? Pd : a, p = e.rootBoundary, s = p === void 0 ? Lu : p, d = e.elementContext, f = d === void 0 ? Zn : d, c = e.altBoundary, h = c === void 0 ? !1 : c, b = e.padding, _ = b === void 0 ? 0 : b, g = i_(typeof _ != "number" ? _ : s_(_, Ci)), y = f === Zn ? jd : Zn, $ = n.rects.popper, k = n.elements[h ? y : f], w = r_(an(k) ? k : k.contextElement || We(n.elements.popper), u, s, l), m = Nn(n.elements.reference), E = Du({
    reference: m,
    element: $,
    strategy: "absolute",
    placement: i
  }), A = as(Object.assign({}, $, E)), S = f === Zn ? A : m, O = {
    top: w.top - S.top + g.top,
    bottom: S.bottom - w.bottom + g.bottom,
    left: w.left - S.left + g.left,
    right: S.right - w.right + g.right
  }, M = n.modifiersData.offset;
  if (f === Zn && M) {
    var N = M[i];
    Object.keys(O).forEach(function(j) {
      var Q = [Ne, Wt].indexOf(j) >= 0 ? 1 : -1, I = [wt, Wt].indexOf(j) >= 0 ? "y" : "x";
      O[j] += N[I] * Q;
    });
  }
  return O;
}
var ua = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", l_ = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", fa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ha() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function a_(n) {
  n === void 0 && (n = {});
  var t = n, e = t.defaultModifiers, o = e === void 0 ? [] : e, i = t.defaultOptions, r = i === void 0 ? fa : i;
  return function(a, u, p) {
    p === void 0 && (p = r);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fa, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, c = {
      state: s,
      setOptions: function(g) {
        var y = typeof g == "function" ? g(s.options) : g;
        b(), s.options = Object.assign({}, r, s.options, y), s.scrollParents = {
          reference: an(a) ? go(a) : a.contextElement ? go(a.contextElement) : [],
          popper: go(u)
        };
        var $ = Yd(Zd([].concat(o, s.options.modifiers)));
        if (s.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Jd([].concat($, s.options.modifiers), function(M) {
            var N = M.name;
            return N;
          });
          if (Xd(k), ue(s.options.placement) === Ai) {
            var w = s.orderedModifiers.find(function(M) {
              var N = M.name;
              return N === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = Et(u), E = m.marginTop, A = m.marginRight, S = m.marginBottom, O = m.marginLeft;
          [E, A, S, O].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var g = s.elements, y = g.reference, $ = g.popper;
          if (!ha(y, $)) {
            process.env.NODE_ENV !== "production" && console.error(ua);
            return;
          }
          s.rects = {
            reference: Od(y, xi($), s.options.strategy === "fixed"),
            popper: Su($)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(M) {
            return s.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var k = 0, w = 0; w < s.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(l_);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, w = -1;
              continue;
            }
            var m = s.orderedModifiers[w], E = m.fn, A = m.options, S = A === void 0 ? {} : A, O = m.name;
            typeof E == "function" && (s = E({
              state: s,
              options: S,
              name: O,
              instance: c
            }) || s);
          }
        }
      },
      update: Gd(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!ha(a, u))
      return process.env.NODE_ENV !== "production" && console.error(ua), c;
    c.setOptions(p).then(function(_) {
      !f && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var g = _.name, y = _.options, $ = y === void 0 ? {} : y, k = _.effect;
        if (typeof k == "function") {
          var w = k({
            state: s,
            name: g,
            instance: c,
            options: $
          }), m = function() {
          };
          d.push(w || m);
        }
      });
    }
    function b() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return c;
  };
}
var Yo = {
  passive: !0
};
function c_(n) {
  var t = n.state, e = n.instance, o = n.options, i = o.scroll, r = i === void 0 ? !0 : i, l = o.resize, a = l === void 0 ? !0 : l, u = yt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && p.forEach(function(s) {
    s.addEventListener("scroll", e.update, Yo);
  }), a && u.addEventListener("resize", e.update, Yo), function() {
    r && p.forEach(function(s) {
      s.removeEventListener("scroll", e.update, Yo);
    }), a && u.removeEventListener("resize", e.update, Yo);
  };
}
const u_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: c_,
  data: {}
};
function f_(n) {
  var t = n.state, e = n.name;
  t.modifiersData[e] = Du({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const h_ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: f_,
  data: {}
};
var p_ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function d_(n) {
  var t = n.x, e = n.y, o = window, i = o.devicePixelRatio || 1;
  return {
    x: Tn(t * i) / i || 0,
    y: Tn(e * i) / i || 0
  };
}
function pa(n) {
  var t, e = n.popper, o = n.popperRect, i = n.placement, r = n.variation, l = n.offsets, a = n.position, u = n.gpuAcceleration, p = n.adaptive, s = n.roundOffsets, d = n.isFixed, f = l.x, c = f === void 0 ? 0 : f, h = l.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var g = l.hasOwnProperty("x"), y = l.hasOwnProperty("y"), $ = ce, k = wt, w = window;
  if (p) {
    var m = xi(e), E = "clientHeight", A = "clientWidth";
    if (m === yt(e) && (m = We(e), Et(m).position !== "static" && a === "absolute" && (E = "scrollHeight", A = "scrollWidth")), m = m, i === wt || (i === ce || i === Ne) && r === Eo) {
      k = Wt;
      var S = d && m === w && w.visualViewport ? w.visualViewport.height : m[E];
      b -= S - o.height, b *= u ? 1 : -1;
    }
    if (i === ce || (i === wt || i === Wt) && r === Eo) {
      $ = Ne;
      var O = d && m === w && w.visualViewport ? w.visualViewport.width : m[A];
      c -= O - o.width, c *= u ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: a
  }, p && p_), N = s === !0 ? d_({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = N.x, b = N.y, u) {
    var j;
    return Object.assign({}, M, (j = {}, j[k] = y ? "0" : "", j[$] = g ? "0" : "", j.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, M, (t = {}, t[k] = y ? b + "px" : "", t[$] = g ? c + "px" : "", t.transform = "", t));
}
function __(n) {
  var t = n.state, e = n.options, o = e.gpuAcceleration, i = o === void 0 ? !0 : o, r = e.adaptive, l = r === void 0 ? !0 : r, a = e.roundOffsets, u = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var p = Et(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return p.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var s = {
    placement: ue(t.placement),
    variation: Wn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pa(Object.assign({}, s, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pa(Object.assign({}, s, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const v_ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: __,
  data: {}
};
function g_(n) {
  var t = n.state;
  Object.keys(t.elements).forEach(function(e) {
    var o = t.styles[e] || {}, i = t.attributes[e] || {}, r = t.elements[e];
    !vt(r) || !Ht(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
      var a = i[l];
      a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function m_(n) {
  var t = n.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], r = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : e[o]), a = l.reduce(function(u, p) {
        return u[p] = "", u;
      }, {});
      !vt(i) || !Ht(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const y_ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: g_,
  effect: m_,
  requires: ["computeStyles"]
};
var b_ = [u_, h_, v_, y_], $_ = /* @__PURE__ */ a_({
  defaultModifiers: b_
});
function w_(n) {
  return n === "x" ? "y" : "x";
}
function ar(n, t, e) {
  return sn(n, Rr(t, e));
}
function k_(n, t, e) {
  var o = ar(n, t, e);
  return o > e ? e : o;
}
function E_(n) {
  var t = n.state, e = n.options, o = n.name, i = e.mainAxis, r = i === void 0 ? !0 : i, l = e.altAxis, a = l === void 0 ? !1 : l, u = e.boundary, p = e.rootBoundary, s = e.altBoundary, d = e.padding, f = e.tether, c = f === void 0 ? !0 : f, h = e.tetherOffset, b = h === void 0 ? 0 : h, _ = Ks(t, {
    boundary: u,
    rootBoundary: p,
    padding: d,
    altBoundary: s
  }), g = ue(t.placement), y = Wn(t.placement), $ = !y, k = Ou(g), w = w_(k), m = t.modifiersData.popperOffsets, E = t.rects.reference, A = t.rects.popper, S = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, O = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (r) {
      var j, Q = k === "y" ? wt : ce, I = k === "y" ? Wt : Ne, T = k === "y" ? "height" : "width", W = m[k], lt = W + _[Q], et = W - _[I], bt = c ? -A[T] / 2 : 0, at = y === Hn ? E[T] : A[T], it = y === Hn ? -A[T] : -E[T], ut = t.elements.arrow, ot = c && ut ? Su(ut) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ru(), H = L[Q], U = L[I], z = ar(0, E[T], ot[T]), rt = $ ? E[T] / 2 - bt - z - H - O.mainAxis : at - z - H - O.mainAxis, It = $ ? -E[T] / 2 + bt + z + U + O.mainAxis : it + z + U + O.mainAxis, ft = t.elements.arrow && xi(t.elements.arrow), cn = ft ? k === "y" ? ft.clientTop || 0 : ft.clientLeft || 0 : 0, Ie = (j = M == null ? void 0 : M[k]) != null ? j : 0, Fn = W + rt - Ie - cn, B = W + It - Ie, fe = ar(c ? Rr(lt, Fn) : lt, W, c ? sn(et, B) : et);
      m[k] = fe, N[k] = fe - W;
    }
    if (a) {
      var xt, un = k === "x" ? wt : ce, fn = k === "x" ? Wt : Ne, tt = m[w], zt = w === "y" ? "height" : "width", qn = tt + _[un], Vn = tt - _[fn], ze = [wt, ce].indexOf(g) !== -1, Yn = (xt = M == null ? void 0 : M[w]) != null ? xt : 0, Gn = ze ? qn : tt - E[zt] - A[zt] - Yn + O.altAxis, Kn = ze ? tt + E[zt] + A[zt] - Yn - O.altAxis : Vn, Xn = c && ze ? k_(Gn, tt, Kn) : ar(c ? Gn : qn, tt, c ? Kn : Vn);
      m[w] = Xn, N[w] = Xn - tt;
    }
    t.modifiersData[o] = N;
  }
}
const x_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: E_,
  requiresIfExists: ["offset"]
};
var A_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cr(n) {
  return n.replace(/left|right|bottom|top/g, function(t) {
    return A_[t];
  });
}
var C_ = {
  start: "end",
  end: "start"
};
function da(n) {
  return n.replace(/start|end/g, function(t) {
    return C_[t];
  });
}
function S_(n, t) {
  t === void 0 && (t = {});
  var e = t, o = e.placement, i = e.boundary, r = e.rootBoundary, l = e.padding, a = e.flipVariations, u = e.allowedAutoPlacements, p = u === void 0 ? Td : u, s = Wn(o), d = s ? a ? la : la.filter(function(h) {
    return Wn(h) === s;
  }) : Ci, f = d.filter(function(h) {
    return p.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, b) {
    return h[b] = Ks(n, {
      placement: b,
      boundary: i,
      rootBoundary: r,
      padding: l
    })[ue(b)], h;
  }, {});
  return Object.keys(c).sort(function(h, b) {
    return c[h] - c[b];
  });
}
function M_(n) {
  if (ue(n) === Ai)
    return [];
  var t = cr(n);
  return [da(n), t, da(t)];
}
function L_(n) {
  var t = n.state, e = n.options, o = n.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = e.mainAxis, r = i === void 0 ? !0 : i, l = e.altAxis, a = l === void 0 ? !0 : l, u = e.fallbackPlacements, p = e.padding, s = e.boundary, d = e.rootBoundary, f = e.altBoundary, c = e.flipVariations, h = c === void 0 ? !0 : c, b = e.allowedAutoPlacements, _ = t.options.placement, g = ue(_), y = g === _, $ = u || (y || !h ? [cr(_)] : M_(_)), k = [_].concat($).reduce(function(ot, L) {
      return ot.concat(ue(L) === Ai ? S_(t, {
        placement: L,
        boundary: s,
        rootBoundary: d,
        padding: p,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : L);
    }, []), w = t.rects.reference, m = t.rects.popper, E = /* @__PURE__ */ new Map(), A = !0, S = k[0], O = 0; O < k.length; O++) {
      var M = k[O], N = ue(M), j = Wn(M) === Hn, Q = [wt, Wt].indexOf(N) >= 0, I = Q ? "width" : "height", T = Ks(t, {
        placement: M,
        boundary: s,
        rootBoundary: d,
        altBoundary: f,
        padding: p
      }), W = Q ? j ? Ne : ce : j ? Wt : wt;
      w[I] > m[I] && (W = cr(W));
      var lt = cr(W), et = [];
      if (r && et.push(T[N] <= 0), a && et.push(T[W] <= 0, T[lt] <= 0), et.every(function(ot) {
        return ot;
      })) {
        S = M, A = !1;
        break;
      }
      E.set(M, et);
    }
    if (A)
      for (var bt = h ? 3 : 1, at = function(L) {
        var H = k.find(function(U) {
          var z = E.get(U);
          if (z)
            return z.slice(0, L).every(function(rt) {
              return rt;
            });
        });
        if (H)
          return S = H, "break";
      }, it = bt; it > 0; it--) {
        var ut = at(it);
        if (ut === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[o]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const O_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: L_,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Zt;
class D_ {
  constructor(t = "") {
    x(this, Zt, void 0);
    typeof t == "object" ? C(this, Zt, t) : C(this, Zt, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, Zt).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, Zt).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, Zt).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, Zt).dispatchEvent(t), t;
  }
}
Zt = new WeakMap();
const cs = /* @__PURE__ */ new Set([
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
class Xs extends D_ {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (cs.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Xs.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (cs.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
var Qt, No, Ze, oo;
class _a extends Xs {
  constructor(e = "", o) {
    super(e);
    x(this, Ze);
    x(this, Qt, /* @__PURE__ */ new Map());
    x(this, No, void 0);
    C(this, No, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, i) {
    e = P(this, Ze, oo).call(this, e), super.on(e, o, i), v(this, Qt).set(o, [e, i]);
  }
  off(e, o, i) {
    e = P(this, Ze, oo).call(this, e), super.off(e, o, i), v(this, Qt).delete(o);
  }
  once(e, o, i) {
    e = P(this, Ze, oo).call(this, e);
    const r = (l) => {
      o(l), v(this, Qt).delete(r);
    };
    super.once(e, r, i), v(this, Qt).set(r, [e, i]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = P(this, Ze, oo).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(v(this, Qt).entries()).forEach(([e, [o, i]]) => {
      super.off(o, e, i);
    }), v(this, Qt).clear();
  }
}
Qt = new WeakMap(), No = new WeakMap(), Ze = new WeakSet(), oo = function(e) {
  const o = v(this, No);
  return cs.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function R_(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function P_(n, t, e) {
  const o = R_(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function Ii(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function us(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (Ii(n) && Ii(e))
    for (const o in e)
      Ii(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), us(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return us(n, ...t);
}
function j_(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Va, Ya;
let Js = (Ya = (Va = document.documentElement.getAttribute("lang")) == null ? void 0 : Va.toLowerCase()) != null ? Ya : "zh_cn", ye;
function T_() {
  return Js;
}
function N_(n) {
  Js = n.toLowerCase();
}
function H_(n, t) {
  ye || (ye = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), us(ye, n);
}
function Si(n, t, e, o, i, r) {
  Array.isArray(n) ? ye && n.unshift(ye) : n = ye ? [ye, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || Js;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === ye ? `${r}.${t}` : t;
    if (a = P_(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? j_(a, ...Array.isArray(e) ? e : [e]) : a;
}
Si.addLang = H_;
Si.getCode = T_;
Si.setCode = N_;
function W_(n) {
  return Object.fromEntries(Object.entries(n).map(([t, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [t, e];
  }));
}
var te, bn, Lt;
class Pu {
  constructor(t, e) {
    x(this, te, void 0);
    x(this, bn, void 0);
    x(this, Lt, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, C(this, Lt, new _a(t, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, te, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? W_(t.dataset) : null, ...e }), this.constructor.all.set(t, this), C(this, bn, t), this.init(), v(this, Lt).emit("inited", this);
  }
  get options() {
    return v(this, te);
  }
  get element() {
    return v(this, bn);
  }
  get events() {
    return v(this, Lt);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, te), t), v(this, te);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, bn)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(t, e, o) {
    v(this, Lt).on(t, e, o);
  }
  once(t, e, o) {
    v(this, Lt).once(t, e, o);
  }
  off(t, e, o) {
    v(this, Lt).off(t, e, o);
  }
  emit(t, e) {
    let o = _a.createEvent(t, e);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, te)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = v(this, Lt).emit(o), o;
  }
  i18n(t, e, o) {
    var i;
    return (i = Si(v(this, te).i18n, t, e, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const e = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, e) {
    return this.get(t) || new this(t, e);
  }
}
te = new WeakMap(), bn = new WeakMap(), Lt = new WeakMap(), D(Pu, "allComponents", /* @__PURE__ */ new Map());
function I_(n) {
  return (n == null ? void 0 : n.nodeType) !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false";
}
function z_(n) {
  return n.button === 2;
}
const U_ = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', Qn = "show", va = "dropdown-menu";
var Qe, ee;
const ei = class extends Pu {
  constructor() {
    super(...arguments);
    x(this, Qe, void 0);
    x(this, ee, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(Qn);
  }
  get menu() {
    var e, o;
    if (!v(this, Qe)) {
      const { element: i } = this;
      let r;
      const l = (e = i.getAttribute("href")) != null ? e : i.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (r = document.querySelector(l)), !r) {
        const a = i.nextElementSibling;
        a != null && a.classList.contains(va) ? r = a : r = (o = i.parentNode) == null ? void 0 : o.querySelector(`.${va}`);
      }
      if (r)
        C(this, Qe, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return v(this, Qe);
  }
  get popper() {
    return v(this, ee) || C(this, ee, $_(this.element, this.menu, {
      modifiers: [x_, O_],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), v(this, ee);
  }
  show(e) {
    this.events.emit("show", this).defaultPrevented || ((e == null ? void 0 : e.hideOthers) !== !1 && ei.getAll().forEach((i) => i !== this ? i.hide() : null), this.menu.classList.add(Qn), this.element.classList.add(Qn), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, i;
    I_(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = v(this, ee)) == null || o.destroy(), C(this, ee, void 0), (i = v(this, Qe)) == null || i.classList.remove(Qn), this.element.classList.remove(Qn), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var e;
    (e = v(this, ee)) == null || e.destroy(), super.destroy();
  }
  static clear(e) {
    e && z_(e) || ei.getAll().forEach((o) => o.hide());
  }
};
let pn = ei;
Qe = new WeakMap(), ee = new WeakMap(), D(pn, "NAME", "dropdown"), D(pn, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(n) {
  const e = n.target.closest(U_);
  e ? pn.ensure(e).toggle() : pn.clear(n);
});
var Mi, V, ju, Tu, mo, ga, Pr = {}, Nu = [], B_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Hu(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function Li(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Mi.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return ur(n, l, o, i, null);
}
function ur(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ju : i };
  return i == null && V.vnode != null && V.vnode(r), r;
}
function F_() {
  return { current: null };
}
function Oi(n) {
  return n.children;
}
function fr(n, t) {
  this.props = n, this.context = t;
}
function In(n, t) {
  if (t == null)
    return n.__ ? In(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? In(n) : null;
}
function Wu(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Wu(n);
  }
}
function ma(n) {
  (!n.__d && (n.__d = !0) && mo.push(n) && !jr.__r++ || ga !== V.debounceRendering) && ((ga = V.debounceRendering) || setTimeout)(jr);
}
function jr() {
  for (var n; jr.__r = mo.length; )
    n = mo.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), mo = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, Zs(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? In(r) : l, r.__h), Bu(o, r), r.__e != l && Wu(r)));
    });
}
function Iu(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || Nu, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? ur(null, c, null, null, c) : Array.isArray(c) ? ur(Oi, { children: c }, null, null, null) : c.__b > 0 ? ur(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      Zs(n, c, f = f || Pr, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = zu(c, u, n) : u = Uu(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = In(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = In(o, s + 1)), qu(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Fu(_[s], _[++s], _[++s]);
}
function zu(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? zu(o, t, e) : Uu(e, o, o, i, o.__e, t));
  return t;
}
function Uu(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function q_(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Tr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Tr(n, r, t[r], e[r], o);
}
function ya(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || B_.test(t) ? e : e + "px";
}
function Tr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || ya(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || ya(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? $a : ba, r) : n.removeEventListener(t, r ? $a : ba, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function ba(n) {
  this.l[n.type + !1](V.event ? V.event(n) : n);
}
function $a(n) {
  this.l[n.type + !0](V.event ? V.event(n) : n);
}
function Zs(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = V.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new fr(_, y), s.constructor = m, s.render = Y_), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = V.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === Oi && p.key == null ? p.props.children : p, Iu(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = V_(e.__e, t, e, o, i, r, l, u);
    (p = V.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), V.__e(E, t, e);
  }
}
function Bu(n, t) {
  V.__c && V.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      V.__e(o, e.__v);
    }
  });
}
function V_(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && Mi.call(n.childNodes), p = (d = e.props || Pr).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (q_(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, Iu(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && In(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && Hu(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && Tr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && Tr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function Fu(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    V.__e(o, e);
  }
}
function qu(n, t, e) {
  var o, i;
  if (V.unmount && V.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || Fu(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        V.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && qu(o[i], t, typeof n.type != "function");
  e || n.__e == null || Hu(n.__e), n.__e = n.__d = void 0;
}
function Y_(n, t, e) {
  return this.constructor(n, e);
}
function G_(n, t, e) {
  var o, i, r;
  V.__ && V.__(n, t), i = (o = typeof e == "function") ? null : e && e.__k || t.__k, r = [], Zs(t, n = (!o && e || t).__k = Li(Oi, null, [n]), i || Pr, Pr, t.ownerSVGElement !== void 0, !o && e ? [e] : i ? null : t.firstChild ? Mi.call(t.childNodes) : null, r, !o && e ? e : i ? i.__e : t.firstChild, o), Bu(r, n);
}
Mi = Nu.slice, V = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, ju = 0, Tu = function(n) {
  return n != null && n.constructor === void 0;
}, fr.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof n == "function" && (n = n(Oe({}, e), this.props)), n && Oe(e, n), n != null && this.__v && (t && this.__h.push(t), ma(this));
}, fr.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ma(this));
}, fr.prototype.render = Oi, mo = [], jr.__r = 0;
var ne;
class K_ {
  constructor(t = "") {
    x(this, ne, void 0);
    typeof t == "object" ? C(this, ne, t) : C(this, ne, document.appendChild(document.createComment(t)));
  }
  on(t, e, o) {
    v(this, ne).addEventListener(t, e, o);
  }
  once(t, e, o) {
    v(this, ne).addEventListener(t, e, { once: !0, ...o });
  }
  off(t, e, o) {
    v(this, ne).removeEventListener(t, e, o);
  }
  emit(t) {
    return v(this, ne).dispatchEvent(t), t;
  }
}
ne = new WeakMap();
const fs = /* @__PURE__ */ new Set([
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
class Qs extends K_ {
  on(t, e, o) {
    super.on(t, e, o);
  }
  off(t, e, o) {
    super.off(t, e, o);
  }
  once(t, e, o) {
    super.once(t, e, o);
  }
  emit(t, e) {
    return typeof t == "string" && (fs.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Qs.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (fs.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
var oe, Ho, tn, ro;
class wa extends Qs {
  constructor(e = "", o) {
    super(e);
    x(this, tn);
    x(this, oe, /* @__PURE__ */ new Map());
    x(this, Ho, void 0);
    C(this, Ho, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, i) {
    e = P(this, tn, ro).call(this, e), super.on(e, o, i), v(this, oe).set(o, [e, i]);
  }
  off(e, o, i) {
    e = P(this, tn, ro).call(this, e), super.off(e, o, i), v(this, oe).delete(o);
  }
  once(e, o, i) {
    e = P(this, tn, ro).call(this, e);
    const r = (l) => {
      o(l), v(this, oe).delete(r);
    };
    super.once(e, r, i), v(this, oe).set(r, [e, i]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = P(this, tn, ro).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(v(this, oe).entries()).forEach(([e, [o, i]]) => {
      super.off(o, e, i);
    }), v(this, oe).clear();
  }
}
oe = new WeakMap(), Ho = new WeakMap(), tn = new WeakSet(), ro = function(e) {
  const o = v(this, Ho);
  return fs.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function X_(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function J_(n, t, e) {
  const o = X_(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function zi(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function hs(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (zi(n) && zi(e))
    for (const o in e)
      zi(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), hs(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return hs(n, ...t);
}
function Z_(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Ga, Ka;
let tl = (Ka = (Ga = document.documentElement.getAttribute("lang")) == null ? void 0 : Ga.toLowerCase()) != null ? Ka : "zh_cn", be;
function Q_() {
  return tl;
}
function tv(n) {
  tl = n.toLowerCase();
}
function ev(n, t) {
  be || (be = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), hs(be, n);
}
function Di(n, t, e, o, i, r) {
  Array.isArray(n) ? be && n.unshift(be) : n = be ? [be, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || tl;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === be ? `${r}.${t}` : t;
    if (a = J_(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? Z_(a, ...Array.isArray(e) ? e : [e]) : a;
}
Di.addLang = ev;
Di.getCode = Q_;
Di.setCode = tv;
function nv(n) {
  return Object.fromEntries(Object.entries(n).map(([t, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [t, e];
  }));
}
var re, $n, Ot;
class Vu {
  constructor(t, e) {
    x(this, re, void 0);
    x(this, $n, void 0);
    x(this, Ot, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, C(this, Ot, new wa(t, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, re, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? nv(t.dataset) : null, ...e }), this.constructor.all.set(t, this), C(this, $n, t), this.init(), v(this, Ot).emit("inited", this);
  }
  get options() {
    return v(this, re);
  }
  get element() {
    return v(this, $n);
  }
  get events() {
    return v(this, Ot);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(v(this, re), t), v(this, re);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(v(this, $n)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(t, e, o) {
    v(this, Ot).on(t, e, o);
  }
  once(t, e, o) {
    v(this, Ot).once(t, e, o);
  }
  off(t, e, o) {
    v(this, Ot).off(t, e, o);
  }
  emit(t, e) {
    let o = wa.createEvent(t, e);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, re)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = v(this, Ot).emit(o), o;
  }
  i18n(t, e, o) {
    var i;
    return (i = Di(v(this, re).i18n, t, e, o, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${t}}`;
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
    const t = this.NAME;
    if (this.allComponents.has(t))
      return this.allComponents.get(t);
    const e = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, e) {
    return this.get(t) || new this(t, e);
  }
}
re = new WeakMap(), $n = new WeakMap(), Ot = new WeakMap(), D(Vu, "allComponents", /* @__PURE__ */ new Map());
var Wo;
class ov extends Vu {
  constructor() {
    super(...arguments);
    x(this, Wo, F_());
  }
  get $() {
    return v(this, Wo).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(e) {
    const o = this.constructor.Component;
    G_(/* @__PURE__ */ Li(o, {
      ref: v(this, Wo),
      ...this.setOptions(e)
    }), this.element);
  }
}
Wo = new WeakMap();
var el, J, Yu, Gu, yo, ka, Ku = {}, Xu = [], rv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Ju(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function R(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? el.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return hr(n, l, o, i, null);
}
function hr(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Yu : i };
  return i == null && J.vnode != null && J.vnode(r), r;
}
function iv() {
  return { current: null };
}
function nl(n) {
  return n.children;
}
function bo(n, t) {
  this.props = n, this.context = t;
}
function zn(n, t) {
  if (t == null)
    return n.__ ? zn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? zn(n) : null;
}
function Zu(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Zu(n);
  }
}
function Ea(n) {
  (!n.__d && (n.__d = !0) && yo.push(n) && !Nr.__r++ || ka !== J.debounceRendering) && ((ka = J.debounceRendering) || setTimeout)(Nr);
}
function Nr() {
  for (var n; Nr.__r = yo.length; )
    n = yo.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), yo = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, nf(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? zn(r) : l, r.__h), lv(o, r), r.__e != l && Zu(r)));
    });
}
function Qu(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || Xu, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? hr(null, c, null, null, c) : Array.isArray(c) ? hr(nl, { children: c }, null, null, null) : c.__b > 0 ? hr(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      nf(n, c, f = f || Ku, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = tf(c, u, n) : u = ef(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = zn(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = zn(o, s + 1)), rf(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      of(_[s], _[++s], _[++s]);
}
function tf(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? tf(o, t, e) : ef(e, o, o, i, o.__e, t));
  return t;
}
function ef(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sv(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Hr(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Hr(n, r, t[r], e[r], o);
}
function xa(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || rv.test(t) ? e : e + "px";
}
function Hr(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || xa(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || xa(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? Ca : Aa, r) : n.removeEventListener(t, r ? Ca : Aa, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function Aa(n) {
  this.l[n.type + !1](J.event ? J.event(n) : n);
}
function Ca(n) {
  this.l[n.type + !0](J.event ? J.event(n) : n);
}
function nf(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = J.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new bo(_, y), s.constructor = m, s.render = cv), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = J.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === nl && p.key == null ? p.props.children : p, Qu(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = av(e.__e, t, e, o, i, r, l, u);
    (p = J.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), J.__e(E, t, e);
  }
}
function lv(n, t) {
  J.__c && J.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      J.__e(o, e.__v);
    }
  });
}
function av(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && el.call(n.childNodes), p = (d = e.props || Ku).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (sv(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, Qu(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && zn(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && Ju(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && Hr(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && Hr(n, "checked", h, d.checked, !1));
  }
  return n;
}
function of(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    J.__e(o, e);
  }
}
function rf(n, t, e) {
  var o, i;
  if (J.unmount && J.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || of(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        J.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && rf(o[i], t, typeof n.type != "function");
  e || n.__e == null || Ju(n.__e), n.__e = n.__d = void 0;
}
function cv(n, t, e) {
  return this.constructor(n, e);
}
el = Xu.slice, J = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Yu = 0, Gu = function(n) {
  return n != null && n.constructor === void 0;
}, bo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof n == "function" && (n = n(De({}, e), this.props)), n && De(e, n), n != null && this.__v && (t && this.__h.push(t), Ea(this));
}, bo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ea(this));
}, bo.prototype.render = nl, yo = [], Nr.__r = 0;
let uv = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const gt = (...n) => n.map((t) => Array.isArray(t) ? gt(...t) : typeof t == "function" ? gt(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
var ol, Z, sf, $o, Sa, lf = {}, af = [], fv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function cf(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function Ma(n, t, e) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ol.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return pr(n, l, o, i, null);
}
function pr(n, t, e, o, i) {
  var r = { type: n, props: t, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++sf : i };
  return i == null && Z.vnode != null && Z.vnode(r), r;
}
function rl(n) {
  return n.children;
}
function wo(n, t) {
  this.props = n, this.context = t;
}
function Un(n, t) {
  if (t == null)
    return n.__ ? Un(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Un(n) : null;
}
function uf(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return uf(n);
  }
}
function La(n) {
  (!n.__d && (n.__d = !0) && $o.push(n) && !Wr.__r++ || Sa !== Z.debounceRendering) && ((Sa = Z.debounceRendering) || setTimeout)(Wr);
}
function Wr() {
  for (var n; Wr.__r = $o.length; )
    n = $o.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), $o = [], n.some(function(t) {
      var e, o, i, r, l, a;
      t.__d && (l = (r = (e = t).__v).__e, (a = e.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, df(a, r, i, e.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l == null ? Un(r) : l, r.__h), pv(o, r), r.__e != l && uf(r)));
    });
}
function ff(n, t, e, o, i, r, l, a, u, p) {
  var s, d, f, c, h, b, _, g = o && o.__k || af, y = g.length;
  for (e.__k = [], s = 0; s < t.length; s++)
    if ((c = e.__k[s] = (c = t[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? pr(null, c, null, null, c) : Array.isArray(c) ? pr(rl, { children: c }, null, null, null) : c.__b > 0 ? pr(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (f = g[s]) === null || f && c.key == f.key && c.type === f.type)
        g[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = g[d]) && c.key == f.key && c.type === f.type) {
            g[d] = void 0;
            break;
          }
          f = null;
        }
      df(n, c, f = f || lf, i, r, l, a, u, p), h = c.__e, (d = c.ref) && f.ref != d && (_ || (_ = []), f.ref && _.push(f.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === f.__k ? c.__d = u = hf(c, u, n) : u = pf(n, c, f, g, h, u), typeof e.type == "function" && (e.__d = u)) : u && f.__e == u && u.parentNode != n && (u = Un(f));
    }
  for (e.__e = b, s = y; s--; )
    g[s] != null && (typeof e.type == "function" && g[s].__e != null && g[s].__e == e.__d && (e.__d = Un(o, s + 1)), vf(g[s], g[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      _f(_[s], _[++s], _[++s]);
}
function hf(n, t, e) {
  for (var o, i = n.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = n, t = typeof o.type == "function" ? hf(o, t, e) : pf(e, o, o, i, o.__e, t));
  return t;
}
function pf(n, t, e, o, i, r) {
  var l, a, u;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== n)
        n.appendChild(i), l = null;
      else {
        for (a = r, u = 0; (a = a.nextSibling) && u < o.length; u += 2)
          if (a == i)
            break t;
        n.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function hv(n, t, e, o, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Ir(n, r, null, e[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Ir(n, r, t[r], e[r], o);
}
function Oa(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e) : n[t] = e == null ? "" : typeof e != "number" || fv.test(t) ? e : e + "px";
}
function Ir(n, t, e, o, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof o == "string" && (n.style.cssText = o = ""), o)
          for (t in o)
            e && t in e || Oa(n.style, t, "");
        if (e)
          for (t in e)
            o && e[t] === o[t] || Oa(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? o || n.addEventListener(t, r ? Ra : Da, r) : n.removeEventListener(t, r ? Ra : Da, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in n)
        try {
          n[t] = e == null ? "" : e;
          break t;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? n.setAttribute(t, e) : n.removeAttribute(t));
    }
}
function Da(n) {
  this.l[n.type + !1](Z.event ? Z.event(n) : n);
}
function Ra(n) {
  this.l[n.type + !0](Z.event ? Z.event(n) : n);
}
function df(n, t, e, o, i, r, l, a, u) {
  var p, s, d, f, c, h, b, _, g, y, $, k, w, m = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (u = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (p = Z.__b) && p(t);
  try {
    t:
      if (typeof m == "function") {
        if (_ = t.props, g = (p = m.contextType) && o[p.__c], y = p ? g ? g.props.value : p.__ : o, e.__c ? b = (s = t.__c = e.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? t.__c = s = new m(_, y) : (t.__c = s = new wo(_, y), s.constructor = m, s.render = _v), g && g.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = o, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, m.getDerivedStateFromProps(_, s.__s))), f = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || t.__v === e.__v) {
            s.props = _, s.state = s.__s, t.__v !== e.__v && (s.__d = !1), s.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = t, s.__P = n, $ = Z.__r, k = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, $ && $(t), p = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++k < 25);
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(f, c)), w = p != null && p.type === rl && p.key == null ? p.props.children : p, ff(n, Array.isArray(w) ? w : [w], t, e, o, i, r, l, a, u), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = dv(e.__e, t, e, o, i, r, l, u);
    (p = Z.diffed) && p(t);
  } catch (E) {
    t.__v = null, (u || r != null) && (t.__e = a, t.__h = !!u, r[r.indexOf(a)] = null), Z.__e(E, t, e);
  }
}
function pv(n, t) {
  Z.__c && Z.__c(t, n), n.some(function(e) {
    try {
      n = e.__h, e.__h = [], n.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      Z.__e(o, e.__v);
    }
  });
}
function dv(n, t, e, o, i, r, l, a) {
  var u, p, s, d = e.props, f = t.props, c = t.type, h = 0;
  if (c === "svg" && (i = !0), r != null) {
    for (; h < r.length; h++)
      if ((u = r[h]) && "setAttribute" in u == !!c && (c ? u.localName === c : u.nodeType === 3)) {
        n = u, r[h] = null;
        break;
      }
  }
  if (n == null) {
    if (c === null)
      return document.createTextNode(f);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, f.is && f), r = null, a = !1;
  }
  if (c === null)
    d === f || a && n.data === f || (n.data = f);
  else {
    if (r = r && ol.call(n.childNodes), p = (d = e.props || lf).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, h = 0; h < n.attributes.length; h++)
          d[n.attributes[h].name] = n.attributes[h].value;
      (s || p) && (s && (p && s.__html == p.__html || s.__html === n.innerHTML) || (n.innerHTML = s && s.__html || ""));
    }
    if (hv(n, f, d, i, a), s)
      t.__k = [];
    else if (h = t.props.children, ff(n, Array.isArray(h) ? h : [h], t, e, o, i && c !== "foreignObject", r, l, r ? r[0] : e.__k && Un(e, 0), a), r != null)
      for (h = r.length; h--; )
        r[h] != null && cf(r[h]);
    a || ("value" in f && (h = f.value) !== void 0 && (h !== n.value || c === "progress" && !h || c === "option" && h !== d.value) && Ir(n, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== n.checked && Ir(n, "checked", h, d.checked, !1));
  }
  return n;
}
function _f(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (o) {
    Z.__e(o, e);
  }
}
function vf(n, t, e) {
  var o, i;
  if (Z.unmount && Z.unmount(n), (o = n.ref) && (o.current && o.current !== n.__e || _f(o, null, t)), (o = n.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        Z.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = n.__k)
    for (i = 0; i < o.length; i++)
      o[i] && vf(o[i], t, typeof n.type != "function");
  e || n.__e == null || cf(n.__e), n.__e = n.__d = void 0;
}
function _v(n, t, e) {
  return this.constructor(n, e);
}
ol = af.slice, Z = { __e: function(n, t, e, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, sf = 0, wo.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof n == "function" && (n = n(Re({}, e), this.props)), n && Re(e, n), n != null && this.__v && (t && this.__h.push(t), La(this));
}, wo.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), La(this));
}, wo.prototype.render = rl, $o = [], Wr.__r = 0;
const ps = (...n) => n.map((t) => Array.isArray(t) ? ps(...t) : typeof t == "function" ? ps(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
var en, nn;
class Pa extends wo {
  constructor(e) {
    var o;
    super(e);
    x(this, en, 0);
    x(this, nn, null);
    D(this, "_handleWheel", (e) => {
      var r;
      const { wheelContainer: o } = this.props, i = e.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const l = (this.props.type === "horz" ? e.deltaX : e.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(l) && e.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (e) => {
      const { dragStart: o } = this.state;
      o && (v(this, en) && cancelAnimationFrame(v(this, en)), C(this, en, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? e.clientX - o.x : e.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), C(this, en, 0);
      })), e.preventDefault());
    });
    D(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    D(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    D(this, "_handleClick", (e) => {
      const o = e.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: a } = this.props, u = (r === "horz" ? e.clientX - i.left : e.clientY - i.top) - this.barSize / 2;
      this.scroll(u * a / l), e.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
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
    const { scrollSize: e, clientSize: o } = this.props;
    return Math.max(0, e - o);
  }
  get barSize() {
    const { clientSize: e, scrollSize: o, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (C(this, nn, typeof e == "string" ? document : e.current), v(this, nn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, nn) && v(this, nn).removeEventListener("wheel", this._handleWheel);
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
    var i;
    const { onScroll: o } = this.props;
    o && o(e, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: e,
      type: o,
      size: i = 12,
      className: r,
      style: l,
      left: a,
      top: u,
      bottom: p,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: c } = this.state, h = {
      left: a,
      top: u,
      bottom: p,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (h.height = i, h.width = e, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (e - b.width) / d)) : (h.width = i, h.height = e, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (e - b.height) / d)), /* @__PURE__ */ Ma("div", {
      className: ps("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Ma("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
en = new WeakMap(), nn = new WeakMap();
function vv(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let o = n;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (l = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function gv(n, t, e) {
  const o = vv(n, t), i = o[o.length - 1];
  return i === void 0 ? e : i;
}
function Ui(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function ds(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (Ui(n) && Ui(e))
    for (const o in e)
      Ui(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), ds(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return ds(n, ...t);
}
function mv(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var Xa, Ja;
let il = (Ja = (Xa = document.documentElement.getAttribute("lang")) == null ? void 0 : Xa.toLowerCase()) != null ? Ja : "zh_cn", $e;
function yv() {
  return il;
}
function bv(n) {
  il = n.toLowerCase();
}
function $v(n, t) {
  $e || ($e = {}), typeof n == "string" && (n = { [n]: t != null ? t : {} }), ds($e, n);
}
function Ri(n, t, e, o, i, r) {
  Array.isArray(n) ? $e && n.unshift($e) : n = $e ? [$e, n] : [n], typeof e == "string" && (r = i, i = o, o = e, e = void 0);
  const l = i || il;
  let a;
  for (const u of n) {
    if (!u)
      continue;
    const p = u[l];
    if (!p)
      continue;
    const s = r && u === $e ? `${r}.${t}` : t;
    if (a = gv(p, s), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? mv(a, ...Array.isArray(e) ? e : [e]) : a;
}
Ri.addLang = $v;
Ri.getCode = yv;
Ri.setCode = bv;
function wv(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function sl({ col: n, className: t, height: e, row: o, onRenderCell: i, style: r, outerStyle: l, children: a, outerClass: u, ...p }) {
  var m, E;
  const s = {
    left: n.left,
    width: n.realWidth,
    height: e,
    ...l
  }, { align: d, border: f } = n.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...n.setting.cellStyle,
    ...r
  }, h = ["dtable-cell", u, n.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", t], _ = [(E = a != null ? a : (m = o.data) == null ? void 0 : m[n.name]) != null ? E : ""], g = i ? i(_, { row: o, col: n }, R) : _, y = [], $ = [], k = {}, w = {};
  return g == null || g.forEach((A) => {
    var S;
    if (typeof A == "object" && A && !Gu(A) && ("html" in A || "className" in A || "style" in A || "attrs" in A || "children" in A)) {
      const O = A.outer ? y : $;
      A.html ? O.push(/* @__PURE__ */ R("div", {
        className: gt("dtable-cell-html", A.className),
        style: A.style,
        dangerouslySetInnerHTML: { __html: A.html },
        ...(S = A.attrs) != null ? S : {}
      })) : (A.style && Object.assign(A.outer ? s : c, A.style), A.className && (A.outer ? h : b).push(A.className), A.children && O.push(A.children), A.attrs && Object.assign(A.outer ? k : w, A.attrs));
    } else
      $.push(A);
  }), /* @__PURE__ */ R("div", {
    className: gt(h),
    style: s,
    "data-col": n.name,
    ...p,
    ...k
  }, $.length > 0 && /* @__PURE__ */ R("div", {
    className: gt(b),
    style: c,
    ...w
  }, $), y);
}
function kv({ col: n, children: t, style: e, ...o }) {
  var r;
  const { sortType: i } = n.setting;
  return /* @__PURE__ */ R(sl, {
    col: n,
    style: { ...e, ...n.setting.style },
    "data-sort": i || null,
    "data-type": n.type,
    ...o
  }, (r = n.setting.title) != null ? r : n.setting.name, i && /* @__PURE__ */ R("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), t);
}
function Bi({ row: n, className: t, top: e = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: a = sl, onRenderCell: u }) {
  return /* @__PURE__ */ R("div", {
    className: gt("dtable-cells", t),
    style: { top: e, left: o, width: i, height: r }
  }, l.map((p) => p.visible ? /* @__PURE__ */ R(a, {
    key: p.name,
    col: p,
    row: n,
    onRenderCell: u
  }) : null));
}
function gf({
  row: n,
  className: t,
  top: e,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: a,
  scrollWidth: u,
  scrollColsWidth: p,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: f = sl,
  onRenderCell: c,
  style: h,
  ...b
}) {
  let _ = null;
  i != null && i.length && (_ = /* @__PURE__ */ R(Bi, {
    className: "dtable-fixed-left",
    cols: i,
    width: a,
    row: n,
    CellComponent: f,
    onRenderCell: c
  }));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ R(Bi, {
    className: "dtable-flexable",
    cols: l,
    left: a - d,
    width: p,
    row: n,
    CellComponent: f,
    onRenderCell: c
  }));
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ R(Bi, {
    className: "dtable-fixed-right",
    cols: r,
    left: a + u,
    width: s,
    row: n,
    CellComponent: f,
    onRenderCell: c
  }));
  const $ = { top: e, height: o, lineHeight: `${o - 2}px`, ...h };
  return /* @__PURE__ */ R("div", {
    className: gt("dtable-row", t),
    style: $,
    "data-id": n.id,
    ...b
  }, _, g, y);
}
function Ev({ height: n, onRenderRow: t, ...e }) {
  const o = {
    height: n,
    ...e,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: kv
  };
  if (t) {
    const i = t({ props: o }, R);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ R("div", {
    className: "dtable-header",
    style: { height: n }
  }, /* @__PURE__ */ R(gf, {
    ...o
  }));
}
function xv({
  className: n,
  style: t,
  top: e,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: a,
  ...u
}) {
  return t = { ...t, top: e, height: i }, /* @__PURE__ */ R("div", {
    className: gt("dtable-rows", n),
    style: t
  }, o.map((p) => {
    const s = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - l,
      height: r,
      ...u
    }, d = a == null ? void 0 : a({ props: s, row: p }, R);
    return d && Object.assign(s, d), /* @__PURE__ */ R(gf, {
      ...s
    });
  }));
}
const zr = /* @__PURE__ */ new Map(), Ur = [];
function mf(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && zr.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  zr.set(e, n), (t == null ? void 0 : t.buildIn) && !Ur.includes(e) && Ur.push(e);
}
function qo(n, t) {
  mf(n, t);
  const e = (o) => {
    if (!o)
      return n;
    const { defaultOptions: i, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return e.plugin = n, e;
}
function yf(n) {
  return zr.delete(n);
}
function Av(n) {
  if (typeof n == "string") {
    const t = zr.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function bf(n, t, e) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Av(o);
    !i || e.has(i.name) || ((r = i.plugins) != null && r.length && bf(n, i.plugins, e), n.push(i), e.add(i.name));
  }), n;
}
function Cv(n = [], t = !0) {
  return t && Ur.length && n.unshift(...Ur), n != null && n.length ? bf([], n, /* @__PURE__ */ new Set()) : [];
}
function ja() {
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
const Br = (...n) => n.map((t) => Array.isArray(t) ? Br(...t) : typeof t == "function" ? Br(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const o = t[e];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
function Sv(n) {
  const {
    tag: t,
    className: e,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: a,
    onGenerate: u,
    onRenderItem: p,
    ...s
  } = n, d = [e], f = { ...o }, c = [], h = [];
  return i.forEach((b) => {
    var g;
    const _ = [];
    typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function" ? u ? _.push(...u.call(l, b, c, ...r)) : _.push(...(g = b.call(l, c, ...r)) != null ? g : []) : _.push(b), _.forEach((y) => {
      var $;
      y != null && (typeof y == "object" && !Tu(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? c.push(
        /* @__PURE__ */ Li("div", {
          className: Br(y.className),
          style: y.style,
          dangerouslySetInnerHTML: { __html: y.html },
          ...($ = y.attrs) != null ? $ : {}
        })
      ) : y.__html ? h.push(y.__html) : (y.style && Object.assign(f, y.style), y.className && d.push(y.className), y.children && c.push(y.children), y.attrs && Object.assign(s, y.attrs)) : c.push(y));
    });
  }), h.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: h } }), [{
    className: Br(d),
    style: f,
    ...s
  }, c];
}
function Ta({
  tag: n = "div",
  ...t
}) {
  const [e, o] = Sv(t);
  return Li(n, e, ...o);
}
var on, wn, ke, ie, Ee, nt, Dt, Rt, kn, Io, zo, se, En, xn, ni, $f, oi, wf, ri, kf, ii, Ef, Uo, vs, si, li, Bo, Fo, ai, ci, ui, xf, fi, Af, hi, Cf;
class _s extends bo {
  constructor(e) {
    var o;
    super(e);
    x(this, ni);
    x(this, oi);
    x(this, ri);
    x(this, ii);
    x(this, Uo);
    x(this, ui);
    x(this, fi);
    x(this, hi);
    D(this, "ref", iv());
    x(this, on, 0);
    x(this, wn, void 0);
    x(this, ke, !1);
    x(this, ie, void 0);
    x(this, Ee, void 0);
    x(this, nt, []);
    x(this, Dt, void 0);
    x(this, Rt, /* @__PURE__ */ new Map());
    x(this, kn, {});
    x(this, Io, void 0);
    x(this, zo, []);
    D(this, "updateLayout", () => {
      v(this, on) && cancelAnimationFrame(v(this, on)), C(this, on, requestAnimationFrame(() => {
        C(this, Dt, void 0), this.forceUpdate(), C(this, on, 0);
      }));
    });
    x(this, se, (e, o) => {
      o = o || e.type;
      const i = v(this, Rt).get(o);
      if (!!(i != null && i.length)) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    });
    x(this, En, (e) => {
      v(this, se).call(this, e, `window_${e.type}`);
    });
    x(this, xn, (e) => {
      v(this, se).call(this, e, `document_${e.type}`);
    });
    x(this, si, (e, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, e, o);
        i && Object.assign(e.props, i);
      }
      return v(this, nt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, e, o);
          r && Object.assign(e.props, r);
        }
      }), e.props;
    });
    x(this, li, (e, o) => (this.options.onRenderHeaderRow && (e.props = this.options.onRenderHeaderRow.call(this, e, o)), v(this, nt).forEach((i) => {
      i.onRenderHeaderRow && (e.props = i.onRenderHeaderRow.call(this, e, o));
    }), e.props));
    x(this, Bo, (e, o, i) => {
      const { row: r, col: l } = o;
      e[0] = this.getCellValue(r, l);
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[a] && (e = l.setting[a].call(this, e, o, i)), this.options[a] && (e = this.options[a].call(this, e, o, i)), v(this, nt).forEach((u) => {
        u[a] && (e = u[a].call(this, e, o, i));
      }), e;
    });
    x(this, Fo, (e, o) => {
      o === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    });
    x(this, ai, (e) => {
      var a, u, p, s, d;
      const o = this.getPointerInfo(e);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: l }), v(this, nt).forEach((f) => {
          var c;
          (c = f.onHeaderCellClick) == null || c.call(this, e, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, c = this.layout.visibleRows.find((h) => h.id === i);
        if (l) {
          if (((u = this.options.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: i, rowInfo: c, element: l, rowElement: f })) === !0)
            return;
          for (const h of v(this, nt))
            if (((p = h.onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: i, rowInfo: c, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, e, { rowID: i, rowInfo: c, element: f })) === !0)
          return;
        for (const h of v(this, nt))
          if (((d = h.onRowClick) == null ? void 0 : d.call(this, e, { rowID: i, rowInfo: c, element: f })) === !0)
            return;
      }
    });
    x(this, ci, (e) => {
      const o = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    C(this, wn, (o = e.id) != null ? o : `dtable-${uv(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, C(this, Ee, Object.freeze(Cv(e.plugins))), v(this, Ee).forEach((i) => {
      var u;
      const { methods: r, data: l, state: a } = i;
      r && Object.entries(r).forEach(([p, s]) => {
        typeof s == "function" && Object.assign(this, { [p]: s.bind(this) });
      }), l && Object.assign(v(this, kn), l.call(this)), a && Object.assign(this.state, a.call(this)), (u = i.onCreate) == null || u.call(this, i);
    });
  }
  get options() {
    var e;
    return ((e = v(this, Dt)) == null ? void 0 : e.options) || v(this, ie) || ja();
  }
  get plugins() {
    return v(this, nt);
  }
  get layout() {
    return v(this, Dt);
  }
  get id() {
    return v(this, wn);
  }
  get data() {
    return v(this, kn);
  }
  get parent() {
    var e, o;
    return (o = this.props.parent) != null ? o : (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  componentWillReceiveProps() {
    C(this, ie, void 0);
  }
  componentDidMount() {
    if (v(this, ke) ? this.forceUpdate() : P(this, Uo, vs).call(this), v(this, nt).forEach((e) => {
      let { events: o } = e;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", v(this, ai)), this.on("keydown", v(this, ci)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(e), C(this, Io, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    v(this, nt).forEach((e) => {
      var o;
      (o = e.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, ke) ? P(this, Uo, vs).call(this) : v(this, nt).forEach((e) => {
      var o;
      (o = e.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Io)) == null || o.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const i of v(this, Rt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), v(this, En)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), v(this, xn)) : e.removeEventListener(i, v(this, se));
    v(this, nt).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), v(this, Ee).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), C(this, kn, {}), v(this, Rt).clear();
  }
  on(e, o, i) {
    var l;
    i && (e = `${i}_${e}`);
    const r = v(this, Rt).get(e);
    r ? r.push(o) : (v(this, Rt).set(e, [o]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), v(this, En)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), v(this, xn)) : (l = this.ref.current) == null || l.addEventListener(e, v(this, se)));
  }
  off(e, o, i) {
    var a;
    i && (e = `${i}_${e}`);
    const r = v(this, Rt).get(e);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, Rt).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), v(this, En)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), v(this, xn)) : (a = this.ref.current) == null || a.removeEventListener(e, v(this, se)));
  }
  emitCustomEvent(e, o) {
    v(this, se).call(this, o instanceof Event ? o : new CustomEvent(e, { detail: o }), e);
  }
  scroll(e, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: a, rowHeight: u, colsInfo: { scrollWidth: p, scrollColsWidth: s } } = this.layout, { to: d } = e;
    let { scrollLeft: f, scrollTop: c } = e;
    if (d === "up" || d === "down")
      c = r + (d === "down" ? 1 : -1) * Math.floor(a / u) * u;
    else if (d === "left" || d === "right")
      f = i + (d === "right" ? 1 : -1) * p;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = l - a;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = s - p;
    else {
      const { offsetLeft: b, offsetTop: _ } = e;
      typeof b == "number" && (f = i + b), typeof _ == "number" && (f = r + _);
    }
    const h = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - p)), f !== i && (h.scrollLeft = f)), typeof c == "number" && (c = Math.max(0, Math.min(c, l - a)), c !== r && (h.scrollTop = c)), Object.keys(h).length ? (this.setState(h, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, h), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    const { colsMap: o, colsList: i } = this.layout;
    return typeof e == "number" ? i[e] : o[e];
  }
  getRowInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    if (e === -1 || e === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: i } = this.layout;
    return typeof e == "number" ? o[e] : i[e];
  }
  getCellValue(e, o) {
    var u, p;
    const i = typeof e == "object" ? e : this.getRowInfo(e);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? (u = r.setting.title) != null ? u : r.setting.name : (p = i.data) == null ? void 0 : p[r.name];
    const { cellValueGetter: a } = this.options;
    return a && (l = a.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(e) {
    return this.layout.rows[e];
  }
  update(e = {}, o) {
    const { dirtyType: i, state: r } = e;
    i === "layout" ? C(this, Dt, void 0) : i === "options" && (C(this, Dt, void 0), C(this, ie, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
  }
  getPointerInfo(e) {
    const o = e.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const i = o.closest(".dtable-cell");
    if (!i)
      return;
    const r = i.closest(".dtable-row");
    if (!r)
      return;
    const l = i == null ? void 0 : i.getAttribute("data-col"), a = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof a != "string"))
      return {
        cellElement: i,
        rowElement: r,
        colName: l,
        rowID: a,
        target: o
      };
  }
  i18n(e, o, i) {
    var r;
    return (r = Ri(v(this, zo), e, o, i, this.options.lang)) != null ? r : `{i18n:${e}}`;
  }
  render() {
    var c;
    const e = P(this, hi, Cf).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: a, striped: u, scrollbarHover: p } = this.options, s = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": a,
      "dtable-striped": u,
      "dtable-scrolled-down": ((c = e == null ? void 0 : e.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": p
    }], f = [];
    return e && v(this, nt).forEach((h) => {
      var _;
      const b = (_ = h.onRender) == null ? void 0 : _.call(this, e);
      !b || (b.style && Object.assign(s, b.style), b.className && d.push(b.className), b.children && f.push(b.children));
    }), /* @__PURE__ */ R("div", {
      id: v(this, wn),
      className: gt(d),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, e && P(this, ni, $f).call(this, e), e && P(this, oi, wf).call(this, e), e && P(this, ri, kf).call(this, e), e && P(this, ii, Ef).call(this, e));
  }
}
on = new WeakMap(), wn = new WeakMap(), ke = new WeakMap(), ie = new WeakMap(), Ee = new WeakMap(), nt = new WeakMap(), Dt = new WeakMap(), Rt = new WeakMap(), kn = new WeakMap(), Io = new WeakMap(), zo = new WeakMap(), se = new WeakMap(), En = new WeakMap(), xn = new WeakMap(), ni = new WeakSet(), $f = function(e) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = e;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ R(Ev, {
      scrollLeft: l,
      height: r,
      onRenderCell: v(this, Bo),
      onRenderRow: v(this, li),
      ...i
    });
  const a = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(Ta, {
    className: "dtable-header",
    style: { height: r },
    renders: a,
    generateArgs: [e],
    generatorThis: this
  });
}, oi = new WeakSet(), wf = function(e) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: a, scrollLeft: u, scrollTop: p } = e;
  return /* @__PURE__ */ R(xv, {
    top: o,
    height: i,
    rows: r,
    rowHeight: l,
    scrollLeft: u,
    scrollTop: p,
    onRenderCell: v(this, Bo),
    onRenderRow: v(this, si),
    ...a
  });
}, ri = new WeakSet(), kf = function(e) {
  const { footer: o } = e;
  if (!o)
    return null;
  const i = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ R(Ta, {
    className: "dtable-footer",
    style: { height: e.footerHeight, top: e.rowsHeight + e.headerHeight },
    renders: i,
    generateArgs: [e],
    generatorThis: this,
    generators: e.footerGenerators
  });
}, ii = new WeakSet(), Ef = function(e) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: a, rowsHeightTotal: u, footerHeight: p } = e, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: c } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ R(Pa, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: d,
      onScroll: v(this, Fo),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -f) + p,
      size: f,
      wheelContainer: this.ref
    })
  ), u > a && o.push(
    /* @__PURE__ */ R(Pa, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: u,
      clientSize: a,
      onScroll: v(this, Fo),
      right: 0,
      size: f,
      top: e.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Uo = new WeakSet(), vs = function() {
  var e;
  C(this, ke, !1), (e = this.options.afterRender) == null || e.call(this), v(this, nt).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, si = new WeakMap(), li = new WeakMap(), Bo = new WeakMap(), Fo = new WeakMap(), ai = new WeakMap(), ci = new WeakMap(), ui = new WeakSet(), xf = function() {
  if (v(this, ie))
    return !1;
  const o = { ...ja(), ...v(this, Ee).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return C(this, ie, o), C(this, nt, v(this, Ee).reduce((i, r) => {
    const { when: l, options: a } = r;
    return (!l || l(o)) && (i.push(r), a && Object.assign(o, typeof a == "function" ? a.call(this, o) : a)), i;
  }, [])), C(this, zo, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, fi = new WeakSet(), Af = function() {
  var ut, ot;
  const { plugins: e } = this;
  let o = v(this, ie);
  const i = {
    flex: /* @__PURE__ */ R("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ R("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  e.forEach((L) => {
    var U;
    const H = (U = L.beforeLayout) == null ? void 0 : U.call(this, o);
    H && (o = { ...o, ...H }), Object.assign(i, L.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: a } = o, u = [], p = [], s = [], d = {}, f = [], c = [];
  let h = 0, b = 0, _ = 0;
  o.cols.forEach((L) => {
    if (L.hidden)
      return;
    const {
      name: H,
      type: U = "",
      fixed: z = !1,
      flex: rt = !1,
      width: It = r,
      minWidth: ft = l,
      maxWidth: cn = a,
      ...Ie
    } = L, Fn = wv(It, ft, cn), B = {
      name: H,
      type: U,
      setting: {
        name: H,
        type: U,
        fixed: z,
        flex: rt,
        width: It,
        minWidth: ft,
        maxWidth: cn,
        ...Ie
      },
      flex: z ? 0 : rt === !0 ? 1 : typeof rt == "number" ? rt : 0,
      left: 0,
      width: Fn,
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    e.forEach((fe) => {
      var un, fn;
      const xt = (un = fe.colTypes) == null ? void 0 : un[U];
      if (xt) {
        const tt = typeof xt == "function" ? xt(B) : xt;
        tt && Object.assign(B.setting, tt);
      }
      (fn = fe.onAddCol) == null || fn.call(this, B);
    }), B.realWidth = B.realWidth || B.width, z === "left" ? (B.left = h, h += B.width, u.push(B)) : z === "right" ? (B.left = b, b += B.width, p.push(B)) : (B.left = _, _ += B.width, s.push(B)), B.flex && c.push(B), f.push(B), d[B.name] = B;
  });
  let g = o.width, y = 0;
  const $ = h + _ + b;
  if (typeof g == "function" && (g = g.call(this, $)), g === "auto")
    y = $;
  else if (g === "100%") {
    const { parent: L } = this;
    if (L)
      y = L.clientWidth;
    else {
      y = 0, C(this, ke, !0);
      return;
    }
  } else
    y = g != null ? g : 0;
  const { data: k, rowKey: w = "id", rowHeight: m } = o, E = [], A = (L, H, U) => {
    var rt, It;
    const z = { data: U != null ? U : { [w]: L }, id: L, index: E.length, top: 0 };
    if (U || (z.lazy = !0), E.push(z), ((rt = o.onAddRow) == null ? void 0 : rt.call(this, z, H)) !== !1) {
      for (const ft of e)
        if (((It = ft.onAddRow) == null ? void 0 : It.call(this, z, H)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let L = 0; L < k; L++)
      A(`${L}`, L);
  else
    Array.isArray(k) && k.forEach((L, H) => {
      var U;
      typeof L == "object" ? A(`${(U = L[w]) != null ? U : ""}`, H, L) : A(`${L != null ? L : ""}`, H);
    });
  let S = E;
  const O = {};
  if (o.onAddRows) {
    const L = o.onAddRows.call(this, S);
    L && (S = L);
  }
  for (const L of e) {
    const H = (ut = L.onAddRows) == null ? void 0 : ut.call(this, S);
    H && (S = H);
  }
  S.forEach((L, H) => {
    O[L.id] = L, L.index = H, L.top = L.index * m;
  });
  const { header: M, footer: N } = o, j = M ? o.headerHeight || m : 0, Q = N ? o.footerHeight || m : 0;
  let I = o.height, T = 0;
  const W = S.length * m, lt = j + Q + W;
  if (typeof I == "function" && (I = I.call(this, lt)), I === "auto")
    T = lt;
  else if (typeof I == "object")
    T = Math.min(I.max, Math.max(I.min, lt));
  else if (I === "100%") {
    const { parent: L } = this;
    if (L)
      T = L.clientHeight;
    else {
      T = 0, C(this, ke, !0);
      return;
    }
  } else
    T = I;
  const et = T - j - Q, bt = y - h - b, at = {
    options: o,
    allRows: E,
    width: y,
    height: T,
    rows: S,
    rowsMap: O,
    rowHeight: m,
    rowsHeight: et,
    rowsHeightTotal: W,
    header: M,
    footer: N,
    footerGenerators: i,
    headerHeight: j,
    footerHeight: Q,
    colsMap: d,
    colsList: f,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: u,
      fixedRightCols: p,
      scrollCols: s,
      fixedLeftWidth: h,
      scrollWidth: bt,
      scrollColsWidth: _,
      fixedRightWidth: b
    }
  }, it = (ot = o.onLayout) == null ? void 0 : ot.call(this, at);
  it && Object.assign(at, it), e.forEach((L) => {
    if (L.onLayout) {
      const H = L.onLayout.call(this, at);
      H && Object.assign(at, H);
    }
  }), C(this, Dt, at);
}, hi = new WeakSet(), Cf = function() {
  (P(this, ui, xf).call(this) || !v(this, Dt)) && P(this, fi, Af).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: a } } = e;
  if (i.length) {
    const $ = l - a;
    if ($ > 0) {
      const k = i.reduce((m, E) => m + E.flex, 0);
      let w = 0;
      i.forEach((m) => {
        const E = Math.min($ - w, Math.ceil($ * (m.flex / k)));
        m.realWidth = E + m.width, w += m.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, a - l), o);
  let u = 0;
  r.forEach(($) => {
    $.left = u, u += $.realWidth, $.visible = $.left + $.realWidth >= o && $.left <= o + l;
  });
  const { rowsHeightTotal: p, rowsHeight: s, rows: d, rowHeight: f } = e, c = Math.min(Math.max(0, p - s), this.state.scrollTop), h = Math.floor(c / f), b = c + s, _ = Math.min(d.length, Math.ceil(b / f)), g = [], { rowDataGetter: y } = this.options;
  for (let $ = h; $ < _; $++) {
    const k = d[$];
    k.lazy && y && (k.data = y([k.id])[0], k.lazy = !1), g.push(k);
  }
  return e.visibleRows = g, e.scrollTop = c, e.scrollLeft = o, e;
}, D(_s, "addPlugin", mf), D(_s, "removePlugin", yf);
function Na(n, t) {
  t !== void 0 ? n.data.hoverCol = t : t = n.data.hoverCol;
  const { current: e } = n.ref;
  if (!e)
    return;
  const o = "dtable-col-hover";
  e.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && e.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const Sf = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (n) => !!n.colHover,
  events: {
    mouseover(n) {
      var i, r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const e = (i = n.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!e || t === "header" && !e.closest(".dtable-header"))
        return;
      const o = (r = e == null ? void 0 : e.getAttribute("data-col")) != null ? r : !1;
      Na(this, o);
    },
    mouseleave() {
      Na(this, !1);
    }
  }
};
qo(Sf, { buildIn: !0 });
function Mv(n, t) {
  var l, a;
  typeof n == "boolean" && (t = n, n = void 0);
  const e = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (u, p) => {
    i && !i.call(this, u) || !!e[u] === p || (p ? e[u] = !0 : delete e[u], o[u] = p);
  };
  if (n === void 0 ? (t === void 0 && (t = !Mf.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: u }) => {
    r(u, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((u) => {
    r(u, t != null ? t : !e[u]);
  })), Object.keys(o).length) {
    const u = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, n, o, e);
    u && Object.keys(u).forEach((p) => {
      u[p] ? e[p] = !0 : delete e[p];
    }), this.setState({ checkedRows: { ...e } }, () => {
      var p;
      (p = this.options.onCheckChange) == null || p.call(this, o);
    });
  }
  return o;
}
function Lv(n) {
  var t;
  return (t = this.state.checkedRows[n]) != null ? t : !1;
}
function Mf() {
  var e, o;
  const n = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? n === ((e = this.layout) == null ? void 0 : e.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : n === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Ov() {
  return Object.keys(this.state.checkedRows);
}
const Lf = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (n) => !!n.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Mv,
    isRowChecked: Lv,
    isAllRowChecked: Mf,
    getChecks: Ov
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "\u5DF2\u9009\u62E9 {selected} \u9879",
      totalCountInfo: "\u5171 {total} \u9879"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ R("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ R("input", {
          type: "checkbox",
          checked: n
        }))
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks().length, o = [];
      return e && o.push(this.i18n("checkedCountInfo", { selected: e })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ R("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(n, { row: t, col: e }) {
    var a, u;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return n;
    const { checkbox: r } = e.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const p = this.isRowChecked(o), s = (u = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, p, o)) != null ? u : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: p
      });
      n.unshift(s), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var l, a;
    const { id: o } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const u = this.isAllRowChecked(), p = (a = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, u, o)) != null ? a : /* @__PURE__ */ R("input", {
        type: "checkbox",
        checked: u
      });
      n.unshift(p), n.push({ className: "has-checkbox" });
    }
    return n;
  },
  onRenderRow({ props: n, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: gt(n.className, "is-checked") };
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest('input[type="checkbox"],.dtable-checkbox');
    e && this.toggleCheckRows(e.checked);
  },
  onRowClick(n, { rowID: t }) {
    const e = n.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
};
qo(Lf);
function gs(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, o = t.children && e && e[n];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = gs.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? gs.call(this, t.parent).level + 1 : 0, t;
}
function Dv(n, t) {
  var i;
  let e = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: o } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Of.call(this)), t) {
      const r = o.entries();
      for (const [l, a] of r)
        a.state === "expanded" && (e[l] = !0);
    } else
      e = {};
  else {
    const r = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[r[0]]), r.forEach((l) => {
      const a = o.get(l);
      t && (a == null ? void 0 : a.children) ? e[l] = !0 : delete e[l];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...e } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function Of() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Df(n, t = 0, e, o = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const l = n.get(r);
    !l || (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = Df(n, t, l.children, o + 1)));
  }
  return t;
}
function Rf(n, t, e, o) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = e, Rf(n, r, e, o);
  }), i;
}
function Pf(n, t, e, o, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((u) => {
    const p = !!(o[u] !== void 0 ? o[u] : i[u]);
    return e === p;
  })) && (o[t] = e), r.parent && Pf(n, r.parent, e, o, i);
}
const jf = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, t) {
      const { nestedMap: e } = this.data, o = e.get(n.id), i = e.get(t.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, t, e) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([i, r]) => {
        const l = Rf(this, i, r, o);
        l != null && l.parent && Pf(this, l.parent, r, o, e);
      }), o;
    }
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Dv,
    isAllCollapsed: Of,
    getNestedRowInfo: gs
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(n) {
    var i, r, l, a, u;
    const { nestedMap: t } = this.data, e = (r = n.data) == null ? void 0 : r[(i = this.options.nestedParentKey) != null ? i : "parent"], o = (l = t.get(n.id)) != null ? l : {
      state: "",
      level: 0
    };
    if (o.parent = e, (u = n.data) != null && u[(a = this.options.asParentKey) != null ? a : "asParent"] && (o.children = []), t.set(n.id, o), e) {
      let p = t.get(e);
      p || (p = {
        state: "",
        level: 0
      }, t.set(e, p)), p.children || (p.children = []), p.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), Df(this.data.nestedMap), n.sort((t, e) => {
      var l, a;
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = ((l = o.order) != null ? l : 0) - ((a = i.order) != null ? a : 0);
      return r === 0 ? t.index - e.index : r;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a, u, p;
    const { id: o, data: i } = e, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && n.unshift((u = (a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, l, o, t, i)) != null ? u : /* @__PURE__ */ R("a", {
      role: "button",
      className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), l.level) {
      let { nestedIndent: s = r } = t.setting;
      s && (s === !0 && (s = (p = this.options.nestedIndent) != null ? p : 12), n.unshift(/* @__PURE__ */ R("div", {
        className: "dtable-nested-indent",
        style: { width: s * l.level + "px" }
      })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i, r;
    const { id: o } = t;
    return e.setting.nestedToggle && n.unshift((r = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, e, void 0)) != null ? r : /* @__PURE__ */ R("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ R("span", {
      className: "dtable-nested-toggle-icon"
    }))), n;
  },
  onRenderRow({ props: n, row: t }) {
    const e = this.getNestedRowInfo(t.id);
    return {
      className: gt(n.className, `is-nested-${e.state}`),
      "data-parent": e.parent
    };
  },
  onRenderHeaderRow({ props: n }) {
    return n.className = gt(n.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
};
qo(jf);
function Go(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
const Rv = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), Pv = (n, t = "yyyy-MM-dd hh:mm") => {
  n = Rv(n);
  const e = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((o) => {
    if (new RegExp(`(${o})`).test(t)) {
      const i = `${e[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
};
const Tf = {
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
      onRenderCell(n, { col: t, row: e }) {
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = Go(o, e.data);
        return n[0] = /* @__PURE__ */ R("a", {
          href: r,
          ...i
        }, n[0]), n;
      }
    },
    avatar: {
      onRenderCell(n, { col: t, row: e }) {
        const { data: o } = e, { avatarWithName: i, avatarClass: r = "size-sm circle", avatarKey: l = `${t.name}Avatar` } = t.setting, a = /* @__PURE__ */ R("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ R("img", {
          src: o ? o[l] : ""
        }));
        return i ? n.unshift(a) : n[0] = a, n;
      }
    },
    circleProgress: {
      onRenderCell(n, { col: t }) {
        const { circleSize: e = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (e - o) / 2, a = e / 2, u = n[0];
        return n[0] = /* @__PURE__ */ R("svg", {
          width: e,
          height: e
        }, /* @__PURE__ */ R("circle", {
          cx: a,
          cy: a,
          r: l,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ R("circle", {
          cx: a,
          cy: a,
          r: l,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * l * 2,
          "stroke-dashoffset": Math.PI * l * 2 * (100 - u) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ R("text", {
          x: a,
          y: a + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${l}px` }
        }, Math.round(u))), n;
      }
    },
    actionButtons: {
      onRenderCell(n, { col: t, row: e }) {
        var a;
        const o = (a = e.data) == null ? void 0 : a[t.name];
        if (!o)
          return n;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((u) => {
            typeof u == "string" && (u = { action: u });
            const p = r[u.action];
            return p && (u = { className: l, ...p, ...u }), Go(i, u);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(n, { col: t }) {
        let { format: e } = t.setting;
        if (!e)
          return n;
        typeof e == "string" && (e = { type: "text", format: e });
        const { format: o, type: i } = e, r = n[0];
        return typeof o == "function" ? n[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? n[0] = Pv(r, o) : i === "html" ? n[0] = { html: Go(o, r) } : n[0] = Go(o, r), n;
      }
    }
  }
};
qo(Tf);
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Sf,
  checkable: Lf,
  nested: jf,
  rich: Tf
}, Symbol.toStringTag, { value: "Module" }));
class Ko extends ov {
}
D(Ko, "Component", _s), D(Ko, "definePlugin", qo), D(Ko, "removePlugin", yf), D(Ko, "plugins", jv);
var Pt, ct;
class Tv {
  constructor(t) {
    x(this, Pt, void 0);
    x(this, ct, void 0);
    C(this, Pt, t), C(this, ct, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(v(this, Pt).parentElement.parentElement, v(this, Pt).parentElement), this.addActive(v(this, ct).parentElement, v(this, ct)), v(this, ct).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, ct, v(this, Pt)), this.addActive(v(this, ct).parentElement, v(this, ct)), C(this, Pt, document.querySelector(`[href='#${v(this, ct).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${v(this, ct).getAttribute("id")}']`) || document.querySelector(`[data-target='#${v(this, ct).getAttribute("id")}']`)), this.addActive(v(this, Pt).parentElement.parentElement, v(this, Pt).parentElement);
  }
  addActive(t, e) {
    const o = t.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && this.transition(e).then(function(r) {
      e.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(e, o) {
      setTimeout(() => {
        t.classList.add("in"), e();
      }, 100);
    });
  }
}
Pt = new WeakMap(), ct = new WeakMap();
document.addEventListener("click", function(n) {
  n.target instanceof HTMLElement && (n.target.dataset.toggle === "tab" || n.target.getAttribute("data-tab")) && (n.preventDefault(), new Tv(n.target).showTarget());
});
const jt = 24 * 60 * 60 * 1e3, st = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : new Date(), Bn = (n, t = new Date()) => (n = st(n), t = st(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate()), ms = (n, t = new Date()) => st(n).getFullYear() === st(t).getFullYear(), Nf = (n, t = new Date()) => (n = st(n), t = st(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Nv = (n, t = new Date()) => {
  n = st(n), t = st(t);
  const e = 1e3 * 60 * 60 * 24, o = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Hv = (n, t) => Bn(st(t), n), Wv = (n, t) => Bn(st(t).getTime() - jt, n), Iv = (n, t) => Bn(st(t).getTime() + jt, n), zv = (n, t) => Bn(st(t).getTime() - 2 * jt, n), ys = (n, t = "yyyy-MM-dd hh:mm") => {
  n = st(n);
  const e = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((o) => {
    if (new RegExp(`(${o})`).test(t)) {
      const i = `${e[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, Uv = (n, t, e) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = ys(n, ms(n) ? o.month : o.full);
  if (Bn(n, t))
    return i;
  const r = ys(t, ms(n, t) ? Nf(n, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Bv = (n) => {
  const t = new Date().getTime();
  switch (n) {
    case "oneWeek":
      return t - jt * 7;
    case "oneMonth":
      return t - jt * 31;
    case "threeMonth":
      return t - jt * 31 * 3;
    case "halfYear":
      return t - jt * 183;
    case "oneYear":
      return t - jt * 365;
    case "twoYear":
      return t - 2 * (jt * 365);
    default:
      return 0;
  }
}, bs = (n, t, e = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return n *= 365, bs(n, "day", e, o);
    case "quarter":
      n *= 3;
    case "month":
      return n *= 30, bs(n, "day", e, o);
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
  return e ? o + n : o - n;
};
function Fv(n, ...t) {
  var e;
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((i) => {
      var l;
      const r = (l = o[i]) != null ? l : 0;
      n = n.replace(new RegExp(`\\{${i}\\}`, "g"), `${r}`);
    }), n;
  }
  for (let o = 0; o < t.length; o++) {
    const i = (e = t[o]) != null ? e : "";
    n = n.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
  }
  return n;
}
var ll = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(ll || {});
function qv(n, t = 2, e = "") {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / ll[e]).toFixed(t) + e);
}
const Vv = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const o = e[1];
  return n = n.replace(o, ""), Number.parseInt(n, 10) * ll[o];
};
function dr(n) {
  return !!n && typeof n == "object" && !Array.isArray(n);
}
function $s(n, ...t) {
  if (!t.length)
    return n;
  const e = t.shift();
  if (dr(n) && dr(e))
    for (const o in e)
      dr(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), $s(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return $s(n, ...t);
}
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: jt,
  createDate: st,
  isSameDay: Bn,
  isSameYear: ms,
  isSameMonth: Nf,
  isSameWeek: Nv,
  isToday: Hv,
  isYesterday: Wv,
  isTomorrow: Iv,
  isDBY: zv,
  formatDate: ys,
  formatDateSpan: Uv,
  getTimeBeforeDesc: Bv,
  calculateTimestamp: bs,
  formatString: Fv,
  formatBytes: qv,
  convertBytes: Vv,
  isObject: dr,
  mergeDeep: $s
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xv as Avatar,
  hn as ContextMenu,
  Ko as DTable,
  pn as Dropdown,
  Rc as EventBus,
  hh as Menu,
  Tv as NavTabs,
  Gv as Scrollbar,
  Mh as addI18nMap,
  Kv as browser,
  Ch as getLangCode,
  Jv as helpers,
  Ls as i18n,
  Sl as nativeEvents,
  Sh as setLangCode,
  Oh as store
};
