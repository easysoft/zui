var Wn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var L = (s, t, e) => (Wn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), U = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, j = (s, t, e, n) => (Wn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Hn = (s, t, e) => (Wn(s, t, "access private method"), e);
const Wt = document, Ks = window, Eo = Wt.documentElement, fe = Wt.createElement.bind(Wt), Mo = fe("div"), On = fe("table"), Yl = fe("tbody"), Rr = fe("tr"), { isArray: gn, prototype: Io } = Array, { concat: Xl, filter: Bi, indexOf: Ao, map: Po, push: Jl, slice: Lo, some: Fi, splice: Zl } = Io, Ql = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, tc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ec = /<.+>/, sc = /^\w+$/;
function zi(s, t) {
  const e = nc(t);
  return !s || !e && !ce(t) && !X(t) ? [] : !e && tc.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && sc.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class _n {
  constructor(t, e) {
    if (!t)
      return;
    if (ei(t))
      return t;
    let n = t;
    if (nt(t)) {
      const i = e || Wt;
      if (n = Ql.test(t) && ce(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ec.test(t) ? Wo(t) : ei(i) ? i.find(t) : nt(i) ? f(i).find(t) : zi(t, i), !n)
        return;
    } else if (pe(t))
      return this.ready(t);
    (n.nodeType || n === Ks) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new _n(t, e);
  }
}
const $ = _n.prototype, f = $.init;
f.fn = f.prototype = $;
$.length = 0;
$.splice = Zl;
typeof Symbol == "function" && ($[Symbol.iterator] = Io[Symbol.iterator]);
function ei(s) {
  return s instanceof _n;
}
function Se(s) {
  return !!s && s === s.window;
}
function ce(s) {
  return !!s && s.nodeType === 9;
}
function nc(s) {
  return !!s && s.nodeType === 11;
}
function X(s) {
  return !!s && s.nodeType === 1;
}
function ic(s) {
  return !!s && s.nodeType === 3;
}
function rc(s) {
  return typeof s == "boolean";
}
function pe(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function ft(s) {
  return s === void 0;
}
function Je(s) {
  return s === null;
}
function Do(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Vi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
f.isWindow = Se;
f.isFunction = pe;
f.isArray = gn;
f.isNumeric = Do;
f.isPlainObject = Vi;
function J(s, t, e) {
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
f.each = J;
$.each = function(s) {
  return J(this, s);
};
$.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function qs(...s) {
  const t = rc(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return qs(t, f, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (gn(r[o]) || Vi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), qs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = qs;
$.extend = function(s) {
  return qs($, s);
};
const oc = /\S+/g;
function yn(s) {
  return nt(s) ? s.match(oc) || [] : [];
}
$.toggleClass = function(s, t) {
  const e = yn(s), n = !ft(t);
  return this.each((i, r) => {
    X(r) && J(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(s) {
  return this.toggleClass(s, !0);
};
$.removeAttr = function(s) {
  const t = yn(s);
  return this.each((e, n) => {
    X(n) && J(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function ac(s, t) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Je(e) ? void 0 : e;
      }
      return ft(t) ? this : Je(t) ? this.removeAttr(s) : this.each((e, n) => {
        X(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
$.attr = ac;
$.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
$.hasClass = function(s) {
  return !!s && Fi.call(this, (t) => X(t) && t.classList.contains(s));
};
$.get = function(s) {
  return ft(s) ? Lo.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
$.eq = function(s) {
  return f(this.get(s));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function lc(s) {
  return ft(s) ? this.get().map((t) => X(t) || ic(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = s);
  });
}
$.text = lc;
function Ht(s, t, e) {
  if (!X(s))
    return;
  const n = Ks.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function Ct(s, t) {
  return parseInt(Ht(s, t), 10) || 0;
}
function Wr(s, t) {
  return Ct(s, `border${t ? "Left" : "Top"}Width`) + Ct(s, `padding${t ? "Left" : "Top"}`) + Ct(s, `padding${t ? "Right" : "Bottom"}`) + Ct(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Bn = {};
function cc(s) {
  if (Bn[s])
    return Bn[s];
  const t = fe(s);
  Wt.body.insertBefore(t, null);
  const e = Ht(t, "display");
  return Wt.body.removeChild(t), Bn[s] = e !== "none" ? e : "block";
}
function Hr(s) {
  return Ht(s, "display") === "none";
}
function Ro(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function vn(s) {
  return nt(s) ? (t, e) => Ro(e, s) : pe(s) ? s : ei(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
$.filter = function(s) {
  const t = vn(s);
  return f(Bi.call(this, (e, n) => t.call(e, n, e)));
};
function Zt(s, t) {
  return t ? s.filter(t) : s;
}
$.detach = function(s) {
  return Zt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const hc = /^\s*<(\w+)[^>]*>/, dc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Or = {
  "*": Mo,
  tr: Yl,
  td: Rr,
  th: Rr,
  thead: On,
  tbody: On,
  tfoot: On
};
function Wo(s) {
  if (!nt(s))
    return [];
  if (dc.test(s))
    return [fe(RegExp.$1)];
  const t = hc.test(s) && RegExp.$1, e = Or[t] || Or["*"];
  return e.innerHTML = s, f(e.childNodes).detach().get();
}
f.parseHTML = Wo;
$.has = function(s) {
  const t = nt(s) ? (e, n) => zi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
$.not = function(s) {
  const t = vn(s);
  return this.filter((e, n) => (!nt(s) || X(n)) && !t.call(n, e, n));
};
function Ft(s, t, e, n) {
  const i = [], r = pe(t), o = n && vn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Jl.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Ho(s) {
  return s.multiple && s.options ? Ft(Bi.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function uc(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Ko.test(e.type)) {
      const i = gn(s) ? Po.call(s, String) : Je(s) ? [] : [String(s)];
      n ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ft(s) || Je(s) ? "" : s;
  }) : this[0] && Ho(this[0]);
}
$.val = uc;
$.is = function(s) {
  const t = vn(s);
  return Fi.call(this, (e, n) => t.call(e, n, e));
};
f.guid = 1;
function St(s) {
  return s.length > 1 ? Bi.call(s, (t, e, n) => Ao.call(n, t) === e) : s;
}
f.unique = St;
$.add = function(s, t) {
  return f(St(this.get().concat(f(s, t).get())));
};
$.children = function(s) {
  return Zt(f(St(Ft(this, (t) => t.children))), s);
};
$.parent = function(s) {
  return Zt(f(St(Ft(this, "parentNode"))), s);
};
$.index = function(s) {
  const t = s ? f(s)[0] : this[0], e = s ? this : f(t).parent().children();
  return Ao.call(e, t);
};
$.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
$.siblings = function(s) {
  return Zt(f(St(Ft(this, (t) => f(t).parent().children().not(t)))), s);
};
$.find = function(s) {
  return f(St(Ft(this, (t) => zi(s, t))));
};
const fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, pc = /^$|^module$|\/(java|ecma)script/i, mc = ["type", "src", "nonce", "noModule"];
function gc(s, t) {
  const e = f(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (pc.test(i.type) && Eo.contains(i)) {
      const r = fe("script");
      r.text = i.textContent.replace(fc, ""), J(mc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function _c(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && gc(t, s.ownerDocument);
}
function Qt(s, t, e, n, i, r, o, a) {
  return J(s, (l, c) => {
    J(f(c), (d, h) => {
      J(f(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, v = e ? d : m;
        _c(g, v ? _.cloneNode(!0) : _, n, i, !v);
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
function yc(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    X(n) && (t ? f(n).empty().append(s) : n.innerHTML = s);
  });
}
$.html = yc;
$.appendTo = function(s) {
  return Qt(arguments, this, !0, !1, !0);
};
$.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = f(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
$.before = function() {
  return Qt(arguments, this, !1, !0);
};
$.wrapAll = function(s) {
  let t = f(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
$.wrap = function(s) {
  return this.each((t, e) => {
    const n = f(s)[0];
    f(e).wrapAll(t ? n.cloneNode(!0) : n);
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
  return f(St(Ft(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
$.next = function(s, t, e) {
  return Zt(f(St(Ft(this, "nextElementSibling", t, e))), s);
};
$.nextAll = function(s) {
  return this.next(s, !0);
};
$.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
$.parents = function(s, t) {
  return Zt(f(St(Ft(this, "parentElement", !0, t))), s);
};
$.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
$.prev = function(s, t, e) {
  return Zt(f(St(Ft(this, "previousElementSibling", t, e))), s);
};
$.prevAll = function(s) {
  return this.prev(s, !0);
};
$.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
$.map = function(s) {
  return f(Xl.apply([], Po.call(this, (t, e) => s.call(t, e, t))));
};
$.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Ht(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Eo;
  });
};
$.slice = function(s, t) {
  return f(Lo.call(this, s, t));
};
const vc = /-([a-z])/g;
function Ui(s) {
  return s.replace(vc, (t, e) => e.toUpperCase());
}
$.ready = function(s) {
  const t = () => setTimeout(s, 0, f);
  return Wt.readyState !== "loading" ? t() : Wt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = f(t);
    e.replaceWith(e.children());
  }), this;
};
$.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Ks.pageYOffset,
    left: t.left + Ks.pageXOffset
  };
};
$.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Ht(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Ht(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && X(i)) {
      const r = f(i).offset();
      e.top -= r.top + Ct(i, "borderTopWidth"), e.left -= r.left + Ct(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Ct(s, "marginTop"),
    left: e.left - Ct(s, "marginLeft")
  };
};
const Oo = {
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
    if (nt(s))
      return s = Oo[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
$.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Oo[s] || s];
  });
};
const bc = /^--/;
function ji(s) {
  return bc.test(s);
}
const Fn = {}, { style: wc } = Mo, Cc = ["webkit", "moz", "ms"];
function kc(s, t = ji(s)) {
  if (t)
    return s;
  if (!Fn[s]) {
    const e = Ui(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Cc.join(`${n} `)}${n}`.split(" ");
    J(i, (r, o) => {
      if (o in wc)
        return Fn[s] = o, !1;
    });
  }
  return Fn[s];
}
const xc = {
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
function Bo(s, t, e = ji(s)) {
  return !e && !xc[s] && Do(t) ? `${t}px` : t;
}
function $c(s, t) {
  if (nt(s)) {
    const e = ji(s);
    return s = kc(s, e), arguments.length < 2 ? this[0] && Ht(this[0], s, e) : s ? (t = Bo(s, t, e), this.each((n, i) => {
      X(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
$.css = $c;
function Fo(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const Sc = /^\s+|\s+$/;
function Br(s, t) {
  const e = s.dataset[t] || s.dataset[Ui(t)];
  return Sc.test(e) ? e : Fo(JSON.parse, e);
}
function Nc(s, t, e) {
  e = Fo(JSON.stringify, e), s.dataset[Ui(t)] = e;
}
function Tc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Br(this[0], n);
    return e;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && Br(this[0], s) : ft(t) ? this : this.each((e, n) => {
      Nc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
$.data = Tc;
function zo(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (s, t) => {
  J(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    $[i] = function(r) {
      if (this[0])
        return Se(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : ce(this[0]) ? zo(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? Ct(this[0], `margin${e ? "Top" : "Left"}`) + Ct(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  $[e] = function(n) {
    if (!this[0])
      return ft(n) ? void 0 : this;
    if (!arguments.length)
      return Se(this[0]) ? this[0].document.documentElement[`client${t}`] : ce(this[0]) ? zo(this[0], t) : this[0].getBoundingClientRect()[e] - Wr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Ht(o, "boxSizing");
      o.style[e] = Bo(e, i + (a === "border-box" ? Wr(o, !s) : 0));
    });
  };
});
const Fr = "___cd";
$.toggle = function(s) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const n = Hr(e);
    (ft(s) ? n : s) ? (e.style.display = e[Fr] || "", Hr(e) && (e.style.display = cc(e.tagName))) : n || (e[Fr] = Ht(e, "display"), e.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const zr = "___ce", Ki = ".", qi = { focus: "focusin", blur: "focusout" }, Vo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ec = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Gi(s) {
  return Vo[s] || qi[s] || s;
}
function Yi(s) {
  const t = s.split(Ki);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(s, t) {
  if (nt(s)) {
    const [n, i] = Yi(s), r = Gi(n);
    if (!r)
      return this;
    const o = Ec.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Wt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Ki), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in qi;
  return this.each((n, i) => {
    e && pe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Uo(s) {
  return s[zr] = s[zr] || {};
}
function Mc(s, t, e, n, i) {
  const r = Uo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function jo(s, t) {
  return !t || !Fi.call(t, (e) => s.indexOf(e) < 0);
}
function Gs(s, t, e, n, i) {
  const r = Uo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !jo(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Gs(s, t, e, n, i);
}
$.off = function(s, t, e) {
  if (ft(s))
    this.each((n, i) => {
      !X(i) && !ce(i) && !Se(i) || Gs(i);
    });
  else if (nt(s))
    pe(t) && (e = t, t = ""), J(yn(s), (n, i) => {
      const [r, o] = Yi(i), a = Gi(r);
      this.each((l, c) => {
        !X(c) && !ce(c) && !Se(c) || Gs(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
$.remove = function(s) {
  return Zt(this, s).detach().off(), this;
};
$.replaceWith = function(s) {
  return this.before(s).remove();
};
$.replaceAll = function(s) {
  return f(s).replaceWith(this), this;
};
function Ic(s, t, e, n, i) {
  if (!nt(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return nt(t) || (ft(t) || Je(t) ? t = "" : ft(e) ? (e = t, t = "") : (n = e, e = t, t = "")), pe(n) || (n = e, e = void 0), n ? (J(yn(s), (r, o) => {
    const [a, l] = Yi(o), c = Gi(a), d = a in Vo, h = a in qi;
    c && this.each((m, p) => {
      if (!X(p) && !ce(p) && !Se(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !jo(l, _.namespace.split(Ki)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let b = _.target;
          for (; !Ro(b, t); )
            if (b === p || (b = b.parentNode, !b))
              return;
          v = b;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, _, _.___td);
        i && Gs(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || f.guid++, Mc(p, c, l, t, g);
    });
  }), this) : this;
}
$.on = Ic;
function Ac(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
$.one = Ac;
const Pc = /\r?\n/g;
function Lc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Pc, `\r
`))}`;
}
const Dc = /file|reset|submit|button|image/i, Ko = /radio|checkbox/i;
$.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    J(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Dc.test(i.type) || Ko.test(i.type) && !i.checked)
        return;
      const r = Ho(i);
      if (!ft(r)) {
        const o = gn(r) ? r : [r];
        J(o, (a, l) => {
          s += Lc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = f;
function Rc(s, t) {
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
function Wc(s, t, e) {
  try {
    const n = Rc(s, t), i = n[n.length - 1];
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
function Hc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Xi[e]).toFixed(t) + e);
}
const Oc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Xi[n];
};
let Ji = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), jt;
function Bc() {
  return Ji;
}
function Fc(s) {
  Ji = s.toLowerCase();
}
function qo(s, t) {
  jt || (jt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), f.extend(!0, jt, s);
}
function Z(s, t, e, n, i, r) {
  Array.isArray(s) ? jt && s.unshift(jt) : s = jt ? [jt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || Ji;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === jt ? `${r}.${t}` : t;
    if (a = Wc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function zc(s, t, e, n) {
  return Z(void 0, s, t, e, n);
}
Z.addLang = qo;
Z.getLang = zc;
Z.getCode = Bc;
Z.setCode = Fc;
qo({
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
function Vr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Go(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Go(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Vc(s, t) {
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
class Yo {
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
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (f.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((b, [w, x]) => (Go(b, w, x), b), new FormData()))), _.body = v), o && (_.mode = "cors");
    const y = _.headers || {};
    Vr(y, "X-Requested-With", "XMLHttpRequest"), r && Vr(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const d = e || Vc(o.headers.get("Content-Type"), n);
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
f.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : f.extend(t, s);
  const e = new Yo(t);
  return e.send(), e;
};
f.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), f.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
f.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, f.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
f.post = (s, t, e, n) => f.get(s, t, e, n, "POST");
f.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return f.get(n, t, (r, o, a) => {
    i && (r = f(r).find(i).html()), f(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function bn(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    f.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    f.extend(n, o);
  }
  e && f.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Yo(n), [r] = await i.send();
  return r;
}
function Ur(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
f.fetch = bn;
function Ot() {
  return f.guid++;
}
function Xo(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Xo(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...s) => Xo(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
f.classes = k;
f.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = f(n);
    s === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(s, ...t));
  });
};
const Be = /* @__PURE__ */ new WeakMap();
function Jo(s, t, e) {
  const n = Be.has(s), i = n ? Be.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, f(s).dataset(), i), Be.set(s, i)) : Be.delete(s);
}
function Zo(s, t, e) {
  let n = Be.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, f(s).dataset(), n)), t === void 0 ? n : n[t];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Zo(this[0], t) : this.each((n, i) => Jo(i, t, e));
};
f.fn.removeData = function(s = null) {
  return this.each((t, e) => Jo(e, s));
};
function si(s, t = "z-") {
  const e = f(s)[0];
  if (e)
    return Array.from(e.attributes).reduce((n, i) => {
      let { name: r, value: o } = i;
      if (r.startsWith(t)) {
        r = r.slice(t.length).replace(/-([a-z])/g, (a) => a[1].toUpperCase());
        try {
          o.startsWith("RAWJS<") && o.endsWith(">RAWJS") ? o = new Function(`return ${o.substring(6, o.length - 6)}`)() : o = JSON.parse(o);
        } catch {
        }
        n[r] = o;
      }
      return n;
    }, {});
}
function jr(s, t, e = "z-") {
  const n = f(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function Uc(...s) {
  var e;
  const t = s.length;
  if (!t)
    return si(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = si(this)) == null ? void 0 : e[n] : (f.isPlainObject(n) && jr(this, n), this);
  }
  return jr(this, { [s[0]]: s[1] }), this;
}
f.fn.z = Uc;
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
f.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const Ys = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), jc = {};
f.share = jc;
var wn, B, Qo, rt, ne, Kr, ta, ni, we = {}, ea = [], Kc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Cn = Array.isArray;
function Yt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function sa(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function xt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? wn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return Ps(s, o, n, i, null);
}
function Ps(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Qo };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function F() {
  return { current: null };
}
function Ee(s) {
  return s.children;
}
function W(s, t) {
  this.props = s, this.context = t;
}
function Ze(s, t) {
  if (t == null)
    return s.__ ? Ze(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? Ze(s) : null;
}
function na(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return na(s);
  }
}
function qr(s) {
  (!s.__d && (s.__d = !0) && ne.push(s) && !Xs.__r++ || Kr !== B.debounceRendering) && ((Kr = B.debounceRendering) || ta)(Xs);
}
function Xs() {
  var s, t, e, n, i, r, o, a, l;
  for (ne.sort(ni); s = ne.shift(); )
    s.__d && (t = ne.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = Yt({}, o)).__v = o.__v + 1, Zi(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Ze(o), o.__h, i), aa(n, o, i), o.__e != a && na(o)), ne.length > t && ne.sort(ni));
  Xs.__r = 0;
}
function ia(s, t, e, n, i, r, o, a, l, c, d) {
  var h, m, p, g, _, v, y, b, w, x = 0, C = n && n.__k || ea, S = C.length, M = S, P = t.length;
  for (e.__k = [], h = 0; h < P; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Ps(null, g, null, null, g) : Cn(g) ? Ps(Ee, { children: g }, null, null, null) : g.__b > 0 ? Ps(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (b = qc(g, C, y = h + x, M)) === -1 ? p = we : (p = C[b] || we, C[b] = void 0, M--), Zi(s, g, p, i, r, o, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && Qi(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (v == null && (v = _), (w = p === we || p.__v === null) ? b == -1 && x-- : b !== y && (b === y + 1 ? x++ : b > y ? M > P - y ? x += b - y : x-- : x = b < y && b == y - 1 ? b - y : 0), y = h + x, typeof g.type != "function" || b === y && p.__k !== g.__k ? typeof g.type == "function" || b === y && !w ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = oa(s, _, l) : l = ra(g, l, s), typeof e.type == "function" && (e.__d = l))) : (p = C[h]) && p.key == null && p.__e && (p.__e == l && (l = Ze(p)), ii(p, p, !1), C[h] = null);
  for (e.__e = v, h = S; h--; )
    C[h] != null && (typeof e.type == "function" && C[h].__e != null && C[h].__e == e.__d && (e.__d = C[h].__e.nextSibling), ii(C[h], C[h]));
}
function ra(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? ra(n, t, e) : oa(e, n.__e, t));
  return t;
}
function Qe(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Cn(s) ? s.some(function(e) {
    Qe(e, t);
  }) : t.push(s)), t;
}
function oa(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function qc(s, t, e, n) {
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
function Gc(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Js(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Js(s, r, t[r], e[r], n);
}
function Gr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Kc.test(t) ? e : e + "px";
}
function Js(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Gr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Gr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? Xr : Yr, r) : s.removeEventListener(t, r ? Xr : Yr, r);
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
function Yr(s) {
  return this.l[s.type + !1](B.event ? B.event(s) : s);
}
function Xr(s) {
  return this.l[s.type + !0](B.event ? B.event(s) : s);
}
function Zi(s, t, e, n, i, r, o, a, l, c) {
  var d, h, m, p, g, _, v, y, b, w, x, C, S, M, P, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = B.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (y = t.props, b = (d = A.contextType) && n[d.__c], w = d ? b ? b.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(y, w) : (t.__c = h = new W(y, w), h.constructor = A, h.render = Xc), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = w, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Yt({}, h.__s)), Yt(h.__s, A.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), x = 0; x < h._sb.length; x++)
              h.__h.push(h._sb[x]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, g, _);
          });
        }
        if (h.context = w, h.props = y, h.__P = s, h.__e = !1, C = B.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), M = 0; M < h._sb.length; M++)
            h.__h.push(h._sb[M]);
          h._sb = [];
        } else
          do
            h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (n = Yt(Yt({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), ia(s, Cn(P = d != null && d.type === Ee && d.key == null ? d.props.children : d) ? P : [P], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (T) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), B.__e(T, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Yc(e.__e, t, e, n, i, r, o, l, c);
  (d = B.diffed) && d(t);
}
function aa(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Qi(e[n], e[++n], e[++n]);
  B.__c && B.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      B.__e(r, i.__v);
    }
  });
}
function Yc(s, t, e, n, i, r, o, a, l) {
  var c, d, h, m = e.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, r[_] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), r = null, a = !1;
  }
  if (g === null)
    m === p || a && s.data === p || (s.data = p);
  else {
    if (r = r && wn.call(s.childNodes), d = (m = e.props || we).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, _ = 0; _ < s.attributes.length; _++)
          m[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Gc(s, p, m, i, a), h)
      t.__k = [];
    else if (ia(s, Cn(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && Ze(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && sa(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== m.value) && Js(s, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && Js(s, "checked", _, m.checked, !1));
  }
  return s;
}
function Qi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    B.__e(n, e);
  }
}
function ii(s, t, e) {
  var n, i;
  if (B.unmount && B.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Qi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && ii(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || sa(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Xc(s, t, e) {
  return this.constructor(s, e);
}
function ts(s, t, e) {
  var n, i, r, o;
  B.__ && B.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Zi(t, s = (!n && e || t).__k = xt(Ee, null, [s]), i || we, we, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? wn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), aa(r, s, o);
}
wn = ea.slice, B = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Qo = 0, rt = function(s) {
  return s != null && s.constructor === void 0;
}, W.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof s == "function" && (s = s(Yt({}, e), this.props)), s && Yt(e, s), s != null && this.__v && (t && this._sb.push(t), qr(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), qr(this));
}, W.prototype.render = Ee, ne = [], ta = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ni = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Xs.__r = 0;
function R(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Qe(r), ...Qe(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = f.extend(r, i))), s[n] = i);
    });
  }), s;
}
function la(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const Fe = /* @__PURE__ */ new Map();
function Zs(s) {
  const { zui: t } = window;
  return (!Fe.size || s && !Fe.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Fe.set(e.toLowerCase(), n);
  }), s ? Fe.get(s.toLowerCase()) : void 0;
}
function Jc(s, t, e) {
  const n = Zs(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function gu(s) {
  if (s) {
    const t = Zs(s);
    t && t.defineFn();
  } else
    Zs(), Fe.forEach((t) => {
      t.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = f(this);
    let t = si(s, "data-");
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = f.share[n] : delete t.zui, requestAnimationFrame(() => Jc(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
f.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Zo(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = Zs(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
f(() => {
  f("body").zuiInit();
});
function Zc(s, t = !0) {
  const e = f(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
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
f.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Zc(e, s);
  });
};
f.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function tr(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Jr(s) {
  const [t, e = "px"] = tr(s);
  return `${t}${e}`;
}
function er(s, t) {
  const e = f(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: _ || y, height: g || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
f.fn.isVisible = function(s) {
  return er(this, s);
};
function sr(s, t, e = !1) {
  const n = f(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Ot()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    sr(n, r.innerHTML), r.remove();
  });
}
f.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
f.fn.runJS = function(s) {
  return this.each((t, e) => {
    sr(e, s);
  });
};
function ca(s, t) {
  const e = f(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (er(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
f.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    ca(e, s);
  });
};
f.setLibRoot = function(s) {
  f.libRoot = s;
};
f.registerLib = function(s, t) {
  f.libMap || (f.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), f.libMap[s] = t;
};
f.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let r = typeof s == "string" ? { src: s } : f.extend({}, s);
    typeof t == "function" ? r.success = t : t && f.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = f.libMap && f.libMap[o];
    a && (r = f.extend({}, a, r), o = a.src || r.src);
    const { root: l = f.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, g = f(p ? `#${p}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const C = g.data("loadCalls") || [];
        C.push(m), g.data("loadCalls", C);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: b, integrity: w } = r, x = document.createElement("script");
    x.async = _, x.defer = v, x.noModule = y, b && (x.type = b), w && (x.integrity = w), x.onload = () => {
      m(), (f(x).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), f(x).removeData("loadCalls");
    }, x.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, x.src = o, f("head").append(x);
  });
};
f.getScript = f.getLib;
const _u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: er,
  runJS: sr,
  scrollIntoView: ca
}, Symbol.toStringTag, { value: "Module" })), ha = {};
function me(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    me(e, s[e]);
  }) : t && (ha[s.toLowerCase()] = t);
}
function Qc(s) {
  return ha[s.toLowerCase()];
}
const Zr = "dangerouslySetInnerHTML";
class K extends W {
  constructor() {
    super(...arguments), this._gid = Ot();
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((m, p) => {
      if (p === Zr || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(p)) {
        const g = d[p];
        m[p] = p !== Zr && g && typeof g == "object" ? JSON.stringify(g) : g;
      }
      return m;
    }, {});
    return { ref: o, className: k(this._getClassName(t)) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...h, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Qc(e) : e) || e;
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
    return r && ([e, i, n] = r), xt(e, i, n);
  }
}
K.HElement = !0;
var th = 0;
function u(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --th, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return B.vnode && B.vnode(c), c;
}
class he extends W {
  constructor() {
    super(...arguments), this._ref = F();
  }
  _runJS() {
    this.props.executeScript && f(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ u(K, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function eh(s) {
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
  } = s, h = [e], m = { ...n }, p = [], g = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(o, _, p, ...r));
      else {
        const y = _.call(o, p, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !rt(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ u("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(h),
    style: m,
    ...d
  }, p];
}
function da({
  tag: s = "div",
  ...t
}) {
  const [e, n] = eh(t);
  return xt(s, e, ...n);
}
function ri(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => ri({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ u(he, { ...R(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = R({ children: o.map((a) => ri({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ u(K, { ...R(i, r) });
  }
  return rt(r) || r === null, r;
}
function O(s) {
  const t = ri(s);
  return t == null || typeof t == "boolean" ? null : rt(t) ? t : /* @__PURE__ */ u(Ee, { children: t });
}
const Qr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (rt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Qr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Qr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ u("i", { className: k(i), ...n });
}
function sh(s) {
  return this.getChildContext = () => s.context, s.children;
}
function ua(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    ts(null, t._temp), t._temp = null, t._container = null;
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
  }), ts(
    xt(sh, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function nh(s, t) {
  const e = xt(ua, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
me({
  HElement: K,
  element: K,
  HtmlContent: he,
  html: he,
  CustomContent: O,
  custom: O,
  Icon: q,
  Portal: ua
});
function fa(s) {
  return s.parentNode === document ? !1 : s.parentNode ? fa(s.parentNode) : !0;
}
class at {
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
    const l = f(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = Ot();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, fa(c) && this.destroy();
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
    return f(this.element);
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
    return t && f.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = f.Event(t);
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
    return Z(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = f(t);
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
    return f(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = f(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = f(o).data(this.KEY);
      a && i.push(a);
    }), i.sort((r, o) => r.gid - o.gid);
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
      return n && (i = i.filter(n)), i.pop();
    }
    return this.get(f(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    f.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    f.fn.extend({
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
at.DEFAULT = {};
at.MULTI_INSTANCE = !1;
class H extends at {
  constructor() {
    super(...arguments), this.ref = F();
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
    const { element: e } = this, { Component: n, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this.ref,
      ...o
    };
    if (r && n.HElement) {
      const l = Array.from(e.attributes).reduce((c, d) => {
        const { name: h, value: m } = d;
        return c[h === "class" ? "className" : h] = m, c;
      }, {});
      return ts(
        xt(n, R({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    ts(
      xt(n, a),
      e
    );
  }
}
H.replace = !1;
class et extends K {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ u(q, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ u(q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ u("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ u(q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ u("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
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
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = k([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: et
}, Symbol.toStringTag, { value: "Module" }));
me(ih);
let pt = class extends K {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
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
  _getItemFromEvent(t) {
    var a;
    const e = t.target.closest("[z-item]");
    if (!e || !((a = e.parentElement) != null && a.hasAttribute(`z-gid-${this._gid}`)))
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
        return /* @__PURE__ */ u(O, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || K;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = R({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ u(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
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
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = R(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n)
      }
    ), o) {
      const p = o.call(this, e, n);
      if (p !== void 0)
        return p;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return t.onClickItem ? { onClick: this._handleClick, ...e } : e;
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
pt.NAME = "";
pt.ITEM_NAME = "item";
pt.TAG = "ul";
pt.ItemComponents = {
  default: K,
  divider: [K, { className: "divider" }],
  space: [K, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
pt.defaultItemProps = {
  component: "li"
};
pt.defaultItemPropsMap = {};
pt.defaultItemType = "item";
const rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: pt
}, Symbol.toStringTag, { value: "Module" }));
class nr extends H {
}
nr.NAME = "CommonList";
nr.Component = pt;
nr.replace = !0;
me(rh);
function oh(s) {
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
function ah(s) {
  const [t, e, n] = typeof s == "string" ? oh(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function to(s, t) {
  return ah(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function eo(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function lh(s, t, e) {
  s = s % 360 / 360, t = eo(t), e = eo(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function pa(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function ch(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let gs = class extends W {
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
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], w = { ...e, background: o, color: a };
    let x = 32;
    n && (typeof n == "number" ? (w.width = `${n}px`, w.height = `${n}px`, w.fontSize = `${Math.max(12, Math.round(n / 2))}px`, x = n) : (b.push(`size-${n}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let C;
    if (m)
      b.push("has-img"), C = /* @__PURE__ */ u("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      b.push("has-icon"), C = /* @__PURE__ */ u(q, { icon: l });
    else if (c != null && c.length) {
      const S = ch(c, h);
      if (b.push("has-text", `has-text-${S.length}`), o)
        !a && o && (w.color = to(o));
      else {
        const P = d ?? c, A = (typeof P == "number" ? P : pa(P)) * p % 360;
        if (w.background = `hsl(${A},${g * 100}%,${_ * 100}%)`, !a) {
          const T = lh(A, g, _);
          w.color = to(T);
        }
      }
      let M;
      x && x < 14 * S.length && (M = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ u("div", { "data-actualSize": x, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        className: k(b),
        style: w,
        ...y,
        children: [
          C,
          v
        ]
      }
    );
  }
};
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: gs
}, Symbol.toStringTag, { value: "Module" }));
let vt = class extends pt {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    !e.type && (e.dropdown || e.items) && (e = f.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = R({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = R({}, e, la({ btnType: n, size: i }));
  }
};
vt.NAME = "btn-group";
vt.TAG = "nav";
vt.ItemComponents = {
  ...pt.ItemComponents,
  default: et
};
vt.defaultItemProps = {
  component: void 0
};
const kn = class ma extends vt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = k(n.className, `gap-${e}`) : n.style = f.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && ((i.type === "btn-group" || i.type === "btnGroup") && (i.btnProps = R({}, this._shareBtnProps, i.btnProps)), i);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = R(n, r)), /* @__PURE__ */ u(ma, { ...r });
  }
};
kn.NAME = "toolbar";
kn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
kn.ItemComponents = {
  ...vt.ItemComponents,
  btnGroup: vt,
  "btn-group": vt
};
let ot = kn;
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ot
}, Symbol.toStringTag, { value: "Module" }));
class xn extends K {
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
      e ? /* @__PURE__ */ u(
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
      /* @__PURE__ */ u("label", { htmlFor: r, children: /* @__PURE__ */ u(O, { content: o }) }, "label")
    ];
  }
}
class uh extends xn {
}
uh.defaultProps = {
  type: "radio"
};
class fh extends xn {
}
fh.defaultProps = {
  type: "switch"
};
class Qs extends K {
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
    if (i && d.push(/* @__PURE__ */ u(O, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ u(xn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ u(q, { className: "item-icon", icon: e }, "icon")), n) {
      const m = typeof n == "function" ? n.call(this, t) : n;
      m && (m.className = k("item-avatar", m.className), d.push(/* @__PURE__ */ u(gs, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ u(O, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ u("div", { className: k("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t, e) {
    const {
      textClass: n,
      titleClass: i,
      subtitle: r,
      subtitleClass: o,
      url: a,
      target: l,
      content: c,
      contentClass: d
    } = t, h = a && !e, m = h ? "a" : "div";
    let { title: p, text: g } = t;
    return p === void 0 && (p = g, g = null), [
      /* @__PURE__ */ u("div", { className: k("item-content", d), children: [
        p ? /* @__PURE__ */ u(m, { className: k("item-title", i), href: h ? a : void 0, target: h ? l : void 0, children: /* @__PURE__ */ u(O, { content: p }) }, "title") : null,
        r ? /* @__PURE__ */ u("div", { className: k("item-subtitle", o), children: /* @__PURE__ */ u(O, { content: r }) }, "subtitle") : null,
        g ? /* @__PURE__ */ u("div", { className: k("item-text text", n), children: g }, "text") : null,
        c ? /* @__PURE__ */ u(O, { content: c }, "extraContent") : null
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
    if (r && a.push(/* @__PURE__ */ u(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o) {
      let c = typeof o == "function" ? o.call(this, t) : o;
      Array.isArray(c) && (c = {
        items: c
      }), a.push(
        /* @__PURE__ */ u(ot, { size: "sm", ...c }, "actions")
      );
    }
    const l = n ? /* @__PURE__ */ u(O, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ u("div", { className: k("item-trailing", i), children: [
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
      title: g,
      subtitle: _,
      hover: v
    } = t, y = n || (o && !a ? "a" : "div"), b = y === "a", w = R({
      key: "item",
      className: k("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": v,
        checked: m,
        multiline: p ?? !!(g && _),
        state: b
      })
    }, b ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ u(y, { ...w, children: [
      this._renderLeading(t),
      this._renderContent(t, b),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Qe(n)]];
  }
}
let te = class extends pt {
  constructor(t) {
    super(t), this.state = {};
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
        const r = await bn(t, [this], { throws: !0 });
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
    i = R({}, la({
      divider: r,
      hover: o,
      multiline: a
    }), i);
    const { itemName: l, name: c } = this;
    if (i.innerClass = [l ? `${l}-inner${c ? ` ${c}-${i.type}-inner` : ""}` : "", i.innerClass], i.type === "item") {
      const { checkbox: d } = t;
      d && (i.checked === void 0 && (i.checked = !1), typeof d == "object" && (i.checkbox = i.checkbox ? f.extend({}, d, i.checkbox) : d));
    }
    return i.icon && (this._hasIcons = !0), i.checked !== void 0 && (this._hasCheckbox = !0), i;
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
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
      className: k(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
te.ItemComponents = {
  ...pt.ItemComponents,
  default: K,
  item: Qs,
  heading: Qs
};
te.NAME = "list";
const zn = "```ZUI_STR\n";
class _s {
  /**
   * Create new store instance.
   * @param id   Store profile ID.
   * @param type Store type.
   */
  constructor(t = "", e = "local") {
    this._type = e, this._id = t, this._name = `ZUI_STORE:${this._id}`, this._storage = e === "local" ? localStorage : sessionStorage;
  }
  /**
   * Get store type.
   */
  get type() {
    return this._type;
  }
  /**
   * Get session type store instance.
   */
  get session() {
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new _s(this._id, "session")), this._altStorage);
  }
  _getKey(t) {
    return `${this._name}:${t}`;
  }
  /**
   * Switch store profile.
   *
   * @param id Store profile ID.
   */
  switch(t) {
    this._id = t, this._name = `ZUI_STORE:${this._id}`;
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = this._storage.getItem(this._getKey(t));
    if (typeof n == "string") {
      if (n.startsWith(zn))
        return n.substring(zn.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
  }
  /**
   * Set key-value pair in store.
   *
   * @param key Key to set.
   * @param value Value to set.
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${zn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store.
   *
   * @param key Key to remove.
   */
  remove(t) {
    this._storage.removeItem(this._getKey(t));
  }
  /**
   * Iterate all key-value pairs in store.
   *
   * @param callback Callback function to call for each key-value pair in the store.
   */
  each(t) {
    for (let e = 0; e < this._storage.length; e++) {
      const n = this._storage.key(e);
      if (n != null && n.startsWith(this._name)) {
        const i = this._storage.getItem(n);
        typeof i == "string" && t(n.substring(this._name.length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store.
   *
   * @returns All key-value pairs in the store.
   */
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
}
const Rt = new _s("DEFAULT");
function ph(s, t = "local") {
  return new _s(s, t);
}
Object.assign(Rt, { create: ph });
let Me = class extends te {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0;
    const { defaultNestedShow: e } = t;
    f.extend(this.state, typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} });
    const { preserve: n } = t;
    if (n && !this._controlled) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const i = Rt.get(this._storeID);
      i && f.extend(this.state, i);
    }
    this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e) {
    const { nestedShow: n } = this, i = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return typeof n == "boolean" ? n : !!(n[i] ?? this.state.defaultShow);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const n = this.isExpanded(t);
    if (e === void 0)
      e = !n;
    else if (e === n)
      return;
    if (((i = this.props.onToggle) == null ? void 0 : i.call(this, t, e)) !== !1)
      return this.setState((r) => ({
        nestedShow: {
          ...r.nestedShow,
          [t]: e
        }
      }), this._preserveState);
  }
  toggleAll(t) {
    if (!this._controlled)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  _preserveState() {
    this._storeID && Rt.set(this._storeID, this.state);
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return R(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ u(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ u("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ u("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ u(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ u("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key;
    if (i.items) {
      const a = i.expanded ?? this.isExpanded(o, r);
      R(i, {
        expanded: a,
        className: ["is-nested", `is-nested-${a ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return R(i, {
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
    return e = R(e, {
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
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = R(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = k(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
Me.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Me.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class ga extends H {
}
ga.NAME = "List";
ga.Component = te;
class _a extends H {
}
_a.NAME = "NestedList";
_a.Component = Me;
let it = class extends Me {
  _getClassName(t) {
    return k(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
it.NAME = "menu";
it.TAG = "menu";
it.inheritNestedProps = [...Me.inheritNestedProps, "compact"];
it.ItemComponents = {
  ...Me.ItemComponents,
  item: [Qs, { innerComponent: "a" }]
};
var ya = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Le = (s, t, e) => (ya(s, t, "read from private field"), e ? e.call(s) : t.get(s)), $s = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, so = (s, t, e) => (ya(s, t, "access private method"), e), oi, Ls, Ds, Rs, ai;
let ir = class extends W {
  constructor(t) {
    super(t), $s(this, Rs), this._input = F(), this._timer = 0, $s(this, oi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), $s(this, Ls, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (so(this, Rs, ai).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), $s(this, Ds, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${Ot()}`;
  }
  get id() {
    return this._gid;
  }
  get input() {
    return this._input.current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    so(this, Rs, ai).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: g } = t, { focus: _, value: v } = e, { id: y } = this, b = g ?? v, w = typeof b != "string" || !b.trim().length;
    let x, C, S;
    return m && (S = m === !0 ? /* @__PURE__ */ u("span", { class: "magnifier" }) : /* @__PURE__ */ u(q, { icon: m })), !h && m && (x = /* @__PURE__ */ u("label", { for: y, class: "input-control-prefix", children: S }, "prefix")), p && !w ? C = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Le(this, oi),
        children: p === !0 ? /* @__PURE__ */ u("span", { class: "close" }) : /* @__PURE__ */ u(q, { icon: p })
      }
    ) : h && m && (C = S), C && (C = /* @__PURE__ */ u("label", { for: y, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ u("div", { class: k("search-box input-control", r, { focus: _, empty: w, "has-prefix-icon": x, "has-suffix-icon": C }), style: o, children: [
      x,
      /* @__PURE__ */ u(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: k("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: b,
          onInput: Le(this, Ls),
          onChange: Le(this, Ls),
          onFocus: Le(this, Ds),
          onBlur: Le(this, Ds)
        }
      ),
      C
    ] });
  }
};
oi = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakSet();
ai = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
ir.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Nt = class extends it {
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
  isExpanded(t, e) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t, e);
  }
  _updateMatchedParents() {
    this.isRoot && f(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
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
    if (!n || !this.isRoot)
      return e;
    e = Qe(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && f.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ u(ir, { ...i }, "search")), e;
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
    return f.unique(t.toLowerCase().split(" ").filter((e) => e.length));
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
        h && (o.push(/* @__PURE__ */ u("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Nt.inheritNestedProps = [...it.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Nt.defaultProps = {
  ...it.defaultProps,
  defaultNestedShow: !0
};
class rr extends H {
}
rr.NAME = "Menu";
rr.Component = it;
rr.replace = !0;
class or extends H {
}
or.NAME = "SearchMenu";
or.Component = Nt;
or.replace = !0;
function mh({
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
  a === !0 ? m = /* @__PURE__ */ u(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ u("span", { class: "close" }) }) : rt(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ u(et, { ...a, onClick: l }));
  const p = rt(e) ? e : e ? /* @__PURE__ */ u(ot, { ...e }) : null;
  return /* @__PURE__ */ u("div", { className: k("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ u(q, { icon: c, className: k("alert-icon", d) }),
    rt(i) ? i : /* @__PURE__ */ u("div", { className: k("alert-content", r), children: [
      rt(n) ? n : n && /* @__PURE__ */ u("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ u("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    o
  ] });
}
function gh(s) {
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
function _h({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ u(
    mh,
    {
      className: k("messager", r, t, n === !0 ? gh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var yh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, vh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, De = (s, t, e) => (yh(s, t, "access private method"), e), ee, ye;
class ar extends H {
  constructor() {
    super(...arguments), vh(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      f(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), De(this, ee, ye).call(this, () => {
      this._show = !0, this.render(), De(this, ee, ye).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && De(this, ee, ye).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && De(this, ee, ye).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), De(this, ee, ye).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
ye = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
ar.NAME = "MessagerItem";
ar.Component = _h;
var lr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, oe = (s, t, e) => (lr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ss = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ws = (s, t, e, n) => (lr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), va = (s, t, e) => (lr(s, t, "access private method"), e), Ce, Pt, li, ba, cr, wa;
const $n = class Ca extends at {
  constructor() {
    super(...arguments), Ss(this, li), Ss(this, cr), Ss(this, Ce, void 0), Ss(this, Pt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = oe(this, Pt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), va(this, li, ba).call(this).show();
  }
  hide() {
    var t;
    (t = oe(this, Pt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = Ca.ensure(e || "body", { key: `messager_${Ot()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
ba = function() {
  if (oe(this, Pt))
    oe(this, Pt).setOptions(this.options);
  else {
    const s = va(this, cr, wa).call(this), t = new ar(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Ws(this, Ce, void 0), Ws(this, Pt, void 0);
    }), Ws(this, Pt, t);
  }
  return oe(this, Pt);
};
cr = /* @__PURE__ */ new WeakSet();
wa = function() {
  if (oe(this, Ce))
    return oe(this, Ce);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = f(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ws(this, Ce, e[0])), e[0];
};
$n.NAME = "messager";
$n.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
$n.MULTI_INSTANCE = !0;
let Su = $n;
let hr = class extends W {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const g = (n - p) / 2;
    return /* @__PURE__ */ u("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ u("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ u("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ u("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
hr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class ka extends H {
}
ka.NAME = "ProgressCircle";
ka.Component = hr;
const Re = '[droppable="true"]';
class Sn extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = f(t.target), o = r.closest(e), a = o[0];
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
      l && (this.$element.find(l).removeClass(l), f(e).addClass(l));
      const h = typeof o == "function" ? f(o.call(this, e)) : r.find(o || a || Re);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(Re).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      const { dragElement: e } = this, n = f(t.target).closest(Re)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), f(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = f(t.target).filter(Re)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = f(t.target).closest(Re)[0];
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), f(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), f(document).off(this.namespace), super.destroy();
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
    n && f(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = f(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
Sn.NAME = "Draggable";
Sn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const bh = '[moveable="true"]';
class ys extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = f(t.target), a = n === "self" ? this.$element : o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), f(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (t.preventDefault(), this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
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
    this._clean(), f(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = f(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        n.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        n.strategy = this.options.move || "none";
      const d = c.position();
      n = f.extend(n, {
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
      n = f.extend({}, i, n, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n, a = f(o);
    r === "position" ? a.css({ left: n.left, top: n.top }) : r === "transform" ? a.css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`) : r === "scroll" && (o.scrollLeft = n.scrollLeft - n.deltaX, o.scrollTop = n.scrollTop - n.deltaY), (l = this.options.onChange) == null || l.call(this, n, i, t);
  }
  _clean() {
    f(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = f(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
ys.NAME = "Moveable";
ys.DEFAULT = {
  selector: bh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const dr = class xa extends at {
  async afterInit() {
    const t = await xa.loadModule();
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
    return this.Module || (this.Module = await f.getLib("sortablejs")), this.Module;
  }
};
dr.NAME = "Sortable";
dr.DEFAULT = {
  animation: 150
};
let Tu = dr;
f.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
class $a extends H {
}
$a.NAME = "Avatar";
$a.Component = gs;
me(hh);
class Sa extends H {
}
Sa.NAME = "BtnGroup";
Sa.Component = vt;
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: vt
}, Symbol.toStringTag, { value: "Module" }));
me(wh);
const ci = Symbol("EVENT_PICK");
class ur extends W {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!f(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = f(t.target), a = i == null ? void 0 : i(t);
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
    return k(
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
        f(`#${i}`).val(n);
      else
        return /* @__PURE__ */ u("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === ci)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && f(`#${e}`).trigger("change", ci), this._skipTriggerChange = !1);
  }
  render(t) {
    return xt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Ne = Math.min, ae = Math.max, tn = Math.round, Ns = Math.floor, Xt = (s) => ({
  x: s,
  y: s
}), Ch = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kh = {
  start: "end",
  end: "start"
};
function hi(s, t, e) {
  return ae(s, Ne(t, e));
}
function vs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function de(s) {
  return s.split("-")[0];
}
function bs(s) {
  return s.split("-")[1];
}
function Na(s) {
  return s === "x" ? "y" : "x";
}
function fr(s) {
  return s === "y" ? "height" : "width";
}
function Nn(s) {
  return ["top", "bottom"].includes(de(s)) ? "y" : "x";
}
function pr(s) {
  return Na(Nn(s));
}
function xh(s, t, e) {
  e === void 0 && (e = !1);
  const n = bs(s), i = pr(s), r = fr(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = en(o)), [o, en(o)];
}
function $h(s) {
  const t = en(s);
  return [di(s), t, di(t)];
}
function di(s) {
  return s.replace(/start|end/g, (t) => kh[t]);
}
function Sh(s, t, e) {
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
function Nh(s, t, e, n) {
  const i = bs(s);
  let r = Sh(de(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(di)))), r;
}
function en(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Ch[t]);
}
function Th(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Ta(s) {
  return typeof s != "number" ? Th(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function sn(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function no(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = Nn(t), o = pr(t), a = fr(o), l = de(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
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
  switch (bs(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const Eh = async (s, t, e) => {
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
  } = no(c, n, l), m = n, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: b,
      y: w,
      data: x,
      reset: C
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
    if (d = b ?? d, h = w ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...x
      }
    }, C && g <= 50) {
      g++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: d,
        y: h
      } = no(c, m, l)), _ = -1;
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
async function Ea(s, t) {
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
  } = vs(t, s), g = Ta(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = sn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = sn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - C.top + g.top) / x.y,
    bottom: (C.bottom - y.bottom + g.bottom) / x.y,
    left: (y.left - C.left + g.left) / x.x,
    right: (C.right - y.right + g.right) / x.x
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
    } = vs(s, t) || {};
    if (l == null)
      return {};
    const d = Ta(c), h = {
      x: e,
      y: n
    }, m = pr(i), p = fr(m), g = await o.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", w = r.reference[p] + r.reference[m] - h[m] - r.floating[p], x = h[m] - r.reference[m], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = C ? C[b] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(C))) && (S = a.floating[b] || r.floating[p]);
    const M = w / 2 - x / 2, P = S / 2 - g[p] / 2 - 1, A = Ne(d[v], P), T = Ne(d[y], P), I = A, V = S - g[p] - T, E = S / 2 - g[p] / 2 + M, z = hi(I, E, V), bt = bs(i) != null && E != z && r.reference[p] / 2 - (E < I ? A : T) - g[p] / 2 < 0 ? E < I ? I - E : V - E : 0;
    return {
      [m]: h[m] - bt,
      data: {
        [m]: z,
        centerOffset: E - z + bt
      }
    };
  }
}), Tn = function(s) {
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
        flipAlignment: g = !0,
        ..._
      } = vs(s, t), v = de(n), y = de(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), w = h || (y || !g ? [en(o)] : $h(o));
      !h && p !== "none" && w.push(...Nh(o, g, p, b));
      const x = [o, ...w], C = await Ea(t, _), S = [];
      let M = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && S.push(C[v]), d) {
        const I = xh(n, r, b);
        S.push(C[I[0]], C[I[1]]);
      }
      if (M = [...M, {
        placement: n,
        overflows: S
      }], !S.every((I) => I <= 0)) {
        var P, A;
        const I = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, V = x[I];
        if (V)
          return {
            data: {
              index: I,
              overflows: M
            },
            reset: {
              placement: V
            }
          };
        let E = (A = M.filter((z) => z.overflows[0] <= 0).sort((z, ct) => z.overflows[1] - ct.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!E)
          switch (m) {
            case "bestFit": {
              var T;
              const z = (T = M.map((ct) => [ct.placement, ct.overflows.filter((bt) => bt > 0).reduce((bt, Gl) => bt + Gl, 0)]).sort((ct, bt) => ct[1] - bt[1])[0]) == null ? void 0 : T[0];
              z && (E = z);
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
async function Mh(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = de(e), a = bs(e), l = Nn(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = vs(t, s);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
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
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), l ? {
    x: p * d,
    y: m * c
  } : {
    x: m * c,
    y: p * d
  };
}
const En = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await Mh(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, es = function(s) {
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
      } = vs(s, t), c = {
        x: e,
        y: n
      }, d = await Ea(t, l), h = Nn(de(i)), m = Na(h);
      let p = c[m], g = c[h];
      if (r) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = p + d[v], w = p - d[y];
        p = hi(b, p, w);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = g + d[v], w = g - d[y];
        g = hi(b, g, w);
      }
      const _ = a.fn({
        ...t,
        [m]: p,
        [h]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - n
        }
      };
    }
  };
};
function Jt(s) {
  return Ma(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ut(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(s) {
  var t;
  return (t = (Ma(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ma(s) {
  return s instanceof Node || s instanceof ut(s).Node;
}
function Bt(s) {
  return s instanceof Element || s instanceof ut(s).Element;
}
function $t(s) {
  return s instanceof HTMLElement || s instanceof ut(s).HTMLElement;
}
function io(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof ut(s).ShadowRoot;
}
function ws(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = gt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Ih(s) {
  return ["table", "td", "th"].includes(Jt(s));
}
function mr(s) {
  const t = gr(), e = gt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Ah(s) {
  let t = Te(s);
  for (; $t(t) && !Mn(t); ) {
    if (mr(t))
      return t;
    t = Te(t);
  }
  return null;
}
function gr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mn(s) {
  return ["html", "body", "#document"].includes(Jt(s));
}
function gt(s) {
  return ut(s).getComputedStyle(s);
}
function In(s) {
  return Bt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Te(s) {
  if (Jt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    io(s) && s.host || // Fallback.
    zt(s)
  );
  return io(t) ? t.host : t;
}
function Ia(s) {
  const t = Te(s);
  return Mn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : $t(t) && ws(t) ? t : Ia(t);
}
function ss(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = Ia(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = ut(n);
  return i ? t.concat(r, r.visualViewport || [], ws(n) ? n : [], r.frameElement ? ss(r.frameElement) : []) : t.concat(n, ss(n));
}
function Aa(s) {
  const t = gt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = $t(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = tn(e) !== r || tn(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function _r(s) {
  return Bt(s) ? s : s.contextElement;
}
function ke(s) {
  const t = _r(s);
  if (!$t(t))
    return Xt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Aa(t);
  let o = (r ? tn(e.width) : e.width) / n, a = (r ? tn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Ph = /* @__PURE__ */ Xt(0);
function Pa(s) {
  const t = ut(s);
  return !gr() || !t.visualViewport ? Ph : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Lh(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ut(s) ? !1 : t;
}
function ue(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = _r(s);
  let o = Xt(1);
  t && (n ? Bt(n) && (o = ke(n)) : o = ke(s));
  const a = Lh(r, e, n) ? Pa(r) : Xt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = ut(r), p = n && Bt(n) ? ut(n) : n;
    let g = m.frameElement;
    for (; g && n && p !== m; ) {
      const _ = ke(g), v = g.getBoundingClientRect(), y = gt(g), b = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, w = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += b, c += w, g = ut(g).frameElement;
    }
  }
  return sn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Dh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = $t(e), r = zt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Xt(1);
  const l = Xt(0);
  if ((i || !i && n !== "fixed") && ((Jt(e) !== "body" || ws(r)) && (o = In(e)), $t(e))) {
    const c = ue(e);
    a = ke(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Rh(s) {
  return Array.from(s.getClientRects());
}
function La(s) {
  return ue(zt(s)).left + In(s).scrollLeft;
}
function Wh(s) {
  const t = zt(s), e = In(s), n = s.ownerDocument.body, i = ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + La(s);
  const a = -e.scrollTop;
  return gt(n).direction === "rtl" && (o += ae(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Hh(s, t) {
  const e = ut(s), n = zt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = gr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Oh(s, t) {
  const e = ue(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = $t(s) ? ke(s) : Xt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ro(s, t, e) {
  let n;
  if (t === "viewport")
    n = Hh(s, e);
  else if (t === "document")
    n = Wh(zt(s));
  else if (Bt(t))
    n = Oh(t, e);
  else {
    const i = Pa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return sn(n);
}
function Da(s, t) {
  const e = Te(s);
  return e === t || !Bt(e) || Mn(e) ? !1 : gt(e).position === "fixed" || Da(e, t);
}
function Bh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = ss(s).filter((a) => Bt(a) && Jt(a) !== "body"), i = null;
  const r = gt(s).position === "fixed";
  let o = r ? Te(s) : s;
  for (; Bt(o) && !Mn(o); ) {
    const a = gt(o), l = mr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ws(o) && !l && Da(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Te(o);
  }
  return t.set(s, n), n;
}
function Fh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Bh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = ro(t, d, i);
    return c.top = ae(h.top, c.top), c.right = Ne(h.right, c.right), c.bottom = Ne(h.bottom, c.bottom), c.left = ae(h.left, c.left), c;
  }, ro(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function zh(s) {
  return Aa(s);
}
function Vh(s, t, e) {
  const n = $t(t), i = zt(t), r = e === "fixed", o = ue(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  if (n || !n && !r)
    if ((Jt(t) !== "body" || ws(i)) && (a = In(t)), n) {
      const c = ue(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = La(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function oo(s, t) {
  return !$t(s) || gt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Ra(s, t) {
  const e = ut(s);
  if (!$t(s))
    return e;
  let n = oo(s, t);
  for (; n && Ih(n) && gt(n).position === "static"; )
    n = oo(n, t);
  return n && (Jt(n) === "html" || Jt(n) === "body" && gt(n).position === "static" && !mr(n)) ? e : n || Ah(s) || e;
}
const Uh = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || Ra, r = this.getDimensions;
  return {
    reference: Vh(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function jh(s) {
  return gt(s).direction === "rtl";
}
const Kh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dh,
  getDocumentElement: zt,
  getClippingRect: Fh,
  getOffsetParent: Ra,
  getElementRects: Uh,
  getClientRects: Rh,
  getDimensions: zh,
  getScale: ke,
  isElement: Bt,
  isRTL: jh
};
function qh(s, t) {
  let e = null, n;
  const i = zt(s);
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
    const p = Ns(d), g = Ns(i.clientWidth - (c + h)), _ = Ns(i.clientHeight - (d + m)), v = Ns(c), b = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: ae(0, Ne(1, l)) || 1
    };
    let w = !0;
    function x(C) {
      const S = C[0].intersectionRatio;
      if (S !== l) {
        if (!w)
          return o();
        S ? o(!1, S) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(x, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(x, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function yr(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = _r(s), d = i || r ? [...c ? ss(c) : [], ...ss(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? qh(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? ue(s) : null;
  l && v();
  function v() {
    const y = ue(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const An = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Kh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Eh(s, t, {
    ...i,
    platform: r
  });
};
var re, wt, Kt;
class Wa extends W {
  constructor(e) {
    super(e);
    U(this, re, void 0);
    U(this, wt, void 0);
    U(this, Kt, void 0);
    j(this, re, F()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = f(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = L(this, re)) == null ? void 0 : e.current;
  }
  get container() {
    return L(this, Kt);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = f(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return k(
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
    } = e, c = f.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: L(this, re),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!L(this, Kt)) {
      const n = f(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(n)), j(this, Kt, i[0]);
    }
    return L(this, Kt);
  }
  _render(e) {
    return /* @__PURE__ */ u("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      L(this, wt) && (L(this, wt).call(this), j(this, wt, void 0));
      return;
    }
    L(this, wt) || j(this, wt, yr(n, e, () => {
      const { placement: o, width: a } = i;
      An(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Tn() : null, es(), En(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        f(e).css({
          left: l,
          top: c,
          width: a === "100%" ? f(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && f(e).css({ width: f(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), f(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    f(document).off("click", this._handleDocClick);
    const e = L(this, wt);
    e && (e(), j(this, wt, void 0)), j(this, Kt, void 0), j(this, re, void 0), f(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return nh(this._render(e), this._getContainer(e));
  }
}
re = new WeakMap(), wt = new WeakMap(), Kt = new WeakMap();
var Ha = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Vt = (s, t, e) => (Ha(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Vn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ge = (s, t, e, n) => (Ha(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Hs, yt, ze;
let lt = class extends W {
  constructor(t) {
    super(t), Vn(this, Hs, void 0), Vn(this, yt, 0), Vn(this, ze, F()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Vt(this, yt) && (clearTimeout(Vt(this, yt)), ge(this, yt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Ys(200, (a) => {
        ge(this, yt, a);
      }), ge(this, yt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Ys(50, (a) => {
        ge(this, yt, a);
      }), ge(this, yt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ge(this, Hs, t.id ?? `_pick${Ot()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Vt(this, Hs);
  }
  get pop() {
    return Vt(this, ze).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), Vt(this, yt) && clearTimeout(Vt(this, yt));
    const t = Vt(this, ze).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ u(o, { ref: Vt(this, ze), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ u(Ee, { children: [
      /* @__PURE__ */ u(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Hs = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
lt.Trigger = ur;
lt.Pop = Wa;
lt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Oa = class extends lt {
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
    if (t && f(t).css("backgroundColor", r), e && f(e).css("borderColor", r), n && f(n).css("color", r), i) {
      const o = f(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ u(q, { icon: n }, "icon") : /* @__PURE__ */ u("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = f.extend({
      color: e.value
    }, n.style), n.className = k("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ u("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ u("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ u("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ u("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ u(q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ u("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ u(q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Oa.defaultProps = {
  ...lt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Ba extends H {
}
Ba.NAME = "ColorPicker";
Ba.Component = Oa;
const ns = 24 * 60 * 60 * 1e3, G = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Gh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(G(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, Cs = (s, t = /* @__PURE__ */ new Date()) => G(s).toDateString() === G(t).toDateString(), fi = (s, t = /* @__PURE__ */ new Date()) => G(s).getFullYear() === G(t).getFullYear(), Fa = (s, t = /* @__PURE__ */ new Date()) => (s = G(s), t = G(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Iu = (s, t = /* @__PURE__ */ new Date()) => {
  s = G(s), t = G(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Au = (s, t) => Cs(G(t), s), Pu = (s, t) => Cs(G(t).getTime() - ns, s), Lu = (s, t) => Cs(G(t).getTime() + ns, s), st = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = G(s), Number.isNaN(s.getDay()))
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
}, Du = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = st(s, fi(s) ? n.month : n.full);
  if (Cs(s, t))
    return i;
  const r = st(t, fi(s, t) ? Fa(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var as, ls;
class za extends W {
  constructor() {
    super(...arguments);
    U(this, as, F());
    U(this, ls, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    f(L(this, as).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ u("div", { className: "time-picker-menu row", ref: L(this, as), children: [
      /* @__PURE__ */ u(
        it,
        {
          className: l,
          items: o,
          onClickItem: L(this, ls).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ u(
        it,
        {
          className: l,
          items: a,
          onClickItem: L(this, ls).bind(this, "minute")
        }
      )
    ] });
  }
}
as = new WeakMap(), ls = new WeakMap();
var Yh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ts = (s, t, e) => (Yh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Es = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, pi, mi, gi, _i;
const ao = (s) => {
  if (!s)
    return;
  const t = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Va = class extends lt {
  constructor(t) {
    super(t), Es(this, pi, () => {
      this.toggle(!0);
    }), Es(this, mi, (n) => {
      this.setTime(n.target.value);
    }), Es(this, gi, (n, i) => {
      this.setTime({ [n]: i });
    }), Es(this, _i, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = st(/* @__PURE__ */ new Date(), t.format));
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
    const n = ao(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? st(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = ao(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: Ts(this, _i), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-time" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Ts(this, pi), onChange: Ts(this, mi) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ u(za, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: Ts(this, gi) });
  }
};
pi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
Va.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
Z.addLang({
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
const Xh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * ns;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, lo = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => st(e, t)));
var un;
class Jh extends W {
  constructor() {
    super(...arguments);
    U(this, un, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = f(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = Z.getLang("weekNames"),
      monthNames: o = Z.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const M = (i + S) % 7;
      h.push(/* @__PURE__ */ u("div", { className: k("col mini-calendar-day", { "is-weekend": M === 0 || M === 6 }), children: /* @__PURE__ */ u("div", { children: r ? r[M] : M }) }, S));
    }
    const { startTime: p, days: g, firstDay: _ } = Xh(a, l, i), v = _ + g * ns;
    let y = p;
    const b = [], w = "yyyy-MM-dd", x = lo(c, w), C = lo(d, w);
    for (; y <= v; ) {
      const S = [];
      for (let M = 0; M < 7; M++) {
        const P = new Date(y), A = P.getDate(), T = st(P, w), I = P.getDay(), V = Fa(P, _), E = k("col mini-calendar-day", {
          active: x.has(T),
          selected: C.has(T),
          "is-first": A === 1,
          "is-in-month": V,
          "is-out-month": !V,
          "is-today": Cs(P, n),
          "is-weekend": I === 0 || I === 6
        });
        S.push(
          /* @__PURE__ */ u("div", { className: E, "data-date": T, children: /* @__PURE__ */ u("a", { className: m, onClick: L(this, un), children: A === 1 && o ? o[P.getMonth()] : P.getDate() }) }, T)
        ), y += ns;
      }
      b.push(/* @__PURE__ */ u("div", { className: "row", children: S }, y));
    }
    return /* @__PURE__ */ u("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ u("div", { className: "row", children: h }),
      b
    ] });
  }
}
un = new WeakMap();
var cs, fn;
class co extends W {
  constructor() {
    super(...arguments);
    U(this, cs, F());
    U(this, fn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    f(L(this, cs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ u(et, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: L(this, fn), children: c }, c));
    return /* @__PURE__ */ u("div", { className: n, ref: L(this, cs), children: a });
  }
}
cs = new WeakMap(), fn = new WeakMap();
var xe, hs, ds, us, fs, ps, pn, ja, mn, Ka;
class Ua extends W {
  constructor(e) {
    super(e);
    U(this, pn);
    U(this, mn);
    U(this, xe, void 0);
    U(this, hs, void 0);
    U(this, ds, void 0);
    U(this, us, void 0);
    U(this, fs, void 0);
    U(this, ps, void 0);
    j(this, xe, F()), j(this, hs, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), j(this, ds, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), j(this, us, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), j(this, fs, (r) => {
      this.setState({ year: r, select: "day" });
    }), j(this, ps, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Gh(l, r.substring(5).replace("+", ""))), r = st(l, "yyyy-MM-dd");
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
    f(L(this, xe).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = Z.getLang("yearFormat") || "{0}",
      weekNames: o = Z.getLang("weekNames"),
      monthNames: a = Z.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", g = G(e.minDate || "1970-1-1"), _ = G(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ u("div", { className: "date-picker-menu row", ref: L(this, xe), onClick: L(this, hs), children: [
      Hn(this, pn, ja).call(this, e),
      /* @__PURE__ */ u("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ u("div", { className: "row p-2", children: [
          /* @__PURE__ */ u(et, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ u(et, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ u("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ u(et, { type: "ghost", size: "sm", square: !0, onClick: L(this, ds), children: /* @__PURE__ */ u("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ u(et, { type: "ghost", size: "sm", square: !0, onClick: L(this, us), children: /* @__PURE__ */ u("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ u(
          Jh,
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
        m === "year" ? /* @__PURE__ */ u(
          co,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: L(this, fs)
          }
        ) : m === "month" ? /* @__PURE__ */ u(
          co,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: L(this, ps)
          }
        ) : null,
        p ? Hn(this, mn, Ka).call(this, e) : null
      ] })
    ] });
  }
}
xe = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), pn = new WeakSet(), ja = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ u(it, { ...n })) : null;
}, mn = new WeakSet(), Ka = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": st(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ u("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ u(ot, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ u(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Zh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Un = (s, t, e) => (Zh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), jn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, yi, vi, bi;
let qa = class extends lt {
  constructor(t) {
    super(t), jn(this, yi, () => {
      this.toggle(!0);
    }), jn(this, vi, (n) => {
      this.setDate(n.target.value);
    }), jn(this, bi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = G(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : st(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: Un(this, bi), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Un(this, yi), onChange: Un(this, vi) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ u(
      Ua,
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
qa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Ga extends H {
}
Ga.NAME = "TimePicker";
Ga.Component = Va;
class Ya extends H {
}
Ya.NAME = "DatePicker";
Ya.Component = qa;
class Qh extends W {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ u("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ u(Ua, { ...e }),
      /* @__PURE__ */ u(za, { ...n })
    ] });
  }
}
var td = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, We = (s, t, e) => (td(s, t, "read from private field"), e ? e.call(s) : t.get(s)), He = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, wi, Ci, ki, xi, $i;
const ho = (s) => {
  if (!s)
    return;
  const t = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Xa = class extends lt {
  constructor(t) {
    super(t), He(this, wi, () => {
      this.toggle(!0);
    }), He(this, Ci, (o) => {
      this.setDate(o.target.value);
    }), He(this, ki, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), He(this, xi, (o, a) => {
      this.setTime({ [o]: a });
    }), He(this, $i, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = G(o), g = !o || Number.isNaN(p.getDay()), _ = st(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(o), [p, g] = m.split(":"), { hour: _ = +p, minute: v = +g } = t;
      c = `${_}:${v}`;
    }
    const d = ho(c), h = this.state.value.split(o)[0] || st(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${st(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = ho(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: We(this, ki),
        children: /* @__PURE__ */ u("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: We(this, wi),
          onChange: (m) => {
            We(this, Ci).call(this, m), We(this, $i).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ u("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
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
        hour: _,
        minute: v,
        minuteStep: g,
        onChange: We(this, xi)
      }
    };
    return /* @__PURE__ */ u(Qh, { ...y });
  }
};
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
Xa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Ja extends H {
}
Ja.NAME = "DatetimePicker";
Ja.Component = Xa;
const uo = "show", fo = "in", ed = '[data-dismiss="modal"]', Kn = "modal-hide", Ie = class Ve extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(ed) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this._shown;
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
          if (!this._shown)
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
    if (this._shown)
      return f(e).removeClass(Kn).css("z-index", `${Ve.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    f(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i,
      [Kn]: !1
    }, uo, r).css({
      zIndex: `${Ve.zIndex++}`,
      ...o
    });
    const a = this.constructor;
    return a.hideOthersOnShow && a.getAll().forEach((l) => {
      l !== this && l.shown && l.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      f(e).addClass(fo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    f(this.modalElement).addClass(Kn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, f(this.modalElement).removeClass(fo), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(uo), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthersOnShow && ((e = t.getAll().findLast((n) => n.shown && n !== this)) == null || e.show()), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = f(n);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = Ve.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ve.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
Ie.NAME = "Modal";
Ie.MULTI_INSTANCE = !0;
Ie.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ie.hideOthersOnShow = !0;
Ie.zIndex = 1500;
let is = Ie;
f(window).on(`resize.${is.NAMESPACE}`, () => {
  is.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class Za extends W {
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
    return rt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ u("div", { className: k("modal-header", e), children: /* @__PURE__ */ u("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : rt(t) ? t : /* @__PURE__ */ u("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ u(ot, { ...t }) : null,
      e ? /* @__PURE__ */ u("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? rt(t) ? t : /* @__PURE__ */ u("div", { className: k("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return rt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ u("div", { className: k("modal-footer", e), children: n ? /* @__PURE__ */ u(ot, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ u("div", { className: k("modal-dialog", t), style: e, children: /* @__PURE__ */ u("div", { className: k("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Za.defaultProps = { closeBtn: !0 };
class Qa extends W {
  constructor() {
    super(...arguments), this._ref = F(), this.state = {}, this._watchIframeHeight = () => {
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
    return /* @__PURE__ */ u(
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
Qa.defaultProps = {
  watchHeight: !0
};
var vr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, _t = (s, t, e) => (vr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Oe = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, _e = (s, t, e, n) => (vr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Os = (s, t, e) => (vr(s, t, "access private method"), e), Et, Ue, Mt, nn, br, Bs, Si;
function sd(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function nd(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await f.ajax({
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
    body: e === "html" ? /* @__PURE__ */ u(he, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function id(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ u(Qa, { url: e, watchHeight: !o })
  };
}
const rd = {
  custom: sd,
  ajax: nd,
  iframe: id
}, qn = "loading", tl = class se extends is {
  constructor() {
    super(...arguments), Oe(this, nn), Oe(this, Bs), Oe(this, Et, void 0), Oe(this, Ue, void 0), Oe(this, Mt, void 0);
  }
  get id() {
    return _t(this, Ue);
  }
  get loading() {
    var t;
    return (t = _t(this, Et)) == null ? void 0 : t.classList.contains(qn);
  }
  get shown() {
    var t;
    return !!((t = _t(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = _t(this, Et);
    if (!t) {
      const { options: e } = this;
      let n = _t(this, Ue);
      n || (n = e.id || `modal-${Ot()}`, _e(this, Ue, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      _e(this, Et, t);
    }
    return t;
  }
  get $emitter() {
    const t = _t(this, Et);
    return t ? f(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), se.getAll().some((t) => t.shown) || f("html").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (f("html").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = _t(this, Et);
    t && (f(t).removeData(this.constructor.KEY).remove(), _e(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    _t(this, Mt) && clearTimeout(_t(this, Mt));
    const { modalElement: t, options: e } = this, n = f(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = rd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(qn), r && _e(this, Mt, window.setTimeout(() => {
      _e(this, Mt, 0), Os(this, Bs, Si).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Os(this, Bs, Si).call(this, this.options.failedTip) : l && typeof l == "object" && await Os(this, nn, br).call(this, l), _t(this, Mt) && (clearTimeout(_t(this, Mt)), _e(this, Mt, 0)), this.layout(), await Ys(100), n.removeClass(qn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = se.ensure(n, r), a = `${se.NAMESPACE}.open${Ot()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ u("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ u("div", { children: n });
    i ? m = /* @__PURE__ */ u("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ u("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ u("div", { className: k("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = Z.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const b = se.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await se.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await se.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
nn = /* @__PURE__ */ new WeakSet();
br = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return f(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, ts(
      /* @__PURE__ */ u(Za, { ...s }),
      this.modalElement
    );
  });
};
Bs = /* @__PURE__ */ new WeakSet();
Si = function(s) {
  if (s)
    return Os(this, nn, br).call(this, {
      body: /* @__PURE__ */ u("div", { className: "modal-load-failed", children: s })
    });
};
tl.DEFAULT = {
  ...is.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let od = tl;
const ad = '[data-toggle="modal"]';
class Ni extends at {
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
      e = is.ensure(n, t);
    } else
      e = od.ensure(this.container, t);
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
f(document).on(`click${Ni.NAMESPACE}`, ad, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Ni.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let wr = class extends te {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
wr.NAME = "nav";
wr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class el extends H {
}
el.NAME = "Nav";
el.Component = wr;
function rs(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function ld({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = rs(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ u(et, { type: e, ...a });
}
function cd({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = rs(i, e);
  return n = typeof n == "function" ? n(a) : Q(n, a), /* @__PURE__ */ u(K, { ...o, children: [
    r,
    n
  ] });
}
function hd({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ u(et, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const g = rs(n, p);
      i && (o.url = typeof i == "function" ? i(g) : Q(i, g)), m.push(/* @__PURE__ */ u(et, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let dd = class extends W {
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
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ u(O, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ u("div", { className: m, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ u("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ u("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ u("div", { className: d, children: [
      i ? /* @__PURE__ */ u("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ u("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? v : /* @__PURE__ */ u("div", { id: e, className: k("popover", a, { popup: n }), style: o, children: v });
  }
};
class Cr extends H {
}
Cr.NAME = "PopoverPanel";
Cr.Component = dd;
const ud = '[data-toggle="popover"]', po = "show", mo = "in";
class mt extends at {
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
      const e = f(t.target);
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
      const o = f(i), { namespace: a } = this;
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), f(t)[0]) : this._createTarget();
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
    const r = f(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(po), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(mo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = f(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(mo), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(po), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), f(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      f(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = yr(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && f(e).css({ width: f(t).width() }), An(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = f(e).css({
          position: h,
          left: a,
          top: l
        }), p = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], _ = c.arrow;
        _ && m.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = f(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Cr(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
        i ? Tn() : null,
        r ? es(typeof r == "object" ? r : void 0) : null,
        o || d ? En((o || 0) + d) : null,
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
    const { container: t = "body" } = this.options, e = f(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
mt.NAME = "Popover";
mt.Z_INDEX = 1700;
mt.MULTI_INSTANCE = !0;
mt.DEFAULT = {
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
f(document).on(`click${mt.NAMESPACE} mouseenter${mt.NAMESPACE}`, ud, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data(mt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    mt.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const fd = '[data-toggle="dropdown"]';
class kt extends mt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      f(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
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
      content: xt(kr, this._getMenuOptions())
    };
  }
}
kt.NAME = "Dropdown";
kt.DEFAULT = {
  ...mt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
f(document).on(`click${kt.NAMESPACE} mouseenter${kt.NAMESPACE}`, fd, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data(kt.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), kt.ensure(t, i), s.preventDefault();
  }
});
class Pn extends et {
  constructor() {
    super(...arguments), this._ref = F();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i } = this.props, r = f(this.triggerElement), o = kt.get(this.triggerElement), a = {
      items: n,
      onClickItem: i,
      menu: e,
      ...t
    };
    o ? o.setOptions(a) : r.data(a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = kt.get(this.triggerElement)) == null || t.destroy();
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
Pn.defaultProps = {
  caret: !0
};
Object.assign(vt.ItemComponents, { dropdown: Pn });
Object.assign(ot.ItemComponents, { dropdown: Pn });
class kr extends Nt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this.element, e = t == null ? void 0 : t.parentElement;
    !t || !e || An(e, t, {
      placement: this.props.placement,
      middleware: [Tn(), es(), En(1)]
    }).then(({ x: n, y: i }) => {
      f(t).css({
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
      return /* @__PURE__ */ u("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ u("span", { className: "caret-right" }) });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
kr.defaultProps = {
  ...Nt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
kr.inheritNestedProps = [...Nt.inheritNestedProps, "popup"];
function pd({
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
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ u(Pn, { type: "dropdown", dropdown: i, ...o });
}
function md({
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
  const m = (_) => {
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = rs(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : Q(l, v));
  }, g = rs(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : Q(l, g), /* @__PURE__ */ u("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ u("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ u(et, { type: n, ...d, onClick: p })
  ] });
}
let Ln = class extends ot {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? f.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && f.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
Ln.NAME = "pager";
Ln.ItemComponents = {
  ...ot.ItemComponents,
  info: cd,
  link: ld,
  nav: hd,
  "size-menu": pd,
  goto: md
};
Ln.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class sl extends H {
}
sl.NAME = "Pager";
sl.Component = Ln;
class nl extends H {
}
nl.NAME = "Pick";
nl.Component = lt;
var $e, ms;
class il extends W {
  constructor(e) {
    super(e);
    U(this, $e, void 0);
    U(this, ms, void 0);
    this._searchInput = F(), this._measure = F(), this._changeTimer = 0, j(this, $e, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), j(this, ms, (n) => {
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
        const r = f(i).parent();
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
    return r ? l = /* @__PURE__ */ u("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ u("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: L(this, ms), children: /* @__PURE__ */ u("span", { className: "close" }) }) : l = /* @__PURE__ */ u("span", { className: "magnifier" }), /* @__PURE__ */ u("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ u(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: L(this, $e),
          onInput: L(this, $e),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
$e = new WeakMap(), ms = new WeakMap();
class gd extends ur {
  constructor() {
    super(...arguments), this._search = F(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ u("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ u("span", { className: "text", children: /* @__PURE__ */ u(O, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ u("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ u("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ u(
      il,
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
    return !a && !e.length ? /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ u("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ u("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        f(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ u("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ u("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    f(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = f(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", ci), this._skipTriggerChange = !1;
    }
  }
}
class _d extends ur {
  constructor() {
    super(...arguments), this._search = F(), this._handleDeselectClick = (t) => {
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
    return k(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ u(
      il,
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
      const { text: g } = c;
      h = /* @__PURE__ */ u("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ u(O, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = l && !d ? /* @__PURE__ */ u("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ u("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ u("span", { className: "caret" }, "caret")
    ];
  }
}
let Ae = class extends it {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Ae.NAME = "tree";
Ae.defaultProps = {
  ...it.defaultProps,
  indent: 12
};
Ae.defaultItemProps = {
  ...it.defaultItemProps,
  innerComponent: "div"
};
Ae.inheritNestedProps = [...it.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let ks = class extends Nt {
  _getItem(t, e, n) {
    return Ae.getTreeItem(t, super._getItem(t, e, n));
  }
};
ks.NAME = "tree";
ks.inheritNestedProps = [...Nt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
ks.defaultItemProps = {
  ...Nt.defaultProps,
  innerComponent: "div"
};
function rl(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && rl(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class yd extends Wa {
  constructor() {
    super(...arguments), this._menu = F(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
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
        className: k(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...rl(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          f(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return f(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return R({
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
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ u(ks, { hover: !0, ...n }) : /* @__PURE__ */ u(Nt, { ...n });
  }
}
function Fs(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Fs(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let xr = class extends lt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = F(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), f.extend(this.state, {
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
        const r = Fs(i);
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
    else if (await Ys(n || 500), this._abort !== t || (r = await bn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = Fs(r);
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
    return t.Trigger || (t.multiple ? gd : _d);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = f.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = f.unique(t)), e.filter((n) => !this.isEmptyValue(n));
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
        const a = Fs(Array.isArray(r) ? r : this.state.items);
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
  ...lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
xr.Pop = yd;
class ol extends H {
}
ol.NAME = "Picker";
ol.Component = xr;
class al extends at {
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
    return i && n.middleware.push(Tn()), r && n.middleware.push(r === !0 ? es() : es(r)), o && n.middleware.push(ui({ element: this.$arrow[0] })), a && n.middleware.push(En(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = yr(t, e, () => {
      An(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
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
    const e = f(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      f(i.target).data("dismiss") === "popovers" && this.hide();
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
    const e = f('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = f('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
al.NAME = "Popovers";
al.DEFAULT = {
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
class ll extends H {
}
ll.NAME = "SearchBox";
ll.Component = ir;
function Gn(s, t) {
  const [e, n] = tr(s);
  return n === "%" ? t * e / 100 : e;
}
const go = "is-sidebar-resizing", Yn = "has-sidebar-animation";
class cl extends at {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), n = e[0], i = e.width();
    this._container = n;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      gutterWidth: a = tr(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: m,
      minWidth: p = 0,
      maxWidth: g = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, v = _ ? f(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Gn(m || t.width(), i), this._minWidth = Gn(p, i), this._maxWidth = Gn(g, i), this._width = (r ? Rt.get(this._storeID) : null) || this._defaultWidth, this._parent = v[0], v.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let y = t.find(".sidebar-gutter");
    y.length || (y = f('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = y, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (y.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), y.on("click", ".gutter-toggle", () => this.toggle())), c && y.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new ys(y, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, v.addClass(go).removeClass(Yn);
      },
      onMove: (b, w) => {
        Math.abs(w.deltaX) < 10 || this.update(this._startWidth + w.deltaX);
      },
      onMoveEnd: () => {
        d && v.addClass(Yn), v.removeClass(go);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      v.addClass(Yn);
    }));
  }
  destroy() {
    var t;
    super.destroy(), this._raf && cancelAnimationFrame(this._raf), this._$gutter.off("click dbclick"), (t = this._moveable) == null || t.destroy();
  }
  toggle(t) {
    t = t ?? !!this._width, t && (this._widthBack = this._width), this.update(t ? 0 : this._widthBack || this._defaultWidth);
  }
  update(t, e) {
    if (!e) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this.update(t, !0);
      });
      return;
    }
    if (t = t < this._minWidth ? 0 : Math.min(this._maxWidth, t, this._container.clientWidth), t === this._width)
      return;
    const { preserve: n, onResize: i, onToggle: r } = this.options, o = !this._width, a = !t;
    this._width = t, n && Rt.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, n = !e;
    this.$element.toggleClass("is-collapsed", n), f(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", n);
  }
}
cl.NAME = "Sidebar";
cl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class hl extends H {
}
hl.NAME = "Toolbar";
hl.Component = ot;
me(dh);
const vd = '[data-toggle="tooltip"]';
class Lt extends mt {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: k("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Lt.NAME = "Tooltip";
Lt.DEFAULT = {
  ...mt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
f(document).on(`click${Lt.NAMESPACE} mouseenter${Lt.NAMESPACE}`, vd, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data(Lt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Lt.ensure(t, { show: Lt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class $r extends H {
}
$r.NAME = "Tree";
$r.Component = Ae;
$r.replace = !0;
class dl extends H {
}
dl.NAME = "SearchTree";
dl.Component = ks;
class Sr extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? Oc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = f('<ul class="file-list py-1"></ul>');
    const l = f(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = f(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const m = f(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = f(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = f(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = f(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
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
    this.$input = f("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
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
    return this.addFile(t), f('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return f(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Lt(r, { title: e }), r;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Lt(r, { title: e })), r;
    }
    return f("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return f(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return f(`<span class="file-size text-gray">${Hc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = f('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = f(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = f('<div class="input-group input-rename-container hidden"></div>'), o = f("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
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
    }), a = f("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = f("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = f('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Sr.NAME = "Upload";
Sr.DEFAULT = {
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
class ul extends Sr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = f(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(f('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = f('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = f('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = f(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = f(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = f('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(f(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = f('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      f('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = f(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return f('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(f(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = f("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
ul.NAME = "UploadImgs";
ul.DEFAULT = {
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
        /* @__PURE__ */ u("div", { className: k("card-content", r), children: [
          e ? /* @__PURE__ */ u("div", { className: k("card-subtitle", n), children: /* @__PURE__ */ u(O, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ u(O, { content: i }, "extraContent") : null
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
    return /* @__PURE__ */ u("div", { className: k("card-heading", m), children: [
      e ? /* @__PURE__ */ u(q, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ u("span", { className: k("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ u(p, { className: k("card-title", o), href: a, ...l, children: /* @__PURE__ */ u(O, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ u("span", { className: k("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ u(O, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ u("div", { className: k("card-header", n), children: /* @__PURE__ */ u(O, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ u("div", { className: k("card-footer", n), children: [
        /* @__PURE__ */ u(O, { content: e }, "footer"),
        ot.render(i, [t], { key: "foot-actions", className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ot.render(t.actions, [t], { key: "actions", className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = R({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ u(te, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = k("item-avatar", n.className), /* @__PURE__ */ u(gs, { ...n }, "avatar");
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
}, Pe = class extends te {
};
Pe.NAME = "card-list";
Pe.TAG = "div";
Pe.ItemComponents = {
  ...te.ItemComponents,
  default: Ti,
  item: Ti
};
Pe.defaultItemProps = {
  component: "div"
};
class fl extends H {
}
fl.NAME = "Card";
fl.Component = Ti;
class pl extends H {
}
pl.NAME = "CardList";
pl.Component = Pe;
class Nr extends kt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Nr.NAME = "ContextMenu";
Nr.DEFAULT = {
  ...kt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function bd(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ u("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ u(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ u("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ u("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ u("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ u("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ u("div", { class: "more-vert" }) }) }) : null
        ] }),
        f.isPlainObject(l) && l.html ? /* @__PURE__ */ u(he, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ u("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const Xn = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), _o = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], Ms = "Dashboard:Block.cache:";
let ml = class extends W {
  constructor(t) {
    super(t), this._ref = F(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      Nr.show({
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
        const i = await f.fetch(e, [t, n], ({ url: r }) => ({ url: Q(r, n), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ u("div", { class: "panel center text-danger p-5", children: [
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
    return !!f(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Rt.set(`${Ms}${n}:${t}`, e) : Rt.session.set(`${Ms}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? Rt.get(`${Ms}${e}:${t}`) : Rt.session.get(`${Ms}${t}`);
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
        menu: g = n,
        content: _,
        ...v
      } = o, [y, b] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: b,
        left: Math.min(h, i - y),
        top: m,
        fetch: p,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
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
      t.sort((l, c) => _o(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => _o(a[1], l[1]));
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
    this._draggable = new Sn(t, {
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
    this.loadNext(), f(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), f(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ u("div", { class: "dashboard", children: /* @__PURE__ */ u(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ u(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [g, _, v, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ u(
              bd,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: n * _,
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
ml.defaultProps = {
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
class gl extends H {
}
gl.NAME = "Dashboard";
gl.Component = ml;
var qt, Gt;
class yo extends W {
  constructor(e) {
    super(e);
    U(this, qt, void 0);
    U(this, Gt, void 0);
    j(this, qt, 0), j(this, Gt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (L(this, qt) && cancelAnimationFrame(L(this, qt)), j(this, qt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), j(this, qt, 0);
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
    e && (j(this, Gt, typeof e == "string" ? document : e.current), L(this, Gt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), L(this, Gt) && L(this, Gt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ u(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ u(
          "div",
          {
            className: "scrollbar-bar",
            style: _,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
qt = new WeakMap(), Gt = new WeakMap();
const rn = /* @__PURE__ */ new Map(), on = [];
function _l(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && rn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  rn.set(e, s), t != null && t.buildIn && !on.includes(e) && on.push(e);
}
function Tt(s, t) {
  _l(s, t);
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
function yl(s) {
  return rn.delete(s);
}
function wd(s) {
  if (typeof s == "string") {
    const t = rn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function vl(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = wd(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && vl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Cd(s = [], t = !0) {
  return t && on.length && s.unshift(...on), s != null && s.length ? vl([], s, /* @__PURE__ */ new Set()) : [];
}
function bl() {
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
function kd(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function vo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Jn(s, t = !1) {
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
function xd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = vo(b, 0), b < 1 && (b = Math.round(b * n)), b), d = {
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
  }, p = [], g = {};
  let _ = !1;
  const v = [], y = {};
  if (e.forEach((b) => {
    const { colTypes: w, onAddCol: x } = b;
    w && Object.entries(w).forEach(([C, S]) => {
      y[C] || (y[C] = []), y[C].push(S);
    }), x && v.push(x);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: w = "", name: x } = b, C = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: w
    }, S = {
      name: x,
      type: w,
      setting: C,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, M = y[w];
    M && M.forEach((z) => {
      const ct = typeof z == "function" ? z.call(s, C) : z;
      ct && Object.assign(C, ct, b);
    });
    const { fixed: P, flex: A, minWidth: T = r, maxWidth: I = o } = C, V = vo(C.width || i, i);
    S.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, S.width = kd(V < 1 ? Math.round(V * n) : V, T, I), v.forEach((z) => z.call(s, S)), p.push(S), g[S.name] = S;
    const E = P ? P === "left" ? h : m : d;
    E.list.push(S), E.totalWidth += S.width, E.width = E.totalWidth, S.flex && E.flexList.push(S), typeof C.order == "number" && (_ = !0);
  }), _) {
    const b = (w, x) => (w.setting.order ?? 0) - (x.setting.order ?? 0);
    p.sort(b), h.list.sort(b), d.list.sort(b), m.list.sort(b);
  }
  return Jn(h, !0), Jn(m, !0), d.widthSetting = n - h.width - m.width, Jn(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function $d({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var V;
  const p = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...o
  }, { align: g, border: _ } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...r
  }, y = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], b = ["dtable-cell-content", s.setting.cellClass], w = (V = n.data) == null ? void 0 : V[s.name], x = [a ?? w ?? ""], C = i ? i(x, { row: n, col: s, value: w }, xt) : x, S = [], M = [], P = {}, A = {};
  let T = "div";
  C == null || C.forEach((E) => {
    if (typeof E == "object" && E && !rt(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const z = E.outer ? S : M;
      E.html ? z.push(/* @__PURE__ */ u("div", { className: k("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : v, E.style), E.className && (E.outer ? y : b).push(E.className), E.children && z.push(E.children), E.attrs && Object.assign(E.outer ? P : A, E.attrs)), E.tagName && !E.outer && (T = E.tagName);
    } else
      M.push(E);
  });
  const I = T;
  return /* @__PURE__ */ u(
    "div",
    {
      className: k(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...P,
      children: [
        M.length > 0 && /* @__PURE__ */ u(I, { className: k(b), style: v, ...A, children: M }),
        S
      ]
    }
  );
}
function Zn({
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
  CellComponent: d = $d,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(s) ? s : [s], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ u(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ u("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, b) => {
        const w = t.length;
        return t.forEach((x, C) => {
          v.push(
            /* @__PURE__ */ u(
              d,
              {
                className: k(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  C ? "" : "is-first-in-row",
                  C === w - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === g - 1 ? "is-last-row" : ""
                ),
                col: x,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${x.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function wl({
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
  i.list.length && (p = /* @__PURE__ */ u(
    Zn,
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
  let g = null;
  r.list.length && (g = /* @__PURE__ */ u(
    Zn,
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
  let _ = null;
  return o.list.length && (_ = /* @__PURE__ */ u(
    Zn,
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
  )), /* @__PURE__ */ u(
    "div",
    {
      className: k("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        p,
        g,
        _,
        m
      ]
    }
  );
}
var Tr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, N = (s, t, e) => (Tr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), D = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Y = (s, t, e, n) => (Tr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ht = (s, t, e) => (Tr(s, t, "access private method"), e), ve, je, le, Dt, ie, tt, At, It, Ke, zs, an, os, Ut, qe, Ge, Ei, Cl, Mi, kl, Ii, xl, Ai, $l, Vs, Pi, Dn, ln, Li, Di, Ri, Wi, Ye, Us, cn, Er, Mr, Sl, Hi, Nl;
let Ir = class extends W {
  constructor(t) {
    super(t), D(this, Ei), D(this, Mi), D(this, Ii), D(this, Ai), D(this, Vs), D(this, Ye), D(this, cn), D(this, Mr), D(this, Hi), this.ref = F(), D(this, ve, 0), D(this, je, void 0), D(this, le, !1), D(this, Dt, void 0), D(this, ie, void 0), D(this, tt, []), D(this, At, void 0), D(this, It, /* @__PURE__ */ new Map()), D(this, Ke, {}), D(this, zs, void 0), D(this, an, []), D(this, os, { in: !1 }), this.updateLayout = () => {
      N(this, ve) && cancelAnimationFrame(N(this, ve)), Y(this, ve, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, ve, 0);
      }));
    }, D(this, Ut, (e, n) => {
      n = n || e.type;
      const i = N(this, It).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), D(this, qe, (e) => {
      N(this, Ut).call(this, e, `window_${e.type}`);
    }), D(this, Ge, (e) => {
      N(this, Ut).call(this, e, `document_${e.type}`);
    }), D(this, Dn, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, tt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), D(this, ln, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), D(this, Li, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), N(this, tt).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of N(this, tt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), D(this, Di, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), D(this, Ri, (e) => {
      const n = f(e.target).closest(".dtable-cell");
      if (!n.length)
        return ht(this, Ye, Us).call(this, !1);
      ht(this, Ye, Us).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), D(this, Wi, () => {
      ht(this, Ye, Us).call(this, !1);
    }), Y(this, je, t.id ?? `dtable-${Ot()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, ie, Object.freeze(Cd(t.plugins))), N(this, ie).forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(N(this, Ke), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ht(this, cn, Er).call(this), N(this, tt).forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, At)) == null ? void 0 : t.options) || N(this, Dt) || bl();
  }
  get plugins() {
    return N(this, tt);
  }
  get layout() {
    return N(this, At);
  }
  get id() {
    return N(this, je);
  }
  get data() {
    return N(this, Ke);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, os);
  }
  componentWillReceiveProps() {
    Y(this, Dt, void 0);
  }
  componentDidMount() {
    N(this, le) ? this.forceUpdate() : ht(this, Vs, Pi).call(this), N(this, tt).forEach((n) => {
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([r, o]) => {
        o && this.on(r, o);
      }));
    }), this.on("click", N(this, Li)), this.on("keydown", N(this, Di));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", N(this, Ri)), this.on("mouseleave", N(this, Wi)));
    const { responsive: e } = t;
    if (e)
      if (typeof ResizeObserver < "u" && e !== "window") {
        const n = new ResizeObserver(this.updateLayout);
        if (Y(this, zs, n), typeof e == "string" && e !== "parent")
          f(e).each((i, r) => n.observe(r));
        else {
          const { parent: i } = this;
          i && n.observe(i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, tt).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    N(this, le) ? ht(this, Vs, Pi).call(this) : N(this, tt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, zs)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of N(this, It).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), N(this, qe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), N(this, Ge)) : t.removeEventListener(n, N(this, Ut));
    N(this, tt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), N(this, ie).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), Y(this, Ke, {}), N(this, It).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, qe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Ge)) : (r = this.element) == null || r.addEventListener(t, N(this, Ut)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, qe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Ge)) : (o = this.element) == null || o.removeEventListener(t, N(this, Ut)));
  }
  emitCustomEvent(t, e) {
    N(this, Ut).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (h = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), e == null || e.call(this, !0);
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
    if (!N(this, Dt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      Y(this, At, void 0);
    else if (n === "options") {
      if (Y(this, Dt, void 0), !N(this, At))
        return;
      Y(this, At, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = f(e).closest(".dtable-cell");
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
    return Z(N(this, an), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = ht(this, Hi, Nl).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      const g = !t.rows.length;
      if (m.push(t.className, g ? "dtable-is-empty" : ""), c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      N(this, tt).forEach((_) => {
        var y;
        const v = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), g && d ? (delete h.height, p.push(
        /* @__PURE__ */ u("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ u(O, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        ht(this, Ei, Cl).call(this, t),
        ht(this, Mi, kl).call(this, t),
        ht(this, Ii, xl).call(this, t)
      ), t.scrollable && p.push(ht(this, Ai, $l).call(this, t))), N(this, tt).forEach((_) => {
        var y;
        const v = (y = _.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && m.push(v.className), v.children && p.push(v.children));
      });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        id: N(this, je),
        className: k(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
ve = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
an = /* @__PURE__ */ new WeakMap();
os = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
Cl = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ u(
      wl,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, Dn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    da,
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
kl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ u(
    wl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, Dn),
      children: l
    },
    "body"
  );
};
Ii = /* @__PURE__ */ new WeakSet();
xl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    da,
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
Ai = /* @__PURE__ */ new WeakSet();
$l = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ u(
      yo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, ln),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ u(
      yo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, ln),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Vs = /* @__PURE__ */ new WeakSet();
Pi = function() {
  var s;
  Y(this, le, !1), (s = this.options.afterRender) == null || s.call(this), N(this, tt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Dn = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakSet();
Us = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = f(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, os);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), Y(this, os, i);
};
cn = /* @__PURE__ */ new WeakSet();
Er = function() {
  if (N(this, Dt))
    return !1;
  const t = { ...bl(), ...N(this, ie).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return Y(this, Dt, t), Y(this, tt, N(this, ie).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), Y(this, an, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Mr = /* @__PURE__ */ new WeakSet();
Sl = function() {
  var P, A;
  const { plugins: s } = this;
  let t = N(this, Dt);
  const e = {
    flex: /* @__PURE__ */ u("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ u("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((T) => {
    var V;
    const I = (V = T.beforeLayout) == null ? void 0 : V.call(this, t);
    I && (t = { ...t, ...I }), Object.assign(e, T.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      Y(this, le, !0);
      return;
    }
  }
  const r = xd(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (T, I, V) => {
    var z, ct;
    const E = { data: V ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (V || (E.lazy = !0), c.push(E), ((z = t.onAddRow) == null ? void 0 : z.call(this, E, I)) !== !1) {
      for (const bt of s)
        if (((ct = bt.onAddRow) == null ? void 0 : ct.call(this, E, I)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      d(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, I) => {
      typeof T == "object" ? d(`${T[a] ?? ""}`, I, T) : d(`${T ?? ""}`, I);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, h);
    T && (h = T);
  }
  for (const T of s) {
    const I = (P = T.onAddRows) == null ? void 0 : P.call(this, h);
    I && (h = I);
  }
  h.forEach((T, I) => {
    m[T.id] = T, T.index = I, T.top = T.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const w = h.length * l, x = _ + v + w;
  if (typeof y == "function" && (y = y.call(this, x)), y === "auto")
    b = x;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, x));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      b = T.clientHeight;
    else {
      b = 0, Y(this, le, !0);
      return;
    }
  } else
    b = y;
  const C = b - _ - v, S = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: w,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: r
  }, M = (A = t.onLayout) == null ? void 0 : A.call(this, S);
  M && Object.assign(S, M), s.forEach((T) => {
    if (T.onLayout) {
      const I = T.onLayout.call(this, S);
      I && Object.assign(S, I);
    }
  }), Y(this, At, S);
};
Hi = /* @__PURE__ */ new WeakSet();
Nl = function() {
  (ht(this, cn, Er).call(this) || !N(this, At)) && ht(this, Mr, Sl).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((g) => {
    g.left = n, n += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && p && (_.data = p([_.id])[0], _.lazy = !1), m.push(_);
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
Ir.addPlugin = _l;
Ir.removePlugin = yl;
class Tl extends W {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ u("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ u("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Tl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function El(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ u("a", { href: Q(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Ar(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : Q(s, e);
}
function Ml(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), st(e, s, n ?? e))) : n ?? e;
}
function Il(s, t) {
  const { link: e } = t.col.setting, n = El(e, t, s[0]);
  return n && (s[0] = n), s;
}
function Al(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Ar(e, t, s[0])), s;
}
function Pl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function Ll(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = Ml(n, t, s[0], i), s;
}
function Oi(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Ar(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Sd = {
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
        return s[0] = e === "bar" ? /* @__PURE__ */ u(
          Tl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ u(
          hr,
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
    if (e && (s = Ll(s, t, e)), s = Pl(s, t), s = Al(s, t), n ? s = Oi(s, t) : s = Il(s, t), i) {
      let r = t.value;
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = Q(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, Nd = Tt(Sd, { buildIn: !0 }), Td = {
  html: { component: he }
}, Ed = {
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
        component: he,
        props: { html: Q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Td[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && f.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ u(h, { ...d }) };
    }), s;
  }
}, Md = Tt(Ed);
function Id(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !Dl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Ad(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Dl() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Pd() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Ld(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function bo(s, t, e = !1) {
  return /* @__PURE__ */ u(xn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const wo = 'input[type="checkbox"],.dtable-checkbox', Dd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: bo
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
    toggleCheckRows: Id,
    isRowChecked: Ad,
    isAllRowChecked: Dl,
    getChecks: Pd,
    toggleCheckable: Ld
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
        /* @__PURE__ */ u("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: bo(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ u("div", { children: r.join(", ") })
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
    const e = t.closest(wo);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = f(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(wo).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Rd = Tt(Dd), Wd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new _s(`DTable:${this.id}`) };
  }
}, Hd = Tt(Wd);
var Rl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Rl || {});
function hn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = hn.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? hn.call(this, t.parent).level + 1 : 0, t;
}
function Od(s) {
  return s !== void 0 ? hn.call(this, s) : this.data.nestedMap;
}
function Bd(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Wl.call(this)), t) {
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
    state: { nestedState: { ...e } }
  }, () => {
    const { onNestedChange: i, preserveNested: r } = this.options;
    i == null || i.call(this), r && this.data.store.set("nestedState", e);
  });
}
function Wl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Hl(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Hl(s, t, o.children, n + 1)));
  }
  return t;
}
function Ol(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Ol(s, r, e, n);
  }), i;
}
function Bl(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Bl(s, r.parent, e, n, i);
}
const Is = "dtable-nested-toggle", Fd = {
  name: "nested",
  plugins: [Hd],
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
        const o = Ol(this, i, r, n);
        o != null && o.parent && Bl(this, o.parent, r, n, e);
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
    getNestedInfo: Od,
    toggleRow: Bd,
    isAllCollapsed: Wl,
    getNestedRowInfo: hn
  },
  onCreate() {
    let { defaultNestedState: s } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (s = t);
    }
    this.state.nestedState = s || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear();
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
    ), Hl(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ u("a", { className: `${Is} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ u("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ u("a", { className: `${Is} state`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${Is}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Is}`)))
      return this.toggleRow(t), !0;
  }
}, zd = Tt(Fd);
function Qn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: k(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ u(gs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ u("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ u("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ u("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ u("span", { children: d })
    ] }));
  return s;
}
const Vd = {
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
}, Ud = Tt(Vd, { buildIn: !0 }), jd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ u("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ u("a", { className: "dtable-sort-link", href: Q(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, Kd = Tt(jd, { buildIn: !0 }), ti = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, qd = {
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
}, Gd = Tt(qd), Yd = {
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
        const { index: g } = m, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: m });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - p), b = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && b <= 1)
          return;
        let w = 0;
        for (let x = 0; x < y; x++) {
          w += l[p + x].realWidth;
          for (let C = 0; C < b; C++) {
            const S = `C${g + x}R${h + C}`;
            S !== _ && n.add(S);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: b,
          width: w,
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
}, Xd = Tt(Yd), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Rl,
  avatar: Ud,
  cellspan: Xd,
  checkable: Rd,
  custom: Md,
  group: Gd,
  nested: zd,
  renderDatetime: Ml,
  renderDatetimeCell: Ll,
  renderFormat: Ar,
  renderFormatCell: Al,
  renderHtmlCell: Oi,
  renderLink: El,
  renderLinkCell: Il,
  renderMapCell: Pl,
  rich: Nd,
  sortType: Kd
}, Symbol.toStringTag, { value: "Module" }));
class xs extends H {
}
xs.NAME = "DTable";
xs.Component = Ir;
xs.definePlugin = Tt;
xs.removePlugin = yl;
xs.plugins = Jd;
class Pr extends K {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      minWidth: n,
      maxWidth: i,
      color: r
    } = t;
    return R(super._getProps(t), {
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
      actions: d,
      subCols: h
    } = t;
    return [
      /* @__PURE__ */ u("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ u("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ u(q, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ u("span", { className: k("as-prefix", n), children: /* @__PURE__ */ u(O, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ u("span", { className: k("as-title", r), children: /* @__PURE__ */ u(O, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ u("span", { className: k("as-subtitle", a), children: /* @__PURE__ */ u(O, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ u(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        ot.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ u("div", { className: "kanban-header-sub-cols", children: h.map((m, p) => /* @__PURE__ */ u(Pr, { index: p, ...m }, m.name)) }, "subs") : null
    ];
  }
}
function Zd(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ u("div", { className: "kanban-header", children: [
    /* @__PURE__ */ u("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ u("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ u(Pr, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
class Fl extends W {
  constructor() {
    super(...arguments), this._listRef = F(), this._renderItem = (t) => {
      const { itemRender: e, lane: n, name: i } = this.props, r = e.call(this, { item: t, lane: n, col: i });
      return typeof r == "object" && r.html && f.extend(r, {}), r;
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      f(this._listRef.current).trigger("laneColResize", e[0]);
    }), this._ob.observe(t));
  }
  componentWillUnmount() {
    var t;
    (t = this._ob) == null || t.disconnect();
  }
  render(t) {
    const { items: e } = t, {
      width: n,
      minWidth: i,
      maxWidth: r,
      color: o,
      content: a,
      contentClass: l,
      itemRender: c,
      watchSize: d
    } = t;
    return /* @__PURE__ */ u("div", { className: "kanban-lane-col", style: {
      "--kanban-col-color": o,
      "--kanban-col-width": n,
      minWidth: i,
      maxWidth: r
    }, children: [
      a ? /* @__PURE__ */ u("div", { className: k("kanban-col-content", l), children: /* @__PURE__ */ u(O, { content: a, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ u(
        Pe,
        {
          forwardRef: d ? this._listRef : void 0,
          className: "kanban-items scrollbar-thin scrollbar-hover",
          itemProps: { className: "kanban-item" },
          items: e,
          itemRender: c ? this._renderItem : void 0
        },
        "list"
      )
    ] });
  }
}
Fl.defaultProps = {
  watchSize: !0
};
class Qd extends K {
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
    return R(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: e,
        minHeight: n,
        maxHeight: i
      }
    });
  }
  _renderCol(t, e, n, i) {
    return /* @__PURE__ */ u(Fl, { itemRender: n, lane: t, items: i[e.name], ...e }, e.name);
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
      /* @__PURE__ */ u("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ u("div", { className: k("kanban-lane-title", i), children: /* @__PURE__ */ u(O, { content: n }) }, "title"),
        ot.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ u("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function tu(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ u("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ u(Qd, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
const dt = 12, eu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function Co(s, t) {
  return t === "top" ? { x: s.x + s.width / 2, y: s.y } : t === "left" ? { x: s.x, y: s.y + s.height / 2 } : t === "right" ? { x: s.x + s.width, y: s.y + s.height / 2 } : { x: s.x + s.width / 2, y: s.y + s.height };
}
function su(s, t) {
  return (s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y);
}
function nu(s, t, e, n) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = n ? [n] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = Co(s, c), m = Co(t, d), p = su(h, m) * (eu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, n = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: n,
    fromPos: a,
    toPos: l
  };
}
function iu(s, t) {
  return { x: (s.x + t.x) / 2, y: (s.y + t.y) / 2 };
}
function zl(s, t) {
  return {
    x: Math.min(s.x, t.x),
    y: Math.min(s.y, t.y),
    width: Math.abs(s.x - t.x),
    height: Math.abs(s.y - t.y)
  };
}
function ko(s, t, e) {
  const n = {
    id: `marker-${t}-${e}-${s}`,
    orient: "auto",
    markerUnits: "strokeWidth",
    refX: t === "start" ? 0 : 6,
    refY: 3,
    markerWidth: 6,
    markerHeight: 6,
    path: {
      d: "",
      fill: "currentColor"
    }
  };
  return s === "arrow" ? t === "start" ? n.path.d = "M6,0 L6,6 L0,3 z" : n.path.d = "M0,0 L0,6 L6,3 z" : s === "dot" ? n.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : s === "square" ? n.path.d = "M0,0 L0,6 L6,6 L6,0 z" : s === "diamond" && (n.path.d = "M3,0 L6,3 L3,6 L0,3 z"), n;
}
function ru(s, t, e, n, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = zl(s, t), d = dt - o, h = dt - a;
  if (i === "curve") {
    const m = l * 0.7, p = c * 0.7, g = r * 2, _ = {
      a1x: s.x + (e === "left" ? -g : e === "right" ? g : 0),
      a1y: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      ax: s.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: s.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (n === "left" ? -(m - g) : n === "right" ? m - g : 0),
      by: t.y + (n === "top" ? -(p - g) : n === "bottom" ? p - g : 0),
      b1x: t.x + (n === "left" ? -g : n === "right" ? g : 0),
      b1y: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const m = iu(s, t), p = l / 2, g = c / 2, _ = {
      ax: s.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (n === "left" ? -p : n === "right" ? p : 0),
      by: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${s.x + d} ${s.y + h} L ${t.x + d} ${t.y + h}`;
}
function ou(s) {
  const { fromRect: t, toRect: e } = s, n = `${s.from}-${s.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = nu(i, r), d = zl(l, c), { x: h, y: m, width: p, height: g } = d;
  l.x += dt - h, l.y += dt - m, c.x += dt - h, c.y += dt - m;
  const {
    weight: _ = 1,
    fromPoint: v,
    toPoint: y = "arrow"
  } = s, b = {
    left: `${0 - dt}px`,
    top: `${0 - dt}px`,
    width: `${p + 2 * dt}px`,
    height: `${g + 2 * dt}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": v && v !== "none" ? `url(#marker-start-${n}-${v})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${n}-${y})` : void 0,
    d: ru(l, c, o, a, s.shape, _)
  }, x = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, C = {
    width: p + 2 * dt,
    height: g + 2 * dt
  }, S = [];
  return s.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : s.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), v && v !== "none" && S.push(ko(v, "start", n)), y && y !== "none" && S.push(ko(y, "end", n)), {
    x: h,
    y: m,
    width: p,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: w,
    svgPathBackProps: x,
    svgProps: C,
    markers: S,
    padding: dt
  };
}
class Vl extends W {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: n, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: m, svgProps: p, markers: g, svgPathProps: _, svgPathBackProps: v, fromPos: y } = ou(t);
    return /* @__PURE__ */ u("div", { className: k("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: m, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ u("svg", { ...p, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        g.length ? /* @__PURE__ */ u("defs", { children: g.map(({ path: b, id: w, ...x }) => /* @__PURE__ */ u("marker", { ...x, id: w, children: /* @__PURE__ */ u("path", { ...b }) }, w)) }) : null,
        /* @__PURE__ */ u("path", { ...v }),
        /* @__PURE__ */ u("path", { ..._ })
      ] }),
      /* @__PURE__ */ u("div", { className: "kanban-link-start-point", style: { left: y.x - d, top: y.y - d } }),
      o ? /* @__PURE__ */ u("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ u("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ u("i", { className: "close" }) }) }) : null,
      n ? /* @__PURE__ */ u("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: n }) : null
    ] });
  }
}
class au extends W {
  constructor() {
    super(...arguments), this._ref = F(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    f(t).on("laneColResize.kanban", () => {
      this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && f(t).off(".kanban"), this._raf && cancelAnimationFrame(this._raf);
  }
  componentDidUpdate(t) {
    t.links !== this.props.links && this._tryUpdateLayout();
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._idSet], e = f(this._kanban).find(".kanban-body"), { top: n, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`)[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - n, left: c - i, bottom: d - n, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: n, to: i } = t, r = e[n], o = e[i];
    return this._idSet.add(n), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ u(Vl, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${n}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ u("div", { className: "kanban-links", ref: this._ref, children: e.map((n) => this._renderLink(n)) });
  }
}
const As = ".kanban";
class lu extends W {
  constructor() {
    super(...arguments), this._ref = F(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const n = ".kanban-item,.kanban-link-editor-from";
    f(e).on(`mouseenter${As}`, n, (i) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const r = f(i.target).closest(n), o = r.attr("z-key");
      this.state.from === o || r.hasClass("is-dragging") || this.setState({
        from: o,
        to: void 0,
        fromRect: this._getRect(r[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${As}`, n, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${As}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }), this._moveable = new ys(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        f(e).addClass("is-adding-link");
      },
      onMove: (i) => {
        const { top: r, left: o } = this._kanban.getBoundingClientRect(), a = { left: i.clientX - o, top: i.clientY - r };
        let l, c;
        const d = f(i.target).closest(n);
        d.length && l !== this.state.from && (l = d.attr("z-key"), c = this._getRect(d[0])), this.setState({ dragPos: a, to: l, toRect: c });
      },
      onMoveEnd: () => {
        const { from: i, to: r } = this.state, { onAddLink: o } = this.props;
        i !== r && o && i !== void 0 && r !== void 0 && (o == null || o.call(this, i, r)), this._cancelHover(), f(e).removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && f(t).off(As), this._raf && cancelAnimationFrame(this._raf);
  }
  _getRect(t) {
    const e = t.getBoundingClientRect(), { top: n, left: i } = this._kanban.getBoundingClientRect();
    return {
      left: e.left - i,
      top: e.top - n,
      width: e.width,
      height: e.height
    };
  }
  _cancelHover() {
    this.setState({
      from: void 0,
      to: void 0,
      fromRect: void 0,
      dragPos: void 0
    });
  }
  _renderLink(t) {
    const { fromRect: e, toRect: n, from: i, to: r = "", dragPos: o } = t;
    if (!e || !i || !o)
      return null;
    const a = n ? {
      left: n.left,
      top: n.top,
      right: n.left + n.width,
      bottom: n.top + n.height
    } : {
      left: o.left,
      top: o.top,
      right: o.left,
      bottom: o.top
    };
    return /* @__PURE__ */ u(
      Vl,
      {
        from: i,
        to: r,
        lineStyle: "dotted",
        color: "var(--color-primary-500)",
        fromRect: {
          left: e.left,
          top: e.top,
          right: e.left + e.width,
          bottom: e.top + e.height
        },
        toRect: a
      },
      "link"
    );
  }
  render(t, e) {
    const { from: n, fromRect: i, to: r, toRect: o } = e;
    let a, l;
    return n && i && (a = /* @__PURE__ */ u("div", { className: "kanban-link-editor-from not-moveable", "z-key": n, style: i, children: [
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ u("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ u("div", { className: k("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function cu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getCol: n, colProps: i } = t;
  let r = !1;
  const o = [], a = /* @__PURE__ */ new Map();
  return s = s.reduce((l, c, d) => {
    if (i && (c = R({}, i, c)), n) {
      const h = n.call(this, c);
      h !== !1 && (c = h || c);
    }
    return c.deleted || (typeof c.width == "function" && (c = R({}, c, {
      width: c.width.call(this, c)
    })), typeof c.order == "number" ? r = !0 : c.order = d, e == null || e.call(this, c), c.parentName !== void 0 ? o.push(c) : (a.set(c.name, c), l.push(c))), l;
  }, []), o.forEach((l) => {
    const c = a.get(l.parentName);
    c && (c.subCols = Xe(c.subCols, [l], "name"));
  }), r && (s.sort(dn), [...a.values()].forEach((l) => {
    l.subCols && l.subCols.sort(dn);
  })), s;
}
function hu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getLane: n, laneProps: i } = t;
  let r = !1;
  return s = s.reduce((o, a, l) => {
    if (i && (a = R({}, i, a)), n) {
      const c = n.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.height == "function" && (a = R({}, a, {
      height: a.height.call(this, a)
    })), typeof a.order == "number" ? r = !0 : a.order = l, a.color || (a = {
      color: `hsl(${43 * pa(a.name) % 360}deg 40% 50%)`,
      ...a
    }), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && s.sort(dn), s;
}
function xo(s, t, e, n, i) {
  if (!(s != null && s.length))
    return [];
  const { itemProps: r, getItem: o } = n;
  let a = !1;
  return s = s.reduce((l, c) => {
    r && (c = R({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && s.sort(dn), s;
}
function dn(s, t) {
  return s.order - t.order;
}
function Xe(s, t, e) {
  if (!s)
    return t ? [...t] : [];
  const n = [...s];
  if (t) {
    let i = 0;
    const r = n.reduce((o, a, l) => (o.set(a[e], l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = o[e];
      r.has(a) ? n[r.get(a)] = {
        ...n[r.get(a)],
        ...o
      } : n.push({
        order: i++,
        ...o
      });
    });
  }
  return n;
}
function Ul(s, t) {
  return Array.isArray(s) ? s.map((e) => ({
    ...e,
    [t]: String(e[t])
  })) : Object.keys(s).reduce((e, n) => {
    const i = s[n];
    return Object.keys(i).forEach((r) => {
      e.push(...(i[r] || []).map((o) => ({
        ...o,
        lane: n,
        col: r,
        [t]: String(o[t])
      })));
    }), e;
  }, []);
}
function $o(s, t) {
  const { items: e, ...n } = s;
  return {
    items: Ul(e, t),
    ...n
  };
}
function So(s, t, e) {
  const n = Xe(s.lanes, t.lanes, "name"), i = Xe(s.cols, t.cols, "name"), r = Xe(s.links, t.links, e), o = Xe(s.items, Ul(t.items || [], e), e);
  return { lanes: n, cols: i, items: o, links: r };
}
let Rn = class extends K {
  constructor() {
    super(...arguments), this._ref = F(), this._onAddLink = async (t, e) => {
      const { onAddLink: n } = this.props, i = { from: t, to: e, [this.itemKey]: `${t}:${e}` };
      await (n == null ? void 0 : n.call(this, i)) !== !1 && this.updateLink(i);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    };
  }
  get itemKey() {
    return this.props.itemKey || "id";
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
    const { draggable: t } = this.props;
    t && this._ref.current && (this._draggable = new Sn(this._ref.current, f.extend({
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
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = $o(await bn(t, [this], { throws: !0 }), this.itemKey);
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Ur(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this._data.cols.find((e) => e.name === t);
  }
  getLane(t) {
    return this._data.lanes.find((e) => e.name === t);
  }
  getItem(t) {
    return this._data.map.get(t);
  }
  getData() {
    return this._data;
  }
  update(t) {
    return console.log("> Kanban.update", t, this), this.changeState((e) => ({
      changes: So(e.changes || {}, t, this.itemKey)
    }));
  }
  addItem(t, e, n) {
    return this.updateItem(t, e, n);
  }
  updateItem(t, e, n) {
    const i = Array.isArray(t) ? t : [t];
    return this.update({
      items: e || n ? i.map((r) => ({
        ...r,
        lane: e ?? r.lane,
        col: n ?? r.col
      })) : i
    });
  }
  deleteItem(t) {
    return this.updateItem(Array.isArray(t) ? t.map((e) => ({ [this.props.itemKey || "id"]: e, deleted: !0 })) : { [this.itemKey]: t, deleted: !0 });
  }
  updateLane(t) {
    return this.update({
      lanes: Array.isArray(t) ? t : [t]
    });
  }
  addLane(t) {
    return this.updateLane(t);
  }
  deleteLane(t) {
    return this.updateLane(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  updateCol(t) {
    return this.update({
      cols: Array.isArray(t) ? t : [t]
    });
  }
  addCol(t) {
    return this.updateCol(t);
  }
  deleteCol(t) {
    return this.updateCol(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  updateLink(t, e) {
    return this.update({
      links: (Array.isArray(t) ? t : [t]).map((n) => ({
        ...n,
        ...e,
        [this.itemKey]: `${n.from}:${n.to}`
      }))
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData(t) {
    const { data: e } = t, { itemKey: n } = this, { data: i, changes: r } = this.state;
    let o = (i || Ur(e) ? i : $o(e, n)) || {};
    r && (o = So(o, r, n));
    let a = !1;
    const { items: l = [] } = o, c = {}, d = cu.call(this, o.cols, t, (_) => {
      _.parentName !== void 0 && (a = !0);
    }), h = hu.call(this, o.lanes, t, (_) => {
      c[_.name] = d.reduce((v, y) => (y.subCols ? y.subCols.forEach((b) => {
        v[b.name] = [];
      }) : v[y.name] = [], v), {});
    }), m = /* @__PURE__ */ new Set(), p = l.reduce((_, v) => {
      if (v.deleted)
        return m.add(v[n]), _;
      _.set(v[n], v);
      const y = c[v.lane];
      if (y) {
        const b = y[v.col];
        b && b.push(v);
      }
      return _;
    }, /* @__PURE__ */ new Map());
    h.forEach((_) => {
      const v = c[_.name];
      v && d.forEach((y) => {
        var b;
        v[y.name] = xo.call(this, v[y.name], _, y, t), (b = y.subCols) == null || b.forEach((w) => {
          v[w.name] = xo.call(this, v[w.name], _, w, t);
        });
      });
    });
    let { links: g = [] } = o;
    return g = g.reduce((_, v) => (!v.deleted && p.has(v.from) && p.has(v.to) && !m.has(v.from) && !m.has(v.to) && (v[n] === void 0 && (v[n] = `${v.from}:${v.to}`), _.push(v)), _), []), this._data = { cols: d, lanes: h, items: c, map: p, links: g, hasSubCols: a }, this._data;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this._data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    return R(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": t.laneNameWidth,
        "--kanban-cols-gap": t.colsGap ? Jr(t.colsGap) : void 0,
        "--kanban-lanes-gap": t.lanesGap ? Jr(t.lanesGap) : void 0
      }
    });
  }
  _getChildren(t) {
    const e = this._getData(t), { cols: n, lanes: i, items: r, links: o } = e, { editLinks: a } = t;
    return console.log("> Kanban.render", { ...e, kanban: this }), [
      /* @__PURE__ */ u(Zd, { cols: n }, "header"),
      /* @__PURE__ */ u(
        tu,
        {
          itemRender: t.itemRender,
          cols: n,
          lanes: i,
          items: r
        },
        "body"
      ),
      o != null && o.length ? /* @__PURE__ */ u(au, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ u(lu, { onAddLink: this._onAddLink }, "linkEditor") : null,
      t.children
    ];
  }
};
Rn.defaultProps = {
  draggable: !0,
  sticky: !0,
  itemKey: "id"
};
class du extends Rn {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      f(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((n) => ({ collapsed: !n.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  render(t) {
    const { heading: e, toggleFromHeading: n } = t, { collapsed: i } = this.state, r = R({ className: "kanban-heading", onClick: n ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e);
    return /* @__PURE__ */ u("div", { className: k("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ u(Qs, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let jl = class extends K {
  constructor(t) {
    super(t), this.state = {}, this._ref = F(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new ys(this._ref.current, f.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !f(n.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? f(e) : f(this._ref.current).parent()).each((r, o) => {
        n.observe(o);
      }), this._rob = n;
    }
    console.timeEnd("kanbanList.init");
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(t)) == null ? void 0 : e.current;
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = f(t), n = e.width(), i = e.height();
    this.setState({ width: n, height: i });
  }
  _tryUpdateLayout() {
    this._layoutTimer && cancelAnimationFrame(this._layoutTimer), this._layoutTimer = requestAnimationFrame(() => {
      this.updateLayout(), this._layoutTimer = 0;
    });
  }
  _getClassName(t) {
    return ["kanban-list", t.className, t.sticky ? "has-sticky" : "", t.moveable ? "is-moveable" : "", t.scrollbarHover ? "scrollbar-hover" : ""];
  }
  _getProps(t) {
    const { width: e, height: n } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof n == "function" ? n.call(this) : n, { width: o, height: a } = this.state ?? {};
    return R(super._getProps(t), {
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
        const r = String(n.key ?? i);
        let o = this._kanbanRefs.get(r);
        o || (o = F(), this._kanbanRefs.set(r, o));
        const a = n.heading !== void 0 || n.type === "group" ? du : Rn;
        return /* @__PURE__ */ u(a, { ref: o, sticky: t.sticky, ...n }, r);
      }),
      t.children
    ];
  }
};
jl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Lr extends H {
}
Lr.NAME = "Kanban";
Lr.replace = !0;
Lr.Component = Rn;
class Dr extends H {
}
Dr.NAME = "KanbanList";
Dr.replace = !0;
Dr.Component = jl;
var Kl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, No = (s, t, e) => (Kl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), uu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, To = (s, t, e, n) => (Kl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), be;
const fu = "nav", js = '[data-toggle="tab"]', pu = "active";
class ql extends at {
  constructor() {
    super(...arguments), uu(this, be, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(js);
    let i = t ? f(t).closest(js) : n.filter(`.${pu}`);
    if (!i.length && (i = e.find(js).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), No(this, be) && clearTimeout(No(this, be)), To(this, be, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), To(this, be, 0);
    }, 10)));
  }
}
be = /* @__PURE__ */ new WeakMap();
ql.NAME = "Tabs";
f(document).on("click.tabs.zui", js, (s) => {
  s.preventDefault();
  const t = f(s.target), e = t.closest(`.${fu}`);
  e.length && ql.ensure(e).active(t);
});
export {
  f as $,
  Yo as Ajax,
  $a as Avatar,
  Sa as BtnGroup,
  fl as Card,
  pl as CardList,
  Ba as ColorPicker,
  nr as CommonList,
  at as Component,
  H as ComponentFromReact,
  Nr as ContextMenu,
  O as CustomContent,
  da as CustomRender,
  xs as DTable,
  gl as Dashboard,
  Ya as DatePicker,
  Ja as DatetimePicker,
  Sn as Draggable,
  kt as Dropdown,
  K as HElement,
  he as HtmlContent,
  q as Icon,
  Lr as Kanban,
  Dr as KanbanList,
  ga as List,
  rr as Menu,
  Su as Messager,
  od as Modal,
  is as ModalBase,
  Ni as ModalTrigger,
  ys as Moveable,
  el as Nav,
  _a as NestedList,
  sl as Pager,
  nl as Pick,
  ol as Picker,
  mt as Popover,
  Cr as PopoverPanel,
  al as Popovers,
  ua as Portal,
  ka as ProgressCircle,
  W as ReactComponent,
  ll as SearchBox,
  or as SearchMenu,
  dl as SearchTree,
  cl as Sidebar,
  Tu as Sortable,
  ns as TIME_DAY,
  ql as Tabs,
  Ga as TimePicker,
  hl as Toolbar,
  Lt as Tooltip,
  $r as Tree,
  Sr as Upload,
  ul as UploadImgs,
  Gh as addDate,
  f as cash,
  k as classes,
  Fe as componentsMap,
  Oc as convertBytes,
  Jc as create,
  G as createDate,
  nh as createPortal,
  F as createRef,
  Wc as deepGet,
  Rc as deepGetPath,
  gu as defineFn,
  Ys as delay,
  Zc as disableScroll,
  _u as dom,
  bn as fetchData,
  Hc as formatBytes,
  st as formatDate,
  Du as formatDateSpan,
  Q as formatString,
  Xo as getClassList,
  Zs as getComponent,
  Qc as getReactComponent,
  si as getZData,
  xt as h,
  Z as i18n,
  Ur as isFetchSetting,
  Cs as isSameDay,
  Fa as isSameMonth,
  Iu as isSameWeek,
  fi as isSameYear,
  Au as isToday,
  Lu as isTomorrow,
  rt as isValidElement,
  Pu as isYesterday,
  R as mergeProps,
  Ot as nextGid,
  tr as parseSize,
  ha as reactComponents,
  me as registerReactComponent,
  la as removeUndefinedProps,
  ts as render,
  ri as renderCustomContent,
  eh as renderCustomResult,
  jr as setZData,
  jc as shareData,
  Rt as store,
  Jo as storeData,
  Zo as takeData,
  Jr as toCssSize
};
//# sourceMappingURL=zui.js.map
