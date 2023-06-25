var Ri = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var T = (e, t, n) => (Ri(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Ri(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Le = (e, t, n) => (Ri(e, t, "access private method"), n);
const zt = document, As = window, Ra = zt.documentElement, Re = zt.createElement.bind(zt), Na = Re("div"), Ni = Re("table"), ah = Re("tbody"), Ur = Re("tr"), { isArray: hi, prototype: Aa } = Array, { concat: lh, filter: Lo, indexOf: La, map: Pa, push: ch, slice: Wa, some: Po, splice: hh } = Aa, uh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, dh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, fh = /<.+>/, ph = /^\w+$/;
function Wo(e, t) {
  const n = gh(t);
  return !e || !n && !Ce(t) && !G(t) ? [] : !n && dh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && ph.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class ui {
  constructor(t, n) {
    if (!t)
      return;
    if (Gi(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || zt;
      if (s = uh.test(t) && Ce(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : fh.test(t) ? Oa(t) : Gi(i) ? i.find(t) : Q(i) ? m(i).find(t) : Wo(t, i), !s)
        return;
    } else if (Ne(t))
      return this.ready(t);
    (s.nodeType || s === As) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new ui(t, n);
  }
}
const x = ui.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = hh;
typeof Symbol == "function" && (x[Symbol.iterator] = Aa[Symbol.iterator]);
function Gi(e) {
  return e instanceof ui;
}
function sn(e) {
  return !!e && e === e.window;
}
function Ce(e) {
  return !!e && e.nodeType === 9;
}
function gh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function mh(e) {
  return !!e && e.nodeType === 3;
}
function yh(e) {
  return typeof e == "boolean";
}
function Ne(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function st(e) {
  return e === void 0;
}
function zn(e) {
  return e === null;
}
function Da(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Do(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = sn;
m.isFunction = Ne;
m.isArray = hi;
m.isNumeric = Da;
m.isPlainObject = Do;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Do(e)) {
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
function Ls(...e) {
  const t = yh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ls(t, m, n);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      t && (hi(o[r]) || Do(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), Ls(t, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
m.extend = Ls;
x.extend = function(e) {
  return Ls(x, e);
};
const wh = /\S+/g;
function di(e) {
  return Q(e) ? e.match(wh) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = di(e), s = !st(t);
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
  const t = di(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, o) => {
      s.removeAttribute(o);
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
        return zn(n) ? void 0 : n;
      }
      return st(t) ? this : zn(t) ? this.removeAttr(e) : this.each((n, s) => {
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
  return !!e && Po.call(this, (t) => G(t) && t.classList.contains(e));
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
function vh(e) {
  return st(e) ? this.get().map((t) => G(t) || mh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
x.text = vh;
function Ft(e, t, n) {
  if (!G(e))
    return;
  const s = As.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function vt(e, t) {
  return parseInt(Ft(e, t), 10) || 0;
}
function Vr(e, t) {
  return vt(e, `border${t ? "Left" : "Top"}Width`) + vt(e, `padding${t ? "Left" : "Top"}`) + vt(e, `padding${t ? "Right" : "Bottom"}`) + vt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Ai = {};
function bh(e) {
  if (Ai[e])
    return Ai[e];
  const t = Re(e);
  zt.body.insertBefore(t, null);
  const n = Ft(t, "display");
  return zt.body.removeChild(t), Ai[e] = n !== "none" ? n : "block";
}
function qr(e) {
  return Ft(e, "display") === "none";
}
function Ia(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function fi(e) {
  return Q(e) ? (t, n) => Ia(n, e) : Ne(e) ? e : Gi(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = fi(e);
  return m(Lo.call(this, (n, s) => t.call(n, s, n)));
};
function le(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return le(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const xh = /^\s*<(\w+)[^>]*>/, $h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Gr = {
  "*": Na,
  tr: ah,
  td: Ur,
  th: Ur,
  thead: Ni,
  tbody: Ni,
  tfoot: Ni
};
function Oa(e) {
  if (!Q(e))
    return [];
  if ($h.test(e))
    return [Re(RegExp.$1)];
  const t = xh.test(e) && RegExp.$1, n = Gr[t] || Gr["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Oa;
x.has = function(e) {
  const t = Q(e) ? (n, s) => Wo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = fi(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function jt(e, t, n, s) {
  const i = [], o = Ne(t), r = s && fi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (o) {
      const h = t(e[a]);
      h.length && ch.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ha(e) {
  return e.multiple && e.options ? jt(Lo.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function kh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ja.test(n.type)) {
      const i = hi(e) ? Pa.call(e, String) : zn(e) ? [] : [String(e)];
      s ? K(n.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = st(e) || zn(e) ? "" : e;
  }) : this[0] && Ha(this[0]);
}
x.val = kh;
x.is = function(e) {
  const t = fi(e);
  return Po.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function kt(e) {
  return e.length > 1 ? Lo.call(e, (t, n, s) => La.call(s, t) === n) : e;
}
m.unique = kt;
x.add = function(e, t) {
  return m(kt(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return le(m(kt(jt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return le(m(kt(jt(this, "parentNode"))), e);
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
  return le(m(kt(jt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(kt(jt(this, (t) => Wo(e, t))));
};
const Ch = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Sh = /^$|^module$|\/(java|ecma)script/i, Eh = ["type", "src", "nonce", "noModule"];
function Mh(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Sh.test(i.type) && Ra.contains(i)) {
      const o = Re("script");
      o.text = i.textContent.replace(Ch, ""), K(Eh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function Th(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Mh(t, e.ownerDocument);
}
function ce(e, t, n, s, i, o, r, a) {
  return K(e, (l, h) => {
    K(m(h), (c, u) => {
      K(m(t), (f, d) => {
        const p = n ? u : d, g = n ? d : u, _ = n ? c : f;
        Th(p, _ ? g.cloneNode(!0) : g, s, i, !_);
      }, a);
    }, r);
  }, o), t;
}
x.after = function() {
  return ce(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ce(arguments, this, !1, !1, !0);
};
function Rh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (st(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = Rh;
x.appendTo = function(e) {
  return ce(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return ce(arguments, this, !1, !0);
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
  return ce(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return ce(arguments, this, !0, !0);
};
x.prepend = function() {
  return ce(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return ce(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(kt(jt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return le(m(kt(jt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return le(m(kt(jt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return le(m(kt(jt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(lh.apply([], Pa.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Ft(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ra;
  });
};
x.slice = function(e, t) {
  return m(Wa.call(this, e, t));
};
const Nh = /-([a-z])/g;
function Io(e) {
  return e.replace(Nh, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return zt.readyState !== "loading" ? t() : zt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + As.pageYOffset,
    left: t.left + As.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Ft(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
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
const Ah = /^--/;
function Oo(e) {
  return Ah.test(e);
}
const Li = {}, { style: Lh } = Na, Ph = ["webkit", "moz", "ms"];
function Wh(e, t = Oo(e)) {
  if (t)
    return e;
  if (!Li[e]) {
    const n = Io(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Ph.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Lh)
        return Li[e] = r, !1;
    });
  }
  return Li[e];
}
const Dh = {
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
function za(e, t, n = Oo(e)) {
  return !n && !Dh[e] && Da(t) ? `${t}px` : t;
}
function Ih(e, t) {
  if (Q(e)) {
    const n = Oo(e);
    return e = Wh(e, n), arguments.length < 2 ? this[0] && Ft(this[0], e, n) : e ? (t = za(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Ih;
function Fa(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Oh = /^\s+|\s+$/;
function jr(e, t) {
  const n = e.dataset[t] || e.dataset[Io(t)];
  return Oh.test(n) ? n : Fa(JSON.parse, n);
}
function Hh(e, t, n) {
  n = Fa(JSON.stringify, n), e.dataset[Io(t)] = n;
}
function Bh(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = jr(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && jr(this[0], e) : st(t) ? this : this.each((n, s) => {
      Hh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = Bh;
function Ua(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(o) {
      if (this[0])
        return sn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ce(this[0]) ? Ua(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? vt(this[0], `margin${n ? "Top" : "Left"}`) + vt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return st(s) ? void 0 : this;
    if (!arguments.length)
      return sn(this[0]) ? this[0].document.documentElement[`client${t}`] : Ce(this[0]) ? Ua(this[0], t) : this[0].getBoundingClientRect()[n] - Vr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const a = Ft(r, "boxSizing");
      r.style[n] = za(n, i + (a === "border-box" ? Vr(r, !e) : 0));
    });
  };
});
const Yr = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = qr(n);
    (st(e) ? s : e) ? (n.style.display = n[Yr] || "", qr(n) && (n.style.display = bh(n.tagName))) : s || (n[Yr] = Ft(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Kr = "___ce", Ho = ".", Bo = { focus: "focusin", blur: "focusout" }, Va = { mouseenter: "mouseover", mouseleave: "mouseout" }, zh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function zo(e) {
  return Va[e] || Bo[e] || e;
}
function Fo(e) {
  const t = e.split(Ho);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = Fo(e), o = zo(s);
    if (!o)
      return this;
    const r = zh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = zt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Ho), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Bo;
  return this.each((s, i) => {
    n && Ne(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function qa(e) {
  return e[Kr] = e[Kr] || {};
}
function Fh(e, t, n, s, i) {
  const o = qa(e);
  o[t] = o[t] || [], o[t].push([n, s, i]), e.addEventListener(t, i);
}
function Ga(e, t) {
  return !t || !Po.call(t, (n) => e.indexOf(n) < 0);
}
function Ps(e, t, n, s, i) {
  const o = qa(e);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Ga(r, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in o)
      Ps(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (st(e))
    this.each((s, i) => {
      !G(i) && !Ce(i) && !sn(i) || Ps(i);
    });
  else if (Q(e))
    Ne(t) && (n = t, t = ""), K(di(e), (s, i) => {
      const [o, r] = Fo(i), a = zo(o);
      this.each((l, h) => {
        !G(h) && !Ce(h) && !sn(h) || Ps(h, a, r, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return le(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function Uh(e, t, n, s, i) {
  if (!Q(e)) {
    for (const o in e)
      this.on(o, t, n, e[o], i);
    return this;
  }
  return Q(t) || (st(t) || zn(t) ? t = "" : st(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Ne(s) || (s = n, n = void 0), s ? (K(di(e), (o, r) => {
    const [a, l] = Fo(r), h = zo(a), c = a in Va, u = a in Bo;
    h && this.each((f, d) => {
      if (!G(d) && !Ce(d) && !sn(d))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Ga(l, g.namespace.split(Ho)) || !t && (u && (g.target !== d || g.___ot === h) || c && g.relatedTarget && d.contains(g.relatedTarget)))
          return;
        let _ = d;
        if (t) {
          let v = g.target;
          for (; !Ia(v, t); )
            if (v === d || (v = v.parentNode, !v))
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
            return d;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(_, g, g.___td);
        i && Ps(d, h, l, t, p), w === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, Fh(d, h, l, t, p);
    });
  }), this) : this;
}
x.on = Uh;
function Vh(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = Vh;
const qh = /\r?\n/g;
function Gh(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(qh, `\r
`))}`;
}
const jh = /file|reset|submit|button|image/i, ja = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || jh.test(i.type) || ja.test(i.type) && !i.checked)
        return;
      const o = Ha(i);
      if (!st(o)) {
        const r = hi(o) ? o : [o];
        K(r, (a, l) => {
          e += Gh(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function Yh(e, t) {
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
function Kh(e, t, n) {
  try {
    const s = Yh(e, t), i = s[s.length - 1];
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
var Uo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Uo || {});
function Xh(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Uo[n]).toFixed(t) + n);
}
const Jh = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Uo[s];
};
let Vo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Qt;
function Zh() {
  return Vo;
}
function Qh(e) {
  Vo = e.toLowerCase();
}
function Ya(e, t) {
  Qt || (Qt = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, Qt, e);
}
function Ut(e, t, n, s, i, o) {
  Array.isArray(e) ? Qt && e.unshift(Qt) : e = Qt ? [Qt, e] : [e], typeof n == "string" && (o = i, i = s, s = n, n = void 0);
  const r = i || Vo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const c = o && l === Qt ? `${o}.${t}` : t;
    if (a = Kh(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function tu(e, t, n, s) {
  return Ut(void 0, e, t, n, s);
}
Ut.addLang = Ya;
Ut.getLang = tu;
Ut.getCode = Zh;
Ut.setCode = Qh;
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
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = n.get(i);
    typeof r == "number" ? t[r][1] = !!o : (n.set(i, t.length), t.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ka(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (n.get(i[0]) || 0) - (n.get(o[0]) || 0));
}
const M = (...e) => Ka(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = M;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const gn = /* @__PURE__ */ new WeakMap();
function Xa(e, t, n) {
  const s = gn.has(e), i = s ? gn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), gn.set(e, i)) : gn.delete(e);
}
function eu(e, t) {
  let n = gn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? eu(this[0], t) : this.each((s, i) => Xa(i, t, n));
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
const Ws = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function Ja(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: o, height: r } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, f = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= f && i + r <= u;
  const d = i <= u && i + r >= 0, p = s <= f && s + o >= 0;
  return d && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Ja(n, e);
  });
};
function qo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    qo(s, o.innerHTML), o.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    qo(n, e);
  });
};
const hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Ja,
  runJS: qo
}, Symbol.toStringTag, { value: "Module" }));
var pi, z, Za, Z, ye, Xr, Qa, ji, Ds = {}, tl = [], nu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Go = Array.isArray;
function ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function el(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? pi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ys(e, r, s, i, null);
}
function ys(e, t, n, s, i) {
  var o = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Za };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Yt() {
  return { current: null };
}
function Qn(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Fn(e, t) {
  if (t == null)
    return e.__ ? Fn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Fn(e) : null;
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
function Jr(e) {
  (!e.__d && (e.__d = !0) && ye.push(e) && !Is.__r++ || Xr !== z.debounceRendering) && ((Xr = z.debounceRendering) || Qa)(Is);
}
function Is() {
  var e, t, n, s, i, o, r, a;
  for (ye.sort(ji); e = ye.shift(); )
    e.__d && (t = ye.length, s = void 0, i = void 0, r = (o = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ie({}, o)).__v = o.__v + 1, jo(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Fn(o), o.__h), al(s, o), o.__e != r && nl(o)), ye.length > t && ye.sort(ji));
  Is.__r = 0;
}
function sl(e, t, n, s, i, o, r, a, l, h) {
  var c, u, f, d, p, g, _, w = s && s.__k || tl, v = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ys(null, d, null, null, d) : Go(d) ? ys(Qn, { children: d }, null, null, null) : d.__b > 0 ? ys(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = w[c]) === null || f && d.key == f.key && d.type === f.type)
        w[c] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((f = w[u]) && d.key == f.key && d.type === f.type) {
            w[u] = void 0;
            break;
          }
          f = null;
        }
      jo(e, d, f = f || Ds, i, o, r, a, l, h), p = d.__e, (u = d.ref) && f.ref != u && (_ || (_ = []), f.ref && _.push(f.ref, null, d), _.push(u, d.__c || p, d)), p != null ? (g == null && (g = p), typeof d.type == "function" && d.__k === f.__k ? d.__d = l = il(d, l, e) : l = ol(e, d, f, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = Fn(f));
    }
  for (n.__e = g, c = v; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = rl(s).nextSibling), cl(w[c], w[c]));
  if (_)
    for (c = 0; c < _.length; c++)
      ll(_[c], _[++c], _[++c]);
}
function il(e, t, n) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, t = typeof s.type == "function" ? il(s, t, n) : ol(n, s, s, i, s.__e, t));
  return t;
}
function ol(e, t, n, s, i, o) {
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
function rl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = rl(n)))
        return s;
  }
  return null;
}
function su(e, t, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Os(e, o, null, n[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Os(e, o, t[o], n[o], s);
}
function Zr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || nu.test(t) ? n : n + "px";
}
function Os(e, t, n, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Zr(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Zr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? s || e.addEventListener(t, o ? ta : Qr, o) : e.removeEventListener(t, o ? ta : Qr, o);
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
function Qr(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ta(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function jo(e, t, n, s, i, o, r, a, l) {
  var h, c, u, f, d, p, g, _, w, v, $, C, k, E, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (_ = t.props, w = (h = A.contextType) && s[h.__c], v = h ? w ? w.props.value : h.__ : s, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(_, v) : (t.__c = c = new V(_, v), c.constructor = A, c.render = ou), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ie({}, c.__s)), ie(c.__s, A.getDerivedStateFromProps(_, c.__s))), f = c.props, d = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && _ !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, v) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = _, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, p);
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
        c.state = c.__s, c.getChildContext != null && (s = ie(ie({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(f, d)), sl(e, Go(N = h != null && h.type === Qn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, o, r, a, l), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = iu(n.__e, t, n, s, i, o, r, l);
    (h = z.diffed) && h(t);
  } catch (I) {
    t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), z.__e(I, t, n);
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
function iu(e, t, n, s, i, o, r, a) {
  var l, h, c, u = n.props, f = t.props, d = t.type, p = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((l = o[p]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        e = l, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, a = !1;
  }
  if (d === null)
    u === f || a && e.data === f || (e.data = f);
  else {
    if (o = o && pi.call(e.childNodes), h = (u = n.props || Ds).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (su(e, f, u, i, a), c)
      t.__k = [];
    else if (sl(e, Go(p = t.props.children) ? p : [p], t, n, s, i && d !== "foreignObject", o, r, o ? o[0] : n.__k && Fn(n, 0), a), o != null)
      for (p = o.length; p--; )
        o[p] != null && el(o[p]);
    a || ("value" in f && (p = f.value) !== void 0 && (p !== e.value || d === "progress" && !p || d === "option" && p !== u.value) && Os(e, "value", p, u.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== e.checked && Os(e, "checked", p, u.checked, !1));
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
      } catch (o) {
        z.__e(o, t);
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
function Un(e, t, n) {
  var s, i, o;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, o = [], jo(t, e = (!s && n || t).__k = q(Qn, null, [e]), i || Ds, Ds, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? pi.call(t.childNodes) : null, o, !s && n ? n : i ? i.__e : t.firstChild, s), al(o, e);
}
pi = tl.slice, z = { __e: function(e, t, n, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Za = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, n), this.props)), e && ie(n, e), e != null && this.__v && (t && this._sb.push(t), Jr(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Jr(this));
}, V.prototype.render = Qn, ye = [], Qa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ji = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Is.__r = 0;
var hl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, n[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = e.apply(a, hl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, ea = /* @__PURE__ */ new Map();
function ru(e) {
  var t = ea.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ea.set(this, t)), (t = hl(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(f) {
      o === 1 && (f || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, f, r) : o === 3 && (f || r) ? (l.push(3, f, r), o = 2) : o === 2 && r === "..." && f ? l.push(4, f, 0) : o === 2 && r && !f ? l.push(5, 0, !0, r) : o >= 5 && ((r || !f && o === 5) && (l.push(o, 0, r, i), o = 6), f && (l.push(o, f, 0, i), o = 6)), r = "";
    }, c = 0; c < n.length; c++) {
      c && (o === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || n[c][u + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const uf = ru.bind(q);
function au(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: o, ...r } = e;
  return q(t, { class: M(n), style: s, ...r, ...o }, i);
}
var lu = 0;
function y(e, t, n, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lu, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return z.vnode && z.vnode(h), h;
}
var Yn;
class ul extends V {
  constructor() {
    super(...arguments);
    O(this, Yn, Yt());
  }
  componentDidMount() {
    this.props.executeScript && m(T(this, Yn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...o } = n;
    return /* @__PURE__ */ y(au, { ref: T(this, Yn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Yn = new WeakMap();
function cu(e) {
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
  } = e, u = [n], f = { ...s }, d = [], p = [];
  return i.forEach((g) => {
    const _ = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        _.push(...l.call(r, g, d, ...o));
      else {
        const w = g.call(r, d, ...o);
        w && (Array.isArray(w) ? _.push(...w) : _.push(w));
      }
    else
      _.push(g);
    _.forEach((w) => {
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? d.push(
        /* @__PURE__ */ y("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(f, w.style), w.className && u.push(w.className), w.children && d.push(w.children), w.attrs && Object.assign(c, w.attrs)) : d.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(u),
    style: f,
    ...c
  }, d];
}
function Yo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = cu(t);
  return q(e, n, ...s);
}
function Vn(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ y("i", { className: M(i), ...s });
}
function hu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function uu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Un(null, t._temp), t._temp = null, t._container = null;
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
  }), Un(
    q(hu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function du(e, t) {
  const n = q(uu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Ko = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Pe = (e, t, n) => (Ko(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ln = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, We = (e, t, n, s) => (Ko(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ls = (e, t, n) => (Ko(e, t, "access private method"), n), ue, mn, ws, _s, He, yn;
const dl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ln(this, He), ln(this, ue, void 0), ln(this, mn, void 0), ln(this, ws, void 0), ln(this, _s, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: o } = this.constructor, r = m(e);
    if (r.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (We(this, ws, a), We(this, mn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), We(this, ue, { ...i, ...r.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, r.data(n, this).attr(s, `${a}`), o) {
      const l = `${n}:ALL`;
      let h = r.data(l);
      h || (h = /* @__PURE__ */ new Map(), r.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      We(this, _s, !0), this.emit("inited", this.options), this.afterInit();
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
    return Pe(this, _s);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Pe(this, mn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Pe(this, ue);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Pe(this, ws);
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
    We(this, ue, void 0), We(this, mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Pe(this, ue), e), Pe(this, ue);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(ls(this, He, yn).call(this, e));
    return this.$element.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(ls(this, He, yn).call(this, e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(ls(this, He, yn).call(this, e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(ls(this, He, yn).call(this, e), t);
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
    return Ut(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Ut(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
let at = dl;
ue = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakSet();
yn = function(e) {
  return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
};
at.DEFAULT = {};
at.NAME = dl.name;
at.MULTI_INSTANCE = !1;
class J extends at {
  constructor() {
    super(...arguments), this.ref = Yt();
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
    Un(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function fu({
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
function fl({
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
  hint: f,
  checked: d,
  onClick: p,
  ...g
}) {
  const _ = [
    typeof d == "boolean" ? /* @__PURE__ */ y("div", { class: `checkbox-primary${d ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
    /* @__PURE__ */ y(Vn, { icon: l }),
    /* @__PURE__ */ y("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ y(Vn, { icon: u })
  ];
  return q(t, {
    className: M(n, { disabled: r, active: a }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ..._);
}
function pu({
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
function gu({
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
function mu({ type: e, ...t }) {
  return /* @__PURE__ */ y(Yo, { ...t });
}
function pl({
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
const Yi = class extends V {
  constructor() {
    super(...arguments), this.ref = Yt();
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
    const { type: o = "item", component: r, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...f } = s;
    if (o === "html")
      return /* @__PURE__ */ y(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, f.className),
          ...l,
          style: c || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        a
      );
    const d = !r || typeof r == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || Yi.ItemComponents[o] : r;
    return Object.assign(f, {
      type: o,
      component: typeof r == "string" ? r : void 0
    }), e.checkbox && o === "item" && f.checked === void 0 && (f.checked = !!f.active), this.renderTypedItem(d, {
      className: M(h),
      children: u,
      style: c,
      key: a,
      ...l
    }, {
      ...f,
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
      ...f
    } = e, d = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ y(d, { class: M(this.name, i), style: n, ...f, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, e)),
      r
    ] });
  }
};
let Ae = Yi;
Ae.ItemComponents = {
  divider: fu,
  item: fl,
  heading: pu,
  space: gu,
  custom: mu,
  basic: pl
};
Ae.ROOT_TAG = "menu";
Ae.NAME = "action-menu";
class gl extends J {
}
gl.NAME = "ActionMenu";
gl.Component = Ae;
function yu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ y(fl, { ...s });
}
var ml = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ct = (e, t, n) => (ml(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Pi = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wu = (e, t, n, s) => (ml(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), vs, Mt, wn;
let gi = class extends Ae {
  constructor(t) {
    super(t), Pi(this, vs, /* @__PURE__ */ new Set()), Pi(this, Mt, void 0), Pi(this, wn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), wu(this, Mt, t.nestedShow === void 0), ct(this, Mt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    ct(this, vs).add(o);
    const r = this.isNestedMenuShow(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ct(this, wn).bind(this, o, !0),
        onMouseLeave: ct(this, wn).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ct(this, wn).call(this, o, void 0, h), l == null || l(h);
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
    if (typeof i == "boolean" && (i === !0 ? i = [...ct(this, vs).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), n === void 0)
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
vs = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
gi.ItemComponents = {
  item: yu
};
class yl extends J {
}
yl.NAME = "ActionMenuNested";
yl.Component = gi;
let mi = class extends gi {
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
mi.NAME = "menu";
class wl extends J {
}
wl.NAME = "Menu";
wl.Component = mi;
class Vt extends V {
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
      loadingIcon: f,
      loadingText: d,
      icon: p,
      text: g,
      trailingIcon: _,
      caret: w,
      square: v,
      hint: $,
      ...C
    } = this.props, k = t || (a ? "a" : "button"), E = g == null || typeof g == "string" && !g.length || u && !d, N = w && E && !p && !_ && !r && !u;
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
      /* @__PURE__ */ y(Vn, { icon: u ? `icon ${f || "icon-spinner-snake"} spin` : p }),
      E ? null : /* @__PURE__ */ y("span", { className: "text", children: u ? d : g }),
      u ? null : r,
      u ? null : typeof _ == "string" ? /* @__PURE__ */ y("i", { class: `icon ${_}` }) : _,
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
  return /* @__PURE__ */ y(Vt, { type: n, ...s });
}
function ts(e) {
  return e.split("-")[1];
}
function Xo(e) {
  return e === "y" ? "height" : "width";
}
function be(e) {
  return e.split("-")[0];
}
function es(e) {
  return ["top", "bottom"].includes(be(e)) ? "x" : "y";
}
function na(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = es(t), l = Xo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (be(t)) {
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
  switch (ts(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const vu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = na(h, s, l), f = s, d = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: _, fn: w } = a[g], { x: v, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, d = { ...d, [_]: { ...d[_], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = na(h, f, l)), g = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _l(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Hs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function vl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = ns(t, e), p = _l(d), g = a[f ? u === "floating" ? "reference" : "floating" : u], _ = Hs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, C = Hs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / $.y, bottom: (C.bottom - _.bottom + p.bottom) / $.y, left: (_.left - C.left + p.left) / $.x, right: (C.right - _.right + p.right) / $.x };
}
const Ki = Math.min, bu = Math.max;
function Xi(e, t, n) {
  return bu(e, Ki(t, n));
}
const Ji = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: o, platform: r, elements: a } = t, { element: l, padding: h = 0 } = ns(e, t) || {};
  if (l == null)
    return {};
  const c = _l(h), u = { x: n, y: s }, f = es(i), d = Xo(f), p = await r.getDimensions(l), g = f === "y", _ = g ? "top" : "left", w = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", $ = o.reference[d] + o.reference[f] - u[f] - o.floating[d], C = u[f] - o.reference[f], k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let E = k ? k[v] : 0;
  E && await (r.isElement == null ? void 0 : r.isElement(k)) || (E = a.floating[v] || o.floating[d]);
  const N = $ / 2 - C / 2, A = E / 2 - p[d] / 2 - 1, I = Ki(c[_], A), b = Ki(c[w], A), R = I, W = E - p[d] - b, L = E / 2 - p[d] / 2 + N, D = Xi(R, L, W), P = ts(i) != null && L != D && o.reference[d] / 2 - (L < R ? I : b) - p[d] / 2 < 0 ? L < R ? R - L : W - L : 0;
  return { [f]: u[f] - P, data: { [f]: D, centerOffset: L - D + P } };
} }), xu = ["top", "right", "bottom", "left"];
xu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const $u = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $u[t]);
}
function ku(e, t, n) {
  n === void 0 && (n = !1);
  const s = ts(e), i = es(e), o = Xo(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Bs(r)), { main: r, cross: Bs(r) };
}
const Cu = { start: "end", end: "start" };
function Wi(e) {
  return e.replace(/start|end/g, (t) => Cu[t]);
}
const yi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...g } = ns(e, t), _ = be(s), w = be(r) === r, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Bs(r)] : function(R) {
      const W = Bs(R);
      return [Wi(R), W, Wi(W)];
    }(r));
    u || d === "none" || $.push(...function(R, W, L, D) {
      const P = ts(R);
      let F = function(lt, Ct, rs) {
        const an = ["left", "right"], as = ["right", "left"], Ti = ["top", "bottom"], rh = ["bottom", "top"];
        switch (lt) {
          case "top":
          case "bottom":
            return rs ? Ct ? as : an : Ct ? an : as;
          case "left":
          case "right":
            return Ct ? Ti : rh;
          default:
            return [];
        }
      }(be(R), L === "start", D);
      return P && (F = F.map((lt) => lt + "-" + P), W && (F = F.concat(F.map(Wi)))), F;
    }(r, p, d, v));
    const C = [r, ...$], k = await vl(t, g), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[_]), c) {
      const { main: R, cross: W } = ku(s, o, v);
      E.push(k[R], k[W]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((R) => R <= 0)) {
      var A, I;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, W = C[R];
      if (W)
        return { data: { index: R, overflows: N }, reset: { placement: W } };
      let L = (I = N.filter((D) => D.overflows[0] <= 0).sort((D, P) => D.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!L)
        switch (f) {
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
}, Jo = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = be(a), f = ts(a), d = es(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && d ? -1 : 1, _ = ns(r, o);
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return f && typeof $ == "number" && (v = f === "end" ? -1 * $ : $), d ? { x: v * g, y: w * p } : { x: w * p, y: v * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Su(e) {
  return e === "x" ? "y" : "x";
}
const Zi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (_) => {
      let { x: w, y: v } = _;
      return { x: w, y: v };
    } }, ...l } = ns(e, t), h = { x: n, y: s }, c = await vl(t, l), u = es(be(i)), f = Su(u);
    let d = h[u], p = h[f];
    if (o) {
      const _ = u === "y" ? "bottom" : "right";
      d = Xi(d + c[u === "y" ? "top" : "left"], d, d - c[_]);
    }
    if (r) {
      const _ = f === "y" ? "bottom" : "right";
      p = Xi(p + c[f === "y" ? "top" : "left"], p, p - c[_]);
    }
    const g = a.fn({ ...t, [u]: d, [f]: p });
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
function bl(e) {
  return e instanceof rt(e).Node;
}
function re(e) {
  return bl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gt(e) {
  return e instanceof rt(e).HTMLElement;
}
function It(e) {
  return e instanceof rt(e).Element;
}
function sa(e) {
  return typeof ShadowRoot < "u" && (e instanceof rt(e).ShadowRoot || e instanceof ShadowRoot);
}
function qn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Eu(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Qi(e) {
  const t = Zo(), n = ft(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Zo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function wi(e) {
  return ["html", "body", "#document"].includes(re(e));
}
const ia = Math.min, An = Math.max, zs = Math.round, cs = Math.floor, Se = (e) => ({ x: e, y: e });
function xl(e) {
  const t = ft(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = gt(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, a = zs(n) !== o || zs(s) !== r;
  return a && (n = o, s = r), { width: n, height: s, $: a };
}
function Qo(e) {
  return It(e) ? e : e.contextElement;
}
function je(e) {
  const t = Qo(e);
  if (!gt(t))
    return Se(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: o } = xl(t);
  let r = (o ? zs(n.width) : n.width) / s, a = (o ? zs(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const oa = Se(0);
function $l(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Zo())
    return oa;
  const o = e ? rt(e) : window;
  return !n || t && n !== o ? oa : { x: ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = o.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Ee(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = Qo(e);
  let r = Se(1);
  t && (s ? It(s) && (r = je(s)) : r = je(e));
  const a = $l(o, n, s);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, c = i.width / r.x, u = i.height / r.y;
  if (o) {
    const f = rt(o), d = s && It(s) ? rt(s) : s;
    let p = f.frameElement;
    for (; p && s && d !== f; ) {
      const g = je(p), _ = p.getBoundingClientRect(), w = getComputedStyle(p), v = _.left + (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, $ = _.top + (p.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, h *= g.y, c *= g.x, u *= g.y, l += v, h += $, p = rt(p).frameElement;
    }
  }
  return Hs({ width: c, height: u, x: l, y: h });
}
function Ot(e) {
  return ((bl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _i(e) {
  return It(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function kl(e) {
  return Ee(Ot(e)).left + _i(e).scrollLeft;
}
function on(e) {
  if (re(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || sa(e) && e.host || Ot(e);
  return sa(t) ? t.host : t;
}
function Cl(e) {
  const t = on(e);
  return wi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gt(t) && qn(t) ? t : Cl(t);
}
function Fs(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Cl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = rt(s);
  return i ? t.concat(o, o.visualViewport || [], qn(s) ? s : []) : t.concat(s, Fs(s));
}
function ra(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, o) {
      const r = rt(i), a = Ot(i), l = r.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, f = 0;
      if (l) {
        h = l.width, c = l.height;
        const d = Zo();
        (!d || d && o === "fixed") && (u = l.offsetLeft, f = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: f };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const o = Ot(i), r = _i(i), a = i.ownerDocument.body, l = An(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = An(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -r.scrollLeft + kl(i);
      const u = -r.scrollTop;
      return ft(a).direction === "rtl" && (c += An(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Ot(e));
  else if (It(t))
    s = function(i, o) {
      const r = Ee(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = gt(i) ? je(i) : Se(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = $l(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Hs(s);
}
function Sl(e, t) {
  const n = on(e);
  return !(n === t || !It(n) || wi(n)) && (ft(n).position === "fixed" || Sl(n, t));
}
function aa(e, t) {
  return gt(e) && ft(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function la(e, t) {
  const n = rt(e);
  if (!gt(e))
    return n;
  let s = aa(e, t);
  for (; s && Eu(s) && ft(s).position === "static"; )
    s = aa(s, t);
  return s && (re(s) === "html" || re(s) === "body" && ft(s).position === "static" && !Qi(s)) ? n : s || function(i) {
    let o = on(i);
    for (; gt(o) && !wi(o); ) {
      if (Qi(o))
        return o;
      o = on(o);
    }
    return null;
  }(e) || n;
}
function Mu(e, t, n) {
  const s = gt(t), i = Ot(t), o = n === "fixed", r = Ee(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Se(0);
  if (s || !s && !o)
    if ((re(t) !== "body" || qn(i)) && (a = _i(t)), gt(t)) {
      const h = Ee(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = kl(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
const Tu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = Fs(h).filter((_) => It(_) && re(_) !== "body"), d = null;
    const p = ft(h).position === "fixed";
    let g = p ? on(h) : h;
    for (; It(g) && !wi(g); ) {
      const _ = ft(g), w = Qi(g);
      w || _.position !== "fixed" || (d = null), (p ? !w && !d : !w && _.position === "static" && d && ["absolute", "fixed"].includes(d.position) || qn(g) && !w && Sl(h, g)) ? f = f.filter((v) => v !== g) : d = _, g = on(g);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = ra(t, c, i);
    return h.top = An(u.top, h.top), h.right = ia(u.right, h.right), h.bottom = ia(u.bottom, h.bottom), h.left = An(u.left, h.left), h;
  }, ra(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = gt(n), o = Ot(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Se(1);
  const l = Se(0);
  if ((i || !i && s !== "fixed") && ((re(n) !== "body" || qn(o)) && (r = _i(n)), gt(n))) {
    const h = Ee(n);
    a = je(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: It, getDimensions: function(e) {
  return xl(e);
}, getOffsetParent: la, getDocumentElement: Ot, getScale: je, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || la, o = this.getDimensions;
  return { reference: Mu(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ft(e).direction === "rtl" };
function tr(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Qo(e), c = i || o ? [...h ? Fs(h) : [], ...Fs(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }), o && g.addEventListener("resize", n);
  });
  const u = h && a ? function(g, _) {
    let w, v = null;
    const $ = Ot(g);
    function C() {
      clearTimeout(w), v && v.disconnect(), v = null;
    }
    return function k(E, N) {
      E === void 0 && (E = !1), N === void 0 && (N = 1), C();
      const { left: A, top: I, width: b, height: R } = g.getBoundingClientRect();
      if (E || _(), !b || !R)
        return;
      const W = cs(I), L = cs($.clientWidth - (A + b)), D = cs($.clientHeight - (I + R)), P = cs(A);
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
  let f, d = null;
  r && (d = new ResizeObserver(n), h && !l && d.observe(h), d.observe(t));
  let p = l ? Ee(e) : null;
  return l && function g() {
    const _ = Ee(e);
    !p || _.x === p.x && _.y === p.y && _.width === p.width && _.height === p.height || n(), p = _, f = requestAnimationFrame(g);
  }(), n(), () => {
    c.forEach((g) => {
      i && g.removeEventListener("scroll", n), o && g.removeEventListener("resize", n);
    }), u && u(), d && d.disconnect(), d = null, l && cancelAnimationFrame(f);
  };
}
const vi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Tu, ...n }, o = { ...i.platform, _c: s };
  return vu(e, t, { ...i, platform: o });
};
let Ru = class extends mi {
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
      middleware: [yi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && vi(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
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
var er = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, St = (e, t, n) => (er(e, t, "read from private field"), n ? n.call(e) : t.get(e)), De = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, hs = (e, t, n, s) => (er(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ca = (e, t, n) => (er(e, t, "access private method"), n), Xt, _n, bs, xs, to, El, eo, Ml;
const Di = "show", Nu = '[data-toggle="contextmenu"]';
class tt extends at {
  constructor() {
    super(...arguments), De(this, to), De(this, eo), De(this, Xt, void 0), De(this, _n, void 0), De(this, bs, void 0), De(this, xs, void 0);
  }
  get isShown() {
    return St(this, Xt) && m(St(this, Xt)).hasClass(Di);
  }
  get menu() {
    return St(this, Xt) || this.ensureMenu();
  }
  get trigger() {
    return St(this, bs) || this.element;
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
    return this.isShown || (hs(this, bs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Di), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = St(this, xs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(St(this, Xt)).removeClass(Di), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = St(this, Xt)) == null || t.remove();
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
    }), hs(this, Xt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(yi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    hs(this, xs, tr(n, s, () => {
      vi(n, s, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${o}px` });
        const l = a.split("-")[0], h = ca(this, to, El).call(this, l);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ca(this, eo, Ml).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Un(q(Ru, t), this.menu), !0);
  }
  getPopperElement() {
    return St(this, _n) || hs(this, _n, {
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
    }), St(this, _n);
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
Xt = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
to = /* @__PURE__ */ new WeakSet();
El = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
eo = /* @__PURE__ */ new WeakSet();
Ml = function(e) {
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
  const n = t.closest(Nu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), o = tt.ensure(n, i);
    i || n.data(s, o.options), o.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var nr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => (nr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), us = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, no = (e, t, n, s) => (nr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Au = (e, t, n) => (nr(e, t, "access private method"), n), Ln, bn, Us, so, Tl;
const ha = '[data-toggle="dropdown"]', Rl = class extends tt {
  constructor() {
    super(...arguments), us(this, so), us(this, Ln, !1), us(this, bn, 0), this.hideLater = () => {
      vn(this, Us).call(this), no(this, bn, window.setTimeout(this.hide.bind(this), 100));
    }, us(this, Us, () => {
      clearTimeout(vn(this, bn)), no(this, bn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Rl.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!vn(this, Ln) && this.isHover && Au(this, so, Tl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    vn(this, Ln) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Jo(t)), (s = e.middleware) == null || s.push(Ji({ element: this.arrowEl }))), e;
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
let Ht = Rl;
Ln = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakSet();
Tl = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, vn(this, Us)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), no(this, Ln, !0);
};
Ht.MENU_CLASS = "dropdown-menu";
Ht.NAME = "Dropdown";
Ht.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const ds = `${Ht.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(ha).not(":disabled,.disabled");
  if (!t.length) {
    Ht.clear({ event: e });
    return;
  }
  const n = t.data(ds), s = Ht.ensure(t, n);
  n || t.data(ds, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(ha);
  if (!t.length)
    return;
  const n = t.data(ds), s = Ht.ensure(t, n);
  n || t.data(ds, s.options), s.isHover && s.show();
});
let fs = 0;
window.addEventListener("scroll", (e) => {
  fs && clearTimeout(fs), fs = window.setTimeout(() => {
    Ht.clear({ event: e }), fs = 0;
  }, 50);
}, !0);
var Kn, Je;
class Lu extends V {
  constructor(n) {
    var s;
    super(n);
    O(this, Kn, void 0);
    O(this, Je, Yt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return T(this, Je);
  }
  get triggerElement() {
    return T(this, Je).current;
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
    }), B(this, Kn, Ht.ensure(this.triggerElement, {
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
    (n = T(this, Kn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...o } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: T(this, Je)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
Kn = new WeakMap(), Je = new WeakMap();
class Pu extends Lu {
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
    return s.caret = i, /* @__PURE__ */ y(Vt, { ...s });
  }
}
function Nl({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Pu, { type: n, ...s });
}
let Al = class extends V {
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
    return /* @__PURE__ */ y(Vt, { ...i }, s);
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
      beforeDestroy: f,
      ...d
    } = t;
    return /* @__PURE__ */ y(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...d,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Wu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Al, { type: n, ...s });
}
let mt = class extends Ae {
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
  item: _u,
  dropdown: Nl,
  "btn-group": Wu
};
mt.ROOT_TAG = "nav";
mt.NAME = "toolbar";
mt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Du({
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
  a === !0 ? u = /* @__PURE__ */ y(Vt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ y("span", { class: "close" }) }) : Z(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ y(Vt, { ...a, onClick: l }));
  const f = Z(n) ? n : n ? /* @__PURE__ */ y(mt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: M("alert", e), style: t, ...c, children: [
    Z(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    Z(i) ? i : /* @__PURE__ */ y("div", { className: M("alert-content", o), children: [
      Z(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ y("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    u,
    r
  ] });
}
function Iu(e) {
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
let Ou = class extends V {
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
      Du,
      {
        className: M("messager", l, i, r === !0 ? Iu(o) : r, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Hu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Bu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, cn = (e, t, n) => (Hu(e, t, "access private method"), n), de, Be;
class sr extends J {
  constructor() {
    super(...arguments), Bu(this, de), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), cn(this, de, Be).call(this, () => {
      this._show = !0, this.render(), cn(this, de, Be).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && cn(this, de, Be).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && cn(this, de, Be).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), cn(this, de, Be).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
de = /* @__PURE__ */ new WeakSet();
Be = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
sr.NAME = "MessagerItem";
sr.Component = Ou;
var ir = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xe = (e, t, n) => (ir(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $s = (e, t, n, s) => (ir(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ll = (e, t, n) => (ir(e, t, "access private method"), n), Ye, Wt, io, Pl, or, Wl;
const Dl = class extends at {
  constructor() {
    super(...arguments), ps(this, io), ps(this, or), ps(this, Ye, void 0), ps(this, Wt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = xe(this, Wt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Ll(this, io, Pl).call(this).show();
  }
  hide() {
    var e;
    (e = xe(this, Wt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Dl.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let rr = Dl;
Ye = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
io = /* @__PURE__ */ new WeakSet();
Pl = function() {
  if (xe(this, Wt))
    xe(this, Wt).setOptions(this.options);
  else {
    const e = Ll(this, or, Wl).call(this), t = new sr(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), $s(this, Ye, void 0), $s(this, Wt, void 0);
    }), $s(this, Wt, t);
  }
  return xe(this, Wt);
};
or = /* @__PURE__ */ new WeakSet();
Wl = function() {
  if (xe(this, Ye))
    return xe(this, Ye);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), $s(this, Ye, n[0])), n[0];
};
rr.NAME = "messager";
rr.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && rr.show(t);
});
let ar = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(t) })
    ] });
  }
};
ar.NAME = "zui.progress-circle";
ar.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Il extends J {
}
Il.NAME = "ProgressCircle";
Il.Component = ar;
let zu = class extends V {
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
    } = this.props, u = this.state.checked ? 1 : 0, f = t || "div", d = typeof o == "string" ? /* @__PURE__ */ y("i", { class: `icon ${o}` }) : o, p = typeof r == "string" ? /* @__PURE__ */ y("i", { class: `icon ${r}` }) : r, g = [
      /* @__PURE__ */ y("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ y("label", { children: [
        d,
        i,
        p
      ] })
    ];
    return q(
      f,
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
class Ol extends J {
}
Ol.NAME = "Switch";
Ol.Component = zu;
class Hl extends J {
}
Hl.NAME = "BtnGroup";
Hl.Component = Al;
class Fu extends at {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Jh(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.initInputCash(), this.initUploadCash(), n && this.addFileItem(n);
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
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${Xh(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: o, renameText: r, deleteBtn: a, deleteText: l } = this.options;
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
Fu.DEFAULT = {
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
var Pt;
class Uu {
  constructor(t = "") {
    O(this, Pt, void 0);
    typeof t == "object" ? B(this, Pt, t) : B(this, Pt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    T(this, Pt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    T(this, Pt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    T(this, Pt).removeEventListener(t, n, s);
  }
  emit(t) {
    return T(this, Pt).dispatchEvent(t), t;
  }
}
Pt = new WeakMap();
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
class Bl extends Uu {
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
    return typeof t == "string" && (ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Bl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ua.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let zl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Xn, te, wt, Ze, Qe, ks;
const Fr = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    O(this, Qe);
    O(this, Xn, void 0);
    O(this, te, void 0);
    O(this, wt, void 0);
    O(this, Ze, void 0);
    B(this, Xn, n), B(this, te, `ZUI_STORE:${t ?? zl()}`), B(this, wt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return T(this, Xn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (T(this, Ze) || B(this, Ze, new Fr(T(this, te), "session")), T(this, Ze));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = T(this, wt).getItem(Le(this, Qe, ks).call(this, t));
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
    T(this, wt).setItem(Le(this, Qe, ks).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    T(this, wt).removeItem(Le(this, Qe, ks).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < T(this, wt).length; n++) {
      const s = T(this, wt).key(n);
      if (s != null && s.startsWith(T(this, te))) {
        const i = T(this, wt).getItem(s);
        typeof i == "string" && t(s.substring(T(this, te).length + 1), JSON.parse(i));
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
let Vs = Fr;
Xn = new WeakMap(), te = new WeakMap(), wt = new WeakMap(), Ze = new WeakMap(), Qe = new WeakSet(), ks = function(t) {
  return `${T(this, te)}:${t}`;
};
const Vu = new Vs("DEFAULT");
function qu(e, t = "local") {
  return new Vs(e, t);
}
Object.assign(Vu, { create: qu });
function Gu(e) {
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
function ju(e) {
  const [t, n, s] = typeof e == "string" ? Gu(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function da(e, t) {
  return ju(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function fa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Yu(e, t, n) {
  e = e % 360 / 360, t = fa(t), n = fa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Ku(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Xu(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Fl = class extends V {
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
      hueDistance: f = 43,
      saturation: d = 0.4,
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
      const k = Xu(l, c);
      if (w.push("has-text", `has-text-${k.length}`), r)
        !a && r && (v.color = da(r));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Ku(N)) * f % 360;
        if (v.background = `hsl(${A},${d * 100}%,${p * 100}%)`, !a) {
          const I = Yu(A, d, p);
          v.color = da(I);
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
class Ul extends J {
}
Ul.NAME = "Avatar";
Ul.Component = Fl;
var lr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, we = (e, t, n) => (lr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), hn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Pn = (e, t, n, s) => (lr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ii = (e, t, n) => (lr(e, t, "access private method"), n), Ue, Cs, fe, oo, xn, Ss;
const Oi = "show", pa = "in", Ju = '[data-dismiss="modal"]', $n = class extends at {
  constructor() {
    super(...arguments), hn(this, xn), hn(this, Ue, 0), hn(this, Cs, void 0), hn(this, fe, void 0), hn(this, oo, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Ju) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Oi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", we(this, oo)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!we(this, fe) || we(this, fe)[0] !== n || we(this, fe)[1] !== s) && (Pn(this, fe, [n, s]), this.layout());
        });
        t.observe(e), Pn(this, Cs, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = we(this, Cs)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${$n.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: o } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Oi, i).css({
      zIndex: `${$n.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), Ii(this, xn, Ss).call(this, () => {
      m(t).addClass(pa), Ii(this, xn, Ss).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(pa), this.emit("hide"), Ii(this, xn, Ss).call(this, () => {
      m(this.modalElement).removeClass(Oi), this.emit("hidden");
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
    Pn(this, fe, [i, o]), typeof e == "function" && (e = e({ width: i, height: o }));
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
    (t = $n.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = $n.query(e)) == null || t.show();
  }
};
let Kt = $n;
Ue = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakSet();
Ss = function(e, t) {
  we(this, Ue) && (clearTimeout(we(this, Ue)), Pn(this, Ue, 0)), e && (this.options.animation ? Pn(this, Ue, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Kt.NAME = "Modal";
Kt.MULTI_INSTANCE = !0;
Kt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Kt.zIndex = 2e3;
m(window).on("resize.modal.zui", () => {
  Kt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Kt.hide(t == null ? void 0 : t.target);
});
class Vl extends V {
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
Vl.defaultProps = { closeBtn: !0 };
var tn, en, nn;
class Zu extends V {
  constructor() {
    super(...arguments);
    O(this, tn, void 0);
    O(this, en, void 0);
    O(this, nn, void 0);
    B(this, tn, Yt()), this.state = {}, B(this, nn, () => {
      var i, o;
      const n = (o = (i = T(this, tn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let s = T(this, en);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = n.body, a = n.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, en, s);
    });
  }
  componentDidMount() {
    T(this, nn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = T(this, en)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: T(this, tn),
        onLoad: T(this, nn)
      }
    );
  }
}
tn = new WeakMap(), en = new WeakMap(), nn = new WeakMap();
var cr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Et = (e, t, n) => (cr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), un = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ie = (e, t, n, s) => (cr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Es = (e, t, n) => (cr(e, t, "access private method"), n), pe, kn, Tt, qs, hr, Ms, ro;
function Qu(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function td(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ y(ul, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function ed(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ y(Zu, { url: n })
  };
}
const nd = {
  custom: Qu,
  ajax: td,
  iframe: ed
}, Hi = "loading", Cn = class extends Kt {
  constructor() {
    super(...arguments), un(this, qs), un(this, Ms), un(this, pe, void 0), un(this, kn, void 0), un(this, Tt, void 0);
  }
  get id() {
    return Et(this, kn);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(Hi);
  }
  get shown() {
    var e;
    return !!((e = Et(this, pe)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = Et(this, pe);
    if (!e) {
      const { options: t } = this;
      let n = Et(this, kn);
      n || (n = t.id || `modal-${m.guid++}`, Ie(this, kn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ie(this, pe, e);
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
    const e = Et(this, pe);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ie(this, pe, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Et(this, Tt) && clearTimeout(Et(this, Tt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: o = null } = t, r = nd[s];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", o).addClass(Hi), i && Ie(this, Tt, window.setTimeout(() => {
      Ie(this, Tt, 0), Es(this, Ms, ro).call(this, this.options.timeoutTip);
    }, i));
    const a = await r.call(this, e, t);
    return a === !1 ? await Es(this, Ms, ro).call(this, this.options.failedTip) : a && typeof a == "object" && await Es(this, qs, hr).call(this, a), Et(this, Tt) && (clearTimeout(Et(this, Tt)), Ie(this, Tt, 0)), await Ws(100), n.removeClass(Hi), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const o = Cn.ensure(n, i);
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
      }, typeof p.key == "string" && (p.text || (p.text = Ut.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let f;
    const d = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: g }) => {
        const _ = Cn.query(g.target, l);
        f = p.key, (r == null ? void 0 : r(p, _)) !== !1 && _ && _.hide();
      }
    } : void 0;
    return await Cn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...h
    }), f;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await Cn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, r) => {
        n == null || n(o.key === "confirm", r), t == null || t(o, r);
      },
      ...s
    }) === "confirm";
  }
};
let ql = Cn;
pe = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakSet();
hr = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], m(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Un(
      /* @__PURE__ */ y(Vl, { ...e }),
      this.modalElement
    );
  });
};
Ms = /* @__PURE__ */ new WeakSet();
ro = function(e) {
  if (e)
    return Es(this, qs, hr).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: e })
    });
};
ql.DEFAULT = {
  ...Kt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ao = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ga = (e, t, n, s) => (ur(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), lo = (e, t, n) => (ur(e, t, "access private method"), n), $e, dr, Gl, co, jl, fr, Yl;
const sd = '[data-toggle="modal"]';
class Kl extends at {
  constructor() {
    super(...arguments), gs(this, dr), gs(this, co), gs(this, fr), gs(this, $e, void 0);
  }
  get modal() {
    return ao(this, $e);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = lo(this, co, jl).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = ao(this, $e)) == null ? void 0 : t.hide();
  }
}
$e = /* @__PURE__ */ new WeakMap();
dr = /* @__PURE__ */ new WeakSet();
Gl = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
co = /* @__PURE__ */ new WeakSet();
jl = function() {
  const e = lo(this, dr, Gl).call(this);
  let t = ao(this, $e);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = lo(this, fr, Yl).call(this);
    if (!n)
      return;
    t = Kt.ensure(n, e);
  } else
    t = ql.ensure(this.container, e);
  return ga(this, $e, t), t.on("destroyed", () => {
    ga(this, $e, void 0);
  }), t;
};
fr = /* @__PURE__ */ new WeakSet();
Yl = function() {
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
Kl.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, sd);
  if (n) {
    const i = Kl.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let Xl = class extends Ae {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Xl.NAME = "nav";
class Jl extends J {
}
Jl.NAME = "Nav";
Jl.Component = Xl;
function Gn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function id({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = Gn(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : et(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ y(Vt, { type: n, ...a });
}
const At = 24 * 60 * 60 * 1e3, it = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ss = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), ho = (e, t = /* @__PURE__ */ new Date()) => it(e).getFullYear() === it(t).getFullYear(), od = (e, t = /* @__PURE__ */ new Date()) => (e = it(e), t = it(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), xf = (e, t = /* @__PURE__ */ new Date()) => {
  e = it(e), t = it(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, $f = (e, t) => ss(it(t), e), kf = (e, t) => ss(it(t).getTime() - At, e), Cf = (e, t) => ss(it(t).getTime() + At, e), Sf = (e, t) => ss(it(t).getTime() - 2 * At, e), uo = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", ho(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, Ef = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = uo(e, ho(e) ? s.month : s.full);
  if (ss(e, t))
    return i;
  const o = uo(t, ho(e, t) ? od(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Mf = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - At * 7;
    case "oneMonth":
      return t - At * 31;
    case "threeMonth":
      return t - At * 31 * 3;
    case "halfYear":
      return t - At * 183;
    case "oneYear":
      return t - At * 365;
    case "twoYear":
      return t - 2 * (At * 365);
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
function rd({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = Gn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ y(pl, { ...r, children: [
    o,
    s
  ] });
}
function ad({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ y(Vt, { type: n, ...l })), c = (f, d) => {
    const p = [];
    for (let g = f; g <= d; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const _ = Gn(i, g);
      r && (l.url = typeof r == "function" ? r(_) : et(r, _)), p.push(/* @__PURE__ */ y(Vt, { type: n, ...l, onClick: o }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function ld({
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
  return r.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ y(Nl, { type: "dropdown", dropdown: i, ...r });
}
function cd({
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
  const f = (g) => {
    var _;
    u = Number((_ = g.target) == null ? void 0 : _.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, d = (g) => {
    if (!(g != null && g.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const _ = Gn(i, u);
    a && !a({ info: _, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(_) : et(l, _));
  }, p = Gn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ y("div", { className: M("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ y(Vt, { type: s, ...c, onClick: d })
  ] });
}
let bi = class extends mt {
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
bi.NAME = "pager";
bi.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
bi.ItemComponents = {
  ...mt.ItemComponents,
  link: id,
  info: rd,
  nav: ad,
  "size-menu": ld,
  goto: cd
};
class Zl extends J {
}
Zl.NAME = "Pager";
Zl.Component = bi;
class pr extends V {
  constructor() {
    super(...arguments), this._handleClick = (t) => {
      m(t.target).closest("a,.btn").length || this.props.togglePop();
    }, this._handleFocus = () => {
      this.props.changeState({ focus: !0 });
    }, this._handleBlur = () => {
      this.props.changeState({ focus: !1 });
    };
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i, focus: o } = t;
    return M(
      "pick",
      n,
      s && "is-open",
      (o || s) && "focus",
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
        onFocus: this._handleFocus,
        onBlur: this._handleBlur,
        children: [
          this._renderTrigger(),
          this._renderValue()
        ]
      }
    );
  }
}
var ve, _t, ee;
class Ql extends V {
  constructor() {
    super(...arguments);
    O(this, ve, void 0);
    O(this, _t, void 0);
    O(this, ee, void 0);
    this.state = { show: !1 }, B(this, ve, Yt()), this._handleDocClick = (n) => {
      const { state: { open: s }, id: i, togglePop: o } = this.props;
      s !== "closing" && !m(n.target).closest(`#pick-${i},#pick-pop-${i}`).length && o(!1);
    };
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = T(this, ve)) == null ? void 0 : n.current;
  }
  get container() {
    return T(this, ee);
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
    if (!T(this, ee)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, ee, i[0]);
    }
    return T(this, ee);
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
        ref: T(this, ve),
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
    T(this, _t) || B(this, _t, tr(s, n, () => {
      const { direction: r, width: a } = i;
      vi(s, n, {
        placement: `${r === "top" ? "top" : "bottom"}-start`,
        middleware: [r === "auto" ? yi() : null, Zi(), Jo(1)].filter(Boolean)
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
    n && (n(), B(this, _t, void 0)), B(this, ee, void 0), B(this, ve, void 0);
  }
  render(n) {
    return du(this._render(n), this._getContainer(n));
  }
}
ve = new WeakMap(), _t = new WeakMap(), ee = new WeakMap();
var tc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, dn = (e, t, n) => (tc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ya = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (tc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts, ht;
let rn = class extends V {
  constructor(t) {
    super(t), ya(this, Ts, void 0), ya(this, ht, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return i;
      dn(this, ht) && (clearTimeout(dn(this, ht)), Oe(this, ht, 0));
      let o = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: r } = o;
      return r === "closing" ? (await Ws(200, (a) => {
        Oe(this, ht, a);
      }), Oe(this, ht, 0), o = await this.changeState({ open: !1 })) : r === "opening" && (await Ws(50, (a) => {
        Oe(this, ht, a);
      }), Oe(this, ht, 0), o = await this.changeState({ open: !0 })), o;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      focus: !1,
      disabled: !1
    }, Oe(this, Ts, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return dn(this, Ts);
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
    const { open: s, value: i, focus: o } = this.state, { open: r, value: a, focus: l } = n;
    if (!!s != !!r) {
      const { onPopShown: h, onPopHidden: c } = this.props;
      s && h ? h() : !s && c && c();
    }
    if (i !== a) {
      const { onChange: h } = this.props;
      h == null || h(i, a);
    }
    if (o !== l) {
      const { onFocus: h, onBlur: c } = this.props;
      o && h ? h() : !o && c && c();
    }
    this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), dn(this, ht) && clearTimeout(dn(this, ht));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let o;
    if (s) {
      const r = this._getPop(t);
      o = /* @__PURE__ */ y(r, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ y(Qn, { children: [
      /* @__PURE__ */ y(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      o
    ] });
  }
};
Ts = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
rn.Trigger = pr;
rn.Pop = Ql;
rn.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popDirection: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
class ec extends J {
}
ec.NAME = "Pick";
ec.Component = rn;
var Jn;
class hd extends pr {
  constructor() {
    super(...arguments);
    O(this, Jn, void 0);
    B(this, Jn, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && o && s(o), n.stopPropagation();
    }), this._renderSelection = (n) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
      n.text ?? n.value,
      /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: T(this, Jn), "data-value": n.value, children: /* @__PURE__ */ y("span", { className: "close" }) })
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
Jn = new WeakMap();
var ni;
class ud extends pr {
  constructor() {
    super(...arguments);
    O(this, ni, (n) => {
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
    const { children: n, state: { selections: s = [] }, placeholder: i } = this.props, [o] = s, r = o ? /* @__PURE__ */ y("span", { className: "picker-single-selection", children: o.text ?? o.value }, "selection") : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: i }, "selection"), a = o ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: T(this, ni), children: /* @__PURE__ */ y("span", { className: "close" }) }, "deselect") : null;
    return [
      r,
      n,
      a,
      /* @__PURE__ */ y("span", { class: "caret" }, "caret")
    ];
  }
}
ni = new WeakMap();
var si, ii, nc, oi, sc, ri;
class dd extends Ql {
  constructor() {
    super(...arguments);
    O(this, ii);
    O(this, oi);
    O(this, si, Yt());
    O(this, ri, ({ item: n }) => {
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
      const s = Le(this, ii, nc).call(this);
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
      mi,
      {
        ref: T(this, si),
        className: "picker-menu-list",
        items: Le(this, oi, sc).call(this),
        onClickItem: T(this, ri),
        ...s
      }
    );
  }
}
si = new WeakMap(), ii = new WeakSet(), nc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, oi = new WeakSet(), sc = function() {
  const { selections: n, items: s, hoverItem: i } = this.props.state, o = new Set(n.map((l) => l.value));
  let r = !1;
  const a = s.reduce((l, h) => {
    const {
      value: c,
      keys: u,
      text: f,
      className: d,
      ...p
    } = h;
    return c === i && (r = !0), l.push({
      key: c,
      active: o.has(c),
      text: f ?? c,
      className: M(d, { hover: c === i }),
      "data-value": c,
      ...p
    }), l;
  }, []);
  return !r && a.length && (a[0].className = M(a[0].className, "hover")), a;
}, ri = new WeakMap();
var gr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Bi = (e, t, n) => (gr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, pn = (e, t, n, s) => (gr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), dt = (e, t, n) => (gr(e, t, "access private method"), n), Sn, ge, Ve, Wn, mr, ic, Jt, me;
let yr = class extends rn {
  constructor(t) {
    super(t), fn(this, Ve), fn(this, mr), fn(this, Jt), fn(this, Sn, void 0), fn(this, ge, void 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? dt(this, Jt, me).call(this, n) : dt(this, Jt, me).call(this);
      const { valueList: i } = this, o = i.indexOf(n);
      if (s !== o >= 0)
        return o > -1 ? i.splice(o, 1) : i.push(n), dt(this, Jt, me).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(dt(this, Ve, Wn).call(this, n)), o = s.filter((r) => !i.has(r));
      dt(this, Jt, me).call(this, o);
    }, this.clear = () => {
      dt(this, Jt, me).call(this);
    }, this.select = (n) => {
      const s = dt(this, Ve, Wn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return dt(this, Jt, me).call(this, i);
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
    return dt(this, Ve, Wn).call(this, this.state.value);
  }
  async load() {
    let t = Bi(this, ge);
    t && t.abort(), t = new AbortController(), pn(this, ge, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let o;
    if (typeof n == "function")
      await Ws(s || 500), o = await n(i, { signal: t.signal });
    else if (i.length) {
      const r = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      r.length ? o = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: u
        } = l;
        return r.every((f) => h.toLowerCase().includes(f) || c.toLowerCase().includes(f) || typeof u == "string" && u.toLowerCase().includes(f)) && a.push(l), a;
      }, []) : o = n;
    } else
      o = n;
    return pn(this, ge, void 0), o || [];
  }
  async update() {
    const { state: t, props: n } = this, s = Bi(this, Sn) || {}, i = {};
    if (pn(this, Sn, s), (s.search !== t.search || n.items !== s.items) && (i.items = await this.load(), i.loading = !1, s.items = n.items, s.search = t.search), s.value !== t.value) {
      const o = i.items || t.items, r = new Map(o.map((a) => [a.value, a]));
      i.selections = this.valueList.map((a) => r.get(a) || { value: a }), s.value = t.value;
    }
    Object.keys(i).length && await this.changeState(i);
  }
  componentDidUpdate(t, n) {
    super.componentDidUpdate(t, n), this.update();
  }
  componentDidMount() {
    super.componentDidMount(), this.update();
  }
  componentWillUnmount() {
    var t;
    (t = Bi(this, ge)) == null || t.abort(), pn(this, ge, void 0), pn(this, Sn, void 0), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
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
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? hd : ud);
  }
};
Sn = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakSet();
Wn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
mr = /* @__PURE__ */ new WeakSet();
ic = function(e) {
  const t = dt(this, Ve, Wn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
Jt = /* @__PURE__ */ new WeakSet();
me = function(e) {
  const t = e === void 0 ? e : dt(this, mr, ic).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
yr.defaultProps = {
  ...rn.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
yr.Pop = dd;
class oc extends J {
}
oc.NAME = "Picker";
oc.Component = yr;
class rc extends at {
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
    return i && s.middleware.push(yi()), o && s.middleware.push(o === !0 ? Zi() : Zi(o)), r && s.middleware.push(Ji({ element: this.$arrow[0] })), a && s.middleware.push(Jo(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = tr(t, n, () => {
      vi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Ji || !r.arrow)
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
rc.NAME = "Popovers";
rc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class ac extends J {
}
ac.NAME = "Toolbar";
ac.Component = mt;
function is(e) {
  return e.split("-")[1];
}
function wr(e) {
  return e === "y" ? "height" : "width";
}
function Ke(e) {
  return e.split("-")[0];
}
function xi(e) {
  return ["top", "bottom"].includes(Ke(e)) ? "x" : "y";
}
function wa(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = xi(t), l = wr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Ke(t)) {
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
  switch (is(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const fd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = wa(h, s, l), f = s, d = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: _, fn: w } = a[g], { x: v, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, d = { ...d, [_]: { ...d[_], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = wa(h, f, l)), g = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function lc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Gs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function pd(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = t, p = lc(d), g = a[f ? u === "floating" ? "reference" : "floating" : u], _ = Gs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, C = Gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / $.y, bottom: (C.bottom - _.bottom + p.bottom) / $.y, left: (_.left - C.left + p.left) / $.x, right: (C.right - _.right + p.right) / $.x };
}
const gd = Math.min, md = Math.max;
function yd(e, t, n) {
  return md(e, gd(t, n));
}
const wd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = lc(s), c = { x: i, y: o }, u = xi(r), f = wr(u), d = await l.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", _ = a.reference[f] + a.reference[u] - c[u] - a.floating[f], w = c[u] - a.reference[u], v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[f]);
  const C = _ / 2 - w / 2, k = h[p], E = $ - d[f] - h[g], N = $ / 2 - d[f] / 2 + C, A = yd(k, N, E), I = is(r) != null && N != A && a.reference[f] / 2 - (N < k ? h[p] : h[g]) - d[f] / 2 < 0;
  return { [u]: c[u] - (I ? N < k ? k - N : E - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), _d = ["top", "right", "bottom", "left"];
_d.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const vd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function js(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vd[t]);
}
function bd(e, t, n) {
  n === void 0 && (n = !1);
  const s = is(e), i = xi(e), o = wr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = js(r)), { main: r, cross: js(r) };
}
const xd = { start: "end", end: "start" };
function zi(e) {
  return e.replace(/start|end/g, (t) => xd[t]);
}
const $d = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...g } = e, _ = Ke(s), w = Ke(r) === r, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [js(r)] : function(b) {
      const R = js(b);
      return [zi(b), R, zi(R)];
    }(r));
    u || d === "none" || $.push(...function(b, R, W, L) {
      const D = is(b);
      let P = function(F, lt, Ct) {
        const rs = ["left", "right"], an = ["right", "left"], as = ["top", "bottom"], Ti = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Ct ? lt ? an : rs : lt ? rs : an;
          case "left":
          case "right":
            return lt ? as : Ti;
          default:
            return [];
        }
      }(Ke(b), W === "start", L);
      return D && (P = P.map((F) => F + "-" + D), R && (P = P.concat(P.map(zi)))), P;
    }(r, p, d, v));
    const C = [r, ...$], k = await pd(t, g), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[_]), c) {
      const { main: b, cross: R } = bd(s, o, v);
      E.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let W = "bottom";
      switch (f) {
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
}, kd = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Ke(a), f = is(a), d = xi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && d ? -1 : 1, _ = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return f && typeof $ == "number" && (v = f === "end" ? -1 * $ : $), d ? { x: v * g, y: w * p } : { x: w * p, y: v * g };
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
function ae(e) {
  return hc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function cc() {
  if (ms)
    return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ms) : navigator.userAgent;
}
function qt(e) {
  return e instanceof ot(e).HTMLElement;
}
function pt(e) {
  return e instanceof ot(e).Element;
}
function hc(e) {
  return e instanceof ot(e).Node;
}
function _a(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function $i(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Cd(e) {
  return ["table", "td", "th"].includes(ae(e));
}
function fo(e) {
  const t = /firefox/i.test(cc()), n = xt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function uc() {
  return !/^((?!chrome|android).)*safari/i.test(cc());
}
function _r(e) {
  return ["html", "body", "#document"].includes(ae(e));
}
const va = Math.min, Dn = Math.max, Ys = Math.round;
function dc(e) {
  const t = xt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Ys(n) !== i || Ys(s) !== o;
  return r && (n = i, s = o), { width: n, height: s, fallback: r };
}
function fc(e) {
  return pt(e) ? e : e.contextElement;
}
const pc = { x: 1, y: 1 };
function Xe(e) {
  const t = fc(e);
  if (!qt(t))
    return pc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: o } = dc(t);
  let r = (o ? Ys(n.width) : n.width) / s, a = (o ? Ys(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Me(e, t, n, s) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = fc(e);
  let l = pc;
  t && (s ? pt(s) && (l = Xe(s)) : l = Xe(e));
  const h = a ? ot(a) : window, c = !uc() && n;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, f = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, d = r.width / l.x, p = r.height / l.y;
  if (a) {
    const g = ot(a), _ = s && pt(s) ? ot(s) : s;
    let w = g.frameElement;
    for (; w && s && _ !== g; ) {
      const v = Xe(w), $ = w.getBoundingClientRect(), C = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(C.paddingLeft)) * v.x, $.y += (w.clientTop + parseFloat(C.paddingTop)) * v.y, u *= v.x, f *= v.y, d *= v.x, p *= v.y, u += $.x, f += $.y, w = ot(w).frameElement;
    }
  }
  return { width: d, height: p, top: f, right: u + d, bottom: f + p, left: u, x: u, y: f };
}
function oe(e) {
  return ((hc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ki(e) {
  return pt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function gc(e) {
  return Me(oe(e)).left + ki(e).scrollLeft;
}
function Sd(e, t, n) {
  const s = qt(t), i = oe(t), o = Me(e, !0, n === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ae(t) !== "body" || $i(i)) && (r = ki(t)), qt(t)) {
      const l = Me(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = gc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function jn(e) {
  if (ae(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (_a(e) ? e.host : null) || oe(e);
  return _a(t) ? t.host : t;
}
function ba(e) {
  return qt(e) && xt(e).position !== "fixed" ? e.offsetParent : null;
}
function xa(e) {
  const t = ot(e);
  let n = ba(e);
  for (; n && Cd(n) && xt(n).position === "static"; )
    n = ba(n);
  return n && (ae(n) === "html" || ae(n) === "body" && xt(n).position === "static" && !fo(n)) ? t : n || function(s) {
    let i = jn(s);
    for (; qt(i) && !_r(i); ) {
      if (fo(i))
        return i;
      i = jn(i);
    }
    return null;
  }(e) || t;
}
function mc(e) {
  const t = jn(e);
  return _r(t) ? e.ownerDocument.body : qt(t) && $i(t) ? t : mc(t);
}
function In(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = mc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ot(s);
  return i ? t.concat(o, o.visualViewport || [], $i(s) ? s : []) : t.concat(s, In(s));
}
function $a(e, t, n) {
  return t === "viewport" ? Gs(function(s, i) {
    const o = ot(s), r = oe(s), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const f = uc();
      (f || !f && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : pt(t) ? function(s, i) {
    const o = Me(s, !0, i === "fixed"), r = o.top + s.clientTop, a = o.left + s.clientLeft, l = qt(s) ? Xe(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, f = r * l.y;
    return { top: f, left: u, right: u + h, bottom: f + c, x: u, y: f, width: h, height: c };
  }(t, n) : Gs(function(s) {
    var i;
    const o = oe(s), r = ki(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Dn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Dn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -r.scrollLeft + gc(s);
    const u = -r.scrollTop;
    return xt(a || o).direction === "rtl" && (c += Dn(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(oe(e)));
}
const Ed = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = In(h).filter((_) => pt(_) && ae(_) !== "body"), d = null;
    const p = xt(h).position === "fixed";
    let g = p ? jn(h) : h;
    for (; pt(g) && !_r(g); ) {
      const _ = xt(g), w = fo(g);
      (p ? w || d : w || _.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = _ : f = f.filter((v) => v !== g), g = jn(g);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = $a(t, c, i);
    return h.top = Dn(u.top, h.top), h.right = va(u.right, h.right), h.bottom = va(u.bottom, h.bottom), h.left = Dn(u.left, h.left), h;
  }, $a(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = qt(n), o = oe(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ae(n) !== "body" || $i(o)) && (r = ki(n)), qt(n))) {
    const h = Me(n);
    a = Xe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: pt, getDimensions: function(e) {
  return dc(e);
}, getOffsetParent: xa, getDocumentElement: oe, getScale: Xe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || xa, o = this.getDimensions;
  return { reference: Sd(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => xt(e).direction === "rtl" };
function Md(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || o ? [...pt(e) ? In(e) : e.contextElement ? In(e.contextElement) : [], ...In(t)] : [];
  h.forEach((d) => {
    l && d.addEventListener("scroll", n, { passive: !0 }), o && d.addEventListener("resize", n);
  });
  let c, u = null;
  if (r) {
    let d = !0;
    u = new ResizeObserver(() => {
      d || n(), d = !1;
    }), pt(e) && !a && u.observe(e), pt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let f = a ? Me(e) : null;
  return a && function d() {
    const p = Me(e);
    !f || p.x === f.x && p.y === f.y && p.width === f.width && p.height === f.height || n(), f = p, c = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), o && p.removeEventListener("resize", n);
    }), (d = u) == null || d.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Td = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Ed, ...n }, o = { ...i.platform, _c: s };
  return fd(e, t, { ...i, platform: o });
};
var vr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (vr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Te = (e, t, n, s) => (vr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), bt = (e, t, n) => (vr(e, t, "access private method"), n), On, Hn, En, qe, nt, po, Ks, Ci, br, xr, yc, go, wc, $r, _c, kr, vc, Cr, bc, mo, xc, Sr, $c, Bn, yo, kc;
const Ge = class extends at {
  constructor() {
    super(...arguments), j(this, Ci), j(this, xr), j(this, go), j(this, $r), j(this, kr), j(this, Cr), j(this, mo), j(this, Sr), j(this, yo), j(this, On, !1), j(this, Hn, void 0), j(this, En, 0), j(this, qe, void 0), j(this, nt, void 0), j(this, po, void 0), j(this, Ks, void 0), this.hideLater = () => {
      U(this, Bn).call(this), Te(this, En, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Bn, () => {
      clearTimeout(U(this, En)), Te(this, En, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, qe)) == null ? void 0 : e.classList.contains(Ge.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, qe) || bt(this, go, wc).call(this);
  }
  get trigger() {
    return U(this, po) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ge.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, On) && this.isHover && bt(this, yo, kc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ge.CLASS_SHOW), bt(this, mo, xc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Ks)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, qe)) == null || t.classList.remove(Ge.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, On) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Bn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, o] of n)
      s.has(i) || o.hide();
  }
};
let $t = Ge;
On = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
po = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakSet();
br = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
xr = /* @__PURE__ */ new WeakSet();
yc = function() {
  const e = bt(this, Ci, br).call(this);
  return Te(this, nt, document.createElement("div")), U(this, nt).style.position = this.options.strategy, U(this, nt).style.width = `${e}px`, U(this, nt).style.height = `${e}px`, U(this, nt).style.transform = "rotate(45deg)", U(this, nt);
};
go = /* @__PURE__ */ new WeakSet();
wc = function() {
  var n;
  const e = Ge.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(bt(this, xr, yc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Te(this, qe, t), t;
};
$r = /* @__PURE__ */ new WeakSet();
_c = function() {
  var i;
  const e = bt(this, Ci, br).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [kd(e), $d()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, nt) && ((i = s.middleware) == null || i.push(wd({ element: U(this, nt) }))), s;
};
kr = /* @__PURE__ */ new WeakSet();
vc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Cr = /* @__PURE__ */ new WeakSet();
bc = function(e) {
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
mo = /* @__PURE__ */ new WeakSet();
xc = function() {
  const e = bt(this, $r, _c).call(this), t = bt(this, Sr, $c).call(this);
  Te(this, Ks, Md(t, this.tooltip, () => {
    Td(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: o }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const r = o.split("-")[0], a = bt(this, kr, vc).call(this, r);
      if (i.arrow && U(this, nt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, nt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...bt(this, Cr, bc).call(this, r)
        });
      }
    });
  }));
};
Sr = /* @__PURE__ */ new WeakSet();
$c = function() {
  return U(this, Hn) || Te(this, Hn, {
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
  }), U(this, Hn);
};
Bn = /* @__PURE__ */ new WeakMap();
yo = /* @__PURE__ */ new WeakSet();
kc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Bn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Te(this, On, !0);
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
function Rd({
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
  trailingIcon: f,
  hint: d,
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
      title: d,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...o,
      ...$,
      children: [
        /* @__PURE__ */ y("span", { class: `tree-toggle-icon${v ? " state" : ""}`, children: v ? /* @__PURE__ */ y("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ y("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
        /* @__PURE__ */ y(Vn, { icon: h, className: "tree-icon" }),
        r ? /* @__PURE__ */ y("a", { className: "text tree-link not-nested-toggle", href: r, children: c }) : /* @__PURE__ */ y("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ y(mt, { ...C }) : null,
        /* @__PURE__ */ y(Vn, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Er = class extends gi {
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
Er.ItemComponents = {
  item: Rd
};
Er.NAME = "tree";
class Cc extends J {
}
Cc.NAME = "Tree";
Cc.Component = Er;
var Zn, ai, li, ci;
class Nd extends V {
  constructor(n) {
    super(n);
    O(this, Zn, Yt());
    O(this, ai, (n) => {
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
    O(this, li, (n) => {
      var o, r, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = n.dataTransfer) == null || o.setData("application/id", this.props.block.id), (a = (r = this.props).onDragStart) == null || a.call(r, n);
    });
    O(this, ci, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return T(this, Zn).current;
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
          this.setState({ loading: !1, content: /* @__PURE__ */ y(ul, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ y("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: o, style: r, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: f, dragging: d } = this.state;
    return /* @__PURE__ */ y("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ y(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: T(this, li),
        onDragEnd: T(this, ci),
        "data-id": c,
        ref: T(this, Zn),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: T(this, ai), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          f
        ]
      }
    ) });
  }
}
Zn = new WeakMap(), ai = new WeakMap(), li = new WeakMap(), ci = new WeakMap();
var Sc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Bt = (e, t, n) => (Sc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ut = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, yt = (e, t, n) => (Sc(e, t, "access private method"), n), Gt, Mr, Ec, Tr, Mc, wo, Tc, Rr, Rc, Xs, _o, Si, vo, Nr, Nc, bo, xo, Ei, Ar;
const Lr = class extends V {
  constructor() {
    super(...arguments), ut(this, Mr), ut(this, Tr), ut(this, wo), ut(this, Rr), ut(this, Xs), ut(this, Si), ut(this, Nr), ut(this, Gt, /* @__PURE__ */ new Map()), this.state = {}, ut(this, bo, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), ut(this, xo, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = yt(this, wo, Tc).call(this), { cellHeight: n, grid: s } = this.props, i = Bt(this, Gt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ y("div", { class: "dashboard", children: /* @__PURE__ */ y("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((o, r) => {
      const { id: a } = o, [l, h, c, u] = i.get(a) || [0, 0, o.width, o.height];
      return /* @__PURE__ */ y(
        Nd,
        {
          id: a,
          index: r,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: o,
          moreMenu: !0,
          onDragStart: Bt(this, bo),
          onDragEnd: Bt(this, xo)
        },
        o.id
      );
    }) }) });
  }
};
let Pr = Lr;
Gt = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakSet();
Ec = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Tr = /* @__PURE__ */ new WeakSet();
Mc = function() {
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
    } = i, [f, d] = yt(this, Mr, Ec).call(this, r);
    return {
      id: `${o}`,
      width: f,
      height: d,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...u
    };
  });
};
wo = /* @__PURE__ */ new WeakSet();
Tc = function() {
  Bt(this, Gt).clear();
  let e = 0;
  const t = yt(this, Tr, Mc).call(this);
  return t.forEach((n) => {
    yt(this, Rr, Rc).call(this, n);
    const [, s, , i] = Bt(this, Gt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Rr = /* @__PURE__ */ new WeakSet();
Rc = function(e) {
  const t = Bt(this, Gt), { id: n, left: s, top: i, width: o, height: r } = e;
  if (s < 0 || i < 0) {
    const [a, l] = yt(this, Nr, Nc).call(this, o, r, s, i);
    t.set(n, [a, l, o, r]);
  } else
    yt(this, Si, vo).call(this, n, [s, i, o, r]);
};
Xs = /* @__PURE__ */ new WeakSet();
_o = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Bt(this, Gt).entries())
    if (s !== n && yt(t = Lr, Ei, Ar).call(t, i, e))
      return !1;
  return !0;
};
Si = /* @__PURE__ */ new WeakSet();
vo = function(e, t) {
  var n;
  Bt(this, Gt).set(e, t);
  for (const [s, i] of Bt(this, Gt).entries())
    s !== e && yt(n = Lr, Ei, Ar).call(n, i, t) && (i[1] = t[1] + t[3], yt(this, Si, vo).call(this, s, i));
};
Nr = /* @__PURE__ */ new WeakSet();
Nc = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (yt(this, Xs, _o).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, o = s < 0 ? 0 : s, r = !1;
  const a = this.props.grid;
  for (; !r; ) {
    if (yt(this, Xs, _o).call(this, [i, o, e, t])) {
      r = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, o += 1)) : o += 1;
  }
  return [i, o];
};
bo = /* @__PURE__ */ new WeakMap();
xo = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
Ar = function([e, t, n, s], [i, o, r, a]) {
  return !(e + n <= i || i + r <= e || t + s <= o || o + a <= t);
};
ut(Pr, Ei);
Pr.defaultProps = {
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
class Ac extends J {
}
Ac.NAME = "Dashboard";
Ac.Component = Pr;
var ne, se;
class ka extends V {
  constructor(n) {
    super(n);
    O(this, ne, void 0);
    O(this, se, void 0);
    B(this, ne, 0), B(this, se, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (T(this, ne) && cancelAnimationFrame(T(this, ne)), B(this, ne, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), B(this, ne, 0);
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
    n && (B(this, se, typeof n == "string" ? document : n.current), T(this, se).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), T(this, se) && T(this, se).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: u, scrollPos: f } = this, { dragStart: d } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(u, f) * (n - g.width) / u)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(u, f) * (n - g.height) / u)), /* @__PURE__ */ y(
      "div",
      {
        className: M("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": d
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
ne = new WeakMap(), se = new WeakMap();
function Lc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, ...h }) {
  var I;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...r
  }, { align: u, border: f } = e.setting, d = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...o
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], _ = (I = s.data) == null ? void 0 : I[e.name], w = [a ?? _ ?? ""], v = i ? i(w, { row: s, col: e, value: _ }, q) : w, $ = [], C = [], k = {}, E = {};
  let N = "div";
  v == null || v.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : C;
      b.html ? R.push(/* @__PURE__ */ y("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : d, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : E, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
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
        C.length > 0 && /* @__PURE__ */ y(A, { className: M(g), style: d, ...E, children: C }),
        $
      ]
    }
  );
}
function Fi({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: a = Lc, onRenderCell: l }) {
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
function Pc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  CellComponent: l = Lc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ y(
    Fi,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let d = null;
  o.list.length && (d = /* @__PURE__ */ y(
    Fi,
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
    Fi,
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
        f,
        d,
        p
      ]
    }
  );
}
function Ad({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ y("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ y(Pc, { ...s }) });
}
function Ld({
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
    return u && Object.assign(c, u), /* @__PURE__ */ y(Pc, { ...c }, h.id);
  }) });
}
const Js = /* @__PURE__ */ new Map(), Zs = [];
function Wc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Js.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Js.set(n, e), t != null && t.buildIn && !Zs.includes(n) && Zs.push(n);
}
function he(e, t) {
  Wc(e, t);
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
function Dc(e) {
  return Js.delete(e);
}
function Pd(e) {
  if (typeof e == "string") {
    const t = Js.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ic(e, t, n) {
  return t.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Pd(s);
    i && (n.has(i.name) || ((o = i.plugins) != null && o.length && Ic(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function Wd(e = [], t = !0) {
  return t && Zs.length && e.unshift(...Zs), e != null && e.length ? Ic([], e, /* @__PURE__ */ new Set()) : [];
}
function Oc() {
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
function Dd(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ca(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Ui(e, t = !1) {
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
function Id(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (v) => (typeof v == "function" && (v = v.call(e)), v = Ca(v, 0), v < 1 && (v = Math.round(v * s)), v), c = {
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
  }, f = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, d = [], p = {};
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
      index: d.length
    }, N = w[$];
    N && N.forEach((D) => {
      const P = typeof D == "function" ? D.call(e, k) : D;
      P && Object.assign(k, P, v);
    });
    const { fixed: A, flex: I, minWidth: b = o, maxWidth: R = r } = k, W = Ca(k.width || i, i);
    E.flex = I === !0 ? 1 : typeof I == "number" ? I : 0, E.width = Dd(W < 1 ? Math.round(W * s) : W, b, R), _.forEach((D) => D.call(e, E)), d.push(E), p[E.name] = E;
    const L = A ? A === "left" ? u : f : c;
    L.list.push(E), L.totalWidth += E.width, L.width = L.totalWidth, E.flex && L.flexList.push(E), typeof k.order == "number" && (g = !0);
  }), g) {
    const v = ($, C) => ($.setting.order ?? 0) - (C.setting.order ?? 0);
    d.sort(v), u.list.sort(v), c.list.sort(v), f.list.sort(v);
  }
  return Ui(u, !0), Ui(f, !0), c.widthSetting = s - u.width - f.width, Ui(c), {
    list: d,
    map: p,
    left: u,
    center: c,
    right: f
  };
}
var Wr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, S = (e, t, n) => (Wr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Wr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Nt = (e, t, n) => (Wr(e, t, "access private method"), n), ze, Mn, ke, Dt, _e, X, Lt, Rt, Tn, Rs, Qs, Zt, Rn, Nn, $o, Hc, ko, Bc, Co, zc, So, Fc, Ns, Eo, Dr, Ir, Mi, ti, Mo, To, Or, Uc, Hr, Vc, Ro, qc;
let Br = class extends V {
  constructor(t) {
    super(t), H(this, $o), H(this, ko), H(this, Co), H(this, So), H(this, Ns), H(this, Or), H(this, Hr), H(this, Ro), this.ref = Yt(), H(this, ze, 0), H(this, Mn, void 0), H(this, ke, !1), H(this, Dt, void 0), H(this, _e, void 0), H(this, X, []), H(this, Lt, void 0), H(this, Rt, /* @__PURE__ */ new Map()), H(this, Tn, {}), H(this, Rs, void 0), H(this, Qs, []), this.updateLayout = () => {
      S(this, ze) && cancelAnimationFrame(S(this, ze)), Y(this, ze, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, ze, 0);
      }));
    }, H(this, Zt, (n, s) => {
      s = s || n.type;
      const i = S(this, Rt).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Rn, (n) => {
      S(this, Zt).call(this, n, `window_${n.type}`);
    }), H(this, Nn, (n) => {
      S(this, Zt).call(this, n, `document_${n.type}`);
    }), H(this, Dr, (n, s) => {
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
    }), H(this, Ir, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Mi, (n, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), n[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), r.setting[a] && (n = r.setting[a].call(this, n, s, i)), n;
    }), H(this, ti, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Mo, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: o, element: r }), S(this, X).forEach((f) => {
          var d;
          (d = f.onHeaderCellClick) == null || d.call(this, n, { colName: o, element: r });
        }));
      else {
        const { rowElement: f } = s, d = this.layout.visibleRows.find((p) => p.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
            return;
          for (const p of S(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
          return;
        for (const p of S(this, X))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
            return;
      }
    }), H(this, To, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Mn, t.id ?? `dtable-${zl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, _e, Object.freeze(Wd(t.plugins))), S(this, _e).forEach((n) => {
      var r;
      const { methods: s, data: i, state: o } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Tn), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = n.onCreate) == null || r.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Lt)) == null ? void 0 : t.options) || S(this, Dt) || Oc();
  }
  get plugins() {
    return S(this, X);
  }
  get layout() {
    return S(this, Lt);
  }
  get id() {
    return S(this, Mn);
  }
  get data() {
    return S(this, Tn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Dt, void 0);
  }
  componentDidMount() {
    if (S(this, ke) ? this.forceUpdate() : Nt(this, Ns, Eo).call(this), S(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Mo)), this.on("keydown", S(this, To)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Rs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, ke) ? Nt(this, Ns, Eo).call(this) : S(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, Rs)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of S(this, Rt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, Rn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Nn)) : t.removeEventListener(s, S(this, Zt));
    S(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, _e).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Tn, {}), S(this, Rt).clear();
  }
  on(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = S(this, Rt).get(t);
    i ? i.push(n) : (S(this, Rt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Nn)) : (o = this.ref.current) == null || o.addEventListener(t, S(this, Zt)));
  }
  off(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = S(this, Rt).get(t);
    if (!i)
      return;
    const o = i.indexOf(n);
    o >= 0 && i.splice(o, 1), i.length || (S(this, Rt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Nn)) : (r = this.ref.current) == null || r.removeEventListener(t, S(this, Zt)));
  }
  emitCustomEvent(t, n) {
    S(this, Zt).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: f } = t;
    if (c === "up" || c === "down")
      f = i + (c === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      f = 0;
    else if (c === "bottom")
      f = o - r;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: g } = t;
      typeof p == "number" && (u = s + p), typeof g == "number" && (u = i + g);
    }
    const d = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (d.scrollLeft = u)), typeof f == "number" && (f = Math.max(0, Math.min(f, o - r)), f !== i && (d.scrollTop = f)), Object.keys(d).length ? (this.setState(d, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, d), n == null || n.call(this, !0);
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
    if (!S(this, Dt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Lt, void 0);
    else if (s === "options") {
      if (Y(this, Dt, void 0), !S(this, Lt))
        return;
      Y(this, Lt, void 0);
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
    return Ut(S(this, Qs), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Nt(this, Ro, qc).call(this), { className: n, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Nt(this, $o, Hc).call(this, t),
      Nt(this, ko, Bc).call(this, t),
      Nt(this, Co, zc).call(this, t),
      Nt(this, So, Fc).call(this, t)
    ), S(this, X).forEach((f) => {
      var p;
      const d = (p = f.onRender) == null ? void 0 : p.call(this, t);
      d && (d.style && Object.assign(h, d.style), d.className && c.push(d.className), d.children && u.push(d.children));
    })), /* @__PURE__ */ y(
      "div",
      {
        id: S(this, Mn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
ze = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
_e = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Qs = /* @__PURE__ */ new WeakMap();
Zt = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakSet();
Hc = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ y(
      Ad,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: S(this, Mi),
        onRenderRow: S(this, Ir)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Yo,
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
ko = /* @__PURE__ */ new WeakSet();
Bc = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a } = e;
  return /* @__PURE__ */ y(
    Ld,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: S(this, Mi),
      onRenderRow: S(this, Dr)
    },
    "rows"
  );
};
Co = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    Yo,
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
So = /* @__PURE__ */ new WeakSet();
Fc = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: f } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ y(
      ka,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: o,
        clientSize: i,
        onScroll: S(this, ti),
        left: s,
        bottom: (f === "inside" ? 0 : -u) + h,
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
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, ti),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ns = /* @__PURE__ */ new WeakSet();
Eo = function() {
  var e;
  Y(this, ke, !1), (e = this.options.afterRender) == null || e.call(this), S(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Dr = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakMap();
To = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakSet();
Uc = function() {
  if (S(this, Dt))
    return !1;
  const t = { ...Oc(), ...S(this, _e).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, X, S(this, _e).reduce((n, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), n.push(s)), n;
  }, [])), Y(this, Dt, t), Y(this, Qs, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Hr = /* @__PURE__ */ new WeakSet();
Vc = function() {
  var A, I;
  const { plugins: e } = this;
  let t = S(this, Dt);
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
      Y(this, ke, !0);
      return;
    }
  }
  const o = Id(this, t, e, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, W) => {
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
  const f = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    f[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: d, footer: p } = t, g = d ? t.headerHeight || l : 0, _ = p ? t.footerHeight || l : 0;
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
      v = 0, Y(this, ke, !0);
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
    rowsMap: f,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: d,
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
  }), Y(this, Lt, E);
};
Ro = /* @__PURE__ */ new WeakSet();
qc = function() {
  (Nt(this, Or, Uc).call(this) || !S(this, Lt)) && Nt(this, Hr, Vc).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = e, l = Math.min(Math.max(0, i - o), this.state.scrollTop), h = Math.floor(l / a), c = l + o, u = Math.min(r.length, Math.ceil(c / a)), f = [], { rowDataGetter: d } = this.options;
  for (let p = h; p < u; p++) {
    const g = r[p];
    g.lazy && d && (g.data = d([g.id])[0], g.lazy = !1), f.push(g);
  }
  return e.visibleRows = f, e.scrollTop = l, e.scrollLeft = n, e;
};
Br.addPlugin = Wc;
Br.removePlugin = Dc;
function Sa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const Od = {
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
}, Hd = he(Od, { buildIn: !0 });
function Bd(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, c) => {
    const u = o ? o.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !Gc.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function zd(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Gc() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (n.call(this, r.id) ? 1 : 0), 0)) : t === e;
}
function Fd() {
  return Object.keys(this.state.checkedRows);
}
function Ud(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ea(e, t, n = !1) {
  return /* @__PURE__ */ y("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ y("label", {}) });
}
const Vd = {
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
    toggleCheckRows: Bd,
    isRowChecked: zd,
    isAllRowChecked: Gc,
    getChecks: Fd,
    toggleCheckable: Ud
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
}, qd = he(Vd);
var jc = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(jc || {});
function ei(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = ei.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ei.call(this, t.parent).level + 1 : 0, t;
}
function Gd(e) {
  return e !== void 0 ? ei.call(this, e) : this.data.nestedMap;
}
function jd(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Yc.call(this)), t) {
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
function Yc() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Kc(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const r = e.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = Kc(e, t, r.children, s + 1)));
  }
  return t;
}
function Xc(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = n, Xc(e, o, n, s);
  }), i;
}
function Jc(e, t, n, s, i) {
  var a;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), o.parent && Jc(e, o.parent, n, s, i);
}
const Yd = {
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
        const r = Xc(this, i, o, s);
        r != null && r.parent && Jc(this, r.parent, o, s, n);
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
    getNestedInfo: Gd,
    toggleRow: jd,
    isAllCollapsed: Yc,
    getNestedRowInfo: ei
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
    ), Kc(this.data.nestedMap), e.sort((t, n) => {
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
}, Kd = he(Yd);
function Zc(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...o } = e, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ y("a", { href: et(i, t.row.data), ...s, ...o, ...a, children: n });
}
function zr(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function Qc(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), uo(n, e, s ?? n));
}
function th(e, t) {
  const { link: n } = t.col.setting, s = Zc(n, t, e[0]);
  return s && (e[0] = s), e;
}
function eh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = zr(n, t, e[0])), e;
}
function nh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function sh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Qc(s, t, e[0], i), e;
}
function No(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : zr(s, t, i);
  return e[0] = {
    html: o
  }, e;
}
const Xd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return No(e, t, !0);
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
    if (n && (e = sh(e, t, n)), e = nh(e, t), e = eh(e, t), s ? e = No(e, t) : e = th(e, t), i) {
      let o = e[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = et(i, t.row.data)), e.push({ attrs: { title: o } });
    }
    return e;
  }
}, Jd = he(Xd, { buildIn: !0 });
function Vi(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ y(Fl, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: f } = n.setting, d = typeof f == "function" ? f(n, t) : f;
    e[0] = /* @__PURE__ */ y("button", { type: "button", className: "btn btn-avatar", ...d, children: [
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
const Zd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Vi
    },
    avatarBtn: {
      onRenderCell: Vi
    },
    avatarName: {
      onRenderCell: Vi
    }
  }
}, Qd = he(Zd, { buildIn: !0 }), tf = {
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
}, ef = he(tf, { buildIn: !0 }), qi = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, nf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    qi(t.left.list), qi(t.center.list), qi(t.right.list);
  }
}, sf = he(nf), of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: jc,
  avatar: Qd,
  checkable: qd,
  colHover: Hd,
  group: sf,
  nested: Kd,
  renderDatetime: Qc,
  renderDatetimeCell: sh,
  renderFormat: zr,
  renderFormatCell: eh,
  renderHtmlCell: No,
  renderLink: Zc,
  renderLinkCell: th,
  renderMapCell: nh,
  rich: Jd,
  sortType: ef
}, Symbol.toStringTag, { value: "Module" }));
class os extends J {
}
os.NAME = "DTable";
os.Component = Br;
os.definePlugin = he;
os.removePlugin = Dc;
os.plugins = of;
var ih = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ma = (e, t, n) => (ih(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ta = (e, t, n, s) => (ih(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Fe;
const af = "nav", Ao = '[data-toggle="tab"]', lf = "active";
class oh extends at {
  constructor() {
    super(...arguments), rf(this, Fe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Ao);
    let i = t ? m(t).first() : s.filter(`.${lf}`);
    if (!i.length && (i = n.find(Ao).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = m(o);
    r.length && (r.parent().children(".tab-pane").removeClass("active in"), r.addClass("active"), Ma(this, Fe) && clearTimeout(Ma(this, Fe)), Ta(this, Fe, setTimeout(() => {
      r.addClass("in"), Ta(this, Fe, 0);
    }, 10)));
  }
}
Fe = /* @__PURE__ */ new WeakMap();
oh.NAME = "Tabs";
m(document).on("click.tabs.zui", Ao, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${af}`);
  n.length && oh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  gl as ActionMenu,
  yl as ActionMenuNested,
  Ul as Avatar,
  Hl as BtnGroup,
  at as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  Yo as CustomRender,
  os as DTable,
  Ac as Dashboard,
  Ht as Dropdown,
  Bl as EventBus,
  au as HElement,
  ul as HtmlContent,
  Vn as Icon,
  wl as Menu,
  rr as Messager,
  ql as Modal,
  Kt as ModalBase,
  Kl as ModalTrigger,
  Jl as Nav,
  Zl as Pager,
  ec as Pick,
  oc as Picker,
  rc as Popovers,
  Il as ProgressCircle,
  V as ReactComponent,
  Ol as Switch,
  At as TIME_DAY,
  oh as Tabs,
  ac as Toolbar,
  $t as Tooltip,
  Cc as Tree,
  Fu as Upload,
  ma as calculateTimestamp,
  m as cash,
  M as classes,
  Jh as convertBytes,
  it as createDate,
  du as createPortal,
  Yt as createRef,
  Kh as deepGet,
  Yh as deepGetPath,
  Ws as delay,
  hf as dom,
  Xh as formatBytes,
  uo as formatDate,
  Ef as formatDateSpan,
  et as formatString,
  Ka as getClassList,
  Mf as getTimeBeforeDesc,
  q as h,
  uf as hh,
  ru as htm,
  Ut as i18n,
  Sf as isDBY,
  ss as isSameDay,
  od as isSameMonth,
  xf as isSameWeek,
  ho as isSameYear,
  $f as isToday,
  Cf as isTomorrow,
  Z as isValidElement,
  kf as isYesterday,
  ua as nativeEvents,
  Un as render,
  cu as renderCustomResult,
  Vu as store,
  Xa as storeData,
  eu as takeData
};
//# sourceMappingURL=zui.js.map
