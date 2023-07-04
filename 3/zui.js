var tr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (tr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, s) => (tr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var me = (e, t, n) => (tr(e, t, "access private method"), n);
const Vt = document, Ks = window, tl = Vt.documentElement, Oe = Vt.createElement.bind(Vt), el = Oe("div"), er = Oe("table"), Bh = Oe("tbody"), pa = Oe("tr"), { isArray: Ni, prototype: nl } = Array, { concat: zh, filter: io, indexOf: sl, map: il, push: Fh, slice: rl, some: ro, splice: Uh } = nl, Vh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, qh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gh = /<.+>/, jh = /^\w+$/;
function oo(e, t) {
  const n = Kh(t);
  return !e || !n && !Le(t) && !G(t) ? [] : !n && qh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && jh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Ai {
  constructor(t, n) {
    if (!t)
      return;
    if (yr(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Vt;
      if (s = Vh.test(t) && Le(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Gh.test(t) ? ll(t) : yr(i) ? i.find(t) : Q(i) ? m(i).find(t) : oo(t, i), !s)
        return;
    } else if (He(t))
      return this.ready(t);
    (s.nodeType || s === Ks) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Ai(t, n);
  }
}
const $ = Ai.prototype, m = $.init;
m.fn = m.prototype = $;
$.length = 0;
$.splice = Uh;
typeof Symbol == "function" && ($[Symbol.iterator] = nl[Symbol.iterator]);
function yr(e) {
  return e instanceof Ai;
}
function mn(e) {
  return !!e && e === e.window;
}
function Le(e) {
  return !!e && e.nodeType === 9;
}
function Kh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Yh(e) {
  return !!e && e.nodeType === 3;
}
function Xh(e) {
  return typeof e == "boolean";
}
function He(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function ot(e) {
  return e === void 0;
}
function jn(e) {
  return e === null;
}
function ol(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ao(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = mn;
m.isFunction = He;
m.isArray = Ni;
m.isNumeric = ol;
m.isPlainObject = ao;
function Y(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (ao(e)) {
    const s = Object.keys(e);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(e[o], o, e[o]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
m.each = Y;
$.each = function(e) {
  return Y(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ys(...e) {
  const t = Xh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ys(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Ni(r[o]) || ao(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ys(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Ys;
$.extend = function(e) {
  return Ys($, e);
};
const Jh = /\S+/g;
function Li(e) {
  return Q(e) ? e.match(Jh) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Li(e), s = !ot(t);
  return this.each((i, r) => {
    G(r) && Y(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(e) {
  return this.toggleClass(e, !0);
};
$.removeAttr = function(e) {
  const t = Li(e);
  return this.each((n, s) => {
    G(s) && Y(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Zh(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return jn(n) ? void 0 : n;
      }
      return ot(t) ? this : jn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
$.attr = Zh;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && ro.call(this, (t) => G(t) && t.classList.contains(e));
};
$.get = function(e) {
  return ot(e) ? rl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
$.eq = function(e) {
  return m(this.get(e));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function Qh(e) {
  return ot(e) ? this.get().map((t) => G(t) || Yh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
$.text = Qh;
function qt(e, t, n) {
  if (!G(e))
    return;
  const s = Ks.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function kt(e, t) {
  return parseInt(qt(e, t), 10) || 0;
}
function ma(e, t) {
  return kt(e, `border${t ? "Left" : "Top"}Width`) + kt(e, `padding${t ? "Left" : "Top"}`) + kt(e, `padding${t ? "Right" : "Bottom"}`) + kt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const nr = {};
function td(e) {
  if (nr[e])
    return nr[e];
  const t = Oe(e);
  Vt.body.insertBefore(t, null);
  const n = qt(t, "display");
  return Vt.body.removeChild(t), nr[e] = n !== "none" ? n : "block";
}
function ga(e) {
  return qt(e, "display") === "none";
}
function al(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Pi(e) {
  return Q(e) ? (t, n) => al(n, e) : He(e) ? e : yr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = Pi(e);
  return m(io.call(this, (n, s) => t.call(n, s, n)));
};
function de(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return de(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ed = /^\s*<(\w+)[^>]*>/, nd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ya = {
  "*": el,
  tr: Bh,
  td: pa,
  th: pa,
  thead: er,
  tbody: er,
  tfoot: er
};
function ll(e) {
  if (!Q(e))
    return [];
  if (nd.test(e))
    return [Oe(RegExp.$1)];
  const t = ed.test(e) && RegExp.$1, n = ya[t] || ya["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = ll;
$.has = function(e) {
  const t = Q(e) ? (n, s) => oo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = Pi(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Xt(e, t, n, s) {
  const i = [], r = He(t), o = s && Pi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Fh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function cl(e) {
  return e.multiple && e.options ? Xt(io.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function sd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || yl.test(n.type)) {
      const i = Ni(e) ? il.call(e, String) : jn(e) ? [] : [String(e)];
      s ? Y(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ot(e) || jn(e) ? "" : e;
  }) : this[0] && cl(this[0]);
}
$.val = sd;
$.is = function(e) {
  const t = Pi(e);
  return ro.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Mt(e) {
  return e.length > 1 ? io.call(e, (t, n, s) => sl.call(s, t) === n) : e;
}
m.unique = Mt;
$.add = function(e, t) {
  return m(Mt(this.get().concat(m(e, t).get())));
};
$.children = function(e) {
  return de(m(Mt(Xt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return de(m(Mt(Xt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return sl.call(n, t);
};
$.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
$.siblings = function(e) {
  return de(m(Mt(Xt(this, (t) => m(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return m(Mt(Xt(this, (t) => oo(e, t))));
};
const id = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rd = /^$|^module$|\/(java|ecma)script/i, od = ["type", "src", "nonce", "noModule"];
function ad(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (rd.test(i.type) && tl.contains(i)) {
      const r = Oe("script");
      r.text = i.textContent.replace(id, ""), Y(od, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ld(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && ad(t, e.ownerDocument);
}
function ue(e, t, n, s, i, r, o, a) {
  return Y(e, (l, h) => {
    Y(m(h), (c, d) => {
      Y(m(t), (u, f) => {
        const p = n ? d : f, y = n ? f : d, v = n ? c : u;
        ld(p, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return ue(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return ue(arguments, this, !1, !1, !0);
};
function cd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = cd;
$.appendTo = function(e) {
  return ue(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return ue(arguments, this, !1, !0);
};
$.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
$.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
$.insertAfter = function(e) {
  return ue(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(e) {
  return ue(arguments, this, !0, !0);
};
$.prepend = function() {
  return ue(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(e) {
  return ue(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return m(Mt(Xt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return de(m(Mt(Xt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return de(m(Mt(Xt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return de(m(Mt(Xt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return m(zh.apply([], il.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && qt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || tl;
  });
};
$.slice = function(e, t) {
  return m(rl.call(this, e, t));
};
const hd = /-([a-z])/g;
function lo(e) {
  return e.replace(hd, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Vt.readyState !== "loading" ? t() : Vt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
$.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Ks.pageYOffset,
    left: t.left + Ks.pageXOffset
  };
};
$.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = qt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && qt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const r = m(i).offset();
      n.top -= r.top + kt(i, "borderTopWidth"), n.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - kt(e, "marginTop"),
    left: n.left - kt(e, "marginLeft")
  };
};
const hl = {
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
$.prop = function(e, t) {
  if (e) {
    if (Q(e))
      return e = hl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
$.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[hl[e] || e];
  });
};
const dd = /^--/;
function co(e) {
  return dd.test(e);
}
const sr = {}, { style: ud } = el, fd = ["webkit", "moz", "ms"];
function pd(e, t = co(e)) {
  if (t)
    return e;
  if (!sr[e]) {
    const n = lo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${fd.join(`${s} `)}${s}`.split(" ");
    Y(i, (r, o) => {
      if (o in ud)
        return sr[e] = o, !1;
    });
  }
  return sr[e];
}
const md = {
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
function dl(e, t, n = co(e)) {
  return !n && !md[e] && ol(t) ? `${t}px` : t;
}
function gd(e, t) {
  if (Q(e)) {
    const n = co(e);
    return e = pd(e, n), arguments.length < 2 ? this[0] && qt(this[0], e, n) : e ? (t = dl(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = gd;
function ul(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const yd = /^\s+|\s+$/;
function wa(e, t) {
  const n = e.dataset[t] || e.dataset[lo(t)];
  return yd.test(n) ? n : ul(JSON.parse, n);
}
function wd(e, t, n) {
  n = ul(JSON.stringify, n), e.dataset[lo(t)] = n;
}
function vd(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = wa(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && wa(this[0], e) : ot(t) ? this : this.each((n, s) => {
      wd(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = vd;
function fl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
Y([!0, !1], (e, t) => {
  Y(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return mn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Le(this[0]) ? fl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? kt(this[0], `margin${n ? "Top" : "Left"}`) + kt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return ot(s) ? void 0 : this;
    if (!arguments.length)
      return mn(this[0]) ? this[0].document.documentElement[`client${t}`] : Le(this[0]) ? fl(this[0], t) : this[0].getBoundingClientRect()[n] - ma(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = qt(o, "boxSizing");
      o.style[n] = dl(n, i + (a === "border-box" ? ma(o, !e) : 0));
    });
  };
});
const va = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = ga(n);
    (ot(e) ? s : e) ? (n.style.display = n[va] || "", ga(n) && (n.style.display = td(n.tagName))) : s || (n[va] = qt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const _a = "___ce", ho = ".", uo = { focus: "focusin", blur: "focusout" }, pl = { mouseenter: "mouseover", mouseleave: "mouseout" }, _d = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function fo(e) {
  return pl[e] || uo[e] || e;
}
function po(e) {
  const t = e.split(ho);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = po(e), r = fo(s);
    if (!r)
      return this;
    const o = _d.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Vt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(ho), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in uo;
  return this.each((s, i) => {
    n && He(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function ml(e) {
  return e[_a] = e[_a] || {};
}
function bd(e, t, n, s, i) {
  const r = ml(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function gl(e, t) {
  return !t || !ro.call(t, (n) => e.indexOf(n) < 0);
}
function Xs(e, t, n, s, i) {
  const r = ml(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !gl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Xs(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (ot(e))
    this.each((s, i) => {
      !G(i) && !Le(i) && !mn(i) || Xs(i);
    });
  else if (Q(e))
    He(t) && (n = t, t = ""), Y(Li(e), (s, i) => {
      const [r, o] = po(i), a = fo(r);
      this.each((l, h) => {
        !G(h) && !Le(h) && !mn(h) || Xs(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
$.remove = function(e) {
  return de(this, e).detach().off(), this;
};
$.replaceWith = function(e) {
  return this.before(e).remove();
};
$.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function xd(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (ot(t) || jn(t) ? t = "" : ot(n) ? (n = t, t = "") : (s = n, n = t, t = "")), He(s) || (s = n, n = void 0), s ? (Y(Li(e), (r, o) => {
    const [a, l] = po(o), h = fo(a), c = a in pl, d = a in uo;
    h && this.each((u, f) => {
      if (!G(f) && !Le(f) && !mn(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !gl(l, y.namespace.split(ho)) || !t && (d && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = y.target;
          for (; !al(_, t); )
            if (_ === f || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, y, y.___td);
        i && Xs(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, bd(f, h, l, t, p);
    });
  }), this) : this;
}
$.on = xd;
function $d(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = $d;
const Cd = /\r?\n/g;
function kd(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Cd, `\r
`))}`;
}
const Sd = /file|reset|submit|button|image/i, yl = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    Y(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Sd.test(i.type) || yl.test(i.type) && !i.checked)
        return;
      const r = cl(i);
      if (!ot(r)) {
        const o = Ni(r) ? r : [r];
        Y(o, (a, l) => {
          e += kd(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function Ed(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Md(e, t, n) {
  try {
    const s = Ed(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function st(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? "";
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const s = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return e;
}
var mo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(mo || {});
function Td(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / mo[n]).toFixed(t) + n);
}
const Rd = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * mo[s];
};
let go = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function Nd() {
  return go;
}
function Ad(e) {
  go = e.toLowerCase();
}
function wl(e, t) {
  ne || (ne = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ne, e);
}
function Gt(e, t, n, s, i, r) {
  Array.isArray(e) ? ne && e.unshift(ne) : e = ne ? [ne, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || go;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ne ? `${r}.${t}` : t;
    if (a = Md(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? st(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Ld(e, t, n, s) {
  return Gt(void 0, e, t, n, s);
}
Gt.addLang = wl;
Gt.getLang = Ld;
Gt.getCode = Nd;
Gt.setCode = Ad;
wl({
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
function vl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? vl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...e) => vl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = M;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const $n = /* @__PURE__ */ new WeakMap();
function _l(e, t, n) {
  const s = $n.has(e), i = s ? $n.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), $n.set(e, i)) : $n.delete(e);
}
function Pd(e, t) {
  let n = $n.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Pd(this[0], t) : this.each((s, i) => _l(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => _l(n, e));
};
m.fn._attr = m.fn.attr;
m.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
m.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const Js = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), ir = /* @__PURE__ */ new Map();
function Wd(e, t, n) {
  const { zui: s } = window;
  ir.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && ir.set(r.toLowerCase(), s[r]);
  });
  const i = ir.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, Wd(n, this, t);
  });
});
function yo(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, d = a || h, u = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= u && i + o <= d;
  const f = i <= d && i + o >= 0, p = s <= u && s + r >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    yo(n, e);
  });
};
function wo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    wo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    wo(n, e);
  });
};
function bl(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && yo(o, { fullyCheck: !0 }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    bl(n, e);
  });
};
const Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: yo,
  runJS: wo,
  scrollIntoView: bl
}, Symbol.toStringTag, { value: "Module" }));
var Wi, z, xl, J, Ce, ba, $l, wr, Zs = {}, Cl = [], Id = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vo = Array.isArray;
function ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function kl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Wi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return ks(e, o, s, i, null);
}
function ks(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++xl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function tt() {
  return { current: null };
}
function yn(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Kn(e, t) {
  if (t == null)
    return e.__ ? Kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Kn(e) : null;
}
function Sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sl(e);
  }
}
function xa(e) {
  (!e.__d && (e.__d = !0) && Ce.push(e) && !Qs.__r++ || ba !== z.debounceRendering) && ((ba = z.debounceRendering) || $l)(Qs);
}
function Qs() {
  var e, t, n, s, i, r, o, a;
  for (Ce.sort(wr); e = Ce.shift(); )
    e.__d && (t = Ce.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ae({}, r)).__v = r.__v + 1, _o(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Kn(r), r.__h), Nl(s, r), r.__e != o && Sl(r)), Ce.length > t && Ce.sort(wr));
  Qs.__r = 0;
}
function El(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, p, y, v, w = s && s.__k || Cl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ks(null, f, null, null, f) : vo(f) ? ks(yn, { children: f }, null, null, null) : f.__b > 0 ? ks(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (u = w[c]) === null || u && f.key == u.key && f.type === u.type)
        w[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = w[d]) && f.key == u.key && f.type === u.type) {
            w[d] = void 0;
            break;
          }
          u = null;
        }
      _o(e, f, u = u || Zs, i, r, o, a, l, h), p = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = Ml(f, l, e) : l = Tl(e, f, u, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Kn(u));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Rl(s).nextSibling), Ll(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      Al(v[c], v[++c], v[++c]);
}
function Ml(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? Ml(s, t, n) : Tl(n, s, s, i, s.__e, t));
  return t;
}
function Tl(e, t, n, s, i, r) {
  var o, a, l;
  if (t.__d !== void 0)
    o = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), o = null;
      else {
        for (a = r, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        e.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Rl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = Rl(n)))
        return s;
  }
  return null;
}
function Dd(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ti(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ti(e, r, t[r], n[r], s);
}
function $a(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Id.test(t) ? n : n + "px";
}
function ti(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || $a(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || $a(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? ka : Ca, r) : e.removeEventListener(t, r ? ka : Ca, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ca(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ka(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function _o(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, f, p, y, v, w, _, x, k, S, T, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = Hd), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ae({}, c.__s)), ae(c.__s, A.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), x = 0; x < c._sb.length; x++)
              c.__h.push(c._sb[x]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, k = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ae(ae({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(u, f)), El(e, vo(N = h != null && h.type === yn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Od(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function Nl(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function Od(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), r = null, a = !1;
  }
  if (f === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && Wi.call(e.childNodes), h = (d = n.props || Zs).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Dd(e, u, d, i, a), c)
      t.__k = [];
    else if (El(e, vo(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Kn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && kl(r[p]);
    a || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && ti(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ti(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Al(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function Ll(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Al(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Ll(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Hd(e, t, n) {
  return this.constructor(e, n);
}
function Yn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], _o(t, e = (!s && n || t).__k = q(yn, null, [e]), i || Zs, Zs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Wi.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), Nl(r, e);
}
Wi = Cl.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, xl = 0, J = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ae({}, this.state), typeof e == "function" && (e = e(ae({}, n), this.props)), e && ae(n, e), e != null && this.__v && (t && this._sb.push(t), xa(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xa(this));
}, V.prototype.render = yn, Ce = [], $l = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Qs.__r = 0;
var Pl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, Pl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, Sa = /* @__PURE__ */ new Map();
function Bd(e) {
  var t = Sa.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Sa.set(this, t)), (t = Pl(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(u) {
      r === 1 && (u || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, u, o) : r === 3 && (u || o) ? (l.push(3, u, o), r = 2) : r === 2 && o === "..." && u ? l.push(4, u, 0) : r === 2 && o && !u ? l.push(5, 0, !0, o) : r >= 5 && ((o || !u && r === 5) && (l.push(r, 0, o, i), r = 6), u && (l.push(r, u, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var d = 0; d < n[c].length; d++)
        s = n[c][d], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][d + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const Vf = Bd.bind(q);
function Wl(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: M(n), style: s, ...a, ...r }, i);
}
var zd = 0;
function g(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zd, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var Qn;
class bo extends V {
  constructor() {
    super(...arguments);
    L(this, Qn, tt());
  }
  componentDidMount() {
    this.props.executeScript && m(C(this, Qn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ g(Wl, { forwardRef: C(this, Qn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Qn = new WeakMap();
function Fd(e) {
  const {
    tag: t,
    className: n,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = e, d = [n], u = { ...s }, f = [], p = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(o, y, f, ...r));
      else {
        const w = y.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(y);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !J(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(d),
    style: u,
    ...c
  }, f];
}
function xo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Fd(t);
  return q(e, n, ...s);
}
function Il(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => Il(s, t, n)) : J(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ g(bo, { ...e }) : /* @__PURE__ */ g(Wl, { ...e }) : e;
}
function Ii(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = Il(t, n, s);
  return i == null || typeof i == "boolean" ? null : J(i) ? i : /* @__PURE__ */ g(yn, { children: i });
}
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (J(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    return i.push(r), Object.assign(s, o), /* @__PURE__ */ g(nt, { className: M(i), ...s });
  }
  return /* @__PURE__ */ g("i", { className: M(i), ...s });
}
function Ud(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Vd(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Yn(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== n && t.componentWillUnmount(), e._vnode ? (t._temp || (t._container = n, t._temp = {
    nodeType: 1,
    parentNode: n,
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
  }), Yn(
    q(Ud, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function qd(e, t) {
  const n = q(Vd, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Dl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ze = (e, t, n) => (Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Fe = (e, t, n, s) => (Dl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ve, Cn, Ss, Es;
const Ol = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    gs(this, ve, void 0), gs(this, Cn, void 0), gs(this, Ss, void 0), gs(this, Es, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Fe(this, Ss, a), Fe(this, Cn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Fe(this, ve, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Fe(this, Es, !0), this.emit("inited", this.options), this.afterInit();
    });
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
    return `.${this.NAME}.zui`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  get inited() {
    return ze(this, Es);
  }
  /**
   * Get the component element.
   */
  get element() {
    return ze(this, Cn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return ze(this, ve);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return ze(this, Ss);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return m(this.element);
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
  render(e) {
    this.setOptions(e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: s } = this;
    if (this.emit("destroyed"), s.off(this.namespace).removeData(e).attr(t, null), n) {
      const i = this.$element.data(`${e}:ALL`);
      if (i)
        if (i.delete(this._key), i.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const r = i.values().next().value;
          s.data(e, r).attr(t, r.gid);
        }
    }
    Fe(this, ve, void 0), Fe(this, Cn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(ze(this, ve), e), ze(this, ve);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(e);
    return n.__src = this, this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, n) {
    const s = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(e), function(i, r) {
      (!i.__src || i.__src === s) && t.call(this, i, r);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.on(e, t, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e) {
    this.$element.off(this._wrapEvent(e));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(e, t, n) {
    return Gt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Gt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(e) {
    return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(e, t) {
    const n = m(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const s = n.data(`${this.KEY}:ALL`);
      return s ? s.get(t) : void 0;
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
  static ensure(e, t) {
    const n = this.get(e, t == null ? void 0 : t.key);
    return n ? (t && n.setOptions(t), n) : new this(e, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(e) {
    const { MULTI_INSTANCE: t, DATA_KEY: n } = this, s = [];
    return m(e || document).find(`[${n}]`).each((i, r) => {
      if (t) {
        const a = m(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = m(r).data(this.KEY);
      o && s.push(o);
    }), s;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(e, t) {
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(m(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    m.fn.extend({
      [e || this.NAME.replace(/(^[A-Z]+)/, (t) => t.toLowerCase())](t, ...n) {
        return this.each((s, i) => {
          var o;
          const r = this.ensure(i, typeof t == "object" ? t : void 0);
          typeof t == "string" && ((o = r[t]) == null || o.call(r, ...n));
        });
      }
    });
  }
};
let dt = Ol;
ve = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
dt.DEFAULT = {};
dt.NAME = Ol.name;
dt.MULTI_INSTANCE = !1;
class Z extends dt {
  constructor() {
    super(...arguments), this.ref = tt();
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
    var t, n;
    (n = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || n.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    Yn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Gd({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: M(t),
    style: s,
    ...i
  }, n);
}
function Hl({
  type: e,
  component: t = "a",
  className: n,
  children: s,
  content: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: d,
  trailingIcon: u,
  hint: f,
  checked: p,
  onClick: y,
  ...v
}) {
  const w = [
    typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(nt, { icon: h }),
    /* @__PURE__ */ g("span", { className: "text", children: c }),
    /* @__PURE__ */ g(Ii, { content: i }),
    s,
    /* @__PURE__ */ g(nt, { icon: u })
  ];
  return q(t, {
    className: M(n, { disabled: a, active: l }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...v,
    ...r
  }, ...w);
}
function jd({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return q(e, {
    className: M(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ g(Ii, { content: r }), i);
}
function Kd({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return q(e, {
    className: M(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Yd({ type: e, ...t }) {
  return /* @__PURE__ */ g(xo, { ...t });
}
function Bl({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return q(e, {
    className: M(t),
    style: i,
    ...r
  }, /* @__PURE__ */ g(Ii, { content: s }), n);
}
const vr = class extends V {
  constructor() {
    super(...arguments), this.ref = tt();
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var e, t;
    (t = (e = this.props).beforeDestroy) == null || t.call(e, { menu: this });
  }
  afterRender(e) {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, n, s) {
    n && n.call(s.target, s, e, t);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: e, index: t, event: s });
  }
  beforeRender() {
    var n;
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: s, onClickItem: i, itemRenderProps: r } = e;
    let o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = M(o.className), r && (o = r(o)), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ g(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (J(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || vr.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(f, {
      className: M(h),
      children: d,
      style: c,
      key: a,
      ...l
    }, {
      ...u,
      type: r,
      component: typeof o == "string" ? o : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: r, ...o } = t;
    return /* @__PURE__ */ g(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ g(e, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: s,
      className: i,
      items: r,
      children: o,
      itemRender: a,
      onClickItem: l,
      beforeRender: h,
      afterRender: c,
      beforeDestroy: d,
      ...u
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(f, { class: M(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Be = vr;
Be.ItemComponents = {
  divider: Gd,
  item: Hl,
  heading: jd,
  space: Kd,
  custom: Yd,
  basic: Bl
};
Be.ROOT_TAG = "menu";
Be.NAME = "action-menu";
class zl extends Z {
}
zl.NAME = "ActionMenu";
zl.Component = Be;
function Xd({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(Hl, { ...s });
}
var Fl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ut = (e, t, n) => (Fl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Jd = (e, t, n, s) => (Fl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ms, Rt, kn;
let Di = class extends Be {
  constructor(t) {
    super(t), rr(this, Ms, /* @__PURE__ */ new Set()), rr(this, Rt, void 0), rr(this, kn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Jd(this, Rt, t.nestedShow === void 0), ut(this, Rt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d, itemRenderProps: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ut(this, Rt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      itemRenderProps: u,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ g(s, { ...i, "data-level": i.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, n) {
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const r = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    ut(this, Ms).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, kn).bind(this, r, !0),
        onMouseLeave: ut(this, kn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, kn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = ut(this, Rt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!ut(this, Rt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, Ms).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[t];
    else if (!!i[t] == !!n)
      return !1;
    return n ? i[t] = n : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    ut(this, Rt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, Rt) && this.setState({ nestedShow: !1 });
  }
};
Ms = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Di.ItemComponents = {
  item: Xd
};
class Ul extends Z {
}
Ul.NAME = "ActionMenuNested";
Ul.Component = Di;
let Oi = class extends Di {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = M(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Oi.NAME = "menu";
class Vl extends Z {
}
Vl.NAME = "Menu";
Vl.Component = Oi;
class jt extends V {
  render() {
    const {
      component: t,
      type: n,
      btnType: s,
      size: i,
      className: r,
      children: o,
      url: a,
      target: l,
      disabled: h,
      active: c,
      loading: d,
      loadingIcon: u,
      loadingText: f,
      icon: p,
      text: y,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: x,
      ...k
    } = this.props, S = t || (a ? "a" : "button"), T = y == null || typeof y == "string" && !y.length || d && !f, N = w && T && !p && !v && !o && !d;
    return q(
      S,
      {
        className: M("btn", n, r, {
          "btn-caret": N,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !N && !o && T : _
        }, i ? `size-${i}` : ""),
        title: x,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...k
      },
      d ? /* @__PURE__ */ g(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(nt, { icon: p }),
      T ? null : /* @__PURE__ */ g("span", { className: "text", children: d ? f : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ g(nt, { icon: v }),
      d ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Zd({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(jt, { type: n, ...s });
}
function cs(e) {
  return e.split("-")[1];
}
function $o(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function hs(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function Ea(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = hs(t), l = $o(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Me(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (cs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Qd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Ea(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Ea(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function ds(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ql(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ei(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = ds(t, e), p = ql(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = ei(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = ei(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const _r = Math.min, tu = Math.max;
function br(e, t, n) {
  return tu(e, _r(t, n));
}
const xr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ds(e, t) || {};
  if (l == null)
    return {};
  const c = ql(h), d = { x: n, y: s }, u = hs(i), f = $o(u), p = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", x = r.reference[f] + r.reference[u] - d[u] - r.floating[f], k = d[u] - r.reference[u], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[_] || r.floating[f]);
  const N = x / 2 - k / 2, A = T / 2 - p[f] / 2 - 1, O = _r(c[v], A), b = _r(c[w], A), R = O, I = T - p[f] - b, P = T / 2 - p[f] / 2 + N, D = br(R, P, I), W = cs(i) != null && P != D && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : I - P : 0;
  return { [u]: d[u] - W, data: { [u]: D, centerOffset: P - D + W } };
} }), eu = ["top", "right", "bottom", "left"];
eu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const nu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nu[t]);
}
function su(e, t, n) {
  n === void 0 && (n = !1);
  const s = cs(e), i = hs(e), r = $o(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ni(o)), { main: o, cross: ni(o) };
}
const iu = { start: "end", end: "start" };
function or(e) {
  return e.replace(/start|end/g, (t) => iu[t]);
}
const Hi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = ds(e, t), v = Me(s), w = Me(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [ni(o)] : function(R) {
      const I = ni(R);
      return [or(R), I, or(I)];
    }(o));
    d || f === "none" || x.push(...function(R, I, P, D) {
      const W = cs(R);
      let F = function(it, wn, ps) {
        const vn = ["left", "right"], ms = ["right", "left"], Qi = ["top", "bottom"], Hh = ["bottom", "top"];
        switch (it) {
          case "top":
          case "bottom":
            return ps ? wn ? ms : vn : wn ? vn : ms;
          case "left":
          case "right":
            return wn ? Qi : Hh;
          default:
            return [];
        }
      }(Me(R), P === "start", D);
      return W && (F = F.map((it) => it + "-" + W), I && (F = F.concat(F.map(or)))), F;
    }(o, p, f, _));
    const k = [o, ...x], S = await Gl(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: R, cross: I } = su(s, r, _);
      T.push(S[R], S[I]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, I = k[R];
      if (I)
        return { data: { index: R, overflows: N }, reset: { placement: I } };
      let P = (O = N.filter((D) => D.overflows[0] <= 0).sort((D, W) => D.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (u) {
          case "bestFit": {
            var b;
            const D = (b = N.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, it) => F + it, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : b[0];
            D && (P = D);
            break;
          }
          case "initialPlacement":
            P = o;
        }
      if (s !== P)
        return { reset: { placement: P } };
    }
    return {};
  } };
}, Bi = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Me(a), u = cs(a), f = hs(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = ds(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ru(e) {
  return e === "x" ? "y" : "x";
}
const si = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ds(e, t), h = { x: n, y: s }, c = await Gl(t, l), d = hs(Me(i)), u = ru(d);
    let f = h[d], p = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = br(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      p = br(p + c[u === "y" ? "top" : "left"], p, p - c[v]);
    }
    const y = a.fn({ ...t, [d]: f, [u]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function lt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  return lt(e).getComputedStyle(e);
}
function jl(e) {
  return e instanceof lt(e).Node;
}
function ce(e) {
  return jl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  return e instanceof lt(e).HTMLElement;
}
function Bt(e) {
  return e instanceof lt(e).Element;
}
function Ma(e) {
  return typeof ShadowRoot < "u" && (e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot);
}
function Xn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function ou(e) {
  return ["table", "td", "th"].includes(ce(e));
}
function $r(e) {
  const t = Co(), n = yt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Co() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function zi(e) {
  return ["html", "body", "#document"].includes(ce(e));
}
const Cr = Math.min, tn = Math.max, ii = Math.round, ys = Math.floor, Pe = (e) => ({ x: e, y: e });
function Kl(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = vt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = ii(n) !== r || ii(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function ko(e) {
  return Bt(e) ? e : e.contextElement;
}
function en(e) {
  const t = ko(e);
  if (!vt(t))
    return Pe(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Kl(t);
  let o = (r ? ii(n.width) : n.width) / s, a = (r ? ii(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Ta = Pe(0);
function Yl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Co())
    return Ta;
  const r = e ? lt(e) : window;
  return !n || t && n !== r ? Ta : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function We(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = ko(e);
  let o = Pe(1);
  t && (s ? Bt(s) && (o = en(s)) : o = en(e));
  const a = Yl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = lt(r), f = s && Bt(s) ? lt(s) : s;
    let p = u.frameElement;
    for (; p && s && f !== u; ) {
      const y = en(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = v.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += x, p = lt(p).frameElement;
    }
  }
  return ei({ width: c, height: d, x: l, y: h });
}
function zt(e) {
  return ((jl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fi(e) {
  return Bt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xl(e) {
  return We(zt(e)).left + Fi(e).scrollLeft;
}
function gn(e) {
  if (ce(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ma(e) && e.host || zt(e);
  return Ma(t) ? t.host : t;
}
function Jl(e) {
  const t = gn(e);
  return zi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Xn(t) ? t : Jl(t);
}
function ri(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Jl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = lt(s);
  return i ? t.concat(r, r.visualViewport || [], Xn(s) ? s : []) : t.concat(s, ri(s));
}
function Ra(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = lt(i), a = zt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = Co();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = zt(i), o = Fi(i), a = i.ownerDocument.body, l = tn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = tn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Xl(i);
      const d = -o.scrollTop;
      return yt(a).direction === "rtl" && (c += tn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(zt(e));
  else if (Bt(t))
    s = function(i, r) {
      const o = We(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = vt(i) ? en(i) : Pe(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Yl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return ei(s);
}
function Zl(e, t) {
  const n = gn(e);
  return !(n === t || !Bt(n) || zi(n)) && (yt(n).position === "fixed" || Zl(n, t));
}
function Na(e, t) {
  return vt(e) && yt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Aa(e, t) {
  const n = lt(e);
  if (!vt(e))
    return n;
  let s = Na(e, t);
  for (; s && ou(s) && yt(s).position === "static"; )
    s = Na(s, t);
  return s && (ce(s) === "html" || ce(s) === "body" && yt(s).position === "static" && !$r(s)) ? n : s || function(i) {
    let r = gn(i);
    for (; vt(r) && !zi(r); ) {
      if ($r(r))
        return r;
      r = gn(r);
    }
    return null;
  }(e) || n;
}
function au(e, t, n) {
  const s = vt(t), i = zt(t), r = n === "fixed", o = We(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Pe(0);
  if (s || !s && !r)
    if ((ce(t) !== "body" || Xn(i)) && (a = Fi(t)), vt(t)) {
      const h = We(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Xl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const lu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = ri(h).filter((v) => Bt(v) && ce(v) !== "body"), f = null;
    const p = yt(h).position === "fixed";
    let y = p ? gn(h) : h;
    for (; Bt(y) && !zi(y); ) {
      const v = yt(y), w = $r(y);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Xn(y) && !w && Zl(h, y)) ? u = u.filter((_) => _ !== y) : f = v, y = gn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ra(t, c, i);
    return h.top = tn(d.top, h.top), h.right = Cr(d.right, h.right), h.bottom = Cr(d.bottom, h.bottom), h.left = tn(d.left, h.left), h;
  }, Ra(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = vt(n), r = zt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Pe(1);
  const l = Pe(0);
  if ((i || !i && s !== "fixed") && ((ce(n) !== "body" || Xn(r)) && (o = Fi(n)), vt(n))) {
    const h = We(n);
    a = en(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Bt, getDimensions: function(e) {
  return Kl(e);
}, getOffsetParent: Aa, getDocumentElement: zt, getScale: en, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Aa, r = this.getDimensions;
  return { reference: au(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => yt(e).direction === "rtl" };
function So(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = ko(e), c = i || r ? [...h ? ri(h) : [], ...ri(t)] : [];
  c.forEach((v) => {
    i && v.addEventListener("scroll", n, { passive: !0 }), r && v.addEventListener("resize", n);
  });
  const d = h && a ? function(v, w) {
    let _, x = null;
    const k = zt(v);
    function S() {
      clearTimeout(_), x && x.disconnect(), x = null;
    }
    return function T(N, A) {
      N === void 0 && (N = !1), A === void 0 && (A = 1), S();
      const { left: O, top: b, width: R, height: I } = v.getBoundingClientRect();
      if (N || w(), !R || !I)
        return;
      const P = { rootMargin: -ys(b) + "px " + -ys(k.clientWidth - (O + R)) + "px " + -ys(k.clientHeight - (b + I)) + "px " + -ys(O) + "px", threshold: tn(0, Cr(1, A)) || 1 };
      let D = !0;
      function W(F) {
        const it = F[0].intersectionRatio;
        if (it !== A) {
          if (!D)
            return T();
          it ? T(!1, it) : _ = setTimeout(() => {
            T(!1, 1e-7);
          }, 100);
        }
        D = !1;
      }
      try {
        x = new IntersectionObserver(W, { ...P, root: k.ownerDocument });
      } catch {
        x = new IntersectionObserver(W, P);
      }
      x.observe(v);
    }(!0), S;
  }(h, n) : null;
  let u, f = -1, p = null;
  o && (p = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), h && !l && p.observe(h), p.observe(t));
  let y = l ? We(e) : null;
  return l && function v() {
    const w = We(e);
    !y || w.x === y.x && w.y === y.y && w.width === y.width && w.height === y.height || n(), y = w, u = requestAnimationFrame(v);
  }(), n(), () => {
    c.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(u);
  };
}
const Ui = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: lu, ...n }, r = { ...i.platform, _c: s };
  return Qd(e, t, { ...i, platform: r });
};
var on, Qa;
let cu = (Qa = class extends Oi {
  constructor() {
    super(...arguments);
    L(this, on, 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  layout() {
    const n = this.ref.current, s = n == null ? void 0 : n.parentElement;
    !n || !s || Ui(s, n, {
      placement: "right-start",
      middleware: [Hi(), si(), Bi(1)]
    }).then(({ x: i, y: r }) => {
      m(n).css({
        left: i,
        top: r
      });
    });
  }
  getNestedMenuProps(n) {
    return {
      ...super.getNestedMenuProps(n),
      popup: !0
    };
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && (this.layout(), H(this, on, window.setTimeout(this.layout.bind(this), 100)));
  }
  beforeRender() {
    const n = super.beforeRender();
    return n.className = M(n.className, "popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), C(this, on) && clearTimeout(C(this, on));
  }
}, on = new WeakMap(), Qa);
var Eo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Tt = (e, t, n) => (Eo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ws = (e, t, n, s) => (Eo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), La = (e, t, n) => (Eo(e, t, "access private method"), n), Qt, Sn, Ts, Rs, kr, Ql, Sr, tc;
const ar = "show", hu = '[data-toggle="contextmenu"]';
class et extends dt {
  constructor() {
    super(...arguments), Ue(this, kr), Ue(this, Sr), Ue(this, Qt, void 0), Ue(this, Sn, void 0), Ue(this, Ts, void 0), Ue(this, Rs, void 0);
  }
  get isShown() {
    return Tt(this, Qt) && m(Tt(this, Qt)).hasClass(ar);
  }
  get menu() {
    return Tt(this, Qt) || this.ensureMenu();
  }
  get trigger() {
    return Tt(this, Ts) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: t } = this;
    !t.is("body") && !t.attr("data-toggle") && t.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.isDynamic && this.destroy();
    });
  }
  show(t) {
    return this.isShown || (ws(this, Ts, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(ar), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Tt(this, Rs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Tt(this, Qt)).removeClass(ar), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Tt(this, Qt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = m(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = m(document).find(i)), !(s != null && s.length)) {
        const r = t.next();
        r.hasClass(n) ? s = r : s = t.parent().find(`.${n}`);
      }
      s && s.addClass("popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), ws(this, Qt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(Hi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    ws(this, Rs, So(n, s, () => {
      Ui(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = La(this, kr, Ql).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...La(this, Sr, tc).call(this, l)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: n } = this.options;
    let s = n || (t == null ? void 0 : t.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...t,
        items: s
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Yn(q(cu, t), this.menu), !0);
  }
  getPopperElement() {
    return Tt(this, Sn) || ws(this, Sn, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: n, clientY: s } = t;
          return {
            width: 0,
            height: 0,
            top: s,
            right: n,
            bottom: s,
            left: n
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), Tt(this, Sn);
  }
  static clear(t) {
    var a, l;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = t || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const r = this.getAll(), o = new Set(s || []);
    for (const h of r)
      o.has(h.element) || h.hide();
  }
  static show(t) {
    const { event: n, ...s } = t, i = this.ensure(document.body);
    return i.setOptions(s), i.show(n), n instanceof Event && n.stopPropagation(), i;
  }
  static hide(t) {
    const n = this.query(t);
    return n == null || n.hide(), n;
  }
}
Qt = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakSet();
Ql = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Sr = /* @__PURE__ */ new WeakSet();
tc = function(e) {
  const t = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${e[0].toUpperCase()}${e.substring(1)}Style`]: "none",
    [`border${t[e]}Style`]: "none"
  };
};
et.MENU_CLASS = "contextmenu";
et.NAME = "ContextMenu";
et.MULTI_INSTANCE = !0;
et.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${et.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${et.MENU_CLASS}`).length)
    return;
  const n = t.closest(hu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${et.KEY}:options`, i = n.data(s), r = et.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${et.NAMESPACE}`, et.clear.bind(et));
var Mo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, En = (e, t, n) => (Mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Er = (e, t, n, s) => (Mo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), du = (e, t, n) => (Mo(e, t, "access private method"), n), Hn, Mn, oi, Mr, ec;
const Pa = '[data-toggle="dropdown"]', nc = class extends et {
  constructor() {
    super(...arguments), vs(this, Mr), vs(this, Hn, !1), vs(this, Mn, 0), this.hideLater = () => {
      En(this, oi).call(this), Er(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, vs(this, oi, () => {
      clearTimeout(En(this, Mn)), Er(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && nc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!En(this, Hn) && this.isHover && du(this, Mr, ec).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    En(this, Hn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Bi(t)), (s = e.middleware) == null || s.push(xr({ element: this.arrowEl }))), e;
  }
  ensureMenu() {
    const e = super.ensureMenu();
    if (this.options.arrow) {
      const t = this.getArrowSize(), n = m('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${t}px`,
        height: `${t}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0];
    }
    return e;
  }
  getMenuOptions() {
    const e = super.getMenuOptions();
    if (e && this.options.arrow) {
      const { afterRender: t } = e;
      e.afterRender = (...n) => {
        this.arrowEl && m(this.menu).find(".menu").each((s, i) => {
          m(i).find(".arrow-el").length === 0 && m(i).parent().hasClass("dropdown-menu") && m(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let Ft = nc;
Hn = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakSet();
ec = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, En(this, oi)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Er(this, Hn, !0);
};
Ft.MENU_CLASS = "dropdown-menu";
Ft.NAME = "Dropdown";
Ft.DEFAULT = {
  ...et.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const _s = `${Ft.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(Pa).not(":disabled,.disabled");
  if (!t.length) {
    Ft.clear({ event: e });
    return;
  }
  const n = t.data(_s), s = Ft.ensure(t, n);
  n || t.data(_s, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(Pa);
  if (!t.length)
    return;
  const n = t.data(_s), s = Ft.ensure(t, n);
  n || t.data(_s, s.options), s.isHover && s.show();
});
let bs = 0;
window.addEventListener("scroll", (e) => {
  bs && clearTimeout(bs), bs = window.setTimeout(() => {
    Ft.clear({ event: e }), bs = 0;
  }, 50);
}, !0);
var ts, an;
class uu extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, ts, void 0);
    L(this, an, tt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, an);
  }
  get triggerElement() {
    return C(this, an).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...s } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var o;
        const r = ((o = i.placement) == null ? void 0 : o.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, ts, Ft.ensure(this.triggerElement, {
      ...s,
      modifiers: n,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var n;
    (n = C(this, ts)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, an)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
ts = new WeakMap(), an = new WeakMap();
class fu extends uu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const o = (n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement) || "";
      i = (o.includes("top") ? "up" : o.includes("bottom") ? "down" : o) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ g(jt, { ...s });
  }
}
function sc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(fu, { type: n, ...s });
}
let ic = class extends V {
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
  handleItemClick(t, n, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, n = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: s = n, ...i } = t;
    return /* @__PURE__ */ g(jt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (J(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: s,
      size: i,
      type: r,
      btnProps: o,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: c,
      afterRender: d,
      beforeDestroy: u,
      ...f
    } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function pu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(ic, { type: n, ...s });
}
let _t = class extends Be {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = M(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: M(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ g(t, { ...a });
  }
};
_t.ItemComponents = {
  item: Zd,
  dropdown: sc,
  "btn-group": pu
};
_t.ROOT_TAG = "nav";
_t.NAME = "toolbar";
_t.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function mu({
  className: e,
  style: t,
  actions: n,
  heading: s,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: h,
  ...c
}) {
  let d;
  a === !0 ? d = /* @__PURE__ */ g(jt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : J(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ g(jt, { ...a, onClick: l }));
  const u = J(n) ? n : n ? /* @__PURE__ */ g(_t, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: M("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ g(nt, { icon: h }),
    J(i) ? i : /* @__PURE__ */ g("div", { className: M("alert-content", r), children: [
      J(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function gu(e) {
  if (e === "center")
    return "fade-from-center";
  if (e) {
    if (e.includes("top"))
      return "fade-from-top";
    if (e.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let yu = class extends V {
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
  render() {
    const {
      afterRender: t,
      beforeDestroy: n,
      margin: s,
      type: i,
      placement: r,
      animation: o,
      show: a,
      className: l,
      time: h,
      ...c
    } = this.props;
    return /* @__PURE__ */ g(
      mu,
      {
        className: M("messager", l, i, o === !0 ? gu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var wu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _n = (e, t, n) => (wu(e, t, "access private method"), n), _e, je;
class To extends Z {
  constructor() {
    super(...arguments), vu(this, _e), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: n } = this.options;
      n && this.$element.css("margin", `${n}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      m(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), _n(this, _e, je).call(this, () => {
      this._show = !0, this.render(), _n(this, _e, je).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && _n(this, _e, je).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && _n(this, _e, je).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), _n(this, _e, je).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
_e = /* @__PURE__ */ new WeakSet();
je = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
To.NAME = "MessagerItem";
To.Component = yu;
var Ro = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Te = (e, t, n) => (Ro(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ns = (e, t, n, s) => (Ro(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), rc = (e, t, n) => (Ro(e, t, "access private method"), n), nn, Ot, Tr, oc, No, ac;
const lc = class extends dt {
  constructor() {
    super(...arguments), xs(this, Tr), xs(this, No), xs(this, nn, void 0), xs(this, Ot, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Te(this, Ot)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), rc(this, Tr, oc).call(this).show();
  }
  hide() {
    var e;
    (e = Te(this, Ot)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = lc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let cc = lc;
nn = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakSet();
oc = function() {
  if (Te(this, Ot))
    Te(this, Ot).setOptions(this.options);
  else {
    const e = rc(this, No, ac).call(this), t = new To(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ns(this, nn, void 0), Ns(this, Ot, void 0);
    }), Ns(this, Ot, t);
  }
  return Te(this, Ot);
};
No = /* @__PURE__ */ new WeakSet();
ac = function() {
  if (Te(this, nn))
    return Te(this, nn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ns(this, nn, n[0])), n[0];
};
cc.NAME = "messager";
cc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
var Dt;
class _u {
  constructor(t = "") {
    L(this, Dt, void 0);
    typeof t == "object" ? H(this, Dt, t) : H(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, Dt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, Dt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, Dt).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const Wa = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class hc extends _u {
  on(t, n, s) {
    super.on(t, n, s);
  }
  off(t, n, s) {
    super.off(t, n, s);
  }
  once(t, n, s) {
    super.once(t, n, s);
  }
  emit(t, n) {
    return typeof t == "string" && (Wa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(hc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Wa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let dc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, se, $t, ln, cn, As;
const fa = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, cn);
    L(this, es, void 0);
    L(this, se, void 0);
    L(this, $t, void 0);
    L(this, ln, void 0);
    H(this, es, n), H(this, se, `ZUI_STORE:${t ?? dc()}`), H(this, $t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, ln) || H(this, ln, new fa(C(this, se), "session")), C(this, ln));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, $t).getItem(me(this, cn, As).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, n) {
    if (n == null)
      return this.remove(t);
    C(this, $t).setItem(me(this, cn, As).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, $t).removeItem(me(this, cn, As).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, $t).length; n++) {
      const s = C(this, $t).key(n);
      if (s != null && s.startsWith(C(this, se))) {
        const i = C(this, $t).getItem(s);
        typeof i == "string" && t(s.substring(C(this, se).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((n, s) => {
      t[n] = s;
    }), t;
  }
};
let ai = fa;
es = new WeakMap(), se = new WeakMap(), $t = new WeakMap(), ln = new WeakMap(), cn = new WeakSet(), As = function(t) {
  return `${C(this, se)}:${t}`;
};
const bu = new ai("DEFAULT");
function xu(e, t = "local") {
  return new ai(e, t);
}
Object.assign(bu, { create: xu });
function $u(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function Cu(e) {
  const [t, n, s] = typeof e == "string" ? $u(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Ia(e, t) {
  return Cu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Da(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function ku(e, t, n) {
  e = e % 360 / 360, t = Da(t), n = Da(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Su(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Eu(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let uc = class extends V {
  render() {
    const {
      className: t,
      style: n,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: c = 2,
      src: d,
      hueDistance: u = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let k;
    if (d)
      w.push("has-img"), k = /* @__PURE__ */ g("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const S = Eu(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = Ia(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Su(N)) * u % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = ku(A, f, p);
          _.color = Ia(O);
        }
      }
      let T;
      x && x < 14 * S.length && (T = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ g("div", { "data-actualSize": x, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: M(w),
        style: _,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
class fc extends Z {
}
fc.NAME = "Avatar";
fc.Component = uc;
class pc extends Z {
}
pc.NAME = "BtnGroup";
pc.Component = ic;
class Ao extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n, clickType: s } = this.props, i = m(t.target);
    if (i.closest('[data-dismiss="pick"]').length) {
      n(!1);
      return;
    }
    i.closest("a,input").length || n(s === "open" ? !0 : void 0);
  }
  _getClass(t) {
    const { state: n, className: s } = t, { open: i, disabled: r } = n;
    return M(
      "pick",
      s,
      i && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: n, style: s, attrs: i } = t;
    return {
      id: `pick-${n}`,
      className: this._getClass(t),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: n, state: s } = t;
    return n ?? s.value;
  }
  _renderValue(t) {
    const { name: n, state: s } = t;
    return n ? /* @__PURE__ */ g("input", { type: "hidden", className: "pick-value", name: n, value: s.value }) : null;
  }
  render(t) {
    return q(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var Ee, Ct, ie;
class mc extends V {
  constructor(n) {
    super(n);
    L(this, Ee, void 0);
    L(this, Ct, void 0);
    L(this, ie, void 0);
    H(this, Ee, tt()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Ee)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, ie);
  }
  _handleClick(n) {
    const { togglePop: s } = this.props, i = m(n.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return n.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: r } = i;
    return M(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getProps(n) {
    const {
      id: s,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = n, h = m.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(n),
      style: h,
      ref: C(this, Ee),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, ie)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), H(this, ie, i[0]);
    }
    return C(this, ie);
  }
  _render(n) {
    return /* @__PURE__ */ g("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      C(this, Ct) && (C(this, Ct).call(this), H(this, Ct, void 0));
      return;
    }
    C(this, Ct) || H(this, Ct, So(s, n, () => {
      const { placement: o, width: a } = i;
      Ui(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Hi() : null, si(), Bi(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        m(n).css({
          left: l,
          top: h,
          width: a === "100%" ? m(s).outerWidth() : void 0
        });
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    this.layout(), m(document).on("click", this._handleDocClick);
  }
  componentWillUnmount() {
    m(document).off("click", this._handleDocClick);
    const n = C(this, Ct);
    n && (n(), H(this, Ct, void 0)), H(this, ie, void 0), H(this, Ee, void 0), m(`pick-pop-${this.props.id}`).remove();
  }
  render(n) {
    return qd(this._render(n), this._getContainer(n));
  }
}
Ee = new WeakMap(), Ct = new WeakMap(), ie = new WeakMap();
var gc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ge = (e, t, n) => (gc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), lr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (gc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ls, pt, Ps;
let fe = class extends V {
  constructor(t) {
    super(t), lr(this, Ls, void 0), lr(this, pt, 0), lr(this, Ps, tt()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      ge(this, pt) && (clearTimeout(ge(this, pt)), Ve(this, pt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Js(200, (a) => {
        Ve(this, pt, a);
      }), Ve(this, pt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Js(50, (a) => {
        Ve(this, pt, a);
      }), Ve(this, pt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Ve(this, Ls, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return ge(this, Ls);
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      clickType: t.clickType,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, n) {
    return {
      id: this.id,
      state: n,
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
  _renderTrigger(t, n) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, n) {
    return null;
  }
  _afterRender(t = !1) {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, n) {
    const { onChange: s } = this.props;
    s && s(t, n);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, n) {
    const { open: s } = this.state, { open: i } = n;
    if (s === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, n) {
    const { open: s, value: i } = this.state, { open: r, value: o } = n;
    if (!!s != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this), ge(this, pt) && clearTimeout(ge(this, pt));
    const t = ge(this, Ps).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ref: ge(this, Ps), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ g(yn, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ls = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
fe.Trigger = Ao;
fe.Pop = mc;
fe.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let yc = class extends fe {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && m(s).css("backgroundColor", a), i && m(i).css("borderColor", a), r && m(r).css("color", a), o && m(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ g(nt, { icon: s }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = m.extend({
      color: n.value
    }, s.style), s;
  }
  _renderPop(t, n) {
    const { colors: s = [], closeBtn: i, heading: r } = t, { value: o } = n;
    let a;
    return r && (a = /* @__PURE__ */ g("div", { className: "color-picker-heading", children: [
      r,
      i ? /* @__PURE__ */ g("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ g("div", { className: "color-picker-row", children: [
        s.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
yc.defaultProps = {
  ...fe.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class wc extends Z {
}
wc.NAME = "ColorPicker";
wc.Component = yc;
var Lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ke = (e, t, n) => (Lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bn = (e, t, n, s) => (Lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), cr = (e, t, n) => (Lo(e, t, "access private method"), n), Xe, Ws, be, Rr, Tn, Is;
const hr = "show", Oa = "in", Mu = '[data-dismiss="modal"]', Rn = class extends dt {
  constructor() {
    super(...arguments), bn(this, Tn), bn(this, Xe, 0), bn(this, Ws, void 0), bn(this, be, void 0), bn(this, Rr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Mu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(hr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ke(this, Rr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!ke(this, be) || ke(this, be)[0] !== n || ke(this, be)[1] !== s) && (Bn(this, be, [n, s]), this.layout());
        });
        t.observe(e), Bn(this, Ws, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = ke(this, Ws)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Rn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, hr, i).css({
      zIndex: `${Rn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), cr(this, Tn, Is).call(this, () => {
      m(t).addClass(Oa), cr(this, Tn, Is).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(Oa), this.emit("hide"), cr(this, Tn, Is).call(this, () => {
      m(this.modalElement).removeClass(hr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = m(n);
    t = t ?? this.options.size, s.removeAttr("data-size");
    const i = { width: "", height: "" };
    typeof t == "object" ? (i.width = t.width, i.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (i.width = t), s.css(i), e = e ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    Bn(this, be, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), s.css(a), m(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = Rn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Rn.query(e)) == null || t.show();
  }
};
let Jt = Rn;
Xe = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakSet();
Is = function(e, t) {
  ke(this, Xe) && (clearTimeout(ke(this, Xe)), Bn(this, Xe, 0)), e && (this.options.animation ? Bn(this, Xe, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Jt.NAME = "Modal";
Jt.MULTI_INSTANCE = !0;
Jt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Jt.zIndex = 2e3;
m(window).on("resize.modal.zui", () => {
  Jt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Jt.hide(t == null ? void 0 : t.target);
});
class vc extends V {
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
      title: n
    } = this.props;
    return J(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : J(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(_t, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? J(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return J(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(_t, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
vc.defaultProps = { closeBtn: !0 };
var hn, dn, un;
class Tu extends V {
  constructor() {
    super(...arguments);
    L(this, hn, void 0);
    L(this, dn, void 0);
    L(this, un, void 0);
    H(this, hn, tt()), this.state = {}, H(this, un, () => {
      var i, r;
      const n = (r = (i = C(this, hn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, dn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), H(this, dn, s);
    });
  }
  componentDidMount() {
    C(this, un).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, dn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, hn),
        onLoad: C(this, un)
      }
    );
  }
}
hn = new WeakMap(), dn = new WeakMap(), un = new WeakMap();
var Po = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Po(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, qe = (e, t, n, s) => (Po(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ds = (e, t, n) => (Po(e, t, "access private method"), n), Nt, Nn, At, li, Wo, Os, Nr;
function Ru(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Nu(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (n !== "html")
    try {
      const d = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...d
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ g(bo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Au(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(Tu, { url: n })
  };
}
const Lu = {
  custom: Ru,
  ajax: Nu,
  iframe: Au
}, dr = "loading", An = class extends Jt {
  constructor() {
    super(...arguments), xn(this, li), xn(this, Os), xn(this, Nt, void 0), xn(this, Nn, void 0), xn(this, At, void 0);
  }
  get id() {
    return ft(this, Nn);
  }
  get loading() {
    var e;
    return (e = ft(this, Nt)) == null ? void 0 : e.classList.contains(dr);
  }
  get shown() {
    var e;
    return !!((e = ft(this, Nt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = ft(this, Nt);
    if (!e) {
      const { options: t } = this;
      let n = ft(this, Nn);
      n || (n = t.id || `modal-${m.guid++}`, qe(this, Nn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      qe(this, Nt, e);
    }
    return e;
  }
  get $emitter() {
    const e = ft(this, Nt);
    return e ? m(e) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(e) {
    return super.show(e) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const e = ft(this, Nt);
    e && (m(e).removeData(this.constructor.KEY).remove(), qe(this, Nt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, At) && clearTimeout(ft(this, At));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Lu[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(dr), i && qe(this, At, window.setTimeout(() => {
      qe(this, At, 0), Ds(this, Os, Nr).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Ds(this, Os, Nr).call(this, this.options.failedTip) : a && typeof a == "object" && await Ds(this, li, Wo).call(this, a), ft(this, At) && (clearTimeout(ft(this, At)), qe(this, At, 0)), this.layout(), await Js(100), n.removeClass(dr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = An.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = typeof n == "object" && n.html ? /* @__PURE__ */ g("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ g("div", { children: n });
    s ? c = /* @__PURE__ */ g("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ g("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ g("div", { className: "modal-body", children: c });
    const d = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Gt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && d.push(p);
    }, []);
    let u;
    const f = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: p, event: y }) => {
        const v = An.query(y.target, l);
        u = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await An.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: f, ...typeof a == "function" ? a() : a },
      ...h
    }), u;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await An.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let _c = An;
Nt = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
Wo = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Yn(
      /* @__PURE__ */ g(vc, { ...e }),
      this.modalElement
    );
  });
};
Os = /* @__PURE__ */ new WeakSet();
Nr = function(e) {
  if (e)
    return Ds(this, li, Wo).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
_c.DEFAULT = {
  ...Jt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Io = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ar = (e, t, n) => (Io(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ha = (e, t, n, s) => (Io(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lr = (e, t, n) => (Io(e, t, "access private method"), n), Re, Do, bc, Pr, xc, Oo, $c;
const Pu = '[data-toggle="modal"]';
class Cc extends dt {
  constructor() {
    super(...arguments), $s(this, Do), $s(this, Pr), $s(this, Oo), $s(this, Re, void 0);
  }
  get modal() {
    return Ar(this, Re);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = Lr(this, Pr, xc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Ar(this, Re)) == null ? void 0 : t.hide();
  }
}
Re = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakSet();
bc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Pr = /* @__PURE__ */ new WeakSet();
xc = function() {
  const e = Lr(this, Do, bc).call(this);
  let t = Ar(this, Re);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = Lr(this, Oo, $c).call(this);
    if (!n)
      return;
    t = Jt.ensure(n, e);
  } else
    t = _c.ensure(this.container, e);
  return Ha(this, Re, t), t.on("destroyed", () => {
    Ha(this, Re, void 0);
  }), t;
};
Oo = /* @__PURE__ */ new WeakSet();
$c = function() {
  let e = this.options.target;
  if (!e) {
    const { $element: t } = this;
    if (t.is("a")) {
      const n = t.attr("href");
      n != null && n.startsWith("#") && (e = n);
    }
  }
  return this.container.querySelector(e || ".modal");
};
Cc.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Pu);
  if (n) {
    const i = Cc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let kc = class extends Be {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
kc.NAME = "nav";
class Sc extends Z {
}
Sc.NAME = "Nav";
Sc.Component = kc;
function Jn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Wu({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Jn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : st(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : st(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(jt, { type: n, ...a });
}
const Ec = 24 * 60 * 60 * 1e3, ht = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), Vi = (e, t = /* @__PURE__ */ new Date()) => ht(e).toDateString() === ht(t).toDateString(), Wr = (e, t = /* @__PURE__ */ new Date()) => ht(e).getFullYear() === ht(t).getFullYear(), Iu = (e, t = /* @__PURE__ */ new Date()) => (e = ht(e), t = ht(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), ep = (e, t = /* @__PURE__ */ new Date()) => {
  e = ht(e), t = ht(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, np = (e, t) => Vi(ht(t), e), sp = (e, t) => Vi(ht(t).getTime() - Ec, e), ip = (e, t) => Vi(ht(t).getTime() + Ec, e), Ir = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = ht(e), Number.isNaN(e.getDay()))
    return n;
  const s = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Wr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, rp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Ir(e, Wr(e) ? s.month : s.full);
  if (Vi(e, t))
    return i;
  const r = Ir(t, Wr(e, t) ? Iu(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
function Du({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Jn(i, n);
  return s = typeof s == "function" ? s(a) : st(s, a), /* @__PURE__ */ g(Bl, { ...o, children: [
    r,
    s
  ] });
}
function Ou({
  key: e,
  type: t,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(jt, { type: n, ...l })), c = (u, f) => {
    const p = [];
    for (let y = u; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Jn(i, y);
      o && (l.url = typeof o == "function" ? o(v) : st(o, v)), p.push(/* @__PURE__ */ g(jt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Hu({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...t, recPerPage: h };
    return {
      ...r,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof n == "function" ? n(c) : st(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : st(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(sc, { type: "dropdown", dropdown: i, ...o });
}
function Bu({
  key: e,
  page: t,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const c = { ...h };
  let d;
  const u = (y) => {
    var v;
    d = Number((v = y.target) == null ? void 0 : v.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, f = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const v = Jn(i, d);
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : st(l, v));
  }, p = Jn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : st(l, p), /* @__PURE__ */ g("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ g(jt, { type: s, ...c, onClick: f })
  ] });
}
let qi = class extends _t {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
};
qi.NAME = "pager";
qi.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
qi.ItemComponents = {
  ..._t.ItemComponents,
  link: Wu,
  info: Du,
  nav: Ou,
  "size-menu": Hu,
  goto: Bu
};
class Mc extends Z {
}
Mc.NAME = "Pager";
Mc.Component = qi;
class Tc extends Z {
}
Tc.NAME = "Pick";
Tc.Component = fe;
var fn, ns, ss, vi;
class Rc extends V {
  constructor(n) {
    super(n);
    L(this, fn, tt());
    L(this, ns, tt());
    L(this, ss, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    L(this, vi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = C(this, fn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = C(this, ns), { current: i } = C(this, fn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: C(this, ns), children: o }) : a ? l = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, vi), children: /* @__PURE__ */ g("span", { className: "close" }) }) : l = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: C(this, ss),
          onInput: C(this, ss),
          ref: C(this, fn)
        }
      ),
      l
    ] });
  }
}
fn = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), vi = new WeakMap();
var pn, is, rs, os;
class zu extends Ao {
  constructor() {
    super(...arguments);
    L(this, pn, void 0);
    L(this, is, void 0);
    L(this, rs, void 0);
    L(this, os, void 0);
    H(this, pn, tt()), H(this, is, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), H(this, rs, (n) => {
      this.props.changeState({ search: n });
    }), H(this, os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ g("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, is), "data-value": n.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, pn).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ g(
      Rc,
      {
        inline: !0,
        ref: C(this, pn),
        defaultSearch: s,
        onSearch: C(this, rs),
        onClear: C(this, os),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ g("span", { class: "caret" }, "caret")
    ];
  }
}
pn = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), os = new WeakMap();
var as, _i, bi, xi, $i, Nc;
class Fu extends Ao {
  constructor() {
    super(...arguments);
    L(this, $i);
    L(this, as, tt());
    L(this, _i, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    L(this, bi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, xi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, as).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ g(
      Rc,
      {
        ref: C(this, as),
        defaultSearch: s,
        onSearch: C(this, bi),
        onClear: C(this, xi),
        placeholder: me(this, $i, Nc).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a } = n, [l] = i, h = r && a;
    let c;
    h ? c = this._renderSearch(n) : l ? c = /* @__PURE__ */ g("span", { className: "picker-single-selection", children: l.text ?? l.value }, "main") : c = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const d = l && !h ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, _i), children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      s,
      d,
      h ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
as = new WeakMap(), _i = new WeakMap(), bi = new WeakMap(), xi = new WeakMap(), $i = new WeakSet(), Nc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const Uu = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ g("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Ci, ki, Ac, Si, Lc, Ei;
class Vu extends mc {
  constructor() {
    super(...arguments);
    L(this, ki);
    L(this, Si);
    L(this, Ci, tt());
    L(this, Ei, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(s) : (o(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = m(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = me(this, ki, Ac).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ g(
      Oi,
      {
        ref: C(this, Ci),
        className: "picker-menu-list",
        items: me(this, Si, Lc).call(this),
        onClickItem: C(this, Ei),
        ...s
      }
    );
  }
}
Ci = new WeakMap(), ki = new WeakSet(), Ac = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Si = new WeakSet(), Lc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: f,
      text: p,
      className: y,
      ...v
    } = d;
    u === i && (a = !0);
    const w = p ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof w == "string" ? Uu(l, [w]) : /* @__PURE__ */ g(Ii, { content: w }),
      className: M(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, Ei = new WeakMap();
var Ho = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Zt = (e, t, n) => (Ho(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ge = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ye = (e, t, n, s) => (Ho(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), gt = (e, t, n) => (Ho(e, t, "access private method"), n), Ln, Lt, xe, Je, zn, Bo, Pc, te, $e;
let zo = class extends fe {
  constructor(t) {
    super(t), Ge(this, Je), Ge(this, Bo), Ge(this, te), Ge(this, Ln, void 0), Ge(this, Lt, void 0), Ge(this, xe, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? gt(this, te, $e).call(this, n) : gt(this, te, $e).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), gt(this, te, $e).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(gt(this, Je, zn).call(this, n)), r = s.filter((o) => !i.has(o));
      gt(this, te, $e).call(this, r);
    }, this.clear = () => {
      gt(this, te, $e).call(this);
    }, this.select = (n) => {
      const s = gt(this, Je, zn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return gt(this, te, $e).call(this, i);
    }, this.isSelected = (n) => this.valueList.includes(n), m.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return gt(this, Je, zn).call(this, this.state.value);
  }
  async load() {
    let t = Zt(this, Lt);
    t && t.abort(), t = new AbortController(), ye(this, Lt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await Js(s || 500), Zt(this, Lt) !== t || (r = await n(i, { signal: t.signal }), Zt(this, Lt) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o.length ? r = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: d
        } = l;
        return o.every((u) => h.toLowerCase().includes(u) || c.toLowerCase().includes(u) || typeof d == "string" && d.toLowerCase().includes(u)) && a.push(l), a;
      }, []) : r = n;
    } else
      r = n;
    return ye(this, Lt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Zt(this, Ln) || {}, r = {};
    if (ye(this, Ln, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    Zt(this, xe) && clearTimeout(Zt(this, xe)), ye(this, xe, window.setTimeout(() => {
      ye(this, xe, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, n) {
    super.componentDidUpdate(t, n), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = Zt(this, Lt)) == null || t.abort(), ye(this, Lt, void 0), ye(this, Ln, void 0), clearTimeout(Zt(this, xe)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getPopProps(t, n) {
    return {
      ...super._getPopProps(t, n),
      menu: t.menu,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? zu : Fu);
  }
};
Ln = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakSet();
zn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
Bo = /* @__PURE__ */ new WeakSet();
Pc = function(e) {
  const t = gt(this, Je, zn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
te = /* @__PURE__ */ new WeakSet();
$e = function(e) {
  const t = e === void 0 ? e : gt(this, Bo, Pc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
zo.defaultProps = {
  ...fe.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
zo.Pop = Vu;
class Wc extends Z {
}
Wc.NAME = "Picker";
Wc.Component = zo;
class Ic extends dt {
  constructor() {
    super(...arguments), this.cleanup = () => {
    }, this.toggle = () => {
    };
  }
  init() {
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on("click", this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off("click", this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: n } = this.options, s = {
      placement: t,
      strategy: n,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(Hi()), r && s.middleware.push(r === !0 ? si() : si(r)), o && s.middleware.push(xr({ element: this.$arrow[0] })), a && s.middleware.push(Bi(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = So(t, n, () => {
      Ui(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !xr || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, h = {
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
          [h]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const n = m(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      m(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = m('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = m('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Ic.NAME = "Popovers";
Ic.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xt = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), we = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Hs = (e, t, n, s) => (Fo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ba = (e, t, n) => (Fo(e, t, "access private method"), n), Bs, zs, Ne, Dr, Fs, Us, Vs, Or;
let Dc = class extends V {
  constructor(t) {
    super(t), we(this, Vs), we(this, Bs, void 0), we(this, zs, tt()), we(this, Ne, 0), we(this, Dr, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), we(this, Fs, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (Ba(this, Vs, Or).call(this), Hs(this, Ne, window.setTimeout(() => {
          r(i, n), Hs(this, Ne, 0);
        }, this.props.delay || 0)));
      });
    }), we(this, Us, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Hs(this, Bs, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return xt(this, Bs);
  }
  get input() {
    return xt(this, zs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Ba(this, Vs, Or).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: f } = t, { focus: p, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, x, k;
    return u && (k = u === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ g("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), f && !w ? x = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: xt(this, Dr),
        children: f === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(nt, { icon: f })
      }
    ) : d && u && (x = k), x && (x = /* @__PURE__ */ g("label", { for: v, class: "input-control-suffix", children: x }, "suffix")), /* @__PURE__ */ g("div", { class: M("search-box input-control", r, { focus: p, empty: w, "has-prefix-icon": _, "has-suffix-icon": x }), style: o, children: [
      _,
      /* @__PURE__ */ g(
        "input",
        {
          ref: xt(this, zs),
          id: v,
          type: "text",
          class: M("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: xt(this, Fs),
          onChange: xt(this, Fs),
          onFocus: xt(this, Us),
          onBlur: xt(this, Us)
        }
      ),
      x
    ] });
  }
};
Bs = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakSet();
Or = function() {
  xt(this, Ne) && clearTimeout(xt(this, Ne)), Hs(this, Ne, 0);
};
Dc.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Oc extends Z {
}
Oc.NAME = "SearchBox";
Oc.Component = Dc;
class Hc extends Z {
}
Hc.NAME = "Toolbar";
Hc.Component = _t;
function us(e) {
  return e.split("-")[1];
}
function Uo(e) {
  return e === "y" ? "height" : "width";
}
function sn(e) {
  return e.split("-")[0];
}
function Gi(e) {
  return ["top", "bottom"].includes(sn(e)) ? "x" : "y";
}
function za(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Gi(t), l = Uo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (sn(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (us(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const qu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = za(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = za(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function Bc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ci(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gu(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, p = Bc(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = ci(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = ci(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const ju = Math.min, Ku = Math.max;
function Yu(e, t, n) {
  return Ku(e, ju(t, n));
}
const Xu = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Bc(s), c = { x: i, y: r }, d = Gi(o), u = Uo(d), f = await l.getDimensions(n), p = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let x = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[u]);
  const k = v / 2 - w / 2, S = h[p], T = x - f[u] - h[y], N = x / 2 - f[u] / 2 + k, A = Yu(S, N, T), O = us(o) != null && N != A && a.reference[u] / 2 - (N < S ? h[p] : h[y]) - f[u] / 2 < 0;
  return { [d]: c[d] - (O ? N < S ? S - N : T - N : 0), data: { [d]: A, centerOffset: N - A } };
} }), Ju = ["top", "right", "bottom", "left"];
Ju.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Zu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Zu[t]);
}
function Qu(e, t, n) {
  n === void 0 && (n = !1);
  const s = us(e), i = Gi(e), r = Uo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = hi(o)), { main: o, cross: hi(o) };
}
const tf = { start: "end", end: "start" };
function ur(e) {
  return e.replace(/start|end/g, (t) => tf[t]);
}
const ef = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, v = sn(s), w = sn(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [hi(o)] : function(b) {
      const R = hi(b);
      return [ur(b), R, ur(R)];
    }(o));
    d || f === "none" || x.push(...function(b, R, I, P) {
      const D = us(b);
      let W = function(F, it, wn) {
        const ps = ["left", "right"], vn = ["right", "left"], ms = ["top", "bottom"], Qi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return wn ? it ? vn : ps : it ? ps : vn;
          case "left":
          case "right":
            return it ? ms : Qi;
          default:
            return [];
        }
      }(sn(b), I === "start", P);
      return D && (W = W.map((F) => F + "-" + D), R && (W = W.concat(W.map(ur)))), W;
    }(o, p, f, _));
    const k = [o, ...x], S = await Gu(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: b, cross: R } = Qu(s, r, _);
      T.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = k[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let I = "bottom";
      switch (u) {
        case "bestFit": {
          var O;
          const P = (O = N.map((D) => [D, D.overflows.filter((W) => W > 0).reduce((W, F) => W + F, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : O[0].placement;
          P && (I = P);
          break;
        }
        case "initialPlacement":
          I = o;
      }
      if (s !== I)
        return { reset: { placement: I } };
    }
    return {};
  } };
}, nf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = sn(a), u = us(a), f = Gi(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  return at(e).getComputedStyle(e);
}
function he(e) {
  return Fc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Cs;
function zc() {
  if (Cs)
    return Cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Cs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Cs) : navigator.userAgent;
}
function Kt(e) {
  return e instanceof at(e).HTMLElement;
}
function wt(e) {
  return e instanceof at(e).Element;
}
function Fc(e) {
  return e instanceof at(e).Node;
}
function Fa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof at(e).ShadowRoot || e instanceof ShadowRoot;
}
function ji(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function sf(e) {
  return ["table", "td", "th"].includes(he(e));
}
function Hr(e) {
  const t = /firefox/i.test(zc()), n = Et(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Uc() {
  return !/^((?!chrome|android).)*safari/i.test(zc());
}
function Vo(e) {
  return ["html", "body", "#document"].includes(he(e));
}
const Ua = Math.min, Fn = Math.max, di = Math.round;
function Vc(e) {
  const t = Et(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = di(n) !== i || di(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function qc(e) {
  return wt(e) ? e : e.contextElement;
}
const Gc = { x: 1, y: 1 };
function rn(e) {
  const t = qc(e);
  if (!Kt(t))
    return Gc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Vc(t);
  let o = (r ? di(n.width) : n.width) / s, a = (r ? di(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Ie(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qc(e);
  let l = Gc;
  t && (s ? wt(s) && (l = rn(s)) : l = rn(e));
  const h = a ? at(a) : window, c = !Uc() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = at(a), v = s && wt(s) ? at(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = rn(w), x = w.getBoundingClientRect(), k = getComputedStyle(w);
      x.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, x.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, p *= _.y, d += x.x, u += x.y, w = at(w).frameElement;
    }
  }
  return { width: f, height: p, top: u, right: d + f, bottom: u + p, left: d, x: d, y: u };
}
function le(e) {
  return ((Fc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ki(e) {
  return wt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function jc(e) {
  return Ie(le(e)).left + Ki(e).scrollLeft;
}
function rf(e, t, n) {
  const s = Kt(t), i = le(t), r = Ie(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((he(t) !== "body" || ji(i)) && (o = Ki(t)), Kt(t)) {
      const l = Ie(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = jc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Zn(e) {
  if (he(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Fa(e) ? e.host : null) || le(e);
  return Fa(t) ? t.host : t;
}
function Va(e) {
  return Kt(e) && Et(e).position !== "fixed" ? e.offsetParent : null;
}
function qa(e) {
  const t = at(e);
  let n = Va(e);
  for (; n && sf(n) && Et(n).position === "static"; )
    n = Va(n);
  return n && (he(n) === "html" || he(n) === "body" && Et(n).position === "static" && !Hr(n)) ? t : n || function(s) {
    let i = Zn(s);
    for (; Kt(i) && !Vo(i); ) {
      if (Hr(i))
        return i;
      i = Zn(i);
    }
    return null;
  }(e) || t;
}
function Kc(e) {
  const t = Zn(e);
  return Vo(t) ? e.ownerDocument.body : Kt(t) && ji(t) ? t : Kc(t);
}
function Un(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Kc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], ji(s) ? s : []) : t.concat(s, Un(s));
}
function Ga(e, t, n) {
  return t === "viewport" ? ci(function(s, i) {
    const r = at(s), o = le(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Uc();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : wt(t) ? function(s, i) {
    const r = Ie(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Kt(s) ? rn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : ci(function(s) {
    var i;
    const r = le(s), o = Ki(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Fn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Fn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + jc(s);
    const d = -o.scrollTop;
    return Et(a || r).direction === "rtl" && (c += Fn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(le(e)));
}
const of = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Un(h).filter((v) => wt(v) && he(v) !== "body"), f = null;
    const p = Et(h).position === "fixed";
    let y = p ? Zn(h) : h;
    for (; wt(y) && !Vo(y); ) {
      const v = Et(y), w = Hr(y);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== y), y = Zn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ga(t, c, i);
    return h.top = Fn(d.top, h.top), h.right = Ua(d.right, h.right), h.bottom = Ua(d.bottom, h.bottom), h.left = Fn(d.left, h.left), h;
  }, Ga(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Kt(n), r = le(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((he(n) !== "body" || ji(r)) && (o = Ki(n)), Kt(n))) {
    const h = Ie(n);
    a = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: wt, getDimensions: function(e) {
  return Vc(e);
}, getOffsetParent: qa, getDocumentElement: le, getScale: rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || qa, r = this.getDimensions;
  return { reference: rf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Et(e).direction === "rtl" };
function af(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...wt(e) ? Un(e) : e.contextElement ? Un(e.contextElement) : [], ...Un(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let f = !0;
    d = new ResizeObserver(() => {
      f || n(), f = !1;
    }), wt(e) && !a && d.observe(e), wt(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? Ie(e) : null;
  return a && function f() {
    const p = Ie(e);
    !u || p.x === u.x && p.y === u.y && p.width === u.width && p.height === u.height || n(), u = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const lf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: of, ...n }, r = { ...i.platform, _c: s };
  return qu(e, t, { ...i, platform: r });
};
var qo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (qo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, De = (e, t, n, s) => (qo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), St = (e, t, n) => (qo(e, t, "access private method"), n), Vn, qn, Pn, Ze, rt, Br, ui, Yi, Go, jo, Yc, zr, Xc, Ko, Jc, Yo, Zc, Xo, Qc, Fr, th, Jo, eh, Gn, Ur, nh;
const Qe = class extends dt {
  constructor() {
    super(...arguments), j(this, Yi), j(this, jo), j(this, zr), j(this, Ko), j(this, Yo), j(this, Xo), j(this, Fr), j(this, Jo), j(this, Ur), j(this, Vn, !1), j(this, qn, void 0), j(this, Pn, 0), j(this, Ze, void 0), j(this, rt, void 0), j(this, Br, void 0), j(this, ui, void 0), this.hideLater = () => {
      U(this, Gn).call(this), De(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Gn, () => {
      clearTimeout(U(this, Pn)), De(this, Pn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Ze)) == null ? void 0 : e.classList.contains(Qe.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Ze) || St(this, zr, Xc).call(this);
  }
  get trigger() {
    return U(this, Br) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Qe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Vn) && this.isHover && St(this, Ur, nh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Qe.CLASS_SHOW), St(this, Fr, th).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ui)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Ze)) == null || t.classList.remove(Qe.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Gn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e = {}) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e;
    if (t) {
      const n = this.getAll(), s = new Set(t);
      for (const i of n)
        s.has(i.element) || i.hide();
    }
  }
};
let ct = Qe;
Vn = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
Br = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakSet();
Go = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
jo = /* @__PURE__ */ new WeakSet();
Yc = function() {
  const e = St(this, Yi, Go).call(this);
  return De(this, rt, document.createElement("div")), U(this, rt).style.position = this.options.strategy, U(this, rt).style.width = `${e}px`, U(this, rt).style.height = `${e}px`, U(this, rt).style.transform = "rotate(45deg)", U(this, rt);
};
zr = /* @__PURE__ */ new WeakSet();
Xc = function() {
  var n;
  const e = Qe.TOOLTIP_CLASS;
  let t;
  if (this.isDynamic) {
    t = document.createElement("div");
    const s = this.options.className ? this.options.className.split(" ") : [];
    let i = [e, this.options.type || ""];
    i = i.concat(s), t.classList.add(...i), t[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const s = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (s != null && s.startsWith("#") && (t = document.querySelector(s)), !t) {
      const i = this.element.nextElementSibling;
      i != null && i.classList.contains(e) ? t = i : t = (n = this.element.parentNode) == null ? void 0 : n.querySelector(`.${e}`);
    }
  }
  if (this.options.arrow && (t == null || t.append(St(this, jo, Yc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), De(this, Ze, t), t;
};
Ko = /* @__PURE__ */ new WeakSet();
Jc = function() {
  var i;
  const e = St(this, Yi, Go).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [nf(e), ef()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, rt) && ((i = s.middleware) == null || i.push(Xu({ element: U(this, rt) }))), s;
};
Yo = /* @__PURE__ */ new WeakSet();
Zc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Xo = /* @__PURE__ */ new WeakSet();
Qc = function(e) {
  return e === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : e === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : e === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
};
Fr = /* @__PURE__ */ new WeakSet();
th = function() {
  const e = St(this, Ko, Jc).call(this), t = St(this, Jo, eh).call(this);
  De(this, ui, af(t, this.tooltip, () => {
    lf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = St(this, Yo, Zc).call(this, o);
      if (i.arrow && U(this, rt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, rt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...St(this, Xo, Qc).call(this, o)
        });
      }
    });
  }));
};
Jo = /* @__PURE__ */ new WeakSet();
eh = function() {
  return U(this, qn) || De(this, qn, {
    getBoundingClientRect: () => {
      const { element: e } = this;
      if (e instanceof MouseEvent) {
        const { clientX: t, clientY: n } = e;
        return {
          width: 0,
          height: 0,
          top: n,
          right: t,
          bottom: n,
          left: t
        };
      }
      return e instanceof HTMLElement ? e.getBoundingClientRect() : e;
    },
    contextElement: this.element
  }), U(this, qn);
};
Gn = /* @__PURE__ */ new WeakMap();
Ur = /* @__PURE__ */ new WeakSet();
nh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Gn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), De(this, Vn, !0);
};
ct.NAME = "tooltip";
ct.TOOLTIP_CLASS = "tooltip";
ct.CLASS_SHOW = "show";
ct.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
ct.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, ct.MENU_SELECTOR);
  if (n) {
    const i = ct.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ct.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ct.MENU_SELECTOR);
  if (!n)
    return;
  const s = ct.ensure(n);
  s.isHover && s.show();
});
function cf({
  type: e,
  component: t,
  className: n,
  children: s,
  style: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: d,
  trailingIcon: u,
  hint: f,
  checked: p,
  actions: y,
  show: v,
  level: w = 0,
  items: _,
  ...x
}) {
  const k = Array.isArray(y) ? { items: y } : y;
  return k && (k.btnProps || (k.btnProps = { size: "sm" }), k.className = M("tree-actions not-nested-toggle", k.className)), /* @__PURE__ */ g(
    "div",
    {
      className: M("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...x,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ g("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(nt, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        k ? /* @__PURE__ */ g(_t, { ...k }) : null,
        /* @__PURE__ */ g(nt, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Zo = class extends Di {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...n
    };
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: n } = this.props;
    return n && (t.className = M(t.className, "tree-hover")), t;
  }
};
Zo.ItemComponents = {
  item: cf
};
Zo.NAME = "tree";
class sh extends Z {
}
sh.NAME = "Tree";
sh.Component = Zo;
class ih extends dt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Rd(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, btnClass: i, tip: r, draggable: o } = this.options;
    this.$list = m('<ul class="file-list py-1"></ul>');
    const a = m(`<span class="upload-tip">${r}</span>`);
    if (!o) {
      this.$label = m(`<label class="btn ${i}" for="${t}">${n}</label>`);
      const h = s === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
      this.$element.append(this.$input, ...h);
      return;
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(a), this.bindDragEvent();
    const l = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...l);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (t) => {
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const n = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(n);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: n, accept: s } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    const { multiple: n, onSizeChange: s } = this.options;
    n || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const n = t.name.lastIndexOf(".");
    if (n === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const s = t.name.substring(0, n), i = t.name.substring(n);
    return this.renameDuplicatedFile(new File([t], `${s}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: n } = this.options;
    if (!n)
      return t;
    const s = n.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: n, limitCount: s, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (n) {
      const h = [];
      for (let c of t) {
        if (s && this.fileMap.size >= s)
          return o == null || o(h), alert(r);
        if (this.currentBytes + c.size > this.limitBytes)
          return o == null || o(h), alert(i);
        c = this.renameDuplicatedFile(c);
        const d = this.createFileItem(c);
        this.itemMap.set(c.name, d), this.$list.append(d), h.push(c);
      }
      o == null || o(h);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden"), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, n) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, n), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(n, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: n, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-rename");
      return new ct(r, { title: n }), r;
    }
    return m("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return new ct(r, { title: n }), r;
    }
    return m("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return m(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return m(`<span class="file-size text-gray">${Td(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, deleteBtn: s, showSize: i } = this.options, r = m('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), n && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = m(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = m('<div class="input-group input-rename-container hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
      if (c.key === "Enter") {
        const d = r.closest(".file-item"), u = d.find(".file-name");
        if (u.html() === o.val()) {
          r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), u.html(o.val());
      } else
        c.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = m("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      const c = r.closest(".file-item"), d = c.find(".file-name");
      if (d.html() === o.val()) {
        r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(o.val());
    }), l = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = m('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
ih.DEFAULT = {
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
class hf extends ih {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = m(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(m('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, totalCountText: i } = this.options;
    this.$list = m('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = m('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 }), this.$tip = m('<div class="absolute inset-0 col justify-center items-center"></div>').append(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`), n && this.$tip.append(m(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = m('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(i.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: n } = this.options;
    if (n === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const s = n.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
  }
  createFileItem(t) {
    const n = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, n);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && n.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && n.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), n;
  }
  setImageUrl(t, n) {
    const s = new FileReader();
    s.onload = () => {
      m('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const n = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = m(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return m('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(m(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(n);
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = m("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = s.closest(".file-item").find(".file-name");
        if (r.html() === s.val()) {
          s.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(n);
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
        return alert(n);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
}
hf.DEFAULT = {
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
var ls, Mi, Ti, Ri;
class df extends V {
  constructor() {
    super(...arguments);
    L(this, ls, tt());
    L(this, Mi, (n) => {
      n.stopPropagation(), et.show({
        event: n.target,
        placement: "bottom-end",
        menu: {
          onClickItem: ({ item: s }) => {
            var i;
            ((i = s.attrs) == null ? void 0 : i["data-type"]) === "refresh" && this.load();
          }
        },
        ...this.props.block.menu
      });
    });
    L(this, Ti, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, Ri, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return C(this, ls).current;
  }
  componentDidMount() {
    this.load(), m(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    m(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(st(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(bo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ g("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: f } = this.state;
    let { content: p } = this.state;
    return p === void 0 && m.isPlainObject(d) && d.html && (p = /* @__PURE__ */ g("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ g("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ g(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Ti),
        onDragEnd: C(this, Ri),
        "data-id": c,
        ref: C(this, ls),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Mi), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          p
        ]
      }
    ) });
  }
}
ls = new WeakMap(), Mi = new WeakMap(), Ti = new WeakMap(), Ri = new WeakMap();
var rh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ut = (e, t, n) => (rh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bt = (e, t, n) => (rh(e, t, "access private method"), n), Yt, Qo, oh, ta, ah, Vr, lh, ea, ch, fi, qr, Xi, Gr, na, hh, jr, Kr, Ji, sa;
const ia = class extends V {
  constructor() {
    super(...arguments), mt(this, Qo), mt(this, ta), mt(this, Vr), mt(this, ea), mt(this, fi), mt(this, Xi), mt(this, na), mt(this, Yt, /* @__PURE__ */ new Map()), this.state = {}, mt(this, jr, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), mt(this, Kr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = bt(this, Vr, lh).call(this), { cellHeight: n, grid: s } = this.props, i = Ut(this, Yt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ g(
        df,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Ut(this, jr),
          onDragEnd: Ut(this, Kr)
        },
        r.id
      );
    }) }) });
  }
};
let ra = ia;
Yt = /* @__PURE__ */ new WeakMap();
Qo = /* @__PURE__ */ new WeakSet();
oh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
ta = /* @__PURE__ */ new WeakSet();
ah = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...d
    } = i, [u, f] = bt(this, Qo, oh).call(this, o);
    return {
      id: `${r}`,
      width: u,
      height: f,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...d
    };
  });
};
Vr = /* @__PURE__ */ new WeakSet();
lh = function() {
  Ut(this, Yt).clear();
  let e = 0;
  const t = bt(this, ta, ah).call(this);
  return t.forEach((n) => {
    bt(this, ea, ch).call(this, n);
    const [, s, , i] = Ut(this, Yt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
ea = /* @__PURE__ */ new WeakSet();
ch = function(e) {
  const t = Ut(this, Yt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = bt(this, na, hh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    bt(this, Xi, Gr).call(this, n, [s, i, r, o]);
};
fi = /* @__PURE__ */ new WeakSet();
qr = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ut(this, Yt).entries())
    if (s !== n && bt(t = ia, Ji, sa).call(t, i, e))
      return !1;
  return !0;
};
Xi = /* @__PURE__ */ new WeakSet();
Gr = function(e, t) {
  var n;
  Ut(this, Yt).set(e, t);
  for (const [s, i] of Ut(this, Yt).entries())
    s !== e && bt(n = ia, Ji, sa).call(n, i, t) && (i[1] = t[1] + t[3], bt(this, Xi, Gr).call(this, s, i));
};
na = /* @__PURE__ */ new WeakSet();
hh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (bt(this, fi, qr).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (bt(this, fi, qr).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
jr = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakMap();
Ji = /* @__PURE__ */ new WeakSet();
sa = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
mt(ra, Ji);
ra.defaultProps = {
  responsive: !1,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
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
class dh extends Z {
}
dh.NAME = "Dashboard";
dh.Component = ra;
var re, oe;
class ja extends V {
  constructor(n) {
    super(n);
    L(this, re, void 0);
    L(this, oe, void 0);
    H(this, re, 0), H(this, oe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, re) && cancelAnimationFrame(C(this, re)), H(this, re, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), H(this, re, 0);
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, h = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
      this.scroll(h * l / a), s.preventDefault();
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
    const { scrollSize: n, clientSize: s } = this.props;
    return Math.max(0, n - s);
  }
  get barSize() {
    const { clientSize: n, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, oe, typeof n == "string" ? document : n.current), C(this, oe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, oe) && C(this, oe).removeEventListener("wheel", this._handleWheel);
  }
  scroll(n) {
    return n = Math.max(0, Math.min(Math.round(n), this.maxScrollPos)), n === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(n) : this.setState({
      scrollPos: n
    }, this._afterScroll.bind(this, n)), !0);
  }
  scrollOffset(n) {
    return this.scroll(this.scrollPos + n);
  }
  _afterScroll(n) {
    const { onScroll: s } = this.props;
    s && s(n, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: n,
      type: s,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ g(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ g(
          "div",
          {
            className: "scrollbar-bar",
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
re = new WeakMap(), oe = new WeakMap();
function uh({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: d, border: u } = e.setting, f = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], y = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, x = [], k = [], S = {}, T = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !J(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? x : k;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      k.push(b);
  });
  const A = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...S,
      children: [
        k.length > 0 && /* @__PURE__ */ g(A, { className: M(y), style: f, ...T, children: k }),
        x
      ]
    }
  );
}
function fr({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = uh, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: M("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function fh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = uh,
  onRenderCell: h,
  style: c,
  ...d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ g(
    fr,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let f = null;
  r.list.length && (f = /* @__PURE__ */ g(
    fr,
    {
      className: "dtable-flexable",
      cols: r.list,
      left: i.width - a,
      width: Math.max(r.width, r.totalWidth),
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  o.list.length && (p = /* @__PURE__ */ g(
    fr,
    {
      className: "dtable-fixed-right",
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  const y = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ g(
    "div",
    {
      className: M("dtable-row", t),
      style: y,
      "data-id": e.id,
      ...d,
      children: [
        u,
        f,
        p
      ]
    }
  );
}
function uf({ height: e, onRenderRow: t, ...n }) {
  const s = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: s }, q);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(fh, { ...s }) });
}
function ff({
  className: e,
  style: t,
  top: n,
  rows: s,
  height: i,
  rowHeight: r,
  scrollTop: o,
  onRenderRow: a,
  ...l
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ g("div", { className: M("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ g(fh, { ...c }, h.id);
  }) });
}
const pi = /* @__PURE__ */ new Map(), mi = [];
function ph(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && pi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  pi.set(n, e), t != null && t.buildIn && !mi.includes(n) && mi.push(n);
}
function pe(e, t) {
  ph(e, t);
  const n = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = e, n;
}
function mh(e) {
  return pi.delete(e);
}
function pf(e) {
  if (typeof e == "string") {
    const t = pi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function gh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = pf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && gh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function mf(e = [], t = !0) {
  return t && mi.length && e.unshift(...mi), e != null && e.length ? gh([], e, /* @__PURE__ */ new Set()) : [];
}
function yh() {
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
function gf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ka(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function pr(e, t = !1) {
  if (!e.list.length)
    return;
  if (e.widthSetting && e.width !== e.widthSetting) {
    e.width = e.widthSetting;
    const s = e.width - e.totalWidth;
    if (t || s > 0) {
      const i = e.flexList.length ? e.flexList : e.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math.min(s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let n = 0;
  e.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function yf(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Ka(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, d = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, u = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = [], p = {};
  let y = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: x, onAddCol: k } = _;
    x && Object.entries(x).forEach(([S, T]) => {
      w[S] || (w[S] = []), w[S].push(T);
    }), k && v.push(k);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: x = "", name: k } = _, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: x
    }, T = {
      name: k,
      type: x,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[x];
    N && N.forEach((D) => {
      const W = typeof D == "function" ? D.call(e, S) : D;
      W && Object.assign(S, W, _);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = S, I = Ka(S.width || i, i);
    T.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, T.width = gf(I < 1 ? Math.round(I * s) : I, b, R), v.forEach((D) => D.call(e, T)), f.push(T), p[T.name] = T;
    const P = A ? A === "left" ? d : u : c;
    P.list.push(T), P.totalWidth += T.width, P.width = P.totalWidth, T.flex && P.flexList.push(T), typeof S.order == "number" && (y = !0);
  }), y) {
    const _ = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return pr(d, !0), pr(u, !0), c.widthSetting = s - d.width - u.width, pr(c), {
    list: f,
    map: p,
    left: d,
    center: c,
    right: u
  };
}
var oa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, K = (e, t, n, s) => (oa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wt = (e, t, n) => (oa(e, t, "access private method"), n), Ke, Wn, Ae, Ht, Se, X, It, Pt, In, qs, gi, ee, Dn, On, Yr, wh, Xr, vh, Jr, _h, Zr, bh, Gs, Qr, aa, la, Zi, yi, to, eo, ca, xh, ha, $h, no, Ch;
let da = class extends V {
  constructor(t) {
    super(t), B(this, Yr), B(this, Xr), B(this, Jr), B(this, Zr), B(this, Gs), B(this, ca), B(this, ha), B(this, no), this.ref = tt(), B(this, Ke, 0), B(this, Wn, void 0), B(this, Ae, !1), B(this, Ht, void 0), B(this, Se, void 0), B(this, X, []), B(this, It, void 0), B(this, Pt, /* @__PURE__ */ new Map()), B(this, In, {}), B(this, qs, void 0), B(this, gi, []), this.updateLayout = () => {
      E(this, Ke) && cancelAnimationFrame(E(this, Ke)), K(this, Ke, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), K(this, Ke, 0);
      }));
    }, B(this, ee, (n, s) => {
      s = s || n.type;
      const i = E(this, Pt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, Dn, (n) => {
      E(this, ee).call(this, n, `window_${n.type}`);
    }), B(this, On, (n) => {
      E(this, ee).call(this, n, `document_${n.type}`);
    }), B(this, aa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return E(this, X).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), B(this, la, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), B(this, Zi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, yi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, to, (n) => {
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, X).forEach((u) => {
          var f;
          (f = u.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
            return;
          for (const p of E(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
          return;
        for (const p of E(this, X))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
            return;
      }
    }), B(this, eo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), K(this, Wn, t.id ?? `dtable-${dc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, K(this, Se, Object.freeze(mf(t.plugins))), E(this, Se).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, In), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, It)) == null ? void 0 : t.options) || E(this, Ht) || yh();
  }
  get plugins() {
    return E(this, X);
  }
  get layout() {
    return E(this, It);
  }
  get id() {
    return E(this, Wn);
  }
  get data() {
    return E(this, In);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    K(this, Ht, void 0);
  }
  componentDidMount() {
    if (E(this, Ae) ? this.forceUpdate() : Wt(this, Gs, Qr).call(this), E(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, to)), this.on("keydown", E(this, eo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), K(this, qs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Ae) ? Wt(this, Gs, Qr).call(this) : E(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, qs)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, Pt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, Dn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, On)) : t.removeEventListener(s, E(this, ee));
    E(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, Se).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), K(this, In, {}), E(this, Pt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, Pt).get(t);
    i ? i.push(n) : (E(this, Pt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, Dn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, On)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, ee)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, Pt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, Pt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, Dn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, On)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, ee)));
  }
  emitCustomEvent(t, n) {
    E(this, ee).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (c === "up" || c === "down")
      u = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      d = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      u = 0;
    else if (c === "bottom")
      u = r - o;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = l - h;
    else {
      const { offsetLeft: p, offsetTop: y } = t;
      typeof p == "number" && (d = s + p), typeof y == "number" && (d = i + y);
    }
    const f = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (f.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: n } = this.layout;
    return typeof t == "number" ? n.list[t] : n.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? n[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, n) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!E(this, Ht))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      K(this, It, void 0);
    else if (s === "options") {
      if (K(this, Ht, void 0), !E(this, It))
        return;
      K(this, It, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const s = n.closest(".dtable-cell");
    if (!s)
      return;
    const i = s.closest(".dtable-row");
    if (!i)
      return;
    const r = s == null ? void 0 : s.getAttribute("data-col"), o = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: s,
        rowElement: i,
        colName: r,
        rowID: o,
        target: n
      };
  }
  i18n(t, n, s) {
    return Gt(E(this, gi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Wt(this, no, Ch).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], d = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), d.push(
      Wt(this, Yr, wh).call(this, t),
      Wt(this, Xr, vh).call(this, t),
      Wt(this, Jr, _h).call(this, t),
      Wt(this, Zr, bh).call(this, t)
    ), E(this, X).forEach((u) => {
      var p;
      const f = (p = u.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: E(this, Wn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Ke = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakSet();
wh = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      uf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, Zi),
        onRenderRow: E(this, la)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    xo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [e],
      generatorThis: this
    },
    "header"
  );
};
Xr = /* @__PURE__ */ new WeakSet();
vh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    ff,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, Zi),
      onRenderRow: E(this, aa)
    },
    "rows"
  );
};
Jr = /* @__PURE__ */ new WeakSet();
_h = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    xo,
    {
      className: "dtable-footer",
      style: { height: e.footerHeight, top: e.rowsHeight + e.headerHeight },
      renders: n,
      generateArgs: [e],
      generatorThis: this,
      generators: e.footerGenerators
    },
    "footer"
  );
};
Zr = /* @__PURE__ */ new WeakSet();
bh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, yi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, yi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Gs = /* @__PURE__ */ new WeakSet();
Qr = function() {
  var e;
  K(this, Ae, !1), (e = this.options.afterRender) == null || e.call(this), E(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
aa = /* @__PURE__ */ new WeakMap();
la = /* @__PURE__ */ new WeakMap();
Zi = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
to = /* @__PURE__ */ new WeakMap();
eo = /* @__PURE__ */ new WeakMap();
ca = /* @__PURE__ */ new WeakSet();
xh = function() {
  if (E(this, Ht))
    return !1;
  const t = { ...yh(), ...E(this, Se).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return K(this, X, E(this, Se).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), K(this, Ht, t), K(this, gi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
ha = /* @__PURE__ */ new WeakSet();
$h = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, Ht);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var I;
    const R = (I = b.beforeLayout) == null ? void 0 : I.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      K(this, Ae, !0);
      return;
    }
  }
  const r = yf(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, I) => {
    var D, W;
    const P = { data: I ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (I || (P.lazy = !0), h.push(P), ((D = t.onAddRow) == null ? void 0 : D.call(this, P, R)) !== !1) {
      for (const F of e)
        if (((W = F.onAddRow) == null ? void 0 : W.call(this, P, R)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let b = 0; b < o; b++)
      c(`${b}`, b);
  else
    Array.isArray(o) && o.forEach((b, R) => {
      typeof b == "object" ? c(`${b[a] ?? ""}`, R, b) : c(`${b ?? ""}`, R);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, d);
    b && (d = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, d);
    R && (d = R);
  }
  d.forEach((b, R) => {
    u[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, y = f ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const x = d.length * l, k = y + v + x;
  if (typeof w == "function" && (w = w.call(this, k)), w === "auto")
    _ = k;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, k));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, K(this, Ae, !0);
      return;
    }
  } else
    _ = w;
  const S = _ - y - v, T = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: S,
    rowsHeightTotal: x,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, T);
  N && Object.assign(T, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, T);
      R && Object.assign(T, R);
    }
  }), K(this, It, T);
};
no = /* @__PURE__ */ new WeakSet();
Ch = function() {
  (Wt(this, ca, xh).call(this) || !E(this, It)) && Wt(this, ha, $h).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((p) => {
    p.left = s, s += p.realWidth, p.visible = p.left + p.realWidth >= n && p.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < d; p++) {
    const y = o[p];
    y.lazy && f && (y.data = f([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
da.addPlugin = ph;
da.removePlugin = mh;
function Ya(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const wf = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const s = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Ya(this, s);
    },
    mouseleave() {
      Ya(this, !1);
    }
  }
}, vf = pe(wf, { buildIn: !0 });
function _f(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !kh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    o(h, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((h) => {
    o(h, t ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, i, s);
    h && Object.keys(h).forEach((c) => {
      h[c] ? s[c] = !0 : delete s[c];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var c;
      (c = this.options.onCheckChange) == null || c.call(this, i);
    });
  }
  return i;
}
function bf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function kh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function xf() {
  return Object.keys(this.state.checkedRows);
}
function $f(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Xa(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const Cf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Xa
  },
  when: (e) => e.checkable !== void 0,
  options(e) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? e.checkable = t : e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: _f,
    isRowChecked: bf,
    isAllRowChecked: kh,
    getChecks: xf,
    toggleCheckable: $f
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xa(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return e;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const h = this.isRowChecked(s), c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, s, r === "disabled");
      e.unshift(c), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var o;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: M(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, kf = pe(Cf);
var Sh = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Sh || {});
function wi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = wi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? wi.call(this, t.parent).level + 1 : 0, t;
}
function Sf(e) {
  return e !== void 0 ? wi.call(this, e) : this.data.nestedMap;
}
function Ef(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Eh.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      t && (o != null && o.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Eh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Mh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Mh(e, t, o.children, s + 1)));
  }
  return t;
}
function Th(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Th(e, r, n, s);
  }), i;
}
function Rh(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && Rh(e, r.parent, n, s, i);
}
const Mf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, s = n.get(e.id), i = n.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = Th(this, i, r, s);
        o != null && o.parent && Rh(this, o.parent, r, s, n);
      }), s;
    }
  },
  options(e) {
    return e.nested === "auto" && (e.nested = !!e.cols.some((t) => t.nestedToggle)), e;
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Sf,
    toggleRow: Ef,
    isAllCollapsed: Eh,
    getNestedRowInfo: wi
  },
  beforeLayout() {
    var e;
    (e = this.data.nestedMap) == null || e.clear();
  },
  onAddRow(e) {
    var i, r;
    const { nestedMap: t } = this.data, n = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (r = e.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(e.id, s), n) {
      let o = t.get(n);
      o || (o = {
        state: "",
        level: 0
      }, t.set(n, o)), o.children || (o.children = []), o.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Mh(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ g("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ g("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: M(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = M(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const n = e.target;
    if (!(!n || !this.getNestedRowInfo(t).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, Tf = pe(Mf);
function Nh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: st(i, t.row.data), ...s, ...r, ...a, children: n });
}
function ua(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : st(e, n);
}
function Ah(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), Ir(n, e, s ?? n));
}
function Lh(e, t) {
  const { link: n } = t.col.setting, s = Nh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Ph(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ua(n, t, e[0])), e;
}
function Wh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Ih(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Ah(s, t, e[0], i), e;
}
function so(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : ua(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Rf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return so(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ g("svg", { width: n, height: n, children: [
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ g("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
        ] }), e;
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
  onRenderCell(e, t) {
    const { formatDate: n, html: s, hint: i } = t.col.setting;
    if (n && (e = Ih(e, t, n)), e = Wh(e, t), e = Ph(e, t), s ? e = so(e, t) : e = Lh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = st(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Nf = pe(Rf, { buildIn: !0 });
function mr(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: M(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ g(uc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ g("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ g("span", { children: c })
    ] }));
  return e;
}
const Af = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: mr
    },
    avatarBtn: {
      onRenderCell: mr
    },
    avatarName: {
      onRenderCell: mr
    }
  }
}, Lf = pe(Af, { buildIn: !0 }), Pf = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ g("a", { href: st(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Wf = pe(Pf, { buildIn: !0 }), gr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, If = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    gr(t.left.list), gr(t.center.list), gr(t.right.list);
  }
}, Df = pe(If), Of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Sh,
  avatar: Lf,
  checkable: kf,
  colHover: vf,
  group: Df,
  nested: Tf,
  renderDatetime: Ah,
  renderDatetimeCell: Ih,
  renderFormat: ua,
  renderFormatCell: Ph,
  renderHtmlCell: so,
  renderLink: Nh,
  renderLinkCell: Lh,
  renderMapCell: Wh,
  rich: Nf,
  sortType: Wf
}, Symbol.toStringTag, { value: "Module" }));
class fs extends Z {
}
fs.NAME = "DTable";
fs.Component = da;
fs.definePlugin = pe;
fs.removePlugin = mh;
fs.plugins = Of;
var Dh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ja = (e, t, n) => (Dh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Za = (e, t, n, s) => (Dh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ye;
const Bf = "nav", js = '[data-toggle="tab"]', zf = "active";
class Oh extends dt {
  constructor() {
    super(...arguments), Hf(this, Ye, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(js);
    let i = t ? m(t).closest(js) : s.filter(`.${zf}`);
    if (!i.length && (i = n.find(js).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Ja(this, Ye) && clearTimeout(Ja(this, Ye)), Za(this, Ye, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Za(this, Ye, 0);
    }, 10)));
  }
}
Ye = /* @__PURE__ */ new WeakMap();
Oh.NAME = "Tabs";
m(document).on("click.tabs.zui", js, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Bf}`);
  n.length && Oh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  zl as ActionMenu,
  Ul as ActionMenuNested,
  fc as Avatar,
  pc as BtnGroup,
  wc as ColorPicker,
  dt as Component,
  Z as ComponentFromReact,
  et as ContextMenu,
  Ii as CustomContent,
  xo as CustomRender,
  fs as DTable,
  dh as Dashboard,
  Ft as Dropdown,
  hc as EventBus,
  Wl as HElement,
  bo as HtmlContent,
  nt as Icon,
  Vl as Menu,
  cc as Messager,
  _c as Modal,
  Jt as ModalBase,
  Cc as ModalTrigger,
  Sc as Nav,
  Mc as Pager,
  Tc as Pick,
  Wc as Picker,
  Ic as Popovers,
  V as ReactComponent,
  Oc as SearchBox,
  Ec as TIME_DAY,
  Oh as Tabs,
  Hc as Toolbar,
  ct as Tooltip,
  sh as Tree,
  ih as Upload,
  hf as UploadImgs,
  m as cash,
  M as classes,
  ir as componentsMap,
  Rd as convertBytes,
  Wd as create,
  ht as createDate,
  qd as createPortal,
  tt as createRef,
  Md as deepGet,
  Ed as deepGetPath,
  Js as delay,
  Uf as dom,
  Td as formatBytes,
  Ir as formatDate,
  rp as formatDateSpan,
  st as formatString,
  vl as getClassList,
  q as h,
  Vf as hh,
  Bd as htm,
  Gt as i18n,
  Vi as isSameDay,
  Iu as isSameMonth,
  ep as isSameWeek,
  Wr as isSameYear,
  np as isToday,
  ip as isTomorrow,
  J as isValidElement,
  sp as isYesterday,
  Wa as nativeEvents,
  Yn as render,
  Il as renderCustomContent,
  Fd as renderCustomResult,
  bu as store,
  _l as storeData,
  Pd as takeData
};
//# sourceMappingURL=zui.js.map
