var Zi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (Zi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Zi(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var ye = (e, t, n) => (Zi(e, t, "access private method"), n);
const Gt = document, Ks = window, tl = Gt.documentElement, Be = Gt.createElement.bind(Gt), el = Be("div"), Qi = Be("table"), Bh = Be("tbody"), fa = Be("tr"), { isArray: Ni, prototype: nl } = Array, { concat: zh, filter: no, indexOf: sl, map: il, push: Fh, slice: rl, some: so, splice: Uh } = nl, Vh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, qh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gh = /<.+>/, jh = /^\w+$/;
function io(e, t) {
  const n = Yh(t);
  return !e || !n && !Ie(t) && !G(t) ? [] : !n && qh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && jh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Ai {
  constructor(t, n) {
    if (!t)
      return;
    if (mr(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Gt;
      if (s = Vh.test(t) && Ie(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Gh.test(t) ? ll(t) : mr(i) ? i.find(t) : Q(i) ? g(i).find(t) : io(t, i), !s)
        return;
    } else if (ze(t))
      return this.ready(t);
    (s.nodeType || s === Ks) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Ai(t, n);
  }
}
const $ = Ai.prototype, g = $.init;
g.fn = g.prototype = $;
$.length = 0;
$.splice = Uh;
typeof Symbol == "function" && ($[Symbol.iterator] = nl[Symbol.iterator]);
function mr(e) {
  return e instanceof Ai;
}
function mn(e) {
  return !!e && e === e.window;
}
function Ie(e) {
  return !!e && e.nodeType === 9;
}
function Yh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Kh(e) {
  return !!e && e.nodeType === 3;
}
function Xh(e) {
  return typeof e == "boolean";
}
function ze(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function rt(e) {
  return e === void 0;
}
function jn(e) {
  return e === null;
}
function ol(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ro(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
g.isWindow = mn;
g.isFunction = ze;
g.isArray = Ni;
g.isNumeric = ol;
g.isPlainObject = ro;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (ro(e)) {
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
g.each = K;
$.each = function(e) {
  return K(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Xs(...e) {
  const t = Xh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Xs(t, g, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Ni(r[o]) || ro(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Xs(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
g.extend = Xs;
$.extend = function(e) {
  return Xs($, e);
};
const Jh = /\S+/g;
function Li(e) {
  return Q(e) ? e.match(Jh) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Li(e), s = !rt(t);
  return this.each((i, r) => {
    G(r) && K(n, (o, a) => {
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
    G(s) && K(t, (i, r) => {
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
      return rt(t) ? this : jn(t) ? this.removeAttr(e) : this.each((n, s) => {
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
  return !!e && so.call(this, (t) => G(t) && t.classList.contains(e));
};
$.get = function(e) {
  return rt(e) ? rl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
$.eq = function(e) {
  return g(this.get(e));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function Qh(e) {
  return rt(e) ? this.get().map((t) => G(t) || Kh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
$.text = Qh;
function jt(e, t, n) {
  if (!G(e))
    return;
  const s = Ks.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function kt(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function pa(e, t) {
  return kt(e, `border${t ? "Left" : "Top"}Width`) + kt(e, `padding${t ? "Left" : "Top"}`) + kt(e, `padding${t ? "Right" : "Bottom"}`) + kt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const tr = {};
function td(e) {
  if (tr[e])
    return tr[e];
  const t = Be(e);
  Gt.body.insertBefore(t, null);
  const n = jt(t, "display");
  return Gt.body.removeChild(t), tr[e] = n !== "none" ? n : "block";
}
function ma(e) {
  return jt(e, "display") === "none";
}
function al(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Pi(e) {
  return Q(e) ? (t, n) => al(n, e) : ze(e) ? e : mr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = Pi(e);
  return g(no.call(this, (n, s) => t.call(n, s, n)));
};
function fe(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return fe(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ed = /^\s*<(\w+)[^>]*>/, nd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ga = {
  "*": el,
  tr: Bh,
  td: fa,
  th: fa,
  thead: Qi,
  tbody: Qi,
  tfoot: Qi
};
function ll(e) {
  if (!Q(e))
    return [];
  if (nd.test(e))
    return [Be(RegExp.$1)];
  const t = ed.test(e) && RegExp.$1, n = ga[t] || ga["*"];
  return n.innerHTML = e, g(n.childNodes).detach().get();
}
g.parseHTML = ll;
$.has = function(e) {
  const t = Q(e) ? (n, s) => io(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = Pi(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Zt(e, t, n, s) {
  const i = [], r = ze(t), o = s && Pi(s);
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
  return e.multiple && e.options ? Zt(no.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function sd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || yl.test(n.type)) {
      const i = Ni(e) ? il.call(e, String) : jn(e) ? [] : [String(e)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = rt(e) || jn(e) ? "" : e;
  }) : this[0] && cl(this[0]);
}
$.val = sd;
$.is = function(e) {
  const t = Pi(e);
  return so.call(this, (n, s) => t.call(n, s, n));
};
g.guid = 1;
function Mt(e) {
  return e.length > 1 ? no.call(e, (t, n, s) => sl.call(s, t) === n) : e;
}
g.unique = Mt;
$.add = function(e, t) {
  return g(Mt(this.get().concat(g(e, t).get())));
};
$.children = function(e) {
  return fe(g(Mt(Zt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return fe(g(Mt(Zt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? g(e)[0] : this[0], n = e ? this : g(t).parent().children();
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
  return fe(g(Mt(Zt(this, (t) => g(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return g(Mt(Zt(this, (t) => io(e, t))));
};
const id = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rd = /^$|^module$|\/(java|ecma)script/i, od = ["type", "src", "nonce", "noModule"];
function ad(e, t) {
  const n = g(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (rd.test(i.type) && tl.contains(i)) {
      const r = Be("script");
      r.text = i.textContent.replace(id, ""), K(od, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ld(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && ad(t, e.ownerDocument);
}
function pe(e, t, n, s, i, r, o, a) {
  return K(e, (l, h) => {
    K(g(h), (c, d) => {
      K(g(t), (u, f) => {
        const p = n ? d : f, y = n ? f : d, v = n ? c : u;
        ld(p, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return pe(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return pe(arguments, this, !1, !1, !0);
};
function cd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? g(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = cd;
$.appendTo = function(e) {
  return pe(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = g(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return pe(arguments, this, !1, !0);
};
$.wrapAll = function(e) {
  let t = g(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
$.wrap = function(e) {
  return this.each((t, n) => {
    const s = g(e)[0];
    g(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
$.insertAfter = function(e) {
  return pe(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(e) {
  return pe(arguments, this, !0, !0);
};
$.prepend = function() {
  return pe(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(e) {
  return pe(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return g(Mt(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return fe(g(Mt(Zt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return fe(g(Mt(Zt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return fe(g(Mt(Zt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return g(zh.apply([], il.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || tl;
  });
};
$.slice = function(e, t) {
  return g(rl.call(this, e, t));
};
const hd = /-([a-z])/g;
function oo(e) {
  return e.replace(hd, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, g);
  return Gt.readyState !== "loading" ? t() : Gt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = g(t);
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
  const t = jt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && jt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const r = g(i).offset();
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
function ao(e) {
  return dd.test(e);
}
const er = {}, { style: ud } = el, fd = ["webkit", "moz", "ms"];
function pd(e, t = ao(e)) {
  if (t)
    return e;
  if (!er[e]) {
    const n = oo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${fd.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in ud)
        return er[e] = o, !1;
    });
  }
  return er[e];
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
function dl(e, t, n = ao(e)) {
  return !n && !md[e] && ol(t) ? `${t}px` : t;
}
function gd(e, t) {
  if (Q(e)) {
    const n = ao(e);
    return e = pd(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = dl(e, t, n), this.each((s, i) => {
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
function ya(e, t) {
  const n = e.dataset[t] || e.dataset[oo(t)];
  return yd.test(n) ? n : ul(JSON.parse, n);
}
function wd(e, t, n) {
  n = ul(JSON.stringify, n), e.dataset[oo(t)] = n;
}
function vd(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ya(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && ya(this[0], e) : rt(t) ? this : this.each((n, s) => {
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
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return mn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ie(this[0]) ? fl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? kt(this[0], `margin${n ? "Top" : "Left"}`) + kt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return mn(this[0]) ? this[0].document.documentElement[`client${t}`] : Ie(this[0]) ? fl(this[0], t) : this[0].getBoundingClientRect()[n] - pa(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = jt(o, "boxSizing");
      o.style[n] = dl(n, i + (a === "border-box" ? pa(o, !e) : 0));
    });
  };
});
const wa = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = ma(n);
    (rt(e) ? s : e) ? (n.style.display = n[wa] || "", ma(n) && (n.style.display = td(n.tagName))) : s || (n[wa] = jt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const va = "___ce", lo = ".", co = { focus: "focusin", blur: "focusout" }, pl = { mouseenter: "mouseover", mouseleave: "mouseout" }, _d = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ho(e) {
  return pl[e] || co[e] || e;
}
function uo(e) {
  const t = e.split(lo);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = uo(e), r = ho(s);
    if (!r)
      return this;
    const o = _d.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Gt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(lo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in co;
  return this.each((s, i) => {
    n && ze(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function ml(e) {
  return e[va] = e[va] || {};
}
function bd(e, t, n, s, i) {
  const r = ml(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function gl(e, t) {
  return !t || !so.call(t, (n) => e.indexOf(n) < 0);
}
function Js(e, t, n, s, i) {
  const r = ml(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !gl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Js(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (rt(e))
    this.each((s, i) => {
      !G(i) && !Ie(i) && !mn(i) || Js(i);
    });
  else if (Q(e))
    ze(t) && (n = t, t = ""), K(Li(e), (s, i) => {
      const [r, o] = uo(i), a = ho(r);
      this.each((l, h) => {
        !G(h) && !Ie(h) && !mn(h) || Js(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
$.remove = function(e) {
  return fe(this, e).detach().off(), this;
};
$.replaceWith = function(e) {
  return this.before(e).remove();
};
$.replaceAll = function(e) {
  return g(e).replaceWith(this), this;
};
function xd(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (rt(t) || jn(t) ? t = "" : rt(n) ? (n = t, t = "") : (s = n, n = t, t = "")), ze(s) || (s = n, n = void 0), s ? (K(Li(e), (r, o) => {
    const [a, l] = uo(o), h = ho(a), c = a in pl, d = a in co;
    h && this.each((u, f) => {
      if (!G(f) && !Ie(f) && !mn(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !gl(l, y.namespace.split(lo)) || !t && (d && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
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
        i && Js(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || g.guid++, bd(f, h, l, t, p);
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
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Sd.test(i.type) || yl.test(i.type) && !i.checked)
        return;
      const r = cl(i);
      if (!rt(r)) {
        const o = Ni(r) ? r : [r];
        K(o, (a, l) => {
          e += kd(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = g;
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
var fo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(fo || {});
function Td(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / fo[n]).toFixed(t) + n);
}
const Rd = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * fo[s];
};
let po = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function Nd() {
  return po;
}
function Ad(e) {
  po = e.toLowerCase();
}
function wl(e, t) {
  ie || (ie = {}), typeof e == "string" && (e = { [e]: t ?? {} }), g.extend(!0, ie, e);
}
function Yt(e, t, n, s, i, r) {
  Array.isArray(e) ? ie && e.unshift(ie) : e = ie ? [ie, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || po;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ie ? `${r}.${t}` : t;
    if (a = Md(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? st(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Ld(e, t, n, s) {
  return Yt(void 0, e, t, n, s);
}
Yt.addLang = wl;
Yt.getLang = Ld;
Yt.getCode = Nd;
Yt.setCode = Ad;
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
g.classes = M;
g.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = g(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const xn = /* @__PURE__ */ new WeakMap();
function _l(e, t, n) {
  const s = xn.has(e), i = s ? xn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, g(e).dataset(), i), xn.set(e, i)) : xn.delete(e);
}
function Pd(e, t) {
  let n = xn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, g(e).dataset(), n)), t === void 0 ? n : n[t];
}
g.fn.dataset = g.fn.data;
g.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Pd(this[0], t) : this.each((s, i) => _l(i, t, n));
};
g.fn.removeData = function(e = null) {
  return this.each((t, n) => _l(n, e));
};
g.fn._attr = g.fn.attr;
g.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
g.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const Zs = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), nr = /* @__PURE__ */ new Map();
function Id(e, t, n) {
  const { zui: s } = window;
  nr.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && nr.set(r.toLowerCase(), s[r]);
  });
  const i = nr.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
g(() => {
  g("[data-zui]").each(function() {
    const t = g(this).dataset(), n = t.zui;
    delete t.zui, Id(n, this, t);
  });
});
function mo(e, t) {
  const n = g(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, d = a || h, u = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= u && i + o <= d;
  const f = i <= d && i + o >= 0, p = s <= u && s + r >= 0;
  return f && p;
}
g.fn.isVisible = function(e) {
  return this.each((t, n) => {
    mo(n, e);
  });
};
function go(e, t, n = !1) {
  const s = g(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${g.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    go(s, r.innerHTML), r.remove();
  });
}
g.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
g.fn.runJS = function(e) {
  return this.each((t, n) => {
    go(n, e);
  });
};
function bl(e, t) {
  const n = g(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && mo(o, { fullyCheck: !0 }) || o.scrollIntoView(i);
  }), n;
}
g.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    bl(n, e);
  });
};
const Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: mo,
  runJS: go,
  scrollIntoView: bl
}, Symbol.toStringTag, { value: "Module" }));
var Ii, z, xl, Z, Se, _a, $l, gr, Qs = {}, Cl = [], Wd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, yo = Array.isArray;
function ce(e, t) {
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
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ii.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Ss(e, o, s, i, null);
}
function Ss(e, t, n, s, i) {
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
function Yn(e, t) {
  if (t == null)
    return e.__ ? Yn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Yn(e) : null;
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
function ba(e) {
  (!e.__d && (e.__d = !0) && Se.push(e) && !ti.__r++ || _a !== z.debounceRendering) && ((_a = z.debounceRendering) || $l)(ti);
}
function ti() {
  var e, t, n, s, i, r, o, a;
  for (Se.sort(gr); e = Se.shift(); )
    e.__d && (t = Se.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ce({}, r)).__v = r.__v + 1, wo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Yn(r), r.__h), Nl(s, r), r.__e != o && Sl(r)), Se.length > t && Se.sort(gr));
  ti.__r = 0;
}
function El(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, p, y, v, w = s && s.__k || Cl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Ss(null, f, null, null, f) : yo(f) ? Ss(yn, { children: f }, null, null, null) : f.__b > 0 ? Ss(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      wo(e, f, u = u || Qs, i, r, o, a, l, h), p = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = Ml(f, l, e) : l = Tl(e, f, u, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Yn(u));
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
    r === "children" || r === "key" || r in t || ei(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ei(e, r, t[r], n[r], s);
}
function xa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Wd.test(t) ? n : n + "px";
}
function ei(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || xa(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || xa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? Ca : $a, r) : e.removeEventListener(t, r ? Ca : $a, r);
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
function $a(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Ca(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function wo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, f, p, y, v, w, _, x, k, S, T, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = Hd), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ce({}, c.__s)), ce(c.__s, A.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
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
        c.state = c.__s, c.getChildContext != null && (s = ce(ce({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(u, f)), El(e, yo(N = h != null && h.type === yn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
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
    if (r = r && Ii.call(e.childNodes), h = (d = n.props || Qs).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Dd(e, u, d, i, a), c)
      t.__k = [];
    else if (El(e, yo(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Yn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && kl(r[p]);
    a || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && ei(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ei(e, "checked", p, d.checked, !1));
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
function Kn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], wo(t, e = (!s && n || t).__k = q(yn, null, [e]), i || Qs, Qs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Ii.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), Nl(r, e);
}
Ii = Cl.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, xl = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof e == "function" && (e = e(ce({}, n), this.props)), e && ce(n, e), e != null && this.__v && (t && this._sb.push(t), ba(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ba(this));
}, V.prototype.render = yn, Se = [], $l = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, gr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ti.__r = 0;
var Pl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, Pl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, ka = /* @__PURE__ */ new Map();
function Bd(e) {
  var t = ka.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ka.set(this, t)), (t = Pl(this, t.get(e) || (t.set(e, t = function(n) {
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
const qf = Bd.bind(q);
function Il(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: M(n), style: s, ...a, ...r }, i);
}
var zd = 0;
function m(e, t, n, s, i, r) {
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
class vo extends V {
  constructor() {
    super(...arguments);
    L(this, Qn, tt());
  }
  componentDidMount() {
    this.props.executeScript && g(C(this, Qn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ m(Il, { forwardRef: C(this, Qn), dangerouslySetInnerHTML: { __html: i }, ...r });
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
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ m("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(d),
    style: u,
    ...c
  }, f];
}
function _o({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Fd(t);
  return q(e, n, ...s);
}
function Wl(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => Wl(s, t, n)) : Z(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ m(vo, { ...e }) : /* @__PURE__ */ m(Il, { ...e }) : e;
}
function Wi(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = Wl(t, n, s);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ m(yn, { children: i });
}
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    return i.push(r), Object.assign(s, o), /* @__PURE__ */ m(nt, { className: M(i), ...s });
  }
  return /* @__PURE__ */ m("i", { className: M(i), ...s });
}
function Ud(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Vd(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Kn(null, t._temp), t._temp = null, t._container = null;
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
  }), Kn(
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
}, Ue = (e, t, n) => (Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (Dl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), be, $n, Es, Ms;
const Ol = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ys(this, be, void 0), ys(this, $n, void 0), ys(this, Es, void 0), ys(this, Ms, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = g(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = g.guid++;
    if (Ve(this, Es, a), Ve(this, $n, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ve(this, be, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ve(this, Ms, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ue(this, Ms);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ue(this, $n);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ue(this, be);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ue(this, Es);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return g(this.element);
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
    Ve(this, be, void 0), Ve(this, $n, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && g.extend(Ue(this, be), e), Ue(this, be);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = g.Event(e);
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
    return Yt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Yt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
    const n = g(e);
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
    return g(e || document).find(`[${n}]`).each((i, r) => {
      if (t) {
        const a = g(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = g(r).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(g(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    g.fn.extend({
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
let ht = Ol;
be = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ht.DEFAULT = {};
ht.NAME = Ol.name;
ht.MULTI_INSTANCE = !1;
class X extends ht {
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
    Kn(
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
    typeof p == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(nt, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: c }),
    /* @__PURE__ */ m(Wi, { content: i }),
    s,
    /* @__PURE__ */ m(nt, { icon: u })
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
  }, n, /* @__PURE__ */ m(Wi, { content: r }), i);
}
function Yd({
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
function Kd({ type: e, ...t }) {
  return /* @__PURE__ */ m(_o, { ...t });
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
  }, /* @__PURE__ */ m(Wi, { content: s }), n);
}
const yr = class extends V {
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
          return /* @__PURE__ */ m(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (Z(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || yr.ItemComponents[r] : o;
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
    return /* @__PURE__ */ m(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ m(e, { ...n }),
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
    return /* @__PURE__ */ m(f, { class: M(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Fe = yr;
Fe.ItemComponents = {
  divider: Gd,
  item: Hl,
  heading: jd,
  space: Yd,
  custom: Kd,
  basic: Bl
};
Fe.ROOT_TAG = "menu";
Fe.NAME = "action-menu";
class zl extends X {
}
zl.NAME = "ActionMenu";
zl.Component = Fe;
function Xd({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ m(Hl, { ...s });
}
var Fl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ut = (e, t, n) => (Fl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), sr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Jd = (e, t, n, s) => (Fl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts, Nt, Cn;
let Di = class extends Fe {
  constructor(t) {
    super(t), sr(this, Ts, /* @__PURE__ */ new Set()), sr(this, Nt, void 0), sr(this, Cn, (n, s, i) => {
      g(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Jd(this, Nt, t.nestedShow === void 0), ut(this, Nt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: ut(this, Nt) ? this.state.nestedShow : i,
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
    return /* @__PURE__ */ m(s, { ...i, "data-level": i.level });
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
    ut(this, Ts).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, Cn).bind(this, r, !0),
        onMouseLeave: ut(this, Cn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, Cn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = ut(this, Nt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!ut(this, Nt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, Ts).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    ut(this, Nt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, Nt) && this.setState({ nestedShow: !1 });
  }
};
Ts = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Di.ItemComponents = {
  item: Xd
};
class Ul extends X {
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
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Oi.NAME = "menu";
class Vl extends X {
}
Vl.NAME = "Menu";
Vl.Component = Oi;
class Kt extends V {
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
      d ? /* @__PURE__ */ m(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(nt, { icon: p }),
      T ? null : /* @__PURE__ */ m("span", { className: "text", children: d ? f : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ m(nt, { icon: v }),
      d ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Zd({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Kt, { type: n, ...s });
}
function cs(e) {
  return e.split("-")[1];
}
function bo(e) {
  return e === "y" ? "height" : "width";
}
function Re(e) {
  return e.split("-")[0];
}
function hs(e) {
  return ["top", "bottom"].includes(Re(e)) ? "x" : "y";
}
function Sa(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = hs(t), l = bo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Re(t)) {
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
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Sa(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Sa(h, u, l)), y = -1);
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
function ni(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = ds(t, e), p = ql(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = ni(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = ni(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const wr = Math.min, tu = Math.max;
function vr(e, t, n) {
  return tu(e, wr(t, n));
}
const _r = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ds(e, t) || {};
  if (l == null)
    return {};
  const c = ql(h), d = { x: n, y: s }, u = hs(i), f = bo(u), p = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", x = r.reference[f] + r.reference[u] - d[u] - r.floating[f], k = d[u] - r.reference[u], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[_] || r.floating[f]);
  const N = x / 2 - k / 2, A = T / 2 - p[f] / 2 - 1, O = wr(c[v], A), b = wr(c[w], A), R = O, W = T - p[f] - b, P = T / 2 - p[f] / 2 + N, D = vr(R, P, W), I = cs(i) != null && P != D && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : W - P : 0;
  return { [u]: d[u] - I, data: { [u]: D, centerOffset: P - D + I } };
} }), eu = ["top", "right", "bottom", "left"];
eu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const nu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function si(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nu[t]);
}
function su(e, t, n) {
  n === void 0 && (n = !1);
  const s = cs(e), i = hs(e), r = bo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = si(o)), { main: o, cross: si(o) };
}
const iu = { start: "end", end: "start" };
function ir(e) {
  return e.replace(/start|end/g, (t) => iu[t]);
}
const Hi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = ds(e, t), v = Re(s), w = Re(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [si(o)] : function(R) {
      const W = si(R);
      return [ir(R), W, ir(W)];
    }(o));
    d || f === "none" || x.push(...function(R, W, P, D) {
      const I = cs(R);
      let F = function(dt, Tt, ms) {
        const wn = ["left", "right"], gs = ["right", "left"], Ji = ["top", "bottom"], Hh = ["bottom", "top"];
        switch (dt) {
          case "top":
          case "bottom":
            return ms ? Tt ? gs : wn : Tt ? wn : gs;
          case "left":
          case "right":
            return Tt ? Ji : Hh;
          default:
            return [];
        }
      }(Re(R), P === "start", D);
      return I && (F = F.map((dt) => dt + "-" + I), W && (F = F.concat(F.map(ir)))), F;
    }(o, p, f, _));
    const k = [o, ...x], S = await Gl(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: R, cross: W } = su(s, r, _);
      T.push(S[R], S[W]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, W = k[R];
      if (W)
        return { data: { index: R, overflows: N }, reset: { placement: W } };
      let P = (O = N.filter((D) => D.overflows[0] <= 0).sort((D, I) => D.overflows[1] - I.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (u) {
          case "bestFit": {
            var b;
            const D = (b = N.map((I) => [I.placement, I.overflows.filter((F) => F > 0).reduce((F, dt) => F + dt, 0)]).sort((I, F) => I[1] - F[1])[0]) == null ? void 0 : b[0];
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
}, xo = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Re(a), u = cs(a), f = hs(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = ds(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ru(e) {
  return e === "x" ? "y" : "x";
}
const br = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ds(e, t), h = { x: n, y: s }, c = await Gl(t, l), d = hs(Re(i)), u = ru(d);
    let f = h[d], p = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = vr(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      p = vr(p + c[u === "y" ? "top" : "left"], p, p - c[v]);
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
function de(e) {
  return jl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  return e instanceof lt(e).HTMLElement;
}
function Ft(e) {
  return e instanceof lt(e).Element;
}
function Ea(e) {
  return typeof ShadowRoot < "u" && (e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot);
}
function Xn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function ou(e) {
  return ["table", "td", "th"].includes(de(e));
}
function xr(e) {
  const t = $o(), n = yt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function $o() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Bi(e) {
  return ["html", "body", "#document"].includes(de(e));
}
const Ma = Math.min, On = Math.max, ii = Math.round, ws = Math.floor, We = (e) => ({ x: e, y: e });
function Yl(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = vt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = ii(n) !== r || ii(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function Co(e) {
  return Ft(e) ? e : e.contextElement;
}
function nn(e) {
  const t = Co(e);
  if (!vt(t))
    return We(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Yl(t);
  let o = (r ? ii(n.width) : n.width) / s, a = (r ? ii(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Ta = We(0);
function Kl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !$o())
    return Ta;
  const r = e ? lt(e) : window;
  return !n || t && n !== r ? Ta : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function De(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Co(e);
  let o = We(1);
  t && (s ? Ft(s) && (o = nn(s)) : o = nn(e));
  const a = Kl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = lt(r), f = s && Ft(s) ? lt(s) : s;
    let p = u.frameElement;
    for (; p && s && f !== u; ) {
      const y = nn(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = v.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += x, p = lt(p).frameElement;
    }
  }
  return ni({ width: c, height: d, x: l, y: h });
}
function Ut(e) {
  return ((jl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zi(e) {
  return Ft(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xl(e) {
  return De(Ut(e)).left + zi(e).scrollLeft;
}
function gn(e) {
  if (de(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ea(e) && e.host || Ut(e);
  return Ea(t) ? t.host : t;
}
function Jl(e) {
  const t = gn(e);
  return Bi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Xn(t) ? t : Jl(t);
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
      const o = lt(i), a = Ut(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = $o();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Ut(i), o = zi(i), a = i.ownerDocument.body, l = On(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = On(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Xl(i);
      const d = -o.scrollTop;
      return yt(a).direction === "rtl" && (c += On(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Ut(e));
  else if (Ft(t))
    s = function(i, r) {
      const o = De(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = vt(i) ? nn(i) : We(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Kl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return ni(s);
}
function Zl(e, t) {
  const n = gn(e);
  return !(n === t || !Ft(n) || Bi(n)) && (yt(n).position === "fixed" || Zl(n, t));
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
  return s && (de(s) === "html" || de(s) === "body" && yt(s).position === "static" && !xr(s)) ? n : s || function(i) {
    let r = gn(i);
    for (; vt(r) && !Bi(r); ) {
      if (xr(r))
        return r;
      r = gn(r);
    }
    return null;
  }(e) || n;
}
function au(e, t, n) {
  const s = vt(t), i = Ut(t), r = n === "fixed", o = De(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = We(0);
  if (s || !s && !r)
    if ((de(t) !== "body" || Xn(i)) && (a = zi(t)), vt(t)) {
      const h = De(t, !0, r, t);
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
    let u = ri(h).filter((v) => Ft(v) && de(v) !== "body"), f = null;
    const p = yt(h).position === "fixed";
    let y = p ? gn(h) : h;
    for (; Ft(y) && !Bi(y); ) {
      const v = yt(y), w = xr(y);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Xn(y) && !w && Zl(h, y)) ? u = u.filter((_) => _ !== y) : f = v, y = gn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ra(t, c, i);
    return h.top = On(d.top, h.top), h.right = Ma(d.right, h.right), h.bottom = Ma(d.bottom, h.bottom), h.left = On(d.left, h.left), h;
  }, Ra(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = vt(n), r = Ut(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = We(1);
  const l = We(0);
  if ((i || !i && s !== "fixed") && ((de(n) !== "body" || Xn(r)) && (o = zi(n)), vt(n))) {
    const h = De(n);
    a = nn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ft, getDimensions: function(e) {
  return Yl(e);
}, getOffsetParent: Aa, getDocumentElement: Ut, getScale: nn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Aa, r = this.getDimensions;
  return { reference: au(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => yt(e).direction === "rtl" };
function ko(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Co(e), c = i || r ? [...h ? ri(h) : [], ...ri(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), r && y.addEventListener("resize", n);
  });
  const d = h && a ? function(y, v) {
    let w, _ = null;
    const x = Ut(y);
    function k() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function S(T, N) {
      T === void 0 && (T = !1), N === void 0 && (N = 1), k();
      const { left: A, top: O, width: b, height: R } = y.getBoundingClientRect();
      if (T || v(), !b || !R)
        return;
      const W = ws(O), P = ws(x.clientWidth - (A + b)), D = ws(x.clientHeight - (O + R)), I = ws(A);
      let F = !0;
      _ = new IntersectionObserver((dt) => {
        const Tt = dt[0].intersectionRatio;
        if (Tt !== N) {
          if (!F)
            return S();
          Tt === 0 ? w = setTimeout(() => {
            S(!1, 1e-7);
          }, 100) : S(!1, Tt);
        }
        F = !1;
      }, { rootMargin: -W + "px " + -P + "px " + -D + "px " + -I + "px", threshold: N }), _.observe(y);
    }(!0), k;
  }(h, n) : null;
  let u, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? De(e) : null;
  return l && function y() {
    const v = De(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, u = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, l && cancelAnimationFrame(u);
  };
}
const Fi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: lu, ...n }, r = { ...i.platform, _c: s };
  return Qd(e, t, { ...i, platform: r });
};
let cu = class extends Oi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  getPopperOptions() {
    return {
      middleware: [Hi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && Fi(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var So = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rt = (e, t, n) => (So(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vs = (e, t, n, s) => (So(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), La = (e, t, n) => (So(e, t, "access private method"), n), ee, kn, Rs, Ns, $r, Ql, Cr, tc;
const rr = "show", hu = '[data-toggle="contextmenu"]';
class et extends ht {
  constructor() {
    super(...arguments), qe(this, $r), qe(this, Cr), qe(this, ee, void 0), qe(this, kn, void 0), qe(this, Rs, void 0), qe(this, Ns, void 0);
  }
  get isShown() {
    return Rt(this, ee) && g(Rt(this, ee)).hasClass(rr);
  }
  get menu() {
    return Rt(this, ee) || this.ensureMenu();
  }
  get trigger() {
    return Rt(this, Rs) || this.element;
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
    return this.isShown || (vs(this, Rs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (g(this.menu).addClass(rr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Rt(this, Ns)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (g(Rt(this, ee)).removeClass(rr), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Rt(this, ee)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = g(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = g(document).find(i)), !(s != null && s.length)) {
        const r = t.next();
        r.hasClass(n) ? s = r : s = t.parent().find(`.${n}`);
      }
      s && s.addClass("menu-popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), vs(this, ee, s[0]), s[0];
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
    vs(this, Ns, ko(n, s, () => {
      Fi(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        g(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = La(this, $r, Ql).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          g(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...La(this, Cr, tc).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Kn(q(cu, t), this.menu), !0);
  }
  getPopperElement() {
    return Rt(this, kn) || vs(this, kn, {
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
    }), Rt(this, kn);
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
ee = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakSet();
Ql = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Cr = /* @__PURE__ */ new WeakSet();
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
g(document).on(`contextmenu${et.NAMESPACE}`, (e) => {
  const t = g(e.target);
  if (t.closest(`.${et.MENU_CLASS}`).length)
    return;
  const n = t.closest(hu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${et.KEY}:options`, i = n.data(s), r = et.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${et.NAMESPACE}`, et.clear.bind(et));
var Eo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sn = (e, t, n) => (Eo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, kr = (e, t, n, s) => (Eo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), du = (e, t, n) => (Eo(e, t, "access private method"), n), Hn, En, oi, Sr, ec;
const Pa = '[data-toggle="dropdown"]', nc = class extends et {
  constructor() {
    super(...arguments), _s(this, Sr), _s(this, Hn, !1), _s(this, En, 0), this.hideLater = () => {
      Sn(this, oi).call(this), kr(this, En, window.setTimeout(this.hide.bind(this), 100));
    }, _s(this, oi, () => {
      clearTimeout(Sn(this, En)), kr(this, En, 0);
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
    return n && (!Sn(this, Hn) && this.isHover && du(this, Sr, ec).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Sn(this, Hn) && g(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(xo(t)), (s = e.middleware) == null || s.push(_r({ element: this.arrowEl }))), e;
  }
  ensureMenu() {
    const e = super.ensureMenu();
    if (this.options.arrow) {
      const t = this.getArrowSize(), n = g('<div class="arrow-el" />').css({
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
        this.arrowEl && g(this.menu).find(".menu").each((s, i) => {
          g(i).find(".arrow-el").length === 0 && g(i).parent().hasClass("dropdown-menu") && g(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let Vt = nc;
Hn = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakSet();
ec = function() {
  g(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Sn(this, oi)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), kr(this, Hn, !0);
};
Vt.MENU_CLASS = "dropdown-menu";
Vt.NAME = "Dropdown";
Vt.DEFAULT = {
  ...et.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const bs = `${Vt.KEY}:options`;
g(document).on("click", function(e) {
  const t = g(e.target).closest(Pa).not(":disabled,.disabled");
  if (!t.length) {
    Vt.clear({ event: e });
    return;
  }
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = g(e.target).closest(Pa);
  if (!t.length)
    return;
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.isHover && s.show();
});
let xs = 0;
window.addEventListener("scroll", (e) => {
  xs && clearTimeout(xs), xs = window.setTimeout(() => {
    Vt.clear({ event: e }), xs = 0;
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
    }), B(this, ts, Vt.ensure(this.triggerElement, {
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
    return /* @__PURE__ */ m("div", { ...s, children: n });
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
    return s.caret = i, /* @__PURE__ */ m(Kt, { ...s });
  }
}
function sc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(fu, { type: n, ...s });
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
    return /* @__PURE__ */ m(Kt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (Z(l))
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
    return /* @__PURE__ */ m(
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
  return /* @__PURE__ */ m(ic, { type: n, ...s });
}
let _t = class extends Fe {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ m(t, { ...a });
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
  a === !0 ? d = /* @__PURE__ */ m(Kt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : Z(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ m(Kt, { ...a, onClick: l }));
  const u = Z(n) ? n : n ? /* @__PURE__ */ m(_t, { ...n }) : null;
  return /* @__PURE__ */ m("div", { className: M("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ m(nt, { icon: h }),
    Z(i) ? i : /* @__PURE__ */ m("div", { className: M("alert-content", r), children: [
      Z(s) ? s : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
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
    return /* @__PURE__ */ m(
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
}, vn = (e, t, n) => (wu(e, t, "access private method"), n), xe, Ke;
class Mo extends X {
  constructor() {
    super(...arguments), vu(this, xe), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      g(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), vn(this, xe, Ke).call(this, () => {
      this._show = !0, this.render(), vn(this, xe, Ke).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && vn(this, xe, Ke).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && vn(this, xe, Ke).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), vn(this, xe, Ke).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
xe = /* @__PURE__ */ new WeakSet();
Ke = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
Mo.NAME = "MessagerItem";
Mo.Component = yu;
var To = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ne = (e, t, n) => (To(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => (To(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), rc = (e, t, n) => (To(e, t, "access private method"), n), sn, Bt, Er, oc, Ro, ac;
const lc = class extends ht {
  constructor() {
    super(...arguments), $s(this, Er), $s(this, Ro), $s(this, sn, void 0), $s(this, Bt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ne(this, Bt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), rc(this, Er, oc).call(this).show();
  }
  hide() {
    var e;
    (e = Ne(this, Bt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = lc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let cc = lc;
sn = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakSet();
oc = function() {
  if (Ne(this, Bt))
    Ne(this, Bt).setOptions(this.options);
  else {
    const e = rc(this, Ro, ac).call(this), t = new Mo(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), As(this, sn, void 0), As(this, Bt, void 0);
    }), As(this, Bt, t);
  }
  return Ne(this, Bt);
};
Ro = /* @__PURE__ */ new WeakSet();
ac = function() {
  if (Ne(this, sn))
    return Ne(this, sn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = g(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = g(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), As(this, sn, n[0])), n[0];
};
cc.NAME = "messager";
cc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let _u = class extends V {
  constructor() {
    super(...arguments), this.state = { checked: !1 }, this.handleOnClick = () => {
      this.setState({ checked: !this.state.checked });
    };
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: t,
      className: n,
      children: s,
      text: i,
      icon: r,
      surffixIcon: o,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, d = this.state.checked ? 1 : 0, u = t || "div", f = typeof r == "string" ? /* @__PURE__ */ m("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ m("i", { class: `icon ${o}` }) : o, y = [
      /* @__PURE__ */ m("input", { onChange: h, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ m("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      u,
      {
        className: M("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...y,
      s
    );
  }
};
class hc extends X {
}
hc.NAME = "Switch";
hc.Component = _u;
var Ht;
class bu {
  constructor(t = "") {
    L(this, Ht, void 0);
    typeof t == "object" ? B(this, Ht, t) : B(this, Ht, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, Ht).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, Ht).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, Ht).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, Ht).dispatchEvent(t), t;
  }
}
Ht = new WeakMap();
const Ia = /* @__PURE__ */ new Set([
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
class dc extends bu {
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
    return typeof t == "string" && (Ia.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(dc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ia.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let uc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, re, $t, ln, cn, Ls;
const ua = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, cn);
    L(this, es, void 0);
    L(this, re, void 0);
    L(this, $t, void 0);
    L(this, ln, void 0);
    B(this, es, n), B(this, re, `ZUI_STORE:${t ?? uc()}`), B(this, $t, n === "local" ? localStorage : sessionStorage);
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
    return this.type === "session" ? this : (C(this, ln) || B(this, ln, new ua(C(this, re), "session")), C(this, ln));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, $t).getItem(ye(this, cn, Ls).call(this, t));
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
    C(this, $t).setItem(ye(this, cn, Ls).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, $t).removeItem(ye(this, cn, Ls).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, $t).length; n++) {
      const s = C(this, $t).key(n);
      if (s != null && s.startsWith(C(this, re))) {
        const i = C(this, $t).getItem(s);
        typeof i == "string" && t(s.substring(C(this, re).length + 1), JSON.parse(i));
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
let ai = ua;
es = new WeakMap(), re = new WeakMap(), $t = new WeakMap(), ln = new WeakMap(), cn = new WeakSet(), Ls = function(t) {
  return `${C(this, re)}:${t}`;
};
const xu = new ai("DEFAULT");
function $u(e, t = "local") {
  return new ai(e, t);
}
Object.assign(xu, { create: $u });
function Cu(e) {
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
function ku(e) {
  const [t, n, s] = typeof e == "string" ? Cu(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Wa(e, t) {
  return ku(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Da(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Su(e, t, n) {
  e = e % 360 / 360, t = Da(t), n = Da(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Eu(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Mu(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let fc = class extends V {
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
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const S = Mu(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = Wa(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Eu(N)) * u % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = Su(A, f, p);
          _.color = Wa(O);
        }
      }
      let T;
      x && x < 14 * S.length && (T = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": x, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ m(
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
class pc extends X {
}
pc.NAME = "Avatar";
pc.Component = fc;
class mc extends X {
}
mc.NAME = "BtnGroup";
mc.Component = ic;
class No extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n, clickType: s } = this.props, i = g(t.target);
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
    return n ? /* @__PURE__ */ m("input", { type: "hidden", className: "pick-value", name: n, value: s.value }) : null;
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
var Te, Ct, oe;
class gc extends V {
  constructor(n) {
    super(n);
    L(this, Te, void 0);
    L(this, Ct, void 0);
    L(this, oe, void 0);
    B(this, Te, tt()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = g(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return g(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Te)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, oe);
  }
  _handleClick(n) {
    const { togglePop: s } = this.props, i = g(n.target), r = i.closest("[data-pick-value]");
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
    } = n, h = g.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(n),
      style: h,
      ref: C(this, Te),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, oe)) {
      const s = g(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = g("<div>").addClass("pick-container").appendTo(s)), B(this, oe, i[0]);
    }
    return C(this, oe);
  }
  _render(n) {
    return /* @__PURE__ */ m("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      C(this, Ct) && (C(this, Ct).call(this), B(this, Ct, void 0));
      return;
    }
    C(this, Ct) || B(this, Ct, ko(s, n, () => {
      const { placement: o, width: a } = i;
      Fi(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Hi() : null, br(), xo(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        g(n).css({
          left: l,
          top: h,
          width: a === "100%" ? g(s).outerWidth() : void 0
        });
      }), a === "100%" && g(n).css({ width: g(n).width() });
    }));
  }
  componentDidMount() {
    this.layout(), g(document).on("click", this._handleDocClick);
  }
  componentWillUnmount() {
    g(document).off("click", this._handleDocClick);
    const n = C(this, Ct);
    n && (n(), B(this, Ct, void 0)), B(this, oe, void 0), B(this, Te, void 0), g(`pick-pop-${this.props.id}`).remove();
  }
  render(n) {
    return qd(this._render(n), this._getContainer(n));
  }
}
Te = new WeakMap(), Ct = new WeakMap(), oe = new WeakMap();
var yc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, we = (e, t, n) => (yc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), or = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (yc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ps, pt, Is;
let me = class extends V {
  constructor(t) {
    super(t), or(this, Ps, void 0), or(this, pt, 0), or(this, Is, tt()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      we(this, pt) && (clearTimeout(we(this, pt)), Ge(this, pt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Zs(200, (a) => {
        Ge(this, pt, a);
      }), Ge(this, pt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Zs(50, (a) => {
        Ge(this, pt, a);
      }), Ge(this, pt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Ge(this, Ps, t.id ?? `_${g.guid++}`);
  }
  get id() {
    return we(this, Ps);
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
    (n = this.props.beforeDestroy) == null || n.call(this), we(this, pt) && clearTimeout(we(this, pt));
    const t = we(this, Is).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ m(o, { ref: we(this, Is), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ m(yn, { children: [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ps = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
me.Trigger = No;
me.Pop = gc;
me.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let wc = class extends me {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && g(s).css("backgroundColor", a), i && g(i).css("borderColor", a), r && g(r).css("color", a), o && g(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ m(nt, { icon: s }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = g.extend({
      color: n.value
    }, s.style), s;
  }
  _renderPop(t, n) {
    const { colors: s = [], closeBtn: i, heading: r } = t, { value: o } = n;
    let a;
    return r && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      r,
      i ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        s.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
wc.defaultProps = {
  ...me.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop menu-popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class vc extends X {
}
vc.NAME = "ColorPicker";
vc.Component = wc;
var Ao = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ee = (e, t, n) => (Ao(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bn = (e, t, n, s) => (Ao(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ar = (e, t, n) => (Ao(e, t, "access private method"), n), Ze, Ws, $e, Mr, Mn, Ds;
const lr = "show", Oa = "in", Tu = '[data-dismiss="modal"]', Tn = class extends ht {
  constructor() {
    super(...arguments), _n(this, Mn), _n(this, Ze, 0), _n(this, Ws, void 0), _n(this, $e, void 0), _n(this, Mr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Tu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(lr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Ee(this, Mr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!Ee(this, $e) || Ee(this, $e)[0] !== n || Ee(this, $e)[1] !== s) && (Bn(this, $e, [n, s]), this.layout());
        });
        t.observe(e), Bn(this, Ws, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = Ee(this, Ws)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return g(t).css("z-index", `${Tn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return g(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, lr, i).css({
      zIndex: `${Tn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), ar(this, Mn, Ds).call(this, () => {
      g(t).addClass(Oa), ar(this, Mn, Ds).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (g(this.modalElement).removeClass(Oa), this.emit("hide"), ar(this, Mn, Ds).call(this, () => {
      g(this.modalElement).removeClass(lr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = g(n);
    t = t ?? this.options.size, s.removeAttr("data-size");
    const i = { width: "", height: "" };
    typeof t == "object" ? (i.width = t.width, i.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (i.width = t), s.css(i), e = e ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    Bn(this, $e, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), s.css(a), g(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = Tn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Tn.query(e)) == null || t.show();
  }
};
let Qt = Tn;
Ze = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakSet();
Ds = function(e, t) {
  Ee(this, Ze) && (clearTimeout(Ee(this, Ze)), Bn(this, Ze, 0)), e && (this.options.animation ? Bn(this, Ze, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Qt.NAME = "Modal";
Qt.MULTI_INSTANCE = !0;
Qt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Qt.zIndex = 2e3;
g(window).on("resize.modal.zui", () => {
  Qt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
g(document).on("to-hide.modal.zui", (e, t) => {
  Qt.hide(t == null ? void 0 : t.target);
});
class _c extends V {
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
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-header", children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Z(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(_t, { ...t }) : null,
      n ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ m("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-footer", children: n ? /* @__PURE__ */ m(_t, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ m("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ m("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
_c.defaultProps = { closeBtn: !0 };
var hn, dn, un;
class Ru extends V {
  constructor() {
    super(...arguments);
    L(this, hn, void 0);
    L(this, dn, void 0);
    L(this, un, void 0);
    B(this, hn, tt()), this.state = {}, B(this, un, () => {
      var i, r;
      const n = (r = (i = C(this, hn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, dn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, dn, s);
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
    return /* @__PURE__ */ m(
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
var Lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, je = (e, t, n, s) => (Lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Os = (e, t, n) => (Lo(e, t, "access private method"), n), At, Rn, Lt, li, Po, Hs, Tr;
function Nu(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Au(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ m(vo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Lu(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ m(Ru, { url: n })
  };
}
const Pu = {
  custom: Nu,
  ajax: Au,
  iframe: Lu
}, cr = "loading", Nn = class extends Qt {
  constructor() {
    super(...arguments), bn(this, li), bn(this, Hs), bn(this, At, void 0), bn(this, Rn, void 0), bn(this, Lt, void 0);
  }
  get id() {
    return ft(this, Rn);
  }
  get loading() {
    var e;
    return (e = ft(this, At)) == null ? void 0 : e.classList.contains(cr);
  }
  get shown() {
    var e;
    return !!((e = ft(this, At)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = ft(this, At);
    if (!e) {
      const { options: t } = this;
      let n = ft(this, Rn);
      n || (n = t.id || `modal-${g.guid++}`, je(this, Rn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = g("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      je(this, At, e);
    }
    return e;
  }
  get $emitter() {
    const e = ft(this, At);
    return e ? g(e) : this.$element;
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
    const e = ft(this, At);
    e && (g(e).removeData(this.constructor.KEY).remove(), je(this, At, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, Lt) && clearTimeout(ft(this, Lt));
    const { modalElement: e, options: t } = this, n = g(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Pu[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(cr), i && je(this, Lt, window.setTimeout(() => {
      je(this, Lt, 0), Os(this, Hs, Tr).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Os(this, Hs, Tr).call(this, this.options.failedTip) : a && typeof a == "object" && await Os(this, li, Po).call(this, a), ft(this, Lt) && (clearTimeout(ft(this, Lt)), je(this, Lt, 0)), this.layout(), await Zs(100), n.removeClass(cr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = Nn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = typeof n == "object" && n.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ m("div", { children: n });
    s ? c = /* @__PURE__ */ m("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ m("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ m("div", { className: "modal-body", children: c });
    const d = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Yt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && d.push(p);
    }, []);
    let u;
    const f = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: p, event: y }) => {
        const v = Nn.query(y.target, l);
        u = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Nn.open({
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
    return await Nn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let bc = Nn;
At = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
Po = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return g(this.modalElement).html(e[0]).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Kn(
      /* @__PURE__ */ m(_c, { ...e }),
      this.modalElement
    );
  });
};
Hs = /* @__PURE__ */ new WeakSet();
Tr = function(e) {
  if (e)
    return Os(this, li, Po).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: e })
    });
};
bc.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Io = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rr = (e, t, n) => (Io(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ha = (e, t, n, s) => (Io(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Nr = (e, t, n) => (Io(e, t, "access private method"), n), Ae, Wo, xc, Ar, $c, Do, Cc;
const Iu = '[data-toggle="modal"]';
class kc extends ht {
  constructor() {
    super(...arguments), Cs(this, Wo), Cs(this, Ar), Cs(this, Do), Cs(this, Ae, void 0);
  }
  get modal() {
    return Rr(this, Ae);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = Nr(this, Ar, $c).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Rr(this, Ae)) == null ? void 0 : t.hide();
  }
}
Ae = /* @__PURE__ */ new WeakMap();
Wo = /* @__PURE__ */ new WeakSet();
xc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Ar = /* @__PURE__ */ new WeakSet();
$c = function() {
  const e = Nr(this, Wo, xc).call(this);
  let t = Rr(this, Ae);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = Nr(this, Do, Cc).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = bc.ensure(this.container, e);
  return Ha(this, Ae, t), t.on("destroyed", () => {
    Ha(this, Ae, void 0);
  }), t;
};
Do = /* @__PURE__ */ new WeakSet();
Cc = function() {
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
kc.NAME = "ModalTrigger";
g(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Iu);
  if (n) {
    const i = kc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let Sc = class extends Fe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Sc.NAME = "nav";
class Ec extends X {
}
Ec.NAME = "Nav";
Ec.Component = Sc;
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : st(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : st(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(Kt, { type: n, ...a });
}
const Dt = 24 * 60 * 60 * 1e3, ot = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), us = (e, t = /* @__PURE__ */ new Date()) => (e = ot(e), t = ot(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Lr = (e, t = /* @__PURE__ */ new Date()) => ot(e).getFullYear() === ot(t).getFullYear(), Du = (e, t = /* @__PURE__ */ new Date()) => (e = ot(e), t = ot(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), sp = (e, t = /* @__PURE__ */ new Date()) => {
  e = ot(e), t = ot(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, ip = (e, t) => us(ot(t), e), rp = (e, t) => us(ot(t).getTime() - Dt, e), op = (e, t) => us(ot(t).getTime() + Dt, e), ap = (e, t) => us(ot(t).getTime() - 2 * Dt, e), Pr = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = ot(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Lr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, lp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Pr(e, Lr(e) ? s.month : s.full);
  if (us(e, t))
    return i;
  const r = Pr(t, Lr(e, t) ? Du(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, cp = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Dt * 7;
    case "oneMonth":
      return t - Dt * 31;
    case "threeMonth":
      return t - Dt * 31 * 3;
    case "halfYear":
      return t - Dt * 183;
    case "oneYear":
      return t - Dt * 365;
    case "twoYear":
      return t - 2 * (Dt * 365);
    default:
      return 0;
  }
}, Ba = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ba(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Ba(e, "day", n, s);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? s + e : s - e;
};
function Ou({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Jn(i, n);
  return s = typeof s == "function" ? s(a) : st(s, a), /* @__PURE__ */ m(Bl, { ...o, children: [
    r,
    s
  ] });
}
function Hu({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(Kt, { type: n, ...l })), c = (u, f) => {
    const p = [];
    for (let y = u; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Jn(i, y);
      o && (l.url = typeof o == "function" ? o(v) : st(o, v)), p.push(/* @__PURE__ */ m(Kt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Bu({
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
  return o.text = typeof a == "function" ? a(t) : st(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(sc, { type: "dropdown", dropdown: i, ...o });
}
function zu({
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
  return c.url = typeof l == "function" ? l(p) : st(l, p), /* @__PURE__ */ m("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ m(Kt, { type: s, ...c, onClick: f })
  ] });
}
let Ui = class extends _t {
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
Ui.NAME = "pager";
Ui.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ui.ItemComponents = {
  ..._t.ItemComponents,
  link: Wu,
  info: Ou,
  nav: Hu,
  "size-menu": Bu,
  goto: zu
};
class Mc extends X {
}
Mc.NAME = "Pager";
Mc.Component = Ui;
class Tc extends X {
}
Tc.NAME = "Pick";
Tc.Component = me;
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
        const r = g(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: C(this, ns), children: o }) : a ? l = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, vi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : l = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
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
class Fu extends No {
  constructor() {
    super(...arguments);
    L(this, pn, void 0);
    L(this, is, void 0);
    L(this, rs, void 0);
    L(this, os, void 0);
    B(this, pn, tt()), B(this, is, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = g(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), B(this, rs, (n) => {
      this.props.changeState({ search: n });
    }), B(this, os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, is), "data-value": n.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
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
    return /* @__PURE__ */ m(
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
    return !l && !s.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
}
pn = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), os = new WeakMap();
var as, _i, bi, xi, $i, Nc;
class Uu extends No {
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
    return /* @__PURE__ */ m(
      Rc,
      {
        ref: C(this, as),
        defaultSearch: s,
        onSearch: C(this, bi),
        onClear: C(this, xi),
        placeholder: ye(this, $i, Nc).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a } = n, [l] = i, h = r && a;
    let c;
    h ? c = this._renderSearch(n) : l ? c = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: l.text ?? l.value }, "main") : c = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const d = l && !h ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, _i), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      s,
      d,
      h ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
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
const Vu = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ m("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Ci, ki, Ac, Si, Lc, Ei;
class qu extends gc {
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
    n && g(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = g(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && g(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = ye(this, ki, Ac).call(this);
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
    return /* @__PURE__ */ m(
      Oi,
      {
        ref: C(this, Ci),
        className: "picker-menu-list",
        items: ye(this, Si, Lc).call(this),
        onClickItem: C(this, Ei),
        ...s
      }
    );
  }
}
Ci = new WeakMap(), ki = new WeakSet(), Ac = function() {
  const n = this.element;
  if (n)
    return g(n).find(".menu-item>a.hover");
}, Si = new WeakSet(), Lc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = g.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
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
      text: typeof w == "string" ? Vu(l, [w]) : /* @__PURE__ */ m(Wi, { content: w }),
      className: M(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, Ei = new WeakMap();
var Oo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, te = (e, t, n) => (Oo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ye = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ve = (e, t, n, s) => (Oo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), gt = (e, t, n) => (Oo(e, t, "access private method"), n), An, Pt, Ce, Qe, zn, Ho, Pc, ne, ke;
let Bo = class extends me {
  constructor(t) {
    super(t), Ye(this, Qe), Ye(this, Ho), Ye(this, ne), Ye(this, An, void 0), Ye(this, Pt, void 0), Ye(this, Ce, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? gt(this, ne, ke).call(this, n) : gt(this, ne, ke).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), gt(this, ne, ke).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(gt(this, Qe, zn).call(this, n)), r = s.filter((o) => !i.has(o));
      gt(this, ne, ke).call(this, r);
    }, this.clear = () => {
      gt(this, ne, ke).call(this);
    }, this.select = (n) => {
      const s = gt(this, Qe, zn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return gt(this, ne, ke).call(this, i);
    }, this.isSelected = (n) => this.valueList.includes(n), g.extend(this.state, {
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
    return gt(this, Qe, zn).call(this, this.state.value);
  }
  async load() {
    let t = te(this, Pt);
    t && t.abort(), t = new AbortController(), ve(this, Pt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await Zs(s || 500), te(this, Pt) !== t || (r = await n(i, { signal: t.signal }), te(this, Pt) !== t))
        return r;
    } else if (i.length) {
      const o = g.unique(i.toLowerCase().split(" ").filter((a) => a.length));
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
    return ve(this, Pt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = te(this, An) || {}, r = {};
    if (ve(this, An, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    te(this, Ce) && clearTimeout(te(this, Ce)), ve(this, Ce, window.setTimeout(() => {
      ve(this, Ce, 0), this.update();
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
    (t = te(this, Pt)) == null || t.abort(), ve(this, Pt, void 0), ve(this, An, void 0), clearTimeout(te(this, Ce)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Fu : Uu);
  }
};
An = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
zn = function(e) {
  return typeof e == "string" ? e.length ? g.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? g.unique(e) : [];
};
Ho = /* @__PURE__ */ new WeakSet();
Pc = function(e) {
  const t = gt(this, Qe, zn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
ne = /* @__PURE__ */ new WeakSet();
ke = function(e) {
  const t = e === void 0 ? e : gt(this, Ho, Pc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
Bo.defaultProps = {
  ...me.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
Bo.Pop = qu;
class Ic extends X {
}
Ic.NAME = "Picker";
Ic.Component = Bo;
class Wc extends ht {
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
    return i && s.middleware.push(Hi()), r && s.middleware.push(r === !0 ? br() : br(r)), o && s.middleware.push(_r({ element: this.$arrow[0] })), a && s.middleware.push(xo(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = ko(t, n, () => {
      Fi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !_r || !o.arrow)
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
    const n = g(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      g(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = g('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = g('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Wc.NAME = "Popovers";
Wc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var zo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xt = (e, t, n) => (zo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _e = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bs = (e, t, n, s) => (zo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), za = (e, t, n) => (zo(e, t, "access private method"), n), zs, Fs, Le, Ir, Us, Vs, qs, Wr;
let Dc = class extends V {
  constructor(t) {
    super(t), _e(this, qs), _e(this, zs, void 0), _e(this, Fs, tt()), _e(this, Le, 0), _e(this, Ir, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), _e(this, Us, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (za(this, qs, Wr).call(this), Bs(this, Le, window.setTimeout(() => {
          r(i, n), Bs(this, Le, 0);
        }, this.props.delay || 0)));
      });
    }), _e(this, Vs, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Bs(this, zs, t.id || `search-box-${g.guid++}`);
  }
  get id() {
    return xt(this, zs);
  }
  get input() {
    return xt(this, Fs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    za(this, qs, Wr).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: f } = t, { focus: p, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, x, k;
    return u && (k = u === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ m("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), f && !w ? x = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: xt(this, Ir),
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(nt, { icon: f })
      }
    ) : d && u && (x = k), x && (x = /* @__PURE__ */ m("label", { for: v, class: "input-control-suffix", children: x }, "suffix")), /* @__PURE__ */ m("div", { class: M("search-box input-control", r, { focus: p, empty: w, "has-prefix-icon": _, "has-suffix-icon": x }), style: o, children: [
      _,
      /* @__PURE__ */ m(
        "input",
        {
          ref: xt(this, Fs),
          id: v,
          type: "text",
          class: M("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: xt(this, Us),
          onChange: xt(this, Us),
          onFocus: xt(this, Vs),
          onBlur: xt(this, Vs)
        }
      ),
      x
    ] });
  }
};
zs = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakSet();
Wr = function() {
  xt(this, Le) && clearTimeout(xt(this, Le)), Bs(this, Le, 0);
};
Dc.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Oc extends X {
}
Oc.NAME = "SearchBox";
Oc.Component = Dc;
class Hc extends X {
}
Hc.NAME = "Toolbar";
Hc.Component = _t;
function fs(e) {
  return e.split("-")[1];
}
function Fo(e) {
  return e === "y" ? "height" : "width";
}
function rn(e) {
  return e.split("-")[0];
}
function Vi(e) {
  return ["top", "bottom"].includes(rn(e)) ? "x" : "y";
}
function Fa(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Vi(t), l = Fo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (rn(t)) {
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
  switch (fs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Gu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Fa(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Fa(h, u, l)), y = -1);
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
async function ju(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, p = Bc(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = ci(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = ci(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const Yu = Math.min, Ku = Math.max;
function Xu(e, t, n) {
  return Ku(e, Yu(t, n));
}
const Ju = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Bc(s), c = { x: i, y: r }, d = Vi(o), u = Fo(d), f = await l.getDimensions(n), p = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let x = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[u]);
  const k = v / 2 - w / 2, S = h[p], T = x - f[u] - h[y], N = x / 2 - f[u] / 2 + k, A = Xu(S, N, T), O = fs(o) != null && N != A && a.reference[u] / 2 - (N < S ? h[p] : h[y]) - f[u] / 2 < 0;
  return { [d]: c[d] - (O ? N < S ? S - N : T - N : 0), data: { [d]: A, centerOffset: N - A } };
} }), Zu = ["top", "right", "bottom", "left"];
Zu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Qu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qu[t]);
}
function tf(e, t, n) {
  n === void 0 && (n = !1);
  const s = fs(e), i = Vi(e), r = Fo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = hi(o)), { main: o, cross: hi(o) };
}
const ef = { start: "end", end: "start" };
function hr(e) {
  return e.replace(/start|end/g, (t) => ef[t]);
}
const nf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, v = rn(s), w = rn(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [hi(o)] : function(b) {
      const R = hi(b);
      return [hr(b), R, hr(R)];
    }(o));
    d || f === "none" || x.push(...function(b, R, W, P) {
      const D = fs(b);
      let I = function(F, dt, Tt) {
        const ms = ["left", "right"], wn = ["right", "left"], gs = ["top", "bottom"], Ji = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Tt ? dt ? wn : ms : dt ? ms : wn;
          case "left":
          case "right":
            return dt ? gs : Ji;
          default:
            return [];
        }
      }(rn(b), W === "start", P);
      return D && (I = I.map((F) => F + "-" + D), R && (I = I.concat(I.map(hr)))), I;
    }(o, p, f, _));
    const k = [o, ...x], S = await ju(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: b, cross: R } = tf(s, r, _);
      T.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = k[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let W = "bottom";
      switch (u) {
        case "bestFit": {
          var O;
          const P = (O = N.map((D) => [D, D.overflows.filter((I) => I > 0).reduce((I, F) => I + F, 0)]).sort((D, I) => D[1] - I[1])[0]) == null ? void 0 : O[0].placement;
          P && (W = P);
          break;
        }
        case "initialPlacement":
          W = o;
      }
      if (s !== W)
        return { reset: { placement: W } };
    }
    return {};
  } };
}, sf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = rn(a), u = fs(a), f = Vi(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
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
function ue(e) {
  return Fc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ks;
function zc() {
  if (ks)
    return ks;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ks = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ks) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof at(e).HTMLElement;
}
function wt(e) {
  return e instanceof at(e).Element;
}
function Fc(e) {
  return e instanceof at(e).Node;
}
function Ua(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof at(e).ShadowRoot || e instanceof ShadowRoot;
}
function qi(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function rf(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function Dr(e) {
  const t = /firefox/i.test(zc()), n = Et(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Uc() {
  return !/^((?!chrome|android).)*safari/i.test(zc());
}
function Uo(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Va = Math.min, Fn = Math.max, di = Math.round;
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
function on(e) {
  const t = qc(e);
  if (!Xt(t))
    return Gc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Vc(t);
  let o = (r ? di(n.width) : n.width) / s, a = (r ? di(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Oe(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qc(e);
  let l = Gc;
  t && (s ? wt(s) && (l = on(s)) : l = on(e));
  const h = a ? at(a) : window, c = !Uc() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = at(a), v = s && wt(s) ? at(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = on(w), x = w.getBoundingClientRect(), k = getComputedStyle(w);
      x.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, x.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, p *= _.y, d += x.x, u += x.y, w = at(w).frameElement;
    }
  }
  return { width: f, height: p, top: u, right: d + f, bottom: u + p, left: d, x: d, y: u };
}
function he(e) {
  return ((Fc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Gi(e) {
  return wt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function jc(e) {
  return Oe(he(e)).left + Gi(e).scrollLeft;
}
function of(e, t, n) {
  const s = Xt(t), i = he(t), r = Oe(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ue(t) !== "body" || qi(i)) && (o = Gi(t)), Xt(t)) {
      const l = Oe(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = jc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Zn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Ua(e) ? e.host : null) || he(e);
  return Ua(t) ? t.host : t;
}
function qa(e) {
  return Xt(e) && Et(e).position !== "fixed" ? e.offsetParent : null;
}
function Ga(e) {
  const t = at(e);
  let n = qa(e);
  for (; n && rf(n) && Et(n).position === "static"; )
    n = qa(n);
  return n && (ue(n) === "html" || ue(n) === "body" && Et(n).position === "static" && !Dr(n)) ? t : n || function(s) {
    let i = Zn(s);
    for (; Xt(i) && !Uo(i); ) {
      if (Dr(i))
        return i;
      i = Zn(i);
    }
    return null;
  }(e) || t;
}
function Yc(e) {
  const t = Zn(e);
  return Uo(t) ? e.ownerDocument.body : Xt(t) && qi(t) ? t : Yc(t);
}
function Un(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Yc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], qi(s) ? s : []) : t.concat(s, Un(s));
}
function ja(e, t, n) {
  return t === "viewport" ? ci(function(s, i) {
    const r = at(s), o = he(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Uc();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : wt(t) ? function(s, i) {
    const r = Oe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Xt(s) ? on(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : ci(function(s) {
    var i;
    const r = he(s), o = Gi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Fn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Fn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + jc(s);
    const d = -o.scrollTop;
    return Et(a || r).direction === "rtl" && (c += Fn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(he(e)));
}
const af = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Un(h).filter((v) => wt(v) && ue(v) !== "body"), f = null;
    const p = Et(h).position === "fixed";
    let y = p ? Zn(h) : h;
    for (; wt(y) && !Uo(y); ) {
      const v = Et(y), w = Dr(y);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== y), y = Zn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = ja(t, c, i);
    return h.top = Fn(d.top, h.top), h.right = Va(d.right, h.right), h.bottom = Va(d.bottom, h.bottom), h.left = Fn(d.left, h.left), h;
  }, ja(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), r = he(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || qi(r)) && (o = Gi(n)), Xt(n))) {
    const h = Oe(n);
    a = on(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: wt, getDimensions: function(e) {
  return Vc(e);
}, getOffsetParent: Ga, getDocumentElement: he, getScale: on, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Ga, r = this.getDimensions;
  return { reference: of(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Et(e).direction === "rtl" };
function lf(e, t, n, s) {
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
  let u = a ? Oe(e) : null;
  return a && function f() {
    const p = Oe(e);
    !u || p.x === u.x && p.y === u.y && p.width === u.width && p.height === u.height || n(), u = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const cf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: af, ...n }, r = { ...i.platform, _c: s };
  return Gu(e, t, { ...i, platform: r });
};
var Vo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Vo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, He = (e, t, n, s) => (Vo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), St = (e, t, n) => (Vo(e, t, "access private method"), n), Vn, qn, Ln, tn, it, Or, ui, ji, qo, Go, Kc, Hr, Xc, jo, Jc, Yo, Zc, Ko, Qc, Br, th, Xo, eh, Gn, zr, nh;
const en = class extends ht {
  constructor() {
    super(...arguments), j(this, ji), j(this, Go), j(this, Hr), j(this, jo), j(this, Yo), j(this, Ko), j(this, Br), j(this, Xo), j(this, zr), j(this, Vn, !1), j(this, qn, void 0), j(this, Ln, 0), j(this, tn, void 0), j(this, it, void 0), j(this, Or, void 0), j(this, ui, void 0), this.hideLater = () => {
      U(this, Gn).call(this), He(this, Ln, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Gn, () => {
      clearTimeout(U(this, Ln)), He(this, Ln, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, tn)) == null ? void 0 : e.classList.contains(en.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, tn) || St(this, Hr, Xc).call(this);
  }
  get trigger() {
    return U(this, Or) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${en.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Vn) && this.isHover && St(this, zr, nh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(en.CLASS_SHOW), St(this, Br, th).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ui)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, tn)) == null || t.classList.remove(en.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Gn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let ct = en;
Vn = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
ji = /* @__PURE__ */ new WeakSet();
qo = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Go = /* @__PURE__ */ new WeakSet();
Kc = function() {
  const e = St(this, ji, qo).call(this);
  return He(this, it, document.createElement("div")), U(this, it).style.position = this.options.strategy, U(this, it).style.width = `${e}px`, U(this, it).style.height = `${e}px`, U(this, it).style.transform = "rotate(45deg)", U(this, it);
};
Hr = /* @__PURE__ */ new WeakSet();
Xc = function() {
  var n;
  const e = en.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(St(this, Go, Kc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), He(this, tn, t), t;
};
jo = /* @__PURE__ */ new WeakSet();
Jc = function() {
  var i;
  const e = St(this, ji, qo).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [sf(e), nf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, it) && ((i = s.middleware) == null || i.push(Ju({ element: U(this, it) }))), s;
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
Ko = /* @__PURE__ */ new WeakSet();
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
Br = /* @__PURE__ */ new WeakSet();
th = function() {
  const e = St(this, jo, Jc).call(this), t = St(this, Xo, eh).call(this);
  He(this, ui, lf(t, this.tooltip, () => {
    cf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = St(this, Yo, Zc).call(this, o);
      if (i.arrow && U(this, it)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, it).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, it).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...St(this, Ko, Qc).call(this, o)
        });
      }
    });
  }));
};
Xo = /* @__PURE__ */ new WeakSet();
eh = function() {
  return U(this, qn) || He(this, qn, {
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
zr = /* @__PURE__ */ new WeakSet();
nh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Gn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), He(this, Vn, !0);
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
function hf({
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
  return k && (k.btnProps || (k.btnProps = { size: "sm" }), k.className = M("tree-actions not-nested-toggle", k.className)), /* @__PURE__ */ m(
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
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ m("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(nt, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        k ? /* @__PURE__ */ m(_t, { ...k }) : null,
        /* @__PURE__ */ m(nt, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Jo = class extends Di {
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
Jo.ItemComponents = {
  item: hf
};
Jo.NAME = "tree";
class sh extends X {
}
sh.NAME = "Tree";
sh.Component = Jo;
class ih extends ht {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Rd(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, btnClass: i, tip: r, draggable: o } = this.options;
    this.$list = g('<ul class="file-list py-1"></ul>');
    const a = g(`<span class="upload-tip">${r}</span>`);
    if (!o) {
      this.$label = g(`<label class="btn ${i}" for="${t}">${n}</label>`);
      const h = s === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
      this.$element.append(this.$input, ...h);
      return;
    }
    this.$label = g(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(a), this.bindDragEvent();
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
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = g("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (r) => {
      const o = r.target.files;
      if (!o)
        return;
      const a = [...o];
      this.addFileItem(a), i == null || i(a);
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
  addFileItem(t) {
    const { multiple: n, limitCount: s, exceededSizeHint: i, exceededCountHint: r } = this.options;
    if (n) {
      for (let l of t) {
        if (s && this.fileMap.size >= s)
          return alert(r);
        if (this.currentBytes + l.size > this.limitBytes)
          return alert(i);
        l = this.renameDuplicatedFile(l);
        const h = this.createFileItem(l);
        this.itemMap.set(l.name, h), this.$list.append(h);
      }
      return;
    }
    const o = this.renameDuplicatedFile(t[0]);
    if (o.size > this.limitBytes)
      return;
    const a = this.createFileItem(o);
    this.itemMap.clear(), this.itemMap.set(o.name, a), this.$list.empty().append(a);
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
    return this.addFile(t), g('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return g(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: n, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-rename");
      return new ct(r, { title: n }), r;
    }
    return g("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return new ct(r, { title: n }), r;
    }
    return g("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return g(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return g(`<span class="file-size text-gray">${Td(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, deleteBtn: s, showSize: i } = this.options, r = g('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), n && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = g(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = g('<div class="input-group input-rename-container hidden"></div>'), o = g("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
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
    }), a = g("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      const c = r.closest(".file-item"), d = c.find(".file-name");
      if (d.html() === o.val()) {
        r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(o.val());
    }), l = g("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = g('<div class="btn-group"></div').append(a).append(l);
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
class df extends ih {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = g(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(g('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, totalCountText: i } = this.options;
    this.$list = g('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = g('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 }), n && (this.$tip = g('<div class="absolute inset-0 col justify-center items-center"></div>').append(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`).append(g(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip)), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = g('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(i.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  addFileItem(t) {
    const { accept: n } = this.options, s = n.replace(/\s/g, "").split(",");
    t = t.filter((i) => s.includes(i.type)), super.addFileItem(t);
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
      g('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const n = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = g(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return g('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(g(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(n);
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = g("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
df.DEFAULT = {
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
class uf extends V {
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
    this.load(), g(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    g(this.element).off("load.zui.dashboard");
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
          this.setState({ loading: !1, content: /* @__PURE__ */ m(vo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ m("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: f } = this.state;
    let { content: p } = this.state;
    return p === void 0 && g.isPlainObject(d) && d.html && (p = /* @__PURE__ */ m("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Ti),
        onDragEnd: C(this, Ri),
        "data-id": c,
        ref: C(this, ls),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Mi), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
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
}, qt = (e, t, n) => (rh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bt = (e, t, n) => (rh(e, t, "access private method"), n), Jt, Zo, oh, Qo, ah, Fr, lh, ta, ch, fi, Ur, Yi, Vr, ea, hh, qr, Gr, Ki, na;
const sa = class extends V {
  constructor() {
    super(...arguments), mt(this, Zo), mt(this, Qo), mt(this, Fr), mt(this, ta), mt(this, fi), mt(this, Yi), mt(this, ea), mt(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, mt(this, qr, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), mt(this, Gr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = bt(this, Fr, lh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        uf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: qt(this, qr),
          onDragEnd: qt(this, Gr)
        },
        r.id
      );
    }) }) });
  }
};
let ia = sa;
Jt = /* @__PURE__ */ new WeakMap();
Zo = /* @__PURE__ */ new WeakSet();
oh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Qo = /* @__PURE__ */ new WeakSet();
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
    } = i, [u, f] = bt(this, Zo, oh).call(this, o);
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
Fr = /* @__PURE__ */ new WeakSet();
lh = function() {
  qt(this, Jt).clear();
  let e = 0;
  const t = bt(this, Qo, ah).call(this);
  return t.forEach((n) => {
    bt(this, ta, ch).call(this, n);
    const [, s, , i] = qt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
ta = /* @__PURE__ */ new WeakSet();
ch = function(e) {
  const t = qt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = bt(this, ea, hh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    bt(this, Yi, Vr).call(this, n, [s, i, r, o]);
};
fi = /* @__PURE__ */ new WeakSet();
Ur = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Jt).entries())
    if (s !== n && bt(t = sa, Ki, na).call(t, i, e))
      return !1;
  return !0;
};
Yi = /* @__PURE__ */ new WeakSet();
Vr = function(e, t) {
  var n;
  qt(this, Jt).set(e, t);
  for (const [s, i] of qt(this, Jt).entries())
    s !== e && bt(n = sa, Ki, na).call(n, i, t) && (i[1] = t[1] + t[3], bt(this, Yi, Vr).call(this, s, i));
};
ea = /* @__PURE__ */ new WeakSet();
hh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (bt(this, fi, Ur).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (bt(this, fi, Ur).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
qr = /* @__PURE__ */ new WeakMap();
Gr = /* @__PURE__ */ new WeakMap();
Ki = /* @__PURE__ */ new WeakSet();
na = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
mt(ia, Ki);
ia.defaultProps = {
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
class dh extends X {
}
dh.NAME = "Dashboard";
dh.Component = ia;
var ae, le;
class Ya extends V {
  constructor(n) {
    super(n);
    L(this, ae, void 0);
    L(this, le, void 0);
    B(this, ae, 0), B(this, le, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, ae) && cancelAnimationFrame(C(this, ae)), B(this, ae, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, ae, 0);
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
    n && (B(this, le, typeof n == "string" ? document : n.current), C(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, le) && C(this, le).removeEventListener("wheel", this._handleWheel);
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
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ m(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
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
ae = new WeakMap(), le = new WeakMap();
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
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? x : k;
      b.html ? R.push(/* @__PURE__ */ m("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      k.push(b);
  });
  const A = N;
  return /* @__PURE__ */ m(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...S,
      children: [
        k.length > 0 && /* @__PURE__ */ m(A, { className: M(y), style: f, ...T, children: k }),
        x
      ]
    }
  );
}
function dr({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = uh, onRenderCell: l }) {
  return /* @__PURE__ */ m("div", { className: M("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ m(
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
  i.list.length && (u = /* @__PURE__ */ m(
    dr,
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
  r.list.length && (f = /* @__PURE__ */ m(
    dr,
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
  o.list.length && (p = /* @__PURE__ */ m(
    dr,
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
  return /* @__PURE__ */ m(
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
function ff({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ m("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ m(fh, { ...s }) });
}
function pf({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ m("div", { className: M("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ m(fh, { ...c }, h.id);
  }) });
}
const pi = /* @__PURE__ */ new Map(), mi = [];
function ph(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && pi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  pi.set(n, e), t != null && t.buildIn && !mi.includes(n) && mi.push(n);
}
function ge(e, t) {
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
function mf(e) {
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
    const i = mf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && gh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function gf(e = [], t = !0) {
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
function yf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ka(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function ur(e, t = !1) {
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
function wf(e, t, n, s) {
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
      const I = typeof D == "function" ? D.call(e, S) : D;
      I && Object.assign(S, I, _);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = S, W = Ka(S.width || i, i);
    T.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, T.width = yf(W < 1 ? Math.round(W * s) : W, b, R), v.forEach((D) => D.call(e, T)), f.push(T), p[T.name] = T;
    const P = A ? A === "left" ? d : u : c;
    P.list.push(T), P.totalWidth += T.width, P.width = P.totalWidth, T.flex && P.flexList.push(T), typeof S.order == "number" && (y = !0);
  }), y) {
    const _ = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return ur(d, !0), ur(u, !0), c.widthSetting = s - d.width - u.width, ur(c), {
    list: f,
    map: p,
    left: d,
    center: c,
    right: u
  };
}
var ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (ra(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wt = (e, t, n) => (ra(e, t, "access private method"), n), Xe, Pn, Pe, zt, Me, J, Ot, It, In, Gs, gi, se, Wn, Dn, jr, wh, Yr, vh, Kr, _h, Xr, bh, js, Jr, oa, aa, Xi, yi, Zr, Qr, la, xh, ca, $h, to, Ch;
let ha = class extends V {
  constructor(t) {
    super(t), H(this, jr), H(this, Yr), H(this, Kr), H(this, Xr), H(this, js), H(this, la), H(this, ca), H(this, to), this.ref = tt(), H(this, Xe, 0), H(this, Pn, void 0), H(this, Pe, !1), H(this, zt, void 0), H(this, Me, void 0), H(this, J, []), H(this, Ot, void 0), H(this, It, /* @__PURE__ */ new Map()), H(this, In, {}), H(this, Gs, void 0), H(this, gi, []), this.updateLayout = () => {
      E(this, Xe) && cancelAnimationFrame(E(this, Xe)), Y(this, Xe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Xe, 0);
      }));
    }, H(this, se, (n, s) => {
      s = s || n.type;
      const i = E(this, It).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Wn, (n) => {
      E(this, se).call(this, n, `window_${n.type}`);
    }), H(this, Dn, (n) => {
      E(this, se).call(this, n, `document_${n.type}`);
    }), H(this, oa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return E(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), H(this, aa, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Xi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), H(this, yi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Zr, (n) => {
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, J).forEach((u) => {
          var f;
          (f = u.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
            return;
          for (const p of E(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
          return;
        for (const p of E(this, J))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
            return;
      }
    }), H(this, Qr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Pn, t.id ?? `dtable-${uc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, Me, Object.freeze(gf(t.plugins))), E(this, Me).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, In), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Ot)) == null ? void 0 : t.options) || E(this, zt) || yh();
  }
  get plugins() {
    return E(this, J);
  }
  get layout() {
    return E(this, Ot);
  }
  get id() {
    return E(this, Pn);
  }
  get data() {
    return E(this, In);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, zt, void 0);
  }
  componentDidMount() {
    if (E(this, Pe) ? this.forceUpdate() : Wt(this, js, Jr).call(this), E(this, J).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, Zr)), this.on("keydown", E(this, Qr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Gs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, J).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Pe) ? Wt(this, js, Jr).call(this) : E(this, J).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, Gs)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, It).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, Wn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, Dn)) : t.removeEventListener(s, E(this, se));
    E(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, Me).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, In, {}), E(this, It).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, It).get(t);
    i ? i.push(n) : (E(this, It).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, Wn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, Dn)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, se)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, Wn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, Dn)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, se)));
  }
  emitCustomEvent(t, n) {
    E(this, se).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
    if (!E(this, zt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Ot, void 0);
    else if (s === "options") {
      if (Y(this, zt, void 0), !E(this, Ot))
        return;
      Y(this, Ot, void 0);
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
    return Yt(E(this, gi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Wt(this, to, Ch).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Wt(this, jr, wh).call(this, t),
      Wt(this, Yr, vh).call(this, t),
      Wt(this, Kr, _h).call(this, t),
      Wt(this, Xr, bh).call(this, t)
    ), E(this, J).forEach((u) => {
      var p;
      const f = (p = u.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: E(this, Pn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
jr = /* @__PURE__ */ new WeakSet();
wh = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      ff,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, Xi),
        onRenderRow: E(this, aa)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    _o,
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
Yr = /* @__PURE__ */ new WeakSet();
vh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ m(
    pf,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, Xi),
      onRenderRow: E(this, oa)
    },
    "rows"
  );
};
Kr = /* @__PURE__ */ new WeakSet();
_h = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    _o,
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
Xr = /* @__PURE__ */ new WeakSet();
bh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      Ya,
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
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      Ya,
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
js = /* @__PURE__ */ new WeakSet();
Jr = function() {
  var e;
  Y(this, Pe, !1), (e = this.options.afterRender) == null || e.call(this), E(this, J).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
oa = /* @__PURE__ */ new WeakMap();
aa = /* @__PURE__ */ new WeakMap();
Xi = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
la = /* @__PURE__ */ new WeakSet();
xh = function() {
  if (E(this, zt))
    return !1;
  const t = { ...yh(), ...E(this, Me).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, E(this, Me).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, zt, t), Y(this, gi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
ca = /* @__PURE__ */ new WeakSet();
$h = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, zt);
  const n = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var W;
    const R = (W = b.beforeLayout) == null ? void 0 : W.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Pe, !0);
      return;
    }
  }
  const r = wf(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, W) => {
    var D, I;
    const P = { data: W ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (W || (P.lazy = !0), h.push(P), ((D = t.onAddRow) == null ? void 0 : D.call(this, P, R)) !== !1) {
      for (const F of e)
        if (((I = F.onAddRow) == null ? void 0 : I.call(this, P, R)) === !1)
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
      _ = 0, Y(this, Pe, !0);
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
  }), Y(this, Ot, T);
};
to = /* @__PURE__ */ new WeakSet();
Ch = function() {
  (Wt(this, la, xh).call(this) || !E(this, Ot)) && Wt(this, ca, $h).call(this);
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
ha.addPlugin = ph;
ha.removePlugin = mh;
function Xa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const vf = {
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
      Xa(this, s);
    },
    mouseleave() {
      Xa(this, !1);
    }
  }
}, _f = ge(vf, { buildIn: !0 });
function bf(e, t, n = !1) {
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
function xf(e) {
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
function $f() {
  return Object.keys(this.state.checkedRows);
}
function Cf(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ja(e, t, n = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const kf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Ja
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
    toggleCheckRows: bf,
    isRowChecked: xf,
    isAllRowChecked: kh,
    getChecks: $f,
    toggleCheckable: Cf
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Ja(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { children: r.join(", ") })
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
    const n = g(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Sf = ge(kf);
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
function Ef(e) {
  return e !== void 0 ? wi.call(this, e) : this.data.nestedMap;
}
function Mf(e, t) {
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
const Tf = {
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
    getNestedInfo: Ef,
    toggleRow: Mf,
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
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), e;
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
}, Rf = ge(Tf);
function Nh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: st(i, t.row.data), ...s, ...r, ...a, children: n });
}
function da(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : st(e, n);
}
function Ah(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), Pr(n, e, s ?? n));
}
function Lh(e, t) {
  const { link: n } = t.col.setting, s = Nh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Ph(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = da(n, t, e[0])), e;
}
function Ih(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Wh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Ah(s, t, e[0], i), e;
}
function eo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : da(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Nf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return eo(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ m("svg", { width: n, height: n, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = Wh(e, t, n)), e = Ih(e, t), e = Ph(e, t), s ? e = eo(e, t) : e = Lh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = st(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Af = ge(Nf, { buildIn: !0 });
function fr(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ m(fc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ m("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ m("span", { children: c })
    ] }));
  return e;
}
const Lf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: fr
    },
    avatarBtn: {
      onRenderCell: fr
    },
    avatarName: {
      onRenderCell: fr
    }
  }
}, Pf = ge(Lf, { buildIn: !0 }), If = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ m("a", { href: st(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Wf = ge(If, { buildIn: !0 }), pr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Df = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    pr(t.left.list), pr(t.center.list), pr(t.right.list);
  }
}, Of = ge(Df), Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Sh,
  avatar: Pf,
  checkable: Sf,
  colHover: _f,
  group: Of,
  nested: Rf,
  renderDatetime: Ah,
  renderDatetimeCell: Wh,
  renderFormat: da,
  renderFormatCell: Ph,
  renderHtmlCell: eo,
  renderLink: Nh,
  renderLinkCell: Lh,
  renderMapCell: Ih,
  rich: Af,
  sortType: Wf
}, Symbol.toStringTag, { value: "Module" }));
class ps extends X {
}
ps.NAME = "DTable";
ps.Component = ha;
ps.definePlugin = ge;
ps.removePlugin = mh;
ps.plugins = Hf;
var Dh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Za = (e, t, n) => (Dh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Bf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qa = (e, t, n, s) => (Dh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Je;
const zf = "nav", Ys = '[data-toggle="tab"]', Ff = "active";
class Oh extends ht {
  constructor() {
    super(...arguments), Bf(this, Je, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Ys);
    let i = t ? g(t).closest(Ys) : s.filter(`.${Ff}`);
    if (!i.length && (i = n.find(Ys).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = g(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Za(this, Je) && clearTimeout(Za(this, Je)), Qa(this, Je, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Qa(this, Je, 0);
    }, 10)));
  }
}
Je = /* @__PURE__ */ new WeakMap();
Oh.NAME = "Tabs";
g(document).on("click.tabs.zui", Ys, (e) => {
  e.preventDefault();
  const t = g(e.target), n = t.closest(`.${zf}`);
  n.length && Oh.ensure(n).active(t);
});
g(() => {
  g(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  g as $,
  zl as ActionMenu,
  Ul as ActionMenuNested,
  pc as Avatar,
  mc as BtnGroup,
  vc as ColorPicker,
  ht as Component,
  X as ComponentFromReact,
  et as ContextMenu,
  Wi as CustomContent,
  _o as CustomRender,
  ps as DTable,
  dh as Dashboard,
  Vt as Dropdown,
  dc as EventBus,
  Il as HElement,
  vo as HtmlContent,
  nt as Icon,
  Vl as Menu,
  cc as Messager,
  bc as Modal,
  Qt as ModalBase,
  kc as ModalTrigger,
  Ec as Nav,
  Mc as Pager,
  Tc as Pick,
  Ic as Picker,
  Wc as Popovers,
  V as ReactComponent,
  Oc as SearchBox,
  hc as Switch,
  Dt as TIME_DAY,
  Oh as Tabs,
  Hc as Toolbar,
  ct as Tooltip,
  sh as Tree,
  ih as Upload,
  df as UploadImgs,
  Ba as calculateTimestamp,
  g as cash,
  M as classes,
  nr as componentsMap,
  Rd as convertBytes,
  Id as create,
  ot as createDate,
  qd as createPortal,
  tt as createRef,
  Md as deepGet,
  Ed as deepGetPath,
  Zs as delay,
  Vf as dom,
  Td as formatBytes,
  Pr as formatDate,
  lp as formatDateSpan,
  st as formatString,
  vl as getClassList,
  cp as getTimeBeforeDesc,
  q as h,
  qf as hh,
  Bd as htm,
  Yt as i18n,
  ap as isDBY,
  us as isSameDay,
  Du as isSameMonth,
  sp as isSameWeek,
  Lr as isSameYear,
  ip as isToday,
  op as isTomorrow,
  Z as isValidElement,
  rp as isYesterday,
  Ia as nativeEvents,
  Kn as render,
  Wl as renderCustomContent,
  Fd as renderCustomResult,
  xu as store,
  _l as storeData,
  Pd as takeData
};
//# sourceMappingURL=zui.js.map
