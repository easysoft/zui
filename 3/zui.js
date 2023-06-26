var Ai = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var E = (e, t, n) => (Ai(e, t, "read from private field"), n ? n.call(e) : t.get(e)), I = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Ai(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var De = (e, t, n) => (Ai(e, t, "access private method"), n);
const Ut = document, Ls = window, Ra = Ut.documentElement, Le = Ut.createElement.bind(Ut), Na = Le("div"), Li = Le("table"), lh = Le("tbody"), Uo = Le("tr"), { isArray: di, prototype: Aa } = Array, { concat: ch, filter: Lr, indexOf: La, map: Pa, push: hh, slice: Wa, some: Pr, splice: uh } = Aa, dh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, fh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ph = /<.+>/, gh = /^\w+$/;
function Wr(e, t) {
  const n = mh(t);
  return !e || !n && !Me(t) && !G(t) ? [] : !n && fh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && gh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class fi {
  constructor(t, n) {
    if (!t)
      return;
    if (ji(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Ut;
      if (s = dh.test(t) && Me(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ph.test(t) ? Oa(t) : ji(i) ? i.find(t) : Q(i) ? m(i).find(t) : Wr(t, i), !s)
        return;
    } else if (Pe(t))
      return this.ready(t);
    (s.nodeType || s === Ls) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new fi(t, n);
  }
}
const x = fi.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = uh;
typeof Symbol == "function" && (x[Symbol.iterator] = Aa[Symbol.iterator]);
function ji(e) {
  return e instanceof fi;
}
function an(e) {
  return !!e && e === e.window;
}
function Me(e) {
  return !!e && e.nodeType === 9;
}
function mh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function yh(e) {
  return !!e && e.nodeType === 3;
}
function wh(e) {
  return typeof e == "boolean";
}
function Pe(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function st(e) {
  return e === void 0;
}
function Bn(e) {
  return e === null;
}
function Da(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Dr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = an;
m.isFunction = Pe;
m.isArray = di;
m.isNumeric = Da;
m.isPlainObject = Dr;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Dr(e)) {
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
m.each = K;
x.each = function(e) {
  return K(this, e);
};
x.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ps(...e) {
  const t = wh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ps(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (di(r[o]) || Dr(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ps(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Ps;
x.extend = function(e) {
  return Ps(x, e);
};
const vh = /\S+/g;
function pi(e) {
  return Q(e) ? e.match(vh) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = pi(e), s = !st(t);
  return this.each((i, r) => {
    G(r) && K(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = pi(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function _h(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Bn(n) ? void 0 : n;
      }
      return st(t) ? this : Bn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = _h;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Pr.call(this, (t) => G(t) && t.classList.contains(e));
};
x.get = function(e) {
  return st(e) ? Wa.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
x.eq = function(e) {
  return m(this.get(e));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function bh(e) {
  return st(e) ? this.get().map((t) => G(t) || yh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
x.text = bh;
function Vt(e, t, n) {
  if (!G(e))
    return;
  const s = Ls.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function bt(e, t) {
  return parseInt(Vt(e, t), 10) || 0;
}
function Vo(e, t) {
  return bt(e, `border${t ? "Left" : "Top"}Width`) + bt(e, `padding${t ? "Left" : "Top"}`) + bt(e, `padding${t ? "Right" : "Bottom"}`) + bt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Pi = {};
function xh(e) {
  if (Pi[e])
    return Pi[e];
  const t = Le(e);
  Ut.body.insertBefore(t, null);
  const n = Vt(t, "display");
  return Ut.body.removeChild(t), Pi[e] = n !== "none" ? n : "block";
}
function qo(e) {
  return Vt(e, "display") === "none";
}
function Ia(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function gi(e) {
  return Q(e) ? (t, n) => Ia(n, e) : Pe(e) ? e : ji(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = gi(e);
  return m(Lr.call(this, (n, s) => t.call(n, s, n)));
};
function ue(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return ue(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const $h = /^\s*<(\w+)[^>]*>/, kh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Go = {
  "*": Na,
  tr: lh,
  td: Uo,
  th: Uo,
  thead: Li,
  tbody: Li,
  tfoot: Li
};
function Oa(e) {
  if (!Q(e))
    return [];
  if (kh.test(e))
    return [Le(RegExp.$1)];
  const t = $h.test(e) && RegExp.$1, n = Go[t] || Go["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Oa;
x.has = function(e) {
  const t = Q(e) ? (n, s) => Wr(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = gi(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Kt(e, t, n, s) {
  const i = [], r = Pe(t), o = s && gi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && hh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ha(e) {
  return e.multiple && e.options ? Kt(Lr.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Ch(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ja.test(n.type)) {
      const i = di(e) ? Pa.call(e, String) : Bn(e) ? [] : [String(e)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = st(e) || Bn(e) ? "" : e;
  }) : this[0] && Ha(this[0]);
}
x.val = Ch;
x.is = function(e) {
  const t = gi(e);
  return Pr.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Ct(e) {
  return e.length > 1 ? Lr.call(e, (t, n, s) => La.call(s, t) === n) : e;
}
m.unique = Ct;
x.add = function(e, t) {
  return m(Ct(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return ue(m(Ct(Kt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return ue(m(Ct(Kt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return La.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return ue(m(Ct(Kt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(Ct(Kt(this, (t) => Wr(e, t))));
};
const Sh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Eh = /^$|^module$|\/(java|ecma)script/i, Mh = ["type", "src", "nonce", "noModule"];
function Th(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Eh.test(i.type) && Ra.contains(i)) {
      const r = Le("script");
      r.text = i.textContent.replace(Sh, ""), K(Mh, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Rh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Th(t, e.ownerDocument);
}
function de(e, t, n, s, i, r, o, a) {
  return K(e, (l, h) => {
    K(m(h), (c, u) => {
      K(m(t), (d, f) => {
        const p = n ? u : f, g = n ? f : u, v = n ? c : d;
        Rh(p, v ? g.cloneNode(!0) : g, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return de(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return de(arguments, this, !1, !1, !0);
};
function Nh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (st(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = Nh;
x.appendTo = function(e) {
  return de(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return de(arguments, this, !1, !0);
};
x.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
x.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(e) {
  return de(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return de(arguments, this, !0, !0);
};
x.prepend = function() {
  return de(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return de(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(Ct(Kt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return ue(m(Ct(Kt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return ue(m(Ct(Kt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return ue(m(Ct(Kt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(ch.apply([], Pa.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Vt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ra;
  });
};
x.slice = function(e, t) {
  return m(Wa.call(this, e, t));
};
const Ah = /-([a-z])/g;
function Ir(e) {
  return e.replace(Ah, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Ut.readyState !== "loading" ? t() : Ut.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Ls.pageYOffset,
    left: t.left + Ls.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Vt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Vt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const r = m(i).offset();
      n.top -= r.top + bt(i, "borderTopWidth"), n.left -= r.left + bt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - bt(e, "marginTop"),
    left: n.left - bt(e, "marginLeft")
  };
};
const Ba = {
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
x.prop = function(e, t) {
  if (e) {
    if (Q(e))
      return e = Ba[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Ba[e] || e];
  });
};
const Lh = /^--/;
function Or(e) {
  return Lh.test(e);
}
const Wi = {}, { style: Ph } = Na, Wh = ["webkit", "moz", "ms"];
function Dh(e, t = Or(e)) {
  if (t)
    return e;
  if (!Wi[e]) {
    const n = Ir(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Wh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Ph)
        return Wi[e] = o, !1;
    });
  }
  return Wi[e];
}
const Ih = {
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
function za(e, t, n = Or(e)) {
  return !n && !Ih[e] && Da(t) ? `${t}px` : t;
}
function Oh(e, t) {
  if (Q(e)) {
    const n = Or(e);
    return e = Dh(e, n), arguments.length < 2 ? this[0] && Vt(this[0], e, n) : e ? (t = za(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Oh;
function Fa(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Hh = /^\s+|\s+$/;
function jo(e, t) {
  const n = e.dataset[t] || e.dataset[Ir(t)];
  return Hh.test(n) ? n : Fa(JSON.parse, n);
}
function Bh(e, t, n) {
  n = Fa(JSON.stringify, n), e.dataset[Ir(t)] = n;
}
function zh(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = jo(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && jo(this[0], e) : st(t) ? this : this.each((n, s) => {
      Bh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = zh;
function Ua(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return an(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Me(this[0]) ? Ua(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? bt(this[0], `margin${n ? "Top" : "Left"}`) + bt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return st(s) ? void 0 : this;
    if (!arguments.length)
      return an(this[0]) ? this[0].document.documentElement[`client${t}`] : Me(this[0]) ? Ua(this[0], t) : this[0].getBoundingClientRect()[n] - Vo(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = Vt(o, "boxSizing");
      o.style[n] = za(n, i + (a === "border-box" ? Vo(o, !e) : 0));
    });
  };
});
const Yo = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = qo(n);
    (st(e) ? s : e) ? (n.style.display = n[Yo] || "", qo(n) && (n.style.display = xh(n.tagName))) : s || (n[Yo] = Vt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Ko = "___ce", Hr = ".", Br = { focus: "focusin", blur: "focusout" }, Va = { mouseenter: "mouseover", mouseleave: "mouseout" }, Fh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function zr(e) {
  return Va[e] || Br[e] || e;
}
function Fr(e) {
  const t = e.split(Hr);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = Fr(e), r = zr(s);
    if (!r)
      return this;
    const o = Fh.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Ut.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Hr), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Br;
  return this.each((s, i) => {
    n && Pe(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function qa(e) {
  return e[Ko] = e[Ko] || {};
}
function Uh(e, t, n, s, i) {
  const r = qa(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Ga(e, t) {
  return !t || !Pr.call(t, (n) => e.indexOf(n) < 0);
}
function Ws(e, t, n, s, i) {
  const r = qa(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Ga(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Ws(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (st(e))
    this.each((s, i) => {
      !G(i) && !Me(i) && !an(i) || Ws(i);
    });
  else if (Q(e))
    Pe(t) && (n = t, t = ""), K(pi(e), (s, i) => {
      const [r, o] = Fr(i), a = zr(r);
      this.each((l, h) => {
        !G(h) && !Me(h) && !an(h) || Ws(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return ue(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function Vh(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (st(t) || Bn(t) ? t = "" : st(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Pe(s) || (s = n, n = void 0), s ? (K(pi(e), (r, o) => {
    const [a, l] = Fr(o), h = zr(a), c = a in Va, u = a in Br;
    h && this.each((d, f) => {
      if (!G(f) && !Me(f) && !an(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Ga(l, g.namespace.split(Hr)) || !t && (u && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = g.target;
          for (; !Ia(_, t); )
            if (_ === f || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, g, g.___td);
        i && Ws(f, h, l, t, p), w === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, Uh(f, h, l, t, p);
    });
  }), this) : this;
}
x.on = Vh;
function qh(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = qh;
const Gh = /\r?\n/g;
function jh(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Gh, `\r
`))}`;
}
const Yh = /file|reset|submit|button|image/i, ja = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Yh.test(i.type) || ja.test(i.type) && !i.checked)
        return;
      const r = Ha(i);
      if (!st(r)) {
        const o = di(r) ? r : [r];
        K(o, (a, l) => {
          e += jh(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function Kh(e, t) {
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
function Xh(e, t, n) {
  try {
    const s = Kh(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function et(e, ...t) {
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
var Ur = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ur || {});
function Jh(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Ur[n]).toFixed(t) + n);
}
const Zh = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Ur[s];
};
let Vr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function Qh() {
  return Vr;
}
function tu(e) {
  Vr = e.toLowerCase();
}
function Ya(e, t) {
  ne || (ne = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ne, e);
}
function qt(e, t, n, s, i, r) {
  Array.isArray(e) ? ne && e.unshift(ne) : e = ne ? [ne, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Vr;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ne ? `${r}.${t}` : t;
    if (a = Xh(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function eu(e, t, n, s) {
  return qt(void 0, e, t, n, s);
}
qt.addLang = Ya;
qt.getLang = eu;
qt.getCode = Qh;
qt.setCode = tu;
Ya({
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
function Ka(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ka(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...e) => Ka(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = T;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const gn = /* @__PURE__ */ new WeakMap();
function Xa(e, t, n) {
  const s = gn.has(e), i = s ? gn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), gn.set(e, i)) : gn.delete(e);
}
function nu(e, t) {
  let n = gn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? nu(this[0], t) : this.each((s, i) => Xa(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => Xa(n, e));
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
const Ds = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function Ja(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= u;
  const f = i <= u && i + o >= 0, p = s <= d && s + r >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Ja(n, e);
  });
};
function qr(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    qr(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    qr(n, e);
  });
};
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Ja,
  runJS: qr
}, Symbol.toStringTag, { value: "Module" }));
var mi, z, Za, Z, _e, Xo, Qa, Yi, Is = {}, tl = [], su = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Gr = Array.isArray;
function ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function el(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? mi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return ws(e, o, s, i, null);
}
function ws(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Za };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function St() {
  return { current: null };
}
function ts(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function zn(e, t) {
  if (t == null)
    return e.__ ? zn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? zn(e) : null;
}
function nl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nl(e);
  }
}
function Jo(e) {
  (!e.__d && (e.__d = !0) && _e.push(e) && !Os.__r++ || Xo !== z.debounceRendering) && ((Xo = z.debounceRendering) || Qa)(Os);
}
function Os() {
  var e, t, n, s, i, r, o, a;
  for (_e.sort(Yi); e = _e.shift(); )
    e.__d && (t = _e.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ae({}, r)).__v = r.__v + 1, jr(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? zn(r), r.__h), al(s, r), r.__e != o && nl(r)), _e.length > t && _e.sort(Yi));
  Os.__r = 0;
}
function sl(e, t, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, g, v, w = s && s.__k || tl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ws(null, f, null, null, f) : Gr(f) ? ws(ts, { children: f }, null, null, null) : f.__b > 0 ? ws(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = w[c]) === null || d && f.key == d.key && f.type === d.type)
        w[c] = void 0;
      else
        for (u = 0; u < _; u++) {
          if ((d = w[u]) && f.key == d.key && f.type === d.type) {
            w[u] = void 0;
            break;
          }
          d = null;
        }
      jr(e, f, d = d || Is, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = il(f, l, e) : l = rl(e, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = zn(d));
    }
  for (n.__e = g, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = ol(s).nextSibling), cl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      ll(v[c], v[++c], v[++c]);
}
function il(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? il(s, t, n) : rl(n, s, s, i, s.__e, t));
  return t;
}
function rl(e, t, n, s, i, r) {
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
function ol(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = ol(n)))
        return s;
  }
  return null;
}
function iu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Hs(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Hs(e, r, t[r], n[r], s);
}
function Zo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || su.test(t) ? n : n + "px";
}
function Hs(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Zo(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Zo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? ta : Qo, r) : e.removeEventListener(t, r ? ta : Qo, r);
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
function Qo(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ta(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function jr(e, t, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, g, v, w, _, $, C, k, M, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = ou), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ae({}, c.__s)), ae(c.__s, A.getDerivedStateFromProps(v, c.__s))), d = c.props, f = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, C = z.__r, k = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (s = ae(ae({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), sl(e, Gr(N = h != null && h.type === ts && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ru(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function al(e, t) {
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
function ru(e, t, n, s, i, r, o, a) {
  var l, h, c, u = n.props, d = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), r = null, a = !1;
  }
  if (f === null)
    u === d || a && e.data === d || (e.data = d);
  else {
    if (r = r && mi.call(e.childNodes), h = (u = n.props || Is).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (iu(e, d, u, i, a), c)
      t.__k = [];
    else if (sl(e, Gr(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && zn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && el(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== u.value) && Hs(e, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && Hs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function ll(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function cl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || ll(s, null, t)), (s = e.__c) != null) {
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
      s[i] && cl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || el(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ou(e, t, n) {
  return this.constructor(e, n);
}
function Fn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], jr(t, e = (!s && n || t).__k = q(ts, null, [e]), i || Is, Is, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? mi.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), al(r, e);
}
mi = tl.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Za = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ae({}, this.state), typeof e == "function" && (e = e(ae({}, n), this.props)), e && ae(n, e), e != null && this.__v && (t && this._sb.push(t), Jo(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Jo(this));
}, V.prototype.render = ts, _e = [], Qa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Os.__r = 0;
var hl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, hl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, ea = /* @__PURE__ */ new Map();
function au(e) {
  var t = ea.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ea.set(this, t)), (t = hl(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(d) {
      r === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, o) : r === 3 && (d || o) ? (l.push(3, d, o), r = 2) : r === 2 && o === "..." && d ? l.push(4, d, 0) : r === 2 && o && !d ? l.push(5, 0, !0, o) : r >= 5 && ((o || !d && r === 5) && (l.push(r, 0, o, i), r = 6), d && (l.push(r, d, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][u + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const ff = au.bind(q);
function lu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, ...o } = e;
  return q(t, { class: T(n), style: s, ...o, ...r }, i);
}
var cu = 0;
function y(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cu, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var jn;
class ul extends V {
  constructor() {
    super(...arguments);
    I(this, jn, St());
  }
  componentDidMount() {
    this.props.executeScript && m(E(this, jn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ y(lu, { ref: E(this, jn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
jn = new WeakMap();
function hu(e) {
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
  } = e, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((g) => {
    const v = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        v.push(...l.call(o, g, f, ...r));
      else {
        const w = g.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(g);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ y("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...c
  }, f];
}
function Yr({
  tag: e = "div",
  ...t
}) {
  const [n, s] = hu(t);
  return q(e, n, ...s);
}
function Un(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ y("i", { className: T(i), ...s });
}
function uu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function du(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Fn(null, t._temp), t._temp = null, t._container = null;
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
  }), Fn(
    q(uu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function fu(e, t) {
  const n = q(du, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var dl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ie = (e, t, n) => (dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (dl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ge, mn, vs, _s;
const fl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    cs(this, ge, void 0), cs(this, mn, void 0), cs(this, vs, void 0), cs(this, _s, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Oe(this, vs, a), Oe(this, mn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Oe(this, ge, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Oe(this, _s, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ie(this, _s);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ie(this, mn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ie(this, ge);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ie(this, vs);
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
    Oe(this, ge, void 0), Oe(this, mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Ie(this, ge), e), Ie(this, ge);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(this._wrapEvent(e));
    return this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(this._wrapEvent(e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(this._wrapEvent(e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(this._wrapEvent(e), t);
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
    return qt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? qt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
let at = fl;
ge = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
at.DEFAULT = {};
at.NAME = fl.name;
at.MULTI_INSTANCE = !1;
class J extends at {
  constructor() {
    super(...arguments), this.ref = St();
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
    Fn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function pu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
function pl({
  type: e,
  component: t = "a",
  className: n,
  children: s,
  attrs: i,
  url: r,
  disabled: o,
  active: a,
  icon: l,
  text: h,
  target: c,
  trailingIcon: u,
  hint: d,
  checked: f,
  onClick: p,
  ...g
}) {
  const v = [
    typeof f == "boolean" ? /* @__PURE__ */ y("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
    /* @__PURE__ */ y(Un, { icon: l }),
    /* @__PURE__ */ y("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ y(Un, { icon: u })
  ];
  return q(t, {
    className: T(n, { disabled: o, active: a }),
    title: d,
    [t === "a" ? "href" : "data-url"]: r,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ...v);
}
function gu({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return q(e, {
    className: T(t),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function mu({
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
    className: T(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function yu({ type: e, ...t }) {
  return /* @__PURE__ */ y(Yr, { ...t });
}
function gl({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
const Ki = class extends V {
  constructor() {
    super(...arguments), this.ref = St();
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
    const { commonItemProps: s, onClickItem: i } = e, r = { ...t };
    return s && Object.assign(r, s[t.type || "item"]), (i || t.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, t.onClick)), r.className = T(r.className), r;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ y(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (Z(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ y(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Ki.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && d.checked === void 0 && (d.checked = !!d.active), this.renderTypedItem(f, {
      className: T(h),
      children: u,
      style: c,
      key: a,
      ...l
    }, {
      ...d,
      type: r,
      component: typeof o == "string" ? o : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: r, ...o } = t;
    return /* @__PURE__ */ y(
      "li",
      {
        className: T(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ y(e, { ...n }),
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
      beforeDestroy: u,
      ...d
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ y(f, { class: T(this.name, i), style: n, ...d, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let We = Ki;
We.ItemComponents = {
  divider: pu,
  item: pl,
  heading: gu,
  space: mu,
  custom: yu,
  basic: gl
};
We.ROOT_TAG = "menu";
We.NAME = "action-menu";
class ml extends J {
}
ml.NAME = "ActionMenu";
ml.Component = We;
function wu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ y(pl, { ...s });
}
var yl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ct = (e, t, n) => (yl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Di = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vu = (e, t, n, s) => (yl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), bs, Tt, yn;
let yi = class extends We {
  constructor(t) {
    super(t), Di(this, bs, /* @__PURE__ */ new Set()), Di(this, Tt, void 0), Di(this, yn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), vu(this, Tt, t.nestedShow === void 0), ct(this, Tt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ct(this, Tt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      level: (u || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ y(s, { ...i, "data-level": i.level });
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
    ct(this, bs).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ct(this, yn).bind(this, r, !0),
        onMouseLeave: ct(this, yn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ct(this, yn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ct(this, Tt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ct(this, Tt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ct(this, bs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[t];
    else if (!!i[t] == !!n)
      return !1;
    return n ? i[t] = n : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  showNestedMenu(t) {
    return this.toggleNestedMenu(t, !0);
  }
  hideNestedMenu(t) {
    return this.toggleNestedMenu(t, !1);
  }
  showAllNestedMenu() {
    ct(this, Tt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ct(this, Tt) && this.setState({ nestedShow: !1 });
  }
};
bs = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
yn = /* @__PURE__ */ new WeakMap();
yi.ItemComponents = {
  item: wu
};
class wl extends J {
}
wl.NAME = "ActionMenuNested";
wl.Component = yi;
let wi = class extends yi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = T(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ y("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
wi.NAME = "menu";
class vl extends J {
}
vl.NAME = "Menu";
vl.Component = wi;
class Gt extends V {
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
      loading: u,
      loadingIcon: d,
      loadingText: f,
      icon: p,
      text: g,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: $,
      ...C
    } = this.props, k = t || (a ? "a" : "button"), M = g == null || typeof g == "string" && !g.length || u && !f, N = w && M && !p && !v && !o && !u;
    return q(
      k,
      {
        className: T("btn", n, r, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !N && !o && M : _
        }, i ? `size-${i}` : ""),
        title: $,
        [k === "a" ? "href" : "data-url"]: a,
        [k === "a" ? "target" : "data-target"]: l,
        type: k === "button" ? s : void 0,
        ...C
      },
      /* @__PURE__ */ y(Un, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      M ? null : /* @__PURE__ */ y("span", { className: "text", children: u ? f : g }),
      u ? null : o,
      u ? null : typeof v == "string" ? /* @__PURE__ */ y("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ y("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function _u({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Gt, { type: n, ...s });
}
function es(e) {
  return e.split("-")[1];
}
function Kr(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return e.split("-")[0];
}
function ns(e) {
  return ["top", "bottom"].includes(ke(e)) ? "x" : "y";
}
function na(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ns(t), l = Kr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (ke(t)) {
    case "top":
      u = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: r, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: o };
      break;
    case "left":
      u = { x: s.x - i.width, y: o };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (es(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const bu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = na(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, f = { ...f, [v]: { ...f[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = na(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function ss(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _l(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Bs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function bl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ss(t, e), p = _l(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = Bs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = Bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const Xi = Math.min, xu = Math.max;
function Ji(e, t, n) {
  return xu(e, Xi(t, n));
}
const Zi = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ss(e, t) || {};
  if (l == null)
    return {};
  const c = _l(h), u = { x: n, y: s }, d = ns(i), f = Kr(d), p = await o.getDimensions(l), g = d === "y", v = g ? "top" : "left", w = g ? "bottom" : "right", _ = g ? "clientHeight" : "clientWidth", $ = r.reference[f] + r.reference[d] - u[d] - r.floating[f], C = u[d] - r.reference[d], k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let M = k ? k[_] : 0;
  M && await (o.isElement == null ? void 0 : o.isElement(k)) || (M = a.floating[_] || r.floating[f]);
  const N = $ / 2 - C / 2, A = M / 2 - p[f] / 2 - 1, O = Xi(c[v], A), b = Xi(c[w], A), R = O, W = M - p[f] - b, L = M / 2 - p[f] / 2 + N, D = Ji(R, L, W), P = es(i) != null && L != D && r.reference[f] / 2 - (L < R ? O : b) - p[f] / 2 < 0 ? L < R ? R - L : W - L : 0;
  return { [d]: u[d] - P, data: { [d]: D, centerOffset: L - D + P } };
} }), $u = ["top", "right", "bottom", "left"];
$u.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ku = { left: "right", right: "left", bottom: "top", top: "bottom" };
function zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ku[t]);
}
function Cu(e, t, n) {
  n === void 0 && (n = !1);
  const s = es(e), i = ns(e), r = Kr(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = zs(o)), { main: o, cross: zs(o) };
}
const Su = { start: "end", end: "start" };
function Ii(e) {
  return e.replace(/start|end/g, (t) => Su[t]);
}
const vi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = ss(e, t), v = ke(s), w = ke(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [zs(o)] : function(R) {
      const W = zs(R);
      return [Ii(R), W, Ii(W)];
    }(o));
    u || f === "none" || $.push(...function(R, W, L, D) {
      const P = es(R);
      let F = function(lt, Et, as) {
        const hn = ["left", "right"], ls = ["right", "left"], Ni = ["top", "bottom"], ah = ["bottom", "top"];
        switch (lt) {
          case "top":
          case "bottom":
            return as ? Et ? ls : hn : Et ? hn : ls;
          case "left":
          case "right":
            return Et ? Ni : ah;
          default:
            return [];
        }
      }(ke(R), L === "start", D);
      return P && (F = F.map((lt) => lt + "-" + P), W && (F = F.concat(F.map(Ii)))), F;
    }(o, p, f, _));
    const C = [o, ...$], k = await bl(t, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: R, cross: W } = Cu(s, r, _);
      M.push(k[R], k[W]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, W = C[R];
      if (W)
        return { data: { index: R, overflows: N }, reset: { placement: W } };
      let L = (O = N.filter((D) => D.overflows[0] <= 0).sort((D, P) => D.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!L)
        switch (d) {
          case "bestFit": {
            var b;
            const D = (b = N.map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, lt) => F + lt, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : b[0];
            D && (L = D);
            break;
          }
          case "initialPlacement":
            L = o;
        }
      if (s !== L)
        return { reset: { placement: L } };
    }
    return {};
  } };
}, Xr = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = ke(a), d = es(a), f = ns(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = ss(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Eu(e) {
  return e === "x" ? "y" : "x";
}
const Qi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ss(e, t), h = { x: n, y: s }, c = await bl(t, l), u = ns(ke(i)), d = Eu(u);
    let f = h[u], p = h[d];
    if (r) {
      const v = u === "y" ? "bottom" : "right";
      f = Ji(f + c[u === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = d === "y" ? "bottom" : "right";
      p = Ji(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    const g = a.fn({ ...t, [u]: f, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  return ot(e).getComputedStyle(e);
}
function xl(e) {
  return e instanceof ot(e).Node;
}
function ce(e) {
  return xl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gt(e) {
  return e instanceof ot(e).HTMLElement;
}
function Ht(e) {
  return e instanceof ot(e).Element;
}
function sa(e) {
  return typeof ShadowRoot < "u" && (e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot);
}
function Vn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Mu(e) {
  return ["table", "td", "th"].includes(ce(e));
}
function tr(e) {
  const t = Jr(), n = ft(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Jr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function _i(e) {
  return ["html", "body", "#document"].includes(ce(e));
}
const ia = Math.min, Nn = Math.max, Fs = Math.round, hs = Math.floor, Te = (e) => ({ x: e, y: e });
function $l(e) {
  const t = ft(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = gt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = Fs(n) !== r || Fs(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function Zr(e) {
  return Ht(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = Zr(e);
  if (!gt(t))
    return Te(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = $l(t);
  let o = (r ? Fs(n.width) : n.width) / s, a = (r ? Fs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const ra = Te(0);
function kl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Jr())
    return ra;
  const r = e ? ot(e) : window;
  return !n || t && n !== r ? ra : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Re(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Zr(e);
  let o = Te(1);
  t && (s ? Ht(s) && (o = Xe(s)) : o = Xe(e));
  const a = kl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, u = i.height / o.y;
  if (r) {
    const d = ot(r), f = s && Ht(s) ? ot(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const g = Xe(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, h *= g.y, c *= g.x, u *= g.y, l += _, h += $, p = ot(p).frameElement;
    }
  }
  return Bs({ width: c, height: u, x: l, y: h });
}
function Bt(e) {
  return ((xl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function bi(e) {
  return Ht(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Cl(e) {
  return Re(Bt(e)).left + bi(e).scrollLeft;
}
function ln(e) {
  if (ce(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || sa(e) && e.host || Bt(e);
  return sa(t) ? t.host : t;
}
function Sl(e) {
  const t = ln(e);
  return _i(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gt(t) && Vn(t) ? t : Sl(t);
}
function Us(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Sl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ot(s);
  return i ? t.concat(r, r.visualViewport || [], Vn(s) ? s : []) : t.concat(s, Us(s));
}
function oa(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ot(i), a = Bt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = Jr();
        (!f || f && r === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Bt(i), o = bi(i), a = i.ownerDocument.body, l = Nn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Nn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Cl(i);
      const u = -o.scrollTop;
      return ft(a).direction === "rtl" && (c += Nn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Bt(e));
  else if (Ht(t))
    s = function(i, r) {
      const o = Re(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = gt(i) ? Xe(i) : Te(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = kl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Bs(s);
}
function El(e, t) {
  const n = ln(e);
  return !(n === t || !Ht(n) || _i(n)) && (ft(n).position === "fixed" || El(n, t));
}
function aa(e, t) {
  return gt(e) && ft(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function la(e, t) {
  const n = ot(e);
  if (!gt(e))
    return n;
  let s = aa(e, t);
  for (; s && Mu(s) && ft(s).position === "static"; )
    s = aa(s, t);
  return s && (ce(s) === "html" || ce(s) === "body" && ft(s).position === "static" && !tr(s)) ? n : s || function(i) {
    let r = ln(i);
    for (; gt(r) && !_i(r); ) {
      if (tr(r))
        return r;
      r = ln(r);
    }
    return null;
  }(e) || n;
}
function Tu(e, t, n) {
  const s = gt(t), i = Bt(t), r = n === "fixed", o = Re(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Te(0);
  if (s || !s && !r)
    if ((ce(t) !== "body" || Vn(i)) && (a = bi(t)), gt(t)) {
      const h = Re(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Cl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Ru = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Us(h).filter((v) => Ht(v) && ce(v) !== "body"), f = null;
    const p = ft(h).position === "fixed";
    let g = p ? ln(h) : h;
    for (; Ht(g) && !_i(g); ) {
      const v = ft(g), w = tr(g);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Vn(g) && !w && El(h, g)) ? d = d.filter((_) => _ !== g) : f = v, g = ln(g);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = oa(t, c, i);
    return h.top = Nn(u.top, h.top), h.right = ia(u.right, h.right), h.bottom = ia(u.bottom, h.bottom), h.left = Nn(u.left, h.left), h;
  }, oa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = gt(n), r = Bt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Te(1);
  const l = Te(0);
  if ((i || !i && s !== "fixed") && ((ce(n) !== "body" || Vn(r)) && (o = bi(n)), gt(n))) {
    const h = Re(n);
    a = Xe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ht, getDimensions: function(e) {
  return $l(e);
}, getOffsetParent: la, getDocumentElement: Bt, getScale: Xe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || la, r = this.getDimensions;
  return { reference: Tu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ft(e).direction === "rtl" };
function Qr(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Zr(e), c = i || r ? [...h ? Us(h) : [], ...Us(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }), r && g.addEventListener("resize", n);
  });
  const u = h && a ? function(g, v) {
    let w, _ = null;
    const $ = Bt(g);
    function C() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function k(M, N) {
      M === void 0 && (M = !1), N === void 0 && (N = 1), C();
      const { left: A, top: O, width: b, height: R } = g.getBoundingClientRect();
      if (M || v(), !b || !R)
        return;
      const W = hs(O), L = hs($.clientWidth - (A + b)), D = hs($.clientHeight - (O + R)), P = hs(A);
      let F = !0;
      _ = new IntersectionObserver((lt) => {
        const Et = lt[0].intersectionRatio;
        if (Et !== N) {
          if (!F)
            return k();
          Et === 0 ? w = setTimeout(() => {
            k(!1, 1e-7);
          }, 100) : k(!1, Et);
        }
        F = !1;
      }, { rootMargin: -W + "px " + -L + "px " + -D + "px " + -P + "px", threshold: N }), _.observe(g);
    }(!0), C;
  }(h, n) : null;
  let d, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? Re(e) : null;
  return l && function g() {
    const v = Re(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, d = requestAnimationFrame(g);
  }(), n(), () => {
    c.forEach((g) => {
      i && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const xi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Ru, ...n }, r = { ...i.platform, _c: s };
  return bu(e, t, { ...i, platform: r });
};
let Nu = class extends wi {
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
      middleware: [vi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && xi(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
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
    return t.className = T(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var to = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (to(e, t, "read from private field"), n ? n.call(e) : t.get(e)), He = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, us = (e, t, n, s) => (to(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ca = (e, t, n) => (to(e, t, "access private method"), n), Zt, wn, xs, $s, er, Ml, nr, Tl;
const Oi = "show", Au = '[data-toggle="contextmenu"]';
class tt extends at {
  constructor() {
    super(...arguments), He(this, er), He(this, nr), He(this, Zt, void 0), He(this, wn, void 0), He(this, xs, void 0), He(this, $s, void 0);
  }
  get isShown() {
    return Mt(this, Zt) && m(Mt(this, Zt)).hasClass(Oi);
  }
  get menu() {
    return Mt(this, Zt) || this.ensureMenu();
  }
  get trigger() {
    return Mt(this, xs) || this.element;
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
    return this.isShown || (us(this, xs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Oi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Mt(this, $s)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Mt(this, Zt)).removeClass(Oi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Mt(this, Zt)) == null || t.remove();
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
      s && s.addClass("menu-popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), us(this, Zt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(vi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    us(this, $s, Qr(n, s, () => {
      xi(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ca(this, er, Ml).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ca(this, nr, Tl).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Fn(q(Nu, t), this.menu), !0);
  }
  getPopperElement() {
    return Mt(this, wn) || us(this, wn, {
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
    }), Mt(this, wn);
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
Zt = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
$s = /* @__PURE__ */ new WeakMap();
er = /* @__PURE__ */ new WeakSet();
Ml = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
nr = /* @__PURE__ */ new WeakSet();
Tl = function(e) {
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
tt.MENU_CLASS = "contextmenu";
tt.NAME = "ContextMenu";
tt.MULTI_INSTANCE = !0;
tt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${tt.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${tt.MENU_CLASS}`).length)
    return;
  const n = t.closest(Au).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), r = tt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var eo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => (eo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ds = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, sr = (e, t, n, s) => (eo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lu = (e, t, n) => (eo(e, t, "access private method"), n), An, _n, Vs, ir, Rl;
const ha = '[data-toggle="dropdown"]', Nl = class extends tt {
  constructor() {
    super(...arguments), ds(this, ir), ds(this, An, !1), ds(this, _n, 0), this.hideLater = () => {
      vn(this, Vs).call(this), sr(this, _n, window.setTimeout(this.hide.bind(this), 100));
    }, ds(this, Vs, () => {
      clearTimeout(vn(this, _n)), sr(this, _n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Nl.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!vn(this, An) && this.isHover && Lu(this, ir, Rl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    vn(this, An) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Xr(t)), (s = e.middleware) == null || s.push(Zi({ element: this.arrowEl }))), e;
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
let zt = Nl;
An = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakSet();
Rl = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, vn(this, Vs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), sr(this, An, !0);
};
zt.MENU_CLASS = "dropdown-menu";
zt.NAME = "Dropdown";
zt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const fs = `${zt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(ha).not(":disabled,.disabled");
  if (!t.length) {
    zt.clear({ event: e });
    return;
  }
  const n = t.data(fs), s = zt.ensure(t, n);
  n || t.data(fs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(ha);
  if (!t.length)
    return;
  const n = t.data(fs), s = zt.ensure(t, n);
  n || t.data(fs, s.options), s.isHover && s.show();
});
let ps = 0;
window.addEventListener("scroll", (e) => {
  ps && clearTimeout(ps), ps = window.setTimeout(() => {
    zt.clear({ event: e }), ps = 0;
  }, 50);
}, !0);
var Yn, tn;
class Pu extends V {
  constructor(n) {
    var s;
    super(n);
    I(this, Yn, void 0);
    I(this, tn, St());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, tn);
  }
  get triggerElement() {
    return E(this, tn).current;
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
    }), B(this, Yn, zt.ensure(this.triggerElement, {
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
    (n = E(this, Yn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, tn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
Yn = new WeakMap(), tn = new WeakMap();
class Wu extends Pu {
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
    return s.caret = i, /* @__PURE__ */ y(Gt, { ...s });
  }
}
function Al({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Wu, { type: n, ...s });
}
let Ll = class extends V {
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
    return /* @__PURE__ */ y(Gt, { ...i }, s);
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
      afterRender: u,
      beforeDestroy: d,
      ...f
    } = t;
    return /* @__PURE__ */ y(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Du({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Ll, { type: n, ...s });
}
let mt = class extends We {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = T(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: T(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ y(t, { ...a });
  }
};
mt.ItemComponents = {
  item: _u,
  dropdown: Al,
  "btn-group": Du
};
mt.ROOT_TAG = "nav";
mt.NAME = "toolbar";
mt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Iu({
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
  let u;
  a === !0 ? u = /* @__PURE__ */ y(Gt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ y("span", { class: "close" }) }) : Z(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ y(Gt, { ...a, onClick: l }));
  const d = Z(n) ? n : n ? /* @__PURE__ */ y(mt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: T("alert", e), style: t, ...c, children: [
    Z(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    Z(i) ? i : /* @__PURE__ */ y("div", { className: T("alert-content", r), children: [
      Z(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ y("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function Ou(e) {
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
let Hu = class extends V {
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
    return /* @__PURE__ */ y(
      Iu,
      {
        className: T("messager", l, i, o === !0 ? Ou(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Bu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, zu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, un = (e, t, n) => (Bu(e, t, "access private method"), n), me, Ue;
class no extends J {
  constructor() {
    super(...arguments), zu(this, me), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), un(this, me, Ue).call(this, () => {
      this._show = !0, this.render(), un(this, me, Ue).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && un(this, me, Ue).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && un(this, me, Ue).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), un(this, me, Ue).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
me = /* @__PURE__ */ new WeakSet();
Ue = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
no.NAME = "MessagerItem";
no.Component = Hu;
var so = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ce = (e, t, n) => (so(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ks = (e, t, n, s) => (so(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pl = (e, t, n) => (so(e, t, "access private method"), n), Je, It, rr, Wl, io, Dl;
const Il = class extends at {
  constructor() {
    super(...arguments), gs(this, rr), gs(this, io), gs(this, Je, void 0), gs(this, It, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ce(this, It)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Pl(this, rr, Wl).call(this).show();
  }
  hide() {
    var e;
    (e = Ce(this, It)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Il.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let ro = Il;
Je = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
rr = /* @__PURE__ */ new WeakSet();
Wl = function() {
  if (Ce(this, It))
    Ce(this, It).setOptions(this.options);
  else {
    const e = Pl(this, io, Dl).call(this), t = new no(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), ks(this, Je, void 0), ks(this, It, void 0);
    }), ks(this, It, t);
  }
  return Ce(this, It);
};
io = /* @__PURE__ */ new WeakSet();
Dl = function() {
  if (Ce(this, Je))
    return Ce(this, Je);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), ks(this, Je, n[0])), n[0];
};
ro.NAME = "messager";
ro.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && ro.show(t);
});
let oo = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(t) })
    ] });
  }
};
oo.NAME = "zui.progress-circle";
oo.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Ol extends J {
}
Ol.NAME = "ProgressCircle";
Ol.Component = oo;
let Fu = class extends V {
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
    } = this.props, u = this.state.checked ? 1 : 0, d = t || "div", f = typeof r == "string" ? /* @__PURE__ */ y("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ y("i", { class: `icon ${o}` }) : o, g = [
      /* @__PURE__ */ y("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ y("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      d,
      {
        className: T("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...g,
      s
    );
  }
};
class Hl extends J {
}
Hl.NAME = "Switch";
Hl.Component = Fu;
class Bl extends J {
}
Bl.NAME = "BtnGroup";
Bl.Component = Ll;
class Uu extends at {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Zh(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, limitSize: i, btnClass: r, tipText: o, draggable: a } = this.options;
    this.$list = m('<div class="file-list py-1"></div>');
    const l = i ? m(`<span class="upload-tip">${o == null ? void 0 : o.replace("%s", i)}</span>`) : null;
    if (!a) {
      this.$label = m(`<label class="btn ${r}" for="${t}">${n}</label>`);
      const c = s === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(l), this.bindDragEvent();
    const h = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...h);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault();
    }).on("dragleave", (t) => {
      t.preventDefault();
    }).on("drop", (t) => {
      var s;
      t.preventDefault();
      const n = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      this.addFileItem(n);
    });
  }
  initInputCash() {
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (r) => {
      const o = r.target.files;
      if (!o)
        return;
      const a = [...o];
      this.addFileItem(a), i == null || i(a);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    this.options.multiple || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size;
  }
  addFileItem(t) {
    const { multiple: n, limitCount: s } = this.options;
    if (n) {
      for (const o of t) {
        if (s && this.fileMap.size >= s || this.currentBytes + o.size > this.limitBytes)
          return;
        this.addFile(o);
        const a = this.createFileItem(o);
        this.itemMap.set(o.name, a), this.$list.append(a);
      }
      return;
    }
    const i = t[0];
    if (i.size > this.limitBytes)
      return;
    this.addFile(i);
    const r = this.createFileItem(i);
    this.itemMap.clear(), this.itemMap.set(i.name, r), this.$list.empty().append(r);
  }
  deleteFile(t) {
    var n, s;
    (s = (n = this.options).onDelete) == null || s.call(n, t), this.fileMap.delete(t.name), this.currentBytes -= t.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((i) => this.dataTransfer.items.add(i)), this.$input.prop("files", this.dataTransfer.files);
  }
  deleteFileItem(t) {
    var i;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    s && ((i = this.itemMap.get(s.name)) == null || i.remove(), this.itemMap.delete(s.name), this.deleteFile(s));
  }
  renameFile(t, n) {
    var s, i;
    (i = (s = this.options).onRename) == null || i.call(s, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((r) => this.dataTransfer.items.add(r)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, n) {
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, n), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(n, i).delete(t.name), this.renameFile(t, n));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.fileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  fileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${Jh(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: r, renameText: o, deleteBtn: a, deleteText: l } = this.options;
    return r && i.append(
      m("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(o).on("click", (h) => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
        const c = m(h.target).closest("li").find("input")[0];
        c.focus(), c.value.lastIndexOf(".") !== -1 && c.setSelectionRange(0, c.value.lastIndexOf("."));
      })
    ), a && i.append(
      m("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s } = this.options, i = m('<div class="input-group hidden"></div>'), r = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (h) => {
      h.key === "Enter" ? (i.addClass("hidden"), this.renameFileItem(t, r.val()), i.closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val())) : h.key === "Escape" && (r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), o = m("<button />").addClass("btn rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      i.addClass("hidden"), this.renameFileItem(t, r.val()), i.closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val());
    }), a = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = m('<div class="btn-group"></div').append(o).append(a);
    return i.append(r).append(l);
  }
}
Uu.DEFAULT = {
  uploadText: "上传文件",
  renameText: "重命名",
  deleteText: "删除",
  confirmText: "确定",
  cancelText: "取消",
  tipText: "（不超过 %s）",
  renameBtn: !0,
  deleteBtn: !0,
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  draggable: !1
};
var Dt;
class Vu {
  constructor(t = "") {
    I(this, Dt, void 0);
    typeof t == "object" ? B(this, Dt, t) : B(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    E(this, Dt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    E(this, Dt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    E(this, Dt).removeEventListener(t, n, s);
  }
  emit(t) {
    return E(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const ua = /* @__PURE__ */ new Set([
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
class zl extends Vu {
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
    return typeof t == "string" && (ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(zl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Fl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Kn, se, vt, en, nn, Cs;
const Fo = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    I(this, nn);
    I(this, Kn, void 0);
    I(this, se, void 0);
    I(this, vt, void 0);
    I(this, en, void 0);
    B(this, Kn, n), B(this, se, `ZUI_STORE:${t ?? Fl()}`), B(this, vt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, Kn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, en) || B(this, en, new Fo(E(this, se), "session")), E(this, en));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = E(this, vt).getItem(De(this, nn, Cs).call(this, t));
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
    E(this, vt).setItem(De(this, nn, Cs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    E(this, vt).removeItem(De(this, nn, Cs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < E(this, vt).length; n++) {
      const s = E(this, vt).key(n);
      if (s != null && s.startsWith(E(this, se))) {
        const i = E(this, vt).getItem(s);
        typeof i == "string" && t(s.substring(E(this, se).length + 1), JSON.parse(i));
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
let qs = Fo;
Kn = new WeakMap(), se = new WeakMap(), vt = new WeakMap(), en = new WeakMap(), nn = new WeakSet(), Cs = function(t) {
  return `${E(this, se)}:${t}`;
};
const qu = new qs("DEFAULT");
function Gu(e, t = "local") {
  return new qs(e, t);
}
Object.assign(qu, { create: Gu });
function ju(e) {
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
function Yu(e) {
  const [t, n, s] = typeof e == "string" ? ju(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function da(e, t) {
  return Yu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function fa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Ku(e, t, n) {
  e = e % 360 / 360, t = fa(t), n = fa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Xu(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Ju(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Ul = class extends V {
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
      src: u,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: g,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ y("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const k = Ju(l, c);
      if (w.push("has-text", `has-text-${k.length}`), o)
        !a && o && (_.color = da(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Xu(N)) * d % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = Ku(A, f, p);
          _.color = da(O);
        }
      }
      let M;
      $ && $ < 14 * k.length && (M = { transform: `scale(${$ / (14 * k.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ y("div", { "data-actualSize": $, className: "avatar-text", style: M, children: k });
    }
    return /* @__PURE__ */ y(
      "div",
      {
        className: T(w),
        style: _,
        ...v,
        children: [
          C,
          g
        ]
      }
    );
  }
};
class Vl extends J {
}
Vl.NAME = "Avatar";
Vl.Component = Ul;
var ao = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, be = (e, t, n) => (ao(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ln = (e, t, n, s) => (ao(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Hi = (e, t, n) => (ao(e, t, "access private method"), n), Ge, Ss, ye, or, bn, Es;
const Bi = "show", pa = "in", Zu = '[data-dismiss="modal"]', xn = class extends at {
  constructor() {
    super(...arguments), dn(this, bn), dn(this, Ge, 0), dn(this, Ss, void 0), dn(this, ye, void 0), dn(this, or, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Zu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Bi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", be(this, or)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!be(this, ye) || be(this, ye)[0] !== n || be(this, ye)[1] !== s) && (Ln(this, ye, [n, s]), this.layout());
        });
        t.observe(e), Ln(this, Ss, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = be(this, Ss)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${xn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Bi, i).css({
      zIndex: `${xn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Hi(this, bn, Es).call(this, () => {
      m(t).addClass(pa), Hi(this, bn, Es).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(pa), this.emit("hide"), Hi(this, bn, Es).call(this, () => {
      m(this.modalElement).removeClass(Bi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    t = t ?? this.options.size, m(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof t == "object" ? (s.width = t.width, s.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? m(n).attr("data-size", t) : t && (s.width = t), m(n).css(s), e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Ln(this, ye, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (o.alignSelf = "flex-start", o.top = e) : typeof e == "object" && e ? (o.alignSelf = "flex-start", Object.assign(o, e)) : e === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? o.alignSelf = "flex-end" : e === "top" ? o.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (o.alignSelf = "flex-start", o.top = e), m(n).css(o), m(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = xn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = xn.query(e)) == null || t.show();
  }
};
let Xt = xn;
Ge = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakMap();
or = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakSet();
Es = function(e, t) {
  be(this, Ge) && (clearTimeout(be(this, Ge)), Ln(this, Ge, 0)), e && (this.options.animation ? Ln(this, Ge, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Xt.NAME = "Modal";
Xt.MULTI_INSTANCE = !0;
Xt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Xt.zIndex = 2e3;
m(window).on("resize.modal.zui", () => {
  Xt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Xt.hide(t == null ? void 0 : t.target);
});
class ql extends V {
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
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-header", children: /* @__PURE__ */ y("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Z(t) ? t : /* @__PURE__ */ y("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ y(mt, { ...t }) : null,
      n ? /* @__PURE__ */ y("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ y("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ y("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-footer", children: n ? /* @__PURE__ */ y(mt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ y("div", { className: T("modal-dialog", t), style: n, children: /* @__PURE__ */ y("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
ql.defaultProps = { closeBtn: !0 };
var sn, rn, on;
class Qu extends V {
  constructor() {
    super(...arguments);
    I(this, sn, void 0);
    I(this, rn, void 0);
    I(this, on, void 0);
    B(this, sn, St()), this.state = {}, B(this, on, () => {
      var i, r;
      const n = (r = (i = E(this, sn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, rn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, rn, s);
    });
  }
  componentDidMount() {
    E(this, on).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, rn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, sn),
        onLoad: E(this, on)
      }
    );
  }
}
sn = new WeakMap(), rn = new WeakMap(), on = new WeakMap();
var lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, wt = (e, t, n) => (lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => (lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ms = (e, t, n) => (lo(e, t, "access private method"), n), Qt, $n, Rt, Gs, co, Ts, ar;
function td(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function ed(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (n !== "html")
    try {
      const u = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...u
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ y(ul, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function nd(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ y(Qu, { url: n })
  };
}
const sd = {
  custom: td,
  ajax: ed,
  iframe: nd
}, zi = "loading", kn = class extends Xt {
  constructor() {
    super(...arguments), fn(this, Gs), fn(this, Ts), fn(this, Qt, void 0), fn(this, $n, void 0), fn(this, Rt, void 0);
  }
  get id() {
    return wt(this, $n);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(zi);
  }
  get shown() {
    var e;
    return !!((e = wt(this, Qt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = wt(this, Qt);
    if (!e) {
      const { options: t } = this;
      let n = wt(this, $n);
      n || (n = t.id || `modal-${m.guid++}`, Be(this, $n, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Be(this, Qt, e);
    }
    return e;
  }
  get $emitter() {
    const e = wt(this, Qt);
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
    const e = wt(this, Qt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Be(this, Qt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    wt(this, Rt) && clearTimeout(wt(this, Rt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = sd[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(zi), i && Be(this, Rt, window.setTimeout(() => {
      Be(this, Rt, 0), Ms(this, Ts, ar).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Ms(this, Ts, ar).call(this, this.options.failedTip) : a && typeof a == "object" && await Ms(this, Gs, co).call(this, a), wt(this, Rt) && (clearTimeout(wt(this, Rt)), Be(this, Rt, 0)), await Ds(100), n.removeClass(zi), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = kn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = /* @__PURE__ */ y("div", { children: n });
    s ? c = /* @__PURE__ */ y("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ y("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ y("div", { className: "modal-body", children: c });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = qt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let d;
    const f = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: g }) => {
        const v = kn.query(g.target, l);
        d = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await kn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: f, ...typeof a == "function" ? a() : a },
      ...h
    }), d;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await kn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let Gl = kn;
Qt = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakSet();
co = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], m(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Fn(
      /* @__PURE__ */ y(ql, { ...e }),
      this.modalElement
    );
  });
};
Ts = /* @__PURE__ */ new WeakSet();
ar = function(e) {
  if (e)
    return Ms(this, Gs, co).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: e })
    });
};
Gl.DEFAULT = {
  ...Xt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var ho = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, lr = (e, t, n) => (ho(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ms = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ga = (e, t, n, s) => (ho(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), cr = (e, t, n) => (ho(e, t, "access private method"), n), Se, uo, jl, hr, Yl, fo, Kl;
const id = '[data-toggle="modal"]';
class Xl extends at {
  constructor() {
    super(...arguments), ms(this, uo), ms(this, hr), ms(this, fo), ms(this, Se, void 0);
  }
  get modal() {
    return lr(this, Se);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = cr(this, hr, Yl).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = lr(this, Se)) == null ? void 0 : t.hide();
  }
}
Se = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakSet();
jl = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
hr = /* @__PURE__ */ new WeakSet();
Yl = function() {
  const e = cr(this, uo, jl).call(this);
  let t = lr(this, Se);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = cr(this, fo, Kl).call(this);
    if (!n)
      return;
    t = Xt.ensure(n, e);
  } else
    t = Gl.ensure(this.container, e);
  return ga(this, Se, t), t.on("destroyed", () => {
    ga(this, Se, void 0);
  }), t;
};
fo = /* @__PURE__ */ new WeakSet();
Kl = function() {
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
Xl.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, id);
  if (n) {
    const i = Xl.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let Jl = class extends We {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Jl.NAME = "nav";
class Zl extends J {
}
Zl.NAME = "Nav";
Zl.Component = Jl;
function qn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function rd({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = qn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : et(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ y(Gt, { type: n, ...a });
}
const Pt = 24 * 60 * 60 * 1e3, it = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), is = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ur = (e, t = /* @__PURE__ */ new Date()) => it(e).getFullYear() === it(t).getFullYear(), od = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), kf = (e, t = /* @__PURE__ */ new Date()) => {
  e = it(e), t = it(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Cf = (e, t) => is(it(t), e), Sf = (e, t) => is(it(t).getTime() - Pt, e), Ef = (e, t) => is(it(t).getTime() + Pt, e), Mf = (e, t) => is(it(t).getTime() - 2 * Pt, e), dr = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = it(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", ur(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Tf = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = dr(e, ur(e) ? s.month : s.full);
  if (is(e, t))
    return i;
  const r = dr(t, ur(e, t) ? od(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Rf = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Pt * 7;
    case "oneMonth":
      return t - Pt * 31;
    case "threeMonth":
      return t - Pt * 31 * 3;
    case "halfYear":
      return t - Pt * 183;
    case "oneYear":
      return t - Pt * 365;
    case "twoYear":
      return t - 2 * (Pt * 365);
    default:
      return 0;
  }
}, ma = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ma(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, ma(e, "day", n, s);
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
function ad({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = qn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ y(gl, { ...o, children: [
    r,
    s
  ] });
}
function ld({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ y(Gt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let g = d; g <= f; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const v = qn(i, g);
      o && (l.url = typeof o == "function" ? o(v) : et(o, v)), p.push(/* @__PURE__ */ y(Gt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function cd({
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
      url: typeof n == "function" ? n(c) : et(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ y(Al, { type: "dropdown", dropdown: i, ...o });
}
function hd({
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
  let u;
  const d = (g) => {
    var v;
    u = Number((v = g.target) == null ? void 0 : v.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const v = qn(i, u);
    a && !a({ info: v, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(v) : et(l, v));
  }, p = qn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ y("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ y(Gt, { type: s, ...c, onClick: f })
  ] });
}
let $i = class extends mt {
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
$i.NAME = "pager";
$i.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
$i.ItemComponents = {
  ...mt.ItemComponents,
  link: rd,
  info: ad,
  nav: ld,
  "size-menu": cd,
  goto: hd
};
class Ql extends J {
}
Ql.NAME = "Pager";
Ql.Component = $i;
class po extends V {
  constructor() {
    super(...arguments), this._handleClick = (t) => {
      t.stopPropagation(), !m(t.target).closest("a,.btn,input").length && this.props.togglePop();
    };
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i } = t;
    return T(
      "pick",
      n,
      s && "is-open focus",
      i && "disabled"
    );
  }
  _renderTrigger() {
    const { children: t, state: n } = this.props;
    return t ?? n.value;
  }
  _renderValue() {
    const { name: t, state: n } = this.props;
    return t ? /* @__PURE__ */ y("input", { type: "hidden", className: "pick-value", name: t, value: n.value }) : null;
  }
  render(t) {
    const { id: n, style: s } = t;
    return /* @__PURE__ */ y(
      "div",
      {
        id: `pick-${n}`,
        className: this._getClass(),
        style: s,
        tabIndex: -1,
        onClick: this._handleClick,
        children: [
          this._renderTrigger(),
          this._renderValue()
        ]
      }
    );
  }
}
var $e, _t, ie;
class tc extends V {
  constructor() {
    super(...arguments);
    I(this, $e, void 0);
    I(this, _t, void 0);
    I(this, ie, void 0);
    this.state = { show: !1 }, B(this, $e, St()), this._handleDocClick = (n) => {
      const { state: { open: s }, id: i, togglePop: r } = this.props;
      s !== "closing" && !m(n.target).closest(`#pick-${i},#pick-pop-${i}`).length && r(!1);
    };
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = E(this, $e)) == null ? void 0 : n.current;
  }
  get container() {
    return E(this, ie);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: r } = i;
    return T(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getContainer(n) {
    if (!E(this, ie)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, ie, i[0]);
    }
    return E(this, ie);
  }
  _render(n) {
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
    return /* @__PURE__ */ y(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: h,
        ref: E(this, $e),
        children: this._renderPop(n)
      }
    );
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      E(this, _t) && (E(this, _t).call(this), B(this, _t, void 0));
      return;
    }
    E(this, _t) || B(this, _t, Qr(s, n, () => {
      const { direction: o, width: a } = i;
      xi(s, n, {
        placement: `${o === "top" ? "top" : "bottom"}-start`,
        middleware: [o === "auto" ? vi() : null, Qi(), Xr(1)].filter(Boolean)
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
    const n = E(this, _t);
    n && (n(), B(this, _t, void 0)), B(this, ie, void 0), B(this, $e, void 0);
  }
  render(n) {
    return fu(this._render(n), this._getContainer(n));
  }
}
$e = new WeakMap(), _t = new WeakMap(), ie = new WeakMap();
var ec = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, pn = (e, t, n) => (ec(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ya = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ze = (e, t, n, s) => (ec(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Rs, ht;
let cn = class extends V {
  constructor(t) {
    super(t), ya(this, Rs, void 0), ya(this, ht, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return i;
      pn(this, ht) && (clearTimeout(pn(this, ht)), ze(this, ht, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Ds(200, (a) => {
        ze(this, ht, a);
      }), ze(this, ht, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Ds(50, (a) => {
        ze(this, ht, a);
      }), ze(this, ht, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, ze(this, Rs, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return pn(this, Rs);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.className,
      style: t.style,
      name: t.name,
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
      direction: t.popDirection,
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
    if (i !== o) {
      const { onChange: a } = this.props;
      a == null || a(i, o);
    }
    this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), pn(this, ht) && clearTimeout(pn(this, ht));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ y(o, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ y(ts, { children: [
      /* @__PURE__ */ y(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Rs = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
cn.Trigger = po;
cn.Pop = tc;
cn.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popDirection: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
class nc extends J {
}
nc.NAME = "Pick";
nc.Component = cn;
var Xn;
class ud extends po {
  constructor() {
    super(...arguments);
    I(this, Xn, void 0);
    B(this, Xn, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), this._renderSelection = (n) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ y("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, Xn), "data-value": n.value, children: /* @__PURE__ */ y("span", { className: "close" }) })
    ] }, n.value);
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderTrigger() {
    const { state: { selections: n = [] }, placeholder: s, children: i } = this.props;
    return n.length ? [
      /* @__PURE__ */ y("div", { className: "picker-multi-selections", children: n.map(this._renderSelection) }, "selections"),
      i,
      /* @__PURE__ */ y("span", { class: "caret" }, "caret")
    ] : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: s }, "selections");
  }
}
Xn = new WeakMap();
var Jn, si, Zn, ii;
class dd extends po {
  constructor() {
    super(...arguments);
    I(this, Jn, St());
    I(this, si, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    I(this, Zn, (n) => {
      const s = n.target.value;
      this.props.changeState({ search: s });
    });
    I(this, ii, (n) => {
      n.stopPropagation(), this.props.togglePop(!0, { search: "" });
    });
  }
  focus() {
    var n;
    (n = E(this, Jn).current) == null || n.focus();
  }
  componentDidUpdate(n) {
    !n.state.open && this.props.state.open && this.focus();
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-single form-control"
    );
  }
  _buildSearch() {
    const { searchHint: n, state: { search: s, value: i, selections: r } } = this.props, o = s.trim().length;
    let a = n;
    if (a === void 0) {
      const l = r.find((h) => h.value === i);
      l && typeof l.text == "string" ? a = l.text : a = i;
    }
    return /* @__PURE__ */ y("div", { className: "picker-search", children: [
      /* @__PURE__ */ y(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: a,
          value: s,
          onChange: E(this, Zn),
          onInput: E(this, Zn),
          ref: E(this, Jn)
        }
      ),
      o ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: E(this, ii), children: /* @__PURE__ */ y("span", { className: "close" }) }) : /* @__PURE__ */ y("span", { className: "magnifier" })
    ] }, "main");
  }
  _renderTrigger() {
    const { children: n, state: { selections: s = [], open: i }, placeholder: r, search: o } = this.props, [a] = s, l = i && o;
    let h;
    l ? h = this._buildSearch() : a ? h = /* @__PURE__ */ y("span", { className: "picker-single-selection", children: a.text ?? a.value }, "main") : h = /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: r }, "main");
    const c = a && !l ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, si), children: /* @__PURE__ */ y("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      n,
      c,
      l ? null : /* @__PURE__ */ y("span", { className: "caret" }, "caret")
    ];
  }
}
Jn = new WeakMap(), si = new WeakMap(), Zn = new WeakMap(), ii = new WeakMap();
const fd = (e, t) => e.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ y("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var ri, oi, sc, ai, ic, li;
class pd extends tc {
  constructor() {
    super(...arguments);
    I(this, oi);
    I(this, ai);
    I(this, ri, St());
    I(this, li, ({ item: n }) => {
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
      const s = De(this, oi, sc).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return T(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ y(
      wi,
      {
        ref: E(this, ri),
        className: "picker-menu-list",
        items: De(this, ai, ic).call(this),
        onClickItem: E(this, li),
        ...s
      }
    );
  }
}
ri = new WeakMap(), oi = new WeakSet(), sc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, ai = new WeakSet(), ic = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, u) => {
    const {
      value: d = "",
      keys: f,
      text: p,
      className: g,
      ...v
    } = u;
    d === i && (a = !0);
    const w = `${p ?? d}`;
    return c.push({
      key: d,
      active: o.has(d),
      text: fd(l, [w]),
      className: T(g, { hover: d === i }),
      "data-value": d,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, li = new WeakMap();
var go = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Jt = (e, t, n) => (go(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, pe = (e, t, n, s) => (go(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), dt = (e, t, n) => (go(e, t, "access private method"), n), Cn, Nt, we, je, Pn, mo, rc, te, ve;
let yo = class extends cn {
  constructor(t) {
    super(t), Fe(this, je), Fe(this, mo), Fe(this, te), Fe(this, Cn, void 0), Fe(this, Nt, void 0), Fe(this, we, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? dt(this, te, ve).call(this, n) : dt(this, te, ve).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), dt(this, te, ve).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(dt(this, je, Pn).call(this, n)), r = s.filter((o) => !i.has(o));
      dt(this, te, ve).call(this, r);
    }, this.clear = () => {
      dt(this, te, ve).call(this);
    }, this.select = (n) => {
      const s = dt(this, je, Pn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return dt(this, te, ve).call(this, i);
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
    return dt(this, je, Pn).call(this, this.state.value);
  }
  async load() {
    let t = Jt(this, Nt);
    t && t.abort(), t = new AbortController(), pe(this, Nt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await Ds(s || 500), Jt(this, Nt) !== t || (r = await n(i, { signal: t.signal }), Jt(this, Nt) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o.length ? r = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: u
        } = l;
        return o.every((d) => h.toLowerCase().includes(d) || c.toLowerCase().includes(d) || typeof u == "string" && u.toLowerCase().includes(d)) && a.push(l), a;
      }, []) : r = n;
    } else
      r = n;
    return pe(this, Nt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Jt(this, Cn) || {}, r = {};
    if (pe(this, Cn, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    Jt(this, we) && clearTimeout(Jt(this, we)), pe(this, we, window.setTimeout(() => {
      pe(this, we, 0), this.update();
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
    (t = Jt(this, Nt)) == null || t.abort(), pe(this, Nt, void 0), pe(this, Cn, void 0), clearTimeout(Jt(this, we)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? ud : dd);
  }
};
Cn = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakSet();
Pn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
mo = /* @__PURE__ */ new WeakSet();
rc = function(e) {
  const t = dt(this, je, Pn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
te = /* @__PURE__ */ new WeakSet();
ve = function(e) {
  const t = e === void 0 ? e : dt(this, mo, rc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
yo.defaultProps = {
  ...cn.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
yo.Pop = pd;
class oc extends J {
}
oc.NAME = "Picker";
oc.Component = yo;
class ac extends at {
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
    return i && s.middleware.push(vi()), r && s.middleware.push(r === !0 ? Qi() : Qi(r)), o && s.middleware.push(Zi({ element: this.$arrow[0] })), a && s.middleware.push(Xr(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = Qr(t, n, () => {
      xi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Zi || !o.arrow)
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
ac.NAME = "Popovers";
ac.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class lc extends J {
}
lc.NAME = "Toolbar";
lc.Component = mt;
function rs(e) {
  return e.split("-")[1];
}
function wo(e) {
  return e === "y" ? "height" : "width";
}
function Ze(e) {
  return e.split("-")[0];
}
function ki(e) {
  return ["top", "bottom"].includes(Ze(e)) ? "x" : "y";
}
function wa(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ki(t), l = wo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Ze(t)) {
    case "top":
      u = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: r, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: o };
      break;
    case "left":
      u = { x: s.x - i.width, y: o };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (rs(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const gd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = wa(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, f = { ...f, [v]: { ...f[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = wa(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function cc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function md(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = t, p = cc(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = js(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = js(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const yd = Math.min, wd = Math.max;
function vd(e, t, n) {
  return wd(e, yd(t, n));
}
const _d = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = cc(s), c = { x: i, y: r }, u = ki(o), d = wo(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const C = v / 2 - w / 2, k = h[p], M = $ - f[d] - h[g], N = $ / 2 - f[d] / 2 + C, A = vd(k, N, M), O = rs(o) != null && N != A && a.reference[d] / 2 - (N < k ? h[p] : h[g]) - f[d] / 2 < 0;
  return { [u]: c[u] - (O ? N < k ? k - N : M - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), bd = ["top", "right", "bottom", "left"];
bd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const xd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ys(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xd[t]);
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  const s = rs(e), i = ki(e), r = wo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ys(o)), { main: o, cross: Ys(o) };
}
const kd = { start: "end", end: "start" };
function Fi(e) {
  return e.replace(/start|end/g, (t) => kd[t]);
}
const Cd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = e, v = Ze(s), w = Ze(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Ys(o)] : function(b) {
      const R = Ys(b);
      return [Fi(b), R, Fi(R)];
    }(o));
    u || f === "none" || $.push(...function(b, R, W, L) {
      const D = rs(b);
      let P = function(F, lt, Et) {
        const as = ["left", "right"], hn = ["right", "left"], ls = ["top", "bottom"], Ni = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Et ? lt ? hn : as : lt ? as : hn;
          case "left":
          case "right":
            return lt ? ls : Ni;
          default:
            return [];
        }
      }(Ze(b), W === "start", L);
      return D && (P = P.map((F) => F + "-" + D), R && (P = P.concat(P.map(Fi)))), P;
    }(o, p, f, _));
    const C = [o, ...$], k = await md(t, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: b, cross: R } = $d(s, r, _);
      M.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let W = "bottom";
      switch (d) {
        case "bestFit": {
          var O;
          const L = (O = N.map((D) => [D, D.overflows.filter((P) => P > 0).reduce((P, F) => P + F, 0)]).sort((D, P) => D[1] - P[1])[0]) == null ? void 0 : O[0].placement;
          L && (W = L);
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
}, Sd = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Ze(a), d = rs(a), f = ki(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function rt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  return rt(e).getComputedStyle(e);
}
function he(e) {
  return uc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ys;
function hc() {
  if (ys)
    return ys;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ys = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ys) : navigator.userAgent;
}
function jt(e) {
  return e instanceof rt(e).HTMLElement;
}
function pt(e) {
  return e instanceof rt(e).Element;
}
function uc(e) {
  return e instanceof rt(e).Node;
}
function va(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof rt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ci(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Ed(e) {
  return ["table", "td", "th"].includes(he(e));
}
function fr(e) {
  const t = /firefox/i.test(hc()), n = $t(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function dc() {
  return !/^((?!chrome|android).)*safari/i.test(hc());
}
function vo(e) {
  return ["html", "body", "#document"].includes(he(e));
}
const _a = Math.min, Wn = Math.max, Ks = Math.round;
function fc(e) {
  const t = $t(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Ks(n) !== i || Ks(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function pc(e) {
  return pt(e) ? e : e.contextElement;
}
const gc = { x: 1, y: 1 };
function Qe(e) {
  const t = pc(e);
  if (!jt(t))
    return gc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = fc(t);
  let o = (r ? Ks(n.width) : n.width) / s, a = (r ? Ks(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Ne(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = pc(e);
  let l = gc;
  t && (s ? pt(s) && (l = Qe(s)) : l = Qe(e));
  const h = a ? rt(a) : window, c = !dc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const g = rt(a), v = s && pt(s) ? rt(s) : s;
    let w = g.frameElement;
    for (; w && s && v !== g; ) {
      const _ = Qe(w), $ = w.getBoundingClientRect(), C = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(C.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += $.x, d += $.y, w = rt(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function le(e) {
  return ((uc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Si(e) {
  return pt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function mc(e) {
  return Ne(le(e)).left + Si(e).scrollLeft;
}
function Md(e, t, n) {
  const s = jt(t), i = le(t), r = Ne(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((he(t) !== "body" || Ci(i)) && (o = Si(t)), jt(t)) {
      const l = Ne(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = mc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Gn(e) {
  if (he(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (va(e) ? e.host : null) || le(e);
  return va(t) ? t.host : t;
}
function ba(e) {
  return jt(e) && $t(e).position !== "fixed" ? e.offsetParent : null;
}
function xa(e) {
  const t = rt(e);
  let n = ba(e);
  for (; n && Ed(n) && $t(n).position === "static"; )
    n = ba(n);
  return n && (he(n) === "html" || he(n) === "body" && $t(n).position === "static" && !fr(n)) ? t : n || function(s) {
    let i = Gn(s);
    for (; jt(i) && !vo(i); ) {
      if (fr(i))
        return i;
      i = Gn(i);
    }
    return null;
  }(e) || t;
}
function yc(e) {
  const t = Gn(e);
  return vo(t) ? e.ownerDocument.body : jt(t) && Ci(t) ? t : yc(t);
}
function Dn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = yc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = rt(s);
  return i ? t.concat(r, r.visualViewport || [], Ci(s) ? s : []) : t.concat(s, Dn(s));
}
function $a(e, t, n) {
  return t === "viewport" ? js(function(s, i) {
    const r = rt(s), o = le(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = dc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : pt(t) ? function(s, i) {
    const r = Ne(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = jt(s) ? Qe(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(t, n) : js(function(s) {
    var i;
    const r = le(s), o = Si(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Wn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Wn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + mc(s);
    const u = -o.scrollTop;
    return $t(a || r).direction === "rtl" && (c += Wn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(le(e)));
}
const Td = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Dn(h).filter((v) => pt(v) && he(v) !== "body"), f = null;
    const p = $t(h).position === "fixed";
    let g = p ? Gn(h) : h;
    for (; pt(g) && !vo(g); ) {
      const v = $t(g), w = fr(g);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((_) => _ !== g), g = Gn(g);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = $a(t, c, i);
    return h.top = Wn(u.top, h.top), h.right = _a(u.right, h.right), h.bottom = _a(u.bottom, h.bottom), h.left = Wn(u.left, h.left), h;
  }, $a(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = jt(n), r = le(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((he(n) !== "body" || Ci(r)) && (o = Si(n)), jt(n))) {
    const h = Ne(n);
    a = Qe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: pt, getDimensions: function(e) {
  return fc(e);
}, getOffsetParent: xa, getDocumentElement: le, getScale: Qe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || xa, r = this.getDimensions;
  return { reference: Md(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => $t(e).direction === "rtl" };
function Rd(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...pt(e) ? Dn(e) : e.contextElement ? Dn(e.contextElement) : [], ...Dn(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), pt(e) && !a && u.observe(e), pt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let d = a ? Ne(e) : null;
  return a && function f() {
    const p = Ne(e);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Nd = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Td, ...n }, r = { ...i.platform, _c: s };
  return gd(e, t, { ...i, platform: r });
};
var _o = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (_o(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ae = (e, t, n, s) => (_o(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), xt = (e, t, n) => (_o(e, t, "access private method"), n), In, On, Sn, Ye, nt, pr, Xs, Ei, bo, xo, wc, gr, vc, $o, _c, ko, bc, Co, xc, mr, $c, So, kc, Hn, yr, Cc;
const Ke = class extends at {
  constructor() {
    super(...arguments), j(this, Ei), j(this, xo), j(this, gr), j(this, $o), j(this, ko), j(this, Co), j(this, mr), j(this, So), j(this, yr), j(this, In, !1), j(this, On, void 0), j(this, Sn, 0), j(this, Ye, void 0), j(this, nt, void 0), j(this, pr, void 0), j(this, Xs, void 0), this.hideLater = () => {
      U(this, Hn).call(this), Ae(this, Sn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Hn, () => {
      clearTimeout(U(this, Sn)), Ae(this, Sn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Ye)) == null ? void 0 : e.classList.contains(Ke.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Ye) || xt(this, gr, vc).call(this);
  }
  get trigger() {
    return U(this, pr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ke.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, In) && this.isHover && xt(this, yr, Cc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ke.CLASS_SHOW), xt(this, mr, $c).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Xs)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Ye)) == null || t.classList.remove(Ke.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, In) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Hn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let kt = Ke;
In = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakMap();
Xs = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
bo = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
xo = /* @__PURE__ */ new WeakSet();
wc = function() {
  const e = xt(this, Ei, bo).call(this);
  return Ae(this, nt, document.createElement("div")), U(this, nt).style.position = this.options.strategy, U(this, nt).style.width = `${e}px`, U(this, nt).style.height = `${e}px`, U(this, nt).style.transform = "rotate(45deg)", U(this, nt);
};
gr = /* @__PURE__ */ new WeakSet();
vc = function() {
  var n;
  const e = Ke.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(xt(this, xo, wc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ae(this, Ye, t), t;
};
$o = /* @__PURE__ */ new WeakSet();
_c = function() {
  var i;
  const e = xt(this, Ei, bo).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Sd(e), Cd()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, nt) && ((i = s.middleware) == null || i.push(_d({ element: U(this, nt) }))), s;
};
ko = /* @__PURE__ */ new WeakSet();
bc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Co = /* @__PURE__ */ new WeakSet();
xc = function(e) {
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
mr = /* @__PURE__ */ new WeakSet();
$c = function() {
  const e = xt(this, $o, _c).call(this), t = xt(this, So, kc).call(this);
  Ae(this, Xs, Rd(t, this.tooltip, () => {
    Nd(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = xt(this, ko, bc).call(this, o);
      if (i.arrow && U(this, nt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, nt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...xt(this, Co, xc).call(this, o)
        });
      }
    });
  }));
};
So = /* @__PURE__ */ new WeakSet();
kc = function() {
  return U(this, On) || Ae(this, On, {
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
  }), U(this, On);
};
Hn = /* @__PURE__ */ new WeakMap();
yr = /* @__PURE__ */ new WeakSet();
Cc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Hn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ae(this, In, !0);
};
kt.NAME = "tooltip";
kt.TOOLTIP_CLASS = "tooltip";
kt.CLASS_SHOW = "show";
kt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
kt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, kt.MENU_SELECTOR);
  if (n) {
    const i = kt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    kt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, kt.MENU_SELECTOR);
  if (!n)
    return;
  const s = kt.ensure(n);
  s.isHover && s.show();
});
function Ad({
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
  target: u,
  trailingIcon: d,
  hint: f,
  checked: p,
  actions: g,
  show: v,
  level: w = 0,
  items: _,
  ...$
}) {
  const C = Array.isArray(g) ? { items: g } : g;
  return C && (C.btnProps || (C.btnProps = { size: "sm" }), C.className = T("tree-actions not-nested-toggle", C.className)), /* @__PURE__ */ y(
    "div",
    {
      className: T("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...$,
      children: [
        /* @__PURE__ */ y("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ y("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ y("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
        /* @__PURE__ */ y(Un, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ y("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ y("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ y(mt, { ...C }) : null,
        /* @__PURE__ */ y(Un, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Eo = class extends yi {
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
    return n && (t.className = T(t.className, "tree-hover")), t;
  }
};
Eo.ItemComponents = {
  item: Ad
};
Eo.NAME = "tree";
class Sc extends J {
}
Sc.NAME = "Tree";
Sc.Component = Eo;
var Qn, ci, hi, ui;
class Ld extends V {
  constructor(n) {
    super(n);
    I(this, Qn, St());
    I(this, ci, (n) => {
      n.stopPropagation(), tt.show({
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
    I(this, hi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    I(this, ui, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, Qn).current;
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
      fetch(et(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ y(ul, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ y("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ y("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ y(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: E(this, hi),
        onDragEnd: E(this, ui),
        "data-id": c,
        ref: E(this, Qn),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, ci), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Qn = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), ui = new WeakMap();
var Ec = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ft = (e, t, n) => (Ec(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ut = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, yt = (e, t, n) => (Ec(e, t, "access private method"), n), Yt, Mo, Mc, To, Tc, wr, Rc, Ro, Nc, Js, vr, Mi, _r, No, Ac, br, xr, Ti, Ao;
const Lo = class extends V {
  constructor() {
    super(...arguments), ut(this, Mo), ut(this, To), ut(this, wr), ut(this, Ro), ut(this, Js), ut(this, Mi), ut(this, No), ut(this, Yt, /* @__PURE__ */ new Map()), this.state = {}, ut(this, br, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), ut(this, xr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = yt(this, wr, Rc).call(this), { cellHeight: n, grid: s } = this.props, i = Ft(this, Yt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ y("div", { class: "dashboard", children: /* @__PURE__ */ y("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ y(
        Ld,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Ft(this, br),
          onDragEnd: Ft(this, xr)
        },
        r.id
      );
    }) }) });
  }
};
let Po = Lo;
Yt = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakSet();
Mc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
To = /* @__PURE__ */ new WeakSet();
Tc = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...u
    } = i, [d, f] = yt(this, Mo, Mc).call(this, o);
    return {
      id: `${r}`,
      width: d,
      height: f,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...u
    };
  });
};
wr = /* @__PURE__ */ new WeakSet();
Rc = function() {
  Ft(this, Yt).clear();
  let e = 0;
  const t = yt(this, To, Tc).call(this);
  return t.forEach((n) => {
    yt(this, Ro, Nc).call(this, n);
    const [, s, , i] = Ft(this, Yt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Ro = /* @__PURE__ */ new WeakSet();
Nc = function(e) {
  const t = Ft(this, Yt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = yt(this, No, Ac).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    yt(this, Mi, _r).call(this, n, [s, i, r, o]);
};
Js = /* @__PURE__ */ new WeakSet();
vr = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ft(this, Yt).entries())
    if (s !== n && yt(t = Lo, Ti, Ao).call(t, i, e))
      return !1;
  return !0;
};
Mi = /* @__PURE__ */ new WeakSet();
_r = function(e, t) {
  var n;
  Ft(this, Yt).set(e, t);
  for (const [s, i] of Ft(this, Yt).entries())
    s !== e && yt(n = Lo, Ti, Ao).call(n, i, t) && (i[1] = t[1] + t[3], yt(this, Mi, _r).call(this, s, i));
};
No = /* @__PURE__ */ new WeakSet();
Ac = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (yt(this, Js, vr).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (yt(this, Js, vr).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
br = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakSet();
Ao = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
ut(Po, Ti);
Po.defaultProps = {
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
class Lc extends J {
}
Lc.NAME = "Dashboard";
Lc.Component = Po;
var re, oe;
class ka extends V {
  constructor(n) {
    super(n);
    I(this, re, void 0);
    I(this, oe, void 0);
    B(this, re, 0), B(this, oe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, re) && cancelAnimationFrame(E(this, re)), B(this, re, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, re, 0);
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
    n && (B(this, oe, typeof n == "string" ? document : n.current), E(this, oe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, oe) && E(this, oe).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: u, scrollPos: d } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, g = {};
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(u, d) * (n - g.width) / u)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(u, d) * (n - g.height) / u)), /* @__PURE__ */ y(
      "div",
      {
        className: T("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ y(
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
re = new WeakMap(), oe = new WeakMap();
function Pc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: u, border: d } = e.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, $ = [], C = [], k = {}, M = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : C;
      b.html ? R.push(/* @__PURE__ */ y("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      C.push(b);
  });
  const A = N;
  return /* @__PURE__ */ y(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...k,
      children: [
        C.length > 0 && /* @__PURE__ */ y(A, { className: T(g), style: f, ...M, children: C }),
        $
      ]
    }
  );
}
function Ui({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Pc, onRenderCell: l }) {
  return /* @__PURE__ */ y("div", { className: T("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ y(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function Wc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Pc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ y(
    Ui,
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
  r.list.length && (f = /* @__PURE__ */ y(
    Ui,
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
  o.list.length && (p = /* @__PURE__ */ y(
    Ui,
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
  const g = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ y(
    "div",
    {
      className: T("dtable-row", t),
      style: g,
      "data-id": e.id,
      ...u,
      children: [
        d,
        f,
        p
      ]
    }
  );
}
function Pd({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ y("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ y(Wc, { ...s }) });
}
function Wd({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ y("div", { className: T("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ y(Wc, { ...c }, h.id);
  }) });
}
const Zs = /* @__PURE__ */ new Map(), Qs = [];
function Dc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Zs.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Zs.set(n, e), t != null && t.buildIn && !Qs.includes(n) && Qs.push(n);
}
function fe(e, t) {
  Dc(e, t);
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
function Ic(e) {
  return Zs.delete(e);
}
function Dd(e) {
  if (typeof e == "string") {
    const t = Zs.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Oc(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Dd(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Oc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function Id(e = [], t = !0) {
  return t && Qs.length && e.unshift(...Qs), e != null && e.length ? Oc([], e, /* @__PURE__ */ new Set()) : [];
}
function Hc() {
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
function Od(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ca(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Vi(e, t = !1) {
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
function Hd(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Ca(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, u = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, d = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = [], p = {};
  let g = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: $, onAddCol: C } = _;
    $ && Object.entries($).forEach(([k, M]) => {
      w[k] || (w[k] = []), w[k].push(M);
    }), C && v.push(C);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: $ = "", name: C } = _, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: $
    }, M = {
      name: C,
      type: $,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[$];
    N && N.forEach((D) => {
      const P = typeof D == "function" ? D.call(e, k) : D;
      P && Object.assign(k, P, _);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = k, W = Ca(k.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = Od(W < 1 ? Math.round(W * s) : W, b, R), v.forEach((D) => D.call(e, M)), f.push(M), p[M.name] = M;
    const L = A ? A === "left" ? u : d : c;
    L.list.push(M), L.totalWidth += M.width, L.width = L.totalWidth, M.flex && L.flexList.push(M), typeof k.order == "number" && (g = !0);
  }), g) {
    const _ = ($, C) => ($.setting.order ?? 0) - (C.setting.order ?? 0);
    f.sort(_), u.list.sort(_), c.list.sort(_), d.list.sort(_);
  }
  return Vi(u, !0), Vi(d, !0), c.widthSetting = s - u.width - d.width, Vi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Wo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, S = (e, t, n) => (Wo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Wo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lt = (e, t, n) => (Wo(e, t, "access private method"), n), Ve, En, Ee, Ot, xe, X, Wt, At, Mn, Ns, ti, ee, Tn, Rn, $r, Bc, kr, zc, Cr, Fc, Sr, Uc, As, Er, Do, Io, Ri, ei, Mr, Tr, Oo, Vc, Ho, qc, Rr, Gc;
let Bo = class extends V {
  constructor(t) {
    super(t), H(this, $r), H(this, kr), H(this, Cr), H(this, Sr), H(this, As), H(this, Oo), H(this, Ho), H(this, Rr), this.ref = St(), H(this, Ve, 0), H(this, En, void 0), H(this, Ee, !1), H(this, Ot, void 0), H(this, xe, void 0), H(this, X, []), H(this, Wt, void 0), H(this, At, /* @__PURE__ */ new Map()), H(this, Mn, {}), H(this, Ns, void 0), H(this, ti, []), this.updateLayout = () => {
      S(this, Ve) && cancelAnimationFrame(S(this, Ve)), Y(this, Ve, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ve, 0);
      }));
    }, H(this, ee, (n, s) => {
      s = s || n.type;
      const i = S(this, At).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Tn, (n) => {
      S(this, ee).call(this, n, `window_${n.type}`);
    }), H(this, Rn, (n) => {
      S(this, ee).call(this, n, `document_${n.type}`);
    }), H(this, Do, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return S(this, X).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), H(this, Io, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Ri, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), H(this, ei, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Mr, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), S(this, X).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of S(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of S(this, X))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), H(this, Tr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, En, t.id ?? `dtable-${Fl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, xe, Object.freeze(Id(t.plugins))), S(this, xe).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Mn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Wt)) == null ? void 0 : t.options) || S(this, Ot) || Hc();
  }
  get plugins() {
    return S(this, X);
  }
  get layout() {
    return S(this, Wt);
  }
  get id() {
    return S(this, En);
  }
  get data() {
    return S(this, Mn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ot, void 0);
  }
  componentDidMount() {
    if (S(this, Ee) ? this.forceUpdate() : Lt(this, As, Er).call(this), S(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Mr)), this.on("keydown", S(this, Tr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Ns, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, Ee) ? Lt(this, As, Er).call(this) : S(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, Ns)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of S(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, Tn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Rn)) : t.removeEventListener(s, S(this, ee));
    S(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, xe).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Mn, {}), S(this, At).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = S(this, At).get(t);
    i ? i.push(n) : (S(this, At).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, Tn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Rn)) : (r = this.ref.current) == null || r.addEventListener(t, S(this, ee)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = S(this, At).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (S(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, Tn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Rn)) : (o = this.ref.current) == null || o.removeEventListener(t, S(this, ee)));
  }
  emitCustomEvent(t, n) {
    S(this, ee).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: d } = t;
    if (c === "up" || c === "down")
      d = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      d = 0;
    else if (c === "bottom")
      d = r - o;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: g } = t;
      typeof p == "number" && (u = s + p), typeof g == "number" && (u = i + g);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - o)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
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
    if (!S(this, Ot))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Wt, void 0);
    else if (s === "options") {
      if (Y(this, Ot, void 0), !S(this, Wt))
        return;
      Y(this, Wt, void 0);
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
    return qt(S(this, ti), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Lt(this, Rr, Gc).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], u = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), u.push(
      Lt(this, $r, Bc).call(this, t),
      Lt(this, kr, zc).call(this, t),
      Lt(this, Cr, Fc).call(this, t),
      Lt(this, Sr, Uc).call(this, t)
    ), S(this, X).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ y(
      "div",
      {
        id: S(this, En),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Ve = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakSet();
Bc = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ y(
      Pd,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: S(this, Ri),
        onRenderRow: S(this, Io)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Yr,
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
kr = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ y(
    Wd,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: S(this, Ri),
      onRenderRow: S(this, Do)
    },
    "rows"
  );
};
Cr = /* @__PURE__ */ new WeakSet();
Fc = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Yr,
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
Sr = /* @__PURE__ */ new WeakSet();
Uc = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ y(
      ka,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: S(this, ei),
        left: s,
        bottom: (d === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ y("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ y("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ y(
      ka,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, ei),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
As = /* @__PURE__ */ new WeakSet();
Er = function() {
  var e;
  Y(this, Ee, !1), (e = this.options.afterRender) == null || e.call(this), S(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Do = /* @__PURE__ */ new WeakMap();
Io = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakMap();
Oo = /* @__PURE__ */ new WeakSet();
Vc = function() {
  if (S(this, Ot))
    return !1;
  const t = { ...Hc(), ...S(this, xe).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, X, S(this, xe).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, Ot, t), Y(this, ti, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Ho = /* @__PURE__ */ new WeakSet();
qc = function() {
  var A, O;
  const { plugins: e } = this;
  let t = S(this, Ot);
  const n = {
    flex: /* @__PURE__ */ y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
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
      Y(this, Ee, !0);
      return;
    }
  }
  const r = Hd(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, W) => {
    var D, P;
    const L = { data: W ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (W || (L.lazy = !0), h.push(L), ((D = t.onAddRow) == null ? void 0 : D.call(this, L, R)) !== !1) {
      for (const F of e)
        if (((P = F.onAddRow) == null ? void 0 : P.call(this, L, R)) === !1)
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
  let u = h;
  const d = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    d[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, g = f ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const $ = u.length * l, C = g + v + $;
  if (typeof w == "function" && (w = w.call(this, C)), w === "auto")
    _ = C;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, C));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, Ee, !0);
      return;
    }
  } else
    _ = w;
  const k = _ - g - v, M = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: g,
    footerHeight: v,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, M);
  N && Object.assign(M, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Wt, M);
};
Rr = /* @__PURE__ */ new WeakSet();
Gc = function() {
  (Lt(this, Oo, Vc).call(this) || !S(this, Wt)) && Lt(this, Ho, qc).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, u = Math.min(o.length, Math.ceil(c / a)), d = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < u; p++) {
    const g = o[p];
    g.lazy && f && (g.data = f([g.id])[0], g.lazy = !1), d.push(g);
  }
  return e.visibleRows = d, e.scrollTop = l, e.scrollLeft = n, e;
};
Bo.addPlugin = Dc;
Bo.removePlugin = Ic;
function Sa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const Bd = {
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
      Sa(this, s);
    },
    mouseleave() {
      Sa(this, !1);
    }
  }
}, zd = fe(Bd, { buildIn: !0 });
function Fd(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const u = r ? r.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !jc.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function Ud(e) {
  return this.state.checkedRows[e] ?? !1;
}
function jc() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function Vd() {
  return Object.keys(this.state.checkedRows);
}
function qd(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ea(e, t, n = !1) {
  return /* @__PURE__ */ y("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ y("label", {}) });
}
const Gd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Ea
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
    toggleCheckRows: Fd,
    isRowChecked: Ud,
    isAllRowChecked: jc,
    getChecks: Vd,
    toggleCheckable: qd
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
        /* @__PURE__ */ y("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Ea(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ y("div", { children: r.join(", ") })
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
      return { className: T(e.className, "is-checked") };
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
}, jd = fe(Gd);
var Yc = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Yc || {});
function ni(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = ni.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ni.call(this, t.parent).level + 1 : 0, t;
}
function Yd(e) {
  return e !== void 0 ? ni.call(this, e) : this.data.nestedMap;
}
function Kd(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Kc.call(this)), t) {
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
function Kc() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Xc(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Xc(e, t, o.children, s + 1)));
  }
  return t;
}
function Jc(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Jc(e, r, n, s);
  }), i;
}
function Zc(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && Zc(e, r.parent, n, s, i);
}
const Xd = {
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
        const o = Jc(this, i, r, s);
        o != null && o.parent && Zc(this, o.parent, r, s, n);
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
    getNestedInfo: Yd,
    toggleRow: Kd,
    isAllCollapsed: Kc,
    getNestedRowInfo: ni
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
    ), Xc(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ y("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ y("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ y("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: T(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Jd = fe(Xd);
function Qc(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ y("a", { href: et(i, t.row.data), ...s, ...r, ...a, children: n });
}
function zo(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function th(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), dr(n, e, s ?? n));
}
function eh(e, t) {
  const { link: n } = t.col.setting, s = Qc(n, t, e[0]);
  return s && (e[0] = s), e;
}
function nh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = zo(n, t, e[0])), e;
}
function sh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function ih(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = th(s, t, e[0], i), e;
}
function Nr(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : zo(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Zd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Nr(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ y("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = ih(e, t, n)), e = sh(e, t), e = nh(e, t), s ? e = Nr(e, t) : e = eh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = et(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Qd = fe(Zd, { buildIn: !0 });
function qi(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], u = {
    size: "xs",
    className: T(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ y(Ul, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, t) : d;
    e[0] = /* @__PURE__ */ y("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ y("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ y("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ y("span", { children: c })
    ] }));
  return e;
}
const tf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: qi
    },
    avatarBtn: {
      onRenderCell: qi
    },
    avatarName: {
      onRenderCell: qi
    }
  }
}, ef = fe(tf, { buildIn: !0 }), nf = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ y("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ y("a", { href: et(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, sf = fe(nf, { buildIn: !0 }), Gi = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, rf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Gi(t.left.list), Gi(t.center.list), Gi(t.right.list);
  }
}, of = fe(rf), af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Yc,
  avatar: ef,
  checkable: jd,
  colHover: zd,
  group: of,
  nested: Jd,
  renderDatetime: th,
  renderDatetimeCell: ih,
  renderFormat: zo,
  renderFormatCell: nh,
  renderHtmlCell: Nr,
  renderLink: Qc,
  renderLinkCell: eh,
  renderMapCell: sh,
  rich: Qd,
  sortType: sf
}, Symbol.toStringTag, { value: "Module" }));
class os extends J {
}
os.NAME = "DTable";
os.Component = Bo;
os.definePlugin = fe;
os.removePlugin = Ic;
os.plugins = af;
var rh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ma = (e, t, n) => (rh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), lf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ta = (e, t, n, s) => (rh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), qe;
const cf = "nav", Ar = '[data-toggle="tab"]', hf = "active";
class oh extends at {
  constructor() {
    super(...arguments), lf(this, qe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Ar);
    let i = t ? m(t).first() : s.filter(`.${hf}`);
    if (!i.length && (i = n.find(Ar).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = m(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Ma(this, qe) && clearTimeout(Ma(this, qe)), Ta(this, qe, setTimeout(() => {
      o.addClass("in"), Ta(this, qe, 0);
    }, 10)));
  }
}
qe = /* @__PURE__ */ new WeakMap();
oh.NAME = "Tabs";
m(document).on("click.tabs.zui", Ar, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${cf}`);
  n.length && oh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  ml as ActionMenu,
  wl as ActionMenuNested,
  Vl as Avatar,
  Bl as BtnGroup,
  at as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  Yr as CustomRender,
  os as DTable,
  Lc as Dashboard,
  zt as Dropdown,
  zl as EventBus,
  lu as HElement,
  ul as HtmlContent,
  Un as Icon,
  vl as Menu,
  ro as Messager,
  Gl as Modal,
  Xt as ModalBase,
  Xl as ModalTrigger,
  Zl as Nav,
  Ql as Pager,
  nc as Pick,
  oc as Picker,
  ac as Popovers,
  Ol as ProgressCircle,
  V as ReactComponent,
  Hl as Switch,
  Pt as TIME_DAY,
  oh as Tabs,
  lc as Toolbar,
  kt as Tooltip,
  Sc as Tree,
  Uu as Upload,
  ma as calculateTimestamp,
  m as cash,
  T as classes,
  Zh as convertBytes,
  it as createDate,
  fu as createPortal,
  St as createRef,
  Xh as deepGet,
  Kh as deepGetPath,
  Ds as delay,
  df as dom,
  Jh as formatBytes,
  dr as formatDate,
  Tf as formatDateSpan,
  et as formatString,
  Ka as getClassList,
  Rf as getTimeBeforeDesc,
  q as h,
  ff as hh,
  au as htm,
  qt as i18n,
  Mf as isDBY,
  is as isSameDay,
  od as isSameMonth,
  kf as isSameWeek,
  ur as isSameYear,
  Cf as isToday,
  Ef as isTomorrow,
  Z as isValidElement,
  Sf as isYesterday,
  ua as nativeEvents,
  Fn as render,
  hu as renderCustomResult,
  qu as store,
  Xa as storeData,
  nu as takeData
};
//# sourceMappingURL=zui.js.map
