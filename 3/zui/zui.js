var ka = Object.defineProperty;
var $a = (t, e, n) => e in t ? ka(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => ($a(t, typeof e != "symbol" ? e + "" : e, n), n), Ur = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (Ur(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, M = (t, e, n, r) => (Ur(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
var V = (t, e, n) => (Ur(t, e, "access private method"), n);
var Mr, z, Di, Li, ln, Mo, Kn = {}, Ti = [], Ea = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ji(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nr(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Mr.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return jn(t, a, r, i, null);
}
function jn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Di : i };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Ca() {
  return { current: null };
}
function Pr(t) {
  return t.children;
}
function Hn(t, e) {
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
function Hi(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hi(t);
  }
}
function No(t) {
  (!t.__d && (t.__d = !0) && ln.push(t) && !Jn.__r++ || Mo !== z.debounceRendering) && ((Mo = z.debounceRendering) || setTimeout)(Jn);
}
function Jn() {
  for (var t; Jn.__r = ln.length; )
    t = ln.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ln = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Je({}, o)).__v = o.__v + 1, oo(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Tt(o) : a, o.__h), Ui(r, o), o.__e != a && Hi(o)));
    });
}
function Wi(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, b, _, v = r && r.__k || Ti, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? jn(null, c, null, null, c) : Array.isArray(c) ? jn(Pr, { children: c }, null, null, null) : c.__b > 0 ? jn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      oo(t, c, p = p || Kn, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = Ii(c, f, t) : f = Bi(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Tt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Tt(r, s + 1)), zi(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Fi(_[s], _[++s], _[++s]);
}
function Ii(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? Ii(r, e, n) : Bi(n, r, r, i, r.__e, e));
  return e;
}
function Bi(t, e, n, r, i, o) {
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
function Sa(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || Zn(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || Zn(t, o, e[o], n[o], r);
}
function Po(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ea.test(e) ? n : n + "px";
}
function Zn(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Po(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Po(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Lo : Do, o) : t.removeEventListener(e, o ? Lo : Do, o);
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
function Do(t) {
  this.l[t.type + !1](z.event ? z.event(t) : t);
}
function Lo(t) {
  this.l[t.type + !0](z.event ? z.event(t) : t);
}
function oo(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, b, _, v, y, w, x, k, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = z.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new Hn(_, y), s.constructor = m, s.render = Aa), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function($) {
              $ && ($.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = z.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Je(Je({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), k = u != null && u.type === Pr && u.key == null ? u.props.children : u, Wi(t, Array.isArray(k) ? k : [k], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ra(n.__e, e, n, r, i, o, a, f);
    (u = z.diffed) && u(e);
  } catch ($) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), z.__e($, e, n);
  }
}
function Ui(t, e) {
  z.__c && z.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      z.__e(r, n.__v);
    }
  });
}
function Ra(t, e, n, r, i, o, a, l) {
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
    if (o = o && Mr.call(t.childNodes), u = (d = n.props || Kn).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Sa(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Wi(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Tt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ji(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && Zn(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && Zn(t, "checked", h, d.checked, !1));
  }
  return t;
}
function Fi(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    z.__e(r, n);
  }
}
function zi(t, e, n) {
  var r, i;
  if (z.unmount && z.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Fi(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        z.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && zi(r[i], e, typeof t.type != "function");
  n || t.__e == null || ji(t.__e), t.__e = t.__d = void 0;
}
function Aa(t, e, n) {
  return this.constructor(t, n);
}
function Oa(t, e, n) {
  var r, i, o;
  z.__ && z.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, o = [], oo(e, t = (!r && n || e).__k = Nr(Pr, null, [t]), i || Kn, Kn, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Mr.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r), Ui(o, t);
}
Mr = Ti.slice, z = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Di = 0, Li = function(t) {
  return t != null && t.constructor === void 0;
}, Hn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this.__h.push(e), No(this));
}, Hn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), No(this));
}, Hn.prototype.render = Pr, ln = [], Jn.__r = 0;
var Pe;
class Ma {
  constructor(e = "") {
    C(this, Pe, void 0);
    typeof e == "object" ? M(this, Pe, e) : M(this, Pe, document.appendChild(document.createComment(e)));
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
const Vr = /* @__PURE__ */ new Set([
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
class io extends Ma {
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
    return typeof e == "string" && (Vr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(io.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Vr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var De, kn, ft, an;
class To extends io {
  constructor(n = "", r) {
    super(n);
    C(this, ft);
    C(this, De, /* @__PURE__ */ new Map());
    C(this, kn, void 0);
    M(this, kn, r == null ? void 0 : r.customEventSuffix);
  }
  on(n, r, i) {
    n = V(this, ft, an).call(this, n), super.on(n, r, i), g(this, De).set(r, [n, i]);
  }
  off(n, r, i) {
    n = V(this, ft, an).call(this, n), super.off(n, r, i), g(this, De).delete(r);
  }
  once(n, r, i) {
    n = V(this, ft, an).call(this, n);
    const o = (a) => {
      r(a), g(this, De).delete(o);
    };
    super.once(n, o, i), g(this, De).set(o, [n, i]);
  }
  emit(n, r) {
    return typeof n == "string" && (n = V(this, ft, an).call(this, n)), super.emit(n, r);
  }
  offAll() {
    Array.from(g(this, De).entries()).forEach(([n, [r, i]]) => {
      super.off(r, n, i);
    }), g(this, De).clear();
  }
}
De = new WeakMap(), kn = new WeakMap(), ft = new WeakSet(), an = function(n) {
  const r = g(this, kn);
  return Vr.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
};
function Na(t, e) {
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
function Pa(t, e, n) {
  const r = Na(t, e), i = r[r.length - 1];
  return i === void 0 ? n : i;
}
function Wn(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Qn(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Wn(t) && Wn(n))
    for (const r in n)
      Wn(n[r]) ? (t[r] || Object.assign(t, { [r]: {} }), Qn(t[r], n[r])) : Object.assign(t, { [r]: n[r] });
  return Qn(t, ...e);
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
var so = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(so || {});
function Da(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / so[n]).toFixed(e) + n);
}
const La = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const r = n[1];
  return t = t.replace(r, ""), Number.parseInt(t, 10) * so[r];
};
var Ni, Pi;
let ao = (Pi = (Ni = document.documentElement.getAttribute("lang")) == null ? void 0 : Ni.toLowerCase()) != null ? Pi : "zh_cn", Ye;
function Ta() {
  return ao;
}
function ja(t) {
  ao = t.toLowerCase();
}
function Ha(t, e) {
  Ye || (Ye = {}), typeof t == "string" && (t = { [t]: e != null ? e : {} }), Qn(Ye, t);
}
function Nn(t, e, n, r, i, o) {
  Array.isArray(t) ? Ye && t.unshift(Ye) : t = Ye ? [Ye, t] : [t], typeof n == "string" && (o = i, i = r, r = n, n = void 0);
  const a = i || ao;
  let l;
  for (const f of t) {
    if (!f)
      continue;
    const u = f[a];
    if (!u)
      continue;
    const s = o && f === Ye ? `${o}.${e}` : e;
    if (l = Pa(u, s), l !== void 0)
      break;
  }
  return l === void 0 ? r : n ? Et(l, ...Array.isArray(n) ? n : [n]) : l;
}
Nn.addLang = Ha;
Nn.getCode = Ta;
Nn.setCode = ja;
function Wa(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
var Le, Rt, se;
class bn {
  constructor(e, n) {
    C(this, Le, void 0);
    C(this, Rt, void 0);
    C(this, se, void 0);
    var r;
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && M(this, se, new To(e, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, Le, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? Wa(e.dataset) : null, ...n }), this.constructor.all.set(e, this), M(this, Rt, e), this.init(), (r = g(this, se)) == null || r.emit("inited", this);
  }
  get options() {
    return g(this, Le);
  }
  get element() {
    return g(this, Rt);
  }
  get events() {
    return g(this, se);
  }
  init() {
  }
  setOptions(e) {
    return e && Object.assign(g(this, Le), e), g(this, Le);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(g(this, Rt)), g(this, se) && (g(this, se).emit("destroyed", this), g(this, se).offAll());
  }
  on(e, n, r) {
    var i;
    (i = g(this, se)) == null || i.on(e, n, r);
  }
  once(e, n, r) {
    var i;
    (i = g(this, se)) == null || i.once(e, n, r);
  }
  off(e, n, r) {
    var i;
    (i = g(this, se)) == null || i.off(e, n, r);
  }
  emit(e, n) {
    var a;
    let r = To.createEvent(e, n);
    const i = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = g(this, Le)[i];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = g(this, se)) == null ? void 0 : a.emit(r), r;
  }
  i18n(e, n, r) {
    var i;
    return (i = Nn(g(this, Le).i18n, e, n, r, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${e}}`;
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
Le = new WeakMap(), Rt = new WeakMap(), se = new WeakMap(), F(bn, "EVENTS", !1), F(bn, "allComponents", /* @__PURE__ */ new Map());
class lo extends bn {
  constructor() {
    super(...arguments);
    F(this, "ref", Ca());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(n) {
    const r = this.constructor.Component;
    Oa(/* @__PURE__ */ Nr(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var co, q, Vi, qi, cn, jo, Yi = {}, Xi = [], Ia = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Gi(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ue(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? co.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return In(t, a, r, i, null);
}
function In(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Vi : i };
  return i == null && q.vnode != null && q.vnode(o), o;
}
function fo(t) {
  return t.children;
}
function fn(t, e) {
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
function Ki(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ki(t);
  }
}
function Ho(t) {
  (!t.__d && (t.__d = !0) && cn.push(t) && !er.__r++ || jo !== q.debounceRendering) && ((jo = q.debounceRendering) || setTimeout)(er);
}
function er() {
  for (var t; er.__r = cn.length; )
    t = cn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), cn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Ze({}, o)).__v = o.__v + 1, es(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jt(o) : a, o.__h), Ua(r, o), o.__e != a && Ki(o)));
    });
}
function Ji(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, b, _, v = r && r.__k || Xi, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? In(null, c, null, null, c) : Array.isArray(c) ? In(fo, { children: c }, null, null, null) : c.__b > 0 ? In(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      es(t, c, p = p || Yi, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = Zi(c, f, t) : f = Qi(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = jt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = jt(r, s + 1)), ns(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      ts(_[s], _[++s], _[++s]);
}
function Zi(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? Zi(r, e, n) : Qi(n, r, r, i, r.__e, e));
  return e;
}
function Qi(t, e, n, r, i, o) {
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
function Ba(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || tr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || tr(t, o, e[o], n[o], r);
}
function Wo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ia.test(e) ? n : n + "px";
}
function tr(t, e, n, r, i) {
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
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Bo(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function es(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, b, _, v, y, w, x, k, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = q.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new fn(_, y), s.constructor = m, s.render = za), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function($) {
              $ && ($.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = q.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Ze(Ze({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), k = u != null && u.type === fo && u.key == null ? u.props.children : u, Ji(t, Array.isArray(k) ? k : [k], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Fa(n.__e, e, n, r, i, o, a, f);
    (u = q.diffed) && u(e);
  } catch ($) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), q.__e($, e, n);
  }
}
function Ua(t, e) {
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
function Fa(t, e, n, r, i, o, a, l) {
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
    if (o = o && co.call(t.childNodes), u = (d = n.props || Yi).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ba(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Ji(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && jt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Gi(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && tr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && tr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function ts(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    q.__e(r, n);
  }
}
function ns(t, e, n) {
  var r, i;
  if (q.unmount && q.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || ts(r, null, e)), (r = t.__c) != null) {
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
      r[i] && ns(r[i], e, typeof t.type != "function");
  n || t.__e == null || Gi(t.__e), t.__e = t.__d = void 0;
}
function za(t, e, n) {
  return this.constructor(t, n);
}
co = Xi.slice, q = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Vi = 0, qi = function(t) {
  return t != null && t.constructor === void 0;
}, fn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this.__h.push(e), Ho(this));
}, fn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ho(this));
}, fn.prototype.render = fo, cn = [], er.__r = 0;
const I = (...t) => {
  const e = t.map((n) => Array.isArray(n) ? I(...n) : typeof n == "function" ? I(n()) : n !== null && typeof n == "object" ? Object.keys(n).filter((r) => {
    const i = n[r];
    return typeof i == "function" ? !!i() : !!i;
  }).join(" ") : n).filter((n) => typeof n == "string" && n.length);
  return e.length ? e.join(" ") : void 0;
};
function Va({
  component: t = "div",
  className: e,
  children: n,
  attrs: r
}) {
  return ue(t, {
    className: I(e),
    ...r
  }, n);
}
function qa({
  component: t = "a",
  className: e,
  children: n,
  attrs: r,
  url: i,
  disabled: o,
  active: a,
  icon: l,
  text: f,
  target: u,
  trailingIcon: s,
  hint: d,
  style: p,
  onClick: c
}) {
  const h = [
    typeof l == "string" ? /* @__PURE__ */ ue("i", {
      class: `icon ${l}`
    }) : l,
    /* @__PURE__ */ ue("span", {
      className: "text"
    }, f),
    n,
    typeof s == "string" ? /* @__PURE__ */ ue("i", {
      class: `icon ${s}`
    }) : s
  ];
  return ue(t, {
    className: I(e, { disabled: o, active: a }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: u,
    style: p,
    onClick: c,
    ...r
  }, ...h);
}
function Ya({
  component: t = "div",
  className: e,
  text: n,
  attrs: r,
  children: i,
  style: o,
  onClick: a
}) {
  return ue(t, {
    className: I(e),
    style: o,
    onClick: a,
    ...r
  }, n, i);
}
function Xa({
  component: t = "div",
  className: e,
  style: n,
  space: r,
  flex: i,
  attrs: o,
  onClick: a,
  children: l
}) {
  return ue(t, {
    className: I(e),
    style: { width: r, height: r, flex: i, ...n },
    onClick: a,
    ...o
  }, l);
}
const Ao = class extends fn {
  get name() {
    var e;
    return (e = this.props.name) != null ? e : this.constructor.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, r, i) {
    r && r.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var r;
    const e = { ...this.props }, n = (r = e.beforeRender) == null ? void 0 : r.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { type: r = "item", component: i, key: o = n, rootAttrs: a, rootClass: l, rootStyle: f, ...u } = e, s = !i || typeof i == "string" ? this.constructor.ItemComponents ? this.constructor.ItemComponents[r] : Ao.ItemComponents[r] : i;
    return Object.assign(u, {
      type: r,
      component: typeof i == "string" ? i : void 0
    }), /* @__PURE__ */ ue("li", {
      className: I(`${this.name}-${r}`, l),
      style: f,
      key: o,
      ...a
    }, /* @__PURE__ */ ue(s, {
      ...u
    }));
  }
  renderItem(e, n, r) {
    var u;
    const { itemRender: i, defaultItemProps: o, onClickItem: a } = e, l = { key: r, ...n }, f = (u = l.type) != null ? u : "item";
    if (o && Object.assign(l, o[f]), (a || n.onClick) && (l.onClick = this.handleItemClick.bind(this, l, r, n.onClick)), l.className = I(l.className), i) {
      if (typeof i == "object") {
        const s = i[f];
        if (s)
          return /* @__PURE__ */ ue(s, {
            ...l
          });
      } else if (typeof i == "function") {
        const s = i.call(this, l, ue);
        if (qi(s))
          return s;
        typeof s == "object" && Object.assign(l, s);
      }
    }
    return this.onRenderItem(l, r);
  }
  render() {
    const e = this.beforeRender(), {
      name: n,
      style: r,
      defaultItemProps: i,
      className: o,
      items: a,
      children: l,
      itemRender: f,
      onClickItem: u,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: p,
      ...c
    } = e;
    return /* @__PURE__ */ ue("menu", {
      class: I(this.name, o),
      ...c
    }, a && a.map(this.renderItem.bind(this, e)), l);
  }
};
let un = Ao;
F(un, "ItemComponents", {
  divider: Va,
  item: qa,
  heading: Ya,
  space: Xa
});
class Ga extends lo {
}
F(Ga, "Component", un);
class Ka extends un {
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((r) => r.icon)), n && (e.className = I(e.className, "has-icons")), e;
  }
}
class rs extends lo {
}
F(rs, "Component", Ka);
var uo, Y, os, pn, Uo, is = {}, ss = [], Ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function as(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Fo(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? uo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Bn(t, a, r, i, null);
}
function Bn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++os : i };
  return i == null && Y.vnode != null && Y.vnode(o), o;
}
function po(t) {
  return t.children;
}
function hn(t, e) {
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
function ls(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ls(t);
  }
}
function zo(t) {
  (!t.__d && (t.__d = !0) && pn.push(t) && !nr.__r++ || Uo !== Y.debounceRendering) && ((Uo = Y.debounceRendering) || setTimeout)(nr);
}
function nr() {
  for (var t; nr.__r = pn.length; )
    t = pn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), pn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Qe({}, o)).__v = o.__v + 1, ps(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ht(o) : a, o.__h), Qa(r, o), o.__e != a && ls(o)));
    });
}
function cs(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, b, _, v = r && r.__k || ss, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Bn(null, c, null, null, c) : Array.isArray(c) ? Bn(po, { children: c }, null, null, null) : c.__b > 0 ? Bn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ps(t, c, p = p || is, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = fs(c, f, t) : f = us(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Ht(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Ht(r, s + 1)), ds(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      hs(_[s], _[++s], _[++s]);
}
function fs(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? fs(r, e, n) : us(n, r, r, i, r.__e, e));
  return e;
}
function us(t, e, n, r, i, o) {
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
function Za(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || rr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || rr(t, o, e[o], n[o], r);
}
function Vo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ja.test(e) ? n : n + "px";
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
  this.l[t.type + !1](Y.event ? Y.event(t) : t);
}
function Yo(t) {
  this.l[t.type + !0](Y.event ? Y.event(t) : t);
}
function ps(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, b, _, v, y, w, x, k, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = Y.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new hn(_, y), s.constructor = m, s.render = tl), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function($) {
              $ && ($.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = Y.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Qe(Qe({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), k = u != null && u.type === po && u.key == null ? u.props.children : u, cs(t, Array.isArray(k) ? k : [k], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = el(n.__e, e, n, r, i, o, a, f);
    (u = Y.diffed) && u(e);
  } catch ($) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), Y.__e($, e, n);
  }
}
function Qa(t, e) {
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
function el(t, e, n, r, i, o, a, l) {
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
    if (o = o && uo.call(t.childNodes), u = (d = n.props || is).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Za(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, cs(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Ht(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && as(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && rr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && rr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function hs(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    Y.__e(r, n);
  }
}
function ds(t, e, n) {
  var r, i;
  if (Y.unmount && Y.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || hs(r, null, e)), (r = t.__c) != null) {
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
      r[i] && ds(r[i], e, typeof t.type != "function");
  n || t.__e == null || as(t.__e), t.__e = t.__d = void 0;
}
function tl(t, e, n) {
  return this.constructor(t, n);
}
uo = ss.slice, Y = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, os = 0, hn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this.__h.push(e), zo(this));
}, hn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), zo(this));
}, hn.prototype.render = po, pn = [], nr.__r = 0;
var ut, pt;
class Xo extends hn {
  constructor(n) {
    var r;
    super(n);
    C(this, ut, 0);
    C(this, pt, null);
    F(this, "_handleWheel", (n) => {
      var o;
      const { wheelContainer: r } = this.props, i = n.target;
      if (!(!i || !r) && (typeof r == "string" && i.closest(r) || typeof r == "object")) {
        const a = (this.props.type === "horz" ? n.deltaX : n.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1);
        this.scrollOffset(a) && n.preventDefault();
      }
    });
    F(this, "_handleMouseMove", (n) => {
      const { dragStart: r } = this.state;
      r && (g(this, ut) && cancelAnimationFrame(g(this, ut)), M(this, ut, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - r.x : n.clientY - r.y;
        this.scroll(r.offset + i * this.props.scrollSize / this.props.clientSize), M(this, ut, 0);
      })), n.preventDefault());
    });
    F(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    F(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    F(this, "_handleClick", (n) => {
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
    n && (M(this, pt, typeof n == "string" ? document : n.current), g(this, pt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    }, b = {};
    return r === "horz" ? (h.height = i, h.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, p) * (n - b.width) / d)) : (h.width = i, h.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, p) * (n - b.height) / d)), /* @__PURE__ */ Fo("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": c
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Fo("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ut = new WeakMap(), pt = new WeakMap();
function nl(t) {
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
function rl(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function ol(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= i;
  const a = r.top <= i && r.top + r.height >= 0, l = r.left <= o && r.left + r.width >= 0;
  return a && l;
}
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: nl,
  domReady: rl,
  isElementVisible: ol,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let il = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var $n, Xe, xe, At, Ot, Un;
const Oo = class {
  constructor(e, n = "local") {
    C(this, Ot);
    C(this, $n, void 0);
    C(this, Xe, void 0);
    C(this, xe, void 0);
    C(this, At, void 0);
    M(this, $n, n), M(this, Xe, `ZUI_STORE:${e != null ? e : il()}`), M(this, xe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return g(this, $n);
  }
  get session() {
    return this.type === "session" ? this : (g(this, At) || M(this, At, new Oo(g(this, Xe), "session")), g(this, At));
  }
  get(e, n) {
    const r = g(this, xe).getItem(V(this, Ot, Un).call(this, e));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(e, n) {
    if (n == null)
      return this.remove(e);
    g(this, xe).setItem(V(this, Ot, Un).call(this, e), JSON.stringify(n));
  }
  remove(e) {
    g(this, xe).removeItem(V(this, Ot, Un).call(this, e));
  }
  each(e) {
    for (let n = 0; n < g(this, xe).length; n++) {
      const r = g(this, xe).key(n);
      if (r != null && r.startsWith(g(this, Xe))) {
        const i = g(this, xe).getItem(r);
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
let or = Oo;
$n = new WeakMap(), Xe = new WeakMap(), xe = new WeakMap(), At = new WeakMap(), Ot = new WeakSet(), Un = function(e) {
  return `${g(this, Xe)}:${e}`;
};
const sl = new or("DEFAULT");
function al(t, e = "local") {
  return new or(t, e);
}
Object.assign(sl, { create: al });
var ho, X, _s, dn, Go, vs = {}, gs = [], ll = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ms(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ko(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ho.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Fn(t, a, r, i, null);
}
function Fn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_s : i };
  return i == null && X.vnode != null && X.vnode(o), o;
}
function _o(t) {
  return t.children;
}
function _n(t, e) {
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
function ys(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ys(t);
  }
}
function Jo(t) {
  (!t.__d && (t.__d = !0) && dn.push(t) && !ir.__r++ || Go !== X.debounceRendering) && ((Go = X.debounceRendering) || setTimeout)(ir);
}
function ir() {
  for (var t; ir.__r = dn.length; )
    t = dn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), dn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = et({}, o)).__v = o.__v + 1, ks(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wt(o) : a, o.__h), fl(r, o), o.__e != a && ys(o)));
    });
}
function bs(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, b, _, v = r && r.__k || gs, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Fn(null, c, null, null, c) : Array.isArray(c) ? Fn(_o, { children: c }, null, null, null) : c.__b > 0 ? Fn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ks(t, c, p = p || vs, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = ws(c, f, t) : f = xs(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Wt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Wt(r, s + 1)), Es(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      $s(_[s], _[++s], _[++s]);
}
function ws(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? ws(r, e, n) : xs(n, r, r, i, r.__e, e));
  return e;
}
function xs(t, e, n, r, i, o) {
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
function cl(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || sr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || sr(t, o, e[o], n[o], r);
}
function Zo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ll.test(e) ? n : n + "px";
}
function sr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Zo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Zo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? ei : Qo, o) : t.removeEventListener(e, o ? ei : Qo, o);
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
function Qo(t) {
  this.l[t.type + !1](X.event ? X.event(t) : t);
}
function ei(t) {
  this.l[t.type + !0](X.event ? X.event(t) : t);
}
function ks(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, b, _, v, y, w, x, k, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = X.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new _n(_, y), s.constructor = m, s.render = pl), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function($) {
              $ && ($.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = X.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = et(et({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), k = u != null && u.type === _o && u.key == null ? u.props.children : u, bs(t, Array.isArray(k) ? k : [k], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ul(n.__e, e, n, r, i, o, a, f);
    (u = X.diffed) && u(e);
  } catch ($) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), X.__e($, e, n);
  }
}
function fl(t, e) {
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
function ul(t, e, n, r, i, o, a, l) {
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
    if (o = o && ho.call(t.childNodes), u = (d = n.props || vs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (cl(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, bs(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Wt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ms(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && sr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && sr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function $s(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    X.__e(r, n);
  }
}
function Es(t, e, n) {
  var r, i;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || $s(r, null, e)), (r = t.__c) != null) {
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
      r[i] && Es(r[i], e, typeof t.type != "function");
  n || t.__e == null || ms(t.__e), t.__e = t.__d = void 0;
}
function pl(t, e, n) {
  return this.constructor(t, n);
}
ho = gs.slice, X = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, _s = 0, _n.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof t == "function" && (t = t(et({}, n), this.props)), t && et(n, t), t != null && this.__v && (e && this.__h.push(e), Jo(this));
}, _n.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Jo(this));
}, _n.prototype.render = _o, dn = [], ir.__r = 0;
class nu extends _n {
  render() {
    const { size: e, rounded: n, className: r, style: i, src: o, text: a, children: l, ...f } = this.props, u = [r], s = { ...i };
    let d = null;
    return o ? d = /* @__PURE__ */ Ko("img", {
      src: o,
      alt: a
    }) : d = a, typeof e == "number" ? (s.width = e, s.height = e) : typeof e == "string" && u.push(`avatar-${e}`), typeof n == "string" && u.push(`rounded-${n}`), /* @__PURE__ */ Ko("div", {
      className: I(u),
      style: s,
      ...f
    }, d, l);
  }
}
function hl() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function dl() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function _l(t, e) {
  hl(), t.classList.add("block"), ti(t, e), t.onclick = (n) => vl(n, t), window.addEventListener("resize", () => {
    ti(t, e);
  });
}
function Cs(t) {
  var e;
  dl(), (e = t.classList) == null || e.remove("block");
}
function ti(t, e) {
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
function vl(t, e) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), Cs(e));
}
function gl(t) {
  var e, n;
  return t instanceof HTMLAnchorElement ? (n = (e = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : n.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const e = t.target, n = e.closest("[data-toggle=modal]");
  if (n) {
    const r = gl(n);
    if (!r)
      return;
    const i = document.querySelector(r);
    if (!i)
      return;
    _l(i, n.dataset.position || "fit");
  } else
    e.className.includes("modal") && Cs(e);
});
function de(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function bt(t) {
  var e = de(t).Element;
  return t instanceof e || t instanceof Element;
}
function pe(t) {
  var e = de(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function vo(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = de(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var mt = Math.max, ar = Math.min, It = Math.round;
function qr() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ss() {
  return !/^((?!chrome|android).)*safari/i.test(qr());
}
function Bt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && pe(t) && (i = t.offsetWidth > 0 && It(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && It(r.height) / t.offsetHeight || 1);
  var a = bt(t) ? de(t) : window, l = a.visualViewport, f = !Ss() && n, u = (r.left + (f && l ? l.offsetLeft : 0)) / i, s = (r.top + (f && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
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
function go(t) {
  var e = de(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ml(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function yl(t) {
  return t === de(t) || !pe(t) ? go(t) : ml(t);
}
function Se(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ot(t) {
  return ((bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function mo(t) {
  return Bt(ot(t)).left + go(t).scrollLeft;
}
function ye(t) {
  return de(t).getComputedStyle(t);
}
function yo(t) {
  var e = ye(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function bl(t) {
  var e = t.getBoundingClientRect(), n = It(e.width) / t.offsetWidth || 1, r = It(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function wl(t, e, n) {
  n === void 0 && (n = !1);
  var r = pe(e), i = pe(e) && bl(e), o = ot(e), a = Bt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Se(e) !== "body" || yo(o)) && (l = yl(e)), pe(e) ? (f = Bt(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : o && (f.x = mo(o))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Rs(t) {
  var e = Bt(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Dr(t) {
  return Se(t) === "html" ? t : t.assignedSlot || t.parentNode || (vo(t) ? t.host : null) || ot(t);
}
function As(t) {
  return ["html", "body", "#document"].indexOf(Se(t)) >= 0 ? t.ownerDocument.body : pe(t) && yo(t) ? t : As(Dr(t));
}
function vn(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = As(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = de(r), a = i ? [o].concat(o.visualViewport || [], yo(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(vn(Dr(a)));
}
function xl(t) {
  return ["table", "td", "th"].indexOf(Se(t)) >= 0;
}
function ni(t) {
  return !pe(t) || ye(t).position === "fixed" ? null : t.offsetParent;
}
function kl(t) {
  var e = /firefox/i.test(qr()), n = /Trident/i.test(qr());
  if (n && pe(t)) {
    var r = ye(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Dr(t);
  for (vo(i) && (i = i.host); pe(i) && ["html", "body"].indexOf(Se(i)) < 0; ) {
    var o = ye(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Lr(t) {
  for (var e = de(t), n = ni(t); n && xl(n) && ye(n).position === "static"; )
    n = ni(n);
  return n && (Se(n) === "html" || Se(n) === "body" && ye(n).position === "static") ? e : n || kl(t) || e;
}
var ge = "top", Re = "bottom", nt = "right", We = "left", Tr = "auto", jr = [ge, Re, nt, We], Ut = "start", wn = "end", $l = "clippingParents", Os = "viewport", rn = "popper", El = "reference", ri = /* @__PURE__ */ jr.reduce(function(t, e) {
  return t.concat([e + "-" + Ut, e + "-" + wn]);
}, []), Cl = /* @__PURE__ */ [].concat(jr, [Tr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Ut, e + "-" + wn]);
}, []), Sl = "beforeRead", Rl = "read", Al = "afterRead", Ol = "beforeMain", Ml = "main", Nl = "afterMain", Pl = "beforeWrite", Dl = "write", Ll = "afterWrite", Yr = [Sl, Rl, Al, Ol, Ml, Nl, Pl, Dl, Ll];
function Tl(t) {
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
function jl(t) {
  var e = Tl(t);
  return Yr.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Hl(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function ze(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, t);
}
var lt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Wl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', oi = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Il(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), oi).filter(function(n, r, i) {
      return i.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof e.name != "string" && console.error(ze(lt, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(ze(lt, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Yr.indexOf(e.phase) < 0 && console.error(ze(lt, e.name, '"phase"', "either " + Yr.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(ze(lt, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(ze(lt, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(ze(lt, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(ze(lt, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + oi.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(ze(Wl, String(e.name), r, r));
      });
    });
  });
}
function Bl(t, e) {
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
function Ul(t) {
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
function Fl(t, e) {
  var n = de(t), r = ot(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = Ss();
    (u || !u && e === "fixed") && (l = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + mo(t),
    y: f
  };
}
function zl(t) {
  var e, n = ot(t), r = go(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = mt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = mt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + mo(t), f = -r.scrollTop;
  return ye(i || n).direction === "rtl" && (l += mt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: f
  };
}
function Vl(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && vo(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function ql(t, e) {
  var n = Bt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ii(t, e, n) {
  return e === Os ? Xr(Fl(t, n)) : bt(e) ? ql(e, n) : Xr(zl(ot(t)));
}
function Yl(t) {
  var e = vn(Dr(t)), n = ["absolute", "fixed"].indexOf(ye(t).position) >= 0, r = n && pe(t) ? Lr(t) : t;
  return bt(r) ? e.filter(function(i) {
    return bt(i) && Vl(i, r) && Se(i) !== "body";
  }) : [];
}
function Xl(t, e, n, r) {
  var i = e === "clippingParents" ? Yl(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(f, u) {
    var s = ii(t, u, r);
    return f.top = mt(s.top, f.top), f.right = ar(s.right, f.right), f.bottom = ar(s.bottom, f.bottom), f.left = mt(s.left, f.left), f;
  }, ii(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ft(t) {
  return t.split("-")[1];
}
function Ms(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ns(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ie(r) : null, o = r ? Ft(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, f;
  switch (i) {
    case ge:
      f = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Re:
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
  var u = i ? Ms(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case Ut:
        f[u] = f[u] - (e[s] / 2 - n[s] / 2);
        break;
      case wn:
        f[u] = f[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function Ps() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gl(t) {
  return Object.assign({}, Ps(), t);
}
function Kl(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function bo(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, f = l === void 0 ? $l : l, u = n.rootBoundary, s = u === void 0 ? Os : u, d = n.elementContext, p = d === void 0 ? rn : d, c = n.altBoundary, h = c === void 0 ? !1 : c, b = n.padding, _ = b === void 0 ? 0 : b, v = Gl(typeof _ != "number" ? _ : Kl(_, jr)), y = p === rn ? El : rn, w = t.rects.popper, x = t.elements[h ? y : p], k = Xl(bt(x) ? x : x.contextElement || ot(t.elements.popper), f, s, a), m = Bt(t.elements.reference), $ = Ns({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = Xr(Object.assign({}, w, $)), A = p === rn ? E : m, O = {
    top: k.top - A.top + v.top,
    bottom: A.bottom - k.bottom + v.bottom,
    left: k.left - A.left + v.left,
    right: A.right - k.right + v.right
  }, S = t.modifiersData.offset;
  if (p === rn && S) {
    var L = S[i];
    Object.keys(O).forEach(function(P) {
      var K = [nt, Re].indexOf(P) >= 0 ? 1 : -1, H = [ge, Re].indexOf(P) >= 0 ? "y" : "x";
      O[P] += L[H] * K;
    });
  }
  return O;
}
var si = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Jl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ai = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function li() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Zl(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? ai : i;
  return function(l, f, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ai, o),
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
        var y = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, o, s.options, y), s.scrollParents = {
          reference: bt(l) ? vn(l) : l.contextElement ? vn(l.contextElement) : [],
          popper: vn(f)
        };
        var w = jl(Ul([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(S) {
          return S.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = Bl([].concat(w, s.options.modifiers), function(S) {
            var L = S.name;
            return L;
          });
          if (Il(x), Ie(s.options.placement) === Tr) {
            var k = s.orderedModifiers.find(function(S) {
              var L = S.name;
              return L === "flip";
            });
            k || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = ye(f), $ = m.marginTop, E = m.marginRight, A = m.marginBottom, O = m.marginLeft;
          [$, E, A, O].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, y = v.reference, w = v.popper;
          if (!li(y, w)) {
            process.env.NODE_ENV !== "production" && console.error(si);
            return;
          }
          s.rects = {
            reference: wl(y, Lr(w), s.options.strategy === "fixed"),
            popper: Rs(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(S) {
            return s.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var x = 0, k = 0; k < s.orderedModifiers.length; k++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(Jl);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, k = -1;
              continue;
            }
            var m = s.orderedModifiers[k], $ = m.fn, E = m.options, A = E === void 0 ? {} : E, O = m.name;
            typeof $ == "function" && (s = $({
              state: s,
              options: A,
              name: O,
              instance: c
            }) || s);
          }
        }
      },
      update: Hl(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!li(l, f))
      return process.env.NODE_ENV !== "production" && console.error(si), c;
    c.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, y = _.options, w = y === void 0 ? {} : y, x = _.effect;
        if (typeof x == "function") {
          var k = x({
            state: s,
            name: v,
            instance: c,
            options: w
          }), m = function() {
          };
          d.push(k || m);
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
var Dn = {
  passive: !0
};
function Ql(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, f = de(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Dn);
  }), l && f.addEventListener("resize", n.update, Dn), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Dn);
    }), l && f.removeEventListener("resize", n.update, Dn);
  };
}
const ec = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ql,
  data: {}
};
function tc(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Ns({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const nc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tc,
  data: {}
};
var rc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oc(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: It(e * i) / i || 0,
    y: It(n * i) / i || 0
  };
}
function ci(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, f = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, c = p === void 0 ? 0 : p, h = a.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var v = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), w = We, x = ge, k = window;
  if (u) {
    var m = Lr(n), $ = "clientHeight", E = "clientWidth";
    if (m === de(n) && (m = ot(n), ye(m).position !== "static" && l === "absolute" && ($ = "scrollHeight", E = "scrollWidth")), m = m, i === ge || (i === We || i === nt) && o === wn) {
      x = Re;
      var A = d && m === k && k.visualViewport ? k.visualViewport.height : m[$];
      b -= A - r.height, b *= f ? 1 : -1;
    }
    if (i === We || (i === ge || i === Re) && o === wn) {
      w = nt;
      var O = d && m === k && k.visualViewport ? k.visualViewport.width : m[E];
      c -= O - r.width, c *= f ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, u && rc), L = s === !0 ? oc({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = L.x, b = L.y, f) {
    var P;
    return Object.assign({}, S, (P = {}, P[x] = y ? "0" : "", P[w] = v ? "0" : "", P.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (e = {}, e[x] = y ? b + "px" : "", e[w] = v ? c + "px" : "", e.transform = "", e));
}
function ic(t) {
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
    placement: Ie(e.placement),
    variation: Ft(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ci(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ci(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const sc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ic,
  data: {}
};
function ac(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !pe(o) || !Se(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function lc(t) {
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
      !pe(i) || !Se(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const cc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ac,
  effect: lc,
  requires: ["computeStyles"]
};
var fc = [ec, nc, sc, cc], fi = /* @__PURE__ */ Zl({
  defaultModifiers: fc
});
function uc(t) {
  return t === "x" ? "y" : "x";
}
function zn(t, e, n) {
  return mt(t, ar(e, n));
}
function pc(t, e, n) {
  var r = zn(t, e, n);
  return r > n ? n : r;
}
function hc(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, c = p === void 0 ? !0 : p, h = n.tetherOffset, b = h === void 0 ? 0 : h, _ = bo(e, {
    boundary: f,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ie(e.placement), y = Ft(e.placement), w = !y, x = Ms(v), k = uc(x), m = e.modifiersData.popperOffsets, $ = e.rects.reference, E = e.rects.popper, A = typeof b == "function" ? b(Object.assign({}, e.rects, {
    placement: e.placement
  })) : b, O = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), S = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (o) {
      var P, K = x === "y" ? ge : We, H = x === "y" ? Re : nt, D = x === "y" ? "height" : "width", j = m[x], oe = j + _[K], Z = j - _[H], ve = c ? -E[D] / 2 : 0, ie = y === Ut ? $[D] : E[D], ne = y === Ut ? -E[D] : -$[D], le = e.elements.arrow, ee = c && le ? Rs(le) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ps(), T = R[K], B = R[H], W = zn(0, $[D], ee[D]), te = w ? $[D] / 2 - ve - W - T - O.mainAxis : ie - W - T - O.mainAxis, Me = w ? -$[D] / 2 + ve + W + B + O.mainAxis : ne + W + B + O.mainAxis, ce = e.elements.arrow && Lr(e.elements.arrow), xt = ce ? x === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, st = (P = S == null ? void 0 : S[x]) != null ? P : 0, Kt = j + te - st - xt, U = j + Me - st, Fe = zn(c ? ar(oe, Kt) : oe, j, c ? mt(Z, U) : Z);
      m[x] = Fe, L[x] = Fe - j;
    }
    if (l) {
      var we, kt = x === "x" ? ge : We, $t = x === "x" ? Re : nt, J = m[k], Ne = k === "y" ? "height" : "width", Jt = J + _[kt], Zt = J - _[$t], at = [ge, We].indexOf(v) !== -1, Qt = (we = S == null ? void 0 : S[k]) != null ? we : 0, en = at ? Jt : J - $[Ne] - E[Ne] - Qt + O.altAxis, tn = at ? J + $[Ne] + E[Ne] - Qt - O.altAxis : Zt, nn = c && at ? pc(en, J, tn) : zn(c ? en : Jt, J, c ? tn : Zt);
      m[k] = nn, L[k] = nn - J;
    }
    e.modifiersData[r] = L;
  }
}
const ui = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hc,
  requiresIfExists: ["offset"]
};
var dc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return dc[e];
  });
}
var _c = {
  start: "end",
  end: "start"
};
function pi(t) {
  return t.replace(/start|end/g, function(e) {
    return _c[e];
  });
}
function vc(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, u = f === void 0 ? Cl : f, s = Ft(r), d = s ? l ? ri : ri.filter(function(h) {
    return Ft(h) === s;
  }) : jr, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = p.reduce(function(h, b) {
    return h[b] = bo(t, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ie(b)], h;
  }, {});
  return Object.keys(c).sort(function(h, b) {
    return c[h] - c[b];
  });
}
function gc(t) {
  if (Ie(t) === Tr)
    return [];
  var e = Vn(t);
  return [pi(t), e, pi(e)];
}
function mc(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, h = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, _ = e.options.placement, v = Ie(_), y = v === _, w = f || (y || !h ? [Vn(_)] : gc(_)), x = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ie(R) === Tr ? vc(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : R);
    }, []), k = e.rects.reference, m = e.rects.popper, $ = /* @__PURE__ */ new Map(), E = !0, A = x[0], O = 0; O < x.length; O++) {
      var S = x[O], L = Ie(S), P = Ft(S) === Ut, K = [ge, Re].indexOf(L) >= 0, H = K ? "width" : "height", D = bo(e, {
        placement: S,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), j = K ? P ? nt : We : P ? Re : ge;
      k[H] > m[H] && (j = Vn(j));
      var oe = Vn(j), Z = [];
      if (o && Z.push(D[L] <= 0), l && Z.push(D[j] <= 0, D[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        A = S, E = !1;
        break;
      }
      $.set(S, Z);
    }
    if (E)
      for (var ve = h ? 3 : 1, ie = function(R) {
        var T = x.find(function(B) {
          var W = $.get(B);
          if (W)
            return W.slice(0, R).every(function(te) {
              return te;
            });
        });
        if (T)
          return A = T, "break";
      }, ne = ve; ne > 0; ne--) {
        var le = ie(ne);
        if (le === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = !0, e.placement = A, e.reset = !0);
  }
}
const hi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ds(t) {
  return t.button === 2;
}
const yc = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Fr = "show", qn = "contextmenu";
var ht, fe, dt, Mt, En, _t, Cn, Gr, dr, _r, vr, gr, Ls, mr, Ts;
const qe = class extends bn {
  constructor() {
    super(...arguments);
    C(this, Cn);
    C(this, gr);
    C(this, mr);
    C(this, ht, void 0);
    C(this, fe, void 0);
    C(this, dt, /* @__PURE__ */ new Map());
    C(this, Mt, void 0);
    C(this, En, void 0);
    C(this, _t, void 0);
    C(this, dr, ({ menu: n }) => {
      const r = n.$;
      if (!(r != null && r.parentElement))
        return;
      let i = g(this, dt).get(n);
      i || (i = fi(r.parentElement, r, {
        modifiers: [ui, hi],
        placement: "right-start"
      }), g(this, dt).set(n, i)), i.update();
    });
    C(this, _r, ({ menu: n }) => {
      const r = g(this, dt).get(n);
      r && (r.destroy(), g(this, dt).delete(n));
    });
    C(this, vr, ({ item: n, h: r }) => {
      if (n.type === "item" && n.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Fr);
  }
  get menu() {
    var i, o;
    if (g(this, ht))
      return g(this, ht);
    const { element: n } = this;
    let r;
    if (this.options.menu)
      r = document.createElement("div"), r.classList.add(qn), document.body.appendChild(r);
    else if (n) {
      const a = (i = n.getAttribute("href")) != null ? i : n.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = n.nextElementSibling;
        l != null && l.classList.contains(qn) ? r = l : r = (o = n.parentNode) == null ? void 0 : o.querySelector(`.${qn}`);
      }
    }
    if (r)
      return M(this, ht, r), r;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return g(this, fe) ? g(this, fe) : V(this, Cn, Gr).call(this);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    if (n = n || qe.mousePos, this.emit("show", { menu: this, event: n }).defaultPrevented)
      return !1;
    M(this, En, n), V(this, gr, Ls).call(this, n) !== !1 && (this.menu.classList.add(Fr), V(this, Cn, Gr).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var r, i, o, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (r = g(this, fe)) == null || r.destroy(), M(this, fe, void 0), (i = g(this, ht)) == null || i.classList.remove(Fr), (a = (o = g(this, _t)) == null ? void 0 : o.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    (n = g(this, fe)) == null || n.destroy(), super.destroy();
  }
  static clear(n) {
    n && Ds(n) || (qe.getAll(), qe.getAll().forEach((r) => r.hide()));
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
let Ct = qe;
ht = new WeakMap(), fe = new WeakMap(), dt = new WeakMap(), Mt = new WeakMap(), En = new WeakMap(), _t = new WeakMap(), Cn = new WeakSet(), Gr = function() {
  const n = {
    modifiers: [ui, hi],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return g(this, fe) ? g(this, fe).setOptions(n) : M(this, fe, fi(V(this, mr, Ts).call(this), this.menu, n)), g(this, fe);
}, dr = new WeakMap(), _r = new WeakMap(), vr = new WeakMap(), gr = new WeakSet(), Ls = function(n) {
  let { items: r } = this.options;
  if (!r)
    return;
  if (typeof r == "function" && (r = r(this, n)), !(r != null && r.length) || this.emit("updateMenu", { items: r, event: n, contextmenu: this }).defaultPrevented)
    return !1;
  const { menu: o } = this.options;
  return g(this, _t) ? g(this, _t).render({ items: r, ...o }) : M(this, _t, new rs(this.menu, {
    subMenuTrigger: this.options.subMenuTrigger,
    items: r,
    ...o,
    afterRender: g(this, dr),
    beforeDestroy: g(this, _r),
    onRenderItem: g(this, vr)
  })), !0;
}, mr = new WeakSet(), Ts = function() {
  return g(this, Mt) || M(this, Mt, {
    getBoundingClientRect: () => {
      const { clientX: n, clientY: r } = g(this, En) || qe.mousePos;
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
  }), g(this, Mt);
}, F(Ct, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  subMenuTrigger: "hover"
}), F(Ct, "watchedMouse", !1);
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${qn}`))
    return;
  const n = e.closest(yc);
  n && (Ct.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Ct.clear);
function _e(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function wt(t) {
  var e = _e(t).Element;
  return t instanceof e || t instanceof Element;
}
function he(t) {
  var e = _e(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function wo(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = _e(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var yt = Math.max, lr = Math.min, zt = Math.round;
function Kr() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function js() {
  return !/^((?!chrome|android).)*safari/i.test(Kr());
}
function Vt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && he(t) && (i = t.offsetWidth > 0 && zt(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && zt(r.height) / t.offsetHeight || 1);
  var a = wt(t) ? _e(t) : window, l = a.visualViewport, f = !js() && n, u = (r.left + (f && l ? l.offsetLeft : 0)) / i, s = (r.top + (f && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
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
  var e = _e(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function bc(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function wc(t) {
  return t === _e(t) || !he(t) ? xo(t) : bc(t);
}
function Ae(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function it(t) {
  return ((wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ko(t) {
  return Vt(it(t)).left + xo(t).scrollLeft;
}
function be(t) {
  return _e(t).getComputedStyle(t);
}
function $o(t) {
  var e = be(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function xc(t) {
  var e = t.getBoundingClientRect(), n = zt(e.width) / t.offsetWidth || 1, r = zt(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function kc(t, e, n) {
  n === void 0 && (n = !1);
  var r = he(e), i = he(e) && xc(e), o = it(e), a = Vt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ae(e) !== "body" || $o(o)) && (l = wc(e)), he(e) ? (f = Vt(e, !0), f.x += e.clientLeft, f.y += e.clientTop) : o && (f.x = ko(o))), {
    x: a.left + l.scrollLeft - f.x,
    y: a.top + l.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}
function Hs(t) {
  var e = Vt(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Hr(t) {
  return Ae(t) === "html" ? t : t.assignedSlot || t.parentNode || (wo(t) ? t.host : null) || it(t);
}
function Ws(t) {
  return ["html", "body", "#document"].indexOf(Ae(t)) >= 0 ? t.ownerDocument.body : he(t) && $o(t) ? t : Ws(Hr(t));
}
function gn(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = Ws(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = _e(r), a = i ? [o].concat(o.visualViewport || [], $o(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(gn(Hr(a)));
}
function $c(t) {
  return ["table", "td", "th"].indexOf(Ae(t)) >= 0;
}
function di(t) {
  return !he(t) || be(t).position === "fixed" ? null : t.offsetParent;
}
function Ec(t) {
  var e = /firefox/i.test(Kr()), n = /Trident/i.test(Kr());
  if (n && he(t)) {
    var r = be(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Hr(t);
  for (wo(i) && (i = i.host); he(i) && ["html", "body"].indexOf(Ae(i)) < 0; ) {
    var o = be(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Wr(t) {
  for (var e = _e(t), n = di(t); n && $c(n) && be(n).position === "static"; )
    n = di(n);
  return n && (Ae(n) === "html" || Ae(n) === "body" && be(n).position === "static") ? e : n || Ec(t) || e;
}
var me = "top", Oe = "bottom", rt = "right", Be = "left", Ir = "auto", Br = [me, Oe, rt, Be], qt = "start", xn = "end", Cc = "clippingParents", Is = "viewport", on = "popper", Sc = "reference", _i = /* @__PURE__ */ Br.reduce(function(t, e) {
  return t.concat([e + "-" + qt, e + "-" + xn]);
}, []), Rc = /* @__PURE__ */ [].concat(Br, [Ir]).reduce(function(t, e) {
  return t.concat([e, e + "-" + qt, e + "-" + xn]);
}, []), Ac = "beforeRead", Oc = "read", Mc = "afterRead", Nc = "beforeMain", Pc = "main", Dc = "afterMain", Lc = "beforeWrite", Tc = "write", jc = "afterWrite", Jr = [Ac, Oc, Mc, Nc, Pc, Dc, Lc, Tc, jc];
function Hc(t) {
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
function Wc(t) {
  var e = Hc(t);
  return Jr.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Ic(t) {
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
var ct = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Bc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', vi = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Uc(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), vi).filter(function(n, r, i) {
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
          Jr.indexOf(e.phase) < 0 && console.error(Ve(ct, e.name, '"phase"', "either " + Jr.join(", "), '"' + String(e.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + vi.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(Ve(Bc, String(e.name), r, r));
      });
    });
  });
}
function Fc(t, e) {
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
function zc(t) {
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
function Vc(t, e) {
  var n = _e(t), r = it(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, f = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = js();
    (u || !u && e === "fixed") && (l = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + ko(t),
    y: f
  };
}
function qc(t) {
  var e, n = it(t), r = xo(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = yt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = yt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + ko(t), f = -r.scrollTop;
  return be(i || n).direction === "rtl" && (l += yt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: f
  };
}
function Yc(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && wo(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Zr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Xc(t, e) {
  var n = Vt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gi(t, e, n) {
  return e === Is ? Zr(Vc(t, n)) : wt(e) ? Xc(e, n) : Zr(qc(it(t)));
}
function Gc(t) {
  var e = gn(Hr(t)), n = ["absolute", "fixed"].indexOf(be(t).position) >= 0, r = n && he(t) ? Wr(t) : t;
  return wt(r) ? e.filter(function(i) {
    return wt(i) && Yc(i, r) && Ae(i) !== "body";
  }) : [];
}
function Kc(t, e, n, r) {
  var i = e === "clippingParents" ? Gc(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(f, u) {
    var s = gi(t, u, r);
    return f.top = yt(s.top, f.top), f.right = lr(s.right, f.right), f.bottom = lr(s.bottom, f.bottom), f.left = yt(s.left, f.left), f;
  }, gi(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Yt(t) {
  return t.split("-")[1];
}
function Bs(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Us(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ue(r) : null, o = r ? Yt(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, f;
  switch (i) {
    case me:
      f = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Oe:
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
  var u = i ? Bs(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case qt:
        f[u] = f[u] - (e[s] / 2 - n[s] / 2);
        break;
      case xn:
        f[u] = f[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return f;
}
function Fs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Jc(t) {
  return Object.assign({}, Fs(), t);
}
function Zc(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function Eo(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, f = l === void 0 ? Cc : l, u = n.rootBoundary, s = u === void 0 ? Is : u, d = n.elementContext, p = d === void 0 ? on : d, c = n.altBoundary, h = c === void 0 ? !1 : c, b = n.padding, _ = b === void 0 ? 0 : b, v = Jc(typeof _ != "number" ? _ : Zc(_, Br)), y = p === on ? Sc : on, w = t.rects.popper, x = t.elements[h ? y : p], k = Kc(wt(x) ? x : x.contextElement || it(t.elements.popper), f, s, a), m = Vt(t.elements.reference), $ = Us({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = Zr(Object.assign({}, w, $)), A = p === on ? E : m, O = {
    top: k.top - A.top + v.top,
    bottom: A.bottom - k.bottom + v.bottom,
    left: k.left - A.left + v.left,
    right: A.right - k.right + v.right
  }, S = t.modifiersData.offset;
  if (p === on && S) {
    var L = S[i];
    Object.keys(O).forEach(function(P) {
      var K = [rt, Oe].indexOf(P) >= 0 ? 1 : -1, H = [me, Oe].indexOf(P) >= 0 ? "y" : "x";
      O[P] += L[H] * K;
    });
  }
  return O;
}
var mi = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Qc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", yi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bi() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ef(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? yi : i;
  return function(l, f, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yi, o),
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
        var y = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, o, s.options, y), s.scrollParents = {
          reference: wt(l) ? gn(l) : l.contextElement ? gn(l.contextElement) : [],
          popper: gn(f)
        };
        var w = Wc(zc([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(S) {
          return S.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = Fc([].concat(w, s.options.modifiers), function(S) {
            var L = S.name;
            return L;
          });
          if (Uc(x), Ue(s.options.placement) === Ir) {
            var k = s.orderedModifiers.find(function(S) {
              var L = S.name;
              return L === "flip";
            });
            k || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = be(f), $ = m.marginTop, E = m.marginRight, A = m.marginBottom, O = m.marginLeft;
          [$, E, A, O].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, y = v.reference, w = v.popper;
          if (!bi(y, w)) {
            process.env.NODE_ENV !== "production" && console.error(mi);
            return;
          }
          s.rects = {
            reference: kc(y, Wr(w), s.options.strategy === "fixed"),
            popper: Hs(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(S) {
            return s.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var x = 0, k = 0; k < s.orderedModifiers.length; k++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(Qc);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, k = -1;
              continue;
            }
            var m = s.orderedModifiers[k], $ = m.fn, E = m.options, A = E === void 0 ? {} : E, O = m.name;
            typeof $ == "function" && (s = $({
              state: s,
              options: A,
              name: O,
              instance: c
            }) || s);
          }
        }
      },
      update: Ic(function() {
        return new Promise(function(_) {
          c.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!bi(l, f))
      return process.env.NODE_ENV !== "production" && console.error(mi), c;
    c.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, y = _.options, w = y === void 0 ? {} : y, x = _.effect;
        if (typeof x == "function") {
          var k = x({
            state: s,
            name: v,
            instance: c,
            options: w
          }), m = function() {
          };
          d.push(k || m);
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
var Ln = {
  passive: !0
};
function tf(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, f = _e(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Ln);
  }), l && f.addEventListener("resize", n.update, Ln), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Ln);
    }), l && f.removeEventListener("resize", n.update, Ln);
  };
}
const nf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tf,
  data: {}
};
function rf(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Us({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const of = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rf,
  data: {}
};
var sf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function af(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: zt(e * i) / i || 0,
    y: zt(n * i) / i || 0
  };
}
function wi(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, f = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, c = p === void 0 ? 0 : p, h = a.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = _.x, b = _.y;
  var v = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), w = Be, x = me, k = window;
  if (u) {
    var m = Wr(n), $ = "clientHeight", E = "clientWidth";
    if (m === _e(n) && (m = it(n), be(m).position !== "static" && l === "absolute" && ($ = "scrollHeight", E = "scrollWidth")), m = m, i === me || (i === Be || i === rt) && o === xn) {
      x = Oe;
      var A = d && m === k && k.visualViewport ? k.visualViewport.height : m[$];
      b -= A - r.height, b *= f ? 1 : -1;
    }
    if (i === Be || (i === me || i === Oe) && o === xn) {
      w = rt;
      var O = d && m === k && k.visualViewport ? k.visualViewport.width : m[E];
      c -= O - r.width, c *= f ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, u && sf), L = s === !0 ? af({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = L.x, b = L.y, f) {
    var P;
    return Object.assign({}, S, (P = {}, P[x] = y ? "0" : "", P[w] = v ? "0" : "", P.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (e = {}, e[x] = y ? b + "px" : "", e[w] = v ? c + "px" : "", e.transform = "", e));
}
function lf(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, l = n.roundOffsets, f = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = be(e.elements.popper).transitionProperty || "";
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
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, wi(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, wi(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const cf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lf,
  data: {}
};
function ff(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !he(o) || !Ae(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function uf(t) {
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
      !he(i) || !Ae(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(f) {
        i.removeAttribute(f);
      }));
    });
  };
}
const pf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ff,
  effect: uf,
  requires: ["computeStyles"]
};
var hf = [nf, of, cf, pf], df = /* @__PURE__ */ ef({
  defaultModifiers: hf
});
function _f(t) {
  return t === "x" ? "y" : "x";
}
function Yn(t, e, n) {
  return yt(t, lr(e, n));
}
function vf(t, e, n) {
  var r = Yn(t, e, n);
  return r > n ? n : r;
}
function gf(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, f = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, c = p === void 0 ? !0 : p, h = n.tetherOffset, b = h === void 0 ? 0 : h, _ = Eo(e, {
    boundary: f,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ue(e.placement), y = Yt(e.placement), w = !y, x = Bs(v), k = _f(x), m = e.modifiersData.popperOffsets, $ = e.rects.reference, E = e.rects.popper, A = typeof b == "function" ? b(Object.assign({}, e.rects, {
    placement: e.placement
  })) : b, O = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), S = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (!!m) {
    if (o) {
      var P, K = x === "y" ? me : Be, H = x === "y" ? Oe : rt, D = x === "y" ? "height" : "width", j = m[x], oe = j + _[K], Z = j - _[H], ve = c ? -E[D] / 2 : 0, ie = y === qt ? $[D] : E[D], ne = y === qt ? -E[D] : -$[D], le = e.elements.arrow, ee = c && le ? Hs(le) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Fs(), T = R[K], B = R[H], W = Yn(0, $[D], ee[D]), te = w ? $[D] / 2 - ve - W - T - O.mainAxis : ie - W - T - O.mainAxis, Me = w ? -$[D] / 2 + ve + W + B + O.mainAxis : ne + W + B + O.mainAxis, ce = e.elements.arrow && Wr(e.elements.arrow), xt = ce ? x === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, st = (P = S == null ? void 0 : S[x]) != null ? P : 0, Kt = j + te - st - xt, U = j + Me - st, Fe = Yn(c ? lr(oe, Kt) : oe, j, c ? yt(Z, U) : Z);
      m[x] = Fe, L[x] = Fe - j;
    }
    if (l) {
      var we, kt = x === "x" ? me : Be, $t = x === "x" ? Oe : rt, J = m[k], Ne = k === "y" ? "height" : "width", Jt = J + _[kt], Zt = J - _[$t], at = [me, Be].indexOf(v) !== -1, Qt = (we = S == null ? void 0 : S[k]) != null ? we : 0, en = at ? Jt : J - $[Ne] - E[Ne] - Qt + O.altAxis, tn = at ? J + $[Ne] + E[Ne] - Qt - O.altAxis : Zt, nn = c && at ? vf(en, J, tn) : Yn(c ? en : Jt, J, c ? tn : Zt);
      m[k] = nn, L[k] = nn - J;
    }
    e.modifiersData[r] = L;
  }
}
const mf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: gf,
  requiresIfExists: ["offset"]
};
var yf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return yf[e];
  });
}
var bf = {
  start: "end",
  end: "start"
};
function xi(t) {
  return t.replace(/start|end/g, function(e) {
    return bf[e];
  });
}
function wf(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, u = f === void 0 ? Rc : f, s = Yt(r), d = s ? l ? _i : _i.filter(function(h) {
    return Yt(h) === s;
  }) : Br, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = p.reduce(function(h, b) {
    return h[b] = Eo(t, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ue(b)], h;
  }, {});
  return Object.keys(c).sort(function(h, b) {
    return c[h] - c[b];
  });
}
function xf(t) {
  if (Ue(t) === Ir)
    return [];
  var e = Xn(t);
  return [xi(t), e, xi(e)];
}
function kf(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, f = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, h = c === void 0 ? !0 : c, b = n.allowedAutoPlacements, _ = e.options.placement, v = Ue(_), y = v === _, w = f || (y || !h ? [Xn(_)] : xf(_)), x = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ue(R) === Ir ? wf(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : R);
    }, []), k = e.rects.reference, m = e.rects.popper, $ = /* @__PURE__ */ new Map(), E = !0, A = x[0], O = 0; O < x.length; O++) {
      var S = x[O], L = Ue(S), P = Yt(S) === qt, K = [me, Oe].indexOf(L) >= 0, H = K ? "width" : "height", D = Eo(e, {
        placement: S,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), j = K ? P ? rt : Be : P ? Oe : me;
      k[H] > m[H] && (j = Xn(j));
      var oe = Xn(j), Z = [];
      if (o && Z.push(D[L] <= 0), l && Z.push(D[j] <= 0, D[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        A = S, E = !1;
        break;
      }
      $.set(S, Z);
    }
    if (E)
      for (var ve = h ? 3 : 1, ie = function(R) {
        var T = x.find(function(B) {
          var W = $.get(B);
          if (W)
            return W.slice(0, R).every(function(te) {
              return te;
            });
        });
        if (T)
          return A = T, "break";
      }, ne = ve; ne > 0; ne--) {
        var le = ie(ne);
        if (le === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = !0, e.placement = A, e.reset = !0);
  }
}
const $f = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ef(t) {
  return (t == null ? void 0 : t.nodeType) !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false";
}
const Cf = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', sn = "show", ki = "dropdown-menu";
var vt, Te;
const yr = class extends bn {
  constructor() {
    super(...arguments);
    C(this, vt, void 0);
    C(this, Te, void 0);
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
        l != null && l.classList.contains(ki) ? o = l : o = (r = i.parentNode) == null ? void 0 : r.querySelector(`.${ki}`);
      }
      if (o)
        M(this, vt, o);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return g(this, vt);
  }
  get popper() {
    return g(this, Te) || M(this, Te, df(this.element, this.menu, {
      modifiers: [mf, $f],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), g(this, Te);
  }
  show(n) {
    this.events.emit("show", this).defaultPrevented || ((n == null ? void 0 : n.hideOthers) !== !1 && yr.getAll().forEach((i) => i !== this ? i.hide() : null), this.menu.classList.add(sn), this.element.classList.add(sn), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var r, i;
    Ef(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((r = g(this, Te)) == null || r.destroy(), M(this, Te, void 0), (i = g(this, vt)) == null || i.classList.remove(sn), this.element.classList.remove(sn), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var n;
    (n = g(this, Te)) == null || n.destroy(), super.destroy();
  }
  static clear(n) {
    n && Ds(n) || yr.getAll().forEach((r) => r.hide());
  }
};
let St = yr;
vt = new WeakMap(), Te = new WeakMap(), F(St, "EVENTS", !0), F(St, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Cf);
  n ? St.ensure(n).toggle() : St.clear(t);
});
var Co, G, zs, Vs, mn, $i, qs = {}, Ys = [], Sf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tt(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Xs(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function N(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Co.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Gn(t, a, r, i, null);
}
function Gn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++zs : i };
  return i == null && G.vnode != null && G.vnode(o), o;
}
function Rf() {
  return { current: null };
}
function So(t) {
  return t.children;
}
function yn(t, e) {
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
function Gs(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Gs(t);
  }
}
function Ei(t) {
  (!t.__d && (t.__d = !0) && mn.push(t) && !cr.__r++ || $i !== G.debounceRendering) && (($i = G.debounceRendering) || setTimeout)(cr);
}
function cr() {
  for (var t; cr.__r = mn.length; )
    t = mn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), mn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = tt({}, o)).__v = o.__v + 1, Qs(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xt(o) : a, o.__h), Of(r, o), o.__e != a && Gs(o)));
    });
}
function Ks(t, e, n, r, i, o, a, l, f, u) {
  var s, d, p, c, h, b, _, v = r && r.__k || Ys, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((c = n.__k[s] = (c = e[s]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Gn(null, c, null, null, c) : Array.isArray(c) ? Gn(So, { children: c }, null, null, null) : c.__b > 0 ? Gn(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = n, c.__b = n.__b + 1, (p = v[s]) === null || p && c.key == p.key && c.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && c.key == p.key && c.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      Qs(t, c, p = p || qs, i, o, a, l, f, u), h = c.__e, (d = c.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, c), _.push(d, c.__c || h, c)), h != null ? (b == null && (b = h), typeof c.type == "function" && c.__k === p.__k ? c.__d = f = Js(c, f, t) : f = Zs(t, c, p, v, h, f), typeof n.type == "function" && (n.__d = f)) : f && p.__e == f && f.parentNode != t && (f = Xt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Xt(r, s + 1)), ta(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      ea(_[s], _[++s], _[++s]);
}
function Js(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? Js(r, e, n) : Zs(n, r, r, i, r.__e, e));
  return e;
}
function Zs(t, e, n, r, i, o) {
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
function Af(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || fr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || fr(t, o, e[o], n[o], r);
}
function Ci(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Sf.test(e) ? n : n + "px";
}
function fr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Ci(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Ci(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Ri : Si, o) : t.removeEventListener(e, o ? Ri : Si, o);
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
function Si(t) {
  this.l[t.type + !1](G.event ? G.event(t) : t);
}
function Ri(t) {
  this.l[t.type + !0](G.event ? G.event(t) : t);
}
function Qs(t, e, n, r, i, o, a, l, f) {
  var u, s, d, p, c, h, b, _, v, y, w, x, k, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = G.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new yn(_, y), s.constructor = m, s.render = Nf), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = tt({}, s.__s)), tt(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, c = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function($) {
              $ && ($.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, c, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = G.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = tt(tt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, c)), k = u != null && u.type === So && u.key == null ? u.props.children : u, Ks(t, Array.isArray(k) ? k : [k], e, n, r, i, o, a, l, f), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mf(n.__e, e, n, r, i, o, a, f);
    (u = G.diffed) && u(e);
  } catch ($) {
    e.__v = null, (f || o != null) && (e.__e = l, e.__h = !!f, o[o.indexOf(l)] = null), G.__e($, e, n);
  }
}
function Of(t, e) {
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
function Mf(t, e, n, r, i, o, a, l) {
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
    if (o = o && Co.call(t.childNodes), u = (d = n.props || qs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Af(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Ks(t, Array.isArray(h) ? h : [h], e, n, r, i && c !== "foreignObject", o, a, o ? o[0] : n.__k && Xt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Xs(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || c === "progress" && !h || c === "option" && h !== d.value) && fr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && fr(t, "checked", h, d.checked, !1));
  }
  return t;
}
function ea(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    G.__e(r, n);
  }
}
function ta(t, e, n) {
  var r, i;
  if (G.unmount && G.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || ea(r, null, e)), (r = t.__c) != null) {
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
      r[i] && ta(r[i], e, typeof t.type != "function");
  n || t.__e == null || Xs(t.__e), t.__e = t.__d = void 0;
}
function Nf(t, e, n) {
  return this.constructor(t, n);
}
Co = Ys.slice, G = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, zs = 0, Vs = function(t) {
  return t != null && t.constructor === void 0;
}, yn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, n), this.props)), t && tt(n, t), t != null && this.__v && (e && this.__h.push(e), Ei(this));
}, yn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ei(this));
}, yn.prototype.render = So, mn = [], cr.__r = 0;
let Pf = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Df(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Ro({ col: t, className: e, height: n, row: r, onRenderCell: i, style: o, outerStyle: a, children: l, outerClass: f, ...u }) {
  var m, $;
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
  }], b = ["dtable-cell-content", e], _ = [($ = l != null ? l : (m = r.data) == null ? void 0 : m[t.name]) != null ? $ : ""], v = i ? i(_, { row: r, col: t }, N) : _, y = [], w = [], x = {}, k = {};
  return v == null || v.forEach((E) => {
    var A;
    if (typeof E == "object" && E && !Vs(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E)) {
      const O = E.outer ? y : w;
      E.html ? O.push(/* @__PURE__ */ N("div", {
        className: I("dtable-cell-html", E.className),
        style: E.style,
        dangerouslySetInnerHTML: { __html: E.html },
        ...(A = E.attrs) != null ? A : {}
      })) : (E.style && Object.assign(E.outer ? s : c, E.style), E.className && (E.outer ? h : b).push(E.className), E.children && O.push(E.children), E.attrs && Object.assign(E.outer ? x : k, E.attrs));
    } else
      w.push(E);
  }), /* @__PURE__ */ N("div", {
    className: I(h),
    style: s,
    "data-col": t.name,
    ...u,
    ...x
  }, w.length > 0 && /* @__PURE__ */ N("div", {
    className: I(b),
    style: c,
    ...k
  }, w), y);
}
function Lf({ col: t, children: e, style: n, ...r }) {
  var o;
  const { sortType: i } = t.setting;
  return /* @__PURE__ */ N(Ro, {
    col: t,
    style: { ...n, ...t.setting.style },
    "data-sort": i || null,
    "data-type": t.type,
    ...r
  }, (o = t.setting.title) != null ? o : t.setting.name, i && /* @__PURE__ */ N("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), e);
}
function zr({ row: t, className: e, top: n = 0, left: r = 0, width: i, height: o, cols: a, CellComponent: l = Ro, onRenderCell: f }) {
  return /* @__PURE__ */ N("div", {
    className: I("dtable-cells", e),
    style: { top: n, left: r, width: i, height: o }
  }, a.map((u) => u.visible ? /* @__PURE__ */ N(l, {
    key: u.name,
    col: u,
    row: t,
    onRenderCell: f
  }) : null));
}
function na({
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
  CellComponent: p = Ro,
  onRenderCell: c,
  style: h,
  ...b
}) {
  let _ = null;
  i != null && i.length && (_ = /* @__PURE__ */ N(zr, {
    className: "dtable-fixed-left",
    cols: i,
    width: l,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ N(zr, {
    className: "dtable-flexable",
    cols: a,
    left: l - d,
    width: u,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ N(zr, {
    className: "dtable-fixed-right",
    cols: o,
    left: l + f,
    width: s,
    row: t,
    CellComponent: p,
    onRenderCell: c
  }));
  const w = { top: n, height: r, lineHeight: `${r - 2}px`, ...h };
  return /* @__PURE__ */ N("div", {
    className: I("dtable-row", e),
    style: w,
    "data-id": t.id,
    ...b
  }, _, v, y);
}
function Tf({ height: t, onRenderRow: e, ...n }) {
  const r = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Lf
  };
  if (e) {
    const i = e({ props: r }, N);
    i && Object.assign(r, i);
  }
  return /* @__PURE__ */ N("div", {
    className: "dtable-header",
    style: { height: t }
  }, /* @__PURE__ */ N(na, {
    ...r
  }));
}
function jf({
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
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ N("div", {
    className: I("dtable-rows", t),
    style: e
  }, r.map((u) => {
    const s = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - a,
      height: o,
      ...f
    }, d = l == null ? void 0 : l({ props: s, row: u }, N);
    return d && Object.assign(s, d), /* @__PURE__ */ N(na, {
      ...s
    });
  }));
}
const ur = /* @__PURE__ */ new Map(), pr = [];
function ra(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && ur.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ur.set(n, t), (e == null ? void 0 : e.buildIn) && !pr.includes(n) && pr.push(n);
}
function Pn(t, e) {
  ra(t, e);
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
function oa(t) {
  return ur.delete(t);
}
function Hf(t) {
  if (typeof t == "string") {
    const e = ur.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function ia(t, e, n) {
  return e.forEach((r) => {
    var o;
    if (!r)
      return;
    const i = Hf(r);
    !i || n.has(i.name) || ((o = i.plugins) != null && o.length && ia(t, i.plugins, n), t.push(i), n.add(i.name));
  }), t;
}
function Wf(t = [], e = !0) {
  return e && pr.length && t.unshift(...pr), t != null && t.length ? ia([], t, /* @__PURE__ */ new Set()) : [];
}
function Ai() {
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
function If(t) {
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
  return i.forEach((b) => {
    var v;
    const _ = [];
    typeof b == "string" && l && l[b] && (b = l[b]), typeof b == "function" ? f ? _.push(...f.call(a, b, c, ...o)) : _.push(...(v = b.call(a, c, ...o)) != null ? v : []) : _.push(b), _.forEach((y) => {
      var w;
      y != null && (typeof y == "object" && !Li(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? c.push(
        /* @__PURE__ */ Nr("div", {
          className: I(y.className),
          style: y.style,
          dangerouslySetInnerHTML: { __html: y.html },
          ...(w = y.attrs) != null ? w : {}
        })
      ) : y.__html ? h.push(y.__html) : (y.style && Object.assign(p, y.style), y.className && d.push(y.className), y.children && c.push(y.children), y.attrs && Object.assign(s, y.attrs)) : c.push(y));
    });
  }), h.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: h } }), [{
    className: I(d),
    style: p,
    ...s
  }, c];
}
function Oi({
  tag: t = "div",
  ...e
}) {
  const [n, r] = If(e);
  return Nr(t, n, ...r);
}
var gt, Nt, Ge, je, Ke, Q, ke, $e, Pt, Sn, Rn, He, Dt, Lt, br, sa, wr, aa, xr, la, kr, ca, An, eo, $r, Er, On, Mn, Cr, Sr, Rr, fa, Ar, ua, Or, pa;
class Qr extends yn {
  constructor(n) {
    var r;
    super(n);
    C(this, br);
    C(this, wr);
    C(this, xr);
    C(this, kr);
    C(this, An);
    C(this, Rr);
    C(this, Ar);
    C(this, Or);
    F(this, "ref", Rf());
    C(this, gt, 0);
    C(this, Nt, void 0);
    C(this, Ge, !1);
    C(this, je, void 0);
    C(this, Ke, void 0);
    C(this, Q, []);
    C(this, ke, void 0);
    C(this, $e, /* @__PURE__ */ new Map());
    C(this, Pt, {});
    C(this, Sn, void 0);
    C(this, Rn, []);
    F(this, "updateLayout", () => {
      g(this, gt) && cancelAnimationFrame(g(this, gt)), M(this, gt, requestAnimationFrame(() => {
        M(this, ke, void 0), this.forceUpdate(), M(this, gt, 0);
      }));
    });
    C(this, He, (n, r) => {
      r = r || n.type;
      const i = g(this, $e).get(r);
      if (!!(i != null && i.length)) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    C(this, Dt, (n) => {
      g(this, He).call(this, n, `window_${n.type}`);
    });
    C(this, Lt, (n) => {
      g(this, He).call(this, n, `document_${n.type}`);
    });
    C(this, $r, (n, r) => {
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
    C(this, Er, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), g(this, Q).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    C(this, On, (n, r, i) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, r, i)), this.options[l] && (n = this.options[l].call(this, n, r, i)), g(this, Q).forEach((f) => {
        f[l] && (n = f[l].call(this, n, r, i));
      }), n;
    });
    C(this, Mn, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    C(this, Cr, (n) => {
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
    C(this, Sr, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    M(this, Nt, (r = n.id) != null ? r : `dtable-${Pf(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, M(this, Ke, Object.freeze(Wf(n.plugins))), g(this, Ke).forEach((i) => {
      var f;
      const { methods: o, data: a, state: l } = i;
      o && Object.entries(o).forEach(([u, s]) => {
        typeof s == "function" && Object.assign(this, { [u]: s.bind(this) });
      }), a && Object.assign(g(this, Pt), a.call(this)), l && Object.assign(this.state, l.call(this)), (f = i.onCreate) == null || f.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = g(this, ke)) == null ? void 0 : n.options) || g(this, je) || Ai();
  }
  get plugins() {
    return g(this, Q);
  }
  get layout() {
    return g(this, ke);
  }
  get id() {
    return g(this, Nt);
  }
  get data() {
    return g(this, Pt);
  }
  get parent() {
    var n, r;
    return (r = this.props.parent) != null ? r : (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  componentWillReceiveProps() {
    M(this, je, void 0);
  }
  componentDidMount() {
    if (g(this, Ge) ? this.forceUpdate() : V(this, An, eo).call(this), g(this, Q).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", g(this, Cr)), this.on("keydown", g(this, Sr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), M(this, Sn, r);
        }
      } else
        this.on("window_resize", this.updateLayout);
    g(this, Q).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    g(this, Ge) ? V(this, An, eo).call(this) : g(this, Q).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = g(this, Sn)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of g(this, $e).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), g(this, Dt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), g(this, Lt)) : n.removeEventListener(i, g(this, He));
    g(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), g(this, Ke).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), M(this, Pt, {}), g(this, $e).clear();
  }
  on(n, r, i) {
    var a;
    i && (n = `${i}_${n}`);
    const o = g(this, $e).get(n);
    o ? o.push(r) : (g(this, $e).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), g(this, Dt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), g(this, Lt)) : (a = this.ref.current) == null || a.addEventListener(n, g(this, He)));
  }
  off(n, r, i) {
    var l;
    i && (n = `${i}_${n}`);
    const o = g(this, $e).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (g(this, $e).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), g(this, Dt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), g(this, Lt)) : (l = this.ref.current) == null || l.removeEventListener(n, g(this, He)));
  }
  emitCustomEvent(n, r) {
    g(this, He).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
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
      const { offsetLeft: b, offsetTop: _ } = n;
      typeof b == "number" && (p = i + b), typeof _ == "number" && (p = o + _);
    }
    const h = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, s - u)), p !== i && (h.scrollLeft = p)), typeof c == "number" && (c = Math.max(0, Math.min(c, a - l)), c !== o && (h.scrollTop = c)), Object.keys(h).length ? (this.setState(h, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, h), r == null || r.call(this, !0);
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
    i === "layout" ? M(this, ke, void 0) : i === "options" && (M(this, ke, void 0), M(this, je, void 0)), o ? this.setState({ ...o }, r) : this.forceUpdate(r);
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
    return (o = Nn(g(this, Rn), n, r, i, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var c;
    const n = V(this, Or, pa).call(this), { className: r, rowHover: i, colHover: o, cellHover: a, bordered: l, striped: f, scrollbarHover: u } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
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
      const b = (_ = h.onRender) == null ? void 0 : _.call(this, n);
      !b || (b.style && Object.assign(s, b.style), b.className && d.push(b.className), b.children && p.push(b.children));
    }), /* @__PURE__ */ N("div", {
      id: g(this, Nt),
      className: I(d),
      style: s,
      ref: this.ref,
      tabIndex: -1
    }, n && V(this, br, sa).call(this, n), n && V(this, wr, aa).call(this, n), n && V(this, xr, la).call(this, n), n && V(this, kr, ca).call(this, n));
  }
}
gt = new WeakMap(), Nt = new WeakMap(), Ge = new WeakMap(), je = new WeakMap(), Ke = new WeakMap(), Q = new WeakMap(), ke = new WeakMap(), $e = new WeakMap(), Pt = new WeakMap(), Sn = new WeakMap(), Rn = new WeakMap(), He = new WeakMap(), Dt = new WeakMap(), Lt = new WeakMap(), br = new WeakSet(), sa = function(n) {
  const { header: r, colsInfo: i, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ N(Tf, {
      scrollLeft: a,
      height: o,
      onRenderCell: g(this, On),
      onRenderRow: g(this, Er),
      ...i
    });
  const l = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ N(Oi, {
    className: "dtable-header",
    style: { height: o },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, wr = new WeakSet(), aa = function(n) {
  const { headerHeight: r, rowsHeight: i, visibleRows: o, rowHeight: a, colsInfo: l, scrollLeft: f, scrollTop: u } = n;
  return /* @__PURE__ */ N(jf, {
    top: r,
    height: i,
    rows: o,
    rowHeight: a,
    scrollLeft: f,
    scrollTop: u,
    onRenderCell: g(this, On),
    onRenderRow: g(this, $r),
    ...l
  });
}, xr = new WeakSet(), la = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const i = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ N(Oi, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, kr = new WeakSet(), ca = function(n) {
  const r = [], { scrollLeft: i, colsInfo: o, scrollTop: a, rowsHeight: l, rowsHeightTotal: f, footerHeight: u } = n, { scrollColsWidth: s, scrollWidth: d } = o, { scrollbarSize: p = 12, horzScrollbarPos: c } = this.options;
  return s > d && r.push(
    /* @__PURE__ */ N(Xo, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: d,
      onScroll: g(this, Mn),
      left: o.fixedLeftWidth,
      bottom: (c === "inside" ? 0 : -p) + u,
      size: p,
      wheelContainer: this.ref
    })
  ), f > l && r.push(
    /* @__PURE__ */ N(Xo, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: f,
      clientSize: l,
      onScroll: g(this, Mn),
      right: 0,
      size: p,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, An = new WeakSet(), eo = function() {
  var n;
  M(this, Ge, !1), (n = this.options.afterRender) == null || n.call(this), g(this, Q).forEach((r) => {
    var i;
    return (i = r.afterRender) == null ? void 0 : i.call(this);
  });
}, $r = new WeakMap(), Er = new WeakMap(), On = new WeakMap(), Mn = new WeakMap(), Cr = new WeakMap(), Sr = new WeakMap(), Rr = new WeakSet(), fa = function() {
  if (g(this, je))
    return !1;
  const r = { ...Ai(), ...g(this, Ke).reduce((i, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(i, a), i;
  }, {}), ...this.props };
  return M(this, je, r), M(this, Q, g(this, Ke).reduce((i, o) => {
    const { when: a, options: l } = o;
    return (!a || a(r)) && (i.push(o), l && Object.assign(r, typeof l == "function" ? l.call(this, r) : l)), i;
  }, [])), M(this, Rn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ar = new WeakSet(), ua = function() {
  var le, ee;
  const { plugins: n } = this;
  let r = g(this, je);
  const i = {
    flex: /* @__PURE__ */ N("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ N("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  n.forEach((R) => {
    var B;
    const T = (B = R.beforeLayout) == null ? void 0 : B.call(this, r);
    T && (r = { ...r, ...T }), Object.assign(i, R.footer);
  });
  const { defaultColWidth: o, minColWidth: a, maxColWidth: l } = r, f = [], u = [], s = [], d = {}, p = [], c = [];
  let h = 0, b = 0, _ = 0;
  r.cols.forEach((R) => {
    if (R.hidden)
      return;
    const {
      name: T,
      type: B = "",
      fixed: W = !1,
      flex: te = !1,
      width: Me = o,
      minWidth: ce = a,
      maxWidth: xt = l,
      ...st
    } = R, Kt = Df(Me, ce, xt), U = {
      name: T,
      type: B,
      setting: {
        name: T,
        type: B,
        fixed: W,
        flex: te,
        width: Me,
        minWidth: ce,
        maxWidth: xt,
        ...st
      },
      flex: W ? 0 : te === !0 ? 1 : typeof te == "number" ? te : 0,
      left: 0,
      width: Kt,
      realWidth: 0,
      visible: !0,
      index: p.length
    };
    n.forEach((Fe) => {
      var kt, $t;
      const we = (kt = Fe.colTypes) == null ? void 0 : kt[B];
      if (we) {
        const J = typeof we == "function" ? we(U) : we;
        J && Object.assign(U.setting, J);
      }
      ($t = Fe.onAddCol) == null || $t.call(this, U);
    }), U.realWidth = U.realWidth || U.width, W === "left" ? (U.left = h, h += U.width, f.push(U)) : W === "right" ? (U.left = b, b += U.width, u.push(U)) : (U.left = _, _ += U.width, s.push(U)), U.flex && c.push(U), p.push(U), d[U.name] = U;
  });
  let v = r.width, y = 0;
  const w = h + _ + b;
  if (typeof v == "function" && (v = v.call(this, w)), v === "auto")
    y = w;
  else if (v === "100%") {
    const { parent: R } = this;
    if (R)
      y = R.clientWidth;
    else {
      y = 0, M(this, Ge, !0);
      return;
    }
  } else
    y = v != null ? v : 0;
  const { data: x, rowKey: k = "id", rowHeight: m } = r, $ = [], E = (R, T, B) => {
    var te, Me;
    const W = { data: B != null ? B : { [k]: R }, id: R, index: $.length, top: 0 };
    if (B || (W.lazy = !0), $.push(W), ((te = r.onAddRow) == null ? void 0 : te.call(this, W, T)) !== !1) {
      for (const ce of n)
        if (((Me = ce.onAddRow) == null ? void 0 : Me.call(this, W, T)) === !1)
          return;
    }
  };
  if (typeof x == "number")
    for (let R = 0; R < x; R++)
      E(`${R}`, R);
  else
    Array.isArray(x) && x.forEach((R, T) => {
      var B;
      typeof R == "object" ? E(`${(B = R[k]) != null ? B : ""}`, T, R) : E(`${R != null ? R : ""}`, T);
    });
  let A = $;
  const O = {};
  if (r.onAddRows) {
    const R = r.onAddRows.call(this, A);
    R && (A = R);
  }
  for (const R of n) {
    const T = (le = R.onAddRows) == null ? void 0 : le.call(this, A);
    T && (A = T);
  }
  A.forEach((R, T) => {
    O[R.id] = R, R.index = T, R.top = R.index * m;
  });
  const { header: S, footer: L } = r, P = S ? r.headerHeight || m : 0, K = L ? r.footerHeight || m : 0;
  let H = r.height, D = 0;
  const j = A.length * m, oe = P + K + j;
  if (typeof H == "function" && (H = H.call(this, oe)), H === "auto")
    D = oe;
  else if (typeof H == "object")
    D = Math.min(H.max, Math.max(H.min, oe));
  else if (H === "100%") {
    const { parent: R } = this;
    if (R)
      D = R.clientHeight;
    else {
      D = 0, M(this, Ge, !0);
      return;
    }
  } else
    D = H;
  const Z = D - P - K, ve = y - h - b, ie = {
    options: r,
    allRows: $,
    width: y,
    height: D,
    rows: A,
    rowsMap: O,
    rowHeight: m,
    rowsHeight: Z,
    rowsHeightTotal: j,
    header: S,
    footer: L,
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
      scrollWidth: ve,
      scrollColsWidth: _,
      fixedRightWidth: b
    }
  }, ne = (ee = r.onLayout) == null ? void 0 : ee.call(this, ie);
  ne && Object.assign(ie, ne), n.forEach((R) => {
    if (R.onLayout) {
      const T = R.onLayout.call(this, ie);
      T && Object.assign(ie, T);
    }
  }), M(this, ke, ie);
}, Or = new WeakSet(), pa = function() {
  (V(this, Rr, fa).call(this) || !g(this, ke)) && V(this, Ar, ua).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: l } } = n;
  if (i.length) {
    const w = a - l;
    if (w > 0) {
      const x = i.reduce((m, $) => m + $.flex, 0);
      let k = 0;
      i.forEach((m) => {
        const $ = Math.min(w - k, Math.ceil(w * (m.flex / x)));
        m.realWidth = $ + m.width, k += m.realWidth;
      });
    } else
      i.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  r = Math.min(Math.max(0, l - a), r);
  let f = 0;
  o.forEach((w) => {
    w.left = f, f += w.realWidth, w.visible = w.left + w.realWidth >= r && w.left <= r + a;
  });
  const { rowsHeightTotal: u, rowsHeight: s, rows: d, rowHeight: p } = n, c = Math.min(Math.max(0, u - s), this.state.scrollTop), h = Math.floor(c / p), b = c + s, _ = Math.min(d.length, Math.ceil(b / p)), v = [], { rowDataGetter: y } = this.options;
  for (let w = h; w < _; w++) {
    const x = d[w];
    x.lazy && y && (x.data = y([x.id])[0], x.lazy = !1), v.push(x);
  }
  return n.visibleRows = v, n.scrollTop = c, n.scrollLeft = r, n;
}, F(Qr, "addPlugin", ra), F(Qr, "removePlugin", oa);
function Mi(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const r = "dtable-col-hover";
  n.querySelectorAll(`.${r}`).forEach((i) => i.classList.remove(r)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(r));
}
const ha = {
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
      Mi(this, r);
    },
    mouseleave() {
      Mi(this, !1);
    }
  }
};
Pn(ha, { buildIn: !0 });
function Bf(t, e) {
  var a, l;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: i } = this.options, o = (f, u) => {
    i && !i.call(this, f) || !!n[f] === u || (u ? n[f] = !0 : delete n[f], r[f] = u);
  };
  if (t === void 0 ? (e === void 0 && (e = !da.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: f }) => {
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
function Uf(t) {
  var e;
  return (e = this.state.checkedRows[t]) != null ? e : !1;
}
function da() {
  var n, r;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, o) => i + (e.call(this, o.id) ? 1 : 0), 0)) : t === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function Ff() {
  return Object.keys(this.state.checkedRows);
}
const _a = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Bf,
    isRowChecked: Uf,
    isAllRowChecked: da,
    getChecks: Ff
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
        /* @__PURE__ */ N("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ N("input", {
          type: "checkbox",
          checked: t
        }))
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, r = [];
      return n && r.push(this.i18n("checkedCountInfo", { selected: n })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ N("div", null, r.join(", "))
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
      const u = this.isRowChecked(r), s = (f = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, u, r)) != null ? f : /* @__PURE__ */ N("input", {
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
      const f = this.isAllRowChecked(), u = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, f, r)) != null ? l : /* @__PURE__ */ N("input", {
        type: "checkbox",
        checked: f
      });
      t.unshift(u), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (!!this.isRowChecked(e.id))
      return { className: I(t.className, "is-checked") };
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
Pn(_a);
function to(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, r = e.children && n && n[t];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const a = to.call(this, o);
    if (a.state !== "expanded") {
      i = !0;
      break;
    }
    o = a.parent;
  }
  return e.state = i ? "hidden" : r ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? to.call(this, e.parent).level + 1 : 0, e;
}
function zf(t, e) {
  var i;
  let n = (i = this.state.collapsedRows) != null ? i : {};
  const { nestedMap: r } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !va.call(this)), e) {
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
function va() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function ga(t, e = 0, n, r = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const o of n) {
    const a = t.get(o);
    !a || (a.level === r && (a.order = e++), (i = a.children) != null && i.length && (e = ga(t, e, a.children, r + 1)));
  }
  return e;
}
function ma(t, e, n, r) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    r[o] = n, ma(t, o, n, r);
  }), i;
}
function ya(t, e, n, r, i) {
  var l;
  const o = t.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((f) => {
    const u = !!(r[f] !== void 0 ? r[f] : i[f]);
    return n === u;
  })) && (r[e] = n), o.parent && ya(t, o.parent, n, r, i);
}
const ba = {
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
        const a = ma(this, i, o, r);
        a != null && a.parent && ya(this, a.parent, o, r, n);
      }), r;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: zf,
    isAllCollapsed: va,
    getNestedRowInfo: to
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
    return t = t.filter((e) => this.getNestedRowInfo(e.id).state !== "hidden"), ga(this.data.nestedMap), t.sort((e, n) => {
      var a, l;
      const r = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), o = ((a = r.order) != null ? a : 0) - ((l = i.order) != null ? l : 0);
      return o === 0 ? e.index - n.index : o;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var l, f, u;
    const { id: r, data: i } = n, { nestedToggle: o } = e.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && t.unshift((f = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, r, e, i)) != null ? f : /* @__PURE__ */ N("a", {
      role: "button",
      className: `dtable-nested-toggle state${a.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ N("span", {
      className: "dtable-nested-toggle-icon"
    }))), a.level) {
      let { nestedIndent: s = o } = e.setting;
      s && (s === !0 && (s = (u = this.options.nestedIndent) != null ? u : 12), t.unshift(/* @__PURE__ */ N("div", {
        className: "dtable-nested-indent",
        style: { width: s * a.level + "px" }
      })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i, o;
    const { id: r } = e;
    return n.setting.nestedToggle && t.unshift((o = (i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, r, n, void 0)) != null ? o : /* @__PURE__ */ N("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ N("span", {
      className: "dtable-nested-toggle-icon"
    }))), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: I(t.className, `is-nested-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = I(t.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
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
Pn(ba);
const Ce = 24 * 60 * 60 * 1e3, re = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Gt = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), no = (t, e = new Date()) => re(t).getFullYear() === re(e).getFullYear(), wa = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Vf = (t, e = new Date()) => {
  t = re(t), e = re(e);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((i + 4) / 7);
}, qf = (t, e) => Gt(re(e), t), Yf = (t, e) => Gt(re(e).getTime() - Ce, t), Xf = (t, e) => Gt(re(e).getTime() + Ce, t), Gf = (t, e) => Gt(re(e).getTime() - 2 * Ce, t), hr = (t, e = "yyyy-MM-dd hh:mm") => {
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
}, Kf = (t, e, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = hr(t, no(t) ? r.month : r.full);
  if (Gt(t, e))
    return i;
  const o = hr(e, no(t, e) ? wa(t, e) ? r.day : r.month : r.full);
  return r.str.replace("{0}", i).replace("{1}", o);
}, Jf = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - Ce * 7;
    case "oneMonth":
      return e - Ce * 31;
    case "threeMonth":
      return e - Ce * 31 * 3;
    case "halfYear":
      return e - Ce * 183;
    case "oneYear":
      return e - Ce * 365;
    case "twoYear":
      return e - 2 * (Ce * 365);
    default:
      return 0;
  }
}, ro = (t, e, n = !0, r = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, ro(t, "day", n, r);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, ro(t, "day", n, r);
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
const xa = {
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
        return t[0] = /* @__PURE__ */ N("a", {
          href: o,
          ...i
        }, t[0]), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: r } = n, { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: a = `${e.name}Avatar` } = e.setting, l = /* @__PURE__ */ N("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ N("img", {
          src: r ? r[a] : ""
        }));
        return i ? t.unshift(l) : t[0] = l, t;
      }
    },
    circleProgress: {
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, a = (n - r) / 2, l = n / 2, f = t[0];
        return t[0] = /* @__PURE__ */ N("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ N("circle", {
          cx: l,
          cy: l,
          r: a,
          "stroke-width": r,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ N("circle", {
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
        }), /* @__PURE__ */ N("text", {
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
        return typeof r == "function" ? t[0] = i === "html" ? { html: r(o) } : r(o) : i === "datetime" ? t[0] = hr(o, r) : i === "html" ? t[0] = { html: Et(r, o) } : t[0] = Et(r, o), t;
      }
    }
  }
};
Pn(xa);
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ha,
  checkable: _a,
  nested: ba,
  rich: xa
}, Symbol.toStringTag, { value: "Module" }));
class Tn extends lo {
}
F(Tn, "Component", Qr), F(Tn, "definePlugin", Pn), F(Tn, "removePlugin", oa), F(Tn, "plugins", Zf);
var Ee, ae;
class Qf {
  constructor(e) {
    C(this, Ee, void 0);
    C(this, ae, void 0);
    M(this, Ee, e), M(this, ae, document.querySelector(e.getAttribute("data-target")) || document.querySelector(e.getAttribute("data-tab")) || document.querySelector(e.getAttribute("href")));
  }
  showTarget() {
    this.addActive(g(this, Ee).parentElement.parentElement, g(this, Ee).parentElement), this.addActive(g(this, ae).parentElement, g(this, ae)), g(this, ae).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    M(this, ae, g(this, Ee)), this.addActive(g(this, ae).parentElement, g(this, ae)), M(this, Ee, document.querySelector(`[href='#${g(this, ae).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${g(this, ae).getAttribute("id")}']`) || document.querySelector(`[data-target='#${g(this, ae).getAttribute("id")}']`)), this.addActive(g(this, Ee).parentElement.parentElement, g(this, Ee).parentElement);
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
Ee = new WeakMap(), ae = new WeakMap();
document.addEventListener("click", function(t) {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Qf(t.target).showTarget());
});
const ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: Ce,
  createDate: re,
  isSameDay: Gt,
  isSameYear: no,
  isSameMonth: wa,
  isSameWeek: Vf,
  isToday: qf,
  isYesterday: Yf,
  isTomorrow: Xf,
  isDBY: Gf,
  formatDate: hr,
  formatDateSpan: Kf,
  getTimeBeforeDesc: Jf,
  calculateTimestamp: ro,
  formatString: Et,
  formatBytes: Da,
  convertBytes: La,
  isObject: Wn,
  mergeDeep: Qn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ga as ActionMenu,
  nu as Avatar,
  Ct as ContextMenu,
  Tn as DTable,
  St as Dropdown,
  io as EventBus,
  rs as Menu,
  Qf as NavTabs,
  Xo as Scrollbar,
  Ha as addI18nMap,
  tu as browser,
  Ta as getLangCode,
  ru as helpers,
  Nn as i18n,
  Vr as nativeEvents,
  ja as setLangCode,
  sl as store
};
