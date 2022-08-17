var Me = Object.defineProperty;
var Ee = (s, e, t) => e in s ? Me(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => (Ee(s, typeof e != "symbol" ? e + "" : e, t), t), xt = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var _ = (s, e, t) => (xt(s, e, "read from private field"), t ? t.call(s) : e.get(s)), H = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, E = (s, e, t, n) => (xt(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var ut = (s, e, t) => (xt(s, e, "access private method"), t);
const $e = (s) => {
  const e = {};
  if (!s)
    return e;
  const t = Object.values(s.attributes);
  return t && t.length > 0 && t.forEach((n) => {
    const { name: i, value: o } = n;
    e[i] = o;
  }), e;
};
class xe extends HTMLElement {
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
    const t = $e(this);
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
customElements.get("zui-button") || customElements.define("zui-button", xe);
var J, at;
class Kt {
  constructor(e) {
    H(this, J, void 0);
    H(this, at, void 0);
    var t;
    E(this, J, e), E(this, at, e.nextElementSibling), ((t = _(this, J).dataset) == null ? void 0 : t.toggle) === "dropdown" && !_(this, J).parentElement.className.includes("dropdown-hover") && this.toggle(_(this, J).parentElement, _(this, at));
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
J = new WeakMap(), at = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Kt(s.target) : new Kt(s).clearMenu());
});
class Qt {
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
    let e = 17;
    typeof window.innerWidth == "number" && (e = window.innerWidth - document.body.clientWidth), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${e}px`, document.body.classList.add("modal-open");
  }
  unlockScroll() {
    document.body.style.overflow = "", document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
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
    var h;
    if (clearTimeout(this.reposTask), t) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, e, 0), t);
      return;
    }
    if (e === void 0 && (e = this.options.position), e == null)
      return;
    const n = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!n)
      return;
    const i = window.innerHeight, o = Math.max(0, (i - n.clientHeight) / 2);
    let l = null;
    if (e === "fit" ? l = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : e === "center" ? l = `${o}px` : this.isPlainObject(e) || (l = e), n.setAttribute("style", `top: ${l}`), n.className.includes("-fullscreen")) {
      let c = null;
      if (((h = n.childNodes) == null ? void 0 : h.length) && n.childNodes.length === 1 ? c = n.childNodes[0] : c = n.childNodes[1], c) {
        const g = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], m = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, f = i - g - m, d = r && r.scrollHeight > f ? "auto" : "visible";
        r && r.setAttribute("style", `max-height:${f}px;overflow:${d}`);
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
      let i = s.target.dataset.target;
      if (s.target.localName === "a") {
        const h = ((t = s.target) == null ? void 0 : t.href) || "";
        i = h && h.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), l = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new Qt(o, l);
    } else
      s.target.parentElement.className.includes("modal") || new Qt(s, { type: "hide" }).onClear();
});
function Ye(s) {
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
function Be(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const B = (...s) => s.map((e) => Array.isArray(e) ? B(...e) : typeof e == "function" ? B(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const n = e[t];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" "), j = 24 * 60 * 60 * 1e3, A = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ht = (s, e = new Date()) => (s = A(s), e = A(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()), te = (s, e = new Date()) => A(s).getFullYear() === A(e).getFullYear(), Ce = (s, e = new Date()) => (s = A(s), e = A(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), qe = (s, e = new Date()) => {
  s = A(s), e = A(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Ge = (s, e) => ht(A(e), s), Xe = (s, e) => ht(A(e).getTime() - j, s), Je = (s, e) => ht(A(e).getTime() + j, s), Ve = (s, e) => ht(A(e).getTime() - 2 * j, s), ee = (s, e = "yyyy-MM-dd hh:mm") => {
  s = A(s);
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
      const i = `${t[n]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, Ze = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = ee(s, te(s) ? n.month : n.full);
  if (ht(s, e))
    return i;
  const o = ee(e, te(s, e) ? Ce(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
}, Ke = (s) => {
  const e = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return e - j * 7;
    case "oneMonth":
      return e - j * 31;
    case "threeMonth":
      return e - j * 31 * 3;
    case "halfYear":
      return e - j * 183;
    case "oneYear":
      return e - j * 365;
    case "twoYear":
      return e - 2 * (j * 365);
    default:
      return 0;
  }
}, se = (s, e, t = !0, n = Date.now()) => {
  switch (e) {
    case "year":
      return s *= 365, se(s, "day", t, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, se(s, "day", t, n);
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
var wt, k, he, lt, ne, gt = {}, de = [], He = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Y(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function fe(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function S(s, e, t) {
  var n, i, o, l = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? i = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? wt.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      l[o] === void 0 && (l[o] = s.defaultProps[o]);
  return _t(s, l, n, i, null);
}
function _t(s, e, t, n, i) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++he : i };
  return i == null && k.vnode != null && k.vnode(o), o;
}
function ue() {
  return { current: null };
}
function St(s) {
  return s.children;
}
function et(s, e) {
  this.props = s, this.context = e;
}
function it(s, e) {
  if (e == null)
    return s.__ ? it(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? it(s) : null;
}
function _e(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return _e(s);
  }
}
function oe(s) {
  (!s.__d && (s.__d = !0) && lt.push(s) && !mt.__r++ || ne !== k.debounceRendering) && ((ne = k.debounceRendering) || setTimeout)(mt);
}
function mt() {
  for (var s; mt.__r = lt.length; )
    s = lt.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), lt = [], s.some(function(e) {
      var t, n, i, o, l, h;
      e.__d && (l = (o = (t = e).__v).__e, (h = t.__P) && (n = [], (i = Y({}, o)).__v = o.__v + 1, Lt(h, o, i, t.__n, h.ownerSVGElement !== void 0, o.__h != null ? [l] : null, n, l == null ? it(o) : l, o.__h), be(n, o), o.__e != l && _e(o)));
    });
}
function pe(s, e, t, n, i, o, l, h, c, g) {
  var r, m, f, d, p, v, u, y = n && n.__k || de, C = y.length;
  for (t.__k = [], r = 0; r < e.length; r++)
    if ((d = t.__k[r] = (d = e[r]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? _t(null, d, null, null, d) : Array.isArray(d) ? _t(St, { children: d }, null, null, null) : d.__b > 0 ? _t(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = y[r]) === null || f && d.key == f.key && d.type === f.type)
        y[r] = void 0;
      else
        for (m = 0; m < C; m++) {
          if ((f = y[m]) && d.key == f.key && d.type === f.type) {
            y[m] = void 0;
            break;
          }
          f = null;
        }
      Lt(s, d, f = f || gt, i, o, l, h, c, g), p = d.__e, (m = d.ref) && f.ref != m && (u || (u = []), f.ref && u.push(f.ref, null, d), u.push(m, d.__c || p, d)), p != null ? (v == null && (v = p), typeof d.type == "function" && d.__k === f.__k ? d.__d = c = ge(d, c, s) : c = me(s, d, f, y, p, c), typeof t.type == "function" && (t.__d = c)) : c && f.__e == c && c.parentNode != s && (c = it(f));
    }
  for (t.__e = v, r = C; r--; )
    y[r] != null && (typeof t.type == "function" && y[r].__e != null && y[r].__e == t.__d && (t.__d = it(n, r + 1)), ve(y[r], y[r]));
  if (u)
    for (r = 0; r < u.length; r++)
      ye(u[r], u[++r], u[++r]);
}
function ge(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? ge(n, e, t) : me(t, n, n, i, n.__e, e));
  return e;
}
function me(s, e, t, n, i, o) {
  var l, h, c;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== s)
        s.appendChild(i), l = null;
      else {
        for (h = o, c = 0; (h = h.nextSibling) && c < n.length; c += 2)
          if (h == i)
            break t;
        s.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Re(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || bt(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || bt(s, o, e[o], t[o], n);
}
function ie(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t) : s[e] = t == null ? "" : typeof t != "number" || He.test(e) ? t : t + "px";
}
function bt(s, e, t, n, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || ie(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || ie(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? le : re, o) : s.removeEventListener(e, o ? le : re, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function re(s) {
  this.l[s.type + !1](k.event ? k.event(s) : s);
}
function le(s) {
  this.l[s.type + !0](k.event ? k.event(s) : s);
}
function Lt(s, e, t, n, i, o, l, h, c) {
  var g, r, m, f, d, p, v, u, y, C, I, P, N, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, h = e.__e = t.__e, e.__h = null, o = [h]), (g = k.__b) && g(e);
  try {
    t:
      if (typeof $ == "function") {
        if (u = e.props, y = (g = $.contextType) && n[g.__c], C = g ? y ? y.props.value : g.__ : n, t.__c ? v = (r = e.__c = t.__c).__ = r.__E : ("prototype" in $ && $.prototype.render ? e.__c = r = new $(u, C) : (e.__c = r = new et(u, C), r.constructor = $, r.render = Ae), y && y.sub(r), r.props = u, r.state || (r.state = {}), r.context = C, r.__n = n, m = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), $.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = Y({}, r.__s)), Y(r.__s, $.getDerivedStateFromProps(u, r.__s))), f = r.props, d = r.state, m)
          $.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && u !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(u, C), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(u, r.__s, C) === !1 || e.__v === t.__v) {
            r.props = u, r.state = r.__s, e.__v !== t.__v && (r.__d = !1), r.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(L) {
              L && (L.__ = e);
            }), r.__h.length && l.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(u, r.__s, C), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(f, d, p);
          });
        }
        if (r.context = C, r.props = u, r.__v = e, r.__P = s, I = k.__r, P = 0, "prototype" in $ && $.prototype.render)
          r.state = r.__s, r.__d = !1, I && I(e), g = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, I && I(e), g = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++P < 25);
        r.state = r.__s, r.getChildContext != null && (n = Y(Y({}, n), r.getChildContext())), m || r.getSnapshotBeforeUpdate == null || (p = r.getSnapshotBeforeUpdate(f, d)), N = g != null && g.type === St && g.key == null ? g.props.children : g, pe(s, Array.isArray(N) ? N : [N], e, t, n, i, o, l, h, c), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), v && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Le(t.__e, e, t, n, i, o, l, c);
    (g = k.diffed) && g(e);
  } catch (L) {
    e.__v = null, (c || o != null) && (e.__e = h, e.__h = !!c, o[o.indexOf(h)] = null), k.__e(L, e, t);
  }
}
function be(s, e) {
  k.__c && k.__c(e, s), s.some(function(t) {
    try {
      s = t.__h, t.__h = [], s.some(function(n) {
        n.call(t);
      });
    } catch (n) {
      k.__e(n, t.__v);
    }
  });
}
function Le(s, e, t, n, i, o, l, h) {
  var c, g, r, m = t.props, f = e.props, d = e.type, p = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((c = o[p]) && "setAttribute" in c == !!d && (d ? c.localName === d : c.nodeType === 3)) {
        s = c, o[p] = null;
        break;
      }
  }
  if (s == null) {
    if (d === null)
      return document.createTextNode(f);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, h = !1;
  }
  if (d === null)
    m === f || h && s.data === f || (s.data = f);
  else {
    if (o = o && wt.call(s.childNodes), g = (m = t.props || gt).dangerouslySetInnerHTML, r = f.dangerouslySetInnerHTML, !h) {
      if (o != null)
        for (m = {}, p = 0; p < s.attributes.length; p++)
          m[s.attributes[p].name] = s.attributes[p].value;
      (r || g) && (r && (g && r.__html == g.__html || r.__html === s.innerHTML) || (s.innerHTML = r && r.__html || ""));
    }
    if (Re(s, f, m, i, h), r)
      e.__k = [];
    else if (p = e.props.children, pe(s, Array.isArray(p) ? p : [p], e, t, n, i && d !== "foreignObject", o, l, o ? o[0] : t.__k && it(t, 0), h), o != null)
      for (p = o.length; p--; )
        o[p] != null && fe(o[p]);
    h || ("value" in f && (p = f.value) !== void 0 && (p !== s.value || d === "progress" && !p || d === "option" && p !== m.value) && bt(s, "value", p, m.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== s.checked && bt(s, "checked", p, m.checked, !1));
  }
  return s;
}
function ye(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    k.__e(n, t);
  }
}
function ve(s, e, t) {
  var n, i;
  if (k.unmount && k.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || ye(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        k.__e(o, e);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && ve(n[i], e, typeof s.type != "function");
  t || s.__e == null || fe(s.__e), s.__e = s.__d = void 0;
}
function Ae(s, e, t) {
  return this.constructor(s, t);
}
function Ne(s, e, t) {
  var n, i, o;
  k.__ && k.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], Lt(e, s = (!n && t || e).__k = S(St, null, [s]), i || gt, gt, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? wt.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n), be(o, s);
}
wt = de.slice, k = { __e: function(s, e, t, n) {
  for (var i, o, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), l = i.__d), l)
          return i.__E = i;
      } catch (h) {
        s = h;
      }
  throw s;
} }, he = 0, et.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof s == "function" && (s = s(Y({}, t), this.props)), s && Y(t, s), s != null && this.__v && (e && this.__h.push(e), oe(this));
}, et.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), oe(this));
}, et.prototype.render = St, lt = [], mt.__r = 0;
var V;
class ae extends et {
  constructor(t) {
    var n;
    super(t);
    H(this, V, 0);
    w(this, "_handleWheel", (t) => {
      var i, o, l;
      !((o = t.target) != null && o.closest((i = this.props.wheelContainer) != null ? i : ".-scrollbar-container")) || (t.preventDefault(), this.scrollOffset((this.props.type === "horz" ? t.deltaX : t.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    w(this, "_handleMouseMove", (t) => {
      const { dragStart: n } = this.state;
      n && (_(this, V) && cancelAnimationFrame(_(this, V)), E(this, V, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - n.x : t.clientY - n.y;
        this.scroll(n.offset + i * this.props.scrollSize / this.props.clientSize), E(this, V, 0);
      })), t.preventDefault());
    });
    w(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    w(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    w(this, "_handleClick", (t) => {
      const n = t.currentTarget;
      if (!n)
        return;
      const i = n.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: h } = this.props, c = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(c * h / l);
    });
    this.state = {
      scrollPos: (n = this.props.defaultScrollPos) != null ? n : 0,
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
    const { scrollSize: t, clientSize: n } = this.props;
    return Math.max(0, t - n);
  }
  get barSize() {
    const { clientSize: t, scrollSize: n, size: i = 10 } = this.props;
    return Math.max(Math.round(t * t / n), i);
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
    t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t !== this.scrollPos && (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)));
  }
  scrollOffset(t) {
    this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    var i;
    const { onScroll: n } = this.props;
    n && n(t, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      scrollSize: t,
      clientSize: n,
      type: i,
      size: o = 10,
      className: l,
      style: h,
      left: c,
      top: g,
      bottom: r,
      right: m
    } = this.props, { maxScrollPos: f, scrollPos: d } = this, { dragStart: p } = this.state, v = {
      left: c,
      top: g,
      bottom: r,
      right: m,
      ...h
    }, u = {};
    return i === "horz" ? (v.height = o, v.width = n, u.width = Math.max(Math.round(n * n / t), o), u.left = Math.round(d * (n - u.width) / f)) : (v.width = o, v.height = n, u.height = this.barSize, u.top = Math.round(d * (n - u.height) / f)), /* @__PURE__ */ S("div", {
      className: B("scrollbar", l, {
        "is-vert": i === "vert",
        "is-horz": i === "horz",
        "is-dragging": p
      }),
      style: v,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ S("div", {
      className: "scrollbar-bar",
      style: u,
      onMouseDown: this._handleMouseDown
    }));
  }
}
V = new WeakMap();
function At({ col: s, className: e, height: t, rowID: n, rowData: i, onRenderCell: o, style: l, children: h, ...c }) {
  const { cellStyle: g, align: r, className: m } = s.setting, f = {
    left: s.left,
    width: s.realWidth,
    height: t,
    ...l,
    ...g
  };
  r && (f.textAlign = r);
  let d = [
    h != null ? h : i == null ? void 0 : i[s.name]
  ];
  o && (d = o(d, n, s, i));
  const p = [], v = [];
  return d == null || d.forEach((u) => {
    typeof u == "object" && u && ("style" in u || "className" in u || "style" in u) ? (u.html && v.push(/* @__PURE__ */ S("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: u.html }
    })), u.style && Object.assign(f, u.style), u.className && p.push(u.className)) : v.push(u);
  }), /* @__PURE__ */ S("div", {
    className: B("dtable-cell", e, m, p),
    style: f,
    "data-col": s.name,
    ...c
  }, v);
}
function Te({ col: s, children: e, ...t }) {
  let { sortType: n } = s.setting;
  return n === !0 && (n = "none"), /* @__PURE__ */ S(At, {
    col: s,
    "data-sort": n || null,
    "data-type": s.type,
    ...t
  }, s.setting.title, n && /* @__PURE__ */ S("div", {
    className: `dtable-sort dtable-sort-${n}`
  }), e);
}
function Ct({ rowID: s, className: e, top: t = 0, left: n = 0, width: i, height: o, cols: l, data: h, CellComponent: c = At, onRenderCell: g }) {
  return /* @__PURE__ */ S("div", {
    className: B("dtable-cells", e),
    style: { top: t, left: n, width: i, height: o }
  }, l.map((r) => r.visible ? /* @__PURE__ */ S(c, {
    key: r.name,
    col: r,
    rowData: h,
    rowID: s,
    onRenderCell: g
  }) : null));
}
function we({
  rowID: s,
  className: e,
  top: t,
  height: n,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: h,
  scrollWidth: c,
  scrollWidthTotal: g,
  flexRightWidth: r,
  scrollLeft: m,
  CellComponent: f = At,
  onRenderCell: d,
  data: p
}) {
  let v = null;
  i != null && i.length && (v = /* @__PURE__ */ S(Ct, {
    className: "dtable-fixed-left",
    cols: i,
    width: h,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  let u = null;
  l != null && l.length && (u = /* @__PURE__ */ S(Ct, {
    className: "dtable-flexable",
    cols: l,
    left: h - m,
    width: g,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ S(Ct, {
    className: "dtable-fixed-right",
    cols: o,
    left: h + c,
    width: r,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  const C = { top: t, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ S("div", {
    className: B("dtable-row", e),
    style: C,
    "data-id": s
  }, v, u, y);
}
function ze({ height: s, onRenderRow: e, ...t }) {
  let n = {
    height: s,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: Te
  };
  return e && (n = e(n)), /* @__PURE__ */ S("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ S(we, {
    ...n
  }));
}
function We({
  className: s,
  style: e,
  top: t,
  rows: n,
  height: i,
  rowHeight: o,
  onRenderRow: l,
  ...h
}) {
  return e = { ...e, top: t, height: i }, /* @__PURE__ */ S("div", {
    className: B("dtable-rows", s),
    style: e
  }, n.map((c) => {
    let g = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.data.id,
      data: c.data,
      top: c.top,
      height: o,
      ...h
    };
    return l && (g = l(g, c)), /* @__PURE__ */ S(we, {
      ...g
    });
  }));
}
const yt = /* @__PURE__ */ new Map();
function Se(s, e = !1) {
  if (!e && yt.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  yt.set(s.name, s);
}
function De(s) {
  return yt.get(s);
}
function ke(s) {
  return yt.delete(s);
}
function je(s) {
  var t;
  if (!((t = s == null ? void 0 : s.plugins) != null && t.length))
    return [];
  const { plugins: e } = s;
  return e.reduce((n, i) => {
    let o;
    return typeof i == "string" ? (o = De(i), o || console.warn(`DTable: Cannot found plugin "${i}"`)) : typeof i == "function" ? o = i.plugin : typeof i == "object" ? o = i : console.warn("DTable: Invalid plugin", i), o && n.push(o), n;
  }, []);
}
function Ie(s, e) {
  return s.reduce((t, n) => {
    const { options: i, defaultOptions: o } = n;
    return o && (t = { ...o, ...t }), i && Object.assign(t, typeof i == "function" ? i(t) : i), t;
  }, e);
}
function Ht() {
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
var Z, O, M, K, R, st;
class Rt extends et {
  constructor(t) {
    super(t);
    w(this, "ref", ue());
    H(this, Z, 0);
    H(this, O, !1);
    H(this, M, void 0);
    H(this, K, void 0);
    H(this, R, []);
    H(this, st, void 0);
    w(this, "_handleResize", () => {
      _(this, Z) && cancelAnimationFrame(_(this, Z)), E(this, Z, requestAnimationFrame(() => {
        this.forceUpdate(), E(this, Z, 0);
      }));
    });
    w(this, "_handleRenderRow", (t, n) => (_(this, M).onRenderRow && (t = _(this, M).onRenderRow.call(this, t, n)), _(this, R).forEach((i) => {
      i.onRenderRow && (t = i.onRenderRow.call(this, t, n));
    }), t));
    w(this, "_handleRenderHeaderRow", (t) => (_(this, M).onRenderHeaderRow && (t = _(this, M).onRenderHeaderRow.call(this, t)), _(this, R).forEach((n) => {
      n.onRenderHeaderRow && (t = n.onRenderHeaderRow.call(this, t));
    }), t));
    w(this, "_handleRenderCell", (t, n, i, o) => {
      const l = n === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return i.setting[l] && (t = i.setting[l].call(this, t, n, i, o)), _(this, M)[l] && (t = _(this, M)[l].call(this, t, n, i, o)), _(this, R).forEach((h) => {
        h[l] && (t = h[l].call(this, t, n, i, o));
      }), t;
    });
    w(this, "_handleScroll", (t, n) => {
      n === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, "_handleClick", (t) => {
      var c, g, r, m, f, d, p, v;
      const n = t.target;
      if (!n)
        return;
      const i = n.closest(".dtable-row");
      if (!i)
        return;
      const o = n.closest(".dtable-cell"), l = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "", h = (g = i.getAttribute("data-id")) != null ? g : "";
      if (h === "HEADER")
        o && ((r = _(this, M).onHeaderCellClick) == null || r.call(this, t, { colName: l, element: o }), _(this, R).forEach((u) => {
          var y;
          (y = u.onHeaderCellClick) == null || y.call(this, t, { colName: l, element: o });
        }));
      else {
        const u = (m = _(this, st)) == null ? void 0 : m.visibleRows.find((y) => y.data.id === h);
        if (o) {
          if (((f = _(this, M).onCellClick) == null ? void 0 : f.call(this, t, { colName: l, rowID: h, rowInfo: u, element: o, rowElement: i })) === !0)
            return;
          for (const y of _(this, R))
            if (((d = y.onCellClick) == null ? void 0 : d.call(this, t, { colName: l, rowID: h, rowInfo: u, element: o, rowElement: i })) === !0)
              return;
        }
        if (((p = _(this, M).onRowClick) == null ? void 0 : p.call(this, t, { rowID: h, rowInfo: u, element: i })) === !0)
          return;
        for (const y of _(this, R))
          if (((v = y.onRowClick) == null ? void 0 : v.call(this, t, { rowID: h, rowInfo: u, element: i })) === !0)
            return;
      }
    });
    this.state = { scrollTop: 0, scrollLeft: 0, hiddenCols: {} };
    const n = { ...Ht(), ...t };
    E(this, M, Object.freeze(n)), E(this, K, Object.freeze(je(n))), _(this, K).forEach((i) => {
      var o;
      (o = i.onCreate) == null || o.call(this, i);
    });
  }
  get options() {
    return _(this, M);
  }
  get plugins() {
    return _(this, R);
  }
  get layout() {
    return _(this, st);
  }
  componentDidMount() {
    var t;
    _(this, O) ? this.forceUpdate() : this._afterRender(), (t = this.ref.current) == null || t.addEventListener("click", this._handleClick), _(this, M).responsive && window.addEventListener("resize", this._handleResize), _(this, R).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    _(this, O) && this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.ref.current) == null || t.removeEventListener("click", this._handleClick), window.removeEventListener("resize", this._handleResize), _(this, R).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    });
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var n;
      (n = _(this, M).onScroll) == null || n.call(this, t, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var n;
      (n = _(this, M).onScroll) == null || n.call(this, t, "vert");
    });
  }
  getLayout() {
    var Ut, Ot, Ft;
    const t = Ht(), n = Ie(_(this, K), { ...t, ...this.props }), i = _(this, K).filter((a) => !a.when || a.when(n));
    E(this, R, Object.freeze(i)), i.forEach((a) => {
      var x;
      const b = (x = a.beforeLayout) == null ? void 0 : x.call(this, n);
      b && Object.assign(n, b);
    }), E(this, M, Object.freeze(n));
    const {
      data: o,
      header: l,
      footer: h,
      rowHeight: c = t.rowHeight,
      defaultColWidth: g = t.minColWidth,
      minColWidth: r = t.minColWidth,
      maxColWidth: m = t.maxColWidth
    } = n, { scrollTop: f = 0, scrollLeft: d = 0, hiddenCols: p = {} } = this.state, v = l ? n.headerHeight || c : 0, u = h ? n.footerHeight || c : 0, y = (a, b, x) => (a && (b && (a = Math.max(b, a)), x && (a = Math.min(x, a))), a), C = [], I = [], P = [];
    let N = 0, $ = 0;
    (Ut = n.cols) == null || Ut.forEach((a) => {
      var Yt, Bt, qt;
      if (a.hidden || p[a.name])
        return;
      const { minWidth: b = r, maxWidth: x = m } = a, T = y((Yt = a.width) != null ? Yt : 0, b, x), U = (Bt = a.flex) != null ? Bt : 1, $t = U * y(g, b, x), tt = {
        name: a.name,
        type: (qt = a.type) != null ? qt : "",
        setting: a,
        left: 0,
        flex: U,
        realWidth: T,
        flexWidth: $t,
        visible: !0
      };
      a.fixed === "left" ? (tt.left = N, N += T, C.push(tt)) : a.fixed === "right" ? (tt.left = $, $ += T, I.push(tt)) : P.push(tt), i.forEach((Gt) => {
        var Xt, Jt, Vt;
        const ft = (Jt = Gt.colTypes) == null ? void 0 : Jt[(Xt = a.type) != null ? Xt : ""];
        if (ft) {
          const Zt = typeof ft == "function" ? ft(a) : ft;
          Zt && Object.assign(a, Zt);
        }
        (Vt = Gt.onAddCol) == null || Vt.call(this, tt);
      });
    });
    let L = n.width, q = 0;
    if (typeof L == "function" && (L = L()), L === "auto")
      q = N + $, P.forEach((a) => {
        a.realWidth || (a.realWidth = a.flexWidth), q += a.realWidth;
      });
    else if (L === "100%") {
      const a = (Ot = this.ref.current) == null ? void 0 : Ot.parentElement;
      if (a)
        q = a.clientWidth;
      else {
        q = 0, E(this, O, !0);
        return;
      }
    } else
      q = L != null ? L : 0;
    const dt = [], Tt = (a, b) => {
      var T, U;
      const x = { data: a, top: 0, id: a.id, index: dt.length };
      if (dt.push(x), ((T = n.onAddRow) == null ? void 0 : T.call(this, x, b)) !== !1) {
        for (const $t of i)
          if (((U = $t.onAddRow) == null ? void 0 : U.call(this, x, b)) === !1)
            return;
      }
    };
    if (Array.isArray(o))
      o.forEach(Tt);
    else if (o != null && o.length) {
      const a = typeof o.length == "function" ? o.length() : o.length;
      for (let b = 0; b < a; b++)
        Tt(o.getItem(b), b);
    }
    const W = [];
    let rt = 0;
    dt.forEach((a) => {
      var b, x;
      if (((b = n.rowFilter) == null ? void 0 : b.call(this, a)) !== !1) {
        for (const T of i)
          if (((x = T.rowFilter) == null ? void 0 : x.call(this, a)) === !1)
            return;
        a.index = W.length, a.top = rt, W.push(a), rt += c;
      }
    });
    let kt = !1;
    n.rowSorter && (W.sort(n.rowSorter.bind(this)), kt = !0), i.forEach((a) => {
      a.rowSorter && (W.sort(a.rowSorter.bind(this)), kt = !0);
    }), kt && W.forEach((a, b) => {
      a.index = b, a.top = b * c, W.push(a);
    });
    let D = n.height, G = 0;
    if (typeof D == "function" && (D = D()), D === "auto")
      G = v + u + rt;
    else if (typeof D == "object")
      G = Math.min(D.max, Math.max(D.min, v + u + rt));
    else if (D === "100%") {
      const a = (Ft = this.ref.current) == null ? void 0 : Ft.parentElement;
      if (a)
        G = a.clientHeight;
      else {
        G = 0, E(this, O, !0);
        return;
      }
    } else
      G = D;
    const zt = G - v - u, Wt = f + zt, Dt = [], Mt = q - N - $;
    let X = 0;
    const Et = [];
    let jt = 0;
    if (P.forEach((a) => {
      a.realWidth ? X += a.realWidth : (Et.push(a), jt += a.flex);
    }), Et.length) {
      const a = Math.max(0, Mt - X);
      Et.forEach((b) => {
        var U;
        const { minWidth: x = r, maxWidth: T = m } = b.setting;
        b.realWidth = Math.min(T, Math.max(x, Math.ceil(a * ((U = b.flex) != null ? U : 1) / jt))), X += b.realWidth;
      });
    }
    X = 0, P.forEach((a) => {
      a.left += X, X += a.realWidth, (a.left + a.realWidth < d || a.left > d + Mt) && (a.visible = !1);
    });
    const It = Math.floor(f / c), Pt = Math.min(W.length, Math.ceil(Wt / c));
    for (let a = It; a < Pt; a++) {
      const b = W[a];
      b.top -= f, Dt.push(b);
    }
    let Q = {
      allRows: dt,
      width: q,
      height: G,
      rows: W,
      visibleRows: Dt,
      rowHeight: c,
      rowsHeight: zt,
      rowsHeightTotal: rt,
      header: l,
      footer: h,
      headerHeight: v,
      footerHeight: u,
      colsInfo: {
        fixedLeftCols: C,
        fixedRightCols: I,
        scrollCols: P,
        flexLeftWidth: N,
        scrollWidth: Mt,
        scrollWidthTotal: X,
        flexRightWidth: $
      },
      scrollBottom: Wt,
      scrollTop: f,
      scrollLeft: d,
      startRowIndex: It,
      endRowIndex: Pt
    };
    if (n.onLayout) {
      const a = n.onLayout.call(this, Q);
      a && (Q = a);
    }
    return i.forEach((a) => {
      if (a.onLayout) {
        const b = a.onLayout.call(this, Q);
        b && (Q = b);
      }
    }), E(this, st, Object.freeze(Q)), Q;
  }
  getColInfo(t) {
    var i, o;
    const { layout: n } = this;
    if (!!n)
      return (o = (i = n.colsInfo.fixedLeftCols.find((l) => l.name === t)) != null ? i : n.colsInfo.fixedRightCols.find((l) => l.name === t)) != null ? o : n.colsInfo.scrollCols.find((l) => l.name === t);
  }
  renderHeader(t) {
    const { header: n, colsInfo: i, headerHeight: o } = t;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ S(ze, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...i
      });
    let l, h;
    if (typeof n == "function") {
      const c = n(t, this.state);
      typeof c == "object" && c && "__html" in c ? h = c : l = c;
    } else
      l = n;
    return /* @__PURE__ */ S("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: h
    }, l);
  }
  renderRows(t) {
    const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: l, colsInfo: h } = t;
    return /* @__PURE__ */ S(We, {
      top: n,
      height: i,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...h
    });
  }
  renderFooter(t) {
    const { footer: n, footerHeight: i } = t;
    if (!n)
      return null;
    let o, l;
    if (typeof n == "function") {
      const h = n(t, this.state);
      typeof h == "object" && h && "__html" in h ? l = h : o = h;
    } else
      o = n;
    return /* @__PURE__ */ S("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(t) {
    const n = [], { scrollLeft: i, colsInfo: o, scrollTop: l, rowsHeight: h, rowsHeightTotal: c } = t, { scrollWidthTotal: g, scrollWidth: r } = o, { scrollbarSize: m = 10, horzScrollbarPos: f } = this.props;
    return g > r && n.push(/* @__PURE__ */ S(ae, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: g,
      clientSize: r,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: f === "inside" ? 0 : -m,
      size: m,
      wheelContainer: ".dtable"
    })), c > h && n.push(/* @__PURE__ */ S(ae, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: c,
      clientSize: h,
      onScroll: this._handleScroll,
      right: 0,
      size: m,
      top: t.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  _afterRender() {
    var t;
    E(this, O, !1), (t = _(this, M).afterRender) == null || t.call(this), _(this, R).forEach((n) => {
      var i;
      return (i = n.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var m, f;
    const t = this.getLayout(), { className: n, rowHover: i, colHover: o, cellHover: l, bordered: h, striped: c, scrollbarHover: g } = (m = _(this, M)) != null ? m : this.props, r = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ S("div", {
      className: B("dtable", n, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
        "dtable-hover-cell": l,
        "dtable-bordered": h,
        "dtable-striped": c,
        "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
        "scrollbar-hover": g
      }),
      style: r,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
Z = new WeakMap(), O = new WeakMap(), M = new WeakMap(), K = new WeakMap(), R = new WeakMap(), st = new WeakMap(), w(Rt, "addPlugin", Se), w(Rt, "removePlugin", ke);
class ce {
  constructor(e, t) {
    w(this, "element");
    w(this, "options");
    w(this, "ref", ue());
    var n;
    this.element = e, this.options = { ...Ht(), ...t }, (n = this.options.cols) != null && n.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), Ne(/* @__PURE__ */ S(Rt, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
w(ce, "addPlugin", Se), w(ce, "removePlugin", ke);
let Pe = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var ct, F, z, nt, ot, pt;
const Nt = class {
  constructor(e, t = "local") {
    H(this, ot);
    H(this, ct, void 0);
    H(this, F, void 0);
    H(this, z, void 0);
    H(this, nt, void 0);
    E(this, ct, t), E(this, F, `ZUI_STORE:${e != null ? e : Pe()}`), E(this, z, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return _(this, ct);
  }
  get session() {
    return this.type === "session" ? this : (_(this, nt) || E(this, nt, new Nt(_(this, F), "session")), _(this, nt));
  }
  get(e, t) {
    const n = _(this, z).getItem(ut(this, ot, pt).call(this, e));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    _(this, z).setItem(ut(this, ot, pt).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    _(this, z).removeItem(ut(this, ot, pt).call(this, e));
  }
  each(e) {
    for (let t = 0; t < _(this, z).length; t++) {
      const n = _(this, z).key(t);
      if (n != null && n.startsWith(_(this, F))) {
        const i = _(this, z).getItem(n);
        typeof i == "string" && e(n.substring(_(this, F).length + 1), JSON.parse(i));
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
let vt = Nt;
ct = new WeakMap(), F = new WeakMap(), z = new WeakMap(), nt = new WeakMap(), ot = new WeakSet(), pt = function(e) {
  return `${_(this, F)}:${e}`;
};
const Ue = new vt("DEFAULT");
function Oe(s, e = "local") {
  return new vt(s, e);
}
Object.assign(Ue, { create: Oe });
export {
  ce as DTable,
  ae as Scrollbar,
  j as TIME_DAY,
  se as calculateTimestamp,
  B as classes,
  A as createDate,
  Be as domReady,
  ee as formatDate,
  Ze as formatDateSpan,
  Ke as getTimeBeforeDesc,
  Ve as isDBY,
  ht as isSameDay,
  Ce as isSameMonth,
  qe as isSameWeek,
  te as isSameYear,
  Ge as isToday,
  Je as isTomorrow,
  Xe as isYesterday,
  Ye as selectText,
  Ue as store
};
