var he = Object.defineProperty;
var de = (s, e, t) => e in s ? he(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var S = (s, e, t) => (de(s, typeof e != "symbol" ? e + "" : e, t), t), vt = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var g = (s, e, t) => (vt(s, e, "read from private field"), t ? t.call(s) : e.get(s)), T = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, H = (s, e, t, n) => (vt(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var at = (s, e, t) => (vt(s, e, "access private method"), t);
const fe = (s) => {
  const e = {};
  if (!s)
    return e;
  const t = Object.values(s.attributes);
  return t && t.length > 0 && t.forEach((n) => {
    const { name: r, value: o } = n;
    e[r] = o;
  }), e;
};
class ue extends HTMLElement {
  constructor() {
    super();
    S(this, "$button");
    S(this, "$icon");
    S(this, "onClick");
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
    const t = fe(this);
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
customElements.get("zui-button") || customElements.define("zui-button", ue);
var V, rt;
class Rt {
  constructor(e) {
    T(this, V, void 0);
    T(this, rt, void 0);
    var t;
    H(this, V, e), H(this, rt, e.nextElementSibling), ((t = g(this, V).dataset) == null ? void 0 : t.toggle) === "dropdown" && !g(this, V).parentElement.className.includes("dropdown-hover") && this.toggle(g(this, V).parentElement, g(this, rt));
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
V = new WeakMap(), rt = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Rt(s.target) : new Rt(s).clearMenu());
});
class It {
  constructor(e, t) {
    S(this, "$modal");
    S(this, "options");
    S(this, "reposTask", null);
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
        const p = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, i = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], _ = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, d = r - p - _, h = i && i.scrollHeight > d ? "auto" : "visible";
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
      new It(o, l);
    } else
      s.target.parentElement.className.includes("modal") || new It(s, { type: "hide" }).onClear();
});
function Le(s) {
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
function De(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const Y = (...s) => s.map((e) => Array.isArray(e) ? Y(...e) : typeof e == "function" ? Y(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const n = e[t];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" "), I = 24 * 60 * 60 * 1e3, C = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), lt = (s, e = new Date()) => (s = C(s), e = C(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()), jt = (s, e = new Date()) => C(s).getFullYear() === C(e).getFullYear(), _e = (s, e = new Date()) => (s = C(s), e = C(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), We = (s, e = new Date()) => {
  s = C(s), e = C(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), r = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((r + 4) / 7);
}, ze = (s, e) => lt(C(e), s), Pe = (s, e) => lt(C(e).getTime() - I, s), Re = (s, e) => lt(C(e).getTime() + I, s), Ie = (s, e) => lt(C(e).getTime() - 2 * I, s), Ut = (s, e = "yyyy-MM-dd hh:mm") => {
  s = C(s);
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
}, je = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, r = Ut(s, jt(s) ? n.month : n.full);
  if (lt(s, e))
    return r;
  const o = Ut(e, jt(s, e) ? _e(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", r).replace("{1}", o);
}, Ue = (s) => {
  const e = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return e - I * 7;
    case "oneMonth":
      return e - I * 31;
    case "threeMonth":
      return e - I * 31 * 3;
    case "halfYear":
      return e - I * 183;
    case "oneYear":
      return e - I * 365;
    case "twoYear":
      return e - 2 * (I * 365);
    default:
      return 0;
  }
}, Ft = (s, e, t = !0, n = Date.now()) => {
  switch (e) {
    case "year":
      return s *= 365, Ft(s, "day", t, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, Ft(s, "day", t, n);
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
var mt, k, Xt, ot, Yt, dt = {}, Jt = [], pe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function F(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function Zt(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function w(s, e, t) {
  var n, r, o, l = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? r = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? mt.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      l[o] === void 0 && (l[o] = s.defaultProps[o]);
  return ct(s, l, n, r, null);
}
function ct(s, e, t, n, r) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Xt : r };
  return r == null && k.vnode != null && k.vnode(o), o;
}
function Kt() {
  return { current: null };
}
function gt(s) {
  return s.children;
}
function J(s, e) {
  this.props = s, this.context = e;
}
function Q(s, e) {
  if (e == null)
    return s.__ ? Q(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? Q(s) : null;
}
function Qt(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return Qt(s);
  }
}
function Bt(s) {
  (!s.__d && (s.__d = !0) && ot.push(s) && !ft.__r++ || Yt !== k.debounceRendering) && ((Yt = k.debounceRendering) || setTimeout)(ft);
}
function ft() {
  for (var s; ft.__r = ot.length; )
    s = ot.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), ot = [], s.some(function(e) {
      var t, n, r, o, l, a;
      e.__d && (l = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = F({}, o)).__v = o.__v + 1, kt(a, o, r, t.__n, a.ownerSVGElement !== void 0, o.__h != null ? [l] : null, n, l == null ? Q(o) : l, o.__h), ne(n, o), o.__e != l && Qt(o)));
    });
}
function te(s, e, t, n, r, o, l, a, c, p) {
  var i, _, d, h, f, y, m, b = n && n.__k || Jt, M = b.length;
  for (t.__k = [], i = 0; i < e.length; i++)
    if ((h = t.__k[i] = (h = e[i]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? ct(null, h, null, null, h) : Array.isArray(h) ? ct(gt, { children: h }, null, null, null) : h.__b > 0 ? ct(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = t, h.__b = t.__b + 1, (d = b[i]) === null || d && h.key == d.key && h.type === d.type)
        b[i] = void 0;
      else
        for (_ = 0; _ < M; _++) {
          if ((d = b[_]) && h.key == d.key && h.type === d.type) {
            b[_] = void 0;
            break;
          }
          d = null;
        }
      kt(s, h, d = d || dt, r, o, l, a, c, p), f = h.__e, (_ = h.ref) && d.ref != _ && (m || (m = []), d.ref && m.push(d.ref, null, h), m.push(_, h.__c || f, h)), f != null ? (y == null && (y = f), typeof h.type == "function" && h.__k === d.__k ? h.__d = c = ee(h, c, s) : c = se(s, h, d, b, f, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != s && (c = Q(d));
    }
  for (t.__e = y, i = M; i--; )
    b[i] != null && (typeof t.type == "function" && b[i].__e != null && b[i].__e == t.__d && (t.__d = Q(n, i + 1)), re(b[i], b[i]));
  if (m)
    for (i = 0; i < m.length; i++)
      oe(m[i], m[++i], m[++i]);
}
function ee(s, e, t) {
  for (var n, r = s.__k, o = 0; r && o < r.length; o++)
    (n = r[o]) && (n.__ = s, e = typeof n.type == "function" ? ee(n, e, t) : se(t, n, n, r, n.__e, e));
  return e;
}
function se(s, e, t, n, r, o) {
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
function me(s, e, t, n, r) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || ut(s, o, null, t[o], n);
  for (o in e)
    r && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || ut(s, o, e[o], t[o], n);
}
function Ot(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t) : s[e] = t == null ? "" : typeof t != "number" || pe.test(e) ? t : t + "px";
}
function ut(s, e, t, n, r) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || Ot(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || Ot(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? Gt : qt, o) : s.removeEventListener(e, o ? Gt : qt, o);
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
function qt(s) {
  this.l[s.type + !1](k.event ? k.event(s) : s);
}
function Gt(s) {
  this.l[s.type + !0](k.event ? k.event(s) : s);
}
function kt(s, e, t, n, r, o, l, a, c) {
  var p, i, _, d, h, f, y, m, b, M, A, D, W, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (p = k.__b) && p(e);
  try {
    t:
      if (typeof $ == "function") {
        if (m = e.props, b = (p = $.contextType) && n[p.__c], M = p ? b ? b.props.value : p.__ : n, t.__c ? y = (i = e.__c = t.__c).__ = i.__E : ("prototype" in $ && $.prototype.render ? e.__c = i = new $(m, M) : (e.__c = i = new J(m, M), i.constructor = $, i.render = be), b && b.sub(i), i.props = m, i.state || (i.state = {}), i.context = M, i.__n = n, _ = i.__d = !0, i.__h = []), i.__s == null && (i.__s = i.state), $.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = F({}, i.__s)), F(i.__s, $.getDerivedStateFromProps(m, i.__s))), d = i.props, h = i.state, _)
          $.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && m !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(m, M), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(m, i.__s, M) === !1 || e.__v === t.__v) {
            i.props = m, i.state = i.__s, e.__v !== t.__v && (i.__d = !1), i.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(v) {
              v && (v.__ = e);
            }), i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(m, i.__s, M), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(d, h, f);
          });
        }
        if (i.context = M, i.props = m, i.__v = e, i.__P = s, A = k.__r, D = 0, "prototype" in $ && $.prototype.render)
          i.state = i.__s, i.__d = !1, A && A(e), p = i.render(i.props, i.state, i.context);
        else
          do
            i.__d = !1, A && A(e), p = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++D < 25);
        i.state = i.__s, i.getChildContext != null && (n = F(F({}, n), i.getChildContext())), _ || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(d, h)), W = p != null && p.type === gt && p.key == null ? p.props.children : p, te(s, Array.isArray(W) ? W : [W], e, t, n, r, o, l, a, c), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = ge(t.__e, e, t, n, r, o, l, c);
    (p = k.diffed) && p(e);
  } catch (v) {
    e.__v = null, (c || o != null) && (e.__e = a, e.__h = !!c, o[o.indexOf(a)] = null), k.__e(v, e, t);
  }
}
function ne(s, e) {
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
function ge(s, e, t, n, r, o, l, a) {
  var c, p, i, _ = t.props, d = e.props, h = e.type, f = 0;
  if (h === "svg" && (r = !0), o != null) {
    for (; f < o.length; f++)
      if ((c = o[f]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
        s = c, o[f] = null;
        break;
      }
  }
  if (s == null) {
    if (h === null)
      return document.createTextNode(d);
    s = r ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), o = null, a = !1;
  }
  if (h === null)
    _ === d || a && s.data === d || (s.data = d);
  else {
    if (o = o && mt.call(s.childNodes), p = (_ = t.props || dt).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (_ = {}, f = 0; f < s.attributes.length; f++)
          _[s.attributes[f].name] = s.attributes[f].value;
      (i || p) && (i && (p && i.__html == p.__html || i.__html === s.innerHTML) || (s.innerHTML = i && i.__html || ""));
    }
    if (me(s, d, _, r, a), i)
      e.__k = [];
    else if (f = e.props.children, te(s, Array.isArray(f) ? f : [f], e, t, n, r && h !== "foreignObject", o, l, o ? o[0] : t.__k && Q(t, 0), a), o != null)
      for (f = o.length; f--; )
        o[f] != null && Zt(o[f]);
    a || ("value" in d && (f = d.value) !== void 0 && (f !== s.value || h === "progress" && !f || h === "option" && f !== _.value) && ut(s, "value", f, _.value, !1), "checked" in d && (f = d.checked) !== void 0 && f !== s.checked && ut(s, "checked", f, _.checked, !1));
  }
  return s;
}
function oe(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    k.__e(n, t);
  }
}
function re(s, e, t) {
  var n, r;
  if (k.unmount && k.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || oe(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        k.__e(o, e);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (r = 0; r < n.length; r++)
      n[r] && re(n[r], e, typeof s.type != "function");
  t || s.__e == null || Zt(s.__e), s.__e = s.__d = void 0;
}
function be(s, e, t) {
  return this.constructor(s, t);
}
function ye(s, e, t) {
  var n, r, o;
  k.__ && k.__(s, e), r = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], kt(e, s = (!n && t || e).__k = w(gt, null, [s]), r || dt, dt, e.ownerSVGElement !== void 0, !n && t ? [t] : r ? null : e.firstChild ? mt.call(e.childNodes) : null, o, !n && t ? t : r ? r.__e : e.firstChild, n), ne(o, s);
}
mt = Jt.slice, k = { __e: function(s, e, t, n) {
  for (var r, o, l; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(s)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(s, n || {}), l = r.__d), l)
          return r.__E = r;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Xt = 0, J.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = F({}, this.state), typeof s == "function" && (s = s(F({}, t), this.props)), s && F(t, s), s != null && this.__v && (e && this.__h.push(e), Bt(this));
}, J.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Bt(this));
}, J.prototype.render = gt, ot = [], ft.__r = 0;
class Vt extends J {
  constructor(t) {
    var n;
    super(t);
    S(this, "_rafId", 0);
    S(this, "_handleWheel", (t) => {
      var r, o, l;
      !((o = t.target) != null && o.closest((r = this.props.wheelContainer) != null ? r : ".-scrollbar-container")) || (t.preventDefault(), this.scrollOffset((this.props.type === "horz" ? t.deltaX : t.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    S(this, "_handleMouseMove", (t) => {
      const { dragStart: n } = this.state;
      n && (this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? t.clientX - n.x : t.clientY - n.y;
        this.scroll(n.offset + r * this.props.scrollSize / this.props.clientSize), this._rafId = 0;
      }), t.preventDefault());
    });
    S(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    S(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.state.scrollPos } }), t.stopPropagation();
    });
    S(this, "_handleClick", (t) => {
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
      top: p,
      bottom: i,
      right: _
    } = this.props, { maxScrollPos: d } = this, { dragStart: h, scrollPos: f } = this.state, y = {
      left: c,
      top: p,
      bottom: i,
      right: _,
      ...a
    }, m = {};
    return r === "horz" ? (y.height = o, y.width = n, m.width = Math.max(Math.round(n * n / t), o), m.left = Math.round(f * (n - m.width) / d)) : (y.width = o, y.height = n, m.height = this.barSize, m.top = Math.round(f * (n - m.height) / d)), /* @__PURE__ */ w("div", {
      className: Y("scrollbar", l, {
        "is-vert": r === "vert",
        "is-horz": r === "horz",
        "is-dragging": h
      }),
      style: y,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ w("div", {
      className: "scrollbar-bar",
      style: m,
      onMouseDown: this._handleMouseDown
    }));
  }
}
function Mt({ col: s, className: e, height: t, style: n, children: r, html: o, ...l }) {
  const a = {
    left: s.left,
    width: s.realWidth,
    height: t,
    ...n,
    ...s.cellStyle
  };
  return s.align && (a.textAlign = s.align), /* @__PURE__ */ w("div", {
    className: Y("dtable-cell", s.className, e),
    style: a,
    ...l,
    "data-col": s.name,
    dangerouslySetInnerHTML: o
  }, r);
}
function ve({ className: s, style: e, col: t, height: n, children: r }) {
  let { sortType: o } = t;
  return o === !0 && (o = "none"), /* @__PURE__ */ w(Mt, {
    className: s,
    height: n,
    style: e,
    col: t,
    "data-sort": o || null,
    "data-type": t.type
  }, t.title, o && /* @__PURE__ */ w("div", {
    className: `dtable-sort -sort-${o}`
  }), r);
}
function we(s) {
  const e = {};
  if (typeof s == "object" && s && ("html" in s || "children" in s)) {
    const { html: t, children: n, style: r, className: o } = s;
    t ? e.html = { __html: t } : n && (e.children = n), e.style = r, e.className = o;
  } else
    e.children = s;
  return e;
}
function wt({ rowID: s, className: e, top: t = 0, left: n = 0, width: r, height: o, cols: l, data: a, CellComponent: c = Mt, onRenderCell: p }) {
  return /* @__PURE__ */ w("div", {
    className: Y("dtable-cells", e),
    style: { top: t, left: n, width: r, height: o }
  }, l.map((i) => {
    if (!i.visible)
      return null;
    let _ = a == null ? void 0 : a[i.name];
    if (i.onRenderCell) {
      const m = i.onRenderCell(s, i, a, _);
      m !== void 0 && (_ = m);
    }
    if (p) {
      const m = p(s, i, a, _);
      m !== void 0 && (_ = m);
    }
    const { children: d, html: h, className: f, style: y } = we(_);
    return /* @__PURE__ */ w(c, {
      key: i.name,
      col: i,
      className: f,
      style: y,
      html: h
    }, d);
  }));
}
function ie({
  rowID: s,
  className: e,
  top: t,
  height: n,
  fixedLeftCols: r,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: p,
  flexRightWidth: i,
  scrollLeft: _,
  CellComponent: d = Mt,
  onRenderCell: h,
  data: f
}) {
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ w(wt, {
    className: "-fixed-left",
    cols: r,
    width: a,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: f
  }));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ w(wt, {
    className: "-flexable",
    cols: l,
    left: a - _,
    width: p,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: f
  }));
  let b = null;
  o != null && o.length && (b = /* @__PURE__ */ w(wt, {
    className: "-fixed-right",
    cols: o,
    left: a + c,
    width: i,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: f
  }));
  const M = { top: t, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ w("div", {
    className: Y("dtable-row", e),
    style: M,
    "data-id": s
  }, y, m, b);
}
function Se({
  height: s,
  fixedLeftCols: e,
  fixedRightCols: t,
  scrollCols: n,
  flexLeftWidth: r,
  scrollWidth: o,
  flexRightWidth: l,
  scrollWidthTotal: a,
  scrollLeft: c,
  onRenderCell: p
}) {
  return /* @__PURE__ */ w("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ w(ie, {
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
    CellComponent: ve,
    onRenderCell: p
  }));
}
function ke({
  className: s,
  style: e,
  top: t,
  rows: n,
  height: r,
  rowHeight: o,
  fixedLeftCols: l,
  fixedRightCols: a,
  scrollCols: c,
  flexLeftWidth: p,
  scrollWidth: i,
  scrollWidthTotal: _,
  flexRightWidth: d,
  scrollLeft: h,
  onRenderCell: f
}) {
  return e = { ...e, top: t, height: r }, /* @__PURE__ */ w("div", {
    className: Y("dtable-rows", s),
    style: e
  }, n.map((y) => /* @__PURE__ */ w(ie, {
    rowID: y.data.id,
    top: y.top,
    height: o,
    fixedLeftCols: l,
    fixedRightCols: a,
    scrollCols: c,
    flexLeftWidth: p,
    scrollWidth: i,
    scrollWidthTotal: _,
    flexRightWidth: d,
    scrollLeft: h,
    data: y.data,
    onRenderCell: f
  })));
}
const _t = /* @__PURE__ */ new Map();
function Me(s, e = !1) {
  if (!e && _t.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  _t.set(s.name, s);
}
function $e(s) {
  return _t.get(s);
}
function xe(s) {
  return _t.delete(s);
}
function Ee(s) {
  return s != null && s.length ? s.reduce((e, t) => {
    if (typeof t == "string") {
      const n = $e(t);
      n ? e.push(n) : console.warn(`DTable: Cannot found plugin "${t}"`);
    } else
      typeof t == "object" ? e.push(t) : console.warn("DTable: Invalid plugin", t);
    return e;
  }, []) : [];
}
function Ce(s, e) {
  return s.reduce((t, n) => typeof n.options == "function" ? { ...t, ...n.options(t) } : n.options ? { ...t, ...n.options } : t, e);
}
function le() {
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
var X, E, L;
class St extends J {
  constructor() {
    super(...arguments);
    S(this, "state", { scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {} });
    S(this, "ref", Kt());
    T(this, X, !1);
    T(this, E, void 0);
    T(this, L, void 0);
    S(this, "_handleRenderCell", (t, n, r, o) => {
      var l, a;
      return (l = g(this, E)) != null && l.onRenderCell && (o = g(this, E).onRenderCell(t, n, r, o)), (a = g(this, L)) == null || a.forEach((c) => {
        c.onRenderCell && (o = c.onRenderCell(t, n, r, o));
      }), o;
    });
    S(this, "_handleScroll", (t, n) => {
      n === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    S(this, "_handleClick", (t) => {
      var p, i, _, d, h, f, y, m, b, M, A, D, W, $;
      const n = t.target;
      if (!n)
        return;
      const r = n.closest(".dtable-cell"), o = n.closest(".dtable-row"), l = (p = r == null ? void 0 : r.getAttribute("data-col")) != null ? p : "", a = (i = o == null ? void 0 : o.getAttribute("data-id")) != null ? i : "", c = (d = (_ = g(this, E)) == null ? void 0 : _.data) == null ? void 0 : d.find((v) => v.id === a);
      if (r)
        if (a === "HEADER")
          (f = (h = g(this, E)) == null ? void 0 : h.onHeaderCellClick) == null || f.call(h, t, { colName: l }), (y = g(this, L)) == null || y.forEach((v) => {
            var N;
            (N = v.onHeaderCellClick) == null || N.call(v, t, { colName: l });
          });
        else {
          if (((b = (m = g(this, E)) == null ? void 0 : m.onCellClick) == null ? void 0 : b.call(m, t, { colName: l, rowID: a, rowData: c })) === !0)
            return;
          if ((M = g(this, L)) != null && M.length) {
            for (const v of g(this, L))
              if (((A = v.onCellClick) == null ? void 0 : A.call(v, t, { colName: l, rowID: a, rowData: c })) === !0)
                return;
          }
        }
      (W = (D = g(this, E)) == null ? void 0 : D.onRowClick) == null || W.call(D, t, { rowID: a, rowData: c }), ($ = g(this, L)) == null || $.forEach((v) => {
        var N;
        (N = v.onRowClick) == null || N.call(v, t, { rowID: a, rowData: c });
      });
    });
  }
  componentDidMount() {
    var t, n, r;
    g(this, X) ? this.forceUpdate() : (n = (t = g(this, E)) == null ? void 0 : t.afterRender) == null || n.call(t, g(this, E), this.state), (r = this.ref.current) == null || r.addEventListener("click", this._handleClick);
  }
  componentDidUpdate() {
    var t, n;
    H(this, X, !1), (n = (t = g(this, E)) == null ? void 0 : t.afterRender) == null || n.call(t, g(this, E), this.state);
  }
  componentWillUnmount() {
    var t;
    (t = this.ref.current) == null || t.removeEventListener("click", this._handleClick);
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var n, r, o;
      (r = (n = g(this, E)) == null ? void 0 : n.onScroll) == null || r.call(n, t, "horz"), (o = g(this, L)) == null || o.forEach((l) => {
        var a;
        (a = l.onScroll) == null || a.call(l, t, "horz");
      });
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var n, r, o;
      (r = (n = g(this, E)) == null ? void 0 : n.onScroll) == null || r.call(n, t, "vert"), (o = g(this, L)) == null || o.forEach((l) => {
        var a;
        (a = l.onScroll) == null || a.call(l, t, "vert");
      });
    });
  }
  getLayout() {
    var Lt, Dt, Wt;
    const t = { ...this.props }, n = Ee(t.plugins), r = { ...le(), ...Ce(n, t) };
    H(this, L, n), H(this, E, r);
    const {
      data: o,
      header: l,
      footer: a,
      rowHeight: c,
      defaultColWidth: p,
      minColWidth: i,
      maxColWidth: _,
      rowDataMap: d
    } = r, { scrollTop: h = 0, scrollLeft: f = 0, hiddenRows: y = {}, hiddenCols: m = {} } = this.state, b = l ? r.headerHeight || c : 0, M = a ? r.footerHeight || c : 0, A = (u, x, R) => (u && (x && (u = Math.max(x, u)), R && (u = Math.min(R, u))), u), D = [], W = [], $ = [];
    let v = 0, N = 0;
    r.cols.forEach((u) => {
      var zt, Pt;
      if (u.hidden || m[u.name])
        return;
      const { minWidth: x = i, maxWidth: R = _ } = u, st = A((zt = u.width) != null ? zt : 0, x, R), nt = (Pt = u.flex) != null ? Pt : 1, ce = nt * A(p, x, R), G = {
        ...u,
        left: 0,
        flex: nt,
        realWidth: st,
        flexWidth: ce,
        visible: !0
      };
      G.fixed === "left" ? (G.left = v, v += st, D.push(G)) : G.fixed === "right" ? (G.left = N, N += st, W.push(G)) : $.push(G);
    });
    let j = r.width, B = 0;
    if (typeof j == "function" && (j = j()), j === "auto")
      B = v + N, $.forEach((u) => {
        u.realWidth || (u.realWidth = u.flexWidth), B += u.realWidth;
      });
    else if (j === "100%") {
      const u = (Lt = this.ref.current) == null ? void 0 : Lt.parentElement;
      if (u)
        B = u.clientWidth;
      else {
        B = 0, H(this, X, !0);
        return;
      }
    } else
      B = j != null ? j : 0;
    let tt = 0;
    const ae = (Dt = d == null ? void 0 : d.$hidden) != null ? Dt : "$hidden", xt = o.reduce((u, x) => (!x[ae] && !y[x.id] && (u.push({ data: x, top: tt }), tt += c), u), []);
    let P = r.height, O = 0;
    if (typeof P == "function" && (P = P()), P === "auto")
      O = b + M + tt;
    else if (typeof P == "object")
      O = Math.min(P.max, Math.max(P.min, b + M + tt));
    else if (P === "100%") {
      const u = (Wt = this.ref.current) == null ? void 0 : Wt.parentElement;
      if (u)
        O = u.clientHeight;
      else {
        O = 0, H(this, X, !0);
        return;
      }
    } else
      O = P;
    const Et = O - b - M, Ct = h + Et, Ht = [], bt = B - v - N;
    let q = 0;
    const yt = [];
    let At = 0;
    if ($.forEach((u) => {
      u.realWidth ? q += u.realWidth : (yt.push(u), At += u.flex);
    }), yt.length) {
      const u = Math.max(0, bt - q);
      yt.forEach((x) => {
        var nt;
        const { minWidth: R = i, maxWidth: st = _ } = x;
        x.realWidth = Math.min(st, Math.max(R, Math.ceil(u * ((nt = x.flex) != null ? nt : 1) / At))), q += x.realWidth;
      });
    }
    q = 0, $.forEach((u) => {
      u.left += q, q += u.realWidth, (u.left + u.realWidth < f || u.left > f + bt) && (u.visible = !1);
    });
    const Nt = Math.floor(h / c), Tt = Math.min(xt.length, Math.ceil(Ct / c));
    for (let u = Nt; u < Tt; u++) {
      const x = o[u], R = u * c;
      Ht.push({ top: R - h, data: x });
    }
    let et = {
      options: r,
      plugins: n,
      width: B,
      height: O,
      rows: xt,
      visibleRows: Ht,
      rowHeight: c,
      rowsHeight: Et,
      rowsHeightTotal: tt,
      header: l,
      footer: a,
      headerHeight: b,
      footerHeight: M,
      colsInfo: {
        fixedLeftCols: D,
        fixedRightCols: W,
        scrollCols: $,
        flexLeftWidth: v,
        scrollWidth: bt,
        scrollWidthTotal: q,
        flexRightWidth: N
      },
      scrollBottom: Ct,
      scrollTop: h,
      scrollLeft: f,
      startRowIndex: Nt,
      endRowIndex: Tt
    };
    if (r.onLayout) {
      const u = r.onLayout(et, r, this.state);
      u && (et = u);
    }
    return n.forEach((u) => {
      if (u.onLayout) {
        const x = u.onLayout(et, r, this.state);
        x && (et = x);
      }
    }), et;
  }
  renderHeader(t) {
    const { header: n, colsInfo: r, headerHeight: o } = t;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ w(Se, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this._handleRenderCell,
        ...r
      });
    let l, a;
    if (typeof n == "function") {
      const c = n(t, this.state);
      typeof c == "object" && c && "__html" in c ? a = c : l = c;
    } else
      l = n;
    return /* @__PURE__ */ w("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: a
    }, l);
  }
  renderRows(t) {
    const { headerHeight: n, rowsHeight: r, visibleRows: o, rowHeight: l, colsInfo: a } = t;
    return /* @__PURE__ */ w(ke, {
      top: n,
      height: r,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      ...a
    });
  }
  renderFooter(t) {
    const { footer: n, footerHeight: r } = t;
    if (!n)
      return null;
    let o, l;
    if (typeof n == "function") {
      const a = n(t, this.state);
      typeof a == "object" && a && "__html" in a ? l = a : o = a;
    } else
      o = n;
    return /* @__PURE__ */ w("div", {
      className: "dtable-footer",
      style: { height: r },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(t) {
    const n = [], { scrollLeft: r, colsInfo: o, scrollTop: l, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: p, scrollWidth: i } = o, { scrollbarSize: _ = 10, horzScrollbarPos: d } = this.props;
    return p > i && n.push(/* @__PURE__ */ w(Vt, {
      key: "horz",
      type: "horz",
      defaultScrollPos: r,
      scrollSize: p,
      clientSize: i,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: d === "inside" ? 0 : -_,
      size: _,
      wheelContainer: ".dtable"
    })), c > a && n.push(/* @__PURE__ */ w(Vt, {
      key: "vert",
      type: "vert",
      defaultScrollPos: l,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: _,
      top: t.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  render() {
    var _;
    const t = this.getLayout(), { className: n, rowHover: r, colHover: o, cellHover: l, bordered: a, striped: c, scrollbarHover: p } = (_ = t == null ? void 0 : t.options) != null ? _ : this.props, i = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ w("div", {
      className: Y("dtable", n, {
        "-hover-row": r,
        "-hover-col": o,
        "-hover-cell": l,
        "-bordered": a,
        "-striped": c,
        "scrollbar-hover": p
      }),
      style: i,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
X = new WeakMap(), E = new WeakMap(), L = new WeakMap(), S(St, "addPlugin", Me), S(St, "removePlugin", xe);
class Fe {
  constructor(e, t) {
    S(this, "element");
    S(this, "options");
    S(this, "ref", Kt());
    this.element = e, this.options = { ...le(), ...t }, this.options.cols.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), ye(/* @__PURE__ */ w(St, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
let He = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var it, U, z, Z, K, ht;
const $t = class {
  constructor(e, t = "local") {
    T(this, K);
    T(this, it, void 0);
    T(this, U, void 0);
    T(this, z, void 0);
    T(this, Z, void 0);
    H(this, it, t), H(this, U, `ZUI_STORE:${e != null ? e : He()}`), H(this, z, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return g(this, it);
  }
  get session() {
    return this.type === "session" ? this : (g(this, Z) || H(this, Z, new $t(g(this, U), "session")), g(this, Z));
  }
  get(e, t) {
    const n = g(this, z).getItem(at(this, K, ht).call(this, e));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    g(this, z).setItem(at(this, K, ht).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    g(this, z).removeItem(at(this, K, ht).call(this, e));
  }
  each(e) {
    for (let t = 0; t < g(this, z).length; t++) {
      const n = g(this, z).key(t);
      if (n != null && n.startsWith(g(this, U))) {
        const r = g(this, z).getItem(n);
        typeof r == "string" && e(n.substring(g(this, U).length + 1), JSON.parse(r));
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
let pt = $t;
it = new WeakMap(), U = new WeakMap(), z = new WeakMap(), Z = new WeakMap(), K = new WeakSet(), ht = function(e) {
  return `${g(this, U)}:${e}`;
};
const Ae = new pt("DEFAULT");
function Ne(s, e = "local") {
  return new pt(s, e);
}
Object.assign(Ae, { create: Ne });
export {
  Fe as DTable,
  Vt as Scrollbar,
  I as TIME_DAY,
  Ft as calculateTimestamp,
  Y as classes,
  C as createDate,
  De as domReady,
  Ut as formatDate,
  je as formatDateSpan,
  Ue as getTimeBeforeDesc,
  Ie as isDBY,
  lt as isSameDay,
  _e as isSameMonth,
  We as isSameWeek,
  jt as isSameYear,
  ze as isToday,
  Re as isTomorrow,
  Pe as isYesterday,
  Le as selectText,
  Ae as store
};
