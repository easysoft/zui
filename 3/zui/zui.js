var Ma = Object.defineProperty;
var Oa = (t, e, n) => e in t ? Ma(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var U = (t, e, n) => (Oa(t, typeof e != "symbol" ? e + "" : e, n), n), Xr = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (Xr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), S = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, O = (t, e, n, r) => (Xr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
var F = (t, e, n) => (Xr(t, e, "access private method"), n);
const Da = (t) => {
  const e = {};
  if (!t)
    return e;
  const n = Object.values(t.attributes);
  return n && n.length > 0 && n.forEach((r) => {
    const { name: i, value: o } = r;
    e[i] = o;
  }), e;
};
class Pa extends HTMLElement {
  constructor() {
    super();
    U(this, "$button");
    U(this, "$icon");
    U(this, "onClick");
    this.$button = document.createElement("button");
    const n = this.innerHTML;
    this.innerHTML = "", this.$button.innerHTML = n, this.icon && (this.$icon = document.createElement("i"), this.addClass(this.$icon, `icon ${this.icon}`), this.$button.prepend(this.$icon)), this.$button.classList.add("btn"), this.append(this.$button);
  }
  connectedCallback() {
    this.initStyle(), this.initEventListen(), this.isDisabled && this.$button.setAttribute("disabled", "disabled"), this.$button.addEventListener("keydown", (n) => {
      switch (n.keyCode) {
        case 13:
          n.stopPropagation();
          break;
      }
    });
  }
  initStyle() {
    const n = Da(this);
    if (n)
      for (const r in n)
        ["type", "size", "rounded", "outline"].includes(r) && this.addClass(this.$button, `-${n[r]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(n, r) {
    n && n.classList.add(r);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(n) {
    this.getAttribute("type") ? (this.setAttribute("type", n), this.addClass(this.$button, `-${this.type}`)) : this.removeAttribute("type");
  }
  get size() {
    return this.getAttribute("size");
  }
  set size(n) {
    this.getAttribute("size") ? (this.setAttribute("size", n || "base"), this.addClass(this.$button, `-${n}`)) : this.removeAttribute("size");
  }
  get loading() {
    return this.getAttribute("loading");
  }
  set loading(n) {
    this.getAttribute("loading") ? this.setAttribute("loading", n || "") : this.removeAttribute("loading");
  }
  get rounded() {
    return this.getAttribute("rounded");
  }
  set rounded(n) {
    this.getAttribute("rounded") ? (this.setAttribute("rounded", n || ""), this.addClass(this.$button, `-${n}`)) : this.removeAttribute("rounded");
  }
  get isDisabled() {
    return this.getAttribute("isDisabled") !== null;
  }
  set isDisabled(n) {
    n === null || n === !1 ? this.removeAttribute("isDisabled") : this.setAttribute("isDisabled", "");
  }
  get icon() {
    return this.getAttribute("icon");
  }
  set icon(n) {
    this.setAttribute("icon", n);
  }
  static get observedAttributes() {
    return ["type", "size", "rounded", "disabled", "loading", "outline"];
  }
  get class() {
    return this.$button.classList;
  }
  attributeChangedCallback(n, r) {
    n === "isDisabled" && this.$button && (r !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), n === "loading" && this.$button && (r !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), n === "icon" && this.$icon && r && this.addClass(this.$icon, `-${r}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Pa);
var Tr, V, Ii, Bi, ln, Ho, Jn = {}, Ui = [], La = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zi(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Hr(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Tr.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return jn(t, a, r, i, null);
}
function jn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ii : i };
  return i == null && V.vnode != null && V.vnode(o), o;
}
function Na() {
  return { current: null };
}
function jr(t) {
  return t.children;
}
function Wn(t, e) {
  this.props = t, this.context = e;
}
function Tt(t, e) {
  if (e == null)
    return t.__ ? Tt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Tt(t) : null;
}
function Fi(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Fi(t);
  }
}
function jo(t) {
  (!t.__d && (t.__d = !0) && ln.push(t) && !Zn.__r++ || Ho !== V.debounceRendering) && ((Ho = V.debounceRendering) || setTimeout)(Zn);
}
function Zn() {
  for (var t; Zn.__r = ln.length; )
    t = ln.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ln = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Je({}, o)).__v = o.__v + 1, uo(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Tt(o) : a, o.__h), Xi(r, o), o.__e != a && Fi(o)));
    });
}
function Vi(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, y, _, v = r && r.__k || Ui, b = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? jn(null, c, null, null, c) : Array.isArray(c) ? jn(jr, { children: c }, null, null, null) : c.__b > 0 ? jn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      uo(t, c, p = p || Jn, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (y == null && (y = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = qi(c, f, t) : f = Yi(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Tt(p));
    }
  for (n.__e = y, s = b; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Tt(r, s + 1)), Ki(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Gi(_[s], _[++s], _[++s]);
}
function qi(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? qi(r, e, n) : Yi(n, r, r, i, r.__e, e));
  return e;
}
function Yi(t, e, n, r, i, o) {
  var a, l, f;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < r.length; f += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Ta(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || Qn(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || Qn(t, o, e[o], n[o], r);
}
function Wo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || La.test(e) ? n : n + "px";
}
function Qn(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Wo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Wo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Bo : Io, o) : t.removeEventListener(e, o ? Bo : Io, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function Io(t) {
  this.l[t.type + !1](V.event ? V.event(t) : t);
}
function Bo(t) {
  this.l[t.type + !0](V.event ? V.event(t) : t);
}
function uo(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, y, _, v, b, w, $, x, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = V.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, b) : (e.__c = s = new Wn(_, b), s.constructor = m, s.render = ja), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = b, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, b) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = b, s.props = _, s.__v = e, s.__P = t, w = V.__r, $ = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++$ < 25);
        s.state = s.__s, s.getChildContext != null && (r = Je(Je({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), x = u != null && u.type === jr && u.key == null ? u.props.children : u, Vi(t, Array.isArray(x) ? x : [x], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ha(n.__e, e, n, r, i, o, a, f);
    (u = V.diffed) && u(e);
  } catch (k) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), V.__e(k, e, n);
  }
}
function Xi(t, e) {
  V.__c && V.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      V.__e(r, n.__v);
    }
  });
}
function Ha(t, e, n, r, i, o, a, l) {
  var f, u, s, d = n.props, p = e.props, c = e.type, h = 0;
  if (c === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((f = o[h]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        t = f, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, p.is && p), o = null, l = !1;
  }
  if (c === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && Tr.call(t.childNodes), u = (d = n.props || Jn).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ta(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Vi(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Tt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && zi(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && Qn(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && Qn(t, "checked", h, d.checked, !1));
  }
  return t;
}
function Gi(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    V.__e(r, n);
  }
}
function Ki(t, e, n) {
  var r, i;
  if (V.unmount && V.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Gi(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        V.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Ki(r[i], e, typeof t.type != "function");
  n || t.__e == null || zi(t.__e), t.__e = t.__d = void 0;
}
function ja(t, e, n) {
  return this.constructor(t, n);
}
function Wa(t, e, n) {
  var r, i, o;
  V.__ && V.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, o = [], uo(e, t = (!r && n || e).__k = Hr(jr, null, [t]), i || Jn, Jn, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Tr.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r), Xi(o, t);
}
Tr = Ui.slice, V = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Ii = 0, Bi = function(t) {
  return t != null && t.constructor === void 0;
}, Wn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this.__h.push(e), jo(this));
}, Wn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), jo(this));
}, Wn.prototype.render = jr, ln = [], Zn.__r = 0;
var Pe;
class Ia {
  constructor(e = "") {
    S(this, Pe, void 0);
    typeof e == "object" ? O(this, Pe, e) : O(this, Pe, document.appendChild(document.createComment(e)));
  }
  on(e, n, r) {
    g(this, Pe).addEventListener(e, n, r);
  }
  once(e, n, r) {
    g(this, Pe).addEventListener(e, n, { once: !0, ...r });
  }
  off(e, n, r) {
    g(this, Pe).removeEventListener(e, n, r);
  }
  emit(e) {
    return g(this, Pe).dispatchEvent(e), e;
  }
}
Pe = new WeakMap();
const Jr = /* @__PURE__ */ new Set([
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
class po extends Ia {
  on(e, n, r) {
    super.on(e, n, r);
  }
  off(e, n, r) {
    super.off(e, n, r);
  }
  once(e, n, r) {
    super.once(e, n, r);
  }
  emit(e, n) {
    return typeof e == "string" && (Jr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(po.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Jr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var Le, wn, ft, an;
class Uo extends po {
  constructor(n = "", r) {
    super(n);
    S(this, ft);
    S(this, Le, /* @__PURE__ */ new Map());
    S(this, wn, void 0);
    O(this, wn, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, i) {
    n = F(this, ft, an).call(this, n), super.on(n, r, i), g(this, Le).set(r, [n, i]);
  }
  off(n, r, i) {
    n = F(this, ft, an).call(this, n), super.off(n, r, i), g(this, Le).delete(r);
  }
  once(n, r, i) {
    n = F(this, ft, an).call(this, n);
    const o = (a) => {
      r(a), g(this, Le).delete(o);
    };
    super.once(n, o, i), g(this, Le).set(o, [n, i]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = F(this, ft, an).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(g(this, Le).entries()).forEach(([n, [r, i]]) => {
      super.off(r, n, i);
    }), g(this, Le).clear();
  }
}
Le = new WeakMap(), wn = new WeakMap(), ft = new WeakSet(), an = function(n) {
  const r = g(this, wn);
  return Jr.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function Ba(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let r = t;
  const i = [r];
  for (; typeof r == "object" && r !== null && e.length; ) {
    let o = e.shift(), a;
    const l = o.indexOf("[");
    if (l > 0 && l < o.length - 1 && o.endsWith("]") && (a = o.substring(l + 1, o.length - 1), o = o.substring(0, l)), r = r[o], i.push(r), a !== void 0)
      if (typeof r == "object" && r !== null)
        r instanceof Map ? r = r.get(a) : r = r[a], i.push(r);
      else
        throw new Error(`Cannot access property "${o}[${a}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function Ua(t, e, n) {
  const r = Ba(t, e), i = r[r.length - 1];
  return i === void 0 ? n : i;
}
function In(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function er(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (In(t) && In(n))
    for (const r in n)
      In(n[r]) ? (t[r] || Object.assign(t, { [r]: {} }), er(t[r], n[r])) : Object.assign(t, { [r]: n[r] });
  return er(t, ...e);
}
function Et(t, ...e) {
  var n;
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const r = e[0];
    return Object.keys(r).forEach((i) => {
      var a;
      const o = (a = r[i]) != null ? a : 0;
      t = t.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), t;
  }
  for (let r = 0; r < e.length; r++) {
    const i = (n = e[r]) != null ? n : "";
    t = t.replace(new RegExp(`\\{${r}\\}`, "g"), `${i}`);
  }
  return t;
}
var ho = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(ho || {});
function za(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / ho[n]).toFixed(e) + n);
}
const Fa = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const r = n[1];
  return t = t.replace(r, ""), Number.parseInt(t, 10) * ho[r];
};
var ji, Wi;
let _o = (Wi = (ji = document.documentElement.getAttribute("lang")) == null ? void 0 : ji.toLowerCase()) != null ? Wi : "zh_cn", Ye;
function Va() {
  return _o;
}
function qa(t) {
  _o = t.toLowerCase();
}
function Ya(t, e) {
  Ye || (Ye = {}), typeof t == "string" && (t = { [t]: e != null ? e : {} }), er(Ye, t);
}
function Pn(t, e, n, r, i, o) {
  Array.isArray(t) ? Ye && t.unshift(Ye) : t = Ye ? [Ye, t] : [t], typeof n == "string" && (o = i, i = r, r = n, n = void 0);
  const a = i || _o;
  let l;
  for (const f of t) {
    if (!f)
      continue;
    const u = f[a];
    if (!u)
      continue;
    const s = o && f === Ye ? `${o}.${e}` : e;
    if (l = Ua(u, s), l !== void 0)
      break;
  }
  return l === void 0 ? r : n ? Et(l, ...Array.isArray(n) ? n : [n]) : l;
}
Pn.addLang = Ya;
Pn.getCode = Va;
Pn.setCode = qa;
function Xa(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
var Ne, At, we;
class Wr {
  constructor(e, n) {
    S(this, Ne, void 0);
    S(this, At, void 0);
    S(this, we, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, O(this, we, new Uo(e, { customEventSuffix: `.${this.constructor.KEY}` })), O(this, Ne, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? Xa(e.dataset) : null, ...n }), this.constructor.all.set(e, this), O(this, At, e), this.init(), g(this, we).emit("inited", this);
  }
  get options() {
    return g(this, Ne);
  }
  get element() {
    return g(this, At);
  }
  get events() {
    return g(this, we);
  }
  init() {
  }
  setOptions(e) {
    return e && Object.assign(g(this, Ne), e), g(this, Ne);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(g(this, At)), this.events.offAll(), this.events.emit("destroyed", this);
  }
  on(e, n, r) {
    g(this, we).on(e, n, r);
  }
  once(e, n, r) {
    g(this, we).once(e, n, r);
  }
  off(e, n, r) {
    g(this, we).off(e, n, r);
  }
  emit(e, n) {
    let r = Uo.createEvent(e, n);
    const i = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = g(this, Ne)[i];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = g(this, we).emit(r), r;
  }
  i18n(e, n, r) {
    var i;
    return (i = Pn(g(this, Ne).i18n, e, n, r, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${e}}`;
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
    const n = /* @__PURE__ */ new Map();
    return this.allComponents.set(e, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, n) {
    return this.get(e) || new this(e, n);
  }
}
Ne = new WeakMap(), At = new WeakMap(), we = new WeakMap(), U(Wr, "allComponents", /* @__PURE__ */ new Map());
var $n;
class Ji extends Wr {
  constructor() {
    super(...arguments);
    S(this, $n, Na());
  }
  get $() {
    return g(this, $n).current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    Wa(/* @__PURE__ */ Hr(r, {
      ref: g(this, $n),
      ...this.setOptions(n)
    }), this.element);
  }
}
$n = new WeakMap();
var vo, q, Zi, tr, cn, zo, Qi = {}, es = [], Ga = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ts(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function fe(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? vo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Bn(t, a, r, i, null);
}
function Bn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Zi : i };
  return i == null && q.vnode != null && q.vnode(o), o;
}
function Ka() {
  return { current: null };
}
function go(t) {
  return t.children;
}
function fn(t, e) {
  this.props = t, this.context = e;
}
function Ht(t, e) {
  if (e == null)
    return t.__ ? Ht(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ht(t) : null;
}
function ns(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ns(t);
  }
}
function Fo(t) {
  (!t.__d && (t.__d = !0) && cn.push(t) && !nr.__r++ || zo !== q.debounceRendering) && ((zo = q.debounceRendering) || setTimeout)(nr);
}
function nr() {
  for (var t; nr.__r = cn.length; )
    t = cn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), cn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Ze({}, o)).__v = o.__v + 1, ss(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ht(o) : a, o.__h), Za(r, o), o.__e != a && ns(o)));
    });
}
function rs(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, y, _, v = r && r.__k || es, b = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Bn(null, c, null, null, c) : Array.isArray(c) ? Bn(go, { children: c }, null, null, null) : c.__b > 0 ? Bn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ss(t, c, p = p || Qi, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (y == null && (y = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = os(c, f, t) : f = is(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Ht(p));
    }
  for (n.__e = y, s = b; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Ht(r, s + 1)), ls(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      as(_[s], _[++s], _[++s]);
}
function os(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? os(r, e, n) : is(n, r, r, i, r.__e, e));
  return e;
}
function is(t, e, n, r, i, o) {
  var a, l, f;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < r.length; f += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Ja(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || rr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || rr(t, o, e[o], n[o], r);
}
function Vo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ga.test(e) ? n : n + "px";
}
function rr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Vo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Vo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Yo : qo, o) : t.removeEventListener(e, o ? Yo : qo, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function qo(t) {
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Yo(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function ss(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, y, _, v, b, w, $, x, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = q.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, b) : (e.__c = s = new fn(_, b), s.constructor = m, s.render = el), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = b, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, b) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = b, s.props = _, s.__v = e, s.__P = t, w = q.__r, $ = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++$ < 25);
        s.state = s.__s, s.getChildContext != null && (r = Ze(Ze({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), x = u != null && u.type === go && u.key == null ? u.props.children : u, rs(t, Array.isArray(x) ? x : [x], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Qa(n.__e, e, n, r, i, o, a, f);
    (u = q.diffed) && u(e);
  } catch (k) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), q.__e(k, e, n);
  }
}
function Za(t, e) {
  q.__c && q.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      q.__e(r, n.__v);
    }
  });
}
function Qa(t, e, n, r, i, o, a, l) {
  var f, u, s, d = n.props, p = e.props, c = e.type, h = 0;
  if (c === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((f = o[h]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        t = f, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, p.is && p), o = null, l = !1;
  }
  if (c === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && vo.call(t.childNodes), u = (d = n.props || Qi).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ja(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, rs(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Ht(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ts(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && rr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && rr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function as(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    q.__e(r, n);
  }
}
function ls(t, e, n) {
  var r, i;
  if (q.unmount && q.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || as(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        q.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && ls(r[i], e, typeof t.type != "function");
  n || t.__e == null || ts(t.__e), t.__e = t.__d = void 0;
}
function el(t, e, n) {
  return this.constructor(t, n);
}
vo = es.slice, q = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Zi = 0, tr = function(t) {
  return t != null && t.constructor === void 0;
}, fn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this.__h.push(e), Fo(this));
}, fn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Fo(this));
}, fn.prototype.render = go, cn = [], nr.__r = 0;
const z = (...t) => t.map((e) => Array.isArray(e) ? z(...e) : typeof e == "function" ? z(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((n) => {
  const r = e[n];
  return typeof r == "function" ? !!r() : !!r;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function tl(t) {
  const {
    rootClass: e,
    rootProps: n,
    className: r,
    url: i,
    target: o,
    disabled: a,
    active: l,
    icon: f,
    title: u,
    trailingIcon: s,
    children: d,
    ...p
  } = t;
  return /* @__PURE__ */ fe("li", {
    className: z(e),
    ...n
  }, /* @__PURE__ */ fe("a", {
    className: z("menu-item", r, { disabled: a, active: l, "has-icon": f }),
    href: i,
    target: o,
    ...p
  }, tr(f) ? f : typeof f == "string" ? /* @__PURE__ */ fe("i", {
    class: `icon ${f}`
  }) : null, u, tr(s) ? s : typeof s == "string" ? /* @__PURE__ */ fe("i", {
    class: `icon ${s}`
  }) : null), d);
}
function nl({ className: t }) {
  return /* @__PURE__ */ fe("div", {
    class: z("menu-divider", t)
  });
}
function rl({ className: t, title: e, children: n, ...r }) {
  return /* @__PURE__ */ fe("li", {
    class: z("menu-heading", t),
    ...r
  }, e, n);
}
var xn, vr, cs, kn, gr, mr;
const No = class extends fn {
  constructor() {
    super(...arguments);
    S(this, vr);
    U(this, "state", { shownSubs: {} });
    S(this, xn, Ka());
    S(this, kn, ({ item: n, h: r }) => {
      const { onRenderSubMenu: i } = this.props;
      if (i)
        return i({ menu: this, item: n, h: r });
      const { afterRender: o, onClickItem: a, subMenuTrigger: l, onRenderItem: f } = this.props;
      return /* @__PURE__ */ r(No, {
        className: "menu-sub",
        items: n.items,
        onRenderSubMenu: g(this, kn),
        afterRender: o,
        onClickItem: a,
        onRenderItem: f,
        subMenuTrigger: l
      });
    });
    S(this, gr, (n, r) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(n, !0), r.preventDefault());
    });
    S(this, mr, (n, r) => {
      this.props.subMenuTrigger === "hover" && (this.toggleSubMenu(n, !1), r.preventDefault());
    });
  }
  get $() {
    return g(this, xn).current;
  }
  componentDidMount() {
    var n, r;
    (r = (n = this.props).afterRender) == null || r.call(n, { menu: this, firstRender: !0 });
  }
  componentDidUpdate() {
    var n, r;
    (r = (n = this.props).afterRender) == null || r.call(n, { menu: this, firstRender: !1 });
  }
  componentWillUnmount() {
    var n, r;
    (r = (n = this.props).beforeDestroy) == null || r.call(n, { menu: this });
  }
  toggleSubMenu(n, r) {
    const { shownSubs: i } = this.state;
    r === void 0 && (r = !i[n]), r ? i[n] = !0 : delete i[n], this.setState({ shownSubs: { ...i } });
  }
  clearAllSubMenu() {
    this.setState({ shownSubs: {} });
  }
  isSubMenuShow(n) {
    return this.state.shownSubs[n];
  }
  render() {
    const {
      className: n,
      items: r,
      hasIcons: i,
      children: o,
      onClickItem: a,
      subMenuTrigger: l,
      onRenderItem: f,
      onRenderSubMenu: u,
      afterRender: s,
      beforeDestroy: d,
      ...p
    } = this.props, c = typeof r == "function" ? r() : r;
    return /* @__PURE__ */ fe("menu", {
      class: z(
        "menu",
        n,
        (i != null ? i : c == null ? void 0 : c.some((h) => "icon" in h)) ? "has-icons" : ""
      ),
      ...p,
      ref: g(this, xn)
    }, c == null ? void 0 : c.map((h, y) => {
      const _ = { type: "item", key: y, ...h };
      if (f) {
        const C = f({ menu: this, item: _, index: y, h: fe });
        if (C) {
          if (tr(C) || typeof C != "object")
            return C;
          Object.assign(_, C);
        }
      }
      const { key: v = y, type: b = "item", ...w } = _;
      if (b === "heading")
        return /* @__PURE__ */ fe(rl, {
          ...w,
          key: v
        });
      if (b === "divider")
        return /* @__PURE__ */ fe(nl, {
          ...w,
          key: v
        });
      const { onClick: $, items: x, ...m } = w, k = {
        ...m,
        key: v,
        onClick: F(this, vr, cs).bind(this, _, y, $)
      }, E = x && (l === "always" || this.state.shownSubs[v]);
      return x && (k.rootClass = z(k.rootClass, "has-sub", E ? "has-sub-shown" : ""), l === "hover" && (k.rootProps = {
        ...k.rootProps,
        onMouseEnter: g(this, gr).bind(this, v),
        onMouseLeave: g(this, mr).bind(this, v)
      })), /* @__PURE__ */ fe(tl, {
        ...k
      }, E && g(this, kn).call(this, { item: _, h: fe }));
    }), o);
  }
};
let Zr = No;
xn = new WeakMap(), vr = new WeakSet(), cs = function(n, r, i, o) {
  var l;
  i && i.call(o.target, o);
  const { onClickItem: a } = this.props;
  a && a({ menu: this, item: n, index: r, event: o }), this.props.subMenuTrigger === "click" && n.items && (this.toggleSubMenu((l = n.key) != null ? l : r, !0), o.stopPropagation(), o.preventDefault());
}, kn = new WeakMap(), gr = new WeakMap(), mr = new WeakMap();
class fs extends Ji {
  toggleSubMenu(e, n) {
    var r;
    return (r = this.$) == null ? void 0 : r.toggleSubMenu(e, n);
  }
  clearAllSubMenu() {
    var e;
    return (e = this.$) == null ? void 0 : e.clearAllSubMenu();
  }
  isSubMenuShow(e) {
    var n;
    return (n = this.$) == null ? void 0 : n.isSubMenuShow(e);
  }
}
U(fs, "Component", Zr);
var mo, Y, us, un, Xo, ps = {}, hs = [], ol = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ds(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Go(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? mo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Un(t, a, r, i, null);
}
function Un(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++us : i };
  return i == null && Y.vnode != null && Y.vnode(o), o;
}
function yo(t) {
  return t.children;
}
function pn(t, e) {
  this.props = t, this.context = e;
}
function jt(t, e) {
  if (e == null)
    return t.__ ? jt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? jt(t) : null;
}
function _s(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return _s(t);
  }
}
function Ko(t) {
  (!t.__d && (t.__d = !0) && un.push(t) && !or.__r++ || Xo !== Y.debounceRendering) && ((Xo = Y.debounceRendering) || setTimeout)(or);
}
function or() {
  for (var t; or.__r = un.length; )
    t = un.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), un = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Qe({}, o)).__v = o.__v + 1, ys(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jt(o) : a, o.__h), sl(r, o), o.__e != a && _s(o)));
    });
}
function vs(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, y, _, v = r && r.__k || hs, b = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Un(null, c, null, null, c) : Array.isArray(c) ? Un(yo, { children: c }, null, null, null) : c.__b > 0 ? Un(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ys(t, c, p = p || ps, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (y == null && (y = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = gs(c, f, t) : f = ms(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = jt(p));
    }
  for (n.__e = y, s = b; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = jt(r, s + 1)), ws(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      bs(_[s], _[++s], _[++s]);
}
function gs(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? gs(r, e, n) : ms(n, r, r, i, r.__e, e));
  return e;
}
function ms(t, e, n, r, i, o) {
  var a, l, f;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < r.length; f += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function il(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || ir(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || ir(t, o, e[o], n[o], r);
}
function Jo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ol.test(e) ? n : n + "px";
}
function ir(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Jo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Jo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Qo : Zo, o) : t.removeEventListener(e, o ? Qo : Zo, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function Zo(t) {
  this.l[t.type + !1](Y.event ? Y.event(t) : t);
}
function Qo(t) {
  this.l[t.type + !0](Y.event ? Y.event(t) : t);
}
function ys(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, y, _, v, b, w, $, x, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = Y.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, b) : (e.__c = s = new pn(_, b), s.constructor = m, s.render = ll), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = b, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, b) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = b, s.props = _, s.__v = e, s.__P = t, w = Y.__r, $ = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++$ < 25);
        s.state = s.__s, s.getChildContext != null && (r = Qe(Qe({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), x = u != null && u.type === yo && u.key == null ? u.props.children : u, vs(t, Array.isArray(x) ? x : [x], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = al(n.__e, e, n, r, i, o, a, f);
    (u = Y.diffed) && u(e);
  } catch (k) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), Y.__e(k, e, n);
  }
}
function sl(t, e) {
  Y.__c && Y.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Y.__e(r, n.__v);
    }
  });
}
function al(t, e, n, r, i, o, a, l) {
  var f, u, s, d = n.props, p = e.props, c = e.type, h = 0;
  if (c === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((f = o[h]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        t = f, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, p.is && p), o = null, l = !1;
  }
  if (c === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && mo.call(t.childNodes), u = (d = n.props || ps).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (il(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, vs(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && jt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ds(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && ir(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && ir(t, "checked", h, d.checked, !1));
  }
  return t;
}
function bs(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    Y.__e(r, n);
  }
}
function ws(t, e, n) {
  var r, i;
  if (Y.unmount && Y.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || bs(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        Y.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && ws(r[i], e, typeof t.type != "function");
  n || t.__e == null || ds(t.__e), t.__e = t.__d = void 0;
}
function ll(t, e, n) {
  return this.constructor(t, n);
}
mo = hs.slice, Y = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, us = 0, pn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this.__h.push(e), Ko(this));
}, pn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ko(this));
}, pn.prototype.render = yo, un = [], or.__r = 0;
var ut, pt;
class ei extends pn {
  constructor(n) {
    var r;
    super(n);
    S(this, ut, 0);
    S(this, pt, null);
    U(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, i = n.target;
      if (!(!i || !r) && (typeof r == "string" && i.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    U(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && (g(this, ut) && cancelAnimationFrame(g(this, ut)), O(this, ut, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + i * this.props.scrollSize / this.props.clientSize), O(this, ut, 0);
      })), n.preventDefault());
    });
    U(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    U(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    U(this, "_handleClick", (n) => {
      const r = n.currentTarget;
      if (!r)
        return;
      const i = r.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, f = (o === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(f * l / a), n.preventDefault();
    });
    this.state = {
      scrollPos: (r = this.props.defaultScrollPos) != null ? r : 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    var n;
    return (n = this.props.scrollPos) != null ? n : this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: n, clientSize: r } = this.props;
    return Math.max(0, n - r);
  }
  get barSize() {
    const { clientSize: n, scrollSize: r, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(n * n / r), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (O(this, pt, typeof n == "string" ? document : n.current), g(this, pt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), g(this, pt) && g(this, pt).removeEventListener("wheel", this._handleWheel);
  }
  scroll(n) {
    return n = Math.max(0, Math.min(Math.round(n), this.maxScrollPos)), n === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(n) : this.setState({
      scrollPos: n
    }, this._afterScroll.bind(this, n)), !0);
  }
  scrollOffset(n) {
    return this.scroll(this.scrollPos + n);
  }
  _afterScroll(n) {
    var i;
    const { onScroll: r } = this.props;
    r && r(n, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: r,
      size: i = 12,
      className: o,
      style: a,
      left: l,
      top: f,
      bottom: u,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: p } = this, { dragStart: c } = this.state, h = {
      left: l,
      top: f,
      bottom: u,
      right: s,
      ...a
    }, y = {};
    return r === "horz" ? (h.height = i, h.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, p) * (n - y.width) / d)) : (h.width = i, h.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, p) * (n - y.height) / d)), /* @__PURE__ */ Go("div", {
      className: z("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": c
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Go("div", {
      className: "scrollbar-bar",
      style: y,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ut = new WeakMap(), pt = new WeakMap();
function cl(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const r = document.createRange();
      return r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), !0;
    }
  }
  return !1;
}
function fl(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function ul(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= i;
  const a = r.top <= i && r.top + r.height >= 0, l = r.left <= o && r.left + r.width >= 0;
  return a && l;
}
const lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: cl,
  domReady: fl,
  isElementVisible: ul,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
let pl = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var En, Xe, $e, Rt, Mt, zn;
const To = class {
  constructor(e, n = "local") {
    S(this, Mt);
    S(this, En, void 0);
    S(this, Xe, void 0);
    S(this, $e, void 0);
    S(this, Rt, void 0);
    O(this, En, n), O(this, Xe, `ZUI_STORE:${e != null ? e : pl()}`), O(this, $e, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return g(this, En);
  }
  get session() {
    return this.type === "session" ? this : (g(this, Rt) || O(this, Rt, new To(g(this, Xe), "session")), g(this, Rt));
  }
  get(e, n) {
    const r = g(this, $e).getItem(F(this, Mt, zn).call(this, e));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(e, n) {
    if (n == null)
      return this.remove(e);
    g(this, $e).setItem(F(this, Mt, zn).call(this, e), JSON.stringify(n));
  }
  remove(e) {
    g(this, $e).removeItem(F(this, Mt, zn).call(this, e));
  }
  each(e) {
    for (let n = 0; n < g(this, $e).length; n++) {
      const r = g(this, $e).key(n);
      if (r != null && r.startsWith(g(this, Xe))) {
        const i = g(this, $e).getItem(r);
        typeof i == "string" && e(r.substring(g(this, Xe).length + 1), JSON.parse(i));
      }
    }
  }
  getAll() {
    const e = {};
    return this.each((n, r) => {
      e[n] = r;
    }), e;
  }
};
let sr = To;
En = new WeakMap(), Xe = new WeakMap(), $e = new WeakMap(), Rt = new WeakMap(), Mt = new WeakSet(), zn = function(e) {
  return `${g(this, Xe)}:${e}`;
};
const hl = new sr("DEFAULT");
function dl(t, e = "local") {
  return new sr(t, e);
}
Object.assign(hl, { create: dl });
var bo, X, $s, hn, ti, xs = {}, ks = [], _l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Es(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ni(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? bo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Fn(t, a, r, i, null);
}
function Fn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++$s : i };
  return i == null && X.vnode != null && X.vnode(o), o;
}
function wo(t) {
  return t.children;
}
function dn(t, e) {
  this.props = t, this.context = e;
}
function Wt(t, e) {
  if (e == null)
    return t.__ ? Wt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Wt(t) : null;
}
function Ss(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ss(t);
  }
}
function ri(t) {
  (!t.__d && (t.__d = !0) && hn.push(t) && !ar.__r++ || ti !== X.debounceRendering) && ((ti = X.debounceRendering) || setTimeout)(ar);
}
function ar() {
  for (var t; ar.__r = hn.length; )
    t = hn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), hn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = et({}, o)).__v = o.__v + 1, Ms(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wt(o) : a, o.__h), gl(r, o), o.__e != a && Ss(o)));
    });
}
function Cs(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, y, _, v = r && r.__k || ks, b = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Fn(null, c, null, null, c) : Array.isArray(c) ? Fn(wo, { children: c }, null, null, null) : c.__b > 0 ? Fn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      Ms(t, c, p = p || xs, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (y == null && (y = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = As(c, f, t) : f = Rs(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Wt(p));
    }
  for (n.__e = y, s = b; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Wt(r, s + 1)), Ds(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Os(_[s], _[++s], _[++s]);
}
function As(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? As(r, e, n) : Rs(n, r, r, i, r.__e, e));
  return e;
}
function Rs(t, e, n, r, i, o) {
  var a, l, f;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < r.length; f += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function vl(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || lr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || lr(t, o, e[o], n[o], r);
}
function oi(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || _l.test(e) ? n : n + "px";
}
function lr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || oi(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || oi(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? si : ii, o) : t.removeEventListener(e, o ? si : ii, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function ii(t) {
  this.l[t.type + !1](X.event ? X.event(t) : t);
}
function si(t) {
  this.l[t.type + !0](X.event ? X.event(t) : t);
}
function Ms(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, y, _, v, b, w, $, x, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = X.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, b) : (e.__c = s = new dn(_, b), s.constructor = m, s.render = yl), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = b, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, b) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = b, s.props = _, s.__v = e, s.__P = t, w = X.__r, $ = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++$ < 25);
        s.state = s.__s, s.getChildContext != null && (r = et(et({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), x = u != null && u.type === wo && u.key == null ? u.props.children : u, Cs(t, Array.isArray(x) ? x : [x], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ml(n.__e, e, n, r, i, o, a, f);
    (u = X.diffed) && u(e);
  } catch (k) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), X.__e(k, e, n);
  }
}
function gl(t, e) {
  X.__c && X.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      X.__e(r, n.__v);
    }
  });
}
function ml(t, e, n, r, i, o, a, l) {
  var f, u, s, d = n.props, p = e.props, c = e.type, h = 0;
  if (c === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((f = o[h]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        t = f, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, p.is && p), o = null, l = !1;
  }
  if (c === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && bo.call(t.childNodes), u = (d = n.props || xs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (vl(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Cs(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Wt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Es(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && lr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && lr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function Os(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    X.__e(r, n);
  }
}
function Ds(t, e, n) {
  var r, i;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Os(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        X.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Ds(r[i], e, typeof t.type != "function");
  n || t.__e == null || Es(t.__e), t.__e = t.__d = void 0;
}
function yl(t, e, n) {
  return this.constructor(t, n);
}
bo = ks.slice, X = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, $s = 0, dn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof t == "function" && (t = t(et({}, n), this.props)), t && et(n, t), t != null && this.__v && (e && this.__h.push(e), ri(this));
}, dn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ri(this));
}, dn.prototype.render = wo, hn = [], ar.__r = 0;
class cu extends dn {
  render() {
    const { size: e, rounded: n, className: r, style: i, src: o, text: a, children: l, ...f } = this.props, u = [r], s = { ...i };
    let d = null;
    return o ? d = /* @__PURE__ */ ni("img", {
      src: o,
      alt: a
    }) : d = a, typeof e == "number" ? (s.width = e, s.height = e) : typeof e == "string" && u.push(`avatar-${e}`), typeof n == "string" && u.push(`rounded-${n}`), /* @__PURE__ */ ni("div", {
      className: z(u),
      style: s,
      ...f
    }, d, l);
  }
}
function bl() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function wl() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function $l(t, e) {
  bl(), t.classList.add("block"), ai(t, e), t.onclick = (n) => xl(n, t), window.addEventListener("resize", () => {
    ai(t, e);
  });
}
function Ps(t) {
  var e;
  wl(), (e = t.classList) == null || e.remove("block");
}
function ai(t, e) {
  const n = t.querySelector(".modal-dialog");
  if (!n)
    return;
  const r = Math.max(0, (window.innerHeight - n.clientHeight) / 2);
  if (e === "fit") {
    n.style.top = `${r > 50 ? Math.floor(r * 2 / 3) : r}px`;
    return;
  }
  if (e === "center") {
    n.style.top = `${r}px`;
    return;
  }
  n.style.top = e;
}
function xl(t, e) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), Ps(e));
}
function kl(t) {
  var e, n;
  return t instanceof HTMLAnchorElement ? (n = (e = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : n.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const e = t.target, n = e.closest("[data-toggle=modal]");
  if (n) {
    const r = kl(n);
    if (!r)
      return;
    const i = document.querySelector(r);
    if (!i)
      return;
    $l(i, n.dataset.position || "fit");
  } else
    e.className.includes("modal") && Ps(e);
});
function he(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function bt(t) {
  var e = he(t).Element;
  return t instanceof e || t instanceof Element;
}
function ue(t) {
  var e = he(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function $o(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = he(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var mt = Math.max, cr = Math.min, It = Math.round;
function Qr() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ls() {
  return !/^((?!chrome|android).)*safari/i.test(Qr());
}
function Bt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && ue(t) && (i = t.offsetWidth > 0 && It(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && It(r.height) / t.offsetHeight || 1);
  var a = bt(t) ? he(t) : window, l = a.visualViewport, f = !Ls() && n, u = (r.left + (f && l ? l.offsetLeft : 0)) / i, s = (r.top + (f && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
  return {
    width: d,
    height: p,
    top: s,
    right: u + d,
    bottom: s + p,
    left: u,
    x: u,
    y: s
  };
}
function xo(t) {
  var e = he(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function El(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function Sl(t) {
  return t === he(t) || !ue(t) ? xo(t) : El(t);
}
function Ce(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ot(t) {
  return ((bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ko(t) {
  return Bt(ot(t)).left + xo(t).scrollLeft;
}
function me(t) {
  return he(t).getComputedStyle(t);
}
function Eo(t) {
  var e = me(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Cl(t) {
  var e = t.getBoundingClientRect(), n = It(e.width) / t.offsetWidth || 1, r = It(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Al(t, e, n) {
  n === void 0 && (n = !1);
  var r = ue(e), i = ue(e) && Cl(e), o = ot(e), a = Bt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ce(e) !== "body" || Eo(o)) && (l = Sl(e)), ue(e) ? (f = Bt(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : o && (f.x = ko(o))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ns(t) {
  var e = Bt(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Ir(t) {
  return Ce(t) === "html" ? t : t.assignedSlot || t.parentNode || ($o(t) ? t.host : null) || ot(t);
}
function Ts(t) {
  return ["html", "body", "#document"].indexOf(Ce(t)) >= 0 ? t.ownerDocument.body : ue(t) && Eo(t) ? t : Ts(Ir(t));
}
function _n(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = Ts(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = he(r), a = i ? [o].concat(o.visualViewport || [], Eo(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(_n(Ir(a)));
}
function Rl(t) {
  return ["table", "td", "th"].indexOf(Ce(t)) >= 0;
}
function li(t) {
  return !ue(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function Ml(t) {
  var e = /firefox/i.test(Qr()), n = /Trident/i.test(Qr());
  if (n && ue(t)) {
    var r = me(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Ir(t);
  for ($o(i) && (i = i.host); ue(i) && ["html", "body"].indexOf(Ce(i)) < 0; ) {
    var o = me(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Br(t) {
  for (var e = he(t), n = li(t); n && Rl(n) && me(n).position === "static"; )
    n = li(n);
  return n && (Ce(n) === "html" || Ce(n) === "body" && me(n).position === "static") ? e : n || Ml(t) || e;
}
var ve = "top", Ae = "bottom", nt = "right", We = "left", Ur = "auto", zr = [ve, Ae, nt, We], Ut = "start", yn = "end", Ol = "clippingParents", Hs = "viewport", rn = "popper", Dl = "reference", ci = /* @__PURE__ */ zr.reduce(function(t, e) {
  return t.concat([e + "-" + Ut, e + "-" + yn]);
}, []), Pl = /* @__PURE__ */ [].concat(zr, [Ur]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Ut, e + "-" + yn]);
}, []), Ll = "beforeRead", Nl = "read", Tl = "afterRead", Hl = "beforeMain", jl = "main", Wl = "afterMain", Il = "beforeWrite", Bl = "write", Ul = "afterWrite", eo = [Ll, Nl, Tl, Hl, jl, Wl, Il, Bl, Ul];
function zl(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var f = e.get(l);
        f && i(f);
      }
    }), r.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function Fl(t) {
  var e = zl(t);
  return eo.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Vl(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function Fe(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, t);
}
var lt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ql = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', fi = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Yl(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), fi).filter(function(n, r, i) {
      return i.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof e.name != "string" && console.error(Fe(lt, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Fe(lt, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          eo.indexOf(e.phase) < 0 && console.error(Fe(lt, e.name, '"phase"', "either " + eo.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Fe(lt, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Fe(lt, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Fe(lt, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Fe(lt, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + fi.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(Fe(ql, String(e.name), r, r));
      });
    });
  });
}
function Xl(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.filter(function(r) {
    var i = e(r);
    if (!n.has(i))
      return n.add(i), !0;
  });
}
function Ie(t) {
  return t.split("-")[0];
}
function Gl(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
function Kl(t, e) {
  var n = he(t), r = ot(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = Ls();
    (u || !u && e === "fixed") && (l = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + ko(t),
    y: f
  };
}
function Jl(t) {
  var e, n = ot(t), r = xo(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = mt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = mt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + ko(t), f = -r.scrollTop;
  return me(i || n).direction === "rtl" && (l += mt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: f
  };
}
function Zl(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && $o(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function to(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Ql(t, e) {
  var n = Bt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ui(t, e, n) {
  return e === Hs ? to(Kl(t, n)) : bt(e) ? Ql(e, n) : to(Jl(ot(t)));
}
function ec(t) {
  var e = _n(Ir(t)), n = ["absolute", "fixed"].indexOf(me(t).position) >= 0, r = n && ue(t) ? Br(t) : t;
  return bt(r) ? e.filter(function(i) {
    return bt(i) && Zl(i, r) && Ce(i) !== "body";
  }) : [];
}
function tc(t, e, n, r) {
  var i = e === "clippingParents" ? ec(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(f, u) {
    var s = ui(t, u, r);
    return f.top = mt(s.top, f.top), f.right = cr(s.right, f.right), f.bottom = cr(s.bottom, f.bottom), f.left = mt(s.left, f.left), f;
  }, ui(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function zt(t) {
  return t.split("-")[1];
}
function js(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ws(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ie(r) : null, o = r ? zt(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, f;
  switch (i) {
    case ve:
      f = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Ae:
      f = {
        x: a,
        y: e.y + e.height
      };
      break;
    case nt:
      f = {
        x: e.x + e.width,
        y: l
      };
      break;
    case We:
      f = {
        x: e.x - n.width,
        y: l
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  var u = i ? js(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case Ut:
        f[u] = f[u] - (e[s] / 2 - n[s] / 2);
        break;
      case yn:
        f[u] = f[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function Is() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function nc(t) {
  return Object.assign({}, Is(), t);
}
function rc(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function So(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, f = l === void 0 ? Ol : l, u = n.rootBoundary, s = u === void 0 ? Hs : u, d = n.elementContext, p = d === void 0 ? rn : d, c = n.altBoundary, h = c === void 0 ? !1 : c, y = n.padding, _ = y === void 0 ? 0 : y, v = nc(typeof _ != "number" ? _ : rc(_, zr)), b = p === rn ? Dl : rn, w = t.rects.popper, $ = t.elements[h ? b : p], x = tc(bt($) ? $ : $.contextElement || ot(t.elements.popper), f, s, a), m = Bt(t.elements.reference), k = Ws({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = to(Object.assign({}, w, k)), C = p === rn ? E : m, M = {
    top: x.top - C.top + v.top,
    bottom: C.bottom - x.bottom + v.bottom,
    left: x.left - C.left + v.left,
    right: C.right - x.right + v.right
  }, A = t.modifiersData.offset;
  if (p === rn && A) {
    var N = A[i];
    Object.keys(M).forEach(function(P) {
      var K = [nt, Ae].indexOf(P) >= 0 ? 1 : -1, j = [ve, Ae].indexOf(P) >= 0 ? "y" : "x";
      M[P] += N[j] * K;
    });
  }
  return M;
}
var pi = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", oc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", hi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function di() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ic(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? hi : i;
  return function(l, f, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hi, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, c = {
      state: s,
      setOptions: function(v) {
        var b = typeof v == "function" ? v(s.options) : v;
        y(), s.options = Object.assign({}, o, s.options, b), s.scrollParents = {
          reference: bt(l) ? _n(l) : l.contextElement ? _n(l.contextElement) : [],
          popper: _n(f)
        };
        var w = Fl(Gl([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Xl([].concat(w, s.options.modifiers), function(A) {
            var N = A.name;
            return N;
          });
          if (Yl($), Ie(s.options.placement) === Ur) {
            var x = s.orderedModifiers.find(function(A) {
              var N = A.name;
              return N === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = me(f), k = m.marginTop, E = m.marginRight, C = m.marginBottom, M = m.marginLeft;
          [k, E, C, M].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, b = v.reference, w = v.popper;
          if (!di(b, w)) {
            process.env.NODE_ENV !== "production" && console.error(pi);
            return;
          }
          s.rects = {
            reference: Al(b, Br(w), s.options.strategy === "fixed"),
            popper: Ns(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(A) {
            return s.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var $ = 0, x = 0; x < s.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(oc);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, x = -1;
              continue;
            }
            var m = s.orderedModifiers[x], k = m.fn, E = m.options, C = E === void 0 ? {} : E, M = m.name;
            typeof k == "function" && (s = k({
              state: s,
              options: C,
              name: M,
              instance: c
            }) || s);
          }
        }
      },
      update: Vl(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!di(l, f))
      return process.env.NODE_ENV !== "production" && console.error(pi), c;
    c.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, b = _.options, w = b === void 0 ? {} : b, $ = _.effect;
        if (typeof $ == "function") {
          var x = $({
            state: s,
            name: v,
            instance: c,
            options: w
          }), m = function() {
          };
          d.push(x || m);
        }
      });
    }
    function y() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return c;
  };
}
var Nn = {
  passive: !0
};
function sc(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, f = he(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Nn);
  }), l && f.addEventListener("resize", n.update, Nn), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Nn);
    }), l && f.removeEventListener("resize", n.update, Nn);
  };
}
const ac = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: sc,
  data: {}
};
function lc(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Ws({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const cc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: lc,
  data: {}
};
var fc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function uc(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: It(e * i) / i || 0,
    y: It(n * i) / i || 0
  };
}
function _i(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, f = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, c = p === void 0 ? 0 : p, h = a.y, y = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = _.x, y = _.y;
  var v = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), w = We, $ = ve, x = window;
  if (u) {
    var m = Br(n), k = "clientHeight", E = "clientWidth";
    if (m === he(n) && (m = ot(n), me(m).position !== "static" && l === "absolute" && (k = "scrollHeight", E = "scrollWidth")), m = m, i === ve || (i === We || i === nt) && o === yn) {
      $ = Ae;
      var C = d && m === x && x.visualViewport ? x.visualViewport.height : m[k];
      y -= C - r.height, y *= f ? 1 : -1;
    }
    if (i === We || (i === ve || i === Ae) && o === yn) {
      w = nt;
      var M = d && m === x && x.visualViewport ? x.visualViewport.width : m[E];
      c -= M - r.width, c *= f ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: l
  }, u && fc), N = s === !0 ? uc({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = N.x, y = N.y, f) {
    var P;
    return Object.assign({}, A, (P = {}, P[$] = b ? "0" : "", P[w] = v ? "0" : "", P.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", P));
  }
  return Object.assign({}, A, (e = {}, e[$] = b ? y + "px" : "", e[w] = v ? c + "px" : "", e.transform = "", e));
}
function pc(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = me(e.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return u.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var s = {
    placement: Ie(e.placement),
    variation: zt(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, _i(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, _i(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const hc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pc,
  data: {}
};
function dc(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !ue(o) || !Ce(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function _c(t) {
  var e = t.state, n = {
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
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), l = a.reduce(function(f, u) {
        return f[u] = "", f;
      }, {});
      !ue(i) || !Ce(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const vc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dc,
  effect: _c,
  requires: ["computeStyles"]
};
var gc = [ac, cc, hc, vc], vi = /* @__PURE__ */ ic({
  defaultModifiers: gc
});
function mc(t) {
  return t === "x" ? "y" : "x";
}
function Vn(t, e, n) {
  return mt(t, cr(e, n));
}
function yc(t, e, n) {
  var r = Vn(t, e, n);
  return r > n ? n : r;
}
function bc(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, c = p === void 0 ? !0 : p, h = n.tetherOffset, y = h === void 0 ? 0 : h, _ = So(e, {
    boundary: f,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ie(e.placement), b = zt(e.placement), w = !b, $ = js(v), x = mc($), m = e.modifiersData.popperOffsets, k = e.rects.reference, E = e.rects.popper, C = typeof y == "function" ? y(Object.assign({}, e.rects, {
    placement: e.placement
  })) : y, M = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), A = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (o) {
      var P, K = $ === "y" ? ve : We, j = $ === "y" ? Ae : nt, L = $ === "y" ? "height" : "width", H = m[$], oe = H + _[K], Z = H - _[j], _e = c ? -E[L] / 2 : 0, ie = b === Ut ? k[L] : E[L], ne = b === Ut ? -E[L] : -k[L], ae = e.elements.arrow, ee = c && ae ? Ns(ae) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Is(), T = R[K], I = R[j], W = Vn(0, k[L], ee[L]), te = w ? k[L] / 2 - _e - W - T - M.mainAxis : ie - W - T - M.mainAxis, Oe = w ? -k[L] / 2 + _e + W + I + M.mainAxis : ne + W + I + M.mainAxis, le = e.elements.arrow && Br(e.elements.arrow), $t = le ? $ === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, st = (P = A == null ? void 0 : A[$]) != null ? P : 0, Kt = H + te - st - $t, B = H + Oe - st, ze = Vn(c ? cr(oe, Kt) : oe, H, c ? mt(Z, B) : Z);
      m[$] = ze, N[$] = ze - H;
    }
    if (l) {
      var be, xt = $ === "x" ? ve : We, kt = $ === "x" ? Ae : nt, J = m[x], De = x === "y" ? "height" : "width", Jt = J + _[xt], Zt = J - _[kt], at = [ve, We].indexOf(v) !== -1, Qt = (be = A == null ? void 0 : A[x]) != null ? be : 0, en = at ? Jt : J - k[De] - E[De] - Qt + M.altAxis, tn = at ? J + k[De] + E[De] - Qt - M.altAxis : Zt, nn = c && at ? yc(en, J, tn) : Vn(c ? en : Jt, J, c ? tn : Zt);
      m[x] = nn, N[x] = nn - J;
    }
    e.modifiersData[r] = N;
  }
}
const gi = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bc,
  requiresIfExists: ["offset"]
};
var wc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return wc[e];
  });
}
var $c = {
  start: "end",
  end: "start"
};
function mi(t) {
  return t.replace(/start|end/g, function(e) {
    return $c[e];
  });
}
function xc(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, u = f === void 0 ? Pl : f, s = zt(r), d = s ? l ? ci : ci.filter(function(h) {
    return zt(h) === s;
  }) : zr, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = p.reduce(function(h, y) {
    return h[y] = So(t, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ie(y)], h;
  }, {});
  return Object.keys(c).sort(function(h, y) {
    return c[h] - c[y];
  });
}
function kc(t) {
  if (Ie(t) === Ur)
    return [];
  var e = qn(t);
  return [mi(t), e, mi(e)];
}
function Ec(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, h = c === void 0 ? !0 : c, y = n.allowedAutoPlacements, _ = e.options.placement, v = Ie(_), b = v === _, w = f || (b || !h ? [qn(_)] : kc(_)), $ = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ie(R) === Ur ? xc(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : R);
    }, []), x = e.rects.reference, m = e.rects.popper, k = /* @__PURE__ */ new Map(), E = !0, C = $[0], M = 0; M < $.length; M++) {
      var A = $[M], N = Ie(A), P = zt(A) === Ut, K = [ve, Ae].indexOf(N) >= 0, j = K ? "width" : "height", L = So(e, {
        placement: A,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), H = K ? P ? nt : We : P ? Ae : ve;
      x[j] > m[j] && (H = qn(H));
      var oe = qn(H), Z = [];
      if (o && Z.push(L[N] <= 0), l && Z.push(L[H] <= 0, L[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        C = A, E = !1;
        break;
      }
      k.set(A, Z);
    }
    if (E)
      for (var _e = h ? 3 : 1, ie = function(R) {
        var T = $.find(function(I) {
          var W = k.get(I);
          if (W)
            return W.slice(0, R).every(function(te) {
              return te;
            });
        });
        if (T)
          return C = T, "break";
      }, ne = _e; ne > 0; ne--) {
        var ae = ie(ne);
        if (ae === "break")
          break;
      }
    e.placement !== C && (e.modifiersData[r]._skip = !0, e.placement = C, e.reset = !0);
  }
}
const yi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ec,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bs(t) {
  return t.button === 2;
}
const Sc = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Gr = "show", Yn = "contextmenu";
var ht, ce, dt, Ot, Sn, _t, Cn, no, yr, br, wr, $r, Us, xr, zs;
const qe = class extends Wr {
  constructor() {
    super(...arguments);
    S(this, Cn);
    S(this, $r);
    S(this, xr);
    S(this, ht, void 0);
    S(this, ce, void 0);
    S(this, dt, /* @__PURE__ */ new Map());
    S(this, Ot, void 0);
    S(this, Sn, void 0);
    S(this, _t, void 0);
    S(this, yr, ({ menu: n }) => {
      const r = n.$;
      if (!(r != null && r.parentElement))
        return;
      let i = g(this, dt).get(n);
      i || (i = vi(r.parentElement, r, {
        modifiers: [gi, yi],
        placement: "right-start"
      }), g(this, dt).set(n, i)), i.update();
    });
    S(this, br, ({ menu: n }) => {
      const r = g(this, dt).get(n);
      r && (r.destroy(), g(this, dt).delete(n));
    });
    S(this, wr, ({ item: n, h: r }) => {
      if (n.type === "item" && n.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Gr);
  }
  get menu() {
    var i, o;
    if (g(this, ht))
      return g(this, ht);
    const { element: n } = this;
    let r;
    if (this.options.menu)
      r = document.createElement("div"), r.classList.add(Yn), document.body.appendChild(r);
    else if (n) {
      const a = (i = n.getAttribute("href")) != null ? i : n.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = n.nextElementSibling;
        l != null && l.classList.contains(Yn) ? r = l : r = (o = n.parentNode) == null ? void 0 : o.querySelector(`.${Yn}`);
      }
    }
    if (r)
      return O(this, ht, r), r;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return g(this, ce) ? g(this, ce) : F(this, Cn, no).call(this);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    if (n = n || qe.mousePos, this.emit("show", { menu: this, event: n }).defaultPrevented)
      return !1;
    O(this, Sn, n), F(this, $r, Us).call(this, n) !== !1 && (this.menu.classList.add(Gr), F(this, Cn, no).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var r, i, o, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (r = g(this, ce)) == null || r.destroy(), O(this, ce, void 0), (i = g(this, ht)) == null || i.classList.remove(Gr), (a = (o = g(this, _t)) == null ? void 0 : o.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    (n = g(this, ce)) == null || n.destroy(), super.destroy();
  }
  static clear(n) {
    n && Bs(n) || (qe.getAll(), qe.getAll().forEach((r) => r.hide()));
  }
  static show(n) {
    const { event: r, ...i } = n, o = qe.ensure(document.body);
    return Object.keys(i).length && o.setOptions(i), o.show(r), r == null || r.stopPropagation(), o;
  }
  static hide() {
    const n = qe.get(document.body);
    return n == null || n.hide(), n;
  }
  static get mousePos() {
    const { watchedMouse: n } = this;
    return n || this.watchMouse(), typeof n == "object" ? n : { clientX: 0, clientY: 0 };
  }
  static watchMouse() {
    this.watchedMouse || (document.addEventListener("mousemove", (n) => {
      this.watchedMouse = n;
    }), this.watchedMouse = !0);
  }
};
let St = qe;
ht = new WeakMap(), ce = new WeakMap(), dt = new WeakMap(), Ot = new WeakMap(), Sn = new WeakMap(), _t = new WeakMap(), Cn = new WeakSet(), no = function() {
  const n = {
    modifiers: [gi, yi],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return g(this, ce) ? g(this, ce).setOptions(n) : O(this, ce, vi(F(this, xr, zs).call(this), this.menu, n)), g(this, ce);
}, yr = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), $r = new WeakSet(), Us = function(n) {
  let { items: r } = this.options;
  if (!r)
    return;
  if (typeof r == "function" && (r = r(this, n)), !(r != null && r.length) || this.emit("updateMenu", { items: r, event: n, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: o } = this.options;
  return g(this, _t) ? g(this, _t).render({ items: r, ...o }) : O(this, _t, new fs(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: r,
    ...o,
    afterRender: g(this, yr),
    beforeDestroy: g(this, br),
    onRenderItem: g(this, wr)
  })), !0;
}, xr = new WeakSet(), zs = function() {
  return g(this, Ot) || O(this, Ot, {
    getBoundingClientRect: () => {
      const { clientX: n, clientY: r } = g(this, Sn) || qe.mousePos;
      return {
        width: 0,
        height: 0,
        top: r,
        right: n,
        bottom: r,
        left: n
      };
    },
    contextElement: this.element
  }), g(this, Ot);
}, U(St, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), U(St, "watchedMouse", !1);
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Yn}`))
    return;
  const n = e.closest(Sc);
  n && (St.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", St.clear);
function de(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function wt(t) {
  var e = de(t).Element;
  return t instanceof e || t instanceof Element;
}
function pe(t) {
  var e = de(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Co(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = de(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var yt = Math.max, fr = Math.min, Ft = Math.round;
function ro() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Fs() {
  return !/^((?!chrome|android).)*safari/i.test(ro());
}
function Vt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && pe(t) && (i = t.offsetWidth > 0 && Ft(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Ft(r.height) / t.offsetHeight || 1);
  var a = wt(t) ? de(t) : window, l = a.visualViewport, f = !Fs() && n, u = (r.left + (f && l ? l.offsetLeft : 0)) / i, s = (r.top + (f && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
  return {
    width: d,
    height: p,
    top: s,
    right: u + d,
    bottom: s + p,
    left: u,
    x: u,
    y: s
  };
}
function Ao(t) {
  var e = de(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Cc(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function Ac(t) {
  return t === de(t) || !pe(t) ? Ao(t) : Cc(t);
}
function Re(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function it(t) {
  return ((wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ro(t) {
  return Vt(it(t)).left + Ao(t).scrollLeft;
}
function ye(t) {
  return de(t).getComputedStyle(t);
}
function Mo(t) {
  var e = ye(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Rc(t) {
  var e = t.getBoundingClientRect(), n = Ft(e.width) / t.offsetWidth || 1, r = Ft(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Mc(t, e, n) {
  n === void 0 && (n = !1);
  var r = pe(e), i = pe(e) && Rc(e), o = it(e), a = Vt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Re(e) !== "body" || Mo(o)) && (l = Ac(e)), pe(e) ? (f = Vt(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : o && (f.x = Ro(o))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Vs(t) {
  var e = Vt(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Fr(t) {
  return Re(t) === "html" ? t : t.assignedSlot || t.parentNode || (Co(t) ? t.host : null) || it(t);
}
function qs(t) {
  return ["html", "body", "#document"].indexOf(Re(t)) >= 0 ? t.ownerDocument.body : pe(t) && Mo(t) ? t : qs(Fr(t));
}
function vn(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = qs(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = de(r), a = i ? [o].concat(o.visualViewport || [], Mo(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(vn(Fr(a)));
}
function Oc(t) {
  return ["table", "td", "th"].indexOf(Re(t)) >= 0;
}
function bi(t) {
  return !pe(t) || ye(t).position === "fixed" ? null : t.offsetParent;
}
function Dc(t) {
  var e = /firefox/i.test(ro()), n = /Trident/i.test(ro());
  if (n && pe(t)) {
    var r = ye(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Fr(t);
  for (Co(i) && (i = i.host); pe(i) && ["html", "body"].indexOf(Re(i)) < 0; ) {
    var o = ye(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Vr(t) {
  for (var e = de(t), n = bi(t); n && Oc(n) && ye(n).position === "static"; )
    n = bi(n);
  return n && (Re(n) === "html" || Re(n) === "body" && ye(n).position === "static") ? e : n || Dc(t) || e;
}
var ge = "top", Me = "bottom", rt = "right", Be = "left", qr = "auto", Yr = [ge, Me, rt, Be], qt = "start", bn = "end", Pc = "clippingParents", Ys = "viewport", on = "popper", Lc = "reference", wi = /* @__PURE__ */ Yr.reduce(function(t, e) {
  return t.concat([e + "-" + qt, e + "-" + bn]);
}, []), Nc = /* @__PURE__ */ [].concat(Yr, [qr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + qt, e + "-" + bn]);
}, []), Tc = "beforeRead", Hc = "read", jc = "afterRead", Wc = "beforeMain", Ic = "main", Bc = "afterMain", Uc = "beforeWrite", zc = "write", Fc = "afterWrite", oo = [Tc, Hc, jc, Wc, Ic, Bc, Uc, zc, Fc];
function Vc(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var f = e.get(l);
        f && i(f);
      }
    }), r.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function qc(t) {
  var e = Vc(t);
  return oo.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Yc(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function Ve(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, t);
}
var ct = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Xc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', $i = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Gc(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), $i).filter(function(n, r, i) {
      return i.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof e.name != "string" && console.error(Ve(ct, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Ve(ct, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          oo.indexOf(e.phase) < 0 && console.error(Ve(ct, e.name, '"phase"', "either " + oo.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Ve(ct, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Ve(ct, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Ve(ct, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Ve(ct, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + $i.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(Ve(Xc, String(e.name), r, r));
      });
    });
  });
}
function Kc(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.filter(function(r) {
    var i = e(r);
    if (!n.has(i))
      return n.add(i), !0;
  });
}
function Ue(t) {
  return t.split("-")[0];
}
function Jc(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
function Zc(t, e) {
  var n = de(t), r = it(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = Fs();
    (u || !u && e === "fixed") && (l = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + Ro(t),
    y: f
  };
}
function Qc(t) {
  var e, n = it(t), r = Ao(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = yt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = yt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Ro(t), f = -r.scrollTop;
  return ye(i || n).direction === "rtl" && (l += yt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: f
  };
}
function ef(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Co(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function io(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function tf(t, e) {
  var n = Vt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xi(t, e, n) {
  return e === Ys ? io(Zc(t, n)) : wt(e) ? tf(e, n) : io(Qc(it(t)));
}
function nf(t) {
  var e = vn(Fr(t)), n = ["absolute", "fixed"].indexOf(ye(t).position) >= 0, r = n && pe(t) ? Vr(t) : t;
  return wt(r) ? e.filter(function(i) {
    return wt(i) && ef(i, r) && Re(i) !== "body";
  }) : [];
}
function rf(t, e, n, r) {
  var i = e === "clippingParents" ? nf(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(f, u) {
    var s = xi(t, u, r);
    return f.top = yt(s.top, f.top), f.right = fr(s.right, f.right), f.bottom = fr(s.bottom, f.bottom), f.left = yt(s.left, f.left), f;
  }, xi(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Yt(t) {
  return t.split("-")[1];
}
function Xs(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Gs(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ue(r) : null, o = r ? Yt(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, f;
  switch (i) {
    case ge:
      f = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Me:
      f = {
        x: a,
        y: e.y + e.height
      };
      break;
    case rt:
      f = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Be:
      f = {
        x: e.x - n.width,
        y: l
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  var u = i ? Xs(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case qt:
        f[u] = f[u] - (e[s] / 2 - n[s] / 2);
        break;
      case bn:
        f[u] = f[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function Ks() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function of(t) {
  return Object.assign({}, Ks(), t);
}
function sf(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function Oo(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, f = l === void 0 ? Pc : l, u = n.rootBoundary, s = u === void 0 ? Ys : u, d = n.elementContext, p = d === void 0 ? on : d, c = n.altBoundary, h = c === void 0 ? !1 : c, y = n.padding, _ = y === void 0 ? 0 : y, v = of(typeof _ != "number" ? _ : sf(_, Yr)), b = p === on ? Lc : on, w = t.rects.popper, $ = t.elements[h ? b : p], x = rf(wt($) ? $ : $.contextElement || it(t.elements.popper), f, s, a), m = Vt(t.elements.reference), k = Gs({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = io(Object.assign({}, w, k)), C = p === on ? E : m, M = {
    top: x.top - C.top + v.top,
    bottom: C.bottom - x.bottom + v.bottom,
    left: x.left - C.left + v.left,
    right: C.right - x.right + v.right
  }, A = t.modifiersData.offset;
  if (p === on && A) {
    var N = A[i];
    Object.keys(M).forEach(function(P) {
      var K = [rt, Me].indexOf(P) >= 0 ? 1 : -1, j = [ge, Me].indexOf(P) >= 0 ? "y" : "x";
      M[P] += N[j] * K;
    });
  }
  return M;
}
var ki = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", af = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ei = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Si() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lf(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? Ei : i;
  return function(l, f, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ei, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, c = {
      state: s,
      setOptions: function(v) {
        var b = typeof v == "function" ? v(s.options) : v;
        y(), s.options = Object.assign({}, o, s.options, b), s.scrollParents = {
          reference: wt(l) ? vn(l) : l.contextElement ? vn(l.contextElement) : [],
          popper: vn(f)
        };
        var w = qc(Jc([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Kc([].concat(w, s.options.modifiers), function(A) {
            var N = A.name;
            return N;
          });
          if (Gc($), Ue(s.options.placement) === qr) {
            var x = s.orderedModifiers.find(function(A) {
              var N = A.name;
              return N === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = ye(f), k = m.marginTop, E = m.marginRight, C = m.marginBottom, M = m.marginLeft;
          [k, E, C, M].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, b = v.reference, w = v.popper;
          if (!Si(b, w)) {
            process.env.NODE_ENV !== "production" && console.error(ki);
            return;
          }
          s.rects = {
            reference: Mc(b, Vr(w), s.options.strategy === "fixed"),
            popper: Vs(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(A) {
            return s.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var $ = 0, x = 0; x < s.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(af);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, x = -1;
              continue;
            }
            var m = s.orderedModifiers[x], k = m.fn, E = m.options, C = E === void 0 ? {} : E, M = m.name;
            typeof k == "function" && (s = k({
              state: s,
              options: C,
              name: M,
              instance: c
            }) || s);
          }
        }
      },
      update: Yc(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!Si(l, f))
      return process.env.NODE_ENV !== "production" && console.error(ki), c;
    c.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, b = _.options, w = b === void 0 ? {} : b, $ = _.effect;
        if (typeof $ == "function") {
          var x = $({
            state: s,
            name: v,
            instance: c,
            options: w
          }), m = function() {
          };
          d.push(x || m);
        }
      });
    }
    function y() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return c;
  };
}
var Tn = {
  passive: !0
};
function cf(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, f = de(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Tn);
  }), l && f.addEventListener("resize", n.update, Tn), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Tn);
    }), l && f.removeEventListener("resize", n.update, Tn);
  };
}
const ff = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cf,
  data: {}
};
function uf(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Gs({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const pf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: uf,
  data: {}
};
var hf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function df(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: Ft(e * i) / i || 0,
    y: Ft(n * i) / i || 0
  };
}
function Ci(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, f = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, c = p === void 0 ? 0 : p, h = a.y, y = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = _.x, y = _.y;
  var v = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), w = Be, $ = ge, x = window;
  if (u) {
    var m = Vr(n), k = "clientHeight", E = "clientWidth";
    if (m === de(n) && (m = it(n), ye(m).position !== "static" && l === "absolute" && (k = "scrollHeight", E = "scrollWidth")), m = m, i === ge || (i === Be || i === rt) && o === bn) {
      $ = Me;
      var C = d && m === x && x.visualViewport ? x.visualViewport.height : m[k];
      y -= C - r.height, y *= f ? 1 : -1;
    }
    if (i === Be || (i === ge || i === Me) && o === bn) {
      w = rt;
      var M = d && m === x && x.visualViewport ? x.visualViewport.width : m[E];
      c -= M - r.width, c *= f ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: l
  }, u && hf), N = s === !0 ? df({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = N.x, y = N.y, f) {
    var P;
    return Object.assign({}, A, (P = {}, P[$] = b ? "0" : "", P[w] = v ? "0" : "", P.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", P));
  }
  return Object.assign({}, A, (e = {}, e[$] = b ? y + "px" : "", e[w] = v ? c + "px" : "", e.transform = "", e));
}
function _f(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = ye(e.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return u.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var s = {
    placement: Ue(e.placement),
    variation: Yt(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ci(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ci(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const vf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _f,
  data: {}
};
function gf(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !pe(o) || !Re(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function mf(t) {
  var e = t.state, n = {
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
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), l = a.reduce(function(f, u) {
        return f[u] = "", f;
      }, {});
      !pe(i) || !Re(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const yf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gf,
  effect: mf,
  requires: ["computeStyles"]
};
var bf = [ff, pf, vf, yf], wf = /* @__PURE__ */ lf({
  defaultModifiers: bf
});
function $f(t) {
  return t === "x" ? "y" : "x";
}
function Xn(t, e, n) {
  return yt(t, fr(e, n));
}
function xf(t, e, n) {
  var r = Xn(t, e, n);
  return r > n ? n : r;
}
function kf(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, c = p === void 0 ? !0 : p, h = n.tetherOffset, y = h === void 0 ? 0 : h, _ = Oo(e, {
    boundary: f,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ue(e.placement), b = Yt(e.placement), w = !b, $ = Xs(v), x = $f($), m = e.modifiersData.popperOffsets, k = e.rects.reference, E = e.rects.popper, C = typeof y == "function" ? y(Object.assign({}, e.rects, {
    placement: e.placement
  })) : y, M = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), A = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (o) {
      var P, K = $ === "y" ? ge : Be, j = $ === "y" ? Me : rt, L = $ === "y" ? "height" : "width", H = m[$], oe = H + _[K], Z = H - _[j], _e = c ? -E[L] / 2 : 0, ie = b === qt ? k[L] : E[L], ne = b === qt ? -E[L] : -k[L], ae = e.elements.arrow, ee = c && ae ? Vs(ae) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ks(), T = R[K], I = R[j], W = Xn(0, k[L], ee[L]), te = w ? k[L] / 2 - _e - W - T - M.mainAxis : ie - W - T - M.mainAxis, Oe = w ? -k[L] / 2 + _e + W + I + M.mainAxis : ne + W + I + M.mainAxis, le = e.elements.arrow && Vr(e.elements.arrow), $t = le ? $ === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, st = (P = A == null ? void 0 : A[$]) != null ? P : 0, Kt = H + te - st - $t, B = H + Oe - st, ze = Xn(c ? fr(oe, Kt) : oe, H, c ? yt(Z, B) : Z);
      m[$] = ze, N[$] = ze - H;
    }
    if (l) {
      var be, xt = $ === "x" ? ge : Be, kt = $ === "x" ? Me : rt, J = m[x], De = x === "y" ? "height" : "width", Jt = J + _[xt], Zt = J - _[kt], at = [ge, Be].indexOf(v) !== -1, Qt = (be = A == null ? void 0 : A[x]) != null ? be : 0, en = at ? Jt : J - k[De] - E[De] - Qt + M.altAxis, tn = at ? J + k[De] + E[De] - Qt - M.altAxis : Zt, nn = c && at ? xf(en, J, tn) : Xn(c ? en : Jt, J, c ? tn : Zt);
      m[x] = nn, N[x] = nn - J;
    }
    e.modifiersData[r] = N;
  }
}
const Ef = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kf,
  requiresIfExists: ["offset"]
};
var Sf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Gn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Sf[e];
  });
}
var Cf = {
  start: "end",
  end: "start"
};
function Ai(t) {
  return t.replace(/start|end/g, function(e) {
    return Cf[e];
  });
}
function Af(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, u = f === void 0 ? Nc : f, s = Yt(r), d = s ? l ? wi : wi.filter(function(h) {
    return Yt(h) === s;
  }) : Yr, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = p.reduce(function(h, y) {
    return h[y] = Oo(t, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ue(y)], h;
  }, {});
  return Object.keys(c).sort(function(h, y) {
    return c[h] - c[y];
  });
}
function Rf(t) {
  if (Ue(t) === qr)
    return [];
  var e = Gn(t);
  return [Ai(t), e, Ai(e)];
}
function Mf(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, h = c === void 0 ? !0 : c, y = n.allowedAutoPlacements, _ = e.options.placement, v = Ue(_), b = v === _, w = f || (b || !h ? [Gn(_)] : Rf(_)), $ = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ue(R) === qr ? Af(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : R);
    }, []), x = e.rects.reference, m = e.rects.popper, k = /* @__PURE__ */ new Map(), E = !0, C = $[0], M = 0; M < $.length; M++) {
      var A = $[M], N = Ue(A), P = Yt(A) === qt, K = [ge, Me].indexOf(N) >= 0, j = K ? "width" : "height", L = Oo(e, {
        placement: A,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), H = K ? P ? rt : Be : P ? Me : ge;
      x[j] > m[j] && (H = Gn(H));
      var oe = Gn(H), Z = [];
      if (o && Z.push(L[N] <= 0), l && Z.push(L[H] <= 0, L[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        C = A, E = !1;
        break;
      }
      k.set(A, Z);
    }
    if (E)
      for (var _e = h ? 3 : 1, ie = function(R) {
        var T = $.find(function(I) {
          var W = k.get(I);
          if (W)
            return W.slice(0, R).every(function(te) {
              return te;
            });
        });
        if (T)
          return C = T, "break";
      }, ne = _e; ne > 0; ne--) {
        var ae = ie(ne);
        if (ae === "break")
          break;
      }
    e.placement !== C && (e.modifiersData[r]._skip = !0, e.placement = C, e.reset = !0);
  }
}
const Of = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Mf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Df(t) {
  return (t == null ? void 0 : t.nodeType) !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false";
}
const Pf = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', sn = "show", Ri = "dropdown-menu";
var vt, Te;
const kr = class extends Wr {
  constructor() {
    super(...arguments);
    S(this, vt, void 0);
    S(this, Te, void 0);
  }
  get isShown() {
    return this.menu.classList.contains(sn);
  }
  get menu() {
    var n, r;
    if (!g(this, vt)) {
      const { element: i } = this;
      let o;
      const a = (n = i.getAttribute("href")) != null ? n : i.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (o = document.querySelector(a)), !o) {
        const l = i.nextElementSibling;
        l != null && l.classList.contains(Ri) ? o = l : o = (r = i.parentNode) == null ? void 0 : r.querySelector(`.${Ri}`);
      }
      if (o)
        O(this, vt, o);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return g(this, vt);
  }
  get popper() {
    return g(this, Te) || O(this, Te, wf(this.element, this.menu, {
      modifiers: [Ef, Of],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), g(this, Te);
  }
  show(n) {
    this.events.emit("show", this).defaultPrevented || ((n == null ? void 0 : n.hideOthers) !== !1 && kr.getAll().forEach((i) => i !== this ? i.hide() : null), this.menu.classList.add(sn), this.element.classList.add(sn), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var r, i;
    Df(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((r = g(this, Te)) == null || r.destroy(), O(this, Te, void 0), (i = g(this, vt)) == null || i.classList.remove(sn), this.element.classList.remove(sn), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var n;
    (n = g(this, Te)) == null || n.destroy(), super.destroy();
  }
  static clear(n) {
    n && Bs(n) || kr.getAll().forEach((r) => r.hide());
  }
};
let Ct = kr;
vt = new WeakMap(), Te = new WeakMap(), U(Ct, "NAME", "dropdown"), U(Ct, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Pf);
  n ? Ct.ensure(n).toggle() : Ct.clear(t);
});
var Do, G, Js, Zs, gn, Mi, Qs = {}, ea = [], Lf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tt(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ta(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function D(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Do.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Kn(t, a, r, i, null);
}
function Kn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Js : i };
  return i == null && G.vnode != null && G.vnode(o), o;
}
function Nf() {
  return { current: null };
}
function Po(t) {
  return t.children;
}
function mn(t, e) {
  this.props = t, this.context = e;
}
function Xt(t, e) {
  if (e == null)
    return t.__ ? Xt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Xt(t) : null;
}
function na(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return na(t);
  }
}
function Oi(t) {
  (!t.__d && (t.__d = !0) && gn.push(t) && !ur.__r++ || Mi !== G.debounceRendering) && ((Mi = G.debounceRendering) || setTimeout)(ur);
}
function ur() {
  for (var t; ur.__r = gn.length; )
    t = gn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), gn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = tt({}, o)).__v = o.__v + 1, sa(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xt(o) : a, o.__h), Hf(r, o), o.__e != a && na(o)));
    });
}
function ra(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, y, _, v = r && r.__k || ea, b = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Kn(null, c, null, null, c) : Array.isArray(c) ? Kn(Po, { children: c }, null, null, null) : c.__b > 0 ? Kn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      sa(t, c, p = p || Qs, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (y == null && (y = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = oa(c, f, t) : f = ia(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Xt(p));
    }
  for (n.__e = y, s = b; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Xt(r, s + 1)), la(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      aa(_[s], _[++s], _[++s]);
}
function oa(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? oa(r, e, n) : ia(n, r, r, i, r.__e, e));
  return e;
}
function ia(t, e, n, r, i, o) {
  var a, l, f;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < r.length; f += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Tf(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || pr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || pr(t, o, e[o], n[o], r);
}
function Di(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Lf.test(e) ? n : n + "px";
}
function pr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Di(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Di(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Li : Pi, o) : t.removeEventListener(e, o ? Li : Pi, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function Pi(t) {
  this.l[t.type + !1](G.event ? G.event(t) : t);
}
function Li(t) {
  this.l[t.type + !0](G.event ? G.event(t) : t);
}
function sa(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, y, _, v, b, w, $, x, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = G.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, b) : (e.__c = s = new mn(_, b), s.constructor = m, s.render = Wf), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = b, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = tt({}, s.__s)), tt(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, b) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = b, s.props = _, s.__v = e, s.__P = t, w = G.__r, $ = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++$ < 25);
        s.state = s.__s, s.getChildContext != null && (r = tt(tt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), x = u != null && u.type === Po && u.key == null ? u.props.children : u, ra(t, Array.isArray(x) ? x : [x], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), y && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = jf(n.__e, e, n, r, i, o, a, f);
    (u = G.diffed) && u(e);
  } catch (k) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), G.__e(k, e, n);
  }
}
function Hf(t, e) {
  G.__c && G.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      G.__e(r, n.__v);
    }
  });
}
function jf(t, e, n, r, i, o, a, l) {
  var f, u, s, d = n.props, p = e.props, c = e.type, h = 0;
  if (c === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((f = o[h]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        t = f, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, p.is && p), o = null, l = !1;
  }
  if (c === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && Do.call(t.childNodes), u = (d = n.props || Qs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Tf(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, ra(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Xt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ta(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && pr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && pr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function aa(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    G.__e(r, n);
  }
}
function la(t, e, n) {
  var r, i;
  if (G.unmount && G.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || aa(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        G.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && la(r[i], e, typeof t.type != "function");
  n || t.__e == null || ta(t.__e), t.__e = t.__d = void 0;
}
function Wf(t, e, n) {
  return this.constructor(t, n);
}
Do = ea.slice, G = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Js = 0, Zs = function(t) {
  return t != null && t.constructor === void 0;
}, mn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, n), this.props)), t && tt(n, t), t != null && this.__v && (e && this.__h.push(e), Oi(this));
}, mn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Oi(this));
}, mn.prototype.render = Po, gn = [], ur.__r = 0;
let If = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Bf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Lo({ col: t, className: e, height: n, row: r, onRenderCell: i, style: o, outerStyle: a, children: l, outerClass: f, ...u }) {
  var m, k;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...a
  }, { align: d, border: p } = t.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...o
  }, h = ["dtable-cell", f, t.setting.className, {
    "has-border-left": p === !0 || p === "left",
    "has-border-right": p === !0 || p === "right"
  }], y = ["dtable-cell-content", e], _ = [(k = l != null ? l : (m = r.data) == null ? void 0 : m[t.name]) != null ? k : ""], v = i ? i(_, { row: r, col: t }, D) : _, b = [], w = [], $ = {}, x = {};
  return v == null || v.forEach((E) => {
    var C;
    if (typeof E == "object" && E && !Zs(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E)) {
      const M = E.outer ? b : w;
      E.html ? M.push(/* @__PURE__ */ D("div", {
        className: z("dtable-cell-html", E.className),
        style: E.style,
        dangerouslySetInnerHTML: { __html: E.html },
        ...(C = E.attrs) != null ? C : {}
      })) : (E.style && Object.assign(E.outer ? s : c, E.style), E.className && (E.outer ? h : y).push(E.className), E.children && M.push(E.children), E.attrs && Object.assign(E.outer ? $ : x, E.attrs));
    } else
      w.push(E);
  }), /* @__PURE__ */ D("div", {
    className: z(h),
    style: s,
    "data-col": t.name,
    ...u,
    ...$
  }, w.length > 0 && /* @__PURE__ */ D("div", {
    className: z(y),
    style: c,
    ...x
  }, w), b);
}
function Uf({ col: t, children: e, style: n, ...r }) {
  var o;
  const { sortType: i } = t.setting;
  return /* @__PURE__ */ D(Lo, {
    col: t,
    style: { ...n, ...t.setting.style },
    "data-sort": i || null,
    "data-type": t.type,
    ...r
  }, (o = t.setting.title) != null ? o : t.setting.name, i && /* @__PURE__ */ D("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), e);
}
function Kr({ row: t, className: e, top: n = 0, left: r = 0, width: i, height: o, cols: a, CellComponent: l = Lo, onRenderCell: f }) {
  return /* @__PURE__ */ D("div", {
    className: z("dtable-cells", e),
    style: { top: n, left: r, width: i, height: o }
  }, a.map((u) => u.visible ? /* @__PURE__ */ D(l, {
    key: u.name,
    col: u,
    row: t,
    onRenderCell: f
  }) : null));
}
function ca({
  row: t,
  className: e,
  top: n,
  height: r,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: f,
  scrollColsWidth: u,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: p = Lo,
  onRenderCell: c,
  style: h,
  ...y
}) {
  let _ = null;
  i != null && i.length && (_ = /* @__PURE__ */ D(Kr, {
    className: "dtable-fixed-left",
    cols: i,
    width: l,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ D(Kr, {
    className: "dtable-flexable",
    cols: a,
    left: l - d,
    width: u,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  let b = null;
  o != null && o.length && (b = /* @__PURE__ */ D(Kr, {
    className: "dtable-fixed-right",
    cols: o,
    left: l + f,
    width: s,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  const w = { top: n, height: r, lineHeight: `${r - 2}px`, ...h };
  return /* @__PURE__ */ D("div", {
    className: z("dtable-row", e),
    style: w,
    "data-id": t.id,
    ...y
  }, _, v, b);
}
function zf({ height: t, onRenderRow: e, ...n }) {
  const r = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Uf
  };
  if (e) {
    const i = e({ props: r }, D);
    i && Object.assign(r, i);
  }
  return /* @__PURE__ */ D("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ D(ca, {
    ...r
  }));
}
function Ff({
  className: t,
  style: e,
  top: n,
  rows: r,
  height: i,
  rowHeight: o,
  scrollTop: a,
  onRenderRow: l,
  ...f
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ D("div", {
    className: z("dtable-rows", t),
    style: e
  }, r.map((u) => {
    const s = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - a,
      height: o,
      ...f
    }, d = l == null ? void 0 : l({ props: s, row: u }, D);
    return d && Object.assign(s, d), /* @__PURE__ */ D(ca, {
      ...s
    });
  }));
}
const hr = /* @__PURE__ */ new Map(), dr = [];
function fa(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && hr.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  hr.set(n, t), (e == null ? void 0 : e.buildIn) && !dr.includes(n) && dr.push(n);
}
function Ln(t, e) {
  fa(t, e);
  const n = (r) => {
    if (!r)
      return t;
    const { defaultOptions: i, ...o } = t;
    return {
      ...o,
      defaultOptions: { ...i, ...r }
    };
  };
  return n.plugin = t, n;
}
function ua(t) {
  return hr.delete(t);
}
function Vf(t) {
  if (typeof t == "string") {
    const e = hr.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function pa(t, e, n) {
  return e.forEach((r) => {
    var o;
    if (!r)
      return;
    const i = Vf(r);
    !i || n.has(i.name) || ((o = i.plugins) != null && o.length && pa(t, i.plugins, n), t.push(i), n.add(i.name));
  }), t;
}
function qf(t = [], e = !0) {
  return e && dr.length && t.unshift(...dr), t != null && t.length ? pa([], t, /* @__PURE__ */ new Set()) : [];
}
function Ni() {
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
function Yf(t) {
  const {
    tag: e,
    className: n,
    style: r,
    renders: i,
    generateArgs: o = [],
    generatorThis: a,
    generators: l,
    onGenerate: f,
    onRenderItem: u,
    ...s
  } = t, d = [n], p = { ...r }, c = [], h = [];
  return i.forEach((y) => {
    var v;
    const _ = [];
    typeof y == "string" && l && l[y] && (y = l[y]), typeof y == "function" ? f ? _.push(...f.call(a, y, c, ...o)) : _.push(...(v = y.call(a, c, ...o)) != null ? v : []) : _.push(y), _.forEach((b) => {
      var w;
      b != null && (typeof b == "object" && !Bi(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? c.push(
        /* @__PURE__ */ Hr("div", {
          className: z(b.className),
          style: b.style,
          dangerouslySetInnerHTML: { __html: b.html },
          ...(w = b.attrs) != null ? w : {}
        })
      ) : b.__html ? h.push(b.__html) : (b.style && Object.assign(p, b.style), b.className && d.push(b.className), b.children && c.push(b.children), b.attrs && Object.assign(s, b.attrs)) : c.push(b));
    });
  }), h.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: h } }), [{
    className: z(d),
    style: p,
    ...s
  }, c];
}
function Ti({
  tag: t = "div",
  ...e
}) {
  const [n, r] = Yf(e);
  return Hr(t, n, ...r);
}
var gt, Dt, Ge, He, Ke, Q, xe, ke, Pt, An, Rn, je, Lt, Nt, Er, ha, Sr, da, Cr, _a, Ar, va, Mn, ao, Rr, Mr, On, Dn, Or, Dr, Pr, ga, Lr, ma, Nr, ya;
class so extends mn {
  constructor(n) {
    var r;
    super(n);
    S(this, Er);
    S(this, Sr);
    S(this, Cr);
    S(this, Ar);
    S(this, Mn);
    S(this, Pr);
    S(this, Lr);
    S(this, Nr);
    U(this, "ref", Nf());
    S(this, gt, 0);
    S(this, Dt, void 0);
    S(this, Ge, !1);
    S(this, He, void 0);
    S(this, Ke, void 0);
    S(this, Q, []);
    S(this, xe, void 0);
    S(this, ke, /* @__PURE__ */ new Map());
    S(this, Pt, {});
    S(this, An, void 0);
    S(this, Rn, []);
    U(this, "updateLayout", () => {
      g(this, gt) && cancelAnimationFrame(g(this, gt)), O(this, gt, requestAnimationFrame(() => {
        O(this, xe, void 0), this.forceUpdate(), O(this, gt, 0);
      }));
    });
    S(this, je, (n, r) => {
      r = r || n.type;
      const i = g(this, ke).get(r);
      if (!!(i != null && i.length)) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    S(this, Lt, (n) => {
      g(this, je).call(this, n, `window_${n.type}`);
    });
    S(this, Nt, (n) => {
      g(this, je).call(this, n, `document_${n.type}`);
    });
    S(this, Rr, (n, r) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, r);
        i && Object.assign(n.props, i);
      }
      return g(this, Q).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    S(this, Mr, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), g(this, Q).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    S(this, On, (n, r, i) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, r, i)), this.options[l] && (n = this.options[l].call(this, n, r, i)), g(this, Q).forEach((f) => {
        f[l] && (n = f[l].call(this, n, r, i));
      }), n;
    });
    S(this, Dn, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    S(this, Or, (n) => {
      var l, f, u, s, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: i, colName: o, cellElement: a } = r;
      if (i === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a }), g(this, Q).forEach((p) => {
          var c;
          (c = p.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: p } = r, c = this.layout.visibleRows.find((h) => h.id === i);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: i, rowInfo: c, element: a, rowElement: p })) === !0)
            return;
          for (const h of g(this, Q))
            if (((u = h.onCellClick) == null ? void 0 : u.call(this, n, { colName: o, rowID: i, rowInfo: c, element: a, rowElement: p })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: c, element: p })) === !0)
          return;
        for (const h of g(this, Q))
          if (((d = h.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: c, element: p })) === !0)
            return;
      }
    });
    S(this, Dr, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    O(this, Dt, (r = n.id) != null ? r : `dtable-${If(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, O(this, Ke, Object.freeze(qf(n.plugins))), g(this, Ke).forEach((i) => {
      var f;
      const { methods: o, data: a, state: l } = i;
      o && Object.entries(o).forEach(([u, s]) => {
        typeof s == "function" && Object.assign(this, { [u]: s.bind(this) });
      }), a && Object.assign(g(this, Pt), a.call(this)), l && Object.assign(this.state, l.call(this)), (f = i.onCreate) == null || f.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = g(this, xe)) == null ? void 0 : n.options) || g(this, He) || Ni();
  }
  get plugins() {
    return g(this, Q);
  }
  get layout() {
    return g(this, xe);
  }
  get id() {
    return g(this, Dt);
  }
  get data() {
    return g(this, Pt);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    O(this, He, void 0);
  }
  componentDidMount() {
    if (g(this, Ge) ? this.forceUpdate() : F(this, Mn, ao).call(this), g(this, Q).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", g(this, Or)), this.on("keydown", g(this, Dr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), O(this, An, r);
        }
      } else
        this.on("window_resize", this.updateLayout);
    g(this, Q).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    g(this, Ge) ? F(this, Mn, ao).call(this) : g(this, Q).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = g(this, An)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of g(this, ke).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), g(this, Lt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), g(this, Nt)) : n.removeEventListener(i, g(this, je));
    g(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), g(this, Ke).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), O(this, Pt, {}), g(this, ke).clear();
  }
  on(n, r, i) {
    var a;
    i && (n = `${i}_${n}`);
    const o = g(this, ke).get(n);
    o ? o.push(r) : (g(this, ke).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), g(this, Lt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), g(this, Nt)) : (a = this.ref.current) == null || a.addEventListener(n, g(this, je)));
  }
  off(n, r, i) {
    var l;
    i && (n = `${i}_${n}`);
    const o = g(this, ke).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (g(this, ke).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), g(this, Lt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), g(this, Nt)) : (l = this.ref.current) == null || l.removeEventListener(n, g(this, je)));
  }
  emitCustomEvent(n, r) {
    g(this, je).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: a, rowsHeight: l, rowHeight: f, colsInfo: { scrollWidth: u, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: p, scrollTop: c } = n;
    if (d === "up" || d === "down")
      c = o + (d === "down" ? 1 : -1) * Math.floor(l / f) * f;
    else if (d === "left" || d === "right")
      p = i + (d === "right" ? 1 : -1) * u;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = a - l;
    else if (d === "left-begin")
      p = 0;
    else if (d === "right-end")
      p = s - u;
    else {
      const { offsetLeft: y, offsetTop: _ } = n;
      typeof y == "number" && (p = i + y), typeof _ == "number" && (p = o + _);
    }
    const h = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, s - u)), p !== i && (h.scrollLeft = p)), typeof c == "number" && (c = Math.max(0, Math.min(c, a - l)), c !== o && (h.scrollTop = c)), Object.keys(h).length ? (this.setState(h, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, h), r == null || r.call(this, !0);
    }), !0) : (r == null || r.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: r, colsList: i } = this.layout;
    return typeof n == "number" ? i[n] : r[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: r, rowsMap: i } = this.layout;
    return typeof n == "number" ? r[n] : i[n];
  }
  getCellValue(n, r) {
    var f, u;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = i.id === "HEADER" ? (f = o.setting.title) != null ? f : o.setting.name : (u = i.data) == null ? void 0 : u[o.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, i, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    const { dirtyType: i, state: o } = n;
    i === "layout" ? O(this, xe, void 0) : i === "options" && (O(this, xe, void 0), O(this, He, void 0)), o ? this.setState({ ...o }, r) : this.forceUpdate(r);
  }
  getPointerInfo(n) {
    const r = n.target;
    if (!r || r.closest(".no-cell-event"))
      return;
    const i = r.closest(".dtable-cell");
    if (!i)
      return;
    const o = i.closest(".dtable-row");
    if (!o)
      return;
    const a = i == null ? void 0 : i.getAttribute("data-col"), l = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof a != "string" || typeof l != "string"))
      return {
        cellElement: i,
        rowElement: o,
        colName: a,
        rowID: l,
        target: r
      };
  }
  i18n(n, r, i) {
    var o;
    return (o = Pn(g(this, Rn), n, r, i, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = F(this, Nr, ya).call(this), { className: r, rowHover: i, colHover: o, cellHover: a, bordered: l, striped: f, scrollbarHover: u } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": f,
      "dtable-scrolled-down": ((c = n == null ? void 0 : n.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": u
    }], p = [];
    return n && g(this, Q).forEach((h) => {
      var _;
      const y = (_ = h.onRender) == null ? void 0 : _.call(this, n);
      !y || (y.style && Object.assign(s, y.style), y.className && d.push(y.className), y.children && p.push(y.children));
    }), /* @__PURE__ */ D("div", {
      id: g(this, Dt),
      className: z(d),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && F(this, Er, ha).call(this, n), n && F(this, Sr, da).call(this, n), n && F(this, Cr, _a).call(this, n), n && F(this, Ar, va).call(this, n));
  }
}
gt = new WeakMap(), Dt = new WeakMap(), Ge = new WeakMap(), He = new WeakMap(), Ke = new WeakMap(), Q = new WeakMap(), xe = new WeakMap(), ke = new WeakMap(), Pt = new WeakMap(), An = new WeakMap(), Rn = new WeakMap(), je = new WeakMap(), Lt = new WeakMap(), Nt = new WeakMap(), Er = new WeakSet(), ha = function(n) {
  const { header: r, colsInfo: i, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ D(zf, {
      scrollLeft: a,
      height: o,
      onRenderCell: g(this, On),
      onRenderRow: g(this, Mr),
      ...i
    });
  const l = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ D(Ti, {
    className: "dtable-header",
    style: { height: o },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, Sr = new WeakSet(), da = function(n) {
  const { headerHeight: r, rowsHeight: i, visibleRows: o, rowHeight: a, colsInfo: l, scrollLeft: f, scrollTop: u } = n;
  return /* @__PURE__ */ D(Ff, {
    top: r,
    height: i,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: u,
    onRenderCell: g(this, On),
    onRenderRow: g(this, Rr),
    ...l
  });
}, Cr = new WeakSet(), _a = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const i = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ D(Ti, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, Ar = new WeakSet(), va = function(n) {
  const r = [], { scrollLeft: i, colsInfo: o, scrollTop: a, rowsHeight: l, rowsHeightTotal: f, footerHeight: u } = n, { scrollColsWidth: s, scrollWidth: d } = o, { scrollbarSize: p = 12, horzScrollbarPos: c } = this.options;
  return s > d && r.push(
    /* @__PURE__ */ D(ei, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: d,
      onScroll: g(this, Dn),
      left: o.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -p) + u,
      size: p,
      wheelContainer: this.ref
    })
  ), f > l && r.push(
    /* @__PURE__ */ D(ei, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: l,
      onScroll: g(this, Dn),
      right: 0,
      size: p,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, Mn = new WeakSet(), ao = function() {
  var n;
  O(this, Ge, !1), (n = this.options.afterRender) == null || n.call(this), g(this, Q).forEach((r) => {
    var i;
    return (i = r.afterRender) == null ? void 0 : i.call(this);
  });
}, Rr = new WeakMap(), Mr = new WeakMap(), On = new WeakMap(), Dn = new WeakMap(), Or = new WeakMap(), Dr = new WeakMap(), Pr = new WeakSet(), ga = function() {
  if (g(this, He))
    return !1;
  const r = { ...Ni(), ...g(this, Ke).reduce((i, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(i, a), i;
  }, {}), ...this.props };
  return O(this, He, r), O(this, Q, g(this, Ke).reduce((i, o) => {
    const { when: a, options: l } = o;
    return (!a || a(r)) && (i.push(o), l && Object.assign(r, typeof l == "function" ? l.call(this, r) : l)), i;
  }, [])), O(this, Rn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Lr = new WeakSet(), ma = function() {
  var ae, ee;
  const { plugins: n } = this;
  let r = g(this, He);
  const i = {
    flex: /* @__PURE__ */ D("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ D("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((R) => {
    var I;
    const T = (I = R.beforeLayout) == null ? void 0 : I.call(this, r);
    T && (r = { ...r, ...T }), Object.assign(i, R.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: l } = r, f = [], u = [], s = [], d = {}, p = [], c = [];
  let h = 0, y = 0, _ = 0;
  r.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: T,
      type: I = "",
      fixed: W = !1,
      flex: te = !1,
      width: Oe = o,
      minWidth: le = a,
      maxWidth: $t = l,
      ...st
    } = R, Kt = Bf(Oe, le, $t), B = {
      name: T,
      type: I,
      setting: {
        name: T,
        type: I,
        fixed: W,
        flex: te,
        width: Oe,
        minWidth: le,
        maxWidth: $t,
        ...st
      },
      flex: W ? 0 : te === !0 ? 1 : typeof te == "number" ? te : 0,
      left: 0,
      width: Kt,
      realWidth: 0,
      visible: !0,
      index: p.length
    };
    n.forEach((ze) => {
      var xt, kt;
      const be = (xt = ze.colTypes) == null ? void 0 : xt[I];
      if (be) {
        const J = typeof be == "function" ? be(B) : be;
        J && Object.assign(B.setting, J);
      }
      (kt = ze.onAddCol) == null || kt.call(this, B);
    }), B.realWidth = B.realWidth || B.width, W === "left" ? (B.left = h, h += B.width, f.push(B)) : W === "right" ? (B.left = y, y += B.width, u.push(B)) : (B.left = _, _ += B.width, s.push(B)), B.flex && c.push(B), p.push(B), d[B.name] = B;
  });
  let v = r.width, b = 0;
  const w = h + _ + y;
  if (typeof v == "function" && (v = v.call(this, w)), v === "auto")
    b = w;
  else if (v === "100%") {
    const { parent: R } = this;
    if (R)
      b = R.clientWidth;
    else {
      b = 0, O(this, Ge, !0);
      return;
    }
  } else
    b = v != null ? v : 0;
  const { data: $, rowKey: x = "id", rowHeight: m } = r, k = [], E = (R, T, I) => {
    var te, Oe;
    const W = { data: I != null ? I : { [x]: R }, id: R, index: k.length, top: 0 };
    if (I || (W.lazy = !0), k.push(W), ((te = r.onAddRow) == null ? void 0 : te.call(this, W, T)) !== !1) {
      for (const le of n)
        if (((Oe = le.onAddRow) == null ? void 0 : Oe.call(this, W, T)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let R = 0; R < $; R++)
      E(`${R}`, R);
  else
    Array.isArray($) && $.forEach((R, T) => {
      var I;
      typeof R == "object" ? E(`${(I = R[x]) != null ? I : ""}`, T, R) : E(`${R != null ? R : ""}`, T);
    });
  let C = k;
  const M = {};
  if (r.onAddRows) {
    const R = r.onAddRows.call(this, C);
    R && (C = R);
  }
  for (const R of n) {
    const T = (ae = R.onAddRows) == null ? void 0 : ae.call(this, C);
    T && (C = T);
  }
  C.forEach((R, T) => {
    M[R.id] = R, R.index = T, R.top = R.index * m;
  });
  const { header: A, footer: N } = r, P = A ? r.headerHeight || m : 0, K = N ? r.footerHeight || m : 0;
  let j = r.height, L = 0;
  const H = C.length * m, oe = P + K + H;
  if (typeof j == "function" && (j = j.call(this, oe)), j === "auto")
    L = oe;
  else if (typeof j == "object")
    L = Math.min(j.max, Math.max(j.min, oe));
  else if (j === "100%") {
    const { parent: R } = this;
    if (R)
      L = R.clientHeight;
    else {
      L = 0, O(this, Ge, !0);
      return;
    }
  } else
    L = j;
  const Z = L - P - K, _e = b - h - y, ie = {
    options: r,
    allRows: k,
    width: b,
    height: L,
    rows: C,
    rowsMap: M,
    rowHeight: m,
    rowsHeight: Z,
    rowsHeightTotal: H,
    header: A,
    footer: N,
    footerGenerators: i,
    headerHeight: P,
    footerHeight: K,
    colsMap: d,
    colsList: p,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: u,
      scrollCols: s,
      fixedLeftWidth: h,
      scrollWidth: _e,
      scrollColsWidth: _,
      fixedRightWidth: y
    }
  }, ne = (ee = r.onLayout) == null ? void 0 : ee.call(this, ie);
  ne && Object.assign(ie, ne), n.forEach((R) => {
    if (R.onLayout) {
      const T = R.onLayout.call(this, ie);
      T && Object.assign(ie, T);
    }
  }), O(this, xe, ie);
}, Nr = new WeakSet(), ya = function() {
  (F(this, Pr, ga).call(this) || !g(this, xe)) && F(this, Lr, ma).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: l } } = n;
  if (i.length) {
    const w = a - l;
    if (w > 0) {
      const $ = i.reduce((m, k) => m + k.flex, 0);
      let x = 0;
      i.forEach((m) => {
        const k = Math.min(w - x, Math.ceil(w * (m.flex / $)));
        m.realWidth = k + m.width, x += m.realWidth;
      });
    } else
      i.forEach(($) => {
        $.realWidth = $.width;
      });
  }
  r = Math.min(Math.max(0, l - a), r);
  let f = 0;
  o.forEach((w) => {
    w.left = f, f += w.realWidth, w.visible = w.left + w.realWidth >= r && w.left <= r + a;
  });
  const { rowsHeightTotal: u, rowsHeight: s, rows: d, rowHeight: p } = n, c = Math.min(Math.max(0, u - s), this.state.scrollTop), h = Math.floor(c / p), y = c + s, _ = Math.min(d.length, Math.ceil(y / p)), v = [], { rowDataGetter: b } = this.options;
  for (let w = h; w < _; w++) {
    const $ = d[w];
    $.lazy && b && ($.data = b([$.id])[0], $.lazy = !1), v.push($);
  }
  return n.visibleRows = v, n.scrollTop = c, n.scrollLeft = r, n;
}, U(so, "addPlugin", fa), U(so, "removePlugin", ua);
function Hi(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((i) => i.classList.remove(r)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(r));
}
const ba = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i, o;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const r = (o = n == null ? void 0 : n.getAttribute("data-col")) != null ? o : !1;
      Hi(this, r);
    },
    mouseleave() {
      Hi(this, !1);
    }
  }
};
Ln(ba, { buildIn: !0 });
function Xf(t, e) {
  var a, l;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: i } = this.options, o = (f, u) => {
    i && !i.call(this, f) || !!n[f] === u || (u ? n[f] = !0 : delete n[f], r[f] = u);
  };
  if (t === void 0 ? (e === void 0 && (e = !wa.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    o(f, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((f) => {
    o(f, e != null ? e : !n[f]);
  })), Object.keys(r).length) {
    const f = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, t, r, n);
    f && Object.keys(f).forEach((u) => {
      f[u] ? n[u] = !0 : delete n[u];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, r);
    });
  }
  return r;
}
function Gf(t) {
  var e;
  return (e = this.state.checkedRows[t]) != null ? e : !1;
}
function wa() {
  var n, r;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, o) => i + (e.call(this, o.id) ? 1 : 0), 0)) : t === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function Kf() {
  return Object.keys(this.state.checkedRows);
}
const $a = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Xf,
    isRowChecked: Gf,
    isAllRowChecked: wa,
    getChecks: Kf
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
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ D("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ D("input", {
          type: "checkbox",
          checked: t
        }))
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ D("div", null, r.join(", "))
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var l, f;
    const { id: r } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, r))
      return t;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, r) : o) {
      const u = this.isRowChecked(r), s = (f = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, u, r)) != null ? f : /* @__PURE__ */ D("input", {
        type: "checkbox",
        checked: u
      });
      t.unshift(s), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var a, l;
    const { id: r } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, r) : i) {
      const f = this.isAllRowChecked(), u = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? l : /* @__PURE__ */ D("input", {
        type: "checkbox",
        checked: f
      });
      t.unshift(u), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: z(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
};
Ln($a);
function lo(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, r = e.children && n && n[t];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const a = lo.call(this, o);
    if (a.state !== "expanded") {
      i = !0;
      break;
    }
    o = a.parent;
  }
  return e.state = i ? "hidden" : r ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? lo.call(this, e.parent).level + 1 : 0, e;
}
function Jf(t, e) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: r } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !xa.call(this)), e) {
      const o = r.entries();
      for (const [a, l] of o)
        l.state === "expanded" && (n[a] = !0);
    } else
      n = {};
  else {
    const o = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[o[0]]), o.forEach((a) => {
      const l = r.get(a);
      e && (l == null ? void 0 : l.children) ? n[a] = !0 : delete n[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function xa() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function ka(t, e = 0, n, r = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const o of n) {
    const a = t.get(o);
    !a || (a.level === r && (a.order = e++), (i = a.children) != null && i.length && (e = ka(t, e, a.children, r + 1)));
  }
  return e;
}
function Ea(t, e, n, r) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    r[o] = n, Ea(t, o, n, r);
  }), i;
}
function Sa(t, e, n, r, i) {
  var l;
  const o = t.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((f) => {
    const u = !!(r[f] !== void 0 ? r[f] : i[f]);
    return n === u;
  })) && (r[e] = n), o.parent && Sa(t, o.parent, n, r, i);
}
const Ca = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, r = n.get(t.id), i = n.get(e.id);
      return (r == null ? void 0 : r.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const r = {};
      return Object.entries(e).forEach(([i, o]) => {
        const a = Ea(this, i, o, r);
        a != null && a.parent && Sa(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Jf,
    isAllCollapsed: xa,
    getNestedRowInfo: lo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, o, a, l, f;
    const { nestedMap: e } = this.data, n = (o = t.data) == null ? void 0 : o[(i = this.options.nestedParentKey) != null ? i : "parent"], r = (a = e.get(t.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (r.parent = n, (f = t.data) != null && f[(l = this.options.asParentKey) != null ? l : "asParent"] && (r.children = []), e.set(t.id, r), n) {
      let u = e.get(n);
      u || (u = {
        state: "",
        level: 0
      }, e.set(n, u)), u.children || (u.children = []), u.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), ka(this.data.nestedMap), t.sort((e, n) => {
      var a, l;
      const r = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((l = i.order) != null ? l : 0);
      return o === 0 ? e.index - n.index : o;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var l, f, u;
    const { id: r, data: i } = n, { nestedToggle: o } = e.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && t.unshift((f = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, r, e, i)) != null ? f : /* @__PURE__ */ D("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ D("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: s = o } = e.setting;
      s && (s === !0 && (s = (u = this.options.nestedIndent) != null ? u : 12), t.unshift(/* @__PURE__ */ D("div", {
        className: "dtable-nested-indent",
        style: { width: s * a.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i, o;
    const { id: r } = e;
    return n.setting.nestedToggle && t.unshift((o = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ D("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ D("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: z(t.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = z(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
};
Ln(Ca);
const Se = 24 * 60 * 60 * 1e3, re = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Gt = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), co = (t, e = new Date()) => re(t).getFullYear() === re(e).getFullYear(), Aa = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Zf = (t, e = new Date()) => {
  t = re(t), e = re(e);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((i + 4) / 7);
}, Qf = (t, e) => Gt(re(e), t), eu = (t, e) => Gt(re(e).getTime() - Se, t), tu = (t, e) => Gt(re(e).getTime() + Se, t), nu = (t, e) => Gt(re(e).getTime() - 2 * Se, t), _r = (t, e = "yyyy-MM-dd hh:mm") => {
  t = re(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((r) => {
    if (new RegExp(`(${r})`).test(e)) {
      const i = `${n[r]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, ru = (t, e, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = _r(t, co(t) ? r.month : r.full);
  if (Gt(t, e))
    return i;
  const o = _r(e, co(t, e) ? Aa(t, e) ? r.day : r.month : r.full);
  return r.str.replace("{0}", i).replace("{1}", o);
}, ou = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - Se * 7;
    case "oneMonth":
      return e - Se * 31;
    case "threeMonth":
      return e - Se * 31 * 3;
    case "halfYear":
      return e - Se * 183;
    case "oneYear":
      return e - Se * 365;
    case "twoYear":
      return e - 2 * (Se * 365);
    default:
      return 0;
  }
}, fo = (t, e, n = !0, r = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, fo(t, "day", n, r);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, fo(t, "day", n, r);
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
  return n ? r + t : r - t;
};
const Ra = {
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
      onRenderCell(t, { col: e, row: n }) {
        const { linkTemplate: r = "", linkProps: i } = e.setting, o = Et(r, n.data);
        return t[0] = /* @__PURE__ */ D("a", {
          href: o,
          ...i
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: r } = n, { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ D("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ D("img", {
          src: r ? r[a] : ""
        }));
        return i ? t.unshift(l) : t[0] = l, t;
      }
    },
    circleProgress: {
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, a = (n - r) / 2, l = n / 2, f = t[0];
        return t[0] = /* @__PURE__ */ D("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ D("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": r,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ D("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": r,
          stroke: o,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ D("text", {
          x: l,
          y: l + r,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var l;
        const r = (l = n.data) == null ? void 0 : l[e.name];
        if (!r)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: o = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: r.map((f) => {
            typeof f == "string" && (f = { action: f });
            const u = o[f.action];
            return u && (f = { className: a, ...u, ...f }), Et(i, f);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: e }) {
        let { format: n } = e.setting;
        if (!n)
          return t;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: r, type: i } = n, o = t[0];
        return typeof r == "function" ? t[0] = i === "html" ? { html: r(o) } : r(o) : i === "datetime" ? t[0] = _r(o, r) : i === "html" ? t[0] = { html: Et(r, o) } : t[0] = Et(r, o), t;
      }
    }
  }
};
Ln(Ra);
const iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ba,
  checkable: $a,
  nested: Ca,
  rich: Ra
}, Symbol.toStringTag, { value: "Module" }));
class Hn extends Ji {
}
U(Hn, "Component", so), U(Hn, "definePlugin", Ln), U(Hn, "removePlugin", ua), U(Hn, "plugins", iu);
var Ee, se;
class su {
  constructor(e) {
    S(this, Ee, void 0);
    S(this, se, void 0);
    O(this, Ee, e), O(this, se, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(g(this, Ee).parentElement.parentElement, g(this, Ee).parentElement), this.addActive(g(this, se).parentElement, g(this, se)), g(this, se).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    O(this, se, g(this, Ee)), this.addActive(g(this, se).parentElement, g(this, se)), O(this, Ee, document.querySelector(`[href='#${g(this, se).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${g(this, se).getAttribute("id")}']`) || document.querySelector(`[data-target='#${g(this, se).getAttribute("id")}']`)), this.addActive(g(this, Ee).parentElement.parentElement, g(this, Ee).parentElement);
  }
  addActive(e, n) {
    const r = e.children;
    Array.from(r).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function(o) {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(e) {
    return new Promise(function(n, r) {
      setTimeout(() => {
        e.classList.add("in"), n();
      }, 100);
    });
  }
}
Ee = new WeakMap(), se = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new su(t.target).showTarget());
});
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: Se,
  createDate: re,
  isSameDay: Gt,
  isSameYear: co,
  isSameMonth: Aa,
  isSameWeek: Zf,
  isToday: Qf,
  isYesterday: eu,
  isTomorrow: tu,
  isDBY: nu,
  formatDate: _r,
  formatDateSpan: ru,
  getTimeBeforeDesc: ou,
  calculateTimestamp: fo,
  formatString: Et,
  formatBytes: za,
  convertBytes: Fa,
  isObject: In,
  mergeDeep: er
}, Symbol.toStringTag, { value: "Module" }));
export {
  cu as Avatar,
  St as ContextMenu,
  Hn as DTable,
  Ct as Dropdown,
  po as EventBus,
  fs as Menu,
  su as NavTabs,
  ei as Scrollbar,
  Ya as addI18nMap,
  lu as browser,
  Va as getLangCode,
  fu as helpers,
  Pn as i18n,
  Jr as nativeEvents,
  qa as setLangCode,
  hl as store
};
