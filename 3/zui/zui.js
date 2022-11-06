var la = Object.defineProperty;
var ca = (e, t, n) => t in e ? la(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (ca(e, typeof t != "symbol" ? t + "" : t, n), n), ko = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var g = (e, t, n) => (ko(e, t, "read from private field"), n ? n.call(e) : t.get(e)), E = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, o) => (ko(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var G = (e, t, n) => (ko(e, t, "access private method"), n);
var fo, H, ls, cs, jt, fr, Mn = {}, fs = [], fa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function us(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function uo(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? fo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return gn(e, a, o, s, null);
}
function gn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ls : s };
  return s == null && H.vnode != null && H.vnode(r), r;
}
function ua() {
  return { current: null };
}
function _o(e) {
  return e.children;
}
function mn(e, t) {
  this.props = e, this.context = t;
}
function bt(e, t) {
  if (t == null)
    return e.__ ? bt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? bt(e) : null;
}
function _s(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _s(e);
  }
}
function ur(e) {
  (!e.__d && (e.__d = !0) && jt.push(e) && !An.__r++ || fr !== H.debounceRendering) && ((fr = H.debounceRendering) || setTimeout)(An);
}
function An() {
  for (var e; An.__r = jt.length; )
    e = jt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, Do(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? bt(r) : a, r.__h), vs(o, r), r.__e != a && _s(r)));
    });
}
function hs(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || fs, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? gn(null, c, null, null, c) : Array.isArray(c) ? gn(_o, { children: c }, null, null, null) : c.__b > 0 ? gn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      Do(e, c, u = u || Mn, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ps(c, f, e) : f = ds(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = bt(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = bt(o, i + 1)), ms(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      gs(d[i], d[++i], d[++i]);
}
function ps(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ps(o, t, n) : ds(n, o, o, s, o.__e, t));
  return t;
}
function ds(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function _a(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Nn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Nn(e, r, t[r], n[r], o);
}
function _r(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fa.test(t) ? n : n + "px";
}
function Nn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || _r(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || _r(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? pr : hr, r) : e.removeEventListener(t, r ? pr : hr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function hr(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function pr(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function Do(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = H.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new mn(d, m), i.constructor = y, i.render = pa), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = H.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === _o && h.key == null ? h.props.children : h, hs(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ha(n.__e, t, n, o, s, r, a, f);
    (h = H.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), H.__e($, t, n);
  }
}
function vs(e, t) {
  H.__c && H.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      H.__e(o, n.__v);
    }
  });
}
function ha(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && fo.call(e.childNodes), h = (p = n.props || Mn).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (_a(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, hs(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && bt(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && us(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && Nn(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Nn(e, "checked", _, p.checked, !1));
  }
  return e;
}
function gs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function ms(e, t, n) {
  var o, s;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || gs(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ms(o[s], t, typeof e.type != "function");
  n || e.__e == null || us(e.__e), e.__e = e.__d = void 0;
}
function pa(e, t, n) {
  return this.constructor(e, n);
}
function da(e, t, n) {
  var o, s, r;
  H.__ && H.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Do(t, e = (!o && n || t).__k = uo(_o, null, [e]), s || Mn, Mn, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? fo.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), vs(r, e);
}
fo = fs.slice, H = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ls = 0, cs = function(e) {
  return e != null && e.constructor === void 0;
}, mn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof e == "function" && (e = e(je({}, n), this.props)), e && je(n, e), e != null && this.__v && (t && this.__h.push(t), ur(this));
}, mn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ur(this));
}, mn.prototype.render = _o, jt = [], An.__r = 0;
var xe;
class va {
  constructor(t = "") {
    E(this, xe, void 0);
    typeof t == "object" ? R(this, xe, t) : R(this, xe, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    g(this, xe).addEventListener(t, n, o);
  }
  once(t, n, o) {
    g(this, xe).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    g(this, xe).removeEventListener(t, n, o);
  }
  emit(t) {
    return g(this, xe).dispatchEvent(t), t;
  }
}
xe = new WeakMap();
const $o = /* @__PURE__ */ new Set([
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
class Ho extends va {
  on(t, n, o) {
    super.on(t, n, o);
  }
  off(t, n, o) {
    super.off(t, n, o);
  }
  once(t, n, o) {
    super.once(t, n, o);
  }
  emit(t, n) {
    return typeof t == "string" && ($o.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Ho.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && ($o.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var $e, tn, Ze, Wt;
class dr extends Ho {
  constructor(n = "", o) {
    super(n);
    E(this, Ze);
    E(this, $e, /* @__PURE__ */ new Map());
    E(this, tn, void 0);
    R(this, tn, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = G(this, Ze, Wt).call(this, n), super.on(n, o, s), g(this, $e).set(o, [n, s]);
  }
  off(n, o, s) {
    n = G(this, Ze, Wt).call(this, n), super.off(n, o, s), g(this, $e).delete(o);
  }
  once(n, o, s) {
    n = G(this, Ze, Wt).call(this, n);
    const r = (a) => {
      o(a), g(this, $e).delete(r);
    };
    super.once(n, r, s), g(this, $e).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = G(this, Ze, Wt).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(g(this, $e).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), g(this, $e).clear();
  }
}
$e = new WeakMap(), tn = new WeakMap(), Ze = new WeakSet(), Wt = function(n) {
  const o = g(this, tn);
  return $o.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function ga(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), a;
    const l = r.indexOf("[");
    if (l > 0 && l < r.length - 1 && r.endsWith("]") && (a = r.substring(l + 1, r.length - 1), r = r.substring(0, l)), o = o[r], s.push(o), a !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(a) : o = o[a], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${a}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function ma(e, t, n) {
  const o = ga(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function yn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function On(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (yn(e) && yn(n))
    for (const o in n)
      yn(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), On(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return On(e, ...t);
}
function it(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((s) => {
      var a;
      const r = (a = o[s]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const s = (n = t[o]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
  }
  return e;
}
var Wo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Wo || {});
function ya(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Wo[n]).toFixed(t) + n);
}
const ba = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Wo[o];
};
var is, as;
let jo = (as = (is = document.documentElement.getAttribute("lang")) == null ? void 0 : is.toLowerCase()) != null ? as : "zh_cn", Pe;
function wa() {
  return jo;
}
function ka(e) {
  jo = e.toLowerCase();
}
function xa(e, t) {
  Pe || (Pe = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), On(Pe, e);
}
function un(e, t, n, o, s, r) {
  Array.isArray(e) ? Pe && e.unshift(Pe) : e = Pe ? [Pe, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const a = s || jo;
  let l;
  for (const f of e) {
    if (!f)
      continue;
    const h = f[a];
    if (!h)
      continue;
    const i = r && f === Pe ? `${r}.${t}` : t;
    if (l = ma(h, i), l !== void 0)
      break;
  }
  return l === void 0 ? o : n ? it(l, ...Array.isArray(n) ? n : [n]) : l;
}
un.addLang = xa;
un.getCode = wa;
un.setCode = ka;
function $a(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Ee, lt, ee;
class Pn {
  constructor(t, n) {
    E(this, Ee, void 0);
    E(this, lt, void 0);
    E(this, ee, void 0);
    var o;
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && R(this, ee, new dr(t, { customEventSuffix: `.${this.constructor.KEY}` })), R(this, Ee, { ...this.constructor.DEFAULT, ...t instanceof HTMLElement ? $a(t.dataset) : null, ...n }), this.constructor.all.set(t, this), R(this, lt, t), this.init(), (o = g(this, ee)) == null || o.emit("inited", this);
  }
  get options() {
    return g(this, Ee);
  }
  get element() {
    return g(this, lt);
  }
  get events() {
    return g(this, ee);
  }
  init() {
  }
  setOptions(t) {
    return t && Object.assign(g(this, Ee), t), g(this, Ee);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(g(this, lt)), g(this, ee) && (g(this, ee).emit("destroyed", this), g(this, ee).offAll());
  }
  on(t, n, o) {
    var s;
    (s = g(this, ee)) == null || s.on(t, n, o);
  }
  once(t, n, o) {
    var s;
    (s = g(this, ee)) == null || s.once(t, n, o);
  }
  off(t, n, o) {
    var s;
    (s = g(this, ee)) == null || s.off(t, n, o);
  }
  emit(t, n) {
    var a;
    let o = dr.createEvent(t, n);
    const s = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = g(this, Ee)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (a = g(this, ee)) == null ? void 0 : a.emit(o), o;
  }
  i18n(t, n, o) {
    var s;
    return (s = un(g(this, Ee).i18n, t, n, o, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
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
    const n = /* @__PURE__ */ new Map();
    return this.allComponents.set(t, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, n) {
    return this.get(t) || new this(t, n);
  }
}
Ee = new WeakMap(), lt = new WeakMap(), ee = new WeakMap(), A(Pn, "EVENTS", !1), A(Pn, "allComponents", /* @__PURE__ */ new Map());
class ho extends Pn {
  constructor() {
    super(...arguments);
    A(this, "ref", ua());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const o = this.constructor.Component;
    da(/* @__PURE__ */ uo(o, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var Io, I, ys, bs, It, vr, ws = {}, ks = [], Ea = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function xs(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function J(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Io.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return bn(e, a, o, s, null);
}
function bn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ys : s };
  return s == null && I.vnode != null && I.vnode(r), r;
}
function Sa() {
  return { current: null };
}
function Uo(e) {
  return e.children;
}
function Ut(e, t) {
  this.props = e, this.context = t;
}
function wt(e, t) {
  if (t == null)
    return e.__ ? wt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? wt(e) : null;
}
function $s(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $s(e);
  }
}
function gr(e) {
  (!e.__d && (e.__d = !0) && It.push(e) && !Ln.__r++ || vr !== I.debounceRendering) && ((vr = I.debounceRendering) || setTimeout)(Ln);
}
function Ln() {
  for (var e; Ln.__r = It.length; )
    e = It.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), It = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Ie({}, r)).__v = r.__v + 1, Rs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? wt(r) : a, r.__h), Ra(o, r), r.__e != a && $s(r)));
    });
}
function Es(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || ks, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? bn(null, c, null, null, c) : Array.isArray(c) ? bn(Uo, { children: c }, null, null, null) : c.__b > 0 ? bn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      Rs(e, c, u = u || ws, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Ss(c, f, e) : f = Cs(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = wt(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = wt(o, i + 1)), As(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      Ms(d[i], d[++i], d[++i]);
}
function Ss(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ss(o, t, n) : Cs(n, o, o, s, o.__e, t));
  return t;
}
function Cs(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Ca(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Tn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Tn(e, r, t[r], n[r], o);
}
function mr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ea.test(t) ? n : n + "px";
}
function Tn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || mr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || mr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? br : yr, r) : e.removeEventListener(t, r ? br : yr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function yr(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function br(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Rs(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = I.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new Ut(d, m), i.constructor = y, i.render = Aa), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ie({}, i.__s)), Ie(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = I.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ie(Ie({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Uo && h.key == null ? h.props.children : h, Es(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ma(n.__e, t, n, o, s, r, a, f);
    (h = I.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), I.__e($, t, n);
  }
}
function Ra(e, t) {
  I.__c && I.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      I.__e(o, n.__v);
    }
  });
}
function Ma(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Io.call(e.childNodes), h = (p = n.props || ws).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ca(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, Es(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && wt(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && xs(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && Tn(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Tn(e, "checked", _, p.checked, !1));
  }
  return e;
}
function Ms(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    I.__e(o, n);
  }
}
function As(e, t, n) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ms(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        I.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && As(o[s], t, typeof e.type != "function");
  n || e.__e == null || xs(e.__e), e.__e = e.__d = void 0;
}
function Aa(e, t, n) {
  return this.constructor(e, n);
}
Io = ks.slice, I = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ys = 0, bs = function(e) {
  return e != null && e.constructor === void 0;
}, Ut.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof e == "function" && (e = e(Ie({}, n), this.props)), e && Ie(n, e), e != null && this.__v && (t && this.__h.push(t), gr(this));
}, Ut.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), gr(this));
}, Ut.prototype.render = Uo, It = [], Ln.__r = 0;
const T = (...e) => {
  const t = e.map((n) => Array.isArray(n) ? T(...n) : typeof n == "function" ? T(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((o) => {
    const s = n[o];
    return typeof s == "function" ? !!s() : !!s;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return t.length ? t.join(" ") : void 0;
};
function Na({
  component: e = "div",
  className: t,
  children: n,
  attrs: o
}) {
  return J(e, {
    className: T(t),
    ...o
  }, n);
}
function Ns({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: a,
  icon: l,
  text: f,
  target: h,
  trailingIcon: i,
  hint: p,
  style: u,
  onClick: c
}) {
  const _ = [
    typeof l == "string" ? /* @__PURE__ */ J("i", {
      class: `icon ${l}`
    }) : l,
    /* @__PURE__ */ J("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ J("i", {
      class: `icon ${i}`
    }) : i
  ];
  return J(e, {
    className: T(t, { disabled: r, active: a }),
    title: p,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: c,
    ...o
  }, ..._);
}
function Oa({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: a
}) {
  return J(e, {
    className: T(t),
    style: r,
    onClick: a,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function Pa({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: a,
  children: l
}) {
  return J(e, {
    className: T(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: a,
    ...r
  }, l);
}
function La(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: a,
    generators: l,
    onGenerate: f,
    onRenderItem: h,
    ...i
  } = e, p = [n], u = { ...o }, c = [], _ = [];
  return s.forEach((b) => {
    var v;
    const d = [];
    typeof b == "string" && l && l[b] && (b = l[b]), typeof b == "function" ? f ? d.push(...f.call(a, b, c, ...r)) : d.push(...(v = b.call(a, c, ...r)) != null ? v : []) : d.push(b), d.forEach((m) => {
      var w;
      m != null && (typeof m == "object" && !cs(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? c.push(
        /* @__PURE__ */ uo("div", {
          className: T(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(w = m.attrs) != null ? w : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && p.push(m.className), m.children && c.push(m.children), m.attrs && Object.assign(i, m.attrs)) : c.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: T(p),
    style: u,
    ...i
  }, c];
}
function Eo({
  tag: e = "div",
  ...t
}) {
  const [n, o] = La(t);
  return uo(e, n, ...o);
}
function Ta(e) {
  return /* @__PURE__ */ J(Eo, {
    ...e
  });
}
const Jn = class extends Ut {
  constructor() {
    super(...arguments);
    A(this, "ref", Sa());
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var n, o;
    (o = (n = this.props).beforeDestroy) == null || o.call(n, { menu: this });
  }
  afterRender(n) {
    var o, s;
    (s = (o = this.props).afterRender) == null || s.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, s, r) {
    s && s.call(r.target, r);
    const { onClickItem: a } = this.props;
    a && a({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, s) {
    const { itemProps: r, onClickItem: a } = n, l = { key: s, ...o };
    return r && Object.assign(l, r[o.type || "item"]), (a || o.onClick) && (l.onClick = this.handleItemClick.bind(this, l, s, o.onClick)), l.className = T(l.className), l;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const d = a[o.type || "item"];
        if (d)
          return /* @__PURE__ */ J(d, {
            ...r
          });
      } else if (typeof a == "function") {
        const d = a.call(this, r, J);
        if (bs(d))
          return d;
        typeof d == "object" && Object.assign(r, d);
      }
    }
    const { type: l = "item", component: f, key: h = s, rootAttrs: i, rootClass: p, rootStyle: u, rootChildren: c, ..._ } = r, b = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || Jn.ItemComponents[l] : f;
    return Object.assign(_, {
      type: l,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(b, {
      className: T(p),
      children: c,
      style: u,
      key: h,
      ...i
    }, {
      ..._,
      type: l,
      component: typeof f == "string" ? f : void 0
    });
  }
  renderTypedItem(n, o, s) {
    const { children: r, className: a, key: l, ...f } = o;
    return /* @__PURE__ */ J("li", {
      className: T(`${this.name}-${s.type}`, a),
      key: l,
      ...f
    }, /* @__PURE__ */ J(n, {
      ...s
    }), typeof r == "function" ? r() : r);
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      itemProps: r,
      className: a,
      items: l,
      children: f,
      itemRender: h,
      onClickItem: i,
      beforeRender: p,
      afterRender: u,
      beforeDestroy: c,
      ..._
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ J(b, {
      class: T(this.name, a),
      ..._,
      ref: this.ref
    }, l && l.map(this.renderItem.bind(this, n)), f);
  }
};
let at = Jn;
A(at, "ItemComponents", {
  divider: Na,
  item: Ns,
  heading: Oa,
  space: Pa,
  custom: Ta
}), A(at, "ROOT_TAG", "menu");
class Da extends ho {
}
A(Da, "Component", at);
function wr({
  ...e
}) {
  return /* @__PURE__ */ J(Ns, {
    ...e
  });
}
var nn, ue, ct;
class Bo extends at {
  constructor(n) {
    var o;
    super(n);
    E(this, nn, /* @__PURE__ */ new Set());
    E(this, ue, void 0);
    E(this, ct, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    R(this, ue, n.nestedShow === void 0), g(this, ue) && (this.state = { nestedShow: (o = n.defaultNestedShow) != null ? o : {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: s, defaultNestedShow: r, controlledMenu: a, ...l } = n;
    return l;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const s = this.constructor;
    return /* @__PURE__ */ J(s, {
      items: o,
      name: this.props.name,
      nestedShow: g(this, ue) ? this.state.nestedShow : this.props.nestedShow,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: this.props.controlledMenu || this,
      itemProps: this.props.itemProps,
      onClickItem: this.props.onClickItem,
      afterRender: this.props.afterRender,
      beforeRender: this.props.beforeRender,
      beforeDestroy: this.props.beforeDestroy,
      itemRender: this.props.itemRender
    });
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, s) {
    var h;
    const r = super.getItemRenderProps(n, o, s);
    if (!this.isNestedItem(r))
      return r;
    const a = (h = r.key) != null ? h : s;
    g(this, nn).add(a);
    const l = this.isNestedMenuShow(a);
    if (l && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = wr), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: g(this, ct).bind(this, a, !0),
        onMouseLeave: g(this, ct).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = r;
      r.onClick = (p) => {
        g(this, ct).call(this, a, void 0, p), i == null || i(p);
      };
    }
    const f = this.renderToggleIcon(l, r);
    return f && (r.children = [r.children, f]), r.rootClass = [r.rootClass, "has-nested-menu", l ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = g(this, ue) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!g(this, ue))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...g(this, nn).values()].reduce((a, l) => (a[l] = !0, a), {}) : r = {}), o === void 0)
      o = !r[n];
    else if (!!r[n] == !!o)
      return !1;
    return o ? r[n] = o : delete r[n], this.setState({ nestedShow: { ...r } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    !g(this, ue) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !g(this, ue) || this.setState({ nestedShow: !1 });
  }
}
nn = new WeakMap(), ue = new WeakMap(), ct = new WeakMap(), A(Bo, "ItemComponents", {
  item: wr
});
class Ha extends ho {
}
A(Ha, "Component", Bo);
var Os, So, Ps, Wa = [];
function ja(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Os.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return Ia(e, a, o, s, null);
}
function Ia(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ps : s };
  return s == null && So.vnode != null && So.vnode(r), r;
}
Os = Wa.slice, So = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Ps = 0;
class Ls extends Bo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = T(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ ja("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
class Ua extends ho {
}
A(Ua, "Component", Ls);
var zo, U, Ts, Bt, kr, Ds = {}, Hs = [], Ba = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ue(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ws(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function xr(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? zo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return wn(e, a, o, s, null);
}
function wn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Ts : s };
  return s == null && U.vnode != null && U.vnode(r), r;
}
function Fo(e) {
  return e.children;
}
function zt(e, t) {
  this.props = e, this.context = t;
}
function kt(e, t) {
  if (t == null)
    return e.__ ? kt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kt(e) : null;
}
function js(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return js(e);
  }
}
function $r(e) {
  (!e.__d && (e.__d = !0) && Bt.push(e) && !Dn.__r++ || kr !== U.debounceRendering) && ((kr = U.debounceRendering) || setTimeout)(Dn);
}
function Dn() {
  for (var e; Dn.__r = Bt.length; )
    e = Bt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Bt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Ue({}, r)).__v = r.__v + 1, zs(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? kt(r) : a, r.__h), Fa(o, r), r.__e != a && js(r)));
    });
}
function Is(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || Hs, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? wn(null, c, null, null, c) : Array.isArray(c) ? wn(Fo, { children: c }, null, null, null) : c.__b > 0 ? wn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      zs(e, c, u = u || Ds, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Us(c, f, e) : f = Bs(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = kt(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = kt(o, i + 1)), Vs(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      Fs(d[i], d[++i], d[++i]);
}
function Us(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Us(o, t, n) : Bs(n, o, o, s, o.__e, t));
  return t;
}
function Bs(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function za(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Hn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Hn(e, r, t[r], n[r], o);
}
function Er(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ba.test(t) ? n : n + "px";
}
function Hn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Er(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Er(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Cr : Sr, r) : e.removeEventListener(t, r ? Cr : Sr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function Sr(e) {
  this.l[e.type + !1](U.event ? U.event(e) : e);
}
function Cr(e) {
  this.l[e.type + !0](U.event ? U.event(e) : e);
}
function zs(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = U.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new zt(d, m), i.constructor = y, i.render = qa), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ue({}, i.__s)), Ue(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = U.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ue(Ue({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === Fo && h.key == null ? h.props.children : h, Is(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Va(n.__e, t, n, o, s, r, a, f);
    (h = U.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), U.__e($, t, n);
  }
}
function Fa(e, t) {
  U.__c && U.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      U.__e(o, n.__v);
    }
  });
}
function Va(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && zo.call(e.childNodes), h = (p = n.props || Ds).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (za(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, Is(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && kt(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Ws(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && Hn(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Hn(e, "checked", _, p.checked, !1));
  }
  return e;
}
function Fs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    U.__e(o, n);
  }
}
function Vs(e, t, n) {
  var o, s;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fs(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        U.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Vs(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ws(e.__e), e.__e = e.__d = void 0;
}
function qa(e, t, n) {
  return this.constructor(e, n);
}
zo = Hs.slice, U = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Ts = 0, zt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ue({}, this.state), typeof e == "function" && (e = e(Ue({}, n), this.props)), e && Ue(n, e), e != null && this.__v && (t && this.__h.push(t), $r(this));
}, zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $r(this));
}, zt.prototype.render = Fo, Bt = [], Dn.__r = 0;
var Qe, et;
class Rr extends zt {
  constructor(n) {
    var o;
    super(n);
    E(this, Qe, 0);
    E(this, et, null);
    A(this, "_handleWheel", (n) => {
      var r;
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((r = this.props.wheelSpeed) != null ? r : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    A(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (g(this, Qe) && cancelAnimationFrame(g(this, Qe)), R(this, Qe, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), R(this, Qe, 0);
      })), n.preventDefault());
    });
    A(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    A(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    A(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, f = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(f * l / a), n.preventDefault();
    });
    this.state = {
      scrollPos: (o = this.props.defaultScrollPos) != null ? o : 0,
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
    const { scrollSize: n, clientSize: o } = this.props;
    return Math.max(0, n - o);
  }
  get barSize() {
    const { clientSize: n, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (R(this, et, typeof n == "string" ? document : n.current), g(this, et).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), g(this, et) && g(this, et).removeEventListener("wheel", this._handleWheel);
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
    var s;
    const { onScroll: o } = this.props;
    o && o(n, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: s = 12,
      className: r,
      style: a,
      left: l,
      top: f,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: p, scrollPos: u } = this, { dragStart: c } = this.state, _ = {
      left: l,
      top: f,
      bottom: h,
      right: i,
      ...a
    }, b = {};
    return o === "horz" ? (_.height = s, _.width = n, b.width = this.barSize, b.left = Math.round(Math.min(p, u) * (n - b.width) / p)) : (_.width = s, _.height = n, b.height = this.barSize, b.top = Math.round(Math.min(p, u) * (n - b.height) / p)), /* @__PURE__ */ xr("div", {
      className: T("scrollbar", r, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": c
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ xr("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Qe = new WeakMap(), et = new WeakMap();
function Ga(e) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(t), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function Ya(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Ka(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const a = o.top <= s && o.top + o.height >= 0, l = o.left <= r && o.left + o.width >= 0;
  return a && l;
}
const mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Ga,
  domReady: Ya,
  isElementVisible: Ka,
  classes: T
}, Symbol.toStringTag, { value: "Module" }));
let Xa = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var on, Le, _e, ft, ut, kn;
const rr = class {
  constructor(t, n = "local") {
    E(this, ut);
    E(this, on, void 0);
    E(this, Le, void 0);
    E(this, _e, void 0);
    E(this, ft, void 0);
    R(this, on, n), R(this, Le, `ZUI_STORE:${t != null ? t : Xa()}`), R(this, _e, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return g(this, on);
  }
  get session() {
    return this.type === "session" ? this : (g(this, ft) || R(this, ft, new rr(g(this, Le), "session")), g(this, ft));
  }
  get(t, n) {
    const o = g(this, _e).getItem(G(this, ut, kn).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o != null ? o : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    g(this, _e).setItem(G(this, ut, kn).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    g(this, _e).removeItem(G(this, ut, kn).call(this, t));
  }
  each(t) {
    for (let n = 0; n < g(this, _e).length; n++) {
      const o = g(this, _e).key(n);
      if (o != null && o.startsWith(g(this, Le))) {
        const s = g(this, _e).getItem(o);
        typeof s == "string" && t(o.substring(g(this, Le).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((n, o) => {
      t[n] = o;
    }), t;
  }
};
let Wn = rr;
on = new WeakMap(), Le = new WeakMap(), _e = new WeakMap(), ft = new WeakMap(), ut = new WeakSet(), kn = function(t) {
  return `${g(this, Le)}:${t}`;
};
const Ja = new Wn("DEFAULT");
function Za(e, t = "local") {
  return new Wn(e, t);
}
Object.assign(Ja, { create: Za });
var Vo, B, qs, Ft, Mr, Gs = {}, Ys = [], Qa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ks(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ar(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Vo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return xn(e, a, o, s, null);
}
function xn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qs : s };
  return s == null && B.vnode != null && B.vnode(r), r;
}
function qo(e) {
  return e.children;
}
function Vt(e, t) {
  this.props = e, this.context = t;
}
function xt(e, t) {
  if (t == null)
    return e.__ ? xt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xt(e) : null;
}
function Xs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xs(e);
  }
}
function Nr(e) {
  (!e.__d && (e.__d = !0) && Ft.push(e) && !jn.__r++ || Mr !== B.debounceRendering) && ((Mr = B.debounceRendering) || setTimeout)(jn);
}
function jn() {
  for (var e; jn.__r = Ft.length; )
    e = Ft.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ft = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Be({}, r)).__v = r.__v + 1, ei(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? xt(r) : a, r.__h), tl(o, r), r.__e != a && Xs(r)));
    });
}
function Js(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || Ys, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? xn(null, c, null, null, c) : Array.isArray(c) ? xn(qo, { children: c }, null, null, null) : c.__b > 0 ? xn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      ei(e, c, u = u || Gs, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Zs(c, f, e) : f = Qs(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = xt(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = xt(o, i + 1)), ni(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      ti(d[i], d[++i], d[++i]);
}
function Zs(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Zs(o, t, n) : Qs(n, o, o, s, o.__e, t));
  return t;
}
function Qs(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function el(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || In(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || In(e, r, t[r], n[r], o);
}
function Or(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Qa.test(t) ? n : n + "px";
}
function In(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Or(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Or(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Lr : Pr, r) : e.removeEventListener(t, r ? Lr : Pr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function Pr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function Lr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function ei(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = B.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new Vt(d, m), i.constructor = y, i.render = ol), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Be({}, i.__s)), Be(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = B.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Be(Be({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === qo && h.key == null ? h.props.children : h, Js(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = nl(n.__e, t, n, o, s, r, a, f);
    (h = B.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), B.__e($, t, n);
  }
}
function tl(e, t) {
  B.__c && B.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      B.__e(o, n.__v);
    }
  });
}
function nl(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && Vo.call(e.childNodes), h = (p = n.props || Gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (el(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, Js(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && xt(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Ks(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && In(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && In(e, "checked", _, p.checked, !1));
  }
  return e;
}
function ti(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    B.__e(o, n);
  }
}
function ni(e, t, n) {
  var o, s;
  if (B.unmount && B.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ti(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ni(o[s], t, typeof e.type != "function");
  n || e.__e == null || Ks(e.__e), e.__e = e.__d = void 0;
}
function ol(e, t, n) {
  return this.constructor(e, n);
}
Vo = Ys.slice, B = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, qs = 0, Vt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof e == "function" && (e = e(Be({}, n), this.props)), e && Be(n, e), e != null && this.__v && (t && this.__h.push(t), Nr(this));
}, Vt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Nr(this));
}, Vt.prototype.render = qo, Ft = [], jn.__r = 0;
class yf extends Vt {
  render() {
    const { size: t, rounded: n, className: o, style: s, src: r, text: a, children: l, ...f } = this.props, h = [o], i = { ...s };
    let p = null;
    return r ? p = /* @__PURE__ */ Ar("img", {
      src: r,
      alt: a
    }) : p = a, typeof t == "number" ? (i.width = t, i.height = t) : typeof t == "string" && h.push(`avatar-${t}`), typeof n == "string" && h.push(`rounded-${n}`), /* @__PURE__ */ Ar("div", {
      className: T(h),
      style: i,
      ...f
    }, p, l);
  }
}
function rl() {
  const e = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
}
function sl() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function il(e, t) {
  rl(), e.classList.add("block"), Tr(e, t), e.onclick = (n) => al(n, e), window.addEventListener("resize", () => {
    Tr(e, t);
  });
}
function oi(e) {
  var t;
  sl(), (t = e.classList) == null || t.remove("block");
}
function Tr(e, t) {
  const n = e.querySelector(".modal-dialog");
  if (!n)
    return;
  const o = Math.max(0, (window.innerHeight - n.clientHeight) / 2);
  if (t === "fit") {
    n.style.top = `${o > 50 ? Math.floor(o * 2 / 3) : o}px`;
    return;
  }
  if (t === "center") {
    n.style.top = `${o}px`;
    return;
  }
  n.style.top = t;
}
function al(e, t) {
  e.target.closest("[data-dismiss=modal]") && (e.stopPropagation(), oi(t));
}
function ll(e) {
  var t, n;
  return e instanceof HTMLAnchorElement ? (n = (t = (e.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : n.selector : e.dataset.target;
}
document.addEventListener("click", (e) => {
  const t = e.target, n = t.closest("[data-toggle=modal]");
  if (n) {
    const o = ll(n);
    if (!o)
      return;
    const s = document.querySelector(o);
    if (!s)
      return;
    il(s, n.dataset.position || "fit");
  } else
    t.className.includes("modal") && oi(t);
});
var po, W, ri, qt, Dr, Un = {}, si = [], cl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ii(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Go(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? po.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return $n(e, a, o, s, null);
}
function $n(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++ri : s };
  return s == null && W.vnode != null && W.vnode(r), r;
}
function vo(e) {
  return e.children;
}
function En(e, t) {
  this.props = e, this.context = t;
}
function $t(e, t) {
  if (t == null)
    return e.__ ? $t(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $t(e) : null;
}
function ai(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ai(e);
  }
}
function Hr(e) {
  (!e.__d && (e.__d = !0) && qt.push(e) && !Bn.__r++ || Dr !== W.debounceRendering) && ((Dr = W.debounceRendering) || setTimeout)(Bn);
}
function Bn() {
  for (var e; Bn.__r = qt.length; )
    e = qt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = ze({}, r)).__v = r.__v + 1, Yo(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? $t(r) : a, r.__h), ui(o, r), r.__e != a && ai(r)));
    });
}
function li(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || si, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? $n(null, c, null, null, c) : Array.isArray(c) ? $n(vo, { children: c }, null, null, null) : c.__b > 0 ? $n(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      Yo(e, c, u = u || Un, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = ci(c, f, e) : f = fi(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = $t(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = $t(o, i + 1)), hi(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      _i(d[i], d[++i], d[++i]);
}
function ci(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ci(o, t, n) : fi(n, o, o, s, o.__e, t));
  return t;
}
function fi(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function fl(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || zn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || zn(e, r, t[r], n[r], o);
}
function Wr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cl.test(t) ? n : n + "px";
}
function zn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Wr(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Wr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ir : jr, r) : e.removeEventListener(t, r ? Ir : jr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function jr(e) {
  this.l[e.type + !1](W.event ? W.event(e) : e);
}
function Ir(e) {
  this.l[e.type + !0](W.event ? W.event(e) : e);
}
function Yo(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = W.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new En(d, m), i.constructor = y, i.render = _l), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ze({}, i.__s)), ze(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = W.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = ze(ze({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === vo && h.key == null ? h.props.children : h, li(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ul(n.__e, t, n, o, s, r, a, f);
    (h = W.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), W.__e($, t, n);
  }
}
function ui(e, t) {
  W.__c && W.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      W.__e(o, n.__v);
    }
  });
}
function ul(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && po.call(e.childNodes), h = (p = n.props || Un).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (fl(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, li(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && $t(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && ii(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && zn(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && zn(e, "checked", _, p.checked, !1));
  }
  return e;
}
function _i(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    W.__e(o, n);
  }
}
function hi(e, t, n) {
  var o, s;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || _i(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        W.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && hi(o[s], t, typeof e.type != "function");
  n || e.__e == null || ii(e.__e), e.__e = e.__d = void 0;
}
function _l(e, t, n) {
  return this.constructor(e, n);
}
function hl(e, t, n) {
  var o, s, r;
  W.__ && W.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Yo(t, e = (!o && n || t).__k = Go(vo, null, [e]), s || Un, Un, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? po.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), ui(r, e);
}
po = si.slice, W = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ri = 0, En.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, n), this.props)), e && ze(n, e), e != null && this.__v && (t && this.__h.push(t), Hr(this));
}, En.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Hr(this));
}, En.prototype.render = vo, qt = [], Bn.__r = 0;
function re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ot(e) {
  var t = re(e).Element;
  return e instanceof t || e instanceof Element;
}
function oe(e) {
  var t = re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ko(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var nt = Math.max, Fn = Math.min, Et = Math.round;
function Co() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pi() {
  return !/^((?!chrome|android).)*safari/i.test(Co());
}
function St(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && oe(e) && (s = e.offsetWidth > 0 && Et(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Et(o.height) / e.offsetHeight || 1);
  var a = ot(e) ? re(e) : window, l = a.visualViewport, f = !pi() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, p = o.width / s, u = o.height / r;
  return {
    width: p,
    height: u,
    top: i,
    right: h + p,
    bottom: i + u,
    left: h,
    x: h,
    y: i
  };
}
function Xo(e) {
  var t = re(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function pl(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dl(e) {
  return e === re(e) || !oe(e) ? Xo(e) : pl(e);
}
function ge(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  return ((ot(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jo(e) {
  return St(Ge(e)).left + Xo(e).scrollLeft;
}
function ce(e) {
  return re(e).getComputedStyle(e);
}
function Zo(e) {
  var t = ce(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function vl(e) {
  var t = e.getBoundingClientRect(), n = Et(t.width) / e.offsetWidth || 1, o = Et(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function gl(e, t, n) {
  n === void 0 && (n = !1);
  var o = oe(t), s = oe(t) && vl(t), r = Ge(t), a = St(e, s, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ge(t) !== "body" || Zo(r)) && (l = dl(t)), oe(t) ? (f = St(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : r && (f.x = Jo(r))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function di(e) {
  var t = St(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function go(e) {
  return ge(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ko(e) ? e.host : null) || Ge(e);
}
function vi(e) {
  return ["html", "body", "#document"].indexOf(ge(e)) >= 0 ? e.ownerDocument.body : oe(e) && Zo(e) ? e : vi(go(e));
}
function Gt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = vi(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = re(o), a = s ? [r].concat(r.visualViewport || [], Zo(o) ? o : []) : o, l = t.concat(a);
  return s ? l : l.concat(Gt(go(a)));
}
function ml(e) {
  return ["table", "td", "th"].indexOf(ge(e)) >= 0;
}
function Ur(e) {
  return !oe(e) || ce(e).position === "fixed" ? null : e.offsetParent;
}
function yl(e) {
  var t = /firefox/i.test(Co()), n = /Trident/i.test(Co());
  if (n && oe(e)) {
    var o = ce(e);
    if (o.position === "fixed")
      return null;
  }
  var s = go(e);
  for (Ko(s) && (s = s.host); oe(s) && ["html", "body"].indexOf(ge(s)) < 0; ) {
    var r = ce(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = re(e), n = Ur(e); n && ml(n) && ce(n).position === "static"; )
    n = Ur(n);
  return n && (ge(n) === "html" || ge(n) === "body" && ce(n).position === "static") ? t : n || yl(e) || t;
}
var le = "top", me = "bottom", qe = "right", Re = "left", yo = "auto", bo = [le, me, qe, Re], Ct = "start", Xt = "end", bl = "clippingParents", gi = "viewport", Ht = "popper", wl = "reference", Br = /* @__PURE__ */ bo.reduce(function(e, t) {
  return e.concat([t + "-" + Ct, t + "-" + Xt]);
}, []), kl = /* @__PURE__ */ [].concat(bo, [yo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ct, t + "-" + Xt]);
}, []), xl = "beforeRead", $l = "read", El = "afterRead", Sl = "beforeMain", Cl = "main", Rl = "afterMain", Ml = "beforeWrite", Al = "write", Nl = "afterWrite", Ro = [xl, $l, El, Sl, Cl, Rl, Ml, Al, Nl];
function Ol(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var f = t.get(l);
        f && s(f);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function Pl(e) {
  var t = Ol(e);
  return Ro.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Ll(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(s, r) {
    return s.replace(/%s/, r);
  }, e);
}
var Je = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Tl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', zr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Dl(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), zr).filter(function(n, o, s) {
      return s.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Oe(Je, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Oe(Je, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ro.indexOf(t.phase) < 0 && console.error(Oe(Je, t.name, '"phase"', "either " + Ro.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Oe(Je, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Oe(Je, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Oe(Je, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Oe(Je, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + zr.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o;
        }) == null && console.error(Oe(Tl, String(t.name), o, o));
      });
    });
  });
}
function Hl(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var s = t(o);
    if (!n.has(s))
      return n.add(s), !0;
  });
}
function Me(e) {
  return e.split("-")[0];
}
function Wl(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function jl(e, t) {
  var n = re(e), o = Ge(e), s = n.visualViewport, r = o.clientWidth, a = o.clientHeight, l = 0, f = 0;
  if (s) {
    r = s.width, a = s.height;
    var h = pi();
    (h || !h && t === "fixed") && (l = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: r,
    height: a,
    x: l + Jo(e),
    y: f
  };
}
function Il(e) {
  var t, n = Ge(e), o = Xo(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = nt(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = nt(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -o.scrollLeft + Jo(e), f = -o.scrollTop;
  return ce(s || n).direction === "rtl" && (l += nt(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: a,
    x: l,
    y: f
  };
}
function Ul(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ko(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Mo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Bl(e, t) {
  var n = St(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Fr(e, t, n) {
  return t === gi ? Mo(jl(e, n)) : ot(t) ? Bl(t, n) : Mo(Il(Ge(e)));
}
function zl(e) {
  var t = Gt(go(e)), n = ["absolute", "fixed"].indexOf(ce(e).position) >= 0, o = n && oe(e) ? mo(e) : e;
  return ot(o) ? t.filter(function(s) {
    return ot(s) && Ul(s, o) && ge(s) !== "body";
  }) : [];
}
function Fl(e, t, n, o) {
  var s = t === "clippingParents" ? zl(e) : [].concat(t), r = [].concat(s, [n]), a = r[0], l = r.reduce(function(f, h) {
    var i = Fr(e, h, o);
    return f.top = nt(i.top, f.top), f.right = Fn(i.right, f.right), f.bottom = Fn(i.bottom, f.bottom), f.left = nt(i.left, f.left), f;
  }, Fr(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Rt(e) {
  return e.split("-")[1];
}
function mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yi(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Me(o) : null, r = o ? Rt(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case le:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case me:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case qe:
      f = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Re:
      f = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? mi(s) : null;
  if (h != null) {
    var i = h === "y" ? "height" : "width";
    switch (r) {
      case Ct:
        f[h] = f[h] - (t[i] / 2 - n[i] / 2);
        break;
      case Xt:
        f[h] = f[h] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function bi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vl(e) {
  return Object.assign({}, bi(), e);
}
function ql(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
function Qo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, a = r === void 0 ? e.strategy : r, l = n.boundary, f = l === void 0 ? bl : l, h = n.rootBoundary, i = h === void 0 ? gi : h, p = n.elementContext, u = p === void 0 ? Ht : p, c = n.altBoundary, _ = c === void 0 ? !1 : c, b = n.padding, d = b === void 0 ? 0 : b, v = Vl(typeof d != "number" ? d : ql(d, bo)), m = u === Ht ? wl : Ht, w = e.rects.popper, k = e.elements[_ ? m : u], x = Fl(ot(k) ? k : k.contextElement || Ge(e.elements.popper), f, i, a), y = St(e.elements.reference), $ = yi({
    reference: y,
    element: w,
    strategy: "absolute",
    placement: s
  }), S = Mo(Object.assign({}, w, $)), N = u === Ht ? S : y, L = {
    top: x.top - N.top + v.top,
    bottom: N.bottom - x.bottom + v.bottom,
    left: x.left - N.left + v.left,
    right: N.right - x.right + v.right
  }, O = e.modifiersData.offset;
  if (u === Ht && O) {
    var q = O[s];
    Object.keys(L).forEach(function(F) {
      var se = [qe, me].indexOf(F) >= 0 ? 1 : -1, Y = [le, me].indexOf(F) >= 0 ? "y" : "x";
      L[F] += q[Y] * se;
    });
  }
  return L;
}
var Vr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", qr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Gr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Yl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? qr : s;
  return function(l, f, h) {
    h === void 0 && (h = r);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qr, r),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, p = [], u = !1, c = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        b(), i.options = Object.assign({}, r, i.options, m), i.scrollParents = {
          reference: ot(l) ? Gt(l) : l.contextElement ? Gt(l.contextElement) : [],
          popper: Gt(f)
        };
        var w = Pl(Wl([].concat(o, i.options.modifiers)));
        if (i.orderedModifiers = w.filter(function(O) {
          return O.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Hl([].concat(w, i.options.modifiers), function(O) {
            var q = O.name;
            return q;
          });
          if (Dl(k), Me(i.options.placement) === yo) {
            var x = i.orderedModifiers.find(function(O) {
              var q = O.name;
              return q === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ce(f), $ = y.marginTop, S = y.marginRight, N = y.marginBottom, L = y.marginLeft;
          [$, S, N, L].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return _(), c.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, w = v.popper;
          if (!Gr(m, w)) {
            process.env.NODE_ENV !== "production" && console.error(Vr);
            return;
          }
          i.rects = {
            reference: gl(m, mo(w), i.options.strategy === "fixed"),
            popper: di(w)
          }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
            return i.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var k = 0, x = 0; x < i.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Gl);
              break;
            }
            if (i.reset === !0) {
              i.reset = !1, x = -1;
              continue;
            }
            var y = i.orderedModifiers[x], $ = y.fn, S = y.options, N = S === void 0 ? {} : S, L = y.name;
            typeof $ == "function" && (i = $({
              state: i,
              options: N,
              name: L,
              instance: c
            }) || i);
          }
        }
      },
      update: Ll(function() {
        return new Promise(function(d) {
          c.forceUpdate(), d(i);
        });
      }),
      destroy: function() {
        b(), u = !0;
      }
    };
    if (!Gr(l, f))
      return process.env.NODE_ENV !== "production" && console.error(Vr), c;
    c.setOptions(h).then(function(d) {
      !u && h.onFirstUpdate && h.onFirstUpdate(d);
    });
    function _() {
      i.orderedModifiers.forEach(function(d) {
        var v = d.name, m = d.options, w = m === void 0 ? {} : m, k = d.effect;
        if (typeof k == "function") {
          var x = k({
            state: i,
            name: v,
            instance: c,
            options: w
          }), y = function() {
          };
          p.push(x || y);
        }
      });
    }
    function b() {
      p.forEach(function(d) {
        return d();
      }), p = [];
    }
    return c;
  };
}
var dn = {
  passive: !0
};
function Kl(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, l = a === void 0 ? !0 : a, f = re(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(i) {
    i.addEventListener("scroll", n.update, dn);
  }), l && f.addEventListener("resize", n.update, dn), function() {
    r && h.forEach(function(i) {
      i.removeEventListener("scroll", n.update, dn);
    }), l && f.removeEventListener("resize", n.update, dn);
  };
}
const Xl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Kl,
  data: {}
};
function Jl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Zl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Jl,
  data: {}
};
var Ql = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ec(e) {
  var t = e.x, n = e.y, o = window, s = o.devicePixelRatio || 1;
  return {
    x: Et(t * s) / s || 0,
    y: Et(n * s) / s || 0
  };
}
function Yr(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, l = e.position, f = e.gpuAcceleration, h = e.adaptive, i = e.roundOffsets, p = e.isFixed, u = a.x, c = u === void 0 ? 0 : u, _ = a.y, b = _ === void 0 ? 0 : _, d = typeof i == "function" ? i({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = d.x, b = d.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), w = Re, k = le, x = window;
  if (h) {
    var y = mo(n), $ = "clientHeight", S = "clientWidth";
    if (y === re(n) && (y = Ge(n), ce(y).position !== "static" && l === "absolute" && ($ = "scrollHeight", S = "scrollWidth")), y = y, s === le || (s === Re || s === qe) && r === Xt) {
      k = me;
      var N = p && y === x && x.visualViewport ? x.visualViewport.height : y[$];
      b -= N - o.height, b *= f ? 1 : -1;
    }
    if (s === Re || (s === le || s === me) && r === Xt) {
      w = qe;
      var L = p && y === x && x.visualViewport ? x.visualViewport.width : y[S];
      c -= L - o.width, c *= f ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, h && Ql), q = i === !0 ? ec({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = q.x, b = q.y, f) {
    var F;
    return Object.assign({}, O, (F = {}, F[k] = m ? "0" : "", F[w] = v ? "0" : "", F.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", F));
  }
  return Object.assign({}, O, (t = {}, t[k] = m ? b + "px" : "", t[w] = v ? c + "px" : "", t.transform = "", t));
}
function tc(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, a = r === void 0 ? !0 : r, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var h = ce(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return h.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var i = {
    placement: Me(t.placement),
    variation: Rt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yr(Object.assign({}, i, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yr(Object.assign({}, i, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const nc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tc,
  data: {}
};
function oc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !oe(r) || !ge(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function rc(e) {
  var t = e.state, n = {
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
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var s = t.elements[o], r = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(f, h) {
        return f[h] = "", f;
      }, {});
      !oe(s) || !ge(s) || (Object.assign(s.style, l), Object.keys(r).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const sc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: oc,
  effect: rc,
  requires: ["computeStyles"]
};
var ic = [Xl, Zl, nc, sc], wi = /* @__PURE__ */ Yl({
  defaultModifiers: ic
});
function ac(e) {
  return e === "x" ? "y" : "x";
}
function Sn(e, t, n) {
  return nt(e, Fn(t, n));
}
function lc(e, t, n) {
  var o = Sn(e, t, n);
  return o > n ? n : o;
}
function cc(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, h = n.rootBoundary, i = n.altBoundary, p = n.padding, u = n.tether, c = u === void 0 ? !0 : u, _ = n.tetherOffset, b = _ === void 0 ? 0 : _, d = Qo(t, {
    boundary: f,
    rootBoundary: h,
    padding: p,
    altBoundary: i
  }), v = Me(t.placement), m = Rt(t.placement), w = !m, k = mi(v), x = ac(k), y = t.modifiersData.popperOffsets, $ = t.rects.reference, S = t.rects.popper, N = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (r) {
      var F, se = k === "y" ? le : Re, Y = k === "y" ? me : qe, j = k === "y" ? "height" : "width", Z = y[k], Ae = Z + d[se], ye = Z - d[Y], rt = c ? -S[j] / 2 : 0, be = m === Ct ? $[j] : S[j], Ne = m === Ct ? -S[j] : -$[j], Ye = t.elements.arrow, we = c && Ye ? di(Ye) : {
        width: 0,
        height: 0
      }, C = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bi(), D = C[se], V = C[Y], K = Sn(0, $[j], we[j]), ie = w ? $[j] / 2 - rt - K - D - L.mainAxis : be - K - D - L.mainAxis, Ke = w ? -$[j] / 2 + rt + K + V + L.mainAxis : Ne + K + V + L.mainAxis, ke = t.elements.arrow && mo(t.elements.arrow), Pt = ke ? k === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, _n = (F = O == null ? void 0 : O[k]) != null ? F : 0, P = Z + ie - _n - Pt, hn = Z + Ke - _n, Lt = Sn(c ? Fn(Ae, P) : Ae, Z, c ? nt(ye, hn) : ye);
      y[k] = Lt, q[k] = Lt - Z;
    }
    if (l) {
      var Tt, pn = k === "x" ? le : Re, st = k === "x" ? me : qe, fe = y[x], Xe = x === "y" ? "height" : "width", Dt = fe + d[pn], sr = fe - d[st], wo = [le, Re].indexOf(v) !== -1, ir = (Tt = O == null ? void 0 : O[x]) != null ? Tt : 0, ar = wo ? Dt : fe - $[Xe] - S[Xe] - ir + L.altAxis, lr = wo ? fe + $[Xe] + S[Xe] - ir - L.altAxis : sr, cr = c && wo ? lc(ar, fe, lr) : Sn(c ? ar : Dt, fe, c ? lr : sr);
      y[x] = cr, q[x] = cr - fe;
    }
    t.modifiersData[o] = q;
  }
}
const ki = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cc,
  requiresIfExists: ["offset"]
};
var fc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return fc[t];
  });
}
var uc = {
  start: "end",
  end: "start"
};
function Kr(e) {
  return e.replace(/start|end/g, function(t) {
    return uc[t];
  });
}
function _c(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? kl : f, i = Rt(o), p = i ? l ? Br : Br.filter(function(_) {
    return Rt(_) === i;
  }) : bo, u = p.filter(function(_) {
    return h.indexOf(_) >= 0;
  });
  u.length === 0 && (u = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = u.reduce(function(_, b) {
    return _[b] = Qo(e, {
      placement: b,
      boundary: s,
      rootBoundary: r,
      padding: a
    })[Me(b)], _;
  }, {});
  return Object.keys(c).sort(function(_, b) {
    return c[_] - c[b];
  });
}
function hc(e) {
  if (Me(e) === yo)
    return [];
  var t = Cn(e);
  return [Kr(e), t, Kr(t)];
}
function pc(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, h = n.padding, i = n.boundary, p = n.rootBoundary, u = n.altBoundary, c = n.flipVariations, _ = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, d = t.options.placement, v = Me(d), m = v === d, w = f || (m || !_ ? [Cn(d)] : hc(d)), k = [d].concat(w).reduce(function(we, C) {
      return we.concat(Me(C) === yo ? _c(t, {
        placement: C,
        boundary: i,
        rootBoundary: p,
        padding: h,
        flipVariations: _,
        allowedAutoPlacements: b
      }) : C);
    }, []), x = t.rects.reference, y = t.rects.popper, $ = /* @__PURE__ */ new Map(), S = !0, N = k[0], L = 0; L < k.length; L++) {
      var O = k[L], q = Me(O), F = Rt(O) === Ct, se = [le, me].indexOf(q) >= 0, Y = se ? "width" : "height", j = Qo(t, {
        placement: O,
        boundary: i,
        rootBoundary: p,
        altBoundary: u,
        padding: h
      }), Z = se ? F ? qe : Re : F ? me : le;
      x[Y] > y[Y] && (Z = Cn(Z));
      var Ae = Cn(Z), ye = [];
      if (r && ye.push(j[q] <= 0), l && ye.push(j[Z] <= 0, j[Ae] <= 0), ye.every(function(we) {
        return we;
      })) {
        N = O, S = !1;
        break;
      }
      $.set(O, ye);
    }
    if (S)
      for (var rt = _ ? 3 : 1, be = function(C) {
        var D = k.find(function(V) {
          var K = $.get(V);
          if (K)
            return K.slice(0, C).every(function(ie) {
              return ie;
            });
        });
        if (D)
          return N = D, "break";
      }, Ne = rt; Ne > 0; Ne--) {
        var Ye = be(Ne);
        if (Ye === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const xi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dc(e) {
  return e.button === 2;
}
var Te;
class vc extends Ls {
  constructor() {
    super(...arguments);
    E(this, Te, void 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    var n;
    super.componentWillUnmount(), (n = g(this, Te)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [ki, xi],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return g(this, Te) ? g(this, Te).setOptions(n) : this.ref.current && R(this, Te, wi(this._getPopperElement(), this.ref.current, n)), g(this, Te);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Go("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Te = new WeakMap();
var De, ne, _t, rn;
class ae extends Pn {
  constructor() {
    super(...arguments);
    E(this, De, void 0);
    E(this, ne, void 0);
    E(this, _t, void 0);
    E(this, rn, void 0);
  }
  get isShown() {
    var n;
    return (n = g(this, De)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return g(this, De) || this._ensureMenu();
  }
  get popper() {
    return g(this, ne) ? g(this, ne) : this._createPopper();
  }
  get trigger() {
    return g(this, rn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return R(this, rn, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (o = g(this, ne)) == null || o.destroy(), R(this, ne, void 0), (s = g(this, De)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, o;
    (n = g(this, ne)) == null || n.destroy(), super.destroy(), (o = g(this, De)) == null || o.remove();
  }
  _ensureMenu() {
    var r, a;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = document.createElement("div"), s.classList.add(o), document.body.appendChild(s);
    else if (n) {
      const l = (r = n.getAttribute("href")) != null ? r : n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (s = document.querySelector(l)), !s) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(o) ? s = f : s = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${o}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return R(this, De, s), s;
  }
  _getPopperOptions() {
    return {
      modifiers: [ki, xi],
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return g(this, ne) ? g(this, ne).setOptions(n) : R(this, ne, wi(this._getPopperElement(), this.menu, n)), g(this, ne);
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let s = o || (n == null ? void 0 : n.items);
    if (!!s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (hl(Go(vc, n), this.menu), !0);
  }
  _getPopperElement() {
    return g(this, _t) || R(this, _t, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: o,
            bottom: s,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), g(this, _t);
  }
  static clear(n) {
    n && dc(n) || this.getAll().forEach((o) => o.hide());
  }
  static show(n) {
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o == null || o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
De = new WeakMap(), ne = new WeakMap(), _t = new WeakMap(), rn = new WeakMap(), A(ae, "EVENTS", !0), A(ae, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), A(ae, "MENU_CLASS", "contextmenu"), A(ae, "CLASS_SHOW", "show"), A(ae, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${ae.MENU_CLASS}`))
    return;
  const n = t.closest(ae.MENU_SELECTOR);
  n && (ae.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", ae.clear.bind(ae));
var er = "top", $i = "bottom", Vn = "right", Jt = "left", gc = "auto", Ei = [er, $i, Vn, Jt], mc = "start", yc = "end", bc = /* @__PURE__ */ [].concat(Ei, [gc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mc, t + "-" + yc]);
}, []);
function Si(e) {
  return e.split("-")[0];
}
function At(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ci(e) {
  var t = At(e).Element;
  return e instanceof t || e instanceof Element;
}
function Zt(e) {
  var t = At(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = At(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var wc = Math.max, kc = Math.min, Xr = Math.round;
function Ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xc() {
  return !/^((?!chrome|android).)*safari/i.test(Ao());
}
function $c(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && Zt(e) && (s = e.offsetWidth > 0 && Xr(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Xr(o.height) / e.offsetHeight || 1);
  var a = Ci(e) ? At(e) : window, l = a.visualViewport, f = !xc() && n, h = (o.left + (f && l ? l.offsetLeft : 0)) / s, i = (o.top + (f && l ? l.offsetTop : 0)) / r, p = o.width / s, u = o.height / r;
  return {
    width: p,
    height: u,
    top: i,
    right: h + p,
    bottom: i + u,
    left: h,
    x: h,
    y: i
  };
}
function Ec(e) {
  var t = $c(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Sc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && tr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Qt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  return At(e).getComputedStyle(e);
}
function Cc(e) {
  return ["table", "td", "th"].indexOf(Qt(e)) >= 0;
}
function Rc(e) {
  return ((Ci(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mc(e) {
  return Qt(e) === "html" ? e : e.assignedSlot || e.parentNode || (tr(e) ? e.host : null) || Rc(e);
}
function Jr(e) {
  return !Zt(e) || en(e).position === "fixed" ? null : e.offsetParent;
}
function Ac(e) {
  var t = /firefox/i.test(Ao()), n = /Trident/i.test(Ao());
  if (n && Zt(e)) {
    var o = en(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Mc(e);
  for (tr(s) && (s = s.host); Zt(s) && ["html", "body"].indexOf(Qt(s)) < 0; ) {
    var r = en(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Nc(e) {
  for (var t = At(e), n = Jr(e); n && Cc(n) && en(n).position === "static"; )
    n = Jr(n);
  return n && (Qt(n) === "html" || Qt(n) === "body" && en(n).position === "static") ? t : n || Ac(e) || t;
}
function Oc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pc(e, t, n) {
  return wc(e, kc(t, n));
}
function Lc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Tc(e) {
  return Object.assign({}, Lc(), e);
}
function Dc(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Hc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Tc(typeof t != "number" ? t : Dc(t, Ei));
};
function Wc(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Si(n.placement), f = Oc(l), h = [Jt, Vn].indexOf(l) >= 0, i = h ? "height" : "width";
  if (!(!r || !a)) {
    var p = Hc(s.padding, n), u = Ec(r), c = f === "y" ? er : Jt, _ = f === "y" ? $i : Vn, b = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], d = a[f] - n.rects.reference[f], v = Nc(r), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, w = b / 2 - d / 2, k = p[c], x = m - u[i] - p[_], y = m / 2 - u[i] / 2 + w, $ = Pc(k, y, x), S = f;
    n.modifiersData[o] = (t = {}, t[S] = $, t.centerOffset = $ - y, t);
  }
}
function jc(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  if (s != null && !(typeof s == "string" && (s = t.elements.popper.querySelector(s), !s))) {
    if (process.env.NODE_ENV !== "production" && (Zt(s) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Sc(t.elements.popper, s)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = s;
  }
}
const Ic = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wc,
  effect: jc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Uc(e, t, n) {
  var o = Si(e), s = [Jt, er].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = r[0], l = r[1];
  return a = a || 0, l = (l || 0) * s, [Jt, Vn].indexOf(o) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Bc(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, a = bc.reduce(function(i, p) {
    return i[p] = Uc(p, t.rects, r), i;
  }, {}), l = a[t.placement], f = l.x, h = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = a;
}
const zc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bc
};
var ht, pt, dt, Zn, Ri;
class Ve extends ae {
  constructor() {
    super(...arguments);
    E(this, Zn);
    E(this, ht, !1);
    E(this, pt, 0);
    A(this, "hideLater", () => {
      g(this, dt).call(this), R(this, pt, window.setTimeout(this.hide.bind(this), 300));
    });
    E(this, dt, () => {
      clearTimeout(g(this, pt)), R(this, pt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  show(n) {
    const o = super.show(n);
    return o && !g(this, ht) && this.isHover && G(this, Zn, Ri).call(this), o;
  }
  destroy() {
    g(this, ht) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", g(this, dt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    if (o) {
      n.modifiers.push({ ...Ic, options: {
        padding: o,
        element: ".arrow"
      } }, {
        ...zc,
        options: {
          offset: [0, o + ((s = this.options.offset) != null ? s : 0)]
        }
      });
      const { onFirstUpdate: r } = n;
      n.onFirstUpdate = (a) => {
        var l, f;
        r == null || r(a), (f = this.menu.querySelector(".arrow")) == null || f.classList.add(`arrow-${((l = a.placement) == null ? void 0 : l.split("-").shift()) || ""}`);
      };
    }
    return n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      o.classList.add("arrow"), o.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n.prepend(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...s) => {
        var a;
        const r = this.menu.querySelector(".arrow");
        r && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(r), this.popper.update()), o == null || o(...s);
      };
    }
    return n;
  }
}
ht = new WeakMap(), pt = new WeakMap(), dt = new WeakMap(), Zn = new WeakSet(), Ri = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", g(this, dt)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), R(this, ht, !0);
}, A(Ve, "MENU_CLASS", "dropdown-menu"), A(Ve, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), A(Ve, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ve.MENU_SELECTOR);
  if (n) {
    const o = Ve.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ve.clear(e);
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ve.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ve.ensure(n);
  o.isHover && o.show();
});
var nr, z, Mi, Ai, Yt, Zr, Ni = {}, Oi = [], Fc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Pi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function M(e, t, n) {
  var o, s, r, a = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : a[r] = t[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? nr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      a[r] === void 0 && (a[r] = e.defaultProps[r]);
  return Rn(e, a, o, s, null);
}
function Rn(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Mi : s };
  return s == null && z.vnode != null && z.vnode(r), r;
}
function Vc() {
  return { current: null };
}
function or(e) {
  return e.children;
}
function Kt(e, t) {
  this.props = e, this.context = t;
}
function Mt(e, t) {
  if (t == null)
    return e.__ ? Mt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Mt(e) : null;
}
function Li(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Li(e);
  }
}
function Qr(e) {
  (!e.__d && (e.__d = !0) && Yt.push(e) && !qn.__r++ || Zr !== z.debounceRendering) && ((Zr = z.debounceRendering) || setTimeout)(qn);
}
function qn() {
  for (var e; qn.__r = Yt.length; )
    e = Yt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yt = [], e.some(function(t) {
      var n, o, s, r, a, l;
      t.__d && (a = (r = (n = t).__v).__e, (l = n.__P) && (o = [], (s = Fe({}, r)).__v = r.__v + 1, Wi(l, r, s, n.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, o, a == null ? Mt(r) : a, r.__h), Gc(o, r), r.__e != a && Li(r)));
    });
}
function Ti(e, t, n, o, s, r, a, l, f, h) {
  var i, p, u, c, _, b, d, v = o && o.__k || Oi, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((c = n.__k[i] = (c = t[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Rn(null, c, null, null, c) : Array.isArray(c) ? Rn(or, { children: c }, null, null, null) : c.__b > 0 ? Rn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (u = v[i]) === null || u && c.key == u.key && c.type === u.type)
        v[i] = void 0;
      else
        for (p = 0; p < m; p++) {
          if ((u = v[p]) && c.key == u.key && c.type === u.type) {
            v[p] = void 0;
            break;
          }
          u = null;
        }
      Wi(e, c, u = u || Ni, s, r, a, l, f, h), _ = c.__e, (p = c.ref) && u.ref != p && (d || (d = []), u.ref && d.push(u.ref, null, c), d.push(p, c.__c || _, c)), _ != null ? (b == null && (b = _), typeof c.type == "function" && c.__k === u.__k ? c.__d = f = Di(c, f, e) : f = Hi(e, c, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Mt(u));
    }
  for (n.__e = b, i = m; i--; )
    v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = Mt(o, i + 1)), Ii(v[i], v[i]));
  if (d)
    for (i = 0; i < d.length; i++)
      ji(d[i], d[++i], d[++i]);
}
function Di(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Di(o, t, n) : Hi(n, o, o, s, o.__e, t));
  return t;
}
function Hi(e, t, n, o, s, r) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (l = r, f = 0; (l = l.nextSibling) && f < o.length; f += 2)
          if (l == s)
            break e;
        e.insertBefore(s, r), a = r;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function qc(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Gn(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Gn(e, r, t[r], n[r], o);
}
function es(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Fc.test(t) ? n : n + "px";
}
function Gn(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || es(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || es(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ns : ts, r) : e.removeEventListener(t, r ? ns : ts, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function ts(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ns(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function Wi(e, t, n, o, s, r, a, l, f) {
  var h, i, p, u, c, _, b, d, v, m, w, k, x, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = t.__e = n.__e, t.__h = null, r = [l]), (h = z.__b) && h(t);
  try {
    e:
      if (typeof y == "function") {
        if (d = t.props, v = (h = y.contextType) && o[h.__c], m = h ? v ? v.props.value : h.__ : o, n.__c ? b = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(d, m) : (t.__c = i = new Kt(d, m), i.constructor = y, i.render = Kc), v && v.sub(i), i.props = d, i.state || (i.state = {}), i.context = m, i.__n = o, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Fe({}, i.__s)), Fe(i.__s, y.getDerivedStateFromProps(d, i.__s))), u = i.props, c = i.state, p)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, m) === !1 || t.__v === n.__v) {
            i.props = d, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function($) {
              $ && ($.__ = t);
            }), i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, c, _);
          });
        }
        if (i.context = m, i.props = d, i.__v = t, i.__P = e, w = z.__r, k = 0, "prototype" in y && y.prototype.render)
          i.state = i.__s, i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, w && w(t), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++k < 25);
        i.state = i.__s, i.getChildContext != null && (o = Fe(Fe({}, o), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, c)), x = h != null && h.type === or && h.key == null ? h.props.children : h, Ti(e, Array.isArray(x) ? x : [x], t, n, o, s, r, a, l, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), b && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yc(n.__e, t, n, o, s, r, a, f);
    (h = z.diffed) && h(t);
  } catch ($) {
    t.__v = null, (f || r != null) && (t.__e = l, t.__h = !!f, r[r.indexOf(l)] = null), z.__e($, t, n);
  }
}
function Gc(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      z.__e(o, n.__v);
    }
  });
}
function Yc(e, t, n, o, s, r, a, l) {
  var f, h, i, p = n.props, u = t.props, c = t.type, _ = 0;
  if (c === "svg" && (s = !0), r != null) {
    for (; _ < r.length; _++)
      if ((f = r[_]) && "setAttribute" in f == !!c && (c ? f.localName === c : f.nodeType === 3)) {
        e = f, r[_] = null;
        break;
      }
  }
  if (e == null) {
    if (c === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, u.is && u), r = null, l = !1;
  }
  if (c === null)
    p === u || l && e.data === u || (e.data = u);
  else {
    if (r = r && nr.call(e.childNodes), h = (p = n.props || Ni).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !l) {
      if (r != null)
        for (p = {}, _ = 0; _ < e.attributes.length; _++)
          p[e.attributes[_].name] = e.attributes[_].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (qc(e, u, p, s, l), i)
      t.__k = [];
    else if (_ = t.props.children, Ti(e, Array.isArray(_) ? _ : [_], t, n, o, s && c !== "foreignObject", r, a, r ? r[0] : n.__k && Mt(n, 0), l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Pi(r[_]);
    l || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || c === "progress" && !_ || c === "option" && _ !== p.value) && Gn(e, "value", _, p.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Gn(e, "checked", _, p.checked, !1));
  }
  return e;
}
function ji(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    z.__e(o, n);
  }
}
function Ii(e, t, n) {
  var o, s;
  if (z.unmount && z.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ji(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Ii(o[s], t, typeof e.type != "function");
  n || e.__e == null || Pi(e.__e), e.__e = e.__d = void 0;
}
function Kc(e, t, n) {
  return this.constructor(e, n);
}
nr = Oi.slice, z = { __e: function(e, t, n, o) {
  for (var s, r, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), a = s.__d), a)
          return s.__E = s;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Mi = 0, Ai = function(e) {
  return e != null && e.constructor === void 0;
}, Kt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof e == "function" && (e = e(Fe({}, n), this.props)), e && Fe(n, e), e != null && this.__v && (t && this.__h.push(t), Qr(this));
}, Kt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Qr(this));
}, Kt.prototype.render = or, Yt = [], qn.__r = 0;
let Xc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function os(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ui({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: a, children: l, outerClass: f, ...h }) {
  var y, $;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: p, border: u } = e.setting, c = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...r
  }, _ = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], b = ["dtable-cell-content", t], d = [($ = l != null ? l : (y = o.data) == null ? void 0 : y[e.name]) != null ? $ : ""], v = s ? s(d, { row: o, col: e }, M) : d, m = [], w = [], k = {}, x = {};
  return v == null || v.forEach((S) => {
    var N;
    if (typeof S == "object" && S && !Ai(S) && ("html" in S || "className" in S || "style" in S || "attrs" in S || "children" in S)) {
      const L = S.outer ? m : w;
      S.html ? L.push(/* @__PURE__ */ M("div", {
        className: T("dtable-cell-html", S.className),
        style: S.style,
        dangerouslySetInnerHTML: { __html: S.html },
        ...(N = S.attrs) != null ? N : {}
      })) : (S.style && Object.assign(S.outer ? i : c, S.style), S.className && (S.outer ? _ : b).push(S.className), S.children && L.push(S.children), S.attrs && Object.assign(S.outer ? k : x, S.attrs));
    } else
      w.push(S);
  }), /* @__PURE__ */ M("div", {
    className: T(_),
    style: i,
    "data-col": e.name,
    ...h,
    ...k
  }, w.length > 0 && /* @__PURE__ */ M("div", {
    className: T(b),
    style: c,
    ...x
  }, w), m);
}
function xo({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: a, CellComponent: l = Ui, onRenderCell: f }) {
  return /* @__PURE__ */ M("div", {
    className: T("dtable-cells", t),
    style: { top: n, left: o, width: s, height: r }
  }, a.map((h) => h.visible ? /* @__PURE__ */ M(l, {
    key: h.name,
    col: h,
    row: e,
    onRenderCell: f
  }) : null));
}
function Bi({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: a,
  fixedLeftWidth: l,
  scrollWidth: f,
  scrollColsWidth: h,
  fixedRightWidth: i,
  scrollLeft: p,
  CellComponent: u = Ui,
  onRenderCell: c,
  style: _,
  ...b
}) {
  let d = null;
  s != null && s.length && (d = /* @__PURE__ */ M(xo, {
    className: "dtable-fixed-left",
    cols: s,
    width: l,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ M(xo, {
    className: "dtable-flexable",
    cols: a,
    left: l - p,
    width: h,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ M(xo, {
    className: "dtable-fixed-right",
    cols: r,
    left: l + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: c
  }));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ..._ };
  return /* @__PURE__ */ M("div", {
    className: T("dtable-row", t),
    style: w,
    "data-id": e.id,
    ...b
  }, d, v, m);
}
function Jc({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: o }, M);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ M("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ M(Bi, {
    ...o
  }));
}
function Zc({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: a,
  onRenderRow: l,
  ...f
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ M("div", {
    className: T("dtable-rows", e),
    style: t
  }, o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - a,
      height: r,
      ...f
    }, p = l == null ? void 0 : l({ props: i, row: h }, M);
    return p && Object.assign(i, p), /* @__PURE__ */ M(Bi, {
      ...i
    });
  }));
}
const Yn = /* @__PURE__ */ new Map(), Kn = [];
function zi(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Yn.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Yn.set(n, e), (t == null ? void 0 : t.buildIn) && !Kn.includes(n) && Kn.push(n);
}
function Nt(e, t) {
  zi(e, t);
  const n = (o) => {
    if (!o)
      return e;
    const { defaultOptions: s, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return n.plugin = e, n;
}
function Fi(e) {
  return Yn.delete(e);
}
function Qc(e) {
  if (typeof e == "string") {
    const t = Yn.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Vi(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Qc(o);
    !s || n.has(s.name) || ((r = s.plugins) != null && r.length && Vi(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function ef(e = [], t = !0) {
  return t && Kn.length && e.unshift(...Kn), e != null && e.length ? Vi([], e, /* @__PURE__ */ new Set()) : [];
}
function rs() {
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
var tt, vt, He, Se, We, X, he, pe, gt, sn, an, Ce, mt, yt, Qn, qi, eo, Gi, to, Yi, no, Ki, ln, Oo, oo, ro, cn, fn, so, io, ao, Xi, lo, Ji, co, Zi;
class No extends Kt {
  constructor(n) {
    var o;
    super(n);
    E(this, Qn);
    E(this, eo);
    E(this, to);
    E(this, no);
    E(this, ln);
    E(this, ao);
    E(this, lo);
    E(this, co);
    A(this, "ref", Vc());
    E(this, tt, 0);
    E(this, vt, void 0);
    E(this, He, !1);
    E(this, Se, void 0);
    E(this, We, void 0);
    E(this, X, []);
    E(this, he, void 0);
    E(this, pe, /* @__PURE__ */ new Map());
    E(this, gt, {});
    E(this, sn, void 0);
    E(this, an, []);
    A(this, "updateLayout", () => {
      g(this, tt) && cancelAnimationFrame(g(this, tt)), R(this, tt, requestAnimationFrame(() => {
        R(this, he, void 0), this.forceUpdate(), R(this, tt, 0);
      }));
    });
    E(this, Ce, (n, o) => {
      o = o || n.type;
      const s = g(this, pe).get(o);
      if (!!(s != null && s.length)) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    E(this, mt, (n) => {
      g(this, Ce).call(this, n, `window_${n.type}`);
    });
    E(this, yt, (n) => {
      g(this, Ce).call(this, n, `document_${n.type}`);
    });
    E(this, oo, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return g(this, X).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    E(this, ro, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), g(this, X).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    E(this, cn, (n, o, s) => {
      const { row: r, col: a } = o;
      n[0] = this.getCellValue(r, a);
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, o, s)), this.options[l] && (n = this.options[l].call(this, n, o, s)), g(this, X).forEach((f) => {
        f[l] && (n = f[l].call(this, n, o, s));
      }), n;
    });
    E(this, fn, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    E(this, so, (n) => {
      var l, f, h, i, p;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: a } = o;
      if (s === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: r, element: a }), g(this, X).forEach((u) => {
          var c;
          (c = u.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: a });
        }));
      else {
        const { rowElement: u } = o, c = this.layout.visibleRows.find((_) => _.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
            return;
          for (const _ of g(this, X))
            if (((h = _.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: c, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
          return;
        for (const _ of g(this, X))
          if (((p = _.onRowClick) == null ? void 0 : p.call(this, n, { rowID: s, rowInfo: c, element: u })) === !0)
            return;
      }
    });
    E(this, io, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    R(this, vt, (o = n.id) != null ? o : `dtable-${Xc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, R(this, We, Object.freeze(ef(n.plugins))), g(this, We).forEach((s) => {
      var f;
      const { methods: r, data: a, state: l } = s;
      r && Object.entries(r).forEach(([h, i]) => {
        typeof i == "function" && Object.assign(this, { [h]: i.bind(this) });
      }), a && Object.assign(g(this, gt), a.call(this)), l && Object.assign(this.state, l.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = g(this, he)) == null ? void 0 : n.options) || g(this, Se) || rs();
  }
  get plugins() {
    return g(this, X);
  }
  get layout() {
    return g(this, he);
  }
  get id() {
    return g(this, vt);
  }
  get data() {
    return g(this, gt);
  }
  get parent() {
    var n, o;
    return (o = this.props.parent) != null ? o : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    R(this, Se, void 0);
  }
  componentDidMount() {
    if (g(this, He) ? this.forceUpdate() : G(this, ln, Oo).call(this), g(this, X).forEach((n) => {
      let { events: o } = n;
      !o || (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", g(this, so)), this.on("keydown", g(this, io)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), R(this, sn, o);
        }
      } else
        this.on("window_resize", this.updateLayout);
    g(this, X).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    g(this, He) ? G(this, ln, Oo).call(this) : g(this, X).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = g(this, sn)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of g(this, pe).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), g(this, mt)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), g(this, yt)) : n.removeEventListener(s, g(this, Ce));
    g(this, X).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), g(this, We).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), R(this, gt, {}), g(this, pe).clear();
  }
  on(n, o, s) {
    var a;
    s && (n = `${s}_${n}`);
    const r = g(this, pe).get(n);
    r ? r.push(o) : (g(this, pe).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), g(this, mt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), g(this, yt)) : (a = this.ref.current) == null || a.addEventListener(n, g(this, Ce)));
  }
  off(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = g(this, pe).get(n);
    if (!r)
      return;
    const a = r.indexOf(o);
    a >= 0 && r.splice(a, 1), r.length || (g(this, pe).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), g(this, mt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), g(this, yt)) : (l = this.ref.current) == null || l.removeEventListener(n, g(this, Ce)));
  }
  emitCustomEvent(n, o) {
    g(this, Ce).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: a, rowsHeight: l, rowHeight: f, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: p } = n;
    let { scrollLeft: u, scrollTop: c } = n;
    if (p === "up" || p === "down")
      c = r + (p === "down" ? 1 : -1) * Math.floor(l / f) * f;
    else if (p === "left" || p === "right")
      u = s + (p === "right" ? 1 : -1) * h;
    else if (p === "home")
      c = 0;
    else if (p === "end")
      c = a - l;
    else if (p === "left-begin")
      u = 0;
    else if (p === "right-end")
      u = i - h;
    else {
      const { offsetLeft: b, offsetTop: d } = n;
      typeof b == "number" && (u = s + b), typeof d == "number" && (u = r + d);
    }
    const _ = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (_.scrollLeft = u)), typeof c == "number" && (c = Math.max(0, Math.min(c, a - l)), c !== r && (_.scrollTop = c)), Object.keys(_).length ? (this.setState(_, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, _), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: s } = this.layout;
    return typeof n == "number" ? s[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: s } = this.layout;
    return typeof n == "number" ? o[n] : s[n];
  }
  getCellValue(n, o) {
    var f, h;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let a = s.id === "HEADER" ? (f = r.setting.title) != null ? f : r.setting.name : (h = s.data) == null ? void 0 : h[r.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, s, r, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    const { dirtyType: s, state: r } = n;
    s === "layout" ? R(this, he, void 0) : s === "options" && (R(this, he, void 0), R(this, Se, void 0)), r ? this.setState({ ...r }, o) : this.forceUpdate(o);
  }
  getPointerInfo(n) {
    const o = n.target;
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
  i18n(n, o, s) {
    var r;
    return (r = un(g(this, an), n, o, s, this.options.lang)) != null ? r : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = G(this, co, Zi).call(this), { className: o, rowHover: s, colHover: r, cellHover: a, bordered: l, striped: f, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, p = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": f,
      "dtable-scrolled-down": ((c = n == null ? void 0 : n.scrollTop) != null ? c : 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && g(this, X).forEach((_) => {
      var d;
      const b = (d = _.onRender) == null ? void 0 : d.call(this, n);
      !b || (b.style && Object.assign(i, b.style), b.className && p.push(b.className), b.children && u.push(b.children));
    }), /* @__PURE__ */ M("div", {
      id: g(this, vt),
      className: T(p),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && G(this, Qn, qi).call(this, n), n && G(this, eo, Gi).call(this, n), n && G(this, to, Yi).call(this, n), n && G(this, no, Ki).call(this, n));
  }
}
tt = new WeakMap(), vt = new WeakMap(), He = new WeakMap(), Se = new WeakMap(), We = new WeakMap(), X = new WeakMap(), he = new WeakMap(), pe = new WeakMap(), gt = new WeakMap(), sn = new WeakMap(), an = new WeakMap(), Ce = new WeakMap(), mt = new WeakMap(), yt = new WeakMap(), Qn = new WeakSet(), qi = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: a } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ M(Jc, {
      scrollLeft: a,
      height: r,
      onRenderCell: g(this, cn),
      onRenderRow: g(this, ro),
      ...s
    });
  const l = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Eo, {
    className: "dtable-header",
    style: { height: r },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, eo = new WeakSet(), Gi = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: a, colsInfo: l, scrollLeft: f, scrollTop: h } = n;
  return /* @__PURE__ */ M(Zc, {
    top: o,
    height: s,
    rows: r,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: h,
    onRenderCell: g(this, cn),
    onRenderRow: g(this, oo),
    ...l
  });
}, to = new WeakSet(), Yi = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ M(Eo, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, no = new WeakSet(), Ki = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: a, rowsHeight: l, rowsHeightTotal: f, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: p } = r, { scrollbarSize: u = 12, horzScrollbarPos: c } = this.options;
  return i > p && o.push(
    /* @__PURE__ */ M(Rr, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: p,
      onScroll: g(this, fn),
      left: r.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -u) + h,
      size: u,
      wheelContainer: this.ref
    })
  ), f > l && o.push(
    /* @__PURE__ */ M(Rr, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: l,
      onScroll: g(this, fn),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), o.length ? o : null;
}, ln = new WeakSet(), Oo = function() {
  var n;
  R(this, He, !1), (n = this.options.afterRender) == null || n.call(this), g(this, X).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, oo = new WeakMap(), ro = new WeakMap(), cn = new WeakMap(), fn = new WeakMap(), so = new WeakMap(), io = new WeakMap(), ao = new WeakSet(), Xi = function() {
  if (g(this, Se))
    return !1;
  const o = { ...rs(), ...g(this, We).reduce((s, r) => {
    const { defaultOptions: a } = r;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return R(this, Se, o), R(this, X, g(this, We).reduce((s, r) => {
    const { when: a, options: l } = r;
    return (!a || a(o)) && (s.push(r), l && Object.assign(o, typeof l == "function" ? l.call(this, o) : l)), s;
  }, [])), R(this, an, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, lo = new WeakSet(), Ji = function() {
  var Ye, we;
  const { plugins: n } = this;
  let o = g(this, Se);
  const s = {
    flex: /* @__PURE__ */ M("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ M("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((C) => {
    var V;
    const D = (V = C.beforeLayout) == null ? void 0 : V.call(this, o);
    D && (o = { ...o, ...D }), Object.assign(s, C.footer);
  });
  const { defaultColWidth: r, minColWidth: a, maxColWidth: l } = o, f = [], h = [], i = [], p = {}, u = [], c = [];
  let _ = 0, b = 0, d = 0;
  o.cols.forEach((C) => {
    var hn, Lt, Tt;
    if (C.hidden)
      return;
    const {
      name: D,
      type: V = "",
      fixed: K = !1,
      flex: ie = !1,
      width: Ke = r,
      minWidth: ke = a,
      maxWidth: Pt = l,
      ..._n
    } = C, P = {
      name: D,
      type: V,
      setting: {
        name: D,
        type: V,
        fixed: K,
        flex: ie,
        width: Ke,
        minWidth: ke,
        maxWidth: Pt,
        ..._n
      },
      flex: K ? 0 : ie === !0 ? 1 : typeof ie == "number" ? ie : 0,
      left: 0,
      width: os(Ke, ke, Pt),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((pn) => {
      var fe, Xe;
      const st = (fe = pn.colTypes) == null ? void 0 : fe[V];
      if (st) {
        const Dt = typeof st == "function" ? st(P) : st;
        Dt && Object.assign(P.setting, Dt);
      }
      (Xe = pn.onAddCol) == null || Xe.call(this, P);
    }), P.width = os((hn = P.setting.width) != null ? hn : P.width, (Lt = P.setting.minWidth) != null ? Lt : ke, (Tt = P.setting.maxWidth) != null ? Tt : Pt), P.realWidth = P.realWidth || P.width, K === "left" ? (P.left = _, _ += P.width, f.push(P)) : K === "right" ? (P.left = b, b += P.width, h.push(P)) : (P.left = d, d += P.width, i.push(P)), P.flex && c.push(P), u.push(P), p[P.name] = P;
  });
  let v = o.width, m = 0;
  const w = _ + d + b;
  if (typeof v == "function" && (v = v.call(this, w)), v === "auto")
    m = w;
  else if (v === "100%") {
    const { parent: C } = this;
    if (C)
      m = C.clientWidth;
    else {
      m = 0, R(this, He, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: k, rowKey: x = "id", rowHeight: y } = o, $ = [], S = (C, D, V) => {
    var ie, Ke;
    const K = { data: V != null ? V : { [x]: C }, id: C, index: $.length, top: 0 };
    if (V || (K.lazy = !0), $.push(K), ((ie = o.onAddRow) == null ? void 0 : ie.call(this, K, D)) !== !1) {
      for (const ke of n)
        if (((Ke = ke.onAddRow) == null ? void 0 : Ke.call(this, K, D)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let C = 0; C < k; C++)
      S(`${C}`, C);
  else
    Array.isArray(k) && k.forEach((C, D) => {
      var V;
      typeof C == "object" ? S(`${(V = C[x]) != null ? V : ""}`, D, C) : S(`${C != null ? C : ""}`, D);
    });
  let N = $;
  const L = {};
  if (o.onAddRows) {
    const C = o.onAddRows.call(this, N);
    C && (N = C);
  }
  for (const C of n) {
    const D = (Ye = C.onAddRows) == null ? void 0 : Ye.call(this, N);
    D && (N = D);
  }
  N.forEach((C, D) => {
    L[C.id] = C, C.index = D, C.top = C.index * y;
  });
  const { header: O, footer: q } = o, F = O ? o.headerHeight || y : 0, se = q ? o.footerHeight || y : 0;
  let Y = o.height, j = 0;
  const Z = N.length * y, Ae = F + se + Z;
  if (typeof Y == "function" && (Y = Y.call(this, Ae)), Y === "auto")
    j = Ae;
  else if (typeof Y == "object")
    j = Math.min(Y.max, Math.max(Y.min, Ae));
  else if (Y === "100%") {
    const { parent: C } = this;
    if (C)
      j = C.clientHeight;
    else {
      j = 0, R(this, He, !0);
      return;
    }
  } else
    j = Y;
  const ye = j - F - se, rt = m - _ - b, be = {
    options: o,
    allRows: $,
    width: m,
    height: j,
    rows: N,
    rowsMap: L,
    rowHeight: y,
    rowsHeight: ye,
    rowsHeightTotal: Z,
    header: O,
    footer: q,
    footerGenerators: s,
    headerHeight: F,
    footerHeight: se,
    colsMap: p,
    colsList: u,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: rt,
      scrollColsWidth: d,
      fixedRightWidth: b
    }
  }, Ne = (we = o.onLayout) == null ? void 0 : we.call(this, be);
  Ne && Object.assign(be, Ne), n.forEach((C) => {
    if (C.onLayout) {
      const D = C.onLayout.call(this, be);
      D && Object.assign(be, D);
    }
  }), R(this, he, be);
}, co = new WeakSet(), Zi = function() {
  (G(this, ao, Xi).call(this) || !g(this, he)) && G(this, lo, Ji).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: a, scrollColsWidth: l } } = n;
  if (s.length) {
    const w = a - l;
    if (w > 0) {
      const k = s.reduce((y, $) => y + $.flex, 0);
      let x = 0;
      s.forEach((y) => {
        const $ = Math.min(w - x, Math.ceil(w * (y.flex / k)));
        y.realWidth = $ + y.width, x += y.realWidth;
      });
    } else
      s.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, l - a), o);
  let f = 0;
  r.forEach((w) => {
    w.left = f, f += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + a;
  });
  const { rowsHeightTotal: h, rowsHeight: i, rows: p, rowHeight: u } = n, c = Math.min(Math.max(0, h - i), this.state.scrollTop), _ = Math.floor(c / u), b = c + i, d = Math.min(p.length, Math.ceil(b / u)), v = [], { rowDataGetter: m } = this.options;
  for (let w = _; w < d; w++) {
    const k = p[w];
    k.lazy && m && (k.data = m([k.id])[0], k.lazy = !1), v.push(k);
  }
  return n.visibleRows = v, n.scrollTop = c, n.scrollLeft = o, n;
}, A(No, "addPlugin", zi), A(No, "removePlugin", Fi);
function ss(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const tf = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s, r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (r = n == null ? void 0 : n.getAttribute("data-col")) != null ? r : !1;
      ss(this, o);
    },
    mouseleave() {
      ss(this, !1);
    }
  }
};
Nt(tf, { buildIn: !0 });
function nf(e, t) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (f, h) => {
    s && !s.call(this, f) || !!n[f] === h || (h ? n[f] = !0 : delete n[f], o[f] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !Qi.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    r(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    r(f, t != null ? t : !n[f]);
  })), Object.keys(o).length) {
    const f = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, o, n);
    f && Object.keys(f).forEach((h) => {
      f[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function of(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function Qi() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function rf() {
  return Object.keys(this.state.checkedRows);
}
const ea = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: nf,
    isRowChecked: of,
    isAllRowChecked: Qi,
    getChecks: rf
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
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ M("div", null, o.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l, f;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const h = this.isRowChecked(o), i = (f = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, o)) != null ? f : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: h
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, l;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const f = this.isAllRowChecked(), h = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, o)) != null ? l : /* @__PURE__ */ M("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: T(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(e, { rowID: t }) {
    const n = e.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
};
Nt(ea);
function Po(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const a = Po.call(this, r);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    r = a.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Po.call(this, t.parent).level + 1 : 0, t;
}
function sf(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ta.call(this)), t) {
      const r = o.entries();
      for (const [a, l] of r)
        l.state === "expanded" && (n[a] = !0);
    } else
      n = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[r[0]]), r.forEach((a) => {
      const l = o.get(a);
      t && (l == null ? void 0 : l.children) ? n[a] = !0 : delete n[a];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function ta() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function na(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const a = e.get(r);
    !a || (a.level === o && (a.order = t++), (s = a.children) != null && s.length && (t = na(e, t, a.children, o + 1)));
  }
  return t;
}
function oa(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, oa(e, r, n, o);
  }), s;
}
function ra(e, t, n, o, s) {
  var l;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((l = r.children) == null ? void 0 : l.every((f) => {
    const h = !!(o[f] !== void 0 ? o[f] : s[f]);
    return n === h;
  })) && (o[t] = n), r.parent && ra(e, r.parent, n, o, s);
}
const sa = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, o = n.get(e.id), s = n.get(t.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([s, r]) => {
        const a = oa(this, s, r, o);
        a != null && a.parent && ra(this, a.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: sf,
    isAllCollapsed: ta,
    getNestedRowInfo: Po
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r, a, l, f;
    const { nestedMap: t } = this.data, n = (r = e.data) == null ? void 0 : r[(s = this.options.nestedParentKey) != null ? s : "parent"], o = (a = t.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (o.parent = n, (f = e.data) != null && f[(l = this.options.asParentKey) != null ? l : "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let h = t.get(n);
      h || (h = {
        state: "",
        level: 0
      }, t.set(n, h)), h.children || (h.children = []), h.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), na(this.data.nestedMap), e.sort((t, n) => {
      var a, l;
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = ((a = o.order) != null ? a : 0) - ((l = s.order) != null ? l : 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var l, f, h;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, a = this.getNestedRowInfo(o);
    if (r && (a.children || a.parent) && e.unshift((f = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, o, t, s)) != null ? f : /* @__PURE__ */ M("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = r } = t.setting;
      i && (i === !0 && (i = (h = this.options.nestedIndent) != null ? h : 12), e.unshift(/* @__PURE__ */ M("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, r;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift((r = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) != null ? r : /* @__PURE__ */ M("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ M("span", {
      className: "dtable-nested-toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: T(e.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const n = e.target;
    if (!(!n || !this.getNestedRowInfo(t).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
};
Nt(sa);
const ve = 24 * 60 * 60 * 1e3, Q = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Ot = (e, t = new Date()) => (e = Q(e), t = Q(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Lo = (e, t = new Date()) => Q(e).getFullYear() === Q(t).getFullYear(), ia = (e, t = new Date()) => (e = Q(e), t = Q(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), af = (e, t = new Date()) => {
  e = Q(e), t = Q(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, lf = (e, t) => Ot(Q(t), e), cf = (e, t) => Ot(Q(t).getTime() - ve, e), ff = (e, t) => Ot(Q(t).getTime() + ve, e), uf = (e, t) => Ot(Q(t).getTime() - 2 * ve, e), Xn = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Q(e);
  const n = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(t)) {
      const s = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, _f = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Xn(e, Lo(e) ? o.month : o.full);
  if (Ot(e, t))
    return s;
  const r = Xn(t, Lo(e, t) ? ia(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, hf = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - ve * 7;
    case "oneMonth":
      return t - ve * 31;
    case "threeMonth":
      return t - ve * 31 * 3;
    case "halfYear":
      return t - ve * 183;
    case "oneYear":
      return t - ve * 365;
    case "twoYear":
      return t - 2 * (ve * 365);
    default:
      return 0;
  }
}, To = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, To(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, To(e, "day", n, o);
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
  return n ? o + e : o - e;
};
const aa = {
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
      onRenderCell(e, { col: t, row: n }) {
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = it(o, n.data);
        return e[0] = /* @__PURE__ */ M("a", {
          href: r,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, l = /* @__PURE__ */ M("div", {
          className: `avatar ${r} flex-none`
        }, /* @__PURE__ */ M("img", {
          src: o ? o[a] : ""
        }));
        return s ? e.unshift(l) : e[0] = l, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, a = (n - o) / 2, l = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ M("svg", {
          width: n,
          height: n
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
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ M("text", {
          x: l,
          y: l + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var l;
        const o = (l = n.data) == null ? void 0 : l[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((f) => {
            typeof f == "string" && (f = { action: f });
            const h = r[f.action];
            return h && (f = { className: a, ...h, ...f }), it(s, f);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(e, { col: t }) {
        let { format: n } = t.setting;
        if (!n)
          return e;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: s } = n, r = e[0];
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Xn(r, o) : s === "html" ? e[0] = { html: it(o, r) } : e[0] = it(o, r), e;
      }
    }
  }
};
Nt(aa, { buildIn: !0 });
const pf = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting, o = n === !0 ? "none" : n;
    return n && e.push(
      /* @__PURE__ */ M("div", {
        className: `dtable-sort dtable-sort-${o}`
      })
    ), e.push({ outer: !0, attrs: { "data-type": t.type || null, "data-sort": o } }), e;
  }
};
Nt(pf, { buildIn: !0 });
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: ea,
  nested: sa,
  rich: aa
}, Symbol.toStringTag, { value: "Module" }));
class vn extends ho {
}
A(vn, "Component", No), A(vn, "definePlugin", Nt), A(vn, "removePlugin", Fi), A(vn, "plugins", df);
var de, te;
class vf {
  constructor(t) {
    E(this, de, void 0);
    E(this, te, void 0);
    R(this, de, t), R(this, te, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(g(this, de).parentElement.parentElement, g(this, de).parentElement), this.addActive(g(this, te).parentElement, g(this, te)), g(this, te).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    R(this, te, g(this, de)), this.addActive(g(this, te).parentElement, g(this, te)), R(this, de, document.querySelector(`[href='#${g(this, te).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${g(this, te).getAttribute("id")}']`) || document.querySelector(`[data-target='#${g(this, te).getAttribute("id")}']`)), this.addActive(g(this, de).parentElement.parentElement, g(this, de).parentElement);
  }
  addActive(t, n) {
    const o = t.children;
    Array.from(o).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function() {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(n) {
      setTimeout(() => {
        t.classList.add("in"), n();
      }, 100);
    });
  }
}
de = new WeakMap(), te = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new vf(e.target).showTarget());
});
const bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: ve,
  createDate: Q,
  isSameDay: Ot,
  isSameYear: Lo,
  isSameMonth: ia,
  isSameWeek: af,
  isToday: lf,
  isYesterday: cf,
  isTomorrow: ff,
  isDBY: uf,
  formatDate: Xn,
  formatDateSpan: _f,
  getTimeBeforeDesc: hf,
  calculateTimestamp: To,
  formatString: it,
  formatBytes: ya,
  convertBytes: ba,
  isObject: yn,
  mergeDeep: On
}, Symbol.toStringTag, { value: "Module" }));
export {
  Da as ActionMenu,
  Ha as ActionMenuNested,
  yf as Avatar,
  ae as ContextMenu,
  vn as DTable,
  Ve as Dropdown,
  Ho as EventBus,
  Ua as Menu,
  vf as NavTabs,
  Rr as Scrollbar,
  xa as addI18nMap,
  mf as browser,
  wa as getLangCode,
  bf as helpers,
  un as i18n,
  $o as nativeEvents,
  ka as setLangCode,
  Ja as store
};
