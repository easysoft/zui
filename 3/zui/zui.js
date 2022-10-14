var rr = Object.defineProperty;
var ir = (e, n, t) => n in e ? rr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var D = (e, n, t) => (ir(e, typeof n != "symbol" ? n + "" : n, t), t), zn = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (zn(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, A = (e, n, t, o) => (zn(e, n, "write to private field"), o ? o.call(e, t) : n.set(e, t), t);
var H = (e, n, t) => (zn(e, n, "access private method"), t);
const ar = (e) => {
  const n = {};
  if (!e)
    return n;
  const t = Object.values(e.attributes);
  return t && t.length > 0 && t.forEach((o) => {
    const { name: s, value: r } = o;
    n[s] = r;
  }), n;
};
class lr extends HTMLElement {
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
    const t = ar(this);
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
customElements.get("zui-button") || customElements.define("zui-button", lr);
var Ln, j, ts, Qe, we, So, tn = {}, es = [], cr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function ns(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function Y(e, n, t) {
  var o, s, r, a = {};
  for (r in n)
    r == "key" ? o = n[r] : r == "ref" ? s = n[r] : a[r] = n[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ln.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return Ve(e, a, o, s, null);
}
function Ve(e, n, t, o, s) {
  var r = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ts : s };
  return s == null && j.vnode != null && j.vnode(r), r;
}
function os() {
  return { current: null };
}
function Nn(e) {
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
function ss(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ss(e);
  }
}
function Ro(e) {
  (!e.__d && (e.__d = !0) && we.push(e) && !en.__r++ || So !== j.debounceRendering) && ((So = j.debounceRendering) || setTimeout)(en);
}
function en() {
  for (var e; en.__r = we.length; )
    e = we.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), we = [], e.some(function(n) {
      var t, o, s, r, a, l;
      n.__d && (a = (r = (t = n).__v).__e, (l = t.__P) && (o = [], (s = Lt({}, r)).__v = r.__v + 1, ro(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? ue(r) : a, r.__h), ls(o, r), r.__e != a && ss(r)));
    });
}
function rs(e, n, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || es, m = y.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ve(null, u, null, null, u) : Array.isArray(u) ? Ve(Nn, { children: u }, null, null, null) : u.__b > 0 ? Ve(u.type, u.props, u.key, null, u.__v) : u) != null) {
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
      ro(e, u, d = d || tn, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = is(u, c, e) : c = as(e, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != e && (c = ue(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = ue(o, i + 1)), us(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      cs(v[i], v[++i], v[++i]);
}
function is(e, n, t) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, n = typeof o.type == "function" ? is(o, n, t) : as(t, o, o, s, o.__e, n));
  return n;
}
function as(e, n, t, o, s, r) {
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
function ur(e, n, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in n || nn(e, r, null, t[r], o);
  for (r in n)
    s && typeof n[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === n[r] || nn(e, r, n[r], t[r], o);
}
function Mo(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || cr.test(n) ? t : t + "px";
}
function nn(e, n, t, o, s) {
  var r;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || Mo(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || Mo(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      r = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + r] = t, t ? o || e.addEventListener(n, r ? $o : Ao, r) : e.removeEventListener(n, r ? $o : Ao, r);
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
function $o(e) {
  this.l[e.type + !0](j.event ? j.event(e) : e);
}
function ro(e, n, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, E, x, C, b = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, r = [l]), (f = j.__b) && f(n);
  try {
    t:
      if (typeof b == "function") {
        if (v = n.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = n.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? n.__c = i = new b(v, m) : (n.__c = i = new Ee(v, m), i.constructor = b, i.render = hr), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Lt({}, i.__s)), Lt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || n.__v === t.__v) {
            i.props = v, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(S) {
              S && (S.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = n, i.__P = e, E = j.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Lt(Lt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), C = f != null && f.type === Nn && f.key == null ? f.props.children : f, rs(e, Array.isArray(C) ? C : [C], n, t, o, s, r, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = fr(t.__e, n, t, o, s, r, a, c);
    (f = j.diffed) && f(n);
  } catch (S) {
    n.__v = null, (c || r != null) && (n.__e = l, n.__h = !!c, r[r.indexOf(l)] = null), j.__e(S, n, t);
  }
}
function ls(e, n) {
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
function fr(e, n, t, o, s, r, a, l) {
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
    if (r = r && Ln.call(e.childNodes), f = (g = t.props || tn).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ur(e, d, g, s, l), i)
      n.__k = [];
    else if (p = n.props.children, rs(e, Array.isArray(p) ? p : [p], n, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && ue(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && ns(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && nn(e, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && nn(e, "checked", p, g.checked, !1));
  }
  return e;
}
function cs(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    j.__e(o, t);
  }
}
function us(e, n, t) {
  var o, s;
  if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cs(o, null, n)), (o = e.__c) != null) {
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
      o[s] && us(o[s], n, typeof e.type != "function");
  t || e.__e == null || ns(e.__e), e.__e = e.__d = void 0;
}
function hr(e, n, t) {
  return this.constructor(e, t);
}
function dr(e, n, t) {
  var o, s, r;
  j.__ && j.__(e, n), s = (o = typeof t == "function") ? null : t && t.__k || n.__k, r = [], ro(n, e = (!o && t || n).__k = Y(Nn, null, [e]), s || tn, tn, n.ownerSVGElement !== void 0, !o && t ? [t] : s ? null : n.firstChild ? Ln.call(n.childNodes) : null, r, !o && t ? t : s ? s.__e : n.firstChild, o), ls(r, e);
}
Ln = es.slice, j = { __e: function(e, n, t, o) {
  for (var s, r, a; n = n.__; )
    if ((s = n.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ts = 0, Qe = function(e) {
  return e != null && e.constructor === void 0;
}, Ee.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, t), this.props)), e && Lt(t, e), e != null && this.__v && (n && this.__h.push(n), Ro(this));
}, Ee.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ro(this));
}, Ee.prototype.render = Nn, we = [], en.__r = 0;
var vt;
class pr {
  constructor(n = "") {
    w(this, vt, void 0);
    typeof n == "object" ? A(this, vt, n) : A(this, vt, document.appendChild(document.createComment(n)));
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
class io extends pr {
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
    return typeof n == "string" && (qn.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(io.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (qn.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var _t, Se, Bt, be;
class Oo extends io {
  constructor(t = "", o) {
    super(t);
    w(this, Bt);
    w(this, _t, /* @__PURE__ */ new Map());
    w(this, Se, void 0);
    A(this, Se, o == null ? void 0 : o.customEventSuffix);
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
_t = new WeakMap(), Se = new WeakMap(), Bt = new WeakSet(), be = function(t) {
  const o = h(this, Se);
  return qn.has(t) || typeof o != "string" || t.endsWith(o) ? t : `${t}${o}`;
};
function gr(e) {
  return Object.fromEntries(Object.entries(e).map(([n, t]) => {
    if (typeof t == "string")
      try {
        t = JSON.parse(t);
      } catch {
      }
    return [n, t];
  }));
}
var Mt, ne, rt;
class Dn {
  constructor(n, t) {
    w(this, Mt, void 0);
    w(this, ne, void 0);
    w(this, rt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, A(this, rt, new Oo(n, { customEventSuffix: `.${this.constructor.KEY}` })), A(this, Mt, { ...this.constructor.DEFAULT, ...n instanceof HTMLElement ? gr(n.dataset) : null, ...t }), this.constructor.all.set(n, this), A(this, ne, n), this.init(), h(this, rt).emit("inited", this);
  }
  get options() {
    return h(this, Mt);
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
    return n && Object.assign(h(this, Mt), n), h(this, Mt);
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
    let o = Oo.createEvent(n, t);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = h(this, Mt)[s];
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
Mt = new WeakMap(), ne = new WeakMap(), rt = new WeakMap(), D(Dn, "allComponents", /* @__PURE__ */ new Map());
var Re;
class fs extends Dn {
  constructor() {
    super(...arguments);
    w(this, Re, os());
  }
  get $() {
    return h(this, Re).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(t) {
    const o = this.constructor.Component;
    dr(/* @__PURE__ */ Y(o, {
      ref: h(this, Re),
      ...this.setOptions(t)
    }), this.element);
  }
}
Re = new WeakMap();
const T = (...e) => e.map((n) => Array.isArray(n) ? T(...n) : typeof n == "function" ? T(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((t) => {
  const o = n[t];
  return typeof o == "function" ? !!o() : !!o;
}).join(" ") : n).filter((n) => typeof n == "string" && n.length).join(" ");
function vr(e) {
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
    className: T(n),
    ...t
  }, /* @__PURE__ */ Y("a", {
    className: T("menu-item", o, { disabled: a, active: l, "has-icon": c }),
    href: s,
    target: r,
    ...d
  }, Qe(c) ? c : typeof c == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${c}`
  }) : null, f, Qe(i) ? i : typeof i == "string" ? /* @__PURE__ */ Y("i", {
    class: `icon ${i}`
  }) : null), g);
}
function _r({ className: e }) {
  return /* @__PURE__ */ Y("div", {
    class: T("menu-divider", e)
  });
}
function mr({ className: e, title: n, children: t, ...o }) {
  return /* @__PURE__ */ Y("li", {
    class: T("menu-heading", e),
    ...o
  }, n, t);
}
var Me, hn, hs, Ae, dn, pn;
const mo = class extends Ee {
  constructor() {
    super(...arguments);
    w(this, hn);
    D(this, "state", { shownSubs: {} });
    w(this, Me, os());
    w(this, Ae, (t) => {
      const { onRenderSubMenu: o } = this.props;
      if (o)
        return o(t, Y);
      const { afterRender: s, onClickItem: r, subMenuTrigger: a, onRenderItem: l } = this.props;
      return /* @__PURE__ */ Y(mo, {
        className: "menu-sub",
        items: t.items,
        onRenderSubMenu: h(this, Ae),
        afterRender: s,
        onClickItem: r,
        onRenderItem: l,
        subMenuTrigger: a
      });
    });
    w(this, dn, (t, o) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(t, !0), o.preventDefault());
    });
    w(this, pn, (t, o) => {
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
    return /* @__PURE__ */ Y("menu", {
      class: T(
        "menu",
        t,
        (s != null ? s : u == null ? void 0 : u.some((p) => "icon" in p)) ? "has-icons" : ""
      ),
      ...d,
      ref: h(this, Me)
    }, u == null ? void 0 : u.map((p, _) => {
      const v = { type: "item", key: _, ...p };
      if (c) {
        const $ = c(this, v, _, Y);
        $ && Object.assign(v, $);
      }
      const { key: y = _, type: m = "item", ...E } = v;
      if (m === "heading")
        return /* @__PURE__ */ Y(mr, {
          ...E,
          key: y
        });
      if (m === "divider")
        return /* @__PURE__ */ Y(_r, {
          ...E,
          key: y
        });
      const { onClick: x, items: C, ...b } = E, S = {
        ...b,
        key: y,
        onClick: H(this, hn, hs).bind(this, v, _, x)
      }, k = C && this.state.shownSubs[y];
      return C && (S.rootClass = T(S.rootClass, "has-sub", k ? "has-sub-shown" : ""), l === "hover" && (S.rootProps = {
        ...S.rootProps,
        onMouseEnter: h(this, dn).bind(this, y),
        onMouseLeave: h(this, pn).bind(this, y)
      })), /* @__PURE__ */ Y(vr, {
        ...S
      }, k && h(this, Ae).call(this, v));
    }), r);
  }
};
let Vn = mo;
Me = new WeakMap(), hn = new WeakSet(), hs = function(t, o, s, r) {
  var l;
  s && s.call(r.target, r);
  const { onClickItem: a } = this.props;
  a && a(t, o, r), this.props.subMenuTrigger === "click" && t.items && (this.toggleSubMenu((l = t.key) != null ? l : o, !0), r.stopPropagation(), r.preventDefault());
}, Ae = new WeakMap(), dn = new WeakMap(), pn = new WeakMap();
class ds extends fs {
}
D(ds, "Component", Vn);
var ao, I, ps, gs, xe, Lo, vs = {}, _s = [], yr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function ms(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function M(e, n, t) {
  var o, s, r, a = {};
  for (r in n)
    r == "key" ? o = n[r] : r == "ref" ? s = n[r] : a[r] = n[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ao.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return Ye(e, a, o, s, null);
}
function Ye(e, n, t, o, s) {
  var r = { type: e, props: n, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ps : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function br() {
  return { current: null };
}
function lo(e) {
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
function ys(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ys(e);
  }
}
function No(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !on.__r++ || Lo !== I.debounceRendering) && ((Lo = I.debounceRendering) || setTimeout)(on);
}
function on() {
  for (var e; on.__r = xe.length; )
    e = xe.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), xe = [], e.some(function(n) {
      var t, o, s, r, a, l;
      n.__d && (a = (r = (t = n).__v).__e, (l = t.__P) && (o = [], (s = Nt({}, r)).__v = r.__v + 1, xs(l, r, s, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? fe(r) : a, r.__h), Er(o, r), r.__e != a && ys(r)));
    });
}
function bs(e, n, t, o, s, r, a, l, c, f) {
  var i, g, d, u, p, _, v, y = o && o.__k || _s, m = y.length;
  for (t.__k = [], i = 0; i < n.length; i++)
    if ((u = t.__k[i] = (u = n[i]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ye(null, u, null, null, u) : Array.isArray(u) ? Ye(lo, { children: u }, null, null, null) : u.__b > 0 ? Ye(u.type, u.props, u.key, null, u.__v) : u) != null) {
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
      xs(e, u, d = d || vs, s, r, a, l, c, f), p = u.__e, (g = u.ref) && d.ref != g && (v || (v = []), d.ref && v.push(d.ref, null, u), v.push(g, u.__c || p, u)), p != null ? (_ == null && (_ = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = ws(u, c, e) : c = Es(e, u, d, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != e && (c = fe(d));
    }
  for (t.__e = _, i = m; i--; )
    y[i] != null && (typeof t.type == "function" && y[i].__e != null && y[i].__e == t.__d && (t.__d = fe(o, i + 1)), Cs(y[i], y[i]));
  if (v)
    for (i = 0; i < v.length; i++)
      ks(v[i], v[++i], v[++i]);
}
function ws(e, n, t) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, n = typeof o.type == "function" ? ws(o, n, t) : Es(t, o, o, s, o.__e, n));
  return n;
}
function Es(e, n, t, o, s, r) {
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
function wr(e, n, t, o, s) {
  var r;
  for (r in t)
    r === "children" || r === "key" || r in n || sn(e, r, null, t[r], o);
  for (r in n)
    s && typeof n[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || t[r] === n[r] || sn(e, r, n[r], t[r], o);
}
function Do(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || yr.test(n) ? t : t + "px";
}
function sn(e, n, t, o, s) {
  var r;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            t && n in t || Do(e.style, n, "");
        if (t)
          for (n in t)
            o && t[n] === o[n] || Do(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      r = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + r] = t, t ? o || e.addEventListener(n, r ? Po : To, r) : e.removeEventListener(n, r ? Po : To, r);
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
function To(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function Po(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function xs(e, n, t, o, s, r, a, l, c) {
  var f, i, g, d, u, p, _, v, y, m, E, x, C, b = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, l = n.__e = t.__e, n.__h = null, r = [l]), (f = I.__b) && f(n);
  try {
    t:
      if (typeof b == "function") {
        if (v = n.props, y = (f = b.contextType) && o[f.__c], m = f ? y ? y.props.value : f.__ : o, t.__c ? _ = (i = n.__c = t.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? n.__c = i = new b(v, m) : (n.__c = i = new Xt(v, m), i.constructor = b, i.render = kr), y && y.sub(i), i.props = v, i.state || (i.state = {}), i.context = m, i.__n = o, g = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Nt({}, i.__s)), Nt(i.__s, b.getDerivedStateFromProps(v, i.__s))), d = i.props, u = i.state, g)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && v !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, m) === !1 || n.__v === t.__v) {
            i.props = v, i.state = i.__s, n.__v !== t.__v && (i.__d = !1), i.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(S) {
              S && (S.__ = n);
            }), i.__h.length && a.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, u, p);
          });
        }
        if (i.context = m, i.props = v, i.__v = n, i.__P = e, E = I.__r, x = 0, "prototype" in b && b.prototype.render)
          i.state = i.__s, i.__d = !1, E && E(n), f = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, E && E(n), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++x < 25);
        i.state = i.__s, i.getChildContext != null && (o = Nt(Nt({}, o), i.getChildContext())), g || i.getSnapshotBeforeUpdate == null || (p = i.getSnapshotBeforeUpdate(d, u)), C = f != null && f.type === lo && f.key == null ? f.props.children : f, bs(e, Array.isArray(C) ? C : [C], n, t, o, s, r, a, l, c), i.base = n.__e, n.__h = null, i.__h.length && a.push(i), _ && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = xr(t.__e, n, t, o, s, r, a, c);
    (f = I.diffed) && f(n);
  } catch (S) {
    n.__v = null, (c || r != null) && (n.__e = l, n.__h = !!c, r[r.indexOf(l)] = null), I.__e(S, n, t);
  }
}
function Er(e, n) {
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
function xr(e, n, t, o, s, r, a, l) {
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
    if (r = r && ao.call(e.childNodes), f = (g = t.props || vs).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (g = {}, p = 0; p < e.attributes.length; p++)
          g[e.attributes[p].name] = e.attributes[p].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (wr(e, d, g, s, l), i)
      n.__k = [];
    else if (p = n.props.children, bs(e, Array.isArray(p) ? p : [p], n, t, o, s && u !== "foreignObject", r, a, r ? r[0] : t.__k && fe(t, 0), l), r != null)
      for (p = r.length; p--; )
        r[p] != null && ms(r[p]);
    l || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || u === "progress" && !p || u === "option" && p !== g.value) && sn(e, "value", p, g.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && sn(e, "checked", p, g.checked, !1));
  }
  return e;
}
function ks(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    I.__e(o, t);
  }
}
function Cs(e, n, t) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ks(o, null, n)), (o = e.__c) != null) {
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
      o[s] && Cs(o[s], n, typeof e.type != "function");
  t || e.__e == null || ms(e.__e), e.__e = e.__d = void 0;
}
function kr(e, n, t) {
  return this.constructor(e, t);
}
ao = _s.slice, I = { __e: function(e, n, t, o) {
  for (var s, r, a; n = n.__; )
    if ((s = n.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ps = 0, gs = function(e) {
  return e != null && e.constructor === void 0;
}, Xt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, t), this.props)), e && Nt(t, e), e != null && this.__v && (n && this.__h.push(n), No(this));
}, Xt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), No(this));
}, Xt.prototype.render = lo, xe = [], on.__r = 0;
var zt, Ut;
class Ho extends Xt {
  constructor(t) {
    var o;
    super(t);
    w(this, zt, 0);
    w(this, Ut, null);
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
      o && (h(this, zt) && cancelAnimationFrame(h(this, zt)), A(this, zt, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? t.clientX - o.x : t.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), A(this, zt, 0);
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
    t && (A(this, Ut, typeof t == "string" ? document : t.current), h(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    return o === "horz" ? (p.height = s, p.width = t, _.width = this.barSize, _.left = Math.round(Math.min(g, d) * (t - _.width) / g)) : (p.width = s, p.height = t, _.height = this.barSize, _.top = Math.round(Math.min(g, d) * (t - _.height) / g)), /* @__PURE__ */ M("div", {
      className: T("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": u
      }),
      style: p,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ M("div", {
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
var co = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(co || {});
function Cr(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / co[t]).toFixed(n) + t);
}
const Sr = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const o = t[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * co[o];
};
function Rr(e) {
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
function Mr(e) {
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
const da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Rr,
  domReady: Mr,
  isElementVisible: Ar,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
function $r(e, n) {
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
function Or(e, n, t) {
  const o = $r(e, n), s = o[o.length - 1];
  return s === void 0 ? t : s;
}
function Ge(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function rn(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Ge(e) && Ge(t))
    for (const o in t)
      Ge(t[o]) ? (e[o] || Object.assign(e, { [o]: {} }), rn(e[o], t[o])) : Object.assign(e, { [o]: t[o] });
  return rn(e, ...n);
}
var Zo, Qo;
let uo = (Qo = (Zo = document.documentElement.getAttribute("lang")) == null ? void 0 : Zo.toLowerCase()) != null ? Qo : "zh_cn", It;
function Lr() {
  return uo;
}
function Nr(e) {
  uo = e.toLowerCase();
}
function Dr(e, n) {
  It || (It = {}), typeof e == "string" && (e = { [e]: n != null ? n : {} }), rn(It, e);
}
function Tn(e, n, t, o, s) {
  Array.isArray(e) ? It && e.unshift(It) : e = It ? [It, e] : [e], typeof t == "string" && (s = o, o = t, t = void 0);
  const r = s || uo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const c = l[r];
    if (!!c && (a = Or(c, n), a !== void 0))
      break;
  }
  return a === void 0 ? o : t ? Qt(a, ...Array.isArray(t) ? t : [t]) : a;
}
Tn.addLang = Dr;
Tn.getCode = Lr;
Tn.setCode = Nr;
let Ss = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
var $e, At, it, oe, se, Xe;
const yo = class {
  constructor(n, t = "local") {
    w(this, se);
    w(this, $e, void 0);
    w(this, At, void 0);
    w(this, it, void 0);
    w(this, oe, void 0);
    A(this, $e, t), A(this, At, `ZUI_STORE:${n != null ? n : Ss()}`), A(this, it, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return h(this, $e);
  }
  get session() {
    return this.type === "session" ? this : (h(this, oe) || A(this, oe, new yo(h(this, At), "session")), h(this, oe));
  }
  get(n, t) {
    const o = h(this, it).getItem(H(this, se, Xe).call(this, n));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : t;
  }
  set(n, t) {
    if (t == null)
      return this.remove(n);
    h(this, it).setItem(H(this, se, Xe).call(this, n), JSON.stringify(t));
  }
  remove(n) {
    h(this, it).removeItem(H(this, se, Xe).call(this, n));
  }
  each(n) {
    for (let t = 0; t < h(this, it).length; t++) {
      const o = h(this, it).key(t);
      if (o != null && o.startsWith(h(this, At))) {
        const s = h(this, it).getItem(o);
        typeof s == "string" && n(o.substring(h(this, At).length + 1), JSON.parse(s));
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
let an = yo;
$e = new WeakMap(), At = new WeakMap(), it = new WeakMap(), oe = new WeakMap(), se = new WeakSet(), Xe = function(n) {
  return `${h(this, At)}:${n}`;
};
const Tr = new an("DEFAULT");
function Pr(e, n = "local") {
  return new an(e, n);
}
Object.assign(Tr, { create: Pr });
class pa extends Xt {
  render() {
    const { size: n, rounded: t, className: o, style: s, src: r, text: a, children: l, ...c } = this.props, f = [o], i = { ...s };
    let g = null;
    return r ? g = /* @__PURE__ */ M("img", {
      src: r,
      alt: a
    }) : g = a, typeof n == "number" ? (i.width = n, i.height = n) : typeof n == "string" && f.push(`avatar-${n}`), typeof t == "string" && f.push(`rounded-${t}`), /* @__PURE__ */ M("div", {
      className: T(f),
      style: i,
      ...c
    }, g, l);
  }
}
function Hr() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function jr() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Wr(e, n) {
  Hr(), e.classList.add("block"), jo(e, n), e.onclick = (t) => Ir(t, e), window.addEventListener("resize", () => {
    jo(e, n);
  });
}
function Rs(e) {
  var n;
  jr(), (n = e.classList) == null || n.remove("block");
}
function jo(e, n) {
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
function Ir(e, n) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), Rs(n));
}
function Br(e) {
  var n, t;
  return e instanceof HTMLAnchorElement ? (t = (n = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : n.groups) == null ? void 0 : t.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const n = e.target, t = n.closest("[data-toggle=modal]");
  if (t) {
    const o = Br(t);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    Wr(s, t.dataset.position || "fit");
  } else
    n.className.includes("modal") && Rs(n);
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
function fo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Q(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
var Kt = Math.max, ln = Math.min, he = Math.round;
function Yn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ms() {
  return !/^((?!chrome|android).)*safari/i.test(Yn());
}
function de(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  n && Z(e) && (s = e.offsetWidth > 0 && he(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && he(o.height) / e.offsetHeight || 1);
  var a = Jt(e) ? Q(e) : window, l = a.visualViewport, c = !Ms() && t, f = (o.left + (c && l ? l.offsetLeft : 0)) / s, i = (o.top + (c && l ? l.offsetTop : 0)) / r, g = o.width / s, d = o.height / r;
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
function ho(e) {
  var n = Q(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function zr(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ur(e) {
  return e === Q(e) || !Z(e) ? ho(e) : zr(e);
}
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  return ((Jt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function po(e) {
  return de(Tt(e)).left + ho(e).scrollLeft;
}
function ot(e) {
  return Q(e).getComputedStyle(e);
}
function go(e) {
  var n = ot(e), t = n.overflow, o = n.overflowX, s = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + s + o);
}
function Fr(e) {
  var n = e.getBoundingClientRect(), t = he(n.width) / e.offsetWidth || 1, o = he(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function qr(e, n, t) {
  t === void 0 && (t = !1);
  var o = Z(n), s = Z(n) && Fr(n), r = Tt(n), a = de(e, s, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((ft(n) !== "body" || go(r)) && (l = Ur(n)), Z(n) ? (c = de(n, !0), c.x += n.clientLeft, c.y += n.clientTop) : r && (c.x = po(r))), {
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
function Pn(e) {
  return ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (fo(e) ? e.host : null) || Tt(e);
}
function $s(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Z(e) && go(e) ? e : $s(Pn(e));
}
function ke(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = $s(e), s = o === ((t = e.ownerDocument) == null ? void 0 : t.body), r = Q(o), a = s ? [r].concat(r.visualViewport || [], go(o) ? o : []) : o, l = n.concat(a);
  return s ? l : l.concat(ke(Pn(a)));
}
function Vr(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function Wo(e) {
  return !Z(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function Yr(e) {
  var n = /firefox/i.test(Yn()), t = /Trident/i.test(Yn());
  if (t && Z(e)) {
    var o = ot(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Pn(e);
  for (fo(s) && (s = s.host); Z(s) && ["html", "body"].indexOf(ft(s)) < 0; ) {
    var r = ot(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || n && r.willChange === "filter" || n && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Hn(e) {
  for (var n = Q(e), t = Wo(e); t && Vr(t) && ot(t).position === "static"; )
    t = Wo(t);
  return t && (ft(t) === "html" || ft(t) === "body" && ot(t).position === "static") ? n : t || Yr(e) || n;
}
var nt = "top", ht = "bottom", Dt = "right", wt = "left", jn = "auto", Wn = [nt, ht, Dt, wt], pe = "start", Ce = "end", Gr = "clippingParents", Os = "viewport", me = "popper", Xr = "reference", Io = /* @__PURE__ */ Wn.reduce(function(e, n) {
  return e.concat([n + "-" + pe, n + "-" + Ce]);
}, []), Kr = /* @__PURE__ */ [].concat(Wn, [jn]).reduce(function(e, n) {
  return e.concat([n, n + "-" + pe, n + "-" + Ce]);
}, []), Jr = "beforeRead", Zr = "read", Qr = "afterRead", ti = "beforeMain", ei = "main", ni = "afterMain", oi = "beforeWrite", si = "write", ri = "afterWrite", Gn = [Jr, Zr, Qr, ti, ei, ni, oi, si, ri];
function ii(e) {
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
function ai(e) {
  var n = ii(e);
  return Gn.reduce(function(t, o) {
    return t.concat(n.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function li(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function St(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, e);
}
var Wt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ci = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ui(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Bo).filter(function(t, o, s) {
      return s.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof n.name != "string" && console.error(St(Wt, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(St(Wt, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Gn.indexOf(n.phase) < 0 && console.error(St(Wt, n.name, '"phase"', "either " + Gn.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(St(Wt, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(St(Wt, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(St(Wt, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(St(Wt, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Bo.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      n.requires && n.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(St(ci, String(n.name), o, o));
      });
    });
  });
}
function fi(e, n) {
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
function hi(e) {
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
function di(e, n) {
  var t = Q(e), o = Tt(e), s = t.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var f = Ms();
    (f || !f && n === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + po(e),
    y: c
  };
}
function pi(e) {
  var n, t = Tt(e), o = ho(e), s = (n = e.ownerDocument) == null ? void 0 : n.body, r = Kt(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Kt(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + po(e), c = -o.scrollTop;
  return ot(s || t).direction === "rtl" && (l += Kt(t.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function gi(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && fo(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Xn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vi(e, n) {
  var t = de(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function zo(e, n, t) {
  return n === Os ? Xn(di(e, t)) : Jt(n) ? vi(n, t) : Xn(pi(Tt(e)));
}
function _i(e) {
  var n = ke(Pn(e)), t = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, o = t && Z(e) ? Hn(e) : e;
  return Jt(o) ? n.filter(function(s) {
    return Jt(s) && gi(s, o) && ft(s) !== "body";
  }) : [];
}
function mi(e, n, t, o) {
  var s = n === "clippingParents" ? _i(e) : [].concat(n), r = [].concat(s, [t]), a = r[0], l = r.reduce(function(c, f) {
    var i = zo(e, f, o);
    return c.top = Kt(i.top, c.top), c.right = ln(i.right, c.right), c.bottom = ln(i.bottom, c.bottom), c.left = Kt(i.left, c.left), c;
  }, zo(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ge(e) {
  return e.split("-")[1];
}
function Ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ns(e) {
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
  var f = s ? Ls(s) : null;
  if (f != null) {
    var i = f === "y" ? "height" : "width";
    switch (r) {
      case pe:
        c[f] = c[f] - (n[i] / 2 - t[i] / 2);
        break;
      case Ce:
        c[f] = c[f] + (n[i] / 2 - t[i] / 2);
        break;
    }
  }
  return c;
}
function Ds() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yi(e) {
  return Object.assign({}, Ds(), e);
}
function bi(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function vo(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, s = o === void 0 ? e.placement : o, r = t.strategy, a = r === void 0 ? e.strategy : r, l = t.boundary, c = l === void 0 ? Gr : l, f = t.rootBoundary, i = f === void 0 ? Os : f, g = t.elementContext, d = g === void 0 ? me : g, u = t.altBoundary, p = u === void 0 ? !1 : u, _ = t.padding, v = _ === void 0 ? 0 : _, y = yi(typeof v != "number" ? v : bi(v, Wn)), m = d === me ? Xr : me, E = e.rects.popper, x = e.elements[p ? m : d], C = mi(Jt(x) ? x : x.contextElement || Tt(e.elements.popper), c, i, a), b = de(e.elements.reference), S = Ns({
    reference: b,
    element: E,
    strategy: "absolute",
    placement: s
  }), k = Xn(Object.assign({}, E, S)), $ = d === me ? k : b, L = {
    top: C.top - $.top + y.top,
    bottom: $.bottom - C.bottom + y.bottom,
    left: C.left - $.left + y.left,
    right: $.right - C.right + y.right
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
var Uo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", wi = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Fo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qo() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ei(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, s = n.defaultOptions, r = s === void 0 ? Fo : s;
  return function(l, c, f) {
    f === void 0 && (f = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Fo, r),
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
        var E = ai(hi([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = E.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = fi([].concat(E, i.options.modifiers), function(O) {
            var U = O.name;
            return U;
          });
          if (ui(x), Et(i.options.placement) === jn) {
            var C = i.orderedModifiers.find(function(O) {
              var U = O.name;
              return U === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ot(c), S = b.marginTop, k = b.marginRight, $ = b.marginBottom, L = b.marginLeft;
          [S, k, $, L].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), u.update();
      },
      forceUpdate: function() {
        if (!d) {
          var y = i.elements, m = y.reference, E = y.popper;
          if (!qo(m, E)) {
            process.env.NODE_ENV !== "production" && console.error(Uo);
            return;
          }
          i.rects = {
            reference: qr(m, Hn(E), i.options.strategy === "fixed"),
            popper: As(E)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var x = 0, C = 0; C < i.orderedModifiers.length; C++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(wi);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, C = -1;
              continue;
            }
            var b = i.orderedModifiers[C], S = b.fn, k = b.options, $ = k === void 0 ? {} : k, L = b.name;
            typeof S == "function" && (i = S({
              state: i,
              options: $,
              name: L,
              instance: u
            }) || i);
          }
        }
      },
      update: li(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(i);
        });
      }),
      destroy: function() {
        _(), d = !0;
      }
    };
    if (!qo(l, c))
      return process.env.NODE_ENV !== "production" && console.error(Uo), u;
    u.setOptions(f).then(function(v) {
      !d && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function p() {
      i.orderedModifiers.forEach(function(v) {
        var y = v.name, m = v.options, E = m === void 0 ? {} : m, x = v.effect;
        if (typeof x == "function") {
          var C = x({
            state: i,
            name: y,
            instance: u,
            options: E
          }), b = function() {
          };
          g.push(C || b);
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
var Fe = {
  passive: !0
};
function xi(e) {
  var n = e.state, t = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, c = Q(n.elements.popper), f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return r && f.forEach(function(i) {
    i.addEventListener("scroll", t.update, Fe);
  }), l && c.addEventListener("resize", t.update, Fe), function() {
    r && f.forEach(function(i) {
      i.removeEventListener("scroll", t.update, Fe);
    }), l && c.removeEventListener("resize", t.update, Fe);
  };
}
const ki = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xi,
  data: {}
};
function Ci(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = Ns({
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
  fn: Ci,
  data: {}
};
var Ri = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mi(e) {
  var n = e.x, t = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: he(n * s) / s || 0,
    y: he(t * s) / s || 0
  };
}
function Vo(e) {
  var n, t = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, f = e.adaptive, i = e.roundOffsets, g = e.isFixed, d = a.x, u = d === void 0 ? 0 : d, p = a.y, _ = p === void 0 ? 0 : p, v = typeof i == "function" ? i({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  u = v.x, _ = v.y;
  var y = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), E = wt, x = nt, C = window;
  if (f) {
    var b = Hn(t), S = "clientHeight", k = "clientWidth";
    if (b === Q(t) && (b = Tt(t), ot(b).position !== "static" && l === "absolute" && (S = "scrollHeight", k = "scrollWidth")), b = b, s === nt || (s === wt || s === Dt) && r === Ce) {
      x = ht;
      var $ = g && b === C && C.visualViewport ? C.visualViewport.height : b[S];
      _ -= $ - o.height, _ *= c ? 1 : -1;
    }
    if (s === wt || (s === nt || s === ht) && r === Ce) {
      E = Dt;
      var L = g && b === C && C.visualViewport ? C.visualViewport.width : b[k];
      u -= L - o.width, u *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, f && Ri), U = i === !0 ? Mi({
    x: u,
    y: _
  }) : {
    x: u,
    y: _
  };
  if (u = U.x, _ = U.y, c) {
    var B;
    return Object.assign({}, O, (B = {}, B[x] = m ? "0" : "", B[E] = y ? "0" : "", B.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + _ + "px)" : "translate3d(" + u + "px, " + _ + "px, 0)", B));
  }
  return Object.assign({}, O, (n = {}, n[x] = m ? _ + "px" : "", n[E] = y ? u + "px" : "", n.transform = "", n));
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Vo(Object.assign({}, i, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Vo(Object.assign({}, i, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const $i = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ai,
  data: {}
};
function Oi(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, s = n.attributes[t] || {}, r = n.elements[t];
    !Z(r) || !ft(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Li(e) {
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
const Ni = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oi,
  effect: Li,
  requires: ["computeStyles"]
};
var Di = [ki, Si, $i, Ni], Kn = /* @__PURE__ */ Ei({
  defaultModifiers: Di
});
function Ti(e) {
  return e === "x" ? "y" : "x";
}
function Ke(e, n, t) {
  return Kt(e, ln(n, t));
}
function Pi(e, n, t) {
  var o = Ke(e, n, t);
  return o > t ? t : o;
}
function Hi(e) {
  var n = e.state, t = e.options, o = e.name, s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !1 : a, c = t.boundary, f = t.rootBoundary, i = t.altBoundary, g = t.padding, d = t.tether, u = d === void 0 ? !0 : d, p = t.tetherOffset, _ = p === void 0 ? 0 : p, v = vo(n, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: i
  }), y = Et(n.placement), m = ge(n.placement), E = !m, x = Ls(y), C = Ti(x), b = n.modifiersData.popperOffsets, S = n.rects.reference, k = n.rects.popper, $ = typeof _ == "function" ? _(Object.assign({}, n.rects, {
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
      var B, tt = x === "y" ? nt : wt, F = x === "y" ? ht : Dt, W = x === "y" ? "height" : "width", G = b[x], xt = G + v[tt], dt = G - v[F], Zt = u ? -k[W] / 2 : 0, pt = m === pe ? S[W] : k[W], kt = m === pe ? -k[W] : -S[W], Pt = n.elements.arrow, gt = u && Pt ? As(Pt) : {
        width: 0,
        height: 0
      }, R = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : Ds(), N = R[tt], z = R[F], q = Ke(0, S[W], gt[W]), et = E ? S[W] / 2 - Zt - q - N - L.mainAxis : pt - q - N - L.mainAxis, Ht = E ? -S[W] / 2 + Zt + q + z + L.mainAxis : kt + q + z + L.mainAxis, Ct = n.elements.arrow && Hn(n.elements.arrow), We = Ct ? x === "y" ? Ct.clientTop || 0 : Ct.clientLeft || 0 : 0, Ie = (B = O == null ? void 0 : O[x]) != null ? B : 0, In = G + et - Ie - We, P = G + Ht - Ie, _e = Ke(u ? ln(xt, In) : xt, G, u ? Kt(dt, P) : dt);
      b[x] = _e, U[x] = _e - G;
    }
    if (l) {
      var jt, Be = x === "x" ? nt : wt, ze = x === "x" ? ht : Dt, st = b[C], Ue = C === "y" ? "height" : "width", bo = st + v[Be], wo = st - v[ze], Bn = [nt, wt].indexOf(y) !== -1, Eo = (jt = O == null ? void 0 : O[C]) != null ? jt : 0, xo = Bn ? bo : st - S[Ue] - k[Ue] - Eo + L.altAxis, ko = Bn ? st + S[Ue] + k[Ue] - Eo - L.altAxis : wo, Co = u && Bn ? Pi(xo, st, ko) : Ke(u ? xo : bo, st, u ? ko : wo);
      b[C] = Co, U[C] = Co - st;
    }
    n.modifiersData[o] = U;
  }
}
const Jn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Hi,
  requiresIfExists: ["offset"]
};
var ji = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Je(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return ji[n];
  });
}
var Wi = {
  start: "end",
  end: "start"
};
function Yo(e) {
  return e.replace(/start|end/g, function(n) {
    return Wi[n];
  });
}
function Ii(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, s = t.boundary, r = t.rootBoundary, a = t.padding, l = t.flipVariations, c = t.allowedAutoPlacements, f = c === void 0 ? Kr : c, i = ge(o), g = i ? l ? Io : Io.filter(function(p) {
    return ge(p) === i;
  }) : Wn, d = g.filter(function(p) {
    return f.indexOf(p) >= 0;
  });
  d.length === 0 && (d = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var u = d.reduce(function(p, _) {
    return p[_] = vo(e, {
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
function Bi(e) {
  if (Et(e) === jn)
    return [];
  var n = Je(e);
  return [Yo(e), n, Yo(n)];
}
function zi(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var s = t.mainAxis, r = s === void 0 ? !0 : s, a = t.altAxis, l = a === void 0 ? !0 : a, c = t.fallbackPlacements, f = t.padding, i = t.boundary, g = t.rootBoundary, d = t.altBoundary, u = t.flipVariations, p = u === void 0 ? !0 : u, _ = t.allowedAutoPlacements, v = n.options.placement, y = Et(v), m = y === v, E = c || (m || !p ? [Je(v)] : Bi(v)), x = [v].concat(E).reduce(function(gt, R) {
      return gt.concat(Et(R) === jn ? Ii(n, {
        placement: R,
        boundary: i,
        rootBoundary: g,
        padding: f,
        flipVariations: p,
        allowedAutoPlacements: _
      }) : R);
    }, []), C = n.rects.reference, b = n.rects.popper, S = /* @__PURE__ */ new Map(), k = !0, $ = x[0], L = 0; L < x.length; L++) {
      var O = x[L], U = Et(O), B = ge(O) === pe, tt = [nt, ht].indexOf(U) >= 0, F = tt ? "width" : "height", W = vo(n, {
        placement: O,
        boundary: i,
        rootBoundary: g,
        altBoundary: d,
        padding: f
      }), G = tt ? B ? Dt : wt : B ? ht : nt;
      C[F] > b[F] && (G = Je(G));
      var xt = Je(G), dt = [];
      if (r && dt.push(W[U] <= 0), l && dt.push(W[G] <= 0, W[xt] <= 0), dt.every(function(gt) {
        return gt;
      })) {
        $ = O, k = !1;
        break;
      }
      S.set(O, dt);
    }
    if (k)
      for (var Zt = p ? 3 : 1, pt = function(R) {
        var N = x.find(function(z) {
          var q = S.get(z);
          if (q)
            return q.slice(0, R).every(function(et) {
              return et;
            });
        });
        if (N)
          return $ = N, "break";
      }, kt = Zt; kt > 0; kt--) {
        var Pt = pt(kt);
        if (Pt === "break")
          break;
      }
    n.placement !== $ && (n.modifiersData[o]._skip = !0, n.placement = $, n.reset = !0);
  }
}
const Zn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: zi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ts(e) {
  return e.button === 2;
}
const Ui = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Un = "show", Ze = "contextmenu";
var Ft, J, qt, re, Oe, Vt, Le, Qn, gn, vn, _n, mn, Ps, yn, Hs;
const Rt = class extends Dn {
  constructor() {
    super(...arguments);
    w(this, Le);
    w(this, mn);
    w(this, yn);
    w(this, Ft, void 0);
    w(this, J, void 0);
    w(this, qt, /* @__PURE__ */ new Map());
    w(this, re, void 0);
    w(this, Oe, void 0);
    w(this, Vt, void 0);
    w(this, gn, (t) => {
      const o = t.$;
      if (!(o != null && o.parentElement))
        return;
      let s = h(this, qt).get(t);
      s || (s = Kn(o.parentElement, o, {
        modifiers: [Jn, Zn],
        placement: "right-start"
      }), h(this, qt).set(t, s)), s.update();
    });
    w(this, vn, (t) => {
      const o = h(this, qt).get(t);
      o && (o.destroy(), h(this, qt).delete(t));
    });
    w(this, _n, (t, o, s, r) => {
      if (o.type === "item" && o.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Un);
  }
  get menu() {
    var s, r;
    if (h(this, Ft))
      return h(this, Ft);
    const { element: t } = this;
    let o;
    if (this.options.menu)
      o = document.createElement("div"), o.classList.add(Ze), document.body.appendChild(o);
    else if (t) {
      const a = (s = t.getAttribute("href")) != null ? s : t.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(Ze) ? o = l : o = (r = t.parentNode) == null ? void 0 : r.querySelector(`.${Ze}`);
      }
    }
    if (o)
      return A(this, Ft, o), o;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return h(this, J) ? h(this, J) : H(this, Le, Qn).call(this);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    if (t = t || Rt.mousePos, this.emit("show", { menu: this, event: t }).defaultPrevented)
      return !1;
    A(this, Oe, t), H(this, mn, Ps).call(this, t) !== !1 && (this.menu.classList.add(Un), H(this, Le, Qn).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var o, s, r, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = h(this, J)) == null || o.destroy(), A(this, J, void 0), (s = h(this, Ft)) == null || s.classList.remove(Un), (a = (r = h(this, Vt)) == null ? void 0 : r.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    (t = h(this, J)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ts(t) || (Rt.getAll(), Rt.getAll().forEach((o) => o.hide()));
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
Ft = new WeakMap(), J = new WeakMap(), qt = new WeakMap(), re = new WeakMap(), Oe = new WeakMap(), Vt = new WeakMap(), Le = new WeakSet(), Qn = function() {
  const t = {
    modifiers: [Jn, Zn],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return h(this, J) ? h(this, J).setOptions(t) : A(this, J, Kn(H(this, yn, Hs).call(this), this.menu, t)), h(this, J);
}, gn = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), mn = new WeakSet(), Ps = function(t) {
  let { items: o } = this.options;
  if (!o)
    return;
  if (typeof o == "function" && (o = o(this, t)), !(o != null && o.length) || this.emit("updateMenu", { items: o, event: t, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: r } = this.options;
  return h(this, Vt) ? h(this, Vt).render({ items: o, ...r }) : A(this, Vt, new ds(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: o,
    ...r,
    afterRender: h(this, gn),
    beforeDestroy: h(this, vn),
    onRenderItem: h(this, _n)
  })), !0;
}, yn = new WeakSet(), Hs = function() {
  return h(this, re) || A(this, re, {
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
  if (n.closest(`.${Ze}`))
    return;
  const t = n.closest(Ui);
  t && te.ensure(t).show(e);
});
document.addEventListener("click", te.clear);
function Fi(e) {
  return (e == null ? void 0 : e.nodeType) !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false";
}
const qi = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', ye = "show", Go = "dropdown-menu";
var Yt, mt;
const bn = class extends Dn {
  constructor() {
    super(...arguments);
    w(this, Yt, void 0);
    w(this, mt, void 0);
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
        l != null && l.classList.contains(Go) ? r = l : r = (o = s.parentNode) == null ? void 0 : o.querySelector(`.${Go}`);
      }
      if (r)
        A(this, Yt, r);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return h(this, Yt);
  }
  get popper() {
    return h(this, mt) || A(this, mt, Kn(this.element, this.menu, {
      modifiers: [Jn, Zn],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), h(this, mt);
  }
  show(t) {
    this.events.emit("show", this).defaultPrevented || ((t == null ? void 0 : t.hideOthers) !== !1 && bn.getAll().forEach((s) => s !== this ? s.hide() : null), this.menu.classList.add(ye), this.element.classList.add(ye), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var o, s;
    Fi(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((o = h(this, mt)) == null || o.destroy(), A(this, mt, void 0), (s = h(this, Yt)) == null || s.classList.remove(ye), this.element.classList.remove(ye), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var t;
    (t = h(this, mt)) == null || t.destroy(), super.destroy();
  }
  static clear(t) {
    t && Ts(t) || bn.getAll().forEach((o) => o.hide());
  }
};
let ee = bn;
Yt = new WeakMap(), mt = new WeakMap(), D(ee, "NAME", "dropdown"), D(ee, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(e) {
  const t = e.target.closest(qi);
  t ? ee.ensure(t).toggle() : ee.clear(e);
});
function Vi(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function _o({ col: e, className: n, height: t, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: c, ...f }) {
  var b, S;
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
  }], _ = ["dtable-cell-content", n], v = [(S = l != null ? l : (b = o.data) == null ? void 0 : b[e.name]) != null ? S : ""], y = s ? s(v, { row: o, col: e }, M) : v, m = [], E = [], x = {}, C = {};
  return y == null || y.forEach((k) => {
    var $;
    if (typeof k == "object" && k && !gs(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k)) {
      const L = k.outer ? m : E;
      k.html ? L.push(/* @__PURE__ */ M("div", {
        className: T("dtable-cell-html", k.className),
        style: k.style,
        dangerouslySetInnerHTML: { __html: k.html },
        ...($ = k.attrs) != null ? $ : {}
      })) : (k.style && Object.assign(k.outer ? i : u, k.style), k.className && (k.outer ? p : _).push(k.className), k.children && L.push(k.children), k.attrs && Object.assign(k.outer ? x : C, k.attrs));
    } else
      E.push(k);
  }), /* @__PURE__ */ M("div", {
    className: T(p),
    style: i,
    "data-col": e.name,
    ...f,
    ...x
  }, E.length > 0 && /* @__PURE__ */ M("div", {
    className: T(_),
    style: u,
    ...C
  }, E), m);
}
function Yi({ col: e, children: n, style: t, ...o }) {
  var r;
  const { sortType: s } = e.setting;
  return /* @__PURE__ */ M(_o, {
    col: e,
    style: { ...t, ...e.setting.style },
    "data-sort": s || null,
    "data-type": e.type,
    ...o
  }, (r = e.setting.title) != null ? r : e.setting.name, s && /* @__PURE__ */ M("div", {
    className: `dtable-sort dtable-sort-${s === !0 ? "none" : s}`
  }), n);
}
function Fn({ row: e, className: n, top: t = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = _o, onRenderCell: c }) {
  return /* @__PURE__ */ M("div", {
    className: T("dtable-cells", n),
    style: { top: t, left: o, width: s, height: r }
  }, a.map((f) => f.visible ? /* @__PURE__ */ M(l, {
    key: f.name,
    col: f,
    row: e,
    onRenderCell: c
  }) : null));
}
function js({
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
  CellComponent: d = _o,
  onRenderCell: u,
  style: p,
  ..._
}) {
  let v = null;
  s != null && s.length && (v = /* @__PURE__ */ M(Fn, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  let y = null;
  a != null && a.length && (y = /* @__PURE__ */ M(Fn, {
    className: "dtable-flexable",
    cols: a,
    left: l - g,
    width: f,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ M(Fn, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + c,
    width: i,
    row: e,
    CellComponent: d,
    onRenderCell: u
  }));
  const E = { top: t, height: o, lineHeight: `${o - 2}px`, ...p };
  return /* @__PURE__ */ M("div", {
    className: T("dtable-row", n),
    style: E,
    "data-id": e.id,
    ..._
  }, v, y, m);
}
function Gi({ height: e, onRenderRow: n, ...t }) {
  const o = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Yi
  };
  if (n) {
    const s = n({ props: o }, M);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ M(js, {
    ...o
  }));
}
function Xi({
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
  return n = { ...n, top: t, height: s }, /* @__PURE__ */ M("div", {
    className: T("dtable-rows", e),
    style: n
  }, o.map((f) => {
    const i = {
      className: `dtable-row-${f.index % 2 ? "odd" : "even"}`,
      row: f,
      top: f.top - a,
      height: r,
      ...c
    }, g = l == null ? void 0 : l({ props: i, row: f }, M);
    return g && Object.assign(i, g), /* @__PURE__ */ M(js, {
      ...i
    });
  }));
}
const cn = /* @__PURE__ */ new Map(), un = [];
function Ws(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && cn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  cn.set(t, e), (n == null ? void 0 : n.buildIn) && !un.includes(t) && un.push(t);
}
function je(e, n) {
  Ws(e, n);
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
function Is(e) {
  return cn.delete(e);
}
function Ki(e) {
  if (typeof e == "string") {
    const n = cn.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Bs(e, n, t) {
  return n.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Ki(o);
    !s || t.has(s.name) || ((r = s.plugins) != null && r.length && Bs(e, s.plugins, t), e.push(s), t.add(s.name));
  }), e;
}
function Ji(e = [], n = !0) {
  return n && un.length && e.unshift(...un), e != null && e.length ? Bs([], e, /* @__PURE__ */ new Set()) : [];
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
function Zi(e) {
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
      var E;
      m != null && (typeof m == "object" && !Qe(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? u.push(
        /* @__PURE__ */ Y("div", {
          className: T(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(E = m.attrs) != null ? E : {}
        })
      ) : m.__html ? p.push(m.__html) : (m.style && Object.assign(d, m.style), m.className && g.push(m.className), m.children && u.push(m.children), m.attrs && Object.assign(i, m.attrs)) : u.push(m));
    });
  }), p.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(g),
    style: d,
    ...i
  }, u];
}
function Ko({
  tag: e = "div",
  ...n
}) {
  const [t, o] = Zi(n);
  return Y(e, t, ...o);
}
var Gt, ie, $t, yt, Ot, V, at, lt, ae, Ne, De, bt, le, ce, wn, zs, En, Us, xn, Fs, kn, qs, Te, eo, Cn, Sn, Pe, He, Rn, Mn, An, Vs, $n, Ys, On, Gs;
class to extends Xt {
  constructor(t) {
    var o;
    super(t);
    w(this, wn);
    w(this, En);
    w(this, xn);
    w(this, kn);
    w(this, Te);
    w(this, An);
    w(this, $n);
    w(this, On);
    D(this, "ref", br());
    w(this, Gt, 0);
    w(this, ie, void 0);
    w(this, $t, !1);
    w(this, yt, void 0);
    w(this, Ot, void 0);
    w(this, V, []);
    w(this, at, void 0);
    w(this, lt, /* @__PURE__ */ new Map());
    w(this, ae, {});
    w(this, Ne, void 0);
    w(this, De, []);
    D(this, "updateLayout", () => {
      h(this, Gt) && cancelAnimationFrame(h(this, Gt)), A(this, Gt, requestAnimationFrame(() => {
        A(this, at, void 0), this.forceUpdate(), A(this, Gt, 0);
      }));
    });
    w(this, bt, (t, o) => {
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
    w(this, le, (t) => {
      h(this, bt).call(this, t, `window_${t.type}`);
    });
    w(this, ce, (t) => {
      h(this, bt).call(this, t, `document_${t.type}`);
    });
    w(this, Cn, (t, o) => {
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
    w(this, Sn, (t, o) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, o)), h(this, V).forEach((s) => {
      s.onRenderHeaderRow && (t.props = s.onRenderHeaderRow.call(this, t, o));
    }), t.props));
    w(this, Pe, (t, o, s) => {
      const { row: r, col: a } = o;
      t[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (t = a.setting[l].call(this, t, o, s)), this.options[l] && (t = this.options[l].call(this, t, o, s)), h(this, V).forEach((c) => {
        c[l] && (t = c[l].call(this, t, o, s));
      }), t;
    });
    w(this, He, (t, o) => {
      o === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, Rn, (t) => {
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
    w(this, Mn, (t) => {
      const o = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    A(this, ie, (o = t.id) != null ? o : `dtable-${Ss(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, A(this, Ot, Object.freeze(Ji(t.plugins))), h(this, Ot).forEach((s) => {
      var c;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([f, i]) => {
        typeof i == "function" && Object.assign(this, { [f]: i.bind(this) });
      }), a && Object.assign(h(this, ae), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = s.onCreate) == null || c.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = h(this, at)) == null ? void 0 : t.options) || h(this, yt) || Xo();
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
    A(this, yt, void 0);
  }
  componentDidMount() {
    if (h(this, $t) ? this.forceUpdate() : H(this, Te, eo).call(this), h(this, V).forEach((t) => {
      let { events: o } = t;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", h(this, Rn)), this.on("keydown", h(this, Mn)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(t), A(this, Ne, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    h(this, V).forEach((t) => {
      var o;
      (o = t.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    h(this, $t) ? H(this, Te, eo).call(this) : h(this, V).forEach((t) => {
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
    }), A(this, ae, {}), h(this, lt).clear();
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
    s === "layout" ? A(this, at, void 0) : s === "options" && (A(this, at, void 0), A(this, yt, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
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
  i18n(t, o, s) {
    var r;
    return (r = Tn(h(this, De), t, o, s, this.options.lang)) != null ? r : `{i18n:${t}}`;
  }
  render() {
    var u;
    const t = H(this, On, Gs).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: c, scrollbarHover: f } = this.options, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, g = ["dtable", o, {
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
    }), /* @__PURE__ */ M("div", {
      id: h(this, ie),
      className: T(g),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, t && H(this, wn, zs).call(this, t), t && H(this, En, Us).call(this, t), t && H(this, xn, Fs).call(this, t), t && H(this, kn, qs).call(this, t));
  }
}
Gt = new WeakMap(), ie = new WeakMap(), $t = new WeakMap(), yt = new WeakMap(), Ot = new WeakMap(), V = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), ae = new WeakMap(), Ne = new WeakMap(), De = new WeakMap(), bt = new WeakMap(), le = new WeakMap(), ce = new WeakMap(), wn = new WeakSet(), zs = function(t) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = t;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ M(Gi, {
      scrollLeft: a,
      height: r,
      onRenderCell: h(this, Pe),
      onRenderRow: h(this, Sn),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Ko, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [t],
    generatorThis: this
  });
}, En = new WeakSet(), Us = function(t) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: f } = t;
  return /* @__PURE__ */ M(Xi, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: f,
    onRenderCell: h(this, Pe),
    onRenderRow: h(this, Cn),
    ...l
  });
}, xn = new WeakSet(), Fs = function(t) {
  const { footer: o } = t;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Ko, {
    className: "dtable-footer",
    style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
    renders: s,
    generateArgs: [t],
    generatorThis: this,
    generators: t.footerGenerators
  });
}, kn = new WeakSet(), qs = function(t) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: c, footerHeight: f } = t, { scrollColsWidth: i, scrollWidth: g } = r, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return i > g && o.push(
    /* @__PURE__ */ M(Ho, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: g,
      onScroll: h(this, He),
      left: r.fixedLeftWidth,
      bottom: (u === "inside" ? 0 : -d) + f,
      size: d,
      wheelContainer: this.ref
    })
  ), c > l && o.push(
    /* @__PURE__ */ M(Ho, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: h(this, He),
      right: 0,
      size: d,
      top: t.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, Te = new WeakSet(), eo = function() {
  var t;
  A(this, $t, !1), (t = this.options.afterRender) == null || t.call(this), h(this, V).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Cn = new WeakMap(), Sn = new WeakMap(), Pe = new WeakMap(), He = new WeakMap(), Rn = new WeakMap(), Mn = new WeakMap(), An = new WeakSet(), Vs = function() {
  if (h(this, yt))
    return !1;
  const o = { ...Xo(), ...h(this, Ot).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return A(this, yt, o), A(this, V, h(this, Ot).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), A(this, De, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, $n = new WeakSet(), Ys = function() {
  var Pt, gt;
  const { plugins: t } = this;
  let o = h(this, yt);
  const s = {
    flex: /* @__PURE__ */ M("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ M("div", {
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
      minWidth: Ct = a,
      maxWidth: We = l,
      ...Ie
    } = R, In = Vi(Ht, Ct, We), P = {
      name: N,
      type: z,
      setting: {
        name: N,
        type: z,
        fixed: q,
        flex: et,
        width: Ht,
        minWidth: Ct,
        maxWidth: We,
        ...Ie
      },
      flex: q ? 0 : et === !0 ? 1 : typeof et == "number" ? et : 0,
      left: 0,
      width: In,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((_e) => {
      var Be, ze;
      const jt = (Be = _e.colTypes) == null ? void 0 : Be[z];
      if (jt) {
        const st = typeof jt == "function" ? jt(P) : jt;
        st && Object.assign(P.setting, st);
      }
      (ze = _e.onAddCol) == null || ze.call(this, P);
    }), P.realWidth = P.realWidth || P.width, q === "left" ? (P.left = p, p += P.width, c.push(P)) : q === "right" ? (P.left = _, _ += P.width, f.push(P)) : (P.left = v, v += P.width, i.push(P)), P.flex && u.push(P), d.push(P), g[P.name] = P;
  });
  let y = o.width, m = 0;
  const E = p + v + _;
  if (typeof y == "function" && (y = y.call(this, E)), y === "auto")
    m = E;
  else if (y === "100%") {
    const { parent: R } = this;
    if (R)
      m = R.clientWidth;
    else {
      m = 0, A(this, $t, !0);
      return;
    }
  } else
    m = y != null ? y : 0;
  const { data: x, rowKey: C = "id", rowHeight: b } = o, S = [], k = (R, N, z) => {
    var et, Ht;
    const q = { data: z != null ? z : { [C]: R }, id: R, index: S.length, top: 0 };
    if (z || (q.lazy = !0), S.push(q), ((et = o.onAddRow) == null ? void 0 : et.call(this, q, N)) !== !1) {
      for (const Ct of t)
        if (((Ht = Ct.onAddRow) == null ? void 0 : Ht.call(this, q, N)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let R = 0; R < x; R++)
      k(`${R}`, R);
  else
    Array.isArray(x) && x.forEach((R, N) => {
      var z;
      typeof R == "object" ? k(`${(z = R[C]) != null ? z : ""}`, N, R) : k(`${R != null ? R : ""}`, N);
    });
  let $ = S;
  const L = {};
  if (o.onAddRows) {
    const R = o.onAddRows.call(this, $);
    R && ($ = R);
  }
  for (const R of t) {
    const N = (Pt = R.onAddRows) == null ? void 0 : Pt.call(this, $);
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
      W = 0, A(this, $t, !0);
      return;
    }
  } else
    W = F;
  const dt = W - B - tt, Zt = m - p - _, pt = {
    options: o,
    allRows: S,
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
  }), A(this, at, pt);
}, On = new WeakSet(), Gs = function() {
  (H(this, An, Vs).call(this) || !h(this, at)) && H(this, $n, Ys).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = t;
  if (s.length) {
    const E = a - l;
    if (E > 0) {
      const x = s.reduce((b, S) => b + S.flex, 0);
      let C = 0;
      s.forEach((b) => {
        const S = Math.min(E - C, Math.ceil(E * (b.flex / x)));
        b.realWidth = S + b.width, C += b.realWidth;
      });
    } else
      s.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let c = 0;
  r.forEach((E) => {
    E.left = c, c += E.realWidth, E.visible = E.left + E.realWidth >= o && E.left <= o + a;
  });
  const { rowsHeightTotal: f, rowsHeight: i, rows: g, rowHeight: d } = t, u = Math.min(Math.max(0, f - i), this.state.scrollTop), p = Math.floor(u / d), _ = u + i, v = Math.min(g.length, Math.ceil(_ / d)), y = [], { rowDataGetter: m } = this.options;
  for (let E = p; E < v; E++) {
    const x = g[E];
    x.lazy && m && (x.data = m([x.id])[0], x.lazy = !1), y.push(x);
  }
  return t.visibleRows = y, t.scrollTop = u, t.scrollLeft = o, t;
}, D(to, "addPlugin", Ws), D(to, "removePlugin", Is);
function Jo(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const o = "dtable-col-hover";
  t.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((s) => s.classList.add(o));
}
const Xs = {
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
      Jo(this, o);
    },
    mouseleave() {
      Jo(this, !1);
    }
  }
};
je(Xs, { buildIn: !0 });
function Qi(e, n) {
  var a, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (c, f) => {
    s && !s.call(this, c) || !!t[c] === f || (f ? t[c] = !0 : delete t[c], o[c] = f);
  };
  if (e === void 0 ? (n === void 0 && (n = !Ks.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function ta(e) {
  var n;
  return (n = this.state.checkedRows[e]) != null ? n : !1;
}
function Ks() {
  var t, o;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((s, r) => s + (n.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ea() {
  return Object.keys(this.state.checkedRows);
}
const Js = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Qi,
    isRowChecked: ta,
    isAllRowChecked: Ks,
    getChecks: ea
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ M("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ M("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, n) {
      const t = this.getChecks().length, o = [];
      return t && o.push(this.i18n("checkedCountInfo", { selected: t })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ M("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: n, col: t }) {
    var l, c;
    const { id: o } = n, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = t.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const f = this.isRowChecked(o), i = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, f, o)) != null ? c : /* @__PURE__ */ M("input", {
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
      const c = this.isAllRowChecked(), f = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, o)) != null ? l : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: c
      });
      e.unshift(f), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (!!this.isRowChecked(n.id))
      return { className: T(e.className, "is-checked") };
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
je(Js);
function no(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n != null ? n : { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, o = n.children && t && t[e];
  let s = !1, { parent: r } = n;
  for (; r; ) {
    const a = no.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return n.state = s ? "hidden" : o ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? no.call(this, n.parent).level + 1 : 0, n;
}
function na(e, n) {
  var s;
  let t = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !Zs.call(this)), n) {
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
function Zs() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Qs(e, n = 0, t, o = 0) {
  var s;
  t || (t = [...e.keys()]);
  for (const r of t) {
    const a = e.get(r);
    !a || (a.level === o && (a.order = n++), (s = a.children) != null && s.length && (n = Qs(e, n, a.children, o + 1)));
  }
  return n;
}
function tr(e, n, t, o) {
  const s = e.getNestedRowInfo(n);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = t, tr(e, r, t, o);
  }), s;
}
function er(e, n, t, o, s) {
  var l;
  const r = e.getNestedRowInfo(n);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((c) => {
    const f = !!(o[c] !== void 0 ? o[c] : s[c]);
    return t === f;
  })) && (o[n] = t), r.parent && er(e, r.parent, t, o, s);
}
const nr = {
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
        const a = tr(this, s, r, o);
        a != null && a.parent && er(this, a.parent, r, o, t);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: na,
    isAllCollapsed: Zs,
    getNestedRowInfo: no
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
    return e = e.filter((n) => this.getNestedRowInfo(n.id).state !== "hidden"), Qs(this.data.nestedMap), e.sort((n, t) => {
      var a, l;
      const o = this.getNestedRowInfo(n.id), s = this.getNestedRowInfo(t.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? n.index - t.index : r;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l, c, f;
    const { id: o, data: s } = t, { nestedToggle: r } = n.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && e.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, n, s)) != null ? c : /* @__PURE__ */ M("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = n.setting;
      i && (i === !0 && (i = (f = this.options.nestedIndent) != null ? f : 12), e.unshift(/* @__PURE__ */ M("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var s, r;
    const { id: o } = n;
    return t.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, t, void 0)) != null ? r : /* @__PURE__ */ M("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: T(e.className, `is-nested-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
je(nr);
const ut = 24 * 60 * 60 * 1e3, X = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), ve = (e, n = new Date()) => (e = X(e), n = X(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), oo = (e, n = new Date()) => X(e).getFullYear() === X(n).getFullYear(), or = (e, n = new Date()) => (e = X(e), n = X(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), oa = (e, n = new Date()) => {
  e = X(e), n = X(n);
  const t = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / t), s = Math.floor(n.getTime() / t);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, sa = (e, n) => ve(X(n), e), ra = (e, n) => ve(X(n).getTime() - ut, e), ia = (e, n) => ve(X(n).getTime() + ut, e), aa = (e, n) => ve(X(n).getTime() - 2 * ut, e), fn = (e, n = "yyyy-MM-dd hh:mm") => {
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
}, la = (e, n, t) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, s = fn(e, oo(e) ? o.month : o.full);
  if (ve(e, n))
    return s;
  const r = fn(n, oo(e, n) ? or(e, n) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, ca = (e) => {
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
}, so = (e, n, t = !0, o = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, so(e, "day", t, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, so(e, "day", t, o);
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
const sr = {
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
        return e[0] = /* @__PURE__ */ M("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: n, row: t }) {
        const { data: o } = t, { avatarWithName: s, avatarClass: r = "size-sm circle", avatarKey: a = `${n.name}Avatar` } = n.setting, l = /* @__PURE__ */ M("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ M("img", {
          src: o ? o[a] : ""
        }));
        return s ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = n.setting, a = (t - o) / 2, l = t / 2, c = e[0];
        return e[0] = /* @__PURE__ */ M("svg", {
          width: t,
          height: t
        }, /* @__PURE__ */ M("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": o,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ M("circle", {
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
        }), /* @__PURE__ */ M("text", {
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
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = fn(r, o) : s === "html" ? e[0] = { html: Qt(o, r) } : e[0] = Qt(o, r), e;
      }
    }
  }
};
je(sr);
const ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: Xs,
  checkable: Js,
  nested: nr,
  rich: sr
}, Symbol.toStringTag, { value: "Module" }));
class qe extends fs {
}
D(qe, "Component", to), D(qe, "definePlugin", je), D(qe, "removePlugin", Is), D(qe, "plugins", ua);
var ct, K;
class fa {
  constructor(n) {
    w(this, ct, void 0);
    w(this, K, void 0);
    A(this, ct, n), A(this, K, document.querySelector(n.getAttribute("data-target")) || document.querySelector(n.getAttribute("data-tab")) || document.querySelector(n.getAttribute("href")));
  }
  showTarget() {
    this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement), this.addActive(h(this, K).parentElement, h(this, K)), h(this, K).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    A(this, K, h(this, ct)), this.addActive(h(this, K).parentElement, h(this, K)), A(this, ct, document.querySelector(`[href='#${h(this, K).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${h(this, K).getAttribute("id")}']`) || document.querySelector(`[data-target='#${h(this, K).getAttribute("id")}']`)), this.addActive(h(this, ct).parentElement.parentElement, h(this, ct).parentElement);
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
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new fa(e.target).showTarget());
});
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ut,
  createDate: X,
  isSameDay: ve,
  isSameYear: oo,
  isSameMonth: or,
  isSameWeek: oa,
  isToday: sa,
  isYesterday: ra,
  isTomorrow: ia,
  isDBY: aa,
  formatDate: fn,
  formatDateSpan: la,
  getTimeBeforeDesc: ca,
  calculateTimestamp: so,
  formatString: Qt,
  formatBytes: Cr,
  convertBytes: Sr,
  isObject: Ge,
  mergeDeep: rn
}, Symbol.toStringTag, { value: "Module" }));
export {
  pa as Avatar,
  te as ContextMenu,
  qe as DTable,
  ee as Dropdown,
  io as EventBus,
  ds as Menu,
  fa as NavTabs,
  Ho as Scrollbar,
  Dr as addI18nMap,
  da as browser,
  Lr as getLangCode,
  ga as helpers,
  Tn as i18n,
  qn as nativeEvents,
  Nr as setLangCode,
  Tr as store
};
