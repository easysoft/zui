var $v = Object.defineProperty;
var kv = (e, t, n) => t in e ? $v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var P = (e, t, n) => (kv(e, typeof t != "symbol" ? t + "" : t, n), n), Ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var $ = (e, t, n) => (Ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, U = (e, t, n, r) => (Ra(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ne = (e, t, n) => (Ra(e, t, "access private method"), n);
var ha, se, Vu, Yu, Vr, wc, es = {}, qu = [], xv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function on(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function va(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ha.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Oi(e, a, r, s, null);
}
function Oi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Vu : s };
  return s == null && se.vnode != null && se.vnode(o), o;
}
function Sv() {
  return { current: null };
}
function ma(e) {
  return e.children;
}
function Ai(e, t) {
  this.props = e, this.context = t;
}
function Co(e, t) {
  if (t == null)
    return e.__ ? Co(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Co(e) : null;
}
function Xu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xu(e);
  }
}
function $c(e) {
  (!e.__d && (e.__d = !0) && Vr.push(e) && !ts.__r++ || wc !== se.debounceRendering) && ((wc = se.debounceRendering) || setTimeout)(ts);
}
function ts() {
  for (var e; ts.__r = Vr.length; )
    e = Vr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = on({}, o)).__v = o.__v + 1, fl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Co(o) : a, o.__h), Qu(r, o), o.__e != a && Xu(o)));
    });
}
function Ku(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || qu, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Oi(null, l, null, null, l) : Array.isArray(l) ? Oi(ma, { children: l }, null, null, null) : l.__b > 0 ? Oi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      fl(e, l, u = u || es, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Zu(l, f, e) : f = Ju(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Co(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && t_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      e_(h[i], h[++i], h[++i]);
}
function Zu(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Zu(r, t, n) : Ju(n, r, r, s, r.__e, t));
  return t;
}
function Ju(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Ev(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ns(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ns(e, o, t[o], n[o], r);
}
function kc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || xv.test(t) ? n : n + "px";
}
function ns(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || kc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || kc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Sc : xc, o) : e.removeEventListener(t, o ? Sc : xc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function xc(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Sc(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function fl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = se.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Ai(h, m), i.constructor = y, i.render = Ov), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = on({}, i.__s)), on(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = se.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = on(on({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === ma && p.key == null ? p.props.children : p, Ku(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Cv(n.__e, t, n, r, s, o, a, f);
    (p = se.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function Qu(e, t) {
  se.__c && se.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      se.__e(r, n.__v);
    }
  });
}
function Cv(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && ha.call(e.childNodes), p = (d = n.props || es).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ev(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ku(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Co(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Gu(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ns(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ns(e, "checked", _, d.checked, !1));
  }
  return e;
}
function e_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    se.__e(r, n);
  }
}
function t_(e, t, n) {
  var r, s;
  if (se.unmount && se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || e_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        se.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && t_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Gu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ov(e, t, n) {
  return this.constructor(e, n);
}
function Av(e, t, n) {
  var r, s, o;
  se.__ && se.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], fl(t, e = (!r && n || t).__k = va(ma, null, [e]), s || es, es, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ha.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Qu(o, e);
}
ha = qu.slice, se = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Vu = 0, Yu = function(e) {
  return e != null && e.constructor === void 0;
}, Ai.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof e == "function" && (e = e(on({}, n), this.props)), e && on(n, e), e != null && this.__v && (t && this._sb.push(t), $c(this));
}, Ai.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $c(this));
}, Ai.prototype.render = ma, Vr = [], ts.__r = 0;
var Bt;
class Mv {
  constructor(t = "") {
    R(this, Bt, void 0);
    typeof t == "object" ? U(this, Bt, t) : U(this, Bt, document.appendChild(document.createComment(t)));
  }
  on(t, n, r) {
    $(this, Bt).addEventListener(t, n, r);
  }
  once(t, n, r) {
    $(this, Bt).addEventListener(t, n, { once: !0, ...r });
  }
  off(t, n, r) {
    $(this, Bt).removeEventListener(t, n, r);
  }
  emit(t) {
    return $(this, Bt).dispatchEvent(t), t;
  }
}
Bt = new WeakMap();
const Ua = /* @__PURE__ */ new Set([
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
class ul extends Mv {
  on(t, n, r) {
    super.on(t, n, r);
  }
  off(t, n, r) {
    super.off(t, n, r);
  }
  once(t, n, r) {
    super.once(t, n, r);
  }
  emit(t, n) {
    return typeof t == "string" && (Ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(ul.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var jt, Ko, An, Ur;
class Ec extends ul {
  constructor(n = "", r) {
    super(n);
    R(this, An);
    R(this, jt, /* @__PURE__ */ new Map());
    R(this, Ko, void 0);
    U(this, Ko, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, s) {
    n = ne(this, An, Ur).call(this, n), super.on(n, r, s), $(this, jt).set(r, [n, s]);
  }
  off(n, r, s) {
    n = ne(this, An, Ur).call(this, n), super.off(n, r, s), $(this, jt).delete(r);
  }
  once(n, r, s) {
    n = ne(this, An, Ur).call(this, n);
    const o = (a) => {
      r(a), $(this, jt).delete(o);
    };
    super.once(n, o, s), $(this, jt).set(o, [n, s]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = ne(this, An, Ur).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from($(this, jt).entries()).forEach(([n, [r, s]]) => {
      super.off(r, n, s);
    }), $(this, jt).clear();
  }
}
jt = new WeakMap(), Ko = new WeakMap(), An = new WeakSet(), Ur = function(n) {
  const r = $(this, Ko);
  return Ua.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function Tv(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let r = e;
  const s = [r];
  for (; typeof r == "object" && r !== null && t.length; ) {
    let o = t.shift(), a;
    const c = o.indexOf("[");
    if (c > 0 && c < o.length - 1 && o.endsWith("]") && (a = o.substring(c + 1, o.length - 1), o = o.substring(0, c)), r = r[o], s.push(r), a !== void 0)
      if (typeof r == "object" && r !== null)
        r instanceof Map ? r = r.get(a) : r = r[a], s.push(r);
      else
        throw new Error(`Cannot access property "${o}[${a}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function Dv(e, t, n) {
  const r = Tv(e, t), s = r[r.length - 1];
  return s === void 0 ? n : s;
}
function Ha(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ia(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Ha(e) && Ha(n))
    for (const r in n)
      Ha(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), Ia(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return Ia(e, ...t);
}
function Re(e, ...t) {
  var n;
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const r = t[0];
    return Object.keys(r).forEach((s) => {
      var a;
      const o = (a = r[s]) != null ? a : 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${o}`);
    }), e;
  }
  for (let r = 0; r < t.length; r++) {
    const s = (n = t[r]) != null ? n : "";
    e = e.replace(new RegExp(`\\{${r}\\}`, "g"), `${s}`);
  }
  return e;
}
var _l = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(_l || {});
function fk(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / _l[n]).toFixed(t) + n);
}
const uk = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const r = n[1];
  return e = e.replace(r, ""), Number.parseInt(e, 10) * _l[r];
};
var Fu, zu;
let pl = (zu = (Fu = document.documentElement.getAttribute("lang")) == null ? void 0 : Fu.toLowerCase()) != null ? zu : "zh_cn", Kt;
function Lv() {
  return pl;
}
function Pv(e) {
  pl = e.toLowerCase();
}
function Nv(e, t) {
  Kt || (Kt = {}), typeof e == "string" && (e = { [e]: t != null ? t : {} }), Ia(Kt, e);
}
function di(e, t, n, r, s, o) {
  Array.isArray(e) ? Kt && e.unshift(Kt) : e = Kt ? [Kt, e] : [e], typeof n == "string" && (o = s, s = r, r = n, n = void 0);
  const a = s || pl;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const p = f[a];
    if (!p)
      continue;
    const i = o && f === Kt ? `${o}.${t}` : t;
    if (c = Dv(p, i), c !== void 0)
      break;
  }
  return c === void 0 ? r : n ? Re(c, ...Array.isArray(n) ? n : [n]) : c;
}
di.addLang = Nv;
di.getCode = Lv;
di.setCode = Pv;
function Rv(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
var Ut, Gn, De;
class ft {
  constructor(t, n) {
    R(this, Ut, void 0);
    R(this, Gn, void 0);
    R(this, De, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && U(this, De, new Ec(t, { customEventSuffix: `.${this.constructor.KEY}` })), U(this, Ut, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Rv(t.dataset) : null, ...n }), this.constructor.all.set(t, this), U(this, Gn, t), this.init(), requestAnimationFrame(() => {
      var r;
      this.afterInit(), (r = $(this, De)) == null || r.emit("inited", this);
    });
  }
  get options() {
    return $(this, Ut);
  }
  get element() {
    return $(this, Gn);
  }
  get events() {
    return $(this, De);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign($(this, Ut), t), $(this, Ut);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete($(this, Gn)), $(this, De) && ($(this, De).emit("destroyed", this), $(this, De).offAll());
  }
  on(t, n, r) {
    var s;
    (s = $(this, De)) == null || s.on(t, n, r);
  }
  once(t, n, r) {
    var s;
    (s = $(this, De)) == null || s.once(t, n, r);
  }
  off(t, n, r) {
    var s;
    (s = $(this, De)) == null || s.off(t, n, r);
  }
  emit(t, n) {
    var a;
    let r = Ec.createEvent(t, n);
    const s = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = $(this, Ut)[s];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = $(this, De)) == null ? void 0 : a.emit(r), r;
  }
  i18n(t, n, r) {
    var s;
    return (s = di($(this, Ut).i18n, t, n, r, this.options.lang, this.constructor.NAME)) != null ? s : `{i18n:${t}}`;
  }
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  static get KEY() {
    return `zui.${this.NAME}`;
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
Ut = new WeakMap(), Gn = new WeakMap(), De = new WeakMap(), P(ft, "EVENTS", !1), P(ft, "DEFAULT", {}), P(ft, "allComponents", /* @__PURE__ */ new Map());
class Ke extends ft {
  constructor() {
    super(...arguments);
    P(this, "ref", Sv());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    Av(/* @__PURE__ */ va(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var dl, de, n_, r_, Yr, Cc, o_ = {}, i_ = [], Hv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function sn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function s_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function xe(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? dl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Mi(e, a, r, s, null);
}
function Mi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++n_ : s };
  return s == null && de.vnode != null && de.vnode(o), o;
}
function Wv() {
  return { current: null };
}
function hl(e) {
  return e.children;
}
function qr(e, t) {
  this.props = e, this.context = t;
}
function Oo(e, t) {
  if (t == null)
    return e.__ ? Oo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Oo(e) : null;
}
function a_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return a_(e);
  }
}
function Oc(e) {
  (!e.__d && (e.__d = !0) && Yr.push(e) && !rs.__r++ || Cc !== de.debounceRendering) && ((Cc = de.debounceRendering) || setTimeout)(rs);
}
function rs() {
  for (var e; rs.__r = Yr.length; )
    e = Yr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = sn({}, o)).__v = o.__v + 1, u_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Oo(o) : a, o.__h), jv(r, o), o.__e != a && a_(o)));
    });
}
function l_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || i_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Mi(null, l, null, null, l) : Array.isArray(l) ? Mi(hl, { children: l }, null, null, null) : l.__b > 0 ? Mi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      u_(e, l, u = u || o_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = c_(l, f, e) : f = f_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Oo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && p_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      __(h[i], h[++i], h[++i]);
}
function c_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? c_(r, t, n) : f_(n, r, r, s, r.__e, t));
  return t;
}
function f_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Bv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || os(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || os(e, o, t[o], n[o], r);
}
function Ac(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Hv.test(t) ? n : n + "px";
}
function os(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ac(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ac(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Tc : Mc, o) : e.removeEventListener(t, o ? Tc : Mc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Mc(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Tc(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function u_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = de.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new qr(h, m), i.constructor = y, i.render = Iv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = sn({}, i.__s)), sn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = de.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = sn(sn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === hl && p.key == null ? p.props.children : p, l_(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Uv(n.__e, t, n, r, s, o, a, f);
    (p = de.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function jv(e, t) {
  de.__c && de.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      de.__e(r, n.__v);
    }
  });
}
function Uv(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && dl.call(e.childNodes), p = (d = n.props || o_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Bv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, l_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Oo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && s_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && os(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && os(e, "checked", _, d.checked, !1));
  }
  return e;
}
function __(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    de.__e(r, n);
  }
}
function p_(e, t, n) {
  var r, s;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || __(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        de.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && p_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || s_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Iv(e, t, n) {
  return this.constructor(e, n);
}
dl = i_.slice, de = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, n_ = 0, r_ = function(e) {
  return e != null && e.constructor === void 0;
}, qr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = sn({}, this.state), typeof e == "function" && (e = e(sn({}, n), this.props)), e && sn(n, e), e != null && this.__v && (t && this._sb.push(t), Oc(this));
}, qr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oc(this));
}, qr.prototype.render = hl, Yr = [], rs.__r = 0;
function ga(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), r = (s, o) => {
    if (Array.isArray(s) && (o = s[1], s = s[0]), !s.length)
      return;
    const a = n.get(s);
    typeof a == "number" ? t[a][1] = !!o : (n.set(s, t.length), t.push([s, !!o]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? ga(...s).forEach(r) : s && typeof s == "object" ? Object.entries(s).forEach(r) : typeof s == "string" && s.split(" ").forEach((o) => r(o, !0));
  }), t.sort((s, o) => (n.get(s[0]) || 0) - (n.get(o[0]) || 0));
}
const G = (...e) => ga(...e).reduce((t, [n, r]) => (r && t.push(n), t), []).join(" ");
function Fv({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return xe(e, {
    className: G(t),
    style: r,
    ...s
  }, n);
}
function d_({
  component: e = "a",
  className: t,
  children: n,
  attrs: r,
  url: s,
  disabled: o,
  active: a,
  icon: c,
  text: f,
  target: p,
  trailingIcon: i,
  hint: d,
  style: u,
  onClick: l
}) {
  const _ = [
    typeof c == "string" ? /* @__PURE__ */ xe("i", {
      class: `icon ${c}`
    }) : c,
    /* @__PURE__ */ xe("span", {
      className: "text"
    }, f),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ xe("i", {
      class: `icon ${i}`
    }) : i
  ];
  return xe(e, {
    className: G(t, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: p,
    style: u,
    onClick: l,
    ...r
  }, ..._);
}
function zv({
  component: e = "div",
  className: t,
  text: n,
  attrs: r,
  children: s,
  style: o,
  onClick: a
}) {
  return xe(e, {
    className: G(t),
    style: o,
    onClick: a,
    ...r
  }, n, typeof s == "function" ? s() : s);
}
function Vv({
  component: e = "div",
  className: t,
  style: n,
  space: r,
  flex: s,
  attrs: o,
  onClick: a,
  children: c
}) {
  return xe(e, {
    className: G(t),
    style: { width: r, height: r, flex: s, ...n },
    onClick: a,
    ...o
  }, c);
}
function Yv(e) {
  const {
    tag: t,
    className: n,
    style: r,
    renders: s,
    generateArgs: o = [],
    generatorThis: a,
    generators: c,
    onGenerate: f,
    onRenderItem: p,
    ...i
  } = e, d = [n], u = { ...r }, l = [], _ = [];
  return s.forEach((g) => {
    var v;
    const h = [];
    typeof g == "string" && c && c[g] && (g = c[g]), typeof g == "function" ? f ? h.push(...f.call(a, g, l, ...o)) : h.push(...(v = g.call(a, l, ...o)) != null ? v : []) : h.push(g), h.forEach((m) => {
      var k;
      m != null && (typeof m == "object" && !Yu(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? l.push(
        /* @__PURE__ */ va("div", {
          className: G(m.className),
          style: m.style,
          dangerouslySetInnerHTML: { __html: m.html },
          ...(k = m.attrs) != null ? k : {}
        })
      ) : m.__html ? _.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && l.push(m.children), m.attrs && Object.assign(i, m.attrs)) : l.push(m));
    });
  }), _.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: G(d),
    style: u,
    ...i
  }, l];
}
function Fa({
  tag: e = "div",
  ...t
}) {
  const [n, r] = Yv(t);
  return va(e, n, ...r);
}
function qv(e) {
  return /* @__PURE__ */ xe(Fa, {
    ...e
  });
}
function h_({
  component: e = "div",
  className: t,
  children: n,
  style: r,
  attrs: s
}) {
  return xe(e, {
    className: G(t),
    style: r,
    ...s
  }, n);
}
const qs = class extends qr {
  constructor() {
    super(...arguments);
    P(this, "ref", Wv());
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var n, r;
    (r = (n = this.props).beforeDestroy) == null || r.call(n, { menu: this });
  }
  afterRender(n) {
    var r, s;
    (s = (r = this.props).afterRender) == null || s.call(r, { menu: this, firstRender: n });
  }
  handleItemClick(n, r, s, o) {
    s && s.call(o.target, o);
    const { onClickItem: a } = this.props;
    a && a({ menu: this, item: n, index: r, event: o });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const r = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return r && Object.assign(n, r), n;
  }
  getItemRenderProps(n, r, s) {
    const { itemProps: o, onClickItem: a } = n, c = { key: s, ...r };
    return o && Object.assign(c, o[r.type || "item"]), (a || r.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, r.onClick)), c.className = G(c.className), c;
  }
  renderItem(n, r, s) {
    const o = this.getItemRenderProps(n, r, s), { itemRender: a } = n;
    if (a) {
      if (typeof a == "object") {
        const h = a[r.type || "item"];
        if (h)
          return /* @__PURE__ */ xe(h, {
            ...o
          });
      } else if (typeof a == "function") {
        const h = a.call(this, o, xe);
        if (r_(h))
          return h;
        typeof h == "object" && Object.assign(o, h);
      }
    }
    const { type: c = "item", component: f, key: p = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: l, ..._ } = o, g = !f || typeof f == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || qs.ItemComponents[c] : f;
    return Object.assign(_, {
      type: c,
      component: typeof f == "string" ? f : void 0
    }), this.renderTypedItem(g, {
      className: G(d),
      children: l,
      style: u,
      key: p,
      ...i
    }, {
      ..._,
      type: c,
      component: typeof f == "string" ? f : void 0
    });
  }
  renderTypedItem(n, r, s) {
    const { children: o, className: a, key: c, ...f } = r;
    return /* @__PURE__ */ xe("li", {
      className: G(`${this.name}-${s.type}`, a),
      key: c,
      ...f
    }, /* @__PURE__ */ xe(n, {
      ...s
    }), typeof o == "function" ? o() : o);
  }
  render() {
    const n = this.beforeRender(), {
      name: r,
      style: s,
      itemProps: o,
      className: a,
      items: c,
      children: f,
      itemRender: p,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: l,
      ..._
    } = n, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ xe(g, {
      class: G(this.name, a),
      ..._,
      ref: this.ref
    }, c && c.map(this.renderItem.bind(this, n)), f);
  }
};
let Ft = qs;
P(Ft, "ItemComponents", {
  divider: Fv,
  item: d_,
  heading: zv,
  space: Vv,
  custom: qv,
  basic: h_
}), P(Ft, "ROOT_TAG", "menu"), P(Ft, "NAME", "action-menu");
class Dc extends Ke {
}
P(Dc, "NAME", "actionmenu"), P(Dc, "Component", Ft);
function Lc({
  ...e
}) {
  return /* @__PURE__ */ xe(d_, {
    ...e
  });
}
var Zo, bt, Xn;
class vl extends Ft {
  constructor(n) {
    var r;
    super(n);
    R(this, Zo, /* @__PURE__ */ new Set());
    R(this, bt, void 0);
    R(this, Xn, (n, r, s) => {
      this.toggleNestedMenu(n, r), s.preventDefault();
    });
    U(this, bt, n.nestedShow === void 0), $(this, bt) && (this.state = { nestedShow: (r = n.defaultNestedShow) != null ? r : {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: r, nestedTrigger: s, defaultNestedShow: o, controlledMenu: a, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: r } = n;
    if (!r || (typeof r == "function" && (r = r(n, this)), !r.length))
      return;
    const s = this.constructor;
    return /* @__PURE__ */ xe(s, {
      items: r,
      name: this.props.name,
      nestedShow: $(this, bt) ? this.state.nestedShow : this.props.nestedShow,
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
  renderToggleIcon(n, r) {
  }
  getItemRenderProps(n, r, s) {
    var p;
    const o = super.getItemRenderProps(n, r, s);
    if (!this.isNestedItem(o))
      return o;
    const a = (p = o.key) != null ? p : s;
    $(this, Zo).add(a);
    const c = this.isNestedMenuShow(a);
    if (c && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(r)
    ], o.component = Lc), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: $(this, Xn).bind(this, a, !0),
        onMouseLeave: $(this, Xn).bind(this, a, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: i } = o;
      o.onClick = (d) => {
        $(this, Xn).call(this, a, void 0, d), i == null || i(d);
      };
    }
    const f = this.renderToggleIcon(c, o);
    return f && (o.children = [o.children, f]), o.rootClass = [o.rootClass, "has-nested-menu", c ? "show" : ""], o;
  }
  isNestedMenuShow(n) {
    const r = $(this, bt) ? this.state.nestedShow : this.props.nestedShow;
    return r && typeof r == "object" ? r[n] : !!r;
  }
  toggleNestedMenu(n, r) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, r);
    if (!$(this, bt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...$(this, Zo).values()].reduce((a, c) => (a[c] = !0, a), {}) : o = {}), r === void 0)
      r = !o[n];
    else if (!!o[n] == !!r)
      return !1;
    return r ? o[n] = r : delete o[n], this.setState({ nestedShow: { ...o } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    !$(this, bt) || this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    !$(this, bt) || this.setState({ nestedShow: !1 });
  }
}
Zo = new WeakMap(), bt = new WeakMap(), Xn = new WeakMap(), P(vl, "ItemComponents", {
  item: Lc
});
class Pc extends Ke {
}
P(Pc, "NAME", "actionmenunested"), P(Pc, "Component", vl);
var ml, he, v_, Gr, Nc, m_ = {}, g_ = [], Gv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function an(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function y_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Vn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ml.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ti(e, a, r, s, null);
}
function Ti(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++v_ : s };
  return s == null && he.vnode != null && he.vnode(o), o;
}
function gl(e) {
  return e.children;
}
function Xr(e, t) {
  this.props = e, this.context = t;
}
function Ao(e, t) {
  if (t == null)
    return e.__ ? Ao(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ao(e) : null;
}
function b_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return b_(e);
  }
}
function Rc(e) {
  (!e.__d && (e.__d = !0) && Gr.push(e) && !is.__r++ || Nc !== he.debounceRendering) && ((Nc = he.debounceRendering) || setTimeout)(is);
}
function is() {
  for (var e; is.__r = Gr.length; )
    e = Gr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Gr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = an({}, o)).__v = o.__v + 1, x_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ao(o) : a, o.__h), Kv(r, o), o.__e != a && b_(o)));
    });
}
function w_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || g_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ti(null, l, null, null, l) : Array.isArray(l) ? Ti(gl, { children: l }, null, null, null) : l.__b > 0 ? Ti(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      x_(e, l, u = u || m_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = $_(l, f, e) : f = k_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ao(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && E_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      S_(h[i], h[++i], h[++i]);
}
function $_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? $_(r, t, n) : k_(n, r, r, s, r.__e, t));
  return t;
}
function k_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Xv(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ss(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ss(e, o, t[o], n[o], r);
}
function Hc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gv.test(t) ? n : n + "px";
}
function ss(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Hc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Hc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Bc : Wc, o) : e.removeEventListener(t, o ? Bc : Wc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Wc(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function Bc(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function x_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = he.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Xr(h, m), i.constructor = y, i.render = Jv), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = an({}, i.__s)), an(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = he.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = an(an({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === gl && p.key == null ? p.props.children : p, w_(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Zv(n.__e, t, n, r, s, o, a, f);
    (p = he.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Kv(e, t) {
  he.__c && he.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      he.__e(r, n.__v);
    }
  });
}
function Zv(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && ml.call(e.childNodes), p = (d = n.props || m_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Xv(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, w_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ao(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && y_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ss(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ss(e, "checked", _, d.checked, !1));
  }
  return e;
}
function S_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    he.__e(r, n);
  }
}
function E_(e, t, n) {
  var r, s;
  if (he.unmount && he.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || S_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        he.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && E_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || y_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jv(e, t, n) {
  return this.constructor(e, n);
}
ml = g_.slice, he = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, v_ = 0, Xr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = an({}, this.state), typeof e == "function" && (e = e(an({}, n), this.props)), e && an(n, e), e != null && this.__v && (t && this._sb.push(t), Rc(this));
}, Xr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rc(this));
}, Xr.prototype.render = gl, Gr = [], is.__r = 0;
class kn extends Xr {
  render() {
    const {
      component: t,
      type: n,
      size: r,
      className: s,
      children: o,
      url: a,
      target: c,
      disabled: f,
      active: p,
      loading: i,
      loadingIcon: d,
      loadingText: u,
      icon: l,
      text: _,
      trailingIcon: g,
      caret: h,
      square: v,
      hint: m,
      ...k
    } = this.props, b = t || (a ? "a" : "button"), C = _ == null || typeof _ == "string" && !_.length || i && !u, w = C && !l && !g && !o && !i;
    return Vn(
      b,
      {
        className: G("btn", n, s, {
          "btn-caret": w,
          disabled: f || i,
          active: p,
          loading: i,
          square: v === void 0 ? !w && !o && C : v
        }, r ? `size-${r}` : ""),
        title: m,
        [b === "a" ? "href" : "data-url"]: a,
        [b === "a" ? "target" : "data-target"]: c,
        type: b === "button" ? "button" : void 0,
        ...k
      },
      i ? /* @__PURE__ */ Vn("i", {
        class: `spin icon ${d || "icon-spinner-snake"}`
      }) : typeof l == "string" ? /* @__PURE__ */ Vn("i", {
        class: `icon ${l}`
      }) : l,
      C ? null : /* @__PURE__ */ Vn("span", {
        className: "text"
      }, i ? u : _),
      i ? null : o,
      i ? null : typeof g == "string" ? /* @__PURE__ */ Vn("i", {
        class: `icon ${g}`
      }) : g,
      i ? null : h ? /* @__PURE__ */ Vn("span", {
        className: typeof h == "string" ? `caret-${h}` : "caret"
      }) : null
    );
  }
}
class jc extends Ke {
}
P(jc, "NAME", "button"), P(jc, "Component", kn);
var C_, za, O_, Qv = [];
function em(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? C_.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return tm(e, a, r, s, null);
}
function tm(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++O_ : s };
  return s == null && za.vnode != null && za.vnode(o), o;
}
C_ = Qv.slice, za = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, O_ = 0;
class yl extends vl {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((r) => r.icon)), t.className = G(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((r) => this.isNestedItem(r))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ em("span", {
      class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}`
    });
  }
}
P(yl, "NAME", "menu");
class Uc extends Ke {
}
P(Uc, "NAME", "menu"), P(Uc, "Component", yl);
var ya, ae, A_, Kr, Ic, as = {}, M_ = [], nm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ln(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function T_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bn(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ya.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Di(e, a, r, s, null);
}
function Di(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++A_ : s };
  return s == null && ae.vnode != null && ae.vnode(o), o;
}
function ba(e) {
  return e.children;
}
function Yn(e, t) {
  this.props = e, this.context = t;
}
function Mo(e, t) {
  if (t == null)
    return e.__ ? Mo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Mo(e) : null;
}
function D_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return D_(e);
  }
}
function Fc(e) {
  (!e.__d && (e.__d = !0) && Kr.push(e) && !ls.__r++ || Ic !== ae.debounceRendering) && ((Ic = ae.debounceRendering) || setTimeout)(ls);
}
function ls() {
  for (var e; ls.__r = Kr.length; )
    e = Kr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Kr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = ln({}, o)).__v = o.__v + 1, bl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Mo(o) : a, o.__h), R_(r, o), o.__e != a && D_(o)));
    });
}
function L_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || M_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Di(null, l, null, null, l) : Array.isArray(l) ? Di(ba, { children: l }, null, null, null) : l.__b > 0 ? Di(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      bl(e, l, u = u || as, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = P_(l, f, e) : f = N_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Mo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && W_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      H_(h[i], h[++i], h[++i]);
}
function P_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? P_(r, t, n) : N_(n, r, r, s, r.__e, t));
  return t;
}
function N_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function rm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || cs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || cs(e, o, t[o], n[o], r);
}
function zc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || nm.test(t) ? n : n + "px";
}
function cs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || zc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || zc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yc : Vc, o) : e.removeEventListener(t, o ? Yc : Vc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Vc(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function Yc(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function bl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ae.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Yn(h, m), i.constructor = y, i.render = im), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ln({}, i.__s)), ln(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ae.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = ln(ln({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === ba && p.key == null ? p.props.children : p, L_(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = om(n.__e, t, n, r, s, o, a, f);
    (p = ae.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function R_(e, t) {
  ae.__c && ae.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ae.__e(r, n.__v);
    }
  });
}
function om(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && ya.call(e.childNodes), p = (d = n.props || as).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (rm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, L_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Mo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && T_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && cs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && cs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function H_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ae.__e(r, n);
  }
}
function W_(e, t, n) {
  var r, s;
  if (ae.unmount && ae.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ae.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && W_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || T_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function im(e, t, n) {
  return this.constructor(e, n);
}
function qc(e, t, n) {
  var r, s, o;
  ae.__ && ae.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], bl(t, e = (!r && n || t).__k = bn(ba, null, [e]), s || as, as, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? ya.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), R_(o, e);
}
ya = M_.slice, ae = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, A_ = 0, Yn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ln({}, this.state), typeof e == "function" && (e = e(ln({}, n), this.props)), e && ln(n, e), e != null && this.__v && (t && this._sb.push(t), Fc(this));
}, Yn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fc(this));
}, Yn.prototype.render = ba, Kr = [], ls.__r = 0;
var wl, ve, B_, j_, Zr, Gc, U_ = {}, I_ = [], sm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function cn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function F_(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Wa(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? wl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Li(e, a, r, s, null);
}
function Li(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++B_ : s };
  return s == null && ve.vnode != null && ve.vnode(o), o;
}
function $l(e) {
  return e.children;
}
function Jr(e, t) {
  this.props = e, this.context = t;
}
function To(e, t) {
  if (t == null)
    return e.__ ? To(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? To(e) : null;
}
function z_(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return z_(e);
  }
}
function Xc(e) {
  (!e.__d && (e.__d = !0) && Zr.push(e) && !fs.__r++ || Gc !== ve.debounceRendering) && ((Gc = ve.debounceRendering) || setTimeout)(fs);
}
function fs() {
  for (var e; fs.__r = Zr.length; )
    e = Zr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = cn({}, o)).__v = o.__v + 1, G_(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? To(o) : a, o.__h), lm(r, o), o.__e != a && z_(o)));
    });
}
function V_(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || I_, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Li(null, l, null, null, l) : Array.isArray(l) ? Li($l, { children: l }, null, null, null) : l.__b > 0 ? Li(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      G_(e, l, u = u || U_, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Y_(l, f, e) : f = q_(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = To(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && K_(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      X_(h[i], h[++i], h[++i]);
}
function Y_(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Y_(r, t, n) : q_(n, r, r, s, r.__e, t));
  return t;
}
function q_(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function am(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || us(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || us(e, o, t[o], n[o], r);
}
function Kc(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || sm.test(t) ? n : n + "px";
}
function us(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Kc(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Kc(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Jc : Zc, o) : e.removeEventListener(t, o ? Jc : Zc, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Zc(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function Jc(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function G_(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ve.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Jr(h, m), i.constructor = y, i.render = fm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = cn({}, i.__s)), cn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ve.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = cn(cn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === $l && p.key == null ? p.props.children : p, V_(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cm(n.__e, t, n, r, s, o, a, f);
    (p = ve.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function lm(e, t) {
  ve.__c && ve.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ve.__e(r, n.__v);
    }
  });
}
function cm(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && wl.call(e.childNodes), p = (d = n.props || U_).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (am(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, V_(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && To(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && F_(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && us(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && us(e, "checked", _, d.checked, !1));
  }
  return e;
}
function X_(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ve.__e(r, n);
  }
}
function K_(e, t, n) {
  var r, s;
  if (ve.unmount && ve.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || X_(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ve.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && K_(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || F_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fm(e, t, n) {
  return this.constructor(e, n);
}
wl = I_.slice, ve = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, B_ = 0, j_ = function(e) {
  return e != null && e.constructor === void 0;
}, Jr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = cn({}, this.state), typeof e == "function" && (e = e(cn({}, n), this.props)), e && cn(n, e), e != null && this.__v && (t && this._sb.push(t), Xc(this));
}, Jr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Xc(this));
}, Jr.prototype.render = $l, Zr = [], fs.__r = 0;
class kl extends Jr {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  handleItemClick(t, n, r, s) {
    r && r.call(s.target, s);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: n, event: s });
  }
  beforeRender() {
    var r;
    const t = { ...this.props }, n = (r = t.beforeRender) == null ? void 0 : r.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: r = n, ...s } = t;
    return /* @__PURE__ */ Wa(kn, {
      key: r,
      ...s
    });
  }
  renderItem(t, n, r) {
    const { itemRender: s, defaultBtnProps: o, onClickItem: a } = t, c = { key: r, ...n };
    if (o && Object.assign(c, o), a && (c.onClick = this.handleItemClick.bind(this, c, r, n.onClick)), s) {
      const f = s.call(this, c, Wa);
      if (j_(f))
        return f;
      typeof f == "object" && Object.assign(c, f);
    }
    return this.onRenderItem(c, r);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: r,
      size: s,
      type: o,
      defaultBtnProps: a,
      children: c,
      itemRender: f,
      onClickItem: p,
      beforeRender: i,
      afterRender: d,
      beforeDestroy: u,
      ...l
    } = t;
    return /* @__PURE__ */ Wa("div", {
      className: G("btn-group", s ? `size-${s}` : "", n),
      ...l
    }, r && r.map(this.renderItem.bind(this, t)), c);
  }
}
function um({
  ...e
}) {
  return /* @__PURE__ */ bn(kl, {
    ...e
  });
}
class Z_ extends Yn {
  render() {
    const { message: t, className: n, type: r, actions: s, close: o } = this.props, a = G([r, "border-none"]), c = s != null && s.length ? s.map((f) => ({ ...f, className: a })) : [];
    if (o) {
      const f = {
        name: "times",
        icon: "icon-times",
        className: a,
        action: function() {
          console.log("\u4F60\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE\u3002");
        }
      };
      c.push(f);
    }
    return /* @__PURE__ */ bn("div", {
      class: G([n, r || "default", "messager"])
    }, /* @__PURE__ */ bn("div", {
      class: "messager-content"
    }, t), /* @__PURE__ */ bn(um, {
      items: c
    }));
  }
}
P(Z_, "defaultProps");
class J_ extends Yn {
  render() {
    const { className: t, placement: n } = this.props;
    return /* @__PURE__ */ bn("div", {
      class: G([t || "", "messagers-holder", "col"]),
      "data-placement": n
    });
  }
}
P(J_, "defaultProps");
class Qc extends ft {
  show(t, n) {
    console.log(t, n, "showFunc");
    const r = n != null && n.placement ? n.placement : "top", s = (n == null ? void 0 : n.close) !== !1;
    let o = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    if (!o) {
      const f = document.createElement("div");
      document.body.appendChild(f);
      const p = {
        ...n,
        placement: r
      };
      qc(bn(J_, p), f);
    }
    o = document.querySelector(".messagers-holder[data-placement=" + r + "]");
    const a = document.createElement("div");
    o.appendChild(a);
    const c = {
      ...n,
      message: t,
      placement: r,
      close: s
    };
    qc(bn(Z_, c), o, a);
  }
}
P(Qc, "NAME", "messager"), P(Qc, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var xl, me, Q_, Qr, ef, ep = {}, tp = [], _m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function fn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function np(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function $i(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Pi(e, a, r, s, null);
}
function Pi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Q_ : s };
  return s == null && me.vnode != null && me.vnode(o), o;
}
function Sl(e) {
  return e.children;
}
function eo(e, t) {
  this.props = e, this.context = t;
}
function Do(e, t) {
  if (t == null)
    return e.__ ? Do(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Do(e) : null;
}
function rp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rp(e);
  }
}
function tf(e) {
  (!e.__d && (e.__d = !0) && Qr.push(e) && !_s.__r++ || ef !== me.debounceRendering) && ((ef = me.debounceRendering) || setTimeout)(_s);
}
function _s() {
  for (var e; _s.__r = Qr.length; )
    e = Qr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qr = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = fn({}, o)).__v = o.__v + 1, ap(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Do(o) : a, o.__h), dm(r, o), o.__e != a && rp(o)));
    });
}
function op(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || tp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Pi(null, l, null, null, l) : Array.isArray(l) ? Pi(Sl, { children: l }, null, null, null) : l.__b > 0 ? Pi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      ap(e, l, u = u || ep, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = ip(l, f, e) : f = sp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Do(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && cp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      lp(h[i], h[++i], h[++i]);
}
function ip(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? ip(r, t, n) : sp(n, r, r, s, r.__e, t));
  return t;
}
function sp(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function pm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ps(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ps(e, o, t[o], n[o], r);
}
function nf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _m.test(t) ? n : n + "px";
}
function ps(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || nf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || nf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? of : rf, o) : e.removeEventListener(t, o ? of : rf, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function rf(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function of(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function ap(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = me.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new eo(h, m), i.constructor = y, i.render = vm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = fn({}, i.__s)), fn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = me.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = fn(fn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === Sl && p.key == null ? p.props.children : p, op(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hm(n.__e, t, n, r, s, o, a, f);
    (p = me.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function dm(e, t) {
  me.__c && me.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      me.__e(r, n.__v);
    }
  });
}
function hm(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && xl.call(e.childNodes), p = (d = n.props || ep).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (pm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, op(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Do(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && np(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ps(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ps(e, "checked", _, d.checked, !1));
  }
  return e;
}
function lp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    me.__e(r, n);
  }
}
function cp(e, t, n) {
  var r, s;
  if (me.unmount && me.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || lp(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        me.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && cp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || np(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vm(e, t, n) {
  return this.constructor(e, n);
}
xl = tp.slice, me = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Q_ = 0, eo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fn({}, this.state), typeof e == "function" && (e = e(fn({}, n), this.props)), e && fn(n, e), e != null && this.__v && (t && this._sb.push(t), tf(this));
}, eo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tf(this));
}, eo.prototype.render = Sl, Qr = [], _s.__r = 0;
class Va extends eo {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: r, circleBgColor: s, circleColor: o } = this.props, a = (n - r) / 2, c = n / 2;
    return /* @__PURE__ */ $i("svg", {
      width: n,
      height: n,
      class: "progress-circle"
    }, /* @__PURE__ */ $i("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: s,
      "stroke-width": r
    }), /* @__PURE__ */ $i("circle", {
      cx: c,
      cy: c,
      r: a,
      stroke: o,
      "stroke-dasharray": Math.PI * a * 2,
      "stroke-dashoffset": Math.PI * a * 2 * (100 - t) / 100,
      "stroke-width": r
    }), /* @__PURE__ */ $i("text", {
      x: c,
      y: c + r / 4,
      "dominant-baseline": "middle",
      style: { fontSize: `${a}px` }
    }, Math.round(t)));
  }
}
P(Va, "NAME", "zui.progress-circle"), P(Va, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
});
class sf extends Ke {
}
P(sf, "NAME", "table-sorter"), P(sf, "Component", Va);
function mm(e) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const r = document.createRange();
      return r.selectNodeContents(t), n.removeAllRanges(), n.addRange(r), !0;
    }
  }
  return !1;
}
function gm(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function ym(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= s;
  const a = r.top <= s && r.top + r.height >= 0, c = r.left <= o && r.left + r.width >= 0;
  return a && c;
}
const _k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: mm,
  domReady: gm,
  isElementVisible: ym,
  getClassList: ga,
  classes: G
}, Symbol.toStringTag, { value: "Module" }));
let bm = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Jo, Zt, wt, Kn, Zn, Ni;
const yc = class {
  constructor(t, n = "local") {
    R(this, Zn);
    R(this, Jo, void 0);
    R(this, Zt, void 0);
    R(this, wt, void 0);
    R(this, Kn, void 0);
    U(this, Jo, n), U(this, Zt, `ZUI_STORE:${t != null ? t : bm()}`), U(this, wt, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return $(this, Jo);
  }
  get session() {
    return this.type === "session" ? this : ($(this, Kn) || U(this, Kn, new yc($(this, Zt), "session")), $(this, Kn));
  }
  get(t, n) {
    const r = $(this, wt).getItem(ne(this, Zn, Ni).call(this, t));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(t, n) {
    if (n == null)
      return this.remove(t);
    $(this, wt).setItem(ne(this, Zn, Ni).call(this, t), JSON.stringify(n));
  }
  remove(t) {
    $(this, wt).removeItem(ne(this, Zn, Ni).call(this, t));
  }
  each(t) {
    for (let n = 0; n < $(this, wt).length; n++) {
      const r = $(this, wt).key(n);
      if (r != null && r.startsWith($(this, Zt))) {
        const s = $(this, wt).getItem(r);
        typeof s == "string" && t(r.substring($(this, Zt).length + 1), JSON.parse(s));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((n, r) => {
      t[n] = r;
    }), t;
  }
};
let ds = yc;
Jo = new WeakMap(), Zt = new WeakMap(), wt = new WeakMap(), Kn = new WeakMap(), Zn = new WeakSet(), Ni = function(t) {
  return `${$(this, Zt)}:${t}`;
};
const wm = new ds("DEFAULT");
function $m(e, t = "local") {
  return new ds(e, t);
}
Object.assign(wm, { create: $m });
var El, ge, fp, to, af, up = {}, _p = [], km = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function un(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ba(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? El.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ri(e, a, r, s, null);
}
function Ri(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++fp : s };
  return s == null && ge.vnode != null && ge.vnode(o), o;
}
function Cl(e) {
  return e.children;
}
function no(e, t) {
  this.props = e, this.context = t;
}
function Lo(e, t) {
  if (t == null)
    return e.__ ? Lo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Lo(e) : null;
}
function dp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return dp(e);
  }
}
function lf(e) {
  (!e.__d && (e.__d = !0) && to.push(e) && !hs.__r++ || af !== ge.debounceRendering) && ((af = ge.debounceRendering) || setTimeout)(hs);
}
function hs() {
  for (var e; hs.__r = to.length; )
    e = to.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), to = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = un({}, o)).__v = o.__v + 1, gp(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lo(o) : a, o.__h), Sm(r, o), o.__e != a && dp(o)));
    });
}
function hp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || _p, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ri(null, l, null, null, l) : Array.isArray(l) ? Ri(Cl, { children: l }, null, null, null) : l.__b > 0 ? Ri(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      gp(e, l, u = u || up, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = vp(l, f, e) : f = mp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Lo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && bp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      yp(h[i], h[++i], h[++i]);
}
function vp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? vp(r, t, n) : mp(n, r, r, s, r.__e, t));
  return t;
}
function mp(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function xm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || vs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || vs(e, o, t[o], n[o], r);
}
function cf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || km.test(t) ? n : n + "px";
}
function vs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || cf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || cf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? uf : ff, o) : e.removeEventListener(t, o ? uf : ff, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ff(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function uf(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function gp(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ge.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new no(h, m), i.constructor = y, i.render = Cm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = un({}, i.__s)), un(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ge.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = un(un({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === Cl && p.key == null ? p.props.children : p, hp(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Em(n.__e, t, n, r, s, o, a, f);
    (p = ge.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ge.__e(x, t, n);
  }
}
function Sm(e, t) {
  ge.__c && ge.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ge.__e(r, n.__v);
    }
  });
}
function Em(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && El.call(e.childNodes), p = (d = n.props || up).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (xm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, hp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Lo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && pp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && vs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && vs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function yp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ge.__e(r, n);
  }
}
function bp(e, t, n) {
  var r, s;
  if (ge.unmount && ge.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || yp(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ge.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && bp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || pp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Cm(e, t, n) {
  return this.constructor(e, n);
}
El = _p.slice, ge = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, fp = 0, no.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = un({}, this.state), typeof e == "function" && (e = e(un({}, n), this.props)), e && un(n, e), e != null && this.__v && (t && this._sb.push(t), lf(this));
}, no.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), lf(this));
}, no.prototype.render = Cl, to = [], hs.__r = 0;
function Om(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16)
  ];
}
function Am(e) {
  const [t, n, r] = typeof e == "string" ? Om(e) : e;
  return t * 0.299 + n * 0.587 + r * 0.114 > 186;
}
function _f(e, t) {
  var n, r;
  return Am(e) ? (n = t == null ? void 0 : t.dark) != null ? n : "#333333" : (r = t == null ? void 0 : t.light) != null ? r : "#ffffff";
}
function pf(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Mm(e, t, n) {
  e = e % 360 / 360, t = pf(t), n = pf(n);
  const r = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - r, o = (a) => (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, a * 6 < 1 ? s + (r - s) * a * 6 : a * 2 < 1 ? r : a * 3 < 2 ? s + (r - s) * (2 / 3 - a) * 6 : s);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Tm(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Dm(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
class Lm extends no {
  render() {
    const {
      className: t,
      style: n,
      size: r = "",
      circle: s,
      rounded: o,
      background: a,
      foreColor: c,
      text: f,
      code: p,
      maxTextLength: i = 2,
      src: d,
      hueDistance: u = 43,
      saturation: l = 0.4,
      lightness: _ = 0.6,
      children: g,
      ...h
    } = this.props, v = ["avatar", t], m = { ...n, background: a, color: c };
    let k = 32;
    r && (typeof r == "number" ? (m.width = `${r}px`, m.height = `${r}px`, m.fontSize = `${Math.max(12, Math.round(r / 2))}px`, k = r) : (v.push(`size-${r}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[r])), s ? v.push("circle") : o && (typeof o == "number" ? m.borderRadius = `${o}px` : v.push(`rounded-${o}`));
    let b;
    if (d)
      v.push("has-img"), b = /* @__PURE__ */ Ba("img", {
        className: "avatar-img",
        src: d,
        alt: f
      });
    else if (f != null && f.length) {
      const C = Dm(f, i);
      if (v.push("has-text", `has-text-${C.length}`), a)
        !c && a && (m.color = _f(a));
      else {
        const A = p != null ? p : f, y = (typeof A == "number" ? A : Tm(A)) * u % 360;
        if (m.background = `hsl(${y},${l * 100}%,${_ * 100}%)`, !c) {
          const x = Mm(y, l, _);
          m.color = _f(x);
        }
      }
      let w;
      k && k < 14 * C.length && (w = { transform: `scale(${k / (14 * C.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ Ba("div", {
        "data-actualSize": k,
        className: "avatar-text",
        style: w
      }, C);
    }
    return /* @__PURE__ */ Ba("div", {
      className: G(v),
      style: m,
      ...h
    }, b, g);
  }
}
class df extends Ke {
}
P(df, "NAME", "avatar"), P(df, "Component", Lm);
class hf extends Ke {
}
P(hf, "NAME", "btngroup"), P(hf, "Component", kl);
var wa, le, wp, ro, vf, ms = {}, $p = [], Pm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function _n(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function kp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function J(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? wa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Hi(e, a, r, s, null);
}
function Hi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++wp : s };
  return s == null && le.vnode != null && le.vnode(o), o;
}
function Nm() {
  return { current: null };
}
function $a(e) {
  return e.children;
}
function oo(e, t) {
  this.props = e, this.context = t;
}
function Po(e, t) {
  if (t == null)
    return e.__ ? Po(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Po(e) : null;
}
function xp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xp(e);
  }
}
function mf(e) {
  (!e.__d && (e.__d = !0) && ro.push(e) && !gs.__r++ || vf !== le.debounceRendering) && ((vf = le.debounceRendering) || setTimeout)(gs);
}
function gs() {
  for (var e; gs.__r = ro.length; )
    e = ro.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ro = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = _n({}, o)).__v = o.__v + 1, Ol(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Po(o) : a, o.__h), Op(r, o), o.__e != a && xp(o)));
    });
}
function Sp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || $p, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Hi(null, l, null, null, l) : Array.isArray(l) ? Hi($a, { children: l }, null, null, null) : l.__b > 0 ? Hi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Ol(e, l, u = u || ms, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ep(l, f, e) : f = Cp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Po(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Mp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ap(h[i], h[++i], h[++i]);
}
function Ep(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ep(r, t, n) : Cp(n, r, r, s, r.__e, t));
  return t;
}
function Cp(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Rm(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || ys(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || ys(e, o, t[o], n[o], r);
}
function gf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pm.test(t) ? n : n + "px";
}
function ys(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || gf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || gf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? bf : yf, o) : e.removeEventListener(t, o ? bf : yf, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function yf(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function bf(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function Ol(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = le.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new oo(h, m), i.constructor = y, i.render = Wm), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = _n({}, i.__s)), _n(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = le.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = _n(_n({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === $a && p.key == null ? p.props.children : p, Sp(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hm(n.__e, t, n, r, s, o, a, f);
    (p = le.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), le.__e(x, t, n);
  }
}
function Op(e, t) {
  le.__c && le.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      le.__e(r, n.__v);
    }
  });
}
function Hm(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && wa.call(e.childNodes), p = (d = n.props || ms).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Rm(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Sp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Po(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && kp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && ys(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && ys(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ap(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    le.__e(r, n);
  }
}
function Mp(e, t, n) {
  var r, s;
  if (le.unmount && le.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ap(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        le.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Mp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || kp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wm(e, t, n) {
  return this.constructor(e, n);
}
function Bm(e, t, n) {
  var r, s, o;
  le.__ && le.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Ol(t, e = (!r && n || t).__k = J($a, null, [e]), s || ms, ms, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? wa.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Op(o, e);
}
wa = $p.slice, le = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wp = 0, oo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _n({}, this.state), typeof e == "function" && (e = e(_n({}, n), this.props)), e && _n(n, e), e != null && this.__v && (t && this._sb.push(t), mf(this));
}, oo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), mf(this));
}, oo.prototype.render = $a, ro = [], gs.__r = 0;
var Tp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dp = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Tp, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], E = T % 100;
      return "[" + T + (M[(E - 20) % 10] || M[E] || M[0]) + "]";
    } }, k = function(T, M, E) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(E) + T;
    }, b = { s: k, z: function(T) {
      var M = -T.utcOffset(), E = Math.abs(M), D = Math.floor(E / 60), S = E % 60;
      return (M <= 0 ? "+" : "-") + k(D, 2, "0") + ":" + k(S, 2, "0");
    }, m: function T(M, E) {
      if (M.date() < E.date())
        return -T(E, M);
      var D = 12 * (E.year() - M.year()) + (E.month() - M.month()), S = M.clone().add(D, d), N = E - S < 0, L = M.clone().add(D + (N ? -1 : 1), d);
      return +(-(D + (E - S) / (N ? S - L : L - S)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, C = "en", w = {};
    w[C] = m;
    var A = function(T) {
      return T instanceof W;
    }, y = function T(M, E, D) {
      var S;
      if (!M)
        return C;
      if (typeof M == "string") {
        var N = M.toLowerCase();
        w[N] && (S = N), E && (w[N] = E, S = N);
        var L = M.split("-");
        if (!S && L.length > 1)
          return T(L[0]);
      } else {
        var B = M.name;
        w[B] = M, S = B;
      }
      return !D && S && (C = S), S || !D && C;
    }, x = function(T, M) {
      if (A(T))
        return T.clone();
      var E = typeof M == "object" ? M : {};
      return E.date = T, E.args = arguments, new W(E);
    }, O = b;
    O.l = y, O.i = A, O.w = function(T, M) {
      return x(T, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var W = function() {
      function T(E) {
        this.$L = y(E.locale, null, !0), this.parse(E);
      }
      var M = T.prototype;
      return M.parse = function(E) {
        this.$d = function(D) {
          var S = D.date, N = D.utc;
          if (S === null)
            return new Date(NaN);
          if (O.u(S))
            return new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var L = S.match(h);
            if (L) {
              var B = L[2] - 1 || 0, F = (L[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(L[1], B, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F)) : new Date(L[1], B, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F);
            }
          }
          return new Date(S);
        }(E), this.$x = E.x || {}, this.init();
      }, M.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, M.$utils = function() {
        return O;
      }, M.isValid = function() {
        return this.$d.toString() !== g;
      }, M.isSame = function(E, D) {
        var S = x(E);
        return this.startOf(D) <= S && S <= this.endOf(D);
      }, M.isAfter = function(E, D) {
        return x(E) < this.startOf(D);
      }, M.isBefore = function(E, D) {
        return this.endOf(D) < x(E);
      }, M.$g = function(E, D, S) {
        return O.u(E) ? this[D] : this.set(S, E);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(E, D) {
        var S = this, N = !!O.u(D) || D, L = O.p(E), B = function(Y, q) {
          var te = O.w(S.$u ? Date.UTC(S.$y, q, Y) : new Date(S.$y, q, Y), S);
          return N ? te : te.endOf(p);
        }, F = function(Y, q) {
          return O.w(S.toDate()[Y].apply(S.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), S);
        }, I = this.$W, z = this.$M, X = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case l:
            return N ? B(1, 0) : B(31, 11);
          case d:
            return N ? B(1, z) : B(0, z + 1);
          case i:
            var V = this.$locale().weekStart || 0, K = (I < V ? I + 7 : I) - V;
            return B(N ? X - K : X + (6 - K), z);
          case p:
          case _:
            return F(H + "Hours", 0);
          case f:
            return F(H + "Minutes", 1);
          case c:
            return F(H + "Seconds", 2);
          case a:
            return F(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(E) {
        return this.startOf(E, !1);
      }, M.$set = function(E, D) {
        var S, N = O.p(E), L = "set" + (this.$u ? "UTC" : ""), B = (S = {}, S[p] = L + "Date", S[_] = L + "Date", S[d] = L + "Month", S[l] = L + "FullYear", S[f] = L + "Hours", S[c] = L + "Minutes", S[a] = L + "Seconds", S[o] = L + "Milliseconds", S)[N], F = N === p ? this.$D + (D - this.$W) : D;
        if (N === d || N === l) {
          var I = this.clone().set(_, 1);
          I.$d[B](F), I.init(), this.$d = I.set(_, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          B && this.$d[B](F);
        return this.init(), this;
      }, M.set = function(E, D) {
        return this.clone().$set(E, D);
      }, M.get = function(E) {
        return this[O.p(E)]();
      }, M.add = function(E, D) {
        var S, N = this;
        E = Number(E);
        var L = O.p(D), B = function(z) {
          var X = x(N);
          return O.w(X.date(X.date() + Math.round(z * E)), N);
        };
        if (L === d)
          return this.set(d, this.$M + E);
        if (L === l)
          return this.set(l, this.$y + E);
        if (L === p)
          return B(1);
        if (L === i)
          return B(7);
        var F = (S = {}, S[c] = r, S[f] = s, S[a] = n, S)[L] || 1, I = this.$d.getTime() + E * F;
        return O.w(I, this);
      }, M.subtract = function(E, D) {
        return this.add(-1 * E, D);
      }, M.format = function(E) {
        var D = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || g;
        var N = E || "YYYY-MM-DDTHH:mm:ssZ", L = O.z(this), B = this.$H, F = this.$m, I = this.$M, z = S.weekdays, X = S.months, H = function(q, te, re, _e) {
          return q && (q[te] || q(D, N)) || re[te].slice(0, _e);
        }, V = function(q) {
          return O.s(B % 12 || 12, q, "0");
        }, K = S.meridiem || function(q, te, re) {
          var _e = q < 12 ? "AM" : "PM";
          return re ? _e.toLowerCase() : _e;
        }, Y = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: I + 1, MM: O.s(I + 1, 2, "0"), MMM: H(S.monthsShort, I, X, 3), MMMM: H(X, I), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: H(S.weekdaysMin, this.$W, z, 2), ddd: H(S.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(B), HH: O.s(B, 2, "0"), h: V(1), hh: V(2), a: K(B, F, !0), A: K(B, F, !1), m: String(F), mm: O.s(F, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: L };
        return N.replace(v, function(q, te) {
          return te || Y[q] || L.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(E, D, S) {
        var N, L = O.p(D), B = x(E), F = (B.utcOffset() - this.utcOffset()) * r, I = this - B, z = O.m(this, B);
        return z = (N = {}, N[l] = z / 12, N[d] = z, N[u] = z / 3, N[i] = (I - F) / 6048e5, N[p] = (I - F) / 864e5, N[f] = I / s, N[c] = I / r, N[a] = I / n, N)[L] || I, S ? z : O.a(z);
      }, M.daysInMonth = function() {
        return this.endOf(d).$D;
      }, M.$locale = function() {
        return w[this.$L];
      }, M.locale = function(E, D) {
        if (!E)
          return this.$L;
        var S = this.clone(), N = y(E, D, !0);
        return N && (S.$L = N), S;
      }, M.clone = function() {
        return O.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), j = W.prototype;
    return x.prototype = j, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(T) {
      j[T[1]] = function(M) {
        return this.$g(M, T[0], T[1]);
      };
    }), x.extend = function(T, M) {
      return T.$i || (T(M, W, x), T.$i = !0), x;
    }, x.locale = y, x.isDayjs = A, x.unix = function(T) {
      return x(1e3 * T);
    }, x.en = w[C], x.Ls = w, x.p = {}, x;
  });
})(Dp);
const oe = Dp.exports, Ya = (e = 0, t = 0) => {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, Lp = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((r, s) => e.slice(s * n, (s + 1) * n));
}, jm = (e) => {
  const { format: t, minDate: n, maxDate: r, tagDate: s, DATEROWCOUNT: o, showOtherMonth: a, clickDay: c, selectedDate: f, handleChangePanel: p, showToday: i, handleChange: d, clickToday: u } = e, l = (O) => oe(O).isValid() ? oe(O).add(1, "months").format(t) : "", _ = (O) => oe(O).isValid() ? oe(O).subtract(1, "months").format(t) : "", g = () => {
    const O = _(f || oe().format(t));
    d(O);
  }, h = () => {
    const O = l(f || oe().format(t));
    d(O);
  }, v = () => {
    d("", !0);
  }, m = () => {
    d(f, !0);
  }, k = (O, W, j, T) => {
    const M = oe(), E = oe(f), D = new Array(O);
    for (let S = 0; S < O; S++) {
      const N = W + S + 1, L = j.set("date", N), B = T && !a ? !0 : n && L.isBefore(n, "date") || r && L.isAfter(r, "date");
      D[S] = {
        isSelected: E.isSame(j.set("date", N), "date"),
        isToday: M.isSame(L, "date"),
        isDisable: !!B,
        isTag: !!(s != null && s.includes(L.format(t))),
        date: L,
        isOtherMonth: T,
        onClick: () => B ? {} : c(L)
      };
    }
    return D;
  }, b = () => {
    const O = oe(f), W = oe(), j = f ? O : W, T = j.set("date", 1).day(), M = T === 0 ? 6 : T - 1, E = j.subtract(1, "month"), S = Number(E.endOf("month").get("date")) - M;
    return k(M, S, E, !0);
  }, C = () => {
    const O = oe(f), W = oe(), j = f ? O : W, T = j.set("date", 1).day(), M = T === 0 ? 6 : T - 1, E = j.endOf("month").get("date"), D = j.add(1, "month"), S = 7 * 6 % (M + E);
    return k(S, 0, D, !0);
  }, w = () => {
    const O = f, W = oe(), j = f ? oe(O) : W, T = j.endOf("month").get("date"), M = k(T, 0, j, !1), E = b(), D = C(), S = [...E, ...M, ...D];
    return Lp(S, o);
  }, A = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"], y = w(), x = f || oe().format(t);
  return /* @__PURE__ */ J("div", {
    className: G("datepicker-calendar-day")
  }, /* @__PURE__ */ J("div", {
    className: "datepicker-calendar-bar not-hide-datepicker"
  }, /* @__PURE__ */ J("div", {
    class: "flex"
  }, /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => p("year")
  }, /* @__PURE__ */ J("span", null, oe(x).format("YYYY \u5E74 MM \u6708")), /* @__PURE__ */ J("span", {
    class: "caret"
  }))), /* @__PURE__ */ J("div", {
    class: "flex"
  }, i && /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => {
      u();
    }
  }, "\u4ECA\u5929"), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => g()
  }, /* @__PURE__ */ J("i", {
    className: "icon icon-angle-left"
  })), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost",
    onClick: () => h()
  }, /* @__PURE__ */ J("i", {
    className: "icon icon-angle-right"
  })))), /* @__PURE__ */ J("table", {
    className: "datepicker-calendar-table not-hide-datepicker"
  }, /* @__PURE__ */ J("thead", {
    className: "datepicker-calendar-thead"
  }, /* @__PURE__ */ J("tr", null, A.map((O, W) => /* @__PURE__ */ J("th", {
    key: W
  }, O)))), /* @__PURE__ */ J("tbody", {
    className: "datepicker-calendar-tbody"
  }, y.map((O, W) => /* @__PURE__ */ J("tr", {
    key: W
  }, O.map((j, T) => {
    const M = ["text-center"];
    return j.isToday && M.push("datepicker-calendar-today"), j.isSelected && M.push("datepicker-calendar-selected-date"), j.isOtherMonth && M.push("datepicker-calendar-other-month"), j.isTag && M.push("datepicker-calendar-tag"), /* @__PURE__ */ J("td", {
      key: T,
      className: G(M)
    }, /* @__PURE__ */ J("div", {
      className: G("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""),
      onClick: j.onClick
    }, !a && j.isOtherMonth ? "" : oe(j.date).format("DD")));
  }))))), /* @__PURE__ */ J("div", {
    class: "datepicker-calendar-footer text-right mt-1"
  }, /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost text-primary",
    onClick: v
  }, /* @__PURE__ */ J("span", null, "\u6E05\u9664")), /* @__PURE__ */ J("button", {
    type: "button",
    className: "btn ghost text-primary",
    onClick: m
  }, /* @__PURE__ */ J("span", null, "\u786E\u8BA4"))));
};
const Um = (e) => {
  const { format: t, selectedDate: n, minDate: r, maxDate: s, year: o, handleChangeMonth: a } = e, c = oe(r).format("M"), f = oe(s).format("M"), p = Lp(Ya(1, 12), 3), i = (d, u) => {
    u || a(d);
  };
  return /* @__PURE__ */ J("div", {
    className: G("datepicker-calendar-month", "not-hide-datepicker")
  }, /* @__PURE__ */ J("table", {
    className: "datepicker-calendar-month-table"
  }, /* @__PURE__ */ J("tbody", {
    className: "datepicker-calendar-month-table-body"
  }, p.map((d, u) => /* @__PURE__ */ J("tr", {
    key: u
  }, d.map((l, _) => {
    const g = ["text-center"], h = oe(`${o}-${l}-01`).format(t), v = !!(c && oe(n).isBefore(c) || f && oe(n).isBefore(f));
    return /* @__PURE__ */ J("td", {
      key: _,
      className: G(g)
    }, /* @__PURE__ */ J("div", {
      className: G("btn", "size-sm", "ghost", "datepicker-calendar-month", v ? "disabled" : ""),
      onClick: () => {
        i(h, v);
      }
    }, oe(h).format("MM"), " \u6708"));
  }))))));
}, Im = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const a = document.getElementsByClassName("datepicker-accordion");
    a != null && a.length && (a[0].scrollTop = 2400);
  }, 800);
  const r = oe(t).year(), s = [...Ya(r - 100, r), ...Ya(r + 1, r + 100)], o = (a, c) => {
    var i, d, u;
    if (!(a != null && a.target))
      return;
    const f = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let l = 0; l < f.length; l++)
      (i = f[l].nextElementSibling) != null && i.classList.contains("hidden") || (d = f[l].nextElementSibling) == null || d.classList.add("hidden");
    (u = a.target.nextElementSibling) == null || u.classList.toggle("hidden");
    const p = document.querySelector(".datepicker-accordion");
    !p || (p.scrollTop + p.clientHeight === p.scrollHeight ? p.scrollTop = 0 : c < r ? p.scrollTop = p.scrollTop - 30 : p.scrollTop = p.scrollTop + 30);
  };
  return /* @__PURE__ */ J("div", {
    class: "datepicker-accordion scroll-smooth not-hide-datepicker"
  }, /* @__PURE__ */ J("ul", null, s.map((a, c) => /* @__PURE__ */ J("li", {
    id: r === a ? "selected" : ""
  }, /* @__PURE__ */ J("div", {
    class: "datepicker-accordion-title",
    onClick: (f) => o(f, a)
  }, a), /* @__PURE__ */ J("div", {
    key: c,
    className: G("datepicker-accordion-content", r === a ? "" : "hidden")
  }, J(Um, {
    ...e,
    year: a,
    handleChangeMonth: n
  }))))));
};
class Fm extends oo {
  constructor() {
    super(...arguments);
    P(this, "DATEROWCOUNT", 6);
    P(this, "ref", Nm());
    P(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n, r = !1) {
    var s;
    this.setState({ selectedDate: n }), r && ((s = this.props) == null || s.onChange(n));
  }
  handleChangePanel(n) {
    this.setState({ type: n });
  }
  handleChangeMonth(n) {
    this.setState({ selectedDate: n, type: "day" });
  }
  handleChangeYear(n) {
    this.setState({ selectedDate: n, type: "month" });
  }
  changeYear(n) {
    const r = n === "subtract" ? oe(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : oe(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(r);
  }
  clickDay(n) {
    const r = oe(n).format(this.props.format);
    this.handleChange(r);
  }
  clickToday() {
    this.handleChange(oe().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? J(jm, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : J(Im, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ J("div", {
      className: G("datepicker-calendar", n),
      ref: this.ref
    }, this.renderPanel());
  }
}
function Ze(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Un(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ye(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Al(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Hn = Math.max, bs = Math.min, gr = Math.round;
function qa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pp() {
  return !/^((?!chrome|android).)*safari/i.test(qa());
}
function yr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ye(e) && (s = e.offsetWidth > 0 && gr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && gr(r.height) / e.offsetHeight || 1);
  var a = Un(e) ? Ze(e) : window, c = a.visualViewport, f = !Pp() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function Ml(e) {
  var t = Ze(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function zm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Vm(e) {
  return e === Ze(e) || !Ye(e) ? Ml(e) : zm(e);
}
function Dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Sn(e) {
  return ((Un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Tl(e) {
  return yr(Sn(e)).left + Ml(e).scrollLeft;
}
function Yt(e) {
  return Ze(e).getComputedStyle(e);
}
function Dl(e) {
  var t = Yt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Ym(e) {
  var t = e.getBoundingClientRect(), n = gr(t.width) / e.offsetWidth || 1, r = gr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function qm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ye(t), s = Ye(t) && Ym(t), o = Sn(t), a = yr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Dt(t) !== "body" || Dl(o)) && (c = Vm(t)), Ye(t) ? (f = yr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Tl(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ll(e) {
  var t = yr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ka(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Al(e) ? e.host : null) || Sn(e);
}
function Np(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Dl(e) ? e : Np(ka(e));
}
function io(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Np(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Ze(r), a = s ? [o].concat(o.visualViewport || [], Dl(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(io(ka(a)));
}
function Gm(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function wf(e) {
  return !Ye(e) || Yt(e).position === "fixed" ? null : e.offsetParent;
}
function Xm(e) {
  var t = /firefox/i.test(qa()), n = /Trident/i.test(qa());
  if (n && Ye(e)) {
    var r = Yt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ka(e);
  for (Al(s) && (s = s.host); Ye(s) && ["html", "body"].indexOf(Dt(s)) < 0; ) {
    var o = Yt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function hi(e) {
  for (var t = Ze(e), n = wf(e); n && Gm(n) && Yt(n).position === "static"; )
    n = wf(n);
  return n && (Dt(n) === "html" || Dt(n) === "body" && Yt(n).position === "static") ? t : n || Xm(e) || t;
}
var He = "top", _t = "bottom", pt = "right", We = "left", Pl = "auto", vi = [He, _t, pt, We], br = "start", No = "end", Km = "clippingParents", Rp = "viewport", Rr = "popper", Zm = "reference", $f = /* @__PURE__ */ vi.reduce(function(e, t) {
  return e.concat([t + "-" + br, t + "-" + No]);
}, []), Hp = /* @__PURE__ */ [].concat(vi, [Pl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + br, t + "-" + No]);
}, []), Jm = "beforeRead", Qm = "read", eg = "afterRead", tg = "beforeMain", ng = "main", rg = "afterMain", og = "beforeWrite", ig = "write", sg = "afterWrite", ag = [Jm, Qm, eg, tg, ng, rg, og, ig, sg];
function lg(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function cg(e) {
  var t = lg(e);
  return ag.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function fg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function At(e) {
  return e.split("-")[0];
}
function ug(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function _g(e, t) {
  var n = Ze(e), r = Sn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = Pp();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Tl(e),
    y: f
  };
}
function pg(e) {
  var t, n = Sn(e), r = Ml(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Hn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Hn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Tl(e), f = -r.scrollTop;
  return Yt(s || n).direction === "rtl" && (c += Hn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function Wp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Al(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ga(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dg(e, t) {
  var n = yr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function kf(e, t, n) {
  return t === Rp ? Ga(_g(e, n)) : Un(t) ? dg(t, n) : Ga(pg(Sn(e)));
}
function hg(e) {
  var t = io(ka(e)), n = ["absolute", "fixed"].indexOf(Yt(e).position) >= 0, r = n && Ye(e) ? hi(e) : e;
  return Un(r) ? t.filter(function(s) {
    return Un(s) && Wp(s, r) && Dt(s) !== "body";
  }) : [];
}
function vg(e, t, n, r) {
  var s = t === "clippingParents" ? hg(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = kf(e, p, r);
    return f.top = Hn(i.top, f.top), f.right = bs(i.right, f.right), f.bottom = bs(i.bottom, f.bottom), f.left = Hn(i.left, f.left), f;
  }, kf(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function wr(e) {
  return e.split("-")[1];
}
function Nl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bp(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? At(r) : null, o = r ? wr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case He:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case _t:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case We:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? Nl(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case br:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case No:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function jp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Up(e) {
  return Object.assign({}, jp(), e);
}
function Ip(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Rl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Km : c, p = n.rootBoundary, i = p === void 0 ? Rp : p, d = n.elementContext, u = d === void 0 ? Rr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = Up(typeof h != "number" ? h : Ip(h, vi)), m = u === Rr ? Zm : Rr, k = e.rects.popper, b = e.elements[_ ? m : u], C = vg(Un(b) ? b : b.contextElement || Sn(e.elements.popper), f, i, a), w = yr(e.elements.reference), A = Bp({
    reference: w,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Ga(Object.assign({}, k, A)), x = u === Rr ? y : w, O = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Rr && W) {
    var j = W[s];
    Object.keys(O).forEach(function(T) {
      var M = [pt, _t].indexOf(T) >= 0 ? 1 : -1, E = [He, _t].indexOf(T) >= 0 ? "y" : "x";
      O[T] += j[E] * M;
    });
  }
  return O;
}
var xf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function mg(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? xf : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xf, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: Un(c) ? io(c) : c.contextElement ? io(c.contextElement) : [],
          popper: io(f)
        };
        var k = cg(ug([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Sf(m, k)) {
            i.rects = {
              reference: qm(m, hi(k), i.options.strategy === "fixed"),
              popper: Ll(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
              return i.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], w = C.fn, A = C.options, y = A === void 0 ? {} : A, x = C.name;
              typeof w == "function" && (i = w({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: fg(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Sf(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), w = function() {
          };
          d.push(C || w);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var ki = {
  passive: !0
};
function gg(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Ze(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, ki);
  }), c && f.addEventListener("resize", n.update, ki), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, ki);
    }), c && f.removeEventListener("resize", n.update, ki);
  };
}
const yg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gg,
  data: {}
};
function bg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Bp({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bg,
  data: {}
};
var $g = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kg(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: gr(t * s) / s || 0,
    y: gr(n * s) / s || 0
  };
}
function Ef(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = We, b = He, C = window;
  if (p) {
    var w = hi(n), A = "clientHeight", y = "clientWidth";
    if (w === Ze(n) && (w = Sn(n), Yt(w).position !== "static" && c === "absolute" && (A = "scrollHeight", y = "scrollWidth")), w = w, s === He || (s === We || s === pt) && o === No) {
      b = _t;
      var x = d && w === C && C.visualViewport ? C.visualViewport.height : w[A];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === We || (s === He || s === _t) && o === No) {
      k = pt;
      var O = d && w === C && C.visualViewport ? C.visualViewport.width : w[y];
      l -= O - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && $g), j = i === !0 ? kg({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = j.x, g = j.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function xg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: At(t.placement),
    variation: wr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ef(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ef(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Sg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: xg,
  data: {}
};
function Eg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ye(o) || !Dt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Cg(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Ye(s) || !Dt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const Og = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Eg,
  effect: Cg,
  requires: ["computeStyles"]
};
var Ag = [yg, wg, Sg, Og], Mg = /* @__PURE__ */ mg({
  defaultModifiers: Ag
});
function so(e, t, n) {
  return Hn(e, bs(t, n));
}
function Tg(e, t, n) {
  var r = so(e, t, n);
  return r > n ? n : r;
}
var Dg = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Up(typeof t != "number" ? t : Ip(t, vi));
};
function Lg(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = At(n.placement), f = Nl(c), p = [We, pt].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Dg(s.padding, n), u = Ll(o), l = f === "y" ? He : We, _ = f === "y" ? _t : pt, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = hi(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], w = m / 2 - u[i] / 2 + k, A = so(b, w, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = A, t.centerOffset = A - w, t);
  }
}
function Pg(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Wp(t.elements.popper, s) || (t.elements.arrow = s));
}
const Ng = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Lg,
  effect: Pg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Rg(e, t, n) {
  var r = At(e), s = [We, He].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [We, pt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Hg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = Hp.reduce(function(i, d) {
    return i[d] = Rg(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Wg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Hg
};
function Bg(e) {
  return e === "x" ? "y" : "x";
}
function jg(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Rl(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = At(t.placement), m = wr(t.placement), k = !m, b = Nl(v), C = Bg(b), w = t.modifiersData.popperOffsets, A = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (o) {
      var T, M = b === "y" ? He : We, E = b === "y" ? _t : pt, D = b === "y" ? "height" : "width", S = w[b], N = S + h[M], L = S - h[E], B = l ? -y[D] / 2 : 0, F = m === br ? A[D] : y[D], I = m === br ? -y[D] : -A[D], z = t.elements.arrow, X = l && z ? Ll(z) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jp(), V = H[M], K = H[E], Y = so(0, A[D], X[D]), q = k ? A[D] / 2 - B - Y - V - O.mainAxis : F - Y - V - O.mainAxis, te = k ? -A[D] / 2 + B + Y + K + O.mainAxis : I + Y + K + O.mainAxis, re = t.elements.arrow && hi(t.elements.arrow), _e = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Te = (T = W == null ? void 0 : W[b]) != null ? T : 0, ee = S + q - Te - _e, gt = S + te - Te, Ee = so(l ? bs(N, ee) : N, S, l ? Hn(L, gt) : L);
      w[b] = Ee, j[b] = Ee - S;
    }
    if (c) {
      var Ce, yt = b === "x" ? He : We, ze = b === "x" ? _t : pt, Q = w[C], ie = C === "y" ? "height" : "width", Oe = Q + h[yt], tt = Q - h[ze], Se = [He, We].indexOf(v) !== -1, nt = (Ce = W == null ? void 0 : W[C]) != null ? Ce : 0, rt = Se ? Oe : Q - A[ie] - y[ie] - nt + O.altAxis, ot = Se ? Q + A[ie] + y[ie] - nt - O.altAxis : tt, it = l && Se ? Tg(rt, Q, ot) : so(l ? rt : Oe, Q, l ? ot : tt);
      w[C] = it, j[C] = it - Q;
    }
    t.modifiersData[r] = j;
  }
}
const Ug = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: jg,
  requiresIfExists: ["offset"]
};
var Ig = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ig[t];
  });
}
var Fg = {
  start: "end",
  end: "start"
};
function Cf(e) {
  return e.replace(/start|end/g, function(t) {
    return Fg[t];
  });
}
function zg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Hp : f, i = wr(r), d = i ? c ? $f : $f.filter(function(_) {
    return wr(_) === i;
  }) : vi, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Rl(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[At(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Vg(e) {
  if (At(e) === Pl)
    return [];
  var t = Wi(e);
  return [Cf(e), t, Cf(t)];
}
function Yg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = At(h), m = v === h, k = f || (m || !_ ? [Wi(h)] : Vg(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(At(H) === Pl ? zg(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, w = t.rects.popper, A = /* @__PURE__ */ new Map(), y = !0, x = b[0], O = 0; O < b.length; O++) {
      var W = b[O], j = At(W), T = wr(W) === br, M = [He, _t].indexOf(j) >= 0, E = M ? "width" : "height", D = Rl(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), S = M ? T ? pt : We : T ? _t : He;
      C[E] > w[E] && (S = Wi(S));
      var N = Wi(S), L = [];
      if (o && L.push(D[j] <= 0), c && L.push(D[S] <= 0, D[N] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      A.set(W, L);
    }
    if (y)
      for (var B = _ ? 3 : 1, F = function(H) {
        var V = b.find(function(K) {
          var Y = A.get(K);
          if (Y)
            return Y.slice(0, H).every(function(q) {
              return q;
            });
        });
        if (V)
          return x = V, "break";
      }, I = B; I > 0; I--) {
        var z = F(I);
        if (z === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const qg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var Jn, Qn, Mn, st, Qo, Gs;
class Et extends ft {
  constructor() {
    super(...arguments);
    R(this, Jn, void 0);
    R(this, Qn, 0);
    R(this, Mn, void 0);
    R(this, st, void 0);
    R(this, Qo, void 0);
    P(this, "hideLater", () => {
      $(this, Gs).call(this), U(this, Qn, window.setTimeout(this.hide.bind(this), 100));
    });
    R(this, Gs, () => {
      clearTimeout($(this, Qn)), U(this, Qn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = $(this, Mn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return $(this, Mn) || this._ensureDatepicker();
  }
  get popper() {
    return $(this, st) ? $(this, st) : this._createPopper();
  }
  get trigger() {
    return $(this, Qo) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return U(this, Qo, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = $(this, st)) == null || n.destroy(), U(this, st, void 0), this.element.classList.remove(this.elementShowClass), (r = $(this, Mn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return typeof n == "number" ? n : 4;
  }
  _createArrow() {
    const n = document.createElement("div");
    return n.classList.add("arrow", "datepicker-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureDatepicker() {
    const n = this.constructor.CLASSNAME, r = document.createElement("div");
    return r.classList.add(n), Bm(J(Fm, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), U(this, Mn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        Ug,
        qg,
        { ...Ng, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...Wg,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "datepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.datepicker.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-datepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return $(this, st) ? $(this, st).setOptions(n) : U(this, st, Mg(this._getPopperElement(), this.datepicker, n)), $(this, st);
  }
  _getPopperElement() {
    return $(this, Jn) || U(this, Jn, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), $(this, Jn);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-datepicker" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
}
Jn = new WeakMap(), Qn = new WeakMap(), Mn = new WeakMap(), st = new WeakMap(), Qo = new WeakMap(), Gs = new WeakMap(), P(Et, "NAME", "datepicker"), P(Et, "CLASSNAME", "datepicker"), P(Et, "CLASS_SHOW", "show"), P(Et, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), P(Et, "DEFAULT", {
  date: oe().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(Et.MENU_SELECTOR), r = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Et.ensure(n).toggle() : r || Et.clear({ event: e });
});
const Gg = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Et.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Et.clear({ event: e });
};
window.addEventListener("scroll", Gg, !0);
function Fp(e, t, n) {
  if (n) {
    e.setAttribute("class", G(t));
    return;
  }
  ga(e.getAttribute("class"), t).forEach(([r, s]) => {
    e.classList.toggle(r, s);
  });
}
function Ir(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      Ir(e, r, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function ws(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([r, s]) => {
      ws(e, r, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var Tn, ei, Jt, Xs, er, Bi;
const Ht = class extends ft {
  constructor() {
    super(...arguments);
    R(this, er);
    R(this, Tn, 0);
    R(this, ei, void 0);
    R(this, Jt, void 0);
    R(this, Xs, (n) => {
      const r = n.target;
      (r.closest(Ht.DISMISS_SELECTOR) || this.options.backdrop === !0 && !r.closest(".modal-dialog") && r.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Ht.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", $(this, Xs)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const r = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, o = n.clientHeight;
          (!$(this, Jt) || $(this, Jt)[0] !== s || $(this, Jt)[1] !== o) && (U(this, Jt, [s, o]), this.layout());
        });
        r.observe(n), U(this, ei, r);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = $(this, ei)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: r } = this, { animation: s, backdrop: o, className: a, style: c } = this.options;
    return Fp(r, [{
      "modal-trans": s,
      "modal-no-backdrop": !o
    }, Ht.CLASS_SHOW, a]), Ir(r, {
      zIndex: `${Ht.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), ne(this, er, Bi).call(this, () => {
      r.classList.add(Ht.CLASS_SHOWN), ne(this, er, Bi).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Ht.CLASS_SHOWN), this.emit("hide", this), ne(this, er, Bi).call(this, () => {
      this.modalElement.classList.remove(Ht.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, r) {
    var p;
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    r = r != null ? r : this.options.size, ws(s, "data-size", null);
    const o = { width: null, height: null };
    typeof r == "object" ? (o.width = r.width, o.height = r.height) : typeof r == "string" && ["md", "sm", "lg", "full"].includes(r) ? ws(s, "data-size", r) : r && (o.width = r), Ir(s, o), n = (p = n != null ? n : this.options.position) != null ? p : "fit";
    const a = s.clientWidth, c = s.clientHeight;
    U(this, Jt, [a, c]), typeof n == "function" && (n = n({ width: a, height: c }));
    const f = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (f.alignSelf = "flex-start", f.top = n) : typeof n == "object" && n ? (f.alignSelf = "flex-start", Object.assign(f, n)) : n === "fit" ? (f.alignSelf = "flex-start", f.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? f.alignSelf = "flex-end" : n === "top" ? f.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (f.alignSelf = "flex-start", f.top = n), Ir(s, f), Ir(this.modalElement, "justifyContent", f.left ? "flex-start" : "center");
  }
};
let Pe = Ht;
Tn = new WeakMap(), ei = new WeakMap(), Jt = new WeakMap(), Xs = new WeakMap(), er = new WeakSet(), Bi = function(n, r) {
  $(this, Tn) && (clearTimeout($(this, Tn)), U(this, Tn, 0)), n && (this.options.animation ? U(this, Tn, window.setTimeout(n, r != null ? r : this.options.transTime)) : n());
}, P(Pe, "NAME", "Modal"), P(Pe, "EVENTS", !0), P(Pe, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), P(Pe, "CLASS_SHOW", "show"), P(Pe, "CLASS_SHOWN", "in"), P(Pe, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), P(Pe, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Pe.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var xa, ce, zp, Fr, ao, Of, $s = {}, Vp = [], Xg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function pn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Yp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pe(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ji(e, a, r, s, null);
}
function ji(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++zp : s };
  return s == null && ce.vnode != null && ce.vnode(o), o;
}
function Kg() {
  return { current: null };
}
function Sa(e) {
  return e.children;
}
function qn(e, t) {
  this.props = e, this.context = t;
}
function Ro(e, t) {
  if (t == null)
    return e.__ ? Ro(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ro(e) : null;
}
function qp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return qp(e);
  }
}
function Af(e) {
  (!e.__d && (e.__d = !0) && ao.push(e) && !ks.__r++ || Of !== ce.debounceRendering) && ((Of = ce.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var e; ks.__r = ao.length; )
    e = ao.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ao = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = pn({}, o)).__v = o.__v + 1, Hl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ro(o) : a, o.__h), Zp(r, o), o.__e != a && qp(o)));
    });
}
function Gp(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Vp, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? ji(null, l, null, null, l) : Array.isArray(l) ? ji(Sa, { children: l }, null, null, null) : l.__b > 0 ? ji(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Hl(e, l, u = u || $s, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Xp(l, f, e) : f = Kp(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ro(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Qp(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Jp(h[i], h[++i], h[++i]);
}
function Xp(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Xp(r, t, n) : Kp(n, r, r, s, r.__e, t));
  return t;
}
function Kp(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Zg(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || xs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || xs(e, o, t[o], n[o], r);
}
function Mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Xg.test(t) ? n : n + "px";
}
function xs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Mf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Df : Tf, o) : e.removeEventListener(t, o ? Df : Tf, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Tf(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function Df(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Hl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ce.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new qn(h, m), i.constructor = y, i.render = Qg), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = pn({}, i.__s)), pn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ce.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = pn(pn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === Sa && p.key == null ? p.props.children : p, Gp(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jg(n.__e, t, n, r, s, o, a, f);
    (p = ce.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function Zp(e, t) {
  ce.__c && ce.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ce.__e(r, n.__v);
    }
  });
}
function Jg(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && xa.call(e.childNodes), p = (d = n.props || $s).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Zg(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Gp(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ro(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Yp(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && xs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && xs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Jp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ce.__e(r, n);
  }
}
function Qp(e, t, n) {
  var r, s;
  if (ce.unmount && ce.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Jp(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ce.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Qp(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Yp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qg(e, t, n) {
  return this.constructor(e, n);
}
function ey(e, t, n) {
  var r, s, o;
  ce.__ && ce.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Hl(t, e = (!r && n || t).__k = pe(Sa, null, [e]), s || $s, $s, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? xa.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Zp(o, e);
}
xa = Vp.slice, ce = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zp = 0, Fr = function(e) {
  return e != null && e.constructor === void 0;
}, qn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pn({}, this.state), typeof e == "function" && (e = e(pn({}, n), this.props)), e && pn(n, e), e != null && this.__v && (t && this._sb.push(t), Af(this));
}, qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Af(this));
}, qn.prototype.render = Sa, ao = [], ks.__r = 0;
let ty = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ed, Xa, td, ny = [];
function Ea(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ed.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ry(e, a, r, s, null);
}
function ry(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++td : s };
  return s == null && Xa.vnode != null && Xa.vnode(o), o;
}
ed = ny.slice, Xa = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, td = 0;
function oy({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ea(kn, {
    type: n,
    ...r
  });
}
var Wl, ye, nd, lo, Lf, rd = {}, od = [], iy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function dn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function id(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sd(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Wl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ui(e, a, r, s, null);
}
function Ui(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++nd : s };
  return s == null && ye.vnode != null && ye.vnode(o), o;
}
function sy() {
  return { current: null };
}
function Bl(e) {
  return e.children;
}
function co(e, t) {
  this.props = e, this.context = t;
}
function Ho(e, t) {
  if (t == null)
    return e.__ ? Ho(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ho(e) : null;
}
function ad(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ad(e);
  }
}
function Pf(e) {
  (!e.__d && (e.__d = !0) && lo.push(e) && !Ss.__r++ || Lf !== ye.debounceRendering) && ((Lf = ye.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var e; Ss.__r = lo.length; )
    e = lo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = dn({}, o)).__v = o.__v + 1, ud(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ho(o) : a, o.__h), ly(r, o), o.__e != a && ad(o)));
    });
}
function ld(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || od, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ui(null, l, null, null, l) : Array.isArray(l) ? Ui(Bl, { children: l }, null, null, null) : l.__b > 0 ? Ui(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      ud(e, l, u = u || rd, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = cd(l, f, e) : f = fd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Ho(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && pd(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      _d(h[i], h[++i], h[++i]);
}
function cd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? cd(r, t, n) : fd(n, r, r, s, r.__e, t));
  return t;
}
function fd(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function ay(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Es(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Es(e, o, t[o], n[o], r);
}
function Nf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || iy.test(t) ? n : n + "px";
}
function Es(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Nf(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Nf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Hf : Rf, o) : e.removeEventListener(t, o ? Hf : Rf, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Rf(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function Hf(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function ud(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ye.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new co(h, m), i.constructor = y, i.render = fy), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = dn({}, i.__s)), dn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ye.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = dn(dn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === Bl && p.key == null ? p.props.children : p, ld(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cy(n.__e, t, n, r, s, o, a, f);
    (p = ye.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ye.__e(x, t, n);
  }
}
function ly(e, t) {
  ye.__c && ye.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ye.__e(r, n.__v);
    }
  });
}
function cy(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Wl.call(e.childNodes), p = (d = n.props || rd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ay(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, ld(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Ho(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && id(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Es(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Es(e, "checked", _, d.checked, !1));
  }
  return e;
}
function _d(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ye.__e(r, n);
  }
}
function pd(e, t, n) {
  var r, s;
  if (ye.unmount && ye.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || _d(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ye.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && pd(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || id(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fy(e, t, n) {
  return this.constructor(e, n);
}
Wl = od.slice, ye = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, nd = 0, co.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = dn({}, this.state), typeof e == "function" && (e = e(dn({}, n), this.props)), e && dn(n, e), e != null && this.__v && (t && this._sb.push(t), Pf(this));
}, co.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pf(this));
}, co.prototype.render = Bl, lo = [], Ss.__r = 0;
var jl = "top", dd = "bottom", Cs = "right", Wo = "left", uy = "auto", hd = [jl, dd, Cs, Wo], _y = "start", py = "end", dy = /* @__PURE__ */ [].concat(hd, [uy]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _y, t + "-" + py]);
}, []);
function vd(e) {
  return e.split("-")[0];
}
function Pr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function md(e) {
  var t = Pr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Os(e) {
  var t = Pr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ul(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Pr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var hy = Math.max, vy = Math.min, Wf = Math.round;
function Ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function my() {
  return !/^((?!chrome|android).)*safari/i.test(Ka());
}
function gy(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Os(e) && (s = e.offsetWidth > 0 && Wf(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Wf(r.height) / e.offsetHeight || 1);
  var a = md(e) ? Pr(e) : window, c = a.visualViewport, f = !my() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function yy(e) {
  var t = gy(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function by(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ul(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Bo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function jo(e) {
  return Pr(e).getComputedStyle(e);
}
function wy(e) {
  return ["table", "td", "th"].indexOf(Bo(e)) >= 0;
}
function $y(e) {
  return ((md(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ky(e) {
  return Bo(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ul(e) ? e.host : null) || $y(e);
}
function Bf(e) {
  return !Os(e) || jo(e).position === "fixed" ? null : e.offsetParent;
}
function xy(e) {
  var t = /firefox/i.test(Ka()), n = /Trident/i.test(Ka());
  if (n && Os(e)) {
    var r = jo(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ky(e);
  for (Ul(s) && (s = s.host); Os(s) && ["html", "body"].indexOf(Bo(s)) < 0; ) {
    var o = jo(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Sy(e) {
  for (var t = Pr(e), n = Bf(e); n && wy(n) && jo(n).position === "static"; )
    n = Bf(n);
  return n && (Bo(n) === "html" || Bo(n) === "body" && jo(n).position === "static") ? t : n || xy(e) || t;
}
function Ey(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cy(e, t, n) {
  return hy(e, vy(t, n));
}
function Oy() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ay(e) {
  return Object.assign({}, Oy(), e);
}
function My(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Ty = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ay(typeof t != "number" ? t : My(t, hd));
};
function Dy(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = vd(n.placement), f = Ey(c), p = [Wo, Cs].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = Ty(s.padding, n), u = yy(o), l = f === "y" ? jl : Wo, _ = f === "y" ? dd : Cs, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = Sy(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], w = m / 2 - u[i] / 2 + k, A = Cy(b, w, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = A, t.centerOffset = A - w, t);
  }
}
function Ly(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !by(t.elements.popper, s) || (t.elements.arrow = s));
}
const Py = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Dy,
  effect: Ly,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ny(e, t, n) {
  var r = vd(e), s = [Wo, jl].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Wo, Cs].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Ry(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = dy.reduce(function(i, d) {
    return i[d] = Ny(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const Hy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ry
};
var Ca, fe, gd, fo, jf, As = {}, yd = [], Wy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function hn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function bd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Il(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ca.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ii(e, a, r, s, null);
}
function Ii(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++gd : s };
  return s == null && fe.vnode != null && fe.vnode(o), o;
}
function Oa(e) {
  return e.children;
}
function Fi(e, t) {
  this.props = e, this.context = t;
}
function Uo(e, t) {
  if (t == null)
    return e.__ ? Uo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Uo(e) : null;
}
function wd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return wd(e);
  }
}
function Uf(e) {
  (!e.__d && (e.__d = !0) && fo.push(e) && !Ms.__r++ || jf !== fe.debounceRendering) && ((jf = fe.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var e; Ms.__r = fo.length; )
    e = fo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), fo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = hn({}, o)).__v = o.__v + 1, Fl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Uo(o) : a, o.__h), Sd(r, o), o.__e != a && wd(o)));
    });
}
function $d(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || yd, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ii(null, l, null, null, l) : Array.isArray(l) ? Ii(Oa, { children: l }, null, null, null) : l.__b > 0 ? Ii(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Fl(e, l, u = u || As, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = kd(l, f, e) : f = xd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Uo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Cd(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Ed(h[i], h[++i], h[++i]);
}
function kd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? kd(r, t, n) : xd(n, r, r, s, r.__e, t));
  return t;
}
function xd(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function By(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ts(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ts(e, o, t[o], n[o], r);
}
function If(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Wy.test(t) ? n : n + "px";
}
function Ts(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || If(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || If(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? zf : Ff, o) : e.removeEventListener(t, o ? zf : Ff, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ff(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function zf(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Fl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = fe.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new Fi(h, m), i.constructor = y, i.render = Uy), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = hn({}, i.__s)), hn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = fe.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = hn(hn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === Oa && p.key == null ? p.props.children : p, $d(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jy(n.__e, t, n, r, s, o, a, f);
    (p = fe.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Sd(e, t) {
  fe.__c && fe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      fe.__e(r, n.__v);
    }
  });
}
function jy(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Ca.call(e.childNodes), p = (d = n.props || As).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (By(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, $d(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Uo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && bd(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ts(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ts(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Ed(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    fe.__e(r, n);
  }
}
function Cd(e, t, n) {
  var r, s;
  if (fe.unmount && fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ed(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        fe.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Cd(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || bd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Uy(e, t, n) {
  return this.constructor(e, n);
}
function Iy(e, t, n) {
  var r, s, o;
  fe.__ && fe.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Fl(t, e = (!r && n || t).__k = Il(Oa, null, [e]), s || As, As, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Ca.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), Sd(o, e);
}
Ca = yd.slice, fe = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gd = 0, Fi.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = hn({}, this.state), typeof e == "function" && (e = e(hn({}, n), this.props)), e && hn(n, e), e != null && this.__v && (t && this._sb.push(t), Uf(this));
}, Fi.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Uf(this));
}, Fi.prototype.render = Oa, fo = [], Ms.__r = 0;
function Je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function In(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function qe(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Wn = Math.max, Ds = Math.min, $r = Math.round;
function Za() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Od() {
  return !/^((?!chrome|android).)*safari/i.test(Za());
}
function kr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && qe(e) && (s = e.offsetWidth > 0 && $r(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && $r(r.height) / e.offsetHeight || 1);
  var a = In(e) ? Je(e) : window, c = a.visualViewport, f = !Od() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function Vl(e) {
  var t = Je(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Fy(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zy(e) {
  return e === Je(e) || !qe(e) ? Vl(e) : Fy(e);
}
function Lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function En(e) {
  return ((In(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yl(e) {
  return kr(En(e)).left + Vl(e).scrollLeft;
}
function qt(e) {
  return Je(e).getComputedStyle(e);
}
function ql(e) {
  var t = qt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Vy(e) {
  var t = e.getBoundingClientRect(), n = $r(t.width) / e.offsetWidth || 1, r = $r(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Yy(e, t, n) {
  n === void 0 && (n = !1);
  var r = qe(t), s = qe(t) && Vy(t), o = En(t), a = kr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Lt(t) !== "body" || ql(o)) && (c = zy(t)), qe(t) ? (f = kr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Yl(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Ad(e) {
  var t = kr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Aa(e) {
  return Lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (zl(e) ? e.host : null) || En(e);
}
function Md(e) {
  return ["html", "body", "#document"].indexOf(Lt(e)) >= 0 ? e.ownerDocument.body : qe(e) && ql(e) ? e : Md(Aa(e));
}
function uo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Md(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Je(r), a = s ? [o].concat(o.visualViewport || [], ql(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(uo(Aa(a)));
}
function qy(e) {
  return ["table", "td", "th"].indexOf(Lt(e)) >= 0;
}
function Vf(e) {
  return !qe(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function Gy(e) {
  var t = /firefox/i.test(Za()), n = /Trident/i.test(Za());
  if (n && qe(e)) {
    var r = qt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Aa(e);
  for (zl(s) && (s = s.host); qe(s) && ["html", "body"].indexOf(Lt(s)) < 0; ) {
    var o = qt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ma(e) {
  for (var t = Je(e), n = Vf(e); n && qy(n) && qt(n).position === "static"; )
    n = Vf(n);
  return n && (Lt(n) === "html" || Lt(n) === "body" && qt(n).position === "static") ? t : n || Gy(e) || t;
}
var ut = "top", Pt = "bottom", xn = "right", Vt = "left", Gl = "auto", Ta = [ut, Pt, xn, Vt], xr = "start", Io = "end", Xy = "clippingParents", Td = "viewport", Hr = "popper", Ky = "reference", Yf = /* @__PURE__ */ Ta.reduce(function(e, t) {
  return e.concat([t + "-" + xr, t + "-" + Io]);
}, []), Zy = /* @__PURE__ */ [].concat(Ta, [Gl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xr, t + "-" + Io]);
}, []), Jy = "beforeRead", Qy = "read", eb = "afterRead", tb = "beforeMain", nb = "main", rb = "afterMain", ob = "beforeWrite", ib = "write", sb = "afterWrite", ab = [Jy, Qy, eb, tb, nb, rb, ob, ib, sb];
function lb(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function cb(e) {
  var t = lb(e);
  return ab.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function fb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function wn(e) {
  return e.split("-")[0];
}
function ub(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function _b(e, t) {
  var n = Je(e), r = En(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = Od();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Yl(e),
    y: f
  };
}
function pb(e) {
  var t, n = En(e), r = Vl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Wn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Wn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Yl(e), f = -r.scrollTop;
  return qt(s || n).direction === "rtl" && (c += Wn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function db(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && zl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ja(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hb(e, t) {
  var n = kr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qf(e, t, n) {
  return t === Td ? Ja(_b(e, n)) : In(t) ? hb(t, n) : Ja(pb(En(e)));
}
function vb(e) {
  var t = uo(Aa(e)), n = ["absolute", "fixed"].indexOf(qt(e).position) >= 0, r = n && qe(e) ? Ma(e) : e;
  return In(r) ? t.filter(function(s) {
    return In(s) && db(s, r) && Lt(s) !== "body";
  }) : [];
}
function mb(e, t, n, r) {
  var s = t === "clippingParents" ? vb(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = qf(e, p, r);
    return f.top = Wn(i.top, f.top), f.right = Ds(i.right, f.right), f.bottom = Ds(i.bottom, f.bottom), f.left = Wn(i.left, f.left), f;
  }, qf(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Sr(e) {
  return e.split("-")[1];
}
function Dd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ld(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? wn(r) : null, o = r ? Sr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case ut:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Pt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case xn:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Vt:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? Dd(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case xr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Io:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function Pd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gb(e) {
  return Object.assign({}, Pd(), e);
}
function yb(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function Xl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Xy : c, p = n.rootBoundary, i = p === void 0 ? Td : p, d = n.elementContext, u = d === void 0 ? Hr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = gb(typeof h != "number" ? h : yb(h, Ta)), m = u === Hr ? Ky : Hr, k = e.rects.popper, b = e.elements[_ ? m : u], C = mb(In(b) ? b : b.contextElement || En(e.elements.popper), f, i, a), w = kr(e.elements.reference), A = Ld({
    reference: w,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = Ja(Object.assign({}, k, A)), x = u === Hr ? y : w, O = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Hr && W) {
    var j = W[s];
    Object.keys(O).forEach(function(T) {
      var M = [xn, Pt].indexOf(T) >= 0 ? 1 : -1, E = [ut, Pt].indexOf(T) >= 0 ? "y" : "x";
      O[T] += j[E] * M;
    });
  }
  return O;
}
var Gf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function bb(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Gf : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gf, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: In(c) ? uo(c) : c.contextElement ? uo(c.contextElement) : [],
          popper: uo(f)
        };
        var k = cb(ub([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!Xf(m, k)) {
            i.rects = {
              reference: Yy(m, Ma(k), i.options.strategy === "fixed"),
              popper: Ad(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
              return i.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], w = C.fn, A = C.options, y = A === void 0 ? {} : A, x = C.name;
              typeof w == "function" && (i = w({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: fb(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!Xf(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), w = function() {
          };
          d.push(C || w);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var xi = {
  passive: !0
};
function wb(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Je(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, xi);
  }), c && f.addEventListener("resize", n.update, xi), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, xi);
    }), c && f.removeEventListener("resize", n.update, xi);
  };
}
const $b = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: wb,
  data: {}
};
function kb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ld({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const xb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kb,
  data: {}
};
var Sb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Eb(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: $r(t * s) / s || 0,
    y: $r(n * s) / s || 0
  };
}
function Kf(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Vt, b = ut, C = window;
  if (p) {
    var w = Ma(n), A = "clientHeight", y = "clientWidth";
    if (w === Je(n) && (w = En(n), qt(w).position !== "static" && c === "absolute" && (A = "scrollHeight", y = "scrollWidth")), w = w, s === ut || (s === Vt || s === xn) && o === Io) {
      b = Pt;
      var x = d && w === C && C.visualViewport ? C.visualViewport.height : w[A];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Vt || (s === ut || s === Pt) && o === Io) {
      k = xn;
      var O = d && w === C && C.visualViewport ? C.visualViewport.width : w[y];
      l -= O - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && Sb), j = i === !0 ? Eb({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = j.x, g = j.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function Cb(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: wn(t.placement),
    variation: Sr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kf(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kf(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ob = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cb,
  data: {}
};
function Ab(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !qe(o) || !Lt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Mb(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !qe(s) || !Lt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const Tb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ab,
  effect: Mb,
  requires: ["computeStyles"]
};
var Db = [$b, xb, Ob, Tb], Nd = /* @__PURE__ */ bb({
  defaultModifiers: Db
});
function Lb(e) {
  return e === "x" ? "y" : "x";
}
function zi(e, t, n) {
  return Wn(e, Ds(t, n));
}
function Pb(e, t, n) {
  var r = zi(e, t, n);
  return r > n ? n : r;
}
function Nb(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = Xl(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = wn(t.placement), m = Sr(t.placement), k = !m, b = Dd(v), C = Lb(b), w = t.modifiersData.popperOffsets, A = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (o) {
      var T, M = b === "y" ? ut : Vt, E = b === "y" ? Pt : xn, D = b === "y" ? "height" : "width", S = w[b], N = S + h[M], L = S - h[E], B = l ? -y[D] / 2 : 0, F = m === xr ? A[D] : y[D], I = m === xr ? -y[D] : -A[D], z = t.elements.arrow, X = l && z ? Ad(z) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pd(), V = H[M], K = H[E], Y = zi(0, A[D], X[D]), q = k ? A[D] / 2 - B - Y - V - O.mainAxis : F - Y - V - O.mainAxis, te = k ? -A[D] / 2 + B + Y + K + O.mainAxis : I + Y + K + O.mainAxis, re = t.elements.arrow && Ma(t.elements.arrow), _e = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Te = (T = W == null ? void 0 : W[b]) != null ? T : 0, ee = S + q - Te - _e, gt = S + te - Te, Ee = zi(l ? Ds(N, ee) : N, S, l ? Wn(L, gt) : L);
      w[b] = Ee, j[b] = Ee - S;
    }
    if (c) {
      var Ce, yt = b === "x" ? ut : Vt, ze = b === "x" ? Pt : xn, Q = w[C], ie = C === "y" ? "height" : "width", Oe = Q + h[yt], tt = Q - h[ze], Se = [ut, Vt].indexOf(v) !== -1, nt = (Ce = W == null ? void 0 : W[C]) != null ? Ce : 0, rt = Se ? Oe : Q - A[ie] - y[ie] - nt + O.altAxis, ot = Se ? Q + A[ie] + y[ie] - nt - O.altAxis : tt, it = l && Se ? Pb(rt, Q, ot) : zi(l ? rt : Oe, Q, l ? ot : tt);
      w[C] = it, j[C] = it - Q;
    }
    t.modifiersData[r] = j;
  }
}
const Qa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Nb,
  requiresIfExists: ["offset"]
};
var Rb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Rb[t];
  });
}
var Hb = {
  start: "end",
  end: "start"
};
function Zf(e) {
  return e.replace(/start|end/g, function(t) {
    return Hb[t];
  });
}
function Wb(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? Zy : f, i = Sr(r), d = i ? c ? Yf : Yf.filter(function(_) {
    return Sr(_) === i;
  }) : Ta, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = Xl(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[wn(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function Bb(e) {
  if (wn(e) === Gl)
    return [];
  var t = Vi(e);
  return [Zf(e), t, Zf(t)];
}
function jb(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = wn(h), m = v === h, k = f || (m || !_ ? [Vi(h)] : Bb(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(wn(H) === Gl ? Wb(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, w = t.rects.popper, A = /* @__PURE__ */ new Map(), y = !0, x = b[0], O = 0; O < b.length; O++) {
      var W = b[O], j = wn(W), T = Sr(W) === xr, M = [ut, Pt].indexOf(j) >= 0, E = M ? "width" : "height", D = Xl(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), S = M ? T ? xn : Vt : T ? Pt : ut;
      C[E] > w[E] && (S = Vi(S));
      var N = Vi(S), L = [];
      if (o && L.push(D[j] <= 0), c && L.push(D[S] <= 0, D[N] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      A.set(W, L);
    }
    if (y)
      for (var B = _ ? 3 : 1, F = function(H) {
        var V = b.find(function(K) {
          var Y = A.get(K);
          if (Y)
            return Y.slice(0, H).every(function(q) {
              return q;
            });
        });
        if (V)
          return x = V, "break";
      }, I = B; I > 0; I--) {
        var z = F(I);
        if (z === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Rd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ub(e) {
  return e.button === 2;
}
var Qt;
class Ib extends yl {
  constructor() {
    super(...arguments);
    R(this, Qt, void 0);
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
    super.componentWillUnmount(), (n = $(this, Qt)) == null || n.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [Qa, Rd],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return $(this, Qt) ? $(this, Qt).setOptions(n) : this.ref.current && U(this, Qt, Nd(this._getPopperElement(), this.ref.current, n)), $(this, Qt);
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Il("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
Qt = new WeakMap();
var en, Ve, tr, ti;
class Ne extends ft {
  constructor() {
    super(...arguments);
    R(this, en, void 0);
    R(this, Ve, void 0);
    R(this, tr, void 0);
    R(this, ti, void 0);
  }
  get isShown() {
    var n;
    return (n = $(this, en)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return $(this, en) || this._ensureMenu();
  }
  get popper() {
    return $(this, Ve) ? $(this, Ve) : this._createPopper();
  }
  get trigger() {
    return $(this, ti) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return U(this, ti, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), this.emit("shown", this), !0);
  }
  hide() {
    var r, s;
    return this.emit("hide", this).defaultPrevented ? !1 : ((r = $(this, Ve)) == null || r.destroy(), U(this, Ve, void 0), (s = $(this, en)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n, r;
    (n = $(this, Ve)) == null || n.destroy(), super.destroy(), (r = $(this, en)) == null || r.remove();
  }
  _ensureMenu() {
    var o, a;
    const { element: n } = this, r = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = document.createElement("div"), s.classList.add(r), document.body.appendChild(s);
    else if (n) {
      const c = (o = n.getAttribute("href")) != null ? o : n.dataset.target;
      if ((c == null ? void 0 : c[0]) === "#" && (s = document.querySelector(c)), !s) {
        const f = n.nextElementSibling;
        f != null && f.classList.contains(r) ? s = f : s = (a = n.parentNode) == null ? void 0 : a.querySelector(`.${r}`);
      }
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return U(this, en, s), s;
  }
  _getPopperOptions() {
    const { flip: n, preventOverflow: r, modifiers: s = [] } = this.options;
    return {
      modifiers: [
        r ? typeof r == "object" ? { ...Qa, options: r } : Qa : null,
        n ? Rd : null,
        ...s
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return $(this, Ve) ? $(this, Ve).setOptions(n) : U(this, Ve, Nd(this._getPopperElement(), this.menu, n)), $(this, Ve);
  }
  _getMenuOptions() {
    const { menu: n, items: r } = this.options;
    let s = r || (n == null ? void 0 : n.items);
    if (!!s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Iy(Il(Ib, n), this.menu), !0);
  }
  _getPopperElement() {
    return $(this, tr) || U(this, tr, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), $(this, tr);
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-menu" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)) || r && Ub(r))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
  static show(n) {
    var a;
    const { event: r, ...s } = n, o = this.ensure(document.body);
    return Object.keys(s).length && o.setOptions(s), o.show(r), (a = r == null ? void 0 : r.stopPropagation) == null || a.call(r), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
en = new WeakMap(), Ve = new WeakMap(), tr = new WeakMap(), ti = new WeakMap(), P(Ne, "NAME", "contextmenu"), P(Ne, "EVENTS", !0), P(Ne, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), P(Ne, "MENU_CLASS", "contextmenu"), P(Ne, "CLASS_SHOW", "show"), P(Ne, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Ne.MENU_CLASS}`))
    return;
  const n = t.closest(Ne.MENU_SELECTOR);
  n && (Ne.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Ne.clear.bind(Ne));
var nr, rr, or, Ks, Hd;
const bc = class extends Ne {
  constructor() {
    super(...arguments);
    R(this, Ks);
    R(this, nr, !1);
    R(this, rr, 0);
    P(this, "hideLater", () => {
      $(this, or).call(this), U(this, rr, window.setTimeout(this.hide.bind(this), 100));
    });
    R(this, or, () => {
      clearTimeout($(this, rr)), U(this, rr, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, r) {
    (r == null ? void 0 : r.clearOthers) !== !1 && bc.clear({ event: r == null ? void 0 : r.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!$(this, nr) && this.isHover && ne(this, Ks, Hd).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, r) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...r });
  }
  destroy() {
    $(this, nr) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", $(this, or)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var s;
    const n = super._getPopperOptions(), r = this._getArrowSize();
    return r && n.modifiers.push({ ...Py, options: {
      padding: r,
      element: ".arrow"
    } }, {
      ...Hy,
      options: {
        offset: [0, r + ((s = this.options.offset) != null ? s : 0)]
      }
    }, {
      name: "dropdown",
      enabled: !0,
      phase: "beforeWrite",
      fn: ({ state: o }) => {
        var c, f;
        const a = ((c = o.placement) == null ? void 0 : c.split("-").shift()) || "";
        (f = this.menu.querySelector(".arrow")) == null || f.setAttribute("class", `arrow arrow-${a}`), this.element.setAttribute("data-dropdown-placement", a);
      }
    }), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const r = document.createElement("div");
      r.classList.add("arrow"), r.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n.prepend(r);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: r } = n;
      n.afterRender = (...s) => {
        var a;
        const o = this.menu.querySelector(".arrow");
        o && ((a = this.menu.querySelector(".menu")) == null || a.appendChild(o), this.popper.update()), r == null || r(...s);
      };
    }
    return n;
  }
};
let Me = bc;
nr = new WeakMap(), rr = new WeakMap(), or = new WeakMap(), Ks = new WeakSet(), Hd = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", $(this, or)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), U(this, nr, !0);
}, P(Me, "NAME", "dropdown"), P(Me, "MENU_CLASS", "dropdown-menu"), P(Me, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), P(Me, "DEFAULT", {
  ...Ne.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Me.MENU_SELECTOR);
  if (n) {
    const r = Me.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    Me.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Me.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = Me.ensure(n);
  r.isHover && r.show();
});
const Fb = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Me.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Me.clear({ event: e });
};
window.addEventListener("scroll", Fb, !0);
var ni, ir;
class zb extends co {
  constructor(n) {
    var r;
    super(n);
    R(this, ni, void 0);
    R(this, ir, sy());
    this.state = { placement: ((r = n.dropdown) == null ? void 0 : r.placement) || "", show: !1 };
  }
  get ref() {
    return $(this, ir);
  }
  get triggerElement() {
    return $(this, ir).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...r } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: s }) => {
        var a;
        const o = ((a = s.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), U(this, ni, Me.ensure(this.triggerElement, {
      ...r,
      modifiers: n,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var n;
    (n = $(this, ni)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: r, dropdown: s, ...o } = this.props;
    return {
      className: G("dropdown", n),
      children: typeof r == "function" ? r(this.state) : r,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: $(this, ir)
    };
  }
  render() {
    const { children: n, ...r } = this.beforeRender();
    return /* @__PURE__ */ sd("div", {
      ...r
    }, n);
  }
}
ni = new WeakMap(), ir = new WeakMap();
class Vb extends zb {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: t, show: n } = this.state, r = this.beforeRender();
    let { caret: s = !0 } = r;
    if (s !== !1 && (n || s === !0)) {
      const a = n ? t : (o = this.props.dropdown) == null ? void 0 : o.placement;
      s = (a === "top" ? "up" : a === "bottom" ? "down" : a) || (typeof s == "string" ? s : "") || "down";
    }
    return r.caret = s, /* @__PURE__ */ sd(kn, {
      ...r
    });
  }
}
function Wd({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ea(Vb, {
    type: n,
    ...r
  });
}
function Yb({
  key: e,
  type: t,
  btnType: n,
  ...r
}) {
  return /* @__PURE__ */ Ea(kl, {
    type: n,
    ...r
  });
}
class zt extends Ft {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: r, ...s } = super.beforeRender();
    return s.className = G(s.className, r ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, r) {
    const s = this.isBtnItem(r.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...n,
      ...s,
      ...r,
      className: G(`${this.name}-${r.type}`, n.className, s.className, r.className),
      style: Object.assign({}, n.style, s.style, r.style)
    };
    return /* @__PURE__ */ Ea(t, {
      ...o
    });
  }
}
P(zt, "ItemComponents", {
  item: oy,
  dropdown: Wd,
  "btn-group": Yb
}), P(zt, "ROOT_TAG", "nav"), P(zt, "NAME", "toolbar"), P(zt, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
class Bd extends qn {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  renderHeader() {
    const {
      header: t,
      title: n
    } = this.props;
    return Fr(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ pe("div", {
      className: "modal-header"
    }, /* @__PURE__ */ pe("div", {
      className: "modal-title"
    }, n));
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Fr(t) ? t : /* @__PURE__ */ pe("div", {
      className: "modal-actions"
    }, t ? /* @__PURE__ */ pe(zt, {
      ...t
    }) : null, n ? /* @__PURE__ */ pe("button", {
      type: "button",
      class: "btn square ghost",
      "data-dismiss": "modal"
    }, /* @__PURE__ */ pe("span", {
      class: "close"
    })) : null);
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Fr(t) ? t : /* @__PURE__ */ pe("div", {
      className: "modal-body"
    }, t) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Fr(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ pe("div", {
      className: "modal-footer"
    }, n ? /* @__PURE__ */ pe(zt, {
      ...n
    }) : null);
  }
  render() {
    const {
      className: t,
      style: n,
      children: r
    } = this.props;
    return /* @__PURE__ */ pe("div", {
      className: G("modal-dialog", t),
      style: n
    }, /* @__PURE__ */ pe("div", {
      className: "modal-content"
    }, this.renderHeader(), this.renderActions(), this.renderBody(), r, this.renderFooter()));
  }
}
P(Bd, "defaultProps", { closeBtn: !0 });
var ri, sr, oi;
class qb extends qn {
  constructor() {
    super(...arguments);
    R(this, ri, Kg());
    R(this, sr, void 0);
    P(this, "state", {});
    R(this, oi, () => {
      var s, o;
      const n = (o = (s = $(this, ri).current) == null ? void 0 : s.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let r = $(this, sr);
      r == null || r.disconnect(), r = new ResizeObserver(() => {
        const a = n.body, c = n.documentElement, f = Math.ceil(Math.max(a.scrollHeight, a.offsetHeight, c.offsetHeight));
        this.setState({ height: f });
      }), r.observe(n.body), r.observe(n.documentElement), U(this, sr, r);
    });
  }
  componentDidMount() {
    $(this, oi).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = $(this, sr)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ pe("iframe", {
      className: "modal-iframe",
      style: this.state,
      src: n,
      ref: $(this, ri),
      onLoad: $(this, oi)
    });
  }
}
ri = new WeakMap(), sr = new WeakMap(), oi = new WeakMap();
function Gb(e, t) {
  const { custom: n, title: r, content: s } = t;
  return {
    body: s,
    title: r,
    ...typeof n == "function" ? n() : n
  };
}
async function Xb(e, t) {
  const { dataType: n, url: r, request: s, custom: o, title: a } = t, f = await (await fetch(r, s)).text();
  if (n !== "html")
    try {
      const p = JSON.parse(f);
      return {
        title: a,
        ...o,
        ...p
      };
    } catch {
    }
  return {
    title: a,
    ...o,
    body: n === "html" ? /* @__PURE__ */ pe("div", {
      className: "modal-body",
      dangerouslySetInnerHTML: { __html: f }
    }) : f
  };
}
async function Kb(e, t) {
  const { url: n, custom: r, title: s } = t;
  return {
    title: s,
    ...r,
    body: /* @__PURE__ */ pe(qb, {
      url: n
    })
  };
}
const Zb = {
  custom: Gb,
  ajax: Xb,
  iframe: Kb
};
var ii, si, $t, ar, Yi, Zs, jd, ai, el;
const Eo = class extends Pe {
  constructor() {
    super(...arguments);
    R(this, ar);
    R(this, Zs);
    R(this, ai);
    R(this, ii, void 0);
    R(this, si, void 0);
    R(this, $t, void 0);
  }
  get id() {
    return $(this, si);
  }
  get loading() {
    return this.modalElement.classList.contains(Eo.LOADING_CLASS);
  }
  get modalElement() {
    let n = $(this, ii);
    if (!n) {
      const { id: r } = this;
      n = this.element.querySelector(`#${r}`), n || (n = document.createElement("div"), ws(n, {
        id: r,
        style: this.options.style
      }), Fp(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), U(this, ii, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), U(this, si, this.options.id || `modal-${ty()}`);
  }
  show(n) {
    return super.show(n) ? (this.buildDialog(), !0) : !1;
  }
  render(n) {
    super.render(n), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    $(this, $t) && clearTimeout($(this, $t));
    const { modalElement: n, options: r } = this, { type: s, loadTimeout: o } = r, a = Zb[s];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(Eo.LOADING_CLASS), await ne(this, Zs, jd).call(this), o && U(this, $t, window.setTimeout(() => {
      U(this, $t, 0), ne(this, ai, el).call(this, this.options.timeoutTip);
    }, o));
    const c = await a(n, r);
    return c === !1 ? await ne(this, ai, el).call(this, this.options.failedTip) : c && typeof c == "object" && await ne(this, ar, Yi).call(this, c), $(this, $t) && (clearTimeout($(this, $t)), U(this, $t, 0)), n.classList.remove(Eo.LOADING_CLASS), !0;
  }
};
let zr = Eo;
ii = new WeakMap(), si = new WeakMap(), $t = new WeakMap(), ar = new WeakSet(), Yi = function(n) {
  return new Promise((r) => {
    const { afterRender: s, ...o } = n;
    n = {
      afterRender: (a) => {
        this.layout(), s == null || s(a), r();
      },
      ...o
    }, ey(
      /* @__PURE__ */ pe(Bd, {
        ...n
      }),
      this.modalElement
    );
  });
}, Zs = new WeakSet(), jd = function() {
  const { loadingText: n } = this.options;
  return ne(this, ar, Yi).call(this, {
    body: /* @__PURE__ */ pe("div", {
      className: "modal-loading-indicator"
    }, /* @__PURE__ */ pe("span", {
      className: "spinner"
    }), n ? /* @__PURE__ */ pe("span", {
      className: "modal-loading-text"
    }, n) : null)
  });
}, ai = new WeakSet(), el = function(n) {
  if (!!n)
    return ne(this, ar, Yi).call(this, {
      body: /* @__PURE__ */ pe("div", {
        className: "modal-load-failed"
      }, n)
    });
}, P(zr, "LOADING_CLASS", "loading"), P(zr, "DEFAULT", {
  ...Pe.DEFAULT,
  loadTimeout: 1e4
});
var tn, Js, Ud, Qs, Id, ea, Fd;
class _o extends ft {
  constructor() {
    super(...arguments);
    R(this, Js);
    R(this, Qs);
    R(this, ea);
    R(this, tn, void 0);
  }
  get modal() {
    return $(this, tn);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return ne(this, Qs, Id).call(this).show();
  }
  hide() {
    var n;
    (n = $(this, tn)) == null || n.hide();
  }
}
tn = new WeakMap(), Js = new WeakSet(), Ud = function() {
  const {
    container: n,
    ...r
  } = this.options, s = r, o = this.element.getAttribute("href") || "";
  return s.type || (s.target || o[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && o[0] !== "#" && (s.url = o), s;
}, Qs = new WeakSet(), Id = function() {
  const n = ne(this, Js, Ud).call(this);
  let r = $(this, tn);
  return r ? r.setOptions(n) : n.type === "static" ? (r = new Pe(ne(this, ea, Fd).call(this), n), U(this, tn, r)) : (r = new zr(this.container, n), U(this, tn, r)), r;
}, ea = new WeakSet(), Fd = function() {
  let n = this.options.target;
  if (!n) {
    const { element: r } = this;
    if (r.tagName === "A") {
      const s = r.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, P(_o, "NAME", "ModalTrigger"), P(_o, "EVENTS", !0), P(_o, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(_o.TOGGLE_SELECTOR);
  if (n) {
    const r = _o.ensure(n);
    r && r.show(), console.log("> modalTrigger", r);
  }
});
class zd extends Ft {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = G(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}
P(zd, "NAME", "nav");
class Jf extends Ke {
}
P(Jf, "NAME", "nav"), P(Jf, "Component", zd);
var Vd, tl, Yd, Jb = [];
function $n(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Vd.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Qb(e, a, r, s, null);
}
function Qb(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Yd : s };
  return s == null && tl.vnode != null && tl.vnode(o), o;
}
Vd = Jb.slice, tl = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Yd = 0;
function Fo(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function e0({
  key: e,
  type: t,
  btnType: n,
  page: r,
  format: s,
  pagerInfo: o,
  linkCreator: a,
  ...c
}) {
  const f = Fo(o, r);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(f) : Re(s, f)), c.url === void 0 && a && (c.url = typeof a == "function" ? a(f) : Re(a, f)), c.disabled === void 0 && (c.disabled = r !== void 0 && f.page === o.page), /* @__PURE__ */ $n(kn, {
    type: n,
    ...c
  });
}
const Wt = 24 * 60 * 60 * 1e3, Fe = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), mi = (e, t = new Date()) => (e = Fe(e), t = Fe(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Qf = (e, t = new Date()) => Fe(e).getFullYear() === Fe(t).getFullYear(), t0 = (e, t = new Date()) => (e = Fe(e), t = Fe(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), pk = (e, t = new Date()) => {
  e = Fe(e), t = Fe(t);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((s + 4) / 7);
}, dk = (e, t) => mi(Fe(t), e), hk = (e, t) => mi(Fe(t).getTime() - Wt, e), vk = (e, t) => mi(Fe(t).getTime() + Wt, e), mk = (e, t) => mi(Fe(t).getTime() - 2 * Wt, e), nl = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Fe(e);
  const n = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((r) => {
    if (new RegExp(`(${r})`).test(t)) {
      const s = `${n[r]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, gk = (e, t, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = nl(e, Qf(e) ? r.month : r.full);
  if (mi(e, t))
    return s;
  const o = nl(t, Qf(e, t) ? t0(e, t) ? r.day : r.month : r.full);
  return r.str.replace("{0}", s).replace("{1}", o);
}, yk = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - Wt * 7;
    case "oneMonth":
      return t - Wt * 31;
    case "threeMonth":
      return t - Wt * 31 * 3;
    case "halfYear":
      return t - Wt * 183;
    case "oneYear":
      return t - Wt * 365;
    case "twoYear":
      return t - 2 * (Wt * 365);
    default:
      return 0;
  }
}, eu = (e, t, n = !0, r = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, eu(e, "day", n, r);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, eu(e, "day", n, r);
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
  return n ? r + e : r - e;
};
function n0({
  key: e,
  type: t,
  page: n,
  text: r = "",
  pagerInfo: s,
  children: o,
  ...a
}) {
  const c = Fo(s, n);
  return r = typeof r == "function" ? r(c) : Re(r, c), /* @__PURE__ */ $n(h_, {
    ...a
  }, o, r);
}
function r0({
  key: e,
  type: t,
  btnType: n,
  count: r = 12,
  pagerInfo: s,
  onClick: o,
  linkCreator: a,
  ...c
}) {
  if (!s.pageTotal)
    return;
  const f = { ...c, square: !0 }, p = () => (f.text = "", f.icon = "icon-ellipsis-h", f.disabled = !0, /* @__PURE__ */ $n(kn, {
    type: n,
    ...f
  })), i = (u, l) => {
    const _ = [];
    for (let g = u; g <= l; g++) {
      f.text = g, delete f.icon, f.disabled = !1;
      const h = Fo(s, g);
      a && (f.url = typeof a == "function" ? a(h) : Re(a, h)), _.push(/* @__PURE__ */ $n(kn, {
        type: n,
        ...f,
        onClick: o
      }));
    }
    return _;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= r ? d = [...d, ...i(2, s.pageTotal)] : s.page < r - 2 ? d = [...d, ...i(2, r - 2), p(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - r + 3 ? d = [...d, p(), ...i(s.pageTotal - r + 3, s.pageTotal)] : d = [...d, p(), ...i(s.page - Math.ceil((r - 4) / 2), s.page + Math.floor((r - 4) / 2)), p(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function o0({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: r = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...o
}) {
  var c, f;
  s.items = (c = s.items) != null ? c : r.map((p) => {
    const i = { ...t, recPerPage: p };
    return {
      text: `${p}`,
      url: typeof n == "function" ? n(i) : Re(n, i)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Re(a, t), s.menu = { ...s.menu, className: G((f = s.menu) == null ? void 0 : f.className, "pager-size-menu") }, /* @__PURE__ */ $n(Wd, {
    type: "dropdown",
    dropdown: s,
    ...o
  });
}
function i0({
  key: e,
  page: t,
  type: n,
  btnType: r,
  pagerInfo: s,
  size: o,
  onClick: a,
  onChange: c,
  linkCreator: f,
  ...p
}) {
  const i = { ...p };
  let d;
  const u = (g) => {
    var h;
    d = Number((h = g.target) == null ? void 0 : h.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, l = (g) => {
    if (!(g != null && g.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const h = Fo(s, d);
    c && !c({ info: h, event: g }) || (g.target.href = i.url = typeof f == "function" ? f(h) : Re(f, h));
  }, _ = Fo(s, t || 0);
  return i.url = typeof f == "function" ? f(_) : Re(f, _), i.className = G("input-group-addon", i.className), /* @__PURE__ */ $n("div", {
    className: G("input-group", "pager-goto-group", o ? `size-${o}` : "")
  }, /* @__PURE__ */ $n("input", {
    type: "number",
    class: "form-control",
    max: s.pageTotal,
    min: "1",
    onInput: u
  }), /* @__PURE__ */ $n(kn, {
    type: r,
    ...i,
    onClick: l
  }));
}
class qi extends zt {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: r = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: r, pageTotal: r ? Math.ceil(n / r) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, r) {
    const s = super.getItemRenderProps(t, n, r), o = n.type || "item";
    return o === "info" ? Object.assign(s, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(s, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), s;
  }
}
P(qi, "NAME", "pager"), P(qi, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), P(qi, "ItemComponents", {
  ...zt.ItemComponents,
  link: e0,
  info: n0,
  nav: r0,
  "size-menu": o0,
  goto: i0
});
class tu extends Ke {
}
P(tu, "NAME", "pager"), P(tu, "Component", qi);
var Da, ue, qd, po, nu, Ls = {}, Gd = [], s0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function vn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ae(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Da.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Gi(e, a, r, s, null);
}
function Gi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qd : s };
  return s == null && ue.vnode != null && ue.vnode(o), o;
}
function Si() {
  return { current: null };
}
function La(e) {
  return e.children;
}
function ho(e, t) {
  this.props = e, this.context = t;
}
function zo(e, t) {
  if (t == null)
    return e.__ ? zo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? zo(e) : null;
}
function Kd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Kd(e);
  }
}
function ru(e) {
  (!e.__d && (e.__d = !0) && po.push(e) && !Ps.__r++ || nu !== ue.debounceRendering) && ((nu = ue.debounceRendering) || setTimeout)(Ps);
}
function Ps() {
  for (var e; Ps.__r = po.length; )
    e = po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), po = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = vn({}, o)).__v = o.__v + 1, Kl(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? zo(o) : a, o.__h), eh(r, o), o.__e != a && Kd(o)));
    });
}
function Zd(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Gd, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Gi(null, l, null, null, l) : Array.isArray(l) ? Gi(La, { children: l }, null, null, null) : l.__b > 0 ? Gi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Kl(e, l, u = u || Ls, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Jd(l, f, e) : f = Qd(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = zo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && nh(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      th(h[i], h[++i], h[++i]);
}
function Jd(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Jd(r, t, n) : Qd(n, r, r, s, r.__e, t));
  return t;
}
function Qd(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function a0(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Ns(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Ns(e, o, t[o], n[o], r);
}
function ou(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || s0.test(t) ? n : n + "px";
}
function Ns(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ou(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ou(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? su : iu, o) : e.removeEventListener(t, o ? su : iu, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function iu(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function su(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Kl(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = ue.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ho(h, m), i.constructor = y, i.render = c0), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = vn({}, i.__s)), vn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = ue.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = vn(vn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === La && p.key == null ? p.props.children : p, Zd(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = l0(n.__e, t, n, r, s, o, a, f);
    (p = ue.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function eh(e, t) {
  ue.__c && ue.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      ue.__e(r, n.__v);
    }
  });
}
function l0(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && Da.call(e.childNodes), p = (d = n.props || Ls).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (a0(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Zd(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && zo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Xd(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Ns(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Ns(e, "checked", _, d.checked, !1));
  }
  return e;
}
function th(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    ue.__e(r, n);
  }
}
function nh(e, t, n) {
  var r, s;
  if (ue.unmount && ue.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || th(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        ue.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && nh(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Xd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function c0(e, t, n) {
  return this.constructor(e, n);
}
function f0(e, t, n) {
  var r, s, o;
  ue.__ && ue.__(e, t), s = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Kl(t, e = (!r && n || t).__k = Ae(La, null, [e]), s || Ls, Ls, t.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : t.firstChild ? Da.call(t.childNodes) : null, o, !r && n ? n : s ? s.__e : t.firstChild, r), eh(o, e);
}
Da = Gd.slice, ue = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, qd = 0, ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = vn({}, this.state), typeof e == "function" && (e = e(vn({}, n), this.props)), e && vn(n, e), e != null && this.__v && (t && this._sb.push(t), ru(this));
}, ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ru(this));
}, ho.prototype.render = La, po = [], Ps.__r = 0;
var rh = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Tp, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", p = "day", i = "week", d = "month", u = "quarter", l = "year", _ = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var M = ["th", "st", "nd", "rd"], E = T % 100;
      return "[" + T + (M[(E - 20) % 10] || M[E] || M[0]) + "]";
    } }, k = function(T, M, E) {
      var D = String(T);
      return !D || D.length >= M ? T : "" + Array(M + 1 - D.length).join(E) + T;
    }, b = { s: k, z: function(T) {
      var M = -T.utcOffset(), E = Math.abs(M), D = Math.floor(E / 60), S = E % 60;
      return (M <= 0 ? "+" : "-") + k(D, 2, "0") + ":" + k(S, 2, "0");
    }, m: function T(M, E) {
      if (M.date() < E.date())
        return -T(E, M);
      var D = 12 * (E.year() - M.year()) + (E.month() - M.month()), S = M.clone().add(D, d), N = E - S < 0, L = M.clone().add(D + (N ? -1 : 1), d);
      return +(-(D + (E - S) / (N ? S - L : L - S)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: l, w: i, d: p, D: _, h: f, m: c, s: a, ms: o, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, C = "en", w = {};
    w[C] = m;
    var A = function(T) {
      return T instanceof W;
    }, y = function T(M, E, D) {
      var S;
      if (!M)
        return C;
      if (typeof M == "string") {
        var N = M.toLowerCase();
        w[N] && (S = N), E && (w[N] = E, S = N);
        var L = M.split("-");
        if (!S && L.length > 1)
          return T(L[0]);
      } else {
        var B = M.name;
        w[B] = M, S = B;
      }
      return !D && S && (C = S), S || !D && C;
    }, x = function(T, M) {
      if (A(T))
        return T.clone();
      var E = typeof M == "object" ? M : {};
      return E.date = T, E.args = arguments, new W(E);
    }, O = b;
    O.l = y, O.i = A, O.w = function(T, M) {
      return x(T, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var W = function() {
      function T(E) {
        this.$L = y(E.locale, null, !0), this.parse(E);
      }
      var M = T.prototype;
      return M.parse = function(E) {
        this.$d = function(D) {
          var S = D.date, N = D.utc;
          if (S === null)
            return new Date(NaN);
          if (O.u(S))
            return new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var L = S.match(h);
            if (L) {
              var B = L[2] - 1 || 0, F = (L[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(L[1], B, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F)) : new Date(L[1], B, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, F);
            }
          }
          return new Date(S);
        }(E), this.$x = E.x || {}, this.init();
      }, M.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, M.$utils = function() {
        return O;
      }, M.isValid = function() {
        return this.$d.toString() !== g;
      }, M.isSame = function(E, D) {
        var S = x(E);
        return this.startOf(D) <= S && S <= this.endOf(D);
      }, M.isAfter = function(E, D) {
        return x(E) < this.startOf(D);
      }, M.isBefore = function(E, D) {
        return this.endOf(D) < x(E);
      }, M.$g = function(E, D, S) {
        return O.u(E) ? this[D] : this.set(S, E);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(E, D) {
        var S = this, N = !!O.u(D) || D, L = O.p(E), B = function(Y, q) {
          var te = O.w(S.$u ? Date.UTC(S.$y, q, Y) : new Date(S.$y, q, Y), S);
          return N ? te : te.endOf(p);
        }, F = function(Y, q) {
          return O.w(S.toDate()[Y].apply(S.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), S);
        }, I = this.$W, z = this.$M, X = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case l:
            return N ? B(1, 0) : B(31, 11);
          case d:
            return N ? B(1, z) : B(0, z + 1);
          case i:
            var V = this.$locale().weekStart || 0, K = (I < V ? I + 7 : I) - V;
            return B(N ? X - K : X + (6 - K), z);
          case p:
          case _:
            return F(H + "Hours", 0);
          case f:
            return F(H + "Minutes", 1);
          case c:
            return F(H + "Seconds", 2);
          case a:
            return F(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(E) {
        return this.startOf(E, !1);
      }, M.$set = function(E, D) {
        var S, N = O.p(E), L = "set" + (this.$u ? "UTC" : ""), B = (S = {}, S[p] = L + "Date", S[_] = L + "Date", S[d] = L + "Month", S[l] = L + "FullYear", S[f] = L + "Hours", S[c] = L + "Minutes", S[a] = L + "Seconds", S[o] = L + "Milliseconds", S)[N], F = N === p ? this.$D + (D - this.$W) : D;
        if (N === d || N === l) {
          var I = this.clone().set(_, 1);
          I.$d[B](F), I.init(), this.$d = I.set(_, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          B && this.$d[B](F);
        return this.init(), this;
      }, M.set = function(E, D) {
        return this.clone().$set(E, D);
      }, M.get = function(E) {
        return this[O.p(E)]();
      }, M.add = function(E, D) {
        var S, N = this;
        E = Number(E);
        var L = O.p(D), B = function(z) {
          var X = x(N);
          return O.w(X.date(X.date() + Math.round(z * E)), N);
        };
        if (L === d)
          return this.set(d, this.$M + E);
        if (L === l)
          return this.set(l, this.$y + E);
        if (L === p)
          return B(1);
        if (L === i)
          return B(7);
        var F = (S = {}, S[c] = r, S[f] = s, S[a] = n, S)[L] || 1, I = this.$d.getTime() + E * F;
        return O.w(I, this);
      }, M.subtract = function(E, D) {
        return this.add(-1 * E, D);
      }, M.format = function(E) {
        var D = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || g;
        var N = E || "YYYY-MM-DDTHH:mm:ssZ", L = O.z(this), B = this.$H, F = this.$m, I = this.$M, z = S.weekdays, X = S.months, H = function(q, te, re, _e) {
          return q && (q[te] || q(D, N)) || re[te].slice(0, _e);
        }, V = function(q) {
          return O.s(B % 12 || 12, q, "0");
        }, K = S.meridiem || function(q, te, re) {
          var _e = q < 12 ? "AM" : "PM";
          return re ? _e.toLowerCase() : _e;
        }, Y = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: I + 1, MM: O.s(I + 1, 2, "0"), MMM: H(S.monthsShort, I, X, 3), MMMM: H(X, I), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: H(S.weekdaysMin, this.$W, z, 2), ddd: H(S.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(B), HH: O.s(B, 2, "0"), h: V(1), hh: V(2), a: K(B, F, !0), A: K(B, F, !1), m: String(F), mm: O.s(F, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: L };
        return N.replace(v, function(q, te) {
          return te || Y[q] || L.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(E, D, S) {
        var N, L = O.p(D), B = x(E), F = (B.utcOffset() - this.utcOffset()) * r, I = this - B, z = O.m(this, B);
        return z = (N = {}, N[l] = z / 12, N[d] = z, N[u] = z / 3, N[i] = (I - F) / 6048e5, N[p] = (I - F) / 864e5, N[f] = I / s, N[c] = I / r, N[a] = I / n, N)[L] || I, S ? z : O.a(z);
      }, M.daysInMonth = function() {
        return this.endOf(d).$D;
      }, M.$locale = function() {
        return w[this.$L];
      }, M.locale = function(E, D) {
        if (!E)
          return this.$L;
        var S = this.clone(), N = y(E, D, !0);
        return N && (S.$L = N), S;
      }, M.clone = function() {
        return O.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), j = W.prototype;
    return x.prototype = j, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", p], ["$M", d], ["$y", l], ["$D", _]].forEach(function(T) {
      j[T[1]] = function(M) {
        return this.$g(M, T[0], T[1]);
      };
    }), x.extend = function(T, M) {
      return T.$i || (T(M, W, x), T.$i = !0), x;
    }, x.locale = y, x.isDayjs = A, x.unix = function(T) {
      return x(1e3 * T);
    }, x.en = w[C], x.Ls = w, x.p = {}, x;
  });
})(rh);
const oh = rh.exports, u0 = (e) => {
  const t = oh(`1989-01-01 ${e || "00:00:00"}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function _0() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((r, s) => r + s), t = t.map((r, s) => r + s), n = n.map((r, s) => r + s), { hourList: e, minuteList: t, secondList: n };
}
class p0 extends ho {
  constructor() {
    super(...arguments);
    P(this, "cellHeight", 24);
    P(this, "ref", Si());
    P(this, "hourRef", Si());
    P(this, "minuteRef", Si());
    P(this, "secondRef", Si());
    P(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var s, o, a;
    const r = "smooth";
    n.hour && this.hourRef.current && ((s = this.hourRef.current) == null || s.scrollTo({ behavior: r, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((o = this.minuteRef.current) == null || o.scrollTo({ behavior: r, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((a = this.secondRef.current) == null || a.scrollTo({ behavior: r, top: n.second * this.cellHeight }));
  }
  handleChange(n) {
    this.handleMoveTime(n), this.setState({ selectTime: this.getTimeString(n) });
  }
  getTimeString(n) {
    return this.props.showSeconds ? `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}:${(n == null ? void 0 : n.second) && this.addZero(n.second) || "00"}` : `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}`;
  }
  addZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  renderColumn(n, r) {
    const s = u0(this.state.selectTime);
    return r.map((o) => {
      const a = s[n] === o, c = { ...s, [n]: o };
      return /* @__PURE__ */ Ae("button", {
        className: G("btn", "size-sm", "ghost", "flex", { active: a }),
        type: "button",
        key: `unit-${n}-${o}`,
        onClick: () => this.handleChange(c)
      }, this.addZero(o));
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: r } = this.props, { hourList: s, minuteList: o, secondList: a } = _0();
    return /* @__PURE__ */ Ae("div", {
      className: G("timepicker-timepanel", "pt-px"),
      style: r,
      ref: this.ref
    }, /* @__PURE__ */ Ae("div", {
      className: G("flex", " justify-around", "p-px", "not-hide-timepicker")
    }, /* @__PURE__ */ Ae("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Ae("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.hourRef
    }, this.renderColumn("hour", s))), /* @__PURE__ */ Ae("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Ae("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.minuteRef
    }, this.renderColumn("minute", o))), n && /* @__PURE__ */ Ae("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ Ae("div", {
      className: "timepicker-timepanel-select-col",
      ref: this.secondRef
    }, this.renderColumn("second", a)))), /* @__PURE__ */ Ae("div", {
      className: G("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center")
    }, /* @__PURE__ */ Ae("button", {
      className: G("btn", "size-sm", "ghost", "text-primary"),
      type: "button",
      onClick: this.onClear.bind(this)
    }, "\u6E05\u9664"), /* @__PURE__ */ Ae("button", {
      className: G("btn", "size-sm", "ghost", "text-primary"),
      type: "button",
      onClick: this.onSubmit.bind(this)
    }, "\u786E\u8BA4")));
  }
}
function Qe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fn(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ge(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Bn = Math.max, Rs = Math.min, Er = Math.round;
function rl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ih() {
  return !/^((?!chrome|android).)*safari/i.test(rl());
}
function Cr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Ge(e) && (s = e.offsetWidth > 0 && Er(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Er(r.height) / e.offsetHeight || 1);
  var a = Fn(e) ? Qe(e) : window, c = a.visualViewport, f = !ih() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function Jl(e) {
  var t = Qe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function d0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function h0(e) {
  return e === Qe(e) || !Ge(e) ? Jl(e) : d0(e);
}
function Nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cn(e) {
  return ((Fn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ql(e) {
  return Cr(Cn(e)).left + Jl(e).scrollLeft;
}
function Gt(e) {
  return Qe(e).getComputedStyle(e);
}
function ec(e) {
  var t = Gt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function v0(e) {
  var t = e.getBoundingClientRect(), n = Er(t.width) / e.offsetWidth || 1, r = Er(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function m0(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ge(t), s = Ge(t) && v0(t), o = Cn(t), a = Cr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Nt(t) !== "body" || ec(o)) && (c = h0(t)), Ge(t) ? (f = Cr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = Ql(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function tc(e) {
  var t = Cr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Pa(e) {
  return Nt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zl(e) ? e.host : null) || Cn(e);
}
function sh(e) {
  return ["html", "body", "#document"].indexOf(Nt(e)) >= 0 ? e.ownerDocument.body : Ge(e) && ec(e) ? e : sh(Pa(e));
}
function vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sh(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Qe(r), a = s ? [o].concat(o.visualViewport || [], ec(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(vo(Pa(a)));
}
function g0(e) {
  return ["table", "td", "th"].indexOf(Nt(e)) >= 0;
}
function au(e) {
  return !Ge(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function y0(e) {
  var t = /firefox/i.test(rl()), n = /Trident/i.test(rl());
  if (n && Ge(e)) {
    var r = Gt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Pa(e);
  for (Zl(s) && (s = s.host); Ge(s) && ["html", "body"].indexOf(Nt(s)) < 0; ) {
    var o = Gt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function gi(e) {
  for (var t = Qe(e), n = au(e); n && g0(n) && Gt(n).position === "static"; )
    n = au(n);
  return n && (Nt(n) === "html" || Nt(n) === "body" && Gt(n).position === "static") ? t : n || y0(e) || t;
}
var Be = "top", dt = "bottom", ht = "right", je = "left", nc = "auto", yi = [Be, dt, ht, je], Or = "start", Vo = "end", b0 = "clippingParents", ah = "viewport", Wr = "popper", w0 = "reference", lu = /* @__PURE__ */ yi.reduce(function(e, t) {
  return e.concat([t + "-" + Or, t + "-" + Vo]);
}, []), lh = /* @__PURE__ */ [].concat(yi, [nc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Or, t + "-" + Vo]);
}, []), $0 = "beforeRead", k0 = "read", x0 = "afterRead", S0 = "beforeMain", E0 = "main", C0 = "afterMain", O0 = "beforeWrite", A0 = "write", M0 = "afterWrite", T0 = [$0, k0, x0, S0, E0, C0, O0, A0, M0];
function D0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function L0(e) {
  var t = D0(e);
  return T0.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function P0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Mt(e) {
  return e.split("-")[0];
}
function N0(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function R0(e, t) {
  var n = Qe(e), r = Cn(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = ih();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + Ql(e),
    y: f
  };
}
function H0(e) {
  var t, n = Cn(e), r = Jl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Bn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Bn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Ql(e), f = -r.scrollTop;
  return Gt(s || n).direction === "rtl" && (c += Bn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function ch(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Zl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ol(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function W0(e, t) {
  var n = Cr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cu(e, t, n) {
  return t === ah ? ol(R0(e, n)) : Fn(t) ? W0(t, n) : ol(H0(Cn(e)));
}
function B0(e) {
  var t = vo(Pa(e)), n = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0, r = n && Ge(e) ? gi(e) : e;
  return Fn(r) ? t.filter(function(s) {
    return Fn(s) && ch(s, r) && Nt(s) !== "body";
  }) : [];
}
function j0(e, t, n, r) {
  var s = t === "clippingParents" ? B0(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = cu(e, p, r);
    return f.top = Bn(i.top, f.top), f.right = Rs(i.right, f.right), f.bottom = Rs(i.bottom, f.bottom), f.left = Bn(i.left, f.left), f;
  }, cu(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Ar(e) {
  return e.split("-")[1];
}
function rc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fh(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Mt(r) : null, o = r ? Ar(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Be:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case dt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ht:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case je:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? rc(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Or:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Vo:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function uh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _h(e) {
  return Object.assign({}, uh(), e);
}
function ph(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function oc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? b0 : c, p = n.rootBoundary, i = p === void 0 ? ah : p, d = n.elementContext, u = d === void 0 ? Wr : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = _h(typeof h != "number" ? h : ph(h, yi)), m = u === Wr ? w0 : Wr, k = e.rects.popper, b = e.elements[_ ? m : u], C = j0(Fn(b) ? b : b.contextElement || Cn(e.elements.popper), f, i, a), w = Cr(e.elements.reference), A = fh({
    reference: w,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = ol(Object.assign({}, k, A)), x = u === Wr ? y : w, O = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Wr && W) {
    var j = W[s];
    Object.keys(O).forEach(function(T) {
      var M = [ht, dt].indexOf(T) >= 0 ? 1 : -1, E = [Be, dt].indexOf(T) >= 0 ? "y" : "x";
      O[T] += j[E] * M;
    });
  }
  return O;
}
var fu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function uu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function U0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? fu : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fu, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: Fn(c) ? vo(c) : c.contextElement ? vo(c.contextElement) : [],
          popper: vo(f)
        };
        var k = L0(N0([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!uu(m, k)) {
            i.rects = {
              reference: m0(m, gi(k), i.options.strategy === "fixed"),
              popper: tc(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
              return i.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], w = C.fn, A = C.options, y = A === void 0 ? {} : A, x = C.name;
              typeof w == "function" && (i = w({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: P0(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!uu(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), w = function() {
          };
          d.push(C || w);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var Ei = {
  passive: !0
};
function I0(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = Qe(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Ei);
  }), c && f.addEventListener("resize", n.update, Ei), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Ei);
    }), c && f.removeEventListener("resize", n.update, Ei);
  };
}
const F0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: I0,
  data: {}
};
function z0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const V0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: z0,
  data: {}
};
var Y0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function q0(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Er(t * s) / s || 0,
    y: Er(n * s) / s || 0
  };
}
function _u(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = je, b = Be, C = window;
  if (p) {
    var w = gi(n), A = "clientHeight", y = "clientWidth";
    if (w === Qe(n) && (w = Cn(n), Gt(w).position !== "static" && c === "absolute" && (A = "scrollHeight", y = "scrollWidth")), w = w, s === Be || (s === je || s === ht) && o === Vo) {
      b = dt;
      var x = d && w === C && C.visualViewport ? C.visualViewport.height : w[A];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === je || (s === Be || s === dt) && o === Vo) {
      k = ht;
      var O = d && w === C && C.visualViewport ? C.visualViewport.width : w[y];
      l -= O - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && Y0), j = i === !0 ? q0({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = j.x, g = j.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function G0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Mt(t.placement),
    variation: Ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, _u(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, _u(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const X0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: G0,
  data: {}
};
function K0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Ge(o) || !Nt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Z0(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Ge(s) || !Nt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const J0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: K0,
  effect: Z0,
  requires: ["computeStyles"]
};
var Q0 = [F0, V0, X0, J0], ew = /* @__PURE__ */ U0({
  defaultModifiers: Q0
});
function mo(e, t, n) {
  return Bn(e, Rs(t, n));
}
function tw(e, t, n) {
  var r = mo(e, t, n);
  return r > n ? n : r;
}
var nw = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, _h(typeof t != "number" ? t : ph(t, yi));
};
function rw(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Mt(n.placement), f = rc(c), p = [je, ht].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = nw(s.padding, n), u = tc(o), l = f === "y" ? Be : je, _ = f === "y" ? dt : ht, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = gi(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], w = m / 2 - u[i] / 2 + k, A = mo(b, w, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = A, t.centerOffset = A - w, t);
  }
}
function ow(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !ch(t.elements.popper, s) || (t.elements.arrow = s));
}
const iw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: rw,
  effect: ow,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function sw(e, t, n) {
  var r = Mt(e), s = [je, Be].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [je, ht].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function aw(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = lh.reduce(function(i, d) {
    return i[d] = sw(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const lw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: aw
};
function cw(e) {
  return e === "x" ? "y" : "x";
}
function fw(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = oc(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Mt(t.placement), m = Ar(t.placement), k = !m, b = rc(v), C = cw(b), w = t.modifiersData.popperOffsets, A = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (o) {
      var T, M = b === "y" ? Be : je, E = b === "y" ? dt : ht, D = b === "y" ? "height" : "width", S = w[b], N = S + h[M], L = S - h[E], B = l ? -y[D] / 2 : 0, F = m === Or ? A[D] : y[D], I = m === Or ? -y[D] : -A[D], z = t.elements.arrow, X = l && z ? tc(z) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uh(), V = H[M], K = H[E], Y = mo(0, A[D], X[D]), q = k ? A[D] / 2 - B - Y - V - O.mainAxis : F - Y - V - O.mainAxis, te = k ? -A[D] / 2 + B + Y + K + O.mainAxis : I + Y + K + O.mainAxis, re = t.elements.arrow && gi(t.elements.arrow), _e = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Te = (T = W == null ? void 0 : W[b]) != null ? T : 0, ee = S + q - Te - _e, gt = S + te - Te, Ee = mo(l ? Rs(N, ee) : N, S, l ? Bn(L, gt) : L);
      w[b] = Ee, j[b] = Ee - S;
    }
    if (c) {
      var Ce, yt = b === "x" ? Be : je, ze = b === "x" ? dt : ht, Q = w[C], ie = C === "y" ? "height" : "width", Oe = Q + h[yt], tt = Q - h[ze], Se = [Be, je].indexOf(v) !== -1, nt = (Ce = W == null ? void 0 : W[C]) != null ? Ce : 0, rt = Se ? Oe : Q - A[ie] - y[ie] - nt + O.altAxis, ot = Se ? Q + A[ie] + y[ie] - nt - O.altAxis : tt, it = l && Se ? tw(rt, Q, ot) : mo(l ? rt : Oe, Q, l ? ot : tt);
      w[C] = it, j[C] = it - Q;
    }
    t.modifiersData[r] = j;
  }
}
const uw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: fw,
  requiresIfExists: ["offset"]
};
var _w = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return _w[t];
  });
}
var pw = {
  start: "end",
  end: "start"
};
function pu(e) {
  return e.replace(/start|end/g, function(t) {
    return pw[t];
  });
}
function dw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? lh : f, i = Ar(r), d = i ? c ? lu : lu.filter(function(_) {
    return Ar(_) === i;
  }) : yi, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = oc(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Mt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function hw(e) {
  if (Mt(e) === nc)
    return [];
  var t = Xi(e);
  return [pu(e), t, pu(t)];
}
function vw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Mt(h), m = v === h, k = f || (m || !_ ? [Xi(h)] : hw(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(Mt(H) === nc ? dw(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, w = t.rects.popper, A = /* @__PURE__ */ new Map(), y = !0, x = b[0], O = 0; O < b.length; O++) {
      var W = b[O], j = Mt(W), T = Ar(W) === Or, M = [Be, dt].indexOf(j) >= 0, E = M ? "width" : "height", D = oc(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), S = M ? T ? ht : je : T ? dt : Be;
      C[E] > w[E] && (S = Xi(S));
      var N = Xi(S), L = [];
      if (o && L.push(D[j] <= 0), c && L.push(D[S] <= 0, D[N] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      A.set(W, L);
    }
    if (y)
      for (var B = _ ? 3 : 1, F = function(H) {
        var V = b.find(function(K) {
          var Y = A.get(K);
          if (Y)
            return Y.slice(0, H).every(function(q) {
              return q;
            });
        });
        if (V)
          return x = V, "break";
      }, I = B; I > 0; I--) {
        var z = F(I);
        if (z === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const mw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var lr, cr, Dn, at, li, ta;
class Ct extends ft {
  constructor() {
    super(...arguments);
    R(this, lr, void 0);
    R(this, cr, 0);
    R(this, Dn, void 0);
    R(this, at, void 0);
    R(this, li, void 0);
    P(this, "hideLater", () => {
      $(this, ta).call(this), U(this, cr, window.setTimeout(this.hide.bind(this), 100));
    });
    R(this, ta, () => {
      clearTimeout($(this, cr)), U(this, cr, 0);
    });
  }
  get isShown() {
    var n;
    return (n = $(this, Dn)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return $(this, Dn) || this._ensureTimepicker();
  }
  get popper() {
    return $(this, at) ? $(this, at) : this._createPopper();
  }
  get trigger() {
    return $(this, li) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return U(this, li, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0);
  }
  hide() {
    var n, r;
    return (n = $(this, at)) == null || n.destroy(), U(this, at, void 0), this.element.classList.remove(this.elementShowClass), (r = $(this, Dn)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return typeof n == "number" ? n : 4;
  }
  _createArrow() {
    const n = document.createElement("div");
    return n.classList.add("arrow", "timepicker-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureTimepicker() {
    const n = this.constructor.CLASSNAME, r = document.createElement("div");
    return r.classList.add(n), f0(Ae(p0, { ...this.options }), r), this.options.arrow && r.prepend(this._createArrow()), document.body.appendChild(r), U(this, Dn, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        uw,
        mw,
        { ...iw, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...lw,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "timepicker",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.timepicker.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-timepicker-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: "absolute"
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return $(this, at) ? $(this, at).setOptions(n) : U(this, at, ew(this._getPopperElement(), this.timepicker, n)), $(this, at);
  }
  _getPopperElement() {
    return $(this, lr) || U(this, lr, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), $(this, lr);
  }
  static show(n) {
    var a;
    const { event: r, ...s } = n, o = this.ensure(document.body);
    return Object.keys(s).length && o.setOptions(s), o.show(r), (a = r == null ? void 0 : r.stopPropagation) == null || a.call(r), o;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var f, p;
    n instanceof Event && (n = { event: n });
    const { event: r, exclude: s, ignoreSelector: o = ".not-hide-timepicker" } = n || {};
    if (r && o && ((p = (f = r.target).closest) == null ? void 0 : p.call(f, o)))
      return;
    const a = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of a)
      c.has(i) || d.hide();
  }
}
lr = new WeakMap(), cr = new WeakMap(), Dn = new WeakMap(), at = new WeakMap(), li = new WeakMap(), ta = new WeakMap(), P(Ct, "NAME", "timepicker"), P(Ct, "CLASSNAME", "timepicker"), P(Ct, "CLASS_SHOW", "show"), P(Ct, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), P(Ct, "DEFAULT", {
  value: oh().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ct.MENU_SELECTOR);
  n ? Ct.ensure(n).toggle() : Ct.clear({ event: e });
});
const gw = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ct.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ct.clear({ event: e });
};
window.addEventListener("scroll", gw, !0);
class du extends Ke {
}
P(du, "NAME", "toolbar"), P(du, "Component", zt);
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zn(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ic(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var jn = Math.max, Hs = Math.min, Mr = Math.round;
function il() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dh() {
  return !/^((?!chrome|android).)*safari/i.test(il());
}
function Tr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, o = 1;
  t && Xe(e) && (s = e.offsetWidth > 0 && Mr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Mr(r.height) / e.offsetHeight || 1);
  var a = zn(e) ? et(e) : window, c = a.visualViewport, f = !dh() && n, p = (r.left + (f && c ? c.offsetLeft : 0)) / s, i = (r.top + (f && c ? c.offsetTop : 0)) / o, d = r.width / s, u = r.height / o;
  return {
    width: d,
    height: u,
    top: i,
    right: p + d,
    bottom: i + u,
    left: p,
    x: p,
    y: i
  };
}
function sc(e) {
  var t = et(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function yw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bw(e) {
  return e === et(e) || !Xe(e) ? sc(e) : yw(e);
}
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function On(e) {
  return ((zn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ac(e) {
  return Tr(On(e)).left + sc(e).scrollLeft;
}
function Xt(e) {
  return et(e).getComputedStyle(e);
}
function lc(e) {
  var t = Xt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function ww(e) {
  var t = e.getBoundingClientRect(), n = Mr(t.width) / e.offsetWidth || 1, r = Mr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $w(e, t, n) {
  n === void 0 && (n = !1);
  var r = Xe(t), s = Xe(t) && ww(t), o = On(t), a = Tr(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Rt(t) !== "body" || lc(o)) && (c = bw(t)), Xe(t) ? (f = Tr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : o && (f.x = ac(o))), {
    x: a.left + c.scrollLeft - f.x,
    y: a.top + c.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function cc(e) {
  var t = Tr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Na(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ic(e) ? e.host : null) || On(e);
}
function hh(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0 ? e.ownerDocument.body : Xe(e) && lc(e) ? e : hh(Na(e));
}
function go(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hh(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = et(r), a = s ? [o].concat(o.visualViewport || [], lc(r) ? r : []) : r, c = t.concat(a);
  return s ? c : c.concat(go(Na(a)));
}
function kw(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function hu(e) {
  return !Xe(e) || Xt(e).position === "fixed" ? null : e.offsetParent;
}
function xw(e) {
  var t = /firefox/i.test(il()), n = /Trident/i.test(il());
  if (n && Xe(e)) {
    var r = Xt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Na(e);
  for (ic(s) && (s = s.host); Xe(s) && ["html", "body"].indexOf(Rt(s)) < 0; ) {
    var o = Xt(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function bi(e) {
  for (var t = et(e), n = hu(e); n && kw(n) && Xt(n).position === "static"; )
    n = hu(n);
  return n && (Rt(n) === "html" || Rt(n) === "body" && Xt(n).position === "static") ? t : n || xw(e) || t;
}
var Ue = "top", vt = "bottom", mt = "right", Ie = "left", fc = "auto", wi = [Ue, vt, mt, Ie], Dr = "start", Yo = "end", Sw = "clippingParents", vh = "viewport", Br = "popper", Ew = "reference", vu = /* @__PURE__ */ wi.reduce(function(e, t) {
  return e.concat([t + "-" + Dr, t + "-" + Yo]);
}, []), mh = /* @__PURE__ */ [].concat(wi, [fc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dr, t + "-" + Yo]);
}, []), Cw = "beforeRead", Ow = "read", Aw = "afterRead", Mw = "beforeMain", Tw = "main", Dw = "afterMain", Lw = "beforeWrite", Pw = "write", Nw = "afterWrite", Rw = [Cw, Ow, Aw, Mw, Tw, Dw, Lw, Pw, Nw];
function Hw(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && s(f);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function Ww(e) {
  var t = Hw(e);
  return Rw.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Bw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Tt(e) {
  return e.split("-")[0];
}
function jw(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
function Uw(e, t) {
  var n = et(e), r = On(e), s = n.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, f = 0;
  if (s) {
    o = s.width, a = s.height;
    var p = dh();
    (p || !p && t === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ac(e),
    y: f
  };
}
function Iw(e) {
  var t, n = On(e), r = sc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = jn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = jn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ac(e), f = -r.scrollTop;
  return Xt(s || n).direction === "rtl" && (c += jn(n.clientWidth, s ? s.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: f
  };
}
function gh(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ic(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function sl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Fw(e, t) {
  var n = Tr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function mu(e, t, n) {
  return t === vh ? sl(Uw(e, n)) : zn(t) ? Fw(t, n) : sl(Iw(On(e)));
}
function zw(e) {
  var t = go(Na(e)), n = ["absolute", "fixed"].indexOf(Xt(e).position) >= 0, r = n && Xe(e) ? bi(e) : e;
  return zn(r) ? t.filter(function(s) {
    return zn(s) && gh(s, r) && Rt(s) !== "body";
  }) : [];
}
function Vw(e, t, n, r) {
  var s = t === "clippingParents" ? zw(e) : [].concat(t), o = [].concat(s, [n]), a = o[0], c = o.reduce(function(f, p) {
    var i = mu(e, p, r);
    return f.top = jn(i.top, f.top), f.right = Hs(i.right, f.right), f.bottom = Hs(i.bottom, f.bottom), f.left = jn(i.left, f.left), f;
  }, mu(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Lr(e) {
  return e.split("-")[1];
}
function uc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yh(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Tt(r) : null, o = r ? Lr(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Ue:
      f = {
        x: a,
        y: t.y - n.height
      };
      break;
    case vt:
      f = {
        x: a,
        y: t.y + t.height
      };
      break;
    case mt:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ie:
      f = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = s ? uc(s) : null;
  if (p != null) {
    var i = p === "y" ? "height" : "width";
    switch (o) {
      case Dr:
        f[p] = f[p] - (t[i] / 2 - n[i] / 2);
        break;
      case Yo:
        f[p] = f[p] + (t[i] / 2 - n[i] / 2);
        break;
    }
  }
  return f;
}
function bh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wh(e) {
  return Object.assign({}, bh(), e);
}
function $h(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
function _c(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.strategy, a = o === void 0 ? e.strategy : o, c = n.boundary, f = c === void 0 ? Sw : c, p = n.rootBoundary, i = p === void 0 ? vh : p, d = n.elementContext, u = d === void 0 ? Br : d, l = n.altBoundary, _ = l === void 0 ? !1 : l, g = n.padding, h = g === void 0 ? 0 : g, v = wh(typeof h != "number" ? h : $h(h, wi)), m = u === Br ? Ew : Br, k = e.rects.popper, b = e.elements[_ ? m : u], C = Vw(zn(b) ? b : b.contextElement || On(e.elements.popper), f, i, a), w = Tr(e.elements.reference), A = yh({
    reference: w,
    element: k,
    strategy: "absolute",
    placement: s
  }), y = sl(Object.assign({}, k, A)), x = u === Br ? y : w, O = {
    top: C.top - x.top + v.top,
    bottom: x.bottom - C.bottom + v.bottom,
    left: C.left - x.left + v.left,
    right: x.right - C.right + v.right
  }, W = e.modifiersData.offset;
  if (u === Br && W) {
    var j = W[s];
    Object.keys(O).forEach(function(T) {
      var M = [mt, vt].indexOf(T) >= 0 ? 1 : -1, E = [Ue, vt].indexOf(T) >= 0 ? "y" : "x";
      O[T] += j[E] * M;
    });
  }
  return O;
}
var gu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Yw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? gu : s;
  return function(c, f, p) {
    p === void 0 && (p = o);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gu, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, l = {
      state: i,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(i.options) : v;
        g(), i.options = Object.assign({}, o, i.options, m), i.scrollParents = {
          reference: zn(c) ? go(c) : c.contextElement ? go(c.contextElement) : [],
          popper: go(f)
        };
        var k = Ww(jw([].concat(r, i.options.modifiers)));
        return i.orderedModifiers = k.filter(function(b) {
          return b.enabled;
        }), _(), l.update();
      },
      forceUpdate: function() {
        if (!u) {
          var v = i.elements, m = v.reference, k = v.popper;
          if (!!yu(m, k)) {
            i.rects = {
              reference: $w(m, bi(k), i.options.strategy === "fixed"),
              popper: cc(k)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(O) {
              return i.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var b = 0; b < i.orderedModifiers.length; b++) {
              if (i.reset === !0) {
                i.reset = !1, b = -1;
                continue;
              }
              var C = i.orderedModifiers[b], w = C.fn, A = C.options, y = A === void 0 ? {} : A, x = C.name;
              typeof w == "function" && (i = w({
                state: i,
                options: y,
                name: x,
                instance: l
              }) || i);
            }
          }
        }
      },
      update: Bw(function() {
        return new Promise(function(h) {
          l.forceUpdate(), h(i);
        });
      }),
      destroy: function() {
        g(), u = !0;
      }
    };
    if (!yu(c, f))
      return l;
    l.setOptions(p).then(function(h) {
      !u && p.onFirstUpdate && p.onFirstUpdate(h);
    });
    function _() {
      i.orderedModifiers.forEach(function(h) {
        var v = h.name, m = h.options, k = m === void 0 ? {} : m, b = h.effect;
        if (typeof b == "function") {
          var C = b({
            state: i,
            name: v,
            instance: l,
            options: k
          }), w = function() {
          };
          d.push(C || w);
        }
      });
    }
    function g() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return l;
  };
}
var Ci = {
  passive: !0
};
function qw(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, f = et(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(i) {
    i.addEventListener("scroll", n.update, Ci);
  }), c && f.addEventListener("resize", n.update, Ci), function() {
    o && p.forEach(function(i) {
      i.removeEventListener("scroll", n.update, Ci);
    }), c && f.removeEventListener("resize", n.update, Ci);
  };
}
const Gw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qw,
  data: {}
};
function Xw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Kw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xw,
  data: {}
};
var Zw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jw(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return {
    x: Mr(t * s) / s || 0,
    y: Mr(n * s) / s || 0
  };
}
function bu(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, a = e.offsets, c = e.position, f = e.gpuAcceleration, p = e.adaptive, i = e.roundOffsets, d = e.isFixed, u = a.x, l = u === void 0 ? 0 : u, _ = a.y, g = _ === void 0 ? 0 : _, h = typeof i == "function" ? i({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  l = h.x, g = h.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), k = Ie, b = Ue, C = window;
  if (p) {
    var w = bi(n), A = "clientHeight", y = "clientWidth";
    if (w === et(n) && (w = On(n), Xt(w).position !== "static" && c === "absolute" && (A = "scrollHeight", y = "scrollWidth")), w = w, s === Ue || (s === Ie || s === mt) && o === Yo) {
      b = vt;
      var x = d && w === C && C.visualViewport ? C.visualViewport.height : w[A];
      g -= x - r.height, g *= f ? 1 : -1;
    }
    if (s === Ie || (s === Ue || s === vt) && o === Yo) {
      k = mt;
      var O = d && w === C && C.visualViewport ? C.visualViewport.width : w[y];
      l -= O - r.width, l *= f ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: c
  }, p && Zw), j = i === !0 ? Jw({
    x: l,
    y: g
  }) : {
    x: l,
    y: g
  };
  if (l = j.x, g = j.y, f) {
    var T;
    return Object.assign({}, W, (T = {}, T[b] = m ? "0" : "", T[k] = v ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + g + "px)" : "translate3d(" + l + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, W, (t = {}, t[b] = m ? g + "px" : "", t[k] = v ? l + "px" : "", t.transform = "", t));
}
function Qw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, c = n.roundOffsets, f = c === void 0 ? !0 : c, p = {
    placement: Tt(t.placement),
    variation: Lr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bu(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bu(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const e$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qw,
  data: {}
};
function t$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Xe(o) || !Rt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function n$(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !Xe(s) || !Rt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const r$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: t$,
  effect: n$,
  requires: ["computeStyles"]
};
var o$ = [Gw, Kw, e$, r$], i$ = /* @__PURE__ */ Yw({
  defaultModifiers: o$
});
function yo(e, t, n) {
  return jn(e, Hs(t, n));
}
function s$(e, t, n) {
  var r = yo(e, t, n);
  return r > n ? n : r;
}
var a$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, wh(typeof t != "number" ? t : $h(t, wi));
};
function l$(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Tt(n.placement), f = uc(c), p = [Ie, mt].indexOf(c) >= 0, i = p ? "height" : "width";
  if (!(!o || !a)) {
    var d = a$(s.padding, n), u = cc(o), l = f === "y" ? Ue : Ie, _ = f === "y" ? vt : mt, g = n.rects.reference[i] + n.rects.reference[f] - a[f] - n.rects.popper[i], h = a[f] - n.rects.reference[f], v = bi(o), m = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - h / 2, b = d[l], C = m - u[i] - d[_], w = m / 2 - u[i] / 2 + k, A = yo(b, w, C), y = f;
    n.modifiersData[r] = (t = {}, t[y] = A, t.centerOffset = A - w, t);
  }
}
function c$(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !gh(t.elements.popper, s) || (t.elements.arrow = s));
}
const f$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: l$,
  effect: c$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function u$(e, t, n) {
  var r = Tt(e), s = [Ie, Ue].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * s, [Ie, mt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function _$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, a = mh.reduce(function(i, d) {
    return i[d] = u$(d, t.rects, o), i;
  }, {}), c = a[t.placement], f = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = a;
}
const p$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _$
};
function d$(e) {
  return e === "x" ? "y" : "x";
}
function h$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, f = n.boundary, p = n.rootBoundary, i = n.altBoundary, d = n.padding, u = n.tether, l = u === void 0 ? !0 : u, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, h = _c(t, {
    boundary: f,
    rootBoundary: p,
    padding: d,
    altBoundary: i
  }), v = Tt(t.placement), m = Lr(t.placement), k = !m, b = uc(v), C = d$(b), w = t.modifiersData.popperOffsets, A = t.rects.reference, y = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (o) {
      var T, M = b === "y" ? Ue : Ie, E = b === "y" ? vt : mt, D = b === "y" ? "height" : "width", S = w[b], N = S + h[M], L = S - h[E], B = l ? -y[D] / 2 : 0, F = m === Dr ? A[D] : y[D], I = m === Dr ? -y[D] : -A[D], z = t.elements.arrow, X = l && z ? cc(z) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bh(), V = H[M], K = H[E], Y = yo(0, A[D], X[D]), q = k ? A[D] / 2 - B - Y - V - O.mainAxis : F - Y - V - O.mainAxis, te = k ? -A[D] / 2 + B + Y + K + O.mainAxis : I + Y + K + O.mainAxis, re = t.elements.arrow && bi(t.elements.arrow), _e = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, Te = (T = W == null ? void 0 : W[b]) != null ? T : 0, ee = S + q - Te - _e, gt = S + te - Te, Ee = yo(l ? Hs(N, ee) : N, S, l ? jn(L, gt) : L);
      w[b] = Ee, j[b] = Ee - S;
    }
    if (c) {
      var Ce, yt = b === "x" ? Ue : Ie, ze = b === "x" ? vt : mt, Q = w[C], ie = C === "y" ? "height" : "width", Oe = Q + h[yt], tt = Q - h[ze], Se = [Ue, Ie].indexOf(v) !== -1, nt = (Ce = W == null ? void 0 : W[C]) != null ? Ce : 0, rt = Se ? Oe : Q - A[ie] - y[ie] - nt + O.altAxis, ot = Se ? Q + A[ie] + y[ie] - nt - O.altAxis : tt, it = l && Se ? s$(rt, Q, ot) : yo(l ? rt : Oe, Q, l ? ot : tt);
      w[C] = it, j[C] = it - Q;
    }
    t.modifiersData[r] = j;
  }
}
const v$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: h$,
  requiresIfExists: ["offset"]
};
var m$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ki(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return m$[t];
  });
}
var g$ = {
  start: "end",
  end: "start"
};
function wu(e) {
  return e.replace(/start|end/g, function(t) {
    return g$[t];
  });
}
function y$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, a = n.padding, c = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? mh : f, i = Lr(r), d = i ? c ? vu : vu.filter(function(_) {
    return Lr(_) === i;
  }) : wi, u = d.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  u.length === 0 && (u = d);
  var l = u.reduce(function(_, g) {
    return _[g] = _c(e, {
      placement: g,
      boundary: s,
      rootBoundary: o,
      padding: a
    })[Tt(g)], _;
  }, {});
  return Object.keys(l).sort(function(_, g) {
    return l[_] - l[g];
  });
}
function b$(e) {
  if (Tt(e) === fc)
    return [];
  var t = Ki(e);
  return [wu(e), t, wu(t)];
}
function w$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, f = n.fallbackPlacements, p = n.padding, i = n.boundary, d = n.rootBoundary, u = n.altBoundary, l = n.flipVariations, _ = l === void 0 ? !0 : l, g = n.allowedAutoPlacements, h = t.options.placement, v = Tt(h), m = v === h, k = f || (m || !_ ? [Ki(h)] : b$(h)), b = [h].concat(k).reduce(function(X, H) {
      return X.concat(Tt(H) === fc ? y$(t, {
        placement: H,
        boundary: i,
        rootBoundary: d,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : H);
    }, []), C = t.rects.reference, w = t.rects.popper, A = /* @__PURE__ */ new Map(), y = !0, x = b[0], O = 0; O < b.length; O++) {
      var W = b[O], j = Tt(W), T = Lr(W) === Dr, M = [Ue, vt].indexOf(j) >= 0, E = M ? "width" : "height", D = _c(t, {
        placement: W,
        boundary: i,
        rootBoundary: d,
        altBoundary: u,
        padding: p
      }), S = M ? T ? mt : Ie : T ? vt : Ue;
      C[E] > w[E] && (S = Ki(S));
      var N = Ki(S), L = [];
      if (o && L.push(D[j] <= 0), c && L.push(D[S] <= 0, D[N] <= 0), L.every(function(X) {
        return X;
      })) {
        x = W, y = !1;
        break;
      }
      A.set(W, L);
    }
    if (y)
      for (var B = _ ? 3 : 1, F = function(H) {
        var V = b.find(function(K) {
          var Y = A.get(K);
          if (Y)
            return Y.slice(0, H).every(function(q) {
              return q;
            });
        });
        if (V)
          return x = V, "break";
      }, I = B; I > 0; I--) {
        var z = F(I);
        if (z === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const $$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: w$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
var fr, ur, _r, Ln, lt, na, pr, ra, kh;
class Ot extends ft {
  constructor() {
    super(...arguments);
    R(this, ra);
    R(this, fr, !1);
    R(this, ur, void 0);
    R(this, _r, 0);
    R(this, Ln, void 0);
    R(this, lt, void 0);
    R(this, na, void 0);
    P(this, "hideLater", () => {
      $(this, pr).call(this), U(this, _r, window.setTimeout(this.hide.bind(this), 100));
    });
    R(this, pr, () => {
      clearTimeout($(this, _r)), U(this, _r, 0);
    });
  }
  get isShown() {
    var n;
    return (n = $(this, Ln)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return $(this, Ln) || this._ensureTooltip();
  }
  get popper() {
    return $(this, lt) ? $(this, lt) : this._createPopper();
  }
  get trigger() {
    return $(this, na) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !$(this, fr) && this.isHover && ne(this, ra, kh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), this._createPopper().update(), !0;
  }
  hide() {
    var n, r;
    return (n = $(this, lt)) == null || n.destroy(), U(this, lt, void 0), this.element.classList.remove(this.elementShowClass), (r = $(this, Ln)) == null || r.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    $(this, fr) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", $(this, pr)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return typeof n == "number" ? n : 4;
  }
  _createArrow() {
    const n = document.createElement("div");
    return n.classList.add("arrow", "tooltip-arrow"), n.style.setProperty("--arrow-size", `${this._getArrowSize()}px`), n;
  }
  _ensureTooltip() {
    var s, o;
    const n = this.constructor.TOOLTIP_CLASS;
    let r;
    if (this.isDynamic) {
      r = document.createElement("div");
      const a = this.options.className ? this.options.className.split(" ") : [];
      let c = [n, this.options.type || ""];
      c = c.concat(a), r.classList.add(...c), r[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
    } else if (this.element) {
      const a = (s = this.element.getAttribute("href")) != null ? s : this.element.dataset.target;
      if (a != null && a.startsWith("#") && (r = document.querySelector(a)), !r) {
        const c = this.element.nextElementSibling;
        c != null && c.classList.contains(n) ? r = c : r = (o = this.element.parentNode) == null ? void 0 : o.querySelector(`.${n}`);
      }
    }
    if (this.options.arrow && (r == null || r.prepend(this._createArrow())), !r)
      throw new Error("Tooltip: Cannot find tooltip element");
    return document.body.appendChild(r), U(this, Ln, r), r;
  }
  _getPopperOptions() {
    const n = this._getArrowSize();
    return {
      modifiers: [
        v$,
        $$,
        { ...f$, options: {
          padding: n,
          element: ".arrow"
        } },
        {
          ...p$,
          options: {
            offset: [0, n + 3]
          }
        },
        {
          name: "tooltip",
          enabled: !0,
          phase: "beforeWrite",
          fn: ({ state: r }) => {
            var o, a;
            const s = ((o = r.placement) == null ? void 0 : o.split("-").shift()) || "";
            (a = this.tooltip.querySelector(".arrow")) == null || a.setAttribute("class", `arrow arrow-${s}`), this.element.setAttribute("data-tooltip-placement", s);
          }
        }
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const n = this._getPopperOptions();
    return $(this, lt) ? $(this, lt).setOptions(n) : U(this, lt, i$(this._getPopperElement(), this.tooltip, n)), $(this, lt);
  }
  _getPopperElement() {
    return $(this, ur) || U(this, ur, {
      getBoundingClientRect: () => {
        const { element: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: r, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: r,
            bottom: s,
            left: r
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), $(this, ur);
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: r } = n || {}, s = this.getAll().entries(), o = new Set(r || []);
    for (const [a, c] of s)
      o.has(a) || c.hide();
  }
}
fr = new WeakMap(), ur = new WeakMap(), _r = new WeakMap(), Ln = new WeakMap(), lt = new WeakMap(), na = new WeakMap(), pr = new WeakMap(), ra = new WeakSet(), kh = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", $(this, pr)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), U(this, fr, !0);
}, P(Ot, "NAME", "tooltip"), P(Ot, "TOOLTIP_CLASS", "tooltip"), P(Ot, "CLASS_SHOW", "show"), P(Ot, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), P(Ot, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ot.MENU_SELECTOR);
  if (n) {
    const r = Ot.ensure(n);
    r.options.trigger === "click" && r.toggle();
  } else
    Ot.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ot.MENU_SELECTOR) : null;
  if (!n)
    return;
  const r = Ot.ensure(n);
  r.isHover && r.show();
});
var pc, be, xh, bo, $u, Sh = {}, Eh = [], k$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ch(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ws(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? pc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Zi(e, a, r, s, null);
}
function Zi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++xh : s };
  return s == null && be.vnode != null && be.vnode(o), o;
}
function dc(e) {
  return e.children;
}
function wo(e, t) {
  this.props = e, this.context = t;
}
function qo(e, t) {
  if (t == null)
    return e.__ ? qo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? qo(e) : null;
}
function Oh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Oh(e);
  }
}
function ku(e) {
  (!e.__d && (e.__d = !0) && bo.push(e) && !Bs.__r++ || $u !== be.debounceRendering) && (($u = be.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var e; Bs.__r = bo.length; )
    e = bo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), bo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = mn({}, o)).__v = o.__v + 1, Dh(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qo(o) : a, o.__h), S$(r, o), o.__e != a && Oh(o)));
    });
}
function Ah(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Eh, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Zi(null, l, null, null, l) : Array.isArray(l) ? Zi(dc, { children: l }, null, null, null) : l.__b > 0 ? Zi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Dh(e, l, u = u || Sh, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Mh(l, f, e) : f = Th(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = qo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Ph(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Lh(h[i], h[++i], h[++i]);
}
function Mh(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Mh(r, t, n) : Th(n, r, r, s, r.__e, t));
  return t;
}
function Th(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function x$(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || js(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || js(e, o, t[o], n[o], r);
}
function xu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || k$.test(t) ? n : n + "px";
}
function js(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || xu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || xu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Eu : Su, o) : e.removeEventListener(t, o ? Eu : Su, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Su(e) {
  this.l[e.type + !1](be.event ? be.event(e) : e);
}
function Eu(e) {
  this.l[e.type + !0](be.event ? be.event(e) : e);
}
function Dh(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = be.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new wo(h, m), i.constructor = y, i.render = C$), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = mn({}, i.__s)), mn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = be.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = mn(mn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === dc && p.key == null ? p.props.children : p, Ah(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = E$(n.__e, t, n, r, s, o, a, f);
    (p = be.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), be.__e(x, t, n);
  }
}
function S$(e, t) {
  be.__c && be.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      be.__e(r, n.__v);
    }
  });
}
function E$(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && pc.call(e.childNodes), p = (d = n.props || Sh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (x$(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Ah(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && qo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Ch(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && js(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && js(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Lh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    be.__e(r, n);
  }
}
function Ph(e, t, n) {
  var r, s;
  if (be.unmount && be.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Lh(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        be.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Ph(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ch(e.__e), e.__ = e.__e = e.__d = void 0;
}
function C$(e, t, n) {
  return this.constructor(e, n);
}
pc = Eh.slice, be = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, xh = 0, wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mn({}, this.state), typeof e == "function" && (e = e(mn({}, n), this.props)), e && mn(n, e), e != null && this.__v && (t && this._sb.push(t), ku(this));
}, wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ku(this));
}, wo.prototype.render = dc, bo = [], Bs.__r = 0;
function O$({
  type: e,
  key: t,
  style: n,
  bounding: r,
  offsetX: s = 0,
  offsetY: o = 0,
  component: a,
  data: c,
  hidden: f,
  props: p,
  children: i,
  onRender: d,
  ...u
}) {
  if (f)
    return null;
  let l;
  d ? l = d(e, c) : a ? l = /* @__PURE__ */ Ws(a, {
    ...p
  }) : l = c;
  const { left: _, top: g, width: h, height: v } = r;
  return /* @__PURE__ */ Ws("div", {
    style: { width: h, height: v, left: _ + s, top: g + o, ...n },
    ...u
  }, l, i);
}
function A$(e, t, n = 0, r = 0) {
  const s = e.left + n, o = e.top + r;
  return !(s > t.left + t.width || o > t.top + t.height || s + e.width < t.left || o + e.height < t.top);
}
class M$ extends wo {
  render() {
    const { width: t, height: n, cells: r, left: s, top: o, visibleBounding: a, onRenderCell: c, style: f, children: p, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, l = a ? r.filter((_) => A$(_.bounding, a, i, d)) : r;
    return /* @__PURE__ */ Ws("div", {
      style: { width: t, height: n, left: s, top: o, ...f },
      ...u
    }, l.map((_) => /* @__PURE__ */ Ws(O$, {
      offsetX: i,
      offsetY: d,
      ..._
    })), p);
  }
}
class Cu extends Ke {
}
P(Cu, "NAME", "virtualgrid"), P(Cu, "Component", M$);
var hc, we, Nh, Rh, $o, Ou, Hh = {}, Wh = [], T$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function gn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Z(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? hc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ji(e, a, r, s, null);
}
function Ji(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++Nh : s };
  return s == null && we.vnode != null && we.vnode(o), o;
}
function D$() {
  return { current: null };
}
function vc(e) {
  return e.children;
}
function ko(e, t) {
  this.props = e, this.context = t;
}
function Go(e, t) {
  if (t == null)
    return e.__ ? Go(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Go(e) : null;
}
function jh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return jh(e);
  }
}
function Au(e) {
  (!e.__d && (e.__d = !0) && $o.push(e) && !Us.__r++ || Ou !== we.debounceRendering) && ((Ou = we.debounceRendering) || setTimeout)(Us);
}
function Us() {
  for (var e; Us.__r = $o.length; )
    e = $o.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), $o = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = gn({}, o)).__v = o.__v + 1, zh(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Go(o) : a, o.__h), P$(r, o), o.__e != a && jh(o)));
    });
}
function Uh(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Wh, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Ji(null, l, null, null, l) : Array.isArray(l) ? Ji(vc, { children: l }, null, null, null) : l.__b > 0 ? Ji(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      zh(e, l, u = u || Hh, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Ih(l, f, e) : f = Fh(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Go(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && Yh(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      Vh(h[i], h[++i], h[++i]);
}
function Ih(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Ih(r, t, n) : Fh(n, r, r, s, r.__e, t));
  return t;
}
function Fh(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function L$(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Is(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Is(e, o, t[o], n[o], r);
}
function Mu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || T$.test(t) ? n : n + "px";
}
function Is(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Mu(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Mu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Du : Tu, o) : e.removeEventListener(t, o ? Du : Tu, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Tu(e) {
  this.l[e.type + !1](we.event ? we.event(e) : e);
}
function Du(e) {
  this.l[e.type + !0](we.event ? we.event(e) : e);
}
function zh(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = we.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new ko(h, m), i.constructor = y, i.render = R$), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = gn({}, i.__s)), gn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = we.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = gn(gn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === vc && p.key == null ? p.props.children : p, Uh(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N$(n.__e, t, n, r, s, o, a, f);
    (p = we.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), we.__e(x, t, n);
  }
}
function P$(e, t) {
  we.__c && we.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      we.__e(r, n.__v);
    }
  });
}
function N$(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && hc.call(e.childNodes), p = (d = n.props || Hh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (L$(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Uh(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Go(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Bh(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && Is(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && Is(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Vh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    we.__e(r, n);
  }
}
function Yh(e, t, n) {
  var r, s;
  if (we.unmount && we.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Vh(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        we.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Yh(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Bh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function R$(e, t, n) {
  return this.constructor(e, n);
}
hc = Wh.slice, we = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nh = 0, Rh = function(e) {
  return e != null && e.constructor === void 0;
}, ko.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gn({}, this.state), typeof e == "function" && (e = e(gn({}, n), this.props)), e && gn(n, e), e != null && this.__v && (t && this._sb.push(t), Au(this));
}, ko.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Au(this));
}, ko.prototype.render = vc, $o = [], Us.__r = 0;
let H$ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var mc, $e, qh, xo, Lu, Gh = {}, Xh = [], W$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function yn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Kh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pu(e, t, n) {
  var r, s, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? s = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? mc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Qi(e, a, r, s, null);
}
function Qi(e, t, n, r, s) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s == null ? ++qh : s };
  return s == null && $e.vnode != null && $e.vnode(o), o;
}
function gc(e) {
  return e.children;
}
function So(e, t) {
  this.props = e, this.context = t;
}
function Xo(e, t) {
  if (t == null)
    return e.__ ? Xo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xo(e) : null;
}
function Zh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Zh(e);
  }
}
function Nu(e) {
  (!e.__d && (e.__d = !0) && xo.push(e) && !Fs.__r++ || Lu !== $e.debounceRendering) && ((Lu = $e.debounceRendering) || setTimeout)(Fs);
}
function Fs() {
  for (var e; Fs.__r = xo.length; )
    e = xo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xo = [], e.some(function(t) {
      var n, r, s, o, a, c;
      t.__d && (a = (o = (n = t).__v).__e, (c = n.__P) && (r = [], (s = yn({}, o)).__v = o.__v + 1, tv(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xo(o) : a, o.__h), j$(r, o), o.__e != a && Zh(o)));
    });
}
function Jh(e, t, n, r, s, o, a, c, f, p) {
  var i, d, u, l, _, g, h, v = r && r.__k || Xh, m = v.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((l = n.__k[i] = (l = t[i]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Qi(null, l, null, null, l) : Array.isArray(l) ? Qi(gc, { children: l }, null, null, null) : l.__b > 0 ? Qi(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = v[i]) === null || u && l.key == u.key && l.type === u.type)
        v[i] = void 0;
      else
        for (d = 0; d < m; d++) {
          if ((u = v[d]) && l.key == u.key && l.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      tv(e, l, u = u || Gh, s, o, a, c, f, p), _ = l.__e, (d = l.ref) && u.ref != d && (h || (h = []), u.ref && h.push(u.ref, null, l), h.push(d, l.__c || _, l)), _ != null ? (g == null && (g = _), typeof l.type == "function" && l.__k === u.__k ? l.__d = f = Qh(l, f, e) : f = ev(e, l, u, v, _, f), typeof n.type == "function" && (n.__d = f)) : f && u.__e == f && f.parentNode != e && (f = Xo(u));
    }
  for (n.__e = g, i = m; i--; )
    v[i] != null && rv(v[i], v[i]);
  if (h)
    for (i = 0; i < h.length; i++)
      nv(h[i], h[++i], h[++i]);
}
function Qh(e, t, n) {
  for (var r, s = e.__k, o = 0; s && o < s.length; o++)
    (r = s[o]) && (r.__ = e, t = typeof r.type == "function" ? Qh(r, t, n) : ev(n, r, r, s, r.__e, t));
  return t;
}
function ev(e, t, n, r, s, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < r.length; f += 2)
          if (c == s)
            break e;
        e.insertBefore(s, o), a = o;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function B$(e, t, n, r, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || zs(e, o, null, n[o], r);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || zs(e, o, t[o], n[o], r);
}
function Ru(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || W$.test(t) ? n : n + "px";
}
function zs(e, t, n, r, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ru(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ru(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Wu : Hu, o) : e.removeEventListener(t, o ? Wu : Hu, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Hu(e) {
  this.l[e.type + !1]($e.event ? $e.event(e) : e);
}
function Wu(e) {
  this.l[e.type + !0]($e.event ? $e.event(e) : e);
}
function tv(e, t, n, r, s, o, a, c, f) {
  var p, i, d, u, l, _, g, h, v, m, k, b, C, w, A, y = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (p = $e.__b) && p(t);
  try {
    e:
      if (typeof y == "function") {
        if (h = t.props, v = (p = y.contextType) && r[p.__c], m = p ? v ? v.props.value : p.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in y && y.prototype.render ? t.__c = i = new y(h, m) : (t.__c = i = new So(h, m), i.constructor = y, i.render = I$), v && v.sub(i), i.props = h, i.state || (i.state = {}), i.context = m, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), y.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = yn({}, i.__s)), yn(i.__s, y.getDerivedStateFromProps(h, i.__s))), u = i.props, l = i.state, d)
          y.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && h !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, m), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, m) === !1 || t.__v === n.__v) {
            for (i.props = h, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), k = 0; k < i._sb.length; k++)
              i.__h.push(i._sb[k]);
            i._sb = [], i.__h.length && a.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, m), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, l, _);
          });
        }
        if (i.context = m, i.props = h, i.__v = t, i.__P = e, b = $e.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (i.state = i.__s, i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), w = 0; w < i._sb.length; w++)
            i.__h.push(i._sb[w]);
          i._sb = [];
        } else
          do
            i.__d = !1, b && b(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++C < 25);
        i.state = i.__s, i.getChildContext != null && (r = yn(yn({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (_ = i.getSnapshotBeforeUpdate(u, l)), A = p != null && p.type === gc && p.key == null ? p.props.children : p, Jh(e, Array.isArray(A) ? A : [A], t, n, r, s, o, a, c, f), i.base = t.__e, t.__h = null, i.__h.length && a.push(i), g && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = U$(n.__e, t, n, r, s, o, a, f);
    (p = $e.diffed) && p(t);
  } catch (x) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), $e.__e(x, t, n);
  }
}
function j$(e, t) {
  $e.__c && $e.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      $e.__e(r, n.__v);
    }
  });
}
function U$(e, t, n, r, s, o, a, c) {
  var f, p, i, d = n.props, u = t.props, l = t.type, _ = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; _ < o.length; _++)
      if ((f = o[_]) && "setAttribute" in f == !!l && (l ? f.localName === l : f.nodeType === 3)) {
        e = f, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, c = !1;
  }
  if (l === null)
    d === u || c && e.data === u || (e.data = u);
  else {
    if (o = o && mc.call(e.childNodes), p = (d = n.props || Gh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (B$(e, u, d, s, c), i)
      t.__k = [];
    else if (_ = t.props.children, Jh(e, Array.isArray(_) ? _ : [_], t, n, r, s && l !== "foreignObject", o, a, o ? o[0] : n.__k && Xo(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Kh(o[_]);
    c || ("value" in u && (_ = u.value) !== void 0 && (_ !== e.value || l === "progress" && !_ || l === "option" && _ !== d.value) && zs(e, "value", _, d.value, !1), "checked" in u && (_ = u.checked) !== void 0 && _ !== e.checked && zs(e, "checked", _, d.checked, !1));
  }
  return e;
}
function nv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    $e.__e(r, n);
  }
}
function rv(e, t, n) {
  var r, s;
  if ($e.unmount && $e.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || nv(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        $e.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (s = 0; s < r.length; s++)
      r[s] && rv(r[s], t, n || typeof e.type != "function");
  n || e.__e == null || Kh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function I$(e, t, n) {
  return this.constructor(e, n);
}
mc = Xh.slice, $e = { __e: function(e, t, n, r) {
  for (var s, o, a; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, qh = 0, So.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = yn({}, this.state), typeof e == "function" && (e = e(yn({}, n), this.props)), e && yn(n, e), e != null && this.__v && (t && this._sb.push(t), Nu(this));
}, So.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Nu(this));
}, So.prototype.render = gc, xo = [], Fs.__r = 0;
var Pn, Nn;
class Bu extends So {
  constructor(n) {
    var r;
    super(n);
    R(this, Pn, 0);
    R(this, Nn, null);
    P(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, s = n.target;
      if (!(!s || !r) && (typeof r == "string" && s.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    P(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && ($(this, Pn) && cancelAnimationFrame($(this, Pn)), U(this, Pn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + s * this.props.scrollSize / this.props.clientSize), U(this, Pn, 0);
      })), n.preventDefault());
    });
    P(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    P(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    P(this, "_handleClick", (n) => {
      const r = n.currentTarget;
      if (!r)
        return;
      const s = r.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: c } = this.props, f = (o === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(f * c / a), n.preventDefault();
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
    const { clientSize: n, scrollSize: r, size: s = 12, minBarSize: o = 3 * s } = this.props;
    return Math.max(Math.round(n * n / r), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (U(this, Nn, typeof n == "string" ? document : n.current), $(this, Nn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), $(this, Nn) && $(this, Nn).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: r } = this.props;
    r && r(n, (s = this.props.type) != null ? s : "vert");
  }
  render() {
    const {
      clientSize: n,
      type: r,
      size: s = 12,
      className: o,
      style: a,
      left: c,
      top: f,
      bottom: p,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: l } = this.state, _ = {
      left: c,
      top: f,
      bottom: p,
      right: i,
      ...a
    }, g = {};
    return r === "horz" ? (_.height = s, _.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (_.width = s, _.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ Pu("div", {
      className: G("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": l
      }),
      style: _,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Pu("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Pn = new WeakMap(), Nn = new WeakMap();
function ju(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function ov({ col: e, className: t, height: n, row: r, onRenderCell: s, style: o, outerStyle: a, children: c, outerClass: f, ...p }) {
  var y, x;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...a
  }, { align: d, border: u } = e.setting, l = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...o
  }, _ = ["dtable-cell", f, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], g = ["dtable-cell-content", t], h = [(x = c != null ? c : (y = r.data) == null ? void 0 : y[e.name]) != null ? x : ""], v = s ? s(h, { row: r, col: e }, Z) : h, m = [], k = [], b = {}, C = {};
  let w = "div";
  v == null || v.forEach((O) => {
    var W;
    if (typeof O == "object" && O && !Rh(O) && ("html" in O || "className" in O || "style" in O || "attrs" in O || "children" in O || "tagName" in O)) {
      const j = O.outer ? m : k;
      O.html ? j.push(/* @__PURE__ */ Z("div", {
        className: G("dtable-cell-html", O.className),
        style: O.style,
        dangerouslySetInnerHTML: { __html: O.html },
        ...(W = O.attrs) != null ? W : {}
      })) : (O.style && Object.assign(O.outer ? i : l, O.style), O.className && (O.outer ? _ : g).push(O.className), O.children && j.push(O.children), O.attrs && Object.assign(O.outer ? b : C, O.attrs)), O.tagName && !O.outer && (w = O.tagName);
    } else
      k.push(O);
  });
  const A = w;
  return /* @__PURE__ */ Z("div", {
    className: G(_),
    style: i,
    "data-col": e.name,
    ...p,
    ...b
  }, k.length > 0 && /* @__PURE__ */ Z(A, {
    className: G(g),
    style: l,
    ...C
  }, k), m);
}
function ja({ row: e, className: t, top: n = 0, left: r = 0, width: s, height: o, cols: a, CellComponent: c = ov, onRenderCell: f }) {
  return /* @__PURE__ */ Z("div", {
    className: G("dtable-cells", t),
    style: { top: n, left: r, width: s, height: o }
  }, a.map((p) => p.visible ? /* @__PURE__ */ Z(c, {
    key: p.name,
    col: p,
    row: e,
    onRenderCell: f
  }) : null));
}
function iv({
  row: e,
  className: t,
  top: n,
  height: r,
  fixedLeftCols: s,
  fixedRightCols: o,
  scrollCols: a,
  fixedLeftWidth: c,
  scrollWidth: f,
  scrollColsWidth: p,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: u = ov,
  onRenderCell: l,
  style: _,
  ...g
}) {
  let h = null;
  s != null && s.length && (h = /* @__PURE__ */ Z(ja, {
    className: "dtable-fixed-left",
    cols: s,
    width: c,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ Z(ja, {
    className: "dtable-flexable",
    cols: a,
    left: c - d,
    width: Math.max(f, p),
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  let m = null;
  o != null && o.length && (m = /* @__PURE__ */ Z(ja, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + f,
    width: i,
    row: e,
    CellComponent: u,
    onRenderCell: l
  }));
  const k = { top: n, height: r, lineHeight: `${r - 2}px`, ..._ };
  return /* @__PURE__ */ Z("div", {
    className: G("dtable-row", t),
    style: k,
    "data-id": e.id,
    ...g
  }, h, v, m);
}
function F$({ height: e, onRenderRow: t, ...n }) {
  const r = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: r }, Z);
    s && Object.assign(r, s);
  }
  return /* @__PURE__ */ Z("div", {
    className: "dtable-header",
    style: { height: e }
  }, /* @__PURE__ */ Z(iv, {
    ...r
  }));
}
function z$({
  className: e,
  style: t,
  top: n,
  rows: r,
  height: s,
  rowHeight: o,
  scrollTop: a,
  onRenderRow: c,
  ...f
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ Z("div", {
    className: G("dtable-rows", e),
    style: t
  }, r.map((p) => {
    const i = {
      className: `dtable-row-${p.index % 2 ? "odd" : "even"}`,
      row: p,
      top: p.top - a,
      height: o,
      ...f
    }, d = c == null ? void 0 : c({ props: i, row: p }, Z);
    return d && Object.assign(i, d), /* @__PURE__ */ Z(iv, {
      ...i
    });
  }));
}
const Vs = /* @__PURE__ */ new Map(), Ys = [];
function sv(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Vs.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Vs.set(n, e), (t == null ? void 0 : t.buildIn) && !Ys.includes(n) && Ys.push(n);
}
function Nr(e, t) {
  sv(e, t);
  const n = (r) => {
    if (!r)
      return e;
    const { defaultOptions: s, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...s, ...r }
    };
  };
  return n.plugin = e, n;
}
function av(e) {
  return Vs.delete(e);
}
function V$(e) {
  if (typeof e == "string") {
    const t = Vs.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function lv(e, t, n) {
  return t.forEach((r) => {
    var o;
    if (!r)
      return;
    const s = V$(r);
    !s || n.has(s.name) || ((o = s.plugins) != null && o.length && lv(e, s.plugins, n), e.push(s), n.add(s.name));
  }), e;
}
function Y$(e = [], t = !0) {
  return t && Ys.length && e.unshift(...Ys), e != null && e.length ? lv([], e, /* @__PURE__ */ new Set()) : [];
}
function Uu() {
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
var Rn, dr, nn, kt, rn, ke, ct, xt, hr, ci, fi, It, vr, mr, oa, cv, ia, fv, sa, uv, aa, _v, ui, ll, la, ca, _i, pi, fa, ua, _a, pv, pa, dv, da, hv;
class al extends ko {
  constructor(n) {
    var r;
    super(n);
    R(this, oa);
    R(this, ia);
    R(this, sa);
    R(this, aa);
    R(this, ui);
    R(this, _a);
    R(this, pa);
    R(this, da);
    P(this, "ref", D$());
    R(this, Rn, 0);
    R(this, dr, void 0);
    R(this, nn, !1);
    R(this, kt, void 0);
    R(this, rn, void 0);
    R(this, ke, []);
    R(this, ct, void 0);
    R(this, xt, /* @__PURE__ */ new Map());
    R(this, hr, {});
    R(this, ci, void 0);
    R(this, fi, []);
    P(this, "updateLayout", () => {
      $(this, Rn) && cancelAnimationFrame($(this, Rn)), U(this, Rn, requestAnimationFrame(() => {
        U(this, ct, void 0), this.forceUpdate(), U(this, Rn, 0);
      }));
    });
    R(this, It, (n, r) => {
      r = r || n.type;
      const s = $(this, xt).get(r);
      if (!!(s != null && s.length)) {
        for (const o of s)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    R(this, vr, (n) => {
      $(this, It).call(this, n, `window_${n.type}`);
    });
    R(this, mr, (n) => {
      $(this, It).call(this, n, `document_${n.type}`);
    });
    R(this, la, (n, r) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, r);
        s && Object.assign(n.props, s);
      }
      return $(this, ke).forEach((s) => {
        if (s.onRenderRow) {
          const o = s.onRenderRow.call(this, n, r);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    });
    R(this, ca, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), $(this, ke).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    R(this, _i, (n, r, s) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const c = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[c] && (n = a.setting[c].call(this, n, r, s)), this.options[c] && (n = this.options[c].call(this, n, r, s)), $(this, ke).forEach((f) => {
        f[c] && (n = f[c].call(this, n, r, s));
      }), n;
    });
    R(this, pi, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    R(this, fa, (n) => {
      var c, f, p, i, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: s, colName: o, cellElement: a } = r;
      if (s === "HEADER")
        a && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: o, element: a }), $(this, ke).forEach((u) => {
          var l;
          (l = u.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: u } = r, l = this.layout.visibleRows.find((_) => _.id === s);
        if (a) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
            return;
          for (const _ of $(this, ke))
            if (((p = _.onCellClick) == null ? void 0 : p.call(this, n, { colName: o, rowID: s, rowInfo: l, element: a, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
          return;
        for (const _ of $(this, ke))
          if (((d = _.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: l, element: u })) === !0)
            return;
      }
    });
    R(this, ua, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    U(this, dr, (r = n.id) != null ? r : `dtable-${H$(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, U(this, rn, Object.freeze(Y$(n.plugins))), $(this, rn).forEach((s) => {
      var f;
      const { methods: o, data: a, state: c } = s;
      o && Object.entries(o).forEach(([p, i]) => {
        typeof i == "function" && Object.assign(this, { [p]: i.bind(this) });
      }), a && Object.assign($(this, hr), a.call(this)), c && Object.assign(this.state, c.call(this)), (f = s.onCreate) == null || f.call(this, s);
    });
  }
  get options() {
    var n;
    return ((n = $(this, ct)) == null ? void 0 : n.options) || $(this, kt) || Uu();
  }
  get plugins() {
    return $(this, ke);
  }
  get layout() {
    return $(this, ct);
  }
  get id() {
    return $(this, dr);
  }
  get data() {
    return $(this, hr);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    U(this, kt, void 0);
  }
  componentDidMount() {
    if ($(this, nn) ? this.forceUpdate() : ne(this, ui, ll).call(this), $(this, ke).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([s, o]) => {
        o && this.on(s, o);
      }));
    }), this.on("click", $(this, fa)), this.on("keydown", $(this, ua)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), U(this, ci, r);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    $(this, ke).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    $(this, nn) ? ne(this, ui, ll).call(this) : $(this, ke).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = $(this, ci)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of $(this, xt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), $(this, vr)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), $(this, mr)) : n.removeEventListener(s, $(this, It));
    $(this, ke).forEach((s) => {
      var o;
      (o = s.onUnmounted) == null || o.call(this);
    }), $(this, rn).forEach((s) => {
      var o;
      (o = s.onDestory) == null || o.call(this);
    }), U(this, hr, {}), $(this, xt).clear();
  }
  on(n, r, s) {
    var a;
    s && (n = `${s}_${n}`);
    const o = $(this, xt).get(n);
    o ? o.push(r) : ($(this, xt).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), $(this, vr)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), $(this, mr)) : (a = this.ref.current) == null || a.addEventListener(n, $(this, It)));
  }
  off(n, r, s) {
    var c;
    s && (n = `${s}_${n}`);
    const o = $(this, xt).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || ($(this, xt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), $(this, vr)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), $(this, mr)) : (c = this.ref.current) == null || c.removeEventListener(n, $(this, It)));
  }
  emitCustomEvent(n, r) {
    $(this, It).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: s, scrollTop: o, rowsHeightTotal: a, rowsHeight: c, rowHeight: f, colsInfo: { scrollWidth: p, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: l } = n;
    if (d === "up" || d === "down")
      l = o + (d === "down" ? 1 : -1) * Math.floor(c / f) * f;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * p;
    else if (d === "home")
      l = 0;
    else if (d === "end")
      l = a - c;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - p;
    else {
      const { offsetLeft: g, offsetTop: h } = n;
      typeof g == "number" && (u = s + g), typeof h == "number" && (u = o + h);
    }
    const _ = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - p)), u !== s && (_.scrollLeft = u)), typeof l == "number" && (l = Math.max(0, Math.min(l, a - c)), l !== o && (_.scrollTop = l)), Object.keys(_).length ? (this.setState(_, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, _), r == null || r.call(this, !0);
    }), !0) : (r == null || r.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: r, colsList: s } = this.layout;
    return typeof n == "number" ? s[n] : r[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: r, rowsMap: s } = this.layout;
    return typeof n == "number" ? r[n] : s[n];
  }
  getCellValue(n, r) {
    var f, p;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = s.id === "HEADER" ? (f = o.setting.title) != null ? f : o.setting.name : (p = s.data) == null ? void 0 : p[o.name];
    const { cellValueGetter: c } = this.options;
    return c && (a = c.call(this, s, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    if (!$(this, kt))
      return;
    typeof n == "function" && (r = n, n = {});
    const { dirtyType: s, state: o } = n;
    if (s === "layout")
      U(this, ct, void 0);
    else if (s === "options") {
      if (U(this, kt, void 0), !$(this, ct))
        return;
      U(this, ct, void 0);
    }
    this.setState(o != null ? o : (a) => ({ renderCount: a.renderCount + 1 }), r);
  }
  getPointerInfo(n) {
    const r = n.target;
    if (!r || r.closest(".no-cell-event"))
      return;
    const s = r.closest(".dtable-cell");
    if (!s)
      return;
    const o = s.closest(".dtable-row");
    if (!o)
      return;
    const a = s == null ? void 0 : s.getAttribute("data-col"), c = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof a != "string" || typeof c != "string"))
      return {
        cellElement: s,
        rowElement: o,
        colName: a,
        rowID: c,
        target: r
      };
  }
  i18n(n, r, s) {
    var o;
    return (o = di($(this, fi), n, r, s, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var l;
    const n = ne(this, da, hv).call(this), { className: r, rowHover: s, colHover: o, cellHover: a, bordered: c, striped: f, scrollbarHover: p } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": s,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((l = n == null ? void 0 : n.scrollTop) != null ? l : 0) > 0,
      "scrollbar-hover": p
    }], u = [];
    return n && $(this, ke).forEach((_) => {
      var h;
      const g = (h = _.onRender) == null ? void 0 : h.call(this, n);
      !g || (g.style && Object.assign(i, g.style), g.className && d.push(g.className), g.children && u.push(g.children));
    }), /* @__PURE__ */ Z("div", {
      id: $(this, dr),
      className: G(d),
      style: i,
      ref: this.ref,
      tabIndex: -1
    }, n && ne(this, oa, cv).call(this, n), n && ne(this, ia, fv).call(this, n), n && ne(this, sa, uv).call(this, n), n && ne(this, aa, _v).call(this, n));
  }
}
Rn = new WeakMap(), dr = new WeakMap(), nn = new WeakMap(), kt = new WeakMap(), rn = new WeakMap(), ke = new WeakMap(), ct = new WeakMap(), xt = new WeakMap(), hr = new WeakMap(), ci = new WeakMap(), fi = new WeakMap(), It = new WeakMap(), vr = new WeakMap(), mr = new WeakMap(), oa = new WeakSet(), cv = function(n) {
  const { header: r, colsInfo: s, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ Z(F$, {
      scrollLeft: a,
      height: o,
      onRenderCell: $(this, _i),
      onRenderRow: $(this, ca),
      ...s
    });
  const c = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Z(Fa, {
    className: "dtable-header",
    style: { height: o },
    renders: c,
    generateArgs: [n],
    generatorThis: this
  });
}, ia = new WeakSet(), fv = function(n) {
  const { headerHeight: r, rowsHeight: s, visibleRows: o, rowHeight: a, colsInfo: c, scrollLeft: f, scrollTop: p } = n;
  return /* @__PURE__ */ Z(z$, {
    top: r,
    height: s,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: p,
    onRenderCell: $(this, _i),
    onRenderRow: $(this, la),
    ...c
  });
}, sa = new WeakSet(), uv = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const s = typeof r == "function" ? r.call(this, n) : Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ Z(Fa, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: s,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, aa = new WeakSet(), _v = function(n) {
  const r = [], { scrollLeft: s, colsInfo: o, scrollTop: a, rowsHeight: c, rowsHeightTotal: f, footerHeight: p } = n, { scrollColsWidth: i, scrollWidth: d } = o, { scrollbarSize: u = 12, horzScrollbarPos: l } = this.options;
  return i > d && r.push(
    /* @__PURE__ */ Z(Bu, {
      key: "horz",
      type: "horz",
      scrollPos: s,
      scrollSize: i,
      clientSize: d,
      onScroll: $(this, pi),
      left: o.fixedLeftWidth,
      bottom: (l === "inside" ? 0 : -u) + p,
      size: u,
      wheelContainer: this.ref
    })
  ), f > c && r.push(
    /* @__PURE__ */ Z(Bu, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: c,
      onScroll: $(this, pi),
      right: 0,
      size: u,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, ui = new WeakSet(), ll = function() {
  var n;
  U(this, nn, !1), (n = this.options.afterRender) == null || n.call(this), $(this, ke).forEach((r) => {
    var s;
    return (s = r.afterRender) == null ? void 0 : s.call(this);
  });
}, la = new WeakMap(), ca = new WeakMap(), _i = new WeakMap(), pi = new WeakMap(), fa = new WeakMap(), ua = new WeakMap(), _a = new WeakSet(), pv = function() {
  if ($(this, kt))
    return !1;
  const r = { ...Uu(), ...$(this, rn).reduce((s, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(s, a), s;
  }, {}), ...this.props };
  return U(this, kt, r), U(this, ke, $(this, rn).reduce((s, o) => {
    const { when: a, options: c } = o;
    return (!a || a(r)) && (s.push(o), c && Object.assign(r, typeof c == "function" ? c.call(this, r) : c)), s;
  }, [])), U(this, fi, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, pa = new WeakSet(), dv = function() {
  var z, X;
  const { plugins: n } = this;
  let r = $(this, kt);
  const s = {
    flex: /* @__PURE__ */ Z("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ Z("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((H) => {
    var K;
    const V = (K = H.beforeLayout) == null ? void 0 : K.call(this, r);
    V && (r = { ...r, ...V }), Object.assign(s, H.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: c } = r, f = [], p = [], i = [], d = {}, u = [], l = [];
  let _ = 0, g = 0, h = 0;
  r.cols.forEach((H) => {
    var gt, Ee, Ce;
    if (H.hidden)
      return;
    const {
      name: V,
      type: K = "",
      fixed: Y = !1,
      flex: q = !1,
      width: te = o,
      minWidth: re = a,
      maxWidth: _e = c,
      ...Te
    } = H, ee = {
      name: V,
      type: K,
      setting: {
        name: V,
        type: K,
        fixed: Y,
        flex: q,
        width: te,
        minWidth: re,
        maxWidth: _e,
        ...Te
      },
      flex: Y ? 0 : q === !0 ? 1 : typeof q == "number" ? q : 0,
      left: 0,
      width: ju(te, re, _e),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((yt) => {
      var Q, ie;
      const ze = (Q = yt.colTypes) == null ? void 0 : Q[K];
      if (ze) {
        const Oe = typeof ze == "function" ? ze(ee) : ze;
        Oe && Object.assign(ee.setting, Oe);
      }
      (ie = yt.onAddCol) == null || ie.call(this, ee);
    }), ee.width = ju((gt = ee.setting.width) != null ? gt : ee.width, (Ee = ee.setting.minWidth) != null ? Ee : re, (Ce = ee.setting.maxWidth) != null ? Ce : _e), ee.realWidth = ee.realWidth || ee.width, Y === "left" ? (ee.left = _, _ += ee.width, f.push(ee)) : Y === "right" ? (ee.left = g, g += ee.width, p.push(ee)) : (ee.left = h, h += ee.width, i.push(ee)), ee.flex && l.push(ee), u.push(ee), d[ee.name] = ee;
  });
  let v = r.width, m = 0;
  const k = _ + h + g;
  if (typeof v == "function" && (v = v.call(this, k)), v === "auto")
    m = k;
  else if (v === "100%") {
    const { parent: H } = this;
    if (H)
      m = H.clientWidth;
    else {
      m = 0, U(this, nn, !0);
      return;
    }
  } else
    m = v != null ? v : 0;
  const { data: b, rowKey: C = "id", rowHeight: w } = r, A = [], y = (H, V, K) => {
    var q, te;
    const Y = { data: K != null ? K : { [C]: H }, id: H, index: A.length, top: 0 };
    if (K || (Y.lazy = !0), A.push(Y), ((q = r.onAddRow) == null ? void 0 : q.call(this, Y, V)) !== !1) {
      for (const re of n)
        if (((te = re.onAddRow) == null ? void 0 : te.call(this, Y, V)) === !1)
          return;
    }
  };
  if (typeof b == "number")
    for (let H = 0; H < b; H++)
      y(`${H}`, H);
  else
    Array.isArray(b) && b.forEach((H, V) => {
      var K;
      typeof H == "object" ? y(`${(K = H[C]) != null ? K : ""}`, V, H) : y(`${H != null ? H : ""}`, V);
    });
  let x = A;
  const O = {};
  if (r.onAddRows) {
    const H = r.onAddRows.call(this, x);
    H && (x = H);
  }
  for (const H of n) {
    const V = (z = H.onAddRows) == null ? void 0 : z.call(this, x);
    V && (x = V);
  }
  x.forEach((H, V) => {
    O[H.id] = H, H.index = V, H.top = H.index * w;
  });
  const { header: W, footer: j } = r, T = W ? r.headerHeight || w : 0, M = j ? r.footerHeight || w : 0;
  let E = r.height, D = 0;
  const S = x.length * w, N = T + M + S;
  if (typeof E == "function" && (E = E.call(this, N)), E === "auto")
    D = N;
  else if (typeof E == "object")
    D = Math.min(E.max, Math.max(E.min, N));
  else if (E === "100%") {
    const { parent: H } = this;
    if (H)
      D = H.clientHeight;
    else {
      D = 0, U(this, nn, !0);
      return;
    }
  } else
    D = E;
  const L = D - T - M, B = m - _ - g, F = {
    options: r,
    allRows: A,
    width: m,
    height: D,
    rows: x,
    rowsMap: O,
    rowHeight: w,
    rowsHeight: L,
    rowsHeightTotal: S,
    header: W,
    footer: j,
    footerGenerators: s,
    headerHeight: T,
    footerHeight: M,
    colsMap: d,
    colsList: u,
    flexCols: l,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: p,
      scrollCols: i,
      fixedLeftWidth: _,
      scrollWidth: B,
      scrollColsWidth: h,
      fixedRightWidth: g
    }
  }, I = (X = r.onLayout) == null ? void 0 : X.call(this, F);
  I && Object.assign(F, I), n.forEach((H) => {
    if (H.onLayout) {
      const V = H.onLayout.call(this, F);
      V && Object.assign(F, V);
    }
  }), U(this, ct, F);
}, da = new WeakSet(), hv = function() {
  (ne(this, _a, pv).call(this) || !$(this, ct)) && ne(this, pa, dv).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: c } } = n;
  if (s.length) {
    const k = a - c;
    if (k > 0) {
      const b = s.reduce((w, A) => w + A.flex, 0);
      let C = 0;
      s.forEach((w) => {
        const A = Math.min(k - C, Math.ceil(k * (w.flex / b)));
        w.realWidth = A + w.width, C += w.realWidth;
      });
    } else
      s.forEach((b) => {
        b.realWidth = b.width;
      });
  }
  r = Math.min(Math.max(0, c - a), r);
  let f = 0;
  o.forEach((k) => {
    k.left = f, f += k.realWidth, k.visible = k.left + k.realWidth >= r && k.left <= r + a;
  });
  const { rowsHeightTotal: p, rowsHeight: i, rows: d, rowHeight: u } = n, l = Math.min(Math.max(0, p - i), this.state.scrollTop), _ = Math.floor(l / u), g = l + i, h = Math.min(d.length, Math.ceil(g / u)), v = [], { rowDataGetter: m } = this.options;
  for (let k = _; k < h; k++) {
    const b = d[k];
    b.lazy && m && (b.data = m([b.id])[0], b.lazy = !1), v.push(b);
  }
  return n.visibleRows = v, n.scrollTop = l, n.scrollLeft = r, n;
}, P(al, "addPlugin", sv), P(al, "removePlugin", av);
function Iu(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((s) => s.classList.remove(r)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(r));
}
const q$ = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s, o;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const r = (o = n == null ? void 0 : n.getAttribute("data-col")) != null ? o : !1;
      Iu(this, r);
    },
    mouseleave() {
      Iu(this, !1);
    }
  }
}, G$ = Nr(q$, { buildIn: !0 });
function X$(e, t) {
  var a, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: s } = this.options, o = (f, p) => {
    s && !s.call(this, f) || !!n[f] === p || (p ? n[f] = !0 : delete n[f], r[f] = p);
  };
  if (e === void 0 ? (t === void 0 && (t = !vv.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
    o(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    o(f, t != null ? t : !n[f]);
  })), Object.keys(r).length) {
    const f = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, r, n);
    f && Object.keys(f).forEach((p) => {
      f[p] ? n[p] = !0 : delete n[p];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var p;
      (p = this.options.onCheckChange) == null || p.call(this, r);
    });
  }
  return r;
}
function K$(e) {
  var t;
  return (t = this.state.checkedRows[e]) != null ? t : !1;
}
function vv() {
  var n, r;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, o) => s + (t.call(this, o.id) ? 1 : 0), 0)) : e === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function Z$() {
  return Object.keys(this.state.checkedRows);
}
const J$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: X$,
    isRowChecked: K$,
    isAllRowChecked: vv,
    getChecks: Z$
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
        /* @__PURE__ */ Z("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ Z("input", {
          type: "checkbox",
          checked: e
        }))
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ Z("div", null, r.join(", "))
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c, f;
    const { id: r } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, r))
      return e;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, r) : o) {
      const p = this.isRowChecked(r), i = (f = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, p, r)) != null ? f : /* @__PURE__ */ Z("input", {
        type: "checkbox",
        checked: p
      });
      e.unshift(i), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var a, c;
    const { id: r } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, r) : s) {
      const f = this.isAllRowChecked(), p = (c = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? c : /* @__PURE__ */ Z("input", {
        type: "checkbox",
        checked: f
      });
      e.unshift(p), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (!!this.isRowChecked(t.id))
      return { className: G(e.className, "is-checked") };
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
}, Q$ = Nr(J$);
var mv = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(mv || {});
function cl(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, r = t.children && n && n[e];
  let s = !1, { parent: o } = t;
  for (; o; ) {
    const a = cl.call(this, o);
    if (a.state !== "expanded") {
      s = !0;
      break;
    }
    o = a.parent;
  }
  return t.state = s ? "hidden" : r ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? cl.call(this, t.parent).level + 1 : 0, t;
}
function ek(e, t) {
  var s;
  let n = (s = this.state.collapsedRows) != null ? s : {};
  const { nestedMap: r } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !gv.call(this)), t) {
      const o = r.entries();
      for (const [a, c] of o)
        c.state === "expanded" && (n[a] = !0);
    } else
      n = {};
  else {
    const o = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[o[0]]), o.forEach((a) => {
      const c = r.get(a);
      t && (c == null ? void 0 : c.children) ? n[a] = !0 : delete n[a];
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
function gv() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function yv(e, t = 0, n, r = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const a = e.get(o);
    !a || (a.level === r && (a.order = t++), (s = a.children) != null && s.length && (t = yv(e, t, a.children, r + 1)));
  }
  return t;
}
function bv(e, t, n, r) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((o) => {
    r[o] = n, bv(e, o, n, r);
  }), s;
}
function wv(e, t, n, r, s) {
  var c;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((c = o.children) == null ? void 0 : c.every((f) => {
    const p = !!(r[f] !== void 0 ? r[f] : s[f]);
    return n === p;
  })) && (r[t] = n), o.parent && wv(e, o.parent, n, r, s);
}
const tk = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, r = n.get(e.id), s = n.get(t.id);
      return (r == null ? void 0 : r.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const r = {};
      return Object.entries(t).forEach(([s, o]) => {
        const a = bv(this, s, o, r);
        a != null && a.parent && wv(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ek,
    isAllCollapsed: gv,
    getNestedRowInfo: cl
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, o, a, c, f;
    const { nestedMap: t } = this.data, n = (o = e.data) == null ? void 0 : o[(s = this.options.nestedParentKey) != null ? s : "parent"], r = (a = t.get(e.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (r.parent = n, (f = e.data) != null && f[(c = this.options.asParentKey) != null ? c : "asParent"] && (r.children = []), t.set(e.id, r), n) {
      let p = t.get(n);
      p || (p = {
        state: "",
        level: 0
      }, t.set(n, p)), p.children || (p.children = []), p.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter((t) => this.getNestedRowInfo(t.id).state !== "hidden"), yv(this.data.nestedMap), e.sort((t, n) => {
      var a, c;
      const r = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((c = s.order) != null ? c : 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c, f, p;
    const { id: r, data: s } = n, { nestedToggle: o } = t.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && e.unshift((f = (c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, a, r, t, s)) != null ? f : /* @__PURE__ */ Z("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ Z("span", {
      className: "toggle-icon"
    }))), a.level) {
      let { nestedIndent: i = o } = t.setting;
      i && (i === !0 && (i = (p = this.options.nestedIndent) != null ? p : 12), e.unshift(/* @__PURE__ */ Z("div", {
        className: "dtable-nested-indent",
        style: { width: i * a.level + "px" }
      })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s, o;
    const { id: r } = t;
    return n.setting.nestedToggle && e.unshift((o = (s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ Z("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ Z("span", {
      className: "toggle-icon"
    }))), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: G(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = G(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, nk = Nr(tk);
const rk = {
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
        const { linkTemplate: r = "", linkProps: s } = t.setting, o = Re(r, n.data);
        return e[0] = /* @__PURE__ */ Z("a", {
          href: o,
          ...s
        }, e[0]), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: r } = n, { avatarWithName: s, avatarClass: o = "size-xs circle", avatarKey: a = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ Z("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ Z("img", {
          src: r ? r[a] : ""
        }));
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: s = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, a = (n - r) / 2, c = n / 2, f = e[0];
        return e[0] = /* @__PURE__ */ Z("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ Z("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: s,
          fill: "transparent"
        }), /* @__PURE__ */ Z("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": r,
          stroke: o,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ Z("text", {
          x: c,
          y: c + r,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const r = (c = n.data) == null ? void 0 : c[t.name];
        if (!r)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: o = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: r.map((f) => {
            typeof f == "string" && (f = { action: f });
            const p = o[f.action];
            return p && (f = { className: a, ...p, ...f }), Re(s, f);
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
        const { format: r, type: s } = n, o = e[0];
        return typeof r == "function" ? e[0] = s === "html" ? { html: r(o) } : r(o) : s === "datetime" ? e[0] = nl(o, r) : s === "html" ? e[0] = { html: Re(r, o) } : e[0] = Re(r, o), e;
      }
    }
  }
}, ok = Nr(rk, { buildIn: !0 }), ik = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: r = this.options.sortLink, sortAttrs: s } = t.setting, o = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ Z("div", {
          className: `dtable-sort dtable-sort-${o}`
        }),
        { outer: !0, attrs: { "data-sort": o } }
      ), r) {
        const a = typeof r == "function" ? r.call(this, t, o) : r;
        e.push(
          { tagName: "a", attrs: { href: a, ...s } }
        );
      }
    }
    return e;
  }
}, sk = Nr(ik, { buildIn: !0 }), ak = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: G$,
  checkable: Q$,
  NestedRowState: mv,
  nested: nk,
  rich: ok,
  sortType: sk
}, Symbol.toStringTag, { value: "Module" }));
class jr extends Ke {
}
P(jr, "NAME", "dtable"), P(jr, "Component", al), P(jr, "definePlugin", Nr), P(jr, "removePlugin", av), P(jr, "plugins", ak);
var St, Le;
class lk {
  constructor(t) {
    R(this, St, void 0);
    R(this, Le, void 0);
    U(this, St, t), U(this, Le, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive($(this, St).parentElement.parentElement, $(this, St).parentElement), this.addActive($(this, Le).parentElement, $(this, Le)), $(this, Le).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    U(this, Le, $(this, St)), this.addActive($(this, Le).parentElement, $(this, Le)), U(this, St, document.querySelector(`[href='#${$(this, Le).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${$(this, Le).getAttribute("id")}']`) || document.querySelector(`[data-target='#${$(this, Le).getAttribute("id")}']`)), this.addActive($(this, St).parentElement.parentElement, $(this, St).parentElement);
  }
  addActive(t, n) {
    const r = t.children;
    Array.from(r).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
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
St = new WeakMap(), Le = new WeakMap();
document.addEventListener("click", function(e) {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new lk(e.target).showTarget());
});
export {
  Dc as ActionMenu,
  Pc as ActionMenuNested,
  df as Avatar,
  hf as BtnGroup,
  jc as Button,
  Ne as ContextMenu,
  jr as DTable,
  Et as Datepicker,
  Me as Dropdown,
  ul as EventBus,
  Uc as Menu,
  Qc as Messager,
  Pe as Modal,
  _o as ModalTrigger,
  Jf as Nav,
  lk as NavTabs,
  tu as Pager,
  sf as ProgressCircle,
  Wt as TIME_DAY,
  Ct as Timepicker,
  du as Toolbar,
  Ot as Tooltip,
  Cu as VirtualGrid,
  Nv as addI18nMap,
  _k as browser,
  eu as calculateTimestamp,
  uk as convertBytes,
  Fe as createDate,
  fk as formatBytes,
  nl as formatDate,
  gk as formatDateSpan,
  Re as formatString,
  Lv as getLangCode,
  yk as getTimeBeforeDesc,
  di as i18n,
  mk as isDBY,
  Ha as isObject,
  mi as isSameDay,
  t0 as isSameMonth,
  pk as isSameWeek,
  Qf as isSameYear,
  dk as isToday,
  vk as isTomorrow,
  hk as isYesterday,
  Ia as mergeDeep,
  Ua as nativeEvents,
  Pv as setLangCode,
  wm as store
};
