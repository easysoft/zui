var pe = Object.defineProperty;
var ge = (s, e, t) => e in s ? pe(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => (ge(s, typeof e != "symbol" ? e + "" : e, t), t), wt = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var m = (s, e, t) => (wt(s, e, "read from private field"), t ? t.call(s) : e.get(s)), N = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, H = (s, e, t, n) => (wt(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var ct = (s, e, t) => (wt(s, e, "access private method"), t);
const me = (s) => {
  const e = {};
  if (!s)
    return e;
  const t = Object.values(s.attributes);
  return t && t.length > 0 && t.forEach((n) => {
    const { name: i, value: o } = n;
    e[i] = o;
  }), e;
};
class be extends HTMLElement {
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
    const t = me(this);
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
customElements.get("zui-button") || customElements.define("zui-button", be);
var X, it;
class Ft {
  constructor(e) {
    N(this, X, void 0);
    N(this, it, void 0);
    var t;
    H(this, X, e), H(this, it, e.nextElementSibling), ((t = m(this, X).dataset) == null ? void 0 : t.toggle) === "dropdown" && !m(this, X).parentElement.className.includes("dropdown-hover") && this.toggle(m(this, X).parentElement, m(this, it));
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
X = new WeakMap(), it = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "dropdown" ? new Ft(s.target) : new Ft(s).clearMenu());
});
class Yt {
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
    const i = window.innerHeight, o = Math.max(0, (i - n.clientHeight) / 2);
    let l = null;
    if (e === "fit" ? l = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : e === "center" ? l = `${o}px` : this.isPlainObject(e) || (l = e), n.setAttribute("style", `top: ${l}`), n.className.includes("-fullscreen")) {
      let c = null;
      if (((a = n.childNodes) == null ? void 0 : a.length) && n.childNodes.length === 1 ? c = n.childNodes[0] : c = n.childNodes[1], c) {
        const _ = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, r = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], p = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, d = i - _ - p, h = r && r.scrollHeight > d ? "auto" : "visible";
        r && r.setAttribute("style", `max-height:${d}px;overflow:${h}`);
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
        const a = ((t = s.target) == null ? void 0 : t.href) || "";
        i = a && a.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), l = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new Yt(o, l);
    } else
      s.target.parentElement.className.includes("modal") || new Yt(s, { type: "hide" }).onClear();
});
function Re(s) {
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
function Ie(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
const O = (...s) => s.map((e) => Array.isArray(e) ? O(...e) : typeof e == "function" ? O(e()) : e !== null && typeof e == "object" ? Object.keys(e).filter((t) => {
  const n = e[t];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : e).filter((e) => typeof e == "string" && e.length).join(" "), I = 24 * 60 * 60 * 1e3, C = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), lt = (s, e = new Date()) => (s = C(s), e = C(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()), Bt = (s, e = new Date()) => C(s).getFullYear() === C(e).getFullYear(), ye = (s, e = new Date()) => (s = C(s), e = C(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), je = (s, e = new Date()) => {
  s = C(s), e = C(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Ue = (s, e) => lt(C(e), s), Fe = (s, e) => lt(C(e).getTime() - I, s), Ye = (s, e) => lt(C(e).getTime() + I, s), Be = (s, e) => lt(C(e).getTime() - 2 * I, s), Ot = (s, e = "yyyy-MM-dd hh:mm") => {
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
      const i = `${t[n]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, Oe = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = Ot(s, Bt(s) ? n.month : n.full);
  if (lt(s, e))
    return i;
  const o = Ot(e, Bt(s, e) ? ye(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
}, qe = (s) => {
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
}, qt = (s, e, t = !0, n = Date.now()) => {
  switch (e) {
    case "year":
      return s *= 365, qt(s, "day", t, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, qt(s, "day", t, n);
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
var mt, S, Qt, ot, Gt, ft = {}, te = [], ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function B(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function ee(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function v(s, e, t) {
  var n, i, o, l = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? i = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? mt.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      l[o] === void 0 && (l[o] = s.defaultProps[o]);
  return ht(s, l, n, i, null);
}
function ht(s, e, t, n, i) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Qt : i };
  return i == null && S.vnode != null && S.vnode(o), o;
}
function se() {
  return { current: null };
}
function bt(s) {
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
function ne(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return ne(s);
  }
}
function Vt(s) {
  (!s.__d && (s.__d = !0) && ot.push(s) && !ut.__r++ || Gt !== S.debounceRendering) && ((Gt = S.debounceRendering) || setTimeout)(ut);
}
function ut() {
  for (var s; ut.__r = ot.length; )
    s = ot.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), ot = [], s.some(function(e) {
      var t, n, i, o, l, a;
      e.__d && (l = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (i = B({}, o)).__v = o.__v + 1, Mt(a, o, i, t.__n, a.ownerSVGElement !== void 0, o.__h != null ? [l] : null, n, l == null ? Q(o) : l, o.__h), le(n, o), o.__e != l && ne(o)));
    });
}
function oe(s, e, t, n, i, o, l, a, c, _) {
  var r, p, d, h, u, y, g, b = n && n.__k || te, k = b.length;
  for (t.__k = [], r = 0; r < e.length; r++)
    if ((h = t.__k[r] = (h = e[r]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? ht(null, h, null, null, h) : Array.isArray(h) ? ht(bt, { children: h }, null, null, null) : h.__b > 0 ? ht(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = t, h.__b = t.__b + 1, (d = b[r]) === null || d && h.key == d.key && h.type === d.type)
        b[r] = void 0;
      else
        for (p = 0; p < k; p++) {
          if ((d = b[p]) && h.key == d.key && h.type === d.type) {
            b[p] = void 0;
            break;
          }
          d = null;
        }
      Mt(s, h, d = d || ft, i, o, l, a, c, _), u = h.__e, (p = h.ref) && d.ref != p && (g || (g = []), d.ref && g.push(d.ref, null, h), g.push(p, h.__c || u, h)), u != null ? (y == null && (y = u), typeof h.type == "function" && h.__k === d.__k ? h.__d = c = ie(h, c, s) : c = re(s, h, d, b, u, c), typeof t.type == "function" && (t.__d = c)) : c && d.__e == c && c.parentNode != s && (c = Q(d));
    }
  for (t.__e = y, r = k; r--; )
    b[r] != null && (typeof t.type == "function" && b[r].__e != null && b[r].__e == t.__d && (t.__d = Q(n, r + 1)), ce(b[r], b[r]));
  if (g)
    for (r = 0; r < g.length; r++)
      ae(g[r], g[++r], g[++r]);
}
function ie(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? ie(n, e, t) : re(t, n, n, i, n.__e, e));
  return e;
}
function re(s, e, t, n, i, o) {
  var l, a, c;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== s)
        s.appendChild(i), l = null;
      else {
        for (a = o, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
          if (a == i)
            break t;
        s.insertBefore(i, o), l = o;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function we(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || _t(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || _t(s, o, e[o], t[o], n);
}
function Xt(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t) : s[e] = t == null ? "" : typeof t != "number" || ve.test(e) ? t : t + "px";
}
function _t(s, e, t, n, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || Xt(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || Xt(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? Zt : Jt, o) : s.removeEventListener(e, o ? Zt : Jt, o);
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
function Jt(s) {
  this.l[s.type + !1](S.event ? S.event(s) : s);
}
function Zt(s) {
  this.l[s.type + !0](S.event ? S.event(s) : s);
}
function Mt(s, e, t, n, i, o, l, a, c) {
  var _, r, p, d, h, u, y, g, b, k, T, j, D, M = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (_ = S.__b) && _(e);
  try {
    t:
      if (typeof M == "function") {
        if (g = e.props, b = (_ = M.contextType) && n[_.__c], k = _ ? b ? b.props.value : _.__ : n, t.__c ? y = (r = e.__c = t.__c).__ = r.__E : ("prototype" in M && M.prototype.render ? e.__c = r = new M(g, k) : (e.__c = r = new J(g, k), r.constructor = M, r.render = ke), b && b.sub(r), r.props = g, r.state || (r.state = {}), r.context = k, r.__n = n, p = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), M.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = B({}, r.__s)), B(r.__s, M.getDerivedStateFromProps(g, r.__s))), d = r.props, h = r.state, p)
          M.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && g !== d && r.componentWillReceiveProps != null && r.componentWillReceiveProps(g, k), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(g, r.__s, k) === !1 || e.__v === t.__v) {
            r.props = g, r.state = r.__s, e.__v !== t.__v && (r.__d = !1), r.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), r.__h.length && l.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(g, r.__s, k), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(d, h, u);
          });
        }
        if (r.context = k, r.props = g, r.__v = e, r.__P = s, T = S.__r, j = 0, "prototype" in M && M.prototype.render)
          r.state = r.__s, r.__d = !1, T && T(e), _ = r.render(r.props, r.state, r.context);
        else
          do
            r.__d = !1, T && T(e), _ = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++j < 25);
        r.state = r.__s, r.getChildContext != null && (n = B(B({}, n), r.getChildContext())), p || r.getSnapshotBeforeUpdate == null || (u = r.getSnapshotBeforeUpdate(d, h)), D = _ != null && _.type === bt && _.key == null ? _.props.children : _, oe(s, Array.isArray(D) ? D : [D], e, t, n, i, o, l, a, c), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), y && (r.__E = r.__ = null), r.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Se(t.__e, e, t, n, i, o, l, c);
    (_ = S.diffed) && _(e);
  } catch (x) {
    e.__v = null, (c || o != null) && (e.__e = a, e.__h = !!c, o[o.indexOf(a)] = null), S.__e(x, e, t);
  }
}
function le(s, e) {
  S.__c && S.__c(e, s), s.some(function(t) {
    try {
      s = t.__h, t.__h = [], s.some(function(n) {
        n.call(t);
      });
    } catch (n) {
      S.__e(n, t.__v);
    }
  });
}
function Se(s, e, t, n, i, o, l, a) {
  var c, _, r, p = t.props, d = e.props, h = e.type, u = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; u < o.length; u++)
      if ((c = o[u]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
        s = c, o[u] = null;
        break;
      }
  }
  if (s == null) {
    if (h === null)
      return document.createTextNode(d);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), o = null, a = !1;
  }
  if (h === null)
    p === d || a && s.data === d || (s.data = d);
  else {
    if (o = o && mt.call(s.childNodes), _ = (p = t.props || ft).dangerouslySetInnerHTML, r = d.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, u = 0; u < s.attributes.length; u++)
          p[s.attributes[u].name] = s.attributes[u].value;
      (r || _) && (r && (_ && r.__html == _.__html || r.__html === s.innerHTML) || (s.innerHTML = r && r.__html || ""));
    }
    if (we(s, d, p, i, a), r)
      e.__k = [];
    else if (u = e.props.children, oe(s, Array.isArray(u) ? u : [u], e, t, n, i && h !== "foreignObject", o, l, o ? o[0] : t.__k && Q(t, 0), a), o != null)
      for (u = o.length; u--; )
        o[u] != null && ee(o[u]);
    a || ("value" in d && (u = d.value) !== void 0 && (u !== s.value || h === "progress" && !u || h === "option" && u !== p.value) && _t(s, "value", u, p.value, !1), "checked" in d && (u = d.checked) !== void 0 && u !== s.checked && _t(s, "checked", u, p.checked, !1));
  }
  return s;
}
function ae(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    S.__e(n, t);
  }
}
function ce(s, e, t) {
  var n, i;
  if (S.unmount && S.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || ae(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        S.__e(o, e);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && ce(n[i], e, typeof s.type != "function");
  t || s.__e == null || ee(s.__e), s.__e = s.__d = void 0;
}
function ke(s, e, t) {
  return this.constructor(s, t);
}
function Me(s, e, t) {
  var n, i, o;
  S.__ && S.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], Mt(e, s = (!n && t || e).__k = v(bt, null, [s]), i || ft, ft, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? mt.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n), le(o, s);
}
mt = te.slice, S = { __e: function(s, e, t, n) {
  for (var i, o, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), l = i.__d), l)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Qt = 0, J.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = B({}, this.state), typeof s == "function" && (s = s(B({}, t), this.props)), s && B(t, s), s != null && this.__v && (e && this.__h.push(e), Vt(this));
}, J.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Vt(this));
}, J.prototype.render = bt, ot = [], ut.__r = 0;
class Kt extends J {
  constructor(t) {
    var n;
    super(t);
    w(this, "_rafId", 0);
    w(this, "_handleWheel", (t) => {
      var i, o, l;
      !((o = t.target) != null && o.closest((i = this.props.wheelContainer) != null ? i : ".-scrollbar-container")) || (t.preventDefault(), this.scrollOffset((this.props.type === "horz" ? t.deltaX : t.deltaY) * ((l = this.props.wheelSpeed) != null ? l : 1)));
    });
    w(this, "_handleMouseMove", (t) => {
      const { dragStart: n } = this.state;
      n && (this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - n.x : t.clientY - n.y;
        this.scroll(n.offset + i * this.props.scrollSize / this.props.clientSize), this._rafId = 0;
      }), t.preventDefault());
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
      const i = n.getBoundingClientRect(), { type: o, clientSize: l, scrollSize: a } = this.props, c = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(c * a / l);
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
      style: a,
      left: c,
      top: _,
      bottom: r,
      right: p
    } = this.props, { maxScrollPos: d, scrollPos: h } = this, { dragStart: u } = this.state, y = {
      left: c,
      top: _,
      bottom: r,
      right: p,
      ...a
    }, g = {};
    return i === "horz" ? (y.height = o, y.width = n, g.width = Math.max(Math.round(n * n / t), o), g.left = Math.round(h * (n - g.width) / d)) : (y.width = o, y.height = n, g.height = this.barSize, g.top = Math.round(h * (n - g.height) / d)), /* @__PURE__ */ v("div", {
      className: O("scrollbar", l, {
        "is-vert": i === "vert",
        "is-horz": i === "horz",
        "is-dragging": u
      }),
      style: y,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ v("div", {
      className: "scrollbar-bar",
      style: g,
      onMouseDown: this._handleMouseDown
    }));
  }
}
function $t({ col: s, className: e, height: t, style: n, children: i, html: o, ...l }) {
  const a = {
    left: s.left,
    width: s.realWidth,
    height: t,
    ...n,
    ...s.cellStyle
  };
  return s.align && (a.textAlign = s.align), /* @__PURE__ */ v("div", {
    className: O("dtable-cell", s.className, e),
    style: a,
    ...l,
    "data-col": s.name,
    dangerouslySetInnerHTML: o
  }, i);
}
function $e({ className: s, style: e, col: t, height: n, children: i }) {
  let { sortType: o } = t;
  return o === !0 && (o = "none"), /* @__PURE__ */ v($t, {
    className: s,
    height: n,
    style: e,
    col: t,
    "data-sort": o || null,
    "data-type": t.type
  }, t.title, o && /* @__PURE__ */ v("div", {
    className: `dtable-sort -sort-${o}`
  }), i);
}
function xe(s) {
  const e = {};
  if (typeof s == "object" && s && ("html" in s || "children" in s)) {
    const { html: t, children: n, style: i, className: o } = s;
    t ? e.html = { __html: t } : n && (e.children = n), e.style = i, e.className = o;
  } else
    e.children = s;
  return e;
}
function St({ rowID: s, className: e, top: t = 0, left: n = 0, width: i, height: o, cols: l, data: a, CellComponent: c = $t, onRenderCell: _ }) {
  return /* @__PURE__ */ v("div", {
    className: O("dtable-cells", e),
    style: { top: t, left: n, width: i, height: o }
  }, l.map((r) => {
    if (!r.visible)
      return null;
    let p = a == null ? void 0 : a[r.name];
    if (r.onRenderCell) {
      const g = r.onRenderCell(s, r, a, p);
      g !== void 0 && (p = g);
    }
    if (_) {
      const g = _(s, r, a, p);
      g !== void 0 && (p = g);
    }
    const { children: d, html: h, className: u, style: y } = xe(p);
    return /* @__PURE__ */ v(c, {
      key: r.name,
      col: r,
      className: u,
      style: y,
      html: h
    }, d);
  }));
}
function he({
  rowID: s,
  className: e,
  top: t,
  height: n,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: l,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: _,
  flexRightWidth: r,
  scrollLeft: p,
  CellComponent: d = $t,
  onRenderCell: h,
  data: u
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ v(St, {
    className: "-fixed-left",
    cols: i,
    width: a,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: u
  }));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ v(St, {
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
  o != null && o.length && (b = /* @__PURE__ */ v(St, {
    className: "-fixed-right",
    cols: o,
    left: a + c,
    width: r,
    rowID: s,
    CellComponent: d,
    onRenderCell: h,
    data: u
  }));
  const k = { top: t, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ v("div", {
    className: O("dtable-row", e),
    style: k,
    "data-id": s
  }, y, g, b);
}
function Ee({
  height: s,
  fixedLeftCols: e,
  fixedRightCols: t,
  scrollCols: n,
  flexLeftWidth: i,
  scrollWidth: o,
  flexRightWidth: l,
  scrollWidthTotal: a,
  scrollLeft: c,
  onRenderCell: _
}) {
  return /* @__PURE__ */ v("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ v(he, {
    rowID: "HEADER",
    className: "-in-header",
    top: 0,
    height: s,
    fixedLeftCols: e,
    fixedRightCols: t,
    scrollCols: n,
    flexLeftWidth: i,
    scrollWidth: o,
    scrollWidthTotal: a,
    flexRightWidth: l,
    scrollLeft: c,
    CellComponent: $e,
    onRenderCell: _
  }));
}
function Ce({
  className: s,
  style: e,
  top: t,
  rows: n,
  height: i,
  rowHeight: o,
  fixedLeftCols: l,
  fixedRightCols: a,
  scrollCols: c,
  flexLeftWidth: _,
  scrollWidth: r,
  scrollWidthTotal: p,
  flexRightWidth: d,
  scrollLeft: h,
  onRenderCell: u
}) {
  return e = { ...e, top: t, height: i }, /* @__PURE__ */ v("div", {
    className: O("dtable-rows", s),
    style: e
  }, n.map((y) => /* @__PURE__ */ v(he, {
    rowID: y.data.id,
    top: y.top,
    height: o,
    fixedLeftCols: l,
    fixedRightCols: a,
    scrollCols: c,
    flexLeftWidth: _,
    scrollWidth: r,
    scrollWidthTotal: p,
    flexRightWidth: d,
    scrollLeft: h,
    data: y.data,
    onRenderCell: u
  })));
}
const pt = /* @__PURE__ */ new Map();
function He(s, e = !1) {
  if (!e && pt.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  pt.set(s.name, s);
}
function Te(s) {
  return pt.get(s);
}
function Ae(s) {
  return pt.delete(s);
}
function Ne(s) {
  return s != null && s.length ? s.reduce((e, t) => {
    if (typeof t == "string") {
      const n = Te(t);
      n ? e.push(n) : console.warn(`DTable: Cannot found plugin "${t}"`);
    } else
      typeof t == "object" ? e.push(t) : console.warn("DTable: Invalid plugin", t);
    return e;
  }, []) : [];
}
function Le(s, e) {
  return s.reduce((t, n) => typeof n.options == "function" ? { ...t, ...n.options(t) } : n.options ? { ...t, ...n.options } : t, e);
}
function de() {
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
var F, E, L;
class kt extends J {
  constructor() {
    super(...arguments);
    w(this, "state", { scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {} });
    w(this, "ref", se());
    N(this, F, !1);
    N(this, E, void 0);
    N(this, L, void 0);
    w(this, "_handleRenderCell", (t, n, i, o) => {
      var l, a;
      if ((l = m(this, E)) != null && l.onRenderCell) {
        const c = m(this, E).onRenderCell.call(this, t, n, i, o);
        c !== void 0 && (o = c);
      }
      return (a = m(this, L)) == null || a.forEach((c) => {
        var r;
        const _ = (r = c.onRenderCell) == null ? void 0 : r.call(this, t, n, i, o);
        _ !== void 0 && (o = _);
      }), o;
    });
    w(this, "_handleScroll", (t, n) => {
      n === "horz" ? this.scrollLeft(t) : this.scrollTop(t);
    });
    w(this, "_handleClick", (t) => {
      var _, r, p, d, h, u, y, g, b, k, T, j, D, M;
      const n = t.target;
      if (!n)
        return;
      const i = n.closest(".dtable-cell"), o = n.closest(".dtable-row"), l = (_ = i == null ? void 0 : i.getAttribute("data-col")) != null ? _ : "", a = (r = o == null ? void 0 : o.getAttribute("data-id")) != null ? r : "", c = (d = (p = m(this, E)) == null ? void 0 : p.data) == null ? void 0 : d.find((x) => x.id === a);
      if (i)
        if (a === "HEADER")
          (u = (h = m(this, E)) == null ? void 0 : h.onHeaderCellClick) == null || u.call(h, t, { colName: l }), (y = m(this, L)) == null || y.forEach((x) => {
            var A;
            (A = x.onHeaderCellClick) == null || A.call(this, t, { colName: l });
          });
        else {
          if (((b = (g = m(this, E)) == null ? void 0 : g.onCellClick) == null ? void 0 : b.call(this, t, { colName: l, rowID: a, rowData: c })) === !0)
            return;
          if ((k = m(this, L)) != null && k.length) {
            for (const x of m(this, L))
              if (((T = x.onCellClick) == null ? void 0 : T.call(this, t, { colName: l, rowID: a, rowData: c })) === !0)
                return;
          }
        }
      (D = (j = m(this, E)) == null ? void 0 : j.onRowClick) == null || D.call(this, t, { rowID: a, rowData: c }), (M = m(this, L)) == null || M.forEach((x) => {
        var A;
        (A = x.onRowClick) == null || A.call(this, t, { rowID: a, rowData: c });
      });
    });
  }
  get options() {
    return m(this, E);
  }
  get plugins() {
    return m(this, L);
  }
  componentDidMount() {
    var t;
    m(this, F) ? this.forceUpdate() : this._afterRender(), (t = this.ref.current) == null || t.addEventListener("click", this._handleClick);
  }
  componentDidUpdate() {
    m(this, F) && this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.ref.current) == null || t.removeEventListener("click", this._handleClick);
  }
  scrollLeft(t) {
    this.setState({ scrollLeft: t }, () => {
      var n, i;
      (i = (n = m(this, E)) == null ? void 0 : n.onScroll) == null || i.call(n, t, "horz");
    });
  }
  scrollTop(t) {
    this.setState({ scrollTop: t }, () => {
      var n, i;
      (i = (n = m(this, E)) == null ? void 0 : n.onScroll) == null || i.call(n, t, "vert");
    });
  }
  getLayout() {
    var Dt, zt, Wt;
    const t = { ...this.props }, n = Ne(t.plugins), i = { ...de(), ...Le(n, t) };
    H(this, L, Object.freeze(n)), H(this, E, Object.freeze(i));
    const {
      data: o,
      header: l,
      footer: a,
      rowHeight: c,
      defaultColWidth: _,
      minColWidth: r,
      maxColWidth: p,
      rowDataMap: d
    } = i, { scrollTop: h = 0, scrollLeft: u = 0, hiddenRows: y = {}, hiddenCols: g = {} } = this.state, b = l ? i.headerHeight || c : 0, k = a ? i.footerHeight || c : 0, T = (f, $, R) => (f && ($ && (f = Math.max($, f)), R && (f = Math.min(R, f))), f), j = [], D = [], M = [];
    let x = 0, A = 0;
    i.cols.forEach((f) => {
      var Pt, Rt;
      if (f.hidden || g[f.name])
        return;
      const { minWidth: $ = r, maxWidth: R = p } = f, st = T((Pt = f.width) != null ? Pt : 0, $, R), nt = (Rt = f.flex) != null ? Rt : 1, ue = nt * T(_, $, R), z = {
        ...f,
        left: 0,
        flex: nt,
        realWidth: st,
        flexWidth: ue,
        visible: !0
      };
      z.fixed === "left" ? (z.left = x, x += st, j.push(z)) : z.fixed === "right" ? (z.left = A, A += st, D.push(z)) : M.push(z), n.forEach((_e) => {
        var jt, Ut;
        const at = (Ut = _e.colTypes) == null ? void 0 : Ut[(jt = z.type) != null ? jt : ""];
        if (!at)
          return;
        const It = typeof at == "function" ? at(z) : at;
        It && Object.assign(z, It);
      });
    });
    let U = i.width, q = 0;
    if (typeof U == "function" && (U = U()), U === "auto")
      q = x + A, M.forEach((f) => {
        f.realWidth || (f.realWidth = f.flexWidth), q += f.realWidth;
      });
    else if (U === "100%") {
      const f = (Dt = this.ref.current) == null ? void 0 : Dt.parentElement;
      if (f)
        q = f.clientWidth;
      else {
        q = 0, H(this, F, !0);
        return;
      }
    } else
      q = U != null ? U : 0;
    let tt = 0;
    const fe = (zt = d == null ? void 0 : d.$hidden) != null ? zt : "$hidden", Et = o.reduce((f, $) => (!$[fe] && !y[$.id] && (f.push({ data: $, top: tt }), tt += c), f), []);
    let P = i.height, G = 0;
    if (typeof P == "function" && (P = P()), P === "auto")
      G = b + k + tt;
    else if (typeof P == "object")
      G = Math.min(P.max, Math.max(P.min, b + k + tt));
    else if (P === "100%") {
      const f = (Wt = this.ref.current) == null ? void 0 : Wt.parentElement;
      if (f)
        G = f.clientHeight;
      else {
        G = 0, H(this, F, !0);
        return;
      }
    } else
      G = P;
    const Ct = G - b - k, Ht = h + Ct, Tt = [], yt = q - x - A;
    let V = 0;
    const vt = [];
    let At = 0;
    if (M.forEach((f) => {
      f.realWidth ? V += f.realWidth : (vt.push(f), At += f.flex);
    }), vt.length) {
      const f = Math.max(0, yt - V);
      vt.forEach(($) => {
        var nt;
        const { minWidth: R = r, maxWidth: st = p } = $;
        $.realWidth = Math.min(st, Math.max(R, Math.ceil(f * ((nt = $.flex) != null ? nt : 1) / At))), V += $.realWidth;
      });
    }
    V = 0, M.forEach((f) => {
      f.left += V, V += f.realWidth, (f.left + f.realWidth < u || f.left > u + yt) && (f.visible = !1);
    });
    const Nt = Math.floor(h / c), Lt = Math.min(Et.length, Math.ceil(Ht / c));
    for (let f = Nt; f < Lt; f++) {
      const $ = o[f], R = f * c;
      Tt.push({ top: R - h, data: $ });
    }
    let et = {
      options: i,
      plugins: n,
      width: q,
      height: G,
      rows: Et,
      visibleRows: Tt,
      rowHeight: c,
      rowsHeight: Ct,
      rowsHeightTotal: tt,
      header: l,
      footer: a,
      headerHeight: b,
      footerHeight: k,
      colsInfo: {
        fixedLeftCols: j,
        fixedRightCols: D,
        scrollCols: M,
        flexLeftWidth: x,
        scrollWidth: yt,
        scrollWidthTotal: V,
        flexRightWidth: A
      },
      scrollBottom: Ht,
      scrollTop: h,
      scrollLeft: u,
      startRowIndex: Nt,
      endRowIndex: Lt
    };
    if (i.onLayout) {
      const f = i.onLayout(et, i, this.state);
      f && (et = f);
    }
    return n.forEach((f) => {
      if (f.onLayout) {
        const $ = f.onLayout.call(this, et, i, this.state);
        $ && (et = $);
      }
    }), et;
  }
  renderHeader(t) {
    const { header: n, colsInfo: i, headerHeight: o } = t;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ v(Ee, {
        scrollLeft: this.state.scrollLeft,
        height: o,
        onRenderCell: this._handleRenderCell,
        ...i
      });
    let l, a;
    if (typeof n == "function") {
      const c = n(t, this.state);
      typeof c == "object" && c && "__html" in c ? a = c : l = c;
    } else
      l = n;
    return /* @__PURE__ */ v("div", {
      className: "dtable-header",
      style: { height: o },
      dangerouslySetInnerHTML: a
    }, l);
  }
  renderRows(t) {
    const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: l, colsInfo: a } = t;
    return /* @__PURE__ */ v(Ce, {
      top: n,
      height: i,
      rows: o,
      rowHeight: l,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      ...a
    });
  }
  renderFooter(t) {
    const { footer: n, footerHeight: i } = t;
    if (!n)
      return null;
    let o, l;
    if (typeof n == "function") {
      const a = n(t, this.state);
      typeof a == "object" && a && "__html" in a ? l = a : o = a;
    } else
      o = n;
    return /* @__PURE__ */ v("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: l
    }, o);
  }
  renderScrollBars(t) {
    const n = [], { scrollLeft: i, colsInfo: o, scrollTop: l, rowsHeight: a, rowsHeightTotal: c } = t, { scrollWidthTotal: _, scrollWidth: r } = o, { scrollbarSize: p = 10, horzScrollbarPos: d } = this.props;
    return _ > r && n.push(/* @__PURE__ */ v(Kt, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: _,
      clientSize: r,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: d === "inside" ? 0 : -p,
      size: p,
      wheelContainer: ".dtable"
    })), c > a && n.push(/* @__PURE__ */ v(Kt, {
      key: "vert",
      type: "vert",
      scrollPos: l,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: p,
      top: t.headerHeight,
      wheelContainer: ".dtable"
    })), n.length ? n : null;
  }
  _afterRender() {
    var t, n, i;
    H(this, F, !1), (n = (t = m(this, E)) == null ? void 0 : t.afterRender) == null || n.call(this, m(this, E), this.state), (i = m(this, L)) == null || i.forEach((o) => {
      var l;
      return (l = o.afterRender) == null ? void 0 : l.call(this, m(this, E), this.state);
    });
  }
  render() {
    var p;
    const t = this.getLayout(), { className: n, rowHover: i, colHover: o, cellHover: l, bordered: a, striped: c, scrollbarHover: _ } = (p = t == null ? void 0 : t.options) != null ? p : this.props, r = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height };
    return /* @__PURE__ */ v("div", {
      className: O("dtable", n, {
        "-hover-row": i,
        "-hover-col": o,
        "-hover-cell": l,
        "-bordered": a,
        "-striped": c,
        "scrollbar-hover": _
      }),
      style: r,
      ref: this.ref
    }, t && this.renderHeader(t), t && this.renderRows(t), t && this.renderFooter(t), t && this.renderScrollBars(t));
  }
}
F = new WeakMap(), E = new WeakMap(), L = new WeakMap(), w(kt, "addPlugin", He), w(kt, "removePlugin", Ae);
class Ge {
  constructor(e, t) {
    w(this, "element");
    w(this, "options");
    w(this, "ref", se());
    this.element = e, this.options = { ...de(), ...t }, this.options.cols.length && this.render();
  }
  render(e) {
    this.options = Object.assign(this.options, e), Me(/* @__PURE__ */ v(kt, {
      ref: this.ref,
      ...this.options
    }), this.element);
  }
}
let De = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var rt, Y, W, Z, K, dt;
const xt = class {
  constructor(e, t = "local") {
    N(this, K);
    N(this, rt, void 0);
    N(this, Y, void 0);
    N(this, W, void 0);
    N(this, Z, void 0);
    H(this, rt, t), H(this, Y, `ZUI_STORE:${e != null ? e : De()}`), H(this, W, t === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return m(this, rt);
  }
  get session() {
    return this.type === "session" ? this : (m(this, Z) || H(this, Z, new xt(m(this, Y), "session")), m(this, Z));
  }
  get(e, t) {
    const n = m(this, W).getItem(ct(this, K, dt).call(this, e));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : t;
  }
  set(e, t) {
    if (t == null)
      return this.remove(e);
    m(this, W).setItem(ct(this, K, dt).call(this, e), JSON.stringify(t));
  }
  remove(e) {
    m(this, W).removeItem(ct(this, K, dt).call(this, e));
  }
  each(e) {
    for (let t = 0; t < m(this, W).length; t++) {
      const n = m(this, W).key(t);
      if (n != null && n.startsWith(m(this, Y))) {
        const i = m(this, W).getItem(n);
        typeof i == "string" && e(n.substring(m(this, Y).length + 1), JSON.parse(i));
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
let gt = xt;
rt = new WeakMap(), Y = new WeakMap(), W = new WeakMap(), Z = new WeakMap(), K = new WeakSet(), dt = function(e) {
  return `${m(this, Y)}:${e}`;
};
const ze = new gt("DEFAULT");
function We(s, e = "local") {
  return new gt(s, e);
}
Object.assign(ze, { create: We });
export {
  Ge as DTable,
  Kt as Scrollbar,
  I as TIME_DAY,
  qt as calculateTimestamp,
  O as classes,
  C as createDate,
  Ie as domReady,
  Ot as formatDate,
  Oe as formatDateSpan,
  qe as getTimeBeforeDesc,
  Be as isDBY,
  lt as isSameDay,
  ye as isSameMonth,
  je as isSameWeek,
  Bt as isSameYear,
  Ue as isToday,
  Ye as isTomorrow,
  Fe as isYesterday,
  Re as selectText,
  ze as store
};
