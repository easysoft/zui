var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _eventTarget, _handlers, _suffix, _normalizeType, normalizeType_fn, _a, _b, _options, _element, _events, _keys, _controlled, _toggleMenuByEvent, _type, _name, _storage, _alterStorage, _getActualKey, getActualKey_fn, _popper, _menu, _popper2, _virtualElement, _trigger, _hoverEventsBind, _hideTimer, _cancelHide, _bindHoverEvents, bindHoverEvents_fn, _dropdown, _ref, _rafId, _wheelRoot, _rafId2, _id, _needRender, _options2, _allPlugins, _plugins, _layout, _events2, _data, _rob, _i18nMaps, _handleEvent, _handleWindowEvent, _handleDocumentEvent, _renderHeader, renderHeader_fn, _renderRows, renderRows_fn, _renderFooter, renderFooter_fn, _renderScrollBars, renderScrollBars_fn, _afterRender, afterRender_fn, _handleRenderRow, _handleRenderHeaderRow, _handleRenderCell, _handleScroll, _handleClick, _handleKeydown, _initOptions, initOptions_fn, _initLayout, initLayout_fn, _getLayout, getLayout_fn, _nav, _navTarget;
const tailwind = "";
const global = "";
const link = "";
var n$a, l$a, u$a, i$3, t$7, o$7, f$7 = {}, e$a = [], c$7 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$7(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$7, "s$7");
function a$7(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$7, "a$7");
function h$a(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$a.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$a(l2, f2, t2, o2, null);
}
__name(h$a, "h$a");
function v$a(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$a : r };
  return null == r && null != l$a.vnode && l$a.vnode(f2), f2;
}
__name(v$a, "v$a");
function y$3() {
  return { current: null };
}
__name(y$3, "y$3");
function p$7(n2) {
  return n2.children;
}
__name(p$7, "p$7");
function d$7(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$7, "d$7");
function _$7(n2, l2) {
  if (null == l2)
    return n2.__ ? _$7(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$7(n2) : null;
}
__name(_$7, "_$7");
function k$7(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$7(n2);
  }
}
__name(k$7, "k$7");
function b$7(n2) {
  (!n2.__d && (n2.__d = true) && t$7.push(n2) && !g$7.__r++ || o$7 !== l$a.debounceRendering) && ((o$7 = l$a.debounceRendering) || setTimeout)(g$7);
}
__name(b$7, "b$7");
function g$7() {
  for (var n2; g$7.__r = t$7.length; )
    n2 = t$7.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$7 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$7({}, t2)).__v = t2.__v + 1, j$7(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$7(t2) : o2, t2.__h), z$7(u2, t2), t2.__e != o2 && k$7(t2)));
    });
}
__name(g$7, "g$7");
function w$7(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$a, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$a(null, k2, null, null, k2) : Array.isArray(k2) ? v$a(p$7, { children: k2 }, null, null, null) : k2.__b > 0 ? v$a(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$7(n2, k2, d2 = d2 || f$7, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$7(k2, s2, n2) : s2 = A$7(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$7(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$7(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$7(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$7, "w$7");
function m$7(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$7(i2, l2, u2) : A$7(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$7, "m$7");
function A$7(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$7, "A$7");
function C$7(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$7(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$7(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$7, "C$7");
function $$7(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$7.test(l2) ? u2 : u2 + "px";
}
__name($$7, "$$7");
function H$7(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$7(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$7(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$7 : I$7, o2) : n2.removeEventListener(l2, o2 ? T$7 : I$7, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$7, "H$7");
function I$7(n2) {
  this.l[n2.type + false](l$a.event ? l$a.event(n2) : n2);
}
__name(I$7, "I$7");
function T$7(n2) {
  this.l[n2.type + true](l$a.event ? l$a.event(n2) : n2);
}
__name(T$7, "T$7");
function j$7(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$a.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$7(g2, x), h2.constructor = T2, h2.render = O$7), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$7({}, h2.__s)), s$7(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$a.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$7(s$7({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$7 && null == a2.key ? a2.props.children : a2, w$7(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$7(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$a.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$a.__e(n3, u2, i2);
  }
}
__name(j$7, "j$7");
function z$7(n2, u2) {
  l$a.__c && l$a.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$a.__e(n3, u3.__v);
    }
  });
}
__name(z$7, "z$7");
function L$7(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$a.call(l2.childNodes), h2 = (y2 = i2.props || f$7).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$7(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$7(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$7(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$7(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$7(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$7(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$7, "L$7");
function M$7(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$a.__e(n3, i2);
  }
}
__name(M$7, "M$7");
function N$7(n2, u2, i2) {
  var t2, o2;
  if (l$a.unmount && l$a.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$7(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$a.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$7(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$7(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$7, "N$7");
function O$7(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$7, "O$7");
function P$1(u2, i2, t2) {
  var o2, r, e2;
  l$a.__ && l$a.__(u2, i2), r = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j$7(i2, u2 = (!o2 && t2 || i2).__k = h$a(p$7, null, [u2]), r || f$7, f$7, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r ? null : i2.firstChild ? n$a.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r ? r.__e : i2.firstChild, o2), z$7(e2, u2);
}
__name(P$1, "P$1");
n$a = e$a.slice, l$a = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$a = 0, i$3 = /* @__PURE__ */ __name(function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, "i$3"), d$7.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$7({}, this.state), "function" == typeof n2 && (n2 = n2(s$7({}, u2), this.props)), n2 && s$7(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$7(this));
}, d$7.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$7(this));
}, d$7.prototype.render = p$7, t$7 = [], g$7.__r = 0;
class EventEmitter {
  constructor(descOrTarget = "") {
    __privateAdd(this, _eventTarget, void 0);
    if (typeof descOrTarget === "object") {
      __privateSet(this, _eventTarget, descOrTarget);
    } else {
      __privateSet(this, _eventTarget, document.appendChild(document.createComment(descOrTarget)));
    }
  }
  on(type, listener, options) {
    __privateGet(this, _eventTarget).addEventListener(type, listener, options);
  }
  once(type, listener, options) {
    __privateGet(this, _eventTarget).addEventListener(type, listener, { once: true, ...options });
  }
  off(type, listener, options) {
    __privateGet(this, _eventTarget).removeEventListener(type, listener, options);
  }
  emit(event) {
    __privateGet(this, _eventTarget).dispatchEvent(event);
    return event;
  }
}
__name(EventEmitter, "EventEmitter");
_eventTarget = new WeakMap();
const nativeEvents = /* @__PURE__ */ new Set([
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
class EventBus extends EventEmitter {
  on(type, listener, options) {
    super.on(type, listener, options);
  }
  off(type, listener, options) {
    super.off(type, listener, options);
  }
  once(type, listener, options) {
    super.once(type, listener, options);
  }
  emit(event, detail) {
    if (typeof event === "string") {
      if (nativeEvents.has(event)) {
        event = new Event(event);
        Object.assign(event, { detail });
      } else {
        event = new CustomEvent(event, { detail });
      }
    }
    return super.emit(EventBus.createEvent(event, detail));
  }
  static createEvent(event, detail) {
    if (typeof event === "string") {
      if (nativeEvents.has(event)) {
        event = new Event(event);
        Object.assign(event, { detail });
      } else {
        event = new CustomEvent(event, { detail });
      }
    }
    return event;
  }
}
__name(EventBus, "EventBus");
class EventHub extends EventBus {
  constructor(descOrTarget = "", options) {
    super(descOrTarget);
    __privateAdd(this, _normalizeType);
    __privateAdd(this, _handlers, /* @__PURE__ */ new Map());
    __privateAdd(this, _suffix, void 0);
    __privateSet(this, _suffix, options == null ? void 0 : options.customEventSuffix);
  }
  on(type, listener, options) {
    type = __privateMethod(this, _normalizeType, normalizeType_fn).call(this, type);
    super.on(type, listener, options);
    __privateGet(this, _handlers).set(listener, [type, options]);
  }
  off(type, listener, options) {
    type = __privateMethod(this, _normalizeType, normalizeType_fn).call(this, type);
    super.off(type, listener, options);
    __privateGet(this, _handlers).delete(listener);
  }
  once(type, listener, options) {
    type = __privateMethod(this, _normalizeType, normalizeType_fn).call(this, type);
    const onceListener = /* @__PURE__ */ __name((event) => {
      listener(event);
      __privateGet(this, _handlers).delete(onceListener);
    }, "onceListener");
    super.once(type, onceListener, options);
    __privateGet(this, _handlers).set(onceListener, [type, options]);
  }
  emit(event, detail) {
    if (typeof event === "string") {
      event = __privateMethod(this, _normalizeType, normalizeType_fn).call(this, event);
    }
    return super.emit(event, detail);
  }
  offAll() {
    Array.from(__privateGet(this, _handlers).entries()).forEach(([handler, [type, options]]) => {
      super.off(type, handler, options);
    });
    __privateGet(this, _handlers).clear();
  }
}
__name(EventHub, "EventHub");
_handlers = new WeakMap();
_suffix = new WeakMap();
_normalizeType = new WeakSet();
normalizeType_fn = /* @__PURE__ */ __name(function(type) {
  const suffix = __privateGet(this, _suffix);
  if (nativeEvents.has(type) || typeof suffix !== "string" || type.endsWith(suffix)) {
    return type;
  }
  return `${type}${suffix}`;
}, "#normalizeType");
function deepGetPath(object, pathName) {
  if (object === null || object === void 0) {
    return [object, void 0];
  }
  if (typeof pathName === "string") {
    pathName = pathName.split(".");
  }
  const fullPath = pathName.join(".");
  let context = object;
  const way = [context];
  while (typeof context === "object" && context !== null && pathName.length) {
    let name = pathName.shift();
    let subName;
    const bracketIndex = name.indexOf("[");
    if (bracketIndex > 0 && bracketIndex < name.length - 1 && name.endsWith("]")) {
      subName = name.substring(bracketIndex + 1, name.length - 1);
      name = name.substring(0, bracketIndex);
    }
    context = context[name];
    way.push(context);
    if (subName !== void 0) {
      if (typeof context === "object" && context !== null) {
        if (context instanceof Map) {
          context = context.get(subName);
        } else {
          context = context[subName];
        }
        way.push(context);
      } else {
        throw new Error(`Cannot access property "${name}[${subName}]", the full path is "${fullPath}".`);
      }
    }
  }
  if (pathName.length) {
    throw new Error(`Cannot access property with rest path "${pathName.join(".")}", the full path is "${fullPath}".`);
  }
  return way;
}
__name(deepGetPath, "deepGetPath");
function deepGet(object, pathName, defaultValue) {
  const way = deepGetPath(object, pathName);
  const lastValue = way[way.length - 1];
  return lastValue === void 0 ? defaultValue : lastValue;
}
__name(deepGet, "deepGet");
function isObject(item) {
  return !!item && typeof item === "object" && !Array.isArray(item);
}
__name(isObject, "isObject");
function mergeDeep(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}
__name(mergeDeep, "mergeDeep");
function formatString(str, ...args) {
  var _a2;
  if (args.length === 0) {
    return str;
  }
  if (args.length === 1 && typeof args[0] === "object" && args[0]) {
    const obj = args[0];
    Object.keys(obj).forEach((key) => {
      var _a3;
      const value = (_a3 = obj[key]) != null ? _a3 : 0;
      str = str.replace(new RegExp(`\\{${key}\\}`, "g"), `${value}`);
    });
    return str;
  }
  for (let i2 = 0; i2 < args.length; i2++) {
    const arg = (_a2 = args[i2]) != null ? _a2 : "";
    str = str.replace(new RegExp(`\\{${i2}\\}`, "g"), `${arg}`);
  }
  return str;
}
__name(formatString, "formatString");
var BYTE_UNITS = /* @__PURE__ */ ((BYTE_UNITS2) => {
  BYTE_UNITS2[BYTE_UNITS2["B"] = 1] = "B";
  BYTE_UNITS2[BYTE_UNITS2["KB"] = 1024] = "KB";
  BYTE_UNITS2[BYTE_UNITS2["MB"] = 1048576] = "MB";
  BYTE_UNITS2[BYTE_UNITS2["GB"] = 1073741824] = "GB";
  BYTE_UNITS2[BYTE_UNITS2["TB"] = 1099511627776] = "TB";
  return BYTE_UNITS2;
})(BYTE_UNITS || {});
function formatBytes(size, fixed = 2, unit = "") {
  if (Number.isNaN(size)) {
    return "?KB";
  }
  if (!unit) {
    if (size < 1024) {
      unit = "B";
    } else if (size < 1048576) {
      unit = "KB";
    } else if (size < 1073741824) {
      unit = "MB";
    } else if (size < 1099511627776) {
      unit = "GB";
    } else {
      unit = "TB";
    }
  }
  return (size / BYTE_UNITS[unit]).toFixed(fixed) + unit;
}
__name(formatBytes, "formatBytes");
const convertBytes = /* @__PURE__ */ __name((str) => {
  const pattern = /^[0-9]*(B|KB|MB|GB|TB)$/;
  str = str.toUpperCase();
  const matchRes = str.match(pattern);
  if (!matchRes) {
    return 0;
  }
  const unit = matchRes[1];
  str = str.replace(unit, "");
  return Number.parseInt(str, 10) * BYTE_UNITS[unit];
}, "convertBytes");
let globalLangCode = (_b = (_a = document.documentElement.getAttribute("lang")) == null ? void 0 : _a.toLowerCase()) != null ? _b : "zh_cn";
let globalLangMap;
function getLangCode() {
  return globalLangCode;
}
__name(getLangCode, "getLangCode");
function setLangCode(langCode) {
  globalLangCode = langCode.toLowerCase();
}
__name(setLangCode, "setLangCode");
function addI18nMap(codeOrMap, values) {
  if (!globalLangMap) {
    globalLangMap = {};
  }
  if (typeof codeOrMap === "string") {
    codeOrMap = { [codeOrMap]: values != null ? values : {} };
  }
  mergeDeep(globalLangMap, codeOrMap);
}
__name(addI18nMap, "addI18nMap");
function i18n(maps, key, args, defaultValue, langCode, globalPrefix) {
  if (!Array.isArray(maps)) {
    maps = globalLangMap ? [globalLangMap, maps] : [maps];
  } else if (globalLangMap) {
    maps.unshift(globalLangMap);
  }
  if (typeof args === "string") {
    globalPrefix = langCode;
    langCode = defaultValue;
    defaultValue = args;
    args = void 0;
  }
  const lang = langCode || globalLangCode;
  let value;
  for (const map of maps) {
    if (!map) {
      continue;
    }
    const mapValues = map[lang];
    if (!mapValues) {
      continue;
    }
    const mapKey = globalPrefix && map === globalLangMap ? `${globalPrefix}.${key}` : key;
    value = deepGet(mapValues, mapKey);
    if (value !== void 0) {
      break;
    }
  }
  if (value === void 0) {
    return defaultValue;
  }
  if (args) {
    return formatString(value, ...Array.isArray(args) ? args : [args]);
  }
  return value;
}
__name(i18n, "i18n");
i18n.addLang = addI18nMap;
i18n.getCode = getLangCode;
i18n.setCode = setLangCode;
function parseDataset(dataset) {
  return Object.fromEntries(Object.entries(dataset).map(([key, value]) => {
    if (typeof value === "string") {
      try {
        value = JSON.parse(value);
      } catch (_2) {
      }
    }
    return [key, value];
  }));
}
__name(parseDataset, "parseDataset");
class ComponentBase {
  constructor(element, options) {
    __privateAdd(this, _options, void 0);
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _events, void 0);
    var _a2;
    element = typeof element === "string" ? document.querySelector(element) : element;
    if (this.constructor.EVENTS) {
      __privateSet(this, _events, new EventHub(element, { customEventSuffix: `.${this.constructor.KEY}` }));
    }
    __privateSet(this, _options, { ...this.constructor.DEFAULT, ...element instanceof HTMLElement ? parseDataset(element.dataset) : null, ...options });
    this.constructor.all.set(element, this);
    __privateSet(this, _element, element);
    this.init();
    (_a2 = __privateGet(this, _events)) == null ? void 0 : _a2.emit("inited", this);
  }
  get options() {
    return __privateGet(this, _options);
  }
  get element() {
    return __privateGet(this, _element);
  }
  get events() {
    return __privateGet(this, _events);
  }
  init() {
  }
  setOptions(options) {
    if (options) {
      Object.assign(__privateGet(this, _options), options);
    }
    return __privateGet(this, _options);
  }
  render(options) {
    this.setOptions(options);
  }
  destroy() {
    this.constructor.all.delete(__privateGet(this, _element));
    if (__privateGet(this, _events)) {
      __privateGet(this, _events).emit("destroyed", this);
      __privateGet(this, _events).offAll();
    }
  }
  on(type, listener, options) {
    var _a2;
    (_a2 = __privateGet(this, _events)) == null ? void 0 : _a2.on(type, listener, options);
  }
  once(type, listener, options) {
    var _a2;
    (_a2 = __privateGet(this, _events)) == null ? void 0 : _a2.once(type, listener, options);
  }
  off(type, listener, options) {
    var _a2;
    (_a2 = __privateGet(this, _events)) == null ? void 0 : _a2.off(type, listener, options);
  }
  emit(event, detail) {
    var _a2;
    let eventObject = EventHub.createEvent(event, detail);
    const eventOptionName = `on${eventObject.type.replace(`.${this.constructor.KEY}`, "")}`;
    const eventCallback = __privateGet(this, _options)[eventOptionName];
    if (eventCallback && eventCallback(eventObject) === false) {
      eventObject.preventDefault();
      eventObject.stopPropagation();
    }
    eventObject = (_a2 = __privateGet(this, _events)) == null ? void 0 : _a2.emit(eventObject);
    return eventObject;
  }
  i18n(key, args, defaultValue) {
    var _a2;
    return (_a2 = i18n(__privateGet(this, _options).i18n, key, args, defaultValue, this.options.lang, this.constructor.NAME)) != null ? _a2 : `{i18n:${key}}`;
  }
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const name = this.NAME;
    if (this.allComponents.has(name)) {
      return this.allComponents.get(name);
    }
    const map = /* @__PURE__ */ new Map();
    this.allComponents.set(name, map);
    return map;
  }
  static getAll() {
    return this.all;
  }
  static get(element) {
    return this.all.get(element);
  }
  static ensure(element, options) {
    return this.get(element) || new this(element, options);
  }
}
__name(ComponentBase, "ComponentBase");
_options = new WeakMap();
_element = new WeakMap();
_events = new WeakMap();
__publicField(ComponentBase, "EVENTS", false);
__publicField(ComponentBase, "DEFAULT", {});
__publicField(ComponentBase, "allComponents", /* @__PURE__ */ new Map());
class ComponentFromReact extends ComponentBase {
  constructor() {
    super(...arguments);
    __publicField(this, "ref", y$3());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  render(options) {
    const Component = this.constructor.Component;
    P$1(/* @__PURE__ */ h$a(Component, {
      ref: this.ref,
      ...this.setOptions(options)
    }), this.element);
  }
}
__name(ComponentFromReact, "ComponentFromReact");
var n$9, l$9, u$9, i$2, t$6, o$6, f$6 = {}, e$9 = [], c$6 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$6(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$6, "s$6");
function a$6(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$6, "a$6");
function h$9(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$9.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$9(l2, f2, t2, o2, null);
}
__name(h$9, "h$9");
function v$9(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$9 : r };
  return null == r && null != l$9.vnode && l$9.vnode(f2), f2;
}
__name(v$9, "v$9");
function y$2() {
  return { current: null };
}
__name(y$2, "y$2");
function p$6(n2) {
  return n2.children;
}
__name(p$6, "p$6");
function d$6(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$6, "d$6");
function _$6(n2, l2) {
  if (null == l2)
    return n2.__ ? _$6(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$6(n2) : null;
}
__name(_$6, "_$6");
function k$6(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$6(n2);
  }
}
__name(k$6, "k$6");
function b$6(n2) {
  (!n2.__d && (n2.__d = true) && t$6.push(n2) && !g$6.__r++ || o$6 !== l$9.debounceRendering) && ((o$6 = l$9.debounceRendering) || setTimeout)(g$6);
}
__name(b$6, "b$6");
function g$6() {
  for (var n2; g$6.__r = t$6.length; )
    n2 = t$6.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$6 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$6({}, t2)).__v = t2.__v + 1, j$6(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$6(t2) : o2, t2.__h), z$6(u2, t2), t2.__e != o2 && k$6(t2)));
    });
}
__name(g$6, "g$6");
function w$6(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$9, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$9(null, k2, null, null, k2) : Array.isArray(k2) ? v$9(p$6, { children: k2 }, null, null, null) : k2.__b > 0 ? v$9(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$6(n2, k2, d2 = d2 || f$6, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$6(k2, s2, n2) : s2 = A$6(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$6(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$6(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$6(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$6, "w$6");
function m$6(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$6(i2, l2, u2) : A$6(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$6, "m$6");
function A$6(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$6, "A$6");
function C$6(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$6(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$6(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$6, "C$6");
function $$6(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$6.test(l2) ? u2 : u2 + "px";
}
__name($$6, "$$6");
function H$6(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$6(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$6(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$6 : I$6, o2) : n2.removeEventListener(l2, o2 ? T$6 : I$6, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$6, "H$6");
function I$6(n2) {
  this.l[n2.type + false](l$9.event ? l$9.event(n2) : n2);
}
__name(I$6, "I$6");
function T$6(n2) {
  this.l[n2.type + true](l$9.event ? l$9.event(n2) : n2);
}
__name(T$6, "T$6");
function j$6(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$9.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$6(g2, x), h2.constructor = T2, h2.render = O$6), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$6({}, h2.__s)), s$6(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$9.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$6(s$6({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$6 && null == a2.key ? a2.props.children : a2, w$6(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$6(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$9.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$9.__e(n3, u2, i2);
  }
}
__name(j$6, "j$6");
function z$6(n2, u2) {
  l$9.__c && l$9.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$9.__e(n3, u3.__v);
    }
  });
}
__name(z$6, "z$6");
function L$6(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$9.call(l2.childNodes), h2 = (y2 = i2.props || f$6).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$6(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$6(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$6(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$6(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$6(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$6(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$6, "L$6");
function M$6(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$9.__e(n3, i2);
  }
}
__name(M$6, "M$6");
function N$6(n2, u2, i2) {
  var t2, o2;
  if (l$9.unmount && l$9.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$6(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$9.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$6(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$6(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$6, "N$6");
function O$6(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$6, "O$6");
n$9 = e$9.slice, l$9 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$9 = 0, i$2 = /* @__PURE__ */ __name(function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, "i$2"), d$6.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$6({}, this.state), "function" == typeof n2 && (n2 = n2(s$6({}, u2), this.props)), n2 && s$6(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$6(this));
}, d$6.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$6(this));
}, d$6.prototype.render = p$6, t$6 = [], g$6.__r = 0;
const classes = /* @__PURE__ */ __name((...args) => {
  const classNames = args.map((arg) => {
    if (Array.isArray(arg)) {
      return classes(...arg);
    }
    if (typeof arg === "function") {
      return classes(arg());
    }
    if (arg !== null && typeof arg === "object") {
      return Object.keys(arg).filter((className) => {
        const condition = arg[className];
        if (typeof condition === "function") {
          return !!condition();
        }
        return !!condition;
      }).join(" ");
    }
    return arg;
  }).filter((x) => typeof x === "string" && x.length);
  return classNames.length ? classNames.join(" ") : void 0;
}, "classes");
const caret = "";
function ActionDivider({
  component = "div",
  className,
  children,
  style: style2,
  attrs
}) {
  return h$9(component, {
    className: classes(className),
    style: style2,
    ...attrs
  }, children);
}
__name(ActionDivider, "ActionDivider");
function ActionItem({
  component = "a",
  className,
  children,
  attrs,
  url,
  disabled,
  active,
  icon,
  text,
  target,
  trailingIcon,
  hint,
  style: style2,
  onClick: onClick2
}) {
  const finalChildren = [
    typeof icon === "string" ? /* @__PURE__ */ h$9("i", {
      class: `icon ${icon}`
    }) : icon,
    /* @__PURE__ */ h$9("span", {
      className: "text"
    }, text),
    typeof children === "function" ? children() : children,
    typeof trailingIcon === "string" ? /* @__PURE__ */ h$9("i", {
      class: `icon ${trailingIcon}`
    }) : trailingIcon
  ];
  return h$9(component, {
    className: classes(className, { disabled, active }),
    title: hint,
    [component === "a" ? "href" : "data-url"]: url,
    [component === "a" ? "target" : "data-target"]: target,
    style: style2,
    onClick: onClick2,
    ...attrs
  }, ...finalChildren);
}
__name(ActionItem, "ActionItem");
function ActionHeading({
  component = "div",
  className,
  text,
  attrs,
  children,
  style: style2,
  onClick: onClick2
}) {
  return h$9(component, {
    className: classes(className),
    style: style2,
    onClick: onClick2,
    ...attrs
  }, text, typeof children === "function" ? children() : children);
}
__name(ActionHeading, "ActionHeading");
function ActionSpace({
  component = "div",
  className,
  style: style2,
  space,
  flex,
  attrs,
  onClick: onClick2,
  children
}) {
  return h$9(component, {
    className: classes(className),
    style: { width: space, height: space, flex, ...style2 },
    onClick: onClick2,
    ...attrs
  }, children);
}
__name(ActionSpace, "ActionSpace");
function renderCustomResult(props) {
  const {
    tag,
    className,
    style: style2,
    renders,
    generateArgs = [],
    generatorThis,
    generators,
    onGenerate,
    onRenderItem,
    ...others
  } = props;
  const classList = [className];
  const rootStyle = { ...style2 };
  const result = [];
  const rawHtml = [];
  renders.forEach((render) => {
    var _a2;
    const items = [];
    if (typeof render === "string" && generators && generators[render]) {
      render = generators[render];
    }
    if (typeof render === "function") {
      if (onGenerate) {
        items.push(...onGenerate.call(generatorThis, render, result, ...generateArgs));
      } else {
        items.push(...(_a2 = render.call(generatorThis, result, ...generateArgs)) != null ? _a2 : []);
      }
    } else {
      items.push(render);
    }
    items.forEach((item) => {
      var _a3;
      if (item === void 0 || item === null) {
        return;
      }
      if (typeof item === "object" && !i$3(item) && ("html" in item || "__html" in item || "className" in item || "style" in item || "attrs" in item || "children" in item)) {
        if (item.html) {
          result.push(
            /* @__PURE__ */ h$a("div", {
              className: classes(item.className),
              style: item.style,
              dangerouslySetInnerHTML: { __html: item.html },
              ...(_a3 = item.attrs) != null ? _a3 : {}
            })
          );
        } else if (item.__html) {
          rawHtml.push(item.__html);
        } else {
          if (item.style) {
            Object.assign(rootStyle, item.style);
          }
          if (item.className) {
            classList.push(item.className);
          }
          if (item.children) {
            result.push(item.children);
          }
          if (item.attrs) {
            Object.assign(others, item.attrs);
          }
        }
      } else {
        result.push(item);
      }
    });
  });
  if (rawHtml.length) {
    Object.assign(others, { dangerouslySetInnerHTML: { __html: rawHtml } });
  }
  return [{
    className: classes(classList),
    style: rootStyle,
    ...others
  }, result];
}
__name(renderCustomResult, "renderCustomResult");
function CustomRender({
  tag = "div",
  ...props
}) {
  const [attrs, children] = renderCustomResult(props);
  return h$a(tag, attrs, ...children);
}
__name(CustomRender, "CustomRender");
function ActionCustom(props) {
  return /* @__PURE__ */ h$9(CustomRender, {
    ...props
  });
}
__name(ActionCustom, "ActionCustom");
function ActionBasic({
  component = "div",
  className,
  children,
  style: style2,
  attrs
}) {
  return h$9(component, {
    className: classes(className),
    style: style2,
    ...attrs
  }, children);
}
__name(ActionBasic, "ActionBasic");
const _ActionMenu$1 = class extends d$6 {
  constructor() {
    super(...arguments);
    __publicField(this, "ref", y$2());
  }
  get name() {
    var _a2;
    return (_a2 = this.props.name) != null ? _a2 : this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(true);
  }
  componentDidUpdate() {
    this.afterRender(false);
  }
  componentWillUnmount() {
    var _a2, _b2;
    (_b2 = (_a2 = this.props).beforeDestroy) == null ? void 0 : _b2.call(_a2, { menu: this });
  }
  afterRender(firstRender) {
    var _a2, _b2;
    (_b2 = (_a2 = this.props).afterRender) == null ? void 0 : _b2.call(_a2, { menu: this, firstRender });
  }
  handleItemClick(item, index2, onClick2, event) {
    if (onClick2) {
      onClick2.call(event.target, event);
    }
    const { onClickItem } = this.props;
    if (onClickItem) {
      onClickItem({ menu: this, item, index: index2, event });
    }
  }
  beforeRender() {
    var _a2;
    const options = { ...this.props };
    if (typeof options.items === "function") {
      options.items = options.items(this);
    }
    const customOptions = (_a2 = options.beforeRender) == null ? void 0 : _a2.call(options, { menu: this, options });
    if (customOptions) {
      Object.assign(options, customOptions);
    }
    return options;
  }
  getItemRenderProps(options, item, index2) {
    const { itemProps, onClickItem } = options;
    const listItem = { key: index2, ...item };
    if (itemProps) {
      Object.assign(listItem, itemProps[item.type || "item"]);
    }
    if (onClickItem || item.onClick) {
      listItem.onClick = this.handleItemClick.bind(this, listItem, index2, item.onClick);
    }
    listItem.className = classes(listItem.className);
    return listItem;
  }
  renderItem(options, item, index2) {
    const listItem = this.getItemRenderProps(options, item, index2);
    const { itemRender } = options;
    if (itemRender) {
      if (typeof itemRender === "object") {
        const CustomRenderComponent = itemRender[item.type || "item"];
        if (CustomRenderComponent) {
          return /* @__PURE__ */ h$9(CustomRenderComponent, {
            ...listItem
          });
        }
      } else if (typeof itemRender === "function") {
        const result = itemRender.call(this, listItem, h$9);
        if (i$2(result)) {
          return result;
        }
        if (typeof result === "object") {
          Object.assign(listItem, result);
        }
      }
    }
    const { type = "item", component, key = index2, rootAttrs, rootClass, rootStyle, rootChildren, ...itemProps } = listItem;
    const ItemComponent = !component || typeof component === "string" ? this.constructor.ItemComponents ? this.constructor.ItemComponents[type] || _ActionMenu$1.ItemComponents[type] : _ActionMenu$1.ItemComponents[type] : component;
    Object.assign(itemProps, {
      type,
      component: typeof component === "string" ? component : void 0
    });
    return this.renderTypedItem(ItemComponent, {
      className: classes(rootClass),
      children: rootChildren,
      style: rootStyle,
      key,
      ...rootAttrs
    }, {
      ...itemProps,
      type,
      component: typeof component === "string" ? component : void 0
    });
  }
  renderTypedItem(ItemComponent, rootProps, itemProps) {
    const { children, className, key, ...rootAttrs } = rootProps;
    return /* @__PURE__ */ h$9("li", {
      className: classes(`${this.name}-${itemProps.type}`, className),
      key,
      ...rootAttrs
    }, /* @__PURE__ */ h$9(ItemComponent, {
      ...itemProps
    }), typeof children === "function" ? children() : children);
  }
  render() {
    const options = this.beforeRender();
    const {
      name,
      style: style2,
      itemProps,
      className,
      items,
      children,
      itemRender,
      onClickItem,
      beforeRender,
      afterRender,
      beforeDestroy,
      ...others
    } = options;
    const RootTag = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ h$9(RootTag, {
      class: classes(this.name, className),
      ...others,
      ref: this.ref
    }, items && items.map(this.renderItem.bind(this, options)), children);
  }
};
let ActionMenu$1 = _ActionMenu$1;
__name(ActionMenu$1, "ActionMenu$1");
__publicField(ActionMenu$1, "ItemComponents", {
  divider: ActionDivider,
  item: ActionItem,
  heading: ActionHeading,
  space: ActionSpace,
  custom: ActionCustom,
  basic: ActionBasic
});
__publicField(ActionMenu$1, "ROOT_TAG", "menu");
__publicField(ActionMenu$1, "NAME", "action-menu");
class ActionMenu extends ComponentFromReact {
}
__name(ActionMenu, "ActionMenu");
__publicField(ActionMenu, "NAME", "actionmenu");
__publicField(ActionMenu, "Component", ActionMenu$1);
function ActionNestedItem({
  ...others
}) {
  return /* @__PURE__ */ h$9(ActionItem, {
    ...others
  });
}
__name(ActionNestedItem, "ActionNestedItem");
class ActionMenuNested$1 extends ActionMenu$1 {
  constructor(props) {
    var _a2;
    super(props);
    __privateAdd(this, _keys, /* @__PURE__ */ new Set());
    __privateAdd(this, _controlled, void 0);
    __privateAdd(this, _toggleMenuByEvent, /* @__PURE__ */ __name((key, toggle2, event) => {
      this.toggleNestedMenu(key, toggle2);
      event.preventDefault();
    }, "#toggleMenuByEvent"));
    __privateSet(this, _controlled, props.nestedShow === void 0);
    if (__privateGet(this, _controlled)) {
      this.state = { nestedShow: (_a2 = props.defaultNestedShow) != null ? _a2 : {} };
    }
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const options = super.beforeRender();
    const { nestedShow, nestedTrigger, defaultNestedShow, controlledMenu, ...props } = options;
    return props;
  }
  renderNestedMenu(item) {
    let { items } = item;
    if (!items) {
      return;
    }
    if (typeof items === "function") {
      items = items(item, this);
    }
    if (!items.length) {
      return;
    }
    const NestedMenuComponent = this.constructor;
    return /* @__PURE__ */ h$9(NestedMenuComponent, {
      items,
      name: this.props.name,
      nestedShow: __privateGet(this, _controlled) ? this.state.nestedShow : this.props.nestedShow,
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
  isNestedItem(item) {
    return (!item.type || item.type === "item") && !!item.items;
  }
  renderToggleIcon(show, item) {
  }
  getItemRenderProps(options, item, index2) {
    var _a2;
    const props = super.getItemRenderProps(options, item, index2);
    if (!this.isNestedItem(props)) {
      return props;
    }
    const key = (_a2 = props.key) != null ? _a2 : index2;
    __privateGet(this, _keys).add(key);
    const show = this.isNestedMenuShow(key);
    if (show) {
      props.rootChildren = [
        props.rootChildren,
        this.renderNestedMenu(item)
      ];
      props.component = ActionNestedItem;
    }
    if (this.nestedTrigger === "hover") {
      props.rootAttrs = {
        ...props.rootAttrs,
        onMouseEnter: __privateGet(this, _toggleMenuByEvent).bind(this, key, true),
        onMouseLeave: __privateGet(this, _toggleMenuByEvent).bind(this, key, false)
      };
    } else if (this.nestedTrigger === "click") {
      const { onClick: onClick2 } = props;
      props.onClick = (event) => {
        __privateGet(this, _toggleMenuByEvent).call(this, key, void 0, event);
        onClick2 == null ? void 0 : onClick2(event);
      };
    }
    const toggleIcon = this.renderToggleIcon(show, props);
    if (toggleIcon) {
      props.children = [props.children, toggleIcon];
    }
    props.rootClass = [props.rootClass, "has-nested-menu", show ? "show" : ""];
    return props;
  }
  isNestedMenuShow(key) {
    const nestedShow = __privateGet(this, _controlled) ? this.state.nestedShow : this.props.nestedShow;
    if (nestedShow && typeof nestedShow === "object") {
      return nestedShow[key];
    }
    return !!nestedShow;
  }
  toggleNestedMenu(key, toggle2) {
    const { controlledMenu } = this.props;
    if (controlledMenu) {
      return controlledMenu.toggleNestedMenu(key, toggle2);
    }
    if (!__privateGet(this, _controlled)) {
      return false;
    }
    let { nestedShow: nestedShowState = {} } = this.state;
    if (typeof nestedShowState === "boolean") {
      if (nestedShowState === true) {
        nestedShowState = [...__privateGet(this, _keys).values()].reduce((map, k2) => {
          map[k2] = true;
          return map;
        }, {});
      } else {
        nestedShowState = {};
      }
    }
    if (toggle2 === void 0) {
      toggle2 = !nestedShowState[key];
    } else if (!!nestedShowState[key] === !!toggle2) {
      return false;
    }
    if (toggle2) {
      nestedShowState[key] = toggle2;
    } else {
      delete nestedShowState[key];
    }
    this.setState({ nestedShow: { ...nestedShowState } });
    return true;
  }
  showNestedMenu(key) {
    return this.toggleNestedMenu(key, true);
  }
  hideNestedMenu(key) {
    return this.toggleNestedMenu(key, false);
  }
  showAllNestedMenu() {
    if (!__privateGet(this, _controlled)) {
      return;
    }
    this.setState({ nestedShow: true });
  }
  hideAllNestedMenu() {
    if (!__privateGet(this, _controlled)) {
      return;
    }
    this.setState({ nestedShow: false });
  }
}
__name(ActionMenuNested$1, "ActionMenuNested$1");
_keys = new WeakMap();
_controlled = new WeakMap();
_toggleMenuByEvent = new WeakMap();
__publicField(ActionMenuNested$1, "ItemComponents", {
  item: ActionNestedItem
});
class ActionMenuNested extends ComponentFromReact {
}
__name(ActionMenuNested, "ActionMenuNested");
__publicField(ActionMenuNested, "NAME", "actionmenunested");
__publicField(ActionMenuNested, "Component", ActionMenuNested$1);
const vars$d = "";
const alert = "";
const alertClass = "";
const index$k = "";
const vars$c = "";
const breadcrumb = "";
const index$j = "";
const vars$b = "";
const checkbox = "";
const icons_core = "";
const icons_set = "";
const vars$a = "";
const input = "";
const inputSize = "";
const vars$9 = "";
const label = "";
var n$8, l$8, u$8, e$8 = [];
function h$8(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$8.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$8(l2, f2, t2, o2, null);
}
__name(h$8, "h$8");
function v$8(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$8 : r };
  return null == r && null != l$8.vnode && l$8.vnode(f2), f2;
}
__name(v$8, "v$8");
n$8 = e$8.slice, l$8 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$8 = 0;
const index$i = "";
class Menu$1 extends ActionMenuNested$1 {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const options = super.beforeRender();
    let { hasIcons } = options;
    if (hasIcons === void 0) {
      hasIcons = options.items.some((x) => x.icon);
    }
    options.className = classes(options.className, this.menuName, {
      "has-icons": hasIcons,
      "has-nested-items": options.items.some((x) => this.isNestedItem(x))
    });
    return options;
  }
  renderToggleIcon(show) {
    return /* @__PURE__ */ h$8("span", {
      class: `${this.name}-toggle-icon caret-${show ? "down" : "right"}`
    });
  }
}
__name(Menu$1, "Menu$1");
__publicField(Menu$1, "NAME", "menu");
class Menu extends ComponentFromReact {
}
__name(Menu, "Menu");
__publicField(Menu, "NAME", "menu");
__publicField(Menu, "Component", Menu$1);
const vars$8 = "";
const progress = "";
const vars$7 = "";
const progressCircle = "";
const index$h = "";
const upload = "";
const vars$6 = "";
const inputGroup = "";
function selectText(elementOrSelector) {
  const element = typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector;
  if (!element) {
    return false;
  }
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    element.select();
    return true;
  }
  if (window.getSelection) {
    const selection = window.getSelection();
    if (selection) {
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      return true;
    }
  }
  return false;
}
__name(selectText, "selectText");
function domReady(fn2) {
  if (document.readyState !== "loading") {
    fn2();
  } else {
    document.addEventListener("DOMContentLoaded", fn2);
  }
}
__name(domReady, "domReady");
function isElementVisible(elementOrSelector, options) {
  const element = typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector;
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  if (options == null ? void 0 : options.fullyCheck) {
    return rect.left >= 0 && rect.top >= 0 && rect.left + rect.width <= windowWidth && rect.top + rect.height <= windowHeight;
  }
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
__name(isElementVisible, "isElementVisible");
const main$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText,
  domReady,
  isElementVisible,
  classes
}, Symbol.toStringTag, { value: "Module" }));
let nanoid$1 = /* @__PURE__ */ __name((size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, ""), "nanoid$1");
const _Store = class {
  constructor(name, type = "local") {
    __privateAdd(this, _getActualKey);
    __privateAdd(this, _type, void 0);
    __privateAdd(this, _name, void 0);
    __privateAdd(this, _storage, void 0);
    __privateAdd(this, _alterStorage, void 0);
    __privateSet(this, _type, type);
    __privateSet(this, _name, `ZUI_STORE:${name != null ? name : nanoid$1()}`);
    __privateSet(this, _storage, type === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return __privateGet(this, _type);
  }
  get session() {
    if (this.type === "session") {
      return this;
    }
    if (!__privateGet(this, _alterStorage)) {
      __privateSet(this, _alterStorage, new _Store(__privateGet(this, _name), "session"));
    }
    return __privateGet(this, _alterStorage);
  }
  get(key, defaultValue) {
    const value = __privateGet(this, _storage).getItem(__privateMethod(this, _getActualKey, getActualKey_fn).call(this, key));
    if (typeof value === "string") {
      return JSON.parse(value);
    }
    return value != null ? value : defaultValue;
  }
  set(key, value) {
    if (value === void 0 || value === null) {
      return this.remove(key);
    }
    __privateGet(this, _storage).setItem(__privateMethod(this, _getActualKey, getActualKey_fn).call(this, key), JSON.stringify(value));
  }
  remove(key) {
    __privateGet(this, _storage).removeItem(__privateMethod(this, _getActualKey, getActualKey_fn).call(this, key));
  }
  each(callback) {
    for (let i2 = 0; i2 < __privateGet(this, _storage).length; i2++) {
      const key = __privateGet(this, _storage).key(i2);
      if (key == null ? void 0 : key.startsWith(__privateGet(this, _name))) {
        const value = __privateGet(this, _storage).getItem(key);
        if (typeof value === "string") {
          callback(key.substring(__privateGet(this, _name).length + 1), JSON.parse(value));
        }
      }
    }
  }
  getAll() {
    const result = {};
    this.each((key, value) => {
      result[key] = value;
    });
    return result;
  }
};
let Store = _Store;
__name(Store, "Store");
_type = new WeakMap();
_name = new WeakMap();
_storage = new WeakMap();
_alterStorage = new WeakMap();
_getActualKey = new WeakSet();
getActualKey_fn = /* @__PURE__ */ __name(function(key) {
  return `${__privateGet(this, _name)}:${key}`;
}, "#getActualKey");
const store = new Store("DEFAULT");
function createStore(name, type = "local") {
  return new Store(name, type);
}
__name(createStore, "createStore");
Object.assign(store, { create: createStore });
const avatarGroup = "";
const index$g = "";
const vars$5 = "";
const form = "";
const formControl = "";
const vars$4 = "";
const modal = "";
function lockScroll() {
  const widthBar = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${widthBar}px`;
  document.body.classList.add("modal-open");
}
__name(lockScroll, "lockScroll");
function unlockScroll() {
  document.body.style.paddingRight = "";
  document.body.classList.remove("modal-open");
}
__name(unlockScroll, "unlockScroll");
function showModal(modal2, position) {
  lockScroll();
  modal2.classList.add("block");
  adjustPosition(modal2, position);
  modal2.onclick = (event) => onClick(event, modal2);
  window.addEventListener("resize", () => {
    adjustPosition(modal2, position);
  });
}
__name(showModal, "showModal");
function hideModal(ele) {
  var _a2;
  unlockScroll();
  (_a2 = ele.classList) == null ? void 0 : _a2.remove("block");
}
__name(hideModal, "hideModal");
function adjustPosition(target, position) {
  const $dialog = target.querySelector(".modal-dialog");
  if (!$dialog) {
    return;
  }
  const half = Math.max(0, (window.innerHeight - $dialog.clientHeight) / 2);
  if (position === "fit") {
    $dialog.style.top = `${half > 50 ? Math.floor(half * 2 / 3) : half}px`;
    return;
  }
  if (position === "center") {
    $dialog.style.top = `${half}px`;
    return;
  }
  $dialog.style.top = position;
}
__name(adjustPosition, "adjustPosition");
function onClick(e2, modal2) {
  const elm = e2.target;
  const btn = elm.closest("[data-dismiss=modal]");
  if (btn) {
    e2.stopPropagation();
    hideModal(modal2);
  }
}
__name(onClick, "onClick");
function getTarget(elm) {
  var _a2, _b2;
  if (elm instanceof HTMLAnchorElement) {
    const href = elm.href || "";
    return (_b2 = (_a2 = href.match(/(?<selector>#\S+)$/)) == null ? void 0 : _a2.groups) == null ? void 0 : _b2.selector;
  }
  return elm.dataset.target;
}
__name(getTarget, "getTarget");
document.addEventListener("click", (e2) => {
  const elm = e2.target;
  const btn = elm.closest("[data-toggle=modal]");
  if (btn) {
    const target = getTarget(btn);
    if (!target) {
      return;
    }
    const modal2 = document.querySelector(target);
    if (!modal2) {
      return;
    }
    showModal(modal2, btn.dataset.position || "fit");
  } else if (elm.className.includes("modal")) {
    hideModal(elm);
  }
});
const index$f = "";
var n$7, l$7, u$7, e$7 = [];
function h$7(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$7.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$7(l2, f2, t2, o2, null);
}
__name(h$7, "h$7");
function v$7(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$7 : r };
  return null == r && null != l$7.vnode && l$7.vnode(f2), f2;
}
__name(v$7, "v$7");
n$7 = e$7.slice, l$7 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$7 = 0;
var n$6, l$6, u$6, e$6 = [];
function h$6(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$6.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$6(l2, f2, t2, o2, null);
}
__name(h$6, "h$6");
function v$6(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$6 : r };
  return null == r && null != l$6.vnode && l$6.vnode(f2), f2;
}
__name(v$6, "v$6");
n$6 = e$6.slice, l$6 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$6 = 0;
const index$e = "";
var n$5, l$5, u$5, t$5, o$5, f$5 = {}, e$5 = [], c$5 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$5(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$5, "s$5");
function a$5(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$5, "a$5");
function h$5(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$5.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$5(l2, f2, t2, o2, null);
}
__name(h$5, "h$5");
function v$5(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$5 : r };
  return null == r && null != l$5.vnode && l$5.vnode(f2), f2;
}
__name(v$5, "v$5");
function p$5(n2) {
  return n2.children;
}
__name(p$5, "p$5");
function d$5(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$5, "d$5");
function _$5(n2, l2) {
  if (null == l2)
    return n2.__ ? _$5(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$5(n2) : null;
}
__name(_$5, "_$5");
function k$5(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$5(n2);
  }
}
__name(k$5, "k$5");
function b$5(n2) {
  (!n2.__d && (n2.__d = true) && t$5.push(n2) && !g$5.__r++ || o$5 !== l$5.debounceRendering) && ((o$5 = l$5.debounceRendering) || setTimeout)(g$5);
}
__name(b$5, "b$5");
function g$5() {
  for (var n2; g$5.__r = t$5.length; )
    n2 = t$5.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$5 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$5({}, t2)).__v = t2.__v + 1, j$5(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$5(t2) : o2, t2.__h), z$5(u2, t2), t2.__e != o2 && k$5(t2)));
    });
}
__name(g$5, "g$5");
function w$5(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$5, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$5(null, k2, null, null, k2) : Array.isArray(k2) ? v$5(p$5, { children: k2 }, null, null, null) : k2.__b > 0 ? v$5(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$5(n2, k2, d2 = d2 || f$5, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$5(k2, s2, n2) : s2 = A$5(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$5(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$5(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$5(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$5, "w$5");
function m$5(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$5(i2, l2, u2) : A$5(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$5, "m$5");
function A$5(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$5, "A$5");
function C$5(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$5(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$5(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$5, "C$5");
function $$5(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$5.test(l2) ? u2 : u2 + "px";
}
__name($$5, "$$5");
function H$5(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$5(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$5(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$5 : I$5, o2) : n2.removeEventListener(l2, o2 ? T$5 : I$5, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$5, "H$5");
function I$5(n2) {
  this.l[n2.type + false](l$5.event ? l$5.event(n2) : n2);
}
__name(I$5, "I$5");
function T$5(n2) {
  this.l[n2.type + true](l$5.event ? l$5.event(n2) : n2);
}
__name(T$5, "T$5");
function j$5(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$5.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$5(g2, x), h2.constructor = T2, h2.render = O$5), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$5({}, h2.__s)), s$5(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$5.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$5(s$5({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$5 && null == a2.key ? a2.props.children : a2, w$5(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$5(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$5.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$5.__e(n3, u2, i2);
  }
}
__name(j$5, "j$5");
function z$5(n2, u2) {
  l$5.__c && l$5.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$5.__e(n3, u3.__v);
    }
  });
}
__name(z$5, "z$5");
function L$5(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$5.call(l2.childNodes), h2 = (y2 = i2.props || f$5).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$5(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$5(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$5(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$5(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$5(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$5(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$5, "L$5");
function M$5(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$5.__e(n3, i2);
  }
}
__name(M$5, "M$5");
function N$5(n2, u2, i2) {
  var t2, o2;
  if (l$5.unmount && l$5.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$5(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$5.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$5(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$5(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$5, "N$5");
function O$5(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$5, "O$5");
n$5 = e$5.slice, l$5 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$5 = 0, d$5.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$5({}, this.state), "function" == typeof n2 && (n2 = n2(s$5({}, u2), this.props)), n2 && s$5(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$5(this));
}, d$5.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$5(this));
}, d$5.prototype.render = p$5, t$5 = [], g$5.__r = 0;
class Button extends d$5 {
  render() {
    const {
      component,
      type,
      size,
      className,
      children,
      url,
      target,
      disabled,
      active,
      loading,
      icon,
      text,
      trailingIcon,
      caret: caret2,
      square,
      hint,
      ...others
    } = this.props;
    const ButtonComponent = component || (url ? "a" : "button");
    const isEmptyText = text === void 0 || text === null || typeof text === "string" && !text.length;
    const onlyCaret = isEmptyText && !icon && !trailingIcon && !children;
    return h$5(
      ButtonComponent,
      {
        className: classes("btn", type, className, {
          "btn-caret": onlyCaret,
          disabled,
          active,
          loading,
          square: square === void 0 ? !onlyCaret && !children && isEmptyText : square
        }, size ? `size-${size}` : ""),
        title: hint,
        [ButtonComponent === "a" ? "href" : "data-url"]: url,
        [ButtonComponent === "a" ? "target" : "data-target"]: url,
        type: ButtonComponent === "button" ? "button" : void 0,
        ...others
      },
      typeof icon === "string" ? /* @__PURE__ */ h$5("i", {
        class: `icon ${icon}`
      }) : icon,
      isEmptyText ? null : /* @__PURE__ */ h$5("span", {
        className: "text"
      }, text),
      children,
      typeof trailingIcon === "string" ? /* @__PURE__ */ h$5("i", {
        class: `icon ${trailingIcon}`
      }) : trailingIcon,
      caret2 ? /* @__PURE__ */ h$5("span", {
        className: typeof caret2 === "string" ? `caret-${caret2}` : "caret"
      }) : null
    );
  }
}
__name(Button, "Button");
function ToolbarItem({
  key,
  type: toolbarType,
  btnType: type,
  ...btnProps
}) {
  return /* @__PURE__ */ h$6(Button, {
    type,
    ...btnProps
  });
}
__name(ToolbarItem, "ToolbarItem");
var n$4, l$4, u$4, t$4, o$4, f$4 = {}, e$4 = [], c$4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$4(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$4, "s$4");
function a$4(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$4, "a$4");
function h$4(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$4.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$4(l2, f2, t2, o2, null);
}
__name(h$4, "h$4");
function v$4(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$4 : r };
  return null == r && null != l$4.vnode && l$4.vnode(f2), f2;
}
__name(v$4, "v$4");
function y$1() {
  return { current: null };
}
__name(y$1, "y$1");
function p$4(n2) {
  return n2.children;
}
__name(p$4, "p$4");
function d$4(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$4, "d$4");
function _$4(n2, l2) {
  if (null == l2)
    return n2.__ ? _$4(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$4(n2) : null;
}
__name(_$4, "_$4");
function k$4(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$4(n2);
  }
}
__name(k$4, "k$4");
function b$4(n2) {
  (!n2.__d && (n2.__d = true) && t$4.push(n2) && !g$4.__r++ || o$4 !== l$4.debounceRendering) && ((o$4 = l$4.debounceRendering) || setTimeout)(g$4);
}
__name(b$4, "b$4");
function g$4() {
  for (var n2; g$4.__r = t$4.length; )
    n2 = t$4.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$4 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$4({}, t2)).__v = t2.__v + 1, j$4(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$4(t2) : o2, t2.__h), z$4(u2, t2), t2.__e != o2 && k$4(t2)));
    });
}
__name(g$4, "g$4");
function w$4(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$4, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$4(null, k2, null, null, k2) : Array.isArray(k2) ? v$4(p$4, { children: k2 }, null, null, null) : k2.__b > 0 ? v$4(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$4(n2, k2, d2 = d2 || f$4, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$4(k2, s2, n2) : s2 = A$4(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$4(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$4(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$4(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$4, "w$4");
function m$4(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$4(i2, l2, u2) : A$4(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$4, "m$4");
function A$4(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$4, "A$4");
function C$4(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$4(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$4(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$4, "C$4");
function $$4(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$4.test(l2) ? u2 : u2 + "px";
}
__name($$4, "$$4");
function H$4(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$4(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$4(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$4 : I$4, o2) : n2.removeEventListener(l2, o2 ? T$4 : I$4, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$4, "H$4");
function I$4(n2) {
  this.l[n2.type + false](l$4.event ? l$4.event(n2) : n2);
}
__name(I$4, "I$4");
function T$4(n2) {
  this.l[n2.type + true](l$4.event ? l$4.event(n2) : n2);
}
__name(T$4, "T$4");
function j$4(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$4.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$4(g2, x), h2.constructor = T2, h2.render = O$4), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$4({}, h2.__s)), s$4(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$4.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$4(s$4({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$4 && null == a2.key ? a2.props.children : a2, w$4(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$4(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$4.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$4.__e(n3, u2, i2);
  }
}
__name(j$4, "j$4");
function z$4(n2, u2) {
  l$4.__c && l$4.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$4.__e(n3, u3.__v);
    }
  });
}
__name(z$4, "z$4");
function L$4(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$4.call(l2.childNodes), h2 = (y2 = i2.props || f$4).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$4(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$4(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$4(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$4(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$4(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$4(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$4, "L$4");
function M$4(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$4.__e(n3, i2);
  }
}
__name(M$4, "M$4");
function N$4(n2, u2, i2) {
  var t2, o2;
  if (l$4.unmount && l$4.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$4(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$4.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$4(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$4(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$4, "N$4");
function O$4(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$4, "O$4");
n$4 = e$4.slice, l$4 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$4 = 0, d$4.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$4({}, this.state), "function" == typeof n2 && (n2 = n2(s$4({}, u2), this.props)), n2 && s$4(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$4(this));
}, d$4.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$4(this));
}, d$4.prototype.render = p$4, t$4 = [], g$4.__r = 0;
const arrow$2 = "";
var top$1 = "top";
var bottom$1 = "bottom";
var right$1 = "right";
var left$1 = "left";
var auto$1 = "auto";
var basePlacements$1 = [top$1, bottom$1, right$1, left$1];
var start$1 = "start";
var end$1 = "end";
var placements$1 = /* @__PURE__ */ [].concat(basePlacements$1, [auto$1]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start$1, placement + "-" + end$1]);
}, []);
function getBasePlacement$1(placement) {
  return placement.split("-")[0];
}
__name(getBasePlacement$1, "getBasePlacement$1");
function getWindow$1(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
__name(getWindow$1, "getWindow$1");
function isElement$1(node) {
  var OwnElement = getWindow$1(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
__name(isElement$1, "isElement$1");
function isHTMLElement$1(node) {
  var OwnElement = getWindow$1(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
__name(isHTMLElement$1, "isHTMLElement$1");
function isShadowRoot$1(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow$1(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot$1, "isShadowRoot$1");
var max$1 = Math.max;
var min$1 = Math.min;
var round$1 = Math.round;
function getUAString$1() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
__name(getUAString$1, "getUAString$1");
function isLayoutViewport$1() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString$1());
}
__name(isLayoutViewport$1, "isLayoutViewport$1");
function getBoundingClientRect$1(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement$1(element)) {
    scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref2 = isElement$1(element) ? getWindow$1(element) : window, visualViewport = _ref2.visualViewport;
  var addVisualOffsets = !isLayoutViewport$1() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
__name(getBoundingClientRect$1, "getBoundingClientRect$1");
function getLayoutRect$1(element) {
  var clientRect = getBoundingClientRect$1(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
__name(getLayoutRect$1, "getLayoutRect$1");
function contains$1(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot$1(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
__name(contains$1, "contains$1");
function getNodeName$1(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
__name(getNodeName$1, "getNodeName$1");
function getComputedStyle$1(element) {
  return getWindow$1(element).getComputedStyle(element);
}
__name(getComputedStyle$1, "getComputedStyle$1");
function isTableElement$1(element) {
  return ["table", "td", "th"].indexOf(getNodeName$1(element)) >= 0;
}
__name(isTableElement$1, "isTableElement$1");
function getDocumentElement$1(element) {
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
__name(getDocumentElement$1, "getDocumentElement$1");
function getParentNode$1(element) {
  if (getNodeName$1(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot$1(element) ? element.host : null) || getDocumentElement$1(element);
}
__name(getParentNode$1, "getParentNode$1");
function getTrueOffsetParent$1(element) {
  if (!isHTMLElement$1(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent$1, "getTrueOffsetParent$1");
function getContainingBlock$1(element) {
  var isFirefox = /firefox/i.test(getUAString$1());
  var isIE = /Trident/i.test(getUAString$1());
  if (isIE && isHTMLElement$1(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode$1(element);
  if (isShadowRoot$1(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement$1(currentNode) && ["html", "body"].indexOf(getNodeName$1(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
__name(getContainingBlock$1, "getContainingBlock$1");
function getOffsetParent$1(element) {
  var window2 = getWindow$1(element);
  var offsetParent = getTrueOffsetParent$1(element);
  while (offsetParent && isTableElement$1(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent$1(offsetParent);
  }
  if (offsetParent && (getNodeName$1(offsetParent) === "html" || getNodeName$1(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock$1(element) || window2;
}
__name(getOffsetParent$1, "getOffsetParent$1");
function getMainAxisFromPlacement$1(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
__name(getMainAxisFromPlacement$1, "getMainAxisFromPlacement$1");
function within$1(min2, value, max2) {
  return max$1(min2, min$1(value, max2));
}
__name(within$1, "within$1");
function getFreshSideObject$1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
__name(getFreshSideObject$1, "getFreshSideObject$1");
function mergePaddingObject$1(paddingObject) {
  return Object.assign({}, getFreshSideObject$1(), paddingObject);
}
__name(mergePaddingObject$1, "mergePaddingObject$1");
function expandToHashMap$1(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
__name(expandToHashMap$1, "expandToHashMap$1");
var toPaddingObject = /* @__PURE__ */ __name(function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject$1(typeof padding !== "number" ? padding : expandToHashMap$1(padding, basePlacements$1));
}, "toPaddingObject");
function arrow(_ref2) {
  var _state$modifiersData$;
  var state = _ref2.state, name = _ref2.name, options = _ref2.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement$1(basePlacement);
  var isVertical = [left$1, right$1].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect$1(arrowElement);
  var minProp = axis === "y" ? top$1 : left$1;
  var maxProp = axis === "y" ? bottom$1 : right$1;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent$1(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within$1(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
__name(arrow, "arrow");
function effect$2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains$1(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
__name(effect$2, "effect$2");
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left$1, top$1].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref2 = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref2[0], distance = _ref2[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left$1, right$1].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
__name(distanceAndSkiddingToXY, "distanceAndSkiddingToXY");
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements$1.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
__name(offset, "offset");
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
var n$3, l$3, u$3, t$3, o$3, f$3 = {}, e$3 = [], c$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$3, "s$3");
function a$3(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$3, "a$3");
function h$3(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$3.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$3(l2, f2, t2, o2, null);
}
__name(h$3, "h$3");
function v$3(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$3 : r };
  return null == r && null != l$3.vnode && l$3.vnode(f2), f2;
}
__name(v$3, "v$3");
function p$3(n2) {
  return n2.children;
}
__name(p$3, "p$3");
function d$3(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$3, "d$3");
function _$3(n2, l2) {
  if (null == l2)
    return n2.__ ? _$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$3(n2) : null;
}
__name(_$3, "_$3");
function k$3(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$3(n2);
  }
}
__name(k$3, "k$3");
function b$3(n2) {
  (!n2.__d && (n2.__d = true) && t$3.push(n2) && !g$3.__r++ || o$3 !== l$3.debounceRendering) && ((o$3 = l$3.debounceRendering) || setTimeout)(g$3);
}
__name(b$3, "b$3");
function g$3() {
  for (var n2; g$3.__r = t$3.length; )
    n2 = t$3.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$3 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$3({}, t2)).__v = t2.__v + 1, j$3(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$3(t2) : o2, t2.__h), z$3(u2, t2), t2.__e != o2 && k$3(t2)));
    });
}
__name(g$3, "g$3");
function w$3(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$3, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$3(null, k2, null, null, k2) : Array.isArray(k2) ? v$3(p$3, { children: k2 }, null, null, null) : k2.__b > 0 ? v$3(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$3(n2, k2, d2 = d2 || f$3, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$3(k2, s2, n2) : s2 = A$3(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$3(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$3(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$3(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$3, "w$3");
function m$3(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$3(i2, l2, u2) : A$3(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$3, "m$3");
function A$3(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$3, "A$3");
function C$3(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$3(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$3(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$3, "C$3");
function $$3(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$3.test(l2) ? u2 : u2 + "px";
}
__name($$3, "$$3");
function H$3(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$3(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$3(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$3 : I$3, o2) : n2.removeEventListener(l2, o2 ? T$3 : I$3, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$3, "H$3");
function I$3(n2) {
  this.l[n2.type + false](l$3.event ? l$3.event(n2) : n2);
}
__name(I$3, "I$3");
function T$3(n2) {
  this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
__name(T$3, "T$3");
function j$3(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$3.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$3(g2, x), h2.constructor = T2, h2.render = O$3), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$3({}, h2.__s)), s$3(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$3.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$3(s$3({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$3 && null == a2.key ? a2.props.children : a2, w$3(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$3(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$3.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$3.__e(n3, u2, i2);
  }
}
__name(j$3, "j$3");
function z$3(n2, u2) {
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
__name(z$3, "z$3");
function L$3(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$3.call(l2.childNodes), h2 = (y2 = i2.props || f$3).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$3(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$3(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$3(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$3(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$3(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$3(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$3, "L$3");
function M$3(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, i2);
  }
}
__name(M$3, "M$3");
function N$3(n2, u2, i2) {
  var t2, o2;
  if (l$3.unmount && l$3.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$3(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$3(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$3(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$3, "N$3");
function O$3(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$3, "O$3");
function P(u2, i2, t2) {
  var o2, r, e2;
  l$3.__ && l$3.__(u2, i2), r = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j$3(i2, u2 = (!o2 && t2 || i2).__k = h$3(p$3, null, [u2]), r || f$3, f$3, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r ? null : i2.firstChild ? n$3.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r ? r.__e : i2.firstChild, o2), z$3(e2, u2);
}
__name(P, "P");
n$3 = e$3.slice, l$3 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, d$3.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$3({}, this.state), "function" == typeof n2 && (n2 = n2(s$3({}, u2), this.props)), n2 && s$3(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$3(this));
}, d$3.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$3(this));
}, d$3.prototype.render = p$3, t$3 = [], g$3.__r = 0;
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
__name(getWindow, "getWindow");
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
__name(isElement, "isElement");
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
__name(getUAString, "getUAString");
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
__name(isLayoutViewport, "isLayoutViewport");
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref2 = isElement(element) ? getWindow(element) : window, visualViewport = _ref2.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
__name(getBoundingClientRect, "getBoundingClientRect");
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
__name(getWindowScroll, "getWindowScroll");
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
__name(getHTMLElementScroll, "getHTMLElementScroll");
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
__name(getNodeScroll, "getNodeScroll");
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
__name(getNodeName, "getNodeName");
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle, "getComputedStyle");
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
__name(isScrollParent, "isScrollParent");
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
__name(isElementScaled, "isElementScaled");
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
__name(getCompositeRect, "getCompositeRect");
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
__name(getLayoutRect, "getLayoutRect");
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
__name(getParentNode, "getParentNode");
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
__name(getScrollParent, "getScrollParent");
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
__name(listScrollParents, "listScrollParents");
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
__name(isTableElement, "isTableElement");
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
__name(getOffsetParent, "getOffsetParent");
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  __name(sort, "sort");
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
__name(order, "order");
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
__name(orderModifiers, "orderModifiers");
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
__name(debounce, "debounce");
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
__name(getBasePlacement, "getBasePlacement");
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
__name(mergeByName, "mergeByName");
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y: y2
  };
}
__name(getViewportRect, "getViewportRect");
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
__name(getDocumentRect, "getDocumentRect");
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
__name(contains, "contains");
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
__name(rectToClientRect, "rectToClientRect");
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
__name(getClientRectFromMixedType, "getClientRectFromMixedType");
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
__name(getClippingParents, "getClippingParents");
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
__name(getClippingRect, "getClippingRect");
function getVariation(placement) {
  return placement.split("-")[1];
}
__name(getVariation, "getVariation");
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
__name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
function computeOffsets(_ref2) {
  var reference2 = _ref2.reference, element = _ref2.element, placement = _ref2.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
__name(computeOffsets, "computeOffsets");
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
__name(getFreshSideObject, "getFreshSideObject");
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
__name(mergePaddingObject, "mergePaddingObject");
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
__name(expandToHashMap, "expandToHashMap");
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options3 = options, _options$placement = _options3.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options3.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options3.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options3.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options3.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options3.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options3.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
__name(detectOverflow, "detectOverflow");
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
__name(areValidElements, "areValidElements");
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return /* @__PURE__ */ __name(function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: /* @__PURE__ */ __name(function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      }, "setOptions"),
      forceUpdate: /* @__PURE__ */ __name(function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options3 = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options3,
              name,
              instance
            }) || state;
          }
        }
      }, "forceUpdate"),
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: /* @__PURE__ */ __name(function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }, "destroy")
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = /* @__PURE__ */ __name(function noopFn2() {
          }, "noopFn");
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    __name(runModifierEffects, "runModifierEffects");
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    __name(cleanupModifierEffects, "cleanupModifierEffects");
    return instance;
  }, "createPopper");
}
__name(popperGenerator, "popperGenerator");
var passive = {
  passive: true
};
function effect$1(_ref2) {
  var state = _ref2.state, instance = _ref2.instance, options = _ref2.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
__name(effect$1, "effect$1");
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: /* @__PURE__ */ __name(function fn() {
  }, "fn"),
  effect: effect$1,
  data: {}
};
function popperOffsets(_ref2) {
  var state = _ref2.state, name = _ref2.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
__name(popperOffsets, "popperOffsets");
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref2) {
  var x = _ref2.x, y2 = _ref2.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
__name(roundOffsetsByDPR, "roundOffsetsByDPR");
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y: y2
  }) : {
    x,
    y: y2
  };
  x = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y: y2
  }) : {
    x,
    y: y2
  };
  x = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y2 + "px)" : "translate3d(" + x + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
__name(mapToStyles, "mapToStyles");
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
__name(computeStyles, "computeStyles");
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref2) {
  var state = _ref2.state;
  Object.keys(state.elements).forEach(function(name) {
    var style2 = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
__name(applyStyles, "applyStyles");
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style2 = styleProperties.reduce(function(style3, property) {
        style3[property] = "";
        return style3;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
__name(effect, "effect");
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getAltAxis, "getAltAxis");
function within(min$12, value, max$12) {
  return max(min$12, min(value, max$12));
}
__name(within, "within");
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
__name(withinMaxClamp, "withinMaxClamp");
function preventOverflow(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$12 = offset2 + overflow[mainSide];
    var max$12 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$12, tetherMin) : min$12, offset2, tether ? max(max$12, tetherMax) : max$12);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
__name(preventOverflow, "preventOverflow");
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
__name(getOppositePlacement, "getOppositePlacement");
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
__name(getOppositeVariationPlacement, "getOppositeVariationPlacement");
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options3 = options, placement = _options3.placement, boundary = _options3.boundary, rootBoundary = _options3.rootBoundary, padding = _options3.padding, flipVariations = _options3.flipVariations, _options$allowedAutoP = _options3.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$12 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$12.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$12;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
__name(computeAutoPlacement, "computeAutoPlacement");
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
__name(getExpandedFallbackPlacements, "getExpandedFallbackPlacements");
function flip(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = /* @__PURE__ */ __name(function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    }, "_loop");
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
__name(flip, "flip");
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function isRightBtn(event) {
  return event.button === 2;
}
__name(isRightBtn, "isRightBtn");
const vars$3 = "";
const contextmenu = "";
const index$d = "";
class ContextMenu$1 extends Menu$1 {
  constructor() {
    super(...arguments);
    __privateAdd(this, _popper, void 0);
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
    var _a2;
    super.componentWillUnmount();
    (_a2 = __privateGet(this, _popper)) == null ? void 0 : _a2.destroy();
  }
  _getPopperOptions() {
    return {
      modifiers: [preventOverflow$1, flip$1],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var _a2;
    return (_a2 = this.ref.current) == null ? void 0 : _a2.parentElement;
  }
  _createPopper() {
    const options = this._getPopperOptions();
    if (__privateGet(this, _popper)) {
      __privateGet(this, _popper).setOptions(options);
    } else if (this.ref.current) {
      __privateSet(this, _popper, createPopper(this._getPopperElement(), this.ref.current, options));
    }
    return __privateGet(this, _popper);
  }
  afterRender(firstRender) {
    super.afterRender(firstRender);
    if (this.props.controlledMenu) {
      this._createPopper();
    }
  }
  renderToggleIcon() {
    return /* @__PURE__ */ h$3("span", {
      class: "contextmenu-toggle-icon caret-right"
    });
  }
}
__name(ContextMenu$1, "ContextMenu$1");
_popper = new WeakMap();
class ContextMenu extends ComponentBase {
  constructor() {
    super(...arguments);
    __privateAdd(this, _menu, void 0);
    __privateAdd(this, _popper2, void 0);
    __privateAdd(this, _virtualElement, void 0);
    __privateAdd(this, _trigger, void 0);
  }
  get isShown() {
    var _a2;
    return (_a2 = __privateGet(this, _menu)) == null ? void 0 : _a2.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return __privateGet(this, _menu) || this._ensureMenu();
  }
  get popper() {
    if (!__privateGet(this, _popper2)) {
      return this._createPopper();
    }
    return __privateGet(this, _popper2);
  }
  get trigger() {
    return __privateGet(this, _trigger) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element } = this;
    if (element !== document.body && !element.hasAttribute("data-toggle")) {
      element.setAttribute("data-toggle", "contextmenu");
    }
  }
  show(trigger) {
    __privateSet(this, _trigger, trigger);
    const showEvent = this.emit("show", { menu: this, trigger: this.trigger });
    if (showEvent.defaultPrevented) {
      return false;
    }
    if (this.isDynamic && !this._renderMenu()) {
      return false;
    }
    this.menu.classList.add(this.constructor.CLASS_SHOW);
    this._createPopper().update();
    this.emit("shown", this);
    return true;
  }
  hide() {
    var _a2, _b2;
    const hideEvent = this.emit("hide", this);
    if (hideEvent.defaultPrevented) {
      return false;
    }
    (_a2 = __privateGet(this, _popper2)) == null ? void 0 : _a2.destroy();
    __privateSet(this, _popper2, void 0);
    (_b2 = __privateGet(this, _menu)) == null ? void 0 : _b2.classList.remove(this.constructor.CLASS_SHOW);
    this.emit("hidden", this);
    return true;
  }
  toggle(event) {
    return this.isShown ? this.hide() : this.show(event);
  }
  destroy() {
    var _a2, _b2;
    (_a2 = __privateGet(this, _popper2)) == null ? void 0 : _a2.destroy();
    super.destroy();
    (_b2 = __privateGet(this, _menu)) == null ? void 0 : _b2.remove();
  }
  _ensureMenu() {
    var _a2, _b2;
    const { element } = this;
    const menuClass = this.constructor.MENU_CLASS;
    let menuElement;
    if (this.isDynamic) {
      menuElement = document.createElement("div");
      menuElement.classList.add(menuClass);
      document.body.appendChild(menuElement);
    } else if (element) {
      const target = (_a2 = element.getAttribute("href")) != null ? _a2 : element.dataset.target;
      if ((target == null ? void 0 : target[0]) === "#") {
        menuElement = document.querySelector(target);
      }
      if (!menuElement) {
        const nextElement = element.nextElementSibling;
        if (nextElement == null ? void 0 : nextElement.classList.contains(menuClass)) {
          menuElement = nextElement;
        } else {
          menuElement = (_b2 = element.parentNode) == null ? void 0 : _b2.querySelector(`.${menuClass}`);
        }
      }
    }
    if (!menuElement) {
      throw new Error("ContextMenu: Cannot find menu element");
    }
    __privateSet(this, _menu, menuElement);
    return menuElement;
  }
  _getPopperOptions() {
    const { flip: flipOption, preventOverflow: preventOverflowOption, modifiers = [] } = this.options;
    return {
      modifiers: [
        preventOverflowOption ? typeof preventOverflowOption === "object" ? { ...preventOverflow$1, options: preventOverflowOption } : preventOverflow$1 : null,
        flipOption ? flip$1 : null,
        ...modifiers
      ].filter(Boolean),
      placement: this.options.placement,
      strategy: this.options.strategy
    };
  }
  _createPopper() {
    const options = this._getPopperOptions();
    if (__privateGet(this, _popper2)) {
      __privateGet(this, _popper2).setOptions(options);
    } else {
      __privateSet(this, _popper2, createPopper(this._getPopperElement(), this.menu, options));
    }
    return __privateGet(this, _popper2);
  }
  _getMenuOptions() {
    const { menu, items } = this.options;
    let menuItems = items || (menu == null ? void 0 : menu.items);
    if (!menuItems) {
      return;
    }
    if (typeof menuItems === "function") {
      menuItems = menuItems(this);
    }
    return {
      nestedTrigger: "hover",
      ...menu,
      items: menuItems
    };
  }
  _renderMenu() {
    const menuOptions = this._getMenuOptions();
    if (!menuOptions) {
      return false;
    }
    const updateMenuEvent = this.emit("updateMenu", { menu: menuOptions, trigger: this.trigger, contextmenu: this });
    if (updateMenuEvent.defaultPrevented) {
      return false;
    }
    P(h$3(ContextMenu$1, menuOptions), this.menu);
    return true;
  }
  _getPopperElement() {
    if (!__privateGet(this, _virtualElement)) {
      __privateSet(this, _virtualElement, {
        getBoundingClientRect: () => {
          const { trigger } = this;
          if (trigger instanceof MouseEvent) {
            const { clientX, clientY } = trigger;
            return {
              width: 0,
              height: 0,
              top: clientY,
              right: clientX,
              bottom: clientY,
              left: clientX
            };
          }
          if (trigger instanceof HTMLElement) {
            return trigger.getBoundingClientRect();
          }
          return trigger;
        },
        contextElement: this.element
      });
    }
    return __privateGet(this, _virtualElement);
  }
  static clear(event) {
    if (event && isRightBtn(event)) {
      return;
    }
    this.getAll().forEach((x) => x.hide());
  }
  static show(options) {
    const { event, ...otherOptions } = options;
    const contextmenu2 = this.ensure(document.body);
    if (Object.keys(otherOptions).length) {
      contextmenu2.setOptions(otherOptions);
    }
    contextmenu2.show(event);
    event == null ? void 0 : event.stopPropagation();
    return contextmenu2;
  }
  static hide() {
    const contextmenu2 = this.get(document.body);
    contextmenu2 == null ? void 0 : contextmenu2.hide();
    return contextmenu2;
  }
}
__name(ContextMenu, "ContextMenu");
_menu = new WeakMap();
_popper2 = new WeakMap();
_virtualElement = new WeakMap();
_trigger = new WeakMap();
__publicField(ContextMenu, "NAME", "contextmenu");
__publicField(ContextMenu, "EVENTS", true);
__publicField(ContextMenu, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: true,
  preventOverflow: true
});
__publicField(ContextMenu, "MENU_CLASS", "contextmenu");
__publicField(ContextMenu, "CLASS_SHOW", "show");
__publicField(ContextMenu, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (event) => {
  const element = event.target;
  if (element.closest(`.${ContextMenu.MENU_CLASS}`)) {
    return;
  }
  const toggleElement = element.closest(ContextMenu.MENU_SELECTOR);
  if (toggleElement) {
    ContextMenu.ensure(toggleElement).show(event);
    event.preventDefault();
  }
});
document.addEventListener("click", ContextMenu.clear.bind(ContextMenu));
const dropdown = "";
class Dropdown extends ContextMenu {
  constructor() {
    super(...arguments);
    __privateAdd(this, _bindHoverEvents);
    __privateAdd(this, _hoverEventsBind, false);
    __privateAdd(this, _hideTimer, 0);
    __publicField(this, "hideLater", /* @__PURE__ */ __name(() => {
      __privateGet(this, _cancelHide).call(this);
      __privateSet(this, _hideTimer, window.setTimeout(this.hide.bind(this), 100));
    }, "hideLater"));
    __privateAdd(this, _cancelHide, /* @__PURE__ */ __name(() => {
      clearTimeout(__privateGet(this, _hideTimer));
      __privateSet(this, _hideTimer, 0);
    }, "#cancelHide"));
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(trigger) {
    const result = super.show(trigger);
    if (result) {
      if (!__privateGet(this, _hoverEventsBind) && this.isHover) {
        __privateMethod(this, _bindHoverEvents, bindHoverEvents_fn).call(this);
      }
      this.element.classList.add(this.elementShowClass);
    }
    return result;
  }
  hide() {
    const result = super.hide();
    if (result) {
      this.element.classList.remove(this.elementShowClass);
    }
    return result;
  }
  destroy() {
    if (__privateGet(this, _hoverEventsBind)) {
      this.element.removeEventListener("mouseleave", this.hideLater);
      this.menu.removeEventListener("mouseenter", __privateGet(this, _cancelHide));
      this.menu.removeEventListener("mouseleave", this.hideLater);
    }
    super.destroy();
  }
  _getArrowSize() {
    const { arrow: arrowOption } = this.options;
    if (!arrowOption) {
      return 0;
    }
    return typeof arrowOption === "number" ? arrowOption : 5;
  }
  _getPopperOptions() {
    var _a2;
    const options = super._getPopperOptions();
    const arrowSize = this._getArrowSize();
    if (arrowSize) {
      options.modifiers.push({ ...arrow$1, options: {
        padding: arrowSize,
        element: ".arrow"
      } }, {
        ...offset$1,
        options: {
          offset: [0, arrowSize + ((_a2 = this.options.offset) != null ? _a2 : 0)]
        }
      }, {
        name: "dropdown",
        enabled: true,
        phase: "beforeWrite",
        fn: ({ state }) => {
          var _a3, _b2;
          const placement = ((_a3 = state.placement) == null ? void 0 : _a3.split("-").shift()) || "";
          (_b2 = this.menu.querySelector(".arrow")) == null ? void 0 : _b2.setAttribute("class", `arrow arrow-${placement}`);
          this.element.setAttribute("data-dropdown-placement", placement);
        }
      });
    }
    return options;
  }
  _ensureMenu() {
    const menu = super._ensureMenu();
    if (this.options.arrow) {
      const div = document.createElement("div");
      div.classList.add("arrow");
      div.style.setProperty("--arrow-size", `${this._getArrowSize()}px`);
      menu.prepend(div);
    }
    return menu;
  }
  _getMenuOptions() {
    const options = super._getMenuOptions();
    if (options && this.options.arrow) {
      const { afterRender } = options;
      options.afterRender = (...args) => {
        var _a2;
        const arrowElement = this.menu.querySelector(".arrow");
        if (arrowElement) {
          (_a2 = this.menu.querySelector(".menu")) == null ? void 0 : _a2.appendChild(arrowElement);
          this.popper.update();
        }
        afterRender == null ? void 0 : afterRender(...args);
      };
    }
    return options;
  }
}
__name(Dropdown, "Dropdown");
_hoverEventsBind = new WeakMap();
_hideTimer = new WeakMap();
_cancelHide = new WeakMap();
_bindHoverEvents = new WeakSet();
bindHoverEvents_fn = /* @__PURE__ */ __name(function() {
  const { menu } = this;
  menu.addEventListener("mouseenter", __privateGet(this, _cancelHide));
  menu.addEventListener("mouseleave", this.hideLater);
  this.element.addEventListener("mouseleave", this.hideLater);
  __privateSet(this, _hoverEventsBind, true);
}, "#bindHoverEvents");
__publicField(Dropdown, "NAME", "dropdown");
__publicField(Dropdown, "MENU_CLASS", "dropdown-menu");
__publicField(Dropdown, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)');
__publicField(Dropdown, "DEFAULT", {
  ...ContextMenu.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e2) {
  const element = e2.target;
  const toggleBtn = element.closest(Dropdown.MENU_SELECTOR);
  if (toggleBtn) {
    const dropdown2 = Dropdown.ensure(toggleBtn);
    if (dropdown2.options.trigger === "click") {
      dropdown2.toggle();
    }
  } else {
    Dropdown.clear(e2);
  }
});
document.addEventListener("mouseover", function(e2) {
  const element = e2.target;
  const toggleBtn = typeof element.closest === "function" ? element.closest(Dropdown.MENU_SELECTOR) : null;
  if (!toggleBtn) {
    return;
  }
  const dropdown2 = Dropdown.ensure(toggleBtn);
  if (dropdown2.isHover) {
    dropdown2.show();
  }
});
class DropdownTrigger extends d$4 {
  constructor() {
    super(...arguments);
    __privateAdd(this, _dropdown, void 0);
    __privateAdd(this, _ref, y$1());
    __publicField(this, "state", { placement: "", show: false });
  }
  get ref() {
    return __privateGet(this, _ref);
  }
  get triggerElement() {
    return __privateGet(this, _ref).current;
  }
  componentDidMount() {
    const { modifiers = [], ...dropdownOptions } = this.props.dropdown || {};
    modifiers.push({
      name: "dropdown-trigger",
      enabled: true,
      phase: "beforeMain",
      fn: ({ state }) => {
        var _a2;
        const placement = ((_a2 = state.placement) == null ? void 0 : _a2.split("-").shift()) || "";
        this.setState({ placement });
      }
    });
    __privateSet(this, _dropdown, Dropdown.ensure(this.triggerElement, {
      ...dropdownOptions,
      modifiers,
      onShow: () => {
        this.setState({ show: true });
      },
      onHide: () => {
        this.setState({ show: true });
      }
    }));
  }
  componentWillUnmount() {
    var _a2;
    (_a2 = __privateGet(this, _dropdown)) == null ? void 0 : _a2.destroy();
  }
  beforeRender() {
    const { className, children, dropdown: dropdown2, ...props } = this.props;
    return {
      className: classes("dropdown", className),
      children: typeof children === "function" ? children(this.state) : children,
      ...props,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: __privateGet(this, _ref)
    };
  }
  render() {
    const { children, ...props } = this.beforeRender();
    return /* @__PURE__ */ h$4("div", {
      ...props
    }, children);
  }
}
__name(DropdownTrigger, "DropdownTrigger");
_dropdown = new WeakMap();
_ref = new WeakMap();
class DropdownButton extends DropdownTrigger {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    const { placement, show } = this.state;
    const props = this.beforeRender();
    let { caret: caret2 = true } = props;
    if (caret2 !== false && (show || caret2 === true)) {
      caret2 = (show ? placement === "top" ? "up" : placement === "bottom" ? "down" : placement : caret2) || "down";
    }
    props.caret = caret2;
    return /* @__PURE__ */ h$4(Button, {
      ...props
    });
  }
}
__name(DropdownButton, "DropdownButton");
function ToolbarDropdown({
  key,
  type: toolbarType,
  btnType: type,
  ...dropdownBtnProps
}) {
  return /* @__PURE__ */ h$6(DropdownButton, {
    type,
    ...dropdownBtnProps
  });
}
__name(ToolbarDropdown, "ToolbarDropdown");
var n$2, l$2, u$2, i$1, t$2, o$2, f$2 = {}, e$2 = [], c$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$2(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$2, "s$2");
function a$2(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$2, "a$2");
function h$2(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$2(l2, f2, t2, o2, null);
}
__name(h$2, "h$2");
function v$2(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$2 : r };
  return null == r && null != l$2.vnode && l$2.vnode(f2), f2;
}
__name(v$2, "v$2");
function p$2(n2) {
  return n2.children;
}
__name(p$2, "p$2");
function d$2(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$2, "d$2");
function _$2(n2, l2) {
  if (null == l2)
    return n2.__ ? _$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$2(n2) : null;
}
__name(_$2, "_$2");
function k$2(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$2(n2);
  }
}
__name(k$2, "k$2");
function b$2(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$2.__r++ || o$2 !== l$2.debounceRendering) && ((o$2 = l$2.debounceRendering) || setTimeout)(g$2);
}
__name(b$2, "b$2");
function g$2() {
  for (var n2; g$2.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$2({}, t2)).__v = t2.__v + 1, j$2(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$2(t2) : o2, t2.__h), z$2(u2, t2), t2.__e != o2 && k$2(t2)));
    });
}
__name(g$2, "g$2");
function w$2(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$2, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$2(null, k2, null, null, k2) : Array.isArray(k2) ? v$2(p$2, { children: k2 }, null, null, null) : k2.__b > 0 ? v$2(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$2(n2, k2, d2 = d2 || f$2, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$2(k2, s2, n2) : s2 = A$2(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$2(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$2(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$2(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$2, "w$2");
function m$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$2(i2, l2, u2) : A$2(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$2, "m$2");
function A$2(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$2, "A$2");
function C$2(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$2(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$2(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$2, "C$2");
function $$2(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$2.test(l2) ? u2 : u2 + "px";
}
__name($$2, "$$2");
function H$2(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$2(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$2(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$2 : I$2, o2) : n2.removeEventListener(l2, o2 ? T$2 : I$2, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$2, "H$2");
function I$2(n2) {
  this.l[n2.type + false](l$2.event ? l$2.event(n2) : n2);
}
__name(I$2, "I$2");
function T$2(n2) {
  this.l[n2.type + true](l$2.event ? l$2.event(n2) : n2);
}
__name(T$2, "T$2");
function j$2(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$2.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$2(g2, x), h2.constructor = T2, h2.render = O$2), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$2({}, h2.__s)), s$2(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$2.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$2(s$2({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$2 && null == a2.key ? a2.props.children : a2, w$2(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$2(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$2.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$2.__e(n3, u2, i2);
  }
}
__name(j$2, "j$2");
function z$2(n2, u2) {
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
__name(z$2, "z$2");
function L$2(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$2.call(l2.childNodes), h2 = (y2 = i2.props || f$2).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$2(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$2(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$2(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$2(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$2(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$2(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$2, "L$2");
function M$2(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, i2);
  }
}
__name(M$2, "M$2");
function N$2(n2, u2, i2) {
  var t2, o2;
  if (l$2.unmount && l$2.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$2(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$2.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$2(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$2(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$2, "N$2");
function O$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$2, "O$2");
n$2 = e$2.slice, l$2 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$2 = 0, i$1 = /* @__PURE__ */ __name(function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, "i$1"), d$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$2({}, this.state), "function" == typeof n2 && (n2 = n2(s$2({}, u2), this.props)), n2 && s$2(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$2(this));
}, d$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$2(this));
}, d$2.prototype.render = p$2, t$2 = [], g$2.__r = 0;
class BtnGroup extends d$2 {
  componentDidMount() {
    var _a2;
    (_a2 = this.props.afterRender) == null ? void 0 : _a2.call(this, { firstRender: true });
  }
  componentDidUpdate() {
    var _a2;
    (_a2 = this.props.afterRender) == null ? void 0 : _a2.call(this, { firstRender: false });
  }
  componentWillUnmount() {
    var _a2;
    (_a2 = this.props.beforeDestroy) == null ? void 0 : _a2.call(this);
  }
  handleItemClick(item, index2, onClick2, event) {
    if (onClick2) {
      onClick2.call(event.target, event);
    }
    const { onClickItem } = this.props;
    if (onClickItem) {
      onClickItem.call(this, { item, index: index2, event });
    }
  }
  beforeRender() {
    var _a2;
    const options = { ...this.props };
    const customOptions = (_a2 = options.beforeRender) == null ? void 0 : _a2.call(this, options);
    if (customOptions) {
      Object.assign(options, customOptions);
    }
    if (typeof options.items === "function") {
      options.items = options.items.call(this);
    }
    return options;
  }
  onRenderItem(item, index2) {
    const { key = index2, ...others } = item;
    return /* @__PURE__ */ h$2(Button, {
      key,
      ...others
    });
  }
  renderItem(options, item, index2) {
    const { itemRender, defaultBtnProps, onClickItem } = options;
    const btnProps = { key: index2, ...item };
    if (defaultBtnProps) {
      Object.assign(btnProps, defaultBtnProps);
    }
    if (onClickItem) {
      btnProps.onClick = this.handleItemClick.bind(this, btnProps, index2, item.onClick);
    }
    if (itemRender) {
      const result = itemRender.call(this, btnProps, h$2);
      if (i$1(result)) {
        return result;
      }
      if (typeof result === "object") {
        Object.assign(btnProps, result);
      }
    }
    return this.onRenderItem(btnProps, index2);
  }
  render() {
    const options = this.beforeRender();
    const {
      className,
      items,
      size,
      type,
      defaultBtnProps,
      children,
      itemRender,
      onClickItem,
      beforeRender,
      afterRender,
      beforeDestroy,
      ...others
    } = options;
    return /* @__PURE__ */ h$2("div", {
      className: classes("btn-group", className),
      ...others
    }, items && items.map(this.renderItem.bind(this, options)), children);
  }
}
__name(BtnGroup, "BtnGroup");
function ToolbarBtnGroup({
  key,
  type: toolbarType,
  btnType: type,
  ...btnGroupProps
}) {
  return /* @__PURE__ */ h$6(BtnGroup, {
    type,
    ...btnGroupProps
  });
}
__name(ToolbarBtnGroup, "ToolbarBtnGroup");
class Toolbar extends ActionMenu$1 {
  beforeRender() {
    const { gap, btnProps, wrap, ...options } = super.beforeRender();
    options.className = classes(options.className, wrap ? "flex-wrap" : "", typeof gap === "number" ? `gap-${gap}` : "");
    if (typeof gap === "string") {
      if (options.style) {
        options.style.gap = gap;
      } else {
        options.style = { gap };
      }
    }
    return options;
  }
  isBtnItem(type) {
    return type === "item" || type === "dropdown";
  }
  renderTypedItem(ItemComponent, rootProps, itemProps) {
    const btnProps = this.isBtnItem(itemProps.type) ? { btnType: "ghost", ...this.props.btnProps } : {};
    const props = {
      ...rootProps,
      ...btnProps,
      ...itemProps,
      className: classes(`${this.name}-${itemProps.type}`, rootProps.className, btnProps.className, itemProps.className),
      style: Object.assign({}, rootProps.style, btnProps.style, itemProps.style)
    };
    return /* @__PURE__ */ h$6(ItemComponent, {
      ...props
    });
  }
}
__name(Toolbar, "Toolbar");
__publicField(Toolbar, "ItemComponents", {
  item: ToolbarItem,
  dropdown: ToolbarDropdown,
  "btn-group": ToolbarBtnGroup
});
__publicField(Toolbar, "ROOT_TAG", "nav");
__publicField(Toolbar, "NAME", "toolbar");
__publicField(Toolbar, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
});
const index$c = "";
function updatePagerInfo(info, page) {
  const pageTotal = info.pageTotal || Math.ceil(info.recTotal / info.recPerPage);
  if (typeof page === "string") {
    if (page === "first") {
      page = 1;
    } else if (page === "last") {
      page = pageTotal;
    } else if (page === "prev") {
      page = info.page - 1;
    } else if (page === "next") {
      page = info.page + 1;
    } else if (page === "current") {
      page = info.page;
    } else {
      page = Number.parseInt(page, 10);
    }
  }
  page = page !== void 0 ? Math.max(1, Math.min(page < 0 ? pageTotal + page : page, pageTotal)) : info.page;
  return {
    ...info,
    pageTotal,
    page
  };
}
__name(updatePagerInfo, "updatePagerInfo");
function PagerLink({
  key,
  type: pagerItemType,
  btnType: type,
  page,
  format,
  pagerInfo,
  linkCreator,
  ...btnProps
}) {
  const info = updatePagerInfo(pagerInfo, page);
  if (btnProps.text === void 0 && !btnProps.icon && format) {
    btnProps.text = typeof format === "function" ? format(info) : formatString(format, info);
  }
  if (btnProps.url === void 0 && linkCreator) {
    btnProps.url = typeof linkCreator === "function" ? linkCreator(info) : formatString(linkCreator, info);
  }
  if (btnProps.disabled === void 0) {
    btnProps.disabled = page !== void 0 && info.page === pagerInfo.page;
  }
  return /* @__PURE__ */ h$7(Button, {
    type,
    ...btnProps
  });
}
__name(PagerLink, "PagerLink");
const TIME_DAY = 24 * 60 * 60 * 1e3;
const createDate = /* @__PURE__ */ __name((date) => {
  if (!date) {
    return new Date();
  }
  if (date instanceof Date) {
    return date;
  }
  if (typeof date === "string") {
    date = date.trim();
    if (/^\d+$/.test(date)) {
      date = Number.parseInt(date, 10);
    }
  }
  if (typeof date === "number" && date < 1e10) {
    date *= 1e3;
  }
  date = new Date(date);
  return date;
}, "createDate");
const isSameDay = /* @__PURE__ */ __name((date1, date2 = new Date()) => {
  date1 = createDate(date1);
  date2 = createDate(date2);
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}, "isSameDay");
const isSameYear = /* @__PURE__ */ __name((date1, date2 = new Date()) => createDate(date1).getFullYear() === createDate(date2).getFullYear(), "isSameYear");
const isSameMonth = /* @__PURE__ */ __name((date1, date2 = new Date()) => {
  date1 = createDate(date1);
  date2 = createDate(date2);
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}, "isSameMonth");
const isSameWeek = /* @__PURE__ */ __name((date1, date2 = new Date()) => {
  date1 = createDate(date1);
  date2 = createDate(date2);
  const oneDayTime = 1e3 * 60 * 60 * 24;
  const weeks1 = Math.floor(date1.getTime() / oneDayTime);
  const weeks2 = Math.floor(date2.getTime() / oneDayTime);
  return Math.floor((weeks1 + 4) / 7) === Math.floor((weeks2 + 4) / 7);
}, "isSameWeek");
const isToday = /* @__PURE__ */ __name((date, now) => isSameDay(createDate(now), date), "isToday");
const isYesterday = /* @__PURE__ */ __name((date, now) => isSameDay(createDate(now).getTime() - TIME_DAY, date), "isYesterday");
const isTomorrow = /* @__PURE__ */ __name((date, now) => isSameDay(createDate(now).getTime() + TIME_DAY, date), "isTomorrow");
const isDBY = /* @__PURE__ */ __name((date, now) => isSameDay(createDate(now).getTime() - 2 * TIME_DAY, date), "isDBY");
const formatDate = /* @__PURE__ */ __name((date, format = "yyyy-MM-dd hh:mm") => {
  date = createDate(date);
  const dateInfo = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "H+": date.getHours() % 12,
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "S+": date.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, `${date.getFullYear()}`.substring(4 - RegExp.$1.length));
  }
  Object.keys(dateInfo).forEach((k2) => {
    if (new RegExp(`(${k2})`).test(format)) {
      const str = `${dateInfo[k2]}`;
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : `00${str}`.substring(str.length));
    }
  });
  return format;
}, "formatDate");
const formatDateSpan = /* @__PURE__ */ __name((date1, date2, format) => {
  const finalFormat = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...format
  };
  const date1Str = formatDate(date1, isSameYear(date1) ? finalFormat.month : finalFormat.full);
  if (isSameDay(date1, date2)) {
    return date1Str;
  }
  const date2Str = formatDate(date2, isSameYear(date1, date2) ? isSameMonth(date1, date2) ? finalFormat.day : finalFormat.month : finalFormat.full);
  return finalFormat.str.replace("{0}", date1Str).replace("{1}", date2Str);
}, "formatDateSpan");
const getTimeBeforeDesc = /* @__PURE__ */ __name((desc) => {
  const now = new Date().getTime();
  switch (desc) {
    case "oneWeek":
      return now - TIME_DAY * 7;
    case "oneMonth":
      return now - TIME_DAY * 31;
    case "threeMonth":
      return now - TIME_DAY * 31 * 3;
    case "halfYear":
      return now - TIME_DAY * 183;
    case "oneYear":
      return now - TIME_DAY * 365;
    case "twoYear":
      return now - 2 * (TIME_DAY * 365);
    default:
      return 0;
  }
}, "getTimeBeforeDesc");
const calculateTimestamp = /* @__PURE__ */ __name((duration, unit, add = true, initialDate = Date.now()) => {
  switch (unit) {
    case "year":
      duration *= 365;
      return calculateTimestamp(duration, "day", add, initialDate);
    case "quarter":
      duration *= 3;
    case "month":
      duration *= 30;
      return calculateTimestamp(duration, "day", add, initialDate);
    case "week":
      duration *= 7;
    case "day":
      duration *= 24;
    case "hour":
      duration *= 60;
    case "minute":
      duration *= 6e4;
      break;
    default:
      duration = 0;
  }
  return add ? initialDate + duration : initialDate - duration;
}, "calculateTimestamp");
function PagerInfoItem({
  key,
  type: pagerItemType,
  page,
  text = "",
  pagerInfo,
  children,
  ...props
}) {
  const info = updatePagerInfo(pagerInfo, page);
  text = typeof text === "function" ? text(info) : formatString(text, info);
  return /* @__PURE__ */ h$7(ActionBasic, {
    ...props
  }, children, text);
}
__name(PagerInfoItem, "PagerInfoItem");
function PagerNav({
  key,
  type: pagerItemType,
  btnType: type,
  count,
  pagerInfo,
  linkCreator,
  ...btnProps
}) {
  return /* @__PURE__ */ h$7(Button, {
    type,
    ...btnProps
  });
}
__name(PagerNav, "PagerNav");
function PagerSizeMenu({
  type: pagerSizeMenuType,
  pagerInfo,
  linkCreator,
  items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: dropdown2 = {},
  ...dropdownProps
}) {
  var _a2, _b2;
  dropdown2.items = (_a2 = dropdown2.items) != null ? _a2 : items.map((recPerPage) => {
    const info = { ...pagerInfo, recPerPage };
    return {
      text: `${recPerPage}`,
      url: typeof linkCreator === "function" ? linkCreator(info) : formatString(linkCreator, info)
    };
  });
  const { text = "" } = dropdownProps;
  dropdownProps.text = typeof text === "function" ? text(pagerInfo) : formatString(text, pagerInfo);
  dropdown2.menu = { ...dropdown2.menu, className: classes((_b2 = dropdown2.menu) == null ? void 0 : _b2.className, "pager-size-menu") };
  return /* @__PURE__ */ h$7(ToolbarDropdown, {
    type: "dropdown",
    dropdown: dropdown2,
    ...dropdownProps
  });
}
__name(PagerSizeMenu, "PagerSizeMenu");
class Pager$1 extends Toolbar {
  get pagerInfo() {
    const { page = 1, recTotal = 0, recPerPage = 10 } = this.props;
    return { page, recTotal, recPerPage, pageTotal: recPerPage ? Math.ceil(recTotal / recPerPage) : 0 };
  }
  isBtnItem(type) {
    return type === "link" || type === "nav" || type === "size-menu" || super.isBtnItem(type);
  }
  getItemRenderProps(options, item, index2) {
    const props = super.getItemRenderProps(options, item, index2);
    const type = item.type || "item";
    if (type === "info") {
      Object.assign(props, { pagerInfo: this.pagerInfo });
    } else if (type === "link" || type === "size-menu" || type === "nav") {
      Object.assign(props, { pagerInfo: this.pagerInfo, linkCreator: options.linkCreator });
    }
    return props;
  }
}
__name(Pager$1, "Pager$1");
__publicField(Pager$1, "NAME", "pager");
__publicField(Pager$1, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
});
__publicField(Pager$1, "ItemComponents", {
  ...Toolbar.ItemComponents,
  link: PagerLink,
  info: PagerInfoItem,
  nav: PagerNav,
  "size-menu": PagerSizeMenu
});
class Pager extends ComponentFromReact {
}
__name(Pager, "Pager");
__publicField(Pager, "NAME", "pager");
__publicField(Pager, "Component", Pager$1);
const vars$2 = "";
const panel = "";
const theme = "";
const vars$1 = "";
const table = "";
const ajax = "";
var n$1, l$1, u$1, i, t$1, o$1, f$1 = {}, e$1 = [], c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s$1, "s$1");
function a$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a$1, "a$1");
function h$1(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v$1(l2, f2, t2, o2, null);
}
__name(h$1, "h$1");
function v$1(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u$1 : r };
  return null == r && null != l$1.vnode && l$1.vnode(f2), f2;
}
__name(v$1, "v$1");
function y() {
  return { current: null };
}
__name(y, "y");
function p$1(n2) {
  return n2.children;
}
__name(p$1, "p$1");
function d$1(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d$1, "d$1");
function _$1(n2, l2) {
  if (null == l2)
    return n2.__ ? _$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$1(n2) : null;
}
__name(_$1, "_$1");
function k$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$1(n2);
  }
}
__name(k$1, "k$1");
function b$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !g$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || setTimeout)(g$1);
}
__name(b$1, "b$1");
function g$1() {
  for (var n2; g$1.__r = t$1.length; )
    n2 = t$1.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$1 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s$1({}, t2)).__v = t2.__v + 1, j$1(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$1(t2) : o2, t2.__h), z$1(u2, t2), t2.__e != o2 && k$1(t2)));
    });
}
__name(g$1, "g$1");
function w$1(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e$1, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$1(null, k2, null, null, k2) : Array.isArray(k2) ? v$1(p$1, { children: k2 }, null, null, null) : k2.__b > 0 ? v$1(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$1(n2, k2, d2 = d2 || f$1, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$1(k2, s2, n2) : s2 = A$1(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$1(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N$1(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$1(w2[h2], w2[++h2], w2[++h2]);
}
__name(w$1, "w$1");
function m$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$1(i2, l2, u2) : A$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m$1, "m$1");
function A$1(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A$1, "A$1");
function C$1(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H$1(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$1(n2, o2, l2[o2], u2[o2], i2);
}
__name(C$1, "C$1");
function $$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$1.test(l2) ? u2 : u2 + "px";
}
__name($$1, "$$1");
function H$1(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$1 : I$1, o2) : n2.removeEventListener(l2, o2 ? T$1 : I$1, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H$1, "H$1");
function I$1(n2) {
  this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
__name(I$1, "I$1");
function T$1(n2) {
  this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
__name(T$1, "T$1");
function j$1(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l$1.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d$1(g2, x), h2.constructor = T2, h2.render = O$1), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$1({}, h2.__s)), s$1(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l$1.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$1(s$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p$1 && null == a2.key ? a2.props.children : a2, w$1(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$1(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l$1.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
__name(j$1, "j$1");
function z$1(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
__name(z$1, "z$1");
function L$1(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n$1.call(l2.childNodes), h2 = (y2 = i2.props || f$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$1(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _$1(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a$1(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$1(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$1(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L$1, "L$1");
function M$1(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
__name(M$1, "M$1");
function N$1(n2, u2, i2) {
  var t2, o2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$1(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N$1(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N$1, "N$1");
function O$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O$1, "O$1");
n$1 = e$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, i = /* @__PURE__ */ __name(function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, "i"), d$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n2 && (n2 = n2(s$1({}, u2), this.props)), n2 && s$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b$1(this));
}, d$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$1(this));
}, d$1.prototype.render = p$1, t$1 = [], g$1.__r = 0;
let nanoid = /* @__PURE__ */ __name((size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, ""), "nanoid");
var n, l, u, t, o, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
__name(s, "s");
function a(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
__name(a, "a");
function h(l2, u2, i2) {
  var t2, o2, r, f2 = {};
  for (r in u2)
    "key" == r ? t2 = u2[r] : "ref" == r ? o2 = u2[r] : f2[r] = u2[r];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r in l2.defaultProps)
      void 0 === f2[r] && (f2[r] = l2.defaultProps[r]);
  return v(l2, f2, t2, o2, null);
}
__name(h, "h");
function v(n2, i2, t2, o2, r) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u : r };
  return null == r && null != l.vnode && l.vnode(f2), f2;
}
__name(v, "v");
function p(n2) {
  return n2.children;
}
__name(p, "p");
function d(n2, l2) {
  this.props = n2, this.context = l2;
}
__name(d, "d");
function _(n2, l2) {
  if (null == l2)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
__name(_, "_");
function k(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k(n2);
  }
}
__name(k, "k");
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
__name(b, "b");
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, j(r, t2, i2, l2.__n, void 0 !== r.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && k(t2)));
    });
}
__name(g, "g");
function w(n2, l2, u2, i2, t2, o2, r, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j(n2, k2, d2 = d2 || f, t2, o2, r, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = A(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && N(x[h2], x[h2]);
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
__name(w, "w");
function m(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
__name(m, "m");
function A(n2, l2, u2, i2, t2, o2) {
  var r, f2, e2;
  if (void 0 !== l2.__d)
    r = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r = o2;
      }
  return void 0 !== r ? r : t2.nextSibling;
}
__name(A, "A");
function C(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
__name(C, "C");
function $(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
}
__name($, "$");
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
__name(H, "H");
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
__name(I, "I");
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
__name(T, "T");
function j(n2, u2, i2, t2, o2, r, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r = [e2]), (a2 = l.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (g2 = u2.props, m2 = (a2 = T2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = h2 = new T2(g2, x) : (u2.__c = h2 = new d(g2, x), h2.constructor = T2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, T2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            for (h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, C2 = l.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C2 && C2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), I2 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n2, Array.isArray(I2) ? I2 : [I2], u2, i2, t2, o2, r, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r, f2, c2);
    (a2 = l.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r) && (u2.__e = e2, u2.__h = !!c2, r[r.indexOf(e2)] = null), l.__e(n3, u2, i2);
  }
}
__name(j, "j");
function z(n2, u2) {
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
__name(z, "z");
function L(l2, u2, i2, t2, o2, r, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r) {
    for (; k2 < r.length; k2++)
      if ((s2 = r[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r = r && n.call(l2.childNodes), h2 = (y2 = i2.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r, e2, r ? r[0] : i2.__k && _(i2, 0), c2), null != r)
      for (k2 = r.length; k2--; )
        null != r[k2] && a(r[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
__name(L, "L");
function M(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, i2);
  }
}
__name(M, "M");
function N(n2, u2, i2) {
  var t2, o2;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
__name(N, "N");
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
__name(O, "O");
n = e.slice, l = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r = t2.__d), r)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, d.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0;
const scrollbar = "";
class Scrollbar extends d {
  constructor(props) {
    var _a2;
    super(props);
    __privateAdd(this, _rafId, 0);
    __privateAdd(this, _wheelRoot, null);
    __publicField(this, "_handleWheel", /* @__PURE__ */ __name((event) => {
      var _a2;
      const { wheelContainer } = this.props;
      const target = event.target;
      if (!target || !wheelContainer) {
        return;
      }
      if (typeof wheelContainer === "string" && target.closest(wheelContainer) || typeof wheelContainer === "object") {
        const offset2 = (this.props.type === "horz" ? event.deltaX : event.deltaY) * ((_a2 = this.props.wheelSpeed) != null ? _a2 : 1);
        if (this.scrollOffset(offset2)) {
          event.preventDefault();
        }
      }
    }, "_handleWheel"));
    __publicField(this, "_handleMouseMove", /* @__PURE__ */ __name((event) => {
      const { dragStart } = this.state;
      if (dragStart) {
        if (__privateGet(this, _rafId)) {
          cancelAnimationFrame(__privateGet(this, _rafId));
        }
        __privateSet(this, _rafId, requestAnimationFrame(() => {
          const dragDelta = this.props.type === "horz" ? event.clientX - dragStart.x : event.clientY - dragStart.y;
          this.scroll(dragStart.offset + dragDelta * this.props.scrollSize / this.props.clientSize);
          __privateSet(this, _rafId, 0);
        }));
        event.preventDefault();
      }
    }, "_handleMouseMove"));
    __publicField(this, "_handleMouseUp", /* @__PURE__ */ __name(() => {
      if (this.state.dragStart) {
        this.setState({
          dragStart: false
        });
      }
    }, "_handleMouseUp"));
    __publicField(this, "_handleMouseDown", /* @__PURE__ */ __name((event) => {
      if (!this.state.dragStart) {
        this.setState({ dragStart: { x: event.clientX, y: event.clientY, offset: this.scrollPos } });
      }
      event.stopPropagation();
    }, "_handleMouseDown"));
    __publicField(this, "_handleClick", /* @__PURE__ */ __name((event) => {
      const currentTarget = event.currentTarget;
      if (!currentTarget) {
        return;
      }
      const boundingRect = currentTarget.getBoundingClientRect();
      const { type, clientSize, scrollSize } = this.props;
      const clickOffset = (type === "horz" ? event.clientX - boundingRect.left : event.clientY - boundingRect.top) - this.barSize / 2;
      this.scroll(clickOffset * scrollSize / clientSize);
      event.preventDefault();
    }, "_handleClick"));
    this.state = {
      scrollPos: (_a2 = this.props.defaultScrollPos) != null ? _a2 : 0,
      dragStart: false
    };
  }
  get scrollPos() {
    var _a2;
    return (_a2 = this.props.scrollPos) != null ? _a2 : this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize, clientSize } = this.props;
    return Math.max(0, scrollSize - clientSize);
  }
  get barSize() {
    const { clientSize, scrollSize, size = 12, minBarSize = 3 * size } = this.props;
    return Math.max(Math.round(clientSize * clientSize / scrollSize), minBarSize);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove);
    document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer } = this.props;
    if (wheelContainer) {
      __privateSet(this, _wheelRoot, typeof wheelContainer === "string" ? document : wheelContainer.current);
      __privateGet(this, _wheelRoot).addEventListener("wheel", this._handleWheel, { passive: false });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove);
    document.removeEventListener("mouseup", this._handleMouseUp);
    if (__privateGet(this, _wheelRoot)) {
      __privateGet(this, _wheelRoot).removeEventListener("wheel", this._handleWheel);
    }
  }
  scroll(scrollPos) {
    scrollPos = Math.max(0, Math.min(Math.round(scrollPos), this.maxScrollPos));
    if (scrollPos === this.scrollPos) {
      return false;
    }
    if (this.controlled) {
      this._afterScroll(scrollPos);
    } else {
      this.setState({
        scrollPos
      }, this._afterScroll.bind(this, scrollPos));
    }
    return true;
  }
  scrollOffset(offset2) {
    return this.scroll(this.scrollPos + offset2);
  }
  _afterScroll(scrollPos) {
    var _a2;
    const { onScroll } = this.props;
    if (onScroll) {
      onScroll(scrollPos, (_a2 = this.props.type) != null ? _a2 : "vert");
    }
  }
  render() {
    const {
      clientSize,
      type,
      size = 12,
      className,
      style: style2,
      left: left2,
      top: top2,
      bottom: bottom2,
      right: right2
    } = this.props;
    const { maxScrollPos, scrollPos } = this;
    const { dragStart } = this.state;
    const rootStyle = {
      left: left2,
      top: top2,
      bottom: bottom2,
      right: right2,
      ...style2
    };
    const barStyle = {};
    if (type === "horz") {
      rootStyle.height = size;
      rootStyle.width = clientSize;
      barStyle.width = this.barSize;
      barStyle.left = Math.round(Math.min(maxScrollPos, scrollPos) * (clientSize - barStyle.width) / maxScrollPos);
    } else {
      rootStyle.width = size;
      rootStyle.height = clientSize;
      barStyle.height = this.barSize;
      barStyle.top = Math.round(Math.min(maxScrollPos, scrollPos) * (clientSize - barStyle.height) / maxScrollPos);
    }
    return /* @__PURE__ */ h("div", {
      className: classes("scrollbar", className, {
        "is-vert": type === "vert",
        "is-horz": type === "horz",
        "is-dragging": dragStart
      }),
      style: rootStyle,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ h("div", {
      className: "scrollbar-bar",
      style: barStyle,
      onMouseDown: this._handleMouseDown
    }));
  }
}
__name(Scrollbar, "Scrollbar");
_rafId = new WeakMap();
_wheelRoot = new WeakMap();
function clamp(size, min2, max2) {
  if (size) {
    if (min2) {
      size = Math.max(min2, size);
    }
    if (max2) {
      size = Math.min(max2, size);
    }
  }
  return size;
}
__name(clamp, "clamp");
function Cell({ col, className, height, row, onRenderCell, style: styleFromParent, outerStyle: outerStyleFromParent, children: childrenFromParent, outerClass, ...others }) {
  var _a2, _b2;
  const outerStyle = {
    left: col.left,
    width: col.realWidth,
    height,
    ...outerStyleFromParent
  };
  const { align, border } = col.setting;
  const contentStyle = {
    justifyContent: align ? align === "left" ? "start" : align === "right" ? "end" : align : void 0,
    ...col.setting.cellStyle,
    ...styleFromParent
  };
  const outerClassName = ["dtable-cell", outerClass, col.setting.className, {
    "has-border-left": border === true || border === "left",
    "has-border-right": border === true || border === "right"
  }];
  const contentClassName = ["dtable-cell-content", className];
  const defaultResult = [(_b2 = childrenFromParent != null ? childrenFromParent : (_a2 = row.data) == null ? void 0 : _a2[col.name]) != null ? _b2 : ""];
  const result = onRenderCell ? onRenderCell(defaultResult, { row, col }, h$1) : defaultResult;
  const outerChildren = [];
  const contentChildren = [];
  const outerAttrs = {};
  const contentAttrs = {};
  result == null ? void 0 : result.forEach((item) => {
    var _a3;
    if (typeof item === "object" && item && !i(item) && ("html" in item || "className" in item || "style" in item || "attrs" in item || "children" in item)) {
      const children = item.outer ? outerChildren : contentChildren;
      if (item.html) {
        children.push(/* @__PURE__ */ h$1("div", {
          className: classes("dtable-cell-html", item.className),
          style: item.style,
          dangerouslySetInnerHTML: { __html: item.html },
          ...(_a3 = item.attrs) != null ? _a3 : {}
        }));
      } else {
        if (item.style) {
          Object.assign(item.outer ? outerStyle : contentStyle, item.style);
        }
        if (item.className) {
          (item.outer ? outerClassName : contentClassName).push(item.className);
        }
        if (item.children) {
          children.push(item.children);
        }
        if (item.attrs) {
          Object.assign(item.outer ? outerAttrs : contentAttrs, item.attrs);
        }
      }
    } else {
      contentChildren.push(item);
    }
  });
  return /* @__PURE__ */ h$1("div", {
    className: classes(outerClassName),
    style: outerStyle,
    "data-col": col.name,
    ...others,
    ...outerAttrs
  }, contentChildren.length > 0 && /* @__PURE__ */ h$1("div", {
    className: classes(contentClassName),
    style: contentStyle,
    ...contentAttrs
  }, contentChildren), outerChildren);
}
__name(Cell, "Cell");
function Cells({ row, className, top: top2 = 0, left: left2 = 0, width, height, cols, CellComponent = Cell, onRenderCell }) {
  return /* @__PURE__ */ h$1("div", {
    className: classes("dtable-cells", className),
    style: { top: top2, left: left2, width, height }
  }, cols.map((col) => {
    if (!col.visible) {
      return null;
    }
    return /* @__PURE__ */ h$1(CellComponent, {
      key: col.name,
      col,
      row,
      onRenderCell
    });
  }));
}
__name(Cells, "Cells");
function Row({
  row,
  className,
  top: top2,
  height,
  fixedLeftCols,
  fixedRightCols,
  scrollCols,
  fixedLeftWidth,
  scrollWidth,
  scrollColsWidth,
  fixedRightWidth,
  scrollLeft,
  CellComponent = Cell,
  onRenderCell,
  style: style2,
  ...others
}) {
  let flexLeftView = null;
  if (fixedLeftCols == null ? void 0 : fixedLeftCols.length) {
    flexLeftView = /* @__PURE__ */ h$1(Cells, {
      className: "dtable-fixed-left",
      cols: fixedLeftCols,
      width: fixedLeftWidth,
      row,
      CellComponent,
      onRenderCell
    });
  }
  let scrollableView = null;
  if (scrollCols == null ? void 0 : scrollCols.length) {
    scrollableView = /* @__PURE__ */ h$1(Cells, {
      className: "dtable-flexable",
      cols: scrollCols,
      left: fixedLeftWidth - scrollLeft,
      width: Math.max(scrollWidth, scrollColsWidth),
      row,
      CellComponent,
      onRenderCell
    });
  }
  let flexRightView = null;
  if (fixedRightCols == null ? void 0 : fixedRightCols.length) {
    flexRightView = /* @__PURE__ */ h$1(Cells, {
      className: "dtable-fixed-right",
      cols: fixedRightCols,
      left: fixedLeftWidth + scrollWidth,
      width: fixedRightWidth,
      row,
      CellComponent,
      onRenderCell
    });
  }
  const finalStyle = { top: top2, height, lineHeight: `${height - 2}px`, ...style2 };
  return /* @__PURE__ */ h$1("div", {
    className: classes("dtable-row", className),
    style: finalStyle,
    "data-id": row.id,
    ...others
  }, flexLeftView, scrollableView, flexRightView);
}
__name(Row, "Row");
function Header({ height, onRenderRow, ...otherProps }) {
  const props = {
    height,
    ...otherProps,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (onRenderRow) {
    const result = onRenderRow({ props }, h$1);
    if (result) {
      Object.assign(props, result);
    }
  }
  return /* @__PURE__ */ h$1("div", {
    className: "dtable-header",
    style: { height }
  }, /* @__PURE__ */ h$1(Row, {
    ...props
  }));
}
__name(Header, "Header");
function Rows({
  className,
  style: style2,
  top: top2,
  rows,
  height,
  rowHeight,
  scrollTop,
  onRenderRow,
  ...otherProps
}) {
  style2 = { ...style2, top: top2, height };
  return /* @__PURE__ */ h$1("div", {
    className: classes("dtable-rows", className),
    style: style2
  }, rows.map((row) => {
    const props = {
      className: `dtable-row-${row.index % 2 ? "odd" : "even"}`,
      row,
      top: row.top - scrollTop,
      height: rowHeight,
      ...otherProps
    };
    const result = onRenderRow == null ? void 0 : onRenderRow({ props, row }, h$1);
    if (result) {
      Object.assign(props, result);
    }
    return /* @__PURE__ */ h$1(Row, {
      ...props
    });
  }));
}
__name(Rows, "Rows");
const sharedPlugins = /* @__PURE__ */ new Map();
const buildInPlugins = [];
function addPlugin(plugin, defineOptions) {
  const { name } = plugin;
  if (!(defineOptions == null ? void 0 : defineOptions.override) && sharedPlugins.has(name)) {
    throw new Error(`DTable: Plugin with name ${name} already exists`);
  }
  sharedPlugins.set(name, plugin);
  if ((defineOptions == null ? void 0 : defineOptions.buildIn) && !buildInPlugins.includes(name)) {
    buildInPlugins.push(name);
  }
}
__name(addPlugin, "addPlugin");
function definePlugin(plugin, defineOptions) {
  addPlugin(plugin, defineOptions);
  const comsumer = /* @__PURE__ */ __name((options) => {
    if (!options) {
      return plugin;
    }
    const { defaultOptions, ...otherProps } = plugin;
    return {
      ...otherProps,
      defaultOptions: { ...defaultOptions, ...options }
    };
  }, "comsumer");
  comsumer.plugin = plugin;
  return comsumer;
}
__name(definePlugin, "definePlugin");
function removePlugin(name) {
  return sharedPlugins.delete(name);
}
__name(removePlugin, "removePlugin");
function getDTablePlugin(nameOrPlugin) {
  if (typeof nameOrPlugin === "string") {
    const plugin = sharedPlugins.get(nameOrPlugin);
    if (!plugin) {
      console.warn(`DTable: Cannot found plugin "${nameOrPlugin}"`);
    }
    return plugin;
  }
  if (typeof nameOrPlugin === "function" && "plugin" in nameOrPlugin) {
    return nameOrPlugin.plugin;
  }
  if (typeof nameOrPlugin === "object") {
    return nameOrPlugin;
  }
  console.warn("DTable: Invalid plugin", nameOrPlugin);
}
__name(getDTablePlugin, "getDTablePlugin");
function initPluginsInner(plugins2, pluginsLike, pluginSet) {
  pluginsLike.forEach((nameOrPlugin) => {
    var _a2;
    if (!nameOrPlugin) {
      return;
    }
    const plugin = getDTablePlugin(nameOrPlugin);
    if (!plugin) {
      return;
    }
    if (pluginSet.has(plugin.name)) {
      return;
    }
    if ((_a2 = plugin.plugins) == null ? void 0 : _a2.length) {
      initPluginsInner(plugins2, plugin.plugins, pluginSet);
    }
    plugins2.push(plugin);
    pluginSet.add(plugin.name);
  });
  return plugins2;
}
__name(initPluginsInner, "initPluginsInner");
function initPlugins(pluginsLike = [], includeBuildIns = true) {
  if (includeBuildIns && buildInPlugins.length) {
    pluginsLike.unshift(...buildInPlugins);
  }
  if (!(pluginsLike == null ? void 0 : pluginsLike.length)) {
    return [];
  }
  return initPluginsInner([], pluginsLike, /* @__PURE__ */ new Set());
}
__name(initPlugins, "initPlugins");
function getDefaultOptions() {
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
    header: true,
    footer: false,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: true,
    colHover: false,
    cellHover: false,
    bordered: false,
    striped: true,
    responsive: false,
    scrollbarHover: true,
    horzScrollbarPos: "outside"
  };
}
__name(getDefaultOptions, "getDefaultOptions");
const index$b = "";
class DTable$1 extends d$1 {
  constructor(props) {
    var _a2;
    super(props);
    __privateAdd(this, _renderHeader);
    __privateAdd(this, _renderRows);
    __privateAdd(this, _renderFooter);
    __privateAdd(this, _renderScrollBars);
    __privateAdd(this, _afterRender);
    __privateAdd(this, _initOptions);
    __privateAdd(this, _initLayout);
    __privateAdd(this, _getLayout);
    __publicField(this, "ref", y());
    __privateAdd(this, _rafId2, 0);
    __privateAdd(this, _id, void 0);
    __privateAdd(this, _needRender, false);
    __privateAdd(this, _options2, void 0);
    __privateAdd(this, _allPlugins, void 0);
    __privateAdd(this, _plugins, []);
    __privateAdd(this, _layout, void 0);
    __privateAdd(this, _events2, /* @__PURE__ */ new Map());
    __privateAdd(this, _data, {});
    __privateAdd(this, _rob, void 0);
    __privateAdd(this, _i18nMaps, []);
    __publicField(this, "updateLayout", /* @__PURE__ */ __name(() => {
      if (__privateGet(this, _rafId2)) {
        cancelAnimationFrame(__privateGet(this, _rafId2));
      }
      __privateSet(this, _rafId2, requestAnimationFrame(() => {
        __privateSet(this, _layout, void 0);
        this.forceUpdate();
        __privateSet(this, _rafId2, 0);
      }));
    }, "updateLayout"));
    __privateAdd(this, _handleEvent, /* @__PURE__ */ __name((event, type) => {
      type = type || event.type;
      const callbacks = __privateGet(this, _events2).get(type);
      if (!(callbacks == null ? void 0 : callbacks.length)) {
        return;
      }
      for (const callback of callbacks) {
        const result = callback.call(this, event);
        if (result === false) {
          event.stopPropagation();
          event.preventDefault();
          break;
        }
      }
    }, "#handleEvent"));
    __privateAdd(this, _handleWindowEvent, /* @__PURE__ */ __name((event) => {
      __privateGet(this, _handleEvent).call(this, event, `window_${event.type}`);
    }, "#handleWindowEvent"));
    __privateAdd(this, _handleDocumentEvent, /* @__PURE__ */ __name((event) => {
      __privateGet(this, _handleEvent).call(this, event, `document_${event.type}`);
    }, "#handleDocumentEvent"));
    __privateAdd(this, _handleRenderRow, /* @__PURE__ */ __name((data, h2) => {
      if (this.options.onRenderRow) {
        const result = this.options.onRenderRow.call(this, data, h2);
        if (result) {
          Object.assign(data.props, result);
        }
      }
      __privateGet(this, _plugins).forEach((plugin) => {
        if (plugin.onRenderRow) {
          const result = plugin.onRenderRow.call(this, data, h2);
          if (result) {
            Object.assign(data.props, result);
          }
        }
      });
      return data.props;
    }, "#handleRenderRow"));
    __privateAdd(this, _handleRenderHeaderRow, /* @__PURE__ */ __name((data, h2) => {
      if (this.options.onRenderHeaderRow) {
        data.props = this.options.onRenderHeaderRow.call(this, data, h2);
      }
      __privateGet(this, _plugins).forEach((plugin) => {
        if (plugin.onRenderHeaderRow) {
          data.props = plugin.onRenderHeaderRow.call(this, data, h2);
        }
      });
      return data.props;
    }, "#handleRenderHeaderRow"));
    __privateAdd(this, _handleRenderCell, /* @__PURE__ */ __name((result, data, h2) => {
      const { row, col } = data;
      result[0] = this.getCellValue(row, col);
      const renderCallbackName = row.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      if (col.setting[renderCallbackName]) {
        result = col.setting[renderCallbackName].call(this, result, data, h2);
      }
      if (this.options[renderCallbackName]) {
        result = this.options[renderCallbackName].call(this, result, data, h2);
      }
      __privateGet(this, _plugins).forEach((plugin) => {
        if (plugin[renderCallbackName]) {
          result = plugin[renderCallbackName].call(this, result, data, h2);
        }
      });
      return result;
    }, "#handleRenderCell"));
    __privateAdd(this, _handleScroll, /* @__PURE__ */ __name((scrollOffset, type) => {
      if (type === "horz") {
        this.scroll({ scrollLeft: scrollOffset });
      } else {
        this.scroll({ scrollTop: scrollOffset });
      }
    }, "#handleScroll"));
    __privateAdd(this, _handleClick, /* @__PURE__ */ __name((event) => {
      var _a2, _b2, _c, _d, _e;
      const pointerInfo = this.getPointerInfo(event);
      if (!pointerInfo) {
        return;
      }
      const { rowID, colName, cellElement } = pointerInfo;
      if (rowID === "HEADER") {
        if (cellElement) {
          (_a2 = this.options.onHeaderCellClick) == null ? void 0 : _a2.call(this, event, { colName, element: cellElement });
          __privateGet(this, _plugins).forEach((plugin) => {
            var _a3;
            (_a3 = plugin.onHeaderCellClick) == null ? void 0 : _a3.call(this, event, { colName, element: cellElement });
          });
        }
      } else {
        const { rowElement } = pointerInfo;
        const rowInfo = this.layout.visibleRows.find((row) => row.id === rowID);
        if (cellElement) {
          if (((_b2 = this.options.onCellClick) == null ? void 0 : _b2.call(this, event, { colName, rowID, rowInfo, element: cellElement, rowElement })) === true) {
            return;
          }
          for (const plugin of __privateGet(this, _plugins)) {
            if (((_c = plugin.onCellClick) == null ? void 0 : _c.call(this, event, { colName, rowID, rowInfo, element: cellElement, rowElement })) === true) {
              return;
            }
          }
        }
        if (((_d = this.options.onRowClick) == null ? void 0 : _d.call(this, event, { rowID, rowInfo, element: rowElement })) === true) {
          return;
        }
        for (const plugin of __privateGet(this, _plugins)) {
          if (((_e = plugin.onRowClick) == null ? void 0 : _e.call(this, event, { rowID, rowInfo, element: rowElement })) === true) {
            return;
          }
        }
      }
    }, "#handleClick"));
    __privateAdd(this, _handleKeydown, /* @__PURE__ */ __name((event) => {
      const key = event.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(key)) {
        return !this.scroll({ to: key.replace("page", "") });
      }
    }, "#handleKeydown"));
    __privateSet(this, _id, (_a2 = props.id) != null ? _a2 : `dtable-${nanoid(10)}`);
    this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 };
    __privateSet(this, _allPlugins, Object.freeze(initPlugins(props.plugins)));
    __privateGet(this, _allPlugins).forEach((plugin) => {
      var _a3;
      const { methods, data, state } = plugin;
      if (methods) {
        Object.entries(methods).forEach(([methodName, method]) => {
          if (typeof method === "function") {
            Object.assign(this, { [methodName]: method.bind(this) });
          }
        });
      }
      if (data) {
        Object.assign(__privateGet(this, _data), data.call(this));
      }
      if (state) {
        Object.assign(this.state, state.call(this));
      }
      (_a3 = plugin.onCreate) == null ? void 0 : _a3.call(this, plugin);
    });
  }
  get options() {
    var _a2;
    return ((_a2 = __privateGet(this, _layout)) == null ? void 0 : _a2.options) || __privateGet(this, _options2) || getDefaultOptions();
  }
  get plugins() {
    return __privateGet(this, _plugins);
  }
  get layout() {
    return __privateGet(this, _layout);
  }
  get id() {
    return __privateGet(this, _id);
  }
  get data() {
    return __privateGet(this, _data);
  }
  get parent() {
    var _a2, _b2;
    return (_b2 = this.props.parent) != null ? _b2 : (_a2 = this.ref.current) == null ? void 0 : _a2.parentElement;
  }
  componentWillReceiveProps() {
    __privateSet(this, _options2, void 0);
  }
  componentDidMount() {
    if (__privateGet(this, _needRender)) {
      this.forceUpdate();
    } else {
      __privateMethod(this, _afterRender, afterRender_fn).call(this);
    }
    __privateGet(this, _plugins).forEach((plugin) => {
      let { events } = plugin;
      if (!events) {
        return;
      }
      if (typeof events === "function") {
        events = events.call(this);
      }
      Object.entries(events).forEach(([eventType, callback]) => {
        if (callback) {
          this.on(eventType, callback);
        }
      });
    });
    this.on("click", __privateGet(this, _handleClick));
    this.on("keydown", __privateGet(this, _handleKeydown));
    if (this.options.responsive) {
      if (typeof ResizeObserver !== "undefined") {
        const { parent } = this;
        if (parent) {
          const rob = new ResizeObserver(this.updateLayout);
          rob.observe(parent);
          __privateSet(this, _rob, rob);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    __privateGet(this, _plugins).forEach((plugin) => {
      var _a2;
      (_a2 = plugin.onMounted) == null ? void 0 : _a2.call(this);
    });
  }
  componentDidUpdate() {
    if (__privateGet(this, _needRender)) {
      __privateMethod(this, _afterRender, afterRender_fn).call(this);
    } else {
      __privateGet(this, _plugins).forEach((plugin) => {
        var _a2;
        (_a2 = plugin.onUpdated) == null ? void 0 : _a2.call(this);
      });
    }
  }
  componentWillUnmount() {
    var _a2;
    (_a2 = __privateGet(this, _rob)) == null ? void 0 : _a2.disconnect();
    const { current } = this.ref;
    if (current) {
      for (const event of __privateGet(this, _events2).keys()) {
        if (event.startsWith("window_")) {
          window.removeEventListener(event.replace("window_", ""), __privateGet(this, _handleWindowEvent));
        } else if (event.startsWith("document_")) {
          document.removeEventListener(event.replace("document_", ""), __privateGet(this, _handleDocumentEvent));
        } else {
          current.removeEventListener(event, __privateGet(this, _handleEvent));
        }
      }
    }
    __privateGet(this, _plugins).forEach((plugin) => {
      var _a3;
      (_a3 = plugin.onUnmounted) == null ? void 0 : _a3.call(this);
    });
    __privateGet(this, _allPlugins).forEach((plugin) => {
      var _a3;
      (_a3 = plugin.onDestory) == null ? void 0 : _a3.call(this);
    });
    __privateSet(this, _data, {});
    __privateGet(this, _events2).clear();
  }
  on(event, callback, target) {
    var _a2;
    if (target) {
      event = `${target}_${event}`;
    }
    const eventCallbacks = __privateGet(this, _events2).get(event);
    if (eventCallbacks) {
      eventCallbacks.push(callback);
    } else {
      __privateGet(this, _events2).set(event, [callback]);
      if (event.startsWith("window_")) {
        window.addEventListener(event.replace("window_", ""), __privateGet(this, _handleWindowEvent));
      } else if (event.startsWith("document_")) {
        document.addEventListener(event.replace("document_", ""), __privateGet(this, _handleDocumentEvent));
      } else {
        (_a2 = this.ref.current) == null ? void 0 : _a2.addEventListener(event, __privateGet(this, _handleEvent));
      }
    }
  }
  off(event, callback, target) {
    var _a2;
    if (target) {
      event = `${target}_${event}`;
    }
    const eventCallbacks = __privateGet(this, _events2).get(event);
    if (!eventCallbacks) {
      return;
    }
    const index2 = eventCallbacks.indexOf(callback);
    if (index2 >= 0) {
      eventCallbacks.splice(index2, 1);
    }
    if (!eventCallbacks.length) {
      __privateGet(this, _events2).delete(event);
      if (event.startsWith("window_")) {
        window.removeEventListener(event.replace("window_", ""), __privateGet(this, _handleWindowEvent));
      } else if (event.startsWith("document_")) {
        document.removeEventListener(event.replace("document_", ""), __privateGet(this, _handleDocumentEvent));
      } else {
        (_a2 = this.ref.current) == null ? void 0 : _a2.removeEventListener(event, __privateGet(this, _handleEvent));
      }
    }
  }
  emitCustomEvent(event, detail) {
    __privateGet(this, _handleEvent).call(this, detail instanceof Event ? detail : new CustomEvent(event, { detail }), event);
  }
  scroll(info, callback) {
    const { scrollLeft: scrollLeftOld, scrollTop: scrollTopOld, rowsHeightTotal, rowsHeight, rowHeight, colsInfo: { scrollWidth, scrollColsWidth } } = this.layout;
    const { to } = info;
    let { scrollLeft, scrollTop } = info;
    if (to === "up" || to === "down") {
      scrollTop = scrollTopOld + (to === "down" ? 1 : -1) * Math.floor(rowsHeight / rowHeight) * rowHeight;
    } else if (to === "left" || to === "right") {
      scrollLeft = scrollLeftOld + (to === "right" ? 1 : -1) * scrollWidth;
    } else if (to === "home") {
      scrollTop = 0;
    } else if (to === "end") {
      scrollTop = rowsHeightTotal - rowsHeight;
    } else if (to === "left-begin") {
      scrollLeft = 0;
    } else if (to === "right-end") {
      scrollLeft = scrollColsWidth - scrollWidth;
    } else {
      const { offsetLeft, offsetTop } = info;
      if (typeof offsetLeft === "number") {
        scrollLeft = scrollLeftOld + offsetLeft;
      }
      if (typeof offsetTop === "number") {
        scrollLeft = scrollTopOld + offsetTop;
      }
    }
    const state = {};
    if (typeof scrollLeft == "number") {
      scrollLeft = Math.max(0, Math.min(scrollLeft, scrollColsWidth - scrollWidth));
      if (scrollLeft !== scrollLeftOld) {
        state.scrollLeft = scrollLeft;
      }
    }
    if (typeof scrollTop == "number") {
      scrollTop = Math.max(0, Math.min(scrollTop, rowsHeightTotal - rowsHeight));
      if (scrollTop !== scrollTopOld) {
        state.scrollTop = scrollTop;
      }
    }
    if (Object.keys(state).length) {
      this.setState(state, () => {
        var _a2;
        (_a2 = this.options.onScroll) == null ? void 0 : _a2.call(this, state);
        callback == null ? void 0 : callback.call(this, true);
      });
      return true;
    }
    callback == null ? void 0 : callback.call(this, false);
    return false;
  }
  getColInfo(colNameOrIndex) {
    if (colNameOrIndex === void 0) {
      return;
    }
    if (typeof colNameOrIndex === "object") {
      return colNameOrIndex;
    }
    const { colsMap, colsList } = this.layout;
    if (typeof colNameOrIndex === "number") {
      return colsList[colNameOrIndex];
    }
    return colsMap[colNameOrIndex];
  }
  getRowInfo(idOrIndex) {
    if (idOrIndex === void 0) {
      return;
    }
    if (typeof idOrIndex === "object") {
      return idOrIndex;
    }
    if (idOrIndex === -1 || idOrIndex === "HEADER") {
      return { id: "HEADER", index: -1, top: 0 };
    }
    const { rows, rowsMap } = this.layout;
    if (typeof idOrIndex === "number") {
      return rows[idOrIndex];
    }
    return rowsMap[idOrIndex];
  }
  getCellValue(row, col) {
    var _a2, _b2;
    const rowInfo = typeof row === "object" ? row : this.getRowInfo(row);
    if (!rowInfo) {
      return;
    }
    const colInfo = typeof col === "object" ? col : this.getColInfo(col);
    if (!colInfo) {
      return;
    }
    let originValue = rowInfo.id === "HEADER" ? (_a2 = colInfo.setting.title) != null ? _a2 : colInfo.setting.name : (_b2 = rowInfo.data) == null ? void 0 : _b2[colInfo.name];
    const { cellValueGetter } = this.options;
    if (cellValueGetter) {
      originValue = cellValueGetter.call(this, rowInfo, colInfo, originValue);
    }
    return originValue;
  }
  getRowInfoByIndex(index2) {
    return this.layout.rows[index2];
  }
  update(options = {}, callback) {
    if (!__privateGet(this, _options2)) {
      return;
    }
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    const { dirtyType, state } = options;
    if (dirtyType === "layout") {
      __privateSet(this, _layout, void 0);
    } else if (dirtyType === "options") {
      __privateSet(this, _options2, void 0);
      if (!__privateGet(this, _layout)) {
        return;
      }
      __privateSet(this, _layout, void 0);
    }
    this.setState(state != null ? state : (preState) => ({ renderCount: preState.renderCount + 1 }), callback);
  }
  getPointerInfo(event) {
    const target = event.target;
    if (!target || target.closest(".no-cell-event")) {
      return;
    }
    const cellElement = target.closest(".dtable-cell");
    if (!cellElement) {
      return;
    }
    const rowElement = cellElement.closest(".dtable-row");
    if (!rowElement) {
      return;
    }
    const colName = cellElement == null ? void 0 : cellElement.getAttribute("data-col");
    const rowID = rowElement == null ? void 0 : rowElement.getAttribute("data-id");
    if (typeof colName !== "string" || typeof rowID !== "string") {
      return;
    }
    return {
      cellElement,
      rowElement,
      colName,
      rowID,
      target
    };
  }
  i18n(key, args, defaultValue) {
    var _a2;
    return (_a2 = i18n(__privateGet(this, _i18nMaps), key, args, defaultValue, this.options.lang)) != null ? _a2 : `{i18n:${key}}`;
  }
  render() {
    var _a2;
    const layout = __privateMethod(this, _getLayout, getLayout_fn).call(this);
    const { className, rowHover, colHover: colHover2, cellHover, bordered, striped, scrollbarHover } = this.options;
    const style2 = { width: layout == null ? void 0 : layout.width, height: layout == null ? void 0 : layout.height };
    const classNames = ["dtable", className, {
      "dtable-hover-row": rowHover,
      "dtable-hover-col": colHover2,
      "dtable-hover-cell": cellHover,
      "dtable-bordered": bordered,
      "dtable-striped": striped,
      "dtable-scrolled-down": ((_a2 = layout == null ? void 0 : layout.scrollTop) != null ? _a2 : 0) > 0,
      "scrollbar-hover": scrollbarHover
    }];
    const children = [];
    if (layout) {
      __privateGet(this, _plugins).forEach((plugin) => {
        var _a3;
        const result = (_a3 = plugin.onRender) == null ? void 0 : _a3.call(this, layout);
        if (!result) {
          return;
        }
        if (result.style) {
          Object.assign(style2, result.style);
        }
        if (result.className) {
          classNames.push(result.className);
        }
        if (result.children) {
          children.push(result.children);
        }
      });
    }
    return /* @__PURE__ */ h$1("div", {
      id: __privateGet(this, _id),
      className: classes(classNames),
      style: style2,
      ref: this.ref,
      tabIndex: -1
    }, layout && __privateMethod(this, _renderHeader, renderHeader_fn).call(this, layout), layout && __privateMethod(this, _renderRows, renderRows_fn).call(this, layout), layout && __privateMethod(this, _renderFooter, renderFooter_fn).call(this, layout), layout && __privateMethod(this, _renderScrollBars, renderScrollBars_fn).call(this, layout));
  }
}
__name(DTable$1, "DTable$1");
_rafId2 = new WeakMap();
_id = new WeakMap();
_needRender = new WeakMap();
_options2 = new WeakMap();
_allPlugins = new WeakMap();
_plugins = new WeakMap();
_layout = new WeakMap();
_events2 = new WeakMap();
_data = new WeakMap();
_rob = new WeakMap();
_i18nMaps = new WeakMap();
_handleEvent = new WeakMap();
_handleWindowEvent = new WeakMap();
_handleDocumentEvent = new WeakMap();
_renderHeader = new WeakSet();
renderHeader_fn = /* @__PURE__ */ __name(function(layout) {
  const { header, colsInfo, headerHeight, scrollLeft } = layout;
  if (!header) {
    return null;
  }
  if (header === true) {
    return /* @__PURE__ */ h$1(Header, {
      scrollLeft,
      height: headerHeight,
      onRenderCell: __privateGet(this, _handleRenderCell),
      onRenderRow: __privateGet(this, _handleRenderHeaderRow),
      ...colsInfo
    });
  }
  const customResults = Array.isArray(header) ? header : [header];
  return /* @__PURE__ */ h$1(CustomRender, {
    className: "dtable-header",
    style: { height: headerHeight },
    renders: customResults,
    generateArgs: [layout],
    generatorThis: this
  });
}, "#renderHeader");
_renderRows = new WeakSet();
renderRows_fn = /* @__PURE__ */ __name(function(layout) {
  const { headerHeight, rowsHeight, visibleRows, rowHeight, colsInfo, scrollLeft, scrollTop } = layout;
  return /* @__PURE__ */ h$1(Rows, {
    top: headerHeight,
    height: rowsHeight,
    rows: visibleRows,
    rowHeight,
    scrollLeft,
    scrollTop,
    onRenderCell: __privateGet(this, _handleRenderCell),
    onRenderRow: __privateGet(this, _handleRenderRow),
    ...colsInfo
  });
}, "#renderRows");
_renderFooter = new WeakSet();
renderFooter_fn = /* @__PURE__ */ __name(function(layout) {
  const { footer } = layout;
  if (!footer) {
    return null;
  }
  const customResults = typeof footer === "function" ? footer.call(this, layout) : Array.isArray(footer) ? footer : [footer];
  return /* @__PURE__ */ h$1(CustomRender, {
    className: "dtable-footer",
    style: { height: layout.footerHeight, top: layout.rowsHeight + layout.headerHeight },
    renders: customResults,
    generateArgs: [layout],
    generatorThis: this,
    generators: layout.footerGenerators
  });
}, "#renderFooter");
_renderScrollBars = new WeakSet();
renderScrollBars_fn = /* @__PURE__ */ __name(function(layout) {
  const scrollbars = [];
  const { scrollLeft, colsInfo, scrollTop, rowsHeight, rowsHeightTotal, footerHeight } = layout;
  const { scrollColsWidth, scrollWidth } = colsInfo;
  const { scrollbarSize = 12, horzScrollbarPos } = this.options;
  if (scrollColsWidth > scrollWidth) {
    scrollbars.push(
      /* @__PURE__ */ h$1(Scrollbar, {
        key: "horz",
        type: "horz",
        scrollPos: scrollLeft,
        scrollSize: scrollColsWidth,
        clientSize: scrollWidth,
        onScroll: __privateGet(this, _handleScroll),
        left: colsInfo.fixedLeftWidth,
        bottom: (horzScrollbarPos === "inside" ? 0 : -scrollbarSize) + footerHeight,
        size: scrollbarSize,
        wheelContainer: this.ref
      })
    );
  }
  if (rowsHeightTotal > rowsHeight) {
    scrollbars.push(
      /* @__PURE__ */ h$1(Scrollbar, {
        key: "vert",
        type: "vert",
        scrollPos: scrollTop,
        scrollSize: rowsHeightTotal,
        clientSize: rowsHeight,
        onScroll: __privateGet(this, _handleScroll),
        right: 0,
        size: scrollbarSize,
        top: layout.headerHeight,
        wheelContainer: this.ref
      })
    );
  }
  return scrollbars.length ? scrollbars : null;
}, "#renderScrollBars");
_afterRender = new WeakSet();
afterRender_fn = /* @__PURE__ */ __name(function() {
  var _a2;
  __privateSet(this, _needRender, false);
  (_a2 = this.options.afterRender) == null ? void 0 : _a2.call(this);
  __privateGet(this, _plugins).forEach((plugin) => {
    var _a3;
    return (_a3 = plugin.afterRender) == null ? void 0 : _a3.call(this);
  });
}, "#afterRender");
_handleRenderRow = new WeakMap();
_handleRenderHeaderRow = new WeakMap();
_handleRenderCell = new WeakMap();
_handleScroll = new WeakMap();
_handleClick = new WeakMap();
_handleKeydown = new WeakMap();
_initOptions = new WeakSet();
initOptions_fn = /* @__PURE__ */ __name(function() {
  if (__privateGet(this, _options2)) {
    return false;
  }
  const defaultOptions = getDefaultOptions();
  const options = { ...defaultOptions, ...__privateGet(this, _allPlugins).reduce((currentOptions, plugin) => {
    const { defaultOptions: pluginOptions } = plugin;
    if (pluginOptions) {
      Object.assign(currentOptions, pluginOptions);
    }
    return currentOptions;
  }, {}), ...this.props };
  __privateSet(this, _options2, options);
  __privateSet(this, _plugins, __privateGet(this, _allPlugins).reduce((list, plugin) => {
    const { when, options: optionsModifier } = plugin;
    if (!when || when(options)) {
      list.push(plugin);
      if (optionsModifier) {
        Object.assign(options, typeof optionsModifier === "function" ? optionsModifier.call(this, options) : optionsModifier);
      }
    }
    return list;
  }, []));
  __privateSet(this, _i18nMaps, [this.options.i18n, ...this.plugins.map((x) => x.i18n)].filter(Boolean));
  return true;
}, "#initOptions");
_initLayout = new WeakSet();
initLayout_fn = /* @__PURE__ */ __name(function() {
  var _a2, _b2;
  const { plugins: plugins2 } = this;
  let options = __privateGet(this, _options2);
  const footerGenerators = {
    flex: /* @__PURE__ */ h$1("div", {
      style: "flex:auto"
    }),
    divider: /* @__PURE__ */ h$1("div", {
      style: "width:1px;margin:var(--space);background:var(--color-border);height:50%"
    })
  };
  plugins2.forEach((plugin) => {
    var _a3;
    const newOptions = (_a3 = plugin.beforeLayout) == null ? void 0 : _a3.call(this, options);
    if (newOptions) {
      options = { ...options, ...newOptions };
    }
    Object.assign(footerGenerators, plugin.footer);
  });
  const { defaultColWidth, minColWidth, maxColWidth } = options;
  const fixedLeftCols = [];
  const fixedRightCols = [];
  const scrollCols = [];
  const colsMap = {};
  const colsList = [];
  const flexCols = [];
  let fixedLeftWidth = 0;
  let fixedRightWidth = 0;
  let scrollColsWidth = 0;
  options.cols.forEach((colSetting) => {
    var _a3, _b3, _c;
    if (colSetting.hidden) {
      return;
    }
    const {
      name,
      type = "",
      fixed = false,
      flex = false,
      width: width2 = defaultColWidth,
      minWidth = minColWidth,
      maxWidth = maxColWidth,
      ...otherColSetting
    } = colSetting;
    const colInfo = {
      name,
      type,
      setting: {
        name,
        type,
        fixed,
        flex,
        width: width2,
        minWidth,
        maxWidth,
        ...otherColSetting
      },
      flex: fixed ? 0 : flex === true ? 1 : typeof flex === "number" ? flex : 0,
      left: 0,
      width: clamp(width2, minWidth, maxWidth),
      realWidth: 0,
      visible: true,
      index: colsList.length
    };
    plugins2.forEach((plugin) => {
      var _a4, _b4;
      const colTypeInfo = (_a4 = plugin.colTypes) == null ? void 0 : _a4[type];
      if (colTypeInfo) {
        const newColSetting = typeof colTypeInfo === "function" ? colTypeInfo(colInfo) : colTypeInfo;
        if (newColSetting) {
          Object.assign(colInfo.setting, newColSetting);
        }
      }
      (_b4 = plugin.onAddCol) == null ? void 0 : _b4.call(this, colInfo);
    });
    colInfo.width = clamp((_a3 = colInfo.setting.width) != null ? _a3 : colInfo.width, (_b3 = colInfo.setting.minWidth) != null ? _b3 : minWidth, (_c = colInfo.setting.maxWidth) != null ? _c : maxWidth);
    colInfo.realWidth = colInfo.realWidth || colInfo.width;
    if (fixed === "left") {
      colInfo.left = fixedLeftWidth;
      fixedLeftWidth += colInfo.width;
      fixedLeftCols.push(colInfo);
    } else if (fixed === "right") {
      colInfo.left = fixedRightWidth;
      fixedRightWidth += colInfo.width;
      fixedRightCols.push(colInfo);
    } else {
      colInfo.left = scrollColsWidth;
      scrollColsWidth += colInfo.width;
      scrollCols.push(colInfo);
    }
    if (colInfo.flex) {
      flexCols.push(colInfo);
    }
    colsList.push(colInfo);
    colsMap[colInfo.name] = colInfo;
  });
  let widthSetting = options.width;
  let width = 0;
  const actualWidth = fixedLeftWidth + scrollColsWidth + fixedRightWidth;
  if (typeof widthSetting === "function") {
    widthSetting = widthSetting.call(this, actualWidth);
  }
  if (widthSetting === "auto") {
    width = actualWidth;
  } else if (widthSetting === "100%") {
    const { parent: parentElement } = this;
    if (parentElement) {
      width = parentElement.clientWidth;
    } else {
      width = 0;
      __privateSet(this, _needRender, true);
      return;
    }
  } else {
    width = widthSetting != null ? widthSetting : 0;
  }
  const { data, rowKey = "id", rowHeight } = options;
  const allRows = [];
  const addRowItem = /* @__PURE__ */ __name((id, index2, item) => {
    var _a3, _b3;
    const row = { data: item != null ? item : { [rowKey]: id }, id, index: allRows.length, top: 0 };
    if (!item) {
      row.lazy = true;
    }
    allRows.push(row);
    if (((_a3 = options.onAddRow) == null ? void 0 : _a3.call(this, row, index2)) === false) {
      return;
    }
    for (const plugin of plugins2) {
      if (((_b3 = plugin.onAddRow) == null ? void 0 : _b3.call(this, row, index2)) === false) {
        return;
      }
    }
  }, "addRowItem");
  if (typeof data === "number") {
    for (let i2 = 0; i2 < data; i2++) {
      addRowItem(`${i2}`, i2);
    }
  } else if (Array.isArray(data)) {
    data.forEach((item, index2) => {
      var _a3;
      if (typeof item === "object") {
        addRowItem(`${(_a3 = item[rowKey]) != null ? _a3 : ""}`, index2, item);
      } else {
        addRowItem(`${item != null ? item : ""}`, index2);
      }
    });
  }
  let rows = allRows;
  const rowsMap = {};
  if (options.onAddRows) {
    const newRows = options.onAddRows.call(this, rows);
    if (newRows) {
      rows = newRows;
    }
  }
  for (const plugin of plugins2) {
    const newRows = (_a2 = plugin.onAddRows) == null ? void 0 : _a2.call(this, rows);
    if (newRows) {
      rows = newRows;
    }
  }
  rows.forEach((row, index2) => {
    rowsMap[row.id] = row;
    row.index = index2;
    row.top = row.index * rowHeight;
  });
  const { header, footer } = options;
  const headerHeight = header ? options.headerHeight || rowHeight : 0;
  const footerHeight = footer ? options.footerHeight || rowHeight : 0;
  let heightSetting = options.height;
  let height = 0;
  const rowsHeightTotal = rows.length * rowHeight;
  const actualHeight = headerHeight + footerHeight + rowsHeightTotal;
  if (typeof heightSetting === "function") {
    heightSetting = heightSetting.call(this, actualHeight);
  }
  if (heightSetting === "auto") {
    height = actualHeight;
  } else if (typeof heightSetting === "object") {
    height = Math.min(heightSetting.max, Math.max(heightSetting.min, actualHeight));
  } else if (heightSetting === "100%") {
    const { parent: parentElement } = this;
    if (parentElement) {
      height = parentElement.clientHeight;
    } else {
      height = 0;
      __privateSet(this, _needRender, true);
      return;
    }
  } else {
    height = heightSetting;
  }
  const rowsHeight = height - headerHeight - footerHeight;
  const scrollWidth = width - fixedLeftWidth - fixedRightWidth;
  const layout = {
    options,
    allRows,
    width,
    height,
    rows,
    rowsMap,
    rowHeight,
    rowsHeight,
    rowsHeightTotal,
    header,
    footer,
    footerGenerators,
    headerHeight,
    footerHeight,
    colsMap,
    colsList,
    flexCols,
    colsInfo: {
      fixedLeftCols,
      fixedRightCols,
      scrollCols,
      fixedLeftWidth,
      scrollWidth,
      scrollColsWidth,
      fixedRightWidth
    }
  };
  const newLayout = (_b2 = options.onLayout) == null ? void 0 : _b2.call(this, layout);
  if (newLayout) {
    Object.assign(layout, newLayout);
  }
  plugins2.forEach((plugin) => {
    if (plugin.onLayout) {
      const newPluginLayout = plugin.onLayout.call(this, layout);
      if (newPluginLayout) {
        Object.assign(layout, newPluginLayout);
      }
    }
  });
  __privateSet(this, _layout, layout);
}, "#initLayout");
_getLayout = new WeakSet();
getLayout_fn = /* @__PURE__ */ __name(function() {
  if (__privateMethod(this, _initOptions, initOptions_fn).call(this) || !__privateGet(this, _layout)) {
    __privateMethod(this, _initLayout, initLayout_fn).call(this);
  }
  const { layout } = this;
  if (!layout) {
    return;
  }
  let { scrollLeft } = this.state;
  const { flexCols, colsInfo: { scrollCols, scrollWidth, scrollColsWidth } } = layout;
  if (flexCols.length) {
    const extraWidth = scrollWidth - scrollColsWidth;
    if (extraWidth > 0) {
      const totalFlex = flexCols.reduce((total, col) => total + col.flex, 0);
      let totalFlexWidth = 0;
      flexCols.forEach((col) => {
        const flexWidth = Math.min(extraWidth - totalFlexWidth, Math.ceil(extraWidth * (col.flex / totalFlex)));
        col.realWidth = flexWidth + col.width;
        totalFlexWidth += col.realWidth;
      });
    } else {
      flexCols.forEach((col) => {
        col.realWidth = col.width;
      });
    }
  }
  scrollLeft = Math.min(Math.max(0, scrollColsWidth - scrollWidth), scrollLeft);
  let colRealLeft = 0;
  scrollCols.forEach((col) => {
    col.left = colRealLeft;
    colRealLeft += col.realWidth;
    col.visible = col.left + col.realWidth >= scrollLeft && col.left <= scrollLeft + scrollWidth;
  });
  const { rowsHeightTotal, rowsHeight, rows, rowHeight } = layout;
  const scrollTop = Math.min(Math.max(0, rowsHeightTotal - rowsHeight), this.state.scrollTop);
  const startRowIndex = Math.floor(scrollTop / rowHeight);
  const scrollBottom = scrollTop + rowsHeight;
  const endRowIndex = Math.min(rows.length, Math.ceil(scrollBottom / rowHeight));
  const visibleRows = [];
  const { rowDataGetter } = this.options;
  for (let i2 = startRowIndex; i2 < endRowIndex; i2++) {
    const row = rows[i2];
    if (row.lazy) {
      if (rowDataGetter) {
        row.data = rowDataGetter([row.id])[0];
        row.lazy = false;
      }
    }
    visibleRows.push(row);
  }
  layout.visibleRows = visibleRows;
  layout.scrollTop = scrollTop;
  layout.scrollLeft = scrollLeft;
  return layout;
}, "#getLayout");
__publicField(DTable$1, "addPlugin", addPlugin);
__publicField(DTable$1, "removePlugin", removePlugin);
function applyColHover(table2, hoverCol) {
  if (hoverCol !== void 0) {
    table2.data.hoverCol = hoverCol;
  } else {
    hoverCol = table2.data.hoverCol;
  }
  const { current } = table2.ref;
  if (!current) {
    return;
  }
  const hoverClass = "dtable-col-hover";
  current.querySelectorAll(`.${hoverClass}`).forEach((col) => col.classList.remove(hoverClass));
  if (typeof hoverCol === "string" && hoverCol.length) {
    current.querySelectorAll(`.dtable-cell[data-col="${hoverCol}"]`).forEach((x) => x.classList.add(hoverClass));
  }
}
__name(applyColHover, "applyColHover");
const colHoverPlugin = {
  name: "col-hover",
  defaultOptions: {
    colHover: false
  },
  when: (options) => !!options.colHover,
  events: {
    mouseover(event) {
      var _a2, _b2;
      const { colHover: hover } = this.options;
      if (!hover) {
        return;
      }
      const cellElement = (_a2 = event.target) == null ? void 0 : _a2.closest(".dtable-cell");
      if (!cellElement) {
        return;
      }
      if (hover === "header" && !cellElement.closest(".dtable-header")) {
        return;
      }
      const colName = (_b2 = cellElement == null ? void 0 : cellElement.getAttribute("data-col")) != null ? _b2 : false;
      applyColHover(this, colName);
    },
    mouseleave() {
      applyColHover(this, false);
    }
  }
};
const colHover = definePlugin(colHoverPlugin, { buildIn: true });
const style$2 = "";
function toggleCheckRows(ids, checked) {
  var _a2, _b2;
  if (typeof ids === "boolean") {
    checked = ids;
    ids = void 0;
  }
  const checkedRows = this.state.checkedRows;
  const changes = {};
  const { canRowCheckable } = this.options;
  const toggleRow2 = /* @__PURE__ */ __name((id, toggle2) => {
    if (canRowCheckable && !canRowCheckable.call(this, id)) {
      return;
    }
    const oldChecked = !!checkedRows[id];
    if (oldChecked === toggle2) {
      return;
    }
    if (toggle2) {
      checkedRows[id] = true;
    } else {
      delete checkedRows[id];
    }
    changes[id] = toggle2;
  }, "toggleRow");
  if (ids === void 0) {
    if (checked === void 0) {
      checked = !isAllRowChecked.call(this);
    }
    (_a2 = this.layout) == null ? void 0 : _a2.allRows.forEach(({ id }) => {
      toggleRow2(id, !!checked);
    });
  } else {
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    ids.forEach((id) => {
      toggleRow2(id, checked != null ? checked : !checkedRows[id]);
    });
  }
  if (Object.keys(changes).length) {
    const beforeCheckResults = (_b2 = this.options.beforeCheckRows) == null ? void 0 : _b2.call(this, ids, changes, checkedRows);
    if (beforeCheckResults) {
      Object.keys(beforeCheckResults).forEach((key) => {
        if (beforeCheckResults[key]) {
          checkedRows[key] = true;
        } else {
          delete checkedRows[key];
        }
      });
    }
    this.setState({ checkedRows: { ...checkedRows } }, () => {
      var _a3;
      (_a3 = this.options.onCheckChange) == null ? void 0 : _a3.call(this, changes);
    });
  }
  return changes;
}
__name(toggleCheckRows, "toggleCheckRows");
function isRowChecked(rowID) {
  var _a2;
  return (_a2 = this.state.checkedRows[rowID]) != null ? _a2 : false;
}
__name(isRowChecked, "isRowChecked");
function isAllRowChecked() {
  var _a2, _b2;
  const checkedLength = this.getChecks().length;
  const { canRowCheckable } = this.options;
  if (canRowCheckable) {
    return checkedLength === ((_a2 = this.layout) == null ? void 0 : _a2.allRows.reduce((length, row) => {
      return length + (canRowCheckable.call(this, row.id) ? 1 : 0);
    }, 0));
  }
  return checkedLength === ((_b2 = this.layout) == null ? void 0 : _b2.allRows.length);
}
__name(isAllRowChecked, "isAllRowChecked");
function getChecks() {
  return Object.keys(this.state.checkedRows);
}
__name(getChecks, "getChecks");
const checkablePlugin = {
  name: "checkable",
  defaultOptions: { checkable: true },
  when: (options) => !!options.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows,
    isRowChecked,
    isAllRowChecked,
    getChecks
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
      const checked = this.isAllRowChecked();
      return [
        /* @__PURE__ */ h$1("div", {
          style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" },
          onClick: () => this.toggleCheckRows()
        }, /* @__PURE__ */ h$1("input", {
          type: "checkbox",
          checked
        }))
      ];
    },
    checkedInfo(_2, layout) {
      const checkedCount = this.getChecks().length;
      const texts = [];
      if (checkedCount) {
        texts.push(this.i18n("checkedCountInfo", { selected: checkedCount }));
      }
      texts.push(this.i18n("totalCountInfo", { total: layout.allRows.length }));
      return [
        /* @__PURE__ */ h$1("div", null, texts.join(", "))
      ];
    }
  },
  onRenderCell(result, { row, col }) {
    var _a2, _b2;
    const { id: rowID } = row;
    const { canRowCheckable } = this.options;
    if (canRowCheckable && !canRowCheckable.call(this, rowID)) {
      return result;
    }
    const { checkbox: checkboxSetting } = col.setting;
    const showCheckbox = typeof checkboxSetting === "function" ? checkboxSetting.call(this, rowID) : checkboxSetting;
    if (showCheckbox) {
      const checked = this.isRowChecked(rowID);
      const checkbox2 = (_b2 = (_a2 = this.options.checkboxRender) == null ? void 0 : _a2.call(this, checked, rowID)) != null ? _b2 : /* @__PURE__ */ h$1("input", {
        type: "checkbox",
        checked
      });
      result.unshift(checkbox2);
      result.push({ className: "has-checkbox" });
    }
    return result;
  },
  onRenderHeaderCell(result, { row, col }) {
    var _a2, _b2;
    const { id: rowID } = row;
    const { checkbox: checkboxSetting } = col.setting;
    const showCheckbox = typeof checkboxSetting === "function" ? checkboxSetting.call(this, rowID) : checkboxSetting;
    if (showCheckbox) {
      const checked = this.isAllRowChecked();
      const checkbox2 = (_b2 = (_a2 = this.options.checkboxRender) == null ? void 0 : _a2.call(this, checked, rowID)) != null ? _b2 : /* @__PURE__ */ h$1("input", {
        type: "checkbox",
        checked
      });
      result.unshift(checkbox2);
      result.push({ className: "has-checkbox" });
    }
    return result;
  },
  onRenderRow({ props, row }) {
    if (!this.isRowChecked(row.id)) {
      return;
    }
    return { className: classes(props.className, "is-checked") };
  },
  onHeaderCellClick(event) {
    const target = event.target;
    if (!target) {
      return;
    }
    const checkbox2 = target.closest('input[type="checkbox"],.dtable-checkbox');
    if (checkbox2) {
      this.toggleCheckRows(checkbox2.checked);
    }
  },
  onRowClick(event, { rowID }) {
    const target = event.target;
    if (!target) {
      return;
    }
    const checkbox2 = target.closest('input[type="checkbox"],.dtable-checkbox');
    if (checkbox2 || this.options.checkOnClickRow) {
      this.toggleCheckRows(rowID);
    }
  }
};
const checkable = definePlugin(checkablePlugin);
const toggle = "";
const style$1 = "";
var NestedRowState = /* @__PURE__ */ ((NestedRowState2) => {
  NestedRowState2["unknown"] = "";
  NestedRowState2["collapsed"] = "collapsed";
  NestedRowState2["expanded"] = "expanded";
  NestedRowState2["hidden"] = "hidden";
  NestedRowState2["normal"] = "normal";
  return NestedRowState2;
})(NestedRowState || {});
function getNestedRowInfo(rowID) {
  const info = this.data.nestedMap.get(rowID);
  if (!info || info.state !== "") {
    return info != null ? info : { state: "normal", level: -1 };
  }
  if (!info.parent && !info.children) {
    info.state = "normal";
    return info;
  }
  const collapsedRows = this.state.collapsedRows;
  const isRowCollapsed = info.children && collapsedRows && collapsedRows[rowID];
  let isParentCollapsed = false;
  let { parent } = info;
  while (parent) {
    const parentInfo = getNestedRowInfo.call(this, parent);
    if (parentInfo.state !== "expanded") {
      isParentCollapsed = true;
      break;
    }
    parent = parentInfo.parent;
  }
  info.state = isParentCollapsed ? "hidden" : isRowCollapsed ? "collapsed" : info.children ? "expanded" : "normal";
  info.level = info.parent ? getNestedRowInfo.call(this, info.parent).level + 1 : 0;
  return info;
}
__name(getNestedRowInfo, "getNestedRowInfo");
function toggleRow(rowID, collapsed) {
  var _a2;
  let collapsedRows = (_a2 = this.state.collapsedRows) != null ? _a2 : {};
  const { nestedMap } = this.data;
  if (rowID === "HEADER") {
    if (collapsed === void 0) {
      collapsed = !isAllCollapsed.call(this);
    }
    if (collapsed) {
      const infos = nestedMap.entries();
      for (const [id, info] of infos) {
        if (info.state === "expanded") {
          collapsedRows[id] = true;
        }
      }
    } else {
      collapsedRows = {};
    }
  } else {
    const ids = Array.isArray(rowID) ? rowID : [rowID];
    if (collapsed === void 0) {
      collapsed = !collapsedRows[ids[0]];
    }
    ids.forEach((id) => {
      const info = nestedMap.get(id);
      if (collapsed && (info == null ? void 0 : info.children)) {
        collapsedRows[id] = true;
      } else {
        delete collapsedRows[id];
      }
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...collapsedRows } }
  }, () => {
    var _a3;
    (_a3 = this.options.onNestedChange) == null ? void 0 : _a3.call(this);
  });
}
__name(toggleRow, "toggleRow");
function isAllCollapsed() {
  const infos = this.data.nestedMap.values();
  for (const info of infos) {
    if (info.state === "expanded") {
      return false;
    }
  }
  return true;
}
__name(isAllCollapsed, "isAllCollapsed");
function updateNestedMapOrders(map, lastOrder = 0, ids, level = 0) {
  var _a2;
  if (!ids) {
    ids = [...map.keys()];
  }
  for (const id of ids) {
    const info = map.get(id);
    if (!info) {
      continue;
    }
    if (info.level === level) {
      info.order = lastOrder++;
    }
    if ((_a2 = info.children) == null ? void 0 : _a2.length) {
      lastOrder = updateNestedMapOrders(map, lastOrder, info.children, level + 1);
    }
  }
  return lastOrder;
}
__name(updateNestedMapOrders, "updateNestedMapOrders");
function checkNestedRow(dtable, rowID, checked, map) {
  const info = dtable.getNestedRowInfo(rowID);
  if (!info || info.state === "" || !info.children) {
    return info;
  }
  info.children.forEach((childID) => {
    map[childID] = checked;
    checkNestedRow(dtable, childID, checked, map);
  });
  return info;
}
__name(checkNestedRow, "checkNestedRow");
function updateParentRow(dtable, parentID, checked, map, checkedRows) {
  var _a2;
  const info = dtable.getNestedRowInfo(parentID);
  if (!info || info.state === "") {
    return;
  }
  const allChildrenMatched = (_a2 = info.children) == null ? void 0 : _a2.every((childID) => {
    const childChecked = !!(map[childID] !== void 0 ? map[childID] : checkedRows[childID]);
    return checked === childChecked;
  });
  if (allChildrenMatched) {
    map[parentID] = checked;
  }
  if (info.parent) {
    updateParentRow(dtable, info.parent, checked, map, checkedRows);
  }
}
__name(updateParentRow, "updateParentRow");
const nestedPlugin = {
  name: "nested",
  defaultOptions: {
    nested: true,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(from, to) {
      const { nestedMap } = this.data;
      const fromInfo = nestedMap.get(from.id);
      const toInfo = nestedMap.get(to.id);
      return (fromInfo == null ? void 0 : fromInfo.parent) === (toInfo == null ? void 0 : toInfo.parent);
    },
    beforeCheckRows(ids, changes, checkedRows) {
      if (!this.options.checkable || !(ids == null ? void 0 : ids.length)) {
        return;
      }
      const result = {};
      Object.entries(changes).forEach(([rowID, checked]) => {
        const info = checkNestedRow(this, rowID, checked, result);
        if (info == null ? void 0 : info.parent) {
          updateParentRow(this, info.parent, checked, result, checkedRows);
        }
      });
      return result;
    }
  },
  when: (options) => !!options.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow,
    isAllCollapsed,
    getNestedRowInfo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(row) {
    var _a2, _b2, _c, _d, _e;
    const { nestedMap } = this.data;
    const parent = (_b2 = row.data) == null ? void 0 : _b2[(_a2 = this.options.nestedParentKey) != null ? _a2 : "parent"];
    const info = (_c = nestedMap.get(row.id)) != null ? _c : {
      state: "",
      level: 0
    };
    info.parent = parent;
    if ((_e = row.data) == null ? void 0 : _e[(_d = this.options.asParentKey) != null ? _d : "asParent"]) {
      info.children = [];
    }
    nestedMap.set(row.id, info);
    if (parent) {
      let parentInfo = nestedMap.get(parent);
      if (!parentInfo) {
        parentInfo = {
          state: "",
          level: 0
        };
        nestedMap.set(parent, parentInfo);
      }
      if (!parentInfo.children) {
        parentInfo.children = [];
      }
      parentInfo.children.push(row.id);
    }
  },
  onAddRows(rows) {
    rows = rows.filter((row) => this.getNestedRowInfo(row.id).state !== "hidden");
    updateNestedMapOrders(this.data.nestedMap);
    rows.sort((rowA, rowB) => {
      var _a2, _b2;
      const infoA = this.getNestedRowInfo(rowA.id);
      const infoB = this.getNestedRowInfo(rowB.id);
      const result = ((_a2 = infoA.order) != null ? _a2 : 0) - ((_b2 = infoB.order) != null ? _b2 : 0);
      return result === 0 ? rowA.index - rowB.index : result;
    });
    return rows;
  },
  onRenderCell(result, { col, row }) {
    var _a2, _b2, _c;
    const { id: rowID, data: rowData } = row;
    const { nestedToggle } = col.setting;
    const info = this.getNestedRowInfo(rowID);
    if (nestedToggle && (info.children || info.parent)) {
      result.unshift((_b2 = (_a2 = this.options.onRenderNestedToggle) == null ? void 0 : _a2.call(this, info, rowID, col, rowData)) != null ? _b2 : /* @__PURE__ */ h$1("a", {
        role: "button",
        className: `dtable-nested-toggle state${info.children ? "" : " is-no-child"}`
      }, /* @__PURE__ */ h$1("span", {
        className: "toggle-icon"
      })));
    }
    if (info.level) {
      let { nestedIndent = nestedToggle } = col.setting;
      if (nestedIndent) {
        if (nestedIndent === true) {
          nestedIndent = (_c = this.options.nestedIndent) != null ? _c : 12;
        }
        result.unshift(/* @__PURE__ */ h$1("div", {
          className: "dtable-nested-indent",
          style: { width: nestedIndent * info.level + "px" }
        }));
      }
    }
    return result;
  },
  onRenderHeaderCell(result, { row, col }) {
    var _a2, _b2;
    const { id: rowID } = row;
    if (col.setting.nestedToggle) {
      result.unshift((_b2 = (_a2 = this.options.onRenderNestedToggle) == null ? void 0 : _a2.call(this, void 0, rowID, col, void 0)) != null ? _b2 : /* @__PURE__ */ h$1("a", {
        type: "button",
        className: "dtable-nested-toggle state"
      }, /* @__PURE__ */ h$1("span", {
        className: "toggle-icon"
      })));
    }
    return result;
  },
  onRenderRow({ props, row }) {
    const info = this.getNestedRowInfo(row.id);
    return {
      className: classes(props.className, `is-${info.state}`),
      "data-parent": info.parent
    };
  },
  onRenderHeaderRow({ props }) {
    props.className = classes(props.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`);
    return props;
  },
  onHeaderCellClick(event) {
    const target = event.target;
    if (!target) {
      return;
    }
    const toggleElement = target.closest(".dtable-nested-toggle");
    if (!toggleElement) {
      return;
    }
    this.toggleRow("HEADER");
    return true;
  },
  onCellClick(event, { rowID }) {
    const target = event.target;
    if (!target) {
      return;
    }
    const info = this.getNestedRowInfo(rowID);
    if (!info.children) {
      return;
    }
    const toggleElement = target.closest(".dtable-nested-toggle");
    if (!toggleElement) {
      return;
    }
    this.toggleRow(rowID);
    return true;
  }
};
const nested = definePlugin(nestedPlugin);
const style = "";
const richPlugin = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(result) {
        result[0] = {
          html: result[0]
        };
        return result;
      }
    },
    link: {
      onRenderCell(result, { col, row }) {
        const { linkTemplate = "", linkProps } = col.setting;
        const url = formatString(linkTemplate, row.data);
        result[0] = /* @__PURE__ */ h$1("a", {
          href: url,
          ...linkProps
        }, result[0]);
        return result;
      }
    },
    avatar: {
      onRenderCell(result, { col, row }) {
        const { data: rowData } = row;
        const { avatarWithName, avatarClass = "size-xs circle", avatarKey = `${col.name}Avatar` } = col.setting;
        const avatar = /* @__PURE__ */ h$1("div", {
          className: `avatar ${avatarClass} flex-none`
        }, /* @__PURE__ */ h$1("img", {
          src: rowData ? rowData[avatarKey] : ""
        }));
        if (avatarWithName) {
          result.unshift(avatar);
        } else {
          result[0] = avatar;
        }
        return result;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(result, { col }) {
        const { circleSize = 24, circleBorderSize = 1, circleBgColor = "var(--color-border)", circleColor = "var(--color-success-500)" } = col.setting;
        const radius = (circleSize - circleBorderSize) / 2;
        const center = circleSize / 2;
        const percent = result[0];
        result[0] = /* @__PURE__ */ h$1("svg", {
          width: circleSize,
          height: circleSize
        }, /* @__PURE__ */ h$1("circle", {
          cx: center,
          cy: center,
          r: radius,
          "stroke-width": circleBorderSize,
          stroke: circleBgColor,
          fill: "transparent"
        }), /* @__PURE__ */ h$1("circle", {
          cx: center,
          cy: center,
          r: radius,
          "stroke-width": circleBorderSize,
          stroke: circleColor,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * radius * 2,
          "stroke-dashoffset": Math.PI * radius * 2 * (100 - percent) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ h$1("text", {
          x: center,
          y: center + circleBorderSize,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${radius}px` }
        }, Math.round(percent)));
        return result;
      }
    },
    actionButtons: {
      onRenderCell(result, { col, row }) {
        var _a2;
        const actions = (_a2 = row.data) == null ? void 0 : _a2[col.name];
        if (!actions) {
          return result;
        }
        const { actionBtnTemplate = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData = {}, actionBtnClass = "btn text-primary square size-sm ghost" } = col.setting;
        return [{
          html: actions.map((action) => {
            if (typeof action === "string") {
              action = { action };
            }
            const actionData = actionBtnData[action.action];
            if (actionData) {
              action = { className: actionBtnClass, ...actionData, ...action };
            }
            return formatString(actionBtnTemplate, action);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(result, { col }) {
        let { format: formatSetting } = col.setting;
        if (!formatSetting) {
          return result;
        }
        if (typeof formatSetting === "string") {
          formatSetting = { type: "text", format: formatSetting };
        }
        const { format, type } = formatSetting;
        const value = result[0];
        if (typeof format === "function") {
          result[0] = type === "html" ? { html: format(value) } : format(value);
        } else if (type === "datetime") {
          result[0] = formatDate(value, format);
        } else if (type === "html") {
          result[0] = { html: formatString(format, value) };
        } else {
          result[0] = formatString(format, value);
        }
        return result;
      }
    }
  }
};
const rich = definePlugin(richPlugin, { buildIn: true });
const sortTypePlugin = {
  name: "sort-type",
  onRenderHeaderCell(result, { col }) {
    const { sortType: sortTypeSetting } = col.setting;
    const sortTypeName = sortTypeSetting === true ? "none" : sortTypeSetting;
    if (sortTypeSetting) {
      result.push(
        /* @__PURE__ */ h$1("div", {
          className: `dtable-sort dtable-sort-${sortTypeName}`
        })
      );
    }
    result.push({ outer: true, attrs: { "data-type": col.type || null, "data-sort": sortTypeName } });
    return result;
  }
};
const sortType = definePlugin(sortTypePlugin, { buildIn: true });
const plugins = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colHover,
  checkable,
  NestedRowState,
  nested,
  rich,
  sortType
}, Symbol.toStringTag, { value: "Module" }));
class DTable extends ComponentFromReact {
}
__name(DTable, "DTable");
__publicField(DTable, "NAME", "dtable");
__publicField(DTable, "Component", DTable$1);
__publicField(DTable, "definePlugin", definePlugin);
__publicField(DTable, "removePlugin", removePlugin);
__publicField(DTable, "plugins", plugins);
const navTabs = "";
class NavTabs {
  constructor(element) {
    __privateAdd(this, _nav, void 0);
    __privateAdd(this, _navTarget, void 0);
    __privateSet(this, _nav, element);
    __privateSet(this, _navTarget, document.querySelector(element.getAttribute("data-target")) || document.querySelector(element.getAttribute("data-tab")) || document.querySelector(element.getAttribute("href")));
  }
  showTarget() {
    this.addActive(__privateGet(this, _nav).parentElement.parentElement, __privateGet(this, _nav).parentElement);
    this.addActive(__privateGet(this, _navTarget).parentElement, __privateGet(this, _navTarget));
    __privateGet(this, _navTarget).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    __privateSet(this, _navTarget, __privateGet(this, _nav));
    this.addActive(__privateGet(this, _navTarget).parentElement, __privateGet(this, _navTarget));
    __privateSet(this, _nav, document.querySelector(`[href='#${__privateGet(this, _navTarget).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${__privateGet(this, _navTarget).getAttribute("id")}']`) || document.querySelector(`[data-target='#${__privateGet(this, _navTarget).getAttribute("id")}']`));
    this.addActive(__privateGet(this, _nav).parentElement.parentElement, __privateGet(this, _nav).parentElement);
  }
  addActive(clickPane, target) {
    const children = clickPane.children;
    const childrenArr = Array.from(children);
    childrenArr.forEach((item) => {
      item.classList.remove("active");
      if (item.classList.contains("fade")) {
        item.classList.remove("in");
      }
    });
    target.classList.add("active");
    if (target.classList.contains("fade")) {
      this.transition(target).then(function() {
        target.dispatchEvent(new CustomEvent("shown.zui3.tab"));
      });
    }
  }
  transition(target) {
    return new Promise(function(resolve) {
      setTimeout(() => {
        target.classList.add("in");
        resolve();
      }, 100);
    });
  }
}
__name(NavTabs, "NavTabs");
_nav = new WeakMap();
_navTarget = new WeakMap();
document.addEventListener("click", function(e2) {
  if (e2.target instanceof HTMLElement) {
    if (e2.target.dataset.toggle === "tab" || e2.target.getAttribute("data-tab")) {
      e2.preventDefault();
      new NavTabs(e2.target).showTarget();
    }
  }
});
const index$a = "";
const vars = "";
const index$9 = "";
const index$8 = "";
const index$7 = "";
const index$6 = "";
const index$5 = "";
const index$4 = "";
const index$3 = "";
const index$2 = "";
const index$1 = "";
const index = "";
export {
  ActionMenu,
  ActionMenuNested,
  ContextMenu,
  DTable,
  Dropdown,
  EventBus,
  Menu,
  NavTabs,
  Pager,
  TIME_DAY,
  addI18nMap,
  main$1 as browser,
  calculateTimestamp,
  convertBytes,
  createDate,
  formatBytes,
  formatDate,
  formatDateSpan,
  formatString,
  getLangCode,
  getTimeBeforeDesc,
  i18n,
  isDBY,
  isObject,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isSameYear,
  isToday,
  isTomorrow,
  isYesterday,
  mergeDeep,
  nativeEvents,
  setLangCode,
  store
};
