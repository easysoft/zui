var Bn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var M = (s, t, e) => (Bn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), W = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, B = (s, t, e, n) => (Bn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var ve = (s, t, e) => (Bn(s, t, "access private method"), e);
const Rt = document, Js = window, bo = Rt.documentElement, _e = Rt.createElement.bind(Rt), wo = _e("div"), Fn = _e("table"), Hl = _e("tbody"), Lr = _e("tr"), { isArray: wn, prototype: Co } = Array, { concat: Ol, filter: Bi, indexOf: ko, map: xo, push: Bl, slice: $o, some: Fi, splice: Fl } = Co, zl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Vl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ul = /<.+>/, jl = /^\w+$/;
function zi(s, t) {
  const e = Kl(t);
  return !s || !e && !ue(t) && !X(t) ? [] : !e && Vl.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && jl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Cn {
  constructor(t, e) {
    if (!t)
      return;
    if (si(t))
      return t;
    let n = t;
    if (st(t)) {
      const i = e || Rt;
      if (n = zl.test(t) && ue(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ul.test(t) ? To(t) : si(i) ? i.find(t) : st(i) ? u(i).find(t) : zi(t, i), !n)
        return;
    } else if (ye(t))
      return this.ready(t);
    (n.nodeType || n === Js) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Cn(t, e);
  }
}
const $ = Cn.prototype, u = $.init;
u.fn = u.prototype = $;
$.length = 0;
$.splice = Fl;
typeof Symbol == "function" && ($[Symbol.iterator] = Co[Symbol.iterator]);
function si(s) {
  return s instanceof Cn;
}
function Ae(s) {
  return !!s && s === s.window;
}
function ue(s) {
  return !!s && s.nodeType === 9;
}
function Kl(s) {
  return !!s && s.nodeType === 11;
}
function X(s) {
  return !!s && s.nodeType === 1;
}
function ql(s) {
  return !!s && s.nodeType === 3;
}
function Yl(s) {
  return typeof s == "boolean";
}
function ye(s) {
  return typeof s == "function";
}
function st(s) {
  return typeof s == "string";
}
function ct(s) {
  return s === void 0;
}
function es(s) {
  return s === null;
}
function So(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Vi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ae;
u.isFunction = ye;
u.isArray = wn;
u.isNumeric = So;
u.isPlainObject = Vi;
function Z(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Vi(s)) {
    const n = Object.keys(s);
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      if (t.call(s[o], o, s[o]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
u.each = Z;
$.each = function(s) {
  return Z(this, s);
};
$.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Qs(...s) {
  const t = Yl(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Qs(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (wn(r[o]) || Vi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Qs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Qs;
$.extend = function(s) {
  return Qs($, s);
};
const Gl = /\S+/g;
function kn(s) {
  return st(s) ? s.match(Gl) || [] : [];
}
$.toggleClass = function(s, t) {
  const e = kn(s), n = !ct(t);
  return this.each((i, r) => {
    X(r) && Z(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(s) {
  return this.toggleClass(s, !0);
};
$.removeAttr = function(s) {
  const t = kn(s);
  return this.each((e, n) => {
    X(n) && Z(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Xl(s, t) {
  if (s) {
    if (st(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return es(e) ? void 0 : e;
      }
      return ct(t) ? this : es(t) ? this.removeAttr(s) : this.each((e, n) => {
        X(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
$.attr = Xl;
$.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
$.hasClass = function(s) {
  return !!s && Fi.call(this, (t) => X(t) && t.classList.contains(s));
};
$.get = function(s) {
  return ct(s) ? $o.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
$.eq = function(s) {
  return u(this.get(s));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function Zl(s) {
  return ct(s) ? this.get().map((t) => X(t) || ql(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = s);
  });
}
$.text = Zl;
function Wt(s, t, e) {
  if (!X(s))
    return;
  const n = Js.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function kt(s, t) {
  return parseInt(Wt(s, t), 10) || 0;
}
function Rr(s, t) {
  return kt(s, `border${t ? "Left" : "Top"}Width`) + kt(s, `padding${t ? "Left" : "Top"}`) + kt(s, `padding${t ? "Right" : "Bottom"}`) + kt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const zn = {};
function Jl(s) {
  if (zn[s])
    return zn[s];
  const t = _e(s);
  Rt.body.insertBefore(t, null);
  const e = Wt(t, "display");
  return Rt.body.removeChild(t), zn[s] = e !== "none" ? e : "block";
}
function Wr(s) {
  return Wt(s, "display") === "none";
}
function No(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function xn(s) {
  return st(s) ? (t, e) => No(e, s) : ye(s) ? s : si(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
$.filter = function(s) {
  const t = xn(s);
  return u(Bi.call(this, (e, n) => t.call(e, n, e)));
};
function Jt(s, t) {
  return t ? s.filter(t) : s;
}
$.detach = function(s) {
  return Jt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Ql = /^\s*<(\w+)[^>]*>/, tc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Hr = {
  "*": wo,
  tr: Hl,
  td: Lr,
  th: Lr,
  thead: Fn,
  tbody: Fn,
  tfoot: Fn
};
function To(s) {
  if (!st(s))
    return [];
  if (tc.test(s))
    return [_e(RegExp.$1)];
  const t = Ql.test(s) && RegExp.$1, e = Hr[t] || Hr["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = To;
$.has = function(s) {
  const t = st(s) ? (e, n) => zi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
$.not = function(s) {
  const t = xn(s);
  return this.filter((e, n) => (!st(s) || X(n)) && !t.call(n, e, n));
};
function Ot(s, t, e, n) {
  const i = [], r = ye(t), o = n && xn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Bl.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Eo(s) {
  return s.multiple && s.options ? Ot(Bi.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function ec(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Wo.test(e.type)) {
      const i = wn(s) ? xo.call(s, String) : es(s) ? [] : [String(s)];
      n ? Z(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ct(s) || es(s) ? "" : s;
  }) : this[0] && Eo(this[0]);
}
$.val = ec;
$.is = function(s) {
  const t = xn(s);
  return Fi.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function Nt(s) {
  return s.length > 1 ? Bi.call(s, (t, e, n) => ko.call(n, t) === e) : s;
}
u.unique = Nt;
$.add = function(s, t) {
  return u(Nt(this.get().concat(u(s, t).get())));
};
$.children = function(s) {
  return Jt(u(Nt(Ot(this, (t) => t.children))), s);
};
$.parent = function(s) {
  return Jt(u(Nt(Ot(this, "parentNode"))), s);
};
$.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return ko.call(e, t);
};
$.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
$.siblings = function(s) {
  return Jt(u(Nt(Ot(this, (t) => u(t).parent().children().not(t)))), s);
};
$.find = function(s) {
  return u(Nt(Ot(this, (t) => zi(s, t))));
};
const sc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, nc = /^$|^module$|\/(java|ecma)script/i, ic = ["type", "src", "nonce", "noModule"];
function rc(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (nc.test(i.type) && bo.contains(i)) {
      const r = _e("script");
      r.text = i.textContent.replace(sc, ""), Z(ic, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function oc(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && rc(t, s.ownerDocument);
}
function Qt(s, t, e, n, i, r, o, a) {
  return Z(s, (l, c) => {
    Z(u(c), (d, h) => {
      Z(u(t), (m, p) => {
        const _ = e ? h : p, g = e ? p : h, v = e ? d : m;
        oc(_, v ? g.cloneNode(!0) : g, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return Qt(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return Qt(arguments, this, !1, !1, !0);
};
function ac(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    X(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
$.html = ac;
$.appendTo = function(s) {
  return Qt(arguments, this, !0, !1, !0);
};
$.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
$.before = function() {
  return Qt(arguments, this, !1, !0);
};
$.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
$.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
$.insertAfter = function(s) {
  return Qt(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(s) {
  return Qt(arguments, this, !0, !0);
};
$.prepend = function() {
  return Qt(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(s) {
  return Qt(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return u(Nt(Ot(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
$.next = function(s, t, e) {
  return Jt(u(Nt(Ot(this, "nextElementSibling", t, e))), s);
};
$.nextAll = function(s) {
  return this.next(s, !0);
};
$.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
$.parents = function(s, t) {
  return Jt(u(Nt(Ot(this, "parentElement", !0, t))), s);
};
$.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
$.prev = function(s, t, e) {
  return Jt(u(Nt(Ot(this, "previousElementSibling", t, e))), s);
};
$.prevAll = function(s) {
  return this.prev(s, !0);
};
$.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
$.map = function(s) {
  return u(Ol.apply([], xo.call(this, (t, e) => s.call(t, e, t))));
};
$.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Wt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || bo;
  });
};
$.slice = function(s, t) {
  return u($o.call(this, s, t));
};
const lc = /-([a-z])/g;
function Ui(s) {
  return s.replace(lc, (t, e) => e.toUpperCase());
}
$.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Rt.readyState !== "loading" ? t() : Rt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
$.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Js.pageYOffset,
    left: t.left + Js.pageXOffset
  };
};
$.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Wt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Wt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && X(i)) {
      const r = u(i).offset();
      e.top -= r.top + kt(i, "borderTopWidth"), e.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - kt(s, "marginTop"),
    left: e.left - kt(s, "marginLeft")
  };
};
const Mo = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
$.prop = function(s, t) {
  if (s) {
    if (st(s))
      return s = Mo[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
$.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Mo[s] || s];
  });
};
const cc = /^--/;
function ji(s) {
  return cc.test(s);
}
const Vn = {}, { style: hc } = wo, dc = ["webkit", "moz", "ms"];
function uc(s, t = ji(s)) {
  if (t)
    return s;
  if (!Vn[s]) {
    const e = Ui(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${dc.join(`${n} `)}${n}`.split(" ");
    Z(i, (r, o) => {
      if (o in hc)
        return Vn[s] = o, !1;
    });
  }
  return Vn[s];
}
const fc = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function Io(s, t, e = ji(s)) {
  return !e && !fc[s] && So(t) ? `${t}px` : t;
}
function pc(s, t) {
  if (st(s)) {
    const e = ji(s);
    return s = uc(s, e), arguments.length < 2 ? this[0] && Wt(this[0], s, e) : s ? (t = Io(s, t, e), this.each((n, i) => {
      X(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
$.css = pc;
function Po(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const mc = /^\s+|\s+$/;
function Or(s, t) {
  const e = s.dataset[t] || s.dataset[Ui(t)];
  return mc.test(e) ? e : Po(JSON.parse, e);
}
function gc(s, t, e) {
  e = Po(JSON.stringify, e), s.dataset[Ui(t)] = e;
}
function _c(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Or(this[0], n);
    return e;
  }
  if (st(s))
    return arguments.length < 2 ? this[0] && Or(this[0], s) : ct(t) ? this : this.each((e, n) => {
      gc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
$.data = _c;
function Ao(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Z([!0, !1], (s, t) => {
  Z(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    $[i] = function(r) {
      if (this[0])
        return Ae(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : ue(this[0]) ? Ao(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? kt(this[0], `margin${e ? "Top" : "Left"}`) + kt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  $[e] = function(n) {
    if (!this[0])
      return ct(n) ? void 0 : this;
    if (!arguments.length)
      return Ae(this[0]) ? this[0].document.documentElement[`client${t}`] : ue(this[0]) ? Ao(this[0], t) : this[0].getBoundingClientRect()[e] - Rr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Wt(o, "boxSizing");
      o.style[e] = Io(e, i + (a === "border-box" ? Rr(o, !s) : 0));
    });
  };
});
const Br = "___cd";
$.toggle = function(s) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const n = Wr(e);
    (ct(s) ? n : s) ? (e.style.display = e[Br] || "", Wr(e) && (e.style.display = Jl(e.tagName))) : n || (e[Br] = Wt(e, "display"), e.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const Fr = "___ce", Ki = ".", qi = { focus: "focusin", blur: "focusout" }, Do = { mouseenter: "mouseover", mouseleave: "mouseout" }, yc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Yi(s) {
  return Do[s] || qi[s] || s;
}
function Gi(s) {
  const t = s.split(Ki);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(s, t) {
  if (st(s)) {
    const [n, i] = Gi(s), r = Yi(n);
    if (!r)
      return this;
    const o = yc.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Rt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Ki), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in qi;
  return this.each((n, i) => {
    e && ye(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Lo(s) {
  return s[Fr] = s[Fr] || {};
}
function vc(s, t, e, n, i) {
  const r = Lo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function Ro(s, t) {
  return !t || !Fi.call(t, (e) => s.indexOf(e) < 0);
}
function tn(s, t, e, n, i) {
  const r = Lo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Ro(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      tn(s, t, e, n, i);
}
$.off = function(s, t, e) {
  if (ct(s))
    this.each((n, i) => {
      !X(i) && !ue(i) && !Ae(i) || tn(i);
    });
  else if (st(s))
    ye(t) && (e = t, t = ""), Z(kn(s), (n, i) => {
      const [r, o] = Gi(i), a = Yi(r);
      this.each((l, c) => {
        !X(c) && !ue(c) && !Ae(c) || tn(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
$.remove = function(s) {
  return Jt(this, s).detach().off(), this;
};
$.replaceWith = function(s) {
  return this.before(s).remove();
};
$.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function bc(s, t, e, n, i) {
  if (!st(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return st(t) || (ct(t) || es(t) ? t = "" : ct(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ye(n) || (n = e, e = void 0), n ? (Z(kn(s), (r, o) => {
    const [a, l] = Gi(o), c = Yi(a), d = a in Do, h = a in qi;
    c && this.each((m, p) => {
      if (!X(p) && !ue(p) && !Ae(p))
        return;
      const _ = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Ro(l, g.namespace.split(Ki)) || !t && (h && (g.target !== p || g.___ot === c) || d && g.relatedTarget && p.contains(g.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let b = g.target;
          for (; !No(b, t); )
            if (b === p || (b = b.parentNode, !b))
              return;
          v = b;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, g, g.___td);
        i && tn(p, c, l, t, _), y === !1 && (g.preventDefault(), g.stopPropagation());
      };
      _.guid = n.guid = n.guid || u.guid++, vc(p, c, l, t, _);
    });
  }), this) : this;
}
$.on = bc;
function wc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
$.one = wc;
const Cc = /\r?\n/g;
function kc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Cc, `\r
`))}`;
}
const xc = /file|reset|submit|button|image/i, Wo = /radio|checkbox/i;
$.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Z(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || xc.test(i.type) || Wo.test(i.type) && !i.checked)
        return;
      const r = Eo(i);
      if (!ct(r)) {
        const o = wn(r) ? r : [r];
        Z(o, (a, l) => {
          s += kc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function $c(s, t) {
  if (s == null)
    return [s, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), n = n[r], i.push(n), o !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(o) : n = n[o], i.push(n);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Sc(s, t, e) {
  try {
    const n = $c(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Q(s, ...t) {
  if (t.length === 0)
    return s;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const e = t[0];
    return Object.keys(e).forEach((n) => {
      const i = e[n] ?? "";
      s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let e = 0; e < t.length; e++) {
    const n = t[e] ?? "";
    s = s.replace(new RegExp(`\\{${e}\\}`, "g"), `${n}`);
  }
  return s;
}
var Xi = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Xi || {});
function Nc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Xi[e]).toFixed(t) + e);
}
const Tc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Xi[n];
};
let Zi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ut;
function Ec() {
  return Zi;
}
function Mc(s) {
  Zi = s.toLowerCase();
}
function Ho(s, t) {
  Ut || (Ut = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, Ut, s);
}
function J(s, t, e, n, i, r) {
  Array.isArray(s) ? Ut && s.unshift(Ut) : s = Ut ? [Ut, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || Zi;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Ut ? `${r}.${t}` : t;
    if (a = Sc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Ic(s, t, e, n) {
  return J(void 0, s, t, e, n);
}
J.addLang = Ho;
J.getLang = Ic;
J.getCode = Ec;
J.setCode = Mc;
Ho({
  zh_cn: {
    confirm: "确定",
    cancel: "取消",
    delete: "删除",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    cancel: "取消",
    delete: "刪除",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    delete: "Delete",
    add: "Add"
  }
});
function zr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Oo(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Oo(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Pc(s, t) {
  if (s) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [n, i] of Object.entries(e))
      if (i.split(",").map((r) => r.trim()).includes(s))
        return n;
  }
  return "text";
}
class Bo {
  get completed() {
    return this.data !== void 0 || this.error !== void 0;
  }
  get [Symbol.toStringTag]() {
    return "Ajax";
  }
  constructor(t) {
    this.setting = t, this._controller = new AbortController(), this._callbacks = { success: [], error: [], complete: [] };
  }
  on(t, e) {
    return this._callbacks[t].push(e), this;
  }
  success(t) {
    return this.on("success", t);
  }
  done(t) {
    return this.success(t);
  }
  fail(t) {
    return this.on("error", t);
  }
  complete(t) {
    return this.on("complete", t);
  }
  always(t) {
    return this.complete(t);
  }
  then(t, e) {
    return this.completed ? e && this.error ? e(this.error) : t(this.data) : (this.success((n) => t(n)), e && this.fail(e)), this;
  }
  catch(t) {
    return this.error ? (t(this.error), this) : this.on("error", (e) => t(e));
  }
  finally(t) {
    return this.completed ? (t(), this) : this.complete(() => t());
  }
  abort(t) {
    return this.completed ? !1 : (this._abortError = t, this._controller.abort(), !0);
  }
  getResponseHeader(t) {
    var e;
    return (e = this.response) == null ? void 0 : e.headers.get(t);
  }
  _init() {
    if (this.completed)
      return;
    const {
      url: t,
      type: e,
      data: n,
      processData: i = !0,
      contentType: r,
      crossDomain: o,
      accepts: a,
      dataType: l,
      timeout: c,
      dataFilter: d,
      beforeSend: h,
      success: m,
      error: p,
      complete: _,
      ...g
    } = this.setting;
    if ((h == null ? void 0 : h(g)) === !1)
      return;
    e && (g.method = e);
    let v = n;
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((b, [C, k]) => (Oo(b, C, k), b), new FormData()))), g.body = v), o && (g.mode = "cors");
    const y = g.headers || {};
    zr(y, "X-Requested-With", "XMLHttpRequest"), r && zr(y, "Content-Type", r), g.headers = y, g.signal && g.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), _ && this.complete(_), g.signal = this._controller.signal, this.url = t, this.request = g;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
    });
  }
  async send() {
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let o, a, l;
    try {
      o = await fetch(this.url, this.request), this.response = o;
      const { statusText: c } = o;
      if (o.ok) {
        const d = e || Pc(o.headers.get("Content-Type"), n);
        d === "blob" || d === "file" ? l = await o.blob() : d === "json" ? l = await o.json() : l = await o.text(), this.data = l;
        const h = (i == null ? void 0 : i(l, d)) ?? l;
        this._emit("success", h, c, o);
      } else
        throw new Error(c);
    } catch (c) {
      a = c;
      let d = !1;
      a.name === "AbortError" && (this._abortError ? a = this._abortError : d = !0), this.error = a, d || this._emit("error", a, o == null ? void 0 : o.statusText, a.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", o, o == null ? void 0 : o.statusText), a && r)
      throw a;
    return [l, a, o];
  }
}
u.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : u.extend(t, s);
  const e = new Bo(t);
  return e.send(), e;
};
u.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, u.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
u.post = (s, t, e, n) => u.get(s, t, e, n, "POST");
u.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return u.get(n, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function $n(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    u.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    u.extend(n, o);
  }
  e && u.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Bo(n), [r] = await i.send();
  return r;
}
function Vr(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
u.fetch = $n;
function Fo(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Fo(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...s) => Fo(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = x;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(s, ...t));
  });
};
const Ue = /* @__PURE__ */ new WeakMap();
function zo(s, t, e) {
  const n = Ue.has(s), i = n ? Ue.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), Ue.set(s, i)) : Ue.delete(s);
}
function Vo(s, t, e) {
  let n = Ue.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Vo(this[0], t) : this.each((n, i) => zo(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => zo(e, s));
};
function Ur(s) {
  const t = u(s)[0];
  if (t)
    return Array.from(t.attributes).reduce((e, n) => {
      let { name: i, value: r } = n;
      if (i.startsWith("z-")) {
        i = i.slice(2).replace(/-([a-z])/g, (o) => o[1].toUpperCase());
        try {
          r = JSON.parse(r);
        } catch {
        }
        e[i] = r;
      }
      return e;
    }, {});
}
function jr(s, t) {
  const e = u(s);
  Object.keys(t).forEach((n) => {
    let i = t[n];
    typeof i != "string" && (i = JSON.stringify(i)), n = n.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`), e.attr(`z-${n}`, i);
  });
}
function Ac(...s) {
  var e;
  const t = s.length;
  if (!t)
    return Ur(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = Ur(this)) == null ? void 0 : e[n] : (u.isPlainObject(n) && jr(this, n), this);
  }
  jr(this, { [s[0]]: s[1] });
}
u.fn.z = Ac;
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const en = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Dc = {};
u.share = Dc;
var Sn, z, Uo, it, ie, Kr, jo, ni, $e = {}, Ko = [], Lc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Nn = Array.isArray;
function Gt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function qo(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function $t(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Sn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return Ls(s, o, n, i, null);
}
function Ls(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Uo };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function j() {
  return { current: null };
}
function Re(s) {
  return s.children;
}
function O(s, t) {
  this.props = s, this.context = t;
}
function ss(s, t) {
  if (t == null)
    return s.__ ? ss(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ss(s) : null;
}
function Yo(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Yo(s);
  }
}
function qr(s) {
  (!s.__d && (s.__d = !0) && ie.push(s) && !sn.__r++ || Kr !== z.debounceRendering) && ((Kr = z.debounceRendering) || jo)(sn);
}
function sn() {
  var s, t, e, n, i, r, o, a, l;
  for (ie.sort(ni); s = ie.shift(); )
    s.__d && (t = ie.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = Gt({}, o)).__v = o.__v + 1, Ji(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? ss(o), o.__h, i), Jo(n, o, i), o.__e != a && Yo(o)), ie.length > t && ie.sort(ni));
  sn.__r = 0;
}
function Go(s, t, e, n, i, r, o, a, l, c, d) {
  var h, m, p, _, g, v, y, b, C, k = 0, w = n && n.__k || Ko, S = w.length, I = S, D = t.length;
  for (e.__k = [], h = 0; h < D; h++)
    (_ = e.__k[h] = (_ = t[h]) == null || typeof _ == "boolean" || typeof _ == "function" ? null : typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" ? Ls(null, _, null, null, _) : Nn(_) ? Ls(Re, { children: _ }, null, null, null) : _.__b > 0 ? Ls(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _) != null ? (_.__ = e, _.__b = e.__b + 1, (b = Rc(_, w, y = h + k, I)) === -1 ? p = $e : (p = w[b] || $e, w[b] = void 0, I--), Ji(s, _, p, i, r, o, a, l, c, d), g = _.__e, (m = _.ref) && p.ref != m && (p.ref && Qi(p.ref, null, _), d.push(m, _.__c || g, _)), g != null && (v == null && (v = g), (C = p === $e || p.__v === null) ? b == -1 && k-- : b !== y && (b === y + 1 ? k++ : b > y ? I > D - y ? k += b - y : k-- : k = b < y && b == y - 1 ? b - y : 0), y = h + k, typeof _.type != "function" || b === y && p.__k !== _.__k ? typeof _.type == "function" || b === y && !C ? _.__d !== void 0 ? (l = _.__d, _.__d = void 0) : l = g.nextSibling : l = Zo(s, g, l) : l = Xo(_, l, s), typeof e.type == "function" && (e.__d = l))) : (p = w[h]) && p.key == null && p.__e && (p.__e == l && (l = ss(p)), ii(p, p, !1), w[h] = null);
  for (e.__e = v, h = S; h--; )
    w[h] != null && (typeof e.type == "function" && w[h].__e != null && w[h].__e == e.__d && (e.__d = w[h].__e.nextSibling), ii(w[h], w[h]));
}
function Xo(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? Xo(n, t, e) : Zo(e, n.__e, t));
  return t;
}
function ns(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Nn(s) ? s.some(function(e) {
    ns(e, t);
  }) : t.push(s)), t;
}
function Zo(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Rc(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (n > (l != null ? 1 : 0))
    for (; o >= 0 || a < t.length; ) {
      if (o >= 0) {
        if ((l = t[o]) && i == l.key && r === l.type)
          return o;
        o--;
      }
      if (a < t.length) {
        if ((l = t[a]) && i == l.key && r === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Wc(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || nn(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || nn(s, r, t[r], e[r], n);
}
function Yr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Lc.test(t) ? e : e + "px";
}
function nn(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Yr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Yr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? Xr : Gr, r) : s.removeEventListener(t, r ? Xr : Gr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, e));
    }
}
function Gr(s) {
  return this.l[s.type + !1](z.event ? z.event(s) : s);
}
function Xr(s) {
  return this.l[s.type + !0](z.event ? z.event(s) : s);
}
function Ji(s, t, e, n, i, r, o, a, l, c) {
  var d, h, m, p, _, g, v, y, b, C, k, w, S, I, D, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = z.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (y = t.props, b = (d = A.contextType) && n[d.__c], C = d ? b ? b.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(y, C) : (t.__c = h = new O(y, C), h.constructor = A, h.render = Oc), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = C, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Gt({}, h.__s)), Gt(h.__s, A.getDerivedStateFromProps(y, h.__s))), p = h.props, _ = h.state, h.__v = t, m)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, C), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, C) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, C), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, _, g);
          });
        }
        if (h.context = C, h.props = y, h.__P = s, h.__e = !1, w = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++)
            h.__h.push(h._sb[I]);
          h._sb = [];
        } else
          do
            h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (n = Gt(Gt({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (g = h.getSnapshotBeforeUpdate(p, _)), Go(s, Nn(D = d != null && d.type === Re && d.key == null ? d.props.children : d) ? D : [D], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (T) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(T, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Hc(e.__e, t, e, n, i, r, o, l, c);
  (d = z.diffed) && d(t);
}
function Jo(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Qi(e[n], e[++n], e[++n]);
  z.__c && z.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      z.__e(r, i.__v);
    }
  });
}
function Hc(s, t, e, n, i, r, o, a, l) {
  var c, d, h, m = e.props, p = t.props, _ = t.type, g = 0;
  if (_ === "svg" && (i = !0), r != null) {
    for (; g < r.length; g++)
      if ((c = r[g]) && "setAttribute" in c == !!_ && (_ ? c.localName === _ : c.nodeType === 3)) {
        s = c, r[g] = null;
        break;
      }
  }
  if (s == null) {
    if (_ === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, p.is && p), r = null, a = !1;
  }
  if (_ === null)
    m === p || a && s.data === p || (s.data = p);
  else {
    if (r = r && Sn.call(s.childNodes), d = (m = e.props || $e).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, g = 0; g < s.attributes.length; g++)
          m[s.attributes[g].name] = s.attributes[g].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Wc(s, p, m, i, a), h)
      t.__k = [];
    else if (Go(s, Nn(g = t.props.children) ? g : [g], t, e, n, i && _ !== "foreignObject", r, o, r ? r[0] : e.__k && ss(e, 0), a, l), r != null)
      for (g = r.length; g--; )
        r[g] != null && qo(r[g]);
    a || ("value" in p && (g = p.value) !== void 0 && (g !== s.value || _ === "progress" && !g || _ === "option" && g !== m.value) && nn(s, "value", g, m.value, !1), "checked" in p && (g = p.checked) !== void 0 && g !== s.checked && nn(s, "checked", g, m.checked, !1));
  }
  return s;
}
function Qi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    z.__e(n, e);
  }
}
function ii(s, t, e) {
  var n, i;
  if (z.unmount && z.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Qi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && ii(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || qo(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Oc(s, t, e) {
  return this.constructor(s, e);
}
function is(s, t, e) {
  var n, i, r, o;
  z.__ && z.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ji(t, s = (!n && e || t).__k = $t(Re, null, [s]), i || $e, $e, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Sn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Jo(r, s, o);
}
Sn = Ko.slice, z = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Uo = 0, it = function(s) {
  return s != null && s.constructor === void 0;
}, O.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof s == "function" && (s = s(Gt({}, e), this.props)), s && Gt(e, s), s != null && this.__v && (t && this._sb.push(t), qr(this));
}, O.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), qr(this));
}, O.prototype.render = Re, ie = [], jo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ni = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, sn.__r = 0;
function H(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...ns(r), ...ns(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = u.extend(r, i))), s[n] = i);
    });
  }), s;
}
function Qo(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const je = /* @__PURE__ */ new Map();
function rn(s) {
  const { zui: t } = window;
  return (!je.size || s && !je.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || je.set(e.toLowerCase(), n);
  }), s ? je.get(s.toLowerCase()) : void 0;
}
function Bc(s, t, e) {
  const n = rn(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Xd(s) {
  if (s) {
    const t = rn(s);
    t && t.defineFn();
  } else
    rn(), je.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => Bc(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Vo(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = rn(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function Fc(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    const r = n === document.body ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
    if (!r)
      return;
    const o = e.css("paddingRight") || "0";
    e.data(i, {
      paddingRight: o,
      overflow: e.css("overflow")
    }).css({
      paddingRight: `${r + Number.parseInt(o, 10)}px`,
      overflow: "hidden"
    });
  } else {
    const r = e.data(i);
    if (!r)
      return;
    e.css(r).removeData(i);
  }
}
u.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Fc(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Zd(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function tr(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: _, innerWidth: g } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: g || y, height: _ || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
u.fn.isVisible = function(s) {
  return tr(this, s);
};
function er(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    er(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    er(e, s);
  });
};
function ta(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (tr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    ta(e, s);
  });
};
u.setLibRoot = function(s) {
  u.libRoot = s;
};
u.registerLib = function(s, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), u.libMap[s] = t;
};
u.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let r = typeof s == "string" ? { src: s } : u.extend({}, s);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, _ = u(p ? `#${p}` : `script[src="${o}"]`);
    if (_.length) {
      if (_.dataset("loaded"))
        m();
      else {
        const w = _.data("loadCalls") || [];
        w.push(m), _.data("loadCalls", w);
      }
      return;
    }
    const { async: g = !0, defer: v = !1, noModule: y = !1, type: b, integrity: C } = r, k = document.createElement("script");
    k.async = g, k.defer = v, k.noModule = y, b && (k.type = b), C && (k.integrity = C), k.onload = () => {
      m(), (u(k).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, k.src = o, u("head").append(k);
  });
};
u.getScript = u.getLib;
const Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: tr,
  runJS: er,
  scrollIntoView: ta
}, Symbol.toStringTag, { value: "Module" })), ea = {};
function bs(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    bs(e, s[e]);
  }) : t && (ea[s.toLowerCase()] = t);
}
function zc(s) {
  return ea[s.toLowerCase()];
}
class K extends O {
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((m, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(p)) && (m[p] = d[p]), m), {});
    return { ref: o, className: x(this._getClassName(t)) || void 0, style: c, ...h, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? zc(e) : e) || e;
  }
  _getChildren(t) {
    return t.children;
  }
  _beforeRender(t) {
    return t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _onRender(t, e, n, i) {
    return [t, e, n];
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), n = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, n, t);
    return r && ([e, i, n] = r), $t(e, i, n);
  }
}
K.HElement = !0;
var Vc = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Vc, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class fe extends O {
  constructor() {
    super(...arguments), this._ref = j();
  }
  _runJS() {
    this.props.executeScript && u(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ f(K, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Uc(s) {
  const {
    tag: t,
    className: e,
    style: n,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...d
  } = s, h = [e], m = { ...n }, p = [], _ = [];
  return i.forEach((g) => {
    const v = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        v.push(...l.call(o, g, p, ...r));
      else {
        const y = g.call(o, p, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(g);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !it(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ f("div", { className: x(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? _.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), _.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: x(h),
    style: m,
    ...d
  }, p];
}
function sa({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Uc(t);
  return $t(s, e, ...n);
}
function ri(s, t, e) {
  if (typeof s == "function" && (s = s.call(t, ...e || [])), Array.isArray(s))
    return s.map((n) => ri(n, t, e));
  if (typeof s == "object" && (s.html || s.component)) {
    if (s.html)
      return /* @__PURE__ */ f(fe, { ...s });
    let { children: n } = s;
    return n && (n = Array.isArray(n) ? n : [n], s = H({ children: n.map((i) => ri(i, t, e)) }, s)), /* @__PURE__ */ f(K, { ...s });
  }
  return it(s) || s === null, s;
}
function F(s) {
  const { content: t, generatorThis: e, generatorArgs: n } = s, i = ri(t, e, n);
  return i == null || typeof i == "boolean" ? null : it(i) ? i : /* @__PURE__ */ f(Re, { children: i });
}
const Zr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (it(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Zr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Zr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: x(i), ...n });
}
function jc(s) {
  return this.getChildContext = () => s.context, s.children;
}
function na(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    is(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), s._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild(n) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(n, i) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t._container.removeChild(n);
    }
  }), is(
    $t(jc, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Kc(s, t) {
  const e = $t(na, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
bs({
  HElement: K,
  element: K,
  HtmlContent: fe,
  html: fe,
  CustomContent: F,
  custom: F,
  Icon: q,
  Portal: na
});
function ia(s) {
  return s.parentNode === document ? !1 : s.parentNode ? ia(s.parentNode) : !0;
}
class ht {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: n, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = u.guid++;
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((_) => {
          _ === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, ia(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
      const m = `${n}:ALL`;
      let p = l.data(m);
      p || (p = /* @__PURE__ */ new Map(), l.data(m, p)), p.set(this._key, this);
    }
    this.init(), requestAnimationFrame(async () => {
      this._inited = !0, await this.afterInit(), this.emit("inited", this.options);
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (t) => t.toLowerCase());
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  /**
   * Component namespace, like ".zui.menu"
   */
  static get NAMESPACE() {
    return `.zui.${this.ZUI}`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  get inited() {
    return this._inited;
  }
  /**
   * Get the component element.
   */
  get element() {
    return this._element;
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return this._options;
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return this._gid;
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return u(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Initialize the component.
   */
  init() {
  }
  /**
   * Do something after the component initialized.
   */
  afterInit() {
  }
  /**
   * Render the component.
   *
   * @param options The component options to override before render.
   */
  render(t) {
    this.setOptions(t);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    var r;
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (r = this._mobs) == null || r.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), n) {
      const o = this.$element.data(`${t}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const a = o.values().next().value;
          i.data(t, a).attr(e, a.gid);
        }
    }
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && u.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = u.Event(t);
    return n.__src = this, this.$emitter.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, n) {
    const i = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
      (!r.__src || r.__src === i) && e.call(this, r, o);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.on(t, e, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t) {
    this.$element.off(this._wrapEvent(t));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(t, e, n) {
    return J(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `${this.constructor.NAMESPACE}.${this._key}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(t) {
    return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(t, e) {
    const n = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return n.data(this.KEY);
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(t, e) {
    const n = this.get(t, e == null ? void 0 : e.key);
    return n ? (e && n.setOptions(e), n) : new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, DATA_KEY: n } = this, i = [];
    return u(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = u(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(o).data(this.KEY);
      a && i.push(a);
    }), i;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t, e, n) {
    if (t === void 0) {
      let i = this.getAll();
      return n && (i = i.filter(n)), i.sort((r, o) => o.gid - r.gid)[0];
    }
    return this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    u.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    u.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = n.get(d);
          if (h ? o && h.render(o) : h = new n(d, o), a) {
            let m = h[a], p = h;
            m === void 0 && (p = h.$, m = p[a]), typeof m == "function" ? l = m.call(p, ...r) : l = m;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
ht.DEFAULT = {};
ht.MULTI_INSTANCE = !1;
class R extends ht {
  constructor() {
    super(...arguments), this.ref = j();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this.ref.current;
  }
  /**
   * Render after component init.
   */
  afterInit() {
    this.render();
  }
  /**
   * Destroy component.
   */
  destroy() {
    var t, e;
    (e = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || e.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    const { element: e } = this, { Component: n, replace: i } = this.constructor, r = {
      ref: this.ref,
      ...this.setOptions(t)
    };
    if (i && n.HElement) {
      const o = Array.from(e.attributes).reduce((a, l) => {
        const { name: c, value: d } = l;
        return a[c === "class" ? "className" : c] = d, a;
      }, {});
      return is(
        $t(n, H({ component: e.tagName.toLowerCase(), attrs: o }, r)),
        e.parentElement,
        e
      );
    }
    is(
      $t(n, r),
      e
    );
  }
}
R.replace = !1;
class tt extends K {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(q, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: r,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tt
}, Symbol.toStringTag, { value: "Module" }));
bs(qc);
let mt = class extends K {
  /**
   * Get the root element name, used for class name.
   */
  get name() {
    return this.props.name || this.constructor.NAME;
  }
  /**
   * Get the item element name, used for class name.
   */
  get itemName() {
    return this.props.itemName || this.constructor.ITEM_NAME;
  }
  /**
   * Get the item key by index.
   *
   * @param index The rendered item index.
   * @returns The item key, if the item is not rendered, return undefined.
   */
  getKey(t) {
    var e, n;
    return (n = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : n.key;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, n) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, n);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, n);
      if (c !== void 0)
        return /* @__PURE__ */ f(F, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || K;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = H({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ f(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, n) {
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, keyName: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = H(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? n)
      }
    ), o) {
      const p = o.call(this, e, n);
      if (p !== void 0)
        return p;
    }
    return e;
  }
  /**
   * Get the list root element classname list.
   *
   * @param props  Current list properties.
   * @returns The list root element classname list.
   */
  _getClassName(t) {
    return [this.name, t.className];
  }
  /**
   * Get final rendered item list.
   *
   * @param props  Current list properties.
   * @returns Item list.
   */
  _getItems(t) {
    let { items: e = [] } = t;
    return typeof e == "function" ? e = e.call(this) : Array.isArray(e) || (e = []), e;
  }
  /**
   * Render items.
   *
   * @param props  props  Current list properties.
   * @param items  Render items.
   * @returns React render children.
   */
  _renderItems(t, e) {
    const n = [];
    return this._renderedItems = e.map((i, r) => {
      const o = this._getItem(t, i, r);
      return o && n.push(this._renderItem(t, o, r)), o || void 0;
    }), n;
  }
  /**
   * Get root element rendered children.
   *
   * @param props Current list properties.
   * @returns React render children.
   */
  _getChildren(t) {
    const e = this._getItems(t);
    this._items = e;
    const n = this._renderItems(t, e);
    return t.children && n.push(t.children), n;
  }
  /**
   * Get root element rendered component type.
   *
   * @param props Current list properties.
   * @returns React component type.
   */
  _getComponent(t) {
    return t.component || this.constructor.TAG;
  }
};
mt.NAME = "";
mt.ITEM_NAME = "item";
mt.TAG = "ul";
mt.ItemComponents = {
  default: K,
  divider: [K, { className: "divider" }],
  space: [K, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
mt.defaultItemProps = {
  component: "li"
};
mt.defaultItemPropsMap = {};
mt.defaultItemType = "item";
class sr extends R {
}
sr.NAME = "CommonList";
sr.Component = mt;
sr.replace = !0;
function Yc(s) {
  if (s.indexOf("#") === 0 && (s = s.slice(1)), s.length === 3 && (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]), s.length !== 6)
    throw new Error(`Invalid HEX color "${s}".`);
  return [
    parseInt(s.slice(0, 2), 16),
    // r
    parseInt(s.slice(2, 4), 16),
    // g
    parseInt(s.slice(4, 6), 16)
    // b
  ];
}
function Gc(s) {
  const [t, e, n] = typeof s == "string" ? Yc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Jr(s, t) {
  return Gc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Qr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function Xc(s, t, e) {
  s = s % 360 / 360, t = Qr(t), e = Qr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function Zc(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Jc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let ws = class extends O {
  render() {
    const {
      className: t,
      style: e,
      size: n = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      icon: l,
      text: c,
      code: d,
      maxTextLength: h = 2,
      src: m,
      hueDistance: p = 43,
      saturation: _ = 0.4,
      lightness: g = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], C = { ...e, background: o, color: a };
    let k = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, k = n) : (b.push(`size-${n}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let w;
    if (m)
      b.push("has-img"), w = /* @__PURE__ */ f("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      b.push("has-icon"), w = /* @__PURE__ */ f(q, { icon: l });
    else if (c != null && c.length) {
      const S = Jc(c, h);
      if (b.push("has-text", `has-text-${S.length}`), o)
        !a && o && (C.color = Jr(o));
      else {
        const D = d ?? c, A = (typeof D == "number" ? D : Zc(D)) * p % 360;
        if (C.background = `hsl(${A},${_ * 100}%,${g * 100}%)`, !a) {
          const T = Xc(A, _, g);
          C.color = Jr(T);
        }
      }
      let I;
      k && k < 14 * S.length && (I = { transform: `scale(${k / (14 * S.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ f("div", { "data-actualSize": k, className: "avatar-text", style: I, children: S });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: x(b),
        style: C,
        ...y,
        children: [
          w,
          v
        ]
      }
    );
  }
};
const Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: ws
}, Symbol.toStringTag, { value: "Module" }));
let yt = class extends mt {
  _isBtnType(t) {
    return t.type === "item" || t.type === "dropdown";
  }
  _getItem(t, e, n) {
    !e.type && (e.dropdown || e.items) && (e = u.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = H({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = H({}, e, Qo({ btnType: n, size: i }));
  }
};
yt.NAME = "btn-group";
yt.TAG = "nav";
yt.ItemComponents = {
  ...mt.ItemComponents,
  default: tt
};
yt.defaultItemProps = {
  component: void 0
};
const Tn = class ra extends yt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = x(n.className, `gap-${e}`) : n.style = u.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && ((i.type === "btn-group" || i.type === "btnGroup") && (i.btnProps = H({}, this._shareBtnProps, i.btnProps)), i);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = H(n, r)), /* @__PURE__ */ f(ra, { ...r });
  }
};
Tn.NAME = "toolbar";
Tn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Tn.ItemComponents = {
  ...yt.ItemComponents,
  btnGroup: yt,
  "btn-group": yt
};
let ft = Tn;
class En extends K {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: n } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      n && n.call(this, e, i), this._controlled || this.setState({ checked: i });
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: n = "checkbox" } = t, { checked: i } = this;
    return [t.className, n === "switch" ? n : `${n}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: n, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ f(
        "input",
        {
          type: n === "radio" ? n : "checkbox",
          name: e,
          id: r,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(F, { content: o }) }, "label")
    ];
  }
}
class th extends En {
}
th.defaultProps = {
  type: "radio"
};
class eh extends En {
}
eh.defaultProps = {
  type: "switch"
};
class on extends K {
  _renderLeading(t) {
    const {
      icon: e,
      avatar: n,
      toggleIcon: i,
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, d = [];
    if (i && d.push(/* @__PURE__ */ f(F, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(En, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(q, { className: "item-icon", icon: e }, "icon")), n) {
      const m = typeof n == "function" ? n.call(this, t) : n;
      m && (m.className = x("item-avatar", m.className), d.push(/* @__PURE__ */ f(ws, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ f(F, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: x("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t) {
    const {
      textClass: e,
      titleClass: n,
      subtitle: i,
      subtitleClass: r,
      url: o,
      actions: a,
      target: l,
      content: c,
      contentClass: d
    } = t, h = o && a, m = h ? "a" : "div";
    let { title: p, text: _ } = t;
    return p === void 0 && (p = _, _ = null), [
      /* @__PURE__ */ f("div", { className: x("item-content", d), children: [
        p ? /* @__PURE__ */ f(m, { className: x("item-title", n), href: h ? o : void 0, target: h ? l : void 0, children: /* @__PURE__ */ f(F, { content: p }) }, "title") : null,
        i ? /* @__PURE__ */ f("div", { className: x("item-subtitle", r), children: /* @__PURE__ */ f(F, { content: i }) }, "subtitle") : null,
        _ ? /* @__PURE__ */ f("div", { className: x("item-text text", e), children: _ }, "text") : null,
        c ? /* @__PURE__ */ f(F, { content: c }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    if (r && a.push(/* @__PURE__ */ f(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o) {
      let c = typeof o == "function" ? o.call(this, t) : o;
      Array.isArray(c) && (c = {
        items: c
      }), a.push(
        /* @__PURE__ */ f(ft, { size: "sm", ...c }, "actions")
      );
    }
    const l = n ? /* @__PURE__ */ f(F, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ f("div", { className: x("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: n,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: d,
      divider: h,
      checked: m,
      multiline: p,
      title: _,
      subtitle: g,
      hover: v
    } = t, y = n || (o && !a ? "a" : "div"), b = y === "a", C = H({
      key: "item",
      className: x("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": v,
        checked: m,
        multiline: p ?? !!(_ && g),
        state: b
      }),
      href: b ? o : void 0,
      target: b ? l : void 0
    }, e, r);
    return /* @__PURE__ */ f(y, { ...C, children: [
      this._renderLeading(t),
      this._renderContent(t),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...ns(n)]];
  }
}
let te = class extends mt {
  constructor(t) {
    super(t), this._ref = j(), this.state = {}, this._handleClick = this._handleClick.bind(this);
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  load() {
    const { items: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const r = await $n(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    t || !e || Array.isArray(e) || e === this._loadedSetting || this.load();
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  _getItem(t, e, n) {
    let i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { divider: r, hover: o, multiline: a } = t;
    i = H({}, Qo({
      divider: r,
      hover: o,
      multiline: a
    }), i);
    const { itemName: l, name: c } = this;
    if (i.innerClass = [l ? `${l}-inner${c ? ` ${c}-${i.type}-inner` : ""}` : "", i.innerClass], i.type === "item") {
      const { checkbox: d } = t;
      d && (i.checked === void 0 && (i.checked = !1), typeof d == "object" && (i.checkbox = i.checkbox ? u.extend({}, d, i.checkbox) : d));
    }
    return i.icon && (this._hasIcons = !0), i.checked !== void 0 && (this._hasCheckbox = !0), i;
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t) {
    const e = t.target.closest("[z-item]");
    if (!e || e.parentElement !== this._ref.current)
      return;
    const n = +e.getAttribute("z-item"), i = this._items[n];
    if (!i)
      return;
    const r = this.getKey(n);
    if (r === void 0)
      return;
    const o = this._renderedItems[n];
    return { index: n, item: i, element: e, event: t, key: r, renderedItem: o };
  }
  _handleClick(t) {
    const { onClickItem: e } = this.props;
    if (!e)
      return;
    const n = this._getItemFromEvent(t);
    n && e.call(this, n);
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      onClick: this._handleClick,
      ref: this._ref,
      className: x(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
te.ItemComponents = {
  ...mt.ItemComponents,
  default: K,
  item: on,
  heading: on
};
te.NAME = "list";
let We = class extends te {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e, n) {
    const { nestedShow: i } = this, r = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return !!(typeof i == "object" ? i[r] ?? n : i);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const n = this._getNestedMap();
    if (e = e ?? !n[t], e !== !!n[t] && ((i = this.props.onToggle) == null ? void 0 : i.call(this, t, e)) !== !1)
      return n[t] = e, this.setState({ nestedShow: n });
  }
  toggleAll(t) {
    var i, r;
    if (this._controlled)
      return;
    let { nestedShow: e } = this;
    if (typeof e == "boolean")
      return this.setState({ nestedShow: t ?? !e });
    e = this._getNestedMap();
    const n = (r = (i = this._items) == null ? void 0 : i[0]) == null ? void 0 : r.key;
    t = t ?? (n ? !e[n] : !0), this.setState({ nestedShow: t });
  }
  _getNestedMap() {
    const { nestedShow: t } = this;
    return typeof t == "boolean" ? (this._items || []).reduce((e, n, i) => {
      const { key: r = this.getKey(i) } = n;
      return r !== void 0 && (e[r] = t), e;
    }, {}) : t;
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return H(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ f(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ f(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key;
    if (i.items) {
      const a = i.expanded ?? this.isExpanded(o, r);
      H(i, {
        expanded: a,
        className: ["is-nested", `is-nested-${a ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return H(i, {
      _keyPath: `${r !== void 0 ? `${r}:` : ""}${o}`,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._itemsMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = H(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this.isRoot && this._itemsMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter"), { ...e, parentKey: this.props.parentKey };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: r, parentKey: o } = t, { nestedTrigger: a, nestedToggle: l } = this.props, c = i.target;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || c.closest(".not-nested-toggle") || l && !c.closest(l) || !l && c.closest("a,.btn,.item-checkbox") && !c.closest(".nested-toggle-icon,.item-icon"))
      return;
    const d = typeof n == "boolean" ? n : void 0;
    this.toggle(`${o !== void 0 ? `${o}:` : ""}${r}`, d);
  }
  _handleClickNestedItem(t) {
    var e;
    (e = this.props.onClickItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleHoverNestedItem(t) {
    var e;
    (e = this.props.onHoverItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleClick(t) {
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onClickItem) == null || n.call(this, e), this._controlled || this._toggleFromEvent(e));
  }
  _handleHover(t) {
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onHoverItem) == null || n.call(this, e), !this._controlled && this.props.nestedTrigger === "hover" && this._toggleFromEvent(e));
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = H(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
We.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
We.inheritNestedProps = ["component", "name", "itemName", "keyName", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class oa extends R {
}
oa.NAME = "List";
oa.Component = te;
class aa extends R {
}
aa.NAME = "NestedList";
aa.Component = We;
let rt = class extends We {
  _getClassName(t) {
    return x(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
rt.NAME = "menu";
rt.TAG = "menu";
rt.inheritNestedProps = [...We.inheritNestedProps, "compact"];
rt.ItemComponents = {
  ...We.ItemComponents,
  item: [on, { innerComponent: "a" }]
};
var nr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, bt = (s, t, e) => (nr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ee = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Rs = (s, t, e, n) => (nr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), to = (s, t, e) => (nr(s, t, "access private method"), e), Ws, Hs, le, oi, Os, Bs, Fs, ai;
let ir = class extends O {
  constructor(t) {
    super(t), ee(this, Fs), ee(this, Ws, void 0), ee(this, Hs, j()), ee(this, le, 0), ee(this, oi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), ee(this, Os, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (to(this, Fs, ai).call(this), Rs(this, le, window.setTimeout(() => {
          r(i, e), Rs(this, le, 0);
        }, this.props.delay || 0)));
      });
    }), ee(this, Bs, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Rs(this, Ws, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return bt(this, Ws);
  }
  get input() {
    return bt(this, Hs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    to(this, Fs, ai).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: _ } = t, { focus: g, value: v } = e, { id: y } = this, b = _ ?? v, C = typeof b != "string" || !b.trim().length;
    let k, w, S;
    return m && (S = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(q, { icon: m })), !h && m && (k = /* @__PURE__ */ f("label", { for: y, class: "input-control-prefix", children: S }, "prefix")), p && !C ? w = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: bt(this, oi),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(q, { icon: p })
      }
    ) : h && m && (w = S), w && (w = /* @__PURE__ */ f("label", { for: y, class: "input-control-suffix", children: w }, "suffix")), /* @__PURE__ */ f("div", { class: x("search-box input-control", r, { focus: g, empty: C, "has-prefix-icon": k, "has-suffix-icon": w }), style: o, children: [
      k,
      /* @__PURE__ */ f(
        "input",
        {
          ref: bt(this, Hs),
          id: y,
          type: "text",
          class: x("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: b,
          onInput: bt(this, Os),
          onChange: bt(this, Os),
          onFocus: bt(this, Bs),
          onBlur: bt(this, Bs)
        }
      ),
      w
    ] });
  }
};
Ws = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
Bs = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakSet();
ai = function() {
  bt(this, le) && clearTimeout(bt(this, le)), Rs(this, le, 0);
};
ir.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Tt = class extends rt {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
    }, this._searchControlled = t.search !== void 0, this.state.search = this._searchControlled ? t.search : t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && (this._searchControlled = t.search !== void 0, this._searchControlled && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search)));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t, e, n) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t, e, n);
  }
  _updateMatchedParents() {
    this.isRoot && u(this._ref.current).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i);
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getChildren(t) {
    let e = super._getChildren(t);
    const { searchBox: n } = t;
    if (!n)
      return e;
    e = ns(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && u.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ f(ir, { ...i }, "search")), e;
  }
  _getClassName(t) {
    const e = this.isRoot && this._searchKeys.length;
    return [super._getClassName(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : ""];
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set()), super._beforeRender(t);
  }
  /**
   * Check whether item is matched.
   *
   * @param item          Item to match.
   * @param searchKeys    Search keys.
   * @returns Whether item is matched.
   */
  static isItemMatch(t, e, n = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => n.some((r) => {
      const o = t[r];
      return typeof o == "string" && o.length && o.toLowerCase().includes(i);
    })) : !0;
  }
  /**
   * Convert search string to search keys.
   *
   * @param search    Search string.
   * @returns Search keys array.
   */
  static getSearchKeys(t = "") {
    return u.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((d, h) => {
        h && (o.push(/* @__PURE__ */ f("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Tt.inheritNestedProps = [...rt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Tt.defaultProps = {
  ...rt.defaultProps,
  defaultNestedShow: !0
};
class la extends R {
}
la.NAME = "Menu";
la.Component = rt;
class ca extends R {
}
ca.NAME = "SearchMenu";
ca.Component = Tt;
function sh({
  className: s,
  style: t,
  actions: e,
  heading: n,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: c,
  iconClass: d,
  ...h
}) {
  let m;
  a === !0 ? m = /* @__PURE__ */ f(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : it(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ f(tt, { ...a, onClick: l }));
  const p = it(e) ? e : e ? /* @__PURE__ */ f(ft, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: x("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(q, { icon: c, className: x("alert-icon", d) }),
    it(i) ? i : /* @__PURE__ */ f("div", { className: x("alert-content", r), children: [
      it(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    o
  ] });
}
function nh(s) {
  if (s === "center")
    return "fade-from-center";
  if (s) {
    if (s.includes("top"))
      return "fade-from-top";
    if (s.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function ih({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    sh,
    {
      className: x("messager", r, t, n === !0 ? nh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var rh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, oh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Oe = (s, t, e) => (rh(s, t, "access private method"), e), se, Ce;
class rr extends R {
  constructor() {
    super(...arguments), oh(this, se), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: e } = this.options;
      e && this.$element.css("margin", `${e}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      u(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t) {
    return t = super.setOptions(t), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), Oe(this, se, Ce).call(this, () => {
      this._show = !0, this.render(), Oe(this, se, Ce).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Oe(this, se, Ce).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Oe(this, se, Ce).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Oe(this, se, Ce).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
se = /* @__PURE__ */ new WeakSet();
Ce = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
rr.NAME = "MessagerItem";
rr.Component = ih;
var or = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ce = (s, t, e) => (or(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ms = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, zs = (s, t, e, n) => (or(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ha = (s, t, e) => (or(s, t, "access private method"), e), Se, At, li, da, ar, ua;
const Mn = class fa extends ht {
  constructor() {
    super(...arguments), Ms(this, li), Ms(this, ar), Ms(this, Se, void 0), Ms(this, At, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ce(this, At)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), ha(this, li, da).call(this).show();
  }
  hide() {
    var t;
    (t = ce(this, At)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = fa.ensure(e || "body", { key: `messager_${u.guid++}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Se = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
da = function() {
  if (ce(this, At))
    ce(this, At).setOptions(this.options);
  else {
    const s = ha(this, ar, ua).call(this), t = new rr(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), zs(this, Se, void 0), zs(this, At, void 0);
    }), zs(this, At, t);
  }
  return ce(this, At);
};
ar = /* @__PURE__ */ new WeakSet();
ua = function() {
  if (ce(this, Se))
    return ce(this, Se);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), zs(this, Se, e[0])), e[0];
};
Mn.NAME = "messager";
Mn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Mn.MULTI_INSTANCE = !0;
let au = Mn;
let lr = class extends O {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const _ = (n - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: _, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: _, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * _ * 2, "stroke-dashoffset": Math.PI * _ * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${_}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
lr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class pa extends R {
}
pa.NAME = "ProgressCircle";
pa.Component = lr;
const Be = '[droppable="true"]';
class In extends ht {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      !a || n && !r.closest(n).length || i && i.call(this, t, a) === !1 || (o.attr("draggable", "true"), this._setState({ dragging: a }));
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: n } = this, { onDragStart: i } = n;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d } = n;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || Be);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(Be).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
    }, this._handleDrag = (t) => {
      var n;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (n = this.options.onDrag) == null || n.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var n;
      const { dragElement: e } = this;
      this._clean(), e && ((n = this.options.onDragEnd) == null || n.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var r, o;
      const { dragElement: e } = this, n = u(t.target).closest(Be)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(Be)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(Be)[0];
      e && (t.preventDefault(), (n = this.options.onDrop) == null || n.call(this, t, this.dragElement, e));
    };
  }
  get state() {
    return this._state;
  }
  get dragElement() {
    return this._state.dragging;
  }
  get dropElement() {
    return this._state.dropping;
  }
  async afterInit() {
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), u(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t) {
    var r;
    const e = this._state, { dragging: n = e.dragging, dropping: i = e.dropping } = t;
    n === e.dragging && i === e.dropping || (this._state = { dragging: n, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: n } = this.options;
    n && u(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
In.NAME = "Draggable";
In.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const ah = '[moveable="true"]';
class cr extends ht {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = u(t.target), a = n === "self" ? this.$element : o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        var e;
        this._raf = 0, this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state);
      }));
    }, this._handleMouseUp = (t) => {
      var e, n;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state), (n = this.options.onMoveEnd) == null || n.call(this, t, this._state), this._clean());
    };
  }
  get state() {
    return this._state;
  }
  get moveElement() {
    var t;
    return (t = this._state) == null ? void 0 : t.target;
  }
  async afterInit() {
    this.on("mousedown", this._handleMouseDown);
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    t.preventDefault();
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = u(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        n.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        n.strategy = this.options.move || "none";
      const d = c.position();
      n = u.extend(n, {
        target: e,
        startX: n.x,
        startY: n.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: d.left,
        startTop: d.top,
        left: d.left,
        top: d.top,
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      });
    } else if (i) {
      const c = n.x - i.startX, d = n.y - i.startY;
      n = u.extend({}, i, n, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n, a = u(o);
    r === "position" ? a.css({ left: n.left, top: n.top }) : r === "transform" ? a.css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`) : r === "scroll" && (o.scrollLeft = n.scrollLeft - n.deltaX, o.scrollTop = n.scrollTop - n.deltaY), (l = this.options.onChange) == null || l.call(this, n, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = u(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
cr.NAME = "Moveable";
cr.DEFAULT = {
  selector: ah,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const hr = class ma extends ht {
  async afterInit() {
    const t = await ma.loadModule();
    this.module = new t(this.element, this.options);
  }
  option(t, e) {
    if (e === void 0)
      return this.module.option(t);
    this.module.option(t, e);
  }
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param element an HTMLElement or selector string.
   * @param selector default: `options.draggable`
   */
  closest(t, e) {
    return this.module.closest(t, e);
  }
  /**
   * Sorts the elements according to the array.
   * @param order an array of strings to sort.
   * @param useAnimation default: false.
   */
  sort(t, e) {
    this.module.sort(t, e);
  }
  /**
   * Saving and restoring of the sort.
   */
  save() {
    this.module.save();
  }
  /**
   * Removes the sortable functionality completely.
   */
  destroy() {
    super.destroy(), this.module.destroy();
  }
  /**
   * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
   */
  toArray() {
    return this.module.toArray();
  }
  static async loadModule() {
    return this.Module || (this.Module = await u.getLib("sortablejs")), this.Module;
  }
};
hr.NAME = "Sortable";
hr.DEFAULT = {
  animation: 150
};
let cu = hr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let ga = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const Un = "```ZUI_STR\n";
var hs, oe, Te, wt, Ee, Me, Vs;
const Dr = class Dr {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    W(this, Me);
    W(this, hs, void 0);
    W(this, oe, void 0);
    W(this, Te, void 0);
    W(this, wt, void 0);
    W(this, Ee, void 0);
    B(this, hs, e), B(this, Te, t ?? ga()), B(this, oe, `ZUI_STORE:${M(this, Te)}`), B(this, wt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return M(this, hs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (M(this, Ee) || B(this, Ee, new Dr(M(this, Te), "session")), M(this, Ee));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = M(this, wt).getItem(ve(this, Me, Vs).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(Un))
        return n.substring(Un.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    M(this, wt).setItem(ve(this, Me, Vs).call(this, t), typeof e == "string" ? `${Un}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    M(this, wt).removeItem(ve(this, Me, Vs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < M(this, wt).length; e++) {
      const n = M(this, wt).key(e);
      if (n != null && n.startsWith(M(this, oe))) {
        const i = M(this, wt).getItem(n);
        typeof i == "string" && t(n.substring(M(this, oe).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
hs = new WeakMap(), oe = new WeakMap(), Te = new WeakMap(), wt = new WeakMap(), Ee = new WeakMap(), Me = new WeakSet(), Vs = function(t) {
  return `${M(this, oe)}:${t}`;
};
let an = Dr;
const Ke = new an("DEFAULT");
function lh(s, t = "local") {
  return new an(s, t);
}
Object.assign(Ke, { create: lh });
class _a extends R {
}
_a.NAME = "Avatar";
_a.Component = ws;
bs(Qc);
class ya extends R {
}
ya.NAME = "BtnGroup";
ya.Component = yt;
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: yt
}, Symbol.toStringTag, { value: "Module" }));
bs(ch);
const ci = Symbol("EVENT_PICK");
class dr extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = u(t.target), a = i == null ? void 0 : i(t);
    if (!t.defaultPrevented) {
      if (typeof a == "boolean")
        r = a;
      else {
        if (o.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (o.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(r));
    }
  }
  _getClass(t) {
    const { state: e, className: n } = t, { open: i, disabled: r } = e;
    return x(
      "pick",
      n,
      i && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: e, style: n, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: n,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: n } = t;
    return e ?? n.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i } = t;
    if (e)
      if (this._hasInput)
        u(`#${i}`).val(n);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === ci)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", ci), this._skipTriggerChange = !1);
  }
  render(t) {
    return $t(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const De = Math.min, he = Math.max, ln = Math.round, Is = Math.floor, Xt = (s) => ({
  x: s,
  y: s
}), hh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dh = {
  start: "end",
  end: "start"
};
function hi(s, t, e) {
  return he(s, De(t, e));
}
function Cs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function pe(s) {
  return s.split("-")[0];
}
function ks(s) {
  return s.split("-")[1];
}
function va(s) {
  return s === "x" ? "y" : "x";
}
function ur(s) {
  return s === "y" ? "height" : "width";
}
function Pn(s) {
  return ["top", "bottom"].includes(pe(s)) ? "y" : "x";
}
function fr(s) {
  return va(Pn(s));
}
function uh(s, t, e) {
  e === void 0 && (e = !1);
  const n = ks(s), i = fr(s), r = ur(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = cn(o)), [o, cn(o)];
}
function fh(s) {
  const t = cn(s);
  return [di(s), t, di(t)];
}
function di(s) {
  return s.replace(/start|end/g, (t) => dh[t]);
}
function ph(s, t, e) {
  const n = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (s) {
    case "top":
    case "bottom":
      return e ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? r : o;
    default:
      return [];
  }
}
function mh(s, t, e, n) {
  const i = ks(s);
  let r = ph(pe(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(di)))), r;
}
function cn(s) {
  return s.replace(/left|right|bottom|top/g, (t) => hh[t]);
}
function gh(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function ba(s) {
  return typeof s != "number" ? gh(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function hn(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function eo(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = Pn(t), o = fr(t), a = ur(o), l = pe(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (ks(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const _h = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = eo(c, n, l), m = n, p = {}, _ = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: y
    } = a[g], {
      x: b,
      y: C,
      data: k,
      reset: w
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = b ?? d, h = C ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...k
      }
    }, w && _ <= 50) {
      _++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : w.rects), {
        x: d,
        y: h
      } = eo(c, m, l)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: m,
    strategy: i,
    middlewareData: p
  };
};
async function wa(s, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = s, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = Cs(t, s), _ = ba(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = hn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = hn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (y.top - w.top + _.top) / k.y,
    bottom: (w.bottom - y.bottom + _.bottom) / k.y,
    left: (y.left - w.left + _.left) / k.x,
    right: (w.right - y.right + _.right) / k.x
  };
}
const ui = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a
    } = t, {
      element: l,
      padding: c = 0
    } = Cs(s, t) || {};
    if (l == null)
      return {};
    const d = ba(c), h = {
      x: e,
      y: n
    }, m = fr(i), p = ur(m), _ = await o.getDimensions(l), g = m === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", C = r.reference[p] + r.reference[m] - h[m] - r.floating[p], k = h[m] - r.reference[m], w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = w ? w[b] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(w))) && (S = a.floating[b] || r.floating[p]);
    const I = C / 2 - k / 2, D = S / 2 - _[p] / 2 - 1, A = De(d[v], D), T = De(d[y], D), P = A, U = S - _[p] - T, E = S / 2 - _[p] / 2 + I, V = hi(P, E, U), vt = ks(i) != null && E != V && r.reference[p] / 2 - (E < P ? A : T) - _[p] / 2 < 0 ? E < P ? P - E : U - E : 0;
    return {
      [m]: h[m] - vt,
      data: {
        [m]: V,
        centerOffset: E - V + vt
      }
    };
  }
}), An = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e;
      const {
        placement: n,
        middlewareData: i,
        rects: r,
        initialPlacement: o,
        platform: a,
        elements: l
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: _ = !0,
        ...g
      } = Cs(s, t), v = pe(n), y = pe(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), C = h || (y || !_ ? [cn(o)] : fh(o));
      !h && p !== "none" && C.push(...mh(o, _, p, b));
      const k = [o, ...C], w = await wa(t, g), S = [];
      let I = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && S.push(w[v]), d) {
        const P = uh(n, r, b);
        S.push(w[P[0]], w[P[1]]);
      }
      if (I = [...I, {
        placement: n,
        overflows: S
      }], !S.every((P) => P <= 0)) {
        var D, A;
        const P = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, U = k[P];
        if (U)
          return {
            data: {
              index: P,
              overflows: I
            },
            reset: {
              placement: U
            }
          };
        let E = (A = I.filter((V) => V.overflows[0] <= 0).sort((V, at) => V.overflows[1] - at.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!E)
          switch (m) {
            case "bestFit": {
              var T;
              const V = (T = I.map((at) => [at.placement, at.overflows.filter((vt) => vt > 0).reduce((vt, Wl) => vt + Wl, 0)]).sort((at, vt) => at[1] - vt[1])[0]) == null ? void 0 : T[0];
              V && (E = V);
              break;
            }
            case "initialPlacement":
              E = o;
              break;
          }
        if (n !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function yh(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = pe(e), a = ks(e), l = Pn(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Cs(t, s);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: _
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return a && typeof _ == "number" && (p = a === "end" ? _ * -1 : _), l ? {
    x: p * d,
    y: m * c
  } : {
    x: m * c,
    y: p * d
  };
}
const Dn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await yh(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, rs = function(s) {
  return s === void 0 && (s = {}), {
    name: "shift",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: y,
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = Cs(s, t), c = {
        x: e,
        y: n
      }, d = await wa(t, l), h = Pn(pe(i)), m = va(h);
      let p = c[m], _ = c[h];
      if (r) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = p + d[v], C = p - d[y];
        p = hi(b, p, C);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = _ + d[v], C = _ - d[y];
        _ = hi(b, _, C);
      }
      const g = a.fn({
        ...t,
        [m]: p,
        [h]: _
      });
      return {
        ...g,
        data: {
          x: g.x - e,
          y: g.y - n
        }
      };
    }
  };
};
function Zt(s) {
  return Ca(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function lt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(s) {
  var t;
  return (t = (Ca(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ca(s) {
  return s instanceof Node || s instanceof lt(s).Node;
}
function Ht(s) {
  return s instanceof Element || s instanceof lt(s).Element;
}
function St(s) {
  return s instanceof HTMLElement || s instanceof lt(s).HTMLElement;
}
function so(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof lt(s).ShadowRoot;
}
function xs(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = pt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function vh(s) {
  return ["table", "td", "th"].includes(Zt(s));
}
function pr(s) {
  const t = mr(), e = pt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function bh(s) {
  let t = Le(s);
  for (; St(t) && !Ln(t); ) {
    if (pr(t))
      return t;
    t = Le(t);
  }
  return null;
}
function mr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ln(s) {
  return ["html", "body", "#document"].includes(Zt(s));
}
function pt(s) {
  return lt(s).getComputedStyle(s);
}
function Rn(s) {
  return Ht(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Le(s) {
  if (Zt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    so(s) && s.host || // Fallback.
    Bt(s)
  );
  return so(t) ? t.host : t;
}
function ka(s) {
  const t = Le(s);
  return Ln(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : St(t) && xs(t) ? t : ka(t);
}
function os(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = ka(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = lt(n);
  return i ? t.concat(r, r.visualViewport || [], xs(n) ? n : [], r.frameElement ? os(r.frameElement) : []) : t.concat(n, os(n));
}
function xa(s) {
  const t = pt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = St(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = ln(e) !== r || ln(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function gr(s) {
  return Ht(s) ? s : s.contextElement;
}
function Ne(s) {
  const t = gr(s);
  if (!St(t))
    return Xt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = xa(t);
  let o = (r ? ln(e.width) : e.width) / n, a = (r ? ln(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const wh = /* @__PURE__ */ Xt(0);
function $a(s) {
  const t = lt(s);
  return !mr() || !t.visualViewport ? wh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ch(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== lt(s) ? !1 : t;
}
function me(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = gr(s);
  let o = Xt(1);
  t && (n ? Ht(n) && (o = Ne(n)) : o = Ne(s));
  const a = Ch(r, e, n) ? $a(r) : Xt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = lt(r), p = n && Ht(n) ? lt(n) : n;
    let _ = m.frameElement;
    for (; _ && n && p !== m; ) {
      const g = Ne(_), v = _.getBoundingClientRect(), y = pt(_), b = v.left + (_.clientLeft + parseFloat(y.paddingLeft)) * g.x, C = v.top + (_.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, c *= g.y, d *= g.x, h *= g.y, l += b, c += C, _ = lt(_).frameElement;
    }
  }
  return hn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function kh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = St(e), r = Bt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Xt(1);
  const l = Xt(0);
  if ((i || !i && n !== "fixed") && ((Zt(e) !== "body" || xs(r)) && (o = Rn(e)), St(e))) {
    const c = me(e);
    a = Ne(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function xh(s) {
  return Array.from(s.getClientRects());
}
function Sa(s) {
  return me(Bt(s)).left + Rn(s).scrollLeft;
}
function $h(s) {
  const t = Bt(s), e = Rn(s), n = s.ownerDocument.body, i = he(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = he(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Sa(s);
  const a = -e.scrollTop;
  return pt(n).direction === "rtl" && (o += he(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Sh(s, t) {
  const e = lt(s), n = Bt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = mr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Nh(s, t) {
  const e = me(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = St(s) ? Ne(s) : Xt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function no(s, t, e) {
  let n;
  if (t === "viewport")
    n = Sh(s, e);
  else if (t === "document")
    n = $h(Bt(s));
  else if (Ht(t))
    n = Nh(t, e);
  else {
    const i = $a(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return hn(n);
}
function Na(s, t) {
  const e = Le(s);
  return e === t || !Ht(e) || Ln(e) ? !1 : pt(e).position === "fixed" || Na(e, t);
}
function Th(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = os(s).filter((a) => Ht(a) && Zt(a) !== "body"), i = null;
  const r = pt(s).position === "fixed";
  let o = r ? Le(s) : s;
  for (; Ht(o) && !Ln(o); ) {
    const a = pt(o), l = pr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || xs(o) && !l && Na(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Le(o);
  }
  return t.set(s, n), n;
}
function Eh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Th(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = no(t, d, i);
    return c.top = he(h.top, c.top), c.right = De(h.right, c.right), c.bottom = De(h.bottom, c.bottom), c.left = he(h.left, c.left), c;
  }, no(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Mh(s) {
  return xa(s);
}
function Ih(s, t, e) {
  const n = St(t), i = Bt(t), r = e === "fixed", o = me(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  if (n || !n && !r)
    if ((Zt(t) !== "body" || xs(i)) && (a = Rn(t)), n) {
      const c = me(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Sa(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function io(s, t) {
  return !St(s) || pt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Ta(s, t) {
  const e = lt(s);
  if (!St(s))
    return e;
  let n = io(s, t);
  for (; n && vh(n) && pt(n).position === "static"; )
    n = io(n, t);
  return n && (Zt(n) === "html" || Zt(n) === "body" && pt(n).position === "static" && !pr(n)) ? e : n || bh(s) || e;
}
const Ph = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || Ta, r = this.getDimensions;
  return {
    reference: Ih(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Ah(s) {
  return pt(s).direction === "rtl";
}
const Dh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kh,
  getDocumentElement: Bt,
  getClippingRect: Eh,
  getOffsetParent: Ta,
  getElementRects: Ph,
  getClientRects: xh,
  getDimensions: Mh,
  getScale: Ne,
  isElement: Ht,
  isRTL: Ah
};
function Lh(s, t) {
  let e = null, n;
  const i = Bt(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = s.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const p = Is(d), _ = Is(i.clientWidth - (c + h)), g = Is(i.clientHeight - (d + m)), v = Is(c), b = {
      rootMargin: -p + "px " + -_ + "px " + -g + "px " + -v + "px",
      threshold: he(0, De(1, l)) || 1
    };
    let C = !0;
    function k(w) {
      const S = w[0].intersectionRatio;
      if (S !== l) {
        if (!C)
          return o();
        S ? o(!1, S) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      e = new IntersectionObserver(k, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(k, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function _r(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = gr(s), d = i || r ? [...c ? os(c) : [], ...os(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Lh(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let _, g = l ? me(s) : null;
  l && v();
  function v() {
    const y = me(s);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && e(), g = y, _ = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(_);
  };
}
const Wn = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Dh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return _h(s, t, {
    ...i,
    platform: r
  });
};
var ae, Ct, Kt;
class Ea extends O {
  constructor(e) {
    super(e);
    W(this, ae, void 0);
    W(this, Ct, void 0);
    W(this, Kt, void 0);
    B(this, ae, j()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = M(this, ae)) == null ? void 0 : e.current;
  }
  get container() {
    return M(this, Kt);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = u(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return x(
      "pick-pop",
      n,
      r === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: n,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = e, c = u.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: M(this, ae),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!M(this, Kt)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), B(this, Kt, i[0]);
    }
    return M(this, Kt);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      M(this, Ct) && (M(this, Ct).call(this), B(this, Ct, void 0));
      return;
    }
    M(this, Ct) || B(this, Ct, _r(n, e, () => {
      const { placement: o, width: a } = i;
      Wn(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? An() : null, rs(), Dn(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        u(e).css({
          left: l,
          top: c,
          width: a === "100%" ? u(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), u(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    u(document).off("click", this._handleDocClick);
    const e = M(this, Ct);
    e && (e(), B(this, Ct, void 0)), B(this, Kt, void 0), B(this, ae, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Kc(this._render(e), this._getContainer(e));
  }
}
ae = new WeakMap(), Ct = new WeakMap(), Kt = new WeakMap();
var Ma = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, zt = (s, t, e) => (Ma(s, t, "read from private field"), e ? e.call(s) : t.get(s)), jn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, be = (s, t, e, n) => (Ma(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Us, _t, qe;
let ot = class extends O {
  constructor(t) {
    super(t), jn(this, Us, void 0), jn(this, _t, 0), jn(this, qe, j()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      zt(this, _t) && (clearTimeout(zt(this, _t)), be(this, _t, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await en(200, (a) => {
        be(this, _t, a);
      }), be(this, _t, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await en(50, (a) => {
        be(this, _t, a);
      }), be(this, _t, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, be(this, Us, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return zt(this, Us);
  }
  get pop() {
    return zt(this, qe).current;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
      });
    });
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, e) {
    return {
      id: this.id,
      state: e,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      clickType: t.clickType,
      onClick: t.onClick,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, e) {
    return {
      id: this.id,
      state: e,
      className: t.popClass,
      style: t.popStyle,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderTrigger(t, e) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, e) {
    return null;
  }
  _afterRender(t = !1) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, e) {
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (n === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    if (!!n != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      n && a ? a() : !n && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), zt(this, _t) && clearTimeout(zt(this, _t));
    const t = zt(this, qe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: zt(this, qe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Re, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Us = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
ot.Trigger = dr;
ot.Pop = Ea;
ot.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Ia = class extends ot {
  constructor(t) {
    super(t), this.state.value === void 0 && t.required && (this.state.value = this.getColors()[0]);
  }
  getColors() {
    const { colors: t } = this.props;
    return typeof t == "string" ? t.split(",") : t || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: t, syncBorder: e, syncColor: n, syncValue: i } = this.props, r = this.state.value || "";
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), n && u(n).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ f(q, { icon: n }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = u.extend({
      color: e.value
    }, n.style), n.className = x("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Ia.defaultProps = {
  ...ot.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Pa extends R {
}
Pa.NAME = "ColorPicker";
Pa.Component = Ia;
const as = 24 * 60 * 60 * 1e3, Y = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Rh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(Y(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, $s = (s, t = /* @__PURE__ */ new Date()) => Y(s).toDateString() === Y(t).toDateString(), fi = (s, t = /* @__PURE__ */ new Date()) => Y(s).getFullYear() === Y(t).getFullYear(), Aa = (s, t = /* @__PURE__ */ new Date()) => (s = Y(s), t = Y(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), uu = (s, t = /* @__PURE__ */ new Date()) => {
  s = Y(s), t = Y(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, fu = (s, t) => $s(Y(t), s), pu = (s, t) => $s(Y(t).getTime() - as, s), mu = (s, t) => $s(Y(t).getTime() + as, s), et = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = Y(s), Number.isNaN(s.getDay()))
    return e;
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", fi(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, gu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = et(s, fi(s) ? n.month : n.full);
  if ($s(s, t))
    return i;
  const r = et(t, fi(s, t) ? Aa(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var ds, us;
class Da extends O {
  constructor() {
    super(...arguments);
    W(this, ds, j());
    W(this, us, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(M(this, ds).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: M(this, ds), children: [
      /* @__PURE__ */ f(
        rt,
        {
          className: l,
          items: o,
          onClickItem: M(this, us).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        rt,
        {
          className: l,
          items: a,
          onClickItem: M(this, us).bind(this, "minute")
        }
      )
    ] });
  }
}
ds = new WeakMap(), us = new WeakMap();
var Wh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ps = (s, t, e) => (Wh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), As = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, pi, mi, gi, _i;
const ro = (s) => {
  if (!s)
    return;
  const t = Y(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let La = class extends ot {
  constructor(t) {
    super(t), As(this, pi, () => {
      this.toggle(!0);
    }), As(this, mi, (n) => {
      this.setTime(n.target.value);
    }), As(this, gi, (n, i) => {
      this.setTime({ [n]: i });
    }), As(this, _i, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = et(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: d = +l } = t;
      e = `${c}:${d}`;
    }
    const n = ro(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? et(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = ro(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ps(this, _i), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Ps(this, pi), onChange: Ps(this, mi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(Da, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: Ps(this, gi) });
  }
};
pi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
La.defaultProps = {
  ...ot.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
J.addLang({
  zh_cn: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  zh_tw: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  en: {
    today: "Today",
    yearFormat: "{0}",
    weekNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthNames: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
  }
});
const Hh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * as;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, oo = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => et(e, t)));
var _n;
class Oh extends O {
  constructor() {
    super(...arguments);
    W(this, _n, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = J.getLang("weekNames"),
      monthNames: o = J.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const I = (i + S) % 7;
      h.push(/* @__PURE__ */ f("div", { className: x("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[I] : I }) }, S));
    }
    const { startTime: p, days: _, firstDay: g } = Hh(a, l, i), v = g + _ * as;
    let y = p;
    const b = [], C = "yyyy-MM-dd", k = oo(c, C), w = oo(d, C);
    for (; y <= v; ) {
      const S = [];
      for (let I = 0; I < 7; I++) {
        const D = new Date(y), A = D.getDate(), T = et(D, C), P = D.getDay(), U = Aa(D, g), E = x("col mini-calendar-day", {
          active: k.has(T),
          selected: w.has(T),
          "is-first": A === 1,
          "is-in-month": U,
          "is-out-month": !U,
          "is-today": $s(D, n),
          "is-weekend": P === 0 || P === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: E, "data-date": T, children: /* @__PURE__ */ f("a", { className: m, onClick: M(this, _n), children: A === 1 && o ? o[D.getMonth()] : D.getDate() }) }, T)
        ), y += as;
      }
      b.push(/* @__PURE__ */ f("div", { className: "row", children: S }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      b
    ] });
  }
}
_n = new WeakMap();
var fs, yn;
class ao extends O {
  constructor() {
    super(...arguments);
    W(this, fs, j());
    W(this, yn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(M(this, fs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(tt, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: M(this, yn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: M(this, fs), children: a });
  }
}
fs = new WeakMap(), yn = new WeakMap();
var Ie, ps, ms, gs, _s, ys, vn, Wa, bn, Ha;
class Ra extends O {
  constructor(e) {
    super(e);
    W(this, vn);
    W(this, bn);
    W(this, Ie, void 0);
    W(this, ps, void 0);
    W(this, ms, void 0);
    W(this, gs, void 0);
    W(this, _s, void 0);
    W(this, ys, void 0);
    B(this, Ie, j()), B(this, ps, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), B(this, ms, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), B(this, gs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), B(this, _s, (r) => {
      this.setState({ year: r, select: "day" });
    }), B(this, ys, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Rh(l, r.substring(5).replace("+", ""))), r = et(l, "yyyy-MM-dd");
      }
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = n ? new Date(n) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((n) => n.select === e ? { select: "day" } : { select: e });
  }
  componentDidMount() {
    u(M(this, Ie).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = J.getLang("yearFormat") || "{0}",
      weekNames: o = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", _ = Y(e.minDate || "1970-1-1"), g = Y(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: M(this, Ie), onClick: M(this, ps), children: [
      ve(this, vn, Wa).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(tt, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ f(tt, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: M(this, ms), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: M(this, gs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          Oh,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: d,
            month: h,
            selections: c,
            onClickDate: this.changeDate
          }
        ) : null,
        m === "year" ? /* @__PURE__ */ f(
          ao,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: _.getFullYear(),
            max: g.getFullYear(),
            onChange: M(this, _s)
          }
        ) : m === "month" ? /* @__PURE__ */ f(
          ao,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: M(this, ys)
          }
        ) : null,
        p ? ve(this, bn, Ha).call(this, e) : null
      ] })
    ] });
  }
}
Ie = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), vn = new WeakSet(), Wa = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(rt, { ...n })) : null;
}, bn = new WeakSet(), Ha = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": et(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ft, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(tt, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Bh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Kn = (s, t, e) => (Bh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), qn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, yi, vi, bi;
let Oa = class extends ot {
  constructor(t) {
    super(t), qn(this, yi, () => {
      this.toggle(!0);
    }), qn(this, vi, (n) => {
      this.setDate(n.target.value);
    }), qn(this, bi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = Y(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : et(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = et(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Kn(this, bi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Kn(this, yi), onChange: Kn(this, vi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = J.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ f(
      Ra,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      }
    );
  }
};
yi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
Oa.defaultProps = {
  ...ot.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Ba extends R {
}
Ba.NAME = "TimePicker";
Ba.Component = La;
class Fa extends R {
}
Fa.NAME = "DatePicker";
Fa.Component = Oa;
class Fh extends O {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Ra, { ...e }),
      /* @__PURE__ */ f(Da, { ...n })
    ] });
  }
}
var zh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Fe = (s, t, e) => (zh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ze = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, wi, Ci, ki, xi, $i;
const lo = (s) => {
  if (!s)
    return;
  const t = Y(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let za = class extends ot {
  constructor(t) {
    super(t), ze(this, wi, () => {
      this.toggle(!0);
    }), ze(this, Ci, (o) => {
      this.setDate(o.target.value);
    }), ze(this, ki, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), ze(this, xi, (o, a) => {
      this.setTime({ [o]: a });
    }), ze(this, $i, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = Y(o), _ = !o || Number.isNaN(p.getDay()), g = et(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: _ ? c ? l : "" : `${g}${m}${v}` }, () => {
        !_ && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = et(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(o), [p, _] = m.split(":"), { hour: g = +p, minute: v = +_ } = t;
      c = `${g}:${v}`;
    }
    const d = lo(c), h = this.state.value.split(o)[0] || et(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${et(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = lo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Fe(this, ki),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: Fe(this, wi),
          onChange: (m) => {
            Fe(this, Ci).call(this, m), Fe(this, $i).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = J.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: _ } = t, [g, v] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      },
      time: {
        hour: g,
        minute: v,
        minuteStep: _,
        onChange: Fe(this, xi)
      }
    };
    return /* @__PURE__ */ f(Fh, { ...y });
  }
};
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
za.defaultProps = {
  ...ot.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Va extends R {
}
Va.NAME = "DatetimePicker";
Va.Component = za;
const Yn = "show", co = "in", Vh = '[data-dismiss="modal"]', Ss = class Ye extends ht {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Vh) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Yn);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return this._rob;
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = this._rob) == null || t.disconnect();
      const { dialog: e } = this;
      if (e) {
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  show(t) {
    const { modalElement: e } = this;
    if (this.shown)
      return u(e).css("z-index", `${Ye.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Yn, r).css({
      zIndex: `${Ye.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(co), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(co), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(Yn), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = u(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const d = { width: "", height: "" };
      typeof e == "object" ? (d.width = e.width, d.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (d.width = e), i.css(d);
    }
    t = t ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = Ye.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ye.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
Ss.NAME = "Modal";
Ss.MULTI_INSTANCE = !0;
Ss.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ss.zIndex = 1500;
let ge = Ss;
u(window).on(`resize.${ge.NAMESPACE}`, () => {
  ge.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${ge.NAMESPACE}`, (s, t) => {
  ge.hide(t == null ? void 0 : t.target);
});
class Ua extends O {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  renderHeader() {
    const {
      header: t,
      headerClass: e,
      title: n
    } = this.props;
    return it(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : it(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ft, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? it(t) ? t : /* @__PURE__ */ f("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return it(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-footer", e), children: n ? /* @__PURE__ */ f(ft, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: x("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Ua.defaultProps = { closeBtn: !0 };
class ja extends O {
  constructor() {
    super(...arguments), this._ref = j(), this.state = {}, this._watchIframeHeight = () => {
      var n, i;
      const t = (i = (n = this._ref.current) == null ? void 0 : n.contentWindow) == null ? void 0 : i.document;
      if (!t)
        return;
      let e = this._rob;
      e == null || e.disconnect(), e = new ResizeObserver(() => {
        const r = t.body, o = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, o.offsetHeight)) + 1;
        this.setState({ height: a });
      }), e.observe(t.body), e.observe(t.documentElement), this._rob = e;
    };
  }
  componentDidMount() {
    this.props.watchHeight && this._watchIframeHeight();
  }
  componentWillUnmount() {
    var t;
    (t = this._rob) == null || t.disconnect();
  }
  render() {
    const { url: t, watchHeight: e } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: this._ref,
        onLoad: e ? this._watchIframeHeight : void 0
      }
    );
  }
}
ja.defaultProps = {
  watchHeight: !0
};
var yr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, gt = (s, t, e) => (yr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ve = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, we = (s, t, e, n) => (yr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), js = (s, t, e) => (yr(s, t, "access private method"), e), Et, Ge, Mt, dn, vr, Ks, Si;
function Uh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function jh(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
    url: n,
    headers: {
      "X-ZUI-Modal": "true"
    },
    ...i
  });
  if (e !== "html")
    try {
      const d = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...d
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ f(fe, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Kh(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(ja, { url: e, watchHeight: !o })
  };
}
const qh = {
  custom: Uh,
  ajax: jh,
  iframe: Kh
}, Gn = "loading", Ka = class ne extends ge {
  constructor() {
    super(...arguments), Ve(this, dn), Ve(this, Ks), Ve(this, Et, void 0), Ve(this, Ge, void 0), Ve(this, Mt, void 0);
  }
  get id() {
    return gt(this, Ge);
  }
  get loading() {
    var t;
    return (t = gt(this, Et)) == null ? void 0 : t.classList.contains(Gn);
  }
  get shown() {
    var t;
    return !!((t = gt(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = gt(this, Et);
    if (!t) {
      const { options: e } = this;
      let n = gt(this, Ge);
      n || (n = e.id || `modal-${u.guid++}`, we(this, Ge, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      we(this, Et, t);
    }
    return t;
  }
  get $emitter() {
    const t = gt(this, Et);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ne.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("body").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = gt(this, Et);
    t && (u(t).removeData(this.constructor.KEY).remove(), we(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    gt(this, Mt) && clearTimeout(gt(this, Mt));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = qh[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(Gn), r && we(this, Mt, window.setTimeout(() => {
      we(this, Mt, 0), js(this, Ks, Si).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await js(this, Ks, Si).call(this, this.options.failedTip) : l && typeof l == "object" && await js(this, dn, vr).call(this, l), gt(this, Mt) && (clearTimeout(gt(this, Mt)), we(this, Mt, 0)), this.layout(), await en(100), n.removeClass(Gn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ne.ensure(n, r), a = `${ne.NAMESPACE}.open${u.guid++}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? m = /* @__PURE__ */ f("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: x("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = J.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let _;
    const g = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const b = ne.query(y.target, c);
        _ = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ne.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: g, ...h },
      ...d
    }), _;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ne.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
dn = /* @__PURE__ */ new WeakSet();
vr = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, is(
      /* @__PURE__ */ f(Ua, { ...s }),
      this.modalElement
    );
  });
};
Ks = /* @__PURE__ */ new WeakSet();
Si = function(s) {
  if (s)
    return js(this, dn, vr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Ka.DEFAULT = {
  ...ge.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Yh = Ka;
const Gh = '[data-toggle="modal"]';
class Ni extends ht {
  get modal() {
    return this._modal;
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = this._initModal()) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = this._modal) == null ? void 0 : t.hide();
  }
  _getBuilderOptions() {
    const {
      container: t,
      ...e
    } = this.options, n = e, i = this.$element.attr("href") || "";
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), n.key === void 0 && (n.key = `${this._key}`), n;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const n = this._getStaticModalElement();
      if (!n)
        return;
      e = ge.ensure(n, t);
    } else
      e = Yh.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const n = e.attr("href");
        n != null && n.startsWith("#") && (t = n);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
Ni.NAME = "ModalTrigger";
u(document).on(`click${Ni.NAMESPACE}`, Gh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Ni.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let br = class extends te {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
br.NAME = "nav";
br.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class qa extends R {
}
qa.NAME = "Nav";
qa.Component = br;
function ls(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Xh({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ls(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(tt, { type: e, ...a });
}
function Zh({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ls(i, e);
  return n = typeof n == "function" ? n(a) : Q(n, a), /* @__PURE__ */ f(K, { ...o, children: [
    r,
    n
  ] });
}
function Jh({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ f(tt, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const _ = ls(n, p);
      i && (o.url = typeof i == "function" ? i(_) : Q(i, _)), m.push(/* @__PURE__ */ f(tt, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let Qh = class extends O {
  render(t) {
    const {
      id: e,
      popup: n,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: d,
      titleClass: h,
      contentClass: m,
      arrowStyle: p,
      onlyInner: _
    } = t;
    let g = /* @__PURE__ */ f(F, { content: r }, "content");
    (m || i) && (g = /* @__PURE__ */ f("div", { className: m, children: g }, "content"));
    const v = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(g), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), _ ? v : /* @__PURE__ */ f("div", { id: e, className: x("popover", a, { popup: n }), style: o, children: v });
  }
};
class wr extends R {
}
wr.NAME = "PopoverPanel";
wr.Component = Qh;
const td = '[data-toggle="popover"]', ho = "show", uo = "in";
class ut extends ht {
  constructor() {
    super(...arguments), this._getClickBounding = () => {
      const t = this._triggerEvent;
      return {
        x: t.clientX,
        y: t.clientY,
        left: t.clientX,
        top: t.clientY,
        width: 0,
        height: 0,
        bottom: t.clientY,
        right: t.clientX
      };
    }, this._onClickDoc = (t) => {
      const e = u(t.target);
      (!e.closest(`#${this._id}`).length && this._targetElement !== e.closest(".popover")[0] || e.closest('[data-dismiss="popover"]').length) && this.hide();
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { trigger: t, id: e, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = u(i), { namespace: a } = this;
      t === "hover" ? o.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
      });
    }
    const { show: r } = this.options;
    r && this.show({ delay: typeof r == "number" ? r : !1 });
  }
  getTriggerElement() {
    if (!this._triggerElement) {
      let { element: t = this.element } = this.options;
      t === document.body && (t = {
        getBoundingClientRect: this._getClickBounding
      }), this._triggerElement = t, this._virtual = !(t instanceof HTMLElement);
    }
    return this._triggerElement;
  }
  initTarget() {
    let t = this.options.target;
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), u(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n } = t || {};
    if (n && (this._triggerEvent = n), e)
      return this._resetTimer(() => {
        this.show();
      }, e === !0 ? this.options.delay : e);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const i = this.initTarget();
    if (!i)
      return;
    this._targetElement = i;
    const r = u(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(ho), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(uo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(uo), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(ho), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), u(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      u(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = _r(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Wn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = u(e).css({
          position: h,
          left: a,
          top: l
        }), p = d.split("-")[0], _ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], g = c.arrow;
        g && m.find(".arrow").css({
          left: g.x,
          top: g.y
        }).attr("class", `arrow ${o}-arrow arrow-${_}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${_}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new wr(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  delayHide(t = 100) {
    this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, t);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: l,
      middleware: [
        i ? An() : null,
        r ? rs(typeof r == "object" ? r : void 0) : null,
        o || d ? Dn((o || 0) + d) : null,
        a ? ui({ element: c }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: n,
      content: i,
      headingClass: r = `${t}-heading`,
      titleClass: o = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: c = t,
      closeBtn: d,
      arrow: h
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: c,
      closeBtn: d,
      arrow: h ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof h == "number" ? h : 5}px` },
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var t, e, n;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (n = this._targetElement) == null || n.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = u(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
ut.NAME = "Popover";
ut.Z_INDEX = 1700;
ut.MULTI_INSTANCE = !0;
ut.DEFAULT = {
  placement: "top",
  strategy: "absolute",
  flip: !0,
  arrow: !0,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0,
  animation: !0,
  closeBtn: !0,
  popup: !0
};
u(document).on(`click${ut.NAMESPACE} mouseenter${ut.NAMESPACE}`, td, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(ut.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ut.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const ed = '[data-toggle="dropdown"]';
class xt extends ut {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, onClickItem: i } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      ...n
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: $t(kr, this._getMenuOptions())
    };
  }
}
xt.NAME = "Dropdown";
xt.DEFAULT = {
  ...ut.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${xt.NAMESPACE} mouseenter${xt.NAMESPACE}`, ed, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(xt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    const i = {
      ...t.data(),
      show: !0,
      triggerEvent: s
    };
    if (!i.target && t.is("a")) {
      const r = t.attr("href");
      r && "#0".includes(r[0]) && (i.target = r);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), xt.ensure(t, i), s.preventDefault();
  }
});
class Cr extends tt {
  constructor() {
    super(...arguments), this._ref = j();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e, onClickItem: n } = this.props, i = u(this.triggerElement), r = xt.get(this.triggerElement), o = {
      items: e,
      onClickItem: n,
      ...t
    };
    r ? r.setOptions(o) : i.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = xt.get(this.triggerElement)) == null || t.destroy();
  }
  _getProps(t) {
    const { trigger: e, placement: n } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": n,
      ref: this._ref
    };
  }
}
Cr.defaultProps = {
  caret: !0
};
Object.assign(yt.ItemComponents, { dropdown: Cr });
class kr extends Tt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this._ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || Wn(e, t, {
      placement: this.props.placement,
      middleware: [An(), rs(), Dn(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
        left: n,
        top: i
      });
    });
  }
  _afterRender(t) {
    super._afterRender(t), this.isRoot || (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  _renderNestedToggle(t, e) {
    if (typeof e == "boolean")
      return /* @__PURE__ */ f("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ f("span", { className: "caret-right" }) });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
kr.defaultProps = {
  ...Tt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
kr.inheritNestedProps = [...Tt.inheritNestedProps, "popup"];
function sd({
  type: s,
  pagerInfo: t,
  linkCreator: e,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || n.map((c) => {
    const d = { ...t, recPerPage: c };
    return {
      ...r,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : Q(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Cr, { type: "dropdown", dropdown: i, ...o });
}
function nd({
  key: s,
  page: t,
  type: e,
  btnType: n,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...c
}) {
  const d = { ...c };
  let h;
  const m = (g) => {
    var v;
    h = Number((v = g.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (g) => {
    if (!(g != null && g.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = ls(i, h);
    a && !a({ info: v, event: g }) || (g.target.href = d.url = typeof l == "function" ? l(v) : Q(l, v));
  }, _ = ls(i, t || 0);
  return d.url = typeof l == "function" ? l(_) : Q(l, _), /* @__PURE__ */ f("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ f(tt, { type: n, ...d, onClick: p })
  ] });
}
const jt = class extends ft {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n), r = e.type || "item", o = this._pagerInfo;
    return r === "info" ? u.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && u.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
jt.NAME = "pager";
jt.ItemComponents = {
  ...ft.ItemComponents,
  info: Zh,
  link: [Xh, jt.getBtnProps],
  nav: [Jh, jt.getBtnProps],
  "size-menu": [sd, jt.getBtnProps],
  goto: [nd, jt.getBtnProps]
};
jt.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let id = jt;
class Ya extends R {
}
Ya.NAME = "Pager";
Ya.Component = id;
class Ga extends R {
}
Ga.NAME = "Pick";
Ga.Component = ot;
var Pe, vs;
class Xa extends O {
  constructor(e) {
    super(e);
    W(this, Pe, void 0);
    W(this, vs, void 0);
    this._searchInput = j(), this._measure = j(), this._changeTimer = 0, B(this, Pe, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), B(this, vs, (n) => {
      var i, r;
      n.stopPropagation(), (r = (i = this.props).onClear) == null || r.call(i), this.setState({ search: "" }, () => this.focus());
    }), this.state = { search: e.defaultSearch ?? "" };
  }
  focus() {
    var e;
    (e = this._searchInput.current) == null || e.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: e } = this.props;
    if (e) {
      const { current: n } = this._measure, { current: i } = this._searchInput;
      if (n && i) {
        const r = u(i).parent();
        r.width(Math.ceil(Math.min(n.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer);
  }
  render(e, n) {
    const { placeholder: i, inline: r } = e, { search: o } = n, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: M(this, vs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: M(this, Pe),
          onInput: M(this, Pe),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Pe = new WeakMap(), vs = new WeakMap();
class rd extends dr {
  constructor() {
    super(...arguments), this._search = j(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(F, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Xa,
      {
        inline: !0,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n }, search: i, placeholder: r, children: o } = this.props, a = n && i;
    return !a && !e.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ f("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ f("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    u(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", ci), this._skipTriggerChange = !1;
    }
  }
}
class od extends dr {
  constructor() {
    super(...arguments), this._search = j(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: n } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = n.find((o) => o.value === e);
      r && typeof r.text == "string" && (i = r.text);
    }
    return i;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      Xa,
      {
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder()
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: n = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [c] = n, d = i && o;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: _ } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof _ == "string" ? _ : void 0, children: /* @__PURE__ */ f(F, { content: _ }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
let Ns = class extends rt {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Ns.NAME = "tree";
Ns.defaultItemProps = {
  ...rt.defaultItemProps,
  innerComponent: "div"
};
Ns.inheritNestedProps = [...rt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let Ts = class extends Tt {
  _getItem(t, e, n) {
    return Ns.getTreeItem(t, super._getItem(t, e, n));
  }
};
Ts.NAME = "tree";
Ts.inheritNestedProps = [...Tt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
Ts.defaultItemProps = {
  ...Tt.defaultProps,
  innerComponent: "div"
};
function Za(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Za(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class ad extends Ea {
  constructor() {
    super(...arguments), this._menu = j(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, m) => {
        const p = this._getItem(h, m);
        return p && (p.active ? o = !0 : r = !1, d.push(p)), d;
      }, []));
      const a = r || n.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: x(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      };
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((d) => this._disabledSet.has(d.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...Za(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          u(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return u(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return H({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      items: o,
      defaultNestedShow: !0,
      search: a,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"]
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ f(Ts, { hover: !0, ...n }) : /* @__PURE__ */ f(Tt, { ...n });
  }
}
function qs(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && qs(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let xr = class extends ot {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = j(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((c) => !a.has(c));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), u.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = qs(i);
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else if (await en(n || 500), this._abort !== t || (r = await $n(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = qs(r);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, t || i.search !== e.search || n.items !== i.items) {
      const a = await this.load();
      r.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, i.items = n.items, i.search = e.search;
    }
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    n.required && !n.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    this._updateTimer && clearTimeout(this._updateTimer), this._updateTimer = window.setTimeout(() => {
      this._updateTimer = 0, this.update();
    }, 50);
  }
  componentDidUpdate(t, e) {
    super.componentDidUpdate(t, e), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = this._abort) == null || t.abort(), this._abort = void 0, this._itemsCacheInfo = void 0, clearTimeout(this._updateTimer), super.componentWillUnmount();
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      ref: this._trigger,
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.menu,
      tree: t.tree,
      checkbox: t.checkbox,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      valueList: this.valueList,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? rd : od);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = u.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = u.unique(t)), e.filter((n) => !this.isEmptyValue(n));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = qs(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    if (e) {
      const r = this._trigger.current;
      r && (r._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
xr.defaultProps = {
  ...ot.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
xr.Pop = ad;
class Ja extends R {
}
Ja.NAME = "Picker";
Ja.Component = xr;
class Qa extends ht {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: n } = this.options;
      n === 0 ? e() : setTimeout(e, n);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, n = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && n.middleware.push(An()), r && n.middleware.push(r === !0 ? rs() : rs(r)), o && n.middleware.push(ui({ element: this.$arrow[0] })), a && n.middleware.push(Dn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = _r(t, e, () => {
      Wn(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !ui || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, c = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[r.split("-")[0]];
        Object.assign(this.$arrow[0].style, {
          left: a != null ? `${a}px` : "",
          top: l != null ? `${l}px` : "",
          right: "",
          bottom: "",
          [c]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const e = u(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      u(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = e;
  }
  show() {
    var t;
    this.$target.removeClass("hidden"), (t = this.$mask) == null || t.removeClass("hidden");
  }
  hide() {
    var t;
    this.$target.addClass("hidden"), (t = this.$mask) == null || t.addClass("hidden");
  }
  initMask() {
    const { mask: t } = this.options;
    if (!t)
      return;
    const e = u('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = u('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Qa.NAME = "Popovers";
Qa.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0
};
class tl extends R {
}
tl.NAME = "SearchBox";
tl.Component = ir;
class el extends R {
}
el.NAME = "Toolbar";
el.Component = ft;
const ld = '[data-toggle="tooltip"]';
class Dt extends ut {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: x("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Dt.NAME = "Tooltip";
Dt.DEFAULT = {
  ...ut.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Dt.NAMESPACE} mouseenter${Dt.NAMESPACE}`, ld, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Dt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Dt.ensure(t, { show: Dt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class sl extends R {
}
sl.NAME = "Tree";
sl.Component = Ns;
class nl extends R {
}
nl.NAME = "SearchTree";
nl.Component = Ts;
class $r extends ht {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? Tc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const m = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = u(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = u(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
    const d = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...d);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary")), this.$label.hasClass("dragover") || this.$label.addClass("dragover");
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
    }).on("drop", (t) => {
      var n;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((n = t.dataTransfer) == null ? void 0 : n.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: n } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), n && this.$input.prop("accept", n);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: n } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, n == null || n(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const n = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${n}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const n = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: n, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (e) {
      const c = [];
      for (let d of t) {
        if (n && this.fileMap.size >= n)
          return o == null || o(c), alert(r);
        if (this.currentBytes + d.size > this.limitBytes)
          return o == null || o(c), alert(i);
        d = this.renameDuplicatedFile(d);
        const h = this.createFileItem(d);
        this.itemMap.set(d.name, h), this.$list.append(h), c.push(d);
      }
      o == null || o(c);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    var l, c;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const n = this.fileMap.get(e);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const n = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), n && (t = this.fileMap.get(n) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: e } = this.options;
    return this.addFile(t), u('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return u(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Dt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Dt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Nc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const h = r.closest(".file-item"), m = h.find(".file-name");
        if (m.html() === o.val()) {
          r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), m.html(o.val());
      } else
        d.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
$r.NAME = "Upload";
$r.DEFAULT = {
  uploadText: "上传文件",
  confirmText: "确定",
  cancelText: "取消",
  useIconBtn: !0,
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  tip: "",
  draggable: !1,
  showSize: !0
};
class il extends $r {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (e === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const n = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => n.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: n, showSize: i } = this.options;
    return n && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const n = new FileReader();
    n.onload = () => {
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = u(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = n.closest(".file-item").find(".file-name");
        if (r.html() === n.val()) {
          n.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(e);
        this.renameFileItem(t, n.val()), n.addClass("hidden"), r.html(n.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && n.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = n.closest(".file-item").find(".file-name");
      if (i.html() === n.val()) {
        n.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(n.val()))
        return alert(e);
      this.renameFileItem(t, n.val()), n.addClass("hidden"), i.html(n.val()).closest(".file-info").removeClass("hidden");
    });
    return n;
  }
}
il.NAME = "UploadImgs";
il.DEFAULT = {
  uploadText: "添加文件",
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !1,
  multiple: !0,
  limitSize: !1,
  btnClass: "",
  draggable: !0,
  accept: "image/jpg, image/jpeg, image/gif, image/png",
  showSize: !0,
  useIconBtn: !0,
  totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。'
};
let Ti = class extends K {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: n,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ f("div", { className: x("card-content", r), children: [
          e ? /* @__PURE__ */ f("div", { className: x("card-subtitle", n), children: /* @__PURE__ */ f(F, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ f(F, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: n,
      prefixClass: i,
      title: r,
      titleClass: o,
      titleUrl: a,
      titleAttrs: l,
      suffix: c,
      suffixClass: d,
      heading: h,
      headingClass: m
    } = t;
    if (!e && !n && !r && !c && !h)
      return;
    const p = a ? "a" : "span";
    return /* @__PURE__ */ f("div", { className: x("card-heading", m), children: [
      e ? /* @__PURE__ */ f(q, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ f("span", { className: x("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ f(p, { className: x("card-title", o), href: a, ...l, children: /* @__PURE__ */ f(F, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ f("span", { className: x("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ f(F, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ f("div", { className: x("card-header", n), children: /* @__PURE__ */ f(F, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ f("div", { className: x("card-footer", n), children: [
        /* @__PURE__ */ f(F, { content: e }, "footer"),
        ft.render(i, [t], { key: "foot-actions", className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ft.render(t.actions, [t], { key: "actions", className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = H({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ f(te, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = x("item-avatar", n.className), /* @__PURE__ */ f(ws, { ...n }, "avatar");
    }
  }
  _getClassName(t) {
    return ["card", t.className];
  }
  _getChildren(t) {
    return [
      this._renderActions(t),
      this._renderHeader(t),
      this._renderAvatar(t),
      this._renderHeading(t),
      this._renderContent(t),
      this._renderList(t),
      this._renderFooter(t),
      t.children
    ];
  }
}, He = class extends te {
};
He.NAME = "card-list";
He.TAG = "div";
He.ItemComponents = {
  ...te.ItemComponents,
  default: Ti,
  item: Ti
};
He.defaultItemProps = {
  component: "div"
};
class rl extends R {
}
rl.NAME = "Card";
rl.Component = Ti;
class ol extends R {
}
ol.NAME = "CardList";
ol.Component = He;
class Sr extends xt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Sr.NAME = "ContextMenu";
Sr.DEFAULT = {
  ...xt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function cd(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(fe, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const Xn = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), fo = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], Ds = "Dashboard:Block.cache:";
let al = class extends O {
  constructor(t) {
    super(t), this._ref = j(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: n } = this.state, i = {};
      let r = !1;
      n.forEach((o) => {
        const [a, l, c, d] = this._map.get(o.id), h = this._oldMap.get(o.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(o.id, [a, l, c, d]));
      }), r && e(i);
    }, this._handleMenuClick = (e) => {
      const n = e.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      Sr.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var c;
            ((c = l.item.data) == null ? void 0 : c.type) === "refresh" && this.load(i), a && a.call(this, l, r);
          },
          ...o
        }
      });
    }, this.state = { blocks: this._initBlocks(t.blocks) };
  }
  getBlock(t) {
    return this.state.blocks.find((e) => e.id === t);
  }
  update(t, e) {
    const { id: n } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === n);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, n = e.findIndex((i) => i.id === t);
    n < 0 || (e.splice(n, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const n = this.getBlock(t);
    !n || n.loading || (e = e || n.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await u.fetch(e, [t, n], ({ url: r }) => ({ url: Q(r, n), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, n);
        });
      }
    }));
  }
  reset(t) {
    this.setState({ blocks: this._initBlocks(t) });
  }
  loadNext() {
    const { blocks: t } = this.state;
    let e = "";
    for (const n of t) {
      if (n.loading)
        return;
      if (!n.visible && this._isVisible(n.id))
        return this.update({ id: n.id, visible: !0 });
      if (n.needLoad && n.visible) {
        e = n.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Ke.set(`${Ds}${n}:${t}`, e) : Ke.session.set(`${Ds}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? Ke.get(`${Ds}${e}:${t}`) : Ke.session.get(`${Ds}${t}`);
    if (n)
      return { html: n };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: n, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: m = -1,
        fetch: p = e,
        menu: _ = n,
        content: g,
        ...v
      } = o, [y, b] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: b,
        left: Math.min(h, i - y),
        top: m,
        fetch: p,
        menu: _,
        content: g ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!p,
        ...v
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: n } = this.props;
    return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: n } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => fo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => fo(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), n && (o = Math.max(o, n[1] + n[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new In(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, n) => {
        const i = n.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, n) => {
        const i = n.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: n, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / n)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: n } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && n) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, d] = e === a.id ? n : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (o[l] = { ...a, left: c, top: d }, r[a.id] = { left: c, top: d });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: n, top: i, width: r, height: o } = t, a = [n, i, r, o];
    n < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: n } = this.state;
    if (n && Xn(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && Xn(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && Xn(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [n, i, r, o] = e;
    let a = i;
    if (n >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [n, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = n < 0 ? 0 : n, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, r, o])) {
        d = !0;
        break;
      }
      n < 0 ? (l += 1, l + r > h && (l = 0, c += 1)) : c += 1;
    }
    this._map.set(t, [l, c, r, o]);
  }
  componentDidMount() {
    this.loadNext(), u(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), u(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [_, g, v, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              cd,
              {
                id: d,
                index: c,
                left: `${100 * _ / i}%`,
                top: n * g,
                width: `${100 * v / i}%`,
                height: n * y,
                content: m,
                title: p,
                onMenuBtnClick: h ? this._handleMenuClick : void 0
              },
              l.id
            );
          })
        ]
      }
    ) });
  }
};
al.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", data: { type: "refresh" } }] },
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
};
class ll extends R {
}
ll.NAME = "Dashboard";
ll.Component = al;
var qt, Yt;
class po extends O {
  constructor(e) {
    super(e);
    W(this, qt, void 0);
    W(this, Yt, void 0);
    B(this, qt, 0), B(this, Yt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (M(this, qt) && cancelAnimationFrame(M(this, qt)), B(this, qt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, qt, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    }, this._handleClick = (n) => {
      const i = n.currentTarget;
      if (!i)
        return;
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? n.clientX - r.left : n.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), n.preventDefault();
    }, this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / n), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (B(this, Yt, typeof e == "string" ? document : e.current), M(this, Yt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), M(this, Yt) && M(this, Yt).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    return e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)), !0);
  }
  scrollOffset(e) {
    return this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    const { onScroll: n } = this.props;
    n && n(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: n,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: c,
      right: d
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: p } = this.state, _ = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, g = {};
    return n === "horz" ? (_.height = i, _.width = e, g.width = this.barSize, g.left = Math.round(Math.min(h, m) * (e - g.width) / h)) : (_.width = i, _.height = e, g.height = this.barSize, g.top = Math.round(Math.min(h, m) * (e - g.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
        }),
        style: _,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
          "div",
          {
            className: "scrollbar-bar",
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
qt = new WeakMap(), Yt = new WeakMap();
const un = /* @__PURE__ */ new Map(), fn = [];
function cl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && un.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  un.set(e, s), t != null && t.buildIn && !fn.includes(e) && fn.push(e);
}
function Ft(s, t) {
  cl(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...r } = s;
    return {
      ...r,
      defaultOptions: { ...i, ...n }
    };
  };
  return e.plugin = s, e;
}
function hl(s) {
  return un.delete(s);
}
function hd(s) {
  if (typeof s == "string") {
    const t = un.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function dl(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = hd(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && dl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function dd(s = [], t = !0) {
  return t && fn.length && s.unshift(...fn), s != null && s.length ? dl([], s, /* @__PURE__ */ new Set()) : [];
}
function ul() {
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
    footer: void 0,
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
function ud(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function mo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Zn(s, t = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!t && n > 0 || t && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let e = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = e, e += n.realWidth;
  });
}
function fd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = mo(b, 0), b < 1 && (b = Math.round(b * n)), b), d = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, h = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(a)
  }, m = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, p = [], _ = {};
  let g = !1;
  const v = [], y = {};
  if (e.forEach((b) => {
    const { colTypes: C, onAddCol: k } = b;
    C && Object.entries(C).forEach(([w, S]) => {
      y[w] || (y[w] = []), y[w].push(S);
    }), k && v.push(k);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: C = "", name: k } = b, w = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: C
    }, S = {
      name: k,
      type: C,
      setting: w,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, I = y[C];
    I && I.forEach((V) => {
      const at = typeof V == "function" ? V.call(s, w) : V;
      at && Object.assign(w, at, b);
    });
    const { fixed: D, flex: A, minWidth: T = r, maxWidth: P = o } = w, U = mo(w.width || i, i);
    S.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, S.width = ud(U < 1 ? Math.round(U * n) : U, T, P), v.forEach((V) => V.call(s, S)), p.push(S), _[S.name] = S;
    const E = D ? D === "left" ? h : m : d;
    E.list.push(S), E.totalWidth += S.width, E.width = E.totalWidth, S.flex && E.flexList.push(S), typeof w.order == "number" && (g = !0);
  }), g) {
    const b = (C, k) => (C.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort(b), h.list.sort(b), d.list.sort(b), m.list.sort(b);
  }
  return Zn(h, !0), Zn(m, !0), d.widthSetting = n - h.width - m.width, Zn(d), {
    list: p,
    map: _,
    left: h,
    center: d,
    right: m
  };
}
function pd({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var U;
  const p = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...o
  }, { align: _, border: g } = s.setting, v = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...s.setting.cellStyle,
    ...r
  }, y = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": g === !0 || g === "left",
    "has-border-right": g === !0 || g === "right"
  }], b = ["dtable-cell-content", s.setting.cellClass], C = (U = n.data) == null ? void 0 : U[s.name], k = [a ?? C ?? ""], w = i ? i(k, { row: n, col: s, value: C }, $t) : k, S = [], I = [], D = {}, A = {};
  let T = "div";
  w == null || w.forEach((E) => {
    if (typeof E == "object" && E && !it(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const V = E.outer ? S : I;
      E.html ? V.push(/* @__PURE__ */ f("div", { className: x("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : v, E.style), E.className && (E.outer ? y : b).push(E.className), E.children && V.push(E.children), E.attrs && Object.assign(E.outer ? D : A, E.attrs)), E.tagName && !E.outer && (T = E.tagName);
    } else
      I.push(E);
  });
  const P = T;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...D,
      children: [
        I.length > 0 && /* @__PURE__ */ f(P, { className: x(b), style: v, ...A, children: I }),
        S
      ]
    }
  );
}
function Jn({
  rows: s = [],
  cols: t,
  rowHeight: e,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: d = pd,
  onRenderCell: h
}) {
  var g;
  const m = Array.isArray(s) ? s : [s], p = ((g = m[0]) == null ? void 0 : g.top) ?? 0, _ = m.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, b) => {
        const C = t.length;
        return t.forEach((k, w) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: x(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  w ? "" : "is-first-in-row",
                  w === C - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === _ - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function fl({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: d,
  onRenderCell: h,
  children: m
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ f(
    Jn,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: h
    },
    "left"
  ));
  let _ = null;
  r.list.length && (_ = /* @__PURE__ */ f(
    Jn,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      onRenderCell: h
    },
    "center"
  ));
  let g = null;
  return o.list.length && (g = /* @__PURE__ */ f(
    Jn,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: h
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        p,
        _,
        g,
        m
      ]
    }
  );
}
var Nr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, N = (s, t, e) => (Nr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, G = (s, t, e, n) => (Nr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), dt = (s, t, e) => (Nr(s, t, "access private method"), e), ke, Xe, de, Lt, re, nt, Pt, It, Ze, Ys, pn, cs, Vt, Je, Qe, Ei, pl, Mi, ml, Ii, gl, Pi, _l, Gs, Ai, Hn, mn, Di, Li, Ri, Wi, ts, Xs, Tr, yl, Er, vl, Hi, bl;
let Mr = class extends O {
  constructor(t) {
    super(t), L(this, Ei), L(this, Mi), L(this, Ii), L(this, Pi), L(this, Gs), L(this, ts), L(this, Tr), L(this, Er), L(this, Hi), this.ref = j(), L(this, ke, 0), L(this, Xe, void 0), L(this, de, !1), L(this, Lt, void 0), L(this, re, void 0), L(this, nt, []), L(this, Pt, void 0), L(this, It, /* @__PURE__ */ new Map()), L(this, Ze, {}), L(this, Ys, void 0), L(this, pn, []), L(this, cs, { in: !1 }), this.updateLayout = () => {
      N(this, ke) && cancelAnimationFrame(N(this, ke)), G(this, ke, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, ke, 0);
      }));
    }, L(this, Vt, (e, n) => {
      n = n || e.type;
      const i = N(this, It).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Je, (e) => {
      N(this, Vt).call(this, e, `window_${e.type}`);
    }), L(this, Qe, (e) => {
      N(this, Vt).call(this, e, `document_${e.type}`);
    }), L(this, Hn, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, nt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), L(this, mn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Di, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), N(this, nt).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of N(this, nt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), L(this, Li, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, Ri, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return dt(this, ts, Xs).call(this, !1);
      dt(this, ts, Xs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, Wi, () => {
      dt(this, ts, Xs).call(this, !1);
    }), G(this, Xe, t.id ?? `dtable-${ga(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, re, Object.freeze(dd(t.plugins))), N(this, re).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, Ze), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, Pt)) == null ? void 0 : t.options) || N(this, Lt) || ul();
  }
  get plugins() {
    return N(this, nt);
  }
  get layout() {
    return N(this, Pt);
  }
  get id() {
    return N(this, Xe);
  }
  get data() {
    return N(this, Ze);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, cs);
  }
  componentWillReceiveProps() {
    G(this, Lt, void 0);
  }
  componentDidMount() {
    N(this, de) ? this.forceUpdate() : dt(this, Gs, Ai).call(this), N(this, nt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, Di)), this.on("keydown", N(this, Li));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, Ri)), this.on("mouseleave", N(this, Wi))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), G(this, Ys, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, nt).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    N(this, de) ? dt(this, Gs, Ai).call(this) : N(this, nt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, Ys)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of N(this, It).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), N(this, Je)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), N(this, Qe)) : t.removeEventListener(n, N(this, Vt));
    N(this, nt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), N(this, re).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), G(this, Ze, {}), N(this, It).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Je)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Qe)) : (r = this.element) == null || r.addEventListener(t, N(this, Vt)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Je)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Qe)) : (o = this.element) == null || o.removeEventListener(t, N(this, Vt)));
  }
  emitCustomEvent(t, e) {
    N(this, Vt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      m = 0;
    else if (d === "bottom")
      m = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: _, offsetTop: g } = t;
      typeof _ == "number" && (h = n + _), typeof g == "number" && (h = i + g);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, p), e == null || e.call(this, !0);
    }), !0) : (e == null || e.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: e } = this.layout;
    return typeof t == "number" ? e.list[t] : e.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: e, rowsMap: n, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : n[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const n = typeof t == "object" ? t : this.getRowInfo(t);
    if (!n)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = n.id === "HEADER" ? i.setting.title : (a = n.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, n, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!N(this, Lt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      G(this, Pt, void 0);
    else if (n === "options") {
      if (G(this, Lt, void 0), !N(this, Pt))
        return;
      G(this, Pt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = u(e).closest(".dtable-cell");
    if (!n.length)
      return;
    const i = n.attr("data-row"), r = n.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: n[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, n) {
    return J(N(this, pn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = dt(this, Hi, bl).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      const _ = !t.rows.length;
      if (m.push(t.className, _ ? "dtable-is-empty" : ""), c) {
        const g = c.call(this, t);
        g && (t = g);
      }
      N(this, nt).forEach((g) => {
        var y;
        const v = (y = g.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), _ && d ? (delete h.height, p.push(
        /* @__PURE__ */ f("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ f(F, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        dt(this, Ei, pl).call(this, t),
        dt(this, Mi, ml).call(this, t),
        dt(this, Ii, gl).call(this, t)
      ), t.scrollable && p.push(dt(this, Pi, _l).call(this, t))), N(this, nt).forEach((g) => {
        var y;
        const v = (y = g.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && m.push(v.className), v.children && p.push(v.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: N(this, Xe),
        className: x(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
ke = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
pn = /* @__PURE__ */ new WeakMap();
cs = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
pl = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      fl,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, Hn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    sa,
    {
      className: "dtable-header",
      style: { height: n },
      renders: o,
      generateArgs: [s],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
Mi = /* @__PURE__ */ new WeakSet();
ml = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    fl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, Hn),
      children: l
    },
    "body"
  );
};
Ii = /* @__PURE__ */ new WeakSet();
gl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    sa,
    {
      className: "dtable-footer",
      style: { height: s.footerHeight, top: s.rowsHeight + s.headerHeight },
      renders: e,
      generateArgs: [s],
      generatorThis: this,
      generators: s.footerGenerators,
      children: s.footerChildren
    },
    "footer"
  );
};
Pi = /* @__PURE__ */ new WeakSet();
_l = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      po,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, mn),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      po,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, mn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Gs = /* @__PURE__ */ new WeakSet();
Ai = function() {
  var s;
  G(this, de, !1), (s = this.options.afterRender) == null || s.call(this), N(this, nt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Hn = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakSet();
Xs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, cs);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, cs, i);
};
Tr = /* @__PURE__ */ new WeakSet();
yl = function() {
  if (N(this, Lt))
    return !1;
  const t = { ...ul(), ...N(this, re).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return G(this, Lt, t), G(this, nt, N(this, re).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), G(this, pn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Er = /* @__PURE__ */ new WeakSet();
vl = function() {
  var D, A;
  const { plugins: s } = this;
  let t = N(this, Lt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((T) => {
    var U;
    const P = (U = T.beforeLayout) == null ? void 0 : U.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, T.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      G(this, de, !0);
      return;
    }
  }
  const r = fd(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (T, P, U) => {
    var V, at;
    const E = { data: U ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (U || (E.lazy = !0), c.push(E), ((V = t.onAddRow) == null ? void 0 : V.call(this, E, P)) !== !1) {
      for (const vt of s)
        if (((at = vt.onAddRow) == null ? void 0 : at.call(this, E, P)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      d(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, P) => {
      typeof T == "object" ? d(`${T[a] ?? ""}`, P, T) : d(`${T ?? ""}`, P);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, h);
    T && (h = T);
  }
  for (const T of s) {
    const P = (D = T.onAddRows) == null ? void 0 : D.call(this, h);
    P && (h = P);
  }
  h.forEach((T, P) => {
    m[T.id] = T, T.index = P, T.top = T.index * l;
  });
  const { header: p, footer: _ } = t, g = p ? t.headerHeight || l : 0, v = _ ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const C = h.length * l, k = g + v + C;
  if (typeof y == "function" && (y = y.call(this, k)), y === "auto")
    b = k;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, k));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      b = T.clientHeight;
    else {
      b = 0, G(this, de, !0);
      return;
    }
  } else
    b = y;
  const w = b - g - v, S = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: w,
    rowsHeightTotal: C,
    header: p,
    footer: _,
    footerGenerators: e,
    headerHeight: g,
    footerHeight: v,
    cols: r
  }, I = (A = t.onLayout) == null ? void 0 : A.call(this, S);
  I && Object.assign(S, I), s.forEach((T) => {
    if (T.onLayout) {
      const P = T.onLayout.call(this, S);
      P && Object.assign(S, P);
    }
  }), G(this, Pt, S);
};
Hi = /* @__PURE__ */ new WeakSet();
bl = function() {
  (dt(this, Tr, yl).call(this) || !N(this, Pt)) && dt(this, Er, vl).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((_) => {
    _.left = n, n += _.realWidth, _.visible = _.left + _.realWidth >= e && _.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let _ = c; _ < h; _++) {
    const g = o[_];
    g.lazy && p && (g.data = p([g.id])[0], g.lazy = !1), m.push(g);
  }
  return Object.assign(s, {
    visibleRows: m,
    scrollTop: l,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), s;
};
Mr.addPlugin = cl;
Mr.removePlugin = hl;
class wl extends O {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: x("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
wl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Cl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: Q(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Ir(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : Q(s, e);
}
function kl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), et(e, s, n ?? e))) : n ?? e;
}
function xl(s, t) {
  const { link: e } = t.col.setting, n = Cl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function $l(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Ir(e, t, s[0])), s;
}
function Sl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function Nl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = kl(n, t, s[0], i), s;
}
function Oi(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Ir(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const md = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Oi(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          wl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          lr,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: d,
            text: !0
          }
        ), s;
      }
    },
    datetime: {
      formatDate: "[yyyy-]MM-dd hh:mm"
    },
    date: {
      formatDate: "yyyy-MM-dd"
    },
    time: {
      formatDate: "hh:mm"
    }
  },
  onRenderCell(s, t) {
    const { formatDate: e, html: n, hint: i } = t.col.setting;
    if (e && (s = Nl(s, t, e)), s = Sl(s, t), s = $l(s, t), n ? s = Oi(s, t) : s = xl(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = Q(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, gd = Ft(md, { buildIn: !0 }), _d = {
  html: { component: fe }
}, yd = {
  name: "custom",
  onRenderCell(s, t) {
    const { col: e } = t;
    let { custom: n } = e.setting;
    if (typeof n == "function" && (n = n.call(this, t)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: r } = this.options;
    return i.forEach((o) => {
      let a;
      typeof o == "string" ? a = o.startsWith("<") ? {
        component: fe,
        props: { html: Q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(_d[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && u.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, vd = Ft(yd);
function bd(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !Tl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !n[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    c && Object.keys(c).forEach((d) => {
      c[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function wd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Tl() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Cd() {
  return Object.keys(this.state.checkedRows);
}
function kd(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function go(s, t, e = !1) {
  return /* @__PURE__ */ f(En, { className: "dtable-checkbox", checked: s, disabled: e });
}
const _o = 'input[type="checkbox"],.dtable-checkbox', xd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: go
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? s.checkable = t : s.checkable === "auto" && (s.checkable = !!s.cols.some((e) => e.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: bd,
    isRowChecked: wd,
    isAllRowChecked: Tl,
    getChecks: Cd,
    toggleCheckable: kd
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const s = this.isAllRowChecked();
      return [
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: go(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
      s.push(
        d,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var o;
    const { id: n } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, n);
      s.push(l, { outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(_o);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(_o).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, $d = Ft(xd);
var El = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(El || {});
function gn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = gn.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? gn.call(this, t.parent).level + 1 : 0, t;
}
function Sd(s) {
  return s !== void 0 ? gn.call(this, s) : this.data.nestedMap;
}
function Nd(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Ml.call(this)), t) {
      const i = n.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = n.get(r);
      t && (o != null && o.children) ? e[r] = !0 : delete e[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...e } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Ml() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Il(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Il(s, t, o.children, n + 1)));
  }
  return t;
}
function Pl(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Pl(s, r, e, n);
  }), i;
}
function Al(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Al(s, r.parent, e, n, i);
}
const Td = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, t) {
      const { nestedMap: e } = this.data, n = e.get(s.id), i = e.get(t.id);
      return (n == null ? void 0 : n.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, t, e) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const n = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = Pl(this, i, r, n);
        o != null && o.parent && Al(this, o.parent, r, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Sd,
    toggleRow: Nd,
    isAllCollapsed: Ml,
    getNestedRowInfo: gn
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, r;
    const { nestedMap: t } = this.data, e = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = t.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = e === "0" ? void 0 : e, (r = s.data) != null && r[this.options.asParentKey ?? "asParent"] && (n.children = []), t.set(s.id, n), e) {
      let o = t.get(e);
      o || (o = {
        state: "",
        level: 0
      }, t.set(e, o)), o.children || (o.children = []), o.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Il(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, Ed = Ft(Td);
function Qn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: x(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(ws, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return s;
}
const Md = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Qn
    },
    avatarBtn: {
      onRenderCell: Qn
    },
    avatarName: {
      onRenderCell: Qn
    }
  }
}, Id = Ft(Md, { buildIn: !0 }), Pd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: Q(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, Ad = Ft(Pd, { buildIn: !0 }), ti = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Dd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    ti(t.left.list), ti(t.center.list), ti(t.right.list);
  }
}, Ld = Ft(Dd), Rd = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: n } = this.data, { rows: i, cols: r, rowHeight: o } = s;
    e.clear(), n.clear();
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((m, p) => {
        const { index: _ } = m, g = `C${_}R${h}`;
        if (n.has(g))
          return;
        const v = t.call(this, { row: c, col: m });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - p), b = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && b <= 1)
          return;
        let C = 0;
        for (let k = 0; k < y; k++) {
          C += l[p + k].realWidth;
          for (let w = 0; w < b; w++) {
            const S = `C${_ + k}R${h + w}`;
            S !== g && n.add(S);
          }
        }
        e.set(g, {
          colSpan: y,
          rowSpan: b,
          width: C,
          height: o * b
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((d) => {
        a(r[d].list, l, c);
      });
    });
  },
  onRenderCell(s, { row: t, col: e }) {
    const n = `C${e.index}R${t.index}`;
    if (this.data.overlayedCellSet.has(n))
      s.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(n);
      i && s.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return s;
  }
}, Wd = Ft(Rd), Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: El,
  avatar: Id,
  cellspan: Wd,
  checkable: $d,
  custom: vd,
  group: Ld,
  nested: Ed,
  renderDatetime: kl,
  renderDatetimeCell: Nl,
  renderFormat: Ir,
  renderFormatCell: $l,
  renderHtmlCell: Oi,
  renderLink: Cl,
  renderLinkCell: xl,
  renderMapCell: Sl,
  rich: gd,
  sortType: Ad
}, Symbol.toStringTag, { value: "Module" }));
class Es extends R {
}
Es.NAME = "DTable";
Es.Component = Mr;
Es.definePlugin = Ft;
Es.removePlugin = hl;
Es.plugins = Hd;
class Od extends K {
  _getClassName(t) {
    return ["kanban-header-col", t.className];
  }
  _getProps(t) {
    const {
      width: e,
      minWidth: n,
      maxWidth: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-col-color": r,
        "--kanban-col-width": e,
        minWidth: n,
        maxWidth: i
      }
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: n,
      title: i,
      titleClass: r,
      subtitle: o,
      subtitleClass: a,
      icon: l,
      trailingIcon: c,
      actions: d
    } = t;
    return [
      /* @__PURE__ */ f("div", { className: "kanban-header-title", children: [
        l ? /* @__PURE__ */ f(q, { className: "as-leading-icon", icon: l }, "icon") : null,
        e ? /* @__PURE__ */ f("span", { className: x("as-prefix", n), children: /* @__PURE__ */ f(F, { content: e }) }, "prefix") : null,
        i ? /* @__PURE__ */ f("span", { className: x("as-title", r), children: /* @__PURE__ */ f(F, { content: i }) }, "title") : null,
        o ? /* @__PURE__ */ f("span", { className: x("as-subtitle", a), children: /* @__PURE__ */ f(F, { content: o }) }, "subtitle") : null,
        c ? /* @__PURE__ */ f(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
      ] }, "title"),
      ft.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
    ];
  }
}
function Bd(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-header", children: [
    /* @__PURE__ */ f("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ f("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ f(Od, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
const Fd = {
  className: "kanban-item"
};
class zd extends O {
  constructor() {
    super(...arguments), this._renderItem = (t) => {
      const { itemRender: e, lane: n, name: i } = this.props;
      return e.call(this, { item: t, lane: n, col: i });
    };
  }
  render(t) {
    const { items: e } = t, {
      width: n,
      minWidth: i,
      maxWidth: r,
      color: o,
      content: a,
      contentClass: l,
      itemRender: c
    } = t;
    return /* @__PURE__ */ f("div", { className: "kanban-lane-col", style: {
      "--kanban-col-color": o,
      "--kanban-col-width": n,
      minWidth: i,
      maxWidth: r
    }, children: [
      a ? /* @__PURE__ */ f("div", { className: x("kanban-col-content", l), children: /* @__PURE__ */ f(F, { content: a, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ f(He, { className: "kanban-items scrollbar-thin scrollbar-hover", itemProps: Fd, items: e, itemRender: c ? this._renderItem : void 0 }, "list")
    ] });
  }
}
class Vd extends K {
  _getClassName(t) {
    return ["kanban-lane", t.className, t.index ? "" : "is-first"];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: n,
      maxHeight: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: e,
        minHeight: n,
        maxHeight: i
      }
    });
  }
  _getChildren(t) {
    const {
      name: e,
      title: n,
      titleClass: i,
      actions: r,
      cols: o,
      items: a = {},
      itemRender: l
    } = t;
    return [
      /* @__PURE__ */ f("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ f("div", { className: x("kanban-lane-title", i), children: /* @__PURE__ */ f(F, { content: n }) }, "title"),
        ft.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ f("div", { className: "kanban-lane-cols", children: o.map((c) => /* @__PURE__ */ f(zd, { itemRender: l, lane: e, items: a[c.name], ...c }, c.name)) }, "cols")
    ];
  }
}
function Ud(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ f(Vd, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
function ei(s, t) {
  return s.order - t.order;
}
let On = class extends K {
  constructor() {
    super(...arguments), this._ref = j();
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
    const { draggable: t } = this.props;
    t && this._ref.current && (this._draggable = new In(this._ref.current, u.extend({
      selector: ".kanban-item"
    }, typeof t == "object" ? t : null)));
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, data: { items: {}, cols: [], lanes: [] } }, async () => {
      const i = { loading: !1 };
      try {
        const r = await $n(t, [this], { throws: !0 });
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Vr(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this._data.cols.find((e) => e.name === t);
  }
  getLane(t) {
    return this._data.lanes.find((e) => e.name === t);
  }
  getData() {
    return this._data;
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData(t) {
    const { data: e, getCol: n, colProps: i, getLane: r, laneProps: o, getItem: a, itemProps: l } = t, { data: c } = this.state, d = (c || Vr(e) ? c : e) || {};
    let h = !1;
    const { items: m = {} } = d;
    let { cols: p = [], lanes: _ = [] } = d;
    return p = p.map((g, v) => {
      if (i && (g = H({}, i, g)), n) {
        const y = n.call(this, g);
        y !== !1 && (g = y || g);
      }
      return typeof g.width == "function" && (g = H({}, g, {
        width: g.width.call(this, g)
      })), typeof g.order == "number" ? h = !0 : g.order = v, g;
    }), h && p.sort(ei), h = !1, _ = _.map((g, v) => {
      if (o && (g = H({}, o, g)), r) {
        const b = r.call(this, g);
        b !== !1 && (g = b || g);
      }
      typeof g.height == "function" && (g = H({}, g, {
        height: g.height.call(this, g)
      })), typeof g.order == "number" ? h = !0 : g.order = v;
      const y = m[g.name];
      return y && p.forEach((b) => {
        let C = y[b.name];
        C && (h = !1, C = C.reduce((k, w) => {
          l && (w = H({}, l, w));
          const S = (a == null ? void 0 : a.call(this, { col: b.name, lane: g.name, item: w })) ?? w;
          return S !== !1 && !S.deleted && (k.push(S), typeof S.order == "number" ? h = !0 : S.order = k.length - 1), k;
        }, []), h && C.sort(ei));
      }), g;
    }), h && _.sort(ei), this._data = { cols: p, lanes: _, items: m }, console.log("> data", this._data), this._data;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : ""];
  }
  _getProps(t) {
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": t.laneNameWidth
      }
    });
  }
  _getChildren(t) {
    const e = this._getData(t);
    return [
      /* @__PURE__ */ f(Bd, { cols: e.cols }, "header"),
      /* @__PURE__ */ f(Ud, { itemRender: t.itemRender, ...e }, "body"),
      t.children
    ];
  }
};
On.defaultProps = {
  draggable: !0,
  sticky: !0
};
class jd extends O {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      u(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((n) => ({ collapsed: !n.collapsed }));
    }, this.state = {
      collapsed: t.collapsed
    };
  }
  render(t, e) {
    const { heading: n, toggleFromHeading: i, ...r } = t, { collapsed: o } = e;
    return /* @__PURE__ */ f("div", { className: x("kanban-group", o ? "is-collapsed" : "is-expanded", n ? "has-heading" : ""), children: [
      n && /* @__PURE__ */ f(on, { ...H({ className: "kanban-heading", onClick: i ? this._handleClickHeading : void 0 }, n) }, "heading"),
      o ? null : /* @__PURE__ */ f(On, { ...r }, "kanban")
    ] });
  }
}
let Dl = class extends K {
  constructor() {
    super(...arguments), this.state = {}, this._ref = j();
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new cr(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !u(n.target).closest("a,.btn,.state,.kanban-item").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
        n.observe(o);
      }), this._rob = n;
    }
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  _tryUpdateLayout() {
    this._layoutTimer && cancelAnimationFrame(this._layoutTimer), this._layoutTimer = requestAnimationFrame(() => {
      this.updateLayout(), this._layoutTimer = 0;
    });
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = u(t), n = e.width(), i = e.height();
    this.setState({ width: n, height: i });
  }
  _getClassName(t) {
    return ["kanban-list", t.className, t.sticky ? "has-sticky" : "", t.moveable ? "is-moveable" : "", t.scrollbarHover ? "scrollbar-hover" : ""];
  }
  _getProps(t) {
    const { width: e, height: n } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof n == "function" ? n.call(this) : n, { width: o, height: a } = this.state ?? {};
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || n}px`
      }
    });
  }
  _getChildren(t) {
    const { items: e = [] } = t;
    return [
      ...e.map((n, i) => {
        const r = n.heading !== void 0 || n.type === "group" ? jd : On;
        return /* @__PURE__ */ f(r, { sticky: t.sticky, ...n }, n.key ?? i);
      }),
      t.children
    ];
  }
};
Dl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Pr extends R {
}
Pr.NAME = "Kanban";
Pr.replace = !0;
Pr.Component = On;
class Ar extends R {
}
Ar.NAME = "KanbanList";
Ar.replace = !0;
Ar.Component = Dl;
var Ll = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, yo = (s, t, e) => (Ll(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Kd = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, vo = (s, t, e, n) => (Ll(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), xe;
const qd = "nav", Zs = '[data-toggle="tab"]', Yd = "active";
class Rl extends ht {
  constructor() {
    super(...arguments), Kd(this, xe, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(Zs);
    let i = t ? u(t).closest(Zs) : n.filter(`.${Yd}`);
    if (!i.length && (i = e.find(Zs).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), yo(this, xe) && clearTimeout(yo(this, xe)), vo(this, xe, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), vo(this, xe, 0);
    }, 10)));
  }
}
xe = /* @__PURE__ */ new WeakMap();
Rl.NAME = "Tabs";
u(document).on("click.tabs.zui", Zs, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${qd}`);
  e.length && Rl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  Bo as Ajax,
  _a as Avatar,
  ya as BtnGroup,
  rl as Card,
  ol as CardList,
  Pa as ColorPicker,
  sr as CommonList,
  ht as Component,
  R as ComponentFromReact,
  Sr as ContextMenu,
  F as CustomContent,
  sa as CustomRender,
  Es as DTable,
  ll as Dashboard,
  Fa as DatePicker,
  Va as DatetimePicker,
  In as Draggable,
  xt as Dropdown,
  K as HElement,
  fe as HtmlContent,
  q as Icon,
  Pr as Kanban,
  Ar as KanbanList,
  oa as List,
  la as Menu,
  au as Messager,
  Yh as Modal,
  ge as ModalBase,
  Ni as ModalTrigger,
  cr as Moveable,
  qa as Nav,
  aa as NestedList,
  Ya as Pager,
  Ga as Pick,
  Ja as Picker,
  ut as Popover,
  wr as PopoverPanel,
  Qa as Popovers,
  na as Portal,
  pa as ProgressCircle,
  O as ReactComponent,
  tl as SearchBox,
  ca as SearchMenu,
  nl as SearchTree,
  cu as Sortable,
  as as TIME_DAY,
  Rl as Tabs,
  Ba as TimePicker,
  el as Toolbar,
  Dt as Tooltip,
  sl as Tree,
  $r as Upload,
  il as UploadImgs,
  Rh as addDate,
  u as cash,
  x as classes,
  je as componentsMap,
  Tc as convertBytes,
  Bc as create,
  Y as createDate,
  Kc as createPortal,
  j as createRef,
  Sc as deepGet,
  $c as deepGetPath,
  Xd as defineFn,
  en as delay,
  Fc as disableScroll,
  Jd as dom,
  $n as fetchData,
  Nc as formatBytes,
  et as formatDate,
  gu as formatDateSpan,
  Q as formatString,
  Fo as getClassList,
  rn as getComponent,
  zc as getReactComponent,
  Ur as getZData,
  $t as h,
  J as i18n,
  Vr as isFetchSetting,
  $s as isSameDay,
  Aa as isSameMonth,
  uu as isSameWeek,
  fi as isSameYear,
  fu as isToday,
  mu as isTomorrow,
  it as isValidElement,
  pu as isYesterday,
  H as mergeProps,
  Zd as parseSize,
  ea as reactComponents,
  bs as registerReactComponent,
  Qo as removeUndefinedProps,
  is as render,
  ri as renderCustomContent,
  Uc as renderCustomResult,
  jr as setZData,
  Dc as shareData,
  Ke as store,
  zo as storeData,
  Vo as takeData
};
//# sourceMappingURL=zui.js.map
