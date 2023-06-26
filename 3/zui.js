var Ai = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var T = (e, t, n) => (Ai(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Ai(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var De = (e, t, n) => (Ai(e, t, "access private method"), n);
const Ft = document, Ps = window, Na = Ft.documentElement, Le = Ft.createElement.bind(Ft), Aa = Le("div"), Li = Le("table"), lh = Le("tbody"), Vr = Le("tr"), { isArray: di, prototype: La } = Array, { concat: ch, filter: Po, indexOf: Pa, map: Wa, push: hh, slice: Da, some: Wo, splice: uh } = La, dh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, fh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ph = /<.+>/, gh = /^\w+$/;
function Do(e, t) {
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
      const i = n || Ft;
      if (s = dh.test(t) && Me(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ph.test(t) ? Ha(t) : ji(i) ? i.find(t) : Q(i) ? m(i).find(t) : Do(t, i), !s)
        return;
    } else if (Pe(t))
      return this.ready(t);
    (s.nodeType || s === Ps) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
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
typeof Symbol == "function" && (x[Symbol.iterator] = La[Symbol.iterator]);
function ji(e) {
  return e instanceof fi;
}
function ln(e) {
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
function Un(e) {
  return e === null;
}
function Ia(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Io(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = ln;
m.isFunction = Pe;
m.isArray = di;
m.isNumeric = Ia;
m.isPlainObject = Io;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Io(e)) {
    const s = Object.keys(e);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (t.call(e[r], r, e[r]) === !1)
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
function Ws(...e) {
  const t = wh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ws(t, m, n);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      t && (di(o[r]) || Io(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), Ws(t, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
m.extend = Ws;
x.extend = function(e) {
  return Ws(x, e);
};
const _h = /\S+/g;
function pi(e) {
  return Q(e) ? e.match(_h) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = pi(e), s = !st(t);
  return this.each((i, o) => {
    G(o) && K(n, (r, a) => {
      s ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = pi(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function vh(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Un(n) ? void 0 : n;
      }
      return st(t) ? this : Un(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = vh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Wo.call(this, (t) => G(t) && t.classList.contains(e));
};
x.get = function(e) {
  return st(e) ? Da.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Ut(e, t, n) {
  if (!G(e))
    return;
  const s = Ps.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function vt(e, t) {
  return parseInt(Ut(e, t), 10) || 0;
}
function qr(e, t) {
  return vt(e, `border${t ? "Left" : "Top"}Width`) + vt(e, `padding${t ? "Left" : "Top"}`) + vt(e, `padding${t ? "Right" : "Bottom"}`) + vt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Pi = {};
function xh(e) {
  if (Pi[e])
    return Pi[e];
  const t = Le(e);
  Ft.body.insertBefore(t, null);
  const n = Ut(t, "display");
  return Ft.body.removeChild(t), Pi[e] = n !== "none" ? n : "block";
}
function Gr(e) {
  return Ut(e, "display") === "none";
}
function Oa(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function gi(e) {
  return Q(e) ? (t, n) => Oa(n, e) : Pe(e) ? e : ji(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = gi(e);
  return m(Po.call(this, (n, s) => t.call(n, s, n)));
};
function he(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return he(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const $h = /^\s*<(\w+)[^>]*>/, kh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, jr = {
  "*": Aa,
  tr: lh,
  td: Vr,
  th: Vr,
  thead: Li,
  tbody: Li,
  tfoot: Li
};
function Ha(e) {
  if (!Q(e))
    return [];
  if (kh.test(e))
    return [Le(RegExp.$1)];
  const t = $h.test(e) && RegExp.$1, n = jr[t] || jr["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Ha;
x.has = function(e) {
  const t = Q(e) ? (n, s) => Do(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = gi(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Yt(e, t, n, s) {
  const i = [], o = Pe(t), r = s && gi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (o) {
      const h = t(e[a]);
      h.length && hh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ba(e) {
  return e.multiple && e.options ? Yt(Po.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Ch(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || Ya.test(n.type)) {
      const i = di(e) ? Wa.call(e, String) : Un(e) ? [] : [String(e)];
      s ? K(n.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = st(e) || Un(e) ? "" : e;
  }) : this[0] && Ba(this[0]);
}
x.val = Ch;
x.is = function(e) {
  const t = gi(e);
  return Wo.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function kt(e) {
  return e.length > 1 ? Po.call(e, (t, n, s) => Pa.call(s, t) === n) : e;
}
m.unique = kt;
x.add = function(e, t) {
  return m(kt(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return he(m(kt(Yt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return he(m(kt(Yt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Pa.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return he(m(kt(Yt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(kt(Yt(this, (t) => Do(e, t))));
};
const Sh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Eh = /^$|^module$|\/(java|ecma)script/i, Mh = ["type", "src", "nonce", "noModule"];
function Th(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Eh.test(i.type) && Na.contains(i)) {
      const o = Le("script");
      o.text = i.textContent.replace(Sh, ""), K(Mh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function Rh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Th(t, e.ownerDocument);
}
function ue(e, t, n, s, i, o, r, a) {
  return K(e, (l, h) => {
    K(m(h), (c, u) => {
      K(m(t), (d, f) => {
        const p = n ? u : f, g = n ? f : u, _ = n ? c : d;
        Rh(p, _ ? g.cloneNode(!0) : g, s, i, !_);
      }, a);
    }, r);
  }, o), t;
}
x.after = function() {
  return ue(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ue(arguments, this, !1, !1, !0);
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
  return ue(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return ue(arguments, this, !1, !0);
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
  return ue(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return ue(arguments, this, !0, !0);
};
x.prepend = function() {
  return ue(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return ue(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(kt(Yt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return he(m(kt(Yt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return he(m(kt(Yt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return he(m(kt(Yt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(ch.apply([], Wa.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Ut(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Na;
  });
};
x.slice = function(e, t) {
  return m(Da.call(this, e, t));
};
const Ah = /-([a-z])/g;
function Oo(e) {
  return e.replace(Ah, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Ft.readyState !== "loading" ? t() : Ft.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + Ps.pageYOffset,
    left: t.left + Ps.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Ut(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ut(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const o = m(i).offset();
      n.top -= o.top + vt(i, "borderTopWidth"), n.left -= o.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - vt(e, "marginTop"),
    left: n.left - vt(e, "marginLeft")
  };
};
const za = {
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
      return e = za[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[za[e] || e];
  });
};
const Lh = /^--/;
function Ho(e) {
  return Lh.test(e);
}
const Wi = {}, { style: Ph } = Aa, Wh = ["webkit", "moz", "ms"];
function Dh(e, t = Ho(e)) {
  if (t)
    return e;
  if (!Wi[e]) {
    const n = Oo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Wh.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Ph)
        return Wi[e] = r, !1;
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
function Fa(e, t, n = Ho(e)) {
  return !n && !Ih[e] && Ia(t) ? `${t}px` : t;
}
function Oh(e, t) {
  if (Q(e)) {
    const n = Ho(e);
    return e = Dh(e, n), arguments.length < 2 ? this[0] && Ut(this[0], e, n) : e ? (t = Fa(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Oh;
function Ua(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Hh = /^\s+|\s+$/;
function Yr(e, t) {
  const n = e.dataset[t] || e.dataset[Oo(t)];
  return Hh.test(n) ? n : Ua(JSON.parse, n);
}
function Bh(e, t, n) {
  n = Ua(JSON.stringify, n), e.dataset[Oo(t)] = n;
}
function zh(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Yr(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && Yr(this[0], e) : st(t) ? this : this.each((n, s) => {
      Bh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = zh;
function Va(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(o) {
      if (this[0])
        return ln(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Me(this[0]) ? Va(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? vt(this[0], `margin${n ? "Top" : "Left"}`) + vt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return st(s) ? void 0 : this;
    if (!arguments.length)
      return ln(this[0]) ? this[0].document.documentElement[`client${t}`] : Me(this[0]) ? Va(this[0], t) : this[0].getBoundingClientRect()[n] - qr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const a = Ut(r, "boxSizing");
      r.style[n] = Fa(n, i + (a === "border-box" ? qr(r, !e) : 0));
    });
  };
});
const Kr = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = Gr(n);
    (st(e) ? s : e) ? (n.style.display = n[Kr] || "", Gr(n) && (n.style.display = xh(n.tagName))) : s || (n[Kr] = Ut(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Xr = "___ce", Bo = ".", zo = { focus: "focusin", blur: "focusout" }, qa = { mouseenter: "mouseover", mouseleave: "mouseout" }, Fh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Fo(e) {
  return qa[e] || zo[e] || e;
}
function Uo(e) {
  const t = e.split(Bo);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = Uo(e), o = Fo(s);
    if (!o)
      return this;
    const r = Fh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Ft.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Bo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in zo;
  return this.each((s, i) => {
    n && Pe(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Ga(e) {
  return e[Xr] = e[Xr] || {};
}
function Uh(e, t, n, s, i) {
  const o = Ga(e);
  o[t] = o[t] || [], o[t].push([n, s, i]), e.addEventListener(t, i);
}
function ja(e, t) {
  return !t || !Wo.call(t, (n) => e.indexOf(n) < 0);
}
function Ds(e, t, n, s, i) {
  const o = Ga(e);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !ja(r, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in o)
      Ds(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (st(e))
    this.each((s, i) => {
      !G(i) && !Me(i) && !ln(i) || Ds(i);
    });
  else if (Q(e))
    Pe(t) && (n = t, t = ""), K(pi(e), (s, i) => {
      const [o, r] = Uo(i), a = Fo(o);
      this.each((l, h) => {
        !G(h) && !Me(h) && !ln(h) || Ds(h, a, r, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return he(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function Vh(e, t, n, s, i) {
  if (!Q(e)) {
    for (const o in e)
      this.on(o, t, n, e[o], i);
    return this;
  }
  return Q(t) || (st(t) || Un(t) ? t = "" : st(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Pe(s) || (s = n, n = void 0), s ? (K(pi(e), (o, r) => {
    const [a, l] = Uo(r), h = Fo(a), c = a in qa, u = a in zo;
    h && this.each((d, f) => {
      if (!G(f) && !Me(f) && !ln(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !ja(l, g.namespace.split(Bo)) || !t && (u && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let _ = f;
        if (t) {
          let v = g.target;
          for (; !Oa(v, t); )
            if (v === f || (v = v.parentNode, !v))
              return;
          _ = v;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return _;
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
        const w = s.call(_, g, g.___td);
        i && Ds(f, h, l, t, p), w === !1 && (g.preventDefault(), g.stopPropagation());
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
const Yh = /file|reset|submit|button|image/i, Ya = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Yh.test(i.type) || Ya.test(i.type) && !i.checked)
        return;
      const o = Ba(i);
      if (!st(o)) {
        const r = di(o) ? o : [o];
        K(r, (a, l) => {
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
    let o = t.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${n}".`);
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
var Vo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Vo || {});
function Jh(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Vo[n]).toFixed(t) + n);
}
const Zh = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Vo[s];
};
let qo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ee;
function Qh() {
  return qo;
}
function tu(e) {
  qo = e.toLowerCase();
}
function Ka(e, t) {
  ee || (ee = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ee, e);
}
function Vt(e, t, n, s, i, o) {
  Array.isArray(e) ? ee && e.unshift(ee) : e = ee ? [ee, e] : [e], typeof n == "string" && (o = i, i = s, s = n, n = void 0);
  const r = i || qo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const c = o && l === ee ? `${o}.${t}` : t;
    if (a = Xh(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function eu(e, t, n, s) {
  return Vt(void 0, e, t, n, s);
}
Vt.addLang = Ka;
Vt.getLang = eu;
Vt.getCode = Qh;
Vt.setCode = tu;
Ka({
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
function Xa(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = n.get(i);
    typeof r == "number" ? t[r][1] = !!o : (n.set(i, t.length), t.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Xa(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (n.get(i[0]) || 0) - (n.get(o[0]) || 0));
}
const M = (...e) => Xa(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = M;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const yn = /* @__PURE__ */ new WeakMap();
function Ja(e, t, n) {
  const s = yn.has(e), i = s ? yn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), yn.set(e, i)) : yn.delete(e);
}
function nu(e, t) {
  let n = yn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? nu(this[0], t) : this.each((s, i) => Ja(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => Ja(n, e));
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
const Is = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function Za(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: o, height: r } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= d && i + r <= u;
  const f = i <= u && i + r >= 0, p = s <= d && s + o >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Za(n, e);
  });
};
function Go(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    Go(s, o.innerHTML), o.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    Go(n, e);
  });
};
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Za,
  runJS: Go
}, Symbol.toStringTag, { value: "Module" }));
var mi, z, Qa, Z, ve, Jr, tl, Yi, Os = {}, el = [], su = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, jo = Array.isArray;
function re(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? mi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return _s(e, r, s, i, null);
}
function _s(e, t, n, s, i) {
  var o = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Qa };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Kt() {
  return { current: null };
}
function es(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Vn(e, t) {
  if (t == null)
    return e.__ ? Vn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Vn(e) : null;
}
function sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return sl(e);
  }
}
function Zr(e) {
  (!e.__d && (e.__d = !0) && ve.push(e) && !Hs.__r++ || Jr !== z.debounceRendering) && ((Jr = z.debounceRendering) || tl)(Hs);
}
function Hs() {
  var e, t, n, s, i, o, r, a;
  for (ve.sort(Yi); e = ve.shift(); )
    e.__d && (t = ve.length, s = void 0, i = void 0, r = (o = (n = e).__v).__e, (a = n.__P) && (s = [], (i = re({}, o)).__v = o.__v + 1, Yo(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Vn(o), o.__h), ll(s, o), o.__e != r && sl(o)), ve.length > t && ve.sort(Yi));
  Hs.__r = 0;
}
function il(e, t, n, s, i, o, r, a, l, h) {
  var c, u, d, f, p, g, _, w = s && s.__k || el, v = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? _s(null, f, null, null, f) : jo(f) ? _s(es, { children: f }, null, null, null) : f.__b > 0 ? _s(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = w[c]) === null || d && f.key == d.key && f.type === d.type)
        w[c] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = w[u]) && f.key == d.key && f.type === d.type) {
            w[u] = void 0;
            break;
          }
          d = null;
        }
      Yo(e, f, d = d || Os, i, o, r, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (_ || (_ = []), d.ref && _.push(d.ref, null, f), _.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = ol(f, l, e) : l = rl(e, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = Vn(d));
    }
  for (n.__e = g, c = v; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = al(s).nextSibling), hl(w[c], w[c]));
  if (_)
    for (c = 0; c < _.length; c++)
      cl(_[c], _[++c], _[++c]);
}
function ol(e, t, n) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, t = typeof s.type == "function" ? ol(s, t, n) : rl(n, s, s, i, s.__e, t));
  return t;
}
function rl(e, t, n, s, i, o) {
  var r, a, l;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (a = o, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function al(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = al(n)))
        return s;
  }
  return null;
}
function iu(e, t, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Bs(e, o, null, n[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Bs(e, o, t[o], n[o], s);
}
function Qr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || su.test(t) ? n : n + "px";
}
function Bs(e, t, n, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Qr(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Qr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? s || e.addEventListener(t, o ? ea : ta, o) : e.removeEventListener(t, o ? ea : ta, o);
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
function ta(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ea(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function Yo(e, t, n, s, i, o, r, a, l) {
  var h, c, u, d, f, p, g, _, w, v, $, C, k, E, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (_ = t.props, w = (h = A.contextType) && s[h.__c], v = h ? w ? w.props.value : h.__ : s, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(_, v) : (t.__c = c = new V(_, v), c.constructor = A, c.render = ru), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = re({}, c.__s)), re(c.__s, A.getDerivedStateFromProps(_, c.__s))), d = c.props, f = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && _ !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, v) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = _, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = v, c.props = _, c.__P = e, C = z.__r, k = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), E = 0; E < c._sb.length; E++)
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (s = re(re({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), il(e, jo(N = h != null && h.type === es && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, o, r, a, l), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ou(n.__e, t, n, s, i, o, r, l);
    (h = z.diffed) && h(t);
  } catch (I) {
    t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), z.__e(I, t, n);
  }
}
function ll(e, t) {
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
function ou(e, t, n, s, i, o, r, a) {
  var l, h, c, u = n.props, d = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((l = o[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), o = null, a = !1;
  }
  if (f === null)
    u === d || a && e.data === d || (e.data = d);
  else {
    if (o = o && mi.call(e.childNodes), h = (u = n.props || Os).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (iu(e, d, u, i, a), c)
      t.__k = [];
    else if (il(e, jo(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", o, r, o ? o[0] : n.__k && Vn(n, 0), a), o != null)
      for (p = o.length; p--; )
        o[p] != null && nl(o[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== u.value) && Bs(e, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && Bs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function cl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function hl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || cl(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        z.__e(o, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && hl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || nl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ru(e, t, n) {
  return this.constructor(e, n);
}
function qn(e, t, n) {
  var s, i, o;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Yo(t, e = (!s && n || t).__k = q(es, null, [e]), i || Os, Os, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? mi.call(t.childNodes) : null, o, !s && n ? n : i ? i.__e : t.firstChild, s), ll(o, e);
}
mi = el.slice, z = { __e: function(e, t, n, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Qa = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = re({}, this.state), typeof e == "function" && (e = e(re({}, n), this.props)), e && re(n, e), e != null && this.__v && (t && this._sb.push(t), Zr(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zr(this));
}, V.prototype.render = es, ve = [], tl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Hs.__r = 0;
var ul = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, n[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = e.apply(a, ul(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, na = /* @__PURE__ */ new Map();
function au(e) {
  var t = na.get(this);
  return t || (t = /* @__PURE__ */ new Map(), na.set(this, t)), (t = ul(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, r) : o === 3 && (d || r) ? (l.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? l.push(4, d, 0) : o === 2 && r && !d ? l.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (l.push(o, 0, r, i), o = 6), d && (l.push(o, d, 0, i), o = 6)), r = "";
    }, c = 0; c < n.length; c++) {
      c && (o === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || n[c][u + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const ff = au.bind(q);
function lu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: o, ...r } = e;
  return q(t, { class: M(n), style: s, ...r, ...o }, i);
}
var cu = 0;
function y(e, t, n, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cu, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return z.vnode && z.vnode(h), h;
}
var Xn;
class dl extends V {
  constructor() {
    super(...arguments);
    O(this, Xn, Kt());
  }
  componentDidMount() {
    this.props.executeScript && m(T(this, Xn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...o } = n;
    return /* @__PURE__ */ y(lu, { ref: T(this, Xn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Xn = new WeakMap();
function hu(e) {
  const {
    tag: t,
    className: n,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = e, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((g) => {
    const _ = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        _.push(...l.call(r, g, f, ...o));
      else {
        const w = g.call(r, f, ...o);
        w && (Array.isArray(w) ? _.push(...w) : _.push(w));
      }
    else
      _.push(g);
    _.forEach((w) => {
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ y("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(u),
    style: d,
    ...c
  }, f];
}
function Ko({
  tag: e = "div",
  ...t
}) {
  const [n, s] = hu(t);
  return q(e, n, ...s);
}
function Gn(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ y("i", { className: M(i), ...s });
}
function uu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function du(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    qn(null, t._temp), t._temp = null, t._container = null;
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
  }), qn(
    q(uu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function fu(e, t) {
  const n = q(du, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Xo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ie = (e, t, n) => (Xo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (Xo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), hs = (e, t, n) => (Xo(e, t, "access private method"), n), pe, wn, vs, bs, Ue, _n;
const fl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    dn(this, Ue), dn(this, pe, void 0), dn(this, wn, void 0), dn(this, vs, void 0), dn(this, bs, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: o } = this.constructor, r = m(e);
    if (r.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Oe(this, vs, a), Oe(this, wn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Oe(this, pe, { ...i, ...r.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, r.data(n, this).attr(s, `${a}`), o) {
      const l = `${n}:ALL`;
      let h = r.data(l);
      h || (h = /* @__PURE__ */ new Map(), r.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Oe(this, bs, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ie(this, bs);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ie(this, wn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ie(this, pe);
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
          const o = i.values().next().value;
          s.data(e, o).attr(t, o.gid);
        }
    }
    Oe(this, pe, void 0), Oe(this, wn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Ie(this, pe), e), Ie(this, pe);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(hs(this, Ue, _n).call(this, e));
    return this.$element.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(hs(this, Ue, _n).call(this, e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(hs(this, Ue, _n).call(this, e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(hs(this, Ue, _n).call(this, e), t);
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
    return Vt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Vt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
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
    return m(e || document).find(`[${n}]`).each((i, o) => {
      if (t) {
        const a = m(o).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const r = m(o).data(this.KEY);
      r && s.push(r);
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
          var r;
          const o = this.ensure(i, typeof t == "object" ? t : void 0);
          typeof t == "string" && ((r = o[t]) == null || r.call(o, ...n));
        });
      }
    });
  }
};
let at = fl;
pe = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakSet();
_n = function(e) {
  return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
};
at.DEFAULT = {};
at.NAME = fl.name;
at.MULTI_INSTANCE = !1;
class J extends at {
  constructor() {
    super(...arguments), this.ref = Kt();
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
    qn(
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
    className: M(t),
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
  url: o,
  disabled: r,
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
  const _ = [
    typeof f == "boolean" ? /* @__PURE__ */ y("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
    /* @__PURE__ */ y(Gn, { icon: l }),
    /* @__PURE__ */ y("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ y(Gn, { icon: u })
  ];
  return q(t, {
    className: M(n, { disabled: r, active: a }),
    title: d,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ..._);
}
function gu({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return q(e, {
    className: M(t),
    style: o,
    onClick: r,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function mu({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return q(e, {
    className: M(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: r,
    ...o
  }, a);
}
function yu({ type: e, ...t }) {
  return /* @__PURE__ */ y(Ko, { ...t });
}
function gl({
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
const Ki = class extends V {
  constructor() {
    super(...arguments), this.ref = Kt();
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
    const { commonItemProps: s, onClickItem: i } = e, o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = M(o.className), o;
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
    const { type: o = "item", component: r, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (o === "html")
      return /* @__PURE__ */ y(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !r || typeof r == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || Ki.ItemComponents[o] : r;
    return Object.assign(d, {
      type: o,
      component: typeof r == "string" ? r : void 0
    }), e.checkbox && o === "item" && d.checked === void 0 && (d.checked = !!d.active), this.renderTypedItem(f, {
      className: M(h),
      children: u,
      style: c,
      key: a,
      ...l
    }, {
      ...d,
      type: o,
      component: typeof r == "string" ? r : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: o, ...r } = t;
    return /* @__PURE__ */ y(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...r,
        children: [
          /* @__PURE__ */ y(e, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      o
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: s,
      className: i,
      items: o,
      children: r,
      itemRender: a,
      onClickItem: l,
      beforeRender: h,
      afterRender: c,
      beforeDestroy: u,
      ...d
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ y(f, { class: M(this.name, i), style: n, ...d, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, e)),
      r
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
}, _u = (e, t, n, s) => (yl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), xs, Mt, vn;
let yi = class extends We {
  constructor(t) {
    super(t), Di(this, xs, /* @__PURE__ */ new Set()), Di(this, Mt, void 0), Di(this, vn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), _u(this, Mt, t.nestedShow === void 0), ct(this, Mt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: o, indent: r, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), !o && r && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${r}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: o, beforeRender: r, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ct(this, Mt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: r,
      beforeDestroy: o,
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
    const o = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    ct(this, xs).add(o);
    const r = this.isNestedMenuShow(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ct(this, vn).bind(this, o, !0),
        onMouseLeave: ct(this, vn).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ct(this, vn).call(this, o, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(r, i);
    return a && (i.children = [i.children, a]), i.show = r, i.rootClass = [i.rootClass, "has-nested-menu", r ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ct(this, Mt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ct(this, Mt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ct(this, xs).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), n === void 0)
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
    ct(this, Mt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ct(this, Mt) && this.setState({ nestedShow: !1 });
  }
};
xs = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakMap();
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
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = M(t.className, this.menuName, {
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
class _l extends J {
}
_l.NAME = "Menu";
_l.Component = wi;
class qt extends V {
  render() {
    const {
      component: t,
      type: n,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: c,
      loading: u,
      loadingIcon: d,
      loadingText: f,
      icon: p,
      text: g,
      trailingIcon: _,
      caret: w,
      square: v,
      hint: $,
      ...C
    } = this.props, k = t || (a ? "a" : "button"), E = g == null || typeof g == "string" && !g.length || u && !f, N = w && E && !p && !_ && !r && !u;
    return q(
      k,
      {
        className: M("btn", n, o, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: v === void 0 ? !N && !r && E : v
        }, i ? `size-${i}` : ""),
        title: $,
        [k === "a" ? "href" : "data-url"]: a,
        [k === "a" ? "target" : "data-target"]: l,
        type: k === "button" ? s : void 0,
        ...C
      },
      /* @__PURE__ */ y(Gn, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      E ? null : /* @__PURE__ */ y("span", { className: "text", children: u ? f : g }),
      u ? null : r,
      u ? null : typeof _ == "string" ? /* @__PURE__ */ y("i", { class: `icon ${_}` }) : _,
      u ? null : w ? /* @__PURE__ */ y("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function vu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(qt, { type: n, ...s });
}
function ns(e) {
  return e.split("-")[1];
}
function Jo(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return e.split("-")[0];
}
function ss(e) {
  return ["top", "bottom"].includes(ke(e)) ? "x" : "y";
}
function sa(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = ss(t), l = Jo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (ke(t)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (ns(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const bu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = sa(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: _, fn: w } = a[g], { x: v, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, f = { ...f, [_]: { ...f[_], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = sa(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function is(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vl(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function zs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function bl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = is(t, e), p = vl(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], _ = zs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, C = zs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / $.y, bottom: (C.bottom - _.bottom + p.bottom) / $.y, left: (_.left - C.left + p.left) / $.x, right: (C.right - _.right + p.right) / $.x };
}
const Xi = Math.min, xu = Math.max;
function Ji(e, t, n) {
  return xu(e, Xi(t, n));
}
const Zi = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: o, platform: r, elements: a } = t, { element: l, padding: h = 0 } = is(e, t) || {};
  if (l == null)
    return {};
  const c = vl(h), u = { x: n, y: s }, d = ss(i), f = Jo(d), p = await r.getDimensions(l), g = d === "y", _ = g ? "top" : "left", w = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", $ = o.reference[f] + o.reference[d] - u[d] - o.floating[f], C = u[d] - o.reference[d], k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let E = k ? k[v] : 0;
  E && await (r.isElement == null ? void 0 : r.isElement(k)) || (E = a.floating[v] || o.floating[f]);
  const N = $ / 2 - C / 2, A = E / 2 - p[f] / 2 - 1, I = Xi(c[_], A), b = Xi(c[w], A), R = I, W = E - p[f] - b, L = E / 2 - p[f] / 2 + N, D = Ji(R, L, W), P = ns(i) != null && L != D && o.reference[f] / 2 - (L < R ? I : b) - p[f] / 2 < 0 ? L < R ? R - L : W - L : 0;
  return { [d]: u[d] - P, data: { [d]: D, centerOffset: L - D + P } };
} }), $u = ["top", "right", "bottom", "left"];
$u.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ku = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Fs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ku[t]);
}
function Cu(e, t, n) {
  n === void 0 && (n = !1);
  const s = ns(e), i = ss(e), o = Jo(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Fs(r)), { main: r, cross: Fs(r) };
}
const Su = { start: "end", end: "start" };
function Ii(e) {
  return e.replace(/start|end/g, (t) => Su[t]);
}
const _i = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = is(e, t), _ = ke(s), w = ke(r) === r, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Fs(r)] : function(R) {
      const W = Fs(R);
      return [Ii(R), W, Ii(W)];
    }(r));
    u || f === "none" || $.push(...function(R, W, L, D) {
      const P = ns(R);
      let F = function(lt, Ct, ls) {
        const un = ["left", "right"], cs = ["right", "left"], Ni = ["top", "bottom"], ah = ["bottom", "top"];
        switch (lt) {
          case "top":
          case "bottom":
            return ls ? Ct ? cs : un : Ct ? un : cs;
          case "left":
          case "right":
            return Ct ? Ni : ah;
          default:
            return [];
        }
      }(ke(R), L === "start", D);
      return P && (F = F.map((lt) => lt + "-" + P), W && (F = F.concat(F.map(Ii)))), F;
    }(r, p, f, v));
    const C = [r, ...$], k = await bl(t, g), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[_]), c) {
      const { main: R, cross: W } = Cu(s, o, v);
      E.push(k[R], k[W]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((R) => R <= 0)) {
      var A, I;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, W = C[R];
      if (W)
        return { data: { index: R, overflows: N }, reset: { placement: W } };
      let L = (I = N.filter((D) => D.overflows[0] <= 0).sort((D, P) => D.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!L)
        switch (d) {
          case "bestFit": {
            var b;
            const D = (b = N.map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, lt) => F + lt, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : b[0];
            D && (L = D);
            break;
          }
          case "initialPlacement":
            L = r;
        }
      if (s !== L)
        return { reset: { placement: L } };
    }
    return {};
  } };
}, Zo = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = ke(a), d = ns(a), f = ss(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, _ = is(r, o);
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof $ == "number" && (v = d === "end" ? -1 * $ : $), f ? { x: v * g, y: w * p } : { x: w * p, y: v * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Eu(e) {
  return e === "x" ? "y" : "x";
}
const Qi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (_) => {
      let { x: w, y: v } = _;
      return { x: w, y: v };
    } }, ...l } = is(e, t), h = { x: n, y: s }, c = await bl(t, l), u = ss(ke(i)), d = Eu(u);
    let f = h[u], p = h[d];
    if (o) {
      const _ = u === "y" ? "bottom" : "right";
      f = Ji(f + c[u === "y" ? "top" : "left"], f, f - c[_]);
    }
    if (r) {
      const _ = d === "y" ? "bottom" : "right";
      p = Ji(p + c[d === "y" ? "top" : "left"], p, p - c[_]);
    }
    const g = a.fn({ ...t, [u]: f, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function rt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  return rt(e).getComputedStyle(e);
}
function xl(e) {
  return e instanceof rt(e).Node;
}
function le(e) {
  return xl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gt(e) {
  return e instanceof rt(e).HTMLElement;
}
function Ot(e) {
  return e instanceof rt(e).Element;
}
function ia(e) {
  return typeof ShadowRoot < "u" && (e instanceof rt(e).ShadowRoot || e instanceof ShadowRoot);
}
function jn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Mu(e) {
  return ["table", "td", "th"].includes(le(e));
}
function to(e) {
  const t = Qo(), n = ft(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Qo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function vi(e) {
  return ["html", "body", "#document"].includes(le(e));
}
const oa = Math.min, Pn = Math.max, Us = Math.round, us = Math.floor, Te = (e) => ({ x: e, y: e });
function $l(e) {
  const t = ft(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = gt(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, a = Us(n) !== o || Us(s) !== r;
  return a && (n = o, s = r), { width: n, height: s, $: a };
}
function tr(e) {
  return Ot(e) ? e : e.contextElement;
}
function Je(e) {
  const t = tr(e);
  if (!gt(t))
    return Te(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: o } = $l(t);
  let r = (o ? Us(n.width) : n.width) / s, a = (o ? Us(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const ra = Te(0);
function kl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Qo())
    return ra;
  const o = e ? rt(e) : window;
  return !n || t && n !== o ? ra : { x: ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = o.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Re(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = tr(e);
  let r = Te(1);
  t && (s ? Ot(s) && (r = Je(s)) : r = Je(e));
  const a = kl(o, n, s);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, c = i.width / r.x, u = i.height / r.y;
  if (o) {
    const d = rt(o), f = s && Ot(s) ? rt(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const g = Je(p), _ = p.getBoundingClientRect(), w = getComputedStyle(p), v = _.left + (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, $ = _.top + (p.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, h *= g.y, c *= g.x, u *= g.y, l += v, h += $, p = rt(p).frameElement;
    }
  }
  return zs({ width: c, height: u, x: l, y: h });
}
function Ht(e) {
  return ((xl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function bi(e) {
  return Ot(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Cl(e) {
  return Re(Ht(e)).left + bi(e).scrollLeft;
}
function cn(e) {
  if (le(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ia(e) && e.host || Ht(e);
  return ia(t) ? t.host : t;
}
function Sl(e) {
  const t = cn(e);
  return vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gt(t) && jn(t) ? t : Sl(t);
}
function Vs(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Sl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = rt(s);
  return i ? t.concat(o, o.visualViewport || [], jn(s) ? s : []) : t.concat(s, Vs(s));
}
function aa(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, o) {
      const r = rt(i), a = Ht(i), l = r.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = Qo();
        (!f || f && o === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const o = Ht(i), r = bi(i), a = i.ownerDocument.body, l = Pn(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = Pn(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -r.scrollLeft + Cl(i);
      const u = -r.scrollTop;
      return ft(a).direction === "rtl" && (c += Pn(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Ht(e));
  else if (Ot(t))
    s = function(i, o) {
      const r = Re(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = gt(i) ? Je(i) : Te(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = kl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return zs(s);
}
function El(e, t) {
  const n = cn(e);
  return !(n === t || !Ot(n) || vi(n)) && (ft(n).position === "fixed" || El(n, t));
}
function la(e, t) {
  return gt(e) && ft(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ca(e, t) {
  const n = rt(e);
  if (!gt(e))
    return n;
  let s = la(e, t);
  for (; s && Mu(s) && ft(s).position === "static"; )
    s = la(s, t);
  return s && (le(s) === "html" || le(s) === "body" && ft(s).position === "static" && !to(s)) ? n : s || function(i) {
    let o = cn(i);
    for (; gt(o) && !vi(o); ) {
      if (to(o))
        return o;
      o = cn(o);
    }
    return null;
  }(e) || n;
}
function Tu(e, t, n) {
  const s = gt(t), i = Ht(t), o = n === "fixed", r = Re(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Te(0);
  if (s || !s && !o)
    if ((le(t) !== "body" || jn(i)) && (a = bi(t)), gt(t)) {
      const h = Re(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Cl(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
const Ru = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Vs(h).filter((_) => Ot(_) && le(_) !== "body"), f = null;
    const p = ft(h).position === "fixed";
    let g = p ? cn(h) : h;
    for (; Ot(g) && !vi(g); ) {
      const _ = ft(g), w = to(g);
      w || _.position !== "fixed" || (f = null), (p ? !w && !f : !w && _.position === "static" && f && ["absolute", "fixed"].includes(f.position) || jn(g) && !w && El(h, g)) ? d = d.filter((v) => v !== g) : f = _, g = cn(g);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = aa(t, c, i);
    return h.top = Pn(u.top, h.top), h.right = oa(u.right, h.right), h.bottom = oa(u.bottom, h.bottom), h.left = Pn(u.left, h.left), h;
  }, aa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = gt(n), o = Ht(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Te(1);
  const l = Te(0);
  if ((i || !i && s !== "fixed") && ((le(n) !== "body" || jn(o)) && (r = bi(n)), gt(n))) {
    const h = Re(n);
    a = Je(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: Ot, getDimensions: function(e) {
  return $l(e);
}, getOffsetParent: ca, getDocumentElement: Ht, getScale: Je, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ca, o = this.getDimensions;
  return { reference: Tu(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ft(e).direction === "rtl" };
function er(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = tr(e), c = i || o ? [...h ? Vs(h) : [], ...Vs(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }), o && g.addEventListener("resize", n);
  });
  const u = h && a ? function(g, _) {
    let w, v = null;
    const $ = Ht(g);
    function C() {
      clearTimeout(w), v && v.disconnect(), v = null;
    }
    return function k(E, N) {
      E === void 0 && (E = !1), N === void 0 && (N = 1), C();
      const { left: A, top: I, width: b, height: R } = g.getBoundingClientRect();
      if (E || _(), !b || !R)
        return;
      const W = us(I), L = us($.clientWidth - (A + b)), D = us($.clientHeight - (I + R)), P = us(A);
      let F = !0;
      v = new IntersectionObserver((lt) => {
        const Ct = lt[0].intersectionRatio;
        if (Ct !== N) {
          if (!F)
            return k();
          Ct === 0 ? w = setTimeout(() => {
            k(!1, 1e-7);
          }, 100) : k(!1, Ct);
        }
        F = !1;
      }, { rootMargin: -W + "px " + -L + "px " + -D + "px " + -P + "px", threshold: N }), v.observe(g);
    }(!0), C;
  }(h, n) : null;
  let d, f = null;
  r && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? Re(e) : null;
  return l && function g() {
    const _ = Re(e);
    !p || _.x === p.x && _.y === p.y && _.width === p.width && _.height === p.height || n(), p = _, d = requestAnimationFrame(g);
  }(), n(), () => {
    c.forEach((g) => {
      i && g.removeEventListener("scroll", n), o && g.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const xi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Ru, ...n }, o = { ...i.platform, _c: s };
  return bu(e, t, { ...i, platform: o });
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
      middleware: [_i()],
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
    return t.className = M(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var nr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, St = (e, t, n) => (nr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), He = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ds = (e, t, n, s) => (nr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ha = (e, t, n) => (nr(e, t, "access private method"), n), Zt, bn, $s, ks, eo, Ml, no, Tl;
const Oi = "show", Au = '[data-toggle="contextmenu"]';
class tt extends at {
  constructor() {
    super(...arguments), He(this, eo), He(this, no), He(this, Zt, void 0), He(this, bn, void 0), He(this, $s, void 0), He(this, ks, void 0);
  }
  get isShown() {
    return St(this, Zt) && m(St(this, Zt)).hasClass(Oi);
  }
  get menu() {
    return St(this, Zt) || this.ensureMenu();
  }
  get trigger() {
    return St(this, $s) || this.element;
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
    return this.isShown || (ds(this, $s, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Oi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = St(this, ks)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(St(this, Zt)).removeClass(Oi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = St(this, Zt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = m(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = m(document).find(i)), !(s != null && s.length)) {
        const o = t.next();
        o.hasClass(n) ? s = o : s = t.parent().find(`.${n}`);
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
    }), ds(this, Zt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(_i())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    ds(this, ks, er(n, s, () => {
      xi(n, s, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${o}px` });
        const l = a.split("-")[0], h = ha(this, eo, Ml).call(this, l);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ha(this, no, Tl).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (qn(q(Nu, t), this.menu), !0);
  }
  getPopperElement() {
    return St(this, bn) || ds(this, bn, {
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
    }), St(this, bn);
  }
  static clear(t) {
    var a, l;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = t || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const o = this.getAll(), r = new Set(s || []);
    for (const h of o)
      r.has(h.element) || h.hide();
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
bn = /* @__PURE__ */ new WeakMap();
$s = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
eo = /* @__PURE__ */ new WeakSet();
Ml = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
no = /* @__PURE__ */ new WeakSet();
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
    const s = `${tt.KEY}:options`, i = n.data(s), o = tt.ensure(n, i);
    i || n.data(s, o.options), o.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var sr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xn = (e, t, n) => (sr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, so = (e, t, n, s) => (sr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lu = (e, t, n) => (sr(e, t, "access private method"), n), Wn, $n, qs, io, Rl;
const ua = '[data-toggle="dropdown"]', Nl = class extends tt {
  constructor() {
    super(...arguments), fs(this, io), fs(this, Wn, !1), fs(this, $n, 0), this.hideLater = () => {
      xn(this, qs).call(this), so(this, $n, window.setTimeout(this.hide.bind(this), 100));
    }, fs(this, qs, () => {
      clearTimeout(xn(this, $n)), so(this, $n, 0);
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
    return n && (!xn(this, Wn) && this.isHover && Lu(this, io, Rl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    xn(this, Wn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Zo(t)), (s = e.middleware) == null || s.push(Zi({ element: this.arrowEl }))), e;
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
let Bt = Nl;
Wn = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
io = /* @__PURE__ */ new WeakSet();
Rl = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, xn(this, qs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), so(this, Wn, !0);
};
Bt.MENU_CLASS = "dropdown-menu";
Bt.NAME = "Dropdown";
Bt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const ps = `${Bt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(ua).not(":disabled,.disabled");
  if (!t.length) {
    Bt.clear({ event: e });
    return;
  }
  const n = t.data(ps), s = Bt.ensure(t, n);
  n || t.data(ps, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(ua);
  if (!t.length)
    return;
  const n = t.data(ps), s = Bt.ensure(t, n);
  n || t.data(ps, s.options), s.isHover && s.show();
});
let gs = 0;
window.addEventListener("scroll", (e) => {
  gs && clearTimeout(gs), gs = window.setTimeout(() => {
    Bt.clear({ event: e }), gs = 0;
  }, 50);
}, !0);
var Jn, en;
class Pu extends V {
  constructor(n) {
    var s;
    super(n);
    O(this, Jn, void 0);
    O(this, en, Kt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return T(this, en);
  }
  get triggerElement() {
    return T(this, en).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...s } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), B(this, Jn, Bt.ensure(this.triggerElement, {
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
    (n = T(this, Jn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...o } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: T(this, en)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
Jn = new WeakMap(), en = new WeakMap();
class Wu extends Pu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: t, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const r = (n ? t : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ y(qt, { ...s });
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
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, n = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: s = n, ...i } = t;
    return /* @__PURE__ */ y(qt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = t, a = { key: s, ...n };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
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
      type: o,
      btnProps: r,
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
    return i.className = M(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...n,
      ...r,
      ...s,
      className: M(`${this.name}-${i}`, n.className, r.className, s.className),
      style: Object.assign({}, n.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ y(t, { ...a });
  }
};
mt.ItemComponents = {
  item: vu,
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
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  ...c
}) {
  let u;
  a === !0 ? u = /* @__PURE__ */ y(qt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ y("span", { class: "close" }) }) : Z(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ y(qt, { ...a, onClick: l }));
  const d = Z(n) ? n : n ? /* @__PURE__ */ y(mt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: M("alert", e), style: t, ...c, children: [
    Z(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    Z(i) ? i : /* @__PURE__ */ y("div", { className: M("alert-content", o), children: [
      Z(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ y("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    r
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
      placement: o,
      animation: r,
      show: a,
      className: l,
      time: h,
      ...c
    } = this.props;
    return /* @__PURE__ */ y(
      Iu,
      {
        className: M("messager", l, i, r === !0 ? Ou(o) : r, a ? "in" : ""),
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
}, fn = (e, t, n) => (Bu(e, t, "access private method"), n), ge, Ve;
class ir extends J {
  constructor() {
    super(...arguments), zu(this, ge), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), fn(this, ge, Ve).call(this, () => {
      this._show = !0, this.render(), fn(this, ge, Ve).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && fn(this, ge, Ve).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && fn(this, ge, Ve).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), fn(this, ge, Ve).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ge = /* @__PURE__ */ new WeakSet();
Ve = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
ir.NAME = "MessagerItem";
ir.Component = Hu;
var or = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ce = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ms = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Cs = (e, t, n, s) => (or(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pl = (e, t, n) => (or(e, t, "access private method"), n), Ze, Dt, oo, Wl, rr, Dl;
const Il = class extends at {
  constructor() {
    super(...arguments), ms(this, oo), ms(this, rr), ms(this, Ze, void 0), ms(this, Dt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ce(this, Dt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Pl(this, oo, Wl).call(this).show();
  }
  hide() {
    var e;
    (e = Ce(this, Dt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Il.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let ar = Il;
Ze = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakSet();
Wl = function() {
  if (Ce(this, Dt))
    Ce(this, Dt).setOptions(this.options);
  else {
    const e = Pl(this, rr, Dl).call(this), t = new ir(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Cs(this, Ze, void 0), Cs(this, Dt, void 0);
    }), Cs(this, Dt, t);
  }
  return Ce(this, Dt);
};
rr = /* @__PURE__ */ new WeakSet();
Dl = function() {
  if (Ce(this, Ze))
    return Ce(this, Ze);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Cs(this, Ze, n[0])), n[0];
};
ar.NAME = "messager";
ar.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && ar.show(t);
});
let lr = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(t) })
    ] });
  }
};
lr.NAME = "zui.progress-circle";
lr.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Ol extends J {
}
Ol.NAME = "ProgressCircle";
Ol.Component = lr;
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
      icon: o,
      surffixIcon: r,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, u = this.state.checked ? 1 : 0, d = t || "div", f = typeof o == "string" ? /* @__PURE__ */ y("i", { class: `icon ${o}` }) : o, p = typeof r == "string" ? /* @__PURE__ */ y("i", { class: `icon ${r}` }) : r, g = [
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
        className: M("switch", n, { disabled: a }),
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
    this.fileMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Zh(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.initInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, limitSize: i, btnClass: o, tipText: r } = this.options, a = i ? m(`<span class="upload-tip">${r == null ? void 0 : r.replace("%s", i)}</span>`) : null;
    this.$label = m(`<label class="btn ${o}" for="${t}">${n}</label>`), this.$list = m('<div class="file-list py-1"></div>');
    const l = s === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
    this.$element.append(this.$input, ...l);
  }
  initInputCash() {
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (o) => {
      const r = o.target.files;
      if (!r)
        return;
      const a = [...r];
      this.addFileItem(a), i == null || i(a);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    this.options.multiple || (this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size;
  }
  addFileItem(t) {
    const { multiple: n, limitCount: s } = this.options;
    if (n) {
      for (const r of t) {
        if (s && this.fileMap.size >= s || this.currentBytes + r.size > this.limitBytes)
          return;
        this.addFile(r);
        const a = this.createFileItem(r);
        this.itemMap.set(r.name, a), this.$list.append(a);
      }
      return;
    }
    const i = t[0];
    if (i.size > this.limitBytes)
      return;
    this.addFile(i);
    const o = this.createFileItem(i);
    this.itemMap.clear(), this.itemMap.set(i.name, o), this.$list.empty().append(o);
  }
  deleteFile(t) {
    var n, s;
    (s = (n = this.options).onDelete) == null || s.call(n, t), this.fileMap.delete(t.name), this.currentBytes -= t.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((i) => this.dataTransfer.items.add(i)), this.$input.prop("files", this.dataTransfer.files);
  }
  deleteFileItem(t) {
    var s;
    const n = this.fileMap.get(t);
    n && ((s = this.itemMap.get(n.name)) == null || s.remove(), this.itemMap.delete(n.name), this.deleteFile(n));
  }
  renameFile(t, n) {
    var s, i;
    (i = (s = this.options).onRename) == null || i.call(s, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((o) => this.dataTransfer.items.add(o)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, n) {
    const s = this.itemMap.get(t.name);
    s && (this.itemMap.set(n, s).delete(t.name), this.renameFile(t, n));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.fileInfo(t)).append(this.renameInput(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  fileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${Jh(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: o, renameText: r, deleteBtn: a, deleteText: l } = this.options;
    return o && i.append(
      m("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(r).on("click", () => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
      })
    ), a && i.append(
      m("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  renameInput(t) {
    const { confirmText: n, cancelText: s } = this.options, i = m('<div class="input-group hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name), r = m("<button />").addClass("btn rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      i.addClass("hidden"), this.renameFileItem(t, o.val()), i.closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(o.val());
    }), a = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = m('<div class="btn-group"></div').append(r).append(a);
    return i.append(o).append(l);
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
  icon: "file-o"
};
var Wt;
class Vu {
  constructor(t = "") {
    O(this, Wt, void 0);
    typeof t == "object" ? B(this, Wt, t) : B(this, Wt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    T(this, Wt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    T(this, Wt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    T(this, Wt).removeEventListener(t, n, s);
  }
  emit(t) {
    return T(this, Wt).dispatchEvent(t), t;
  }
}
Wt = new WeakMap();
const da = /* @__PURE__ */ new Set([
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
    return typeof t == "string" && (da.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(zl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (da.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Fl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Zn, ne, wt, nn, sn, Ss;
const Ur = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    O(this, sn);
    O(this, Zn, void 0);
    O(this, ne, void 0);
    O(this, wt, void 0);
    O(this, nn, void 0);
    B(this, Zn, n), B(this, ne, `ZUI_STORE:${t ?? Fl()}`), B(this, wt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return T(this, Zn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (T(this, nn) || B(this, nn, new Ur(T(this, ne), "session")), T(this, nn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = T(this, wt).getItem(De(this, sn, Ss).call(this, t));
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
    T(this, wt).setItem(De(this, sn, Ss).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    T(this, wt).removeItem(De(this, sn, Ss).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < T(this, wt).length; n++) {
      const s = T(this, wt).key(n);
      if (s != null && s.startsWith(T(this, ne))) {
        const i = T(this, wt).getItem(s);
        typeof i == "string" && t(s.substring(T(this, ne).length + 1), JSON.parse(i));
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
let Gs = Ur;
Zn = new WeakMap(), ne = new WeakMap(), wt = new WeakMap(), nn = new WeakMap(), sn = new WeakSet(), Ss = function(t) {
  return `${T(this, ne)}:${t}`;
};
const qu = new Gs("DEFAULT");
function Gu(e, t = "local") {
  return new Gs(e, t);
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
function fa(e, t) {
  return Yu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function pa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Ku(e, t, n) {
  e = e % 360 / 360, t = pa(t), n = pa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
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
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: c = 2,
      src: u,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: g,
      ..._
    } = this.props, w = ["avatar", t], v = { ...n, background: r, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? v.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ y("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const k = Ju(l, c);
      if (w.push("has-text", `has-text-${k.length}`), r)
        !a && r && (v.color = fa(r));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Xu(N)) * d % 360;
        if (v.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const I = Ku(A, f, p);
          v.color = fa(I);
        }
      }
      let E;
      $ && $ < 14 * k.length && (E = { transform: `scale(${$ / (14 * k.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ y("div", { "data-actualSize": $, className: "avatar-text", style: E, children: k });
    }
    return /* @__PURE__ */ y(
      "div",
      {
        className: M(w),
        style: v,
        ..._,
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
var cr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, be = (e, t, n) => (cr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), pn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Dn = (e, t, n, s) => (cr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Hi = (e, t, n) => (cr(e, t, "access private method"), n), je, Es, me, ro, kn, Ms;
const Bi = "show", ga = "in", Zu = '[data-dismiss="modal"]', Cn = class extends at {
  constructor() {
    super(...arguments), pn(this, kn), pn(this, je, 0), pn(this, Es, void 0), pn(this, me, void 0), pn(this, ro, (e) => {
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
    if (this.on("click", be(this, ro)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!be(this, me) || be(this, me)[0] !== n || be(this, me)[1] !== s) && (Dn(this, me, [n, s]), this.layout());
        });
        t.observe(e), Dn(this, Es, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = be(this, Es)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Cn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: o } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Bi, i).css({
      zIndex: `${Cn.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), Hi(this, kn, Ms).call(this, () => {
      m(t).addClass(ga), Hi(this, kn, Ms).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(ga), this.emit("hide"), Hi(this, kn, Ms).call(this, () => {
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
    const i = n.clientWidth, o = n.clientHeight;
    Dn(this, me, [i, o]), typeof e == "function" && (e = e({ width: i, height: o }));
    const r = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (r.alignSelf = "flex-start", r.top = e) : typeof e == "object" && e ? (r.alignSelf = "flex-start", Object.assign(r, e)) : e === "fit" ? (r.alignSelf = "flex-start", r.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? r.alignSelf = "flex-end" : e === "top" ? r.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (r.alignSelf = "flex-start", r.top = e), m(n).css(r), m(this.modalElement).css("justifyContent", r.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = Cn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Cn.query(e)) == null || t.show();
  }
};
let Xt = Cn;
je = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
me = /* @__PURE__ */ new WeakMap();
ro = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakSet();
Ms = function(e, t) {
  be(this, je) && (clearTimeout(be(this, je)), Dn(this, je, 0)), e && (this.options.animation ? Dn(this, je, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
    return /* @__PURE__ */ y("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ y("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
ql.defaultProps = { closeBtn: !0 };
var on, rn, an;
class Qu extends V {
  constructor() {
    super(...arguments);
    O(this, on, void 0);
    O(this, rn, void 0);
    O(this, an, void 0);
    B(this, on, Kt()), this.state = {}, B(this, an, () => {
      var i, o;
      const n = (o = (i = T(this, on).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let s = T(this, rn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = n.body, a = n.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, rn, s);
    });
  }
  componentDidMount() {
    T(this, an).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = T(this, rn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: T(this, on),
        onLoad: T(this, an)
      }
    );
  }
}
on = new WeakMap(), rn = new WeakMap(), an = new WeakMap();
var hr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Et = (e, t, n) => (hr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => (hr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts = (e, t, n) => (hr(e, t, "access private method"), n), ye, Sn, Tt, js, ur, Rs, ao;
function td(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function ed(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
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
        title: r,
        ...o,
        ...u
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: r,
    ...o,
    body: n === "html" ? /* @__PURE__ */ y(dl, { className: "modal-body", html: c, executeScript: l }) : c
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
}, zi = "loading", En = class extends Xt {
  constructor() {
    super(...arguments), gn(this, js), gn(this, Rs), gn(this, ye, void 0), gn(this, Sn, void 0), gn(this, Tt, void 0);
  }
  get id() {
    return Et(this, Sn);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(zi);
  }
  get shown() {
    var e;
    return !!((e = Et(this, ye)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = Et(this, ye);
    if (!e) {
      const { options: t } = this;
      let n = Et(this, Sn);
      n || (n = t.id || `modal-${m.guid++}`, Be(this, Sn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Be(this, ye, e);
    }
    return e;
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
    const e = Et(this, ye);
    e && (m(e).removeData(this.constructor.KEY).remove(), Be(this, ye, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Et(this, Tt) && clearTimeout(Et(this, Tt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: o = null } = t, r = sd[s];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", o).addClass(zi), i && Be(this, Tt, window.setTimeout(() => {
      Be(this, Tt, 0), Ts(this, Rs, ao).call(this, this.options.timeoutTip);
    }, i));
    const a = await r.call(this, e, t);
    return a === !1 ? await Ts(this, Rs, ao).call(this, this.options.failedTip) : a && typeof a == "object" && await Ts(this, js, ur).call(this, a), Et(this, Tt) && (clearTimeout(Et(this, Tt)), Be(this, Tt, 0)), await Is(100), n.removeClass(zi), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const o = En.ensure(n, i);
      o.one("hidden", () => t(o)), o.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: o = "confirm", onClickAction: r, custom: a, key: l = "__alert", ...h } = e;
    let c = /* @__PURE__ */ y("div", { children: n });
    s ? c = /* @__PURE__ */ y("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ y("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ y("div", { className: "modal-body", children: c });
    const u = [];
    (Array.isArray(o) ? o : [o]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Vt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let d;
    const f = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: g }) => {
        const _ = En.query(g.target, l);
        d = p.key, (r == null ? void 0 : r(p, _)) !== !1 && _ && _.hide();
      }
    } : void 0;
    return await En.open({
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
    return await En.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, r) => {
        n == null || n(o.key === "confirm", r), t == null || t(o, r);
      },
      ...s
    }) === "confirm";
  }
};
let Gl = En;
ye = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakSet();
ur = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], m(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, qn(
      /* @__PURE__ */ y(ql, { ...e }),
      this.modalElement
    );
  });
};
Rs = /* @__PURE__ */ new WeakSet();
ao = function(e) {
  if (e)
    return Ts(this, js, ur).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: e })
    });
};
Gl.DEFAULT = {
  ...Xt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var dr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, lo = (e, t, n) => (dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ma = (e, t, n, s) => (dr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), co = (e, t, n) => (dr(e, t, "access private method"), n), Se, fr, jl, ho, Yl, pr, Kl;
const id = '[data-toggle="modal"]';
class Xl extends at {
  constructor() {
    super(...arguments), ys(this, fr), ys(this, ho), ys(this, pr), ys(this, Se, void 0);
  }
  get modal() {
    return lo(this, Se);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = co(this, ho, Yl).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = lo(this, Se)) == null ? void 0 : t.hide();
  }
}
Se = /* @__PURE__ */ new WeakMap();
fr = /* @__PURE__ */ new WeakSet();
jl = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
ho = /* @__PURE__ */ new WeakSet();
Yl = function() {
  const e = co(this, fr, jl).call(this);
  let t = lo(this, Se);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = co(this, pr, Kl).call(this);
    if (!n)
      return;
    t = Xt.ensure(n, e);
  } else
    t = Gl.ensure(this.container, e);
  return ma(this, Se, t), t.on("destroyed", () => {
    ma(this, Se, void 0);
  }), t;
};
pr = /* @__PURE__ */ new WeakSet();
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
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Jl.NAME = "nav";
class Zl extends J {
}
Zl.NAME = "Nav";
Zl.Component = Jl;
function Yn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function od({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = Yn(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : et(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ y(qt, { type: n, ...a });
}
const Lt = 24 * 60 * 60 * 1e3, it = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), os = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), uo = (e, t = /* @__PURE__ */ new Date()) => it(e).getFullYear() === it(t).getFullYear(), rd = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), kf = (e, t = /* @__PURE__ */ new Date()) => {
  e = it(e), t = it(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Cf = (e, t) => os(it(t), e), Sf = (e, t) => os(it(t).getTime() - Lt, e), Ef = (e, t) => os(it(t).getTime() + Lt, e), Mf = (e, t) => os(it(t).getTime() - 2 * Lt, e), fo = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", uo(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, Tf = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = fo(e, uo(e) ? s.month : s.full);
  if (os(e, t))
    return i;
  const o = fo(t, uo(e, t) ? rd(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Rf = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Lt * 7;
    case "oneMonth":
      return t - Lt * 31;
    case "threeMonth":
      return t - Lt * 31 * 3;
    case "halfYear":
      return t - Lt * 183;
    case "oneYear":
      return t - Lt * 365;
    case "twoYear":
      return t - 2 * (Lt * 365);
    default:
      return 0;
  }
}, ya = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ya(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, ya(e, "day", n, s);
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
  children: o,
  ...r
}) {
  const a = Yn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ y(gl, { ...r, children: [
    o,
    s
  ] });
}
function ld({
  key: e,
  type: t,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ y(qt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let g = d; g <= f; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const _ = Yn(i, g);
      r && (l.url = typeof r == "function" ? r(_) : et(r, _)), p.push(/* @__PURE__ */ y(qt, { type: n, ...l, onClick: o }));
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
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...t, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof n == "function" ? n(c) : et(n, c)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ y(Al, { type: "dropdown", dropdown: i, ...r });
}
function hd({
  key: e,
  page: t,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const c = { ...h };
  let u;
  const d = (g) => {
    var _;
    u = Number((_ = g.target) == null ? void 0 : _.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const _ = Yn(i, u);
    a && !a({ info: _, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(_) : et(l, _));
  }, p = Yn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ y("div", { className: M("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ y(qt, { type: s, ...c, onClick: f })
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
    const i = super.getItemRenderProps(t, n, s), o = n.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
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
  link: od,
  info: ad,
  nav: ld,
  "size-menu": cd,
  goto: hd
};
class Ql extends J {
}
Ql.NAME = "Pager";
Ql.Component = $i;
class gr extends V {
  constructor() {
    super(...arguments), this._handleClick = (t) => {
      t.stopPropagation(), !m(t.target).closest("a,.btn,input").length && this.props.togglePop();
    };
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i } = t;
    return M(
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
var $e, _t, se;
class tc extends V {
  constructor() {
    super(...arguments);
    O(this, $e, void 0);
    O(this, _t, void 0);
    O(this, se, void 0);
    this.state = { show: !1 }, B(this, $e, Kt()), this._handleDocClick = (n) => {
      const { state: { open: s }, id: i, togglePop: o } = this.props;
      s !== "closing" && !m(n.target).closest(`#pick-${i},#pick-pop-${i}`).length && o(!1);
    };
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = T(this, $e)) == null ? void 0 : n.current;
  }
  get container() {
    return T(this, se);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: o } = i;
    return M(
      "pick-pop",
      s,
      o === !0 && "in"
    );
  }
  _getContainer(n) {
    if (!T(this, se)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, se, i[0]);
    }
    return T(this, se);
  }
  _render(n) {
    const {
      id: s,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = n, h = m.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return /* @__PURE__ */ y(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: h,
        ref: T(this, $e),
        children: this._renderPop(n)
      }
    );
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: o } = i;
    if (!n || !s || !o.open) {
      T(this, _t) && (T(this, _t).call(this), B(this, _t, void 0));
      return;
    }
    T(this, _t) || B(this, _t, er(s, n, () => {
      const { direction: r, width: a } = i;
      xi(s, n, {
        placement: `${r === "top" ? "top" : "bottom"}-start`,
        middleware: [r === "auto" ? _i() : null, Qi(), Zo(1)].filter(Boolean)
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
    const n = T(this, _t);
    n && (n(), B(this, _t, void 0)), B(this, se, void 0), B(this, $e, void 0);
  }
  render(n) {
    return fu(this._render(n), this._getContainer(n));
  }
}
$e = new WeakMap(), _t = new WeakMap(), se = new WeakMap();
var ec = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, mn = (e, t, n) => (ec(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wa = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ze = (e, t, n, s) => (ec(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ns, ht;
let hn = class extends V {
  constructor(t) {
    super(t), wa(this, Ns, void 0), wa(this, ht, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return i;
      mn(this, ht) && (clearTimeout(mn(this, ht)), ze(this, ht, 0));
      let o = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: r } = o;
      return r === "closing" ? (await Is(200, (a) => {
        ze(this, ht, a);
      }), ze(this, ht, 0), o = await this.changeState({ open: !1 })) : r === "opening" && (await Is(50, (a) => {
        ze(this, ht, a);
      }), ze(this, ht, 0), o = await this.changeState({ open: !0 })), o;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, ze(this, Ns, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return mn(this, Ns);
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
    const { onPopShow: o, onPopHide: r } = this.props;
    i && o ? o() : !i && r && r();
  }
  componentDidUpdate(t, n) {
    const { open: s, value: i } = this.state, { open: o, value: r } = n;
    if (!!s != !!o) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    if (i !== r) {
      const { onChange: a } = this.props;
      a == null || a(i, r);
    }
    this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), mn(this, ht) && clearTimeout(mn(this, ht));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let o;
    if (s) {
      const r = this._getPop(t);
      o = /* @__PURE__ */ y(r, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ y(es, { children: [
      /* @__PURE__ */ y(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      o
    ] });
  }
};
Ns = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
hn.Trigger = gr;
hn.Pop = tc;
hn.defaultProps = {
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
nc.Component = hn;
var Qn;
class ud extends gr {
  constructor() {
    super(...arguments);
    O(this, Qn, void 0);
    B(this, Qn, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && o && s(o), n.stopPropagation();
    }), this._renderSelection = (n) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
      n.text ?? n.value,
      /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: T(this, Qn), "data-value": n.value, children: /* @__PURE__ */ y("span", { className: "close" }) })
    ] }, n.value);
  }
  _getClass() {
    return M(
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
Qn = new WeakMap();
var ii;
class dd extends gr {
  constructor() {
    super(...arguments);
    O(this, ii, (n) => {
      var s, i;
      (i = (s = this.props).onClear) == null || i.call(s), n.stopPropagation();
    });
  }
  _getClass() {
    return M(
      super._getClass(),
      "picker-select picker-select-single form-control"
    );
  }
  _renderTrigger() {
    const { children: n, state: { selections: s = [] }, placeholder: i } = this.props, [o] = s, r = o ? /* @__PURE__ */ y("span", { className: "picker-single-selection", children: o.text ?? o.value }, "selection") : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: i }, "selection"), a = o ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: T(this, ii), children: /* @__PURE__ */ y("span", { className: "close" }) }, "deselect") : null;
    return [
      r,
      n,
      a,
      /* @__PURE__ */ y("span", { class: "caret" }, "caret")
    ];
  }
}
ii = new WeakMap();
const fd = (e, t) => e.reduce((n, s) => [...n].reduce((i, o) => {
  if (typeof o != "string")
    return i.push(o), i;
  const r = o.toLowerCase().split(s);
  if (r.length === 1)
    return i.push(o), i;
  let a = 0;
  return r.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ y("span", { class: "picker-menu-item-match", children: o.substring(a, a + s.length) })), a += s.length), i.push(o.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var oi, ri, sc, ai, ic, li;
class pd extends tc {
  constructor() {
    super(...arguments);
    O(this, ri);
    O(this, ai);
    O(this, oi, Kt());
    O(this, li, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(s) : (r(s), a(!1));
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
      const s = De(this, ri, sc).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
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
    return /* @__PURE__ */ y(
      wi,
      {
        ref: T(this, oi),
        className: "picker-menu-list",
        items: De(this, ai, ic).call(this),
        onClickItem: T(this, li),
        ...s
      }
    );
  }
}
oi = new WeakMap(), ri = new WeakSet(), sc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, ai = new WeakSet(), ic = function() {
  const { selections: n, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(o.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, u) => {
    const {
      value: d = "",
      keys: f,
      text: p,
      className: g,
      ..._
    } = u;
    d === i && (a = !0);
    const w = `${p ?? d}`;
    return c.push({
      key: d,
      active: r.has(d),
      text: fd(l, [w]),
      className: M(g, { hover: d === i }),
      "data-value": d,
      ..._
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, li = new WeakMap();
var mr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Jt = (e, t, n) => (mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, fe = (e, t, n, s) => (mr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), dt = (e, t, n) => (mr(e, t, "access private method"), n), Mn, Rt, we, Ye, In, yr, oc, Qt, _e;
let wr = class extends hn {
  constructor(t) {
    super(t), Fe(this, Ye), Fe(this, yr), Fe(this, Qt), Fe(this, Mn, void 0), Fe(this, Rt, void 0), Fe(this, we, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? dt(this, Qt, _e).call(this, n) : dt(this, Qt, _e).call(this);
      const { valueList: i } = this, o = i.indexOf(n);
      if (s !== o >= 0)
        return o > -1 ? i.splice(o, 1) : i.push(n), dt(this, Qt, _e).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(dt(this, Ye, In).call(this, n)), o = s.filter((r) => !i.has(r));
      dt(this, Qt, _e).call(this, o);
    }, this.clear = () => {
      dt(this, Qt, _e).call(this);
    }, this.select = (n) => {
      const s = dt(this, Ye, In).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return dt(this, Qt, _e).call(this, i);
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
    return dt(this, Ye, In).call(this, this.state.value);
  }
  async load() {
    let t = Jt(this, Rt);
    t && t.abort(), t = new AbortController(), fe(this, Rt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let o = [];
    if (typeof n == "function") {
      if (await Is(s || 500), Jt(this, Rt) !== t || (o = await n(i, { signal: t.signal }), Jt(this, Rt) !== t))
        return o;
    } else if (i.length) {
      const r = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      r.length ? o = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: u
        } = l;
        return r.every((d) => h.toLowerCase().includes(d) || c.toLowerCase().includes(d) || typeof u == "string" && u.toLowerCase().includes(d)) && a.push(l), a;
      }, []) : o = n;
    } else
      o = n;
    return fe(this, Rt, void 0), o;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Jt(this, Mn) || {}, o = {};
    if (fe(this, Mn, i), (t || i.search !== n.search || s.items !== i.items) && (o.items = await this.load(), o.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const r = o.items || n.items, a = new Map(r.map((l) => [l.value, l]));
      o.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(o).length && await this.changeState(o);
  }
  async tryUpdate() {
    Jt(this, we) && clearTimeout(Jt(this, we)), fe(this, we, window.setTimeout(() => {
      fe(this, we, 0), this.update();
    }, 100));
  }
  componentDidUpdate(t, n) {
    super.componentDidUpdate(t, n), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = Jt(this, Rt)) == null || t.abort(), fe(this, Rt, void 0), fe(this, Mn, void 0), clearTimeout(Jt(this, we)), super.componentWillUnmount();
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
Mn = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakSet();
In = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
yr = /* @__PURE__ */ new WeakSet();
oc = function(e) {
  const t = dt(this, Ye, In).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
Qt = /* @__PURE__ */ new WeakSet();
_e = function(e) {
  const t = e === void 0 ? e : dt(this, yr, oc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
wr.defaultProps = {
  ...hn.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
wr.Pop = pd;
class rc extends J {
}
rc.NAME = "Picker";
rc.Component = wr;
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
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(_i()), o && s.middleware.push(o === !0 ? Qi() : Qi(o)), r && s.middleware.push(Zi({ element: this.$arrow[0] })), a && s.middleware.push(Zo(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = er(t, n, () => {
      xi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Zi || !r.arrow)
          return;
        const { x: a, y: l } = r.arrow, h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[o.split("-")[0]];
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
function _r(e) {
  return e === "y" ? "height" : "width";
}
function Qe(e) {
  return e.split("-")[0];
}
function ki(e) {
  return ["top", "bottom"].includes(Qe(e)) ? "x" : "y";
}
function _a(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = ki(t), l = _r(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Qe(t)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
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
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = _a(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: _, fn: w } = a[g], { x: v, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, f = { ...f, [_]: { ...f[_], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = _a(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function cc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ys(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function md(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = t, p = cc(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], _ = Ys(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, C = Ys(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / $.y, bottom: (C.bottom - _.bottom + p.bottom) / $.y, left: (_.left - C.left + p.left) / $.x, right: (C.right - _.right + p.right) / $.x };
}
const yd = Math.min, wd = Math.max;
function _d(e, t, n) {
  return wd(e, yd(t, n));
}
const vd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = cc(s), c = { x: i, y: o }, u = ki(r), d = _r(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", _ = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const C = _ / 2 - w / 2, k = h[p], E = $ - f[d] - h[g], N = $ / 2 - f[d] / 2 + C, A = _d(k, N, E), I = rs(r) != null && N != A && a.reference[d] / 2 - (N < k ? h[p] : h[g]) - f[d] / 2 < 0;
  return { [u]: c[u] - (I ? N < k ? k - N : E - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), bd = ["top", "right", "bottom", "left"];
bd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const xd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ks(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xd[t]);
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  const s = rs(e), i = ki(e), o = _r(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Ks(r)), { main: r, cross: Ks(r) };
}
const kd = { start: "end", end: "start" };
function Fi(e) {
  return e.replace(/start|end/g, (t) => kd[t]);
}
const Cd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = e, _ = Qe(s), w = Qe(r) === r, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Ks(r)] : function(b) {
      const R = Ks(b);
      return [Fi(b), R, Fi(R)];
    }(r));
    u || f === "none" || $.push(...function(b, R, W, L) {
      const D = rs(b);
      let P = function(F, lt, Ct) {
        const ls = ["left", "right"], un = ["right", "left"], cs = ["top", "bottom"], Ni = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Ct ? lt ? un : ls : lt ? ls : un;
          case "left":
          case "right":
            return lt ? cs : Ni;
          default:
            return [];
        }
      }(Qe(b), W === "start", L);
      return D && (P = P.map((F) => F + "-" + D), R && (P = P.concat(P.map(Fi)))), P;
    }(r, p, f, v));
    const C = [r, ...$], k = await md(t, g), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[_]), c) {
      const { main: b, cross: R } = $d(s, o, v);
      E.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let W = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const L = (I = N.map((D) => [D, D.overflows.filter((P) => P > 0).reduce((P, F) => P + F, 0)]).sort((D, P) => D[1] - P[1])[0]) == null ? void 0 : I[0].placement;
          L && (W = L);
          break;
        }
        case "initialPlacement":
          W = r;
      }
      if (s !== W)
        return { reset: { placement: W } };
    }
    return {};
  } };
}, Sd = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Qe(a), d = rs(a), f = ki(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, _ = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof $ == "number" && (v = d === "end" ? -1 * $ : $), f ? { x: v * g, y: w * p } : { x: w * p, y: v * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  return ot(e).getComputedStyle(e);
}
function ce(e) {
  return uc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function hc() {
  if (ws)
    return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ws) : navigator.userAgent;
}
function Gt(e) {
  return e instanceof ot(e).HTMLElement;
}
function pt(e) {
  return e instanceof ot(e).Element;
}
function uc(e) {
  return e instanceof ot(e).Node;
}
function va(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ci(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Ed(e) {
  return ["table", "td", "th"].includes(ce(e));
}
function po(e) {
  const t = /firefox/i.test(hc()), n = xt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function dc() {
  return !/^((?!chrome|android).)*safari/i.test(hc());
}
function vr(e) {
  return ["html", "body", "#document"].includes(ce(e));
}
const ba = Math.min, On = Math.max, Xs = Math.round;
function fc(e) {
  const t = xt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Xs(n) !== i || Xs(s) !== o;
  return r && (n = i, s = o), { width: n, height: s, fallback: r };
}
function pc(e) {
  return pt(e) ? e : e.contextElement;
}
const gc = { x: 1, y: 1 };
function tn(e) {
  const t = pc(e);
  if (!Gt(t))
    return gc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: o } = fc(t);
  let r = (o ? Xs(n.width) : n.width) / s, a = (o ? Xs(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Ne(e, t, n, s) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = pc(e);
  let l = gc;
  t && (s ? pt(s) && (l = tn(s)) : l = tn(e));
  const h = a ? ot(a) : window, c = !dc() && n;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, f = r.width / l.x, p = r.height / l.y;
  if (a) {
    const g = ot(a), _ = s && pt(s) ? ot(s) : s;
    let w = g.frameElement;
    for (; w && s && _ !== g; ) {
      const v = tn(w), $ = w.getBoundingClientRect(), C = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(C.paddingLeft)) * v.x, $.y += (w.clientTop + parseFloat(C.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, p *= v.y, u += $.x, d += $.y, w = ot(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function ae(e) {
  return ((uc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Si(e) {
  return pt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function mc(e) {
  return Ne(ae(e)).left + Si(e).scrollLeft;
}
function Md(e, t, n) {
  const s = Gt(t), i = ae(t), o = Ne(e, !0, n === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ce(t) !== "body" || Ci(i)) && (r = Si(t)), Gt(t)) {
      const l = Ne(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = mc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function Kn(e) {
  if (ce(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (va(e) ? e.host : null) || ae(e);
  return va(t) ? t.host : t;
}
function xa(e) {
  return Gt(e) && xt(e).position !== "fixed" ? e.offsetParent : null;
}
function $a(e) {
  const t = ot(e);
  let n = xa(e);
  for (; n && Ed(n) && xt(n).position === "static"; )
    n = xa(n);
  return n && (ce(n) === "html" || ce(n) === "body" && xt(n).position === "static" && !po(n)) ? t : n || function(s) {
    let i = Kn(s);
    for (; Gt(i) && !vr(i); ) {
      if (po(i))
        return i;
      i = Kn(i);
    }
    return null;
  }(e) || t;
}
function yc(e) {
  const t = Kn(e);
  return vr(t) ? e.ownerDocument.body : Gt(t) && Ci(t) ? t : yc(t);
}
function Hn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = yc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ot(s);
  return i ? t.concat(o, o.visualViewport || [], Ci(s) ? s : []) : t.concat(s, Hn(s));
}
function ka(e, t, n) {
  return t === "viewport" ? Ys(function(s, i) {
    const o = ot(s), r = ae(s), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = dc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : pt(t) ? function(s, i) {
    const o = Ne(s, !0, i === "fixed"), r = o.top + s.clientTop, a = o.left + s.clientLeft, l = Gt(s) ? tn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = r * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(t, n) : Ys(function(s) {
    var i;
    const o = ae(s), r = Si(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = On(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = On(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -r.scrollLeft + mc(s);
    const u = -r.scrollTop;
    return xt(a || o).direction === "rtl" && (c += On(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(ae(e)));
}
const Td = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Hn(h).filter((_) => pt(_) && ce(_) !== "body"), f = null;
    const p = xt(h).position === "fixed";
    let g = p ? Kn(h) : h;
    for (; pt(g) && !vr(g); ) {
      const _ = xt(g), w = po(g);
      (p ? w || f : w || _.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = _ : d = d.filter((v) => v !== g), g = Kn(g);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = ka(t, c, i);
    return h.top = On(u.top, h.top), h.right = ba(u.right, h.right), h.bottom = ba(u.bottom, h.bottom), h.left = On(u.left, h.left), h;
  }, ka(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Gt(n), o = ae(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ce(n) !== "body" || Ci(o)) && (r = Si(n)), Gt(n))) {
    const h = Ne(n);
    a = tn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: pt, getDimensions: function(e) {
  return fc(e);
}, getOffsetParent: $a, getDocumentElement: ae, getScale: tn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || $a, o = this.getDimensions;
  return { reference: Md(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => xt(e).direction === "rtl" };
function Rd(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || o ? [...pt(e) ? Hn(e) : e.contextElement ? Hn(e.contextElement) : [], ...Hn(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), o && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (r) {
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
      l && p.removeEventListener("scroll", n), o && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Nd = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Td, ...n }, o = { ...i.platform, _c: s };
  return gd(e, t, { ...i, platform: o });
};
var br = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (br(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ae = (e, t, n, s) => (br(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), bt = (e, t, n) => (br(e, t, "access private method"), n), Bn, zn, Tn, Ke, nt, go, Js, Ei, xr, $r, wc, mo, _c, kr, vc, Cr, bc, Sr, xc, yo, $c, Er, kc, Fn, wo, Cc;
const Xe = class extends at {
  constructor() {
    super(...arguments), j(this, Ei), j(this, $r), j(this, mo), j(this, kr), j(this, Cr), j(this, Sr), j(this, yo), j(this, Er), j(this, wo), j(this, Bn, !1), j(this, zn, void 0), j(this, Tn, 0), j(this, Ke, void 0), j(this, nt, void 0), j(this, go, void 0), j(this, Js, void 0), this.hideLater = () => {
      U(this, Fn).call(this), Ae(this, Tn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Fn, () => {
      clearTimeout(U(this, Tn)), Ae(this, Tn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Ke)) == null ? void 0 : e.classList.contains(Xe.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Ke) || bt(this, mo, _c).call(this);
  }
  get trigger() {
    return U(this, go) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Xe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Bn) && this.isHover && bt(this, wo, Cc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Xe.CLASS_SHOW), bt(this, yo, $c).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Js)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Ke)) == null || t.classList.remove(Xe.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Bn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Fn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, o] of n)
      s.has(i) || o.hide();
  }
};
let $t = Xe;
Bn = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
go = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
xr = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
$r = /* @__PURE__ */ new WeakSet();
wc = function() {
  const e = bt(this, Ei, xr).call(this);
  return Ae(this, nt, document.createElement("div")), U(this, nt).style.position = this.options.strategy, U(this, nt).style.width = `${e}px`, U(this, nt).style.height = `${e}px`, U(this, nt).style.transform = "rotate(45deg)", U(this, nt);
};
mo = /* @__PURE__ */ new WeakSet();
_c = function() {
  var n;
  const e = Xe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(bt(this, $r, wc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ae(this, Ke, t), t;
};
kr = /* @__PURE__ */ new WeakSet();
vc = function() {
  var i;
  const e = bt(this, Ei, xr).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Sd(e), Cd()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, nt) && ((i = s.middleware) == null || i.push(vd({ element: U(this, nt) }))), s;
};
Cr = /* @__PURE__ */ new WeakSet();
bc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Sr = /* @__PURE__ */ new WeakSet();
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
yo = /* @__PURE__ */ new WeakSet();
$c = function() {
  const e = bt(this, kr, vc).call(this), t = bt(this, Er, kc).call(this);
  Ae(this, Js, Rd(t, this.tooltip, () => {
    Nd(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: o }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const r = o.split("-")[0], a = bt(this, Cr, bc).call(this, r);
      if (i.arrow && U(this, nt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, nt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...bt(this, Sr, xc).call(this, r)
        });
      }
    });
  }));
};
Er = /* @__PURE__ */ new WeakSet();
kc = function() {
  return U(this, zn) || Ae(this, zn, {
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
  }), U(this, zn);
};
Fn = /* @__PURE__ */ new WeakMap();
wo = /* @__PURE__ */ new WeakSet();
Cc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Fn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ae(this, Bn, !0);
};
$t.NAME = "tooltip";
$t.TOOLTIP_CLASS = "tooltip";
$t.CLASS_SHOW = "show";
$t.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
$t.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, $t.MENU_SELECTOR);
  if (n) {
    const i = $t.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    $t.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, $t.MENU_SELECTOR);
  if (!n)
    return;
  const s = $t.ensure(n);
  s.isHover && s.show();
});
function Ad({
  type: e,
  component: t,
  className: n,
  children: s,
  style: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: u,
  trailingIcon: d,
  hint: f,
  checked: p,
  actions: g,
  show: _,
  level: w = 0,
  items: v,
  ...$
}) {
  const C = Array.isArray(g) ? { items: g } : g;
  return C && (C.btnProps || (C.btnProps = { size: "sm" }), C.className = M("tree-actions not-nested-toggle", C.className)), /* @__PURE__ */ y(
    "div",
    {
      className: M("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...o,
      ...$,
      children: [
        /* @__PURE__ */ y("span", { class: `tree-toggle-icon${v ? " state" : ""}`, children: v ? /* @__PURE__ */ y("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ y("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
        /* @__PURE__ */ y(Gn, { icon: h, className: "tree-icon" }),
        r ? /* @__PURE__ */ y("a", { className: "text tree-link not-nested-toggle", href: r, children: c }) : /* @__PURE__ */ y("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ y(mt, { ...C }) : null,
        /* @__PURE__ */ y(Gn, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Mr = class extends yi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...n
    };
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: n } = this.props;
    return n && (t.className = M(t.className, "tree-hover")), t;
  }
};
Mr.ItemComponents = {
  item: Ad
};
Mr.NAME = "tree";
class Sc extends J {
}
Sc.NAME = "Tree";
Sc.Component = Mr;
var ts, ci, hi, ui;
class Ld extends V {
  constructor(n) {
    super(n);
    O(this, ts, Kt());
    O(this, ci, (n) => {
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
    O(this, hi, (n) => {
      var o, r, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = n.dataTransfer) == null || o.setData("application/id", this.props.block.id), (a = (r = this.props).onDragStart) == null || a.call(r, n);
    });
    O(this, ui, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return T(this, ts).current;
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
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(et(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ y(dl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ y("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: o, style: r, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ y("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ y(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: T(this, hi),
        onDragEnd: T(this, ui),
        "data-id": c,
        ref: T(this, ts),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: T(this, ci), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
ts = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), ui = new WeakMap();
var Ec = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, zt = (e, t, n) => (Ec(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ut = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, yt = (e, t, n) => (Ec(e, t, "access private method"), n), jt, Tr, Mc, Rr, Tc, _o, Rc, Nr, Nc, Zs, vo, Mi, bo, Ar, Ac, xo, $o, Ti, Lr;
const Pr = class extends V {
  constructor() {
    super(...arguments), ut(this, Tr), ut(this, Rr), ut(this, _o), ut(this, Nr), ut(this, Zs), ut(this, Mi), ut(this, Ar), ut(this, jt, /* @__PURE__ */ new Map()), this.state = {}, ut(this, xo, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), ut(this, $o, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = yt(this, _o, Rc).call(this), { cellHeight: n, grid: s } = this.props, i = zt(this, jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ y("div", { class: "dashboard", children: /* @__PURE__ */ y("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((o, r) => {
      const { id: a } = o, [l, h, c, u] = i.get(a) || [0, 0, o.width, o.height];
      return /* @__PURE__ */ y(
        Ld,
        {
          id: a,
          index: r,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: o,
          moreMenu: !0,
          onDragStart: zt(this, xo),
          onDragEnd: zt(this, $o)
        },
        o.id
      );
    }) }) });
  }
};
let Wr = Pr;
jt = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakSet();
Mc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Rr = /* @__PURE__ */ new WeakSet();
Tc = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: o,
      size: r,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...u
    } = i, [d, f] = yt(this, Tr, Mc).call(this, r);
    return {
      id: `${o}`,
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
_o = /* @__PURE__ */ new WeakSet();
Rc = function() {
  zt(this, jt).clear();
  let e = 0;
  const t = yt(this, Rr, Tc).call(this);
  return t.forEach((n) => {
    yt(this, Nr, Nc).call(this, n);
    const [, s, , i] = zt(this, jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Nr = /* @__PURE__ */ new WeakSet();
Nc = function(e) {
  const t = zt(this, jt), { id: n, left: s, top: i, width: o, height: r } = e;
  if (s < 0 || i < 0) {
    const [a, l] = yt(this, Ar, Ac).call(this, o, r, s, i);
    t.set(n, [a, l, o, r]);
  } else
    yt(this, Mi, bo).call(this, n, [s, i, o, r]);
};
Zs = /* @__PURE__ */ new WeakSet();
vo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of zt(this, jt).entries())
    if (s !== n && yt(t = Pr, Ti, Lr).call(t, i, e))
      return !1;
  return !0;
};
Mi = /* @__PURE__ */ new WeakSet();
bo = function(e, t) {
  var n;
  zt(this, jt).set(e, t);
  for (const [s, i] of zt(this, jt).entries())
    s !== e && yt(n = Pr, Ti, Lr).call(n, i, t) && (i[1] = t[1] + t[3], yt(this, Mi, bo).call(this, s, i));
};
Ar = /* @__PURE__ */ new WeakSet();
Ac = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (yt(this, Zs, vo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, o = s < 0 ? 0 : s, r = !1;
  const a = this.props.grid;
  for (; !r; ) {
    if (yt(this, Zs, vo).call(this, [i, o, e, t])) {
      r = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, o += 1)) : o += 1;
  }
  return [i, o];
};
xo = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakSet();
Lr = function([e, t, n, s], [i, o, r, a]) {
  return !(e + n <= i || i + r <= e || t + s <= o || o + a <= t);
};
ut(Wr, Ti);
Wr.defaultProps = {
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
Lc.Component = Wr;
var ie, oe;
class Ca extends V {
  constructor(n) {
    super(n);
    O(this, ie, void 0);
    O(this, oe, void 0);
    B(this, ie, 0), B(this, oe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (T(this, ie) && cancelAnimationFrame(T(this, ie)), B(this, ie, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), B(this, ie, 0);
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
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? s.clientX - o.left : s.clientY - o.top) - this.barSize / 2;
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
    const { clientSize: n, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(n * n / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (B(this, oe, typeof n == "string" ? document : n.current), T(this, oe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), T(this, oe) && T(this, oe).removeEventListener("wheel", this._handleWheel);
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
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: u, scrollPos: d } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(u, d) * (n - g.width) / u)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(u, d) * (n - g.height) / u)), /* @__PURE__ */ y(
      "div",
      {
        className: M("scrollbar", o, {
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
ie = new WeakMap(), oe = new WeakMap();
function Pc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, ...h }) {
  var I;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...r
  }, { align: u, border: d } = e.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...o
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], _ = (I = s.data) == null ? void 0 : I[e.name], w = [a ?? _ ?? ""], v = i ? i(w, { row: s, col: e, value: _ }, q) : w, $ = [], C = [], k = {}, E = {};
  let N = "div";
  v == null || v.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : C;
      b.html ? R.push(/* @__PURE__ */ y("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : E, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      C.push(b);
  });
  const A = N;
  return /* @__PURE__ */ y(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...k,
      children: [
        C.length > 0 && /* @__PURE__ */ y(A, { className: M(g), style: f, ...E, children: C }),
        $
      ]
    }
  );
}
function Ui({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: a = Pc, onRenderCell: l }) {
  return /* @__PURE__ */ y("div", { className: M("dtable-cells", t), style: { top: n, left: s, width: i, height: o }, children: r.map((h) => h.visible ? /* @__PURE__ */ y(
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
  cols: { left: i, center: o, right: r },
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
  o.list.length && (f = /* @__PURE__ */ y(
    Ui,
    {
      className: "dtable-flexable",
      cols: o.list,
      left: i.width - a,
      width: Math.max(o.width, o.totalWidth),
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  r.list.length && (p = /* @__PURE__ */ y(
    Ui,
    {
      className: "dtable-fixed-right",
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  const g = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ y(
    "div",
    {
      className: M("dtable-row", t),
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
  rowHeight: o,
  scrollTop: r,
  onRenderRow: a,
  ...l
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ y("div", { className: M("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - r,
      height: o,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ y(Wc, { ...c }, h.id);
  }) });
}
const Qs = /* @__PURE__ */ new Map(), ti = [];
function Dc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Qs.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Qs.set(n, e), t != null && t.buildIn && !ti.includes(n) && ti.push(n);
}
function de(e, t) {
  Dc(e, t);
  const n = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = e, n;
}
function Ic(e) {
  return Qs.delete(e);
}
function Dd(e) {
  if (typeof e == "string") {
    const t = Qs.get(e);
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
    var o;
    if (!s)
      return;
    const i = Dd(s);
    i && (n.has(i.name) || ((o = i.plugins) != null && o.length && Oc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function Id(e = [], t = !0) {
  return t && ti.length && e.unshift(...ti), e != null && e.length ? Oc([], e, /* @__PURE__ */ new Set()) : [];
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
function Sa(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Vi(e, t = !1) {
  if (!e.list.length)
    return;
  if (e.widthSetting && e.width !== e.widthSetting) {
    e.width = e.widthSetting;
    const s = e.width - e.totalWidth;
    if (t || s > 0) {
      const i = e.flexList.length ? e.flexList : e.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math.min(s, Math.ceil(s * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let n = 0;
  e.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function Hd(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (v) => (typeof v == "function" && (v = v.call(e)), v = Sa(v, 0), v < 1 && (v = Math.round(v * s)), v), c = {
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
  const _ = [], w = {};
  if (n.forEach((v) => {
    const { colTypes: $, onAddCol: C } = v;
    $ && Object.entries($).forEach(([k, E]) => {
      w[k] || (w[k] = []), w[k].push(E);
    }), C && _.push(C);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: $ = "", name: C } = v, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...v,
      type: $
    }, E = {
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
      P && Object.assign(k, P, v);
    });
    const { fixed: A, flex: I, minWidth: b = o, maxWidth: R = r } = k, W = Sa(k.width || i, i);
    E.flex = I === !0 ? 1 : typeof I == "number" ? I : 0, E.width = Od(W < 1 ? Math.round(W * s) : W, b, R), _.forEach((D) => D.call(e, E)), f.push(E), p[E.name] = E;
    const L = A ? A === "left" ? u : d : c;
    L.list.push(E), L.totalWidth += E.width, L.width = L.totalWidth, E.flex && L.flexList.push(E), typeof k.order == "number" && (g = !0);
  }), g) {
    const v = ($, C) => ($.setting.order ?? 0) - (C.setting.order ?? 0);
    f.sort(v), u.list.sort(v), c.list.sort(v), d.list.sort(v);
  }
  return Vi(u, !0), Vi(d, !0), c.widthSetting = s - u.width - d.width, Vi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Dr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, S = (e, t, n) => (Dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Dr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), At = (e, t, n) => (Dr(e, t, "access private method"), n), qe, Rn, Ee, It, xe, X, Pt, Nt, Nn, As, ei, te, An, Ln, ko, Bc, Co, zc, So, Fc, Eo, Uc, Ls, Mo, Ir, Or, Ri, ni, To, Ro, Hr, Vc, Br, qc, No, Gc;
let zr = class extends V {
  constructor(t) {
    super(t), H(this, ko), H(this, Co), H(this, So), H(this, Eo), H(this, Ls), H(this, Hr), H(this, Br), H(this, No), this.ref = Kt(), H(this, qe, 0), H(this, Rn, void 0), H(this, Ee, !1), H(this, It, void 0), H(this, xe, void 0), H(this, X, []), H(this, Pt, void 0), H(this, Nt, /* @__PURE__ */ new Map()), H(this, Nn, {}), H(this, As, void 0), H(this, ei, []), this.updateLayout = () => {
      S(this, qe) && cancelAnimationFrame(S(this, qe)), Y(this, qe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, qe, 0);
      }));
    }, H(this, te, (n, s) => {
      s = s || n.type;
      const i = S(this, Nt).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, An, (n) => {
      S(this, te).call(this, n, `window_${n.type}`);
    }), H(this, Ln, (n) => {
      S(this, te).call(this, n, `document_${n.type}`);
    }), H(this, Ir, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return S(this, X).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, n, s);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    }), H(this, Or, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Ri, (n, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), n[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), r.setting[a] && (n = r.setting[a].call(this, n, s, i)), n;
    }), H(this, ni, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, To, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: o, element: r }), S(this, X).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: o, element: r });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
            return;
          for (const p of S(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of S(this, X))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), H(this, Ro, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Rn, t.id ?? `dtable-${Fl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, xe, Object.freeze(Id(t.plugins))), S(this, xe).forEach((n) => {
      var r;
      const { methods: s, data: i, state: o } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Nn), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = n.onCreate) == null || r.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Pt)) == null ? void 0 : t.options) || S(this, It) || Hc();
  }
  get plugins() {
    return S(this, X);
  }
  get layout() {
    return S(this, Pt);
  }
  get id() {
    return S(this, Rn);
  }
  get data() {
    return S(this, Nn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, It, void 0);
  }
  componentDidMount() {
    if (S(this, Ee) ? this.forceUpdate() : At(this, Ls, Mo).call(this), S(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, To)), this.on("keydown", S(this, Ro)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, As, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, Ee) ? At(this, Ls, Mo).call(this) : S(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, As)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of S(this, Nt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, An)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Ln)) : t.removeEventListener(s, S(this, te));
    S(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, xe).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Nn, {}), S(this, Nt).clear();
  }
  on(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = S(this, Nt).get(t);
    i ? i.push(n) : (S(this, Nt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, An)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Ln)) : (o = this.ref.current) == null || o.addEventListener(t, S(this, te)));
  }
  off(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = S(this, Nt).get(t);
    if (!i)
      return;
    const o = i.indexOf(n);
    o >= 0 && i.splice(o, 1), i.length || (S(this, Nt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, An)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Ln)) : (r = this.ref.current) == null || r.removeEventListener(t, S(this, te)));
  }
  emitCustomEvent(t, n) {
    S(this, te).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: d } = t;
    if (c === "up" || c === "down")
      d = i + (c === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      d = 0;
    else if (c === "bottom")
      d = o - r;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: g } = t;
      typeof p == "number" && (u = s + p), typeof g == "number" && (u = i + g);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, o - r)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
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
    return typeof t == "number" ? n[t] : s[t] || i.find((o) => o.id === t);
  }
  getCellValue(t, n) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let o = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: r } = this.options;
    return r && (o = r.call(this, s, i, o)), o;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!S(this, It))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Pt, void 0);
    else if (s === "options") {
      if (Y(this, It, void 0), !S(this, Pt))
        return;
      Y(this, Pt, void 0);
    }
    this.setState(i ?? ((o) => ({ renderCount: o.renderCount + 1 })), n);
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
    const o = s == null ? void 0 : s.getAttribute("data-col"), r = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof o != "string" || typeof r != "string"))
      return {
        cellElement: s,
        rowElement: i,
        colName: o,
        rowID: r,
        target: n
      };
  }
  i18n(t, n, s) {
    return Vt(S(this, ei), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = At(this, No, Gc).call(this), { className: n, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": o,
      "dtable-bordered": r,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], u = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), u.push(
      At(this, ko, Bc).call(this, t),
      At(this, Co, zc).call(this, t),
      At(this, So, Fc).call(this, t),
      At(this, Eo, Uc).call(this, t)
    ), S(this, X).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ y(
      "div",
      {
        id: S(this, Rn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
qe = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakSet();
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
        onRenderRow: S(this, Or)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Ko,
    {
      className: "dtable-header",
      style: { height: s },
      renders: o,
      generateArgs: [e],
      generatorThis: this
    },
    "header"
  );
};
Co = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a } = e;
  return /* @__PURE__ */ y(
    Wd,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: S(this, Ri),
      onRenderRow: S(this, Ir)
    },
    "rows"
  );
};
So = /* @__PURE__ */ new WeakSet();
Fc = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Ko,
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
Eo = /* @__PURE__ */ new WeakSet();
Uc = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: d } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ y(
      Ca,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: o,
        clientSize: i,
        onScroll: S(this, ni),
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
      Ca,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, ni),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ls = /* @__PURE__ */ new WeakSet();
Mo = function() {
  var e;
  Y(this, Ee, !1), (e = this.options.afterRender) == null || e.call(this), S(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Ir = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
To = /* @__PURE__ */ new WeakMap();
Ro = /* @__PURE__ */ new WeakMap();
Hr = /* @__PURE__ */ new WeakSet();
Vc = function() {
  if (S(this, It))
    return !1;
  const t = { ...Hc(), ...S(this, xe).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, X, S(this, xe).reduce((n, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), n.push(s)), n;
  }, [])), Y(this, It, t), Y(this, ei, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Br = /* @__PURE__ */ new WeakSet();
qc = function() {
  var A, I;
  const { plugins: e } = this;
  let t = S(this, It);
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
  const o = Hd(this, t, e, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, W) => {
    var D, P;
    const L = { data: W ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (W || (L.lazy = !0), h.push(L), ((D = t.onAddRow) == null ? void 0 : D.call(this, L, R)) !== !1) {
      for (const F of e)
        if (((P = F.onAddRow) == null ? void 0 : P.call(this, L, R)) === !1)
          return;
    }
  };
  if (typeof r == "number")
    for (let b = 0; b < r; b++)
      c(`${b}`, b);
  else
    Array.isArray(r) && r.forEach((b, R) => {
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
  const { header: f, footer: p } = t, g = f ? t.headerHeight || l : 0, _ = p ? t.footerHeight || l : 0;
  let w = t.height, v = 0;
  const $ = u.length * l, C = g + _ + $;
  if (typeof w == "function" && (w = w.call(this, C)), w === "auto")
    v = C;
  else if (typeof w == "object")
    v = Math.min(w.max, Math.max(w.min, C));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      v = b.clientHeight;
    else {
      v = 0, Y(this, Ee, !0);
      return;
    }
  } else
    v = w;
  const k = v - g - _, E = {
    options: t,
    allRows: h,
    width: i,
    height: v,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: g,
    footerHeight: _,
    cols: o
  }, N = (I = t.onLayout) == null ? void 0 : I.call(this, E);
  N && Object.assign(E, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, E);
      R && Object.assign(E, R);
    }
  }), Y(this, Pt, E);
};
No = /* @__PURE__ */ new WeakSet();
Gc = function() {
  (At(this, Hr, Vc).call(this) || !S(this, Pt)) && At(this, Br, qc).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = e, l = Math.min(Math.max(0, i - o), this.state.scrollTop), h = Math.floor(l / a), c = l + o, u = Math.min(r.length, Math.ceil(c / a)), d = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < u; p++) {
    const g = r[p];
    g.lazy && f && (g.data = f([g.id])[0], g.lazy = !1), d.push(g);
  }
  return e.visibleRows = d, e.scrollTop = l, e.scrollLeft = n, e;
};
zr.addPlugin = Dc;
zr.removePlugin = Ic;
function Ea(e, t) {
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
      Ea(this, s);
    },
    mouseleave() {
      Ea(this, !1);
    }
  }
}, zd = de(Bd, { buildIn: !0 });
function Fd(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, c) => {
    const u = o ? o.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !jc.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((h) => {
    r(h, t ?? !s[h]);
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
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (n.call(this, r.id) ? 1 : 0), 0)) : t === e;
}
function Vd() {
  return Object.keys(this.state.checkedRows);
}
function qd(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ma(e, t, n = !1) {
  return /* @__PURE__ */ y("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ y("label", {}) });
}
const Gd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Ma
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
        /* @__PURE__ */ y("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Ma(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l;
    const { id: s } = t, { canRowCheckable: i } = this.options, o = i ? i.call(this, s) : !0;
    if (!o)
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, s) : r) {
      const h = this.isRowChecked(s), c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, s, o === "disabled");
      e.unshift(c), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var r;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s);
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
}, jd = de(Gd);
var Yc = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Yc || {});
function si(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = si.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? si.call(this, t.parent).level + 1 : 0, t;
}
function Yd(e) {
  return e !== void 0 ? si.call(this, e) : this.data.nestedMap;
}
function Kd(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Kc.call(this)), t) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (n[o] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      t && (r != null && r.children) ? n[o] = !0 : delete n[o];
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
  for (const o of n) {
    const r = e.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = Xc(e, t, r.children, s + 1)));
  }
  return t;
}
function Jc(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = n, Jc(e, o, n, s);
  }), i;
}
function Zc(e, t, n, s, i) {
  var a;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), o.parent && Zc(e, o.parent, n, s, i);
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
      return Object.entries(t).forEach(([i, o]) => {
        const r = Jc(this, i, o, s);
        r != null && r.parent && Zc(this, r.parent, o, s, n);
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
    getNestedRowInfo: si
  },
  beforeLayout() {
    var e;
    (e = this.data.nestedMap) == null || e.clear();
  },
  onAddRow(e) {
    var i, o;
    const { nestedMap: t } = this.data, n = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (o = e.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(e.id, s), n) {
      let r = t.get(n);
      r || (r = {
        state: "",
        level: 0
      }, t.set(n, r)), r.children || (r.children = []), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Xc(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: o } = t.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, t, i)) ?? /* @__PURE__ */ y("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), r.level) {
      let { nestedIndent: l = o } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ y("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
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
}, Jd = de(Xd);
function Qc(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...o } = e, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ y("a", { href: et(i, t.row.data), ...s, ...o, ...a, children: n });
}
function Fr(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function th(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), fo(n, e, s ?? n));
}
function eh(e, t) {
  const { link: n } = t.col.setting, s = Qc(n, t, e[0]);
  return s && (e[0] = s), e;
}
function nh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Fr(n, t, e[0])), e;
}
function sh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function ih(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = th(s, t, e[0], i), e;
}
function Ao(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : Fr(s, t, i);
  return e[0] = {
    html: o
  }, e;
}
const Zd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Ao(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, r = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ y("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
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
    if (n && (e = ih(e, t, n)), e = sh(e, t), e = nh(e, t), s ? e = Ao(e, t) : e = eh(e, t), i) {
      let o = e[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = et(i, t.row.data)), e.push({ attrs: { title: o } });
    }
    return e;
  }
}, Qd = de(Zd, { buildIn: !0 });
function qi(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], u = {
    size: "xs",
    className: M(o, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[r] : void 0,
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
}, ef = de(tf, { buildIn: !0 }), nf = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ y("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = n.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, n, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        e[0] = /* @__PURE__ */ y("a", { href: et(a, { ...n.setting, sortType: r }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, sf = de(nf, { buildIn: !0 }), Gi = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, of = {
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
}, rf = de(of), af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Yc,
  avatar: ef,
  checkable: jd,
  colHover: zd,
  group: rf,
  nested: Jd,
  renderDatetime: th,
  renderDatetimeCell: ih,
  renderFormat: Fr,
  renderFormatCell: nh,
  renderHtmlCell: Ao,
  renderLink: Qc,
  renderLinkCell: eh,
  renderMapCell: sh,
  rich: Qd,
  sortType: sf
}, Symbol.toStringTag, { value: "Module" }));
class as extends J {
}
as.NAME = "DTable";
as.Component = zr;
as.definePlugin = de;
as.removePlugin = Ic;
as.plugins = af;
var oh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ta = (e, t, n) => (oh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), lf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ra = (e, t, n, s) => (oh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ge;
const cf = "nav", Lo = '[data-toggle="tab"]', hf = "active";
class rh extends at {
  constructor() {
    super(...arguments), lf(this, Ge, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Lo);
    let i = t ? m(t).first() : s.filter(`.${hf}`);
    if (!i.length && (i = n.find(Lo).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = m(o);
    r.length && (r.parent().children(".tab-pane").removeClass("active in"), r.addClass("active"), Ta(this, Ge) && clearTimeout(Ta(this, Ge)), Ra(this, Ge, setTimeout(() => {
      r.addClass("in"), Ra(this, Ge, 0);
    }, 10)));
  }
}
Ge = /* @__PURE__ */ new WeakMap();
rh.NAME = "Tabs";
m(document).on("click.tabs.zui", Lo, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${cf}`);
  n.length && rh.ensure(n).active(t);
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
  Ko as CustomRender,
  as as DTable,
  Lc as Dashboard,
  Bt as Dropdown,
  zl as EventBus,
  lu as HElement,
  dl as HtmlContent,
  Gn as Icon,
  _l as Menu,
  ar as Messager,
  Gl as Modal,
  Xt as ModalBase,
  Xl as ModalTrigger,
  Zl as Nav,
  Ql as Pager,
  nc as Pick,
  rc as Picker,
  ac as Popovers,
  Ol as ProgressCircle,
  V as ReactComponent,
  Hl as Switch,
  Lt as TIME_DAY,
  rh as Tabs,
  lc as Toolbar,
  $t as Tooltip,
  Sc as Tree,
  Uu as Upload,
  ya as calculateTimestamp,
  m as cash,
  M as classes,
  Zh as convertBytes,
  it as createDate,
  fu as createPortal,
  Kt as createRef,
  Xh as deepGet,
  Kh as deepGetPath,
  Is as delay,
  df as dom,
  Jh as formatBytes,
  fo as formatDate,
  Tf as formatDateSpan,
  et as formatString,
  Xa as getClassList,
  Rf as getTimeBeforeDesc,
  q as h,
  ff as hh,
  au as htm,
  Vt as i18n,
  Mf as isDBY,
  os as isSameDay,
  rd as isSameMonth,
  kf as isSameWeek,
  uo as isSameYear,
  Cf as isToday,
  Ef as isTomorrow,
  Z as isValidElement,
  Sf as isYesterday,
  da as nativeEvents,
  qn as render,
  hu as renderCustomResult,
  qu as store,
  Ja as storeData,
  nu as takeData
};
//# sourceMappingURL=zui.js.map
