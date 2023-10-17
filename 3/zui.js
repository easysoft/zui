var Bn = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var P = (n, t, e) => (Bn(n, t, "read from private field"), e ? e.call(n) : t.get(n)), U = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, j = (n, t, e, s) => (Bn(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var Fn = (n, t, e) => (Bn(n, t, "access private method"), e);
const Wt = document, Gs = window, Do = Wt.documentElement, fe = Wt.createElement.bind(Wt), Po = fe("div"), Vn = fe("table"), Zl = fe("tbody"), zr = fe("tr"), { isArray: yn, prototype: Lo } = Array, { concat: Ql, filter: Ui, indexOf: Ro, map: Wo, push: tc, slice: Ho, some: ji, splice: ec } = Lo, sc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, nc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ic = /<.+>/, rc = /^\w+$/;
function Ki(n, t) {
  const e = oc(t);
  return !n || !e && !ce(t) && !X(t) ? [] : !e && nc.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && rc.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class bn {
  constructor(t, e) {
    if (!t)
      return;
    if (ri(t))
      return t;
    let s = t;
    if (nt(t)) {
      const i = e || Wt;
      if (s = sc.test(t) && ce(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ic.test(t) ? Bo(t) : ri(i) ? i.find(t) : nt(i) ? u(i).find(t) : Ki(t, i), !s)
        return;
    } else if (pe(t))
      return this.ready(t);
    (s.nodeType || s === Gs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new bn(t, e);
  }
}
const $ = bn.prototype, u = $.init;
u.fn = u.prototype = $;
$.length = 0;
$.splice = ec;
typeof Symbol == "function" && ($[Symbol.iterator] = Lo[Symbol.iterator]);
function ri(n) {
  return n instanceof bn;
}
function Ne(n) {
  return !!n && n === n.window;
}
function ce(n) {
  return !!n && n.nodeType === 9;
}
function oc(n) {
  return !!n && n.nodeType === 11;
}
function X(n) {
  return !!n && n.nodeType === 1;
}
function ac(n) {
  return !!n && n.nodeType === 3;
}
function lc(n) {
  return typeof n == "boolean";
}
function pe(n) {
  return typeof n == "function";
}
function nt(n) {
  return typeof n == "string";
}
function ft(n) {
  return n === void 0;
}
function Ze(n) {
  return n === null;
}
function Oo(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function qi(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
u.isWindow = Ne;
u.isFunction = pe;
u.isArray = yn;
u.isNumeric = Oo;
u.isPlainObject = qi;
function J(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (qi(n)) {
    const s = Object.keys(n);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(n[o], o, n[o]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
u.each = J;
$.each = function(n) {
  return J(this, n);
};
$.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ys(...n) {
  const t = lc(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return Ys(t, u, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (yn(r[o]) || qi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Ys(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Ys;
$.extend = function(n) {
  return Ys($, n);
};
const cc = /\S+/g;
function vn(n) {
  return nt(n) ? n.match(cc) || [] : [];
}
$.toggleClass = function(n, t) {
  const e = vn(n), s = !ft(t);
  return this.each((i, r) => {
    X(r) && J(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(n) {
  return this.toggleClass(n, !0);
};
$.removeAttr = function(n) {
  const t = vn(n);
  return this.each((e, s) => {
    X(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function hc(n, t) {
  if (n) {
    if (nt(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return Ze(e) ? void 0 : e;
      }
      return ft(t) ? this : Ze(t) ? this.removeAttr(n) : this.each((e, s) => {
        X(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
$.attr = hc;
$.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
$.hasClass = function(n) {
  return !!n && ji.call(this, (t) => X(t) && t.classList.contains(n));
};
$.get = function(n) {
  return ft(n) ? Ho.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
$.eq = function(n) {
  return u(this.get(n));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function dc(n) {
  return ft(n) ? this.get().map((t) => X(t) || ac(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = n);
  });
}
$.text = dc;
function Ht(n, t, e) {
  if (!X(n))
    return;
  const s = Gs.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function Ct(n, t) {
  return parseInt(Ht(n, t), 10) || 0;
}
function Br(n, t) {
  return Ct(n, `border${t ? "Left" : "Top"}Width`) + Ct(n, `padding${t ? "Left" : "Top"}`) + Ct(n, `padding${t ? "Right" : "Bottom"}`) + Ct(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Un = {};
function uc(n) {
  if (Un[n])
    return Un[n];
  const t = fe(n);
  Wt.body.insertBefore(t, null);
  const e = Ht(t, "display");
  return Wt.body.removeChild(t), Un[n] = e !== "none" ? e : "block";
}
function Fr(n) {
  return Ht(n, "display") === "none";
}
function zo(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function wn(n) {
  return nt(n) ? (t, e) => zo(e, n) : pe(n) ? n : ri(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
$.filter = function(n) {
  const t = wn(n);
  return u(Ui.call(this, (e, s) => t.call(e, s, e)));
};
function Zt(n, t) {
  return t ? n.filter(t) : n;
}
$.detach = function(n) {
  return Zt(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const fc = /^\s*<(\w+)[^>]*>/, pc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Vr = {
  "*": Po,
  tr: Zl,
  td: zr,
  th: zr,
  thead: Vn,
  tbody: Vn,
  tfoot: Vn
};
function Bo(n) {
  if (!nt(n))
    return [];
  if (pc.test(n))
    return [fe(RegExp.$1)];
  const t = fc.test(n) && RegExp.$1, e = Vr[t] || Vr["*"];
  return e.innerHTML = n, u(e.childNodes).detach().get();
}
u.parseHTML = Bo;
$.has = function(n) {
  const t = nt(n) ? (e, s) => Ki(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
$.not = function(n) {
  const t = wn(n);
  return this.filter((e, s) => (!nt(n) || X(s)) && !t.call(s, e, s));
};
function Bt(n, t, e, s) {
  const i = [], r = pe(t), o = s && wn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && tc.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Fo(n) {
  return n.multiple && n.options ? Bt(Ui.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function mc(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || Xo.test(e.type)) {
      const i = yn(n) ? Wo.call(n, String) : Ze(n) ? [] : [String(n)];
      s ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ft(n) || Ze(n) ? "" : n;
  }) : this[0] && Fo(this[0]);
}
$.val = mc;
$.is = function(n) {
  const t = wn(n);
  return ji.call(this, (e, s) => t.call(e, s, e));
};
u.guid = 1;
function St(n) {
  return n.length > 1 ? Ui.call(n, (t, e, s) => Ro.call(s, t) === e) : n;
}
u.unique = St;
$.add = function(n, t) {
  return u(St(this.get().concat(u(n, t).get())));
};
$.children = function(n) {
  return Zt(u(St(Bt(this, (t) => t.children))), n);
};
$.parent = function(n) {
  return Zt(u(St(Bt(this, "parentNode"))), n);
};
$.index = function(n) {
  const t = n ? u(n)[0] : this[0], e = n ? this : u(t).parent().children();
  return Ro.call(e, t);
};
$.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
$.siblings = function(n) {
  return Zt(u(St(Bt(this, (t) => u(t).parent().children().not(t)))), n);
};
$.find = function(n) {
  return u(St(Bt(this, (t) => Ki(n, t))));
};
const gc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _c = /^$|^module$|\/(java|ecma)script/i, yc = ["type", "src", "nonce", "noModule"];
function bc(n, t) {
  const e = u(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (_c.test(i.type) && Do.contains(i)) {
      const r = fe("script");
      r.text = i.textContent.replace(gc, ""), J(yc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function vc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && bc(t, n.ownerDocument);
}
function Qt(n, t, e, s, i, r, o, a) {
  return J(n, (l, c) => {
    J(u(c), (d, h) => {
      J(u(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, b = e ? d : m;
        vc(g, b ? _.cloneNode(!0) : _, s, i, !b);
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
function wc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    X(s) && (t ? u(s).empty().append(n) : s.innerHTML = n);
  });
}
$.html = wc;
$.appendTo = function(n) {
  return Qt(arguments, this, !0, !1, !0);
};
$.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = u(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
$.before = function() {
  return Qt(arguments, this, !1, !0);
};
$.wrapAll = function(n) {
  let t = u(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
$.wrap = function(n) {
  return this.each((t, e) => {
    const s = u(n)[0];
    u(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
$.insertAfter = function(n) {
  return Qt(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(n) {
  return Qt(arguments, this, !0, !0);
};
$.prepend = function() {
  return Qt(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(n) {
  return Qt(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return u(St(Bt(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
$.next = function(n, t, e) {
  return Zt(u(St(Bt(this, "nextElementSibling", t, e))), n);
};
$.nextAll = function(n) {
  return this.next(n, !0);
};
$.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
$.parents = function(n, t) {
  return Zt(u(St(Bt(this, "parentElement", !0, t))), n);
};
$.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
$.prev = function(n, t, e) {
  return Zt(u(St(Bt(this, "previousElementSibling", t, e))), n);
};
$.prevAll = function(n) {
  return this.prev(n, !0);
};
$.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
$.map = function(n) {
  return u(Ql.apply([], Wo.call(this, (t, e) => n.call(t, e, t))));
};
$.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Ht(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Do;
  });
};
$.slice = function(n, t) {
  return u(Ho.call(this, n, t));
};
const Cc = /-([a-z])/g;
function Gi(n) {
  return n.replace(Cc, (t, e) => e.toUpperCase());
}
$.ready = function(n) {
  const t = () => setTimeout(n, 0, u);
  return Wt.readyState !== "loading" ? t() : Wt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
$.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + Gs.pageYOffset,
    left: t.left + Gs.pageXOffset
  };
};
$.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = Ht(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ht(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && X(i)) {
      const r = u(i).offset();
      e.top -= r.top + Ct(i, "borderTopWidth"), e.left -= r.left + Ct(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Ct(n, "marginTop"),
    left: e.left - Ct(n, "marginLeft")
  };
};
const Vo = {
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
$.prop = function(n, t) {
  if (n) {
    if (nt(n))
      return n = Vo[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
$.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Vo[n] || n];
  });
};
const kc = /^--/;
function Yi(n) {
  return kc.test(n);
}
const jn = {}, { style: xc } = Po, $c = ["webkit", "moz", "ms"];
function Sc(n, t = Yi(n)) {
  if (t)
    return n;
  if (!jn[n]) {
    const e = Gi(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${$c.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in xc)
        return jn[n] = o, !1;
    });
  }
  return jn[n];
}
const Nc = {
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
function Uo(n, t, e = Yi(n)) {
  return !e && !Nc[n] && Oo(t) ? `${t}px` : t;
}
function Tc(n, t) {
  if (nt(n)) {
    const e = Yi(n);
    return n = Sc(n, e), arguments.length < 2 ? this[0] && Ht(this[0], n, e) : n ? (t = Uo(n, t, e), this.each((s, i) => {
      X(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
$.css = Tc;
function jo(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const Ec = /^\s+|\s+$/;
function Ur(n, t) {
  const e = n.dataset[t] || n.dataset[Gi(t)];
  return Ec.test(e) ? e : jo(JSON.parse, e);
}
function Mc(n, t, e) {
  e = jo(JSON.stringify, e), n.dataset[Gi(t)] = e;
}
function Ic(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Ur(this[0], s);
    return e;
  }
  if (nt(n))
    return arguments.length < 2 ? this[0] && Ur(this[0], n) : ft(t) ? this : this.each((e, s) => {
      Mc(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
$.data = Ic;
function Ko(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (n, t) => {
  J(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return Ne(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ce(this[0]) ? Ko(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Ct(this[0], `margin${e ? "Top" : "Left"}`) + Ct(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  $[e] = function(s) {
    if (!this[0])
      return ft(s) ? void 0 : this;
    if (!arguments.length)
      return Ne(this[0]) ? this[0].document.documentElement[`client${t}`] : ce(this[0]) ? Ko(this[0], t) : this[0].getBoundingClientRect()[e] - Br(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Ht(o, "boxSizing");
      o.style[e] = Uo(e, i + (a === "border-box" ? Br(o, !n) : 0));
    });
  };
});
const jr = "___cd";
$.toggle = function(n) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const s = Fr(e);
    (ft(n) ? s : n) ? (e.style.display = e[jr] || "", Fr(e) && (e.style.display = uc(e.tagName))) : s || (e[jr] = Ht(e, "display"), e.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const Kr = "___ce", Xi = ".", Ji = { focus: "focusin", blur: "focusout" }, qo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ac = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zi(n) {
  return qo[n] || Ji[n] || n;
}
function Qi(n) {
  const t = n.split(Xi);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(n, t) {
  if (nt(n)) {
    const [s, i] = Qi(n), r = Zi(s);
    if (!r)
      return this;
    const o = Ac.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Wt.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Xi), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in Ji;
  return this.each((s, i) => {
    e && pe(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Go(n) {
  return n[Kr] = n[Kr] || {};
}
function Dc(n, t, e, s, i) {
  const r = Go(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Yo(n, t) {
  return !t || !ji.call(t, (e) => n.indexOf(e) < 0);
}
function Xs(n, t, e, s, i) {
  const r = Go(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Yo(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Xs(n, t, e, s, i);
}
$.off = function(n, t, e) {
  if (ft(n))
    this.each((s, i) => {
      !X(i) && !ce(i) && !Ne(i) || Xs(i);
    });
  else if (nt(n))
    pe(t) && (e = t, t = ""), J(vn(n), (s, i) => {
      const [r, o] = Qi(i), a = Zi(r);
      this.each((l, c) => {
        !X(c) && !ce(c) && !Ne(c) || Xs(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
$.remove = function(n) {
  return Zt(this, n).detach().off(), this;
};
$.replaceWith = function(n) {
  return this.before(n).remove();
};
$.replaceAll = function(n) {
  return u(n).replaceWith(this), this;
};
function Pc(n, t, e, s, i) {
  if (!nt(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return nt(t) || (ft(t) || Ze(t) ? t = "" : ft(e) ? (e = t, t = "") : (s = e, e = t, t = "")), pe(s) || (s = e, e = void 0), s ? (J(vn(n), (r, o) => {
    const [a, l] = Qi(o), c = Zi(a), d = a in qo, h = a in Ji;
    c && this.each((m, p) => {
      if (!X(p) && !ce(p) && !Ne(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Yo(l, _.namespace.split(Xi)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let b = p;
        if (t) {
          let v = _.target;
          for (; !zo(v, t); )
            if (v === p || (v = v.parentNode, !v))
              return;
          b = v;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return b;
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
        const y = s.call(b, _, _.___td);
        i && Xs(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = s.guid = s.guid || u.guid++, Dc(p, c, l, t, g);
    });
  }), this) : this;
}
$.on = Pc;
function Lc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
$.one = Lc;
const Rc = /\r?\n/g;
function Wc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(Rc, `\r
`))}`;
}
const Hc = /file|reset|submit|button|image/i, Xo = /radio|checkbox/i;
$.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    J(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Hc.test(i.type) || Xo.test(i.type) && !i.checked)
        return;
      const r = Fo(i);
      if (!ft(r)) {
        const o = yn(r) ? r : [r];
        J(o, (a, l) => {
          n += Wc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = u;
function Oc(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function zc(n, t, e) {
  try {
    const s = Oc(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Q(n, ...t) {
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const e = t[0];
    return Object.keys(e).forEach((s) => {
      const i = e[s] ?? "";
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), n;
  }
  for (let e = 0; e < t.length; e++) {
    const s = t[e] ?? "";
    n = n.replace(new RegExp(`\\{${e}\\}`, "g"), `${s}`);
  }
  return n;
}
var tr = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(tr || {});
function Bc(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / tr[e]).toFixed(t) + e);
}
const Fc = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * tr[s];
};
let er = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), jt;
function Vc() {
  return er;
}
function Uc(n) {
  er = n.toLowerCase();
}
function Jo(n, t) {
  jt || (jt = {}), typeof n == "string" && (n = { [n]: t ?? {} }), u.extend(!0, jt, n);
}
function Z(n, t, e, s, i, r) {
  Array.isArray(n) ? jt && n.unshift(jt) : n = jt ? [jt, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || er;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === jt ? `${r}.${t}` : t;
    if (a = zc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function jc(n, t, e, s) {
  return Z(void 0, n, t, e, s);
}
Z.addLang = Jo;
Z.getLang = jc;
Z.getCode = Vc;
Z.setCode = Uc;
Jo({
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
function qr(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function Zo(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => Zo(n, t, s)) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Kc(n, t) {
  if (n) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [s, i] of Object.entries(e))
      if (i.split(",").map((r) => r.trim()).includes(n))
        return s;
  }
  return "text";
}
class Qo {
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
    return this.completed ? e && this.error ? e(this.error) : t(this.data) : (this.success((s) => t(s)), e && this.fail(e)), this;
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
      data: s,
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
    let b = s;
    b && (i && (u.isPlainObject(b) && (b = Object.entries(b)), Array.isArray(b) && (b = b.reduce((v, [w, x]) => (Zo(v, w, x), v), new FormData()))), _.body = b), o && (_.mode = "cors");
    const y = _.headers || {};
    qr(y, "X-Requested-With", "XMLHttpRequest"), r && qr(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((s) => {
      s.call(this, ...e);
    });
  }
  async send() {
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: s, dataFilter: i, throws: r } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let o, a, l;
    try {
      o = await fetch(this.url, this.request), this.response = o;
      const { statusText: c } = o;
      if (o.ok) {
        const d = e || Kc(o.headers.get("Content-Type"), s);
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
u.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : u.extend(t, n);
  const e = new Qo(t);
  return e.send(), e;
};
u.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, u.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
u.post = (n, t, e, s) => u.get(n, t, e, s, "POST");
u.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return u.get(s, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function Cn(n, t = [], e) {
  const s = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    s.url = n;
  else if (typeof n == "object")
    u.extend(s, n);
  else if (typeof n == "function") {
    const o = n(...t);
    if (o instanceof Promise)
      return await o;
    u.extend(s, o);
  }
  e && u.extend(s, typeof e == "function" ? e(s) : e);
  const i = new Qo(s), [r] = await i.send();
  return r;
}
function Gr(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
u.fetch = Cn;
function Ot() {
  return u.guid++;
}
function oi(n, t) {
  if (n === t)
    return !1;
  if (n && t && typeof n == "object" && typeof t == "object") {
    const e = Array.isArray(n), s = Array.isArray(t);
    if (e !== s)
      return !0;
    if (e && s) {
      if (n.length !== t.length)
        return !0;
      for (let o = 0; o < n.length; o++)
        if (oi(n[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(n), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (oi(n[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class Qe {
  /**
   * Creates a new Computed instance.
   * @param compute      The function that computes the value.
   * @param dependencies The dependencies of the computed value.
   */
  constructor(t, e) {
    this._compute = t, this._dependencies = e;
  }
  /**
   * Gets the computed value.
   */
  get value() {
    return this.compute();
  }
  /**
   * Gets the cached value of the computed value.
   */
  get cache() {
    return this._lastDependencies ? this._value : this.compute();
  }
  /**
   * Forces the computed value to be recomputed.
   * @param dependencies The new dependencies to use for recomputing the value.
   * @returns The recomputed value.
   */
  forceCompute(t) {
    return this._lastDependencies = void 0, this.compute(t);
  }
  /**
   * Computes the value of the computed value.
   * @param dependencies The dependencies to use for computing the value.
   * @returns The computed value.
   */
  compute(t) {
    t !== void 0 && (this._dependencies = t), t = this._dependencies, typeof t == "function" && (t = t());
    const e = this._lastDependencies;
    return (!e || t.some((s, i) => oi(s instanceof Qe ? s.value : s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof Qe ? s.cache : s)), this._value;
  }
}
function ta(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ta(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...n) => ta(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
u.classes = k;
u.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = u(s);
    n === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(n, ...t));
  });
};
const Be = /* @__PURE__ */ new WeakMap();
function ea(n, t, e) {
  const s = Be.has(n), i = s ? Be.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, u(n).dataset(), i), Be.set(n, i)) : Be.delete(n);
}
function sa(n, t, e) {
  let s = Be.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, u(n).dataset(), s)), t === void 0 ? s : s[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...n) {
  if (!this.length)
    return;
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? sa(this[0], t) : this.each((s, i) => ea(i, t, e));
};
u.fn.removeData = function(n = null) {
  return this.each((t, e) => ea(e, n));
};
function ai(n, t = "z-") {
  const e = u(n)[0];
  if (e)
    return Array.from(e.attributes).reduce((s, i) => {
      let { name: r, value: o } = i;
      if (r.startsWith(t)) {
        r = r.slice(t.length).replace(/-([a-z])/g, (a) => a[1].toUpperCase());
        try {
          o.startsWith("RAWJS<") && o.endsWith(">RAWJS") ? o = new Function(`return ${o.substring(6, o.length - 6)}`)() : o = JSON.parse(o);
        } catch {
        }
        s[r] = o;
      }
      return s;
    }, {});
}
function Yr(n, t, e = "z-") {
  const s = u(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function qc(...n) {
  var e;
  const t = n.length;
  if (!t)
    return ai(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = ai(this)) == null ? void 0 : e[s] : (u.isPlainObject(s) && Yr(this, s), this);
  }
  return Yr(this, { [n[0]]: n[1] }), this;
}
u.fn.z = qc;
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
};
const Js = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Gc = {};
u.share = Gc;
var kn, z, na, rt, ne, Xr, ia, li, we = {}, ra = [], Yc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, xn = Array.isArray;
function Yt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function oa(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function xt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? kn.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return Ls(n, o, s, i, null);
}
function Ls(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++na };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function B() {
  return { current: null };
}
function Me(n) {
  return n.children;
}
function W(n, t) {
  this.props = n, this.context = t;
}
function ts(n, t) {
  if (t == null)
    return n.__ ? ts(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? ts(n) : null;
}
function aa(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return aa(n);
  }
}
function Jr(n) {
  (!n.__d && (n.__d = !0) && ne.push(n) && !Zs.__r++ || Xr !== z.debounceRendering) && ((Xr = z.debounceRendering) || ia)(Zs);
}
function Zs() {
  var n, t, e, s, i, r, o, a, l;
  for (ne.sort(li); n = ne.shift(); )
    n.__d && (t = ne.length, s = void 0, i = void 0, r = void 0, a = (o = (e = n).__v).__e, (l = e.__P) && (s = [], i = [], (r = Yt({}, o)).__v = o.__v + 1, sr(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, s, a ?? ts(o), o.__h, i), da(s, o, i), o.__e != a && aa(o)), ne.length > t && ne.sort(li));
  Zs.__r = 0;
}
function la(n, t, e, s, i, r, o, a, l, c, d) {
  var h, m, p, g, _, b, y, v, w, x = 0, C = s && s.__k || ra, S = C.length, M = S, D = t.length;
  for (e.__k = [], h = 0; h < D; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Ls(null, g, null, null, g) : xn(g) ? Ls(Me, { children: g }, null, null, null) : g.__b > 0 ? Ls(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (v = Xc(g, C, y = h + x, M)) === -1 ? p = we : (p = C[v] || we, C[v] = void 0, M--), sr(n, g, p, i, r, o, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && nr(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (b == null && (b = _), (w = p === we || p.__v === null) ? v == -1 && x-- : v !== y && (v === y + 1 ? x++ : v > y ? M > D - y ? x += v - y : x-- : x = v < y && v == y - 1 ? v - y : 0), y = h + x, typeof g.type != "function" || v === y && p.__k !== g.__k ? typeof g.type == "function" || v === y && !w ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = ha(n, _, l) : l = ca(g, l, n), typeof e.type == "function" && (e.__d = l))) : (p = C[h]) && p.key == null && p.__e && (p.__e == l && (l = ts(p)), ci(p, p, !1), C[h] = null);
  for (e.__e = b, h = S; h--; )
    C[h] != null && (typeof e.type == "function" && C[h].__e != null && C[h].__e == e.__d && (e.__d = C[h].__e.nextSibling), ci(C[h], C[h]));
}
function ca(n, t, e) {
  for (var s, i = n.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = n, t = typeof s.type == "function" ? ca(s, t, e) : ha(e, s.__e, t));
  return t;
}
function es(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (xn(n) ? n.some(function(e) {
    es(e, t);
  }) : t.push(n)), t;
}
function ha(n, t, e) {
  return e == null || e.parentNode !== n ? n.insertBefore(t, null) : t == e && t.parentNode != null || n.insertBefore(t, e), t.nextSibling;
}
function Xc(n, t, e, s) {
  var i = n.key, r = n.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (s > (l != null ? 1 : 0))
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
function Jc(n, t, e, s, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Qs(n, r, null, e[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Qs(n, r, t[r], e[r], s);
}
function Zr(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Yc.test(t) ? e : e + "px";
}
function Qs(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || Zr(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || Zr(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s || n.addEventListener(t, r ? to : Qr, r) : n.removeEventListener(t, r ? to : Qr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? n.removeAttribute(t) : n.setAttribute(t, e));
    }
}
function Qr(n) {
  return this.l[n.type + !1](z.event ? z.event(n) : n);
}
function to(n) {
  return this.l[n.type + !0](z.event ? z.event(n) : n);
}
function sr(n, t, e, s, i, r, o, a, l, c) {
  var d, h, m, p, g, _, b, y, v, w, x, C, S, M, D, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = z.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (y = t.props, v = (d = A.contextType) && s[d.__c], w = d ? v ? v.props.value : d.__ : s, e.__c ? b = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(y, w) : (t.__c = h = new W(y, w), h.constructor = A, h.render = Qc), v && v.sub(h), h.props = y, h.state || (h.state = {}), h.context = w, h.__n = s, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Yt({}, h.__s)), Yt(h.__s, A.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
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
        if (h.context = w, h.props = y, h.__P = n, h.__e = !1, C = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), M = 0; M < h._sb.length; M++)
            h.__h.push(h._sb[M]);
          h._sb = [];
        } else
          do
            h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (s = Yt(Yt({}, s), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), la(n, xn(D = d != null && d.type === Me && d.key == null ? d.props.children : d) ? D : [D], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), b && (h.__E = h.__ = null);
      } catch (T) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(T, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Zc(e.__e, t, e, s, i, r, o, l, c);
  (d = z.diffed) && d(t);
}
function da(n, t, e) {
  for (var s = 0; s < e.length; s++)
    nr(e[s], e[++s], e[++s]);
  z.__c && z.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      z.__e(r, i.__v);
    }
  });
}
function Zc(n, t, e, s, i, r, o, a, l) {
  var c, d, h, m = e.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        n = c, r[_] = null;
        break;
      }
  }
  if (n == null) {
    if (g === null)
      return document.createTextNode(p);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), r = null, a = !1;
  }
  if (g === null)
    m === p || a && n.data === p || (n.data = p);
  else {
    if (r = r && kn.call(n.childNodes), d = (m = e.props || we).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, _ = 0; _ < n.attributes.length; _++)
          m[n.attributes[_].name] = n.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }
    if (Jc(n, p, m, i, a), h)
      t.__k = [];
    else if (la(n, xn(_ = t.props.children) ? _ : [_], t, e, s, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && ts(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && oa(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== n.value || g === "progress" && !_ || g === "option" && _ !== m.value) && Qs(n, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== n.checked && Qs(n, "checked", _, m.checked, !1));
  }
  return n;
}
function nr(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    z.__e(s, e);
  }
}
function ci(n, t, e) {
  var s, i;
  if (z.unmount && z.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || nr(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ci(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || oa(n.__e), n.__ = n.__e = n.__d = void 0;
}
function Qc(n, t, e) {
  return this.constructor(n, e);
}
function ss(n, t, e) {
  var s, i, r, o;
  z.__ && z.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], sr(t, n = (!s && e || t).__k = xt(Me, null, [n]), i || we, we, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? kn.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), da(r, n, o);
}
kn = ra.slice, z = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, na = 0, rt = function(n) {
  return n != null && n.constructor === void 0;
}, W.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof n == "function" && (n = n(Yt({}, e), this.props)), n && Yt(e, n), n != null && this.__v && (t && this._sb.push(t), Jr(this));
}, W.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Jr(this));
}, W.prototype.render = Me, ne = [], ia = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, li = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Zs.__r = 0;
function R(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...es(r), ...es(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = u.extend(r, i))), n[s] = i);
    });
  }), n;
}
function ua(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
const Fe = /* @__PURE__ */ new Map();
function tn(n) {
  const { zui: t } = window;
  return (!Fe.size || n && !Fe.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || Fe.set(e.toLowerCase(), s);
  }), n ? Fe.get(n.toLowerCase()) : void 0;
}
function th(n, t, e) {
  const s = tn(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function bu(n) {
  if (n) {
    const t = tn(n);
    t && t.defineFn();
  } else
    tn(), Fe.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = u(this);
    let t = ai(n, "data-");
    const [e, s] = t.zui.split(":");
    n.zui(e) || (s ? t = u.share[s] : delete t.zui, requestAnimationFrame(() => th(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = sa(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), n === !0 ? r : o;
  }
  const s = tn(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function eh(n, t = !0) {
  const e = u(n), s = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = s === document.body ? window.innerWidth - document.body.clientWidth : s.offsetWidth - s.clientWidth;
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
u.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    eh(e, n);
  });
};
u.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function $n(n) {
  if (typeof n == "number")
    return [n];
  let t = n.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = n.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Ce(n) {
  if (n == null)
    return null;
  const [t, e = "px"] = $n(n);
  return Number.isNaN(t) ? null : `${t}${e}`;
}
function ir(n, t) {
  const e = u(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: b, clientWidth: y } = document.documentElement;
    s = { left: 0, top: 0, width: _ || y, height: g || b };
  }
  const { left: l, top: c, width: d, height: h } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
u.fn.isVisible = function(n) {
  return ir(this, n);
};
function rr(n, t, e = !1) {
  const s = u(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Ot()}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    rr(s, r.innerHTML), r.remove();
  });
}
u.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
u.fn.runJS = function(n) {
  return this.each((t, e) => {
    rr(e, n);
  });
};
function fa(n, t) {
  const e = u(n), { ifNeeded: s = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (s) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (ir(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    fa(e, n);
  });
};
u.setLibRoot = function(n) {
  u.libRoot = n;
};
u.registerLib = function(n, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), u.libMap[n] = t;
};
u.getLib = function(n, t, e) {
  return new Promise((s, i) => {
    let r = typeof n == "string" ? { src: n } : u.extend({}, n);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      s(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, g = u(p ? `#${p}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const C = g.data("loadCalls") || [];
        C.push(m), g.data("loadCalls", C);
      }
      return;
    }
    const { async: _ = !0, defer: b = !1, noModule: y = !1, type: v, integrity: w } = r, x = document.createElement("script");
    x.async = _, x.defer = b, x.noModule = y, v && (x.type = v), w && (x.integrity = w), x.onload = () => {
      m(), (u(x).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u(x).removeData("loadCalls");
    }, x.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, x.src = o, u("head").append(x);
  });
};
u.getScript = u.getLib;
function Sn(n) {
  return n.parentNode === document ? !1 : n.parentNode ? Sn(n.parentNode) : !0;
}
const vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: Sn,
  isVisible: ir,
  runJS: rr,
  scrollIntoView: fa
}, Symbol.toStringTag, { value: "Module" })), pa = {};
function me(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    me(e, n[e]);
  }) : t && (pa[n.toLowerCase()] = t);
}
function sh(n) {
  return pa[n.toLowerCase()];
}
const eo = "dangerouslySetInnerHTML";
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
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, ...h } = t, m = Object.keys(h).reduce((p, g) => {
      if (g === eo || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(g)) {
        const _ = h[g];
        p[g] = g !== eo && _ && typeof _ == "object" ? JSON.stringify(_) : _;
      }
      return p;
    }, {});
    return { ref: o, className: k(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...m, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? sh(e) : e) || e;
  }
  _getChildren(t) {
    return t.children;
  }
  _beforeRender(t) {
    return t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _onRender(t, e, s, i) {
    return [t, e, s];
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), s = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, s, t);
    return r && ([e, i, s] = r), xt(e, i, s);
  }
}
K.HElement = !0;
var nh = 0;
function f(n, t, e, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nh, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class he extends W {
  constructor() {
    super(...arguments), this._ref = B();
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
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ f(K, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function ih(n) {
  const {
    tag: t,
    className: e,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...d
  } = n, h = [e], m = { ...s }, p = [], g = [];
  return i.forEach((_) => {
    const b = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        b.push(...l.call(o, _, p, ...r));
      else {
        const y = _.call(o, p, ...r);
        y && (Array.isArray(y) ? b.push(...y) : b.push(y));
      }
    else
      b.push(_);
    b.forEach((y) => {
      y != null && (typeof y == "object" && !rt(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ f("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(h),
    style: m,
    ...d
  }, p];
}
function ma({
  tag: n = "div",
  ...t
}) {
  const [e, s] = ih(t);
  return xt(n, e, ...s);
}
function hi(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => hi({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ f(he, { ...R(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = R({ children: o.map((a) => hi({ ...i, content: a, generatorThis: s, generatorArgs: e })) }, r)), /* @__PURE__ */ f(K, { ...R(i, r) });
  }
  return rt(r) || r === null, r;
}
function O(n) {
  const t = hi(n);
  return t == null || typeof t == "boolean" ? null : rt(t) ? t : /* @__PURE__ */ f(Me, { children: t });
}
const so = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function q(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (rt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(so(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? so(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: k(i), ...s });
}
function rh(n) {
  return this.getChildContext = () => n.context, n.children;
}
function ga(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    ss(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), n._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), t._container.removeChild(s);
    }
  }), ss(
    xt(rh, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function oh(n, t) {
  const e = xt(ga, { _vnode: n, _container: t });
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
  Portal: ga
});
class at {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: s, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(s) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = Ot();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Sn(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(s, this).attr(i, `${d}`), o) {
      const m = `${s}:ALL`;
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: s } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (r = this._mobs) == null || r.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), s) {
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
    const s = u.Event(t);
    return s.__src = this, this.$emitter.trigger(s, [this, ...e]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, s) {
    const i = this;
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
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
  i18n(t, e, s) {
    return Z(this.options.i18n, t, e, s, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return s.data(this.KEY);
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
    const s = this.get(t, e == null ? void 0 : e.key);
    return s ? (e && s.setOptions(e), s) : new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, DATA_KEY: s } = this, i = [];
    return u(t || document).find(`[${s}]`).each((r, o) => {
      if (e) {
        const l = u(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(o).data(this.KEY);
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
  static query(t, e, s) {
    if (t === void 0) {
      let i = this.getAll();
      return s && (i = i.filter(s)), i.pop();
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
    const s = this;
    u.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = s.get(d);
          if (h ? o && h.render(o) : h = new s(d, o), a) {
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
    super(...arguments), this._ref = B();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this._ref.current;
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
    const { element: e } = this, { Component: s, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this._ref,
      ...o
    };
    if (r && s.HElement) {
      const l = Array.from(e.attributes).reduce((c, d) => {
        const { name: h, value: m } = d;
        return c[h === "class" ? "className" : h] = m, c;
      }, {});
      return ss(
        xt(s, R({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    ss(
      xt(s, a),
      e
    );
  }
}
H.replace = !1;
class et extends K {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(q, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: s, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, s, {
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
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: r,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = k([c.className, o])), r || (s !== void 0 && (c[l ? "href" : "data-url"] = s), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: et
}, Symbol.toStringTag, { value: "Module" }));
me(ah);
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
    var e, s;
    return (s = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : s.key;
  }
  _getItemFromEvent(t) {
    var a;
    const e = t.target.closest("[z-item]");
    if (!e || !((a = e.parentElement) != null && a.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const s = +e.getAttribute("z-item"), i = this._items[s];
    if (!i)
      return;
    const r = this.getKey(s);
    if (r === void 0)
      return;
    const o = this._renderedItems[s];
    return { index: s, item: i, element: e, event: t, key: r, renderedItem: o, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var s, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (s = this.props.onClickItem) == null || s.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, s) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, s);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, s);
      if (c !== void 0)
        return /* @__PURE__ */ f(O, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || K;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = R({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ f(l, { "z-key": e.key, "z-item": s, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, s) {
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
        _index: s,
        key: String((a ? e[a] : e.key) ?? e.key ?? s),
        onClick: void 0
      }
    ), o) {
      const p = o.call(this, e, s);
      if (p !== void 0)
        return p;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return { onClick: this._handleClick, ...e };
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
    const s = [];
    return this._renderedItems = e.map((i, r) => {
      const o = this._getItem(t, i, r);
      return o && s.push(this._renderItem(t, o, r)), o || void 0;
    }), s;
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
    const s = this._renderItems(t, e);
    return t.children && s.push(t.children), s;
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
  space: [K, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
pt.defaultItemProps = {
  component: "li"
};
pt.defaultItemPropsMap = {};
pt.defaultItemType = "item";
const lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: pt
}, Symbol.toStringTag, { value: "Module" }));
class or extends H {
}
or.NAME = "CommonList";
or.Component = pt;
or.replace = !0;
me(lh);
function ch(n) {
  if (n.indexOf("#") === 0 && (n = n.slice(1)), n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n.length !== 6)
    throw new Error(`Invalid HEX color "${n}".`);
  return [
    parseInt(n.slice(0, 2), 16),
    // r
    parseInt(n.slice(2, 4), 16),
    // g
    parseInt(n.slice(4, 6), 16)
    // b
  ];
}
function hh(n) {
  const [t, e, s] = typeof n == "string" ? ch(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function no(n, t) {
  return hh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function io(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function dh(n, t, e) {
  n = n % 360 / 360, t = io(t), e = io(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function _a(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function uh(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let ys = class extends W {
  render() {
    const {
      className: t,
      style: e,
      size: s = "",
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
      children: b,
      ...y
    } = this.props, v = ["avatar", t], w = { ...e, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (v.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let C;
    if (m)
      v.push("has-img"), C = /* @__PURE__ */ f("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      v.push("has-icon"), C = /* @__PURE__ */ f(q, { icon: l });
    else if (c != null && c.length) {
      const S = uh(c, h);
      if (v.push("has-text", `has-text-${S.length}`), o)
        !a && o && (w.color = no(o));
      else {
        const D = d ?? c, A = (typeof D == "number" ? D : _a(D)) * p % 360;
        if (w.background = `hsl(${A},${g * 100}%,${_ * 100}%)`, !a) {
          const T = dh(A, g, _);
          w.color = no(T);
        }
      }
      let M;
      x && x < 14 * S.length && (M = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ f("div", { "data-actualSize": x, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: k(v),
        style: w,
        ...y,
        children: [
          C,
          b
        ]
      }
    );
  }
};
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: ys
}, Symbol.toStringTag, { value: "Module" }));
let bt = class extends pt {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    !e.type && (e.dropdown || e.items) && (e = u.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = R({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = R({}, e, ua({ btnType: s, size: i }));
  }
};
bt.NAME = "btn-group";
bt.TAG = "nav";
bt.ItemComponents = {
  ...pt.ItemComponents,
  default: et
};
bt.defaultItemProps = {
  component: void 0
};
const Nn = class ya extends bt {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = k(s.className, `gap-${e}`) : s.style = u.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = R({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = R(s, r)), /* @__PURE__ */ f(ya, { ...r });
  }
};
Nn.NAME = "toolbar";
Nn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Nn.ItemComponents = {
  ...bt.ItemComponents,
  btnGroup: bt,
  "btn-group": bt
};
let ot = Nn;
const ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ot
}, Symbol.toStringTag, { value: "Module" }));
class Tn extends K {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: s } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      s && s.call(this, e, i), this._controlled || this.setState({ checked: i });
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: s = "checkbox" } = t, { checked: i } = this;
    return [t.className, s === "switch" ? s : `${s}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: s, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ f(
        "input",
        {
          type: s === "radio" ? s : "checkbox",
          name: e,
          id: r,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(O, { content: o }) }, "label")
    ];
  }
}
class mh extends Tn {
}
mh.defaultProps = {
  type: "radio"
};
class gh extends Tn {
}
gh.defaultProps = {
  type: "switch"
};
class en extends K {
  _renderLeading(t) {
    const {
      icon: e,
      avatar: s,
      toggleIcon: i,
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, d = [];
    if (i && d.push(/* @__PURE__ */ f(O, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(Tn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(q, { className: "item-icon", icon: e }, "icon")), s) {
      const m = typeof s == "function" ? s.call(this, t) : s;
      m && (m.className = k("item-avatar", m.className), d.push(/* @__PURE__ */ f(ys, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ f(O, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: k("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t, e) {
    const {
      textClass: s,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: d,
      contentClass: h,
      contentAttrs: m,
      hint: p
    } = t, g = l && !e, _ = g ? "a" : "div";
    let { title: b, text: y } = t;
    return b === void 0 && (b = y, y = null), [
      /* @__PURE__ */ f("div", { className: k("item-content", h), title: p, ...m, children: [
        b ? /* @__PURE__ */ f(_, { className: k("item-title", i), href: g ? l : void 0, target: g ? c : void 0, ...r, children: /* @__PURE__ */ f(O, { content: b }) }, "title") : null,
        o ? /* @__PURE__ */ f("div", { className: k("item-subtitle", a), children: /* @__PURE__ */ f(O, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ f("div", { className: k("item-text text", s), children: y }, "text") : null,
        d ? /* @__PURE__ */ f(O, { content: d }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: s,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    r && a.push(/* @__PURE__ */ f(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(ot.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = s ? /* @__PURE__ */ f(O, { content: s }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ f("div", { className: k("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: s,
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
      hover: b
    } = t, y = s || (o && !a ? "a" : "div"), v = y === "a", w = R({
      key: "item",
      className: k("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": b,
        checked: m,
        multiline: p ?? !!(g && _),
        state: v
      })
    }, v ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ f(y, { ...w, children: [
      this._renderLeading(t),
      this._renderContent(t, v),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...es(s)]];
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
    const { items: t, onLoad: e, onLoadFail: s } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const r = await Cn(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof s == "function" ? s.call(this, r) : s) || String(r);
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
    const { items: e } = t, { items: s } = this.state;
    return s || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, s) {
    const { divider: i, hover: r, multiline: o } = t;
    e = R({}, ua({
      divider: i,
      hover: r,
      multiline: o
    }), e);
    const { itemName: a, name: l } = this;
    if (e.innerClass = [a ? `${a}-inner${l ? ` ${l}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: c } = t;
      c && (e.checked === void 0 && (e.checked = !1), typeof c == "object" && (e.checkbox = e.checkbox ? u.extend({}, c, e.checkbox) : c));
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && this._getRenderedItem(t, i, s);
  }
  _renderItem(t, e, s) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, s);
  }
  _getClassName(t) {
    const { loading: e, loadFailed: s } = this.state;
    return [super._getClassName(t), e ? "loading" : s ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...s } = super._getProps(t);
    return {
      ...s,
      onClick: this._handleClick,
      className: k(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
};
te.ItemComponents = {
  ...pt.ItemComponents,
  default: K,
  item: en,
  heading: en
};
te.NAME = "list";
const Kn = "```ZUI_STR\n";
class bs {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new bs(this._id, "session")), this._altStorage);
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
    const s = this._storage.getItem(this._getKey(t));
    if (typeof s == "string") {
      if (s.startsWith(Kn))
        return s.substring(Kn.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? e;
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Kn}${e}` : JSON.stringify(e));
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
      const s = this._storage.key(e);
      if (s != null && s.startsWith(this._name)) {
        const i = this._storage.getItem(s);
        typeof i == "string" && t(s.substring(this._name.length + 1), JSON.parse(i));
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
    return this.each((e, s) => {
      t[e] = s;
    }), t;
  }
}
const Rt = new bs("DEFAULT");
function _h(n, t = "local") {
  return new bs(n, t);
}
Object.assign(Rt, { create: _h });
let Ie = class extends te {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0;
    const { defaultNestedShow: e } = t;
    u.extend(this.state, typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} });
    const { preserve: s } = t;
    if (s && !this._controlled) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const i = Rt.get(this._storeID);
      i && u.extend(this.state, i);
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
    const { nestedShow: s } = this, i = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return typeof s == "boolean" ? s : !!(s[i] ?? this.state.defaultShow);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const s = this.isExpanded(t);
    if (e === void 0)
      e = !s;
    else if (e === s)
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
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return R(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${s.key}` : s.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, s.listProps);
  }
  _renderNestedList(t, e, s, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, s, i), o = this.constructor;
    return /* @__PURE__ */ f(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (s = /* @__PURE__ */ f(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: s });
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s) ?? e;
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
  _renderItem(t, e, s) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = R(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this.isRoot && this._itemsMap.set(e._keyPath, e), super._renderItem(t, e, s);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter"), { ...e, parentKey: this.props.parentKey };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: s, event: i, key: r, parentKey: o } = t, { nestedTrigger: a, nestedToggle: l } = this.props, c = i.target;
    if (!e.items || i.defaultPrevented || a === "hover" && s === void 0 || a === "click" && i.type !== "click" || c.closest(".not-nested-toggle") || l && !c.closest(l) || !l && c.closest("a,.btn,.item-checkbox") && !c.closest(".nested-toggle-icon,.item-icon"))
      return;
    const d = typeof s == "boolean" ? s : void 0;
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
    const e = super._handleClick(t);
    return e && !this._controlled && this._toggleFromEvent(e), e;
  }
  _handleHover(t) {
    var s;
    const e = this._getItemFromEvent(t);
    e && ((s = this.props.onHoverItem) == null || s.call(this, e), !this._controlled && this.props.nestedTrigger === "hover" && this._toggleFromEvent(e));
  }
  _getProps(t) {
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = R(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = k(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
Ie.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Ie.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class ba extends H {
}
ba.NAME = "List";
ba.Component = te;
class va extends H {
}
va.NAME = "NestedList";
va.Component = Ie;
let it = class extends Ie {
  _getClassName(t) {
    return k(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
it.NAME = "menu";
it.TAG = "menu";
it.inheritNestedProps = [...Ie.inheritNestedProps, "compact"];
it.ItemComponents = {
  ...Ie.ItemComponents,
  item: [en, { innerComponent: "a" }]
};
var wa = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Le = (n, t, e) => (wa(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ns = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ro = (n, t, e) => (wa(n, t, "access private method"), e), di, Rs, Ws, Hs, ui;
let ar = class extends W {
  constructor(t) {
    super(t), Ns(this, Hs), this._input = B(), this._timer = 0, Ns(this, di, (e) => {
      const s = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), s.trim() !== "" && (i == null || i("", e));
      });
    }), Ns(this, Rs, (e) => {
      const s = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (ro(this, Hs, ui).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), Ns(this, Ws, (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
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
    ro(this, Hs, ui).call(this);
  }
  render(t, e) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: g } = t, { focus: _, value: b } = e, { id: y } = this, v = g ?? b, w = typeof v != "string" || !v.trim().length;
    let x, C, S;
    return m && (S = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(q, { icon: m })), !h && m && (x = /* @__PURE__ */ f("label", { for: y, class: "input-control-prefix", children: S }, "prefix")), p && !w ? C = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Le(this, di),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(q, { icon: p })
      }
    ) : h && m && (C = S), C && (C = /* @__PURE__ */ f("label", { for: y, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ f("div", { class: k("search-box input-control", r, { focus: _, empty: w, "has-prefix-icon": x, "has-suffix-icon": C }), style: o, children: [
      x,
      /* @__PURE__ */ f(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: k("form-control", i, { "rounded-full": c }),
          style: s,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: v,
          onInput: Le(this, Rs),
          onChange: Le(this, Rs),
          onFocus: Le(this, Ws),
          onBlur: Le(this, Ws)
        }
      ),
      C
    ] });
  }
};
di = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakSet();
ui = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
ar.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Nt = class extends it {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const s = this.constructor.getSearchKeys(e);
      this._searchKeys = s, this.setState({ search: s.join(" ") });
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
    this.isRoot && u(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
  }
  _isItemMatch(t, e, s, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, s, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, s, i) {
    return this._isItemMatch(this.props, t, s, i);
  }
  _getNestedProps(t, e, s, i) {
    const r = super._getNestedProps(t, e, s, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && (i.hidden = !this._isItemMatch(t, e, s, t.parentKey), i);
  }
  _renderItem(t, e, s) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, s);
  }
  _getChildren(t) {
    let e = super._getChildren(t);
    const { searchBox: s } = t;
    if (!s || !this.isRoot)
      return e;
    e = es(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof s == "object" && u.extend(i, s), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ f(ar, { ...i }, "search")), e;
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
  static isItemMatch(t, e, s = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => s.some((r) => {
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
  static underlineKeys(t, e, s = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((d, h) => {
        h && (o.push(/* @__PURE__ */ f("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Nt.inheritNestedProps = [...it.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Nt.defaultProps = {
  ...it.defaultProps,
  defaultNestedShow: !0
};
class lr extends H {
}
lr.NAME = "Menu";
lr.Component = it;
lr.replace = !0;
class cr extends H {
}
cr.NAME = "SearchMenu";
cr.Component = Nt;
cr.replace = !0;
function yh({
  className: n,
  style: t,
  actions: e,
  heading: s,
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
  a === !0 ? m = /* @__PURE__ */ f(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : rt(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ f(et, { ...a, onClick: l }));
  const p = rt(e) ? e : e ? /* @__PURE__ */ f(ot, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: k("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ f(q, { icon: c, className: k("alert-icon", d) }),
    rt(i) ? i : /* @__PURE__ */ f("div", { className: k("alert-content", r), children: [
      rt(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? p : null
    ] }),
    s ? null : p,
    m,
    o
  ] });
}
function bh(n) {
  if (n === "center")
    return "fade-from-center";
  if (n) {
    if (n.includes("top"))
      return "fade-from-top";
    if (n.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function vh({
  margin: n,
  type: t,
  placement: e,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    yh,
    {
      className: k("messager", r, t, s === !0 ? bh(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var wh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ch = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Re = (n, t, e) => (wh(n, t, "access private method"), e), ee, ye;
class hr extends H {
  constructor() {
    super(...arguments), Ch(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Re(this, ee, ye).call(this, () => {
      this._show = !0, this.render(), Re(this, ee, ye).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Re(this, ee, ye).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Re(this, ee, ye).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Re(this, ee, ye).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
ye = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
hr.NAME = "MessagerItem";
hr.Component = vh;
var dr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, oe = (n, t, e) => (dr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ts = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Os = (n, t, e, s) => (dr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Ca = (n, t, e) => (dr(n, t, "access private method"), e), ke, Dt, fi, ka, ur, xa;
const En = class $a extends at {
  constructor() {
    super(...arguments), Ts(this, fi), Ts(this, ur), Ts(this, ke, void 0), Ts(this, Dt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = oe(this, Dt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ca(this, fi, ka).call(this).show();
  }
  hide() {
    var t;
    (t = oe(this, Dt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...s } = t, i = $a.ensure(e || "body", { key: `messager_${Ot()}`, ...s });
    return i.hide(), i.show(), i;
  }
};
ke = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakSet();
ka = function() {
  if (oe(this, Dt))
    oe(this, Dt).setOptions(this.options);
  else {
    const n = Ca(this, ur, xa).call(this), t = new hr(n, this.options);
    t.on("hidden", () => {
      t.destroy(), n == null || n.remove(), Os(this, ke, void 0), Os(this, Dt, void 0);
    }), Os(this, Dt, t);
  }
  return oe(this, Dt);
};
ur = /* @__PURE__ */ new WeakSet();
xa = function() {
  if (oe(this, ke))
    return oe(this, ke);
  const { placement: n = "top" } = this.options;
  let t = this.$element.find(`.messagers-${n}`);
  t.length || (t = u(`<div class="messagers messagers-${n}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Os(this, ke, e[0])), e[0];
};
En.NAME = "messager";
En.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
En.MULTI_INSTANCE = !0;
let Eu = En;
let fr = class extends W {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = s / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = s * p);
    const g = (s - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
fr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Sa extends H {
}
Sa.NAME = "ProgressCircle";
Sa.Component = fr;
const We = '[droppable="true"]';
class Mn extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      !a || s && !r.closest(s).length || i && i.call(this, t, a) === !1 || (o.attr("draggable", "true"), this._setState({ dragging: a }));
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: s } = this, { onDragStart: i } = s;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d } = s;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || We);
      if (!h.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(We).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
    }, this._handleDrag = (t) => {
      var s;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (s = this.options.onDrag) == null || s.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var s;
      const { dragElement: e } = this;
      this._clean(), e && ((s = this.options.onDragEnd) == null || s.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var r, o;
      const { dragElement: e } = this, s = u(t.target).closest(We)[0], i = this.state.dropping;
      if (!(!e || !s)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== s) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(s).addClass(a)), this._setState({ dropping: s }), (r = this.options.onDragEnter) == null || r.call(this, t, e, s);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, s);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = u(t.target).filter(We)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = u(t.target).closest(We)[0];
      e && (t.preventDefault(), (s = this.options.onDrop) == null || s.call(this, t, this.dragElement, e)), this._clean();
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
    const e = this._state, { dragging: s = e.dragging, dropping: i = e.dropping } = t;
    s === e.dragging && i === e.dropping || (this._state = { dragging: s, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: s } = this.options;
    s && u(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), s && o.removeClass(s), this._$targets = void 0);
  }
}
Mn.NAME = "Draggable";
Mn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const kh = '[moveable="true"]';
class vs extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: r } = e, o = u(t.target), a = s === "self" ? this.$element : o.closest(s), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (t.preventDefault(), this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        var e;
        this._raf = 0, this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state);
      }));
    }, this._handleMouseUp = (t) => {
      var e, s;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state), (s = this.options.onMoveEnd) == null || s.call(this, t, this._state), this._clean());
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
    let s = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = u(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        s.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        s.strategy = this.options.move || "none";
      const d = c.position();
      s = u.extend(s, {
        target: e,
        startX: s.x,
        startY: s.y,
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
      const c = s.x - i.startX, d = s.y - i.startY;
      s = u.extend({}, i, s, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = s;
    const { strategy: r, target: o } = s, a = u(o);
    r === "position" ? a.css({ left: s.left, top: s.top }) : r === "transform" ? a.css("transform", `translate(${s.deltaX}px, ${s.deltaY}px)`) : r === "scroll" && (o.scrollLeft = s.scrollLeft - s.deltaX, o.scrollTop = s.scrollTop - s.deltaY), (l = this.options.onChange) == null || l.call(this, s, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = u(s);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
vs.NAME = "Moveable";
vs.DEFAULT = {
  selector: kh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const pr = class Na extends at {
  async afterInit() {
    const t = await Na.loadModule();
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
pr.NAME = "Sortable";
pr.DEFAULT = {
  animation: 150
};
let Iu = pr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
class Ta extends H {
}
Ta.NAME = "Avatar";
Ta.Component = ys;
me(fh);
class Ea extends H {
}
Ea.NAME = "BtnGroup";
Ea.Component = bt;
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: bt
}, Symbol.toStringTag, { value: "Module" }));
me(xh);
const pi = Symbol("EVENT_PICK");
class mr extends W {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
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
    const { state: e, className: s } = t, { open: i, disabled: r } = e;
    return k(
      "pick",
      s,
      i && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: e, style: s, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: s } = t;
    return e ?? s.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, id: i } = t;
    if (e)
      if (this._hasInput)
        u(`#${i}`).val(s);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: s });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (s, i) => {
      if (i === pi)
        return;
      const r = s.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && u(`#${e}`).trigger("change", pi), this._skipTriggerChange = !1);
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
const Te = Math.min, ae = Math.max, sn = Math.round, Es = Math.floor, Xt = (n) => ({
  x: n,
  y: n
}), $h = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Sh = {
  start: "end",
  end: "start"
};
function mi(n, t, e) {
  return ae(n, Te(t, e));
}
function ws(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function de(n) {
  return n.split("-")[0];
}
function Cs(n) {
  return n.split("-")[1];
}
function Ma(n) {
  return n === "x" ? "y" : "x";
}
function gr(n) {
  return n === "y" ? "height" : "width";
}
function In(n) {
  return ["top", "bottom"].includes(de(n)) ? "y" : "x";
}
function _r(n) {
  return Ma(In(n));
}
function Nh(n, t, e) {
  e === void 0 && (e = !1);
  const s = Cs(n), i = _r(n), r = gr(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = nn(o)), [o, nn(o)];
}
function Th(n) {
  const t = nn(n);
  return [gi(n), t, gi(t)];
}
function gi(n) {
  return n.replace(/start|end/g, (t) => Sh[t]);
}
function Eh(n, t, e) {
  const s = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? i : s : t ? s : i;
    case "left":
    case "right":
      return t ? r : o;
    default:
      return [];
  }
}
function Mh(n, t, e, s) {
  const i = Cs(n);
  let r = Eh(de(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(gi)))), r;
}
function nn(n) {
  return n.replace(/left|right|bottom|top/g, (t) => $h[t]);
}
function Ih(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Ia(n) {
  return typeof n != "number" ? Ih(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function rn(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function oo(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = In(t), o = _r(t), a = gr(o), l = de(t), c = r === "y", d = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, m = s[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: s.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: s.y + s.height
      };
      break;
    case "right":
      p = {
        x: s.x + s.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: s.x - i.width,
        y: h
      };
      break;
    default:
      p = {
        x: s.x,
        y: s.y
      };
  }
  switch (Cs(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const Ah = async (n, t, e) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: n,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = oo(c, s, l), m = s, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: b,
      fn: y
    } = a[_], {
      x: v,
      y: w,
      data: x,
      reset: C
    } = await y({
      x: d,
      y: h,
      initialPlacement: s,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    if (d = v ?? d, h = w ?? h, p = {
      ...p,
      [b]: {
        ...p[b],
        ...x
      }
    }, C && g <= 50) {
      g++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
        reference: n,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: d,
        y: h
      } = oo(c, m, l)), _ = -1;
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
async function Aa(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = n, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = ws(t, n), g = Ia(p), b = a[m ? h === "floating" ? "reference" : "floating" : h], y = rn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(b))) == null || e ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), v = h === "floating" ? {
    ...o.floating,
    x: s,
    y: i
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = rn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (y.top - C.top + g.top) / x.y,
    bottom: (C.bottom - y.bottom + g.bottom) / x.y,
    left: (y.left - C.left + g.left) / x.x,
    right: (C.right - y.right + g.right) / x.x
  };
}
const _i = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: s,
      placement: i,
      rects: r,
      platform: o,
      elements: a
    } = t, {
      element: l,
      padding: c = 0
    } = ws(n, t) || {};
    if (l == null)
      return {};
    const d = Ia(c), h = {
      x: e,
      y: s
    }, m = _r(i), p = gr(m), g = await o.getDimensions(l), _ = m === "y", b = _ ? "top" : "left", y = _ ? "bottom" : "right", v = _ ? "clientHeight" : "clientWidth", w = r.reference[p] + r.reference[m] - h[m] - r.floating[p], x = h[m] - r.reference[m], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = C ? C[v] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(C))) && (S = a.floating[v] || r.floating[p]);
    const M = w / 2 - x / 2, D = S / 2 - g[p] / 2 - 1, A = Te(d[b], D), T = Te(d[y], D), I = A, V = S - g[p] - T, E = S / 2 - g[p] / 2 + M, F = mi(I, E, V), vt = Cs(i) != null && E != F && r.reference[p] / 2 - (E < I ? A : T) - g[p] / 2 < 0 ? E < I ? I - E : V - E : 0;
    return {
      [m]: h[m] - vt,
      data: {
        [m]: F,
        centerOffset: E - F + vt
      }
    };
  }
}), An = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e;
      const {
        placement: s,
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
      } = ws(n, t), b = de(s), y = de(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), w = h || (y || !g ? [nn(o)] : Th(o));
      !h && p !== "none" && w.push(...Mh(o, g, p, v));
      const x = [o, ...w], C = await Aa(t, _), S = [];
      let M = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && S.push(C[b]), d) {
        const I = Nh(s, r, v);
        S.push(C[I[0]], C[I[1]]);
      }
      if (M = [...M, {
        placement: s,
        overflows: S
      }], !S.every((I) => I <= 0)) {
        var D, A;
        const I = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, V = x[I];
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
        let E = (A = M.filter((F) => F.overflows[0] <= 0).sort((F, ct) => F.overflows[1] - ct.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!E)
          switch (m) {
            case "bestFit": {
              var T;
              const F = (T = M.map((ct) => [ct.placement, ct.overflows.filter((vt) => vt > 0).reduce((vt, Jl) => vt + Jl, 0)]).sort((ct, vt) => ct[1] - vt[1])[0]) == null ? void 0 : T[0];
              F && (E = F);
              break;
            }
            case "initialPlacement":
              E = o;
              break;
          }
        if (s !== E)
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
async function Dh(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = de(e), a = Cs(e), l = In(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = ws(t, n);
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
const Dn = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s
      } = t, i = await Dh(t, n);
      return {
        x: e + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, ns = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: y,
              y: v
            } = b;
            return {
              x: y,
              y: v
            };
          }
        },
        ...l
      } = ws(n, t), c = {
        x: e,
        y: s
      }, d = await Aa(t, l), h = In(de(i)), m = Ma(h);
      let p = c[m], g = c[h];
      if (r) {
        const b = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", v = p + d[b], w = p - d[y];
        p = mi(v, p, w);
      }
      if (o) {
        const b = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", v = g + d[b], w = g - d[y];
        g = mi(v, g, w);
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
          y: _.y - s
        }
      };
    }
  };
};
function Jt(n) {
  return Da(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ut(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ft(n) {
  var t;
  return (t = (Da(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function Da(n) {
  return n instanceof Node || n instanceof ut(n).Node;
}
function zt(n) {
  return n instanceof Element || n instanceof ut(n).Element;
}
function $t(n) {
  return n instanceof HTMLElement || n instanceof ut(n).HTMLElement;
}
function ao(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof ut(n).ShadowRoot;
}
function ks(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = gt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function Ph(n) {
  return ["table", "td", "th"].includes(Jt(n));
}
function yr(n) {
  const t = br(), e = gt(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function Lh(n) {
  let t = Ee(n);
  for (; $t(t) && !Pn(t); ) {
    if (yr(t))
      return t;
    t = Ee(t);
  }
  return null;
}
function br() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pn(n) {
  return ["html", "body", "#document"].includes(Jt(n));
}
function gt(n) {
  return ut(n).getComputedStyle(n);
}
function Ln(n) {
  return zt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Ee(n) {
  if (Jt(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ao(n) && n.host || // Fallback.
    Ft(n)
  );
  return ao(t) ? t.host : t;
}
function Pa(n) {
  const t = Ee(n);
  return Pn(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : $t(t) && ks(t) ? t : Pa(t);
}
function is(n, t) {
  var e;
  t === void 0 && (t = []);
  const s = Pa(n), i = s === ((e = n.ownerDocument) == null ? void 0 : e.body), r = ut(s);
  return i ? t.concat(r, r.visualViewport || [], ks(s) ? s : [], r.frameElement ? is(r.frameElement) : []) : t.concat(s, is(s));
}
function La(n) {
  const t = gt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = $t(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = sn(e) !== r || sn(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function vr(n) {
  return zt(n) ? n : n.contextElement;
}
function xe(n) {
  const t = vr(n);
  if (!$t(t))
    return Xt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = La(t);
  let o = (r ? sn(e.width) : e.width) / s, a = (r ? sn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Rh = /* @__PURE__ */ Xt(0);
function Ra(n) {
  const t = ut(n);
  return !br() || !t.visualViewport ? Rh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wh(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ut(n) ? !1 : t;
}
function ue(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = vr(n);
  let o = Xt(1);
  t && (s ? zt(s) && (o = xe(s)) : o = xe(n));
  const a = Wh(r, e, s) ? Ra(r) : Xt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = ut(r), p = s && zt(s) ? ut(s) : s;
    let g = m.frameElement;
    for (; g && s && p !== m; ) {
      const _ = xe(g), b = g.getBoundingClientRect(), y = gt(g), v = b.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, w = b.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += v, c += w, g = ut(g).frameElement;
    }
  }
  return rn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Hh(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: s
  } = n;
  const i = $t(e), r = Ft(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Xt(1);
  const l = Xt(0);
  if ((i || !i && s !== "fixed") && ((Jt(e) !== "body" || ks(r)) && (o = Ln(e)), $t(e))) {
    const c = ue(e);
    a = xe(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Oh(n) {
  return Array.from(n.getClientRects());
}
function Wa(n) {
  return ue(Ft(n)).left + Ln(n).scrollLeft;
}
function zh(n) {
  const t = Ft(n), e = Ln(n), s = n.ownerDocument.body, i = ae(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = ae(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + Wa(n);
  const a = -e.scrollTop;
  return gt(s).direction === "rtl" && (o += ae(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Bh(n, t) {
  const e = ut(n), s = Ft(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = br();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Fh(n, t) {
  const e = ue(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = $t(n) ? xe(n) : Xt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function lo(n, t, e) {
  let s;
  if (t === "viewport")
    s = Bh(n, e);
  else if (t === "document")
    s = zh(Ft(n));
  else if (zt(t))
    s = Fh(t, e);
  else {
    const i = Ra(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return rn(s);
}
function Ha(n, t) {
  const e = Ee(n);
  return e === t || !zt(e) || Pn(e) ? !1 : gt(e).position === "fixed" || Ha(e, t);
}
function Vh(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = is(n).filter((a) => zt(a) && Jt(a) !== "body"), i = null;
  const r = gt(n).position === "fixed";
  let o = r ? Ee(n) : n;
  for (; zt(o) && !Pn(o); ) {
    const a = gt(o), l = yr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ks(o) && !l && Ha(n, o)) ? s = s.filter((d) => d !== o) : i = a, o = Ee(o);
  }
  return t.set(n, s), s;
}
function Uh(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? Vh(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, d) => {
    const h = lo(t, d, i);
    return c.top = ae(h.top, c.top), c.right = Te(h.right, c.right), c.bottom = Te(h.bottom, c.bottom), c.left = ae(h.left, c.left), c;
  }, lo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function jh(n) {
  return La(n);
}
function Kh(n, t, e) {
  const s = $t(t), i = Ft(t), r = e === "fixed", o = ue(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  if (s || !s && !r)
    if ((Jt(t) !== "body" || ks(i)) && (a = Ln(t)), s) {
      const c = ue(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Wa(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function co(n, t) {
  return !$t(n) || gt(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function Oa(n, t) {
  const e = ut(n);
  if (!$t(n))
    return e;
  let s = co(n, t);
  for (; s && Ph(s) && gt(s).position === "static"; )
    s = co(s, t);
  return s && (Jt(s) === "html" || Jt(s) === "body" && gt(s).position === "static" && !yr(s)) ? e : s || Lh(n) || e;
}
const qh = async function(n) {
  let {
    reference: t,
    floating: e,
    strategy: s
  } = n;
  const i = this.getOffsetParent || Oa, r = this.getDimensions;
  return {
    reference: Kh(t, await i(e), s),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Gh(n) {
  return gt(n).direction === "rtl";
}
const Yh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hh,
  getDocumentElement: Ft,
  getClippingRect: Uh,
  getOffsetParent: Oa,
  getElementRects: qh,
  getClientRects: Oh,
  getDimensions: jh,
  getScale: xe,
  isElement: zt,
  isRTL: Gh
};
function Xh(n, t) {
  let e = null, s;
  const i = Ft(n);
  function r() {
    clearTimeout(s), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = n.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const p = Es(d), g = Es(i.clientWidth - (c + h)), _ = Es(i.clientHeight - (d + m)), b = Es(c), v = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -b + "px",
      threshold: ae(0, Te(1, l)) || 1
    };
    let w = !0;
    function x(C) {
      const S = C[0].intersectionRatio;
      if (S !== l) {
        if (!w)
          return o();
        S ? o(!1, S) : s = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(x, v);
    }
    e.observe(n);
  }
  return o(!0), r;
}
function wr(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = vr(n), d = i || r ? [...c ? is(c) : [], ...is(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Xh(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? ue(n) : null;
  l && b();
  function b() {
    const y = ue(n);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(b);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const Rn = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: Yh,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return Ah(n, t, {
    ...i,
    platform: r
  });
};
var re, wt, Kt;
class za extends W {
  constructor(e) {
    super(e);
    U(this, re, void 0);
    U(this, wt, void 0);
    U(this, Kt, void 0);
    j(this, re, B()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = P(this, re)) == null ? void 0 : e.current;
  }
  get container() {
    return P(this, Kt);
  }
  _handleClick(e) {
    const { togglePop: s } = this.props, i = u(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(e) {
    const { className: s, state: i } = e, { open: r } = i;
    return k(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: s,
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
      id: `pick-pop-${s}`,
      className: this._getClass(e),
      style: c,
      ref: P(this, re),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!P(this, Kt)) {
      const s = u(e.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(s)), j(this, Kt, i[0]);
    }
    return P(this, Kt);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: s, props: i } = this, { state: r } = i;
    if (!e || !s || !r.open) {
      P(this, wt) && (P(this, wt).call(this), j(this, wt, void 0));
      return;
    }
    P(this, wt) || j(this, wt, wr(s, e, () => {
      const { placement: o, width: a } = i;
      Rn(s, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? An() : null, ns(), Dn(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        u(e).css({
          left: l,
          top: c,
          width: a === "100%" ? u(s).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, s;
    this.layout(), u(document).on("click", this._handleDocClick), (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, s;
    (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    u(document).off("click", this._handleDocClick);
    const e = P(this, wt);
    e && (e(), j(this, wt, void 0)), j(this, Kt, void 0), j(this, re, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(e) {
    return oh(this._render(e), this._getContainer(e));
  }
}
re = new WeakMap(), wt = new WeakMap(), Kt = new WeakMap();
var Ba = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Vt = (n, t, e) => (Ba(n, t, "read from private field"), e ? e.call(n) : t.get(n)), qn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ge = (n, t, e, s) => (Ba(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), zs, yt, Ve;
let lt = class extends W {
  constructor(t) {
    super(t), qn(this, zs, void 0), qn(this, yt, 0), qn(this, Ve, B()), this.toggle = async (e, s) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      Vt(this, yt) && (clearTimeout(Vt(this, yt)), ge(this, yt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Js(200, (a) => {
        ge(this, yt, a);
      }), ge(this, yt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Js(50, (a) => {
        ge(this, yt, a);
      }), ge(this, yt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ge(this, zs, t.id ?? `_pick${Ot()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Vt(this, zs);
  }
  get pop() {
    return Vt(this, Ve).current;
  }
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
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
    const { onChange: s } = this.props;
    s && s.call(this, t, e);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: s } = this.state, { open: i } = e;
    if (s === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, e) {
    const { open: s, value: i } = this.state, { open: r, value: o } = e;
    if (!!s != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Vt(this, yt) && clearTimeout(Vt(this, yt));
    const t = Vt(this, Ve).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: Vt(this, Ve), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Me, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
zs = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
lt.Trigger = mr;
lt.Pop = za;
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
let Fa = class extends lt {
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
    const { syncBackground: t, syncBorder: e, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), s && u(s).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ f(q, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = u.extend({
      color: e.value
    }, s.style), s.className = k("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Fa.defaultProps = {
  ...lt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Va extends H {
}
Va.NAME = "ColorPicker";
Va.Component = Fa;
const rs = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), Jh = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(G(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, xs = (n, t = /* @__PURE__ */ new Date()) => G(n).toDateString() === G(t).toDateString(), yi = (n, t = /* @__PURE__ */ new Date()) => G(n).getFullYear() === G(t).getFullYear(), Ua = (n, t = /* @__PURE__ */ new Date()) => (n = G(n), t = G(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Pu = (n, t = /* @__PURE__ */ new Date()) => {
  n = G(n), t = G(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Lu = (n, t) => xs(G(t), n), Ru = (n, t) => xs(G(t).getTime() - rs, n), Wu = (n, t) => xs(G(t).getTime() + rs, n), st = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = G(n), Number.isNaN(n.getDay()))
    return e;
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", yi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Hu = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = st(n, yi(n) ? s.month : s.full);
  if (xs(n, t))
    return i;
  const r = st(t, yi(n, t) ? Ua(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var cs, hs;
class ja extends W {
  constructor() {
    super(...arguments);
    U(this, cs, B());
    U(this, hs, (e, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    u(P(this, cs).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: s = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += s)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: P(this, cs), children: [
      /* @__PURE__ */ f(
        it,
        {
          className: l,
          items: o,
          onClickItem: P(this, hs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        it,
        {
          className: l,
          items: a,
          onClickItem: P(this, hs).bind(this, "minute")
        }
      )
    ] });
  }
}
cs = new WeakMap(), hs = new WeakMap();
var Zh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ms = (n, t, e) => (Zh(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Is = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, bi, vi, wi, Ci;
const ho = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ka = class extends lt {
  constructor(t) {
    super(t), Is(this, bi, () => {
      this.toggle(!0);
    }), Is(this, vi, (s) => {
      this.setTime(s.target.value);
    }), Is(this, wi, (s, i) => {
      this.setTime({ [s]: i });
    }), Is(this, Ci, () => {
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
    const s = ho(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? st(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = ho(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ms(this, Ci), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Ms(this, bi), onChange: Ms(this, vi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: k(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ f(ja, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: Ms(this, wi) });
  }
};
bi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
Ka.defaultProps = {
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
const Qh = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * rs;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, uo = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => st(e, t)));
var pn;
class td extends W {
  constructor() {
    super(...arguments);
    U(this, pn, (e) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(e) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = Z.getLang("weekNames"),
      monthNames: o = Z.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const M = (i + S) % 7;
      h.push(/* @__PURE__ */ f("div", { className: k("col mini-calendar-day", { "is-weekend": M === 0 || M === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[M] : M }) }, S));
    }
    const { startTime: p, days: g, firstDay: _ } = Qh(a, l, i), b = _ + g * rs;
    let y = p;
    const v = [], w = "yyyy-MM-dd", x = uo(c, w), C = uo(d, w);
    for (; y <= b; ) {
      const S = [];
      for (let M = 0; M < 7; M++) {
        const D = new Date(y), A = D.getDate(), T = st(D, w), I = D.getDay(), V = Ua(D, _), E = k("col mini-calendar-day", {
          active: x.has(T),
          selected: C.has(T),
          "is-first": A === 1,
          "is-in-month": V,
          "is-out-month": !V,
          "is-today": xs(D, s),
          "is-weekend": I === 0 || I === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: E, "data-date": T, children: /* @__PURE__ */ f("a", { className: m, onClick: P(this, pn), children: A === 1 && o ? o[D.getMonth()] : D.getDate() }) }, T)
        ), y += rs;
      }
      v.push(/* @__PURE__ */ f("div", { className: "row", children: S }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      v
    ] });
  }
}
pn = new WeakMap();
var ds, mn;
class fo extends W {
  constructor() {
    super(...arguments);
    U(this, ds, B());
    U(this, mn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(P(this, ds).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(et, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: P(this, mn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: s, ref: P(this, ds), children: a });
  }
}
ds = new WeakMap(), mn = new WeakMap();
var $e, us, fs, ps, ms, gs, gn, Ga, _n, Ya;
class qa extends W {
  constructor(e) {
    super(e);
    U(this, gn);
    U(this, _n);
    U(this, $e, void 0);
    U(this, us, void 0);
    U(this, fs, void 0);
    U(this, ps, void 0);
    U(this, ms, void 0);
    U(this, gs, void 0);
    j(this, $e, B()), j(this, us, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), j(this, fs, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), j(this, ps, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), j(this, ms, (r) => {
      this.setState({ year: r, select: "day" });
    }), j(this, gs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Jh(l, r.substring(5).replace("+", ""))), r = st(l, "yyyy-MM-dd");
      }
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: s } = e, i = s ? new Date(s) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((s) => s.select === e ? { select: "day" } : { select: e });
  }
  componentDidMount() {
    u(P(this, $e).current).find(".active").scrollIntoView();
  }
  render(e, s) {
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
    } = s, p = m === "day", g = G(e.minDate || "1970-1-1"), _ = G(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: P(this, $e), onClick: P(this, us), children: [
      Fn(this, gn, Ga).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(et, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ f(et, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: P(this, fs), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: P(this, ps), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          td,
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
          fo,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: P(this, ms)
          }
        ) : m === "month" ? /* @__PURE__ */ f(
          fo,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: P(this, gs)
          }
        ) : null,
        p ? Fn(this, _n, Ya).call(this, e) : null
      ] })
    ] });
  }
}
$e = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), gn = new WeakSet(), Ga = function(e) {
  let { menu: s } = e;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(it, { ...s })) : null;
}, _n = new WeakSet(), Ya = function(e) {
  let { actions: s } = e;
  const { todayText: i, clearText: r } = e;
  return s || (s = [{ text: i, "data-set-date": st(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ot, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ f(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var ed = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Gn = (n, t, e) => (ed(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Yn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ki, xi, $i;
let Xa = class extends lt {
  constructor(t) {
    super(t), Yn(this, ki, () => {
      this.toggle(!0);
    }), Yn(this, xi, (s) => {
      this.setDate(s.target.value);
    }), Yn(this, $i, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = G(s), d = !s || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : st(c, l) }, () => {
        !d && i && i(s), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Gn(this, $i), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Gn(this, ki), onChange: Gn(this, xi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: k(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: k(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ f(
      qa,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
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
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
Xa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Ja extends H {
}
Ja.NAME = "TimePicker";
Ja.Component = Ka;
class Za extends H {
}
Za.NAME = "DatePicker";
Za.Component = Xa;
class sd extends W {
  render(t) {
    const { date: e, time: s } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(qa, { ...e }),
      /* @__PURE__ */ f(ja, { ...s })
    ] });
  }
}
var nd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, He = (n, t, e) => (nd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Oe = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Si, Ni, Ti, Ei, Mi;
const po = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Qa = class extends lt {
  constructor(t) {
    super(t), Oe(this, Si, () => {
      this.toggle(!0);
    }), Oe(this, Ni, (o) => {
      this.setDate(o.target.value);
    }), Oe(this, Ti, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), Oe(this, Ei, (o, a) => {
      this.setTime({ [o]: a });
    }), Oe(this, Mi, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = G(o), g = !o || Number.isNaN(p.getDay()), _ = st(p, d), [, b = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${b}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: s, timeFormat: i, joiner: r } = t;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, `${s}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: s, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(o), [p, g] = m.split(":"), { hour: _ = +p, minute: b = +g } = t;
      c = `${_}:${b}`;
    }
    const d = po(c), h = this.state.value.split(o)[0] || st(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${st(d, r)}` : s ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = po(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: He(this, Ti),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: He(this, Si),
          onChange: (m) => {
            He(this, Ni).call(this, m), He(this, Mi).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: k(s.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: k(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, b] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
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
        minute: b,
        minuteStep: g,
        onChange: He(this, Ei)
      }
    };
    return /* @__PURE__ */ f(sd, { ...y });
  }
};
Si = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Qa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class tl extends H {
}
tl.NAME = "DatetimePicker";
tl.Component = Qa;
const mo = "show", go = "in", id = '[data-dismiss="modal"]', Xn = "modal-hide", Ae = class Ue extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(id) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
        const s = new ResizeObserver(() => {
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        s.observe(e), this._rob = s;
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
      return u(e).removeClass(Xn).css("z-index", `${Ue.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: s, backdrop: i, className: r, style: o } = this.options;
    u(e).setClass({
      "modal-trans": s,
      "modal-no-backdrop": !i,
      [Xn]: !1
    }, mo, r).css({
      zIndex: `${Ue.zIndex++}`,
      ...o
    });
    const a = this.constructor;
    return a.hideOthersOnShow && a.getAll().forEach((l) => {
      l !== this && l.shown && l.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(go), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    u(this.modalElement).addClass(Xn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, u(this.modalElement).removeClass(go), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(mo), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthersOnShow && ((e = t.getAll().findLast((s) => s.shown && s !== this)) == null || e.show()), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = u(s);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const d = { width: "", height: "" };
      typeof e == "object" ? (d.width = e.width, d.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (d.width = e), i.css(d);
    }
    t = t ?? this.options.position ?? "fit";
    const r = s.clientWidth, o = s.clientHeight;
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
    (e = Ue.query(t, void 0, (s) => s.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ue.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
Ae.NAME = "Modal";
Ae.MULTI_INSTANCE = !0;
Ae.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ae.hideOthersOnShow = !0;
Ae.zIndex = 1500;
let os = Ae;
u(window).on(`resize.${os.NAMESPACE}`, () => {
  os.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class el extends W {
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
      title: s
    } = this.props;
    return rt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : rt(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ot, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? rt(t) ? t : /* @__PURE__ */ f("div", { className: k("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return rt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-footer", e), children: s ? /* @__PURE__ */ f(ot, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: k("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: k("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
el.defaultProps = { closeBtn: !0 };
class sl extends W {
  constructor() {
    super(...arguments), this._ref = B(), this.state = {}, this._watchIframeHeight = () => {
      var s, i;
      const t = (i = (s = this._ref.current) == null ? void 0 : s.contentWindow) == null ? void 0 : i.document;
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
sl.defaultProps = {
  watchHeight: !0
};
var Cr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, _t = (n, t, e) => (Cr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ze = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, _e = (n, t, e, s) => (Cr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Bs = (n, t, e) => (Cr(n, t, "access private method"), e), Et, je, Mt, on, kr, Fs, Ii;
function rd(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function od(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
    url: s,
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
    body: e === "html" ? /* @__PURE__ */ f(he, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function ad(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(sl, { url: e, watchHeight: !o })
  };
}
const ld = {
  custom: rd,
  ajax: od,
  iframe: ad
}, Jn = "loading", nl = class se extends os {
  constructor() {
    super(...arguments), ze(this, on), ze(this, Fs), ze(this, Et, void 0), ze(this, je, void 0), ze(this, Mt, void 0);
  }
  get id() {
    return _t(this, je);
  }
  get loading() {
    var t;
    return (t = _t(this, Et)) == null ? void 0 : t.classList.contains(Jn);
  }
  get shown() {
    var t;
    return !!((t = _t(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = _t(this, Et);
    if (!t) {
      const { options: e } = this;
      let s = _t(this, je);
      s || (s = e.id || `modal-${Ot()}`, _e(this, je, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      _e(this, Et, t);
    }
    return t;
  }
  get $emitter() {
    const t = _t(this, Et);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), se.getAll().some((t) => t.shown) || u("html").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("html").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = _t(this, Et);
    t && (u(t).removeData(this.constructor.KEY).remove(), _e(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    _t(this, Mt) && clearTimeout(_t(this, Mt));
    const { modalElement: t, options: e } = this, s = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = ld[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", o).addClass(Jn), r && _e(this, Mt, window.setTimeout(() => {
      _e(this, Mt, 0), Bs(this, Fs, Ii).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Bs(this, Fs, Ii).call(this, this.options.failedTip) : l && typeof l == "object" && await Bs(this, on, kr).call(this, l), _t(this, Mt) && (clearTimeout(_t(this, Mt)), _e(this, Mt, 0)), this.layout(), await Js(100), s.removeClass(Jn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = se.ensure(s, r), a = `${se.NAMESPACE}.open${Ot()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof s == "object" && s.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ f("div", { children: s });
    i ? m = /* @__PURE__ */ f("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: k("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((b) => {
      b = {
        ...typeof b == "string" ? { key: b } : b
      }, typeof b.key == "string" && (b.text || (b.text = Z.getLang(b.key, b.key)), b.btnType || (b.btnType = `btn-wide ${b.key === "confirm" ? "primary" : "btn-default"}`)), b && p.push(b);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: b, event: y }) => {
        const v = se.query(y.target, c);
        g = b.key, (a == null ? void 0 : a(b, v)) !== !1 && v && v.hide();
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
    const { onClickAction: e, onResult: s, ...i } = t;
    return await se.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
on = /* @__PURE__ */ new WeakSet();
kr = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return u(this.modalElement).html(n[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, ss(
      /* @__PURE__ */ f(el, { ...n }),
      this.modalElement
    );
  });
};
Fs = /* @__PURE__ */ new WeakSet();
Ii = function(n) {
  if (n)
    return Bs(this, on, kr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: n })
    });
};
nl.DEFAULT = {
  ...os.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let cd = nl;
const hd = '[data-toggle="modal"]';
class Ai extends at {
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
    } = this.options, s = e, i = this.$element.attr("href") || "";
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), s.key === void 0 && (s.key = `${this._key}`), s;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const s = this._getStaticModalElement();
      if (!s)
        return;
      e = os.ensure(s, t);
    } else
      e = cd.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const s = e.attr("href");
        s != null && s.startsWith("#") && (t = s);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
Ai.NAME = "ModalTrigger";
u(document).on(`click${Ai.NAMESPACE}`, hd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Ai.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
let xr = class extends te {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
};
xr.NAME = "nav";
xr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class il extends H {
}
il.NAME = "Nav";
il.Component = xr;
function as(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function dd({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = as(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ f(et, { type: e, ...a });
}
function ud({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = as(i, e);
  return s = typeof s == "function" ? s(a) : Q(s, a), /* @__PURE__ */ f(K, { ...o, children: [
    r,
    s
  ] });
}
function fd({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ f(et, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const g = as(s, p);
      i && (o.url = typeof i == "function" ? i(g) : Q(i, g)), m.push(/* @__PURE__ */ f(et, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let pd = class extends W {
  render(t) {
    const {
      id: e,
      popup: s,
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
    let _ = /* @__PURE__ */ f(O, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ f("div", { className: m, children: _ }, "content"));
    const b = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? b.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : b.push(y), b.push(_), c && b.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? b : /* @__PURE__ */ f("div", { id: e, className: k("popover", a, { popup: s }), style: o, children: b });
  }
};
class $r extends H {
}
$r.NAME = "PopoverPanel";
$r.Component = pd;
const md = '[data-toggle="popover"]', _o = "show", yo = "in";
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
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
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
    const { delay: e, event: s } = t || {};
    if (s && (this._triggerEvent = s), e)
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
    if (r.addClass(_o), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(yo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o } = this.options, a = u(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(yo), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(_o), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, s ? 200 : 0);
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
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = wr(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Rn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        if (t instanceof HTMLElement && Sn(t)) {
          this.hide(!0);
          return;
        }
        const m = u(e).css({
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
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((b) => b !== "fade" && !b.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new $r(e, s), r.on("inited", () => this.layout())), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: s,
      strategy: l,
      middleware: [
        i ? An() : null,
        r ? ns(typeof r == "object" ? r : void 0) : null,
        o || d ? Dn((o || 0) + d) : null,
        a ? _i({ element: c }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: s,
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
      title: s,
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
    var t, e, s;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = u(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, r = e || (s == null ? void 0 : s.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
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
u(document).on(`click${mt.NAMESPACE} mouseenter${mt.NAMESPACE}`, md, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(mt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    mt.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const gd = '[data-toggle="dropdown"]';
class kt extends mt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: s, onClickItem: i, relativeTarget: r = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      relativeTarget: { target: r, event: this.options.triggerEvent, dropdown: this },
      ...s
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: xt(Sr, this._getMenuOptions())
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
u(document).on(`click${kt.NAMESPACE} mouseenter${kt.NAMESPACE}`, gd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(kt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    const i = {
      ...t.data(),
      show: !0,
      triggerEvent: n
    };
    if (!i.target && t.is("a")) {
      const r = t.attr("href");
      r && "#0".includes(r[0]) && (i.target = r);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), kt.ensure(t, i), n.preventDefault();
  }
});
class Wn extends et {
  constructor() {
    super(...arguments), this._ref = B();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = u(this.triggerElement), a = kt.get(this.triggerElement), l = {
      items: s,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...t
    };
    a ? a.setOptions(l) : o.data(l);
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
    const { trigger: e, placement: s } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": s,
      ref: this._ref
    };
  }
}
Wn.defaultProps = {
  caret: !0
};
Object.assign(bt.ItemComponents, { dropdown: Wn });
Object.assign(ot.ItemComponents, { dropdown: Wn });
class Sr extends Nt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this.element, e = t == null ? void 0 : t.parentElement;
    !t || !e || Rn(e, t, {
      placement: this.props.placement,
      middleware: [An(), ns(), Dn(1)]
    }).then(({ x: s, y: i }) => {
      u(t).css({
        left: s,
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
Sr.defaultProps = {
  ...Nt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Sr.inheritNestedProps = [...Nt.inheritNestedProps, "popup"];
function _d({
  type: n,
  pagerInfo: t,
  linkCreator: e,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || s.map((c) => {
    const d = { ...t, recPerPage: c };
    return {
      ...r,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : Q(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Wn, { type: "dropdown", dropdown: i, ...o });
}
function yd({
  key: n,
  page: t,
  type: e,
  btnType: s,
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
    var b;
    h = Number((b = _.target) == null ? void 0 : b.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const b = as(i, h);
    a && !a({ info: b, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(b) : Q(l, b));
  }, g = as(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : Q(l, g), /* @__PURE__ */ f("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ f(et, { type: s, ...d, onClick: p })
  ] });
}
let Hn = class extends ot {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: s = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +s, recPerPage: +i, pageTotal: i ? Math.ceil(s / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? u.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && u.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
Hn.NAME = "pager";
Hn.ItemComponents = {
  ...ot.ItemComponents,
  info: ud,
  link: dd,
  nav: fd,
  "size-menu": _d,
  goto: yd
};
Hn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class rl extends H {
}
rl.NAME = "Pager";
rl.Component = Hn;
class ol extends H {
}
ol.NAME = "Pick";
ol.Component = lt;
var Se, _s;
class al extends W {
  constructor(e) {
    super(e);
    U(this, Se, void 0);
    U(this, _s, void 0);
    this._searchInput = B(), this._measure = B(), this._changeTimer = 0, j(this, Se, (s) => {
      const i = s.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), s.stopPropagation();
    }), j(this, _s, (s) => {
      var i, r;
      s.stopPropagation(), (r = (i = this.props).onClear) == null || r.call(i), this.setState({ search: "" }, () => this.focus());
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
      const { current: s } = this._measure, { current: i } = this._searchInput;
      if (s && i) {
        const r = u(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer);
  }
  render(e, s) {
    const { placeholder: i, inline: r } = e, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: P(this, _s), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: P(this, Se),
          onInput: P(this, Se),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Se = new WeakMap(), _s = new WeakMap();
class bd extends mr {
  constructor() {
    super(...arguments), this._search = B(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(O, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
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
    const { state: { search: e }, searchHint: s } = t;
    return /* @__PURE__ */ f(
      al,
      {
        inline: !0,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: s
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: s }, search: i, placeholder: r, children: o } = this.props, a = s && i;
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
    const { name: e, state: { value: s = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(s);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ f("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ f("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    u(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", pi), this._skipTriggerChange = !1;
    }
  }
}
class vd extends mr {
  constructor() {
    super(...arguments), this._search = B(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: s } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = s.find((o) => o.value === e);
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
    return /* @__PURE__ */ f(
      al,
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
    const { children: e, state: { selections: s = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [c] = s, d = i && o;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: g } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(O, { content: g }) }, "main");
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
let De = class extends it {
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
De.NAME = "tree";
De.defaultProps = {
  ...it.defaultProps,
  indent: 12
};
De.defaultItemProps = {
  ...it.defaultItemProps,
  innerComponent: "div"
};
De.inheritNestedProps = [...it.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let $s = class extends Nt {
  _getItem(t, e, s) {
    return De.getTreeItem(t, super._getItem(t, e, s));
  }
};
$s.NAME = "tree";
$s.inheritNestedProps = [...Nt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
$s.defaultItemProps = {
  ...Nt.defaultProps,
  innerComponent: "div"
};
function ll(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && ll(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class wd extends za {
  constructor() {
    super(...arguments), this._menu = B(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, m) => {
        const p = this._getItem(h, m);
        return p && (p.active ? o = !0 : r = !1, d.push(p)), d;
      }, []));
      const a = r || s.has(t.value);
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
      var s;
      return (s = this._renderItemCallback) == null ? void 0 : s.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const s = t.value, i = e.target;
      if (t.disabled || s === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((d) => this._disabledSet.has(d.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...ll(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          u(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(s);
      else
        a(s), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return u(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: s, state: i, checkbox: r } = t, { items: o, search: a } = i;
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
    }, e, s);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ f($s, { hover: !0, ...s }) : /* @__PURE__ */ f(Nt, { ...s });
  }
}
function Vs(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && Vs(s.items, e), e.set(String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let Nr = class extends lt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = B(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    const { valueSplitter: e = ",", emptyValue: s = "" } = this.props;
    this._emptyValueSet = new Set(s.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = Vs(i);
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
    const { items: e = [], searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else if (await Js(s || 500), this._abort !== t || (r = await Cn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = Vs(r);
        i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, t || i.search !== e.search || s.items !== i.items) {
      const a = await this.load();
      r.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, i.items = s.items, i.search = e.search;
    }
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
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
    return t.Trigger || (t.multiple ? bd : vd);
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], u.unique(e).reduce((s, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || s.push(i)), s), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    if (this.props.disabled)
      return Promise.resolve(this.state);
    let s = this.formatValueList(t);
    if (s.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = Vs(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    if (e) {
      const r = this._trigger.current;
      r && (r._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
Nr.defaultProps = {
  ...lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Nr.Pop = wd;
class cl extends H {
}
cl.NAME = "Picker";
cl.Component = Nr;
class hl extends at {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: s } = this.options;
      s === 0 ? e() : setTimeout(e, s);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, s = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(An()), r && s.middleware.push(r === !0 ? ns() : ns(r)), o && s.middleware.push(_i({ element: this.$arrow[0] })), a && s.middleware.push(Dn(a)), s;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = wr(t, e, () => {
      Rn(t, e, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !_i || !o.arrow)
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
    const { strategy: s } = this.options;
    e.addClass(s), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
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
hl.NAME = "Popovers";
hl.DEFAULT = {
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
class dl extends H {
}
dl.NAME = "SearchBox";
dl.Component = ar;
function Zn(n, t) {
  const [e, s] = $n(n);
  return s === "%" ? t * e / 100 : e;
}
const bo = "is-sidebar-resizing", Qn = "has-sidebar-animation";
class ul extends at {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), s = e[0], i = e.width();
    this._container = s;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      gutterWidth: a = $n(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: m,
      minWidth: p = 0,
      maxWidth: g = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, b = _ ? u(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Zn(m || t.width(), i), this._minWidth = Zn(p, i), this._maxWidth = Zn(g, i), this._width = (r ? Rt.get(this._storeID) : null) || this._defaultWidth, this._parent = b[0], b.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let y = t.find(".sidebar-gutter");
    y.length || (y = u('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = y, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (y.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), y.on("click", ".gutter-toggle", () => this.toggle())), c && y.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new vs(y, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, b.addClass(bo).removeClass(Qn);
      },
      onMove: (v, w) => {
        Math.abs(w.deltaX) < 10 || this.update(this._startWidth + w.deltaX);
      },
      onMoveEnd: () => {
        d && b.addClass(Qn), b.removeClass(bo);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      b.addClass(Qn);
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
    const { preserve: s, onResize: i, onToggle: r } = this.options, o = !this._width, a = !t;
    this._width = t, s && Rt.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, s = !e;
    this.$element.toggleClass("is-collapsed", s), u(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", s);
  }
}
ul.NAME = "Sidebar";
ul.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class fl extends H {
}
fl.NAME = "Toolbar";
fl.Component = ot;
me(ph);
const Cd = '[data-toggle="tooltip"]';
class Pt extends mt {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let r = s, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: k("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Pt.NAME = "Tooltip";
Pt.DEFAULT = {
  ...mt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Pt.NAMESPACE} mouseenter${Pt.NAMESPACE}`, Cd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(Pt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Pt.ensure(t, { show: Pt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
class Tr extends H {
}
Tr.NAME = "Tree";
Tr.Component = De;
Tr.replace = !0;
class pl extends H {
}
pl.NAME = "SearchTree";
pl.Component = $s;
class Er extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Fc(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), s) {
        const m = u(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (s) {
      const h = u(`<i class="icon icon-${s} mr-1"></i>`);
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
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: s } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: s } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const s = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${s}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const s = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: s, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (e) {
      const c = [];
      for (let d of t) {
        if (s && this.fileMap.size >= s)
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
    const s = this.fileMap.get(e);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), s && (t = this.fileMap.get(s) ?? t);
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
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Pt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Pt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Bc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
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
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Er.NAME = "Upload";
Er.DEFAULT = {
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
class ml extends Er {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
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
    const s = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const s = new FileReader();
    s.onload = () => {
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})`, backgroundSize: "cover" }).prependTo(e);
    }, s.readAsDataURL(t);
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
    const { duplicatedHint: e } = this.options, s = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = s.closest(".file-item").find(".file-name");
        if (r.html() === s.val()) {
          s.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(e);
        this.renameFileItem(t, s.val()), s.addClass("hidden"), r.html(s.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && s.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(e);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
}
ml.NAME = "UploadImgs";
ml.DEFAULT = {
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
let gl = class extends K {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ f("div", { className: k("card-content", r), children: [
          e ? /* @__PURE__ */ f("div", { className: k("card-subtitle", s), children: /* @__PURE__ */ f(O, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ f(O, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: s,
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
    if (!e && !s && !r && !c && !h)
      return;
    const p = a ? "a" : "span";
    return /* @__PURE__ */ f("div", { className: k("card-heading", m), children: [
      e ? /* @__PURE__ */ f(q, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ f("span", { className: k("card-prefix", i), children: s }, "prefix") : null,
      r ? /* @__PURE__ */ f(p, { className: k("card-title", o), href: a, ...l, children: /* @__PURE__ */ f(O, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ f("span", { className: k("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ f(O, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ f("div", { className: k("card-header", s), children: /* @__PURE__ */ f(O, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ f("div", { className: k("card-footer", s), children: [
        /* @__PURE__ */ f(O, { content: e }, "footer"),
        ot.render(i, [t], { key: "foot-actions", relativeTarget: t, className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ot.render(t.actions, [t], { key: "actions", relativeTarget: t, className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const s = R({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ f(te, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = k("item-avatar", s.className), /* @__PURE__ */ f(ys, { ...s }, "avatar");
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
};
class vo extends gl {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, innerComponent: i = "div" } = t, r = R({ className: k("card", s) }, e);
    return /* @__PURE__ */ f(i, { ...r, children: super._getChildren(t) });
  }
}
let Pe = class extends te {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return R({
      style: {
        "--list-gap": e ? Ce(e) : void 0,
        "--list-count-per-row": s
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
Pe.NAME = "card-list";
Pe.TAG = "div";
Pe.ItemComponents = {
  ...te.ItemComponents,
  default: vo,
  item: vo
};
Pe.defaultItemProps = {
  component: "div"
};
class Mr extends H {
}
Mr.NAME = "Card";
Mr.Component = gl;
Mr.replace = !0;
class _l extends H {
}
_l.NAME = "CardList";
_l.Component = Pe;
class Ir extends kt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Ir.NAME = "ContextMenu";
Ir.DEFAULT = {
  ...kt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function kd(n) {
  const { left: t, top: e, id: s, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = n;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": s,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(he, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const ti = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), wo = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], As = "Dashboard:Block.cache:";
let yl = class extends W {
  constructor(t) {
    super(t), this._ref = B(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: s } = this.state, i = {};
      let r = !1;
      s.forEach((o) => {
        const [a, l, c, d] = this._map.get(o.id), h = this._oldMap.get(o.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(o.id, [a, l, c, d]));
      }), r && e(i);
    }, this._handleMenuClick = (e) => {
      const s = e.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      Ir.show({
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
    const { id: s } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === s);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, s = e.findIndex((i) => i.id === t);
    s < 0 || (e.splice(s, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const s = this.getBlock(t);
    !s || s.loading || (e = e || s.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await u.fetch(e, [t, s], ({ url: r }) => ({ url: Q(r, s), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, s);
        });
      } catch (i) {
        const r = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, s);
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
    for (const s of t) {
      if (s.loading)
        return;
      if (!s.visible && this._isVisible(s.id))
        return this.update({ id: s.id, visible: !0 });
      if (s.needLoad && s.visible) {
        e = s.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? Rt.set(`${As}${s}:${t}`, e) : Rt.session.set(`${As}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? Rt.get(`${As}${e}:${t}`) : Rt.session.get(`${As}${t}`);
    if (s)
      return { html: s };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: s, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: m = -1,
        fetch: p = e,
        menu: g = s,
        content: _,
        ...b
      } = o, [y, v] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: v,
        left: Math.min(h, i - y),
        top: m,
        fetch: p,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!p,
        ...b
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: s } = this.props;
    return t = t ?? e, typeof t == "string" && (t = s[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: s } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => wo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => wo(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), s && (o = Math.max(o, s[1] + s[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new Mn(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, s) => {
        const i = s.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, s) => {
        const i = s.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: s, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / s)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: s } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && s) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, d] = e === a.id ? s : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (o[l] = { ...a, left: c, top: d }, r[a.id] = { left: c, top: d });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: s, top: i, width: r, height: o } = t, a = [s, i, r, o];
    s < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: s } = this.state;
    if (s && ti(t, s))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && ti(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: s } = this.state;
    for (s && ti(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [s, i, r, o] = e;
    let a = i;
    if (s >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [s, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = s < 0 ? 0 : s, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, r, o])) {
        d = !0;
        break;
      }
      s < 0 ? (l += 1, l + r > h && (l = 0, c += 1)) : c += 1;
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
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: s * r[1], width: `${100 * r[2] / i}%`, height: s * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [g, _, b, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              kd,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: s * _,
                width: `${100 * b / i}%`,
                height: s * y,
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
yl.defaultProps = {
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
class bl extends H {
}
bl.NAME = "Dashboard";
bl.Component = yl;
var qt, Gt;
class Co extends W {
  constructor(e) {
    super(e);
    U(this, qt, void 0);
    U(this, Gt, void 0);
    j(this, qt, 0), j(this, Gt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (P(this, qt) && cancelAnimationFrame(P(this, qt)), j(this, qt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), j(this, qt, 0);
      })), s.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (s) => {
      this.state.dragStart || this.setState({ dragStart: { x: s.clientX, y: s.clientY, offset: this.scrollPos } }), s.stopPropagation();
    }, this._handleClick = (s) => {
      const i = s.currentTarget;
      if (!i)
        return;
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), s.preventDefault();
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
    const { scrollSize: e, clientSize: s } = this.props;
    return Math.max(0, e - s);
  }
  get barSize() {
    const { clientSize: e, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (j(this, Gt, typeof e == "string" ? document : e.current), P(this, Gt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), P(this, Gt) && P(this, Gt).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: s } = this.props;
    s && s(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: s,
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
    return s === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
const an = /* @__PURE__ */ new Map(), ln = [];
function vl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && an.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  an.set(e, n), t != null && t.buildIn && !ln.includes(e) && ln.push(e);
}
function Tt(n, t) {
  vl(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return e.plugin = n, e;
}
function wl(n) {
  return an.delete(n);
}
function xd(n) {
  if (typeof n == "string") {
    const t = an.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Cl(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = xd(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && Cl(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function $d(n = [], t = !0) {
  return t && ln.length && n.unshift(...ln), n != null && n.length ? Cl([], n, /* @__PURE__ */ new Set()) : [];
}
function kl() {
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
function Sd(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function ko(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function ei(n, t = !1) {
  if (!n.list.length)
    return;
  if (n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const s = n.width - n.totalWidth;
    if (!t && s > 0 || t && s !== 0) {
      const i = n.flexList.length ? n.flexList : n.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math[s < 0 ? "max" : "min"](s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let e = 0;
  n.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = e, e += s.realWidth;
  });
}
function Nd(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (v) => (typeof v == "function" && (v = v.call(n)), v = ko(v, 0), v < 1 && (v = Math.round(v * s)), v), d = {
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
  const b = [], y = {};
  if (e.forEach((v) => {
    const { colTypes: w, onAddCol: x } = v;
    w && Object.entries(w).forEach(([C, S]) => {
      y[C] || (y[C] = []), y[C].push(S);
    }), x && b.push(x);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: w = "", name: x } = v, C = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
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
    M && M.forEach((F) => {
      const ct = typeof F == "function" ? F.call(n, C) : F;
      ct && Object.assign(C, ct, v);
    });
    const { fixed: D, flex: A, minWidth: T = r, maxWidth: I = o } = C, V = ko(C.width || i, i);
    S.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, S.width = Sd(V < 1 ? Math.round(V * s) : V, T, I), b.forEach((F) => F.call(n, S)), p.push(S), g[S.name] = S;
    const E = D ? D === "left" ? h : m : d;
    E.list.push(S), E.totalWidth += S.width, E.width = E.totalWidth, S.flex && E.flexList.push(S), typeof C.order == "number" && (_ = !0);
  }), _) {
    const v = (w, x) => (w.setting.order ?? 0) - (x.setting.order ?? 0);
    p.sort(v), h.list.sort(v), d.list.sort(v), m.list.sort(v);
  }
  return ei(h, !0), ei(m, !0), d.widthSetting = s - h.width - m.width, ei(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function Td({ col: n, className: t, height: e, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var V;
  const p = {
    left: d ?? n.left,
    top: h ?? s.top,
    width: c ?? n.realWidth,
    height: e,
    ...o
  }, { align: g, border: _ } = n.setting, b = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...r
  }, y = ["dtable-cell", l, t, n.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], v = ["dtable-cell-content", n.setting.cellClass], w = (V = s.data) == null ? void 0 : V[n.name], x = [a ?? w ?? ""], C = i ? i(x, { row: s, col: n, value: w }, xt) : x, S = [], M = [], D = {}, A = {};
  let T = "div";
  C == null || C.forEach((E) => {
    if (typeof E == "object" && E && !rt(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const F = E.outer ? S : M;
      E.html ? F.push(/* @__PURE__ */ f("div", { className: k("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : b, E.style), E.className && (E.outer ? y : v).push(E.className), E.children && F.push(E.children), E.attrs && Object.assign(E.outer ? D : A, E.attrs)), E.tagName && !E.outer && (T = E.tagName);
    } else
      M.push(E);
  });
  const I = T;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k(y),
      style: p,
      "data-col": n.name,
      "data-row": s.id,
      "data-type": n.type || null,
      ...m,
      ...D,
      children: [
        M.length > 0 && /* @__PURE__ */ f(I, { className: k(v), style: b, ...A, children: M }),
        S
      ]
    }
  );
}
function si({
  rows: n = [],
  cols: t,
  rowHeight: e,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: d = Td,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(n) ? n : [n], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: m.reduce((b, y, v) => {
        const w = t.length;
        return t.forEach((x, C) => {
          b.push(
            /* @__PURE__ */ f(
              d,
              {
                className: k(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  C ? "" : "is-first-in-row",
                  C === w - 1 ? "is-last-in-row" : "",
                  v ? "" : "is-first-row",
                  v === g - 1 ? "is-last-row" : ""
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
        }), b;
      }, []) })
    }
  );
}
function xl({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
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
    si,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: h
    },
    "left"
  ));
  let g = null;
  r.list.length && (g = /* @__PURE__ */ f(
    si,
    {
      rows: s,
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
  return o.list.length && (_ = /* @__PURE__ */ f(
    si,
    {
      className: "dtable-fixed-right",
      rows: s,
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
      className: k("dtable-block", c),
      style: { ...d, top: n, height: t },
      children: [
        p,
        g,
        _,
        m
      ]
    }
  );
}
var Ar = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, N = (n, t, e) => (Ar(n, t, "read from private field"), e ? e.call(n) : t.get(n)), L = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Y = (n, t, e, s) => (Ar(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), ht = (n, t, e) => (Ar(n, t, "access private method"), e), be, Ke, le, Lt, ie, tt, At, It, qe, Us, cn, ls, Ut, Ge, Ye, Di, $l, Pi, Sl, Li, Nl, Ri, Tl, js, Wi, On, hn, Hi, Oi, zi, Bi, Xe, Ks, dn, Dr, Pr, El, Fi, Ml;
let Lr = class extends W {
  constructor(t) {
    super(t), L(this, Di), L(this, Pi), L(this, Li), L(this, Ri), L(this, js), L(this, Xe), L(this, dn), L(this, Pr), L(this, Fi), this.ref = B(), L(this, be, 0), L(this, Ke, void 0), L(this, le, !1), L(this, Lt, void 0), L(this, ie, void 0), L(this, tt, []), L(this, At, void 0), L(this, It, /* @__PURE__ */ new Map()), L(this, qe, {}), L(this, Us, void 0), L(this, cn, []), L(this, ls, { in: !1 }), this.updateLayout = () => {
      N(this, be) && cancelAnimationFrame(N(this, be)), Y(this, be, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, be, 0);
      }));
    }, L(this, Ut, (e, s) => {
      s = s || e.type;
      const i = N(this, It).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Ge, (e) => {
      N(this, Ut).call(this, e, `window_${e.type}`);
    }), L(this, Ye, (e) => {
      N(this, Ut).call(this, e, `document_${e.type}`);
    }), L(this, On, (e, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), e[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, tt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, s, i));
      }), this.options[a] && (e = this.options[a].call(this, e, s, i)), o.setting[a] && (e = o.setting[a].call(this, e, s, i)), e;
    }), L(this, hn, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Hi, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
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
    }), L(this, Oi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), L(this, zi, (e) => {
      const s = u(e.target).closest(".dtable-cell");
      if (!s.length)
        return ht(this, Xe, Ks).call(this, !1);
      ht(this, Xe, Ks).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), L(this, Bi, () => {
      ht(this, Xe, Ks).call(this, !1);
    }), Y(this, Ke, t.id ?? `dtable-${Ot()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, ie, Object.freeze($d(t.plugins))), N(this, ie).forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(N(this, qe), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ht(this, dn, Dr).call(this), N(this, tt).forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, At)) == null ? void 0 : t.options) || N(this, Lt) || kl();
  }
  get plugins() {
    return N(this, tt);
  }
  get layout() {
    return N(this, At);
  }
  get id() {
    return N(this, Ke);
  }
  get data() {
    return N(this, qe);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, ls);
  }
  componentWillReceiveProps() {
    Y(this, Lt, void 0);
  }
  componentDidMount() {
    N(this, le) ? this.forceUpdate() : ht(this, js, Wi).call(this), N(this, tt).forEach((s) => {
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([r, o]) => {
        o && this.on(r, o);
      }));
    }), this.on("click", N(this, Hi)), this.on("keydown", N(this, Oi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", N(this, zi)), this.on("mouseleave", N(this, Bi)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = new ResizeObserver(this.updateLayout);
        Y(this, Us, i);
        const { parent: r } = this;
        s.forEach((o) => {
          o !== "window" && (o === "parent" ? r && i.observe(r) : u(o).each((a, l) => i.observe(l)));
        });
      }
      s.includes("window") && this.on("window_resize", this.updateLayout);
    }
    N(this, tt).forEach((s) => {
      var i;
      (i = s.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    N(this, le) ? ht(this, js, Wi).call(this) : N(this, tt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, Us)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, It).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, Ge)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, Ye)) : t.removeEventListener(s, N(this, Ut));
    N(this, tt).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, ie).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, qe, {}), N(this, It).clear();
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Ge)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Ye)) : (r = this.element) == null || r.addEventListener(t, N(this, Ut)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Ge)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Ye)) : (o = this.element) == null || o.removeEventListener(t, N(this, Ut)));
  }
  emitCustomEvent(t, e) {
    N(this, Ut).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = s + (d === "right" ? 1 : -1) * c;
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
      typeof g == "number" && (h = s + g), typeof _ == "number" && (h = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
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
    const { rows: e, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!N(this, Lt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, At, void 0);
    else if (s === "options") {
      if (Y(this, Lt, void 0), !N(this, At))
        return;
      Y(this, At, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = u(e).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), r = s.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, s) {
    return Z(N(this, cn), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = ht(this, Fi, Ml).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": s,
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
        const b = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        b && (t = b);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), g && d ? (delete h.height, p.push(
        /* @__PURE__ */ f("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ f(O, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        ht(this, Di, $l).call(this, t),
        ht(this, Pi, Sl).call(this, t),
        ht(this, Li, Nl).call(this, t)
      ), t.scrollable && p.push(ht(this, Ri, Tl).call(this, t))), N(this, tt).forEach((_) => {
        var y;
        const b = (y = _.onRender) == null ? void 0 : y.call(this, t);
        b && (b.style && Object.assign(h, b.style), b.className && m.push(b.className), b.children && p.push(b.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: N(this, Ke),
        className: k(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
be = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakMap();
ls = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakSet();
$l = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      xl,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, On),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ma,
    {
      className: "dtable-header",
      style: { height: s },
      renders: o,
      generateArgs: [n],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
Pi = /* @__PURE__ */ new WeakSet();
Sl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ f(
    xl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, On),
      children: l
    },
    "body"
  );
};
Li = /* @__PURE__ */ new WeakSet();
Nl = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ma,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: e,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators,
      children: n.footerChildren
    },
    "footer"
  );
};
Ri = /* @__PURE__ */ new WeakSet();
Tl = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = n, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Co,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, hn),
        left: s,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Co,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, hn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
js = /* @__PURE__ */ new WeakSet();
Wi = function() {
  var n;
  Y(this, le, !1), (n = this.options.afterRender) == null || n.call(this), N(this, tt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
On = /* @__PURE__ */ new WeakMap();
hn = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Bi = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakSet();
Ks = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = u(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, ls);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), Y(this, ls, i);
};
dn = /* @__PURE__ */ new WeakSet();
Dr = function() {
  if (N(this, Lt))
    return !1;
  const t = { ...kl(), ...N(this, ie).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return Y(this, Lt, t), Y(this, tt, N(this, ie).reduce((e, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(s)), e;
  }, [])), Y(this, cn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Pr = /* @__PURE__ */ new WeakSet();
El = function() {
  var D, A;
  const { plugins: n } = this;
  let t = N(this, Lt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((T) => {
    var V;
    const I = (V = T.beforeLayout) == null ? void 0 : V.call(this, t);
    I && (t = { ...t, ...I }), Object.assign(e, T.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      Y(this, le, !0);
      return;
    }
  }
  const r = Nd(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (T, I, V) => {
    var F, ct;
    const E = { data: V ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (V || (E.lazy = !0), c.push(E), ((F = t.onAddRow) == null ? void 0 : F.call(this, E, I)) !== !1) {
      for (const vt of n)
        if (((ct = vt.onAddRow) == null ? void 0 : ct.call(this, E, I)) === !1)
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
  for (const T of n) {
    const I = (D = T.onAddRows) == null ? void 0 : D.call(this, h);
    I && (h = I);
  }
  h.forEach((T, I) => {
    m[T.id] = T, T.index = I, T.top = T.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, b = g ? t.footerHeight || l : 0;
  let y = t.height, v = 0;
  const w = h.length * l, x = _ + b + w;
  if (typeof y == "function" && (y = y.call(this, x)), y === "auto")
    v = x;
  else if (typeof y == "object")
    v = Math.min(y.max, Math.max(y.min, x));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      v = T.clientHeight;
    else {
      v = 0, Y(this, le, !0);
      return;
    }
  } else
    v = y;
  const C = v - _ - b, S = {
    options: t,
    allRows: c,
    width: i,
    height: v,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: w,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: b,
    cols: r
  }, M = (A = t.onLayout) == null ? void 0 : A.call(this, S);
  M && Object.assign(S, M), n.forEach((T) => {
    if (T.onLayout) {
      const I = T.onLayout.call(this, S);
      I && Object.assign(S, I);
    }
  }), Y(this, At, S);
};
Fi = /* @__PURE__ */ new WeakSet();
Ml = function() {
  (ht(this, dn, Dr).call(this) || !N(this, At)) && ht(this, Pr, El).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  const { cols: { center: t } } = n;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let s = 0;
  t.list.forEach((g) => {
    g.left = s, s += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && p && (_.data = p([_.id])[0], _.lazy = !1), m.push(_);
  }
  return Object.assign(n, {
    visibleRows: m,
    scrollTop: l,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), n;
};
Lr.addPlugin = vl;
Lr.removePlugin = wl;
class Il extends W {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Il.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Al(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: Q(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Rr(n, t, e) {
  var s;
  if (n != null)
    return e = e ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : Q(n, e);
}
function Dl(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), st(e, n, s ?? e))) : s ?? e;
}
function Pl(n, t) {
  const { link: e } = t.col.setting, s = Al(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Ll(n, t) {
  const { format: e } = t.col.setting;
  return e && (n[0] = Rr(e, t, n[0])), n;
}
function Rl(n, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? n[0] = e(n[0], t) : typeof e == "object" && e && (n[0] = e[n[0]] ?? n[0]), n;
}
function Wl(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Dl(s, t, n[0], i), n;
}
function Vi(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Rr(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Ed = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Vi(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ f(
          Il,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          fr,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: d,
            text: !0
          }
        ), n;
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
  onRenderCell(n, t) {
    const { formatDate: e, html: s, hint: i } = t.col.setting;
    if (e && (n = Wl(n, t, e)), n = Rl(n, t), n = Ll(n, t), s ? n = Vi(n, t) : n = Pl(n, t), i) {
      let r = t.value;
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = Q(i, t.row.data)), n.push({ attrs: { title: r } });
    }
    return n;
  }
}, Md = Tt(Ed, { buildIn: !0 }), Id = {
  html: { component: he }
}, Ad = {
  name: "custom",
  onRenderCell(n, t) {
    const { col: e } = t;
    let { custom: s } = e.setting;
    if (typeof s == "function" && (s = s.call(this, t)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: r } = this.options;
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
      typeof l == "string" && c.unshift(Id[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && u.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), n;
  }
}, Dd = Tt(Ad);
function Pd(n, t, e = !1) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!s[c] === d || (d ? s[c] = !0 : delete s[c], i[c] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !Hl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    o(c, t ?? !s[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, i, s);
    c && Object.keys(c).forEach((d) => {
      c[d] ? s[d] = !0 : delete s[d];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function Ld(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Hl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === n;
}
function Rd() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function Wd(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function xo(n, t, e = !1) {
  return /* @__PURE__ */ f(Tn, { className: "dtable-checkbox", checked: n, disabled: e });
}
const $o = 'input[type="checkbox"],.dtable-checkbox', Hd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: xo
  },
  when: (n) => !!n.checkable,
  options(n) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? n.checkable = t : n.checkable === "auto" && (n.checkable = !!n.cols.some((e) => e.checkbox)), n;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Pd,
    isRowChecked: Ld,
    isAllRowChecked: Hl,
    getChecks: Rd,
    toggleCheckable: Wd
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
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: xo(n) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(n, { row: t, col: e }) {
    var c;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return n;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, s, r === "disabled");
      n.push(
        d,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var o;
    const { id: s } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      n.push(l, { outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest($o);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    const e = u(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest($o).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Od = Tt(Hd), zd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new bs(`DTable:${this.id}`) };
  }
}, Bd = Tt(zd);
var Ol = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Ol || {});
function un(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = un.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? un.call(this, t.parent).level + 1 : 0, t;
}
function Fd(n) {
  return n !== void 0 ? un.call(this, n) : this.data.nestedMap;
}
function Vd(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !zl.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = s.get(r);
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
function zl() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Bl(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Bl(n, t, o.children, s + 1)));
  }
  return t;
}
function Fl(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, Fl(n, r, e, s);
  }), i;
}
function Vl(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && Vl(n, r.parent, e, s, i);
}
const Ds = "dtable-nested-toggle", Ud = {
  name: "nested",
  plugins: [Bd],
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, t) {
      const { nestedMap: e } = this.data, s = e.get(n.id), i = e.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, t, e) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = Fl(this, i, r, s);
        o != null && o.parent && Vl(this, o.parent, r, s, e);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((t) => t.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Fd,
    toggleRow: Vd,
    isAllCollapsed: zl,
    getNestedRowInfo: un
  },
  onCreate() {
    let { defaultNestedState: n } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (n = t);
    }
    this.state.nestedState = n || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(n) {
    var i, r;
    const { nestedMap: t } = this.data, e = String((i = n.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(n.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = e === "0" ? void 0 : e, (r = n.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(n.id, s), e) {
      let o = t.get(e);
      o || (o = {
        state: "",
        level: 0
      }, t.set(e, o)), o.children || (o.children = []), o.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Bl(this.data.nestedMap), n.sort((t, e) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a;
    const { id: s, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && n.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ f("a", { className: `${Ds} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ f("a", { className: `${Ds} state`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${Ds}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Ds}`)))
      return this.toggleRow(t), !0;
  }
}, jd = Tt(Ud);
function ni(n, { row: t, col: e }) {
  const { data: s } = t, i = s ? s[e.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (s ? s[c] : i) || n[0], h = {
    size: "xs",
    className: k(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: d,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (n[0] = /* @__PURE__ */ f(ys, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    n[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      n[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return n;
}
const Kd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ni
    },
    avatarBtn: {
      onRenderCell: ni
    },
    avatarName: {
      onRenderCell: ni
    }
  }
}, qd = Tt(Kd, { buildIn: !0 }), Gd = {
  name: "sort-type",
  onRenderHeaderCell(n, t) {
    const { col: e } = t, { sortType: s } = e.setting;
    if (s) {
      const i = s === !0 ? "none" : s, r = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      n.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        n[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: Q(l, { ...e.setting, sortType: a }), ...c, children: [
          n[0],
          r
        ] });
      } else
        n.push(r);
    }
    return n;
  }
}, Yd = Tt(Gd, { buildIn: !0 }), ii = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === n[e - 1].setting.group || (t.setting.border = "left");
  });
}, Xd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    ii(t.left.list), ii(t.center.list), ii(t.right.list);
  }
}, Jd = Tt(Xd), Zd = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: s } = this.data, { rows: i, cols: r, rowHeight: o } = n;
    e.clear(), s.clear();
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((m, p) => {
        const { index: g } = m, _ = `C${g}R${h}`;
        if (s.has(_))
          return;
        const b = t.call(this, { row: c, col: m });
        if (!b)
          return;
        const y = Math.min(b.colSpan || 1, l.length - p), v = Math.min(b.rowSpan || 1, i.length - d);
        if (y <= 1 && v <= 1)
          return;
        let w = 0;
        for (let x = 0; x < y; x++) {
          w += l[p + x].realWidth;
          for (let C = 0; C < v; C++) {
            const S = `C${g + x}R${h + C}`;
            S !== _ && s.add(S);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: v,
          width: w,
          height: o * v
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((d) => {
        a(r[d].list, l, c);
      });
    });
  },
  onRenderCell(n, { row: t, col: e }) {
    const s = `C${e.index}R${t.index}`;
    if (this.data.overlayedCellSet.has(s))
      n.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(s);
      i && n.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return n;
  }
}, Qd = Tt(Zd), tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ol,
  avatar: qd,
  cellspan: Qd,
  checkable: Od,
  custom: Dd,
  group: Jd,
  nested: jd,
  renderDatetime: Dl,
  renderDatetimeCell: Wl,
  renderFormat: Rr,
  renderFormatCell: Ll,
  renderHtmlCell: Vi,
  renderLink: Al,
  renderLinkCell: Pl,
  renderMapCell: Rl,
  rich: Md,
  sortType: Yd
}, Symbol.toStringTag, { value: "Module" }));
class Ss extends H {
}
Ss.NAME = "DTable";
Ss.Component = Lr;
Ss.definePlugin = Tt;
Ss.removePlugin = wl;
Ss.plugins = tu;
class Wr extends K {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i
    } = t;
    return R(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": `${e}px`
      },
      "z-col": i
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: s,
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
      /* @__PURE__ */ f("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ f("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ f(q, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ f("span", { className: k("as-prefix", s), children: /* @__PURE__ */ f(O, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ f("span", { className: k("as-title", r), children: /* @__PURE__ */ f(O, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ f("span", { className: k("as-subtitle", a), children: /* @__PURE__ */ f(O, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ f(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        ot.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ f("div", { className: "kanban-header-sub-cols", children: h.map((m) => /* @__PURE__ */ f(Wr, { ...m }, m.name)) }, "subs") : null
    ];
  }
}
function eu(n) {
  const { cols: t } = n;
  return /* @__PURE__ */ f("div", { className: "kanban-header", children: [
    /* @__PURE__ */ f("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ f("div", { className: "kanban-header-cols", children: t.map((e, s) => /* @__PURE__ */ f(Wr, { index: s, ...e }, e.name)) }, "cols")
  ] });
}
class Ul extends W {
  constructor() {
    super(...arguments), this._listRef = B(), this._renderItem = (t) => {
      const { itemRender: e, lane: s, name: i } = this.props, r = e.call(this, { item: t, lane: s, col: i });
      return typeof r == "object" && r.html && u.extend(r, {}), r;
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      u(this._listRef.current).trigger("laneColResize", e[0]);
    }), this._ob.observe(t));
  }
  componentWillUnmount() {
    var t;
    (t = this._ob) == null || t.disconnect();
  }
  render(t) {
    const { items: e } = t, {
      width: s,
      color: i,
      content: r,
      contentClass: o,
      itemRender: a,
      itemGap: l,
      watchSize: c,
      name: d,
      lane: h,
      itemCountPerRow: m
    } = t, p = {
      "--kanban-col-color": i,
      "--kanban-col-width": `${s}px`
    };
    return /* @__PURE__ */ f("div", { className: "kanban-lane-col", style: p, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ f("div", { className: k("kanban-col-content", o), children: /* @__PURE__ */ f(O, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ f("div", { className: "kanban-items scrollbar-thin scrollbar-hover", children: /* @__PURE__ */ f(
        Pe,
        {
          forwardRef: c ? this._listRef : void 0,
          itemProps: { className: "kanban-item card-list-item" },
          items: e,
          itemRender: a ? this._renderItem : void 0,
          countPerRow: m,
          gap: l
        },
        "list"
      ) })
    ] });
  }
}
Ul.defaultProps = {
  watchSize: !0
};
class su extends K {
  _getClassName(t) {
    const { className: e, index: s, maxHeight: i, height: r } = t;
    return ["kanban-lane", e, { "is-first": !s, "is-auto-height": !i && (!r || r === "auto") }];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: s,
      maxHeight: i,
      color: r,
      name: o
    } = t;
    return R(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: Ce(e),
        minHeight: Ce(s),
        maxHeight: Ce(i)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i) {
    return /* @__PURE__ */ f(Ul, { itemRender: s, lane: t, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      name: e,
      title: s,
      titleClass: i,
      actions: r,
      cols: o,
      items: a = {},
      itemRender: l
    } = t;
    return [
      /* @__PURE__ */ f("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ f("div", { className: k("kanban-lane-title", i), children: /* @__PURE__ */ f(O, { content: s }) }, "title"),
        ot.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ f("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function nu(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i } = n;
  return /* @__PURE__ */ f("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ f(su, { index: o, cols: e, items: s[r.name], itemRender: i, ...r }, r.name)) });
}
const dt = 12, iu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function So(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function ru(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function ou(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = So(n, c), m = So(t, d), p = ru(h, m) * (iu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, s = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function au(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function jl(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function No(n, t, e) {
  const s = {
    id: `marker-${t}-${e}-${n}`,
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
  return n === "arrow" ? t === "start" ? s.path.d = "M6,0 L6,6 L0,3 z" : s.path.d = "M0,0 L0,6 L6,3 z" : n === "dot" ? s.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : n === "square" ? s.path.d = "M0,0 L0,6 L6,6 L6,0 z" : n === "diamond" && (s.path.d = "M3,0 L6,3 L3,6 L0,3 z"), s;
}
function lu(n, t, e, s, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = jl(n, t), d = dt - o, h = dt - a;
  if (i === "curve") {
    const m = l * 0.7, p = c * 0.7, g = r * 2, _ = {
      a1x: n.x + (e === "left" ? -g : e === "right" ? g : 0),
      a1y: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      ax: n.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: n.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (s === "left" ? -(m - g) : s === "right" ? m - g : 0),
      by: t.y + (s === "top" ? -(p - g) : s === "bottom" ? p - g : 0),
      b1x: t.x + (s === "left" ? -g : s === "right" ? g : 0),
      b1y: t.y + (s === "top" ? -g : s === "bottom" ? g : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const m = au(n, t), p = l / 2, g = c / 2, _ = {
      ax: n.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (s === "left" ? -p : s === "right" ? p : 0),
      by: t.y + (s === "top" ? -g : s === "bottom" ? g : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${n.x + d} ${n.y + h} L ${t.x + d} ${t.y + h}`;
}
function cu(n) {
  const { fromRect: t, toRect: e } = n, s = `${n.from}-${n.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = ou(i, r), d = jl(l, c), { x: h, y: m, width: p, height: g } = d;
  l.x += dt - h, l.y += dt - m, c.x += dt - h, c.y += dt - m;
  const {
    weight: _ = 1,
    fromPoint: b,
    toPoint: y = "arrow"
  } = n, v = {
    left: `${0 - dt}px`,
    top: `${0 - dt}px`,
    width: `${p + 2 * dt}px`,
    height: `${g + 2 * dt}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": b && b !== "none" ? `url(#marker-start-${s}-${b})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${s}-${y})` : void 0,
    d: lu(l, c, o, a, n.shape, _)
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
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), b && b !== "none" && S.push(No(b, "start", s)), y && y !== "none" && S.push(No(y, "end", s)), {
    x: h,
    y: m,
    width: p,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: v,
    svgPathProps: w,
    svgPathBackProps: x,
    svgProps: C,
    markers: S,
    padding: dt
  };
}
class Kl extends W {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: m, svgProps: p, markers: g, svgPathProps: _, svgPathBackProps: b, fromPos: y } = cu(t);
    return /* @__PURE__ */ f("div", { className: k("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: m, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ f("svg", { ...p, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        g.length ? /* @__PURE__ */ f("defs", { children: g.map(({ path: v, id: w, ...x }) => /* @__PURE__ */ f("marker", { ...x, id: w, children: /* @__PURE__ */ f("path", { ...v }) }, w)) }) : null,
        /* @__PURE__ */ f("path", { ...b }),
        /* @__PURE__ */ f("path", { ..._ })
      ] }),
      /* @__PURE__ */ f("div", { className: "kanban-link-start-point", style: { left: y.x - d, top: y.y - d } }),
      o ? /* @__PURE__ */ f("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ f("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ f("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ f("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
class hu extends W {
  constructor() {
    super(...arguments), this._ref = B(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    u(t).on("laneColResize.kanban", () => {
      this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(".kanban"), this._raf && cancelAnimationFrame(this._raf);
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
    const t = [...this._idSet], e = u(this._kanban).find(".kanban-body"), { top: s, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`).children()[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - s, left: c - i, bottom: d - s, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: s, to: i } = t, r = e[s], o = e[i];
    return this._idSet.add(s), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ f(Kl, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${s}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ f("div", { className: "kanban-links", ref: this._ref, children: e.map((s) => this._renderLink(s)) });
  }
}
const Ps = ".kanban";
class du extends W {
  constructor() {
    super(...arguments), this._ref = B(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const s = ".kanban-item,.kanban-link-editor-from";
    u(e).on(`mouseenter${Ps}`, s, (i) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const r = u(i.target).closest(s), o = r.attr("z-key");
      this.state.from === o || r.hasClass("is-dragging") || this.setState({
        from: o,
        to: void 0,
        fromRect: this._getRect(r.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${Ps}`, s, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${Ps}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }), this._moveable = new vs(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        u(e).addClass("is-adding-link");
      },
      onMove: (i) => {
        const { top: r, left: o } = this._kanban.getBoundingClientRect(), a = { left: i.clientX - o, top: i.clientY - r };
        let l, c;
        const d = u(i.target).closest(s);
        d.length && l !== this.state.from && (l = d.attr("z-key"), c = this._getRect(d.children()[0])), this.setState({ dragPos: a, to: l, toRect: c });
      },
      onMoveEnd: () => {
        const { from: i, to: r } = this.state, { onAddLink: o } = this.props;
        i !== r && o && i !== void 0 && r !== void 0 && (o == null || o.call(this, i, r)), this._cancelHover(), u(e).removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(Ps), this._raf && cancelAnimationFrame(this._raf);
  }
  _getRect(t) {
    const e = t.getBoundingClientRect(), { top: s, left: i } = this._kanban.getBoundingClientRect();
    return {
      left: e.left - i,
      top: e.top - s,
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
    const { fromRect: e, toRect: s, from: i, to: r = "", dragPos: o } = t;
    if (!e || !i || !o)
      return null;
    const a = s ? {
      left: s.left,
      top: s.top,
      right: s.left + s.width,
      bottom: s.top + s.height
    } : {
      left: o.left,
      top: o.top,
      right: o.left,
      bottom: o.top
    };
    return /* @__PURE__ */ f(
      Kl,
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
    const { from: s, fromRect: i, to: r, toRect: o } = e;
    let a, l;
    return s && i && (a = /* @__PURE__ */ f("div", { className: "kanban-link-editor-from not-moveable", "z-key": s, style: i, children: [
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ f("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ f("div", { className: k("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function uu(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((d, h, m) => {
    if (h = R({ itemGap: o, itemCountPerRow: r }, i, h), s) {
      const p = s.call(this, h);
      p !== !1 && (h = p || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = m, e == null || e.call(this, h), h.parentName !== void 0 ? l.push(h) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = Je(h.subCols, [d], "name"));
  }), a && (n.sort(fn), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(fn);
  })), n;
}
function fu(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = R({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.height == "function" && (a = R({}, a, {
      height: a.height.call(this, a)
    })), typeof a.order == "number" ? r = !0 : a.order = l, a.color || (a = {
      color: `hsl(${43 * _a(a.name) % 360}deg 40% 50%)`,
      ...a
    }), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(fn), n;
}
function To(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = R({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && n.sort(fn), n;
}
function fn(n, t) {
  return n.order - t.order;
}
function Je(n, t, e) {
  if (!n)
    return t ? [...t] : [];
  const s = [...n];
  if (t) {
    let i = 0;
    const r = s.reduce((o, a, l) => (o.set(a[e], l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = o[e];
      r.has(a) ? s[r.get(a)] = {
        ...s[r.get(a)],
        ...o
      } : s.push({
        order: i++,
        ...o
      });
    });
  }
  return s;
}
function ql(n, t) {
  return Array.isArray(n) ? n.map((e) => ({
    ...e,
    [t]: String(e[t])
  })) : Object.keys(n).reduce((e, s) => {
    const i = n[s];
    return Object.keys(i).forEach((r) => {
      e.push(...(i[r] || []).map((o) => ({
        ...o,
        lane: s,
        col: r,
        [t]: String(o[t])
      })));
    }), e;
  }, []);
}
function Eo(n, t) {
  const { items: e, ...s } = n;
  return {
    items: ql(e, t),
    ...s
  };
}
function Mo(n, t, e) {
  const s = Je(n.lanes, t.lanes, "name"), i = Je(n.cols, t.cols, "name"), r = Je(n.links, t.links, e), o = Je(n.items, ql(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let zn = class extends K {
  constructor() {
    super(...arguments), this._ref = B(), this._raf = 0, this._data = new Qe(this._getData.bind(this), () => {
      const { getCol: t, colProps: e, itemCountPerRow: s, itemGap: i, getLane: r, laneProps: o, itemProps: a, getItem: l, responsive: c } = this.props;
      return [
        this._kanbanData,
        t,
        e,
        s,
        i,
        r,
        o,
        a,
        l,
        c
      ];
    }), this._kanbanData = new Qe(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || Gr(s) ? i : Eo(s, t)) || {};
      return r ? Mo(o, r, t) : o;
    }, () => {
      const { data: t, changes: e } = this.state;
      return [
        t,
        e,
        this.props.data
      ];
    }), this._onAddLink = async (t, e) => {
      const { onAddLink: s } = this.props, i = { from: t, to: e, [this.itemKey]: `${t}:${e}` };
      await (s == null ? void 0 : s.call(this, i)) !== !1 && this.updateLink(i);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    };
  }
  get data() {
    return this._data.cache;
  }
  get itemKey() {
    return this.props.itemKey || "id";
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this._initDraggable();
    const { responsive: t } = this.props, e = this._ref.current;
    if (e && t) {
      const s = new ResizeObserver(this.updateLayout.bind(this));
      u(typeof t != "boolean" ? t : e.closest(".kanban-list") || e.parentElement).each((r, o) => {
        s.observe(o);
      }), this._rob = s, this.state.containerWidth || this.updateLayout();
    }
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e, s;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy(), (s = this._rob) == null || s.disconnect();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: s } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = Eo(await Cn(t, [this], { throws: !0 }), this.itemKey);
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof s == "function" ? s.call(this, r) : s) || String(r);
      }
      this.setState(i);
    });
  }
  updateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      const t = this._ref.current;
      if (t) {
        const { responsive: e, laneNameWidth: s = 20 } = this.props, i = u(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - s - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-group");
        a && (o -= a.clientWidth - u(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Gr(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this.data.cols.find((e) => e.name === t);
  }
  getLane(t) {
    return this.data.lanes.find((e) => e.name === t);
  }
  getItem(t) {
    return this.data.map.get(String(t));
  }
  update(t) {
    return console.log("> Kanban.update", t, this), this.changeState((e) => ({
      changes: Mo({ ...e.changes }, t, this.itemKey)
    }));
  }
  createSnap() {
    return {
      date: Date.now(),
      kanban: this,
      data: u.extend(!0, {}, this._data),
      restore() {
        this.kanban.changeState({ changes: this.data });
      }
    };
  }
  addItem(t, e, s) {
    return this.updateItem(t, e, s);
  }
  updateItem(t, e, s) {
    const i = Array.isArray(t) ? t : [t];
    return this.update({
      items: e || s ? i.map((r) => ({
        ...r,
        lane: e ?? r.lane,
        col: s ?? r.col
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
      links: (Array.isArray(t) ? t : [t]).map((s) => ({
        ...s,
        ...e,
        [this.itemKey]: `${s.from}:${s.to}`
      }))
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  _getElementInfo(t) {
    const e = u(t), s = e.closest(".kanban-item");
    if (s.length) {
      const o = this.getItem(s.attr("z-key"));
      if (o)
        return { type: "item", element: t, item: o, lane: o.lane, col: o.col };
    }
    const i = e.closest(".kanban-header-col,.kanban-lane-col");
    if (i.length)
      return { type: "col", element: t, col: i.attr("z-col"), lane: i.attr("z-lane") };
    const r = e.closest(".kanban-lane").attr("z-lane");
    if (r !== void 0)
      return { type: "lane", element: t, lane: r };
  }
  _getDropInfo(t, e, s) {
    const i = this._getElementInfo(e);
    if (!i)
      return;
    const r = this._getElementInfo(s);
    if (!r)
      return;
    let o;
    if (i.type === "item" && r.type === "col")
      o = "inside";
    else {
      const a = s.getBoundingClientRect();
      i.type === "col" ? o = t.clientX < a.left + a.width / 2 ? "before" : "after" : o = t.clientY < a.top + a.height / 2 ? "before" : "after";
    }
    return {
      side: o,
      event: t,
      drag: i,
      drop: r
    };
  }
  _getDropChanges(t) {
    const { drag: e, drop: s } = t, i = this.data, r = {}, { itemKey: o } = this;
    if (e.type === "item") {
      const a = e.item, l = i.items[s.lane][s.col], c = [...l], d = {
        [o]: a[o],
        order: a.order
      }, h = s.col === a.col, m = s.lane === a.lane;
      if (h && m && a[o] === s.item[o])
        return r;
      h || (d.col = s.col), m || (d.lane = s.lane);
      let p = !1;
      if (s.type === "col" && (!m || !h))
        c.push(d), p = !0;
      else if (s.type === "item") {
        const g = s.item, _ = s.col !== a.col || s.lane !== a.lane ? -1 : c.findIndex((y) => y[o] === a[o]);
        _ >= 0 && c.splice(_, 1);
        const b = c.findIndex((y) => y[o] === g[o]);
        c.splice(t.side === "before" ? b : b + 1, 0, d), p = !0;
      }
      if (p) {
        r.items = [];
        let g = -1;
        c.forEach((_, b) => {
          const y = Math.max(0, g + 1, _.order ?? b), v = l[b];
          g = y, (v !== _ || y !== v.order) && (_ = {
            ..._,
            order: y
          }), _ !== v && r.items.push(_);
        });
      }
    }
    return r;
  }
  _initDraggable() {
    const { draggable: t } = this.props, e = this._ref.current;
    if (!t || !e)
      return;
    const { dragTypes: s = "item", onDragStart: i, onDrop: r } = this.props, o = typeof s == "string" ? s.split(",") : s, a = {
      item: ".kanban-item",
      lane: ".kanban-lane-name",
      col: ".kanban-header-col"
    }, l = typeof t == "object" ? t : {}, c = (h, m) => {
      u(h).attr({
        "z-drag-type": m ? m.drag.type : null,
        "z-drop-type": m ? m.drop.type : null,
        "z-drop-side": m ? m.side : null
      });
    }, d = {
      ...l,
      selector: l.selector || o.map((h) => a[h] || "").join(""),
      target: l.target || ((h) => {
        const m = this._getElementInfo(h);
        if (!m)
          return;
        const p = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items"
        }[m.type];
        return u(e).find(p);
      }),
      onDragStart: (h, m) => {
        var g;
        const p = this._getElementInfo(m);
        return p ? i ? i.call(this, { event: h, drag: p }) : (g = l.onDragStart) == null ? void 0 : g.call(this, h, m) : !1;
      },
      onDragOver: (h, m, p) => {
        const g = this._getDropInfo(h, m, p);
        g && c(p, g);
      },
      onDragLeave: (h, m, p) => {
        c(p);
      },
      onDrop: (h, m, p) => {
        var _;
        c(p);
        const g = this._getDropInfo(h, m, p);
        if (!g)
          return !1;
        if (r) {
          const b = this._getDropChanges(g);
          if (Object.keys(b).length) {
            const y = this.createSnap();
            r.call(this, b, g, y.restore) !== !1 && this.update(b);
          }
        }
        return (_ = l.onDrop) == null ? void 0 : _.call(this, h, m, p);
      }
    };
    this._draggable = new Mn(e, d);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = uu.call(this, s.cols, e, (m) => {
      m.parentName !== void 0 && (i = !0);
    }), l = fu.call(this, s.lanes, e, (m) => {
      o[m.name] = a.reduce((p, g) => (g.subCols ? g.subCols.forEach((_) => {
        p[_.name] = [];
      }) : p[g.name] = [], p), {});
    }), c = /* @__PURE__ */ new Set(), d = r.reduce((m, p) => {
      if (p.deleted)
        return c.add(p[t]), m;
      m.set(p[t], p);
      const g = o[p.lane];
      if (g) {
        const _ = g[p.col];
        _ && _.push(p);
      }
      return m;
    }, /* @__PURE__ */ new Map());
    l.forEach((m) => {
      const p = o[m.name];
      p && a.forEach((g) => {
        var _;
        p[g.name] = To.call(this, p[g.name], m, g, e), (_ = g.subCols) == null || _.forEach((b) => {
          p[b.name] = To.call(this, p[b.name], m, b, e);
        });
      });
    });
    let { links: h = [] } = s;
    return h = h.reduce((m, p) => (!p.deleted && d.has(p.from) && d.has(p.to) && !c.has(p.from) && !c.has(p.to) && (p[t] === void 0 && (p[t] = `${p.from}:${p.to}`), m.push(p)), m), []), { cols: a, lanes: l, items: o, map: d, links: h, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: s } = this.state;
    if (!s)
      return t;
    const { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200, responsive: l } = e, c = [];
    let d = 0;
    if (t = t.map((h) => {
      if (h.subCols)
        return h;
      const { minWidth: m = r, maxWidth: p = o } = h;
      let { width: g } = h;
      typeof g == "function" && (g = g.call(this, h)), g = g || (l ? "auto" : a);
      const [_, b] = $n(g);
      let y = g === "auto";
      return y ? g = m : b === "%" ? g = s * _ / 100 : Number.isNaN(_) ? a === "auto" ? (y = !0, g = m) : g = a : g = _, g = Math.min(p, Math.max(m, g)), d += g + (d ? i : 0), h = { ...h, width: g, maxWidth: p, minWidth: m }, y && c.push(h), h;
    }), c.length && d < s) {
      const h = Math.floor((s - d) / c.length);
      c.forEach((m) => {
        m.width = Math.min(m.maxWidth, Math.max(m.minWidth, m.width + h));
      });
    }
    return t;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this.data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    const { laneNameWidth: e, colsGap: s, lanesGap: i } = t;
    return R(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": Ce(s),
        "--kanban-lanes-gap": Ce(i)
      }
    });
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r, links: o } = e, { editLinks: a } = t, l = this._layoutCols(s, t);
    return console.log("> Kanban.render", { ...e, kanban: this }), [
      /* @__PURE__ */ f(eu, { cols: l }, "header"),
      /* @__PURE__ */ f(
        nu,
        {
          itemRender: t.itemRender,
          cols: l,
          lanes: i,
          items: r
        },
        "body"
      ),
      o != null && o.length ? /* @__PURE__ */ f(hu, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ f(du, { onAddLink: this._onAddLink }, "linkEditor") : null,
      t.children
    ];
  }
};
zn.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
class pu extends zn {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      u(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((s) => ({ collapsed: !s.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  render(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i } = this.state, r = R({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e);
    return /* @__PURE__ */ f("div", { className: k("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ f(en, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let Gl = class extends K {
  constructor(t) {
    super(t), this.state = {}, this._ref = B(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new vs(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (s, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return s.clientY < r && s.clientY > r - 20 || s.clientX < o && s.clientX > o - 20 ? !1 : !u(s.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
    } }, typeof t == "object" ? t : null))), e) {
      const s = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
        s.observe(o);
      }), this._rob = s;
    }
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(String(t))) == null ? void 0 : e.current;
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = u(t), s = e.width(), i = e.height();
    this.setState({ width: s, height: i });
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
    const { width: e, height: s } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof s == "function" ? s.call(this) : s, { width: o, height: a } = this.state ?? {};
    return R(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || s}px`
      }
    });
  }
  _getChildren(t) {
    const { items: e = [], kanbanProps: s } = t;
    return [
      ...e.map((i, r) => {
        s && (i = typeof s == "function" ? s.call(this, i, r) : u.extend({}, s, i));
        const o = String(i.key ?? r);
        let a = this._kanbanRefs.get(o);
        a || (a = B(), this._kanbanRefs.set(o, a));
        const l = i.heading !== void 0 || i.type === "group" ? pu : zn;
        return /* @__PURE__ */ f(l, { ref: a, sticky: t.sticky, ...i, "z-key": o }, o);
      }),
      t.children
    ];
  }
};
Gl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Hr extends H {
}
Hr.NAME = "Kanban";
Hr.replace = !0;
Hr.Component = zn;
class Or extends H {
  updateKanban(t, e) {
    if (t = Array.isArray(t) ? t : [t], e)
      return this.render({ items: t });
    const s = this.options.items || [], i = new Map(s.map((o, a) => [o.key, a])), r = [...s];
    return t.forEach((o) => {
      if (i.has(o.key)) {
        const a = i.get(o.key);
        r[a] = { ...s[a], ...o };
      } else
        r.push(o);
    }), this.render({ items: r.filter((o) => !o.deleted) });
  }
}
Or.NAME = "KanbanList";
Or.replace = !0;
Or.Component = Gl;
var Yl = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Io = (n, t, e) => (Yl(n, t, "read from private field"), e ? e.call(n) : t.get(n)), mu = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ao = (n, t, e, s) => (Yl(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), ve;
const gu = "nav", qs = '[data-toggle="tab"]', _u = "active";
class Xl extends at {
  constructor() {
    super(...arguments), mu(this, ve, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(qs);
    let i = t ? u(t).closest(qs) : s.filter(`.${_u}`);
    if (!i.length && (i = e.find(qs).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Io(this, ve) && clearTimeout(Io(this, ve)), Ao(this, ve, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Ao(this, ve, 0);
    }, 10)));
  }
}
ve = /* @__PURE__ */ new WeakMap();
Xl.NAME = "Tabs";
u(document).on("click.tabs.zui", qs, (n) => {
  n.preventDefault();
  const t = u(n.target), e = t.closest(`.${gu}`);
  e.length && Xl.ensure(e).active(t);
});
export {
  u as $,
  Qo as Ajax,
  Ta as Avatar,
  Ea as BtnGroup,
  Mr as Card,
  _l as CardList,
  Va as ColorPicker,
  or as CommonList,
  at as Component,
  H as ComponentFromReact,
  Qe as Computed,
  Ir as ContextMenu,
  O as CustomContent,
  ma as CustomRender,
  Ss as DTable,
  bl as Dashboard,
  Za as DatePicker,
  tl as DatetimePicker,
  Mn as Draggable,
  kt as Dropdown,
  K as HElement,
  he as HtmlContent,
  q as Icon,
  Hr as Kanban,
  Or as KanbanList,
  ba as List,
  lr as Menu,
  Eu as Messager,
  cd as Modal,
  os as ModalBase,
  Ai as ModalTrigger,
  vs as Moveable,
  il as Nav,
  va as NestedList,
  rl as Pager,
  ol as Pick,
  cl as Picker,
  mt as Popover,
  $r as PopoverPanel,
  hl as Popovers,
  ga as Portal,
  Sa as ProgressCircle,
  W as ReactComponent,
  dl as SearchBox,
  cr as SearchMenu,
  pl as SearchTree,
  ul as Sidebar,
  Iu as Sortable,
  rs as TIME_DAY,
  Xl as Tabs,
  Ja as TimePicker,
  fl as Toolbar,
  Pt as Tooltip,
  Tr as Tree,
  Er as Upload,
  ml as UploadImgs,
  Jh as addDate,
  u as cash,
  k as classes,
  Fe as componentsMap,
  Fc as convertBytes,
  th as create,
  G as createDate,
  oh as createPortal,
  B as createRef,
  zc as deepGet,
  Oc as deepGetPath,
  bu as defineFn,
  Js as delay,
  eh as disableScroll,
  vu as dom,
  Cn as fetchData,
  Bc as formatBytes,
  st as formatDate,
  Hu as formatDateSpan,
  Q as formatString,
  ta as getClassList,
  tn as getComponent,
  sh as getReactComponent,
  ai as getZData,
  xt as h,
  Z as i18n,
  oi as isDiff,
  Gr as isFetchSetting,
  xs as isSameDay,
  Ua as isSameMonth,
  Pu as isSameWeek,
  yi as isSameYear,
  Lu as isToday,
  Wu as isTomorrow,
  rt as isValidElement,
  Ru as isYesterday,
  R as mergeProps,
  Ot as nextGid,
  $n as parseSize,
  pa as reactComponents,
  me as registerReactComponent,
  ua as removeUndefinedProps,
  ss as render,
  hi as renderCustomContent,
  ih as renderCustomResult,
  Yr as setZData,
  Gc as shareData,
  Rt as store,
  ea as storeData,
  sa as takeData,
  Ce as toCssSize
};
//# sourceMappingURL=zui.js.map
