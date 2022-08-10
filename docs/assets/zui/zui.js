var ne = Object.defineProperty;
var oe = (s, e, t) => e in s ? ne(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => (oe(s, typeof e != "symbol" ? e + "" : e, t), t), _t = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var M = (s, e, t) => (_t(s, e, "read from private field"), t ? t.call(s) : e.get(s)), z = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, O = (s, e, t, n) => (_t(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var st = (s, e, t) => (_t(s, e, "access private method"), t);
const ie = (s) => {
  const e = {};
  if (!s)
    return e;
  const t = Object.values(s.attributes);
  return t && t.length > 0 && t.forEach((n) => {
    const { name: r, value: o } = n;
    e[r] = o;
  }), e;
};
class re extends HTMLElement {
  constructor() {
    super();
    w(this, "$button");
    w(this, "$icon");
    w(this, "onClick");
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
    const t = ie(this);
    if (t)
      for (const n in t)
        ["type", "size", "rounded", "outline"].includes(n) && this.addClass(this.$button, `-${t[n]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(t, n) {
    t && t.classList.add(n);
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
  attributeChangedCallback(t, n) {
    t === "isDisabled" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "loading" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), t === "icon" && this.$icon && n && this.addClass(this.$icon, `-${n}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", re);
var Y, Q;
class Ct {
  constructor(e) {
    z(this, Y, void 0);
    z(this, Q, void 0);
    var t;
    O(this, Y, e), O(this, Q, e.nextElementSibling), ((t = M(this, Y).dataset) == null ? void 0 : t.toggle) === "dropdown" && !M(this, Y).parentElement.className.includes("dropdown-hover") && this.toggle(M(this, Y).parentElement, M(this, Q));
  }
  toggle(e, t) {
    e.className.includes("open") ? (this.hideMenu(t), e.className = e.className.replace(" open", "")) : (this.showMenu(t), e.className = e.className + " open");
  }
  showMenu(e) {
    this.clearMenu(), e.classList.add("block");
  }
  hideMenu(e) {
    e.classList.add("hidden");
  }
  clearMenu() {
    document.querySelectorAll(".dropdown-menu").forEach((t) => {
      t.classList.add("hidden"), t.parentElement && (t.parentElement.className = t.parentElement.className.replace(" open", ""));
    });
  }
}
Y = new WeakMap(), Q = new WeakMap();
document.onclick = function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Ct(s.target) : new Ct(s).clearMenu());
};
class Nt {
  constructor(e, t) {
    w(this, "$modal");
    w(this, "options");
    w(this, "reposTask", null);
    this.$modal = e, this.$modal && (this.options = t, t.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), t.type === "show" && t.position && this.adjustPosition(t.position, null), this.$modal.onclick = (n) => this.onClick(n), window.addEventListener("resize", () => {
      t.type === "show" && t.position && this.adjustPosition(t.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(e) {
    var t, n;
    (((t = e.target.dataset) == null ? void 0 : t.dismiss) === "modal" || ((n = e.target.parentElement.dataset) == null ? void 0 : n.dismiss) === "modal") && (this.onHide(this.$modal), e.stopPropagation());
  }
  lockScroll() {
    document.body.style.overflow = "hidden";
  }
  unlockScroll() {
    document.body.style.overflow = "";
  }
  onShow(e) {
    this.lockScroll(), e.classList.add("block");
  }
  onHide(e) {
    e && e.classList && (this.unlockScroll(), e.classList.remove("block"));
  }
  onClear(e) {
    document.querySelectorAll(".modal").forEach((n) => {
      (n.dataset.modalClosable !== "false" || e === "destory") && n.classList.remove("block");
    });
  }
  adjustPosition(e, t) {
    var a;
    if (clearTimeout(this.reposTask), t) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, e, 0), t);
      return;
    }
    if (e === void 0 && (e = this.options.position), e == null)
      return;
    const n = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!n)
      return;
    const r = window.innerHeight, o = Math.max(0, (r - n.clientHeight) / 2);
    let l = null;
    if (e === "fit" ? l = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : e === "center" ? l = `${o}px` : this.isPlainObject(e) || (l = e), n.setAttribute("style", `top: ${l}`), n.className.includes("-fullscreen")) {
      let c = null;
      if (((a = n.childNodes) == null ? void 0 : a.length) && n.childNodes.length === 1 ? c = n.childNodes[0] : c = n.childNodes[1], c) {
        const _ = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, i = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], p = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, d = r - _ - p, h = i && i.scrollHeight > d ? "auto" : "visible";
        i && i.setAttribute("style", `max-height:${d}px;overflow:${h}`);
      }
    }
  }
  isPlainObject(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
}
document.addEventListener("click", (s) => {
  var e, t, n;
  if (s !== null && s.target instanceof HTMLElement)
    if (((e = s.target.dataset) == null ? void 0 : e.toggle) === "modal") {
      let r = s.target.dataset.target;
      if (s.target.localName === "a") {
        const a = ((t = s.target) == null ? void 0 : t.href) || "";
        r = a && a.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!r.length)
        return;
      const o = document.querySelector(r), l = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new Nt(o, l);
    } else
      s.target.parentElement.className.includes("modal") || new Nt(s, { type: "hide" }).onClear();
});
function Se(s) {
  const e = typeof s == "string" ? document.querySelector(s) : s;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const n = document.createRange();
      return n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n), !0;
    }
  }
  return !1;
}
function ke(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const R = (...s) => s.map((e) => Array.isArray(e) ? R(...e) : typeof e == "function" ? R(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const n = e[t];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" "), N = 24 * 60 * 60 * 1e3, x = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), et = (s, e = new Date()) => (s = x(s), e = x(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()), Tt = (s, e = new Date()) => x(s).getFullYear() === x(e).getFullYear(), le = (s, e = new Date()) => (s = x(s), e = x(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), Me = (s, e = new Date()) => {
  s = x(s), e = x(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), r = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((r + 4) / 7);
}, $e = (s, e) => et(x(e), s), xe = (s, e) => et(x(e).getTime() - N, s), He = (s, e) => et(x(e).getTime() + N, s), Ee = (s, e) => et(x(e).getTime() - 2 * N, s), Dt = (s, e = "yyyy-MM-dd hh:mm") => {
  s = x(s);
  const t = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((n) => {
    if (new RegExp(`(${n})`).test(e)) {
      const r = `${t[n]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Le = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, r = Dt(s, Tt(s) ? n.month : n.full);
  if (et(s, e))
    return r;
  const o = Dt(e, Tt(s, e) ? le(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", r).replace("{1}", o);
}, Ae = (s) => {
  const e = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return e - N * 7;
    case "oneMonth":
      return e - N * 31;
    case "threeMonth":
      return e - N * 31 * 3;
    case "halfYear":
      return e - N * 183;
    case "oneYear":
      return e - N * 365;
    case "twoYear":
      return e - 2 * (N * 365);
    default:
      return 0;
  }
}, zt = (s, e, t = !0, n = Date.now()) => {
  switch (e) {
    case "year":
      return s *= 365, zt(s, "day", t, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, zt(s, "day", t, n);
    case "week":
      s *= 7;
    case "day":
      s *= 24;
    case "hour":
      s *= 60;
    case "minute":
      s *= 6e4;
      break;
    default:
      s = 0;
  }
  return t ? n + s : n - s;
};
var ct, v, Ft, K, Wt, it = {}, Ot = [], ae = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function P(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function Yt(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function y(s, e, t) {
  var n, r, o, l = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? r = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ct.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      l[o] === void 0 && (l[o] = s.defaultProps[o]);
  return nt(s, l, n, r, null);
}
function nt(s, e, t, n, r) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Ft : r };
  return r == null && v.vnode != null && v.vnode(o), o;
}
function Bt() {
  return { current: null };
}
function ht(s) {
  return s.children;
}
function B(s, e) {
  this.props = s, this.context = e;
}
function X(s, e) {
  if (e == null)
    return s.__ ? X(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? X(s) : null;
}
function qt(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return qt(s);
  }
}
function Pt(s) {
  (!s.__d && (s.__d = !0) && K.push(s) && !rt.__r++ || Wt !== v.debounceRendering) && ((Wt = v.debounceRendering) || setTimeout)(rt);
}
function rt() {
  for (var s; rt.__r = K.length; )
    s = K.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), K = [], s.some(function(e) {
      var t, n, r, o, l, a;
      e.__d && (l = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = P({}, o)).__v = o.__v + 1, gt(a, o, r, t.__n, a.ownerSVGElement !== void 0, o.__h != null ? [l] : null, n, l == null ? X(o) : l, o.__h), Vt(n, o), o.__e != l && qt(o)));
    });
}
function Gt(s, e, t, n, r, o, l, a, c, _) {
  var i, p, d, h, u, m, g, b = n && n.__k || Ot, S = b.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((h = t.__k[i] = (h = e[i]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? nt(null, h, null, null, h) : Array.isArray(h) ? nt(ht, { children: h }, null, null, null) : h.__b > 0 ? nt(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = t, h.__b = t.__b + 1, (d = b[i]) === null || d && h.key == d.key && h.type === d.type)
        b[i] = void 0;
      else
        for (p = 0; p < S; p++) {
          if ((d = b[p]) && h.key == d.key && h.type === d.type) {
            b[p] = void 0;
            break;
          }
          d = null;
        }
      gt(s, h, d = d || it, r, o, l, a, c, _), u = h.__e, (p = h.ref) && d.ref != p && (g || (g = []), d.ref && g.push(d.ref, null, h), g.push(p, h.__c || u, h)), u != null ? (m == null && (m = u), typeof h.type == "function" && h.__k === d.__k ? h.__d = c = Xt(h, c, s) : c = Jt(s, h, d, b, u, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != s && (c = X(d));
    }
  for (t.__e = m, i = S; i--; )
    b[i] != null && (typeof t.type == "function" && b[i].__e != null && b[i].__e == t.__d && (t.__d = X(n, i + 1)), Kt(b[i], b[i]));
  if (g)
    for (i = 0; i < g.length; i++)
      Zt(g[i], g[++i], g[++i]);
}
function Xt(s, e, t) {
  for (var n, r = s.__k, o = 0; r && o < r.length; o++)
    (n = r[o]) && (n.__ = s, e = typeof n.type == "function" ? Xt(n, e, t) : Jt(t, n, n, r, n.__e, e));
  return e;
}
function Jt(s, e, t, n, r, o) {
  var l, a, c;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (t == null || r != o || r.parentNode == null)
    t:
      if (o == null || o.parentNode !== s)
        s.appendChild(r), l = null;
      else {
        for (a = o, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
          if (a == r)
            break t;
        s.insertBefore(r, o), l = o;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function ce(s, e, t, n, r) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || lt(s, o, null, t[o], n);
  for (o in e)
    r && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || lt(s, o, e[o], t[o], n);
}
function Rt(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t) : s[e] = t == null ? "" : typeof t != "number" || ae.test(e) ? t : t + "px";
}
function lt(s, e, t, n, r) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || Rt(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || Rt(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? Ut : It, o) : s.removeEventListener(e, o ? Ut : It, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (r)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in s)
        try {
          s[e] = t == null ? "" : t;
          break t;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? s.setAttribute(e, t) : s.removeAttribute(e));
    }
}
function It(s) {
  this.l[s.type + !1](v.event ? v.event(s) : s);
}
function Ut(s) {
  this.l[s.type + !0](v.event ? v.event(s) : s);
}
function gt(s, e, t, n, r, o, l, a, c) {
  var _, i, p, d, h, u, m, g, b, S, T, D, E, k = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (_ = v.__b) && _(e);
  try {
    t:
      if (typeof k == "function") {
        if (g = e.props, b = (_ = k.contextType) && n[_.__c], S = _ ? b ? b.props.value : _.__ : n, t.__c ? m = (i = e.__c = t.__c).__ = i.__E : ("prototype" in k && k.prototype.render ? e.__c = i = new k(g, S) : (e.__c = i = new B(g, S), i.constructor = k, i.render = de), b && b.sub(i), i.props = g, i.state || (i.state = {}), i.context = S, i.__n = n, p = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), k.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = P({}, i.__s)), P(i.__s, k.getDerivedStateFromProps(g, i.__s))), d = i.props, h = i.state, p)
          k.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (k.getDerivedStateFromProps == null && g !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(g, S), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(g, i.__s, S) === !1 || e.__v === t.__v) {
            i.props = g, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(H) {
              H && (H.__ = e);
            }), i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(g, i.__s, S), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, h, u);
          });
        }
        if (i.context = S, i.props = g, i.__v = e, i.__P = s, T = v.__r, D = 0, "prototype" in k && k.prototype.render)
          i.state = i.__s, i.__d = !1, T && T(e), _ = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, T && T(e), _ = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++D < 25);
        i.state = i.__s, i.getChildContext != null && (n = P(P({}, n), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(d, h)), E = _ != null && _.type === ht && _.key == null ? _.props.children : _, Gt(s, Array.isArray(E) ? E : [E], e, t, n, r, o, l, a, c), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), m && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = he(t.__e, e, t, n, r, o, l, c);
    (_ = v.diffed) && _(e);
  } catch (H) {
    e.__v = null, (c || o != null) && (e.__e = a, e.__h = !!c, o[o.indexOf(a)] = null), v.__e(H, e, t);
  }
}
function Vt(s, e) {
  v.__c && v.__c(e, s), s.some(function(t) {
    try {
      s = t.__h, t.__h = [], s.some(function(n) {
        n.call(t);
      });
    } catch (n) {
      v.__e(n, t.__v);
    }
  });
}
function he(s, e, t, n, r, o, l, a) {
  var c, _, i, p = t.props, d = e.props, h = e.type, u = 0;
  if (h === "svg" && (r = !0), o != null) {
    for (; u < o.length; u++)
      if ((c = o[u]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
        s = c, o[u] = null;
        break;
      }
  }
  if (s == null) {
    if (h === null)
      return document.createTextNode(d);
    s = r ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), o = null, a = !1;
  }
  if (h === null)
    p === d || a && s.data === d || (s.data = d);
  else {
    if (o = o && ct.call(s.childNodes), _ = (p = t.props || it).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, u = 0; u < s.attributes.length; u++)
          p[s.attributes[u].name] = s.attributes[u].value;
      (i || _) && (i && (_ && i.__html == _.__html || i.__html === s.innerHTML) || (s.innerHTML = i && i.__html || ""));
    }
    if (ce(s, d, p, r, a), i)
      e.__k = [];
    else if (u = e.props.children, Gt(s, Array.isArray(u) ? u : [u], e, t, n, r && h !== "foreignObject", o, l, o ? o[0] : t.__k && X(t, 0), a), o != null)
      for (u = o.length; u--; )
        o[u] != null && Yt(o[u]);
    a || ("value" in d && (u = d.value) !== void 0 && (u !== s.value || h === "progress" && !u || h === "option" && u !== p.value) && lt(s, "value", u, p.value, !1), "checked" in d && (u = d.checked) !== void 0 && u !== s.checked && lt(s, "checked", u, p.checked, !1));
  }
  return s;
}
function Zt(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    v.__e(n, t);
  }
}
function Kt(s, e, t) {
  var n, r;
  if (v.unmount && v.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Zt(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        v.__e(o, e);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (r = 0; r < n.length; r++)
      n[r] && Kt(n[r], e, typeof s.type != "function");
  t || s.__e == null || Yt(s.__e), s.__e = s.__d = void 0;
}
function de(s, e, t) {
  return this.constructor(s, t);
}
function ue(s, e, t) {
  var n, r, o;
  v.__ && v.__(s, e), r = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], gt(e, s = (!n && t || e).__k = y(ht, null, [s]), r || it, it, e.ownerSVGElement !== void 0, !n && t ? [t] : r ? null : e.firstChild ? ct.call(e.childNodes) : null, o, !n && t ? t : r ? r.__e : e.firstChild, n), Vt(o, s);
}
ct = Ot.slice, v = { __e: function(s, e, t, n) {
  for (var r, o, l; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(s)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(s, n || {}), l = r.__d), l)
          return r.__E = r;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ft = 0, B.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = P({}, this.state), typeof s == "function" && (s = s(P({}, t), this.props)), s && P(t, s), s != null && this.__v && (e && this.__h.push(e), Pt(this));
}, B.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Pt(this));
}, B.prototype.render = ht, K = [], rt.__r = 0;
class jt extends B {
  constructor(t) {
    var n;
    super(t);
    w(this, "_rafId", 0);
    w(this, "_handleWheel", (t) => {
      var r, o, l;
      !((o = t.target) != null && o.closest((r = this.props.wheelContainer) != null ? r : ".-scrollbar-container")) || (t.preventDefault(), this.scrollOffset((this.props.type === "horz" ? t.deltaX : t.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    w(this, "_handleMouseMove", (t) => {
      const { dragStart: n } = this.state;
      n && (this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? t.clientX - n.x : t.clientY - n.y;
        this.scroll(n.offset + r * this.props.scrollSize / this.props.clientSize), this._rafId = 0;
      }), t.preventDefault());
    });
    w(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    w(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.state.scrollPos } }), t.stopPropagation();
    });
    w(this, "_handleClick", (t) => {
      const n = t.currentTarget;
      if (!n)
        return;
      const r = n.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: a } = this.props, c = (o === "horz" ? t.clientX - r.left : t.clientY - r.top) - this.barSize / 2;
      this.scroll(c * a / l);
    });
    this.state = {
      scrollPos: (n = this.props.defaultScrollPos) != null ? n : 0,
      dragStart: !1
    };
  }
  get maxScrollPos() {
    const { scrollSize: t, clientSize: n } = this.props;
    return Math.max(0, t - n);
  }
  get barSize() {
    const { clientSize: t, scrollSize: n, size: r = 10 } = this.props;
    return Math.max(Math.round(t * t / n), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && document.addEventListener("wheel", this._handleWheel, { passive: !1 });
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this.props.wheelContainer && document.removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t !== this.state.scrollPos && this.setState({
      scrollPos: t
    }, () => {
      var r;
      const { onScroll: n } = this.props;
      n && n(t, (r = this.props.type) != null ? r : "vert");
    });
  }
  scrollOffset(t) {
    this.scroll(this.state.scrollPos + t);
  }
  render() {
    const {
      scrollSize: t,
      clientSize: n,
      type: r,
      size: o = 10,
      className: l,
      style: a,
      left: c,
      top: _,
      bottom: i,
      right: p
    } = this.props, { maxScrollPos: d } = this, { dragStart: h, scrollPos: u } = this.state, m = {
      left: c,
      top: _,
      bottom: i,
      right: p,
      ...a
    }, g = {};
    return r === "horz" ? (m.height = o, m.width = n, g.width = Math.max(Math.round(n * n / t), o), g.left = Math.round(u * (n - g.width) / d)) : (m.width = o, m.height = n, g.height = this.barSize, g.top = Math.round(u * (n - g.height) / d)), /* @__PURE__ */ y("div", {
      className: R("scrollbar", l, {
        "-vert": r === "vert",
        "-horz": r === "horz",
        "-dragging": h
      }),
      style: m,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ y("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
function mt({ col: s, className: e, height: t, style: n, children: r, html: o, ...l }) {
  const a = {
    left: s.left,
    width: s.realWidth,
    height: t,
    ...n,
    ...s.cellStyle
  };
  return s.align && (a.textAlign = s.align), /* @__PURE__ */ y("div", {
    className: R("dtable-cell", s.className, e),
    style: a,
    ...l,
    "data-col": s.name,
    dangerouslySetInnerHTML: o
  }, r);
}
function fe({ className: s, style: e, col: t, height: n, children: r }) {
  let { sortType: o } = t;
  return o === !0 && (o = "none"), /* @__PURE__ */ y(mt, {
    className: s,
    height: n,
    style: e,
    col: t,
    "data-sort": o || null,
    "data-type": t.type
  }, t.title, o && /* @__PURE__ */ y("div", {
    className: `dtable-sort -sort-${o}`
  }), r);
}
function _e(s) {
  const e = {};
  if (typeof s == "object" && s && ("html" in s || "children" in s)) {
    const { html: t, children: n, style: r, className: o } = s;
    t ? e.html = { __html: t } : n && (e.children = n), e.style = r, e.className = o;
  } else
    e.children = s;
  return e;
}
function pt({ rowID: s, className: e, top: t = 0, left: n = 0, width: r, height: o, cols: l, data: a, CellComponent: c = mt, onRenderCell: _ }) {
  return /* @__PURE__ */ y("div", {
    className: R("dtable-cells", e),
    style: { top: t, left: n, width: r, height: o }
  }, l.map((i) => {
    if (!i.visible)
      return null;
    let p = null;
    _ ? p = _(s, i, a) : i.onRenderCell ? p = i.onRenderCell(s, i, a) : a && (p = a[i.name]);
    const { children: d, html: h, className: u, style: m } = _e(p);
    return /* @__PURE__ */ y(c, {
      key: i.name,
      col: i,
      className: u,
      style: m,
      html: h
    }, d);
  }));
}
function Qt({
  rowID: s,
  className: e,
  top: t,
  height: n,
  fixedLeftCols: r,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: _,
  flexRightWidth: i,
  scrollLeft: p,
  CellComponent: d = mt,
  onRenderCell: h,
  data: u
}) {
  let m = null;
  r != null && r.length && (m = /* @__PURE__ */ y(pt, {
    className: "-fixed-left",
    cols: r,
    width: a,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: u
  }));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ y(pt, {
    className: "-flexable",
    cols: l,
    left: a - p,
    width: _,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: u
  }));
  let b = null;
  o != null && o.length && (b = /* @__PURE__ */ y(pt, {
    className: "-fixed-right",
    cols: o,
    left: a + c,
    width: i,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: u
  }));
  const S = { top: t, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ y("div", {
    className: R("dtable-row", e),
    style: S,
    "data-id": s
  }, m, g, b);
}
function pe({
  height: s,
  fixedLeftCols: e,
  fixedRightCols: t,
  scrollCols: n,
  flexLeftWidth: r,
  scrollWidth: o,
  flexRightWidth: l,
  scrollWidthTotal: a,
  scrollLeft: c,
  onRenderCell: _
}) {
  return /* @__PURE__ */ y("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ y(Qt, {
    rowID: "HEADER",
    className: "-in-header",
    top: 0,
    height: s,
    fixedLeftCols: e,
    fixedRightCols: t,
    scrollCols: n,
    flexLeftWidth: r,
    scrollWidth: o,
    scrollWidthTotal: a,
    flexRightWidth: l,
    scrollLeft: c,
    CellComponent: fe,
    onRenderCell: _
  }));
}
function ge({
  className: s,
  style: e,
  top: t,
  rows: n,
  height: r,
  rowHeight: o,
  fixedLeftCols: l,
  fixedRightCols: a,
  scrollCols: c,
  flexLeftWidth: _,
  scrollWidth: i,
  scrollWidthTotal: p,
  flexRightWidth: d,
  scrollLeft: h,
  onRenderCell: u
}) {
  return e = { ...e, top: t, height: r }, /* @__PURE__ */ y("div", {
    className: R("dtable-rows", s),
    style: e
  }, n.map((m) => /* @__PURE__ */ y(Qt, {
    rowID: m.data.id,
    top: m.top,
    height: o,
    fixedLeftCols: l,
    fixedRightCols: a,
    scrollCols: c,
    flexLeftWidth: _,
    scrollWidth: i,
    scrollWidthTotal: p,
    flexRightWidth: d,
    scrollLeft: h,
    data: m.data,
    onRenderCell: u
  })));
}
class me extends B {
  constructor() {
    super(...arguments);
    w(this, "state", { scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {} });
    w(this, "ref", Bt());
    w(this, "_needUpdateSize", !1);
    w(this, "_handleScroll", (t, n) => {
      n === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, "_handleClick", (t) => {
      var _, i, p, d, h, u, m, g, b;
      const n = t.target;
      if (!n)
        return;
      const r = n.closest(".dtable-cell"), o = n.closest(".dtable-row"), l = (_ = r == null ? void 0 : r.getAttribute("data-col")) != null ? _ : "", a = (i = o == null ? void 0 : o.getAttribute("data-id")) != null ? i : "", c = (p = this.props.data) == null ? void 0 : p.find((S) => S.id === a);
      if (r) {
        if (a === "HEADER")
          (h = (d = this.props).onHeaderCellClick) == null || h.call(d, t, { colName: l });
        else if (((m = (u = this.props).onCellClick) == null ? void 0 : m.call(u, t, { colName: l, rowID: a, rowData: c })) === !0)
          return;
      }
      (b = (g = this.props).onRowClick) == null || b.call(g, t, { rowID: a, rowData: c });
    });
  }
  componentDidMount() {
    var t, n, r;
    this._needUpdateSize ? this.forceUpdate() : (n = (t = this.props).afterRender) == null || n.call(t, this.props, this.state), (r = this.ref.current) == null || r.addEventListener("click", this._handleClick);
  }
  componentDidUpdate() {
    var t, n;
    this._needUpdateSize = !1, (n = (t = this.props).afterRender) == null || n.call(t, this.props, this.state);
  }
  componentWillUnmount() {
    var t;
    (t = this.ref.current) == null || t.removeEventListener("click", this._handleClick);
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var n, r;
      (r = (n = this.props).onScroll) == null || r.call(n, this.state.scrollLeft, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var n, r;
      (r = (n = this.props).onScroll) == null || r.call(n, this.state.scrollLeft, "vert");
    });
  }
  getLayout() {
    var xt, Ht, Et;
    const t = { ...te(), ...this.props }, {
      data: n,
      header: r,
      footer: o,
      rowHeight: l,
      defaultColWidth: a,
      minColWidth: c,
      maxColWidth: _,
      rowDataMap: i
    } = t, { scrollTop: p = 0, scrollLeft: d = 0, hiddenRows: h = {}, hiddenCols: u = {} } = this.state, m = r ? t.headerHeight || l : 0, g = o ? t.footerHeight || l : 0, b = (f, $, C) => (f && ($ && (f = Math.max($, f)), C && (f = Math.min(C, f))), f), S = [], T = [], D = [];
    let E = 0, k = 0;
    t.cols.forEach((f) => {
      var Lt, At;
      if (f.hidden || u[f.name])
        return;
      const { minWidth: $ = c, maxWidth: C = _ } = f, V = b((Lt = f.width) != null ? Lt : 0, $, C), Z = (At = f.flex) != null ? At : 1, se = Z * b(a, $, C), F = {
        ...f,
        left: 0,
        flex: Z,
        realWidth: V,
        flexWidth: se,
        visible: !0
      };
      F.fixed === "left" ? (F.left = E, E += V, S.push(F)) : F.fixed === "right" ? (F.left = k, k += V, T.push(F)) : D.push(F);
    });
    let H = t.width, I = 0;
    if (typeof H == "function" && (H = H()), H === "auto")
      I = E + k, D.forEach((f) => {
        f.realWidth || (f.realWidth = f.flexWidth), I += f.realWidth;
      });
    else if (H === "100%") {
      const f = (xt = this.ref.current) == null ? void 0 : xt.parentElement;
      if (f)
        I = f.clientWidth;
      else {
        I = 0, this._needUpdateSize = !0;
        return;
      }
    } else
      I = H;
    let J = 0;
    const ee = (Ht = i == null ? void 0 : i.$hidden) != null ? Ht : "$hidden", yt = n.reduce((f, $) => (!$[ee] && !h[$.id] && (f.push({ data: $, top: J }), J += l), f), []);
    let A = t.height, U = 0;
    if (typeof A == "function" && (A = A()), A === "auto")
      U = m + g + J;
    else if (typeof A == "object")
      U = Math.min(A.max, Math.max(A.min, m + g + J));
    else if (A === "100%") {
      const f = (Et = this.ref.current) == null ? void 0 : Et.parentElement;
      if (f)
        U = f.clientHeight;
      else {
        U = 0, this._needUpdateSize = !0;
        return;
      }
    } else
      U = A;
    const vt = U - m - g, wt = p + vt, St = [], dt = I - E - k;
    let j = 0;
    const ut = [];
    let kt = 0;
    if (D.forEach((f) => {
      f.realWidth ? j += f.realWidth : (ut.push(f), kt += f.flex);
    }), ut.length) {
      const f = Math.max(0, dt - j);
      ut.forEach(($) => {
        var Z;
        const { minWidth: C = c, maxWidth: V = _ } = $;
        $.realWidth = Math.min(V, Math.max(C, Math.ceil(f * ((Z = $.flex) != null ? Z : 1) / kt))), j += $.realWidth;
      });
    }
    j = 0, D.forEach((f) => {
      f.left += j, j += f.realWidth, (f.left + f.realWidth < d || f.left > d + dt) && (f.visible = !1);
    });
    const Mt = Math.floor(p / l), $t = Math.min(yt.length, Math.ceil(wt / l));
    for (let f = Mt; f < $t; f++) {
      const $ = n[f], C = f * l;
      St.push({ top: C - p, data: $ });
    }
    let ft = {
      width: I,
      height: U,
      rows: yt,
      visibleRows: St,
      rowHeight: l,
      rowsHeight: vt,
      rowsHeightTotal: J,
      header: r,
      footer: o,
      headerHeight: m,
      footerHeight: g,
      colsInfo: {
        fixedLeftCols: S,
        fixedRightCols: T,
        scrollCols: D,
        flexLeftWidth: E,
        scrollWidth: dt,
        scrollWidthTotal: j,
        flexRightWidth: k
      },
      scrollBottom: wt,
      scrollTop: p,
      scrollLeft: d,
      startRowIndex: Mt,
      endRowIndex: $t
    };
    if (this.props.onLayout) {
      const f = this.props.onLayout(ft, t, this.state);
      f && (ft = f);
    }
    return ft;
  }
  renderHeader(t) {
    const { header: n, colsInfo: r, headerHeight: o } = t;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ y(pe, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this.props.onRenderCell,
        ...r
      });
    let l, a;
    if (typeof n == "function") {
      const c = n(t, this.props, this.state);
      typeof c == "object" && c && "__html" in c ? a = c : l = c;
    } else
      l = n;
    return /* @__PURE__ */ y("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: a
    }, l);
  }
  renderRows(t) {
    const { headerHeight: n, rowsHeight: r, visibleRows: o, rowHeight: l, colsInfo: a } = t;
    return /* @__PURE__ */ y(ge, {
      top: n,
      height: r,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this.props.onRenderCell,
      ...a
    });
  }
  renderFooter(t) {
    const { footer: n, footerHeight: r } = t;
    if (!n)
      return null;
    let o, l;
    if (typeof n == "function") {
      const a = n(t, this.props, this.state);
      typeof a == "object" && a && "__html" in a ? l = a : o = a;
    } else
      o = n;
    return /* @__PURE__ */ y("div", {
      className: "dtable-footer",
      style: { height: r },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(t) {
    const n = [], { scrollLeft: r, colsInfo: o, scrollTop: l, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: _, scrollWidth: i } = o, { scrollbarSize: p = 10, horzScrollbarPos: d } = this.props;
    return _ > i && n.push(/* @__PURE__ */ y(jt, {
      key: "horz",
      type: "horz",
      defaultScrollPos: r,
      scrollSize: _,
      clientSize: i,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: d === "inside" ? 0 : -p,
      size: p,
      wheelContainer: ".dtable"
    })), c > a && n.push(/* @__PURE__ */ y(jt, {
      key: "vert",
      type: "vert",
      defaultScrollPos: l,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: p,
      top: t.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  render() {
    const t = this.getLayout(), { className: n, rowHover: r, colHover: o, cellHover: l, bordered: a, striped: c, scrollbarHover: _ } = this.props, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ y("div", {
      className: R("dtable", n, {
        "-hover-row": r,
        "-hover-col": o,
        "-hover-cell": l,
        "-bordered": a,
        "-striped": c,
        "-scrollbar-hover": _
      }),
      style: i,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
function te() {
  return {
    cols: [],
    data: [],
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 1e3,
    header: !0,
    footer: !1,
    headerHeight: 0,
    footerHeight: 0,
    scrollbarWidth: 10,
    rowHover: !0,
    colHover: !0,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    scrollbarSize: 10,
    horzScrollbarPos: "outside"
  };
}
class Ce {
  constructor(e, t) {
    w(this, "element");
    w(this, "options");
    w(this, "ref", Bt());
    this.element = e, this.options = { ...te(), ...t }, this.options.cols.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), ue(/* @__PURE__ */ y(me, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
let be = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var tt, W, L, q, G, ot;
const bt = class {
  constructor(e, t = "local") {
    z(this, G);
    z(this, tt, void 0);
    z(this, W, void 0);
    z(this, L, void 0);
    z(this, q, void 0);
    O(this, tt, t), O(this, W, `ZUI_STORE:${e != null ? e : be()}`), O(this, L, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return M(this, tt);
  }
  get session() {
    return this.type === "session" ? this : (M(this, q) || O(this, q, new bt(M(this, W), "session")), M(this, q));
  }
  get(e, t) {
    const n = M(this, L).getItem(st(this, G, ot).call(this, e));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    M(this, L).setItem(st(this, G, ot).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    M(this, L).removeItem(st(this, G, ot).call(this, e));
  }
  each(e) {
    for (let t = 0; t < M(this, L).length; t++) {
      const n = M(this, L).key(t);
      if (n != null && n.startsWith(M(this, W))) {
        const r = M(this, L).getItem(n);
        typeof r == "string" && e(n.substring(M(this, W).length + 1), JSON.parse(r));
      }
    }
  }
  getAll() {
    const e = {};
    return this.each((t, n) => {
      e[t] = n;
    }), e;
  }
};
let at = bt;
tt = new WeakMap(), W = new WeakMap(), L = new WeakMap(), q = new WeakMap(), G = new WeakSet(), ot = function(e) {
  return `${M(this, W)}:${e}`;
};
const ye = new at("DEFAULT");
function ve(s, e = "local") {
  return new at(s, e);
}
Object.assign(ye, { create: ve });
export {
  Ce as DTablePlugin,
  N as TIME_DAY,
  zt as calculateTimestamp,
  R as classes,
  x as createDate,
  ke as domReady,
  Dt as formatDate,
  Le as formatDateSpan,
  Ae as getTimeBeforeDesc,
  Ee as isDBY,
  et as isSameDay,
  le as isSameMonth,
  Me as isSameWeek,
  Tt as isSameYear,
  $e as isToday,
  He as isTomorrow,
  xe as isYesterday,
  Se as selectText,
  ye as store
};
