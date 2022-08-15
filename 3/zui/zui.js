var Et = Object.defineProperty;
var xt = (s, t, e) => t in s ? Et(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var w = (s, t, e) => (xt(s, typeof t != "symbol" ? t + "" : t, e), e), Ee = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var _ = (s, t, e) => (Ee(s, t, "read from private field"), e ? e.call(s) : t.get(s)), H = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, $ = (s, t, e, n) => (Ee(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var _e = (s, t, e) => (Ee(s, t, "access private method"), e);
const Ht = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: o, value: i } = n;
    t[o] = i;
  }), t;
};
class Ct extends HTMLElement {
  constructor() {
    super();
    w(this, "$button");
    w(this, "$icon");
    w(this, "onClick");
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
    const e = Ht(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Ct);
var G, he;
class Ze {
  constructor(t) {
    H(this, G, void 0);
    H(this, he, void 0);
    var e;
    $(this, G, t), $(this, he, t.nextElementSibling), ((e = _(this, G).dataset) == null ? void 0 : e.toggle) === "dropdown" && !_(this, G).parentElement.className.includes("dropdown-hover") && this.toggle(_(this, G).parentElement, _(this, he));
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
G = new WeakMap(), he = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Ze(s.target) : new Ze(s).clearMenu());
});
class Ke {
  constructor(t, e) {
    w(this, "$modal");
    w(this, "options");
    w(this, "reposTask", null);
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
      let h = null;
      if (((c = n.childNodes) == null ? void 0 : c.length) && n.childNodes.length === 1 ? h = n.childNodes[0] : h = n.childNodes[1], h) {
        const p = (h == null ? void 0 : h.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = h == null ? void 0 : h.getElementsByClassName("modal-body")[0], m = (h == null ? void 0 : h.getElementsByClassName("modal-footer")[0].clientHeight) || 0, f = o - p - m, a = r && r.scrollHeight > f ? "auto" : "visible";
        r && r.setAttribute("style", `max-height:${f}px;overflow:${a}`);
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
      new Ke(i, l);
    } else
      s.target.parentElement.className.includes("modal") || new Ke(s, { type: "hide" }).onClear();
});
function qt(s) {
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
function Gt(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const U = (...s) => s.map((t) => Array.isArray(t) ? U(...t) : typeof t == "function" ? U(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const n = t[e];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" "), z = 24 * 60 * 60 * 1e3, R = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), fe = (s, t = new Date()) => (s = R(s), t = R(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), Qe = (s, t = new Date()) => R(s).getFullYear() === R(t).getFullYear(), Rt = (s, t = new Date()) => (s = R(s), t = R(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Xt = (s, t = new Date()) => {
  s = R(s), t = R(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), o = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((o + 4) / 7);
}, Jt = (s, t) => fe(R(t), s), Vt = (s, t) => fe(R(t).getTime() - z, s), Zt = (s, t) => fe(R(t).getTime() + z, s), Kt = (s, t) => fe(R(t).getTime() - 2 * z, s), et = (s, t = "yyyy-MM-dd hh:mm") => {
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
}, Qt = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = et(s, Qe(s) ? n.month : n.full);
  if (fe(s, t))
    return o;
  const i = et(t, Qe(s, t) ? Rt(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", o).replace("{1}", i);
}, es = (s) => {
  const t = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return t - z * 7;
    case "oneMonth":
      return t - z * 31;
    case "threeMonth":
      return t - z * 31 * 3;
    case "halfYear":
      return t - z * 183;
    case "oneYear":
      return t - z * 365;
    case "twoYear":
      return t - 2 * (z * 365);
    default:
      return 0;
  }
}, tt = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, tt(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, tt(s, "day", e, n);
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
var Se, k, ct, ce, st, me = {}, ht = [], Lt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function O(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function dt(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function S(s, t, e) {
  var n, o, i, l = {};
  for (i in t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : l[i] = t[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Se.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (i in s.defaultProps)
      l[i] === void 0 && (l[i] = s.defaultProps[i]);
  return pe(s, l, n, o, null);
}
function pe(s, t, e, n, o) {
  var i = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++ct : o };
  return o == null && k.vnode != null && k.vnode(i), i;
}
function ft() {
  return { current: null };
}
function ke(s) {
  return s.children;
}
function Z(s, t) {
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
function ut(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return ut(s);
  }
}
function nt(s) {
  (!s.__d && (s.__d = !0) && ce.push(s) && !be.__r++ || st !== k.debounceRendering) && ((st = k.debounceRendering) || setTimeout)(be);
}
function be() {
  for (var s; be.__r = ce.length; )
    s = ce.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), ce = [], s.some(function(t) {
      var e, n, o, i, l, c;
      t.__d && (l = (i = (e = t).__v).__e, (c = e.__P) && (n = [], (o = O({}, i)).__v = i.__v + 1, Re(c, i, o, e.__n, c.ownerSVGElement !== void 0, i.__h != null ? [l] : null, n, l == null ? se(i) : l, i.__h), mt(n, i), i.__e != l && ut(i)));
    });
}
function _t(s, t, e, n, o, i, l, c, h, p) {
  var r, m, f, a, g, b, u, y = n && n.__k || ht, E = y.length;
  for (e.__k = [], r = 0; r < t.length; r++)
    if ((a = e.__k[r] = (a = t[r]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? pe(null, a, null, null, a) : Array.isArray(a) ? pe(ke, { children: a }, null, null, null) : a.__b > 0 ? pe(a.type, a.props, a.key, null, a.__v) : a) != null) {
      if (a.__ = e, a.__b = e.__b + 1, (f = y[r]) === null || f && a.key == f.key && a.type === f.type)
        y[r] = void 0;
      else
        for (m = 0; m < E; m++) {
          if ((f = y[m]) && a.key == f.key && a.type === f.type) {
            y[m] = void 0;
            break;
          }
          f = null;
        }
      Re(s, a, f = f || me, o, i, l, c, h, p), g = a.__e, (m = a.ref) && f.ref != m && (u || (u = []), f.ref && u.push(f.ref, null, a), u.push(m, a.__c || g, a)), g != null ? (b == null && (b = g), typeof a.type == "function" && a.__k === f.__k ? a.__d = h = pt(a, h, s) : h = gt(s, a, f, y, g, h), typeof e.type == "function" && (e.__d = h)) : h && f.__e == h && h.parentNode != s && (h = se(f));
    }
  for (e.__e = b, r = E; r--; )
    y[r] != null && (typeof e.type == "function" && y[r].__e != null && y[r].__e == e.__d && (e.__d = se(n, r + 1)), yt(y[r], y[r]));
  if (u)
    for (r = 0; r < u.length; r++)
      bt(u[r], u[++r], u[++r]);
}
function pt(s, t, e) {
  for (var n, o = s.__k, i = 0; o && i < o.length; i++)
    (n = o[i]) && (n.__ = s, t = typeof n.type == "function" ? pt(n, t, e) : gt(e, n, n, o, n.__e, t));
  return t;
}
function gt(s, t, e, n, o, i) {
  var l, c, h;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== s)
        s.appendChild(o), l = null;
      else {
        for (c = i, h = 0; (c = c.nextSibling) && h < n.length; h += 2)
          if (c == o)
            break e;
        s.insertBefore(o, i), l = i;
      }
  return l !== void 0 ? l : o.nextSibling;
}
function At(s, t, e, n, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in t || ye(s, i, null, e[i], n);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === t[i] || ye(s, i, t[i], e[i], n);
}
function it(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || Lt.test(t) ? e : e + "px";
}
function ye(s, t, e, n, o) {
  var i;
  e:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || it(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || it(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + i] = e, e ? n || s.addEventListener(t, i ? rt : ot, i) : s.removeEventListener(t, i ? rt : ot, i);
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
function ot(s) {
  this.l[s.type + !1](k.event ? k.event(s) : s);
}
function rt(s) {
  this.l[s.type + !0](k.event ? k.event(s) : s);
}
function Re(s, t, e, n, o, i, l, c, h) {
  var p, r, m, f, a, g, b, u, y, E, W, ne, F, x = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, c = t.__e = e.__e, t.__h = null, i = [c]), (p = k.__b) && p(t);
  try {
    e:
      if (typeof x == "function") {
        if (u = t.props, y = (p = x.contextType) && n[p.__c], E = p ? y ? y.props.value : p.__ : n, e.__c ? b = (r = t.__c = e.__c).__ = r.__E : ("prototype" in x && x.prototype.render ? t.__c = r = new x(u, E) : (t.__c = r = new Z(u, E), r.constructor = x, r.render = Tt), y && y.sub(r), r.props = u, r.state || (r.state = {}), r.context = E, r.__n = n, m = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), x.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = O({}, r.__s)), O(r.__s, x.getDerivedStateFromProps(u, r.__s))), f = r.props, a = r.state, m)
          x.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && u !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(u, E), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(u, r.__s, E) === !1 || t.__v === e.__v) {
            r.props = u, r.state = r.__s, t.__v !== e.__v && (r.__d = !1), r.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(L) {
              L && (L.__ = t);
            }), r.__h.length && l.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(u, r.__s, E), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(f, a, g);
          });
        }
        if (r.context = E, r.props = u, r.__v = t, r.__P = s, W = k.__r, ne = 0, "prototype" in x && x.prototype.render)
          r.state = r.__s, r.__d = !1, W && W(t), p = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, W && W(t), p = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++ne < 25);
        r.state = r.__s, r.getChildContext != null && (n = O(O({}, n), r.getChildContext())), m || r.getSnapshotBeforeUpdate == null || (g = r.getSnapshotBeforeUpdate(f, a)), F = p != null && p.type === ke && p.key == null ? p.props.children : p, _t(s, Array.isArray(F) ? F : [F], t, e, n, o, i, l, c, h), r.base = t.__e, t.__h = null, r.__h.length && l.push(r), b && (r.__E = r.__ = null), r.__e = !1;
      } else
        i == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Nt(e.__e, t, e, n, o, i, l, h);
    (p = k.diffed) && p(t);
  } catch (L) {
    t.__v = null, (h || i != null) && (t.__e = c, t.__h = !!h, i[i.indexOf(c)] = null), k.__e(L, t, e);
  }
}
function mt(s, t) {
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
function Nt(s, t, e, n, o, i, l, c) {
  var h, p, r, m = e.props, f = t.props, a = t.type, g = 0;
  if (a === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((h = i[g]) && "setAttribute" in h == !!a && (a ? h.localName === a : h.nodeType === 3)) {
        s = h, i[g] = null;
        break;
      }
  }
  if (s == null) {
    if (a === null)
      return document.createTextNode(f);
    s = o ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), i = null, c = !1;
  }
  if (a === null)
    m === f || c && s.data === f || (s.data = f);
  else {
    if (i = i && Se.call(s.childNodes), p = (m = e.props || me).dangerouslySetInnerHTML, r = f.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (m = {}, g = 0; g < s.attributes.length; g++)
          m[s.attributes[g].name] = s.attributes[g].value;
      (r || p) && (r && (p && r.__html == p.__html || r.__html === s.innerHTML) || (s.innerHTML = r && r.__html || ""));
    }
    if (At(s, f, m, o, c), r)
      t.__k = [];
    else if (g = t.props.children, _t(s, Array.isArray(g) ? g : [g], t, e, n, o && a !== "foreignObject", i, l, i ? i[0] : e.__k && se(e, 0), c), i != null)
      for (g = i.length; g--; )
        i[g] != null && dt(i[g]);
    c || ("value" in f && (g = f.value) !== void 0 && (g !== s.value || a === "progress" && !g || a === "option" && g !== m.value) && ye(s, "value", g, m.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== s.checked && ye(s, "checked", g, m.checked, !1));
  }
  return s;
}
function bt(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    k.__e(n, e);
  }
}
function yt(s, t, e) {
  var n, o;
  if (k.unmount && k.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || bt(n, null, t)), (n = s.__c) != null) {
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
      n[o] && yt(n[o], t, typeof s.type != "function");
  e || s.__e == null || dt(s.__e), s.__e = s.__d = void 0;
}
function Tt(s, t, e) {
  return this.constructor(s, e);
}
function zt(s, t, e) {
  var n, o, i;
  k.__ && k.__(s, t), o = (n = typeof e == "function") ? null : e && e.__k || t.__k, i = [], Re(t, s = (!n && e || t).__k = S(ke, null, [s]), o || me, me, t.ownerSVGElement !== void 0, !n && e ? [e] : o ? null : t.firstChild ? Se.call(t.childNodes) : null, i, !n && e ? e : o ? o.__e : t.firstChild, n), mt(i, s);
}
Se = ht.slice, k = { __e: function(s, t, e, n) {
  for (var o, i, l; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(s)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(s, n || {}), l = o.__d), l)
          return o.__E = o;
      } catch (c) {
        s = c;
      }
  throw s;
} }, ct = 0, Z.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = O({}, this.state), typeof s == "function" && (s = s(O({}, e), this.props)), s && O(e, s), s != null && this.__v && (t && this.__h.push(t), nt(this));
}, Z.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), nt(this));
}, Z.prototype.render = ke, ce = [], be.__r = 0;
var X;
class lt extends Z {
  constructor(e) {
    var n;
    super(e);
    H(this, X, 0);
    w(this, "_handleWheel", (e) => {
      var o, i, l;
      !((i = e.target) != null && i.closest((o = this.props.wheelContainer) != null ? o : ".-scrollbar-container")) || (e.preventDefault(), this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    w(this, "_handleMouseMove", (e) => {
      const { dragStart: n } = this.state;
      n && (_(this, X) && cancelAnimationFrame(_(this, X)), $(this, X, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - n.x : e.clientY - n.y;
        this.scroll(n.offset + o * this.props.scrollSize / this.props.clientSize), $(this, X, 0);
      })), e.preventDefault());
    });
    w(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    w(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    w(this, "_handleClick", (e) => {
      const n = e.currentTarget;
      if (!n)
        return;
      const o = n.getBoundingClientRect(), { type: i, clientSize: l, scrollSize: c } = this.props, h = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(h * c / l);
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
      left: h,
      top: p,
      bottom: r,
      right: m
    } = this.props, { maxScrollPos: f, scrollPos: a } = this, { dragStart: g } = this.state, b = {
      left: h,
      top: p,
      bottom: r,
      right: m,
      ...c
    }, u = {};
    return o === "horz" ? (b.height = i, b.width = n, u.width = Math.max(Math.round(n * n / e), i), u.left = Math.round(a * (n - u.width) / f)) : (b.width = i, b.height = n, u.height = this.barSize, u.top = Math.round(a * (n - u.height) / f)), /* @__PURE__ */ S("div", {
      className: U("scrollbar", l, {
        "is-vert": o === "vert",
        "is-horz": o === "horz",
        "is-dragging": g
      }),
      style: b,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ S("div", {
      className: "scrollbar-bar",
      style: u,
      onMouseDown: this._handleMouseDown
    }));
  }
}
X = new WeakMap();
function Le({ col: s, className: t, height: e, rowID: n, rowData: o, onRenderCell: i, style: l, children: c, ...h }) {
  const { cellStyle: p, align: r, className: m } = s.setting, f = {
    left: s.left,
    width: s.realWidth,
    height: e,
    ...l,
    ...p
  };
  r && (f.textAlign = r);
  let a = [
    c != null ? c : o == null ? void 0 : o[s.name]
  ];
  s.setting.onRenderCell && (a = s.setting.onRenderCell(a, n, s, o)), i && (a = i(a, n, s, o));
  const g = [], b = [];
  return a == null || a.forEach((u) => {
    typeof u == "object" && u && ("style" in u || "className" in u || "style" in u) ? (u.html && b.push(/* @__PURE__ */ S("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: u.html }
    })), u.style && Object.assign(f, u.style), u.className && g.push(u.className)) : b.push(u);
  }), /* @__PURE__ */ S("div", {
    className: U("dtable-cell", t, m, g),
    style: f,
    "data-col": s.name,
    ...h
  }, b);
}
function Wt({ col: s, children: t, ...e }) {
  let { sortType: n } = s.setting;
  return n === !0 && (n = "none"), /* @__PURE__ */ S(Le, {
    col: s,
    "data-sort": n || null,
    "data-type": s.type,
    ...e
  }, s.setting.title, n && /* @__PURE__ */ S("div", {
    className: `dtable-sort dtable-sort-${n}`
  }), t);
}
function xe({ rowID: s, className: t, top: e = 0, left: n = 0, width: o, height: i, cols: l, data: c, CellComponent: h = Le, onRenderCell: p }) {
  return /* @__PURE__ */ S("div", {
    className: U("dtable-cells", t),
    style: { top: e, left: n, width: o, height: i }
  }, l.map((r) => r.visible ? /* @__PURE__ */ S(h, {
    key: r.name,
    col: r,
    rowData: c,
    rowID: s,
    onRenderCell: p
  }) : null));
}
function vt({
  rowID: s,
  className: t,
  top: e,
  height: n,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: l,
  flexLeftWidth: c,
  scrollWidth: h,
  scrollWidthTotal: p,
  flexRightWidth: r,
  scrollLeft: m,
  CellComponent: f = Le,
  onRenderCell: a,
  data: g
}) {
  let b = null;
  o != null && o.length && (b = /* @__PURE__ */ S(xe, {
    className: "dtable-fixed-left",
    cols: o,
    width: c,
    rowID: s,
    CellComponent: f,
    onRenderCell: a,
    data: g
  }));
  let u = null;
  l != null && l.length && (u = /* @__PURE__ */ S(xe, {
    className: "dtable-flexable",
    cols: l,
    left: c - m,
    width: p,
    rowID: s,
    CellComponent: f,
    onRenderCell: a,
    data: g
  }));
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ S(xe, {
    className: "dtable-fixed-right",
    cols: i,
    left: c + h,
    width: r,
    rowID: s,
    CellComponent: f,
    onRenderCell: a,
    data: g
  }));
  const E = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ S("div", {
    className: U("dtable-row", t),
    style: E,
    "data-id": s
  }, b, u, y);
}
function Dt({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Wt
  };
  return t && (n = t(n)), /* @__PURE__ */ S("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ S(vt, {
    ...n
  }));
}
function jt({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: o,
  rowHeight: i,
  onRenderRow: l,
  ...c
}) {
  return t = { ...t, top: e, height: o }, /* @__PURE__ */ S("div", {
    className: U("dtable-rows", s),
    style: t
  }, n.map((h) => {
    let p = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      rowID: h.data.id,
      data: h.data,
      top: h.top,
      height: i,
      ...c
    };
    return l && (p = l(p, h)), /* @__PURE__ */ S(vt, {
      ...p
    });
  }));
}
const ve = /* @__PURE__ */ new Map();
function wt(s, t = !1) {
  if (!t && ve.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  ve.set(s.name, s);
}
function Pt(s) {
  return ve.get(s);
}
function St(s) {
  return ve.delete(s);
}
function It(s) {
  var e;
  if (!((e = s == null ? void 0 : s.plugins) != null && e.length))
    return [];
  const { plugins: t } = s;
  return t.reduce((n, o) => {
    let i;
    return typeof o == "string" ? (i = Pt(o), i || console.warn(`DTable: Cannot found plugin "${o}"`)) : typeof o == "function" ? i = o.plugin : typeof o == "object" ? i = o : console.warn("DTable: Invalid plugin", o), i && (!i.when || i.when(s)) && n.push(i), n;
  }, []);
}
function Ot(s, t) {
  return s.reduce((e, n) => {
    const { options: o, defaultOptions: i } = n;
    return Object.assign(e, i), t && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, t);
}
function He() {
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
var J, P, M, K, C, Q;
class Ce extends Z {
  constructor(e) {
    super(e);
    w(this, "ref", ft());
    H(this, J, 0);
    H(this, P, !1);
    H(this, M, void 0);
    H(this, K, void 0);
    H(this, C, []);
    H(this, Q, void 0);
    w(this, "_handleResize", () => {
      _(this, J) && cancelAnimationFrame(_(this, J)), $(this, J, requestAnimationFrame(() => {
        this.forceUpdate(), $(this, J, 0);
      }));
    });
    w(this, "_handleRenderRow", (e, n) => (_(this, M).onRenderRow && (e = _(this, M).onRenderRow.call(this, e, n)), _(this, C).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, n));
    }), e));
    w(this, "_handleRenderHeaderRow", (e) => (_(this, M).onRenderHeaderRow && (e = _(this, M).onRenderHeaderRow.call(this, e)), _(this, C).forEach((n) => {
      n.onRenderHeaderRow && (e = n.onRenderHeaderRow.call(this, e));
    }), e));
    w(this, "_handleRenderCell", (e, n, o, i) => (_(this, M).onRenderCell && (e = _(this, M).onRenderCell.call(this, e, n, o, i)), _(this, C).forEach((l) => {
      l.onRenderCell && (e = l.onRenderCell.call(this, e, n, o, i));
    }), e));
    w(this, "_handleScroll", (e, n) => {
      n === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    w(this, "_handleClick", (e) => {
      var h, p, r, m, f, a, g;
      const n = e.target;
      if (!n)
        return;
      const o = n.closest(".dtable-row");
      if (!o)
        return;
      const i = n.closest(".dtable-cell"), l = (h = i == null ? void 0 : i.getAttribute("data-col")) != null ? h : "", c = (p = o.getAttribute("data-id")) != null ? p : "";
      if (c === "HEADER")
        i && ((r = _(this, M).onHeaderCellClick) == null || r.call(this, e, { colName: l, element: i }), _(this, C).forEach((b) => {
          var u;
          (u = b.onHeaderCellClick) == null || u.call(this, e, { colName: l, element: i });
        }));
      else {
        const b = (m = _(this, Q)) == null ? void 0 : m.visibleRows.find((u) => u.data.id === c);
        if (i) {
          if (((f = _(this, M).onCellClick) == null ? void 0 : f.call(this, e, { colName: l, rowID: c, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          if (_(this, C).length) {
            for (const u of _(this, C))
              if (((a = u.onCellClick) == null ? void 0 : a.call(this, e, { colName: l, rowID: c, rowInfo: b, element: i, rowElement: o })) === !0)
                return;
          }
        }
        (g = _(this, M).onRowClick) == null || g.call(this, e, { rowID: c, rowInfo: b, element: o }), _(this, C).forEach((u) => {
          var y;
          (y = u.onRowClick) == null || y.call(this, e, { rowID: c, rowInfo: b, element: o });
        });
      }
    });
    this.state = { scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {} };
    const n = { ...He(), ...e };
    $(this, M, Object.freeze(n)), $(this, K, Object.freeze(It(n))), _(this, K).forEach((o) => {
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
    _(this, P) ? this.forceUpdate() : this._afterRender(), (e = this.ref.current) == null || e.addEventListener("click", this._handleClick), _(this, M).responsive && window.addEventListener("resize", this._handleResize), _(this, C).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    _(this, P) && this._afterRender();
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
    var Oe, Ue, Fe;
    const e = He(), n = { ...e, ...this.props }, o = _(this, K).filter((d) => !d.when || d.when(n)), i = Ot(o, n);
    $(this, C, Object.freeze(o)), o.forEach((d) => {
      var A;
      const v = (A = d.beforeLayout) == null ? void 0 : A.call(this, i);
      v && Object.assign(i, v);
    }), $(this, M, Object.freeze(i));
    const {
      data: l,
      header: c,
      footer: h,
      rowHeight: p = e.rowHeight,
      defaultColWidth: r = e.minColWidth,
      minColWidth: m = e.minColWidth,
      maxColWidth: f = e.maxColWidth
    } = i, { scrollTop: a = 0, scrollLeft: g = 0, hiddenRows: b = {}, hiddenCols: u = {} } = this.state, y = c ? i.headerHeight || p : 0, E = h ? i.footerHeight || p : 0, W = (d, v, A) => (d && (v && (d = Math.max(v, d)), A && (d = Math.min(A, d))), d), ne = [], F = [], x = [];
    let L = 0, ie = 0;
    (Oe = i.cols) == null || Oe.forEach((d) => {
      var Ye, Be, qe;
      if (d.hidden || u[d.name])
        return;
      const { minWidth: v = m, maxWidth: A = f } = d, le = W((Ye = d.width) != null ? Ye : 0, v, A), ae = (Be = d.flex) != null ? Be : 1, kt = ae * W(r, v, A), j = {
        name: d.name,
        type: (qe = d.type) != null ? qe : "",
        setting: d,
        left: 0,
        flex: ae,
        realWidth: le,
        flexWidth: kt,
        visible: !0
      };
      d.fixed === "left" ? (j.left = L, L += le, ne.push(j)) : d.fixed === "right" ? (j.left = ie, ie += le, F.push(j)) : x.push(j), o.forEach((Mt) => {
        var Xe, Je;
        const ue = (Je = Mt.colTypes) == null ? void 0 : Je[(Xe = d.type) != null ? Xe : ""];
        if (!ue)
          return;
        const Ge = typeof ue == "function" ? ue(j) : ue;
        if (Ge) {
          const { setting: Ve, ...$t } = Ge;
          Object.assign(j, $t), Ve && Object.assign(j.setting, Ve);
        }
      });
    });
    let D = i.width, Y = 0;
    if (typeof D == "function" && (D = D()), D === "auto")
      Y = L + ie, x.forEach((d) => {
        d.realWidth || (d.realWidth = d.flexWidth), Y += d.realWidth;
      });
    else if (D === "100%") {
      const d = (Ue = this.ref.current) == null ? void 0 : Ue.parentElement;
      if (d)
        Y = d.clientWidth;
      else {
        Y = 0, $(this, P, !0);
        return;
      }
    } else
      Y = D != null ? D : 0;
    let oe = 0;
    const Ne = [], re = [], Te = (d) => {
      const v = { data: d, top: oe, id: d.id, index: re.length };
      Ne.push(v), b[v.id] || re.push(v), oe += p;
    };
    if (Array.isArray(l))
      l.forEach(Te);
    else if (l != null && l.length) {
      const d = typeof l.length == "function" ? l.length() : l.length;
      for (let v = 0; v < d; v++)
        Te(l.getItem(v));
    }
    let T = i.height, B = 0;
    if (typeof T == "function" && (T = T()), T === "auto")
      B = y + E + oe;
    else if (typeof T == "object")
      B = Math.min(T.max, Math.max(T.min, y + E + oe));
    else if (T === "100%") {
      const d = (Fe = this.ref.current) == null ? void 0 : Fe.parentElement;
      if (d)
        B = d.clientHeight;
      else {
        B = 0, $(this, P, !0);
        return;
      }
    } else
      B = T;
    const ze = B - y - E, We = a + ze, De = [], Me = Y - L - ie;
    let q = 0;
    const $e = [];
    let je = 0;
    if (x.forEach((d) => {
      d.realWidth ? q += d.realWidth : ($e.push(d), je += d.flex);
    }), $e.length) {
      const d = Math.max(0, Me - q);
      $e.forEach((v) => {
        var ae;
        const { minWidth: A = m, maxWidth: le = f } = v.setting;
        v.realWidth = Math.min(le, Math.max(A, Math.ceil(d * ((ae = v.flex) != null ? ae : 1) / je))), q += v.realWidth;
      });
    }
    q = 0, x.forEach((d) => {
      d.left += q, q += d.realWidth, (d.left + d.realWidth < g || d.left > g + Me) && (d.visible = !1);
    });
    const Pe = Math.floor(a / p), Ie = Math.min(re.length, Math.ceil(We / p));
    for (let d = Pe; d < Ie; d++) {
      const v = re[d];
      v.top -= a, De.push(v);
    }
    let V = {
      allRows: Ne,
      width: Y,
      height: B,
      rows: re,
      visibleRows: De,
      rowHeight: p,
      rowsHeight: ze,
      rowsHeightTotal: oe,
      header: c,
      footer: h,
      headerHeight: y,
      footerHeight: E,
      colsInfo: {
        fixedLeftCols: ne,
        fixedRightCols: F,
        scrollCols: x,
        flexLeftWidth: L,
        scrollWidth: Me,
        scrollWidthTotal: q,
        flexRightWidth: ie
      },
      scrollBottom: We,
      scrollTop: a,
      scrollLeft: g,
      startRowIndex: Pe,
      endRowIndex: Ie
    };
    if (i.onLayout) {
      const d = i.onLayout.call(this, V);
      d && (V = d);
    }
    return o.forEach((d) => {
      if (d.onLayout) {
        const v = d.onLayout.call(this, V);
        v && (V = v);
      }
    }), $(this, Q, Object.freeze(V)), V;
  }
  renderHeader(e) {
    const { header: n, colsInfo: o, headerHeight: i } = e;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ S(Dt, {
        scrollLeft: this.state.scrollLeft,
        height: i,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...o
      });
    let l, c;
    if (typeof n == "function") {
      const h = n(e, this.state);
      typeof h == "object" && h && "__html" in h ? c = h : l = h;
    } else
      l = n;
    return /* @__PURE__ */ S("div", {
      className: "dtable-header",
      style: { height: i },
      dangerouslySetInnerHTML: c
    }, l);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: o, visibleRows: i, rowHeight: l, colsInfo: c } = e;
    return /* @__PURE__ */ S(jt, {
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
    return /* @__PURE__ */ S("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: l
    }, i);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: o, colsInfo: i, scrollTop: l, rowsHeight: c, rowsHeightTotal: h } = e, { scrollWidthTotal: p, scrollWidth: r } = i, { scrollbarSize: m = 10, horzScrollbarPos: f } = this.props;
    return p > r && n.push(/* @__PURE__ */ S(lt, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: p,
      clientSize: r,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: f === "inside" ? 0 : -m,
      size: m,
      wheelContainer: ".dtable"
    })), h > c && n.push(/* @__PURE__ */ S(lt, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: h,
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
    $(this, P, !1), (e = _(this, M).afterRender) == null || e.call(this), _(this, C).forEach((n) => {
      var o;
      return (o = n.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var m, f;
    const e = this.getLayout(), { className: n, rowHover: o, colHover: i, cellHover: l, bordered: c, striped: h, scrollbarHover: p } = (m = _(this, M)) != null ? m : this.props, r = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ S("div", {
      className: U("dtable", n, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": l,
        "dtable-bordered": c,
        "dtable-striped": h,
        "dtable-scrolled-down": ((f = e == null ? void 0 : e.scrollTop) != null ? f : 0) > 0,
        "scrollbar-hover": p
      }),
      style: r,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
J = new WeakMap(), P = new WeakMap(), M = new WeakMap(), K = new WeakMap(), C = new WeakMap(), Q = new WeakMap(), w(Ce, "addPlugin", wt), w(Ce, "removePlugin", St);
class at {
  constructor(t, e) {
    w(this, "element");
    w(this, "options");
    w(this, "ref", ft());
    var n;
    this.element = t, this.options = { ...He(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  render(t) {
    this.options = Object.assign(this.options, t), zt(/* @__PURE__ */ S(Ce, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
w(at, "addPlugin", wt), w(at, "removePlugin", St);
let Ut = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var de, I, N, ee, te, ge;
const Ae = class {
  constructor(t, e = "local") {
    H(this, te);
    H(this, de, void 0);
    H(this, I, void 0);
    H(this, N, void 0);
    H(this, ee, void 0);
    $(this, de, e), $(this, I, `ZUI_STORE:${t != null ? t : Ut()}`), $(this, N, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return _(this, de);
  }
  get session() {
    return this.type === "session" ? this : (_(this, ee) || $(this, ee, new Ae(_(this, I), "session")), _(this, ee));
  }
  get(t, e) {
    const n = _(this, N).getItem(_e(this, te, ge).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    _(this, N).setItem(_e(this, te, ge).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    _(this, N).removeItem(_e(this, te, ge).call(this, t));
  }
  each(t) {
    for (let e = 0; e < _(this, N).length; e++) {
      const n = _(this, N).key(e);
      if (n != null && n.startsWith(_(this, I))) {
        const o = _(this, N).getItem(n);
        typeof o == "string" && t(n.substring(_(this, I).length + 1), JSON.parse(o));
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
let we = Ae;
de = new WeakMap(), I = new WeakMap(), N = new WeakMap(), ee = new WeakMap(), te = new WeakSet(), ge = function(t) {
  return `${_(this, I)}:${t}`;
};
const Ft = new we("DEFAULT");
function Yt(s, t = "local") {
  return new we(s, t);
}
Object.assign(Ft, { create: Yt });
export {
  at as DTable,
  lt as Scrollbar,
  z as TIME_DAY,
  tt as calculateTimestamp,
  U as classes,
  R as createDate,
  Gt as domReady,
  et as formatDate,
  Qt as formatDateSpan,
  es as getTimeBeforeDesc,
  Kt as isDBY,
  fe as isSameDay,
  Rt as isSameMonth,
  Xt as isSameWeek,
  Qe as isSameYear,
  Jt as isToday,
  Zt as isTomorrow,
  Vt as isYesterday,
  qt as selectText,
  Ft as store
};
