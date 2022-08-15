var $t = Object.defineProperty;
var Et = (s, t, e) => t in s ? $t(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var v = (s, t, e) => (Et(s, typeof t != "symbol" ? t + "" : t, e), e), $e = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var _ = (s, t, e) => ($e(s, t, "read from private field"), e ? e.call(s) : t.get(s)), H = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, $ = (s, t, e, n) => ($e(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var ue = (s, t, e) => ($e(s, t, "access private method"), e);
const xt = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: o, value: i } = n;
    t[o] = i;
  }), t;
};
class Ht extends HTMLElement {
  constructor() {
    super();
    v(this, "$button");
    v(this, "$icon");
    v(this, "onClick");
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
    const e = xt(this);
    if (e)
      for (const n in e)
        ["type", "size", "rounded", "outline"].includes(n) && this.addClass(this.$button, `-${e[n]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, n) {
    e && e.classList.add(n);
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
  attributeChangedCallback(e, n) {
    e === "isDisabled" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && n && this.addClass(this.$icon, `-${n}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", Ht);
var G, ce;
class Ve {
  constructor(t) {
    H(this, G, void 0);
    H(this, ce, void 0);
    var e;
    $(this, G, t), $(this, ce, t.nextElementSibling), ((e = _(this, G).dataset) == null ? void 0 : e.toggle) === "dropdown" && !_(this, G).parentElement.className.includes("dropdown-hover") && this.toggle(_(this, G).parentElement, _(this, ce));
  }
  toggle(t, e) {
    t.className.includes("open") ? (this.hideMenu(e), t.className = t.className.replace(" open", "")) : (this.showMenu(e), t.className = t.className + " open");
  }
  showMenu(t) {
    this.clearMenu(), t.classList.add("block");
  }
  hideMenu(t) {
    t.classList.add("hidden");
  }
  clearMenu() {
    document.querySelectorAll(".dropdown-menu").forEach((e) => {
      e.classList.add("hidden"), e.parentElement && (e.parentElement.className = e.parentElement.className.replace(" open", ""));
    });
  }
}
G = new WeakMap(), ce = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Ve(s.target) : new Ve(s).clearMenu());
});
class Ze {
  constructor(t, e) {
    v(this, "$modal");
    v(this, "options");
    v(this, "reposTask", null);
    this.$modal = t, this.$modal && (this.options = e, e.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), e.type === "show" && e.position && this.adjustPosition(e.position, null), this.$modal.onclick = (n) => this.onClick(n), window.addEventListener("resize", () => {
      e.type === "show" && e.position && this.adjustPosition(e.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(t) {
    var e, n;
    (((e = t.target.dataset) == null ? void 0 : e.dismiss) === "modal" || ((n = t.target.parentElement.dataset) == null ? void 0 : n.dismiss) === "modal") && (this.onHide(this.$modal), t.stopPropagation());
  }
  lockScroll() {
    document.body.style.overflow = "hidden";
  }
  unlockScroll() {
    document.body.style.overflow = "";
  }
  onShow(t) {
    this.lockScroll(), t.classList.add("block");
  }
  onHide(t) {
    t && t.classList && (this.unlockScroll(), t.classList.remove("block"));
  }
  onClear(t) {
    document.querySelectorAll(".modal").forEach((n) => {
      (n.dataset.modalClosable !== "false" || t === "destory") && n.classList.remove("block");
    });
  }
  adjustPosition(t, e) {
    var c;
    if (clearTimeout(this.reposTask), e) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, t, 0), e);
      return;
    }
    if (t === void 0 && (t = this.options.position), t == null)
      return;
    const n = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!n)
      return;
    const o = window.innerHeight, i = Math.max(0, (o - n.clientHeight) / 2);
    let l = null;
    if (t === "fit" ? l = `${i > 50 ? Math.floor(i * 2 / 3) : i}px` : t === "center" ? l = `${i}px` : this.isPlainObject(t) || (l = t), n.setAttribute("style", `top: ${l}`), n.className.includes("-fullscreen")) {
      let a = null;
      if (((c = n.childNodes) == null ? void 0 : c.length) && n.childNodes.length === 1 ? a = n.childNodes[0] : a = n.childNodes[1], a) {
        const g = (a == null ? void 0 : a.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = a == null ? void 0 : a.getElementsByClassName("modal-body")[0], m = (a == null ? void 0 : a.getElementsByClassName("modal-footer")[0].clientHeight) || 0, f = o - g - m, h = r && r.scrollHeight > f ? "auto" : "visible";
        r && r.setAttribute("style", `max-height:${f}px;overflow:${h}`);
      }
    }
  }
  isPlainObject(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
}
document.addEventListener("click", (s) => {
  var t, e, n;
  if (s !== null && s.target instanceof HTMLElement)
    if (((t = s.target.dataset) == null ? void 0 : t.toggle) === "modal") {
      let o = s.target.dataset.target;
      if (s.target.localName === "a") {
        const c = ((e = s.target) == null ? void 0 : e.href) || "";
        o = c && c.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!o.length)
        return;
      const i = document.querySelector(o), l = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new Ze(i, l);
    } else
      s.target.parentElement.className.includes("modal") || new Ze(s, { type: "hide" }).onClear();
});
function Bt(s) {
  const t = typeof s == "string" ? document.querySelector(s) : s;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const n = document.createRange();
      return n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n), !0;
    }
  }
  return !1;
}
function qt(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const F = (...s) => s.map((t) => Array.isArray(t) ? F(...t) : typeof t == "function" ? F(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const n = t[e];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" "), W = 24 * 60 * 60 * 1e3, R = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), de = (s, t = new Date()) => (s = R(s), t = R(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), Ke = (s, t = new Date()) => R(s).getFullYear() === R(t).getFullYear(), Ct = (s, t = new Date()) => (s = R(s), t = R(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Gt = (s, t = new Date()) => {
  s = R(s), t = R(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), o = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((o + 4) / 7);
}, Xt = (s, t) => de(R(t), s), Jt = (s, t) => de(R(t).getTime() - W, s), Vt = (s, t) => de(R(t).getTime() + W, s), Zt = (s, t) => de(R(t).getTime() - 2 * W, s), Qe = (s, t = "yyyy-MM-dd hh:mm") => {
  s = R(s);
  const e = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((n) => {
    if (new RegExp(`(${n})`).test(t)) {
      const o = `${e[n]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, Kt = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Qe(s, Ke(s) ? n.month : n.full);
  if (de(s, t))
    return o;
  const i = Qe(t, Ke(s, t) ? Ct(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", o).replace("{1}", i);
}, Qt = (s) => {
  const t = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return t - W * 7;
    case "oneMonth":
      return t - W * 31;
    case "threeMonth":
      return t - W * 31 * 3;
    case "halfYear":
      return t - W * 183;
    case "oneYear":
      return t - W * 365;
    case "twoYear":
      return t - 2 * (W * 365);
    default:
      return 0;
  }
}, et = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, et(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, et(s, "day", e, n);
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
  return e ? n + s : n - s;
};
var we, k, at, ae, tt, ge = {}, ct = [], Rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function U(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function ht(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function w(s, t, e) {
  var n, o, i, l = {};
  for (i in t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : l[i] = t[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? we.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (i in s.defaultProps)
      l[i] === void 0 && (l[i] = s.defaultProps[i]);
  return _e(s, l, n, o, null);
}
function _e(s, t, e, n, o) {
  var i = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++at : o };
  return o == null && k.vnode != null && k.vnode(i), i;
}
function dt() {
  return { current: null };
}
function Se(s) {
  return s.children;
}
function K(s, t) {
  this.props = s, this.context = t;
}
function se(s, t) {
  if (t == null)
    return s.__ ? se(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? se(s) : null;
}
function ft(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return ft(s);
  }
}
function st(s) {
  (!s.__d && (s.__d = !0) && ae.push(s) && !me.__r++ || tt !== k.debounceRendering) && ((tt = k.debounceRendering) || setTimeout)(me);
}
function me() {
  for (var s; me.__r = ae.length; )
    s = ae.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), ae = [], s.some(function(t) {
      var e, n, o, i, l, c;
      t.__d && (l = (i = (e = t).__v).__e, (c = e.__P) && (n = [], (o = U({}, i)).__v = i.__v + 1, Ce(c, i, o, e.__n, c.ownerSVGElement !== void 0, i.__h != null ? [l] : null, n, l == null ? se(i) : l, i.__h), gt(n, i), i.__e != l && ft(i)));
    });
}
function ut(s, t, e, n, o, i, l, c, a, g) {
  var r, m, f, h, p, S, u, b = n && n.__k || ct, x = b.length;
  for (e.__k = [], r = 0; r < t.length; r++)
    if ((h = e.__k[r] = (h = t[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? _e(null, h, null, null, h) : Array.isArray(h) ? _e(Se, { children: h }, null, null, null) : h.__b > 0 ? _e(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = e, h.__b = e.__b + 1, (f = b[r]) === null || f && h.key == f.key && h.type === f.type)
        b[r] = void 0;
      else
        for (m = 0; m < x; m++) {
          if ((f = b[m]) && h.key == f.key && h.type === f.type) {
            b[m] = void 0;
            break;
          }
          f = null;
        }
      Ce(s, h, f = f || ge, o, i, l, c, a, g), p = h.__e, (m = h.ref) && f.ref != m && (u || (u = []), f.ref && u.push(f.ref, null, h), u.push(m, h.__c || p, h)), p != null ? (S == null && (S = p), typeof h.type == "function" && h.__k === f.__k ? h.__d = a = _t(h, a, s) : a = pt(s, h, f, b, p, a), typeof e.type == "function" && (e.__d = a)) : a && f.__e == a && a.parentNode != s && (a = se(f));
    }
  for (e.__e = S, r = x; r--; )
    b[r] != null && (typeof e.type == "function" && b[r].__e != null && b[r].__e == e.__d && (e.__d = se(n, r + 1)), bt(b[r], b[r]));
  if (u)
    for (r = 0; r < u.length; r++)
      mt(u[r], u[++r], u[++r]);
}
function _t(s, t, e) {
  for (var n, o = s.__k, i = 0; o && i < o.length; i++)
    (n = o[i]) && (n.__ = s, t = typeof n.type == "function" ? _t(n, t, e) : pt(e, n, n, o, n.__e, t));
  return t;
}
function pt(s, t, e, n, o, i) {
  var l, c, a;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== s)
        s.appendChild(o), l = null;
      else {
        for (c = i, a = 0; (c = c.nextSibling) && a < n.length; a += 2)
          if (c == o)
            break e;
        s.insertBefore(o, i), l = i;
      }
  return l !== void 0 ? l : o.nextSibling;
}
function Lt(s, t, e, n, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in t || be(s, i, null, e[i], n);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === t[i] || be(s, i, t[i], e[i], n);
}
function nt(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || Rt.test(t) ? e : e + "px";
}
function be(s, t, e, n, o) {
  var i;
  e:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || nt(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || nt(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + i] = e, e ? n || s.addEventListener(t, i ? ot : it, i) : s.removeEventListener(t, i ? ot : it, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in s)
        try {
          s[t] = e == null ? "" : e;
          break e;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? s.setAttribute(t, e) : s.removeAttribute(t));
    }
}
function it(s) {
  this.l[s.type + !1](k.event ? k.event(s) : s);
}
function ot(s) {
  this.l[s.type + !0](k.event ? k.event(s) : s);
}
function Ce(s, t, e, n, o, i, l, c, a) {
  var g, r, m, f, h, p, S, u, b, x, D, ne, L, E = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (a = e.__h, c = t.__e = e.__e, t.__h = null, i = [c]), (g = k.__b) && g(t);
  try {
    e:
      if (typeof E == "function") {
        if (u = t.props, b = (g = E.contextType) && n[g.__c], x = g ? b ? b.props.value : g.__ : n, e.__c ? S = (r = t.__c = e.__c).__ = r.__E : ("prototype" in E && E.prototype.render ? t.__c = r = new E(u, x) : (t.__c = r = new K(u, x), r.constructor = E, r.render = Nt), b && b.sub(r), r.props = u, r.state || (r.state = {}), r.context = x, r.__n = n, m = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), E.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = U({}, r.__s)), U(r.__s, E.getDerivedStateFromProps(u, r.__s))), f = r.props, h = r.state, m)
          E.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && u !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(u, x), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(u, r.__s, x) === !1 || t.__v === e.__v) {
            r.props = u, r.state = r.__s, t.__v !== e.__v && (r.__d = !1), r.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), r.__h.length && l.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(u, r.__s, x), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(f, h, p);
          });
        }
        if (r.context = x, r.props = u, r.__v = t, r.__P = s, D = k.__r, ne = 0, "prototype" in E && E.prototype.render)
          r.state = r.__s, r.__d = !1, D && D(t), g = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, D && D(t), g = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++ne < 25);
        r.state = r.__s, r.getChildContext != null && (n = U(U({}, n), r.getChildContext())), m || r.getSnapshotBeforeUpdate == null || (p = r.getSnapshotBeforeUpdate(f, h)), L = g != null && g.type === Se && g.key == null ? g.props.children : g, ut(s, Array.isArray(L) ? L : [L], t, e, n, o, i, l, c, a), r.base = t.__e, t.__h = null, r.__h.length && l.push(r), S && (r.__E = r.__ = null), r.__e = !1;
      } else
        i == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = At(e.__e, t, e, n, o, i, l, a);
    (g = k.diffed) && g(t);
  } catch (A) {
    t.__v = null, (a || i != null) && (t.__e = c, t.__h = !!a, i[i.indexOf(c)] = null), k.__e(A, t, e);
  }
}
function gt(s, t) {
  k.__c && k.__c(t, s), s.some(function(e) {
    try {
      s = e.__h, e.__h = [], s.some(function(n) {
        n.call(e);
      });
    } catch (n) {
      k.__e(n, e.__v);
    }
  });
}
function At(s, t, e, n, o, i, l, c) {
  var a, g, r, m = e.props, f = t.props, h = t.type, p = 0;
  if (h === "svg" && (o = !0), i != null) {
    for (; p < i.length; p++)
      if ((a = i[p]) && "setAttribute" in a == !!h && (h ? a.localName === h : a.nodeType === 3)) {
        s = a, i[p] = null;
        break;
      }
  }
  if (s == null) {
    if (h === null)
      return document.createTextNode(f);
    s = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, f.is && f), i = null, c = !1;
  }
  if (h === null)
    m === f || c && s.data === f || (s.data = f);
  else {
    if (i = i && we.call(s.childNodes), g = (m = e.props || ge).dangerouslySetInnerHTML, r = f.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (m = {}, p = 0; p < s.attributes.length; p++)
          m[s.attributes[p].name] = s.attributes[p].value;
      (r || g) && (r && (g && r.__html == g.__html || r.__html === s.innerHTML) || (s.innerHTML = r && r.__html || ""));
    }
    if (Lt(s, f, m, o, c), r)
      t.__k = [];
    else if (p = t.props.children, ut(s, Array.isArray(p) ? p : [p], t, e, n, o && h !== "foreignObject", i, l, i ? i[0] : e.__k && se(e, 0), c), i != null)
      for (p = i.length; p--; )
        i[p] != null && ht(i[p]);
    c || ("value" in f && (p = f.value) !== void 0 && (p !== s.value || h === "progress" && !p || h === "option" && p !== m.value) && be(s, "value", p, m.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== s.checked && be(s, "checked", p, m.checked, !1));
  }
  return s;
}
function mt(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    k.__e(n, e);
  }
}
function bt(s, t, e) {
  var n, o;
  if (k.unmount && k.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || mt(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        k.__e(i, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (o = 0; o < n.length; o++)
      n[o] && bt(n[o], t, typeof s.type != "function");
  e || s.__e == null || ht(s.__e), s.__e = s.__d = void 0;
}
function Nt(s, t, e) {
  return this.constructor(s, e);
}
function Tt(s, t, e) {
  var n, o, i;
  k.__ && k.__(s, t), o = (n = typeof e == "function") ? null : e && e.__k || t.__k, i = [], Ce(t, s = (!n && e || t).__k = w(Se, null, [s]), o || ge, ge, t.ownerSVGElement !== void 0, !n && e ? [e] : o ? null : t.firstChild ? we.call(t.childNodes) : null, i, !n && e ? e : o ? o.__e : t.firstChild, n), gt(i, s);
}
we = ct.slice, k = { __e: function(s, t, e, n) {
  for (var o, i, l; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(s)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(s, n || {}), l = o.__d), l)
          return o.__E = o;
      } catch (c) {
        s = c;
      }
  throw s;
} }, at = 0, K.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = U({}, this.state), typeof s == "function" && (s = s(U({}, e), this.props)), s && U(e, s), s != null && this.__v && (t && this.__h.push(t), st(this));
}, K.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), st(this));
}, K.prototype.render = Se, ae = [], me.__r = 0;
var X;
class rt extends K {
  constructor(e) {
    var n;
    super(e);
    H(this, X, 0);
    v(this, "_handleWheel", (e) => {
      var o, i, l;
      !((i = e.target) != null && i.closest((o = this.props.wheelContainer) != null ? o : ".-scrollbar-container")) || (e.preventDefault(), this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    v(this, "_handleMouseMove", (e) => {
      const { dragStart: n } = this.state;
      n && (_(this, X) && cancelAnimationFrame(_(this, X)), $(this, X, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - n.x : e.clientY - n.y;
        this.scroll(n.offset + o * this.props.scrollSize / this.props.clientSize), $(this, X, 0);
      })), e.preventDefault());
    });
    v(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    v(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    v(this, "_handleClick", (e) => {
      const n = e.currentTarget;
      if (!n)
        return;
      const o = n.getBoundingClientRect(), { type: i, clientSize: l, scrollSize: c } = this.props, a = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(a * c / l);
    });
    this.state = {
      scrollPos: (n = this.props.defaultScrollPos) != null ? n : 0,
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
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: o = 10 } = this.props;
    return Math.max(Math.round(e * e / n), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && document.addEventListener("wheel", this._handleWheel, { passive: !1 });
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this.props.wheelContainer && document.removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e !== this.scrollPos && (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)));
  }
  scrollOffset(e) {
    this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    var o;
    const { onScroll: n } = this.props;
    n && n(e, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      scrollSize: e,
      clientSize: n,
      type: o,
      size: i = 10,
      className: l,
      style: c,
      left: a,
      top: g,
      bottom: r,
      right: m
    } = this.props, { maxScrollPos: f, scrollPos: h } = this, { dragStart: p } = this.state, S = {
      left: a,
      top: g,
      bottom: r,
      right: m,
      ...c
    }, u = {};
    return o === "horz" ? (S.height = i, S.width = n, u.width = Math.max(Math.round(n * n / e), i), u.left = Math.round(h * (n - u.width) / f)) : (S.width = i, S.height = n, u.height = this.barSize, u.top = Math.round(h * (n - u.height) / f)), /* @__PURE__ */ w("div", {
      className: F("scrollbar", l, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": p
      }),
      style: S,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ w("div", {
      className: "scrollbar-bar",
      style: u,
      onMouseDown: this._handleMouseDown
    }));
  }
}
X = new WeakMap();
function Re({ col: s, className: t, height: e, rowID: n, rowData: o, onRenderCell: i, style: l, children: c, ...a }) {
  const { cellStyle: g, align: r, className: m } = s.setting, f = {
    left: s.left,
    width: s.realWidth,
    height: e,
    ...l,
    ...g
  };
  r && (f.textAlign = r);
  let h = [
    c != null ? c : o == null ? void 0 : o[s.name]
  ];
  s.setting.onRenderCell && (h = s.setting.onRenderCell(h, n, s, o)), i && (h = i(h, n, s, o));
  const p = [], S = [];
  return h == null || h.forEach((u) => {
    typeof u == "object" && u && ("style" in u || "className" in u || "style" in u) ? (u.html && S.push(/* @__PURE__ */ w("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: u.html }
    })), u.style && Object.assign(f, u.style), u.className && p.push(u.className)) : S.push(u);
  }), /* @__PURE__ */ w("div", {
    className: F("dtable-cell", t, m, p),
    style: f,
    "data-col": s.name,
    ...a
  }, S);
}
function zt({ col: s, children: t, ...e }) {
  let { sortType: n } = s.setting;
  return n === !0 && (n = "none"), /* @__PURE__ */ w(Re, {
    col: s,
    "data-sort": n || null,
    "data-type": s.type,
    ...e
  }, s.setting.title, n && /* @__PURE__ */ w("div", {
    className: `dtable-sort dtable-sort-${n}`
  }), t);
}
function Ee({ rowID: s, className: t, top: e = 0, left: n = 0, width: o, height: i, cols: l, data: c, CellComponent: a = Re, onRenderCell: g }) {
  return /* @__PURE__ */ w("div", {
    className: F("dtable-cells", t),
    style: { top: e, left: n, width: o, height: i }
  }, l.map((r) => r.visible ? /* @__PURE__ */ w(a, {
    key: r.name,
    col: r,
    rowData: c,
    rowID: s,
    onRenderCell: g
  }) : null));
}
function yt({
  rowID: s,
  className: t,
  top: e,
  height: n,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: l,
  flexLeftWidth: c,
  scrollWidth: a,
  scrollWidthTotal: g,
  flexRightWidth: r,
  scrollLeft: m,
  CellComponent: f = Re,
  onRenderCell: h,
  data: p
}) {
  let S = null;
  o != null && o.length && (S = /* @__PURE__ */ w(Ee, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    rowID: s,
    CellComponent: f,
    onRenderCell: h,
    data: p
  }));
  let u = null;
  l != null && l.length && (u = /* @__PURE__ */ w(Ee, {
    className: "dtable-flexable",
    cols: l,
    left: c - m,
    width: g,
    rowID: s,
    CellComponent: f,
    onRenderCell: h,
    data: p
  }));
  let b = null;
  i != null && i.length && (b = /* @__PURE__ */ w(Ee, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + a,
    width: r,
    rowID: s,
    CellComponent: f,
    onRenderCell: h,
    data: p
  }));
  const x = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ w("div", {
    className: F("dtable-row", t),
    style: x,
    "data-id": s
  }, S, u, b);
}
function Wt({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: zt
  };
  return t && (n = t(n)), /* @__PURE__ */ w("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ w(yt, {
    ...n
  }));
}
function Dt({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: o,
  rowHeight: i,
  onRenderRow: l,
  ...c
}) {
  return t = { ...t, top: e, height: o }, /* @__PURE__ */ w("div", {
    className: F("dtable-rows", s),
    style: t
  }, n.map((a) => {
    let g = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      rowID: a.data.id,
      data: a.data,
      top: a.top,
      height: i,
      ...c
    };
    return l && (g = l(g, a)), /* @__PURE__ */ w(yt, {
      ...g
    });
  }));
}
const ye = /* @__PURE__ */ new Map();
function vt(s, t = !1) {
  if (!t && ye.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  ye.set(s.name, s);
}
function jt(s) {
  return ye.get(s);
}
function wt(s) {
  return ye.delete(s);
}
function Pt(s) {
  var e;
  if (!((e = s == null ? void 0 : s.plugins) != null && e.length))
    return [];
  const { plugins: t } = s;
  return t.reduce((n, o) => {
    let i;
    return typeof o == "string" ? (i = jt(o), i || console.warn(`DTable: Cannot found plugin "${o}"`)) : typeof o == "function" ? i = o.plugin : typeof o == "object" ? i = o : console.warn("DTable: Invalid plugin", o), i && n.push(i), n;
  }, []);
}
function It(s, t) {
  return s.reduce((e, n) => {
    const { options: o, defaultOptions: i } = n;
    return Object.assign(e, i, e), t && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, t);
}
function xe() {
  return {
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
var J, I, M, V, C, Q;
class He extends K {
  constructor(e) {
    super(e);
    v(this, "ref", dt());
    H(this, J, 0);
    H(this, I, !1);
    H(this, M, void 0);
    H(this, V, void 0);
    H(this, C, []);
    H(this, Q, void 0);
    v(this, "_handleResize", () => {
      _(this, J) && cancelAnimationFrame(_(this, J)), $(this, J, requestAnimationFrame(() => {
        this.forceUpdate(), $(this, J, 0);
      }));
    });
    v(this, "_handleRenderRow", (e, n) => (_(this, M).onRenderRow && (e = _(this, M).onRenderRow.call(this, e, n)), _(this, C).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, n));
    }), e));
    v(this, "_handleRenderHeaderRow", (e) => (_(this, M).onRenderHeaderRow && (e = _(this, M).onRenderHeaderRow.call(this, e)), _(this, C).forEach((n) => {
      n.onRenderHeaderRow && (e = n.onRenderHeaderRow.call(this, e));
    }), e));
    v(this, "_handleRenderCell", (e, n, o, i) => (_(this, M).onRenderCell && (e = _(this, M).onRenderCell.call(this, e, n, o, i)), _(this, C).forEach((l) => {
      l.onRenderCell && (e = l.onRenderCell.call(this, e, n, o, i));
    }), e));
    v(this, "_handleScroll", (e, n) => {
      n === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    v(this, "_handleClick", (e) => {
      var a, g, r, m, f, h, p, S;
      const n = e.target;
      if (!n)
        return;
      const o = n.closest(".dtable-row");
      if (!o)
        return;
      const i = n.closest(".dtable-cell"), l = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "", c = (g = o.getAttribute("data-id")) != null ? g : "";
      if (c === "HEADER")
        i && ((r = _(this, M).onHeaderCellClick) == null || r.call(this, e, { colName: l, element: i }), _(this, C).forEach((u) => {
          var b;
          (b = u.onHeaderCellClick) == null || b.call(this, e, { colName: l, element: i });
        }));
      else {
        const u = (m = _(this, Q)) == null ? void 0 : m.visibleRows.find((b) => b.data.id === c);
        if (i) {
          if (((f = _(this, M).onCellClick) == null ? void 0 : f.call(this, e, { colName: l, rowID: c, rowInfo: u, element: i, rowElement: o })) === !0)
            return;
          for (const b of _(this, C))
            if (((h = b.onCellClick) == null ? void 0 : h.call(this, e, { colName: l, rowID: c, rowInfo: u, element: i, rowElement: o })) === !0)
              return;
        }
        if (((p = _(this, M).onRowClick) == null ? void 0 : p.call(this, e, { rowID: c, rowInfo: u, element: o })) === !0)
          return;
        for (const b of _(this, C))
          if (((S = b.onRowClick) == null ? void 0 : S.call(this, e, { rowID: c, rowInfo: u, element: o })) === !0)
            return;
      }
    });
    this.state = { scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {} };
    const n = { ...xe(), ...e };
    $(this, M, Object.freeze(n)), $(this, V, Object.freeze(Pt(n))), _(this, V).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return _(this, M);
  }
  get plugins() {
    return _(this, C);
  }
  get layout() {
    return _(this, Q);
  }
  componentDidMount() {
    var e;
    _(this, I) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), _(this, M).responsive && window.addEventListener("resize", this._handleResize), _(this, C).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    _(this, I) && this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.ref.current) == null || e.removeEventListener("click", this._handleClick), window.removeEventListener("resize", this._handleResize), _(this, C).forEach((n) => {
      var o;
      (o = n.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var n;
      (n = _(this, M).onScroll) == null || n.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var n;
      (n = _(this, M).onScroll) == null || n.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ie, Oe, Ue;
    const e = xe(), n = It(_(this, V), { ...e, ...this.props }), o = _(this, V).filter((d) => !d.when || d.when(n));
    $(this, C, Object.freeze(o)), o.forEach((d) => {
      var N;
      const y = (N = d.beforeLayout) == null ? void 0 : N.call(this, n);
      y && Object.assign(n, y);
    }), $(this, M, Object.freeze(n));
    const {
      data: i,
      header: l,
      footer: c,
      rowHeight: a = e.rowHeight,
      defaultColWidth: g = e.minColWidth,
      minColWidth: r = e.minColWidth,
      maxColWidth: m = e.maxColWidth
    } = n, { scrollTop: f = 0, scrollLeft: h = 0, hiddenRows: p = {}, hiddenCols: S = {} } = this.state, u = l ? n.headerHeight || a : 0, b = c ? n.footerHeight || a : 0, x = (d, y, N) => (d && (y && (d = Math.max(y, d)), N && (d = Math.min(N, d))), d), D = [], ne = [], L = [];
    let E = 0, A = 0;
    (Ie = n.cols) == null || Ie.forEach((d) => {
      var Fe, Ye, Be;
      if (d.hidden || S[d.name])
        return;
      const { minWidth: y = r, maxWidth: N = m } = d, re = x((Fe = d.width) != null ? Fe : 0, y, N), le = (Ye = d.flex) != null ? Ye : 1, St = le * x(g, y, N), P = {
        name: d.name,
        type: (Be = d.type) != null ? Be : "",
        setting: d,
        left: 0,
        flex: le,
        realWidth: re,
        flexWidth: St,
        visible: !0
      };
      d.fixed === "left" ? (P.left = E, E += re, D.push(P)) : d.fixed === "right" ? (P.left = A, A += re, ne.push(P)) : L.push(P), o.forEach((kt) => {
        var Ge, Xe;
        const fe = (Xe = kt.colTypes) == null ? void 0 : Xe[(Ge = d.type) != null ? Ge : ""];
        if (!fe)
          return;
        const qe = typeof fe == "function" ? fe(P) : fe;
        if (qe) {
          const { setting: Je, ...Mt } = qe;
          Object.assign(P, Mt), Je && Object.assign(P.setting, Je);
        }
      });
    });
    let j = n.width, Y = 0;
    if (typeof j == "function" && (j = j()), j === "auto")
      Y = E + A, L.forEach((d) => {
        d.realWidth || (d.realWidth = d.flexWidth), Y += d.realWidth;
      });
    else if (j === "100%") {
      const d = (Oe = this.ref.current) == null ? void 0 : Oe.parentElement;
      if (d)
        Y = d.clientWidth;
      else {
        Y = 0, $(this, I, !0);
        return;
      }
    } else
      Y = j != null ? j : 0;
    let ie = 0;
    const Ae = [], oe = [], Ne = (d) => {
      const y = { data: d, top: ie, id: d.id, index: oe.length };
      Ae.push(y), p[y.id] || oe.push(y), ie += a;
    };
    if (Array.isArray(i))
      i.forEach(Ne);
    else if (i != null && i.length) {
      const d = typeof i.length == "function" ? i.length() : i.length;
      for (let y = 0; y < d; y++)
        Ne(i.getItem(y));
    }
    let z = n.height, B = 0;
    if (typeof z == "function" && (z = z()), z === "auto")
      B = u + b + ie;
    else if (typeof z == "object")
      B = Math.min(z.max, Math.max(z.min, u + b + ie));
    else if (z === "100%") {
      const d = (Ue = this.ref.current) == null ? void 0 : Ue.parentElement;
      if (d)
        B = d.clientHeight;
      else {
        B = 0, $(this, I, !0);
        return;
      }
    } else
      B = z;
    const Te = B - u - b, ze = f + Te, We = [], ke = Y - E - A;
    let q = 0;
    const Me = [];
    let De = 0;
    if (L.forEach((d) => {
      d.realWidth ? q += d.realWidth : (Me.push(d), De += d.flex);
    }), Me.length) {
      const d = Math.max(0, ke - q);
      Me.forEach((y) => {
        var le;
        const { minWidth: N = r, maxWidth: re = m } = y.setting;
        y.realWidth = Math.min(re, Math.max(N, Math.ceil(d * ((le = y.flex) != null ? le : 1) / De))), q += y.realWidth;
      });
    }
    q = 0, L.forEach((d) => {
      d.left += q, q += d.realWidth, (d.left + d.realWidth < h || d.left > h + ke) && (d.visible = !1);
    });
    const je = Math.floor(f / a), Pe = Math.min(oe.length, Math.ceil(ze / a));
    for (let d = je; d < Pe; d++) {
      const y = oe[d];
      y.top -= f, We.push(y);
    }
    let Z = {
      allRows: Ae,
      width: Y,
      height: B,
      rows: oe,
      visibleRows: We,
      rowHeight: a,
      rowsHeight: Te,
      rowsHeightTotal: ie,
      header: l,
      footer: c,
      headerHeight: u,
      footerHeight: b,
      colsInfo: {
        fixedLeftCols: D,
        fixedRightCols: ne,
        scrollCols: L,
        flexLeftWidth: E,
        scrollWidth: ke,
        scrollWidthTotal: q,
        flexRightWidth: A
      },
      scrollBottom: ze,
      scrollTop: f,
      scrollLeft: h,
      startRowIndex: je,
      endRowIndex: Pe
    };
    if (n.onLayout) {
      const d = n.onLayout.call(this, Z);
      d && (Z = d);
    }
    return o.forEach((d) => {
      if (d.onLayout) {
        const y = d.onLayout.call(this, Z);
        y && (Z = y);
      }
    }), $(this, Q, Object.freeze(Z)), Z;
  }
  renderHeader(e) {
    const { header: n, colsInfo: o, headerHeight: i } = e;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ w(Wt, {
        scrollLeft: this.state.scrollLeft,
        height: i,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...o
      });
    let l, c;
    if (typeof n == "function") {
      const a = n(e, this.state);
      typeof a == "object" && a && "__html" in a ? c = a : l = a;
    } else
      l = n;
    return /* @__PURE__ */ w("div", {
      className: "dtable-header",
      style: { height: i },
      dangerouslySetInnerHTML: c
    }, l);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: o, visibleRows: i, rowHeight: l, colsInfo: c } = e;
    return /* @__PURE__ */ w(Dt, {
      top: n,
      height: o,
      rows: i,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(e) {
    const { footer: n, footerHeight: o } = e;
    if (!n)
      return null;
    let i, l;
    if (typeof n == "function") {
      const c = n(e, this.state);
      typeof c == "object" && c && "__html" in c ? l = c : i = c;
    } else
      i = n;
    return /* @__PURE__ */ w("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: l
    }, i);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: o, colsInfo: i, scrollTop: l, rowsHeight: c, rowsHeightTotal: a } = e, { scrollWidthTotal: g, scrollWidth: r } = i, { scrollbarSize: m = 10, horzScrollbarPos: f } = this.props;
    return g > r && n.push(/* @__PURE__ */ w(rt, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: g,
      clientSize: r,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: f === "inside" ? 0 : -m,
      size: m,
      wheelContainer: ".dtable"
    })), a > c && n.push(/* @__PURE__ */ w(rt, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: a,
      clientSize: c,
      onScroll: this._handleScroll,
      right: 0,
      size: m,
      top: e.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  _afterRender() {
    var e;
    $(this, I, !1), (e = _(this, M).afterRender) == null || e.call(this), _(this, C).forEach((n) => {
      var o;
      return (o = n.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var m, f;
    const e = this.getLayout(), { className: n, rowHover: o, colHover: i, cellHover: l, bordered: c, striped: a, scrollbarHover: g } = (m = _(this, M)) != null ? m : this.props, r = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ w("div", {
      className: F("dtable", n, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": l,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((f = e == null ? void 0 : e.scrollTop) != null ? f : 0) > 0,
        "scrollbar-hover": g
      }),
      style: r,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
J = new WeakMap(), I = new WeakMap(), M = new WeakMap(), V = new WeakMap(), C = new WeakMap(), Q = new WeakMap(), v(He, "addPlugin", vt), v(He, "removePlugin", wt);
class lt {
  constructor(t, e) {
    v(this, "element");
    v(this, "options");
    v(this, "ref", dt());
    var n;
    this.element = t, this.options = { ...xe(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  render(t) {
    this.options = Object.assign(this.options, t), Tt(/* @__PURE__ */ w(He, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
v(lt, "addPlugin", vt), v(lt, "removePlugin", wt);
let Ot = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var he, O, T, ee, te, pe;
const Le = class {
  constructor(t, e = "local") {
    H(this, te);
    H(this, he, void 0);
    H(this, O, void 0);
    H(this, T, void 0);
    H(this, ee, void 0);
    $(this, he, e), $(this, O, `ZUI_STORE:${t != null ? t : Ot()}`), $(this, T, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return _(this, he);
  }
  get session() {
    return this.type === "session" ? this : (_(this, ee) || $(this, ee, new Le(_(this, O), "session")), _(this, ee));
  }
  get(t, e) {
    const n = _(this, T).getItem(ue(this, te, pe).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    _(this, T).setItem(ue(this, te, pe).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    _(this, T).removeItem(ue(this, te, pe).call(this, t));
  }
  each(t) {
    for (let e = 0; e < _(this, T).length; e++) {
      const n = _(this, T).key(e);
      if (n != null && n.startsWith(_(this, O))) {
        const o = _(this, T).getItem(n);
        typeof o == "string" && t(n.substring(_(this, O).length + 1), JSON.parse(o));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
let ve = Le;
he = new WeakMap(), O = new WeakMap(), T = new WeakMap(), ee = new WeakMap(), te = new WeakSet(), pe = function(t) {
  return `${_(this, O)}:${t}`;
};
const Ut = new ve("DEFAULT");
function Ft(s, t = "local") {
  return new ve(s, t);
}
Object.assign(Ut, { create: Ft });
export {
  lt as DTable,
  rt as Scrollbar,
  W as TIME_DAY,
  et as calculateTimestamp,
  F as classes,
  R as createDate,
  qt as domReady,
  Qe as formatDate,
  Kt as formatDateSpan,
  Qt as getTimeBeforeDesc,
  Zt as isDBY,
  de as isSameDay,
  Ct as isSameMonth,
  Gt as isSameWeek,
  Ke as isSameYear,
  Xt as isToday,
  Vt as isTomorrow,
  Jt as isYesterday,
  Bt as selectText,
  Ut as store
};
