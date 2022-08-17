var Ee = Object.defineProperty;
var $e = (s, e, t) => e in s ? Ee(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => ($e(s, typeof e != "symbol" ? e + "" : e, t), t), xt = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var _ = (s, e, t) => (xt(s, e, "read from private field"), t ? t.call(s) : e.get(s)), C = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, E = (s, e, t, n) => (xt(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var ut = (s, e, t) => (xt(s, e, "access private method"), t);
const xe = (s) => {
  const e = {};
  if (!s)
    return e;
  const t = Object.values(s.attributes);
  return t && t.length > 0 && t.forEach((n) => {
    const { name: i, value: o } = n;
    e[i] = o;
  }), e;
};
class He extends HTMLElement {
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
    const t = xe(this);
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
customElements.get("zui-button") || customElements.define("zui-button", He);
var V, at;
class Zt {
  constructor(e) {
    C(this, V, void 0);
    C(this, at, void 0);
    var t;
    E(this, V, e), E(this, at, e.nextElementSibling), ((t = _(this, V).dataset) == null ? void 0 : t.toggle) === "dropdown" && !_(this, V).parentElement.className.includes("dropdown-hover") && this.toggle(_(this, V).parentElement, _(this, at));
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
V = new WeakMap(), at = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Zt(s.target) : new Zt(s).clearMenu());
});
class Kt {
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
    var c;
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
      let a = null;
      if (((c = n.childNodes) == null ? void 0 : c.length) && n.childNodes.length === 1 ? a = n.childNodes[0] : a = n.childNodes[1], a) {
        const g = (a == null ? void 0 : a.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = a == null ? void 0 : a.getElementsByClassName("modal-body")[0], m = (a == null ? void 0 : a.getElementsByClassName("modal-footer")[0].clientHeight) || 0, f = i - g - m, d = r && r.scrollHeight > f ? "auto" : "visible";
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
        const c = ((t = s.target) == null ? void 0 : t.href) || "";
        i = c && c.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), l = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new Kt(o, l);
    } else
      s.target.parentElement.className.includes("modal") || new Kt(s, { type: "hide" }).onClear();
});
function Be(s) {
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
function qe(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const q = (...s) => s.map((e) => Array.isArray(e) ? q(...e) : typeof e == "function" ? q(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const n = e[t];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" "), j = 24 * 60 * 60 * 1e3, A = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ht = (s, e = new Date()) => (s = A(s), e = A(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()), Qt = (s, e = new Date()) => A(s).getFullYear() === A(e).getFullYear(), Ce = (s, e = new Date()) => (s = A(s), e = A(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), Ge = (s, e = new Date()) => {
  s = A(s), e = A(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Xe = (s, e) => ht(A(e), s), Je = (s, e) => ht(A(e).getTime() - j, s), Ve = (s, e) => ht(A(e).getTime() + j, s), Ze = (s, e) => ht(A(e).getTime() - 2 * j, s), te = (s, e = "yyyy-MM-dd hh:mm") => {
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
}, Ke = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = te(s, Qt(s) ? n.month : n.full);
  if (ht(s, e))
    return i;
  const o = te(e, Qt(s, e) ? Ce(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
}, Qe = (s) => {
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
}, ee = (s, e, t = !0, n = Date.now()) => {
  switch (e) {
    case "year":
      return s *= 365, ee(s, "day", t, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, ee(s, "day", t, n);
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
var wt, k, ce, lt, se, gt = {}, he = [], Re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function B(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function de(s) {
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
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++ce : i };
  return i == null && k.vnode != null && k.vnode(o), o;
}
function fe() {
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
function ue(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return ue(s);
  }
}
function ne(s) {
  (!s.__d && (s.__d = !0) && lt.push(s) && !mt.__r++ || se !== k.debounceRendering) && ((se = k.debounceRendering) || setTimeout)(mt);
}
function mt() {
  for (var s; mt.__r = lt.length; )
    s = lt.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), lt = [], s.some(function(e) {
      var t, n, i, o, l, c;
      e.__d && (l = (o = (t = e).__v).__e, (c = t.__P) && (n = [], (i = B({}, o)).__v = o.__v + 1, Lt(c, o, i, t.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, n, l == null ? it(o) : l, o.__h), me(n, o), o.__e != l && ue(o)));
    });
}
function _e(s, e, t, n, i, o, l, c, a, g) {
  var r, m, f, d, p, v, u, y = n && n.__k || he, H = y.length;
  for (t.__k = [], r = 0; r < e.length; r++)
    if ((d = t.__k[r] = (d = e[r]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? _t(null, d, null, null, d) : Array.isArray(d) ? _t(St, { children: d }, null, null, null) : d.__b > 0 ? _t(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = y[r]) === null || f && d.key == f.key && d.type === f.type)
        y[r] = void 0;
      else
        for (m = 0; m < H; m++) {
          if ((f = y[m]) && d.key == f.key && d.type === f.type) {
            y[m] = void 0;
            break;
          }
          f = null;
        }
      Lt(s, d, f = f || gt, i, o, l, c, a, g), p = d.__e, (m = d.ref) && f.ref != m && (u || (u = []), f.ref && u.push(f.ref, null, d), u.push(m, d.__c || p, d)), p != null ? (v == null && (v = p), typeof d.type == "function" && d.__k === f.__k ? d.__d = a = pe(d, a, s) : a = ge(s, d, f, y, p, a), typeof t.type == "function" && (t.__d = a)) : a && f.__e == a && a.parentNode != s && (a = it(f));
    }
  for (t.__e = v, r = H; r--; )
    y[r] != null && (typeof t.type == "function" && y[r].__e != null && y[r].__e == t.__d && (t.__d = it(n, r + 1)), ye(y[r], y[r]));
  if (u)
    for (r = 0; r < u.length; r++)
      be(u[r], u[++r], u[++r]);
}
function pe(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? pe(n, e, t) : ge(t, n, n, i, n.__e, e));
  return e;
}
function ge(s, e, t, n, i, o) {
  var l, c, a;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== s)
        s.appendChild(i), l = null;
      else {
        for (c = o, a = 0; (c = c.nextSibling) && a < n.length; a += 2)
          if (c == i)
            break t;
        s.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Le(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || bt(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || bt(s, o, e[o], t[o], n);
}
function oe(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t) : s[e] = t == null ? "" : typeof t != "number" || Re.test(e) ? t : t + "px";
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
            t && e in t || oe(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || oe(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? re : ie, o) : s.removeEventListener(e, o ? re : ie, o);
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
function ie(s) {
  this.l[s.type + !1](k.event ? k.event(s) : s);
}
function re(s) {
  this.l[s.type + !0](k.event ? k.event(s) : s);
}
function Lt(s, e, t, n, i, o, l, c, a) {
  var g, r, m, f, d, p, v, u, y, H, I, P, N, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, c = e.__e = t.__e, e.__h = null, o = [c]), (g = k.__b) && g(e);
  try {
    t:
      if (typeof $ == "function") {
        if (u = e.props, y = (g = $.contextType) && n[g.__c], H = g ? y ? y.props.value : g.__ : n, t.__c ? v = (r = e.__c = t.__c).__ = r.__E : ("prototype" in $ && $.prototype.render ? e.__c = r = new $(u, H) : (e.__c = r = new et(u, H), r.constructor = $, r.render = Ne), y && y.sub(r), r.props = u, r.state || (r.state = {}), r.context = H, r.__n = n, m = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), $.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = B({}, r.__s)), B(r.__s, $.getDerivedStateFromProps(u, r.__s))), f = r.props, d = r.state, m)
          $.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && u !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(u, H), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(u, r.__s, H) === !1 || e.__v === t.__v) {
            r.props = u, r.state = r.__s, e.__v !== t.__v && (r.__d = !1), r.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(L) {
              L && (L.__ = e);
            }), r.__h.length && l.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(u, r.__s, H), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(f, d, p);
          });
        }
        if (r.context = H, r.props = u, r.__v = e, r.__P = s, I = k.__r, P = 0, "prototype" in $ && $.prototype.render)
          r.state = r.__s, r.__d = !1, I && I(e), g = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, I && I(e), g = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++P < 25);
        r.state = r.__s, r.getChildContext != null && (n = B(B({}, n), r.getChildContext())), m || r.getSnapshotBeforeUpdate == null || (p = r.getSnapshotBeforeUpdate(f, d)), N = g != null && g.type === St && g.key == null ? g.props.children : g, _e(s, Array.isArray(N) ? N : [N], e, t, n, i, o, l, c, a), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), v && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Ae(t.__e, e, t, n, i, o, l, a);
    (g = k.diffed) && g(e);
  } catch (L) {
    e.__v = null, (a || o != null) && (e.__e = c, e.__h = !!a, o[o.indexOf(c)] = null), k.__e(L, e, t);
  }
}
function me(s, e) {
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
function Ae(s, e, t, n, i, o, l, c) {
  var a, g, r, m = t.props, f = e.props, d = e.type, p = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((a = o[p]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        s = a, o[p] = null;
        break;
      }
  }
  if (s == null) {
    if (d === null)
      return document.createTextNode(f);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, c = !1;
  }
  if (d === null)
    m === f || c && s.data === f || (s.data = f);
  else {
    if (o = o && wt.call(s.childNodes), g = (m = t.props || gt).dangerouslySetInnerHTML, r = f.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (m = {}, p = 0; p < s.attributes.length; p++)
          m[s.attributes[p].name] = s.attributes[p].value;
      (r || g) && (r && (g && r.__html == g.__html || r.__html === s.innerHTML) || (s.innerHTML = r && r.__html || ""));
    }
    if (Le(s, f, m, i, c), r)
      e.__k = [];
    else if (p = e.props.children, _e(s, Array.isArray(p) ? p : [p], e, t, n, i && d !== "foreignObject", o, l, o ? o[0] : t.__k && it(t, 0), c), o != null)
      for (p = o.length; p--; )
        o[p] != null && de(o[p]);
    c || ("value" in f && (p = f.value) !== void 0 && (p !== s.value || d === "progress" && !p || d === "option" && p !== m.value) && bt(s, "value", p, m.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== s.checked && bt(s, "checked", p, m.checked, !1));
  }
  return s;
}
function be(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    k.__e(n, t);
  }
}
function ye(s, e, t) {
  var n, i;
  if (k.unmount && k.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || be(n, null, e)), (n = s.__c) != null) {
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
      n[i] && ye(n[i], e, typeof s.type != "function");
  t || s.__e == null || de(s.__e), s.__e = s.__d = void 0;
}
function Ne(s, e, t) {
  return this.constructor(s, t);
}
function Te(s, e, t) {
  var n, i, o;
  k.__ && k.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], Lt(e, s = (!n && t || e).__k = S(St, null, [s]), i || gt, gt, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? wt.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n), me(o, s);
}
wt = he.slice, k = { __e: function(s, e, t, n) {
  for (var i, o, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        s = c;
      }
  throw s;
} }, ce = 0, et.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = B({}, this.state), typeof s == "function" && (s = s(B({}, t), this.props)), s && B(t, s), s != null && this.__v && (e && this.__h.push(e), ne(this));
}, et.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ne(this));
}, et.prototype.render = St, lt = [], mt.__r = 0;
var Z;
class le extends et {
  constructor(t) {
    var n;
    super(t);
    C(this, Z, 0);
    w(this, "_handleWheel", (t) => {
      var i, o, l;
      !((o = t.target) != null && o.closest((i = this.props.wheelContainer) != null ? i : ".-scrollbar-container")) || (t.preventDefault(), this.scrollOffset((this.props.type === "horz" ? t.deltaX : t.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    w(this, "_handleMouseMove", (t) => {
      const { dragStart: n } = this.state;
      n && (_(this, Z) && cancelAnimationFrame(_(this, Z)), E(this, Z, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - n.x : t.clientY - n.y;
        this.scroll(n.offset + i * this.props.scrollSize / this.props.clientSize), E(this, Z, 0);
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
      const i = n.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: c } = this.props, a = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(a * c / l);
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
      style: c,
      left: a,
      top: g,
      bottom: r,
      right: m
    } = this.props, { maxScrollPos: f, scrollPos: d } = this, { dragStart: p } = this.state, v = {
      left: a,
      top: g,
      bottom: r,
      right: m,
      ...c
    }, u = {};
    return i === "horz" ? (v.height = o, v.width = n, u.width = Math.max(Math.round(n * n / t), o), u.left = Math.round(d * (n - u.width) / f)) : (v.width = o, v.height = n, u.height = this.barSize, u.top = Math.round(d * (n - u.height) / f)), /* @__PURE__ */ S("div", {
      className: q("scrollbar", l, {
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
Z = new WeakMap();
function At({ col: s, className: e, height: t, rowID: n, rowData: i, onRenderCell: o, style: l, children: c, ...a }) {
  const { cellStyle: g, align: r, className: m } = s.setting, f = {
    left: s.left,
    width: s.realWidth,
    height: t,
    ...l,
    ...g
  };
  r && (f.textAlign = r);
  let d = [
    c != null ? c : i == null ? void 0 : i[s.name]
  ];
  o && (d = o(d, n, s, i));
  const p = [], v = [];
  return d == null || d.forEach((u) => {
    typeof u == "object" && u && ("style" in u || "className" in u || "style" in u) ? (u.html && v.push(/* @__PURE__ */ S("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: u.html }
    })), u.style && Object.assign(f, u.style), u.className && p.push(u.className)) : v.push(u);
  }), /* @__PURE__ */ S("div", {
    className: q("dtable-cell", e, m, p),
    style: f,
    "data-col": s.name,
    ...a
  }, v);
}
function ze({ col: s, children: e, ...t }) {
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
function Ht({ rowID: s, className: e, top: t = 0, left: n = 0, width: i, height: o, cols: l, data: c, CellComponent: a = At, onRenderCell: g }) {
  return /* @__PURE__ */ S("div", {
    className: q("dtable-cells", e),
    style: { top: t, left: n, width: i, height: o }
  }, l.map((r) => r.visible ? /* @__PURE__ */ S(a, {
    key: r.name,
    col: r,
    rowData: c,
    rowID: s,
    onRenderCell: g
  }) : null));
}
function ve({
  rowID: s,
  className: e,
  top: t,
  height: n,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: c,
  scrollWidth: a,
  scrollWidthTotal: g,
  flexRightWidth: r,
  scrollLeft: m,
  CellComponent: f = At,
  onRenderCell: d,
  data: p
}) {
  let v = null;
  i != null && i.length && (v = /* @__PURE__ */ S(Ht, {
    className: "dtable-fixed-left",
    cols: i,
    width: c,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  let u = null;
  l != null && l.length && (u = /* @__PURE__ */ S(Ht, {
    className: "dtable-flexable",
    cols: l,
    left: c - m,
    width: g,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ S(Ht, {
    className: "dtable-fixed-right",
    cols: o,
    left: c + a,
    width: r,
    rowID: s,
    CellComponent: f,
    onRenderCell: d,
    data: p
  }));
  const H = { top: t, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ S("div", {
    className: q("dtable-row", e),
    style: H,
    "data-id": s
  }, v, u, y);
}
function We({ height: s, onRenderRow: e, ...t }) {
  let n = {
    height: s,
    ...t,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: ze
  };
  return e && (n = e(n)), /* @__PURE__ */ S("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ S(ve, {
    ...n
  }));
}
function De({
  className: s,
  style: e,
  top: t,
  rows: n,
  height: i,
  rowHeight: o,
  onRenderRow: l,
  ...c
}) {
  return e = { ...e, top: t, height: i }, /* @__PURE__ */ S("div", {
    className: q("dtable-rows", s),
    style: e
  }, n.map((a) => {
    let g = {
      className: `dtable-row-${a.index % 2 ? "odd" : "even"}`,
      rowID: a.data.id,
      data: a.data,
      top: a.top,
      height: o,
      ...c
    };
    return l && (g = l(g, a)), /* @__PURE__ */ S(ve, {
      ...g
    });
  }));
}
const yt = /* @__PURE__ */ new Map();
function we(s, e = !1) {
  if (!e && yt.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  yt.set(s.name, s);
}
function je(s) {
  return yt.get(s);
}
function Se(s) {
  return yt.delete(s);
}
function Ie(s) {
  var t;
  if (!((t = s == null ? void 0 : s.plugins) != null && t.length))
    return [];
  const { plugins: e } = s;
  return e.reduce((n, i) => {
    let o;
    return typeof i == "string" ? (o = je(i), o || console.warn(`DTable: Cannot found plugin "${i}"`)) : typeof i == "function" ? o = i.plugin : typeof i == "object" ? o = i : console.warn("DTable: Invalid plugin", i), o && n.push(o), n;
  }, []);
}
function Pe(s, e) {
  return s.reduce((t, n) => {
    const { options: i, defaultOptions: o } = n;
    return o && (t = { ...o, ...t }), i && Object.assign(t, typeof i == "function" ? i(t) : i), t;
  }, e);
}
function Ct() {
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
var K, F, M, Q, R, st;
class Rt extends et {
  constructor(t) {
    super(t);
    w(this, "ref", fe());
    C(this, K, 0);
    C(this, F, !1);
    C(this, M, void 0);
    C(this, Q, void 0);
    C(this, R, []);
    C(this, st, void 0);
    w(this, "_handleResize", () => {
      _(this, K) && cancelAnimationFrame(_(this, K)), E(this, K, requestAnimationFrame(() => {
        this.forceUpdate(), E(this, K, 0);
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
      return i.setting[l] && (t = i.setting[l].call(this, t, n, i, o)), _(this, M)[l] && (t = _(this, M)[l].call(this, t, n, i, o)), _(this, R).forEach((c) => {
        c[l] && (t = c[l].call(this, t, n, i, o));
      }), t;
    });
    w(this, "_handleScroll", (t, n) => {
      n === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, "_handleClick", (t) => {
      var a, g, r, m, f, d, p, v;
      const n = t.target;
      if (!n)
        return;
      const i = n.closest(".dtable-row");
      if (!i)
        return;
      const o = n.closest(".dtable-cell"), l = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "", c = (g = i.getAttribute("data-id")) != null ? g : "";
      if (c === "HEADER")
        o && ((r = _(this, M).onHeaderCellClick) == null || r.call(this, t, { colName: l, element: o }), _(this, R).forEach((u) => {
          var y;
          (y = u.onHeaderCellClick) == null || y.call(this, t, { colName: l, element: o });
        }));
      else {
        const u = (m = _(this, st)) == null ? void 0 : m.visibleRows.find((y) => y.data.id === c);
        if (o) {
          if (((f = _(this, M).onCellClick) == null ? void 0 : f.call(this, t, { colName: l, rowID: c, rowInfo: u, element: o, rowElement: i })) === !0)
            return;
          for (const y of _(this, R))
            if (((d = y.onCellClick) == null ? void 0 : d.call(this, t, { colName: l, rowID: c, rowInfo: u, element: o, rowElement: i })) === !0)
              return;
        }
        if (((p = _(this, M).onRowClick) == null ? void 0 : p.call(this, t, { rowID: c, rowInfo: u, element: i })) === !0)
          return;
        for (const y of _(this, R))
          if (((v = y.onRowClick) == null ? void 0 : v.call(this, t, { rowID: c, rowInfo: u, element: i })) === !0)
            return;
      }
    });
    this.state = { scrollTop: 0, scrollLeft: 0, hiddenCols: {} };
    const n = { ...Ct(), ...t };
    E(this, M, Object.freeze(n)), E(this, Q, Object.freeze(Ie(n))), _(this, Q).forEach((i) => {
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
    _(this, F) ? this.forceUpdate() : this._afterRender(), (t = this.ref.current) == null || t.addEventListener("click", this._handleClick), _(this, M).responsive && window.addEventListener("resize", this._handleResize), _(this, R).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    _(this, F) && this._afterRender();
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
    var Ot, Ut, Ft;
    const t = Ct(), n = Pe(_(this, Q), { ...t, ...this.props }), i = _(this, Q).filter((h) => !h.when || h.when(n));
    E(this, R, Object.freeze(i)), i.forEach((h) => {
      var x;
      const b = (x = h.beforeLayout) == null ? void 0 : x.call(this, n);
      b && Object.assign(n, b);
    }), E(this, M, Object.freeze(n));
    const {
      data: o,
      header: l,
      footer: c,
      rowHeight: a = t.rowHeight,
      defaultColWidth: g = t.minColWidth,
      minColWidth: r = t.minColWidth,
      maxColWidth: m = t.maxColWidth
    } = n, { scrollTop: f = 0, scrollLeft: d = 0, hiddenCols: p = {} } = this.state, v = l ? n.headerHeight || a : 0, u = c ? n.footerHeight || a : 0, y = (h, b, x) => (h && (b && (h = Math.max(b, h)), x && (h = Math.min(x, h))), h), H = [], I = [], P = [];
    let N = 0, $ = 0;
    (Ot = n.cols) == null || Ot.forEach((h) => {
      var Yt, Bt, qt;
      if (h.hidden || p[h.name])
        return;
      const { minWidth: b = r, maxWidth: x = m } = h, T = y((Yt = h.width) != null ? Yt : 0, b, x), O = (Bt = h.flex) != null ? Bt : 1, $t = O * y(g, b, x), U = {
        name: h.name,
        type: (qt = h.type) != null ? qt : "",
        setting: h,
        left: 0,
        flex: O,
        realWidth: T,
        flexWidth: $t,
        visible: !0
      };
      h.fixed === "left" ? (U.left = N, N += T, H.push(U)) : h.fixed === "right" ? (U.left = $, $ += T, I.push(U)) : P.push(U), i.forEach((ke) => {
        var Xt, Jt;
        const ft = (Jt = ke.colTypes) == null ? void 0 : Jt[(Xt = h.type) != null ? Xt : ""];
        if (!ft)
          return;
        const Gt = typeof ft == "function" ? ft(U) : ft;
        if (Gt) {
          const { setting: Vt, ...Me } = Gt;
          Object.assign(U, Me), Vt && Object.assign(U.setting, Vt);
        }
      });
    });
    let L = n.width, G = 0;
    if (typeof L == "function" && (L = L()), L === "auto")
      G = N + $, P.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), G += h.realWidth;
      });
    else if (L === "100%") {
      const h = (Ut = this.ref.current) == null ? void 0 : Ut.parentElement;
      if (h)
        G = h.clientWidth;
      else {
        G = 0, E(this, F, !0);
        return;
      }
    } else
      G = L != null ? L : 0;
    const dt = [], Tt = (h, b) => {
      var T, O;
      const x = { data: h, top: 0, id: h.id, index: dt.length };
      if (dt.push(x), ((T = n.onAddRow) == null ? void 0 : T.call(this, x, b)) !== !1) {
        for (const $t of i)
          if (((O = $t.onAddRow) == null ? void 0 : O.call(this, x, b)) === !1)
            return;
      }
    };
    if (Array.isArray(o))
      o.forEach(Tt);
    else if (o != null && o.length) {
      const h = typeof o.length == "function" ? o.length() : o.length;
      for (let b = 0; b < h; b++)
        Tt(o.getItem(b), b);
    }
    const W = [];
    let rt = 0;
    dt.forEach((h) => {
      var b, x;
      if (((b = n.rowFilter) == null ? void 0 : b.call(this, h)) !== !1) {
        for (const T of i)
          if (((x = T.rowFilter) == null ? void 0 : x.call(this, h)) === !1)
            return;
        h.index = W.length, h.top = rt, W.push(h), rt += a;
      }
    });
    let kt = !1;
    n.rowSorter && (W.sort(n.rowSorter.bind(this)), kt = !0), i.forEach((h) => {
      h.rowSorter && (W.sort(h.rowSorter.bind(this)), kt = !0);
    }), kt && W.forEach((h, b) => {
      h.index = b, h.top = b * a, W.push(h);
    });
    let D = n.height, X = 0;
    if (typeof D == "function" && (D = D()), D === "auto")
      X = v + u + rt;
    else if (typeof D == "object")
      X = Math.min(D.max, Math.max(D.min, v + u + rt));
    else if (D === "100%") {
      const h = (Ft = this.ref.current) == null ? void 0 : Ft.parentElement;
      if (h)
        X = h.clientHeight;
      else {
        X = 0, E(this, F, !0);
        return;
      }
    } else
      X = D;
    const zt = X - v - u, Wt = f + zt, Dt = [], Mt = G - N - $;
    let J = 0;
    const Et = [];
    let jt = 0;
    if (P.forEach((h) => {
      h.realWidth ? J += h.realWidth : (Et.push(h), jt += h.flex);
    }), Et.length) {
      const h = Math.max(0, Mt - J);
      Et.forEach((b) => {
        var O;
        const { minWidth: x = r, maxWidth: T = m } = b.setting;
        b.realWidth = Math.min(T, Math.max(x, Math.ceil(h * ((O = b.flex) != null ? O : 1) / jt))), J += b.realWidth;
      });
    }
    J = 0, P.forEach((h) => {
      h.left += J, J += h.realWidth, (h.left + h.realWidth < d || h.left > d + Mt) && (h.visible = !1);
    });
    const It = Math.floor(f / a), Pt = Math.min(W.length, Math.ceil(Wt / a));
    for (let h = It; h < Pt; h++) {
      const b = W[h];
      b.top -= f, Dt.push(b);
    }
    let tt = {
      allRows: dt,
      width: G,
      height: X,
      rows: W,
      visibleRows: Dt,
      rowHeight: a,
      rowsHeight: zt,
      rowsHeightTotal: rt,
      header: l,
      footer: c,
      headerHeight: v,
      footerHeight: u,
      colsInfo: {
        fixedLeftCols: H,
        fixedRightCols: I,
        scrollCols: P,
        flexLeftWidth: N,
        scrollWidth: Mt,
        scrollWidthTotal: J,
        flexRightWidth: $
      },
      scrollBottom: Wt,
      scrollTop: f,
      scrollLeft: d,
      startRowIndex: It,
      endRowIndex: Pt
    };
    if (n.onLayout) {
      const h = n.onLayout.call(this, tt);
      h && (tt = h);
    }
    return i.forEach((h) => {
      if (h.onLayout) {
        const b = h.onLayout.call(this, tt);
        b && (tt = b);
      }
    }), E(this, st, Object.freeze(tt)), tt;
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
      return /* @__PURE__ */ S(We, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        ...i
      });
    let l, c;
    if (typeof n == "function") {
      const a = n(t, this.state);
      typeof a == "object" && a && "__html" in a ? c = a : l = a;
    } else
      l = n;
    return /* @__PURE__ */ S("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: c
    }, l);
  }
  renderRows(t) {
    const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: l, colsInfo: c } = t;
    return /* @__PURE__ */ S(De, {
      top: n,
      height: i,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(t) {
    const { footer: n, footerHeight: i } = t;
    if (!n)
      return null;
    let o, l;
    if (typeof n == "function") {
      const c = n(t, this.state);
      typeof c == "object" && c && "__html" in c ? l = c : o = c;
    } else
      o = n;
    return /* @__PURE__ */ S("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(t) {
    const n = [], { scrollLeft: i, colsInfo: o, scrollTop: l, rowsHeight: c, rowsHeightTotal: a } = t, { scrollWidthTotal: g, scrollWidth: r } = o, { scrollbarSize: m = 10, horzScrollbarPos: f } = this.props;
    return g > r && n.push(/* @__PURE__ */ S(le, {
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
    })), a > c && n.push(/* @__PURE__ */ S(le, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: a,
      clientSize: c,
      onScroll: this._handleScroll,
      right: 0,
      size: m,
      top: t.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  _afterRender() {
    var t;
    E(this, F, !1), (t = _(this, M).afterRender) == null || t.call(this), _(this, R).forEach((n) => {
      var i;
      return (i = n.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var m, f;
    const t = this.getLayout(), { className: n, rowHover: i, colHover: o, cellHover: l, bordered: c, striped: a, scrollbarHover: g } = (m = _(this, M)) != null ? m : this.props, r = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ S("div", {
      className: q("dtable", n, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
        "dtable-hover-cell": l,
        "dtable-bordered": c,
        "dtable-striped": a,
        "dtable-scrolled-down": ((f = t == null ? void 0 : t.scrollTop) != null ? f : 0) > 0,
        "scrollbar-hover": g
      }),
      style: r,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
K = new WeakMap(), F = new WeakMap(), M = new WeakMap(), Q = new WeakMap(), R = new WeakMap(), st = new WeakMap(), w(Rt, "addPlugin", we), w(Rt, "removePlugin", Se);
class ae {
  constructor(e, t) {
    w(this, "element");
    w(this, "options");
    w(this, "ref", fe());
    var n;
    this.element = e, this.options = { ...Ct(), ...t }, (n = this.options.cols) != null && n.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), Te(/* @__PURE__ */ S(Rt, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
w(ae, "addPlugin", we), w(ae, "removePlugin", Se);
let Oe = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var ct, Y, z, nt, ot, pt;
const Nt = class {
  constructor(e, t = "local") {
    C(this, ot);
    C(this, ct, void 0);
    C(this, Y, void 0);
    C(this, z, void 0);
    C(this, nt, void 0);
    E(this, ct, t), E(this, Y, `ZUI_STORE:${e != null ? e : Oe()}`), E(this, z, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return _(this, ct);
  }
  get session() {
    return this.type === "session" ? this : (_(this, nt) || E(this, nt, new Nt(_(this, Y), "session")), _(this, nt));
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
      if (n != null && n.startsWith(_(this, Y))) {
        const i = _(this, z).getItem(n);
        typeof i == "string" && e(n.substring(_(this, Y).length + 1), JSON.parse(i));
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
ct = new WeakMap(), Y = new WeakMap(), z = new WeakMap(), nt = new WeakMap(), ot = new WeakSet(), pt = function(e) {
  return `${_(this, Y)}:${e}`;
};
const Ue = new vt("DEFAULT");
function Fe(s, e = "local") {
  return new vt(s, e);
}
Object.assign(Ue, { create: Fe });
export {
  ae as DTable,
  le as Scrollbar,
  j as TIME_DAY,
  ee as calculateTimestamp,
  q as classes,
  A as createDate,
  qe as domReady,
  te as formatDate,
  Ke as formatDateSpan,
  Qe as getTimeBeforeDesc,
  Ze as isDBY,
  ht as isSameDay,
  Ce as isSameMonth,
  Ge as isSameWeek,
  Qt as isSameYear,
  Xe as isToday,
  Ve as isTomorrow,
  Je as isYesterday,
  Be as selectText,
  Ue as store
};
