var $a = Object.defineProperty;
var ka = (t, e, n) => e in t ? $a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (ka(t, typeof e != "symbol" ? e + "" : e, n), n), Br = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (Br(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, M = (t, e, n, r) => (Br(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
var V = (t, e, n) => (Br(t, e, "access private method"), n);
var Or, z, Ni, Pi, ln, Ao, Gn = {}, Di = [], Ea = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Li(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Mr(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Or.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Tn(t, a, r, i, null);
}
function Tn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Ni : i };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Ca() {
  return { current: null };
}
function Nr(t) {
  return t.children;
}
function jn(t, e) {
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
function Ti(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ti(t);
  }
}
function Oo(t) {
  (!t.__d && (t.__d = !0) && ln.push(t) && !Kn.__r++ || Ao !== z.debounceRendering) && ((Ao = z.debounceRendering) || setTimeout)(Kn);
}
function Kn() {
  for (var t; Kn.__r = ln.length; )
    t = ln.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ln = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Je({}, o)).__v = o.__v + 1, ro(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Tt(o) : a, o.__h), Ii(r, o), o.__e != a && Ti(o)));
    });
}
function ji(t, e, n, r, i, o, a, l, c, u) {
  var s, d, p, f, h, b, _, v = r && r.__k || Di, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((f = n.__k[s] = (f = e[s]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Tn(null, f, null, null, f) : Array.isArray(f) ? Tn(Nr, { children: f }, null, null, null) : f.__b > 0 ? Tn(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (p = v[s]) === null || p && f.key == p.key && f.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && f.key == p.key && f.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ro(t, f, p = p || Gn, i, o, a, l, c, u), h = f.__e, (d = f.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, f), _.push(d, f.__c || h, f)), h != null ? (b == null && (b = h), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = Hi(f, c, t) : c = Wi(t, f, p, v, h, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != t && (c = Tt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Tt(r, s + 1)), Ui(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Bi(_[s], _[++s], _[++s]);
}
function Hi(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? Hi(r, e, n) : Wi(n, r, r, i, r.__e, e));
  return e;
}
function Wi(t, e, n, r, i, o) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Sa(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || Jn(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || Jn(t, o, e[o], n[o], r);
}
function Mo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ea.test(e) ? n : n + "px";
}
function Jn(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Mo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Mo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Po : No, o) : t.removeEventListener(e, o ? Po : No, o);
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
function No(t) {
  this.l[t.type + !1](z.event ? z.event(t) : t);
}
function Po(t) {
  this.l[t.type + !0](z.event ? z.event(t) : t);
}
function ro(t, e, n, r, i, o, a, l, c) {
  var u, s, d, p, f, h, b, _, v, y, w, x, $, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = z.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new jn(_, y), s.constructor = m, s.render = Aa), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Je({}, s.__s)), Je(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, f = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, f, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = z.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Je(Je({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, f)), $ = u != null && u.type === Nr && u.key == null ? u.props.children : u, ji(t, Array.isArray($) ? $ : [$], e, n, r, i, o, a, l, c), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ra(n.__e, e, n, r, i, o, a, c);
    (u = z.diffed) && u(e);
  } catch (k) {
    e.__v = null, (c || o != null) && (e.__e = l, e.__h = !!c, o[o.indexOf(l)] = null), z.__e(k, e, n);
  }
}
function Ii(t, e) {
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
  var c, u, s, d = n.props, p = e.props, f = e.type, h = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((c = o[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), o = null, l = !1;
  }
  if (f === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && Or.call(t.childNodes), u = (d = n.props || Gn).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Sa(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, ji(t, Array.isArray(h) ? h : [h], e, n, r, i && f !== "foreignObject", o, a, o ? o[0] : n.__k && Tt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Li(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || f === "progress" && !h || f === "option" && h !== d.value) && Jn(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && Jn(t, "checked", h, d.checked, !1));
  }
  return t;
}
function Bi(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    z.__e(r, n);
  }
}
function Ui(t, e, n) {
  var r, i;
  if (z.unmount && z.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Bi(r, null, e)), (r = t.__c) != null) {
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
      r[i] && Ui(r[i], e, typeof t.type != "function");
  n || t.__e == null || Li(t.__e), t.__e = t.__d = void 0;
}
function Aa(t, e, n) {
  return this.constructor(t, n);
}
function Oa(t, e, n) {
  var r, i, o;
  z.__ && z.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, o = [], ro(e, t = (!r && n || e).__k = Mr(Nr, null, [t]), i || Gn, Gn, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Or.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r), Ii(o, t);
}
Or = Di.slice, z = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Ni = 0, Pi = function(t) {
  return t != null && t.constructor === void 0;
}, jn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this.__h.push(e), Oo(this));
}, jn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Oo(this));
}, jn.prototype.render = Nr, ln = [], Kn.__r = 0;
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
const zr = /* @__PURE__ */ new Set([
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
class oo extends Ma {
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
    return typeof e == "string" && (zr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(oo.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (zr.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var De, xn, ft, an;
class Do extends oo {
  constructor(n = "", r) {
    super(n);
    C(this, ft);
    C(this, De, /* @__PURE__ */ new Map());
    C(this, xn, void 0);
    M(this, xn, r == null ? void 0 : r.customEventSuffix);
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
De = new WeakMap(), xn = new WeakMap(), ft = new WeakSet(), an = function(n) {
  const r = g(this, xn);
  return zr.has(n) || typeof r != "string" || n.endsWith(r) ? n : `${n}${r}`;
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
function Hn(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Zn(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Hn(t) && Hn(n))
    for (const r in n)
      Hn(n[r]) ? (t[r] || Object.assign(t, { [r]: {} }), Zn(t[r], n[r])) : Object.assign(t, { [r]: n[r] });
  return Zn(t, ...e);
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
var io = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(io || {});
function Da(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / io[n]).toFixed(e) + n);
}
const La = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const r = n[1];
  return t = t.replace(r, ""), Number.parseInt(t, 10) * io[r];
};
var Oi, Mi;
let so = (Mi = (Oi = document.documentElement.getAttribute("lang")) == null ? void 0 : Oi.toLowerCase()) != null ? Mi : "zh_cn", Ye;
function Ta() {
  return so;
}
function ja(t) {
  so = t.toLowerCase();
}
function Ha(t, e) {
  Ye || (Ye = {}), typeof t == "string" && (t = { [t]: e != null ? e : {} }), Zn(Ye, t);
}
function Mn(t, e, n, r, i, o) {
  Array.isArray(t) ? Ye && t.unshift(Ye) : t = Ye ? [Ye, t] : [t], typeof n == "string" && (o = i, i = r, r = n, n = void 0);
  const a = i || so;
  let l;
  for (const c of t) {
    if (!c)
      continue;
    const u = c[a];
    if (!u)
      continue;
    const s = o && c === Ye ? `${o}.${e}` : e;
    if (l = Pa(u, s), l !== void 0)
      break;
  }
  return l === void 0 ? r : n ? Et(l, ...Array.isArray(n) ? n : [n]) : l;
}
Mn.addLang = Ha;
Mn.getCode = Ta;
Mn.setCode = ja;
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
class yn {
  constructor(e, n) {
    C(this, Le, void 0);
    C(this, Rt, void 0);
    C(this, se, void 0);
    var r;
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && M(this, se, new Do(e, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, Le, { ...this.constructor.DEFAULT, ...e instanceof HTMLElement ? Wa(e.dataset) : null, ...n }), this.constructor.all.set(e, this), M(this, Rt, e), this.init(), (r = g(this, se)) == null || r.emit("inited", this);
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
    let r = Do.createEvent(e, n);
    const i = `on${r.type.replace(`.${this.constructor.KEY}`, "")}`, o = g(this, Le)[i];
    return o && o(r) === !1 && (r.preventDefault(), r.stopPropagation()), r = (a = g(this, se)) == null ? void 0 : a.emit(r), r;
  }
  i18n(e, n, r) {
    var i;
    return (i = Mn(g(this, Le).i18n, e, n, r, this.options.lang, this.constructor.NAME)) != null ? i : `{i18n:${e}}`;
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
Le = new WeakMap(), Rt = new WeakMap(), se = new WeakMap(), F(yn, "EVENTS", !1), F(yn, "allComponents", /* @__PURE__ */ new Map());
class ao extends yn {
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
    Oa(/* @__PURE__ */ Mr(r, {
      ref: this.ref,
      ...this.setOptions(n)
    }), this.element);
  }
}
var lo, q, Fi, zi, cn, Lo, Vi = {}, qi = [], Ia = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Yi(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ue(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? lo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Wn(t, a, r, i, null);
}
function Wn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Fi : i };
  return i == null && q.vnode != null && q.vnode(o), o;
}
function Ba() {
  return { current: null };
}
function co(t) {
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
function Xi(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xi(t);
  }
}
function To(t) {
  (!t.__d && (t.__d = !0) && cn.push(t) && !Qn.__r++ || Lo !== q.debounceRendering) && ((Lo = q.debounceRendering) || setTimeout)(Qn);
}
function Qn() {
  for (var t; Qn.__r = cn.length; )
    t = cn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), cn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Ze({}, o)).__v = o.__v + 1, Zi(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? jt(o) : a, o.__h), Fa(r, o), o.__e != a && Xi(o)));
    });
}
function Gi(t, e, n, r, i, o, a, l, c, u) {
  var s, d, p, f, h, b, _, v = r && r.__k || qi, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((f = n.__k[s] = (f = e[s]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Wn(null, f, null, null, f) : Array.isArray(f) ? Wn(co, { children: f }, null, null, null) : f.__b > 0 ? Wn(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (p = v[s]) === null || p && f.key == p.key && f.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && f.key == p.key && f.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      Zi(t, f, p = p || Vi, i, o, a, l, c, u), h = f.__e, (d = f.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, f), _.push(d, f.__c || h, f)), h != null ? (b == null && (b = h), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = Ki(f, c, t) : c = Ji(t, f, p, v, h, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != t && (c = jt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = jt(r, s + 1)), es(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      Qi(_[s], _[++s], _[++s]);
}
function Ki(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? Ki(r, e, n) : Ji(n, r, r, i, r.__e, e));
  return e;
}
function Ji(t, e, n, r, i, o) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Ua(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || er(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || er(t, o, e[o], n[o], r);
}
function jo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ia.test(e) ? n : n + "px";
}
function er(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || jo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || jo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Wo : Ho, o) : t.removeEventListener(e, o ? Wo : Ho, o);
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
function Ho(t) {
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Wo(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function Zi(t, e, n, r, i, o, a, l, c) {
  var u, s, d, p, f, h, b, _, v, y, w, x, $, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = q.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new fn(_, y), s.constructor = m, s.render = Va), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ze({}, s.__s)), Ze(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, f = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, f, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = q.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Ze(Ze({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, f)), $ = u != null && u.type === co && u.key == null ? u.props.children : u, Gi(t, Array.isArray($) ? $ : [$], e, n, r, i, o, a, l, c), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = za(n.__e, e, n, r, i, o, a, c);
    (u = q.diffed) && u(e);
  } catch (k) {
    e.__v = null, (c || o != null) && (e.__e = l, e.__h = !!c, o[o.indexOf(l)] = null), q.__e(k, e, n);
  }
}
function Fa(t, e) {
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
function za(t, e, n, r, i, o, a, l) {
  var c, u, s, d = n.props, p = e.props, f = e.type, h = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((c = o[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), o = null, l = !1;
  }
  if (f === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && lo.call(t.childNodes), u = (d = n.props || Vi).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ua(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Gi(t, Array.isArray(h) ? h : [h], e, n, r, i && f !== "foreignObject", o, a, o ? o[0] : n.__k && jt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Yi(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || f === "progress" && !h || f === "option" && h !== d.value) && er(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && er(t, "checked", h, d.checked, !1));
  }
  return t;
}
function Qi(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    q.__e(r, n);
  }
}
function es(t, e, n) {
  var r, i;
  if (q.unmount && q.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Qi(r, null, e)), (r = t.__c) != null) {
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
      r[i] && es(r[i], e, typeof t.type != "function");
  n || t.__e == null || Yi(t.__e), t.__e = t.__d = void 0;
}
function Va(t, e, n) {
  return this.constructor(t, n);
}
lo = qi.slice, q = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Fi = 0, zi = function(t) {
  return t != null && t.constructor === void 0;
}, fn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this.__h.push(e), To(this));
}, fn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), To(this));
}, fn.prototype.render = co, cn = [], Qn.__r = 0;
const I = (...t) => t.map((e) => Array.isArray(e) ? I(...e) : typeof e == "function" ? I(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((n) => {
  const r = e[n];
  return typeof r == "function" ? !!r() : !!r;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" ");
function qa({
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
function ts({
  component: t = "a",
  className: e,
  children: n,
  attrs: r,
  url: i,
  disabled: o,
  active: a,
  icon: l,
  text: c,
  target: u,
  trailingIcon: s,
  hint: d
}) {
  const p = [
    typeof l == "string" ? /* @__PURE__ */ ue("i", {
      class: `icon ${l}`
    }) : l,
    /* @__PURE__ */ ue("span", {
      className: "text"
    }, c),
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
    ...r
  }, ...p);
}
function Ya({
  component: t = "div",
  className: e,
  text: n,
  attrs: r,
  children: i
}) {
  return ue(t, {
    className: I(e),
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
  children: a
}) {
  return ue(t, {
    className: I(e),
    style: { width: r, height: r, flex: i, ...n },
    ...o
  }, a);
}
const Ga = {
  divider: qa,
  item: ts,
  heading: Ya,
  space: Xa
};
class ns extends fn {
  constructor() {
    super(...arguments);
    F(this, "ref", Ba());
  }
  get $() {
    return this.ref.current;
  }
  get name() {
    var n;
    return (n = this.props.name) != null ? n : this.constructor.name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  handleItemClick(n, r, i, o) {
    i && i.call(o.target, o);
    const { onClickItem: a } = this.props;
    a && a.call(this, { item: n, index: r, event: o });
  }
  beforeRender() {
    var i;
    const n = { ...this.props }, r = (i = n.beforeRender) == null ? void 0 : i.call(this, n);
    return r && Object.assign(n, r), typeof n.items == "function" && (n.items = n.items.call(this)), n;
  }
  onRenderItem(n, r) {
    const { type: i = "item", component: o, key: a = r, rootAttrs: l, rootClass: c, rootStyle: u, ...s } = n, d = (typeof o == "string" ? !1 : o) || Ga[i] || ts;
    return Object.assign(s, {
      component: typeof o == "string" ? o : void 0,
      type: i
    }), /* @__PURE__ */ ue("li", {
      className: I(c) || void 0,
      style: u,
      ...l,
      key: a
    }, /* @__PURE__ */ ue(d, {
      ...s
    }));
  }
  renderItem(n, r, i) {
    var s;
    const { itemRender: o, defaultItemProps: a, onClickItem: l } = n, c = { key: i, ...r }, u = (s = c.type) != null ? s : "item";
    if (a && Object.assign(c, a[u]), l && (c.onClick = this.handleItemClick.bind(this, c, i, r.onClick)), c.className = I([`${this.name}-${u}`, c.className]), o) {
      if (typeof o == "object") {
        const d = o[u];
        if (d)
          return /* @__PURE__ */ ue(d, {
            ...c
          });
      } else if (typeof o == "function") {
        const d = o.call(this, c, ue);
        if (zi(d))
          return d;
        typeof d == "object" && Object.assign(c, d);
      }
    }
    return this.onRenderItem(c, i);
  }
  render() {
    const n = this.beforeRender(), {
      name: r,
      style: i,
      defaultItemProps: o,
      className: a,
      items: l,
      children: c,
      itemRender: u,
      onClickItem: s,
      beforeRender: d,
      afterRender: p,
      beforeDestroy: f,
      ...h
    } = n;
    return /* @__PURE__ */ ue("menu", {
      class: I(this.name, a),
      ...h,
      ref: this.ref
    }, l && l.map(this.renderItem.bind(this, n)), c);
  }
}
class Ka extends ao {
}
F(Ka, "Component", ns);
class Ja extends ns {
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((r) => r.icon)), n && (e.className = I(e.className, "has-icons")), e;
  }
}
class rs extends ao {
}
F(rs, "Component", Ja);
var fo, Y, os, un, Io, is = {}, ss = [], Za = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function as(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Bo(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? fo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return In(t, a, r, i, null);
}
function In(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++os : i };
  return i == null && Y.vnode != null && Y.vnode(o), o;
}
function uo(t) {
  return t.children;
}
function pn(t, e) {
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
function Uo(t) {
  (!t.__d && (t.__d = !0) && un.push(t) && !tr.__r++ || Io !== Y.debounceRendering) && ((Io = Y.debounceRendering) || setTimeout)(tr);
}
function tr() {
  for (var t; tr.__r = un.length; )
    t = un.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), un = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = Qe({}, o)).__v = o.__v + 1, ps(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Ht(o) : a, o.__h), el(r, o), o.__e != a && ls(o)));
    });
}
function cs(t, e, n, r, i, o, a, l, c, u) {
  var s, d, p, f, h, b, _, v = r && r.__k || ss, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((f = n.__k[s] = (f = e[s]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? In(null, f, null, null, f) : Array.isArray(f) ? In(uo, { children: f }, null, null, null) : f.__b > 0 ? In(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (p = v[s]) === null || p && f.key == p.key && f.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && f.key == p.key && f.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      ps(t, f, p = p || is, i, o, a, l, c, u), h = f.__e, (d = f.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, f), _.push(d, f.__c || h, f)), h != null ? (b == null && (b = h), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = fs(f, c, t) : c = us(t, f, p, v, h, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != t && (c = Ht(p));
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
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Qa(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || nr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || nr(t, o, e[o], n[o], r);
}
function Fo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Za.test(e) ? n : n + "px";
}
function nr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Fo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Fo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Vo : zo, o) : t.removeEventListener(e, o ? Vo : zo, o);
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
function zo(t) {
  this.l[t.type + !1](Y.event ? Y.event(t) : t);
}
function Vo(t) {
  this.l[t.type + !0](Y.event ? Y.event(t) : t);
}
function ps(t, e, n, r, i, o, a, l, c) {
  var u, s, d, p, f, h, b, _, v, y, w, x, $, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = Y.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new pn(_, y), s.constructor = m, s.render = nl), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, f = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, f, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = Y.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = Qe(Qe({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, f)), $ = u != null && u.type === uo && u.key == null ? u.props.children : u, cs(t, Array.isArray($) ? $ : [$], e, n, r, i, o, a, l, c), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = tl(n.__e, e, n, r, i, o, a, c);
    (u = Y.diffed) && u(e);
  } catch (k) {
    e.__v = null, (c || o != null) && (e.__e = l, e.__h = !!c, o[o.indexOf(l)] = null), Y.__e(k, e, n);
  }
}
function el(t, e) {
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
function tl(t, e, n, r, i, o, a, l) {
  var c, u, s, d = n.props, p = e.props, f = e.type, h = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((c = o[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), o = null, l = !1;
  }
  if (f === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && fo.call(t.childNodes), u = (d = n.props || is).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Qa(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, cs(t, Array.isArray(h) ? h : [h], e, n, r, i && f !== "foreignObject", o, a, o ? o[0] : n.__k && Ht(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && as(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || f === "progress" && !h || f === "option" && h !== d.value) && nr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && nr(t, "checked", h, d.checked, !1));
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
function nl(t, e, n) {
  return this.constructor(t, n);
}
fo = ss.slice, Y = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, os = 0, pn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this.__h.push(e), Uo(this));
}, pn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Uo(this));
}, pn.prototype.render = uo, un = [], tr.__r = 0;
var ut, pt;
class qo extends pn {
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
      const i = r.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(c * l / a), n.preventDefault();
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
      top: c,
      bottom: u,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: p } = this, { dragStart: f } = this.state, h = {
      left: l,
      top: c,
      bottom: u,
      right: s,
      ...a
    }, b = {};
    return r === "horz" ? (h.height = i, h.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, p) * (n - b.width) / d)) : (h.width = i, h.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, p) * (n - b.height) / d)), /* @__PURE__ */ Bo("div", {
      className: I("scrollbar", o, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": f
      }),
      style: h,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ Bo("div", {
      className: "scrollbar-bar",
      style: b,
      onMouseDown: this._handleMouseDown
    }));
  }
}
ut = new WeakMap(), pt = new WeakMap();
function rl(t) {
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
function ol(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function il(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const r = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return r.left >= 0 && r.top >= 0 && r.left + r.width <= o && r.top + r.height <= i;
  const a = r.top <= i && r.top + r.height >= 0, l = r.left <= o && r.left + r.width >= 0;
  return a && l;
}
const nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: rl,
  domReady: ol,
  isElementVisible: il,
  classes: I
}, Symbol.toStringTag, { value: "Module" }));
let sl = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var $n, Xe, xe, At, Ot, Bn;
const Ro = class {
  constructor(e, n = "local") {
    C(this, Ot);
    C(this, $n, void 0);
    C(this, Xe, void 0);
    C(this, xe, void 0);
    C(this, At, void 0);
    M(this, $n, n), M(this, Xe, `ZUI_STORE:${e != null ? e : sl()}`), M(this, xe, n === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return g(this, $n);
  }
  get session() {
    return this.type === "session" ? this : (g(this, At) || M(this, At, new Ro(g(this, Xe), "session")), g(this, At));
  }
  get(e, n) {
    const r = g(this, xe).getItem(V(this, Ot, Bn).call(this, e));
    return typeof r == "string" ? JSON.parse(r) : r != null ? r : n;
  }
  set(e, n) {
    if (n == null)
      return this.remove(e);
    g(this, xe).setItem(V(this, Ot, Bn).call(this, e), JSON.stringify(n));
  }
  remove(e) {
    g(this, xe).removeItem(V(this, Ot, Bn).call(this, e));
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
let rr = Ro;
$n = new WeakMap(), Xe = new WeakMap(), xe = new WeakMap(), At = new WeakMap(), Ot = new WeakSet(), Bn = function(e) {
  return `${g(this, Xe)}:${e}`;
};
const al = new rr("DEFAULT");
function ll(t, e = "local") {
  return new rr(t, e);
}
Object.assign(al, { create: ll });
var po, X, _s, hn, Yo, vs = {}, gs = [], cl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ms(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Xo(t, e, n) {
  var r, i, o, a = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? po.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Un(t, a, r, i, null);
}
function Un(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_s : i };
  return i == null && X.vnode != null && X.vnode(o), o;
}
function ho(t) {
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
function Go(t) {
  (!t.__d && (t.__d = !0) && hn.push(t) && !or.__r++ || Yo !== X.debounceRendering) && ((Yo = X.debounceRendering) || setTimeout)(or);
}
function or() {
  for (var t; or.__r = hn.length; )
    t = hn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), hn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = et({}, o)).__v = o.__v + 1, $s(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Wt(o) : a, o.__h), ul(r, o), o.__e != a && ys(o)));
    });
}
function bs(t, e, n, r, i, o, a, l, c, u) {
  var s, d, p, f, h, b, _, v = r && r.__k || gs, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((f = n.__k[s] = (f = e[s]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Un(null, f, null, null, f) : Array.isArray(f) ? Un(ho, { children: f }, null, null, null) : f.__b > 0 ? Un(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (p = v[s]) === null || p && f.key == p.key && f.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && f.key == p.key && f.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      $s(t, f, p = p || vs, i, o, a, l, c, u), h = f.__e, (d = f.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, f), _.push(d, f.__c || h, f)), h != null ? (b == null && (b = h), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = ws(f, c, t) : c = xs(t, f, p, v, h, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != t && (c = Wt(p));
    }
  for (n.__e = b, s = y; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Wt(r, s + 1)), Es(v[s], v[s]));
  if (_)
    for (s = 0; s < _.length; s++)
      ks(_[s], _[++s], _[++s]);
}
function ws(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? ws(r, e, n) : xs(n, r, r, i, r.__e, e));
  return e;
}
function xs(t, e, n, r, i, o) {
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function fl(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || ir(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || ir(t, o, e[o], n[o], r);
}
function Ko(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || cl.test(e) ? n : n + "px";
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
            n && e in n || Ko(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Ko(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Zo : Jo, o) : t.removeEventListener(e, o ? Zo : Jo, o);
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
function Jo(t) {
  this.l[t.type + !1](X.event ? X.event(t) : t);
}
function Zo(t) {
  this.l[t.type + !0](X.event ? X.event(t) : t);
}
function $s(t, e, n, r, i, o, a, l, c) {
  var u, s, d, p, f, h, b, _, v, y, w, x, $, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = X.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new dn(_, y), s.constructor = m, s.render = hl), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = et({}, s.__s)), et(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, f = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, f, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = X.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = et(et({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, f)), $ = u != null && u.type === ho && u.key == null ? u.props.children : u, bs(t, Array.isArray($) ? $ : [$], e, n, r, i, o, a, l, c), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = pl(n.__e, e, n, r, i, o, a, c);
    (u = X.diffed) && u(e);
  } catch (k) {
    e.__v = null, (c || o != null) && (e.__e = l, e.__h = !!c, o[o.indexOf(l)] = null), X.__e(k, e, n);
  }
}
function ul(t, e) {
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
function pl(t, e, n, r, i, o, a, l) {
  var c, u, s, d = n.props, p = e.props, f = e.type, h = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((c = o[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), o = null, l = !1;
  }
  if (f === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && po.call(t.childNodes), u = (d = n.props || vs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (fl(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, bs(t, Array.isArray(h) ? h : [h], e, n, r, i && f !== "foreignObject", o, a, o ? o[0] : n.__k && Wt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && ms(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || f === "progress" && !h || f === "option" && h !== d.value) && ir(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && ir(t, "checked", h, d.checked, !1));
  }
  return t;
}
function ks(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    X.__e(r, n);
  }
}
function Es(t, e, n) {
  var r, i;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || ks(r, null, e)), (r = t.__c) != null) {
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
function hl(t, e, n) {
  return this.constructor(t, n);
}
po = gs.slice, X = { __e: function(t, e, n, r) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, _s = 0, dn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof t == "function" && (t = t(et({}, n), this.props)), t && et(n, t), t != null && this.__v && (e && this.__h.push(e), Go(this));
}, dn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Go(this));
}, dn.prototype.render = ho, hn = [], or.__r = 0;
class ru extends dn {
  render() {
    const { size: e, rounded: n, className: r, style: i, src: o, text: a, children: l, ...c } = this.props, u = [r], s = { ...i };
    let d = null;
    return o ? d = /* @__PURE__ */ Xo("img", {
      src: o,
      alt: a
    }) : d = a, typeof e == "number" ? (s.width = e, s.height = e) : typeof e == "string" && u.push(`avatar-${e}`), typeof n == "string" && u.push(`rounded-${n}`), /* @__PURE__ */ Xo("div", {
      className: I(u),
      style: s,
      ...c
    }, d, l);
  }
}
function dl() {
  const t = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
}
function _l() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function vl(t, e) {
  dl(), t.classList.add("block"), Qo(t, e), t.onclick = (n) => gl(n, t), window.addEventListener("resize", () => {
    Qo(t, e);
  });
}
function Cs(t) {
  var e;
  _l(), (e = t.classList) == null || e.remove("block");
}
function Qo(t, e) {
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
function gl(t, e) {
  t.target.closest("[data-dismiss=modal]") && (t.stopPropagation(), Cs(e));
}
function ml(t) {
  var e, n;
  return t instanceof HTMLAnchorElement ? (n = (e = (t.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : e.groups) == null ? void 0 : n.selector : t.dataset.target;
}
document.addEventListener("click", (t) => {
  const e = t.target, n = e.closest("[data-toggle=modal]");
  if (n) {
    const r = ml(n);
    if (!r)
      return;
    const i = document.querySelector(r);
    if (!i)
      return;
    vl(i, n.dataset.position || "fit");
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
function _o(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = de(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var mt = Math.max, sr = Math.min, It = Math.round;
function Vr() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ss() {
  return !/^((?!chrome|android).)*safari/i.test(Vr());
}
function Bt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && pe(t) && (i = t.offsetWidth > 0 && It(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && It(r.height) / t.offsetHeight || 1);
  var a = bt(t) ? de(t) : window, l = a.visualViewport, c = !Ss() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, s = (r.top + (c && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
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
function vo(t) {
  var e = de(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function yl(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function bl(t) {
  return t === de(t) || !pe(t) ? vo(t) : yl(t);
}
function Se(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ot(t) {
  return ((bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function go(t) {
  return Bt(ot(t)).left + vo(t).scrollLeft;
}
function ye(t) {
  return de(t).getComputedStyle(t);
}
function mo(t) {
  var e = ye(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function wl(t) {
  var e = t.getBoundingClientRect(), n = It(e.width) / t.offsetWidth || 1, r = It(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function xl(t, e, n) {
  n === void 0 && (n = !1);
  var r = pe(e), i = pe(e) && wl(e), o = ot(e), a = Bt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Se(e) !== "body" || mo(o)) && (l = bl(e)), pe(e) ? (c = Bt(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : o && (c.x = go(o))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
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
function Pr(t) {
  return Se(t) === "html" ? t : t.assignedSlot || t.parentNode || (_o(t) ? t.host : null) || ot(t);
}
function As(t) {
  return ["html", "body", "#document"].indexOf(Se(t)) >= 0 ? t.ownerDocument.body : pe(t) && mo(t) ? t : As(Pr(t));
}
function _n(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = As(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = de(r), a = i ? [o].concat(o.visualViewport || [], mo(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(_n(Pr(a)));
}
function $l(t) {
  return ["table", "td", "th"].indexOf(Se(t)) >= 0;
}
function ei(t) {
  return !pe(t) || ye(t).position === "fixed" ? null : t.offsetParent;
}
function kl(t) {
  var e = /firefox/i.test(Vr()), n = /Trident/i.test(Vr());
  if (n && pe(t)) {
    var r = ye(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Pr(t);
  for (_o(i) && (i = i.host); pe(i) && ["html", "body"].indexOf(Se(i)) < 0; ) {
    var o = ye(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Dr(t) {
  for (var e = de(t), n = ei(t); n && $l(n) && ye(n).position === "static"; )
    n = ei(n);
  return n && (Se(n) === "html" || Se(n) === "body" && ye(n).position === "static") ? e : n || kl(t) || e;
}
var ge = "top", Re = "bottom", nt = "right", We = "left", Lr = "auto", Tr = [ge, Re, nt, We], Ut = "start", bn = "end", El = "clippingParents", Os = "viewport", rn = "popper", Cl = "reference", ti = /* @__PURE__ */ Tr.reduce(function(t, e) {
  return t.concat([e + "-" + Ut, e + "-" + bn]);
}, []), Sl = /* @__PURE__ */ [].concat(Tr, [Lr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Ut, e + "-" + bn]);
}, []), Rl = "beforeRead", Al = "read", Ol = "afterRead", Ml = "beforeMain", Nl = "main", Pl = "afterMain", Dl = "beforeWrite", Ll = "write", Tl = "afterWrite", qr = [Rl, Al, Ol, Ml, Nl, Pl, Dl, Ll, Tl];
function jl(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = e.get(l);
        c && i(c);
      }
    }), r.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function Hl(t) {
  var e = jl(t);
  return qr.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Wl(t) {
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
var lt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Il = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ni = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Bl(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), ni).filter(function(n, r, i) {
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
          qr.indexOf(e.phase) < 0 && console.error(ze(lt, e.name, '"phase"', "either " + qr.join(", "), '"' + String(e.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + ni.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(ze(Il, String(e.name), r, r));
      });
    });
  });
}
function Ul(t, e) {
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
function Fl(t) {
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
function zl(t, e) {
  var n = de(t), r = ot(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = Ss();
    (u || !u && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + go(t),
    y: c
  };
}
function Vl(t) {
  var e, n = ot(t), r = vo(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = mt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = mt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + go(t), c = -r.scrollTop;
  return ye(i || n).direction === "rtl" && (l += mt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ql(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && _o(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Yl(t, e) {
  var n = Bt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ri(t, e, n) {
  return e === Os ? Yr(zl(t, n)) : bt(e) ? Yl(e, n) : Yr(Vl(ot(t)));
}
function Xl(t) {
  var e = _n(Pr(t)), n = ["absolute", "fixed"].indexOf(ye(t).position) >= 0, r = n && pe(t) ? Dr(t) : t;
  return bt(r) ? e.filter(function(i) {
    return bt(i) && ql(i, r) && Se(i) !== "body";
  }) : [];
}
function Gl(t, e, n, r) {
  var i = e === "clippingParents" ? Xl(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(c, u) {
    var s = ri(t, u, r);
    return c.top = mt(s.top, c.top), c.right = sr(s.right, c.right), c.bottom = sr(s.bottom, c.bottom), c.left = mt(s.left, c.left), c;
  }, ri(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ft(t) {
  return t.split("-")[1];
}
function Ms(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ns(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ie(r) : null, o = r ? Ft(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, c;
  switch (i) {
    case ge:
      c = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Re:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case nt:
      c = {
        x: e.x + e.width,
        y: l
      };
      break;
    case We:
      c = {
        x: e.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var u = i ? Ms(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case Ut:
        c[u] = c[u] - (e[s] / 2 - n[s] / 2);
        break;
      case bn:
        c[u] = c[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return c;
}
function Ps() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kl(t) {
  return Object.assign({}, Ps(), t);
}
function Jl(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function yo(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, c = l === void 0 ? El : l, u = n.rootBoundary, s = u === void 0 ? Os : u, d = n.elementContext, p = d === void 0 ? rn : d, f = n.altBoundary, h = f === void 0 ? !1 : f, b = n.padding, _ = b === void 0 ? 0 : b, v = Kl(typeof _ != "number" ? _ : Jl(_, Tr)), y = p === rn ? Cl : rn, w = t.rects.popper, x = t.elements[h ? y : p], $ = Gl(bt(x) ? x : x.contextElement || ot(t.elements.popper), c, s, a), m = Bt(t.elements.reference), k = Ns({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = Yr(Object.assign({}, w, k)), A = p === rn ? E : m, O = {
    top: $.top - A.top + v.top,
    bottom: A.bottom - $.bottom + v.bottom,
    left: $.left - A.left + v.left,
    right: A.right - $.right + v.right
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
var oi = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Zl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ii = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function si() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ql(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? ii : i;
  return function(l, c, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ii, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, f = {
      state: s,
      setOptions: function(v) {
        var y = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, o, s.options, y), s.scrollParents = {
          reference: bt(l) ? _n(l) : l.contextElement ? _n(l.contextElement) : [],
          popper: _n(c)
        };
        var w = Hl(Fl([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(S) {
          return S.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = Ul([].concat(w, s.options.modifiers), function(S) {
            var L = S.name;
            return L;
          });
          if (Bl(x), Ie(s.options.placement) === Lr) {
            var $ = s.orderedModifiers.find(function(S) {
              var L = S.name;
              return L === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = ye(c), k = m.marginTop, E = m.marginRight, A = m.marginBottom, O = m.marginLeft;
          [k, E, A, O].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), f.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, y = v.reference, w = v.popper;
          if (!si(y, w)) {
            process.env.NODE_ENV !== "production" && console.error(oi);
            return;
          }
          s.rects = {
            reference: xl(y, Dr(w), s.options.strategy === "fixed"),
            popper: Rs(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(S) {
            return s.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var x = 0, $ = 0; $ < s.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(Zl);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, $ = -1;
              continue;
            }
            var m = s.orderedModifiers[$], k = m.fn, E = m.options, A = E === void 0 ? {} : E, O = m.name;
            typeof k == "function" && (s = k({
              state: s,
              options: A,
              name: O,
              instance: f
            }) || s);
          }
        }
      },
      update: Wl(function() {
        return new Promise(function(_) {
          f.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!si(l, c))
      return process.env.NODE_ENV !== "production" && console.error(oi), f;
    f.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, y = _.options, w = y === void 0 ? {} : y, x = _.effect;
        if (typeof x == "function") {
          var $ = x({
            state: s,
            name: v,
            instance: f,
            options: w
          }), m = function() {
          };
          d.push($ || m);
        }
      });
    }
    function b() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return f;
  };
}
var Pn = {
  passive: !0
};
function ec(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = de(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Pn);
  }), l && c.addEventListener("resize", n.update, Pn), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Pn);
    }), l && c.removeEventListener("resize", n.update, Pn);
  };
}
const tc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ec,
  data: {}
};
function nc(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Ns({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const rc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nc,
  data: {}
};
var oc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ic(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: It(e * i) / i || 0,
    y: It(n * i) / i || 0
  };
}
function ai(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, c = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, f = p === void 0 ? 0 : p, h = a.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = _.x, b = _.y;
  var v = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), w = We, x = ge, $ = window;
  if (u) {
    var m = Dr(n), k = "clientHeight", E = "clientWidth";
    if (m === de(n) && (m = ot(n), ye(m).position !== "static" && l === "absolute" && (k = "scrollHeight", E = "scrollWidth")), m = m, i === ge || (i === We || i === nt) && o === bn) {
      x = Re;
      var A = d && m === $ && $.visualViewport ? $.visualViewport.height : m[k];
      b -= A - r.height, b *= c ? 1 : -1;
    }
    if (i === We || (i === ge || i === Re) && o === bn) {
      w = nt;
      var O = d && m === $ && $.visualViewport ? $.visualViewport.width : m[E];
      f -= O - r.width, f *= c ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, u && oc), L = s === !0 ? ic({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  if (f = L.x, b = L.y, c) {
    var P;
    return Object.assign({}, S, (P = {}, P[x] = y ? "0" : "", P[w] = v ? "0" : "", P.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (e = {}, e[x] = y ? b + "px" : "", e[w] = v ? f + "px" : "", e.transform = "", e));
}
function sc(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, l = n.roundOffsets, c = l === void 0 ? !0 : l;
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
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ai(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ai(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const ac = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sc,
  data: {}
};
function lc(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !pe(o) || !Se(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function cc(t) {
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
      var i = e.elements[r], o = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !pe(i) || !Se(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const fc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: lc,
  effect: cc,
  requires: ["computeStyles"]
};
var uc = [tc, rc, ac, fc], li = /* @__PURE__ */ Ql({
  defaultModifiers: uc
});
function pc(t) {
  return t === "x" ? "y" : "x";
}
function Fn(t, e, n) {
  return mt(t, sr(e, n));
}
function hc(t, e, n) {
  var r = Fn(t, e, n);
  return r > n ? n : r;
}
function dc(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, f = p === void 0 ? !0 : p, h = n.tetherOffset, b = h === void 0 ? 0 : h, _ = yo(e, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ie(e.placement), y = Ft(e.placement), w = !y, x = Ms(v), $ = pc(x), m = e.modifiersData.popperOffsets, k = e.rects.reference, E = e.rects.popper, A = typeof b == "function" ? b(Object.assign({}, e.rects, {
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
      var P, K = x === "y" ? ge : We, H = x === "y" ? Re : nt, D = x === "y" ? "height" : "width", j = m[x], oe = j + _[K], Z = j - _[H], ve = f ? -E[D] / 2 : 0, ie = y === Ut ? k[D] : E[D], ne = y === Ut ? -E[D] : -k[D], le = e.elements.arrow, ee = f && le ? Rs(le) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ps(), T = R[K], B = R[H], W = Fn(0, k[D], ee[D]), te = w ? k[D] / 2 - ve - W - T - O.mainAxis : ie - W - T - O.mainAxis, Me = w ? -k[D] / 2 + ve + W + B + O.mainAxis : ne + W + B + O.mainAxis, ce = e.elements.arrow && Dr(e.elements.arrow), xt = ce ? x === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, st = (P = S == null ? void 0 : S[x]) != null ? P : 0, Kt = j + te - st - xt, U = j + Me - st, Fe = Fn(f ? sr(oe, Kt) : oe, j, f ? mt(Z, U) : Z);
      m[x] = Fe, L[x] = Fe - j;
    }
    if (l) {
      var we, $t = x === "x" ? ge : We, kt = x === "x" ? Re : nt, J = m[$], Ne = $ === "y" ? "height" : "width", Jt = J + _[$t], Zt = J - _[kt], at = [ge, We].indexOf(v) !== -1, Qt = (we = S == null ? void 0 : S[$]) != null ? we : 0, en = at ? Jt : J - k[Ne] - E[Ne] - Qt + O.altAxis, tn = at ? J + k[Ne] + E[Ne] - Qt - O.altAxis : Zt, nn = f && at ? hc(en, J, tn) : Fn(f ? en : Jt, J, f ? tn : Zt);
      m[$] = nn, L[$] = nn - J;
    }
    e.modifiersData[r] = L;
  }
}
const ci = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dc,
  requiresIfExists: ["offset"]
};
var _c = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return _c[e];
  });
}
var vc = {
  start: "end",
  end: "start"
};
function fi(t) {
  return t.replace(/start|end/g, function(e) {
    return vc[e];
  });
}
function gc(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Sl : c, s = Ft(r), d = s ? l ? ti : ti.filter(function(h) {
    return Ft(h) === s;
  }) : Tr, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var f = p.reduce(function(h, b) {
    return h[b] = yo(t, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ie(b)], h;
  }, {});
  return Object.keys(f).sort(function(h, b) {
    return f[h] - f[b];
  });
}
function mc(t) {
  if (Ie(t) === Lr)
    return [];
  var e = zn(t);
  return [fi(t), e, fi(e)];
}
function yc(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, _ = e.options.placement, v = Ie(_), y = v === _, w = c || (y || !h ? [zn(_)] : mc(_)), x = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ie(R) === Lr ? gc(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : R);
    }, []), $ = e.rects.reference, m = e.rects.popper, k = /* @__PURE__ */ new Map(), E = !0, A = x[0], O = 0; O < x.length; O++) {
      var S = x[O], L = Ie(S), P = Ft(S) === Ut, K = [ge, Re].indexOf(L) >= 0, H = K ? "width" : "height", D = yo(e, {
        placement: S,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), j = K ? P ? nt : We : P ? Re : ge;
      $[H] > m[H] && (j = zn(j));
      var oe = zn(j), Z = [];
      if (o && Z.push(D[L] <= 0), l && Z.push(D[j] <= 0, D[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        A = S, E = !1;
        break;
      }
      k.set(S, Z);
    }
    if (E)
      for (var ve = h ? 3 : 1, ie = function(R) {
        var T = x.find(function(B) {
          var W = k.get(B);
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
const ui = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ds(t) {
  return t.button === 2;
}
const bc = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)', Ur = "show", Vn = "contextmenu";
var ht, fe, dt, Mt, kn, _t, En, Xr, hr, dr, _r, vr, Ls, gr, Ts;
const qe = class extends yn {
  constructor() {
    super(...arguments);
    C(this, En);
    C(this, vr);
    C(this, gr);
    C(this, ht, void 0);
    C(this, fe, void 0);
    C(this, dt, /* @__PURE__ */ new Map());
    C(this, Mt, void 0);
    C(this, kn, void 0);
    C(this, _t, void 0);
    C(this, hr, ({ menu: n }) => {
      const r = n.$;
      if (!(r != null && r.parentElement))
        return;
      let i = g(this, dt).get(n);
      i || (i = li(r.parentElement, r, {
        modifiers: [ci, ui],
        placement: "right-start"
      }), g(this, dt).set(n, i)), i.update();
    });
    C(this, dr, ({ menu: n }) => {
      const r = g(this, dt).get(n);
      r && (r.destroy(), g(this, dt).delete(n));
    });
    C(this, _r, ({ item: n, h: r }) => {
      if (n.type === "item" && n.items)
        return {
          trailingIcon: r("span", { className: "caret-right ml-2" })
        };
    });
  }
  get isShown() {
    return this.menu.classList.contains(Ur);
  }
  get menu() {
    var i, o;
    if (g(this, ht))
      return g(this, ht);
    const { element: n } = this;
    let r;
    if (this.options.menu)
      r = document.createElement("div"), r.classList.add(Vn), document.body.appendChild(r);
    else if (n) {
      const a = (i = n.getAttribute("href")) != null ? i : n.dataset.target;
      if ((a == null ? void 0 : a[0]) === "#" && (r = document.querySelector(a)), !r) {
        const l = n.nextElementSibling;
        l != null && l.classList.contains(Vn) ? r = l : r = (o = n.parentNode) == null ? void 0 : o.querySelector(`.${Vn}`);
      }
    }
    if (r)
      return M(this, ht, r), r;
    throw new Error("ContextMenu: Cannot find menu element");
  }
  get popper() {
    return g(this, fe) ? g(this, fe) : V(this, En, Xr).call(this);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    if (n = n || qe.mousePos, this.emit("show", { menu: this, event: n }).defaultPrevented)
      return !1;
    M(this, kn, n), V(this, vr, Ls).call(this, n) !== !1 && (this.menu.classList.add(Ur), V(this, En, Xr).call(this).update(), this.emit("shown", this));
  }
  hide() {
    var r, i, o, a;
    if (this.emit("hide", this).defaultPrevented)
      return !1;
    (r = g(this, fe)) == null || r.destroy(), M(this, fe, void 0), (i = g(this, ht)) == null || i.classList.remove(Ur), (a = (o = g(this, _t)) == null ? void 0 : o.$) == null || a.clearAllSubMenu(), this.emit("hidden", this);
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
ht = new WeakMap(), fe = new WeakMap(), dt = new WeakMap(), Mt = new WeakMap(), kn = new WeakMap(), _t = new WeakMap(), En = new WeakSet(), Xr = function() {
  const n = {
    modifiers: [ci, ui],
    placement: this.options.placement,
    strategy: this.options.strategy
  };
  return g(this, fe) ? g(this, fe).setOptions(n) : M(this, fe, li(V(this, gr, Ts).call(this), this.menu, n)), g(this, fe);
}, hr = new WeakMap(), dr = new WeakMap(), _r = new WeakMap(), vr = new WeakSet(), Ls = function(n) {
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
    afterRender: g(this, hr),
    beforeDestroy: g(this, dr),
    onRenderItem: g(this, _r)
  })), !0;
}, gr = new WeakSet(), Ts = function() {
  return g(this, Mt) || M(this, Mt, {
    getBoundingClientRect: () => {
      const { clientX: n, clientY: r } = g(this, kn) || qe.mousePos;
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
  if (e.closest(`.${Vn}`))
    return;
  const n = e.closest(bc);
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
function bo(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = _e(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var yt = Math.max, ar = Math.min, zt = Math.round;
function Gr() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function js() {
  return !/^((?!chrome|android).)*safari/i.test(Gr());
}
function Vt(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && he(t) && (i = t.offsetWidth > 0 && zt(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && zt(r.height) / t.offsetHeight || 1);
  var a = wt(t) ? _e(t) : window, l = a.visualViewport, c = !js() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, s = (r.top + (c && l ? l.offsetTop : 0)) / o, d = r.width / i, p = r.height / o;
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
function wo(t) {
  var e = _e(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function wc(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function xc(t) {
  return t === _e(t) || !he(t) ? wo(t) : wc(t);
}
function Ae(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function it(t) {
  return ((wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function xo(t) {
  return Vt(it(t)).left + wo(t).scrollLeft;
}
function be(t) {
  return _e(t).getComputedStyle(t);
}
function $o(t) {
  var e = be(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function $c(t) {
  var e = t.getBoundingClientRect(), n = zt(e.width) / t.offsetWidth || 1, r = zt(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function kc(t, e, n) {
  n === void 0 && (n = !1);
  var r = he(e), i = he(e) && $c(e), o = it(e), a = Vt(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ae(e) !== "body" || $o(o)) && (l = xc(e)), he(e) ? (c = Vt(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : o && (c.x = xo(o))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
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
function jr(t) {
  return Ae(t) === "html" ? t : t.assignedSlot || t.parentNode || (bo(t) ? t.host : null) || it(t);
}
function Ws(t) {
  return ["html", "body", "#document"].indexOf(Ae(t)) >= 0 ? t.ownerDocument.body : he(t) && $o(t) ? t : Ws(jr(t));
}
function vn(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = Ws(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = _e(r), a = i ? [o].concat(o.visualViewport || [], $o(r) ? r : []) : r, l = e.concat(a);
  return i ? l : l.concat(vn(jr(a)));
}
function Ec(t) {
  return ["table", "td", "th"].indexOf(Ae(t)) >= 0;
}
function pi(t) {
  return !he(t) || be(t).position === "fixed" ? null : t.offsetParent;
}
function Cc(t) {
  var e = /firefox/i.test(Gr()), n = /Trident/i.test(Gr());
  if (n && he(t)) {
    var r = be(t);
    if (r.position === "fixed")
      return null;
  }
  var i = jr(t);
  for (bo(i) && (i = i.host); he(i) && ["html", "body"].indexOf(Ae(i)) < 0; ) {
    var o = be(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Hr(t) {
  for (var e = _e(t), n = pi(t); n && Ec(n) && be(n).position === "static"; )
    n = pi(n);
  return n && (Ae(n) === "html" || Ae(n) === "body" && be(n).position === "static") ? e : n || Cc(t) || e;
}
var me = "top", Oe = "bottom", rt = "right", Be = "left", Wr = "auto", Ir = [me, Oe, rt, Be], qt = "start", wn = "end", Sc = "clippingParents", Is = "viewport", on = "popper", Rc = "reference", hi = /* @__PURE__ */ Ir.reduce(function(t, e) {
  return t.concat([e + "-" + qt, e + "-" + wn]);
}, []), Ac = /* @__PURE__ */ [].concat(Ir, [Wr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + qt, e + "-" + wn]);
}, []), Oc = "beforeRead", Mc = "read", Nc = "afterRead", Pc = "beforeMain", Dc = "main", Lc = "afterMain", Tc = "beforeWrite", jc = "write", Hc = "afterWrite", Kr = [Oc, Mc, Nc, Pc, Dc, Lc, Tc, jc, Hc];
function Wc(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = e.get(l);
        c && i(c);
      }
    }), r.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function Ic(t) {
  var e = Wc(t);
  return Kr.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Bc(t) {
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
var ct = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Uc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', di = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Fc(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), di).filter(function(n, r, i) {
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
          Kr.indexOf(e.phase) < 0 && console.error(Ve(ct, e.name, '"phase"', "either " + Kr.join(", "), '"' + String(e.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + di.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(i) {
          return i.name === r;
        }) == null && console.error(Ve(Uc, String(e.name), r, r));
      });
    });
  });
}
function zc(t, e) {
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
function Vc(t) {
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
function qc(t, e) {
  var n = _e(t), r = it(t), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = js();
    (u || !u && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l + xo(t),
    y: c
  };
}
function Yc(t) {
  var e, n = it(t), r = wo(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = yt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = yt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + xo(t), c = -r.scrollTop;
  return be(i || n).direction === "rtl" && (l += yt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Xc(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && bo(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Jr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Gc(t, e) {
  var n = Vt(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _i(t, e, n) {
  return e === Is ? Jr(qc(t, n)) : wt(e) ? Gc(e, n) : Jr(Yc(it(t)));
}
function Kc(t) {
  var e = vn(jr(t)), n = ["absolute", "fixed"].indexOf(be(t).position) >= 0, r = n && he(t) ? Hr(t) : t;
  return wt(r) ? e.filter(function(i) {
    return wt(i) && Xc(i, r) && Ae(i) !== "body";
  }) : [];
}
function Jc(t, e, n, r) {
  var i = e === "clippingParents" ? Kc(t) : [].concat(e), o = [].concat(i, [n]), a = o[0], l = o.reduce(function(c, u) {
    var s = _i(t, u, r);
    return c.top = yt(s.top, c.top), c.right = ar(s.right, c.right), c.bottom = ar(s.bottom, c.bottom), c.left = yt(s.left, c.left), c;
  }, _i(t, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Yt(t) {
  return t.split("-")[1];
}
function Bs(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Us(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Ue(r) : null, o = r ? Yt(r) : null, a = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, c;
  switch (i) {
    case me:
      c = {
        x: a,
        y: e.y - n.height
      };
      break;
    case Oe:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case rt:
      c = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Be:
      c = {
        x: e.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var u = i ? Bs(i) : null;
  if (u != null) {
    var s = u === "y" ? "height" : "width";
    switch (o) {
      case qt:
        c[u] = c[u] - (e[s] / 2 - n[s] / 2);
        break;
      case wn:
        c[u] = c[u] + (e[s] / 2 - n[s] / 2);
        break;
    }
  }
  return c;
}
function Fs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Zc(t) {
  return Object.assign({}, Fs(), t);
}
function Qc(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
function ko(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, a = o === void 0 ? t.strategy : o, l = n.boundary, c = l === void 0 ? Sc : l, u = n.rootBoundary, s = u === void 0 ? Is : u, d = n.elementContext, p = d === void 0 ? on : d, f = n.altBoundary, h = f === void 0 ? !1 : f, b = n.padding, _ = b === void 0 ? 0 : b, v = Zc(typeof _ != "number" ? _ : Qc(_, Ir)), y = p === on ? Rc : on, w = t.rects.popper, x = t.elements[h ? y : p], $ = Jc(wt(x) ? x : x.contextElement || it(t.elements.popper), c, s, a), m = Vt(t.elements.reference), k = Us({
    reference: m,
    element: w,
    strategy: "absolute",
    placement: i
  }), E = Jr(Object.assign({}, w, k)), A = p === on ? E : m, O = {
    top: $.top - A.top + v.top,
    bottom: A.bottom - $.bottom + v.bottom,
    left: $.left - A.left + v.left,
    right: A.right - $.right + v.right
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
var vi = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ef = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", gi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mi() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tf(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? gi : i;
  return function(l, c, u) {
    u === void 0 && (u = o);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gi, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, f = {
      state: s,
      setOptions: function(v) {
        var y = typeof v == "function" ? v(s.options) : v;
        b(), s.options = Object.assign({}, o, s.options, y), s.scrollParents = {
          reference: wt(l) ? vn(l) : l.contextElement ? vn(l.contextElement) : [],
          popper: vn(c)
        };
        var w = Ic(Vc([].concat(r, s.options.modifiers)));
        if (s.orderedModifiers = w.filter(function(S) {
          return S.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = zc([].concat(w, s.options.modifiers), function(S) {
            var L = S.name;
            return L;
          });
          if (Fc(x), Ue(s.options.placement) === Wr) {
            var $ = s.orderedModifiers.find(function(S) {
              var L = S.name;
              return L === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var m = be(c), k = m.marginTop, E = m.marginRight, A = m.marginBottom, O = m.marginLeft;
          [k, E, A, O].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), f.update();
      },
      forceUpdate: function() {
        if (!p) {
          var v = s.elements, y = v.reference, w = v.popper;
          if (!mi(y, w)) {
            process.env.NODE_ENV !== "production" && console.error(vi);
            return;
          }
          s.rects = {
            reference: kc(y, Hr(w), s.options.strategy === "fixed"),
            popper: Hs(w)
          }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(S) {
            return s.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var x = 0, $ = 0; $ < s.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(ef);
              break;
            }
            if (s.reset === !0) {
              s.reset = !1, $ = -1;
              continue;
            }
            var m = s.orderedModifiers[$], k = m.fn, E = m.options, A = E === void 0 ? {} : E, O = m.name;
            typeof k == "function" && (s = k({
              state: s,
              options: A,
              name: O,
              instance: f
            }) || s);
          }
        }
      },
      update: Bc(function() {
        return new Promise(function(_) {
          f.forceUpdate(), _(s);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!mi(l, c))
      return process.env.NODE_ENV !== "production" && console.error(vi), f;
    f.setOptions(u).then(function(_) {
      !p && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function h() {
      s.orderedModifiers.forEach(function(_) {
        var v = _.name, y = _.options, w = y === void 0 ? {} : y, x = _.effect;
        if (typeof x == "function") {
          var $ = x({
            state: s,
            name: v,
            instance: f,
            options: w
          }), m = function() {
          };
          d.push($ || m);
        }
      });
    }
    function b() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return f;
  };
}
var Dn = {
  passive: !0
};
function nf(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = _e(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(s) {
    s.addEventListener("scroll", n.update, Dn);
  }), l && c.addEventListener("resize", n.update, Dn), function() {
    o && u.forEach(function(s) {
      s.removeEventListener("scroll", n.update, Dn);
    }), l && c.removeEventListener("resize", n.update, Dn);
  };
}
const rf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nf,
  data: {}
};
function of(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Us({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const sf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: of,
  data: {}
};
var af = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function lf(t) {
  var e = t.x, n = t.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: zt(e * i) / i || 0,
    y: zt(n * i) / i || 0
  };
}
function yi(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, l = t.position, c = t.gpuAcceleration, u = t.adaptive, s = t.roundOffsets, d = t.isFixed, p = a.x, f = p === void 0 ? 0 : p, h = a.y, b = h === void 0 ? 0 : h, _ = typeof s == "function" ? s({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = _.x, b = _.y;
  var v = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), w = Be, x = me, $ = window;
  if (u) {
    var m = Hr(n), k = "clientHeight", E = "clientWidth";
    if (m === _e(n) && (m = it(n), be(m).position !== "static" && l === "absolute" && (k = "scrollHeight", E = "scrollWidth")), m = m, i === me || (i === Be || i === rt) && o === wn) {
      x = Oe;
      var A = d && m === $ && $.visualViewport ? $.visualViewport.height : m[k];
      b -= A - r.height, b *= c ? 1 : -1;
    }
    if (i === Be || (i === me || i === Oe) && o === wn) {
      w = rt;
      var O = d && m === $ && $.visualViewport ? $.visualViewport.width : m[E];
      f -= O - r.width, f *= c ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, u && af), L = s === !0 ? lf({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  if (f = L.x, b = L.y, c) {
    var P;
    return Object.assign({}, S, (P = {}, P[x] = y ? "0" : "", P[w] = v ? "0" : "", P.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (e = {}, e[x] = y ? b + "px" : "", e[w] = v ? f + "px" : "", e.transform = "", e));
}
function cf(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, a = o === void 0 ? !0 : o, l = n.roundOffsets, c = l === void 0 ? !0 : l;
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
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, yi(Object.assign({}, s, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, yi(Object.assign({}, s, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const ff = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cf,
  data: {}
};
function uf(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !he(o) || !Ae(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function pf(t) {
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
      var i = e.elements[r], o = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !he(i) || !Ae(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const hf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: uf,
  effect: pf,
  requires: ["computeStyles"]
};
var df = [rf, sf, ff, hf], _f = /* @__PURE__ */ tf({
  defaultModifiers: df
});
function vf(t) {
  return t === "x" ? "y" : "x";
}
function qn(t, e, n) {
  return yt(t, ar(e, n));
}
function gf(t, e, n) {
  var r = qn(t, e, n);
  return r > n ? n : r;
}
function mf(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, s = n.altBoundary, d = n.padding, p = n.tether, f = p === void 0 ? !0 : p, h = n.tetherOffset, b = h === void 0 ? 0 : h, _ = ko(e, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: s
  }), v = Ue(e.placement), y = Yt(e.placement), w = !y, x = Bs(v), $ = vf(x), m = e.modifiersData.popperOffsets, k = e.rects.reference, E = e.rects.popper, A = typeof b == "function" ? b(Object.assign({}, e.rects, {
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
      var P, K = x === "y" ? me : Be, H = x === "y" ? Oe : rt, D = x === "y" ? "height" : "width", j = m[x], oe = j + _[K], Z = j - _[H], ve = f ? -E[D] / 2 : 0, ie = y === qt ? k[D] : E[D], ne = y === qt ? -E[D] : -k[D], le = e.elements.arrow, ee = f && le ? Hs(le) : {
        width: 0,
        height: 0
      }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Fs(), T = R[K], B = R[H], W = qn(0, k[D], ee[D]), te = w ? k[D] / 2 - ve - W - T - O.mainAxis : ie - W - T - O.mainAxis, Me = w ? -k[D] / 2 + ve + W + B + O.mainAxis : ne + W + B + O.mainAxis, ce = e.elements.arrow && Hr(e.elements.arrow), xt = ce ? x === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, st = (P = S == null ? void 0 : S[x]) != null ? P : 0, Kt = j + te - st - xt, U = j + Me - st, Fe = qn(f ? ar(oe, Kt) : oe, j, f ? yt(Z, U) : Z);
      m[x] = Fe, L[x] = Fe - j;
    }
    if (l) {
      var we, $t = x === "x" ? me : Be, kt = x === "x" ? Oe : rt, J = m[$], Ne = $ === "y" ? "height" : "width", Jt = J + _[$t], Zt = J - _[kt], at = [me, Be].indexOf(v) !== -1, Qt = (we = S == null ? void 0 : S[$]) != null ? we : 0, en = at ? Jt : J - k[Ne] - E[Ne] - Qt + O.altAxis, tn = at ? J + k[Ne] + E[Ne] - Qt - O.altAxis : Zt, nn = f && at ? gf(en, J, tn) : qn(f ? en : Jt, J, f ? tn : Zt);
      m[$] = nn, L[$] = nn - J;
    }
    e.modifiersData[r] = L;
  }
}
const yf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: mf,
  requiresIfExists: ["offset"]
};
var bf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return bf[e];
  });
}
var wf = {
  start: "end",
  end: "start"
};
function bi(t) {
  return t.replace(/start|end/g, function(e) {
    return wf[e];
  });
}
function xf(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Ac : c, s = Yt(r), d = s ? l ? hi : hi.filter(function(h) {
    return Yt(h) === s;
  }) : Ir, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var f = p.reduce(function(h, b) {
    return h[b] = ko(t, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Ue(b)], h;
  }, {});
  return Object.keys(f).sort(function(h, b) {
    return f[h] - f[b];
  });
}
function $f(t) {
  if (Ue(t) === Wr)
    return [];
  var e = Yn(t);
  return [bi(t), e, bi(e)];
}
function kf(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, s = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, _ = e.options.placement, v = Ue(_), y = v === _, w = c || (y || !h ? [Yn(_)] : $f(_)), x = [_].concat(w).reduce(function(ee, R) {
      return ee.concat(Ue(R) === Wr ? xf(e, {
        placement: R,
        boundary: s,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : R);
    }, []), $ = e.rects.reference, m = e.rects.popper, k = /* @__PURE__ */ new Map(), E = !0, A = x[0], O = 0; O < x.length; O++) {
      var S = x[O], L = Ue(S), P = Yt(S) === qt, K = [me, Oe].indexOf(L) >= 0, H = K ? "width" : "height", D = ko(e, {
        placement: S,
        boundary: s,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), j = K ? P ? rt : Be : P ? Oe : me;
      $[H] > m[H] && (j = Yn(j));
      var oe = Yn(j), Z = [];
      if (o && Z.push(D[L] <= 0), l && Z.push(D[j] <= 0, D[oe] <= 0), Z.every(function(ee) {
        return ee;
      })) {
        A = S, E = !1;
        break;
      }
      k.set(S, Z);
    }
    if (E)
      for (var ve = h ? 3 : 1, ie = function(R) {
        var T = x.find(function(B) {
          var W = k.get(B);
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
const Ef = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Cf(t) {
  return (t == null ? void 0 : t.nodeType) !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false";
}
const Sf = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)', sn = "show", wi = "dropdown-menu";
var vt, Te;
const mr = class extends yn {
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
        l != null && l.classList.contains(wi) ? o = l : o = (r = i.parentNode) == null ? void 0 : r.querySelector(`.${wi}`);
      }
      if (o)
        M(this, vt, o);
      else
        throw new Error("Dropdown: Cannot find menu element");
    }
    return g(this, vt);
  }
  get popper() {
    return g(this, Te) || M(this, Te, _f(this.element, this.menu, {
      modifiers: [yf, Ef],
      placement: this.options.placement,
      strategy: this.options.strategy
    })), g(this, Te);
  }
  show(n) {
    this.events.emit("show", this).defaultPrevented || ((n == null ? void 0 : n.hideOthers) !== !1 && mr.getAll().forEach((i) => i !== this ? i.hide() : null), this.menu.classList.add(sn), this.element.classList.add(sn), this.popper.update(), this.element.focus(), this.events.emit("shown", this));
  }
  hide() {
    var r, i;
    Cf(this.element) || !this.isShown || this.events.emit("hide", this).defaultPrevented || ((r = g(this, Te)) == null || r.destroy(), M(this, Te, void 0), (i = g(this, vt)) == null || i.classList.remove(sn), this.element.classList.remove(sn), this.events.emit("hidden", this));
  }
  toggle() {
    return this.isShown ? this.hide() : this.show();
  }
  destroy() {
    var n;
    (n = g(this, Te)) == null || n.destroy(), super.destroy();
  }
  static clear(n) {
    n && Ds(n) || mr.getAll().forEach((r) => r.hide());
  }
};
let St = mr;
vt = new WeakMap(), Te = new WeakMap(), F(St, "EVENTS", !0), F(St, "DEFAULT", {
  placement: "bottom-start",
  strategy: "absolute"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Sf);
  n ? St.ensure(n).toggle() : St.clear(t);
});
var Eo, G, zs, Vs, gn, xi, qs = {}, Ys = [], Rf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
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
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Eo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return Xn(t, a, r, i, null);
}
function Xn(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++zs : i };
  return i == null && G.vnode != null && G.vnode(o), o;
}
function Af() {
  return { current: null };
}
function Co(t) {
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
function $i(t) {
  (!t.__d && (t.__d = !0) && gn.push(t) && !lr.__r++ || xi !== G.debounceRendering) && ((xi = G.debounceRendering) || setTimeout)(lr);
}
function lr() {
  for (var t; lr.__r = gn.length; )
    t = gn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), gn = [], t.some(function(e) {
      var n, r, i, o, a, l;
      e.__d && (a = (o = (n = e).__v).__e, (l = n.__P) && (r = [], (i = tt({}, o)).__v = o.__v + 1, Qs(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Xt(o) : a, o.__h), Mf(r, o), o.__e != a && Gs(o)));
    });
}
function Ks(t, e, n, r, i, o, a, l, c, u) {
  var s, d, p, f, h, b, _, v = r && r.__k || Ys, y = v.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((f = n.__k[s] = (f = e[s]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Xn(null, f, null, null, f) : Array.isArray(f) ? Xn(Co, { children: f }, null, null, null) : f.__b > 0 ? Xn(f.type, f.props, f.key, null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (p = v[s]) === null || p && f.key == p.key && f.type === p.type)
        v[s] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((p = v[d]) && f.key == p.key && f.type === p.type) {
            v[d] = void 0;
            break;
          }
          p = null;
        }
      Qs(t, f, p = p || qs, i, o, a, l, c, u), h = f.__e, (d = f.ref) && p.ref != d && (_ || (_ = []), p.ref && _.push(p.ref, null, f), _.push(d, f.__c || h, f)), h != null ? (b == null && (b = h), typeof f.type == "function" && f.__k === p.__k ? f.__d = c = Js(f, c, t) : c = Zs(t, f, p, v, h, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != t && (c = Xt(p));
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
  var a, l, c;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== t)
        t.appendChild(i), a = null;
      else {
        for (l = o, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
          if (l == i)
            break e;
        t.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Of(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || cr(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || cr(t, o, e[o], n[o], r);
}
function ki(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Rf.test(e) ? n : n + "px";
}
function cr(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || ki(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || ki(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Ci : Ei, o) : t.removeEventListener(e, o ? Ci : Ei, o);
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
function Ei(t) {
  this.l[t.type + !1](G.event ? G.event(t) : t);
}
function Ci(t) {
  this.l[t.type + !0](G.event ? G.event(t) : t);
}
function Qs(t, e, n, r, i, o, a, l, c) {
  var u, s, d, p, f, h, b, _, v, y, w, x, $, m = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = G.__b) && u(e);
  try {
    e:
      if (typeof m == "function") {
        if (_ = e.props, v = (u = m.contextType) && r[u.__c], y = u ? v ? v.props.value : u.__ : r, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in m && m.prototype.render ? e.__c = s = new m(_, y) : (e.__c = s = new mn(_, y), s.constructor = m, s.render = Pf), v && v.sub(s), s.props = _, s.state || (s.state = {}), s.context = y, s.__n = r, d = s.__d = !0, s.__h = []), s.__s == null && (s.__s = s.state), m.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = tt({}, s.__s)), tt(s.__s, m.getDerivedStateFromProps(_, s.__s))), p = s.props, f = s.state, d)
          m.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && _ !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(_, y), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(_, s.__s, y) === !1 || e.__v === n.__v) {
            s.props = _, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(_, s.__s, y), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, f, h);
          });
        }
        if (s.context = y, s.props = _, s.__v = e, s.__P = t, w = G.__r, x = 0, "prototype" in m && m.prototype.render)
          s.state = s.__s, s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context);
        else
          do
            s.__d = !1, w && w(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++x < 25);
        s.state = s.__s, s.getChildContext != null && (r = tt(tt({}, r), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(p, f)), $ = u != null && u.type === Co && u.key == null ? u.props.children : u, Ks(t, Array.isArray($) ? $ : [$], e, n, r, i, o, a, l, c), s.base = e.__e, e.__h = null, s.__h.length && a.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Nf(n.__e, e, n, r, i, o, a, c);
    (u = G.diffed) && u(e);
  } catch (k) {
    e.__v = null, (c || o != null) && (e.__e = l, e.__h = !!c, o[o.indexOf(l)] = null), G.__e(k, e, n);
  }
}
function Mf(t, e) {
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
function Nf(t, e, n, r, i, o, a, l) {
  var c, u, s, d = n.props, p = e.props, f = e.type, h = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; h < o.length; h++)
      if ((c = o[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, o[h] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), o = null, l = !1;
  }
  if (f === null)
    d === p || l && t.data === p || (t.data = p);
  else {
    if (o = o && Eo.call(t.childNodes), u = (d = n.props || qs).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (s || u) && (s && (u && s.__html == u.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Of(t, p, d, i, l), s)
      e.__k = [];
    else if (h = e.props.children, Ks(t, Array.isArray(h) ? h : [h], e, n, r, i && f !== "foreignObject", o, a, o ? o[0] : n.__k && Xt(n, 0), l), o != null)
      for (h = o.length; h--; )
        o[h] != null && Xs(o[h]);
    l || ("value" in p && (h = p.value) !== void 0 && (h !== t.value || f === "progress" && !h || f === "option" && h !== d.value) && cr(t, "value", h, d.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== t.checked && cr(t, "checked", h, d.checked, !1));
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
function Pf(t, e, n) {
  return this.constructor(t, n);
}
Eo = Ys.slice, G = { __e: function(t, e, n, r) {
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
}, mn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, n), this.props)), t && tt(n, t), t != null && this.__v && (e && this.__h.push(e), $i(this));
}, mn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), $i(this));
}, mn.prototype.render = Co, gn = [], lr.__r = 0;
let Df = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Lf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function So({ col: t, className: e, height: n, row: r, onRenderCell: i, style: o, outerStyle: a, children: l, outerClass: c, ...u }) {
  var m, k;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...a
  }, { align: d, border: p } = t.setting, f = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...o
  }, h = ["dtable-cell", c, t.setting.className, {
    "has-border-left": p === !0 || p === "left",
    "has-border-right": p === !0 || p === "right"
  }], b = ["dtable-cell-content", e], _ = [(k = l != null ? l : (m = r.data) == null ? void 0 : m[t.name]) != null ? k : ""], v = i ? i(_, { row: r, col: t }, N) : _, y = [], w = [], x = {}, $ = {};
  return v == null || v.forEach((E) => {
    var A;
    if (typeof E == "object" && E && !Vs(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E)) {
      const O = E.outer ? y : w;
      E.html ? O.push(/* @__PURE__ */ N("div", {
        className: I("dtable-cell-html", E.className),
        style: E.style,
        dangerouslySetInnerHTML: { __html: E.html },
        ...(A = E.attrs) != null ? A : {}
      })) : (E.style && Object.assign(E.outer ? s : f, E.style), E.className && (E.outer ? h : b).push(E.className), E.children && O.push(E.children), E.attrs && Object.assign(E.outer ? x : $, E.attrs));
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
    style: f,
    ...$
  }, w), y);
}
function Tf({ col: t, children: e, style: n, ...r }) {
  var o;
  const { sortType: i } = t.setting;
  return /* @__PURE__ */ N(So, {
    col: t,
    style: { ...n, ...t.setting.style },
    "data-sort": i || null,
    "data-type": t.type,
    ...r
  }, (o = t.setting.title) != null ? o : t.setting.name, i && /* @__PURE__ */ N("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), e);
}
function Fr({ row: t, className: e, top: n = 0, left: r = 0, width: i, height: o, cols: a, CellComponent: l = So, onRenderCell: c }) {
  return /* @__PURE__ */ N("div", {
    className: I("dtable-cells", e),
    style: { top: n, left: r, width: i, height: o }
  }, a.map((u) => u.visible ? /* @__PURE__ */ N(l, {
    key: u.name,
    col: u,
    row: t,
    onRenderCell: c
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
  scrollWidth: c,
  scrollColsWidth: u,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: p = So,
  onRenderCell: f,
  style: h,
  ...b
}) {
  let _ = null;
  i != null && i.length && (_ = /* @__PURE__ */ N(Fr, {
    className: "dtable-fixed-left",
    cols: i,
    width: l,
    row: t,
    CellComponent: p,
    onRenderCell: f
  }));
  let v = null;
  a != null && a.length && (v = /* @__PURE__ */ N(Fr, {
    className: "dtable-flexable",
    cols: a,
    left: l - d,
    width: u,
    row: t,
    CellComponent: p,
    onRenderCell: f
  }));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ N(Fr, {
    className: "dtable-fixed-right",
    cols: o,
    left: l + c,
    width: s,
    row: t,
    CellComponent: p,
    onRenderCell: f
  }));
  const w = { top: n, height: r, lineHeight: `${r - 2}px`, ...h };
  return /* @__PURE__ */ N("div", {
    className: I("dtable-row", e),
    style: w,
    "data-id": t.id,
    ...b
  }, _, v, y);
}
function jf({ height: t, onRenderRow: e, ...n }) {
  const r = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0,
    CellComponent: Tf
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
function Hf({
  className: t,
  style: e,
  top: n,
  rows: r,
  height: i,
  rowHeight: o,
  scrollTop: a,
  onRenderRow: l,
  ...c
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
      ...c
    }, d = l == null ? void 0 : l({ props: s, row: u }, N);
    return d && Object.assign(s, d), /* @__PURE__ */ N(na, {
      ...s
    });
  }));
}
const fr = /* @__PURE__ */ new Map(), ur = [];
function ra(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && fr.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  fr.set(n, t), (e == null ? void 0 : e.buildIn) && !ur.includes(n) && ur.push(n);
}
function Nn(t, e) {
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
  return fr.delete(t);
}
function Wf(t) {
  if (typeof t == "string") {
    const e = fr.get(t);
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
    const i = Wf(r);
    !i || n.has(i.name) || ((o = i.plugins) != null && o.length && ia(t, i.plugins, n), t.push(i), n.add(i.name));
  }), t;
}
function If(t = [], e = !0) {
  return e && ur.length && t.unshift(...ur), t != null && t.length ? ia([], t, /* @__PURE__ */ new Set()) : [];
}
function Si() {
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
function Bf(t) {
  const {
    tag: e,
    className: n,
    style: r,
    renders: i,
    generateArgs: o = [],
    generatorThis: a,
    generators: l,
    onGenerate: c,
    onRenderItem: u,
    ...s
  } = t, d = [n], p = { ...r }, f = [], h = [];
  return i.forEach((b) => {
    var v;
    const _ = [];
    typeof b == "string" && l && l[b] && (b = l[b]), typeof b == "function" ? c ? _.push(...c.call(a, b, f, ...o)) : _.push(...(v = b.call(a, f, ...o)) != null ? v : []) : _.push(b), _.forEach((y) => {
      var w;
      y != null && (typeof y == "object" && !Pi(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? f.push(
        /* @__PURE__ */ Mr("div", {
          className: I(y.className),
          style: y.style,
          dangerouslySetInnerHTML: { __html: y.html },
          ...(w = y.attrs) != null ? w : {}
        })
      ) : y.__html ? h.push(y.__html) : (y.style && Object.assign(p, y.style), y.className && d.push(y.className), y.children && f.push(y.children), y.attrs && Object.assign(s, y.attrs)) : f.push(y));
    });
  }), h.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: h } }), [{
    className: I(d),
    style: p,
    ...s
  }, f];
}
function Ri({
  tag: t = "div",
  ...e
}) {
  const [n, r] = Bf(e);
  return Mr(t, n, ...r);
}
var gt, Nt, Ge, je, Ke, Q, $e, ke, Pt, Cn, Sn, He, Dt, Lt, yr, sa, br, aa, wr, la, xr, ca, Rn, Qr, $r, kr, An, On, Er, Cr, Sr, fa, Rr, ua, Ar, pa;
class Zr extends mn {
  constructor(n) {
    var r;
    super(n);
    C(this, yr);
    C(this, br);
    C(this, wr);
    C(this, xr);
    C(this, Rn);
    C(this, Sr);
    C(this, Rr);
    C(this, Ar);
    F(this, "ref", Af());
    C(this, gt, 0);
    C(this, Nt, void 0);
    C(this, Ge, !1);
    C(this, je, void 0);
    C(this, Ke, void 0);
    C(this, Q, []);
    C(this, $e, void 0);
    C(this, ke, /* @__PURE__ */ new Map());
    C(this, Pt, {});
    C(this, Cn, void 0);
    C(this, Sn, []);
    F(this, "updateLayout", () => {
      g(this, gt) && cancelAnimationFrame(g(this, gt)), M(this, gt, requestAnimationFrame(() => {
        M(this, $e, void 0), this.forceUpdate(), M(this, gt, 0);
      }));
    });
    C(this, He, (n, r) => {
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
    C(this, kr, (n, r) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, r)), g(this, Q).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, r));
    }), n.props));
    C(this, An, (n, r, i) => {
      const { row: o, col: a } = r;
      n[0] = this.getCellValue(o, a);
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (n = a.setting[l].call(this, n, r, i)), this.options[l] && (n = this.options[l].call(this, n, r, i)), g(this, Q).forEach((c) => {
        c[l] && (n = c[l].call(this, n, r, i));
      }), n;
    });
    C(this, On, (n, r) => {
      r === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    C(this, Er, (n) => {
      var l, c, u, s, d;
      const r = this.getPointerInfo(n);
      if (!r)
        return;
      const { rowID: i, colName: o, cellElement: a } = r;
      if (i === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: o, element: a }), g(this, Q).forEach((p) => {
          var f;
          (f = p.onHeaderCellClick) == null || f.call(this, n, { colName: o, element: a });
        }));
      else {
        const { rowElement: p } = r, f = this.layout.visibleRows.find((h) => h.id === i);
        if (a) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, n, { colName: o, rowID: i, rowInfo: f, element: a, rowElement: p })) === !0)
            return;
          for (const h of g(this, Q))
            if (((u = h.onCellClick) == null ? void 0 : u.call(this, n, { colName: o, rowID: i, rowInfo: f, element: a, rowElement: p })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: f, element: p })) === !0)
          return;
        for (const h of g(this, Q))
          if (((d = h.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: p })) === !0)
            return;
      }
    });
    C(this, Cr, (n) => {
      const r = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(r))
        return !this.scroll({ to: r.replace("page", "") });
    });
    M(this, Nt, (r = n.id) != null ? r : `dtable-${Df(10)}`), this.state = { scrollTop: 0, scrollLeft: 0 }, M(this, Ke, Object.freeze(If(n.plugins))), g(this, Ke).forEach((i) => {
      var c;
      const { methods: o, data: a, state: l } = i;
      o && Object.entries(o).forEach(([u, s]) => {
        typeof s == "function" && Object.assign(this, { [u]: s.bind(this) });
      }), a && Object.assign(g(this, Pt), a.call(this)), l && Object.assign(this.state, l.call(this)), (c = i.onCreate) == null || c.call(this, i);
    });
  }
  get options() {
    var n;
    return ((n = g(this, $e)) == null ? void 0 : n.options) || g(this, je) || Si();
  }
  get plugins() {
    return g(this, Q);
  }
  get layout() {
    return g(this, $e);
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
    if (g(this, Ge) ? this.forceUpdate() : V(this, Rn, Qr).call(this), g(this, Q).forEach((n) => {
      let { events: r } = n;
      !r || (typeof r == "function" && (r = r.call(this)), Object.entries(r).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", g(this, Er)), this.on("keydown", g(this, Cr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const r = new ResizeObserver(this.updateLayout);
          r.observe(n), M(this, Cn, r);
        }
      } else
        this.on("window_resize", this.updateLayout);
    g(this, Q).forEach((n) => {
      var r;
      (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    g(this, Ge) ? V(this, Rn, Qr).call(this) : g(this, Q).forEach((n) => {
      var r;
      (r = n.onUpdated) == null || r.call(this);
    });
  }
  componentWillUnmount() {
    var r;
    (r = g(this, Cn)) == null || r.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of g(this, ke).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), g(this, Dt)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), g(this, Lt)) : n.removeEventListener(i, g(this, He));
    g(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), g(this, Ke).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), M(this, Pt, {}), g(this, ke).clear();
  }
  on(n, r, i) {
    var a;
    i && (n = `${i}_${n}`);
    const o = g(this, ke).get(n);
    o ? o.push(r) : (g(this, ke).set(n, [r]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), g(this, Dt)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), g(this, Lt)) : (a = this.ref.current) == null || a.addEventListener(n, g(this, He)));
  }
  off(n, r, i) {
    var l;
    i && (n = `${i}_${n}`);
    const o = g(this, ke).get(n);
    if (!o)
      return;
    const a = o.indexOf(r);
    a >= 0 && o.splice(a, 1), o.length || (g(this, ke).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), g(this, Dt)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), g(this, Lt)) : (l = this.ref.current) == null || l.removeEventListener(n, g(this, He)));
  }
  emitCustomEvent(n, r) {
    g(this, He).call(this, r instanceof Event ? r : new CustomEvent(n, { detail: r }), n);
  }
  scroll(n, r) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: a, rowsHeight: l, rowHeight: c, colsInfo: { scrollWidth: u, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: p, scrollTop: f } = n;
    if (d === "up" || d === "down")
      f = o + (d === "down" ? 1 : -1) * Math.floor(l / c) * c;
    else if (d === "left" || d === "right")
      p = i + (d === "right" ? 1 : -1) * u;
    else if (d === "home")
      f = 0;
    else if (d === "end")
      f = a - l;
    else if (d === "left-begin")
      p = 0;
    else if (d === "right-end")
      p = s - u;
    else {
      const { offsetLeft: b, offsetTop: _ } = n;
      typeof b == "number" && (p = i + b), typeof _ == "number" && (p = o + _);
    }
    const h = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, s - u)), p !== i && (h.scrollLeft = p)), typeof f == "number" && (f = Math.max(0, Math.min(f, a - l)), f !== o && (h.scrollTop = f)), Object.keys(h).length ? (this.setState(h, () => {
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
    var c, u;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const o = typeof r == "object" ? r : this.getColInfo(r);
    if (!o)
      return;
    let a = i.id === "HEADER" ? (c = o.setting.title) != null ? c : o.setting.name : (u = i.data) == null ? void 0 : u[o.name];
    const { cellValueGetter: l } = this.options;
    return l && (a = l.call(this, i, o, a)), a;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, r) {
    const { dirtyType: i, state: o } = n;
    i === "layout" ? M(this, $e, void 0) : i === "options" && (M(this, $e, void 0), M(this, je, void 0)), o ? this.setState({ ...o }, r) : this.forceUpdate(r);
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
    return (o = Mn(g(this, Sn), n, r, i, this.options.lang)) != null ? o : `{i18n:${n}}`;
  }
  render() {
    var f;
    const n = V(this, Ar, pa).call(this), { className: r, rowHover: i, colHover: o, cellHover: a, bordered: l, striped: c, scrollbarHover: u } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", r, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": a,
      "dtable-bordered": l,
      "dtable-striped": c,
      "dtable-scrolled-down": ((f = n == null ? void 0 : n.scrollTop) != null ? f : 0) > 0,
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
    }, n && V(this, yr, sa).call(this, n), n && V(this, br, aa).call(this, n), n && V(this, wr, la).call(this, n), n && V(this, xr, ca).call(this, n));
  }
}
gt = new WeakMap(), Nt = new WeakMap(), Ge = new WeakMap(), je = new WeakMap(), Ke = new WeakMap(), Q = new WeakMap(), $e = new WeakMap(), ke = new WeakMap(), Pt = new WeakMap(), Cn = new WeakMap(), Sn = new WeakMap(), He = new WeakMap(), Dt = new WeakMap(), Lt = new WeakMap(), yr = new WeakSet(), sa = function(n) {
  const { header: r, colsInfo: i, headerHeight: o, scrollLeft: a } = n;
  if (!r)
    return null;
  if (r === !0)
    return /* @__PURE__ */ N(jf, {
      scrollLeft: a,
      height: o,
      onRenderCell: g(this, An),
      onRenderRow: g(this, kr),
      ...i
    });
  const l = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ N(Ri, {
    className: "dtable-header",
    style: { height: o },
    renders: l,
    generateArgs: [n],
    generatorThis: this
  });
}, br = new WeakSet(), aa = function(n) {
  const { headerHeight: r, rowsHeight: i, visibleRows: o, rowHeight: a, colsInfo: l, scrollLeft: c, scrollTop: u } = n;
  return /* @__PURE__ */ N(Hf, {
    top: r,
    height: i,
    rows: o,
    rowHeight: a,
    scrollLeft: c,
    scrollTop: u,
    onRenderCell: g(this, An),
    onRenderRow: g(this, $r),
    ...l
  });
}, wr = new WeakSet(), la = function(n) {
  const { footer: r } = n;
  if (!r)
    return null;
  const i = Array.isArray(r) ? r : [r];
  return /* @__PURE__ */ N(Ri, {
    className: "dtable-footer",
    style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
    renders: i,
    generateArgs: [n],
    generatorThis: this,
    generators: n.footerGenerators
  });
}, xr = new WeakSet(), ca = function(n) {
  const r = [], { scrollLeft: i, colsInfo: o, scrollTop: a, rowsHeight: l, rowsHeightTotal: c, footerHeight: u } = n, { scrollColsWidth: s, scrollWidth: d } = o, { scrollbarSize: p = 12, horzScrollbarPos: f } = this.options;
  return s > d && r.push(
    /* @__PURE__ */ N(qo, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: s,
      clientSize: d,
      onScroll: g(this, On),
      left: o.fixedLeftWidth,
      bottom: (f === "inside" ? 0 : -p) + u,
      size: p,
      wheelContainer: this.ref
    })
  ), c > l && r.push(
    /* @__PURE__ */ N(qo, {
      key: "vert",
      type: "vert",
      scrollPos: a,
      scrollSize: c,
      clientSize: l,
      onScroll: g(this, On),
      right: 0,
      size: p,
      top: n.headerHeight,
      wheelContainer: this.ref
    })
  ), r.length ? r : null;
}, Rn = new WeakSet(), Qr = function() {
  var n;
  M(this, Ge, !1), (n = this.options.afterRender) == null || n.call(this), g(this, Q).forEach((r) => {
    var i;
    return (i = r.afterRender) == null ? void 0 : i.call(this);
  });
}, $r = new WeakMap(), kr = new WeakMap(), An = new WeakMap(), On = new WeakMap(), Er = new WeakMap(), Cr = new WeakMap(), Sr = new WeakSet(), fa = function() {
  if (g(this, je))
    return !1;
  const r = { ...Si(), ...g(this, Ke).reduce((i, o) => {
    const { defaultOptions: a } = o;
    return a && Object.assign(i, a), i;
  }, {}), ...this.props };
  return M(this, je, r), M(this, Q, g(this, Ke).reduce((i, o) => {
    const { when: a, options: l } = o;
    return (!a || a(r)) && (i.push(o), l && Object.assign(r, typeof l == "function" ? l.call(this, r) : l)), i;
  }, [])), M(this, Sn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Rr = new WeakSet(), ua = function() {
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
  const { defaultColWidth: o, minColWidth: a, maxColWidth: l } = r, c = [], u = [], s = [], d = {}, p = [], f = [];
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
    } = R, Kt = Lf(Me, ce, xt), U = {
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
      var $t, kt;
      const we = ($t = Fe.colTypes) == null ? void 0 : $t[B];
      if (we) {
        const J = typeof we == "function" ? we(U) : we;
        J && Object.assign(U.setting, J);
      }
      (kt = Fe.onAddCol) == null || kt.call(this, U);
    }), U.realWidth = U.realWidth || U.width, W === "left" ? (U.left = h, h += U.width, c.push(U)) : W === "right" ? (U.left = b, b += U.width, u.push(U)) : (U.left = _, _ += U.width, s.push(U)), U.flex && f.push(U), p.push(U), d[U.name] = U;
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
  const { data: x, rowKey: $ = "id", rowHeight: m } = r, k = [], E = (R, T, B) => {
    var te, Me;
    const W = { data: B != null ? B : { [$]: R }, id: R, index: k.length, top: 0 };
    if (B || (W.lazy = !0), k.push(W), ((te = r.onAddRow) == null ? void 0 : te.call(this, W, T)) !== !1) {
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
      typeof R == "object" ? E(`${(B = R[$]) != null ? B : ""}`, T, R) : E(`${R != null ? R : ""}`, T);
    });
  let A = k;
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
    allRows: k,
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
    flexCols: f,
    colsInfo: {
      fixedLeftCols: c,
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
  }), M(this, $e, ie);
}, Ar = new WeakSet(), pa = function() {
  (V(this, Sr, fa).call(this) || !g(this, $e)) && V(this, Rr, ua).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: r } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: a, scrollColsWidth: l } } = n;
  if (i.length) {
    const w = a - l;
    if (w > 0) {
      const x = i.reduce((m, k) => m + k.flex, 0);
      let $ = 0;
      i.forEach((m) => {
        const k = Math.min(w - $, Math.ceil(w * (m.flex / x)));
        m.realWidth = k + m.width, $ += m.realWidth;
      });
    } else
      i.forEach((x) => {
        x.realWidth = x.width;
      });
  }
  r = Math.min(Math.max(0, l - a), r);
  let c = 0;
  o.forEach((w) => {
    w.left = c, c += w.realWidth, w.visible = w.left + w.realWidth >= r && w.left <= r + a;
  });
  const { rowsHeightTotal: u, rowsHeight: s, rows: d, rowHeight: p } = n, f = Math.min(Math.max(0, u - s), this.state.scrollTop), h = Math.floor(f / p), b = f + s, _ = Math.min(d.length, Math.ceil(b / p)), v = [], { rowDataGetter: y } = this.options;
  for (let w = h; w < _; w++) {
    const x = d[w];
    x.lazy && y && (x.data = y([x.id])[0], x.lazy = !1), v.push(x);
  }
  return n.visibleRows = v, n.scrollTop = f, n.scrollLeft = r, n;
}, F(Zr, "addPlugin", ra), F(Zr, "removePlugin", oa);
function Ai(t, e) {
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
      Ai(this, r);
    },
    mouseleave() {
      Ai(this, !1);
    }
  }
};
Nn(ha, { buildIn: !0 });
function Uf(t, e) {
  var a, l;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, r = {}, { canRowCheckable: i } = this.options, o = (c, u) => {
    i && !i.call(this, c) || !!n[c] === u || (u ? n[c] = !0 : delete n[c], r[c] = u);
  };
  if (t === void 0 ? (e === void 0 && (e = !da.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((c) => {
    o(c, e != null ? e : !n[c]);
  })), Object.keys(r).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, t, r, n);
    c && Object.keys(c).forEach((u) => {
      c[u] ? n[u] = !0 : delete n[u];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, r);
    });
  }
  return r;
}
function Ff(t) {
  var e;
  return (e = this.state.checkedRows[t]) != null ? e : !1;
}
function da() {
  var n, r;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, o) => i + (e.call(this, o.id) ? 1 : 0), 0)) : t === ((r = this.layout) == null ? void 0 : r.allRows.length);
}
function zf() {
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
    toggleCheckRows: Uf,
    isRowChecked: Ff,
    isAllRowChecked: da,
    getChecks: zf
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
    var l, c;
    const { id: r } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, r))
      return t;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, r) : o) {
      const u = this.isRowChecked(r), s = (c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, u, r)) != null ? c : /* @__PURE__ */ N("input", {
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
      const c = this.isAllRowChecked(), u = (l = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, r)) != null ? l : /* @__PURE__ */ N("input", {
        type: "checkbox",
        checked: c
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
Nn(_a);
function eo(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e != null ? e : { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, r = e.children && n && n[t];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const a = eo.call(this, o);
    if (a.state !== "expanded") {
      i = !0;
      break;
    }
    o = a.parent;
  }
  return e.state = i ? "hidden" : r ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? eo.call(this, e.parent).level + 1 : 0, e;
}
function Vf(t, e) {
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
  ((l = o.children) == null ? void 0 : l.every((c) => {
    const u = !!(r[c] !== void 0 ? r[c] : i[c]);
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
    toggleRow: Vf,
    isAllCollapsed: va,
    getNestedRowInfo: eo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, o, a, l, c;
    const { nestedMap: e } = this.data, n = (o = t.data) == null ? void 0 : o[(i = this.options.nestedParentKey) != null ? i : "parent"], r = (a = e.get(t.id)) != null ? a : {
      state: "",
      level: 0
    };
    if (r.parent = n, (c = t.data) != null && c[(l = this.options.asParentKey) != null ? l : "asParent"] && (r.children = []), e.set(t.id, r), n) {
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
    var l, c, u;
    const { id: r, data: i } = n, { nestedToggle: o } = e.setting, a = this.getNestedRowInfo(r);
    if (o && (a.children || a.parent) && t.unshift((c = (l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, a, r, e, i)) != null ? c : /* @__PURE__ */ N("a", {
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
Nn(ba);
const Ce = 24 * 60 * 60 * 1e3, re = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Gt = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), to = (t, e = new Date()) => re(t).getFullYear() === re(e).getFullYear(), wa = (t, e = new Date()) => (t = re(t), e = re(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), qf = (t, e = new Date()) => {
  t = re(t), e = re(e);
  const n = 1e3 * 60 * 60 * 24, r = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((r + 4) / 7) === Math.floor((i + 4) / 7);
}, Yf = (t, e) => Gt(re(e), t), Xf = (t, e) => Gt(re(e).getTime() - Ce, t), Gf = (t, e) => Gt(re(e).getTime() + Ce, t), Kf = (t, e) => Gt(re(e).getTime() - 2 * Ce, t), pr = (t, e = "yyyy-MM-dd hh:mm") => {
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
}, Jf = (t, e, n) => {
  const r = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = pr(t, to(t) ? r.month : r.full);
  if (Gt(t, e))
    return i;
  const o = pr(e, to(t, e) ? wa(t, e) ? r.day : r.month : r.full);
  return r.str.replace("{0}", i).replace("{1}", o);
}, Zf = (t) => {
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
}, no = (t, e, n = !0, r = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, no(t, "day", n, r);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, no(t, "day", n, r);
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
        const { circleSize: n = 24, circleBorderSize: r = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, a = (n - r) / 2, l = n / 2, c = t[0];
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
          "stroke-dashoffset": Math.PI * a * 2 * (100 - c) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ N("text", {
          x: l,
          y: l + r,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(c))), t;
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
          html: r.map((c) => {
            typeof c == "string" && (c = { action: c });
            const u = o[c.action];
            return u && (c = { className: a, ...u, ...c }), Et(i, c);
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
        return typeof r == "function" ? t[0] = i === "html" ? { html: r(o) } : r(o) : i === "datetime" ? t[0] = pr(o, r) : i === "html" ? t[0] = { html: Et(r, o) } : t[0] = Et(r, o), t;
      }
    }
  }
};
Nn(xa);
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover: ha,
  checkable: _a,
  nested: ba,
  rich: xa
}, Symbol.toStringTag, { value: "Module" }));
class Ln extends ao {
}
F(Ln, "Component", Zr), F(Ln, "definePlugin", Nn), F(Ln, "removePlugin", oa), F(Ln, "plugins", Qf);
var Ee, ae;
class eu {
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
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new eu(t.target).showTarget());
});
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: Ce,
  createDate: re,
  isSameDay: Gt,
  isSameYear: to,
  isSameMonth: wa,
  isSameWeek: qf,
  isToday: Yf,
  isYesterday: Xf,
  isTomorrow: Gf,
  isDBY: Kf,
  formatDate: pr,
  formatDateSpan: Jf,
  getTimeBeforeDesc: Zf,
  calculateTimestamp: no,
  formatString: Et,
  formatBytes: Da,
  convertBytes: La,
  isObject: Hn,
  mergeDeep: Zn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ka as ActionMenu,
  ru as Avatar,
  Ct as ContextMenu,
  Ln as DTable,
  St as Dropdown,
  oo as EventBus,
  rs as Menu,
  eu as NavTabs,
  qo as Scrollbar,
  Ha as addI18nMap,
  nu as browser,
  Ta as getLangCode,
  ou as helpers,
  Mn as i18n,
  zr as nativeEvents,
  ja as setLangCode,
  al as store
};
